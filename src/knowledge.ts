import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { LIMITS, clampLimit } from "./limits.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** Package root (works from both src/ via tsx and dist/). */
export const PROJECT_ROOT = join(__dirname, "..");
export const KNOWLEDGE_DIR = join(PROJECT_ROOT, "knowledge");
export const SKILLS_DIR = join(KNOWLEDGE_DIR, "skills");

export type SkillMeta = {
  id: string;
  file: string;
  name: string;
  description: string;
};

let skillsCache: SkillMeta[] | null = null;
let tocCache: string | null = null;
let communityCache: string | null = null;
let sourceReadmeCache: string | null = null;

type FileIndexEntry = { rel: string; path: string; size: number };
let knowledgeFilesCache: FileIndexEntry[] | null = null;
let knowledgeFilesCacheAt = 0;

function readUtf8(path: string): string {
  return readFileSync(path, "utf8");
}

/** Read at most maxBytes (UTF-8); avoids loading huge docs fully into memory. */
function readUtf8Capped(path: string, maxBytes: number): string {
  const buf = readFileSync(path);
  if (buf.length <= maxBytes) return buf.toString("utf8");
  // Avoid splitting a multi-byte code unit at the boundary
  let end = maxBytes;
  while (end > 0 && (buf[end]! & 0xc0) === 0x80) end--;
  return buf.subarray(0, end).toString("utf8");
}

/** Resolve skill body path: bare filename → skills/; path with / → under knowledge/. */
export function resolveSkillPath(meta: SkillMeta): string {
  if (meta.file.includes("/") || meta.file.includes("\\")) {
    return join(KNOWLEDGE_DIR, meta.file);
  }
  return join(SKILLS_DIR, meta.file);
}

export function listSkills(): SkillMeta[] {
  if (skillsCache) return skillsCache;
  const indexPath = join(SKILLS_DIR, "index.json");
  if (!existsSync(indexPath)) {
    throw new Error(`Missing skills index: ${indexPath}`);
  }
  skillsCache = JSON.parse(readUtf8(indexPath)) as SkillMeta[];
  return skillsCache;
}

export function getSkillById(id: string): { meta: SkillMeta; content: string } | null {
  const meta = listSkills().find((s) => s.id === id || s.file === id || s.name === id);
  if (!meta) return null;
  const path = resolveSkillPath(meta);
  if (!existsSync(path)) return null;
  return { meta, content: readUtf8Capped(path, LIMITS.knowledgeReadMaxBytes) };
}

export function getOfficialToc(): string {
  if (tocCache) return tocCache;
  tocCache = readUtf8(join(KNOWLEDGE_DIR, "OFFICIAL-TOC.md"));
  return tocCache;
}

export function getCommunityTools(): string {
  if (communityCache) return communityCache;
  communityCache = readUtf8(join(KNOWLEDGE_DIR, "COMMUNITY-TOOLS.md"));
  return communityCache;
}

export function getSourceReadme(): string {
  if (sourceReadmeCache) return sourceReadmeCache;
  sourceReadmeCache = readUtf8(join(KNOWLEDGE_DIR, "SOURCE-README.md"));
  return sourceReadmeCache;
}

export type KnowledgeHit = {
  source: string;
  id?: string;
  title: string;
  snippet: string;
  score: number;
};

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/[\s,，、。；;|/\\]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

function scoreText(text: string, tokens: string[]): number {
  const lower = text.toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (!t) continue;
    if (lower.includes(t)) {
      score += 2;
      const idx = lower.indexOf(t);
      if (idx >= 0 && idx < 120) score += 1;
    }
  }
  return score;
}

function snippetAround(text: string, tokens: string[], radius = LIMITS.snippetMaxChars): string {
  const maxRadius = Math.min(radius, LIMITS.snippetMaxChars);
  const lower = text.toLowerCase();
  let best = 0;
  for (const t of tokens) {
    const idx = lower.indexOf(t);
    if (idx >= 0) {
      best = idx;
      break;
    }
  }
  const start = Math.max(0, best - 40);
  const end = Math.min(text.length, start + maxRadius);
  let snip = text.slice(start, end).replace(/\s+/g, " ").trim();
  if (start > 0) snip = "…" + snip;
  if (end < text.length) snip = snip + "…";
  if (snip.length > LIMITS.snippetMaxChars + 2) {
    snip = snip.slice(0, LIMITS.snippetMaxChars) + "…";
  }
  return snip;
}

const SEARCHABLE_EXTS = new Set([".md", ".json", ".txt", ".markdown"]);
/** Skip very large blobs / skill bodies already scored via listSkills. */
const SEARCH_SKIP_NAMES = new Set([
  "catalog-raw.json",
  "node-pages.json",
  "nodes.catalog.json",
  "nodes.by_name.json",
  "nodes.json",
]);
/** Directory names to skip (binaries, VCS, deps). */
const SEARCH_SKIP_DIRS = new Set([
  "skills",
  "node_modules",
  ".git",
  "dist",
  ".cache",
  "__pycache__",
]);

function walkKnowledgeFiles(
  dir: string,
  out: FileIndexEntry[],
  depth: number,
): void {
  if (out.length >= LIMITS.knowledgeMaxFiles) return;
  if (depth > LIMITS.knowledgeMaxDepth) return;
  if (!existsSync(dir)) return;
  let names: string[];
  try {
    names = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of names) {
    if (out.length >= LIMITS.knowledgeMaxFiles) return;
    if (name.startsWith(".")) continue;
    if (SEARCH_SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) {
      walkKnowledgeFiles(full, out, depth + 1);
      continue;
    }
    if (!st.isFile()) continue;
    const ext = extname(name).toLowerCase();
    if (!SEARCHABLE_EXTS.has(ext)) continue;
    if (SEARCH_SKIP_NAMES.has(name)) continue;
    if (st.size > LIMITS.knowledgeSkipFileBytes) continue;
    // Skip empty / tiny non-text-looking files by extension already filtered
    out.push({
      rel: relative(KNOWLEDGE_DIR, full).replace(/\\/g, "/"),
      path: full,
      size: st.size,
    });
  }
}

/** Cached file index; refreshes after TTL so new docs appear without restart. */
export function listKnowledgeFiles(force = false): FileIndexEntry[] {
  const now = Date.now();
  if (
    !force &&
    knowledgeFilesCache &&
    now - knowledgeFilesCacheAt < LIMITS.knowledgeIndexTtlMs
  ) {
    return knowledgeFilesCache;
  }
  const out: FileIndexEntry[] = [];
  walkKnowledgeFiles(KNOWLEDGE_DIR, out, 0);
  knowledgeFilesCache = out;
  knowledgeFilesCacheAt = now;
  return out;
}

function titleFromRel(rel: string, text: string): string {
  const heading = text.match(/^#\s+(.+)$/m);
  if (heading) return heading[1]!.trim();
  const base = rel.split("/").pop() ?? rel;
  return base.replace(/\.(md|json|txt|markdown)$/i, "");
}

/** Search skills + knowledge docs (bounded walk/reads) + TOC + community + source readme. */
export function searchKnowledge(query: string, limit: number = LIMITS.searchKnowledgeDefault): KnowledgeHit[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  const cappedLimit = clampLimit(limit, LIMITS.searchKnowledgeDefault, LIMITS.searchKnowledgeMax);
  const hits: KnowledgeHit[] = [];
  const seen = new Set<string>();

  for (const meta of listSkills()) {
    const metaBlob = `${meta.id}\n${meta.name}\n${meta.description}`;
    let score = scoreText(metaBlob, tokens);
    let content = "";
    // Only open skill body when meta looks relevant or score is still low — always cap read size
    const path = resolveSkillPath(meta);
    if (existsSync(path)) {
      try {
        content = readUtf8Capped(path, LIMITS.knowledgeReadMaxBytes);
        score = Math.max(score, scoreText(`${metaBlob}\n${content}`, tokens));
      } catch {
        /* skip unreadable */
      }
    }
    if (score > 0) {
      hits.push({
        source: "skill",
        id: meta.id,
        title: meta.name,
        snippet: snippetAround(content || meta.description, tokens),
        score,
      });
      seen.add(path);
    }
  }

  const toc = getOfficialToc();
  for (const line of toc.split("\n")) {
    const m = line.match(/\*\*(.+?)\*\*\s+`([a-z0-9]+)`\s+(https?:\/\/\S+)/);
    if (!m) continue;
    const [, title, pathId, url] = m;
    const score = scoreText(`${title} ${pathId}`, tokens);
    if (score > 0) {
      hits.push({
        source: "official-toc",
        id: pathId,
        title: title!,
        snippet: `${title} (${pathId}) — ${url}`.slice(0, LIMITS.snippetMaxChars),
        score: score + 1,
      });
    }
  }

  for (const [source, title, text] of [
    ["community", "社区工具对照", getCommunityTools()],
    ["source-readme", "技能草稿总览", getSourceReadme()],
  ] as const) {
    const score = scoreText(text, tokens);
    if (score > 0) {
      hits.push({
        source,
        title,
        snippet: snippetAround(text, tokens),
        score,
      });
    }
  }

  for (const { rel, path } of listKnowledgeFiles()) {
    if (seen.has(path)) continue;
    if (
      rel === "OFFICIAL-TOC.md" ||
      rel === "COMMUNITY-TOOLS.md" ||
      rel === "SOURCE-README.md"
    ) {
      continue;
    }
    let text: string;
    try {
      text = readUtf8Capped(path, LIMITS.knowledgeReadMaxBytes);
    } catch {
      continue;
    }
    const score = scoreText(`${rel}\n${text}`, tokens);
    if (score > 0) {
      const top = rel.split("/")[0] ?? "knowledge";
      hits.push({
        source: `knowledge/${top}`,
        id: rel,
        title: titleFromRel(rel, text),
        snippet: snippetAround(text, tokens),
        score,
      });
    }
  }

  hits.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "zh"));
  return hits.slice(0, cappedLimit);
}

/** Lookup official doc entries from OFFICIAL-TOC.md. */
export function lookupOfficialDoc(query: string, limit: number = 12): KnowledgeHit[] {
  const tokens = tokenize(query);
  const toc = getOfficialToc();
  const hits: KnowledgeHit[] = [];
  const cappedLimit = clampLimit(limit, 12, LIMITS.officialDocMax);
  for (const line of toc.split("\n")) {
    const m = line.match(/(-+)\s+\*\*(.+?)\*\*\s+`([a-z0-9]+)`\s+(https?:\/\/\S+)/);
    if (!m) continue;
    const [, indent, title, pathId, url] = m;
    const depth = Math.floor(indent!.length / 2);
    const score = tokens.length === 0 ? 1 : scoreText(`${title} ${pathId}`, tokens);
    if (score > 0) {
      hits.push({
        source: "official-toc",
        id: pathId,
        title: `${"  ".repeat(Math.max(0, depth - 1))}${title}`,
        snippet: `${url}\ncontent.html: https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/${pathId}/content.html`.slice(
          0,
          LIMITS.snippetMaxChars * 2,
        ),
        score,
      });
    }
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, cappedLimit);
}

/** Reset knowledge caches (tests). */
export function resetKnowledgeCaches(): void {
  skillsCache = null;
  tocCache = null;
  communityCache = null;
  sourceReadmeCache = null;
  knowledgeFilesCache = null;
  knowledgeFilesCacheAt = 0;
}
