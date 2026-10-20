---
pcr_id: pcr.constructions-and-construction-services.construction-services.conventional-wired-fire-alarm-system-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 常规有线火灾报警系统安装服务

## 1. 范围与适用性

本PCR适用于一个单控制盘常规有线建筑火灾报警系统的安装与调试，包含独立的探测及手动触发回路、警报回路和永久备用电池对。工作从已认可设计、安装位置及路由和既有专用隔离电源接口开始。安装方接收材料、准备并安装控制盘及器件、敷设端接线路、连接及配置系统、纠正缺陷、完成实际测试计划，最终交接有文件的验收系统。CFP Standard手册提供路线证据，不能替代适用工程设计或有资质人员的验收决定（`ctec-standard`，PDF第6–8、10–13、15、17及23页）。

排除可寻址、无线、AlarmSense两线制、复示及联网系统、灭火剂控制、远程监控、上游建筑及电源建设，以及交接后运行维护。不同控制盘、分区、器件、电缆或备用配置不自动具有功能等价性。安装一个部件、回路通电或记录检查不等于完整验收输出。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.conventional-wired-fire-alarm-system-installation-services |
| classification_refs | CPC 3.0 54612 Fire alarm installation services；本PCR覆盖所声明的常规有线子集 |
| covered_products | 在安装方交接门验收的完整单控制盘常规有线火灾报警系统安装与调试 |
| excluded_products | 可寻址；无线；AlarmSense两线制；复示及联网；灭火剂控制；远程监控；运行维护 |
| representative_product | 常规CFP Standard控制盘，配兼容探测及手动触发回路、极性声响回路、真实末端器件和永久VRLA备用电池对 |
| production_route | 接收核实；准备安装；敷设端接连接；配置；测试纠正复测；恢复正常状态并签字验收 |
| market_state | 安装方签字交接时已安装、连接、配置、功能测试并形成文件的系统 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 同一声明配置的完整已验收常规有线火灾报警系统安装与调试 |
| How much | 1 item |
| How well | 真实认可设计及BOM、回路完整性及因果响应、兼容备用电源、有文件测试结果、恢复正常状态和有资质人员签字验收 |
| How long or cycle | 一个真实安装至验收周期，含纠正及复测；披露工程日期。可复用资产数据包分别保留制造、所有服务期间、维护更换及退役阶段；不意味着运行服务期间。 |
| reference_flow_link | `accepted_installation` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收完整常规有线火灾报警系统安装与调试 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 实际控制盘制造商及型号；单控制盘配置；分区及探测声响回路；准确器件及配件BOM和件数；回路及安装方馈线长度和SKU；永久电池对型号容量及批准；既有隔离电源接口及安装方段；安装位置及路由；设计和验收规范；真实因果响应及备用计划；测试纠正恢复记录；签字交接门及日期 |

在数据包中声明这些限定信息，并在cp_acceptance保留D，即独立计数的同配置完整验收系统数。归一化须有正的D。实质不同配置分别处理；单纯件数既不证明等效覆盖，也不证明等效消防性能。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_count | accepted_installation | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 采用cp_acceptance计数同配置完整验收系统，不计器件、分区、测试或进度。每项清单数量均使用同一D。 |
| mass_numerators | incoming_packaging; control_panel; field_alarm_devices; standby_batteries; alarm_cable; fixings_and_containment; detector_test_agent; test_cleaning_consumables; unused_product_return; dry_material_waste; rejected_component_waste; contaminated_solid_waste; airborne_particulate; test_agent_constituent_to_air | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | SKU、材质、状态及接收方的数量分子分开。采用经校准净称量，或可追溯同SKU件数及长度与质量转换。Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`的参考kg系数为1。不得用于电量或服务时长。 |
| energy_preservation | installation_electricity | Energy | kWh | 通过cp_energy测量真实交接前kWh及因果份额。下游交换构建须核实Energy支撑；NCV、电池Ah、质量及单独经过小时数不能提供该支撑。 |
| resource_count | owned_equipment_attribution; hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 自有资产采用具体归属件数份额；计数租用须为真实完整合同事件。item参考系数为1。小时合同须使用真实Duration支撑并复核，不得转成件数。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已认可常规设计及路由安装接口；已准备建筑和主桥架；明确位置的既有专用隔离电源接口；安装方接收时的供应组件 |
| starting_condition_role | 边界就绪事实及既有接口，不是新增产出交换或收益 |
| product_classification_scope | CPC 3.0 54612中的常规有线单控制盘安装调试子集 |
| recursive_input_rule | 同类别既有安装进入工程时识别其真实交接状态及上游数据包；不得递归重建验收服务，也不得将就绪状态当作服务输入。改变范围须单独复核。 |
| upstream_dataset_requirement | 匹配真实供应组件SKU及状态和地域技术；要求上游制造及到场交付包装边界披露。区分供应制造与前景安装，避免已含包装重复计算。 |
| disclosure | 真实设计、起始接口、安装方馈线职责、场址工程期间、供应数据集及包含项、验收配置及D、资源所有权和未关闭证据缺口 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_install | install_accept | 单节点负责接收、准备安装、探测和声响回路端接、永久电池连接、配置、真实测试纠正及签字验收。阶段日志不产生新增产品交换。实际设计记录保留兼容末端器件、市电隔离布线及屏蔽接地接口。 | `ctec-standard` |
| boundary_mains | alarm_cable; installation_electricity | 既有专用隔离市电为明确起始接口。纳入安装方实际供应馈线段、连接和交接前实测耗电；排除上游建筑配电施工及后续运行。 | `ctec-standard` |
| boundary_components | control_panel; field_alarm_devices; standby_batteries | 永久控制盘电源充电器、电池及连接器件为安装产品组件，不是可复用工具资产。披露配件包含项和真实CFP批准及设计电池条件，不得跨型号泛化。 | `ctec-standard` |
| boundary_residuals | install_accept | 每项真实拒收、纠正、可用退回及残留出口只有一个责任方。关联原领用、事件、转移和真实接收方。内部重新端接或配置不产生虚构中间输出；未分类失踪质量为缺口。 | |
| boundary_resources | owned_equipment_attribution; hired_support_service | 识别跨工程及期间使用的每项共享资产：安装方自有工具、测试仪、外置充电器、登高设备及供应方服务。索引从制造购置、服务、维护更换至退役终止的所有受益工程及期间。保留真实剩余使用量不确定性。不得重复供应方资产制造。 | |
| boundary_packaging | incoming_packaging; dry_material_waste | 即使制造已含于到场供应，来料包装仍保留在实物来源池。仅上游排除时新增独立包装负荷；不得从出口废物虚构来料。 | |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：按材质和批次区分的来料包装 (`incoming_packaging`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

将随设备、电池、电缆及耗材收到的包装，按所属批次登记在实物保管台账中。逐种材质称量，或采用可核实的包装件数及皮重。只有到场供应数据集未包含该包装时，才建立独立负荷输入；已包含包装的制造负荷由上游负责。核对重复使用、退回、库存及废物，不得由废物出口倒推来料。

数量计算见第8节`normalize_exchange`。范围证据需求：需提供实际批次的材质重量、包装规格、重复使用及退回记录和供应数据集包装边界；尚无通用的每系统包装质量区间。

- 采集对象：按材质和批次区分的来料包装
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

#### 采集要求：每项安装方自有可重复使用资产的归属份额 (`owned_equipment_attribution`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

按型号和序列号识别实际钻孔、电缆准备工具、测试仪、外置设备充电器或登高设备。以相同基准记录本工程服务活动及有证据的全寿命活动，将 owned_asset_normalize 用于该具体资产的制造数据包。真实维护、更换及退役数据包按第7节关联至受益工程及期间。控制盘内永久充电器和备用电池属于安装组件；租用设备负荷由供应方服务负责。此行记录 item 归属份额，不是安装质量或每工程耗用整台工具。

数量计算见第8节`owned_asset_normalize`。范围证据需求：需提供具体资产制造或BOM、真实维护、所有使用工程及期间、全寿命使用量和剩余使用量不确定性；不得默认寿命、重复使用次数或每系统通用隐含质量。

- 采集对象：每项安装方自有可重复使用资产的归属份额
- 流属性/单位：Number of items / item
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`ctec-standard`

#### 采集要求：按SKU区分的兼容触发、警报及末端器件 (`field_alarm_devices`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

将探测器、底座、手动报警按钮、极性声响器和末端器件分别展开为真实产品身份。探测及手动触发回路与警报回路分别记录。逐SKU称量，或采用该SKU件数与质量的可靠关系，纳入纠正时耗用的替换件。控制盘随附配件只计一次，并核对验收器件BOM与回路端接。

数量计算见第8节`normalize_exchange`。范围证据需求：需提供实际器件类型BOM、兼容SKU质量、回路负载及设计覆盖；不得使用混合器件总量或通用每系统器件数区间。

- 采集对象：按SKU区分的兼容触发、警报及末端器件
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

#### 采集要求：按SKU区分的永久新装VRLA备用电池 (`standby_batteries`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

代表性CFP路线登记串联的两块兼容新12 V VRLA电池，注明准确容量、批准适用性及供应状态。逐SKU称量，或采用可追溯件数与净质量系数。容量依据实际负载、所需备用及报警时段和制造商适用批准选择；引用的批准条件不是所有电池的通用规格。交接前充电电量计入 installation_electricity，与电池制造分开。

数量计算见第8节`normalize_exchange`。范围证据需求：需提供具体电池数据表、批准及设计要求、验收电池对BOM和真实质量；制造商备用容量Ah示例既不是安装能耗，也不是通用电池用量范围。

- 采集对象：按SKU区分的永久新装VRLA备用电池
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

#### 采集要求：按SKU区分的回路及安装方供应馈线电缆 (`alarm_cable`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

按结构与等级识别实际耐火屏蔽报警电缆。保留实测路由、端接余量、领用长度、边角料及替换长度；直接称量，或采用匹配SKU的kg/m系数得到kg。控制盘馈线只计入约定隔离电源接口下游由本安装方真实供应的段。既有专用电源及主干桥架属于起始条件，不是新增电缆耗用。

数量计算见第8节`normalize_exchange`。范围证据需求：需提供实际回路长度、芯线及等级、余量与端接要求、准确kg/m证据和切割返工记录；尚无通用每系统电缆质量区间。

- 采集对象：按SKU区分的回路及安装方供应馈线电缆
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

#### 采集要求：按SKU区分的安装紧固件、格兰头、局部敷设件及标签 (`fixings_and_containment`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

分别记录真实供应的螺钉、锚栓、格兰头、支撑、短段敷设件及标签。逐材质或SKU称量，或使用实测单位质量及实际领用件数。将安装件数关联至验收墙面及路由，并区分已准备建筑结构或既有主桥架。进线孔准备和屏蔽及接地端接仍属组装职责，不构成独立加工产品。

数量计算见第8节`normalize_exchange`。范围证据需求：需提供验收配置、真实安装及领用件数和SKU质量；已准备的主要支撑及建筑结构不能作为新增材料区间。

- 采集对象：按SKU区分的安装紧固件、格兰头、局部敷设件及标签
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

#### 采集要求：按产品区分的测试、复位及清洁耗材 (`test_cleaning_consumables`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

仅纳入真实耗用的擦拭物、清洁产品或其他复位及测试材料。记录对象和事件、具体SKU、领用、未用退回、容器皮重及残留；称量或采用匹配SKU系数得到产品净质量。重复使用的复位钥匙及测试仪属于设备，不是耗材。区分擦拭基材、供应配方及出口污染物，避免同一组分重复计算。

数量计算见第8节`normalize_exchange`。范围证据需求：需提供真实对象及事件覆盖、SKU和领用、退回、残留、擦拭物测量；剂量观察只适用于同器件及同方法。

- 采集对象：按产品区分的测试、复位及清洁耗材
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

#### 采集要求：真实完整的合同设备或登高服务事件 (`hired_support_service`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

本计数卡仅适用于供应方合同明确规定、具有具体设备配置及交付结果的真实完整事件，以合同和完成记录证明。通过cp_services记录完成事件数及实际使用方份额。真实小时租赁保留其真实数量，须进行范围与计量复核并核实Duration支撑；不得将小时换成虚构item事件。新增独立资源前先记录供应方已含的制造、维护、燃料及电量。

数量计算见第8节`normalize_exchange`。范围证据需求：需提供真实事件定义或小时合同、配置及容量、供应方包含项和所有用户份额。小时Duration未决，不能由本计数单位覆盖。

- 采集对象：真实完整的合同设备或登高服务事件
- 流属性/单位：Number of items / item
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：

#### 采集要求：按SKU区分的可用未变质库存退回 (`unused_product_return`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `product`.

记录离开安装方保管边界的真实可用且状态未变的组件、电缆、耗材或可复用包装。保留原SKU及状态、接收方，并称量净质量或采用准确件数及长度与质量关系。退回转移关联原领用。保留毛领用及退回观察，按第7节仅计一次净耗用上游供应，不得重复扣减退回。失效或受污染物不属可用退回。

数量计算见第8节`normalize_exchange`。范围证据需求：需逐SKU关联实测毛领用、未变状态及真实退回；没有默认退回比例或自动收益。

- 采集对象：按SKU区分的可用未变质库存退回
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

#### 采集要求：按接收方区分的干包装、边角料及捕集残留废物 (`dry_material_waste`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `waste`.

对真实干物料流逐项称量，记录容器皮重、发运证据、材质、状态和实际接收方。即使包装负荷已含于上游，也将包装废物关联收到的实物来源池。捕集粉尘留在相应废物流；真实进入空气的份额另行区分。回收目的地证据与后续处理或回收模型分开；此处不得主张避免产品收益。

数量计算见第8节`residual_normalize`。范围证据需求：需提供逐废物流称量联单、来源池关联及真实分流路线；组件标称质量不能给出废物率区间。

- 采集对象：按接收方区分的干包装、边角料及捕集残留废物
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：

#### 采集要求：不合格或拆除电气组件及VRLA废物 (`rejected_component_waste`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `waste`.

将不可用控制盘、探测器及底座、手动按钮、声响及末端器件、受损电缆组件或失效电池关联至原领用、缺陷及纠正事件。对真实废物状态称量，或使用具体SKU件数与质量，保留发运及合格接收方证据。电池、电子及电缆废物分开。内部修复不是新增产品转移；可用未变部件按unused_product_return退回。

数量计算见第8节`residual_normalize`。范围证据需求：需提供真实故障、拆除及复测、原领用、分类和称量发运记录。不得默认缺陷率；零值须有完整事件覆盖。

- 采集对象：不合格或拆除电气组件及VRLA废物
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：

#### 采集要求：受污染擦拭物、容器及配方残留 (`contaminated_solid_waste`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `waste`.

按废物接收方登记真实受污染擦拭物、容器或配方残留流，记录组成、物态、毛重及皮重。区分清洁可回收包装和可用退回。核对供应擦拭物及配方组分池、留存残留与有独立证据的排放。化学品毛领用不自动等于蒸发。

数量计算见第8节`residual_normalize`。范围证据需求：需提供特定配方残留、容器皮重、擦拭物质量及接收方接收证据；不得假设全部化学品蒸发。

- 采集对象：受污染擦拭物、容器及配方残留
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：

#### 采集要求：有证据的特定材质空气颗粒份额 (`airborne_particulate`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `elementary`.

仅在实际钻孔及电缆准备具有测量或独立支撑的空气排放时启用。识别基材及材质、工具、捕集措施、粒径或份额基准及真实接收空气子区室。采用监测，或匹配材质、工具及控制措施的系数乘实测活动量，随后应用emission_normalize。捕集粉尘仍属废物；不得将保管台账未解释残差当空气排放。

数量计算见第8节`emission_normalize`。范围证据需求：需提供匹配基材、工具、捕集措施、粒径基准、活动量及排放系数或监测证据；不得使用通用粉尘或平衡损失量。

- 采集对象：有证据的特定材质空气颗粒份额
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：

#### 采集要求：释放至真实空气子区室的已识别测试剂组分 (`test_agent_constituent_to_air`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `elementary`.

针对真实物理耗用的测试剂，在定义基本交换前识别每种物质及接收子区室。按solvent_partition采用物种监测，或特定产品SDS组成和有证据的送达、捕集、残留分配方法。组分数量应与耗用配方来源池相容。器件测试数、未区分VOC名称或100%释放假设均不能确定物质质量或去向。

数量计算见第8节`solvent_partition`。范围证据需求：需提供具体产品及SDS、组分组成和送达、捕集、残留份额；不得推断通用气溶胶及VOC区间或空气子区室。

- 采集对象：释放至真实空气子区室的已识别测试剂组分
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| install_accept | 常规有线系统安装与验收 | required | 真实已认可设计的常规有线工程 | 单一负责组装、测试纠正及交接的职责 | accepted_installation; 1 item |

接收就绪、布线安装、连接配置、测试纠正及收尾是install_accept的日志阶段。失效控制盘及器件、受损电缆或缺陷电池始终关联纠正替换及最终验收工程。实际修复、未变库存退回、回收接收方和丢弃是不同路径；不得默认处置或回收。

### 过程：常规有线系统安装与验收（`install_accept`）

#### 输入

##### 产品流

###### 接收时的常规有线火灾报警控制盘（`control_panel`）

登记实际供应的常规控制盘型号及随附配件BOM。称量产品净质量，或将该具体SKU数量乘以可追溯净质量系数。永久电源及电池充电器保留在控制盘数据包内；不得与现场器件或紧固件重复记录配件。将接收、最终安装和拆除件关联至同一部件记录。

数量计算见第8节`normalize_exchange`。范围证据需求：需提供实际控制盘质量、数量及配件边界；单控制盘参考对象不能给出跨型号质量区间。

- 选定流：接收时的常规有线火灾报警控制盘
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

###### 实际物理耗用的探测器测试配方产品（`detector_test_agent`）

仅在真实使用兼容物理气溶胶或其他配方产品时启用。记录准确产品、当前SDS、罐总重及皮重、使用前后数量、退回产品和残留去向；配方耗用kg与空容器质量分开测量。电子或热测试及受测器件数量不会自动产生化学输入。排放物种另按 test_agent_constituent_to_air 独立识别。

数量计算见第8节`normalize_exchange`。范围证据需求：需提供兼容产品及SDS、真实罐质量变化和同方法剂量观察；没有已核实的通用每测试克数系数。

- 选定流：实际物理耗用的探测器测试配方产品
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

###### 安装及交接前测试的实测电量（`installation_electricity`）

按真实安装、外置工具充电、控制盘通电、备用电池充电、测试及复测的交接前时段，读取经校准供电电表起止kWh。同一表计时段内其他使用方的耗电按因果记录分担；每个充电边界只计一次。保留Energy/kWh，不得称量电力、作质量转换、以NCV替代或从电池Ah推算。后续监控、待机及运行不在此服务周期内。

数量计算见第8节`energy_normalize`。范围证据需求：需提供实际表计时段、背景供电及充电职责、其他用户、验收系统分担和可比实测kWh/参考流记录。Energy/kWh身份支撑未决；无有来源的数量范围。

- 选定流：安装及交接前测试的实测电量
- 流属性/单位：Energy / kWh
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 产品流

###### 已验收完整常规有线火灾报警系统安装与调试（`accepted_installation`）

只计数同一声明配置下已完整安装、连接、配置、形成文件并签字验收的单控制盘系统。cp_acceptance将真实设计及BOM关联至触发、警报、故障、市电失效及备用、因果响应和恢复正常状态证据。计数对象为系统，不是分区、器件、测试、部分进度或拒收工作。复测及纠正保留资源负荷，不增加D。

数量计算见第8节`reference_output`。范围证据需求：1 item是准确归一化参考输出，不是实测产率范围。验收分母、失败及待验收工作和配置区分均须可追溯记录。

- 选定流：已验收完整常规有线火灾报警系统安装与调试
- 流属性/单位：Number of items / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_acceptance`
- 来源：`accepted-count-normalization`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocate_job | install_accept | 实际材料、电量、测试剂、服务及纠正负荷归属同一验收配置工程。先细分独立记录工程，再采用有理据因果份额。拒收、复测及失败工作不增加D，也不脱离工程负荷。唯一预期产品输出为accepted_installation；可用未变库存是退回，不是预期共产品。 | |
| allocate_returns | unused_product_return; incoming_packaging | 毛保管输入及真实未变退回分别保留。上游净耗用供应数量分子为毛领用减有证据可用退回及归属别处的剩余库存。退回操作资源仍归本工程；不得既净扣供应又给予第二次避免产品收益。供应已含包装不另计制造负荷。 | |
| allocate_asset | owned_equipment_attribution | 对每项具体资产制造包，以其件数乘本工程真实服务活动量，再除以有文件同基准全寿命活动量。枚举install_accept及所有其他使用工程期间；所声明寿命内份额合计为一。寿命服务或剩余使用证据未知时不能完成最终归属。禁止每工程整台资产、默认寿命或重复使用次数。 | |
| allocate_period | owned_equipment_attribution | 制造购置、全部服务工程、维护更换及退役终止使用同一资产阶段期间索引。真实维护更换数据包分配给有证据受益期间或因果工程，该具体分配优先于一般寿命份额。退役只索引一次并披露负荷责任方。已终止资产采用真实历史；在用资产剩余使用估计须有证据及不确定性。不得对已按寿命归属的数据包再年化，也不得将原资产及替换资产同时按整台计入。 | |
| allocate_service | hired_support_service; installation_electricity | 供应方服务负责其已含租用资产制造维护及运行资源。采用全部用户的真实完成事件份额并披露包含项；只对服务包以外的电量等资源另计。自有资产隐含份额与实测电量为不同数据包，各计一次。 | |
| allocate_residual | dry_material_waste; rejected_component_waste; contaminated_solid_waste | 每种状态声明真实修复、库存退回、回收接收方或丢弃，并保留收集及已建模处理的责任方。目的地不能自动产生回收替代收益。下游回收产品模型须有自身证据及边界。 | |

## 8. 前景数据采集、计算与质量规则

### 变量与实物台账定义

D是cp_acceptance中同配置完整验收系统的正计数。Q为使用自身单位的真实归属数量分子，不是材料、能量、资产份额及服务事件的混合总和。负荷归一化前保留原始毛观察。对每个相容SKU或材质池，核对期初库存加真实接收领用与期末库存、安装留存、未变退回和分别测量的残留出口。验收服务输出以item计数，不进入kg平衡项。粉尘相关时保留真实准备基材信息，不虚构新增材料耗用。

配方组分采用相容基准下的实测耗用配方及准确组成，随后核对留存、捕集残留和有独立证据排放份额。碳或水约束只能检查相容真实组分池；不得使用通用水平衡、氧气交换或残差即排放捷径。发生状态未知是证据缺口，不是零。清单诊断与真实具体交换分开；混合材质质量总量不是可选择流身份。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | install_accept | accepted_installation | 签字验收台账 | 工程配置系统ID；控制盘型号分区；准确器件BOM；回路馈线长度；电池对容量批准；设计因果响应备用计划；测试纠正恢复正常；状态签字日期；D | 按真实设计、测试及验收记录检查完整安装系统。仅计数最终签字同配置验收系统；待验收、失败及进度记录分别保留。 | item | 每系统及纠正；最终收尾 | 真实安装开始至签字验收 | 一个声明场址工程及配置 | 每参考流 | 签字设计BOM测试恢复记录；分母核对 |
| cp_materials | install_accept | 实物供应材料、包装及可用退回 | 接收领用退回及安装状态台账 | 工程日期事件转移ID；供应方SKU状态；毛重净重皮重；件数或长度；匹配kg/item或kg/m证据；批次包装材质；上游包含项；库存；安装留存质量；可用退回 | 经校准秤称量净物料，或采用可追溯同SKU件数长度质量系数。分开追踪保管毛输入、真实未变退回、库存变化及安装状态；包装实物池与上游负荷责任方独立保留。 | kg; item; m | 每次接收领用退回及最终安装BOM | 所有原始及纠正事件至收尾 | install_accept保管及声明批次接口 | 每参考流 | 校准皮重记录；SKU系数；配对转移；库存BOM核对 |
| cp_energy | install_accept | installation_electricity | 表计时段及用户份额台账 | 工程日期；电表ID校准；起止kWh；供电充电边界；安装测试复测充电时段；其他用户；因果份额；签字验收截止 | 读取真实供电电表，包含外置工具充电及交接前控制盘电池充电；核对共享用户时段，仅扣除有证据的其他用户耗电，排除交接后运行。 | kWh | 每个归属运行测试充电时段 | 安装开始至交接截止，含纠正 | 服务install_accept的真实供电电表边界 | 每参考流 | 电表读数校准；时段覆盖；用户份额；不以电池Ah代替 |
| cp_services | install_accept | owned_equipment_attribution; hired_support_service | 资产事件及寿命期间归属台账 | 资产型号序列号所有方；制造数据包及件数；工程活动量；同基准全寿命活动量；所有工程用户期间；维护更换退役事件及受益方；剩余使用量证据；服务合同配置完成件数；供应方资源包含项 | 索引真实资产制造购置、每个使用工程报告期间、真实维护更换和退役。以一致基准测量工程及全寿命活动量；识别维护因果受益方。真实计数租用检查合同、完成事件数及全部用户份额；真实小时租赁数量保留并单独复核。 | item; 披露实际服务活动基准 | 每工程事件及每资产期间更新 | 工程日期及有文件资产寿命阶段历史 | install_accept及所选资源所有其他用户 | 每参考流 | 资产历史BOM；有文件使用量及不确定性；合同发票完成记录；全部用户份额核对 |
| cp_residuals | install_accept | 废物流及直接空气物种颗粒 | 残留发运监测及组分台账 | 工程日期事件；原领用来源池；材质SKU状态；废物代码接收方转移；毛重皮重kg；故障拆除复测；基材工具捕集粒径基准空气子区室；测试产品SDS组成；实测耗用捕集残留；匹配系数活动量及不确定性 | 逐材质状态接收方称量发运量，并与保管纠正记录配对。真实空气排放采用物种颗粒质量测量，或独立支撑的匹配活动组成分配方法；区分捕集废物及可用库存，禁止将未闭合残差变为排放。 | kg | 每残留事件发运及真实排放测试准备事件 | 所有安装纠正事件至残留收尾 | install_accept出口及真实接收介质接收方 | 每参考流 | 磅单皮重接收方记录；监测或有理据系数；SDS及相容组分平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | incoming_packaging; control_panel; field_alarm_devices; standby_batteries; alarm_cable; fixings_and_containment; detector_test_agent; test_cleaning_consumables; hired_support_service; unused_product_return | 归一化数量 = Q / D。Q为真实归属材料kg或真实完成服务事件数，分别测量；在按allocate_returns处理净耗用供应前保留毛领用、库存及退回。 | Q; D; cp_materials; cp_services; cp_acceptance | 每参考流采用原单位的具体交换归一化数量 |  |
| energy_normalize | installation_electricity | 归一化电量 = E_job / D。E_job为实测时段kWh仅减有证据其他用户kWh；交接前归属充电纠正时段只计一次。 | 电表起止；其他用户记录；E_job; D; cp_energy; cp_acceptance | 每参考流kWh |  |
| owned_asset_normalize | owned_equipment_attribution | 归一化制造资产份额 = N_asset * A_job / A_life / D。N_asset为具体资产包真实件数；A_job及A_life采用同一有文件服务活动基准。维护更换退役数据包另按allocate_period处理。 | N_asset; A_job; A_life; D; cp_services; cp_acceptance | 每参考流归属item |  |
| residual_normalize | dry_material_waste; rejected_component_waste; contaminated_solid_waste | 归一化废物 = W_stream / D。W_stream为实际材质状态接收门独立实测净kg，不是未解释差值。 | W_stream; D; cp_residuals; cp_acceptance | 每参考流逐废物流kg |  |
| emission_normalize | airborne_particulate | 归一化空气颗粒 = P_air / D。P_air为监测质量，或实测活动量乘独立支撑的匹配基材工具捕集粒径基准系数；保留来源、单位转换及不确定性。 | P_air；匹配系数及活动量或监测；D; cp_residuals; cp_acceptance | 每参考流特定颗粒基准及空气子区室kg |  |
| solvent_partition | test_agent_constituent_to_air | 归一化组分排放 = S_air / D。S_air来自物种测量，或真实耗用配方乘准确组分份额再乘独立支撑释放份额；按同一组分基准核对留存捕集残留。不得将耗用量全部默认释放。 | 真实配方耗用；SDS组成；分配或物种监测；S_air; D; cp_residuals; cp_acceptance | 每参考流已识别物种及空气子区室kg |  |
| reference_output | accepted_installation | 归一化验收输出 = D / D = 1 item。D仅包含最终同配置验收系统。 | D; cp_acceptance | 每参考流1 item |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_reference | accepted_installation | 保留全部限定信息、独立D及失败待验收记录；不同配置分别处理。 | cp_acceptance |
| dq_pools | all inventory rows | 逐SKU状态接收方保留毛输入、库存、留存、退回及实测残留；混合质量总和仅为诊断。 | cp_materials; cp_residuals |
| dq_ownership | owned_equipment_attribution; hired_support_service; installation_electricity | 制造及供应包含项、全部用户期间、真实维护更换退役和剩余使用证据须可核对；服务与电量不得重复。 | cp_services; cp_energy |
| dq_occurrence | all inventory rows | 未知发生状态、缺失计量或身份不可标为零；下游交换前须核实具体身份及Energy或Duration等支撑。 | actual source and quantity records |
| dq_range_incoming_packaging | incoming_packaging | 范围证据需求：需提供实际批次的材质重量、包装规格、重复使用及退回记录和供应数据集包装边界；尚无通用的每系统包装质量区间。 | cp_materials; 实际同域数量证据 |
| dq_range_owned_equipment_attribution | owned_equipment_attribution | 范围证据需求：需提供具体资产制造或BOM、真实维护、所有使用工程及期间、全寿命使用量和剩余使用量不确定性；不得默认寿命、重复使用次数或每系统通用隐含质量。 | cp_services; 实际同域数量证据 |
| dq_range_control_panel | control_panel | 范围证据需求：需提供实际控制盘质量、数量及配件边界；单控制盘参考对象不能给出跨型号质量区间。 | cp_materials; 实际同域数量证据 |
| dq_range_field_alarm_devices | field_alarm_devices | 范围证据需求：需提供实际器件类型BOM、兼容SKU质量、回路负载及设计覆盖；不得使用混合器件总量或通用每系统器件数区间。 | cp_materials; 实际同域数量证据 |
| dq_range_standby_batteries | standby_batteries | 范围证据需求：需提供具体电池数据表、批准及设计要求、验收电池对BOM和真实质量；制造商备用容量Ah示例既不是安装能耗，也不是通用电池用量范围。 | cp_materials; 实际同域数量证据 |
| dq_range_alarm_cable | alarm_cable | 范围证据需求：需提供实际回路长度、芯线及等级、余量与端接要求、准确kg/m证据和切割返工记录；尚无通用每系统电缆质量区间。 | cp_materials; 实际同域数量证据 |
| dq_range_fixings_and_containment | fixings_and_containment | 范围证据需求：需提供验收配置、真实安装及领用件数和SKU质量；已准备的主要支撑及建筑结构不能作为新增材料区间。 | cp_materials; 实际同域数量证据 |
| dq_range_detector_test_agent | detector_test_agent | 范围证据需求：需提供兼容产品及SDS、真实罐质量变化和同方法剂量观察；没有已核实的通用每测试克数系数。 | cp_materials; 实际同域数量证据 |
| dq_range_test_cleaning_consumables | test_cleaning_consumables | 范围证据需求：需提供真实对象及事件覆盖、SKU和领用、退回、残留、擦拭物测量；剂量观察只适用于同器件及同方法。 | cp_materials; 实际同域数量证据 |
| dq_range_installation_electricity | installation_electricity | 范围证据需求：需提供实际表计时段、背景供电及充电职责、其他用户、验收系统分担和可比实测kWh/参考流记录。Energy/kWh身份支撑未决；无有来源的数量范围。 | cp_energy; 实际同域数量证据 |
| dq_range_hired_support_service | hired_support_service | 范围证据需求：需提供真实事件定义或小时合同、配置及容量、供应方包含项和所有用户份额。小时Duration未决，不能由本计数单位覆盖。 | cp_services; 实际同域数量证据 |
| dq_range_unused_product_return | unused_product_return | 范围证据需求：需逐SKU关联实测毛领用、未变状态及真实退回；没有默认退回比例或自动收益。 | cp_materials; 实际同域数量证据 |
| dq_range_dry_material_waste | dry_material_waste | 范围证据需求：需提供逐废物流称量联单、来源池关联及真实分流路线；组件标称质量不能给出废物率区间。 | cp_residuals; 实际同域数量证据 |
| dq_range_rejected_component_waste | rejected_component_waste | 范围证据需求：需提供真实故障、拆除及复测、原领用、分类和称量发运记录。不得默认缺陷率；零值须有完整事件覆盖。 | cp_residuals; 实际同域数量证据 |
| dq_range_contaminated_solid_waste | contaminated_solid_waste | 范围证据需求：需提供特定配方残留、容器皮重、擦拭物质量及接收方接收证据；不得假设全部化学品蒸发。 | cp_residuals; 实际同域数量证据 |
| dq_range_airborne_particulate | airborne_particulate | 范围证据需求：需提供匹配基材、工具、捕集措施、粒径基准、活动量及排放系数或监测证据；不得使用通用粉尘或平衡损失量。 | cp_residuals; 实际同域数量证据 |
| dq_range_test_agent_constituent_to_air | test_agent_constituent_to_air | 范围证据需求：需提供具体产品及SDS、组分组成和送达、捕集、残留份额；不得推断通用气溶胶及VOC区间或空气子区室。 | cp_residuals; 实际同域数量证据 |
| dq_range_accepted_installation | accepted_installation | 范围证据需求：1 item是准确归一化参考输出，不是实测产率范围。验收分母、失败及待验收工作和配置区分均须可追溯记录。 | cp_acceptance; 实际同域数量证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_gate | accepted_installation | 要求全部参考限定信息、正D及完整签字验收。按工程验收计划核对真实触发警报及因果响应、故障市电失效备用及最终恢复正常记录。编程测试模式或部件检查不等于整系统验收。 | `ctec-standard` |
| validate_identity | all inventory rows | 下游交换完成前核实每项真实SKU材质状态接收方，或物种空气子区室身份及相容属性单位。条件总括卡根据实际发生展开为零、一或多个具体交换；未知不等于零。计数支撑不核实服务UUID。 | |
| validate_quantity | all inventory rows | 匹配各原始数量分子、单位、CP、第8节适用计算及同一D。核对分开的毛领用退回库存留存残留池；禁止混合材质UUID、电力质量转换及小时租用事件化。缺少相容Energy或Duration支撑仍是明确缺口。 | |
| validate_rework | rejected_component_waste; accepted_installation | 原组件电缆电池缺陷、修复替换、复测和真实出口均关联install_accept。失败及待验收工作不计入D，但保留负荷。每个出口有真实状态接收方；不得使用无文件回收路线或收益。 | |
| validate_shared_period | owned_equipment_attribution; hired_support_service | 核对所有资源用户及期间、真实寿命服务份额和制造维护更换退役事件所有权。剩余使用、更换、终止证据缺失时不能完成最终归属。禁止整台工具默认值、寿命年化重复归属及供应方服务、自有资产、电量之间重复。 | |
| validate_ranges | all inventory rows | 第8节保留逐角色范围证据需求。制造商设计限制、标称系数或准确1 item参考不是实测数量区间。披露缺失范围，不得为消除警告虚构界限。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已披露常规有线系统配置的安装至验收前景数据包 |
| downstream_use | secondary_dataset; background_dataset；下游process及lifecyclemodel投影 |
| allowed_use | 同一明确范围、起始接口、配置及交接门的安装调试贡献，使用真实相容供应数据集 |
| excluded_use | 不同覆盖配置自动比较；独立器件制造；可寻址无线AlarmSense两线制联网复示灭火剂系统；远程监控及运行服务 |
| required_metadata | 控制盘及分区；准确器件配件BOM；真实回路馈线长度；兼容备用电池对设计；场址工程期间；设计测试验收门；D；供应包装边界；资产服务所有方；所有用户阶段索引；数量身份依据 |
| required_quality_disclosure | 未决具体身份和Energy及条件Duration支撑；逐角色范围缺口；表计和平衡完整性；故障返工；资产剩余使用和期间不确定性；省略未知发生状态及功能等价限制 |
| update_trigger | 控制盘配置路线设计或范围接口改变；电池器件规格改变；新真实数量范围证据；供应资源边界改变；身份核实；验收或资产历史更新 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| ctec-standard | handbook | C-TEC CFP 2/4/8 Zone Standard安装维护手册，Approved Document DFU7004010 Rev 4，01/11/21；https://c-tec.com/download?wpdmdl=13537 ；PDF第6–8、10–13、15、17及23页 | 常规独立探测手动触发及极性声响回路；真实电缆安装接地市电接口和组件职责；永久充电器及兼容新VRLA电池对；测试模式恢复及配置记录；与负载备用要求相关的电池完整性。手册不提供安装电量、测试剂剂量、资产寿命或通用服务归一化用量范围。 |
| accepted-count-normalization | method_factor | 正验收计数的归一化恒等式：D / D = 1；本PCR第3及8节；D仅含同配置完整验收系统 | 准确参考输出1 item，不是经验产率或用量范围 |
