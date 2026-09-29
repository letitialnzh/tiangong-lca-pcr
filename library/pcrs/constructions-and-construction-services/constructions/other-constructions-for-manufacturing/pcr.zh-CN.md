---
pcr_id: pcr.constructions-and-construction-services.constructions.other-constructions-for-manufacturing
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 专用制造设施构筑物

## 1. 范围与适用性

本 PCR 覆盖一座按特定产品或工艺建设、安装、测试并验收的制造设施实体。必须声明工艺类别、已装单元清单与合同范围。计入可归属的场地准备、基础、工艺结构、集成设备、公用工程、控制系统、冷态测试和交付前缺陷修复。实例包括专用化工或制药设施、焦炉、高炉和铸造设施。排除普通工业建筑、单独出售的机械、交付后的制造运营、制成品、运营排放和上游原料生产。这一多样化类别没有通用的材料配方。 [unsd-cpc3; doe-commissioning]

## 2. 产品类别身份

| 字段 | 内容 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.other-constructions-for-manufacturing |
| 分类边界_refs | CPC 3.0 53269；映射接受由独立流程管理。 |
| covered_products | 集成路线专用结构与设备的已建成产品专用制造设施。 |
| excluded_products | 普通工业建筑；单独销售的设备；制造产品；运营；独立交付的基础设施。 |
| representative_product | 一座已验收且声明工艺类别、产能和安装单元的专用制造设施。 |
| production_route | 场地清除/准备；基础与工艺结构成形；设备/公用工程/控制系统集成；测试、整改与交付。 |
| market_state | 已安装并验收的资本资产，不是制造服务或商品产出。 |

上位活动是设施建造与集成。化工、冶金、制药等配置均是条件性路线分支。应依据设计和竣工证据记录单元清单、围护、公用工程、控制及验收测试要求的差异。共用工程可服务多个单元，但只能计量一次。化学反应不属于建造步骤。危险化学品开车前安全审查仅在工艺及法规要求时适用。 [unsd-cpc3; osha-psm]

## 3. 参考流

| 字段 | 内容 |
| --- | --- |
| What | 已建成并验收的产品专用制造设施。 |
| How much | 一座已验收设施；设计产能是限定信息，不是参考数量。 |
| How well | 安装单元与接口通过合同规定的交付前测试且缺陷已关闭。 |
| How long or cycle | 一个建造项目至签署验收；运营寿命仅作元数据。 |
| reference_flow_link | `integrate_accept` 的 `accepted_facility` 产出。 |

| 字段 | 内容 |
| --- | --- |
| Reference amount | 1 座已验收设施 |
| Reference product flow | 已验收专用制造设施；UUID 未解析 |
| Reference flow property | 计数；UUID 未解析 |
| Reference unit group | 计数；UUID 未解析 |
| Reference unit | facility |
| Required qualifiers | 场址；工艺/产品类别；设计产能及单位；已装单元清单；合同范围；验收标准/日期；共用工程归属 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 所需属性 | 所需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `facility_count` | 参考产品 | 计数；UUID 未解析 | facility | 按合同仅计一座签署验收的设施，不逐工艺单元计数。 |
| `capacity_basis` | 设施限定 | 设计产能 | 声明的质量或件数/时间单位 | 声明额定基准、产品类别和受测配置；不得换算为运营产量。 |
| `earth_mass` | 场地清除 | 体积、堆积密度、质量 | m3; kg/m3; kg | 区分原位开挖、再用回填、库存和外运弃土。 |
| `energy_carriers` | 建造与测试 | 品种对应的能量或质量 | kWh; MJ; kg | 计量验收前实际能源品种；排除常规生产能源。 |

## 5. 系统边界

### 边界抽象

| 字段 | 内容 |
| --- | --- |
| declared_starting_condition | 测绘后的场址、地基状况及有记录的项目前服务接口。 |
| starting_condition_role | 物理起点，不是无负担的已完成设施。 |
| product_分类边界_scope | 声明的建造合同范围内一座已验收专用制造设施。 |
| recursive_input_rule | 采购的同类别完整设施模块在供应商交接点连同上游数据集进入，不得视为无负担原件。 |
| upstream_dataset_requirement | 与规格匹配的材料、设备、能源、运输和废物处理数据集。 |
| disclosure | 工艺类别；单元清单；产能；范围；清除量；安装量；测试；共用工程；返工/拒收；UUID 缺口。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `asset_gate` | 整座设施 | 计入可归属的建造、集成、交付前测试与缺陷关闭直至签署验收；排除后续常规生产。 | `doe-commissioning` |
| `specialized_limit` | 分类边界 | 必须有针对产品/工艺安装的专用工程，不得仅有通用工业外壳；排除仅设备销售。 | `unsd-cpc3` |
| `removal_handoff` | `prepare_site` | 辨明清除来源、移除状态、已验收地块、场内再用和场外弃土；清除与成形独立。 |  |
| `forming_handoff` | `form_structures` | 将指定材料和已验收地块转为已检验的基础/工艺结构；区分修复与拒收。 |  |
| `integration_handoff` | `integrate_accept` | 集成路线专用设备、公用工程和控制系统；仅交付测试合格的设施。 | `doe-commissioning` |
| `route_delta` | 工艺类别 | 依据设计确定实际单元、围护、公用工程、控制及测试；未经限定不得套用通用强度。 | `unsd-cpc3` |
| `hazard_gate` | 适用的危险化学品路线 | 适用 PSM 时，在引入高危化学品前保存开车前审查证据；该要求并非普遍适用，也非交付后的生产。 | `osha-psm` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 作用 | 定量依据 |
| --- | --- | --- | --- | --- | --- |
| `prepare_site` | 场地清除与准备 | 必需 | 从测绘基线到已验收地块。 | 移除已辨明的场地材料，区分再用和弃土。 | 测绘及已验收面积。 |
| `form_structures` | 基础与工艺结构成形 | 必需 | 从已验收地块到已检验结构。 | 形成路线专用几何形态；修复或拒收不合格工程。 | 竣工工程量与检验。 |
| `integrate_accept` | 设备集成与设施验收 | 必需 | 从已检验结构到签署交付。 | 连接实际设备、公用工程和控制系统；测试并关闭缺陷。 | 安装台账、测试和一座设施。 |

### 过程：场地清除与准备（`prepare_site`）

#### 输入

##### 产品流

###### 场地准备能源（`site_energy`）

按实际能源品种记录业主自营开挖和准备的能源；排除已包含在分包服务内的能源。

- 选定流：按实际品种的场地能源
- 流属性/单位： 品种对应的能量或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则： 将计量与燃料记录归属到场地任务。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_site`
- 数量范围： 场地能源归属份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of metered site energy
  - 基准： assigned energy divided by metered site energy
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `balance-identity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的准备地块（`prepared_footprint`）

已测绘且可施工基础的地块；属于内部交接，不是第二座可销售设施。

- 选定流：已验收的专用制造设施准备地块
- 流属性/单位： Area / m2
- 数量规则： 合计不重叠的已验收面积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议： `cp_site`
- 数量范围： 地块验收份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of specified area
  - 基准： accepted area divided by specified foundation footprint
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `balance-identity`

##### 废物流

###### 外运开挖弃土（`exported_spoil`）

按材料与去向记录离开项目的土石方；排除场内再用。

- 选定流：按类型和去向的外运开挖材料
- 流属性/单位： Mass / kg
- 数量规则： 将开挖量与再用、库存和外运量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议： `cp_site`
- 数量范围： 清除物外运份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of removed mass
  - 基准： exported mass divided by removed mass by material
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `balance-identity`

##### 基本流

### 过程：基础与工艺结构成形（`form_structures`）

#### 输入

##### 产品流

###### 接收的准备地块（`received_footprint`）

已验收地块面积只交接一次，不重复采购场地准备。

- 选定流：已验收的专用制造设施准备地块
- 流属性/单位： Area / m2
- 数量规则： 匹配前一节点的已验收面积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议： `cp_site`
- 数量范围： 内部地块交接匹配
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： received/handed-off area
  - 基准： received area divided by upstream accepted area
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `balance-identity`

###### 结构成形材料（`structure_materials`）

混凝土、钢筋、钢材、耐火及衬里材料仅按实际路线与结构设计记录。

- 选定流：按等级和功能的基础或工艺结构材料
- 流属性/单位： Mass / kg
- 数量规则： 按等级平衡交货、合格安装、库存、退货及拒收量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_structures`
- 数量范围： 合格结构材料份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of delivered mass
  - 基准： accepted installed mass divided by delivered mass by grade
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `balance-identity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收工艺结构（`accepted_structures`）

已检验的基础、支承和路线专用结构交付安装。

- 选定流：已验收的专用制造设施基础和工艺结构
- 流属性/单位： Installed material mass / kg
- 数量规则： 按结构和等级合计合格安装质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议： `cp_structures`
- 数量范围： 结构验收份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of placed mass
  - 基准： accepted mass divided by placed mass by grade
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `balance-identity`

##### 废物流

###### 不合格结构材料（`structure_rejects`）

成形节点外出的失效或不合格材料；同节点修复属于回路，不是第二份合格产出。

- 选定流：按组成和回收去向的不合格结构材料
- 流属性/单位： Mass / kg
- 数量规则： 计量同节点修复后的净拒收外出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_structures`
- 数量范围： 结构拒收份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of placed mass
  - 基准： rejected mass divided by placed mass by grade
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `balance-identity`

##### 基本流
### 过程：设备集成与设施验收（`integrate_accept`）

#### 输入

##### 产品流

###### 接收的工艺结构（`received_structures`）

已检验结构作为内部交接只传递一次。

- 选定流：已验收的专用制造设施基础和工艺结构
- 流属性/单位： Installed material mass / kg
- 数量规则： 匹配 `form_structures` 的合格结构质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议： `cp_structures`
- 数量范围： 内部结构交接匹配
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： received/handed-off mass
  - 基准： received mass divided by upstream accepted structure mass
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `balance-identity`

###### 路线专用工艺设备（`process_equipment`）

仅在整体设施合同包括时，记录采购的炉体、容器、生产机械、围护和搬运单元。

- 选定流：按实际单元和规格的制造工艺设备
- 流属性/单位： Mass / kg
- 数量规则： 核对采购、安装、备件、退货和拒收部件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_equipment`
- 数量范围： 设备安装份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of procured mass
  - 基准： accepted installed mass divided by procured mass by unit
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `balance-identity`

###### 集成公用工程与控制系统（`utility_controls`）

按实际设计记录管线、电气、控制、通风等设施配套系统；不得与 `process_equipment` 重复。

- 选定流：按实际系统的已装公用工程及控制部件
- 流属性/单位： Mass / kg
- 数量规则： 按系统及采购台账核对安装质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_equipment`
- 数量范围： 公用工程/控制系统安装份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of procured mass
  - 基准： installed mass divided by procured mass by system
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `balance-identity`

###### 外包安装与连接服务（`installation_service`）

独立采购时，按实际工作包记录机械吊装、管道、电气安装和控制系统接线；业主自营工作则由直接投入表示。

- 选定流：按实际工作包的专用设施安装服务
- 流属性/单位：合同服务工时 / h
- 数量规则：将已验收工作包工时与发票和竣工范围核对，不套用通用人工强度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equipment`
- 数量范围：已验收安装服务份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of invoiced service hours
  - 基准：accepted hours divided by invoiced hours by work package
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`balance-identity`

###### 调试能源（`commissioning_energy`）

按实际品种记录冷态测试和交付前检查的采购能源，不计后续生产。

- 选定流：按实际品种的调试能源
- 流属性/单位： 品种对应的能量或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则： 核对截至交付的有日期测试计量与发票。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_tests`
- 数量范围： 交付前测试能源份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of total metered project energy
  - 基准： commissioning energy divided by total metered project energy
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `balance-identity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收专用制造设施（`accepted_facility`）

仅计入测试合格、缺陷关闭并签署交接的设施；制成品不属于本卡。

- 选定流： Accepted specialized manufacturing facility for declared 工艺类别
- 流属性/单位： Count / facility
- 数量规则： 仅在全部合同验收条件通过后设为一。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议： `cp_tests`
- 数量范围： 设施验收数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： facility
  - 基准： per signed-off facility
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `balance-identity`

##### 废物流

###### 不合格安装材料（`installation_rejects`）

记录修复尝试后退出集成过程的不合格或损坏部件，并辨明回收、退货或处置去向。

- 选定流：按组成和去向的不合格设施部件
- 流属性/单位： Mass / kg
- 数量规则： 按材料与路线记录同节点返工后的净外出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收设施
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_equipment`
- 数量范围： 集成拒收份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of delivered component mass
  - 基准： rejected exit mass divided by delivered component mass
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `balance-identity`

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `shared_work` | 多个单元或产品类别 | 按测量工程量或有记录的工程驱动因素归属场地、土建、公用工程和测试负担；共用工程只计一次。 |  |
| `test_output` | 交付前测试 | 若测试产生可销售材料，单独计量并披露数量与去向；不得贷记常规生产或暗中转移建造负担。 | `doe-commissioning` |
| `reject_route` | 成形与集成 | 返工投入留在产出节点；已验收设施不含拒收物。按去向记录回收、退货或丢弃的外出流。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site` | `prepare_site` | 清除、能源、地块、弃土 | 测绘和现场日志 | 开挖量；密度；材料；再用；库存；外运；验收面积；燃料；电力 | 测绘、运单、计量表 | m3; kg; m2; kWh; MJ | 每批及每月计量 | 整个场地准备期 | 项目场址 | 平衡开挖、再用、库存、外运和验收面积 | 签署测绘、运单和读数 |
| `cp_structures` | `form_structures` | 材料、合格工程、拒收物 | 材料与检验台账 | 等级；交货；安放；合格质量；返工；退货；拒收；去向 | 收货单、竣工工程量、检验 | kg; m3 | 每次交货/批次 | 整个土建期 | 项目场址 | 按等级与结构平衡 | 收货单、图纸、检验记录 |
| `cp_equipment` | `integrate_accept` | 设备、公用工程、安装服务、拒收物 | 采购与安装台账 | 单元/系统；规格；交货；安装；备件；退货；拒收；去向；工作包发票工时与验收工时 | 供应商和现场记录 | kg; count; h | 每部件/系统/工作包 | 整个安装期间 | 合同单元 | 按实际单元无重叠平衡；核对验收服务工时 | 供应商记录、发票、签署验收、拒收单 |
| `cp_tests` | `integrate_accept` | 测试能源、验收 | 调试与移交包 | 工艺类别；设计产能；单元清单；能源品种；测试；缺陷关闭；适用时安全审查；日期 | 计量表、证书、签署移交 | kWh; MJ; kg; facility | 每次测试/最终验收 | 截至交付 | 已验收设施 | 汇总测试能源；缺陷关闭后计一座设施 | 读数、证书、条件性安全审查、签名 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `site_balance` | `prepare_site` | 按材料：移除质量 = 再用 + 外运 + 库存变化 + 有记录损失。 | 测绘、密度、运单 | kg，按去向 | `balance-identity` |
| `structure_balance` | `form_structures` | 按等级：交货 = 合格安装 + 拒收 + 退货 + 库存变化；返工不算新增交货。 | 收货单、检验 | kg，按状态 | `balance-identity` |
| `equipment_balance` | `integrate_accept` | 按部件：交货 = 合格安装 + 备件 + 拒收 + 退货 + 库存变化。 | 采购和安装记录 | kg，按状态 | `balance-identity` |
| `acceptance_count` | 参考产品 | 仅当测试、缺陷关闭和适用的安全审查有记录且交接已签署时，计数 = 1。 | 测试与移交包 | 设施数量 | `doe-commissioning`; `osha-psm` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_route` | 设施 | 声明产品/工艺类别、已装单元、设计产能与合同范围；不得采用通用配方。 | 设计与竣工台账 |
| `dq_balance` | 所有节点 | 核对材料、能源、交接、共用工程及拒收去向。 | 台账与平衡表 |
| `dq_gate` | 验收 | 区分交付前测试与生产；记录适用的安全审查。 | 有日期的测试、签署移交与条件性审查 |
| `dq_identity` | 最终交换 | 创建交换前解析兼容的流、属性与单位 UUID；披露候选阶段的缺口。 | 平台详情与计量单位 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_reference` | 设施 | 拒绝非一的计数、缺少签署验收、工艺类别、产能基准或单元清单。 | `doe-commissioning` |
| `v_handoffs` | 过程链 | 匹配内部交接的准备地块面积与合格结构质量。 | `balance-identity` |
| `v_rejects` | 成形/集成 | 拒收批次不得计为合格；修复连回产出节点，外出连到明确去向。 |  |
| `v_route` | 设计变体 | 按竣工记录核对单元及共用工程归属；危险门槛仅在触发时适用。 | `osha-psm` |
| `v_boundary` | 整座设施 | 排除交付后运营产出/排放；单独披露交付前测试材料。 | `doe-commissioning` |

## 10. 发布数据集概况

| 字段 | 内容 |
| --- | --- |
| dataset_role | 一座已验收专用制造设施的前景建造数据包。 |
| downstream_use | `secondary_dataset`; `background_dataset` only with matched 工艺类别, route, size and geography. |
| allowed_use | 在披露合同范围、单元清单、路线与交付的前提下建模已安装设施的建造。 |
| excluded_use | 不得用于常规生产、产品收率、运营排放、仅设备销售或未限定的异类工厂混合平均。 |
| required_metadata | 场址；工艺/产品类别；设计产能/单位；已装单元；合同范围；期间；验收；共用分配；UUID 缺口。 |
| required_quality_disclosure | 原始记录覆盖率、平衡、测试、条件性安全审查、返工和上游匹配。 |
| update_trigger | 路线、单元、边界、材料工程量、产能、验收门槛、身份或指南变化。 |

## 11. 数据来源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc3` | official_guidance | [UNSD CPC 3.0 explanatory notes](https://unstats.un.org/unsd/分类边界s/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 专用设施身份及普通工业建筑排除。 |
| `doe-commissioning` | official_guidance | [US DOE commissioning of federal facilities](https://www.energy.gov/cmei/femp/commissioning-federal-buildings) | 测试、缺陷与交付逻辑；不是通用行业测试协议。 |
| `osha-psm` | standard | [OSHA 29 CFR 1910.119(i)](https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.119) | 危险化学品设施条件性开车前安全审查。 |
| `balance-identity` | method_factor | 应用于实际项目记录的守恒与有界份额恒等式。 | 核对及数学 QA 范围；并非经验强度因子。 |
