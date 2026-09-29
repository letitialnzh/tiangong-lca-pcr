---
pcr_id: pcr.constructions-and-construction-services.constructions.highways-except-elevated-highways-streets-and-roads
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非高架公路、街道和道路

## 1. 范围与适用性

本 PCR 适用于在现场完成并经移交、可以通行的非高架公路、街道、道路，以及有铺面的停车场、车道、人行道和自行车道。范围可包括道路附属排水、安全设施及明确纳入的车行或人行下穿、跨线设施。应申报起讫桩号、长度、铺面宽度和面积、结构层材料与厚度、功能或交通等级及验收证据。不包括高架公路、公路隧道；参考产品不是铺路材料、单独出售的施工服务、道路运营或养护。 [unsd-cpc-53211; fhwa-lca-pave]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.highways-except-elevated-highways-streets-and-roads |
| classification_refs | CPC 3.0:53211 |
| covered_products | 非高架公路、街道和道路；有铺面的停车场、车道、人行及自行车道；附属安全设施及明确纳入的下穿、跨线设施 |
| excluded_products | 高架公路、公路隧道、独立桥梁、铁路和跑道、铺路产品、施工服务、道路使用及后期养护 |
| representative_product | 含明确排水及安全设施范围的一段已验收非高架沥青道路 |
| production_route | 土方与压实路基、路面结构层组合、表面完工及移交。同一面积采用刚性混凝土替代沥青面层时，须改列材料、设备、养护、废物和试验要求。 |
| market_state | 现场已验收的可通行土木资产；交通使用及设计寿命情景另行处理 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 指定现场的一段已完成非高架道路或铺面通道 |
| How much | 一段已验收道路；另报中心线长度 m 和铺面面积 m2 用于强度计算 |
| How well | 符合申报的交通/功能等级、结构层、排水及安全验收标准 |
| How long or cycle | 一个施工项目至签署开放或移交；使用寿命另列 |
| reference_flow_link | `finish_handover` 已验收产出，只计一次 |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 已完成非高架道路路段 |
| Reference flow property | 件数 |
| Reference unit group | 件数单位组 |
| Reference unit | segment |
| Required qualifiers | 场址与线路；起讫桩号；道路类型；中心线长度；车行道、路肩及路径宽度和面积；结构层材料和厚度；交通/功能等级；排水、标线、安全范围；验收日期 |

平台中尚未核实与现场移交 gate、计量属性和支撑记录相符的 Product 流，故 UUID 留空。面积或长度强度不能取代“一段”的参考量。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `segment_count` | 参考产出 | 件数 | segment | 在申报桩号内计一次连续已验收路段，不把各层分别计成道路。 |
| `pavement_geometry` | 几何/强度 | 长度与面积 | m, m2 | 分断面按实测长度与宽度算面积；区分车行道、路肩及路径。 |
| `layer_mass` | 材料与废物 | 质量 | kg | 用实测面积、厚度和密度核对交付、退回、安装及报废量。 |
| `energy_conversion` | 燃料与电力 | 能量 | MJ or kWh | 保留能源载体及有据可查的换算系数。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 施工前的测绘线路；既有路面、拆除、污染及保留结构另行申报 |
| starting_condition_role | 前景现场工程的物理起点 |
| product_classification_scope | 申报桩号内一段可通行非高架道路或通道，含规定的附属排水和安全设施 |
| recursive_input_rule | 外购已完成路段仅在被改造时计为上游产品；既有长度不得再计一次产出。 |
| upstream_dataset_requirement | 材料、货运、能源、施工服务及废物处理数据集的交付 gate、路线及地域须相容。 |
| disclosure | 起始条件、竣工几何与结构层、共享拌合站、再生材料来源、废物、试验及移交。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | 全部过程 | 包括由相容上游数据集表示的材料、进场运输、现场工程、结构层施工、完工、废物及移交前验收；使用、养护和寿命终结另列情景。 | fhwa-lca-pave |
| `assembly_handoff` | `layer_assembly` | 压实路基是母体；供入的基层、面层、排水及安全部件组合成尚未开放的道路。 | fhwa-lca-pave |
| `finish_handoff` | `finish_handover` | 已组合道路为母体；标线、最终处理、试验和缺陷关闭形成已验收可通行道路。 | fhwa-lca-pave |
| `alternative_surface` | 刚性/柔性面层 | 同一面积的混凝土与沥青面层路线互斥；相对于 `layer_assembly` 记录材料、设备、养护/压实、残余物及试验差异。 | fhwa-lca-pave |
| `secondary_origin` | 再生沥青及骨料 | 申报既往用途、回收移交及截断或继承点；既往生命周期负担不得重复导入。 | fhwa-lca-pave |
| `shared_plant` | 拌合站、机械和公用设施 | 识别各消费节点/项目及服务期间，按产量或工时将记录用量分摊一次。 | fhwa-lca-pave |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `formation` | 土方与路基 | required | 既有路基若不在合同内必须披露 | 准备并检查压实的母体路基 | 测绘面积与挖填质量 |
| `layer_assembly` | 路面及部件组合 | required | 按设计选沥青或刚性混凝土路线 | 组合结构层、排水及安全部件并记录技术路线差异 | 安装面积、厚度和质量 |
| `finish_handover` | 完工与开放 | required | 完工、试验并关闭缺陷 | 移交可通行已验收路段 | 一份签署的移交记录 |

### 过程：土方与路基（`formation`）

#### 输入

##### 产品流

###### 外购填料与路基材料（`formation_fill`）

按实际填料类型拆分；现场再利用弃土是内部转移，不是外购材料。

- 选定流：外购填料和路基材料
- 流属性/单位：质量 / kg
- 数量规则：交付量减退货及库存变动
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`fhwa-lca-pave`
- 数量范围：暂定填料质量筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000000000
  - 单位：kg
  - 基准：每已完成路段，取决于实际挖填几何
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

#### 输出

##### 产品流

###### 已验收压实路基（`formation_handoff`）

此受检母体向结构层组合过程内部移交，不作为第二条道路出售。

- 选定流：已验收压实路基
- 流属性/单位：面积 / m2
- 数量规则：通过压实试验的测绘准备面积
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_geometry_acceptance`
- 来源：`fhwa-lca-pave`
- 数量范围：暂定路基面积筛查
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：100000000
  - 单位：m2
  - 基准：每已完成路段
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 外运弃土（`spoil_export`）

按检测和去向区分清洁再用土、场外废物及污染弃土。

- 选定流：按去向分列的外运弃土
- 流属性/单位：质量 / kg
- 数量规则：过磅外运量扣除内部再用
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`fhwa-lca-pave`
- 数量范围：暂定弃土筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000000000
  - 单位：kg
  - 基准：每已完成路段及申报的地质条件
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：路面及部件组合（`layer_assembly`）

#### 输入

##### 产品流

###### 向路面组合移交的已验收路基（`formation_input`）

从 `formation` 接收经检查的压实路基作为内部母体。将面积与桩号同上游合格产出核对；不得把其材料、能源或土方负担作为外购产品重新计入。

- 选定流：已验收压实路基
- 流属性/单位：面积 / m2
- 数量规则：进入结构层组合的已验收路基面积，与 `formation_handoff` 核对
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_geometry_acceptance`
- 来源：`fhwa-lca-pave`
- 数量范围：暂定内部路基移交面积筛查
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：100000000
  - 单位：m2
  - 基准：每已完成路段，须匹配已验收路基产出
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 原生路面材料（`virgin_layer_materials`）

按竣工结构层拆分实际骨料、沥青、水泥、混凝土、钢筋及排水材料；不得重复计互斥面层。

- 选定流：交付的原生路面材料
- 流属性/单位：质量 / kg
- 数量规则：按材料和层位的交付质量扣除退货
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`fhwa-lca-pave`
- 数量范围：暂定原生材料筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000000000
  - 单位：kg
  - 基准：每已完成路段，先按材料/层位拆分
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 再生路面材料（`secondary_layer_materials`）

有条件使用的再生沥青或骨料须说明来源、既往用途、回收移交、组分和交付质量。

- 选定流：供应的再生路面材料
- 流属性/单位：质量 / kg
- 数量规则：按层位计量的合格再生材料
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`fhwa-lca-pave`
- 数量范围：暂定再生材料筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000000000
  - 单位：kg
  - 基准：每已完成路段；无再生材料时为零
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 材料公路货运（`material_freight`）

记录供应商至现场的实际卡车载重和里程；已包含在到场产品数据集中的运输不得重复计。

- 选定流：公路货运服务
- 流属性/单位：运输工作量 / t*km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- 数量规则：各车次吨数乘路线公里数并求和
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_freight`
- 来源：`fhwa-lca-pave`
- 数量范围：暂定货运工作量筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000000000
  - 单位：t*km
  - 基准：每已完成路段，不含已经内嵌的交付
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 铺路能源载体（`paving_energy`）

按实际载体和作业记录电力与机械燃料；共享拌合站仅分摊一次，扣除外购服务已含能源。

- 选定流：施工能源载体
- 流属性/单位：能量 / MJ or kWh
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按载体及作业汇总电表和燃料日志
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_plant_services`
- 来源：`fhwa-lca-pave`
- 数量范围：暂定铺路能源筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000000000
  - 单位：MJ
  - 基准：每已完成路段，完成载体换算后
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

#### 输出

##### 产品流

###### 开放前已组合道路（`assembled_road`）

基层、面层、排水和安全设施已安装，是完工母体；仍待最终验收。

- 选定流：已组合道路阶段
- 流属性/单位：面积 / m2
- 数量规则：通过结构层检查的实测安装面积
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_geometry_acceptance`
- 来源：`fhwa-lca-pave`
- 数量范围：暂定已组合面积筛查
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：100000000
  - 单位：m2
  - 基准：每已完成路段
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 拒收铺路材料（`paving_rejects`）

按组分及再用、退货或处理去向追踪不合格混合料、破损构件与包装。

- 选定流：按材料和去向分列的铺路拒收物
- 流属性/单位：质量 / kg
- 数量规则：外运拒收物扣除内部返工
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`fhwa-lca-pave`
- 数量范围：暂定铺路拒收物筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000000
  - 单位：kg
  - 基准：每已完成路段
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：完工与开放（`finish_handover`）

#### 输入

##### 产品流

###### 向完工过程移交的已组合道路（`assembled_road_input`）

从 `layer_assembly` 接收已检查的安装道路作为内部母体。将面积和结构同 `assembled_road` 核对；不得重复计入其先前的材料、运输、能源或施工负担。

- 选定流：已组合道路阶段
- 流属性/单位：面积 / m2
- 数量规则：进入完工过程的已检查道路面积，与 `assembled_road` 核对
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_geometry_acceptance`
- 来源：`fhwa-lca-pave`
- 数量范围：暂定内部已组合道路移交面积筛查
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：100000000
  - 单位：m2
  - 基准：每已完成路段，须匹配已组合道路产出
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 标线及完工材料（`finish_materials`）

记录实际涂料、玻璃珠、密封料及触觉设施；无单独完工材料时为零。

- 选定流：交付的道路完工材料
- 流属性/单位：质量 / kg
- 数量规则：按材料类型记录交付量减退货
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`fhwa-lca-pave`
- 数量范围：暂定完工材料筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000000
  - 单位：kg
  - 基准：每已完成路段
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

#### 输出

##### 产品流

###### 已完成道路路段（`completed_road`）

完成结构层、表面、排水、安全及通行试验并签署移交后只计一次。

- 选定流：已完成非高架道路路段
- 流属性/单位：件数 / segment
- 数量规则：一段已验收连续路段
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_geometry_acceptance`
- 来源：`unsd-cpc-53211`
- 数量范围：已验收路段数量
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：segment
  - 基准：每已验收完成路段
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`unsd-cpc-53211`

##### 废物流

###### 完工残余物（`finish_residue`）

按组分与去向区分未用涂料、容器及不合格标线。

- 选定流：按去向分列的道路完工残余物
- 流属性/单位：质量 / kg
- 数量规则：过磅残余物扣除退回和内部再用
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每已完成路段
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`fhwa-lca-pave`
- 数量范围：暂定完工残余物筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000000
  - 单位：kg
  - 基准：每已完成路段
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

## 7. 分配及联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_asset` | 道路产出 | 不把各层分配成其他道路产品；长度和面积强度均属于同一路段。 | fhwa-lca-pave |
| `shared_asset` | 共享拌合站和公用设施 | 覆盖全部消费对象及期间，按实测产量或工时分摊，合计只等于一次实际记录负担。 | fhwa-lca-pave |
| `secondary_burden` | 再生投入 | 记录来源、回收 gate 与截断/继承惯例，避免既往生命周期重复计入。 | fhwa-lca-pave |
| `reject_rework` | 不合格工程 | 保留失败尝试的材料和能耗，追踪返工及去向，不把拒收物计入合格产出。 | fhwa-lca-pave |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_geometry_acceptance` | `formation`, `layer_assembly`, `finish_handover` | 几何及阶段验收 | 测绘与试验 | 桩号、宽度、面积、厚度、密度、功能等级、试验、移交 | 核对竣工测绘及证书 | m, m2, mm, segment | 每阶段 | 全施工期 | 线路 | 不重复汇总已验收断面 | 签署的测绘和试验 |
| `cp_materials` | `formation`, `layer_assembly`, `finish_handover` | 填料、结构层、完工材料 | 交付及竣工台账 | 类型、供应 gate、质量、退货、层位、再生来源、安装量 | 核对票据与结构层 | kg | 每次交付 | 全施工期 | 路段/供应商 | 按材料交付减退货/库存 | 发票、票据、芯样 |
| `cp_plant_services` | `formation`, `layer_assembly` | 机械及能源 | 电表、燃料和设备日志 | 载体、燃料、工时、作业、消费对象、期间 | 现场及承包商日志 | MJ, kWh, h | 班次/期间 | 全施工期 | 现场/共享站 | 记录用量仅分摊一次 | 电表和合同 |
| `cp_freight` | `layer_assembly` | 进场材料运输 | 货运批次 | 起点、终点、吨数、公里数、交付 gate | 托运及路线核对 | t, km, t*km | 每批 | 全施工期 | 进场路线 | 汇总未内嵌吨公里 | 交付证据 |
| `cp_waste` | `formation`, `layer_assembly`, `finish_handover` | 弃土及拒收物 | 转移/再用日志 | 材料、危害性、质量、节点、去向、再用 | 过磅/接收方 | kg | 每次转移 | 全施工期 | 路段 | 场外转移扣内部再用 | 收据/检测 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `section_area` | 几何 | 按车行道、路肩及路径，汇总已验收断面长度乘实测宽度。 | 桩号、宽度 | m2 | fhwa-lca-pave |
| `material_balance` | 材料 | 交付减退货和库存变化等于安装加拒收；调查差额。 | 台账、竣工、废物 | 对账 kg | fhwa-lca-pave |
| `freight_work` | 运输 | 汇总车次吨数乘路线 km；排除供应数据集已包含的到场运输。 | 吨数、里程、gate | t*km | fhwa-lca-pave |
| `area_intensity` | 报告 | 路段总结果除实测面积或长度，同时保留一路段总值。 | 路段总值、面积、长度 | 每 m2/每 m 强度 | fhwa-lca-pave |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_geometry` | 参考产品 | 核对桩号、宽度、面积、层厚、功能等级及验收。 | 竣工测绘/试验 |
| `dq_materials` | 结构层 | 按层及路线核对供应、安装、退货、库存和废物。 | 票据、芯样、台账 |
| `dq_shared` | 拌合站 | 识别全部消费节点/项目和期间，不重复计能源或服务。 | 日期明确的设备和电表日志 |
| `dq_secondary` | 再生材料 | 记录既往用途、回收 gate、组分及负担惯例。 | 供应商与回收记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product` | 参考产品 | 核对可通行非高架路段、桩号、等级及签署移交；拒绝材料、服务、高架公路或隧道身份。 | unsd-cpc-53211 |
| `validate_geometry` | 结构层 | 依据长度和宽度核对面积，依据层厚和密度核对质量。 | fhwa-lca-pave |
| `validate_route` | 面层替代 | 核对母体 `layer_assembly` 以及材料/设备/废物/试验差异；同一面积不得叠加互斥路线。 | fhwa-lca-pave |
| `validate_attribution` | 共享/再生 | 检查共享消费对象与期间、再生来源及回收，确保负担不重复。 | fhwa-lca-pave |
| `validate_handoff` | 完工 | 核对已组合母体、完工投入/残余物、缺陷关闭及可通行已验收状态。 | fhwa-lca-pave |

## 10. 发布数据集档案

| Field | Value |
| --- | --- |
| dataset_role | 一段已完成非高架道路或铺面通道的前景施工数据包 |
| downstream_use | `secondary_dataset`；仅在几何、功能、路线及现场 gate 相符时用作 `background_dataset` |
| allowed_use | 施工阶段道路资产建模及明确分开的生命周期扩展 |
| excluded_use | 交通运营、无情景的全生命周期结果、铺路材料制造、高架公路/隧道，或脱离路段范围的面积强度 |
| required_metadata | 场址、桩号、长度、宽度/面积口径、结构层/厚度、功能等级、排水/安全、路线、供应 gate、移交 |
| required_quality_disclosure | 测绘缺口、未计量土方、材料平衡、共享站、再生来源、废物去向和未解析 UUID |
| update_trigger | 线路、结构、路线、供应 gate、验收范围或平台身份发生变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-53211` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53211 | 产品边界；CPC 2.1 说明补充同名 CPC 3.0 条目 |
| `fhwa-lca-pave` | `official_guidance` | https://www.fhwa.dot.gov/pavement/lcatool/LCA_Pave_Tool_Methodology.pdf | 路面材料、运输及施工拆分；不作为通用数量范围 |
