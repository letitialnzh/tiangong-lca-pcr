---
pcr_id: pcr.constructions-and-construction-services.constructions.tunnels
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 隧道

## 1. 适用范围

本 PCR 适用于在场址交付验收的公路、道路、铁路及地下铁路交通隧道构筑物。边界包括开挖、支护、衬砌、防水排水、洞口及合同包含的安全系统，直至测试和签署移交。应申报洞数、中心线长度、断面、地质及地下水、开挖方法和系统范围。铁路轨道、牵引供电及信号仅在隧道合同涵盖时计入，否则关联独立的铁路线路数据集。不包括普通车行或人行下穿通道、独立的地下铁路线路、采矿隧道、运营及后续维护。[unsd-tunnels; fhwa-tunnel-manual]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.tunnels |
| classification_refs | CPC 3.0 53222，隧道；映射接受另行判定。 |
| covered_products | 完工的公路、道路、铁路及地下铁路交通隧道构筑物。 |
| excluded_products | 普通下穿通道、独立铁路线路、采矿隧道和交通运营。 |
| representative_product | 声明洞数及系统范围的一中心线公里场址验收交通隧道。 |
| production_route | 开挖并支护地层；将验收开挖段移交永久衬砌和系统集成；测试并移交。 |
| market_state | 指定场址已安装并调试验收的土木资产。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 场址验收的交通隧道。 |
| How much | 一验收中心线公里；另行披露洞公里。 |
| How well | 衬砌、水控制、洞口及纳入系统通过验收测试。 |
| How long or cycle | 从施工至签署移交的一个项目；设计寿命仅为元数据。 |
| reference_flow_link | 来自 `lining_handover` 的 `accepted_tunnel`。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 验收隧道中心线公里 |
| Reference product flow | 场址验收交通隧道；UUID 未解析 |
| Reference flow property | 中心线长度；UUID 未解析 |
| Reference unit group | 长度；UUID 未解析 |
| Reference unit | centreline-km |
| Required qualifiers | 端点；洞数和洞公里；断面；公路或铁路功能；开挖方法；地质及地下水；支护与衬砌；洞口；安全和铁路系统范围；验收日期 |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `tunnel_length` | 参考产品 | 长度，UUID 未解析 | centreline-km | 在端点之间只计量一次验收中心线；单独披露平行洞公里，不倍增参考产出。 |
| `excavated_volume` | 开挖 | 体积 | m3 | 使用原位测量体积；弃渣质量的松胀及密度换算另行记录。 |
| `material_mass` | 安装产品及废物 | 质量 | kg | 用有记录的产品特定单件质量或密度换算件数和体积。 |
| `site_energy` | 施工设备 | 能量或燃料质量 | kWh, MJ or kg | 区分能源载体，共享设备仅归属一次；不得重复计入发电机燃料及其所产电力。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 开挖前已勘测的地层、既有工程、地下水及洞口区域；声明先期拆除或修复。 |
| starting_condition_role | 物理基线，而非无负担的隧道构件。 |
| product_classification_scope | 一座验收隧道；独立计量的铁路线路、道路面层、桥梁、车站和公用设施须关联。 |
| recursive_input_rule | 采购构件从供应商交付口进入；已验收隧道不得作为另一隧道未经分析的原料。 |
| upstream_dataset_requirement | 关联适配的混凝土、钢材、防水、能源、货运、废物处理及所含系统数据集。 |
| disclosure | 地层、方法、长度、洞数、材料、系统、弃渣去向、共享设备、再生来源、截断及身份缺口。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | 整体资产 | 纳入施工和测试至签署移交；排除后续交通运营及维护。 | `unsd-tunnels`; `fhwa-tunnel-manual` |
| `civil_interfaces` | 洞口、道路及铁路系统 | 记录哪些接口属于本合同，哪些关联外部资产；共享工程只归属一次。 | `unsd-tunnels`; `fhwa-tunnel-manual` |
| `excavation_handoff` | 两个过程节点 | 按匹配里程移交验收支护开挖段；弃渣为不同产出，并非另一座验收隧道。 | `fhwa-tunnel-manual`; `mass-balance-identity` |
| `secondary_and_shared` | 再生投入及共享掘进设备、泵或供电 | 记录回收交接点、负担规则、使用节点和期间；每项负担只计一次。 | `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `excavation_support` | 开挖与地层支护 | required | 从勘测地层至验收支护开挖段。 | 移除地层、分流弃渣并安装支护；缺陷里程返回返工。 | 验收支护长度及勘测开挖量。 |
| `lining_handover` | 衬砌与系统移交 | required | 从验收开挖段至签署隧道移交。 | 集成衬砌、防水、排水、洞口及范围内系统；测试并剔除不合格项。 | 验收中心线公里和洞公里。 |

### 过程：开挖与地层支护（`excavation_support`）

#### 输入

##### 产品流

###### 开挖服务（`excavation_service`）

仅当分包施工服务不与自有前景设备能源重复计量时使用；由合同记录选定确切服务。

- 选定流：按实际方法的隧道开挖服务
- 流属性/单位：合同服务量 / 声明单位
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- 数量规则：记录合同数量、里程和业主提供资源的排除项。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收中心线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_excavation`
- 数量范围：暂定服务量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：declared service units/centreline-km
  - 基准：宽泛首轮筛查，非设计用量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 支护产品（`support_products`）

按规格区分锚杆、喷射混凝土、注浆、预制支护及钢材。再生投入须有来源及回收交接证据。

- 选定流：按竣工项目区分的地层支护产品
- 流属性/单位：质量 / kg
- 数量规则：核对到货、安装、退回及剔除数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每验收中心线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定支护质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kg/centreline-km
  - 基准：随几何条件变化的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 开挖能源（`excavation_energy`）

只记录未包含在分包服务中的能源；按使用节点和期间识别掘进设备、泵与通风。

- 选定流：按实际载体区分的施工能源
- 流属性/单位：能量或燃料质量 / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：汇总归属本节点的计量能源载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收中心线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定开挖能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kWh-equivalent/centreline-km
  - 基准：随施工方法变化的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收支护开挖段（`supported_excavation`）

仅为内部中间产物：向 `lining_handover` 移交一次验收里程；缺陷段留在返工路径。

- 选定流：验收的隧道支护开挖段
- 流属性/单位：中心线长度 / centreline-km
- 数量规则：移交通过支护和稳定性验收的勘测里程。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收中心线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：支护开挖段移交
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：centreline-km/centreline-km reference
  - 基准：内部交接匹配的验收里程
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

##### 废物流

###### 外运开挖弃渣（`spoil_export`）

区分场内回用、有益回收及处置；弃渣为移除地层，不是验收隧道产出。

- 选定流：按去向区分的开挖土石
- 流属性/单位：质量 / kg
- 数量规则：核对原位开挖、密度、回用、库存及称重外运。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收中心线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spoil`
- 数量范围：弃渣外运比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg excavated material
  - 基准：外运质量除以核对后的开挖质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：衬砌与系统移交（`lining_handover`）

#### 输入

##### 产品流

###### 接收支护开挖段（`excavation_received`）

严格匹配上游验收里程；不得将其负担作为外部数据集再次导入。

- 选定流：验收的隧道支护开挖段
- 流属性/单位：中心线长度 / centreline-km
- 数量规则：核对上游与下游验收里程。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收中心线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：开挖交接匹配
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：centreline-km/centreline-km reference
  - 基准：匹配的上游里程
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

###### 衬砌与水控制产品（`lining_products`）

按规格记录衬砌、钢筋、防水膜、注浆、排水及洞口产品；制造在上游，安装在本节点。

- 选定流：按竣工项目区分的衬砌和水控制产品
- 流属性/单位：质量 / kg
- 数量规则：核对到货、安装、退回及剔除数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每验收中心线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定衬砌质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kg/centreline-km
  - 基准：随断面变化的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 安全与铁路接口构件（`systems_products`）

仅当合同规定时纳入通风、消防、照明、控制及铁路接口构件；否则关联外部资产。

- 选定流：按规格区分的范围内隧道系统构件
- 流属性/单位：质量或件数 / kg or item
- 数量规则：记录到货、安装数量及测试状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每验收中心线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定系统件数筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：items/centreline-km
  - 基准：随系统范围变化的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 安装与测试能源（`installation_energy`）

记录未归属开挖或供应商制造的能源；披露共享供电及通风时段。

- 选定流：按实际载体区分的施工能源
- 流属性/单位：能量或燃料质量 / kWh, MJ or kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：汇总归属安装与测试的计量能源。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收中心线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定安装能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：kWh-equivalent/centreline-km
  - 基准：随施工方法变化的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收隧道（`accepted_tunnel`）

仅计衬砌、水控制及范围内系统测试完成的里程；待验或剔除段不进入参考产出。

- 选定流：场址验收交通隧道
- 流属性/单位：中心线长度 / centreline-km
- 数量规则：一验收中心线公里；另披露洞公里和系统范围。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收中心线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：参考隧道长度
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：centreline-km/reference flow
  - 基准：定义上的一验收中心线公里
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

##### 废物流

###### 剔除的安装产品（`installation_rejects`）

按产生节点和去向识别缺陷管片、防水膜、混凝土及设备。返工在原节点成环；未修复剔除物只离界一次。

- 选定流：按材料及去向区分的剔除产品
- 流属性/单位：质量 / kg
- 数量规则：核对安装、退回、返工及外运质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收中心线公里
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 数量范围：剔除比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg delivered products
  - 基准：扣除退回与库存后，外运剔除物除以到货产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `shared_equipment` | 跨节点或项目使用的掘进设备、泵、供电及通道 | 列出使用节点和期间；按工时、计量、开挖量或有记录的物理用量归属；比例和为一。 | `mass-balance-identity` |
| `parallel_bores` | 多洞 | 洞特定工程直接归属；不可分公共工程按物理用量或洞公里分摊，不能倍增中心线公里产出。 | `reference-definition` |
| `secondary_inputs` | 再生骨料、钢材或管片材料 | 记录来源、回收交接点和先前负担规则；回收加工仅计一次，不作无依据替代信用。 | `mass-balance-identity` |
| `reject_and_spoil` | 弃渣与缺陷工程 | 默认不把弃渣作验收联产品；按接收方路由回用或处置；返工负担留在产生节点。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_excavation` | `excavation_support` | 开挖服务 | 合同和勘测 | 方法、里程、洞数、体积、服务范围、业主燃料 | 签署合同日志和勘测 | m3, service unit | 每分包 | 开挖至支护验收 | 指定隧道 | 合计无重叠分包 | 勘测和发票 |
| `cp_materials` | `excavation_support`; `lining_handover` | 支护、衬砌、系统 | 到货和竣工 | 规格、质量、安装、退回、库存、再生来源和回收交接点 | 到货及竣工清单 | kg, item, m3 | 每次到货 | 全施工期 | 指定隧道 | 逐产品核对 | 发票和证书 |
| `cp_energy` | `excavation_support`; `lining_handover` | 设备能源 | 表计和燃料日志 | 载体、数量、机器、节点、期间、共享使用者 | 表计和机具日志 | kWh, MJ, kg | 每周 | 开挖至测试 | 指定隧道 | 每载体只归属一次 | 表计和发票 |
| `cp_spoil` | `excavation_support` | 移除地层 | 勘测和运移 | 体积、密度、回用、库存、外运、接收方、分类 | 勘测和地磅 | m3, kg | 每次运移 | 开挖至清运 | 指定隧道 | 核对各去向 | 勘测和票据 |
| `cp_waste` | `lining_handover` | 剔除物 | 废物和返工日志 | 产品、质量、缺陷、节点、退回、返工、接收方 | 地磅和工单 | kg | 每次事件 | 衬砌至移交 | 指定隧道 | 逐产品平衡 | 票据和收据 |
| `cp_acceptance` | `excavation_support`; `lining_handover` | 验收状态 | 勘测和测试 | 端点、洞、里程、断面、支护、水控制、系统、缺陷、签署 | 竣工勘测和签署测试 | centreline-km, bore-km | 每次验收 | 支护至移交 | 验收里程 | 匹配上下游长度 | 图纸和证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `spoil_balance` | 开挖 | 密度换算后的开挖质量 = 场内回用 + 外运 + 库存变化，差额须在有记录容差内。 | 勘测、密度、运移 | kg/centreline-km 及差额 | `mass-balance-identity` |
| `material_balance` | 每类产品 | 到货 + 期初库存 = 安装 + 退回 + 剔除 + 期末库存，差额须在有记录容差内。 | 到货、竣工、退回、废物、库存 | kg/product 及 kg/centreline-km | `mass-balance-identity` |
| `bore_ratio` | 多洞 | 单独披露洞公里 / 中心线公里，不倍增参考产出。 | 验收长度勘测 | bore-km/centreline-km | `reference-definition` |
| `shared_fraction` | 公用资产 | 归属量 = 计量量 × 有记录使用比例；各使用方比例和为一。 | 机具日志与表计 | amount/centreline-km | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope` | 参考产出及接口 | 核查端点、长度、几何、方法、地质、系统和关联道路或铁路资产。 | 设计、竣工及证书 |
| `dq_materials` | 主要投入 | 按规格和再生来源核对支护、衬砌、防水及系统。 | 到货、竣工和废物记录 |
| `dq_time` | 所有阶段 | 使用项目日期、供应商年份并披露缺口。 | 进度、发票和测试 |
| `dq_identity` | 最终交换 | 发布前按平台详情、流类型、交付口、属性和单位核实 UUID。 | 流及支撑引用复核 |
| `dq_shared` | 公共设备 | 证明使用方、服务期间、物理驱动量和单次归属。 | 表计和分配表 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_handover` | 参考产品 | 须有签署验收、端点、中心线公里、洞公里、几何、地层及系统范围；剔除待验里程。 | `unsd-tunnels`; `fhwa-tunnel-manual` |
| `v_interfaces` | 道路及铁路接口 | 核查独立线路、轨道、车站和公用设施数据集无遗漏或重复。 | `unsd-tunnels`; `fhwa-tunnel-manual` |
| `v_balance` | 开挖及材料 | 对密度、回用、库存、退回及剔除物做弃渣和产品平衡。 | `mass-balance-identity` |
| `v_rework` | 缺陷工程 | 验收前将剔除状态连接至返工或一次回收/处置出口。 | `mass-balance-identity` |
| `v_secondary` | 回收投入 | 须有来源、回收交接点及一种负担规则。 | `mass-balance-identity` |
| `v_shared` | 公共设备 | 核查使用方、期间、物理驱动量及和为一的比例。 | `mass-balance-identity` |
| `v_identity` | 最终 UUID | 工厂交付或质量属性流不能识别场址验收、按长度计量的隧道；经详情核实前 UUID 留空。 | `reference-definition` |

## 10. 发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 验收交通隧道的施工阶段前景数据包。 |
| downstream_use | 经具体身份复核后，用作基础设施 process 与 lifecyclemodel 投影中的 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 适用于洞数、几何、方法、地层和系统相符的每验收中心线公里施工评估。 |
| excluded_use | 交通运营、维护、全寿命结论、采矿隧道或独立铁路线路归属。 |
| required_metadata | 端点、中心线公里、洞公里、断面、方法、地质、地下水、衬砌、系统、接口、日期及验收。 |
| required_quality_disclosure | 材料、能源和弃渣完整度；暂定范围；UUID 缺口；再生来源和共享设备归属。 |
| update_trigger | 竣工范围变化、数量更正、供应商替换或参考身份核实。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-tunnels` | official_guidance | UNSD CPC 53222 说明，https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53222 | 隧道类别和相邻排除项。 |
| `fhwa-tunnel-manual` | official_guidance | FHWA，《公路隧道设计与施工技术手册：土木要素》，https://www.fhwa.dot.gov/bridge/tunnel/library.cfm | 开挖、支护、衬砌和水控制问题；不把辖区特定数值普适化。 |
| `mass-balance-identity` | method_factor | 将质量守恒和物理用量核对用于项目记录。 | 弃渣、材料、剔除物和共享资源核查。 |
| `reference-definition` | method_factor | 本 PCR 的验收中心线公里定义及算术归一化。 | 长度、交接和比率计算。 |
