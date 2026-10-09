---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.camels-and-camelids
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 农场门口活骆驼及其他驼科动物

## 1. 范围与适用性

本 PCR 覆盖 CPC 02121 内的活单峰驼、双峰驼和南美驼科动物，边界从引入繁殖或替换动物开始，包含受管理繁殖、出生、育成、放牧或灌木采食、补饲、饮水、健康管理、圈舍、粪污路径、选留、称重和生产农场门口交付。其他反刍动物、肉、原奶、纤维或毛、皮张、服务、屠宰及交付后运输不得作为本 PCR 的参考产品。

物种组和路线为必填限定条件，因为游牧/移动、混合/农牧结合及圈养/半集约系统在饲料、移动、用水、圈舍、粪污和产出要求上存在实质差异。仅在先分别记录再透明汇总时，多个路线才可共存。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.camels-and-camelids |
| classification_refs | CPC 3.0: 02121 Camels and camelids |
| covered_products | Live dromedary and Bactrian camels, llamas, alpacas and other South American camelids transferred at the producing farm gate for breeding, replacement, meat, milk, fibre or mixed purposes while the product remains a live animal. |
| excluded_products | Other ruminants; meat or carcasses; milk, fibre or hair and hides as reference products; semen or embryos; separately supplied services; slaughter and post-farm transport. |
| representative_product | Live camel or other camelid weighed immediately before farm-gate transfer. |
| production_route | 母体活动为受管理生物生产。声明的替代路线包括牧区/移动式、混合/农牧结合及舍饲/半集约；路线差异涉及移动、灌木采食与饲料、水、庇护设施、粪污、能源及条件性产出。 |
| market_state | Alive and fit for declared transfer, with species group, class, purpose, sex where material, route, live-weight basis, geography and period declared. |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | Live camels and camelids at the producing farm gate before downstream transport or slaughter. |
| How much | 1 kg live weight. |
| How well | Species group, animal class and purpose, sex where material, route, fitness and weighing basis are declared. |
| How long or cycle | One cohort or reporting period linking entries, biological phases, outputs, losses and shared assets without duplicate attribution. |
| reference_flow_link | `live_camelid_reference_output` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Camels and camelids `d5b8e5ed-dfcc-4755-a7fb-d51316970d8b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种组；动物类别和用途；重要时的性别；重要时的基因型；生产路线；饲料与灌木采食制度；活重约定和称重点；地域；农场门口移交；群组或报告期 |
| Binding | Fixed (`fixed`) |

该宽口径固定身份要求上述所有限定项；不得用其替代骆驼奶、纤维、肉或服务。

## 4. 计量与单位规则

| rule_id | 适用对象 | 要求属性 | 要求单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_live_weight` | reference animals | Mass | kg | Weigh immediately before transfer and retain scale point, calibration, individual/lot basis and any fasting or gut-fill convention. |
| `count_to_mass` | entries, births, deaths and transfers | Mass | kg | Preserve head, species and class; convert only with measured weights or a documented matching-class mean. |
| `feed_dry_matter` | forage, browse, concentrates and supplements | Mass | kg dry matter and kg as-fed | Preserve as-fed mass and dry-matter fraction; identify the reviewed method for unmeasured intake. |
| `water_basis` | supplied water | Mass or volume | kg or m3 | Separate managed supply from rainfall or unmanaged access and disclose meter coverage or estimation. |
| `emission_basis` | CH4, N2O and NH3 | Mass of named substance | kg CH4, kg N2O or N2O-N, kg NH3 or NH3-N | Keep substance and element bases explicit and document molecular conversions. |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | Breeding or replacement animals and purchased feed, water, energy, health products and other managed inputs entering the producer boundary. |
| starting_condition_role | These inputs initiate managed biological production; reproduction, rearing, producer-controlled movement, feeding, watering, shelter, manure handling, weighing and hand-off remain inside. |
| product_classification_scope | CPC 02121 范围内的活骆驼及其他驼科动物；奶、纤维、粪污、肉、皮及服务保留独立身份。 |
| recursive_input_rule | Incoming animals from another producer are upstream Product inputs with supplier datasets; do not recreate their earlier production within the receiving herd. |
| upstream_dataset_requirement | Require supplier datasets for incoming animals, purchased feed and health inputs, energy, supplied water and included inbound transport; unresolved identities require foreground verification. |
| disclosure | Declare species, class, purpose, route and mobility, feed/browse and water regimes, breeding/replacement, manure pathways, conditional milk/fibre, shared assets and periods, geography, weighing and hand-off. |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `managed_boundary` | 所有路线 | 纳入受管理繁殖、出生、饲养、饲料/灌木采食、水、健康、庇护设施、粪污、挑选、称重和交接；排除屠宰和下游运输。 | `fao-gleam`; `fao-ruminant-lca-2013` |
| `species_route_resolution` | 骆驼和南美驼科动物路线 | 声明受管理生产母体活动和物种/路线差异；保留路线特异的移动、饲料、水、庇护设施、粪污、能源和产出记录。 | `fao-gleam`; `ipcc-2019-livestock-manure` |
| `period_linkage` | biological phases and periods | Index animals, inputs, outputs, losses, replacement and assets to the causing phase and period; disclose partial-cycle coverage. | `fao-ruminant-lca-2013` |
| `shared_asset_boundary` | watering, shelter, fencing, handling, vehicles and manure systems | List assets, consumers and service periods, choose a documented driver and count each burden once. | `fao-ruminant-lca-2013` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量基准 |
| --- | --- | --- | --- | --- | --- |
| `managed_camelid_production` | Managed camelid production and farm-gate transfer | required | Always; route-specific and milk/fibre activities only when present. | Managed biological production, route resolution, output selection, weighing and hand-off. | 1 kg live weight, supported by head, animal-day, distance, cohort and period records. |

### 过程：驼科动物受管理生产与农场门口交付（`managed_camelid_production`）

#### 输入

##### 产品流

###### 引入的繁殖与替换动物 (`incoming_animals`)

记录从所代表畜群历史之外引入的活体动物，不得重复计算群内出生并留养的动物。
分母与范围要求：per kg reference live weight and period

- 选定流： Live incoming camel or camelid by actual species/class (UUID unresolved)
- 流属性/单位： Mass / kg live weight; head retained
- 数量规则： Record species, class, origin, entry, purpose, head and live weight; attribute burden over actual service/output periods.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_herd_events`
- 来源： `fao-ruminant-lca-2013`
- 数量范围： Incoming-animal QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 3
  - 单位： kg incoming live weight/kg reference live weight
  - 基准： broad replaceable screen
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 饲料、草料与灌木采食 (`feed_browse`)

按实际来源、状态、物种组和生物阶段记录受管理的饲料、草料、灌木采食物和补充料。
分母与范围要求：per kg reference live weight

- 选定流： Actual feed, forage or browse identity (UUID unresolved)
- 流属性/单位： Mass / kg dry matter and kg as-fed
- 数量规则： Record intake by species, class, phase, source and dry-matter basis; retain estimation method and refusals.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_feed_movement`
- 来源： `ipcc-2019-livestock-manure`; `fao-ruminant-lca-2013`
- 数量范围： Feed-intake QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.5
  - 上限： 80
  - 单位： kg dry matter/kg reference live weight
  - 基准： broad replaceable screen, not a ration
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 动物保健产品 (`health_products`)

记录跨越前景边界的药品、疫苗、消毒剂及其他动物保健产品。
分母与范围要求：per kg reference live weight

- 选定流： Health product by actual formulation (UUID unresolved)
- 流属性/单位： Mass, volume or dose / kg, L or dose
- 数量规则： Record formulation, administered/discarded quantity, species/class, date and purpose; zero when unused.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_health_inputs`
- 来源： `fao-gleam`
- 数量范围： Health-input QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.1
  - 单位： kg or L product/kg reference live weight
  - 基准： broad conditional screen, not a dose
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 供应水 (`supplied_water`)

记录供应给所代表动物和活动的受管理饮用水与服务用水。
分母与范围要求：per kg reference live weight

- 选定流： Supplied process water
- 流属性/单位： Mass or volume / kg or m3
- 数量规则： Meter or estimate documented supply by use, species, location and period.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_water_energy_transport`
- 数量范围： Water QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 5
  - 单位： m3/kg reference live weight
  - 基准： broad arid-to-housed route screen
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 能源载体 (`energy_supply`)

按实际用途和报告期记录购入的电力、燃料、热力及其他能源载体。
分母与范围要求：per kg reference live weight

- 选定流： Energy carrier supply
- 流属性/单位： Energy or carrier quantity / kWh, MJ, L or kg
- 数量规则： Record each carrier by activity, meter/allocation and period.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Technology-specific (`technology_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_water_energy_transport`
- 数量范围： Energy QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 30
  - 单位： kWh-equivalent/kg reference live weight
  - 基准： broad replaceable route screen
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 纳入边界的入场运输 (`inbound_transport`)

仅当物料投入的货运服务位于已声明前景边界内时记录该运输。
分母与范围要求：per kg reference live weight

- 选定流： Inbound road-freight service by vehicle/cargo
- 流属性/单位： Goods transport / t*km
- 数量规则： Multiply transported tonnes by included one-way kilometres; retain vehicle, cargo, load and route.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Route-specific (`route_specific`)
- 归一化基准：每参考流
- 基准类型： Transport service (`transport_service`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_water_energy_transport`
- 数量范围： Transport QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 10
  - 单位： t*km/kg reference live weight
  - 基准： broad conditional screen
  - 基准类型： Transport service (`transport_service`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 活骆驼或其他驼科动物参考产出 (`live_camelid_reference_output`)

记录生产农场交接时的活体动物质量，并保留物种组、动物类别、路线和称重证据。
分母与范围要求：1 kg live weight at farm gate

参考产出的原始记录：Record accepted live weight and head by species, class, route, lot, weighing point and transfer date; normalize to 1 kg. 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

- 选定流： Camels and camelids `d5b8e5ed-dfcc-4755-a7fb-d51316970d8b`
- 绑定： Fixed (`fixed`)
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： Product-specific (`product_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_herd_events`
- 来源： `fao-gleam`
- 数量范围： Reference normalization
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 1
  - 上限： 1
  - 单位： kg reference live weight
  - 基准： one normalized result
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 骆驼奶联产品 (`camel_milk`)

仅在骆驼奶作为独立预期产品移交时记录；本卡不适用于南美驼科动物路线。逐批分别记录温乳或冷藏状态、温度和实际交付门。本宽口径卡不固定 UUID；只有实际冷藏且交付门匹配的批次，才能在身份确认后采用冷藏农场门身份。不得根据 UUID 假定发生了冷却；仅在实际冷却时纳入交付前实测冷却投入和损失。
分母与范围要求：per kg reference live weight and period

- 选定流：交付状态与交付门明确的骆驼原奶
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： Record transferred mass, species, period, composition and hand-off; inapplicable to South American camelid routes and milk consumed internally.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_outputs_losses`
- 来源： `fao-gleam`
- 数量范围： Camel-milk QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： kg milk/kg reference live weight
  - 基准： broad conditional screen
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 纤维或毛联产品 (`fibre_hair`)

仅在纤维或毛被独立预期并以已声明物种和状态转移时记录。
分母与范围要求：per kg reference live weight and period

- 选定流： Camelid fibre or hair by species and state (UUID unresolved)
- 流属性/单位： Mass / kg
- 数量规则： Record recovered mass, species, group, method, moisture/greasy basis, grade and hand-off; inapplicable where not intended.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_outputs_losses`
- 来源： `fao-gleam`
- 数量范围： Fibre/hair QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 2
  - 单位： kg fibre or hair/kg reference live weight
  - 基准： broad conditional screen
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 外运粪肥 (`exported_manure`)

仅当粪肥有意转移给已识别接收方时，将其记录为产品产出。
分母与范围要求：per kg reference live weight and period

- 选定流： Exported camelid manure by managed state (UUID unresolved)
- 流属性/单位： Mass / kg wet mass plus dry matter or nutrient content
- 数量规则： Record mass, moisture, nitrogen where available, species, state, destination and date; do not duplicate deposition or waste.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_manure_emissions`
- 来源： `fao-leap-nutrient-flows-2018`
- 数量范围： Manure-export QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： kg wet manure/kg reference live weight
  - 基准： broad conditional screen
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 死亡动物及不可用物料 (`mortality_waste`)

将动物死亡物及不可用物料记录为具有明确去向的废物流，而非预期产出。
分母与范围要求：per kg reference live weight

- 选定流： Camelid mortality waste by treatment route (UUID unresolved)
- 流属性/单位： Mass / kg
- 数量规则： Record head, species/class, mass, date, cause where known and treatment/destination.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_outputs_losses`
- 来源： `fao-gleam`
- 数量范围： Mortality QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg mortality/kg reference live weight
  - 基准： broad replaceable screen
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### 排入空气的肠道甲烷 (`enteric_ch4`)

按物种组、动物类别和阶段计算肠道发酵排入空气的生物源甲烷。
分母与范围要求：per kg reference live weight

- 选定流： methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 绑定： Fixed (`fixed`)
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- 数量规则： Calculate by species/category and period from population, feed/gross energy and reviewed factors.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_manure_emissions`
- 来源： `ipcc-2019-livestock-manure`
- 数量范围： Enteric-CH4 QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 5
  - 单位： kg CH4/kg reference live weight
  - 基准： broad result screen, not a factor
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 排入空气的粪污甲烷 (`manure_ch4`)

计算受管理粪污路径排入空气的生物源甲烷，并与肠道甲烷分开。
分母与范围要求：per kg reference live weight

- 选定流： methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 绑定： Fixed (`fixed`)
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- 数量规则： Calculate by species, volatile solids, pathway, climate and storage; keep separate from enteric CH4.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_manure_emissions`
- 来源： `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- 数量范围： Manure-CH4 QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 2
  - 单位： kg CH4/kg reference live weight
  - 基准： broad result screen, not a factor
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 排入空气的直接氧化亚氮 (`direct_n2o`)

计算边界内粪污管理和排泄物沉积直接排入空气的氧化亚氮。
分母与范围要求：per kg reference live weight

- 选定流： nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定： Fixed (`fixed`)
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O or kg N2O-N
- 数量规则： Calculate by species/class, nitrogen excretion, period and manure/deposition pathway; retain basis conversion.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_manure_emissions`
- 来源： `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- 数量范围： Direct-N2O QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.1
  - 单位： kg N2O/kg reference live weight
  - 基准： broad result screen
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 排入空气的间接氧化亚氮 (`indirect_n2o`)

仅根据有记录的挥发或淋溶与径流前体计算间接氧化亚氮。
分母与范围要求：per kg reference live weight

- 选定流： nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定： Fixed (`fixed`)
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O or kg N2O-N
- 数量规则： Calculate only for documented volatilization or leaching/runoff precursors; do not duplicate direct N2O.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_manure_emissions`
- 来源： `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- 数量范围： Indirect-N2O QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.1
  - 单位： kg N2O/kg reference live weight
  - 基准： broad result screen
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 排入空气的氨 (`ammonia_air`)

计算所代表粪污氮路径排入空气的氨，并保留分子基准。
分母与范围要求：per kg reference live weight

- 选定流： ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 绑定： Fixed (`fixed`)
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg NH3 or kg NH3-N
- 数量规则： Calculate by manure nitrogen pathway and reviewed factors; preserve basis and precursor linkage.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准：每参考流
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_manure_emissions`
- 来源： `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- 数量范围： Ammonia QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg NH3/kg reference live weight
  - 基准： broad result screen
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `complete_outputs` | animals, camel milk, fibre/hair and exported manure | Enumerate intended outputs and hand-offs; milk is camel-only and fibre follows actual species/state. Mortalities and untransferred residues are loss/waste. | `fao-ruminant-lca-2013`; `fao-leap-nutrient-flows-2018` |
| `partition_first` | 物种、路线、活动、期间和产出 | 在剩余负担分配前，直接归属实测饲料、水、移动、粪污、能源和产出负担。 | `fao-ruminant-lca-2013` |
| `residual_allocation` | inseparable joint outputs | Use representative farm-gate economic value unless reviewed physical causation is demonstrated; disclose prices, currency, period and sensitivity. | `fao-ruminant-lca-2013` |
| `period_attribution` | breeding/replacement animals and long-lived assets | Link events to phases/periods, attribute over actual service and prohibit later duplicate attribution. | `fao-ruminant-lca-2013` |
| `shared_asset_attribution` | 共享饮水、庇护、操作、车辆和粪污资产 | 列举消费者和期间；优先使用计量值，其次为运行小时、动物日或活重时间；仅计一次。 | `fao-ruminant-lca-2013` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd_events` | managed_camelid_production | entries, births, class changes, transfers, deaths and reference output | herd, weight and transfer records | id; species; class; sex; purpose; event; date; head; weight; scale; origin/destination | calibrated weighing linked to herd records；原始汇总要求：reconcile opening + entries + births = closing + transfers + deaths; normalize transferred mass。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | head; kg | each event | complete cohort/period | all represented groups | 每参考流 | calibration, signed transfer, reconciliation；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed_movement` | managed_camelid_production | feed, browse, grazing and managed movement | invoice, ration, land and movement log | identity; source; as-fed; dry matter; class; parcel; distance; duration; refusals | weigh supply; declare method for unmeasured intake；原始汇总要求：sum by identity/class; preserve estimation and movement。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; animal-days; km | event/period | all phases | group, land and shelter | 每参考流 | invoice, analysis, land/movement logs；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_health_inputs` | `managed_camelid_production` | 保健投入 | 治疗和采购记录 | 产品；配方；剂量；数量；物种/类别；日期；用途；废弃量 | 核对治疗、采购和库存；原始汇总要求：按配方汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 剂；kg；L | 每次治疗 | 完整期间 | 所有动物组 | 每参考流 | 签字日志、发票、库存平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_water_energy_transport` | `managed_camelid_production` | 水、能源和运输 | 仪表、发票、燃料和行程日志 | 来源/载体；数量；活动；货物；质量；距离；车辆；日期 | 仪表、发票、储罐和路线记录；原始汇总要求：直接归属，否则使用文件化驱动因素。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | m3；kg；L；kWh；MJ；t*km | 每月/每次行程/每次事件 | 完整期间 | 所有相关活动 | 每参考流 | 校准、发票、行程和分配记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_outputs_losses` | managed_camelid_production | milk, fibre, mortality and other outputs/losses | output, transfer, mortality and waste records | identity; species; mass; basis; class; date; destination; cause; fate | weigh/meter; matching-class estimate only for mortality；原始汇总要求：aggregate by identity and hand-off; separate internal use, product and waste。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; L; head | event | full period | all groups/gates | 每参考流 | scale/meter, transfer and loss logs；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure_emissions` | `managed_camelid_production` | 粪污路径和排放 | 群体、饲料、排泄、路径和气候记录 | 物种/类别；动物日；饲料/能量；N；路径；贮存；气候；层级；因子 | 记录加已声明并审查的公式；原始汇总要求：按物种/类别/期间/路径计算并核对物料。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 粪污；kg CH4；kg N2O；kg NH3 | 每月/每阶段 | 所有阶段/路径 | 沉积、收集、贮存、施用、外运 | 每参考流 | 源记录、工作表、因子溯源；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_output` | all rows | attributable period amount / accepted farm-gate live weight; preserve raw species/route records. | amount; transferred live weight | amount/kg reference | `fao-ruminant-lca-2013` |
| `herd_balance` | herd events | opening + entries + births = closing + transfers + deaths; class transitions are linked, not new animals. | events | reconciled head balance | `fao-ruminant-lca-2013` |
| `dry_matter` | feed/browse | as-fed mass × measured/supplier dry-matter fraction; declare method for unmeasured intake. | as-fed; fraction; land records | kg dry matter | `ipcc-2019-livestock-manure` |
| `enteric_methane` | 肠道 CH4 | 按物种/类别和期间应用已声明层级；保留活动数据和因子。 | 类别；动物日；饲料/能量；因子 | kg CH4 | `ipcc-2019-livestock-manure` |
| `manure_emissions` | 粪污 CH4、N2O 和 NH3 | 应用路径公式；明确分子换算。 | 类别；排泄/N；路径；气候；因子 | kg CH4、N2O、NH3 | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `transport_service` | included transport | tonnes × included one-way km. | cargo mass; distance | t*km | `fao-ruminant-lca-2013` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `identity_gate` | 参考产出 | 声明物种、类别/用途、路线、地域、期间、称重和移交。 | 畜群、秤、移交和元数据记录 |
| `route_specificity` | 所有行 | 分开记录实质不同的牧区/移动式、混合及舍饲路线。 | 路线、移动、饲料、水、庇护设施和汇总记录 |
| `temporal_completeness` | herd/assets | Cover material phases/events or disclose missing phases and supplier datasets. | herd calendar and event records |
| `output_reconciliation` | outputs/losses | Reconcile animals, applicable milk/fibre, manure, deaths, closing stock and internal use. | output, inventory, mortality and waste records |
| `manure_balance` | nutrients/emissions | Reconcile deposition, storage, treatment, application, export and waste. | pathway balance and transfer records |
| `shared_traceability` | 共享资产 | 保留消费者、期间、测量、驱动因素和单次计数证据。 | 仪表、日志和归属工作表 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考产出 | 拒绝肉、奶、纤维、皮、服务或已屠宰身份；要求固定活体动物 UUID、物种/路线限定项和农场门口活重基准。 | `fao-gleam` |
| `validate_route` | 路线变体 | 要求单一物种/路线或透明汇总，并有匹配的饲料、移动、水、庇护设施、粪污、能源和产出记录。 | `fao-gleam`; `ipcc-2019-livestock-manure` |
| `validate_periods` | 多期间生产 | 按物种和期间核对存量/事件，并拒绝动物、替换或资产负担重复。 | `fao-ruminant-lca-2013` |
| `validate_outputs` | reference/co-products | Require complete outputs/losses, hand-offs, partitioning and residual method; reject camel milk on South American camelid routes and duplicate hand-offs. | `fao-ruminant-lca-2013`; `fao-leap-nutrient-flows-2018` |
| `validate_shared_assets` | 共享资产 | 要求至少两个消费者/期间、一个服务边界、一个驱动因素，且无重复负担。 | `fao-ruminant-lca-2013` |
| `validate_emissions` | 肠道/粪污行 | 要求类别、活动、路径、层级、因子溯源、物种/基准及核对；因子是输入而非观测量。 | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `validate_flow_identity` | 水、能源、运输 | 具体发布要求一个与实际产品或载体、属性、单位、地域和用途匹配的已验证 UUID；待确认卡片不得同时携带固定 UUID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | Foreground farm-level package for managed live camel/camelid production and transfer. |
| downstream_use | `secondary_dataset`; `background_dataset` after identity, route, allocation, temporal and geography review. |
| allowed_use | Farm-gate inventories matching species, class, purpose, route, geography, period and live-weight basis; input to downstream animal-product models. |
| excluded_use | Meat, milk-only or fibre-only reference products, other ruminants, services, slaughter or post-transfer transport without separate datasets. |
| required_metadata | CPC; species; class/purpose; sex/genotype where material; route/mobility; feed/browse; water; manure; geography; period; shared assets; weighing; transfer gate. |
| required_quality_disclosure | Coverage, missing phases, estimation, aggregation, allocation/prices, shared drivers, emission method/factors, unresolved identities and Range overrides. |
| update_trigger | Changed boundary/gate; new species/route evidence; compatible UUID; revised livestock/manure method; or reviewed evidence replacing provisional ranges. |

## 11. 数据来源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `fao-gleam` | official_guidance | FAO, *Global Livestock Environmental Assessment Model*. <https://www.fao.org/gleam> (retrieved 2026-09-29). | system coverage, routes, inventory and outputs |
| `fao-ruminant-lca-2013` | official_guidance | FAO, *Greenhouse gas emissions from ruminant supply chains — A global life cycle assessment*, 2013. <https://www.fao.org/docrep/018/i3461e/i3461e.pdf> (retrieved 2026-09-29). | boundary, route, periods, allocation and collection |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP，*Nutrient flows and associated environmental impacts in livestock supply chains*，2018。<https://openknowledge.fao.org/handle/20.500.14283/ca1328en>（检索于 2026-09-29）。 | 粪污、养分、氨和路径规则 |
| `ipcc-2019-livestock-manure` | method_factor | IPCC, *2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management*. <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf> (retrieved 2026-09-29). | category, feed, CH4, N2O, methods and factors |
