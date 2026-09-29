---
pcr_id: pcr.constructions-and-construction-services.constructions.commercial-buildings
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 商业建筑物

## 1. 范围与适用性

一栋现场建成、验收交付的商业建筑，包括零售店、购物中心、仓库、展馆、办公楼、交通枢纽、停车库和加油服务站建筑。纳入基础、主体、围护、永久固定系统、供应运输、施工、调试和废料。按真实用途及设计采集，不能混用办公楼和仓库的典型值。排除工业及其他非住宅建筑、可移动设备、加油机和储罐、土地价值、运营、维护和拆除；先前修复仅在单独声明时纳入。`src_unsd_53122`；`src_ec_levels`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.commercial-buildings |
| classification_refs | CPC 3.0 53122 商业建筑物 |
| covered_products | 已建成零售、仓库、展览、办公、交通枢纽、停车库及服务站建筑 |
| excluded_products | 工业及其他非住宅建筑；独立设备及车辆；土地和运营 |
| representative_product | 有用途特定主体、围护及固定系统的一栋已验收商业建筑 |
| production_route | 构件供应运输；场地基础；主体围护装配；固定系统、测试和交付 |
| market_state | 现场竣工并可按声明商业用途使用 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 现场验收交付的完整商业建筑 |
| How much | 总建筑面积 1 m2，保留整栋面积和清单 |
| How well | 主体、围护及纳入的固定系统达到声明用途验收要求 |
| How long or cycle | 从施工至签署交付的一个工程；使用寿命另行声明 |
| reference_flow_link | `services_handover` 的 `commercial_building_handover` 输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 已验收总建筑面积 1 m2 |
| 参考产品流 | 现场交付的商业建筑（UUID 未解析） |
| 参考流属性 | 面积（UUID 未解析） |
| 参考单位组 | 面积单位组（UUID 未解析） |
| 参考单位 | m2 |
| 必需限定信息 | 主要用途；场址；面积口径和总量；主体；围护；固定系统；完工日期；验收；排除设备 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measure_area` | 建筑输出 | 面积 | m2 | 采用竣工图和统一披露口径确定已验收总建筑面积。 |
| `measure_material` | 材料和废料 | 质量或附密度的体积 | kg 或 m3 | 按规格核对交付、安装、退回、再用和拒收。 |
| `measure_energy_freight` | 能源和运输 | 载体数量或运输功 | kWh、L、kg 或 tonne-km | 保留表计/运单原单位并披露换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 记录施工前场地及先前清场或修复的排除范围。 |
| starting_condition_role | 本施工工程的起始条件。 |
| product_classification_scope | 一栋已声明主要商业用途的建筑，不是非住宅通用平均值。 |
| recursive_input_rule | 再用或预制构件按真实入场节点计入一次，不递归形成另一完整建筑。 |
| upstream_dataset_requirement | 材料、能源、运输和处理数据集须匹配供应方、地域、技术、状态和节点。 |
| disclosure | 用途、设计、面积、合同范围、场地、再生投入、共享设备、废料、固定系统和交付。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | 全部节点 | 纳入供应、运输、施工和验收前调试；运营与终结情景另行标识。 | `src_ec_levels` |
| `boundary_use` | 建筑 | 纳入合同固定系统；排除可移动租户设备、车辆、储罐/加油机和工业生产设施。 | `src_unsd_53122` |
| `boundary_secondary` | 再生投入 | 声明来源和回收交接，选择一种上游负担或截断方式，不重复计入。 | `src_iso_21930` |
| `boundary_shared` | 施工设备及临时服务 | 列出所有使用节点、建筑和工程期间，按物理使用量分配实测负担一次。 | `src_ec_levels` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `site_foundations` | 场地与基础 | required | 表征合同含基础和场地工程 | 合格基础及土方材料账 | 整栋和每 m2 |
| `shell_assembly` | 主体与围护装配 | required | 主体围护已安装 | 构件集成为合格外壳 | 整栋和每 m2 |
| `services_handover` | 固定系统与交付 | required | 合同含固定系统和测试 | 已验收完整建筑 | 整栋和每 m2 |

### 过程：场地与基础（`site_foundations`）

#### 输入

##### 产品流

###### 基础供应品（`foundation_supplies`）

按供应商和再生来源记录混凝土、钢筋及其他指定基础产品。
- 选定流：基础供应品（UUID 未解析）
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：按竣工基础清单核对交付、安装、退货和拒收。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定基础材料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kg/m2
  - 基准：每 m2 已验收面积的宽泛初筛质量，以设计和实绩为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 土方能源（`ground_energy`）

逐载体采集开挖、吊装、抽水及浇筑的实际电力和燃料。
- 选定流：土方能源载体
- 流属性/单位：能量或载体数量 / kWh、L 或 kg
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按实测工时或表计将共享机械归属本节点一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site`
- 数量范围：暂定土方能耗筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh/m2
  - 基准：每 m2 已验收面积的宽泛初筛等效能耗
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流


#### 输出

##### 产品流

###### 合格基础（`foundation_accepted`）

验收基础是主体装配的中间产物，而非另一完整建筑。
- 选定流：合格基础中间产物（UUID 未解析）
- 流属性/单位：面积 / m2
- 数量规则：记录验收基础占地及对应建筑。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：暂定基础占地核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：m2/m2
  - 基准：基础占地与总建筑面积之比，以竣工几何为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 土方与基础流出（`ground_exits`）

区分土方再用、拒收、退货、回收及处置；内部返工仍归属本节点。
- 选定流：土方及基础废物（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：称量流出物，或以实测体积和密度换算；现场再用不得重复计入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rejects`
- 数量范围：暂定土方流出筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/m2
  - 基准：每 m2 已验收面积的宽泛初筛流出质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：主体与围护装配（`shell_assembly`）

#### 输入

##### 产品流

###### 内部接收的合格基础（`foundation_received`）

从 `site_foundations` 接收合格基础中间产物，此图链接不是第二次购买基础或重复计入上游负担。
- 选定流：合格基础中间产物（UUID 未解析）
- 流属性/单位：面积 / m2
- 数量规则：核对合格基础面积与接收建筑，负担只通过生产节点进入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：内部基础转移核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：m2/m2
  - 基准：接收基础占地相对于合格总建筑面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 主体与围护构件（`shell_components`）

按实际设计分别识别框架、楼板、屋面、幕墙、玻璃及保温材料，并声明再生来源和回收交接。
- 选定流：主体与围护构件（UUID 未解析）
- 流属性/单位：质量和构件面积 / kg 和 m2
- 数量规则：核对供应商交付、竣工清单和安装验收。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定主体质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kg/m2
  - 基准：每 m2 已验收面积的宽泛初筛供应质量，不作为仓库和办公楼共用强度
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 入场运输（`shell_freight`）

按实际模式、载重和路程计算供应商至工地的运输，并披露返程。
- 选定流：货运服务
- 流属性/单位：运输功 / tonne-km
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.transport-service`
- Flow Set version：`0.2.0`
- 数量规则：逐运段、模式汇总实载吨数乘距离。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_freight`
- 数量范围：暂定货运筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：tonne-km/m2
  - 基准：每 m2 已验收面积的宽泛初筛运输功
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格外壳（`shell_accepted`）

验收后的主体和围护交给固定系统工序，失败装配不得进入合格状态。
- 选定流：合格外壳中间产物（UUID 未解析）
- 流属性/单位：面积 / m2
- 数量规则：记录与声明建筑对应的合格外壳面积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：合格外壳面积核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：m2/m2
  - 基准：合格外壳面积不得超过归一化建筑面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`src_ec_levels`

##### 废物流

###### 被拒收主体构件（`shell_rejects`）

将切边及不合格装配归属生产节点，记录返工、供应商退货、回收或处置的唯一去向。
- 选定流：主体与围护拒收材料（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：按供应、合格及替换数量核对退出凭证。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rejects`
- 数量范围：暂定主体废料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/m2
  - 基准：每 m2 已验收面积的宽泛初筛拒收质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：固定系统与交付（`services_handover`）

#### 输入

##### 产品流

###### 内部接收的合格外壳（`shell_received`）

从 `shell_assembly` 接收已验收主体围护作为内部图链接，不再次购买或计入其负担。
- 选定流：合格外壳中间产物（UUID 未解析）
- 流属性/单位：面积 / m2
- 数量规则：将接收外壳与生产节点验收及唯一建筑核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：内部外壳转移核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：m2/m2
  - 基准：接收外壳面积相对合格总建筑面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`src_ec_levels`

###### 建筑固定系统（`fixed_services`）

纳入合同指定的电气、给排水、通风、消防及用途特定固定系统；排除可移动商业设备和服务站储罐/加油机。
- 选定流：建筑固定系统（UUID 未解析）
- 流属性/单位：质量、件数或额定能力 / kg、件或声明单位
- 数量规则：按已批准的竣工系统清单核对安装构件和测试。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定固定系统质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/m2
  - 基准：每 m2 已验收面积的宽泛初筛系统质量，按用途清单为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调试能源（`commissioning_energy`）

仅记录验收前施工测试的燃料和电力，不包括交付后的日常运营。
- 选定流：调试能源载体
- 流属性/单位：能量或载体数量 / kWh、L 或 kg
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：分离施工/测试表计期间与交付后的用户能耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site`
- 数量范围：暂定调试能耗筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh/m2
  - 基准：每 m2 已验收面积的宽泛初筛等效能耗
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已交付商业建筑（`commercial_building_handover`）

签署验收且符合范围的建筑是唯一最终参考输出，保留竣工面积和验收证据。
- 选定流：现场交付的完整商业建筑（UUID 未解析）
- 流属性/单位：面积 / m2
- 数量规则：将整栋建筑清单归一化至已验收总建筑面积 1 m2。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：参考面积恒等核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：m2/m2
  - 基准：已验收参考输出的一个归一化单位
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`src_ec_levels`

##### 废物流

###### 固定系统废料（`service_rejects`）

安装或测试失败的构件和包装进入复验、退货、回收或处置，不纳入合格输出。
- 选定流：安装与测试废料（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：称量最终流出并与系统替换和退货记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 已验收总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rejects`
- 数量范围：暂定系统废料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/m2
  - 基准：每 m2 已验收面积的宽泛初筛废料质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocate_shared` | 吊机、发电机、临时服务和场地工程 | 列出使用节点、建筑及工程期间；按实测工时/表计或披露的物理代理分配；份额与总量相符。 | `src_ec_levels` |
| `allocate_secondary` | 再生构件 | 记录原用途和回收交接，选用一种上游负担或截断规则，本期运输/加工只加一次。 | `src_iso_21930` |
| `allocate_rework` | 被拒收装配 | 原始负担留在生产节点，返工增量只加一次，仅复验合格状态进入下游；最终流出不是建筑联产品。 |  |
| `allocate_multiple` | 分别交付的建筑 | 每栋分别计量，按实际使用量分配共享工作，不采用办公楼/仓库混合平均值。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | 所有三个节点 | 供应材料和固定系统 | 图纸、工程量清单、票据 | use; product; grade; supplier; delivered; installed; secondary_origin; recovery_handoff | 交付与竣工清单核对 | kg; m3; item | 每次交付 | 整项工程 | 建筑和供应商 | 按产品/节点汇总，退回与拒收分列 | 票据、图纸、声明 |
| `cp_site` | `site_foundations`; `services_handover` | 施工/测试能源 | 表计、燃料和设备记录 | carrier; quantity; unit; node; period; equipment_hours | 表计票据与工时核对 | kWh; L; kg; h | 表计期/班次 | 至验收 | 工地 | 按载体/节点汇总，共享量只计一次 | 读数、发票、日志 |
| `cp_freight` | `shell_assembly` | 入场运输 | 运单 | product; mode; load_t; leg_km; return | 供应与路线核对 | t; km | 每运段 | 整项工程 | 供应商至工地 | 吨数乘距离逐段汇总 | 运单、路线 |
| `cp_rejects` | 所有三个节点 | 拒收和流出 | 验收、地磅 | node; material; mass; rework; return; recovery; disposal; destination | 材料平衡核对 | kg | 每事件 | 整项工程 | 工地/处理商 | 最终流出只计一次 | 验收、收据 |
| `cp_acceptance` | 所有三个节点 | 合格状态 | 竣工图、签收 | use; area_m2; area_convention; foundation; shell; systems; test; date | 签署验收及面积核对 | m2; date | 每里程碑 | 至交付 | 单栋 | 合格面积只计一次 | 图纸、签署交付 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area` | 清单 | 整栋数量除以已验收总建筑面积，同时保留总量。 | quantity; area_m2 | 每 m2 数量 | `src_ec_levels` |
| `calc_balance` | 材料 | 交付 = 安装 + 拒收流出 + 供应商退货 + 库存变化，内部再用只计一次。 | delivery; install; exit; return; stock | 核对后质量 |  |
| `calc_freight` | 运输 | 逐运段/模式汇总实载吨数乘里程，披露返程处理。 | load_t; leg_km; mode | tonne-km |  |
| `calc_shared` | 共享资产 | 工程期间按物理使用量将实测总量分给所有使用者，份额合计为总量。 | asset total; users; period | 节点/建筑份额 | `src_ec_levels` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_identity` | 输出 | 核实主要商业用途、固定系统、面积方法和已验收节点。 | 合同、图纸、验收 |
| `quality_route` | 过程清单 | 使用实际主体、围护和系统范围，不套用跨用途通用强度。 | 竣工清单、供应票据 |
| `quality_rejects` | 材料 | 核对合格、返工、退回和处置状态，不重复计入。 | 日志、地磅收据 |
| `quality_uuid` | 最终交换 | 确认每一 UUID 及 Flow Set 展开项的流类型、交付节点、属性和单位。 | 平台详情及支持行 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 完整建筑 | 核对主要商业用途，分离工业工程、土地及可移动设备。 | `src_unsd_53122` |
| `validate_handover` | 参考流 | 要求签署验收和实测面积，排除交付后能耗及维护。 | `src_ec_levels` |
| `validate_route` | 所有节点 | 对照竣工量核查用途特定主体、围护和系统，不采用仓库/办公楼混合默认值。 |  |
| `validate_rework` | 拒收物 | 每个拒收状态有相连的复验、退货、回收或处置路径。 |  |
| `validate_secondary` | 再生投入 | 核查来源、回收交接和单一负担处理。 | `src_iso_21930` |
| `validate_shared` | 共享资源 | 列出全部使用者和期间，分配份额与记录总量相符。 |  |
| `validate_binding` | 交换 | 未核实 UUID 留空；参数化载体和运输仅展开成已核实身份。 |  |
| `validate_range` | 数量 | 暂定 Range 仅作核查触发条件，不作为通用建筑强度因子。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一栋已验收商业建筑的前景施工数据集 |
| downstream_use | `secondary_dataset`；代表性和身份审核后可作 `background_dataset` |
| allowed_use | 匹配用途、设计、地域、固定系统、面积口径及节点的施工阶段模型 |
| excluded_use | 未单独建模的运营/终结、工业建筑及不相干商业用途结论 |
| required_metadata | 场址；用途；面积；设计；固定系统；日期；验收；供应商；再生来源；共享资源；排除项 |
| required_quality_disclosure | 来源覆盖；换算；缺失数据；未解析 UUID；材料平衡；废料；分配；暂定范围 |
| update_trigger | 核实参考 UUID、边界或设计变化、新数量证据、Flow Set 或分配规则变更 |

## 11. 数据来源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `src_unsd_53122` | official_guidance | UNSD CPC 2.1 53122, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53122 | 产品范围示例；以仓库内 CPC 3.0 leaf 为分类依据 |
| `src_ec_levels` | official_guidance | European Commission Level(s), https://green-forum.ec.europa.eu/green-business/levels_en | 建筑生命周期边界和报告背景 |
| `src_iso_21930` | standard | ISO 21930:2017, https://www.iso.org/standard/61694.html | 建材 EPD 与再生材料方法背景，不提供数量因子 |
