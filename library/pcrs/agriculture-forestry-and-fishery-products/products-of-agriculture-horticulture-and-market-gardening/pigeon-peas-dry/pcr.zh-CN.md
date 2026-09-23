---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pigeon-peas-dry
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 干木豆

## 1. 范围与适用性

本 PCR 覆盖成熟干燥的完整木豆籽粒（*Cajanus cajan*），从受管理种植直至农场门交付。包括成熟度、整株割收或成熟荚采摘、田间或场地干燥、脱粒、清理、分级、条件性终干燥、重复结荚批次、茎秆与荚壳、损失、降级、拒收与返工。排除绿色蔬菜木豆、作为种子销售的播种用商品、木豆瓣、面粉、熟制或罐藏品及农场外加工。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pigeon-peas-dry |
| classification_refs | CPC 3.0:01707 Pigeon peas, dry |
| covered_products | Mature, cleaned and graded dry whole pigeonpea grain at farm gate |
| excluded_products | Green vegetable pigeonpea; planting seed sold as seed; split dhal; flour; cooked or canned product; downstream milling |
| representative_product | Mature dry whole grain of *Cajanus cajan* |
| production_route | Managed cultivation; whole-plant cutting or mature-pod picking; drying; threshing; cleaning; grading; conditional final drying |
| market_state | Harvested grain, unprocessed; production mix, at farm gate |

受管理种植是生物生产父活动。整株割收与成熟荚采摘属于替代生产路线，因为两者改变过程拓扑、重复收获批次记录和残余物核算。人工或机械脱粒、日晒或加热干燥属于各自父活动下的替代技术。并存路线在汇总前通过批次记录保持分离。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 对象 | Mature dry whole pigeonpea grain, cleaned and graded, at farm gate |
| 数量 | 1,000 kg as delivered |
| 质量 | Declared commercial grade, measured moisture, damage and foreign-matter basis, with unresolved rejects excluded |
| 时间或周期 | One declared crop cycle including every contributing harvest flush and conditioning lot |
| reference_flow_link | `pigeonpea_farm_gate_grain` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Pigeon peas, dry `6cac6f0d-9d09-4685-86f5-e1cc1ac94511` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | species *Cajanus cajan*; mature dry whole grain; harvest route; crop cycle and flush count; geography; cultivation system; moisture; grade; damage and foreign matter; farm-gate hand-off |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | Grain-state mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report as-delivered mass with wet-basis moisture; convert dry matter as `wet mass × (1 - moisture fraction)`. |
| `area_to_reference` | Field inputs, emissions and output | Stated activity property | source unit and kg reference product | Retain area and crop-cycle records, then normalize by accepted farm-gate grain from the same cycle. |
| `nutrient_composition` | Consolidated nutrient supply | Product mass and nutrient-element mass | kg product and kg element | Preserve every actual product, mass, nutrient composition and application date; product mass is not nutrient mass. |
| `lot_reconciliation` | Harvest and conditioning | Mass | kg | Reconcile input with products, co-products, rework transfers, rejects, moisture removal and physical loss without counting returned material twice. |

## 5. 系统边界

边界始于建植前已声明的田间状态，止于合格籽粒在农场门的交付。种植过程将田间成熟作物移交至独立收获节点；收获产生整株、枝条或成熟荚批次；干燥、脱粒、清理与分级形成整理后的籽粒；尚未达到声明交付含水率的籽粒通过条件性终干燥实现稳定化。

作物周期模型采用单一期间归属：后续收获批次仍属于同一作物周期。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | Field area, prior crop and residue state, soil management condition, establishment material and opening date before the crop cycle |
| starting_condition_建模角色 | Foreground cultivation starting condition |
| product_classification_scope | Mature dry whole pigeonpea grain within CPC 3.0:01707 |
| recursive_input_rule | Returned grain rework remains linked to its originating lot and retains prior burdens; purchased pigeonpea used for sowing or blending is a separate upstream input. |
| upstream_dataset_requirement | Use supplier-specific datasets for purchased seed, nutrient products, crop-protection products, water, fuels, electricity and services when available; disclose representative substitutes. |
| disclosure | Geography; period; variety or maturity class; sole/intercrop status; crop duration; harvest route and flushes; drying and threshing technology; moisture and grade; residue destinations; allocation; rework; farm-gate hand-off |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | Cultivation | Include all attributable operations and inputs from the declared starting condition through maturity, including failed establishment and field loss. | `icrisat-pigeonpea-production-1992` |
| `boundary_harvest_routes` | Harvest | Model whole-plant cutting and mature-pod picking separately; index each repeated flush and do not treat standing crop retained for a later flush as harvested output. | `icrisat-pigeonpea-production-1992` |
| `boundary_conditioning` | Conditioning | Include field or floor drying, threshing, cleaning, grading and conditional final drying before farm gate; link every loss, reject and rework path to its producing node. | `icrisat-pigeonpea-production-1992` |
| `boundary_downstream` | Product transformation | Exclude dehulling, splitting, milling, cooking, canning, retail packing and distribution beyond farm gate. |  |
| `boundary_soil_emissions` | Managed soil | When N inputs or returned residues occur, include direct and relevant indirect managed-soil N2O pathways under the declared applicable method. | `ipcc-managed-soils-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `managed_cultivation` | Managed pigeonpea cultivation | required | Always | Managed biological production with an alternative production route delta | one field crop cycle |
| `harvest_capture` | Whole-plant cutting or mature-pod picking | required | Declare route and flush | Harvest/capture using alternative technology routes | one harvest lot |
| `field_floor_drying` | Field or floor drying | required | Always before threshing | Primary conditioning by lot | one drying lot |
| `thresh_clean_grade` | Threshing, cleaning and grading | required | Always | Batch production for primary conditioning and grading | one conditioning batch |
| `final_drying_rework` | Final drying and rework | conditional | Grain requires further drying or re-cleaning | Batch production for stabilization and rework | one drying/rework batch |

### 过程：木豆种植管理 (`managed_cultivation`)

生产以作物周期为基础。共享田间负荷在每个作物周期仅计一次，每个收获批次都与该周期关联。

#### 输入

##### 产品流

###### 播种材料 (`sowing_material`)

Record seed actually sown, including resowing.

- 选定流： Pigeonpea sowing material
- 流属性/单位： Mass / kg
- 数量规则： measured mass sown by field and crop cycle
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per hectare and crop cycle
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cultivation`
- 来源： `icrisat-pigeonpea-production-1992`
- 数量范围： Sowing-rate QA range
  - 范围角色： 典型范围 (`typical_range`)
  - 下限： 4.2
  - 上限： 70
  - 单位： kg/ha per crop cycle
  - 基准： planted hectare in one crop cycle
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `icrisat-pigeonpea-production-1992`

###### 农业养分供应合并投入 (`agricultural_nutrient_supply`)

本卡合并覆盖全部矿质肥、有机肥、石灰及含养分改良剂。前景展开须保留每种实际产品及养分组成；禁止建立独立 N、P、K 或有机肥卡。

- 选定流： Agricultural nutrient supply products
- 流属性/单位： Mass / kg product and kg nutrient element
- 绑定模式： `parameterized`
- 流集： `flow-set.agricultural-nutrient-supply`
- 流集版本： `0.3.0`
- 数量规则： measured masses by actual product, composition and application event
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per hectare and crop cycle
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cultivation`
- 来源： `icrisat-pigeonpea-production-1992`
- 数量范围： Provisional total product-mass screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 10000
  - 单位： kg product/ha per crop cycle
  - 基准： all nutrient-bearing products applied to one hectare
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 灌溉水 (`irrigation_water`)

Record delivered irrigation only when it occurs; rainfall is not a product input.

- 选定流： Irrigation water
- 流属性/单位： Volume / m3
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则： metered or calculated delivered water by event
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per hectare and crop cycle
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cultivation`
- 来源： `icrisat-pigeonpea-production-1992`
- 数量范围： Provisional irrigation screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 15000
  - 单位： m3/ha per crop cycle
  - 基准： delivered irrigation for one hectare
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 植保与非养分接种剂产品 (`cultivation_supplies_services`)

按产品身份和田间事件记录每种植保产品及非养分接种剂，不与能源或田间服务合并。

- 选定流: Crop-protection and non-nutrient inoculant products
- 流属性/单位: Mass or volume / kg or L
- 数量规则: measured formulated-product quantity by field event
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per hectare and crop cycle
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_cultivation`
- 来源:
- 数量范围: Provisional formulated-product screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg formulated product/ha per crop cycle
  - 基准: recorded non-nutrient field products for one hectare
  - 基准类型: Crop cycle (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 田间能源供应 (`field_energy`)

按能源载体和作业分别记录燃料、电力及符合条件的农机能源服务。

- 选定流: Field-operation energy carriers and qualifying machinery-energy services
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: convert measured carrier and qualifying service records to energy by field event
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per hectare and crop cycle
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_cultivation`
- 来源:
- 数量范围: Provisional cultivation-energy screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: MJ/ha per crop cycle
  - 基准: recorded field energy for one hectare
  - 基准类型: Crop cycle (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 非能源田间服务 (`field_non_energy_services`)

当人工、畜力或其他非能源田间服务表示为产品投入时分别记录。

- 选定流: Non-energy field services
- 流属性/单位: Service / service-hour
- 数量规则: measured service quantity by operation
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per hectare and crop cycle
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_cultivation`
- 来源:
- 数量范围: Provisional non-energy service screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: service-hour/ha per crop cycle
  - 基准: recorded non-energy field services for one hectare
  - 基准类型: Crop cycle (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 管理土壤氧化亚氮 (`managed_soil_n2o`)

Calculate direct and relevant indirect N2O from recorded synthetic N, organic N, returned residue N and other applicable sources.

- 选定流： Nitrous oxide to air from managed soil
- 流属性/单位： Mass / kg N2O
- 数量规则： calculated from foreground N activity and declared factors
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per hectare and crop cycle
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 根据采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_cultivation`
- 来源： `ipcc-managed-soils-2019`
- 数量范围： Provisional managed-soil N2O screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg N2O/ha per crop cycle
  - 基准： included direct and indirect pathways for one hectare
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

#### 输出

##### 产品流

###### 田间成熟作物 (`standing_mature_crop`)

Record the mature crop handed to harvest, identified by field, crop cycle and maturity evidence.

- 选定流： Standing mature pigeonpea crop
- 流属性/单位： Mass / kg grain equivalent
- 数量规则： harvest receipts plus measured field loss and retained mature material
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per hectare and crop cycle
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 根据采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_cultivation`
- 来源： `icrisat-pigeonpea-production-1992`
- 数量范围： Provisional mature-grain-equivalent yield screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 100
  - 上限： 5000
  - 单位： kg/ha per crop cycle
  - 基准： standing mature grain equivalent for one hectare
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 收获前损失 (`preharvest_loss`)

Record mature pods or grain lost before collection; standing crop retained for another flush is not loss.

- 选定流： Pre-harvest pigeonpea loss
- 流属性/单位： Mass / kg grain equivalent
- 数量规则： field sampling and crop-cycle reconciliation
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per hectare and crop cycle
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 根据采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_cultivation`
- 来源：
- 数量范围： Pre-harvest loss fraction
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.8
  - 单位： kg loss/kg standing mature grain equivalent
  - 基准： mature grain equivalent in one crop cycle
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：整株割收或成熟荚采摘 (`harvest_capture`)

每批声明整株/枝条割收或成熟荚采摘。重复采摘须记录批次标识以及留在田间的作物。

#### 输入

##### 产品流

###### 田间成熟作物投入 (`harvest_inputs`)

按来源田块、收获批次和采收轮次记录成熟作物。

- 选定流: Standing mature pigeonpea crop
- 流属性/单位: Mass / kg
- 数量规则: lot-linked crop input
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Route-specific (`route_specific`)
- 归一化基准: per harvest lot and flush
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_harvest`
- 来源: `icrisat-pigeonpea-production-1992`
- 数量范围: Harvest-input mass screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 1
  - 上限: 20
  - 单位: kg standing crop/kg collected dry-grain equivalent
  - 基准: one harvest lot
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 收获能源供应 (`harvest_energy`)

记录切割、采摘、捆扎及转移至干燥地点所用燃料、电力和符合条件的农机能源服务。

- 选定流: Harvest-operation energy carriers and qualifying machinery-energy services
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: energy converted from measured carrier and qualifying service records
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Route-specific (`route_specific`)
- 归一化基准: per harvest lot and flush
- 基准类型: Process output (`process_output`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_harvest`
- 来源: `icrisat-pigeonpea-production-1992`
- 数量范围: Provisional harvest-energy screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: MJ/kg collected dry-grain equivalent
  - 基准: one harvest lot
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 收集的整株、枝条或成熟荚 (`collected_harvest_material`)

Record the physical state handed to drying and keep whole-plant, branch and pod-picked lots separate.

- 选定流： Collected pigeonpea harvest material
- 流属性/单位： Mass / kg
- 数量规则： weighed collected mass by field, route and flush
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per harvest lot
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest`
- 来源： `icrisat-pigeonpea-production-1992`
- 数量范围： Collected fraction
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg collected material/kg harvest input
  - 基准： harvest-lot mass balance
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

##### 废物流

###### 收获损失与伴生物料 (`harvest_loss`)

Record shattered pods, spilled grain and cut material without intended use; exclude living crop retained for a later flush.

- 选定流： Harvest loss and incidental material
- 流属性/单位： Mass / kg
- 数量规则： field estimate or lot mass-balance difference
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per harvest lot
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 根据采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest`
- 来源：
- 数量范围： Harvest-loss fraction
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg loss/kg harvest input
  - 基准： harvest-lot mass balance
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

##### 基本流

### 过程：田间或场地干燥 (`field_floor_drying`)

将收集状态的进料干燥至适合脱粒的状态。按批记录地点、持续时间、翻动物料、天气暴露、含水率和损害。

#### 输入

##### 产品流

###### 接收的收获物料 (`predrying_input`)

记录从已识别收获批次移交至本干燥批次的称量收获物料。

- 选定流： Collected pigeonpea harvest material
- 流属性/单位： Mass / kg
- 数量规则： weighed material entering the drying lot
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per drying lot
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_predrying`
- 来源： `icrisat-pigeonpea-production-1992`
- 数量范围： Pre-threshing drying-input screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 1
  - 上限： 20
  - 单位： kg wet material/kg dry-grain equivalent
  - 基准： one drying lot
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待脱粒的干燥植株或荚 (`dried_harvest_material`)

记录移交脱粒的干燥整理批次及其实测产出含水率。

- 选定流： Dried pigeonpea plants or pods
- 流属性/单位： Mass / kg
- 数量规则： weighed dry material with output moisture by lot
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per drying lot
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_predrying`
- 来源： `icrisat-pigeonpea-production-1992`
- 数量范围： Field or floor drying duration
  - 范围角色： 典型范围 (`typical_range`)
  - 下限： 1
  - 上限： 14
  - 单位： day
  - 基准： elapsed exposure for one drying lot
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `icrisat-pigeonpea-production-1992`

##### 废物流

###### 天气损害与散落 (`predrying_loss`)

将损坏、污染或散落物料与计算得到的除水量分开记录。

- 选定流： Pre-threshing drying loss
- 流属性/单位： Mass / kg
- 数量规则： reject and spill mass plus unexplained physical loss, excluding water removed
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per drying lot
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 根据采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_predrying`
- 来源：
- 数量范围： Physical-loss fraction
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.5
  - 单位： kg physical loss/kg drying input
  - 基准： drying-lot mass balance excluding removed water
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：脱粒、清理与分级 (`thresh_clean_grade`)

每批记录人工或机械技术、清洁/换线、投入以及全部等级或去向产出。将干燥物料分为合格籽粒、降级籽粒、有明确用途的茎荚产出和拒收物。

#### 输入

##### 产品流

###### 干燥收获物料投入 (`conditioning_inputs`)

按来源干燥批次记录干燥收获物料。

- 选定流: Dried pigeonpea plants or pods
- 流属性/单位: Mass / kg
- 数量规则: weighed material by conditioning batch
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: per conditioning batch
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning`
- 来源: `icrisat-pigeonpea-production-1992`
- 数量范围: Conditioning-input mass screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 1
  - 上限: 20
  - 单位: kg dried material/kg accepted and downgraded grain
  - 基准: one conditioning batch
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 整理能源供应 (`conditioning_energy`)

记录脱粒、清理及分级使用的能源载体和符合条件的机械能源服务。

- 选定流: Conditioning energy carriers and qualifying machinery-energy services
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: energy converted from measured carrier and qualifying service records by batch
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: per conditioning batch
- 基准类型: Process output (`process_output`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_conditioning`
- 来源: `icrisat-pigeonpea-production-1992`
- 数量范围: Provisional conditioning-energy screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: MJ/kg accepted and downgraded grain
  - 基准: one conditioning batch
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格清洁籽粒 (`accepted_clean_grain`)

The hand-off is to final drying when moisture exceeds the declared condition, or to farm-gate release otherwise.

在归属前，应将该预期产出与任何预期的茎秆或荚壳共产品一并声明。

- 选定流： Accepted cleaned pigeonpea grain
- 流属性/单位： Mass / kg
- 数量规则： weighed grain by grade, moisture and batch
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per conditioning batch
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning`
- 来源： `icrisat-pigeonpea-production-1992`
- 数量范围： Accepted-grain fraction
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg accepted grain/kg conditioning input
  - 基准： conditioning-batch mass balance
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

###### 降级籽粒 (`downgraded_grain`)

Record usable grain outside the reference grade with its grade, reason, destination and hand-off.

- 选定流： Downgraded pigeonpea grain
- 流属性/单位： Mass / kg
- 数量规则： weighed downgrade by reason and destination
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per conditioning batch
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning`
- 来源：
- 数量范围： Downgraded-grain fraction
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg downgraded grain/kg conditioning input
  - 基准： conditioning-batch mass balance
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

###### 有明确用途的茎秆与荚壳 (`stem_pod_coproduct`)

Record stems, branches or pod walls as co-products only with documented production intent, recipient and use; otherwise classify them as residue or waste.

- 选定流： Pigeonpea stems and pod walls with intended use
- 流属性/单位： Mass / kg dry matter
- 数量规则： weighed or moisture-corrected transfer to recipient
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per conditioning batch
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 根据采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_conditioning`
- 来源：
- 数量范围： Intended residue-output fraction
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg dry output/kg dry conditioning input
  - 基准： conditioning-batch dry-matter balance
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

##### 废物流

###### 拒收物与清理损失 (`conditioning_rejects`)

Record damaged or contaminated grain, foreign matter, dust and physical loss. Assign disposal, recovery or rework; unresolved rejects cannot enter accepted output.

- 选定流： Conditioning rejects and cleaning loss
- 流属性/单位： Mass / kg
- 数量规则： weighed rejects plus physical balance difference, excluding removed water
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per conditioning batch
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 根据采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_conditioning`
- 来源：
- 数量范围： Reject fraction
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg reject/kg conditioning input
  - 基准： conditioning-batch mass balance
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

##### 基本流

### 过程：终干燥与返工 (`final_drying_rework`)

可用投入为已清理籽粒。稳定化产出为达到声明含水率和等级的干籽粒。重复干燥或清理须保留来源批次及既有负荷，仅增加增量负荷。

#### 输入

##### 产品流

###### 进入终干燥或返工的籽粒 (`final_drying_inputs`)

按原因、来源批次和技术分别记录合格或不合格籽粒。

- 选定流: Cleaned pigeonpea grain requiring final drying or rework
- 流属性/单位: Mass / kg
- 数量规则: measured batch input with incoming moisture and grade
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: per final-drying or rework batch
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_final_drying`
- 来源: `icrisat-pigeonpea-production-1992`
- 数量范围: Final-drying input mass screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 1
  - 上限: 1.5
  - 单位: kg incoming grain/kg stabilized grain
  - 基准: one final-drying or rework batch
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 终干燥与返工能源 (`final_drying_energy`)

记录终干燥或返工使用的购入燃料、电力及符合条件的能源服务；自然太阳干燥的购入能源为零。

- 选定流: Final-drying and rework energy supply
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: energy converted from measured carrier and qualifying service records by batch
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: per final-drying or rework batch
- 基准类型: Process output (`process_output`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_final_drying`
- 来源: `icrisat-pigeonpea-production-1992`
- 数量范围: Provisional final-drying energy screen
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: MJ/kg stabilized grain
  - 基准: one final-drying or rework batch
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门成熟干木豆籽粒 (`pigeonpea_farm_gate_grain`)

该合格参考产出排除所有未解决的拒收物和降级品。

- 选定流： Pigeon peas, dry `6cac6f0d-9d09-4685-86f5-e1cc1ac94511`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式： `fixed`
- 数量规则： exactly the accepted as-delivered reference mass with measured moisture
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： per 1,000 kg reference product
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 身份引用 (`identity_reference`)
- 来源：
- 数量范围： Reference-output identity
  - 范围角色： 允许范围 (`allowed_range`)
  - 下限： 1000
  - 上限： 1000
  - 单位： kg
  - 基准： one PCR reference flow
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

###### 回收的降级籽粒 (`recovered_downgraded_grain`)

Record grain still outside the reference grade after rework only when it leaves for a documented lower-grade use.

- 选定流： Recovered downgraded pigeonpea grain
- 流属性/单位： Mass / kg
- 数量规则： weighed outgoing mass by origin and destination
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per rework batch
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_final_drying`
- 来源：
- 数量范围： Recovered downgrade fraction
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg downgraded output/kg rework input
  - 基准： rework-batch mass balance
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

##### 废物流

###### 终干燥损害与拒收物 (`final_drying_reject`)

Record heat or mould damage, contamination and physical loss; calculated water removal is not waste.

- 选定流： Final-drying damage and unrecovered reject
- 流属性/单位： Mass / kg
- 数量规则： weighed reject plus physical balance difference, excluding water removed
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per final-drying or rework batch
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 根据采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_final_drying`
- 来源：
- 数量范围： Final-drying reject fraction
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg reject/kg batch input
  - 基准： final-drying or rework-batch mass balance
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | All nodes | Subdivide field, flush, lot, batch, technology and rework records before allocation when independent measurements exist. |  |
| `allocation_crop_cycle` | Shared cultivation | Attribute shared cultivation burdens once across all flushes in proportion to dry accepted and downgraded grain mass unless a reviewed causal method is used; never reapply them per flush. |  |
| `allocation_intended_outputs` | Grain, stems and pods | Treat outputs as co-products only with production intent, quality state, recipient and hand-off. Apply one declared economic, physical or reviewed causal method to the complete intended-output set and disclose sensitivity. |  |
| `allocation_rework` | Re-drying and re-cleaning | Returned material retains prior burdens; add incremental burdens once and do not count returned mass as new input or accepted output before release. |  |
| `allocation_reject_exit` | Downgrade and waste | Downgraded outputs follow the complete-output attribution rule; treatment of waste remains with the producing node unless a disclosed downstream waste convention applies. |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_建模角色 | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation` | `managed_cultivation` | inputs, mature crop, loss, soil-emission activity | field-cycle record | field; area; dates; variety; crop system; seed; actual nutrient products/composition; irrigation; protection; energy; residue management; yield/loss | invoices, logs, meters, sampling and reconciliation | native units, ha, kg | each event; crop-cycle summary | full crop cycle | every field | aggregate by field/cycle then normalize by accepted grain | dates, calibration, labels, reconciliation |
| `cp_harvest` | `harvest_capture` | crop input, services, collected state, loss | harvest-lot/flush record | field; cycle; route; flush; maturity; date; crop estimate; service; collected mass; retained crop; loss | scale, sampling and operation log | kg and service units | every lot/flush | all contributing flushes | every field/route | keep routes/flushes separate and reconcile states | lot id, scale check, maturity evidence |
| `cp_predrying` | `field_floor_drying` | wet input, dry output, moisture and loss | drying-lot record | lot; location; time; protection; input/output mass and moisture; damage; spill | scale, moisture meter and lot log | kg, %, day | every lot | full interval | every drying place | report water removal separately from physical loss | calibration, traceability, inspection |
| `cp_conditioning` | `thresh_clean_grade` | batch input, services, grades, co-product and reject | batch record | batch; source lot; technology; input; moisture; energy; cleaning/changeover; outputs; grade; damage; destination | scale, meter, service and grade records | kg, %, energy/service | each batch/changeover | all contributing batches | every route/site | reconcile before grade/destination aggregation | calibration, lineage, destination receipt |
| `cp_final_drying` | `final_drying_rework` | input, energy, moisture, release, downgrade and reject | drying/rework batch | batch; origin; reason; input/output mass/moisture; route; temperature; duration; energy; grade; destination | scale, moisture/temperature/time/energy records | kg, %, °C, hour, energy | every pass | full intervention | every route/site | retain prior burdens, add incremental burdens once, reconcile outputs | calibration, lineage, release record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture` | Wet/dry mass | `dry matter = wet mass × (1 - wet-basis moisture fraction)`; water removed preserves dry matter. | mass and moisture | dry matter and water removed | `mass-balance-identity` |
| `calc_normalization` | All activities | Sum only linked records, divide by accepted as-delivered grain and multiply by 1,000 kg. | linked quantities and accepted grain | quantity per reference flow | `mass-balance-identity` |
| `calc_soil_n2o` | N additions and residues | Apply the declared applicable IPCC or reviewed national Tier method, including relevant direct, volatilization/deposition and leaching/runoff pathways. | N composition, residue N, factors | kg N2O by pathway | `ipcc-managed-soils-2019` |
| `calc_reconciliation` | Every lot/batch | Input dry mass equals accepted, intended co-product, downgrade, reject and physical-loss dry mass; rework return is a transfer. | linked input/output mass and moisture | variance and completeness flag | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference output | Confirm species, whole-grain state, farm-gate status, grade, moisture, damage and foreign matter. | release and specification |
| `dq_temporal` | Route lineage | Cover every input event, flush, drying lot, batch and rework pass. | field-to-gate lineage |
| `dq_completeness` | Output states | Classify every output as accepted, downgrade, intended co-product, rework, residue, waste or loss. | reconciled balance |
| `dq_measurement` | Quantities | Use calibrated or verified equipment and state estimation methods and uncertainty. | calibration and records |
| `dq_representativeness` | Production mix | Weight fields/routes by accepted output and disclose exclusions, substitutions and shares. | contribution table |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference product | Reject green, planting-seed-market or processed product and grain without species, moisture, grade and farm-gate qualifiers. |  |
| `validate_lineage` | Process map | Require continuous field–cycle–flush–drying-lot–conditioning-batch–rework–farm-gate lineage and one parent for every alternative route. | `icrisat-pigeonpea-production-1992` |
| `validate_flushes` | Pod picking | Require flush ids, retained standing crop and one-time attribution of shared cultivation burdens. | `icrisat-pigeonpea-production-1992` |
| `validate_grades` | Grading | Require accepted and non-accepted states, a hand-off for every state, and separation of downgrade, reject, waste and rework. |  |
| `validate_rework` | Rework | Reject double counting of returned mass or prior burdens and exclude unresolved off-spec grain from accepted output. |  |
| `validate_multi_output` | Intended outputs | Require complete output enumeration and an explicit attribution decision; one output cannot occur at two hand-offs. |  |
| `validate_mode_indexing` | Periods/lots/batches | Link inputs, outputs, cleaning/changeover and yield to the relevant period, flush, lot or batch; reject duplicated shared burdens. |  |
| `validate_nutrient_cardinality` | Cultivation Product inputs | Permit at most one fertilizer/nutrient Product input card. It must be `agricultural_nutrient_supply`, bind only to `flow-set.agricultural-nutrient-supply` version `0.3.0`, have no group, and cover mineral, organic and amendment products together. |  |
| `validate_ranges` | Every Flow Card | Require exactly one complete Range; require lower not greater than upper and EN/ZH/structured equivalence. |  |
| `validate_final_condition` | Farm-gate grain | Require measured final moisture. ICRISAT's 6–8% observation is source-specific QA guidance, not a universal grade unless adopted by the declared specification. | `icrisat-pigeonpea-production-1992` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_建模角色 | Foreground farm-gate production dataset for mature dry pigeonpea grain |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness and quality review |
| allowed_use | Processes and lifecycle models requiring mature dry whole pigeonpea grain within the declared geography, period, route mix, grade and moisture basis |
| excluded_use | Green pigeonpea, planting seed, split dhal, flour, cooked/canned product, unreviewed generic pulse substitution, downstream transport or processing |
| required_metadata | PCR id/version; geography; period; fields/cycles; variety; crop system; harvest routes/flushes; technologies; grade; moisture; damage/foreign matter; residue destinations; allocation; rework; coverage and uncertainty |
| required_quality_disclosure | measured/estimated shares; missing records; substitutions; route coverage; balance variance; moisture conversion; emission method/factors; allocation sensitivity; Flow Set resolution status |
| update_trigger | Material change in boundary, UUID, grade/moisture basis, topology, technology mix, co-product use, attribution, emission method, geography or QA evidence |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `icrisat-pigeonpea-production-1992` | handbook | Singh, F. and Oswalt, D. L. (1992), *Pigeonpea Botany and Production Practices*, ICRISAT. https://oar.icrisat.org/2422/1/Pigeonpea-Botany-Production-Practices.pdf | Identity, cultivation, sowing rate, maturity, whole-plant/repeated-picking routes, drying, threshing, cleaning and moisture guidance |
| `ipcc-managed-soils-2019` | method_factor | IPCC (2019), *2019 Refinement to the 2006 IPCC Guidelines*, Volume 4, Chapter 11. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct and indirect N2O method |
| `mass-balance-identity` | method_factor | Conservation of dry matter and physical mass across a declared process node | Moisture conversion, reconciliation and fraction bounds |
