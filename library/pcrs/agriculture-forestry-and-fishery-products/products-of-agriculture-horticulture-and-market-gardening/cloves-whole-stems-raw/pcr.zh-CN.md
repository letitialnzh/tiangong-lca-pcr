---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cloves-whole-stems-raw
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 丁香（整梗），未加工

## 1. 范围与适用性

本 PCR 涵盖 *Syzygium aromaticum* 的受管理生产、多年生树体建园及生产寿命归属、成熟未开放花蕾簇采收、花蕾/梗分离、分级，以及仅限农场门口交付前完成的调理。接受批次可为声明梗状态的鲜态未加工整花蕾；若干燥属于农场门口路线，也可为农场干燥整花蕾。每个数据集只能声明一种交付状态。

不包括精油提取或蒸馏、研磨、混配、食品或烟制品制造、零售包装和门后运输。脱落梗、已开放花、果实、叶片、腐败花蕾和降级物料不得计入接受参考质量，除非按目的地单独建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cloves-whole-stems-raw |
| classification_refs | CPC 3.0: 01656, Cloves (whole stems), raw |
| covered_products | Whole, unground clove flower buds harvested before opening, with lot-specific attached-stem condition declared, supplied at farm gate as fresh raw or farm-dried raw product |
| excluded_products | Clove oil or oleoresin; ground or blended cloves; detached stems sold for oil; leaves; fruits or mother cloves; opened flowers; manufactured spice preparations; retail-packed product |
| representative_product | Accepted whole unopened clove buds from managed perennial clove trees |
| production_route | Parent activity: managed perennial biological production. Production-route delta: sole/mixed crop and rainfed/supplemental-irrigation stands alter shared-land attribution, irrigation inventory, and records and are separate weighted strata. Technology-route delta: fresh hand-off, sun drying, and assisted drying alter topology, energy, water-loss, quality, and moisture records; one lot follows exactly one route. |
| market_state | Fresh raw or farm-dried raw whole buds at farm gate; moisture, maturity, grade, attached-stem condition, production system, and drying route declared |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | Accepted whole unopened clove buds at the declared farm-gate state |
| How much | 1 kg net accepted product |
| How well | Meets declared grade and moisture specification; excludes detached stems, opened flowers, spoiled buds, foreign matter, and unresolved rejects |
| How long or cycle | One reporting year of a productive perennial stand, with establishment, immature years, productive years, replacements, and termination indexed across the declared productive life |
| reference_flow_link | Net accepted output of `harvest_grade` for fresh hand-off or `conditional_drying` for dried hand-off |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cloves (whole stems), raw `53a5a137-db87-42e1-a85d-4b187eb5281a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; unopened-bud maturity criterion; fresh or farm-dried state; moisture content and basis; attached-stem condition; accepted grade; production system; stand age; reporting year; drying technology if used; farm-gate location |
| Binding | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net mass at hand-off and record moisture and wet/dry basis; do not convert fresh and dried lots without measured moisture. |
| `intermediate_mass` | clusters, buds, stems, residues, rejects, moisture loss | Mass | kg | Weigh each state or reconcile by a documented same-batch mass balance; never count one state twice. |
| `nutrient_content` | consolidated nutrient supply | Mass | kg product and kg nutrient | Collect every mineral fertilizer, organic fertilizer, lime, compost, manure, microbial input, and nutrient-bearing amendment separately with nutrient composition and moisture; aggregate only for the PCR card. |
| `energy_carrier` | fuel and electricity | Energy or carrier mass/volume | MJ, kWh, kg, or L | Retain carrier identity, original quantity, conversion factor, consuming node, batch, and period. |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | Propagation material and prepared site enter establishment; an existing stand enters with age, density, prior establishment history, and remaining productive life declared |
| starting_condition_role | Starting condition for managed perennial production, not a zero-burden assumption |
| product_classification_scope | CPC 3.0 01656 whole raw cloves at farm gate |
| recursive_input_rule | Purchased raw cloves of this category in an aggregated lot remain separately quantified upstream inputs with conforming datasets and are not relabelled as on-farm production |
| upstream_dataset_requirement | Each purchased input and service uses representative upstream data; mixed-crop shared burdens retain the declared causal or allocation basis |
| disclosure | Declare geography, planting stock, sole/mixed crop, density, stand age, establishment year, productive-life assumption, replacement/termination, irrigation, harvest maturity, grade states, fresh/dried hand-off, drying method, moisture basis, and every residue/reject destination |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_perennial_phases` | establishment to farm gate | Include propagation, site preparation, planting, immature management, productive management, replacements, harvest, separation, grading, and route-dependent drying. Attribute establishment and long-lived assets across actual output over their service life. | `fao-ecocrop-clove`; `kau-clove-practices-2016` |
| `boundary_harvest_state` | harvest | Harvest mature unopened buds before flowering; keep clusters and incidental material distinct. Harvest is separate because it removes output while the perennial tree remains productive. | `icar-iisr-clove`; `kau-clove-harvesting` |
| `boundary_conditioning` | post-harvest | Include bud/stem separation and grading. Fresh lots bypass drying; dried lots record method, energy, duration, input/output moisture, mass loss, rejects, and stabilized hand-off. | `kau-clove-harvesting`; `unido-spice-postharvest-2015` |
| `boundary_downstream_exclusion` | downstream | Exclude extraction, distillation, grinding, blending, manufacture, retail packing, and post-gate transport. | `icar-iisr-clove`; `fao-ecocrop-clove` |
| `boundary_route_stratification` | alternative routes | Keep sole/mixed crop and rainfed/irrigated strata separate. Fresh, sun-dried, and assisted-dried lots are mutually exclusive routes and may only be output-weighted from route records. | `kau-clove-practices-2016`; `unido-spice-postharvest-2015` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stand_establishment` | Stand establishment and immature years | required | New, inherited, or replacement burden applies | Establish trees and shared infrastructure | Lifetime accepted output |
| `annual_tree_management` | Productive-year tree management | required | Every productive year | Manage trees and generate harvestable buds | Annual harvested cluster mass |
| `harvest_grade` | Harvest, separation, and grading | required | Every harvest lot | Pick clusters, separate buds/stems, classify accepted/downgraded/rejected states | Accepted fresh bud mass |
| `conditional_drying` | Farm-gate drying and stabilization | conditional | Declared farm-gate product is dried | Stabilize accepted buds by sun, solar, or assisted drying | Accepted dried mass |

### 过程：树体建园与未结果期（`stand_establishment`）

种植、未结果期作业、补植、终止，以及共享灌溉、道路、处理和干燥资产按时期索引，并仅在实际寿命接受产出上年化一次。

#### 输入

##### 产品流

###### 繁殖材料与共享建园资产 (`establishment_materials`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Clove planting material and establishment or shared-infrastructure materials and services
- 流属性/单位： Mass / kg
- 数量规则： Collect planting stock and asset bill of materials separately; attribute replacements and each asset once over service-period accepted output and across all consuming crops, nodes, and periods
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1 kg accepted product over the serviced stand life
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_establishment_assets`
- 来源： `kau-clove-practices-2016`
- 数量范围： 暂定年化建园材料校验范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 5
  - 单位： kg/kg accepted product
  - 基准： attributed planting and asset material per 1 kg lifetime accepted product
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 建园期合并农业养分供应 (`establishment_nutrient_supply`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Mineral fertilizers, organic fertilizers, and nutrient-bearing amendments
- 流属性/单位： Mass / kg
- 绑定模式： `parameterized`
- Flow Set： flow-set.agricultural-nutrient-supply
- Flow Set version： 0.3.0
- 数量规则： Collect every actual product separately with composition and moisture, then sum product mass for this card; retain component records for nutrient and emission calculations
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1 kg accepted product after productive-life attribution
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`
- 来源： `kau-clove-practices-2016`
- 数量范围： 宽泛建园养分供应校验范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： kg product/kg accepted product
  - 基准： annualized aggregate product mass per 1 kg accepted product
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 建园及未结果期灌溉水 (`establishment_water`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Irrigation water
- 绑定模式： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set version： `0.2.0`
- Flow Set group： `irrigation-water`
- 流属性/单位： Volume / m3
- 数量规则： Metered or validated supplemental water, annualized over lifetime accepted output
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1 kg accepted product after productive-life attribution
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_water_records`
- 来源： `kau-clove-practices-2016`
- 数量范围： 暂定建园用水校验范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 50
  - 单位： m3/kg accepted product
  - 基准： annualized supplemental water per 1 kg accepted product
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：结果期树体管理（`annual_tree_management`）

#### 输入

##### 产品流

###### 结果期合并农业养分供应 (`annual_nutrient_supply`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Mineral fertilizers, organic fertilizers, and nutrient-bearing amendments
- 流属性/单位： Mass / kg
- 绑定模式： `parameterized`
- Flow Set： flow-set.agricultural-nutrient-supply
- Flow Set version： 0.3.0
- 数量规则： Collect each actual product, nutrient composition, moisture, date, and treated stand; aggregate product mass only after the component ledger is complete
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1 kg harvested cluster output
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`
- 来源： `kau-clove-practices-2016`; `tnau-clove-practices-2013`
- 数量范围： 宽泛结果期养分供应校验范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： kg product/kg harvested clusters
  - 基准： aggregate nutrient product mass per 1 kg harvested clusters
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 生产年灌溉水 (`annual_irrigation_water`)

将补充灌溉水与植保产品分开记录。

- 选定流： 灌溉水
- 流属性/单位： 体积 / m3
- 绑定模式： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set version： `0.2.0`
- Flow Set group： `irrigation-water`
- 数量规则： 计量或核实输送至生产期种植园的水量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场地特定（`site_specific`）
- 归一化基准： 每 1 kg 收获花簇产出
- 基准类型： 过程产出（`process_output`）
- 证据类型： 由收集数据计算（`calculated_from_collection`）
- 采集协议： `cp_annual_management_inputs`
- 数量范围： 生产年灌溉水筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 30
  - 单位： m3/kg harvested clusters
  - 基准： 每 1 kg 收获花簇产出
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 生产年植保产品 (`annual_crop_protection`)

分别记录每一种实际配方，以便解析具体交换。

- 选定流： 植保产品
- 流属性/单位： 质量 / kg 产品
- 数量规则： 按施用事件和处理种植园记录产品质量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场地特定（`site_specific`）
- 归一化基准： 每 1 kg 收获花簇产出
- 基准类型： 过程产出（`process_output`）
- 证据类型： 由收集数据计算（`calculated_from_collection`）
- 采集协议： `cp_annual_management_inputs`
- 数量范围： 生产年植保产品筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg product/kg harvested clusters
  - 基准： 每 1 kg 收获花簇产出
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 田间能源载体 (`annual_field_energy`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Fuel, electricity, and contracted machine energy
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 流属性/单位： Energy / MJ
- 数量规则： Convert carrier records to delivered energy while preserving carrier identity, original quantity, operation, and period
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1 kg harvested cluster output
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_energy_records`
- 数量范围： 暂定田间能源校验范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： MJ/kg harvested clusters
  - 基准： delivered field energy per 1 kg harvested clusters
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可采收未开放花蕾簇 (`harvestable_clusters`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Mature unopened clove bud clusters on managed trees
- 流属性/单位： Mass / kg
- 数量规则： Measured cluster mass handed to the harvest node by stand and harvest batch
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per productive tree and reporting year
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_harvest_grade_records`
- 来源： `fao-ecocrop-clove`
- 数量范围： 来源支持的单株产量范围
  - 范围角色： 典型范围（`typical_range`）
  - 下限： 1
  - 上限： 12
  - 单位： kg/tree/year
  - 基准： harvestable clove output per productive tree and year
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 外部来源（`external_source`）
  - 来源： `fao-ecocrop-clove`

##### 废物流

###### 田间生物质残余 (`field_residues`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Pruned, fallen, damaged, or otherwise removed clove-tree biomass
- 流属性/单位： Mass / kg dry matter
- 数量规则： Measure or sample dry mass and distinguish retained mulch, composting, burning, disposal, and recovery destinations
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1 kg harvested clusters
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_residue_records`
- 数量范围： 暂定田间残余物校验范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： kg dry matter/kg harvested clusters
  - 基准： field biomass residues per 1 kg harvested clusters
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

###### 管理土壤氧化亚氮 (`managed_soil_n2o`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Dinitrogen monoxide to air
- 流属性/单位： Mass / kg N2O
- 数量规则： Calculate direct and indirect N2O from collected mineral-N, organic-N, residue-N, volatilization, and leaching data using the selected geographically appropriate IPCC tier; convert N2O-N to N2O
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1 kg harvested clusters
- 基准类型： 氮投入（`n_input`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_nutrient_ledger`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： 暂定管理土壤 N2O 校验范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.2
  - 单位： kg N2O/kg harvested clusters
  - 基准： calculated N2O per 1 kg harvested clusters
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

### 过程：采收、分离与分级（`harvest_grade`）

采收批次把采摘和设备服务关联至收集花蕾簇质量。随后分离整花蕾、脱落梗和附带物料。分级区分接受、降级和拒收状态；每种状态均有交付点，拒收物不得在没有记录回路时返回上游，未解决拒收物不得进入接受质量。

#### 输入

##### 产品流

###### 采收能源与设备服务 (`harvest_energy`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Fuel, electricity, and equipment services used to pick and move clusters
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 流属性/单位： Energy / MJ
- 数量规则： Attribute carrier-specific records to harvest batches by measured use or operating time, including cleaning/changeover where present
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1 kg harvested clusters
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_energy_records`
- 数量范围： 暂定采收能源校验范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： MJ/kg harvested clusters
  - 基准： harvest energy per 1 kg harvested clusters
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 接受的鲜态未加工整丁香 (`accepted_fresh_cloves`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Cloves (whole stems), raw `53a5a137-db87-42e1-a85d-4b187eb5281a`
- 流属性/单位： Mass / kg
- 绑定模式： `fixed`
- 数量规则： Net accepted fresh output equals 1 kg for fresh hand-off; for a dried route it is measured input to drying and is not also counted as reference output
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 路线特定（`route_specific`）
- 归一化基准： per 1 kg accepted farm-gate product
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_harvest_grade_records`
- 数量范围： 参考产出归一化校验
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg reference flow
  - 基准： accepted fresh output when fresh hand-off is selected
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `iso-14044-2006`

###### 降级整丁香 (`downgraded_cloves`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Downgraded whole cloves with declared destination
- 流属性/单位： Mass / kg
- 数量规则： Weighed separately and treated as product only when destination and economic function are documented
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1 kg incoming harvested clusters
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_harvest_grade_records`
- 数量范围： 等级状态质量平衡范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg incoming harvested clusters
  - 基准： downgraded cloves per 1 kg incoming clusters
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 废物流

###### 脱落梗、采收损失与分级拒收物 (`harvest_grade_residues`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Detached stems, opened flowers, mother cloves, damaged or spoiled buds, foreign matter, and incidental plant material
- 流属性/单位： Mass / kg
- 数量规则： Weigh each physical state and destination separately; a sold stem or recovered output is separately modelled, while composting, disposal, or field return remains a destination-specific residue/waste route
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1 kg incoming harvested clusters
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_harvest_grade_records`
- 来源： `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- 数量范围： 采收/分级残余物质量平衡范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg incoming harvested clusters
  - 基准： all non-accepted states per 1 kg incoming clusters
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 基本流

### 过程：农场门口干燥与稳定化（`conditional_drying`）

鲜态交付时本节点不启用。干燥路线以接受鲜花蕾为干预前可用状态，以接受干燥整花蕾为稳定化交付状态。日晒、太阳能和辅助干燥保持为独立技术层。

#### 输入

##### 产品流

###### 进入干燥的接受鲜花蕾 (`drying_fresh_input`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Accepted fresh raw whole clove buds
- 流属性/单位： Mass / kg
- 数量规则： Weighed fresh accepted mass entering the same drying batch
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 路线特定（`route_specific`）
- 归一化基准： per 1 kg accepted dried output
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_drying_records`
- 来源： `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- 数量范围： 来源支持的干燥投入范围
  - 范围角色： 典型范围（`typical_range`）
  - 下限： 2.5
  - 上限： 3.5
  - 单位： kg/kg accepted dried output
  - 基准： fresh buds entering drying per 1 kg accepted dried output
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 外部来源（`external_source`）
  - 来源： `kau-clove-harvesting`; `unido-spice-postharvest-2015`

###### 干燥能源载体 (`drying_energy`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Electricity, fuel, and purchased heat used by the declared drying technology
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 流属性/单位： Energy / MJ
- 数量规则： Record every purchased carrier by drying batch; passive sunlight has no purchased-energy exchange but still requires route declaration
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： per 1 kg accepted dried output
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_drying_records`
- 来源： `unido-spice-postharvest-2015`
- 数量范围： 暂定干燥能源校验范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 50
  - 单位： MJ/kg accepted dried output
  - 基准： purchased drying energy per 1 kg accepted dried output
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 接受的干燥未加工整丁香 (`accepted_dried_cloves`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Cloves (whole stems), raw `53a5a137-db87-42e1-a85d-4b187eb5281a`
- 流属性/单位： Mass / kg
- 绑定模式： `fixed`
- 数量规则： Net accepted dried output equals 1 kg when dried hand-off is selected; record final moisture and method
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 路线特定（`route_specific`）
- 归一化基准： per 1 kg accepted farm-gate product
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_drying_records`
- 来源： `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- 数量范围： 参考产出归一化校验
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg reference flow
  - 基准： accepted dried output when dried hand-off is selected
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `iso-14044-2006`

##### 废物流

###### 干燥拒收物 (`drying_rejects`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Mouldy, fermented, scorched, broken, or otherwise rejected buds
- 流属性/单位： Mass / kg
- 数量规则： Weigh by recovery, composting, disposal, or other destination; no reject returns to accepted output
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1 kg fresh buds entering drying
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_drying_records`
- 来源： `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- 数量范围： 干燥拒收物质量平衡范围
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg fresh buds entering drying
  - 基准： drying rejects per 1 kg fresh input
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 基本流

###### 干燥去除水分 (`drying_water_loss`)

该流跨越所述过程边界，并按下述数量规则定量。

- 选定流： Water to air
- 流属性/单位： Mass / kg
- 数量规则： Fresh input minus dried output, rejects, and other measured outputs, cross-checked against input/output moisture
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 路线特定（`route_specific`）
- 归一化基准： per 1 kg accepted dried output
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_drying_records`
- 来源： `kau-clove-harvesting`; `unido-spice-postharvest-2015`
- 数量范围： 来源支持的干燥失水范围
  - 范围角色： 典型范围（`typical_range`）
  - 下限： 1.5
  - 上限： 2.5
  - 单位： kg/kg accepted dried output
  - 基准： water and associated mass loss per 1 kg accepted dried output
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 外部来源（`external_source`）
  - 来源： `kau-clove-harvesting`; `unido-spice-postharvest-2015`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_where_measured` | all nodes | Subdivide and measure route, batch, grade, residue, and destination states before allocation. Accepted output excludes rejects, losses, detached stems, and downgraded material. | `iso-14044-2006` |
| `allocation_perennial_life` | establishment and long-lived assets | Attribute establishment, immature-year, replacement, and termination burdens once across actual accepted output during the declared service/productive life; do not repeat them in annual management. | `fao-ecocrop-clove`; `kau-clove-practices-2016` |
| `allocation_mixed_crop` | mixed stands and shared infrastructure | Prefer measured use, area-time, irrigation volume, operating time, or another causal driver. If causality is unavailable and products have economic functions, use documented economic allocation with sensitivity. | `iso-14044-2006`; `kau-clove-practices-2016` |
| `allocation_batches_routes` | harvest and drying | Link inputs, outputs, cleaning/changeover, and shared-run services to batches or periods; weight route strata by accepted output and count each shared burden once. | `iso-14044-2006` |
| `allocation_rejects` | stems, residues, downgraded and rejected material | Retain burdens with the producing node until documented recovery or product function begins. Separately sold outputs trigger subdivision or allocation; wastes do not. | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_assets` | `stand_establishment` | planting, immature management, replacement, termination, shared assets | invoice, stand log, asset register | dates; planting identity/mass/count; density; site inputs; replacements; removals; materials; service life; consuming crops/nodes/periods; driver | Reconcile invoices, field logs, and asset register to cohorts | kg, count, ha, year | each event and annual review | establishment through termination/cut-off | each cohort and asset | Divide causal share by accepted output over same service period | invoices, georeferenced register, dated logs, maintenance record |
| `cp_nutrient_ledger` | `stand_establishment`; `annual_tree_management` | all mineral/organic fertilizers and nutrient amendments | invoice, application log, certificate | product; mass; N/P2O5/K2O/other nutrients; form; moisture; date; area/trees; phase | Collect components separately; aggregate only to one process card | kg product, kg nutrient, fraction | each application | every establishment and productive year | each stand/block | Sum product mass; calculate nutrient mass by component; resolve actual products to UUIDs | invoice, label, lab result, scale, application log |
| `cp_water_records` | `stand_establishment` | supplemental water | meter/runtime log | source; volume; reading; runtime; pump; stand; date | Meter or validated discharge × runtime | m3 | each event | establishment and immature years | each source/stand | Sum by phase and normalize after lifetime attribution | calibration, pump curve, dated log |
| `cp_annual_management_inputs` | `annual_tree_management` | water and crop protection | meter, invoice, stock/application log | water volume; product and active ingredient; quantity; treated area; date; leftovers | Collect water and each product independently | m3, kg, L | each event | full year | each block | Retain concrete exchanges; normalize to harvested clusters | calibration, invoices, labels, stock reconciliation |
| `cp_energy_records` | `annual_tree_management`; `harvest_grade` | field and harvest energy | receipt, meter, runtime, contractor log | carrier; original quantity; conversion; equipment; runtime; node; batch/period; shared driver | Meter or reconcile purchases and stock | MJ, kWh, kg, L, h | each operation/month | full year and all harvests | each carrier/node | Convert while preserving carrier identity; allocate shared use once | calibration, receipts, machine logs |
| `cp_harvest_grade_records` | `annual_tree_management`; `harvest_grade` | clusters, buds, stems, grades, losses and rejects | lot mass-balance sheet | stand; date; maturity; batch; cluster input; bud/stem condition; accepted fresh or drying input; downgraded/reject states and destinations; moisture | Weigh and inspect every state in the same lot | kg, moisture fraction | each lot | all harvests in year | each block/station | Input = accepted + downgraded + all residues ± documented difference; one accepted hand-off route | calibrated scales, inspection, moisture test, destination receipt |
| `cp_residue_records` | `annual_tree_management` | field biomass | weighing/sampling and destination log | residue type; wet/dry mass; moisture; origin; destination; recovery | Weigh or representative sampling | kg wet/dry | each event/campaign | full year | each stand/destination | Normalize dry matter to harvested clusters; preserve destination rows | scales, sampling plan, moisture and receipts |
| `cp_drying_records` | `conditional_drying` | fresh input, energy, dried output, water loss, rejects | batch sheet, meter, moisture test | input/output/reject mass; input/final moisture and basis; method; dates; duration; carrier; temperature; weather/dryer state | Weigh and moisture-test each batch; meter energy | kg, fraction, MJ, kWh, h, °C | each batch | all dried lots | each dryer/mat/station | Fresh input = dried output + rejects + water/other loss; keep sun/solar/assisted routes separate | scale/meter calibration, moisture method, batch and weather/dryer log |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_lifetime_attribution` | perennial phases and assets | Sum cohort/asset burdens assigned by service period and causal share / accepted output over that period | events; service years; driver; annual output | burden per kg accepted product | `fao-ecocrop-clove`; `iso-14044-2006` |
| `calc_nutrients` | consolidated nutrient cards | Component nutrient mass = wet product mass × dry-matter fraction × declared nutrient fraction; preserve components and sum product mass only for the card | mass; moisture; composition | kg product and nutrient by form | `kau-clove-practices-2016` |
| `calc_soil_n2o` | managed-soil N2O | Apply selected IPCC tier to synthetic/organic/residue N, volatilization, and leaching; convert N2O-N × 44/28 | nutrient ledger; residue N; selected factors | kg N2O per kg clusters | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | harvest/grading/drying | Same-batch input = product outputs + wastes + elementary loss ± documented difference; accepted output excludes unresolved material | masses and moisture | reconciliation and normalized flows | `mass-balance-identity` |
| `calc_route_weighting` | route strata | Sum(route amount × accepted route output) / total accepted output after calculating each route separately | route inventories and outputs | weighted inventory | `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Confirm species, unopened maturity, whole state, stem condition, grade, fresh/dried state, moisture basis, and farm gate for every lot. | specification, inspection/photo, moisture test, ticket |
| `dq_periods` | perennial system | Cover establishment, immature/productive years, replacements, and termination or disclose censored phases and lifetime sensitivity. | cohort, multi-year yield/input, asset records |
| `dq_completeness` | harvest/grading/drying | Account for at least 95% of same-batch input/output mass or explain and correct the gap. | mass-balance and calibration records |
| `dq_route` | alternatives | Keep sole/mixed, rainfed/irrigated, and fresh/sun/assisted-dried records separate until output weighting. | stratified records and worksheet |
| `dq_temporal` | foreground | Cover a complete year and all harvests; use at least three representative productive years when alternate bearing is material, or disclose limitation. | dated input, yield, and lot records |
| `dq_fertilizer` | nutrient supply | Retain each actual product and composition although each process exposes one consolidated nutrient card; resolve every final exchange to a verified UUID. | ledger, label, invoice, lab certificate, resolution record |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require exact flow/property/unit-group UUIDs, 1 kg, and every qualifier; fresh and dried states cannot be silently combined. | `icar-iisr-clove`; `kau-clove-harvesting` |
| `validate_period_attribution` | perennial life/shared assets | Require phase, period, replacement, termination, consuming-node, and attribution records; reject double attribution across establishment, annual management, mixed crops, and assets. | `fao-ecocrop-clove`; `iso-14044-2006` |
| `validate_route_delta` | production/drying alternatives | Require parent activity, changed topology/inventory/calculation/data/validation fields, mutually exclusive lot route, and evidence for each stratum. | `kau-clove-practices-2016`; `unido-spice-postharvest-2015` |
| `validate_batch_reconciliation` | harvest through drying | Require batch/period identifiers, input-output and cleaning/changeover linkage when present, mass reconciliation, and no duplicate shared-run burden. | `mass-balance-identity` |
| `validate_reject_routes` | grading/drying | Every accepted, downgraded, rejected, residue, recovery, and disposal state requires mass and hand-off; reject unresolved material in accepted output or undocumented rework. | `kau-clove-harvesting`; `unido-spice-postharvest-2015` |
| `validate_nutrient_cardinality` | nutrient inputs | Each process has at most one nutrient-supply Product-input card, bound only to `flow-set.agricultural-nutrient-supply@0.3.0` without group; actual products remain individually collected and resolved. | `kau-clove-practices-2016` |
| `validate_drying_condition` | drying | If inactive, drying inputs and dried reference output are absent/zero. If active, require method, energy, fresh/dried mass, moisture, rejects, duration, and stabilized hand-off; count output once. | `kau-clove-harvesting`; `unido-spice-postharvest-2015` |
| `validate_ranges` | all quantitative cards | Require exactly one Range per quantitative card; lower ≤ upper, basis/unit/evidence complete, external bounds source-supported, and EN/ZH/structured aligned. | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | Foreground production package for accepted whole raw cloves at farm gate |
| downstream_use | Reviewed secondary or background datasets for products using farm-gate whole cloves after methodology, identity, route, and quality review |
| allowed_use | Farm-gate LCA of declared fresh or farm-dried whole raw cloves; output-weighted aggregation of evidenced strata |
| excluded_use | Oil, oleoresin, detached stems, ground spice, blends, manufactured products, retail packs, or fresh-to-dried conversion without moisture and route records |
| required_metadata | Geography; planting stock; crop system; stand age/density; establishment/life treatment; reporting years; irrigation; maturity; grade; stem condition; fresh/dried state; moisture basis; drying route; all grade, reject, residue, and recovery destinations |
| required_quality_disclosure | Perennial-phase coverage; data age; measured/estimated shares; route weights; mass-balance closure; nutrient coverage; shared-asset allocation; IPCC tier/factors; unresolved upstream identities; uncertainty/sensitivity |
| update_trigger | Change in identity, productive-life assumption, crop/input regime, harvest/grading, drying, moisture specification, allocation, emission method, or material data refresh |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `icar-iisr-clove` | official_guidance | ICAR-IISR, “Clove – Syzygium aromaticum”, https://spices.res.in/products/spices/clove.html | Identity, perennial growth, pre-opening harvest, downstream oil distinction |
| `fao-ecocrop-clove` | dataset | FAO Ecocrop crop 2462, https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=2462 | Perennial phases, 60–100 year economic life, 1–12 kg/tree/year yield, route context |
| `kau-clove-practices-2016` | official_guidance | Kerala Agricultural University, *Package of Practices Recommendations: Crops 2016*, clove section, https://www.celkau.in/library/pop2016.pdf | Establishment, mixed cropping, irrigation, nutrients, harvest and drying |
| `kau-clove-harvesting` | extension_guidance | Kerala Agricultural University, “Clove: Harvesting”, https://celkau.in/crops/spices/clove/harvesting.php | Harvest maturity, bud/stem separation, sorting, immediate drying, 4–5 days and about two-thirds weight loss |
| `tnau-clove-practices-2013` | official_guidance | Tamil Nadu Agricultural University, *Crop Production Guide: Horticulture Crops 2013*, clove section, https://agritech.tnau.ac.in/ta/pdf/2013/cpg_horti_2013.pdf | Establishment/productive-tree nutrient guidance, harvest and yield context |
| `tnau-clove-practices-web` | extension_guidance | TNAU Agritech Portal, “Horticulture: Spice Crops: Clove”, https://agritech.tnau.ac.in/horticulture/horti_spice%20crops_clove.html | Supplemental irrigation and productive-tree management |
| `unido-spice-postharvest-2015` | handbook | UNIDO/FAO, *Herbs, Spices and Essential Oils: Post-harvest Operations in Developing Countries*, https://downloads.unido.org/ot/47/88/4788781/20001-_23603.PDF | Clove drying, turning, mould prevention, 4–6 days, about two-thirds weight loss, rejects/cleaning |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O method |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | Functional-unit normalization, subdivision and allocation hierarchy |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity for a bounded process batch | Harvest/grading/drying reconciliation and QA ranges |
