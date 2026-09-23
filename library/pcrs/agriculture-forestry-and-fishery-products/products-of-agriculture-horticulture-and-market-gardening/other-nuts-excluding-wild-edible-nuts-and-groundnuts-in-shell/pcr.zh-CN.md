---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-nuts-excluding-wild-edible-nuts-and-groundnuts-in-shell
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 其他带壳坚果（不包括野生食用坚果和落花生）

## 1. 范围与适用性

本PCR覆盖一个明确声明的残余栽培坚果物种和批次，交付时包围果仁的硬壳保持完整。路线可在采收后于农场门结束，也可包括适合该物种的肉质或纤维质外果皮去除、干燥、分级和包装后交付。排除每种已有独立CPC叶节点的坚果、野生食用坚果、落花生、果仁或其他去壳坚果、加工坚果食品以及混合物种产品。

数据集必须表示一个物种、果园或种植园系统、采收年度、批次或汇总规则、外果皮/硬壳状态、含水率基准、等级和交付点。不得利用该残余类别混合不同物种、湿态与干态，或农场门与调理设施门。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-nuts-excluding-wild-edible-nuts-and-groundnuts-in-shell |
| classification_refs | CPC 3.0: 01379 其他带壳坚果（不包括野生食用坚果和落花生） |
| covered_products | 一个声明的栽培残余坚果物种，包括仅在属于CPC 01379时的槟榔、可乐果、银杏果、澳洲坚果、美洲山核桃、意大利松子或松子 |
| excluded_products | 已有具名CPC叶节点的坚果；野生食用坚果；落花生；去壳果仁；加工坚果；混合物种批次 |
| representative_product | 一个声明的栽培残余坚果物种，硬壳完整 |
| production_route | 受管理多年生栽培与采收，并按条件包括去外果皮、干燥、分级和包装 |
| market_state | 农场门鲜品，或声明农场/初级调理设施门的调理/干燥带壳产品 |

农场门鲜品路线和调理/干燥路线可并存，但一个数据集只能选择一个终端状态和交付点。物种特定脱外果皮，以及被动、环境或加热干燥属于替代技术；除非前景路线实际同时采用，否则不得合并。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 所选终端交付点的一个声明栽培残余带壳坚果物种 |
| How much | 1,000 kg按接收状态计的合格产品 |
| How well | 声明物种、必要时品种、产地、果园系统、采收年度、批次、外果皮状态、完整硬壳状态、含水率基准、等级、包装形式和交付点 |
| How long or cycle | 一个生产采收年度以及交付点前包括的匹配采后批次 |
| reference_flow_link | 按声明终端交付点选择`harvested_nuts_output`、`conditioned_in_shell_output`或`reference_product_output` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other nuts (excluding wild edible nuts and groundnuts), in shell `85d33932-8c99-4207-8011-1bec84102f55` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；必要时品种；产地；果园或种植园系统；采收年度；批次/汇总规则；外果皮状态；硬壳完整性；含水率及基准；等级；包装形式；交付点；包含作业 |
| Binding | `fixed` |

固定流识别残余CPC类别及鲜品/未加工农场门概念。包括后续调理时，数据集必须披露改变后的状态和实际交付点，不得暗示物种中性的干燥产品规格。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 终端带壳坚果 | Mass | kg | 报告按接收状态计的合格质量和实测含水率；保留含水率基准用于干物质比较。 |
| `shell_state_identity` | 所有产品质量 | Mass | kg | 区分可去除外果皮与硬壳；合格参考产品保留硬壳。 |
| `area_to_reference_conversion` | 果园流 | 活动特定属性 | 活动特定单位 | 将年度生产面积总量归一到同一采收年度和合格终端质量。 |
| `nutrient_content_basis` | 养分投入 | 养分质量 | kg N、kg P2O5、kg K2O | 分别保留产品质量、配方、含量和元素或氧化物基准。 |
| `batch_mass_balance` | 脱外果皮、干燥、分级、包装 | Mass | kg | 将进料质量核算至合格等级、降级产品、剔除物、去除外果皮和水分损失，不得将蒸发水计为废物。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告期开始时已建成并处于生产期的果园或种植园；年化建园和补植投入跨越边界 |
| starting_condition_role | 声明生产采收年度的起点 |
| product_classification_scope | 属于CPC 01379且保留硬壳的一个栽培残余坚果物种 |
| recursive_input_rule | 同类别带壳坚果投入链接至其实际状态和交付点的独立上游数据集，不通过本PCR重复创建 |
| upstream_dataset_requirement | 种植材料、养分、植保、灌溉、能源、包装以及外部处理废物的兼容数据集 |
| disclosure | 物种；果园系统；树龄和生产面积；地理；采收年度；分摊期间；产量；外果皮/硬壳状态；含水率；等级；交付点；调理路线；批次；剔除物；包装；共享资产 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_species_lot` | 所有路线 | 仅包括一个残余栽培坚果物种和声明批次或汇总规则；排除具名CPC坚果叶节点、野生坚果、落花生和混合物种汇总。 |  |
| `boundary_productive_period` | 果园路线 | 包括归属于声明采收年度的年度生产作业、采收、直接田间排放、年化建园和补植负荷。 |  |
| `boundary_postharvest` | 调理路线 | 仅包括声明交付点前实际进行的去外果皮、清洁、干燥、分级和包装；保留匹配批次平衡和含水状态。 | `fao-codex-tree-nut-aflatoxin` |
| `boundary_food_safety` | 干燥与贮存 | 记录采收到干燥的时间、干燥方法、终点含水率、贮存条件和霉变剔除物，以评估污染预防。 | `fao-codex-tree-nut-aflatoxin` |
| `boundary_downstream_exclusion` | 所有路线 | 在破硬壳、果仁分离、烘烤、盐渍、食品制造、分销、零售和消费之前停止。 |  |
| `boundary_direct_emissions` | 土壤和现场燃烧 | 使用与清单相同的养分、残余物和燃料记录计算管理土壤与现场燃烧排放。 | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`; `ipcc-2006-stationary-combustion` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `orchard_production_harvest` | 受管理坚果生产与采收 | `required` | 始终 | 多年生作物生产与采收 | 生产面积和一个采收年度 |
| `primary_hulling_drying` | 初级脱外果皮与干燥 | `conditional` | 在声明的交付点前进行去外果皮或干燥 | 调理并稳定带硬壳坚果 | 匹配的进料批次与合格带壳批次 |
| `grading_packing` | 分级与包装 | `conditional` | 在声明的交付点前进行分级或包装 | 区分等级并准备交付 | 匹配的进料、各等级、剔除物和包装质量 |

### 过程: 受管理坚果生产与采收 (`orchard_production_harvest`)

#### 输入

##### 产品流

###### 补植和建园用种植材料 (`planting_material_input`)

仅记录在评估期内进入系统的苗木、嫁接苗、种子或砧木，并区分建园与补植。

- 选定流: Species-specific nut planting material
- 流属性/单位: Mass or number / kg or item
- 数量规则: 按物种、苗龄和建园用途计量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每生产公顷和报告期
- 基准类型: `crop_cycle`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_orchard_inputs`
- 数量范围: 种植材料暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2000
  - 单位: items/ha·year
  - 基准: 年化建园与补植植株数
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 农业养分与肥料投入 (`agricultural_nutrient_inputs`)

所有矿质肥料、有机肥料和含养分改良剂合并在此卡中，并保留产品、含量、施用事件和养分基准。

- 选定流: Agricultural nutrient and fertilizer supply
- 流属性/单位: Product and nutrient quantity / kg product, m3 product, kg N, kg P2O5, kg K2O
- 绑定: `parameterized`
- 流集合: `flow-set.agricultural-nutrient-supply`
- 流集合版本: `0.3.0`
- 数量规则: 每种施用产品只采集一次并计算声明养分量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每生产公顷和采收年度，并换算至参考质量
- 基准类型: `crop_cycle`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_orchard_inputs`
- 数量范围: 氮投入暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 400
  - 单位: kg N/ha·year
  - 基准: 一个生产采收年度
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)
- 数量范围: 磷投入暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 300
  - 单位: kg P2O5/ha·year
  - 基准: 一个生产采收年度
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)
- 数量范围: 钾投入暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 600
  - 单位: kg K2O/ha·year
  - 基准: 一个生产采收年度
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 灌溉水 (`irrigation_water_input`)

记录施用于生产面积的水量，并与有效降雨区分。

- 选定流: Irrigation water supply
- 流属性/单位: Volume / m3
- 绑定: `parameterized`
- 流集合: `flow-set.water-use`
- 流集合版本: `0.2.0`
- 流集合组: `irrigation-water`
- 数量规则: 计量或计算施用灌溉水量；雨养系统以证据记录为零
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每生产公顷和采收年度
- 基准类型: `crop_cycle`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_orchard_inputs`
- 数量范围: 灌溉暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 15000
  - 单位: m3/ha·year
  - 基准: 一个生产采收年度
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 田间机械能源 (`field_energy_input`)

记录果园地面管理、修剪、喷施、采收和场内搬运使用的实际能源载体。

- 选定流: Energy supply for mobile field machinery
- 流属性/单位: Carrier quantity or energy / kg, L, or MJ
- 绑定: `parameterized`
- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 流集合组: `mobile-machinery-fuel`
- 数量规则: 计量能源载体用量或保留载体信息的承包作业量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每生产公顷和采收年度
- 基准类型: `crop_cycle`
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_orchard_inputs`
- 数量范围: 田间能源暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: L diesel-equivalent/ha·year
  - 基准: 保留实际能源载体
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 植保制剂 (`crop_protection_input`)

记录每种实际制剂、活性成分、浓度和施用事件；不指定通用固定身份。

- 选定流: Crop-protection formulation used for the declared nut species
- 流属性/单位: Mass of formulation / kg
- 数量规则: 按产品和施用事件计量制剂量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每生产公顷和采收年度
- 基准类型: `crop_cycle`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_orchard_inputs`
- 数量范围: 制剂暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg formulation/ha·year
  - 基准: 保留身份后汇总所有产品
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 初级调理前采收坚果 (`harvested_nuts_output`)

记录声明物种以及肉质或纤维质外果皮是否仍保留；包围果仁的硬壳保持完整。

- 选定流: Harvested residual cultivated nut species
- 流属性/单位: Mass / kg
- 数量规则: 计量合格采收质量并记录含水率与外果皮状态
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每生产公顷和采收年度
- 基准类型: `crop_cycle`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_records`
- 数量范围: 采收产量暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 100
  - 上限: 20000
  - 单位: kg/ha·year
  - 基准: 声明采收时状态
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 果园残余物与采收剔除物 (`orchard_residue_output`)

按去向分别记录修剪物、落地物、剔除坚果和附带生物质。

- 选定流: Orchard residues and rejected harvested material
- 流属性/单位: Mass / kg
- 数量规则: 按残余物类别和去向计量或核算质量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1000 kg合格采收坚果
- 基准类型: `process_output`
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_records`
- 数量范围: 残余物暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 3000
  - 单位: kg/1,000 kg accepted harvest
  - 基准: 按去向记录全部非产品生物质和剔除物
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 排放至空气的氧化亚氮 (`soil_n2o_output`)

使用相同养分和残余物记录计算管理土壤直接及适用的间接N2O。

- 选定流: Nitrous oxide, emissions to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg N2O
- 绑定: `fixed`
- 数量规则: 对采集的氮投入和残余物采用适用管理土壤方法
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每生产公顷和采收年度
- 基准类型: `n_input`
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_orchard_emissions`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 宽幅方法结果筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 150
  - 单位: kg N2O/ha·year
  - 基准: 以方法计算为准
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 排放至空气的氨 (`ammonia_air_output`)

按肥料产品、施用方式、天气和所选因子计算挥发。

- 选定流: Ammonia, emissions to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg NH3
- 绑定: `fixed`
- 数量规则: 对采集的氮投入采用适用挥发方法
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每生产公顷和采收年度
- 基准类型: `n_input`
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_orchard_emissions`
- 来源: `emep-eea-2023-guidebook`
- 数量范围: 宽幅方法结果筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 300
  - 单位: kg NH3/ha·year
  - 基准: 以方法计算为准
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 排放至水体的硝酸盐 (`nitrate_water_output`)

仅采用地点适用的淋溶或径流方法计算或监测硝酸盐损失。

- 选定流: Nitrate, emissions to water, unspecified `fe0acd60-3ddc-11dd-aa31-0050c2490048`
- 流属性/单位: Mass / kg nitrate
- 绑定: `fixed`
- 数量规则: 所选淋溶/径流方法或监测平衡
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每生产公顷和采收年度
- 基准类型: `n_input`
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_orchard_emissions`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 宽幅方法结果筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1500
  - 单位: kg nitrate/ha·year
  - 基准: 以所选方法为准
  - 基准类型: `crop_cycle`
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程: 初级脱外果皮与干燥 (`primary_hulling_drying`)

#### 输入

##### 产品流

###### 进入初级调理的采收坚果 (`conditioning_nuts_input`)

记录匹配的进料批次，包括物种、外果皮状态、硬壳状态、含水率和来源。

- 选定流: Harvested residual cultivated nut species
- 流属性/单位: Mass / kg
- 数量规则: 计量进料批次质量和含水率
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个调理批次并换算至合格产品
- 基准类型: `process_output`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 数量范围: 进料产出比暂定范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 1
  - 上限: 3
  - 单位: kg incoming/kg accepted in-shell nuts
  - 基准: 匹配批次；声明外果皮状态
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 调理与清洁用水 (`conditioning_water_input`)

仅记录用于清洗、湿式清洁或调理的供应工艺水；干式路线可记录为零。

- 选定流: Process water supply
- 流属性/单位: Volume / m3
- 绑定: `parameterized`
- 流集合: `flow-set.water-use`
- 流集合版本: `0.2.0`
- 流集合组: `process-water`
- 数量规则: 计量或按批次计算用水；路线不启用时为零
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1000 kg合格带壳坚果
- 基准类型: `process_output`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 数量范围: 路线条件用水筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: m3/1,000 kg accepted product
  - 基准: 干式路线为零
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 脱外果皮与干燥能源 (`conditioning_energy_input`)

按实际载体记录电力、燃料或外购热量，并区分机械脱外果皮与干燥。

- 选定流: Energy supply for primary hulling and drying
- 流属性/单位: Carrier quantity or energy / kWh, MJ, kg, L, or m3
- 绑定: `parameterized`
- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 数量规则: 按批次计量能源载体和电力
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1000 kg合格带壳坚果
- 基准类型: `process_output`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 数量范围: 调理能源暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: MJ/1,000 kg accepted product
  - 基准: 以实际载体替代筛查换算
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调理后的带壳坚果 (`conditioned_in_shell_output`)

记录完成所需去外果皮和干燥后的声明物种；硬壳保持完整。

- 选定流: Other nuts (excluding wild edible nuts and groundnuts), in shell `85d33932-8c99-4207-8011-1bec84102f55`
- 流属性/单位: Mass / kg
- 绑定: `fixed`
- 数量规则: 计量合格质量、含水率、外果皮状态和交付点
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 按匹配批次；适用时换算至1000 kg终端产品
- 基准类型: `reference_flow`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 数量范围: 调理产品产出比例
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0.3
  - 上限: 1
  - 单位: kg accepted/kg incoming harvest
  - 基准: 匹配的湿基至干基及脱外果皮平衡
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 去除的外果皮与调理剔除物 (`hulls_rejects_output`)

按去向分别记录外果皮、杂质、腐败坚果和其他剔除物；合格产品的硬壳不是废物。

- 选定流: Removed outer hulls and conditioning rejects
- 流属性/单位: Mass / kg
- 数量规则: 按类别和去向计量并进行匹配物料平衡核算
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1000 kg采收坚果进料
- 基准类型: `process_output`
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_records`
- 数量范围: 物料平衡剔除物筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 700
  - 单位: kg/1,000 kg incoming harvest
  - 基准: 不包括蒸发水
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 现场干燥排放的化石二氧化碳 (`drying_fossil_co2_output`)

仅记录现场燃料燃烧产生的化石CO2；无现场化石燃料燃烧时为零。

- 选定流: Carbon dioxide (fossil), emissions to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg CO2
- 绑定: `fixed`
- 数量规则: 燃料量乘以载体特定碳含量和氧化因子
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1000 kg合格带壳坚果
- 基准类型: `fuel_inventory`
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_records`
- 来源: `ipcc-2006-stationary-combustion`
- 数量范围: 路线条件燃烧筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1500
  - 单位: kg fossil CO2/1,000 kg accepted product
  - 基准: 无现场化石燃料燃烧时为零
  - 基准类型: `fuel_inventory`
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程: 分级与包装 (`grading_packing`)

#### 输入

##### 产品流

###### 进入分级的带壳坚果 (`grading_nuts_input`)

记录匹配的物种特定批次及其含水率、外果皮状态、缺陷和前序调理。

- 选定流: Conditioned or farm-gate nuts in shell
- 流属性/单位: Mass / kg
- 数量规则: 计量进料批次质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个分级批次并换算至包装产品
- 基准类型: `process_output`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 数量范围: 分级进料产出比暂定范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1.5
  - 单位: kg incoming/kg accepted packed nuts
  - 基准: 匹配批次
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 包装材料 (`packaging_input`)

记录实际使用的袋、内衬、纸箱、周转箱、托盘或其他声明包装；由前景记录确定一个适用包装组和具体交换。

- 选定流: Packaging for nuts in shell
- 流属性/单位: Mass / kg
- 绑定: `parameterized`
- 流集合: `flow-set.packaging-function`
- 流集合版本: `0.2.0`
- 数量规则: 计量随合格产品交付的包装；可重复使用物按有据可查的周转次数分摊
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1000 kg包装坚果
- 基准类型: `process_output`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 数量范围: 包装暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/1,000 kg packed nuts
  - 基准: 无包装时为零；以实际包装形式为准
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 分级与包装能源 (`grading_energy_input`)

记录输送、分选、称量和包装所用电力及实际能源载体。

- 选定流: Energy supply for grading and packing
- 流属性/单位: Energy or carrier quantity / kWh, MJ, kg, L, or m3
- 绑定: `parameterized`
- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 数量规则: 按批次计量能源
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1000 kg包装坚果
- 基准类型: `process_output`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 数量范围: 分级能源暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kWh/1,000 kg packed nuts
  - 基准: 保留实际能源载体
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格的其他带壳坚果 (`reference_product_output`)

仅将一个声明的残余栽培坚果物种和批次作为终端参考；果仁仍由硬壳包围。

- 选定流: Other nuts (excluding wild edible nuts and groundnuts), in shell `85d33932-8c99-4207-8011-1bec84102f55`
- 流属性/单位: Mass / kg
- 绑定: `fixed`
- 数量规则: 在声明含水率、等级、包装形式和交付点下的1000 kg合格产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 1000 kg终端参考产品
- 基准类型: `reference_flow`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 数量范围: 参考产品身份范围
  - 范围角色: 允许范围 (`allowed_range`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: 声明的终端参考量
  - 基准类型: `reference_flow`
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

###### 降级但可用的带壳坚果 (`downgraded_nuts_output`)

分别记录每种仍有用途的较低等级，不得计入合格参考产品。

- 选定流: Downgraded nuts in shell by declared destination
- 流属性/单位: Mass / kg
- 数量规则: 按等级和去向计量降级质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1000 kg分级进料
- 基准类型: `process_output`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 数量范围: 降级产品暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg/1,000 kg incoming batch
  - 基准: 匹配分级批次
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 分级与包装剔除物 (`grading_rejects_output`)

按处理去向分别记录不可用坚果、壳碎片、杂质和破损包装。

- 选定流: Grading and packing rejects by declared destination
- 流属性/单位: Mass / kg
- 数量规则: 按类别和去向计量剔除物质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1000 kg分级进料
- 基准类型: `process_output`
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 数量范围: 剔除物暂定筛查范围
  - 范围角色: 质量保证护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 300
  - 单位: kg/1,000 kg incoming batch
  - 基准: 匹配分级批次
  - 基准类型: `process_output`
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_productive_year` | 多年生果园 | 将年度作业直接归属于声明生产年度；依据有记录的使用寿命和生产面积对建园、补植和共享多年生基础设施进行年化。 |  |
| `allocation_grade_outputs` | 分级 | 优先采用物理细分。一个不可分割批次产生多个有用等级时，报告各自质量并在批次内采用明确论证且一致的分配；不得将有用降级坚果归为废物。 |  |
| `allocation_hulls_residues` | 外果皮与残余物 | 无经济功能且丢弃时按残余物处理且不给予抵扣；作为联产品出售或利用时，披露去向并单独采用经评审的分配或替代情景。 |  |
| `allocation_shared_assets` | 共享设备与贮存 | 按实测运行时间、吞吐量、占用面积时间或其他因果驱动量分配；防止同一年度或批次负荷同时进入果园和调理节点。 |  |
| `allocation_rework` | 重新分级或再干燥物料 | 将返工归回产生该物料的批次，只计一次新增能源和损失，并仅在达到合格等级时计为产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_inputs` | `orchard_production_harvest` | 建园、养分、水、植保、能源 | 发票、田间日志、仪表、承包记录 | 物种、品种、地块、生产面积、树龄、投入身份、配方、含量、数量、单位、日期、载体、用途 | 将采购和施用记录核对至地块 | 原始单位及ha | 每次事件 | 完整声明采收年度；保留建园年化期间 | 每个纳入的果园地块和共享服务 | 按地块和投入汇总，建园年化后除以合格终端质量 | 发票、经校准仪表记录、施用日志、面积图、使用寿命证据 |
| `cp_harvest_records` | `orchard_production_harvest` | 采收、合格产品、残余物、剔除物 | 称量单、采收日志、采样记录 | 物种、地块、日期、毛重/皮重、合格质量、外果皮状态、含水率、等级、剔除/残余物类别、去向 | 校准称量和代表性含水率采样 | kg、%、ha | 每批 | 完整采收期 | 每个纳入果园地块和收集点 | 按批次汇总合格与非产品质量；保留物种和状态 | 校准证书、批次ID、含水率记录、去向记录 |
| `cp_orchard_emissions` | `orchard_production_harvest` | 土壤和养分排放 | 计算型前景记录 | 按形态的氮投入、残余物、土壤/气候参数、因子版本、可用时的监测损失 | 对`cp_orchard_inputs`采用有记录的适用方法 | kg物质 | 每报告年度 | 同一采收年度及方法规定的相关滞后期 | 每个纳入的管理地块 | 按地块计算后按终端产品质量加权 | 因子来源、计算工作簿、投入核对、评审检查 |
| `cp_conditioning_records` | `primary_hulling_drying` | 脱外果皮、清洁、干燥、产出、剔除物、排放 | 批次表、秤、仪表、燃料记录、含水率测试 | 物种、批次、进料质量/含水率/外果皮状态、方法、时间、温度、水、载体、能源、合格质量/含水率、外果皮、剔除物、去向 | 匹配批次测量和物料平衡 | kg、%、m3、kWh、MJ | 每批 | 数据集代表的所有批次 | 每条纳入的调理线/场址 | 按批次核算干物质和损失，再按吞吐量加权 | 秤和仪表校准、含水率方法、批次ID、燃料发票、平衡闭合 |
| `cp_grading_records` | `grading_packing` | 等级、返工、包装、剔除物、能源 | 批次表、秤记录、包装规格 | 物种、批次、进料质量、等级准则、合格/降级/剔除质量、返工、包装身份/质量/复用、能源、去向 | 匹配分级运行核算 | kg、item、kWh | 每次运行或批次 | 数据集代表的所有分级和包装运行 | 每条纳入的生产线/场址 | 按等级和去向汇总；共享运行按实测吞吐量分配 | 秤校准、等级检验、包装规格、批次关联、平衡闭合 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_normalization` | 果园流 | 年度地块总量 / 同一采收年度合格终端质量 × 1,000 | 地块投入或排放；合格终端质量 | 每1000 kg参考产品的数量 |  |
| `calc_establishment_annualization` | 建园与多年生资产 | 归属数量 / 有记录的生产使用年限，再按生产面积分配 | 建园数量；使用寿命；面积 | 年度负荷 |  |
| `calc_batch_mass_balance` | 调理与分级 | 进料质量 = 合格 + 降级 + 剔除 + 去除外果皮 + 实测或计算水分损失 ± 闭合误差 | 匹配批次质量和含水率 | 核算后的批次清单 | `mass-balance-identity` |
| `calc_dry_matter` | 含水率换算 | 按接收质量 ×（1 − 湿基含水率） | 质量；实测含水率及基准 | 干物质质量 | `mass-balance-identity` |
| `calc_fossil_co2` | 现场干燥燃烧 | 燃料量 × 净热值 × 碳因子 × 氧化因子 × 44/12（因子为碳质量时） | 能源载体记录；所选因子 | kg化石CO2 | `ipcc-2006-stationary-combustion` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 必须明确植物学/通用物种、必要时品种、批次、CPC残余类别资格、硬壳状态、外果皮状态、含水率、等级和交付点。 | 产品规格、批次记录、照片或检验记录 |
| `dq_completeness` | 所有过程 | 核对声明期间的生产面积、采收、每个调理/分级批次、能源、水、剔除物和去向。 | 完整性清单和物料平衡闭合 |
| `dq_temporal` | 多年生路线 | 使用一个代表性采收年度或披露有论证的多年平均；平均前保留年度特定产量和投入记录。 | 带日期记录和平均计算表 |
| `dq_measurement` | 质量与含水率 | 使用校准秤和有记录的代表性含水率方法；披露湿/干基和采样频率。 | 校准与采样记录 |
| `dq_route` | 条件作业 | 仅包括实际进行的脱外果皮、干燥、分级、包装、返工和贮存活动，并披露未启用节点。 | 过程图、批次日志、交付点声明 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | severity |
| --- | --- | --- | --- |
| `validate_residual_identity` | 参考产品 | 数据集未指定一个栽培物种并证明其不属于具名CPC坚果叶节点、野生坚果、落花生、去壳果仁或混合批次时拒绝。 | error |
| `validate_shell_state` | 参考产品 | 缺少硬壳完整性、外果皮状态、含水率基准、等级或终端交付点，或信息内部不一致时拒绝。 | error |
| `validate_reference_mass` | 终端产出 | 合格参考产出必须等于1000 kg，并排除尚未合格的降级、剔除和返工物料。 | error |
| `validate_route_activation` | 条件节点 | 脱外果皮、干燥、分级、包装及其投入/排放在未启用时必须为零或不存在；启用时必须有匹配批次记录。 | error |
| `validate_nutrient_binding` | 果园养分 | 果园过程只能有一张合并农业养分卡；必须使用set级`flow-set.agricultural-nutrient-supply` 0.3.0，且无group或固定UUID。 | error |
| `validate_mass_balance` | 采收、调理、分级 | 将合格、降级、剔除、外果皮、残余物和水分损失项与进料质量核对，并披露闭合误差。 | error |
| `validate_ranges` | 所有清单卡 | 超出范围的值应标记复核；暂定范围仅用于筛查，不得替代前景证据或作为生产限值。 | warning |
| `validate_uuid_use` | 固定绑定 | 确认UUID、流类型、属性、类别、状态和交付点；过程发布前将参数化卡解析为经核实的具体UUID。 | error |
| `validate_multi_period` | 多年生负荷 | 建园、补植或共享基础设施在不同采收年度间重复归属时拒绝。 | error |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个声明栽培残余带壳坚果物种的前景产品系统 |
| downstream_use | `secondary_dataset`；仅在物种、路线、状态、地理和交付点与接收研究匹配时用作`background_dataset` |
| allowed_use | 在声明物种、状态、技术、期间、地理和交付点内进行比较与供应链建模 |
| excluded_use | 无组成证据的物种中性平均；具名CPC坚果；野生坚果；落花生；去壳果仁；加工坚果；湿/干状态或农场/调理交付点之间的替代 |
| required_metadata | 物种、品种、产地、果园系统、生产面积和树龄、采收年度、批次/汇总、外果皮和硬壳状态、含水率基准、等级、交付点、过程启用、分配、包装、UUID解析 |
| required_quality_disclosure | 覆盖率、测量方法、缺失数据、范围例外、批次物料平衡闭合、多年平均、共享资产归属、分配选择、未解析身份 |
| update_trigger | 物种/类别修正、交付点或路线变化、重大技术变化、新代表性记录、排放因子修订、重大产量/含水率变化或经核实身份变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-codex-tree-nut-aflatoxin` | official_guidance | Codex Alimentarius / FAO, Code of Practice for the Prevention and Reduction of Aflatoxin Contamination in Tree Nuts, https://www.fao.org/4/j2262e/j2262e22.htm | 及时脱外果皮/干燥、含水率和贮存控制、批次状态、剔除物 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤N2O计算 |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA air pollutant emission inventory guidebook 2023, https://www.eea.europa.eu/publications/emep-eea-guidebook-2023 | 农业氨排放计算 |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC, 2006 Guidelines, Volume 2, Chapter 2, https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html | 现场燃料燃烧CO2计算 |
| `mass-balance-identity` | method_factor | 应用于匹配前景记录的质量守恒恒等式 | 批次核算和精确参考量 |
