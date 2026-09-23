---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-green-leguminous-vegetables
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
---

# 其他绿色豆科蔬菜

## 1. 范围与适用性

This PCR guides a foreground data package for fresh, whole, immature green leguminous vegetables assigned to CPC 01249. It covers marketable pods or green seeds from open-field or protected cultivation, including broad or fava beans, fresh cowpeas, fresh chickpeas, and fresh lentil pods when the declared classification and product facts place them in this CPC leaf. The route may be single-harvest or multi-picking and may include sorting, washing, cooling, primary packing, and other conditioning before the declared gate.

Green beans classified as CPC 01241 and green peas classified as CPC 01242 are excluded even when the production route is similar. Dry or mature pulses, seed production, sprouts, processed, canned, frozen, pickled, fermented, dried, cooked, cut, prepared, retail, consumer storage, and consumer use are outside the default scope. Nursery production, durable infrastructure, machinery manufacture, land-use change, and post-gate transport are excluded unless separately attributed and disclosed. Culls, field residues, wash water, wastewater, packaging waste, and other losses remain in the foreground until their fate or hand-off is recorded.

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-green-leguminous-vegetables` |
| classification_refs | CPC 3.0 `01249`, Other green leguminous vegetables |
| covered_products | Fresh, whole, immature pods or green seeds of leguminous vegetables assigned to CPC 01249, in the declared species, maturity, grade, moisture, and packaging state |
| excluded_products | CPC 01241 green beans; CPC 01242 green peas; dry or mature pulses; seed, sprouts, processed, preserved, frozen, dried, cooked, cut, prepared, retail, and consumer products; capital goods; land-use change; and post-gate services |
| representative_product | Marketable fresh other green leguminous vegetables meeting the declared species or cultivar group, maturity, size, colour, tenderness, defect tolerance, and grade |
| production_route | Direct-seeded or transplanted cultivation, bed preparation, irrigation, nutrient or amendment management, crop protection, one or more immature harvests, optional sorting, washing, cooling, primary packing, and declared gate hand-off |
| market_state | Fresh, whole, unprocessed green leguminous vegetables at the declared farm-gate or pack-house gate, loose or in declared primary packaging |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | Marketable fresh, whole, immature green leguminous vegetables assigned to CPC 01249 at the declared farm-gate or pack-house hand-off |
| How much | 1,000 kg |
| How well | Fresh, whole, edible immature pods or green seeds with declared species or cultivar group, production geography, maturity, size, colour, tenderness, grade, defect tolerance, moisture state, and packaging state |
| How long or cycle | One declared crop cycle and complete harvest campaign; all picking rounds attributable to the same planting are reconciled before normalization |
| reference_flow_link | `other_green_legume_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other green leguminous vegetables, fresh, whole, at farm gate or pack-house gate `<1e41b7b7-b9fb-4ac8-805d-31086deef78d>` |
| Reference flow property | Mass `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| Reference unit group | Units of mass `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| Reference unit | kg |
| Required qualifiers | species or cultivar group; CPC assignment and exclusion check against green beans and green peas; production geography; open-field or protected route; direct-seeded or transplant route; planting and harvest dates; picking rounds; maturity, size, colour, tenderness, grade, and defect criteria; irrigated or rain-fed status; fertilizer or soil-amendment products and documented nutrient basis when applied; crop-protection program; washing, cooling, and packaging state; residue, cull, reject, and wastewater fate; and declared gate |

绑定模式：`fixed`

The reference product identity remains a semantic requirement until the main agent verifies a compatible platform flow. It must not be replaced by a nearby green-bean or green-pea flow merely to populate an identity field. Mass is the required reference property and kg is the required reference unit; UUID support objects are resolved by the main agent after the Process Map is complete.

构建前景数据包时，`Required qualifiers` 列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失这些限定信息时，该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_green_legume_mass` | marketable product, downgraded product, rejects, residues, and losses | Mass | kg | Weigh marketable, downgraded, rejected, field-loss, handling-loss, and residue streams separately and reconcile them before conversion to the 1,000 kg reference output. |
| `crop_cycle_normalization` | field and protected-cultivation records | Area and mass | ha and kg | Record inputs and picking rounds by field, bed, or protected unit and normalize them to marketable output from the same declared crop cycle. |
| `fertilizer_product_and_nutrient_basis` | fertilizer and soil-amendment inputs | Product and nutrient mass | kg product and declared nutrient units | Record the actual product name, product mass, dry matter where relevant, and documented N, P, K, or other nutrient basis when applied. Do not require a product category that was not used and do not double count a compound product. |
| `water_delivery_basis` | irrigation, fertigation carrier water, washing, and source withdrawal | Volume | m3 | Record crop irrigation, fertigation carrier water, post-harvest washing water, and natural-resource withdrawal as distinct quantities and disclose the meter or water-balance basis. |
| `area_time_basis` | open-field beds and protected units | Area-time | ha*a | Record occupied production area and crop occupation period; durable structures and equipment require separate attribution if included. |
| `harvest_grade_reconciliation` | repeated harvest, grading, and packing | Mass and declared grade | kg and declared fraction | Retain each picking round, gross harvested mass, accepted mass, downgraded product, rejects, and losses so the declared grade and marketable output are reproducible. |
| `postharvest_mass_change` | washing, cooling, grading, and packing | Mass and moisture | kg and declared fraction | Retain measured soil removal, water uptake, cooling loss, tare, and packing loss separately from harvested crop mass. |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | Prepared field bed or protected cultivation unit receiving seed or planting material for the declared other-green-legume crop cycle, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared crop cycle and foreground input accounting |
| product_classification_scope | CPC 3.0 `01249`, Other green leguminous vegetables, through the declared farm-gate or pack-house gate |
| recursive_input_rule | Seed, transplant, or other planting material is recorded at its received hand-off state and linked to an upstream dataset; its own production is not recreated inside this PCR. |
| upstream_dataset_requirement | Use upstream datasets for planting material, fertilizer and soil-amendment products, crop-protection products, supplied water, fuels, electricity, packaging, purchased transport, and waste-treatment services when those inputs cross the boundary. |
| disclosure | Declare species or cultivar group, CPC boundary check, geography, route, planting density, crop-cycle dates, irrigation source and method, fertilizer or soil-amendment products and nutrient basis, crop-protection program, picking rounds, marketable and downgraded output, residues, washing and cooling, packaging, waste fates, and declared gate. |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and cultivation | Include bed preparation attributable to the declared crop cycle, planting, crop management, irrigation, fertilizer or soil amendment, crop protection, and direct crop emissions; disclose prior land use and exclude unrelated infrastructure construction. | `fao-good-agricultural-practices` |
| `boundary_cpc_exclusion` | product identity and reference flow | Confirm that the represented product belongs to CPC 01249 and is not green bean CPC 01241 or green pea CPC 01242. Resolve ambiguity through product facts and review rather than changing the product boundary. | `fao-good-agricultural-practices`; `iso-14044-2006` |
| `boundary_repeated_picking` | harvest rounds | Attribute every picking round from one planting to the same crop cycle and reconcile marketable product, downgraded product, rejects, field losses, and residues before normalization. | `codex-fresh-produce-hygiene`; `iso-14044-2006` |
| `boundary_gate_conditioning` | sorting, washing, cooling, packing, and pre-gate transport | End the default foreground boundary at the declared farm-gate or pack-house gate. Include conditioning and pre-gate transport only when they occur before that gate. | `codex-fresh-produce-hygiene`; `fao-fresh-produce-handling` |
| `boundary_residue_fate` | crop residues, culls, wastewater, and packaging waste | Record field return, composting, feed use, treatment, transport, recycling, or disposal for each stream. Do not assign a co-product credit without a documented recipient, intended use, quality, and hand-off. | `iso-14044-2006`; `codex-fresh-produce-hygiene` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | Other-green-legume crop establishment | required | every represented sowing, planting, bed, or protected-cultivation unit | foreground crop establishment | planted area, planting material, and crop-cycle dates |
| `crop_management` | Other-green-legume crop management | required | each represented crop cycle | foreground managed biological production | managed area, water, fertilizer or amendments, crop protection, and complete harvest campaign |
| `harvest_and_field_sorting` | Harvest and field sorting | required | each represented harvest campaign | foreground harvest and first grading | 1,000 kg marketable fresh output and reconciled harvest streams |
| `conditioning_and_dispatch` | Conditioning and dispatch | conditional | when washing, cooling, packing, storage, or transport occurs before the declared gate | foreground conditioning and gate hand-off | 1,000 kg marketable product at the declared gate |

### 过程：其他绿色豆科蔬菜种植建立（`crop_establishment`）

#### 输入

##### 产品流

###### 种子或种植材料（`planting_material_input`）

记录进入每个声明田块或保护地单元的种子、移栽苗或其他种植材料，并识别物种或品种组、供应批次、种植日期和种植面积。

- 选定流： Seed, transplant, or other planting material for green leguminous vegetable production
- 流属性/单位： Mass or viable count / kg, seed, plant, or declared count
- 数量规则： Record supplier lot quantity and planted viable seed or planting-material quantity by field, bed, or protected unit.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Planting-material screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.1
  - 上限： 25
  - 单位： kg seed or declared planting material per 1,000 kg output
  - 基准： declared planted area and crop-cycle output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 建立期灌溉水（`establishment_irrigation_water`）

按水源和生产单元记录整地、出苗或移栽建立期用水；除非水量平衡方法明确纳入，否则不记录降雨。

- 选定流： Irrigation water supplied to the crop
- 流属性/单位： Volume / m3
- 绑定模式： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set 版本： `0.2.0`
- Flow Set 分组： `irrigation-water`
- 数量规则： Sum metered or documented water-balance deliveries during establishment and retain source and application method.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_irrigation_records`
- 来源： `fao-crop-evapotranspiration-56`
- 数量范围： Establishment irrigation screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 350
  - 单位： m3/ha
  - 基准： establishment period from planting or transplanting to uniform stand
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 绿色豆科蔬菜生产占用土地（`crop_land_occupation`）

记录声明种植活动中田块或保护地单元占用的生产面积和时间。

- 选定流： Agricultural land occupation
- 流属性/单位： Area-time / ha*a
- 数量规则： Multiply declared production area by crop occupation time and state whether protected structures are excluded or separately attributed.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_area_cycle_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Area-output screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.01
  - 上限： 1.0
  - 单位： ha per 1,000 kg output
  - 基准： declared crop area and marketable crop-cycle output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：其他绿色豆科蔬菜田间管理（`crop_management`）

#### 输入

##### 产品流

###### 生产期灌溉水（`production_irrigation_water`）

记录建立期之后向作物提供的灌溉水和施肥载体水，并区分水源、施用方法和循环水。

- 选定流： Irrigation water supplied to the crop
- 流属性/单位： Volume / m3
- 绑定模式： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set 版本： `0.2.0`
- Flow Set 分组： `irrigation-water`
- 数量规则： Sum field, bed, or protected-unit meter readings and documented water-balance estimates from establishment through final picking.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_irrigation_records`
- 来源： `fao-crop-evapotranspiration-56`
- 数量范围： Crop irrigation screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 5,000
  - 单位： m3/ha
  - 基准： complete declared crop cycle
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 农业养分与肥料投入（`crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable fresh output
- 基准类型：Process output (`process_output`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围： Nutrient and amendment screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 10,000
  - 单位： kg product/ha
  - 基准： complete crop cycle and actual product records
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 植物保护产品（`crop_protection_input`）

记录每种施用的植物保护产品，保留产品名称、有效成分、制剂、施用量、方法、日期和处理面积。综合病虫害管理记录可以证明未施用处理产品。

- 选定流： Crop-protection product as applied
- 流属性/单位： Product or active-ingredient mass / kg
- 数量规则： Reconcile application logs, product labels, stock movement, and treated area for the complete crop cycle.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_crop_protection_records`
- 来源： `fao-good-agricultural-practices`; `codex-fresh-produce-hygiene`
- 数量范围： Crop-protection screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 350
  - 单位： kg product/ha
  - 基准： complete crop cycle
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 移动机械燃料（`mobile_machinery_fuel`）

记录用于耕作、喷施、灌溉支持和田间管理作业的柴油、汽油或其他燃料。

- 选定流： Mobile machinery fuel
- 流属性/单位： Energy or fuel mass / MJ or kg
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- Flow Set 分组： `mobile-machinery-fuel`
- 数量规则： Sum fuel receipts, tank records, or machine-hour calculations assigned to the crop cycle.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Mobile-fuel screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1,800
  - 单位： MJ/ha
  - 基准： field machinery operations for the crop cycle
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 灌溉与田间管理用电（`management_electricity_input`）

记录声明闸门前用于泵送、施肥、保护地运行、照明和其他设备的电力。

- 选定流： Electricity supply
- 流属性/单位： Energy / kWh
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- Flow Set 分组： `electricity-supply`
- 数量规则： Sum equipment meters or invoices and allocate shared services by area-time, operating time, water delivered, or another declared physical basis.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Technology-specific (`technology_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Management-electricity screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 400
  - 单位： kWh per 1,000 kg output
  - 基准： irrigation pumping and in-scope crop-management equipment
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 管理过程产生的作物残体（`crop_residue_management_output`）

记录最终采收后的叶、茎、根、豆荚和其他残体，并分别记录其数量及还田、堆肥、饲料利用、处理或处置去向。

- 选定流： Crop residues from green leguminous vegetable production
- 流属性/单位： Mass / kg wet residue
- 数量规则： Weigh or calculate residues by field or protected unit and document the receiving fate; retain uncollected field residue as a declared residue stream.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_residue_fate_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Crop-residue screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 300
  - 上限： 12,000
  - 单位： kg wet residue/ha
  - 基准： crop-cycle residue mass before declared fate
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### 水资源取用（`water_resource_withdrawal`）

将灌溉或施肥取用的自然资源水与供水分开记录，并报告水源及回流或消耗的计算依据。

- 选定流： Water resource withdrawal
- 流属性/单位： Volume / m3
- 数量规则： Reconcile source-meter or permit records to water delivered to the crop and disclose return flow or consumption calculation.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_irrigation_records`
- 来源： `fao-crop-evapotranspiration-56`
- 数量范围： Water-withdrawal screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 7,000
  - 单位： m3/ha
  - 基准： crop-cycle natural-resource withdrawal
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 排入空气的一氧化二氮（`nitrous_oxide_emission`）

Record or calculate direct and indirect nitrous oxide emissions attributable to documented nutrient inputs, amendments, and residue pathways; retain the method and receiving medium.

- 选定流： Nitrous oxide emission to ambient air
- 流属性/单位： Mass / kg N2O
- 数量规则： Apply one declared emissions method to nutrient inputs, amendments, residue fate, and environmental factors without double counting.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_nutrient_records`
- 来源： `ipcc-2019-managed-soils-n2o`
- 数量范围： Nitrous-oxide screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 40
  - 单位： kg N2O/ha
  - 基准： nutrient-managed crop cycle
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 排入空气的氨（`ammonia_emission`）

Record or calculate ammonia emissions from fertilizer or organic-amendment applications when the declared method and application records support the pathway.

- 选定流： Ammonia emission to ambient air
- 流属性/单位： Mass / kg NH3
- 数量规则： Apply the declared nitrogen-emission method to documented nitrogen forms, timing, and environmental conditions.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_nutrient_records`
- 来源： `ipcc-2019-managed-soils-n2o`
- 数量范围： Ammonia screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： kg NH3/ha
  - 基准： nutrient-managed crop cycle
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 排入水体的硝酸盐（`nitrate_to_water`）

Record or calculate nitrate loss to water when nutrient inputs, soil, drainage, and receiving-medium information support the pathway.

- 选定流： Nitrate emission to water
- 流属性/单位： Mass / kg nitrate
- 数量规则： Apply the declared nitrogen-loss method to nutrient input and drainage or leaching evidence.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_nutrient_records`
- 来源： `ipcc-2019-managed-soils-n2o`
- 数量范围： Nitrate-loss screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 150
  - 单位： kg nitrate/ha
  - 基准： nutrient-managed crop cycle and documented drainage pathway
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 排入水体的磷酸盐（`phosphate_to_water`）

Record or calculate phosphate loss to water when nutrient application, runoff or drainage, soil conditions, and receiving-medium information support the pathway.

- 选定流： Phosphate emission to water
- 流属性/单位： Mass / kg phosphate
- 数量规则： Apply the declared phosphorus-loss method to nutrient input and documented runoff, drainage, or erosion without assigning an unsupported default emission.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_nutrient_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Phosphate-loss screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 30
  - 单位： kg phosphate/ha
  - 基准： phosphorus-managed crop cycle and documented runoff or drainage pathway
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

### 过程：收获与田间分级（`harvest_and_field_sorting`）

#### 输入

##### 产品流

###### 收获容器与田间操作材料（`harvest_container_input`）

记录收获期间使用的可重复使用或一次性箱、筐、衬垫及其他操作材料，并保留周转次数和替换记录。

- 选定流： Harvest container or field handling material
- 流属性/单位： Mass / kg material or declared container count
- 数量规则： Record material type, tare, number of uses, replacement quantity, and allocation to the crop campaign.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Technology-specific (`technology_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_harvest_handling_records`
- 来源： `codex-fresh-produce-hygiene`
- 数量范围： Harvest-handling material screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 80
  - 单位： kg material per 1,000 kg output
  - 基准： harvest campaign and declared reuse cycle
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 收获机械燃料（`harvest_machinery_fuel`）

记录首次分选或声明闸门前收获机械和田间运输使用的燃料。

- 选定流： Mobile machinery fuel
- 流属性/单位： Energy or fuel mass / MJ or kg
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- Flow Set 分组： `mobile-machinery-fuel`
- 数量规则： Sum fuel receipts, tank records, or machine-hour calculations allocated to the harvest campaign.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Harvest-fuel screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 800
  - 单位： MJ per 1,000 kg output
  - 基准： harvest and first field-handling campaign
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 降级或拒收的收获产品（`downgraded_product_output`）

记录不符合声明销售等级的收获豆荚或绿色种子，包括原因和去向。降级产品不得无记录地计入参考输出。

- 选定流： Downgraded or rejected green leguminous vegetable product
- 流属性/单位： Mass / kg fresh product
- 数量规则： Weigh gross harvested, accepted, downgraded, and rejected product by picking round and document feed, compost, disposal, or other fate.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_harvest_grade_records`
- 来源： `codex-fresh-produce-hygiene`; `iso-14044-2006`
- 数量范围： Downgraded-product screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 2,000
  - 单位： kg downgraded product per 1,000 kg marketable output
  - 基准： complete harvest campaign
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### 收获田间损失（`harvest_field_loss`）

当可食产品未计入降级产品时，记录其未采收或在采摘和首次操作中损失的数量，并说明估算方法和去向。

- 选定流： Harvested green-legume product lost in field or first handling
- 流属性/单位： Mass / kg fresh product
- 数量规则： Estimate from field counts, sampling, or mass balance and keep it separate from marketable output and collected culls.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_harvest_grade_records`
- 来源： `iso-14044-2006`
- 数量范围： Field-loss screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1,500
  - 单位： kg fresh product per 1,000 kg marketable output
  - 基准： complete harvest campaign
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

###### 收获与田间分级后的可销售鲜产品（`marketable_product_output`）

记录完成等级判定后的可销售产品。当声明闸门为田间或农场闸门时，该流作为作物周期归一化输出。

- 选定流： Marketable other green leguminous vegetables, fresh and whole
- 流属性/单位： Mass / kg fresh product
- 数量规则： Weigh accepted product by picking round after grade determination and sum the campaign total before normalization.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_harvest_grade_records`
- 来源： `codex-fresh-produce-hygiene`
- 数量范围： Marketable-yield screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1,000
  - 上限： 60,000
  - 单位： kg marketable product/ha
  - 基准： complete declared crop cycle and harvest campaign
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 离开田间分级过程的作物残体（`crop_residue_output`）

记录收获或田间分选过程中移除的叶、茎、根、豆荚及其他生物质，并记录接收去向及有文件支持的用途。

- 选定流： Crop residue from harvest and field sorting
- 流属性/单位： Mass / kg wet residue
- 数量规则： Weigh or calculate removed residues and document field return, composting, feed use, treatment, or disposal.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_residue_fate_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Harvest-residue screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 10,000
  - 单位： kg wet residue/ha
  - 基准： harvest campaign residue mass before declared fate
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

### 过程：调理与发运（`conditioning_and_dispatch`）

#### 输入

##### 产品流

###### 清洗水（`washing_water_input`）

当声明闸门前进行清洗时，记录去除土壤和异物所用的水。该水量应与灌溉水和水源取用分开，并披露循环和排放处理。

- 选定流： Process water for washing fresh produce
- 流属性/单位： Volume / m3
- 绑定模式： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set 版本： `0.2.0`
- Flow Set 分组： `process-water`
- 数量规则： Sum wash-water meter or batch records and disclose recirculation, treatment, and discharge handling.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_postharvest_records`
- 来源： `codex-fresh-produce-hygiene`; `fao-fresh-produce-handling`
- 数量范围： Washing-water screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 10
  - 单位： m3 per 1,000 kg output
  - 基准： pre-gate washing of fresh whole green leguminous vegetables
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 冷却与包装用电（`postharvest_electricity_input`）

Record electricity for cooling, cold rooms, sorting lines, lighting, and packing equipment when these occur before the declared gate.

- 选定流： Electricity supply
- 流属性/单位： Energy / kWh
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- Flow Set 分组： `electricity-supply`
- 数量规则： Sum equipment meters or invoices and allocate shared services by throughput, cold-room time, area-time, or another declared physical basis.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Technology-specific (`technology_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_postharvest_energy_records`
- 来源： `fao-fresh-produce-handling`
- 数量范围： Conditioning-electricity screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 250
  - 单位： kWh per 1,000 kg output
  - 基准： declared pre-gate cooling, sorting, and packing route
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 初级包装与标签（`primary_packaging_input`）

记录声明闸门前实际使用的初级包装、标签、衬垫和其他材料。 本产品类别不规定包装类型；应根据实际记录识别包装材料和可重复使用容器的周转次数。

- 选定流： Primary packaging material for fresh produce
- 流属性/单位： Mass / kg material
- 数量规则： Record material type, mass, recycled content where known, reusable-container turns, losses, and allocation to declared output.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_packaging_records`
- 来源： `codex-fresh-produce-hygiene`
- 数量范围： Primary-packaging screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 120
  - 单位： kg packaging material per 1,000 kg output
  - 基准： actual declared pre-gate packaging route
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 闸门前道路货运（`pre_gate_road_transport`）

当运输发生在声明边界前时，记录从生产单元或田间收集点到包装场或闸门的运输，并记录距离、载荷、车辆和分配依据。

- 选定流： Road freight transport service
- 流属性/单位： Transport work / tkm
- 绑定模式： `parameterized`
- Flow Set： `flow-set.transport-service`
- Flow Set 版本： `0.2.0`
- Flow Set 分组： `road-freight-transport`
- 数量规则： Calculate transport work from mass, distance, vehicle or service record, and declared allocation basis; do not include post-gate transport.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Route-specific (`route_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_transport_records`
- 来源： `fao-fresh-produce-handling`
- 数量范围： Pre-gate transport screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： tkm per 1,000 kg output
  - 基准： declared production-to-gate route
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 清洗水与调理废水（`conditioning_wastewater_output`）

记录离开闸门前过程的清洗水和调理废水，包括处理方式、排放目的地和循环回路。

- 选定流： Fresh-produce conditioning wastewater
- 流属性/单位： Volume or mass / m3 or kg
- 数量规则： Reconcile water input, recirculation, evaporation, retained moisture, treatment, and discharge records; use a receiving-medium-specific elementary flow only when evidence supports it.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_postharvest_records`
- 来源： `codex-fresh-produce-hygiene`
- 数量范围： Conditioning-wastewater screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 12
  - 单位： m3 per 1,000 kg output
  - 基准： declared pre-gate washing and conditioning route
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 包装与操作废物（`packaging_waste_output`）

记录声明闸门前产生的损坏、废弃或未回收包装和操作材料，并按材料和去向区分。

- 选定流： Packaging or handling waste
- 流属性/单位： Mass / kg waste
- 数量规则： Reconcile packaging issued, retained in product, returned for reuse, recycled, treated, and disposed quantities.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_packaging_records`
- 来源： `codex-fresh-produce-hygiene`; `iso-14044-2006`
- 数量范围： Packaging-waste screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 15
  - 单位： kg waste per 1,000 kg output
  - 基准： pre-gate packaging operation
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 调理过程降级产品（`conditioning_reject_output`）

记录田间分选后在清洗、冷却、分级或包装中移除的产品，并记录声明去向。

- 选定流： Downgraded or rejected fresh green leguminous vegetable product
- 流属性/单位： Mass / kg fresh product
- 数量规则： Weigh or estimate conditioning rejects by batch and reconcile them with harvest-grade records and final marketable output.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_postharvest_grade_records`
- 来源： `codex-fresh-produce-hygiene`; `iso-14044-2006`
- 数量范围： Conditioning-reject screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1,000
  - 单位： kg product per 1,000 kg marketable output
  - 基准： declared washing, cooling, grading, and packing route
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

#### 输出

##### 产品流

###### 声明闸门处的可销售产品（`marketable_gate_output`）

记录纳入的调理和包装完成后、在声明农场闸门或包装场交接点的最终可销售鲜产品。 If no conditioning is included, reconcile this quantity to `marketable_product_output`.

- 选定流： Marketable other green leguminous vegetables, fresh, whole, at declared gate
- 流属性/单位： Mass / kg fresh product
- 数量规则： Weigh final accepted output at the declared gate and reconcile it with gross harvest, field sorting, conditioning losses, and packaging tare.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg marketable fresh output
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_postharvest_grade_records`
- 来源： `codex-fresh-produce-hygiene`
- 数量范围： Gate-output mass reconciliation interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1,000
  - 上限： 1,000
  - 单位： kg marketable product per 1,000 kg reference output
  - 基准： declared gate output after included conditioning
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `mass-balance-identity`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_field_services` | shared field, irrigation, protected-unit, and packing services | Allocate shared services among product categories or crop cycles using area-time, operating time, water delivered, throughput, or another documented physical relationship. Use economic allocation only when a physical relationship cannot represent the shared service and disclose the price basis. | `iso-14044-2006` |
| `allocation_marketable_and_off_grade` | marketable product, downgraded product, rejects, and residues | Treat marketable product as the reference output. Record downgraded product, culls, residues, and waste separately with actual fate. Do not credit feed, compost, recycling, or another use without a documented recipient, intended use, quality, and hand-off. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_reusable_containers` | reusable crates, bins, pallets, and liners | Allocate manufacture and replacement of reusable containers over documented turns or service mass, then assign cleaning, loss, and end-of-life records to the actual route. | `iso-14044-2006`; `codex-fresh-produce-hygiene` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 聚合规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting material and establishment | seed or transplant lot record | species or cultivar; supplier lot; quantity; viability or plant count; field or protected unit; planting date; planted area | supplier record plus field log | kg, count, ha | each planting | complete crop cycle | each represented production unit | sum by crop cycle and normalize to marketable output | lot record, planting log, area record |
| `cp_area_cycle_records` | `crop_establishment` | occupied area and crop cycle | field or protected-unit register | area; unit; prior land-use disclosure; occupation dates; infrastructure allocation note | field register and map or protected-unit record | ha, date | each crop cycle | complete crop cycle | each represented production unit | calculate area-time by unit and reconcile to output | controlled area record |
| `cp_irrigation_records` | `crop_establishment` and `crop_management` | irrigation, fertigation, and withdrawal | meter, permit, or water-balance record | source; meter start and end; method; crop phase; recirculation; return flow | meter reading or documented water balance | m3 | each event or monthly | complete crop cycle | each represented production unit | sum by source and crop phase, then normalize | meter control, permit, or balance check |
| `cp_nutrient_records` | `crop_management` | fertilizer, amendment, and nutrient-loss calculation | application and product record | product; batch; mass; dry matter; nutrient composition; date; method; treated area; soil or nutrient plan; loss-method inputs | invoice, application log, specification, and plan | kg product, kg nutrient, ha | each application | complete crop cycle | each represented production unit | aggregate by actual product and nutrient basis without double counting | specification, application log, plan, method check |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | treatment log | product; active ingredient; formulation; dose; date; method; treated area; pre-harvest interval | treatment log and product record | kg product, ha, date | each treatment | complete crop cycle | each represented production unit | aggregate by active ingredient and route | label, log, operator or compliance record |
| `cp_energy_records` | `crop_management` and `harvest_and_field_sorting` | fuel and management electricity | fuel, machine-hour, meter, or invoice record | fuel type; quantity; equipment; hours; field or unit; electricity meter; allocation basis | receipt, tank record, machine log, or meter | MJ, kg, kWh | each transaction or monthly | complete crop cycle | each represented production unit | allocate shared services by declared physical basis | receipt, meter, machine log, allocation check |
| `cp_residue_fate_records` | `crop_management` and `harvest_and_field_sorting` | crop residue and cull fate | residue or recipient record | stream; mass; wet or dry basis; collection point; recipient; use; transport; treatment or disposal | weighing, sampling, and recipient record | kg, date | each harvest or fate event | complete crop cycle | each represented production unit | sum by fate and retain uncollected field residue separately | weigh ticket, recipient or treatment record |
| `cp_harvest_grade_records` | `harvest_and_field_sorting` | gross harvest, grade, loss, and marketable output | picking and grading record | picking date; gross mass; accepted mass; downgraded mass; reject mass; loss estimate; grade criteria; moisture or temperature | scale record and grade log | kg, date, declared fraction | each picking round | complete harvest campaign | each represented production unit | reconcile all picking rounds before normalization | calibrated scale, grade sheet, batch record |
| `cp_harvest_handling_records` | `harvest_and_field_sorting` | bins, crates, and field materials | container issue and return record | material; tare; count; reuse turns; loss; cleaning; allocation mass | inventory and return log | kg, count, turns | each campaign | complete harvest campaign | each represented production unit | allocate reusable service by turns or mass | inventory log, cleaning record, replacement invoice |
| `cp_postharvest_records` | `conditioning_and_dispatch` | washing and wastewater | wash-batch, meter, or treatment record | water input; recirculation; batch; soil load; treatment; discharge; retained moisture | meter, batch log, and treatment record | m3, kg, date | each batch | complete declared gate period | each conditioning facility | reconcile input, reuse, treatment, and discharge | meter, water-quality or treatment record |
| `cp_postharvest_energy_records` | `conditioning_and_dispatch` | cooling, cold storage, sorting, and packing electricity | meter or equipment record | equipment; time; temperature route; kWh; throughput; allocation basis | meter or invoice plus equipment log | kWh, h, kg | each batch or monthly | complete declared gate period | each conditioning facility | allocate shared energy by throughput, time, or physical basis | meter, temperature log, throughput record |
| `cp_packaging_records` | `conditioning_and_dispatch` | packaging and packaging waste | packaging issue, return, and waste record | material; mass; recycled content; reusable turns; damaged quantity; disposal or recycling fate | invoice, material balance, and waste record | kg, count | each batch or monthly | complete declared gate period | each conditioning facility | reconcile issued, retained, returned, and discarded packaging | invoice, stock record, waste transfer note |
| `cp_transport_records` | `conditioning_and_dispatch` | pre-gate transport | freight or route record | origin; destination; distance; payload; vehicle; service; return movement; gate | freight record, route log, or carrier record | tkm, kg, km | each movement | complete declared gate period | each represented route | calculate transport work and allocate shared movement by mass | waybill, route record, carrier statement |
| `cp_postharvest_grade_records` | `conditioning_and_dispatch` | final accepted output and conditioning rejects | pack-house batch and grade record | received mass; washed mass; cooled mass; packed mass; accepted mass; reject mass; tare; temperature; grade | scale and batch or grade record | kg, date, temperature | each batch | complete declared gate period | each conditioning facility | reconcile received and final gate masses | calibrated scale, batch record, grade log |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | amount per 1,000 kg = recorded amount * 1,000 / total marketable gate mass kg | recorded amount; final marketable gate mass | normalized row amount | `mass-balance-identity` |
| `calc_nutrient_equivalent` | fertilizer and soil-amendment input | nutrient mass = product mass * documented nutrient fraction; retain product mass and each declared nutrient basis separately | product mass; supplier specification, plan, or laboratory result | nutrient mass by actual product role | `fao-good-agricultural-practices` |
| `calc_area_time` | occupied production area | area-time = declared area ha * occupation time years | area; occupation dates | ha*a | `fao-good-agricultural-practices` |
| `calc_water_withdrawal` | resource withdrawal | reconcile source withdrawal, supplied water, return flow, and documented consumption | source meter; delivered water; return flow | withdrawal and disclosed consumption | `fao-crop-evapotranspiration-56` |
| `calc_direct_and_indirect_n2o` | nitrous oxide to air | apply one declared IPCC-compatible method to nutrient inputs, amendments, residue fate, and pathway factors; do not combine overlapping methods | nutrient records; residue records; method factors | kg N2O by receiving medium | `ipcc-2019-managed-soils-n2o` |
| `calc_transport_work` | pre-gate road freight | transport work tkm = payload tonnes * declared route km; allocate shared movements by documented mass basis | payload; distance; service record; allocation basis | tkm | `fao-fresh-produce-handling` |
| `calc_reusable_container_service` | reusable harvest and packaging materials | allocate manufacture and replacement over documented turns or service mass, then add cleaning and loss records | container mass; turns; service mass; cleaning and loss | allocated packaging input and waste | `iso-14044-2006` |
| `calc_mass_reconciliation` | harvest, conditioning, and gate outputs | gross harvest = marketable + downgraded + rejects + field loss + process loss + retained or removed residue within measurement uncertainty; investigate unexplained residuals | picking; grade; loss; residue records | reconciled crop-cycle mass balance | `mass-balance-identity`; `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_product_identity` | reference product and all product flows | Verify species or cultivar group, CPC 01249 assignment, maturity, product state, and exclusion check against CPC 01241 and 01242. | product specification, classification review, and batch record |
| `quality_scale_and_meter` | mass, water, energy, and packaging rows | Use controlled scales and meters, record reading dates, and retain the basis for estimates when direct measurement is unavailable. | calibration or control record, meter log, invoice, or documented estimate |
| `quality_temporal_coverage` | all crop-cycle rows | Cover the complete declared planting and harvest campaign and disclose missing periods, exceptional weather, and changed route conditions. | field log, picking records, and gap note |
| `quality_completeness_reconciliation` | inputs, products, wastes, residues, and losses | Reconcile crop-cycle inputs and all harvest and gate outputs; explain any material unexplained balance. | mass-balance worksheet and review sign-off |
| `quality_emission_method` | environmental emissions | State the selected method, factors, receiving medium, and assumptions; avoid double counting direct, indirect, and residue pathways. | calculation sheet and method reference |
| `quality_fate_and_disclosure` | residues, culls, wastewater, packaging, and transport | Retain recipient, destination, treatment, use, and hand-off evidence for every non-marketable or waste stream. | recipient statement, transfer note, treatment record, or declared field fate |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_cpc_scope` | PCR identity and dataset metadata | Confirm the product is within CPC 01249 and is not green beans CPC 01241 or green peas CPC 01242; retain species or cultivar and product-state evidence. | `iso-14044-2006` |
| `validate_reference_mass` | reference flow and output | Require 1,000 kg marketable output on the mass property and kg unit, with complete crop-cycle and gate declaration. | `mass-balance-identity` |
| `validate_crop_cycle_completeness` | process map and inventory | Require establishment, management, and harvest processes for every represented crop cycle; require conditioning and dispatch when the declared gate includes those activities. | `fao-good-agricultural-practices`; `codex-fresh-produce-hygiene` |
| `validate_nutrient_product_basis` | fertilizer and soil-amendment input | Require actual product identity, product mass, nutrient or amendment basis, application date, and no double counting of compound products. | `fao-good-agricultural-practices` |
| `validate_water_and_energy_separation` | irrigation, withdrawal, washing, cooling, fuel, and electricity | Keep supplied water, natural-resource withdrawal, washing water, fuel, and electricity as separate rows with declared meters or calculation bases. | `fao-crop-evapotranspiration-56`; `fao-fresh-produce-handling` |
| `validate_output_reconciliation` | marketable, downgraded, reject, residue, wastewater, and packaging rows | Reconcile picking rounds, field sorting, conditioning, and final gate output; investigate unexplained residuals and disclose all declared fates. | `mass-balance-identity`; `iso-14044-2006` |
| `validate_emission_pathway` | direct and indirect emissions | Require receiving medium, calculation method, documented nutrient or residue inputs, and pathway evidence before treating an emission row as calculated. | `ipcc-2019-managed-soils-n2o` |
| `validate_gate_and_transport` | conditioning and pre-gate transport | Confirm washing, cooling, packing, storage, and transport included in the dataset occur before the declared gate; exclude post-gate services. | `codex-fresh-produce-hygiene`; `fao-fresh-produce-handling` |
| `validate_qualifiers` | reference flow and dataset metadata | Require all category qualifiers in the reference-flow table, including species or cultivar, maturity, grade, route, dates, water, nutrient, crop-protection, fate, and gate information. | `codex-fresh-produce-hygiene` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | Foreground agricultural production dataset for fresh, whole, immature green leguminous vegetables assigned to CPC 01249 |
| downstream_use | May be used as a secondary dataset for agricultural product systems and as a background-linked foreground node when the declared gate and qualifiers match. |
| allowed_use | Comparative modelling of fresh CPC 01249 products with disclosed species or cultivar, route, crop cycle, harvest campaign, gate, inputs, output grade, and residue or waste fates. |
| excluded_use | Green beans or green peas, dry pulses, processed or preserved products, unspecified mixed legume categories, retail or consumer life-cycle claims, and datasets with 证据缺口 mass balance or gate conditions. |
| required_metadata | CPC assignment; species or cultivar group; geography; field or protected route; planting and harvest dates; picking rounds; reference gate; product state and grade; irrigation and water source; actual fertilizer or amendment products and nutrient basis; crop protection; energy; packaging and transport; final mass reconciliation; and all waste or residue fates. |
| required_quality_disclosure | Temporal coverage, site scope, measurement versus estimate status, meter and scale controls, allocation basis, emission method, missing data, uncertainty, and evidence for every important input and output. |
| update_trigger | Change in CPC boundary interpretation, product state, production route, gate, crop-management practice, packaging route, emission method, or evidence that changes a material input, output, allocation, or validation rule. |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `codex-fresh-produce-hygiene` | standard | Codex Alimentarius, CXC 53-2003, Code of Hygienic Practice for Fresh Fruits and Vegetables, FAO/WHO: https://workspace.fao.org/sites/codex/Standards/CXC%2B53-2003/CXC_053e.pdf | fresh-produce hygiene, harvest, washing, packing, and data disclosure |
| `fao-good-agricultural-practices` | official_guidance | FAO, Production practices to increase yield, quality and safety of fruits and vegetables: https://www.fao.org/family-farming/detail/en/c/1682483/ | crop establishment, crop management, nutrient records, and boundary disclosure |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration: https://www.fao.org/4/X0490E/X0490E00.htm | irrigation, water-balance, and withdrawal measurement |
| `fao-fresh-produce-handling` | handbook | FAO, Manual for the preparation and sale of fruits and vegetables: https://www.fao.org/4/y4893e/y4893e0a.htm | conditioning, cooling, packing, transport, and post-harvest records |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, N2O Emissions from Managed Soils and CO2 Emissions from Lime and Urea Application: https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | direct and indirect agricultural emissions calculation |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation, co-product handling, completeness, and validation principles |
| `mass-balance-identity` | method_factor | Conservation and reconciliation of declared mass inputs, outputs, losses, and residues | normalization and mass-balance checks |
