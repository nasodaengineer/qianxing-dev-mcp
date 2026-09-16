# Performance & memory guarantees

This document lists the runtime bounds enforced by `qianxing-dev-mcp` so MCP
tool calls cannot unbounded-grow memory or hang the process.

## Catalog / index loading

| Data | Behavior |
|------|----------|
| `data/nodes.catalog.json` (or node-index / `nodes.json` fallback) | **Lazy-loaded once** per process; kept in memory. Subsequent `lookup_node` / `list_nodes` reuse the cache (no re-parse). |
| Patterns `catalog.json` | Lazy-loaded once; `clearPatternsCache()` / `patternsLoadCount()` for tests. |
| Systems `data/{ui,peripheral,resources}.catalog.json` | Lazy-loaded **once per domain**; `resetSystemsCache()` / `systemsLoadCount()` for tests. |
| Skills `index.json` | Lazy-loaded once. |
| Knowledge TOC / community / source readme | Lazy-loaded once each. |
| Knowledge file **index** (paths only) | Cached with **30s TTL**; re-walk after TTL so new docs appear without restart. Does **not** keep file bodies in the index. |
| Pattern period notes (`data/patterns/N-N.md`) | Read on demand; **path-sanitized** (digits only); body capped at **512 KB**. |

## Search & list limits (clamped)

| API | Default | Max |
|-----|---------|-----|
| `lookup_node` | 10 | 50 |
| `list_nodes` | 100 | 500 |
| `search_knowledge` | 8 | 50 |
| `lookup_official_doc` | 12 | 40 |
| `list_patterns` | 200 | 200 |
| `lookup_system` | 8 | 40 |

User-supplied `limit` values are clamped with `clampLimit()` (`src/limits.ts`).

## `search_knowledge` I/O bounds

- Walk depth ≤ **8**; indexed files ≤ **2000**.
- Skip `node_modules`, `.git`, `dist`, `skills` (skills scored via index), hidden dirs.
- Only `.md` / `.json` / `.txt` / `.markdown`; skip known huge blobs (`catalog-raw.json`, `node-pages.json`, …).
- Skip files larger than **2 MB**.
- Per-file read capped at **512 KB** (UTF-8 safe truncation).
- Snippet length capped at **240** characters.
- Does **not** load the entire knowledge tree into one string.

## Child processes (`compile_project`)

- `spawnSync` with **`shell: false`** and fixed argv (`npm run build` or `npx --yes gsts`) — no shell interpolation of paths.
- **Timeout** default 120s; **maxBuffer** 8 MB.
- stdout/stderr returned to the client truncated to **20k** chars each.
- `cwd` is the resolved project directory only.

## Path safety (writes / reads)

- `resolveSafeDir`: reject empty / null-byte paths; normalize + resolve.
- Scaffold writes go through `writeUnder` + `assertUnderDir` so relative names cannot escape the target directory (`..` in relative file segments rejected).
- `compile_project` / `project_status` reject unsafe paths with a clear error result.
- `get_pattern` period notes: only `N.N` / `N-N` codes; resolved path must stay under patterns dirs (no `../` escape).

## Caches & leaks

- Fixed number of module-level caches (nodes, patterns, systems×3 domains, skills, a few markdown docs, knowledge path index). No unbounded Map growth.
- No long-lived timers; compile uses `spawnSync` timeout (no manual `setInterval`).
- Test helpers: `resetNodesCache()`, `resetKnowledgeCaches()`, `clearPatternsCache()`, `resetSystemsCache()`.

## Residual risks

- The full node catalog (~1.5 MB JSON → in-memory records) stays resident after first use — intentional for lookup latency.
- UI / peripheral / resources catalogs stay resident after first use per domain (small vs nodes; intentional).
- Extremely large skill/doc trees still incur CPU on each search (bounded reads, but O(files) within caps).
- `scaffold_project` may write to any resolved absolute directory the host allows; callers should pass intentional paths.
