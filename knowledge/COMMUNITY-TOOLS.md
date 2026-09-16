# Community tools research (2026-09-16)

## Official
- Guide hub: https://act.mihoyo.com/ys/ugc/tutorial/
- Catalog CDN: https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/catalog.json
- Content: https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/zh-cn/{path_id}/content.html
- In-editor logic today = visual **节点图** (server/client). Ver 7.1 (preview ~2026-09-23) announces **client script module** + collab edit + new controls — official script docs not fully public yet.

## Community (open source)
1. **josStorer/genshin-ts** (MIT) — https://github.com/josStorer/genshin-ts — docs https://gsts.moe/
   - TypeScript → `.gs.ts` → IR `.json` → injectable `.gia`
   - CLI: `gsts` / `npm create genshin-ts@latest` / `npm run build|dev`
   - API style: `g.server(...).on(...)`, timers, inject into local maps
   - AI-oriented templates: CLAUDE.md / AGENTS.md in template

2. **Wu-Yijun/Genshin-Impact-Miliastra-Wonderland-Code-Node-Editor-Pack**
   - https://github.com/Wu-Yijun/Genshin-Impact-Miliastra-Wonderland-Code-Node-Editor-Pack
   - GIA read/write, DSL↔IR↔GIA, 500+ node defs, Graph API, protobuf tooling
   - Underlying format research used by other toolchains

3. **AyayaXiaowang/Ayaya_Miliastra_Editor**
   - https://github.com/AyayaXiaowang/Ayaya_Miliastra_Editor
   - Offline sandbox + Python Graph Code → validate → export `.gil`/`.gia`
   - HTML UI source → `.gil`

## MCP positioning
- Primary: knowledge MCP for assistants (docs index, skill recipes, fault trees, workflow advice).
- Secondary: optional thin wrappers / pointers to genshin-ts CLI when installed locally — do NOT vendor reverse-engineered game binaries; prefer documenting how to call community CLIs.
- Do not claim to inject into user's live game without explicit local paths they configure.
