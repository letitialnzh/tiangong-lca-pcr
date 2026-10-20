---
pcr_id: pcr.constructions-and-construction-services.construction-services.passive-outdoor-terrestrial-tv-antenna-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 室外无源地面电视天线安装服务

## 1. 范围与适用性

本 PCR 适用于住宅地面电视接收用固定式室外无源定向天线的首次安装。验收配置包括天线及匹配巴伦、实际桅杆/支架、连接到一个接收接口的连续同轴引入线，以及本次安装专用、接至声明适用的现有建筑接地接口的桅杆和同轴接地或等电位连接。完成定向、记录实际验收测试并由安装方移交后构成服务输出。实际施工遵循技术设计和当地适用要求；代表性厂家指南仅支持路线判断，不构成通用安装布局。

排除卫星天线、室内天线、有线电视供应网络、多出口分配、放大器、旋转器、塔架、新建防雷系统、新设接地极、涂装、旧设备拆除以及后续接收/维护服务。输出不代表接收距离、频道数量或寿命保证。场址条件不兼容或设计扩展时，须另行审查范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.passive-outdoor-terrestrial-tv-antenna-installation-services |
| classification_refs | cpc:3.0:54614；仅较窄子集 |
| covered_products | 已验收的首次安装室外无源定向住宅地面电视天线配置及单一接收端引入线 |
| excluded_products | 卫星、室内、有源或旋转接收；分配网络；整套防雷及后续运行 |
| representative_product | Channel Master Advantage 30 系列展示无源天线组装、随附巴伦、桅杆固定及定向；以实际兼容型号为准，不要求品牌 |
| production_route | 接收及接口确认；天线组装；桅杆与天线固定；同轴布设/端接/防水；设计要求的桅杆/同轴连接；定向/测试；纠正与复测；验收移交 |
| market_state | 安装方签字移交的完整场址安装，配置及测试端点明确 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 安装方移交时一项声明配置的完整已验收安装 |
| How much | 1 item；D 为归一化之前独立统计的实际完整已验收安装正数 |
| How well | 声明型号、基材/支架、单一引入线、分别的桅杆/同轴连接设计和接收端点满足有记录的验收准则；重大配置差异须分包或证明等效性 |
| How long or cycle | 一次从接收到验收的作业周期，包括失效工作和纠正/复测。资源购置、服务/报告期、维修/更换及退役分别建立索引；不声明运行年服务 |
| reference_flow_link | `accepted_installation` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收的室外无源定向住宅地面电视天线安装 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 实际天线和巴伦型号/包含范围；无源固定定向状态；桅杆/支架几何与基材；同轴 SKU/长度/路径及单一接收端；防水产品；分别的桅杆/同轴连接设计及现有接地接口；辖区/设计；目标发射台、实际接收测试与验收准则；场址/日期；签字移交 |

前景数据包须声明所有限定信息。D 来自完整安装的签字验收记录，不能用采购天线、到访或测试次数代替。缺失验收或配置等效性证据时不得归一化。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `accepted_count` | 参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 采用实际独立完整安装验收计数 D > 0；最终归一化输出为 1 item。 |
| `material_mass` | 质量清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以校准记录测量净供货、退回、废物及已识别释放质量。计数/长度到质量换算须有匹配 SKU 和状态证据，不能采用异质安装总重量。质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`。 |
| `metered_energy` | installation_electricity | Energy | kWh | 保留实际计量电量及其使用者边界；功率额定值、电池 Ah、净热值及时间不能测量电能。确切支撑身份仍未解决。 |
| `counted_resource` | owned_equipment_attribution; hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 可重复使用资产份额对应一个已识别资产生命周期包；租赁事件须是真实完整合同服务。实际按小时租赁须有 Duration 支撑并经审查。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际设计所需材料已接收，安装基材、安全登高/电力线净空、接收端点及适用的现有建筑接地接口已核验。确认现有条件代表就绪，不构成新产品投入或收益。 |
| starting_condition_role | 安装方集成责任开始的明确预备接口 |
| product_classification_scope | 所选无源住宅地面接收安装比 cpc:3.0:54614 窄；该子类还包含其他天线/有线电视/避雷服务 |
| recursive_input_rule | 采购同类既有安装时，记录其实际状态及上游边界，仅分离真实新增安装方工作。未解决的递归重叠阻止验收；不得无限追溯或重复计入此前服务。 |
| upstream_dataset_requirement | 采用匹配的部件和服务数据包，明确制造、进场运输、包装和供应者资本包含范围。各项真实上游负荷仅计一次。 |
| disclosure | 场址/接口批准、安装方供货及移交责任、作业/期间范围、来料保管、实际资源所有权和上游包含/排除项 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `installer_gate` | install_accept | 承担材料接收、组装/固定、引入线端接及防水、设计要求的分别桅杆/同轴连接、定向、测试、纠正/复测和签字移交。现有接地系统为接口；新设接地极及整套防雷建设不在范围内。 | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `component_boundary` | 部件投入及包装 | 核对天线随附巴伦/五金与独立桅杆、同轴、连接件及连接供料。即使制造已包含在上游，也须在保管台账保留物理来料包装；仅对上游排除项单独计入负荷。 | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `resource_boundary` | 自有设备及合同服务 | 识别实际安装方自有工具、充电器、测试仪和登高设备，以及各资源生命周期包的全部使用者。合同供应者承担自身资产生命周期。区分购置、服务/报告、维修/更换及终止期间，记录剩余使用证据缺口。 |  |
| `rework_boundary` | 失效工作及材料出口 | 定向、固定或接收测试失败属于 install_accept 内未验收状态，须纠正/复测。实际维修回路或可用退回、降级/回收/废弃出口均关联原作业和节点；未经审查的降级品不具有已验收输出身份。 | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `posthandover` | 接收机运行及后续服务 | 在验收移交终止；不计入接收运行用电、后续维护或营销接收保证。 | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：单独供货的桅杆及永久安装件 (`mast_mount_hardware`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

按实际材料及 SKU 展开桅杆、支架、U 形螺栓、锚固件及紧固件。供货由已确认的基材和安装几何条件确定；不得凭猜测扣减，也不得重复计入天线随附五金。

- 采集对象：单独供货的桅杆及永久安装件
- 流属性/单位：Mass / kg
- 数量规则：归属本作业的实际独立供货安装件质量 / D。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：`channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

数量证据缺口：需要实际安装设计、各 SKU 换算及领退料记录；不提供通用支架质量。

#### 采集要求：单独供货的同轴引入线、巴伦及连接件 (`coax_balun_connectors`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

按实际 SKU 展开连接到一个声明接收端的 75 欧姆连续同轴引入线、连接器及接收端配件。仅在巴伦确为天线供货包之外额外供货时单列投入，并明确原供货包含情况。

- 采集对象：单独供货的同轴引入线、巴伦及连接件
- 流属性/单位：Mass / kg
- 数量规则：归属本作业的实际引入线及独立连接件/巴伦质量 / D；必要时采用匹配的实测长度质量换算证据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：`channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

数量证据缺口：通用来源不提供电缆路径/长度、端接损耗及型号质量证据，须采集实际记录。

#### 采集要求：本次安装专用桅杆与同轴线等电位连接部件 (`bonding_components`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

按批准设计逐项展开导体、夹具、同轴接地块或保护配件。分别记录桅杆/支撑连接和同轴入户连接，接至适用的现有建筑接地接口；这不代表新设接地极或整套防雷系统。

- 采集对象：本次安装专用桅杆与同轴线等电位连接部件
- 流属性/单位：Mass / kg
- 数量规则：归属本作业的实际连接部件供货质量 / D。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：`channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

数量证据缺口：任何界限须由场址批准接口/设计、实际导体及配件 SKU 和净供货记录建立。

#### 采集要求：实际连接器及穿透部位防水产品 (`weatherproofing_materials`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

安装方法实际采用密封或防水时，按配方/安全数据表及施用部位展开每种产品。区分留存材料、容器和损失；施用不表示全部蒸发。

- 采集对象：实际连接器及穿透部位防水产品
- 流属性/单位：Mass / kg
- 数量规则：归属本作业的实际防水产品供货质量 / D。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`

数量证据缺口：需要产品领用、留存质量和安全数据表组分证据；不支持通用使用量或排放区间。

#### 采集要求：按材料及货批记录的来料包装 (`incoming_packaging`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

对每批天线/部件的包装接收保留物理保管核算，并按实际材料展开。若其制造负荷已包含于到货部件数据，不得重复添加；单独添加须有上游包明确排除的证据。

- 采集对象：按材料及货批记录的来料包装
- 流属性/单位：Mass / kg
- 数量规则：归属本作业的实际来料包装质量 / D。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`

数量证据缺口：须采用货批重量和供应商包装边界披露，不能假定包装比例。

#### 采集要求：实际安装方自有设备的生命周期分摊份额 (`owned_equipment_attribution`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

逐项按确切型号/序列号展开实际使用的工具、外置充电器、射频/电气测试仪及登高设备。其生命周期包覆盖购置、服务/报告期、实际维修/更换和退役；列出包括本包之外在内的全部受益作业/节点与期间。

- 采集对象：实际安装方自有设备的生命周期分摊份额
- 流属性/单位：Number of items / item
- 数量规则：各资源生命周期包的实际因果活动份额 / D item；保留完整资源使用者证据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_services`

数量证据缺口：需要确切资源寿命及全部使用者活动证据；不提供通用寿命、剩余使用量假设或每作业固定设备份额。

#### 采集要求：实际整项合同辅助服务事件 (`hired_support_service`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

按合同参考量和配置展开实际采购的每项完整运输、登高或测试事件。供应者承担其资产生命周期；披露包含的燃料/电量及进场运输。按小时租赁须有真实 Duration 支撑并经审查，不能转换为虚构事件。

- 采集对象：实际整项合同辅助服务事件
- 流属性/单位：Number of items / item
- 数量规则：归属本作业的实际整项合同事件数量 / D item；仅真实整项服务允许采用计数单位。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_services`

数量证据缺口：声明服务范围界限前需要实际合同、服务参考量及负荷包含记录。

#### 采集要求：未改变的可用部件退回 (`unused_product_return`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `product`.

仅记录实际离开安装方保管范围且未改变的可用供料。保留原 SKU、接收到退回关联号及接收者；内部库存转移不属于该边界出口，不推定避免制造收益。

- 采集对象：未改变的可用部件退回
- 流属性/单位：Mass / kg
- 数量规则：归属本作业的实际可用退回质量 / D。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`

数量证据缺口：数量及界限须由原领料和接收方确认的退回证据支持。

#### 采集要求：实际安装废弃物流 (`installation_waste`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `waste`.

按材料、物理状态、危害属性及获准接收途径展开包装、余料和移除的失效部件。每次废弃或回收关联 install_accept 的原领用/返工事件；电子或电池拒收品须有实际身份及生命周期责任方，不得将异质废物合并为一个具体流。

- 采集对象：实际安装废弃物流
- 流属性/单位：Mass / kg
- 数量规则：各材料/状态/接收者对应的实际归属废物质量 / D。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_releases`

数量证据缺口：需要关联事件的称重及去向票据；未记录损失不等于零废物。

#### 采集要求：实际受污染密封剂、擦拭物及容器残余 (`contaminated_solid_waste`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `waste`.

确实产生时，按化学组成、物理状态、危险属性及接收途径展开受污染容器、擦拭物与密封残余。区分 installation_waste 已负责的清洁包装和接头处留存材料。

- 采集对象：实际受污染密封剂、擦拭物及容器残余
- 流属性/单位：Mass / kg
- 数量规则：各物流实际归属受污染残余质量 / D。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_releases`

数量证据缺口：建立废物界限需要实际材料/安全数据表、残余称重及接收分类。

#### 采集要求：已识别的安装颗粒物向空气释放 (`airborne_particulate`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `elementary`.

仅在有钻孔/安装及实际空气释放证据时适用。按已报告物质、粒径分级及接收空气环境展开；收集尘为废物，留存基材不是排放，不能把不明损失归为空气释放。

- 采集对象：已识别的安装颗粒物向空气释放
- 流属性/单位：Mass / kg
- 数量规则：实际归属已释放颗粒物物种/粒径分级质量 / D。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_releases`

数量证据缺口：需要任务/捕集记录以及实测或有依据的物种/粒径释放证据；通用粉尘名称不是身份或排放因子。

#### 采集要求：已识别的防水产品组分向空气释放 (`weatherproofing_constituent_to_air`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `elementary`.

实际产品释放已识别组分时，记录物种、配方/安全数据表、施用条件、质量平衡或测量及接收空气环境。未指定物种的 VOC 标签和密封剂全部供货质量都不能支持具体排放。

- 采集对象：已识别的防水产品组分向空气释放
- 流属性/单位：Mass / kg
- 数量规则：实际归属已排放组分质量 / D。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_releases`

数量证据缺口：物种含量及释放证据须区分留存、捕集、废弃与入空气份额；不支持全部排放假设。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `install_accept` | 安装、定向、测试并验收室外无源天线 | required | 每项范围内作业 | 将独立天线、支架、同轴和连接角色集成为声明的已验收安装；承担纠正/复测及关联原事件的出口 | D 项实际完整已验收安装；归一化输出 1 item |

唯一节点承担连接与安装、登高及测试支持。这些是同一物理服务内的责任，不设置虚构阶段输出。前景证据决定条件性伞形卡对应零个、一个或多个具体交换。绑定之前展开实际 SKU/状态/接收者或物质/空气环境物流；混合材料或通用 VOC/粉尘不能使用一个 UUID。不存在须有明确活动及保管证据，缺失记录仍为数据缺口。

### 过程：安装、定向、测试并验收室外无源天线（`install_accept`）

#### 输入

##### 产品流

###### 无源定向地面电视天线组件（`antenna`）

记录安装前实际接收的 VHF/UHF 天线组件。出厂随附夹具、螺栓及匹配巴伦归入该供货包；该身份不包含有源放大器或旋转器。

- 选定流：无源定向地面电视天线组件
- 流属性/单位：Mass / kg
- 数量规则：归属本作业的实测天线供货质量 / D；与作业物料表核对随附附件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 来源：`channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

数量证据缺口：制定清单界限前需要匹配 SKU 的净称重、附件包含范围及已验收配置记录。

###### 移交前工具、充电器及测试实际用电（`installation_electricity`）

记录实际安装方计量边界内的外供电量，注明供应者、电压、场址及共用者。明确充电与测试包含范围；移交后接收机运行用电不在范围内。Energy 支撑仍未解决，容量、净热值或运行时间不能替代电量。

- 选定流：移交前工具、充电器及测试实际用电
- 流属性/单位：Energy / kWh
- 数量规则：归属本作业的移交前实际计量 kWh / D。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`

数量证据缺口：需要实际电表覆盖、共用负荷分摊及匹配作业活动；天线厂家规格不能建立用电界限。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的室外无源定向住宅地面电视天线安装（`accepted_installation`）

输出是完成安装的天线、桅杆/支架、一个同轴接收端连接及批准范围内的桅杆/同轴接地连接，经定向、实际测试、纠正/复测和签字移交。独立统计所声明等效配置的实际完整已验收安装数量 D；部件、到访、测试和未完成作业均不属于输出。

- 选定流：已验收的室外无源定向住宅地面电视天线安装
- 流属性/单位：Number of items / item
- 数量规则：1 item
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_acceptance`
- 来源：`channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product`

数量证据缺口：该参考归一化是独立验收计数后的定义，不是生产率或接收性能界限。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

不预设有意联产品。失效组装、定向、测试及纠正负荷保留于原安装作业；未改变的退回品和废弃部件均不获得避免生产收益。记录每种实际拒收状态及去向，包括节点内维修、实际可用退回、回收/废弃或另经审查的降级。未完成或失效安装不得计入 D。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `job_specific` | 作业材料及纠正工作 | 将可追溯的作业专用供料、损失、电量及测试/复测归属该作业。共用实际成本须有记录的因果资源池；物理活动不同时不能按验收数量分配。 |  |
| `resource_share` | 共用设备和整项合同事件资源池 | 对资源 r 和作业 j，在同一定义的生命周期/资源包全部受益作业 k 上计算 a_rj = A_rj / sum(A_rk)。采用一致因果活动基准、完整使用者覆盖、正分母及 sum(a_rj) = 1。分摊 a_rj / D item，负荷为 B_r * a_rj / D；剩余使用量不确定时不得形成无支持的最终份额。 |  |
| `period_ownership` | 全部资源及事件包 | 为购置/制造、各服务/报告期、维修、更换及退役/终止建立索引。所有投入、资产、输出和事件均关联期间与作业，并保留各期分配决定/证据。更换是其自身实际事件包。每个来源池及资源责任方连同其他作业仅核对一次；不得重复供应者资本或缺少资源证据进行年化。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | `install_accept` | 已验收安装及作业配置 | 作业验收记录 | 作业/配置号；场址/日期；型号/物料表；基材/支架；同轴路径/端点；桅杆/同轴连接接口/设计；目标发射台；测试准则/结果；纠正/复测；签字验收；实际 D | 审计实际完工作业及签字测试/移交记录；独立统计同配置完整已验收安装 | item | 每项作业及纠正/复测 | 从接收到移交完整作业；明确报告期 | 实际安装场址及声明接收接口 | 每参考流 | 胜任人员验收、注明日期测试记录、正 D 及有依据的配置等效性 |
| `cp_materials` | `install_accept` | 供料、包装及可用退回 | 货批和材料保管台账 | 作业/期间；货批/SKU/材料/状态；包含范围/物料表；净质量；实际计数/长度；匹配质量因子；期初/期末库存；安装量；退回/接收者；供应商运输/包装边界 | 校准称重或可追溯匹配 SKU 换算；以原事件核对接收/领用、安装、库存及接收方确认退回 | kg | 每次接收、领用、安装及退回 | 声明期间全部作业来料及库存移动 | 安装方保管范围及实际作业场址 | 每参考流 | 校准；SKU/状态换算来源；上游包含台账；接收者票据 |
| `cp_energy` | `install_accept` | 安装用电 | 电表及共用负荷活动记录 | 作业/期间；供应者/电压/场址；计量边界；起止 kWh；工具/测试/充电活动；全部共用者；供应者包含项 | 读取实际电表或验证分表；将充电/测试和共用者关联同一作业/期间及因果边界 | kWh | 每个相关计量区间及共用活动 | 全部范围内移交前用电区间 | 实际供电/计量边界 | 每参考流 | 电表有效性；负荷覆盖检查；无功率/容量替代；披露确切支撑缺口 |
| `cp_services` | `install_accept` | 自有资产及租赁整项辅助事件 | 资源生命周期及合同台账 | 资源型号/序列号/所有者；作业/节点/期间使用者；购置/制造；实际服务活动；维修/更换；退役；剩余使用不确定性；真实整项事件合同参考量；运输/电量/资本包含项 | 读取确切资源和合同包；枚举各作业/节点和期间全部使用者；验证实际因果活动及不重复的负荷责任 | item；保留实际物理活动单位 | 每次资源使用、合同事件及生命周期变动 | 完整资源生命周期包和已索引服务/报告期 | 当前安装方及全部受益使用者作业/节点 | 每参考流 | 完整使用者分母；正活动量；份额闭合；供应者边界；未解决寿命/Duration 披露 |
| `cp_releases` | `install_accept` | 废物及已识别排放 | 事件及去向释放记录 | 作业/期间；原领用/返工号；材料/化学组成；状态/危害；接收者/票据；捕集/留存质量；排放物种/粒径/空气环境；配方/安全数据表；实际任务；方法不确定性 | 称重并确认真实接收物流；根据实际任务和产品证据测量或论证组分/颗粒释放；区分留存、捕集和排放材料 | kg | 每次废物出口或产生释放活动 | 直至移交的全部相关原始/返工事件 | 实际工作地点及接收者或接收空气环境 | 每参考流 | 去向票据；方法与不确定性；物种/粒径/介质支持；材料平衡残余披露 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_actual` | 所有非参考清单行 | q_i = n_i / D；n_i 为独立保留的具体交换实际归属分子；D 为实际完整验收正计数。不得从参考输出倒推 n_i。 | n_i; D; cp_acceptance; 对应材料/电量/服务/释放协议 | 每参考流 q_i |  |
| `sku_mass` | 质量清单行 | 采用实测净 kg；仅有计数或长度时，将实际数量乘以可追溯匹配 SKU/状态质量因子并保留不确定性。异质总量仅作诊断，不构成具体交换。 | cp_materials; cp_releases; 匹配换算证据 | 实际 kg 分子 |  |
| `custody_closure` | 可识别材料来源池 | 期初库存 + 接收 = 留存安装材料 + 期末库存 + 可用退回 + 实际废物 + 已识别释放 + 披露残余。逐一核对材料/来源池，不能把残余归于粉尘或用零填补缺失数据。 | cp_materials; cp_releases; 原事件及接收者台账 | 材料池闭合和未解决残余 |  |
| `asset_attribution` | owned_equipment_attribution; shared hired_support_service | 对各确切资源池应用 resource_share，保留 A_rj、全部 A_rk、B_r、使用者/节点/期间索引及责任；归属实际包数量除以 D。不存在服务到质量的等效关系。 | cp_services; cp_acceptance; 确切活动及生命周期证据 | 每参考流资源份额或真实事件 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `configuration_quality` | 已验收输出 | 记录全部参考限定信息及配置等效性。产品点规格仅适用匹配型号，不是通用服务数量或接收保证。 | cp_acceptance；厂家型号说明 |
| `custody_quality` | 材料及出口 | 保留确切身份、单位、校准数量、事件/接收者及上游制造/运输/包装包含项；报告库存和质量平衡残余。 | cp_materials; cp_releases |
| `resource_quality` | 资产及共用服务 | 完整使用者/期间索引、因果分配和更换/终止责任。剩余寿命未知或使用者不完整时，明确保留为最终确定阻碍。 | cp_services; resource_share; period_ownership |
| `conditional_quality` | 条件性伞形交换 | 认定某流不存在须有实际活动/保管证据；缺失供料、电量、废物或释放证据为缺口。绑定前核验真实 SKU/物种/介质及支撑。 | 全部实际协议；不进行零值填补 |
| `quantity_quality` | 全部清单 | 采集实际时间/场址覆盖、换算来源及不确定性。厂家来源不提供通用安装 Range；保留各卡专用证据需求，不虚构界限。 | 校准；匹配来源包；声明缺口 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `acceptance_gate` | 参考及 install_accept | 验证实际范围/接口、全部限定信息、独立正 D、签字完整输出及纠正/复测闭合。参考链接/名称/属性/单位须匹配 accepted_installation 并明确 1 item。失效/未完成工作不得计入 D。 | `channelmaster-advantage-installation`; `channelmaster-advantage-support`; `channelmaster-advantage-product` |
| `stream_gate` | 清单及材料出口 | 检查各实际 SKU/状态/接收者物流、材料池保管闭合及原拒收/返工/出口链接。区分留存防水材料、捕集废物和已识别空气物种/粒径/介质；通用粉尘/VOC 不充分。缺失证据为不确定，不能视为零。 |  |
| `resource_gate` | 资源及期间包 | 检查全部使用作业/节点及期间、实际活动分母和份额闭合、各期决定和更换/终止证据。购置、供应者资本、运输、包装及共用电量仅核对一次；未解决剩余使用量阻止最终确定。 |  |
| `binding_gate` | 参考及具体交换 | 各最终交换须验证确切身份及兼容支撑链。单独登记未解决身份；核对双语语义、来源/协议/计算链接及投影指纹。分别报告已执行/跳过检查、发现及完整度；机械检查不证明发布就绪或 UUID 已解决。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 面向下游 process 和 lifecyclemodel 投影的前景安装数据包 |
| downstream_use | secondary_dataset; background_dataset，仅适用兼容配置、范围及安装方移交门槛 |
| allowed_use | 匹配的无源住宅地面天线安装及其实际部件/服务接口 |
| excluded_use | 运行接收用电、长期接收/寿命声明、后续维护、卫星/有源/分配路线或整栋建筑/整套防雷等效 |
| required_metadata | 场址/时间；实际型号/物料表和配置；已验收 D；接口/设计；测试/验收及纠正；上游数据集；清单/协议；责任、使用者及期间分配 |
| required_quality_disclosure | 身份/支撑缺口；缺失清单 Range 证据；计量/校准/换算不确定性；保管残余；剩余使用及分配不确定性；实际执行/跳过验证 |
| update_trigger | 型号、安装/接口、引入线、物料表、设计、验收方法、路线变化或更强实际数量/身份证据 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-explanatory-notes | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 3.0 范围：所选无源地面路线为包含其他住宅天线/有线电视/避雷导体安装的较窄子集 |
| channelmaster-advantage-installation | handbook | https://downloads.channelmaster.com/Sheets/30%20Series%20UG.pdf | 代表性组装、随附五金/巴伦与独立桅杆/同轴、安装、净空、接地和定向/测试责任 |
| channelmaster-advantage-support | handbook | https://www.channelmaster.com/blogs/product-support/advantage-45 | 分别的桅杆/支撑及同轴入户连接责任、实际当地设计和接收评估 |
| channelmaster-advantage-product | handbook | https://www.channelmaster.com/products/advantage-45-outdoor-tv-antenna-cm-3016 | 代表性无源配置及供货包含项；产品质量/距离营销不能支持完整安装清单 |
