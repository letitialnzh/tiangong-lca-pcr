---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fruit-bearing-vegetables
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 其他果实类蔬菜

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0:01239 所涵盖的新鲜、整果、未加工果实类蔬菜生产，范围从露地或设施栽培建植开始，经过受管理生产、采收、可选初级调理，到农场门交付。该分类是一个剩余叶节点；每个数据集必须记录声明的物种、品种、生产路线、地理范围、作物周期和市场状态。只要记录了路线特有投入和边界，露地和设施栽培均可纳入。

本 PCR 排除辣椒和青椒（01231）、黄瓜和小黄瓜（01232）、茄子（01233）、番茄（01234）、南瓜/西葫芦/葫芦（01235）及其他 CPC 叶节点；也排除作为种植材料销售的种子或移栽苗、加工或切割产品、保藏、农场门之后的配送、零售和消费阶段。不得仅为避开更具体的 CPC 分类而将产品归入本剩余类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fruit-bearing-vegetables |
| classification_refs | CPC 3.0:01239 其他果实类蔬菜 |
| covered_products | 归入 CPC 01239 的新鲜、整果、未加工果实类蔬菜，包括 01231–01235 未单独列出的可比物种 |
| excluded_products | CPC 01231–01235 产品；作为种植材料销售的种子或移栽苗；农场门之后加工、切割、保藏、干燥、冷冻、榨汁或包装的产品 |
| representative_product | 声明物种或品种的商品新鲜整果类蔬菜，按声明市场等级分级并在农场门交付 |
| production_route | 声明的露地或设施栽培路线，包括建植、受管理果实类蔬菜生产、采收、可选清洗或初级调理和农场门交付 |
| market_state | 农场门的新鲜整果产品，散装或使用声明的一次包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门的商品新鲜整果其他果实类蔬菜 |
| How much | 1,000 kg |
| How well | 声明物种或品种的新鲜、整果、未加工产品，符合声明的成熟度、外观、缺陷、大小、等级和食品安全标准 |
| How long or cycle | 从种植或移栽到数据集纳入的最后一次采收的一个声明生产周期，并报告生产年度和采收窗口 |
| reference_flow_link | `other_fruit_bearing_vegetable_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Other fruit-bearing vegetables；生产混合，在农场；鲜品、未加工 `64f7d837-21f3-4a2b-ab05-94d62be3ab7f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 声明物种和品种；CPC 01239 分类依据；生产地理范围；生产年度和作物周期日期；露地或设施路线；灌溉或雨养路线；成熟度和采收窗口；大小和市场等级；整果或受损状态；清洗状态；一次包装状态；次品和作物残体去向 |
| 绑定模式 | `fixed` |

参考产品身份已按 CPC 3.0 对应产品流完成平台核验；选定 UUID 不包含数据集版本。质量属性和质量单位组是该参考流的稳定支持对象。

构建前景数据包时，`必需限定信息` 中的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared agricultural field or declared 设施栽培 site receiving seed or transplants, with prior land use, infrastructure status, and pre-plant operations disclosed |
| starting_condition_role | Beginning of the declared species- and route-specific 作物周期 |
| product_classification_scope | 新鲜整果 果实类蔬菜 classified under CPC 3.0:01239 through 农场门 hand-off |
| recursive_input_rule | Purchased seed or transplants are upstream planting-material inputs and are linked once. A product-category output is not recreated as an internal production process merely because a nursery or propagator supplied it. |
| upstream_dataset_requirement | Require compatible upstream datasets for planting material, fertilizers or amendments, crop-protection products, irrigation or purchased water, energy and machinery services, packaging, and treatment services when used. |
| disclosure | Declare species and cultivar, site and route, prior land use, crop-cycle dates, irrigation regime, nutrient products and nutrient basis, crop-protection program, 设施栽培 infrastructure if applicable, field-emission method, residue and reject destinations, harvest and conditioning operations, packaging, and 农场门 hand-off. |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_crop_cycle` | establishment through final harvest | Include field or protected-site establishment, planting or transplanting, crop management, and every harvest belonging to the declared species-, site-, and year-specific 作物周期. | `fao-good-agricultural-practices`; `fao-crop-production-records` |
| `boundary_farm_gate` | harvest and conditioning | End the foreground boundary when the 商品 whole product is transferred at the declared 农场门 hand-off. Include on-farm grading, washing, cooling, and primary packaging only when they occur before that hand-off. | `fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce` |
| `boundary_protected_route` | greenhouse, tunnel, or other 设施栽培 | Include route-specific energy, water, consumables, and infrastructure services that are assigned to the declared 作物周期. Disclose infrastructure lifetime and allocation when the infrastructure is shared. | `fao-protected-cultivation-guidance` |
| `boundary_managed_soils` | nutrient, amendment, residue, and soil flows | Include direct and indirect managed-soil emissions attributable to applied nutrients and returned residues under one declared method. Do not double count emissions already represented by an upstream dataset. | `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture` |
| `boundary_residue_and_reject_fate` | off-grade product, rejects, residues, wastewater, and packaging waste | Record the first declared destination of every non-商品 stream: field return, feed, composting, treatment, disposal, or another documented use. An unreported destination is a data-quality gap and is not an automatic co-product. | `fao-postharvest-handling-vegetables`; `fao-crop-residue-management` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_or_site_establishment` | Field or protected-site establishment and planting | required | once for each declared site, species, route, and 作物周期 | foreground establishment | planted area and planting-material quantity |
| `managed_fruiting_vegetable_production` | Managed fruiting-vegetable production | required | throughout the declared 作物周期 | foreground managed biological production | field- or site-cycle records and 商品 output |
| `harvest_conditioning_and_farm_gate` | Harvest, conditioning, and 农场门 hand-off | required | for each harvest and the final 农场门 transfer | foreground harvest, grading, optional conditioning, and hand-off | 1,000 kg 商品 农场门 product |

### Process: Field or protected-site establishment and planting (`field_or_site_establishment`)

#### 输入

##### 产品流

###### Seed or transplant planting material (`planting_material_input`)

Seed or transplants enter the declared field or protected site as planting material. Record the species, cultivar, supplier state, quantity, and field or site destination; keep planting-material production upstream of this PCR boundary.

- 选定流： Seed or transplant planting material of the declared species or cultivar
- Flow property / unit: Number of items or mass / seed units, plants, or kg
- 数量规则： Record supplier quantity by species, cultivar, site, and 作物周期; convert count to mass only when a documented supplier conversion is available.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per planted hectare or protected-site cycle and per 1,000 kg 商品 农场门 output
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_planting_material_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Provisional planting-material screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 5
  - 单位： kg seed or 1,000 transplants/ha
  - 基准： broad first-pass crop-establishment screen pending species- and supplier-specific records
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Field and site establishment fuel or machinery service (`establishment_energy`)

Fuel, electricity, or a contracted machinery service used for soil preparation, beds, protected-site preparation, mulch installation, or planting crosses the foreground boundary when it is controlled by the reporting operator or purchased as a service.

- 选定流： Field or protected-site establishment fuel, electricity, or machinery service
- Flow property / unit: Mass, energy, or service / kg, kWh, or hectare-service
- 数量规则： Use fuel receipts, machinery logs, meter readings, or supplier service records by site and 作物周期.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per planted hectare or protected-site cycle and per 1,000 kg 商品 output
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_energy_records`
- 来源： `fao-crop-production-records`
- 数量范围： Establishment-energy screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 120
  - 单位： kg fuel or kWh/1,000 kg 商品 output
  - 基准： broad first-pass establishment-energy screen
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

###### Occupied agricultural or 设施栽培 area (`field_or_site_occupation`)

Record the land or site area and occupation duration for the declared 作物周期. Ordinary occupation is an elementary input; it is not a product flow.

- 选定流： Agricultural or 设施栽培 land occupation
- Flow property / unit: Area-time / m2*a
- 数量规则： Multiply declared area by the occupation duration and normalize to 商品 农场门 output.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_site_and_cycle_records`
- 数量范围： Area-occupation screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 12,000
  - 单位： m2*a/1,000 kg 商品 output
  - 基准： broad annual crop-cycle area and duration screen
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

###### Established planted or protected crop site (`established_site_output`)

This internal hand-off records the accepted planted area or protected site entering managed production. It is not the reference product and is not reported as a 商品 output.

- 选定流： Established planted or protected crop site
- Flow property / unit: Area / ha
- 数量规则： Accepted planted or occupied area after establishment losses are recorded.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per declared 作物周期
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_site_and_cycle_records`

##### 废物流

##### 基本流

### Process: Managed fruiting-vegetable production (`managed_fruiting_vegetable_production`)

#### 输入

##### 产品流

###### 农业养分与肥料投入（`managed_fruiting_vegetable_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg 商品 农场门 output
- 基准类型：Crop cycle (`crop_cycle`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围： Nitrogen-input screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 40
  - 单位： kg N/1,000 kg 商品 output
  - 基准： broad first-pass nutrient screen; zero is valid when no nitrogen product is applied and documented
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

- 数量范围： Phosphorus-input screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 25
  - 单位： kg P2O5/1,000 kg 商品 output
  - 基准： broad first-pass nutrient screen; zero is valid when no phosphorus product is applied and documented
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

- 数量范围： Potassium-input screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 60
  - 单位： kg K2O/1,000 kg 商品 output
  - 基准： broad first-pass nutrient screen; zero is valid when no potassium product is applied and documented
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

- 数量范围： Organic-amendment screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1,000
  - 单位： kg product/1,000 kg 商品 output
  - 基准： broad first-pass amendment screen; zero is valid when no organic amendment is applied and documented
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Irrigation water (`irrigation_water_input`)

Delivered irrigation water is recorded when the crop is irrigated. Rainfall is reported as a route qualifier or water-balance input and is not substituted for metered or documented irrigation delivery.

- 选定流： Irrigation water supplied to the crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- 流集： `flow-set.water-use`
- 流集版本： `0.2.0`
- 流集分组： `irrigation-water`
- 数量规则： Use meter records, irrigation schedules with verified delivery, or supplier records by field or protected site and 作物周期.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_irrigation_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Irrigation-water screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 2,000
  - 单位： m3/1,000 kg 商品 output
  - 基准： broad first-pass irrigated and rainfed production screen; zero is valid only with a documented rainfed route
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Crop-protection product (`crop_protection_input`)

Record the active substance or formulated crop-protection product used for the declared 作物周期, including application timing and treated area. Product identity remains a foreground resolution requirement because the broad CPC category spans multiple species.

- 选定流： Crop-protection product or active substance used in the declared route
- Flow property / unit: Mass of product or active substance / kg
- 数量规则： Record product name, active substance, formulation, applied mass or volume, concentration, application date, and treated area.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_crop_protection_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Crop-protection screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 10
  - 单位： kg formulated product/1,000 kg 商品 output
  - 基准： broad first-pass crop-protection screen; zero is valid when no product is used and documented
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

###### Irrigation source withdrawal (`irrigation_source_withdrawal`)

When the foreground package models the removal of water from a natural source, record that withdrawal separately from delivered irrigation water and disclose return flows or losses.

- 选定流： Water resource withdrawal for irrigation
- Flow property / unit: Volume / m3
- 数量规则： Calculate from source meter or documented delivery and the declared conveyance or application loss method.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_irrigation_records`
- 数量范围： Natural-water withdrawal screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 2,500
  - 单位： m3/1,000 kg 商品 output
  - 基准： broad first-pass source-withdrawal screen; zero is valid where no natural-source withdrawal occurs
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

###### Managed crop stand transferred to harvest (`managed_crop_output`)

This internal hand-off transfers the declared crop stand and developing fruit-bearing output to harvest. It is not a second 商品 output and must not be included in the reference amount.

- 选定流： Managed crop stand and developing fruit-bearing output
- Flow property / unit: Mass or site record / kg or declared site unit
- 数量规则： Record the managed 作物周期 and hand-off event; use harvested and 农场门 mass records for final normalization.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per declared 作物周期
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_site_and_cycle_records`

##### 废物流

###### Field losses and uncollected fruit (`field_loss_output`)

Fruit or biomass that remains in the field or is lost before harvest is recorded when it is material to the mass balance. Its destination or fate must be declared.

- 选定流： Uncollected fruit or field biomass loss
- Flow property / unit: Mass / kg
- 数量规则： Reconcile field loss with harvested product, residues, and observed crop-cycle records; state whether the loss remains in field or is removed.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_nutrient_and_residue_records`
- 数量范围： Field-loss screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1,000
  - 单位： kg/1,000 kg 商品 output
  - 基准： broad first-pass field-loss screen pending crop-specific records
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### Direct nitrous oxide from managed soil (`direct_nitrous_oxide_emission`)

Report direct soil nitrous oxide attributable to nutrient and residue inputs using the declared calculation method and nutrient basis. The substance, method, and emission-factor basis must be retained in dataset metadata.

- 选定流： Nitrous oxide to air from managed agricultural soil
- Flow property / unit: Mass / kg N2O
- 数量规则： Calculate with the declared IPCC-compatible or approved site method from applied nutrient and residue records; do not combine direct and indirect emissions in this row.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_nutrient_and_residue_records`
- 来源： `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture`
- 数量范围： Direct-N2O screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 15
  - 单位： kg N2O/1,000 kg 商品 output
  - 基准： broad screening interval for managed-soil direct emissions pending the declared factor method
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： External source (`external_source`)
  - Sources: `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture`

###### Ammonia to air from managed soil (`ammonia_emission`)

Record ammonia emissions attributable to nutrient applications when the selected method requires them. The applied product, nutrient form, placement, and method must be disclosed.

- 选定流： Ammonia to air from managed agricultural soil
- Flow property / unit: Mass / kg NH3
- 数量规则： Calculate from documented nutrient applications and the declared emission-factor method.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_nutrient_and_residue_records`
- 来源： `ipcc-2019-refinement-managed-soils`
- 数量范围： Ammonia screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 10
  - 单位： kg NH3/1,000 kg 商品 output
  - 基准： broad screening interval pending nutrient-form and method-specific evidence
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： External source (`external_source`)
  - Sources: `ipcc-2019-refinement-managed-soils`

###### Nitrate loss to water (`nitrate_water_emission`)

Record nitrate leaving the managed soil system to water when the site method or monitoring record represents this pathway. Do not infer nitrate loss from fertilizer product mass alone without the declared calculation method.

- 选定流： Nitrate to water from the managed production system
- Flow property / unit: Mass / kg nitrate
- 数量规则： Use measured drainage or a documented nutrient-loss model and identify the receiving water compartment.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_nutrient_and_residue_records`
- 来源： `ipcc-2019-refinement-managed-soils`
- 数量范围： Nitrate-loss screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 30
  - 单位： kg nitrate/1,000 kg 商品 output
  - 基准： broad screening interval pending drainage, soil, and nutrient-loss evidence
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Phosphate loss to water (`phosphate_water_emission`)

Record phosphate leaving the managed production system to water when monitoring or an approved site method represents this pathway.

- 选定流： Phosphate to water from the managed production system
- Flow property / unit: Mass / kg phosphate
- 数量规则： Use measured drainage or a documented soil and nutrient-loss model; state whether the reported basis is phosphate or elemental phosphorus.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Crop cycle (`crop_cycle`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_nutrient_and_residue_records`
- 来源： `ipcc-2019-refinement-managed-soils`
- 数量范围： Phosphate-loss screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 10
  - 单位： kg phosphate/1,000 kg 商品 output
  - 基准： broad screening interval pending drainage, soil, and nutrient-loss evidence
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

### Process: Harvest, conditioning, and 农场门 hand-off (`harvest_conditioning_and_farm_gate`)

#### 输入

##### 产品流

###### Harvest fuel or machinery service (`harvest_energy`)

Harvesting, collection, in-field movement, and loading energy or machinery service is included when it occurs before the declared 农场门 hand-off.

- 选定流： Harvest fuel, electricity, or machinery service
- Flow property / unit: Mass, energy, or service / kg, kWh, or tonne-service
- Binding: `parameterized`
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `mobile-machinery-fuel`
- 数量规则： Record fuel, electricity, or contracted service by harvest event and normalize to 商品 output.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_harvest_energy_records`
- 来源： `fao-postharvest-handling-vegetables`
- 数量范围： Harvest-energy screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg fuel/1,000 kg 商品 output
  - 基准： broad harvest and in-field handling screen
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Pre-gate road freight service (`pre_gate_transport_service`)

On-farm or contracted road movement before the declared 农场门 hand-off is included only when it is part of the foreground route. Post-gate distribution is excluded.

- 选定流： Road freight service before 农场门 hand-off
- Flow property / unit: Transport service / tonne-km
- Binding: `parameterized`
- 流集： `flow-set.transport-service`
- 流集版本： `0.2.0`
- 流集分组： `road-freight-transport`
- 数量规则： Calculate from loaded mass, distance, and declared vehicle or service record; exclude distribution after the 农场门.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Route-specific (`route_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_pregate_transport_records`
- 数量范围： Pre-gate transport screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 150
  - 单位： tonne-km/1,000 kg 商品 output
  - 基准： broad on-farm and pre-gate transport screen
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Conditioning and washing water (`conditioning_water`)

Water used for washing, rinsing, or other primary conditioning is included only when it occurs before 农场门 transfer. The conditioning purpose and destination of used water must be recorded.

- 选定流： Process water for washing or primary conditioning
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- 流集： `flow-set.water-use`
- 流集版本： `0.2.0`
- 流集分组： `process-water`
- 数量规则： Use meter, batch, or service records for each conditioning event and distinguish fresh, reused, and discharged water.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning_records`
- 来源： `fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce`
- 数量范围： Conditioning-water screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 20
  - 单位： m3/1,000 kg 商品 output
  - 基准： broad first-pass washing and primary-conditioning screen; zero is valid for unwashed hand-off
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Conditioning electricity (`conditioning_electricity`)

Electricity for pumps, washing equipment, sorting, cooling, or other primary conditioning is included when the equipment is operated before 农场门 transfer.

- 选定流： Electricity for pre-gate conditioning
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `electricity-supply`
- 数量规则： Use meter or equipment records by conditioning batch; allocate shared equipment by mass or operating time with the declared basis.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning_records`
- 来源： `fao-postharvest-handling-vegetables`
- 数量范围： Conditioning-electricity screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 40
  - 单位： kWh/1,000 kg 商品 output
  - 基准： broad first-pass sorting, pumping, and optional cooling screen
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Flexible primary packaging (`flexible_primary_packaging`)

Flexible film, bags, wraps, or similar primary packaging are included only when supplied before 农场门 transfer. The material, mass, reuse status, and packaging loss must be reported.

- 选定流： Flexible primary packaging material
- Flow property / unit: Mass / kg
- Binding: `parameterized`
- 流集： `flow-set.packaging-function`
- 流集版本： `0.2.0`
- 流集分组： `flexible-packaging`
- 数量规则： Record packaging mass by material and batch, including reusable cycles and losses, then normalize to 商品 output.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Route-specific (`route_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_packaging_records`
- 来源： `fao-postharvest-handling-vegetables`
- 数量范围： Flexible-packaging screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： kg/1,000 kg 商品 output
  - 基准： broad first-pass primary-packaging screen; zero is valid for loose 农场门 hand-off
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Rigid container or crate packaging (`rigid_primary_packaging`)

Rigid containers supplied before the 农场门 are recorded by material, mass, number of reuse cycles, and loss. They are not combined with flexible packaging in the same row when the material or reuse basis differs.

- 选定流： Rigid container primary packaging
- Flow property / unit: Mass or count / kg or containers
- Binding: `parameterized`
- 流集： `flow-set.packaging-function`
- 流集版本： `0.2.0`
- 流集分组： `rigid-container-packaging`
- 数量规则： Record container mass, number, material, and reuse cycles; apply the declared allocation over service cycles.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Route-specific (`route_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_packaging_records`
- 来源： `fao-postharvest-handling-vegetables`
- 数量范围： Rigid-packaging screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 150
  - 单位： kg/1,000 kg 商品 output
  - 基准： broad first-pass crate and container screen after reuse allocation
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### Marketable 农场门 product (`marketable_farm_gate_output`)

This is the single reference product output. Report the declared species or cultivar, whole-product state, maturity, grade, moisture basis, packaging state, and 农场门 hand-off with the mass.

- 选定流： Marketable 新鲜整果 other fruit-bearing vegetable at 农场门
- Flow property / unit: Mass / kg
- 数量规则： Normalize the dataset to 1,000 kg of 商品 product transferred at the declared 农场门 hand-off.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： reference output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_harvest_and_grade_records`
- 来源： `codex-cxc-53-2003-fresh-produce`
- 数量范围： Marketable-yield screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1,000
  - 上限： 1,000
  - 单位： kg/1,000 kg 商品 output
  - 基准： declared reference amount at 农场门 hand-off
  - 基准类型： Process output (`process_output`)
  - 证据类型： Collected record (`collected_record`)
  - Collection protocol: `cp_harvest_and_grade_records`

###### Off-grade or downgraded product (`off_grade_product_output`)

Off-grade product remains a product stream only when it has a declared destination such as local sale, feed, processing, or another use. Product that has no use and is discarded is recorded as a waste or loss according to the destination.

- 选定流： Off-grade or downgraded fruit-bearing vegetable product
- Flow property / unit: Mass / kg
- 数量规则： Weigh or calculate each grade and destination after harvest; reconcile the total with harvested and 商品 product.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_harvest_and_grade_records`
- 来源： `fao-postharvest-handling-vegetables`
- 数量范围： Off-grade-product screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kg/1,000 kg 商品 output
  - 基准： broad first-pass grade and destination screen
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### Crop residues and discarded biomass (`crop_residue_output`)

Stems, leaves, roots, un商品 fruit, and other crop biomass leaving or remaining at the 农场门 preparation boundary are recorded by destination. Field return, composting, feed, treatment, and disposal are distinct fates.

- 选定流： Crop residue or discarded biomass from the declared 作物周期
- Flow property / unit: Mass / kg fresh or dry matter
- 数量规则： Record measured or calculated residue mass, moisture basis, and first destination; do not treat field return as a 商品 product.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_nutrient_and_residue_records`
- 来源： `fao-crop-residue-management`
- 数量范围： Crop-residue screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 2,500
  - 单位： kg fresh biomass/1,000 kg 商品 output
  - 基准： broad first-pass harvest-residue and field-residue screen pending species- and moisture-specific records
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Conditioning wastewater (`conditioning_wastewater_output`)

Used water from washing or primary conditioning is recorded when it leaves the declared boundary. Report the volume, treatment or discharge destination, and any embedded product or sediment load separately.

- 选定流： Wastewater from pre-gate washing or conditioning
- Flow property / unit: Volume / m3
- 数量规则： Reconcile discharged volume with conditioning-water input, reuse, evaporation, and retained product water under the declared water-balance method.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_conditioning_records`
- 来源： `fao-postharvest-handling-vegetables`
- 数量范围： Conditioning-wastewater screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 20
  - 单位： m3/1,000 kg 商品 output
  - 基准： broad first-pass pre-gate conditioning-water balance
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Packaging waste and rejected packaging (`packaging_waste_output`)

Packaging offcuts, damaged containers, and rejected packaging are recorded when they leave the foreground boundary. Reusable packaging is separated from single-use waste and allocated over documented service cycles.

- 选定流： Packaging waste or rejected packaging from pre-gate preparation
- Flow property / unit: Mass / kg
- 数量规则： Record material, mass, reuse status, and destination for packaging losses and rejects.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Route-specific (`route_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_packaging_records`
- 来源： `fao-postharvest-handling-vegetables`
- 数量范围： Packaging-waste screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 20
  - 单位： kg/1,000 kg 商品 output
  - 基准： broad first-pass packaging-loss screen
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### Energy-related carbon dioxide (`energy_carbon_dioxide_emission`)

Record carbon dioxide from fuel or electricity used before 农场门 transfer when it is represented as a foreground elementary output. Avoid double counting where the selected upstream energy dataset already includes the emission.

- 选定流： Carbon dioxide to air from pre-gate energy use
- Flow property / unit: Mass / kg CO2
- 数量规则： Calculate from recorded energy carriers and declared emission factors, keeping biogenic and fossil carbon bases distinct where relevant.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Route-specific (`route_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_energy_and_emission_records`
- 来源： `ipcc-2006-guidelines-agriculture`
- 数量范围： Energy-CO2 screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kg CO2/1,000 kg 商品 output
  - 基准： broad pre-gate energy-emission screen pending carrier-specific records and factors
  - 基准类型： Process output (`process_output`)
  - 证据类型： Method formula (`method_formula`)
  - Sources: `ipcc-2006-guidelines-agriculture`

###### Pre-gate particulate matter (`pregate_particulate_emission`)

Report particulate matter from combustion or material handling only when the selected method or site record requires it. State the particle-size basis and receiving medium in the foreground package.

- 选定流： Particulate matter to air from pre-gate operations
- Flow property / unit: Mass / kg particulate matter
- 数量规则： Use carrier- and equipment-specific emission factors or measured records; retain particle-size and source information.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Route-specific (`route_specific`)
- 归一化基准： per 1,000 kg 商品 农场门 output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_energy_and_emission_records`
- 来源： `ipcc-2006-guidelines-agriculture`
- 数量范围： Particulate-emission screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 5
  - 单位： kg particulate matter/1,000 kg 商品 output
  - 基准： broad pre-gate combustion and handling screen
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_same_species_and_route` | multiple fields, sites, cultivars, or protected routes | Keep records separate through normalization. If aggregation is necessary, allocate shared inputs and infrastructure by 商品 mass unless a more representative physical relationship is documented. | `fao-crop-production-records` |
| `allocation_marketable_and_off_grade` | 商品 and declared off-grade product streams | Use mass allocation when off-grade material has a declared product destination. If off-grade material is discarded or returned to soil, model its destination and do not allocate it as a 商品 co-product. | `fao-postharvest-handling-vegetables` |
| `allocation_reusable_packaging` | reusable crates and containers | Allocate packaging production and replacement over documented service cycles and assign losses to the relevant route. A single-use packaging record is not spread over undocumented cycles. | `fao-postharvest-handling-vegetables` |
| `allocation_shared_protected_infrastructure` | shared greenhouse, tunnel, irrigation, cooling, or conditioning equipment | Allocate shared infrastructure and energy by documented occupied area, operating time, throughput, or mass. State the selected basis and avoid assigning all shared burden to one crop without evidence. | `fao-protected-cultivation-guidance` |
| `allocation_residue_destination` | residues and rejects with different destinations | Preserve destination-specific rows. Field return, composting, feed, treatment, and disposal are separate pathways and are not interchangeable co-products. | `fao-crop-residue-management` |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site_and_cycle_records` | `field_or_site_establishment`; `managed_fruiting_vegetable_production` | site, species, route, and 作物周期 | field or protected-site register | species; cultivar; site; area; route; planting and harvest dates; prior land use | operator register and site map | ha and date | each site and cycle | complete declared 作物周期 | declared field or protected site | retain site-cycle rows; aggregate only after review | signed field record, map, and date reconciliation |
| `cp_planting_material_records` | `field_or_site_establishment` | `planting_material_input` | purchase and planting record | supplier; species; cultivar; seed or transplant state; quantity; lot; destination | invoice, supplier label, and planting log | seed units, plants, or kg | each planting event | planting period | site and field | sum by species, cultivar, and cycle | invoice-to-log reconciliation |
| `cp_establishment_energy_records` | `field_or_site_establishment` | `establishment_energy` | fuel, meter, or service record | carrier; quantity; equipment or service; date; field or site; operating hours | receipts, meter readings, and machinery logs | kg, L, kWh, or service unit | each operation | establishment period | site and operation | allocate shared operation by documented area or time | receipt, meter, or service evidence |
| `cp_nutrient_input_records` | `managed_fruiting_vegetable_production` | nutrient input cards | input application record | product; supplier; product mass; nutrient composition; application date; placement; area | invoice, label, application log, and nutrient analysis | kg product and kg nutrient | each application | complete 作物周期 | field or protected site | retain product and nutrient bases without double counting | label, invoice, and application record |
| `cp_irrigation_records` | `managed_fruiting_vegetable_production` | irrigation and withdrawal | water-use record | source; meter; delivery; date; field; conveyance; return or loss | meter data and verified schedule | m3 | daily, batch, or billing period | complete 作物周期 | field or site | reconcile source withdrawal, delivered water, reuse, and discharge | meter calibration and water balance |
| `cp_crop_protection_records` | `managed_fruiting_vegetable_production` | `crop_protection_input` | treatment log | product; active substance; formulation; concentration; rate; area; date; weather | operator log and product label | kg, L, and ha | each treatment | complete 作物周期 | field or site | sum by active substance and product state | label, invoice, and treatment log |
| `cp_nutrient_and_residue_records` | `managed_fruiting_vegetable_production` | soil emissions, field losses, residues | nutrient and residue balance | nutrient inputs; residue mass; moisture; fate; soil or drainage evidence | balance worksheet and measurement or model | kg fresh/dry matter and kg nutrient | each cycle, with events | complete 作物周期 | field or site | reconcile applied inputs, crop uptake, losses, and residue fates | method version, measured data, and review sign-off |
| `cp_harvest_energy_records` | `harvest_conditioning_and_farm_gate` | `harvest_energy` | harvest and loading record | harvest date; equipment; carrier; quantity; operating time; harvested mass | receipts, meter readings, and harvest log | kg, L, kWh, or service unit | each harvest | harvest window | field, site, and harvest event | allocate to product and destinations by harvested mass | harvest log and energy record |
| `cp_harvest_and_grade_records` | `harvest_conditioning_and_farm_gate` | 商品 and off-grade output | weighbridge, scale, or grade record | harvested mass; 商品 mass; grade; reject; destination; moisture; hand-off date | calibrated scale and grade register | kg | each harvest and hand-off | harvest window | site and destination | reconcile harvested mass with all grade and loss rows | scale check, grade register, and delivery record |
| `cp_conditioning_records` | `harvest_conditioning_and_farm_gate` | conditioning water, electricity, and wastewater | batch conditioning record | batch mass; water; electricity; reuse; discharge; equipment; duration | meter, batch log, and water balance | m3, kWh, kg, and date | each batch | conditioning period | conditioning line or site | allocate shared utilities by batch mass or time | meter records and batch reconciliation |
| `cp_packaging_records` | `harvest_conditioning_and_farm_gate` | packaging and packaging waste | packaging issue and loss record | material; mass; container count; reuse cycles; batch; loss; destination | invoice, material issue record, and reuse log | kg and units | each packaging batch | pre-gate preparation period | site and packaging line | allocate reusable packaging over verified service cycles | invoice, reuse log, and loss record |
| `cp_pregate_transport_records` | `harvest_conditioning_and_farm_gate` | `pre_gate_transport_service` | movement or service record | loaded mass; distance; vehicle or service; date; origin; destination | transport log or supplier record | tonne-km | each movement | pre-gate period | site to 农场门 hand-off | sum only movements inside the declared boundary | trip log or supplier invoice |
| `cp_energy_and_emission_records` | `field_or_site_establishment`; `harvest_conditioning_and_farm_gate` | energy-related emissions | energy and factor worksheet | carrier; quantity; factor; biogenic/fossil basis; equipment; method version | measured energy and approved factor calculation | kg CO2 and kg particulate matter | each reporting period | complete declared cycle | declared route | calculate by carrier and retain factor basis | factor source, meter, and calculation review |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | `normalized amount = recorded amount / 商品 农场门 mass * 1,000 kg` | recorded amount; 商品 农场门 mass | normalized row value | `mass-balance-identity` |
| `calc_species_route_aggregation` | mixed species, cultivars, sites, or routes | Aggregate only after each row is normalized or allocate shared inputs by the declared physical basis; retain the composition table. | site-cycle rows; allocation basis | aggregated PCR value | `fao-crop-production-records` |
| `calc_nutrient_content` | N, P, K, and organic nutrient cards | `nutrient mass = product mass * documented nutrient fraction`; retain product mass and nutrient basis as separate metadata. | product mass; label or analysis | nutrient mass | `fao-good-agricultural-practices` |
| `calc_irrigation_withdrawal` | irrigation source withdrawal | Calculate source withdrawal from measured source delivery and the declared conveyance or application loss; do not replace a measured value with a generic factor. | source meter; delivered irrigation; loss method | source withdrawal | `fao-good-agricultural-practices` |
| `calc_managed_soil_emissions` | N2O, NH3, nitrate, and phosphate rows | Apply one declared site or IPCC-compatible method to nutrient, amendment, residue, soil, and drainage records; document direct and indirect pathways separately. | nutrient and residue records; method factors | elementary emissions | `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture` |
| `calc_harvest_mass_balance` | 商品, off-grade, field-loss, and residue rows | Reconcile harvested mass with 商品 output, off-grade destinations, field losses, residues, and measurement tolerance; investigate unexplained residuals. | grade records; harvest weights; loss and residue records | balanced output set | `mass-balance-identity` |
| `calc_reusable_packaging` | reusable rigid packaging | Allocate packaging mass and replacement over verified service cycles and assign losses to the route where they occur. | packaging mass; verified cycles; loss record | per-cycle packaging input and waste | `fao-postharvest-handling-vegetables` |
| `calc_conditioning_water_balance` | conditioning water and wastewater | `wastewater = water input + retained or released product water - reuse - evaporation - measured retained water`, using measured values where available. | water input; reuse; discharge; balance terms | wastewater volume | `fao-postharvest-handling-vegetables` |
| `calc_energy_emissions` | energy-related CO2 and particulate matter | Multiply recorded carrier or electricity use by the declared factor and retain carrier, factor, and biogenic/fossil basis; avoid upstream double counting. | energy record; factor | elementary emissions | `ipcc-2006-guidelines-agriculture` |
| `calc_route_specific_infrastructure` | 设施栽培 infrastructure | Allocate infrastructure and shared equipment over documented service life and occupied area, operating time, throughput, or mass; disclose the chosen basis. | infrastructure record; service life; allocation basis | route-specific burden | `fao-protected-cultivation-guidance` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_product_identity` | reference product and all product outputs | Declare species, cultivar, CPC 01239 basis, market state, maturity, grade, and 农场门 hand-off. | product record, grade record, and dataset metadata |
| `quality_site_cycle_completeness` | all required processes | Cover the complete declared site and 作物周期, including every harvest and route-specific 设施栽培 operation. | site register, dates, harvest log, and completeness check |
| `quality_input_traceability` | planting material, nutrient, protection, water, energy, and packaging inputs | Link each material or service input to a supplier, invoice, meter, application record, or documented calculated source. | invoices, labels, meters, and operation logs |
| `quality_mass_balance` | 商品, off-grade, loss, residue, wastewater, and packaging-waste outputs | Reconcile inputs and outputs and investigate unexplained residuals before release. | scale records, balance worksheet, and review sign-off |
| `quality_nutrient_basis` | nutrient inputs and soil emissions | State product mass, nutrient basis, composition source, application timing, and emission-factor method. | label or analysis, application log, and method record |
| `quality_water_and_energy_measurement` | irrigation, withdrawal, conditioning water, electricity, and fuel | Prefer meter or receipt data; where calculated, disclose the formula, factor, uncertainty, and allocation basis. | meter calibration, receipts, and calculation worksheet |
| `quality_destination_disclosure` | off-grade product, residues, wastewater, and packaging waste | Declare the first destination and treatment or return pathway for every non-商品 stream. | delivery, treatment, compost, feed, disposal, or field-return record |
| `quality_uncertainty_and_estimates` | all rows using estimates or ranges | Label estimated or missing values, preserve the range and evidence kind, and replace provisional estimates with collected records when available. | uncertainty note, range metadata, and data-quality review |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | The dataset must identify one CPC 01239-compatible 新鲜整果 product at 农场门. An identity 证据缺口 remains a coverage issue and cannot be silently replaced by a named fruit-bearing vegetable or a processed flow. | `mass-balance-identity` |
| `validation_required_processes` | process map and process inventory | All three required processes must be present, and every detailed process section must match one process-map id. | `fao-crop-production-records` |
| `validation_species_route_scope` | mixed category datasets | The declared species, cultivar, site, route, and cycle must be available for every aggregated row. Products covered by CPC 01231–01235 must be excluded or separately mapped. | `fao-good-agricultural-practices` |
| `validation_nutrient_non_double_counting` | nutrient inputs | A compound fertilizer or amendment must be represented once on the product basis and, when nutrient normalization is needed, once through its documented nutrient allocation. Do not sum product mass as if it were separate N, P, and K products. | `fao-good-agricultural-practices` |
| `validation_water_balance` | irrigation, withdrawal, conditioning water, and wastewater | Check delivered water, source withdrawal, reuse, evaporation, and discharge for the declared route. Rainfall cannot be used to close a metered irrigation row. | `fao-good-agricultural-practices` |
| `validation_mass_balance` | product, waste, and residue outputs | Harvested mass, 商品 output, off-grade destinations, field losses, residues, and waste must reconcile within the declared measurement tolerance. | `mass-balance-identity` |
| `validation_boundary_hand_off` | 农场门 preparation and transport | Conditioning, packaging, and transport are included only when they occur before the declared 农场门 hand-off; post-gate distribution is excluded. | `fao-postharvest-handling-vegetables` |
| `validation_emission_method` | elementary emissions | Each emission row must state substance, compartment, method, factor basis, and whether the burden is already included in an upstream dataset. | `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture` |
| `validation_parameterized_identity_resolution` | parameterized rows and reference flow | During foreground dataset construction, resolve every parameterized row to a compatible UUID and retain its property, unit, geography, and intended-use checks. Uncovered rows remain unmapped until evidence supports a fixed identity. | `mass-balance-identity` |
| `validation_quality_disclosure` | published dataset profile | Report temporal, geographic, species, route, measurement, estimate, allocation, residue-fate, and 证据缺口-identity limitations before downstream use. | `fao-good-agricultural-practices` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for 新鲜整果 other 果实类蔬菜 at 农场门 |
| downstream_use | Can be used as a `secondary_dataset` for the declared species, route, site or geography, production year, and market state; may support a `background_dataset` only after the downstream model verifies compatibility |
| allowed_use | Farm-gate LCA of the declared CPC 01239 product, route, geography, and production cycle; comparative use only when species, grade, moisture, route, and allocation are compatible |
| excluded_use | Named CPC 01231–01235 products without reviewed equivalence; processed or post-农场门 products; unqualified cross-species substitution; datasets with 证据缺口 material mass-balance or destination gaps |
| required_metadata | species and cultivar; CPC basis; geography; production year and cycle; route; area; irrigation; nutrient basis; crop-protection program; harvest and grade; moisture; residue and reject fates; conditioning; packaging; 农场门 hand-off; UUID resolution status |
| required_quality_disclosure | source and measurement method; temporal and geographic representativeness; species and route composition; estimated or missing values; nutrient, water, energy, and emission-factor basis; allocation decision; residue, wastewater, and packaging destinations; parameterized-flow UUID resolution; uncertainty and range treatment |
| update_trigger | Change in CPC interpretation, species or route scope, 农场门 state, boundary or allocation method, Flow Set taxonomy, material evidence, emission method, or a new reviewed dataset showing that the residual category needs narrower PCR treatment |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO, Good Agricultural Practices for greenhouse vegetable crops and fresh produce production, FAO guidance portal | production records, crop inputs, irrigation, nutrient and route disclosure |
| `fao-crop-production-records` | official_guidance | FAO, crop production and farm record guidance, FAO agriculture production resources | site, cycle, operation, completeness, and aggregation rules |
| `fao-protected-cultivation-guidance` | official_guidance | FAO, 设施栽培 and greenhouse crop production guidance, FAO agriculture resources | protected-route energy, infrastructure, and shared-equipment allocation |
| `fao-postharvest-handling-vegetables` | handbook | FAO, Manual for the preparation and sale of fruits and vegetables, 2004, https://www.fao.org/4/y4893e/y4893e00.htm | harvest, grading, washing, conditioning, packaging, and 农场门 boundary |
| `fao-crop-residue-management` | extension_guidance | FAO, crop-residue and sustainable soil-management resources, FAO soils portal | residue measurement and destination disclosure |
| `codex-cxc-53-2003-fresh-produce` | standard | Codex Alimentarius, Code of Hygienic Practice for Fresh Fruits and Vegetables (CXC 53-2003), https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | fresh-produce state, hygiene, grading, and conditioning qualifiers |
| `ipcc-2019-refinement-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2019rf/index.html | managed-soil N2O, NH3, and nutrient-loss method basis |
| `ipcc-2006-guidelines-agriculture` | method_factor | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 4 AFOLU, https://www.ipcc-nggip.iges.or.jp/public/2006gl/ | agricultural emissions and energy-emission factor method basis |
| `mass-balance-identity` | method_factor | PCR mass-balance identity: declared product and process-output normalization rule | normalization, output reconciliation, and identity 证据缺口 validation |
