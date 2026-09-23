---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.live-plants-bulbs-tubers-and-roots-cuttings-and-slips-mushroom-spawn
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 活植物；鳞茎、块茎和根；插条和接穗；蘑菇菌种

## 1. 范围与适用性

本 PCR 覆盖苗圃或繁殖交接点的一种活种植材料。每个数据集只表示一种物种或品种以及一种形态：活植物、鳞茎、块茎、种植根、插条、接穗或蘑菇菌种。不得把 CPC 复合类别标签建模成一个混合物理参考产品。

必须声明交付质量是否包括栽培容器、支撑物、基质、载体、附着水分和包装呈现材料，并声明可种植质量、活力或定植标准、等级、健康检查、植物检疫状态和交接关口。排除切花、食用蘑菇、食用根/块茎、种子、不可种植不合格物和交接后的种植。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.live-plants-bulbs-tubers-and-roots-cuttings-and-slips-mushroom-spawn |
| classification_refs | CPC 3.0: 01961 |
| covered_products | 一种已声明物种/品种的一种种植材料形态：活植物、鳞茎、块茎、种植根、插条、接穗或蘑菇菌种 |
| excluded_products | 混合形态产品；切花；食用蘑菇；食用根/块茎；种子；不可种植不合格物；交接后的种植 |
| representative_product | 苗圃/繁殖交接点的一批可种植、单一物种/品种和形态的产品 |
| production_route | 物种/形态特定繁殖、苗圃或培养生产、可选培养基/容器准备和炼苗、分级、植物检疫放行及包装呈现 |
| market_state | 活体、有活力且可种植；声明裸根、容器、基质、载体或其他交付状态 |

替代路线保持独立的物种/形态和技术分层，除非数量、负担、质量状态和权重均可复现。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 苗圃/繁殖交接点的一种已声明物种/品种和一种形态的活种植材料 |
| How much | 交付态 1 kg；可附加株数，但必须用实测批次质量换算 |
| How well | 满足已声明活力/定植、等级、健康和植物检疫标准的可种植质量 |
| How long or cycle | 一个已声明繁殖批次/生产周期直至交接 |
| reference_flow_link | 未解析；平台没有覆盖完整 CPC 01961 且不缩窄物种/形态的核实流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 已声明物种/品种和形态的活种植材料（UUID 未解析） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种/品种；形态；路线；裸根/容器/基质/载体状态；组件包含关系；净/毛重和浇水基准；等级；活力/定植；植物检疫状态；关口；地理；批次/周期 |

苗圃甘蔗苗、油棕苗、浆果插条、树苗和山药种薯 UUID 禁止作为通用替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按一个已声明净/毛重和包含基准计量交付批次。 |
| `item_count_conversion` | 株数记录 | 质量和株数 | kg 和 count | 用代表性实测批次质量换算株数并保留抽样证据。 |
| `container_substrate_reconciliation` | 纳入组件 | 质量 | kg | 将生物材料、附着基质/载体和纳入容器核对到参考质量。 |
| `water_and_moisture_basis` | 所有形态 | 质量或体积 | kg 或 m3 | 声明浇水状态和计量时点；不得比较不相容的湿态/沥水态。 |
| `quality_yield` | 合格和不合格状态 | 质量 | kg | 将合格、降级、退回和废弃状态与分级输入及实测变化核对。 |

## 5. 系统边界

边界从繁殖源/培养物、培养基和容器投入开始，包括繁殖、受控苗圃/培养运行、路线特定调理/炼苗、分级、植物检疫检查以及达到交接所需的包装呈现。排除交接后的分销和购买方种植。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 物种/形态特定繁殖源或培养物，以及单独记录的培养基、容器和公用工程投入 |
| starting_condition_role | 携带上游负担的繁殖源，不得作为零负担内部投入 |
| product_classification_scope | 每个数据集一个 CPC 01961 物种/品种和一种种植材料形态 |
| recursive_input_rule | 外购同类别材料需要相容上游数据集；自留繁殖源携带已归属负担 |
| upstream_dataset_requirement | 精确物种/形态/状态和关口相容；最终每个外部交换使用核实 UUID |
| disclosure | 物种/品种、形态、来源路线、批次/周期、生产期、容器/基质/载体包含、炼苗、等级、活力/定植、植物检疫状态、不合格去向和交接 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_single_item` | 所有数据集 | 只建模一种物种/品种和一种形态；禁止混合类别标签物理参考产品。 | `fao-nursery-practice` |
| `boundary_propagation` | `managed_propagation` | 包括繁殖源建立、增殖、水、营养、植保、公用工程和共享基础设施。 | `fao-nursery-practice` |
| `boundary_media_container` | `media_container_preparation` | 使用时包括培养基混合和容器，并声明哪些质量留在交付物中。 | `fao-nursery-practice` |
| `boundary_conditioning` | `conditioning_hardening` | 仅在实施时纳入交接前有界炼苗、修根、驯化和保活。 | `fao-nursery-practice` |
| `boundary_phytosanitary` | `grading_phytosanitary_release` | 纳入定义可种植和植物检疫状态的可追溯检查与病虫害管理。 | `ippc-ispm-36` |
| `boundary_packaging` | `presentation_handoff` | 按声明包含关系纳入跨交接点材料；排除后续分销。 | `fao-nursery-practice` |
| `boundary_route_separation` | 替代路线 | 在有可复现权重前分别记录拓扑、投入、产量、资产和质量关口。 | `fao-nursery-practice` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `media_container_preparation` | 培养基与容器准备 | `conditional` | 在混合培养基/载体或安装栽培容器时 | 配制与混合 | kg 已配制组合物 |
| `managed_propagation` | 受控繁殖与生物增殖 | `required` | 始终；按物种/形态声明苗圃、营养繁殖或菌种培养路线 | 受控生物生产与采收 | kg 有活力繁殖材料 |
| `conditioning_hardening` | 调理、炼苗与稳定化 | `conditional` | 交付前存在驯化、修根、水分调整或有界稳定化时 | 初级调理与保活 | kg 调理后材料 |
| `grading_phytosanitary_release` | 分级与植物检疫放行 | `required` | 始终；分别记录合格、降级、退回和废弃状态 | 分级与放行 | kg 放行可种植材料 |
| `presentation_handoff` | 包装呈现与苗圃/繁殖交接 | `required` | 始终；裸装或可重复资产不计入参考质量时可记录新增包装为零 | 包装呈现与参考交接 | 1 kg 参考产品 |

### 过程：培养基与容器准备 (`media_container_preparation`)

#### 输入

##### 产品流

###### 培养基、载体和基质成分 (`media_ingredients`)

该卡的身份和数量要求如下。

- 选定流: 已声明的路线特定成分；组成确定前身份未解析
- 流属性/单位: Mass / kg
- 数量规则: 分别计量每种成分；该汇总卡不授权通用基质 UUID。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Route-specific (`route_specific`)
- 归一化基准: 每 kg 已配制组合物
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_media_container_batch`
- 数量范围: 暂定范围或核对范围
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: kg/kg prepared assembly
  - 基准: 每 kg 配制输出的总成分
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 合并的肥料与营养改良剂 (`media_nutrients`)

该卡的身份和数量要求如下。

- 选定流: 实际矿质、有机及其他营养产品
- 流属性/单位: Mass / kg or compatible nutrient property/unit
- 绑定模式: `parameterized`
- 流集合: `flow-set.agricultural-nutrient-supply`
- 流集合版本: `0.3.0`
- 数量规则: 计量产品并保留养分组成；本过程只保留这一条合并卡。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 已配制组合物
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_media_container_batch`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg prepared assembly
  - 基准: 每 kg 配制输出的营养产品
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 培养基准备用工艺水 (`media_water`)

该卡的身份和数量要求如下。

- 选定流: 按前景来源选择的工艺水
- 流属性/单位: Volume / m3
- 绑定模式: `parameterized`
- 流集合: `flow-set.water-use`
- 流集合版本: `0.2.0`
- 流集合组: `process-water`
- 数量规则: 按批次配方计量或计算加入培养基/载体的水。
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 已配制组合物
- 基准类型: Process output (`process_output`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_media_container_batch`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 0.02
  - 单位: m3/kg prepared assembly
  - 基准: 每 kg 配制输出的加水量
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已配制培养基与容器组合物 (`prepared_media_container`)

该卡的身份和数量要求如下。

- 选定流: 内部已配制培养基/容器组合物
- 流属性/单位: Mass / kg
- 数量规则: 按成分质量减实测损失计算，并保留配方和容器标识。
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Route-specific (`route_specific`)
- 归一化基准: 每 kg 配制输出
- 基准类型: Process output (`process_output`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_media_container_batch`
- 数量范围: 暂定范围或核对范围
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0.8
  - 上限: 1.2
  - 单位: kg/kg declared output
  - 基准: 质量核对
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `mass-balance-identity`

##### 废物流

###### 不合格培养基与准备损失 (`media_preparation_waste`)

该卡的身份和数量要求如下。

- 选定流: 按去向区分的材料特定废物；身份延迟
- 流属性/单位: Mass / kg
- 数量规则: 计量不合格培养基、洒漏和废弃容器；排除返工材料。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 配制输出
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_reject_waste_routes`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 0.3
  - 单位: kg/kg prepared output
  - 基准: 离开准备过程的废物
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 基本流

### 过程：受控繁殖与生物增殖 (`managed_propagation`)

#### 输入

##### 产品流

###### 物种和形态特定的繁殖源 (`propagation_source`)

该卡的身份和数量要求如下。

- 选定流: 已声明的母株、鳞茎、块茎、根、插条、接穗、培养物或菌种；UUID 未解析
- 流属性/单位: Mass / kg
- 数量规则: 计量外购繁殖源和已归属负担的自留繁殖源；声明一种物种/品种和一种来源形态。
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: 每 kg 放行材料
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_propagation_batch`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0.001
  - 上限: 5
  - 单位: kg/kg released material
  - 基准: 每 kg 放行输出归属的繁殖源
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 已配制培养基/容器转入 (`prepared_media_input`)

该卡的身份和数量要求如下。

- 选定流: 内部已配制培养基/容器组合物
- 流属性/单位: Mass / kg
- 数量规则: 计量转入量；无培养基或不含容器的路线记录为零。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Route-specific (`route_specific`)
- 归一化基准: 每 kg 放行材料
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_propagation_batch`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 20
  - 单位: kg/kg released material
  - 基准: 每 kg 放行输出转入的培养基/容器
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 灌溉与培养用水 (`propagation_water`)

该卡的身份和数量要求如下。

- 选定流: 按前景来源选择的灌溉水
- 流属性/单位: Volume / m3
- 绑定模式: `parameterized`
- 流集合: `flow-set.water-use`
- 流集合版本: `0.2.0`
- 流集合组: `irrigation-water`
- 数量规则: 计量供水或按泵时和核实流量计算；披露降雨但不作为交换。
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 放行材料
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_propagation_inputs`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 50
  - 单位: m3/kg released material
  - 基准: 每 kg 放行输出的供水量
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 合并的肥料与营养改良剂 (`propagation_nutrients`)

该卡的身份和数量要求如下。

- 选定流: 实际矿质、有机及其他营养产品
- 流属性/单位: Mass / kg or compatible nutrient property/unit
- 绑定模式: `parameterized`
- 流集合: `flow-set.agricultural-nutrient-supply`
- 流集合版本: `0.3.0`
- 数量规则: 计量产品并保留养分组成；本过程只保留这一条合并卡。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 放行材料
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_propagation_inputs`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 10
  - 单位: kg/kg released material
  - 基准: 每 kg 放行输出的营养产品
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 病虫害管理与消毒产品 (`protection_products`)

该卡的身份和数量要求如下。

- 选定流: 实际已声明产品；物质和用途确定前 UUID 未解析
- 流属性/单位: Mass / kg
- 数量规则: 按物质、浓度、施用和目标计量；未使用时记录为零。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 放行材料
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_propagation_inputs`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg released material
  - 基准: 每 kg 放行输出的制剂用量
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 能源载体与电力 (`propagation_energy`)

该卡的身份和数量要求如下。

- 选定流: 来自电表、发票和设备日志的能源载体与电力
- 流属性/单位: Energy / MJ
- 绑定模式: `parameterized`
- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 数量规则: 将抽水、照明、受控空间和培养室的分载体能源归属到批次/期间。
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: 每 kg 放行材料
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_energy_asset_records`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1000
  - 单位: MJ/kg released material
  - 基准: 每 kg 放行输出的繁殖能源
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 从繁殖环境移出的有活力材料 (`propagated_material`)

该卡的身份和数量要求如下。

- 选定流: 内部物种/形态特定的有活力种植材料
- 流属性/单位: Mass / kg
- 数量规则: 在调理和分级前按批次计量有活力输出。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: 每 kg 放行材料
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_propagation_batch`
- 数量范围: 暂定范围或核对范围
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 1
  - 上限: 10
  - 单位: kg/kg released material
  - 基准: 每 kg 放行输出对应的分级前输出
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 生物损失和无活力材料 (`propagation_rejects`)

该卡的身份和数量要求如下。

- 选定流: 按去向区分的物种/形态特定材料；身份延迟
- 流属性/单位: Mass / kg
- 数量规则: 计量死亡、污染培养物、修剪物和废弃繁殖源；排除返工/自留材料。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 繁殖材料
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_reject_waste_routes`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: kg/kg propagated material
  - 基准: 离开生产的损失
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### 按物质和环境介质报告的直接排放 (`propagation_emissions`)

该卡的身份和数量要求如下。

- 选定流: 物质和环境介质特定基本流；UUID 延迟
- 流属性/单位: Mass / kg
- 数量规则: 仅依据采集活动量和已声明因子方法计算；保留物种和接收环境介质。
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 放行材料
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_direct_emissions`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: kg/kg released material
  - 基准: 仅作筛查总量；最终交换保持具体
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

### 过程：调理、炼苗与稳定化 (`conditioning_hardening`)

#### 输入

##### 产品流

###### 进入调理的繁殖材料 (`propagated_input`)

该卡的身份和数量要求如下。

- 选定流: 内部有活力材料
- 流属性/单位: Mass / kg
- 数量规则: 按批次计量内部转移。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: 每 kg 调理后材料
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 数量范围: 暂定范围或核对范围
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 1
  - 上限: 5
  - 单位: kg/kg conditioned output
  - 基准: 每 kg 调理输出的输入
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 调理或暂存用水 (`conditioning_water`)

该卡的身份和数量要求如下。

- 选定流: 按前景来源选择的工艺水
- 流属性/单位: Volume / m3
- 绑定模式: `parameterized`
- 流集合: `flow-set.water-use`
- 流集合版本: `0.2.0`
- 流集合组: `process-water`
- 数量规则: 计量喷雾、清洗或暂存用水；未使用时记录为零。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 调理后材料
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 0.1
  - 单位: m3/kg conditioned output
  - 基准: 每 kg 调理输出的用水
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 调理能源 (`conditioning_energy`)

该卡的身份和数量要求如下。

- 选定流: 来自前景记录的能源载体与电力
- 流属性/单位: Energy / MJ
- 绑定模式: `parameterized`
- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 数量规则: 计量通风、温控、搬运和暂存能源；被动路线记录为零。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: 每 kg 调理后材料
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_energy_asset_records`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 500
  - 单位: MJ/kg conditioned output
  - 基准: 每 kg 调理输出的能源
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调理和炼苗后的种植材料 (`conditioned_material`)

该卡的身份和数量要求如下。

- 选定流: 内部物种/形态特定调理材料
- 流属性/单位: Mass / kg
- 数量规则: 在已声明炼苗/稳定化关口后计量并保留批次身份。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: 每 kg 繁殖输入
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 数量范围: 暂定范围或核对范围
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0.5
  - 上限: 1
  - 单位: kg/kg propagated input
  - 基准: 每 kg 输入的调理输出
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 调理不合格物与移除物 (`conditioning_rejects`)

该卡的身份和数量要求如下。

- 选定流: 按去向区分的材料特定不合格物；身份延迟
- 流属性/单位: Mass / kg
- 数量规则: 计量修剪物、死亡、排水/移除损失和废弃物；返工单独保留。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 繁殖输入
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_reject_waste_routes`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg propagated input
  - 基准: 每 kg 输入的不合格物
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 基本流

### 过程：分级与植物检疫放行 (`grading_phytosanitary_release`)

#### 输入

##### 产品流

###### 进入放行分级的材料 (`release_grading_input`)

该卡的身份和数量要求如下。

- 选定流: 内部调理材料；调理不启用时为直接繁殖材料
- 流属性/单位: Mass / kg
- 数量规则: 计量批次输入并保留物种/品种、形态、批次和路线。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: 每 kg 放行材料
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grading_release`
- 数量范围: 暂定范围或核对范围
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 1
  - 上限: 5
  - 单位: kg/kg released material
  - 基准: 每 kg 合格输出的分级输入
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行的可种植等级 (`released_plantable_material`)

该卡的身份和数量要求如下。

- 选定流: 内部放行的已声明物种/品种和形态材料
- 流属性/单位: Mass / kg
- 数量规则: 计量通过已声明可种植性、活力/定植、等级和植物检疫标准的质量。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: 每 kg 分级输入
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grading_release`
- 数量范围: 暂定范围或核对范围
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0.2
  - 上限: 1
  - 单位: kg/kg grading input
  - 基准: 合格输出比例
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 降级或退回的活材料 (`downgraded_returned_material`)

该卡的身份和数量要求如下。

- 选定流: 物种/形态特定的降级或退回活材料；UUID 未解析
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量；退回物保留既有负担，且不得同时计为售出产品。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 分级输入
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_reject_waste_routes`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 0.8
  - 单位: kg/kg grading input
  - 基准: 降级/退回材料
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 不可种植的分级不合格物 (`grading_waste`)

该卡的身份和数量要求如下。

- 选定流: 按去向区分的物种/形态特定废物；身份延迟
- 流属性/单位: Mass / kg
- 数量规则: 计量离开系统的病害、污染、死亡或其他不可种植不合格物。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 分级输入
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_reject_waste_routes`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 0.8
  - 单位: kg/kg grading input
  - 基准: 每 kg 分级输入的废物
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 基本流

### 过程：包装呈现与苗圃/繁殖交接 (`presentation_handoff`)

#### 输入

##### 产品流

###### 进入包装呈现的放行材料 (`released_material_input`)

该卡的身份和数量要求如下。

- 选定流: 内部放行种植材料
- 流属性/单位: Mass / kg
- 数量规则: 计量来自放行分级的转移。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: 每 1 kg 参考产品
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_presentation_handoff`
- 数量范围: 暂定范围或核对范围
  - 范围角色: QA guardrail (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 1.2
  - 单位: kg/kg reference product
  - 基准: 交付物中的生物材料
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 保护与呈现材料 (`presentation_materials`)

该卡的身份和数量要求如下。

- 选定流: 实际包装、托盘、套袋、纸箱、周转箱或保护材料
- 流属性/单位: Mass / kg
- 绑定模式: `parameterized`
- 流集合: `flow-set.packaging-function`
- 流集合版本: `0.2.0`
- 数量规则: 计量跨交接点的新增材料；裸装或排除的可重复资产为零；前景记录选择组和 UUID。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Route-specific (`route_specific`)
- 归一化基准: 每 1 kg 参考产品
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_presentation_handoff`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: kg/kg reference product
  - 基准: 每交付 kg 的呈现材料
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明交接点的活种植材料 (`live_planting_material_reference`)

该卡的身份和数量要求如下。

- 选定流: 已声明物种/品种和形态的活种植材料；UUID 未解析
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按已声明交付态包含关系和浇水/含水基准精确为 1 kg。
- 数值来源模式: Fixed value (`fixed_value`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: 1 kg 参考产品
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_presentation_handoff`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Allowed range (`allowed_range`)
  - 下限: 1
  - 上限: 1
  - 单位: kg
  - 基准: 已声明参考产品
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `mass-balance-identity`

##### 废物流

###### 包装呈现与搬运废物 (`presentation_waste`)

该卡的身份和数量要求如下。

- 选定流: 按去向区分的材料特定废物；身份延迟
- 流属性/单位: Mass / kg
- 数量规则: 计量破损包装、废弃支撑物和产品损失；可重复资产在废弃前仍为资产。
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 1 kg 参考产品
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_reject_waste_routes`
- 数量范围: 暂定范围或核对范围
  - 范围角色: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg reference product
  - 基准: 交接点废物
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 基本流


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_reference_product` | 所有路线 | 将负担归属到合格的已声明物种/形态输出；无可复现权重时不得平均不同形态。 | `mass-balance-identity` |
| `allocation_rejects_rework` | 不合格和退回物 | 退回材料保留累计负担；废弃物不是合格输出；出售降级品需要声明共产品处理。 | `mass-balance-identity` |
| `allocation_multi_period` | 繁殖源、菌种库和资产 | 用记录的生产期间和输出归属建立、替换及跨期负担；防止重复归属。 | `mass-balance-identity` |
| `allocation_shared_assets` | 温室、灌溉、培养和苗圃资产 | 在各节点和期间一致采用实测服务、时间、面积或记录的因果驱动。 | `mass-balance-identity` |
| `allocation_included_components` | 容器、基质和载体 | 纳入随产品跨界的组件；排除的可重复资产按使用次数及替换/损失事件归属。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_media_container_batch` | `media_container_preparation` | 成分、水、营养、输出 | 配制批次 | 成分/容器身份和质量；水；组成；输出；损失 | 配方、秤和流量计 | kg; m3 | 每批 | 全部批次 | 场址/配方 | 按配方求和并核对 | 校准和批次签核 |
| `cp_propagation_batch` | `managed_propagation` | 繁殖源与有活力输出 | 批次记录 | 物种/品种；形态；来源；初始量；日期；有活力输出；死亡 | 追溯及质量/株数 | kg; count | 每批 | 完整生产期 | 场址/路线 | 保留批次；株数按实测质量换算 | 证书、秤和批次日志 |
| `cp_propagation_inputs` | `managed_propagation` | 水、营养、植保 | 投入/施用 | 身份；组成；数量；浓度；目标；日期；水源 | 发票、日志、流量计 | kg; m3 | 每次 | 完整批次 | 生产单元 | 汇总实际投入 | 发票和核查日志 |
| `cp_energy_asset_records` | 所有过程 | 能源/共享资产 | 计量与资产记录 | 载体；数量；因子；期间；节点；工时/面积 | 电表、发票、登记册 | MJ; kWh; h; m2-day | 每次/期间 | 完整期间 | 场址/资产 | 按记录驱动归属 | 校准和核对 |
| `cp_conditioning_lot` | `conditioning_hardening` | 输入、水、能源、输出 | 调理批次 | 输入/输出；持续期；干预；移除物 | 批次、仪表和秤 | kg; m3; MJ | 每批 | 全部批次 | 场址/路线 | 批次核对 | 放行记录 |
| `cp_grading_release` | `grading_phytosanitary_release` | 所有等级状态 | 检查/分级 | 身份；输入；等级；活力；病虫检查；检疫行动/状态；去向 | 实测分级和检查 | kg; count | 每批 | 全部批次 | 场址 | 核对各去向 | 检查/试验/追溯 |
| `cp_presentation_handoff` | `presentation_handoff` | 参考输出和材料 | 交接记录 | 包含标志；材料；净/毛重；株数；去向；时间 | 交接记录和秤 | kg; count | 每批 | 全部批次 | 场址 | 每数据集一种身份和基准 | 交接、秤和标签 |
| `cp_reject_waste_routes` | 所有过程 | 返工/不合格/废物 | 处置记录 | 过程；状态；质量；去向；返回节点；销售/处理 | 质量和处置记录 | kg | 每次 | 完整期间 | 场址 | 防止重复去向 | 称重单/收据/授权 |
| `cp_direct_emissions` | `managed_propagation` | 基本流排放 | 计算记录 | 活动量；物质；因子；基准；介质；方法 | 已批准因子计算 | kg | 每期间 | 完整生产期 | 场址/路线 | 按物质/介质 | 方法和计算复核 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 参考批次 | 参考 kg = 声明包含关系下的实测交付批次质量 | 质量和包含标志 | 参考质量 | `mass-balance-identity` |
| `calc_count_to_mass` | 株数记录 | 质量 = 株数 × 代表性实测平均单株质量 | 株数；抽样质量 | kg | `mass-balance-identity` |
| `calc_batch_yield` | 繁殖批次 | 产率 = 放行质量 / 已声明来源或批次投入 | 投入和放行质量 | 产率 | `mass-balance-identity` |
| `calc_grade_balance` | 放行批次 | 输入 = 合格 + 降级 + 退回 + 废弃 ± 实测变化 | 各去向质量 | 平衡 | `mass-balance-identity` |
| `calc_period_attribution` | 跨期繁殖源/资产 | 负担 × 已记录输出/期间驱动份额 | 负担、期间、驱动 | 归属负担 | `mass-balance-identity` |
| `calc_energy` | 能源卡 | 载体数量 × 已声明因子，并保留载体身份 | 数量和因子 | MJ | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 所有批次 | 保持物种/品种、形态、批次和路线；拒绝混合形态汇总。 | 追溯和标签 |
| `dq_inclusion` | 参考质量 | 声明容器/基质/载体/包装包含、净/毛重和浇水状态。 | 称量协议/规格 |
| `dq_plantable_quality` | 放行输出 | 记录活力/定植、等级和健康标准及结果。 | 试验/检查/放行 |
| `dq_phytosanitary` | 放行输出 | 保留病虫害管理追溯、检查、行动和检疫状态。 | 苗圃病虫风险记录 |
| `dq_completeness` | 所有过程 | 覆盖所有活跃批次、投入、输出、返工、降级、不合格和废物去向。 | 核对记录 |
| `dq_temporal` | 批次和资产 | 对齐生产、检查、交接和归属期间。 | 带日期记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_single_identity` | 参考流 | 若一个物理产品混合物种/品种或种植材料形态则失败。 | `fao-nursery-practice` |
| `validate_reference_uuid` | 参考流 | candidate 可留空 UUID；active/最终交换在精确物种/形态身份核实前失败。 |  |
| `validate_inclusion_basis` | 参考质量 | 组件包含、净/毛重或浇水状态缺失/不一致时失败。 | `mass-balance-identity` |
| `validate_plantable_release` | 放行输出 | 缺少可种植等级、活力/定植标准或植物检疫状态时失败。 | `ippc-ispm-36` |
| `validate_flow_sets` | 参数化投入 | 要求许可的 set/version/group 和具体核实 UUID 展开；营养物每过程保持一条 set 级无 group 卡。 |  |
| `validate_mass_balance` | 所有转移节点 | 核对合格、降级、退回、废物和实测物理变化。 | `mass-balance-identity` |
| `validate_rework` | 退回材料 | 要求返回节点和负担历史；禁止同时计为销售与返工。 | `mass-balance-identity` |
| `validate_period_assets` | 跨期/共享资产 | 要求期间、消费节点、驱动和重复负担检查。 | `mass-balance-identity` |
| `validate_route_separation` | 替代路线 | 无可复现权重和重要路线记录的汇总失败。 | `fao-nursery-practice` |
| `validate_bilingual_projection` | PCR 记录 | 要求英中和投影的过程/行/规则 id、受控词元和范围含义对齐。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种物种/品种和种植材料形态的前景数据集 |
| downstream_use | 身份、关口和包含基准相符时作为二手/背景数据集 |
| allowed_use | 声明交接点的物种/形态特定苗圃或繁殖建模 |
| excluded_use | 通用混合代理；食用作物、花卉、种子或下游种植；参考 UUID 未解析时作为 active 使用 |
| required_metadata | 身份、形态、路线、批次、关口、包含关系、净/毛重和浇水基准、等级、活力、植物检疫状态、地理和路线权重 |
| required_quality_disclosure | 覆盖率、实测/计算量、暂定范围、未解析身份、分配驱动、不合格去向和检查证据 |
| update_trigger | 新核实 UUID 或范围、路线、包含、质量/检疫规则、Flow Set、证据或前景绩效变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `fao-nursery-practice` | `official_guidance` | FAO, Nursery practices, https://www.fao.org/4/t0122e/t0122e05.htm | 繁殖、培养基/容器、浇水、修剪、分级、炼苗和路线分解 |
| `ippc-ispm-36` | `standard` | IPPC, ISPM 36: Integrated measures for plants for planting, https://www.ippc.int/en/publications/integrated-measures-plants-planting/ | 追溯、检查、病虫害管理和植物检疫放行 |
| `mass-balance-identity` | `method_factor` | 应用于前景记录的质量守恒恒等式 | 核对、计算和分配规则 |
