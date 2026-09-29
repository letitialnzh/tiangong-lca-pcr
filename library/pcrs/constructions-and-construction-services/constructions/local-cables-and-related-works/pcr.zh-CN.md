---
pcr_id: pcr.constructions-and-construction-services.constructions.local-cables-and-related-works
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 本地线缆及相关工程

## 1. 范围与适用性

本 PCR 涵盖验收的本地电力或通信线缆工程及直接相关的本地配电变电站、变压站、塔或天线工程。每个交付须有明确合同和验收边界。独立验收的线路与站点分别建立交付包和数据集。纳入勘测、路由准备、安装、集成、测试及移交；排除长距离线路、单独制造的电缆、电力或通信服务、运行和维修。[unsd-cpc3-53252; rus-underground-distribution; itu-g6503]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.local-cables-and-related-works |
| classification_refs | CPC 3.0 53252，本地线缆及相关工程；映射接受另行判定。 |
| covered_products | 验收的本地电力或通信线路，以及直接相关的本地配电站、塔或天线。 |
| excluded_products | 长距离线路、单独组件制造、持续公用事业服务、运行和维修。 |
| representative_product | 具有逐项资产清单的一项验收本地网络建设交付。 |
| production_route | 勘测；路由/场址准备；架空支承或地下管沟；线缆敷设和连接；可选站/塔集成；测试和移交。 |
| market_state | 移交时已建成、测试和验收的基础设施。 |

`asset_integration` 是组装集成的父活动。架空与地下线路的支承、土方、安装和测试要求不同；可用于不同实体区段，不能同时用于同一区段。电力与通信功能使用不同的测试证据。站或塔必须直接服务于声明的本地网络。[unsd-cpc3-53252; rus-underground-distribution; itu-g6503]

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一项声明交付中验收的本地线缆或直接相关本地配电工程。 |
| How much | 1 个签署验收的交付包；另行披露验收路由 km 及站、塔、天线数量和容量。 |
| How well | 通过设计要求的电气安全/连通或光链路测试，以及相关资产调试。 |
| How long or cycle | 建设至签署移交；设计寿命是元数据，不是使用阶段清单。 |
| reference_flow_link | `asset_integration` 的 `accepted_local_works`。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 个验收交付包 |
| Reference product flow | 验收的本地线缆及相关工程；UUID 未解析 |
| Reference flow property | 数量；UUID 未解析 |
| Reference unit group | 数量；UUID 未解析 |
| Reference unit | accepted package |
| Required qualifiers | 地点、本地网络功能、电力或通信规格、架空/地下路由 km、电缆/回路/光纤长度、站/塔数量及容量、现有资产接口、测试及移交。 |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `package_count` | 参考产出 | 数量，UUID 未解析 | accepted package | 独立签署的交付各计一次；不同交付包未经资产拆分不得直接比较。 |
| `route_length` | 线缆 | 长度 | route-km | 汇总测绘且不重叠的验收本地区段；回路和光纤数不放大路由长度。 |
| `component_quantity` | 组件 | 长度、质量或数量 | m, kg or item | 按规格核对交付、安装、退回和报废数量。 |
| `groundwork_volume` | 开挖 | 体积和质量 | m3 and kg | 区分原位体积、松散运输体积和去向质量。 |
| `carrier_use` | 机械 | 各能源载体能量或质量 | kWh, MJ or kg | 分别记录电力和燃料，避免发电机燃料与电力产出重复。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 施工前已测绘本地线路或场址，并识别现有公用设施接口。 |
| starting_condition_role | 物理基线；既有电杆、管道和站点不自动成为新产出。 |
| product_classification_scope | 同一验收边界内的本地线缆及直接相关工程。 |
| recursive_input_rule | 同类已安装工程作为购入项时须说明分包边界；不能把整个验收交付包当作材料投入。 |
| upstream_dataset_requirement | 按需连接规格匹配的电缆、导体、管道、混凝土、钢材、电气设备、能源、运输和废物处理数据集。 |
| disclosure | 资产清单、路线选项、既有设施复用、移除物、废品、分包范围、测试和身份缺口。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_boundary` | 交付 | 纳入必要准备、组件进场、土建/安装、集成及调试，止于签署验收；排除运行和后续维修。 | `unsd-cpc3-53252`; `rus-underground-distribution`; `itu-g6503` |
| `preparation_interface` | `local_route_preparation` | 独立移除妨碍的土壤或植被，向集成工序移交验收区段/场址；外运物不是目标产品。 | `rus-underground-distribution` |
| `route_delta` | `asset_integration` | 地下线路须记录沟槽、管道和回填；架空线路须记录电杆/塔/支承和架线。电力与通信测试分开。 | `rus-underground-distribution`; `itu-g6503` |
| `related_asset_scope` | 站或塔 | 仅纳入直接相关的本地网络资产，分别统计设备和土建并披露既有资产复用。 | `unsd-cpc3-53252` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `local_route_preparation` | 本地路由和场址准备 | conditional | 新建走廊、开挖或基础准备发生时。 | 移除地面物/障碍物，移交验收准备区段/场址并处置余料。 | 路由 km、场址数和开挖体积。 |
| `asset_integration` | 线缆及相关资产集成验收 | required | 所有声明交付包。 | 连接线缆、支承/管道、接头和范围内站/塔组件；测试、验收或处理缺陷。 | 1 个验收交付包，附路由 km 和资产清单。 |

### 过程：本地路由和场址准备（`local_route_preparation`）

#### 输入

##### 产品流

###### 准备能源（`prep_energy`）

按载体记录开挖、清障及场址机械的燃料或电力；排除购入服务中重复的能源。

- 选定流：本地准备机械能源载体
- 流属性/单位：按载体的能量或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：计量或分摊到准备线路/场址的实际机械用能。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收交付包，另行披露路由 km 或场址数
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_plant`
- 数量范围：暂定能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：MJ-equivalent/accepted package
  - 基准：宽泛初筛，非设计数值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备线路或站址（`prepared_local_site`）

内部移交以区段/场址身份与下游输入对应；并非验收线缆资产。

- 选定流：已准备本地线路或相关资产场址
- 流属性/单位：长度或数量 / route-km or site
- 数量规则：依竣工测绘签署线路/场址准备验收。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收交付包
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_route`
- 数量范围：准备移交完整性
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of prepared segment/site records matched
  - 基准：匹配记录数除以准备记录数
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`record-match-identity`

##### 废物流

###### 移除土石和植被（`removed_material`）

记录来源、回用、外运和接收方。批准保留作回填的材料不是外运废物。

- 选定流：需外部管理的本地线路移除物
- 流属性/单位：质量 / kg
- 数量规则：称量外运物或用测绘体积及实测密度换算，扣除回用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收交付包
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_spoil`
- 数量范围：移除物外运比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of removed mass
  - 基准：外运质量除以总移除质量
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

##### 基本流

### 过程：线缆及相关资产集成验收（`asset_integration`）

#### 输入

##### 产品流

###### 已准备线路或场址移交（`prepared_handoff`）

如发生准备工序，同一验收线路或场址只接收一次；仅有站点的交付可没有线缆长度。

- 选定流：来自 `local_route_preparation` 的已准备本地线路/场址
- 流属性/单位：长度或数量 / route-km or site
- 数量规则：将区段/场址 ID 与准备工序产出匹配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收交付包
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_route`
- 数量范围：移交记录一致性
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：matched input/output record ratio
  - 基准：跨过程相同的区段/场址 ID
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`record-match-identity`

###### 电缆和导体（`cable_supply`）

说明电力/通信电缆、绝缘、导体或光纤数量及接头；制造电缆是投入而非验收工程产出。

- 选定流：按规格区分的电缆、导体和接头组件
- 流属性/单位：长度和质量 / m and kg
- 数量规则：核对交付、安装及余长、退回和报废电缆。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每验收交付包，适用时另报路由 km
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 数量范围：暂定电缆长度筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：cable-m/accepted package
  - 基准：宽泛初筛；另报回路、分支和余长
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 支承、管道及设备（`support_equipment`）

仅对本交付包中安装的管道、电杆、塔、基础、变压器、开关柜、机柜、天线及保护设施计量；供应台账拆分组件角色。

- 选定流：按规格区分的本地支承和相关资产组件
- 流属性/单位：质量或数量 / kg or item
- 数量规则：按组件核对交付、安装、退回和报废量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每验收交付包及资产清单
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 数量范围：暂定组件质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：kg/accepted package
  - 基准：按线路和设计的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 集成能源（`integration_energy`）

按载体记录起重、电缆牵引、接续和测试能源，排除重复的分包用能。

- 选定流：本地集成用能源载体
- 流属性/单位：按载体的能量或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：计量或分摊自有设备和测试用能一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收交付包
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_plant`
- 数量范围：暂定集成能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：MJ-equivalent/accepted package
  - 基准：宽泛校验；以载体计量为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 专业连接工程（`specialist_work`）

条件性购入的端接、接续、起重或测试服务。说明承包商范围并避免重复计入自有机械或人工。

- 选定流：本地专业安装或调试服务
- 流属性/单位：服务数量 / declared unit
- 数量规则：将发票对应的验收工程归于相关区段或站点。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收交付包
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_subcontract`
- 数量范围：暂定服务筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：declared service units/accepted package
  - 基准：仅宽泛筛查；以发票单位和范围为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收本地工程（`accepted_local_works`）

仅统计通过功能测试和签署移交的资产；附资产清单，不假定通用路由 km。

- 选定流：验收安装的本地线缆或相关本地网络工程；UUID 未解析
- 流属性/单位：数量 / accepted package；UUID 未解析
- 数量规则：计 1 个签署交付包，另报验收线路及站/塔数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收交付包
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_acceptance`
- 数量范围：参考交付包恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：accepted package/reference package
  - 基准：每参考单位 1 个签署交付包
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`record-match-identity`

##### 废物流

###### 报废组件（`rejected_components`）

在集成工序识别损坏或不合格的电缆余料、接头和设备。记录修理/复测、退供应商、回收或处置；缺陷品不是验收产出。

- 选定流：按材质及去向区分的报废电缆和设备
- 流属性/单位：质量 / kg
- 数量规则：仅核对一次缺陷、返工、退回和最终离开边界。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收交付包
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_components`
- 数量范围：最终报废比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of received component mass
  - 基准：最终报废质量 / 收到的组件质量
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `asset_schedule` | 多资产交付包 | 按实测用量将数量归于区段和站/塔；同时报告总量和各组件分母；不得把不同交付包当作相同路由 km 比较。 | `record-match-identity` |
| `shared_plant` | 设备及分包 | 按计量工时或工程量分摊共享设备一次，记录与其他网络共沟或共支承情况。 | `material-balance-identity` |
| `defect_route` | 报废组件 | 保留缺陷负担，将修理关联 `asset_integration`，说明退回/回收/处置出口，不将未解决缺陷计入验收产出。 | `material-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_route` | `local_route_preparation` | 线路和移交 | 测绘及许可 | 区段/场址 ID、路线、长度、开挖、清障、就绪、验收 | 竣工测绘及签署放行 | route-km, m3, site | 每区段/场址 | 准备至移交 | 全交付范围 | 汇总不重叠验收区段/场址 | 测绘及放行 |
| `cp_spoil` | `local_route_preparation` | 移除物 | 外运及回用记录 | 来源、材料、体积、质量、密度、回用、接收方 | 称量及测绘核对 | m3, kg | 每批 | 准备期 | 线路/场址及接收方 | 扣除回用后的外运质量 | 外运单及接收单 |
| `cp_plant` | 两节点 | 能源 | 计量及燃料日志 | 载体、数量、设备、工时、线路/场址、分包范围 | 计量与发票交叉核对 | kWh, MJ, kg | 每班或每月 | 建设至测试 | 全场址 | 实际用量分摊一次 | 仪表及发票 |
| `cp_components` | `asset_integration` | 组件及缺陷 | 批次、安装及质检台账 | 组件、规格、交付、安装、备品、报废、修理、退回、去向 | 供应及竣工核对 | m, kg, item | 每批 | 进场至验收 | 各资产 | 按组件及功能平衡 | 发票、清单、缺陷报告 |
| `cp_subcontract` | `asset_integration` | 连接及测试 | 合同及发票 | 范围、功能、资产、数量、自有工程排除项 | 合同与测试核对 | declared service unit | 每合同 | 集成至测试 | 分包范围 | 汇总验收且不重复范围 | 发票及测试档案 |
| `cp_acceptance` | `asset_integration` | 参考交付包 | 调试档案 | 功能、资产清单、路由长度、站/塔数、规格、失败/通过测试、移交 | 签署测试和验收 | package, route-km, item | 每次移交 | 完工 | 全交付范围 | 签署交付仅计一次 | 测试及移交证明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_package` | 产出 | 全部声明资产通过后才计 1 包；分别汇总验收线路长度和相关资产数。 | 清单、测绘、测试 | 交付包及路由 km、资产数 | `record-match-identity` |
| `component_balance` | 组件 | 收到 = 安装 + 备品/退回 + 最终报废 + 库存变化；返工只计一次。 | 发票及质检台账 | 各组件 m、kg 或 item | `material-balance-identity` |
| `spoil_balance` | 准备 | 外运质量 = 称量外运量或测绘体积 × 实测密度，减去回用质量。 | 测绘、密度、外运、回用 | kg/package | `material-balance-identity` |
| `energy_normalization` | 机械 | 用声明因子换算载体，分摊到验收交付一次，避免发电机燃料/电量重复。 | 仪表、燃料、工时 | 各载体清单/package | `material-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `asset_identity` | 交付 | 记录功能、地点、线路、清单、接口及验收数量。 | 设计及签署竣工档案 |
| `function_tests` | 线缆和站 | 按适用情况保留电气绝缘/连通/安全、光损耗/连通或站/塔测试。 | 签署测试档案 |
| `balances` | 材料 | 解释不匹配的长度/质量、开挖、回用、报废和修理。 | 核对台账及接收单 |
| `uuid_disclosure` | 未绑定流 | 保留供应与竣工规格，待核实平台精确身份及支持行。 | 规格及 manifest 缺口 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `package_gate` | 参考产出 | 须有本地网络功能、资产清单、适用测试和签署移交；仅站点工程可为零线缆路由 km。 | `unsd-cpc3-53252`; `itu-g6503` |
| `route_delta_check` | 区段 | 地下须有沟槽/管道/回填记录，架空须有电杆/支承/架线记录；每实体区段只选一条路线。 | `rus-underground-distribution` |
| `handoff_check` | 图谱 | 匹配准备和接收的区段/场址 ID，外运物须有接收方。 | `record-match-identity`; `material-balance-identity` |
| `defect_check` | 集成 | 拒绝重复能源、未解决缺陷计作验收、把电缆 m 当路由 km、把站点数折入长度。 | `material-balance-identity`; `record-match-identity` |
| `identity_gate` | 交换 | 具体交换前须以详情确认精确 UUID；制造电缆或公用事业服务不是安装工程。 | `record-match-identity` |

## 10. 已发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 场址特定的建设前景交付包；方法学待评审。 |
| downstream_use | 仅在功能、线路、资产清单及移交匹配时作为次级/背景数据集。 |
| allowed_use | 指定验收交付包的建设负担，线路和站点数量分别呈现。 |
| excluded_use | 单独电缆制造、公用事业服务、长距离网络或把不同交付包当作同质路由 km 比较。 |
| required_metadata | 地理、年份、功能、路由 km、电缆长度、电压/光纤、站/塔清单、既有资产及移交。 |
| required_quality_disclosure | 测绘、路线选项、组件和移除物平衡、共享机械、缺陷、暂定范围及未绑定身份。 |
| update_trigger | 边界、线路、设计、资产组合、数量、验收标准或核实的平台身份变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-53252` | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, subclass 53252, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 类别边界及相关资产。 |
| `rus-underground-distribution` | official_guidance | USDA Rural Utilities Service Bulletin 1728F-806, Specifications and Drawings for Underground Electric Distribution, https://www.rd.usda.gov/files/UEP_Bulletin_1728F-806.pdf | 地下安装角色。 |
| `itu-g6503` | standard | ITU-T G.650.3 (2017), Test methods for installed single-mode optical fibre cable links, https://www.itu.int/epublications/publication/itu-t-g-650-3-2017-08-test-methods-for-installed-single-mode-optical-fibre-cable-links | 通信线路测试门槛。 |
| `record-match-identity` | method_factor | 相同区段/场址与签署交付包记录恒等式。 | 移交和产出统计。 |
| `material-balance-identity` | method_factor | 收料、安装、回用、报废和离开边界的物质守恒。 | 组件、移除物和报废校验。 |
