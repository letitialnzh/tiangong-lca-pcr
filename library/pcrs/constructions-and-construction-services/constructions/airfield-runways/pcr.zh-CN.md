---
pcr_id: pcr.constructions-and-construction-services.constructions.airfield-runways
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 飞行区跑道及相关铺面

## 1. 适用范围

覆盖经现场验收的连续跑道、滑行道或停机坪铺面及同一计量合同内相关非建筑物构筑物。须声明资产类型、竣工面积与几何尺寸、飞机荷载等级、结构层及验收关口。场地准备、柔性或刚性铺面和合同内标线属于路线；排水、灯光仅在合同内且实际计量时纳入。不含机场建筑物、飞机、运营、后续维护及独立计量系统。[unsd-53213; faa-ac-150-5370-10]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.airfield-runways |
| classification_refs | CPC 3.0 53213，机场跑道。 |
| covered_products | 验收的跑道、滑行道、停机坪铺面及合同内非建筑物构筑物。 |
| excluded_products | 机场建筑物、飞机、运营、后续维护和独立计量灯光或导航资产。 |
| representative_product | 指定连续区段内验收合格的 1 m2 跑道铺面。 |
| production_route | 准备路基与排水；铺设设计基层和柔性或刚性面层；完成表面处理与检验。 |
| market_state | 指定场址已安装并验收的飞行区基础设施。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 现场验收的飞行区铺面资产。 |
| How much | 验收合格平面铺筑面积 1 m2；另报告连续区段总面积。 |
| How well | 规定的承载、结构层、表面、标线和几何检验合格。 |
| How long or cycle | 一个施工合同至签署交付；使用寿命属于单独情景。 |
| reference_flow_link | `finish_handover` 的 `accepted_airfield_pavement`。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 m2 验收合格的飞行区铺面 |
| Reference product flow | 现场验收的飞行区铺面；UUID 未解析 |
| Reference flow property | 面积；UUID 未解析 |
| Reference unit group | 面积；UUID 未解析 |
| Reference unit | m2 |
| Required qualifiers | 跑道、滑行道或停机坪类型；连续区段；竣工面积、宽和长；飞机荷载等级；柔性或刚性结构层；排水、灯光和标线范围；验收日期及场址。 |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_area` | 参考产品 | 面积，UUID 未解析 | m2 | 验收合格的平面足迹只测量一次；重叠层不倍增面积。 |
| `layer_mass` | 材料与废物 | 质量 | kg | 核对交付、安装、退回和拒收量；体积按项目密度换算。 |
| `site_energy` | 施工机械 | 能量或燃料质量 | kWh, MJ or kg | 按载体分开，不重复外包服务中的燃料。 |
| `freight_work` | 材料运输 | 质量 × 距离 | t·km | 交付吨数乘以装载距离，并披露返程处理。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 合同开始时测绘的原地面或原有铺面、地下条件及拆除或修复状态。 |
| starting_condition_role | 物理基线，而非无负担完工跑道投入。 |
| product_classification_scope | 一个验收合格的飞行区铺面区段，而非整个机场。 |
| recursive_input_rule | 采购铺面组分从供应关口进入；另一条完工铺面不可作为未经说明的原料。 |
| upstream_dataset_requirement | 按实际规格链接骨料、沥青或混凝土、标线、能源、运输、施工服务和废物处理数据集。 |
| disclosure | 记录初始状态、设计、所含资产与接口、再生投入、共用工程、截断及缺口。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | 整体资产 | 纳入准备、铺设、表面完成、检验和返工至签署验收；排除使用、维护和寿命终结。 | `unsd-53213`; `faa-ac-150-5370-10` |
| `asset_interfaces` | 排水、灯光及构筑物 | 仅纳入合同内实际计量项目；独立系统与建筑物应链接而非默默纳入。 | `unsd-53213`; `faa-ac-150-5370-10` |
| `internal_handoff` | 相继过程 | 路基检验后交给铺筑；结构层检验后交给表面完成；内部交接不产生第二最终产品。 | `faa-ac-150-5370-10` |
| `secondary_shared` | 再生投入和共用机械 | 声明回收关口、负担惯例，并按过程及服务期仅分摊一次。 | `faa-ac-150-5370-10` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `formation` | 场地与路基准备 | required | 测绘基线至检验合格地基。 | 土方、路基和合同内排水。 | 验收面积与土方记录。 |
| `paving` | 铺面层集成 | required | 合格地基至检验合格已铺面层。 | 组合底基层、基层、面层并处理缺陷。 | 验收面积与结构层记录。 |
| `finish_handover` | 表面完成及验收 | required | 已检验面层至签署交付。 | 施作合同内标线、检验并修正。 | 验收面积与完成记录。 |

### 过程：场地与路基准备（`formation`）

#### 输入

##### 产品流

###### 地基与排水产品（`formation_products`）

按规格记录骨料、土工布、稳定材料及排水产品；再生投入需要来源证据。

- 选定流：按竣工项目的地基产品
- 流属性/单位：质量 / kg
- 数量规则：核对交付、安装、退回及损耗质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：地基材料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/m2
  - 基准：暂定宽泛项目筛查范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 土方服务（`earthwork_service`）

仅用于未同时记录直接机械燃料的外包工程。

- 选定流：挖方与压实施工服务
- 流属性/单位：合同工程量 / 声明单位
- 绑定：参数化（`parameterized`）
- Flow Set：`flow-set.construction-service`
- Flow Set version: `0.2.0`
- 数量规则：记录审核通过的工单量与合同单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`
- 数量范围：土方服务筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：declared service units/m2
  - 基准：确定合同单位后的暂定筛查范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 地基施工能源（`formation_energy`）

按载体记录直接机械燃料及电力，排除外包服务能源。

- 选定流：按实际载体的施工能源
- 流属性/单位：能量或燃料质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：汇总分配至地基工程的计量与日志用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：地基能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kWh-equivalent/m2
  - 基准：宽泛暂定机械能源范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格地基（`accepted_formation`）

仅通过检验的地基内部交给铺筑；并非第二最终参考产品。

- 选定流：检验合格的飞行区铺面地基
- 流属性/单位：面积 / m2
- 数量规则：记录路基检验关口的合格面积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：内部地基覆盖量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：m2/m2 reference
  - 基准：每验收 m2 对应合格地基
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`faa-ac-150-5370-10`

##### 废物流

###### 外运弃土（`spoil_export`）

现场回用土仍留在地基平衡内；外运料只对应一个接收方。

- 选定流：按去向的开挖土或移除铺面
- 流属性/单位：质量 / kg
- 数量规则：核对开挖、回用、库存和外运过磅质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 数量范围：外运弃土筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/m2
  - 基准：受地基条件影响的宽泛暂定范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：铺面层集成（`paving`）

#### 输入

##### 产品流

###### 合格地基交接（`formation_handoff`）

内部消耗 `accepted_formation` 一次，不附加另一上游产品数据集。

- 选定流：检验合格的飞行区铺面地基
- 流属性/单位：面积 / m2
- 数量规则：按测绘区段匹配地基输出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_acceptance`
- 数量范围：内部交接相等约束
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：m2/m2 reference
  - 基准：地基输出与铺筑投入配对
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`faa-ac-150-5370-10`

###### 铺面层产品（`layer_products`）

按柔性或刚性结构层分别记录骨料、沥青混合料、混凝土、钢筋和接缝产品；再生材料需要来源与回收交接。

- 选定流：按层位与规格的铺面产品
- 流属性/单位：质量 / kg
- 数量规则：逐层核对进料、安装、退回和拒收质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：铺面产品质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/m2
  - 基准：依结构层变化的暂定范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 材料货运（`material_freight`）

按实际方式和路线记录交付材料；排除已包含在供应商数据集的运输。

- 选定流：按方式与路线的材料运输服务
- 流属性/单位：运输功 / t·km
- 绑定：参数化（`parameterized`）
- Flow Set：`flow-set.transport-service`
- Flow Set version: `0.2.0`
- 数量规则：交付吨数乘以装载距离。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_freight`
- 数量范围：运输功筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：t·km/m2
  - 基准：依路线变化的宽泛暂定范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 铺筑能源（`paving_energy`）

记录直接运行的拌和、摊铺和碾压设备，不重复供应商工厂能源。

- 选定流：按载体的铺筑燃料与电力
- 流属性/单位：能量或燃料质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：将计量表和设备日志分配至铺筑。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：铺筑能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kWh-equivalent/m2
  - 基准：宽泛暂定场地能源范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 检验合格的已铺面层（`laid_pavement`）

完成结构层检验后内部交给表面完成；不合格部分仍在返工环节。

- 选定流：已铺设并检验的飞行区铺面
- 流属性/单位：面积 / m2
- 数量规则：记录通过厚度、压实或强度检验的面积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：内部已铺面积
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：m2/m2 reference
  - 基准：交给表面完成的检验合格铺面
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`faa-ac-150-5370-10`

##### 废物流

###### 拒收铺面材料（`paving_rejects`）

不合格混合料或拆除面层按记录返工、回收或处置；拒收面积不计入验收输出。

- 选定流：按去向的拒收铺面材料
- 流属性/单位：质量 / kg
- 数量规则：称量拒收负载，记录处理或返回路径。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 数量范围：拒收铺面筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/m2
  - 基准：宽泛暂定拒收范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：表面完成及验收（`finish_handover`）

#### 输入

##### 产品流

###### 已铺面层交接（`laid_handoff`）

内部消耗 `laid_pavement` 一次；表面完成不重复结构层材料负担。

- 选定流：已铺设并检验的飞行区铺面
- 流属性/单位：面积 / m2
- 数量规则：按测绘区段匹配铺筑输出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_acceptance`
- 数量范围：内部铺面交接相等约束
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：m2/m2 reference
  - 基准：铺筑输出与表面投入配对
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`faa-ac-150-5370-10`

###### 标线及附属产品（`finishing_products`）

按规格记录涂料、玻璃珠、密封料和合同内嵌入件；不含独立采购系统。

- 选定流：飞行区标线与合同内附属产品
- 流属性/单位：质量或件数 / kg or item
- 数量规则：核对领用、安装、退回与残余数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：表面产品筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg-equivalent/m2
  - 基准：按单件质量换算的宽泛暂定范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格飞行区铺面（`accepted_airfield_pavement`）

仅已签署、测绘和检验合格的铺面为参考输出；不合格区段继续返工。

- 选定流：现场验收的飞行区铺面
- 流属性/单位：面积 / m2
- 数量规则：将合格平面面积归一化为 1 参考 m2。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`faa-ac-150-5370-10`
- 数量范围：参考产品恒等关系
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：m2/m2 reference
  - 基准：按定义的每 1 验收 m2
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`faa-ac-150-5370-10`

##### 废物流

###### 表面处理残余物（`finishing_residues`）

按物质和接收方记录过量标线材料及清除的不合格表面层。

- 选定流：按材料与去向的表面废物
- 流属性/单位：质量 / kg
- 数量规则：核对领用产品与安装、退回、废弃量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 m2
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 数量范围：表面残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/m2
  - 基准：宽泛暂定损失范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_asset` | 施工输出 | 计量工程归于验收区段；独立计量资产应链接而非全部分配至此。 | `unsd-53213` |
| `rework_reject` | 不合格材料 | 返工负担留在产生过程，追踪回收或处置去向，失败面积不计入验收面积。 | `faa-ac-150-5370-10` |
| `secondary_input` | 再生沥青与骨料 | 声明来源、回收关口及前系统负担或截断惯例；仅计算一次。 | `faa-ac-150-5370-10` |
| `shared_plant` | 共用拌和站、施工便道或公用设施 | 识别地基、铺筑和表面过程的使用方与服务期，按计量使用或工程量仅分摊一次。 | `faa-ac-150-5370-10` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | `formation`, `paving`, `finish_handover` | 材料投入 | 清单、交付及竣工 | 项目、层位、质量、件数、密度、交付、安装、退回、来源 | 核对供应票据与测量 | kg, m3, item | 每批 | 开工至验收 | 计量区段 | 净安装量加损失 | 签署票据与竣工记录 |
| `cp_services` | `formation` | 采购施工 | 合同计量 | 工程项、承包商、单位、数量、设备范围 | 核准工程量 | contract unit | 每工单 | 地基工程期 | 区段 | 汇总不重叠项目 | 核准支付记录 |
| `cp_energy` | `formation`, `paving`, `finish_handover` | 直接能源 | 计量表与机械日志 | 载体、数量、过程、共用工时 | 核对计量表及发票 | kWh, MJ, kg | 每日或账期 | 开工至验收 | 场址及共用机械 | 按过程使用仅分配一次 | 计量与燃料票据 |
| `cp_freight` | `paving` | 货运 | 运单 | 质量、方式、起讫地、装载距离、供应商范围 | 核对交付票据 | t, km, t·km | 每交付 | 材料交付期 | 供应链 | 质量 × 距离仅汇总一次 | 运输凭证 |
| `cp_waste` | `formation`, `paving`, `finish_handover` | 弃土与拒收 | 过磅与转移单 | 类型、质量、过程、返工或接收方 | 核对移出与去向 | kg | 每次转移 | 开工至验收 | 场址及接收方 | 外运仅计一次 | 转移回执 |
| `cp_acceptance` | `formation`, `paving`, `finish_handover` | 交接与最终输出 | 测量与检验 | 区段、面积、厚度、承载、强度、标线、缺陷、签署日期 | 测量及检验 | m2 and test units | 每验收点 | 开工至交付 | 连续区段 | 汇总不重叠合格面积 | 签署检验与交付 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_area` | 每个流 | 实测量除以签署验收面积，拒收及返工仍保留在分子。 | 数量与验收面积 | Quantity/m2 | `faa-ac-150-5370-10` |
| `mass_conversion` | 体积或件数 | 使用记录密度或单件质量，不假设统一层厚。 | 体积或件数与密度或单件质量 | kg | `faa-ac-150-5370-10` |
| `freight_calculation` | 交付 | 汇总不重复的装载质量 × 距离。 | 运单吨数与公里数 | t·km/m2 | `faa-ac-150-5370-10` |
| `internal_balance` | 过程接口 | 地基输出等于铺筑投入；已铺面层输出等于表面投入。 | 验收点测量面积 | 配对的内部 m2 | `faa-ac-150-5370-10` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | 资产与结构层 | 声明资产用途、几何、飞机荷载等级、层次及验收范围。 | 竣工设计与签署交付 |
| `completeness` | 所有过程 | 覆盖纳入的工作包，退回、废物与共用设备仅追踪一次。 | 合同核对 |
| `measurement` | 面积与质量 | 使用不重叠的验收面积和有凭据的换算参数。 | 测量、票据及密度试验 |
| `temporal` | 所有记录 | 与施工及交付日期对齐，披露替代数据。 | 带日期日志与发票 |
| `gaps` | 未解析数据 | 发布前披露缺失 UUID、供应商数据及暂定范围。 | 缺口登记 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_test` | 参考产品 | 要求签署验收、面积测量及承载、表面与标线试验；不合格面积不得验收。 | `faa-ac-150-5370-10` |
| `handoff_balance` | 三个过程 | 每个内部输出面积须与下个过程投入匹配，不另计最终产品。 | `faa-ac-150-5370-10` |
| `material_balance` | 投入与废物 | 交付量 = 安装量 + 退回量 + 拒收量 + 库存变化；拒收须链接返工、回收或处置。 | `faa-ac-150-5370-10` |
| `secondary_shared_check` | 再生投入与共用机械 | 核对来源、回收关口、负担惯例、使用方及服务期，检查重复负担。 | `faa-ac-150-5370-10` |
| `scope_check` | 相邻资产 | 排除或链接建筑物、飞机与独立系统，不计为铺面层。 | `unsd-53213` |

## 10. 发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 现场验收飞行区铺面的施工阶段前景数据包。 |
| downstream_use | 机场基础设施 process 或 lifecycle model 的二级或背景数据集。 |
| allowed_use | 铺面类型、飞机荷载、层次、地理及合同范围相符时使用。 |
| excluded_use | 飞机运行、建筑物、维护或未经调整的其他铺面设计。 |
| required_metadata | 场址、区段、验收面积、设计、纳入系统、日期、供应商和 UUID 证据。 |
| required_quality_disclosure | 原始记录覆盖率、换算、未解析 UUID、暂定范围及共用与再生材料分配。 |
| update_trigger | 设计、范围、供应路线、验收关口、再生投入或已验证流身份变更。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-53213` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53213 | 类别与建筑物边界。 |
| `faa-ac-150-5370-10` | official_guidance | https://www.faa.gov/airports/engineering/construction_standards | 机场施工项目与验收记录结构。 |
