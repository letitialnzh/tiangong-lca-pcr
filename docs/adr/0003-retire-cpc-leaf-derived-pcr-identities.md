---
title: Retire CPC Leaf-Derived PCR Identities
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when generating or validating the legacy PCR id alias registry
  - when resolving an old CPC leaf-derived PCR id
  - when removing a legacy empty-scaffold PCR directory
whenToUpdate:
  - when an alias target changes
  - when another classification-derived PCR identity family is retired
  - when the compatibility redirect contract changes
checkPaths:
  - docs/adr/0003-retire-cpc-leaf-derived-pcr-identities.md
  - classifications/aliases/**
  - classifications/systems/cpc/3.0/normalized/leaf-slugs.json
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - packages/pcr-core/src/pcr-id-aliases.ts
  - packages/tiangong-pcr-cli/**
lastReviewedAt: 2026-10-12
lastReviewedCommit: 3de84c1d092e7916530963783998f78e43607bf4
lastReviewedNote: "Reviewed the 51-record wood/paper integration: accepted narrower mappings to new semantic paths retain old leaf-derived coverage locators; runtime canonical redirect compatibility remains available without automatic generation."
---

# ADR 0003：退役由 CPC leaf 派生的 PCR identity

## 决策

将未被接受为 canonical material PCR 的 CPC 3.0 leaf-derived PCR id 登记为 legacy alias，而不再把它们
视为 canonical PCR identity。初始 inventory 包含 2,874 条 alias；CPC `21111` 接受为 material 后降为
2,873 条，CPC `02211` 接受为 material 后当前为 2,872 条；每条记录同时保存旧 id、旧目录、终点
locator、退役原因和本决策引用。

当前 2,872 条 alias 的终点均为对应的 `classification_coverage` coordinate。它们只回答“这个旧名字原来
来自哪个分类 leaf”，不会自动把该 leaf 解析成 PCR，也不会把第一个候选方法学当成 canonical target。

五个已经明确接受的 material PCR（CPC `01111`、`02211`、`04412`、`04911`、`21111`）继续保留原 canonical id，不进入
alias registry。未来如果一个旧 id 被明确替换为另一个 material PCR，可以使用 `canonical_pcr` 终点，但
必须有独立审核决定，且 target 必须是 material、不能是另一个 alias source。

## 稳定约束

- alias source id 必须与 `source_pcr_path` 的三段语义路径完全一致；
- source id 全局唯一，不能与 material PCR identity 冲突；
- `classification_coverage` 终点必须对应 normalized leaves 中恰好一个 leaf；
- `canonical_pcr` 终点必须对应恰好一个 material PCR；
- alias 必须是终点路由，禁止 self redirect、chain 和 cycle；
- `decision_ref` 必须指向仓库内可读取的审核记录；
- registry 在旧空目录尚未删除时就优先生效，使消费者能先迁移到 redirect contract；
- 删除旧目录后，同一旧 id 仍返回相同 redirect，而不是退化为普通 not-found。

## 消费行为

`resolve --pcr <old-id>` 返回 locator 和可复制的下一条命令。Coverage locator 的下一步是按精确
classification coordinate 查询；它不会隐式跟随到 PCR。`show`、`guidance` 和 validation 等需要真实 PCR
内容的命令遇到旧 id 时，返回稳定的 `PCR_LEGACY_ID_REDIRECT` 错误及相同 locator，促使调用方显式选择
下一步。

## 生成与审计

Checked-in registry 由 normalized `leaf-slugs.json` 与 accepted-only mapping v2 确定性生成。生成器必须
支持 check 模式，使源数据改变但 registry 未同步时 lint 失败。Mapping 中与 leaf-derived id 相同的 accepted
canonical PCR 被排除；其余 leaf 均生成 coverage alias，包括 accepted edge 指向另一个语义 PCR id 的
情况。分类子集的 accepted mapping 不能单独证明旧 broad identity 被整体替换，不能触发 canonical
redirect。`canonical_pcr` 类型保留运行时兼容能力；另行明确审核的 identity replacement 不由分类映射
生成器自动决定。

## 结果

分类覆盖仍完整保留 2,877 个 leaf，但 canonical PCR catalog 不再依赖 2,874 个空目录维持旧名字。物理迁移
可以逐批执行并独立回滚，同时公共接口始终保留确定、可解释的旧 id 去向。
