---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.nutmeg-mace-cardamoms-raw
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未加工肉豆蔻、肉豆蔻衣和豆蔻

## 1. 范围与适用性

本 PCR 覆盖多年生管理植株生产带壳肉豆蔻种子、肉豆蔻衣假种皮或豆蔻蒴果，直至声明的农场门交付。纳入建园、生产期管理、收获、肉豆蔻果实分离、分级，以及仅在农场门前发生的清洗或干燥。每个数据集选择一种作物/器官路线和一种参考产品状态；没有记录组成和加权规则时不得平均肉豆蔻与豆蔻。

排除研磨、制粉、为生产商品肉豆蔻仁而进行的破壳/脱壳、精油或油树脂提取、混配、熏蒸、消费包装、香辛料制造以及门后运输。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.nutmeg-mace-cardamoms-raw |
| classification_refs | CPC 3.0 01653, Nutmeg, mace, cardamoms, raw |
| covered_products | raw nutmeg seed with shell, separated raw mace aril, and raw cardamom capsules, fresh or farm-dried as declared |
| excluded_products | ground spice; commercial shelled nutmeg kernel; essential oils, oleoresins and nutmeg butter; blended, fumigated, retail-packed or manufactured spices |
| representative_product | one declared route: nutmeg seed with shell, mace aril, or cardamom capsule |
| production_route | perennial managed production; mutually exclusive nutmeg-tree or cardamom-stand route; optional ambient/shade or heated drying is a technology delta from fresh dispatch |
| market_state | raw at farm gate, with fresh/dried state, moisture basis, grade, organ state and conditioning route declared |

肉豆蔻树在同一分离节点有意产出种子和肉豆蔻衣。豆蔻具有不同的收获器官和初级处理路线。除非记录为连续阶段，鲜品交付、环境/阴干和加热烘制是批次层面互斥的路线。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | declared raw nutmeg seed with shell, mace aril, or cardamom capsules at farm gate |
| How much | 1,000 kg net product mass |
| How well | saleable under the declared grade and moisture specification, excluding foreign matter and rejects |
| How long or cycle | output from a declared harvest period, including documented stand-lifecycle attribution |
| reference_flow_link | `raw_spice_reference_product` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Nutmeg, mace, cardamoms, raw `6d4837b1-c271-4aac-89f4-f329d3290c47` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | crop/species; harvested organ; shell/aril/capsule state; fresh or dried state; moisture content and basis; grade; production system; geography; harvest period; farm-gate hand-off; drying technology when used |
| Binding | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net mass and measured moisture content/basis; never mix fresh and dried mass without moisture conversion. |
| `land_time_basis` | establishment and management | area and time | ha, year | Separate establishment, non-bearing and productive phases. |
| `nutrient_active_mass` | nutrient inventory | product and nutrient mass | kg product, kg N/P/K | Collect every actual nutrient product and composition separately below the consolidated card. |
| `lot_reconciliation` | harvest through grading | Mass | kg/lot | Reconcile accepted, downgraded, rejected, sampled and moisture-loss states by lot/batch. |

## 5. 系统边界

前景从种植材料或有记录的现有植株开始，在农场门交付结束。纳入建园/未结果期、生产期管理、适用的土地利用变化、水、能源、植保和养分供应、田间直接排放、收获、分离、门前初级处理、分级、残余物、剔除物及重要资本品。苗圃和其他供应品作为上游数据集。

收获因移除已记录的生物产出而构成独立节点。肉豆蔻分离形成种子、肉豆蔻衣和果皮状态。初级处理接收鲜批次并交付声明的鲜品或稳定化状态。分级形成合格、降级和剔除去向。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | new establishment or existing stand of known age and establishment history |
| starting_condition_role | determines direct establishment records or remaining-life attribution |
| product_classification_scope | one nutmeg-seed, mace-aril, or cardamom-capsule route |
| recursive_input_rule | a same-category input is an upstream farm-gate product dataset and is not regenerated recursively |
| upstream_dataset_requirement | representative planting-material, nutrient, crop-protection, water, fuel and electricity datasets |
| disclosure | stand age, establishment source, crop/species, intercropping, area, harvest period, yield, co-products, conditioning, moisture basis and farm gate |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | all datasets | Preserve crop, harvested-organ and lot identity through every process. | `iisir-nutmeg-2005`; `iisir-cardamom-2022` |
| `boundary_perennial_phases` | establishment | Include establishment, non-bearing and productive phases; link replacement and termination to area and period. | `cerutti-perennial-crops-2016`; `spices-board-cardamom-cost-2021` |
| `boundary_nutmeg_separation` | nutmeg route | Include fruit collection and seed/aril/pericarp separation before distinct hand-offs. | `fao-nutmeg-handling` |
| `boundary_conditioning` | conditioning | Include washing, drying energy, moisture loss, rejects and re-drying before farm gate; omit for fresh direct dispatch. | `fao-nutmeg-handling`; `iisir-cardamom-2022` |
| `boundary_manufacture_exclusion` | downstream | Exclude grinding, extraction, commercial-kernel cracking, blending, fumigation and consumer packaging. | `fao-nutmeg-handling` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 作用 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stand_establishment` | Perennial stand establishment | required | direct for new stands or remaining-life attribution for existing stands | creates productive capacity | one established hectare |
| `productive_management` | Productive-year crop management | required | every harvest period | manages crop and records field emissions | one productive hectare-year |
| `harvest_separation` | Harvest and route-specific separation | required | every harvest lot | creates organ-specific outputs | one harvest lot |
| `primary_conditioning` | Primary conditioning and preservation stabilization | conditional | only when performed before farm gate | alternative technology delta among fresh, ambient/shade and heated routes | one batch |
| `grading_dispatch` | Grading and dispatch | required | every saleable lot | creates accepted, downgraded and rejected states | 1,000 kg accepted product |

收获、初级处理和分级按批次运行。将投入、清洁、产出、换批和再干燥关联至同一批次。共享批次负荷按实测处理质量仅分摊一次。

### 过程：多年生植株建园（`stand_establishment`）

#### 输入

##### 产品流

###### 种植材料（`planting_material`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： Crop-specific planting material
- 数量规则： measured type, count and mass; separate replants
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per established hectare over establishment
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_establishment`
- 数量范围： Provisional completeness screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 5000
  - 单位： planting units/ha established
  - 基准： per established hectare over establishment
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 合并的建园期养分产品（`establishment_nutrients`）

All mineral fertilizers, organic fertilizers and nutrient-bearing amendments are consolidated here; collect and resolve each actual product separately during dataset generation.

- 选定流： Agricultural nutrient supply
- 绑定模式： `parameterized`
- Flow Set： `flow-set.agricultural-nutrient-supply`
- Flow Set version： `0.3.0`
- 数量规则： sum measured product masses while retaining composition and application records
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per established hectare over establishment
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_establishment`
- 数量范围： Provisional aggregate product screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20000
  - 单位： kg product/ha established
  - 基准： per established hectare over establishment
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已建植株生产能力（`established_stand`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： Established nutmeg or cardamom stand capacity
- 数量规则： successfully established area after mortality/replant reconciliation
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per hectare entering establishment
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_establishment`
- 数量范围： Established-area reconciliation
  - 范围角色：允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1
  - 单位： ha established/ha entered
  - 基准： per hectare entering establishment
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `cerutti-perennial-crops-2016`

### 过程：生产期作物管理（`productive_management`）

#### 输入

##### 产品流

###### 合并的生产年养分产品（`productive_nutrients`）

This is the process's only nutrient Product-input card; collect actual mineral, organic and amendment products individually for UUID resolution.

- 选定流： Agricultural nutrient supply
- 绑定模式： `parameterized`
- Flow Set： `flow-set.agricultural-nutrient-supply`
- Flow Set version： `0.3.0`
- 数量规则： sum measured product masses while retaining composition, N content and dates
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per productive hectare-year
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_management`
- 数量范围： Provisional aggregate product screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10000
  - 单位： kg product/ha-year
  - 基准： per productive hectare-year
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水 (`management_irrigation_water`)

记录输送至生产期种植园的补充灌溉水；降雨不计为产品流。

- 选定流： 灌溉水
- 流属性/单位： 体积 / m3
- 绑定模式： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set version： `0.2.0`
- Flow Set group： `irrigation-water`
- 数量规则： 按计量或校准值记录输送到种植园的水量
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 场地特定（`site_specific`）
- 归一化基准： 每生产公顷年
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_management`
- 数量范围： 生产年灌溉水筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 30000
  - 单位： m3/ha-year
  - 基准： 每生产公顷年；雨养管理为零
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 植保产品 (`management_crop_protection`)

分别记录各实际配方植保产品，以便后续解析 UUID。

- 选定流： 植保产品
- 流属性/单位： 质量 / kg 产品
- 数量规则： 按施用事件和处理面积记录配方产品质量
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 场地特定（`site_specific`）
- 归一化基准： 每生产公顷年
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_management`
- 数量范围： 植保产品筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kg product/ha-year
  - 基准： 每生产公顷年
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 田间能源供应 (`management_energy`)

按原始单位分别记录燃料、电力和外购田间能源载体。

- 选定流： 田间能源载体和电力
- 流属性/单位： 能量 / MJ 或 kWh
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 数量规则： 使用计量、发票或校准的载体数量并保留载体身份
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 场地特定（`site_specific`）
- 归一化基准： 每生产公顷年
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_management`
- 数量范围： 生产年田间能源筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： MJ/ha-year
  - 基准： 按有记录的换算折算到每生产公顷年
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

###### 可收获作物材料（`harvestable_crop`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： Harvestable nutmeg fruit or cardamom capsules
- 数量规则： measured by crop and picking round; only the selected route is active
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per productive hectare-year
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_harvest`
- 数量范围： Route-specific yield screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg harvestable material/ha-year
  - 基准： per productive hectare-year; inactive route contributes zero
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 管理土壤直接氧化亚氮（`soil_n2o`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： Nitrous oxide to air
- 数量规则： calculate from collected N inputs and applicable IPCC tier by `calc_soil_n2o`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： per kg N included in the direct managed-soil equation
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议： `cp_management`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Provisional direct-N2O-N factor screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.05
  - 单位： kg N2O-N/kg N input
  - 基准： per kg N in the applicable direct-emission equation
  - 基准类型：氮投入（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：收获与路线特定分离（`harvest_separation`）

#### 输入

##### 产品流

###### 可收获作物投入（`harvest_input`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： Harvestable nutmeg fruit or cardamom capsules
- 数量规则： measured mass entering the lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per harvest lot
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_harvest`
- 数量范围： Lot input screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0.1
  - 上限： 100000
  - 单位： kg/lot
  - 基准： per declared harvest lot
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 带壳肉豆蔻种子（`nutmeg_seed_output`）

本卡记录一种预期产出及其独立交接点。

- 选定流：未加工带壳肉豆蔻种子
- 数量规则：单独计量；非活动路线产出为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 收获投入
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`fao-nutmeg-handling`; `iisir-cardamom-2022`
- 数量范围：预期产出质量平衡校验
  - 范围角色：允许范围（`allowed_range`）
  - 下限：0
  - 上限：1000
  - 单位：kg output
  - 基准：每 1,000 kg 收获投入；适用于肉豆蔻路线；豆蔻路线为零
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-nutmeg-handling`; `iisir-cardamom-2022`

###### 肉豆蔻衣假种皮（`mace_aril_output`）

本卡记录一种预期产出及其独立交接点。

- 选定流：未加工肉豆蔻衣假种皮
- 数量规则：单独计量；非活动路线产出为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 收获投入
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`fao-nutmeg-handling`; `iisir-cardamom-2022`
- 数量范围：预期产出质量平衡校验
  - 范围角色：允许范围（`allowed_range`）
  - 下限：0
  - 上限：1000
  - 单位：kg output
  - 基准：每 1,000 kg 收获投入；适用于肉豆蔻路线；豆蔻路线为零
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-nutmeg-handling`; `iisir-cardamom-2022`

###### 豆蔻蒴果（`cardamom_capsule_output`）

本卡记录一种预期产出及其独立交接点。

- 选定流：未加工豆蔻蒴果
- 数量规则：单独计量；非活动路线产出为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 收获投入
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`fao-nutmeg-handling`; `iisir-cardamom-2022`
- 数量范围：预期产出质量平衡校验
  - 范围角色：允许范围（`allowed_range`）
  - 下限：0
  - 上限：1000
  - 单位：kg output
  - 基准：每 1,000 kg 收获投入；适用于豆蔻路线；肉豆蔻路线为零
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-nutmeg-handling`; `iisir-cardamom-2022`

##### 废物流

###### 果皮、穗梗和田间剔除物（`harvest_residues`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： Route-specific harvest residues
- 数量规则： input minus intended outputs and measured losses; reclassify deliberately sold/used material as product
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per 1,000 kg harvest input
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_harvest`
- 数量范围： Residue mass-balance
  - 范围角色：允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg residues
  - 基准： per 1,000 kg harvest input
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `fao-nutmeg-handling`; `iisir-cardamom-2022`

### 过程：清洗和/或干燥（`primary_conditioning`）

#### 输入

##### 产品流

###### 进入初级处理的原料香辛料 (`conditioning_raw_spice`)

记录进入实际清洗或干燥阶段的原料香辛料批次。

- 选定流： 路线特定原料香辛料
- 流属性/单位： 质量 / kg
- 数量规则： 称量湿基投入并关联同一处理批次
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 进入处理的原料香辛料
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`
- 数量范围： 处理投入质量筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1000
  - 上限： 100000
  - 单位： kg raw spice
  - 基准： 每处理批次并归一化至 1,000 kg 原料香辛料
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 处理工艺水 (`conditioning_water`)

仅在实际清洗时记录供应水。

- 选定流： 工艺水
- 流属性/单位： 体积 / m3
- 绑定模式： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set version： `0.2.0`
- Flow Set group： `process-water`
- 数量规则： 按计量或校准值记录供应至处理批次的水
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 进入处理的原料香辛料
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`
- 数量范围： 条件性清洗水筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： m3
  - 基准： 每 1,000 kg 原料香辛料；无清洗时为零
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 处理能源供应 (`conditioning_energy`)

记录主动干燥或处理使用的外购燃料、电力或热；被动干燥可记录为零。

- 选定流： 处理能源载体
- 流属性/单位： 能量 / MJ 或 kWh
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 数量规则： 按批次计量载体数量并保留载体身份
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 进入处理的原料香辛料
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`
- 数量范围： 条件性处理能源筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： MJ
  - 基准： 每 1,000 kg 原料香辛料；被动干燥外购能源为零
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

###### 初级处理后的原料香辛料（`conditioned_product`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： Conditioned nutmeg seed, mace aril or cardamom capsules
- 数量规则： measured final mass with moisture, time/temperature, method and rejected fraction
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per 1,000 kg raw spice entering conditioning
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_conditioning`
- 来源： `fao-nutmeg-handling`; `iisir-cardamom-2022`
- 数量范围： Conditioned-product mass yield
  - 范围角色：允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg conditioned product
  - 基准： per 1,000 kg raw spice entering conditioning
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `fao-nutmeg-handling`; `iisir-cardamom-2022`

##### 基本流

###### 释放的水分（`drying_moisture_loss`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： Water to air
- 数量规则： calculate by `calc_conditioning_balance` after rejects and samples
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per 1,000 kg raw spice entering conditioning
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_conditioning`
- 数量范围： Moisture-loss balance
  - 范围角色：允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg water
  - 基准： per 1,000 kg raw spice; zero without drying
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `iisir-cardamom-2022`; `fao-nutmeg-handling`

### 过程：分级与交付（`grading_dispatch`）

#### 输入

##### 产品流

###### 进入分级的香辛料批次（`grading_input`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： Route-specific fresh or conditioned raw spice
- 数量规则： measured lot mass with crop, organ and moisture identity
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per grading lot
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_dispatch`
- 数量范围： Grading-lot screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0.1
  - 上限： 100000
  - 单位： kg/lot
  - 基准： per declared grading lot
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 合格原料香辛料参考产品（`raw_spice_reference_product`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： Nutmeg, mace, cardamoms, raw `6d4837b1-c271-4aac-89f4-f329d3290c47`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式： `fixed`
- 数量规则： 1,000 kg net accepted product
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per reference flow
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议： `cp_dispatch`
- 数量范围： Fixed reference quantity
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 1000
  - 上限： 1000
  - 单位： kg accepted product
  - 基准： per 1,000 kg reference flow
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 降级原料香辛料（`downgraded_product`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： Downgraded route-specific raw spice
- 数量规则： measured lower-grade mass with destination and revenue; never count as accepted mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per 1,000 kg grading input
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_dispatch`
- 数量范围： Downgrade balance
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg downgraded product
  - 基准： per 1,000 kg grading input
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分级剔除物（`grading_rejects`）

本卡记录该过程边界上的声明流及其数量。

- 选定流： Route-specific spice rejects
- 数量规则： measured final reject mass; retain re-drying loops under the producing lot until disposition
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准： per 1,000 kg grading input
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_dispatch`
- 数量范围： Reject balance
  - 范围角色：允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg rejects
  - 基准： per 1,000 kg grading input
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `fao-nutmeg-handling`; `iisir-cardamom-2022`

## 7. 分配与共同产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | all shared operations | Subdivide route-specific and separately metered operations before allocation. | `iso-14044-2006` |
| `allocation_nutmeg_outputs` | nutmeg production/separation | Treat seed and mace as intended co-products. Allocate inseparable burdens by matched-period farm-gate economic value and report mass-allocation sensitivity. Pericarp receives burden only when deliberately sold or used. | `iso-14044-2006`; `fao-nutmeg-handling` |
| `allocation_establishment` | perennial establishment | 跨生命周期阶段，将建园负荷除以实际累计可售产出； for incomplete lives use a documented forecast and update for mortality, replacement or termination. Never charge one cohort twice. | `cerutti-perennial-crops-2016` |
| `allocation_batches` | conditioning/grading | Assign measured batch inputs directly; apportion shared run/changeover burden once by mass handled. Re-dried lots retain prior burden and receive additional re-drying burden. | `iso-14044-2006` |
| `allocation_rejects` | downgrade/rework/waste | Return rework to its producing lot; keep burden with downgraded saleable product under the chosen co-product rule; give waste no avoided credit in an attributional dataset. | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流作用 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment` | `stand_establishment` | planting, nutrients, area, survival | invoices and field logs | cohort; crop; material type/count/mass; every nutrient product/composition/mass; area; mortality; replants; dates | reconcile purchases and field records | units; kg; ha | every event | full establishment/non-bearing phase | stand/cohort | sum by event; retain product detail | invoices, labels, maps, counts |
| `cp_management` | `productive_management` | annual inputs and emission drivers | meters, invoices, application logs | stand age/area; every nutrient product and N; water; protection product; fuels; electricity; residues; soil class | direct records or documented runtime factors | kg; m3; L; kWh; ha | every event, annual aggregate | full represented year | stand/route | aggregate by ha-year; retain detail | invoices, labels, meter calibration |
| `cp_harvest` | `harvest_separation` | harvest and separated states | lot tickets and scales | lot; crop; organ; date; area; input; seed; aril; capsules; residues; destination | weigh every lot/state | kg | every lot | all harvest rounds | stand/lot | aggregate after mass balance | scale checks, tickets, receipts |
| `cp_conditioning` | `primary_conditioning` | washing, energy, moisture, yield | batch sheet and meters | lot; method; input mass/moisture; water; energy carrier; time/temperature; output mass/moisture; rejects; re-drying | meter and weigh/test every batch | kg; m3; kWh; MJ; % | every batch | all conditioned lots | farm/unit | reconcile input, output, reject and water loss | scale, moisture method, meters, batch log |
| `cp_dispatch` | `grading_dispatch` | accepted/downgraded/reject | grading and sales records | lot; identity; state; moisture; grade; input; outputs; rework destination; price; gate/date | weigh and link each state | kg; currency/kg | every lot | all represented production | farm/lot | reconcile, then normalize accepted output | scale, grade spec, invoice |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_establishment_attribution` | establishment | cohort inventory × product allocation share / cumulative actual or forecast saleable lifetime output | cohort inputs, area, survival, productive years, outputs | inventory/kg saleable output | `cerutti-perennial-crops-2016` |
| `calc_soil_n2o` | managed soil | apply selected IPCC tier to collected synthetic, organic and residue N; convert N2O-N to N2O once using 44/28 | N inputs, soil/climate and factors | kg N2O with factor provenance | `ipcc-2019-managed-soils` |
| `calc_conditioning_balance` | conditioning | wet input = conditioned output + rejects + samples + moisture loss, all on consistent basis | masses and moisture | reconciled yield/water loss | `iisir-cardamom-2022`; `fao-nutmeg-handling` |
| `calc_nutmeg_allocation` | seed/mace | share = output mass × matched farm-gate price / total intended-output revenue; repeat by mass | saleable masses and prices | shares summing to one | `iso-14044-2006` |
| `calc_reference_normalization` | dataset | attributed inventory / accepted mass × 1,000 | attributed inventory; accepted mass | inventory/1,000 kg |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | all records | Preserve crop/species, organ, stand, harvest period, lot, moisture and route; mixed lots need measured composition. | maps, lot ledger, specification |
| `dq_temporal` | perennial phases | Cover the full represented year and retain establishment history or remaining-life model. | cohort history and replacement plan |
| `dq_mass_balance` | separation/conditioning/grading | Investigate unexplained difference above 5% of input rather than forcing closure. | calibrated weights and reconciliation |
| `dq_moisture` | fresh/dried conversion | Use one documented moisture method and basis; record sampling time. | test and calibration record |
| `dq_completeness` | inventory | Include every nutrient product below the one card, energy carrier, co-product, downgrade, reject and field-emission driver. | invoices, logs, meters, receipts |
| `dq_representativeness` | aggregation | Disclose geography, system, route, ages, intercropping and drying technology; justify farm aggregation. | sampling frame and weights |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Fail if crop/organ, state, moisture basis, grade, period, gate or route is missing, or accepted output is not exactly 1,000 kg. |  |
| `validate_route_exclusivity` | graph | Fail if nutmeg/cardamom or fresh/ambient/heated routes are silently averaged. | `fao-nutmeg-handling`; `iisir-cardamom-2022` |
| `validate_period_attribution` | establishment | Fail if phase, stand age, replacement or termination treatment is absent or double counted. | `cerutti-perennial-crops-2016` |
| `validate_output_set` | nutmeg separation | Fail unless seed, mace and pericarp destinations are declared and intended products allocated. | `fao-nutmeg-handling` |
| `validate_batch_linkage` | harvest through dispatch | Fail if inputs, cleaning, outputs, re-drying or rejects lack a lot/batch/period link or shared burden is duplicated. |  |
| `validate_nutrient_cardinality` | each process | Fail if a process has more than one nutrient Product-input card, any nutrient group, or lacks individual actual-product collection for UUID resolution. |  |
| `validate_mass_balance` | separation/conditioning/grading | Fail when output states are not reconciled or rejects are accepted product. | `fao-nutmeg-handling`; `iisir-cardamom-2022` |
| `validate_boundary` | downstream | Fail if grinding, extraction, commercial-kernel cracking, blending, fumigation or consumer packaging is included. | `fao-nutmeg-handling` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground farm-gate dataset for one declared raw spice route |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | lifecycle models needing raw nutmeg seed, mace aril or cardamom capsule supply at farm gate |
| excluded_use | manufactured spice or undisclosed average across unrelated crop routes |
| required_metadata | crop/species; organ; geography; system; stand age/phase; establishment attribution; intercropping; period; state/moisture; grade; allocation; conditioning; gate |
| required_quality_disclosure | coverage; measured/estimated shares; mass balance; allocation shares and price period; range exceedances; unresolved UUIDs; gaps |
| update_trigger | changed route/state/technology/life assumption/co-product destination/price relation; >10% change in yield, energy or nutrient intensity; new representative records |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `fao-nutmeg-handling` | official_guidance | FAO, *Production, handling and processing of nutmeg and mace*, Section III, https://www.fao.org/4/x5047e/x5047E06.htm | harvest, separation, fresh/dry delivery, drying, grading, rejects |
| `iisir-nutmeg-2005` | extension_guidance | ICAR-IISR, *Nutmeg*, January 2005, https://www.indianspices.com/sites/default/files/cultivation_practices-nutmeg.pdf | perennial identity, seed/mace co-products, example yields |
| `iisir-cardamom-2022` | extension_guidance | ICAR-IISR, *Cardamom*, https://spices.res.in/storage/app/public/pdfs/CARDAMOM/1ENG-2022.pdf | establishment, harvest, washing, curing and moisture |
| `fao-cardamom-curing` | official_guidance | FAO, *Asia Industrial and Institutional Stove Compendium*, https://www.fao.org/4/ad378e/AD378E07.htm | batch curing, moisture and energy relevance |
| `spices-board-cardamom-cost-2021` | dataset | Spices Board India, *Cost of Cultivation of Cardamom (Kerala)*, https://indianspices.com/sites/default/files/SMALLCARDAMOM2021_new.pdf | phase/activity coverage |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O |
| `cerutti-perennial-crops-2016` | literature | Cerutti et al., Journal of Cleaner Production 127 (2016) 555–561, https://doi.org/10.1016/j.jclepro.2016.04.031 | perennial establishment attribution |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines* | allocation hierarchy and sensitivity |
