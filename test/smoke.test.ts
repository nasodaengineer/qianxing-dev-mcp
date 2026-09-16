/**
 * Smoke tests for development-first qianxing-dev-mcp.
 */
import assert from "node:assert/strict";
import { mkdtempSync, existsSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { listSkills } from "../src/knowledge.js";
import { loadNodes, lookupNodes } from "../src/nodes.js";
import {
  handleGenerateLogic,
  handleLookupNode,
  handleListNodes,
  handleScaffoldProject,
  handleProjectStatus,
  handleDiagnose,
  handlers,
} from "../src/handlers.js";

function extractText(result: { content: { type: string; text: string }[] }): string {
  return result.content.map((c) => c.text).join("\n");
}

// --- nodes ---
const nodes = loadNodes();
assert.ok(nodes.length >= 1275, `expected >=1275 nodes, got ${nodes.length}`);
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

// --- generate_logic ---
const gen = handleGenerateLogic({
  goal: "进入触发器得分，30秒定时结束并结算",
  mode: "beyond",
});
const genText = extractText(gen);
assert.match(genText, /g\.server/);
assert.match(genText, /whenEnteringCollisionTrigger|setTimeout|settleStage/);

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
assert.equal(typeof handlers.project_status, "function");
assert.equal(typeof handlers.diagnose, "function");
assert.ok(Object.keys(handlers).length >= 14);

// secondary still ok
assert.ok(listSkills().length >= 8);

console.log(
  `OK: ${nodes.length} nodes, scaffold+generate+lookup assertions passed, ${Object.keys(handlers).length} handlers`,
);
