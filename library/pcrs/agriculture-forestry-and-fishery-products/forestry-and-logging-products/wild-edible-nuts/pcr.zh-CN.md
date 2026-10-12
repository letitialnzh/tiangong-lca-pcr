---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-nuts
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---
# 原料带壳野生食用坚果

## 1. 范围与适用性

本方法适用于从未经人工管护的自然来源采集、并非有意种植生产的食用坚果，在已声明的采集者或初级生产者交接处以原料带壳状态出货。物种、自然来源及实际操作决定适用性；森林地址不能证明野生来源。覆盖采集、归属门前转运及实际简单去外果荚/外果皮、清理、分级、干燥/储存与包装。仅在实际发生且由本边界负责时启用。依据：`unsd-cpc3-wild-nuts`；`fao-nwfp-food-handling`。

不包含果园及栽培坚果生产、育苗、施肥、灌溉与生长操作；不包含取仁去壳、烘焙、加盐、提取、压油、制成食品、后续批发/出口制造、零售运输、消费及消费者寿命末期。去除外果实/果荚/球果不等于去除坚果硬壳。本文件不认证食用安全，也不鼓励食用未辨明身份的坚果。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-nuts |
| classification_refs | CPC 3.0 03231；原料带壳部分范围 |
| covered_products | 未人工管护来源、实际物种已确认的原料带壳野生食用坚果；仅含交接前简单处理 |
| excluded_products | 有意种植坚果；去壳坚果仁；烘焙/加盐/制成坚果；油；不能追溯野生贡献的混合来源批次 |
| representative_product | 初级交接处已声明野生物种及等级的原料带壳坚果 |
| production_route | 未人工管护来源采集 -> 实际转运 -> 条件去外果荚/外果皮及分级 -> 条件干燥/储存 -> 验收包装/交接 |
| market_state | 原料带壳、收到状态、实际声明初级门处；不是通用商品混合物 |

宽泛野生坚果分类说明界定来源，不证明所有市场形态等价。本带壳方法窄于完整叶类，不声称覆盖去壳坚果仁。历史巴西坚果及松子案例只支持可能操作，不作为当前通用产率、季节、损失或价格。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 初级生产者交接处实际物种已确认的单一验收原料带壳野生食用坚果批次 |
| How much | 1 kg 收到状态的带壳坚果净质量 |
| How well | 已声明物种、野生未人工管护来源、等级、包含硬壳、排除外果荚/外果皮、水分及食用身份/验收证据 |
| How long or cycle | 指定采集季次、来源场址季节、报告期间及实际门前储存日期；关联期初/期末库存与资产更换/终止事件 |
| reference_flow_link | `wild_nuts_handover` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 初级生产者交接处的原料带壳野生食用坚果 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；野生未人工管护来源证据；来源生境/场址；采集季次及季节；原料带壳状态；包含硬壳；排除外果荚/外果皮；水分及其基准；等级；净重/毛重/皮重记录；食用身份及验收记录；实际来源/操作责任；实际初级门；储存日期；分配与库存处理 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用 cp_handover 称量验收收到状态的带壳净质量，排除包装及夹杂物，包含硬壳。所有行采用每 1 kg 参考流。 |
| `form_mass_bridge` | natural_nut_removal, gathered_nut_material, conditioning_nut_feed, conditioned_in_shell_nuts, preservation_nut_feed, preserved_in_shell_nuts | 质量 | kg | 分别计量输入/输出形式，配对同批水、固体及库存记录。没有计量换算时干基资源质量不能替代湿基带壳产品质量，不预设通用壳/外果皮产率。 |
| `energy_units` | collection_energy, conditioning_energy, preservation_energy, handover_energy | 能量 | MJ | 保留实际载体量与能量基准，电力 kWh 可按精确 3.6 MJ/kWh 换算，燃料/热量需要记录相符的净/总基准。原生服务小时及运输吨公里不是能源。 |
| `package_tare` | packaging_materials, wild_nuts_handover | 质量 | kg | 减去称量包装皮重，按件数计包装时需计量实际件型/配置的单件质量。容器返还为库存流转，不是坚果产品质量。 |

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | 所有 Range 及实际交换 | 各实际交换的相容属性 | 各实际交换的原生单位 | 所有 reasoned_estimate Range 仅为候选方法的暂定复核提示，不是实测分布、允许损失率、默认用量或排放因子。不得截断、回填或强制拟合实际数据；超界须核对状态、单位、边界、库存和证据。完成数据包前，须用可追溯实测记录或适用且已审查的定量来源逐项确定实际量和不确定性。缺失量、因子或流身份必须保留为缺口并阻止完整性声明，不能用通过范围筛查代替证据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采集处的实际未人工管护自然来源；或在实际上游交接处已核实的已采集野生物料，声明前序负担及质量状态 |
| starting_condition_role | 已纳入采集负责的自然资源移出；或采集在上游时可归属技术系统进料；每一物理部分两者互斥 |
| product_classification_scope | 原料带壳初级野生坚果范围，不递归进入栽培或取仁处理 |
| recursive_input_rule | 已采集同类输入保留实际供应状态/来源/门及一次上游负担。不添加第二次自然资源移出台账，不重置前序负担。 |
| upstream_dataset_requirement | 实际供应/服务输入需要相符的已核实具体身份及支持上游数据集。缺失身份/来源/数量须披露，不用方便的栽培坚果数据集替代。 |
| disclosure | 列明来源场址、批次、季次、负责操作、旁路、门、库存期间、共用资产/使用者、其他去向及全部遗漏。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `wild_source_eligibility` | 来源批次 | 要求坚果为未人工管护采集而非有意种植的证据，有意栽培投入不属本方法。 | unsd-cpc3-wild-nuts |
| `removal_owner` | collection, transfer | 一个采集节点合并资源移出及采集责任，与后续调理独立。每一来源部分只能归属已纳入自然移出或上游已采集产品，不可两者并列。未采集生境生物质不是生产废物。 | fao-nwfp-food-handling |
| `actual_route_gate` | 所有过程 | 仅纳入实际负责的门前操作，已处理或购入输入可旁路采集/调理/保藏，最终验收必须存在。声明实际门及每次中间交接。 | fao-nwfp-food-handling |
| `state_exclusions` | conditioning, handover | 去外果荚/外果皮可保留原料带壳坚果，取仁去壳/烘焙/制造及后续分销不包含。不得推定门/状态等价。 | fao-nwfp-food-handling |
| `site_period_scope` | 来源及共用资产 | 列明每个贡献场址/季次/期间及共同边界关联，将共用通行/工具/仓储一次分摊到实际使用者与期间，不预设森林面积、寿命或年产率。 | |

## 6. 过程清单结构

采集/季次模式明确采用批次。每一行按来源场址、批次、季次、事件日期及报告期间索引。条件角色可能有实际零个、一个或多个具体交换，总括卡不意味着通用 UUID。采集目标含坚果物料及附带剔除物、调理可用等级/其他产品/废物状态、保藏可用状态/变质物/水损失和交接验收等级/不合格物均区分，注明接收者。返分循环把计量物料返回调理并保留新增负担，循环不是新增最终输出。每一启用节点的协议记录具体场内污染物排放数量/因子及接收介质，与水蒸气分开，并核对责任及包含式服务边界。原地实际留存与产品出货或外运废物分别记录。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `collection` | 野生采集及资源移出 | conditional | 在未人工管护来源由前景负责采集时 | 从来源到已采集物料的采集，不设生长节点 | 每 1 kg 参考流 |
| `transfer` | 门前转运 | conditional | 实际负责门前转运时 | 从采集或购入进料到处理到达 | 每 1 kg 参考流 |
| `conditioning` | 去外果荚/外果皮调理及分级 | conditional | 实际发生简单分离/清理/分级时 | 已采集形态到原料清理后带壳等级 | 每 1 kg 参考流 |
| `preservation` | 门前干燥与储存 | conditional | 交接前实际干燥/储存时 | 可用进料到记录的稳定可用状态 | 每 1 kg 参考流 |
| `handover` | 验收、包装及初级交接 | required | 每一已声明验收参考批次 | 验收净原料带壳输出；包装按条件纳入 | 每 1 kg 参考流 |

### 过程：野生采集及资源移出（`collection`）

#### 输入

##### 产品流

###### 实际采集设备使用的能源（`collection_energy`）

仅在实际使用燃料、电力或外供热时启用一个能源总括卡。步行及人力劳动不推定柴油或人体代谢能源交换。逐项声明实际能源载体及换算证据，服务已包含的能源不重复记录。

- 选定流：实际采集设备使用的能源
- 流属性/单位：能量 / MJ
- 数量规则：来自 cp_collection 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 分摊的采集工具及共用通行服务（`collection_tools_service`）

以原生服务小时记录实际工具/通行服务，注明提供者/资产、使用季次及期间；材料供应需另按实际质量记录。不预设工具寿命或森林管护负担。

- 选定流：分摊的采集工具及共用通行服务
- 流属性/单位：服务时间 / h
- 数量规则：来自 cp_collection 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：h
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 从未人工管护来源移出的野生坚果生物质（`natural_nut_removal`）

仅记录自然来源界面实际采得的含坚果物料，声明物种、生境、壳/果荚状态及干湿质量换算。不是整株树木生物质、栽培生长或自动生物碳吸收。已采集购入部分在转运节点作为产品进入，不重复其资源移出量。

- 选定流：从未人工管护来源移出的野生坚果生物质
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_collection 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 采集交接处的野生坚果物料（`gathered_nut_material`）

计量交给转运节点的实际目标果荚/球果/外果皮物料或带壳坚果，声明形式及夹杂物。不得固定为最终 1 kg，不使用通用巴西坚果或松子产率。

- 选定流：采集交接处的野生坚果物料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_collection 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 采集后作为废物送出的附带或剔除物料（`collection_discard`）

只有实际采集后跨采集边界弃置的物料才属于废物。留在生境中未采集的落果不是技术系统废物输出。采集后留在原地的残余物须披露数量/去向，不自动给处置信用。

- 选定流：采集后作为废物送出的附带或剔除物料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_collection 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际直接操作排放（`collection_direct_emissions`）

实际场内设备燃烧或处理产生直接排放时，逐项声明物质、有关时的粒径/组分、接收介质/子介质，以及计量数量或有明确依据的活动因子。不重复包含式服务及上游燃料排放。不使用通用污染物 UUID，不因可能用燃料就推定排放。

- 选定流：实际直接操作排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_collection 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：暂定宽泛数量级 QA 筛选，不是排放因子或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：门前转运（`transfer`）

#### 输入

##### 产品流

###### 进入门前转运的野生坚果物料（`transfer_nut_feed`）

匹配采集交接计量或已核实购入的已采集野生物料，记录供应方自然来源证据及前序负担。每一部分只能拥有已纳入的资源移出或分摊上游产品负担，不得同时拥有两者。

- 选定流：进入门前转运的野生坚果物料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_transfer 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transfer`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 门前运输服务（`transfer_service`）

按实际吨公里记录有机动运输时的方式、距离、载荷、回程载荷及责任归属。步行或人工搬运须披露，但不虚构柴油消耗。包含能源排放的服务与前景车辆燃料/尾气表示互斥。

- 选定流：门前运输服务
- 流属性/单位：运输量 / t km
- 数量规则：来自 cp_transfer 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transfer`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：t km
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 初次处理到达处的野生坚果物料（`transferred_nut_material`）

记录外果荚/外果皮分离或验收之前实际到达批次；到达、损失、留存及水分须与发出记录核对。不使用自动损失因子或最终参考量替代。

- 选定流：初次处理到达处的野生坚果物料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_transfer 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transfer`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 门前转运中送作废物的变质物料（`transfer_spoilage`）

将实际变质或损坏物料关联转运段及废物接收者。降级但可销售的坚果在实际交接处为产品，不属于本废物卡，保留其归属负担。

- 选定流：门前转运中送作废物的变质物料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_transfer 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transfer`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：去外果荚/外果皮调理及分级（`conditioning`）

#### 输入

##### 产品流

###### 进入初次调理的已采集坚果物料（`conditioning_nut_feed`）

计量进来的果荚/球果/外果皮物料或待清理的带壳坚果。去除外果荚/外果皮不等于破坚果硬壳；取仁去壳不在本范围。已符合状态且未发生操作时旁路。

- 选定流：进入初次调理的已采集坚果物料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_conditioning 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 初次调理使用的能源（`conditioning_energy`）

实际设备燃料、电力与热量使用一个条件能源总括卡，不包含服务小时或营养能量。记录载体属性及实际换算，不重复供应服务已包括的負担。

- 选定流：初次调理使用的能源
- 流属性/单位：能量 / MJ
- 数量规则：来自 cp_conditioning 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 初次调理的其他材料供应（`conditioning_supplies`）

按配方产品质量记录实际清洁及维护材料，注明物质和用途，不预设消毒配方。实际零个或多个交换由记录确定，不虚构一个通用产品 UUID。

- 选定流：初次调理的其他材料供应
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_conditioning 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 供应的清理用水（`supplied_cleaning_water`）

仅计量门前清理实际作为技术系统产品供应的水，声明来源、提供者及等级。同一水量不能又作为直接环境取水记录。

- 选定流：供应的清理用水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_conditioning 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 清理直接取自环境的水（`direct_cleaning_water`）

按实际来源介质及计量水量记录有发生时的直接淡水取水；不是供应方产品，也不默认等于净耗水。同一部分水的供应与直接取水表示互斥。

- 选定流：清理直接取自环境的水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_conditioning 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 已清理分级的原料带壳野生坚果（`conditioned_in_shell_nuts`）

计量交给干燥/储存或验收的可用带壳输出，保留实际物种、等级及水分。仍为原料，不是烘焙品、坚果仁、油或制成食品。每一兼容等级分别保留实际记录。

- 选定流：已清理分级的原料带壳野生坚果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_conditioning 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 初次调理实际产生的其他目标产品（`conditioning_other_goods`）

有实际降级食用坚果等级、外果荚/外果皮产品或可销售非食用物料时，声明目标用途及买方交接。不是自动副产品、验收参考坚果或处置信用替代物。范围外去壳产生的坚果仁不属本方法。

- 选定流：初次调理实际产生的其他目标产品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_conditioning 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 调理剔除物及无用外层物料（`conditioning_rejects`）

记录跨废物边界的实际无用外果荚/外果皮/夹杂物或不合格坚果，分别声明接收者/处理或原地留存。已验收带壳输出包含的硬壳不是被移除废物。返分物料在退出前仍为内部流。

- 选定流：调理剔除物及无用外层物料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_conditioning 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 送处理的清理废水（`conditioning_wastewater`）

计量送处理服务边界的实际废水，声明数量、接收者及污染物分析。直接排放另按实际物质/介质记录，不绑定宽泛有机物排放或替代为水蒸气。

- 选定流：送处理的清理废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_conditioning 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际直接操作排放（`conditioning_direct_emissions`）

实际场内设备燃烧或处理产生直接排放时，逐项声明物质、有关时的粒径/组分、接收介质/子介质，以及计量数量或有明确依据的活动因子。不重复包含式服务及上游燃料排放。不使用通用污染物 UUID，不因可能用燃料就推定排放。

- 选定流：实际直接操作排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_conditioning 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：暂定宽泛数量级 QA 筛选，不是排放因子或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：门前干燥与储存（`preservation`）

#### 输入

##### 产品流

###### 进入干燥或储存的可用原料带壳坚果（`preservation_nut_feed`）

在已声明的门前保藏操作前计量实际可用进料状态及水分，不预设通用操作、目标水分或储存寿命。未发生操作时验收产品可旁路此节点。

- 选定流：进入干燥或储存的可用原料带壳坚果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_preservation 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际干燥与储存的能源（`preservation_energy`）

用一个条件能源总括卡记录实际燃料/电力/热量及有发生时的分摊通风用能；无动力服务的自然干燥不推定购买能源。仓储服务的原生小时另列。

- 选定流：实际干燥与储存的能源
- 流属性/单位：能量 / MJ
- 数量规则：来自 cp_preservation 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 分摊的门前保藏与仓储服务（`preservation_service`）

将原生服务小时分摊到实际批次及储存日期，保留共用资产/期间台账；不重复包含式服务中的能源。不预设保藏剂/熏蒸剂使用；实际发生时须另按具体产品及排放记录，未知使用为缺口。

- 选定流：分摊的门前保藏与仓储服务
- 流属性/单位：服务时间 / h
- 数量规则：来自 cp_preservation 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：h
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 经已声明保藏后的原料带壳野生坚果（`preserved_in_shell_nuts`）

计量实际干燥/储存后交给验收的可用状态，将同批水及固体与进料、损失及库存核对。不使用通用干湿换算、安全货架期宣称或坚果仁等价。

- 选定流：经已声明保藏后的原料带壳野生坚果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_preservation 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 保藏产生的变质或不合格坚果（`preservation_rejects`）

将实际不合格状态关联干燥/储存批次及去向；计量返回调理的返分料并保留新增负担，不计为新增验收输出。可销售降级产品采用产品角色及实际接收者。

- 选定流：保藏产生的变质或不合格坚果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_preservation 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 排向未细分空气的水蒸气（`drying_water_vapour`）

仅当接收介质明确为未细分空气时，按同批水分/库存衡算或测量记录实际蒸发水。已知具体空气子介质须使用其独立核实身份。不是废水、挥发有机物或未解释质量损失。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定：fixed
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_preservation 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际直接操作排放（`preservation_direct_emissions`）

实际场内设备燃烧或处理产生直接排放时，逐项声明物质、有关时的粒径/组分、接收介质/子介质，以及计量数量或有明确依据的活动因子。不重复包含式服务及上游燃料排放。不使用通用污染物 UUID，不因可能用燃料就推定排放。

- 选定流：实际直接操作排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_preservation 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：暂定宽泛数量级 QA 筛选，不是排放因子或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：验收、包装及初级交接（`handover`）

#### 输入

##### 产品流

###### 进入最终验收的原料带壳野生坚果（`handover_nut_feed`）

计量实际从采集、调理或保藏进入的状态，或已分摊上游且核实野生来源的已采集物料。所有选定路线在此汇合；进料量由计量产生，不强定为 1 kg。

- 选定流：进入最终验收的原料带壳野生坚果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_handover 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 包装及呈现材料（`packaging_materials`）

实际袋/容器/标签采用一个条件材料总括卡，以不含坚果的材料质量记录；区分一次性、可返还及自有循环容器和实际使用次数。包装不含在参考坚果净质量中，循环包装退回为库存而非自动废物。

- 选定流：包装及呈现材料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_handover 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 验收及包装设备的能源（`handover_energy`）

仅将门前设备实际燃料/电力/热量列入一个条件能源总括卡。不含零售运输或食品烹调能源，不重复包含式服务与直接能源记录。

- 选定流：验收及包装设备的能源
- 流属性/单位：能量 / MJ
- 数量规则：来自 cp_handover 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 初级生产者交接处的原料带壳野生食用坚果（`wild_nuts_handover`）

已声明采集者或初级生产者门处实际物种/等级/状态的单一验收批次。收到状态的带壳净质量包含硬壳，不含外果荚/外果皮及运输包装/夹杂物。要求食用身份及验收记录，不提供食用安全建议或认证。

- 选定流：初级生产者交接处的原料带壳野生食用坚果
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：参考归一化恒等关系
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`collected_record`

###### 其他验收野生坚果等级在其交接处（`handover_other_grades`）

有实际分别验收等级或其他出货批次时，逐输出声明接收者、状态及质量，不视为可互换参考品质。不重复计入调理节点已经出货的其他产品。

- 选定流：其他验收野生坚果等级在其交接处
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_handover 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 验收及包装后送作废物的剔除物（`handover_rejects`）

按物料及去向分别记录实际不合格坚果/夹杂物和废包装。返分循环将计量数量返回调理，循环包装退回不是废物。验收质量不含未解决的不合格物料。

- 选定流：验收及包装后送作废物的剔除物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_handover 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：暂定宽泛数量级 QA 筛选，不是产率或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际直接操作排放（`handover_direct_emissions`）

实际场内设备燃烧或处理产生直接排放时，逐项声明物质、有关时的粒径/组分、接收介质/子介质，以及计量数量或有明确依据的活动因子。不重复包含式服务及上游燃料排放。不使用通用污染物 UUID，不因可能用燃料就推定排放。

- 选定流：实际直接操作排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：来自 cp_handover 的计量归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：暂定宽泛数量级 QA 筛选，不是排放因子或默认值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

## 7. 分配与副产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `output_ownership` | 所有输出 | 列明每个目标验收等级及实际其他产品的质量、品质、用途和接收者交接。弃置物、留存残余物与可销售产品不可互换，不自动产生副产品或避免处理信用。 | |
| `allocation_precedence` | 多目标产品 | 优先细分可独立计量操作；不可分共用负担采用有证据的物理因果驱动，否则用实际价格及敏感性披露经审查的期间特定经济份额。一项负担仅采用一种方法，份额总和等于待分配总量，不预设坚果/外果皮比例。 | |
| `period_site_attribution` | 季次、库存及共用资产 | 相容物种/状态/门采用产出质量加权汇总前，核对每场址相符季次输入/验收输出、期初/期末库存及转移，不平均无关场址或季节。列明工具/通行/仓储使用者，以计量小时/载荷/活动为因果驱动，资产服务/更新/终止负担仅一次归属实际记录期间，不预设寿命。 | |
| `reject_loop_burden` | conditioning, preservation, handover | 不合格/变质负担保留在实际产生批次，计量返分料只增加额外操作负担。验收批次仅在交接处计一次，不在中间转移或每次返分均计最终输出。降级产品及废物各保留明确负担决策。 | |
| `inclusive_service` | 运输及共用服务 | 包含式承包服务与前景能源/排放/资产清单是同一责任的替代表示，记录一种选择及排除项。人力劳动不推定物料/能源流。 | |

## 8. 前景数据采集、计算及质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_collection | collection |自然移出、实际能源/工具、采集物料及附带剔除物；直接操作排放 | 现场批次台账 |场址；生境；未人工管护证据；物种；季节；日期；果荚/壳状态；干湿质量；资源责任；工具小时；能源载体；接收者；附带物去向；具体污染物/物质；粒径/组分；接收介质/子介质；实际设备活动；计量或有依据活动因子证据；包含式服务排除项 |称量实际采集物料，保留配对水分检测及来源观察，计量或凭票实际设备/服务活动，不由坚果出货推定树木生长；按具体物质/介质记录实际直接排放，采用计量数量或实际活动及有依据因子；与蒸发水及包含式服务排放分开 | kg; MJ; h | 每一采集批次及实际活动 | 指定季次/报告期间 | 每一贡献未人工管护来源 | 每 1 kg 参考流 | 校准秤；来源见证记录；水分采样；负责活动边界 |
| cp_transfer | transfer | 进料、实际运输及变质物 | 流转台账 | 批次；发/收者；门；野生证据；发出/到达质量；日期；路线；方式；距离；载荷/回程载荷；包含式服务边界；损失/去向 | 匹配发出与到达称重，采集实际运输活动和服务票据，以及供应方上游负担及来源证据 | kg; t km | 每段/批次 | 实际日期及报告期间 | 仅从来源到已声明初级门 | 每 1 kg 参考流 | 匹配流转 ID；称重；路线/载荷证据；前序负担不重复 |
| cp_conditioning | conditioning |进料、材料/能源/水、可用等级、其他产品、残余物与废水；直接操作排放 | 操作/等级台账 |批次；进料形式/水分；去外果荚/外果皮；清理方式；材料；仪表；水源/提供者；可用等级/质量；剔除/留存物；返分；废水接收者/污染物；具体污染物/物质；粒径/组分；接收介质/子介质；实际设备活动；计量或有依据活动因子证据；包含式服务排除项 |计量实际每种进出状态、供应/仪表数量及去向；配对同批质量/水分记录区分硬壳与外果荚，排废水时采样；按具体物质/介质记录实际直接排放，采用计量数量或实际活动及有依据因子；与蒸发水及包含式服务排放分开 | kg; MJ | 每一实际处理/等级批次 | 实际操作日期 | 每一已声明处理场址 | 每 1 kg 参考流 | 校准称重/仪表；等级验收；接收者证据；质量/水核对 |
| cp_preservation | preservation |进料、实际能源/服务、稳定输出、不合格物及水蒸气；直接操作排放 | 干燥/储存批次台账 |批次；前后水及固体；有相关性时的温度；日期；期初/期末库存；实际能源；服务小时/使用者；可用输出；变质物；返分；接收空气介质；具体污染物/物质；粒径/组分；接收介质/子介质；实际设备活动；计量或有依据活动因子证据；包含式服务排除项 |称量及采样相符前后批次，计量实际服务，水分变化与变质/库存转移分别核对，仅计量或计算有证据的蒸发；按具体物质/介质记录实际直接排放，采用计量数量或实际活动及有依据因子；与蒸发水及包含式服务排放分开 | kg; MJ; h | 每次操作及库存核对 | 实际干燥/储存日期与跨期间流转 | 每一门前仓储/干燥场址 | 每 1 kg 参考流 | 水分方法；配对称重；库存台账；操作记录；明确空气介质 |
| cp_handover | handover |计量进料、包装材料/能源、参考/其他验收等级及不合格物；直接操作排放 | 验收/出货台账 |物种；来源证据；季次/批次；等级；食用身份/验收；门；原料带壳状态；净重/毛重/皮重；水分；排除外果荚；包装材料/循环次数；能源；其他接收者；不合格数量/去向；具体污染物/物质；粒径/组分；接收介质/子介质；实际设备活动；计量或有依据活动因子证据；包含式服务排除项 |使用经校准秤称量已验收原料带壳坚果，排除运输包装及夹杂物，保留验收及来源链；分别称量每种包装材料及其他实际输出；按具体物质/介质记录实际直接排放，采用计量数量或实际活动及有依据因子；与蒸发水及包含式服务排放分开 | kg; MJ | 每一验收交接批次及包装循环 | 实际出货日期及报告期间 | 实际采集者或初级生产者门 | 每 1 kg 参考流 | 校准称重/皮重；相符验收记录；身份/来源证据；包装循环及不合格记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_reconciliation` | 实物记录 | 同边界进料加期初库存及实际添加水/材料，与分别计量可用/其他产品/废物输出、有证据水损失和期末库存核对。解释剩余差异，不把全部质量损失视为蒸发。 | 匹配形式及水分；库存；称量输出及去向 | 已核对批次台账及差异证据 | |
| `record_normalization` | 采集交换记录 | 将实际季次/批次的各项实物数量除以相符已验收带壳净公斤数，形成每 1 kg 参考流的实物台账。该台账保留全部实测输入、中间量、其他产品、废物和库存，不按经济份额缩放。另按记录的分配决策划分共用负担，再将归属参考产品的负担除以其相符验收质量。明确区分实物台账与分配后负担结果；分配不得改变实测产率或抹去共产品质量。缺失验收分母为缺口。 | 负责数量；相符验收质量；分配与期间/场址记录 | 分别标识的归一化实物台账及分配后负担 | |
| `resource_bridge` | natural_nut_removal | 保留计量自然来源含坚果形式质量；基本流支持采用干基时需配对水/固体换算，不把干基生物质资源量设为湿基出货量。 | 匹配资源状态；配对水分；数量 | 有证据来源质量基准 | |
| `water_loss` | drying_water_vapour | 仅由配对前后水量、添加水、库存流转及其他水去向推导实际蒸发水，并证明接收空气介质。不采用整批质量损失或通用干燥因子。 | 水分及称重批次记录；水/废物路径；库存台账 | 实际蒸发水 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `source_form_quality` | 每一含坚果批次 | 声明野生未人工管护证据、物种、食用身份与验收准则、原料带壳状态、包含硬壳、排除外果荚/外果皮及水分基准。未核实/未知来源为缺口，不默认野生或提供食用建议。 | 来源观察与供应链；实际验收/检测记录 |
| `campaign_site_coverage` | 前景汇总 | 列明贡献者、日期、报告期间、采样/遗漏决策及相容门/状态。相容输出质量加权前核对每一场址台账。应归属的未使用/失败季次活动须纳入，避免仅成功批次偏差。 | 场址/季次贡献表及采样理由 |
| `stock_assets` | 资产及跨期间物料 | 匹配期初/期末余额、来源/去向转移、资产服务期间、更换/终止事件及实际使用者；期间责任未解决时不得最终归属。 | 库存/资产/使用台账及核对 |
| `measurement_identity` | 具体交换数据生产 | 按已核实属性/单位识别实际供应、服务、废物及基本流物质/接收介质。不采用通用总括 UUID、虚构污染因子或由常用名称自动推定排放。 | 具体身份详情证据；初级测量或经审查因子 |
| `provisional_ranges` | 非参考数量范围 | 宽泛 candidate QA 估计下限为 0，以容许实际未发生。20 kg 质量筛选覆盖不确定果荚/夹杂物形式、重复计量中间量及有意宽泛的具体物质排放筛选（不是燃烧化学计量）；10 kg 覆盖损失路径及辅助材料；包装 5 kg 标记较大的循环容器归属。能源 100 MJ、服务 20/100 h、运输 100 t km 有意标记小产出季次的异常高强度。这些作者数量级筛选不是 FAO 数量、可信产率保证、默认值或允许上限。超范围须审查边界/证据，不截断、不置零、不自动拒绝，应用匹配实测区间替代。 | reasoned_estimate；不声称外部数值来源 |
| `reference_range` | wild_nuts_handover | 1..1 kg 范围为已声明归一化恒等关系，不是采集产率、规定出货批量或输入输出实物等量。 | cp_handover 验收分母 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考产品 | 检查已声明门处实际验收输出、带壳净公斤、物种/等级/来源/水分及相符参考链接/名称，上游/中间质量不得固定为 1 kg。 | |
| `validate_route` | 来源及操作 | 核实未人工管护采集来源、实际启用/旁路节点及交接，排除栽培投入和取仁处理。每一来源部分仅一个资源/上游责任。 | unsd-cpc3-wild-nuts |
| `validate_mass_destinations` | 所有物料记录 | 核对实际壳/果荚/水/库存状态及每种可用等级、其他产品、废物或留存残余物，避免未知质量损失变成水蒸气或不合格物变成验收参考。 | |
| `validate_campaign_allocation` | 季次/场址/期间/共用资产 | 检查贡献完整性、相容加权汇总、实际季次/换批记录、分配优先次序及份额。更换/终止及返还/返分事件仅一个责任者，服务/能源/库存负担重复则失败。 | |
| `validate_identities` | 具体交换 | 确认确切流类型、状态/门、有关时的野生来源、属性/单位及基本流介质。按实际记录解析每个总括角色，核实与数量证据分别保留。缺失身份或不支持换算保持缺口。 | |
| `validate_ranges` | 每张卡 | 检查范围基准/单位/证据一致及实际零/正数量，暂定筛选触发证据审查而非默认量。记录执行/跳过检查及剩余不确定性。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景数据包；仅在已声明相容范围作为下游 secondary_dataset 或 background_dataset |
| downstream_use | 实际未人工管护来源原料带壳初级供应的数据集/过程/生命周期模型表示 |
| allowed_use | 相同物种/状态/等级/来源资格、水分基准、实际门与路线，披露代表性 |
| excluded_use | 栽培坚果；去壳/制成食品；通用坚果混合物/产率；未核实食用身份；安全认证；避免产品信用；未披露阶段或来源替代 |
| required_metadata | 来源/场址/季次/批次；物种；野生证据；状态/壳/外果皮/水分/等级；实际门/路线；时间/地理范围；协议；分配及贡献者；库存/资产；具体身份 |
| required_quality_disclosure | 测量及检测；初级来源溯源；未核实身份；暂定范围；遗漏/采样；库存/不合格去向；不确定性；执行/跳过验证 |
| update_trigger | 新物种/来源/形式/门、实际路线或供应方变化，测量或 UUID 证据完善，资产/库存归属变化或分类/方法证据修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-wild-nuts | official_guidance | 联合国统计司 CPC 3.0 03231，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03231 | 未人工管护采集的野生来源及排除有意种植，不采用数值因子 |
| fao-nwfp-food-handling | handbook | FAO《International trade in non-wood forest products: An overview》III Food products，https://www.fao.org/4/x5326e/x5326e05.htm | 自然坚果采集、果荚/球果处理、清理及原料带壳/去壳市场区别，不采用历史数量/价格/季节 |
