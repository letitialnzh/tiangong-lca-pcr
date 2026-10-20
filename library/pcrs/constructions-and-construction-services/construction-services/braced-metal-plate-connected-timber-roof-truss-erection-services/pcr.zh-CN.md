---
pcr_id: pcr.braced-metal-plate-connected-timber-roof-truss-erection-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 经支撑加固的齿板连接木屋架架设服务

## 1. 范围与适用性

本 PCR 适用于在已验收的既有支承结构上首次架设指定的工厂制造齿板连接木屋架整套构件。输出为符合限定条件的完整架设阶段服务：指定屋架已就位并连接，所需永久单杆件约束和支撑已安装，临时整体稳定措施已有记录并在需要时保留。该输出既不是一榀出厂屋架，也不代表完整屋面建筑性能。CPC 3.0 54522 包含桁架屋面框架施工；本 PCR 仅覆盖较窄的木屋架路线，排除现场散料屋面框架和金属屋架（`un-cpc3-2025`）。

必须采集实际屋架设计图、布置文件、现行工地资料包、已验收支承接口，以及工程师批准的架设、临时稳定和永久支撑方案。SBCA 2023 年公开文章支持安装工序，其数值要求不能作为通用设计值。现行 BCSI 介绍页注明修订的 2025 版；引用介绍页不代表已取得完整指南。须记录实际使用说明的版本及适用性（`sbca-installation-2023`；`sbca-bcsi-current`；`sbca-jobsite-packages`）。

排除工厂制造；现场切割、开槽或钻孔修改屋架；未经批准的修理；楼面桁架；墙体或支承结构施工；屋面板、屋面水平支撑体系施工、覆盖和防水；机电荷载安装；建筑使用和拆除。疑似缺陷屋架须隔离，等待制造商或工程师处置。经批准的结构修理需要另行审查边界。本路线安装规定的预定尺寸支撑和连接件；独立现场加工工序须审查边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.braced-metal-plate-connected-timber-roof-truss-erection-services |
| classification_refs | CPC 3.0 54522 — 屋面框架服务；拟采用 narrower 映射 |
| covered_products | 在已验收支承上首次架设实际完整工厂齿板连接木屋架套件的阶段服务，包括规定的支承连接、永久单杆件约束及支撑，以及有记录的临时稳定措施 |
| excluded_products | 现场散料屋面框架；钢或楼面桁架；屋架制造或修改；支承施工；完整屋面或水平支撑体系及防水；建筑运行 |
| representative_product | 交付时已由工厂组装的指定屋架套件，按布置图架设，所有必需支撑完成并保留必要临时约束后交付 |
| production_route | 审查实际现行文件及支承准备情况；接收检查成品屋架；安排起吊、作业通道和临时稳定；就位锚固；安装永久约束和支撑；在不修改屋架条件下纠正位置或固定；检查并移交责任 |
| market_state | 场址特定的已完成架设阶段施工服务；后续屋面水平支撑体系的完成须单独声明，不得在本交付节点默认完成 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在支撑完备的架设阶段交付节点首次架设实际完整指定木屋架套件的合格服务 |
| How much | 1 item；一套完整构件包，声明每榀规定屋架的 ID 和布置 |
| How well | 支承已验收；规定屋架位置、连接及永久杆件支撑完成；无未解决损伤或未经批准的修改；临时整体稳定和保管责任有记录；检查和交付已签署 |
| How long or cycle | 一个从接收至签署架设阶段交付的工作包。记录架设日期、保留支撑持续至后续稳定节点的时段、更换和拆除事件；不声明建筑使用寿命 |
| reference_flow_link | `erected_roof_truss_set` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 支撑完备的木屋架整套构件架设阶段服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 项目、场址及套件 ID；屋架 ID、数量及出厂供应节点；木材树种、等级、处理及设计几何；实际跨度、坡度、间距和布置；支承类型、位置及连接；设计和布置文件版本；适用的现行工地说明；工程师批准的起吊、临时和永久支撑方案；永久杆件支撑明细；保留的临时支撑及后续屋面水平支撑体系依赖；架设及延续时段；检查与缺陷关闭；保管、后续拆除责任人及负担分配；资源供应的地域和时间 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `counted_set_reference` | 参考产品 | 物品数量 | item | 一套验收完整套件为 1 item。单榀屋架数量是限定信息和投入数量，不是参考套件数量；没有明确套件记录，不得以屋面面积、木材质量或一榀屋架换算。 |
| `material_mass_evidence` | roof_trusses; permanent_bracing; bearing_connectors; transport_packaging; reusable_returns; erection_waste | 质量 | kg | 保留实际件数及按材料测量或由供应商提供的净质量。几何不能提供木材密度或含水率修正；件数到质量换算须有实际配置特定记录。混合材料及废物去向须分开。 |
| `service_unit_evidence` | temporary_stability_service; lifting_access_service; logistics; installation_energy; direct_fuel | 实际服务属性 | h; t*km; kWh; kg | 保留实测服务、燃料和能量单位及供应方边界。小时数不能代替燃料或资产制造。换算须有实际因子、单位和计量依据；不得由起吊次数或额定能力推断燃料。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在声明供应节点的工厂完整指定木屋架及规定安装构件，既有支承已按实际套件验收，起吊通道可用 |
| starting_condition_role | 前景架设边界；支承准备是有记录的接口，在整栋建筑模型中不能代替支承施工负担 |
| product_classification_scope | CPC 3.0 54522 中较窄的木屋架架设子集；与 54530 屋面覆盖分开 |
| recursive_input_rule | 将出厂屋架记为构件产品，而非本架设服务。如果已架设套件或分包架设服务进入工作包，须披露已完成范围，避免重复同一架设或资源负担；迁移不属于首次架设。 |
| upstream_dataset_requirement | 使用实际供应节点屋架、构件和资源数据集，声明包装、运输、能量及临时资产覆盖。通过这些投入纳入上游制造；不在现场节点重建工厂生产。 |
| disclosure | 声明供应套件覆盖、排除的支承及屋面水平支撑体系工作、架设节点物理状态和责任、所有共享使用方及期间，以及临时支撑生产、使用、拆除覆盖和后续责任人。未解决的稳定或服务覆盖问题阻止完成数据集。 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `document_and_host_gate` | roof_truss_erection | 架设前核对实际屋架设计、布置、工地文件、批准的架设支撑方案和已验收支承；由负责设计者或制造商解决冲突。记录项目特定适用性，不直接采用公开文章尺寸或公差。 | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `erection_components` | roof_truss_erection | 负责成品屋架、额外支承紧固件和吊件、永久支撑约束杆件及固定件、临时稳定服务、起吊通道、安装能量、运输、实际辅助消耗、包装和纠正损失。识别供应套件已含项目，避免重复。 | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `erection_gate` | erected_roof_truss_set | 交付须每榀规定屋架就位并在已验收支承牢固连接，所需永久单杆件约束和支撑完成，检查问题关闭并签署责任移交。本节点为架设阶段；不得声明完整屋面的承载、防水、防火或热工性能。 | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `retained_temporary_stability` | temporary_stability_service | 若后续屋面水平支撑体系仍是必要条件，须保留临时约束。标记架设、交付后延续、后续稳定确认和批准拆除归还时段；每次变化须指明保管和拆除责任人。有界服务必须包含或明确链接资产生产、安装、维护使用、更换、拆除、归还运输及使用结束处理，不能消去这些负担。 | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `external_repair_boundary` | roof_truss_erection | 位置或连接纠正回到本节点，保留全部资源负担。损伤、不适用或已修改屋架持续隔离，记为退回或明确废物出口。本 PCR 不允许切割、开槽、钻孔修改屋架及结构修理。 | `sbca-installation-2023`; `sbca-bcsi-current`; `sbca-jobsite-packages` |
| `resource_and_release_boundary` | roof_truss_erection | 对起重、作业通道、临时支撑和运输，识别供应方完整覆盖及包括其他工作包的每个实际使用方和期间。供应方已含运行燃料或排放时，不再添加同一运行。直接控制设备分别采集燃料、能量及已表征直接释放；未计量不能假定为零。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：规定的预定尺寸永久木约束及支撑杆件 (`permanent_bracing`)

过程／待建立交换的方向／类型：`roof_truss_erection` / `inputs` / `product`.

纳入本架设节点安装的实际杆件和加强构件。分开套件已供应构件和额外采购；不允许现场变换屋架形状。

- 采集对象：规定的预定尺寸永久木约束及支撑杆件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料规格记录可归属本套件的实际工作包总收货或领用量，包括纠正供应；测量这些收货领用的材料净质量，分别记录已安装、可用退回和留存库存，不得再次扣减已单独建模退回。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：`sbca-installation-2023`; `sbca-bcsi-current`

范围证据需求：须工程师批准的实际支撑明细、件数及实测或供应商质量；不提供通用支撑间距、木材密度、损失比例或承载能力。

#### 采集要求：规定的支承连接件及安装紧固件 (`bearing_connectors`)

过程／待建立交换的方向／类型：`roof_truss_erection` / `inputs` / `product`.

记录实际吊件、支承连接、支撑固定件和紧固件，但排除工厂产品或其他服务投入已含项目。按实际采购安装记录拆分材料和防腐保护身份。

- 采集对象：规定的支承连接件及安装紧固件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料类型记录可归属本套件的连接件紧固件实际工作包总收货或领用量，包括纠正供应；保留件数及材料净质量，分别记录已安装、可用退回和留存库存状态，不重复净扣减。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：`sbca-installation-2023`

范围证据需求：须实际批准的连接明细及单件质量证据；不能采用标准钉数、锚固能力或通用钢材替代。

#### 采集要求：有界临时屋架约束及支撑服务 (`temporary_stability_service`)

过程／待建立交换的方向／类型：`roof_truss_erection` / `inputs` / `product`.

本条件性集合卡识别实际临时约束支撑系统及服务供应方或所有人，按实际系统拆分。覆盖资本材料资产及安装、保留、维护、更换、批准拆除、归还或使用结束负担；h 单位仅记录声明服务区间。

- 采集对象：有界临时屋架约束及支撑服务
- 流属性/单位：时长 / h
- 数量规则：记录架设期间和单独标记的保留支撑延续期间实际分配服务小时及基础系统数量资源；纳入关联的未来拆除责任，披露未解决供应方覆盖。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_services`
- 来源：`sbca-installation-2023`; `sbca-bcsi-current`

范围证据需求：须实际批准的临时支撑方案、杆件资产清单、日期、全部使用方、所有权及拆除归还记录；不能推断默认时长或零资产负担。

#### 采集要求：有界起重、起吊及作业通道设备服务 (`lifting_access_service`)

过程／待建立交换的方向／类型：`roof_truss_erection` / `inputs` / `product`.

识别实际服务架设的起重、吊具、提升和作业通道系统。每个供应方须披露进场、设备生产维护、运行和退场覆盖；仅在服务未含时单列直接运行投入。

- 采集对象：有界起重、起吊及作业通道设备服务
- 流属性/单位：时长 / h
- 数量规则：记录实际服务特定运行待机小时及分配的进退场事件，保留所有其他使用工作和供应方清单依据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_services`
- 来源：`sbca-installation-2023`

范围证据需求：须实际起吊方案、设备服务记录、供应方覆盖和全期间使用方分母；不设每次起吊燃料或能力时间默认值。

#### 采集要求：实际构件及残余物运输服务 (`logistics`)

过程／待建立交换的方向／类型：`roof_truss_erection` / `inputs` / `product`.

记录上游或有界服务未含的屋架、附加构件、包装及残余物退回实际运输段。区分有效载荷、方式及供应方边界。

- 采集对象：实际构件及残余物运输服务
- 流属性/单位：运输 / t*km
- 数量规则：按运输段记录实际货物质量和载货距离，适用时覆盖分配的空返或进场；排除上游供应方数据集已含运输。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_logistics`

范围证据需求：须实际载荷、路线、距离及车辆服务记录；未知场址不能采用典型距离或载荷系数。

#### 采集要求：直接控制架设设备实际供给燃料 (`direct_fuel`)

过程／待建立交换的方向／类型：`roof_truss_erection` / `inputs` / `product`.


本节点真实上游燃料供应，尚未扣除可用向外退出量。按 fuel_supply_fate 保留未退回废物/损失的供应负荷，并单独确定燃烧活动。保留真实燃料牌号、设备工况、供应商覆盖、密度/状态和计量不确定性。

- 采集对象：直接控制架设设备实际供给燃料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：真实上游供应燃料质量 G_fuel 仅除以声明参考单位下独立实测的正值验收批量 D_fuel 一次；保留各互斥燃料去向，按第8节另行确定实际燃烧 B_fuel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

范围证据需求：须实际设备、燃料规格、消耗量及供应方排除项；不能从起吊需求推断身份、密度或消耗。

#### 采集要求：实际辅助安装消耗品 (`ancillary_materials`)

过程／待建立交换的方向／类型：`roof_truss_erection` / `inputs` / `product`.

条件性集合卡纳入实际消耗且可归属、供应方投入未含的附加材料，例如设备润滑剂。不预设涂层、胶黏剂、屋架修理化学品或耗水路线。

- 采集对象：实际辅助安装消耗品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按物质产品身份及声明用途记录实际消耗净质量，区分退回库存和废物；如实际有用水，依据实际记录添加具有其属性单位的投入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`

范围证据需求：须实际采购、使用、库存及材料身份记录；实际工作决定零个、一个或多个交换，不能采用通用化学因子。

#### 采集要求：实际进场运输包装 (`transport_packaging`)

过程／待建立交换的方向／类型：`roof_truss_erection` / `inputs` / `product`.

识别供应节点的实际包膜、绑带、垫材和可复用包装。仅对单独供应或上游产品数据集未覆盖部分建立额外负担投入。供应商已含包装仍须物理保管出口记录，不重复上游材料生产负担。可复用临时支撑资产留在其服务内。

- 采集对象：实际进场运输包装
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料及覆盖记录实际进场包装质量；仅单独供应或上游未覆盖包装成为附加负担投入；全部包装保留于保管台账，核对库存、真实退回和废物而不重复计数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residuals`

范围证据需求：须供应商包装声明、现场件数称重和实际保管责任；不设通用包装强度或退回率。

#### 采集要求：可用安装材料及包装退回 (`reusable_returns`)

过程／待建立交换的方向／类型：`roof_truss_erection` / `outputs` / `product`.

条件性产品输出集合卡用于真实未使用连接件支撑和可复用包装，去往明确供应商或仓库。按材料去向分开；现场留存库存是台账状态而非虚构出口。缺陷屋架不放在此卡。

- 采集对象：可用安装材料及包装退回
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按身份、接收保管方及转移 ID 记录实际发运可用退回质量，核对总供应和留存库存，不重复净扣减。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residuals`

范围证据需求：须实际退回接收、保管及质量记录；不假定可复用比例或避免生产信用。

#### 采集要求：隔离后退回处置的屋架 (`rejected_truss_returns`)

过程／待建立交换的方向／类型：`roof_truss_erection` / `outputs` / `product`.

仅在接收制造商或其他明确保管方按产品接收实际屋架以进一步使用或批准处置时，启用此条件性产品输出卡。包含缺陷状态及转移记录；属于废物的屋架使用废物卡。

- 采集对象：隔离后退回处置的屋架
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按屋架 ID 记录实际退回件数、处置、接收方及匹配回执；这些构件不得进入验收套件计数或再次记作废物。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residuals`
- 来源：`sbca-installation-2023`

范围证据需求：实际损伤检查、制造商工程师处置及退回记录决定数量及产品废物分类；不设拒收比例。

#### 采集要求：已表征架设及包装废物 (`erection_waste`)

过程／待建立交换的方向／类型：`roof_truss_erection` / `outputs` / `waste`.

条件性废物输出集合卡用于实际丢弃连接件、支撑、损坏屋架及包装；按材料、危险状态及接收处理分开。保留失败尝试和纠正负担。本路线不假定屋架切割锯屑。

- 采集对象：已表征架设及包装废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料状态及去向记录实际称量或可追溯记录的废物质量及转移 ID；捕集残余物与释放及可用退回分开。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residuals`

范围证据需求：须实际废物票据、分类及处理证据；不规定通用安装损失或回收得率。

#### 采集要求：已表征的架设直接环境释放 (`direct_releases`)

过程／待建立交换的方向／类型：`roof_truss_erection` / `outputs` / `elementary`.

条件性基本流输出集合卡用于实际直接运行设备燃烧物种、实测安装颗粒或其他释放。选定每个具体流前，先明确物质、接收介质及颗粒类别计量基础；不重复供应方已含释放。

- 采集对象：已表征的架设直接环境释放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用实际测量或依据记录活动及适用来源特定因子可靠计算的物质特定质量，记录捕集控制及接收环境；未知释放仍为数据缺口。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据需求：须实际设备、燃料、排放因子或采样证据和接收介质；不编造通用 VOC、颗粒物或尾气数量。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `roof_truss_erection` | 屋架就位、锚固与支撑完备的架设阶段交付 | required | 在已验收支承首次架设实际指定工厂木屋架套件 | 整合成品屋架、支承连接件及永久支撑；安装保留临时稳定措施；负责架设纠正及处置出口 | 1 item 验收完整架设阶段套件 |

一个节点负责接收、搬运、依次起吊就位、固定支撑、检查及现场位置固定纠正。这些工序产生一个独立交付服务，不创建人为中间产品。现场不制造屋架。疑似缺陷构件经 `rejected_truss_returns` 或 `erection_waste` 离开；实际未用材料和包装经 `reusable_returns` 离开。临时资产归还若已由服务覆盖，仍留在其服务边界内。


### 过程：屋架就位、锚固与支撑完备的架设阶段交付 (`roof_truss_erection`)

#### 输入

##### 产品流

###### 供应节点的工厂齿板连接木屋架 (`roof_trusses`)

记录为本套件交付的每榀成品屋架设计 ID，包括更换件。工厂齿板和木材属于该成品投入，不得再作为原材料添加。

- 选定流：供应节点的工厂齿板连接木屋架
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按设计 ID 记录实际交付屋架数量，核对已安装、退回、丢弃及留存库存状态；所有可归属更换供应仍须包含。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：`sbca-installation-2023`

范围证据需求：须实际套件明细、发运接收和更换记录；不设通用屋架数量、工厂成品率或每榀质量范围。

###### 架设设备实际供电 (`installation_energy`)

实际使用且供应方服务未含时，记录直接控制的紧固钻孔工具、压缩机、充电及其他安装用电。排除屋架投入已含的工厂用电。

- 选定流：架设设备实际供电
- 流属性/单位：能量 / kWh
- 数量规则：按供应、设备和期间记录计量或可追溯分配的实际电量，包括纠正及共享压缩机充电。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

范围证据需求：须实际电表、充电、压缩机记录和共享分配；未知电网、压缩效率或每榀能耗不能构成数值范围。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 支撑完备的木屋架整套构件架设阶段服务 (`erected_roof_truss_set`)

唯一参考输出为在合格支撑完备架设阶段节点验收的实际完整指定套件。后续屋面水平支撑体系依赖、保留支撑及责任转移仍属于该服务身份声明。

- 选定流：支撑完备的木屋架整套构件架设阶段服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`sbca-installation-2023`

范围证据需求：精确的 1 item 定义完整验收套件，不是成品率先验。须实际套件完整性和检查证据，不同几何或构件包不自动等价。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `single_accepted_service` | roof_truss_erection | 仅有一个预期验收架设服务。不得把既有支承或后续屋面覆盖当作联产品分配。拒收屋架、废物和退回不是验收架设输出；保留所有可归属失败尝试及更换负担。 |  |
| `local_corrections_and_exits` | roof_truss_erection | 现场重新就位或固定在本节点内循环。每次纠正链接原始事件，保留额外材料、电力和设备。隔离链接实际接收方状态的产品退回或废物出口。留存库存单独核对；总投入、库存和退回不得重复净扣减。不授予默认回收或生物碳信用。 | `sbca-installation-2023` |
| `shared_resource_attribution` | temporary_stability_service; lifting_access_service; logistics; installation_energy; direct_fuel | 识别资产服务 ID、roof_truss_erection 及每个其他使用工作包或报告期间。优先单独计量活动和可直接归属运输；对不可分共同负担，按适合实际资源的有记录因果驱动量分配，保留完整使用方分母、待机进场处理及敏感性。记录未选替代方式及清单覆盖；有其他使用方时，不能只除以本 PCR 输出。 |  |
| `support_phase_attribution` | temporary_stability_service | 标记 P1 架设至签署节点、P2 等待另有责任人的屋面水平支撑体系稳定节点期间保留支撑、P3 批准拆除归还及使用结束。每个资产、更换、维护、运输及拆除事件链接实际阶段和使用方。生产及终止负担在有记录服务周期内仅分配一次；阶段份额及接收数据集责任须与整周期核对。供应方所有权不消除负担。缺失终止责任人或服务覆盖阻止定稿。 | `sbca-bcsi-current` |
| `provider_and_direct_operations` | lifting_access_service; temporary_stability_service; logistics; installation_energy; direct_fuel; direct_releases | 每个实际供应方边界选择含完整负担服务或底层拆分运行清单。明确哪些燃料、电力、资产和释放已含，哪些需另列交换。仅记录服务时长不足。服务已含材料归还不得再次列独立退回输出。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_components` | `roof_truss_erection` | 构件接收、使用、更换和库存 | 材料台账 | set_id; truss/design_id; supplier_gate; kit_coverage; material/specification; piece_count; net_mass; moisture_basis; receipts; replacement; installed; returned; closing_stock; period; event_id | 核对供应明细和交付票据、安装件数及用料清单、校准称量或实际单件质量记录；区分树种、等级、处理、涂层和材料类型。先将收货、使用和库存归属本套件及纠正事件，再归一化至验收完整套件。 | item; kg | 每次接收、领用、纠正和库存关闭 | P1 架设及实际更换事件 | 实际场址、套件和供应商 | per reference flow | 可追溯明细、称量校准、收货、库存核对及批准连接支撑文件；不使用通用密度。 |
| `cp_services` | `roof_truss_erection` | 临时稳定、起吊及作业通道 | 服务及资产台账 | set_id; asset/provider_id; approved_plan; component_inventory; coverage; all_consumers; P1/P2/P3; start/end; hours; operating/standby; mobilization; maintenance; replacement; custody; removal_owner; removal/return_event; driver; total_denominator; allocation_share | 核对起重通道日志、批准的临时支撑记录及供应方清单覆盖。记录全部使用方阶段、实际期间特定因果驱动量和完整分母，包括后续屋面工作。获取生产、使用、拆除、运输及使用结束覆盖或明确关联清单；未知未来事件仍为披露责任，阻止完成工作包。 | h; 底层材料、能量和服务单位 | 每个服务期间、保管移交和终止事件 | P1 架设、P2 保留、P3 批准拆除归还 | 实际场址及每个共享使用方供应商 | per reference flow | 方案验收、供应方原始清单、完整使用方分母及阶段台账；份额合计为有界周期，仅在后续稳定有记录时批准拆除。 |
| `cp_logistics` | `roof_truss_erection` | 构件、残余物和退回运输 | 货运台账 | set_id; transfer_id; material; net_payload; origin/destination; mode; vehicle/provider; distance; empty_return; included_upstream; shared_consumers; period | 逐段采集实际称量、发运及路线记录。计算实际载荷距离活动，以完整载荷使用方数据分配不可分共享运输，核对供应方上游覆盖后归一化至验收套件。 | t*km | 每个物理运输段 | P1 及可归属 P2/P3 运输段 | 实际来源、现场及接收方路线 | per reference flow | 载荷路线证据、分配记录、匹配转移 ID 和无重复运输的覆盖。 |
| `cp_resources` | `roof_truss_erection` | 直接电力及燃料 | 电表和燃料台账 | set_id; equipment; provider_coverage; supply/fuel_identity; opening_stock; delivered; closing_stock; meter_start/end; charging; operating_period; all_consumers; allocation_driver; factor/unit; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | 使用实际电表充电及消耗燃料库存核对。区分燃料和电力，包含压缩机工具及纠正事件；按实测消耗或完整分母下有记录的因果使用量分配共享运行，记录实际换算因子。 按 fuel_supply_fate 分列供应与燃烧；采集各互斥去向、真实分母及单位，保留未退回废物/损失的供应负荷，披露未知去向。 | kWh; kg; 原始计量单位 | 每个计量加油期间及库存关闭 | P1 及任何直接负责的 P2/P3 运行 | 实际现场设备和供应 | per reference flow | 电表校准、收据、库存、设备日志、换算证据，以及供应方投入未含直接运行的确认。 |
| `cp_residuals` | `roof_truss_erection` | 包装、可用退回、拒收屋架、废物和库存 | 材料处置台账 | set_id; event_id; transfer_id; material/truss_id; count; net_mass; opening/closing_stock; received; installed; product/waste_status; defect; manufacturer_disposition; receiver; route; capture; phase | 按材料状态跟踪进场包装及残余物。核对可用退回发运和接收保管；拒收屋架隔离至书面处置；丢弃物采用废物票据。分开留存库存和服务内部资产归还，总供应及库存退回调整只做一次。 | kg; item | 每次接收、拒收、退回、废物转移及库存关闭 | P1 及链接 P2/P3 的可归属延续拆除残余物 | 实际场址、供应商和指定接收方 | per reference flow | 称量件数、匹配接收证据、状态缺陷决定、废物处理和材料闭合；不假定回收信用。 |
| `cp_acceptance` | `roof_truss_erection` | 完整验收架设阶段套件 | 有记录验收记录 | set_id; truss_ids/count; span/pitch/spacing/layout; bearing_acceptance; design/placement_revision; instruction_edition; approved_lift/temporary/permanent_plans; connection/brace_completion; temporary_support_list; later_stability_dependency; P1/P2/P3; custody/removal_owner; inspection; defect_closure; accepted_complete_set_count | 把实际已安装屋架 ID、支承连接和永久杆件支撑与批准文件比较。检查关闭缺陷，记录保留临时稳定和下游责任，取得签署的架设阶段交付；只计完整合格套件。参考仍为一套指定套件，不是单榀或面积。 | item | 每套完整套件签署节点及保留支撑责任每次变化 | P1 签署节点，明确链接 P2/P3 责任 | 实际场址的指定套件 | per reference flow | 适用的设计者、安装者和接收者签署文件、检查关闭证据；不完整或不安全套件不能验收。 |
| `cp_releases` | `roof_truss_erection` | 已表征直接释放 | 测量或活动因子记录 | set_id; equipment/source; provider_coverage; substance; medium; particle_size/basis; activity; factor/source/date; control/capture; measurement; uncertainty; period; allocation | 对实际直接控制运行，取得校准采样或适用于实测活动的合理来源特定因子。分别记录物质、环境、归属阶段及使用方；区分捕集废物和供应方已含排放，记录不确定性或未测缺口。 | kg | 每次测量或设备活动期间 | 实际直接 P1 及可归属 P2/P3 运行 | 实际场址接收环境 | per reference flow | 测量质量证据或包含技术、燃料、控制和不确定性的适用因子；通用污染物名称不能选择具体身份。 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_complete_set` | 所有清单行 | 汇总指定完整工作包的实际可归属材料、资源、残余物和服务数量；一个实测作业期覆盖多套验收套件时，保留每套配置，以实际记录先分配再表达为每参考流数量。不得用单榀计数另建参考产品。 | 实际记录；验收完整套件台账；分配证据 | 每参考流清单数量 |  |
| `component_closure` | roof_trusses; permanent_bracing; bearing_connectors; transport_packaging; reusable_returns; rejected_truss_returns; erection_waste | 按实际材料或屋架 ID 核对期初库存加收货与已安装消耗、真实产品退回、已表征废物及期末库存。明确未解决平衡缺口及纠正供应；不得把输出服务件数作为材料质量。 | cp_components; cp_residuals | 材料特定件数质量核对 |  |
| `shared_cycle_closure` | temporary_stability_service; lifting_access_service; logistics; installation_energy; direct_fuel | 每个事件资源以有证据分配份额作用于完整覆盖清单，而非只作用于计费小时。核对全部使用方及 P1/P2/P3 份额至完整资源服务边界，每套验收归属只保留一次。 | cp_services; cp_logistics; cp_resources; 全使用方及阶段台账 | 完整分配的底层负担及服务活动 |  |
| `release_calculation` | direct_releases | 使用实测释放质量，或实测活动与来源特定有记录因子，保留单位换算、捕集假设和不确定性。在构建的数据集中列实际外部因子参考；不在本 PCR 编造因子。 | cp_releases; 实际活动因子或测量 | 物质及接收环境特定释放质量 |  |
| fuel_supply_fate | direct_fuel | 对每种真实燃料身份及互不重叠的节点/事件期间，G_fuel = 期初可用燃料 + 外部接收量 - 期末可用燃料库存（含设备油箱）；扣除容器皮重，边界内领用/转移不再作新增接收。G_fuel 为真实可用向外退回 U_fuel、向外转移 X_fuel、收集的未燃燃料 W_fuel 和未收集燃料 P_fuel 扣除之前的物理产品输入总量。各去向互斥并分别解析实际产品、废物流或物质/介质身份；泄漏事件总量仅作核查，不重复扣除。W_fuel 和 P_fuel 指所含燃料质量，不是受污染吸附物或废水的总质量。仅在完整且有证据的去向台账下，B_fuel = G_fuel - U_fuel - X_fuel - W_fuel - P_fuel；未知去向保留缺口，不假定已燃烧。只有有独立依据的 B_fuel 驱动燃烧排放。所有未退回的未燃燃料、废物和损失均保留上游供应负荷；真实可用退出物仅可携带有记录的原始未用材料负荷，不再次扣减净输入或给予避免生产信用。期初/期末库存负荷只结转一次。各物理量仅除以 D_fuel 一次；D_fuel 为本 PCR 第3-4节规定的参考单位下独立实测的正值验收批量（验收体积、面积、轴向长度、钢材质量或完整验收计数），不是燃料量或中间产出。现有 actual_consumed/燃料消耗字段是燃烧活动记录，不能替代上游输入 G_fuel。供应商已含燃料和排放只设一个责任方，不重复加入重叠的前景供应或燃烧。 | opening fuel; external receipts; closing intact fuel; U_fuel; X_fuel; W_fuel; P_fuel; D_fuel; actual node fuel protocol and fate evidence | G_fuel product input; independently supported B_fuel; separately resolved exclusive outlets |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `actual_design_and_gate` | 参考产品 | 保留实际套件身份、设计布置版本、已验收接口、文件适用性及签署节点。不得在验收输出中隐藏未解决缺陷。 | cp_acceptance; 实际项目制造商工程师记录 |
| `supply_and_quantity_quality` | 全部构件和残余物卡 | 保留材料身份状态、实际总量库存退回量、净质量件数证据、含水率基础和不确定性。候选数值范围须独立审查的可比证据；某批最大值不能验证该批自身。 | cp_components; cp_residuals |
| `phase_and_service_completeness` | temporary_stability_service; lifting_access_service | 声明 P1/P2/P3 日期责任人及完整服务覆盖；在全部使用方之间核对资本材料、维护使用、更换和终止一次。未知后续拆除是缺口而非零。 | cp_services; 供应方清单；责任移交 |
| `resource_release_quality` | installation_energy; direct_fuel; direct_releases; logistics | 使用实际供应、燃料、技术方式和接收环境；保留电表、库存、距离证据和适用因子。披露未测资源释放及供应方排除项。 | cp_resources; cp_releases; cp_logistics |
| `identity_and_range_gaps` | 全部流卡 | 最终 TIDAS 发布前解决每个具体交换身份、属性单位支持和实际证据范围需求。前景证据决定条件性集合卡为零个、一个或多个交换；无证据不代表零。 | 实际查询支持验证及前景采集工作包 |


## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `reference_completeness` | erected_roof_truss_set | 要求 1 item、真实输出链接及双语相同完整套件含义。每榀屋架须匹配批准套件及签署架设节点；验收输出排除未解决拒收构件。 | `un-cpc3-2025`; `sbca-installation-2023` |
| `structural_handover` | roof_truss_erection | 核验实际支承验收、就位连接记录、永久杆件约束支撑、保留临时稳定、施工阶段限制、检查关闭及明确责任移交；不推断完整水平支撑体系或屋面性能。 | `sbca-installation-2023`; `sbca-bcsi-current` |
| `reject_path_and_balance` | 全部材料和残余物卡 | 每个材料状态及缺陷事件核对至已安装输出、库存、真实可用退回、拒收产品退回或废物。要求接收方状态及转移 ID；保留纠正负担，防止重复扣减或验收拒收套件。 |  |
| `shared_phase_coverage` | temporary_stability_service; lifting_access_service; logistics; installation_energy; direct_fuel; direct_releases | 要求完整全使用方及 P1/P2/P3 台账、实际因果分配和完整服务覆盖。核验更换终止责任人、批准支撑拆除节点及匹配的接收数据集责任；未解决阶段、资产或拆除覆盖阻止完成。供应方已含及直接运行仅计一次。 |  |
| `actual_identity_quantity` | 所有清单行 | 要求实际身份属性单位兼容及可追溯同节点采集协议。每个范围证据需求须由实际证据关闭或披露未解决；固定参考数量是定义而非成品率范围。逐一检查实际条件材料、废物和物质，拒绝编造默认燃料、密度、损失、紧固件、排放或碳信用值。 |  |
| validate_fuel_supply_fate | direct_fuel | 按实际燃料协议、库存和供应商覆盖核查 G_fuel、B_fuel 及各互斥去向。未退回的未燃废物/损失保留上游负荷；去向、燃料组分或正值 D_fuel 未解决时，不得宣称燃料定量清单完整。不以燃烧活动替代采购燃料，不同时扣减泄漏总量及其各组成去向。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景现场架设数据包，含 process 和 lifecyclemodel 投影，以及实际构件资源背景链接 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在合格支撑完备架设阶段节点，建模已声明匹配木屋架套件首次架设，并披露后续稳定责任 |
| excluded_use | 通用屋面面积、一榀出厂屋架、完整建筑屋面结构或防水性能、楼面金属桁架、迁移、制造及结构修理 |
| required_metadata | 全部参考限定信息；节点套件 ID；供应套件和供应方边界；构件资源地域日期；P1/P2/P3 责任人事件；全使用方分配；接收库存废物路径；实际来源版本及交换身份 |
| required_quality_disclosure | 身份支持缺口；未解决范围证据；测量及不确定性；排除项；共享资本服务终止覆盖；实际后续屋面水平支撑体系依赖及支撑拆除责任 |
| update_trigger | 设计套件或支承接口变化；现行说明适用性变化；屋架支撑连接规格；损伤修改构件；服务供应方分配或阶段责任人；资源因子身份；稳定节点或拆除方案修订 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | 联合国统计司，CPC 3.0 解释性说明，2025 年 6 月 30 日，印刷第 291 页，54522 及相邻 54530。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 分类范围、较窄屋架路线及屋面覆盖区分 |
| `sbca-installation-2023` | extension_guidance | 美国结构建筑构件协会，BCSI Guides Truss Installation Process, Pt 2，2023 年 8 月 8 日。https://www.sbcacomponents.com/media/bcsi-guides-truss-installation-process-pt-2 | 定性的预审、支承就位锚固、临时稳定、永久杆件支撑及检查工序；未采用通用数值设计要求 |
| `sbca-bcsi-current` | extension_guidance | 美国结构建筑构件协会，Building Component Safety Information Guide 介绍页，修订 BCSI-2025，2026 年 10 月 15 日访问。https://www.sbcacomponents.com/bcsi | 现行版本背景及临时永久约束支撑区分；不声称读过完整付费指南 |
| `sbca-jobsite-packages` | extension_guidance | 美国结构建筑构件协会，Jobsite Packages，2026 年 10 月 15 日访问。https://www.sbcacomponents.com/jobsite-packages | 项目特定安装安全资料包及屋架设计项目文件要求；实际资料包适用性仍须前景证据 |
