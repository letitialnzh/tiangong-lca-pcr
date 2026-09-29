---
pcr_id: pcr.constructions-and-construction-services.constructions.mining-constructions
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 采矿构筑物

## 1. 适用范围

本 PCR 适用于在指定矿址验收的矿山专用非建筑物构筑物，包括井筒、提升塔、矿山巷道、装卸站及相关土木设施。边界止于结构和合同内系统的签字验收，不含开采、选矿和矿山运营。普通建筑、非矿山隧道及单独销售设备均排除；独立交付的设施单独计量并记录接口。[unsd-cpc3-53261; msha-shaft-sinking]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.mining-constructions |
| classification_refs | CPC 3.0 53261，采矿构筑物；映射接受另行决定。 |
| covered_products | 现场验收的矿山专用井筒、巷道、提升塔、装卸站及相关非建筑物土木设施。 |
| excluded_products | 矿物开采和加工、独立建筑、非矿山隧道、单独销售设备、运营及后续维护。 |
| representative_product | 一项具有已声明几何形态和安装系统范围的已验收矿山设施。 |
| production_route | 测绘与场地准备；井筒/巷道路线上移除地层；形成永久支护或基础；整合合同内结构、提升、装卸和通风接口；测试并移交。纯地表设施不虚构地下开挖。 |
| market_state | 在指定矿址安装、测试并验收的设施。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一项现场验收的功能性矿山土木设施。 |
| How much | 一项已验收设施；另报开挖体积、支护长度及结构数量。 |
| How well | 几何、结构支护及合同内搬运/通风接口通过签字测试。 |
| How long or cycle | 一份建设合同至移交；运营寿命是情景信息。 |
| reference_flow_link | `facility_integration` 的 `accepted_mining_structure`。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 项已验收矿山专用设施 |
| Reference product flow | 现场验收的采矿构筑物；UUID 未解析 |
| Reference flow property | 已验收设施计数；UUID 未解析 |
| Reference unit group | 件数；UUID 未解析 |
| Reference unit | facility |
| Required qualifiers | 设施类型和矿址；端点或占地；适用时开挖体积和井筒/巷道长度；支护类型；安装系统范围；合同接口；验收日期 |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `facility_count` | 参考产品 | 计数，UUID 未解析 | facility | 仅在签字移交后计数独立功能设施。 |
| `excavation_volume` | 移除地层 | 体积 | m3 | 使用测绘原状体积；换算弃土质量时记录密度和松胀。 |
| `length_and_area` | 井筒、巷道及地表工程 | 长度和面积 | m, m2 | 报告竣工支护长度和占地，不重复计为设施。 |
| `material_mass` | 永久投入和废物 | 质量 | kg | 用有记录的单位质量或密度换算件数和体积，并核对库存及退货。 |
| `site_energy` | 设备和测试 | 能量或燃料质量 | kWh, MJ or kg | 区分载能体，避免发电机燃料与电力重复计量。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 开工前测绘的矿址与地层状态，披露既有巷道、公用设施、排水、污染和拆除。 |
| starting_condition_role | 建设的物理基线，而非零负担的已完工设施。 |
| product_classification_scope | 一项已验收矿山专用土木设施及合同内系统；开采和运营在外。 |
| recursive_input_rule | 预制衬砌、塔架或装卸模块以供应商关口的组件进入，不得将完整设施隐藏为原料。 |
| upstream_dataset_requirement | 按实际关口关联材料、设备、能源、货运和废物处理数据集。 |
| disclosure | 设施类型、初始地层、路线、几何、开挖处置、组件来源、共用和临时工程、系统及验收。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_handover` | 整体设施 | 包括准备、适用时开挖、永久支护、整合与测试直至签字移交；排除开采和运营。 | `unsd-cpc3-53261`; `msha-shaft-sinking` |
| `removal_interface` | 地层移除 | 测绘源头状态；按去向区分弃土、回用和外运。`ground_removal` 将已备地层交给 `support_forming`；移除并非开采或处理。 | `msha-shaft-sinking`; `mass-balance-identity` |
| `forming_interface` | 支护和基础 | `support_forming` 接收已备地层并将稳定衬砌/基础交给 `facility_integration`；记录支护损耗和返工。 | `msha-shaft-sinking` |
| `assembly_interface` | 塔架、装卸、提升和通风 | 将支承、结构件和安装系统识别为不同组件角色；现场连接，制造在上游。 | `unsd-cpc3-53261`; `msha-hoist-braking` |
| `route_delta` | 地下与地表 | 井筒/巷道需移除和支护；纯地表设施需基础和组装，不虚构地下开挖。汇总前声明并存工程。 | `unsd-cpc3-53261`; `msha-shaft-sinking` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ground_removal` | 地层准备与移除 | required | 井筒/巷道路线开挖；纯地表路线准备已测绘基础占地，地下开挖为零。 | 独立移除地层，移交测绘后的开口或基底，按去向处理弃土。 | 原状体积和已验收地层准备。 |
| `support_forming` | 永久支护与基础成形 | required | 从已验收地层准备开始，至支护开口或基础关口。 | 从成形前地层形成衬砌、支护和基础；失败支护返工或外运。 | 已验收成形支护和安装材料。 |
| `facility_integration` | 结构、系统与移交 | required | 从已验收支护/基础开始，至设施签字验收结束。 | 安装土木和合同内搬运/通风部件，测试并处理拒收件。 | 一项已验收设施和计量组件。 |

### 过程：地层准备与移除（`ground_removal`）

#### 输入

##### 产品流

###### 地层移除能耗（`removal_energy`）

按载能体计量开挖、场内搬运和准备设备；纯地表工程记录实际准备能耗与零地下开挖。

- 选定流：按计量载能体区分的地层移除能源
- 流属性/单位：能量或燃料质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按已测绘地层移除或基底准备汇总机械日志和仪表。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定移除能耗筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kWh-equivalent/facility
  - 基准：按载能体和开挖路线的宽泛首轮筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收备好地层（`prepared_ground`）

在永久支护前移交已测绘开口或地表基础基底；它既非矿石产品，也非完工设施。

- 选定流：已验收的矿山设施备好地层
- 流属性/单位：已备包 / item
- 数量规则：每项设施记录一个几何核实后的地层准备包。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_excavation`
- 数量范围：地层移交计数
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：package/facility
  - 基准：每项已验收设施对应一个测绘后的地层准备包
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

##### 废物流

###### 开挖弃土（`excavation_spoil`）

按去向记录土和岩；现场回用仍在地层质量平衡内。纯地表路线记录实际清理物，可能为零。

- 选定流：按材料和去向区分的开挖弃土
- 流属性/单位：质量 / kg
- 数量规则：核对原状测绘及密度与回用、库存和外运地磅质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals`
- 数量范围：开挖弃土外运比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg excavated material
  - 基准：外运弃土除以扣除现场回用及库存的移除地层
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：永久支护与基础成形（`support_forming`）

#### 输入

##### 产品流

###### 接收已备地层（`prepared_ground_received`）

已验收并测绘的地层准备包是衬砌、支护或基础施工的成形前状态。

- 选定流：已验收的矿山设施备好地层
- 流属性/单位：已备包 / item
- 数量规则：将一个上游准备包及其测绘几何匹配到本成形节点。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_excavation`
- 数量范围：备好地层输入关联
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：package/facility
  - 基准：一个已验收地层包进入支护成形节点
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

###### 支护及基础材料（`support_materials`）

按竣工规格记录混凝土、钢材、锚杆、衬砌和稳定材料；纯地表工程用实际基础清单。

- 选定流：按规格区分的永久支护和基础产品
- 流属性/单位：质量 / kg
- 数量规则：逐种材料核对交付、安装、退回和库存质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定材料质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/facility
  - 基准：依设施而变的宽泛初始筛查，并非设计定额
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 成形能耗（`formation_energy`）

按载能体计量衬砌、基础成形、支护和临时通风；开挖能耗属于 `ground_removal`，并剔除已含于承包服务的燃料。

- 选定流：按计量载能体区分的建设能源
- 流属性/单位：能量或燃料质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按工作包汇总仪表、发票和机械日志。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定能耗筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kWh-equivalent/facility
  - 基准：记录载能体换算后的宽泛初始筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺及抑尘用水（`formation_water`）

包括钻进、混凝土和抑尘的外购或转移水；自然取水属基本流，不得重复。

- 选定流：按供应来源区分的工艺水
- 流属性/单位：质量 / kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- 数量规则：使用现场记录密度将计量体积换为质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 数量范围：暂定用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kg/facility
  - 基准：含体积到质量换算的宽泛初始筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收成形支护（`formed_support`）

只有通过节点验收的支护开口或基础进入整合；失败工程留在返工。

- 选定流：已验收有支护开口或已备基础
- 流属性/单位：已验收组件 / item
- 数量规则：每项设施记录一个带几何和测试的已验收中间包。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：中间移交计数
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：package/facility
  - 基准：每项已验收设施对应一个支护包
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

##### 废物流

###### 拒收支护（`formation_residuals`）

按材料和接收方记录失败衬砌、混凝土与支护；返工回本节点，开挖地层属于 `ground_removal`。

- 选定流：按材料和去向区分的拒收支护
- 流属性/单位：质量 / kg
- 数量规则：核对供应支护材料、安装质量、返工、退货、库存和外运拒收件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals`
- 数量范围：弃土和拒收比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg supplied support material
  - 基准：外运拒收质量除以扣除返工及库存的供应支护质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：结构、系统与移交（`facility_integration`）

#### 输入

##### 产品流

###### 接收已成形支护（`support_received`）

匹配上游已验收包及几何，不另行购买完整设施。

- 选定流：已验收有支护开口或已备基础
- 流属性/单位：已验收组件 / item
- 数量规则：将一个上游包与本合同匹配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：中间输入关联
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：package/facility
  - 基准：每项设施接收一个支护包
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

###### 结构和搬运组件（`integration_components`）

按合同列出塔架钢构、装卸结构、提升接口、输送机、风机和控制设备，披露不含的角色。

- 选定流：按竣工项区分的结构、提升、装卸和通风组件
- 流属性/单位：质量 / kg
- 数量规则：用供应商清单换算安装项并核对退货和拒收。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定组件质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/facility
  - 基准：依安装范围而变的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 入场组件货运（`component_freight`）

按方式记录实际装载质量和距离，避免重复计算供应商关口内货运。

- 选定流：按方式和路线区分的货运服务
- 流属性/单位：运输工作量 / t*km
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- 数量规则：按方式汇总装载吨数乘公里数。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_freight`
- 数量范围：暂定货运工作量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000000
  - 单位：t*km/facility
  - 基准：依路线而变的宽泛运输筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 安装与测试能耗（`integration_energy`）

按载能体计量提升、连接、安装、测试和临时通风；共用设备按实际使用仅分配一次。

- 选定流：按计量载能体区分的安装与测试能源
- 流属性/单位：能量或燃料质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：核对安装和调试的发票、仪表和日志。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定整合能耗筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kWh-equivalent/facility
  - 基准：安装与测试的宽泛首轮筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收采矿构筑物（`accepted_mining_structure`）

仅计通过永久结构及合同内系统测试的独立功能设施。

- 选定流：现场验收的采矿构筑物
- 流属性/单位：已验收设施计数 / facility
- 数量规则：记录一项已验收设施及其几何和设备范围。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：参考设施计数
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：facility/reference flow
  - 基准：按定义的一项已验收设施
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

##### 废物流

###### 安装拒收件（`integration_rejects`）

按材料和接收方记录损坏和切除组件；返工回到本节点，缺陷未解决前不计入验收。

- 选定流：按材料和去向区分的安装拒收件
- 流属性/单位：质量 / kg
- 数量规则：核对验收、返工、退回、回收及丢弃质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals`
- 数量范围：安装拒收比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg delivered components
  - 基准：外运拒收质量除以扣除退货及库存的交付组件质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `facility_scope` | 同合同多个设施 | 先直接归属；不可分共用设备、道路或公用设施按物理使用分配，份额和为一。 | `reference-definition` |
| `spoil_destination` | 移除地层 | 现场回用留在物料平衡；外运按接收方和处理记录。无证据不计替代抵免。 | `mass-balance-identity` |
| `rework_reject` | 失败支护和安装 | 返工保留在产生节点；最终退出只送一次回收或处置；拒收工程不计入验收输出。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | `support_forming`; `facility_integration` | 永久组件 | 交付和竣工清单 | 规格、收货、安装、退货、库存、拒收、再生来源 | 发票和签字清单 | kg, item, m3 | 每次交付 | 准备至移交 | 指定设施 | 逐种材料核对 | 单据与证书 |
| `cp_energy` | `ground_removal`; `support_forming`; `facility_integration` | 场地能源 | 仪表和机械日志 | 载能体、量、节点、日期、发电机输出、共用方 | 仪表、发票和日志 | kWh, MJ, kg, L | 每周 | 建设与测试 | 指定设施 | 按节点汇总去重 | 仪表与发票 |
| `cp_water` | `support_forming` | 工艺水 | 仪表与发票 | 来源、体积、密度、用途、回流 | 仪表和现场日志 | m3, kg | 每周 | 准备至支护关口 | 指定设施 | 换算并核对来源 | 读数与发票 |
| `cp_excavation` | `ground_removal`; `support_forming` | 地层与几何 | 测绘和施工日志 | 原状体积、支护长度、面积、土岩状态、密度 | 竣工测绘 | m3, m, m2, kg | 每个工作包 | 准备至支护关口 | 指定开口/基础 | 汇总不重复工程 | 图纸与测绘 |
| `cp_residuals` | `ground_removal`; `support_forming`; `facility_integration` | 弃土和拒收 | 废物与返工日志 | 材料、来源、质量、回用、返工、外运、接收方、库存 | 地磅与转移单 | kg | 每次移动 | 全建设期 | 指定设施 | 按来源去向平衡 | 票据与回执 |
| `cp_freight` | `facility_integration` | 入场组件 | 派送记录 | 吨数、距离、方式、供应商关口 | 运单与路线日志 | t, km, t*km | 每批运输 | 供应至安装 | 供应商至矿址 | 吨数乘距离 | 运单 |
| `cp_acceptance` | `support_forming`; `facility_integration` | 已验收状态 | 测绘和调试 | 类型、几何、组件、测试、缺陷、签字 | 签字测绘与测试 | facility, m, m2, m3 | 每个关口 | 支护至移交 | 指定设施 | 仅计已验收状态 | 证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `material_balance` | 每种永久产品 | 收货加期初库存＝安装加退货加期末库存加外运拒收，误差在声明容差内。 | 交付、安装、库存与废物 | kg/product and kg/facility | `mass-balance-identity` |
| `spoil_balance` | 开挖 | 密度换算后开挖质量＝回用加外运加库存变化。 | 测绘、密度、回用、地磅 | kg/facility and residual | `mass-balance-identity` |
| `freight_work` | 入场运输 | 按方式与供应商关口汇总装载吨数乘公里数。 | 运单与路线 | t*km/facility | `reference-definition` |
| `shared_attribution` | 共用设备 | 归属量＝共用计量量乘物理使用份额；份额和为一。 | 仪表与机械使用 | amount/facility | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_geometry` | 参考和地层工程 | 核对功能、矿址、几何、支护及安装范围。 | 竣工图与签字测试 |
| `dq_materials` | 主要产品 | 核对混凝土、钢材、衬砌和设备的交付、安装、拒收及退货。 | 清单、测绘与废物日志 |
| `dq_temporal` | 整体合同 | 披露建设日期、供应商数据年代和缺失时段。 | 计划与发票 |
| `dq_routes` | 路线选择 | 证明地下开挖或纯地表基础，以及零清单类别。 | 合同与测绘 |
| `dq_identity` | 最终交换 | 发布前按平台类型、关口、属性、单位和用途核实具体 UUID。 | 流及支持行审查 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_gate` | 参考输出 | 要求结构和合同内搬运、提升或通风接口签字验收；拒绝未完工程。 | `unsd-cpc3-53261`; `msha-hoist-braking` |
| `v_boundary` | 建设与运营 | 排除矿物开采、选矿、日常通风及运输运营。 | `unsd-cpc3-53261` |
| `v_route` | 地下或地表 | 井筒/巷道需测绘移除和支护；纯地表设施需基础和组装，不虚构开挖。 | `msha-shaft-sinking`; `unsd-cpc3-53261` |
| `v_balance` | 材料与弃土 | 检查交付、开挖、安装、回用、退货、库存及外运平衡。 | `mass-balance-identity` |
| `v_rework` | 失败工程 | 将每项拒收关联至产生节点返工或唯一回收/处置退出。 | `mass-balance-identity` |
| `v_identity` | UUID | 起重机组件或采矿运营流不能代表已验收设施；详情核实前 UUID 留空。 | `reference-definition` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 一项现场验收矿山专用设施的建设阶段数据包。 |
| downstream_use | 完成身份审查后作为基础设施过程/生命周期模型的 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 功能、几何、支护、安装系统和移交关口一致的建设比较。 |
| excluded_use | 矿物开采或运营、非矿山隧道、缺少运营和退役的全寿命声明。 |
| required_metadata | 场址/功能、初始地层、路线、几何、材料、安装系统、日期及验收。 |
| required_quality_disclosure | UUID 缺口、暂定范围、供应商关口、弃土平衡、水/能源、拒收和共用分配。 |
| update_trigger | 设计、竣工量、安装范围、供应商或经核实流身份变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-53261` | official_guidance | UNSD，CPC 3.0 解释说明，53261 小类，https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | 采矿专用构筑物范围。 |
| `msha-shaft-sinking` | official_guidance | MSHA，斜井和竖井开凿计划合规指南，https://arlweb.msha.gov/REGS/complian/guides/slope%20and%20shaft%20sinking%20compliance%20guide.pdf | 地层、井筒和通风路线问题；法域细节非通用阈值。 |
| `msha-hoist-braking` | official_guidance | MSHA，矿井提升机紧急制动系统，https://arlweb.msha.gov/s%26hinfo/paper6.htm | 提升整合和测试；不设通用性能值。 |
| `mass-balance-identity` | method_factor | 建设材料、弃土和拒收件的质量守恒核对。 | 材料和残余平衡。 |
| `reference-definition` | method_factor | 本 PCR 的已验收设施定义和算术归一化。 | 计数、中间关联、货运及共用分配。 |
