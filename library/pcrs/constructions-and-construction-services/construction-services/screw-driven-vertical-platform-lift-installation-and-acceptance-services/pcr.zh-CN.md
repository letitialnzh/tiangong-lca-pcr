---
pcr_id: pcr.screw-driven-vertical-platform-lift-installation-and-acceptance-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 螺杆驱动垂直轮椅升降平台安装与验收服务

## 1. 范围与适用性

本 PCR 适用于一台固定式、无围护、双停层 ACME 螺杆驱动垂直轮椅升降平台的首次安装与验收，其平台宽度必须有实际自承式配置文件证明。授权技师将供货塔架和平台与坡道、防护件、停层门、控制器、联锁、锚固件及约定的最终电气连接集成。输出为已验收的安装服务；后续乘客运行和维护不属于本施工阶段服务。室内或室外项目均须以实际型号和当地管辖要求允许为前提。

排除液压或曳引式升降设备、自动扶梯和自动人行道、移动式设备、需要墙体支承的宽平台配置、工厂围护结构、现场建造井道和底坑、现场制造升降设备、一般建筑施工及后续日常运行。项目专用混凝土基础和专用电源准备必须有明确的上游责任方及定量记录；新建工作不能作为无负担的既有建筑条件处理。若没有已验收且边界明确的准备工作交接，必须在前景数据包中纳入实测准备工作及必要的额外过程，之后才能使用本 PCR。实际支承或配置需要被排除结构时，应判定路线不适用。[`savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.screw-driven-vertical-platform-lift-installation-and-acceptance-services |
| classification_refs | CPC 3.0 54691；范围窄于全部升降设备和自动扶梯安装服务 |
| covered_products | 在约定基础和专用电源接口完成调试交接的固定式、无围护、双停层、自承式宽度螺杆升降平台安装服务 |
| excluded_products | 液压/曳引设备；自动扶梯/自动人行道；移动式、围护式、底坑、井道或墙体支承配置；后续运行与维护 |
| representative_product | Savaria Multilift 标准无围护固定螺杆驱动配置，须由实际有效的项目专用图纸确认 |
| production_route | 工厂成套设备收货；接口验收；授权现场组装、锚固和最终连接；调试、纠正/复测及检验；向所有者交接 |
| market_state | 在首次调试门槛完成验收的安装服务；不是通用设备销售或乘客运输服务 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已验收的固定式、无围护、双停层螺杆驱动垂直轮椅升降平台完整安装服务 |
| How much | 1 item |
| How well | 实际制造商、型号、序列号和图纸版本；经确认的自承式宽度、提升高度、额定载荷及出入口配置；基础、锚固、遮板、门和专用电源接口已验收；授权调试和规定的当地检验已通过；纠正事项已关闭 |
| How long or cycle | 一次首次安装作业，从本作业可归属的收货/进场和准备工作交接至签署交接，包含延误、纠正和复测。可重复使用设备按覆盖本作业及其他作业的完整寿命期间归属；不假设升降设备运行寿命或乘客循环次数。 |
| reference_flow_link | `accepted_lift_installation` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收的固定式无围护双停层螺杆驱动垂直轮椅升降平台安装服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 制造商/型号/序列号；实际项目专用图纸和授权安装指令版本；管辖地和批准；自承式宽度；提升高度/额定载荷/出入口；平台/坡道/防护件和门/联锁清单；基础/锚固/遮板接口；电源端点/电气额定参数和连接责任方；成套供货清单；实际调试/检验准则及结果；交接日期/安装方；上游准备工作责任；设备归属期间 |

计数标识已验收的作业及其配置，不表示不同提升高度、出入口、基础、电源或安全要求的安装服务可以等同。规划指南和所有者手册只支持路线识别，不能代替实际有效的授权项目专用安装与测试指令。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `accepted_count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 一项已验收的完整安装为 1 item，通过 cp_acceptance 采集。未验收组装件和重复测试不得新增已验收输出。 |
| `preserve_physical_units` | 所有清单行 | 各实际交换对应的属性 | 实际物理单位 | 电量保留 kWh，货运保留 tkm，设备使用保留 h，各材料保留实测 kg 或经验证的计数。每项最终具体交换须验证相容的流属性/单位组链；缺少支持是须披露的缺口，不能转换成物品计数。 |
| `configuration_and_test_units` | cp_acceptance; cp_interfaces | 实际记录的特征 | 实际单位和公差 | 几何尺寸/提升高度记录规定的 mm 或 m，载荷记录规定的 kg，电气量记录 V/A/Hz，找正/校正、锚固及测试要求使用授权单位，时长记录 h 或 min，并保留实际公差及验收依据。不得将规划名义尺寸、电源额定值或循环限制作为通用设定。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 为已验收作业交付的工厂螺杆升降设备套件；实际混凝土基础和专用电源终端具有明确的提供方、数量及批准，新建部分须有独立且边界明确的上游数据集 |
| starting_condition_role | 采购设备和责任明确的上游准备服务；既有基础/电源只有在证明其预先存在并披露实际归属后，才可作为既有建筑条件 |
| product_classification_scope | 所选螺杆平台路线的安装服务，窄于 CPC 安装服务叶节点 |
| recursive_input_rule | 同类别采购安装服务须有不重叠的供应方门槛及明确负担覆盖；不得将完整安装服务递归作为其自身完整输出的投入。 |
| upstream_dataset_requirement | 完整套件及每项实际额外组件、基础/电源工作、边界明确的设备/货运服务须关联相容上游数据集。供应方已包括的服务、材料、包装或资本负担只能有一个责任方。新基础/电源施工必须具备实测提供方范围；缺失时完整性受阻。 |
| disclosure | 披露基础和电气交接端点及责任、既有/新建工作、实际图纸和许可、套件组成、所有设备/提供方覆盖及完整寿命期间、排除的乘客运行/维护以及剩余场地责任。 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `installation_gate` | lift_installation | 纳入授权找正/校正与锚固、平台/坡道/防护件、项目要求的停层门及控制/联锁、遮板/防夹保护、最终连接、调试电量、规定的功能/安全检查、当地检验、纠正/复测及所有者记录/培训。实际授权指令和检验验收定义测试及通过限值；所有者操作说明本身不是完整调试方案。 | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `preparatory_work_owner` | pad_work; supply_work | 项目专用基础和专用电源准备记录为独立上游已验收服务，含提供方、实测数量、精确端点和门槛；上游负担计入一次。既有建筑条件处理须有预先存在证据；没有边界明确责任方的新工作须纳入前景实测范围，不能遗漏。排除任意整栋建筑负担。 | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `kit_and_extras` | factory_lift_kit; anchors; connection_components; consumables | 核对实际工厂供货清单：塔架/螺杆/电机/平台、坡道/防护件/底部安全传感装置、门/控制/联锁/选件及工厂润滑剂，在随套件供应时均属于套件。只新增单独供应的锚固件、遮板/门部件、线缆/连接件及实际额外润滑剂/清洁剂。螺杆驱动不意味着液压油投入。 | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `asset_periods` | equipment_provision | 识别每项可重复使用的起吊/登高/安装/测试设备及其所有者、使用作业/节点和报告期间。通过实际有界提供方数据集或有据可查的完整寿命归属，计入生产、部署/使用、维护/更换及最终拆除/寿命终止。提供方未覆盖阶段必须另行计入；仅租用小时发票不能抹去资本负担。 |  |
| `physical_custody` | 所有清单行 | 按实际身份记录本作业收货和发料总量、实际向外可用退回、带有结转负担的期末留存、废物和已表征释放。期末留存为平衡状态而非向外产品。各可变卡展开为零、一项或多项实际身份，不得把不同材料、服务或污染物合为一条流。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：单独供应的相容升降设备锚固组件 (`anchors`)

过程／待建立交换的方向／类型：`lift_installation` / `inputs` / `product`.

实际单供锚固件/紧固件将自承式底座连接到已验收基础。按实际材料、锚固规格和供货状态展开；套件已含组件不得重复投入。 制造商来源仅支持设备、任务和接口背景；数量、按总量记录的物料保管与移交责任及 LCA 归属由指定前景协议建立。

- 采集对象：单独供应的相容升降设备锚固组件
- 流属性/单位：质量 / kg
- 数量规则：按实际锚固身份记录实测收货/发料 kg 总量，核对已安装、损坏、退回、留存数量及授权锚固记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

数量范围证据需求：需要实际锚固清单、组件质量和发料/更换记录；规划锚固布局不能提供通用 kg 或计数因子。

#### 采集要求：单独供应的遮板、门和电气连接组件 (`connection_components`)

过程／待建立交换的方向／类型：`lift_installation` / `inputs` / `product`.

将实际单供遮板、门/锁/控制部件、线缆/导管/连接件及最终连接五金按不同材料/产品身份和状态展开。它们属于同一职责族，不是一条合计材料流。 制造商来源仅支持设备、任务和接口背景；数量、按总量记录的物料保管与移交责任及 LCA 归属由指定前景协议建立。

- 采集对象：单独供应的遮板、门和电气连接组件
- 流属性/单位：质量 / kg
- 数量规则：使用供应方质量或经校准称量，按不同身份记录实际组件收货/发料 kg 总量；核对已安装数量、实际向外可用退回、废物和期末留存，以及套件/上游电源工作覆盖。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

数量范围证据需求：需要实际图纸、供货清单和组件质量；不能采用共同质量范围或混合材料求和。

#### 采集要求：实际单独消耗的安装润滑或清洁产品 (`consumables`)

过程／待建立交换的方向／类型：`lift_installation` / `inputs` / `product`.

只纳入本次交接前有记录的额外润滑剂/清洁剂或其他连接耗材。按实际配方和浓度展开；工厂填充归入套件。螺杆驱动不产生液压油投入。 制造商来源仅支持设备、任务和接口背景；数量、按总量记录的物料保管与移交责任及 LCA 归属由指定前景协议建立。

- 采集对象：实际单独消耗的安装润滑或清洁产品
- 流属性/单位：质量 / kg
- 数量规则：按产品身份记录本作业实际收货/发料 kg 总量；核对安装消耗、实际向外可用退回、废物和期末留存；适用时用记录证明无额外耗材收货/使用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

数量范围证据需求：需要实际授权任务、产品组成和实测消耗/退回；后续定期加脂不属于本次作业。

#### 采集要求：可单独归属的进场运输及防护包装 (`packaging`)

过程／待建立交换的方向／类型：`lift_installation` / `inputs` / `product`.

实际木材/纸板/塑料或可复用包装按身份和所有权展开。记录实体包装用于保管责任平衡；套件供应方已覆盖上游包装时，不再新增第二份材料负担。

- 采集对象：可单独归属的进场运输及防护包装
- 流属性/单位：质量 / kg
- 数量规则：按实际材料记录包装实测 kg 总量；核对可复用退回、留存和废物，上游负担仅有一个责任方。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

数量范围证据需求：需要实际包装收货/称重、供应方覆盖及复用记录，不采用通用包装比例。

#### 采集要求：归属的可复用安装、起吊、登高和测试设备供给 (`equipment_provision`)

过程／待建立交换的方向／类型：`lift_installation` / `inputs` / `product`.

每项实际可复用设备单列，使用有界提供方覆盖或自有设备完整寿命生产/使用/更换/拆除归属。识别本次安装和其他使用作业/期间；不包括升降平台全寿命乘客运行。

- 采集对象：归属的可复用安装、起吊、登高和测试设备供给
- 流属性/单位：时长 / h
- 数量规则：记录各设备实际使用 h 及提供方服务范围；用跨所有使用期间的有据可查总服务量归属完整寿命负担。电量/燃料仅在提供方未覆盖时单独计入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：需要设备身份、计量/日志小时、寿命服务记录、更换/寿命终止范围及不确定性；不假设寿命、利用率或租赁小时负担因子。

#### 采集要求：本作业实际可归属的进场和退回货运服务 (`freight`)

过程／待建立交换的方向／类型：`lift_installation` / `inputs` / `product`.

按实际货运段、提供方和运输方式展开套件、材料或残余物/退回保管责任运输。提供方或供应方未包括的进退场应纳入。

- 采集对象：本作业实际可归属的进场和退回货运服务
- 流属性/单位：运输 / tkm
- 数量规则：各段采用实际载荷吨数和行驶 km，处理实际共载/回程归属及供应方覆盖；保留 tkm 服务单位并明确验证缺口。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_logistics`

数量范围证据需求：需要实际发运质量、路径距离、方式/载荷分配及回程；不采用通用距离或空载回程因子。

#### 采集要求：范围内安装或起吊设备实际燃料 (`fuel`)

过程／待建立交换的方向／类型：`lift_installation` / `inputs` / `product`.


本节点真实上游燃料供应，尚未扣除可用向外退出量。按 fuel_supply_fate 保留未退回废物/损失的供应负荷，并单独确定燃烧活动。保留真实燃料牌号、设备工况、供应商覆盖、密度/状态和计量不确定性。

- 采集对象：范围内安装或起吊设备实际燃料
- 流属性/单位：质量 / kg
- 数量规则：真实上游供应燃料质量 G_fuel 仅除以声明参考单位下独立实测的正值验收批量 D_fuel 一次；保留各互斥燃料去向，按第8节另行确定实际燃烧 B_fuel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

数量范围证据需求：需要实际设备燃料记录及转换不确定性，或有证据证明无内燃使用；不采用通用柴油因子。

#### 采集要求：实际向外退回的可用安装材料或可复用包装 (`usable_material_return`)

过程／待建立交换的方向／类型：`lift_installation` / `outputs` / `product`.

各实际可用剩余材料/包装按身份和接收方展开。产品保管责任离开与废物分开；拒收零件只有有据可查的可用性才可归为产品。已消耗燃料投入使用独立燃料账；未用燃料排除于此退回族。

- 采集对象：实际向外退回的可用安装材料或可复用包装
- 流属性/单位：质量 / kg
- 数量规则：按身份和转移记录获取实际向外 kg；核对收货/发料总量、已安装使用和带有明确结转负担的期末留存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_custody`

数量范围证据需求：需要实际称重及保管责任/质量验收；留存库存或声称避免生产都不能提供退回估算。

#### 采集要求：送往明确路线的实际安装和纠正废物 (`installation_waste`)

过程／待建立交换的方向／类型：`lift_installation` / `outputs` / `waste`.

实际丢弃损坏组件、边角料、不可退包装和受污染耗材，按组成/危险状态及处理目的地展开。拒收组装状态源于 lift_installation；记录本节点纠正或实际处置离开，保留相关负担。

- 采集对象：送往明确路线的实际安装和纠正废物
- 流属性/单位：质量 / kg
- 数量规则：按实际废物身份、承包方和路线计量向外 kg；关联替换材料、搬运和复测记录。未决拒收不得计入已验收输出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_custody`

数量范围证据需求：需要废物称重、表征、转移/处理记录及实际拒收去向；不采用固定废料率或回收产率。

#### 采集要求：安装任务的实际已表征基本流释放 (`direct_releases`)

过程／待建立交换的方向／类型：`lift_installation` / `outputs` / `elementary`.

这里只记录跨越环境边界的实际释放，每项按物质/物种或颗粒类别及接收空气/水/土壤介质展开。收集钻孔粉尘或送外处置清洁剂属于废物。不预设液压泄漏、通用 VOC 合计或上游发电排放。

- 采集对象：安装任务的实际已表征基本流释放
- 流属性/单位：质量 / kg
- 数量规则：实测释放 kg，或由实际任务活动与有依据的物质特定因子计算，记录收集率、接收介质和不确定性；适用时记录筛查和有证据的零值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

数量范围证据需求：需要任务监测或有支持的物种/介质因子及实测活动；未知污染物身份为采集缺口，不能使用宽泛流 UUID。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `lift_installation` | 固定式螺杆升降平台组装、连接与调试 | required | 实际为固定式无围护双停层自承式宽度路线，基础/电源交接已验收；具备授权安装和实际调试要求 | 独立组装/集成套件、锚固和连接职责，形成一个已验收的调试完成安装。收货/文件检查留在本节点。不合格组装件在本节点纠正/复测，或按实际退回/废物保管责任离开；失败状态绝非已验收输出。 | 1 item 已验收安装 |


### 过程：固定式螺杆升降平台组装、连接与调试 (`lift_installation`)

#### 输入

##### 产品流

###### 作业供货门槛的完整工厂螺杆驱动轮椅升降平台套件 (`factory_lift_kit`)

实际完整套件从供应方跨入作业边界。识别型号、序列号、选件和供货清单；独立供应的额外件单列。它不是原金属、液压升降设备或运行服务。 制造商来源仅支持设备、任务和接口背景；数量、按总量记录的物料保管与移交责任及 LCA 归属由指定前景协议建立。

- 选定流：作业供货门槛的完整工厂螺杆驱动轮椅升降平台套件
- 流属性/单位：物品数量 / item
- 数量规则：按配置记录为本作业供应和实际发用的套件总数，包含替换件；核对真实退回套件和期末留存，不得重复净额扣除退回。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

数量范围证据需求：需要按序列号及完整套件边界采集套件、替换和退回记录；1 项已验收安装不能证明总投入恰为 1 套。

###### 已验收的项目专用混凝土基础准备服务 (`pad_work`)

只用于真实独立负责的新建或改建基础交接，不是文件镜像节点。提供方服务包含项目要求的实测开挖、垫层、钢筋、混凝土、保温、机械、废物及约定边界验收。既有基础须记录证据，不能将新工作视为免费。 制造商来源仅支持设备、任务和接口背景；数量、按总量记录的物料保管与移交责任及 LCA 归属由指定前景协议建立。

- 选定流：已验收的项目专用混凝土基础准备服务
- 流属性/单位：物品数量 / item
- 数量规则：记录实际可归属的已验收有界基础服务数量及其底层实测工作量；零新建工作须有预先存在证据。若没有充分上游交接，显式建模实测准备工作。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_interfaces`
- 来源：`savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

数量范围证据需求：需要实际基础设计、提供方工作量及已验收接口；名义室外基础图不是通用体积/质量范围。

###### 已验收的项目专用电源准备服务 (`supply_work`)

只用于独立负责的上游专用电源、隔离开关和终端准备，须有确定端点；范围内最终连接仍由安装方负责。新线缆/管路/保护装置工作及其机械/废物不能消失。 制造商来源仅支持设备、任务和接口背景；数量、按总量记录的物料保管与移交责任及 LCA 归属由指定前景协议建立。

- 选定流：已验收的项目专用电源准备服务
- 流属性/单位：物品数量 / item
- 数量规则：记录实际已验收电源服务及底层实测线缆/保护/路径数量，并识别最终连接责任方；零新建工作须有既有接口证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_interfaces`
- 来源：`savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

数量范围证据需求：需要实际电气设计及提供方实测工程量；互有冲突的公开名义参数不能确定实际数量或额定参数。

###### 供给作业的安装和调试电量 (`electricity`)

分别计量范围内实际平台调试/测试、工具充电及电动搬运电量。排除后续乘客运行；有界提供方已覆盖的电量不重复计入。

- 选定流：供给作业的安装和调试电量
- 流属性/单位：能量 / kWh
- 数量规则：由作业电表/分表实测可归属 kWh，或使用实际设备运行时间和实测功率记录，含失败测试及复测；分解回路和提供方覆盖。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

数量范围证据需求：需要实际电表/充电/测试日志及计量不确定性；电机铭牌功率和宣传安装时长不能作为消耗范围。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的固定式无围护双停层螺杆驱动垂直轮椅升降平台安装服务 (`accepted_lift_installation`)

只有授权安装方验收组装/锚固/接口、实际安全和功能调试及规定的当地检验通过、全部纠正/复测关闭、记录/培训/维护职责移交后，真实最终服务才向所有者输出。单台设备验收不证明整栋建筑无障碍合规。 制造商来源仅支持设备、任务和接口背景；数量、按总量记录的物料保管与移交责任及 LCA 归属由指定前景协议建立。

- 选定流：已验收的固定式无围护双停层螺杆驱动垂直轮椅升降平台安装服务
- 流属性/单位：物品数量 / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024`

数量范围证据需求：准确数量定义参考单位而非经验产率范围。采集实际已验收作业数量、配置和签署的调试/检验/交接记录；无默认失败率。

###### 实际向外退回且处于可用计数供货状态的工厂套件或升降组件 (`usable_kit_return`)

只有完整计数套件或具有相容身份的可追溯计数组件，实际退回供应方/其他明确保管方时才记录。内部纠正/复测留在 lift_installation；期末库存不能变成虚构产品输出。

- 选定流：实际向外退回且处于可用计数供货状态的工厂套件或升降组件
- 流属性/单位：物品数量 / item
- 数量规则：按对应进场身份和转移记录，记录实际向外计数总量。原收货保留总量，不得先净额扣除同一退回后又记录此输出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_custody`

数量范围证据需求：需要实际退回授权、实体转移和可用性证据；不假设退回比例。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `accepted_job_burdens` | lift_installation | 直接安装、替换/纠正及失败/重复测试负担归属已验收作业。缺陷和规定检验未关闭前不得形成已验收输出。终止/未验收作业保留单独披露的失败作业去向，不能静默丢弃或计为第二项已验收服务。 |  |
| `asset_complete_life_attribution` | equipment_provision | 逐项列明共享可复用设备的生产/购置、部署/使用、维护/更换和拆除/寿命终止阶段，以及所有使用作业/节点和报告期间。优先以实际服务计量小时作为因果分配依据；小时不能代表磨损/服务时须说明其他依据。以完整服务分母核对归属份额，记录期间特定决策和不确定性，避免每年重复计入完整寿命负担。更换或终止覆盖未解决时，不能定稿。 |  |
| `provider_and_energy_ownership` | 全部投入 | 核对提供方覆盖与直接材料/能源/货运/设备行。一个供货套件或有界服务不能重复承担同一组件、工具能源、包装或资本负担。基础和电源按实际有界交接数量承担负担，不分配无关整栋建筑。 |  |
| `returns_and_recovery` | usable_kit_return; usable_material_return; installation_waste | 按总量记录真实物料移交和保管状态，并采用一致的负担转移。留存库存带负担结转而非输出。可用向外退回的记录负担转移一次；废物遵循真实处理。安装/纠正/测试负担保留在本作业；不自动给予替代生产/回收信用或任意负投入。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | lift_installation | 套件、实际额外件、耗材和包装 | 收货/发料/称重 | job_id; date; supplier; identity; serial; specification; supplied_state; kit_inclusion; gross_receipt; actual_issue; installed_quantity; return_quantity; closing_stock; unit; measurement_uncertainty | 按各不同身份，将供应方供货清单和序列号与收货总量、作业发料、校准称重或可追溯供应方质量核对。期末留存保留负担责任方。只有本作业可归属数量才除以同配置已验收安装数量。 | item; kg | 每次事件/读数及作业关闭 | 完整首次安装作业含纠正/复测；设备历史覆盖所有相关期间 | 实际安装场址及明确上游提供方/设备 | per reference flow | 发票、校准称重/供应方质量、图纸、签署的发料/保管责任核对；不得混合身份求和 |
| cp_interfaces | lift_installation | 基础及专用电源准备交接 | 设计/工程量/验收 | job_id; interface_id; provider; owner; existing_or_new; boundary_endpoint; drawing_revision; measured_work; quantity; unit; electrical_rating; tolerance; acceptance_source; acceptance_result; final_connection_owner; upstream_dataset_coverage | 在精确端点验证实际基础/电源设计和完工，记录实体工作量及独立上游数据集覆盖。既有建筑条件须有预先存在证据。真实项目专用服务除以已验收安装数；缺失新工作不能换成零。 | 实际 mm; m; m3; kg; V; A; Hz; 服务 item | 每次事件/读数及作业关闭 | 完整首次安装作业含纠正/复测；设备历史覆盖所有相关期间 | 实际安装场址及明确上游提供方/设备 | per reference flow | 批准的有效项目专用图纸、混凝土/基础/锚固和电气签署、实测工程量、提供方范围及边界核对 |
| cp_assets | lift_installation | 可复用设备完整寿命份额 | 设备/服务/期间台账 | job_id; asset_id; owner; provider_scope; phase; period_id; consuming_job; consuming_node; use_hours; total_service_hours; replacement_event; termination_event; capital_burden; excluded_coverage; attribution_basis; uncertainty | 记录安装/起吊/登高/测试设备实际小时及所有相关使用作业/期间；验证生产、使用、更换及最终拆除覆盖。应用有据可查的完整寿命服务份额及期间特定责任，再将本作业归属负担除以已验收数。提供方缺口须单独覆盖。 | h；实际上游负担单位 | 每次事件/读数及作业关闭 | 完整首次安装作业含纠正/复测；设备历史覆盖所有相关期间 | 实际安装场址及明确上游提供方/设备 | per reference flow | 计量/日志、提供方边界、完整寿命台账、更换/寿命终止证据、份额核对及不确定性 |
| cp_logistics | lift_installation | 真实货运段及进退场 | 发运/路径记录 | job_id; leg_id; provider; mode; origin; destination; load_identity; load_mass_t; distance_km; shared_load_basis; return_custody; supplier_included; allocation_uncertainty | 每段使用实际发运质量和路径 km，包含真实退回及进退场。按有据可查因果份额归属共载，并检查供应方/提供方覆盖；可归属 tkm 除以已验收安装数。 | t; km; tkm | 每次事件/读数及作业关闭 | 完整首次安装作业含纠正/复测；设备历史覆盖所有相关期间 | 实际安装场址及明确上游提供方/设备 | per reference flow | 运单、实测质量、路径证据、提供方覆盖及无重复回程段 |
| cp_energy | lift_installation | 调试、工具和搬运能源/燃料 | 电表/燃料记录 | job_id; date; equipment_or_circuit; task; test_id; failed_or_repeat; meter_start; meter_end; runtime_h; measured_demand_kW; fuel_identity; fuel_mass_kg; fuel_volume; fuel_volume_unit; density; density_unit; temperature; temperature_unit; unit; provider_inclusion; uncertainty; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | 分表计量调试及工具/搬运回路，或记录实际时间和实测功率。排除后续乘客使用。核对实测已消耗燃料及有证据的密度转换；未用/退回燃料在燃料账单列，不进入 usable_material_return；纳入纠正/复测并排除提供方已覆盖能源；本作业可归属量除以已验收数。 按 fuel_supply_fate 分列供应与燃烧；采集各互斥去向、真实分母及单位，保留未退回废物/损失的供应负荷，披露未知去向。 | kWh; kg; 实际来源体积单位 | 每次事件/读数及作业关闭 | 完整首次安装作业含纠正/复测；设备历史覆盖所有相关期间 | 实际安装场址及明确上游提供方/设备 | per reference flow | 电表校准/读数、测试/任务时间戳、燃料/密度证据、不确定性及回路/提供方范围 |
| cp_acceptance | lift_installation | 实际最终已验收服务门槛 | 安装/测试/检验/交接 | job_id; model; serial; configuration; drawing_revision; authorized_instruction_revision; jurisdiction; installer_authorization; travel; platform_width; geometry_unit; rated_load; load_unit; supply_voltage_V; supply_current_A; supply_frequency_Hz; geometry_tolerance; load_tolerance; supply_tolerance; tolerance_source; pad_anchor_fascia_signoff; gate_interlock_guard_record; test_method; test_load; test_load_unit; test_duration; test_duration_unit; test_tolerance; pass_limit_source; actual_result; defect_id; correction; retest_result; inspection; owner_handover; accepted_count | 授权技师记录实际安装、配置的安全功能及授权测试方案/结果，包含全部适用单位/公差；保留所需检验验收、缺陷关闭、所有者指导/记录及后续维护责任。只计符合本范围的签署已验收作业，再归一化为 1 item。 | item；实际测试/几何/电气单位 | 每次事件/读数及作业关闭 | 完整首次安装作业含纠正/复测；设备历史覆盖所有相关期间 | 实际安装场址及明确上游提供方/设备 | per reference flow | 授权、有效作业图纸/指令、签署测试及规定检验、纠正缺陷记录和所有者交接 |
| cp_custody | lift_installation | 可用退回、期末留存和废物 | 转移/库存/处置 | job_id; source_identity; source_receipt; defect_id; correction_task; disposition; usability; recipient; transfer_id; gross_outward_quantity; closing_stock_quantity; carried_burden_owner; waste_class; treatment; unit; uncertainty | 按实际身份和保管责任文件称重/计数真实向外退回及废物，区分内部返工和留存。核对收货总量与已安装使用、实际向外退回、废物和期末留存。向外归属量除以已验收安装数，保留负担转移方法。 | item; kg | 每次事件/读数及作业关闭 | 完整首次安装作业含纠正/复测；设备历史覆盖所有相关期间 | 实际安装场址及明确上游提供方/设备 | per reference flow | 签署退回/可用性验收、称重、期末库存账、废物运输/处理记录及缺陷关联 |
| cp_releases | lift_installation | 实际物种及接收介质 | 监测或任务特定因子 | job_id; task; substance_or_particle_class; receiving_compartment; activity; activity_unit; factor_source; factor_unit; captured_fraction; release_mass_kg; uncertainty; zero_screen_evidence | 先筛查实际任务；逐项表征真实污染物/介质并实测 kg，或将有支持的任务特定物质因子应用于实测活动。记录收集且不把已收集废物作为排放。可归属释放除以已验收数；未知身份保留缺口。 | kg；实际因子/活动单位 | 每次事件/读数及作业关闭 | 完整首次安装作业含纠正/复测；设备历史覆盖所有相关期间 | 实际安装场址及明确上游提供方/设备 | per reference flow | 监测/校准或可追溯适用因子、物种/介质/收集证据及不确定性 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `job_normalization` | 所有清单行 | 各实际身份的有据可查作业归属实体数量或负担，除以同配置已验收安装数量；收货总量、向外退回、废物和期末留存分别核对。最终参考输出为 1 item。 | 实际记录；accepted_count；cp_acceptance | 每参考流数量 |  |
| `asset_share` | equipment_provision | 单独负责的完整寿命设备负担，按本作业实际服务小时占跨全部使用作业/期间有证据总服务小时的比例归属；核对份额和阶段，再归一化至已验收安装。采用其他因果依据时须论证披露。 | cp_assets；实际阶段负担；完整寿命服务分母 | 每参考流本作业设备归属负担 |  |
| fuel_supply_fate | fuel | 对每种真实燃料身份及互不重叠的节点/事件期间，G_fuel = 期初可用燃料 + 外部接收量 - 期末可用燃料库存（含设备油箱）；扣除容器皮重，边界内领用/转移不再作新增接收。G_fuel 为真实可用向外退回 U_fuel、向外转移 X_fuel、收集的未燃燃料 W_fuel 和未收集燃料 P_fuel 扣除之前的物理产品输入总量。各去向互斥并分别解析实际产品、废物流或物质/介质身份；泄漏事件总量仅作核查，不重复扣除。W_fuel 和 P_fuel 指所含燃料质量，不是受污染吸附物或废水的总质量。仅在完整且有证据的去向台账下，B_fuel = G_fuel - U_fuel - X_fuel - W_fuel - P_fuel；未知去向保留缺口，不假定已燃烧。只有有独立依据的 B_fuel 驱动燃烧排放。所有未退回的未燃燃料、废物和损失均保留上游供应负荷；真实可用退出物仅可携带有记录的原始未用材料负荷，不再次扣减净输入或给予避免生产信用。期初/期末库存负荷只结转一次。各物理量仅除以 D_fuel 一次；D_fuel 为本 PCR 第3-4节规定的参考单位下独立实测的正值验收批量（验收体积、面积、轴向长度、钢材质量或完整验收计数），不是燃料量或中间产出。现有 actual_consumed/燃料消耗字段是燃烧活动记录，不能替代上游输入 G_fuel。供应商已含燃料和排放只设一个责任方，不重复加入重叠的前景供应或燃烧。 | opening fuel; external receipts; closing intact fuel; U_fuel; X_fuel; W_fuel; P_fuel; D_fuel; actual node fuel protocol and fate evidence | G_fuel product input; independently supported B_fuel; separately resolved exclusive outlets |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `route_identity` | 参考输出和套件 | 依实际型号/项目图纸确认固定式/无围护/双停层 ACME 螺杆路线及自承式宽度；公开名义指南和冲突额定参数不能代替实际设计验收。 | 有效授权项目图纸、型号/序列号、供货清单、管辖要求和安装方授权 |
| `quantity_and_custody` | 所有清单行 | 保留实际物理单位、测量/校准和不确定性，并按身份核对收货/发料/退回/库存/废物平衡；零须有积极证据。缺数量或范围证据是数据缺口而非零。 | 关联协议及完整作业台账 |
| `asset_and_provider_coverage` | 设备；基础；电源；货运；能源 | 审查单一责任和所有相关阶段/期间；披露服务分母、更换/终止及缺口，不重复提供方覆盖。 | 提供方范围及实测接口；完整寿命设备/保管责任核对 |
| `acceptance_and_temporal_coverage` | accepted_lift_installation | 覆盖收货/进场至纠正/复测/检验/交接日期；验收数不得有未决缺陷，不含后续乘客电量或维护。 | 签署 cp_acceptance 及对应任务/测试记录 |
| `concrete_identity_and_ranges` | 全部交换卡 | 最终 TIDAS 生产前，各实际交换须解析为经验证的具体 UUID 及相容支持链，保留配置/提供方/地理/状态和计量匹配。采集各卡指定范围证据；本候选规则不提供通用材料/能源/寿命默认值。 | 实际流详情/支持证据；计量/称重/任务数据及不确定性 |


## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `route_fit` | 参考产品 | 排除需要液压/曳引/移动/围护/井道/底坑或宽平台墙体支承处理的路线。生产数据集前检查实际项目路线、有效授权图纸和支承/电源接口。 | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `gate_complete` | accepted_lift_installation | 必须有授权安装方、已验收基础/电源/锚固/遮板/防护/门/联锁配置、实际安全/功能测试和规定的当地检验记录、已关闭纠正/复测以及签署的所有者交接。缺调试准则或未决缺陷阻止已验收输出；不声明整栋建筑无障碍合规。 | `savaria-multilift-current`; `savaria-multilift-planning-2020`; `savaria-multilift-owner-2024` |
| `units_balance_identity` | 所有清单行 | 验证 1 item 最终输出和一致参考分母、关联的节点专用协议、物理单位及相容支持链；逐项实际组件/提供方/废物/污染物身份；总量平衡含真实退回和非输出期末留存。仅名称相似不得固定 UUID。 |  |
| `shared_period_and_rework` | equipment_provision; installation_waste | 必须列明全部共享使用作业/节点和期间、完整寿命阶段覆盖、实际分母及单一责任。未决更换/终止/覆盖阻止定稿。拒收组装件关联到 lift_installation 纠正/复测或实际可用退回/废物离开，保留负担并从验收输出排除。 |  |
| `boundary_completeness` | pad_work; supply_work; 全部投入 | 新建基础/电源须有实测工作量及明确有界责任方或已纳入，既有建筑零新工作须有证据，核对套件/额外件且不重复提供方/材料/能源/包装/货运。披露每项不可得数量、范围及身份；缺失非零。 |  |
| validate_fuel_supply_fate | fuel | 按实际燃料协议、库存和供应商覆盖核查 G_fuel、B_fuel 及各互斥去向。未退回的未燃废物/损失保留上游负荷；去向、燃料组分或正值 D_fuel 未解决时，不得宣称燃料定量清单完整。不以燃烧活动替代采购燃料，不同时扣减泄漏总量及其各组成去向。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景施工阶段安装服务数据包，过程/生命周期模型投影保留相同实际接口及验收门槛 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在调试交接门槛符合实际固定式无围护双停层自承式宽度螺杆平台配置的安装 |
| excluded_use | 液压/曳引/自动扶梯、移动/围护/井道/底坑/墙体支承路线；整栋建筑无障碍认证；乘客运输、全寿命运行或维护 |
| required_metadata | 参考限定信息；型号/序列号/配置；有效授权指令/图纸版本；实际许可/管辖/测试限值；日期；边界和责任方；上游套件/基础/电源/提供方覆盖；实际设备阶段/期间和服务分母；保管责任/缺陷关闭 |
| required_quality_disclosure | 未决身份/支持及范围证据、实测数量/校准/不确定性、缺失提供方/资本或新工作覆盖、返工/复测及废物/退回/库存平衡；实质缺口未解决不能定稿 |
| update_trigger | 型号/配置/驱动或场地接口变化；授权图纸/指令或管辖要求变化；供货/套件范围变化；新增实测活动或设备寿命证据；具体 UUID/支持验证更新 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | 联合国 CPC 3.0 解释说明，2025年6月30日，印刷页296；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 升降设备/自动扶梯安装范围；维护另属其他类别 |
| savaria-multilift-current | handbook | Savaria Multilift 官方产品页，访问日期2026-10-16；https://www.savaria.com/wheelchair-lifts/products/multilift-vpl?lang=en | 当前固定螺杆路线、混凝土锚固/遮板/电气准备及配置区别；不提供默认数量 |
| savaria-multilift-planning-2020 | handbook | Savaria Multilift 公共规划指南，部件号000790，25-m08-2020，第3–9页；https://files.savaria.com/wp-content/uploads/2026/01/Multilift-Public-Planning-Guide.pdf | 仅名义规划及必须采用项目专用图纸；塔架/平台/螺杆、自承式宽度限制及基础/锚固/停层门接口；非通用设计数量 |
| savaria-multilift-owner-2024 | handbook | Savaria Multilift 所有者手册，部件号000609，30-m01-2024，第2、6–9页；https://files.savaria.com/wp-content/uploads/2026/01/Multilift-Owners-Manual.pdf | 授权技师及安装记录/所有者责任、门/底部安全传感/紧急功能/锁的操作；实际调试指令须来自授权项目证据 |
