---
pcr_id: pcr.constructions-and-construction-services.constructions.bridges-and-elevated-highways
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 桥梁和高架公路

## 1. 范围与适用性

本 PCR 覆盖现场验收的完整公路、铁路或人行桥梁及高架公路结构，包含已声明的基础、支承、上部结构、桥面、连接以及初始安全和面层工程。不包括地面道路、隧道、运营、维护和独立桥面铺装或修理服务。高架结构以外的引道另计。预制梁是构件，不是参考桥梁。[unsd-cpc-53221; fhwa-pbes]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.bridges-and-elevated-highways |
| classification_refs | CPC 3.0 53221，桥梁和高架公路。 |
| covered_products | 现场验收且用途明确的桥梁、高架桥及高架公路。 |
| excluded_products | 地面道路、隧道、独立铺装或修理、运营及未来维护。 |
| representative_product | 一座完整且现场验收的桥梁或高架公路结构。 |
| production_route | 建造基础与支承；现场浇筑或吊装经核实的预制构件；集成桥面、连接和安全系统；测试交付。 |
| market_state | 在项目现场安装并验收。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 完整且现场验收的桥梁或高架公路结构。 |
| How much | 一座验收资产；结构长度、桥面面积和跨数为必报规模指标。 |
| How well | 通过规定的结构荷载、几何、连接、排水及安全测试。 |
| How long or cycle | 一个项目至签字交付；设计寿命是元数据，运营不在边界内。 |
| reference_flow_link | `deck_handover` 的 `accepted_bridge` 输出。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted asset |
| Reference product flow | 现场验收的桥梁或高架公路结构；UUID 未解析 |
| Reference flow property | 验收资产数量；UUID 未解析 |
| Reference unit group | 数量；UUID 未解析 |
| Reference unit | asset |
| Required qualifiers | 地理端点；用途及荷载等级；结构长度；桥面面积；跨数及跨径；下部和上部结构类型；现浇及预制比例；初始面层及引道范围；交付日期；设计寿命 |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `asset_count` | 参考产品 | 数量，UUID 未解析 | asset | 仅计完整签字交付资产，不按跨数或构件交付数倍增。 |
| `bridge_geometry` | 参考限定词 | 长度和面积 | m and m2 | 从竣工图测量声明支承之间的结构长度和验收桥面平面面积。 |
| `material_mass` | 材料与废物 | 质量 | kg | 用项目配合比密度或供应商单位质量换算体积或构件数量。 |
| `site_energy` | 施工设备 | 能量或燃料质量 | kWh, MJ or kg | 区分载体，不重复计入外包服务燃料或发电机电力。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 基础施工前测量的场地与地基，并指出既有结构、拆除或修复。 |
| starting_condition_role | 建设的物理基线，不是零负担桥梁产品。 |
| product_classification_scope | 一座完整验收的高架结构；普通引道和独立资产另计。 |
| recursive_input_rule | 外购梁或桥面板按供应商节点作为构件进入；完整验收桥梁不得隐含作为原料。 |
| upstream_dataset_requirement | 连接相符的混凝土、钢材、其他构件、能源、运输及废物处理数据集。 |
| disclosure | 报告地基基线、几何、用途、材料、施工路线、共用临时工程、再生料来源、排除项和缺口。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_gate` | 整体结构 | 纳入现场工程及测试直到签字交付。交通运营、维护及寿命终结另列。 | `unsd-cpc-53221` |
| `component_gate` | 外购构件 | 梁和板的供应商制造属上游；现场吊装、连接和养护属本系统。外购构件原料不得再列作现场投入。 | `fhwa-pbes` |
| `route_delta` | 结构构件 | 父装配节点连接支承、上部结构与桥面。预制路线需构件供应、运输、吊装和连接记录；现浇路线需混凝土、钢筋、模板和养护记录。逐构件选择有证据的一条路线。 | `fhwa-pbes` |
| `finish_gate` | 初始桥面完工 | 承载桥面是父状态。仅在原始交付范围内纳入防水、铺装、护栏和排水；排除后续独立翻铺。 |  |
| `shared_and_secondary` | 共用工程与再生投入 | 在项目期间仅一次归属吊机、支架和施工通道。再生钢材或骨料须有来源、回收交接和既有负担约定。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `supports` | 基础与下部结构 | required | 从测量基线至验收支承。 | 建造基础、桥墩和桥台；返修不合格工程或使其退出。 | 一座验收资产及实测几何。 |
| `deck_handover` | 上部结构、桥面与交付 | required | 从验收支承至签字可通行结构。 | 连接梁或现场浇筑、完成桥面、饰面与测试。 | 一座验收资产及实测桥面面积。 |

### 过程：基础与下部结构（`supports`）

#### 输入

##### 产品流

###### 支承材料（`support_materials`）

逐项区分混凝土、钢筋、结构钢、桩和支座；识别再生含量，避免构件和原料负担重叠。

- 选定流：按设计项目列示的基础与支承产品
- 流属性/单位：质量 / kg
- 数量规则：逐项核对交付、安装、退货和拒收量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定支承材料核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/asset
  - 基准：依设计而异的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 土方服务（`earthwork_service`）

仅用于外购挖方服务，且其设备燃料未另计为自营设备能源。

- 选定流：基础挖方服务
- 流属性/单位：合同工程量 / 声明单位
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- 数量规则：记录核证挖方量及服务边界。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`
- 数量范围：暂定挖方服务核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：declared work units/asset
  - 基准：待合同单位明确的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 支承设备能源（`support_energy`）

按载体记录自营燃料或电力，扣除外包服务与共用设备的重复计入。

- 选定流：按载体列示的施工电力或燃料
- 流属性/单位：能量或燃料质量 / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按工程包汇总现场电表、发票与设备日志。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定支承能源核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kWh-equivalent/asset
  - 基准：设备能源宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收支承（`accepted_supports`）

只有通过验收的基础、桥墩和桥台才内部移交桥面工程；这不是第二个最终资产或销售产品。

- 选定流：验收桥梁下部结构
- 流属性/单位：数量 / accepted support system
- 数量规则：记录与最终资产相连的内部验收支承系统。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：内部支承节点完整性
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：accepted support systems/asset
  - 基准：每最终资产的一次内部支承交接
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 弃土及拒收支承材料（`support_rejects`）

区分可复用清洁挖方、污染弃土和拒收材料；返修连接回 `supports`，或进入核实的回收或处置路径。

- 选定流：按目的地列示的弃土及拒收支承材料
- 流属性/单位：质量 / kg
- 数量规则：按材料和目的地核对外运质量与内部返修循环。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 数量范围：暂定支承残余物核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/asset
  - 基准：依场址而异的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：上部结构、桥面与交付（`deck_handover`）

#### 输入

##### 产品流

###### 验收支承内部交接（`supports_in`）

此投入恰好是 `accepted_supports` 的输出；其前景负担只结转一次，不得作为新增外购支承。

- 选定流：验收桥梁下部结构
- 流属性/单位：数量 / accepted support system
- 数量规则：匹配签字的内部支承验收输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：内部交接一致性
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：accepted support systems/asset
  - 基准：同一支承过程输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 上部结构与桥面构件（`deck_components`）

按实际项目记录梁、板或现浇材料、支座、接缝、护栏与排水。同一构件的供应商构件和现场浇筑原料路线互斥。

- 选定流：按安装项目列示的上部结构与桥面产品
- 流属性/单位：质量 / kg
- 数量规则：按施工路线核对供应商交付、安装及拒收量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`fhwa-pbes`
- 数量范围：暂定上部结构材料核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/asset
  - 基准：依设计而异的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购构件货运（`component_freight`）

将外购梁、板和其他主要构件运输与供应商产品负担区分；按交付记录选择实际公路或水运方式，避免重复计入供应商已包含的运输。

- 选定流：按实际方式列示的构件货运服务
- 流属性/单位：运输周转量 / t*km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- 数量规则：有记录的交付吨数乘以满载公里，扣除上游已计运输。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_freight`
- 数量范围：暂定构件运输核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：t*km/asset
  - 基准：依构件质量与供应距离而异的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 桥面完工产品（`deck_finishing`）

仅在本资产初始交付范围内计量防水、铺装、标线和防护，区分完工产品与残余物。

- 选定流：按规格列示的桥面完工产品
- 流属性/单位：质量 / kg
- 数量规则：使用批次票据或桥面面积、厚度及实测密度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 数量范围：暂定初始面层核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kg/asset
  - 基准：依桥面面积而异的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 吊装与完工能源（`deck_energy`）

按实际载体记录吊装、泵送、养护和面层能源；共用设备在两节点之间仅归属一次。

- 选定流：按载体列示的施工电力或燃料
- 流属性/单位：能量或燃料质量 / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：共用设备归属后汇总电表、发票及设备日志。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定桥面能源核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kWh-equivalent/asset
  - 基准：设备能源宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收桥梁或高架公路（`accepted_bridge`）

完整结构通过荷载、几何、连接、桥面、排水和安全验收。不合格部分不得进入计数。

- 选定流：现场验收的桥梁或高架公路结构
- 流属性/单位：数量 / asset
- 数量规则：统计完整资产的签字交付并记录几何限定词。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：验收最终资产数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：asset/asset reference
  - 基准：每参考对应一次完整签字交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 桥面拒收件与完工残余物（`deck_rejects`）

损坏构件、混凝土余量、模板和面层残余物返回 `deck_handover` 修理，或退出到明确回收、退货或处置路径；均非验收输出。

- 选定流：按目的地列示的上部结构拒收件与残余物
- 流属性/单位：质量 / kg
- 数量规则：核对实测拒收、返修、回收、退货和处置量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 数量范围：暂定桥面残余物核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kg/asset
  - 基准：依设计而异的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `one_asset` | 验收输出 | 桥梁是唯一预期产品；可复用挖方或废钢按目的地处理，不构成另一座验收桥梁。 |  |
| `rework_burden` | 拒收工程 | 在生产节点保留修理负担并追踪回收或处置；拒收构件不进入 `accepted_bridge`。 |  |
| `secondary_inputs` | 再生钢材或骨料 | 记录来源、回收节点和适用供应商/既有系统负担约定；不得同时计入既有产品负担与截断式回收数据集。 |  |
| `shared_plant` | 共用吊机、支架和通道 | 项目期间按服务工时或工程量，将一次取得的负担分给 `supports` 和 `deck_handover`；份额核对至 100%。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | `supports`; `deck_handover` | 购买与安装材料 | 采购及竣工记录 | 项目、供应商、路线、质量或体积、密度、安装、退货、拒收、再生来源 | 核对交付与竣工数量 | kg, m3, item | 每批 | 项目施工期 | 指定资产 | 安装加损耗减退货，不重复计构件/原料 | 票据、图纸与配合比 |
| `cp_services` | `supports` | 外包土方 | 核证工程量 | 合同单位、数量、燃料包含情况 | 承包商工程记录 | 声明单位 | 每次结算 | 基础阶段 | 指定资产 | 不重叠结算 | 签字计量单 |
| `cp_freight` | `deck_handover` | 构件货运 | 提单及路线记录 | 项目、吨数、方式、满载距离、供应商是否含运输 | 核对交付批次及路线 | t, km, t*km | 每批运输 | 项目施工期 | 指定资产 | 按方式汇总吨数乘满载公里 | 交付与承运记录 |
| `cp_energy` | `supports`; `deck_handover` | 能源载体 | 电表、发票、设备日志 | 载体、数量、节点、设备、工时、共享归属 | 核对电表与发票 | kWh, MJ, kg | 每月及工程包 | 项目施工期 | 指定资产 | 按载体汇总，共用设备只计一次 | 电表及机械日志 |
| `cp_waste` | `supports`; `deck_handover` | 弃土与拒收 | 地磅及移交单 | 质量、材料、路线、目的地、返修关联 | 称重并追踪 | kg | 每次移动 | 项目施工期 | 指定资产 | 按材料与目的地汇总，扣除内部循环 | 地磅记录 |
| `cp_acceptance` | `supports`; `deck_handover` | 内部与最终节点 | 测量及签字 | 端点、长度、面积、跨数、荷载等级、缺陷、测试、日期 | 签字检查 | asset, m, m2 | 每节点 | 施工及交付 | 指定资产 | 匹配内部支承与最终数量 | 竣工图与证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `material_balance` | 材料与废物 | 统一水分和单位后，购买 = 安装 + 退货 + 拒收 + 库存变化。 | 交付、安装、退货、库存 | 核对的 kg/asset |  |
| `volume_to_mass` | 混凝土及面层 | 质量 = 实测体积 × 项目特定密度。 | 体积、密度 | kg/asset |  |
| `shared_hours` | 共用设备 | 节点负担 = 总取得负担 × 节点工时 / 全部合格工时；有理由时可按实测工程量。 | 共用负担及日志 | 分配的负担 |  |
| `geometry_check` | 参考产品 | 从竣工尺寸测量桥面平面面积与结构长度，排除普通引道。 | 竣工几何 | m2 and m/asset |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `geometry_gate` | 参考资产 | 留存标注长度、桥面面积、跨数与荷载等级的验收日期。 | 签字证书及测量 |
| `route_evidence` | 主要构件 | 识别现浇或预制路线及供应商节点，不得重叠。 | 设计、采购及浇筑记录 |
| `boundary_complete` | 全部节点 | 核对材料、服务、能源、废物、临时工程和引道排除项。 | 工程包台账 |
| `uuid_gap` | 最终交换 | 发布具体数据集前确认相符的平台流、属性及单位身份。 | 详情核实的身份记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `complete_asset` | 参考输出 | 需要一座有几何、用途及日期的完整签字结构；单跨或构件不能独立满足参考。 | `unsd-cpc-53221` |
| `gate_link` | 两节点 | `supports_in` 必须匹配 `accepted_supports`；支承负担只结转一次，不新增外购支承。 |  |
| `route_exclusive` | 主要构件 | 逐构件核实一条施工路线、供应商构件边界和现场连接，禁止路线重叠。 | `fhwa-pbes` |
| `reject_path` | 不合格工程 | 追踪每项拒收至修理、回收、退货或处置；复验通过前排除验收几何。 |  |
| `secondary_shared` | 再生投入及临时工程 | 核实来源/负担约定，将共用工程份额核对至规定期间内一次取得的负担。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 一座验收桥梁或高架公路的场址特定前景数据包。 |
| downstream_use | 经审查后可形成带过程及生命周期模型关联的次级或背景建设数据集。 |
| allowed_use | 已披露几何、用途、路线、地点与范围的可比结构。 |
| excluded_use | 构件制造、独立铺装、交通运营或按公里通用的地面道路。 |
| required_metadata | 端点、几何、荷载等级、路线/材料组合、纳入矩阵、日期、设计寿命及质量。 |
| required_quality_disclosure | 供应商覆盖、记录完整性、未解析身份、共用工程归属、暂定范围与排除项。 |
| update_trigger | 结构、路线、供应商清单、验收节点或数据质量发生重大变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-53221` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53221 | 产品范围及桥梁/高架公路边界。 |
| `fhwa-pbes` | official_guidance | https://www.fhwa.dot.gov/bridge/prefab/if09010/01a.cfm | 预制混凝土与钢构件、现场连接及路线接口。 |
