---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.unmanufactured-tobacco
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 未加工烟草

## 1. 范围与适用性

本 PCR 覆盖在田间/农场门交付的采收青烟叶，或经声明的晾制、火管烘制、烟道烘制或晒制路线并完成分级包装后交付的未加工调制烟叶。一个数据集只能选择一种终端市场状态和门点。卷烟、雪茄、吸用混合物、切丝、均质或再造烟草、尼古丁提取及其他烟草或尼古丁制成品均不在范围内。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.unmanufactured-tobacco |
| classification_refs | CPC 3.0: 01970 Unmanufactured tobacco |
| covered_products | fresh harvested tobacco leaf; air-, fire-, flue-, or sun-cured leaf remaining unmanufactured |
| excluded_products | manufactured tobacco and nicotine products, including cut, blended, reconstituted, extracted, smoking, oral, and heated products |
| representative_product | 处于一种已声明青叶或调制状态的烟叶 |
| production_route | managed cultivation and harvest, followed conditionally by exactly one curing route and grading/packing |
| market_state | green leaf at field/farm gate or cured graded leaf at curing/farm hand-off; state, curing method, moisture, grade, variety, crop year, geography, and package form declared |

青烟叶与调制烟叶路线可同属本类别，但在单个数据集中必须作为互斥的终端参考。晾制、火管烘制、烟道烘制和晒制是替代技术，不得默认同时发生。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 所选终端门点的未加工烟叶 |
| How much | 1,000 kg 接收状态烟叶 |
| How well | 已声明的青叶或调制状态、适用时的调制方法、水分、等级、品种、产地、作物年份和验收规格 |
| How long or cycle | 一个作物周期；调制烟叶还包括匹配的调制和分级批次 |
| reference_flow_link | 青烟叶采用 `green_leaf_output`，调制烟叶采用 `graded_cured_leaf_output` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | 未加工烟草，生产混合，农场门，鲜叶未加工 `e903dd1d-1d82-41e7-9526-2ae250746688` 仅用于青烟叶；调制烟叶标识未解析 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 终端烟叶状态；调制方法或不适用；品种/市场类别；地理；作物年份；水分基准；等级；包装形式；门点；纳入的操作 |
| Binding | 仅青烟叶为 `fixed`；调制烟叶路线未解析 |

固定的鲜叶 UUID 不得用于标识调制烟叶。

## 4. 计量与单位规则

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | terminal leaf | Mass | kg | Report as-received mass and measured moisture; retain moisture basis for dry-matter comparisons. |
| `area_to_reference_conversion` | field flows | activity-specific property | activity-specific unit | Normalize same-cycle field totals first to harvested green leaf, then use matched curing and grading balances for cured leaf. |
| `nutrient_content_basis` | nutrient inputs | nutrient mass | kg N, kg P2O5, kg K2O | Preserve product mass, formulation, assay, and elemental/oxide basis separately. |
| `curing_energy_basis` | curing energy | energy or carrier mass | MJ, kWh, kg, m3 | Preserve carrier and measured amount; document every conversion to delivered energy. |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | prepared field or transplant bed at crop-cycle start, with planting material and purchased inputs crossing the foreground boundary |
| starting_condition_role | start of managed tobacco leaf production |
| product_classification_scope | fresh and cured unmanufactured tobacco leaf corresponding to CPC 01970 |
| recursive_input_rule | tobacco seed/seedlings link to distinct propagation datasets and shall not recurse to this harvested-leaf PCR |
| upstream_dataset_requirement | compatible datasets for planting material, nutrients, crop protection, irrigation, fuels, electricity, curing energy, and packaging |
| disclosure | variety; nursery boundary; crop dates; geography; area; irrigation; yield; residue fate; terminal state/gate; curing method/fuel; barn; batches; moisture; grade; rejects; packaging; allocation |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | all routes | Include nursery or purchased transplant input, field preparation, transplanting, management, harvest, and direct field emissions through green-leaf hand-off. | `who-tobacco-environment-2017` |
| `boundary_curing_route` | cured route | Include exactly the declared air, fire, flue, or sun curing route, barn/structure service, energy, drying loss, combustion emissions, handling, and conditioning. | `who-tobacco-environment-2017` |
| `boundary_grading_packing` | cured route | Include pre-gate grading and packing; distinguish accepted grades, downgraded useful leaf, rework, rejects, and waste. | `who-tobacco-environment-2017` |
| `boundary_manufacturing_exclusion` | all routes | Stop before product manufacture, extraction, cutting, blending, reconstitution, distribution, retail, and use. |  |
| `boundary_direct_emissions` | soil and curing combustion | Include managed-soil and foreground combustion emissions from the same activity records used for nutrients and fuels. | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`; `ipcc-2006-stationary-combustion` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | 作用 | 定量参照 |
| --- | --- | --- | --- | --- | --- |
| `tobacco_field_production` | Tobacco field production and harvest | required | always | managed biological production and separate leaf harvest | hectare and harvested green-leaf mass for 一个作物周期 |
| `tobacco_leaf_curing` | Tobacco leaf curing | conditional | terminal product is cured leaf | stabilize leaf by one declared curing technology | incoming green leaf and accepted cured leaf per batch |
| `cured_leaf_grading_packing` | Cured-leaf grading and packing | conditional | cured leaf is graded, reworked, or packed before hand-off | grade and present cured leaf | incoming and accepted packed-leaf mass |

### 过程：烟草田间生产与采收 (`tobacco_field_production`)

#### 输入

##### 产品流

###### 烟草种子或幼苗 (`tobacco_planting_material_input`)

平台仅返回通用的 CPC 01990 幼苗标识，因此烟草专用种植材料标识仍未解析。

- 选定流： 烟草种子或幼苗
- 流属性/单位： Mass or number of items / kg or item
- 数量规则： 实测种子质量或计数的移栽幼苗
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每栽培公顷并用同周期产量换算
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_records`
- 数量范围： Provisional transplant-density screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 8,000
  - 上限： 40,000
  - 单位： seedlings/ha
  - 基准： one transplanted crop cycle; direct-seeded systems use actual seed basis
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入 (`tobacco_field_agricultural_nutrient_inputs`)

本过程的所有矿质肥料、有机肥和含养分改良剂仅记录在这一张合并卡中。保留每种实际产品、配方、含量、施用事件和数量，不得重复计算复合产品。

- 选定流： 农业养分与肥料供应
- 流属性/单位： Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- 绑定： `parameterized`
- Flow Set： `flow-set.agricultural-nutrient-supply`
- Flow Set 版本： `0.3.0`
- 数量规则： collect each product once and calculate declared nutrients; foreground generation expands products to verified exchanges
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每公顷并换算至 1,000 kg 终端烟叶
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_records`
- 数量范围： Provisional nitrogen screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 300
  - 单位： kg N/ha
  - 基准： 一个作物周期
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）
- 数量范围： Provisional phosphorus screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 250
  - 单位： kg P2O5/ha
  - 基准： 一个作物周期
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）
- 数量范围： Provisional potassium screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg K2O/ha
  - 基准： 一个作物周期
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 灌溉水 (`tobacco_irrigation_water_input`)

记录施用于烟田的水量，并区分灌溉和降雨。

- 选定流： 灌溉水供应
- 流属性/单位： Volume / m3
- 绑定： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set 版本： `0.2.0`
- Flow Set 分组： `irrigation-water`
- 数量规则： 计量或计算的施用水量；雨养田以证据记录为零
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每公顷并换算至终端烟叶
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_records`
- 数量范围： Provisional irrigation screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 8,000
  - 单位： m3/ha
  - 基准： 一个作物周期
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 田间机械能源 (`tobacco_field_energy_input`)

记录整地、移栽、田间管理和采收移动机械消耗的能源。

- 选定流： 田间移动机械能源供应
- 流属性/单位： Carrier quantity or energy / kg, L, or MJ
- 绑定： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- Flow Set 分组： `mobile-machinery-fuel`
- 数量规则： 保留载体的实测燃料量或承包作业量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每公顷并换算至终端烟叶
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_field_records`
- 数量范围： Provisional field-energy screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 250
  - 单位： L diesel-equivalent/ha
  - 基准： 一个作物周期; actual carrier remains explicit
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 植保制剂 (`tobacco_crop_protection_input`)

逐项记录实际植保产品。检索仅得到通用或特定路线的聚合项，因此不绑定固定 UUID。

- 选定流： 烟草生产用植保制剂
- 流属性/单位： Mass of formulation / kg
- 数量规则： measured formulation by product/event, preserving active ingredient and concentration
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每公顷并换算至终端烟叶
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_records`
- 数量范围： Provisional formulation screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 50
  - 单位： kg formulation/ha
  - 基准： 一个作物周期
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采收青烟叶 (`green_leaf_output`)

将合格采收青烟叶记录为终端产品，或记录为转入调制的实测中间产品。

- 选定流： 未加工烟草，生产混合，农场门，鲜叶未加工 `e903dd1d-1d82-41e7-9526-2ae250746688`
- 流属性/单位： Mass / kg
- 绑定： `fixed`
- 数量规则： 在声明水分、等级和门点下实测的合格青烟叶质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per hectare; scale to 1,000 kg only when green leaf is terminal
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_harvest_records`
- 数量范围： Provisional green-leaf yield screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 500
  - 上限： 8,000
  - 单位： kg/ha
  - 基准： 一个作物周期
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

###### 田间残余物和淘汰叶 (`field_residue_waste_output`)

按去向记录非产品茎秆、根、淘汰叶和采收损失。

- 选定流： 烟草田间残余物和淘汰青叶
- 流属性/单位： Mass / kg
- 数量规则： 按残余物类别和去向实测或平衡的质量
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1,000 kg harvested green leaf
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_harvest_records`
- 数量范围： Provisional residue screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1,500
  - 单位： kg/1,000 kg harvested green leaf
  - 基准： all non-product biomass and rejected leaf by fate
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

###### 排放到空气的一氧化二氮 (`field_n2o_air_output`)

将计算的管理土壤一氧化二氮记录到已确认的未指定空气介质。

- 选定流： Nitrous oxide, emissions to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位： Mass / kg N2O
- 绑定： `fixed`
- 数量规则： calculate from collected N inputs and residues with an applicable method
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每公顷并换算至终端烟叶
- 基准类型： 氮投入（`n_input`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_field_emissions`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Broad method-result screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg N2O/ha
  - 基准： 一个作物周期; method calculation governs
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 排放到空气的氨 (`field_ammonia_air_output`)

将计算的肥料相关氨挥发记录到已确认的未指定空气介质。

- 选定流： Ammonia, emissions to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位： Mass / kg NH3
- 绑定： `fixed`
- 数量规则： calculate by nutrient product, method, timing, weather, and factor
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每公顷并换算至终端烟叶
- 基准类型： 氮投入（`n_input`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_field_emissions`
- 来源： `emep-eea-2023-guidebook`
- 数量范围： Broad method-result screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 200
  - 单位： kg NH3/ha
  - 基准： 一个作物周期; method calculation governs
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 排放到水体的硝酸盐 (`field_nitrate_water_output`)

将计算或监测的硝酸盐损失记录到已确认的未指定水体介质。

- 选定流： Nitrate, emissions to water, unspecified `fe0acd60-3ddc-11dd-aa31-0050c2490048`
- 流属性/单位： Mass / kg nitrate
- 绑定： `fixed`
- 数量规则： calculate only with applicable leaching/runoff method or monitored balance
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每公顷并换算至终端烟叶
- 基准类型： 氮投入（`n_input`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_field_emissions`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Broad method-result screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1,000
  - 单位： kg nitrate/ha
  - 基准： 一个作物周期; selected method governs
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

### 过程：烟叶调制 (`tobacco_leaf_curing`)

#### 输入

##### 产品流

###### 进入调制的青烟叶 (`curing_green_leaf_input`)

记录转入所选调制路线的实测采收青烟叶批次。

- 选定流： 未加工烟草，生产混合，农场门，鲜叶未加工 `e903dd1d-1d82-41e7-9526-2ae250746688`
- 流属性/单位： Mass / kg
- 绑定： `fixed`
- 数量规则： 实测青烟叶批次质量和水分
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per batch and converted to 1,000 kg cured leaf
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_curing_records`
- 数量范围： Green-to-cured mass ratio
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 2
  - 上限： 12
  - 单位： kg green leaf/kg accepted cured leaf
  - 基准： 声明水分状态的匹配批次
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 调制能源载体与公用工程 (`curing_energy_input`)

记录实际电力、外购热或燃料。晾制或晒制可为零能源投入；火管或烟道烘制必须保留实际能源载体。本参数化 set 级卡不带固定 UUID。

- 选定流： 烟叶调制能源供应
- 流属性/单位： Carrier quantity or energy / kg, m3, kWh, or MJ
- 绑定： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： measured carrier/electricity by batch, expanded to verified exchanges in foreground generation
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： per 1,000 kg accepted cured leaf
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_curing_records`
- 数量范围： Provisional curing-energy screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 40,000
  - 单位： MJ/1,000 kg accepted cured leaf
  - 基准： zero may apply to passive routes; actual energy replaces screen
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调制烟叶 (`cured_leaf_output`)

不得复用鲜叶 UUID。

- 选定流： 未加工调制烟叶
- 流属性/单位： Mass / kg
- 数量规则： 在声明水分和调制方法下实测的调制烟叶质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： per batch and converted to 1,000 kg accepted cured leaf
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_curing_records`
- 数量范围： Cured output fraction
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0.08
  - 上限： 0.50
  - 单位： kg cured leaf/kg incoming green leaf
  - 基准： 声明水分状态的匹配批次
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

###### 调制淘汰物 (`curing_reject_waste_output`)

记录调制期间淘汰的烟叶及各非有用去向，并与蒸发水分开。

- 选定流： 烟叶调制淘汰物和无用叶
- 流属性/单位： Mass / kg
- 数量规则： measured rejects plus reconciled non-water loss by fate; evaporated water is not waste
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1,000 kg accepted cured leaf
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_curing_records`
- 数量范围： Provisional curing-reject screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 300
  - 单位： kg/1,000 kg incoming green leaf
  - 基准： matched batch, excluding evaporated water
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

###### 调制产生的化石二氧化碳 (`curing_fossil_co2_air_output`)

仅记录现场调制燃烧产生的化石二氧化碳。

- 选定流： Carbon dioxide (fossil), emissions to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass / kg CO2
- 绑定： `fixed`
- 数量规则： fuel quantity × carrier-specific carbon and oxidation factors; zero without on-site fossil combustion
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： per 1,000 kg accepted cured leaf
- 基准类型： 燃料清单（`fuel_inventory`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_curing_records`
- 来源： `ipcc-2006-stationary-combustion`
- 数量范围： Route-conditional combustion screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 5,000
  - 单位： kg fossil CO2/1,000 kg accepted cured leaf
  - 基准： zero without fossil combustion
  - 基准类型： 燃料清单（`fuel_inventory`）
  - 证据类型： 推理估算（`reasoned_estimate`）

### 过程：调制烟叶分级与包装 (`cured_leaf_grading_packing`)

#### 输入

##### 产品流

###### 进入分级的调制烟叶 (`grading_cured_leaf_input`)

记录转入分级包装的实测调制烟叶批次。

- 选定流： 未加工调制烟叶
- 流属性/单位： Mass / kg
- 数量规则： 实测进料批次质量和水分
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per batch and converted to 1,000 kg packed leaf
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading_records`
- 数量范围： Grading input-output ratio
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1.5
  - 单位： kg incoming/kg accepted packed leaf
  - 基准： 匹配的分级批次
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 包装材料 (`cured_leaf_packaging_input`)

分别记录实际包裹物、纸箱、袋、内衬、托盘、板条箱、捆扎带和可重复使用包装。本参数化 set 级卡不带固定 UUID。

- 选定流： 调制烟叶包装功能
- 流属性/单位： Mass or number of items / kg or item
- 绑定： `parameterized`
- Flow Set： `flow-set.packaging-function`
- Flow Set 版本： `0.2.0`
- 数量规则： measured packaging by material/reuse status, expanded to verified exchanges
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： per 1,000 kg accepted packed leaf
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading_records`
- 数量范围： Provisional packaging screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 150
  - 单位： kg packaging/1,000 kg packed leaf
  - 基准： account for reuse over declared cycles
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 分级调制烟叶 (`graded_cured_leaf_output`)

记录合格终端调制烟叶等级或明确声明的等级混合物。

- 选定流： 分级未加工调制烟叶
- 流属性/单位： Mass / kg
- 数量规则： 按等级、声明水分和包装形式实测的合格质量
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： terminal output scaled to 1,000 kg
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading_records`
- 数量范围： Terminal reference quantity
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1,000
  - 上限： 1,000
  - 单位： kg
  - 基准： 终端调制烟叶参考流
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `reference-normalization-rule`

###### 降级调制烟叶 (`downgraded_leaf_output`)

仅在降级烟叶离开过程并进入具名有用去向时将其记录为产品。

- 选定流： 进入声明用途的降级调制烟叶
- 流属性/单位： Mass / kg
- 数量规则： measured leaf transferred to named useful destination; exclude internal rework
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1,000 kg accepted packed leaf
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading_records`
- 数量范围： Provisional downgraded-product screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 300
  - 单位： kg/1,000 kg incoming cured leaf
  - 基准： 已记录有用去向
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

###### 分级和包装淘汰物 (`grading_reject_waste_output`)

按材料类别和最终去向记录无用烟叶与包装废物。

- 选定流： 烟叶分级淘汰物和包装废物
- 流属性/单位： Mass / kg
- 数量规则： measured non-useful leaf and packaging waste by class and destination
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： per 1,000 kg accepted packed leaf
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading_records`
- 数量范围： Provisional grading-reject screen
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 300
  - 单位： kg/1,000 kg incoming cured leaf
  - 基准： 匹配的分级批次
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | all nodes | Separate field, curing, grading, and batch records; attribute shared meters/equipment by operating time, throughput, or occupied capacity before allocation. | `iso-14044-2006` |
| `allocation_leaf_grades` | useful grades | Preserve grades and direct burdens; if subdivision is infeasible, use contemporaneous hand-off economic allocation and disclose mass sensitivity. | `iso-14044-2006` |
| `allocation_residue_reject` | residues, rework, rejects | Do not allocate to internal rework or waste; prevent reworked leaf from becoming a second output. |  |
| `allocation_shared_infrastructure` | shared barns/assets | Attribute each shared asset once across batches/periods with documented use; prevent cross-node double counting. | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流作用 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_records` | `tobacco_field_production` | planting, nutrients, water, energy, protection | log, invoice, meter, contractor record | field; area; variety; product; formulation; amount; assay; date; operation | reconcile inputs to field/cycle | item; kg; L; m3; MJ; ha | each event | full cycle | all fields | sum by identity/field; normalize with matched yield | invoices; labels; calibrated meters; logs |
| `cp_harvest_records` | `tobacco_field_production` | green leaf, residue, reject | harvest ticket, scale, moisture, destination | field; date; mass; moisture; grade; residue; fate | weigh/reconcile each picking | kg; percent; ha | each picking | full cycle | all fields | separate accepted leaf and every residue fate | calibration; lot trace; moisture test |
| `cp_field_emissions` | `tobacco_field_production` | emissions | nutrient, soil, weather, residue, model | N; residue N; soil; climate; application; drainage; factors; model | declared applicable calculation method | kg N; kg emission; ha | each event/cycle | full cycle | all fields | calculate per field, area-weight, normalize | activity and factor provenance; model file |
| `cp_curing_records` | `tobacco_leaf_curing` | leaf, energy, rejects, emissions | batch, scale, moisture, meter, barn log | batch; method; barn; input mass/moisture; carrier; energy; time; outputs | match each run to inputs/outputs/meters | kg; percent; kWh; MJ; h | 每批次/周期 | 完整调制期 | 所有调制设施和场址 | reconcile mass; allocate shared services by measured driver | calibrated scale/meter; invoice; barn log |
| `cp_grading_records` | `cured_leaf_grading_packing` | grades, packaging, rework, rejects | batch, scale, grade, issue, destination | batch; input; moisture; accepted; downgrade; rework; reject; packaging | reconcile grades/destinations | kg; item; percent | 每批次 | 完整分级期 | 所有分级和包装场址 | count rework once and close mass balance | calibration; grade sheet; package record |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_field_to_green_leaf` | field flows | crop-cycle amount / matched green-leaf mass | amount; area; green leaf | amount/kg green leaf |  |
| `calc_green_to_cured_leaf` | cured route | green-leaf-normalized amount × green-leaf input / cured output | masses; moisture; rejects | amount/kg cured leaf | `mass-balance-identity` |
| `calc_nutrient_content` | nutrient supply | product amount × declared nutrient fraction | identity; amount; assay | nutrient by product |  |
| `calc_managed_soil_emissions` | field emissions | applicable IPCC/regional method using inputs, residues, volatilization, and leaching | activity; soil; climate; factors | emissions by pathway | `ipcc-2019-managed-soils` |
| `calc_curing_combustion` | curing | fuel quantity × carrier-specific factor; purchased electricity is not on-site combustion | carrier; amount; factor | pollutant/batch | `ipcc-2006-stationary-combustion` |
| `calc_curing_mass_balance` | curing | green wet mass = cured leaf + rejects + water/other loss within uncertainty | masses; moisture | reconciled outputs | `mass-balance-identity` |
| `calc_grading_mass_balance` | grading | input = accepted + downgraded + rejects + loss; count rework once | batch masses; routes | reconciled grades | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_route_identity` | reference | Distinguish green/cured and air/fire/flue/sun route; retain variety, grade, moisture, crop year, gate. | crop, curing, grade, sales records |
| `dq_temporal_alignment` | all rows | Match field, harvest, curing, grading, energy, and outputs to the same crop/batches; disclose proxies. | dated records |
| `dq_mass_moisture` | transformations | Use calibrated masses and paired moisture at green, cured, and packed states. | calibration; moisture records |
| `dq_route_completeness` | curing | Record energy carrier and combustion location; zero energy requires passive-route evidence. | barn log; invoice; meter |
| `dq_identity_resolution` | parameterized/unresolved | Resolve every emitted exchange to one verified UUID before process publication. | identity review record |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_terminal_route` | reference | Select exactly one terminal route: 1,000 kg green or 1,000 kg cured graded leaf; forbid fresh UUID for cured leaf. |  |
| `validation_curing_method` | cured route | Declare one primary curing method per batch and include its energy, barn service, emissions, rejects, and hand-off. | `who-tobacco-environment-2017` |
| `validation_mass_balance` | harvest/curing/grading | Reconcile mass, moisture, grades, rework, rejects, and losses within documented uncertainty. | `mass-balance-identity` |
| `validation_nutrient_emissions` | field | Reconcile nutrient/residue N with N2O, NH3, and nitrate methods without duplicate pathways. | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `validation_rework` | curing/grading | Link rework to origin and count once; rejected material cannot be accepted reference product. |  |
| `validation_shared_assets` | barns/meters/equipment | Apply one attribution driver per period and prevent double counting. | `iso-14044-2006` |
| `validation_flow_identity` | every flow | Use detail-confirmed exact UUIDs as `fixed`, current Flow Sets as `parameterized`, and otherwise unresolved identities. |  |

## 10. 发布数据集配置

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground unmanufactured tobacco leaf production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | LCA of green or cured unmanufactured tobacco preserving geography, crop year, state, curing technology, grade, moisture, gate, and allocation |
| excluded_use | manufactured tobacco/nicotine products or a different curing route, grade, geography, or gate without reviewed proxy decision |
| required_metadata | variety/market class; geography; crop year; area; yield; terminal state/gate; curing method; barn/energy; moisture; grade; packaging; residue/reject fate; allocation; identity resolution |
| required_quality_disclosure | foreground coverage; proxy periods; missing records; range exceedances; emission methods; meter/fuel reconciliation; mass/moisture balance; unresolved identities |
| update_trigger | reviewed route evidence, technology or emission-method change, Flow Set/UUID change, or representative data outside QA ranges |

## 11. 数据来源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `who-tobacco-environment-2017` | official_guidance | WHO, Tobacco and its environmental impact: an overview, 2017, https://iris.who.int/bitstream/handle/10665/255574/9789241512497-eng.pdf | cultivation and air/fire/flue/sun curing routes |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11 | managed-soil nitrogen pathways |
| `emep-eea-2023-guidebook` | method_factor | EEA, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023 | agricultural ammonia context |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC 2006 Guidelines, Volume 2, Chapter 2 | curing combustion calculations |
| `iso-14044-2006` | standard | ISO 14044:2006 | allocation and disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass for matched harvest, curing, and grading batches | batch calculations and validation |
| `reference-normalization-rule` | method_factor | PCR normalization: terminal reference output equals 1,000 kg | exact terminal range |
