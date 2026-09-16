/**
 * Shared clamps and perf/memory bounds for MCP tool responses and I/O.
 */

export const LIMITS = {
  /** lookup_node default / max */
  lookupNodeDefault: 10,
  lookupNodeMax: 50,
  /** list_nodes default / max */
  listNodesDefault: 100,
  listNodesMax: 500,
  /** search_knowledge default / max */
  searchKnowledgeDefault: 8,
  searchKnowledgeMax: 50,
  /** lookup_official_doc max */
  officialDocMax: 40,
  /** list_patterns max recipes returned */
  listPatternsMax: 200,
  /** lookup_system default / max */
  lookupSystemDefault: 8,
  lookupSystemMax: 40,
  /** knowledge walk */
  knowledgeMaxDepth: 8,
  knowledgeMaxFiles: 2000,
  /** per-file bytes read during search (not full load of huge md/json) */
  knowledgeReadMaxBytes: 512_000,
  /** skip files larger than this entirely */
  knowledgeSkipFileBytes: 2_000_000,
  /** snippet length cap */
  snippetMaxChars: 240,
  /** file-list cache TTL (ms); re-walk after so new docs appear without restart */
  knowledgeIndexTtlMs: 30_000,
  /** compile child process */
  compileTimeoutMs: 120_000,
  compileMaxBuffer: 8 * 1024 * 1024,
  /** stdout/stderr returned to client */
  compileOutputChars: 20_000,
  /** project file listing caps */
  projectListMaxFiles: 200,
  distListMaxFiles: 500,
} as const;

/** Clamp a user-supplied limit into [1, max], with default when missing/NaN. */
export function clampLimit(
  value: number | undefined,
  defaultValue: number,
  max: number,
): number {
  if (value === undefined || value === null || Number.isNaN(Number(value))) {
    return Math.max(1, Math.min(defaultValue, max));
  }
  const n = Math.floor(Number(value));
  if (!Number.isFinite(n)) return Math.max(1, Math.min(defaultValue, max));
  return Math.max(1, Math.min(n, max));
}
