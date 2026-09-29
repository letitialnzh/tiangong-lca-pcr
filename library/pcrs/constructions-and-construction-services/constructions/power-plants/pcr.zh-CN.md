---
pcr_id: pcr.constructions-and-construction-services.constructions.power-plants
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 发电厂设施

## 1. 适用范围

本 PCR 覆盖一座已建造、安装、测试并验收的发电厂实体资产。包括可归属的场地工程、基础、发电设备、辅助系统、电气集成和交付前调试。燃煤、水电、核电、风电等技术须依工程证据申报设备单元，而非套用统一材料配方。不包括交付后的发电运行、燃料开采、独立交付的输电网络、单独出售的设备及无关构筑物。[unsd-cpc3-notes; doe-commissioning]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.power-plants |
| classification_refs | CPC 3.0 53262；映射接受与此分开。 |
| covered_products | 一份合同边界内，包含土建、发电和辅助系统的已验收电厂。 |
| excluded_products | 电力产出及常规运营；单独承包的输电工程；单独出售的设备；独立的燃料供应设施。 |
| representative_product | 一座声明技术、额定容量和设备清单的已验收发电厂。 |
| production_route | 场地清除与准备；基础及土建成型；设备与电气集成；调试测试、缺陷关闭和签字移交。 |
| market_state | 已安装并验收的资本资产，而非送入电网的电量。 |

父活动 `integrate_accept` 随发电技术改变拓扑：火电可有燃料处理及蒸汽循环单元，水电可有水工与水轮机，风电可有风机阵列，核电可有适用安全系统。这些都是条件性而非普适单元。混合项目仅在共用工程与各路线单元明确分摊时合并。按竣工记录收集实际技术、净/毛容量、单元清单、电网接口和测试准则。[unsd-cpc3-notes; doe-commissioning]

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已建成并验收的发电厂。 |
| How much | 一座已验收电厂；额定容量以 MW 另行报告。 |
| How well | 土建、机械、电气和控制系统满足合同交付前验收测试。 |
| How long or cycle | 从开工到签字验收的一个建设项目；设计寿命为元数据，不含边界内运营。 |
| reference_flow_link | `integrate_accept` 的 `accepted_plant` 输出。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 座已验收电厂 |
| Reference product flow | 已验收发电厂；UUID 未解析 |
| Reference flow property | Count；UUID 未解析 |
| Reference unit group | Count；UUID 未解析 |
| Reference unit | plant |
| Required qualifiers | 场址；技术；额定容量及 MW 基准；单元清单；合同边界；测试方案；验收日期；混合路线分摊 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `plant_count` | 参考产品 | Count，UUID 未解析 | plant | 以签字验收的一座合同电厂计数，不按单台机组或 MWh 计数。 |
| `capacity_label` | 电厂限定 | 额定电功率 | MW | 声明净/毛基准、测试配置及机组数量。 |
| `earth_state` | 场地清除 | 体积及堆积密度 | m3; kg/m3 | 转换前区分原位开挖、运输弃土及压实回填。 |
| `energy_carrier` | 建设与测试 | 能源品种对应能量或质量 | kWh; MJ; kg | 区分购入电力、现场燃料与测试发电，防止重复计算。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 合同工程开始前已测绘的场地、地质状态及既有电网或公用设施接口。 |
| starting_condition_role | 物理基线，不是零负担的成品电厂。 |
| product_classification_scope | 一座已验收电厂，仅含可归属的场内和合同工程。 |
| recursive_input_rule | 采购的同类已完成电厂模块按供应商交付点及上游数据集入账，不作为免费的原始组件。 |
| upstream_dataset_requirement | 技术匹配的材料、设备、能源、运输及废物处理数据集。 |
| disclosure | 技术、容量基准、合同边界、单元清单、共用工程、地基开挖、安装质量、测试、不合格品、返工及身份缺口。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_gate` | 整座电厂 | 纳入建设、安装、交付前调试及签字验收所需缺陷关闭；排除交付后常规发电。 | `doe-commissioning` |
| `asset_limit` | 电厂接口 | 纳入合同内可直接归属的辅助系统和电网连接；独立验收的输电基础设施在边界外。 | `unsd-cpc3-notes` |
| `removal_handoff` | `prepare_site` | 分别识别来源土石、已准备场地、场内回用及场外弃土；清除与土建成型是独立活动。 | `unsd-cpc3-notes` |
| `forming_handoff` | `form_civil` | 将指定材料和已验收开挖面转为经检查的基础；返修和不合格部位归本节点。 | `doe-commissioning` |
| `integration_handoff` | `integrate_accept` | 记录采购的发电设备、辅助系统和安装服务；仅交付通过测试的已验收电厂。 | `doe-commissioning` |
| `test_export_limit` | `integrate_accept` | 若交付前测试电力离开电厂，则将计量外送作为独立条件性输出；交付后发电在边界外。 | `doe-commissioning` |
| `technology_delta` | `integrate_accept` | 从竣工记录确定实际技术特有单元和测试，不照搬通用强度。 | `doe-commissioning` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_site` | 场地清除与准备 | required | 已测绘场地至已验收准备面。 | 从明确来源清除材料，区分回用和弃土。 | 测绘开挖量及面积。 |
| `form_civil` | 土建成型与基础验收 | required | 已准备面至经检查的基础与结构。 | 按设计成型，不合格部分返修或淘汰。 | 竣工体积、质量和几何。 |
| `integrate_accept` | 设备集成与电厂验收 | required | 经检查土建至签字移交。 | 集成发电设备、辅助系统和电气；测试并消除缺陷。 | 一座已验收电厂及额定 MW。 |

### 过程：场地清除与准备（`prepare_site`）

#### 输入

##### 产品流

###### 外包土方工程（`earthwork_service`）

仅用于单独采购的开挖或准备服务；其机具燃料不得再计入业主自营能源。

- 选定流：按实际范围的土方及开挖建设服务
- 流属性/单位：合同服务量 / 声明单位
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- 数量规则：发票量与测绘量核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site`
- 数量范围：外包开挖份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of surveyed excavation
  - 基准：contracted excavation divided by total surveyed excavation
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

###### 场地能源（`site_energy`）

业主自营开挖和场地准备所购电力或燃料，排除已含于外包服务的能源。

- 选定流：按实际品种的建设能源
- 流属性/单位：能源品种对应能量或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：逐品种计量并归属到有记录的任务。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site`
- 数量范围：已归属场地能源份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of metered site energy
  - 基准：assigned energy divided by metered site energy
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收准备面（`prepared_footprint`）

经测绘、可用于基础施工的场地；是内部交接，不是另售电厂。

- 选定流：已验收电厂准备面
- 流属性/单位：Area / m2
- 数量规则：合计不重叠的已验收基础面积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_site`
- 数量范围：准备面验收份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of specified area
  - 基准：accepted area divided by specified footprint
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

##### 废物流

###### 外运弃土（`exported_spoil`）

离开项目边界的挖出土石；区分场内回用和库存变动。

- 选定流：按类型和去向的外运开挖材料
- 流属性/单位：Mass / kg
- 数量规则：按材料核对开挖、回用、库存和外运。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_site`
- 数量范围：外运份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of removed mass
  - 基准：exported mass divided by removed mass
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

##### 基本流

### 过程：土建成型与基础验收（`form_civil`）

#### 输入

##### 产品流

###### 接收已准备面（`received_footprint`）

内部接收已验收场地，不重复购买相同场地工程。

- 选定流：已验收电厂准备面
- 流属性/单位：Area / m2
- 数量规则：与上游已验收面积一致。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_site`
- 数量范围：内部面积交接一致
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：received/handed-off area
  - 基准：received area divided by upstream accepted area
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

###### 土建材料（`civil_materials`）

按等级记录混凝土、钢筋、结构钢及指定基础材料。

- 选定流：按实际规格的土建材料
- 流属性/单位：Mass / kg
- 数量规则：核对交付、验收安装、库存、退货与拒收。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_civil`
- 数量范围：验收安装份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of delivered mass
  - 基准：accepted mass divided by delivered mass by material
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收土建工程（`accepted_civil`）

经检查的基础、结构和设备基座交付集成。

- 选定流：已验收电厂土建基础及结构
- 流属性/单位：Installed material mass / kg
- 数量规则：按结构合计已验收安装质量，另保留几何。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_civil`
- 数量范围：土建验收份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of placed material mass
  - 基准：accepted mass divided by placed mass
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

##### 废物流

###### 土建不合格品（`civil_rejects`）

离开成型节点的不合格材料；在本节点返修的材料不重复计量。

- 选定流：按组成和回收去向的土建不合格材料
- 流属性/单位：Mass / kg
- 数量规则：按去向记录扣除本节点返工后的净不合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_civil`
- 数量范围：土建不合格份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of placed mass
  - 基准：rejected mass divided by placed mass by material
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

##### 基本流

### 过程：设备集成与电厂验收（`integrate_accept`）

#### 输入

##### 产品流

###### 接收土建工程（`received_civil`）

从 `form_civil` 接收已验收基础和结构。

- 选定流：已验收电厂土建基础及结构
- 流属性/单位：Installed material mass / kg
- 数量规则：与前一节点已验收土建质量一致。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_civil`
- 数量范围：内部土建交接一致
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：received/handed-off mass
  - 基准：received mass divided by upstream accepted civil mass
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

###### 发电及辅助设备（`plant_equipment`）

按采购和竣工身份记录发电单元、电气设备、控制装置及技术特有辅助组件。

- 选定流：按组件与技术的发电及辅助设备
- 流属性/单位：Mass / kg
- 数量规则：核对采购、安装、备件、退货和拒收组件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equipment`
- 数量范围：设备安装份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of delivered equipment mass
  - 基准：accepted installed mass divided by delivered mass by component
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

###### 调试能源（`commissioning_energy`）

交付前测试和缺陷整改所购能源；测试发电另行报告。

- 选定流：按实际品种的调试能源
- 流属性/单位：Carrier-specific energy or mass / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按测试和能源品种计量，排除常规运行。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tests`
- 数量范围：已归属调试能源份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of metered pre-handover energy
  - 基准：assigned test energy divided by metered pre-handover energy
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收发电厂（`accepted_plant`）

经测试并签字接收的一座发电资产，不是发电电量。

- 选定流：按技术和额定容量的已验收发电厂
- 流属性/单位：Count / plant
- 数量规则：仅当必要测试和缺陷关闭达到验收门槛时计一座。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_tests`
- 数量范围：已验收电厂数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：plant
  - 基准：signed accepted plant count for this reference project
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

###### 外送调试测试电力（`commissioning_test_electricity`）

仅当交付前测试产生的计量电力离开电厂边界时记录的条件性副产出。测试自用为内部流；交付后的常规发电排除。

- 选定流：按实际电力规格的交付前测试外送电力
- 流属性/单位：Electrical energy / kWh
- 数量规则：按有日期的交付前测试计量外送 kWh，核对发电、自用及外送。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tests`
- 数量范围：测试电力外送份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of pre-handover generated electricity
  - 基准：exported kWh divided by metered pre-handover generated kWh
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

##### 废物流

###### 集成不合格组件（`integration_rejects`）

离开集成节点的失效组件；返修件在 `integrate_accept` 内循环，直至验收或按记录进入回收路线。

- 选定流：按材料和去向的不合格电厂组件
- 流属性/单位：Mass / kg
- 数量规则：返工后按组件和去向记录净不合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收电厂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equipment`
- 数量范围：不合格设备份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of delivered equipment mass
  - 基准：rejected mass divided by delivered mass by component
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`material-balance-identity`

##### 基本流

## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `shared_works` | 多机组或混合路线 | 按实测的机组专属数量分配共用土建、公用设施和调试负担；无法分开时，披露一致的工程驱动分配。 | `doe-commissioning` |
| `test_electricity` | 调试 | 交付前测试外送电力为附带副产出。全部建设和测试负担仍归已验收电厂，不给予替代电网信用，并披露外送 kWh；测试自用为内部流，交付后发电排除。 | `doe-commissioning` |
| `reject_rework` | 成型与集成 | 返修负担留在产生节点；验收产出排除拒收件。申报回收、退货或处置去向并避免重复采购。 | `doe-commissioning` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site` | `prepare_site` | 清除、服务、能源、准备面、弃土 | 测绘和场地日志 | 开挖体积；材料；密度；回用；外运；发票；能源；验收面积 | 测绘、过磅、计量和发票 | m3; kg; kWh; MJ; m2 | 每批及月度计量 | 完整场地准备期 | 项目场址 | 核对开挖、回用、库存和外运；合计不重叠面积 | 签字测绘、票据、发票、表计 |
| `cp_civil` | `form_civil` | 土建材料、工程、拒收 | 材料和检查登记 | 等级；交付、安装、退货及拒收质量；结构；检查 | 采购及竣工量表 | kg; m3 | 每次交付和验收批 | 完整土建期 | 项目场址 | 按等级和结构平衡 | 收据、图纸、检查记录 |
| `cp_equipment` | `integrate_accept` | 设备和拒收 | 设备登记 | 单元；技术；型号；质量；交付、安装、备件、退货、拒收和去向 | 采购及安装记录 | kg; count | 每组件批 | 完整安装期 | 项目场址 | 按组件平衡 | 供应商记录、安装日志、拒收单 |
| `cp_tests` | `integrate_accept` | 测试能源、外送测试电力和已验收电厂 | 测试移交包 | 能源；测试用能；测试发电 kWh；测试自用 kWh；测试外送 kWh；额定 MW；通过/不通过；缺陷；验收日期 | 校准表计及签字移交 | kWh; MJ; MW; plant | 每次测试及最终验收 | 至交付 | 已验收电厂 | 按测试核对发电、自用和外送；签字验收时计数 | 读数、证书、签字移交 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cut_balance` | `prepare_site` | 移除质量 = 回用 + 外运 + 库存变动 + 有记录损失；调查差额。 | 测绘、密度、票据 | 按材料和去向的 kg |  |
| `civil_balance` | `form_civil` | 交付 = 验收安装 + 拒收 + 退货 + 库存变动，按材料。 | 收据和检查 | 验收及拒收 kg |  |
| `equipment_balance` | `integrate_accept` | 交付 = 验收安装 + 备件 + 退货 + 拒收 + 库存变动，按组件。 | 设备登记 | 按状态的 kg |  |
| `plant_acceptance` | 参考产品 | 仅当必要测试及缺陷关闭通过且签字移交时，验收数为 1。 | 测试、缺陷清单、移交 | 电厂数量 | `doe-commissioning` |
| `test_electricity_balance` | `integrate_accept` | 交付前测试发电 kWh = 测试内部自用 + 外送 kWh + 有记录的损失或库存变动；外送为独立附带产出。 | 带日期的测试表计 | 外送 kWh | `material-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route` | 整座电厂 | 记录技术、净/毛容量基准、单元清单及合同界限，不用通用配方替代。 | 设计基准及竣工单元清单 |
| `dq_completeness` | 全部节点 | 核对工程数量、共用工程、路线特有设备及不合格材料。 | 测绘、台账和核对表 |
| `dq_gate` | 验收 | 区分测试与运营，保留签字移交证据。 | 调试包及验收签字 |
| `dq_identity` | 全部交换 | 最终交换须解析兼容的流、属性及单位 UUID；披露候选阶段缺口。 | 平台详情和采集单位 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | 已验收电厂 | 验收数量非一或缺失验收、技术或容量限定时拒绝。 | `doe-commissioning` |
| `v_handoffs` | 过程链 | 内部交接的准备面积和验收土建质量须一致。 |  |
| `v_balances` | 材料 | 弃土、土建及设备平衡不得为负或重复。 |  |
| `v_route` | 技术差异 | 按竣工资料核对单元清单、MW 基准和测试；混合路线共用工程只分配一次。 | `doe-commissioning` |
| `v_rejects` | 返工 | 拒收件不得计作验收；返修连回产生节点，离开边界的物料有去向。 | `doe-commissioning` |
| `v_energy` | 调试 | 核对购入能源、交付前测试发电、自用和计量外送；仅对外送建立条件性输出，排除交付后常规发电。 | `doe-commissioning` |

## 10. 已发布数据集简介

| Field | Value |
| --- | --- |
| dataset_role | 一座已验收发电厂的前景建设数据包。 |
| downstream_use | `secondary_dataset`；技术、地理和容量限定兼容时可为 `background_dataset`。 |
| allowed_use | 在披露路线、容量、分配及移交门槛下建模电厂建设负担。 |
| excluded_use | 未经其他方法不得建模发电量、运营排放、全寿命产出、输电或与技术无关的每 MW 强度。 |
| required_metadata | 场址、技术、净/毛 MW 基准、单元清单、合同边界、建设期、测试、移交日、设计寿命和 UUID 缺口。 |
| required_quality_disclosure | 一手数据覆盖、测绘、采购平衡、测试、共用分配、返工及匹配的上游数据集。 |
| update_trigger | 技术、单元清单、边界、主要材料量、容量、测试门槛、UUID 证据或指南变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-notes` | official_guidance | [联合国 CPC 3.0 解释性说明](https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf) | 类别和相邻资产边界。 |
| `doe-commissioning` | official_guidance | [美国能源部 G 413.3-23 核设施调试指南](https://www.energy.gov/documents/nuclear-facilities-commissioning) | 建设到测试移交、验收、缺陷及交付；仅作为调试方法证据，并不声称所有电厂都是核电厂。 |
| `material-balance-identity` | method_factor | 将材料守恒及比例恒等式用于实测项目记录。 | 材料、交接和设备 QA 校验范围。 |
