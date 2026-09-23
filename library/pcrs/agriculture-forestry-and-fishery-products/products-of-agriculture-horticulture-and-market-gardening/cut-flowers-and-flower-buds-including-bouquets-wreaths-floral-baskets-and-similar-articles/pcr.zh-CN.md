---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cut-flowers-and-flower-buds-including-bouquets-wreaths-floral-baskets-and-similar-articles
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 切花和花蕾，包括花束、花环、花篮和类似制品

## 1. 范围与适用性

本 PCR 覆盖生产者或组装交付口的鲜切花、花蕾及其组装花艺制品。每个数据集必须声明一种物种/品种组成和一种呈现形式：散装花茎/花蕾、花束、花环、花篮或另一种明确制品。散装材料与组装制品不得合并为同一物理参考物。

路线包括受控栽培、切割、补水调理、分级、冷却、展示，以及声明时的组装。必须声明露地或设施栽培、作物周期、采收成熟度、等级、补水和温度状态、保鲜处理、配件及包装。排除带根活植物、种植材料、人造花、下游零售展示及消费者使用。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cut-flowers-and-flower-buds-including-bouquets-wreaths-floral-baskets-and-similar-articles |
| classification_refs | CPC 3.0: 01962 |
| covered_products | 鲜切花/花蕾，以散装花茎或一种已声明的花束、花环、花篮或类似制品交付 |
| excluded_products | 带根活植物；种植材料；人造花；未声明混合呈现；零售展示；消费者使用 |
| representative_product | 生产者或组装交付口的一种已声明组成、等级和呈现形式的鲜花产品 |
| production_route | 露地或设施栽培、切割、调理、分级、冷却和呈现；组装为条件过程 |
| market_state | 新鲜且可销售；声明散装/组装形式、补水、温度、处理、配件和包装 |

露地与设施路线、散装与组装形式以及实质不同的保鲜技术必须保持独立分层，除非权重可复现。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一种已声明的鲜切花或花蕾产品，采用一种散装或组装呈现形式 |
| How much | 1 kg 净鲜花产品；可附加计数，但须用实测批次质量换算 |
| How well | 满足已声明组成、等级、成熟度、新鲜度、损伤、茎长和呈现标准 |
| How long or cycle | 一个已声明作物周期及采收/组装批次直至交付 |
| reference_flow_link | 未解析；唯一精确类别结果为过窄的染色花工厂路线 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 鲜切花/花蕾或已声明花艺制品（UUID 未解析） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | species/cultivar composition; presentation; field/protected route; maturity; grade; stem length; net floral mass; hydration; temperature; treatment; accessories; packaging; gate; geography; lot; period |

The dyed-flower UUID `487c493e-53fd-46a5-ae32-51c3ecc2bb7e` shall not substitute for this generic reference.

## 4. 测量和单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net fresh floral material at the declared hand-off and time. |
| `count_conversion` | count records | Mass and count | kg and count | Convert with representative measured lot mass and retain sampling evidence. |
| `article_reconciliation` | assembled articles | Mass | kg | Reconcile floral material, accessories, water/media and packaging separately. |
| `hydration_temperature_basis` | all presentations | Mass and temperature | kg and deg C | Declare hydration, drainage and temperature at weighing. |
| `accepted_yield` | process nodes | Mass | kg | Reconcile accepted, downgrade, rework, returns, residues and measured mass change. |

## 5. 系统边界

边界从承担上游负荷的繁殖材料和栽培投入开始，包括受控栽培、采收、补水/调理、分级、冷却、可选组装、包装和交付。共享基础设施按寿命和使用量归属。排除交付后的配送、零售展示和消费者养护。

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | Species/cultivar-specific propagation material entering a declared field or protected system |
| starting_condition_role | Burden-carrying biological input; retained mother stock receives period attribution |
| product_classification_scope | One CPC 01962 presentation and declared species/cultivar composition per dataset |
| recursive_input_rule | Purchased same-category cut material used in an article requires a compatible upstream dataset |
| upstream_dataset_requirement | Compatible composition, presentation, route, geography, quality, gate and verified final identity |
| disclosure | System, crop cycle, lot, composition, presentation, hydration, temperature, treatment, grade, accessories, packaging, rejects, rework and hand-off |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_single_presentation` | all datasets | Model one loose or assembled presentation and prohibit incompatible mixed physical references. | `fao-postharvest-cut-flowers` |
| `boundary_cultivation` | `managed_cultivation` | Include propagation, water, nutrients, crop protection, energy and attributable shared infrastructure. | `fao-postharvest-cut-flowers` |
| `boundary_conditioning` | `harvest_conditioning` | Include cutting, rapid hydration, preservative treatment and conditioning actually performed. | `ncsu-cut-flower-postharvest` |
| `boundary_cold_chain` | `grading_cooling` | Include grading, cooling and controlled holding through hand-off; disclose time and temperature. | `fao-postharvest-cut-flowers` |
| `boundary_assembly` | `article_assembly` | Include every floral component, accessory, joining input and assembly loss for article routes. | `mass-balance-identity` |
| `boundary_packaging` | `presentation_handoff` | Include packaging crossing hand-off and exclude later distribution. | `ncsu-cut-flower-postharvest` |
| `boundary_route_separation` | alternative routes | Keep cultivation, preservation and presentation routes separate until weighting is reproducible. | `fao-postharvest-cut-flowers` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `managed_cultivation` | Managed flower cultivation | `required` | Always; field or protected route declared | Managed biological production | kg harvested floral material |
| `harvest_conditioning` | Cutting, hydration and conditioning | `required` | Always; preservative may be zero | Harvest and conditioning | kg conditioned material |
| `grading_cooling` | Grading, sorting and cooling | `required` | Always; active cooling may be zero with evidence | Grading and preservation | kg accepted material |
| `article_assembly` | Floral-article assembly | `conditional` | Only for assembled presentation | Assembly and formulation | kg assembled article |
| `presentation_handoff` | Packaging and hand-off | `required` | Always | Presentation and reference output | 1 kg reference product |

### 过程：花卉受控栽培 (`managed_cultivation`)

#### 输入

##### 产品流

###### 繁殖材料 (`propagation_material`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Declared species/form propagation stock; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： Measure purchased and burden-attributed retained stock by crop cycle.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per kg harvested material
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_cultivation`
- 数量范围： Provisional stock screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 5
  - 单位： kg/kg harvested material
  - 基准： stock attributed per kg harvested output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 灌溉水 (`cultivation_water`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Irrigation water selected from foreground source
- 流属性/单位： Volume / m3
- 绑定： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set 版本： `0.2.0`
- Flow Set 组： `irrigation-water`
- 数量规则： Meter delivery or calculate from verified delivery rate and time; disclose rainfall separately.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per kg harvested material
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_cultivation`
- 数量范围： Provisional irrigation screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 100
  - 单位： m3/kg harvested material
  - 基准： delivered water per kg harvested output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 合并肥料和养分供应 (`cultivation_nutrients`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Actual mineral, organic and other nutrient products
- 流属性/单位： Mass / kg or compatible nutrient property/unit
- 绑定： `parameterized`
- Flow Set： `flow-set.agricultural-nutrient-supply`
- Flow Set 版本： `0.3.0`
- 数量规则： Record every nutrient product in this single process card and retain composition; no group is permitted.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per kg harvested material
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_cultivation`
- 数量范围： Provisional nutrient-product screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 10
  - 单位： kg/kg harvested material
  - 基准： nutrient products per kg harvested output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 植保产品 (`crop_protection`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Actual formulations; UUIDs unresolved until identities are known
- 流属性/单位： Mass / kg
- 数量规则： Measure formulation, concentration, application and treated area; zero when absent.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per kg harvested material
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_cultivation`
- 数量范围： Provisional protection-product screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 2
  - 单位： kg/kg harvested material
  - 基准： formulated product per kg harvested output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 栽培能源 (`cultivation_energy`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Carrier-specific fuel, electricity or heat from records
- 流属性/单位： Energy / MJ
- 绑定： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： Attribute pumping, machinery, lighting, heating, ventilation and cooling by cycle and area-time.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Technology-specific (`technology_specific`)
- 归一化基准： per kg harvested material
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_energy`
- 数量范围： Provisional cultivation-energy screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 5000
  - 单位： MJ/kg harvested material
  - 基准： energy per kg harvested output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

###### 已采收花朵与花蕾 (`harvested_output`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Internal species/cultivar-specific harvested floral material
- 流属性/单位： Mass / kg
- 数量规则： Weigh salable and later-rejected harvested material at cutting.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per kg reference product
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_cultivation`
- 数量范围： Harvest-output reconciliation
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 10
  - 单位： kg/kg reference product
  - 基准： harvested mass before later rejects per kg accepted product
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 作物残余和废品 (`cultivation_residues`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Material- and destination-specific residue; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： Measure prunings, spent plants and rejects by destination; exclude retained/reworked material.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per kg harvested material
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_waste`
- 数量范围： Provisional residue screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 20
  - 单位： kg/kg harvested material
  - 基准： residue leaving cultivation per kg output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### 直接排放 (`cultivation_emissions`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Substance- and compartment-specific elementary flows; UUIDs unresolved
- 流属性/单位： Mass / kg
- 数量规则： Calculate from collected activity and a declared factor method; do not aggregate identities.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per kg harvested material
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 数量范围： Provisional emission screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 20
  - 单位： kg/kg harvested material
  - 基准： screening sum only; final exchanges remain specific
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

### 过程：切割、补水与调理 (`harvest_conditioning`)

#### 输入

##### 产品流

###### 已采收花材投入 (`harvested_input`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Internal harvested floral material
- 流属性/单位： Mass / kg
- 数量规则： Measure lot transfer.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per kg conditioned output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`
- 数量范围： Input reconciliation
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 5
  - 单位： kg/kg conditioned output
  - 基准： input per kg conditioned output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 调理用水 (`conditioning_water`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Process water selected from foreground source
- 流属性/单位： Volume / m3
- 绑定： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set 版本： `0.2.0`
- Flow Set 组： `process-water`
- 数量规则： Meter hydration, washing and solution make-up water; record recirculation and discharge.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per kg conditioned output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`
- 数量范围： Provisional water screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 1
  - 单位： m3/kg conditioned output
  - 基准： supplied water per kg output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 保鲜剂成分 (`conditioning_ingredients`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Actual sugar, acidifier, biocide or preservative ingredients; UUIDs unresolved until formulation is known
- 流属性/单位： Mass / kg
- 数量规则： Measure each ingredient and concentration; zero when only water is used.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per kg conditioned output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`
- 数量范围： Provisional preservative screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 0.2
  - 单位： kg/kg conditioned output
  - 基准： ingredients per kg output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

###### 已调理花材 (`conditioned_output`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Internal conditioned floral material
- 流属性/单位： Mass / kg
- 数量规则： Measure after declared drainage and hydration stabilization.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per kg conditioned output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`
- 数量范围： Output equality
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg conditioned output
  - 基准： quantitative reference output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `mass-balance-identity`

##### 废物流

###### 调理废水和修剪废料 (`conditioning_waste`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Wastewater and biological trim by destination; UUIDs unresolved
- 流属性/单位： Mass / kg
- 数量规则： Measure discharge and trim separately; exclude recirculation and rework.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per kg conditioned output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_waste`
- 数量范围： Provisional conditioning-waste screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 5
  - 单位： kg/kg conditioned output
  - 基准： discharged solution and trim per kg output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

### 过程：分级、分选与冷却 (`grading_cooling`)

#### 输入

##### 产品流

###### 已调理投入 (`conditioned_input`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Internal conditioned floral material
- 流属性/单位： Mass / kg
- 数量规则： Measure lot input and retain grade and temperature state.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per kg accepted output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_grading`
- 数量范围： Input reconciliation
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 3
  - 单位： kg/kg accepted output
  - 基准： input per kg accepted output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 冷却能源 (`cooling_energy`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Electricity or other energy from records
- 流属性/单位： Energy / MJ
- 绑定： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： Attribute precooling, cold-room and grading energy by meter, run or justified area-time share.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Technology-specific (`technology_specific`)
- 归一化基准： per kg accepted output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_energy`
- 数量范围： Provisional cooling-energy screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 500
  - 单位： MJ/kg accepted output
  - 基准： energy per kg accepted output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

###### 合格分级花材 (`graded_output`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Internal accepted grade
- 流属性/单位： Mass / kg
- 数量规则： Measure each accepted grade and destination; keep downgrade streams distinct.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per kg accepted output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_grading`
- 数量范围： Output equality
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg accepted output
  - 基准： quantitative reference output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `mass-balance-identity`

##### 废物流

###### 降级品与废品 (`grading_rejects`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Destination-specific downgrade or biological waste; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： Measure downgrade, rework, return and discard separately.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per kg accepted output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_waste`
- 数量范围： Provisional grade-loss screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 2
  - 单位： kg/kg accepted output
  - 基准： downgrade and discard per kg accepted output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

### 过程：花艺制品组装 (`article_assembly`)

#### 输入

##### 产品流

###### 花材组分 (`floral_components`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Internal or purchased species-specific floral components; purchased components require upstream datasets
- 流属性/单位： Mass / kg
- 数量规则： Measure each component by species/cultivar, source lot and accepted mass.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per kg assembled floral output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_assembly`
- 数量范围： Floral-content screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 3
  - 单位： kg/kg net floral output
  - 基准： incoming floral mass per kg accepted net floral output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 配件和连接材料 (`assembly_accessories`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Actual ribbon, wire, frame, basket, foam or holder; UUIDs unresolved until materials are known
- 流属性/单位： Mass / kg
- 数量规则： Measure each material, reuse status and hand-off inclusion.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per kg assembled floral output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_assembly`
- 数量范围： Provisional accessory screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 5
  - 单位： kg/kg net floral output
  - 基准： accessories per kg net floral output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

###### 合格组装花艺制品 (`assembled_output`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Internal declared bouquet, wreath, basket or similar article
- 流属性/单位： Mass / kg
- 数量规则： Measure net floral mass and separately reconcile non-floral components.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per kg net floral output
- 基准类型： Process output (`process_output`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_assembly`
- 数量范围： Output equality
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg net floral output
  - 基准： quantitative reference output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `mass-balance-identity`

##### 废物流

###### 组装修剪废料与废品 (`assembly_rejects`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Material- and destination-specific waste; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： Record trim, rejected assemblies, rework and recovered accessories separately.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per kg accepted assembled output
- 基准类型： Process output (`process_output`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_waste`
- 数量范围： Provisional assembly-loss screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 2
  - 单位： kg/kg accepted assembled output
  - 基准： boundary-exiting trim and rejects per kg output
  - 基准类型： Process output (`process_output`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

### 过程：包装与交付 (`presentation_handoff`)

#### 输入

##### 产品流

###### 合格花卉产品 (`presentation_input`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Internal accepted loose or assembled floral product
- 流属性/单位： Mass / kg
- 数量规则： Measure net floral input and reconcile handling loss and hydration change.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per kg reference product
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_handoff`
- 数量范围： Handoff-input screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 2
  - 单位： kg/kg reference product
  - 基准： input per kg handed-off product
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 包装和展示材料 (`packaging_materials`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Actual sleeve, wrap, carton, crate, pallet or rigid container
- 流属性/单位： Mass / kg
- 绑定： `parameterized`
- Flow Set： `flow-set.packaging-function`
- Flow Set 版本： `0.2.0`
- 数量规则： Measure materials crossing hand-off; record returnable assets with reuse attribution.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per kg reference product
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_handoff`
- 数量范围： Provisional packaging screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 5
  - 单位： kg/kg reference product
  - 基准： packaging per kg handed-off product
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 外购废物处理服务 (`waste_treatment_service`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Treatment service selected for actual waste route
- 流属性/单位： Mass / kg
- 绑定： `parameterized`
- Flow Set： `flow-set.waste-treatment-service`
- Flow Set 版本： `0.2.0`
- 数量规则： Record purchased treatment only for boundary exits and prevent duplicate waste-output burdens.
- 数值来源模式： Calculated value (`calculated_value`)
- 适用范围： Route-specific (`route_specific`)
- 归一化基准： per kg reference product
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Calculated from collection (`calculated_from_collection`)
- 采集协议： `cp_waste`
- 数量范围： Provisional treatment screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 10
  - 单位： kg treated/kg reference product
  - 基准： purchased treatment per kg product
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

###### 参考花卉产品 (`reference_product`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Fresh cut flowers/buds or declared article; UUID unresolved
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： Exactly 1 kg net floral product on declared hydration, temperature and component basis.
- 数值来源模式： Fixed value (`fixed_value`)
- 适用范围： Product-specific (`product_specific`)
- 归一化基准： per 1 kg reference product
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Method formula (`method_formula`)
- 来源： `mass-balance-identity`
- 数量范围： Reference-flow equality
  - 范围角色： Allowed range (`allowed_range`)
  - 下限： 1
  - 上限： 1
  - 单位： kg
  - 基准： declared reference product
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Method formula (`method_formula`)
  - 来源： `mass-balance-identity`

##### 废物流

###### 交付废品和包装损失 (`handoff_rejects`)

此卡记录该过程节点所声明的流角色和数量。

- 选定流： Material- and destination-specific waste; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： Measure rejected flowers, damaged articles and packaging loss; separate return/rework.
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： Site-specific (`site_specific`)
- 归一化基准： per kg reference product
- 基准类型： Reference flow (`reference_flow`)
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_waste`
- 数量范围： Provisional handoff-loss screen
  - 范围角色： Default estimate (`default_estimate`)
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg reference product
  - 基准： rejects and loss per kg product
  - 基准类型： Reference flow (`reference_flow`)
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all processes | Prefer direct metering and subdivision by crop, lot, grade and presentation. | `mass-balance-identity` |
| `allocation_multi_period` | perennial stock and protected systems | Attribute establishment, mother-stock and infrastructure over documented productive periods and usable outputs. | `mass-balance-identity` |
| `allocation_shared_assets` | shared irrigation, greenhouse, cooling and assembly assets | Allocate by causal driver such as area-time, meter share, runtime or throughput. | `mass-balance-identity` |
| `allocation_grades` | saleable grades | Treat separately marketed grades as co-products; allocate only after subdivision is exhausted. | `mass-balance-identity` |
| `allocation_rework` | reject and rework loops | Return rework burdens to the accepting node and prevent double counting. | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation` | `managed_cultivation` | stock, inputs and output | farm logs, meters, invoices, scales | composition; route; area; dates; product; amount; output | reconcile cycle and harvest records | kg, m3, m2, date | each event/cycle | complete cycle | all plots/structures | sum compatible crop-route strata | invoices, calibrated meters/scales, lot links |
| `cp_energy` | all energy nodes | energy and shared assets | meters, invoices, equipment logs | carrier; quantity; meter; runtime; power; area-time; life/utilization | meter, fuel balance or verified calculation | MJ, kWh, h | batch/month | full period | all included assets | direct meter then causal allocation | calibration, invoice and asset register |
| `cp_emissions` | `managed_cultivation` | direct emissions | calculation record | activity; substance; factor; method; compartment | apply declared method to collected activity | kg | each cycle | complete cycle | all included sites | calculate by substance/compartment | factor source and worksheet |
| `cp_conditioning` | `harvest_conditioning` | input/output, water, ingredients | scales, meters, batch sheet | lot; masses; water; ingredients; concentration; time; temperature; drainage | measure each lot | kg, m3, h, deg C | 每批次 | 全部批次 | 所有调理场址 | sum compatible lots | checks and signed batch sheet |
| `cp_grading` | `grading_cooling` | grades, rejects, holding | scales and temperature logs | input; grade output; reject; time; temperature | weigh states and log temperature | kg, h, deg C | 每批次 | 全部批次 | 所有分级和冷却场址 | sum by grade/route | scale check and temperature record |
| `cp_assembly` | `article_assembly` | components, accessories, rework, output | bill and scales | identities; masses; output; trim; reject; rework | reconcile each batch | kg, count | 每批次 | 全部花艺制品批次 | 所有组装场址 | identical specifications only | controlled bill, scale checks, lot links |
| `cp_handoff` | `presentation_handoff` | product and packaging | scales, packing list, release | mass; count; packaging; water/media; temperature; grade; time | reconcile packing and release | kg, count, deg C | 每批次 | 全部交付 | 所有展示交付场址 | mass-weight within compatible strata | scale check and release approval |
| `cp_waste` | all nodes | rejects, wastewater, treatment | scales, meters, manifests, rework logs | material; amount; origin; destination; treatment; rework | reconcile node balance and destination | kg, m3 | event/month | full period | all exits and loops | sum by material/destination | manifests and trace records |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | all rows | compatible stratum total divided by accepted net floral mass | attributed quantity; reference mass | amount per kg reference product | `mass-balance-identity` |
| `calc_count_mass` | count records | measured representative lot mass divided by count | lot mass; count; sampling | kg per stem/item | `mass-balance-identity` |
| `calc_net_floral_mass` | articles | gross mass minus measured non-floral components and excluded free water | gross; accessories; packaging; water | net floral mass | `mass-balance-identity` |
| `calc_yield` | each node | input plus gain equals accepted, downgrade, rework, waste and measured change | state masses | yield and residual | `mass-balance-identity` |
| `calc_shared_service` | shared assets | measured service times causal share; shares sum to one | service total; driver | attributed service | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | reference and purchased floral components | Retain composition, presentation, lot, grade, maturity, hydration, temperature, treatment and gate. | lot labels and release records |
| `dq_temporal` | all processes | Cover one complete crop cycle and every included harvest/assembly lot; disclose extrapolation. | dated logs and coverage reconciliation |
| `dq_measurement` | mass, water, energy, temperature | Use checked instruments and state timing, net/gross and wet/drained basis. | calibration/check records and logs |
| `dq_completeness` | all inventory | Reconcile nodes, rejects/rework and quantitatively justify exclusions. | process balance and checklist |
| `dq_route` | alternative routes | Keep routes separate and document weighting before aggregation. | route inventory and production weights |
| `dq_uuid` | final exchanges | Resolve every exchange to one compatible confirmed UUID; retain Flow Set selection evidence. | identity evidence package |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Fail if composition, presentation, grade, hydration/temperature, gate or UUID-resolution state is absent. | `fao-postharvest-cut-flowers` |
| `validate_presentation_separation` | all datasets | Fail if loose and assembled forms are combined without separate inventories and reproducible weighting. | `mass-balance-identity` |
| `validate_process_topology` | process map | Require cultivation, conditioning, grading/cooling and hand-off; assembly only for article routes. | `ncsu-cut-flower-postharvest` |
| `validate_nutrient_binding` | `cultivation_nutrients` | Require exactly one set-level nutrient card in cultivation, no group and no fixed UUID. |  |
| `validate_flow_sets` | parameterized cards | Require current set/version, permitted group where required and concrete selection evidence at generation. |  |
| `validate_mass_balance` | every node | Investigate residual after hydration/moisture, rework and storage changes; do not hide it in output. | `mass-balance-identity` |
| `validate_ranges` | every flow card | Require complete range fields, lower not above upper, compatible basis and conditional application. |  |
| `validate_no_double_count` | all nodes | Prevent rework, return, cooling, energy and infrastructure from being counted twice. | `mass-balance-identity` |
| `validate_bilingual_projection` | PCR package | Require matching process, row, rule and range semantics in both languages and projection. |  |

## 10. 发布数据集规范

| 字段 | 值 |
| --- | --- |
| dataset_role | Foreground package for one declared fresh floral product |
| downstream_use | `secondary_dataset`; `background_dataset` after identity and quality review |
| allowed_use | LCA when composition, presentation, route, geography, technology, quality, hydration/temperature and gate are compatible |
| excluded_use | Generic substitution across loose/assembled forms, climates, systems, preservation routes or quality states without evidence |
| required_metadata | composition; presentation; route; geography; period; maturity/grade; hydration; temperature; treatment; accessories; packaging; gate; allocation; Flow Set selections; UUID evidence |
| required_quality_disclosure | coverage; measurement basis; range exceptions; residuals; rejects/rework; shared attribution; unresolved identities; route weighting |
| update_trigger | Changed composition, presentation, system, technology, gate, yield/input pattern, Flow Set version, reference UUID or material evidence |

## 11. 数据来源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `fao-postharvest-cut-flowers` | official_guidance | FAO, Small-Scale Postharvest Handling Practices, https://www.fao.org/4/ae075e/ae075e13.htm | living-product boundary, water-loss and temperature control, route separation |
| `ncsu-cut-flower-postharvest` | extension_guidance | NC State Extension, Postharvest Information – Cut Flowers, https://cutflowers.ces.ncsu.edu/cutflowers-postharvest/ | cutting, hydration, preservatives, grading, packaging and cold storage |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity for foreground reconciliation | normalization, components, yield, rework and shared-service calculations |
