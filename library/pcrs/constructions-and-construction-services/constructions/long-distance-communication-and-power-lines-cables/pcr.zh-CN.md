---
pcr_id: pcr.constructions-and-construction-services.constructions.long-distance-communication-and-power-lines-cables
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 长距离通信和电力线路（电缆）

## 1. 范围与适用性

本 PCR 涵盖两端点之间已验收的长距离通信或输电线路，包括架空、陆地埋设及海底路线及其支撑、防护、接头和直接一体化接口。边界由走廊准备至安装验收，不含单独电缆成品、本地配电、单独交付的终端建筑或运营。通信、输电功能及不同路线均须分段报告。[doe-transmission-eis; itu-g971]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.long-distance-communication-and-power-lines-cables |
| classification_refs | CPC 3.0 53242，长距离通信和电力线路（电缆）；映射接受另行决定。 |
| covered_products | 已验收的长距离架空、陆埋或海底通信或输电线路。 |
| excluded_products | 单独电缆、本地配电、单独交付的建筑、运营与维修。 |
| representative_product | 指定两端点间一验收路线公里的线路段。 |
| production_route | 走廊勘测准备；架空立塔放线、陆地开沟铺管牵引或海底清障敷设防护；接续、测试、移交。 |
| market_state | 移交时已安装且验收的基础设施。 |

`line_integration` 是组件集成父活动。架空、陆埋与海底对支撑/防护、挖掘或海上作业和测试有不同要求。它们可在不同物理段并存，但单段不得同时采用互斥工法。[doe-transmission-eis; itu-g971]

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已安装的长距离通信或输电线路段。 |
| How much | 沿线测量的一验收路线公里；电缆/回路公里另行报告。 |
| How well | 通过声明的电气或光学设计、防护和调试测试。 |
| How long or cycle | 建设至签字调试；设计寿命为元数据而非使用阶段负担。 |
| reference_flow_link | `line_integration` 的 `accepted_line`。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 验收路线公里 |
| Reference product flow | 已验收的长距离安装线路；UUID 未解析 |
| Reference flow property | 长度；UUID 未解析 |
| Reference unit group | 长度；UUID 未解析 |
| Reference unit | route-km |
| Required qualifiers | 通信或输电功能；端点；路线段；电压或光学规格；回路/光纤数；路线与电缆长度；支撑、防护与接口范围；验收测试和日期。 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `route_length` | 参考产出 | 长度，UUID 未解析 | route-km | 沿线测量一次；多回路不得倍乘路线公里。 |
| `component_length` | 电缆及导线 | 长度 | m or km | 安装长度含余缆，须与路线长度分报。 |
| `material_mass` | 组件与拒收件 | 质量 | kg | 按规格核对到货、安装、退回和拒收。 |
| `earthwork_volume` | 走廊作业 | 体积 | m3 | 原位体积与松方运输体积区分。 |
| `energy_carrier` | 机械及船舶 | 载体能源或质量 | kWh, MJ or kg | 燃料与购电分报；不得重复计算自发电。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 作业前已勘测的路权或海床走廊和既有端点接口。 |
| starting_condition_role | 物理基线，并非零负担的已建线路。 |
| product_classification_scope | 已验收且声明路线与功能的长距离线路；本地配电在外。 |
| recursive_input_rule | 购入组件在供应商交付点进入；完整安装线路不能作未经分解的材料投入。 |
| upstream_dataset_requirement | 关联路线匹配的电缆、导线、金属、混凝土、聚合物、能源、运输及处理数据；避免分包与自有机械重复。 |
| disclosure | 功能、走向、路线长度、组件范围、清除物、拒收、共用设备、测试和身份缺口。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_gate` | 整条线路 | 包含必要的勘测、清理、支撑/防护、安装、接头、接口和调试直至签字移交；排除使用与维护。 | `doe-transmission-eis`; `itu-g971` |
| `corridor_handoff` | 两节点 | `corridor_preparation` 独立清除障碍，仅将已验收走廊交给 `line_integration`；残余物出口另记。 | `doe-transmission-eis`; `itu-g971` |
| `route_delta` | `line_integration` | 架空需基础、支撑和放线；陆埋需沟槽、管道和回填；海底需勘测、清障、敷设、余缆/防护及测试。各段可并存。 | `doe-transmission-eis`; `itu-g971` |
| `shared_equipment` | 机械和船舶 | 使用量只分配到实际段一次；避免分包服务与自有能源重复。 | `doe-transmission-eis`; `itu-g971` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `corridor_preparation` | 走廊清理与准备 | required | 已勘测走向至验收准备线路。 | 独立清除植被、土壤、障碍或海床杂物；移交准备走廊并分流残余物。 | 准备路线公里、面积与挖方。 |
| `line_integration` | 线路安装与验收 | required | 验收走廊至签字调试。 | 集成电缆/导线及支撑/防护与接续服务；修复或分流拒收件。 | 验收路线公里及路线特定组件量。 |

### 过程：走廊清理与准备（`corridor_preparation`）

#### 输入

##### 产品流

###### 土方与清障服务（`preparation_service`）

条件性外包清理、开沟或海上清障；其机械能源不得再按自有前景重复计入。

- 选定流：路线特定的走廊准备服务
- 流属性/单位：合同服务量 / 声明单位
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- 数量规则：以测得准备走向核对分包范围。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_corridor`
- 数量范围：暂定服务筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：declared service units/route-km
  - 基准：宽泛筛查，非设计量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备作业能源（`preparation_energy`）

按实际载体区分燃料、购电和船舶推进。

- 选定流：陆地或海上走廊作业能源载体
- 流属性/单位：载体特定能源或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：计量能源只向准备段分配一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定准备能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：MJ-equivalent/route-km
  - 基准：声明载体；仅作筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收准备走廊（`prepared_corridor`）

按段位置和路线类型内部移交，并非另一条成品线路。

- 选定流：已验收的准备走向
- 流属性/单位：长度 / route-km
- 数量规则：勘测并签字确认可安装走向。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_corridor`
- 数量范围：准备线路长度恒等
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：prepared route-km/accepted route-km
  - 基准：匹配的线路段走向
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`segment-length-identity`

##### 废物流

###### 清除的走廊残余物（`corridor_residuals`）

植被、土石及障碍物须有来源和去向；留作回填的不算出口废物。

- 选定流：送外部管理的走廊清除物
- 流属性/单位：质量 / kg
- 数量规则：称重或以测得体积及实测密度计算，扣除再用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_residuals`
- 数量范围：出口比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of removed mass
  - 基准：出口质量 / 清除质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：线路安装与验收（`line_integration`）

#### 输入

##### 产品流

###### 准备走廊移交（`corridor_handoff`）

按段 ID 与准备走廊产出匹配，不得再次采购。

- 选定流：来自 `corridor_preparation` 的已验收准备走向
- 流属性/单位：长度 / route-km
- 数量规则：同一验收段的投入与产出长度匹配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_corridor`
- 数量范围：移交相等
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：input/output route-km ratio
  - 基准：同一已验收段
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`segment-length-identity`

###### 电缆或导线组件（`line_components`）

按规格记录电缆或导线、接头、中继器和附件；制造供应与安装分开。

- 选定流：按规格的电缆、导线和接续组件
- 流属性/单位：长度或质量 / m or kg
- 数量规则：核对到货及含余缆安装长度、退回和拒收。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每验收路线公里及路线段
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 数量范围：暂定组件长度筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：component-km/route-km
  - 基准：回路、光纤、分支和余缆的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 支撑及防护组件（`support_components`）

按路线识别塔架、基础、绝缘子、管道、回填、铠装、海床防护和直接一体化接口的组件角色。

- 选定流：按规格的路线特定支撑与防护
- 流属性/单位：质量 / kg
- 数量规则：核对安装量、到货、可再用临时工程及拒收。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每验收路线公里及路线段
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 数量范围：暂定支撑材料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：kg/route-km
  - 基准：宽泛路线特定筛查，非设计规格
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 安装能源（`installation_energy`）

按适用路线包括立塔、放线、牵引、敷设、埋设及测试能源，按载体分报。

- 选定流：路线特定安装能源载体
- 流属性/单位：载体特定能源或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：机械和船舶能源计量或按段分配，不与分包服务重复。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定安装能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：MJ-equivalent/route-km
  - 基准：已披露载体总量；仅作筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接续与安装服务（`installation_service`）

条件性分包放线、牵引、熔接、敷设或测试。明确合同接续角色和线路段；内含机械能源不得再作为自有前景能源，或明确分出不重叠范围。

- 选定流：路线特定线路安装及调试服务
- 流属性/单位：合同服务量 / 声明单位
- 数量规则：将发票作业与验收段及自有作业边界核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_installation`
- 数量范围：暂定服务筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：declared service units/route-km
  - 基准：宽泛筛查，以合同实际范围为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收安装线路（`accepted_line`）

仅计入通过路线特定电气或光学调试且签字移交的走向，剔除失败段。

- 选定流：已验收的长距离通信或输电安装线路；UUID 未解析
- 流属性/单位：长度 / route-km；UUID 未解析
- 数量规则：勘测验收段并按功能与路线加总一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_acceptance`
- 数量范围：参考产出恒等
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：accepted route-km/reference route-km
  - 基准：每参考单位一验收路线公里
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`segment-length-identity`

##### 废物流

###### 拒收的安装组件（`rejected_components`）

在产生节点识别损坏电缆、支撑或接头，记录修复、退供应商、回收或处置。修复件返安装，不得同时算验收产出。

- 选定流：按材料及去向的拒收线路组件
- 流属性/单位：质量 / kg
- 数量规则：拒收、修复/退回及最终边界出口只核对一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_components`
- 数量范围：拒收组件比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of delivered component mass
  - 基准：按组件最终拒收质量 / 到货质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_route_length` | 已验收线路 | 每段物理路线即使多回路也只计一次；通信与输电分报，除非共用资产归属有证据。 | `segment-length-identity` |
| `shared_plant` | 机械、船舶、临时通道 | 按工时或工程量向实际段分配一次。 | `doe-transmission-eis`; `itu-g971` |
| `reject_loop` | 不合格组件 | 修复返至 `line_integration`；供应商退回、回收或处置作边界出口，保留负担，拒收件不计验收长度。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_corridor` | `corridor_preparation` | 清理与移交 | 勘测及作业记录 | 段、路线、长度、面积、体积、分包、验收 | 竣工勘测与签字 | km, m2, m3, service unit | 每段 | 作业前至走廊验收 | 全线路 | 仅加总验收段 | 勘测与证书 |
| `cp_residuals` | `corridor_preparation` | 清除物与去向 | 出场票据 | 材料、来源、质量、体积、密度、再用、去向 | 称重与勘测核对 | kg, m3 | 每次出场 | 清理期间 | 走廊与目的地 | 出口质量只计一次 | 票据与收据 |
| `cp_components` | `line_integration` | 电缆、支撑、拒收 | 到货及质检台账 | 规格、段、到货、安装、余缆、拒收、修复、退回、去向 | 供应商与竣工核对 | m, kg, item | 每批 | 安装至验收 | 全部段 | 核对安装、退回、拒收 | 发票、安装及缺陷记录 |
| `cp_energy` | both nodes | 能源 | 仪表及燃料记录 | 载体、数量、机械、船舶、段、工时、分包范围 | 仪表及发票核对 | kWh, MJ, kg | 每月 | 作业期间 | 走廊、场地、船舶 | 按使用分配一次 | 仪表与收据 |
| `cp_installation` | `line_integration` | 合同接续与测试 | 合同及测试档案 | 段、服务范围、数量、测试、发票、自有作业剔除 | 合同至竣工核对 | 声明服务单位 | 每包 | 安装至测试 | 相关段 | 加总不重复的验收范围 | 发票与测试证书 |
| `cp_acceptance` | `line_integration` | 参考产出 | 调试档案 | 走向、功能、路线、长度、规格、测试、缺陷、日期 | 勘测及签字测试 | route-km | 每段及最终 | 完成关口 | 两端点之间 | 加总通过且不重叠段 | 测试与签字移交 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_length` | 产出 | 加总签字且不重叠路线长度；复测前剔除失败段。 | 勘测及调试 | 验收 route-km | `segment-length-identity` |
| `component_balance` | 组件 | 按规格，到货 = 安装 + 退回 + 最终拒收 + 库存变化。 | 到货、安装、退回、拒收 | 各组件 kg 或 m | `mass-balance-identity` |
| `residual_mass` | 走廊 | 出口质量 = 称重或测得清除体积 × 实测密度 − 再用质量。 | 勘测、票据、密度、再用 | kg/route-km | `mass-balance-identity` |
| `carrier_conversion` | 能源 | 以披露因子折算各载体；自发电与燃料不得重复。 | 仪表、燃料、分配 | MJ-equivalent/route-km | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_identity` | 线路 | 声明功能、路线、端点、规格和段 ID。 | 设计及竣工档案 |
| `route_testing` | 安装 | 保留适用的架空电气/放线、陆埋防护/连续性或海底敷设/光学测试。 | 测试与验收档案 |
| `quantity_reconciliation` | 组件及清除物 | 解释不匹配的长度、质量、退回、弃土和返工。 | 签字核对 |
| `identity_disclosure` | 未绑定流 | 平台明细和支持行确认前保留语义规格。 | 供应商及竣工规格 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `function_and_route` | 产出 | 缺功能、路线、端点、段长或签字调试时拒绝验收产出。 | `doe-transmission-eis`; `itu-g971` |
| `segment_route_delta` | 各段 | 架空核基础/支撑/放线，陆埋核沟槽/管道/回填，海底核勘测/清障/敷设/防护/测试；单段不可同时采用互斥工法。 | `doe-transmission-eis`; `itu-g971` |
| `corridor_to_line` | 过程图 | 准备及安装走向一致；清除物须有去向。 | `segment-length-identity`; `mass-balance-identity` |
| `rework_and_double_count` | 安装 | 标记拒收计入验收、修复出口不明、分包/自有能源重复或电缆长度冒充路线长度。 | `mass-balance-identity`; `segment-length-identity` |
| `uuid_gate` | 交换 | 具体 TIDAS 交换前须确认精确产品/废物流及支持 UUID；制造电缆不是安装线路参考流。 | `segment-length-identity` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 场址特定建设阶段线路前景包；方法待复审。 |
| downstream_use | 仅在功能、路线、规格及移交关口匹配时作次级或背景数据。 |
| allowed_use | 声明验收路线公里及分段的建设负担。 |
| excluded_use | 单独电缆制造、本地配电、吞吐量、线路运营或无条件路线比较。 |
| required_metadata | 端点、地理、年份、功能、路线长、回路/光纤、电压/容量、组件、测试、移交。 |
| required_quality_disclosure | 勘测与核对方法、路线差异、截断、共用设备、拒收、Range 证据层级及未解析身份。 |
| update_trigger | 路线、设计、规格、数量、测试范围或已验证平台身份变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `doe-transmission-eis` | official_guidance | U.S. Department of Energy, DOE/EIS-0414 Final Environmental Impact Statement, Volume 1, https://www.energy.gov/sites/default/files/EIS-0414-FEIS-2012-Volume1.pdf | 架空清理、基础、塔架和放线。 |
| `itu-g971` | standard | ITU-T G.971 (2024), General features of optical fibre submarine cable systems, https://www.itu.int/epublications/publication/itu-t-g-971-2024-12-general-features-of-optical-fibre-submarine-cable-systems | 海底勘测、清障、敷设、防护及测试。 |
| `segment-length-identity` | method_factor | 一路线公里非重叠安装走向测量恒等式。 | 移交与参考长度校验。 |
| `mass-balance-identity` | method_factor | 应用于称重与勘测前景记录的物料守恒恒等式。 | 材料及拒收核对。 |
