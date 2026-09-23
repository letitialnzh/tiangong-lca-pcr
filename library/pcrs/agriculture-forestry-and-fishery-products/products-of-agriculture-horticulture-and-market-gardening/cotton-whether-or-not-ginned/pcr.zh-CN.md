---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cotton-whether-or-not-ginned
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 棉花，不论是否轧花

## 1. 范围与适用性

涵盖棉花种植、收获和农场门籽棉，以及可选的轧花至轧花厂门皮棉。必须选择一条路线。不含纱线、织物、榨油、运输和使用。

## 2. 产品类别标识

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cotton-whether-or-not-ginned |
| classification_refs | CPC 3.0: 0 > 01 > 019 > 0192 > 01921 |
| covered_products | seed cotton at farm gate; ginned cotton lint at gin gate |
| excluded_products | yarn; fabric; cottonseed oil or meal; synthetic fibre |
| representative_product | accepted seed cotton or accepted lint, route declared |
| production_route | managed cultivation and harvest; optional mechanical ginning, cleaning and grading |
| market_state | unprocessed seed cotton or cleaned ginned lint, moisture and grade declared |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | accepted cotton in declared seed-cotton or lint state |
| How much | 1,000 kg |
| How well | cultivar, route, moisture, grade, contamination and acceptance declared |
| How long or cycle | one crop cycle and harvest lot; linked gin batch when applicable |
| reference_flow_link | `accepted_cotton_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Accepted seed cotton or ginned cotton lint, declared route |
| Reference flow property |  |
| Reference unit group |  |
| Reference unit | kg |
| Required qualifiers | seed cotton at farm gate or lint at gin gate; geography; crop year; cultivar; moisture; grade; technology |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted product | Mass | kg | Weigh at declared hand-off; do not combine seed-cotton and lint masses. |
| `moisture_alignment` | biomass | Mass | kg wet; kg dry | Preserve wet mass and moisture; convert with lot-specific fraction. |
| `normalization` | field and gin records | Area; Mass | ha; kg | Collect by field-cycle or batch, then normalize once. |

## 5. 系统边界

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared field before current-cycle inputs |
| starting_condition_role | foreground entry; crop-attributed preparation included |
| product_classification_scope | CPC 3.0 `01921` |
| recursive_input_rule | same-category input uses its supplying dataset and is not recursively recreated |
| upstream_dataset_requirement | representative upstream dataset; unresolved identity selected from foreground evidence before publication |
| disclosure | route, irrigation, harvest, moisture, grade, gin technology, batch, co-product destinations and exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field` | cultivation | Include crop-attributed preparation, planting, nutrients, protection, irrigation, energy and direct emissions. | `ipcc-2019-refinement`; `fao-cotton-guide` |
| `boundary_harvest` | harvest | Separate harvest, grading, rejects, loss and farm hand-off from crop growth. | `fao-cotton-guide`; `mass-balance-identity` |
| `boundary_gin` | ginning | Include intake, conditioning, separation, cleaning, grading and bale preparation; stop before spinning. | `usda-cotton-ginning` |
| `boundary_routes` | alternatives | Keep rainfed/irrigated, picker/stripper and saw/roller technology strata separate before weighting. | `fao-cotton-guide`; `usda-cotton-ginning` |
| `boundary_route_delta_evidence` | production and technology deltas | Managed cultivation is the production parent. Irrigation changes water, pumping energy and field-emission records; harvest equipment changes energy, losses and contamination; saw versus roller ginning changes conditioning, separation, cleaning and quality records. These routes coexist in the category but are mutually exclusive within one stratum. | `fao-cotton-guide`; `usda-cotton-ginning` |
| `boundary_conditioning_stabilization` | ginned route | Raw seed cotton enters ginning; drying or moisture conditioning, separation and cleaning prepare moisture-safe graded lint for bale hand-off. Conditioning energy and service inputs are recorded in gin energy; cottonseed is an intended co-product; trash, moisture change, dust, rejects and loss remain separately classified. | `usda-cotton-ginning`; `mass-balance-identity` |
| `boundary_single_period` | all routes | Model one crop cycle and its linked harvest and gin batches in one linked accounting interval; single-period; no storage, replacement or termination is included. Temporary holding is assigned to the linked lot. | `mass-balance-identity` |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cotton_cultivation` | Managed cotton cultivation | required | one field crop cycle | managed biological production parent; alternative production route delta separates rainfed and irrigated inventory, calculation and validation requirements | ha planted |
| `cotton_harvest` | Harvest, grading and farm hand-off | required | one harvest lot | harvest and grading-sorting of incoming harvestable seed cotton; picker/stripper alternative technology delta changes equipment, loss and contamination records | 1000 kg accepted seed cotton |
| `cotton_ginning` | Ginning and lint hand-off | conditional | ginned route only | material treatment by separation; primary conditioning by drying/cleaning; preservation stabilization to moisture-safe lint; saw/roller alternative technology delta; batch or continuous production | 1000 kg accepted lint |

### Process: Managed cotton cultivation (`cotton_cultivation`)

#### Inputs

##### Product flows

###### Cotton planting seed (`cotton_seed`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Cotton planting seed
- 流属性/单位: Mass / kg
- 数量规则: measured seed mass sown
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per ha planted in one crop cycle
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/ha crop cycle
  - 基准: planting seed per hectare
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### Consolidated agricultural nutrient supply (`nutrient_supply`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Agricultural nutrient supply
- 流属性/单位: Product quantity and nutrient content / kg, m3, kg N, kg P2O5 and kg K2O
- 绑定: 参数化 (`parameterized`)
- 流集合: `flow-set.agricultural-nutrient-supply`
- 流集合版本: `0.3.0`
- 数量规则: measure each supplied product once and calculate nutrient content
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per ha planted in one crop cycle
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: kg product/ha crop cycle
  - 基准: solid nutrient products per hectare
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### Crop protection and defoliation products (`crop_protection`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Crop protection and defoliation products
- 流属性/单位: Mass or volume / kg or L
- 数量规则: measured formulation and active substance
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per ha treated in one crop cycle
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg or L/ha crop cycle
  - 基准: formulated products per hectare
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Irrigation water supply
- 流属性/单位: Volume / m3
- 绑定: 参数化 (`parameterized`)
- 流集合: `flow-set.water-use`
- 流集合版本: `0.2.0`
- 流集合组: `irrigation-water`
- 数量规则: metered or calculated delivered water
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per ha irrigated in one crop cycle
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_irrigation`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 12000
  - 单位: m3/ha crop cycle
  - 基准: delivered irrigation water
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### Field energy supply (`field_energy`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Field energy supply
- 流属性/单位: Energy / MJ or kWh
- 绑定: 参数化 (`parameterized`)
- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 数量规则: measured carrier consumption
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per ha planted in one crop cycle
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_energy`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: MJ/ha crop cycle
  - 基准: field carrier energy
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

##### Elementary flows

###### Agricultural land occupation (`land_occupation`)

按规定的物料状态、路线和去向记录该流。

- 选定流: arable `b88d3b6d-229e-477e-bce1-e16376f75c7b`
- 流属性/单位: Area*time / ha*a
- 绑定: 固定 (`fixed`)
- 数量规则: area multiplied by occupation duration
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per ha planted in one crop cycle
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_field_trace`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: ha*a/ha crop cycle
  - 基准: occupation duration
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvestable seed cotton internal transfer (`standing_seed_cotton`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Harvestable seed cotton
- 流属性/单位: Mass / kg
- 数量规则: harvest output plus measured field loss
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per ha planted in one crop cycle
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_mass_balance`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kg/ha crop cycle
  - 基准: harvestable seed cotton
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct nitrous oxide to air (`direct_n2o`)

按规定的物料状态、路线和去向记录该流。

- 选定流: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg N2O
- 绑定: 固定 (`fixed`)
- 数量规则: IPCC calculation from collected N activity
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per ha planted in one crop cycle
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: kg N2O/ha crop cycle
  - 基准: direct N2O
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### Ammonia to air (`ammonia_air`)

按规定的物料状态、路线和去向记录该流。

- 选定流: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg NH3
- 绑定: 固定 (`fixed`)
- 数量规则: measured or modelled NH3
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per ha planted in one crop cycle
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 200
  - 单位: kg NH3/ha crop cycle
  - 基准: NH3 per hectare
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### Nitrate to receiving water (`nitrate_water`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Nitrate to receiving water
- 流属性/单位: Mass / kg nitrate or kg nitrate-N
- 数量规则: measured or modelled by compartment and basis
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per ha planted in one crop cycle
- 基准类型: crop_cycle (`crop_cycle`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg nitrate/ha crop cycle
  - 基准: nitrate per hectare
  - 基准类型: crop_cycle (`crop_cycle`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

### Process: Harvest, grading and farm hand-off (`cotton_harvest`)

#### Inputs

##### Product flows

###### Harvestable seed cotton internal input (`harvestable_seed_cotton_input`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Harvestable seed cotton
- 流属性/单位: Mass / kg
- 数量规则: linked transfer from cultivation
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per harvest lot
- 基准类型: process_output (`process_output`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_mass_balance`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1500
  - 单位: kg/1000 kg accepted seed cotton
  - 基准: harvest input balance
  - 基准类型: process_output (`process_output`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### Harvest energy supply (`harvest_energy`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Harvest energy supply
- 流属性/单位: Energy / MJ or kWh
- 绑定: 参数化 (`parameterized`)
- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 数量规则: measured carrier use
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: technology_specific (`technology_specific`)
- 归一化基准: per 1000 kg accepted seed cotton
- 基准类型: process_output (`process_output`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_energy`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: MJ/1000 kg seed cotton
  - 基准: harvest energy
  - 基准类型: process_output (`process_output`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted seed cotton (`accepted_seed_cotton`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Seed cotton at farm gate
- 流属性/单位: Mass / kg
- 数量规则: weighed accepted output
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: product_specific (`product_specific`)
- 归一化基准: 1000 kg accepted seed cotton
- 基准类型: reference_flow (`reference_flow`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_mass_balance`
- 来源: mass-balance-identity
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: unginned reference flow
  - 基准类型: reference_flow (`reference_flow`)
  - 证据类型: method_formula (`method_formula`)
  - 来源: `mass-balance-identity`

### Process: Ginning and lint hand-off (`cotton_ginning`)

#### Inputs

##### Product flows

###### Seed cotton internal input (`gin_seed_cotton`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Seed cotton
- 流属性/单位: Mass / kg
- 数量规则: weighed gin intake
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per 1000 kg accepted lint
- 基准类型: process_output (`process_output`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_gin_batch`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1500
  - 上限: 4000
  - 单位: kg seed cotton/1000 kg lint
  - 基准: gin intake
  - 基准类型: process_output (`process_output`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

###### Gin energy supply (`gin_energy`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Gin energy supply
- 流属性/单位: Energy / MJ or kWh
- 绑定: 参数化 (`parameterized`)
- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 数量规则: metered carrier use
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: technology_specific (`technology_specific`)
- 归一化基准: per 1000 kg accepted lint
- 基准类型: process_output (`process_output`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_gin_batch`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: MJ/1000 kg lint
  - 基准: gin energy
  - 基准类型: process_output (`process_output`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Intended ginned cotton lint output (`ginned_lint`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Ginned cotton lint
- 流属性/单位: Mass / kg
- 数量规则: weighed accepted lint
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: product_specific (`product_specific`)
- 归一化基准: 1000 kg accepted lint
- 基准类型: reference_flow (`reference_flow`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_gin_batch`
- 来源: mass-balance-identity
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: ginned reference flow
  - 基准类型: reference_flow (`reference_flow`)
  - 证据类型: method_formula (`method_formula`)
  - 来源: `mass-balance-identity`

###### Intended cottonseed co-product output (`cottonseed_coproduct`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Cottonseed co-product
- 流属性/单位: Mass / kg
- 数量规则: weighed separated cottonseed by destination
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per 1000 kg accepted lint
- 基准类型: process_output (`process_output`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_gin_batch`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2500
  - 单位: kg/1000 kg lint
  - 基准: cottonseed output
  - 基准类型: process_output (`process_output`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

##### Waste flows

###### Gin trash and rejected material (`gin_trash`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Gin trash and rejected cotton
- 流属性/单位: Mass / kg
- 数量规则: weighed or balanced exit by destination
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: per 1000 kg accepted lint
- 基准类型: process_output (`process_output`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_gin_batch`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/1000 kg lint
  - 基准: gin trash
  - 基准类型: process_output (`process_output`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

##### Elementary flows

###### Gin particulate matter to air (`gin_particulate`)

按规定的物料状态、路线和去向记录该流。

- 选定流: Particulate matter to air, size fraction declared
- 流属性/单位: Mass / kg
- 数量规则: measured or calculated after control
- 数值来源模式: calculated_value (`calculated_value`)
- 适用范围: technology_specific (`technology_specific`)
- 归一化基准: per 1000 kg accepted lint
- 基准类型: process_output (`process_output`)
- 证据类型: calculated_from_collection (`calculated_from_collection`)
- 采集协议: `cp_gin_batch`
- 来源:
- 数量范围: 数量校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: kg/1000 kg lint
  - 基准: controlled particulate
  - 基准类型: process_output (`process_output`)
  - 证据类型: reasoned_estimate (`reasoned_estimate`)

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_field` | cultivation | Attribute to linked seed cotton; residues left in field receive no product allocation. | `mass-balance-identity` |
| `allocation_gin` | lint and cottonseed | Prefer subdivision; otherwise declared economic allocation with mass sensitivity. | `iso-14044`; `mass-balance-identity` |
| `allocation_reject` | rework/rejects | Return rework once; route rejects by destination and exclude from accepted output. | `mass-balance-identity` |
| `allocation_runs` | gin runs | Assign startup, cleaning and changeover once by meter or throughput-time driver. | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_trace` | `cotton_cultivation` | land and identity | field log | field, area, dates, cultivar | records and maps | ha | field-cycle | complete cycle | all fields | preserve strata | maps and logs |
| `cp_field_inputs` | `cotton_cultivation` | inputs | invoice/application log | identity, amount, analysis, date | reconcile purchase and use | native | event | complete cycle | all fields | sum once | invoices and logs |
| `cp_irrigation` | `cotton_cultivation` | water | meter | volume, source, field | meter or balance | m3 | event | complete cycle | irrigated fields | sum delivered | calibration |
| `cp_energy` | cultivation; harvest | energy | meter/fuel log | carrier, quantity, equipment | reconcile meters and invoices | MJ; kWh | operation | full route | all equipment | by node | invoices and meters |
| `cp_field_emissions` | `cotton_cultivation` | emissions | calculation | N, factors, compartments | disclosed IPCC tier | kg/ha | field-cycle | complete cycle | all fields | field then aggregate | factor provenance |
| `cp_mass_balance` | cultivation; harvest | biomass | lot mass | intake, accepted, reject, loss, moisture | calibrated scales | kg | lot | all lots | all included fields and harvest lots | close per lot | calibration |
| `cp_gin_batch` | `cotton_ginning` | batch flows | batch log | intake, lint, seed, trash, energy, grade, controls | scales and meters | kg; MJ; kWh | batch | all batches | all included gin lines | close per batch | calibration and bale records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture` | biomass | dry mass = wet mass × (1 − moisture fraction) | wet mass; moisture | dry mass | `mass-balance-identity` |
| `calc_emissions` | soil | apply declared IPCC tier once to collected N activity | N activity; factors | direct emissions | `ipcc-2019-refinement` |
| `calc_normalization` | nodes | normalize after route mass balance closes | totals; accepted output | per 1000 kg | `mass-balance-identity` |
| `calc_gin_balance` | gin | intake = lint + seed + trash + moisture change + loss | batch masses | balance | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product | Route, gate, cultivar, moisture and grade present. | lot/bale record |
| `dq_completeness` | all | One complete crop cycle and all linked batches; missingness quantified. | reconciliation |
| `dq_calibration` | quantities | Current calibration or uncertainty assessment. | certificates |
| `dq_strata` | routes | Alternative routes remain separate until transparent weighting. | stratum ledger |

## 9. 验证规则

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `validate_route` | reference | Exactly one route and gate declared. | error |
| `validate_reference_identity` | reference | Before activation bind exact Product UUID, property and unit group. | error |
| `validate_nutrients` | cultivation | Exactly one set-only nutrient card and no group. | error |
| `validate_balance` | harvest/gin | Close mass balance within declared uncertainty. | error |
| `validate_states` | outputs | Every accepted, downgraded, reworked and discarded state has one destination. | error |
| `validate_runs` | gin | Startup, cleaning and changeover are assigned once. | error |
| `validate_route_deltas` | alternative routes | Name the parent activity, evidence each changed inventory/calculation/validation category, and select one mutually exclusive route per stratum. | error |
| `validate_conditioning_states` | ginning | Record raw seed-cotton intake, any drying/moisture-conditioning inputs, prepared moisture-safe lint, cottonseed, trash, dust, rejects, loss and each hand-off. | error |
| `validate_single_period` | all routes | Confirm one linked accounting interval and require single-period records; no storage, replacement or termination. | error |

## 10. 已发布数据集配置

| Field | Value |
| --- | --- |
| dataset_role | foreground cotton production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | studies matching route, geography, grade and technology |
| excluded_use | yarn, fabric or oil without downstream processes; substitution between seed cotton and lint |
| required_metadata | route, gate, crop year, cultivar, irrigation, harvest, moisture, grade, gin technology, allocation and destinations |
| required_quality_disclosure | coverage, calibration, route weights, balance, emission tier, allocation sensitivity and unresolved identities |
| update_trigger | changed agronomy, technology, yield, grade, markets, allocation, emission method or identity |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-cotton-guide` | official guidance | FAO cotton production and crop-water guidance | cultivation, irrigation and harvest |
| `usda-cotton-ginning` | official guidance | USDA Cotton Ginners Handbook | ginning boundary and records |
| `ipcc-2019-refinement` | method_factor | IPCC 2019 Refinement, Volume 4 | field emissions |
| `iso-14044` | standard | ISO 14044:2006 | allocation |
| `mass-balance-identity` | method_factor | conservation of mass with moisture adjustment | balances and normalization |
