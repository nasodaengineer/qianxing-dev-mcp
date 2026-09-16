/**
 * Structured lookup for UI / peripheral / resources catalogs
 * (data/{ui,peripheral,resources}.catalog.json), parallel to lookup_node.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { PROJECT_ROOT } from "./knowledge.js";
import { LIMITS, clampLimit } from "./limits.js";

export type SystemDomain = "ui" | "peripheral" | "resources";

export type SystemItem = {
  id: string;
  name: string;
  kind: string;
  aliases: string[];
  description: string;
  config_fields: string[];
  related_nodes: string[];
  source?: {
    path_id?: string;
    path?: string;
    url?: string;
    detail_url?: string;
  };
  domain: SystemDomain;
};

type RawCatalog = {
  version?: number;
  items?: Array<{
    id?: string;
    name?: string;
    kind?: string;
    aliases?: string[];
    description?: string;
    config_fields?: string[];
    related_nodes?: string[];
    source?: SystemItem["source"];
  }>;
};

const FILE_BY_DOMAIN: Record<SystemDomain, string> = {
  ui: "ui.catalog.json",
  peripheral: "peripheral.catalog.json",
  resources: "resources.catalog.json",
};

const cache: Partial<Record<SystemDomain, SystemItem[]>> = {};
let loadCount = 0;

function loadDomain(domain: SystemDomain): SystemItem[] {
  if (cache[domain]) return cache[domain]!;
  const path = join(PROJECT_ROOT, "data", FILE_BY_DOMAIN[domain]);
  if (!existsSync(path)) {
    cache[domain] = [];
    return cache[domain]!;
  }
  const raw = JSON.parse(readFileSync(path, "utf8")) as RawCatalog;
  loadCount += 1;
  const items = (raw.items ?? []).map((it) => ({
    id: it.id ?? "",
    name: it.name ?? "",
    kind: it.kind ?? "",
    aliases: it.aliases ?? [],
    description: it.description ?? "",
    config_fields: it.config_fields ?? [],
    related_nodes: it.related_nodes ?? [],
    source: it.source,
    domain,
  }));
  cache[domain] = items;
  return items;
}

export function loadSystemItems(domain?: SystemDomain): SystemItem[] {
  if (domain) return loadDomain(domain);
  return [
    ...loadDomain("ui"),
    ...loadDomain("peripheral"),
    ...loadDomain("resources"),
  ];
}

export function systemsLoadCount(): number {
  return loadCount;
}

export function resetSystemsCache(): void {
  for (const k of Object.keys(cache) as SystemDomain[]) delete cache[k];
  loadCount = 0;
}

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/[\s,，、。；;|/\\+]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

function scoreItem(it: SystemItem, tokens: string[]): number {
  const aliasBlob = it.aliases.join(" ");
  const cfg = it.config_fields.join(" ");
  const nodes = it.related_nodes.join(" ");
  const src = `${it.source?.path_id ?? ""} ${it.source?.path ?? ""}`;
  const nameL = it.name.toLowerCase();
  const idL = it.id.toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (!t) continue;
    if (nameL === t || idL === t) score += 20;
    else if (nameL.includes(t) || idL.includes(t)) score += 10;
    if (aliasBlob.toLowerCase().includes(t)) score += 8;
    if (it.kind.toLowerCase().includes(t)) score += 3;
    if (it.description.toLowerCase().includes(t)) score += 3;
    if (cfg.toLowerCase().includes(t)) score += 2;
    if (nodes.toLowerCase().includes(t)) score += 2;
    if (src.toLowerCase().includes(t)) score += 1;
  }
  return score;
}

export function lookupSystem(
  query: string,
  opts: { domain?: SystemDomain; limit?: number } = {},
): SystemItem[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];
  const limit = clampLimit(
    opts.limit,
    LIMITS.lookupSystemDefault,
    LIMITS.lookupSystemMax,
  );
  const pool = loadSystemItems(opts.domain);
  const hits = pool
    .map((it) => ({ it, score: scoreItem(it, tokens) }))
    .filter((x) => x.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score || a.it.name.localeCompare(b.it.name, "zh"),
    );
  const seen = new Set<string>();
  const out: SystemItem[] = [];
  for (const { it } of hits) {
    const key = it.id || `${it.domain}|${it.name}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(it);
    if (out.length >= limit) break;
  }
  return out;
}

/** Structured text block useful for agents (mirrors lookup_node JSON style). */
export function systemItemToJsonFriendly(it: SystemItem): Record<string, unknown> {
  return {
    id: it.id || undefined,
    name: it.name,
    domain: it.domain,
    kind: it.kind || undefined,
    aliases: it.aliases.length ? it.aliases : undefined,
    description: it.description || undefined,
    config_fields: it.config_fields.length ? it.config_fields : undefined,
    related_nodes: it.related_nodes.length ? it.related_nodes : undefined,
    path_id: it.source?.path_id || undefined,
    path: it.source?.path || undefined,
    official_url: it.source?.url || undefined,
    detail_url: it.source?.detail_url || undefined,
  };
}

/** Human-readable multi-line summary for a hit. */
export function formatSystemHit(it: SystemItem): string {
  const lines = [
    `### ${it.name} (\`${it.id}\`)`,
    `- domain: ${it.domain} | kind: ${it.kind}`,
    it.aliases.length ? `- aliases: ${it.aliases.join(", ")}` : "",
    it.description ? `- desc: ${it.description}` : "",
    it.config_fields.length
      ? `- config: ${it.config_fields.join("; ")}`
      : "",
    it.related_nodes.length
      ? `- related_nodes: ${it.related_nodes.join(", ")}`
      : "",
    it.source?.path_id
      ? `- source: path_id=${it.source.path_id}${it.source.url ? ` url=${it.source.url}` : ""}`
      : "",
  ];
  return lines.filter(Boolean).join("\n");
}

/**
 * Collect generate_logic hint lines when goal mentions UI scoreboard / timer / shop.
 */
export function generateSystemHints(goal: string): string[] {
  const hints: string[] = [];
  const g = goal.toLowerCase();
  const wantScore =
    /计分板|分数板|scoreboard|排行.?ui|分数.?ui|ui.?分/.test(goal) ||
    /scoreboard/.test(g);
  const wantTimerUi =
    /计时器.?界面|计时器.?控件|倒计时.?ui|timer.?ui|正计时/.test(goal) ||
    (/计时器|倒计时/.test(goal) && /界面|控件|ui|显示/.test(goal));
  const wantShop =
    /商店|shop|买卖|购买|出售/.test(goal) || /shop/.test(g);

  if (wantScore) {
    const hits = lookupSystem("计分板", { domain: "ui", limit: 1 });
    const h = hits[0];
    if (h) {
      hints.push(
        `UI 计分板：在界面布局添加「${h.name}」，绑定预定义自定义变量（${(h.config_fields || []).slice(0, 3).join(" / ")}）。详见 lookup_system { domain: "ui", query: "计分板" }。`,
      );
      if (h.related_nodes.length) {
        hints.push(`相关节点：${h.related_nodes.join("、")}`);
      }
    }
  }
  if (wantTimerUi) {
    const hits = lookupSystem("计时器界面", { domain: "ui", limit: 1 });
    const h = hits[0];
    if (h) {
      hints.push(
        `UI 计时器：布局中添加「${h.name}」，指定预定义全局计时器与来源实体。详见 lookup_system { domain: "ui", query: "计时器" }。`,
      );
      if (h.related_nodes.length) {
        hints.push(`相关节点：${h.related_nodes.slice(0, 4).join("、")}`);
      }
    }
  }
  if (wantShop) {
    const hits = lookupSystem("商店", { domain: "resources", limit: 2 });
    for (const h of hits) {
      if (h.id.includes("shop")) {
        hints.push(
          `商店：配置「${h.name}」模板并挂商店组件；运行时用「打开商店」等节点。详见 lookup_system { domain: "resources", query: "商店" }。`,
        );
        if (h.related_nodes.length) {
          hints.push(
            `相关节点：${h.related_nodes.slice(0, 6).join("、")}${h.related_nodes.length > 6 ? "…" : ""}`,
          );
        }
        break;
      }
    }
  }
  return hints;
}
