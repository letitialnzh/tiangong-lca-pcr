---
pcr_id: pcr.constructions-and-construction-services.construction-services.wall-mounted-electric-panel-heater-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# I 类壁挂式电阻面板取暖器安装服务

## 1. 范围与适用性

本 PCR 适用于在既有准备就绪的墙体和适用、可隔离的固定接线点，首次安装成套 I 类壁挂式电阻面板取暖器。服务包括来料状况检查、使用制造商配套支架、适配墙体基材的固定、竖直安装及锁定检查、合格电工完成固定接线、保护接地和所需电气核验、控制器初始化、有限功能加热测试、清理及签署交付。电器和实际新增部件是该服务的上游投入；必须披露这一边界，防止建筑模型再次计入。

范围仅覆盖必须保护接地的 I 类设备，排除 II 类设备。Dimplex PLXE Series C Issue 7 说明书提供该 I 类路线中的示例型号，并非所有电器的通用规格。PDF 第 3、7 页要求接地和适用固定布线；第 8-9 页说明随附 H 形支架、固定件、挂钩及锁定卡扣；第 10 页说明首次通电设置和可能的初始气味。采用实际型号的现行说明并保留等效证据。排除新支路电路、电源升级、水暖分配系统、锅炉、热泵、独立落地电器、既有取暖器维修或更换及交付后的日常供暖。没有合规电源或足够墙体支撑属于范围不满足，不能视为被省略的安装操作。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.wall-mounted-electric-panel-heater-installation-services |
| classification_refs | cpc:3.0:54631；供暖设备安装服务；拟采用 narrower 关系，须经语义接受 |
| covered_products | 成套 I 类电阻面板取暖器的首次固定壁挂安装及测试交付 |
| excluded_products | 新电路及电源整改；水暖系统；锅炉；热泵；独立落地电器；日常使用；更换或维修服务 |
| representative_product | 带制造商配套 H 形支架及原装电源线的 I 类面板取暖器；Dimplex PLXE Series C 仅为示例 |
| production_route | 核实准备就绪的接口；检查套件；必要时定位并钻实际固定孔；固定 H 形支架；挂钩及卡扣接合；固定接线；电气核验；控制器初始化；有限加热测试；签署验收 |
| market_state | 现场交付时安装、接线、测试并验收的服务；不是出厂电器或全寿命供热 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一台 I 类壁挂式电阻面板取暖器的已验收首次安装 |
| How much | 一台已声明电器的一项验收安装 |
| How well | 配套 H 形支架固定于声明基材；方向、锁定及型号净距正确；适用可隔离电源及保护接地；有记录的电气和功能加热测试验收；控制器初始化；签署交付 |
| How long or cycle | 一次安装作业，包括归属返工和有限调试，止于验收；不输出采暖寿命服务 |
| reference_flow_link | `accepted_installation` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 测试交付时已验收的 I 类壁挂式电阻面板取暖器安装服务 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 制造商/型号/序列号；额定电输入；随附支架及部件覆盖；墙体/基材；固定方案及新钻孔/预留孔状态；型号方向/净距；电源电压/接线/隔离/接地；测试标准/结果和实际加热测试时段；控制器设置；地点/日期/验收；上游配送及部件负荷覆盖 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 采用相同声明电器配置的一项验收安装；失败或待定安装不计入验收分母。 |
| electricity_record | site_electricity | Energy | kWh | 记录实际安装及调试用电；铭牌 W 或 kW 是额定功率，不能替代消耗的 kWh。 |
| component_measurement | fixings_connections; packaging_waste; drilling_debris; electrical_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留材料特定实测质量及校准称量或可追溯件数转质量证据；不得将整机质量当作新增固定件质量。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 既有已认可墙体/基材及适当额定、可隔离的固定电源/接线点；成套取暖器及新增部件处于各自声明的供货门槛 |
| starting_condition_role | 既有场地接口加来料产品门槛；本安装记录不声明墙体或新电路建造 |
| product_classification_scope | 仅供暖设备安装中的本较窄 I 类电阻面板取暖器安装服务 |
| recursive_input_rule | 同类分包安装服务投入必须替代其有据的工作包；同一物理工作只能选该服务或其拆分清单，不得两者并计 |
| upstream_dataset_requirement | 匹配实际取暖器套件、随附支架/电源线、新增零件、电力、人员出行/货运及声明的工具服务；明确废物与接收处理及边界归属 |
| disclosure | 声明墙体/电源就绪、钻孔状态、套件/包装及配送覆盖、区域电力、测试、拒收路线、工具/出行分摊及缺失直接释放表征 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| start_interfaces | install_test_handover | 没有适用墙体或固定电源时拒绝纳入本范围。记录接口证据；不得将新电路、墙体加固或预钻孔工作隐藏为零。 | `dimplex-plxe-series-c-issue7` |
| mount_connect | install_test_handover | 纳入真实电器套件及单独新增的固定和接线部件；采用配套支架、正确方向和净距，挂钩接合并锁定；本有据 I 类路线要求合格固定接线及保护接地。 | `dimplex-plxe-series-c-issue7` |
| commissioning_gate | install_test_handover | 签署验收之前纳入安装用电、控制器初始化、电气核验、有限加热测试及纠正工作；排除交付后的日常供暖。记录真实通过标准和结果，不宣称寿命供暖性能。 |  |
| direct_releases | airborne_drilling_release; initial_heat_release | 纳入实际钻孔和首次加热已表征的释放。潜在气味须披露及表征；未知排放表示覆盖不完整，不是零或通用 VOC。 |  |
| logistics_tools | material_transport; installer_travel; tool_access | 发生且属于本边界时，纳入可归属配送、安装人员到场及可重复使用设备服务；披露上游已含项目、共用到场及提供者覆盖以防重复。 |  |
| `system_boundary_rule_6` | foreground_system_boundary | 共用基础设施披露：当到场、计量时段或可重复使用工具服务跨作业时段共用，记录共用资产/服务编号、本安装节点及所有其他消费作业、共同时段和有据分摊驱动。设备寿命清单由服务提供者负责，本节点记录归属使用服务，不虚构工具寿命。全部作业分摊必须与唯一共用总量核对。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |


### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：带配套 H 形支架及原装电源线的成套 I 类电阻面板取暖器 (`heater_package`)

过程／待建立交换的方向／类型：`install_test_handover` / `inputs` / `product`.

记录进入本作业的每台 I 类电器，包括制造商配套支架和随附电源线。供应商套件中已包含的支架不得再次作为另一套上游电器投入。记录型号、额定参数、序列号、随附部件及接收状态。

- 采集对象：带配套 H 形支架及原装电源线的成套 I 类电阻面板取暖器
- 流属性/单位：Number of items / item
- 数量规则：清点领用于本次安装的电器，包括更换用机；与验收机、完好退供机及报废机逐一核对。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：`dimplex-plxe-series-c-issue7`

范围证据需求：由供应商接收及拒收记录确定每项验收安装消耗的电器数量；说明书不能确定通用更换率。

#### 采集要求：适配基材的固定件及固定接线部件 (`fixings_connections`)

过程／待建立交换的方向／类型：`install_test_handover` / `inputs` / `product`.

记录实际单独供应的螺钉、锚栓、接线端子、接线盒及其他允许使用的接线耗材。按真实材料和身份拆分该条件性汇总卡，不得假设通用安装套件。既有熔断隔离接线装置和固定布线是预先声明的接口。

- 采集对象：适配基材的固定件及固定接线部件
- 流属性/单位：Mass / kg
- 数量规则：按材料和零件记录单独供应部件的领用总量，必要时保留可追溯的件数转质量记录。可用余料从作业退出时另记产品输出，不得同时从本总投入扣除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：`dimplex-plxe-series-c-issue7`

范围证据需求：实际墙体基材和供应商认可的固定及接线方案决定数量；示例的四个支架孔不能确定所有型号的物料清单。

#### 采集要求：可归属的电器及部件货运 (`material_transport`)

过程／待建立交换的方向／类型：`install_test_handover` / `inputs` / `product`.

本服务边界负责的配送或搬运发生时纳入。记录实际承运人、运输方式、载货质量、距离、分段及供应商交付边界；避免重复添加上游数据集中已包含的配送。

- 采集对象：可归属的电器及部件货运
- 流属性/单位：Mass*distance / t*km
- 数量规则：依据实际托运质量及路线记录归属货运服务，单位 t*km；保留空载段处理和上游配送覆盖范围。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`

范围证据需求：需取得实际路线、质量和承运记录；不预设代表性里程或装载系数。

#### 采集要求：可归属的可重复使用安装及检测设备使用服务 (`tool_access`)

过程／待建立交换的方向／类型：`install_test_handover` / `inputs` / `product`.

当边界内纳入可重复使用的电钻、抽吸、起重或电气测试设备服务负荷时记录。确定工具或提供者及服务边界；提供者数据集已含耗材不得再重复计入。

- 采集对象：可归属的可重复使用安装及检测设备使用服务
- 流属性/单位：Duration / h
- 数量规则：记录可归属运行或使用小时，并保留提供者或研究中设备资本服务的分摊依据；购入工具不能被视为在一次安装中全部消耗。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

范围证据需求：以实际工具及运行记录确定使用时长；没有证据支持通用寿命或每台取暖器的使用小时默认值。

#### 采集要求：退回供应商的完好未安装或拒收取暖器 (`returned_heater`)

过程／待建立交换的方向／类型：`install_test_handover` / `outputs` / `product`.

仅在保留产品状态、序列号、退回原因和接收方可追溯的完好退货发生时记录。等待修理的不合格设备不是验收安装；作业内纠正措施仍属于本过程。

- 采集对象：退回供应商的完好未安装或拒收取暖器
- 流属性/单位：Number of items / item
- 数量规则：清点退供的完好电器，保留领退编号、运输归属及负荷处理；同一台设备不得同时计作报废物。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

范围证据需求：由真实退货记录确定零或正数量；没有证据支持通用完好退货比例。

#### 采集要求：从作业退回的完好可重复使用包装及可用部件余料 (`usable_material_returns`)

过程／待建立交换的方向／类型：`install_test_handover` / `outputs` / `product`.

条件性产品退出，适用于退回供应商或受控库存的完好可重复使用包装和未使用、仍适用的固定及接线部件。按实际材料、可用状态和接收方拆分。既不是电器台数，也不是废物。

- 采集对象：从作业退回的完好可重复使用包装及可用部件余料
- 流属性/单位：Mass / kg
- 数量规则：按材料及退出编号称量实际可用产品退回量；与部件领用总投入或来料包装覆盖范围核对。同一退回不得既从投入扣减又记作产品退出；信用扣减或持续所有权另行说明。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

范围证据需求：由可用状态、材料和称量退回记录确定实际质量；没有证据支持通用退回或再用比例，亦不得自动计入避免生产信用。

#### 采集要求：分类收集的安装包装及保护膜废物 (`packaging_waste`)

过程／待建立交换的方向／类型：`install_test_handover` / `outputs` / `waste`.

按实际材料及获许可或项目认可的去向记录包装和撕除保护膜。跨边界退回供应商或库存的完好可重复使用包装通过 usable_material_returns 退出，不得计入废物。

- 采集对象：分类收集的安装包装及保护膜废物
- 流属性/单位：Mass / kg
- 数量规则：按材料及转运记录称量分类废物；有据区分再用或退回包装，并核对供应包装的边界覆盖范围。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`
- 来源：`dimplex-plxe-series-c-issue7`

范围证据需求：称量所选型号的真实包装；说明书未给出包装质量或回收比例。

#### 采集要求：捕集的墙体钻孔残渣及废弃安装耗材 (`drilling_debris`)

过程／待建立交换的方向／类型：`install_test_handover` / `outputs` / `waste`.

实际新钻固定孔或发生耗材损失时记录。记录墙体基材、捕集部分、抽吸方法及废物去向；有证据的预留孔可使钻孔操作不发生。

- 采集对象：捕集的墙体钻孔残渣及废弃安装耗材
- 流属性/单位：Mass / kg
- 数量规则：称量或依据有效采集记录确定捕集基材残渣，并分别识别废弃耗材；排除在独立行记录的空气释放量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

范围证据需求：由孔洞、基材及收集证据确定残渣量；不假设通用混凝土或石膏质量。

#### 采集要求：报废取暖器或电气部件废物 (`electrical_waste`)

过程／待建立交换的方向／类型：`install_test_handover` / `outputs` / `waste`.

损坏或无法修复的电器及部件进入获认可电气废物处理路线时记录。完好退供物仍属产品流；不得将废物重新命名为安装输出。

- 采集对象：报废取暖器或电气部件废物
- 流属性/单位：Mass / kg
- 数量规则：称量报废机或部件，以序列号或零件编号关联接收处理方，保留失败安装及更换的负荷。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

范围证据需求：必须取得称量废物及失效记录；不采用默认缺陷率或回收率。

#### 采集要求：墙体基材特定的钻孔物质向作业场所空气释放 (`airborne_drilling_release`)

过程／待建立交换的方向／类型：`install_test_handover` / `outputs` / `elementary`.

实际钻孔时适用。创建具体基本流交换前，必须确定真实基材、排放物质或粒径口径、接收空气区室及抽吸捕集效率。捕集固体残渣仍属废物流。

- 采集对象：墙体基材特定的钻孔物质向作业场所空气释放
- 流属性/单位：Mass / kg
- 数量规则：针对真实钻孔和控制措施取得实测或有效的基材特定排放证据；经核实不钻孔可支持不发生，未测量的钻孔则不能支持零排放。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据需求：在前景表征之前，基材、粒径或物种及捕集证据尚待确定；通用粉尘区间会误述身份和暴露。

#### 采集要求：首次加热时物质特定的室内空气释放 (`initial_heat_release`)

过程／待建立交换的方向／类型：`install_test_handover` / `outputs` / `elementary`.

制造商指出首次加热可能产生气味，但未识别化学物质、排放因子或数量。将潜在调试释放保留为表征要求；气味本身不是 VOC 身份，也不能证明零释放。

- 采集对象：首次加热时物质特定的室内空气释放
- 流属性/单位：Mass / kg
- 数量规则：量化之前，以实测或可辩护的产品特定调试证据表征真实物质或物种及接收介质；缺少表征时披露直接排放覆盖不完整。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`
- 来源：`dimplex-plxe-series-c-issue7`

范围证据需求：说明书既未明确物质也未明确数量；不得用通用 VOC、任意质量区间或零替代缺失证据。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| install_test_handover | 接收、壁挂固定、接线、测试与交付 | required | 准备就绪接口获得认可的本首次安装路线 | 将电器/H 形支架与新增固定及接线部件集成；核验、节点内返工，或将拒收机分流为完好退回及废物退出；仅测试并签署交付后验收 | 1 item 验收安装 |

同一过程负责整项安装作业。钻孔、支架锁定、接线或设置的纠正循环留在 install_test_handover 内，保留全部耗用资源。未解决的电气或固定故障属于在制；完好退供机及电气报废物通过不同行退出。加热测试只建立有记录的调试交付门槛，不证明建筑供热性能。

共用服务关联：cp_resources 标识每项可重复使用工具或计量服务及其消费安装作业；cp_transport 标识共用到场及全部消费作业/时段。此处只记录本参考安装拥有的份额。

### 过程：接收、壁挂固定、接线、测试与交付 (`install_test_handover`)

#### 输入

##### 产品流

###### 安装工具及调试用电 (`site_electricity`)

纳入归属于本作业的实际钻孔、抽吸、电气测试、控制器初始化及有限加热测试用电。交付后的日常室内采暖不在边界内。

- 选定流：安装工具及调试用电
- 流属性/单位：Energy / kWh
- 数量规则：记录经计量或可追溯分表测得的安装及加热测试用电；分别记录加热测试时段和返工消耗。不得将铭牌功率乘以假设测试时长作为用电量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`
- 来源：`dimplex-plxe-series-c-issue7`

范围证据需求：必须取得工具及调试计量记录；制造商额定功率既不是耗电量，也不能支持通用耗电区间。

###### 可归属的安装人员出行服务 (`installer_travel`)

为本作业发生安装人员出行时纳入。单独保留出行方式、人数、起终点及多作业共用行程的分摊，不能混入材料货运。

- 选定流：可归属的安装人员出行服务
- 流属性/单位：Number of persons*distance / person*km
- 数量规则：以 person*km 记录可归属的实际客运服务；共用行程必须有明确归属和分摊记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`

范围证据需求：以实际行程和共用到场记录确定出行；不得由分类代码推断标准往返。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 测试交付时已验收的 I 类壁挂式电阻面板取暖器安装服务 (`accepted_installation`)

唯一参考输出为一台身份明确、竖直安装的 I 类电阻面板取暖器安装服务：配套 H 形支架已固定，已接入既有适用且可隔离的固定电源，完成保护接地和电气核验、控制器设置及有限功能加热测试。保留签署的验收记录。

- 选定流：测试交付时已验收的 I 类壁挂式电阻面板取暖器安装服务
- 流属性/单位：Number of items / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`dimplex-plxe-series-c-issue7`

范围决策：参考定义恰为一项验收安装；应证明配置可比性，不引入统计产出率区间。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| single_service | accepted_installation | 将作业清单归于相同配置的验收安装。短时测试不产生可销售热联产品；不得抵扣偶然室内升温。 |  |
| reject_burdens | returned_heater; usable_material_returns; electrical_waste; install_test_handover | 保留归属验收作业的纠正资源、失败调试及更换处理负荷。明确完好电器/材料退回的负荷归属和任何供应商信用；不得自动抵扣避免生产或回收信用。失败或待定单元不得计入验收输出。 |  |
| shared_visit | material_transport; installer_travel; tool_access; site_electricity | 优先采用作业可分辨记录。共用到场、计量时段或设备时，识别全部消费者、时段和有据物理驱动；核对总量，每项负荷只计一次。重大分摊不确定性须记录，不采用任意均摊。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_components | install_test_handover | 电器套件及单独供应部件投入 | 接收及领用核对 | job_id; model; serial; package_BOM; substrate; fixing_schedule; issued_items; issued_mass; usable_return_exit_id; replacement_id; upstream_coverage |检查供应商套件和认可说明；核对领用总量及另行称量的可用退回退出；称量分材料部件或保留可追溯制造商零件质量；区分既有电源接口；汇总步骤：每参考流；合计实际作业领用总投入；可用退回材料另记退出，不净额扣除或重复计入随附支架/线缆| item; kg | 每次接收、领用和退回 | 全部安装作业，包括纠正 | 明确场地及作业 | 每参考流 | 供应商物料清单及收货单；秤校准；基材/固定记录 |
| cp_resources | install_test_handover | 现场用电及条件性工具使用 | 计量及设备服务日志 | job_id; meter_id; start_reading; end_reading; test_start; test_end; test_mode; tool_id; access_hours; shared_consumers; attribution_driver; provider_coverage |读取作业/测试可追溯仪表；分开其他负载；记录工具使用和提供者边界；保留共用时段分摊证据；汇总步骤：每参考流；将归属实测作业电量及提供者负责的设备小时分别汇总一次| kWh; h | 每次工具/测试事件及纠正事件 | 到场至签署交付 | 明确场地、仪表和设备 | 每参考流 | 仪表精度；读数；测试日志；提供者/服务边界记录 |
| cp_transport | install_test_handover | 声明的共用作业/到场时段中的条件性货运及人员出行 | 调度及出行记录 | job_id; movement_id; mode; origin; destination; distance; consignment_mass; passengers; shared_jobs; attribution_driver; upstream_delivery |核对承运凭证和实际行程；区分材料货运与人员移动；保留共用到场驱动及空载段归属；汇总步骤：每参考流；核实上游覆盖后汇总可归属的分方式运输服务| t*km; person*km | 每次移动 | 全部安装及纠正到场 | 至明确场地的真实路线 | 每参考流 | 承运凭证；路线记录；乘客/货物日志；分摊核对 |
| cp_acceptance | install_test_handover | 验收参考输出及作业起始条件 | 检查及签署测试记录 | job_id; model; serial; substrate; preprepared_holes; bracket; fixings; orientation; clearances; supply; isolation; earth_test; electrical_tests; heat_test; control_setup; acceptance; timestamp |合格安装人员记录适用制造商及项目验收标准、接口就绪、电气及功能测试结果和签署交付；未解决失败不算验收；汇总步骤：每参考流；恰好一项验收安装| item | 每次安装及复测 | 完整作业至验收 | 与清单相同型号/配置/场地 | 每参考流 | 签署安装/测试表；照片；合格电工记录 |
| cp_exits | install_test_handover | 完好电器/材料退回、包装、钻孔残渣及电气废物 | 退回及废物移交记录 | job_id; exit_id; serial_or_material; state; quantity; mass; recipient; treatment; upstream_coverage; rework_id |区分完好产品退回和废物；按材料称量实际废物；将退出关联至接收方及产生作业；单独核对捕集残渣及空气释放；汇总步骤：每参考流；以可追溯归属将物理退出各汇总一次；返工留在节点内| item; kg | 每次退出及纠正 | 完整作业，包括退回 | 明确安装及接收路线 | 每参考流 | 退回接收；校准质量证据；废物移交/接收记录 |
| cp_releases | install_test_handover | 条件性钻孔及首次加热空气释放 | 表征及缺失数据披露 | job_id; drilling_state; substrate; species; particle_basis; air_compartment; capture; test_interval; release_quantity; method; detection_limit; missing_characterization |实际钻孔需取得物质/粒径及捕集特定证据；首次加热需寻求可辩护的产品特定物质/数量证据；记录不确定性及覆盖缺失，不虚构 VOC 或零；汇总步骤：每参考流；按物质和区室汇总已表征排放；未量化潜在释放保留为覆盖不完整| kg | 每项钻孔/首次加热测试情景 | 仅安装钻孔及有限加热测试 | 实际基材/产品及室内接收环境 | 每参考流 | 方法验证；测量报告；检出限；不钻孔条件记录；缺口披露 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| job_normalization | all inventory rows | 将实际作业归属数量汇总至每参考流；多台安装作业应先记录资源分摊及失败/待定状态，再以相同配置验收服务数量归一化。没有证据时不得将不同型号视为等效。 | cp_components; cp_resources; cp_transport; cp_acceptance; cp_exits; cp_releases | 每参考流清单 |  |
| receipt_exit_reconcile | heater_package; returned_heater; electrical_waste | 核对实物电器接收、已安装验收序列号、完好退供、报废机及作业剩余库存；返工留在同一作业内，防止重复投入/退出处理。 | cp_components; cp_acceptance; cp_exits | 按序列号的电器核对 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| configuration | all inventory rows | 取暖器类型、型号、套件覆盖、墙体基材、固定及电源条件保持一致；制造商示例不是通用物料清单。 | cp_components; cp_acceptance; `dimplex-plxe-series-c-issue7` |
| resource_coverage | site_electricity; material_transport; installer_travel; tool_access | 覆盖作业及纠正事件；区分安装及日常使用能耗；披露供应商门槛和共用事件分摊。 | cp_resources; cp_transport |
| release_coverage | airborne_drilling_release; initial_heat_release | 污染物身份或数量未知时保留直接排放完整性缺口；不得将气味等同于物质或无有效证据宣称零。 | cp_releases; `dimplex-plxe-series-c-issue7` |
| acceptance_trace | accepted_installation; returned_heater; electrical_waste | 签署验收、拒收路径及数量应核对一致；未验收作业不能悄然从资源或验收分母中消失。 | cp_acceptance; cp_exits |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_check | install_test_handover | 核实准备就绪墙体和可隔离电源；从本类排除新电路/供热网络或维修/更换路线。 |  |
| mount_test_check | accepted_installation | 要求部件、支架锁定、方向、型号净距、保护接地/电气测试、实际有限加热测试、控制器初始化及签署交付记录。额定参数不是实测消耗或达到的供热输出。 |  |
| quantity_check | all inventory rows | 参考输出为 1 item；各数量采用每参考流基准及其自身关联安装节点协议。核对接收、退回、废物和作业资源及声明的共用分摊。 |  |
| reject_route_check | returned_heater; usable_material_returns; electrical_waste; install_test_handover | 将失败/待定状态追溯至节点内纠正、完好退回、认可废物退出或披露在制。未解决拒收不计入验收输出，但保留可归属负荷。 |  |
| release_check | airborne_drilling_release; initial_heat_release | 检查实际钻孔状态、释放身份/粒径口径和接收介质；要求有效调试物质证据，否则标记直接排放不完整。不得使用任意零或通用 VOC 身份。 |  |
| identity_check | all inventory rows | 最终过程发布之前，各实际交换必须解析为已核实的具体流、属性及单位。条件性汇总角色按真实记录拆分；有用的未确认候选语义卡不能证明最终交换已覆盖。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 带随附电器及新增部件上游投入的前景安装服务清单；process 及 lifecyclemodel 为下游投影 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 明确场地或区域背景工作包中的本首次安装服务；部件归属明确的兼容建筑建模 |
| excluded_use | 裸电器制造；支路电路工程；水暖/热泵安装；维修更换；全寿命建筑供热；未测试安装或通用电器产品服务 |
| required_metadata | 型号/序列号及额定参数；支架/物料清单覆盖；墙体/基材/固定/孔洞；电源/隔离/接地；测试标准/结果/时段；控制器设置；场地/时间/验收数量；来料门槛/物流；拒收路线；分摊 |
| required_quality_disclosure | 未确认交换及支持身份；全部范围证据需求；缺失首次加热排放表征；钻孔排放证据；测量/共用事件不确定性；上游部件及配送覆盖 |
| update_trigger | 型号、套件、墙体/固定/电源、验收或调试路线、供应商门槛、地域/电力、拒收路线发生变化，或新增直接释放证据 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| dimplex-plxe-series-c-issue7 | handbook | Glen Dimplex，PLXE Series C 长版说明书，Issue 7，PDF 第 3、7-10 页。 https://www.dimplex.co.uk/sites/g/files/emiian551/files/media_import/medias/docus/13/PLXE%20-%20Series%20C%20Long%20Manual%20-%20Issue%207%20%283%29.pdf | 有据的 I 类接地/固定电源路线；H 形支架及安装/锁定；型号特定净距；首次通电设置；可能初次加热气味，未识别污染物或数量 |
