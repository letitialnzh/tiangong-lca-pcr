---
pcr_id: pcr.constructions-and-construction-services.constructions.other-non-residential-buildings
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他非住宅建筑

## 1. 范围与适用性

本规则覆盖一座从场地测量到签署验收的新建且用途明确的非住宅建筑。适用用途可包括教育、医疗、住宿、室内体育、娱乐、公民服务、宗教、农业及通信建筑。有顶但侧面开放的农用或通信建筑仍可纳入，条件是其建成楼面面积具备可辩护且披露的 GFA 口径；若形态没有可计量的楼面面积，应使用更窄的 PCR，不得强套 1 m2 GFA。实际图纸、固定系统清单和声明用途决定清单；该剩余类别不是统一的材料配方。排除工业和商业建筑、专用厂站、室外休闲工程、可移动设备及移交后运营。既有建筑改造须单独声明初始状态。[unsd-cpc3-notes; eu-levels; doe-building-commissioning]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.other-non-residential-buildings |
| classification_refs | CPC 3.0 53129；映射接受另行决定。 |
| covered_products | 已声明适用用途、含可归属固定建筑系统的新建非住宅建筑。 |
| excluded_products | 工业或商业建筑；非建筑类专用厂站；室外休闲设施；可移动装饰与设备；日常运营；单独销售的设备。 |
| representative_product | 声明用途、建筑面积口径和固定系统清单的已验收建筑。 |
| production_route | 场地清除；地基及结构成型；围护和表面装修；固定系统集成及调试直至签署移交。 |
| market_state | 建成并验收的建筑资产，而非其运营服务。 |

母活动 `integrate_handover` 有用途特定的路线差异。医院、学校、酒店或室内体育建筑可能需要不同的固定系统、房间和测试。仅纳入有记录的实际安装系统。多用途可共存，但面积不得重叠，共享工程须有依据地分摊。每项路线差异须采集实际用途、图纸、系统清单和验收准则。[unsd-cpc3-notes; doe-building-commissioning]

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 建成并验收、用途明确的非住宅建筑。 |
| How much | 1 m2 已验收建筑总楼面面积（GFA）；另报总已验收 GFA。 |
| How well | 结构、屋顶或围护及合同固定系统通过声明的验收测试。 |
| How long or cycle | 从新建施工至签署移交的一个项目；设计寿命仅作元数据，不含运营。 |
| reference_flow_link | `integrate_handover` 的 `accepted_building` 输出，除以已验收 GFA。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 m2 已验收 GFA |
| 参考产品流 | 已验收且用途明确的非住宅建筑；UUID 未解析 |
| 参考流属性 | Area；UUID 未解析 |
| 参考单位组 | Area；UUID 未解析 |
| 参考单位 | m2 GFA |
| 必需限定信息 | 用途及使用类别；场址；新建状态；GFA 口径、总量及侧面开放时有顶面积的处理；结构和屋顶/围护系统；固定系统清单；合同边界；验收日期；混合用途分拆 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `accepted_gfa` | 参考产品 | Area，UUID 未解析 | m2 GFA | 按单一且披露的口径计量签署验收的建筑总楼面面积。侧面开放但有顶的建筑须说明覆盖楼面是否计入；不得混用净面积，也不得将本基准用于没有可辩护楼面面积的形态。 |
| `material_balance` | 建筑产品 | Mass | kg | 按材料核对交付、退货、安装、库存及废料量，并记录密度换算。 |
| `site_energy` | 施工与调试 | 按载体的能量或质量 | kWh; MJ; kg | 分开采购能源、移交前测试及移交后运营。 |
| `mixed_use` | 共享工程 | 面积或有证据的物理服务 | m2; declared unit | 使用不重叠面积，共享系统仅分摊一次。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 新建工程开始前已测量的场地和既有公用设施接口。 |
| starting_condition_role | 物理基线，不是零负担的已备地基或既有已建建筑。 |
| product_classification_scope | 一个已声明合同内、按用途限定 GFA 的已验收有顶或封闭建筑。 |
| recursive_input_rule | 单独采购的同类别完整建筑模块自供应商交付点进入，须有上游数据集；不得再次计入其材料。 |
| upstream_dataset_requirement | 地域和技术相符的材料、预制构件、能源、运输和处理数据集。 |
| disclosure | 用途、面积口径、图纸、合同边界、已安装固定系统、混合用途分拆、土方清除、缺陷及未解析身份。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `gate_new_build` | 整栋建筑 | 纳入地面工程、结构、围护、固定系统、移交前测试及纠正；排除日常使用及可移动设备。 | `unsd-cpc3-notes`; `doe-building-commissioning` |
| `use_qualified` | 建筑用途 | 要求实际用途和固定系统清单；不得从剩余分类名称推断清单。 | `unsd-cpc3-notes` |
| `removal_handoff` | `prepare_site` | 识别土壤或地表来源、测量清除、场内再用、外运和已备场地；清除独立于成型。 | `eu-levels` |
| `forming_handoff` | `form_structure` | 识别成型前材料、形态改变、合格结构、成型损失和修复。 | `eu-levels` |
| `finish_handoff` | `enclose_finish` | 识别上游框架、实际屋顶或围护及施加的装修、残余物和已验收有顶或封闭状态。 | `eu-levels` |
| `integration_handoff` | `integrate_handover` | 组合结构、围护及用途专用固定服务；如有单独采购的机电安装和测试服务，应记录且不得重复分包投入；仅已验收 GFA 进入参考输出。 | `doe-building-commissioning` |
| `route_delta` | 用途专用系统 | 记录各用途的拓扑、清单、测试及依据；混合用途可共存但归属不得重叠。 | `unsd-cpc3-notes`; `doe-building-commissioning` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `prepare_site` | 场地测量与清除 | required | 测量场地至验收的已备地面。 | 独立清除节点，分流弃土和再用。 | 测量开挖及已验收占地。 |
| `form_structure` | 地基及结构成型 | required | 已备地面至检验合格支撑框架。 | 将采购材料成型，修复缺陷。 | 安装质量及合格结构面积。 |
| `enclose_finish` | 屋顶或围护及表面装修 | required | 合格框架至验收有顶或封闭空间。 | 按实际情况加入屋顶、围护、分隔和保护性装修。 | 安装质量及验收楼面面积。 |
| `integrate_handover` | 固定系统集成与验收 | required | 有顶或封闭空间至整栋建筑签署验收。 | 集成用途特定固定系统、测试、纠正并移交。 | 已验收 GFA 和系统清单。 |
### 过程：场地测量与清除（`prepare_site`）

#### 输入

##### 产品流

###### 场地工程施工能源 (`site_energy_input`)

仅记录业主核算的清除作业计量能源，不重复纳入分包隐含能源。

- 选定流: 按载体划分的采购施工能源
- 流属性/单位: Carrier-specific energy or mass / kWh, MJ or kg
- 绑定模式: 参数化 (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 将电表和燃料记录核对至场地任务。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 m2 已验收 GFA
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site`
- 数量范围： 场地能源归属份额
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: fraction
  - 基准: 场地能源除以同载体总记录能源
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `eu-levels`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收备好场地 (`prepared_ground`)

经测量、可供地基施工的地面仅为内部移交。

- 选定流: 按项目占地的已备场地
- 流属性/单位: Area / m2
- 数量规则: 测量不重叠的已验收地基占地。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 m2 已验收 GFA
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site`
- 数量范围： 备地验收份额
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: fraction
  - 基准: 已验收备地面积除以规定占地
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `eu-levels`

##### 废物流

###### 外运土石和清除废物 (`exported_spoil`)

从已识别场地来源清除并离开合同边界的物料；场内再用另计。

- 选定流: 按物质及目的地划分的开挖物
- 流属性/单位: Mass / kg
- 数量规则: 按材料平衡开挖、场内再用、库存及外运。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 m2 已验收 GFA
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site`
- 数量范围： 清除物外运份额
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: fraction
  - 基准: 同一材料外运质量除以清除质量
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `eu-levels`

##### 基本流

### 过程：地基及结构成型（`form_structure`）

#### 输入

##### 产品流

###### 已备场地移交（`received_prepared_ground`）

同一已验收备地面积只进入结构施工一次，不作为第二笔上游采购。

- 选定流：按项目占地的已备场地
- 流属性/单位：Area / m2
- 数量规则：匹配 `prepare_site` 的已验收备地输出面积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收 GFA
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_structure`
- 数量范围：备地移交恒等校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：fraction
  - 基准：收到备地面积除以上游已验收输出面积
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`eu-levels`

###### 地基与框架材料 (`structural_materials`)

按独立身份记录实际混凝土、钢筋、钢材、木材等成型前材料，不设通用配方。

- 选定流: 按竣工清单划分的采购结构材料
- 流属性/单位: Mass / kg
- 数量规则: 汇总交付质量扣除退货，保留安装与损失分拆。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 m2 已验收 GFA
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_structure`
- 数量范围： 结构材料安装份额
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: fraction
  - 基准: 按材料的安装质量除以扣除退货的交付质量
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `eu-levels`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 检验合格支撑结构 (`accepted_structure`)

符合图纸的已成型地基与框架移交围护，不作为第二栋建筑出售。

- 选定流: 已验收原位支撑结构
- 流属性/单位: Area / m2 footprint
- 数量规则: 计量合格结构占地并保存竣工质量清单。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 m2 已验收 GFA
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_structure`
- 数量范围： 结构验收份额
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: fraction
  - 基准: 合格结构面积除以规定结构面积
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `eu-levels`

##### 废物流

###### 不合格结构材料 (`structural_rejects`)

不合格材料按记录路径修复、退货、回收或处置，不计入合格结构。

- 选定流: 按物质及去向划分的不合格结构材料
- 流属性/单位: Mass / kg
- 数量规则: 将缺陷及处置关联至产出结构节点。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 m2 已验收 GFA
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_structure`
- 数量范围： 结构废料份额
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: fraction
  - 基准: 不合格质量除以同材料扣除退货的投入
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `eu-levels`

##### 基本流

### 过程：屋顶或围护及表面装修（`enclose_finish`）

#### 输入

##### 产品流

###### 合格结构移交（`received_structure`）

经检验的地基和框架只进入围护一次，并保留结构清单及验收状态。

- 选定流：已验收原位支撑结构
- 流属性/单位：Area / m2 footprint
- 数量规则：匹配 `form_structure` 的已验收结构输出占地面积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收 GFA
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_enclosure`
- 数量范围：结构移交恒等校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：fraction
  - 基准：收到结构面积除以上游已验收结构面积
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`eu-levels`

###### 围护与装修产品 (`envelope_finish_inputs`)

记录送至合格框架的设计特定幕墙、玻璃、保温、隔断及表面产品。

- 选定流: 按材料及功能划分的围护或装修产品
- 流属性/单位: Mass / kg
- 数量规则: 核对采购、安装量、未用退货和废料。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 m2 已验收 GFA
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_enclosure`
- 数量范围： 装修材料安装份额
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: fraction
  - 基准: 按产品的安装质量除以扣除退货的采购质量
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `eu-levels`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收有顶或封闭空间 (`accepted_enclosure`)

带适用功能表面的合格有顶或封闭空间移交固定系统集成。

- 选定流: 已验收有顶或封闭建筑空间
- 流属性/单位: Area / m2 GFA
- 数量规则: 按声明口径计量不重叠的合格有顶或封闭空间 GFA。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 m2 已验收 GFA
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_enclosure`
- 数量范围： 围护验收份额
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: fraction
  - 基准: 同一口径的已验收封闭 GFA 除以规定 GFA
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `eu-levels`

##### 废物流

###### 装修边角料和残余物 (`finish_residues`)

记录涂层残余物、边角料及损坏装修材料，并明确修复、退货、回收或处置路径。

- 选定流: 按材料及目的地划分的装修残余物
- 流属性/单位: Mass / kg
- 数量规则: 称量或按票据记录外运残余物，分开修复和退货量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 m2 已验收 GFA
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_enclosure`
- 数量范围： 装修残余物份额
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: fraction
  - 基准: 按材料外运残余质量除以扣除退货的采购质量
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `eu-levels`

##### 基本流

### 过程：固定系统集成与验收（`integrate_handover`）

#### 输入

##### 产品流

###### 有顶或封闭空间移交（`received_enclosure`）

已验收有顶或封闭空间只进入固定系统集成一次，不重复其上游材料。

- 选定流：已验收有顶或封闭建筑空间
- 流属性/单位：Area / m2 GFA
- 数量规则：在同一 GFA 口径下匹配 `enclose_finish` 的已验收输出面积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收 GFA
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_systems`
- 数量范围：围护移交恒等校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：fraction
  - 基准：收到有顶或封闭面积除以上游合格输出面积
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`eu-levels`

###### 安装的固定服务及用途特定系统 (`fixed_system_inputs`)

记录实际暖通、电气、给排水、控制、电梯及适用的用途特定固定系统，不设通用清单。

- 选定流: 按物理身份划分的固定建筑部件
- 流属性/单位: Mass / kg
- 数量规则: 按系统核对供应商收货、安装设备及退货。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 m2 已验收 GFA
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_systems`
- 数量范围： 系统安装份额
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: fraction
  - 基准: 按系统的已安装部件质量除以扣除退货的交付质量
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `eu-levels`

###### 移交前调试能源 (`commissioning_energy`)

分别计量测试电力和燃料，不含后续运营。

- 选定流: 按载体划分的采购测试能源
- 流属性/单位: Carrier-specific energy or mass / kWh, MJ or kg
- 绑定模式: 参数化 (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 仅将计量能源归于签署移交前测试。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 m2 已验收 GFA
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_systems`
- 数量范围： 测试能源归属份额
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: fraction
  - 基准: 移交前测试能源除以该载体过渡期总能源
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `eu-levels`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收非住宅建筑 (`accepted_building`)

仅通过结构、围护、固定系统及用途特定测试的 GFA 进入参考输出。

- 选定流: 已验收用途明确的非住宅建筑
- 流属性/单位: Area / m2 GFA
- 数量规则: 采用竣工图签署验收的 GFA，而非计划或净面积。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 m2 已验收 GFA
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_systems`
- 数量范围： 参考归一化恒等校验
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: m2 GFA per m2 accepted GFA
  - 基准: 已验收 GFA 除以同一已验收 GFA 分母
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `eu-levels`

##### 废物流

###### 不合格集成材料 (`system_rejects`)

安装和测试废品送修复、供应商退货、回收或处置，不计入合格输出。

- 选定流: 按材料及目的地划分的不合格固定系统部件
- 流属性/单位: Mass / kg
- 数量规则: 将不合格质量核对至产出工程及记录目的地。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 m2 已验收 GFA
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_systems`
- 数量范围： 不合格部件份额
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: fraction
  - 基准: 不合格部件质量除以扣除退货的交付质量
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `eu-levels`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `no_duplicate_systems` | 结构、围护及机电 | 每项供应商包件和共享场地服务仅归属一次；不重复纳入分包隐含负担。 | `eu-levels` |
| `mixed_use_attribution` | 混合用途 | 已验收 GFA 按用途不重叠分拆；按有证据的面积、质量、能力或服务驱动量分摊共享结构和系统。 | `eu-levels` |
| `reject_rework` | 缺陷 | 返修投入和负担留在产出节点；追踪退货、回收或处置；未解决缺陷不得计入验收 GFA。 | `doe-building-commissioning` |
| `single_project_period` | 施工周期 | 施工负担归属一个已验收项目；在仅含施工的数据集中不得摊入假设的未来运营年份。 | `eu-levels` |

开挖弃土、装修残余物和不合格部件是废物或退货材料，并非自动可销售共产品。单独有证据的回收可售输出须声明自身路线并接受分配审查；不得使用未经核实的避免负担抵扣。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site` | `prepare_site` | 能源、地面、弃土 | 测量、电表、运输单 | 占地、开挖、能源、物料质量、再用、库存、目的地 | 测量及票据/电表核对 | m2; kg; kWh; MJ | 每次测量和运输 | 地面工程至地基验收 | 合同场地 | 平衡清除物和不重叠占地 | 签署测量和票据 |
| `cp_structure` | `form_structure` | 材料、结构、缺陷 | 供应商和检验记录 | 交付、退货、安装及不合格质量、合格几何量 | 竣工清单与检验日志 | kg; m2 | 每次交付和检验 | 地基至框架验收 | 合同结构 | 按材料质量平衡 | 发票、竣工图、缺陷关闭 |
| `cp_enclosure` | `enclose_finish` | 屋顶或围护、验收面积、残余物 | 清单、检验、废物单 | 材料质量、退货、合格 GFA、残余质量和去向 | 工程量测量与票据核对 | kg; m2 | 每批和每次检验 | 屋顶/围护至装修验收 | 合同屋顶、围护和室内 | 平衡采购、安装、退货和废料 | 签署检验及转移单 |
| `cp_systems` | `integrate_handover` | 固定系统、测试能源、输出、废品 | 安装清单、电表、测试日志 | 系统 ID、质量、能源、合格 GFA、缺陷、目的地 | 供应商票据、电表时段和签署测试 | kg; kWh; MJ; m2 | 每个系统和测试 | 集成至签署移交 | 合同固定系统 | 汇总合格面积并核对各系统 | 测试单、缺陷单、验收证书 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_area` | 清单 | 采用同一披露口径的已签署验收 GFA 对归属项目量归一化。 | 归属数量、验收 GFA | 每 m2 GFA 数量 | `eu-levels` |
| `site_balance` | `prepare_site` | 按材料，清除质量 = 场内再用 + 库存变化 + 外运；换算须有记录。 | 测量、地磅、库存 | 核对后弃土 | `eu-levels` |
| `material_balance` | 已安装产品 | 按材料，交付扣退货 = 安装 + 废料 + 库存变化；调查差异。 | 发票、安装清单、废物单 | 核对后清单 | `eu-levels` |
| `mixed_use_split` | 共享工程 | 对不重叠已验收用途面积或有证据的物理服务驱动量仅归属一次。 | 面积表、系统能力、清单 | 用途限定清单 | `eu-levels` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `use_and_area` | 参考 | 声明用途、新建状态、GFA 口径、竣工总量和签署验收。 | 面积表和证书 |
| `system_completeness` | 安装工程 | 交叉核对图纸、票据、检验及调试清单中的遗漏或重复。 | 竣工索引和关闭清单 |
| `rework_destinations` | 废品 | 各废品关联修复、退货、回收或处理，不夸大合格 GFA。 | 缺陷和转移日志 |
| `identity_quality` | 所有流 | 最终交换生成前核对实际身份的属性、单位、方向、地域及路线兼容性。 | 平台详情确认记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_boundary` | 整栋建筑 | 不接受将移交后运营、可移动家具或单独工程计入施工清单的数据包。 | `unsd-cpc3-notes`; `doe-building-commissioning` |
| `validate_use_delta` | 集成 | 各用途专用系统和测试须有证据；混合用途归属不得重叠。 | `doe-building-commissioning` |
| `validate_balances` | 全部节点 | 核对清除、交付/安装材料和废品；返修循环留在产出节点。 | `eu-levels` |
| `validate_reference` | 参考 | 核对已验收 GFA、侧面开放时有顶面积的处理、用途和签署日期；归一化输出对应同一分母。若楼面面积不可辩护，须采用更窄规则。 | `eu-levels`; `doe-building-commissioning` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明用途的非住宅建筑前景施工数据包。 |
| downstream_use | 身份核实后用于 process 和 lifecyclemodel 组装的二级或背景数据集。 |
| allowed_use | 在相同用途、面积口径、边界及固定系统完整度下比较。 |
| excluded_use | 不调整系统而跨用途替代；建筑运营影响；不具体的剩余建筑代理。 |
| required_metadata | 用途、地点、新建状态、GFA 口径及总量、合同边界、结构、围护、固定系统清单、混合用途分拆及验收日期。 |
| required_quality_disclosure | 一手数据覆盖、材料平衡、调试证据、身份缺口和缺失系统。 |
| update_trigger | 设计或用途改变、清单修订、新前景测量、调试纠正或已验证流身份。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-notes` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 分类边界及适用用途。 |
| `eu-levels` | official_guidance | https://environment.ec.europa.eu/topics/circular-economy/levelsold/start-using-levels_en | 建筑生命周期清单和材料报告背景。 |
| `doe-building-commissioning` | official_guidance | https://www.energy.gov/cmei/femp/commissioning-federal-buildings | 固定系统调试及移交节点。 |
