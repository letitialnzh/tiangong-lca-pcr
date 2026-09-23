---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cottonseed-other
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 其他棉籽

## 1. 范围与适用性

本 PCR 适用于棉花轧花时从籽棉中分离、在轧花厂门或农场门交付的完整带绒非播种用棉籽。由于皮棉与棉籽在轧花前不可分且均为有意联产品，边界包括棉花种植、收获、籽棉处理和轧花。数据集须声明品种、地区、作物年度、灌溉、收获方式、轧花技术、棉籽湿度、杂质、脱绒状态、储存/通风、分配方法和终点。

排除播种用棉籽、机械或化学脱绒种子、短绒、棉籽壳、油、饼粕、压榨、萃取、饲料配制和下游运输。脱绒商品须使用其他路线和身份。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cottonseed-other |
| classification_refs | CPC 3.0: 01432 Cottonseed, other |
| covered_products | 轧花分离且保留天然短绒的完整非播种用棉籽 |
| excluded_products | 播种或脱绒棉籽；皮棉、短绒、壳、油、饼粕和配合饲料 |
| representative_product | 非播种用途的轧花毛棉籽 |
| production_route | 棉花受控种植和收获、籽棉处理与清理、机械轧花分离 |
| market_state | 轧花厂门/农场门完整毛棉籽，声明湿度、杂质、储存、批次、等级和交付点 |

雨养/灌溉、机采方式、锯齿/皮辊轧花和短期通风储存属于替代路线；没有产量权重证据不得混合。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在轧花厂分离的完整毛绒非播种用棉籽 |
| How much | 1,000 kg 收货状态棉籽 |
| How well | 声明品种、作物年度、湿基水分、杂质、毛绒/脱绒状态、等级、储存/通风和验收规范 |
| How long or cycle | 一个匹配作物周期与轧花季或可追溯轧花批次 |
| reference_flow_link | `gin_run_cottonseed_output` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Cottonseed, other, production mix at farm gate, fresh unprocessed `5ec72013-512e-4bb6-a5e6-648551f35d9d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 非播种用途；完整毛绒状态；排除脱绒；品种；作物年度；地区；湿基水分；杂质；等级；储存/通风；轧花技术；交付点；分配 |
| Binding | `fixed` |

固定 UUID 仅适用于该鲜品/未加工农场门身份下的完整非播种棉籽。

## 4. 测量与单位规则

| rule_id | 适用对象 | 所需属性 | 所需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 参考棉籽 | Mass | kg | 报告收货质量和实测湿基水分，并保留干物质换算。 |
| `field_to_seed_cotton_conversion` | 田间清单 | Area and mass | ha and kg | 先将面积与同周期验收籽棉核对，再换算至轧花批次。 |
| `gin_mass_balance` | 轧花 | Mass | kg | 核对籽棉、皮棉、棉籽、利用物、废物及水分变化。 |
| `nutrient_content_basis` | 养分投入 | Product and nutrient mass | kg product; kg N; kg P2O5; kg K2O | 保留产品、配方、含量和基准且不得重复计量。 |
| `allocation_value_basis` | 联产品 | Mass and economic value | kg and declared currency | 使用匹配数量和代表性价格，并披露质量调整和敏感性。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 作物周期开始时已整备棉田，种子与外购投入跨越边界 |
| starting_condition_role | 受控棉花生物生产起点 |
| product_classification_scope | CPC 01432 非播种用棉籽 |
| recursive_input_rule | 播种种子链接独立种子生产数据集，不递归至本 PCR |
| upstream_dataset_requirement | 兼容的种植材料、养分、植保、灌溉、能源、水、包装和处理数据集 |
| disclosure | 地区；品种；日期；面积；产量；灌溉；收获；籽棉储存；轧花；批次平衡；水分；杂质；毛绒状态；储存；联产品价格；分配；交付点 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 种植和收获 | 包括建植、田间管理、适用灌溉、收获和直接田间排放，至籽棉交接。 | `feedipedia-cottonseed`; `ncc-seedcotton-handling` |
| `boundary_ginning` | 轧花 | 包括接收、卸料、干燥/调湿、清理、轧花分离、输送、场内通风储存和交付前处理。 | `cotton-ginners-handbook-2016`; `cottonseed-storage-2018` |
| `boundary_product_state` | 参考产品 | 参考棉籽为完整毛棉籽；排除脱绒、压榨、萃取、粕/饲料及播种种子处理。 | `feedipedia-cottonseed`; `cottonseed-storage-2018` |
| `boundary_route_alternatives` | 所有路线 | 除非有产量权重，否则种植、收获、轧花和储存替代路线分别建模。 | `cotton-ginners-handbook-2016` |
| `boundary_single_period` | 所有路线 | 每个匹配作物与轧花季仅使用一个报告期；不允许库存跨期或跨期归属。 |  |
| `boundary_direct_emissions` | 田间和轧花 | 包括与活动记录匹配的受控土壤排放和报告的轧花颗粒物。 | `ipcc-2019-managed-soils`; `cotton-ginners-handbook-2016` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cotton_field_production` | 棉花种植与收获 | required | always | 受控生产与籽棉收获 | 公顷和验收籽棉质量 |
| `cotton_ginning` | 籽棉接收、清理与轧花 | required | always | 通过材料处理分离皮棉和棉籽；声明批次模式或连续运行以及替代技术路线差异 | 投入批次与核对输出 |
| `cottonseed_handling_storage` | 棉籽初级处理、分级、稳定化、包装与储存 | conditional | 交付前发生 | 交付前进行初级处理、分级/分选、保鲜/稳定化和包装呈现 | 投入批次与验收终端质量 |

### Process: 棉花种植与收获 (`cotton_field_production`)

#### 输入

##### 产品流

###### 棉花播种用种 (`cotton_planting_seed_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Cottonseed, seed for planting `5ec327e3-1046-4478-9010-0733b798aa56`
- 流属性/单位: Mass / kg
- 绑定: `fixed`
- 数量规则: measured seed mass by cultivar, treatment and sowing event
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: per cultivated hectare and crop cycle
- 基准类型: 作物周期（`crop_cycle`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_field_activity`
- 数量范围：Provisional sowing-rate screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2
  - 上限：40
  - 单位：kg/ha
  - 基准：one crop cycle; actual establishment system governs
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入 (`field_nutrient_inputs`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Agricultural nutrient and fertilizer supply
- 流属性/单位: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5 and kg K2O
- 绑定: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set 版本: `0.3.0`
- 数量规则: collect each applied product once and calculate nutrients from assay
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per cultivated hectare and crop cycle
- 基准类型: 作物周期（`crop_cycle`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_field_activity`
- 数量范围：Provisional nutrient-product screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1500
  - 单位：kg product/ha
  - 基准：one crop cycle; nutrient composition remains explicit
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水 (`field_irrigation_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Irrigation water supply
- 流属性/单位: Volume / m3
- 绑定: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set 版本: `0.2.0`
- Flow Set 组: `irrigation-water`
- 数量规则: metered or calculated applied irrigation water
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per cultivated hectare and crop cycle
- 基准类型: 作物周期（`crop_cycle`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_field_activity`
- 数量范围：Provisional irrigation screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15000
  - 单位：m3/ha
  - 基准：one crop cycle; rainfed route may be zero
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械能源 (`field_energy_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Energy supply for mobile field machinery
- 流属性/单位: Carrier quantity or energy / kg, L, kWh or MJ
- 绑定: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- Flow Set 组: `mobile-machinery-fuel`
- 数量规则: measured carrier or contractor activity with documented conversion
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per cultivated hectare and crop cycle
- 基准类型: 作物周期（`crop_cycle`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_field_activity`
- 数量范围：Provisional machinery-energy screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：L diesel-equivalent/ha
  - 基准：one crop cycle; actual carrier remains explicit
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保制剂 (`field_crop_protection_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Crop-protection formulation used in cotton production
- 流属性/单位: Mass or volume / kg or L
- 数量规则: measured formulation by product and application event
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: per cultivated hectare and crop cycle
- 基准类型: 作物周期（`crop_cycle`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_field_activity`
- 数量范围：Provisional formulation screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg formulation/ha
  - 基准：one crop cycle; actual products govern
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已收获籽棉 (`harvested_seed_cotton_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Harvested seed cotton before ginning
- 流属性/单位: Mass / kg
- 数量规则: measured accepted mass with moisture and trash fraction
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per cultivated hectare and crop cycle
- 基准类型: 作物周期（`crop_cycle`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_harvest_balance`
- 数量范围：Provisional seed-cotton yield screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：300
  - 上限：10000
  - 单位：kg/ha
  - 基准：accepted as-harvested seed cotton for one crop cycle
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 田间残余物和拒收籽棉 (`field_residue_waste_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Cotton field residues and rejected seed cotton
- 流属性/单位: Mass / kg
- 数量规则: field balance by residue class, removal and fate
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per hectare and crop cycle
- 基准类型: 作物周期（`crop_cycle`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_harvest_balance`
- 数量范围：Provisional exported-residue screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/ha
  - 基准：material physically leaving the field boundary
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 向空气排放的一氧化二氮 (`field_n2o_air_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Nitrous oxide, emissions to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg N2O
- 绑定: `fixed`
- 数量规则: applicable method for direct and indirect nitrogen pathways
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per hectare and crop cycle
- 基准类型: 氮投入（`n_input`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_field_emissions`
- 来源: `ipcc-2019-managed-soils`
- 数量范围：Broad method-result screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/ha
  - 基准：one crop cycle; method result governs
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 向空气排放的氨 (`field_ammonia_air_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Ammonia, emissions to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg NH3
- 绑定: `fixed`
- 数量规则: method calculation by nutrient product and event
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per hectare and crop cycle
- 基准类型: 氮投入（`n_input`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_field_emissions`
- 来源: `emep-eea-2023-guidebook`
- 数量范围：Broad method-result screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg NH3/ha
  - 基准：one crop cycle; method result governs
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 向水体排放的硝酸盐 (`field_nitrate_water_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Nitrate, emissions to water, unspecified `fe0acd60-3ddc-11dd-aa31-0050c2490048`
- 流属性/单位: Mass / kg nitrate
- 绑定: `fixed`
- 数量规则: monitored loss or method calculation from matched nitrogen and water records
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per hectare and crop cycle
- 基准类型: 氮投入（`n_input`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_field_emissions`
- 来源: `ipcc-2019-managed-soils`
- 数量范围：Broad method-result screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1500
  - 单位：kg nitrate/ha
  - 基准：one crop cycle; method result governs
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### Process: 籽棉接收、清理与轧花 (`cotton_ginning`)

#### 输入

##### 产品流

###### 已收获籽棉 (`seed_cotton_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Harvested seed cotton before ginning
- 流属性/单位: Mass / kg
- 数量规则: receiving-scale mass with moisture, trash, origin and lot link
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per gin lot
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_gin_lot_balance`
- 数量范围：Seed-cotton input balance
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1500
  - 上限：5000
  - 单位：kg/1,000 kg cottonseed
  - 基准：incoming as-received seed cotton for a reconciled gin lot
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 轧花能源供应 (`gin_energy_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Gin energy supply
- 流属性/单位: Energy or carrier quantity / kWh, MJ, kg, L or m3
- 绑定: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: measured meters and carrier purchases allocated once to the lot
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per 1,000 kg accepted cottonseed
- 基准类型: 过程输出（`process_output`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_gin_utility`
- 数量范围：Provisional gin-energy screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kWh-equivalent/1,000 kg cottonseed
  - 基准：receiving through separation and conveying
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 轧花工艺用水 (`gin_process_water_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Process water supply
- 流属性/单位: Volume / m3
- 绑定: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set 版本: `0.2.0`
- Flow Set 组: `process-water`
- 数量规则: metered or batch-calculated net water entering the gin
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per 1,000 kg accepted cottonseed
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_gin_utility`
- 数量范围：Provisional process-water screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m3/1,000 kg cottonseed
  - 基准：gin process only; inactive route may be zero
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 轧花毛棉籽 (`gin_run_cottonseed_output`)

将验收的完整毛棉籽作为有意联产品记录，并保持批次可追溯。

- 选定流: Cottonseed, other, production mix at farm gate, fresh unprocessed `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- 流属性/单位: Mass / kg
- 绑定: `fixed`
- 数量规则: measured accepted mass at declared moisture, foreign matter and gate
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per gin lot; scale to 1,000 kg reference
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_gin_lot_balance`
- 来源: `cottonseed-storage-2018`
- 数量范围：Cottonseed-to-lint co-product screen
  - 范围角色：典型范围（`typical_range`）
  - 下限：1100
  - 上限：1800
  - 单位：kg cottonseed/1,000 kg lint
  - 基准：same reconciled gin lot
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`cottonseed-storage-2018`

###### 皮棉联产品 (`cotton_lint_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Ginned cotton lint
- 流属性/单位: Mass / kg
- 数量规则: measured bale mass linked to the gin lot
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per gin lot and 1,000 kg cottonseed
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_gin_lot_balance`
- 数量范围：Lint co-product screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：400
  - 上限：1000
  - 单位：kg lint/1,000 kg cottonseed
  - 基准：same reconciled gin lot
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 轧花杂质和拒收物 (`gin_residual_waste_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Cotton gin trash and rejected material
- 流属性/单位: Mass / kg
- 数量规则: measured or reconciled mass by material class and destination
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per 1,000 kg accepted cottonseed
- 基准类型: 过程输出（`process_output`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_gin_lot_balance`
- 数量范围：Provisional gin-residual screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/1,000 kg cottonseed
  - 基准：residuals leaving the gin lot balance
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 轧花颗粒物排放 (`gin_particulate_air_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Reported particulate matter from cotton ginning to air
- 流属性/单位: Mass / kg
- 数量规则: monitoring or permit method by particle-size fraction
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per 1,000 kg accepted cottonseed
- 基准类型: 过程输出（`process_output`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_gin_emissions`
- 来源: `cotton-ginners-handbook-2016`
- 数量范围：Provisional particulate screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/1,000 kg cottonseed
  - 基准：reported controlled or uncontrolled basis
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### Process: 棉籽初级处理、分级、稳定化、包装与储存 (`cottonseed_handling_storage`)

#### 输入

##### 产品流

###### 轧花毛棉籽转移 (`cottonseed_transfer_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Cottonseed, other, production mix at farm gate, fresh unprocessed `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- 流属性/单位: Mass / kg
- 绑定: `fixed`
- 数量规则: measured incoming fuzzy-cottonseed mass, moisture and temperature
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per storage lot
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_storage_lot`
- 数量范围：Storage-lot input balance
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1200
  - 单位：kg/1,000 kg accepted cottonseed
  - 基准：incoming wet mass before loss and rejection
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 通风和输送能源 (`storage_energy_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Energy supply for cottonseed handling and aeration
- 流属性/单位: Energy or carrier quantity / kWh, MJ, kg, L or m3
- 绑定: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: metered energy or runtime-power calculation
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per 1,000 kg accepted cottonseed
- 基准类型: 过程输出（`process_output`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_storage_lot`
- 数量范围：Provisional storage-energy screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh-equivalent/1,000 kg cottonseed
  - 基准：declared storage period; no-storage route may be zero
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 棉籽包装 (`cottonseed_packaging_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Packaging function for cottonseed hand-off
- 流属性/单位: Mass or item count / kg or item
- 绑定: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set 版本: `0.2.0`
- 数量规则: measured packaging divided by verified reuse cycles
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: per 1,000 kg accepted cottonseed
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_storage_lot`
- 数量范围：Provisional packaging screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/1,000 kg cottonseed
  - 基准：packaging crossing the gate; bulk route may be zero
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收储存棉籽 (`accepted_cottonseed_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Cottonseed, other, production mix at farm gate, fresh unprocessed `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- 流属性/单位: Mass / kg
- 绑定: `fixed`
- 数量规则: measured accepted mass with moisture, temperature, foreign matter and duration
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 1,000 kg reference product
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_storage_lot`
- 来源: `cottonseed-storage-2018`
- 数量范围：Reference output check
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：reference flow at final declared gate
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`pcr-reference-definition`

##### 废物流

###### 储存损失和拒收棉籽 (`storage_loss_waste_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流: Rejected or lost cottonseed from storage
- 流属性/单位: Mass / kg
- 数量规则: mass-balance difference supported by inspection and disposition
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: per 1,000 kg accepted cottonseed
- 基准类型: 过程输出（`process_output`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_storage_lot`
- 数量范围：Provisional storage-loss screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg/1,000 kg accepted cottonseed
  - 基准：declared storage period and moisture basis
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_gin_coproducts` | cultivation and ginning | 将皮棉和棉籽视为有意联产品。先细分可计量过程负荷，其余不可分负荷按匹配数量和代表性价格进行经济分配。 | `cottonseed-storage-2018` |
| `allocation_sensitivity` | lint/cottonseed | 报告质量分配敏感性及价格、币种、期间、水分、等级和价值份额；不得默认替代信用。 |  |
| `allocation_residuals` | gin/storage outputs | 废物不获得联产品信用；仅在有意用途、正价值和独立交接时将回收物视为产品。 |  |
| `allocation_shared_assets` | shared infrastructure | 按实测使用、运行时间、吞吐量或其他因果驱动分摊，每项负荷只计一次。 |  |
| `allocation_rework_rejects` | rejects | 返工物返回原节点；降级可售输出仍为产品，丢弃物仍为废物。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity` | `cotton_field_production` | inputs | collected | field; area; cultivar; dates; product; assay; amount; meter; carrier | invoices, logs and meters | ha; kg; L; m3; kWh; MJ | each event | full crop cycle | each field/farm | sum by field and identity | invoices, calibration, logs, field map |
| `cp_harvest_balance` | `cotton_field_production` | seed cotton/residues | collected/calculated | field; mass; module; moisture; trash; reject; residue; fate | scales, tickets, samples, balance | kg; % | each harvest/lot | full harvest | each field/harvest unit | sum accepted lot; separate fate | scale checks, tickets, samples |
| `cp_field_emissions` | `cotton_field_production` | soil emissions | calculated | N products; assay; timing; residues; soil; climate; irrigation; factors | approved method on matched records | kg | crop cycle | full crop cycle | each field | calculate pathways then sum | input trace, factors, worksheet |
| `cp_gin_lot_balance` | `cotton_ginning` | input/outputs/residuals | collected/calculated | lot; origin; input/output mass/moisture/grade; reject; destination | scales, sampling, reconciliation | kg; %; item | each lot/shift | full campaign | each gin line/site | reconcile lot then aggregate | calibration, tickets, grade, balance |
| `cp_gin_utility` | `cotton_ginning` | energy/water | collected/calculated | meter; purchase; runtime; power; water; period | meters, invoices, runtime | kWh; MJ; kg; L; m3 | shift/bill | full campaign | each gin/meter | allocate shared total once | calibration, invoice, log |
| `cp_gin_emissions` | `cotton_ginning` | particulate | measured/calculated | source; control; fraction; concentration; flow; runtime; factor | test or approved permit method | kg; mg/m3; m3; h | test/period | representative campaign | each source | calculate by source/fraction without overlap | report, permit, controls, runtime |
| `cp_storage_lot` | `cottonseed_handling_storage` | cottonseed/energy/package/loss | collected/calculated | lot; mass; moisture; temperature; foreign matter; duration; runtime; package; reject | scales, probes, meters, logs | kg; %; C; h; kWh; item | receipt/daily/dispatch | full storage period | each bin/pile/site | reconcile input, accepted, reject, moisture | calibration, monitoring, inspection, ticket |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_field_normalization` | field flows | field flow / accepted seed-cotton mass × seed-cotton need per 1,000 kg cottonseed | field flow, area, yield, gin balance | normalized field flow |  |
| `calc_gin_balance` | gin lot | input = lint + cottonseed + recovered outputs + waste + moisture reconciliation | matched mass/moisture | reconciled yield | `cotton-ginners-handbook-2016` |
| `calc_storage_balance` | storage | incoming dry matter = accepted + rejected/lost dry matter ± justified uncertainty | mass and moisture | accepted seed/loss | `cottonseed-storage-2018` |
| `calc_economic_allocation` | co-products | share_i = quantity_i × price_i / sum(quantity × price) | quantities, grades, prices | burden shares |  |
| `calc_shared_services` | shared assets | total service × documented causal share, counted once | total and driver | node/lot amount |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference | Prove non-planting, whole/fuzzy state, cultivar, crop year, moisture, foreign matter, grade, storage and gate. | specification, lot ticket, inspection |
| `dq_traceability` | chain | Link fields to seed-cotton lots and matched gin outputs; disclose mixed origins. | ids, module tags, tickets |
| `dq_mass_balance` | gin/storage | Reconcile wet and dry balances and investigate gaps beyond justified uncertainty. | scales, moisture tests, balance |
| `dq_allocation` | co-products | Retain quantities, grades, prices, period, currency, shares and mass sensitivity. | sales/market evidence, worksheet |
| `dq_temporal` | all | Cover a complete crop cycle and gin/storage period; disclose proxies and abnormal events. | dates and exception log |
| `dq_completeness` | all cards | Report applicable value or documented zero/not-applicable and retain concrete selections for sets. | completeness and binding evidence |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference | Reject planting, delinted or crushed seed and derived products; require whole fuzzy non-planting cottonseed and qualifiers. |  |
| `validate_process_chain` | map | Require cultivation/harvest and ginning; include storage only when before gate and impose no inactive-route amount. |  |
| `validate_gin_balance` | ginning | Require matched input and complete lint, cottonseed, useful output, waste and moisture reconciliation. | `cotton-ginners-handbook-2016` |
| `validate_coproduct_allocation` | crop/gin | Require explicit lint/cottonseed attribution, economic inputs and mass sensitivity; reject double allocation. |  |
| `validate_flow_sets` | inputs | Require compatible selection evidence; nutrients remain one set-level card per process with no group/fixed UUID. |  |
| `validate_ranges` | cards | Require role, bounds, unit, basis and evidence; lower <= upper and inactive conditional routes impose no amount. |  |
| `validate_reject_routing` | rejects | Route each off-spec stream once and exclude rejected mass from accepted output. |  |
| `validate_shared_burdens` | shared services | Require a causal driver and prove each shared burden is counted once. |  |

## 10. 发布数据集配置

| Field | Value |
| --- | --- |
| dataset_role | foreground cottonseed production dataset with explicit co-product attribution |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | LCA of whole fuzzy non-planting cottonseed at the declared gin/farm gate |
| excluded_use | planting or delinted seed; lint, linters, hulls, oil, cake, meal, crushing, extraction or feed manufacture |
| required_metadata | cultivar; geography; crop year; irrigation; harvest; gin; lot; moisture; foreign matter; fuzz state; storage; gate; balance; allocation |
| required_quality_disclosure | coverage, uncertainty, proxies, mixed origins, unresolved identities, allocation sensitivity and representativeness |
| update_trigger | material change in region, production, harvest, gin, yield, moisture/storage, product state, price or allocation |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `feedipedia-cottonseed` | extension_guidance | Feedipedia, Cotton seeds, https://feedipedia.review.fao.org/node/742 | identity, route, uses and exclusions |
| `cotton-ginners-handbook-2016` | handbook | National Cotton Council, Cotton Ginners Handbook, https://journal.cotton.org/article/20-2-154/ | gin boundary, separation, moisture, energy, waste and air emissions |
| `cottonseed-storage-2018` | literature | Ashley et al., Cottonseed Air-Handling and Storage Requirements, Journal of Cotton Science 22:47-59, https://www.cotton.org/journal/2018-22/1/47.cfm | co-product ratio, moisture, aeration, handling and storage |
| `ncc-seedcotton-handling` | extension_guidance | National Cotton Council, Recommendations for Handling Seedcotton Exposed to Excessive Rainfall, https://www.cotton.org/tech/quality/rainfallandseedcotton.cfm | harvest moisture, seed-cotton storage and seed condition |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11 | managed-soil emissions |
| `emep-eea-2023-guidebook` | method_factor | EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023 | fertilizer ammonia |
| `pcr-reference-definition` | standard | This PCR, Reference Flow section | exact 1,000 kg output range |
