---
pcr_id: pcr.constructions-and-construction-services.constructions.one-and-two-dwelling-residential-buildings
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 一户和两户住宅建筑

## 1. 范围与适用性

本 PCR 适用于在有记录的现场交付节点完工的一栋一户或两户住宅，包括独立或联排形式。声明地下室、附属车库、景观、建筑总楼面面积、永久性系统和工地范围。同一建筑内的两户不是两栋建筑。未安装的预制套件和单独销售的施工服务属于投入，不是本产品。[unsd-53111; rics-wlca-2024]

交付条件是永久结构、围护、纳入范围的装修和集成系统已安装、测试并验收。材料供应、运输、施工能源、用水和废物纳入至交付节点；运行、住户活动、未来维修和拆除作为另行声明的下游情景。[rics-wlca-2024]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.one-and-two-dwelling-residential-buildings |
| classification_refs | CPC 3.0 53111，一户和两户住宅建筑；映射接受决定另行作出。 |
| covered_products | 一栋现场完工、含一户或两户的建筑，包含声明的附属范围和集成系统。 |
| excluded_products | 三户及以上建筑、独立土木工程、未安装的预制套件、单独销售的施工服务、住户设备。 |
| representative_product | 一栋已验收的独立或联排一户/两户住宅，附实测总楼面面积。 |
| production_route | 场地准备与基础；构件交付、结构与围护装配；机电、表面装修、调试及交付。 |
| market_state | 在指定场地安装并验收的永久建筑。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一栋完工的一户或两户住宅建筑。 |
| How much | 一栋建筑；另以 m2 报告实测总楼面面积作为并行强度分母。 |
| How well | 规定的永久结构、围护、装修及集成系统通过有记录的验收。 |
| How long or cycle | 一个施工项目至现场交付；使用寿命是后续情景的元数据。 |
| reference_flow_link | `finishing_handover` 的产出 `completed_building`。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 栋完工建筑 |
| 参考产品流 | 现场交付的一户或两户住宅建筑；UUID 未解析 |
| 参考流属性 | 建筑栋数；UUID 未解析 |
| 参考单位组 | 件数；UUID 未解析 |
| 参考单位 | 栋 |
| 必需限定信息 | 场地、户数、独立/联排形式、总楼面面积口径、地下室/车库/景观范围、结构体系、纳入的系统、完工与验收日期 |

平台同名候选是以质量为属性的出厂制造产品流，不能确定现场交付且以栋计的建筑产出。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `building_count` | 参考产品 | 计数，UUID 未解析 | 栋 | 每栋独立验收的实体建筑计一次，即使其中有两户。 |
| `floor_area` | 并行强度 | 总楼面面积 | m2 | 依据竣工图计量；披露面积口径以及地下室、车库的处理。 |
| `material_mass` | 材料与废物 | 质量 | kg | 用具体产品的密度或单件质量转换供应商单位，并保留转换证据。 |
| `transport_work` | 进场货运 | 质量 × 距离 | t·km | 实际载重乘以载货路线距离；披露空驶返程的处理。 |
| `site_energy` | 燃料与电力 | 能量或燃料质量/体积 | kWh、MJ、kg 或 L | 保留载能体及转换证据；避免发电机燃料及其发电量重复计入。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在建筑施工前声明已清理或既有场地、保留结构、拆除和土壤污染情况。 |
| starting_condition_role | 此为前景施工起点；既有资产不自动形成免费产品或抵扣。 |
| product_classification_scope | 一栋一户或两户永久住宅；独立土木资产若未明确纳入则在范围外。 |
| recursive_input_rule | 若购入模块自称为已完工建筑，使用前须拆解其构件，解决与本建筑产出的边界重叠。 |
| upstream_dataset_requirement | 按实际交付节点连接相容的材料、预制构件、能源、运输及废物服务上游数据集。 |
| disclosure | 报告场地起点、纳入工程、临时/共用工程、再生材料、交付检验、排除项和截断。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | 整体产品 | 纳入至验收交付的实际供应、运输、安装及施工废物。后续使用和寿命终点属于另设情景。 | `rics-wlca-2024` |
| `prefab_interface` | 工厂构件 | 按交付产品进入；现场安装计于本系统，工厂制造仅由连接的供应商数据集计入。 | `rics-wlca-2024` |
| `site_scope` | 地下室、车库、景观及既有工程 | 根据图纸和合同声明纳入范围。明确处理拆除和土地修复，不得隐含于建筑材料。 | `rics-wlca-2024` |
| `secondary_entry` | 回收投入 | 记录回收来源和处理交接节点；回收负担计一次，不自动给替代收益。 | `rics-wlca-2024` |
| `shared_assets` | 脚手架、模板、起重机、工地公用设施 | 记录所有使用阶段、建筑及服务期；以披露的物理驱动量分配实测用量一次。 | `rics-wlca-2024` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `site_foundation` | 场地与基础 | required | 从声明的场地状态到验收的地下结构。 | 土方、基础材料、设备和弃土。 | 一栋建筑和实测总楼面面积。 |
| `shell_assembly` | 结构与围护装配 | required | 从验收基础到验收的防风雨外壳。 | 连接结构与围护构件，处理不合格品。 | 一栋建筑和实测总楼面面积。 |
| `finishing_handover` | 系统、装修与交付 | required | 从验收外壳到调试验收后的建筑。 | 安装系统、完成表面、处理残余物并验收产出。 | 一栋建筑和实测总楼面面积。 |

### 过程：场地与基础（`site_foundation`）

#### 输入

##### 产品流

###### 土方施工服务（`groundwork_service`）

仅用于外包土方；不得再将服务商的燃料作为前景设备燃料重复计算。

- 选定流：土方与开挖施工服务
- 流属性/单位：供应商服务数量 / 声明单位
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- 数量规则：记录合同服务数量及工程范围。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_earthwork`
- 数量范围：暂定外包土方筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：declared supplier service units/building
  - 基准：等待实际服务单位和实测范围的有意设宽筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 基础材料（`foundation_materials`）

创建数据集时将实际混凝土、钢材、骨料、防水材料等按产品分别列出。

- 选定流：按竣工产品条目区分的基础材料
- 流属性/单位：质量 / kg
- 数量规则：逐产品以交付质量减退货质量，保留安装及废弃数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定基础材料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg/m2 gross floor area
  - 基准：有意设宽的首轮筛查值，不是设计用量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 基础施工能源（`foundation_energy`）

计量自有设备和临时设施的电力与燃料，共用用量仅分配一次。

- 选定流：工地电力和移动设备燃料供应
- 流属性/单位：能量或载能体质量 / kWh、MJ 或 kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按载能体读取电表、发票和设备日志。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定基础能耗筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh-equivalent/m2 gross floor area
  - 基准：施工机械和动力的宽范围首轮筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收基础（`accepted_foundation`）

移交给结构装配的内部验收状态，不是另一项市场建筑产品。

- 选定流：现场已验收基础
- 流属性/单位：数量 / 基础
- 数量规则：每栋完工建筑对应一个已检验基础。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover`
- 数量范围：已验收基础数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：foundation/building
  - 基准：移交给该建筑的一个已检验基础
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

##### 废物流

###### 外运弃土（`spoil_export`）

按污染状态和去向区分离场土壤；场内回用土壤为内部转移。

- 选定流：按去向区分的开挖土石
- 流属性/单位：质量 / kg
- 数量规则：称重或按实测体积和密度计算，扣除场内回用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_earthwork`
- 数量范围：弃土平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg excavated mass
  - 基准：外运土壤除以开挖总质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：结构与围护装配（`shell_assembly`）

#### 输入

##### 产品流

###### 接收基础（`foundation_received`）

连接前一节点验收的地下结构，不重复计入其生产负担。

- 选定流：现场已验收基础
- 流属性/单位：数量 / 基础
- 数量规则：根据建筑标识匹配已验收基础。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover`
- 数量范围：基础移交数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：foundation/building
  - 基准：该建筑接收一个已验收基础
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

###### 结构与围护构件（`shell_components`）

按实际材料条目记录承重木材、砌体、钢材或预制模块以及屋面、保温、窗门，并记录再生来源和工厂交付节点。

- 选定流：按竣工产品条目区分的结构与围护构件
- 流属性/单位：质量 / kg
- 数量规则：逐构件核对交付、安装、退货和不合格数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定外壳构件筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg/m2 gross floor area
  - 基准：涵盖不同结构体系的宽范围筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进场货运（`material_transport`）

记录购买构件与材料的实际交付服务；其他运输方式需要各自相容的身份。

- 选定流：公路货运服务
- 流属性/单位：货运周转量 / t·km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- 数量规则：逐次汇总载货吨数乘路线公里数，说明返程处理。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_transport`
- 数量范围：暂定货运筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：t·km/building
  - 基准：有意设宽的物流筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外壳装配能源（`assembly_energy`）

按载能体记录起重、工具、临时照明和焊接能源，共用机械依据日志分配。

- 选定流：电力和移动设备燃料供应
- 流属性/单位：能量或载能体质量 / kWh、MJ 或 kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：计量或记录实际载能体消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定装配能耗筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh-equivalent/m2 gross floor area
  - 基准：工地能源宽范围首轮筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收防风雨外壳（`accepted_shell`）

经检验的基础、结构和围护成为装修前的母体状态；未纠正的不合格品不计入。

- 选定流：已验收防风雨建筑外壳
- 流属性/单位：数量 / 外壳
- 数量规则：每栋建筑对应一个已检验外壳。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover`
- 数量范围：已验收外壳数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：shell/building
  - 基准：移交装修的一个已检验外壳
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

##### 废物流

###### 不合格构件与边角料（`assembly_rejects`）

按材料和去向记录缺陷件及边角料；返工件回到装配过程，仅外运时列入本废物流。

- 选定流：按去向区分的建筑材料不合格品
- 流属性/单位：质量 / kg
- 数量规则：称重外运不合格品，并与返工、回收和已验收构件核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 数量范围：装配不合格比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg delivered components
  - 基准：不合格质量除以交付质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：系统、装修与交付（`finishing_handover`）

#### 输入

##### 产品流

###### 接收防风雨外壳（`shell_received`）

表面装修与系统安装前来自装配过程的内部母体状态。

- 选定流：已验收防风雨建筑外壳
- 流属性/单位：数量 / 外壳
- 数量规则：匹配 `shell_assembly` 的已检验外壳。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover`
- 数量范围：外壳移交数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：shell/building
  - 基准：装修过程接收一个已验收外壳
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

###### 集成设备（`service_equipment`）

依据设备表记录永久安装的给排水、配电、通风、供暖及控制系统；排除可移动住户电器。

- 选定流：按设备表条目区分的已安装建筑系统产品
- 流属性/单位：质量 / kg
- 数量规则：将已安装设备与交付和退货产品核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定系统设备筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/m2 gross floor area
  - 基准：已安装设备的宽范围筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 装修材料（`finishing_materials`）

逐项记录石膏板、地板、涂料、密封材料等；残余物及失败装修另行分类。

- 选定流：按竣工材料条目区分的表面装修产品
- 流属性/单位：质量 / kg
- 数量规则：将安装面积与发票记录换算为产品质量，并保留退货和损耗条目。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 数量范围：暂定装修材料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kg/m2 gross floor area
  - 基准：涵盖不同装修方案的宽范围首轮筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 施工和调试用水（`construction_water`）

记录至验收节点的搅拌、清洁、测试和调试用水；排除住户使用水。

- 选定流：工艺用水供应
- 流属性/单位：体积 / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- 数量规则：计量用水或依据活动记录分配共用工地水表。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 数量范围：暂定施工用水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3/m2 gross floor area
  - 基准：工地用水宽范围初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 装修和调试能源（`finish_energy`）

按载能体记录至验收的工具、临时采暖、干燥和系统测试能源。

- 选定流：工地电力和燃料供应
- 流属性/单位：能量或载能体质量 / kWh、MJ 或 kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：计量或按发票记录实际载能体用量，单独标识调试量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定装修能耗筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh-equivalent/m2 gross floor area
  - 基准：工地能源宽范围首轮筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完工住宅建筑（`completed_building`）

只有指定系统及装修通过交付验收，一户或两户住宅建筑才越过施工前景边界。

- 选定流：现场交付的一户或两户住宅建筑
- 流属性/单位：数量 / 栋
- 数量规则：一栋已验收建筑；楼面面积和户数作为独立元数据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover`
- 数量范围：参考建筑栋数
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：building/reference flow
  - 基准：按 PCR 参考定义为一栋已验收实体建筑
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

##### 废物流

###### 装修残余物和不合格品（`finishing_waste`）

按材料和去向记录装修边角料、容器及失败工程；修复的装修仍在本节点内。

- 选定流：按去向区分的装修及安装废物
- 流属性/单位：质量 / kg
- 数量规则：按材料和去向称重或核对废物联单。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栋完工建筑
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 数量范围：装修不合格比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg delivered finish materials
  - 基准：外运装修废物除以交付装修产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `building_allocation` | 一个项目有多栋建筑 | 先将实测用量归属受益建筑。不可分的共用工程以有记录的楼面面积、设备小时或材料质量分配；记录分母且份额总和为一。同一建筑内两户不是共产品。 | `rics-wlca-2024` |
| `shared_works` | 脚手架、模板、起重机和工地公用设施 | 确定使用节点和项目期间，将实际使用量分配一次；循环使用或残值仅凭证据披露。 | `rics-wlca-2024` |
| `secondary_material` | 回收骨料、木材等产品 | 保留来源与回收交接节点；采用一种上游回收核算口径，避免重复计入前一寿命期或推测的替代收益。 | `rics-wlca-2024` |
| `rework_reject` | 缺陷构件和装修 | 将修复的产品及返工能源送回产生节点；不合格品不进入验收产出，外运废物仅计一次。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_earthwork` | `site_foundation` | 土方与弃土 | 测量及承包商记录 | 起始状态、开挖体积、密度、回用及外运、服务范围 | 测量、地磅及承包商日志 | m3、kg、服务单位 | 每次作业 | 基础阶段 | 指定场地 | 开挖 = 回用 + 外运 + 库存变化 | 签署测量和票据 |
| `cp_materials` | `site_foundation`; `shell_assembly`; `finishing_handover` | 永久产品 | 工程量清单及交付 | 产品、供应商、交付、安装、退货、再生来源、质量换算 | 交付单和竣工产品表 | kg 和原单位 | 每次交付 | 全项目 | 一栋建筑 | 保留产品条目；净交付 = 交付 - 退货 | 签署产品表和发票 |
| `cp_energy` | `site_foundation`; `shell_assembly`; `finishing_handover` | 设备和工地能源 | 电表及燃料日志 | 载能体、数量、阶段、设备小时、共用者 | 电表、发票和日志 | kWh、MJ、kg、L | 每周 | 全施工期 | 指定场地 | 按载能体汇总，共用读数仅分配一次 | 电表照片和发票 |
| `cp_transport` | `shell_assembly` | 进场货运 | 运单 | 产品质量、来源、方式、载货距离、返程口径 | 交付单和路线日志 | t、km、t·km | 每次运输 | 全施工期 | 供应商至场地 | 按方式汇总吨数 × 公里 | 票据和路线证据 |
| `cp_waste` | `shell_assembly`; `finishing_handover` | 不合格品和残余物 | 废物记录 | 来源节点、材料、质量、返工、去向、处理 | 箱秤和联单 | kg | 每次收集 | 装配至交付 | 一个场地 | 按去向仅汇总一次外运质量 | 票据和收据 |
| `cp_water` | `finishing_handover` | 施工用水 | 水表和活动记录 | 读数、阶段、活动、共用者 | 水表或有据分配 | m3 | 每周 | 装修至验收 | 指定场地 | 汇总分配后的阶段体积 | 水表照片和发票 |
| `cp_handover` | `site_foundation`; `shell_assembly`; `finishing_handover` | 验收状态 | 检验和验收 | 建筑标识、户数、面积、范围、缺陷、日期 | 签署检验和竣工测量 | 栋、m2 | 每个节点 | 基础至交付 | 一栋建筑 | 每节点匹配一个已验收状态 | 图纸和证书 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `net_material` | 全部产品投入 | 净交付 = 交付 - 退货；核对安装、废弃和库存变化。 | 交付、退货和转换记录 | kg/产品和 kg/栋 | `mass-balance-identity` |
| `freight_work` | 进场运输 | 实际吨数 × 载货公里数；服务商清单未含空驶返程时才另计。 | 货运质量、路线、方式 | t·km/栋 | `rics-wlca-2024` |
| `spoil_balance` | 土方 | 开挖 = 场内回用 + 外运 + 库存变化，允许测量不确定度。 | 体积、密度和票据 | kg/栋与差值 | `mass-balance-identity` |
| `area_intensity` | 报告 | 每栋总量除以实测总楼面面积；参考产出仍为一栋。 | 总量和面积 | 数量/m2 | `reference-definition` |
| `shared_fraction` | 共用资源 | 分配量 = 共用总量 × 有记录的使用份额；所有受益方份额之和为一。 | 共用表、小时或工程量 | 数量/栋 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考和最终交换 | 数据集发布前按平台详细记录核对具体流的类型、节点、属性和单位。 | 流及支持引用核查 |
| `dq_scope` | 建筑 | 验证一户或两户、验收范围、实测面积口径及纳入系统。 | 竣工图和验收记录 |
| `dq_complete` | 所有阶段 | 核对主要材料、运输、能源、用水及废物，并披露缺口。 | 清单、电表和联单平衡 |
| `dq_time` | 全部数值 | 使用实际项目日期，说明供应商数据年代及替代情况。 | 发票、电表日期和进度 |
| `dq_secondary` | 回收产品 | 披露来源、回收节点及上游负担处理。 | 供应商追溯和声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_handover` | 参考产出 | 无一栋实体建筑验收、一户/两户、面积口径和纳入系统声明时拒绝数据包。 | `unsd-53111`; `rics-wlca-2024` |
| `v_balance` | 材料、弃土和废物 | 检查交付 = 安装 + 外运废物 + 退货 + 库存变化，并调查差额。 | `mass-balance-identity` |
| `v_shared` | 共用资产 | 核验全部受益者和服务期、单次归属以及份额总和为一。 | `rics-wlca-2024` |
| `v_reject` | 不合格工程 | 要求返工、回收或处置去向，不让未解决的不合格品进入验收产出。 | `mass-balance-identity` |
| `v_secondary` | 再生材料 | 要求来源和回收交接节点，避免重复的前一寿命期负担或无依据的抵扣。 | `rics-wlca-2024` |
| `v_flow` | 最终交换 | 核验节点、类型、方向、属性和单位。出厂质量流不能代表该现场完工建筑。 | `unsd-53111` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一栋完工住宅的前景施工阶段数据包。 |
| downstream_use | 核验具体流身份后，用作施工阶段 process 和 lifecyclemodel 投影的 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 前期施工评价，以及面积口径和范围一致的比较。 |
| excluded_use | 运行或全寿命声明；将出厂构件当作现场交付参考产品。 |
| required_metadata | 场地、建筑标识、户数、面积口径、地下室/车库/景观范围、结构、集成系统、日期和验收。 |
| required_quality_disclosure | 阶段与材料覆盖、暂定范围、未解析 UUID、分配、再生来源及遗漏。 |
| update_trigger | 竣工设计或数量变化、修正的供应商/运输记录，或新核验的参考身份。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-53111` | official_guidance | UNSD CPC 53111 说明，https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53111 | 一户/两户类别边界。 |
| `rics-wlca-2024` | standard | RICS，《建筑环境全寿命碳评估》，第 2 版，第 3 版本（2024），https://www.rics.org/content/dam/ricsglobal/documents/standards/Whole_life_carbon_assessment_PS_Sept23.pdf | 竣工施工数量、运输、废物和交付范围。 |
| `mass-balance-identity` | method_factor | 对实测材料和开挖记录应用质量守恒恒等式。 | 核对和平衡比例。 |
| `reference-definition` | method_factor | 本 PCR 的一栋完工建筑参考定义与算术归一化。 | 产出栋数与面积归一化。 |
