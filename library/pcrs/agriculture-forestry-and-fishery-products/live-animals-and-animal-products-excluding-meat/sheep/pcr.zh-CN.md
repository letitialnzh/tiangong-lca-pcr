---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.sheep
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 农场门口活羊

## 1. 范围与适用性

本 PCR 适用于为肉、毛、奶、繁殖、补充或混合目的饲养，并在生产农场门口以活体状态移交的家养绵羊。受管理生物生产边界包括进入系统的种用或补充羊只、存在时的配种与妊娠、产羔、羔羊培育、放牧或舍饲、动物健康、作为羊群管理的剪毛、用水和能源、粪污路径、选育或育肥、活重称量以及控制权移交。

参考产品不包括山羊及其他反刍动物、羊肉和胴体、原奶、作为单独参考产品出售的原毛或羊毛、羊皮、单独出售的畜牧或兽医服务、出场后的运输及进入屠宰场后的动物。粗放放牧或转场、混合及舍饲或集约路线仅可在饲料、移动、基础设施、粪污和排放记录可分别保留时合并申报；否则必须选择一种明确路线。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.sheep |
| classification_refs | CPC 3.0: 02122 Sheep |
| covered_products | 在生产农场门口移交的家养活羊；当参考产出仍为活体动物时，包括肉用、毛用、奶用、繁殖、补充、淘汰或混合用途羊只。 |
| excluded_products | 山羊及其他反刍动物；肉或胴体；原奶；作为单独参考产品的原毛或羊毛；羊皮；精液或胚胎；畜牧或兽医服务；屠宰及出场后运输。 |
| representative_product | 在农场门口移交控制权之前即时称量的家养活羊。 |
| production_route | 母活动为受管理生物生产。申报路线包括粗放放牧或转场、放牧—舍饲混合及舍饲或集约生产；路线差异改变饲料来源、移动、圈舍及共享基础设施、粪污路径、能源和排放计算。 |
| market_state | 活体且适于申报用途和移交；须申报动物类别与用途、重要时的性别、生产系统、活重计量基础、地域及报告期或群组周期。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 生产农场门口的家养活羊，位于出场后运输或屠宰之前。 |
| How much | 1 kg 活重。 |
| How well | 申报动物类别与用途、重要时的性别、生产系统、与移交有关的健康或适运状态，以及活重计量基础。 |
| How long or cycle | 一个明确的群组周期或报告期，在不重复归属的前提下连接繁殖/补充、培育、移交、死亡、联产品和共享资产。 |
| reference_flow_link | `live_sheep_reference_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 生产农场门口的家养活羊 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 动物类别与用途；重要时的性别；重要时的品种或基因型；生产系统路线；放牧或圈舍制度；活重计量基础及称重点；地域；农场门口移交点；群组周期或报告期 |

尚未确认与生产农场门口、活羊、活重质量均相容的产品流，因此参考产品流 UUID 保持空白。独立确认的质量属性及质量单位组支持身份已列于上表；这些支持引用不构成产品流绑定。头数可保留为并行活动数据，但不能替代实测活重质量。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_weight_mass` | 参考活羊 | 质量 | kg | 采用在生产农场门口移交所有权或控制权之前即时测得的活重；记录称重点、禁食或胃内容物约定，以及个体或批次质量。 |
| `headcount_to_mass` | 动物头数、进入、出生、死亡和移交 | 质量 | kg | 头数记录在换算为 kg 前必须包含动物类别及实测或抽样平均活重，并保留头数与换算证据。 |
| `feed_mass_basis` | 放牧饲草、贮藏饲草、精料、副产品、补充料和代乳品 | 质量 | kg 干物质和 kg 原物 | 保留原物数量及实测或供应者干物质比例；无换算证据不得合并湿基与干基记录。 |
| `water_measurement_basis` | 供应的饮水与作业用水 | 质量或体积 | kg 或 m3 | 单独记录供水，不把降雨和非管理地表水作为 Product 投入；无水表时披露估算方法。 |
| `gas_species_basis` | 甲烷和氧化亚氮产出 | 指定气体或元素基准的质量 | kg CH4、kg N2O 或 kg N2O-N | 保留物种与基准；无明确换算不得混用 CH4 与碳当量或 N2O 与 N2O-N。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 进入所代表羊群的种用或补充羊只，以及跨越农场边界的外购饲料、饲草、水、能源、健康产品和其他管理投入。 |
| starting_condition_role | 进入的羊群和管理投入构成前景受管理生物生产责任的起点；出生、生长、健康管理、放牧或圈舍、剪毛、粪污处理以及选育或育肥均位于边界内。 |
| product_classification_scope | 对应 CPC 3.0 02122 的活羊；奶、毛、粪肥、肉、皮和服务仍为另行分类的产出或活动。 |
| recursive_input_rule | 从其他生产者进入的活羊以其供应者数据集作为上游活羊 Product 投入；不得在接收农场过程中递归重建其移交前生产。 |
| upstream_dataset_requirement | 对购入或转入的活羊、饲料和饲草、健康产品、能源载体、供应水及重要的进场运输要求供应者数据集；未解析身份保留语义直至选择经核实 UUID。 |
| disclosure | 申报动物类别与用途、路线、放牧及圈舍制度、饲料边界、繁殖/补充处理、粪污路径、剪毛和挤奶处理、共享资产及服务期、群组或报告期、地域、称重点和农场门口移交。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `managed_flock_boundary` | 全部绵羊生产路线 | 包括存在时的受管理繁殖、出生、培育、放牧或舍饲、动物健康、作为羊群管理的剪毛、水和能源、肠道排放、粪污路径、选育或育肥以及农场门口称量；排除屠宰、剥皮、胴体处理和出场后运输。 | `fao-leap-small-ruminants-2016` |
| `alternative_route_declaration` | 粗放、转场、混合及舍饲或集约路线 | 识别受管理生物生产母活动并申报所选路线；保留路线特定的饲料、移动、圈舍、基础设施、粪污、能源和计算记录。互斥路线不得混合，除非分别计量并透明汇总。 | `fao-leap-small-ruminants-2016` |
| `period_and_phase_linkage` | 繁殖、妊娠、产羔、培育、育肥、淘汰和移交 | 将投入、产出、死亡、补充事件和共享资产索引到引起它们的群组或报告期及生物阶段，并披露不完整周期。 | `fao-leap-small-ruminants-2016` |
| `shared_infrastructure_boundary` | 多羊群或多期间使用的圈舍、围栏、供水、车辆、保定与剪毛设施 | 识别共享资产、消费羊群或过程活动、服务期及所选归属动因；每项服务负担仅计一次。 | `fao-leap-small-ruminants-2016` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_sheep_production` | 受管理羊群生产及农场门口移交 | required | 活羊农场门口产品始终要求；仅在实际存在并有记录时纳入繁殖、奶、毛、放牧、圈舍和粪污子路线。 | 具有明确路线差异的前景受管理生物生产，包括产出选择、称量和移交。 | 生产农场门口 1 kg 活羊；保留头数、动物日、群组和报告期记录。 |

### 过程：受管理羊群生产及农场门口移交（`managed_sheep_production`）

#### 输入

##### 产品流

###### 种用和补充羊只（`breeding_replacement_sheep`）

记录从前景历史外部进入所代表羊群的活羊。同一代表群组内出生并留用的羊只是内部流转，不得再次计为购入投入。

分母与范围要求：每 kg 农场门口活羊及申报群组或报告期

- 选定流：种用或补充活羊（UUID 未解析）
- 流属性/单位：质量 / kg 活重；并行保留头数
- 数量规则：记录进入头数、动物类别、来源、进入日期及实测活重；按实际服务期或所代表后代与产出归属进入负担。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_flock_events`
- 来源：`fao-leap-small-ruminants-2016`
- 数量范围：暂定补充羊筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：2
  - 单位：kg 进入活重/kg 参考活重
  - 基准：覆盖自繁补充与外购补充系统的宽泛可替换筛查范围
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 饲料和饲草供应（`feed_forage_supply`）

记录实际进入羊群日粮的每种饲料，包括范围内的放牧饲草、贮藏饲草、精料、副产品、补充料和代乳品；不绑定通用饲料 UUID。

分母与范围要求：每 kg 农场门口活羊

- 选定流：按实际产品身份区分的绵羊饲料和饲草（UUID 未解析）
- 流属性/单位：质量 / kg 干物质和 kg 原物
- 数量规则：按动物类别、阶段、来源和干物质基准记录采食或供应量；重要时保留牧草分配和剩料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feed_and_grazing`
- 来源：`fao-leap-small-ruminants-2016`; `ipcc-2019-livestock-manure`
- 数量范围：暂定全期饲料摄入筛查
  - 范围角色：`qa_guardrail`
  - 下限：0.5
  - 上限：30
  - 单位：kg 饲料干物质/kg 参考活重
  - 基准：覆盖动物类别、路线、生长期、牧草核算和联产品系统的宽泛可替换筛查；不是默认日粮
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 兽医和羊群健康产品（`flock_health_products`）

按配方和用途记录实际使用的疫苗、药品、消毒剂、矿物处理剂及其他外购健康产品；单独出售的兽医服务不是参考产品。

分母与范围要求：每 kg 农场门口活羊

- 选定流：按实际配方区分的兽医和羊群健康产品（UUID 未解析）
- 流属性/单位：质量、体积或剂量 / kg、L 或 dose
- 数量规则：记录产品、活性成分或配方、剂量、处理动物类别、日期和废弃量；未使用时记零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_health_products`
- 来源：`fao-leap-small-ruminants-2016`
- 数量范围：暂定羊群健康产品筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：0.1
  - 单位：kg 或 L 配方产品/kg 参考活重
  - 基准：宽泛条件筛查；以治疗和采购记录替换，不得解释为推荐剂量
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 供应水（`supplied_water`）

记录跨越农场过程边界的饮水、清洗、降温及其他供应水；降雨和非管理地表水是场址条件而不是 Product 投入。

分母与范围要求：每 kg 农场门口活羊

- 选定流：供应的作业用水
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：按用途、动物类别和期间记录计量供水或有据估算，并保留水源及排放或粪污路径。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water_energy_transport`
- 来源：`fao-leap-small-ruminants-2016`
- 数量范围：暂定供水筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：2
  - 单位：m3/kg 参考活重
  - 基准：覆盖不同气候和路线的饮水与管理作业用水的宽泛可替换筛查
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 能源供应（`energy_supply`）

记录圈舍、供水、饲喂、剪毛、粪污处理、称量及直接控制羊群移动所用的外购或场内电力、燃料、热和其他载体。

分母与范围要求：每 kg 农场门口活羊

- 选定流：受管理绵羊生产能源载体供应
- 流属性/单位：能量或载体数量 / kWh、MJ、L 或 kg
- 数量规则：按活动和期间分别记录每种载体，并为共享能源系统保留计量或分摊证据。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water_energy_transport`
- 来源：`fao-leap-small-ruminants-2016`
- 数量范围：暂定农场能源筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kWh-equivalent/kg 参考活重
  - 基准：覆盖低投入放牧和舍饲系统的宽泛可替换筛查；保留实际载体单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 进场运输服务（`inbound_transport_service`）

仅当进场移动属于申报的前景责任时纳入货物或动物运输；参考羊只移交后的运输不在范围内。

分母与范围要求：每 kg 农场门口活羊

- 选定流：按实际方式区分的进场公路货运服务
- 流属性/单位：货物运输 / t*km
- 数量规则：每次纳入的进场移动按运输质量乘以受控单程距离计算，并保留货物、装载率和路线。
- 数值来源模式：`calculated_value`
- 适用范围：`route_specific`
- 归一化基准：每参考流
- 基准类型：`transport_service`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water_energy_transport`
- 数量范围：暂定进场运输筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：t*km/kg 参考活重
  - 基准：纳入公路移动的宽泛条件筛查；无前景进场移动时零有效
  - 基准类型：`transport_service`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 活羊参考产出（`live_sheep_reference_output`）

记录在生产农场门口移交所有权或控制权前即时称量的活羊；不以肉、毛、奶、服务、山羊或羊皮近似项替代。

分母与范围要求：农场门口 1 kg 活羊

参考产出的原始记录：按动物类别、重要时的性别、路线、批次、称重点和移交日期记录合格活重与头数；归一化为 1 kg。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

- 选定流： 生产农场门口的家养活羊
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`product_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_flock_events`
- 来源：`fao-leap-small-ruminants-2016`
- 数量范围：参考归一化检查
  - 范围角色：`allowed_range`
  - 下限：1
  - 上限：1
  - 单位：kg 参考活重
  - 基准：一个合规数据集结果的归一化参考产出
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 羊毛或原毛联产品（`wool_coproduct`）

仅在羊毛或原毛为独立预期、经计量并移交时记录；无产品移交的常规剪毛残余不是预期联产品。

分母与范围要求：每 kg 活羊参考产出及报告期

- 选定流：Shorn wool, greasy, including fleece-washed shorn wool `bc0047e4-c6e8-4758-b86e-887af8a1f176`
- 绑定：固定（`fixed`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录剪毛质量、含水或含脂基准、动物群、等级及移交；非毛用产出时记不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outputs_and_losses`
- 来源：`fao-leap-small-ruminants-2016`
- 数量范围：暂定羊毛产出筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1
  - 单位：kg 原毛/kg 参考活重
  - 基准：覆盖毛用、肉用、奶用和脱毛型系统的宽泛条件筛查；以剪毛记录替换
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 奶联产品（`milk_coproduct`）

仅在羊奶被有意回收、计量并移交时记录；羔羊摄入的奶属于内部生物生产。逐批分别记录温乳或冷藏状态、温度和实际交付门。本宽口径卡不固定 UUID；只有实际冷藏且交付门匹配的批次，才能在身份确认后采用冷藏农场门身份。不得根据 UUID 假定发生了冷却；仅在实际冷却时纳入交付前实测冷却投入和损失。

分母与范围要求：每 kg 活羊参考产出及报告期

- 选定流：交付状态与交付门明确的绵羊原奶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录可售奶质量、生产期、重要时的成分或固形物基准以及移交点；非挤奶系统记不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outputs_and_losses`
- 来源：`fao-leap-small-ruminants-2016`
- 数量范围：暂定奶产出筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg 生羊奶/kg 参考活重
  - 基准：覆盖非奶用与奶业关联羊群的宽泛条件筛查；以奶收集记录替换
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 外运粪肥联产品（`exported_manure_coproduct`）

仅在粪污被独立预期、计量并移交使用时作为 Product 产出记录；留在牧场、自用储存或废弃的粪污仍属于营养与排放核算或废物。

分母与范围要求：每 kg 活羊参考产出及报告期

- 选定流：按实际管理状态区分的外运羊粪（UUID 未解析）
- 流属性/单位：质量 / kg 湿重以及 kg 干物质或养分含量
- 数量规则：记录外运质量、干物质、可得时的氮含量、储存状态、去向和日期；避免同一粪污又作为废物或土地沉积养分出现。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_manure_and_emissions`
- 来源：`fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- 数量范围：暂定外运粪污筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：50
  - 单位：kg 湿粪/kg 参考活重
  - 基准：宽泛条件筛查；以移交称量和含水率记录替换
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 死亡及不可用动物物料（`mortality_waste`）

按质量和去向记录死亡羊只及不可用动物物料；无单独产品移交时，它们是损失或废物而非联产品。

分母与范围要求：每 kg 农场门口活羊

- 选定流：按实际处理路线区分的羊只死亡废物（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：记录头数、估算或实测活体/死体质量、动物类别、日期、已知时的死因以及处理或处置路线。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs_and_losses`
- 来源：`fao-leap-small-ruminants-2016`
- 数量范围：暂定死亡损失筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1
  - 单位：kg 死亡废物/kg 参考活重
  - 基准：宽泛可替换筛查；损失接近产出质量时须调查
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 排入空气的肠道甲烷（`enteric_methane_air`）

使用申报的 IPCC 层级或其他经审查方法，依据动物类别、饲料摄入或总能量及方法记录计算甲烷；排入未指定空气区室时采用已核实的生物源甲烷身份。

分母与范围要求：每 kg 农场门口活羊

- 选定流：methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 绑定：固定（`fixed`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- 数量规则：按动物类别和期间，根据采集的种群与饲料或总能量记录计算，并保留方法层级和因子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_manure_and_emissions`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定肠道甲烷筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：kg CH4/kg 参考活重
  - 基准：宽泛可替换筛查，不是 IPCC 默认因子
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 排入空气的粪污管理甲烷（`manure_methane_air`）

按动物类别、挥发性固体基准、粪污管理路径、气候和储存期计算甲烷，并与肠道甲烷分开。

分母与范围要求：每 kg 农场门口活羊

- 选定流：methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 绑定：固定（`fixed`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- 数量规则：使用申报的经审查方法和因子，根据采集的动物、饲料、排泄和粪污路径记录计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_manure_and_emissions`
- 来源：`ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- 数量范围：暂定粪污甲烷筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：2
  - 单位：kg CH4/kg 参考活重
  - 基准：宽泛可替换筛查，不是 IPCC 默认因子
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 粪污直接氧化亚氮排入空气（`manure_direct_n2o_air`）

依据氮排泄量及申报的粪污管理或沉积路径计算直接氧化亚氮，并保留记录和因子采用 N2O 还是 N2O-N。

分母与范围要求：每 kg 农场门口活羊

- 选定流：nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：固定（`fixed`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O 或 kg N2O-N
- 数量规则：按粪污路径和期间，根据采集的动物种群、饲料氮、排泄及管理记录计算，并保留物种基准换算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_manure_and_emissions`
- 来源：`ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- 数量范围：暂定直接 N2O 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：0.1
  - 单位：kg N2O/kg 参考活重
  - 基准：换算为 N2O 质量后的宽泛可替换筛查；不是 IPCC 默认因子
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

## 7. 分配及联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_set_completeness` | 活羊、羊毛、奶、种用或淘汰羊及外运粪肥 | 枚举每个独立预期且已移交的产出及其 hand-off；死亡、不可用粪污和未移交残余仍为损失或废物；一个产出不得在两个 hand-off 计量。 | `fao-leap-small-ruminants-2016`; `fao-leap-nutrient-flows-2018` |
| `direct_partition_before_allocation` | 可分离羊群、活动、路线、产品和期间 | 先依据动物群、过程、计量、饲料、土地、粪污路径和期间记录划分负担，再分配共享负担。 | `fao-leap-small-ruminants-2016` |
| `economic_allocation_for_joint_products` | 不可分离的活羊、奶、毛和其他预期产品 | 直接划分后，对剩余联合负担采用申报期间有代表性的农场门口经济价值，除非经审查物理关系明确代表因果；申报价格、期间、币种和敏感性。 | `fao-leap-small-ruminants-2016` |
| `multi_period_attribution` | 跨期种羊、补充羊、长期羊群资产和产出 | 将进入、出生、补充、淘汰、死亡和产出事件连接至生物阶段和报告期；按实际服务或生产期归属长期动物及资产负担，后续群组不得再次归属。 | `fao-leap-small-ruminants-2016` |
| `shared_infrastructure_attribution` | 群体或期间共享的圈舍、围栏、供水、保定、剪毛、车辆和粪污系统 | 识别全部消费群体或活动及服务期；优先采用计量或活动专用使用量，其次采用动物日或活重—时间；记录动因且每项负担仅计一次。 | `fao-leap-small-ruminants-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock_events` | managed_sheep_production | 动物进入、出生、阶段转移、销售、淘汰及参考产出 | 羊群登记、称量、销售或移交记录 | 动物或批次 id；类别；性别；用途；重要时的品种；事件；日期；头数；活重；称重点；来源或去向 | 与羊群记录相连的校准个体或批次称量；原始汇总要求：核对期初存栏 + 进入 + 出生 = 期末存栏 + 转移 + 销售 + 死亡，再以移交活重归一化。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头和 kg 活重 | 每次事件 | 完整群组或代表性报告期 | 全部代表羊群及农场门口移交点 | 每参考流 | 秤校准、签署移交、羊群登记核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed_and_grazing` | managed_sheep_production | 饲料和饲草投入 | 发票、日粮、牧场及放牧日志、转群记录 | 饲料身份；来源；原物质量；干物质；动物类别；放牧面积与时间；剩料 | 称量供应饲料；无法直接测量时以申报的经审查方法推导牧草摄入；原始汇总要求：按饲料身份和动物类别汇总；保留摄入估算方法并按动物日或实测使用量分配牧草。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 原物和 kg 干物质 | 饲喂事件或期间 | 群组或报告期全部生物阶段 | 羊群、牧地和圈舍单元 | 每参考流 | 发票、称量、饲料分析、牧场和移动记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_health_products` | managed_sheep_production | 兽医和健康产品 | 治疗登记和采购记录 | 产品；配方或活性成分；剂量；数量；动物类别；日期；原因；废弃 | 治疗日志与采购、库存核对；原始汇总要求：按配方汇总实际施用和废弃量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | dose、kg 或 L | 每次治疗 | 完整群组或报告期 | 全部代表羊群 | 每参考流 | 签署治疗登记、发票、库存核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_water_energy_transport` | managed_sheep_production | 供应水、能源及进场运输 | 表计、发票、燃料和行程日志 | 水源及数量；能源载体及数量；表计 id；活动；货物；质量；距离；车辆；日期 | 表计、发票、油箱记录、里程或路线记录；原始汇总要求：有分表时直接归属；否则按有据工时、动物日或活重—时间分配。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | m3、kg、L、kWh、MJ 和 t*km | 每月、每程或每事件 | 完整群组或报告期 | 农场、放牧支持、圈舍、保定、粪污和纳入的移动活动 | 每参考流 | 校准、发票、表计照片、运输单、分摊工作表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_outputs_and_losses` | managed_sheep_production | 羊毛、奶、外运粪污、死亡及其他产出或损失 | 剪毛、奶、粪污移交、死亡和废物记录 | 产出身份；质量；湿/干或成分基准；动物群；日期；去向；损失原因；最终去向 | 称量或计量每项产出；依据记录活重或有据类别平均值估算死亡质量；原始汇总要求：按产出身份和 hand-off 汇总；区分预期产品、内部使用、残余和废物。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、L 和头 | 每次产出或损失 | 完整群组或报告期 | 全部代表羊群和产出 gate | 每参考流 | 称量或计量、发票、移交文件、死亡和废物日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure_and_emissions` | managed_sheep_production | 粪污路径、肠道 CH4、粪污 CH4 和直接 N2O | 动物种群、饲料、排泄、粪污路径和气候记录 | 动物类别；头数或动物日；活重；饲料或总能量；氮摄入；粪污路径；储存期；气候；方法层级；因子 | 采集羊群与粪污记录并用申报的经审查方法计算；原始汇总要求：按类别、阶段和粪污路径计算后汇总，不重复计算沉积、储存、施用或外运粪污。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg CH4、kg N2O 或 kg N2O-N、kg 粪污 | 每月或阶段 | 全部生物阶段和粪污路径 | 牧地、圈舍、储存、处理、施用及外运点 | 每参考流 | 来源记录、方法工作表、因子来源、独立路径核对；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_live_weight` | 全部清单行 | 归一化数量 = 期间数量 / 农场门口移交活重；保留原始期间和动物类别记录。 | 期间数量；移交活重 | 每 kg 参考活重的数量 | `fao-leap-small-ruminants-2016` |
| `reconcile_flock_balance` | 羊群事件 | 期初头数 + 进入 + 出生 = 期末头数 + 活体转移 + 活体销售 + 死亡；类别变化须连接而不是视作新动物。 | 羊群事件记录 | 头数核对和异常 | `fao-leap-small-ruminants-2016` |
| `calculate_feed_dry_matter` | 饲料和饲草 | 干物质数量 = 原物数量 × 实测或供应者干物质比例；放牧摄入采用申报的经审查估算方法。 | 原物质量；干物质比例；放牧记录 | kg 饲料干物质 | `fao-leap-small-ruminants-2016` |
| `calculate_enteric_methane` | 肠道甲烷 | 按绵羊类别和期间应用申报的 IPCC 层级或经审查方法，并保留活动数据和因子来源。 | 动物类别；种群或动物日；饲料或总能量；因子 | kg CH4 | `ipcc-2019-livestock-manure` |
| `calculate_manure_emissions` | 粪污甲烷和直接氧化亚氮 | 按动物类别、排泄及粪污路径应用经审查公式；仅以明确分子量比将 N2O-N 换算为 N2O。 | 动物记录；饲料氮或排泄；粪污路径；气候；因子 | kg CH4 和 kg N2O | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `calculate_transport_service` | 纳入的公路进场运输 | 运输服务 = 运输质量（吨）× 纳入的单程距离（公里）。 | 货物质量；距离 | t*km | `fao-leap-small-ruminants-2016` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_gate` | 参考产出 | 申报动物类别与用途、路线、地域、群组或期间、称重点、活重约定和农场门口移交。 | 羊群登记、称量、移交文件、数据集元数据 |
| `route_specificity` | 全部投入与产出 | 当粗放或转场、混合、舍饲或集约路线要求不同时分别保留饲料、移动、基础设施、粪污和排放记录。 | 路线说明、放牧和圈舍记录、汇总工作表 |
| `temporal_completeness` | 羊群和资产记录 | 覆盖对申报产出有实质贡献的全部生物阶段和事件；披露部分周期数据及上游数据集。 | 羊群日历、事件登记、补充和淘汰记录 |
| `output_and_loss_completeness` | 全部产出类别 | 核对活羊、羊毛、奶、外运粪污、死亡、期末存栏和内部使用，并解释每项省略的条件产出。 | 产出、移交、库存、死亡和废物记录 |
| `manure_pathway_consistency` | 营养与排放行 | 核对牧场沉积、圈舍收集、储存、处理、施用、外运和废弃，避免同一粪污或氮被归属两次。 | 粪污路径工作表、土地施用和移交记录 |
| `shared_burden_traceability` | 共享基础设施和服务 | 保留消费群体、服务期、计量、归属动因及负担只计一次的证据。 | 表计、运行日志、动物日或活重—时间工作表 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产出 | 拒绝以羊肉、羊毛、奶、羊皮、山羊或服务身份替代活羊，或缺少农场门口活重基础的数据集；具体数据集发布前必须解析相容平台 UUID。 | `fao-leap-small-ruminants-2016` |
| `validate_route_resolution` | 替代生产路线 | 要求一种申报路线或对分别记录路线透明汇总，并确认饲料、移动、圈舍、基础设施、粪污、能源和排放记录符合路线差异。 | `fao-leap-small-ruminants-2016` |
| `validate_period_linkage` | 多期间羊群生产 | 要求期初/期末存栏、进入、出生、转移、销售、淘汰、死亡和产出事件按类别与期间核对，防止补充、繁殖、资产或产出负担在两个期间重复归属。 | `fao-leap-small-ruminants-2016` |
| `validate_output_attribution` | 活羊及条件联产品 | 要求完整的预期产出和损失集合、各 hand-off、直接划分证据及一个披露的剩余分配方法；防止毛、奶、粪污、淘汰羊或种羊在两个 hand-off 计量。 | `fao-leap-small-ruminants-2016`; `fao-leap-nutrient-flows-2018` |
| `validate_shared_infrastructure` | 共享圈舍、围栏、供水、保定、剪毛、车辆和粪污系统 | 要求至少两个消费群体、活动或期间、一个服务边界、有据归属动因及同一共享负担未重复的证据。 | `fao-leap-small-ruminants-2016` |
| `validate_manure_and_emissions` | 肠道及粪污排放行 | 要求动物类别、活动数据、粪污路径、方法层级、因子来源、气体物种与基准及路径核对；拒绝把 IPCC 因子作为实测农场清单数量。 | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `validate_flow_identity_resolution` | 待确认水、能源及运输卡 | 要求前景生成时选择一个与实际产品或载体、属性、单位、地域及用途相容且经核实的具体 UUID；待确认卡不得携带固定 UUID。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 活羊生产与移交的农场级前景数据包。 |
| downstream_use | `secondary_dataset`；在身份、分配、时间完整性及地域/路线代表性审查后可作 `background_dataset`。 |
| allowed_use | 与动物类别、用途、生产路线、地域、期间及活重基准相符的活羊农场门口清单；作为下游运输、屠宰、肉、毛、奶或繁殖模型投入。 |
| excluded_use | 羊肉或胴体生产、仅毛或仅奶参考产品、山羊、兽医或畜牧服务、屠宰场作业，或无独立过程的出场后运输。 |
| required_metadata | CPC 参考；动物类别与用途；重要时的性别；重要时的品种或基因型；路线；放牧或圈舍制度；饲料基准；粪污路径；地域；群组或报告期；共享资产处理；称重点；活重约定；农场门口移交。 |
| required_quality_disclosure | 未解析参考 UUID；前景覆盖；缺失阶段；估算方法；路线汇总；分配和价格基础；共享基础设施动因；粪污与排放方法层级及因子来源；Range 覆盖。 |
| update_trigger | 新的相容参考流身份；CPC 边界修订；农场门口约定改变；重大新路线或联产品证据；牲畜或粪污方法修订；或经审查证据替换暂定范围。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-small-ruminants-2016` | official_guidance | FAO LEAP, *Greenhouse gas emissions and fossil energy use from small ruminant supply chains*, 2016. <https://openknowledge.fao.org/handle/20.500.14283/i6434en>（检索于 2026-09-29）。 | 绵羊供应链边界、路线与过程分解、前景记录、分配、产出及期间要求 |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP, *Nutrient flows and associated environmental impacts in livestock supply chains*, 2018. <https://openknowledge.fao.org/handle/20.500.14283/ca1328en>（检索于 2026-09-29）。 | 粪污和养分路径、外运粪污区分、路径核对及质量要求 |
| `ipcc-2019-livestock-manure` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 10: Emissions from Livestock and Manure Management*. <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf>（检索于 2026-09-29）。 | 动物类别、饲料、肠道甲烷、粪污甲烷、直接氧化亚氮、方法层级、因子来源及物种基准规则 |
