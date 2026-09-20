---
title: Separate Classification Coverage from the Canonical PCR Catalog
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when importing or updating a classification system
  - when deciding whether a classification leaf should create a PCR record
  - when changing catalog, coverage, mapping, alias, or resolve behavior
whenToUpdate:
  - when the coverage state model changes
  - when the legacy scaffold compatibility period changes
  - when physical scaffold migration begins or finishes
checkPaths:
  - docs/adr/0001-separate-classification-coverage-from-pcr-catalog.md
  - docs/migrations/p2-classification-coverage-migration.md
  - AGENTS.md
  - classifications/**
  - library/indexes/**
  - library/pcrs/**
  - builder/**
  - packages/**
lastReviewedAt: 2026-07-14
lastReviewedCommit: 41e00bafd03530af7871e4620e59862dd779473e
---

# ADR 0001：拆分 classification coverage 与 canonical PCR catalog

## 决策

采用独立 classification coverage read model，并将 canonical PCR catalog 限定为真实方法学记录。

- 方案 C（独立 coverage index + legacy alias）是目标架构。
- 方案 B（保留现有空目录、默认 material-first）只作为迁移期兼容视图。
- 方案 A（物理删除 empty scaffold）只在 coverage、alias、resolve 与交叉引用门禁稳定后执行。

Classification leaf 的存在不再自动产生 canonical PCR identity。只有形成经审核的产品语义边界和方法学记录时，才创建 `library/pcrs/**` 目录并建立 positive mapping。

## 背景

迁移前 CPC 3.0 有 2,877 个 leaf，也有 2,877 个 PCR 目录和 mapping target；其中只有 3 个目录包含
`authored_methodology`，其余 2,874 个都是 `scaffold / empty_scaffold`。全部 mapping 却声明
`mapping_type: exact`。这把“分类已导入”错误表达成“canonical methodology 已存在”。当前 mapping 已收缩为
3 条带 acceptance decision 的 material edge，alias inventory 已覆盖 2,874 个旧 id，并已完成 CPC `99000`
的首个物理删除试点；仍存 2,873 个 legacy empty-scaffold 目录等待后续分批迁移。

空目录造成的直接成本包括：

- 11,496 个重复模板文件，仓库目录约占 45 MB；
- 完整 depth-3 tree JSON 约 4.41 MB；
- 旧 importer 行为会按 leaf 数量复制 PCR identity 和目录，而不是复用方法学实体。

## Representation Decision

| 实体 | 产品角色 | 真值与形式化程度 |
| --- | --- | --- |
| Classification leaf | 外部分类事实 | raw source 是来源；normalized hierarchy/leaves 是确定性 F3 投影 |
| Canonical PCR | 可审核的方法学实体 | `library/pcrs/**` 四文件契约继续作为 F3 authoring/compiled truth |
| Positive mapping | classification code 到 canonical PCR 的边 | `classifications/mappings/**` 是受约束 F3 truth；target 必须存在 |
| Coverage assessment | 某个 leaf 当前是否有可接受 mapping | 状态与 evidence refs 半结构化；candidate suggestion 不得获得 canonical `pcr_id` |
| Coverage index | 面向 core 和 CLI 的完整读模型 | normalized leaf + positive mapping + assessment 的确定性 F3 投影，不成为新的 authoring truth |
| Legacy alias | 旧 scaffold ID 的兼容路由 | F3 registry；只指向 PCR 或 classification coverage locator，不允许隐式近似匹配 |

机器稳定字段使用严格契约；候选范围说明、证据和 reviewer reasoning 保持可演进，不把尚未成熟的判断过早压成 rigid schema。

## 实体边界

### Canonical PCR catalog

Catalog 默认只展示真实 methodology。迁移期可显式请求 legacy/all scope，但 legacy scaffold 必须标记为兼容引用，不能继续被解释为 canonical methodology。

Material 只表示“存在方法学内容”，不等于可直接用于 guidance。消费者仍必须检查现有 `readiness`、projection fingerprint、Schema、translation 和 review 状态。

### Classification coverage

每个 normalized leaf 必须恰有一个 coverage 状态：

- `mapped`：存在指向 canonical PCR 的已接受 mapping；
- `unmapped`：leaf 已导入，但当前没有 canonical PCR mapping；
- `candidate_suggestion`：已有范围建议或证据，尚未形成 canonical identity；
- `manual_review`：存在冲突或关系不确定，必须人工判断；
- `unknown`：source 缺失、记录冲突或迁移不完整，稳定构建中必须为零。

`mapped` 只说明 mapping 边存在，不说明 target readiness 为 ready。`candidate_suggestion` 和 `manual_review` 不能被 resolve 或 guidance 自动选择为 PCR。

### Mapping

Mapping 只表示存在的 classification-to-PCR 边。它不再承担“没有 target”的 coverage 状态，也不能通过为每个 leaf 预造 `pcr_id` 来表达覆盖率。

Target 必须满足：

- manifest 存在且 identity 一致；
- 不是纯 `scaffold / empty_scaffold`；
- relation 使用共享受控词表；
- 同一 classification coordinate 不产生冲突的 accepted mappings。

### Legacy alias

在删除任何空目录之前，旧 scaffold ID 必须进入 alias registry。Alias 可以指向 classification coverage coordinate，但不能把旧 ID 静默重用为另一个产品的 PCR，也不能形成链或环。

## 公共消费契约

- `list` 和 `tree` 默认 material-first，并显式报告 scope、完整性和进入 coverage/legacy 视图的下一命令。
- Classification coverage 使用独立、确定性的 summary/list 输出，长集合必须分页。
- `resolve --classification` 保持 exact lookup，不使用 fuzzy 或最近邻回退。
- 已知 leaf 但无 mapping 是正常的 `unmapped` 成功结果：`mapping: null`、`pcr: null`。
- 不存在的 system/version/code、损坏的 coverage index 或冲突才是命令错误。
- 显式 legacy/all catalog scope 可继续展示尚存空目录；classification resolve 不再从 mapping v2 返回
  legacy target。旧 scaffold id 通过 alias 返回 terminal locator，目录删除前后行为相同。

## 一致性门禁

构建和 lint 必须验证：

1. material index 与 material manifest 集合完全相等；
2. 每个 normalized leaf 恰有一个 coverage entry；
3. coverage summary 与 entry 实际计数相等；
4. `mapped` target 存在且不是 empty scaffold；
5. `unknown` 在稳定构建中为零；
6. mapping、coverage、alias 中的 coordinate 和 id 唯一；
7. alias 不冲突、不成链、不成环；
8. material PCR 的正文、structured projection 和 fingerprint 不因 coverage migration 改变。

## 迁移与兼容

第一阶段是完全 additive：生成 material index 和完整 coverage index，公共默认改为 material-first，同时保留
全部旧目录。Phase 2 已完成：canonical `import-cpc` 默认创建 0 个 PCR，缺失时建立 accepted-only v2
zero-edge mapping，校验并逐字节保留既有 mapping；非 3.0 版本先注册 coverage descriptor。Positive mapping
现只保留 3 条经审核 material edge，2,874 个旧 id 已进入 alias registry，resolve 已使用 alias-first terminal
redirect。Fail-fast `scaffold-cpc --legacy-scaffolds` 只兼容 v1/scaffold mapping；遇到 v2/current 会在 mutation
前拒绝，因此不能重新生成已退役目录。Phase 3 已删除 CPC `99000` 一个完整单叶子域并通过不变量验收；
其余物理迁移仍须按审核批次执行。

详细顺序、基线、pilot、回滚和验收见 `docs/migrations/p2-classification-coverage-migration.md`。

## 结果与代价

正面结果：PCR 数量重新反映方法学实体数量；分类覆盖仍可完整查询；默认 CLI 上下文显著缩小；新增分类体系不再复制 PCR 树。

代价：迁移期需要双轨读取、legacy scope 和 alias；coverage/index 生成与交叉引用校验成为新的构建职责；外部消费者必须区分 methodology catalog 与 classification coverage。

这些代价是显式的兼容成本，优于继续让 2,874 个空目录制造“方法学已存在”的错误信号。
