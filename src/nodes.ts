/**
 * Structured node lookup against knowledge/nodes/node-index.json (1275 nodes).
 * Falls back to data/nodes.json if the knowledge index is missing.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { PROJECT_ROOT, KNOWLEDGE_DIR } from "./knowledge.js";

export type NodeSide = "server" | "client" | "unknown";

export type NodeRecord = {
  name: string;
  desc: string;
  side: NodeSide;
  category: string;
  catalog_path: string[];
  section: string;
  params: unknown[];
  path_id: string;
  page_title: string;
};

let cache: NodeRecord[] | null = null;

function sideFromPath(path: string[]): NodeSide {
  if (path.includes("服务器节点")) return "server";
  if (path.includes("客户端节点")) return "client";
  return "unknown";
}

function categoryFromPath(path: string[]): string {
  if (path.length === 0) return "";
  // Prefer leaf (page_title style) then graph-type folder
  return path[path.length - 1] ?? path[2] ?? "";
}

function loadFromFlatIndex(raw: {
  flat?: Array<{
    name?: string;
    desc?: string;
    section?: string;
    params?: unknown[];
    catalog_path?: string[];
    path_id?: string;
    page_title?: string;
  }>;
}): NodeRecord[] {
  const flat = raw.flat ?? [];
  return flat.map((n) => {
    const catalog_path = n.catalog_path ?? [];
    return {
      name: n.name ?? "",
      desc: n.desc ?? "",
      side: sideFromPath(catalog_path),
      category: n.page_title || categoryFromPath(catalog_path),
      catalog_path,
      section: n.section ?? "",
      params: n.params ?? [],
      path_id: n.path_id ?? "",
      page_title: n.page_title ?? "",
    };
  });
}

export function loadNodes(): NodeRecord[] {
  if (cache) return cache;
  const primary = join(KNOWLEDGE_DIR, "nodes", "node-index.json");
  const fallback = join(PROJECT_ROOT, "data", "nodes.json");
  if (existsSync(primary)) {
    const raw = JSON.parse(readFileSync(primary, "utf8")) as {
      flat?: unknown[];
      nodes?: NodeRecord[];
    };
    if (Array.isArray(raw.flat)) {
      cache = loadFromFlatIndex(raw as Parameters<typeof loadFromFlatIndex>[0]);
    } else if (Array.isArray(raw.nodes)) {
      cache = raw.nodes;
    } else {
      cache = [];
    }
  } else if (existsSync(fallback)) {
    const raw = JSON.parse(readFileSync(fallback, "utf8")) as {
      nodes?: NodeRecord[];
      flat?: unknown[];
    };
    cache = raw.nodes ?? loadFromFlatIndex(raw as Parameters<typeof loadFromFlatIndex>[0]);
  } else {
    cache = [];
  }
  return cache;
}

/** Reset cache (tests). */
export function resetNodesCache(): void {
  cache = null;
}

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/[\s,，、。；;|/\\+]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

function scoreNode(n: NodeRecord, tokens: string[]): number {
  const blob = `${n.name}\n${n.desc}\n${n.category}\n${n.section}\n${n.catalog_path.join(" ")}`.toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (!t) continue;
    if (n.name.toLowerCase() === t) score += 20;
    else if (n.name.toLowerCase().includes(t)) score += 10;
    if (n.desc.toLowerCase().includes(t)) score += 3;
    if (n.category.toLowerCase().includes(t)) score += 2;
    if (blob.includes(t)) score += 1;
  }
  return score;
}

export function lookupNodes(
  query: string,
  opts: { side?: "server" | "client" | "any"; limit?: number } = {},
): NodeRecord[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  const side = opts.side ?? "any";
  const limit = Math.max(1, Math.min(opts.limit ?? 10, 50));
  const hits = loadNodes()
    .filter((n) => (side === "any" ? true : n.side === side))
    .map((n) => ({ n, score: scoreNode(n, tokens) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.n.name.localeCompare(b.n.name, "zh"));
  // de-dupe by name+side+category keeping best score
  const seen = new Set<string>();
  const out: NodeRecord[] = [];
  for (const { n } of hits) {
    const key = `${n.side}|${n.name}|${n.category}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(n);
    if (out.length >= limit) break;
  }
  return out;
}

export function listNodes(opts: {
  category?: string;
  side?: "server" | "client" | "any";
  prefix?: string;
  limit?: number;
} = {}): NodeRecord[] {
  const side = opts.side ?? "any";
  const prefix = (opts.prefix ?? "").toLowerCase();
  const category = (opts.category ?? "").toLowerCase();
  const limit = Math.max(1, Math.min(opts.limit ?? 100, 500));
  const seen = new Set<string>();
  const out: NodeRecord[] = [];
  for (const n of loadNodes()) {
    if (side !== "any" && n.side !== side) continue;
    if (prefix && !n.name.toLowerCase().startsWith(prefix) && !n.name.includes(opts.prefix!)) {
      // allow Chinese prefix via includes when startsWith fails on mixed scripts
      if (!n.name.toLowerCase().includes(prefix)) continue;
    }
    if (category) {
      const catBlob = `${n.category} ${n.catalog_path.join(" ")} ${n.page_title}`.toLowerCase();
      if (!catBlob.includes(category)) continue;
    }
    const key = `${n.side}|${n.name}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(n);
    if (out.length >= limit) break;
  }
  out.sort((a, b) => a.name.localeCompare(b.name, "zh"));
  return out;
}

export function nodeToJsonFriendly(n: NodeRecord): Record<string, unknown> {
  return {
    name: n.name,
    side: n.side,
    category: n.category,
    description: n.desc,
    section: n.section || undefined,
    params: n.params?.length ? n.params : undefined,
    catalog_path: n.catalog_path,
    path_id: n.path_id || undefined,
    page_title: n.page_title || undefined,
  };
}
