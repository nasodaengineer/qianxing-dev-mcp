import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

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

function readUtf8(path: string): string {
  return readFileSync(path, "utf8");
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
  const path = join(SKILLS_DIR, meta.file);
  if (!existsSync(path)) return null;
  return { meta, content: readUtf8(path) };
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
      // bonus for title-ish early occurrence
      const idx = lower.indexOf(t);
      if (idx >= 0 && idx < 120) score += 1;
    }
  }
  return score;
}

function snippetAround(text: string, tokens: string[], radius = 160): string {
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
  const end = Math.min(text.length, start + radius);
  let snip = text.slice(start, end).replace(/\s+/g, " ").trim();
  if (start > 0) snip = "…" + snip;
  if (end < text.length) snip = snip + "…";
  return snip;
}

/** Search skills + TOC + community + source readme. */
export function searchKnowledge(query: string, limit = 8): KnowledgeHit[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  const hits: KnowledgeHit[] = [];

  for (const meta of listSkills()) {
    const full = getSkillById(meta.id);
    if (!full) continue;
    const blob = `${meta.id}\n${meta.name}\n${meta.description}\n${full.content}`;
    const score = scoreText(blob, tokens);
    if (score > 0) {
      hits.push({
        source: "skill",
        id: meta.id,
        title: meta.name,
        snippet: snippetAround(full.content, tokens),
        score,
      });
    }
  }

  const toc = getOfficialToc();
  // Score each TOC line that looks like an entry
  for (const line of toc.split("\n")) {
    const m = line.match(/\*\*(.+?)\*\*\s+`([a-z0-9]+)`\s+(https?:\/\/\S+)/);
    if (!m) continue;
    const [, title, pathId, url] = m;
    const score = scoreText(`${title} ${pathId}`, tokens);
    if (score > 0) {
      hits.push({
        source: "official-toc",
        id: pathId,
        title,
        snippet: `${title} (${pathId}) — ${url}`,
        score: score + 1, // slight TOC boost for doc lookup
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

  hits.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "zh"));
  return hits.slice(0, Math.max(1, Math.min(limit, 50)));
}

/** Lookup official doc entries from OFFICIAL-TOC.md. */
export function lookupOfficialDoc(query: string, limit = 12): KnowledgeHit[] {
  const tokens = tokenize(query);
  const toc = getOfficialToc();
  const hits: KnowledgeHit[] = [];
  for (const line of toc.split("\n")) {
    const m = line.match(/(-+)\s+\*\*(.+?)\*\*\s+`([a-z0-9]+)`\s+(https?:\/\/\S+)/);
    if (!m) continue;
    const [, indent, title, pathId, url] = m;
    const depth = Math.floor(indent.length / 2);
    const score = tokens.length === 0 ? 1 : scoreText(`${title} ${pathId}`, tokens);
    if (score > 0) {
      hits.push({
        source: "official-toc",
        id: pathId,
        title: `${"  ".repeat(Math.max(0, depth - 1))}${title}`,
        snippet: `${url}\ncontent.html: https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/${pathId}/content.html`,
        score,
      });
    }
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, Math.max(1, Math.min(limit, 40)));
}
