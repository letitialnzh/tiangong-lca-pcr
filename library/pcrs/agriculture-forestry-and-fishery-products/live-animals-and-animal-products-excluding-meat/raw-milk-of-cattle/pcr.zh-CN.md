---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-cattle
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 牛原奶

## 1. 范围与适用性

本 PCR 用于生产奶牛农场门口交付的未加工牛原奶的前景数据包。包括泌乳牛群与后备牛、饲料和水、肠道与粪污排放、挤奶、初级过滤和验收，以及仅在农场控制下于交付前发生的冷却。温原奶和农场内冷藏原奶均可纳入，交付状态必须明确。独立收奶或冷却中心、农场门口之后的运输、巴氏杀菌、标准化、消费包装和奶制品加工不属于本边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-cattle` |
| classification_refs | CPC 3.0 `02211`, Raw milk of cattle |
| covered_products | 生产农场门口交付的温或农场冷藏未加工牛原奶 |
| excluded_products | 水牛乳、羊乳、消费乳、加工乳及下游冷却中心产品 |
| representative_product | 按交付状态计量的合格原奶 |
| production_route | 奶牛群生产→挤奶采集→初级整理→可选农场冷却；放牧与舍饲并列申报 |
| market_state | 温乳或农场冷藏原奶，申报冷却状态、温度、乳脂/蛋白或固形物与验收状态 |

放牧和舍饲路线可并存，但饲料来源、粪污路径、能源、计量和证据须按牛群与期间分层；冷却与未冷却最终交付互斥。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产农场门口交付的合格未加工牛原奶 |
| How much | 1 kg |
| How well | 申报温或农场冷藏状态、交付温度、脂肪/蛋白或固形物、验收与拒收依据 |
| How long or cycle | 申报覆盖泌乳、干奶、后备、淘汰与冷却服务的报告期 |
| reference_flow_link | `reference_product_handover` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 牛原奶，温或农场冷藏，生产农场门口 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 奶牛物种；原奶；农场门口；温或冷藏状态；温度；脂肪/蛋白或固形物；验收和拒收量；报告期 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

冷藏专属 UUID `aa8aebbb-724a-417b-8372-2dccd499ce71` 仅用于下方明确冷藏的产出卡，不代表本节同时覆盖温乳的广义参考流。

## 4. 计量与单位规则

| rule_id | 适用于 | 所需属性 | 所需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格原奶 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按农场门口实测净质量归一化至 1 kg；温乳与冷藏乳不得重复相加。 |
| `milk_composition` | 乳脂、蛋白或固形物 | Mass fraction | % or g/kg | 保留采样时点、检验方法与湿基；跨质量规格比较先按记录核对。 |
| `herd_feed_basis` | 饲料 | Mass | kg as-fed and kg dry matter | 保存水分换算，原样量与干物质量不得混用。 |
| `emission_species` | 直接排放 | Pollutant mass | kg species | 分别核算 CH4、N2O 和 NH3，并保留接收介质与因子层级。 |
| `energy_carriers` | 挤奶与冷却 | Energy or carrier quantity | kWh, MJ, L or kg | 保留载体原始单位、转换与共享电表分摊记录。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

边界始于申报期初奶牛群及外购后备牛的已承接负担，涵盖泌乳、干奶、后备牛、饲料和水、受控粪污管理、挤奶、过滤验收，以及仅在农场控制且交付前的冷却。挤奶采集是独立责任：它把牛群产乳状态变为实测初收集乳；初级整理再把该原始状态变为验收状态；可选冷却只保存已可用的原奶，不构成巴氏杀菌或另一个原奶产品类别。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 期初奶牛群及入场后备牛，按类别、乳期、来源和前序负担申报 |
| starting_condition_role | 跨期生物存量；历史负担只归属一次 |
| product_classification_scope | CPC 3.0 `02211`, raw milk of cattle |
| recursive_input_rule | 外购同类原奶若作为输入须记录来源和已承接负担，不把它伪作本农场自产参考产物 |
| upstream_dataset_requirement | 外购饲料、后备牛、能源与卫生用品须有相应上游数据集或披露缺口 |
| disclosure | 群体/乳期、路线、原奶状态与温度、损失、粪污路径、联产品、共享设施、冷却所有权、计量与未解析身份 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `b_farm_gate` | 最终原奶 | 仅纳入农场门口交付前的农场控制活动；独立冷却中心和后续运输均在下游。 | `fao-milk-cooling-centres-2016` |
| `b_milk_state` | 温乳与冷藏乳 | 申报最终状态；温乳直接交付与农场冷却交付互斥，原奶不得在过程间重复计为最终产物。 | `fao-milk-cooling-centres-2016` |
| `b_herd_routes` | 放牧与舍饲 | 以受控奶牛群生产为母过程；路线变化须在饲料、粪污、能源、牛群记录与核算中逐项体现。 | `fao-leap-large-ruminants-2016` |
| `b_periods` | 泌乳、干奶、后备与淘汰 | 按牛群与期间关联投入、设施、产乳和淘汰；期初负担、后备牛及终止事件只分配一次。 | `fao-leap-large-ruminants-2016` |
| `b_manure` | 排泄物 | 区分沉积、收集、储存、施用与外运；按氮和挥发性固体路径核算。 | `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure` |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 | `fao-milk-cooling-centres-2016` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `dairy_herd` | 奶牛群及粪污生产 | required | 所有泌乳和后备阶段 | 受控生物生产及路线差异 | 报告牛群总产乳量 |
| `milk_collection` | 挤奶与原奶采集 | required | 所有选定奶牛路线 | 将采乳责任与牛群生产分开 | 初收集原奶总量 |
| `primary_conditioning` | 农场原奶初级整理 | required | 过滤、验收及交付或冷却前处理 | 原奶至合格状态及损失区分 | 合格温乳及转冷却乳 |
| `farm_cooling` | 农场自有原奶冷却 | conditional | 仅限农场控制且在交付前冷却 | 对已有可用状态的原奶进行保鲜 | 合格冷藏乳及冷却损失 |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

### 过程：奶牛群及粪污生产 (`dairy_herd`)

#### 输入

##### 产品流

###### 饲料与牧草 (`feed`)

记录泌乳牛、干奶牛、后备牛和犊牛消耗的外购及自产饲料，保留原样量和干物质量。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：按饲料、牛群和期间计量投喂量与放牧摄入量 原始采集分母类型：process_output。

- 选定流：牛用饲料与牧草产品
- 流属性/单位：Mass / kg as-fed and kg dry matter
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd_feed`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：每 kg 合格原奶的饲料干物质；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：50
  - 单位：kg dry matter/kg saleable raw milk
  - 基准：每 kg 合格原奶的饲料干物质；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 牛群供水 (`herd_water`)

按水源和牛群记录实际供应的饮用及饲养用水，区分非管理降雨。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：按水源、用途和期间计量或估计供水量 原始采集分母类型：process_output。

- 选定流：奶牛群供水
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`fao-leap-livestock-water-2019`
- 数量范围：每 kg 合格原奶的牛群供水；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：m3/kg saleable raw milk
  - 基准：每 kg 合格原奶的牛群供水；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 牛群管理能源 (`herd_energy`)

记录牛舍、投喂、泵送和粪污处理的电力与燃料，分别保留能源载体。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：按能源载体、设施、牛群和期间计量 原始采集分母类型：process_output。

- 选定流：奶牛群能源供应
- 流属性/单位：Energy or carrier quantity / kWh, MJ, L or kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 数量范围：每 kg 合格原奶的群养能源当量；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh-equivalent/kg saleable raw milk
  - 基准：每 kg 合格原奶的群养能源当量；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无单独申报的此类流。

##### 基本流

无单独申报的此类流。

#### 输出

##### 产品流

###### 独立交付的可用粪肥 (`exported_manure`)

仅在可用粪肥有独立交付、数量、质量与交接证据时列为联产品；不得同时计为废物。

分母与范围要求：按牛群和期间每 kg 合格原奶

原始数量及计算要求：计量交付粪肥质量及养分含量 原始采集分母类型：process_output。

- 选定流：作为产品交付的可用牛粪肥
- 流属性/单位：Mass / kg 湿重与干物质
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`fao-leap-nutrient-flows-2018`
- 数量范围：外售粪肥的暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg wet manure/kg saleable raw milk
  - 基准：有数量与质量记录的路线相关交付
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外售犊牛与淘汰牛 (`calves_culls`)

独立交付的活畜为单独联产品，记录类别、活重和交付；留作后备的牛仍为内部流转。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：独立交付时计量活重与头数 原始采集分母类型：process_output。

- 选定流：活犊牛或淘汰牛
- 流属性/单位：Mass / kg live weight
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd_events`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：每 kg 合格原奶对应的外售活畜重；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg live mass/kg saleable raw milk
  - 基准：每 kg 合格原奶对应的外售活畜重；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收集粪污或残余排泄物 (`manure_residue`)

将收集及直接沉积粪污与产品卡中的外售粪肥分开。此废物卡只包含不可用残余及没有独立产品交付的受控处理粪污。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：按牛群和期间计量或按路径计算粪污量 原始采集分母类型：process_output。

- 选定流：牛粪污残余或外售粪肥
- 流属性/单位：Mass / kg wet and dry matter
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`fao-leap-nutrient-flows-2018`
- 数量范围：每 kg 合格原奶的湿粪污；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg wet manure/kg saleable raw milk
  - 基准：每 kg 合格原奶的湿粪污；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 肠道甲烷排放至空气 (`enteric_methane`)

按申报的奶牛类别、活动数据和因子层级计算生物源肠道 CH4；与粪污 CH4 分开。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：按牛类计算肠道 CH4 原始采集分母类型：process_output。

- 选定流：生物源甲烷至空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg CH4
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd_events`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：每 kg 合格原奶的 CH4；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg CH4/kg saleable raw milk
  - 基准：每 kg 合格原奶的 CH4；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污一氧化二氮排放至空气 (`manure_n2o`)

按记录的粪污氮和管理路径计算直接及适用的间接 N2O。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：按粪污路径计算 N2O 原始采集分母类型：process_output。

- 选定流：一氧化二氮至空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg N2O
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：每 kg 合格原奶的 N2O；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg N2O/kg saleable raw milk
  - 基准：每 kg 合格原奶的 N2O；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污氨排放至空气 (`manure_ammonia`)

按粪污氮路径跟踪挥发 NH3，并一致扣除已转移氮。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：按粪污路径计算氨排放 原始采集分母类型：process_output。

- 选定流：氨至空气 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg NH3
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`fao-leap-nutrient-flows-2018`
- 数量范围：每 kg 合格原奶的 NH3；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg NH3/kg saleable raw milk
  - 基准：每 kg 合格原奶的 NH3；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：挤奶与原奶采集 (`milk_collection`)

#### 输入

##### 产品流

###### 挤奶及清洗用水 (`milking_water`)

记录乳房准备、设备冲洗和清洗的供应水，与牛群饮水分开。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：计量挤奶和清洗用水 原始采集分母类型：process_output。

- 选定流：挤奶及清洗供水
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`fao-leap-livestock-water-2019`
- 数量范围：每 kg 合格原奶的挤奶清洗水；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：m3/kg saleable raw milk
  - 基准：每 kg 合格原奶的挤奶清洗水；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 挤奶能源供应 (`milking_energy`)

按载体和期间计量真空泵及输乳能源。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：计量挤奶能源 原始采集分母类型：process_output。

- 选定流：挤奶能源供应
- 流属性/单位：Energy or carrier quantity / kWh, MJ, L or kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 数量范围：每 kg 合格原奶的挤奶能源当量；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh-equivalent/kg saleable raw milk
  - 基准：每 kg 合格原奶的挤奶能源当量；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无单独申报的此类流。

##### 基本流

无单独申报的此类流。

#### 输出

##### 产品流

###### 初收集原奶 (`collected_raw_milk`)

该内部采集产物由牛群生产进入初级整理，并非第二份可销售参考产物。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：计量初收集原奶总质量 原始采集分母类型：process_output。

- 选定流：挤奶所得温牛原奶
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milk_balance`
- 数量范围：每 kg 合格原奶的初收集质量；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg collected raw milk/kg saleable raw milk
  - 基准：每 kg 合格原奶的初收集质量；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 挤奶清洗废水 (`milking_wastewater`)

按排放或处理去向记录清洗废水，避免与进入牛乳的水重复。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：按去向计量或计算废水 原始采集分母类型：process_output。

- 选定流：挤奶清洗废水
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 数量范围：每 kg 合格原奶的挤奶废水；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：m3/kg saleable raw milk
  - 基准：每 kg 合格原奶的挤奶废水；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

无单独申报的此类流。

### 过程：农场原奶初级整理 (`primary_conditioning`)

#### 输入

##### 产品流

###### 接收初收集原奶 (`collected_milk_input`)

该同批次内部转移承接采乳产出，进入过滤和验收；不作为额外外购原奶。

分母与范围要求：每 kg 合格原奶，同批次

原始数量及计算要求：计量挤奶交接时的原奶总质量 原始采集分母类型：process_output。

- 选定流：初收集温牛原奶
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milk_balance`
- 数量范围：内部转移的暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg/kg saleable raw milk
  - 基准：同批次从挤奶接收的原奶总量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级整理用水 (`conditioning_water`)

记录农场内过滤和设备卫生用水；不得以水稀释原奶。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：计量初级整理供水 原始采集分母类型：process_output。

- 选定流：初级整理工艺水
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 数量范围：每 kg 合格原奶的初级整理用水；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：m3/kg saleable raw milk
  - 基准：每 kg 合格原奶的初级整理用水；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无单独申报的此类流。

##### 基本流

无单独申报的此类流。

#### 输出

##### 产品流

###### 送往农场冷却的合格乳 (`conditioned_milk_to_cooling`)

仅在初级整理之后还有农场自有冷却时发生该内部移交；不计为温乳农场门口销售。

分母与范围要求：每 kg 合格原奶，同批次

原始数量及计算要求：按批次计量送往农场冷却的合格质量 原始采集分母类型：process_output。

- 选定流：送农场冷却的合格温牛原奶
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milk_balance`
- 数量范围：内部转移的暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.2
  - 单位：kg/kg saleable raw milk
  - 基准：冷却损失前送入冷却的合格乳
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农场门口温原奶 (`warm_saleable_milk`)

仅在农场自有冷却前交付合格原奶时作为最终参考产物；与冷藏最终产物互斥。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：交付时计量合格温原奶质量 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：农场门口温牛原奶
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milk_balance`
- 数量范围：每 kg 合格原奶的温乳交付份额；物理分流界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg saleable raw milk
  - 基准：每 kg 合格原奶的温乳交付份额；物理分流界限
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-leap-large-ruminants-2016`

##### 废物流

###### 拒收乳及过滤残余 (`rejected_milk`)

按原因和去向记录污染、停奶或其他拒收乳及截留固体，不作为可销售产品。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：按原因和去向计量拒收质量 原始采集分母类型：process_output。

- 选定流：拒收原奶与过滤残余
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milk_balance`
- 数量范围：每 kg 初收集原奶的拒收质量；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg rejected/kg gross collected raw milk
  - 基准：每 kg 初收集原奶的拒收质量；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

无单独申报的此类流。

### 过程：农场自有原奶冷却 (`farm_cooling`)

#### 输入

##### 产品流

###### 进入农场冷却的合格原奶 (`milk_entering_cooling`)

按批次、质量和时间匹配初级整理产出；内部转移不重复加入上游负担。

分母与范围要求：每 kg 合格原奶，同批次

原始数量及计算要求：按批次计量由初级整理接收的合格质量 原始采集分母类型：process_output。

- 选定流：进入农场冷却的合格温牛原奶
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milk_balance`
- 数量范围：内部转移的暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.2
  - 单位：kg/kg saleable raw milk
  - 基准：冷却损失前进入农场冷却的合格乳
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农场自有冷却能源 (`cooling_energy`)

仅记录农场控制且在农场门口交付前完成的冷却能源。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：按载体和期间计量冷却能源 原始采集分母类型：process_output。

- 选定流：农场原奶冷却能源供应
- 流属性/单位：Energy or carrier quantity / kWh, MJ, L or kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`fao-milk-cooling-centres-2016`
- 数量范围：每 kg 冷藏原奶的冷却能源当量；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh-equivalent/kg chilled raw milk
  - 基准：每 kg 冷藏原奶的冷却能源当量；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无单独申报的此类流。

##### 基本流

无单独申报的此类流。

#### 输出

##### 产品流

###### 农场门口冷藏原奶 (`chilled_saleable_milk`)

仅在农场控制冷却后作为最终参考产物；记录交付温度及储存时间。该冷藏身份不覆盖温原奶。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：交付时计量合格冷藏原奶质量 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：冷藏原奶，农场门口生产组合 `aa8aebbb-724a-417b-8372-2dccd499ce71`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milk_balance`
- 来源：`fao-milk-cooling-centres-2016`
- 数量范围：每 kg 合格原奶的冷藏交付份额；物理分流界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg saleable raw milk
  - 基准：每 kg 合格原奶的冷藏交付份额；物理分流界限
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-leap-large-ruminants-2016`

##### 废物流

###### 冷却与储存损失 (`cooling_loss`)

将受控冷却期间溢漏及拒收乳与合格冷藏产物分开记录。

分母与范围要求：每 kg 合格原奶，保留牛群与期间分层

原始数量及计算要求：计量冷却期间损失或拒收的原奶质量 原始采集分母类型：process_output。

- 选定流：原奶冷却损失
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milk_balance`
- 数量范围：每 kg 进入农场冷却的原奶损失；宽泛暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg milk entering farm cooling
  - 基准：每 kg 进入农场冷却的原奶损失；宽泛暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

无单独申报的此类流。

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 牛原奶，温或农场冷藏，生产农场门口（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `warm_saleable_milk`, `chilled_saleable_milk` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`warm_saleable_milk`, `chilled_saleable_milk`

必需产品实例限定项：奶牛物种；原奶；农场门口；温或冷藏状态；温度；脂肪/蛋白或固形物；验收和拒收量；报告期

- 选定流：牛原奶，温或农场冷藏，生产农场门口（实际生产者交付关联）
- 流属性 / 单位：质量 / kg
- 数量规则：使用与关联来源行核对的同批实测合格数量，仅对声明参考流归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 数据特异性：场址特异（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reference_handover`
- 来源：`fao-milk-cooling-centres-2016`

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

###### 牛原奶，温或农场冷藏，生产农场门口 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`warm_saleable_milk`, `chilled_saleable_milk`

必需产品实例限定项：奶牛物种；原奶；农场门口；温或冷藏状态；温度；脂肪/蛋白或固形物；验收和拒收量；报告期

- 选定流：牛原奶，温或农场冷藏，生产农场门口
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：计算值（`calculated_value`）
- 数据特异性：场址特异（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reference_handover`
- 来源：`fao-milk-cooling-centres-2016`

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

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `a_outputs` | 乳、外售犊牛/淘汰牛及粪肥 | 只在独立交付且有实测量时列为联产品；拒收乳、死亡牛、不可用粪污和内部后备牛不分配为销售产物。 | `fao-leap-large-ruminants-2016` |
| `a_mass_balance` | 温乳与冷藏乳 | 每批初收集乳 = 温乳最终交付 + 送冷却乳 + 冷却前拒收及损失；送冷却乳 = 进入冷却乳 = 冷藏最终交付 + 冷却期间拒收及损失。每批温乳与冷藏最终路径互斥；内部转移不重复承接产品负担。 | `fao-leap-large-ruminants-2016` |
| `a_coproduct` | 牛乳及独立交付的活牛 | 首先将挤奶、冷却等产品专属活动单列。对无法分离的牛群负担，按牛类和期间的产乳及活体增重能量需求建立有记录的生物物理因果关系进行分配，保留输入并做敏感性分析。经济分配仅作为披露的敏感性方案，不作默认方法；不预设替代抵扣。 | `fao-leap-large-ruminants-2016` |
| `a_period_asset` | 牛群与共享设施 | 按牛群、乳期和服务量将后备、牛舍、挤奶与冷却设施负担分到受益期间和产物；同一资产服务和初始负担仅计一次。 | `fao-leap-large-ruminants-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd_events` | `dairy_herd` | 牛群与 CH4 | 动物事件记录 | 类别、乳期、头数、日期、期初/期末活重、增重、来源、去向 | 牛群台账和地磅；原始汇总要求：按群体期间汇总；期初结余只计一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | head; kg | 每次事件 | 完整报告期 | 生产农场 | 每参考流 | 台账、地磅校准；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_herd_feed` | `dairy_herd` | 饲料 | 投喂及放牧记录 | 饲料 ID、来源、质量、干物质、牛类、期间 | 仓库领用和牧场观察；原始汇总要求：按饲料和牛类汇总并换算干物质。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每日或每批 | 完整报告期 | 生产农场 | 每参考流 | 发票、称重单、水分测定；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_water` | 所有适用节点 | 供应水及废水 | 水表与去向记录 | 水源、用途、体积、去向、水表 ID | 水表读数和服务记录；原始汇总要求：按使用节点和期间归集。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | m3 | 每个计量区间 | 完整报告期 | 生产农场 | 每参考流 | 水表校准、发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_energy` | 所有适用节点 | 能源及资产 | 电表/燃料记录 | 载体、数量、单位、仪表、资产、服务时数、使用者 | 电表、发票和燃料收据；原始汇总要求：按实测服务量将共享使用分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 载体原始单位 | 每个计量区间 | 完整报告期 | 生产农场 | 每参考流 | 仪表、发票、资产台账；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure` | `dairy_herd` | 粪污与氮排放 | 路径记录 | 牛类、挥发性固体、氮、路径、质量、交付 | 贮存和养分记录；原始汇总要求：按路径对账质量与养分。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; kg N | 每月及每次事件 | 完整报告期 | 生产农场 | 每参考流 | 称重单、化验、去向；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_milk_balance` | milk_collection; primary_conditioning; farm_cooling | 合格及拒收乳 | 原奶批次记录 | 总量、合格量、拒收原因、损失、温度、固形物、交付 | 校准储乳罐/地磅及采样；原始汇总要求：批次平衡；温乳/冷藏乳最终分流。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; °C; % | 每批 | 完整报告期 | 生产农场 | 每参考流 | 储乳罐校准、验收与化验记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- |
| `c_milk_balance` | 原奶批次 | 初收集量 = 温乳最终交付 + 送冷却乳 + 冷却前拒收/损失；送冷却乳 = 进入冷却乳 = 冷藏最终交付 + 冷却期间拒收/损失。每批只选一个最终状态，内部转移各计一次。 | 批次质量、拒收、各内部交接、损失、最终状态 | 合格乳 kg | `fao-leap-large-ruminants-2016` |
| `c_enteric_ch4` | 奶牛群 | 按 IPCC 奶牛类别、活动数据及所选层级计算肠道 CH4；保留因子版本。 | 牛类、头数、期间、饲料/活动 | CH4 kg | `ipcc-2019-livestock-manure` |
| `c_manure` | 粪污 | 按挥发性固体、氮及管理路径分别计算 N2O、NH3 与适用 CH4；不重复计入同一排放。 | 粪污挥发性固体、氮、路径和期间 | 各物种 kg | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `c_shared_service` | 共享设施 | 按经核实服务量在牛群、挤奶和冷却节点以及期间之间分配一次。 | 仪表/资产台账、服务记录 | 已分配投入量 | `fao-leap-large-ruminants-2016` |
| `c_biophysical_allocation` | 牛乳及外售活牛 | 首先分离产品专属活动，再按牛类和期间记录的产乳与活体增重能量需求计算剩余牛群负担份额；份额之和须为一。 | 产乳量/成分、牛群增重、类别、能量需求方法和期间 | 牛乳及活牛负担份额 | `fao-leap-large-ruminants-2016` |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 每批原奶 | 核实牛乳、原奶、温/冷状态、农场门口与交付控制权；冷藏 UUID 不得用于温乳。 | batch and handover records |
| `dq_completeness` | 牛群与乳量 | 对账期初期末牛群、各批总乳、合格量、拒收与损失。 | herd register and tank balance |
| `dq_period` | 跨期投入 | 核实后备、设施和终止事件按受益期只归属一次。 | phase and asset logs |
| `dq_flow` | 供应与排放 | 保留水和能源来源、粪污路径、排放物种与介质及因子版本。 | meters, nutrient log and calculation sheet |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_gate` | 参考流 | 验证最终原奶在生产农场门口交付，且只选温乳或农场冷藏乳一种批次状态；冷却中心记录另列下游。 | `fao-milk-cooling-centres-2016` |
| `v_mass` | 批次平衡 | 原奶总质量与合格、拒收及损失质量闭合；含量、温度及验收依据可追溯。 | `fao-leap-large-ruminants-2016` |
| `v_routes` | 路线和牛群 | 检查放牧/舍饲路线差异在饲料、粪污、能源和计算中有证据，并按牛群及期间核对后备牛和淘汰牛。 | `fao-leap-large-ruminants-2016` |
| `v_attribution` | 联产品与共享设施 | 核对每个独立产物交付、生物物理能量需求输入、设施服务量及跨期负担，只分配一次；披露粪肥处理与敏感性。 | `fao-leap-large-ruminants-2016` |
| `v_emissions` | 排放 | 检查 IPCC 牛类、粪污管理路径、物种、介质及适用因子，拒绝未分物种的总量 UUID。 | `ipcc-2019-livestock-manure` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 生产农场门口牛原奶的前景数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在物种、交付状态、地理、路线及数据质量兼容时用于后续过程或生命周期模型 |
| excluded_use | 不得代表巴氏杀菌乳、消费者包装乳、水牛乳、羊乳或独立冷却中心 |
| required_metadata | 牛群、期间、路线、奶量与质量、温/冷状态、温度、拒收、粪污、共产品与分配 |
| required_quality_disclosure | 缺失的流身份、暂定范围、计量质量、排放因子、上游数据及分配敏感性 |
| update_trigger | 牛群结构、路线、冷却控制、交付状态、方法或因子发生实质改变 |

## 11. 数据来源

| 来源 ID | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `fao-leap-large-ruminants-2016` | official_guidance | FAO LEAP (2016), Environmental performance of large ruminant supply chains, https://openknowledge.fao.org/handle/20.500.14283/i6494en | 牛群、共产品、期间和农场边界 |
| `ipcc-2019-livestock-manure` | method_factor | IPCC (2019), Refinement Volume 4 Chapter 10, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 奶牛类别、肠道和粪污排放 |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP (2018), Nutrient flows and associated environmental impacts, https://openknowledge.fao.org/handle/20.500.14283/ca1328en | 氮和粪污路径 |
| `fao-leap-livestock-water-2019` | official_guidance | FAO LEAP (2019), Water use in livestock production systems and supply chains, https://www.fao.org/partnerships/leap/resources/publications/ | 用水来源与用途分层 |
| `fao-milk-cooling-centres-2016` | official_guidance | FAO (2016), Technical and Investment Guidelines for Milk Cooling Centres, https://www.fao.org/sustainable-food-value-chains/library/details/fr/c/426262/ | 冷却中心与农场自有冷却边界 |
