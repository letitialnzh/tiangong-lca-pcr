---
title: CPC54 同步分支整理与复核记录
docType: review
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: zh-CN
whenToUse:
  - when reviewing the CPC54 candidate delivery to the letitialnzh synchronization branch
whenToUpdate:
  - when this delivery changes or its validation results change
checkPaths:
  - docs/reviews/cpc54-sync-20261020/**
  - docs/adr/cpc-54*.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/indexes/pcr-index.yaml
  - packages/pcr-docs/scripts/category-titles.ts
  - library/pcrs/constructions-and-construction-services/construction-services/**
lastReviewedAt: 2026-10-20
lastReviewedCommit: 58cb897e4e2c98ffb99e1013ac982b4ad1f3fece
lastReviewedNote: Fork-only candidate integration; publication and complete foreground inventory are outside this review's approval scope.
---

# CPC54 同步分支整理与复核

本次把既有的 63 个 CPC54 语义 PCR 整理到 `letitialnzh/tiangong-lca-pcr:codex/sync-candywangx-main-20261016`，固定基线为 `58cb897e4e2c98ffb99e1013ac982b4ad1f3fece`。每个 PCR 保留自己的产品边界、路线、验收关口和四文件目录。全部保持 `candidate / authored_methodology`，中文为 `aligned`，没有发布、创建 release 或向上游仓库写入。

## 复核结论与修复

确认并修复了一项会导致负荷遗漏的核算错误：54251 原有燃料描述允许用排除所有未燃出口后的燃烧量作为唯一燃料产品输入。这会漏掉未退回废燃料及泄漏燃料的上游供应负荷。现在 `calc_fuel`、两个燃料采集要求及新增 `validate_fuel_supply` 在中英文中统一区分供应量与燃烧活动量：供应采用 `S_fuel` 或仅扣匹配可用退料一次的 `S_fuel - unburned_return_kg`；非退回的废物和损失保留供应负荷；燃烧活动另行扣除互斥的实际未燃出口。此修复没有指定新的燃料 UUID 或排放因子。

例如，供应 10 kg、可用退料 1 kg、未燃废物 1 kg、未围控泄漏 1 kg、实际燃烧 7 kg 时，匹配退料口径下的供应负荷为 9 kg，而不是 7 kg。这组数字仅说明核算逻辑，不能作为 PCR 的默认值。

另修正了 54122 原环境采集统括项中资源取用与释放共用输出方向的表达：资源取用为输入，释放为输出，并按实际物质和介质分别建立交换。保留宿主及既有资产的文件性接口仍只表达状态，不自动形成新采购负荷。

在本次明确列出的边界、参考量、过程责任、分摊、库存/退料、内部交接、单位及基本守恒复核中，未确认其他需要阻止候选交付的原则性错误。这个结论不等于逐项外部实测验证，也不证明所有可能工程路线均已覆盖。

## 清单结构与原文保留

原有 1,518 项“卡片”中，513 项保留为具体流卡；1,005 项实际是多材料、多物种、多服务或状态台账的采集要求。后者移入第 5 节的强制条件性清单补全要求，保留原 ID、原生单位、数量规则、采集协议、来源及暂定筛查提示。它们不再冒充一个聚合交换或一个 UUID。

新增的 `boundary_atomic_completion` 明确：每种实际产品、废物流、物质及环境子区室须独立建卡；不能相加异种原生单位、将缺记录当零、重复计入已有卡，或用筛查估算填补数量/化学组成。适用成员未解决或未有不发生证据时，前景定量清单仍不完整。

使用同步分支官方生成器生成 contract 2 的 `structured.yaml`。完整第 5 节及其条件、例外和嵌套采集要求保存在指纹绑定的 `normative_context`，不能仅凭扁平规则数组解释方法。连续两次生成的文件字节相同。逐目标检查证明投影结构及源一致性，不证明这些条件性要求已经转成完整实测清单。

中英文具体流卡和采集要求逐项比较过程、方向、流类型、ID、UUID、受控数量字段、采集协议、来源 ID、Range 数值边界及证据类别。另比较规则/协议/来源的有序 ID、参考属性/单位组及参考量，检查每个原 ID 在具体卡或采集要求中恰好保留一次。每项采集要求的描述、数量对象及属性/单位还与原卡逐项比较。原计算、分配、采集和来源记录与冻结源比较；声明的 54251 修复及计数单位显示别名除外。保留的旧自动边界规则被赋予同名显式 ID，避免插入要求时发生编号漂移。

中文章节和表头统一为当前解析器支持的格式，避免可见文字存在而解析结果为空。52 处中文显示名的英文残留已整理；26 张已绑定 UUID 的卡采用平台返回的准确中文 baseName。`item` 是已核实 `Item(s)`、系数 1 的显示别名；没有创建新的数量或质量换算关系。

首次将该语义子目录纳入 material catalog 还暴露了文档分类中文标签缺失：补充 `construction-services` → `施工服务` 的显示标签，使用现有分类标签测试验证。没有修改目录身份、选择逻辑或文档构建预算。

## 方法职责检查与模块兼容

同步基线仅提供 8 个 `status: scaffold` 的 core Markdown 模块，没有原工作区引用的 YAML 候选模块。此次不复制不存在的模块绑定，不把脚手架声明为已审方法；manifest 使用空的 `modules.core`。原 PCR 中的具体方法要求仍保留。旧模块引用及已有逐条义务答复作为历史证据保存在 `content-review.json`，不能解释为当前模块绑定或此次重新批准的模块。

| 复核职责 | 核实内容与交付限制 |
| --- | --- |
| 产品与关口 | 施工服务与材料、整项工程、既有宿主及交接状态区分；参考量来自实际验收；返工负荷保留，验收几何不重复增加。 |
| 路线与过程责任 | 起始条件、实际工序、内部材料/状态交接、上游供应和排除工程有明确责任；同一供应商服务及展开作业不得重复表示。 |
| 清单身份与方向 | 单一具体卡和条件性集合分开；产品、废物及环境交换区分；资源取用与释放分别定向；未知身份保持未解析。 |
| 计量与核对 | 实际同状态桥接、单次归一化、库存与退料互斥；面积/长度不自动转为质量；守恒差额不能自动成为排放。 |
| 分摊与共享服务 | 直接量先归属，剩余量仅在相同边界和期间内按完整实证权重分配；零余额不强求权重，负或未知余额保持缺口；供应商已含负荷只计一次。 |
| 水与物料状态 | 湿物总量与水组分分开；水化/自由水、内部交接、废水、残留和蒸发池互斥；whole/composite 与 constituents 只用一个一致视图。 |
| 数据质量与证据 | 暂定 Range 不升级为实测、通用限值或发布证据；缺失事件和身份不会因 checker 通过而被视为已完成。 |

54530、54560 和 54770 的长计算表按实际规则逐组归并复核重复的物理量、库存、内部交接、共享服务及质量/水池逻辑；没有把重复长文长度当作额外证据。该职责表是本次人工复核记录，不是新增的可复用模块或产品事实缓存。

## UUID、数量与分类证据

2026-10-20 只读回查了本批实际写入的 5 个不同 flow UUID，涉及 26 张卡；核对名称、类型、参考属性及相关环境介质。证据位于 [flow-identity-evidence.json](flow-identity-evidence.json)。其余身份保持未解析，不接受搜索相似度作为确认。

支持属性/单位使用 2026-10-18 成功导出的快照，记录原文件 SHA-256 和本批使用的 7 个属性、7 个单位组。2026-10-20 新版 CLI 的重新导出因 OAuth 会话要求未成功，故没有声称支持行是本次新回查。证据文件不携带登录凭据、个人身份或本机路径。

原 423 个数值 Range 中，406 个属于 `reasoned_estimate` 筛查提示、13 个属于采集计算、3 个为化石碳氧化 `44/12` 方法关系，1 个为参考归一化恒等量。移动集合要求没有提高这些数值的证据等级。现有具体卡有 186 条 Range；没有 Range 的卡继续保留取证需求。

分类边保留 63 个独立接受决策，全部为 `narrower`，对应 `docs/adr/cpc-<code>.md`。映射接受的是具体语义子集，不代表 CPC54 每个叶子下的所有产品和技术路线都已完成。基础映射的原有字节保留，仅追加本批 63 条边。

针对易混分类，回查 UNSD 的 [54400](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/54400)、[54790](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/54790)、[54590](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/54590) 和 [54699](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/54699)。54621 的三档 PEX 管材质量示例与 [RWC 2024 安装指南](https://www.sharkbite.com/sites/default/files/files/RWC-Piping-Systems-Install-Guide-2024.pdf) 表中 lb/ft 数值及显式换算一致；该示例不决定任意项目 BOM，未声明的 gallon 口径仍须确认。这些是针对性主来源核查，不是全部来源逐页重新取证。

## 验证与交付状态

最终逐目标和独立一致性检查结果记录在 [content-review.json](content-review.json)，路径及最终 SHA-256 见 [change-manifest.json](change-manifest.json)。仓库验证使用 Node 24.19.0 / npm 12.2.0，不修改生成器、schema、检查器、CI 或验证门槛。

- 63 个目标均通过官方 `pcr:check --format json`，合计 2,754 项 performed、0 skipped、0 error，保留 280 条非阻断 Range 取证警告。该数量包含两种语言的检查，不等同于 2,754 项科学情景验证。
- 63 个目标均连续两次官方 `sync-structured`，字节相同；最终格式收尾后对受影响目标再次生成并检查。
- 1,518 项原 ID、具体卡与条件性要求的双语元数据、原描述/数量/属性、原规则及规范性上下文保留性检查为 0 个未解决差异；54251 的有意修复单独列出。
- coverage 回读为 CPC54 63/63 mapped，均为 `narrower`。全 CPC3 索引为 2,877 个叶子、1,268 mapped、1,609 unmapped。material catalog 从 1,347 增为 1,410。
- 原 1,205 条接受映射字节及语义未变，2,814 个非本批 coverage 条目未变；全部原 material catalog 条目保留。原共享目录的本批四文件与 ADR 仍匹配输入快照。
- runtime、migration、11 个项目的 typecheck、vocab、aliases、catalog 和 CPC chain 检查通过。仓库 lint 为 0 错误、38,457 警告；不借本批交付改写历史警告。

逐目标检查没有将缺少量化证据、未解析 UUID 或条件性清单成员隐式清零，也没有提升 lifecycle。当前基线的 CI 分类器会为本批 ADR 和审查文件选择完整资格通道；没有修改分类器或文件名来规避该通道。本地没有额外运行完整 `docs:build` 或产品封存资格。

`npm run validate` 的本地聚合结果为失败且不完整：2,865 passed、115 failed、2 cancelled、75 skipped，退出码 1。在已确认失败后中断剩余全库 catalog/CLI 测试，不能据此宣称完整仓库通过。失败涉及当前 darwin 主机上的 Goal 报告/回执读取、缺少 `pdftotext`、WebKit 超时及子进程 npm 版本。外层命令使用 npm 12.2.0，但子进程最初取到 11.19.0；已修正本机临时 PATH，随后 `runtime:release` 确认实际 Node 24.19.0 / npm 12.2.0，未重跑全部封存测试。

第一次离线全库测试还因本次审查在并行验证时修改 manifest 元数据而触发 `PCR_READ_CONTEXT_STALE`。这是本地审查顺序造成的源冻结失败。冻结源后的独立全库重放在 338.5 秒后停止，记录为 0 pass、0 fail、1 cancelled；离线资格仍未建立，不能把这次重放当作成功。与本批直接相关的中文分类标签缺失已修复，现有标签测试 1/1 通过；全部 11 个项目的类型检查随后再次通过。

最终格式收尾后只重验受影响目标及本批内容一致性，没有再展开一轮完整全库测试。此次交付为 **Draft PR**；完整 CI、剩余平台/工具环境问题及必要的封存资格仍须通过后才能合并或发布。没有执行 methodology publication、合并 PR、产品发布、部署或向上游仓库推送。
