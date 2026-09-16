/**
 * Emit ready-to-paste genshin-ts TypeScript stubs from a natural-language goal.
 */
export type GenerateMode = "beyond" | "classic";
export type GraphType =
  | "entity"
  | "characterSkill"
  | "creationSkill"
  | "boolFilter"
  | "intFilter";

export type GenerateResult = {
  mode: GenerateMode;
  graphType: GraphType;
  goal: string;
  mappedNodes: string[];
  mappedEvents: string[];
  code: string;
  notes: string[];
};

const DEFAULT_ID = 1073741825;

function detectGraphType(goal: string, explicit?: GraphType): GraphType {
  if (explicit) return explicit;
  const g = goal.toLowerCase();
  if (/技能|character.?skill|角色技能/.test(goal) || /skill/.test(g)) return "characterSkill";
  if (/造物技能|creation.?skill/.test(goal)) return "creationSkill";
  if (/布尔过滤|bool.?filter/.test(goal)) return "boolFilter";
  if (/整数过滤|int.?filter/.test(goal)) return "intFilter";
  return "entity";
}

function detectThemes(goal: string) {
  const g = goal.toLowerCase();
  return {
    score:
      /得分|加分|计分|分数|score|踩圈|踩点|进入.*分/.test(goal) || /score/.test(g),
    trigger:
      /触发|碰撞|进入|离开|trigger|踩/.test(goal) || /trigger|collision/.test(g),
    timer:
      /定时|计时|倒计时|timeout|timer|到时|结束/.test(goal) || /timer|timeout/.test(g),
    settle:
      /结算|通关|结束关卡|settle|settlement/.test(goal) || /settle/.test(g),
    signal: /信号|signal/.test(goal) || /signal/.test(g),
    create: /创建|生成|spawn|created/.test(goal),
  };
}

export function generateLogic(args: {
  goal: string;
  mode?: GenerateMode;
  graphType?: GraphType;
  graphId?: number;
}): GenerateResult {
  const mode: GenerateMode = args.mode === "classic" ? "classic" : "beyond";
  const graphType = detectGraphType(args.goal, args.graphType);
  const themes = detectThemes(args.goal);
  const id = args.graphId ?? DEFAULT_ID;
  const mappedNodes: string[] = [];
  const mappedEvents: string[] = [];
  const notes: string[] = [
    "将下列代码粘贴到 src/main.ts（或拆分为多 entry）。",
    "把 id 换成地图中真实空图 / _GSTS_ 节点图 ID。",
    "自定义变量（如 Score）需在编辑器实体组件中预定义才会同步到 UI。",
  ];

  if (graphType !== "entity") {
    const code = clientStub(graphType, id, mode, args.goal);
    mappedEvents.push("start");
    mappedNodes.push("（客户端图入口 start）");
    return {
      mode,
      graphType,
      goal: args.goal,
      mappedNodes,
      mappedEvents,
      code,
      notes,
    };
  }

  // Default: server entity graph with useful patterns
  const modeOpt = mode === "classic" ? `,\n  mode: 'classic' as const` : "";
  const handlers: string[] = [];

  // Always give a create hook if nothing else matched strongly
  if (themes.create || (!themes.score && !themes.trigger && !themes.timer && !themes.settle)) {
    handlers.push(`.on('whenEntityIsCreated', (_evt, f) => {
    f.printString(${JSON.stringify(`ready: ${args.goal.slice(0, 40)}`)})
    f.set('score', 0n)
  })`);
    mappedEvents.push("whenEntityIsCreated");
    mappedNodes.push("实体创建时", "打印字符串");
  }

  if (themes.trigger || themes.score) {
    handlers.push(`.on('whenEnteringCollisionTrigger', (evt, f) => {
    // Official: 进入碰撞触发器时 — evt.enteringEntity / triggerEntity
    const who = evt.enteringEntity
    const next = f.get('score') + 1n
    f.set('score', next)
    // Prefer stage/player custom vars for UI binding (must be predefined):
    // stage.set('Score', next)
    f.printString(str(next))
    void who
  })`);
    mappedEvents.push("whenEnteringCollisionTrigger");
    mappedNodes.push("进入碰撞触发器时", "设置自定义变量/节点图变量", "打印字符串");
  }

  if (themes.timer || themes.settle) {
    // JS timer on create + settle pattern
    if (!handlers.some((h) => h.includes("whenEntityIsCreated"))) {
      handlers.unshift(`.on('whenEntityIsCreated', (_evt, f) => {
    f.set('score', 0n)
    // 30s match timer (genshin-ts compiles setTimeout to timer nodes)
    setTimeout(() => {
      // Official: 结算关卡 (settleStage).
      // Optional player settle status (needs SettlementStatus enum in editor/runtime):
      // player(1).setSettlementStatus(SettlementStatus.Victory)
      // player(1).setSettlementRanking(1n)
      f.settleStage()
      f.printString('time up — settle')
    }, 30_000)
  })`);
      mappedEvents.push("whenEntityIsCreated", "setTimeout→定时器");
      mappedNodes.push("结算关卡");
    } else {
      // inject timer into existing create — regenerate create with timer
      handlers[0] = `.on('whenEntityIsCreated', (_evt, f) => {
    f.printString('match start')
    f.set('score', 0n)
    setTimeout(() => {
      // Optional: player(1).setSettlementStatus(SettlementStatus.Victory)
      f.settleStage()
      f.printString('timer end → settle')
    }, 30_000)
  })`;
      mappedEvents.push("setTimeout→定时器");
      mappedNodes.push("结算关卡");
    }

    // Also listen to named timer if using editor timers
    handlers.push(`.on('whenTimerIsTriggered', (evt, f) => {
    // Official: 定时器触发时 — if you startTimer from editor/code
    if (evt.timerName === str('MatchEnd')) {
      f.settleStage()
    }
  })`);
    mappedEvents.push("whenTimerIsTriggered");
    mappedNodes.push("定时器触发时");
  }

  if (themes.signal) {
    handlers.push(`.onSignal('match_score', (_evt, f) => {
    // Prefer Signal.xxx from src/resources/signals.ts when inject is configured
    const next = f.get('score') + 1n
    f.set('score', next)
  })`);
    mappedEvents.push("onSignal('match_score')");
    mappedNodes.push("服务器信号");
    notes.push("信号名需与编辑器/对端 send('match_score') 一致。");
  }

  if (handlers.length === 0) {
    handlers.push(`.on('whenEntityIsCreated', (_evt, f) => {
    f.printString(${JSON.stringify(args.goal.slice(0, 80))})
  })`);
    mappedEvents.push("whenEntityIsCreated");
  }

  const code = `import { g } from 'genshin-ts/runtime/core'

/**
 * Goal: ${args.goal.replace(/\*\//g, "* /")}
 * Mode: ${mode} | Graph: server entity
 * Mapped events: ${mappedEvents.join(", ")}
 * Mapped nodes: ${[...new Set(mappedNodes)].join(", ")}
 */
g.server({
  id: ${id}${modeOpt},
  name: 'GeneratedLogic',
  variables: { score: 0n },
})${handlers.join("")}
`;

  notes.push(
    `已映射事件: ${mappedEvents.join(", ") || "—"}`,
    `对应官方节点倾向: ${[...new Set(mappedNodes)].join("、") || "—"}`,
  );

  return {
    mode,
    graphType,
    goal: args.goal,
    mappedNodes: [...new Set(mappedNodes)],
    mappedEvents: [...new Set(mappedEvents)],
    code,
    notes,
  };
}

function clientStub(graphType: GraphType, id: number, mode: GenerateMode, goal: string): string {
  const modeOpt = mode === "classic" ? `, mode: 'classic' as const` : "";
  switch (graphType) {
    case "characterSkill":
      return `import { g } from 'genshin-ts/runtime/core'

/** Goal: ${goal.slice(0, 80)} — Beyond character skill graph */
g.characterSkill({ id: ${id}${modeOpt} }).on('start', (_evt, f) => {
  // Client skill timeline entry
  f.printString('character skill start')
})
`;
    case "creationSkill":
      return `import { g } from 'genshin-ts/runtime/core'

g.creationSkill({ id: ${id}${modeOpt} }).on('start', (_evt, f) => {
  f.printString('creation skill start')
})
`;
    case "boolFilter":
      return `import { g } from 'genshin-ts/runtime/core'

g.boolFilter({ id: ${id}, evaluationInterval: 0.5${modeOpt} }).on('start', (_evt, f) => {
  return f.getRandomNumber(1, 10) > 5
})
`;
    case "intFilter":
      return `import { g } from 'genshin-ts/runtime/core'

g.intFilter({ id: ${id}${modeOpt} }).on('start', (_evt, f) => {
  return f.getRandomNumber(1, 10)
})
`;
    default:
      return `import { g } from 'genshin-ts/runtime/core'

g.server({ id: ${id}${modeOpt} }).on('whenEntityIsCreated', (_evt, f) => {
  f.printString(${JSON.stringify(goal.slice(0, 60))})
})
`;
  }
}
