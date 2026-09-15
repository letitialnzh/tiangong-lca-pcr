---
title: Define Module Ownership and Composition
docType: decision
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when deciding whether a reusable rule belongs in a PCR contract, core rule, conditional module, or product PCR
  - when changing module taxonomy, module schema, PCR manifest module references, or module composition behavior
  - when implementing module resolution, conflict handling, or compiled guidance
whenToUpdate:
  - when this draft is accepted, replaced, or superseded
  - when module ownership or composition semantics change
  - when the first resolver and compiled-guidance contract are implemented
checkPaths:
  - docs/adr/0004-module-ownership-and-composition.md
  - docs/module-architecture.md
  - library/modules/README.md
  - packages/pcr-core/schemas/module.schema.json
  - builder/schemas/pcr-manifest.schema.json
  - builder/docs/contracts/pcr-markdown-contract.md
  - builder/docs/contracts/evidence-and-source-contract.md
  - builder/docs/workflows/create-pcr.md
  - packages/pcr-core/**
  - library/modules/**
lastReviewedAt: 2026-09-09
lastReviewedCommit: 5879fa2faaf3739893f4eac2730b8ed2ef792424
---

# ADR 0004：Module 规则所有权与组合方式

## 状态

本记录目前是 `draft`。它记录当前 v7 workspace 的第一版架构决定，需在修改 Schema、候选 module 或运行时
resolver 之前经过维护者确认。draft 不改变现有运行时行为，也不把当前候选 module 宣布为 active methodology。

## 背景

在本次 framework reset 之前，仓库同时存在四类可复用内容：

1. `builder/docs/contracts/**` 和 `builder/docs/methods/**` 中的 PCR 结构、reference flow、measurement、
   system boundary、inventory、evidence、allocation 和 data-quality 规则；
2. `library/modules/core/*.md` 中的旧 core scaffold；
3. `library/modules/activities/`、`technologies/` 和 `system-conditions/` 中的五个 v7 framework-first YAML
   candidate；
4. PCR manifest 中的 `modules` 元数据引用。Reset 后，前三类 module 文件已从 active catalogue 移除，相关内容
   仅作为 Git 历史、设计记录和架构讨论的背景保留。

这些内容在 reset 前没有完全一致的责任边界。PCR contract 已经拥有大量通用规则，但 `docs/architecture.md`
曾将其中一部分描述为 module；旧 core scaffold 又被大量 PCR manifest 引用，却没有可执行的 resolver 将其编译
进 guidance。现在 active catalogue 暂时为空，`pcr-core` 和 public CLI 仍尚未实现 module resolve、composition
或 conflict contract。

如果不先固定规则所有权，继续增加水果、矿产、电力等产品或行业 module 会产生三类风险：

- 同一条通用规则在 contract、core module 和 conditional module 中重复；
- Agent 将 module 当成已完成的产品证据或默认方法，从而跳过当前产品检索；
- 不同行业按照不同直觉切分，无法解释新增 module 的抽象依据。

## 决策

### 1. 采用四层责任模型

仓库使用以下责任层级：

```text
Always-on PCR contract
  -> Conditional framework modules
  -> Product-specific PCR
  -> Foreground dataset and resolved flow choices
```

#### Always-on PCR contract

PCR contract、builder workflow、PCR Schema 和受控方法规则定义所有 PCR 都必须满足的结构要求，包括但不限于：

- PCR 必填章节和双语结构；
- functional unit、reference flow 和 measurement 的基本契约；
- process/inventory 的机器可消费结构；
- evidence/source 的记录格式；
- translation、lifecycle、projection 和 readiness 要求。

这类规则只有一个权威来源。Conditional module 不得复制其规范文字；需要引用时应引用稳定的 contract rule
或 rule family 标识。

#### Conditional framework modules

Module 只表达需要根据当前产品路线激活的可复用义务：

- activation question 和 activation evidence；
- process/interface slots；
- current-product evidence questions；
- collection prompts；
- conditional boundary、inventory、calculation、allocation 或 validation obligations；
- dependencies、conflicts 和 coexistence constraints。

Module 不提供产品身份、地区、数值、因子、具体 UUID、最终边界选择或可直接继承的产品证据。

#### Product-specific PCR

PCR 根据当前产品和当前路线填写：

- 产品身份和分类引用；
- 实际生产路线和边界；
- 参数、流、数量、期间和状态；
- 当前产品的证据与来源；
- allocation、technology、排除和 unresolved 事项的最终决定。

#### Foreground dataset and resolved flow choices

前景数据和 flow resolver 负责实际测量记录、现场值、具体流选择和 UUID 绑定。Module 只能提出抽象 flow role
或选择问题，不得代替 flow resolver 或当前产品证据。

### 2. Module 的主要目标是完整性控制，而不是减少检索

Module 的成功标准是防止漏掉适用过程、接口、证据问题和验证要求，而不是让 Agent 直接复用另一产品的
方法内容或跳过当前产品 Web/evidence search。

每一次 PCR 生成仍必须针对当前产品重新确认：

- 路线是否适用；
- module 是否激活；
- 每个投入、产出和损失类别是否存在；
- 数值、因子和边界是否有当前产品证据；
- 其他产品或其他 module 的结论是否不适用。

### 3. Module 类型继续使用三分法，但类型必须有可检验边界

- `activity`：可形成独立过程节点，具有稳定的过程和交接接口；
- `technology`：某个明确 parent activity 的替代实现，并能列出相对 parent 的稳定差异；
- `system_condition`：对多个节点、期间、输出或共享资产施加横向约束，不拥有一个独立产品接口。

产品名称、CPC leaf、行业文件夹或单个操作名称本身不能构成 module type。

### 4. 采用统一的抽象规则

在新增或提升 module 前，必须按以下规则审查：

1. 抽象的是建模责任，不是产品身份、CPC leaf、行业目录、地域实践或单个来源结论；
2. 每个 module 只拥有一个主要责任，不把过程节点、替代技术和跨过程条件混在一起；
3. 说明跨用途保持不变的 invariant，把产品、场址、期间和路线差异显式作为参数或 activation evidence；
4. 所有 PCR 都适用的规则归 contract、workflow、method 或 Schema，module 不得复制第二份规范文字；
5. activation 必须包括问题、所需证据和 `applicable`、`not_applicable`、`unresolved` 三种结果；
6. activity/technology 必须有稳定过程或接口 slot，system condition 必须有稳定的跨节点、跨期、跨输出或
   共享资产影响；
7. module 可以规定证据类型和采集提示，但 active PCR 必须为自己的产品、路线、场址和期间重新收集证据；
8. 排除边界、相邻 module 差异、依赖、冲突和共存关系必须明确；
9. reusable conditional rule 必须有 durable source，但重复使用同一来源不等于产品结论可以继承；
10. 在至少两个实质不同的路线中验证，其中至少一条不属于提出该 module 的原始领域，才可考虑 active；
11. module 只能产生 obligations、slots、questions 或 checks，不能静默产生产品事实、数量、因子、UUID 或最终
    boundary choice。

审查结果只能是：`canonical_candidate`、`active_module`、`design_record_only` 或 `pcr_specific`。能被 Schema
   写出来不等于通过抽象审查。

### 5. PCR manifest 与 structured projection 中的 module 引用表示自动选择结果

manifest 的 `modules` 字段由 builder 根据当前 projection 自动写入 applicable module 选择；structured projection
中的 `module_references` 同时保留 selected 和 unresolved 状态。它们不单独证明：

- module 的全部产品证据已经完成；
- module 的规则已写入 PCR；
- module 的当前产品证据已完成；
- module 已通过 projection 或 readiness validation。

未来 resolver 应将 manifest 选择与 module 文件、依赖、activation evidence 和 PCR 投影进行联合检查。没有
resolver 之前，现有 manifest 引用只能作为 authoring metadata 处理。

### 6. 不强制每个 module 具有所有规则族

Module schema 不应要求每个 activity、technology 或 system condition 都必须拥有 inventory、calculation、
allocation 等全部规则族。Module 只声明自己实际拥有的规则；不适用的规则族应为空或省略，并由 resolver
记录为 not-applicable，而不是用泛化占位规则填充。

### 7. Flowset 和 PCR interface 是相邻但独立的 contract

Flowset 用于抽象流角色到具体候选流的选择和后续 UUID resolution；PCR interface 用于声明上游输入、下游
输出、状态、单位和交接点。这两者不应被强行塞进 activity module，也不应通过 module 自动绑定具体流。

## 规则所有权矩阵

| 内容 | 权威所有者 | Module 的允许行为 |
| --- | --- | --- |
| PCR 章节与必填结构 | PCR contract / builder workflow | 引用，不复制 |
| Functional unit、reference flow、measurement | PCR contract / methods | 提出条件性问题，但不覆盖通用契约 |
| Process 与 inventory row 结构 | PCR contract / structured projection | 提供条件性 process/interface slot |
| Evidence/source 字段格式 | Evidence and source contract | 提出当前产品证据问题 |
| Allocation 通用结构 | PCR contract / methods | 仅在多输出或特殊路线时激活条件性责任 |
| 生产、采收、整理等路线节点 | Activity module | 提供节点、接口和调查问题 |
| 替代技术路线 | Technology module | 提供相对 parent 的差异与冲突 |
| 跨期、共享资产、多输出关系 | System-condition module | 提供横向索引和归属约束 |
| 当前产品事实、数量和最终决定 | Product PCR | 直接负责并附证据 |
| 具体流和 UUID | Flowset / resolver / foreground dataset | Module 只能引用抽象 role |
| PCR 上下游连接 | PCR interface contract | Module 可声明接口需求，不能定义最终连接 |

## 被拒绝的方案

### 拒绝：按产品或 CPC 类别建立首要 module taxonomy

例如 `fruit-production`、`citrus` 或某个 CPC leaf 下的规则，不具有跨行业可解释的抽象依据。它们可以作为
测试路线或 PCR 分组，但不能自动成为 canonical module。

### 拒绝：把完成过的产品 PCR 或文献检索结果直接做成 module 内容

这会让后续 Agent 继承错误的产品结论，并降低当前产品重新检索的必要性。Module 可以保留证据问题和来源
类型要求，但不能把某个产品的答案当成默认答案。

### 拒绝：把所有通用 PCR 规则再次复制到 module

Functional unit、reference flow、system boundary、inventory schema、source format 等已经由 contract 或
workflow 拥有时，重复复制会产生两个真值来源。需要扩展时应先修改其唯一权威 contract。

### 拒绝：以“减少 token 或生成时间”作为 module 的主要验收指标

Module 可能减少漏项，但不应牺牲当前产品证据检索、冲突判断和 provenance。主要验收指标应是完整性、证据
可追溯性、非继承性和可解释的 activation。

## 迁移顺序

在本 ADR 获得确认后，按以下顺序实施：

1. 更新 `docs/module-architecture.md` 和 `docs/architecture.md`，统一规则所有权和术语；
2. 明确 `library/modules/core/*.md` 是 scaffold、contract mirror 还是待迁移资产，并禁止其与 contract 形成
   第二个真值来源；
3. 修改 `packages/pcr-core/schemas/module.schema.json`，增加 type/activation/ownership/slot/conflict
   表达，并允许不适用规则族为空；
4. 根据 forward abstraction fixtures 生成最小条件性框架；不得把旧五个 candidate 原样复活。需要拆分、收窄或
   降级的旧候选必须从 design record 重新判断；
5. 为农业、矿产和电力至少各建立一条 selection/composition fixture，验证分类依据跨行业仍成立；
6. 实现最小 resolver，输出依赖、激活状态、证据问题、采集提示、冲突和未完成义务；
7. 单独设计 flowset selector 和 PCR interface contract，并在 resolver 中保持它们与 module 的边界。

在第 6 步之前，不应以 module 数量增长或产品 PCR 生成耗时作为完成标准。

## 结果与代价

正面结果：

- 通用 PCR 规则只有一个权威来源；
- module 真正承担条件性完整性控制；
- Agent 不能仅凭 module 继承另一产品的事实和证据；
- 不同行业可以用同一组类型边界和 resolver 进行测试；
- flowset、PCR interface 和 module 各自保持可解释的责任边界。

代价：

- 旧五个 YAML candidate 和 core scaffold 已从 active catalogue 移除；其历史仍可从 Git 和设计记录追溯；
- manifest 目前只是声明，需增加 resolver 和 compiled-guidance 运行时；
- Schema、docs、fixtures 和测试需要同步变更。

## 验收条件

本 ADR 可以从 draft 转为 accepted 的最低条件：

1. `docs/architecture.md`、`docs/module-architecture.md` 和 builder contracts 不再对规则所有权产生冲突；
2. 至少一条农业、一条矿产和一条电力路线能够使用同一套 module type 判定；
3. 一个 module 不会自动满足当前 PCR 的证据、数量或 UUID 要求；
4. manifest module 引用与实际 resolver/composition 结果可以区分；
5. 未激活、冲突、缺证据和未解决条件都能被明确输出；
6. contract-owned rule 在 module 中没有重复的第二份规范文字。
