---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.lentils-dry
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 干扁豆

## 1. 范围与适用性

本PCR涵盖受控田间生产、直接联合收获或割晒后联合收获、脱粒、农场清理、分级以及条件性通风或干燥后的成熟干燥完整Lens culinaris粮粒，交接点为农场门。排除青鲜蔬菜扁豆、作为种子销售的种用商品、芽菜、脱皮或分瓣扁豆、面粉、熟制品、下游工业加工、包装及离场运输。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.lentils-dry |
| classification_refs | CPC 3.0: 01704 Lentils, dry |
| covered_products | 农场门成熟干燥完整Lens culinaris粮粒 |
| excluded_products | 青鲜蔬菜扁豆；种用商品；芽菜；脱皮/分瓣扁豆；面粉；熟制及下游加工产品 |
| representative_product | 成熟干燥完整扁豆粮粒 |
| production_route | 受控生物生产父活动field_production；每批次互斥选择直接联合收获或割晒后联合收获；清理和分级；直接联合收获与割晒后联合收获之间的替代技术路线差异会改变收获作业记录；条件性通风/干燥改变能源、水分损失和验证记录 |
| market_state | 声明类别、颜色、等级、水分、损伤、裂粒/破碎、杂质和调理路线的未加工完整干粮粒 |

## 3. 基准流

| Field | Value |
| --- | --- |
| What | 农场门成熟干燥完整Lens culinaris粮粒 |
| How much | 1,000 kg |
| How well | 声明类别、颜色、等级、水分、裂粒/破碎及损伤比例、杂质、收获和调理路线 |
| How long or cycle | 一个作物周期至农场门交接 |
| reference_flow_link | `lentils_dry_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Lentils, dry `ec8a8323-9812-417c-896f-3b98f11d3cc9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Lens culinaris；成熟完整粮粒；市场类别和颜色；农场门等级；湿基水分；裂粒/破碎和损伤比例；杂质；收获路线；通风/干燥状态 |
| Binding | `fixed` |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 粮粒、残体、拒收物和损失质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告水分基准，并在归一化前换算到声明的农场门水分。 |
| `field_area` | 田间记录 | Area | ha | 使用同一收获面积归一化作物周期投入和产出。 |
| `moisture_balance` | 通风和干燥 | Mass fraction | % wet basis | 逐批测量进出料水分，并用湿基质量平衡计算去除水分。 |

## 5. 系统边界

前景系统从已准备田块和种植材料开始。田间生产将成熟站立作物交给独立收获节点；收获将未清理粮粒交给初级处理；分级形成合格、降级和拒收状态；条件性稳定化结束于农场门交接。每批次的直接联合收获与割晒后联合收获互斥。作业记录按田块、批次和运行批号索引，共享负荷按实测吞吐量仅分配一次。数据集采用覆盖一个作物周期的单一期间清单；除条件性稳定化外无储存，也无跨周期资产事件。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 已准备田块以及供一个作物周期使用的外购或自留种子 |
| starting_condition_role | 前景作物生产起始条件 |
| product_classification_scope | 农场门成熟干燥完整Lens culinaris粮粒 |
| recursive_input_rule | 用作种子的自留扁豆粮粒仅作为上一作物周期的种子投入记录一次，不在当前周期递归生成。 |
| upstream_dataset_requirement | 对种子、实际养分和作物保护产品、能源、电力和灌溉供应使用上游数据集。 |
| disclosure | 声明地理位置、作物年份、品种/类别、田块面积、前茬、耕作、灌溉、收获路线、批次水分和等级、调理路线及全部残体去向。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_farm_gate` | all processes | 纳入田间作业、收获、脱粒、农场清理、分级和交接前条件性通风/干燥；排除下游加工。 | `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019` |
| `boundary_route` | harvest | 每批次仅选择一种收获路线，仅在适用时记录割晒作业和落粒。 | `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019` |
| `boundary_conditioning` | stabilization | 仅在需要时纳入通风/干燥，并保留进出料水分、能源、时长和拒收证据。 | `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | 扁豆田间管理生产 | required | 一个作物周期 | 受控生物生产父活动；从已准备田块到成熟站立作物 | 每种植公顷、每作物周期 |
| `harvest_threshing` | 收获与脱粒 | required | 每批选择直接联合收获或割晒后联合收获 | 具有替代技术路线差异的独立收获节点；从站立作物到未清理粮粒 | 每收获公顷 |
| `primary_conditioning` | 农场清理 | required | 至少一次清理 | 初级处理；从收获粮粒到清洁粮粒 | 每1,000 kg清洁粮粒 |
| `grading_sorting` | 分级与去向指定 | required | 每个农场门批次 | 区分合格、降级、拒收和返工状态 | 每1,000 kg分级投入 |
| `stabilization` | 通风或干燥 | conditional | 进料水分或储存风险需要干预 | 稳定化节点；从合格粮粒到稳定农场门粮粒 | 每1,000 kg最终干扁豆 |

### 过程：扁豆田间管理生产 (`field_production`)

#### 输入

##### 产品流

###### 种植用种子 (`planting_seed`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 种植用扁豆种子
- 流属性/单位: Mass / kg
- 数量规则: 计量的播种种子质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每作物周期每种植公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源: `manitoba-lentils-production-management`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 33.6
  - 上限: 89.7
  - 单位: kg/ha
  - 基准: 每种植公顷种子
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `manitoba-lentils-production-management`

###### 农业养分供应 (`agricultural_nutrient_supply`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 实际农业养分产品
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- 流属性/单位: Mass / kg
- 数量规则: 汇总实测的矿质、有机及含养分改良产品并保留产品身份和养分分析
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每作物周期每种植公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg products/ha
  - 基准: 每种植公顷实际养分产品总量
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `ipcc-2019-managed-soils`

###### 作物保护产品 (`crop_protection_products`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 作物保护产品
- 流属性/单位: Mass / kg
- 数量规则: 计量种衣剂、除草剂、杀菌剂、杀虫剂、催熟干燥剂和助剂产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每作物周期每种植公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源: `manitoba-lentils-production-management`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: kg products/ha
  - 基准: 每种植公顷商业产品
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `manitoba-lentils-production-management`

###### 灌溉水 (`irrigation_water`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 灌溉水
- 流属性/单位: Volume / m3
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则: 计量或计算的输送灌溉水；经核实雨养田为零
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每作物周期每种植公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源: `fao-crop-water-needs`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: m3/ha
  - 基准: 每种植公顷输送灌溉水
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `fao-crop-water-needs`

###### 田间能源载体 (`field_energy`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 田间燃料和电力
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 计量整地、播种、施药和灌溉能源，不含收获
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每作物周期每种植公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_energy_operations`
- 来源: `ndsu-pulse-field-guide-2019`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: MJ/ha
  - 基准: 每种植公顷田间能源
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `ndsu-pulse-field-guide-2019`

##### 废物流


##### 基本流

###### 管理土壤氧化亚氮 (`soil_n2o`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 排放到空气的氧化亚氮
- 流属性/单位: Mass / kg
- 数量规则: 依据采集的氮投入和残体记录采用IPCC选定层级计算
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每作物周期每种植公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 方法公式 (`method_formula`)
- 采集协议: `cp_field_emissions`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg N2O/ha
  - 基准: 每种植公顷直接和间接N2O
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `ipcc-2019-managed-soils`

#### 输出

##### 产品流

###### 成熟站立扁豆作物 (`standing_mature_crop`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 成熟站立扁豆作物
- 流属性/单位: Mass / kg
- 数量规则: 用收获粮粒、残体和田间损失进行质量平衡
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每作物周期每种植公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_mass_balance`
- 来源: `mass-balance-identity`; `ndsu-pulse-field-guide-2019`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 500
  - 上限: 10000
  - 单位: kg/ha
  - 基准: 每公顷成熟地上作物质量
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`; `ndsu-pulse-field-guide-2019`

##### 废物流


##### 基本流


### 过程：收获与脱粒 (`harvest_threshing`)

#### 输入

##### 产品流

###### 接收的站立作物 (`standing_crop_input`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 成熟站立扁豆作物
- 流属性/单位: Mass / kg
- 数量规则: 等于同一田块的成熟站立作物交接量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每收获种植公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 方法公式 (`method_formula`)
- 采集协议: `cp_harvest_mass_balance`
- 来源: `mass-balance-identity`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 500
  - 上限: 10000
  - 单位: kg/ha
  - 基准: 每收获公顷接收的站立作物
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

###### 收获能源载体 (`harvest_energy`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 收获燃料和电力
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 计量联合收获能源；仅割晒路线计入割晒机能源
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准: 每收获种植公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_energy_operations`
- 来源: `ndsu-pulse-field-guide-2019`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 3000
  - 单位: MJ/ha
  - 基准: 所选路线每公顷收获能源
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `ndsu-pulse-field-guide-2019`

##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 未清理收获粮粒 (`harvested_grain`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 未清理收获扁豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 秤量或校准产量监测器测得并记录水分的质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每收获种植公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_mass_balance`
- 来源: `ndsu-pulse-field-guide-2019`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 500
  - 上限: 4000
  - 单位: kg/ha
  - 基准: 每公顷未清理收获粮粒
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `ndsu-pulse-field-guide-2019`

###### 回收秸秆和荚壳材料 (`straw_pod_material`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 扁豆秸秆和荚壳材料
- 流属性/单位: Mass / kg
- 数量规则: 实测回收干物质；仅在有独立预期交接时作为产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每收获种植公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_mass_balance`
- 来源: `mass-balance-identity`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kg/ha
  - 基准: 每公顷回收秸秆和荚壳干物质
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

##### 废物流

###### 田间与收获损失 (`field_harvest_loss`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 田间损失的扁豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 代表性损失样方外推至收获面积
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准: 每收获种植公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_mass_balance`
- 来源: `ndsu-pulse-field-guide-2019`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg/ha
  - 基准: 每公顷落粒和未收集粮粒
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `ndsu-pulse-field-guide-2019`

##### 基本流


### 过程：农场清理 (`primary_conditioning`)

#### 输入

##### 产品流

###### 接收未清理粮粒 (`uncleaned_grain_input`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 未清理收获扁豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 与收获批次关联的实测投入质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg清洁粮粒产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 来源: `mass-balance-identity`; `manitoba-lentils-production-management`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1250
  - 单位: kg/1000 kg output
  - 基准: 每1,000 kg清洁产出的未清理投入
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`; `manitoba-lentils-production-management`

###### 清理能源 (`cleaning_energy`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 清理电力和燃料
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 清理遍次和循环的计量能源
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1,000 kg清洁粮粒产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_operations`
- 来源: `ndsu-pulse-field-guide-2019`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: MJ/1000 kg output
  - 基准: 每1,000 kg清洁产出的清理能源
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `ndsu-pulse-field-guide-2019`

##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 清洁粮粒 (`cleaned_grain`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 清洁扁豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 去除松散杂质后的实测产出
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg清洁粮粒产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 来源: `mass-balance-identity`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg/1000 kg output
  - 基准: 清洁产出定量基准
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

##### 废物流

###### 清理拒收物和杂质 (`cleaning_rejects`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 清理拒收物和杂质
- 流属性/单位: Mass / kg
- 数量规则: 按返工、回收或处置去向计量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg清洁粮粒产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 来源: `mass-balance-identity`; `manitoba-lentils-production-management`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 250
  - 单位: kg/1000 kg output
  - 基准: 每1,000 kg清洁产出的拒收物
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`; `manitoba-lentils-production-management`

##### 基本流


### 过程：分级与去向指定 (`grading_sorting`)

#### 输入

##### 产品流

###### 接收清洁粮粒 (`cleaned_grain_input`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 清洁扁豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 保留批次身份的实测分级投入
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg分级投入
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_lot`
- 来源: `mass-balance-identity`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg/1000 kg input
  - 基准: 进入分级的清洁粮粒
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 预期合格等级粮粒 (`accepted_grade_grain`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 合格等级扁豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 实测合格质量，排除降级、拒收和返工量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1,000 kg分级投入
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_lot`
- 来源: `mass-balance-identity`; `manitoba-lentils-production-management`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 750
  - 上限: 1000
  - 单位: kg/1000 kg input
  - 基准: 每1,000 kg分级投入的合格粮粒
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`; `manitoba-lentils-production-management`

###### 预期降级共产品粮粒 (`downgraded_grain`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 降级扁豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 具有独立去向的实测降级质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1,000 kg分级投入
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_lot`
- 来源: `mass-balance-identity`; `manitoba-lentils-production-management`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 250
  - 单位: kg/1000 kg input
  - 基准: 每1,000 kg分级投入的降级可用粮粒
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`; `manitoba-lentils-production-management`

##### 废物流

###### 分级拒收物与返工料 (`grading_rejects`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 拒收扁豆材料
- 流属性/单位: Mass / kg
- 数量规则: 按返回、回收或处置去向计量裂粒、破损粒、变色粒、受损粒或杂质
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1,000 kg分级投入
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_lot`
- 来源: `mass-balance-identity`; `manitoba-lentils-production-management`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 250
  - 单位: kg/1000 kg input
  - 基准: 每1,000 kg分级投入的拒收材料
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`; `manitoba-lentils-production-management`

##### 基本流


### 过程：通风或干燥 (`stabilization`)

#### 输入

##### 产品流

###### 需稳定化的合格粮粒 (`accepted_grain_input`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 合格等级扁豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 实测湿基投入质量和进料水分
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg最终干扁豆
- 基准类型: 基准流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_stabilization_lot`
- 来源: `mass-balance-identity`; `manitoba-lentils-production-management`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1250
  - 单位: kg/1000 kg final
  - 基准: 每1,000 kg最终干扁豆的湿料投入
  - 基准类型: 基准流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`; `manitoba-lentils-production-management`

###### 稳定化能源 (`stabilization_energy`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 通风或干燥能源
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 按批次计量风机电力和干燥燃料
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1,000 kg最终干扁豆
- 基准类型: 基准流 (`reference_flow`)
- 证据类型: 依据采集计算 (`calculated_from_collection`)
- 采集协议: `cp_energy_operations`
- 来源: `ndsu-pulse-field-guide-2019`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: MJ/1000 kg final
  - 基准: 每1,000 kg最终干扁豆的风机和干燥能源
  - 基准类型: 基准流 (`reference_flow`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `ndsu-pulse-field-guide-2019`

##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 农场门干扁豆 (`lentils_dry_farm_gate`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 干扁豆 `ec8a8323-9812-417c-896f-3b98f11d3cc9`
- 流属性/单位: Mass / kg
- 绑定: `fixed`
- 数量规则: 在声明出料水分下1,000 kg基准产品
- 数值来源模式: 固定值 (`fixed_value`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每1,000 kg基准产品
- 基准类型: 基准流 (`reference_flow`)
- 证据类型: 方法公式 (`method_formula`)
- 来源: `mass-balance-identity`; `manitoba-lentils-production-management`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg/1000 kg reference product
  - 基准: 每基准流最终合格粮粒
  - 基准类型: 基准流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`; `manitoba-lentils-production-management`

##### 废物流

###### 稳定化拒收物 (`stabilization_rejects`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 稳定化拒收扁豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量热损伤、霉变或拒收质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg最终干扁豆
- 基准类型: 基准流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_stabilization_lot`
- 来源: `mass-balance-identity`; `manitoba-lentils-production-management`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/1000 kg final
  - 基准: 每1,000 kg最终干扁豆的拒收物
  - 基准类型: 基准流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`; `manitoba-lentils-production-management`

##### 基本流

###### 去除水分 (`water_removed`)

按关联田块或批次记录该流，并保留其去向和交接。

- 选定流: 排放到空气的水
- 流属性/单位: Mass / kg
- 数量规则: 湿基进出料水分质量平衡并与拒收物核对
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg最终干扁豆
- 基准类型: 基准流 (`reference_flow`)
- 证据类型: 方法公式 (`method_formula`)
- 采集协议: `cp_stabilization_lot`
- 来源: `mass-balance-identity`; `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019`
- 数量范围: 完整定量QA范围
  - 范围角色: QA校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 250
  - 单位: kg/1000 kg final
  - 基准: 每1,000 kg最终干扁豆去除的水
  - 基准类型: 基准流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`; `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | grain only | 当其他产出为残体或废物时，将负荷归于合格干扁豆；披露去向但不给予抵扣。 | `mass-balance-identity` |
| `allocation_coproduct` | intended outputs | 列举每个具有独立预期用途的秸秆/荚壳或降级粮粒产出并采用披露的研究特定分配；因果关系支持时采用干质量，否则披露经济分配和价格。 | `mass-balance-identity` |
| `allocation_batch` | fields, lots and runs | 将投入、产出、清洁和换线与运行批次关联；共享负荷按实测吞吐量仅分配一次。 | `mass-balance-identity` |
| `allocation_rework` | returned material | 保留既有负荷，仅增加返工增量，并在最终去向仅计量一次。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_production` | seed, nutrient, protection, irrigation | invoices, logs, meter | field; area; product; amount; analysis; date | 将施用记录与田块核对 | kg; L; m3; ha | each application | crop cycle | each field | 按产品汇总后按面积归一化 | invoice; calibrated meter; label |
| `cp_energy_operations` | all | fuel and electricity | meter and machine log | process; field/lot; carrier; quantity; factor; runtime | 仪表与日志核对 | L; kg; kWh; MJ | each operation | crop cycle to hand-off | field/facility | 按有据因子换算；仅分配一次 | calibration; invoice; runtime |
| `cp_field_emissions` | `field_production` | N2O | calculated record | N by source; residue N; factors; fractions | 选定IPCC层级 | kg N; kg N2O | crop cycle | crop cycle | each field | 先逐田块计算 | factor version; calculation sheet |
| `cp_harvest_mass_balance` | `harvest_threshing` | grain, residues, losses | scale, monitor, samples | field; route; area; masses; moisture; loss | 称量和代表性损失采样 | kg; %; ha | field/lot | harvest | each field | 水分对齐并核对产出 | calibration; sampling plan |
| `cp_conditioning_lot` | `primary_conditioning` | grain and rejects | scale and log | lot; input; output; moisture; pass; reject; destination | 称量每个进出流 | kg; % | lot/pass | conditioning | each lot | 汇总遍次且不重复返工 | calibration; closure |
| `cp_grading_lot` | `grading_sorting` | accepted, downgrade, reject, rework | ticket and test | lot; grade; colour; moisture; splits; damage; foreign matter; mass; destination | 称量并分类每个产出 | kg; % | lot | grading | each lot | 核对互斥去向 | ticket; test; calibration |
| `cp_stabilization_lot` | `stabilization` | grain, water, reject | moisture, scale, operation log | lot; inlet/outlet mass and moisture; reject; airflow; duration; energy | 干预前后检测并称量 | kg; %; h | lot | intervention | each lot | 含拒收物的水分平衡 | calibrated moisture meter and scale |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | all | normalized amount = process amount × 1,000 / accepted final mass | process amount; final mass | per 1,000 kg reference flow | `mass-balance-identity` |
| `calc_moisture` | grain/drying | dry solids = wet mass × (1 − moisture fraction); reconcile water in rejects | wet masses and moisture | aligned grain and water removed | `mass-balance-identity`; `manitoba-lentils-production-management` |
| `calc_n2o` | soil | 采用披露的IPCC层级，并按44/28将N2O-N换算为N2O。 | N activity and factors | kg N2O | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | harvest/conditioning/grading | input = exclusive outputs + losses + releases + stock change within uncertainty | linked masses | closure | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | 保留物种、类别、颜色、年份、等级、水分、裂粒/破碎、损伤、杂质、收获和调理路线。 | lot ticket and tests |
| `dq_completeness` | crop cycle | 覆盖全部田间作业和收获、清理、分级、返工及稳定化批次。 | field-to-lot trace |
| `dq_mass_balance` | material processes | 核对全部产品、残体、废物、损失、排放和库存变化。 | closure worksheet |
| `dq_representativeness` | dataset | 报告地理、作物年份、田块、类别、灌溉、收获路线、干燥比例和汇总权重。 | metadata and lot index |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference flow | 要求固定UUID、1,000 kg数量和全部限定条件。 | `manitoba-lentils-production-management` |
| `validate_route` | harvest | 每批次仅选直接联合收获或割晒后联合收获之一，不得同时计入两条路线。 | `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019` |
| `validate_nutrient_cardinality` | field production | 至多允许一张养分供应产品投入卡，且仅绑定flow-set.agricultural-nutrient-supply version 0.3.0；禁止独立N、P、K、有机肥或改良剂卡。 | `ipcc-2019-managed-soils` |
| `validate_outputs` | harvest/grading | 列举预期产品、残体、损失、合格、降级、拒收及交接；对每个共产品作出归属决定。 | `mass-balance-identity` |
| `validate_rework` | cleaning/grading | 将每个不合格状态关联到返工、降级、回收或处置，并防止重复计量。 | `mass-balance-identity` |
| `validate_batch` | all runs | 将投入、产出、清洁和换线关联到田块/批次/运行批号，并仅分配一次共享负荷。 | `mass-balance-identity` |
| `validate_conditioning` | stabilization | 使用稳定化时，要求进出料水分、能源、时长、去除水分、拒收物和闭合。 | `manitoba-lentils-production-management`; `ndsu-pulse-field-guide-2019` |
| `validate_ranges` | all cards | 每张卡恰好要求一条完整数量范围，含上下限、单位、分母/基准、基准类型、证据类型和来源ID，并在英文、中文和结构化输出间对齐。 | `mass-balance-identity` |

## 10. 发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 农场门干扁豆前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` 经代表性审查后 |
| allowed_use | 需要农场门成熟完整干扁豆粮粒的LCA和足迹 |
| excluded_use | 蔬菜扁豆、种用商品、芽菜、分瓣、面粉、熟制品或未披露下游加工 |
| required_metadata | 地理；作物年份；田块/批次覆盖；类别；颜色；等级；水分；裂粒/损伤/杂质；前茬；耕作；灌溉；收获和调理路线；去向；分配 |
| required_quality_disclosure | 初级数据覆盖；校准；缺失数据；估算；质量平衡；因子版本；权重；范围例外 |
| update_trigger | 类别组合、地理、年份、管理、路线、技术、规格、去向、分配或因子变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `manitoba-lentils-production-management` | official_guidance | Province of Manitoba, Lentils — Production and Management, https://www.gov.mb.ca/agriculture/crops/crop-management/print,lentils.html | 播种量、路线、收获水分、裂粒、通风和等级问题 |
| `ndsu-pulse-field-guide-2019` | extension_guidance | NDSU Extension A1922, Pulse Crop Production Field Guide for North Dakota, https://www.ndsu.edu/agriculture/sites/default/files/2025-09/a1922.pdf | 生产、收获、损伤和自然风干燥 |
| `fao-crop-water-needs` | official_guidance | FAO, Crop Water Needs, Chapter 3, https://www.fao.org/4/s2022e/s2022e07.htm | 扁豆/豆类作物系数和灌溉背景 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤N2O方法和氮活动数据 |
| `mass-balance-identity` | method_factor | 对水分对齐的投入、产出、损失、排放和库存变化应用质量守恒 | 交接、水分、质量平衡、分配和返工 |
