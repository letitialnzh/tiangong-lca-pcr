---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.buffalo
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水牛

## 1. 范围与适用性

本 PCR 适用于在屠宰前于生产农场门口移交的活水牛前景数据包。范围包括用于肉、奶、繁育、补充、役用或混合目的的水牛，以及建群、适用时的繁殖、犊牛培育、放牧或舍饲、适用时的泡水或降温、动物健康、水和能源使用、粪污管理、挑选、称重及农场门口移交。

参考产品不包括牛、水牛肉或胴体、生水牛乳、皮张、精液、胚胎、独立销售的饲养或兽医服务、屠宰、分割及移交后的运输。只有在独立预期并有计量交接时，乳和外运粪肥才是联产品。死亡动物和不可用粪污仍为损失或废物流。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.buffalo` |
| classification_refs | CPC 3.0 `02112`, `Buffalo` |
| covered_products | 为肉、奶、繁育、补充、役用或混合目的管理并在生产农场门口活体移交的水牛 |
| excluded_products | 牛；肉或胴体；作为参考产品的生乳；皮张；精液或胚胎；独立销售的服务；屠宰场接收后的动物 |
| representative_product | 在生产农场门口所有权或运营控制转移前立即称重的活水牛 |
| production_route | 受管理水牛生产，申报牧区或混合、奶业关联、舍饲或半集约化变体；路线差异覆盖饲料、移动、降温或泡水、粪污路径、基础设施和排放计算 |
| market_state | 农场门口活体未加工动物，并申报动物类别、必要时的性别、生产目的、路线、活重基准、地理范围、健康或市场状态及群组或报告期 |

各路线可以并存，但当模型要求不同时，必须保持动物、期间、投入、粪污路径、基础设施使用和产出的可追溯分离。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产农场门口的活水牛 |
| How much | 1 kg 活重 |
| How well | 申报动物类别、必要时的性别、用途、生产路线、必要时的品种或类型、实测活重基准、健康或市场状态、地理范围和农场门口状态 |
| How long or cycle | 覆盖归属繁殖、培育、生长、粪污和共享基础设施服务阶段的已申报群组或报告期 |
| reference_flow_link | `buffalo_reference_output` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Buffalo `d9cae6eb-5ff2-46f0-9114-14d4444262c1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 动物类别；必要时的性别；生产目的；牧区或混合、奶业关联、舍饲或半集约化路线；必要时的品种或类型；实测活重基准和时点；地理范围；农场门口移交；群组或报告期；纳入的生命周期阶段 |
| Binding | 固定（`fixed`） |

头数仅作为辅助活动数据采集，不得替代质量参考属性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_live_mass` | 参考水牛 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将接受产出归一化为农场门口移交前立即测得的 1 kg 活重；保留秤具、校准、称重时间、个体或群组基准及胃内容物或失重约定。 |
| `animal_count_link` | 动物事件记录 | 质量和头数 | kg 和 head | 每次头数转质量都需动物类别、实测或抽样体重、抽样方法、日期和群组。 |
| `feed_dry_matter` | 饲料、灌木叶、牧草和补充料 | 质量 | kg 原样和 kg 干物质 | 保留原样质量及水分或干物质换算，缺少换算依据时不得汇总湿基和干基数量。 |
| `water_purpose` | 饮用、清洁、降温和泡水用水 | 体积或质量 | m3 或 kg | 将饮水与服务、降温和泡水用水分开，并保留水源、用途和测量方法。 |
| `energy_carrier` | 电力和燃料 | 能量或载能体数量 | kWh、MJ、L 或 kg | 保留各载能体原始数量，共用计量表仅按有记录的服务证据分配一次。 |
| `emission_species` | 肠道和粪污排放 | 污染物质量 | kg 物种 | 分别记录 CH4、N2O、NH3 和其他物种，并保留接收环境、活动数据、因子层级和分子换算基准。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

前景边界从引入的繁育、补充或幼年水牛以及已申报期初牛群状态开始。范围包括适用时的繁殖和产犊、犊牛培育、放牧或舍饲、受控动物移动、健康管理、供应水、受管理的降温或泡水、能源、农场控制下的粪污收集和处理、活畜挑选、称重和移交。购入饲料、动物、保健产品、能源和服务的上游生产由供应商数据集表示，除非明确受前景控制。

边界终点为活水牛在生产农场门口所有权或运营控制转移前立即称重。屠宰、分割、下游待宰、加工和移交后运输均排除。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已申报群组或报告期开始时的期初水牛群及引入的繁育、补充或幼年动物 |
| starting_condition_role | 需要前一阶段或供应商数据集，或明确期间归属决策的生物起始存量 |
| product_classification_scope | CPC 3.0 `02112` 活水牛；肉、乳、皮张、繁殖材料和服务不递归进入本参考类别 |
| recursive_input_rule | 同类别进入的水牛记录为起始存量或中间生物转移，并保留来源、类别、活重、前一阶段和负担处理，不重新创建为新的参考产出 |
| upstream_dataset_requirement | 引入动物及购入饲料、保健产品、能源和服务需要供应商或前一阶段数据集；无兼容数据时须披露有理由的截断 |
| disclosure | 路线、动物类别和期间、放牧和舍饲方式、饲料和采食系统、受控移动、降温或泡水、粪污路径、共享资产、联产品和交接、死亡、活重方法、地理范围及未解析身份 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `b_managed_buffalo_route` | 所有生产变体 | 使用一个受管理水牛生产父节点；在拓扑、清单类别、计算、证据和验证中申报每种牧区或混合、奶业关联、舍饲路线的差异。 | `fao-leap-large-ruminants-2016`; `fao-gleam` |
| `b_gate` | 参考产出 | 终点为生产农场门口移交前立即称重的活水牛；排除屠宰场接收和移交后运输。 | `fao-leap-large-ruminants-2016` |
| `b_period_linkage` | 繁育、妊娠、犊牛、生长、育肥、淘汰和补充阶段 | 按群组和期间索引动物、投入、产出、补充、死亡和终止事件，期初存量负担仅归属一次。 | `fao-leap-large-ruminants-2016` |
| `b_manure_pathway` | 排泄物和粪污 | 纳入农场控制下的沉积、收集、贮存、处理、回收、外运和土地利用；保留各路径和交接且不重复负担。 | `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure` |
| `b_shared_services` | 共享牛舍、牧地、挤奶、降温或泡水、供水、能源和粪污资产 | 识别每个使用的动物组、产品节点和服务期；优先按实测服务、再按记录的替代驱动分配一次。 | `fao-leap-large-ruminants-2016` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `buffalo_production` | 水牛群生产 | required | 仅在购入起始存量且披露前阶段负担时可省略繁殖 | 受管理生物生产及替代路线差异 | 释放至农场门口挑选的活重 |
| `manure_management` | 粪污与养分管理 | required | 零受控收集或处理需要直接沉积或立即交接证据 | 残余物和养分路径管理 | 各路径处理的粪污干物质、挥发性固体和氮 |
| `farm_gate_handover` | 挑选、称重与农场门口移交 | required |  | 参考产品门点 | 接受并移交的活水牛质量 |

### 过程：水牛群生产（`buffalo_production`）

#### 输入

##### 产品流

###### 引入的繁育、补充或幼年水牛（`incoming_buffalo`）

记录每头或每群引入动物的来源、类别、目的、头数、活重、引入日期及前期负担处理。

分母与范围要求：每 1,000 kg 农场门口活水牛产出并按群组期间

原始数量及计算要求：按动物类别和群组实测引入活重及头数 原始采集分母类型：process_output。

- 选定流：引入的活水牛起始存量
- 流属性/单位：质量及并行头数 / kg 和 head
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_buffalo_events`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定引入存量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg 引入活重/kg 农场门口活体产出
  - 基准：路线相关宽范围；完全自繁群组可为零
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饲料、灌木叶、牧草和补充料（`feed_and_browse`）

按身份和来源记录各饲料的原样质量、干物质、组成、动物组和期间。放牧或采食摄入仅可依据有记录的前景观察及明示方法计算。

分母与范围要求：每 1,000 kg 农场门口活水牛产出并按群组期间

原始数量及计算要求：按饲料、类别和期间的实测净发料量加计算的牧场或采食摄入量 原始采集分母类型：process_output。

- 选定流：水牛饲料、灌木叶、牧草和补充料产品
- 流属性/单位：质量 / kg 原样和 kg 干物质
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed_grazing_and_browse`
- 来源：`fao-leap-large-ruminants-2016`; `ipcc-2019-livestock-manure`
- 数量范围：暂定饲料干物质筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：60
  - 单位：kg 干物质/kg 农场门口活体产出
  - 基准：需用群组饲料和放牧记录替换的宽泛多期筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的饮用、服务、降温和泡水用水（`buffalo_water`）

本伞形卡覆盖跨越系统边界的供应水。由前景记录选择具体交换，并区分饮用、清洁、降温和泡水与降雨或非管理地表水。

分母与范围要求：每 1,000 kg 农场门口活水牛产出

原始数量及计算要求：按水源、用途、动物组和期间计量或计算供应水 原始采集分母类型：process_output。

- 选定流：水牛生产供应水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cooling`
- 数量范围：暂定总供应水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：150
  - 单位：m3/1,000 kg 农场门口活体产出
  - 基准：从牧区到降温舍饲系统的宽泛筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 牛群生产能源载体（`herd_energy`）

记录泵送、降温、共用挤奶、喂养、照明、牛舍、围栏和移动机械所用的各类电力、热和燃料。

分母与范围要求：每 1,000 kg 农场门口活水牛产出

原始数量及计算要求：按载能体、使用节点和期间的计量表、发票、燃料或运行时记录 原始采集分母类型：process_output。

- 选定流：水牛生产能源供应
- 流属性/单位：能量或载能体数量 / kWh、MJ、L 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_assets`
- 数量范围：暂定生产能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：6000
  - 单位：kWh-equivalent/1,000 kg 农场门口活体产出
  - 基准：保留实际载能体数量的宽路线筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 动物健康和饲养材料（`health_materials`）

按身份和事件记录疫苗、药品、消毒剂、垫料及其他实体材料。独立销售的服务不成为参考产品。

分母与范围要求：每个治疗群组及每 1,000 kg 农场门口活体产出

原始数量及计算要求：按产品、剂量、动物类别和事件的购入及使用记录 原始采集分母类型：process_output。

- 选定流：水牛健康和饲养材料
- 流属性/单位：产品特定质量、体积、剂量或件数 / 原生单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_health_and_husbandry`
- 数量范围：暂定干预次数筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：干预事件/1,000 kg 农场门口活体产出
  - 基准：仅用于事件次数筛查；仍需具体材料数量
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 受控入场动物和饲料运输（`controlled_inbound_transport`）

仅纳入前景运营者控制的入场移动。已在上游表示的供应商交付运输不得重复计算。

分母与范围要求：每 1,000 kg 农场门口活水牛产出

原始数量及计算要求：装载吨数乘受控距离，动物和饲料分开 原始采集分母类型：transport_service。

- 选定流：入场道路货运服务
- 流属性/单位：运输服务 / tonne-kilometre
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_controlled_transport`
- 数量范围：暂定受控运输筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：tkm/1,000 kg 农场门口活体产出
  - 基准：明确受控入场移动的宽泛筛查
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设默认废物投入。

##### 基本流

不预设默认基本流投入。只有在实际基本流身份及来源环境得到核实时，才增加土地占用或取水。

#### 输出

##### 产品流

###### 释放至门口挑选的活水牛（`buffalo_to_gate`）

将活水牛移交给门口过程，并保持动物类别、群组、路线、头数、质量和负担可追溯性不变。

分母与范围要求：每个生产群组

原始数量及计算要求：按动物类别和移交批次实测释放活重和头数 原始采集分母类型：process_output。

- 选定流：门口挑选前的活水牛
- 流属性/单位：质量及并行头数 / kg 和 head
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_buffalo_events`
- 数量范围：牛群至门口核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg 释放量/kg 接受的农场门口产出
  - 基准：挑选和短期损失宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立移交的生水牛乳（`raw_buffalo_milk`）

仅当生水牛乳被有意收集、独立移交并计量数量和交接时纳入此条件联产品，否则省略该交换。逐批分别记录温乳或冷藏状态、温度和实际交付门。本宽口径卡不固定 UUID；只有实际冷藏且交付门匹配的批次，才能在身份确认后采用冷藏农场门身份。不得根据 UUID 假定发生了冷却；仅在实际冷却时纳入交付前实测冷却投入和损失。

分母与范围要求：每报告期及归属后每 1,000 kg 农场门口活水牛产出

原始数量及计算要求：在其农场门口交接处实测可销售生乳质量 原始采集分母类型：process_output。

- 选定流：交付状态与交付门明确的水牛原奶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_outputs_and_attribution`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定独立乳产出筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 生乳/kg 农场门口活水牛产出
  - 基准：奶业关联路线宽泛筛查；乳未独立移交时必须为零
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 死亡和不可用生物材料（`buffalo_mortalities`）

按类别、质量或头数、日期、已知原因及处置去向记录死亡和不可用生物材料，不得将其归为联产品。

分母与范围要求：每群组期间及每 1,000 kg 农场门口活体产出

原始数量及计算要求：按类别和去向实测或记录死亡质量和头数 原始采集分母类型：process_output。

- 选定流：水牛死亡和生物废物
- 流属性/单位：质量和头数 / kg 和 head
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_buffalo_events`
- 数量范围：暂定死亡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 死亡量/kg 期初、出生和引入活重
  - 基准：生物质量平衡上限
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-leap-large-ruminants-2016`

##### 基本流

###### 排入空气的肠道甲烷（`enteric_methane`）

按水牛类别、采食量、日粮质量、生产阶段和所选 IPCC 层级计算肠道甲烷，不得采用单一通用水牛因子。

分母与范围要求：每群组期间及每 1,000 kg 农场门口活体产出

原始数量及计算要求：依据采集的动物和饲料活动数据进行符合 IPCC 的计算 原始采集分母类型：process_output。

- 选定流：methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_and_manure`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定肠道甲烷筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg CH4/1,000 kg 农场门口活体产出
  - 基准：宽泛 QA 筛查，非通用排放因子
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：粪污与养分管理（`manure_management`）

#### 输入

##### 产品流

###### 从受管理动物转入的粪污（`manure_received`）

将进入每条受控路径的粪污与放牧直接沉积分开，并记录湿质量、干物质、挥发性固体、氮、动物类别和期间。

分母与范围要求：每条粪污路径及每 1,000 kg 农场门口活体产出

原始数量及计算要求：按路径和期间实测或计算转移量 原始采集分母类型：process_output。

- 选定流：转入管理的水牛粪污
- 流属性/单位：质量和组成 / kg 湿基、kg 干物质、kg 挥发性固体和 kg N
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_and_manure`
- 来源：`fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- 数量范围：粪污转移核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 接收量/kg 产生的排泄物
  - 基准：扣除直接沉积和存量变化后的受控路径比例
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-leap-large-ruminants-2016`

###### 粪污操作用水（`manure_water`）

将供应的稀释、清洁、冲洗和处理用水与粪污水分及降雨分开记录。

分母与范围要求：每吨接收粪污及每 1,000 kg 农场门口活体产出

原始数量及计算要求：按粪污路径计量或计算供应水 原始采集分母类型：process_output。

- 选定流：Process water supply
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cooling`
- 数量范围：暂定粪污用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：m3/t 接收粪污
  - 基准：排除粪污本身水分的宽路径筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污处理和处置能源（`manure_energy`）

记录农场控制下收集、泵送、曝气、分离、处理和施用的实际载能体数量。

分母与范围要求：每吨接收粪污及每 1,000 kg 农场门口活体产出

原始数量及计算要求：按路径和期间计量、发票或运行时推导的载能体数量 原始采集分母类型：process_output。

- 选定流：粪污管理能源供应
- 流属性/单位：能量或载能体数量 / kWh、MJ、L 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_assets`
- 数量范围：暂定粪污能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kWh-equivalent/t 接收粪污
  - 基准：保留实际载能体身份的宽技术筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设默认废物投入。

##### 基本流

不预设默认基本流投入。

#### 输出

##### 产品流

###### 外运粪肥或回收养分产品（`exported_manure`）

只有在有意回收并具有实测数量、组成、接收方、交接点和归属处理时，才将粪污作为产品。

分母与范围要求：每条粪污路径及归属后每 1,000 kg 农场门口活体产出

原始数量及计算要求：实测移交质量，并记录干物质、氮和其他申报养分 原始采集分母类型：process_output。

- 选定流：外运水牛粪肥或回收养分产品
- 流属性/单位：质量和养分含量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_outputs_and_attribution`
- 来源：`fao-leap-nutrient-flows-2018`
- 数量范围：外运粪肥质量平衡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 外运粪污/kg 扣除贮存损失后可用粪污
  - 基准：由路径质量平衡约束的回收外运比例
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-leap-large-ruminants-2016`

##### 废物流

###### 不可用粪污和处理残余物（`manure_residue_waste`）

记录未作为产品有意移交的粪污、污泥、垫料残余或处理残余，并注明实际去向。

分母与范围要求：每条粪污路径及每 1,000 kg 农场门口活体产出

原始数量及计算要求：按路径和去向实测或核对废物质量 原始采集分母类型：process_output。

- 选定流：不可用水牛粪污和处理残余物
- 流属性/单位：质量 / kg 湿基和干基
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_and_manure`
- 数量范围：残余物质量平衡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 残余物/kg 接收粪污
  - 基准：记录移交、田间利用、排放和存量变化后的剩余比例
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-leap-large-ruminants-2016`

##### 基本流

###### 排入空气的粪污甲烷（`manure_methane`）

按粪污系统、挥发性固体、气候、贮存时长、处理和实测回收计算甲烷。

分母与范围要求：每条路径及每 1,000 kg 农场门口活体产出

原始数量及计算要求：依据采集的类别和粪污路径数据进行符合 IPCC 的计算 原始采集分母类型：process_output。

- 选定流：methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_and_manure`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定粪污甲烷筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：600
  - 单位：kg CH4/1,000 kg 农场门口活体产出
  - 基准：宽路径筛查，非通用因子
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 排入空气的直接和间接氧化亚氮（`manure_nitrous_oxide`）

依据氮排泄、路径、沉积或施用、挥发及淋溶假设分别计算直接和间接 N2O。

分母与范围要求：每条路径及每 1,000 kg 农场门口活体产出

原始数量及计算要求：依据采集的氮和路径数据进行符合 IPCC 的计算 原始采集分母类型：n_input。

- 选定流：nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_and_manure`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定粪污 N2O 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/1,000 kg 农场门口活体产出
  - 基准：宽路径筛查，非通用因子
  - 基准类型：氮投入（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 排入空气的氨（`manure_ammonia`）

依据氮排泄、粪污路径、牛舍、贮存、施用和挥发基准计算氨，并分别保留 NH3 质量和氮当量换算。

分母与范围要求：每条路径及每 1,000 kg 农场门口活体产出

原始数量及计算要求：依据采集的氮和粪污路径记录进行方法计算 原始采集分母类型：n_input。

- 选定流：ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg NH3
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_and_manure`
- 来源：`fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- 数量范围：氮平衡氨校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg NH3 中的 N/kg 可用粪污 N
  - 基准：核对其他路径后氨氮不得超过可用粪污氮
  - 基准类型：氮投入（`n_input`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-leap-large-ruminants-2016`

### 过程：挑选、称重与农场门口移交（`farm_gate_handover`）

#### 输入

##### 产品流

###### 进入门口操作的活水牛（`gate_buffalo_input`）

从生产过程转入动物，并保持其群组、类别、路线、头数、质量和归属谱系不变。

分母与范围要求：每个移交批次

原始数量及计算要求：按移交批次实测投入质量和头数 原始采集分母类型：process_output。

- 选定流：进入农场门口挑选的活水牛
- 流属性/单位：质量及并行头数 / kg 和 head
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate_handover`
- 数量范围：门口投入核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg 门口投入/kg 接受的参考产出
  - 基准：拒收和短期损失宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 短期圈留、称重和装载能源（`gate_energy`）

记录移交前实际载能体使用，排除移交后车辆移动能源。

分母与范围要求：每 1,000 kg 接受的参考产出

原始数量及计算要求：归属于门口操作的计量、发票或设备运行时记录 原始采集分母类型：reference_flow。

- 选定流：农场门口操作能源供应
- 流属性/单位：能量或载能体数量 / kWh、MJ、L 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_assets`
- 数量范围：暂定门口能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh-equivalent/1,000 kg 接受产出
  - 基准：仅移交前操作
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 短期圈留和清洁用水（`gate_water`）

记录移交前供应的饮用和清洁水，并区分用途。

分母与范围要求：每 1,000 kg 接受的参考产出

原始数量及计算要求：门口操作期间计量或计算的供应水 原始采集分母类型：reference_flow。

- 选定流：Process water supply
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_cooling`
- 数量范围：暂定门口用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3/1,000 kg 接受产出
  - 基准：移交前短期圈留和清洁
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设默认废物投入。

##### 基本流

不预设默认基本流投入。

#### 输出

##### 产品流

###### 活水牛参考产品（`buffalo_reference_output`）

这是在生产农场门口所有权或运营控制转移前立即测得的接受活水牛质量。

参考产出的原始记录：按已申报活重基准实测接受移交质量 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流：Buffalo `d9cae6eb-5ff2-46f0-9114-14d4444262c1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定（`fixed`）
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate_handover`
- 数量范围：参考归一化
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考流
  - 基准：归一化接受活水牛产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-leap-large-ruminants-2016`

##### 废物流

###### 拒收动物、死亡和门口质量损失（`gate_rejects`）

分别记录拒收或退回动物、死亡和实测短期圈留质量损失，并注明原因和去向。

分母与范围要求：每个移交批次及每 kg 参考产出

原始数量及计算要求：核对门口投入、接受产出、退回或留存动物、死亡及实测质量损失 原始采集分母类型：reference_flow。

- 选定流：水牛门口拒收和生物损失
- 流属性/单位：质量和头数 / kg 和 head
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate_handover`
- 数量范围：门口质量平衡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 拒收和损失/kg 门口投入
  - 基准：扣除退回和留存动物后的移交批次质量平衡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-leap-large-ruminants-2016`

##### 基本流

不预设默认基本流产出。仅当能源供应数据集尚未表示且实际物种和介质已核实时，才加入设备直接排放。

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `a_output_precedence` | 活水牛、独立移交乳、繁育或淘汰动物、役用服务和外运粪肥 | 枚举每个预期产出及其交接。先划分可直接计量的产品特定记录；不可分负担采用明确物理因果关系，仅在物理因果不可辩护时采用经济分配并披露价格、期间和敏感性。 | `fao-leap-large-ruminants-2016`; `fao-ruminant-lca-2013` |
| `a_milk_condition` | 生水牛乳 | 仅对有意收集并独立移交的生乳创建联产品交换；犊牛哺乳或废弃乳留在牛群生产内，不是外部联产品。 | `fao-leap-large-ruminants-2016` |
| `a_residue_status` | 粪污、死亡和损失 | 仅在有意回收并记录移交时识别外运粪肥；死亡和不可用残余物仍为废物或损失，默认不获得避免产品抵扣。 | `fao-leap-nutrient-flows-2018` |
| `a_multi_period` | 繁育存量、补充、出生、生长、淘汰、死亡和期末存量 | 按类别和期间核对期初、增加、移交、死亡、淘汰和期末存量；前期及当期负担各归属一次，并记录补充和终止处理。 | `fao-leap-large-ruminants-2016` |
| `a_shared_assets` | 共享牧地、牛舍、挤奶、降温或泡水、供水、能源和粪污基础设施 | 列出所有消费节点和服务期；先分配直接实测服务，再用动物日、活重日、运行时或吞吐量等记录的因果驱动；份额和为一且负担仅计一次。 | `fao-leap-large-ruminants-2016` |
| `a_route_portfolio` | 并存的牧区或混合、奶业关联和舍饲路线 | 保持路线特定动物、期间、饲料、移动、水、粪污、基础设施和排放记录分离；仅在生产加权路线份额且无重复动物或期间时汇总。 | `fao-gleam`; `fao-ruminant-lca-2013` |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_buffalo_events` | `buffalo_production`; `farm_gate_handover` | 期初存量、出生、购入、转移、死亡、淘汰和接受产出 | 牛群登记、移动记录和称重单 | 动物或群组 id；类别；性别；目的；路线；事件；日期；头数；活重；来源；去向；阶段 | 牛群登记加校准称重或有记录的代表性抽样；原始汇总要求：归一化前按类别期间核对存量和移动。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | head 和 kg | 每次事件 | 完整群组和报告期 | 具名农场、牛群和群组 | 每参考流 | 签字记录、移动文件、秤具校准；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed_grazing_and_browse` | `buffalo_production` | 饲料、牧草、采食和放牧摄入 | 发票、日粮日志、饲料库存及牧场或采食记录 | 饲料身份；来源；原样质量；干物质；组成；剩料；面积；放养时间；动物类别 | 实测发料和库存核对加有记录的摄入计算；原始汇总要求：按饲料-类别-期间计算净摄入并保留换算基准。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 原样、kg 干物质、ha-day | 日常发料或期间汇总 | 所有饲喂阶段 | 仓库、地块、牧区、牛舍组和群组 | 每参考流 | 发票、供应商规格、水分结果、放牧证据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_water_and_cooling` | 所有过程 | 饮用、清洁、降温、泡水和粪污用水 | 计量表、水箱、泵和分配记录 | 水源；用途；读数；体积；运行时；用户；期间 | 校准计量表或有记录的泵/运行时计算；原始汇总要求：按用途汇总并仅分配一次共享供应。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | m3 或 kg | 每日、每月或每批 | 完整报告期 | 水源、过程和消费者 | 每参考流 | 校准、账单、运行日志、分配表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_energy_and_assets` | 所有过程 | 能源载体和共享资产 | 计量表、发票、燃料、运行时和资产登记 | 载能体；数量；设备；服务；用户；小时；服务期；分配驱动 | 分表、发票、油箱记录、运行日志和资产登记；原始汇总要求：优先直接分配；剩余共享量仅按记录驱动分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kWh、MJ、L、kg、hours | 每月和重大操作 | 完整报告期和资产服务期 | 过程和使用组 | 每参考流 | 发票、校准、设备日志、分配表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_health_and_husbandry` | `buffalo_production` | 实体保健和饲养材料 | 药品、治疗、采购和发放记录 | 产品；物质；剂量；单位；动物类别；头数；日期；目的 | 农场登记和供应商记录；原始汇总要求：按产品身份和类别汇总；服务成本分开。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 产品原生单位和事件 | 每次使用 | 完整报告期 | 牛群和治疗组 | 每参考流 | 发票、治疗记录、兽医证据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_controlled_transport` | `buffalo_production` | 受控入场动物和饲料 | 货运、路线和称重记录 | 货物；质量；起点；终点；方式；装载距离；控制状态 | 货单、称重单和路线日志；原始汇总要求：按货物和方式汇总装载吨数乘公里。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | t、km、tkm | 每次行程 | 完整报告期 | 受控入场路线 | 每参考流 | 货单、路线证据、称重单；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_emissions_and_manure` | `buffalo_production`; `manure_management` | 肠道排放、排泄、粪污路径、甲烷、氧化亚氮和氨 | 动物、饲料、粪污、贮存、处理、回收、施用和因子记录 | 类别；数量；天数；摄入；消化率；挥发性固体；氮；路径；贮存；气候；回收；外运；施用；因子层级 | 实测加由采集活动数据进行的 IPCC 一致计算；原始汇总要求：按类别-路径-期间计算；汇总前核对碳氮转移。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 粪污、kg VS、kg N、kg 气体物种 | 每月或路径事件 | 每个动物阶段和粪污路径 | 牧地、牛舍、贮存、处理和田间路径 | 每参考流 | 实验室或供应商数据、日志、因子表、计算工作簿；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_outputs_and_attribution` | `buffalo_production`; `manure_management` | 乳、外运粪肥及其他预期产出 | 销售、转移、组成和价格记录 | 身份；数量；质量；交接；接收方；期间；价格；分配驱动 | 实测转移和签字商业或内部记录；原始汇总要求：按产出和交接汇总；保留划分和分配表。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 和已申报组成 | 每次交接 | 完整报告期 | 产品节点和接收方 | 每参考流 | 秤或表校准、发票、组成结果、签字转移；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_gate_handover` | `farm_gate_handover` | 门口投入、接受参考产出、退回动物、拒收、死亡和损失 | 批次登记和称重单 | 批次；类别；路线；投入头数和质量；产出头数和质量；退回或留存动物；拒收；损失；时间；秤 | 校准秤和批次核对；原始汇总要求：接受质量为参考产出；归一化前核对其他结果。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 和 head | 每批 | 每个移交批次 | 生产农场门口 | 每参考流 | 秤具证书、签字转移、核对表；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_reference_normalization` | 所有清单 | 报告量 ×（同一归属系统的 1 kg 接受水牛产出 / 接受产出质量） | 归属清单；接受活重 | 每 kg 参考流的数量 | `fao-leap-large-ruminants-2016` |
| `c_stock_reconciliation` | 水牛事件 | 按类别和期间满足期初 + 出生 + 购入 + 内部增加 = 接受移交 + 其他销售 + 死亡 + 淘汰 + 期末，并核对质量和头数 | 事件及称重记录 | 完整类别-期间存量平衡 | `fao-leap-large-ruminants-2016` |
| `c_feed_dry_matter` | 饲料 | 原样质量 × 实测干物质比例；汇总前保留饲料身份和期间 | 原样记录；水分结果 | 各饲料和群组期间 kg 干物质 | `ipcc-2019-livestock-manure` |
| `c_transport_service` | 受控入场运输 | 装载质量（t）× 受控装载距离（km） | 货运质量；距离；货物和方式 | 各路线 tonne-kilometres | `fao-leap-large-ruminants-2016` |
| `c_enteric_methane` | 肠道甲烷 | 按水牛类别和期间采用所选 IPCC 层级，使用采集的摄入、日粮、性能和数量数据，并保留层级及因子 | 动物日；摄入或总能；日粮；因子层级 | 各类别期间 kg CH4 | `ipcc-2019-livestock-manure` |
| `c_manure_emissions` | 粪污甲烷、N2O 和 NH3 | 按类别-路径-期间，以挥发性固体或氮、管理系统、气候、时长、回收和方法因子分别计算各气体，不合并物种 | 排泄；VS；N；路径；气候；时长；回收；因子 | 具名气体 kg 和组成轨迹 | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `c_shared_asset` | 共享基础设施和服务 | 优先实测服务，否则共享负担 × 记录的因果驱动份额；所有消费者和期间份额和为一 | 资产负担；消费者；期间；服务或替代驱动 | 每个消费者期间仅一份归属负担 | `fao-leap-large-ruminants-2016` |
| `c_multi_output` | 预期产出 | 划分可分记录；否则采用已申报物理关系；需经济分配时使用同期价格并报告敏感性 | 产出数量、属性、交接、价格、可分记录 | 各预期产出仅归属一次的负担 | `fao-leap-large-ruminants-2016`; `fao-ruminant-lca-2013` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 所有产品和废物交换 | 保留具体产品身份、状态、来源或去向及交接点；发布具体过程数据集前解析所有语义未映射身份。 | 身份确认及供应商或转移记录 |
| `dq_live_mass` | 参考流和动物事件 | 使用校准称重或有记录的代表性抽样，保留时点、类别、样本、头数和活重换算。 | 校准和称重记录 |
| `dq_route` | 路线变体 | 按动物组和期间记录路线，包括放牧或舍饲、移动、降温或泡水、挤奶和粪污路径，不得仅从地理推断路线。 | 牛群、牛舍、放牧、供水和粪污记录 |
| `dq_temporal` | 生物和共享资产负担 | 覆盖完整相关阶段或核对期初期末存量；披露排除并防止跨期重复归属。 | 群组期间平衡及归属表 |
| `dq_completeness` | 饲料、水、能源、保健、运输、粪污、排放和产出 | 将来源记录核对至过程总量，并解释缺失月份、动物组、路径或预期产出。 | 完整性报告和例外日志 |
| `dq_emission_method` | 计算排放气体 | 保留活动数据、因子来源和层级、类别、路径、气候、换算及计算版本。 | 计算工作簿和因子表 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | severity |
| --- | --- | --- | --- |
| `v_reference_identity` | 参考流 | 要求固定水牛 UUID、Mass 属性、质量单位组、1 kg 数量、农场门口状态和全部必需限定词。 | error |
| `v_handover_boundary` | 门口操作 | 拒绝在参考过程中包含屠宰、分割、屠宰场接收或移交后运输。 | error |
| `v_route_delta` | 生产路线 | 要求受管理父节点及路线特定拓扑、饲料、水或降温、移动、粪污、基础设施和计算证据；仅路线标签不足。 | error |
| `v_stock_period_balance` | 动物和期间 | 要求类别期间头数和质量核对、前阶段处理、补充和终止决策，且不得重复期初存量负担。 | error |
| `v_output_set` | 乳、活畜、粪污和损失 | 枚举预期产出和交接，区分残余物和废物，并要求一个有优先顺序的明确归属方法。 | error |
| `v_shared_burden` | 共享资产和服务 | 要求至少两个具名消费者或期间、服务边界、因果驱动、份额和为一及负担仅计一次。 | error |
| `v_manure_nitrogen` | 粪污路径和氮损失 | 核对排泄、留存、外运、施用、挥发、淋溶和存量变化的氮，不合并物种且不超过可用氮。 | error |
| `v_flow_binding` | 所有流卡 | 发布过程数据集前将每个未映射语义卡解析为一个已核实具体流；待确认卡依据前景记录和所引流身份核验依据展开。 | error |
| `v_range_use` | 暂定范围 | 推理估算范围仅用作 QA 筛查；未审查不得替代前景记录或作为通用默认值发布。 | warning |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 生产农场门口活水牛前景数据包 |
| downstream_use | `secondary_dataset`; 身份、证据和审查门槛通过后可作 `background_dataset` |
| allowed_use | 路线特定过程构建、等价边界下供应商和农场比较、清单开发及生命周期模型组装 |
| excluded_use | 将水牛肉、乳、皮张、服务、屠宰或离场运输作为参考产品；比较不同活重基准或门点；将暂定范围当作观察值 |
| required_metadata | PCR id 和版本；CPC 引用；物种或水牛类型；动物类别和必要时的性别；用途；路线；活重方法；地理范围；农场门口定义；群组和期间；阶段；饲料系统；供水和降温或泡水；粪污路径；联产品和归属；共享资产；数据来源；未解析身份 |
| required_quality_disclosure | 覆盖率和抽样；校准测量；存量、质量和氮核对；路线份额；上游数据集缺口；因子层级；分配和敏感性；暂定范围；绑定证据；例外 |
| update_trigger | 路线或门点变化；新增动物类别；饲料、水、降温、粪污、能源或联产品发生重大变化；获得更好的 UUID 或定量证据；IPCC 或 LEAP 方法修订；验证失败；报告期过期 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-large-ruminants-2016` | official_guidance | FAO LEAP, *Environmental performance of large ruminant supply chains*, 2016, https://openknowledge.fao.org/handle/20.500.14283/i6494en | 适用于水牛的大型反刍动物边界、路线、联产品、期间和数据要求 |
| `fao-gleam` | official_guidance | FAO, *Global Livestock Environmental Assessment Model*, https://www.fao.org/gleam | 水牛生产系统覆盖和路线区分 |
| `fao-ruminant-lca-2013` | literature | FAO, *Greenhouse gas emissions from ruminant supply chains — A global life cycle assessment*, 2013, https://www.fao.org/docrep/018/i3461e/i3461e.pdf | 路线类型和归属背景 |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP, *Nutrient flows and associated environmental impacts in livestock supply chains*, 2018, https://openknowledge.fao.org/handle/20.500.14283/ca1328en | 粪污、养分和氮流要求 |
| `ipcc-2019-livestock-manure` | method_factor | IPCC, *2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management*, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 水牛类别、饲料、肠道甲烷、粪污甲烷、氮和排放计算要求 |
