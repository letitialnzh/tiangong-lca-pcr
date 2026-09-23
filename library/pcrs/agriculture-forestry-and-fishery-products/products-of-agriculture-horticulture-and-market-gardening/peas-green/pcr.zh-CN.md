---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.peas-green
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 青豌豆

## 1. 范围与适用性

本 PCR 用于从作物建植到作物管理、采收、可选初级调理和声明农场门或包装场门交接的新鲜青豌豆前景数据包。覆盖带荚销售的鲜食豌豆和去荚的鲜青豌豆种子，但必须声明产品形态、品种或类型、成熟度、等级、生产路线和交付门状态。露地和设施路线均可表示，但路线特有投入和基础设施必须保持可识别。

种子生产、苗圃、干豌豆、生理成熟后采收的豆类、冷冻、罐藏或其他保藏产品、预制食品、零售、消费者储存和消费均排除。只有在声明交付门之前发生时，清洗、冷却、一次包装和外购运输才纳入。只有在每个作物周期和产品形态均与合格产出核对后，才可汇总多个田块、种植批次或采收轮次。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.peas-green |
| classification_refs | CPC 3.0:01242 青豌豆 |
| covered_products | 在声明农场门或包装场门交付的新鲜、整果、未加工青豌豆，包括带荚鲜食豌豆和在声明形态下的去荚鲜青豌豆种子 |
| excluded_products | 豌豆种子和移栽苗；干豌豆或成熟豌豆；冷冻、罐藏、干燥、熟制或其他保藏产品；零售、消费者和餐饮阶段 |
| representative_product | 在声明成熟度、等级、产品形态和交付门状态下的商品新鲜青豌豆 |
| production_route | 露地或设施建植、作物管理、灌溉、养分和植保、采收、可选去荚/分选/清洗/冷却、一次包装和交付门准备 |
| market_state | 声明交付门的新鲜青豌豆，带荚或去荚，散装或一次包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明交付门的商品新鲜青豌豆 |
| How much | 1,000 kg |
| How well | 新鲜、整果、未加工，并声明带荚或去荚形态、类型、品种、成熟度、嫩度、颜色、大小、等级和包装状态 |
| How long or cycle | 从种植或移栽到最后一次纳入数据集的采收的完整作物周期，报告生产年度和采收窗口 |
| reference_flow_link | `green_pea_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Peas, green；生产混合，在农场；鲜品、未加工 `b0d5d264-fa1a-4230-8bf8-423b8125d8a7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 豌豆形态（带荚或去荚）；类型或品种组；生产地理范围；露地或设施路线；种植和采收日期；采收轮次；成熟度、嫩度、颜色、大小和等级；灌溉或雨养状态；养分基准；植保方案；去荚、清洗、冷却和包装状态；商品、降级、豆荚、残体、废水和包装废物去向；声明交付门 |
| 绑定模式 | `fixed` |

参考产品流及质量支持对象已按 CPC 3.0:01242 完成平台核验，选定 UUID 不包含数据集版本。不得用干豌豆、成熟豌豆或加工产品替代鲜青豌豆。构建前景数据包时必须披露上述限定信息，并使带荚和去荚产品的质量平衡保持一致。

## 4. 计量与单位规则

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared field or protected production unit receiving green pea seed or planting material, with prior land use and excluded infrastructure work disclosed |
| starting_condition_role | Start of the declared green pea 作物周期 and foreground input accounting |
| product_classification_scope | 新鲜整果 青豌豆 under CPC 3.0:01242 through the declared 农场门 or pack-house gate |
| recursive_input_rule | Purchased green pea seed or planting material is recorded at its received hand-off state and linked once to an upstream dataset; its own production is outside this PCR unless a separate upstream dataset is supplied. |
| upstream_dataset_requirement | Require upstream datasets for seed, nutrient products, crop-protection products, irrigation water, energy, packaging, purchased transport, and waste-treatment services when used. |
| disclosure | Declare production geography, pea form and type, route, crop-cycle dates, planted area and density, irrigation and fertigation method, nutrient basis, crop-protection program, harvest rounds, accepted and downgraded mass, shelling where applicable, washing and cooling, packaging, water recirculation or drainage, residue fate, and gate location. |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | establishment and crop management | Include production-unit preparation attributable to the 作物周期, planting, crop management, supplied water, nutrients, crop protection, energy, and direct crop emissions. Disclose prior land use and exclude unrelated infrastructure construction. | `unece-ffv-27-peas-2025` |
| `boundary_route_specificity` | 露地 and protected production | Keep route-specific infrastructure, pumping, heating or lighting, substrate, recirculation, drainage, and crop-termination records separate when they materially change the inventory. | `ucdavis-edible-pod-peas-postharvest` |
| `boundary_gate_preparation` | harvest, grading, shelling, washing, cooling, and packing | End the default foreground boundary at the declared 农场门 or pack-house gate. Include shelling, grading, washing, cooling, and primary packaging only when they occur before that gate. | `unece-ffv-27-peas-2025`; `ucdavis-edible-pod-peas-postharvest` |
| `boundary_nitrogen_emissions` | nutrient inputs, soil, drainage, and residues | Estimate applicable direct and indirect nitrogen emissions with one declared method using recorded nutrient inputs, drainage or leaching evidence, and residue fate. Avoid double counting pathways. | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | pod shells, rejected peas, crop residues, wash solids, and wastewater | Record field return, composting, feed use, treatment, transport, or disposal for each residue stream. A credit requires documented recipient, intended use, substitution claim, and allocation treatment. | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 青豌豆 crop establishment | required | every represented planting, field, protected compartment, or 作物周期 | foreground crop establishment | planted area, planting material, and crop-cycle dates |
| `crop_management` | 青豌豆 crop management | required | each represented green pea 作物周期 | foreground managed biological production | production-unit area, irrigation, nutrients, protection, energy, and harvest campaign |
| `harvest_and_gate_preparation` | 青豌豆 harvest and gate preparation | required | each represented harvest campaign | foreground harvest, optional shelling, conditioning, packaging, and gate hand-off | 1,000 kg 商品 fresh green pea output |
| `purchased_transport_to_gate` | Purchased transport to declared gate | conditional | when a transport service crosses the foreground boundary before the declared gate | foreground delivery service | tonne-kilometres from production unit or pack-house to gate |

### Process: 青豌豆 crop establishment (`crop_establishment`)

#### 输入

##### 产品流

###### 青豌豆 seed or planting material (`seed_input`)

青豌豆 seed or other planting material crosses the boundary when accepted for establishment in the declared production unit. Record untreated and treated seed as separate lots when their burdens differ.

- 选定流： 青豌豆 seed or planting material
- Flow property / unit: Mass or viable count / kg seed or count
- 数量规则： Record supplier lot, seed mass or viable count, treatment state, planting date, planted area, unused material, and replacement material by production unit.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output from the same 作物周期 and product form
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_establishment_records`
- 数量范围： Planting-material screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.5
  - 上限： 120
  - 单位： kg seed per 1,000 kg accepted 青豌豆
  - 基准： crop-cycle planted area and accepted fresh output
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Establishment irrigation water (`establishment_irrigation_water`)

Water applied for seed emergence or transplant establishment is recorded by source and production unit. Rainfall and recirculated solution are not reported as delivered irrigation unless they cross the defined boundary.

- 选定流： Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- 流集： `flow-set.water-use`
- 流集版本： `0.2.0`
- 流集分组： `irrigation-water`
- 数量规则： Sum metered or documented water-balance deliveries during establishment and retain rainfall, storage, and recirculation separately.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output from the same 作物周期
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_irrigation_records`
- 来源： `fao-crop-evapotranspiration-56`
- 数量范围： Establishment irrigation screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： m3/ha during establishment
  - 基准： sowing or planting to uniform stand
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### Unused or failed planting material (`establishment_loss`)

Unused seed, failed plants, and establishment losses are recorded when discarded or sent to a defined treatment route.

- 选定流： Unused or failed green pea planting material
- Flow property / unit: Mass or count / kg or count
- 数量规则： Reconcile purchased, planted, unused, and failed lots by 作物周期.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_establishment_records`
- 数量范围： Establishment-loss screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 15
  - 单位： percent of purchased planting material
  - 基准： purchased lot to planted and accepted establishment material
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### Process: 青豌豆 crop management (`crop_management`)

#### 输入

##### 产品流

###### Crop irrigation and fertigation water (`crop_irrigation_water`)

Delivered crop water crosses the boundary when supplied to the field or protected unit. Record source, meter, recirculation, drainage, and crop-cycle period.

- 选定流： Irrigation water supplied to crop
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- 流集： `flow-set.water-use`
- 流集版本： `0.2.0`
- 流集分组： `irrigation-water`
- 数量规则： Sum metered or documented water-balance deliveries during crop management and report recirculated solution and drainage separately where material.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_irrigation_records`
- 来源： `fao-crop-evapotranspiration-56`
- 数量范围： Crop irrigation screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 5,000
  - 单位： m3/ha per 作物周期
  - 基准： 露地 or protected green pea 作物周期
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
- 归一化基准：per 1,000 kg accepted fresh green pea output
- 基准类型：Process output (`process_output`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：
- 数量范围： Nitrogen-product screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 300
  - 单位： kg product per 1,000 kg accepted output
  - 基准： crop-cycle nutrient program and accepted output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

- 数量范围： Phosphorus-product screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 250
  - 单位： kg product per 1,000 kg accepted output
  - 基准： crop-cycle nutrient program and accepted output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

- 数量范围： Potassium-product screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 400
  - 单位： kg product per 1,000 kg accepted output
  - 基准： crop-cycle nutrient program and accepted output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

- 数量范围： Organic-product screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 2,000
  - 单位： kg product per 1,000 kg accepted output
  - 基准： crop-cycle amendment program and accepted output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`crop_protection_input`)

Crop-protection products cross the boundary when applied to the represented green pea crop. Record each product and active ingredient separately because the current reviewed Flow Set taxonomy does not provide a general crop-protection group.

- 选定流： Crop-protection product and active ingredient
- Flow property / unit: Mass or volume / kg or L product
- 数量规则： Record product, active ingredient, formulation, concentration, application date, treated area, and application purpose from the crop-protection plan and application log.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_crop_protection_records`
- 数量范围： Crop-protection screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： kg or L product per 1,000 kg accepted output
  - 基准： crop-cycle application program and accepted output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Production electricity (`production_electricity`)

Electricity for pumping, 设施栽培, monitoring, or other included crop-management operations is recorded by operation and production unit.

- 选定流： Electricity supplied to production
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `electricity-supply`
- 数量规则： Sum metered electricity or allocate documented invoices to included crop-management operations by sub-meter, operating hours, or throughput.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_energy_records`
- 数量范围： Production-electricity screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1,000
  - 单位： kWh per 1,000 kg accepted output
  - 基准： included crop-management operations
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Mobile machinery fuel (`mobile_machinery_fuel`)

Diesel, gasoline, or another fuel used by field machinery crosses the boundary when consumed by included crop-management operations.

- 选定流： Fuel for mobile agricultural machinery
- Flow property / unit: Fuel mass or volume / L or kg
- Binding: `parameterized`
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `mobile-machinery-fuel`
- 数量规则： Reconcile fuel deliveries or equipment records with tillage, sowing, spraying, irrigation, and other included operations.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_energy_records`
- 数量范围： Mobile-fuel screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 300
  - 单位： L per 1,000 kg accepted output
  - 基准： included field operations
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Stationary fuel for pumping or protected production (`stationary_fuel_input`)

Stationary fuel is recorded only when a boiler, stationary engine, heater, or other included stationary equipment is operated for the 作物周期.

- 选定流： Stationary combustion fuel
- Flow property / unit: Fuel mass or volume / L or kg
- Binding: `parameterized`
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `stationary-combustion-fuel`
- 数量规则： Record fuel by equipment, operation, production unit, and crop-cycle period; use a justified zero or documented exclusion when no stationary equipment is used.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Route-specific (`route_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_energy_records`
- 数量范围： Stationary-fuel screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： L per 1,000 kg accepted output
  - 基准： included stationary operations
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### Source water withdrawal (`source_water_withdrawal`)

Source withdrawal is recorded separately from delivered irrigation when a source, permit, meter, or water balance provides evidence of the withdrawn volume.

- 选定流： Water resource withdrawal for crop production
- Flow property / unit: Volume / m3
- 数量规则： Record metered or water-balance source withdrawal and reconcile it to delivered water, storage change, drainage, and discharge.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_irrigation_records`
- 来源： `fao-crop-evapotranspiration-56`
- 数量范围： Source-withdrawal screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 8,000
  - 单位： m3/ha per 作物周期
  - 基准： source withdrawal for the represented 作物周期
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Land occupation (`land_occupation`)

Land occupation is recorded for the production area and crop-cycle duration using the location and time basis of the represented field or protected unit.

- 选定流： Land occupation for green pea production
- Flow property / unit: Area-time / ha·year or m2·year
- 数量规则： Record occupied area and crop-cycle duration; retain field or compartment identity and any multiple-cropping allocation basis.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_establishment_records`
- 数量范围： Land-occupation screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.01
  - 上限： 3
  - 单位： ha·year per 1,000 kg accepted output
  - 基准： occupied production area and crop-cycle duration
  - 基准类型： Crop cycle (`crop_cycle`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)



#### 输出

##### 产品流

##### 废物流

###### 青豌豆 crop residue (`crop_residue`)

Pea vines, roots, unharvested pods, and other crop residue are recorded when left in the field, removed, composted, used as feed, treated, or disposed of. The fate is part of the foreground record.

- 选定流： 青豌豆 crop residue and unharvested biomass
- Flow property / unit: Mass / kg wet or dry matter
- 数量规则： Weigh or estimate residue by documented dry-matter or moisture basis and record field return, removal, treatment, or disposal route.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_residue_fate_records`
- 数量范围： Crop-residue screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 5,000
  - 单位： kg wet residue per 1,000 kg accepted output
  - 基准： crop termination and harvest residue by stated moisture basis
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### Ammonia to air (`ammonia_air_emission`)

Ammonia emissions are recorded or calculated when nutrient application, residue handling, or other crop operations create a documented release to ambient air.

- 选定流： Ammonia emission to ambient air
- Flow property / unit: Mass / kg NH3
- 数量规则： Apply one declared emission method to documented N inputs and residue or manure fate; report the receiving medium and avoid overlapping factors.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_emission_records`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Ammonia-emission screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 30
  - 单位： kg NH3 per 1,000 kg accepted output
  - 基准： declared nutrient and residue emission method
  - 基准类型： N input (`n_input`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Nitrous oxide to air (`nitrous_oxide_air_emission`)

Direct and indirect nitrous oxide emissions from managed soils or substrates are recorded or calculated from the declared nutrient, drainage, and residue method.

- 选定流： Nitrous oxide emission to ambient air
- Flow property / unit: Mass / kg N2O
- 数量规则： Use one declared IPCC-compatible or jurisdictional method and retain the N input, drainage, and residue basis.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_emission_records`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Nitrous-oxide screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 20
  - 单位： kg N2O per 1,000 kg accepted output
  - 基准： declared managed-soil or substrate method
  - 基准类型： N input (`n_input`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Nitrate to water (`nitrate_water_emission`)

Nitrate released through drainage, runoff, or leaching is reported when receiving-medium evidence or a declared method supports the exchange.

- 选定流： Nitrate emission to water
- Flow property / unit: Mass / kg nitrate or kg N
- 数量规则： Record or calculate nitrate loss from documented N inputs, drainage, runoff, and receiving medium using one declared method.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_emission_records`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Nitrate-loss screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： kg N per 1,000 kg accepted output
  - 基准： declared drainage or leaching method
  - 基准类型： N input (`n_input`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Phosphate to water (`phosphate_water_emission`)

Phosphate released through runoff or drainage is reported when the method and receiving medium are documented.

- 选定流： Phosphate emission to water
- Flow property / unit: Mass / kg phosphate or kg P
- 数量规则： Record or calculate phosphate loss from documented P inputs, soil or substrate conditions, runoff, and drainage using one declared method.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_emission_records`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Phosphate-loss screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 20
  - 单位： kg P per 1,000 kg accepted output
  - 基准： declared runoff or drainage method
  - 基准类型： N input (`n_input`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Methane to air (`methane_air_emission`)

Methane is recorded only when residue storage, anaerobic treatment, or another documented pre-gate activity can produce a release.

- 选定流： Methane emission to ambient air
- Flow property / unit: Mass / kg CH4
- 数量规则： Apply a declared method only to documented anaerobic residue or treatment conditions; use a justified zero or documented exclusion otherwise.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Route-specific (`route_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_emission_records`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Methane-emission screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 20
  - 单位： kg CH4 per 1,000 kg accepted output
  - 基准： documented anaerobic residue or treatment route
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

### Process: 青豌豆 harvest and gate preparation (`harvest_and_gate_preparation`)

This process includes picking, optional shelling, sorting, grading, washing, cooling, and primary packing only when the operation occurs before the declared gate. For podded peas, pod mass remains part of the product. For shelled peas, pod and shell mass must be recorded as separate output or residue streams.

#### 输入

##### 产品流

###### Washing and conditioning water (`conditioning_water`)

Water used for washing, hydrocooling, or another included conditioning operation crosses the boundary at the conditioning line.

- 选定流： Process water for washing or conditioning
- Flow property / unit: Volume / m3
- Binding: `parameterized`
- 流集： `flow-set.water-use`
- 流集版本： `0.2.0`
- 流集分组： `process-water`
- 数量规则： Record water in, reuse, discharge, and wash solids by lot or operating shift; distinguish process water from source withdrawal.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_washing_records`
- 来源： `ucdavis-edible-pod-peas-postharvest`
- 数量范围： Conditioning-water screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： m3 per 1,000 kg accepted output
  - 基准： included washing or conditioning line throughput
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Conditioning and cooling electricity (`conditioning_electricity`)

Electricity for sorting, shelling, washing, cooling, cold holding, or packing is recorded when the operation is before the declared gate.

- 选定流： Electricity supplied to conditioning and packing
- Flow property / unit: Energy / kWh
- Binding: `parameterized`
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `electricity-supply`
- 数量规则： Allocate sub-metered or documented electricity to the included pea lot by throughput, operating time, or another declared physical basis.
- 数值来源模式： Foreground record (`foreground_record`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_gate_energy_records`
- 来源： `ucdavis-edible-pod-peas-postharvest`
- 数量范围： Conditioning-electricity screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kWh per 1,000 kg accepted output
  - 基准： included sorting, shelling, washing, cooling, and packing operations
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Primary crates, pallets, or containers (`primary_crate_packaging`)

Reusable crates, pallets, and other rigid transport or presentation containers are recorded when supplied or consumed before the declared gate.

- 选定流： Pallet and crate packaging function
- Flow property / unit: Mass or item / kg or item
- Binding: `parameterized`
- 流集： `flow-set.packaging-function`
- 流集版本： `0.2.0`
- 流集分组： `pallet-and-crate-packaging`
- 数量规则： Record container material, tare, capacity, count, reuse cycles, return, and loss; allocate the documented burden to the pea lot.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_packaging_records`
- 来源： `iso-14044-2006`
- 数量范围： Primary crate and pallet screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 150
  - 单位： kg allocated packaging per 1,000 kg accepted output
  - 基准： declared package tare, capacity, and reuse cycles
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Primary carton or box packaging (`primary_carton_packaging`)

Cartons and boxes are recorded when used for the fresh pea lot before the declared gate.

- 选定流： Carton and box packaging function
- Flow property / unit: Mass or item / kg or item
- Binding: `parameterized`
- 流集： `flow-set.packaging-function`
- 流集版本： `0.2.0`
- 流集分组： `carton-and-box-packaging`
- 数量规则： Record material, package mass, capacity, count, and reuse or recycling state, then allocate to the pea lot by declared capacity or mass basis.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_packaging_records`
- 来源： `iso-14044-2006`
- 数量范围： Primary carton screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 150
  - 单位： kg packaging per 1,000 kg accepted output
  - 基准： declared carton or box mass and throughput
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Flexible primary packaging (`primary_flexible_packaging`)

Films, bags, liners, or other flexible primary packaging are recorded only when used before the declared gate.

- 选定流： Flexible packaging function
- Flow property / unit: Mass or item / kg or item
- Binding: `parameterized`
- 流集： `flow-set.packaging-function`
- 流集版本： `0.2.0`
- 流集分组： `flexible-packaging`
- 数量规则： Record film or bag material, mass, count, lot assignment, and recycling or loss state.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_packaging_records`
- 来源： `iso-14044-2006`
- 数量范围： Flexible-packaging screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 80
  - 单位： kg packaging per 1,000 kg accepted output
  - 基准： declared film or bag mass and throughput
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### Shelled pods, downgraded peas, and sorting rejects (`downgraded_and_shell_residue`)

Pod shells from an included shelling operation, downgraded pods or seeds, and sorting rejects are kept separate from accepted fresh product and assigned a documented fate.

- 选定流： 青豌豆 pod shells, downgraded produce, and sorting residues
- Flow property / unit: Mass / kg wet or dry matter
- 数量规则： Reconcile pod or seed input, accepted output, downgraded output, shell residue, foreign material, and process loss for each lot.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_harvest_grading_records`
- 来源： `unece-ffv-27-peas-2025`; `mass-balance-identity`
- 数量范围： Downgrade and shell-residue screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 2,000
  - 单位： kg wet residue per 1,000 kg accepted output
  - 基准： declared podded or shelled product form and lot-level mass reconciliation
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### Wash solids and wastewater (`wash_solids_and_wastewater`)

Wash solids, soil, damaged produce, and wastewater are recorded when washing or conditioning occurs before the declared gate.

- 选定流： Wash solids and wastewater from green pea conditioning
- Flow property / unit: Mass or volume / kg or m3
- 数量规则： Reconcile water in, reuse, discharge, wash solids, accepted product, rejects, and measured process loss by lot or shift.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_washing_records`
- 来源： `mass-balance-identity`
- 数量范围： Wash-residue screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1,000
  - 单位： kg solids or L wastewater per 1,000 kg accepted output
  - 基准： included conditioning line and lot-level mass or water balance
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

###### Marketable fresh 青豌豆 before optional transport (`marketable_green_pea_dispatch`)

Accepted podded or shelled 青豌豆 leave the conditioning process at the declared pre-transport hand-off. The product form, accepted mass, and gate state are retained for any optional transport process.

- 选定流： Marketable fresh 青豌豆 at pre-transport hand-off
- Flow property / unit: Mass / kg
- 数量规则： Sum net accepted mass after grading and any included shelling, washing, or cooling, excluding packaging tare.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Site-specific (`site_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_harvest_grading_records`
- 来源： `unece-ffv-27-peas-2025`; `mass-balance-identity`

##### 废物流

##### 基本流

### Process: Purchased transport to declared gate (`purchased_transport_to_gate`)

This conditional process is included only when purchased transport crosses the foreground boundary between the production or conditioning hand-off and the declared gate. If the 农场门 is the production-unit boundary, omit this process and use the harvest output as the declared reference flow.

#### 输入

##### 产品流

###### Road freight service to declared gate (`road_transport_to_gate`)

Purchased road freight is recorded for product, packaging, or included materials transported before the declared gate.

- 选定流： Road freight transport service
- Flow property / unit: Transport service / tkm
- Binding: `parameterized`
- 流集： `flow-set.transport-service`
- 流集版本： `0.2.0`
- 流集分组： `road-freight-transport`
- 数量规则： Calculate loaded mass in tonnes multiplied by verified route distance in kilometres, and disclose return or backhaul assumptions.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Route-specific (`route_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Transport service (`transport_service`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_transport_records`
- 来源： `mass-balance-identity`
- 数量范围： Road-transport screening interval
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1,000
  - 单位： tkm per 1,000 kg accepted output
  - 基准： loaded mass and verified pre-gate route distance
  - 基准类型： Transport service (`transport_service`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### Fresh 青豌豆 at declared gate (`green_peas_at_declared_gate`)

The transport process delivers the declared reference product when purchased transport is included before the gate. Do not count this output a second time when the harvest process already ends at the declared gate.

- 选定流： Fresh 青豌豆, production mix, at declared gate, fresh and unprocessed
- Flow property / unit: Mass / kg
- 数量规则： Carry forward the net accepted mass from the pre-transport hand-off after documenting transport loss or rejected loads, if any.
- 数值来源模式： Calculated value (`calculated_value`)
- 具体性： Route-specific (`route_specific`)
- 归一化基准： per 1,000 kg accepted fresh green pea output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_transport_records`
- 来源： `mass-balance-identity`

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_accepted_and_downgraded` | accepted peas, downgraded peas, shell residue, and rejects | Allocate shared crop-cycle inputs first to declared accepted green pea output using measured mass reconciliation. Report downgraded or rejected produce and shell residue separately; apply a co-product allocation only when a documented productive recipient exists. | `iso-14044-2006`; `unece-ffv-27-peas-2025` |
| `allocation_podded_and_shelled_forms` | podded and shelled green pea products | Keep podded and shelled forms separate when shelling changes the product boundary or output basis. If shared operations are aggregated, allocate them by measured mass or another declared physical relationship and retain form-specific evidence. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_multiple_cycles_or_types` | multiple plantings, cultivars, or harvest campaigns | Keep cycles and types separate when input regimes, route, grade, or gate differ. If aggregated, allocate shared operations by measured accepted mass or another declared physical basis. | `iso-14044-2006` |
| `allocation_reusable_packaging` | reusable crates, pallets, and containers | Allocate packaging burdens over documented reuse cycles and declared capacity or mass basis. Include return and loss records when attributable to the declared gate. | `iso-14044-2006` |
| `allocation_residue_use` | crop residue, shell residue, wash solids, and wastewater solids | Keep residue treatment and productive use separate from accepted product. Assign a credit only when recipient, intended use, substitution claim, and allocation method are documented. | `iso-14044-2006` |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | seed, planting water, land occupation, planting losses | supplier lot, planting log, field or compartment register | lot id; seed form; treatment; mass or viable count; type; planting date; area; 作物周期; unused and failed material | reconcile supplier records to planting-unit logs and retain lot documents | kg, count, m3, ha | each lot and planting event | complete establishment period | each field or protected unit | aggregate by planting campaign and production unit | supplier invoice; planting log; lot traceability |
| `cp_irrigation_records` | `crop_establishment` or `crop_management` | irrigation, fertigation water, source withdrawal, drainage | meter record, water balance, irrigation log | source; meter reading; delivered volume; rainfall; recirculation; drainage; discharge; area; date | read meters or reconstruct a documented water balance and reconcile source and delivered volumes | m3, mm, ha | each event or daily total | full 作物周期 | each irrigation zone and production unit | sum by 作物周期 and retain source and receiving-medium split | meter calibration; water-balance closure; operator log |
| `cp_nutrient_records` | `crop_management` | nutrient products and nutrient losses | invoice, product label, nutrient plan, application log | product; formulation; mass; moisture; nutrient concentration; date; area; application method; soil or drainage condition | reconcile purchase, storage, and application records; calculate nutrient equivalents | kg product, kg N, kg P2O5, kg K2O | each application | full 作物周期 | each production unit and nutrient zone | aggregate by product, nutrient, and 作物周期 | label or supplier specification; nutrient-plan review |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | application log and supplier record | product; active ingredient; concentration; mass or volume; date; treated area; purpose | reconcile application logs with supplier records and crop-protection plan | kg, L, ha | each application | full 作物周期 | each field or crop zone | aggregate by product and active ingredient per 作物周期 | operator record; product label; application authorization |
| `cp_energy_records` | `crop_management` | mobile fuel, stationary fuel, production electricity | fuel log, meter, invoice, equipment log | carrier; quantity; meter; operation; equipment; production unit; date; allocation basis | read meters or reconcile delivery and equipment records to included operations | L, kg, kWh, MJ | each delivery, meter period, or operation | full 作物周期 | each production unit and included service | sum by carrier, operation, and 作物周期 | meter record; invoice; conversion record |
| `cp_residue_fate_records` | `crop_management` | vines, roots, unharvested pods, and crop residues | residue log, contractor ticket, treatment record | residue type; wet mass; moisture; date; fate; recipient; transport; treatment | weigh or calculate residue and retain fate evidence | kg, percent, km | each removal or treatment event | crop termination and residue period | each production unit | aggregate by fate and 作物周期 | weighbridge or contractor record; recipient declaration |
| `cp_harvest_grading_records` | `harvest_and_gate_preparation` | accepted, downgraded, rejected, pod shell, and dispatch output | harvest ticket, scale record, grading record | date; lot; harvest round; product form; gross mass; accepted mass; grade; shell mass; rejected mass; tare; gate state | use calibrated scale and lot-level grading and shelling reconciliation | kg, percent | each harvest lot or operating shift | full harvest campaign | each field, line, and product form | sum harvest rounds and reconcile gross, accepted, rejects, shells, and tare | scale check; grading record; lot traceability |
| `cp_washing_records` | `harvest_and_gate_preparation` | washing water, wash solids, wastewater, and conditioning rejects | water meter, wash log, waste ticket, drain record | lot; water in; reuse; discharge; solids; rejected produce; date; line; treatment route | reconcile input water, reused water, discharged wastewater, solids, and product output | m3, kg | each lot or shift | all included pre-gate conditioning | each conditioning line | aggregate by lot and gate period | meter record; waste ticket; water or mass-balance check |
| `cp_gate_energy_records` | `harvest_and_gate_preparation` | sorting, shelling, washing, cooling, and packing electricity | sub-meter, invoice, equipment log | line; operation; kWh; date; lot throughput; allocation basis | allocate metered energy to included pea throughput and retain line records | kWh, kg | each shift or meter period | all included pre-gate operations | each conditioning line | sum by operation and pea lot | sub-meter or invoice; throughput record |
| `cp_packaging_records` | `harvest_and_gate_preparation` | crates, pallets, cartons, boxes, films, and bags | packaging specification, issue log, return log | package type; material; tare; capacity; count; reuse cycles; return; loss; lot | reconcile issue and return records to lot throughput and reuse basis | kg, item, cycle | each issue and return event | full included gate period | each pack-house and route | allocate by capacity or documented mass basis | supplier specification; issue and return log |
| `cp_transport_records` | `purchased_transport_to_gate` | purchased road freight | transport order, bill, route record | material; loaded mass; origin; destination; distance; vehicle or service; return assumption; date | calculate tonne-kilometres from verified route and loaded mass | tkm, kg, km | each shipment | all included pre-gate shipments | each route and declared gate | aggregate by material and pea lot | bill of lading; route record; mass record |
| `cp_emission_records` | `crop_management` | ammonia, nitrous oxide, nitrate, phosphate, and methane | nutrient plan, drainage record, residue log, emission worksheet | N and P inputs; factor or method; soil or substrate; drainage; residue fate; receiving medium; date | calculate using one declared method and retain source fields and method version | kg nutrient; kg emission | each 作物周期 or method period | full 作物周期 and residue period | each production unit | aggregate by receiving medium and 作物周期 | method worksheet; input reconciliation; receiving-medium evidence |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_accepted_green_pea_output` | accepted product reference flow | Sum net accepted podded or shelled green pea mass by harvest lot after grading and any included shelling, washing, or cooling, excluding package tare. | harvest tickets; scale records; grade records; shelling records; tare | kg accepted fresh 青豌豆 | `unece-ffv-27-peas-2025` |
| `calc_mass_reconciliation` | harvest and gate preparation | Gross harvested or received mass = accepted product + downgraded or rejected produce + pod shells where applicable + trim and foreign material + measured process loss; investigate unexplained residual. | gross mass; accepted mass; rejects; shell residue; trim; loss; moisture basis | reconciled product and residue mass balance | `mass-balance-identity` |
| `calc_product_form_conversion` | podded and shelled product | Shelled edible output = podded input − shell residue − rejected or lost mass, after declaring the moisture and measurement basis. | pod input; shell mass; accepted seed; rejects; loss | accepted shelled green pea mass and shell residue | `mass-balance-identity` |
| `calc_nutrient_equivalents` | nutrient products | Nutrient mass = formulated product mass × documented nutrient concentration; retain product and nutrient bases separately. | product mass; label or supplier concentration; application date | kg N, kg P2O5, and kg K2O | `ipcc-2019-managed-soils` |
| `calc_water_balance` | irrigation, source withdrawal, washing, and drainage | Source withdrawal = delivered water + storage change + discharge or drainage − identified recirculated return, with units and period reconciled. | meter readings; delivery; rainfall; recirculation; drainage; storage change | m3 source withdrawal and delivered water | `fao-crop-evapotranspiration-56` |
| `calc_crop_cycle_normalization` | all crop-cycle amounts | Normalized amount = recorded or calculated amount ÷ accepted green pea output × 1,000 kg. Preserve production-unit, crop-cycle, and product-form denominators. | recorded amount; accepted output | amount per 1,000 kg accepted 青豌豆 | `mass-balance-identity` |
| `calc_nutrient_emissions` | direct and indirect nutrient emissions | Apply one declared method to documented nutrient inputs, soil or substrate conditions, drainage or runoff, and residue fate; do not sum overlapping factors. | nutrient inputs; method factors; drainage; runoff; residue fate | emissions by substance and receiving medium | `ipcc-2019-managed-soils` |
| `calc_reusable_packaging` | reusable crates and pallets | Allocated packaging burden = item burden ÷ documented reuse cycles × pea-lot share by capacity or declared mass basis. | item mass; reuse cycles; lot capacity or mass; return and loss records | kg packaging allocated to pea lot | `iso-14044-2006` |
| `calc_transport_service` | purchased road freight | Transport service = loaded mass in tonnes × verified route distance in kilometres; report return or backhaul assumption separately. | shipment mass; route distance; service record | tonne-kilometres | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_qualifiers` | reference flow and product lots | Declare pea form, type, cultivar group, route, geography, gate, maturity, tenderness, grade, and packaging state; retain 证据缺口 platform identity for later foreground resolution. | lot metadata; product specification; gate record |
| `quality_mass_closure` | harvest, shelling, rejects, residues, washing, and wastewater | Close the product and process mass balance for each represented 作物周期 or document the unexplained difference and its effect on normalized values. | calibrated scale; mass-balance worksheet; waste ticket |
| `quality_temporal_coverage` | crop-cycle inputs and outputs | Cover the full planting-to-gate 作物周期 and every harvest round; identify missing periods, substitutions, and averaging windows. | planting log; harvest log; meter periods |
| `quality_route_disclosure` | 露地 and protected production | Identify route, occupied area, infrastructure attribution, recirculation, heating or lighting, substrate, drainage, and crop-termination treatment whenever included. | production-unit record; equipment log; route declaration |
| `quality_nutrient_traceability` | nutrient inputs and nutrient emissions | Link each nutrient value to a product record, concentration, application log, and declared emission method; distinguish product mass from nutrient mass. | invoice; label; nutrient plan; calculation worksheet |
| `quality_water_traceability` | irrigation, withdrawal, washing, and drainage | Identify source, meter or water-balance method, delivered volume, recirculation, drainage, discharge, and receiving medium. | meter record; water-balance closure; discharge record |
| `quality_product_form_and_grade` | podded and shelled output | Record product form, maturity, tenderness, colour, size or grade, accepted mass, shell residue where applicable, and defect tolerance for every lot. | harvest ticket; grade record; product specification |
| `quality_reject_and_residue_fate` | downgraded produce, shell residue, crop residue, wash solids, and wastewater | Record measured amount, moisture basis where relevant, destination, treatment, transport, and recipient evidence for every non-product stream. | waste ticket; contractor record; recipient declaration |
| `quality_energy_and_transport` | fuel, electricity, and purchased transport | Retain carrier or service type, quantity, operation, route, date, meter or shipment evidence, and allocation basis. | invoice; meter record; bill of lading; route record |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_mass` | reference flow and accepted output | Require 1,000 kg net accepted fresh 青豌豆 as the normalized reference amount and preserve the declared podded or shelled product form and gate state. | `unece-ffv-27-peas-2025` |
| `validation_mass_reconciliation` | harvest, shelling, and gate-preparation inventory | Check that accepted output, downgraded or rejected produce, pod shells where applicable, residues, trim, wastewater solids, and process losses reconcile with gross harvested or received mass within documented measurement tolerance. | `mass-balance-identity` |
| `validation_crop_cycle_completeness` | crop establishment and crop management | Reject a dataset that omits a represented planting campaign, harvest round, or route-specific input without a justified zero or documented exclusion. | `unece-ffv-27-peas-2025` |
| `validation_product_form` | podded and shelled products | Check that product form, shelling boundary, accepted output, shell residue, moisture basis, and product qualifiers are consistent throughout the process inventory and dataset metadata. | `mass-balance-identity`; `unece-ffv-27-peas-2025` |
| `validation_nutrient_basis` | nutrient products and nutrient emissions | Check product mass, nutrient concentration, nutrient amount, application timing, and declared emission method before accepting nitrogen, ammonia, nitrate, or phosphate values. | `ipcc-2019-managed-soils` |
| `validation_water_balance` | irrigation, source withdrawal, washing, and drainage | Check units, source, meter or balance period, delivered water, recirculation, discharge, and receiving medium; investigate negative or unexplained balances. | `fao-crop-evapotranspiration-56` |
| `validation_gate_state` | reference product and boundary | Check that shelling, grading, washing, cooling, packaging, and transport are included only when before the declared gate and disclosed in metadata. | `unece-ffv-27-peas-2025`; `ucdavis-edible-pod-peas-postharvest` |
| `validation_range_screen` | important inventory rows | Compare site values with the row range or documented evidence. Values outside a range require an explanation, revised evidence, or an explicit scenario declaration. | `unece-ffv-27-peas-2025`; `fao-crop-evapotranspiration-56` |
| `validation_residue_fate` | rejects, shell residue, crop residue, wash solids, and wastewater | Require a fate and destination for each non-product stream; do not apply a credit without documented productive use, recipient, and allocation treatment. | `iso-14044-2006` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | Foreground fresh green pea production dataset that may be published as a `secondary_dataset` and used as a documented agricultural production input |
| downstream_use | Downstream process and lifecyclemodel construction for 新鲜整果 青豌豆 at the same declared gate and compatible route, geography, period, product form, and quality qualifiers |
| allowed_use | Comparative or attributional LCA when crop-cycle completeness, gate state, product-form conversion, mass reconciliation, nutrient basis, water balance, and residue fate are disclosed |
| excluded_use | Dry, frozen, canned, dried, cooked, retail, consumer, or materially different pea routes without an explicit transformation, preservation, storage, or reallocation model |
| required_metadata | canonical PCR id; reference amount; podded or shelled form; pea type or cultivar group; geography; production route; planting and harvest dates; gate; maturity and grade; accepted, rejected, shell, residue, and wastewater masses; irrigation source and method; nutrient basis; crop-protection program; energy and transport; packaging and reuse; platform identity resolution status |
| required_quality_disclosure | temporal coverage; site and production-unit coverage; measurement and mass-balance closure; product form and route; water and nutrient evidence; residue fate; missing data; ranges used; allocation; uncertainty fields |
| update_trigger | new product form or route, material changes in irrigation or fertigation, heating or lighting, crop-protection regime, shelling or grading boundary, packaging system, residue fate, source method, or verified product and flow identities |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unece-ffv-27-peas-2025` | standard | UNECE, Standard FFV-27 concerning the marketing and commercial quality control of peas, 2025, https://unece.org/trade/documents/1962/02/standards/peas; retrieved 2026-09-14 | fresh pea product form, maturity, tenderness, colour, quality, grade, and market-state qualifiers |
| `ucdavis-edible-pod-peas-postharvest` | official_guidance | UC Davis Postharvest Research and Extension Center, Peas: Snow and Snap Pod, https://postharvest.ucdavis.edu/ar/produce-facts-sheets/peas-snow-and-snap-pod; retrieved 2026-09-14 | harvest timing, perishability, cooling, packaging, and pre-gate conditioning considerations for fresh edible-pod peas |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO, Crop evapotranspiration: Guidelines for computing crop water requirements, Irrigation and drainage paper 56, https://www.fao.org/4/X0490E/X0490E00.htm; retrieved 2026-09-14 | irrigation measurement, crop water balance, and conversion from crop water requirement to recorded deliveries |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html; retrieved 2026-09-14 | managed-soil nitrogen emission pathways and calculation-method selection |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html; retrieved 2026-09-14 | allocation, co-product, attribution, packaging reuse, and data-quality principles |
| `mass-balance-identity` | method_factor | PCR mass-balance reconciliation method: gross harvested or received mass equals accepted product plus separately recorded downgraded, residue, treatment, and unexplained loss streams | product-form conversion, normalization, transport, and validation mass closure |
