---
title: P2 Classification Coverage Migration Plan
docType: plan
scope: repo
status: active
authoritative: false
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when implementing P2 classification coverage separation
  - when migrating or deleting legacy empty scaffold PCR directories
whenToUpdate:
  - after each P2 migration phase or pilot
  - when inventory counts or compatibility rules change
checkPaths:
  - docs/migrations/p2-classification-coverage-migration.md
  - docs/adr/0001-separate-classification-coverage-from-pcr-catalog.md
  - classifications/**
  - library/indexes/**
  - library/pcrs/**
  - builder/**
  - packages/**
lastReviewedAt: 2026-07-14
lastReviewedCommit: 41e00bafd03530af7871e4620e59862dd779473e
---

# P2 Classification Coverage 迁移计划

## 固化基线

2026-07-14 迁移开始时的可复现 inventory：

| 项目 | 数量 |
| --- | ---: |
| PCR manifest / 四文件目录 | 2,877 |
| `candidate / authored_methodology` | 3 |
| `scaffold / empty_scaffold` | 2,874 |
| CPC 3.0 hierarchy nodes | 4,586 |
| CPC 3.0 normalized leaves | 2,877 |
| CPC 3.0 mappings / unique targets | 2,877 / 2,877 |
| mapping 到 material / empty scaffold | 3 / 2,874 |
| dangling mapping | 0 |
| legacy scaffold tracked files | 11,496 |

三个 material coordinate 是 CPC 3.0 `01111`、`04412` 和 `04911`。迁移不得改变其 PCR id、Markdown、structured projection 或 fingerprint。

Phase 2 与第一个 Phase 3 pilot 完成后的当前 inventory：

| 项目 | 数量 |
| --- | ---: |
| PCR manifest / 四文件目录 | 2,876 |
| material PCR | 3 |
| surviving `scaffold / empty_scaffold` | 2,873 |
| CPC 3.0 normalized leaves | 2,877 |
| CPC 3.0 accepted mappings | 3 |
| CPC 2.1 accepted mappings | 0 |
| retired-id aliases | 2,874 |
| coverage `mapped / unmapped / unknown` | 3 / 2,874 / 0 |

Alias 数量比 surviving scaffold 多 1，是因为 alias 在物理删除前已经覆盖全部待退役 id，而 CPC `99000`
目录已通过 pilot 删除。

## Phase 1：Additive read models 与 material-first

状态：已完成。

- 实现确定性的 material PCR index；
- 生成完整 CPC 3.0 coverage index，目标计数为 `mapped: 3`、`unmapped: 2874`、`unknown: 0`；
- catalog 和 CLI 显式区分 material、legacy 与 all scope；
- 默认 list/tree 只加载 material；
- coverage summary/list 保留全部 2,877 个 leaf 的可查询性；
- resolve 对当时的 material mapping 保持兼容，对 legacy scaffold 明确标记 compatibility 与 unmapped coverage；
- 不删除目录，不修改旧 PCR id，不收缩现有 mapping。

Phase 1 已交付：

- `library/indexes/pcr-index.yaml` 是确定性 material index，当前为 3 条；
- `classifications/indexes/cpc-3.0-coverage.json` 完整覆盖 2,877 个 leaf，计数为
  `mapped: 3`、`unmapped: 2874`、`unknown: 0`；
- `npm run catalog:check` 已进入统一 lint，拒绝 stale artifact、dangling/conflicting mapping、错层 manifest
  和 coverage/material 交叉引用漂移；
- public CLI 的 `tree`/`list` 默认 material，`coverage summary|list` 独立且分页，exact resolve 显式区分
  `mapped`、`legacy_scaffold_compatibility` 和 known-unmapped；
- coverage source descriptor 固定 generator/contract 版本及 normalized leaves、mapping 两份输入的
  exact-byte SHA-256；catalog check 与 runtime read 都会拒绝 stale 或被替换的输入；
- core API 默认 scope 仍为 `all` 以保留库级兼容，CLI 在边界处显式选择 `material`。

Phase 1 验收：

- material index 与实际 material manifest 集合一致；
- coverage entries 为 2,877，code 唯一，summary 精确；
- 默认 material catalog 为 3，显式 all scope 仍为 2,877；
- 默认 material catalog 不含 `empty_scaffold`；
- 当时的旧 classification resolve 与旧 scaffold id 仍有确定性结果；
- `npm run validate` 通过。

## Phase 2：停止再生成并建立 alias

状态：已完成。

1. 已完成：canonical `import-cpc` 每次必须显式传入 `--source`。默认 classification-only，只生成 raw
   source、source metadata 和 normalized classification artifacts；mapping 缺失时创建 zero-edge mapping，
   已存在时先验证并逐字节保留，创建 0 个 PCR。非 3.0 版本必须先注册 coverage descriptor。Importer
   以 system/version coordinate lock、no-follow read、baseline CAS 和逐文件/完整目录 staged install 协调变更，
   mapping 最后提交；partial failure 不会产生 dangling new edge，先安装的 classification projection 可在下次
   重跑时确定性再生成。

   受保护的 `scaffold-cpc` alias 必须显式使用 `--legacy-scaffolds`，仅用于 retained v1 fixture 的迁移
   复现或测试，不能用于新 import。遇到 current v2 mapping 时在 mutation 前 fail closed，不能注入
   unaccepted edge 或 rehydrate 已退役目录；v1 fixture 的现有目标仍必须四文件齐全并与 legacy template
   逐字节一致。
2. 已完成：mapping v2/current 建立显式 acceptance contract。每条 positive edge 必须指向 material PCR，
   排除 `manual_review`，并携带 accepted status、decision-maker、UTC decision time 与 durable decision ref。
   CPC 3.0 三条 bootstrap acceptance 由 `docs/adr/0002-bootstrap-accepted-cpc-material-mappings.md` 记录。
3. 已完成：positive mapping 收缩为 CPC 3.0 的 3 条 accepted material edge；其他 2,874 leaf 由 coverage
   表达为 unmapped。CPC 2.1 是 empty current v2。Coverage mapped entry 投影 acceptance evidence，runtime
   resolve 会与 canonical mapping 再次比对。
4. 已完成：确定性生成 2,874 个旧 id 的 alias inventory，target kind 为
   `classification_coverage`。Registry 验证 source/path 唯一性、material collision、unknown target、chain
   和 cycle；`aliases:check` 已进入 lint。
5. 已完成：`resolve` 必须且只能传 `--classification` 或 `--pcr` 之一。Classification lookup 只选择
   accepted positive mapping；known leaf 无 mapping 返回 `unmapped`、`mapping: null`、`pcr: null`。旧 id
   alias-first 返回 `legacy_id_redirect`、terminal coverage locator 和 copyable next command，不自动 follow；
   content commands 返回 `PCR_LEGACY_ID_REDIRECT`。

Catalog 以 canonical path、exact-byte SHA-256 和 entry count 绑定 alias registry，并将 catalog、material
index 与 coverage indexes 作为 journaled whole-set transaction 发布。`catalog:recover` 对 pre-commit 中断
回滚旧集合，对 committed 中断向前完成 cleanup；`--force-stale-lock` 只允许在确认没有 writer 后使用。

迁移全程只有显式 create workflow 可以创建 canonical PCR；classification leaf 本身不是创建请求。

Phase 2 完成后才允许进入按审计记录执行的物理 pilot。

## Phase 3：小规模物理 pilot

状态：进行中；CPC `99000` pilot 已完成，CPC `98000` 尚未执行。

首个 pilot 选择零 material、单 leaf 的 CPC `99000` Services provided by extraterritorial organizations and
bodies。迁移前按历史 exact-byte hash 审计四文件目录，确认它仍是无实质方法学、无 review metadata 的
legacy scaffold；不能用已经演化的当前 template 代替历史字节证据。Pilot 只删除这一个四文件目录，
不改变三个 material PCR。

删除后验证：

- classification code 返回 `unmapped` coverage；
- 旧 PCR id 返回 coverage redirect，而不是普通 not-found；
- material catalog、mapping 和三个 material fingerprint 不变；
- 全仓校验通过。

当前结果：PCR 目录 2,877 -> 2,876，surviving legacy 2,874 -> 2,873；material 仍为 3，accepted mapping
仍为 3，alias 仍为 2,874，coverage 仍为 3 mapped / 2,874 unmapped / 0 unknown。CPC `99000` 是
known-unmapped，旧 id 返回 coverage redirect。

下一 pilot 候选是 CPC `98000` Domestic services；必须独立审计、验证和提交，以便完整回滚目录与审计
记录。不得因为 `99000` 成功而自动删除 `98000`。

## Phase 4：按子域批量迁移

状态：待实现。

- 只迁移经历史字节/内容审计确认无实质方法学的 `scaffold / empty_scaffold`；
- 每批选择完整 subdomain，避免留下难以解释的半迁移分类树；
- 每批记录 count、path inventory 和 checksum；
- 任何 material、手工增量、identity 冲突或未知状态都自动退出批处理；
- 每批后重新生成 coverage/index 并运行完整验证。

## Phase 5：完成切换

状态：待实现。

- empty scaffold PCR 目录归零；
- classification import 因新增 leaf 创建的 PCR record 数为零；
- canonical catalog 数量只反映真实方法学实体；
- classification coverage 仍达到 normalized leaves 的 100%；
- legacy alias 保留到完成外部 consumer 审计，不设置未经证据支持的自动到期日；
- coverage 数据通过分页命令按需加载，不内联完整分类树和空 Markdown。

## 回滚条件

出现以下任一情况立即停止当前批次并回滚：

- material PCR 数量、内容或 fingerprint 变化；
- coverage entry 不再与 normalized leaf 一一对应；
- `unknown` 非零；
- mapping target 不存在或指向 empty scaffold；
- legacy id 返回普通 not-found；
- alias 冲突、成链或成环；
- JSON output scope/completeness 与实际数据不符；
- `npm run validate` 失败。

旧 PCR id 永不分配给无关的新 PCR。Candidate suggestion 永不自动提升为 mapping；必须经过 identity、范围和方法学审核。
