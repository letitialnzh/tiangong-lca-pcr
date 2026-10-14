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
| `gas_species_basis` | 甲烷和氧化亚氮产出 | 最终交换中指定化合物的质量 | kg CH4; kg N2O | 保留氮基准原始记录；在最终归一化前，将 kg N2O-N 乘以 44/28 换算为 kg N2O。已为化合物质量的数量不得再次换算。最终固定 UUID 交换使用所绑定化合物的质量，不能直接填写氮基准数量。明确原始物种与元素基准；碳当量不得替代 CH4 质量。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

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
- 数量规则：采用保留边界内损失及其生产负担的已核对饲料投入记录，依 inventory_reference_normalization 和 stage_throughput_linkage 计算可归属最终数据包交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feed_and_grazing`
- 来源：`fao-leap-small-ruminants-2016`; `ipcc-2019-livestock-manure`
本卡 QA 对象：下方摄入量范围仅校验按 calc_feed_supply_and_intake 单独记录并重建的生物摄入量，沿用该范围声明的单位及分母；不用于限定或替代饲料供应交换量，后者保留边界内未食用损失及其生产负担。不得用摄入量上下限校验供应量，也不得为满足范围而扣除损失。供应量专用范围须有独立证据；摄入及损失记录缺失时，此项摄入量 QA 未评估，不视为通过。

- 数量范围：暂定全期饲料摄入筛查
  - 范围角色：`qa_guardrail`
  - 下限：0.5
  - 上限：30
  - 单位：kg 饲料干物质/kg 参考活重
  - 基准：覆盖动物类别、路线、生长期、牧草核算和联产品系统的宽泛可替换筛查；不是默认日粮；QA 变量仅为实录生物摄入量，不是饲料供应清单数量
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

###### 设备供电点的电力（`energy_supply_electricity`）

**energy_supply 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

记录圈舍、供水、饲喂、剪毛、粪污处理、称量及直接控制羊群移动所用的外购或场内电力、燃料、热和其他载体。
分母与范围要求：每 kg 农场门口活羊

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_water_energy_transport` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy_transport`
- 来源：`fao-leap-small-ruminants-2016`；`fao-agricultural-energy`

###### 供应设备的柴油（`energy_supply_diesel`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：供应设备的柴油
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_water_energy_transport` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy_transport`
- 来源：`fao-leap-small-ruminants-2016`；`fao-agricultural-energy`

###### 过程入口的外购热量（`energy_supply_heat`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：过程入口的外购热量
- 流属性 / 单位：能源 / MJ
- 数量规则：依 `cp_water_energy_transport` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy_transport`
- 来源：`fao-leap-small-ruminants-2016`；`fao-agricultural-energy`

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

- 选定流：含脂的绵羊毛，包括剪前水洗的绵羊毛（原毛、未洗净，农场交付） `bc0047e4-c6e8-4758-b86e-887af8a1f176`
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

- 选定流：甲烷 (生物源)（排放至空气） `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
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

- 选定流：甲烷 (生物源)（排放至空气） `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
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

- 选定流：一氧化二氮（排放至空气） `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
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

###### 粪污氮引致的间接氧化亚氮排放至空气（`review_managed_sheep_production_indirect_n2o`）

适用时，由有记录的粪污氮挥发/沉降及淋溶/径流路径计算可归属间接 N2O。与直接 N2O 分开，并核对下游或所用背景/影响模型中已包含的氮去向计算。 仅适用于实际运行的 `managed_sheep_production` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氧化亚氮排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg N2O
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`ipcc-2019-livestock-manure`

###### 粪污氨排放至空气（`review_managed_sheep_production_nh3`）

采用真实物种、圈舍/贮存条件及有依据的氮流方法。逐阶段跟踪总氮和铵态氮；通用挥发氮估计可能包含其他氮物种，不能自动视为 NH3。 仅适用于实际运行的 `managed_sheep_production` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

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

## 7. 分配及联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_set_completeness` | 活羊、羊毛、奶、种用或淘汰羊及外运粪肥 | 枚举每个独立预期且已移交的产出及其 hand-off；死亡、不可用粪污和未移交残余仍为损失或废物；一个产出不得在两个 hand-off 计量。 | `fao-leap-small-ruminants-2016`; `fao-leap-nutrient-flows-2018` |
| `direct_partition_before_allocation` | 可分离羊群、活动、路线、产品和期间 | 先依据动物群、过程、计量、饲料、土地、粪污路径和期间记录划分负担，再分配共享负担。 | `fao-leap-small-ruminants-2016` |
| `economic_allocation_for_joint_products` | 不可分离的活羊、奶、毛和其他预期产品 | 直接划分后，对剩余联合负担采用申报期间有代表性的农场门口经济价值，除非经审查物理关系明确代表因果；申报价格、期间、币种和敏感性。 | `fao-leap-small-ruminants-2016` |
| `multi_period_attribution` | 跨期种羊、补充羊、长期羊群资产和产出 | 将进入、出生、补充、淘汰、死亡和产出事件连接至生物阶段和报告期；按实际服务或生产期归属长期动物及资产负担，后续群组不得再次归属。 | `fao-leap-small-ruminants-2016` |
| `shared_infrastructure_attribution` | 群体或期间共享的圈舍、围栏、供水、保定、剪毛、车辆和粪污系统 | 识别全部消费群体或活动及服务期；优先采用计量或活动专用使用量，其次采用动物日或活重—时间；记录动因且每项负担仅计一次。 | `fao-leap-small-ruminants-2016` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock_events` | managed_sheep_production | 动物进入、出生、阶段转移、销售、淘汰及参考产出 | 羊群登记、称量、销售或移交记录 | 动物或批次 id；类别；性别；用途；重要时的品种；事件；日期；头数；活重；称重点；来源或去向 | 与羊群记录相连的校准个体或批次称量；原始汇总要求：核对期初存栏 + 进入 + 出生 = 期末存栏 + 转移 + 销售 + 死亡，再以移交活重归一化。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头和 kg 活重 | 每次事件 | 完整群组或代表性报告期 | 全部代表羊群及农场门口移交点 | 每参考流 | 秤校准、签署移交、羊群登记核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed_and_grazing` | managed_sheep_production | 饲料和饲草投入 | 发票、日粮、牧场及放牧日志、转群记录 | 饲料身份；来源；原物质量；干物质；动物类别；放牧面积与时间；剩料 | 称量供应饲料；无法直接测量时以申报的经审查方法推导牧草摄入；原始汇总要求： 按 calc_feed_supply_and_intake 区分承担生产负担的饲料投入、实际采食量及损失；保留原生库存及期间记录，可归属量对合格最终产出归一化一次。 | kg 原物和 kg 干物质 | 饲喂事件或期间 | 群组或报告期全部生物阶段 | 羊群、牧地和圈舍单元 | 每参考流 | 发票、称量、饲料分析、牧场和移动记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_health_products` | managed_sheep_production | 兽医和健康产品 | 治疗登记和采购记录 | 产品；配方或活性成分；剂量；数量；动物类别；日期；原因；废弃 | 治疗日志与采购、库存核对；原始汇总要求：按配方汇总实际施用和废弃量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | dose、kg 或 L | 每次治疗 | 完整群组或报告期 | 全部代表羊群 | 每参考流 | 签署治疗登记、发票、库存核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_water_energy_transport` | managed_sheep_production | 供应水、能源及进场运输 | 表计、发票、燃料和行程日志 | 水源及数量；能源载体及数量；表计 id；活动；货物；质量；距离；车辆；日期 | 表计、发票、油箱记录、里程或路线记录；原始汇总要求：有分表时直接归属；否则按有据工时、动物日或活重—时间分配。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | m3、kg、L、kWh、MJ 和 t*km | 每月、每程或每事件 | 完整群组或报告期 | 农场、放牧支持、圈舍、保定、粪污和纳入的移动活动 | 每参考流 | 校准、发票、表计照片、运输单、分摊工作表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_outputs_and_losses` | managed_sheep_production | 羊毛、奶、外运粪污、死亡及其他产出或损失 | 剪毛、奶、粪污移交、死亡和废物记录 | 产出身份；质量；湿/干或成分基准；动物群；日期；去向；损失原因；最终去向 | 称量或计量每项产出；依据记录活重或有据类别平均值估算死亡质量；原始汇总要求：按产出身份和 hand-off 汇总；区分预期产品、内部使用、残余和废物。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、L 和头 | 每次产出或损失 | 完整群组或报告期 | 全部代表羊群和产出 gate | 每参考流 | 称量或计量、发票、移交文件、死亡和废物日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure_and_emissions` | managed_sheep_production | 粪污路径、肠道 CH4、粪污 CH4 和直接 N2O | 动物种群、饲料、排泄、粪污路径和气候记录 | 动物类别；头数或动物日；活重；饲料或总能量；氮摄入；粪污路径；储存期；气候；方法层级；因子 | 采集羊群与粪污记录并用申报的经审查方法计算；原始汇总要求：按类别、阶段和粪污路径计算后汇总，不重复计算沉积、储存、施用或外运粪污。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg CH4、kg N2O 或 kg N2O-N、kg 粪污 | 每月或阶段 | 全部生物阶段和粪污路径 | 牧地、圈舍、储存、处理、施用及外运点 | 每参考流 | 来源记录、方法工作表、因子来源、独立路径核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_pathway_emissions` | `managed_sheep_production` | 路径专属气体及粪污氮/碳 | 动物、饲料、粪污、田间及方法台账 | 物种/类别；动物日；采食/干物质/消化率；挥发性固体；粪污氮/铵态氮；系统份额；气候；贮存时间；肥料氮；放牧；挥发/淋溶；甲烷回收；因子来源/单位；最终合格产出 ；收集粪污湿质量；干物质；去向| 按节点及期间采集一手活动数据，证明参数适用性，保留各路径计算表及链接的处理/牧地数据集  保留原始总量，可归属数量仅对实测最终合格参考产出归一化一次。| animal-day；kg DM；kg VS；kg N；kg CH4；kg N2O；kg NH3 | 各运行期间及管理变化时 | 完整所代表群体与服务期间 | 仅实际运行节点 | 每参考流 | 计量/分析记录、氮级联、方法与因子证据、防重复台账 |
| `cp_feed_supply_and_intake` | `managed_sheep_production` | 饲料投入、采食及损失 | 库存、收货、发料及损失台账 | 饲料身份/来源；群体/阶段；期间；期初/期末库存；收货；自产供给；未用退回/转出；未食用/变质质量及去向；原物/干物质；实际采食量；负担归属；合格最终产出 | 按 calc_feed_supply_and_intake 核对匹配的库存、称重、日粮/采草估算及处置记录。保留原始总量及阶段分母，生产与处理负担各归属一次，再对合格最终产出归一化。 | kg as-fed; kg DM | 每次发料及期间结算 | 完整所代表群体/期间 | 实际运行饲喂节点 | 每参考流 | 库存及供应商记录；水分证据；损失及无重复核算核对 |
| `cp_manure_n2o_coverage` | `managed_sheep_production` | 粪污/土壤直接及间接 N2O 覆盖 | 分路径氮台账及方法计算表 | 物种/类别；期间；排泄氮；阶段库存/转移；系统份额；挥发 NH3-N/NOx-N；淋溶/径流氮；施用/放牧氮；因子来源、单位及适用性；直接/间接分项；接受介质；已链接过程及归属卡；合格最终产出 | 按 calc_manure_n2o_coverage 保留原始阶段氮及分项计算，并匹配实际作业与现有粪污协议。记录缺证据或不适用路径及覆盖边界，可归属 N2O 归一化一次。 | kg N; kg N2O | 每个报告期间及管理变化 | 完整所代表管理期间 | 实际运行及明确链接节点 | 每参考流 | 氮平衡、因子单位/适用性、分项到卡片及无重复核算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_live_weight` | 全部清单行 | 归一化数量 = 期间数量 / 农场门口移交活重；保留原始期间和动物类别记录。 | 期间数量；移交活重 | 每 kg 参考活重的数量 | `fao-leap-small-ruminants-2016` |
| `reconcile_flock_balance` | 羊群事件 | 期初头数 + 进入 + 出生 = 期末头数 + 活体转移 + 活体销售 + 死亡；类别变化须连接而不是视作新动物。 | 羊群事件记录 | 头数核对和异常 | `fao-leap-small-ruminants-2016` |
| `calculate_feed_dry_matter` | 饲料和饲草 | 干物质数量 = 原物数量 × 实测或供应者干物质比例；放牧摄入采用申报的经审查估算方法。 | 原物质量；干物质比例；放牧记录 | kg 饲料干物质 | `fao-leap-small-ruminants-2016` |
| `calculate_enteric_methane` | 肠道甲烷 | 按绵羊类别和期间应用申报的 IPCC 层级或经审查方法，并保留活动数据和因子来源。 | 动物类别；种群或动物日；饲料或总能量；因子 | kg CH4 | `ipcc-2019-livestock-manure` |
| `calculate_manure_emissions` | 粪污甲烷和直接氧化亚氮 | 按动物类别、排泄及粪污路径应用声明的经审查公式。保留氮基准原始记录；在最终归一化前，将 kg N2O-N 乘以 44/28 换算为 kg N2O。已为化合物质量的数量不得再次换算。最终固定 UUID 交换使用所绑定化合物的质量，不能直接填写氮基准数量。 | 动物记录；饲料氮或排泄；粪污路径；气候；因子 | kg CH4 和 kg N2O | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `calculate_transport_service` | 纳入的公路进场运输 | 运输服务 = 运输质量（吨）× 纳入的单程距离（公里）。 | 货物质量；距离 | t*km | `fao-leap-small-ruminants-2016` |
| `calc_pathway_emissions` | `managed_sheep_production` | 采用物种和管理方式相容的方法，保留分路径总量。N2O-N 乘 44/28 转为 N2O，NH3-N 乘 17/14 转为 NH3，且恰换算一次；已为分子质量者不得重算。依据有记录的可用碳/甲烷潜力平衡检查甲烷，并按各阶段可用氮核对氮损失。已挥发氮引致的间接形成是下游转化，不是源阶段第二次氮损失。归属及归一化只做一次，不重复计入链接处理或去向模型中的排放。  物理筛查采用分配前、同一原始期间的数量：CH4 质量 × 12/16 不得超过所代表路径的可用碳；源阶段 NH3 质量 × 14/17、直接 N2O 质量 × 28/44 与其他源阶段氮损失之和，在核对库存及转移后不得超过该阶段可用氮。各项间接 N2O-N 计算以有记录的挥发氮或淋溶氮前体为上限，不再从源台账扣除该下游转化。这些是守恒检查，不是排放因子或经验单位产品区间。| `cp_pathway_emissions` | 每最终参考流的指定化合物 kg | `ipcc-2019-livestock-manure`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `feed_forage_supply` | 所代表作业使用的饲料投入 = 期初饲料库存 + 收货 + 进入本作业的自产饲料 - 期末饲料库存 - 有记录的未用退回或转出。该投入保留边界内变质、拒食及被丢弃的剩余料。实际采食量 = 该投入 - 实测未食用/丢弃损失，并匹配水分/干物质与期间；采食量仅用于营养及代谢计算。期初库存承接原有负担，不是再次采购。追溯未用退回或转出的物料及负担去向，不自动给予替代抵扣。同一饲料的生产负担由采购饲料数据集或已建模自产作物/采集节点承担一次，不得两者并计。实际废料处理及粪污贡献计一次，不再次添加饲料生产负担。 | `cp_feed_supply_and_intake` | 同一原物/干物质基准下分开的饲料投入、采食及损失数量 | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `manure_direct_n2o_air`; `review_managed_sheep_production_indirect_n2o` | 按真实粪污阶段，采用有记录的物种/系统活动量及因子基准，分别计算直接 N2O、挥发/沉降引致间接 N2O，以及适用的淋溶/径流引致间接 N2O。N2O-N 乘 44/28 恰换算一次为分子态 N2O；已为分子质量的不得再次换算。保留分项计算表。现有 N2O 卡同时覆盖直接与间接排放时，填报其不重叠总和；已有直接/间接独立卡时，每个分项只归入对应卡，不再另报总和。放牧沉积及田间施用采用管理土壤方法，不套用粪污贮存因子。明确前景与已链接处理/牧地数据的核算责任；粪污转出不消除此前排放，已覆盖的下游排放不得重复。氮级联核对库存、转移及此前氮损失；间接 N2O 是前体的下游转化，不再次视为源阶段氮损失。可归属分子质量对合格参考产出归一化一次。记录不适用依据；路径数据缺失不等于零。 | `cp_manure_n2o_coverage` | 按路径及现有归属卡分开的 kg 分子态 N2O | `ipcc-2019-livestock-manure`; `review-ipcc-soils-2019` |

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
| `v_pathway_emission_coverage` | `managed_sheep_production` | 要求路径覆盖台账，包含生物学适用时的肠道 CH4、粪污 CH4、直接/间接 N2O、NH3 及相关田间排放。每条路径须有实测/计算量、覆盖匹配的明确链接过程，或有依据的不适用结论；缺数据不得记零。捕获前的野生生活不纳入受管理饲养，实际受管理留置须另行评估，并保留物种专属证据。 | `ipcc-2019-livestock-manure`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | 实际运行节点及链接服务 | 适用时记录现场燃料燃烧及制冷剂泄漏的核算责任：须为量化前景排放，或明确覆盖它们的具名链接过程，不能仅凭燃料供应或电力生产投入视为已包含。特殊类群生物及残余物排放须依物种/路线证据评估，不套通用畜牧因子。标明尚未落实的路径，不宣称清单完整；记录有依据的不存在结论并防止上/下游重复核算。 | |
| `v_feed_supply_intake_separation` | 全部饲料投入 | 拒绝扣除边界内拒食、变质或丢弃剩余料且未保留其生产负担的上游饲料清单。按 calc_feed_supply_and_intake 核对投入、采食、库存、转移及损失去向。不得把采食量当作饲料投入，不得假设自产饲料零负担或自动给予替代产品抵扣。 | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | 适用粪污及管理土壤氮路径 | 须明确直接及间接路径覆盖、阶段氮平衡及分子质量换算。按 calc_manure_n2o_coverage，将各分项归入现有 N2O 卡或明确覆盖的已链接过程一次。间接路径证据缺失时不得宣称完整；不得默认零值或把汇总值与分项重复并计。 | `ipcc-2019-livestock-manure`; `review-ipcc-soils-2019` |

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
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 氮流方法；采用参数前核实实际物种、管理方式及地域适用性 |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | 管理土壤直接及间接氮路径与边界核对 |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | 饲料投入、采食及废料负担的区分，不提供动物参数。将该核算原则用于声明类群是本 PCR 的方法学选择；不移植猪的日粮或排放因子。 |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
