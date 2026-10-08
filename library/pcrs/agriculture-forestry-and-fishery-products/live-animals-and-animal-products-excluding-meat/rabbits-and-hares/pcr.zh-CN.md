---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.rabbits-and-hares
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 兔与野兔

## 1. 范围与适用性

本 PCR 涵盖受管理养殖的活家兔（*Oryctolagus cuniculus*）及在可证明合法活体捕获后交付的活野兔（*Lepus* 属）。排除死体、肉、毛皮、兽皮、屠宰和下游用途。不能默认野兔捕获合法或具有代表性：须声明辖区、许可证、福利控制、捕获批次及真实交付门；缺乏此类证据不得声称该路线。不能把野兔当作养殖场产品建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.rabbits-and-hares` |
| classification_refs | CPC 3.0 `02191`，兔与野兔 |
| covered_products | 在真实合法交付门的活家兔与活野兔 |
| excluded_products | 死体、肉、毛皮、兽皮、屠宰品、捕获服务及下游用途 |
| representative_product | 按实测活重计量并披露物种及交付门的活兔或野兔 |
| production_route | 受管理家兔繁殖与育成后进行农场活体筛选；笼养与地面/垫料养殖是受管理生物生产母路线的变体，垫料、清洗、能源和粪污收集不同。另有独立的合法野兔活体捕获路线，仅含短时处理与捕获交付，绝非受管理生产的子路线。每批次农场与捕获路线互斥；农场不同期间可共存多种圈养方式。 |
| market_state | 活体、未加工；声明物种、类别、数量、状况及交付门 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 对象 | 在合法养殖农场或捕获交付门的活兔或野兔 |
| 数量 | 1 kg 实测活重，并报告只数与类别特定体重 |
| 品质 | 活体、未加工且物种明确；披露类别及状况 |
| 时间或周期 | 声明的繁殖/育成批次或合法捕获行动及真实服务期间 |
| reference_flow_link | `reference_product_handover` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 农场或合法捕获交付门的活兔或野兔 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必要限定条件 | 物种；家养/野生；日龄/类别；只数；状况；实测活重；路线；真实交付门；捕获辖区及许可；期间 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

已核实的平台产品流仅为农场门生产组合，不能代表跨农场或捕获门的宽口径参考流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 所需属性 | 所需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 最终活体产出与引入动物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 整批称重或记录类别特定抽样体重并核对只数；不得假定每只固定质量。 |
| `animal_ledger` | 所有动物批次 | Count | 只 | 按物种、类别及期间核对期初、出生或捕获、购入、转移、释放、死亡及交付。 |
| `period_basis` | 种兔、更新与资产 | Time | 天或周期 | 将妊娠、哺乳、断奶、育成、更新和共享服务关联受益期间；捕获使用真实服务天数。 |
| `manure_basis` | 收集的粪污 | Mass | kg | 按一致的收到时或含水修正基准报告外运产品和废物；沉积物不是外运产品。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 家兔期初种兔或附来源/既有负担的外购幼兔，或有记录的合法捕获行动前状态 |
| starting_condition_role | 受管理存栏或合法捕获情境；外购兔不是零负担 |
| product_classification_scope | CPC 3.0 `02191` 活兔与野兔 |
| recursive_input_rule | 外购同类兔仅一次连接前序交付门数据集；内部断奶兔转移不是第二个最终产品。不得给捕获前野兔虚构农场生产。 |
| upstream_dataset_requirement | 按真实供应者、属性、交付门和地理范围匹配外购动物、饲料、垫料、水、能源及服务。 |
| disclosure | 物种及家养/野生状态、圈养方式或捕获许可/地点、交付门、批次/行动、共享资产、产品及死亡/粪污去向。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_live` | 两条路线 | 截止于真实交付门的活体；排除屠宰、肉、兽皮、毛皮和下游用途。 | `un-cpc-2025` |
| `boundary_farm` | 受管理家兔 | 仅实际运行时纳入种兔/育成存栏、饲料、水、圈舍、健康和粪污；外购保留上游负担。 | `fao-rabbit-production`; `fao-rabbit-housing` |
| `boundary_housing` | 受管理圈养变体 | 兔繁殖/育成是生物生产母路线。笼养与地面/垫料方式改变垫料、清洗、圈舍能源及粪污管理；记录真实份额而不设通用产率。 | `fao-rabbit-housing` |
| `boundary_capture` | 活野兔 | 仅纳入有证据的合法活体诱捕、福利处理和真实捕获交付；不虚构种兔、饲料或农场门。缺少合法证据则路线不合格。 | `vic-hare-control` |
| `boundary_shared` | 共享资产 | 将兔舍、饲喂器、供水系统、陷阱和车辆在使用节点及服务期间归属一次；避免重复转移。 | `fao-rabbit-housing`; `vic-hare-control` |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量基准 |
| --- | --- | --- | --- | --- | --- |
| `breeder` | 维持家兔种群并产生活幼兔 | conditional | 实际运行繁殖农场 | 生物生产、妊娠、哺乳、存活和更新 | 每 kg 离开种兔阶段的活断奶兔 |
| `rearing` | 将家兔育成至生产者类别 | conditional | 实际育成；否则外购动物保留上游负担 | 生物生长，具有圈养方式特定投入和粪污 | 每 kg 离开育成的活兔 |
| `farm_handover` | 筛选、称重并交付活养殖兔 | conditional | 家兔农场路线 | 独立收集/健康筛查及真实农场门 | 每 kg 合格农场门活兔 |
| `hare_capture` | 合法捕获并交付活野兔 | conditional | 已核实许可和实际活体捕获路线 | 独立捕获节点及真实捕获门 | 每 kg 捕获交付处的合格活野兔 |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

每只动物的农场与捕获路线互斥。笼养和地面/垫料方式可按群体/期间共存。捕获不是受管理生产的变体。活体收集独立于生物生长，因为验收、称重和交付发生在生产之后；损失或释放不是预期活体产出。按期间索引繁殖、断奶、育成、更新、资产服务和捕获事件。

### 过程：维持家兔种群并产生活幼兔 (`breeder`)

#### 输入

##### 产品流

###### 引入的种兔 (`breeder_stock`)

外购种兔携带上游负担进入；自有期初种兔单独申报。

分母与范围要求：每 kg 离开种兔阶段的活断奶兔

原始数量及计算要求：计量引入活体质量 原始采集分母类型：process_output。

- 选定流：活种兔（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 离开种兔阶段的活断奶兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种兔饲料与粗饲料 (`breeder_feed`)

记录供应饲料、粗饲料和库存变动；采食牧草不算外购饲料。

分母与范围要求：每 kg 离开种兔阶段的活断奶兔

原始数量及计算要求：供应量扣除库存变动与实测损失 原始采集分母类型：process_output。

- 选定流：兔饲料与粗饲料（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 离开种兔阶段的活断奶兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种兔供应水 (`breeder_water`)

按实际用途区分饮水与清洗用水；水组待确定。

分母与范围要求：每 kg 离开种兔阶段的活断奶兔

原始数量及计算要求：计量或记录供水 原始采集分母类型：process_output。

- 选定流：供应水（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg
  - 基准：每 kg 离开种兔阶段的活断奶兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种兔能源供应 (`breeder_energy`)

按实际载能形式和用途记录供暖、通风、照明及泵送。

分母与范围要求：每 kg 离开种兔阶段的活断奶兔

原始数量及计算要求：按载能形式计量或票据记录能源 原始采集分母类型：process_output。

- 选定流：能源供应（UUID 未解析）
- 流属性/单位：Energy / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ/kg
  - 基准：每 kg 离开种兔阶段的活断奶兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种兔垫料与护理材料 (`breeder_materials`)

按实际物质分别记录路线相关垫料和兽医用品。

分母与范围要求：每 kg 离开种兔阶段的活断奶兔

原始数量及计算要求：按物质身份计量供应量 原始采集分母类型：process_output。

- 选定流：垫料与兽医用品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 离开种兔阶段的活断奶兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移或出售的活断奶兔 (`weanlings`)

核对活体数量与质量；内部转移不是第二次最终销售。

分母与范围要求：每 kg 离开种兔阶段的活断奶兔

原始数量及计算要求：计量活断奶兔质量 原始采集分母类型：process_output。

- 选定流：活断奶兔（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：活体产出平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 离开种兔阶段的活断奶兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集计算（`calculated_from_collection`）

###### 活体淘汰种兔 (`breeder_culls`)

仅实际活体出售时才是独立产品；否则按真实处置状态分类。

分母与范围要求：每 kg 离开种兔阶段的活断奶兔

原始数量及计算要求：计量售出活体质量 原始采集分母类型：process_output。

- 选定流：活体淘汰种兔（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 离开种兔阶段的活断奶兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外运可利用种兔粪肥 (`breeder_manure_product`)

仅有可利用交付凭证时列作产品；放牧沉积和处置物不属于此项。

分母与范围要求：每 kg 离开种兔阶段的活断奶兔

原始数量及计算要求：在披露含水基准下称量外运质量 原始采集分母类型：process_output。

- 选定流：可利用兔粪肥（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 离开种兔阶段的活断奶兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 种兔死亡及处置物 (`breeder_waste`)

按真实身份和去向记录死亡动物及处置垫料、粪便。

分母与范围要求：每 kg 离开种兔阶段的活断奶兔

原始数量及计算要求：按身份与去向计量废物流质量 原始采集分母类型：process_output。

- 选定流：种兔死亡及处置物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 离开种兔阶段的活断奶兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 种兔粪污甲烷排入空气 (`breeder_manure_ch4`)

根据实际储存和处理核算粪污途径甲烷，不采用通用单兔系数。

分母与范围要求：每 kg 离开种兔阶段的活断奶兔

原始数量及计算要求：按场址粪污途径计算 原始采集分母类型：process_output。

- 选定流：生物源甲烷，排入空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 离开种兔阶段的活断奶兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种兔粪污氧化亚氮排入空气 (`breeder_manure_n2o`)

仅对观察到的储存/处理途径和氮活动计算粪污管理直接 N2O；不得对捕获野兔套用农场因子。

分母与范围要求：每 kg 离开种兔阶段的活断奶兔

原始数量及计算要求：根据实测氮量和途径计算粪污管理 N2O 原始采集分母类型：process_output。

- 选定流：氧化亚氮，排入空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定 N2O 调查筛查，非排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活断奶兔
  - 基准：每 kg 离开种兔阶段的活断奶兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：将家兔育成至生产者类别 (`rearing`)

#### 输入

##### 产品流

###### 引入的活幼兔 (`rearing_stock`)

对转入或外购幼兔计量一次并承接其既有负担。

分母与范围要求：每 kg 离开育成的活兔

原始数量及计算要求：接收活体质量 原始采集分母类型：process_output。

- 选定流：活幼兔（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 离开育成的活兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 育成饲料 (`rearing_feed`)

按群批次计量供应日粮及损失，不预设料肉比。

分母与范围要求：每 kg 离开育成的活兔

原始数量及计算要求：供应质量扣除库存变动及损失 原始采集分母类型：process_output。

- 选定流：育成兔饲料（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 离开育成的活兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 育成供应水 (`rearing_water`)

按真实用途拆分饮水和清洗，合并卡暂不定组。

分母与范围要求：每 kg 离开育成的活兔

原始数量及计算要求：计量供应水 原始采集分母类型：process_output。

- 选定流：供应水（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg
  - 基准：每 kg 离开育成的活兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 育成能源供应 (`rearing_energy`)

记录通风、温控和照明的真实能源消耗。

分母与范围要求：每 kg 离开育成的活兔

原始数量及计算要求：计量或票据记录能源 原始采集分母类型：process_output。

- 选定流：能源供应（UUID 未解析）
- 流属性/单位：Energy / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ/kg
  - 基准：每 kg 离开育成的活兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 育成垫料与护理材料 (`rearing_materials`)

针对实际圈养方式分别记录垫料与护理材料。

分母与范围要求：每 kg 离开育成的活兔

原始数量及计算要求：计量供应材料 原始采集分母类型：process_output。

- 选定流：垫料与兽医用品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 离开育成的活兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 活育成兔 (`reared_rabbits`)

将合格活体转入最终交付，并核对数量及质量。

分母与范围要求：每 kg 离开育成的活兔

原始数量及计算要求：计量转出活体质量 原始采集分母类型：process_output。

- 选定流：活育成兔（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：活体产出平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 离开育成的活兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集计算（`calculated_from_collection`）

###### 外运可利用育成兔粪肥 (`rearing_manure_product`)

仅有独立利用接收方和实测质量时列为产品。

分母与范围要求：每 kg 离开育成的活兔

原始数量及计算要求：在披露含水基准下称量外运质量 原始采集分母类型：process_output。

- 选定流：可利用兔粪肥（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 离开育成的活兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 育成死亡及处置物 (`rearing_waste`)

死亡动物及处置垫料、粪便按真实废物去向记录。

分母与范围要求：每 kg 离开育成的活兔

原始数量及计算要求：按身份及去向计量废物质量 原始采集分母类型：process_output。

- 选定流：育成死亡及处置物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 离开育成的活兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 育成粪污甲烷排入空气 (`rearing_manure_ch4`)

根据观察到的育成粪污途径及储存期计算。

分母与范围要求：每 kg 离开育成的活兔

原始数量及计算要求：按场址粪污途径计算 原始采集分母类型：process_output。

- 选定流：生物源甲烷，排入空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 离开育成的活兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 育成粪污氧化亚氮排入空气 (`rearing_manure_n2o`)

仅对观察到的储存/处理途径和氮活动计算粪污管理直接 N2O；不得对捕获野兔套用农场因子。

分母与范围要求：每 kg 离开育成的活兔

原始数量及计算要求：根据实测氮量和途径计算粪污管理 N2O 原始采集分母类型：process_output。

- 选定流：氧化亚氮，排入空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定 N2O 调查筛查，非排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活兔
  - 基准：每 kg 离开育成的活兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：筛选、称重并交付活养殖兔 (`farm_handover`)

#### 输入

##### 产品流

###### 进入筛选的活养殖兔 (`handover_stock`)

养殖阶段活体及其既有负担仅进入一次。

分母与范围要求：每 kg 合格农场门活兔

原始数量及计算要求：计量接收活体质量 原始采集分母类型：process_output。

- 选定流：活养殖兔（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 合格农场门活兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门交付的合格活兔 (`live_handover`)

此活体未加工农场门产出符合已核实的平台产品/质量流身份。

分母与范围要求：每 kg 合格农场门活兔

原始数量及计算要求：称量合格活体质量 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：兔与野兔，农场门生产组合，活体未加工 `e501d3c2-f4f4-4fa0-9d52-ce0947f69797`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：活体产出平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 合格农场门活兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集计算（`calculated_from_collection`）

##### 废物流

###### 农场交付环节死亡物 (`handover_waste`)

仅观察到的非活体损失为废物；留场活体不合格兔仍在台账。

分母与范围要求：每 kg 合格农场门活兔

原始数量及计算要求：计量处置质量 原始采集分母类型：process_output。

- 选定流：农场交付死亡物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 合格农场门活兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：合法捕获并交付活野兔 (`hare_capture`)

#### 输入

##### 产品流

###### 捕获及短时暂养耗材 (`capture_materials`)

记录实际耗用的陷阱和福利材料；可复用设备按服务分摊，不逐次视为消耗。

分母与范围要求：每 kg 捕获交付处的合格活野兔

原始数量及计算要求：按物质计量实际耗用质量 原始采集分母类型：process_output。

- 选定流：捕获和暂养耗材（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_capture`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 捕获交付处的合格活野兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 捕获和处理能源 (`capture_energy`)

按载能形式和真实服务记录巡查陷阱及短时暂养所用燃料或电力。

分母与范围要求：每 kg 捕获交付处的合格活野兔

原始数量及计算要求：计量行动燃料和电力 原始采集分母类型：process_output。

- 选定流：能源供应（UUID 未解析）
- 流属性/单位：Energy / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_capture`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ/kg
  - 基准：每 kg 捕获交付处的合格活野兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合法捕获交付的合格活野兔 (`hare_capture_output`)

在真实获许可的捕获交付处称量活 Lepus 野兔；不附农场门 UUID。

分母与范围要求：每 kg 捕获交付处的合格活野兔

原始数量及计算要求：计量合格活体质量 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：合法捕获交付的活野兔（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_capture`
- 数量范围：活体产出平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 捕获交付处的合格活野兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集计算（`calculated_from_collection`）

##### 废物流

###### 捕获死亡与处置物 (`capture_waste`)

记录死亡野兔及处置材料；释放的活体单独入账，不作产品或废物。

分母与范围要求：每 kg 捕获交付处的合格活野兔

原始数量及计算要求：按类别计量废物质量 原始采集分母类型：process_output。

- 选定流：捕获死亡及处置物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_capture`
- 数量范围：暂定完整性筛查（非默认值）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 捕获交付处的合格活野兔
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 农场或合法捕获交付门的活兔或野兔（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `live_handover`, `hare_capture_output` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`live_handover`, `hare_capture_output`

必需产品实例限定项：物种；家养/野生；日龄/类别；只数；状况；实测活重；路线；真实交付门；捕获辖区及许可；期间

- 选定流：农场或合法捕获交付门的活兔或野兔（实际生产者交付关联）
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

###### 农场或合法捕获交付门的活兔或野兔 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`live_handover`, `hare_capture_output`

必需产品实例限定项：物种；家养/野生；日龄/类别；只数；状况；实测活重；路线；真实交付门；捕获辖区及许可；期间

- 选定流：农场或合法捕获交付门的活兔或野兔
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

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 所有节点 | 首先将实测投入、排放及损失直接归属种兔、育成、农场交付或合法捕获。野兔不承接农场繁殖负担。 | `fao-rabbit-production`; `vic-hare-control` |
| `allocation_outputs` | 断奶兔、活体淘汰兔、最终动物及可利用外运粪肥 | 仅在真实交付、质量和接收方已记录时枚举独立预期产出。内部转移不是第二次最终产出；死亡、处置物及释放野兔不是可售联产品。不可细分的农场负担优先采用兔日或实测饲料/服务因果关系；不适用时采用同期经济价值并披露价格及敏感性。 | `fao-rabbit-production`; `fao-rabbit-housing` |
| `allocation_periods` | 繁殖、育成和捕获 | 按记录期间将种兔维持、妊娠、哺乳、断奶、更新和圈舍服务归属受益群体。幼兔既有负担仅一次转入育成。捕获设备/处理仅归属实际行动。 | `fao-rabbit-production`; `vic-hare-control` |
| `allocation_shared` | 兔舍、饲喂器、供水系统、陷阱和车辆 | 指明所有使用节点及期间；按仪表、占用兔日、服务小时或行程仅一次分配实测负担。记录份额之和为一，不在内部转移时重复计费。 | `fao-rabbit-housing`; `vic-hare-control` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | `breeder`, `rearing`, `farm_handover` | 活体引入、转移、淘汰及最终交付 | 存栏/称重台账 | 物种、类别、只数、质量、来源、去向、日期 | 批次计数及校准秤或有记录的类别抽样；原始汇总要求：期初＋出生＋购入－死亡－销售－转移＝期末；按合格活重归一。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 只；kg | 每次事件 | 完整群体 | 实际农场 | 每参考流 | 称重单、存栏台账、秤校准；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed` | `breeder`, `rearing` | 饲料和粗饲料 | 采购/日粮台账 | 物质、质量、库存变化、损失、群体 | 交货单及日粮记录；原始汇总要求：供应减库存变化及记录损失，按群体汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 批次及周期 | 运行期间 | 兔舍/牧地 | 每参考流 | 发票及饲料记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_utilities` | `breeder`, `rearing` | 水及能源 | 仪表/票据 | 水源/用途、载能形式、读数、共享使用者 | 仪表读数与用途拆分；原始汇总要求：单位换算后按实测使用一次归属。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；MJ | 仪表间隔 | 运行期间 | 所有供应接口 | 每参考流 | 仪表照片、发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_materials` | `breeder`, `rearing` | 垫料及护理 | 物料领用 | 身份、剂量、质量、动物群、日期、圈养方式 | 领用及兽医记录；原始汇总要求：按物质/群体汇总真实消耗。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次使用 | 运行期间 | 兔舍 | 每参考流 | 库存及护理记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure` | `breeder`, `rearing` | 粪污产品/排放 | 路径台账 | 收集质量、含水量、含氮量、储存、处理、外运、期间 | 称重、抽样、交付及储存记录；原始汇总要求：区分利用产品、处置和沉积；按途径计算排放。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；天 | 清运/周期 | 运行期间 | 粪污系统 | 每参考流 | 称重单、氮分析、接收方及方法输入；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_waste` | `breeder`, `rearing`, `farm_handover` | 死亡/处置 | 损失台账 | 物种、只数、质量、材料、去向、日期 | 计数称重或有依据估计；原始汇总要求：按废物身份/去向汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 只；kg | 事件 | 完整群体 | 运行节点 | 每参考流 | 处置凭证、死亡记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_capture` | `hare_capture` | 许可、动物、材料、能源及损失 | 许可/行动台账 | 辖区、许可、陷阱、巡查、物种、捕获/释放/死亡/交付数量和质量、材料、能源、去向 | 法律文件核查及事件/仪表记录；原始汇总要求：捕获＝释放＋死亡＋交付＋暂养；共享设备按服务归属。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 只；kg；MJ | 事件 | 完整合法行动 | 获准地点/交付门 | 每参考流 | 许可、福利记录、秤、行程/燃料记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference` | 两种最终产出 | 实测合格活体 kg / 同一活体 kg＝1 kg 参考流；按类别披露每 kg 只数。 | 合格 kg、只数、物种、类别 | 1 kg 活体及只/kg | `un-cpc-2025` |
| `calc_ledger` | 动物阶段 | 核对存栏和事件，不重复计内部转移。 | 期初、出生/捕获、购入、释放、死亡、转移、出售、期末 | 数量及质量平衡 | `fao-rabbit-production`; `vic-hare-control` |
| `calc_manure_ch4` | 农场粪污 | 用观察的粪污、储存/处理和适用方法计算，不设通用兔排放系数。 | 实测粪污、路线活动及方法参数 | 各阶段 kg 生物源 CH4 | `ipcc-livestock-2019` |
| `calc_manure_n2o` | 农场粪污 | 根据实测粪污氮量、观察到的储存/处理及途径特定直接 N2O 方法计算；不得套用于捕获野兔。 | 粪污氮、管理份额、方法参数 | 各阶段 kg 直接 N2O | `ipcc-livestock-2019` |
| `calc_shared` | 共享资产 | 将一项实测负担在记录的使用者/期间分配，份额合计一。 | 服务、兔日/小时/行程、期间 | 节点/群体负担 | `fao-rabbit-housing`; `vic-hare-control` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 最终活体 | 区分 Oryctolagus 和 Lepus、类别、活体状态、质量、只数及真实交付门；不使用肉/屠宰身份。 | 物种台账及校准称重 |
| `dq_route` | 农场/捕获 | 记录圈养方式份额；野兔捕获需要辖区许可及福利/运输证据。 | 饲养记录或许可/行动台账 |
| `dq_period` | 跨期农场/资产 | 标注繁殖、育成、更新及资产服务日期；避免重复转移/资产负担。 | 群体/资产台账 |
| `dq_inventory` | 所有流 | 核对动物、饲料、水、物料、粪污及死亡平衡；超出暂定筛查范围时调查，不把范围当默认值。 | 仪表、库存和转移记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_species_gate` | 参考/最终产出 | 要求在真实农场或合法捕获门记录物种特定活重/只数；捕获产出不得使用农场门 UUID，屠宰/肉类记录应拒绝。 | `un-cpc-2025`; `vic-hare-control` |
| `validate_capture` | 野兔路线 | 要求真实许可、辖区、捕获数量、福利/处理及活体交付；缺少合法证据则排除捕获路线，不能用农场生产替代。 | `vic-hare-control` |
| `validate_route` | 受管理家兔 | 按群体核查笼养/地面、垫料、公用工程及粪污；变体可共存，但捕获不是受管理母路线的变体。 | `fao-rabbit-housing` |
| `validate_balance` | 产出/损失 | 按不同交付门核对断奶兔、活淘汰种兔、最终活体、死亡、释放野兔、粪肥产品及处置。 | `fao-rabbit-production`; `vic-hare-control` |
| `validate_attribution` | 共享/期间负担 | 核查产出集合、交付、分配方法、阶段关联以及兔舍、供水、陷阱和车辆仅一次归属。 | `fao-rabbit-production`; `fao-rabbit-housing` |
| `validate_ranges` | 所有清单卡 | 暂定零至上限范围仅是 QA 调查筛查，不是默认数量或排放因子；以实测/审查值替代。 | `fao-rabbit-production` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明养殖兔或合法野兔捕获路线的前景活体数据包 |
| downstream_use | 身份及质量审查后用于过程或生命周期模型的次级/背景数据集 |
| allowed_use | 仅在声明物种、交付门及合格路线的活兔/野兔 |
| excluded_use | 肉、毛皮、兽皮、屠宰、未经许可捕获、把野兔重标为农场产品及交付后服务 |
| required_metadata | 物种、家养/野生、类别、只数、质量、状况、地理、路线、交付门、日期、圈养/许可、分配及粪污去向 |
| required_quality_disclosure | 测量/抽样、覆盖、遗漏流、暂定筛查、UUID 缺口、法律证据、分配/敏感性 |
| update_trigger | 法律状态、路线、圈养、交付门、动物状态、流身份、排放方法或观察记录变化 |

## 11. 数据来源

| 来源 ID | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-2025` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 活兔与野兔 CPC 范围 |
| `fao-rabbit-production` | `extension_guidance` | https://www.fao.org/4/x5082e/X5082E00.htm | 家兔繁殖、育成和健康 |
| `fao-rabbit-housing` | `extension_guidance` | https://www.fao.org/4/X5082E/X5082E0f.htm | 圈养、清洗及粪污路线 |
| `vic-hare-control` | `official_guidance` | https://agriculture.vic.gov.au/biosecurity/pest-animals/invasive-animal-management/integrated-hare-control | 捕获可能性及辖区特定福利，并非普遍许可 |
| `ipcc-livestock-2019` | `method_factor` | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 粪污排放方法；不设通用兔系数 |
