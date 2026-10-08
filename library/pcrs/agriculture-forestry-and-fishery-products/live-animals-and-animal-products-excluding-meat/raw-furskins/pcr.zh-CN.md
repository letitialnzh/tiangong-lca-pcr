---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-furskins
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原裘皮

## 1. 适用范围

本 PCR 涵盖适于裘皮加工的未整饰、未鞣制原裘皮，包括符合用途的整张皮以及头、尾、爪或裁片。逐批声明实际物种、合法养殖或野外来源、带毛形态、整张/片块组成、等级、新鲜或初步保藏状态、净质量和实际交付口。羔羊皮仅在其真实市场身份为裘皮用原皮时纳入；普通绵羊/羔羊原皮不在此范围。排除已整饰或鞣制的裘皮、裘皮制品、脱离的毛、普通牛马羊山羊原皮，以及非裘皮用途的其他原皮。仅有毛不构成类别证据。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-furskins |
| classification_refs | CPC 3.0 02955 |
| covered_products | 适于裘皮用途的未整饰整张皮及合格片块，新鲜或初步保藏。 |
| excluded_products | 已整饰或鞣制裘皮、制品、脱离的毛、普通原皮和非裘皮用途皮。 |
| representative_product | 实际交付口按物种与形态确认的合格原裘皮。 |
| production_route | 实际养殖来源或合法野外捕获；独立剥皮、首次整理、分级、可选保藏和防护性交付。 |
| market_state | 带毛原态，未整饰未鞣制；声明实际品质和状态。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 实际交付口的合格裘皮用原皮或合格片块。 |
| How much | 按实售状态的 1 kg 净原皮，不含包装和可分离游离保藏剂。 |
| How well | 声明物种、毛皮品质、整张/片块组成、等级、合法来源、原态和交付口。 |
| How long or cycle | 将养殖群体或野外捕获事件、剥皮、保藏和共用服务关联至实际报告期间。 |
| reference_flow_link | `accepted_furskin` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 按物种、状态和交付口确认的原裘皮 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；合法来源；整张/片块；毛皮品质；等级；新鲜/保藏；净质量；交付口；期间 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | 每一材料批次 | Mass | kg | 校准毛重及皮重；剔除包装和游离保藏剂；核对每个实际材料去向。 |
| m_piece | 以件计交易 | Mass and Number of items | kg and item | 对同质批次同时记录质量和件数；观测的 kg/件仅适用于该物种、等级、形态和状态。 |
| m_state | 保藏批次 | Mass and moisture fraction | kg and kg/kg | 测量处理前后状态；不得用统一系数转换新鲜与保藏质量。 |
| m_period | 来源及共用服务 | Time | reporting period | 将实际群体或捕获季、服务、产物与更换/终止事件关联至不重叠期间。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 有物种和法律状态记录的可追溯养殖群体或合法野外捕获事件。 |
| starting_condition_role | 兼容的上游养殖或野外捕获数据集承载真实来源负担。若上游已含捕获或屠宰，前景来源事件仅为接口台账，不重复交换。野外路线不设人工养殖阶段。 |
| product_classification_scope | 适于裘皮用途、未整饰未鞣制的原皮与合格部位。 |
| recursive_input_rule | 外购同类原裘皮保留供应方负担，不在此虚作新捕获产物。 |
| upstream_dataset_requirement | 特定来源的养殖或合法捕获清单及实际屠宰/剥皮服务；不得自动给零负担或整只动物负担。 |
| disclosure | 物种、合法性、路线、实际联产品、形态、状态、共用服务、期间和交付口。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_source | 来源 | 区分养殖和合法野外捕获；仅纳入真实独立销售的联产品，不重复上游动物或捕获作业。 | un-cpc-3-notes |
| b_remove | 剥皮 | 来源/捕获与剥皮是独立事件；明确带毛原皮、附带组织和损失，以及首次清理前交接。 | fao-hides-skins |
| b_condition | 首次整理 | 仅含实际削肉、清洗和修边；排除整饰、鞣制和制造。 | fao-hides-skins;eu-raw-furskin-heading |
| b_grade | 分级 | 分离合格整张/片块、可售降级和废弃物，每种有独立去向。普通羊皮不能仅凭有毛变成裘皮。 | un-cpc-3-notes;eu-raw-furskin-heading |
| b_preserve | 处理批次 | 新鲜批次绕开；实际冷藏、干燥或盐保藏记录前后状态、投入和拒收物。 | fao-hides-skins |
| b_gate | 交付 | 包含至实际收集/保藏交付口的防护性包装；排除分销及下游裘皮整饰。 | un-cpc-3-notes |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| source | 养殖或合法野外来源 | required | every lot | Trace actual source events and co-products; no fictional husbandry for wild capture. | 每 kg 节点产出 |
| remove | 独立剥皮 | required | every lot | Remove fur-on skin independently of source event and first preparation. | 每 kg 节点产出 |
| condition | 原皮首次整理 | required | actual first preparation; ledger if none | First cleaning/fleshing/trimming without dressing or tanning. | 每 kg 节点产出 |
| grade | 裘皮用途分级 | required | every lot | Separate whole/piece accepted grades, downgraded sale and rejected waste. | 每 kg 节点产出 |
| preserve | 可选原皮保藏 | conditional | preserved lots only | Stabilize a usable raw state without dressing/tanning; fresh lots bypass. | 每 kg 节点产出 |
| handover | 防护性交付 | required | every accepted lot | Present fresh or preserved accepted raw skin at actual gate, excluding distribution. | 每 kg 节点产出 |

养殖期或野外捕获季、剥皮、整理、保藏与共用设施跨期间时，按实际事件和消费者节点仅归属一次。六个节点是职责边界，不虚构场址活动。

### 过程：养殖或合法野外来源 (`source`)

#### Inputs

##### Product flows

###### 实际屠宰的养殖动物 (`farmed_animal`)

仅养殖路线；追溯上游群体与动物服务负担，野外捕获不设养殖动物产品投入。

分母与范围要求：每 kg 养殖或合法野外来源节点产出

原始数量及计算要求：仅养殖路线；追溯上游群体与动物服务负担，野外捕获不设养殖动物产品投入。 原始采集分母类型：process_output。

- 选定流: 按物种确认的养殖动物 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_source`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 养殖或合法野外来源节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 合格的带皮来源物 (`source_skinbearing`)

仅记录实际屠宰或合法野外捕获形成的可合法转移且质量合格的带皮材料。无法合法进入此材料路线的捕获动物体不是产品产出，应走有记录的拒收／处理路线。

分母与范围要求：每 kg 养殖或合法野外来源节点产出

原始数量及计算要求：记录实际屠宰或合法捕获事件；拒收物不作为产品产出。 原始采集分母类型：process_output。

- 选定流: 按物种确认的带皮胴体或部位 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_source`
- 数量范围: 节点产出或质量份额核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 养殖或合法野外来源节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 其他实际可售动物产物 (`source_coproduct`)

本来源接口卡仅涵盖较早阶段独立销售的实际养殖产物，例如奶或已脱离纤维。同次终止事件的肉及其他产物在剥皮后记录，不在此处记录。

分母与范围要求：每 kg 养殖或合法野外来源节点产出

原始数量及计算要求：仅测量同次终止事件前独立销售的较早期间养殖产物；排除该终止事件动物体产出的肉及其他商品。 原始采集分母类型：process_output。

- 选定流: 较早期间独立销售的实际养殖产物 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_source`
- 数量范围: 节点产出或质量份额核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 养殖或合法野外来源节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### 过程：独立剥皮 (`remove`)

#### Inputs

##### Product flows

###### 待剥皮带皮材料 (`remove_input`)

实际合格来源仅转移一次，不重复上游捕获或屠宰交换。

分母与范围要求：每 kg 独立剥皮节点产出

原始数量及计算要求：实际合格来源仅转移一次，不重复上游捕获或屠宰交换。 原始采集分母类型：process_output。

- 选定流: 按物种确认的带皮材料 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_remove`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 独立剥皮节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 剥离后的新鲜带毛皮 (`removed_skin`)

单独称量原皮，并保留物种、整张/片块及来源事件。

分母与范围要求：每 kg 独立剥皮节点产出

原始数量及计算要求：单独称量原皮，并保留物种、整张/片块及来源事件。 原始采集分母类型：process_output。

- 选定流: 新鲜未整理带毛皮 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_remove`
- 数量范围: 节点产出或质量份额核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 独立剥皮节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 同次终止事件的实际可售产物 (`terminal_coproduct`)

仅当同次屠宰或合法野外捕获的动物体在剥皮后形成独立销售的肉或其他商品，才在此记录。来源节点不得重复输出。

分母与范围要求：每 kg 独立剥皮节点产出

原始数量及计算要求：单独称量每种实际可售产物并记录其独立市场交付口。 原始采集分母类型：process_output。

- 选定流: 按实际物种确认的可售终止事件产物 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_remove`
- 数量范围: 同次终止事件联产品质量合理性筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 独立剥皮节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 不可售剥皮残余 (`remove_residue`)

记录不可售组织或皮损及实际处理，不包括可售片块。

分母与范围要求：每 kg 独立剥皮节点产出

原始数量及计算要求：记录不可售组织或皮损及实际处理，不包括可售片块。 原始采集分母类型：process_output。

- 选定流: 实际送处理的剥皮残余 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_remove`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 独立剥皮节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### 过程：原皮首次整理 (`condition`)

#### Inputs

##### Product flows

###### 进入首次整理的新鲜皮 (`condition_input`)

由剥皮节点转入已称量原皮。

分母与范围要求：每 kg 原皮首次整理节点产出

原始数量及计算要求：由剥皮节点转入已称量原皮。 原始采集分母类型：process_output。

- 选定流: 新鲜未整理带毛皮 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_condition`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 原皮首次整理节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 实际使用的清洗水 (`condition_water`)

计量实际用水；未湿洗时为零。

分母与范围要求：每 kg 原皮首次整理节点产出

原始数量及计算要求：计量实际用水；未湿洗时为零。 原始采集分母类型：process_output。

- 选定流: 原皮清洗用工艺水
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_condition`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 原皮首次整理节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 首次整理后原皮 (`prepared_skin`)

分级前称量整理后产物，保持带毛及原态。

分母与范围要求：每 kg 原皮首次整理节点产出

原始数量及计算要求：分级前称量整理后产物，保持带毛及原态。 原始采集分母类型：process_output。

- 选定流: 清理修边后未整理带毛皮 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_condition`
- 数量范围: 节点产出或质量份额核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 原皮首次整理节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 整理残余 (`condition_residue`)

拒收残余及实际去向与适于裘皮用途的片块分开记录。

分母与范围要求：每 kg 原皮首次整理节点产出

原始数量及计算要求：拒收残余及实际去向与适于裘皮用途的片块分开记录。 原始采集分母类型：process_output。

- 选定流: 不可售削肉与边角料 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_condition`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 原皮首次整理节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### 过程：裘皮用途分级 (`grade`)

#### Inputs

##### Product flows

###### 待分级原皮 (`grade_input`)

分级前记录物种、毛皮质量与整张/片块组成。

分母与范围要求：每 kg 裘皮用途分级节点产出

原始数量及计算要求：分级前记录物种、毛皮质量与整张/片块组成。 原始采集分母类型：process_output。

- 选定流: 已初步整理未整饰带毛皮 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 裘皮用途分级节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 合格裘皮用整张及片块 (`grade_accepted`)

各等级与去向分列；整张及其裁片不得重复计数。

分母与范围要求：每 kg 裘皮用途分级节点产出

原始数量及计算要求：各等级与去向分列；整张及其裁片不得重复计数。 原始采集分母类型：process_output。

- 选定流: 适于裘皮用途的整张或合格片块 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 节点产出或质量份额核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 裘皮用途分级节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 可售但非参考产物降级品 (`grade_downgrade`)

仅有真实独立市场时用产品角色；不计入合格参考产物。

分母与范围要求：每 kg 裘皮用途分级节点产出

原始数量及计算要求：仅有真实独立市场时用产品角色；不计入合格参考产物。 原始采集分母类型：process_output。

- 选定流: 实际可售降级原皮 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 节点产出或质量份额核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 裘皮用途分级节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 分级拒收物 (`grade_reject`)

记录不可售拒收物及实际处理，不含可售降级品。

分母与范围要求：每 kg 裘皮用途分级节点产出

原始数量及计算要求：记录不可售拒收物及实际处理，不含可售降级品。 原始采集分母类型：process_output。

- 选定流: 实际分级废物 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 节点产出或质量份额核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 裘皮用途分级节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### 过程：可选原皮保藏 (`preserve`)

#### Inputs

##### Product flows

###### 保藏前合格皮 (`preserve_input`)

仅处理批次进入；记录处理前质量及状态。

分母与范围要求：每 kg 可选原皮保藏节点产出

原始数量及计算要求：仅处理批次进入；记录处理前质量及状态。 原始采集分母类型：process_output。

- 选定流: 合格新鲜裘皮用整张或片块 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 可选原皮保藏节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 实际保藏能源 (`preserve_energy`)

计量实际能源载体及期间，避免共用库房重复计入。

分母与范围要求：每 kg 可选原皮保藏节点产出

原始数量及计算要求：计量实际能源载体及期间，避免共用库房重复计入。 原始采集分母类型：process_output。

- 选定流: 实际冷藏或干燥能源供应
- 流属性/单位: Energy / kWh
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kWh/kg
  - 基准: 每 kg 可选原皮保藏节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 实际原皮保藏剂 (`preserve_agent`)

测量实际消耗的盐或其他保藏剂，绝不套用统一配方。

分母与范围要求：每 kg 可选原皮保藏节点产出

原始数量及计算要求：测量实际消耗的盐或其他保藏剂，绝不套用统一配方。 原始采集分母类型：process_output。

- 选定流: 按物种和方法确认的保藏剂 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 可选原皮保藏节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 稳定化原裘皮 (`preserved_skin`)

测量实际处理后的净质量与状态，不假定新鲜当量。

分母与范围要求：每 kg 可选原皮保藏节点产出

原始数量及计算要求：测量实际处理后的净质量与状态，不假定新鲜当量。 原始采集分母类型：process_output。

- 选定流: 已保藏未整饰裘皮用整张或片块 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 节点产出或质量份额核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 可选原皮保藏节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 保藏拒收或废弃物 (`preserve_residue`)

记录处理去向；蒸发水分不虚构为废物产品。

分母与范围要求：每 kg 可选原皮保藏节点产出

原始数量及计算要求：记录处理去向；蒸发水分不虚构为废物产品。 原始采集分母类型：process_output。

- 选定流: 实际待处理废保藏剂或拒收皮 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 可选原皮保藏节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### 过程：防护性交付 (`handover`)

#### Inputs

##### Product flows

###### 进入包装的合格原皮 (`handover_input`)

采用新鲜分级批次或其保藏对应批次，不能两者同时计入。

分母与范围要求：每 kg 防护性交付节点产出

原始数量及计算要求：采用新鲜分级批次或其保藏对应批次，不能两者同时计入。 原始采集分母类型：process_output。

- 选定流: 合格新鲜或保藏裘皮用原皮 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 防护性交付节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 实际使用的防护包装 (`handover_packaging`)

识别一次性消耗或可重复使用周转次数；未使用则无包装投入。

分母与范围要求：每 kg 防护性交付节点产出

原始数量及计算要求：识别一次性消耗或可重复使用周转次数；未使用则无包装投入。 原始采集分母类型：process_output。

- 选定流: 原裘皮防护包装
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 防护性交付节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 实际交付口的合格原裘皮 (`accepted_furskin`)

称量按实售状态的 1 kg 净质量，剔除包装及可分离游离保藏剂。

参考产出的原始记录：称量按实售状态的 1 kg 净质量，剔除包装及可分离游离保藏剂。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流: 按物种、状态和交付口确认的原裘皮
- 流属性/单位: Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 节点产出或质量份额核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 防护性交付节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 实际交付拒收物 (`handover_reject`)

记录实际弃置材料；可售降级品是其独立交付口的产品。

分母与范围要求：每 kg 防护性交付节点产出

原始数量及计算要求：记录实际弃置材料；可售降级品是其独立交付口的产品。 原始采集分母类型：process_output。

- 选定流: 待处理的拒收包装或皮 (UUID unresolved)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 宽泛批次完整性筛查，非经验因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 防护性交付节点产出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_source | 来源与剥皮 | 较早阶段养殖产物在来源记录，皮和同次终止事件实际可售产物在剥皮后记录；各有独立交付口且只计一次。先细分独立计量的服务；不可分的来源负担有可辩护的物理因果关系时按其归属，否则依据真实产物同期净经济价值分配并披露价格敏感性。不得自动为零或全部归于皮。 | fao-hides-skins |
| a_period | 养殖或野外路线 | 将繁育/生长、捕获/屠宰、剥皮、更换和终止关联至实际期间。野外捕获不虚构人工养殖，每项投入产出只归属一次。 | un-cpc-3-notes |
| a_shared | 共用捕具、剥皮工具、清理及冷藏/干燥设施 | 识别全部消费者节点和服务期间；优先计量用量，否则按有记录的服务小时或吞吐量仅分配一次，不与上游重复。 | fao-hides-skins |
| a_state | 新鲜/保藏；整张/片块 | 一个批次在交付口只有一种销售状态和组成；整张皮与其裁片不重复计数；处理负担仅归处理批次。 | eu-raw-furskin-heading |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | source | 来源及实际联产品 | 事件台账 | 物种；养殖或野外；合法编号；群体或捕获；质量；产物；价格；期间 | 供应/捕获及销售记录；原始汇总要求：每事件及产物仅链接一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; currency; period | 每事件 | 实际群体或捕获季 | 实际来源 | 每参考流 | 授权；销售；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_remove | remove | 皮、终止事件产物及损失 | 剥皮台账 | 事件；投入；原皮；实际终止事件产物；残余；各去向 | 称重、销售和处理票据；原始汇总要求：全部产物与废物仅核对一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 期间 | 剥皮场址 | 每参考流 | 秤单；销售；处理票据；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_condition | condition | 首次整理皮及水 | 整理记录 | 投入；水；产出；修边；方法 | 秤与计量表；原始汇总要求：仅实际处理。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 期间 | 整理场址 | 每参考流 | 表计；秤单；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_grade | grade | 合格/降级/拒收 | 分级台账 | 物种；毛皮品质；形态；合格；降级；拒收；件数；去向 | 分级和称重；原始汇总要求：各等级去向分离。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; item | 每批 | 期间 | 分级场址 | 每参考流 | 分级；销售记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_preserve | preserve | 处理皮和服务 | 处理记录 | 前质量；后质量；状态；水分；盐；能源；库时；拒收 | 秤与计量表；原始汇总要求：状态和用量核对。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; kWh; h | 每处理批 | 期间 | 保藏场址 | 每参考流 | 表计；处理记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_handover | handover | 净产品和包装 | 交付台账 | 批次；状态；物种；形态；交付口；净质量；包装；件数；周转 | 票据和称重；原始汇总要求：分母仅用合格净质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; item; turn | 每交付 | 期间 | 实际交付口 | 每参考流 | 签收票据；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_ref | 参考产物 | 实售净质量 = 测量毛重减包装及可分离游离保藏剂；件数不等于质量。 | 毛重；皮重；游离保藏剂 | 实售 kg | fao-hides-skins |
| c_piece | 计件物 | 观测批次 kg/件 = 同质批次测量净质量 / 件数；不得跨物种、等级、状态或形态复用。 | 质量；件数；限定条件 | 观测 kg/件 | eu-raw-furskin-heading |
| c_balance | 各批 | 将材料产出、残余及水分/状态差与测量投入核对；调查缺口，不套用默认得率。 | 投入；产出；状态 | kg 台账 | fao-hides-skins |
| c_shared | 共用服务 | 对各真实消费者和期间仅分配一次计量用量或有记录的服务小时/吞吐量份额。 | 负担；用量；期间 | 已分配负担 | fao-hides-skins |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 每批 | 核实物种、合法性、裘皮用途品质、整张/片块组成和未整饰状态；不得推定羊皮必为裘皮。 | 授权及分级/销售记录 |
| dq_mass | 全部材料 | 校准质量及去向；整张皮与其裁片不重复计数。 | 秤单及平衡 |
| dq_period | 来源与共用资产 | 实际群体/季节、期间和消费者节点，含更换或终止。 | 事件及资产台账 |
| dq_state | 保藏 | 实际处理前后状态；无统一新鲜转保藏系数。 | 处理及质量记录 |
| dq_uuid | 生成交换 | 解析具体且兼容的平台身份；候选阶段空白不是最终交换许可。 | 详情及支持行证据 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | 销售批次 | 排除鞣制、整饰、制成品及虽有毛但非裘皮用途的物料；核实合法来源与实际整张/片块裘皮用途身份。 | un-cpc-3-notes;eu-raw-furskin-heading |
| v_balance | 各批 | 在实测状态下核对来源、剥皮、整理、合格、降级、废弃、处理和销售质量。 | fao-hides-skins |
| v_route | 养殖/野外 | 野外路线无养殖动物投入；真实联产品及来源负担只计一次；不重复上游捕获/屠宰。 | un-cpc-3-notes |
| v_period | 共用服务 | 来源事件和各共用捕具、剥皮、整理或冷/干设施有一个期间及一个归属消费者份额。 | fao-hides-skins |
| v_binding | 全部卡 | 待确认流身份 产品投入需依据实际记录选具体流；未覆盖 UUID 须详情确认。混合原态/整饰且以件数计的候选不能绑定质量原皮参考。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 按物种与路线限定的前景原裘皮数据包。 |
| downstream_use | 方法和身份审查后作为 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 测量物种、形态、状态和交付口的原态裘皮用产品。 |
| excluded_use | 整饰/鞣制裘皮、普通原皮、非裘皮皮、未知物种或虚构的件数转质量。 |
| required_metadata | 合法来源；物种；路线；整张/片块；毛皮等级；质量/件数；状态；交付口；期间；分配。 |
| required_quality_disclosure | 完整性、质量、归属、共用服务、换算不确定性及未解析 UUID。 |
| update_trigger | 路线、裘皮判据、保藏、交付口、来源规则或平台身份有实质变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-notes | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 类别与排除项。 |
| eu-raw-furskin-heading | official_guidance | https://faolex.fao.org/docs/pdf/eur212388.pdf | 原裘皮及整张/部位区别。 |
| fao-hides-skins | official_guidance | https://www.fao.org/4/i0523e/i0523e.pdf | 原皮首次处理与保藏。 |
