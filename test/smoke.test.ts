/**
 * Smoke tests for development-first qianxing-dev-mcp.
 */
import assert from "node:assert/strict";
import { mkdtempSync, existsSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  listSkills,
  searchKnowledge,
  listKnowledgeFiles,
  resetKnowledgeCaches,
} from "../src/knowledge.js";
import {
  listPatterns,
  getPatternById,
  loadCatalog,
  getPeriodNote,
  sanitizePeriodCode,
  clearPatternsCache,
  patternsLoadCount,
} from "../src/patterns.js";
import {
  loadNodes,
  lookupNodes,
  listNodes,
  nodesCacheSource,
  resetNodesCache,
  nodesLoadCount,
  getNodeByName,
  formatNodeCatalogLine,
} from "../src/nodes.js";
import { LIMITS, clampLimit } from "../src/limits.js";
import {
  resolveSafeDir,
  assertUnderDir,
  UnsafePathError,
  scaffoldProject,
} from "../src/project.js";
import {
  handleGenerateLogic,
  handleLookupNode,
  handleListNodes,
  handleScaffoldProject,
  handleProjectStatus,
  handleDiagnose,
  handlers,
} from "../src/handlers.js";
import { generateLogic } from "../src/generate.js";
import {
  lookupSystem,
  loadSystemItems,
  resetSystemsCache,
  systemsLoadCount,
} from "../src/systems.js";

function extractText(result: { content: { type: string; text: string }[] }): string {
  return result.content.map((c) => c.text).join("\n");
}

// --- nodes ---
resetNodesCache();
const nodes = loadNodes();
assert.ok(nodes.length >= 1275, `expected >=1275 nodes, got ${nodes.length}`);
assert.equal(nodesLoadCount(), 1, "first loadNodes should read disk once");

// cache hit: further loads must not re-read JSON
loadNodes();
loadNodes();
lookupNodes("碰撞", { limit: 3 });
listNodes({ limit: 5 });
assert.equal(nodesLoadCount(), 1, "catalog must stay cached (loadCount===1)");

const lookupHits = lookupNodes("进入碰撞", { side: "server", limit: 5 });
assert.ok(lookupHits.length >= 1, "lookup 进入碰撞 should hit");
assert.ok(
  lookupHits.some((n) => n.name.includes("碰撞") || n.desc.includes("碰撞")),
  "hit should relate to collision",
);

const lookupTool = handleLookupNode({ query: "结算", limit: 5 });
const lookupJson = JSON.parse(extractText(lookupTool));
assert.ok(lookupJson.count >= 1, "lookup_node tool should return hits");
assert.ok(Array.isArray(lookupJson.nodes));

const listed = handleListNodes({ side: "server", prefix: "设置", limit: 20 });
const listJson = JSON.parse(extractText(listed));
assert.ok(listJson.count >= 1, "list_nodes should return names");

// Rich catalog params (data/nodes.catalog.json)
resetNodesCache();
const rich = lookupNodes("打印字符串", { side: "server", limit: 3 });
assert.ok(rich.length >= 1 && rich[0]!.name === "打印字符串");
assert.ok(Array.isArray(rich[0]!.params) && rich[0]!.params.length >= 1, "打印字符串 should have params");
const setVar = lookupNodes("设置自定义变量", { side: "server", limit: 1 });
assert.ok((setVar[0]?.params?.length ?? 0) >= 3, "设置自定义变量 should have params");
const coll = lookupNodes("进入碰撞触发器时", { side: "server", limit: 1 });
assert.ok((coll[0]?.params?.length ?? 0) >= 3, "进入碰撞触发器时 should have params");
assert.ok(
  (nodesCacheSource() ?? "").includes("nodes.catalog.json"),
  `expected catalog source, got ${nodesCacheSource()}`,
);

// --- limit clamping ---
assert.equal(clampLimit(9999, 10, 50), 50);
assert.equal(clampLimit(0, 10, 50), 1);
assert.equal(clampLimit(undefined, 10, 50), 10);
assert.equal(clampLimit(-5, 10, 50), 1);
const overLookup = lookupNodes("节点", { limit: 9999 });
assert.ok(overLookup.length <= LIMITS.lookupNodeMax, "lookup_node must clamp limit");
const overList = listNodes({ limit: 99999 });
assert.ok(overList.length <= LIMITS.listNodesMax, "list_nodes must clamp limit");
const overSearch = searchKnowledge("节点", 9999);
assert.ok(overSearch.length <= LIMITS.searchKnowledgeMax, "search_knowledge must clamp limit");
const overSys = lookupSystem("界面", { limit: 9999 });
assert.ok(overSys.length <= LIMITS.lookupSystemMax, "lookup_system must clamp limit");
const overPat = listPatterns(undefined, 9999);
assert.ok(overPat.length <= LIMITS.listPatternsMax, "list_patterns must clamp limit");

// knowledge index is bounded + cached
resetKnowledgeCaches();
const files1 = listKnowledgeFiles();
const files2 = listKnowledgeFiles();
assert.ok(files1.length <= LIMITS.knowledgeMaxFiles);
assert.strictEqual(files1, files2, "knowledge file index should cache within TTL");
assert.ok(
  overSearch.every((h) => h.snippet.length <= LIMITS.snippetMaxChars + 5),
  "snippets must be capped",
);

// --- path safety ---
assert.throws(() => resolveSafeDir(""), UnsafePathError);
assert.throws(() => resolveSafeDir("foo\0bar"), UnsafePathError);
assert.throws(() => assertUnderDir("/tmp/qx-root", "/tmp/other/x"), UnsafePathError);
const safeRoot = resolveSafeDir(tmpdir());
assert.ok(safeRoot.length > 0);
// relative escape in write path
assert.throws(
  () => scaffoldProject({ targetDir: "proj\0evil", name: "x" }),
  UnsafePathError,
);
// get_pattern period notes must reject path traversal
assert.equal(sanitizePeriodCode("../etc/passwd"), null);
assert.equal(sanitizePeriodCode("1.3"), "1-3");
assert.equal(getPeriodNote("../etc/passwd"), null);
assert.equal(getPeriodNote("..\\..\\secret"), null);
assert.ok(getPeriodNote("1.3")?.length, "valid period note loads");
const rejected = handleScaffoldProject({ targetDir: "bad\0path", name: "x" });
assert.match(extractText(rejected), /拒绝|null/);

// --- generate_logic ---
const gen = handleGenerateLogic({
  goal: "进入触发器得分，30秒定时结束并结算",
  mode: "beyond",
});
const genText = extractText(gen);
assert.match(genText, /g\.server/);
assert.match(genText, /whenEnteringCollisionTrigger|setTimeout|settleStage/);
// Rich catalog params in stub comments / header
assert.match(genText, /进入者实体/);
assert.match(genText, /outs:.*进入者实体:实体/);
assert.match(genText, /设置自定义变量/);
assert.match(genText, /ins:.*变量名:字符串/);
assert.match(genText, /Catalog lookups:/);

const genScore = generateLogic({ goal: "进入触发器得分", mode: "beyond" });
assert.match(genScore.code, /whenEnteringCollisionTrigger/);
assert.match(genScore.code, /进入者实体:实体/);
assert.match(genScore.code, /变量名:字符串/);
assert.ok(genScore.mappedNodes.includes("进入碰撞触发器时"));
assert.ok(genScore.mappedNodes.includes("设置自定义变量"));

const genPat = handleGenerateLogic({
  goal: "进入触发器得分",
  mode: "beyond",
  patternId: "collision_trigger_setup",
});
const genPatText = extractText(genPat);
assert.match(genPatText, /collision_trigger_setup/);
assert.match(genPatText, /离开碰撞触发器时/);
assert.match(genPatText, /Catalog lookups:/);
assert.match(genPatText, /激活\/关闭碰撞触发器|激活\/关闭碰撞触发源/);
const genPatCode = generateLogic({
  goal: "进入触发器得分",
  mode: "beyond",
  patternId: "collision_trigger_setup",
});
assert.match(genPatCode.code, /Pattern: collision_trigger_setup/);
assert.match(genPatCode.code, /Related nodes:.*进入碰撞触发器时/);
assert.match(genPatCode.code, /Catalog lookups:/);
assert.match(genPatCode.code, /离开碰撞触发器时/);

const exact = getNodeByName("进入碰撞触发器时", { side: "server" });
assert.ok(exact);
assert.ok(Array.isArray(exact!.params) && exact!.params.length >= 3);
assert.match(formatNodeCatalogLine(exact!), /outs:/);

// --- scaffold ---
const tmp = mkdtempSync(join(tmpdir(), "qx-scaffold-"));
try {
  const sc = handleScaffoldProject({
    targetDir: tmp,
    name: "demo-score",
    mode: "beyond",
  });
  const scText = extractText(sc);
  assert.match(scText, /scaffold_project/);
  assert.ok(existsSync(join(tmp, "package.json")), "package.json");
  assert.ok(existsSync(join(tmp, "gsts.config.ts")), "gsts.config.ts");
  assert.ok(existsSync(join(tmp, "src", "main.ts")), "src/main.ts");
  const main = readFileSync(join(tmp, "src/main.ts"), "utf8");
  assert.match(main, /g\.server/);
  assert.match(main, /genshin-ts/);

  const status = handleProjectStatus({ projectDir: tmp });
  const statusJson = JSON.parse(extractText(status));
  assert.equal(statusJson.looksLikeGenshinTs, true);
  assert.equal(statusJson.hasGstsConfig, true);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

// --- diagnose still works ---
const diag = handleDiagnose({ symptom: "走进去没反应" });
assert.match(extractText(diag), /触发器|碰撞/);

// --- handlers registry ---
assert.equal(typeof handlers.scaffold_project, "function");
assert.equal(typeof handlers.compile_project, "function");
assert.equal(typeof handlers.lookup_node, "function");
assert.equal(typeof handlers.generate_logic, "function");
assert.equal(typeof handlers.list_patterns, "function");
assert.equal(typeof handlers.get_pattern, "function");
assert.equal(typeof handlers.lookup_system, "function");
assert.equal(typeof handlers.project_status, "function");
assert.equal(typeof handlers.diagnose, "function");
assert.ok(Object.keys(handlers).length >= 14);

// secondary still ok
assert.ok(listSkills().length >= 8);

// --- patterns ---
clearPatternsCache();
const catalog = loadCatalog();
assert.ok(catalog.recipes.length >= 8, `expected >=8 recipes, got ${catalog.recipes.length}`);
assert.equal(patternsLoadCount(), 1, "patterns catalog first load");
loadCatalog();
listPatterns();
getPatternById("shop_open");
assert.equal(patternsLoadCount(), 1, "patterns catalog must stay cached");
assert.ok(listPatterns().some((r) => r.id === "collision_trigger_setup"));
assert.ok(getPatternById("shop_open")?.related_nodes.includes("打开商店"));
const lp = handlers.list_patterns({});
assert.match(extractText(lp), /collision_trigger_setup/);
const lpLim = handlers.list_patterns({ limit: 2 });
assert.ok(
  extractText(lpLim).split("\n").filter((l) => l.startsWith("- **")).length <= 2,
  "list_patterns tool honors limit",
);
const gp = handlers.get_pattern({ id: "signal_bus" });
assert.match(extractText(gp), /发送信号|监听信号/);
const gpPeriod = handlers.get_pattern({ id: "1.3" });
assert.match(extractText(gpPeriod), /节点图|period/);
const gpEvil = handlers.get_pattern({ id: "../../etc/passwd" });
assert.match(extractText(gpEvil), /未找到/);
const patternsCapped = listPatterns(undefined, 3);
assert.ok(patternsCapped.length <= 3, "list_patterns honors limit");


// --- systems catalogs (ui / peripheral / resources) ---
resetSystemsCache();
assert.ok(loadSystemItems("ui").length >= 10, "ui catalog non-empty");
assert.ok(loadSystemItems("peripheral").length >= 5, "peripheral catalog non-empty");
assert.ok(loadSystemItems("resources").length >= 5, "resources catalog non-empty");
const uiHit = lookupSystem("计分板", { domain: "ui", limit: 3 });
assert.ok(uiHit.some((x) => x.name.includes("计分板")), "ui 计分板 hit");
const periHit = lookupSystem("结算", { domain: "peripheral", limit: 3 });
assert.ok(periHit.some((x) => x.name.includes("结算") || x.id.includes("settlement")), "peripheral 结算 hit");
const resHit = lookupSystem("商店", { domain: "resources", limit: 3 });
assert.ok(resHit.some((x) => x.name.includes("商店")), "resources 商店 hit");
const sysTool = handlers.lookup_system({ domain: "ui", query: "计时器", limit: 3 });
const sysText = extractText(sysTool);
assert.match(sysText, /计时器/);
assert.ok(JSON.parse(sysText.split("---")[0]!).count >= 1, "lookup_system tool JSON count");
const warmed = systemsLoadCount();
assert.equal(warmed, 3, "three system domains loaded once each");
loadSystemItems();
loadSystemItems("ui");
lookupSystem("商店", { limit: 2 });
assert.equal(systemsLoadCount(), 3, "systems catalogs must stay cached");
const overSysTool = handlers.lookup_system({ query: "a", limit: 999 as unknown as number });
const overSysJson = JSON.parse(extractText(overSysTool).split("---")[0]!);
assert.ok(overSysJson.count <= LIMITS.lookupSystemMax, "lookup_system tool clamps via lookupSystem");

const genUi = handleGenerateLogic({
  goal: "进入触发器得分，显示计分板与计时器界面，并打开商店",
  mode: "beyond",
});
const genUiText = extractText(genUi);
assert.match(genUiText, /计分板|lookup_system|商店/);

console.log(
  `OK: ${nodes.length} nodes (cache loads=${nodesLoadCount()}), scaffold+generate+lookup+perf assertions passed, ${Object.keys(handlers).length} handlers`,
);
