---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vanilla-raw
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 生香草荚

## 1. 范围与适用性

本 PCR 覆盖受控多年生香草藤生产、重复选择性采收、农场内最低限度初级整理、分级及农场门口交付的成熟绿色未熟化香草荚。必须声明物种、成熟度、等级、支撑与授粉路线、采收轮次和多年生归属。FAO 指出成熟绿色香草荚基本无香气，熟化是形成特征香气的独立后续工序（`fao-vanilla-postharvest-compendium`）。排除熟化/干燥荚果、厂门清洁/分选替代品、提取物、粉末和其他熟化后产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vanilla-raw |
| classification_refs | CPC 3.0: 01658 Vanilla, raw |
| covered_products | 声明物种和等级、农场门口熟化前的成熟绿色未熟化香草荚 |
| excluded_products | 熟化或干燥荚果；清洁或分选的厂门替代品；香草提取物、粉末和种植材料 |
| representative_product | 成熟绿色未熟化 Vanilla planifolia 荚果，声明等级，农场门口 |
| production_route | 多年生藤本管理、声明的支撑及授粉路线、重复选择性手工采收、最低限度整理和绿色荚果分级 |
| market_state | 按收货质量计的鲜绿色未熟化、未干燥荚果，位于香气形成加工前 |

受控生物生产父活动为多年生香草藤栽培。支撑系统、遮阴、授粉方法、投入、产量或资产使用不同的生产/技术路线必须分别记录；仅在各路线清单和产量贡献可追溯时方可加权汇总。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门口熟化前、声明物种和等级的成熟绿色未熟化香草荚 |
| How much | 1 kg 收货质量 |
| How well | 满足声明成熟度和等级；保持绿色、未熟化、未干燥并排除拒收荚果 |
| How long or cycle | 覆盖所有归属的多年生阶段及形成参考数量的全部选择性采收轮次的声明报告期 |
| reference_flow_link | `green_pod_grading_handoff` 的 `vanilla_raw_reference` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 生香草 `51e085e4-b15c-4933-b7eb-45eee9bd8958` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物物种；成熟绿色标准；未熟化未干燥状态；生产者等级；收货水分基准；熟化前农场门口交付；支撑系统；授粉路线；采收轮次；地理与报告期 |
| 绑定 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单量按声明收货水分基准归一化至 1 kg 已接收成熟绿色未熟化荚果。 |
| `grade_mass_reconciliation` | 采收、整理和分级交接 | Mass | kg | 核算输入至已接收等级、拒收/降级荚果、杂物及质量损失；拒收物不得计入参考产出。 |
| `harvest_round_aggregation` | 重复选择性采收 | Mass | kg | 先按轮次汇总已采收和拒收质量，再汇总报告期，并保留日期和成熟标准。 |
| `perennial_normalization` | 定植、替换和共享设施 | Mass | kg | 多期负荷按同一生产期已接收产出归属一次，禁止下游再次年化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已定植或新种植的受控香草藤，并声明繁殖来源、物种、支撑系统、藤龄/阶段和前期结转 |
| starting_condition_role | 多年生受控生产的起始存量；定植负荷纳入或链接并在声明生产期归属 |
| product_classification_scope | 农场门口熟化前成熟绿色未熟化香草荚；不延伸至熟化、干燥、厂门清洁/分选品或提取物 |
| recursive_input_rule | 农场自留藤本、插条和绿色荚果作为承载既有负荷的可见内部流；外购同类材料须使用上游数据集且不得为零负荷 |
| upstream_dataset_requirement | 外购繁殖材料、养分、水和能源需要兼容上游数据集；Flow Set 在生成前景数据时解析为核实 UUID |
| disclosure | 声明物种、支撑/遮阴系统、授粉路线、藤本阶段和生产年、替换事件、采收轮次、成熟度和等级、水分基准、拒收去向及熟化前交付点 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_managed_vine_route` | `perennial_vine_management` | 纳入繁殖/藤本结转、支撑遮阴、整枝修剪、授粉、养分水分、能源、共享设施份额及荚果发育。 | `fao-vanilla-postharvest-compendium` |
| `boundary_selective_harvest` | `selective_pod_harvest` | 将重复成熟度选择性采收独立建模，并按轮次记录采收荚果、留藤未熟荚果、杂物和损失。 | `fao-vanilla-postharvest-compendium` |
| `boundary_primary_conditioning` | `on_farm_primary_conditioning` | 仅纳入熟化前最低限度处理；排除杀青、发汗、发酵、香气形成、刻意干燥和厂门清洗。 | `fao-vanilla-postharvest-compendium` |
| `boundary_grading_handoff` | `green_pod_grading_handoff` | 明确已接收等级及全部降级/拒收去向，交付发生在熟化前。 | `fao-vanilla-postharvest-compendium` |
| `boundary_route_deltas` | 替代支撑、授粉及处理路线 | 除非按路线记录可复现加权，否则保持拓扑、投入、能源、产量和资产使用差异。 | `fao-vanilla-postharvest-compendium` |
| `boundary_excluded_processing` | 下游工序 | 排除熟化、干燥、香气形成调理、厂门清洁/分选、研磨和提取物制造。 | `fao-vanilla-postharvest-compendium` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `perennial_vine_management` | 多年生香草藤管理与荚果发育 | `required` | 始终纳入并声明支撑和授粉的替代技术路线差异、期间、状态和交接 | 受控生物生产父活动 | kg 可采收成熟绿色荚果 |
| `selective_pod_harvest` | 成熟绿色荚果的重复选择性采收 | `required` | 始终纳入；每轮使用批次模式记录，并声明路线、期间、状态和交接 | 采收与获取 | kg 各轮次已采收绿色荚果 |
| `on_farm_primary_conditioning` | 农场内熟化前最低限度处理 | `required` | 始终纳入并声明路线、期间、状态和交接 | 初级整理 | kg 处理后绿色未熟化荚果 |
| `green_pod_grading_handoff` | 绿色荚果分级与农场门口交付 | `required` | 始终纳入并声明路线、期间、状态和交接 | 分级与分选 | 1 kg 已接收成熟绿色未熟化荚果 |

### 过程: 多年生香草藤管理与荚果发育 (`perennial_vine_management`)

该多年生、分期索引过程把定植、藤本替换、支撑/遮阴设施、授粉和荚果发育关联到产生采收荚果的期间与路线。

#### 投入

##### 产品流

###### 香草种植插条或既有藤本结转（`propagation_material`）

该流卡：计量外购种植材料并归属农场自留材料；外购物料在物种、繁殖状态、供应方、地理、属性和单位核实前保持未解析，农场自留材料为承载负荷的内部转移。

- 选定流：香草种植插条或既有藤本
- 流属性/单位：质量 / kg
- 数量规则：计量外购种植材料并归属农场自留材料；外购物料在物种、繁殖状态、供应方、地理、属性和单位核实前保持未解析，农场自留材料为承载负荷的内部转移。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 已接收绿色未熟化香草荚并覆盖声明生产期
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_perennial_vine_records`
- 数量范围：数量 QA 范围
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：2
  - 单位：kg/kg reference product
  - 基准：每 kg 已接收产出的种植材料归属量
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 合并的肥料和养分改良剂（`nutrient_inputs`）

该流卡：计量产品用量并保留养分组成。

- 选定流：实际肥料和养分产品
- 流属性/单位：质量 / kg 或兼容的养分属性/单位
- 绑定：`parameterized`
- 流集合：`flow-set.agricultural-nutrient-supply`
- 流集合版本：`0.3.0`
- 数量规则：计量产品用量并保留养分组成。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 已接收绿色未熟化香草荚
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_management_inputs`
- 数量范围：数量 QA 范围
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：5
  - 单位：kg/kg reference product
  - 基准：每 kg 已接收产出的合并养分产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 供应藤本的灌溉水（`irrigation_water`）

该流卡：计量水量，或由泵运行时间和核实流量计算输送量；降雨单独披露但不作为交换。

- 选定流：依据前景水源记录选择的灌溉水
- 流属性/单位：体积 / m3
- 绑定：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合组：`irrigation-water`
- 数量规则：计量水量，或由泵运行时间和核实流量计算输送量；降雨单独披露但不作为交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 已接收绿色未熟化香草荚
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_management_inputs`
- 数量范围：数量 QA 范围
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：20
  - 单位：m3/kg reference product
  - 基准：每 kg 已接收产出的输送灌溉水
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 管理和共享设备的能源载体（`management_energy`）

该流卡：计量能源载体，使用声明因子换算，并关联消耗节点和期间。

- 选定流：依据发票、仪表和燃料日志选择的能源载体
- 流属性/单位：能量 / MJ
- 绑定：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：计量能源载体，使用声明因子换算，并关联消耗节点和期间。
- 数值来源模式：`calculated_value`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 已接收绿色未熟化香草荚
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_management_inputs`
- 数量范围：数量 QA 范围
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：MJ/kg reference product
  - 基准：每 kg 已接收产出的管理及共享设备能源
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 带有可采收成熟绿色荚果的在田藤本（`standing_vines_mature_pods`）

该流卡：依据各采收轮次和损失核算的内部中间状态，不赋予外部 UUID。

- 选定流：内部在田藤本及可采荚果状态
- 流属性/单位：质量 / kg 可采荚果
- 数量规则：依据各采收轮次和损失核算的内部中间状态，不赋予外部 UUID。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 已接收绿色未熟化香草荚
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_perennial_vine_records`
- 数量范围：数量 QA 范围
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：5
  - 单位：kg/kg reference product
  - 基准：每 kg 已接收产出的可采荚果
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 修剪物、枯死藤本和田间残余物（`cultivation_residues`）

该流卡：按原地保留、回收、处理或丢弃去向计量；原地物料不得同时作为外排废物流。

- 选定流：按材料与去向记录的内部/延后解析作物残余物
- 流属性/单位：质量 / kg
- 数量规则：按原地保留、回收、处理或丢弃去向计量；原地物料不得同时作为外排废物流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 已接收绿色未熟化香草荚
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue_and_emission_records`
- 数量范围：数量 QA 范围
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg/kg reference product
  - 基准：每 kg 已接收产出的退出生产用途残余物
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 按物质及环境介质报告的田间排放（`reported_field_emissions`）

该流卡：仅依据前景活动记录和声明方法计算；在物质/物种、化学基准和接收介质明确前延后 UUID 绑定。

- 选定流：未解析的空气、水体或土壤物质特定排放
- 流属性/单位：质量 / kg
- 数量规则：仅依据前景活动记录和声明方法计算；在物质/物种、化学基准和接收介质明确前延后 UUID 绑定。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 已接收绿色未熟化香草荚
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue_and_emission_records`
- 数量范围：数量 QA 范围
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：5
  - 单位：kg/kg reference product
  - 基准：仅用于筛查总量；最终交换保持物质及介质特定
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程: 成熟绿色荚果的重复选择性采收 (`selective_pod_harvest`)

成熟荚果在多个轮次中从在田多年生藤本上选择性移除，未熟荚果留待后续轮次。

#### 投入

##### 产品流

###### 进入采收的在田藤本及可采荚果（`harvest_ready_vines_input`）

该流卡：内部转移量等于所有轮次核算后的可采荚果质量，不赋予外部 UUID。

- 选定流：内部在田藤本及可采荚果状态
- 流属性/单位：质量 / kg 可采荚果
- 数量规则：内部转移量等于所有轮次核算后的可采荚果质量，不赋予外部 UUID。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 已接收绿色未熟化香草荚
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_selective_harvest_rounds`
- 数量范围：数量 QA 范围
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：5
  - 单位：kg/kg reference product
  - 基准：每 kg 已接收产出的可采输入
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 采收设备的能源载体（`harvest_energy`）

该流卡：按采收轮次计量；完全手工且无能源载体跨越边界时记录为零。

- 选定流：依据采收轮次记录选择的能源载体
- 流属性/单位：能量 / MJ
- 绑定：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：按采收轮次计量；完全手工且无能源载体跨越边界时记录为零。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 已采收绿色荚果
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_selective_harvest_rounds`
- 数量范围：数量 QA 范围
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：20
  - 单位：MJ/kg harvested green pods
  - 基准：每 kg 已采收绿色荚果的采收能源
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 已采收的成熟绿色未熟化荚果（`harvested_green_pods`）

该流卡：汇总各轮次计量质量，同时保留物种、成熟度、轮次和批次标识。

- 选定流：内部已采收成熟绿色未熟化荚果
- 流属性/单位：质量 / kg
- 数量规则：汇总各轮次计量质量，同时保留物种、成熟度、轮次和批次标识。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 已接收绿色未熟化香草荚
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_selective_harvest_rounds`
- 数量范围：数量 QA 范围
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：4
  - 单位：kg/kg reference product
  - 基准：每 kg 已接收产出的已采收荚果
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 采收中损失或拒收的荚果（`harvest_rejects`）

该流卡：按轮次计量受损、过早摘离或病害荚果；留在藤本上的荚果既非产出也非废物。

- 选定流：按状态及去向记录的内部/延后解析拒收荚果废物
- 流属性/单位：质量 / kg
- 数量规则：按轮次计量受损、过早摘离或病害荚果；留在藤本上的荚果既非产出也非废物。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 已采收绿色荚果
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_selective_harvest_rounds`
- 数量范围：数量 QA 范围
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：1
  - 单位：kg/kg harvested green pods
  - 基准：每 kg 已采收荚果的拒收或损失荚果
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 基本流

### 过程: 农场内熟化前最低限度处理 (`on_farm_primary_conditioning`)

仅包括遮阴暂存和去除松散田间杂物；禁止杀青、发汗、发酵、香气形成、刻意干燥或厂门清洗。

#### 投入

##### 产品流

###### 进入处理的已采收绿色未熟化荚果（`harvested_pods_input`）

该流卡：内部转移量等于已计量采收荚果产出，并保留批次和轮次标识。

- 选定流：内部已采收成熟绿色未熟化荚果
- 流属性/单位：质量 / kg
- 数量规则：内部转移量等于已计量采收荚果产出，并保留批次和轮次标识。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 处理后绿色荚果
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_primary_conditioning`
- 数量范围：数量 QA 范围
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：2
  - 单位：kg/kg handled green pods
  - 基准：每 kg 处理后荚果的采收输入
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 最低限度处理的绿色未熟化荚果（`conditioned_green_pods`）

该流卡：在遮阴暂存或去除松散田间杂物后计量；产品仍为绿色、未熟化、未干燥且基本无香气。

- 选定流：内部最低限度处理的绿色未熟化荚果
- 流属性/单位：质量 / kg
- 数量规则：在遮阴暂存或去除松散田间杂物后计量；产品仍为绿色、未熟化、未干燥且基本无香气。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 处理后绿色荚果
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_primary_conditioning`
- 数量范围：数量 QA 范围
  - 范围角色：`qa_guardrail`
  - 下限：0.5
  - 上限：1
  - 单位：kg/kg harvested input
  - 基准：每 kg 已采收输入的处理后绿色荚果
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 松散田间杂物和处理拒收物（`conditioning_rejects`）

该流卡：按去向计量去除的土壤、植物碎片和受损荚果。

- 选定流：按材料及去向记录的内部/延后解析处理废物
- 流属性/单位：质量 / kg
- 数量规则：按去向计量去除的土壤、植物碎片和受损荚果。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 已采收输入
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_primary_conditioning`
- 数量范围：数量 QA 范围
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg harvested input
  - 基准：每 kg 已采收输入的去除物和拒收物
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 基本流

### 过程: 绿色荚果分级与农场门口交付 (`green_pod_grading_handoff`)

将输入分为已接收声明等级以及降级、拒收或废弃去向，交付点严格位于熟化前。

#### 投入

##### 产品流

###### 进入分级的最低限度处理绿色荚果（`conditioned_pods_input`）

该流卡：内部转移量等于已计量处理后荚果产出。

- 选定流：内部最低限度处理的绿色未熟化荚果
- 流属性/单位：质量 / kg
- 数量规则：内部转移量等于已计量处理后荚果产出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 已接收绿色未熟化香草荚
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_green_pod_grading`
- 数量范围：数量 QA 范围
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：2
  - 单位：kg/kg reference product
  - 基准：每 kg 已接收产出的分级输入
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 农场门口已接收的成熟绿色未熟化香草荚（`vanilla_raw_reference`）

该流卡：分级核算后恰为 1 kg；固定身份已由详情确认是 CPC 01658 农场门口产品流，并由必需限定信息收窄。

- 选定流：生香草 `51e085e4-b15c-4933-b7eb-45eee9bd8958`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：`fixed`
- 数量规则：分级核算后恰为 1 kg；固定身份已由详情确认是 CPC 01658 农场门口产品流，并由必需限定信息收窄。
- 数值来源模式：`fixed_value`
- 适用范围：`generic`
- 归一化基准：1 kg 已接收成熟绿色未熟化香草荚
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 来源：`reference-normalization-definition`
- 数量范围：数量 QA 范围
  - 范围角色：`allowed_range`
  - 下限：1
  - 上限：1
  - 单位：kg/kg reference product
  - 基准：参考产品除以 1 kg 参考数量
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`reference-normalization-definition`

##### 废物流

###### 降级、受损或拒收的绿色荚果（`off_grade_pods`）

该流卡：计量每个降级、受损、返工、回收或丢弃路径；返工仅可凭关联批次返回一次，且不得重复计入已接收产出。

- 选定流：按状态及去向记录的内部/延后解析降级荚果废物
- 流属性/单位：质量 / kg
- 数量规则：计量每个降级、受损、返工、回收或丢弃路径；返工仅可凭关联批次返回一次，且不得重复计入已接收产出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 分级输入
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_green_pod_grading`
- 数量范围：数量 QA 范围
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading input
  - 基准：每 kg 分级输入的降级或拒收荚果
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_perennial_periods` | 定植、替换和生产年 | 在声明生产期内按同一期间已接收绿色荚果质量归属一次，保留阶段/年份链接并披露非生产年份。 |  |
| `allocation_repeated_harvest` | 选择性采收轮次 | 直接关联轮次特定投入、能源、拒收和产出；真实共享负荷按相关轮次采收质量分配且不得在期间汇总时重复。 |  |
| `allocation_shared_infrastructure` | 支撑、遮阴、灌溉、工具及其他共享资产 | 枚举消耗节点和服务期，按记录的使用时间、面积或生产期产出选一种一致基准归属并防止重复。 |  |
| `allocation_rejects` | 残余物及拒收/降级荚果 | 丢弃不产生避免负荷抵扣；如有回收产品出界，须单列并披露分配或替代方法及敏感性。 |  |
| `allocation_single_reference_product` | 已接收绿色未熟化荚果 | 基线路线仅有一个预期参考产品；拒收荚果、杂物、留藤未熟荚果和残余物不得仅为降低负荷而作为共产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_perennial_vine_records` | `perennial_vine_management` | propagation, vine phases, support, pollination, standing crop | field register | species; source; mass; vine count/age; establishment/replacement; support/shade; pollination; dates; harvest-ready mass | 按路线和期间核对地块、繁殖与观察记录 | kg; count; date | 每次事件和每季 | 全部承载负荷年份 | 农场和地块 | 先分层再归属汇总 | 带日期记录、发票、物种记录和签字 |
| `cp_management_inputs` | `perennial_vine_management` | nutrients, irrigation, energy | invoice, log, meter | product; composition; mass; water source/volume; pump hours/rate; carrier/quantity; node; date | 逐次记录并仅用核实因子计算 | kg; m3; kWh; L; MJ | 每次施用或仪表间隔 | 完整报告期 | 农场、地块、设备路线 | 按实际产品/载体汇总后归一化 | 发票、校准、日志、因子记录 |
| `cp_residue_and_emission_records` | `perennial_vine_management` | residues and emissions | weighing log and calculation sheet | material; mass; destination; substance; basis; compartment; activity; factor; method | 计量外排残余物，仅计算已识别排放 | kg | 每次移除和计算期 | 完整报告期 | 地块和去向 | 按去向核算，解析后汇总 | 秤、去向凭证、方法引用和复核 |
| `cp_selective_harvest_rounds` | `selective_pod_harvest` | harvest, rejects, losses, energy | lot sheet | round/date; plot; species; maturity; masses; retained status; carrier; labour mode | 逐轮计量并关联设备记录 | kg; MJ; date | 每个轮次 | 全部贡献轮次 | 地块、轮次、批次 | 仅汇总已关联轮次并分开拒收 | 校准秤、签字批次表、能源日志 |
| `cp_primary_conditioning` | `on_farm_primary_conditioning` | input, handled pods, removed matter | handling sheet | lot; input/output mass; holding time; operations; rejects/destination; no-curing declaration | 处理前后称量并核证无熟化/刻意干燥 | kg; hour | 每批 | 全部贡献批次 | 处理区和批次 | 核算输入、产出、拒收和损失 | 校准秤、时间日志、检查表和照片/等效证据 |
| `cp_green_pod_grading` | `green_pod_grading_handoff` | accepted grade, off-grade, rework, hand-off | grading/dispatch record | lot; species; maturity; grade; input; accepted; off-grade; rework; destination; date; uncured state | 逐状态称量并关联熟化前发运 | kg; date | 每批 | 全部贡献批次 | 分级点和批次 | 核算全部状态并去除返工重复 | 校准秤、等级规范、发运和未熟化声明 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | normalized amount = attributed amount / accepted reference mass | attributed amount; accepted mass | amount per kg reference product | `reference-normalization-definition` |
| `calc_period_attribution` | 定植、替换、共享设施 | attributed burden = recorded burden × documented service share | burden; nodes; period; share basis | period-attributed burden |  |
| `calc_harvest_round_sum` | 重复选择性采收 | period mass = sum of linked round masses; rejects and retained pods separate | round; harvested; reject; retained status | period harvested/rejected mass |  |
| `calc_mass_reconciliation` | 处理和分级 | difference = input - accepted - rejects - retained/transferred outputs | input and all state masses | difference and completeness flag | `reference-normalization-definition` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_state` | 参考产品与批次 | 物种、成熟度、等级、未熟化/未干燥、水分基准和农场门口交付完整。 | 物种、等级、批次、未熟化及发运记录 |
| `dq_temporal_completeness` | 多年生路线与采收 | 覆盖全部承载负荷阶段和贡献轮次并披露排除项。 | 地块历史、阶段、轮次和替换记录 |
| `dq_route_separation` | 替代路线 | 保留路线差异直至可复现加权。 | 路线编码记录和汇总工作表 |
| `dq_mass_balance` | 采收、处理、分级 | 逐轮次/批次核算并调查超出场址容差的差异。 | 签字质量平衡表和校准记录 |
| `dq_flow_resolution` | Flow Set 与未解析卡 | 生成交换时解析核实 UUID；外购繁殖材料和基本流仅在语义身份完整后解析。 | 交换解析和详情核实记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 要求固定 UUID、质量属性/单位组和全部限定信息；拒绝熟化、干燥、香气形成、厂门清洁/分选品及提取物。 | `fao-vanilla-postharvest-compendium` |
| `validate_process_topology` | 过程图 | 要求四个节点和内部交接；采收关联在田藤本，整理和分级保持在熟化前。 | `fao-vanilla-postharvest-compendium` |
| `validate_maturity_grade_species` | 每个已接收批次 | 要求物种、成熟标准、等级、绿色未熟化状态和农场门口交付。 | `fao-vanilla-postharvest-compendium` |
| `validate_period_attribution` | 多年生及共享负荷 | 要求阶段、服务期、消耗节点和归属证据；遗漏或重复计数即失败。 |  |
| `validate_round_completeness` | 重复选择性采收 | 要求完整有序轮次，核算采收、拒收、留藤和损失状态。 |  |
| `validate_reject_routing` | 拒收及降级状态 | 每个状态须关联一次返工、降级/回收出界或丢弃去向，且从已接收产出排除。 |  |
| `validate_flow_bindings` | 所有流卡 | 固定绑定仅允许详情核实的参考产品；参数化卡须引用适用 Flow Set，最终交换须有核实 UUID。 |  |
| `validate_mass_balance` | 采收、处理和分级 | 逐轮次/批次核算输入输出并解释质量损失。 | `reference-normalization-definition` |

## 10. 发布数据集简介

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门口成熟绿色未熟化香草荚的前景生产数据包 |
| downstream_use | `secondary_dataset`; `background_dataset` 需独立审核并匹配地理、时间和技术 |
| allowed_use | 绿色生香草荚农场门口 LCA，以及独立熟化系统的上游输入 |
| excluded_use | 熟化/干燥荚果、厂门清洁/分选品、提取物、粉末或未指定芳香香草产品 |
| required_metadata | 物种；地块/地理；支撑/遮阴；授粉路线；藤本阶段/生产期；替换；轮次；成熟/等级；水分；未熟化；拒收去向；交付 |
| required_quality_disclosure | 阶段/轮次覆盖；路线分离；流解析；仪表/秤质量；质量平衡；共享设施归属；排除工序；暂定范围状态 |
| update_trigger | 物种、路线、期间归属、成熟/等级、交付状态、拓扑、参考 UUID、Flow Set 版本或熟化/厂门加工进入边界发生变化 |

## 11. 数据来源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `fao-vanilla-postharvest-compendium` | `official_guidance` | Food and Agriculture Organization of the United Nations, *Vanilla: Post-harvest Operations*, Post-harvest Compendium | 生产/采收顺序；绿色成熟荚果基本无香气；熟化为形成香气的独立下游工序；熟化前边界与排除项 |
| `reference-normalization-definition` | `method_factor` | 本 PCR 的 1 kg 收货质量参考流归一化和节点质量平衡恒等式 | 精确参考产出、归一化和质量核算 |
