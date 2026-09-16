/**
 * Structured node lookup.
 * Prefer data/nodes.catalog.json (rich params/descriptions) when present;
 * fall back to knowledge/nodes/node-index.json, then data/nodes.json.
 * Catalog JSON is loaded once and cached for the process lifetime.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { PROJECT_ROOT, KNOWLEDGE_DIR } from "./knowledge.js";
import { LIMITS, clampLimit } from "./limits.js";

export type NodeSide = "server" | "client" | "unknown";

export type NodeParam = {
  name: string;
  type: string;
  direction: "in" | "out" | string;
  notes?: string;
};

export type NodeRecord = {
  name: string;
  desc: string;
  side: NodeSide;
  category: string;
  catalog_path: string[];
  section: string;
  params: NodeParam[] | unknown[];
  path_id: string;
  page_title: string;
  /** Stable id from catalog when available */
  id?: string;
  aliases?: string[];
  graphKinds?: string[];
  official_url?: string;
};

let cache: NodeRecord[] | null = null;
let cacheSource: string | null = null;
/** How many times the catalog file was read/parsed (tests: expect 1 after warm). */
let loadCount = 0;

function sideFromPath(path: string[]): NodeSide {
  if (path.includes("服务器节点")) return "server";
  if (path.includes("客户端节点")) return "client";
  return "unknown";
}

function categoryFromPath(path: string[]): string {
  if (path.length === 0) return "";
  return path[path.length - 1] ?? path[2] ?? "";
}

/** Map catalog category slug → Chinese page title style for list filters. */
const CATEGORY_LABEL: Record<string, string> = {
  execute: "执行节点",
  event: "事件节点",
  query: "查询节点",
  compute: "运算节点",
  flow: "流程控制节点",
  other: "其它节点",
};

function loadFromCatalog(raw: {
  nodes?: Array<{
    id?: string;
    name?: string;
    aliases?: string[];
    side?: string;
    graphKinds?: string[];
    category?: string;
    section?: string;
    description?: string;
    params?: NodeParam[];
    source?: {
      path_id?: string;
      url?: string;
      catalog_path?: string[];
      page_title?: string;
    };
  }>;
}): NodeRecord[] {
  const nodes = raw.nodes ?? [];
  return nodes.map((n) => {
    const catalog_path = n.source?.catalog_path ?? [];
    const catSlug = n.category ?? "";
    const page_title =
      n.source?.page_title || CATEGORY_LABEL[catSlug] || categoryFromPath(catalog_path);
    const side = (n.side as NodeSide) || sideFromPath(catalog_path);
    return {
      id: n.id,
      name: n.name ?? "",
      aliases: n.aliases ?? [],
      desc: n.description ?? "",
      side,
      category: catSlug || page_title,
      catalog_path,
      section: n.section ?? "",
      params: n.params ?? [],
      path_id: n.source?.path_id ?? "",
      page_title,
      graphKinds: n.graphKinds ?? [],
      official_url: n.source?.url,
    };
  });
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

  const catalogPath = join(PROJECT_ROOT, "data", "nodes.catalog.json");
  const primary = join(KNOWLEDGE_DIR, "nodes", "node-index.json");
  const fallback = join(PROJECT_ROOT, "data", "nodes.json");

  if (existsSync(catalogPath)) {
    const raw = JSON.parse(readFileSync(catalogPath, "utf8")) as {
      nodes?: unknown[];
    };
    loadCount += 1;
    if (Array.isArray(raw.nodes) && raw.nodes.length > 0) {
      cache = loadFromCatalog(raw as Parameters<typeof loadFromCatalog>[0]);
      cacheSource = catalogPath;
      return cache;
    }
  }

  if (existsSync(primary)) {
    const raw = JSON.parse(readFileSync(primary, "utf8")) as {
      flat?: unknown[];
      nodes?: NodeRecord[];
    };
    loadCount += 1;
    if (Array.isArray(raw.flat)) {
      cache = loadFromFlatIndex(raw as Parameters<typeof loadFromFlatIndex>[0]);
    } else if (Array.isArray(raw.nodes)) {
      cache = raw.nodes;
    } else {
      cache = [];
    }
    cacheSource = primary;
  } else if (existsSync(fallback)) {
    const raw = JSON.parse(readFileSync(fallback, "utf8")) as {
      nodes?: NodeRecord[];
      flat?: unknown[];
    };
    loadCount += 1;
    cache = raw.nodes ?? loadFromFlatIndex(raw as Parameters<typeof loadFromFlatIndex>[0]);
    cacheSource = fallback;
  } else {
    cache = [];
    cacheSource = null;
  }
  return cache;
}

/** Which file currently backs loadNodes (tests / diagnose). */
export function nodesCacheSource(): string | null {
  loadNodes();
  return cacheSource;
}

/** Number of times catalog/index JSON was read from disk (tests). */
export function nodesLoadCount(): number {
  return loadCount;
}

/** Reset cache (tests). */
export function resetNodesCache(): void {
  cache = null;
  cacheSource = null;
  loadCount = 0;
}

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/[\s,，、。；;|/\\+]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

function scoreNode(n: NodeRecord, tokens: string[]): number {
  const aliasBlob = (n.aliases ?? []).join(" ");
  const gk = (n.graphKinds ?? []).join(" ");
  const blob =
    `${n.name}\n${aliasBlob}\n${n.desc}\n${n.category}\n${n.page_title}\n${n.section}\n${gk}\n${n.catalog_path.join(" ")}`.toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (!t) continue;
    if (n.name.toLowerCase() === t) score += 20;
    else if (n.name.toLowerCase().includes(t)) score += 10;
    if (aliasBlob.toLowerCase().includes(t)) score += 8;
    if (n.desc.toLowerCase().includes(t)) score += 3;
    if (n.category.toLowerCase().includes(t)) score += 2;
    if (n.page_title.toLowerCase().includes(t)) score += 2;
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
  const limit = clampLimit(opts.limit, LIMITS.lookupNodeDefault, LIMITS.lookupNodeMax);
  const hits = loadNodes()
    .filter((n) => (side === "any" ? true : n.side === side))
    .map((n) => ({ n, score: scoreNode(n, tokens) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.n.name.localeCompare(b.n.name, "zh"));
  const seen = new Set<string>();
  const out: NodeRecord[] = [];
  for (const { n } of hits) {
    const key = `${n.side}|${n.name}|${n.category}|${(n.graphKinds ?? []).join(",")}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(n);
    if (out.length >= limit) break;
  }
  return out;
}

export function listNodes(
  opts: {
    category?: string;
    side?: "server" | "client" | "any";
    prefix?: string;
    limit?: number;
  } = {},
): NodeRecord[] {
  const side = opts.side ?? "any";
  const prefix = (opts.prefix ?? "").toLowerCase();
  const category = (opts.category ?? "").toLowerCase();
  const limit = clampLimit(opts.limit, LIMITS.listNodesDefault, LIMITS.listNodesMax);
  const seen = new Set<string>();
  const out: NodeRecord[] = [];
  for (const n of loadNodes()) {
    if (side !== "any" && n.side !== side) continue;
    if (prefix && !n.name.toLowerCase().startsWith(prefix) && !n.name.includes(opts.prefix!)) {
      if (!n.name.toLowerCase().includes(prefix)) continue;
    }
    if (category) {
      const label = CATEGORY_LABEL[n.category] ?? "";
      const catBlob =
        `${n.category} ${label} ${n.catalog_path.join(" ")} ${n.page_title} ${(n.graphKinds ?? []).join(" ")}`.toLowerCase();
      if (!catBlob.includes(category)) continue;
    }
    const key = `${n.side}|${n.name}|${(n.graphKinds ?? []).join(",")}`;
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
    id: n.id || undefined,
    name: n.name,
    aliases: n.aliases?.length ? n.aliases : undefined,
    side: n.side,
    category: n.category,
    graphKinds: n.graphKinds?.length ? n.graphKinds : undefined,
    description: n.desc,
    section: n.section || undefined,
    params: n.params?.length ? n.params : undefined,
    catalog_path: n.catalog_path,
    path_id: n.path_id || undefined,
    page_title: n.page_title || undefined,
    official_url: n.official_url || undefined,
  };
}
