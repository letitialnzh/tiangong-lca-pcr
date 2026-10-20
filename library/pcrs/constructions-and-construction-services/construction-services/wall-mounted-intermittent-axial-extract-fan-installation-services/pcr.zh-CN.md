---
pcr_id: pcr.constructions-and-construction-services.construction-services.wall-mounted-intermittent-axial-extract-fan-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 壁装间歇式轴流排风机安装服务

## 1. 范围与适用性

适用范围仅限 II 类双重绝缘风机，排除 I 类需接地风机。

本 PCR 适用于在已验收的既有墙体套管和室外格栅上，利用已验收的既有隔离固定电源，首次安装成套基本间歇式轴流排风机。代表路线为 Vent-Axia VASF100B 基本型号：安装时选择两档转速之一，由远程开关或照明开关操作。代表性说明书约束该示例，不能自动适用于本类别的所有风机。等效型号须有自身安装证据和相容限定信息。[vent-axia-494229j0626，第 3–6 页]

包括收货拆包、适配基材的背板紧固、实际固定孔钻孔或经检查的预制孔路线、局部连接材料、转速选择、面罩卡合、电气验证、有限功能及实际排风测试、失败作业纠正、清理、可归属的现场资源和签字交接。测试前声明项目排风验收判据。参考输出是满足该判据的安装服务，不构成整栋建筑风量或房间通风保证。

排除新建墙体贯穿孔、套管、室外格栅、支路电路或隔离点；长风管系统、热回收、空调、连续运行风机、定时/湿度变体、后续维护和日常通风运行。若起始接口未通过验收或需要新建，应停止使用本路线，并以另行审查的边界说明额外服务；不得为了保留本 PCR 而重命名实际作业。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.wall-mounted-intermittent-axial-extract-fan-installation-services |
| classification_refs | CPC 3.0 54632 — 通风及空调设备安装服务；建议 narrower 关系，须逐项审查映射 |
| covered_products | 在已核实的既有接口上首次壁装基本间歇式轴流排风机并交接的服务；仅限 II 类双重绝缘型号 |
| excluded_products | 空调系统；风管网络；热回收装置；新建贯穿孔/套管/格栅；定时/湿度/连续运行变体；运行通风服务；I 类需接地风机 |
| representative_product | Vent-Axia VASF100B 基本型号、安装时选择固定转速的壁装排风机安装；不推定通用材料清单或风量 |
| production_route | 收货 → 检查接口 → 拆面罩 → 定位/钻孔/置塞并固定背板 → 固定接线及隔离状态下选速 → 复装并卡牢面罩 → 电气及排风验证 → 必要时纠正 → 签字交接 |
| market_state | 交接时一项首次安装、经测试和验收的风机安装服务；设备制造属于上游输入 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已验收并经测试的壁装间歇式轴流排风机安装服务 |
| How much | 1 item |
| How well | 固定和面罩保持可靠，叶轮/风门活动自由，II 类固定连接相容，转速已选定，电气验证及实际排风达到声明的项目判据且有记录 |
| How long or cycle | 一次安装验收作业周期至签字交接；记录实际测试及纠正，不假定运行寿命或测试时长 |
| reference_flow_link | `accepted_installation` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收并经测试的壁装间歇式轴流排风机安装服务 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 实际基本间歇式型号及设备标识；电源电压/频率及 II 类设计；选定转速；墙体/基材及紧固件清单；套管尺寸/长度/坡度及室外防护格栅验收；既有供电/隔离及电缆相容性；安装朝向和面罩固定；电气试验范围/结果；实测排风试验方法、条件、送出风量及项目判据；安装日期/地点；实际钻孔或经检查的预制固定孔；失败作业及返工去向；交接记录 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| service_count | 参考产品 | Number of items | item | 仅计入通过所有声明关口的风机安装；不同型号、转速状态、接口及排风判据须分开记录，不推定等效。 |
| energy_record | installation_electricity | Energy | kWh | 保留实测电能及实际测试/安装时长。仅凭额定功率或额定风量不能确定能耗或实际排风；记录任何单位换算及测量不确定性。 |
| material_conversion | fastening_components; connection_components; ancillary_consumables; site_fuel | Mass | kg | 仅凭可追溯的实际产品质量或密度证据及声明条件，换算尺寸、件数或燃料体积；不得把一台设备等同于一千克。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已验收的既有套管、室外防护格栅、适用墙体基材及合规隔离固定供电/连接点；采购的风机和另加部件位于声明的上游供应关口 |
| starting_condition_role | 先前建成的接口是服务描述的固定边界条件，不作为新生产的套管/格栅/电路交换 |
| product_classification_scope | CPC 3.0 54632 的狭义安装子范围；分类不确立材料或服务流身份 |
| recursive_input_rule | 同类别采购风机安装服务作为上游服务输入，须声明关口和不重叠的作业清单；不得再展开并计入同一前景安装作业。 |
| upstream_dataset_requirement | 对设备、实际部件、电力、货运和废物处理采用状态、型号、地域、供应关口和单位相容的数据集。声明制造/配送/包装覆盖及缺口；缺少数据集不能删除该输入。 |
| disclosure | 说明所有已验收的既有接口及排除的新建作业、实际钻孔路线、资源归属、工具资本品处理、数据缺口、废物去向和交接关口。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| existing_interfaces | fan_installation | 作业前检查并记录套管长度/坡度、室外防护格栅适用性和供电相容性。代表性说明书要求套管向室外下斜，壁装套件从风机背板至室外格栅内侧的风道长度至少为 100 mm。这些属于示例型号的接口检查，不构成通用套管施工清单。 | `vent-axia-494229j0626` |
| class_ii_connection | fan_installation | 代表性 220–240 V 50 Hz II 类风机采用固定接线和后部电缆入口，不得接地。核实实际 0.75–1.5 mm² 电源线相容性及基本型号对应接线图。隔离状态下连接和选速；型号不同时遵循其实际说明书。 | `vent-axia-494229j0626` |
| complete_installation | fan_installation | 包括实际定位/钻孔/置塞/旋紧及电气/排风验证、电力和清理。采用预制固定孔时保留检查证据；不得默默删除钻孔及其碎屑。声明另供部件角色，避免重复计入集成部件。 | `vent-axia-494229j0626` |
| gate_exclusions | fan_installation | 固定可靠、叶轮和风门自由、面罩全部卡扣卡合、固定接线正确、转速已选择，且实际电气及排风验收已有记录，方可结束服务。说明书提供安装/接线检查；数据生产者声明项目排风测试方法和判据。交接后的通风用电及既有接口建设在本数据集之外。 | `vent-axia-494229j0626` |
| resource_scope | fan_installation | 依 cp_energy 和 cp_transport 纳入可归属的运输、作业电力、消耗材料和废物处理。声明便携工具资本品制造/寿命处理及排除项；工具运行电力和磨耗耗材仍须纳入。排除资本品时不得声称完整覆盖。 识别共享车辆、工具、充电及场地服务，逐项列出 fan_installation 和其他实际使用作业/节点及其相关期间，并保留资源唯一事件标识。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：供安装的适配基材紧固部件 (`fastening_components`)

过程／待建立交换的方向／类型：`fan_installation` / `inputs` / `product`.

实际螺钉、墙塞及任何认可固定附件把背板连接到已验收墙体。逐部件保留材料和尺寸；此条件性伞形行须展开成实际独立交换。

- 采集对象：供安装的适配基材紧固部件
- 流属性/单位：Mass / kg
- 数量规则：按材料和产品记录实际领用紧固件质量，排除风机设备数据集内已有部件；识别安装、未用退回及废弃数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`vent-axia-494229j0626`

数量范围证据需求：须有实际基材、紧固件型号、尺寸、数量及称量或有依据的单位质量；没有可支持的通用紧固材料清单或质量区间。 不声称数值 Range。

#### 采集要求：供安装的电气连接材料 (`connection_components`)

过程／待建立交换的方向／类型：`fan_installation` / `inputs` / `product`.

声明的风机连接接口内若需要实际局部连接部件和电缆，则纳入安装。既有固定供电和隔离仍是先前接口；不含新电路。

- 采集对象：供安装的电气连接材料
- 流属性/单位：Mass / kg
- 数量规则：逐产品计量实际增添导体、连接件或允许附件的质量；无法称量时保留截面、长度及供应商质量换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`vent-axia-494229j0626`

数量范围证据需求：须有实际导体/连接件规格、增添长度及可追溯单位长度质量或称量；示例电缆截面不是部件质量范围。 不声称数值 Range。

#### 采集要求：供现场的安装及清理耗材 (`ancillary_consumables`)

过程／待建立交换的方向／类型：`fan_installation` / `inputs` / `product`.

条件性实际清理用水、集尘袋和其他消耗安装材料按身份形成具体交换。有记录证实不存在时才记零；不得从通用安装名称推定化学品。

- 采集对象：供现场的安装及清理耗材
- 流属性/单位：Mass / kg
- 数量规则：逐实际产品记录可归属材料质量，包括任何清理用水；保留用途、废物去向及分配证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

数量范围证据需求：须有实际清理用水、集尘袋和其他耗用品身份及称量；其发生依赖作业。 不声称数值 Range。

#### 采集要求：可归属设备和材料到安装现场的运输服务 (`transport_service`)

过程／待建立交换的方向／类型：`fan_installation` / `inputs` / `product`.

条件性采购货运按实际车辆/服务及线路记录风机、紧固件或设备。包括可归属配送和退回运输段；需要其他服务单位的人员运输另以实际单位披露和建模。

- 采集对象：可归属设备和材料到安装现场的运输服务
- 流属性/单位：Transport service / t*km
- 数量规则：逐段采集实际货物质量和距离并归属到本安装作业批；保留实际服务单位换算及上游数据集覆盖。不得重复计入上游已含供应商配送。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`

数量范围证据需求：须有实际线路段、货物质量、车辆/服务单位、人员出行及分配份额；不声称通用货运距离或载重范围。 不声称数值 Range。

#### 采集要求：供可归属安装活动的燃料 (`site_fuel`)

过程／待建立交换的方向／类型：`fan_installation` / `inputs` / `product`.

安装者运营车辆、发电机或其他实际现场设备的条件性燃料按燃料和用途分别识别。采购运输服务的燃料保留在其上游服务数据集内。

- 采集对象：供可归属安装活动的燃料
- 流属性/单位：Mass / kg
- 数量规则：逐活动记录实际可归属燃料质量；仅凭有记录的燃料特定密度和条件换算体积。记录实际燃烧释放，不虚构通用排放因子。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

数量范围证据需求：须有实际设备/车辆活动、燃料身份、实测数量及特定燃料密度/条件；不在燃料间转用耗量或密度区间。 不声称数值 Range。

#### 采集要求：作为产品退回的可复用包装及未用或可修复部件 (`returned_components`)

过程／待建立交换的方向／类型：`fan_installation` / `outputs` / `product`.

实际可复用包装及未用或可修复风机设备、电缆、紧固件等材料，按实际身份分开，作为产品前往已识别复用、库房或供应商退回。待修缺陷装配不能验收；废弃材料属于不合格废物。

- 采集对象：作为产品退回的可复用包装及未用或可修复部件
- 流属性/单位：Mass / kg
- 数量规则：按身份、关口和去向称量实际退回产品质量。若记录为件数或长度，采用可追溯的实际产品单位质量；另保留风机件数以核对库存。保留总领用及退回清单；不得既从净输入扣除同一退回，又在输出抵扣。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

数量范围证据需求：须有按部件或可复用包装身份称量的产品退回质量及可追溯件数/长度换算；不得假定未用退回比例。 不声称数值 Range。

#### 采集要求：现场收集关口的分类安装包装废物 (`packaging_waste`)

过程／待建立交换的方向／类型：`fan_installation` / `outputs` / `waste`.

从风机和辅助产品移除的实际纸箱、塑料等包装前往声明的收集/处理路线。作为产品退回的可重复使用包装须在前景清单另列。

- 采集对象：现场收集关口的分类安装包装废物
- 流属性/单位：Mass / kg
- 数量规则：按材料及去向称量分类包装；核对复用/退回包装及上游包装，避免重复废物。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

数量范围证据需求：须有实际拆包型号、包装材料、分类质量、复用/退回及收集去向；不推定包装废物比例。 不声称数值 Range。

#### 采集要求：废弃失败安装材料和清理废物 (`rejected_waste`)

过程／待建立交换的方向／类型：`fan_installation` / `outputs` / `waste`.

破损风机零件、电缆裁余、损坏紧固件及用后清理材料关联安装节点及其实际处置或回收去向。原位纠正是内部循环，其额外投入、能耗和废物保留在本节点。

- 采集对象：废弃失败安装材料和清理废物
- 流属性/单位：Mass / kg
- 数量规则：按实际材料、缺陷和原因记录分类废弃质量及路线；区分非废弃产品退回，并在验收前核对全部不合格品。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

数量范围证据需求：须有实际缺陷/裁切/清理记录及废弃材料分类质量/去向，与可用退回区分；没有可支持的默认不合格比例。 不声称数值 Range。

#### 采集要求：向指定接收介质的已识别直接安装释放 (`direct_emissions`)

过程／待建立交换的方向／类型：`fan_installation` / `outputs` / `elementary`.

条件性未收集钻孔颗粒及任何实际现场燃料燃烧或其他安装释放，在选择具体交换前须确定物质/物种、适用粒径基准和接收介质。收集碎屑属于废物，绝不是空气排放。

- 采集对象：向指定接收介质的已识别直接安装释放
- 流属性/单位：Mass / kg
- 数量规则：按污染物及介质采集实测释放或与活动关联的可靠因子，包括控制和不确定性；无测量是明确数据缺口，不等于零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

数量范围证据需求：提出排放区间前须有实际释放活动、污染物/物种、粒径基准、接收介质、控制及实测或可靠活动因子证据；缺证仍属于缺口。 不声称数值 Range。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fan_installation | 风机固定、连接、验证与交接 | required | 在已验收既有接口上首次壁装基本间歇式风机 | 集成风机/背板、基材紧固件及局部连接部件；验证安装状态和排风；内部纠正失败或记录产品退回/废物出口 | `accepted_installation`: 1 item |


### 过程：风机固定、连接、验证与交接 (`fan_installation`)

#### 输入

##### 产品流

###### 安装供应关口的基本间歇式轴流排风机设备 (`fan_appliance`)

成套风机及其背板、面罩、叶轮和供货集成零件进入安装前景。识别实际型号及供货内容；不得重复添加另已包含的部件。

- 选定流：安装供应关口的基本间歇式轴流排风机设备
- 流属性/单位：Number of items / item
- 数量规则：记录领用风机数量，包括纠正时消耗的替换件，并与库存退回及已验收安装核对。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`vent-axia-494229j0626`

数量范围证据需求：须有实际型号及供货内容领用/退回件数、替换记录和已验收作业批，方可提出产率或设备投入范围。 不声称数值 Range。

###### 供紧固、电气验证和风机排风测试的电力 (`installation_electricity`)

包括实际钻孔、动力集尘、这些任务可归属充电、试验仪器及风机测试运行。铭牌额定值不是耗电量；日常通风运行在交接服务之外。

- 选定流：供紧固、电气验证和风机排风测试的电力
- 流属性/单位：Energy / kWh
- 数量规则：使用任务或已分配的仪表读数；无法直接计量时，逐设备保留实测运行功率和实际时长、计算及不确定性。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

数量范围证据需求：须有任务计量或实测设备功率、实际钻孔/充电/测试时长及分配记录；额定功率或假定测试时长不能支持能耗区间。 不声称数值 Range。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收并经测试的壁装间歇式轴流排风机安装服务 (`accepted_installation`)

一台基本间歇式风机在已验收既有套管/格栅/电源接口上固定和连接，选定转速及叶轮/风门自由活动已核实，实际电气和排风测试在签字交接前满足声明的项目验收判据。

- 选定流：已验收并经测试的壁装间歇式轴流排风机安装服务
- 流属性/单位：Number of items / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`vent-axia-494229j0626`

数量范围审查：恰好一项已验收服务是归一化定义。不声称经验安装产率范围；cp_acceptance 保留失败作业和复测。

##### 废物流

###### 现场收集关口的固定孔钻孔收集碎屑 (`drilling_debris`)

新固定孔产生的实际基材碎屑和收集粉尘前往已识别废物处理。既有预制孔可能免钻，但仅经检查的作业记录可确立；不允许新增套管贯穿孔。

- 选定流：现场收集关口的固定孔钻孔收集碎屑
- 流属性/单位：Mass / kg
- 数量规则：按基材和去向计量收集碎屑；保留孔数/直径/深度、抽吸方法、收集有效性证据及任何未收集部分评估。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

数量范围证据需求：须有实际基材、固定孔数/直径/深度、预制孔状态、收集质量及收集效率；不得替用贯穿孔或通用粉尘因子。 不声称数值 Range。

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| single_service | fan_installation | 预期输出为已验收安装服务；产品退回及废物不是已验收服务，也不自动成为联产品。将可归属的失败作业和复测负担保留在声明的作业批中；不推定回收或避免生产抵扣。 |  |
| shared_resources | fan_installation | 优先采用作业专属测量。依 cp_energy 和 cp_transport，依据有记录的活动驱动因素向全部实际使用方分配共享作业资源，将份额与整项作业核对，并披露所选驱动因素及敏感性。不得重复计入同一计量区间、货运段或工具负担。 逐共享资产/服务列出 fan_installation 和其他实际使用方，记录各自使用期间/作业及测得驱动因素、采用分配的理由、分母、份额和证据；若无共享，记录单一使用方的事实。 |  |
| reject_paths | fan_installation | 将每台失败风机或固定/连接缺陷关联到安装。内部纠正在本节点内循环；未用/可修复产品出口用 returned_components；废弃材料用 rejected_waste 并记录实际去向。保留纠正投入和能耗；未解决的失败不得计入 accepted_installation。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | fan_installation | 设备、紧固、连接、耗材输入和产品退回 | 领用/退回记录及测量 | job_id; model; appliance_id; component_id; material; issued_count; returned_count; measured_mass; cable_length; mass_per_length; density; conversion_conditions; integrated_parts; defect_state; destination | 核对送货、领用、安装和退回记录；称量实际部件或保留可追溯供应商换算；按材料身份和关口拆分。 汇总及归属方法：每参考流的可归属数量；分别保留领用、安装、退回及废弃数量。 | item; kg; 声明的原始单位 | 每次安装或可归属作业事件 | 完整安装周期，包括纠正及复测 | 声明的安装地点和作业批 | 每参考流 | 收据、库存变动、秤校准、产品资料、换算证据和供应商退货记录 |
| cp_energy | fan_installation | 作业电力和实际条件性现场燃料 | 计量、活动及分配记录 | job_id; device; task; meter_start; meter_end; electricity_kWh; measured_power; runtime; fuel_identity; fuel_mass; fuel_volume; density; conversion_conditions; activity_driver; job_total; allocated_share; tool_capital_policy; resource_event_id; consumer_node_or_job; service_period; allocation_denominator; allocation_rationale | 尽可能计量实际钻孔/集尘/充电/测试；保留实测功率/时长估算和燃料记录、全部使用方分配及不确定性。 汇总及归属方法：每参考流的可归属作业电能和燃料；核对整项作业总量并披露排除项。 逐共享资源事件列出全部实际使用节点/作业及相关期间，记录分配分母、理由和证据并核对总份额。 | kWh; kg; 声明的原始单位 | 每次安装或可归属作业事件 | 完整安装周期，包括纠正及复测 | 声明的安装地点和作业批 | 每参考流 | 仪表校准、时间戳、设备日志、燃料收据、密度资料和分配核对 |
| cp_transport | fan_installation | 可归属配送、退回和人员运输 | 线路及货运记录 | job_id; leg_id; service_type; carried_mass; distance; vehicle; actual_service_unit; consumer_list; allocation_driver; upstream_delivery_coverage; return_leg; resource_event_id; consumer_node_or_job; service_period; allocation_denominator; allocation_rationale | 逐段记录实际起讫地、质量和线路。记录质量距离货运计算，另以实际服务单位记录人员运输；核对共享运输段及上游覆盖。 汇总及归属方法：每参考流的可归属运输；不得重复计入上游和自有运输能耗。 逐共享资源事件列出全部实际使用节点/作业及相关期间，记录分配分母、理由和证据并核对总份额。 | t*km; 实际服务单位 | 每次安装或可归属作业事件 | 完整安装周期，包括纠正及复测 | 声明的安装地点和作业批 | 每参考流 | 货运记录、线路证据、车辆/服务数据集及分配表 |
| cp_waste | fan_installation | 包装、收集碎屑及不合格材料 | 分类称量和去向记录 | job_id; material; source_card; waste_mass; reused_mass; hole_count; hole_diameter; hole_depth; substrate; drilling_state; collection_method; destination; treatment; defect; transfer_id | 称量分类材料；检查预制孔或实际钻孔记录；将收集与未收集部分与排放评估及收集关口接收记录核对。 汇总及归属方法：每参考流的分类可归属废物，记录实际回收/处置路线，不自动抵扣。 | kg | 每次安装或可归属作业事件 | 完整安装周期，包括纠正及复测 | 声明的安装地点和作业批 | 每参考流 | 秤校准、钻孔/清理记录、收集票据及去向证据 |
| cp_emissions | fan_installation | 条件性实际直接释放 | 测量或可靠活动/因子记录 | job_id; activity; pollutant; species; particle_size_basis; receiving_medium; emission_mass; control; measurement_method; activity_amount; factor_value; factor_unit; factor_source; uncertainty; capture_fraction | 绑定前明确实际物质和介质；测量或采用特定活动的可靠因子，保留来源和不确定性。区分收集固体与释放；记录实际不存在或证据未解决的状态。 汇总及归属方法：每参考流的已识别可归属释放；无实测数量属于缺口，不等于零。 | kg | 每次安装或可归属作业事件 | 完整安装周期，包括纠正及复测 | 声明的安装地点和作业批 | 每参考流 | 采样/控制记录或精确因子证据、活动核对和释放介质 |
| cp_acceptance | fan_installation | 最终服务输出及验收分母 | 检查、测试和交接记录 | job_id; site; date; appliance_id; model; speed; sleeve_length; sleeve_slope; guard; substrate; fixings; supply; class; wiring; isolation; impeller; shutter; clips; electrical_test_scope; electrical_results; extraction_method; delivered_flow; flow_unit; test_conditions; project_criterion; pass_fail; rectification; accepted_count; signature | 检查已验收接口及安装牢固性，记录实际电气检查及选定转速下的排风相对预先项目判据的结果，再核对纠正并签字交接。 汇总及归属方法：每参考流的已验收安装数量；失败或未签字作业仍排除。 | item; 实际测试单位 | 每次安装或可归属作业事件 | 完整安装周期，包括纠正及复测 | 声明的安装地点和作业批 | 每参考流 | 照片、接口记录、合格电气试验记录、经校准风量仪器/结果及签字交接 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_attribution | 所有清单行 | 对每项实际交换保留整项作业数量和有记录的可归属份额；用可归属总量除以同一披露作业周期内已验收安装数量。不得通过不同作业批稀释失败作业，也不得把未解决的验收计入分母。 | cp_materials; cp_energy; cp_transport; cp_waste; cp_emissions; cp_acceptance | 每参考流数量及分配和不确定性清单 |  |
| electrical_consumption | installation_electricity | 优先采用实际电能表读数变化。估算使用实测运行功率和记录的作业时长，显式采用相容单位换算；披露方法、待机/充电覆盖及不确定性。仅有额定功率不足。 | cp_energy | 可归属安装和测试用电 |  |
| component_reconciliation | fan_appliance; fastening_components; connection_components; ancillary_consumables; returned_components; packaging_waste; drilling_debris; rejected_waste | 按实际材料或设备身份核对输入、安装、产品退回、废物和库存变化；将产生的基材碎屑与采购部件平衡分开。 | cp_materials; cp_waste; cp_acceptance | 可追溯部件/退回/不合格品清单及差异解释 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| configuration_trace | 所有清单行 | 保留实际配置、时间/地点、材料身份和关口、仪表/来源及相容上游数据集。分开记录实质不同的风机和安装条件。 | cp_materials; cp_acceptance |
| completeness | 所有清单行 | 记录所有实际必需和条件性作业。未知材料、排放、废物去向或资源归属须披露为缺口；缺少测量不能支持零值或通用默认值。 | cp_materials; cp_energy; cp_transport; cp_waste; cp_emissions |
| range_evidence | 所有清单行 | 不声称可转移的定量 Range。设备/紧固件质量、功率时长、运输、废物及排风取决于实际安装。声称默认值前采集经验范围证据；记录缺失的范围证据并评估敏感性。精确最终服务计数是归一化定义，不是产率先验。 | 实际测量、代表性作业批和不确定性评估 |
| acceptance_quality | accepted_installation | 保留实际排风方法、选定转速状态、测量条件及预先项目判据。制造商额定风量不是安装后实测送出风量。保留失败结果及复测。 | cp_acceptance; vent-axia-494229j0626 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_gate | fan_installation | 若隐藏新贯穿孔/套管/格栅/电路施工、未审查即替换变体、未核实既有接口或交接状态不同，则拒绝采用本路线。 | `vent-axia-494229j0626` |
| acceptance_gate | accepted_installation | 要求全部限定信息、牢固紧固/面罩卡扣、自由叶轮和风门、正确隔离接线/选速及有记录的电气和实际排风验收。II 类代表风机不得引入 I 类接地连接要求。缺少项目判据或实际排风结果使验收不完整。 | `vent-axia-494229j0626` |
| inventory_gate | 所有清单行 | 要求实际资源、条件性作业、废物/退回/不合格品和排放覆盖与本节点协议关联；检查钻孔或既有孔证据及保留的失败作业负担。最终交换前解决实际具体流/属性/单位身份；不得将异质伞形行绑定到方便的近似项。 |  |
| attribution_gate | 所有清单行 | 核对已验收计数分母、作业资源份额、上游覆盖、退回路径及废物去向；不得重复计入运输/燃料，不得将收集碎屑记为排放，也不得给失败作业已验收计数。披露 Range 证据缺口及资本品/工具排除项。 共享资产/服务须列出所有实际使用节点/作业、期间及完整分配证据。 |  |
| bilingual_projection | 所有清单行 | 要求中英文规则、卡片、来源归属、限定信息、计量基准及数值常数一致，且具有当前确定性规范英文 Markdown 结构化投影。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 边界明确的首次安装服务前景数据包；process 和 lifecyclemodel 是下游投影 |
| downstream_use | secondary_dataset；仅声明相容性及质量限制后用作 background_dataset |
| allowed_use | 比较或供应配置、起始接口和验收判据匹配的等效基本间歇式壁装风机安装服务 |
| excluded_use | 整栋建筑通风性能；风机日常运行；仅设备制造的数据集；新贯穿孔/套管/电路施工；空调、热回收或未经审查变体 |
| required_metadata | 实际基本间歇式型号及设备标识；电源电压/频率及 II 类设计；选定转速；墙体/基材及紧固件清单；套管尺寸/长度/坡度及室外防护格栅验收；既有供电/隔离及电缆相容性；安装朝向和面罩固定；电气试验范围/结果；实测排风试验方法、条件、送出风量及项目判据；安装日期/地点；实际钻孔或经检查的预制固定孔；失败作业及返工去向；交接记录；上游覆盖；部件/运输/资源/废物清单；归一化作业批 |
| required_quality_disclosure | 资源实测与估算之别；实际排风证据；未解决 UUID 及支持身份；缺少经验范围；排放缺口；分配驱动因素及敏感性；工具资本品政策；排除项；翻译/投影状态 |
| update_trigger | 风机变体、电气类别、紧固/基材或套管接口、测试/验收方法、上游关口、材料路线、废物/返工处理改变，或出现影响数量/身份的新证据 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| vent-axia-494229j0626 | handbook | Vent-Axia Silent Fan 安装说明，文件 494229J0626，第 3–6 页。 https://asset.eezybridge.com/nc/ba7b9546-29dd-40c4-87a7-885627281b87/494229.pdf | 代表性安装及套管/格栅接口；固定 II 类接线；基本 VASF100B 型号及转速设置；叶轮/风门和面罩保持检查。不提供通用安装材料质量、能耗、实际排风或项目验收判据。 |
