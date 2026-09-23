---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beans-green
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 青豆

## 1. 范围与适用性

本 PCR 为新鲜、整果、未加工青豆建立前景数据包，包含青刀豆及其他列为青豆的未成熟可食豆荚。默认路线从声明田块或设施单元准备开始，经过直播或移栽、作物管理、重复采收、可选分选、清洗、冷却、一次包装，到声明的农场门或包装场门交接。只要披露路线、作物周期和交付门，露地和设施栽培均可纳入。

干豆、成熟种子豆、豆类种子生产、芽菜、罐藏、冷冻、腌制、发酵、干燥、熟制、切割、预制食品、零售、消费者储存和使用不在默认范围内。苗圃生产、耐久灌溉或设施基础设施、机械制造、土地利用变化及交付门之后的运输被排除，除非另行归属并披露。田间残体、次品豆荚、拒收豆荚、包装废物以及清洗水或处理产出在声明去向或交接前仍属于前景范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beans-green` |
| classification_refs | CPC 3.0 `01241`，青豆 |
| covered_products | 露地或设施栽培的新鲜整果青豆，包括青刀豆和其他未成熟可食豆荚，交付时声明成熟度、大小、颜色、等级、清洗、冷却和包装状态 |
| excluded_products | 干豆、成熟种子豆、种子生产、芽菜、加工、罐藏、冷冻、腌制、发酵、干燥、熟制、切割、零售和消费阶段 |
| representative_product | 声明品种、成熟度、大小、颜色、等级和包装状态的商品新鲜整果青豆 |
| production_route | 声明的露地或设施直播/移栽、作物管理、重复采收、分选、清洗、冷却和农场门或包装场门交付路线 |
| market_state | 声明交付门的新鲜整果青豆，散装或一次包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明交付门的商品新鲜整果青豆 |
| How much | 1,000 kg |
| How well | 新鲜、整果、未加工，符合声明的成熟度、大小、颜色、等级、清洗、冷却和包装状态 |
| How long or cycle | 一个完整声明作物周期及其中全部采收轮次，生产年度、采收窗口和交付门均需报告 |
| reference_flow_link | `green_bean_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Beans, green；生产混合，在农场；鲜品、未加工 `ddf54bf7-5413-49f1-bf1c-2f3cc2724695` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 豆类类型或品种；地理范围；露地或设施路线；种植和采收日期；采收轮次；成熟度、大小、颜色和等级；灌溉或雨养状态；养分基准；植保方案；清洗、冷却和包装状态；商品、降级、拒收、残体和废水去向；声明交付门 |
| 绑定模式 | `fixed` |

参考产品流已按 CPC 3.0:01241 完成平台身份核验，选定 UUID 不包含数据集版本。不得用干豆、成熟种子豆或其他青豆分类替代。构建前景数据包时，`必需限定信息` 中的信息必须写入数据集元数据、过程说明、参考流备注、产品说明或等效字段。

## 4. 计量与单位规则

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field bed or 设施栽培 unit receiving green-bean seed or planting material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared green-bean 作物周期 and foreground input accounting |
| product_classification_scope | CPC 3.0 `01241`, 青豆, through the declared 农场门 or pack-house hand-off |
| recursive_input_rule | 青豆 seed or other planting material is recorded at its received hand-off state and linked to an upstream dataset; its own production is not recreated inside this PCR. |
| upstream_dataset_requirement | Use upstream datasets for planting material, nutrient products, crop-protection products, supplied water, fuels, electricity, packaging, purchased transport, and waste-treatment services when those inputs cross the boundary. |
| disclosure | Declare variety group, geography, route, planting density, crop-cycle dates, irrigation source and method, nutrient product and nutrient basis, crop-protection program, picking rounds, 商品 yield, downgraded and rejected pods, residues, washing and cooling, packaging, fate of wastes, and declared gate. |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and cultivation | Include bed preparation attributable to the declared 作物周期, planting, crop management, irrigation, nutrient and crop protection, and direct crop emissions; disclose prior land use and exclude unrelated infrastructure construction. | `fao-good-agricultural-practices` |
| `boundary_repeated_picking` | harvest rounds | Attribute every picking round from one planting to the same 作物周期 and reconcile 商品 pods, downgraded pods, rejects, field losses, and residues before normalization. | `usda-snap-bean-standard`; `mass-balance-identity` |
| `boundary_gate_conditioning` | sorting, washing, cooling, and packing | End the default foreground boundary at the declared 农场门 or pack-house gate. Include sorting, washing, cooling, primary packaging, and pre-gate transport only when they occur before that gate. | `usda-snap-bean-standard`; `codex-fresh-produce-hygiene` |
| `boundary_residue_fate` | crop residues, pod culls, and packaging waste | Record field return, composting, feed use, treatment, transport, or disposal for each residue stream. Do not assign a co-product credit without a documented recipient, intended use, quality, and hand-off. | `iso-14044-2006`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 青豆 crop establishment | required | every represented sowing, planting, bed, or 设施栽培 unit | foreground crop establishment | planted area, planting material, and crop-cycle dates |
| `crop_management` | 青豆 crop management | required | each represented 作物周期 | foreground managed biological production | managed area, irrigation, nutrient and protection applications, and complete picking campaign |
| `harvest_and_gate_preparation` | 青豆 harvest and gate preparation | required | each represented harvest campaign and declared pre-gate handling route | foreground harvest, grading, conditioning, packing, and hand-off | 1,000 kg 商品 fresh green-bean output |

### Process: 青豆 crop establishment (`crop_establishment`)

#### 输入

##### 产品流

###### Seed or planting material (`planting_material_input`)

Record green-bean seed or other planting material entering each declared field bed or protected unit, distinguishing purchased seed from any other planting route and preserving the supplier lot and planting date.

- 选定流： 青豆 seed or planting material
- Flow property / unit: Mass or viable count / kg, seed, or plant
- 数量规则： Record supplier lot quantity and planted viable seed or planting-material quantity by field, bed, or protected unit.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Planting-material screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.1
  - 上限： 20
  - 单位： kg seed or declared planting material per 1,000 kg output
  - 基准： declared planted area and crop-cycle output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water (`establishment_irrigation_water`)

Record water applied for bed preparation, seed emergence, or establishment by source and production unit, excluding rainfall unless a water-balance method explicitly includes it.

- 选定流： Irrigation water supplied to the crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- 流集： `flow-set.water-use`
- 流集版本： `0.2.0`
- 流集分组： `irrigation-water`
- 数量规则： Sum metered or documented water-balance deliveries during establishment and retain the source and application method.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_irrigation_records`
- 来源： `fao-crop-evapotranspiration-56`
- 数量范围： Establishment irrigation screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 300
  - 单位： m3/ha
  - 基准： establishment period from planting to uniform stand
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

###### Occupied green-bean production area (`crop_land_occupation`)

Record the production area and time occupied by the field bed or 设施栽培 unit for the declared planting campaign.

- 选定流： Agricultural land occupation
- Flow property / unit: Area-time / ha*a
- 数量规则： Multiply declared production area by crop occupation time and state whether protected structures are excluded or separately attributed.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_area_cycle_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Area-output screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.01
  - 上限： 0.8
  - 单位： ha per 1,000 kg output
  - 基准： declared crop area and 商品 crop-cycle output
  - 基准类型： process_output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

##### 废物流

##### 基本流

### Process: 青豆 crop management (`crop_management`)

#### 输入

##### 产品流

###### Production irrigation water (`production_irrigation_water`)

Record irrigation and fertigation water delivered to the green-bean crop after establishment, separating source, application method, and any recirculated carrier water.

- 选定流： Irrigation water supplied to the crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- 流集： `flow-set.water-use`
- 流集版本： `0.2.0`
- 流集分组： `irrigation-water`
- 数量规则： Sum field, bed, or protected-unit meter readings and documented water-balance estimates from establishment through final picking.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_irrigation_records`
- 来源： `fao-crop-evapotranspiration-56`
- 数量范围： Crop irrigation screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 4,000
  - 单位： m3/ha
  - 基准： complete green-bean 作物周期
  - 基准类型： crop_cycle (`crop_cycle`)
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
- 归一化基准：per 1,000 kg 商品 fresh green-bean output
- 基准类型：Process output (`process_output`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围： Nitrogen-input screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 250
  - 单位： kg N/ha
  - 基准： complete green-bean 作物周期
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

- 数量范围： Phosphorus-input screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 120
  - 单位： kg P2O5/ha
  - 基准： complete green-bean 作物周期
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

- 数量范围： Potassium-input screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 300
  - 单位： kg K2O/ha
  - 基准： complete green-bean 作物周期
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

- 数量范围： Organic-nutrient product screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 8,000
  - 单位： kg product/ha
  - 基准： complete green-bean 作物周期
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_input`)

Record each crop-protection product applied to the represented green-bean crop, retaining product name, active ingredient, formulation, rate, application method, date, and treated area. Use integrated pest management records to show when a treatment was unnecessary or omitted.

- 选定流： Crop-protection product as applied
- Flow property / unit: Product or active-ingredient mass / kg
- 数量规则： Reconcile application logs, product labels, stock movement, and treated area for the complete 作物周期.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Product-specific (`product_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_crop_protection_records`
- 来源： `fao-good-agricultural-practices`; `fao-fresh-produce-handling`
- 数量范围： Crop-protection product screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 300
  - 单位： kg product/ha
  - 基准： complete green-bean 作物周期
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Mobile machinery fuel (`mobile_machinery_fuel`)

Record diesel, gasoline, or another fuel used by tractors and mobile machinery for bed preparation, cultivation, spraying, irrigation support, and harvest operations.

- 选定流： Mobile machinery fuel
- Flow property / unit: Energy or fuel mass / MJ or kg
- Binding: `parameterized`
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `mobile-machinery-fuel`
- 数量规则： Sum fuel receipts, tank records, or machine-hour calculations assigned to the represented 作物周期.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Mobile-fuel screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1,500
  - 单位： MJ/ha
  - 基准： field machinery operations for the 作物周期
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Electricity for irrigation and crop management (`management_electricity_input`)

Record electricity used for pumping, fertigation, protected-unit operation, lighting, and other crop-management equipment when it occurs before the declared gate.

- 选定流： Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `electricity-supply`
- 数量规则： Sum equipment meter or invoice records and allocate shared services by area-time, operating time, water delivered, or another declared physical basis.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Technology-specific (`technology_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Management-electricity screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 300
  - 单位： kWh per 1,000 kg output
  - 基准： irrigation pumping and in-scope crop-management equipment
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### Crop residues returned or removed (`crop_residue_output`)

Record leaves, stems, roots, pods left after final picking, and other crop residues leaving the crop-cycle process, with separate quantities and fates for field return, composting, feed use, treatment, or disposal.

- 选定流： 青豆 crop residues
- Flow property / unit: Mass / kg wet residue
- 数量规则： Weigh or calculate residues by field or protected unit and document the receiving fate; retain uncollected field residue as a declared residue or loss stream.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_residue_fate_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Crop-residue screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 500
  - 上限： 10,000
  - 单位： kg wet residue/ha
  - 基准： crop-cycle residue mass before declared fate
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### Water resource withdrawal (`water_resource_withdrawal`)

Record natural-resource water withdrawn for irrigation or fertigation separately from supplied irrigation water and report the source and return or consumption basis.

- 选定流： Water resource withdrawal
- Flow property / unit: Volume / m3
- 数量规则： Reconcile source-meter or permit records to water delivered to the crop and disclose any return flow or consumption calculation.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_irrigation_records`
- 来源： `fao-crop-evapotranspiration-56`
- 数量范围： Water-withdrawal screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 6,000
  - 单位： m3/ha
  - 基准： crop-cycle natural-resource withdrawal
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### Nitrous oxide to air (`nitrous_oxide_emission`)

Record or calculate direct and indirect nitrous oxide emissions attributable to managed nitrogen input and relevant crop residues; retain the declared calculation method and receiving medium.

- 选定流： Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- 数量规则： Apply one declared emissions method to documented nitrogen input, residue fate, and relevant environmental factors without double counting.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_nutrient_records`
- 来源： `ipcc-2019-managed-soils-n2o`
- 数量范围： Nitrous-oxide screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 35
  - 单位： kg N2O/ha
  - 基准： nitrogen-managed green-bean 作物周期
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`ammonia_emission`)

Record or calculate ammonia emissions from nitrogen applications when the declared method and application records support the pathway.

- 选定流： Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- 数量规则： Apply the declared nitrogen-emission method to documented nitrogen forms, application timing, and environmental conditions.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_nutrient_records`
- 来源： `ipcc-2019-managed-soils-n2o`
- 数量范围： Ammonia screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 40
  - 单位： kg NH3/ha
  - 基准： nitrogen-managed green-bean 作物周期
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Nitrate to water (`nitrate_to_water`)

Record or calculate nitrate loss to water when nutrient, soil, drainage, and receiving-medium information supports the pathway.

- 选定流： Nitrate emission to water
- Flow property / unit: Mass / kg nitrate
- 数量规则： Apply the declared nitrogen-loss method to recorded nutrient input, drainage or leaching evidence, and the receiving medium.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_nutrient_records`
- 来源： `ipcc-2019-managed-soils-n2o`
- 数量范围： Nitrate-loss screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg nitrate/ha
  - 基准： nitrogen-managed 作物周期 and documented drainage pathway
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Phosphate to water (`phosphate_to_water`)

Record or calculate phosphate loss to water when nutrient application, runoff or drainage, soil conditions, and receiving-medium information support the pathway.

- 选定流： Phosphate emission to water
- Flow property / unit: Mass / kg phosphate
- 数量规则： Apply the declared phosphorus-loss method to recorded nutrient input and documented runoff, drainage, or erosion pathway without assigning an unsupported default emission.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Method formula (`method_formula`)
- 采集协议： `cp_nutrient_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Phosphate-loss screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 25
  - 单位： kg phosphate/ha
  - 基准： phosphorus-managed 作物周期 and documented runoff or drainage pathway
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

### Process: 青豆 harvest and gate preparation (`harvest_and_gate_preparation`)

#### 输入

##### 产品流

###### Washing water (`washing_water_input`)

Record water used to remove soil and foreign material when washing occurs before the declared gate; keep it separate from irrigation and source withdrawal.

- 选定流： Process water for washing
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- 流集： `flow-set.water-use`
- 流集版本： `0.2.0`
- 流集分组： `process-water`
- 数量规则： Sum wash-water meter or batch records and disclose recirculation, treatment, and discharge handling.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_postharvest_records`
- 来源： `codex-fresh-produce-hygiene`; `fao-fresh-produce-handling`
- 数量范围： Washing-water screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 8
  - 单位： m3 per 1,000 kg output
  - 基准： pre-gate washing of 新鲜整果 青豆
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Electricity for cooling, sorting, and packing (`postharvest_electricity_input`)

Record electricity for forced-air cooling, cold rooms, sorting lines, lighting, and packing equipment when those activities occur before the declared gate.

- 选定流： Electricity supply
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `electricity-supply`
- 数量规则： Sum equipment meter or invoice records and allocate shared services by mass, operating time, or another declared basis.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Technology-specific (`technology_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_energy_records`
- 来源： `fao-fresh-produce-handling`
- 数量范围： Post-harvest electricity screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 300
  - 单位： kWh per 1,000 kg output
  - 基准： pre-gate cooling, sorting, and packing
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Flexible primary packaging (`flexible_packaging_input`)

Record flexible bags, films, liners, or other flexible primary packaging that crosses the foreground boundary before the declared gate, including material, tare, reuse, and loss information.

- 选定流： Flexible packaging function
- Flow property / unit: Mass or packaging service / kg or item
- Binding: `parameterized`
- 流集： `flow-set.packaging-function`
- 流集版本： `0.2.0`
- 流集分组： `flexible-packaging`
- 数量规则： Record package mass or item count, capacity, tare, reuse cycles, and loss rate for the represented harvest campaign.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Product-specific (`product_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_packaging_transport_records`
- 来源： `codex-fresh-produce-hygiene`
- 数量范围： Flexible-packaging screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 40
  - 单位： kg packaging per 1,000 kg output
  - 基准： declared primary packaging at the gate
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Carton or box packaging (`carton_packaging_input`)

Record carton, box, tray, or other paper-based primary packaging that crosses the foreground boundary before the declared gate, including material grade, tare, reuse, and loss information.

- 选定流： Carton and box packaging function
- Flow property / unit: Mass or packaging service / kg or item
- Binding: `parameterized`
- 流集： `flow-set.packaging-function`
- 流集版本： `0.2.0`
- 流集分组： `carton-and-box-packaging`
- 数量规则： Record package mass or item count, capacity, tare, reuse cycles, and loss rate for the represented harvest campaign.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Product-specific (`product_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_packaging_transport_records`
- 来源： `codex-fresh-produce-hygiene`
- 数量范围： Carton-and-box screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg packaging per 1,000 kg output
  - 基准： declared primary packaging at the gate
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Reusable crate or pallet packaging (`crate_pallet_packaging_input`)

Record reusable crates, pallets, bins, or other rigid handling packaging used before the declared gate, including material, tare, number of uses, return route, and loss rate.

- 选定流： Pallet and crate packaging function
- Flow property / unit: Mass or packaging service / kg or item
- Binding: `parameterized`
- 流集： `flow-set.packaging-function`
- 流集版本： `0.2.0`
- 流集分组： `pallet-and-crate-packaging`
- 数量规则： Record package mass or item count, capacity, tare, reuse cycles, return route, and loss rate for the represented campaign.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Product-specific (`product_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_packaging_transport_records`
- 来源： `codex-fresh-produce-hygiene`
- 数量范围： Crate-and-pallet screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 80
  - 单位： kg packaging per 1,000 kg output
  - 基准： declared primary handling packaging at the gate
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Pre-gate road freight (`pre_gate_road_transport`)

Record purchased transport from field to pack-house or another declared pre-gate hand-off when it occurs within the foreground boundary.

- 选定流： Road freight transport service
- Flow property / unit: Transport service / t*km
- Binding: `parameterized`
- 流集： `flow-set.transport-service`
- 流集版本： `0.2.0`
- 流集分组： `road-freight-transport`
- 数量规则： Calculate transported mass times documented distance and state whether return or empty-leg burden is included.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Route-specific (`route_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_packaging_transport_records`
- 来源： `fao-good-agricultural-practices`
- 数量范围： Pre-gate transport screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 250
  - 单位： t*km per 1,000 kg output
  - 基准： declared field-to-pack-house or pre-gate route
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### Marketable fresh green-bean output (`marketable_green_bean_output`)

Record the accepted 新鲜整果 green-bean pods delivered at the declared 农场门 or pack-house hand-off. The reference amount is normalized to 1,000 kg after all picking rounds and grade decisions are reconciled.

- 选定流： 新鲜整果 青豆 at the declared gate
- Flow property / unit: Mass / kg
- 数量规则： Sum accepted 商品 pods across all picking rounds and normalize the accepted output to the declared 1,000 kg reference flow.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Product-specific (`product_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： reference_flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_harvest_grade_records`
- 来源： `mass-balance-identity`; `usda-snap-bean-standard`
- 数量范围： Marketable-yield screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 500
  - 上限： 20,000
  - 单位： kg 商品 pods/ha
  - 基准： complete green-bean 作物周期 and harvest campaign
  - 基准类型： crop_cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Downgraded green-bean pods for a declared secondary use (`downgraded_green_bean_output`)

Record edible or potentially usable pods that fail the declared primary grade but leave the process for a documented secondary use. Keep the recipient, quality, intended use, and hand-off distinct from waste or field loss.

- 选定流： Downgraded green-bean pods for documented secondary use
- Flow property / unit: Mass / kg
- 数量规则： Weigh downgraded pods by picking or grading batch and record the recipient and intended use before assigning any co-product treatment.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Product-specific (`product_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_harvest_grade_records`
- 来源： `usda-snap-bean-standard`; `mass-balance-identity`
- 数量范围： Downgraded-pod screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kg downgraded pods per 1,000 kg 商品 output
  - 基准： picking and grade reconciliation
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### Sorting rejects and trimmings (`sorting_rejects_output`)

Record pods rejected during sorting, trimming, or quality inspection when they do not leave as a documented secondary product. Record their treatment, feed, compost, disposal, or other fate.

- 选定流： 青豆 sorting rejects and trimmings
- Flow property / unit: Mass / kg wet waste
- 数量规则： Weigh or calculate rejects by batch and retain the treatment or recipient record.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Product-specific (`product_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_harvest_grade_records`
- 来源： `mass-balance-identity`; `usda-snap-bean-standard`
- 数量范围： Sorting-reject screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 400
  - 单位： kg wet waste per 1,000 kg output
  - 基准： harvest and pack-house grade reconciliation
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Packaging waste (`packaging_waste_output`)

Record damaged, discarded, or unrecovered packaging generated before the declared gate, separating reusable packaging returned to service from packaging that becomes waste.

- 选定流： Packaging waste from pre-gate handling
- Flow property / unit: Mass / kg
- 数量规则： Reconcile packaging issued, returned, reused, and discarded for the represented campaign.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： reference_flow (`reference_flow`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_packaging_transport_records`
- 来源： `mass-balance-identity`; `codex-fresh-produce-hygiene`
- 数量范围： Packaging-waste screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 20
  - 单位： kg packaging waste per 1,000 kg output
  - 基准： pre-gate packing-material reconciliation
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Wash-water and wash-solids wastewater (`wash_water_wastewater_output`)

Record wastewater or wash solids discharged or sent to treatment when washing occurs before the declared gate, retaining the water volume, solids mass, treatment route, and receiving hand-off.

- 选定流： Wastewater and wash solids from green-bean washing
- Flow property / unit: Volume and mass / m3 and kg
- 数量规则： Reconcile wash-water input, recirculation, evaporation, retained solids, and discharged or treated output; record treatment separately when it crosses the boundary.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg 商品 fresh green-bean output
- 基准类型： reference_flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_postharvest_records`
- 来源： `codex-fresh-produce-hygiene`; `mass-balance-identity`
- 数量范围： Wash-wastewater screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 8
  - 单位： m3 wastewater per 1,000 kg output
  - 基准： pre-gate washing water balance
  - 基准类型： reference_flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_crop_inputs` | multiple crops or products sharing a field, bed, meter, facility, or transport | Allocate shared inputs using measured crop-specific records where available. If a shared record cannot be separated, use a documented physical basis such as area-time, operating time, water delivered, or mass, and disclose the basis. | `iso-14044-2006` |
| `allocation_downgraded_pods` | downgraded pods and other secondary outputs | Treat downgraded pods as waste or residue unless a recipient, intended use, quality, and hand-off are documented. Apply co-product allocation only when the secondary output has a defined function and the allocation basis is stated. | `iso-14044-2006`; `mass-balance-identity` |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting material | supplier lot and planting log | lot, seed or planting-material form, quantity, variety, date, field or bed | transcribe invoices and planting logs; verify lot against planting record | kg, seed, or plant | each planting event | complete 作物周期 | each represented field, bed, or protected unit | sum planted viable quantity by crop-cycle unit | lot invoice, planting log, and supervisor check |
| `cp_area_cycle_records` | `crop_establishment` | land occupation | field or facility register | area, unit, crop dates, protected status, prior use | map or register production unit and verify start and end dates | ha and date | each 作物周期 | full crop occupation period | each field, bed, or protected unit | multiply area by declared occupation period | field map, lease or facility record, date record |
| `cp_irrigation_records` | `crop_management` | irrigation and withdrawal | meter, permit, or water-balance record | source, meter, application, date, volume, return flow | read meter or reconstruct documented water balance | m3 | each application or daily total | establishment to final picking | each water source and crop unit | sum by 作物周期 and separate source withdrawal from delivery | meter calibration, permit, or water-balance check |
| `cp_nutrient_records` | `crop_management` | nutrient inputs and soil emissions | invoice, label, nutrient plan, and application log | product, mass, nutrient fraction, date, method, area, residue fate | reconcile purchases to application records and calculate nutrient equivalents | kg product and kg nutrient | each application | full 作物周期 | each crop unit | sum applications assigned to the 作物周期 | supplier label, nutrient plan, laboratory, or log review |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | spray and stock record | product, active ingredient, dose, date, area, method | reconcile spray logs with invoices and stock movement | kg product or active ingredient | each application | full 作物周期 | each crop unit | sum by product and active ingredient | product label, application log, trained-operator check |
| `cp_energy_records` | `crop_management` | field and post-harvest energy | meter, fuel, or invoice record | carrier, quantity, operation, equipment, date, crop or batch assignment | read meter or reconcile fuel receipts and operating records | kWh, MJ, L, or kg | each operation or billing period | full 作物周期 and pre-gate handling | field, facility, and shared equipment | allocate shared use by declared physical basis | meter, receipt, machine-hour, or allocation record |
| `cp_residue_fate_records` | `crop_management` | crop residues | residue and recipient record | stream, wet mass, fate, recipient, date, field | weigh or estimate residue and retain fate evidence | kg wet residue | each removal or crop-cycle close | crop-cycle close and post-harvest cleanup | each crop unit | sum by residue stream and fate | weigh ticket, recipient record, or treatment receipt |
| `cp_harvest_grade_records` | `harvest_and_gate_preparation` | 商品 output, downgraded pods, and rejects | harvest and grading record | date, picking round, gross harvest, accepted mass, downgraded mass, rejects, grade, gate | weigh each picking round and reconcile grade outcomes | kg | each picking round | entire harvest campaign | each field, bed, or campaign | sum by 作物周期 and declared gate | scale record, grade sheet, and mass-balance check |
| `cp_postharvest_records` | `harvest_and_gate_preparation` | washing, cooling, and wastewater | batch, meter, or equipment record | batch, water, recirculation, cooling time, loss, solids, discharge | read batch or meter record and link to harvest lot | m3, kWh, kg, and h | each batch | all pre-gate handling | pack-house or declared handling site | aggregate by accepted output batch | batch sheet, meter, sanitation, and treatment record |
| `cp_packaging_transport_records` | `harvest_and_gate_preparation` | packaging, packaging waste, and pre-gate transport | packaging issue and dispatch record | material, tare, reuse, item count, mass, distance, vehicle, load | reconcile packaging and dispatch records to accepted harvest lots | kg, item, km, or t*km | each campaign or dispatch | all in-scope pre-gate movements | field, pack-house, and route | sum packaging and transport by declared gate output | package specification, dispatch note, route record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_occupation` | crop establishment | area-time = declared production area × crop occupation period; keep protected structures separate when separately attributed | area, start date, end date, protected status | ha*a or declared area-time | `fao-good-agricultural-practices` |
| `calc_nutrient_equivalents` | nutrient inputs | nutrient mass = formulated product mass × documented nutrient fraction; retain product and nutrient bases separately and de-duplicate compound products | product mass, label or plan concentration | kg N, kg P2O5, and kg K2O | `fao-good-agricultural-practices` |
| `calc_managed_soil_emissions` | nitrogen-related elementary outputs | apply one declared nitrogen-emission method to nutrient inputs, crop residues, and environmental factors; do not duplicate pathways | nutrient input, residue fate, method factors | declared nitrogen emission flows | `ipcc-2019-managed-soils-n2o` |
| `calc_water_balance` | irrigation, withdrawal, washing, and wastewater | reconcile source withdrawal, delivered water, recirculation, evaporation, retained solids, and discharged water; keep irrigation and washing systems separate | meter readings, batch records, return flow, and solids | water-delivery and wastewater values | `fao-crop-evapotranspiration-56`; `mass-balance-identity` |
| `calc_transport_service` | pre-gate road freight | transport service = transported mass (t) × documented distance (km); state whether return or empty-leg burden is included | mass, distance, load, and route record | t*km | `fao-good-agricultural-practices` |
| `calc_reference_normalization` | all inventory rows | normalized value = crop-cycle quantity × 1,000 kg / accepted 商品 output at the declared gate | crop-cycle quantity and accepted output mass | quantity per 1,000 kg reference flow | `mass-balance-identity` |
| `calc_mass_reconciliation` | harvest, downgraded pods, rejects, residues, losses, and packaging | gross harvested mass = accepted output + downgraded pods + rejects + field or handling losses + declared residue streams, with measured moisture and tare treatment disclosed | picking, grade, residue, packaging, and loss records | reconciled crop-cycle mass balance | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all flows and product qualifiers | Record semantic identity, physical state, direction, process role, and 证据缺口 or verified status for every flow; resolve the reference identity before final dataset publication. | flow description, qualifier record, and foreground review |
| `dq_measurement` | quantities and conversions | Use calibrated scales, meters, invoices, logs, or transparent calculations; retain raw values and conversion factors with units. | measurement record and calculation worksheet |
| `dq_temporal` | 作物周期 and harvest campaign | Cover the complete declared planting-to-gate period and identify missing picking rounds, exceptional weather, or substituted records. | planting, application, picking, and gate dates |
| `dq_completeness` | boundary inputs and outputs | Provide a value, justified zero, or documented exclusion for planting material, land, water, nutrients, protection, energy, emissions, yield, downgraded pods, rejects, residues, packaging, wastewater, and pre-gate transport when applicable. | completeness checklist and mass-balance review |
| `dq_allocation` | shared meters, fields, facilities, packaging, or transport | State the allocation basis and test its effect when records serve multiple crops, products, or campaigns. | allocation record and sensitivity note |
| `dq_disclosure` | final dataset metadata | Declare variety group, geography, route, planting and picking dates, 作物周期, gate, yield and grade, irrigation and nutrient bases, crop protection, residue and reject fates, packaging, washing, wastewater, pre-gate transport, and any identity 证据缺口. | dataset metadata and reference-flow comment |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_definition` | reference flow | Confirm the 1,000 kg functional unit, all required qualifiers, and the verified reference product, mass property, and unit-group identities before foreground generation. | `mass-balance-identity` |
| `validation_flow_set_binding` | parameterized product inputs | Resolve each parameterized row during foreground data generation using the cited Flow Set id, version, group, structural coordinate, property, unit, geography, and intended-use evidence; do not treat a Flow Set as a final UUID. |  |
| `validation_mass_reconciliation` | harvest and gate preparation | Check accepted output, downgraded pods, rejects, residues, field losses, handling losses, wastewater, and packaging waste against the declared mass and water bases, with container tare and moisture treatment explicit. | `mass-balance-identity` |
| `validation_boundary_disclosure` | system boundary | Reject a dataset that omits the declared gate, 作物周期, route, irrigation source, nutrient basis, residue and reject fate, or pre-gate handling included by the scope. | `fao-good-agricultural-practices`; `codex-fresh-produce-hygiene` |
| `validation_soil_emissions` | managed nutrients and residues | Verify that one declared emissions method is used and that direct and indirect nitrogen pathways are not double counted. | `ipcc-2019-managed-soils-n2o` |
| `validation_data_quality` | all foreground records | Report identity, measurement, temporal coverage, completeness, allocation, and disclosure findings separately; inconclusive or error findings fail validation by default. | `iso-14044-2006` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | Foreground primary dataset for 新鲜整果 green-bean production at the declared 农场门 or pack-house gate; usable downstream as `secondary_dataset` after review |
| downstream_use | Build process and lifecycle-model foreground inventories for fresh 青豆 and compare declared crop-cycle routes with disclosed qualifiers |
| allowed_use | Product-category studies that preserve the declared 作物周期, route, gate, maturity and grade state, input bases, emission method, and mass and water reconciliation |
| excluded_use | Direct substitution for dry beans, seed or sprout production, processed 青豆, retail or consumer stages, undisclosed protected infrastructure, or crops with materially different product and gate conditions |
| required_metadata | PCR id and version; variety group; geography; route; planting and picking dates; 作物周期; declared gate; yield and grade; irrigation and nutrient basis; crop protection; residue, downgraded, and reject fates; washing and wastewater; packaging; pre-gate transport; reference product qualifiers |
| required_quality_disclosure | Measurement sources, missing or estimated fields, allocation basis, crop-cycle completeness, mass-balance result, water balance, emission method, Flow Set resolutions, and identity 证据缺口 findings |
| update_trigger | New cultivation or protected-production route, material change in gate conditioning or packaging, revised emission method, changed product qualifiers, or evidence that alters the default collection and validation rules |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration — https://www.fao.org/4/X0490E/X0490E00.htm | irrigation scheduling, water-balance context, and water-withdrawal records |
| `fao-good-agricultural-practices` | official_guidance | FAO, Production practices to increase yield, quality and safety of fruits and vegetables — https://www.fao.org/family-farming/detail/en/c/1682483/ | crop-cycle decomposition, nutrient and crop-protection records, field operations, and boundary context |
| `fao-fresh-produce-handling` | official_guidance | FAO, Manual for the preparation and sale of fruits and vegetables — https://www.fao.org/4/y4893e/y4893e0a.htm | agricultural water, harvest, handling, sanitation, and post-harvest process context |
| `usda-snap-bean-standard` | official_guidance | USDA Agricultural Marketing Service, Snap Beans for Processing Grades and Standards — https://www.ams.usda.gov/grades-standards/snap-beans-processing-grades-and-standards | green-bean product identity, maturity, tenderness, defect, grade, and harvest-quality qualifiers |
| `codex-fresh-produce-hygiene` | standard | Codex Alimentarius, Code of Hygienic Practice for Fresh Fruits and Vegetables (CXC 53-2003) — https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+53-2003%2FCXC_053e.pdf | water quality, washing, packing, hygiene, and pre-gate handling requirements |
| `ipcc-2019-managed-soils-n2o` | method_factor | 2019 IPCC Refinement, Chapter 11: N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application — https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil nitrogen-emission calculation and validation |
| `iso-14044-2006` | standard | ISO 14044, Environmental management — Life cycle assessment — Requirements and guidelines — https://www.iso.org/standard/38498.html | allocation and data-quality validation rules |
| `mass-balance-identity` | method_factor | Declared crop-cycle, grade, water, residue, and packaging mass-balance reconciliation method | normalization, loss, cull, reject, residue, wastewater, and packaging checks |
