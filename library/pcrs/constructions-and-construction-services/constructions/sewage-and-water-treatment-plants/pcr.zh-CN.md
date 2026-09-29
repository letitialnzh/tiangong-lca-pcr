---
pcr_id: pcr.constructions-and-construction-services.constructions.sewage-and-water-treatment-plants
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 污水及水处理厂设施

## 1. 范围与适用性

本 PCR 适用于建成、测试并验收的污水处理厂、饮用水处理厂，或独立合同交付的污水系统设施。后者可包括泵站、调蓄及处置等按合同整体验收的构筑物，但不包括另行验收的本地给水或排污主管。包括合同内池体、基础、工艺设备、控制系统及直接归属的进出水连接。长距离管线、单独设备及移交后的常规处理服务均不属于本建造资产。[unsd-cpc3-notes; epa-startup]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.sewage-and-water-treatment-plants |
| classification_refs | CPC 3.0 53253；映射接受另行判定。 |
| covered_products | 已验收处理厂或独立合同污水系统设施，以及合同内直接连接。 |
| excluded_products | 独立验收本地主管、长距离管线、设备单售、常规处理服务。 |
| representative_product | 一座已验收且声明功能、设计处理能力和单元的设施。 |
| production_route | 场地开挖；池体/基础成形；设备、管线和控制集成；干湿测试、整改及移交。 |
| market_state | 工程验收时的已安装资产，不是已处理水。 |

上级活动 `integrate_accept` 按实际路线选工艺单元：污水可包括格栅、生物处理与污泥单元；饮用水可包括澄清、过滤与消毒；独立污水系统合同只纳入有证据的收集、调蓄或处置设施，不虚构处理流程。逐路线采集单元清单、设计能力、接口几何、材料与测试标准。不同路线仅在明确分摊的处理线中并存。[unsd-cpc3-notes; epa-startup]

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 建成并验收的污水/水处理厂或合同内污水系统设施。 |
| How much | 一座已验收设施；另报 m3/day 设计能力与连接尺寸。 |
| How well | 竣工单元、结构、渗漏、控制和性能测试符合合同验收标准。 |
| How long or cycle | 一个建造项目至签字移交；设计寿命作元数据。 |
| reference_flow_link | `integrate_accept` 的 `accepted_facility` 输出。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted facility |
| Reference product flow | 已验收污水或水处理设施；UUID 未解析 |
| Reference flow property | Count; UUID unresolved |
| Reference unit group | Count; UUID unresolved |
| Reference unit | facility |
| Required qualifiers | 场址；功能；设计能力；单元清单；合同界限；连接长度；测试介质；验收日期 |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `facility_count` | 参考产品 | Count, UUID unresolved | facility | 签字验收的合同设施计一次，不逐单元重复计数。 |
| `design_capacity` | 处理路线 | Volume per time | m3/day | 设计能力与调试测试水量分开报告。 |
| `earth_state` | 开挖和回填 | Volume and density | m3; kg/m3 | 质量换算前区分原状、松散和压实状态。 |
| `energy_carrier` | 建造和测试 | Carrier-specific energy or mass | kWh; MJ; kg | 燃料、电力分别记录，不重复计发电机输出。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 合同施工前测量的场地和既有排水/公用设施接口。 |
| starting_condition_role | 物理基线，而非零负担的成品厂。 |
| product_classification_scope | 一座已验收处理厂或合同污水系统设施；独立主管另计。 |
| recursive_input_rule | 采购同类成品模块从供应商交付点进入并关联上游数据集。 |
| upstream_dataset_requirement | 按路线关联混凝土、钢、管材、设备、能源、运输和废物处理数据集。 |
| disclosure | 功能、能力、单元、连接边界、土建量、弃土、调试、共享工程、返工及身份缺口。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_gate` | 全设施 | 纳入合同工程、干湿测试和缺陷关闭至签字验收；排除后续运行处理。 | `epa-startup` |
| `connection_limit` | 管线接口 | 仅纳入合同直接连接；独立本地主管和长距离管线另建数据集。 | `unsd-cpc3-notes` |
| `removal_handoff` | `prepare_site` | 分别记录原地状态、移除物、内部回用和外运弃土；合格开挖面移交成形。 | `mass-balance-identity` |
| `forming_handoff` | `form_civil` | 合格池体/基础移交集成；缺陷部分返修或按记录离界。 | `mass-balance-identity` |
| `route_delta` | `integrate_accept` | 单元拓扑、材料、测试介质和标准依污水、饮用水或污水系统路线确定。 | `epa-startup` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_site` | 场地开挖和准备 | required | 测量场地至合格开挖面。 | 独立移除土壤/障碍物，区分回用和弃土。 | 测量面积与移除体积。 |
| `form_civil` | 池体和基础成形 | required | 合格开挖面至合格壳体。 | 混凝土、钢筋和填料成形；返修缺陷。 | 竣工体积与面积。 |
| `integrate_accept` | 设备集成与验收 | required | 壳体至签字移交。 | 安装泵、处理单元、管线和控制，干湿测试及整改。 | 一座设施及设计能力。 |

### 过程：场地开挖和准备（`prepare_site`）

#### 输入

##### 产品流

###### 土方服务（`earthwork_service`）

单独分包的场地整理和开挖；不重复计自有机械。

- 选定流：按合同范围的土方和开挖服务
- 流属性/单位：Contract service quantity / declared unit
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- 数量规则：发票与测绘量和共享工程分摊核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site`
- 数量范围：分包范围比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of documented excavation
  - 基准：分配开挖范围除以项目记录开挖范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 场地能源（`site_energy`）

仅计自有设备开挖、排水和场内运输的燃料或电力；分包土方服务已含能源则不重计。

- 选定流：按实际载体的施工能源
- 流属性/单位：Carrier-specific energy or mass / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按任务计量，分开分包范围。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定场地能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：MJ-equivalent/facility
  - 基准：含载体换算记录的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格开挖面（`accepted_excavation`）

经测量、向 `form_civil` 移交的基础区域，并非额外成品厂。

- 选定流：合格开挖面和基础区域
- 流属性/单位：Area / m2
- 数量规则：合计无重叠验收面积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_site`
- 数量范围：基础面积完成率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of specified footprint
  - 基准：合格面积除以合同面积
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 外运弃土（`exported_spoil`）

离开场地的开挖物或不合格土；现场回用是内部移交。

- 选定流：按类型和去向的外运开挖物
- 流属性/单位：Mass / kg
- 数量规则：移除质量与回用、库存变化和外运平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_site`
- 数量范围：外运比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of removed mass
  - 基准：外运质量除以移除质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：池体和基础成形（`form_civil`）

#### 输入

##### 产品流

###### 接收合格开挖面（`received_excavation`）

从 `prepare_site` 内部接收 `accepted_excavation`；不将其上游开挖负担作为新增采购服务重计。

- 选定流：合格开挖面和基础区域
- 流属性/单位：Area / m2
- 数量规则：与上游合格面积精确核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_site`
- 数量范围：内部面积匹配
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：received/handed-off area
  - 基准：接收面积除以上游合格面积
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 土建材料（`civil_materials`）

按规格记录混凝土、钢筋、填料和模板；可重复模板按实际次数分摊。

- 选定流：按实际规格的土建材料
- 流属性/单位：Mass / kg
- 数量规则：逐材料核对交付、安装、退回、报废和库存。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_civil`
- 数量范围：合格安装比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of delivered material mass
  - 基准：合格安装质量除以交付质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 土建能源（`civil_energy`）

模板、浇筑和养护辅助用电/燃料；已含于采购服务中的能源不重计。

- 选定流：按实际载体的土建施工能源
- 流属性/单位：Carrier-specific energy or mass / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：计量机械消耗，仅分配未捆绑作业。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定土建能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：MJ-equivalent/facility
  - 基准：含载体换算记录的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格土建壳体（`civil_shell`）

向 `integrate_accept` 移交的合格池体和基础。

- 选定流：合格池体与基础
- 流属性/单位：Concrete volume / m3
- 数量规则：合计竣工合格构筑物；返修不重计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_civil`
- 数量范围：土建移交完成率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of specified structures
  - 基准：合格构筑物除以指定构筑物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 不合格土建材料（`civil_rejects`）

不合格浇筑体或构件在本过程返修或按记录回收、处置；仅离界部分是废物。

- 选定流：按类型和去向的不合格土建材料
- 流属性/单位：Mass / kg
- 数量规则：核对故障、返工、退回、回收与处置。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_civil`
- 数量范围：土建报废比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of civil-material delivery mass
  - 基准：离界报废质量除以交付土建材料质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：设备集成与验收（`integrate_accept`）

#### 输入

##### 产品流

###### 接收合格土建壳体（`received_civil_shell`）

从 `form_civil` 内部接收 `civil_shell`，不是另行外购的构筑物。

- 选定流：合格池体与基础
- 流属性/单位：Concrete volume / m3
- 数量规则：核对上游合格壳体尺寸与签字质检。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_civil`
- 数量范围：内部壳体匹配
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：received/handed-off civil volume
  - 基准：接收体积除以上游合格体积
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 处理设备和直接连接管线（`plant_components`）

按路线记录泵、工艺单元、阀、控制和合同连接管；内部壳体不重复采购。

- 选定流：按规格的工艺设备和一体化管线构件
- 流属性/单位：Mass or count / kg or item
- 数量规则：逐单元核对交付、安装、退回与更换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 数量范围：合格构件比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of delivered components
  - 基准：合格安装件数除以交付件数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 湿测试用水（`test_water`）

仅计移交前为测试与清洗跨越建造边界的水；运行进水排除。

- 选定流：按来源和水质的调试测试用水
- 流属性/单位：Volume / m3
- 数量规则：计量测试取水、回用和排放。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tests`
- 数量范围：暂定湿测试筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：m3/facility
  - 基准：宽泛首轮筛查；实际量由项目方案决定
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调试能源（`test_energy`）

计量移交前干湿测试与返修的燃料、电力；验收后的常规运行排除。

- 选定流：按实际载体的调试能源
- 流属性/单位：Carrier-specific energy or mass / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按测试与载体计量至签字移交。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tests`
- 数量范围：暂定调试能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：MJ-equivalent/facility
  - 基准：含载体换算记录的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收设施（`accepted_facility`）

干湿检查、缺陷关闭和签字移交后的整厂或合同污水系统设施。

- 选定流：标明功能和能力的已验收污水或水处理设施
- 流属性/单位：Count / facility
- 数量规则：每合同参考流恰好计一座已验收设施。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_acceptance`
- 数量范围：参考流恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：facility/reference flow
  - 基准：移交时签字验收的设施数
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 失效设备和测试残余（`integration_rejects`）

不合格单元和建造测试残余按记录退回、回收或处理；修复单元在本过程循环，不是额外成品。

- 选定流：按身份和去向的失效构件及调试残余
- 流属性/单位：Mass / kg
- 数量规则：核对故障、修复、退回和外运测试材料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_tests`
- 数量范围：集成离界比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of relevant delivered material mass
  - 基准：离界报废质量除以相关交付质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_facility` | 合格输出 | 建造负担归于已验收资产，运行处理产出不属于本参考产品。 | `unsd-cpc3-notes` |
| `shared_works` | 共享通道、设备、测试 | 按实测或记录的工程驱动量分配，共享工程只计一次。 | `mass-balance-identity` |
| `spoil_route` | 开挖和填方 | 内部回用保留负担；外运有去向；无证据不得抵扣。 | `mass-balance-identity` |
| `reject_retention` | 缺陷 | 返工负担归于发生节点；仅复测合格部分进入成品。 | `mass-balance-identity`; `epa-startup` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site` | `prepare_site` | 土方、面积、弃土 | 测绘与票据 | 面积；开挖；密度；回用；外运；去向；合同范围 | 测量、地磅、发票 | m2; m3; kg | 分段/每车 | 项目期 | 合同场地 | 平衡开挖、回用、外运 | 测绘、票据 |
| `cp_energy` | `prepare_site`; `form_civil` | 施工能源 | 计量与设备日志 | 载体；仪表；燃料；任务；分包重叠 | 仪表、发票、班次日志 | kWh; MJ; kg | 班次/月 | 项目期 | 现场机械 | 按载体汇总并只分配一次 | 仪表、发票 |
| `cp_civil` | `form_civil` | 材料、壳体、报废 | 采购与质检 | 规格；交付；安装；体积；报废；返修；退回；合格壳体 | 票据、竣工图、质检 | kg; m3; item | 每批/构筑物 | 项目期 | 土建区域 | 核对交付与合格状态 | 票据、质检 |
| `cp_components` | `integrate_accept` | 单元与连接 | 采购与质检 | 单元；交付；安装；退回；连接长度；设计能力 | 采购单、竣工图、质检 | kg; item; m; m3/day | 每单元/分段 | 项目期 | 设施 | 核对单元与连接范围 | 发票、图纸 |
| `cp_tests` | `integrate_accept` | 水、能源、报废 | 计量与测试 | 测试水；能源；干湿测试；故障；修复；残余；去向 | 仪表、测试单、废物票据 | m3; kWh; kg | 每测试 | 至验收 | 设施 | 仅汇总建造测试 | 签字测试 |
| `cp_acceptance` | `integrate_accept` | 合格设施 | 验收证书 | 功能；能力；单元；连接界限；缺陷；关闭；日期 | 签字移交 | facility; m3/day | 移交时 | 项目期 | 合同资产 | 签字资产计一次 | 证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cut_balance` | `prepare_site` | 用实测密度，移除质量 = 回用 + 外运 + 库存变化。 | 测绘、密度、票据 | 开挖与弃土 | `mass-balance-identity` |
| `component_balance` | 土建和集成 | 交付 = 合格安装 + 退回 + 离界报废 + 库存变化；返工不是新投入。 | 采购单、质检、退回 | 合格材料与报废 | `mass-balance-identity` |
| `acceptance_count` | `integrate_accept` | 缺陷关闭后计签字验收设施；能力仍作限定属性。 | 测试与移交 | 参考产品 | `epa-startup` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_trace` | 全节点 | 说明功能、能力、单元、合同界限与验收 gate。 | 图纸与移交 |
| `handoff_balance` | 场地和土建 | 内部移交对应，不重复计数。 | 测量、质检 |
| `trial_separation` | 调试 | 建造测试与移交后运行分开。 | 带日期测试单 |
| `identity_gap` | 未解析流 | 最终交换前确认流、属性和单位组 UUID。 | 平台详情核验 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_gate` | 参考产品 | 核实功能、能力和签字验收；排除独立主管、设备单售和常规服务。 | `unsd-cpc3-notes` |
| `route_units` | `integrate_accept` | 实际路线单元清单驱动材料与测试；不存在的单元不计。 | `epa-startup` |
| `test_gate` | 验收 | 要求干湿检查、渗漏/控制测试、缺陷关闭及签字移交。 | `epa-startup` |
| `reject_path` | 全节点 | 返工回到发生节点；离界废物有实测去向且不进入合格输出。 | `mass-balance-identity` |
| `range_role` | 全卡片 | 暂定筛查范围为 QA 提示，不是默认材料强度。 |  |

## 10. 发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 已验收处理厂或污水系统设施的前景建造数据包。 |
| downstream_use | 仅功能、能力、路线和 gate 可比时作二级或背景数据。 |
| allowed_use | 标明土建与设备范围的建造阶段建模。 |
| excluded_use | 常规处理服务、独立主管与设备单售。 |
| required_metadata | 场址、年份、功能、能力、单元、土建、连接、测试、移交。 |
| required_quality_disclosure | 共享分配、材料平衡、测试/运行分离、暂定范围、UUID 缺口。 |
| update_trigger | 路线、设计、合同、竣工量、验收或已核实身份改变。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-notes` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 范围与主管区分。 |
| `epa-startup` | official_guidance | US EPA, Start-Up of Municipal Wastewater Treatment Facilities, EPA 430/9-74-008, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=00000IDV.TXT | 单元差异及干湿测试。 |
| `mass-balance-identity` | method_factor | Conservation-of-material identity applied to surveyed and weighed foreground records. | 材料、移交与报废。 |
