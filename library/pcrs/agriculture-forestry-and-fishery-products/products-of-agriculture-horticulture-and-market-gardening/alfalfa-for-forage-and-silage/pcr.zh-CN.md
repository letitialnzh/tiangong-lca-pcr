---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.alfalfa-for-forage-and-silage
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 饲草及青贮用苜蓿

## 1. 范围与适用性

本 PCR 适用于苜蓿（*Medicago sativa*）的多年生受控生产和刈割，产品以鲜态、未加工状态在农场门交付，用作直接饲草或在边界外进一步青贮。前景边界始于植株建植的田地准备，涵盖建植年度和已建植植株管理，止于合格鲜刈生物质在农场门称量或采用可信方法估算。

不包括青贮、发酵、田间制干草、人工干燥、打捆、制粒、饲料配制、动物饲喂、场外运输及农场门交付后的储存。放牧苜蓿、苜蓿种子生产、苜蓿草粉、干草、青贮料以及无法分离苜蓿份额的混合饲草均不属于本产品类别。

苜蓿是多年生固氮饲草，管理阶段包括建植、反复再生和多次刈割。雨养与灌溉路线可作为声明的替代路线并存；常规、有机、少耕及不同刈割计划也可并存，但在没有产量加权证据时，不得合并平均路线特定投入、产量、田间排放和植株持续年限。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.alfalfa-for-forage-and-silage |
| classification_refs | CPC 3.0 `01912`, exact path `0 > 01 > 019 > 0191 > 01912` |
| covered_products | freshly cut, unprocessed alfalfa forage at farm gate; fresh alfalfa intended for subsequent ensiling outside this boundary |
| excluded_products | alfalfa hay; silage; dried meal; pellets; seed; grazed biomass; inseparable alfalfa-grass mixtures |
| representative_product | accepted freshly cut alfalfa biomass |
| production_route | managed perennial stand establishment, regrowth management, repeated cutting and fresh farm-gate hand-off |
| market_state | fresh, unprocessed, unbaled biomass at farm gate |

受控生物生产的父活动为多年生田间生产。相对于雨养路线，灌溉会改变供水和泵送能源要求；少耕、有机管理和刈割技术会改变田间作业能源、养分产品、植保产品及损失记录。这些路线仅能作为分别声明的分层并存。青贮和干草制造会在农场门后改变产品状态，因此与本参考产品路线互斥。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | accepted freshly cut alfalfa forage at farm gate |
| How much | 1,000 kg fresh mass |
| How well | unensiled, unfermented, undried and unbaled; declared dry-matter fraction and harvest quality basis; foreign material and rejected biomass excluded |
| How long or cycle | one declared production year and its identified cuts, with establishment burdens annualized over the actual stand life |
| reference_flow_link | output of `forage_harvest_handoff` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Alfalfa for forage and silage `bff9b03b-b5c0-486e-99f6-0a2ab67d725c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | production mix, at farm gate; fresh unprocessed produce; harvest date and cut number; stand age and establishment year; fresh mass and dry-matter fraction; pure alfalfa or declared separable alfalfa share; rainfed or irrigation route |
| 绑定模式 | Fixed (`fixed`) |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_fresh_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or calculate fresh mass at farm-gate hand-off; do not substitute hay-equivalent or dry-matter mass. |
| `dry_matter_disclosure` | every accepted cut | mass fraction | kg dry matter/kg fresh matter | Determine from a representative sample or a documented laboratory result and retain the sampling basis. |
| `area_time_basis` | stand establishment and annual production | area and time | ha, stand-year | Record establishment area, production area, stand age, productive stand life and reporting-year fraction separately. |
| `cut_indexing` | harvest and regrowth periods | count and date | cut, date | Assign every accepted output, field operation and loss to a cut or to the whole stand-year. |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | prepared field before the target alfalfa stand is seeded |
| starting_condition_role | foreground starting condition for stand establishment; prior crop and soil state are disclosed context |
| product_classification_scope | fresh unprocessed alfalfa forage under CPC 3.0 `01912` |
| recursive_input_rule | purchased fresh alfalfa of the same category is not treated as a production input; if blended or resold, model it as a separately traced upstream product and exclude it from on-farm yield |
| upstream_dataset_requirement | use supplier-specific or representative datasets for seed, nutrient products, crop-protection products, water supply and energy carriers selected from foreground records |
| disclosure | field location, stand establishment year, stand age, expected and realized stand life, production year, cut schedule, irrigation route, management route, previous crop, dry-matter method and farm-gate hand-off |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_fresh_gate` | reference product | Stop at accepted freshly cut biomass at farm gate; exclude curing, drying, baling, ensiling, fermentation and downstream feed manufacture. | `uc-alfalfa-establishment`; `usda-ars-alfalfa-management-2024` |
| `boundary_establishment` | stand establishment | Include seedbed preparation, seed and inoculation, establishment inputs, field operations and establishment losses; annualize them only across the actual productive output of that stand. | `umn-alfalfa-establishment` |
| `boundary_regrowth_periods` | established stand | Include production-year management and index operations by stand-year and, where attributable, by regrowth period or cut. | `usda-ars-alfalfa-management-2024` |
| `boundary_water_route` | irrigated production | Include supplied irrigation water and pumping energy only when irrigation occurs; rainfed production records zero supplied irrigation water rather than an imputed requirement. | `umn-alfalfa-drought-2024`; `uc-alfalfa-irrigation` |
| `boundary_direct_field_emissions` | managed soil | Include direct and indirect nitrogen-related field emissions and amendment-related carbon dioxide where the relevant inputs or residue-renewal events occur; avoid double counting returned and removed biomass. | `ipcc-2019-managed-soils` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stand_establishment` | Perennial stand establishment | required | new stand or replacement stand is established | managed biological production preparation and establishment phase | one hectare established stand and its actual productive life |
| `annual_regrowth_management` | 已建植植株再生管理 | required | 每个生产年度 | 跨季连续生产，并划分为可归属的再生期；替代技术与生物生产路线差异保留为分别声明的分层 | 一个生产公顷年及其合格鲜产量 |
| `forage_harvest_handoff` | Repeated cutting and farm-gate hand-off | required | each accepted cut | independent harvest/capture and acceptance node | accepted fresh mass by cut, summed to 1,000 kg reference product |

### 过程：多年生植株建植（`stand_establishment`）

#### 输入

##### 产品流

###### 播种用苜蓿种子（`establishment_seed`）

以纯活种子为基准记录经认证或具有其他文件证明的苜蓿种子。种子标签允许时，应单独记录种衣质量。

- 选定流： Alfalfa seed for sowing
- 流属性/单位： Mass / kg
- 身份解析：一次初搜和一次精炼搜索后仍未解析；返回候选为饲草苜蓿、加工苜蓿或其他饲草物种，不是播种用苜蓿种子。
- 数量规则： measured purchased and used mass, corrected to pure live seed for the seeded area
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per hectare newly established stand before stand-life annualization
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 来源： `umn-alfalfa-establishment`
- 数量范围： Establishment seeding QA range
  - 范围角色： Typical range (`typical_range`)
  - 下限： 10
  - 上限： 30
  - 单位： kg pure live seed/ha established
  - 基准： per hectare newly established stand
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： External source (`external_source`)
  - 来源： `umn-alfalfa-establishment`

###### 根瘤菌接种剂（`establishment_inoculant`）

将用于拌种或沟施的接种剂产品与种子质量分开记录；未供应接种剂时记为零。

- 选定流： Rhizobium inoculant `ead26d6b-6270-4b4f-92a9-e81927e6a718`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式： Fixed (`fixed`)
- 数量规则：按播种面积记录购入并施用的接种剂产品质量
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准：每公顷新建植植株，随后再按植株寿命分摊
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 来源： `umn-alfalfa-establishment`
- 数量范围：暂定接种剂产品 QA 校验范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 5
  - 单位： kg inoculant product/ha established
  - 基准： inoculant product supplied per hectare newly established stand
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 合并的农业养分供应（`establishment_nutrients`）

在本建植卡中合并记录全部矿质肥料、有机肥、石灰和养分改良剂，并在前景生成时按实际产品及养分组成展开。已形成有效根瘤时不得默认矿质氮投入。

- 选定流： Agricultural nutrient supply
- 流属性/单位： Mass / kg
- 绑定模式： Parameterized (`parameterized`)
- Flow Set： `flow-set.agricultural-nutrient-supply`
- Flow Set version： `0.3.0`
- 数量规则： measured product mass and nutrient composition applied before or during establishment
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per hectare newly established stand before stand-life annualization
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 来源： `umn-alfalfa-fertilizer`
- 数量范围： Soil-test-driven establishment nutrient-product screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 10000
  - 单位： kg nutrient and amendment products/ha established
  - 基准： total consolidated product mass per hectare newly established stand
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 建植灌溉水（`establishment_irrigation_water`）

按水源和事件记录用于萌发与建植的供水总量；雨养路线记为零。

- 选定流： Irrigation water
- 流属性/单位： Volume / m3
- 绑定模式： Parameterized (`parameterized`)
- Flow Set： `flow-set.water-use`
- Flow Set version： `0.2.0`
- Flow Set group： `irrigation-water`
- 数量规则： metered delivery or calculated volume from flow rate and operating time
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per hectare newly established stand before stand-life annualization
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 来源： `uc-alfalfa-establishment`
- 数量范围： Provisional establishment-water screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 5000
  - 单位： m3/ha established
  - 基准： gross supplied establishment water per hectare
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 建植田间能源（`establishment_energy`）

记录耕作、苗床准备、播种、镇压、改良剂施用和灌溉泵送所用燃料、电力及符合条件的能源服务。

- 选定流： Establishment energy carriers and qualifying machinery-energy services
- 流属性/单位： Energy / MJ
- 绑定模式： Parameterized (`parameterized`)
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 数量规则： energy converted from measured carrier quantities and electricity records
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Technology-specific (`technology_specific`)
- 归一化基准： per hectare newly established stand before stand-life annualization
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_establishment_records`
- 来源： `uc-alfalfa-establishment`
- 数量范围： Provisional establishment-energy screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 20000
  - 单位： MJ/ha established
  - 基准： field and pumping energy per hectare newly established stand
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 建植期植保产品（`establishment_crop_protection`）

记录建植期实际施用的每种制剂型除草剂、杀菌剂或虫害防治产品；本 PCR 不规定默认处理。

- 选定流： Crop-protection products as applied
- 流属性/单位： Mass / kg
- 身份解析：条件伞形卡延迟解析；前景记录决定制剂产品，搜索返回了多个不兼容或范围不同的农药产品。
- 数量规则： measured formulated-product mass by application event
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per hectare newly established stand before stand-life annualization
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 来源： `uc-alfalfa-establishment`
- 数量范围： Provisional establishment crop-protection screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： kg formulated product/ha established
  - 基准： all establishment applications per hectare
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 建植期土地占用（`establishment_land_occupation`）

记录建植阶段占用的农业土地，不得将其作为产品流投入处理。

- 选定流： Agriculture land occupation `e1d56d4e-afe3-4b92-bd51-0a21f75e50a8`
- 流属性/单位： Area*time `93a60a56-a3c8-21da-a746-0800200c9a66` / ha*a
- 绑定模式： Fixed (`fixed`)
- 数量规则： established area multiplied by establishment-phase duration in years
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per hectare newly established stand before stand-life annualization
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_establishment_records`
- 来源：
- 数量范围： Physical establishment land-time range
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 0
  - 上限： 1
  - 单位： ha*a/ha established
  - 基准： establishment duration cannot exceed the first stand-year
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `area-time-identity`

#### 输出

##### 产品流

###### 转入生产期的已建植苜蓿植株（`established_stand`）

将成功建植的植株及其已归属建植负荷转入后续生产年度；这是前景内部状态，不是参考产品。

- 选定流： Established alfalfa stand, internal transfer
- 流属性/单位： Area / ha
- 身份解析：前景内部转移；不适用外部数据库 UUID。
- 数量规则： surveyed successfully established area
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per hectare seeded area
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 来源： `uc-alfalfa-establishment`
- 数量范围： Established-area mass-balance range
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 0
  - 上限： 1
  - 单位： ha established/ha seeded
  - 基准： successfully established fraction of seeded area
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `area-balance-identity`

##### 废物流

##### 基本流

### 过程：已建植植株再生管理（`annual_regrowth_management`）

#### 输入

##### 产品流

###### 转入生产年度的已建植植株（`stand_year_input`）

记录由建植阶段或上一生产年度转入的生产面积和植株年龄。

- 选定流： Established alfalfa stand, internal transfer
- 流属性/单位： Area / ha
- 身份解析：前景内部转移；不适用外部数据库 UUID。
- 数量规则： productive alfalfa area at the start of the reporting year
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per productive stand-year
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_stand_year_records`
- 来源：
- 数量范围： Productive-area consistency range
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 0
  - 上限： 1
  - 单位： ha productive/ha enrolled
  - 基准： productive fraction of enrolled stand area
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `area-balance-identity`

###### 合并的年度养分供应（`annual_nutrients`）

在本生产年度卡中合并记录全部矿质肥料、有机肥、石灰和养分改良剂。投入应依据土壤检测和产量目标；仅在田间证据证明有必要时记录矿质氮，不得为正常结瘤植株默认氮肥。

- 选定流： Agricultural nutrient supply
- 流属性/单位： Mass / kg
- 绑定模式： Parameterized (`parameterized`)
- Flow Set： `flow-set.agricultural-nutrient-supply`
- Flow Set version： `0.3.0`
- 数量规则： measured product mass and nutrient composition applied in the reporting stand-year
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per productive hectare-year before yield normalization
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_stand_year_records`
- 来源： `umn-alfalfa-fertilizer`
- 数量范围： Soil-test-driven annual nutrient-product screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 2000
  - 单位： kg nutrient and amendment products/ha*a
  - 基准： consolidated annual product mass per productive hectare-year
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 年度灌溉水（`annual_irrigation_water`）

按水源、事件和再生期记录灌溉供水总量；雨养生产记为零。

- 选定流： Irrigation water
- 流属性/单位： Volume / m3
- 绑定模式： Parameterized (`parameterized`)
- Flow Set： `flow-set.water-use`
- Flow Set version： `0.2.0`
- Flow Set group： `irrigation-water`
- 数量规则： metered delivery or calculated volume from flow rate and operating time
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per productive hectare-year before yield normalization
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_stand_year_records`
- 来源： `umn-alfalfa-drought-2024`; `usda-ars-alfalfa-irrigation`
- 数量范围： Source-supported seasonal crop-water screen
  - 范围角色： Typical range (`typical_range`)
  - 下限： 4000
  - 上限： 8000
  - 单位： m3/ha*a
  - 基准： seasonal precipitation plus irrigation-equivalent water use per productive hectare-year; report supplied irrigation separately
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： External source (`external_source`)
  - 来源： `umn-alfalfa-drought-2024`; `usda-ars-alfalfa-irrigation`

###### 年度田间作业能源（`annual_field_energy`）

记录灌溉泵送、巡田、养分及植保产品施用和植株维护使用的燃料、电力及符合条件的能源服务；收获能源在收获节点记录。

- 选定流： Stand-management energy carriers and qualifying machinery-energy services
- 流属性/单位： Energy / MJ
- 绑定模式： Parameterized (`parameterized`)
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 数量规则： energy converted from carrier, meter and qualifying service records
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Technology-specific (`technology_specific`)
- 归一化基准： per productive hectare-year before yield normalization
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_stand_year_records`
- 来源：
- 数量范围： Provisional annual field-energy screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 30000
  - 单位： MJ/ha*a
  - 基准： non-harvest field and pumping energy per productive hectare-year
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 年度植保产品（`annual_crop_protection`）

按日期、有效成分、处理面积和再生期记录每种实际施用的制剂产品。

- 选定流： Crop-protection products as applied
- 流属性/单位： Mass / kg
- 身份解析：条件伞形卡延迟解析；前景记录决定制剂产品，搜索返回了多个不兼容或范围不同的农药产品。
- 数量规则： measured formulated-product mass by application event
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per productive hectare-year before yield normalization
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_stand_year_records`
- 来源： `uc-alfalfa-established-ipm`
- 数量范围： Provisional annual crop-protection screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg formulated product/ha*a
  - 基准： all applications per productive hectare-year
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 生产性农业土地占用（`annual_land_occupation`）

记录报告生产年度所占用的苜蓿生产面积。

- 选定流： Agriculture land occupation `e1d56d4e-afe3-4b92-bd51-0a21f75e50a8`
- 流属性/单位： Area*time `93a60a56-a3c8-21da-a746-0800200c9a66` / ha*a
- 绑定模式： Fixed (`fixed`)
- 数量规则： productive area multiplied by reporting-year fraction
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per productive hectare-year before yield normalization
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_stand_year_records`
- 来源：
- 数量范围： Physical stand-year land-time range
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 0
  - 上限： 1
  - 单位： ha*a/ha*a enrolled
  - 基准： productive fraction of the reporting hectare-year
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `area-time-identity`

#### 输出

##### 产品流

###### 待收获鲜苜蓿生物质（`harvest_ready_biomass`）

按刈割编号将获准刈割的田间生物质转入收获节点；该内部状态不包括未收获再生物和被拒收地块。

- 选定流： Harvest-ready fresh alfalfa biomass, internal transfer
- 流属性/单位： Mass / kg fresh matter
- 身份解析：前景内部转移；不适用外部数据库 UUID。
- 数量规则： measured or estimated standing fresh biomass released to each cut
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per productive hectare and identified cut
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_cut_records`
- 来源：
- 数量范围： Provisional fresh standing-biomass screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 100000
  - 单位： kg fresh matter/ha per cut
  - 基准： biomass released from one productive hectare to an identified cut
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 田间直接与间接氮排放（`managed_soil_n_emissions`）

根据实际氮投入、固氮相关残体更新及其他适用受控土壤来源，按物种和接收环境计算氮排放；不得将此总括卡直接作为最终未分物种交换。

- 选定流： Nitrogen emission species from managed soils
- 流属性/单位： Mass / kg species
- 身份解析：条件伞形卡延迟解析；最终交换必须按接收环境分别解析实际报告的 N2O、NO、NH3 和硝酸根。搜索仅为部分物种找到环境特定候选，没有兼容的一氧化氮候选，也不存在可代表整张卡的单一 UUID。
- 数量规则： calculate separate N2O, NO, NH3 and nitrate-related exchanges using the selected inventory method and recorded activity data
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per productive hectare-year before yield normalization
- 基准类型： N input (`n_input`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_stand_year_records`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Nonnegative method-result screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg emitted species/kg relevant N input
  - 基准： species-specific result per kilogram relevant nitrogen input before yield normalization
  - 基准类型： N input (`n_input`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `ipcc-2019-managed-soils`

###### 改良剂相关二氧化碳（`amendment_co2`）

仅在施用相应产品时计算尿素或碳酸盐改良剂产生的二氧化碳。

- 选定流： Carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CO2
- 绑定模式： Fixed (`fixed`)
- 数量规则： selected method factor multiplied by recorded urea or carbonate amendment mass
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per productive hectare-year before yield normalization
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_stand_year_records`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Nonnegative amendment-carbon screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg CO2/kg applicable amendment product
  - 基准： carbon-dioxide result per kilogram applicable amendment before yield normalization
  - 基准类型： Process output (`process_output`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `ipcc-2019-managed-soils`

### 过程：重复刈割与农场门交付（`forage_harvest_handoff`）

#### 输入

##### 产品流

###### 从田间接收的待收获生物质（`harvest_biomass_input`）

记录进入每次刈割的内部生物质，并保留其生产年度和刈割标识。

- 选定流： Harvest-ready fresh alfalfa biomass, internal transfer
- 流属性/单位： Mass / kg fresh matter
- 身份解析：前景内部转移；不适用外部数据库 UUID。
- 数量规则： mass released by `harvest_ready_biomass` for the identified cut
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per identified cut
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_cut_records`
- 来源：
- 数量范围： Internal-transfer consistency range
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 0
  - 上限： 100000
  - 单位： kg fresh matter/ha per cut
  - 基准： biomass entering one identified cut
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 刈割与收集能源（`harvest_energy`）

记录割草、仅为收集鲜饲草所需的切碎、草条捡拾、田间装载以及移至农场门交付点所用的能源载体和符合条件的机械能源服务；不包括干燥、打捆和青贮能源。

- 选定流： Harvest energy carriers and qualifying machinery-energy services
- 流属性/单位： Energy / MJ
- 绑定模式： Parameterized (`parameterized`)
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 数量规则： energy converted from carrier, meter and qualifying service records by cut
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Technology-specific (`technology_specific`)
- 归一化基准： per 1,000 kg accepted fresh reference product
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_cut_records`
- 来源：
- 数量范围： Provisional fresh-harvest energy screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 5000
  - 单位： MJ/1,000 kg accepted fresh product
  - 基准： cutting, collection and on-farm movement to the reference gate
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格鲜苜蓿饲草（`accepted_fresh_alfalfa`）

这是唯一参考产品输出。记录鲜质量、干物质比例和拒收状态后，方可汇总各次刈割的合格批次。

- 选定流： Alfalfa for forage and silage `bff9b03b-b5c0-486e-99f6-0a2ab67d725c`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式： Fixed (`fixed`)
- 数量规则： exactly 1,000 kg accepted fresh mass after normalization
- 数值来源模式： Fixed value (`fixed_value`)
- 适用范围： Generic (`generic`)
- 归一化基准： reference flow
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Identity reference (`identity_reference`)
- 来源：
- 数量范围： Reference-flow identity
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 1000
  - 上限： 1000
  - 单位： kg fresh matter
  - 基准： one normalized reference flow
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `reference-flow-identity`

##### 废物流

###### 被拒收或损失的刈割生物质（`rejected_cut_biomass`）

记录被拒收、刈割后留在田间、送往单独追踪的回收去向或废弃的生物质。返工或降级物料必须继续关联产生它的刈割批次，且不得计入合格输出。

- 选定流： Rejected or lost fresh alfalfa biomass
- 流属性/单位： Mass / kg fresh matter
- 身份解析：一次初搜和一次精炼搜索后仍未解析；返回的废物流候选为废热、金属/电气废料、废木料、马铃薯拒收物或通用厨余/园林生物废物，并非拒收鲜苜蓿生物质。
- 数量规则： incoming harvest biomass minus accepted fresh output and other measured destinations
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh reference product
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_cut_records`
- 来源： `umn-alfalfa-harvest-loss`
- 数量范围： Provisional rejected/lost biomass screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kg fresh biomass/1,000 kg accepted product
  - 基准： rejected and lost fresh biomass relative to accepted fresh output
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_establishment_life` | establishment burdens | Attribute establishment inputs, emissions and losses to all accepted fresh output produced over the actual stand life. Use realized stand termination and output where known; disclose any prospective lifetime used for an incomplete stand. Do not allocate the same establishment burden again in later stand-years. | `umn-alfalfa-establishment`; `usda-ars-alfalfa-management-2024` |
| `allocation_stand_year` | annual management burdens | Assign stand-year inputs first to the reporting hectare-year, then divide by accepted fresh output from that year. Do not spread annual inputs across other production years. | `area-time-identity` |
| `allocation_cut` | cut-specific operations | Assign harvest energy, cut-specific irrigation and losses to the identified cut; shared annual operations use a documented physical basis such as area or accepted fresh mass across cuts. | `usda-ars-alfalfa-management-2024` |
| `allocation_rejects` | rejected or downgraded biomass | Keep burdens with the producing stand-year and cut unless an evidenced recovered-product allocation is declared. Exclude rejected biomass from accepted reference output. |  |
| `allocation_no_double_count` | all periods | Establishment, stand-year and cut records carry unique phase and period identifiers; each input, output, loss and field event may enter the normalized result once only. |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `stand_establishment` | establishment inputs and successful area | invoices, field-operation logs, seed tags, meter records, soil tests and stand survey | field_id, seeded_area, established_area, seed_mass, pure_live_seed_fraction, inoculant_mass, nutrient_product_mass, nutrient_composition, water_volume, energy_carrier_quantity, operation_date, product_application | reconcile purchase and application records to the target field and survey establishment | stated row units | each event and end-of-establishment survey | entire establishment phase | each target field | sum event quantities; retain product identity; annualize only through `calc_establishment_attribution` | invoices, seed certificates, calibrated meters, soil analyses and dated field logs |
| `cp_stand_year_records` | `annual_regrowth_management` | 生产面积、管理投入与田间排放 | 田间日志、计量记录、发票、土壤和植株检测、天气与排放模型输入 | field_id, stand_age, productive_area, date, regrowth_period, nutrient_product, nutrient_composition, irrigation_volume, energy_quantity, crop_protection_mass, residue_return, amendment_mass | 将每一事件关联到田块、生产年度，并尽可能关联到再生期 | 各行所述单位 | 完整生产年度内的每一事件 | 完整报告生产年度 | 每个生产田块 | 在生产年度内求和；保留再生期标签；按年度合格产量归一化 | 完整事件日志、计量校准、发票和方法版本 |
| `cp_cut_records` | `forage_harvest_handoff` | 刈割投入、合格鲜质量、干物质、能源与拒收物 | 收获机或地磅记录、装运单、燃料记录和代表性样品 | field_id, stand_year, cut_number, harvest_date, incoming_biomass, accepted_fresh_mass, rejected_mass, destination, dry_matter_fraction, energy_quantity | 识别每次刈割并核对进入、合格和拒收质量 | kg, kg/kg, MJ | 每次刈割和每个载荷 | 报告生产年度的全部刈割 | 每个目标田块和农场门交付点 | 按刈割和年度汇总合格载荷；保留刈割特定拒收与能源；归一化为1,000 kg合格鲜质量 | 经校准地磅或有文件记录的产量估算方法、样品链和质量平衡核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_establishment_attribution` | establishment cards | establishment quantity × reporting-year accepted output / accepted output over actual stand life; for a completed stand use realized lifetime output | establishment quantity, stand-year outputs, termination date | establishment burden assigned to reporting output | `area-time-identity` |
| `calc_fresh_normalization` | all cards | attributed row quantity ÷ accepted fresh mass × 1,000 kg | attributed row quantity, accepted fresh mass | row quantity per reference flow | `reference-flow-identity` |
| `calc_energy` | energy cards | sum carrier quantity × declared net-energy conversion; retain carrier identity and do not add service and fuel representations of the same operation | carrier quantities, electricity, conversion factors, operation ids | MJ by process and period |  |
| `calc_cut_mass_balance` | each cut | harvest-ready input = accepted fresh output + rejected/lost biomass + separately traced destinations, within stated measurement uncertainty | incoming biomass, accepted mass, rejected mass, other destinations | reconciled cut mass balance | `mass-balance-identity` |
| `calc_managed_soil_emissions` | nitrogen and amendment emissions | apply the declared inventory-method equations and factors to actual relevant N, urea, lime, residue and renewal activity data; separate species and compartments | recorded activity data, method version and factors | species-specific elementary exchanges | `ipcc-2019-managed-soils` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Confirm fresh, unprocessed, unensiled, undried and unbaled state at farm-gate hand-off. | product description, harvest and dispatch records |
| `dq_period_completeness` | multi-period attribution | Identify establishment phase, every productive stand-year, every included cut, stand termination and any missing records; document prospective lifetime assumptions. | period index and stand history |
| `dq_mass_and_moisture` | accepted output | Use calibrated fresh-mass measurement or a documented field estimate and a representative dry-matter sample for each cut. | calibration, sample and laboratory records |
| `dq_input_completeness` | all processes | Reconcile seed, nutrient products, water, energy and crop-protection records to field area, operation and reporting period. | invoice-to-field reconciliation |
| `dq_route_separation` | alternative routes | Keep rainfed/irrigated, management-system and harvest-technology strata separate unless production-weighted aggregation is demonstrated. | stratum records and weighting calculation |
| `dq_flow_resolution` | parameterized cards | Resolve each generated exchange to one verified Product-flow UUID using actual product, composition, property, unit, geography and provider evidence. | foreground Flow Set selection record |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_gate` | reference product | Reject a package that includes ensiling, fermentation, drying, baling or feed manufacture in the reference-product process. |  |
| `validate_stand_periods` | all processes | Require establishment year, stand age, reporting stand-year, cut identifiers, actual or prospective stand life, and termination treatment; reject double attribution across periods. |  |
| `validate_nutrient_consolidation` | each applicable process | Permit at most one consolidated agricultural-nutrient-supply card and no nutrient group binding; require actual products and nutrient composition downstream. |  |
| `validate_n_fixing_crop` | annual nutrient records | Do not accept routine mineral-N input without evidence of the route-specific need; require nodulation or soil/plant evidence when mineral N is reported. | `umn-alfalfa-fertilizer` |
| `validate_cut_balance` | each cut | Require accepted output plus rejects and other destinations to reconcile with harvest-ready input within disclosed measurement uncertainty. | `mass-balance-identity` |
| `validate_irrigation_route` | water card | Require zero supplied irrigation water for rainfed strata and event-linked measured or calculated delivery for irrigated strata. |  |
| `validate_reject_path` | rejected biomass | Require each rejected state to be left in field, recovered, downgraded or discarded with a declared destination; it shall not enter accepted output. |  |
| `validate_route_delta` | alternative routes | Require evidence for any claimed change in topology, inventory, calculation or validation and prevent averaging mutually exclusive post-harvest product states. |  |
| `validate_range_shape` | every flow card | Require exactly one complete Range with role, lower, upper, unit, basis, basis kind, evidence kind and source ids when externally or method supported. |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground production dataset for fresh farm-gate alfalfa forage |
| downstream_use | secondary dataset and background dataset after review |
| allowed_use | crop-production inventories, livestock-feed supply chains and later silage systems that add downstream transformation explicitly |
| excluded_use | direct representation of hay, silage, pellets, meal, grazed forage, seed production or feed manufacturing |
| required_metadata | location, field, establishment year, stand age and life, reporting year, cut schedule, irrigation and management route, accepted fresh mass, dry-matter fraction, reject destinations and reference-gate evidence |
| required_quality_disclosure | record completeness by phase and cut, mass estimation method, dry-matter sampling, route separation, prospective stand-life assumptions, Flow Set selections and emission-method version |
| update_trigger | changed product gate, new route, revised stand-life attribution, changed cutting schedule, material yield or moisture change, new emission method, or newly verified flow identity |

## 11. 数据源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `umn-alfalfa-establishment` | extension_guidance | University of Minnesota Extension, “Alfalfa establishment: Management strategies”, https://extension.umn.edu/agriculture/crop-production/forages/alfalfa-establishment-management-strategies | pure-live-seed basis, seed rate, coating/inoculation, establishment nutrients and perennial establishment records |
| `umn-alfalfa-fertilizer` | extension_guidance | University of Minnesota Extension, “Alfalfa fertilizer recommendations”, https://extension.umn.edu/agriculture/crop-production/nutrient-management-for-minnesota-crops/fertilizing-alfalfa | soil-test and yield-goal nutrient decisions, lime timing and limits on routine N fertilizer |
| `uc-alfalfa-establishment` | extension_guidance | UC Statewide IPM Program, “Planting and Establishing a Stand”, https://ipm.ucanr.edu/agriculture/alfalfa/planting-and-establishing-a-stand-stand-establishment/ | establishment operations, irrigation, seedbed and stand acceptance |
| `uc-alfalfa-irrigation` | extension_guidance | UC Statewide IPM Program, “Irrigation and Wheel Traffic Considerations”, https://ipm.ucanr.edu/PMG/C001/m001scirrwheel.html | irrigation timing, field traffic and regrowth management |
| `uc-alfalfa-established-ipm` | extension_guidance | UC Statewide IPM Program, “Integrated Weed Management in Established Alfalfa”, https://ipm.ucanr.edu/agriculture/alfalfa/integrated-weed-management-in-established-alfalfa/ | established-stand management, irrigation timing and crop-protection records |
| `umn-alfalfa-drought-2024` | extension_guidance | University of Minnesota Extension, “Alfalfa during drought”, reviewed 2024, https://extension.umn.edu/agriculture/crop-production/forages/alfalfa-during-drought | crop water-use rate, irrigation scheduling and rainfed/irrigated route separation |
| `umn-alfalfa-harvest-loss` | extension_guidance | University of Minnesota Extension, “Alfalfa scissors cut sampling procedure”, https://extension.umn.edu/agriculture/crop-production/forages/alfalfa-scissors-cut-sampling-procedure | harvest quality sampling and harvest-loss evidence |
| `usda-ars-alfalfa-irrigation` | literature | USDA Agricultural Research Service, “Effect of sprinkler irrigation depth and uniformity on alfalfa yield and quality”, https://www.ars.usda.gov/research/publications/publication/?seqNo115=337586 | seasonal water use, multiple cuts and water-productivity context |
| `usda-ars-alfalfa-management-2024` | dataset | USDA Agricultural Research Service project report 440524, FY2024, https://www.ars.usda.gov/research/project/?accnNo=440524&fy=2024 | perennial stand life, cutting schedules, cut contribution and route-specific management |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O, indirect nitrogen emissions, lime/urea CO2 and forage-renewal residue N |
| `area-time-identity` | method_factor | Physical area-time identity | establishment and stand-year attribution |
| `area-balance-identity` | method_factor | Physical area balance identity | seeded, established and productive area checks |
| `mass-balance-identity` | method_factor | Physical mass-conservation identity | cut mass reconciliation and rejected biomass |
| `reference-flow-identity` | method_factor | PCR normalization identity | exact reference output and normalization |
