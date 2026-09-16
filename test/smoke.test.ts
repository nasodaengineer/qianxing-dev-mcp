/**
 * Smoke test: import handlers, call list_skills, assert >= 8 skills.
 * Also lightly exercises get_skill / search / lookup.
 */
import assert from "node:assert/strict";
import { listSkills } from "../src/knowledge.js";
import {
  handleGetSkill,
  handleListSkills,
  handleLookupOfficialDoc,
  handleSearchKnowledge,
  handlers,
} from "../src/handlers.js";

function extractText(result: { content: { type: string; text: string }[] }): string {
  return result.content.map((c) => c.text).join("\n");
}

const skills = listSkills();
assert.ok(skills.length >= 8, `expected >=8 skills, got ${skills.length}`);

const listed = handleListSkills();
const listedText = extractText(listed);
assert.match(listedText, /sandbox-basics/);
assert.match(listedText, /node-graphs/);
assert.ok(
  (listedText.match(/^\- \*\*/gm) ?? []).length >= 8 ||
    (listedText.match(/\*\*[a-z0-9-]+\*\*/g) ?? []).length >= 8,
  "list_skills should mention many skill ids",
);

const skill = handleGetSkill({ id: "sandbox-basics" });
assert.match(extractText(skill), /千星沙箱|编辑器/);

const search = handleSearchKnowledge({ query: "碰撞触发器", limit: 5 });
assert.ok(extractText(search).length > 20);

const docs = handleLookupOfficialDoc({ query: "节点图" });
assert.match(extractText(docs), /act\.mihoyo\.com|content\.html/);

assert.equal(typeof handlers.list_skills, "function");
assert.equal(typeof handlers.diagnose, "function");
assert.equal(typeof handlers.genshin_ts_hint, "function");
assert.equal(Object.keys(handlers).length, 9);

console.log(`OK: ${skills.length} skills, 9 handlers, smoke assertions passed`);
