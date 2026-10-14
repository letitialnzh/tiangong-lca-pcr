---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-mammals
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他活哺乳动物

## 1. 范围和适用性

本 PCR 涵盖不在牛科、其他反刍动物、马科、猪、兔或野兔等专门细目中的活哺乳动物。这是异质的剩余类别，不能作为无物种的平均值，也不授予野生动物交易许可。每个具体批次须记录物种、来源、用途、保育与法律状态、福利控制和真实交接点。圈养繁育和有凭证的合法活体捕获对于每批互斥。分类提及鲸豚、海牛、灵长类及其他受保护类群，绝不等于允许当代捕获。缺少合法来源证据就不得使用捕获路线。死亡动物、肉、皮毛、屠宰及交接后运输或使用均排除。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-mammals` |
| classification_refs | CPC 3.0 `02192`，其他哺乳动物 |
| covered_products | 物种明确且来源为合法圈养或合法活体捕获的剩余类别活哺乳动物 |
| excluded_products | 其他专列活哺乳动物；死亡动物；肉和皮毛；无凭证野生动物交易；交接后使用 |
| representative_product | 一个指定物种/类别的活体哺乳动物，而非跨物种混合 |
| production_route | 圈养繁育育成后选取，或单独有凭证的合法活体捕获；捕获路线不得虚构繁育 |
| market_state | 真实生产者或捕获交接点的存活未加工动物，含个体数、质量与状态 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 真实交接点的指定剩余类别物种活哺乳动物 |
| How much | 1 kg 实测活重，附个体数 |
| How well | 存活、物种明确、合法来源及状态已确定 |
| How long or cycle | 实际繁育育成群体和服务期间，或有凭证捕获活动 |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 真实交接点按物种区分的其他活哺乳动物 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 学名；个体数/类别；存活状态；称重方法；路线；来源；保护状态；许可；司法辖区；真实交接点；期间 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

无物种的平台产品流不能证明具体参考身份。最终交换必须核实物种、路线和交接点完全匹配的身份。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | 输入及输出动物 | Mass | kg | 逐只称重或核实物种/类别抽样称重，并与个体数核对。 |
| `count_balance` | 各批次和期间 | Count | head | 期初＋出生＋购入＋捕获－转出－放归－死亡＝期末；每只动物只记一次。 |
| `period_index` | 群体及资产 | Time | days or cycle | 投入、产出、更新和资产归于真实受益期间；不假设通用寿命。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 有凭证的圈养期初/购入存栏及前序负担，或合法捕获前活动背景 |
| starting_condition_role | 受管理的生物存栏或获授权野外来源；捕获路线无虚构的终生饲养 |
| product_classification_scope | 排除更具体活哺乳动物细目后的 CPC 3.0 `02192` |
| recursive_input_rule | 同类别购入动物只关联一次前一交接点数据；育成至选取内转不产生另一最终产品。 |
| upstream_dataset_requirement | 存栏、饲料、水、能源和材料须匹配物种、供应商、地区、单位及交接点。 |
| disclosure | 物种、合法来源和保护状态、许可、福利、批次/群体/活动、资产期间、死亡/放归、产出及真实交接点。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_identity` | 每批 | 物种级剩余分类及合法来源为前提；CPC 示例不是许可证。 | `un-cpc-2025`; `woah-wildlife-trade-2021` |
| `boundary_managed` | 圈养 | 纳入实际存栏、饲养投入、照护、死亡和交接前选取；购入存栏有前序负担。 | `woah-wildlife-trade-2021` |
| `boundary_capture` | 捕获 | 仅纳入获授权活动、设备、短期暂养、福利和捕获交接；无法证明合法性时不可使用。 | `woah-wildlife-trade-2021` |
| `boundary_gate` | 两者 | 止于真实活体交接；排除交接后配送、买方使用、屠宰及尸体处理。 | `un-cpc-2025` |
| `boundary_shared` | 共用围舍及设备 | 记录使用过程和服务期间；共同负担只计一次。 |  |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed` | 圈养繁育与育成 | conditional | 合法且物种明确的圈养经营 | 生物生产、存栏、饲料、福利、死亡及真实联产品 | 每 kg 离开圈养育成的活体 |
| `selection` | 活体选取与交接 | conditional | 仅圈养路线 | 独立健康状态筛选、称重和生产者交接点 | 每 kg 生产者交接点合格活体 |
| `capture` | 合法活体捕获与交接 | conditional | 有凭证获授权活动 | 独立捕获、短期暂养和真实捕获交接点；无农场生产 | 每 kg 捕获交接点合格活体 |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

圈养和捕获每批互斥。选取与生长分开，因为接受、称重和交接发生在生产之后。捕获从有凭证的合法来源取得动物，不使用虚构受管理存栏。死亡为损失或废物，非活体产出；放归记入动物台账，非销售或废物。索引繁育、育成、更新、共用服务期间及捕获事件。

### 过程：圈养繁育与育成 (`managed`)

#### 输入

##### 产品流

###### 购入活体存栏 (`stock`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

- 选定流: 按物种确定的活体存栏 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_animals`
- 数量范围: 宽泛暂定完整性校验，不作默认值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 物种适宜饲料 (`feed`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按 calc_feed_supply_and_intake 分别建立饲料投入、采食及损失台账。承担饲料生产负担的数量包含边界内拒食、变质及未食用饲料，不得缩减为动物采食量。保留来源、物种/群体、阶段及原始质量/水分基准。最终贡献依 inventory_reference_normalization 和 stage_throughput_linkage 恰归一化一次。 原始采集分母类型：process_output.

- 选定流: 按实物身份区分的饲料 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：采用保留边界内损失及其生产负担的已核对饲料投入记录，依 inventory_reference_normalization 和 stage_throughput_linkage 计算可归属最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_inputs`
- 数量范围: 宽泛暂定完整性校验，不作默认值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 饲养供水 (`water`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

- 选定流: 按实际用途区分的水 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_inputs`
- 数量范围: 宽泛暂定完整性校验，不作默认值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 围舍能源 (`energy`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

- 选定流: 按实际载体区分的能源 (UUID 未解析)
- 流属性/单位: Energy / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_inputs`
- 数量范围: 宽泛暂定完整性校验，不作默认值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: MJ/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 共用围舍服务 (`assets`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

- 选定流: 共用资产服务 (UUID 未解析)
- 流属性/单位: Time / h
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_assets`
- 数量范围: 宽泛暂定完整性校验，不作默认值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: h/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 离开育成的活体动物 (`reared`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

- 选定流: 按物种区分的活体动物 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_animals`
- 数量范围: 单位输出核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 依据采集计算 (`calculated_from_collection`)

###### 真实独立联产品 (`other_output`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

- 选定流: 按真实身份区分的联产品 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_outputs`
- 数量范围: 宽泛暂定完整性校验，不作默认值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 交接前动物死亡 (`death`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

- 选定流: 按去向区分的动物尸体材料 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_animals`
- 数量范围: 宽泛暂定完整性校验，不作默认值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 弃置并收集的哺乳动物粪污（`review_managed_manure_waste`）

记录实际送处理或处置的收集粪污及其水分和去向。放牧沉积不是收集废物移交。独立移交的有用粪肥须有其产品处理依据，同一物料不得两边重复计入。

- 选定流：送处理的已收集哺乳动物粪污（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：称量真实废物移交量，执行既有归属并对最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

范围证据需求：湿/干状态废物数量来自实际粪污记录，不采用无物种限定的通用产率。

##### 基本流

###### 肠道生物源甲烷排放至空气（`review_managed_enteric_ch4`）

仅适用于实际受管理物种及类别存在的消化路径；用有记录的动物活动/采食量及有依据的方法计算。不得将牛类因子套用于尚未表征的物种。 仅适用于实际运行的 `managed` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：生物源甲烷排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg CH4
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污生物源甲烷排放至空气（`review_managed_manure_ch4`）

按粪污系统、气候、停留时间及挥发性固体活动量计算实际大气排放。核对回收、销毁或氧化甲烷；产生量不自动等于排放量。 仅适用于实际运行的 `managed` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：生物源甲烷排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg CH4
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污直接氧化亚氮排放至空气（`review_managed_direct_n2o`）

使用实际粪污管理氮路径。贮存/处理须与田间施用和放牧沉积分开；后两者须使用管理土壤方法并明确清单核算责任。 仅适用于实际运行的 `managed` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氧化亚氮排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg N2O
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污氮引致的间接氧化亚氮排放至空气（`review_managed_indirect_n2o`）

适用时，由有记录的粪污氮挥发/沉降及淋溶/径流路径计算可归属间接 N2O。与直接 N2O 分开，并核对下游或所用背景/影响模型中已包含的氮去向计算。 仅适用于实际运行的 `managed` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氧化亚氮排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg N2O
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污氨排放至空气（`review_managed_nh3`）

采用真实物种、圈舍/贮存条件及有依据的氮流方法。逐阶段跟踪总氮和铵态氮；通用挥发氮估计可能包含其他氮物种，不能自动视为 NH3。 仅适用于实际运行的 `managed` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氨排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg NH3
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-eea-manure-2023`

### 过程：活体选取与交接 (`selection`)

#### 输入

##### 产品流

###### 进入选取的活体动物 (`selected_in`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

- 选定流: 按物种区分的活体动物 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_animals`
- 数量范围: 宽泛暂定完整性校验，不作默认值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 生产者交接点的活体动物 (`handover`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流: 生产者门口按物种区分的活哺乳动物 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_animals`
- 数量范围: 单位输出核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 依据采集计算 (`calculated_from_collection`)

##### 废物流

###### 选取期间死亡 (`selection_death`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

- 选定流: 按去向区分的动物尸体材料 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_animals`
- 数量范围: 宽泛暂定完整性校验，不作默认值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：合法活体捕获与交接 (`capture`)

#### 输入

##### 产品流

###### 捕获和临时暂养能源 (`capture_energy`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

- 选定流: 按实际载体区分的能源 (UUID 未解析)
- 流属性/单位: Energy / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_inputs`
- 数量范围: 宽泛暂定完整性校验，不作默认值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: MJ/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 捕获和福利材料 (`capture_materials`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

- 选定流: 真实捕获耗材 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_inputs`
- 数量范围: 宽泛暂定完整性校验，不作默认值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合法捕获交接点的活体动物 (`captured_live`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流: 捕获交接点按物种区分的活哺乳动物 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_animals`
- 数量范围: 单位输出核对
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 依据采集计算 (`calculated_from_collection`)

##### 废物流

###### 捕获死亡 (`capture_death`)

仅记录真实发生并按物种、交接点、用途和去向区分的交换。

分母与范围要求：每 kg 该过程活体输出

原始数量及计算要求：按实际计量值归于唯一过程、批次及期间；内转不可重复作最终产出。 原始采集分母类型：process_output。

- 选定流: 按去向区分的动物尸体材料 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_animals`
- 数量范围: 宽泛暂定完整性校验，不作默认值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/kg
  - 基准: 每 kg 该过程活体输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流


### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 真实交接点按物种区分的其他活哺乳动物（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `handover`, `captured_live` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`handover`, `captured_live`

必需产品实例限定项：学名；个体数/类别；存活状态；称重方法；路线；来源；保护状态；许可；司法辖区；真实交接点；期间

- 选定流：真实交接点按物种区分的其他活哺乳动物（实际生产者交付关联）
- 流属性 / 单位：质量 / kg
- 数量规则：使用与关联来源行核对的同批实测合格数量，仅对声明参考流归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特异（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reference_handover`

- 数量范围：归一化后的确切身份核对，不是生产产率默认值
  - 范围角色：质量检查边界（`qa_guardrail`）
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - 基准：声明参考数量；输入与输出为同一交付台账中的同一实际合格产品
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 真实交接点按物种区分的其他活哺乳动物 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`handover`, `captured_live`

必需产品实例限定项：学名；个体数/类别；存活状态；称重方法；路线；来源；保护状态；许可；司法辖区；真实交接点；期间

- 选定流：真实交接点按物种区分的其他活哺乳动物
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特异（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reference_handover`

- 数量范围：归一化后的确切身份核对，不是生产产率默认值
  - 范围角色：质量检查边界（`qa_guardrail`）
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - 基准：声明参考数量；输入与输出为同一交付台账中的同一实际合格产品
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### 废物流

##### 基本流

## 7. 分配和联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_outputs` | 圈养产出集合 | 仅枚举真实独立产品及交接。先细分可分过程；剩余共同负担按有凭证交接经济价值分摊，披露价格、期间和质量分摊敏感性。不作假想抵扣。 |  |
| `allocation_capture` | 捕获活动 | 实际活动负担归于合法转移的预期产出；放归非销售，死亡按真实处置路线处理。 |  |
| `allocation_periods` | 群体和更新 | 投入及更新存栏归于受益期间，核对期初期末；内部动物转移的负担只记一次。 |  |
| `allocation_assets` | 共用围舍及设备 | 按实录服务时间/能力在使用过程及期间分摊；不得重复。 |  |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | managed; selection; capture | 活体存栏、交接、死亡 | 动物台账 | species; ID; count; mass; origin; law/permit; status; gate; date; death; release | 称重及保管/健康记录；原始汇总要求：唯一事件汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; head | 每事件 | 全群体/活动 | 场址/活动 | 每参考流 | 衡器校准、许可、兽医及交接记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_inputs` | managed; capture | 饲料、水、能源、材料 | 仪表/发票台账 | identity; carrier; amount; period; node; stock change | 发票、仪表及存货；原始汇总要求： 按 calc_feed_supply_and_intake 区分承担生产负担的饲料投入、实际采食量及损失；保留原生库存及期间记录，可归属量对合格最终产出归一化一次。 | kg; MJ | 每次收货/计量期 | 全周期/活动 | 场址 | 每参考流 | 发票和校准；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_assets` | managed; selection; capture | 共用资产 | 服务记录 | asset; node; service hours/capacity; period; burden | 围舍/设备记录；原始汇总要求：按实际使用仅一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | h | 每服务期 | 完整资产窗口 | 场址/活动 | 每参考流 | 资产及维护记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_outputs` | managed | 其他真实预期产出 | 交接记录 | identity; quantity; recipient; price; legal basis; date | 真实交接单；原始汇总要求：按产品及期间。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次交接 | 全群体 | 场址 | 每参考流 | 销售/交接单；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |
| `cp_pathway_emissions` | `managed` | 路径专属气体及粪污氮/碳 | 动物、饲料、粪污、田间及方法台账 | 物种/类别；动物日；采食/干物质/消化率；挥发性固体；粪污氮/铵态氮；系统份额；气候；贮存时间；肥料氮；放牧；挥发/淋溶；甲烷回收；因子来源/单位；最终合格产出 ；收集粪污湿质量；干物质；去向| 按节点及期间采集一手活动数据，证明参数适用性，保留各路径计算表及链接的处理/牧地数据集  保留原始总量，可归属数量仅对实测最终合格参考产出归一化一次。| animal-day；kg DM；kg VS；kg N；kg CH4；kg N2O；kg NH3 | 各运行期间及管理变化时 | 完整所代表群体与服务期间 | 仅实际运行节点 | 每参考流 | 计量/分析记录、氮级联、方法与因子证据、防重复台账 |
| `cp_feed_supply_and_intake` | `managed` | 饲料投入、采食及损失 | 库存、收货、发料及损失台账 | 饲料身份/来源；群体/阶段；期间；期初/期末库存；收货；自产供给；未用退回/转出；未食用/变质质量及去向；原物/干物质；实际采食量；负担归属；合格最终产出 | 按 calc_feed_supply_and_intake 核对匹配的库存、称重、日粮/采草估算及处置记录。保留原始总量及阶段分母，生产与处理负担各归属一次，再对合格最终产出归一化。 | kg as-fed; kg DM | 每次发料及期间结算 | 完整所代表群体/期间 | 实际运行饲喂节点 | 每参考流 | 库存及供应商记录；水分证据；损失及无重复核算核对 |
| `cp_manure_n2o_coverage` | `managed` | 粪污/土壤直接及间接 N2O 覆盖 | 分路径氮台账及方法计算表 | 物种/类别；期间；排泄氮；阶段库存/转移；系统份额；挥发 NH3-N/NOx-N；淋溶/径流氮；施用/放牧氮；因子来源、单位及适用性；直接/间接分项；接受介质；已链接过程及归属卡；合格最终产出 | 按 calc_manure_n2o_coverage 保留原始阶段氮及分项计算，并匹配实际作业与现有粪污协议。记录缺证据或不适用路径及覆盖边界，可归属 N2O 归一化一次。 | kg N; kg N2O | 每个报告期间及管理变化 | 完整所代表管理期间 | 实际运行及明确链接节点 | 每参考流 | 氮平衡、因子单位/适用性、分项到卡片及无重复核算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference` | 合格活体产出 | 实测合格活重汇总 / 1 kg；保留个体数、物种及唯一交接点。 | `cp_animals` | 参考质量和数量 |  |
| `calc_balance` | 动物事件 | 按物种、类别、期间核对期初、出生、购入、捕获、转出、放归、死亡和期末；生长质量来自实测，不假设守恒。 | `cp_animals` | 平衡台账 |  |
| `calc_inputs` | 供应品 | 归于过程/期间的净计量供应 / 合格活重；不混合圈养和捕获路线。 | `cp_inputs`; `cp_animals` | 各卡强度 |  |
| `calc_shared` | 共用资产 | 资产负担 × 实测过程/期间份额；份额合计为一或披露闲置能力。 | `cp_assets` | 无重复负担 |  |
| `calc_allocation` | 多产出 | 细分后按有凭证交接经济价值分摊不可分负担，并作质量敏感性分析。 | `cp_outputs`; `cp_animals` | 产出负担 |  |
| `calc_pathway_emissions` | `managed` | 采用物种和管理方式相容的方法，保留分路径总量。N2O-N 乘 44/28 转为 N2O，NH3-N 乘 17/14 转为 NH3，且恰换算一次；已为分子质量者不得重算。依据有记录的可用碳/甲烷潜力平衡检查甲烷，并按各阶段可用氮核对氮损失。已挥发氮引致的间接形成是下游转化，不是源阶段第二次氮损失。归属及归一化只做一次，不重复计入链接处理或去向模型中的排放。  物理筛查采用分配前、同一原始期间的数量：CH4 质量 × 12/16 不得超过所代表路径的可用碳；源阶段 NH3 质量 × 14/17、直接 N2O 质量 × 28/44 与其他源阶段氮损失之和，在核对库存及转移后不得超过该阶段可用氮。各项间接 N2O-N 计算以有记录的挥发氮或淋溶氮前体为上限，不再从源台账扣除该下游转化。这些是守恒检查，不是排放因子或经验单位产品区间。| `cp_pathway_emissions` | 每最终参考流的指定化合物 kg | `review-ipcc-livestock-2019`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `feed` | 所代表作业使用的饲料投入 = 期初饲料库存 + 收货 + 进入本作业的自产饲料 - 期末饲料库存 - 有记录的未用退回或转出。该投入保留边界内变质、拒食及被丢弃的剩余料。实际采食量 = 该投入 - 实测未食用/丢弃损失，并匹配水分/干物质与期间；采食量仅用于营养及代谢计算。期初库存承接原有负担，不是再次采购。追溯未用退回或转出的物料及负担去向，不自动给予替代抵扣。同一饲料的生产负担由采购饲料数据集或已建模自产作物/采集节点承担一次，不得两者并计。实际废料处理及粪污贡献计一次，不再次添加饲料生产负担。 | `cp_feed_supply_and_intake` | 同一原物/干物质基准下分开的饲料投入、采食及损失数量 | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `review_managed_direct_n2o`; `review_managed_indirect_n2o` | 按真实粪污阶段，采用有记录的物种/系统活动量及因子基准，分别计算直接 N2O、挥发/沉降引致间接 N2O，以及适用的淋溶/径流引致间接 N2O。N2O-N 乘 44/28 恰换算一次为分子态 N2O；已为分子质量的不得再次换算。保留分项计算表。现有 N2O 卡同时覆盖直接与间接排放时，填报其不重叠总和；已有直接/间接独立卡时，每个分项只归入对应卡，不再另报总和。放牧沉积及田间施用采用管理土壤方法，不套用粪污贮存因子。明确前景与已链接处理/牧地数据的核算责任；粪污转出不消除此前排放，已覆盖的下游排放不得重复。氮级联核对库存、转移及此前氮损失；间接 N2O 是前体的下游转化，不再次视为源阶段氮损失。可归属分子质量对合格参考产出归一化一次。记录不适用依据；路径数据缺失不等于零。 | `cp_manure_n2o_coverage` | 按路径及现有归属卡分开的 kg 分子态 N2O | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_law` | 每批 | 确切日期和司法辖区的物种、来源、保育状态、许可及保管链须成立。 | 分类、许可及保管凭证 |
| `dq_gate` | 活体产出 | 存活状态、数量、实测质量、状况及真实交接点须核对。 | 衡器、交接及兽医记录 |
| `dq_completeness` | 两路线 | 核对投入、产出、死亡/放归、群体及活动。 | 台账、发票、差异记录 |
| `dq_periods` | 共用及跨期 | 资产/群体负担仅一次关联真实服务期间。 | 资产和群体台账 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_classification` | 全部 | 拒绝物种不明、剩余类别误分、无来源凭证或法律/保护状态未查明。 | `un-cpc-2025`; `woah-wildlife-trade-2021` |
| `validate_route` | 每批 | 恰好一条圈养或合法捕获来源；捕获不列农场存栏，圈养不冒称野外捕获。 |  |
| `validate_live` | 最终产出 | 质量、数量、存活状态和交接点核对；死亡/放归及交接后动物不得充作产出。 |  |
| `validate_allocation` | 产出/期间 | 每个联产品有真实交接；资产/期间份额及内转不重复。 |  |
| `validate_uuid` | 具体交换 | 最终交换须核实物种、角色、交接点、属性及单位的精确流；未解析语义卡不是可执行 UUID。 |  |
| `v_pathway_emission_coverage` | `managed` | 要求路径覆盖台账，包含生物学适用时的肠道 CH4、粪污 CH4、直接/间接 N2O、NH3 及相关田间排放。每条路径须有实测/计算量、覆盖匹配的明确链接过程，或有依据的不适用结论；缺数据不得记零。捕获前的野生生活不纳入受管理饲养，实际受管理留置须另行评估，并保留物种专属证据。 | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | 实际运行节点及链接服务 | 适用时记录现场燃料燃烧及制冷剂泄漏的核算责任：须为量化前景排放，或明确覆盖它们的具名链接过程，不能仅凭燃料供应或电力生产投入视为已包含。特殊类群生物及残余物排放须依物种/路线证据评估，不套通用畜牧因子。标明尚未落实的路径，不宣称清单完整；记录有依据的不存在结论并防止上/下游重复核算。 | |
| `v_feed_supply_intake_separation` | 全部饲料投入 | 拒绝扣除边界内拒食、变质或丢弃剩余料且未保留其生产负担的上游饲料清单。按 calc_feed_supply_and_intake 核对投入、采食、库存、转移及损失去向。不得把采食量当作饲料投入，不得假设自产饲料零负担或自动给予替代产品抵扣。 | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | 适用粪污及管理土壤氮路径 | 须明确直接及间接路径覆盖、阶段氮平衡及分子质量换算。按 calc_manure_n2o_coverage，将各分项归入现有 N2O 卡或明确覆盖的已链接过程一次。间接路径证据缺失时不得宣称完整；不得默认零值或把汇总值与分项重复并计。 | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 单一合法物种/类别、路线及活体交接点的前景包 |
| downstream_use | 兼容的 secondary_dataset 或 background_dataset |
| allowed_use | 精确身份审核后用于同物种、路线、地区、法律、类别、期间及交接点 |
| excluded_use | 通用哺乳动物混合、无许可捕获、无授权受保护物种交易、屠宰、肉/皮毛或交接后用途 |
| required_metadata | 物种、数量/质量、路线、保护/法律状态、许可、场址、群体/活动、交接点、产出、期间及 UUID 状态 |
| required_quality_disclosure | 称重、动物平衡、福利/法律链、分摊、缺失数据、共用服务及绑定空缺 |
| update_trigger | 物种、法律状态、路线、交接点、清单、分摊或平台身份改变 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | [联合国 CPC 3.0 解释性说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 剩余类别及排除 |
| `woah-wildlife-trade-2021` | official_guidance | [WOAH 野生动物贸易审查](https://www.woah.org/app/uploads/2022/08/a-oie-review-wildlife-trade-march2021.pdf) | 法律、福利和可追溯风险问题 |
| `review-ipcc-livestock-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | 物种与路径适用性；CH4 和 N2O 方法选择，不作为通用排放因子 |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 氮流方法；采用参数前核实实际物种、管理方式及地域适用性 |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | 管理土壤直接及间接氮路径与边界核对 |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | 饲料投入、采食及废料负担的区分，不提供动物参数。将该核算原则用于声明类群是本 PCR 的方法学选择；不移植猪的日粮或排放因子。 |
