---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-equine-animals
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 马属动物生皮及原皮

## 1. 适用范围

本 PCR 涵盖马属动物鲜皮或经保藏但未经进一步加工的原皮。须申报物种、役用/繁殖/肉用历史、终止事件、屠宰或合法倒毙动物回收路线、等级、保藏状态及实际交付点。不得假设所有原皮均来自食用屠宰，也不得默认原皮是零负担废弃物。排除其他物种原皮、独立毛发、鞣制皮革、浸灰/脱毛及交付点之后的配送。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-equine-animals |
| classification_refs | CPC 3.0 `02952` |
| covered_products | 鲜皮或经保藏但未进一步加工的马属动物原皮 |
| excluded_products | 其他物种原皮、独立毛发、鞣制皮革及制革服务 |
| representative_product | 实际前鞣制交付点净重 1 kg 销售状态马属原皮 |
| production_route | 动物服务期及终止事件 → 剥皮/回收 → 初步整理 → 分级 → 可选保藏 → 保护性交付 |
| market_state | 鲜皮、冷藏、干燥、盐渍或盐水浸渍；注明水分、盐分和等级 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 实际交付点合格销售状态的马属原皮 |
| How much | 净重 1 kg；不含可拆包装和游离盐水 |
| How well | 物种、来源、等级、含水/含盐状态、保藏路线及合法性 |
| How long or cycle | 一个终止事件至交付的批次；按实际期间归属动物服务及共享资产 |
| reference_flow_link | `equine_raw_hide` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 实际前鞣制交付点的马属原皮 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；用途历史；终止事件；合法来源；回收路线；等级；状态；水分/盐分；包装；实际交付点；期间 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | reference and intermediate hides | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 逐批按状态称净重，排除可拆包装与游离盐水 |
| `state_conversion` | fresh versus preserved | Mass | kg | 无实测前后质量、水分及留盐时，不得换算不同状态的 kg |
| `period_link` | animal and shared service | Time and mass | year, kg | 先将投入、终止事件及资产关联实际期间，再归一至交付原皮 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | 可追溯的马属动物服务期起点或相容的上游动物数据集，随后是实际屠宰或合法倒毙动物回收事件 |
| starting_condition_role | 申报役用、繁殖、肉用或混合用途及终止事件；不预设肉用路线 |
| product_classification_scope | CPC 3.0 `02952` |
| recursive_input_rule | 购入同类原皮进入保藏时保留上游数据集，不重新计作本地动物产出 |
| upstream_dataset_requirement | 与路线及期间相容的动物服务、屠宰/回收、盐、能源及包装数据 |
| disclosure | 物种、合法来源、动物服务期间、终止事件、实际产品集、分摊、状态、等级、交付点及数据覆盖 |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `route_gate` | all routes | 在实际农场屠宰、屠宰场、回收或保藏交付点结束；包括实际整理、分级、可选保藏及保护；排除鞣制和后续运输 | `un-cpc-3`; `fao-hides-2009` |
| `separate_removal` | terminal event | 剥皮或合法倒毙回收是独立节点，记录湿原皮、附带残余物及损失 | `fao-hides-statistics` |
| `source_interface` | animal to removal | 来源节点只链接上游数据集，不重复畜养过程。每次事件仅有一项路线特定的物料交接，以同一动物 ID 和实测质量进入剥皮/回收节点：屠宰路线为活体 Product；倒毙回收仅在实际法律身份为 Waste 时使用尸体 Waste 卡。若合法回收物料属于 Product，生成交换前须另行核实 Product 身份。 | `fao-hides-statistics` |
| `grades_states` | conditioning to grading | 区分原始/整理状态及合格/降级/拒收去向；废物不得混入产品 | `fao-hides-2009` |
| `preserve_pack` | optional stabilization | 鲜皮绕过保藏；冷藏/干燥/盐渍路线记录实际投入、残余物、损失及包装复用 | `fao-hides-2009`; `unido-leather-2015` |
| `shared_period` | animal and site | 动物服务及共用剥皮/保藏/包装资产按实际使用节点和期间仅归属一次 | `fao-hides-statistics` |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `animal` | 马属动物来源及供给交接 | required | required | 链接上游动物服务数据集并记录实际终末产物集，不重复畜养交换 | 实测终末批次 |
| `removal` | 终末处理、剥皮或原皮回收 | required | required | 独立收集湿原皮 | 实测批次 |
| `conditioning` | 原皮初步整理 | required | required | 首次清理、去肉及修边 | 实测批次 |
| `grading` | 原皮分级 | required | required | 合格、降级及拒收去向 | 实测批次 |
| `preservation` | 原皮保藏 | conditional | conditional | 鲜皮绕过；按实进行冷藏、干燥、盐渍或盐水浸渍 | 实测批次 |
| `handover` | 保护性包装与交付 | required | required | 在实际交付点交出销售状态原皮 | 实测批次 |

### Process: 马属动物来源及供给交接 (`animal`)

#### Inputs

##### Product flows

本节点将相容的上游动物服务数据集链接到一项可追溯的尸体物料交接，并不产生动物质量。饲料、饮水及其他畜养投入属于该上游数据集，除非明确扩展前景边界并独立列清单；它们并非一项复合产品流。每次终止事件只选择下述两张互斥交接卡之一，实测尸体质量必须与剥皮/回收节点的对应投入相等。


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 交付待屠宰活体马属动物 (`live_equine_handoff`)

具有可追溯用途历史且进入实际屠宰与剥皮处理的活体马属动物。

分母与范围要求：每一终止事件

原始数量及计算要求：按活重与动物 ID 记录，仅适用于实际屠宰路线 原始采集分母类型：process_output。

- 选定流: 具有可追溯用途历史且进入实际屠宰与剥皮处理的活体马属动物 (UUID unresolved)
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_animal`
- 数量范围: 暂定交接质量核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/事件
  - 基准: 实测交接质量；不是默认系数
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 交付合法回收的倒毙动物尸体 (`fallen_body_handoff`)

依法送往原皮回收处理、且实际法律身份为 Waste 的倒毙马属动物尸体，尚非肉类产品。

分母与范围要求：每一终止事件

原始数量及计算要求：按尸体质量、死亡事件及合法回收去向记录，仅适用于倒毙路线 原始采集分母类型：process_output。

- 选定流: 依法送往原皮回收处理的倒毙马属动物尸体，尚非肉类产品 (UUID unresolved)
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_animal`
- 数量范围: 暂定交接质量核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/事件
  - 基准: 实测交接质量；不是默认系数
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows


### Process: 终末处理、剥皮或原皮回收 (`removal`)

#### Inputs

##### Product flows

###### 待屠宰活体马属动物投入 (`live_equine_input`)

来自同一已核对动物来源接口的活体马属动物。

分母与范围要求：每一终止事件

原始数量及计算要求：与上游动物 ID、活重及屠宰事件一一核对 原始采集分母类型：process_output。

- 选定流: 来自同一已核对动物来源接口的活体马属动物 (UUID unresolved)
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_removal`
- 数量范围: 暂定交接质量核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/事件
  - 基准: 实测交接质量；不是默认系数
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 倒毙动物尸体回收投入 (`fallen_body_input`)

来自同一合法回收交接且实际法律身份为 Waste 的倒毙马属动物尸体。

分母与范围要求：每一终止事件

原始数量及计算要求：与上游死亡事件、质量及合法回收去向一一核对 原始采集分母类型：process_output。

- 选定流: 来自同一合法回收交接的倒毙马属动物尸体 (UUID unresolved)
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_removal`
- 数量范围: 暂定交接质量核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/事件
  - 基准: 实测交接质量；不是默认系数
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Product flows

###### 实际非皮终末产品 (`other_terminal_products`)

实际胴体、肉或其他独立出售的产品。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：仅记录真实可售产品及交付；不得为倒毙动物虚构肉类。 原始采集分母类型：process_output。

- 选定流： 实际胴体、肉或其他独立出售的产品 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_removal`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per event
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 已收集的马属动物湿原皮 (`collected_skin`)

初步整理前未分级的马属动物湿原皮。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：在独立剥皮或回收交接时称重。 原始采集分母类型：process_output。

- 选定流： 初步整理前未分级的马属动物湿原皮 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_removal`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per event
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Waste flows

###### 终止事件残余物 (`terminal_residues`)

送往实际处理的非产品性尸体残余物。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：与目标产品分开称重并记录合法处理去向。 原始采集分母类型：process_output。

- 选定流： 送往实际处理的非产品性尸体残余物 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_removal`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per event
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 剥皮残余物 (`removal_residues`)

送往处理的非产品性肉屑及破损皮。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：分别记录残余物和去向，不得在产率中隐去。 原始采集分母类型：process_output。

- 选定流： 送往处理的非产品性肉屑及破损皮 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_removal`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per event
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Elementary flows


### Process: 原皮初步整理 (`conditioning`)

#### Inputs

##### Product flows

###### 初步整理用水 (`conditioning_water`)

实际首次清洗或漂洗的供水。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：计量实际用水；未清洗时不设投入。 原始采集分母类型：process_output。

- 选定流： 实际首次清洗或漂洗的供水 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_conditioning`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per kg prepared hide
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 初步整理后的原皮 (`prepared_hide`)

分级前清洁、去肉或修边的马属原皮。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：称量已整理原皮；不含浸灰、脱毛或鞣制。 原始采集分母类型：process_output。

- 选定流： 分级前清洁、去肉或修边的马属原皮 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_conditioning`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per lot
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Waste flows

###### 整理修边及洗涤残余物 (`conditioning_residues`)

送往实际处理的不可售修边料及废洗液。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：按去向分别计量固体与废水。 原始采集分母类型：process_output。

- 选定流： 送往实际处理的不可售修边料及废洗液 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_conditioning`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per lot
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Elementary flows


### Process: 原皮分级 (`grading`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 合格原皮等级 (`accepted_grade`)

供鲜皮交付或保藏的合格马属原皮。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：分别称量每一合格等级及交接量。 原始采集分母类型：process_output。

- 选定流： 供鲜皮交付或保藏的合格马属原皮 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_grading`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per lot
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 降级但可售的原皮 (`downgraded_grade`)

独立可售的较低等级马属原皮。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：仅在有实际独立买方或交付时列为产品。 原始采集分母类型：process_output。

- 选定流： 独立可售的较低等级马属原皮 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_grading`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per lot
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Waste flows

###### 拒收不可售原皮 (`rejected_hide`)

送往实际处理的拒收马属原皮。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：称量并记录处理去向，不并入参考产品质量。 原始采集分母类型：process_output。

- 选定流： 送往实际处理的拒收马属原皮 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_grading`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per lot
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Elementary flows


### Process: 原皮保藏 (`preservation`)

#### Inputs

##### Product flows

###### 保藏盐或盐水 (`preservation_salt`)

盐渍路线实际购入的盐或盐水。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：分别计量加入、留存与废弃的盐；非盐渍路线不设此项。 原始采集分母类型：process_output。

- 选定流： 盐渍路线实际购入的盐或盐水 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_preservation`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per kg preserved hide
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 保藏能源供应 (`preservation_energy`)

实际冷藏或干燥的能源载体。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：计量保藏阶段能耗，并由记录确定载体。 原始采集分母类型：process_output。

- 选定流： 实际冷藏或干燥的能源载体 (UUID unresolved)
- 流属性/单位： 能量 / kWh
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_preservation`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kWh per kg preserved hide
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 保藏后可用原皮 (`preserved_hide`)

冷藏、干燥、盐渍或盐水浸渍的马属原皮。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：称量产出并记录含水与留盐状态。 原始采集分母类型：process_output。

- 选定流： 冷藏、干燥、盐渍或盐水浸渍的马属原皮 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_preservation`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per lot
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Waste flows

###### 保藏残余物 (`preservation_residues`)

送往处理的废盐、废盐水或变质原皮。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：分别记录残余物种类和去向。 原始采集分母类型：process_output。

- 选定流： 送往处理的废盐、废盐水或变质原皮 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_preservation`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per lot
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Elementary flows


### Process: 保护性包装与交付 (`handover`)

#### Inputs

##### Product flows

###### 保护性包装材料 (`protective_packaging`)

最终原皮保护用包装功能。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：区分新耗材料和周转容器服务；不含交付点之后物流。 原始采集分母类型：process_output。

- 选定流： 最终原皮保护用包装功能 (UUID unresolved)
- 流属性/单位： 质量或件数 / kg 或件
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_handover`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per kg net hide
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 实际交付点的马属原皮 (`equine_raw_hide`)

前鞣制交付点销售状态的合格马属原皮。

参考产出的原始记录：净重不含可拆包装和游离盐水。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 实际前鞣制交付点的马属原皮
- 流属性/单位： 质量 / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_handover`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 1
  - 上限： 1
  - 单位： kg per kg reference
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Waste flows

###### 交付点包装废弃物 (`packaging_rejects`)

送往实际处理的破损或退役包装。

分母与范围要求：按每一记录批次或参考产品

原始数量及计算要求：仅当交付前达到使用寿命终点时记录。 原始采集分母类型：process_output。

- 选定流： 送往实际处理的破损或退役包装 (UUID unresolved)
- 流属性/单位： 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_handover`
- 数量范围：暂定完整性检验范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000000
  - 单位： kg per lot
  - 基准：实测相关批次流量；非默认系数
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Elementary flows

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `animal_history` | animal service | 关联实际役用、繁殖、肉用或混合用途期间及终止事件；优先采用可证实的物理因果关系，否则采用有记录的经济关系并检验敏感性；不得将全部动物负担归于一张皮或默认零负担 | `fao-hides-statistics` |
| `terminal_outputs` | slaughter or recovery | 仅枚举实际独立交付的原皮、胴体/肉及其他产品；倒毙回收不得虚构肉产品；残余物与废物分列；分摊份额之和为一 | `fao-hides-statistics` |
| `facility_shared` | removal to handover | 按使用节点、批次及期间，以记录工时或吞吐量一次性归属共用场所、设备、计量表及周转容器 | `fao-hides-2009` |
| `grade_products` | grading | 合格及独立可售的降级原皮属于目标产品；拒收皮、废盐水、修边料及包装废物按实际去向处理；不得重复交付计量 | `fao-hides-2009` |

## 8. 前景数据采集、计算及质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animal` | `animal` | 动物历史与实际产物集 | 批次/事件记录 | 动物/批次 ID、前后质量、状态、投入、产出、去向、时间及交付点 | 计量表、磅单、交易及操作记录；原始汇总要求：按状态、等级、期间及去向汇总核对。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, h | 逐批/逐事件 | 全部参考期间 | 实际作业场址 | 每参考流 | 校准记录、磅单及发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_removal` | `removal` | 独立收集湿原皮 | 批次/事件记录 | 动物/批次 ID、前后质量、状态、投入、产出、去向、时间及交付点 | 计量表、磅单、交易及操作记录；原始汇总要求：按状态、等级、期间及去向汇总核对。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, h | 逐批/逐事件 | 全部参考期间 | 实际作业场址 | 每参考流 | 校准记录、磅单及发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_conditioning` | `conditioning` | 首次清理、去肉及修边 | 批次/事件记录 | 动物/批次 ID、前后质量、状态、投入、产出、去向、时间及交付点 | 计量表、磅单、交易及操作记录；原始汇总要求：按状态、等级、期间及去向汇总核对。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, h | 逐批/逐事件 | 全部参考期间 | 实际作业场址 | 每参考流 | 校准记录、磅单及发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_grading` | `grading` | 合格、降级及拒收去向 | 批次/事件记录 | 动物/批次 ID、前后质量、状态、投入、产出、去向、时间及交付点 | 计量表、磅单、交易及操作记录；原始汇总要求：按状态、等级、期间及去向汇总核对。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, h | 逐批/逐事件 | 全部参考期间 | 实际作业场址 | 每参考流 | 校准记录、磅单及发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_preservation` | `preservation` | 鲜皮绕过；按实进行冷藏、干燥、盐渍或盐水浸渍 | 批次/事件记录 | 动物/批次 ID、前后质量、状态、投入、产出、去向、时间及交付点 | 计量表、磅单、交易及操作记录；原始汇总要求：按状态、等级、期间及去向汇总核对。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, h | 逐批/逐事件 | 全部参考期间 | 实际作业场址 | 每参考流 | 校准记录、磅单及发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_handover` | `handover` | 在实际交付点交出销售状态原皮 | 批次/事件记录 | 动物/批次 ID、前后质量、状态、投入、产出、去向、时间及交付点 | 计量表、磅单、交易及操作记录；原始汇总要求：按状态、等级、期间及去向汇总核对。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, h | 逐批/逐事件 | 全部参考期间 | 实际作业场址 | 每参考流 | 校准记录、磅单及发票；可追溯分子、合格参考产出分母及归一化计算表 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `net_reference` | handover | 净原皮 kg = 毛重减去可拆包装和游离盐水；可归属清单除以净质量 | 毛重、包装、游离盐水 | 每 kg 交换量 | `un-cpc-3` |
| `state_balance` | all nodes | 前态质量加实测水/盐加入量等于后态质量加实测残余及可解释的水分变化；不得采用通用换算系数 | 质量、盐、水及残余物 | 批次平衡 | `fao-hides-2009` |
| `allocation_sum` | shared outputs | 各节点分摊份额之和为一；动物及共享资产期间不得重复计数 | 实际产物、驱动量及期间 | 可归属负担 | `fao-hides-statistics` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | reference lot | 追溯物种、用途历史、终止事件、合法来源、状态、等级及交付点 | 动物 ID 及交付记录 |
| `completeness` | all nodes | 纳入降级/拒收、废盐、包装废料及共享服务；未使用的分支明确记零 | 平衡表及批次记录 |
| `state_quality` | conversion | 保留实测水分及留盐，区分销售状态、鲜态和干态质量 | 检验及校准秤 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `classification` | reference | 拒绝非马属、已鞣制/脱毛/浸灰或交付点和状态不明的产品 | `un-cpc-3` |
| `mass_balance` | nodes | 核对剥皮至交付各状态质量、合格/降级/拒收去向、水分与留盐 | `fao-hides-2009` |
| `output_set` | terminal and grading | 核实真实目标产品及交付；倒毙回收不得虚构肉类联产品 | `fao-hides-statistics` |
| `source_match` | animal and removal | 按动物 ID、路线和实测质量一次性匹配活体 Product 或倒毙尸体 Waste 交接；核对剥皮产物及有记录损失，不得把整具动物再列为另一联产品。 | `fao-hides-statistics` |
| `period_shared` | animal and facility | 核实动物及共享资产期间只归属一次，分摊份额之和为一 | `fao-hides-statistics` |
| `uuid_gate` | concrete exchanges | 具体交换需核实实际状态和交付点；农场门口混合流不可替代保藏场所交付 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际前鞣制交付点的马属原皮前景数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 物种、等级、状态和交付点相容的原皮及后续制革模型 |
| excluded_use | 其他物种、成革、未核实的农场门口混合流及状态不明的产品 |
| required_metadata | 物种、用途历史、终止事件、合法来源、分摊、净质量、等级、状态及交付点 |
| required_quality_disclosure | 上游覆盖、状态/质量/盐平衡、共享分配驱动及未解析 UUID |
| update_trigger | 路线、合法回收、物种范围、处理状态、交付点、分摊或身份发生变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3` | `official_guidance` | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 分类范围 |
| `fao-hides-2009` | `official_guidance` | [FAO, Hides and Skins](https://www.fao.org/4/i0523e/i0523e.pdf) | 收集、初步整理及保藏 |
| `fao-hides-statistics` | `official_guidance` | [FAO, hides and skins production definitions](https://www.fao.org/4/x9892e/X9892e06.htm) | 屠宰与倒毙动物来源 |
| `unido-leather-2015` | `official_guidance` | [UNIDO, sustainable leather framework](https://downloads.unido.org/ot/46/70/4670793/KRAL_AGR_AIT_URT_2015_100228_001.pdf) | 原皮与后续制革边界 |
