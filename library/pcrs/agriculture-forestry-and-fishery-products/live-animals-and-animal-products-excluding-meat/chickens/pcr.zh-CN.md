---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.chickens
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 生产农场门口的活鸡

## 1. 范围与适用性

本 PCR 用于生产农场门口交付的家鸡活体之前景数据。涵盖作为活体交付的肉鸡、种鸡、后备鸡和蛋鸡，以及入场鸡只、饲养或产蛋、饲料、用水、禽舍、垫料与粪污、防疫、死亡、活重称量和农场交付。散养与舍饲是受管理鸡群生产的路线变体；应分别记录土地使用、饲料来源、禽舍、垫料、能源和粪污路径。

种用蛋、食用鲜蛋、鸡肉和胴体属于其他参考产品。鸡蛋或粪肥只有在同一系统中被有意生产并独立交付时才是联产品。死亡鸡只、拒收蛋和不可利用垫料属于损失或废物。屠宰、分割、场外加工和交付后的运输不在此边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.chickens` |
| classification_refs | CPC 3.0 `02151`，鸡 |
| covered_products | 在生产农场以活体交付的鸡，包括肉鸡、种鸡、后备鸡、蛋鸡和活体淘汰鸡 |
| excluded_products | 作为参考产品的种用蛋和食用蛋；鸡肉、胴体与屠宰产品；场外运输后的鸡；其他家禽 |
| representative_product | 在生产农场门口移交所有权或运营控制权之前称重的活鸡 |
| production_route | 受管理鸡群生产母路线，按肉鸡、种鸡、蛋鸡用途及舍饲或散养方式声明变体；逐路线记录饲料、禽舍、垫料、粪污、能源、周期和校验要求的变化 |
| market_state | 未加工活鸡，声明用途、类别、年龄或阶段、健康或销售状态、产地及农场门口交付 |

不同路线可以并存，但鸡群、禽舍、饲料、粪污和产品记录须可分离。蛋鸡路线同时报告鸡蛋时，应声明鸡蛋负担归于本 PCR 还是单独鸡蛋数据集，且不得重复计入。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产农场门口的活鸡 |
| How much | 实测活重 1 kg |
| How well | 用途和类别；必要时的品种；饲养或产蛋路线；年龄或阶段；健康状态；地理位置；秤具及失重口径 |
| How long or cycle | 已声明批次和报告期，覆盖归属的后备、育雏、生长或产蛋、选鸡及交付阶段 |
| reference_flow_link | `live_chicken_output` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 生产农场门口活鸡 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 活重；只数；用途和类别；路线；批次与报告期；农场门口交付；地理位置；死亡；后备阶段；鸡蛋联产品决策 |

通用参考流 UUID 尚未解析。农场活鸡候选使用“件数”而非质量，另一质量候选仅适用于中国，第三个候选是工厂门口饲料级产品。只数是辅助活动数据，不能取代 1 kg 质量参考量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 所需属性 | 所需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_live_mass` | 参考产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 汇总农场门口交付的实测活重；归一化前保留称重日期、抽样、类别及失重口径。 |
| `bird_count_mass` | 入场、死亡和销售 | 质量及只数 | kg 和只 | 将只数与实测或抽样的类别特定活重关联；不得用统一鸡重换算。 |
| `feed_dry_matter` | 饲料和垫料 | 质量 | 原样 kg 与干物质 kg | 保留含水率、领用量、退回量和库存变化；仅凭记录的组成进行干物质换算。 |
| `water_and_energy` | 供应水和能源 | 体积或质量；能源或载体数量 | m3 或 kg；kWh、MJ、L 或 kg | 换算或分摊前区分用水功能、能源载体和原始单位。 |
| `species_emissions` | 粪污系统排放 | 物质质量 | kg CH4、kg N2O、kg NH3 | 根据鸡群类别、粪污路径、活动数据和方法层级分别计算各物质。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |

## 5. 系统边界

前景始于入场雏鸡、育成母鸡或其他起始鸡只，以及已声明的禽舍和土地状态。涵盖受控育种或育雏、生长或产蛋、饲料与用水、防疫、通风与供热、受控粪污及垫料、鸡群选择和活重称量，直至生产农场门口。饲料生产、购入鸡只前期饲养、外购能源、药品和场外服务须关联上游数据集，除非实际上由已声明的前景经营。仅纳入未被供应商交付负担覆盖的直接受控入场运输。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 按类别、年龄、活重、只数、来源和期初时间记录的入场鸡群，以及禽舍和垫料起始状态 |
| starting_condition_role | 生物性起始存栏及共用禽舍状态，其前期负担必须关联上游或按报告期明确归属 |
| product_classification_scope | CPC 3.0 `02151` 活鸡；鸡蛋、鸡肉及其他家禽是独立类别 |
| recursive_input_rule | 购入或内部转入的活鸡作为起始存栏输入，记录来源、质量、只数、阶段、日期与既有负担，不得重建为农场门口产出 |
| upstream_dataset_requirement | 鸡只、饲料、垫料、防疫产品、能源和服务的供应商或前期数据集；缺少兼容数据集时披露缺口 |
| disclosure | 鸡群用途和类别、路线、场址、禽舍和放养方式、饲料基准、粪污路径、死亡、鸡蛋产出、共用资产、阶段与期间、活重方法、交付及未解析身份 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `b_managed_flock` | 所有路线 | 使用一个受管理鸡群母路线；依据实际记录声明肉鸡、种鸡、蛋鸡、舍饲或散养在拓扑、饲料、禽舍、垫料、粪污、能源、周期和校验方面的变化。 | `fao-leap-poultry-2016` |
| `b_farm_gate` | 活鸡参考产出 | 截止于生产农场门口的活重测量及交付；排除屠宰、分割和下游运输。 | `fao-leap-poultry-2016` |
| `b_phase_links` | 后备、育雏、生长、产蛋和淘汰阶段 | 将入场、投入、共用资产、死亡、鸡蛋和活鸡产出关联到批次与期间；期初存栏负担只归属一次。 | `fao-leap-poultry-2016` |
| `b_manure_route` | 粪污和垫料 | 纳入受控收集、储存、处理和土地利用；在实际交付点记录外运产品或废物；非受控场外处理排除于农场前景外。 | `ipcc-2019-livestock-manure`；`fao-leap-nutrient-flows-2018` |
| `b_shared_housing` | 禽舍、放养地、水、能源和粪污设施 | 识别每项共用资产的所有鸡群类别及服务期间，包括鸡蛋和活鸡节点；按实测服务只归属一次。 | `fao-leap-poultry-2016` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `flock_production` | 鸡群饲养及农场门口交付 | required | 声明实际肉鸡、种鸡、蛋鸡、散养或舍饲路线及产品集合。 | 受管理生物生产、粪污责任、产品选择和活重交付。 | 农场门口交付活鸡 kg，配合只数及批次期间核对 |

### 过程：鸡群饲养及农场门口交付（`flock_production`）

#### 输入

##### 产品流

###### 入场雏鸡、育成母鸡或其他起始鸡只（`starting_birds`）

记录入场鸡只的类别、来源、只数、实测或抽样活重、日期和继承负担。

分母与范围要求：每 kg 农场门口活鸡，附批次期间索引

- 选定流：活鸡起始存栏
- 流属性/单位：质量及辅助只数 / kg 和只
- 数量规则：按鸡群及期间记录入场活重和只数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bird_events`
- 来源：`fao-leap-poultry-2016`
- 数量范围：暂定入场鸡只质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg 入场活重/kg 活鸡参考产出
  - 基准：宽泛初筛；完全场内孵育的批次可为零
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购饲料原料和全价配合饲料（`feed_input`）

纳入鸡群领用饲料；有放养记录时估算采食量；保留产品身份、原样质量、干物质及日粮阶段。

分母与范围要求：每 kg 农场门口活鸡及归属的批次期间

- 选定流：按实际配方识别的家禽饲料产品
- 流属性/单位：质量 / 原样 kg 与干物质 kg
- 数量规则：净领用饲料及按阶段估算的放养采食
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_feed_records`
- 来源：`fao-leap-poultry-2016`
- 数量范围：暂定饲料干物质筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：40
  - 单位：kg 干物质/kg 活鸡参考产出
  - 基准：肉鸡至种鸡和蛋鸡期间的宽泛筛查；以实际日粮记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饮用与饲养供水（`water_input`）

按用途和来源记录饮用、清洁及冷却供水；前景用水记录决定此综合卡的具体交换。

分母与范围要求：每 kg 农场门口活鸡

- 选定流：鸡群运营用水供应
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：按功能、鸡群和期间计量或估计取水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy`
- 来源：`fao-leap-water-livestock-2019`
- 数量范围：暂定供水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：m3/kg 活鸡参考产出
  - 基准：宽泛用水筛查；保留实际用途和来源
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电力、供热及其他能源载体（`energy_input`）

按载体及用途区分电力、燃气、生物质和液体燃料，保留各设备服务期间。

分母与范围要求：每 kg 农场门口活鸡

- 选定流：鸡群运营能源供应
- 流属性/单位：能源或载体数量 / kWh、MJ、kg 或 L
- 数量规则：按载体和服务期间采集计量表、发票或设备日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy`
- 数量范围：暂定能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kWh 当量/kg 活鸡参考产出
  - 基准：宽泛路线初筛，不作为载体换算规则
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 垫料、垫料改良物和防疫产品（`husbandry_material_input`）

具体数据集分别记录垫料、消毒剂、疫苗、药品等实物产品；不得把剂次等同于质量。

分母与范围要求：每 kg 农场门口活鸡

- 选定流：按路线识别的垫料与动物健康产品
- 流属性/单位：质量、体积、剂次或件 / 原产品单位
- 数量规则：按物品及鸡群记录采购、使用和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_health`
- 数量范围：暂定实物投入筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg 实物材料/kg 活鸡参考产出
  - 基准：宽泛材料筛查；剂次仍保留原单位
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 受控入场货运服务（`inbound_transport`）

仅记录农场控制下鸡只、饲料或材料的实际入场公路货运，排除供应商已包含的运输。非公路服务须在本公路组卡以外另行核实交换。

分母与范围要求：每 kg 农场门口活鸡

- 选定流：入场公路货运服务
- 流属性/单位：货物运输 / t*km
- 数量规则：交付质量乘受控公路距离
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：运输服务（`transport_service`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_inbound_transport`
- 数量范围：暂定入场运输筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：t*km/kg 活鸡参考产出
  - 基准：宽泛路线筛查；全部由供应商交付时可为零
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设外购废物投入。外来粪污或垫料基质须按来源、处理状态和污染证据识别，并在纳入前作出路线决定。

##### 基本流

直接土地占用或取水仅在前景实测时记录，不从放养或外购水推断。

#### 输出

##### 产品流

###### 农场门口交付的活鸡（`live_chicken_output`）

只记录转移时存活的鸡，按入场、生长和死亡记录核对质量与只数。

参考产出的原始记录：按类别和批次实测交付的活鸡 kg 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 生产农场门口活鸡
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_bird_events`
- 来源：`fao-leap-poultry-2016`
- 数量范围：参考质量恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考产出
  - 基准：1 kg 参考流的定义
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-leap-poultry-2016`

###### 独立交付的种用蛋或食用蛋（`egg_coproduct`）

仅在鸡蛋作为同一系统的有意产品离开时纳入。记录类别、带壳质量、枚数与交付；单独鸡蛋 PCR 只接受一次归属负担。

分母与范围要求：每 kg 活鸡产出及声明的产品集合

- 选定流：按实际身份区分的种用蛋或食用蛋
- 流属性/单位：质量和枚数 / 带壳 kg 和枚
- 数量规则：按类别和批次期间实测交付的可销售鸡蛋
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_handover`
- 来源：`fao-leap-poultry-2016`
- 数量范围：暂定鸡蛋联产筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 鸡蛋/kg 活鸡参考产出
  - 基准：宽泛蛋鸡生命周期筛查；非产蛋路线为零
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作为产品有意外运的粪污或垫料（`manure_product`）

仅在买方或接收过程明确接受其有益用途时作为产品，否则使用废物卡。

分母与范围要求：每 kg 活鸡产出

- 选定流：按实际状态识别的鸡粪或垫料产品
- 流属性/单位：质量 / 湿重 kg 和干物质 kg
- 数量规则：在产品交付点测得的转移质量和组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manure_records`
- 来源：`fao-leap-nutrient-flows-2018`
- 数量范围：暂定外运粪污筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 湿粪污或垫料/kg 活鸡参考产出
  - 基准：声明状态和含水率的宽泛路线筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 死亡鸡只与不可销售胴体（`mortality_waste`）

按阶段记录死亡只数与质量，标明场内处理或场外交付，且不得计入活鸡产出。

分母与范围要求：每 kg 活鸡产出

- 选定流：按实际处置路线识别的家禽死亡废物
- 流属性/单位：质量和只数 / kg 和只
- 数量规则：按事件实测或采用阶段特定抽样质量估算死亡质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bird_events`
- 数量范围：暂定死亡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg 死亡鸡只质量/kg 活鸡参考产出
  - 基准：宽泛批次筛查；以实际死亡记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 不可利用粪污、垫料和拒收蛋残余（`residual_waste`）

记录处理方式、去向和含水率；同一粪污流不得同时作为产品和废物。

分母与范围要求：每 kg 活鸡产出

- 选定流：按状态识别的家禽垫料、粪污或鸡蛋残余废物
- 流属性/单位：质量 / 湿重 kg 和干物质 kg
- 数量规则：扣除单独交付的产品物流后测得的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 来源：`fao-leap-nutrient-flows-2018`
- 数量范围：暂定残余物筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 湿残余物/kg 活鸡参考产出
  - 基准：保留含水率和处置路线的宽泛筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 受控粪污路径的生物源甲烷（`manure_methane_air`）

仅在粪污系统和方法产生 CH4 时纳入；不得推断家禽肠道甲烷路径。

分母与范围要求：每 kg 活鸡产出

- 选定流：向空气排放的生物源甲烷 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- 绑定：固定（`fixed`）
- 数量规则：依据实测挥发性固体和方法层级计算路径特定 CH4
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定粪污甲烷筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg CH4/kg 活鸡参考产出
  - 基准：条件性筛查；实际值按粪污路径和因子计算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 受控粪污管理的氧化亚氮（`manure_n2o_air`）

按粪污和氮路径计算直接及应归属的间接 N2O，避免重复计算下游土地施用排放。

分母与范围要求：每 kg 活鸡产出

- 选定流：向空气排放的氧化亚氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
- 绑定：固定（`fixed`）
- 数量规则：依据实测粪污氮和方法层级计算路径特定 N2O
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定粪污氧化亚氮筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg N2O/kg 活鸡参考产出
  - 基准：条件性筛查；实际值按氮路径和因子计算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 受控粪污和垫料的氨（`manure_nh3_air`）

当禽舍、储存或处理路径向空气排放氨时，按 NH3 物质质量记录。

分母与范围要求：每 kg 活鸡产出

- 选定流：向空气排放的氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg NH3
- 绑定：固定（`fixed`）
- 数量规则：依据实测粪污氮和记录的方法计算路径特定 NH3
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 来源：`fao-leap-nutrient-flows-2018`；`ipcc-2019-livestock-manure`
- 数量范围：暂定粪污氨筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg NH3/kg 活鸡参考产出
  - 基准：条件性筛查；实际值依据氮记录与方法计算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `a_output_set` | 活鸡、鸡蛋和外运粪污 | 列举每个独立有意产品及实际交付点。将损失和废物排除；区分种用蛋与食用蛋、产品粪污与残余物。 | `fao-leap-poultry-2016`；`fao-leap-nutrient-flows-2018` |
| `a_physical_then_economic` | 共用产品负担 | 优先分离实测的过程或阶段负担。若剩余共用负担无法物理分离，可信时采用有依据的物理因果基准；否则使用期间特定的经济份额并披露价格及敏感性。不得既给予联产品抵扣又再次分配同一负担。 | `fao-leap-poultry-2016` |
| `a_phase` | 种鸡、肉鸡、蛋鸡和后备期间 | 将起始存栏、后备、饲养、产蛋、淘汰和终止负担归于实际批次与产品。明确期间决策及期初存栏核对；不得与鸡蛋 PCR 重复归属。 | `fao-leap-poultry-2016` |
| `a_shared_assets` | 禽舍、设备、水、能源和粪污系统 | 列举所有使用鸡群类别、产品节点和服务期间。按占用面积时间、设备小时、计量用量或其他实测服务基准只分配一次；披露替代基准并核对总份额为 100%。 | `fao-leap-poultry-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bird_events` | `flock_production` | 入场鸡只、死亡及活体交付 | 鸡群日志和称重记录 | 日期、类别、用途、只数、重量、秤、阶段、供应商或去向 | 直接计数与校准秤或有依据的抽样；原始汇总要求：按类别期间汇总，依抽样估计缺失质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 只；kg | 每次事件 | 完整批次及报告期 | 各禽舍、鸡群及农场门口 | 每参考流 | 交付记录、秤校准和鸡群核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed_records` | `flock_production` | 饲料和放养采食 | 库存、日粮和放养日志 | 产品、批次、原样质量、干物质、领用、退回、库存变化、鸡群、期间 | 发票、料仓秤和日粮计算；原始汇总要求：按饲料和阶段计算净采食，只归属一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；干物质 kg | 交付及饲喂期间 | 所有活跃阶段 | 各日粮及鸡群 | 每参考流 | 发票、配方、含水率和库存核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_water_energy` | `flock_production` | 供应水和能源 | 计量表及发票 | 用途、来源、计量表、载体、数量、单位、期间、使用者 | 计量或核实发票，记录分摊依据；原始汇总要求：按实测服务归属并与账单核对。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | m3；kg；kWh；MJ；L | 计量间隔 | 完整批次期间 | 所有来源、禽舍及共用设施 | 每参考流 | 计量读数、账单及共用服务安排；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_materials_health` | `flock_production` | 垫料和防疫产品 | 使用及治疗登记 | 物品、剂次或质量、单位、批次、治疗鸡只、日期、库存 | 库存及治疗记录；原始汇总要求：按产品和阶段计算净使用。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；L；剂次；件 | 使用事件 | 完整批次期间 | 各鸡群及储存区 | 每参考流 | 盘点、治疗日志及发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_inbound_transport` | `flock_production` | 受控货运 | 行程记录 | 货物、质量、起终点、方式、距离、供应商、交付条款 | 路线及交付单据；原始汇总要求：质量乘距离，排除供应商已含路段。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | t；km；t*km | 每次行程 | 完整批次期间 | 受控入场路段 | 每参考流 | 交付单、路线证据及发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_output_handover` | `flock_production` | 鸡蛋及其他产品 | 鸡蛋分级及交付记录 | 类别、带壳质量、枚数、等级、拒收、日期、买方 | 秤量、计数及发运单；原始汇总要求：按类别期间计算可销售质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；枚 | 每次收集及发运 | 相关产蛋期间 | 各蛋鸡群及交付点 | 每参考流 | 分级日志、秤和收据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure_records` | `flock_production` | 粪污、垫料、废物及排放 | 粪污路径和处理日志 | 鸡群、禽舍、垫料、氮、挥发性固体、湿干重、储存、外运、处理、因子 | 抽样、称重、日志及方法因子；原始汇总要求：核对湿干质量及氮平衡，再计算物质。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；kg N；kg VS；kg 物质 | 每次移除及方法期间 | 所有禽舍和储存期间 | 各路径和接收去向 | 每参考流 | 样品、移除单、因子版本及平衡；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_live_mass` | 参考产出 | 按批次汇总实测交付活重；抽样时以类别只数乘抽样均重并披露不确定性。 | 事件质量、只数、类别和称重 | 各批次活鸡 kg 和只数 | `fao-leap-poultry-2016` |
| `c_feed_net` | 饲料 | 净领用 = 期初库存 + 采购 - 期末库存 - 退回；按实测组成换算干物质并归于鸡群阶段。 | 库存、发票、配方、含水率、期间 | 按饲料的原样 kg 和干物质 kg | `fao-leap-poultry-2016` |
| `c_mortality` | 死亡 | 汇总称重胴体或只数乘阶段特定抽样质量；不计入活体产出。 | 死亡、只数、抽样质量 | 各阶段死亡废物 kg | `fao-leap-poultry-2016` |
| `c_manure_species` | 粪污 CH4、N2O、NH3 | 按粪污系统及适用 IPCC 或营养物流方法从实测 VS 和 N 计算各物质；记录因子及分子换算。 | 路径、VS、N、储存条件、因子 | 分别报告 kg CH4、kg N2O、kg NH3 | `ipcc-2019-livestock-manure`；`fao-leap-nutrient-flows-2018` |
| `c_alloc_reconcile` | 多产品与共用资产 | 先归属实测阶段负担，再按因果或披露的经济基准分配剩余共用负担，并核对产品及期间份额总和为一。 | 产品质量、价格、服务小时、面积时间、期间 | 按产品和期间归属的负担 | `fao-leap-poultry-2016` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 鸡群及产品 | 保留物种、用途、路线、类别、阶段、产品类别和实际交付点。 | 鸡群登记、交付单、禽舍与放养日志 |
| `dq_temporal` | 所有流 | 覆盖批次和报告期，包括相关后备、死亡、产蛋和淘汰；核对期初与期末存栏。 | 事件日志和批次核对 |
| `dq_completeness` | 饲料、水、能源、粪污及产品 | 解释缺失记录和零值流；核对采购、使用、库存、产品和残余物。 | 发票、计量表、饲料库存及粪污单 |
| `dq_factors` | 计算排放 | 识别鸡群类别、粪污系统、方法层级、因子来源和版本及物质换算。 | 因子表及计算 |
| `dq_allocation` | 联产品与共用资产 | 保留产品交付、使用者、服务期间、基准及份额总和。 | 分配表和发运记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_reference_gate` | 参考产出 | 要求活体状态、kg Mass、只数、用途、类别、批次和生产农场门口；拒绝肉类、屠宰后产出和仅件数参考流。 | `fao-leap-poultry-2016` |
| `v_route_delta` | 替代路线 | 要求受管理母路线和舍饲、散养、肉鸡、种鸡或蛋鸡在拓扑、饲料、粪污、能源、期间或产品集合方面变化的证据。 | `fao-leap-poultry-2016` |
| `v_balance` | 鸡群及残余物 | 核对入场、孵出、出售、留养和死亡只数，以及饲料和粪污质量或营养路径。 | `fao-leap-poultry-2016`；`fao-leap-nutrient-flows-2018` |
| `v_output_once` | 鸡蛋、粪污及活鸡 | 每个产品须有唯一交付点和角色；防止同流既是产品又是废物，或同负担出现于两个 PCR 数据集。 | `fao-leap-poultry-2016` |
| `v_period_shared` | 期间和共用资产 | 要求期初存栏、阶段关联、资产使用者、服务期间及份额总和为一；拒绝重复归属。 | `fao-leap-poultry-2016` |
| `v_emissions` | CH4、N2O 和 NH3 | 核查物质、接收介质、家禽类别、粪污路径和因子；无产生路径时甲烷为零或不适用。 | `ipcc-2019-livestock-manure` |
| `v_unresolved_uuid` | 具体交换 | 输出 TIDAS 交换前，以详情核实的兼容 UUID 替换未解析或待确认流，保留具体流的选择与核验证据。 | `fao-leap-poultry-2016` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门口活鸡生产前景数据包 |
| downstream_use | 审查后作为 `secondary_dataset` 或 `background_dataset`，用于 process 或 lifecyclemodel 投影 |
| allowed_use | 与消费研究匹配的鸡只用途、地理、路线、期间、产品集合、分配和活重口径 |
| excluded_use | 鸡蛋参考产品；鸡肉或屠宰产出；其他家禽；未经审查的只数至 kg 换算；未匹配路线的替代 |
| required_metadata | 场址、地理、时间、鸡群用途与类别、路线、禽舍与放养、阶段、死亡、饲料基准、粪污路径、产品交付、质量方法及 待确认流身份 解析 |
| required_quality_disclosure | 数据覆盖、实测与估算量、因子层级、分配、共用资产基准、缺失供应商、暂定范围及未解析 UUID |
| update_trigger | 鸡群用途、路线、产品集合、粪污系统、参考流身份、主要因子或数据质量变化 |

## 11. 数据来源

| 来源 ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `fao-leap-poultry-2016` | official_guidance | FAO LEAP, Greenhouse gas emissions and fossil energy use from poultry supply chains (2016), https://openknowledge.fao.org/handle/20.500.14283/i6421en | 路线、边界、阶段、产品归属及记录 |
| `ipcc-2019-livestock-manure` | official_guidance | IPCC 2019 Refinement, Vol. 4, Ch. 10, Emissions from Livestock and Manure Management, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 家禽类别及粪污排放计算 |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP, Nutrient flows and associated environmental impacts in livestock supply chains (2018), https://openknowledge.fao.org/handle/20.500.14283/ca1328en | 粪污氮与营养物流 |
| `fao-leap-water-livestock-2019` | official_guidance | FAO LEAP, Water use in livestock production systems and supply chains (2019), https://www.fao.org/partnerships/leap/resources/publications/ | 供水来源及用途 |
