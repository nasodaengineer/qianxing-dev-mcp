/**
 * Load reusable UGC development patterns from data/patterns/catalog.json
 * and per-period notes under data/patterns/{period}.md
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { PROJECT_ROOT } from "./knowledge.js";
import { LIMITS, clampLimit } from "./limits.js";

export type PatternRecipe = {
  id: string;
  title: string;
  steps: string[];
  related_nodes: string[];
  related_components: string[];
  source_periods: string[];
};

export type PatternCatalog = {
  version: number;
  updated?: string;
  description?: string;
  recipe_count?: number;
  recipes: PatternRecipe[];
};

const DATA_PATTERNS = join(PROJECT_ROOT, "data", "patterns");
const KNOW_PATTERNS = join(PROJECT_ROOT, "knowledge", "miyoushe", "patterns");

let catalogCache: PatternCatalog | null = null;

function readUtf8(path: string): string {
  return readFileSync(path, "utf8");
}

export function patternsDir(): string {
  if (existsSync(join(DATA_PATTERNS, "catalog.json"))) return DATA_PATTERNS;
  if (existsSync(join(KNOW_PATTERNS, "catalog.json"))) return KNOW_PATTERNS;
  return DATA_PATTERNS;
}

export function loadCatalog(): PatternCatalog {
  if (catalogCache) return catalogCache;
  const path = join(patternsDir(), "catalog.json");
  if (!existsSync(path)) {
    catalogCache = { version: 0, recipes: [] };
    return catalogCache;
  }
  catalogCache = JSON.parse(readUtf8(path)) as PatternCatalog;
  if (!Array.isArray(catalogCache.recipes)) catalogCache.recipes = [];
  return catalogCache;
}

/** Clear cache (tests / hot reload). */
export function clearPatternsCache(): void {
  catalogCache = null;
}

export function listPatterns(filter?: string, limit?: number): PatternRecipe[] {
  const recipes = loadCatalog().recipes;
  const max = clampLimit(limit, LIMITS.listPatternsMax, LIMITS.listPatternsMax);
  let out: PatternRecipe[];
  if (!filter || !filter.trim()) {
    out = recipes;
  } else {
    const q = filter.toLowerCase().trim();
    out = recipes.filter((r) => {
      const blob = [
        r.id,
        r.title,
        ...(r.steps || []),
        ...(r.related_nodes || []),
        ...(r.related_components || []),
        ...(r.source_periods || []),
      ]
        .join("\n")
        .toLowerCase();
      return blob.includes(q) || q.split(/\s+/).every((t) => blob.includes(t));
    });
  }
  return out.length > max ? out.slice(0, max) : out;
}

export function getPatternById(id: string): PatternRecipe | null {
  const key = id.trim();
  const recipes = loadCatalog().recipes;
  return (
    recipes.find(
      (r) =>
        r.id === key ||
        r.id.toLowerCase() === key.toLowerCase() ||
        r.title === key,
    ) ?? null
  );
}

export function getPeriodNote(period: string): string | null {
  const code = period.trim().replace(/^period[_-]?/i, "");
  const fname = `${code.replace(/\./g, "-")}.md`;
  for (const dir of [patternsDir(), KNOW_PATTERNS, DATA_PATTERNS]) {
    const path = join(dir, fname);
    if (existsSync(path)) return readUtf8(path);
  }
  return null;
}

export function listPeriodNoteIds(): string[] {
  const dir = patternsDir();
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md") && /^\d+-\d+\.md$/.test(f))
    .map((f) => f.replace(/\.md$/, "").replace("-", "."))
    .sort((a, b) => {
      const [a1, a2] = a.split(".").map(Number);
      const [b1, b2] = b.split(".").map(Number);
      return a1 - b1 || a2 - b2;
    });
}

export function formatRecipe(r: PatternRecipe): string {
  const steps = r.steps.map((s, i) => `${i + 1}. ${s}`).join("\n");
  const nodes =
    r.related_nodes.length > 0
      ? r.related_nodes.map((n) => `- \`${n}\``).join("\n")
      : "- （无）";
  const comps =
    r.related_components.length > 0
      ? r.related_components.map((c) => `- **${c}**`).join("\n")
      : "- （无）";
  return [
    `# ${r.title} (\`${r.id}\`)`,
    "",
    "## Steps",
    steps,
    "",
    "## Related nodes",
    nodes,
    "",
    "## Related components",
    comps,
    "",
    `## Source periods`,
    r.source_periods.map((p) => `- ${p}`).join("\n") || "- （无）",
  ].join("\n");
}
