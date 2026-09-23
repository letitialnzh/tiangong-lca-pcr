---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oleaginous-fruits-n-e-c
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 其他含油果实，未另分类

## 1. 范围与适用性

本 PCR 覆盖一种明确声明、归入 CPC 01499 的 residual 含油果实物种，以鲜品在采收或农场交付点交付。每个数据集必须声明物种、品种（如重要）、一年生或多年生体系、地理范围、采收期、成熟度、水分状态、等级、批次规则、包装形式和交付点。不得用本 residual 类别汇总不同物种或不同产品状态。

排除所有具有具名 CPC 叶节点的油籽或含油果实，以及油提取、压榨、精炼、干燥成耐储商品、食品或化学品制造、分销和零售。多年生和一年生路线可以并存，但一个数据集只采用一种实际路线。冷却、清洗、分选、短时暂存和包装仅在农场交付前实际发生时纳入。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oleaginous-fruits-n-e-c |
| classification_refs | CPC 3.0: 01499 其他含油果实，未另分类 |
| covered_products | 一种具名的 residual 含油果实物种，以鲜品在声明农场采收交付点交付 |
| excluded_products | 具有具名 CPC 叶节点的产品；混合物种；提取油、精炼油及制造品；分销和零售 |
| representative_product | 一种具名的 residual 含油果实鲜品 |
| production_route | 管理的一年生或多年生生产、采收，以及条件适用的分选、及时稳定处理和包装 |
| market_state | 声明成熟度、水分、等级和包装状态的鲜品，位于 harvest/farm gate |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一种具名 residual 含油果实的合格鲜品 |
| How much | 1,000 kg 按接收状态计量的合格产品 |
| How well | 声明物种、品种（如重要）、来源、生产体系、采收期、成熟度、水分、等级、批次、包装和交付点 |
| How long or cycle | 一个声明采收期；多年生体系包含与该期相匹配的建园和更替归属 |
| reference_flow_link | `harvested_fruit_output`、`conditioned_fruit_output` 或 `reference_product_output`，取决于声明终点 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | 其他含油果实，未另分类 `d72a964f-f916-4c72-9f53-6a1126f1ecac` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；品种（如重要）；一年生或多年生体系；来源；采收期；成熟度；水分及基准；等级；批次规则；包装；交付点；纳入操作 |
| Binding | `fixed` |

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `fresh_mass_basis` | 所有果实物流 | Mass | kg | 以按接收状态的鲜质量报告，并记录水分及其基准。 |
| `species_state_identity` | 产品与中间物流 | Mass | kg | 在所有节点保持物种、成熟度、水分、等级和批次身份。 |
| `period_normalization` | 管理生产 | 活动特定属性 | 活动特定单位 | 将生产面积和跨期投入归一到同一声明采收期及合格质量。 |
| `nutrient_basis` | 养分投入 | 养分质量 | kg N、kg P2O5、kg K2O | 分别保留产品质量、配方、测定值和元素或氧化物口径。 |
| `batch_balance` | 分选、稳定与包装 | Mass | kg | 平衡进入量、合格等级、降级品、剔除物和损失；不得把蒸发水计作废物。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明期开始时的生产田块或结果园；多年生路线纳入年化建园与更替 |
| starting_condition_role | 声明采收期的生产起点 |
| product_classification_scope | 一种归入 CPC 01499 的具名 residual 含油果实物种 |
| recursive_input_rule | 同类别外购鲜果以其实际状态和交付点连接独立上游数据集，不在本 PCR 中重建 |
| upstream_dataset_requirement | 与种植材料、养分、植保、灌溉、能源、包装及外部废物处理相兼容的数据集 |
| disclosure | 物种、体系、地理、面积、树龄（适用时）、采收期、产量、成熟度、水分、等级、交付点、批次、包装、剔除物、共享资产与归属 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_single_species` | 全部路线 | 每个数据集仅代表一种具名 residual 物种和一种鲜品状态；不得汇总异质物种。 |  |
| `boundary_productive_period` | 生产路线 | 纳入声明采收期的管理生产、采收、直接排放，以及适用的年化建园和更替负荷。 |  |
| `boundary_postharvest` | 条件路线 | 仅纳入声明交付点之前实际发生的清洁、分选、及时冷却或短时稳定处理和包装。 | `fao-postharvest-horticulture` |
| `boundary_extraction_exclusion` | 全部路线 | 在油提取、压榨、精炼、商品干燥、制造、分销和零售之前停止。 |  |
| `boundary_direct_emissions` | 土壤管理 | 使用同一养分和残余物记录及声明方法计算直接和相关间接排放。 | `ipcc-2019-managed-soils` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入 | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `managed_production_harvest` | 管理生产与采收 | `required` | 始终 | 管理一年生或多年生生产与采收 | 生产面积和声明采收期 |
| `sorting_stabilization` | 分选与及时稳定处理 | `conditional` | 在交付点之前进行分选、清洁、冷却、短时暂存或稳定处理 | 区分合格等级、降级品、剔除物和损失状态 | 匹配的进出批次 |
| `packing_handoff` | 包装与农场交付 | `conditional` | 在声明交付点之前进行包装或呈现 | 准备声明鲜品以供交付 | 匹配的包装批次和包装记录 |

### 过程: 管理生产与采收 (`managed_production_harvest`)

#### 输入

##### 产品流

###### 种植与补植材料 (`planting_material_input`)

记录该节点的种植与补植材料，保持物种、状态、批次和去向可追溯。

- 所选流: 特定物种的种子、苗木、插条或嫁接苗
- 流属性 / 单位: 质量或数量 / kg 或株
- 数量规则: 按物种、苗龄、来源和建园或补植用途记录实物数量
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 建园年化及补植材料
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_production_inputs`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2500
  - 单位: items/ha·year
  - 基准: 建园年化及补植材料
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)

###### 农业养分和肥料投入 (`agricultural_nutrient_inputs`)

记录该节点的农业养分和肥料投入，保持物种、状态、批次和去向可追溯。

- 所选流: 农业养分和肥料供应
- 流属性 / 单位: 产品及养分数量 / kg 产品、m3 产品、kg N、kg P2O5、kg K2O
- 绑定: `parameterized`
- 流集: `flow-set.agricultural-nutrient-supply`
- 流集版本: `0.3.0`
- 数量规则: 仅在本卡收集全部矿质肥、有机肥和养分改良剂，并保留产品与养分测定值
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 分别保留的 N、P2O5 和 K2O 数量总和，不混合养分口径
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_production_inputs`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 600
  - 单位: kg nutrient/ha·year
  - 基准: 分别保留的 N、P2O5 和 K2O 数量总和，不混合养分口径
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)

###### 灌溉水 (`irrigation_water_input`)

记录该节点的灌溉水，保持物种、状态、批次和去向可追溯。

- 所选流: 灌溉水供应
- 流属性 / 单位: 体积 / m3
- 绑定: `parameterized`
- 流集: `flow-set.water-use`
- 流集版本: `0.2.0`
- 流集组: `irrigation-water`
- 数量规则: 计量或计算施用灌溉水量；雨养系统以证据记录零值
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 声明期间施用于生产面积的水
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_production_inputs`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: m3/ha·year
  - 基准: 声明期间施用于生产面积的水
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)

###### 田间与采收能源 (`field_energy_input`)

记录该节点的田间与采收能源，保持物种、状态、批次和去向可追溯。

- 所选流: 田间机械、泵送和采收所用能源载体
- 流属性 / 单位: 载体数量或能量 / kg、L、m3、kWh 或 MJ
- 绑定: `parameterized`
- 流集: `flow-set.energy-supply`
- 流集版本: `0.2.0`
- 数量规则: 记录每种实际载体及应归属的承包作业用量
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 生产和采收作业的实际能源投入
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_production_inputs`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2000
  - 单位: MJ/ha·year
  - 基准: 生产和采收作业的实际能源投入
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)

###### 植保制剂 (`crop_protection_input`)

记录该节点的植保制剂，保持物种、状态、批次和去向可追溯。

- 所选流: 声明的植保制剂
- 流属性 / 单位: 制剂质量 / kg
- 数量规则: 记录制剂、有效成分、浓度和施用事件
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 所有制剂先按身份保留再汇总
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_production_inputs`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 150
  - 单位: kg formulation/ha·year
  - 基准: 所有制剂先按身份保留再汇总
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 采收的鲜含油果实 (`harvested_fruit_output`)

记录该节点的采收的鲜含油果实，保持物种、状态、批次和去向可追溯。

- 所选流: 其他含油果实，未另分类 `d72a964f-f916-4c72-9f53-6a1126f1ecac`
- 流属性 / 单位: 质量 / kg
- 绑定: `fixed`
- 数量规则: 计量合格鲜采收物质量并声明物种、成熟度、水分、等级和交付点
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 声明生产面积的合格鲜采收物
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_harvest_records`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 100
  - 上限: 50000
  - 单位: kg/ha·harvest period
  - 基准: 声明生产面积的合格鲜采收物
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)


##### 废物流

###### 田间残余物与采收剔除物 (`field_residue_output`)

记录该节点的田间残余物与采收剔除物，保持物种、状态、批次和去向可追溯。

- 所选流: 按去向区分的修剪物、附带生物质、落果和采收剔除物
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量或平衡核算每类残余物及其去向
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 全部非产品生物质和剔除物，不包括合格果实
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_harvest_records`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: kg/1,000 kg accepted fruit
  - 基准: 全部非产品生物质和剔除物，不包括合格果实
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)


##### 基本流

###### 管理土壤氮排放 (`soil_nitrogen_emissions`)

记录该节点的管理土壤氮排放，保持物种、状态、批次和去向可追溯。

- 所选流: 向声明空气或水体环境区室排放的具体含氮物种
- 流属性 / 单位: 质量 / kg 物质
- 数量规则: 使用声明方法基于同一养分和残余物记录分别计算各排放物种
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 宽范围筛查；以实际方法和受纳环境区室为准
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_emission_calculation`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg substance/ha·year
  - 基准: 宽范围筛查；以实际方法和受纳环境区室为准
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)


### 过程: 分选与及时稳定处理 (`sorting_stabilization`)

#### 输入

##### 产品流

###### 进入处理的鲜果批次 (`incoming_fruit_input`)

记录该节点的进入处理的鲜果批次，保持物种、状态、批次和去向可追溯。

- 所选流: 声明物种和状态的采后鲜 residual 含油果实
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量进入批次质量、成熟度、水分、温度和等级
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 分选或稳定处理前的匹配批次
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_conditioning_batch`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 1
  - 上限: 2
  - 单位: kg incoming/kg accepted output
  - 基准: 分选或稳定处理前的匹配批次
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)

###### 清洁与处理用水 (`conditioning_water_input`)

记录该节点的清洁与处理用水，保持物种、状态、批次和去向可追溯。

- 所选流: 工艺水供应
- 流属性 / 单位: 体积 / m3
- 绑定: `parameterized`
- 流集: `flow-set.water-use`
- 流集版本: `0.2.0`
- 流集组: `process-water`
- 数量规则: 计量清洗或处理用水；干式路线记录零值
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 不用水路线为零
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_conditioning_batch`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: m3/1,000 kg accepted output
  - 基准: 不用水路线为零
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)

###### 分选、冷却与暂存能源 (`conditioning_energy_input`)

记录该节点的分选、冷却与暂存能源，保持物种、状态、批次和去向可追溯。

- 所选流: 实际处理设备的能源供应
- 流属性 / 单位: 载体数量或能量 / kWh、MJ、kg、L 或 m3
- 绑定: `parameterized`
- 流集: `flow-set.energy-supply`
- 流集版本: `0.2.0`
- 数量规则: 按批次记录实际电力、燃料或外购冷量
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 农场交付前按路线发生的能源
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_conditioning_batch`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: MJ/1,000 kg accepted output
  - 基准: 农场交付前按路线发生的能源
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 分选后的鲜含油果实 (`conditioned_fruit_output`)

记录该节点的分选后的鲜含油果实，保持物种、状态、批次和去向可追溯。

- 所选流: 其他含油果实，未另分类 `d72a964f-f916-4c72-9f53-6a1126f1ecac`
- 流属性 / 单位: 质量 / kg
- 绑定: `fixed`
- 数量规则: 按等级计量合格鲜品；不得包含提取、干燥成商品或制造
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 分选与及时稳定处理后的匹配鲜品批次
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_conditioning_batch`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0.5
  - 上限: 1
  - 单位: kg accepted/kg incoming fresh fruit
  - 基准: 分选与及时稳定处理后的匹配鲜品批次
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)


##### 废物流

###### 分选剔除物与移除物 (`sorting_reject_output`)

记录该节点的分选剔除物与移除物，保持物种、状态、批次和去向可追溯。

- 所选流: 按去向区分的腐败果、异物和移除生物材料
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量每类剔除物和去向，排除蒸发水
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 匹配分选质量平衡
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_conditioning_batch`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg/1,000 kg incoming fruit
  - 基准: 匹配分选质量平衡
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)

###### 处理废水 (`conditioning_wastewater_output`)

记录该节点的处理废水，保持物种、状态、批次和去向可追溯。

- 所选流: 清洗或湿式处理产生的废水
- 流属性 / 单位: 体积 / m3
- 数量规则: 计量或计算排放量并记录去向和处理方式
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 干式路线为零
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_conditioning_batch`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: m3/1,000 kg accepted output
  - 基准: 干式路线为零
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)


##### 基本流


### 过程: 包装与农场交付 (`packing_handoff`)

#### 输入

##### 产品流

###### 待包装合格鲜果 (`packing_fruit_input`)

记录该节点的待包装合格鲜果，保持物种、状态、批次和去向可追溯。

- 所选流: 合格的声明 residual 含油果实
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量进入包装的匹配合格质量
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 仅允许有记录的包装损失
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_packing_lot`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1.1
  - 单位: kg/kg packed product
  - 基准: 仅允许有记录的包装损失
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)

###### 初级与次级包装 (`packaging_input`)

记录该节点的初级与次级包装，保持物种、状态、批次和去向可追溯。

- 所选流: 按材料、质量、复用和再生含量状态区分的包装材料
- 流属性 / 单位: 质量或数量 / kg 或件
- 绑定: `parameterized`
- 流集: `flow-set.packaging-function`
- 流集版本: `0.2.0`
- 数量规则: 记录实际材料、附件、复用次数和损失
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 全部一次性包装及归属的可复用包装损耗
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_packing_lot`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 200
  - 单位: kg/1,000 kg packed product
  - 基准: 全部一次性包装及归属的可复用包装损耗
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 声明农场交付点的鲜品 (`reference_product_output`)

记录该节点的声明农场交付点的鲜品，保持物种、状态、批次和去向可追溯。

- 所选流: 其他含油果实，未另分类 `d72a964f-f916-4c72-9f53-6a1126f1ecac`
- 流属性 / 单位: 质量 / kg
- 绑定: `fixed`
- 数量规则: 在交付时计量包装或散装合格质量并带全套必要限定信息
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 等级和状态验收后的精确参考量
- 基准种类: 参考流 (`reference_flow`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_packing_lot`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg/reference flow
  - 基准: 等级和状态验收后的精确参考量
  - 基准种类: 参考流 (`reference_flow`)
  - 证据种类: 推理估计 (`reasoned_estimate`)


##### 废物流

###### 包装剔除物与包装损耗 (`packing_waste_output`)

记录该节点的包装剔除物与包装损耗，保持物种、状态、批次和去向可追溯。

- 所选流: 包装阶段剔除的果实及按材料和去向区分的包装废料
- 流属性 / 单位: 质量 / kg
- 数量规则: 分别计量并防止返工或退回材料重复计算
- 数值模式: 前景记录 (`foreground_record`)
- 特异性: 场地特定 (`site_specific`)
- 归一化基准: 果实与包装物流保持分开
- 基准种类: 过程输出 (`process_output`)
- 证据种类: 收集记录 (`collected_record`)
- 收集协议: `cp_packing_lot`
- 范围: 前景QA筛查范围
  - 范围角色: QA护栏 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/1,000 kg packed product
  - 基准: 果实与包装物流保持分开
  - 基准种类: 过程输出 (`process_output`)
  - 证据种类: 推理估计 (`reasoned_estimate`)


##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_period` | 多年生生产 | 将建园、未结果期和更替负荷按有证据的生产寿命归属到声明采收期；不得在年度记录中重复计算。 |  |
| `allocation_grade` | 分选输出 | 只有合格声明等级为产品；降级品和剔除物按去向作为废物记录且不分配上游负荷。 |  |
| `allocation_residue` | 残余物与剔除物 | 废物不获得上游负荷；有收入或替代功能的输出须声明其产品身份、去向和分配选择。 |  |
| `allocation_shared_assets` | 共享设施 | 按记录的面积、机器小时、质量或其他因果驱动因素将灌溉、设备、冷库和包装设施归属一次。 |  |
| `allocation_rework` | 返工和退回 | 将返工回路归于产生节点，返回物料不得作为新的进入量重复计数。 |  |

## 8. 前景数据收集、计算与质量规则

### 数据收集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_production_inputs` | `managed_production_harvest` | 年度投入 | 发票、作业与计量记录 | 物种；面积；产品；数量；养分测定；能源载体；用水；日期 | 将采购、仓储和田间日志与声明面积核对 | 原始单位及 kg、m3、MJ | 每事件并按期汇总 | 完整声明采收期 | 全部纳入田块或园区 | 按物种和采收期求和并归一到合格鲜果 | 发票、计量器、作业日志、校准和库存核对 |
| `cp_harvest_records` | `managed_production_harvest` | 采收物与残余物 | 批次称重和田间日志 | 批次；质量；物种；成熟度；水分；等级；剔除类别；去向 | 使用校准秤称重并与面积和容器记录核对 | kg | 每采收批次 | 完整采收窗口 | 全部纳入采收点 | 按批次求和，物种和状态保持分开 | 磅单、秤校准、批次和去向记录 |
| `cp_emission_calculation` | `managed_production_harvest` | 直接排放 | 计算记录 | 含氮投入；残余物；土壤与气候；排放因子；环境区室 | 对同一投入记录应用声明的方法版本 | kg 物质 | 每采收期 | 与生产投入相同期 | 全部纳入生产面积 | 按具体物种和受纳区室分别计算 | 方法版本、输入追溯、因子来源和复算 |
| `cp_conditioning_batch` | `sorting_stabilization` | 分选与稳定处理 | 匹配批次记录 | 进入和输出质量；等级；温度；水分；水；能源；剔除物；废水；时间 | 批次称重、计量和质量平衡 | kg、m3、kWh、MJ | 每批次 | 全部纳入处理批次 | 声明农场或初级处理场地 | 匹配进出批次，干湿路线分开 | 秤和计量器校准、批次表、质量平衡签核 |
| `cp_packing_lot` | `packing_handoff` | 包装和交付 | 包装批次及交付记录 | 果实质量；材料；附件；复用次数；废料；等级；交付点 | 将领料、称重和交付单按批次核对 | kg 或件 | 每包装批次 | 全部纳入交付批次 | 全部纳入包装点 | 按材料与批次汇总，可复用包装按实际损耗归属 | 物料单、磅单、交付单和库存核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部节点 | 节点量 × 1000 / 声明交付点的合格鲜质量 | 节点量；合格鲜质量 | 每 1,000 kg 参考产品的量 |  |
| `calc_perennial_attribution` | 多年生路线 | 建园或更替总量 × 声明期间归属份额 | 建园、更替、生产寿命、归属方法 | 声明采收期的归属量 |  |
| `calc_batch_balance` | 分选和包装 | 进入质量 = 合格 + 降级 + 剔除 + 记录损失 | 匹配进出批次 | 平衡差和流量 |  |
| `calc_soil_emissions` | 土壤排放 | 声明方法应用于按来源区分的养分和残余物投入 | 养分、残余物、因子、区室 | 各具体排放物种质量 | `ipcc-2019-managed-soils` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 全部产品物流 | 物种、生产体系、鲜品状态、成熟度、水分、等级、批次和交付点完整且一致。 | 批次和交付记录 |
| `dq_completeness` | 全部节点 | 质量、能源、水、养分、包装、剔除物和直接排放覆盖声明期间及全部纳入场地。 | 完整性核对与质量平衡 |
| `dq_temporal` | 全部节点 | 生产投入、采收和处理批次来自同一或明确对齐的采收期。 | 日期记录和归属表 |
| `dq_route` | 条件节点 | 不发生的处理记录为零并有证据；不得把提油或制造并入鲜品边界。 | 路线图、设备与批次记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 数据集 | 必须声明一种具名 residual 物种、一种生产体系、一种鲜品状态、等级和 farm/harvest gate。 |  |
| `validate_reference` | 参考产品 | 参考输出必须正好为 1,000 kg 合格鲜品，并带全部必要限定信息。 |  |
| `validate_boundary` | 全部路线 | 出现提油、精炼、制造、分销或零售即失败。 |  |
| `validate_period` | 多年生路线 | 建园、未结果期、更替及共享资产须有单次且可审计的跨期归属。 |  |
| `validate_balance` | 分选和包装 | 匹配批次质量平衡超出声明测量不确定度即失败。 |  |
| `validate_rework` | 剔除物与返工 | 降级品、返工、回收和废弃去向必须互斥且不得与合格产品重复。 |  |
| `validate_flow_binding` | 全部卡片 | 固定 UUID 必须与证据匹配；参数化输入必须按所引 Flow Set 版本实例化；养分卡不得拆分或带 group。 |  |
| `validate_ranges` | 全部卡片 | 每个范围的 lower 不得大于 upper；条件路线停用时数量为零；前景记录优先于 provisional 筛查范围。 |  |

## 10. 已发布数据集配置

| 字段 | 值 |
| --- | --- |
| dataset_role | 具名 residual 含油果实鲜品的前景单元过程或汇总农场门数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 已声明物种、体系、状态、等级、采收期和交付点的 LCA |
| excluded_use | 未披露的多物种平均；提取油或精炼油；制造品；其他具名 CPC 叶节点的替代 |
| required_metadata | 物种、体系、地理、采收期、面积、产量、成熟度、水分、等级、批次、包装、交付点、路线和归属 |
| required_quality_disclosure | 前景覆盖、测量方法、范围筛查结果、缺失值、跨期归属、质量平衡和未解析流身份 |
| update_trigger | 物种、体系、产量、路线、交付点、等级、包装、跨期归属或关键数据来源发生重大变化 |

## 11. 数据来源

| source_id | type | 引用 | 用途 |
| --- | --- | --- | --- |
| `fao-postharvest-horticulture` | official_guidance | FAO, Prevention of post-harvest food losses: fruits, vegetables and root crops, https://www.fao.org/4/t0073e/t0073e00.htm | 鲜园艺品的采收后处理、分级、包装和损失控制原则 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤氮排放方法 |
