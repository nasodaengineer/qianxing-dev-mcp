/**
 * genshin-ts project scaffold / compile / status helpers.
 * Path-safe writes; compile uses argv spawn (no shell) + timeout/maxBuffer.
 */
import {
  existsSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  readdirSync,
  statSync,
} from "node:fs";
import { join, resolve, basename, sep, normalize } from "node:path";
import { spawnSync } from "node:child_process";
import { LIMITS } from "./limits.js";

export type ScaffoldMode = "classic" | "beyond";

const DEFAULT_GRAPH_ID = 1073741825;

/** Error thrown when a user path is rejected for safety. */
export class UnsafePathError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnsafePathError";
  }
}

/**
 * Resolve/normalize a directory path for scaffold/compile.
 * Rejects null bytes and empty strings. `..` in the input is collapsed by
 * path.resolve; file writes must still pass assertUnderDir / writeUnder.
 */
export function resolveSafeDir(input: string): string {
  if (typeof input !== "string" || !input.trim()) {
    throw new UnsafePathError("path must be a non-empty string");
  }
  if (input.includes("\0")) {
    throw new UnsafePathError("path must not contain null bytes");
  }
  return resolve(normalize(input));
}

/** Ensure candidate resolves strictly under root (or equals root). */
export function assertUnderDir(root: string, candidate: string): string {
  const r = resolve(root);
  const c = resolve(candidate);
  const prefix = r.endsWith(sep) ? r : r + sep;
  if (c !== r && !c.startsWith(prefix)) {
    throw new UnsafePathError(`path escapes target directory: ${candidate}`);
  }
  return c;
}

function safeName(name: string): string {
  const n = name.trim() || "miliastra-project";
  return n
    .replace(/[^a-zA-Z0-9._\-一-龥]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64) || "miliastra-project";
}

function packageNameFrom(name: string): string {
  const ascii = name
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return ascii || "miliastra-project";
}

function sampleMainTs(mode: ScaffoldMode): string {
  const modeLine = mode === "classic" ? `,\n  mode: 'classic'` : "";
  return `import { g } from 'genshin-ts/runtime/core'

/**
 * Sample server entity graph.
 * Replace id with a real empty/_GSTS_ NodeGraph ID from your map.
 * Docs: https://gsts.moe
 */
g.server({
  id: ${DEFAULT_GRAPH_ID}${modeLine},
  name: 'Main',
  variables: { score: 0n },
}).on('whenEntityIsCreated', (_evt, f) => {
  f.printString('hello from genshin-ts')
  f.set('score', 0n)
}).on('whenEnteringCollisionTrigger', (evt, f) => {
  // Official node: 进入碰撞触发器时
  const next = f.get('score') + 1n
  f.set('score', next)
  f.printString(str(next))
  // Optional: write to stage custom var if predefined in editor as Score
  // stage.set('Score', next)
})
`;
}

function gstsConfigTs(): string {
  return `import type { GstsConfig } from 'genshin-ts'

/**
 * Compile config. Fill inject.* only when you want local map injection
 * (Windows + BeyondLocal paths; use \`npm run maps\` to discover mapId).
 */
const config: GstsConfig = {
  compileRoot: '.',
  entries: ['./src'],
  outDir: './dist',
  // Avoid host locale crashes on some Linux environments:
  lang: 'en',
  // inject: {
  //   gameRegion: 'China',
  //   playerId: 1,
  //   mapId: 1073741849,
  //   nodeGraphId: ${DEFAULT_GRAPH_ID},
  // },
}

export default config
`;
}

function packageJson(name: string): string {
  return JSON.stringify(
    {
      name: packageNameFrom(name),
      version: "0.1.0",
      private: true,
      type: "module",
      scripts: {
        typecheck: "tsc -p tsconfig.json --noEmit",
        build: "gsts",
        dev: "gsts dev",
        maps: "gsts maps",
        backup: "gsts open backup",
      },
      dependencies: {
        "genshin-ts": "^0.2.2",
      },
      devDependencies: {
        "@types/node": "^22.10.0",
        typescript: "^5.9.3",
      },
    },
    null,
    2,
  ) + "\n";
}

function tsconfigJson(): string {
  return JSON.stringify(
    {
      extends: "genshin-ts/tsconfig/base.json",
      compilerOptions: {
        rootDir: ".",
        outDir: "dist",
        typeRoots: ["./node_modules/genshin-ts/types", "./node_modules/@types"],
        types: ["gsts", "node"],
      },
      include: ["src", "gsts.config.ts"],
    },
    null,
    2,
  ) + "\n";
}

function readmeMd(name: string, mode: ScaffoldMode): string {
  return `# ${name}

Genshin-TS / 千星奇域（Miliastra）UGC 逻辑工程（mode: **${mode}**）。

由 \`qianxing-dev-mcp\` 的 \`scaffold_project\` 生成。

## 三步：从想法到 .gia

1. 编辑 \`src/main.ts\`（或用 MCP \`generate_logic\` 生成 stub 粘贴进来）
2. \`npm install && npm run build\` → 产出 \`dist/**/*.gs.ts\` / \`.json\` / \`.gia\`
3. 在编辑器导入 \`.gia\`，或配置 \`gsts.config.ts\` 的 \`inject\` 后 \`npm run build\` / \`npm run dev\` 注入本地地图

## 注意

- \`id\` 必须是地图里已存在的空图或 \`_GSTS_\` 前缀图；注入前请先保存地图。
- 未配置 \`inject\` 时，\`gsts\` 仍会编译出产物；若提示缺少 map/inject ID，属预期，可稍后补全。
- 文档：https://gsts.moe · 包：https://www.npmjs.com/package/genshin-ts

## Scripts

- \`npm run build\` — \`gsts\` 全量编译
- \`npm run dev\` — 增量编译（配置 inject 时自动注入）
- \`npm run maps\` — 列出最近地图，辅助填写 mapId
`;
}

export type ScaffoldResult = {
  targetDir: string;
  name: string;
  mode: ScaffoldMode;
  files: string[];
  notes: string[];
};

function writeUnder(root: string, rel: string, content: string): void {
  if (rel.includes("\0") || rel.split(/[/\\]/).includes("..")) {
    throw new UnsafePathError(`refusing relative path: ${rel}`);
  }
  const full = assertUnderDir(root, join(root, rel));
  writeFileSync(full, content, "utf8");
}

export function scaffoldProject(args: {
  targetDir: string;
  name?: string;
  mode?: ScaffoldMode;
}): ScaffoldResult {
  const targetDir = resolveSafeDir(args.targetDir);
  const name = safeName(args.name ?? basename(targetDir));
  const mode: ScaffoldMode = args.mode === "classic" ? "classic" : "beyond";
  const notes: string[] = [];

  if (existsSync(targetDir)) {
    const entries = readdirSync(targetDir);
    if (entries.length > 0 && !entries.every((e) => e === ".git" || e === ".gitignore")) {
      if (existsSync(join(targetDir, "package.json")) && existsSync(join(targetDir, "gsts.config.ts"))) {
        notes.push("目录已有 genshin-ts 工程痕迹，跳过覆盖；仅确保 src/ 存在。");
        mkdirSync(join(targetDir, "src"), { recursive: true });
        if (!existsSync(join(targetDir, "src", "main.ts"))) {
          writeUnder(targetDir, "src/main.ts", sampleMainTs(mode));
        }
        return {
          targetDir,
          name,
          mode,
          files: listProjectFiles(targetDir),
          notes,
        };
      }
    }
  }

  mkdirSync(join(targetDir, "src"), { recursive: true });
  mkdirSync(join(targetDir, "src", "resources"), { recursive: true });

  const filesToWrite: Array<[string, string]> = [
    ["package.json", packageJson(name)],
    ["gsts.config.ts", gstsConfigTs()],
    ["tsconfig.json", tsconfigJson()],
    ["src/main.ts", sampleMainTs(mode)],
    ["src/resources/signals.ts", `/** Generated/hand-written signal defs when using inject. */\nexport {}\n`],
    ["README.md", readmeMd(name, mode)],
  ];

  for (const [rel, content] of filesToWrite) {
    writeUnder(targetDir, rel, content);
  }

  notes.push(
    "已手写最小 genshin-ts 工程（非交互 npm create）。",
    "请在 targetDir 执行: npm install && npm run build",
    "若 genshin-ts 需要 map inject IDs，未配置 inject 时 build 可能警告但仍应产出 dist 中间件或给出清晰错误。",
  );

  return {
    targetDir,
    name,
    mode,
    files: filesToWrite.map(([rel]) => rel),
    notes,
  };
}

function walkFiles(dir: string, base: string, out: string[], max: number = LIMITS.projectListMaxFiles, depth = 0): void {
  if (out.length >= max || !existsSync(dir) || depth > 12) return;
  let names: string[];
  try {
    names = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of names) {
    if (out.length >= max) return;
    if (name === "node_modules" || name === ".git") continue;
    const full = join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    const rel = join(base, name).replace(/\\/g, "/");
    if (st.isDirectory()) walkFiles(full, rel, out, max, depth + 1);
    else out.push(rel);
  }
}

export function listProjectFiles(projectDir: string): string[] {
  const out: string[] = [];
  walkFiles(projectDir, "", out, LIMITS.projectListMaxFiles);
  return out.sort();
}

export type CompileResult = {
  projectDir: string;
  command: string;
  exitCode: number | null;
  stdout: string;
  stderr: string;
  outputs: string[];
  hint: string;
};

function compileArgv(projectDir: string): { command: string; argv: string[]; display: string } {
  const pkgPath = join(projectDir, "package.json");
  const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
  const npxCmd = process.platform === "win32" ? "npx.cmd" : "npx";
  if (existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(readFileSync(pkgPath, "utf8")) as {
        scripts?: Record<string, string>;
      };
      if (pkg.scripts?.build) {
        return {
          command: npmCmd,
          argv: ["run", "build", "--silent"],
          display: "npm run build",
        };
      }
    } catch {
      /* fall through */
    }
  }
  return {
    command: npxCmd,
    argv: ["--yes", "gsts"],
    display: "npx --yes gsts",
  };
}

export function compileProject(args: { projectDir: string; timeoutMs?: number }): CompileResult {
  let projectDir: string;
  try {
    projectDir = resolveSafeDir(args.projectDir);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return {
      projectDir: String(args.projectDir),
      command: "(rejected)",
      exitCode: 1,
      stdout: "",
      stderr: msg,
      outputs: [],
      hint: "projectDir 路径不安全或无效",
    };
  }

  if (!existsSync(projectDir)) {
    return {
      projectDir,
      command: "(missing)",
      exitCode: 1,
      stdout: "",
      stderr: `目录不存在: ${projectDir}`,
      outputs: [],
      hint: "先 scaffold_project 或传入正确 projectDir",
    };
  }

  const { command, argv, display } = compileArgv(projectDir);
  const timeout = args.timeoutMs ?? LIMITS.compileTimeoutMs;
  const result = spawnSync(command, argv, {
    cwd: projectDir,
    encoding: "utf8",
    shell: false,
    timeout,
    maxBuffer: LIMITS.compileMaxBuffer,
    env: {
      ...process.env,
      npm_config_yes: "true",
      LANG: process.env.LANG || "C.UTF-8",
      LC_ALL: process.env.LC_ALL || "C.UTF-8",
    },
  });

  const distDir = join(projectDir, "dist");
  const outputs: string[] = [];
  if (existsSync(distDir)) {
    const all: string[] = [];
    walkFiles(distDir, "dist", all, LIMITS.distListMaxFiles);
    for (const f of all) {
      if (/\.(gia|json|gs\.ts)$/i.test(f) || f.includes(".gs.ts")) outputs.push(f);
    }
    if (outputs.length === 0) outputs.push(...all.filter((f) => !f.includes("node_modules")));
  }

  const stderr = (result.stderr || "") + (result.error ? `\n${String(result.error)}` : "");
  let hint = "";
  if ((result.status ?? 1) !== 0) {
    hint =
      "编译未成功。常见原因：未 npm install、缺少 inject/mapId（可稍后配置）、NodeGraph id 无效。查看 stderr；产物列表可能仍为空。";
  } else if (outputs.length === 0) {
    hint = "进程成功但未发现 dist 产物；检查 gsts.config.ts entries/outDir。";
  } else {
    hint = "编译完成。可将 .gia 导入编辑器，或配置 inject 后再次 build/dev。";
  }

  return {
    projectDir,
    command: display,
    exitCode: result.status,
    stdout: (result.stdout || "").slice(0, LIMITS.compileOutputChars),
    stderr: stderr.slice(0, LIMITS.compileOutputChars),
    outputs,
    hint,
  };
}

export type ProjectStatus = {
  projectDir: string;
  looksLikeGenshinTs: boolean;
  hasPackageJson: boolean;
  hasGstsConfig: boolean;
  hasSrcMain: boolean;
  hasNodeModules: boolean;
  genshinTsVersion: string | null;
  scripts: Record<string, string>;
  distArtifacts: string[];
  notes: string[];
};

export function projectStatus(args: { projectDir: string }): ProjectStatus {
  let projectDir: string;
  try {
    projectDir = resolveSafeDir(args.projectDir);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return {
      projectDir: String(args.projectDir),
      looksLikeGenshinTs: false,
      hasPackageJson: false,
      hasGstsConfig: false,
      hasSrcMain: false,
      hasNodeModules: false,
      genshinTsVersion: null,
      scripts: {},
      distArtifacts: [],
      notes: [msg],
    };
  }

  const notes: string[] = [];
  if (!existsSync(projectDir)) {
    return {
      projectDir,
      looksLikeGenshinTs: false,
      hasPackageJson: false,
      hasGstsConfig: false,
      hasSrcMain: false,
      hasNodeModules: false,
      genshinTsVersion: null,
      scripts: {},
      distArtifacts: [],
      notes: ["目录不存在"],
    };
  }

  const hasPackageJson = existsSync(join(projectDir, "package.json"));
  const hasGstsConfig =
    existsSync(join(projectDir, "gsts.config.ts")) ||
    existsSync(join(projectDir, "gsts.config.js")) ||
    existsSync(join(projectDir, "gsts.config.mjs"));
  const hasSrcMain =
    existsSync(join(projectDir, "src", "main.ts")) ||
    existsSync(join(projectDir, "src", "index.ts"));
  const hasNodeModules = existsSync(join(projectDir, "node_modules"));

  let genshinTsVersion: string | null = null;
  let scripts: Record<string, string> = {};
  if (hasPackageJson) {
    try {
      const pkg = JSON.parse(readFileSync(join(projectDir, "package.json"), "utf8")) as {
        dependencies?: Record<string, string>;
        devDependencies?: Record<string, string>;
        scripts?: Record<string, string>;
      };
      genshinTsVersion =
        pkg.dependencies?.["genshin-ts"] ?? pkg.devDependencies?.["genshin-ts"] ?? null;
      scripts = pkg.scripts ?? {};
    } catch {
      notes.push("package.json 解析失败");
    }
  }

  const distArtifacts: string[] = [];
  const distDir = join(projectDir, "dist");
  if (existsSync(distDir)) {
    const all: string[] = [];
    walkFiles(distDir, "dist", all, LIMITS.distListMaxFiles);
    for (const f of all) {
      if (/\.(gia|json|gs\.ts)$/i.test(f) || f.includes(".gs.ts")) distArtifacts.push(f);
    }
  }

  const looksLikeGenshinTs =
    hasGstsConfig || Boolean(genshinTsVersion) || Boolean(scripts.build?.includes("gsts"));

  if (!hasNodeModules && looksLikeGenshinTs) notes.push("尚未 npm install");
  if (looksLikeGenshinTs && !hasGstsConfig) notes.push("缺少 gsts.config.ts");
  if (looksLikeGenshinTs && distArtifacts.length === 0) notes.push("dist 尚无 .gia/.json/.gs.ts");

  return {
    projectDir,
    looksLikeGenshinTs,
    hasPackageJson,
    hasGstsConfig,
    hasSrcMain,
    hasNodeModules,
    genshinTsVersion,
    scripts,
    distArtifacts,
    notes,
  };
}

export function injectHint(): string {
  return `# inject 本地步骤（本工具不向游戏进程注入）

1. 在编辑器创建空节点图（或 \`_GSTS_\` 前缀图），**保存地图**。
2. 运行 \`npm run maps\` 查看最近 \`mapId\`。
3. 在 \`gsts.config.ts\` 填写：

\`\`\`ts
inject: {
  gameRegion: 'China', // 或 'Global'
  playerId: 1,
  mapId: /* 来自 maps */,
  nodeGraphId: /* 与 g.server({ id }) 一致 */,
}
\`\`\`

4. Windows 路径提示：
   - China: \`%LocalAppData%\\\\..\\\\LocalLow\\\\miHoYo\\\\原神\\\\BeyondLocal\`
   - Global: \`%LocalAppData%\\\\..\\\\LocalLow\\\\miHoYo\\\\Genshin Impact\\\\BeyondLocal\`
5. \`npm run build\` 或 \`npm run dev\`；注入后重载地图。保存地图可能覆盖注入内容，需再注入。
6. 安全：仅操作你本机已配置的路径；不要用于破解或未授权客户端。
`;
}
