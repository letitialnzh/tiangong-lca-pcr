---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-stimulant-spice-and-aromatic-crops-n-e-c
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 其他刺激性、香辛及芳香作物，未列明者

## 1. 范围与适用性

本 PCR 用于指导一种栽培香辛或芳香作物产品的前景数据包，范围从作物建立和管理到收获，以及在选定时的首次初级调理交接。每个数据包必须描述一个植物种、一个植物器官或产品部分、一条生产路线、一个物理状态和一个申报交接点。不得在同一清单中合并不同物种、器官、鲜干状态、收获日期或生产系统；类别级 PCR 不使这些产品可以互换。

覆盖路线包括受管理的作物生产、目标植物材料的收获或采集，以及可选的首次分选、清理、清洗、干燥或其他简单稳定化。申报交接点应为：(a) 农场交接处的收获作物，或 (b) 首次初级调理交接后的同一作物产品。数据集必须选择一个交接点；若纳入调理，则纳入其输入、输出、损失和适用的田间运输，不得再把原始收获物作为第二个参考输出。

本 PCR 排除咖喱粉和咖喱酱、混合或配制调味品、提取油或油树脂、后续研磨或碾磨、灭菌、混配、零售包装以及后续储存或分销，也排除野外采集物和分类中已有其他具体作物类别覆盖的产品。CPC 3.0 对 01699 的说明包含咖喱粉和咖喱酱以及多个植物种和器官；因此本 PCR 的较窄作物范围不构成对整个 CPC 叶的精确覆盖，采用经审查的 `narrower` 映射关系。

一年生作物、根茎作物和多年生草本或树木可能采用不同的种植、收获和生产期间路线。应依据当前场址和作物记录申报实际路线。多年生作物应分别报告建立期和生产期，或采用第 7 节的期间归属规则。若一项作物有多个预期植物产品，即使本 PCR 参考流只覆盖其中一个，也应披露每个产品及其交接。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-stimulant-spice-and-aromatic-crops-n-e-c |
| classification_refs | CPC 3.0:01699；已接受 `narrower` 映射 |
| covered_products | One cultivated, unmixed and unextracted spice or aromatic crop product, including a specified species and plant part such as saffron stigmas, turmeric rhizomes, dill herb or seed, thyme, bay leaves, Xylopia aethiopica seeds, or angelica stems, at the declared harvest or first primary-conditioning state |
| excluded_products | Curry powders and pastes; other mixed seasonings; extracts and essential oils; ground or milled products; sterilized, blended, or otherwise manufactured products; wild-collected material; products covered by another specific crop category |
| representative_product | One named crop species and plant organ, in one declared fresh or dried state, at either farm harvest handoff or first primary-conditioning handoff |
| production_route | Managed cultivation → crop-specific productive period → harvest/capture → optional primary sorting, cleaning, washing, drying, or simple stabilization → declared handoff |
| market_state | Bulk, unblended agricultural crop material with declared species, plant part, grade, and moisture or other relevant state; no retail presentation |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | One crop-specific spice or aromatic plant product at the selected handoff |
| How much | 1 kg net product at the declared state and gate |
| How well | One botanical species and product part; declared cultivar or variety when known; fresh or dried state; measured moisture content for dried material; declared grade and contamination or rejection criteria |
| How long or cycle | One identified crop lot and crop cycle. For perennial crops, include the establishment and productive periods or document how establishment burdens are attributed across productive output. |
| reference_flow_link | Reference flow object below; UUID intentionally unresolved at this category-level candidate stage |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Crop-specific spice or aromatic product at declared gate (UUID unresolved) |
| 参考流属性 | Mass (UUID unresolved) |
| 参考单位组 | Mass units (UUID unresolved) |
| 参考单位 | kg |
| 必需限定信息 | Botanical species; plant organ or product part; cultivar or variety when known; country and production site; annual, rhizome, or perennial route; crop cycle and harvest lot; fresh/dried/other declared state; moisture content for dried product; grade; harvest or first-conditioning gate; whether washing, drying, stabilization, and off-farm transfer occurred |

不能从宽泛的作物家族标签推断所选 UUID。只有在数据集明确物种、植物部分、物理状态、交接点、地理位置和相关产品分类后，才能解析参考产品。候选面积时间流不是产品参考流。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| crop_product_mass | Reference product, intermediate crop batches, saleable grades and crop residues | Mass; use the verified property exposed by the selected flow | kg | Record net mass and the material state at each handoff. Do not convert fresh to dry mass without measured moisture and a stated calculation. Keep grade-specific and species-specific amounts separate. |
| irrigation_volume | Irrigation water | Volume or mass compatible with the verified water flow | m3 preferred; kg permitted with documented conversion | Use metered or supplier-recorded withdrawal and identify source. If converting volume to mass, state the measured or adopted density and reference condition. Report rainfall separately as site context, not as a purchased water exchange. |
| product_moisture | Fresh or dried reference and intermediate crop products | Mass fraction of water or water activity, as appropriate | % wet basis and/or dimensionless aw | Record the measurement method, sample basis, date and lot. For a dried-state claim, report the applicable buyer or product specification; do not apply one moisture threshold across all species and organs. |
| land_occupation | Crop production | Area-time | ha·year | Measure occupied crop area and time for each declared production period. Distinguish annual crop occupation from establishment and productive years of perennial stands. |
| transport_service | Field-to-conditioner transfer | Mass-distance | t·km | Calculate from net transported crop mass and the loaded distance for the declared route. Report vehicle, load, route, and treatment of empty return separately; do not double-count own-account fuel as a purchased transport service. |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | The declared crop site and its pre-establishment condition, or the beginning of the explicitly selected crop period for an existing stand; report prior land conversion and perennial establishment when they are inside the study period or attributed to the reference product. |
| starting_condition_role | Primary crop producer and first-handoff product supplier |
| product_classification_scope | One CPC 01699 crop product only after species, plant part, physical state, and gate are identified; this PCR does not cover mixed curry powders or pastes and does not imply exact coverage of the full CPC leaf. |
| recursive_input_rule | Record purchased or transferred seed, rhizome, bulb, cutting, seedling, or other propagation material as an actual input. If propagation material is retained from the same site, disclose its source and avoid recursively linking the same crop output as both an upstream dataset and a foreground input. |
| upstream_dataset_requirement | Use verified upstream datasets for purchased propagation material, nutrient products, crop-protection products, water supply, energy carriers, and third-party transport or treatment services when included. Record the actual exchanged product and its composition; do not infer an upstream identity from a Flow Set. |
| disclosure | State the crop and plant part, site and period, production and harvest route, area and yield basis, product state and moisture, selected gate, conditioning operations, measured grades, off-grade and residue destinations, and all period or shared-asset attribution choices. |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| crop_route_start | Crop establishment and management | Include crop establishment, productive management and field occupation for the declared crop periods. Include prior conversion only when it occurred within the selected accounting period or is explicitly attributed under the study goal; report the land history either way. | ipcc-2019-managed-soils |
| harvest_gate | Harvest and first handoff | Treat harvest as a distinct responsibility between managed plant growth and crop conditioning. Record the crop material collected, its state and handoff, plus incidental loss and non-target biomass by actual destination. | codex-spice-mycotoxin-practice-2017; fao-herb-spice-quality-handbook |
| conditioning_gate | First primary conditioning | Include only the operations performed before the selected first conditioning handoff. Washing is conditional on the actual route; do not add a wash step where the crop or contamination protocol does not require it. Drying and any stabilization are route-specific and require measured inputs and product-state checks. | codex-spice-mycotoxin-practice-2017; fao-herb-spice-quality-handbook |
| gate_exclusivity | Reference product | A dataset shall select the harvest gate or the first primary-conditioning gate. When conditioning is included, the harvested crop is an internal intermediate and shall not be counted again as the reference product. |  |
| route_alternatives | Crop and conditioning technology | Declare the selected crop life-history and technology route. Rainfed and irrigated cultivation, manual and mechanized harvest, and ambient/solar and mechanical drying are route alternatives; report observed coexistence where it occurs and never average distinct crop species or product states into one inventory. | codex-spice-mycotoxin-practice-2017; fao-herb-spice-quality-handbook |
| process_handoffs | Crop, harvest and conditioning nodes | Identify the input material state, output state, destination and responsible site for each process. Use measured lot transfer records to connect nodes and reconcile input, product, residue, reject and moisture changes. | codex-spice-mycotoxin-practice-2017 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| managed_crop_production | Managed crop establishment and production | required | Record annual, rhizome, or perennial route; separate establishment and productive periods for multi-year crops. | Managed biological production | Crop area and production period linked to net target-organ output |
| harvest_capture | Harvest and field capture | required | Identify manual or mechanized harvest and the actual target organ, collection state and handoff. | Harvest/capture | Net harvested lot by botanical product and grade |
| primary_conditioning | First primary conditioning and stabilization | conditional | Include when sorting, cleaning, washing, drying, or simple stabilization occurs before the selected gate. If absent, the reference flow leaves at the harvest gate. | Material treatment, preservation and primary conditioning | Net accepted conditioned output and material-state change by lot |

### 过程：作物建立与生产 (`managed_crop_production`)

本过程负责作物建立和生物生产，终点是待收获植物材料交接。收获前期间的输入应归入其实际生产期间。预期输出是申报物种和植物部分；其他预期输出、保留残余物、移除残余物和损失应按实际去向分类。

#### 输入

##### 产品流

###### 种子或其他繁殖材料 (`propagation_material`)

记录用于建立或更新该作物的实际种子、根茎、鳞茎、插条、幼苗或其他种植材料，注明植物来源、形态、数量、期间及采购或自留来源；没有外部或转入材料时省略该交换。

- 选定流: Crop-specific seed or propagation material (identity depends on the declared species and propagation form; UUID unresolved)
- 流属性/单位: Mass / kg or item count as supported by the verified flow
- 数量规则: Measured or supplier-recorded planting material, normalized using the crop-period and reference-product records
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate, with the source crop period retained
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_propagation_material`
- 来源: `unsd-cpc-01699`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg propagation material/kg selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
###### 合并肥料和养分改良剂 (`fertilizer_nutrient_inputs`)

本卡合并记录本过程施用的矿质肥料、有机肥料和养分改良剂。前景记录中保留每个实际产品、施用量、养分等级、时间和田块；Flow Set 不自动选择交换，数据生成时再解析实际产品 UUID。

- 选定流: Fertilizer and nutrient-supply products actually applied to this crop (foreground-expanded from product records)
- 流属性/单位: Product-specific property and native unit for each recorded fertilizer or amendment
- 绑定: parameterized
- Flow Set: flow-set.agricultural-nutrient-supply
- Flow Set version: 0.3.0
- 数量规则: Record actual masses by fertilizer/amendment product and nutrient composition; one consolidated card only
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate, retaining field and crop-period records
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_nutrient_application`
- 来源: `fao-herb-spice-quality-handbook`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 10
  - 单位: kg nutrient products/kg selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
###### 作物保护产品 (`crop_protection_products`)

仅纳入实际施用于作物或干燥区域的产品。在前景证据中记录商品产品和有效成分，并在数据生成时解析实际交换；不得将未识别的农药混合物作为固定流。

- 选定流: Actual crop-protection product(s) used on the declared crop (UUID unresolved until the product is identified)
- 流属性/单位: Product-specific property and native unit for each recorded product
- 数量规则: Measured or invoiced application, with active ingredient, treated area, date and crop lot recorded
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_crop_protection`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg crop-protection product/kg selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
###### 灌溉水 (`irrigation_water`)

记录实际取用或供应的灌溉水。降雨和土壤含水量是场址背景信息，不是产品流交换；无灌溉输入的雨养期间省略本卡。

- 选定流: Irrigation water supplied to this crop (resolved from actual source and selected water flow)
- 流属性/单位: Volume / m3 preferred; use the verified selected flow property and unit
- 绑定: parameterized
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Flow Set group: irrigation-water
- 数量规则: Metered or supplier-recorded irrigation volume by field and period; disclose any conversion from mass to volume
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: Per 1 hectare and crop year, then normalize to the selected gate output
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_irrigation`
- 来源: `fao-herb-spice-quality-handbook`
- 数量范围: Provisional first-pass screening estimate
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 15000
  - 单位: m3/ha·crop-year
  - 基准: One hectare of the declared crop during one production year; normalize the observed annual volume by that period's output for the reference-flow inventory
  - 基准类型: Crop cycle (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 作物生产能源和公用工程 (`crop_production_energy`)

记录田间作业、灌溉泵送、作物保护和生产支持实际使用的能源载体。采集记录中保留各载体交换及其原生单位；能源集合保持集合级绑定，由前景记录决定具体载体。

- 选定流: Energy carriers and utilities actually used in crop production
- 流属性/单位: Carrier-specific property and native unit for each exchange
- 绑定: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- 数量规则: Metered electricity and fuel records; report equipment and operation so own-account fuel is not also counted as a transport service
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: Per 1 hectare and crop year, then normalize to the selected gate output
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_crop_energy`
- 来源: `ipcc-2019-managed-soils`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 5000
  - 单位: kWh-equivalent/t selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
##### 废物流

###### 移除的非目标作物生物量 (`removed_crop_biomass`)

仅当非目标生物量离开作物系统并成为废弃物或残余物时记录。留在田间或还田的生物量在收获过程的基本流行中记录；销售或作为共产品使用时，应归入实际预期产品输出。

- 选定流: Crop-specific non-target plant biomass sent to a declared waste destination (UUID unresolved)
- 流属性/单位: Mass / kg dry matter where measured
- 数量规则: Measured removed mass and actual destination; distinguish dry matter from water loss
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_field_residues`
- 来源: `codex-spice-mycotoxin-practice-2017`
- 数量范围: Physical disposition mass-balance screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg discarded biomass/kg removed biomass
  - 基准: The measured discarded portion of the removed biomass lot
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `mass-balance-identity`

##### 基本流

###### 作物土地占用 (`crop_land_occupation`)

记录申报产品路线占用的作物面积和时间。混合使用田块应测量或说明该作物的面积和期间，并在需要时应用共享设施或共产品规则。

- 选定流: Agricultural land occupation for the declared crop and land-cover state (UUID unresolved until land class is identified)
- 流属性/单位: Area-time / ha·year
- 数量规则: Measured crop area multiplied by the attributed occupation period
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_area_and_land_history`
- 来源: `ipcc-2019-managed-soils`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 10
  - 单位: ha-year/t selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
###### 土地转换 (`crop_land_transformation`)

仅当土地转换发生在研究期间内，或已明确归属于该产品时纳入。识别转换前后土地覆盖、面积、日期和证据；无符合条件的转换时省略，不得把占用报告为转换。

- 选定流: Land transformation from the recorded initial to final land-cover class (UUID unresolved until land class is identified)
- 流属性/单位: Area / ha
- 数量规则: Measured converted area; calculate zero only when the site history confirms no conversion in scope
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_area_and_land_history`
- 来源: `ipcc-2019-managed-soils`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 10
  - 单位: ha transformed/t selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
#### 输出

##### 产品流

###### 待收获目标植物材料 (`harvest_ready_crop_material`)

记录交给独立收获操作的立株或已达收获状态的目标器官。数量和产品身份必须与收获输入采用相同批次基础；除非系统边界在收获处结束，否则它是内部交接。

- 选定流: One declared species and plant organ in its harvest-ready state (UUID unresolved)
- 流属性/单位: Mass / kg at measured moisture, or a declared count unit where mass cannot be measured
- 数量规则: Crop-specific harvestable target-organ amount linked to the lot and the harvest output record
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_harvest_batch`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg harvest-ready material/kg selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
##### 废物流

###### 作物生产损失或移除残余物 (`production_loss_residue`)

仅用于以测量废弃物形式离开生产过程的生物量。应与收获目标作物、可销售产品以及留在或还田的残余物区分。

- 选定流: Crop-specific biomass removed or discarded before harvest (UUID unresolved)
- 流属性/单位: Mass / kg dry matter where measured
- 数量规则: Measured amount and destination by crop period; omit if no such removal occurs
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_field_residues`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg loss or residue/kg harvest-ready material
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
##### 基本流

###### 直接土壤一氧化二氮 (`soil_nitrous_oxide`)

只有在前景数据集具备活动数据并选定管理土壤方法时，才报告直接土壤 N₂O。按申报气候、土壤、氮输入和方法层级选择因子，区分直接排放、间接途径和上游肥料制造，并披露省略的途径。

- 选定流: Nitrous oxide emitted from managed crop soil to air (UUID unresolved)
- 流属性/单位: Mass / kg N2O
- 数量规则: Calculate from collected nitrogen additions and the selected IPCC managed-soils method; retain factor choice and N-to-N2O conversion
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_nutrient_application`
- 来源: `ipcc-2019-managed-soils`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 0.1
  - 单位: kg N2O/kg selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
### 过程：收获与田间采集 (`harvest_capture`)

收获作为独立操作，是因为它从受管理作物中移除申报的植物器官，并在初级调理前形成可测量的采集批次。记录生产或田间背景、实际采集方法和交接，并将预期输出与偶发损失和田间残余物分开。

#### 输入

##### 产品流

###### 待收获作物批次 (`harvest_ready_batch_input`)

接收来自作物生产的待收获批次，将物种、器官、作物期间和批次编号与生产输出匹配；不得将其视为外购上游产品。

- 选定流: Internal transfer of the crop-specific harvest-ready material (same unresolved identity as production output)
- 流属性/单位: Mass / kg at measured moisture, or the same declared count unit used by production output
- 数量规则: Reconciled to the harvest-ready output record for the same lot
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_harvest_batch`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg harvest-ready batch/kg selected product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
###### 收获机械能源 (`harvest_energy`)

记录收获机械、采集设备和田间处理消耗的电力和燃料，使用实测载体。设备进行作物作业时可记录自有车辆燃料，但同一移动不得再计入外购运输服务。

- 选定流: Energy carriers actually used by harvest and field capture
- 流属性/单位: Carrier-specific property and native unit for each exchange
- 绑定: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- 数量规则: Metered energy or fuel records by equipment and harvest operation
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_harvest_energy`
- 来源: `fao-herb-spice-quality-handbook`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 3000
  - 单位: kWh-equivalent/t harvested product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
#### 输出

##### 产品流

###### 初次收获作物产品 (`harvested_target_product`)

记录实测的目标物种和植物器官的收获状态。只有选择收获交接点时才是参考输出；纳入初级调理时，它是内部中间流。

- 选定流: Declared species and plant organ at harvest, in the measured fresh or other as-harvested state (UUID unresolved)
- 流属性/单位: Mass / kg at measured moisture
- 数量规则: Net harvested mass by lot after tare, linked to grade and moisture records
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_harvest_batch`
- 来源: `codex-spice-mycotoxin-practice-2017`
- 数量范围: Harvest-lot reconciliation screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg accepted target product/kg gross target-organ mass handled
  - 基准: Measured gross target-organ mass entering harvest and classified lot outputs
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `mass-balance-identity`

###### 降级可销售作物产品 (`lower_grade_product`)

记录仍按申报用途销售或转移的降级目标作物。它是独立的预期输出和交接，不是废物流；注明等级和去向。

- 选定流: Same declared crop species and plant organ at its actual lower-grade saleable state (UUID unresolved)
- 流属性/单位: Mass / kg at measured moisture
- 数量规则: Measured saleable downgraded mass by lot and destination
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grade_and_disposition`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg lower-grade product/kg harvested crop
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
###### 其他预期作物输出 (`other_intended_crop_outputs`)

对作物路线产生的每个额外预期植物产品或共产品，在前景包中记录其身份、质量、数量和交接。该条件性卡不把不同物种或器官合并为一个交换。

- 选定流: Each actual additional intended crop product, resolved from its own species, organ and handoff (UUID unresolved)
- 流属性/单位: Product-specific; record mass and moisture where applicable
- 数量规则: Measured net amount by intended output and destination
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grade_and_disposition`
- 来源: `unsd-cpc-01699`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg other intended output/kg harvested crop
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
##### 废物流

###### 收获废弃物料 (`harvest_discard`)

记录收获时被拒收或废弃的物料，并与还田物料、可销售降级产品、返工物料和合格目标输出分开。返工时关联批次与返工过程，合格产品只计一次。

- 选定流: Crop-specific rejected or discarded plant material at harvest (UUID unresolved)
- 流属性/单位: Mass / kg at measured moisture
- 数量规则: Measured amount by reason and destination; omit a zero row only when the lot inspection record supports no discard
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grade_and_disposition`
- 来源: `codex-spice-mycotoxin-practice-2017`
- 数量范围: Harvest discard mass-balance screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg discarded material/kg gross harvested material
  - 基准: Measured incoming harvest lot before grade and destination separation
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `mass-balance-identity`

##### 基本流

###### 还田作物残余物 (`crop_residue_to_soil`)

记录属于选定田间清单、留在田间或还田的非目标生物量。注明物种或植物部分及实测干物质基础；同一生物量不得同时计为废弃物或可销售共产品。

- 选定流: Crop-specific plant residue returned to agricultural soil (UUID unresolved)
- 流属性/单位: Mass / kg dry matter
- 数量规则: Measured residue mass or a documented field measurement method by crop period
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_field_residues`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg residue returned to soil/kg harvested crop
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
### 过程：首次初级调理与稳定化 (`primary_conditioning`)

只有当选定交接点前发生初级调理时才纳入本过程。过程从原始收获批次开始，以申报的分选、清理、清洗、干燥或其他稳定化作物产品结束。描述处理前状态、干预、处理后状态和交接。清洗是可选项，不必要时省略；合格、降级、拒收、回收和废弃状态分别记录，批次记录不得混合不同香料或收获日。

#### 输入

##### 产品流

###### 原始收获作物批次 (`raw_harvest_batch`)

只有在选定交接点前发生初级调理时纳入本过程。过程从原始收获批次开始，至分选、清理、清洗、干燥或其他稳定化后的申报产品结束；注明处理前后状态和交接。清洗是可选路线，不需要时省略；合格、降级、拒收、回收和废弃状态分开记录，不混合不同香料或收获日。

- 选定流: Declared crop-specific raw harvested batch (same unresolved identity as harvest output)
- 流属性/单位: Mass / kg at measured moisture
- 数量规则: Weighed net incoming lot, matched to the harvest handoff
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_batch`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg raw harvest batch/kg conditioned product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
###### 调理清洗水 (`conditioning_water`)

仅在实际清洗或湿法清理时纳入。按实际来源和数量记录新鲜或供应水；不要添加默认清洗交换，因为并非所有香料都需要清洗，非必要清洗还可能扩散污染。

- 选定流: Water supplied for actual crop washing or wet cleaning
- 流属性/单位: Volume / m3 preferred; use verified selected-flow property and unit
- 绑定: parameterized
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Flow Set group: process-water
- 数量规则: Metered or supplier-recorded volume by batch, including any recirculation or reuse record
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: Per 1 tonne of conditioned product at the selected gate
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_water`
- 来源: `codex-spice-mycotoxin-practice-2017`; `fao-herb-spice-quality-handbook`
- 数量范围: Provisional first-pass screening estimate for an active wash route
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 10
  - 单位: m3/t conditioned product
  - 基准: One tonne of conditioned crop output; zero applies when no washing occurs
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 调理能源和公用工程 (`conditioning_energy`)

记录清理、风机、泵和干燥使用的实际电力、燃料、外购热或其他能源载体，区分自然或太阳能干燥与动力干燥。载体和数量来自批次及设备记录，因此能源集合保持集合级绑定。

- 选定流: Energy carriers and utilities actually used by first conditioning
- 流属性/单位: Carrier-specific property and native unit for each exchange
- 绑定: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- 数量规则: Metered energy or fuel by operation and batch; retain the carrier and equipment identity
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: Per 1 tonne of conditioned product at the selected gate
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_energy`
- 来源: `codex-spice-mycotoxin-practice-2017`; `fao-herb-spice-quality-handbook`
- 数量范围: Provisional first-pass screening estimate across declared conditioning routes
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 3000
  - 单位: kWh-equivalent/t conditioned product
  - 基准: One tonne of conditioned output; include carrier conversion evidence when energy carriers are compared
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 田间至调理场的运输服务 (`raw_crop_transport`)

当原始作物由田间运往独立的初级调理场所且使用第三方货运时纳入本服务。自有运输应在责任过程中记录实际车辆燃料或能源，并省略本服务以避免重复计算。

- 选定流: Road freight service for the declared raw crop transfer
- 流属性/单位: Mass-distance / t·km
- 绑定: parameterized
- Flow Set: flow-set.transport-service
- Flow Set version: 0.2.0
- Flow Set group: road-freight-transport
- 数量规则: Net crop mass multiplied by loaded route distance; disclose vehicle, load, route and empty-return allocation
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Route-specific (`route_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_conditioner_transport`
- 来源: `iso-14044-lca-allocation`
- 数量范围: Provisional route screening estimate
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1000
  - 单位: t·km/t raw crop
  - 基准: One tonne of raw crop on its loaded field-to-conditioner route; zero applies when conditioning occurs at the field site
  - 基准类型: Transport service (`transport_service`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 外部废水处理服务 (`wastewater_treatment_service`)

仅当调理废水送往外部处理者且处理属于选定产品系统时纳入。记录实际服务和处理去向；同一废水不得同时计入外部服务和场内处理过程。

- 选定流: Wastewater treatment service for conditioning effluent
- 流属性/单位: Mass or volume / native verified service unit
- 绑定: parameterized
- Flow Set: flow-set.waste-treatment-service
- Flow Set version: 0.2.0
- Flow Set group: wastewater-treatment-service
- 数量规则: Supplier invoice, treatment log or metered effluent amount by batch
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_wastewater`
- 来源: `fao-herb-spice-quality-handbook`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 10
  - 单位: m3 treated wastewater/t conditioned product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
#### 输出

##### 产品流

###### 初级调理作物产品 (`conditioned_reference_product`)

记录纳入的初级调理操作后的目标作物净产品，申报其物种、植物部分、鲜干状态、含水率和等级。只有选定初级调理交接点时才是参考输出。

- 选定流: One declared crop-specific spice or aromatic product after first primary conditioning (UUID unresolved)
- 流属性/单位: Mass / kg at measured moisture
- 数量规则: Net accepted output after tare and grading; record mass and lot-level moisture
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_batch`
- 来源: `codex-spice-mycotoxin-practice-2017`
- 数量范围: Conditioning mass-balance screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg accepted output/kg raw crop input
  - 基准: Net accepted product compared with the incoming raw-crop lot; report removed water separately
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `mass-balance-identity`

###### 降级初级调理产品 (`conditioned_lower_grade_product`)

当降级产品按申报用途销售或交接时分别记录。它仍是预期产品输出，不得同时作为废物或合格参考产品。

- 选定流: Same crop-specific material in its actual lower-grade conditioned state (UUID unresolved)
- 流属性/单位: Mass / kg at measured moisture
- 数量规则: Measured net amount by grade and destination
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grade_and_disposition`
- 来源: `codex-spice-mycotoxin-practice-2017`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg lower-grade conditioned product/kg raw crop input
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
###### 其他预期初级调理作物输出 (`conditioned_coproducts`)

记录初级调理中分离的每个额外预期产品及其身份、等级、数量和交接；实际路线没有额外预期产品时省略。

- 选定流: Each actual additional conditioned crop product (UUID unresolved until identity and handoff are declared)
- 流属性/单位: Product-specific; record mass and moisture where applicable
- 数量规则: Measured net amount by product and destination
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grade_and_disposition`
- 来源: `unsd-cpc-01699`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg conditioned co-product/kg raw crop input
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
##### 废物流

###### 调理拒收物和废弃残余物 (`conditioning_rejects`)

按去向记录清理拒料、异物、不合格损伤物料和废弃残余物。返工、回收和可销售降级产品保持独立；同一质量不得同时计为拒收废物和产品。

- 选定流: Crop-specific rejected material and conditioning residue sent to a declared waste destination (UUID unresolved)
- 流属性/单位: Mass / kg at measured moisture or dry matter, as reported
- 数量规则: Weighed or sampled amount by incoming batch and actual destination
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grade_and_disposition`
- 来源: `codex-spice-mycotoxin-practice-2017`; `fao-herb-spice-quality-handbook`
- 数量范围: Conditioning reject mass-balance screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg discarded material/kg raw crop input
  - 基准: Measured incoming raw-crop lot before sorting, conditioning and destination separation
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `mass-balance-identity`

###### 调理废水 (`conditioning_wastewater`)

记录清洗或湿法清理产生的废水，注明实测体积或质量、必要时的悬浮或去除物、去向以及场内或外部处理。干法过程不产生废水时省略。

- 选定流: Wastewater from the declared crop-conditioning batch (UUID unresolved)
- 流属性/单位: Volume / m3 or mass / kg, matching the measured output
- 数量规则: Metered or measured wastewater amount by batch and destination
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: Per 1 kg of product at the selected gate
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_wastewater`
- 来源: `fao-herb-spice-quality-handbook`

- 数量范围: Provisional broad route screening estimate; replace with crop-, site-, technology- and gate-specific records before reviewed or active use
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 10
  - 单位: m3 wastewater/t conditioned product
  - 基准: Broad reasoned estimate for the declared route and selected product gate; it is a screening interval, not a universal permitted value
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)
  - 来源: `mass-balance-identity`
##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | Shared crop and conditioning processes | Subdivide a shared operation when crop-specific inputs, areas, equipment use, batches or outputs can be directly and reliably measured. Keep each crop, plant organ, grade and handoff identifiable. | iso-14044-lca-allocation |
| allocation_coproducts | Multiple intended crop products | Identify every intended output and its handoff. After subdivision, use a causal physical relation where it explains the shared burden. If no defensible physical relation exists, document the selected allocation basis and period, with economic allocation or system expansion only when the study goal supports it; disclose the rationale and sensitivity. Residues and waste without an intended product function receive no co-product allocation. | iso-14044-lca-allocation |
| allocation_productive_periods | Multi-year or perennial crops | Report establishment, non-bearing and productive periods separately. When lifetime attribution is required and subdivision is not possible, attribute establishment burdens across the declared productive-life outputs using recorded or explicitly forecast crop-specific output, and disclose the production-life evidence and sensitivity. Do not assign the same establishment burden again to each productive year. | iso-14044-lca-allocation |
| allocation_shared_assets | Irrigation, harvest and conditioning infrastructure | Attribute shared machinery, pumps, dryers, storage surfaces and utilities first by metered use or operating time. If unavailable, use a documented physical driver such as throughput or capacity use; use another basis only with justification. Record all consuming processes and periods and prevent duplicate attribution. | iso-14044-lca-allocation |
| allocation_reject_rework | Rework, downgrade, recovery and discard routes | Trace each rejected lot to rework, recovery, downgrade or discard. Include incremental rework inputs once, count accepted product only at its final handoff, and report saleable downgraded material as a distinct intended output. Do not assign a waste treatment credit without an evidenced treatment or substitution route. | iso-14044-lca-allocation; codex-spice-mycotoxin-practice-2017 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_propagation_material | managed_crop_production | propagation_material | supplier, seed, nursery or transfer record | species, plant part, propagation form, variety, quantity, source, date, field, crop period | Reconcile invoices, nursery tickets or internal transfer records to planted area | kg or declared count | Each planting or replanting event | Establishment and replanting events in scope | Declared field and crop | Sum by species, propagation form, field and period; normalize to selected gate output | Source documentation, unit check and lot traceability |
| cp_nutrient_application | managed_crop_production | fertilizer_nutrient_inputs; soil_nitrous_oxide | field application log, invoice, soil test | actual product, mass, nutrient grade, N form, organic/mineral status, application date, field, crop period, soil and climate fields used by selected method | Reconcile product purchase/application records and soil or method data | kg product and kg nutrient | Every application; summarize by crop period | All included establishment and productive periods | Declared crop fields and shared application equipment | Keep product exchanges individually recoverable under one PCR card; calculate N inputs from documented composition | Invoices, application logs, calibration and source method record |
| cp_crop_protection | managed_crop_production | crop_protection_products | application log and supplier product record | product, active ingredient, amount, treated area, application date, target, crop stage, field, pre-harvest interval where applicable | Reconcile application records and purchased quantities; note unused stock | kg product and active ingredient | Every application | All included crop periods | Declared crop fields and crop lot | Allocate actual applied amount to treated area and crop period; do not allocate unused stock as applied | Product label, application log, invoice and operator record |
| cp_irrigation | managed_crop_production | irrigation_water | meter or water-supplier record | water source, meter start/end, volume or mass, date, field, crop, irrigated area, pumping event | Read calibrated meter or reconcile supplier records; record conversions | m3 preferred; verified native unit permitted | Each irrigation event or billing period | Each crop year and productive period | Declared crop field and water source | Sum withdrawals by field and crop year; normalize to actual output of that period and selected gate | Meter calibration, invoice, water-source record and period reconciliation |
| cp_crop_energy | managed_crop_production | crop_production_energy | meter, fuel receipt and equipment log | carrier, amount, unit, equipment, operation, field, date, shared use, fuel quality or calorific value when converted | Reconcile fuel/electricity records and allocate shared use by measured operation | Carrier-native unit; kWh-equivalent only with documented conversion | Each operation or billing period | Each crop year and productive period | Declared crop site and equipment | Aggregate by actual process and carrier; normalize using crop-period output | Meter or invoice, equipment log and conversion evidence |
| cp_area_and_land_history | managed_crop_production | crop_land_occupation; crop_land_transformation | field register, map, lease, land history or geospatial record | field boundary, crop area, land-cover class, occupation dates, conversion date and prior/final cover | Reconcile current field map with dated land-history evidence | ha, ha·year, date | Each crop period and each land change | Full declared crop period and any conversion in scope | Declared crop field | Calculate area-time by period; report transformation separately from occupation | Geospatial or land register, dated records and area reconciliation |
| cp_harvest_batch | managed_crop_production; harvest_capture | harvest_ready_crop_material; harvest_ready_batch_input; harvested_target_product | crop lot, harvest ticket and scale record | species, plant organ, field, crop period, harvest date, gross/net/tare mass, moisture, quality state, transfer destination | Weigh or sample each lot using identified calibrated equipment; match inter-process lot id | kg and moisture basis | Each harvest lot | Each harvest date and crop period | Declared field and receiving process | Reconcile production output, harvest input and harvested output without duplicate final output | Calibrated scale, lot identity, moisture measurement and signed handoff |
| cp_field_residues | managed_crop_production; harvest_capture | removed_crop_biomass; production_loss_residue; crop_residue_to_soil | field inspection, sample and residue disposition record | plant part, residue type, wet/dry mass, field, crop period, retained/removed/sold/discarded destination | Measure representative residue or disposal lots and document sampling method | kg dry matter preferred | Each crop period and material-disposition event | All included crop periods | Declared field and biomass type | Partition the measured biomass among retained soil residue, intended output and discard; no duplicate destinations | Sampling records, dry-matter method and destination evidence |
| cp_harvest_energy | harvest_capture | harvest_energy | machinery meter, fuel receipt and harvest log | carrier, amount, equipment, operation, field, date, lot, shared use | Reconcile equipment and fuel logs to harvest operation | Carrier-native unit | Each harvest operation or billing period | Each crop period | Declared harvest equipment and field | Aggregate actual energy by harvest lot and normalize to selected gate output | Meter/invoice, equipment log and lot cross-reference |
| cp_grade_and_disposition | harvest_capture; primary_conditioning | lower_grade_product; other_intended_crop_outputs; harvest_discard; conditioned_lower_grade_product; conditioned_coproducts; conditioning_rejects | grade inspection, packing/scale record, sales or disposal record | material identity, grade, mass, moisture, intended use, sale/transfer/discard/rework destination, lot and handoff | Inspect, weigh and record each declared grade and destination | kg at measured moisture | Each lot and destination event | Each harvest or conditioning lot | Crop species, organ, grade and handoff | Mutually exclusive partition into intended product, rework, recovery, discard and waste; reconcile to incoming batch | Grade record, calibrated scale, sales/treatment documentation and lot ledger |
| cp_conditioning_batch | primary_conditioning | raw_harvest_batch; conditioned_reference_product | receiving, process and output lot records | incoming/output mass, tare, species, organ, crop date, moisture, quality, cleaning/drying route, handoff | Match intake and output lot records and measure moisture at declared points | kg, moisture % wet basis and/or aw | Each incoming and finished lot | Each included first-conditioning operation | Declared first-conditioning site and batch | Reconcile inputs, output grades, rejects, removed water and measured process losses | Calibrated scales, sampling plan, moisture meter check and lot balance |
| cp_conditioning_water | primary_conditioning | conditioning_water | water meter, tank or supplier record | source, volume, meter reading, batch, wash operation, recirculation, reuse, date | Read a calibrated meter or reconcile batch tank volume and supplier record | m3 or verified native unit | Each washing batch | Each included washing operation | Declared conditioning site and crop lot | Sum fresh input separately from recirculated/reused water; normalize to output lot | Meter/tank calibration, invoice and batch log |
| cp_conditioning_energy | primary_conditioning | conditioning_energy | equipment meter, fuel receipt and dryer log | carrier, amount, unit, dryer/cleaner, operation, batch, input/output moisture, operating time, shared use | Reconcile measured energy and operating records to each batch | Carrier-native unit; kWh-equivalent only with documented conversion | Each batch or billing period | Each included conditioning season | Declared first-conditioning facility and equipment | Aggregate by carrier and operation; allocate shared utilities by metered use or operating time | Meter/invoice, dryer log, moisture measurements and calibration record |
| cp_conditioner_transport | primary_conditioning | raw_crop_transport | freight bill, vehicle and route record | crop mass, vehicle, loaded distance, origin, destination, load, date, third-party/own-account status, empty return | Reconcile waybill or vehicle log to weighed crop lot and route distance | t·km, t and km | Every transfer or shipment | Transfers within the selected boundary | Declared field and first-conditioning site | Loaded tonne-kilometres by lot; disclose return-trip allocation and exclude own-account fuel when service flow is used | Waybill, vehicle log, route evidence and lot mass |
| cp_conditioning_wastewater | primary_conditioning | wastewater_treatment_service; conditioning_wastewater | wastewater meter, treatment invoice, discharge or treatment log | wastewater volume/mass, batch, source operation, destination, treatment route, provider and date | Meter, sample or reconcile service provider records to the crop batch | m3 or kg | Each washing batch or billing period | Each included wet-conditioning period | Declared site, discharge point and provider | Reconcile generated effluent with onsite reuse, discharge and treatment; avoid duplicate treatment routes | Meter/sample, provider invoice, discharge permit or treatment log |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| crop_period_normalization | Managed crop production | Normalize each crop-period input by that period's measured net product output at the selected gate. Keep establishment, non-bearing, harvest and productive-period records separately; apply the allocation decision in Section 7 only when combining periods. | Crop-period inputs, field area, product identity, period and net output | Inventory per 1 kg selected reference product plus period-specific source records |  |
| nitrogen_soil_n2o | Direct managed-soil N2O | Apply the selected IPCC managed-soils equation and factor to documented N additions and other required activity data. Convert N2O-N to N2O with the method's molecular-mass ratio. Record factor, tier, climate/soil conditions and excluded indirect pathways; do not silently treat an emission factor as a measured flow. | Nutrient composition and application, relevant soil/crop activity data, selected factor | Direct N2O to air per 1 kg selected reference product | ipcc-2019-managed-soils |
| harvested_lot_balance | Harvest and crop conditioning | Reconcile incoming crop mass to accepted products, lower grades, co-products, waste/rejects, retained or removed residues, removed water and measured unexplained loss on a consistent moisture basis. Investigate any apparent output greater than incoming material; disclose any water or other mass added. | Gross and net batch weights, moisture, grades, residue and destination records | Reconciled product and residue exchanges by lot | mass-balance-identity |
| road_transport_work | Field-to-conditioner freight | Transport work equals net transported mass in tonnes multiplied by the loaded route distance in kilometres. Apply empty return treatment only as an explicit, evidenced allocation; do not combine a service exchange with the same vehicle's direct fuel record. | Net crop mass, loaded route distance, vehicle and empty-return records | t·km by raw crop lot | iso-14044-lca-allocation |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| crop_identity_and_gate | Reference product and all process handoffs | Identify one species, plant part, state, grade, site, period and exclusive harvest or first-conditioning gate. Record product UUID only after exact identity and support rows are verified. | Crop/site records, lot identifier, product description and reviewed identity evidence |
| crop_period_completeness | Annual and perennial production periods | Include establishment, non-bearing and productive periods where relevant; disclose the exact time window, productive-life evidence and any allocation used. | Planting and harvest dates, yield history, field register and calculation record |
| crop_input_completeness | Production and conditioning inputs | Reconcile planting material, all fertilizer/nutrient products, crop-protection inputs, irrigation, energy, conditioning water and purchased service inputs against supplier and operation records. One PCR fertilizer card covers all nutrient product exchanges for the process. | Invoices, application logs, meters, batch records and Flow Set resolution evidence |
| harvest_and_grade_reconciliation | Harvest and conditioning outputs | Account for each declared intended output and handoff. Distinguish accepted output, lower grade, other co-products, rework, retained field residues, waste and unexplained loss; do not count one mass in two destinations. | Lot balance, grade sheets, scale calibration, disposition and sales/treatment records |
| dried_product_state | Dried reference product | Record product moisture and measurement basis at the selected gate; document the relevant stability/product specification and the sampling method. Do not use drying ranges as mandatory product limits. | Moisture meter/oven results, calibration and the applicable buyer or official specification |
| shared_asset_and_period_attribution | Shared equipment, fields, dryers and utilities | Identify each consuming process and crop period. Use measured operation or physical use for shared burdens where possible and record the chosen allocation and evidence. | Asset log, meter, operating time, capacity/use record and allocation worksheet |
| environmental_method_disclosure | Land, soil emissions and waste treatment | Identify land cover, site conditions, emission methods and factors, direct versus indirect pathway, wastewater route and unresolved elementary UUIDs. State exclusions and sensitivity when primary evidence is unavailable. | Land history, activity data, selected IPCC method, method factor citation and treatment evidence |
| range_replacement | Provisional ranges | Treat reasoned estimates as first-pass screens only. Replace them with crop-, region-, technology- and gate-specific evidence or foreground records before any reviewed/active use. Do not interpret them as universal permitted values. | Source-backed regional evidence or reviewed site records and range QA report |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_single_crop_lot | Product identity | Reject an inventory that combines multiple species, plant organs, harvest days, fresh/dried states or cultivation systems without separately identified exchanges and attribution. | unsd-cpc-01699; codex-spice-mycotoxin-practice-2017 |
| validate_gate_and_reference | Reference product | Require exactly one selected gate and one reference product identity. If the gate is harvest, exclude conditioning; if it is primary-conditioned, treat harvested crop as an intermediate and count only conditioned target product at the reference gate. | codex-spice-mycotoxin-practice-2017 |
| validate_output_destinations | All production, harvest and conditioning outputs | Enumerate all intended outputs and their handoffs. Classify each downgraded lot as a saleable product, rework, recovery, discard or waste; classify field residue by whether it stays in soil, is removed or becomes an intended product. | iso-14044-lca-allocation; codex-spice-mycotoxin-practice-2017 |
| validate_crop_periods | Annual, rhizome and perennial routes | Reconcile inputs and outputs by crop period. Check establishment and productive-life attribution for multi-year crops and prevent double attribution of establishment or shared-asset burdens. | iso-14044-lca-allocation |
| validate_flow_set_bindings | Product inputs | Require the fertilizer/nutrient input to use one set-only `flow-set.agricultural-nutrient-supply` reference per process with no group. Require energy supply at set level unless a specific energy function is required by the data; use one process-water group for washing and an irrigation-water group only for actual irrigation. Resolve actual final exchanges to verified UUIDs during data generation. |  |
| validate_mass_and_moisture | Batch amounts and conditioned output | Check scale tare, mass units, moisture basis, grade quantities, removed water and output mass balance. Any output-to-input ratio above 1 requires an evidenced material addition or moisture/state explanation. | mass-balance-identity; codex-spice-mycotoxin-practice-2017 |
| validate_drying_stability | Dried product | Verify moisture or water-activity measurements at declared sampling points and the product's stated acceptance criterion. Codex guidance reports aw below 0.65 as adequate to prevent mycotoxin production in spices; disclose the chosen criterion and applicability rather than treating one moisture value as universal. | codex-spice-mycotoxin-practice-2017 |
| validate_conditioning_routes | Washing, drying and stabilization | Confirm each conditional operation occurred and its inputs, output state and destination are recorded. Omit inactive routes; do not add a wash exchange when no washing took place. | codex-spice-mycotoxin-practice-2017; fao-herb-spice-quality-handbook |
| validate_n2o_method | Soil nitrous oxide | Require activity data, selected factor and method tier for calculated direct soil N2O. Prevent double counting with upstream product datasets or indirect pathways, and leave the UUID unresolved where no compatible air elementary flow is verified. | ipcc-2019-managed-soils |
| validate_shared_assets | Shared equipment and facilities | Check that each shared pump, dryer, machine, field or utility burden is allocated once to its actual consuming processes and periods. | iso-14044-lca-allocation |
| validate_range_status | Candidate amount ranges | Check every range against its amount rule, unit, denominator and route condition. Treat reasoned estimates as replaceable screening values; require evidence-backed and crop-specific ranges before reviewed/active use when a broad estimate is not suitable. |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | Primary foreground crop-production and first-handoff dataset for one spice or aromatic crop product |
| downstream_use | Secondary process data for foreground process packages and their lifecyclemodel projections; background_dataset use only when its source coverage and boundary are suitable |
| allowed_use | Site- and period-specific production of one identified species and plant part at the declared harvest or first primary-conditioning gate |
| excluded_use | An aggregate inventory for all CPC 01699 products; exact coverage of the full CPC leaf; curry powders/pastes, extracts, oils, milled goods, mixtures, wild collection, or post-gate storage and distribution |
| required_metadata | Species and variety when known; plant part; site and geography; cultivation and harvest route; crop period; area and output; gate; fresh/dried state and moisture; grades and co-products; irrigation, nutrient, crop-protection, energy and conditioning records; upstream and Flow Set resolutions; attribution method |
| required_quality_disclosure | UUID gaps, source and measurement coverage, crop periods included, range evidence tier, moisture and grade basis, shared-asset allocation, output and waste reconciliation, emission method and factor, site and year representativeness |
| update_trigger | New route or gate; change in crop species/plant part or product state; new reference identity; new crop-period or allocation evidence; revised official spice handling or emissions methodology; replacement of candidate ranges with reviewed evidence |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-01699 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, code 01699, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification examples; the historical CPC 2.1 note and the current-leaf scope review are kept distinct |
| codex-spice-mycotoxin-practice-2017 | official_guidance | FAO/WHO Codex Alimentarius Commission, REP17/CF, Appendix VI, Code of Practice for the Prevention and Reduction of Mycotoxin Contamination in Spices (2017), https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FMeetings%252FCX-735-12%252FWD%252FREP17_CFe.aspx | Harvest timing, lot separation, crop handling, optional washing, drying, moisture/water-activity checks, grades, rejects and post-harvest route controls |
| fao-herb-spice-quality-handbook | handbook | FAO, Quality assurance for small-scale rural food industries, section 2.4 Herb and spice products, https://www.fao.org/4/V5380E/V5380E09.htm | Farm-to-primary-processing stages, washing, grading, cleaning, winnowing, drying and product-quality measurements |
| ipcc-2019-managed-soils | official_guidance | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct and indirect N2O method selection and nitrogen application activity data |
| iso-14044-lca-allocation | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | Subdivision, co-product attribution, shared process handling and documented allocation choices |
| mass-balance-identity | method_factor | Physical mass-balance identity: input material equals intended outputs, residues, waste, removed water and measured loss on a consistent moisture basis | Candidate QA guardrails for nonnegative mutually exclusive lot disposition; not an external source or product-specific yield factor |
