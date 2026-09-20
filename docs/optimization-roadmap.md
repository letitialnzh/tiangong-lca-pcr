---
title: PCR Library Optimization Roadmap
docType: plan
scope: repo
status: active
authoritative: false
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when prioritizing PCR library architecture and reliability work
  - when deciding whether a change belongs to trust, identity, compilation, validation, or scale
whenToUpdate:
  - when an optimization phase is completed
  - when baseline metrics or target architecture change
checkPaths:
  - docs/optimization-roadmap.md
  - AGENTS.md
  - README.md
  - builder/**
  - packages/**
  - classifications/**
  - library/modules/**
lastReviewedAt: 2026-07-14
lastReviewedCommit: 41e00bafd03530af7871e4620e59862dd779473e
---

# PCR 资料库优化路线图

## 目标

把本仓库从“分类驱动的大型 PCR scaffold 集合”逐步演进为可信的方法学编译与消费系统：

- PCR identity 与外部分类彻底解耦。
- Markdown 保持适合人和 Agent authoring 的表达空间。
- 进入机器消费、验证和发布的内容具有明确、可检查的契约。
- 未完成、未审核和未执行的部分始终显式，不用空结果表达成功。
- 大规模 classification coverage 不再迫使 canonical library 承担同等规模的空 PCR 文件。

## 当前基线

截至 2026-07-14，在完成 Phase 2 与 CPC `99000` 物理 pilot 后，仓库包含 2,876 个 PCR 目录：

| 状态 | 数量 | 消费含义 |
| --- | ---: | --- |
| `candidate / authored_methodology` | 3 | `review_required`，可带警告进入 guidance |
| `scaffold / empty_scaffold` | 2,873 | `unavailable`，只在显式 legacy/all catalog scope 下可见 |

CPC 3.0 的 2,877 个 leaf 仍由 coverage 完整表达：3 mapped、2,874 unmapped、0 unknown。Current mapping
只含 3 条 accepted material edge；2,874 个 retired-id alias 保留旧 identity locator，因此 alias 数量比
surviving scaffold 多 1。这个分布说明当前最重要的问题不是继续增加 scaffold，而是继续安全地移除
结构性噪声，并让少量 material PCR 能够可靠地编译、验证、审核和发布。

## 分阶段方案

### P0：消除假安全信号

状态：已完成。

- catalog、resolve、guidance 暴露统一 readiness；空 scaffold 禁止 guidance/validation。
- validation 区分结果与覆盖率，报告输入、performed/skipped checks、完整度和 findings。
- error finding 与 inconclusive validation 默认非零退出；report-only 必须显式选择。
- system boundary、allocation、validation 从 Markdown 确定性投影为可寻址规则。
- material PCR 的中英文关键规则保持相同的有序 rule id。
- material PCR lint 检查 structured freshness。
- lifecycle 使用合法状态矩阵；active 和 publish 具有实质 preflight。
- pull request 和 main push 运行统一 `npm run validate`。

退出条件：不存在 scaffold guidance、stale material projection、无门禁发布或“零 finding 等于完整验证”的路径。

### P1：强化编译契约与运行时可信度

状态：已完成。

1. 已实现：将 JSON Schema 接入 repo lint 和消费侧 contract tests，并为 readiness/validation report 增加跨字段语义断言；Schema 不再只是说明文件。
2. 已实现：为 material `structured.yaml` 增加确定性 projection metadata，包含 generator contract version、canonical Markdown SHA-256 和 generated-content SHA-256；可复现投影不包含时间戳。
3. 已实现：readiness 在运行时验证 material projection fingerprint、Schema 与独立的内容完整度语义门禁，不只检查文件存在，也不会把结构合法但方法学为空的 authored 投影判为可用。
4. 已实现：建立真实 material PCR 的跨层 fixture，连续验证 manifest、Markdown frontmatter、mapping、builder 重渲染、shared structured Schema、resolve、readiness、guidance 和 validation report，并锁定跨层 identity 与关键规则一致性。
5. 已实现：`builder/vocab/*.yaml` 成为唯一手写词表源，确定性生成共享 runtime constants 与 JSON Schema；validate 会拒绝 stale 生成物，material projection 和 mapping runtime 也会拒绝未知 token。
6. 已实现：公共消费 CLI 使用逐命令格式契约、受控 filter、严格参数校验、稳定错误 envelope、bounded tree 和分页 path-prefix down-drill；JSON 输出明确 filters、completeness 与下一命令。
7. 已实现：published current、单一 revision workspace、不可变 release snapshot、append-only history、exact-byte digest、per-PCR lock、journal/stage/backup 和显式 recovery 形成可执行契约。`pcr:revise` 固定 target version，后续发布从 revision 原子提升；`pcr-core` 对 managed current snapshot fail closed。

退出条件：已达成。所有 material PCR 都通过可执行 Schema、内容完整度与 fingerprint 校验；公开 guidance/validation 输出具有自动 contract validation；词表、CLI、published revision、release snapshot、transaction 和 recovery 边界均有实现与失败用例。

### P2：拆分 classification coverage 与 canonical methodology catalog

状态：Phase 2 的 contract/mapping/alias/redirect 步骤已完成；Phase 3 已完成 CPC `99000` 单目录 pilot，
CPC `98000` 与 bulk physical migration 待推进。

1. 已实现：ADR、迁移计划、确定性 material index 和完整 classification coverage read model；CPC 3.0 基线为 2,877 leaf、3 mapped、2,874 unmapped、0 unknown。
2. 已实现：catalog CLI 默认 material-first，legacy/all 只能显式请求；coverage summary/list 独立、受控并分页，known-unmapped resolve 不再伪装成方法学成功。
3. 已实现：2,874 条 deterministic alias 以 terminal classification coverage locator 保留旧 id；alias-first
   `resolve --pcr` 返回 `legacy_id_redirect` 和 copyable next command，不自动 follow。内容命令以
   `PCR_LEGACY_ID_REDIRECT` fail closed。
4. 已实现：canonical `import-cpc` 每次要求显式 source，默认 classification-only，缺失时创建 zero-edge
   v2 mapping，校验并逐字节保留既有 mapping，创建 0 个 PCR；coordinate lock、no-follow read、baseline
   CAS、staged writes 和 mapping-last commit 防止并发覆盖及 dangling edge。`scaffold-cpc` 只有显式
   `--legacy-scaffolds` 才能运行，且遇到 current v2 mapping 在 mutation 前 fail closed，不能 rehydrate
   retired directory。非 3.0 import 必须先注册 coverage descriptor。
5. 已实现：mapping v2/current 只允许 accepted positive edge，包含 decision-maker、UTC decision time 与
   durable decision ref；CPC 3.0 收缩为 3 条 material edge，CPC 2.1 为 empty v2。Coverage runtime 将 leaf、
   acceptance projection 和 canonical mapping 重新绑定，candidate/manual-review evidence 不会被自动选择。
6. 已实现：alias registry 从 retained leaf identity inventory 确定性生成，拒绝 material collision、unknown
   target、chain 和 cycle。Catalog 以 exact bytes 与 entry count 绑定 alias registry，并通过
   lock/journal/stage/backup whole-set transaction 发布 catalog/material/coverage；`catalog:recover` 支持
   rollback/forward recovery。
7. 进行中：CPC `99000` pilot 已删除 1 个 legacy 四文件目录，保持 3 material、3 accepted mapping、2,877
   coverage leaf 与 2,874 alias 不变。下一候选 CPC `98000` 与后续 2,873 个 legacy directory 仍需独立审计
   后分批迁移。

退出条件：canonical PCR 数量反映方法学实体数量，而不是外部分类叶子数量；新增分类体系不会复制 PCR 树。

### P3：模块组合与可执行验证

状态：P1 之后启动。

1. 为 `library/modules/**` 建立真实的 resolve、composition 和 conflict contract，guidance 显示每条规则的来源模块与覆盖关系。
2. 保留自由文本规则，同时为可执行规则增加可选 typed binding；不要强迫所有方法学语言伪装成代码。
3. 建立 validator registry，逐类实现 reference flow、measurement、inventory、allocation、data quality 和 validation checks。
4. coverage denominator 来自实际可执行 binding；未绑定规则继续明确列入 skipped，而不是被忽略。
5. 为规则 ID 的重命名、废弃和兼容建立版本策略。

退出条件：验证覆盖率可以按规则族和 rule id 精确解释，模块引用会真实改变 compiled guidance。

### P4：内容生产、审核与规模化发布

状态：在 P1/P2 稳定后推进。

1. 按产品重要度、数据生产需求和证据可得性管理 PCR authoring queue，不按 classification 顺序机械填充。
2. 标准化 evidence pack、UUID resolution、双语 diff、review finding 和 release evidence。
3. 生成轻量 catalog index 和按 PCR 拆分的消费 artifacts，避免每次加载全部 Markdown/guidance。
4. 发布 bundle 记录 PCR version、projection fingerprint、source evidence snapshot 和 validation summary。
5. 建立 deprecated、superseded、mapping redirect 和 consumer compatibility 流程。

退出条件：从 authoring 到 reviewed publication 的证据链完整，可按需分发且不依赖私有 workspace 状态。

## 衡量指标

| 维度 | 指标 | 目标 |
| --- | --- | --- |
| Truthfulness | empty scaffold 可进入 guidance/validation | 0 |
| Projection | material PCR stale 或 schema-invalid | 0 |
| Publication | 未通过 preflight 的 published PCR | 0 |
| Validation | 未声明的 skipped requirement family | 0 |
| Identity | 仅因 classification leaf 新增的 PCR record | P2 后为 0 |
| Composition | 声明 module 但 compiled guidance 未解析 | P3 后为 0 |
| Scale | 默认 catalog 返回的 empty scaffold 正文 | 0 |
| Quality | published PCR 的 review、translation、source 与 fingerprint 证据 | 100% |

## 实施原则

- 先修正信号真实性，再提高内容吞吐量。
- Markdown 是 canonical authoring truth；结构化输出是确定性编译产物。
- 只把稳定、需要机器判断的部分提升为严格 Schema；未知性用显式状态、warning、blocker 和 skipped checks 表达。
- classification、methodology、compiled guidance、validation report 和 release evidence 各自只有一个明确职责。
- 每个阶段都先加入失败用例和迁移保护，再改变大规模数据形态。
