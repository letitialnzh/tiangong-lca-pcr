---
schema_version: 1
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oilseeds-n-e-c
language: zh-CN
status: scaffold
content_maturity: empty_scaffold
translation_status: scaffold_pending_translation
sync_with: pcr.en-US.md
---
# 其他未另分类油籽

## 1. 范围与适用性
本 PCR 规定 CPC 01449 中具名剩余油籽物种从种植到声明门点的前景数据规则。每个数据集只能声明一个物种、用途、水分基础、等级和门点。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oilseeds-n-e-c |
| classification_system | CPC |
| classification_version | 3.0 |
| classification_code | 01449 |
| classification_title | 其他未另分类油籽 |
| included_products | CPC 01449 中一个具名剩余油籽物种，例如蓖麻籽、crambe 籽或火麻籽，以收获或整理后籽粒交付。 |
| excluded_products | 具有单独 CPC 叶节点的油籽；专门用于播种并认证的种子；提取油；油粕；食品和制成品。 |
| representative_product | 农场门或整理门点交付的一个具名剩余油籽物种的整理后籽粒。 |
| production_route | 物种特定的受控种植、收获、籽粒脱出、可选干燥清理、分级、可选包装储存。 |
| market_state | 声明物种、用途、水分、纯度或等级及门点的收获或整理后油籽。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| what | 在声明农场门或整理门点提供一种已声明 CPC 01449 油籽。 |
| how_much | 声明水分下 1 kg 净油籽质量。 |
| how_well | 必须声明具名物种、用途、水分基础、等级或纯度、路线和门点。 |
| how_long_or_cycle | 一个作物周期及关联整理批次，按合格产品归一化。 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 kg |
| reference_product_flow | 其他未另分类油籽 `b547a596-eefe-42d3-82b9-78cbbb445eb6` |
| reference_flow_property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| reference_unit_group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| reference_unit | kg |
| required_qualifiers | 一个具名物种；用途；水分基础；等级或纯度；生产与整理路线；声明门点 |

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_mass | 参考产品及质量流 | 质量 | kg | 使用净质量并保留毛重、皮重和秤证据。 |
| moisture | 籽粒和残余物 | 质量及水分 | kg 及湿基或干基百分数 | 声明水分约定，仅以实测水分换算。 |
| field_normalization | 田间投入 | 面积及质量 | ha 及 kg | 保留田块记录，再以同一作物周期合格产品归一化。 |
| energy | 机械、干燥及储存 | 能量、体积或质量 | kWh、MJ、L 或 kg | 换算前保留原载体及单位。 |

## 5. 系统边界

边界始于进入作物周期的种植材料及前景控制的整地，包括受控种植、收获、物种特定脱粒或籽粒脱出、可选干燥通风清理、分级、前景包装、储存和装车至声明门点。排除播种种子认证、榨油、精炼、油粕制造、下游运输和使用。替代生产或整理技术必须单独声明路线；未启用的条件过程不得含交换。

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入声明作物周期的种植材料 |
| starting_condition_role | 一个具名剩余油籽物种的前景受控生物生产起点。 |
| product_classification_scope | 仅 CPC 01449；具有单独分类的油籽不在范围内。 |
| recursive_input_rule | 外购 CPC 01449 油籽作为投入时，仍须按物种、状态和供应商数据集单独记录。 |
| upstream_dataset_requirement | 种植材料和外购投入应链接供应商数据集，或披露来源、地域和质量。 |
| disclosure | 物种、已知品种、用途、田间模式、收获与脱出技术、水分、等级、门点、联产品、弃物、返工及共享资产归属。 |

## 6. 过程清单结构

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| managed_production | 受控种植生产 | required | 始终纳入。 | 种植已声明的具名剩余油籽物种并记录田间作业。 | 已声明露地或设施系统中的可收获作物。 |
| harvest_and_extraction | 收获与籽粒脱出 | required | 始终纳入；脱粒、开荚或脱果壳依物种路线。 | 收集作物并将油籽籽粒与田间生物质分离。 | 收获的含籽物料总量。 |
| drying_and_conditioning | 干燥与初级整理 | conditional | 农场门交付前发生干燥、通风、清理或稳定化时纳入。 | 达到声明的安全水分并去除杂质。 | 声明水分条件下的整理后油籽质量。 |
| grading_packaging_and_storage | 分级、包装与储存 | conditional | 发生前景控制的分级、装袋、散装储存或装车时纳入。 | 在声明门点交付一个明确等级和用途路线。 | 声明门点的净参考产品。 |


### 过程: 受控种植生产 (`managed_production`)

#### 投入

##### 产品流

###### 种植材料 (`planting_material`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 按声明物种、状态、介质和去向选择具体流
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: site_specific（`site_specific`）
- 归一化基础: per crop cycle, normalized by accepted oilseed output
- 基础类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_field`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.1
  - 单位: kg/kg product
  - 基础: per crop cycle, normalized by accepted oilseed output
  - 基础类型: `crop_cycle`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 合并的肥料与养分产品 (`nutrient_products`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 流集合: `flow-set.agricultural-nutrient-supply`
- 流集合版本: `0.3.0`
- 流属性 / 单位: kg product and kg nutrient
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: site_specific（`site_specific`）
- 归一化基础: per crop cycle, normalized by accepted oilseed output
- 基础类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_field`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 1
  - 单位: kg product/kg product
  - 基础: per crop cycle, normalized by accepted oilseed output
  - 基础类型: `crop_cycle`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 灌溉水 (`irrigation_water`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 流集合: `flow-set.water-use`
- 流集合版本: `0.2.0`
- 流集合组: `irrigation-water`
- 流属性 / 单位: m3
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: route_specific（`route_specific`）
- 归一化基础: per crop cycle, normalized by accepted oilseed output
- 基础类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_field`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 10
  - 单位: m3/kg product
  - 基础: per crop cycle, normalized by accepted oilseed output
  - 基础类型: `crop_cycle`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 植保投入 (`crop_protection_inputs`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 按声明物种、状态、介质和去向选择具体流
- 流属性 / 单位: kg or L
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: site_specific（`site_specific`）
- 归一化基础: per crop cycle, normalized by accepted oilseed output
- 基础类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_field`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.1
  - 单位: kg/kg product
  - 基础: per crop cycle, normalized by accepted oilseed output
  - 基础类型: `crop_cycle`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 田间能源载体 (`field_energy`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 流集合组: `mobile-machinery-fuel`
- 流属性 / 单位: L, kg, MJ or kWh
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: site_specific（`site_specific`）
- 归一化基础: per crop cycle, normalized by accepted oilseed output
- 基础类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_energy`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 1
  - 单位: L diesel-equivalent/kg product
  - 基础: per crop cycle, normalized by accepted oilseed output
  - 基础类型: `crop_cycle`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

##### 废物流

无。

##### 基本流

无。

#### 产出

##### 产品流

###### 田间可收获作物 (`standing_crop`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 按声明物种、状态、介质和去向选择具体流
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: site_specific（`site_specific`）
- 归一化基础: harvestable mass at field maturity
- 基础类型: `process_output`
- 证据类型: calculated_from_collection（`calculated_from_collection`）
- 收集协议: `cp_yield`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 1
  - 上限: 5
  - 单位: kg/kg accepted product
  - 基础: harvestable mass at field maturity
  - 基础类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

##### 废物流

无。

##### 基本流

###### 土壤直接氧化亚氮 (`soil_n2o_emission`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 按声明物种、状态、介质和去向选择具体流
- 流属性 / 单位: kg N2O
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: route_specific（`route_specific`）
- 归一化基础: per crop cycle, normalized by accepted oilseed output
- 基础类型: `crop_cycle`
- 证据类型: calculated_from_collection（`calculated_from_collection`）
- 收集协议: `cp_emissions`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.02
  - 单位: kg N2O/kg product
  - 基础: per crop cycle, normalized by accepted oilseed output
  - 基础类型: `crop_cycle`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 进入水体的硝酸盐损失 (`nitrate_loss_to_water`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 按声明物种、状态、介质和去向选择具体流
- 流属性 / 单位: kg nitrate-N
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: route_specific（`route_specific`）
- 归一化基础: per crop cycle, normalized by accepted oilseed output
- 基础类型: `crop_cycle`
- 证据类型: calculated_from_collection（`calculated_from_collection`）
- 收集协议: `cp_emissions`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.2
  - 单位: kg nitrate-N/kg product
  - 基础: per crop cycle, normalized by accepted oilseed output
  - 基础类型: `crop_cycle`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

### 过程: 收获与籽粒脱出 (`harvest_and_extraction`)

#### 投入

##### 产品流

###### 田间可收获作物投入 (`standing_crop_input`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 按声明物种、状态、介质和去向选择具体流
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: site_specific（`site_specific`）
- 归一化基础: gross harvestable crop entering harvest
- 基础类型: `process_output`
- 证据类型: calculated_from_collection（`calculated_from_collection`）
- 收集协议: `cp_yield`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 1
  - 上限: 5
  - 单位: kg/kg accepted product
  - 基础: gross harvestable crop entering harvest
  - 基础类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 收获机械能源 (`harvest_energy`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 流集合组: `mobile-machinery-fuel`
- 流属性 / 单位: L, kg, MJ or kWh
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: technology_specific（`technology_specific`）
- 归一化基础: per harvested lot
- 基础类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_energy`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.5
  - 单位: L diesel-equivalent/kg product
  - 基础: per harvested lot
  - 基础类型: `crop_cycle`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

##### 废物流

无。

##### 基本流

无。

#### 产出

##### 产品流

###### 脱出后的原始油籽 (`raw_oilseed_grain`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 其他未另分类油籽 `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: product_specific（`product_specific`）
- 归一化基础: gross raw seed at measured moisture
- 基础类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_harvest`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 1
  - 上限: 3
  - 单位: kg/kg accepted product
  - 基础: gross raw seed at measured moisture
  - 基础类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

##### 废物流

###### 收获与脱出残余物 (`harvest_residue`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 按声明物种、状态、介质和去向选择具体流
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: route_specific（`route_specific`）
- 归一化基础: per harvested lot
- 基础类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_harvest`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 4
  - 单位: kg/kg raw seed
  - 基础: per harvested lot
  - 基础类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 田间与操作损失 (`harvest_losses`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 按声明物种、状态、介质和去向选择具体流
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: site_specific（`site_specific`）
- 归一化基础: per harvested lot
- 基础类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_harvest`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg raw seed
  - 基础: per harvested lot
  - 基础类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

##### 基本流

无。

### 过程: 干燥与初级整理 (`drying_and_conditioning`)

#### 投入

##### 产品流

###### 原始油籽投入 (`raw_oilseed_input`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 其他未另分类油籽 `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: product_specific（`product_specific`）
- 归一化基础: incoming conditioning lot
- 基础类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_conditioning`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 1
  - 上限: 3
  - 单位: kg/kg conditioned seed
  - 基础: incoming conditioning lot
  - 基础类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 整理能源 (`conditioning_energy`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 流属性 / 单位: kWh, MJ, L or kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: technology_specific（`technology_specific`）
- 归一化基础: per conditioned lot
- 基础类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_energy`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 2
  - 单位: kWh-equivalent/kg conditioned seed
  - 基础: per conditioned lot
  - 基础类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 清洗水 (`cleaning_water`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 流集合: `flow-set.water-use`
- 流集合版本: `0.2.0`
- 流集合组: `process-water`
- 流属性 / 单位: kg or m3
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: route_specific（`route_specific`）
- 归一化基础: per conditioned lot
- 基础类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_conditioning`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 5
  - 单位: L/kg conditioned seed
  - 基础: per conditioned lot
  - 基础类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

##### 废物流

无。

##### 基本流

无。

#### 产出

##### 产品流

###### 整理后油籽 (`conditioned_oilseed`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 其他未另分类油籽 `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: product_specific（`product_specific`）
- 归一化基础: conditioned lot output
- 基础类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_conditioning`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0.5
  - 上限: 1
  - 单位: kg/kg raw seed
  - 基础: conditioned lot output
  - 基础类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

##### 废物流

###### 清理弃物与杂质 (`cleaning_rejects`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 按声明物种、状态、介质和去向选择具体流
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: site_specific（`site_specific`）
- 归一化基础: per conditioned lot
- 基础类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_conditioning`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.5
  - 单位: kg/kg raw seed
  - 基础: per conditioned lot
  - 基础类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

##### 基本流

###### 干式操作粉尘 (`dust_release`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 按声明物种、状态、介质和去向选择具体流
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: technology_specific（`technology_specific`）
- 归一化基础: per conditioned lot
- 基础类型: `process_output`
- 证据类型: calculated_from_collection（`calculated_from_collection`）
- 收集协议: `cp_conditioning`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.05
  - 单位: kg/kg conditioned seed
  - 基础: per conditioned lot
  - 基础类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

### 过程: 分级、包装与储存 (`grading_packaging_and_storage`)

#### 投入

##### 产品流

###### 整理后油籽投入 (`conditioned_oilseed_input`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 其他未另分类油籽 `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: product_specific（`product_specific`）
- 归一化基础: incoming finalization lot
- 基础类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_final`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 1
  - 上限: 1.5
  - 单位: kg/kg product
  - 基础: incoming finalization lot
  - 基础类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 包装材料 (`packaging_materials`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 流集合: `flow-set.packaging-function`
- 流集合版本: `0.2.0`
- 流集合组: `flexible-packaging`
- 流属性 / 单位: kg or item
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: product_specific（`product_specific`）
- 归一化基础: per final product lot
- 基础类型: `reference_flow`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_packaging`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.2
  - 单位: kg/kg product
  - 基础: per final product lot
  - 基础类型: `reference_flow`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 储存与装车能源 (`storage_energy`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 流集合组: `electricity-supply`
- 流属性 / 单位: kWh
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: site_specific（`site_specific`）
- 归一化基础: per final product lot
- 基础类型: `reference_flow`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_energy`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.5
  - 单位: kWh/kg product
  - 基础: per final product lot
  - 基础类型: `reference_flow`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

##### 废物流

无。

##### 基本流

无。

#### 产出

##### 产品流

###### 门点声明的其他油籽 (`reference_product`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 其他未另分类油籽 `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: product_specific（`product_specific`）
- 归一化基础: reference flow
- 基础类型: `reference_flow`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_final`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg product
  - 基础: reference flow
  - 基础类型: `reference_flow`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 降级但可销售的油籽 (`downgraded_oilseed`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 其他未另分类油籽 `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: product_specific（`product_specific`）
- 归一化基础: per grading lot
- 基础类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_final`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg graded input
  - 基础: per grading lot
  - 基础类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

##### 废物流

###### 最终弃物与包装废物 (`final_rejects`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 所选流: 按声明物种、状态、介质和去向选择具体流
- 流属性 / 单位: kg
- 数量规则: 按前景记录测量或计算；不得以筛选区间代替实际值。
- 数值模式: 前景记录（`foreground_record`）
- 特异性: site_specific（`site_specific`）
- 归一化基础: per final product lot
- 基础类型: `reference_flow`
- 证据类型: collected_record（`collected_record`）
- 收集协议: `cp_final`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.5
  - 单位: kg/kg product
  - 基础: per final product lot
  - 基础类型: `reference_flow`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

##### 基本流

无。

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| direct_assignment | 所有节点 | 可测量的物种、地块、批次、等级及用途专属投入直接归属。 | mass-balance-identity |
| multi_output | 可销售籽粒等级及物种特定联产品 | 分别记录所有预期产出；共享负荷默认按声明水分基础的质量分配，采用经济分配须提供复核证据。 | mass-balance-identity |
| residue_fate | 秸秆、果壳、荚壳和弃物 | 仅有独立可销售去向及参考流时作为联产品；否则作为残余或废物并记录去向。 | mass-balance-identity |
| shared_assets | 共享机械、干燥和储存 | 按实测运行小时、能耗或处理质量归属一次，防止田间与整理节点重复计算。 | mass-balance-identity |

## 8. 前景数据收集、计算与质量规则

所有范围均为暂定 QA 筛选区间，不是默认清单值或合规限值。

### 数据收集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_field | managed_production | field inputs | primary activity record | species, field area, planting, product IDs, nutrient composition, water and protection products | field log, invoices and meters | ha; kg; m3; L | each operation | complete crop cycle | declared field or protected unit | sum by product and field-cycle; each nutrient product once | invoices, labels, calibrated meters |
| cp_energy | all processes | energy carriers | meter or allocation record | carrier, quantity, unit, equipment, hours and process | meter, fuel ticket or equipment log | kWh; MJ; L; kg | each operation or batch | complete crop cycle and conditioning lots | named field and facility | sum by carrier and assign once to process | meter calibration, invoices, machine logs |
| cp_yield | managed_production | crop yield | weighing and survey record | standing estimate, harvested mass, area and loss | calibrated scale and field survey | kg; ha | each harvest lot | complete harvest window | field and lot | reconcile standing, harvested and field-loss mass | scale certificate and survey sheet |
| cp_emissions | managed_production | soil emissions | calculation input record | N inputs, species, medium, soil and method factors | nutrient ledger and declared method | kg N; kg emission | each crop cycle | all managed periods | field | calculate separately by species and receiving medium | nutrient ledger and method sheet |
| cp_harvest | harvest_and_extraction | seed and residues | lot mass record | gross crop, raw seed, residues, losses, technology and destination | calibrated weighing and lot log | kg | each lot | complete harvest window | field and lot | mass reconcile all outputs and stock change | scale certificate and lot tickets |
| cp_conditioning | drying_and_conditioning | moisture, product and rejects | batch record | incoming and outgoing mass, moisture, foreign matter, dust, water and route | scale, moisture test, meter and batch log | kg; %; m3 | each batch | all conditioning batches | conditioning line and batch | dry-matter and wet-mass reconciliation by batch | scale and moisture calibration, batch sheet |
| cp_packaging | grading_packaging_and_storage | packaging | material issue record | material type, mass, count, reuse and product lot | warehouse issue and packaging log | kg; item | each lot | all packed lots | packing line and lot | sum virgin and reused materials separately | invoice, issue ticket, count check |
| cp_final | grading_packaging_and_storage | grades and reference product | final lot record | species, use, moisture, grade, accepted, downgraded, rejected and stock change | calibrated scale, grade test and dispatch ticket | kg; % | each lot | all released lots | facility, store and lot | reconcile incoming with grades, rejects and stock change | scale certificate, lab or grade report, dispatch ticket |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 产出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | 全部投入 | 同一作物周期或批次投入除以声明门点合格产品净质量。 | 活动记录及产品质量 | 每 kg 参考产品清单 |  |
| moisture_balance | 干燥 | 干物质守恒；以实测进出水分计算除水量并核对损失。 | 进出质量及水分 | 干物质差异 | mass-balance-identity |
| lot_balance | 收获及整理 | 投入加库存减少等于所有产品、残余、废物、排放及库存增加。 | 全部实测批次流 | 质量差异 | mass-balance-identity |
| nutrient_expand | 养分投入 | 每个物理产品只生成一次交换，并保留组成用于分析 N/P/K，禁止重复。 | 产品 ID、质量及组成 | 具体产品交换及养分台账 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | 参考产品 | 物种、用途、水分、等级、路线及门点均非空。 | 批次和发运记录 |
| dq_mass | 全过程 | 校准秤并核对田间、收获、整理和最终批次质量平衡。 | 校准证书与平衡表 |
| dq_route | 条件过程 | 仅启用实际发生的整理、包装和储存路线。 | 作业和批次日志 |
| dq_binding | 全部交换 | 流集合展开后每个最终交换须有已核实 UUID 和选择证据。 | 流身份审计 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_other | 产品身份 | 具名物种必须落在 CPC 01449，且不得已有单独 CPC 油籽叶节点。 | unsd-cpc-30 |
| validate_reference | 参考流 | 核对 1 kg 净质量及物种、用途、水分、等级和门点限定。 | mass-balance-identity |
| validate_balance | 各批次 | 核对投入、产出、损失、库存变化及水分变化，不得重复计算转移流。 | mass-balance-identity |
| validate_ranges | 每张卡 | 超出筛选区间须调查，但有支持的真实测量不得仅因此被拒绝。 |  |
| validate_sets | 参数化投入 | 核对当前流集合版本、组约束和具体 UUID 展开证据；每个过程最多一个养分卡。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 物种、田块及批次特定的其他油籽前景数据包 |
| downstream_use | `secondary_dataset`；经地域、技术和时间匹配后可作 `background_dataset` |
| allowed_use | 一个具名 CPC 01449 油籽从种植至声明门点的建模 |
| excluded_use | 不用于其他 CPC 油籽、播种专用种子、油、粕或多物种平均 |
| required_metadata | 物种、用途、水分、等级、地域、周期、生产技术、整理路线、门点及分配 |
| required_quality_disclosure | 称量与水分核对、流集合展开、未解析身份、暂定范围和数据缺口 |
| update_trigger | 物种、用途、技术、水分、等级、门点、分配或方法因子变化 |

## 11. 数据来源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc-30 | official_guidance | United Nations Statistics Division, CPC Version 3.0, https://unstats.un.org/unsd/classifications/Econ/cpc | 类别边界及剩余类别判断 |
| fao-grain-storage | official_guidance | FAO, Grain storage techniques, https://www.fao.org/4/s1250e/S1250E0u.htm | 干燥、清理、储存及水分记录路线 |
| mass-balance-identity | method_factor | 质量投入与产出、损失及库存变化的守恒关系 | 批次及水分质量核对 |
