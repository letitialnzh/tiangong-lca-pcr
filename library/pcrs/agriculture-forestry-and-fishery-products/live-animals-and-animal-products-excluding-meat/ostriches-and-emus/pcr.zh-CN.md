---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.ostriches-and-emus
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鸵鸟、鸸鹋与美洲鸵

## 1. 范围与适用性

涵盖活体鸵鸟、鸸鹋和美洲鸵（*Rhea* 属）的种鸟场、孵化场或育成农场生产者交接。CPC 简称虽为“Ostriches and emus”，官方 02193 注释还明确包含美洲鸵。只涵盖活体未加工鸟；排除死鸟、肉、皮、油、屠宰和下游运输。羽毛、蛋、淘汰鸟或可用粪肥不能默认当作副产品，仅在实际独立交接时记录。按物种、阶段和粗放/半集约/集约路线分别采集，不套用通用日粮与产率。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.ostriches-and-emus` |
| classification_refs | CPC 3.0 `02193` (official scope includes rheas) |
| covered_products | 活体鸵鸟、鸸鹋、美洲鸵及其雏鸟和较大日龄鸟 |
| excluded_products | 死鸟、肉、皮、油、屠宰及售后服务 |
| representative_product | 实际生产者交接的 1 kg 实测活体大型走禽 |
| production_route | 管理式种鸟生产；按实际经营采蛋孵化和育成。粗放、半集约及集约模式在饲料、放牧、圈舍与粪污上有清单差异，可按阶段并存；每批只有一个最终交接门。 |
| market_state | 存活、未加工，物种与生命阶段明确 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在实际生产者交接门的活体鸵鸟、鸸鹋或美洲鸵 |
| How much | 1 kg 实测活重；同时报告头数和物种/阶段特定的每鸟质量 |
| How well | 存活且未加工；记录物种、年龄阶段、健康和验收状态 |
| How long or cycle | 声明种鸟季、孵化批次或育成群组及共享设施服务期 |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 活体鸵鸟、鸸鹋及美洲鸵 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；阶段；头数；活重；实际交接门；路线；批次；期间；去向 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

已证实的平台 UUID 仅用于农场门的未加工活鸟输出卡，不适用于跨门参考或孵化场门雏鸟。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | 参考与活体移交 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按物种和阶段实测活重并核对头数；不得用统一头数质量系数。 |
| `egg_count` | 蛋移交 | Count | egg | 按批次核对产蛋、入孵、出售、淘汰和期末。 |
| `period` | 种鸟与共享设施 | Time | day or season | 索引种鸟、孵化、育成和设施服务期间，再分配负担。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 首个实际经营节点的种鸟存栏、购入蛋/雏鸟或幼鸟；声明物种、阶段、头数、质量及继承负担 |
| starting_condition_role | 前景期初存栏或上游产品投入，不能默认零负担 |
| product_classification_scope | CPC 3.0 `02193` living ostriches, emus and rheas |
| recursive_input_rule | 购入同类活鸟只在实际前序交接门连接一次上游数据集；内部雏鸟转移不计为第二个最终产品。 |
| upstream_dataset_requirement | 按供应者、状态、属性和地域匹配购入鸟、蛋、饲料、公用工程及服务。 |
| disclosure | 披露物种、繁殖/孵化/育成节点、生产模式份额、最终门、死亡与粪污去向、共享设施期间。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_live` | 所有路线 | 止于实际生产者门的活体未加工鸵鸟、鸸鹋或美洲鸵交接；排除屠宰及后续加工。 | `un-cpc-2025`; `fao-ostrich-farming` |
| `b_nodes` | 繁殖孵化育成 | 按实际经营纳入种鸟、独立采蛋孵化与育成；分清合格活体、独立销售蛋、死亡和废弃物。 | `fao-ostrich-systems`; `aus-ratite-industry` |
| `b_shared` | 共享设施与期间 | 围栏、孵化器、供水与处理设备按记录的服务期和消费节点分配，只计一次。 | `fao-ostrich-systems` |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder` | 维持种鸟并产蛋 | conditional | 实际经营种鸟群 | 管理式生物生产 | 每 kg 最终活鸟 |
| `incubation` | 采蛋与孵化雏鸟 | conditional | 实际孵化或孵化场交接 | 独立采集与孵化 | 每 kg 最终活鸟 |
| `rearing` | 育成活体幼龄大型走禽 | conditional | 孵化或购入后育成 | 带路线差异的管理式生物生长 | 每 kg 最终活鸟 |
| `handover` | 处理与称量活鸟 | conditional | 最终农场门批次；仅孵化场最终批次止于孵化节点 | 独立活鸟处理及交接 | 每 kg 最终活鸟 |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

采蛋孵化是从种鸟生物生产到雏鸟交接的独立责任；最终活鸟收集称量独立于育成。孵化场雏鸟与农场门鸟是每批互斥最终门。粗放、半集约和集约模式可跨阶段并存，但必须记录各自饲料、放牧、圈舍、公用工程及粪污差异，不能只填写模式名称。种鸟季、蛋批、育成群组、更替、淘汰和共享设施服务期均须关联。

### 过程：维持种鸟并产蛋 (`breeder`)

#### 输入

##### 产品流

###### 接收的种鸟 (`breeders`)

购入种鸟带有上游负担；期初存栏另作为已声明的起始条件。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：按物种称量购入鸟 原始采集分母类型：reference_flow。

- 选定流：活体鸵鸟、鸸鹋或美洲鸵种鸟
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_birds`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种鸟饲料与牧草 (`breeder_feed`)

按种鸟季记录物种特定日粮与放牧份额。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：记录饲料送达量扣除库存变化与损失 原始采集分母类型：reference_flow。

- 选定流：物种特定饲料与牧草
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种鸟饮用与清洁用水 (`breeder_water`)

计量允许时区分饮用和清洁供水；降雨不是供应水。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：尽可能按用途计量实际用水 原始采集分母类型：reference_flow。

- 选定流：供应水
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采集送孵的受精蛋 (`fertile_eggs`)

送孵内部移交不是第二个最终产品。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：统计移交孵化场的蛋数 原始采集分母类型：reference_flow。

- 选定流：大型走禽受精蛋
- 流属性/单位：Count / egg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_eggs`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：egg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立出售的蛋 (`sold_eggs`)

仅独立移交的蛋才是共同产品；记录买方交接门。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：统计实际单独出售的蛋 原始采集分母类型：reference_flow。

- 选定流：可销售大型走禽蛋
- 流属性/单位：Count / egg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_eggs`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：egg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立出售的活体淘汰种鸟 (`live_culls`)

仅计入独立交接的活鸟，不包含尸体。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：在独立交接时称量活体淘汰鸟 原始采集分母类型：reference_flow。

- 选定流：活体淘汰大型走禽
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_birds`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 种鸟死亡与弃置粪污 (`breeder_losses`)

按不同处置去向分类尸体与弃置粪污。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：记录各流别处置质量 原始采集分母类型：reference_flow。

- 选定流：死鸟及弃置粪污
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 种鸟粪污向空气排放的氨 (`breeder_nh3_air`)

依据种鸟粪污氮量与实际管理路径计算；流 UUID 是身份而非因子。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：按采集的粪污氮量与适用的路径特定方法计算 原始采集分母类型：reference_flow。

- 选定流：氨排入空气 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：采蛋与孵化雏鸟 (`incubation`)

#### 输入

##### 产品流

###### 孵化接收的受精蛋 (`incubation_eggs`)

将这些蛋与种鸟或供应者记录仅匹配一次。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：按来源与物种统计且只连接一次 原始采集分母类型：reference_flow。

- 选定流：大型走禽受精蛋
- 流属性/单位：Count / egg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_eggs`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：egg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 孵化器及孵化场能源 (`incubation_energy`)

按实际批次纳入孵化、通风与照明能源。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：按批次和服务期计量能源 原始采集分母类型：reference_flow。

- 选定流：能源载体
- 流属性/单位：Energy / kWh
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kWh/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 孵化场门的活体雏鸟 (`hatchery_chicks`)

孵化场门销售是最终产品；送育成是内部移交，同一批不得两者兼算。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：称量并计数验收的活雏鸟 原始采集分母类型：reference_flow。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：活体大型走禽雏鸟（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_birds`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 失败蛋及孵化死亡 (`failed_eggs`)

将无精蛋、失败蛋和死亡雏鸟流排除出活体输出。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：按去向称量淘汰流 原始采集分母类型：reference_flow。

- 选定流：淘汰蛋与死亡雏鸟
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：育成活体幼龄大型走禽 (`rearing`)

#### 输入

##### 产品流

###### 进入育成的活体幼鸟 (`incoming_chicks`)

将继承的繁殖孵化或购入负担仅一次带入育成。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：称量并计数继承或购入的鸟 原始采集分母类型：reference_flow。

- 选定流：活体幼龄大型走禽
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_birds`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 育成饲料与牧草 (`rearing_feed`)

区分粗放、半集约与集约路线的饲料及放牧证据。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：按路线记录饲料与放牧份额 原始采集分母类型：reference_flow。

- 选定流：物种与阶段特定饲料
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 育成饮用与清洁用水 (`rearing_water`)

记录实际育成群组及用途的供水。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：按群组计量供水 原始采集分母类型：reference_flow。

- 选定流：供应水
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 圈舍与通风能源 (`rearing_energy`)

仅纳入实际经营的动力化圈舍及通风服务。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：计量实际动力服务 原始采集分母类型：reference_flow。

- 选定流：能源载体
- 流属性/单位：Energy / kWh
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kWh/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 离开育成的活鸟 (`grown_birds`)

将活鸟仅一次移至最终处理；此内部移动不是第二次销售。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：称量送交接的活鸟 原始采集分母类型：reference_flow。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：活体鸵鸟、鸸鹋与美洲鸵
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_birds`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 育成死亡与弃置粪污 (`rearing_losses`)

将死亡与弃置粪污同已转移可用产品分开。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：按流别与去向记录处置 原始采集分母类型：reference_flow。

- 选定流：死鸟及弃置粪污
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 管理粪污向空气排放的氧化亚氮 (`manure_n2o_air`)

固定 UUID 仅标识向空气排放的氧化亚氮；数量需物种与路径证据。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：按实测氮和路径特定因子计算 原始采集分母类型：reference_flow。

- 选定流：氧化亚氮排入空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 育成粪污向空气排放的氨 (`rearing_nh3_air`)

按育成粪污氮量和实际管理路径单独计算，不假设大型走禽通用因子。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：按采集的育成粪污氮量与适用路径方法计算 原始采集分母类型：reference_flow。

- 选定流：氨排入空气 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：处理与称量活鸟 (`handover`)

#### 输入

##### 产品流

###### 进入最终处理的活鸟 (`birds_for_handover`)

核对种鸟或育成节点进入的合格活鸟。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：称量从繁殖或育成接收的鸟 原始采集分母类型：reference_flow。

- 选定流：活体鸵鸟、鸸鹋与美洲鸵
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_birds`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门未加工活体大型走禽 (`farm_gate_birds`)

此固定身份要求生产农场门、存活未加工状态及 CPC 02193 范围。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：在生产农场门称量验收活鸟 原始采集分母类型：reference_flow。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：Ostriches and emus `0473347d-8c43-410f-bce0-d5d7a7041de8`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_birds`
- 数量范围：精确参考质量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 验收前死亡鸟 (`handover_mortality`)

验收前死亡鸟为废弃物，绝不属于活体参考输出。

分母与范围要求：每 kg 最终活鸟输出

原始数量及计算要求：单独记录验收前死亡鸟 原始采集分母类型：reference_flow。

- 选定流：死亡鸟
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 数量范围：暂定非负完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg live output
  - 基准：每 kg 最终活鸟输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 活体鸵鸟、鸸鹋及美洲鸵（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `hatchery_chicks`, `grown_birds`, `farm_gate_birds` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`hatchery_chicks`, `grown_birds`, `farm_gate_birds`

必需产品实例限定项：物种；阶段；头数；活重；实际交接门；路线；批次；期间；去向

- 选定流：活体鸵鸟、鸸鹋及美洲鸵（实际生产者交付关联）
- 流属性 / 单位：质量 / kg
- 数量规则：使用与关联来源行核对的同批实测合格数量，仅对声明参考流归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 数据特异性：场址特异（`site_specific`）
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

###### 活体鸵鸟、鸸鹋及美洲鸵 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`hatchery_chicks`, `grown_birds`, `farm_gate_birds`

必需产品实例限定项：物种；阶段；头数；活重；实际交接门；路线；批次；期间；去向

- 选定流：活体鸵鸟、鸸鹋及美洲鸵
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：计算值（`calculated_value`）
- 数据特异性：场址特异（`site_specific`）
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

## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_outputs` | 蛋、雏鸟、活体淘汰鸟 | 先分离可分过程；对真正联合且独立交接的输出，用实测输出质量按记录的蛋质量换算分配剩余负担，价值差异显著时报告经济分配敏感性。内部移交不算最终副产品。 | `fao-ostrich-systems` |
| `a_periods` | 种鸟与长期设施 | 将投入、更替、蛋与活鸟输出归属于实际繁殖季；共享设施按消费节点及实测服务期分配，不重复计数。 | `fao-ostrich-farming`; `aus-ratite-industry` |
| `a_residue` | 死亡、粪污与羽毛 | 死鸟、弃置粪污、失败蛋及偶发羽毛不能获得虚构副产品抵扣；可用粪肥或羽毛只有实际独立产品交接才可归属。 | `fao-ostrich-farming` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_birds` | breeder; incubation; rearing; handover | living bird movements | flock ledger | species; stage; heads; live kg; origin; final gate; dates | scale and movement log；原始汇总要求：reconcile opening, purchased, hatched, sold, culled, dead, closing。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | bird; kg | each movement | all cohorts | all nodes | 每参考流 | calibrated scale and transfer records；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed` | breeder; rearing | feed and grazing | store and pasture log | delivery; stock; loss; grazing days; species; stage | invoice and feed store；原始汇总要求：delivery minus stock delta and loss。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | monthly | full cycle | all feed users | 每参考流 | invoice and stock sheets；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_eggs` | breeder; incubation | egg disposition | egg ledger | laid; purchased; incubated; sold; rejected; closing; batch | nest and incubator log；原始汇总要求：balance egg destinations。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | egg; kg | each batch | breeder season | all nests and incubators | 每参考流 | batch records；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_utilities` | breeder; incubation; rearing | water and energy | meter log | water; power; fuel; service period; node | meter and invoice；原始汇总要求：allocate measured use once。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; kWh | monthly | full service period | all shared users | 每参考流 | meter and invoices；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_waste` | breeder; incubation; rearing; handover | waste and emissions | disposal/manure log | dead kg; rejected egg kg; manure kg; N content; management pathway | weighing, disposal tickets and N analysis；原始汇总要求：segregate product and waste; calculate pathway emission。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | batch or month | whole cohort | all nodes | 每参考流 | tickets and analysis；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_mass` | 最终活鸟 | 一个实际最终门的合格活鸟实测质量之和；各清单量除以该 kg。 | `cp_birds` | kg | `un-cpc-2025` |
| `c_balance` | 蛋与鸟群 | 蛋：期初+产出+购入=入孵+出售+淘汰+期末；鸟：期初+孵出+购入=出售+淘汰+死亡+期末。 | `cp_birds`; `cp_eggs` | balanced counts | `fao-ostrich-systems` |
| `c_air` | 粪污氧化亚氮 | 依据采集的粪污氮量及有来源、适合物种和路径的方法计算；UUID 不是排放因子。不得将 IPCC 鸵鸟数据默默套用于鸸鹋或美洲鸵。 | `cp_waste` | kg N2O | `ipcc-livestock-2019` |
| `c_nh3` | 粪污氨 | 仅在识别并披露适合物种与路径的方法后，依据采集的粪污氮量另行计算；无该方法时数量保持未解析，不以鸵鸟默认值替代。 | `cp_waste` | kg NH3 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 每批 | 记录物种、阶段、头数、活重、实际交接门与时间，孵化场门不能冒充农场门。 | `cp_birds` |
| `dq_route` | 各生产模式 | 分别保存饲料、放牧、圈舍、公用工程、死亡和粪污证据，不套用通用大型走禽产率。 | `cp_feed`; `cp_utilities`; `cp_waste` |
| `dq_allocation` | 多输出、多期间、共享设施 | 保留各独立交接、服务期与消费节点证据，杜绝重复负担。 | `cp_birds`; `cp_eggs`; `cp_utilities` |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_identity` | 参考批次 | 非活体、非鸵鸟/鸸鹋/美洲鸵、缺少质量头数或交接门，以及孵化场门使用农场门 UUID 均失败。 | `un-cpc-2025` |
| `v_balance` | 蛋与鸟群 | 按物种与阶段核对蛋/鸟平衡、内部移交与死亡去向，仅记录一个最终门。 | `fao-ostrich-systems` |
| `v_route` | 替代模式 | 验证管理式生物母路线及粗放、半集约、集约各模式的清单差异和当前证据。 | `fao-ostrich-systems`; `aus-ratite-industry` |
| `v_alloc` | 多输出期间设施 | 验证实际交接、分配方法、种鸟季和共享服务期，不得重复归属蛋、雏鸟、淘汰鸟或同一设施。 | `fao-ostrich-farming` |
| `v_range` | 所有清单卡 | 暂定 QA 范围是非负完整性筛查，不是因子或替代观测值。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 活体大型走禽前景数据包 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 声明物种、阶段、路线及实际门的活体大型走禽生产者数据集 |
| excluded_use | 屠宰、肉、皮油、通用因子、无凭据的孵化场到农场门替代 |
| required_metadata | 物种、头数、活重、阶段、路线、来源、门、期间、产出去向 |
| required_quality_disclosure | 蛋/鸟平衡、测量覆盖、死亡、粪污路径、分配及未绑定身份 |
| update_trigger | 物种边界、路线、交接门、UUID 或因子证据的实质变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 含美洲鸵的 CPC 身份 |
| `fao-ostrich-farming` | literature | https://www.fao.org/4/v6200t/v6200t02.htm | 繁殖、蛋与独立产品 |
| `fao-ostrich-systems` | literature | https://www.fao.org/4/x2370e/x2370e.pdf | 路线拓扑、孵化、育成、美洲鸵对比 |
| `aus-ratite-industry` | official_guidance | https://www.agriculture.gov.au/sites/default/files/sitecollectiondocuments/animal-plant/animal-health/livestock-movement/structure-poultry-ratite-ind.pdf | 鸸鹋及大型走禽行业 |
| `ipcc-livestock-2019` | method_factor | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 按路径选取粪污排放方法，不是通用因子 |
