---
pcr_id: pcr.constructions-and-construction-services.constructions.railways
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 铁路线路

## 1. 范围与适用性

本 PCR 覆盖一段连续铁路线路，其已安装轨道及范围内供电、控制和安全系统在现场通过验收。长途、通勤、有轨电车、城市轨道、缆索及索道导向轨道可适用，但必须声明轨道形式和交付节点。不包括铁路运输服务、车辆、站房以及单独计量的桥梁和隧道；线路经过这些资产时，应指出其关联数据集。施工边界截止于基础设施交付，不延伸至列车运营。[unsd-53212; fra-track-2026; uic-mainline-lcat]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.railways |
| classification_refs | CPC 3.0 53212，铁路线路；正向映射的接受决定另行作出。 |
| covered_products | 现场验收的铁路线路，包括路基、轨道以及已声明的轨旁电气化、控制和安全系统。 |
| excluded_products | 车辆及运营；站房；独立计量的桥梁、隧道和公用设施；未来维护。 |
| representative_product | 1 路线公里经过测试和验收的铁路线路。 |
| production_route | 准备路基；安装轨道构件；集成范围内供电及安全系统；测试并交付。 |
| market_state | 在指定现场安装并验收的基础设施。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 现场验收的铁路线路段。 |
| How much | 1 路线公里；多线轨道另报轨道公里。 |
| How well | 路基、轨道几何形态及纳入范围的系统通过指定验收测试。 |
| How long or cycle | 从开工至交付的一个建设项目；后续寿命属于情景元数据。 |
| reference_flow_link | `track_handover` 的 `accepted_railway` 输出。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 route-km of accepted railway alignment |
| Reference product flow | 现场验收的铁路线路；UUID 未解析 |
| Reference flow property | 路线长度；UUID 未解析 |
| Reference unit group | 长度；UUID 未解析 |
| Reference unit | route-km |
| Required qualifiers | 地理定位端点；路线公里和轨道公里；轨道数和轨距；道砟或板式轨道形式；地面、高架和地下部分；供电与信号范围；桥梁、隧道及站房接口；验收日期 |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `route_length` | 参考产品 | 长度，UUID 未解析 | route-km | 沿验收端点之间中心线只测一次；并行轨道不倍增路线长度。 |
| `track_length` | 轨道清单 | 长度 | track-km | 汇总已安装轨道中心线长度，侧线和道岔另行披露。 |
| `material_mass` | 材料和废物 | 质量 | kg | 使用项目特定单位质量或密度换算件数、线性量和体积，并保留换算记录。 |
| `freight_work` | 进场运输 | 质量 × 距离 | t·km | 交付吨数乘以满载距离，并披露承运方返程处理方式。 |
| `site_energy` | 设备 | 能量或燃料质量 | kWh, MJ or kg | 按能源载体分别记录，避免发电机燃料与所发电量重复计入。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 开工时测量的路权用地、已有轨道或结构、地基条件以及拆除或修复事项。 |
| starting_condition_role | 新建工程的物理基线，不视为免费基础设施产品。 |
| product_classification_scope | 一段验收铁路线路；独立计量的站房、桥梁、隧道及车辆资产另计。 |
| recursive_input_rule | 外购轨道板按供货节点作为构件输入；不得把另一条完整验收线路不加分解地视作原材料。 |
| upstream_dataset_requirement | 连接节点相容的钢轨、轨枕、扣件、道砟或板材、供电/控制产品、货运、能源和废物处理数据集。 |
| disclosure | 报告起始状态、路线与轨道长度、包含系统、土建接口、共享工程、再生来源、截断和缺口。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | 整体产品 | 纳入直到签字交付前的实际施工和测试；运营、维护及寿命终结另作情景。 | `unsd-53212`; `fra-track-2026` |
| `asset_interfaces` | 桥梁、隧道和站房 | 记录每项资产是否纳入本次计量合同，或由独立关联数据集承担；不得隐含包含或遗漏。 | `unsd-53212`; `uic-mainline-lcat` |
| `assembly_boundary` | 钢轨、轨枕、扣件、道砟/板材及系统 | 供应商制造属于产品输入；现场安装和集成属于本前景系统。区分验收和拒收状态。 | `fra-track-2026` |
| `secondary_and_shared` | 再生输入和共用工程 | 声明回收交接、既有负担约定、受益过程和服务期间；每项负担仅归属一次。 | `uic-mainline-lcat` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `formation` | 走廊与轨道路基 | required | 从测量路权用地到验收的轨道承托路基。 | 土方、排水和准备路基；不合格工程返工或外运。 | 验收路线公里和实测工程量。 |
| `track_handover` | 轨道与系统交付 | required | 从验收路基到测试通过的铁路线路。 | 连接钢轨、轨枕、扣件和道砟/板材；集成已声明供电/控制；排除不合格工程。 | 验收路线公里和轨道公里。 |

### 过程：走廊与轨道路基（`formation`）

#### 输入

##### 产品流

###### 土方服务（`earthwork_service`）

仅用于承包施工且未同时把承包方设备燃料计入自营前景燃料的情形。合同可能涵盖挖方、回填或压实；根据前景服务记录选定准确的 Flow Set 组。

- 选定流：走廊土方与压实服务
- 流属性/单位：合同服务量 / 声明单位
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- 数量规则：记录实际合同量和里程位置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_earthwork`
- 数量范围：暂定服务量核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：declared service units/route-km
  - 基准：待确定合同单位的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 路基与排水材料（`formation_materials`）

按实际规格拆分骨料、土工织物、排水和稳定化产品。再生骨料必须说明来源和回收节点。

- 选定流：按竣工项目列示的路基产品
- 流属性/单位：质量 / kg
- 数量规则：按材料核对交付、安装、退货和库存量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定路基质量核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kg/route-km
  - 基准：依路线而异的宽泛初筛，非设计用量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 路基设备能源（`formation_energy`）

记录自营设备燃料和电力；排除已包含在土方服务中的能源。

- 选定流：按实际能源载体列示的施工燃料和电力
- 流属性/单位：能量或燃料质量 / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按工程包和载体汇总电表、发票与机械日志。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定路基能源核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：kWh-equivalent/route-km
  - 基准：设备能源宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收路基（`accepted_formation`）

仅通过承载与几何形态验收的路基进入轨道安装。

- 选定流：验收的轨道承托路基
- 流属性/单位：路线长度 / route-km
- 数量规则：记录验收里程，不含不合格或待定部分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：验收路基覆盖量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：route-km/route-km reference
  - 基准：支撑一验收路线公里的已验收路基
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

##### 废物流

###### 外运弃土（`spoil_export`）

现场回填保留在路基物料平衡内；外运材料记录唯一接收方。

- 选定流：按目的地列示的挖方土石废物
- 流属性/单位：质量 / kg
- 数量规则：核对挖方、复用、库存和地磅外运质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 数量范围：弃土外运比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg excavated material
  - 基准：库存核对后外运弃土与挖方质量之比
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：轨道与系统交付（`track_handover`）

#### 输入

##### 产品流

###### 接收验收路基（`formation_received`）

同一验收里程仅作为 `formation` 的内部中间产物进入一次。

- 选定流：验收的轨道承托路基
- 流属性/单位：路线长度 / route-km
- 数量规则：将输入里程与上游验收输出匹配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：路基连接量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：route-km/route-km reference
  - 基准：每下游路线公里对应一上游验收路线公里
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

###### 轨道构件（`track_components`）

将钢轨、轨枕、扣件、道砟或板材、道岔拆分成实际交换。轨道形式、轨距和轨道公里决定构件清单；再生钢轨或道砟需要回收交接记录。

- 选定流：按竣工产品列示的轨道构件
- 流属性/单位：质量 / kg
- 数量规则：将实际工程量清单换算为安装质量，核对交付、退货、拒收和库存。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每验收路线公里；另报每轨道公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定轨道构件质量核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kg/route-km
  - 基准：取决于轨道数量和形式的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供电与安全构件（`system_components`）

仅记录合同范围内的轨旁电气化、信号与安全设备；站内专用设备另计。

- 选定流：按项目列示的铁路供电、控制和安全产品
- 流属性/单位：质量或件数 / kg or item
- 数量规则：按规格汇总竣工验收设备；不在范围时披露零值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定系统质量核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：kg/route-km
  - 基准：含不在范围系统的零值的宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 构件进场货运（`component_freight`）

使用实际运输方式、质量和距离，避免与供应商交付节点内运输重复。

- 选定流：按方式和路线列示的货运服务
- 流属性/单位：运输功 / t·km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- 数量规则：按方式汇总吨数乘满载公里数。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_freight`
- 数量范围：暂定运输功核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：t·km/route-km
  - 基准：货运功宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 安装与测试能源（`installation_energy`）

按载体计量捣固、焊接及测试能源；在过程和期间之间对共用设备仅分摊一次。

- 选定流：按实际载体列示的施工燃料和电力
- 流属性/单位：能量或燃料质量 / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：将载体发票和电表与安装、测试工程包核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定安装能源核查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：kWh-equivalent/route-km
  - 基准：安装及测试能源宽泛初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收铁路线路（`accepted_railway`）

仅计入轨道及包含系统通过指定测试和交付的里程。

- 选定流：现场验收的铁路线路
- 流属性/单位：路线长度 / route-km
- 数量规则：一验收路线公里，并将轨道公里和系统范围作为限定信息。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：参考路线长度
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：route-km/reference flow
  - 基准：定义上的一验收路线公里
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

##### 废物流

###### 轨道安装拒收物（`track_rejects`）

按去向区分钢轨切头、破损轨枕、不合格道砟和失效设备。返工材料回到安装过程；未解决拒收物不得进入验收输出。

- 选定流：按材料和去向列示的安装废物
- 流属性/单位：质量 / kg
- 数量规则：核对安装、退货、返工、外运和库存量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收路线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 数量范围：构件拒收比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg delivered components
  - 基准：退货与库存核对后外运拒收物与交付构件之比
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `shared_assets` | 共用运输道路、料场、机械和临时供电 | 列明受益过程及服务期间。按机械工时、工程量或其他有记录的物理驱动分配实测使用量；份额之和为一。 | `uic-mainline-lcat` |
| `multiple_tracks` | 并行轨道或项目 | 先归集专属工程；不可分走廊工程按实物使用量或覆盖长度分配，不得按轨道数倍增一路线公里。 | `reference-definition` |
| `secondary_inputs` | 再生钢轨、道砟和骨料 | 记录来源和回收交接。按选定上游约定只计一次回收加工；无证据不得计入前次使用负担或替代信用。 | `uic-mainline-lcat` |
| `rework_reject` | 不合格路基和轨道工程 | 返工保留在产生过程；无法修复材料仅经一条回收或处置路径离开；待定或拒收里程不得进入输出。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_earthwork` | `formation` | 土方服务 | 测量及合同 | 里程、挖方、填方、服务范围和单位 | 测量与签字承包日志 | m3, service unit | 每工程包 | 准备至路基验收 | 指定走廊 | 汇总且不重复自营机械燃料 | 测量和发票 |
| `cp_materials` | `formation`; `track_handover` | 永久产品 | 交付和竣工清单 | 产品、规格、质量或件数、安装、退货、库存、再生来源 | 签字交付单及竣工清单 | kg, item, m3 | 每次交付 | 整个施工期 | 验收线路段 | 按产品行核对 | 发票和证书 |
| `cp_energy` | `formation`; `track_handover` | 设备和测试能源 | 电表和燃料日志 | 载体、数量、过程、日期、共用受益方 | 电表、发票和机械日志 | kWh, MJ, kg, L | 每周 | 施工及测试 | 指定走廊 | 按载体汇总且共用读数仅分配一次 | 电表和发票 |
| `cp_freight` | `track_handover` | 进场产品 | 运输记录 | 产品质量、方式、起点、距离、返程约定 | 发货单与路线日志 | t, km, t·km | 每趟 | 供应至现场 | 供应商至走廊 | 按方式汇总吨数 × 满载公里 | 签字运输记录 |
| `cp_waste` | `formation`; `track_handover` | 弃土和拒收物 | 废物/返工日志 | 材料、质量、过程、复用、返工、外运、接收方 | 地磅与联单 | kg | 每次转移 | 整个施工期 | 指定走廊 | 按来源和去向平衡 | 票据和收据 |
| `cp_acceptance` | `formation`; `track_handover` | 验收状态 | 测量与调试 | 端点、路线公里、轨道公里、轨距、形式、系统、缺陷、测试、验收 | 竣工测量和签字测试 | route-km, track-km | 每道节点 | 路基至交付 | 验收线路段 | 匹配里程并排除不合格长度 | 图纸和证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `material_balance` | 各产品 | 总交付量 = 安装量 + 外运废物 + 退货 + 期末库存 - 期初库存，容差须记录。 | 交付、安装、废物和库存 | kg/product and kg/route-km | `mass-balance-identity` |
| `spoil_balance` | 挖方 | 经密度和松散系数换算后，挖方 = 现场复用 + 外运 + 库存变化。 | 测量、密度和地磅 | kg/route-km and residual | `mass-balance-identity` |
| `transport_work` | 进场货运 | 按方式汇总实际满载吨数 × 公里。 | 质量与路线记录 | t·km/route-km | `reference-definition` |
| `track_ratio` | 并行轨道 | 披露轨道公里 / 路线公里，不用于倍增参考输出。 | 竣工路线和轨道测量 | track-km/route-km | `reference-definition` |
| `shared_fraction` | 共用资源 | 分配量 = 共用实测量 × 实物使用比例；所有比例之和为一。 | 电表和使用记录 | amount/route-km | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope` | 参考及接口 | 核对验收端点、路线及轨道长度、轨距、形式、系统范围和独立土建资产。 | 竣工图和证书 |
| `dq_materials` | 主要构件 | 按规格核对钢轨、轨枕、扣件、道砟/板材和设备及再生来源。 | 交付、竣工和废物记录 |
| `dq_time` | 所有阶段 | 使用项目日期、供应商时间并披露时间缺口。 | 进度、发票和测试 |
| `dq_identity` | 最终交换 | 发布前依据平台详情核实具体 UUID 的流类型、节点、属性和单位。 | 流及支撑引用审查 |
| `dq_shared` | 共用设备 | 证明受益方、服务期间和单次分配。 | 电表和分配工作表 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_handover` | 参考产品 | 要求签字验收、端点、路线公里、轨道公里、轨距、形式和包含系统；拒绝待定长度。 | `unsd-53212`; `fra-track-2026` |
| `v_interfaces` | 土建资产 | 核对站房、桥梁、隧道和车辆的归属；独立计量资产不得消失或重复。 | `unsd-53212`; `uic-mainline-lcat` |
| `v_balance` | 路基和材料 | 测试挖方及交付产品平衡，包括退货、库存、返工和外运拒收物。 | `mass-balance-identity` |
| `v_rework` | 不合格工程 | 验收前把各拒收状态连接至返工或唯一回收/处置出口。 | `mass-balance-identity` |
| `v_secondary` | 再生输入 | 要求来源、回收节点和单一负担约定，不得无证据计替代信用。 | `uic-mainline-lcat` |
| `v_shared` | 共用工程 | 核对全部受益方及期间、物理驱动和总和为一的分配比例。 | `uic-mainline-lcat` |
| `v_identity` | 最终 UUID | 同名出厂或质量属性产品流不能代表现场验收的路线长度输出；未核实 UUID 留空。 | `reference-definition` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 验收铁路线路的建设阶段数据包。 |
| downstream_use | 经具体交换身份审查后，用于基础设施过程及生命周期模型投影的 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 在轨道数、形式、系统范围和节点一致时按路线公里开展建设评估。 |
| excluded_use | 列车运营、维护或全生命周期声明；未关联的独立桥隧归因。 |
| required_metadata | 端点、路线和轨道长度、轨道数、轨距、形式、系统范围、接口、日期和验收。 |
| required_quality_disclosure | 材料、运输、能源和废物完整性；暂定范围；UUID 缺口；再生来源和共用分配。 |
| update_trigger | 竣工长度或范围变化、数量修正、供应商替换或参考身份核实。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-53212` | official_guidance | UNSD CPC 53212 说明，https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53212 | 铁路类别和包含系统。 |
| `fra-track-2026` | official_guidance | 美国联邦铁路管理局，《2026 年轨道与结构合规手册》，https://railroads.dot.gov/elibrary/track-and-structures-compliance-manual-2026 | 轨道构件及验收问题；不把辖区技术数值普遍化。 |
| `uic-mainline-lcat` | literature | UIC MAINLINE 生命周期评估工具，https://uic.org/com/enews/nr/410/article/the-european-railway-project-4663 | 铁路基础设施资产区分及生命周期语境。 |
| `mass-balance-identity` | method_factor | 项目材料与挖方守恒质量核对。 | 材料、弃土和拒收物平衡。 |
| `reference-definition` | method_factor | 本 PCR 的验收路线公里定义与算术归一化。 | 输出长度、轨道比和运输计算。 |
