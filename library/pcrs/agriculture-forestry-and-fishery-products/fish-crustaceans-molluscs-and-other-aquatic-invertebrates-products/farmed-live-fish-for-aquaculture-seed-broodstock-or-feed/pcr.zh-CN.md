---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-live-fish-for-aquaculture-seed-broodstock-or-feed
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: draft_translation
---

# 用于水产养殖苗种、亲鱼或饵料的养殖活鱼

## 1. 范围与适用性

适用于有管理生产来源证据、在首次生产者界点为水产养殖苗种、亲鱼或活鱼饵料用途交接的存活鱼。每个数据包仅声明一种用途及其实际物种、鱼群和阶段。已出膜仔鱼或鱼苗可作为最终苗种，无须达到食用规格。卵或配子可作为上游投入，但不属于最终鱼参考产品。

不涵盖观赏鱼、直接供人食用鱼、仅短时暂养而未管理生产的野生鱼、纯研究或休闲钓饵用途、死饵、鱼粉鱼油、非鱼类苗种或饵料、冷冻或其他加工鱼。该语义边界比 CPC 04192 的全部非食用养殖活鱼范围窄。UN 分类定义支持用途来源区分；本 PCR 的计量、台账及边界细节为内部方法，不把历史饲养或药物例子当作通用处方。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-live-fish-for-aquaculture-seed-broodstock-or-feed |
| classification_refs | cpc:3.0:04192 (narrower) |
| covered_products | 实际管理生产的活鱼；单一声明的养殖苗种、亲鱼或活鱼饵料用途 |
| excluded_products | 观赏、直接食用、纯研究或休闲钓饵鱼；仅暂养野生鱼；死饵、鱼粉鱼油；最终鱼卵配子；非鱼生物 |
| representative_product | 实际指定物种与生命阶段的合格存活鱼群，生产者交接 |
| production_route | 自有繁殖孵化或购入实际上游阶段 → 实际发生的孵化后管理养鱼 → 从最后实际自有生产节点独立收集 → 实际有界暂养 → 活体呈交和交接；符合实际苗种阶段与适用性时可由孵化直接收集，不虚构养鱼阶段；繁殖父活动 broodstock_hatch，水系统父活动 managed_rearing |
| market_state | 交接时存活、净湿重，不含载水、氧气、包装和非合格死鱼 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明养殖用途、物种与阶段的生产者交接存活养殖鱼 |
| How much | 1 kg 存活鱼净湿重；附实际数量与代表性个体质量 |
| How well | 苗种：声明投放阶段与健康适用；亲鱼：实际性别成熟与繁殖适用；活饵鱼：实际接收养殖对象及投喂适配；不可仅按千克视为等效 |
| How long or cycle | 完整实际鱼群周期与交接期间，含适用亲鱼建立、重复繁殖周期、替换退役和期初期末负担结转 |
| reference_flow_link | `aquaculture_live_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 生产者交接的声明养殖用途养殖活鱼 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种和鱼群; 养殖来源及自有购入阶段; 单一苗种或亲鱼或活鱼饵料用途; 生命阶段和个体规格; 存活与健康适用; 亲鱼性别成熟或饵料接收方适配; 净湿重和实际数量及抽样; 实际水系统及盐度温度; 周期期间与亲鱼结转; 实际首次生产者界点及包装暂养路线 |

这些限定须写入前景数据包元数据或对应产品、参考流及过程说明；缺失即参考定义不完整。载水体积、卵数或通用每千克尾数不能替代实际鱼群湿重测量。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每 1 kg 参考流采用校准净称量的合格存活鱼湿重，排除水、气体、包装、死鱼及拒收鱼；采用 cp_handover。 |
| `actual_count_mass` | all fish transfers | 质量 | kg | 数量转质量须用同物种、阶段、期间实际代表性样本质量和数量，披露样本方法及不确定性；不得使用通用尾数或卵数系数。 |
| `water_feed_gas_basis` | water; feeds; oxygen | 质量 | kg | 体积转质量须有实际密度及温度盐度或气体压力温度纯度，饲料湿干转换须实测水分；内部循环及内部鱼转移保留实际数量。 |
| `energy_units` | electricity; heat | 净热值 | MJ | 1 kWh = 3.6 MJ；保留原始计量单位和换算，不将电量和热量直接当燃料质量，不将服务当千克。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际亲鱼建立或购入卵、仔鱼、鱼苗及其他上游鱼阶段，含真实来源和相应上游数据接口 |
| starting_condition_role | 有证据阶段边界；不是零负担起点 |
| product_classification_scope | CPC 04192 内更窄的养殖苗种、亲鱼或活鱼饵料；最终须为已出膜存活鱼 |
| recursive_input_rule | 同类别购入鱼记录实际阶段、来源、数量和供应商数据集引用；上游另包建模，避免无限递归及重复自有阶段，不删除真实上游负担 |
| upstream_dataset_requirement | 供应数据须匹配物种、阶段、用途、场址或地域、周期、技术和负担分配；缺失需披露并补足，不能默认免费 |
| disclosure | 所有自有购入阶段、实际生命阶段、繁殖和水系统父活动差异、鱼群周期及结转、共享设施消费者、保活包装和首次生产者交接点 |

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `b_origin` | product_scope | 须有管理生产及单一养殖用途、生命阶段鱼群记录；仅暂养野生鱼不属于本养殖 PCR。 | `un-cpc-3-2025`; `pcr-live-aquaculture-method` |
| `b_owned_purchased` | broodstock_hatch; managed_rearing | 识别每个自有或购入阶段及上游来源。购入阶段以匹配供应商数据集替代实际上游活动，不取消负担，也不重复自有繁殖。 | `fao-seed-production`; `pcr-live-aquaculture-method` |
| `b_phase_end` | broodstock_hatch; managed_rearing | 在声明适用活体阶段结束实际管理生产。实际没有独立孵化后养鱼且已证实苗种阶段与适用性时，仔鱼或鱼苗由孵化直接收集，不强制养鱼、苗种培育或育成。至少须有实际自有孵化或养鱼生产；仅购入成品后交易或暂养不构成此生产路线。保留全部孵化负担；亲鱼需实际成熟与适用证据，饵料鱼需实际接收方及用途适配。 | `pcr-live-aquaculture-method` |
| `b_deltas` | broodstock_hatch; managed_rearing | 繁殖替代方式归属于 broodstock_hatch，水系统替代方式归属于 managed_rearing。现行事件记录及场址拓扑须证明资源、计算和核验类别的差异，不因替代标签增加重复生物输出。 | `fao-seed-production`; `ifas-ras-health`; `pcr-live-aquaculture-method` |
| `b_responsibility` | harvest; holding; presentation | 收集独立将所选鱼群移出生产。实际有界暂养维持可用活体状态，呈交保护并移交同一活鱼。保留每次内部质量、数量及来源鱼群；仅凭实际未用证据省略条件节点。 | `fao-live-fish-handling`; `pcr-live-aquaculture-method` |
| `b_complete` | all selected nodes | 纳入实际饲料、肥水、繁殖或健康材料、水、泵送或曝气或照明电、热、燃料、氧气、化学品、包装及损失。集中公用资源和残余台账保留来源阶段、运行及期间；所选阶段不得无资源负担。 | `pcr-live-aquaculture-method` |
| `b_period_assets` | broodstock_hatch; utilities | 列明亲鱼建立、每个繁殖周期、替换或退役、鱼群阶段、期初期末存量、资产服务期间及消费者。归属负担随在养存量结转并核对终端去向；披露资产截断及敏感性。 | `pcr-live-aquaculture-method` |
| `b_gate` | presentation | 仅至明确首次生产者界点纳入实际自营包装、装载及自营运输。排除之后受方运输、投放、养殖、投喂或使用和下游包装去向；披露供应商和处理界面。 | `pcr-live-aquaculture-method` |
| `b_streams` | residuals | 分类每个来源阶段死亡、逃逸鱼、无活力卵、培养废弃物、固体、处理污泥、废水、化学物和制冷剂事件。区分外部处理移交及直接环境释放，保留损失上游负担；未观测不可填零，不自动抵扣避免负担。 | `pcr-live-aquaculture-method` |

## 6. 过程清单结构

所有所选节点均声明批次、活动或连续模式、运行期间、清洗转换和实际输出。公用资源与残余处理台账按来源阶段一次归属，节点文字和材料卡不得重复添加相同资源交换。外部服务及共享资产活动使用 cp_service_utilities; cp_service_presentation/cp_shared_utilities 的真实单位；只有核验后才能形成具体服务交换。

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `broodstock_hatch` | 自有亲鱼与孵化场 | `conditional` | 实施自有亲鱼维护、繁殖或鱼卵孵化 | 管理型生物生产 | 实际鱼卵或孵出鱼及留养亲鱼 |
| `live_feed` | 自营活饵生物培养 | `conditional` | 场内培养微藻、轮虫、卤虫或其他活饵生物 | 支持性生物生产 | 移交养鱼阶段的实际活饵生物量 |
| `managed_rearing` | 所选阶段的管理养鱼 | `conditional` | 实际实施独立孵化后仔鱼、鱼苗、苗种或后续养殖；不因资料缺失而省略，实际仅孵化苗种路线则不虚构此阶段 | 管理型生物生产 | 在声明生命阶段可收获的实际活鱼群 |
| `harvest` | 活鱼群收集 | `required` | 从最后实际自有生产节点收集：有养鱼则来自 managed_rearing；实际仅孵化苗种则直接来自 broodstock_hatch | 独立收获 | 移交暂养或呈交环节的实际收集存活鱼 |
| `holding` | 有界活体暂养与驯化 | `conditional` | 收集鱼在交接前实施实际维持存活的干预 | 保活稳定 | 有界暂养后的实际存活鱼 |
| `presentation` | 活体呈交与生产者交接 | `required` | 首次生产者交接，仅在实际发生时包含包装与装载 | 包装呈交 | 生产者交接的合格活鱼 |
| `utilities` | 按阶段关联的公用资源与直接释放 | `required` | 记录每个所选前景节点的实际资源 | 共享公用资源台账 | 一次归属各实际消费者的资源 |
| `residuals` | 按阶段关联的废水与残余物管理 | `conditional` | 发生实际废水、死亡、固体、逃逸、泄漏或处理事件 | 残余去向与处理 | 实际处理交接或直接环境释放 |

### 过程： 自有亲鱼与孵化场 (`broodstock_hatch`)

亲鱼身份、性别和成熟度、各繁殖事件、孵化与出膜须关联子代批次。自然产卵、环境诱导产卵及辅助或人工受精是该管理型生产父活动下的替代方式；实际处理、操作、水温或光照变化及配子采集界定差异。每次事件采用一个实际方式，不同有记录事件可并存。购入受精卵替代自有繁殖，购入鱼苗替代对应自有孵化阶段。卵和配子在移交时计数、计量，不得成为最终活鱼参考流。留养亲鱼属于在养存量，不是额外销售产品。

#### 输入

##### 产品流

###### 购入亲鱼补充 (`hatchery_parent_stock`)

记录实际物种、性别、成熟度及补充亲鱼上游生产者负担；留养亲鱼单列。

- 选定流: 购入亲鱼补充
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_stock_broodstock_hatch 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stock_broodstock_hatch`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

#### 输出

##### 产品流

###### 移交养鱼或直接收集的孵出活鱼 (`hatched_fish_transfer`)

记录实际孵出存活仔鱼或鱼苗的质量及尾数；按事件关联实际养鱼入口，或实际仅孵化苗种路线的 harvest_stock_input。前期败育卵和孵化损失负担留在鱼群，同一批鱼不同时走两种入口。

- 选定流： 移交养鱼或直接收集的孵出活鱼
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_stock_broodstock_hatch 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stock_broodstock_hatch`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

### 过程： 自营活饵生物培养 (`live_feed`)

此为活饵生物培养边界，与作为活饵出售的鱼区分。逐项识别培养物种、接种物或休眠卵、食物和营养强化剂、肥料、盐度培养介质、清洗、曝气、加热和照明。公用资源及水通过资源台账一次计入，以 live_feed 为消费者。收获饵料移交记录实际湿重、干物质及适用的数量或浓度；废弃培养物、卵壳和培养水记录去向。外购活饵以供应商负担替代对应自营培养，不得作为免费培养产物。

#### 输入

##### 产品流

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

#### 输出

##### 产品流

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

### 过程： 所选阶段的管理养鱼 (`managed_rearing`)

仅实际发生独立孵化后养鱼时纳入此节点；实际仅孵化的合格苗种可直接收集，但资料缺失不能证明阶段不存在。声明每个实际阶段；仔鱼或鱼苗苗种交接可在培育或育成前结束。父活动为 managed_rearing：池塘养殖需肥水、底泥和排水记录；流水养殖需取排水通量；水槽或循环水系统需循环、补水、过滤、反冲洗、曝气及能耗记录。逐阶段和系统选择实际拓扑；不同有证据系统可跨阶段并存，同一水回路不可同时采用相互排斥标签。差异由现行场址图及计量记录确定，不作全物种技术假设。天然池塘饵料记录为生态贡献，并计入实际肥水负担，不虚构其外购饲料。野生来源投入只有经过有记录的管理生产后才能形成养殖来源最终鱼，短时暂养不足以证明。

#### 输入

##### 产品流

###### 购入声明上游阶段的鱼 (`purchased_fish_stage`)

用阶段特定供应商负担、物种、数量、存活湿重和管理来源历史替代真正购入阶段。

- 选定流: 购入声明上游阶段的鱼
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_stock_managed_rearing 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stock_managed_rearing`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 进入养殖的自孵鱼 (`owned_hatched_input`)

匹配 hatched_fish_transfer 及接收鱼群；内部移交携带先前负担，不重复供应商上游生产。

- 选定流: 进入养殖的自孵鱼
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_stock_managed_rearing 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stock_managed_rearing`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

#### 输出

##### 产品流

###### 待收集养殖活鱼 (`reared_live_transfer`)

记录声明终止阶段实际存活质量和数量；不得强制仔鱼或鱼苗育成至食用规格，内部质量不设为一千克。

- 选定流: 待收集养殖活鱼
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_stock_managed_rearing 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stock_managed_rearing`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

### 过程： 活鱼群收集 (`harvest`)

收集结束最后实际自有生产阶段：有养鱼则承接 reared_live_transfer；实际仅孵化苗种则直接承接 hatched_fish_transfer。界定可交付鱼、回塘在养鱼、死亡和伴随物。该独立职责将网捕、泵送、聚集和移交损失与生物生长及后续驯化分开记录，不增加生长。即使混批，也保留来源池槽、鱼群及收集时间。实际收获质量是内部移交量，不是固定最终一千克。

#### 输入

##### 产品流

###### 进入活体收集的管理养殖鱼 (`harvest_stock_input`)

有养鱼时匹配实际 reared_live_transfer；实际仅孵化苗种时匹配 hatched_fish_transfer。每次移交唯一关联来源节点、单元、鱼群、事件及质量/尾数，并携带全部先前负担；同一批鱼不重复计入两条路径。

- 选定流: 进入活体收集的管理养殖鱼
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_stock_harvest 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stock_harvest`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

#### 输出

##### 产品流

###### 移交暂养或呈交的收集存活鱼 (`collected_live_transfer`)

记录收集损失后实际湿重和数量；区分回塘在养鱼、有意移交和死鱼。

- 选定流: 移交暂养或呈交的收集存活鱼
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_stock_harvest 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stock_harvest`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

### 过程： 有界活体暂养与驯化 (`holding`)

界定起止时间及干预前后存活状态，并记录实际水、氧气、盐度、温度、停饲或饲喂及健康干预。暂养保持声明可用活体阶段；实质性生产归入 managed_rearing。计入实测死亡、拒收、维持饲料、换水及温控释放。宰杀或致死冷却不是活体保鲜选项。外部健康或暂养服务按真实服务单位保留在辅助服务台账。

#### 输入

##### 产品流

###### 进入有界暂养的收集活鱼 (`holding_live_input`)

采用 collected_live_transfer 并记录实际暂养开始、用途和存活状态。

- 选定流: 进入有界暂养的收集活鱼
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_stock_holding 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stock_holding`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

#### 输出

##### 产品流

###### 有界驯化后的存活鱼 (`held_live_transfer`)

计量扣除全部暂养损失后进入呈交的实际验收湿重、数量、经历期间及存活状态。

- 选定流: 有界驯化后的存活鱼
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_stock_holding 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stock_holding`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

### 过程： 活体呈交与生产者交接 (`presentation`)

接收收获或暂养环节的实际活鱼；声明无包装槽罐交接或实际袋装、容器包装。记录容纳材料、衬垫、箱、标签、装载及可重复容器分配，包装、水和气体数量分别计量。至验收时保持存活及声明养殖用途。包装保护同一活鱼，不增加参考生物量。只有声明首次生产者交接界点实际包含自营运输时才在此记录，并说明路线和职责；界点之后受方运输、投放和使用不在范围内。

#### 输入

##### 产品流

###### 进入呈交的实际活鱼 (`presentation_live_input`)

按实际路线匹配 collected_live_transfer 或 held_live_transfer；同条鱼不得兼计两者。

- 选定流: 进入呈交的实际活鱼
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_stock_presentation 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stock_presentation`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

#### 输出

##### 产品流

###### 生产者交接的声明养殖用途养殖活鱼 (`aquaculture_live_handover`)

每个物种和阶段鱼群仅声明苗种、亲鱼或活鱼饵料中的一种用途；仅含交接前拒收和死亡扣除后的存活鱼净湿重。

- 选定流: 生产者交接的声明养殖用途养殖活鱼
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_handover`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 内部一千克归一化定义
  - 范围角色: `allowed_range`
  - 下限: 1
  - 上限: 1
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `method_formula`
  - 来源: `pcr-live-aquaculture-method`

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

### 过程： 按阶段关联的公用资源与直接释放 (`utilities`)

该台账统一负责所有所选过程的供水、自行取水、电力、燃料、氧气、热和公用设施直接排放。每项数量记录来源阶段、水回路、计量表、运行批次和期间，覆盖亲鱼、孵化、活饵培养、养鱼、收集、暂养、呈交及自营处理。共享泵、鼓风机、过滤器、紫外设施、制冷、加热和备用发电机设置消费者及期间矩阵。内部循环水属于实测辅助活动，不是额外外部取水。同种资源跨阶段以计量或分配一次归属，不得默默重复。

#### 输入

##### 产品流

###### 符合实际养鱼用途的外部供应处理工艺水 (`supplied_treated_water`)

仅有文件证明适合接触鱼或实际用途的外供已处理工业工艺水；不涵盖海水、自行取水、内循环或废水，已含供应商处理不得重复。

本卡仅表示一个实际外供水交换，不假定使用工业过程水。保留实测水量及实际来源、处理、等级、盐度和用途。按实际动物接触、载水、清洗或制冰用途验证水质适用性，完成数据包前须独立解决实际供水的精确身份，不继承工业水UUID。

- 选定流：实际外供处理水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定: 未解决（`unresolved`）
- 数量规则: 按 cp_water_utilities 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_utilities`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 中国电网平均低于1千伏交流电到用户消费组合 (`cn_low_voltage_electricity`)

仅适用于有文件证明匹配的中国电网平均低压消费电；计量电量一次分配至实际阶段、运行和期间。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定: fixed
- 数量规则: 按 cp_energy_utilities 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy_utilities`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100000
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 其他实际电力供应 (`other_electricity`)

另行明确其他实际购电国家、电压、供应商或供电技术，不含已计入 cn_low_voltage_electricity 的电。自发电作为 cp_energy_utilities 内部辅助活动，燃料及直接释放一次计入，不另设第二个购电交换。

- 选定流: 其他实际电力供应
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 按 cp_energy_utilities 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy_utilities`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100000
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际供应的活鱼或培养用氧气 (`supplied_oxygen`)

记录实际气体纯度、相态、压缩和交付规格；称量供应或使用量，或用已核验密度及实测气体条件，不作无条件体积转千克假设。

- 选定流: 实际供应的活鱼或培养用氧气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_material_utilities 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material_utilities`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际购入热能 (`purchased_heat`)

实际交付给孵化、养殖、培养或暂养的热；购入热能区分自营加热燃料及有效制冷活动。

- 选定流: 实际购入热能
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 按 cp_energy_utilities 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy_utilities`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100000
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

#### 输出

##### 产品流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

###### 实际燃烧向未细分空气排放的化石二氧化碳 (`direct_fossil_co2`)

仅实际直接化石燃料碳排放；须独立实测燃料碳或因子证据、氧化和设备分配；不含生物呼吸、供应二氧化碳或二氧化碳当量。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定: fixed
- 数量规则: 按 cp_release_utilities 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release_utilities`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

### 过程： 按阶段关联的废水与残余物管理 (`residuals`)

即使集中处理，也为每个所选节点保留来源阶段事件记录。每股排水或为移交指定外部处理的废物流，或为自营处理后的实际环境释放；同股不得两者兼计。自营处理投入、污泥、弃流或反冲洗和实测末端释放均需纳入，公用资源一次分配至此。死亡鱼、无活力卵、退役亲鱼去向、逃逸与泄漏不能默认零。可出售的有意产品另行分类，处置和声称的避免负担抵扣不得抹去其上游负担。

#### 输入

##### 产品流

##### 废物流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 基本流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

#### 输出

##### 产品流

该组无独立交换；实际事件按上述职责及来源阶段台账记录。

##### 废物流

###### 交外部处理的实际废水 (`external_effluent_treatment`)

实际计量废水质量、化学组成、处理方及边界，不含在此已建模最终环境释放的流。

- 选定流: 交外部处理的实际废水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_water_residuals 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_residuals`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 基本流

###### 向声明受纳环境实际排放的水 (`direct_water_discharge`)

实测自营处理后末端排水或实际未经处理排水，核对来源阶段；不含交外部处理水及循环水。

- 选定流: 向声明受纳环境实际排放的水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_water_residuals 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_residuals`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 活鱼向声明自然环境实际逃逸 (`fish_escapes`)

记录实际物种、湿重或数量、来源阶段、事件及去向；环境释放分类附种群后果披露，不可一律零。

- 选定流: 活鱼向声明自然环境实际逃逸
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 按 cp_residual_residuals 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residual_residuals`
- 来源: `pcr-live-aquaculture-method`
- 数量范围: 可替换的宽泛暂定质量筛查，实际记录优先
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `a_precedence` | common production burdens | 优先细分独立计量活动，再对剩余共同负担采用有证据的因果物理关系。仅无法建立物理因果时，在共同界点采用并说明经济分配，记录价格期间、全部输出价值及敏感性。不同苗种、亲鱼和饵料鱼之间不得预设湿重为因果指标。 | `ghg-product-standard-2011`; `pcr-live-aquaculture-method` |
| `a_output_set` | hatchery_other_products; rearing_other_products | 逐一列明所有有意出售的物种、鱼群、生命阶段或用途、实测数量和各自界点。未售残余、死亡、废物及留养存量另行分类。每项共同负担分配一次，内部移交不是额外销售。 | `pcr-live-aquaculture-method` |
| `a_modes` | all selected nodes | 声明鱼群批次、重复繁殖活动或连续及重叠生产模式与运行或期间起止。将饲料、公用资源、输出、清洗和转换事件关联适用运行；以有记录因果活动将共同闲置或转换负担分配至实际受益者。 | `pcr-live-aquaculture-method` |
| `a_parents_periods` | broodstock_hatch | 跨繁殖周期追踪亲鱼购入或建立及维持；依据有证据繁殖贡献或其他合理因果关系将实际亲鱼服务负担分配至子代事件。核对期初期末亲鱼、补充、死亡和终端销售或处置，含退役剩余未分配负担。不得每次繁殖重计完整亲鱼建立。 | `pcr-live-aquaculture-method` |
| `a_cohort_carryover` | managed_rearing; holding | 鱼群携带期初负担及实际本期投入。按阶段核对期末存活存量、合格交接、内部移交、死亡或拒收及逃逸。期末存量及负担结转下期，损失留在存活产品负担中，不把死鱼抵作等效活鱼。 | `pcr-live-aquaculture-method` |
| `a_shared` | utilities; residuals; presentation | 对各共享水回路、泵、鼓风机、温控、过滤器、孵化房或重复容器列明实际消费节点、鱼群和期间。先用分表，再用与资产匹配的实测功率时间、处理通量、占用时间或其他有证据驱动量。份额总和核对资产台账，维护或替换及实际复用一次计入。 | `pcr-live-aquaculture-method` |
| `a_services` | cp_service_utilities; cp_service_presentation; cp_shared_utilities | 诊断、暂养服务及界前运输保留实际检测、鱼天、吨千米或供应商活动单位，绑定交换前核验属性和单位。未知服务身份留作辅助证据及未解决元数据，禁止虚构通用服务千克。 | `pcr-live-aquaculture-method` |
| `a_fates` | residuals | 死亡、败育卵、废物及废水的处理收集负担留在产品系统内。任何替代情景须有证据并单独报告，不扣未经核验避免产品，不以运输水或包装质量稀释损失。 | `pcr-live-aquaculture-method` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_handover` | presentation | 合格参考鱼 | 称量与验收 | 物种；鱼群；用途；生命阶段；界点；交接时间；存活鱼净质量；数量；样本数量；样本质量；秤编号；死亡；适用性；成熟度或饵料适配 | 不伤鱼并一致排水去皮；校准净称量或代表性鱼群抽样结合实际计数；核对受方验收；每 1 kg 参考流；实际归属数量除以合格存活鱼净质量；协议所有过程为 presentation；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg; count | 每次交接 | 完整鱼群及交接期间 | 生产者界点 | 每 1 kg 参考流 | 校准；抽样不确定性；物种用途及验收证据 |
| `cp_stock_broodstock_hatch` | broodstock_hatch | 鱼群与亲鱼存量移交 | 鱼群台账 | 鱼群；亲鱼编号；物种；来源；阶段；运行；期间；数量；湿重；卵；出膜；生长；死亡；逃逸；移交；期初；期末；退役去向；负担结转 | 按事件计数和代表性质量测量；独立记录亲鱼繁殖和管理生产历史；每 1 kg 参考流；保留内部实际数量及分配期初期末负担；协议所有过程为 broodstock_hatch；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg; count; time | 每次移交事件及期末 | 亲鱼建立至退役和鱼群交接 | 实际来源及接收节点 | 每 1 kg 参考流 | 批次关联；数量核对；来源和退役证据 |
| `cp_stock_managed_rearing` | managed_rearing | 鱼群与亲鱼存量移交 | 鱼群台账 | 鱼群；亲鱼编号；物种；来源；阶段；运行；期间；数量；湿重；卵；出膜；生长；死亡；逃逸；移交；期初；期末；退役去向；负担结转 | 按事件计数和代表性质量测量；独立记录亲鱼繁殖和管理生产历史；每 1 kg 参考流；保留内部实际数量及分配期初期末负担；协议所有过程为 managed_rearing；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg; count; time | 每次移交事件及期末 | 亲鱼建立至退役和鱼群交接 | 实际来源及接收节点 | 每 1 kg 参考流 | 批次关联；数量核对；来源和退役证据 |
| `cp_stock_harvest` | harvest | 鱼群与亲鱼存量移交 | 鱼群台账 | 鱼群；亲鱼编号；物种；来源；阶段；运行；期间；数量；湿重；卵；出膜；生长；死亡；逃逸；移交；期初；期末；退役去向；负担结转 | 按事件计数和代表性质量测量；独立记录亲鱼繁殖和管理生产历史；每 1 kg 参考流；保留内部实际数量及分配期初期末负担；协议所有过程为 harvest；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg; count; time | 每次移交事件及期末 | 亲鱼建立至退役和鱼群交接 | 实际来源及接收节点 | 每 1 kg 参考流 | 批次关联；数量核对；来源和退役证据 |
| `cp_stock_holding` | holding | 鱼群与亲鱼存量移交 | 鱼群台账 | 鱼群；亲鱼编号；物种；来源；阶段；运行；期间；数量；湿重；卵；出膜；生长；死亡；逃逸；移交；期初；期末；退役去向；负担结转 | 按事件计数和代表性质量测量；独立记录亲鱼繁殖和管理生产历史；每 1 kg 参考流；保留内部实际数量及分配期初期末负担；协议所有过程为 holding；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg; count; time | 每次移交事件及期末 | 亲鱼建立至退役和鱼群交接 | 实际来源及接收节点 | 每 1 kg 参考流 | 批次关联；数量核对；来源和退役证据 |
| `cp_stock_presentation` | presentation | 鱼群与亲鱼存量移交 | 鱼群台账 | 鱼群；亲鱼编号；物种；来源；阶段；运行；期间；数量；湿重；卵；出膜；生长；死亡；逃逸；移交；期初；期末；退役去向；负担结转 | 按事件计数和代表性质量测量；独立记录亲鱼繁殖和管理生产历史；每 1 kg 参考流；保留内部实际数量及分配期初期末负担；协议所有过程为 presentation；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg; count; time | 每次移交事件及期末 | 亲鱼建立至退役和鱼群交接 | 实际来源及接收节点 | 每 1 kg 参考流 | 批次关联；数量核对；来源和退役证据 |
| `cp_material_broodstock_hatch` | broodstock_hatch | 实物饲料及材料 | 收用台账 | 材料；组成；制剂；活性物质；湿重；干物质；密度；气体条件；阶段；运行；期间；期初；收货；期末；退回；去向 | 称量或计量实际使用；核对存量与供应商原始上游记录；区分投饲、摄食和剩余；每 1 kg 参考流；按来源阶段一次归属实际实物数量并除以合格存活鱼净质量；协议所有过程为 broodstock_hatch；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg | 每次使用批次及期间核对 | 完整实际阶段与清洗转换 | 所选前景及实际供应商 | 每 1 kg 参考流 | 供应商规格；水分密度证据；适用授权 |
| `cp_material_live_feed` | live_feed | 实物饲料及材料 | 收用台账 | 材料；组成；制剂；活性物质；湿重；干物质；密度；气体条件；阶段；运行；期间；期初；收货；期末；退回；去向 | 称量或计量实际使用；核对存量与供应商原始上游记录；区分投饲、摄食和剩余；每 1 kg 参考流；按来源阶段一次归属实际实物数量并除以合格存活鱼净质量；协议所有过程为 live_feed；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg | 每次使用批次及期间核对 | 完整实际阶段与清洗转换 | 所选前景及实际供应商 | 每 1 kg 参考流 | 供应商规格；水分密度证据；适用授权 |
| `cp_material_managed_rearing` | managed_rearing | 实物饲料及材料 | 收用台账 | 材料；组成；制剂；活性物质；湿重；干物质；密度；气体条件；阶段；运行；期间；期初；收货；期末；退回；去向 | 称量或计量实际使用；核对存量与供应商原始上游记录；区分投饲、摄食和剩余；每 1 kg 参考流；按来源阶段一次归属实际实物数量并除以合格存活鱼净质量；协议所有过程为 managed_rearing；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg | 每次使用批次及期间核对 | 完整实际阶段与清洗转换 | 所选前景及实际供应商 | 每 1 kg 参考流 | 供应商规格；水分密度证据；适用授权 |
| `cp_material_harvest` | harvest | 实物饲料及材料 | 收用台账 | 材料；组成；制剂；活性物质；湿重；干物质；密度；气体条件；阶段；运行；期间；期初；收货；期末；退回；去向 | 称量或计量实际使用；核对存量与供应商原始上游记录；区分投饲、摄食和剩余；每 1 kg 参考流；按来源阶段一次归属实际实物数量并除以合格存活鱼净质量；协议所有过程为 harvest；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg | 每次使用批次及期间核对 | 完整实际阶段与清洗转换 | 所选前景及实际供应商 | 每 1 kg 参考流 | 供应商规格；水分密度证据；适用授权 |
| `cp_material_holding` | holding | 实物饲料及材料 | 收用台账 | 材料；组成；制剂；活性物质；湿重；干物质；密度；气体条件；阶段；运行；期间；期初；收货；期末；退回；去向 | 称量或计量实际使用；核对存量与供应商原始上游记录；区分投饲、摄食和剩余；每 1 kg 参考流；按来源阶段一次归属实际实物数量并除以合格存活鱼净质量；协议所有过程为 holding；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg | 每次使用批次及期间核对 | 完整实际阶段与清洗转换 | 所选前景及实际供应商 | 每 1 kg 参考流 | 供应商规格；水分密度证据；适用授权 |
| `cp_material_presentation` | presentation | 实物饲料及材料 | 收用台账 | 材料；组成；制剂；活性物质；湿重；干物质；密度；气体条件；阶段；运行；期间；期初；收货；期末；退回；去向 | 称量或计量实际使用；核对存量与供应商原始上游记录；区分投饲、摄食和剩余；每 1 kg 参考流；按来源阶段一次归属实际实物数量并除以合格存活鱼净质量；协议所有过程为 presentation；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg | 每次使用批次及期间核对 | 完整实际阶段与清洗转换 | 所选前景及实际供应商 | 每 1 kg 参考流 | 供应商规格；水分密度证据；适用授权 |
| `cp_material_utilities` | utilities | 实物饲料及材料 | 收用台账 | 材料；组成；制剂；活性物质；湿重；干物质；密度；气体条件；阶段；运行；期间；期初；收货；期末；退回；去向 | 称量或计量实际使用；核对存量与供应商原始上游记录；区分投饲、摄食和剩余；每 1 kg 参考流；按来源阶段一次归属实际实物数量并除以合格存活鱼净质量；协议所有过程为 utilities；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg | 每次使用批次及期间核对 | 完整实际阶段与清洗转换 | 所选前景及实际供应商 | 每 1 kg 参考流 | 供应商规格；水分密度证据；适用授权 |
| `cp_material_residuals` | residuals | 实物饲料及材料 | 收用台账 | 材料；组成；制剂；活性物质；湿重；干物质；密度；气体条件；阶段；运行；期间；期初；收货；期末；退回；去向 | 称量或计量实际使用；核对存量与供应商原始上游记录；区分投饲、摄食和剩余；每 1 kg 参考流；按来源阶段一次归属实际实物数量并除以合格存活鱼净质量；协议所有过程为 residuals；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg | 每次使用批次及期间核对 | 完整实际阶段与清洗转换 | 所选前景及实际供应商 | 每 1 kg 参考流 | 供应商规格；水分密度证据；适用授权 |
| `cp_water_utilities` | utilities | 进水及水流去向 | 计量排水台账 | 水源；流域；回路；外供或取水；体积；密度；开始；结束；流量；阶段；处理；排水去向；循环 | 校准计量及实际密度条件；区分进水、循环、补水、蒸发、反冲洗和末端排水；采样与流量时间对应；每 1 kg 参考流；实际外部水一次分配，不重复计循环；协议所有过程为 utilities；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg; m3; time | 每回路事件及期间总量 | 完整所选阶段和处理期间 | 实际水源、消费者及受纳环境 | 每 1 kg 参考流 | 计量校准；水平衡；水源和处理边界记录 |
| `cp_water_residuals` | residuals | 进水及水流去向 | 计量排水台账 | 水源；流域；回路；外供或取水；体积；密度；开始；结束；流量；阶段；处理；排水去向；循环 | 校准计量及实际密度条件；区分进水、循环、补水、蒸发、反冲洗和末端排水；采样与流量时间对应；每 1 kg 参考流；实际外部水一次分配，不重复计循环；协议所有过程为 residuals；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg; m3; time | 每回路事件及期间总量 | 完整所选阶段和处理期间 | 实际水源、消费者及受纳环境 | 每 1 kg 参考流 | 计量校准；水平衡；水源和处理边界记录 |
| `cp_energy_utilities` | utilities | 实际电热及燃料 | 计量及设备日志 | 载体；供应国家；电压；供应商；设备；阶段；运行；期间；kWh；MJ；燃料质量；密度；工作时间；自发电 | 读取校准计量表，将燃料与设备使用、存量和发电输出核对；核验供应限定；每 1 kg 参考流；实际能量或燃料一次归属；1 kWh = 3.6 MJ；协议所有过程为 utilities；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | MJ; kWh; kg; time | 计量间隔及每次燃料事件 | 完整运行、闲置和转换期间 | 全部实际消费者 | 每 1 kg 参考流 | 计量校准；票据；发电及供应核对 |
| `cp_release_utilities` | utilities | 物质及气体释放 | 采样与质量平衡 |物质；物种基准；介质；来源阶段事件编号；回路；末端排口编号；采样时间；原始浓度单位；浓度；背景；原始流量单位；流量；时长；实验室方法；检出限；定量限；燃料碳；因子；氧化；制冷剂存量；进水编号；进水体积；进水浓度；外排体积；外排浓度；体积单位；总外排负荷；进水负荷；库存和其他水去向；本底归属方法；可归属本底负荷；不确定性 | 分别匹配进水和外排浓度/体积/时间，保留各自单位下总外排和进水物质负荷、本底来源、库存/其他去向及质控，按 integrated_release 选择清单基准及有依据的归属；燃烧用实际碳平衡或有来源设备因子，制冷剂按明确物质质量平衡；每 1 kg 参考流，实际事件仅归属一次并披露不确定性/未检出；协议所有过程为 utilities；保留来源阶段、事件、消费者及期间关联。 | kg substance; concentration; flow; time | 代表性实际事件及期间 | 完整所选阶段及处理 | 来源阶段和实际受纳介质 | 每 1 kg 参考流 | 实验室质控；代表性采样；因子适用性及存量核对 |
| `cp_release_residuals` | residuals | 物质及气体释放 | 采样与质量平衡 |物质；物种基准；介质；来源阶段事件编号；回路；末端排口编号；采样时间；原始浓度单位；浓度；背景；原始流量单位；流量；时长；实验室方法；检出限；定量限；燃料碳；因子；氧化；制冷剂存量；进水编号；进水体积；进水浓度；外排体积；外排浓度；体积单位；总外排负荷；进水负荷；库存和其他水去向；本底归属方法；可归属本底负荷；不确定性 | 分别匹配进水和外排浓度/体积/时间，保留各自单位下总外排和进水物质负荷、本底来源、库存/其他去向及质控，按 integrated_release 选择清单基准及有依据的归属；燃烧用实际碳平衡或有来源设备因子，制冷剂按明确物质质量平衡；每 1 kg 参考流，实际事件仅归属一次并披露不确定性/未检出；协议所有过程为 residuals；保留来源阶段、事件、消费者及期间关联。 | kg substance; concentration; flow; time | 代表性实际事件及期间 | 完整所选阶段及处理 | 来源阶段和实际受纳介质 | 每 1 kg 参考流 | 实验室质控；代表性采样；因子适用性及存量核对 |
| `cp_residual_residuals` | residuals | 死亡固体废物及逃逸 | 去向台账 | 来源阶段；事件；物种或材料；数量；湿重；水分；收集；贮存；复用；退役；逃逸去向；处理方；去向 | 逐项称量计数实际残余及事件，将来源阶段台账核对至集中处理或最终受纳环境；每 1 kg 参考流；保留损失负担并与实际去向一次核对；协议所有过程为 residuals；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | kg; count; time | 每次损失处理事件及期末 | 所有所选阶段含亲鱼退役 | 实际来源及接收处理 | 每 1 kg 参考流 | 称量；废物交接凭证；来源至去向追踪 |
| `cp_shared_utilities` | utilities | 共享设施及可复用资产 | 消费者期间矩阵 | 资产；服务期间；消费节点；鱼群；维护；替换；寿命证据；功率时间；通量；占用时间；实际复用；总负担；分配份额 | 按消费者期间采集实际资产记录和分表或因果活动，核对服务总量及负担，不重复整资产计入；每 1 kg 参考流；活动保留真实单位，负担一次分配；协议所有过程为 utilities；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 | asset-specific activity; time; kg replacement | 各服务期间及替换 | 实际资产服务期间含结转 | 每项共享资产全部实际消费者 | 每 1 kg 参考流 | 资产证据；驱动适配；份额核对 |
| `cp_service_utilities` | utilities | 合同服务及自营界前物流 | 供应商活动台账 | 供应商；活动；真实单位；属性；数量；阶段；期间；载荷；距离；职责；界点；上游边界 | 采用实际检测、鱼天、吨千米或供应商活动；具体交换前核验属性单位，自营车辆燃料另列；每 1 kg 参考流；归一化归属服务，不将通用服务转千克；协议所有过程为 utilities；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 该协议负责实际诊断、健康或暂养服务，关联各实际消费阶段。 | test; fish-day; tkm; provider activity | 每次服务事件 | 实际声明界前期间 | 实际供应商及消费者 | 每 1 kg 参考流 | 合同；供应商方法边界；实际路线界点证据 |
| `cp_service_presentation` | presentation | 合同服务及自营界前物流 | 供应商活动台账 | 供应商；活动；真实单位；属性；数量；阶段；期间；载荷；距离；职责；界点；上游边界 | 采用实际检测、鱼天、吨千米或供应商活动；具体交换前核验属性单位，自营车辆燃料另列；每 1 kg 参考流；归一化归属服务，不将通用服务转千克；协议所有过程为 presentation；保留实际来源阶段、事件、消费者及期间矩阵，属于该过程的记录仅归属一次。 该协议负责实际装载或界点内物流活动，界点及消费者有据可查。 | test; fish-day; tkm; provider activity | 每次服务事件 | 实际声明界前期间 | 实际供应商及消费者 | 每 1 kg 参考流 | 合同；供应商方法边界；实际路线界点证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cohort_inventory` | all inventory rows | 实际归属数量除以同一合格交接鱼群的存活鱼净湿重；最终参考鱼固定为1 kg，内部移交保留实测数量；跨期未交接鱼及其负担结转，不在多次交接重复计入。 | cp_handover; cp_stock_broodstock_hatch; cp_stock_managed_rearing; cp_stock_harvest; cp_stock_holding; cp_stock_presentation; actual stage ledgers | 每 1 kg 参考流实际清单 | `pcr-live-aquaculture-method` |
| `sample_biomass` | actual fish count records | 以实际代表性样本湿重除以样本数量得到实测平均质量，再乘同群实际合格数量；说明抽样分层、阶段及不确定性，优先可用直接净称量。 | cp_handover; cp_stock_broodstock_hatch; cp_stock_managed_rearing; cp_stock_harvest; cp_stock_holding; cp_stock_presentation | 实际鱼群湿重及不确定性 | `pcr-live-aquaculture-method` |
| `integrated_release` | direct substance releases | 对每项实际水中物质及受纳介质，先保留总外排负荷 L_out = sum(C_out,k * V_out,k)，逐代表性时段匹配浓度与实测外排体积，并明确单位及元素/物种换算。独立保留同期间、同基准进水负荷 L_in = sum(C_in,j * V_in,j)、其他水去向、库存及不确定性。直接释放清单默认采用总外排负荷；出减进的净平衡仅为单独诊断量，不自动成为排放或移除信用。只有采用有记录且经独立论证的来源/去向方法，辨明实际到达该排口的进水/本底份额，并核对其他输出、滞留、转化及库存变化时，才可用前景可归属释放替代总量清单；保留两侧负荷记录、明确归属公式和适用证据，清单仅采用一种表示。不得默认进出水体积相等，也不得在缺少上述证据时以 (C_out - C_background) * V_out 替代完整核算。负差或不确定差异保留待审查，不自动计负排放、吸收信用或零。保留未检出处理及实验室质控；体积、匹配或归属证据缺失时阻断受影响结果，不由处理服务金额推断释放质量。 | cp_water_utilities; cp_water_residuals; cp_release_utilities; cp_release_residuals | 各物质/介质进出水负荷记录、独立诊断净平衡及唯一有依据的释放清单 | `pcr-live-aquaculture-method` |
| `attribution_ledger` | shared outputs periods and assets | 先独立计量，再按已证明因果活动分配共同负担；汇总份额等于实际共同总量。期初负担加本期投入分至实际交接、期末存量及明确退役去向，不重复归属。 | cp_stock_broodstock_hatch; cp_stock_managed_rearing; cp_stock_harvest; cp_stock_holding; cp_stock_presentation; cp_shared_utilities; cp_service_utilities; cp_service_presentation | 有依据归属负担台账 | `pcr-live-aquaculture-method` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_trace` | all nodes | 覆盖每个实际来源阶段和亲鱼繁殖事件，匹配种源、数量、质量、周期、用途和各界点；混批保留来源份额。 | cp_stock_broodstock_hatch; cp_stock_managed_rearing; cp_stock_harvest; cp_stock_holding; cp_stock_presentation 事件链及供应商原始记录 |
| `dq_quantity` | all amounts | 实际采集数量优先；宽泛暂定范围只筛查异常，不替代测量、设上限、截断或推定零。披露抽样、因子及分配不确定性。 未检出结果保留检出限、定量限、删失数据处理方法及上下界，不得视为精确零；末端排口样本关联来源阶段事件、实测流量时长及原始单位。 | 校准、采样与异常复核 |
| `dq_sources` | all supplier and release records | 核对时间、场址、技术、物种阶段及单位匹配；历史 FAO 示例仅支持定性过程理解，不作为现行剂量、存活、密度或饲料系数。 | 证据适用性评估；方法和供应边界 |
| `dq_complete` | all selected nodes | 区分实际未用、实测零与缺失，列明环境释放介质、处理去向及共享消费者；缺失不会自动补零。 | cp_water_utilities; cp_water_residuals、cp_release_utilities; cp_release_residuals、cp_residual_residuals 与共享矩阵 |
| `dq_inventory_completion` | 所有逐流清单完善要求 | 为每项实际物理或化学交换建立独立卡片，记录过程、方向、流类型、各自实测数量、原生单位、最终参考归一化、适用性、去向、UUID和独立范围证据。不得把集合总量、原集合筛选范围或一个UUID复制给所有子交换。仅有证据证明未发生时可记不适用；未知不等于零。适用责任未完成时，最终数据包不完整且校验失败。 | 逐流覆盖台账、原始计量、身份、去向和范围证据 |
| `dq_complete_hatchery_eggs_gametes` | `broodstock_hatch`; 输入; 产品流 | 必须辨认并分别采集“购入孵化用鱼卵或配子”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：计量实际湿物质和鱼卵或配子数量，记录受精及活力；该物质不是最终鱼。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_stock_broodstock_hatch 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_stock_broodstock_hatch` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_broodstock_feed` | `broodstock_hatch`; 输入; 产品流 | 必须辨认并分别采集“亲鱼饲料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按湿重或干物质、供应商及繁殖期间记录实际饲粮，含两次繁殖之间维持饲喂。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_broodstock_hatch 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_broodstock_hatch` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_reproduction_health_materials` | `broodstock_hatch`; 输入; 产品流 | 必须辨认并分别采集“实际繁殖与孵化健康材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：条件性逐项记录化学品、激素、消毒剂及耗材；须有实际制剂、活性物质、授权与废弃去向，不规定剂量。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_broodstock_hatch 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_broodstock_hatch` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_other_products` | `broodstock_hatch`; 输出; 产品流 | 必须辨认并分别采集“各自界点的其他孵化场有意产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际出售卵、其他鱼群或有销售价值退役亲鱼逐项列明状态、用途、去向和分配；留养亲鱼生物量不是销售输出。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_stock_broodstock_hatch 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_stock_broodstock_hatch` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_feed_culture_inoculum` | `live_feed`; 输入; 产品流 | 必须辨认并分别采集“活饵接种物或休眠卵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录实际培养物种和购入种源或休眠卵数量及上游负担。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_live_feed 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_live_feed` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_feed_culture_nutrients` | `live_feed`; 输入; 产品流 | 必须辨认并分别采集“培养饵料、营养物和强化材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按组成和干物质拆分实际食物、营养、强化剂和肥料；纳入生产所移交饵料所需全部资源。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_live_feed 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_live_feed` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_feed_culture_media` | `live_feed`; 输入; 产品流 | 必须辨认并分别采集“培养盐、介质及清洗材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际盐度盐、基质和消毒投入，记录废介质及残余去向。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_live_feed 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_live_feed` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_cultured_food_transfer` | `live_feed`; 输出; 产品流 | 必须辨认并分别采集“移交养鱼的培养活饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录实际可食生物量、浓度或数量、水分及接收阶段；未测水分不得互换湿干饵料。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_live_feed 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_live_feed` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_rearing_feed` | `managed_rearing`; 输入; 产品流 | 必须辨认并分别采集“购入鱼饲料或活饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分开记录仔鱼、苗种及实际后续阶段饲粮、湿重或干物质、供应商、组成、投喂与剩余；购入饵料生物为投入，不是本参考产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_managed_rearing 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_managed_rearing` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_own_cultured_food_input` | `managed_rearing`; 输入; 产品流 | 必须辨认并分别采集“养鱼消耗的自培活饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际数量、培养批次和接收养鱼阶段匹配 cultured_food_transfer；中间产物不免费。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_managed_rearing 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_managed_rearing` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_pond_fertilisation` | `managed_rearing`; 输入; 产品流 | 必须辨认并分别采集“实际池塘肥料和石灰材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅针对实际池塘管理记录产品质量、营养组成及时间；区分支持天然饵料的肥水和直接投饲。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_managed_rearing 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_managed_rearing` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_rearing_health_materials` | `managed_rearing`; 输入; 产品流 | 必须辨认并分别采集“实际养殖健康与水处理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按阶段条件性记录制剂特定健康、缓冲、消毒及滤材投入；化学残余追溯来源阶段。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_managed_rearing 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_managed_rearing` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_rearing_other_products` | `managed_rearing`; 输出; 产品流 | 必须辨认并分别采集“各自界点的其他有意鱼产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：共享系统出售的实际其他物种、鱼群、阶段或用途须有输出及界点台账和合理分配。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_stock_managed_rearing 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_stock_managed_rearing` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_consumables` | `harvest`; 输入; 产品流 | 必须辨认并分别采集“实际收集渔具与耗材”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际发生时记录网具或泵管替换材料、实测使用份额；共享耐用设备活动记录于 cp_shared_utilities。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_harvest 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_harvest` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_feed_health` | `holding`; 输入; 产品流 | 必须辨认并分别采集“实际暂养饲料与健康材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际维持饲粮、盐、缓冲剂或健康制剂、组成、持续时间和废弃去向；缺失记录不等于未用。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_holding 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_holding` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_packaging_materials` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际活鱼包装材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分列实际袋、衬垫、箱和标签材质；重复槽罐记录替换质量份额、清洗和实际复用，不得每批承担整槽。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_presentation 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_presentation` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_thermal_materials` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际活鱼温控材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：条件性记录冷媒袋或其他实际材料及鱼接触适用性；不采用捕捞冰身份或宰杀冷却替代。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_presentation 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_presentation` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_other_supplied_water` | `utilities`; 输入; 产品流 | 必须辨认并分别采集“其他实际供应的特定来源水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际外供海水、淡水或规格不同于 supplied_treated_water 的其他水；选择不重叠的具体供应商交换。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_water_utilities 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_water_utilities` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_actual_farm_fuels` | `utilities`; 输入; 产品流 | 必须辨认并分别采集“实际农场、发电机或界前车辆燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按燃烧设备与阶段逐项识别实际燃料产品及牌号；升转质量须有供应商实测密度及温度。渔船燃料不是农场燃料。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_energy_utilities 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_energy_utilities` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_utility_treatment_materials` | `utilities`; 输入; 产品流 | 必须辨认并分别采集“实际公用设施与回路处理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用时将有阶段标识的滤材、盐、缓冲剂、润滑剂和制冷剂补充作为独立实物产品；区分购入材料和直接释放。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_utilities 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_utilities` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_own_water_abstraction` | `utilities`; 输入; 基本流 | 必须辨认并分别采集“实际特定来源取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：逐项明确地表淡水、地下水、半咸水或海水环境来源；实测取水不含外供水和循环，保留流域或水源及实际密度。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_water_utilities 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_water_utilities` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_other_combustion_air` | `utilities`; 输出; 基本流 | 必须辨认并分别采集“其他实际燃烧物质向空气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按设备及受纳空气分别记录实测或建模氮氧化物物种基准、硫氧化物、粒径和其他物质；不设置未细分污染物固定身份。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_release_utilities 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_release_utilities` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_refrigerant_leakage` | `utilities`; 输出; 基本流 | 必须辨认并分别采集“实际制冷剂物种向空气泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际冷机或热泵及来源阶段，以明确制冷剂的补充、回收和存量质量平衡记录；零需无泄漏或未用证据。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_release_utilities 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_release_utilities` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_owned_treatment_materials` | `residuals`; 输入; 产品流 | 必须辨认并分别采集“实际自营废水处理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅逐股记录实际混凝剂、消毒剂、基质或其他实物处理投入；公用资源在 utilities 中以 residuals 为消费者。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_material_residuals 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_material_residuals` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dead_fish_eggs` | `residuals`; 输出; 废物流 | 必须辨认并分别采集“送处理的无活力鱼、卵和退役亲鱼”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按来源阶段分开记录死亡、淘汰或退役亲鱼和败育卵的湿重或数量、收集时间、去向和处理；可出售退役亲鱼另属有意输出。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_residual_residuals 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_residual_residuals` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_solids_culture_waste` | `residuals`; 输出; 废物流 | 必须辨认并分别采集“送处理的污泥、残饵及废培养物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按来源阶段记录实际固体或反冲洗分离、水分、残饵、卵壳和废培养物；内部复用是移交，不是处置。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_residual_residuals 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_residual_residuals` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spent_packaging_materials` | `residuals`; 输出; 废物流 | 必须辨认并分别采集“送处理的废包装及健康或公用材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分开记录实际材料、来源阶段、适用危险类别、复用或回收和最终去向；不自动抵扣回收信用。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_residual_residuals 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_residual_residuals` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nutrient_substance_releases` | `residuals`; 输出; 基本流 | 必须辨认并分别采集“实际营养和化学物质向水排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：逐项记录氮磷物种及实际健康或清洗物质和受纳介质；按 integrated_release 保留匹配的总外排与进水负荷、单位及元素/物种换算证据；任何本底归属须有记录的来源/去向方法及适用证据，不自动计负信用，不重复总量/净量清单。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_release_residuals 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_release_residuals` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_biological_air_releases` | `residuals`; 输出; 基本流 | 必须辨认并分别采集“实际生物温室气体物种向空气释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际池塘、培养或处理条件产生甲烷或氧化亚氮时，用现行场址测量或合理阶段模型，与化石二氧化碳分开；需证明未发生，不能假设。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则: 按 cp_release_residuals 取得实际归属数量并除以合格交接存活鱼净质量；仅在实际发生时纳入。 数值来源模式: `calculated_value` 适用范围: `site_specific` 归一化基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `calculated_from_collection` 采集协议: `cp_release_residuals` 来源: `pcr-live-aquaculture-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_reference` | aquaculture_live_handover | 须有单物种鱼群、实际养殖来源、声明苗种或亲鱼或活鱼饵料用途、生命阶段和生产者界点、存活净湿重与数量、称量和健康适用证据。卵、配子、死鱼、拒收鱼和非鱼生物不可满足参考定义。 | `un-cpc-3-2025`; `pcr-live-aquaculture-method` |
| `v_measurement` | all inventory rows | 检查同参考归一化、实际代表性数量转质量测量、校准净称量、水分或密度或气体条件和能量单位。范围异常触发证据复核与不确定性，不截断或自动判无效；缺失实际数量仍为缺口。 | `pcr-live-aquaculture-method` |
| `v_routes` | broodstock_hatch; managed_rearing; harvest | 核验自有购入阶段矩阵及供应商负担；各繁殖差异引用 broodstock_hatch，各水系统差异引用实际 managed_rearing。有养鱼时核对 reared_live_transfer → harvest_stock_input；实际仅孵化苗种时核对 hatched_fish_transfer → harvest_stock_input、苗种阶段适用性及阶段不存在证据。至少有实际自有孵化或养鱼生产；保留全部孵化和自培饵料资源，不虚构阶段或重复转移。 | `fao-seed-production`; `ifas-ras-health`; `pcr-live-aquaculture-method` |
| `v_balance` | all selected nodes | 核对数量与实测生物量，包含生长、期初期末、移交、交接、死亡、拒收及逃逸；生长意味着投入输出湿重无需相等。依据声明留存和固体，核对饲料干物质、营养摄入及实测物种释放，不用通用排放因子。 | `pcr-live-aquaculture-method` |
| `v_completeness` | utilities; residuals | 逐所选来源阶段检查实际资源类别、处理及直接释放记录。外供水、自行取水、循环、废物移交和直接排水不同。物质释放须有物种或基准、受纳介质、流量时长、浓度或背景及实验室质控。 | `pcr-live-aquaculture-method` |
| `v_attribution` | broodstock_hatch; managed_rearing; utilities | 检查所有有意输出或界点、运行或转换、亲鱼繁殖周期、期间结转、退役去向和共享消费矩阵。分配份额汇总至实际总量，确保上游、亲鱼、资产、服务及内部移交负担不重复。 | `pcr-live-aquaculture-method` |
| `v_binding` | all inventory rows | 最终数据集各交换需有匹配物质或产品、状态、用途、供应地域或技术或供应商、流类型、方向和单位的具体核验身份。条件性总括项在数据生产时拆成实际交换。候选未解决登记及结构检查通过不代表最终身份已核验。 | `pcr-live-aquaculture-method` |
| `v_zero_gate` | conditional processes; presentation | 零仅在适用阶段期间有未用或观测未发生记录时接受。存活、用途、路线、界点状态、数量或释放去向未知，不能形成完整合格数据集；报告已执行及跳过校验覆盖。 | `pcr-live-aquaculture-method` |
| `validate_inventory_completion` | 所有具体交换及第8节逐流完善责任 | 核查每项适用 dq_complete 责任均已形成独立实测且身份核实的交换卡；逐项确认数量、原生单位、Range证据、归一化、接收介质、去向和不重复归属。任一实际子交换、数量、身份或去向未落实均使最终数据包不完整并校验失败；未知不得填零。静态PCR检查不能替代这些证据。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 首先支持前景养殖用途活鱼数据包，核验后投影至 process 或 lifecyclemodel |
| allowed_use | 相同声明用途、物种、生命阶段、存活适用、起止界点及技术期间的上游苗种、亲鱼或活饵鱼投入 |
| excluded_use | 不能替代食用、观赏、野生来源、最终鱼卵或非鱼饵料；不能仅按千克跨用途阶段视为等效；不能直接使用未核验交换 |
| required_metadata | PCR及版本；物种鱼群和单一用途；生命阶段；计数和净重；来源阶段矩阵；繁殖水系统；场址周期；界点和保活路线；上游引用及分配 |
| required_quality_disclosure | 测量抽样与不确定性；所有来源阶段及亲鱼结转；共享资产服务分配；损失逃逸排放去向；身份核验和缺口；范围证据和校验跳过项 |
| update_trigger | 用途物种阶段、繁殖或水系统、供应商界点、资源健康处理、亲鱼退役或分配变更；新测量证据或身份核验；重大损失或排放事件 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | United Nations CPC Version 3.0 explanatory notes (30 June 2025), printed pp. 40–41; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; retrieved 2026-10-09 | 官方来源与非食用活鱼边界；本 PCR 窄化至养殖用途 |
| fao-seed-production | official_guidance | FAO, Seed production, sections 1.3–1.5; https://www.fao.org/4/AC182E/AC182E01.htm; retrieved 2026-10-09 | 定性繁殖、孵化、阶段和天然或供应饵料差异；不采纳历史数值或药物建议 |
| fao-live-fish-handling | official_guidance | FAO, Selected aspects of warmwater fish culture, chapter 6; https://www.fao.org/4/T8389E/T8389E06.htm; retrieved 2026-10-09 | 定性活体收集与有界保活、尺寸及水氧处理角色；不采用历史容量剂量 |
| ifas-ras-health | extension_guidance | UF/IFAS, Fish Health Management Considerations in Recirculating Aquaculture Systems—Part 1, FA099; https://ask.ifas.ufl.edu/publication/FA099; retrieved 2026-10-09 | 定性水系统目的、水质及实际循环水管理；不作为本鱼类特定饲养处方 |
| ghg-product-standard-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; retrieved 2026-10-09 | 分配细分和物理因果优先、合理后备方法披露；不宣称全标准符合性 |
| pcr-live-aquaculture-method | method_factor | 本 PCR v0.1.0 内部方法，章节3至9；1 kg 归一化、鱼群采集台账及周期资产分配定义 | 自定义方法而非外部观测；固定1–1 kg仅为归一化定义；其他范围为未声称实证的可替换推理筛查 |
