---
pcr_id: pcr.constructions-and-construction-services.constructions.aqueducts-and-other-water-supply-conduits-except-pipelines
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 渡槽及其他非管道供水输送构筑物

## 1. 范围与适用性

本 PCR 适用于以供水输送为主要功能、从测量后的场址施工至水工验收的非管道渡槽和输水构筑物。实际结构为明渠、衬砌渠道或高架渡槽时适用，但须声明物理形态。即使项目名称含“渡槽”，实物为管线也不适用。亦排除以灌溉、防洪或通航为主的工程、坝、泵站、水处理、运行输水量和交付的水。交叉构筑物及控制设施仅在所计合同包含时纳入，否则链接独立数据集。[unsd-53231; usbr-cip-construction]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.aqueducts-and-other-water-supply-conduits-except-pipelines |
| classification_refs | CPC 3.0 53231，渡槽及其他非管道供水输送构筑物；映射接受另行判定。 |
| covered_products | 已建成的非管道供水渠道、运河和渡槽结构。 |
| excluded_products | 管线、灌溉/防洪系统、坝、通航结构、泵送/处理、运行及交付的水。 |
| representative_product | 一路线公里已验收的非管道供水输送构筑物。 |
| production_route | 测量并准备走廊；开挖和成形基础；建造或衬砌水工断面；连接结构、衬砌和接缝；测试交付。 |
| market_state | 特定场址已安装、测试并验收的固定设施。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 场址已验收的非管道供水输送构筑物段。 |
| How much | 沿验收中心线计量一次的一路线公里。 |
| How well | 所声明的供水功能、断面几何和水工验收标准通过测试。 |
| How long or cycle | 一个建设项目截至签署移交；设计寿命属于元数据。 |
| reference_flow_link | 来自 `conduit_handover` 的 `accepted_conduit`。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 route-km 已验收供水输送构筑物 |
| Reference product flow | 场址已验收的非管道供水输送构筑物；UUID 未解析 |
| Reference flow property | 路线长度；UUID 未解析 |
| Reference unit group | 长度；UUID 未解析 |
| Reference unit | route-km |
| Required qualifiers | 地理定位端点与中心线；明渠、地下非管道或高架形态；断面与设计流量；衬砌/支撑类型；供水用途；所含附属设施；水工测试；移交日期 |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `route_length` | 参考产品 | 长度，UUID 未解析 | route-km | 已签署验收的中心线只计一次；并行渠道分别计长。 |
| `earth_mass` | 开挖、填筑和弃土 | 质量 | kg | 以实测密度与含水率将测量体积转为质量，并保留换算。 |
| `installed_mass` | 结构与衬砌 | 质量 | kg | 按规格将交付单位换算质量，核对安装、退回和报废。 |
| `site_energy` | 施工机械 | 能量或燃料质量 | kWh、MJ 或 kg | 区分能源载体，避免重复计算分包设备燃料。 |
| `test_water` | 水工测试 | 体积 | m3 | 分别记录供入、再用、回收、排放和留存的水；通水量不是建造产出。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 准备施工前已测量的走廊、既有工程及地层；披露拆除和修复状态。 |
| starting_condition_role | 建设的物理基线，而非免费输水构筑物产品。 |
| product_classification_scope | 一段已验收的非管道供水构筑物，并声明附属设施界面。 |
| recursive_input_rule | 预制渠道段以供应组件进入，不得把另一处完整验收构筑物当作未经说明的原料。 |
| upstream_dataset_requirement | 按实际用途链接结构/衬砌产品、运输、能源、水、采购施工和废物处理数据集。 |
| disclosure | 物理形态、路线、材料、地层、测试关口、排除的设备/管线、共用工程及返工。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_gate` | 整体产品 | 包括测量、开挖、结构、衬砌、接缝、测试与修补直至签署移交；排除运行和后续维护。 | `unsd-53231`; `usbr-cip-construction` |
| `b_nonpipe` | 分类 | 检查真实水工断面；仅凭项目名称不能将管线纳入。 | `unsd-53231` |
| `b_removal` | 走廊 | 开挖独立交付整平基础；将挖出土石分类为场内再用、库存、外运或残余。 | `usbr-cip-construction` |
| `b_form_join` | 断面 | 声明成形前材料、成形后断面、连接后的结构/衬砌/接缝及验收移交；缺陷段不得计入。 | `usbr-cip-construction`; `usbr-canal-design` |
| `b_alternative` | 路线 | 父活动为断面施工。土质、膜、混凝土衬砌及高架结构所需组件和测试不同；每段选择一种形态，不同段可并存。 | `usbr-cip-construction`; `usbr-canal-design` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `corridor_preparation` | 开挖与基础准备 | required | 已测量走廊至验收的整平基础。 | 移除土石、成形路基并分类弃土。 | 已验收 route-km 和土石质量。 |
| `conduit_handover` | 断面施工与移交 | required | 已验收基础至测试合格的输水构筑物。 | 成形断面、连接结构与衬砌并测试。 | 已验收 route-km。 |

### 过程：开挖与基础准备（`corridor_preparation`）

#### 输入

##### 产品流

###### 土方施工服务（`earthwork_service`）

仅计购入施工服务，不把其中设备燃料再次作为自有燃料计入。

- 选定流：场址开挖及整平服务
- 流属性/单位：合同服务数量 / 声明单位
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- 数量规则：按施工段及范围汇总签署工作量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每已验收 route-km
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_earthwork`
- 来源：`usbr-cip-construction`
- Range: 合同数量复核筛查
  - Range role: 质量核查界限（`qa_guardrail`）
  - Lower: 0
  - Upper: 1000000
  - Unit: declared service units/route-km
  - Basis: 暂定值，须核对合同单位
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

###### 设备能源（`preparation_energy`）

记录自有机械的能源载体，排除购入服务所含能源。

- 选定流：按实际载体区分的施工能源
- 流属性/单位：能量或燃料质量 / kWh、MJ 或 kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：汇总本节点计量和发票载体数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每已验收 route-km
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- Range: 能源记录筛查
  - Range role: 质量核查界限（`qa_guardrail`）
  - Lower: 0
  - Upper: 10000000
  - Unit: kWh-equivalent/route-km
  - Basis: 仅作暂定载体换算复核
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收整平基础（`accepted_support`）

整平几何和承载通过检验；该中间状态并非完整输水构筑物。

- 选定流：已验收输水构筑物整平基础
- 流属性/单位：路线长度 / route-km
- 数量规则：记录签署验收的里程，排除缺陷段。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每已验收 route-km
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- Range: 基础衔接
  - Range role: 允许范围（`allowed_range`）
  - Lower: 1
  - Upper: 1
  - Unit: route-km/route-km reference
  - Basis: 每最终路线公里对应一公里验收基础
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 方法公式（`method_formula`）
  - Sources: `reference-definition`

##### 废物流

###### 外运开挖弃土（`excavation_spoil`）

场内再用填料留在场址平衡中；外运弃土有唯一接收方。

- 选定流：按材质及接收方区分的挖出土石废物
- 流属性/单位：质量 / kg
- 数量规则：对照再用、库存变化及接收票据核对开挖量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每已验收 route-km
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_earthwork`
- 来源：`mass-balance-identity`
- Range: 外运比例检查
  - Range role: 质量核查界限（`qa_guardrail`）
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg excavated material
  - Basis: 外运弃土量除以已核对开挖质量
  - Basis kind: 过程产出（`process_output`）
  - Evidence kind: 方法公式（`method_formula`）
  - Sources: `mass-balance-identity`

##### 基本流

### 过程：断面施工与移交（`conduit_handover`）

#### 输入

##### 产品流

###### 接收已验收基础（`support_received`）

与上游已验收里程对应一次，不增加购入产品负担。

- 选定流：已验收输水构筑物整平基础
- 流属性/单位：路线长度 / route-km
- 数量规则：按里程匹配 `accepted_support`。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每已验收 route-km
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- Range: 内部基础匹配
  - Range role: 允许范围（`allowed_range`）
  - Lower: 1
  - Upper: 1
  - Unit: route-km/route-km reference
  - Basis: 每最终路线公里对应一公里上游验收基础
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 方法公式（`method_formula`）
  - Sources: `reference-definition`

###### 结构及衬砌组件（`structure_lining`）

仅按实际安装展开混凝土、钢筋、骨料、膜或黏土衬砌、接缝及高架支撑。这些是成形前材料和连接组件。

- 选定流：按规格区分的结构和衬砌供应产品
- 流属性/单位：质量 / kg
- 数量规则：逐组件核对交付、安装、退回、报废和库存质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每已验收 route-km
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`usbr-cip-construction`; `usbr-canal-design`
- Range: 组件质量筛查
  - Range role: 质量核查界限（`qa_guardrail`）
  - Lower: 0
  - Upper: 1000000000
  - Unit: kg/route-km
  - Basis: 暂定路线相关筛查，不是设计用量
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

###### 施工和试水用水（`construction_water`）

将拌合、养护及测试用水与未来运营供水分开。

- 选定流：按实际水源区分的施工及水工试验用水
- 流属性/单位：体积 / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- 数量规则：计量进水并核对再用、回收、排放和留存。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每已验收 route-km
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_test`
- Range: 用水平衡检查
  - Range role: 质量核查界限（`qa_guardrail`）
  - Lower: 0
  - Upper: 1
  - Unit: m3/m3 supplied water
  - Basis: 调整循环用水后，回收、排放和留存量之和除以供入量
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 方法公式（`method_formula`）
  - Sources: `mass-balance-identity`

###### 购入断面安装及连接服务（`installation_service`）

仅当外部承包方成形、安装或连接断面、衬砌及接缝时启用。其设备能源不在自有机械记录中重复计入；不可用无关的施工服务组强行赋予安装服务 UUID。

- 选定流：购入的输水断面安装及连接服务
- 流属性/单位：合同服务数量 / 声明单位
- 数量规则：按里程段和合同单位记录签署安装量；完全由自有人员设备完成时为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每已验收 route-km
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`usbr-cip-construction`
- Range: 购入安装数量筛查
  - Range role: 质量核查界限（`qa_guardrail`）
  - Lower: 0
  - Upper: 1000000
  - Unit: declared service units/route-km
  - Basis: 暂定合同单位相关复核，采购并非必需
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收供水输送构筑物（`accepted_conduit`）

只有通过水工验收的非管道长度成为参考产出；缺陷段须修复再测。

- 选定流：场址已验收的非管道供水输送构筑物
- 流属性/单位：路线长度 / route-km
- 数量规则：签署验收的中心线长度，排除失败或未完工区段。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每已验收 route-km
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- Range: 参考产出恒等式
  - Range role: 允许范围（`allowed_range`）
  - Lower: 1
  - Upper: 1
  - Unit: route-km/route-km reference
  - Basis: 验收长度归一化为一公里
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 方法公式（`method_formula`）
  - Sources: `reference-definition`

##### 废物流

###### 报废衬砌与边角料（`construction_rejects`）

按去向分类缺陷材料；现场修复段为返工，复验前不得计入验收产出。

- 选定流：按材料和接收方区分的报废衬砌及结构废物
- 流属性/单位：质量 / kg
- 数量规则：用组件平衡及转移联单核对报废质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每已验收 route-km
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rejects`
- Range: 报废质量比例
  - Range role: 质量核查界限（`qa_guardrail`）
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg supplied structure and lining materials
  - Basis: 外运报废质量除以交付组件质量
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 方法公式（`method_formula`）
  - Sources: `mass-balance-identity`

##### 基本流

## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_no_water_coproduct` | 参考产品 | 建设产出为长度而非水量；运营独立计算。 | `unsd-53231`; `reference-definition` |
| `a_shared` | 共用工程 | 以有记录的物理驱动因素将共用机械或工程分配至验收区段；份额合计为一且不重复计负担。 | `mass-balance-identity` |
| `a_rework` | 失败工程 | 修复负担随最终验收区段；外运废物只计一次，复验前不计失败长度。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_earthwork` | `corridor_preparation` | 服务和弃土 | 每施工段 | 里程、挖填、密度、再用、库存、外运、服务范围 | 测量、合同及地磅 | m3、kg、服务单位 | 每段 | 准备至基础验收 | 线路 | 按段平衡质量 | 测量、发票和票据 |
| `cp_energy` | 两节点 | 自有能源 | 各载体 | 数量、节点、日期、共用方 | 仪表和机械日志 | kWh、MJ、kg 或 L | 每周 | 建设和测试 | 线路 | 按载体和节点求和 | 仪表和日志 |
| `cp_components` | `conduit_handover` | 结构/衬砌 | 各物料 | 规格、交付、安装、退回、报废、库存 | 交货单和竣工清单 | kg、m3、件 | 每批 | 断面施工 | 区段 | 逐产品换算和平衡 | 发票和图纸 |
| `cp_water_test` | `conduit_handover` | 施工用水 | 每次测试 | 水源、输入、再用、回收、排放、留存、结果 | 仪表和测试单 | m3 | 每次测试 | 建造至移交 | 区段 | 净投入及去向平衡 | 仪表和测试报告 |
| `cp_acceptance` | 两节点 | 基础及构筑物 | 各里程段 | 端点、形态、容量、断面、缺陷、修复、测试、签署 | 测量和检查 | route-km | 各关口 | 基础至移交 | 区段 | 仅验收长度；匹配节点交接 | 图纸和证书 |
| `cp_rejects` | `conduit_handover` | 缺陷材料 | 每项报废 | 材料、质量、区段、修复、再用、接收方 | 废物与修复登记 | kg | 每项 | 施工 | 区段 | 与组件核对 | 联单和回执 |

### 计算规则

| rule_id | Applies to | Calculation | Inputs | Output unit | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference` | 产出 | 已验收中心线米数 / 1000；按验收 route-km 归一化各量。 | 签署测量 | route-km | `reference-definition` |
| `calc_earth` | 土方 | 开挖质量 = 再用填料 + 外运弃土 + 库存变化 + 有记录残余。 | 测量、密度、票据 | kg/route-km | `mass-balance-identity` |
| `calc_material` | 组件 | 逐项交付 = 安装 + 退回 + 报废 + 库存变化。 | 清单和联单 | kg/route-km | `mass-balance-identity` |
| `calc_shared` | 共用工程 | 分配量 = 实测量 × 物理使用份额；份额合计一。 | 仪表及使用量 | 数量/route-km | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 最终交换 | 数据集发布前根据平台详情确认 UUID、类型、关口、属性及单位。 | 详情及支持行审查 |
| `dq_scope` | 参考 | 核实非管道形态、供水功能、端点、断面、所含工程和签署。 | 竣工图和证书 |
| `dq_materials` | 主要物料 | 核对来源、交付、安装、退回、报废和接收数量。 | 清单和联单 |
| `dq_time` | 全部 | 保留施工和测试日期并披露缺口。 | 日志及测试单 |
| `dq_ranges` | 全部 | 暂定界限只触发复核，不替代缺失实测。 | 前景记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_nonpipe` | 参考 | 无论名称如何，排除管线；区分灌溉、坝及通航。 | `unsd-53231` |
| `v_gate` | 参考 | 要求中心线、水工测试及签署移交；通水量并非建造产出。 | `usbr-canal-design`; `reference-definition` |
| `v_route` | 路线 | 每段指定有证据的衬砌/结构路线并检查对应材料与测试；同段不得并用互斥形态。 | `usbr-cip-construction`; `usbr-canal-design` |
| `v_balance` | 土方/组件 | 核对开挖、组件、返工和外运，避免重复。 | `mass-balance-identity` |
| `v_rework` | 缺陷段 | 将缺陷关联修复复测或回收/处置；通过前不验收。 | `mass-balance-identity` |
| `v_uuid` | 身份 | 通用构筑物、废物和组件 UUID 在精确详情及支持项确认前留空。 | `reference-definition` |

## 10. 已发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 场址已验收非管道供水构筑物的建设数据包。 |
| downstream_use | 身份审查后作为基础设施 process 和 lifecyclemodel 的 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 对形态、容量、场址及交付关口匹配的每 route-km 建造评估。 |
| excluded_use | 管线、其他用途工程、供水运营及未链接情景的全寿命主张。 |
| required_metadata | 端点、形态、长度、容量、衬砌/支撑、地层、所含工程、测试及日期。 |
| required_quality_disclosure | 数量覆盖、暂定界限、土方/材料平衡、施工包重叠及 UUID 缺口。 |
| update_trigger | 验收长度、形态、清单、测试结果、供应方或身份发生变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-53231` | official_guidance | UNSD CPC 53231 说明，https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53231 | 边界与排除。 |
| `usbr-cip-construction` | official_guidance | 美国垦务局 Construction Activity Descriptions，https://www.usbr.gov/gp/nepa/cip/activity_descriptions.html | 准备、开挖及衬砌职责。 |
| `usbr-canal-design` | official_guidance | 美国垦务局 Design Standards No. 3: Canals and Related Structures，https://www.usbr.gov/pn/snakeriver/landuse/authorized/designstandards3.pdf | 水工/结构验收问题。 |
| `mass-balance-identity` | method_factor | 根据采集的土石、组件和用水记录进行守恒核对。 | 平衡及报废检查。 |
| `reference-definition` | method_factor | 本 PCR 的验收中心线定义和算术归一化。 | 参考产出与交接。 |
