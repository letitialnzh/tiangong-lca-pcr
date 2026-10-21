---
pcr_id: pcr.constructions-and-construction-services.construction-services.supported-modular-steel-facade-scaffolding-cycle-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 支承式模块化钢立面脚手架完整周期服务


## 1. 范围与适用性

本 PCR 适用于固定式、刚性支承、模块化镀锌钢立面通行脚手架的一个实际配置周期。服务自实际套件发出开始，仅在搭设、检查交接、实际可用期闭合、拆除、经评估归还维修废弃及责任场地恢复核对完成后结束。高度、荷载、作业层和拉结布置及日期共同限定服务，单独面积不足以表征。

排除不含搭设拆除的租赁、悬吊式、移动式及爬升式脚手架、模板支撑、永久通行结构及使用者在平台开展的工种作业。实质配置变更须另开队列并复审范围。责任内符合厂家要求的普通清洁及有证据的小型保养纳入；结构焊修或独立负责的构件维修技术须进一步审查。PERI 和 OSHA 证据支持这些责任及区分，不提供通用投入率；CPC 2.1 解释仅为历史边界背景。


## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.supported-modular-steel-facade-scaffolding-cycle-services |
| classification_refs | CPC 3.0 54570 Scaffolding services; narrower |
| covered_products | 稳定配置支承式模块化镀锌钢立面通行脚手架完整周期 |
| excluded_products | 单纯租赁；悬吊、移动、爬升系统；模板支撑；永久通行；使用者工种；未经审查结构维修 |
| representative_product | 实际支承式模块化镀锌钢立面脚手架套件在其声明验收立面上的完整周期 |
| production_route | 套件发出及责任运输 → 搭设连接拉结 → 检查交接 → 实际可用及不可用期 → 拆除 → 清洁评估归还维修废弃及责任恢复 |
| market_state | 实际配置、日期及保管去向闭合的验收完整脚手架周期服务 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 支承式模块化镀锌钢立面脚手架完整周期服务 |
| How much | 1 m2 |
| How well | 声明高度、荷载等级、平台作业层和拉结设计、基底及检查关口下的唯一验收立面 |
| How long or cycle | 一个实际稳定配置周期：注明日期的发出、检查交接、全部可用及不可用区间、拆除及经评估归还维修废弃恢复闭合 |
| reference_flow_link | `reference_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 支承式模块化镀锌钢立面脚手架完整周期服务 |
| 参考流属性 | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| 参考单位组 | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| 参考单位 | m2 |
| 必需限定信息 | 配置及套件编号；实测唯一立面 A 及多边形；高度；荷载等级；作业层和架体层布置；拉结锚固及基底放行；交接日期；实际可用及不可用区间及持续期；拆除及归还维修废弃闭合；责任恢复；供应方和资产覆盖 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| unique_elevation | 参考产品 | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 采用 cp_scaffold_cycle_material 对同一稳定配置及闭合周期的不重叠验收立面多边形测量 A。排除未服务空缺、重叠、平面投影面积及重复作业层面积；A 须为独立测量的正值。 |
| concrete_numerators | 所有清单行 | Mass / Area / Energy / Duration | 原生单位换算至 kg、m2、kWh 或 h | 分别保留各具体 SKU、当前状态、物质及接收方；需要时使用可追溯的同状态数量至质量、体积至质量或其他换算，每项归属周期分子仅除以 A 一次；混合总量只用于 QA，不是交换身份。 |
| time_qualifier | 参考产品；资产服务 | Duration | h | 实际日期、可用及不可用区间、高度、荷载及作业层和拉结布置是必需限定信息；不得以面积乘时间替代面积参考。绑定小时交换前须核实独立时间支持身份，不设默认日或班次。 |
| energy_integrity | electricity | Energy | kWh | 保留实测电能及供电边界，独立核实兼容流属性；不得以净热值替代 Energy，或以设备有效功替代实测用量。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界


### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已放行既有建筑及基底连接界面、带状态保管记录的实际发出套件、实际设计配置和服务责任 |
| starting_condition_role | existing_asset_context |
| product_classification_scope | 支承式模块化镀锌钢立面脚手架完整周期；CPC 3.0 54570 内较窄背景，不代表整叶 |
| recursive_input_rule | 另购同类别服务作为具有实际关口及覆盖范围的明确上游服务；不得在本周期内隐式展开或重复，真正独立责任或交接须复审。 |
| upstream_dataset_requirement | 使用与具体身份、状态、地域、技术、供应方覆盖及实际使用匹配的兼容材料服务和可复用资产数据集；覆盖或自有资产寿命能力缺失属于缺口。 |
| disclosure | 披露起始资产及基底状态、责任、全部实际阶段及使用者、外部交接、几何队列、实际日期、遗漏或未决数量及分母验收 |


### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| cycle_responsibility | scaffold_cycle | 保持一个事件关联责任节点，覆盖套件发出及责任运输、搭设连接拉结和检查、交接、全部实际可用及不可用区间、拆除、清洁评估、归还维修废弃决定及责任场地恢复。已搭设状态是此节点内的观测关口，不是另一产品输出。 | peri-instructions; cycle-normalization-method |
| components_and_joining | scaffold_cycle | 按实际套件编号及状态记录立杆、水平杆、平台、斜撑、通行设施、护栏、拉结和底部支承；观测系统兼容连接及实际支承和锚固设计。区分可复用套件与消耗的替换件、垫板、锚固件及围护，不得从面积推定构件密度或劳动率。 | peri-instructions; osha-scaffold |
| existing_interface | scaffold_cycle | 声明已放行基底及建筑连接界面和发出套件状态。既有建筑、基底和存量是背景条件及资产观测；新消耗连接件和责任恢复仍为实际归属负荷。真正独立的材料状态或维修交接须明确转移并复审边界。 | peri-instructions; cycle-normalization-method |
| maintenance_limit | scaffold_cycle | 纳入合同责任内实际符合厂家要求的普通清洁、润滑及有证据的小型维护；供应方覆盖维修只计一次。独立负责的结构或构件焊修以及不同维修技术须复审范围。使用者工种生产在本服务外，但其有独立证据的沉积物须为清洁闭合记录。 | peri-instructions; compatible-pool-ledger-method |
| cohort_and_fates | scaffold_cycle | 以带日期事件保留实际检查失败、不可用架体、几何改变、损坏或隔离构件、磨损、批准维护、归还和废弃状态。几何变化须另开队列并复审；构件去向不明阻止完整周期验收，丢失或被盗不能证明废物。 | peri-instructions; compatible-pool-ledger-method |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：可重复使用脚手架套件占用服务 (`kit_occupation_service`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `inputs` / `product`.

记录实际套件资产及覆盖的占用区间，包括应归属的不可用时间。发出及归还套件的实物质量是存量观测，不是新购钢材；同一套件不能同时作为辅助租用设备。范围证据需求：须取得套件编号、发出和归还及可用状态日期、全部使用者、供应方覆盖范围或有证据的自有资产能力和使用情况，才能确定小时数；不得预设班次或周转次数。

- 采集对象：可重复使用脚手架套件占用服务

- 流属性/单位：Duration / h

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_asset`

- 来源：`cycle-normalization-method`; `asset-attribution-method`

#### 采集要求：消耗的垫板及支承产品 (`consumed_sole_boards`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `inputs` / `product`.

仅纳入实际基础布置中消耗且不返回的支承产品；可复用垫板进入套件或辅助资产台账。范围证据需求：须有基底调查、支承布置、实际垫板 SKU、当前状态质量和归还政策；支承材料须与自身投入和去向记录核对，不得套用通用立面面积用量。

- 采集对象：消耗的垫板及支承产品

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：消耗的锚固件、拉结件及连接产品 (`consumed_anchors_ties`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `inputs` / `product`.

将每种消耗的连接件 SKU 与可复用拉结件及既有建筑分开。范围证据需求：须有已放行基底、项目锚固及拉结清单和逐件质量换算；厂家示例间距不是通用数量或单位面积质量。核对实际安装、拆除、留置连接件及外运去向。

- 采集对象：消耗的锚固件、拉结件及连接产品

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：消耗的防护布及防护网 (`protective_sheet_net_products`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `inputs` / `product`.

仅按本配置周期实际消耗程度记录具体防护布或网产品；可复用围护进入资产台账。范围证据需求：须有实际围护几何、SKU 面密度、部署及退役证据；单凭立面面积不能确定用量，须区分破损、归还及留存状态。

- 采集对象：消耗的防护布及防护网

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：普通清洁维护耗材 (`cleaning_maintenance_products`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `inputs` / `product`.

在符合厂家要求的普通保养中，按配方及 SKU 区分实际清洁剂、润滑剂、磨料及擦拭布。水、燃料、电力及包装另有角色；此行不授权结构焊接或未经研究的构件维修路线。范围证据需求：须有观测污染、维护方法、配方和实测领用及残余；清洁说明未提供消耗率。

- 采集对象：普通清洁维护耗材

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：独立租用的起吊、通行及物流设备服务 (`hired_equipment_services`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `inputs` / `product`.

识别每台实际辅助设备及服务覆盖范围，排除脚手架套件本身。范围证据需求：须有供应方边界、占用及工作区间、相关阶段使用者和验收分母；劳动工时或默认班次不能证明设备服务小时，供应方已覆盖的燃料、维护和制造不得重复加入。

- 采集对象：独立租用的起吊、通行及物流设备服务

- 流属性/单位：Duration / h

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_asset`

- 来源：`cycle-normalization-method`; `asset-attribution-method`

#### 采集要求：随本周期投入接收的包装 (`packaging_received`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `inputs` / `product`.

接收时逐项识别实际包装材料和当前状态，与包装内物及可复用脚手架存量分开。范围证据需求：须有供应方包装记录、实测包装质量和拆包及归还事件；不设默认包装比例，各材料池须可追溯至归还、留存或废弃。

- 采集对象：随本周期投入接收的包装

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：直接淡水取用 (`direct_freshwater_abstraction`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `inputs` / `elementary`.

仅在本周期直接取水时，记录来自指定环境介质的实际淡水取用。范围证据需求：须有水源身份、独立计量取水量及湿作业需求；同一水量不得再作为供应水记录，取水及排水各自须明确来源和接收区室。

- 采集对象：直接淡水取用

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_release`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：可用材料归还及转出 (`usable_material_exits`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `outputs` / `product`.

仅对有独立可用量、当前状态及实际接收方证据的具体材料记录产品退出。使用后可复用套件回库属于资产状态事件，不是完好未用耗材退回。范围证据需求：须有匹配投入材料池及外运称量记录，并厘清磨损和污染；异质归还总量仅用于 QA，不产生避免生产信用。

- 采集对象：可用材料归还及转出

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：外运的可归还包装 (`returnable_packaging_exit`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `outputs` / `product`.

按实测当前状态记录离开保管边界的每种可复用包装产品。范围证据需求：须有匹配接收包装、保管及外运记录和实际接收方；同一包装不能同时列为废物，单凭归还不能主张避免制造。

- 采集对象：外运的可归还包装

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：有记录的废弃脚手架构件 (`discarded_kit_waste`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `outputs` / `waste`.

仅在正数量且构件身份、废弃决定、废物状态及接收方均有证据时启用。范围证据需求：须有实测当前状态废弃数量及关联发出、维修、退役台账；丢失、被盗、位置不明及未归还存量仍是明确去向缺口，不能通过相减转成此废物。

- 采集对象：有记录的废弃脚手架构件

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：废弃辅助支承及围护材料 (`support_sheet_residue_waste`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `outputs` / `waste`.

按身份、状态及接收方区分实际废弃垫板、锚固件、拉结件、防护布和网。范围证据需求：须有各自消耗性投入材料池、独立观测附着污染及废物状态质量；可复用资产、留置连接件及可用退回均是不同去向，不得将混合材料池当作一种废物流闭合。

- 采集对象：废弃辅助支承及围护材料

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：废弃包装材料 (`packaging_waste`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `outputs` / `waste`.

拆包后按材料、状态及接收方记录实际包装废物。范围证据需求：须有匹配包装接收、观测污染、实测废弃及互斥的归还、复用、留存决定；无独立证据时，内装物和外来沉积物不能放大相应清洁包装材料池。

- 采集对象：废弃包装材料

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：含油维护及清洁废物 (`oily_consumable_waste`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `outputs` / `waste`.

识别实际废物混合物和接收方，区分油液、擦拭布或吸收材料、水及污染物。范围证据需求：须有独立实测组分可用量和废物状态质量；仅用油投入不能约束湿含油布质量，同一废清洁剂或载体不得在其他固体或浆液废物退出中重复记录。

- 采集对象：含油维护及清洁废物

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：排放至空气的其他发动机物质 (`other_engine_species_air`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `outputs` / `elementary`.

分别实例化每种实际报告物质及空气区室；物种总称没有固定交换身份。范围证据需求：须有确切物种及报告基准、发动机、燃料、工况及适用因子或测量不确定性；燃料质量不是各污染物质量，避免重复计算化石 CO2 或物理粉尘。

- 采集对象：排放至空气的其他发动机物质

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_release`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：未捕集的作业颗粒物排放至空气 (`physical_particulate_air`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `outputs` / `elementary`.

仅按粒径、组分及空气区室记录责任作业中有依据的未捕集颗粒物。范围证据需求：须有实际来源材料池、产生与捕集测量或模型及颗粒基准；不得虚构粉尘比例或使用闭合差额，已捕集清洁固体仍进入相应废物接收行。

- 采集对象：未捕集的作业颗粒物排放至空气

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_release`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：挥发性化学物种排放至空气 (`volatile_species_air`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `outputs` / `elementary`.

依据实际涂层或维护配方及作业，识别排放组分与接收空气区室。范围证据需求：须有独立证实的出厂涂层或新增清洁剂及涂层、组分含量、实际施用或移除和实测或模型去向；配方产品总质量不是挥发排放质量。

- 采集对象：挥发性化学物种排放至空气

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_release`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：直接排放至水体的特定物质 (`specific_direct_water_releases`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `outputs` / `elementary`.

按物质和接收水区室记录每项实际直接排放；收集送处理的废物不是直接排放。范围证据需求：须有实际排放量、浓度或物种及介质，并区分来源水组分和新增污染物；通用排水标签或缺失水衡算均不能提供数值范围。

- 采集对象：直接排放至水体的特定物质

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_release`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

#### 采集要求：实际消耗的新脚手架替换构件 (`replacement_kit_products`)

过程／待建立交换的方向／类型：`scaffold_cycle` / `inputs` / `product`.

按每个真实 SKU、组成/状态及保管关系建立独立原子交换。本要求不是通用集合流。真实完整的采购总成可采用其经核实的整包边界，已含部件不再额外采购。

逐项识别本周期实际消耗的新替换构件 SKU 及其在构件台账中的去向，排除既有可复用构件的单纯部署。范围证据需求：须有构件清单、实测当前状态质量、磨损及批准维修和退役决定；库存短缺或未归还构件均不能证明消耗或废弃。

- 采集对象：实际消耗的新脚手架替换构件

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

## 6. 过程清单结构


### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| scaffold_cycle | 支承式模块化钢立面脚手架完整周期服务 | required | 实际完整周期及声明责任 | 单一负责的前景服务节点；阶段门控是观测 | reference_service; 1 m2 |


可重复使用套件在发出、已搭设、使用后和归还评估阶段保留各自状态。实际搭设连接拉结和拆除依据项目设计及系统兼容要求记录，不设虚构性能值。缺陷、未验收、隔离、维修或未归还状态不进入最终已验收服务；真实独立交接须复审节点。下列条件角色由实际事件判断，零、一个或多个具体交换各自有证据；不得使用总称强行绑定 UUID。


### 过程：脚手架完整周期（`scaffold_cycle`）


#### 输入


##### 产品流


###### 柴油 (`diesel_fuel`)


本节点真实上游燃料供应，尚未扣除可用向外退出量。按 fuel_supply_fate 保留未退回废物/损失的供应负荷，并单独确定燃烧活动。保留真实燃料牌号、设备工况、供应商覆盖、密度/状态和计量不确定性。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：真实上游供应燃料质量 G_fuel 仅除以声明参考单位下独立实测的正值验收批量 D_fuel 一次；保留各互斥燃料去向，按第8节另行确定实际燃烧 B_fuel。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_utility`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

- 绑定模式：`fixed`


###### 归属的电力供应 (`electricity`)

选择具体交换前须识别实际供电地域、电压和电表边界。范围证据需求：须有计量拓扑、完整区间、全部用电对象及设备工况记录。记录实测 kWh；能量单位组不能证明流属性兼容，不得将净热值改称通用 Energy。

- 选定流：归属的电力供应

- 流属性/单位：Energy / kWh

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_utility`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`


###### 供应的清洁及作业用水 (`water_supplied`)

记录跨技术系统边界供应的水，与直接取水分开。范围证据需求：须有实际湿作业、经校准取用量、循环和回流以及实测纯水组分去向；内部循环不产生重复外来用水，不得从脚手架面积推定通用需水量。

- 选定流：供应的清洁及作业用水

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_utility`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`


##### 废物流


##### 基本流


#### 输出


##### 产品流


###### 支承式模块化镀锌钢立面脚手架完整周期服务 (`reference_service`)

唯一最终服务覆盖一个稳定配置，自发出开始，经历搭设与检查交接、实际可用期闭合、拆除、经评估的构件归还或维修或废弃及责任范围内场地恢复。独立测量正值唯一验收立面面积 A，归一化输出为 A/A。未闭合周期、未决归还去向或未验收架体均不能证明该交付关口。

- 选定流：支承式模块化镀锌钢立面脚手架完整周期服务

- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2

- 数量规则：1 m2

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

- 数量范围：最终参考自归一化

  - 范围角色：`qa_guardrail`

  - 下限：1

  - 上限：1

  - 单位：m2

  - 基准：每参考流

  - 基准类型：`reference_flow`

  - 证据类型：`calculated_from_collection`

  - 来源：`cycle-normalization-method`


##### 废物流


###### 从使用后脚手架清除的干沉积物 (`removed_deposit_waste`)

将随发出套件带入或由外部使用作业积附的沉积物作为独立观测的外来物质。范围证据需求：须有这些增加量及组分、水分、清洁新增固体、移除干质量和实际废物接收方；套件发出减归还差额不是沉积物投入，沉积物须与套件消耗分开核对，并避免重复计算浆液所含固体。

- 选定流：从使用后脚手架清除的干沉积物

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`


###### 收集的废水及清洁浆液 (`collected_wastewater_slurry`)

记录送往明确处理接收方的实际收集液体废物，保留其当前固体及水组分。范围证据需求：须有来源水、化学品及夹带固体、实测捕集量和组分分析；不得将混合物质量视为纯水，亦不得将已捕集固体再次列为干废物或直接环境排放。

- 选定流：收集的废水及清洁浆液

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_material`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`


##### 基本流


###### 二氧化碳（化石源），排放至未特指空气 (`fossil_co2_air`)

根据实测排放或有记录且适用的方法以及独立化石碳消耗，记录归属燃烧的实际化石 CO2；此身份仅表示未特指空气。碳上限约束不是燃料至 CO2 的排放因子，也不主张完全氧化；须分别保留进入其他产物或污染物的碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_release`

- 来源：`cycle-normalization-method`; `carbon-oxidation-identity`

- 绑定模式：`fixed`

- 数量范围：独立燃烧化石碳的 CO2 上限约束

  - 范围角色：`qa_guardrail`

  - 下限：0

  - 上限：3.6666666666666667

  - 单位：kg CO2/kg fossil carbon burned

  - 基准：每 kg 独立测量燃烧化石碳；44/12 约束

  - 基准类型：`fuel_inventory`

  - 证据类型：`method_formula`

  - 来源：`carbon-oxidation-identity`


###### 水蒸气，排放至未特指空气 (`water_vapour_air`)

仅对责任湿作业中有独立依据的实际蒸发使用此未特指空气 H2O 身份。范围证据需求：须有独立实测可用纯水组分池及带不确定性的蒸发测量或模型；水闭合残差是数据缺口，不是水蒸气，零值亦需证据，更具体区室须有自身身份。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：本周期每个具体身份、状态及接收方的独立实测或有依据计算分子，仅除以验收 A 一次；遵循第 8 节周期分子规则

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_scaffold_cycle_release`

- 来源：`cycle-normalization-method`; `compatible-pool-ledger-method`

- 绑定模式：`fixed`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| direct_episode | scaffold_cycle | 先将直接事件归属实际配置和阶段；属于本周期的全部搭设、怠置、不可用、测试、拆除和普通返工负荷保留在分子中。重复检查或使用期间不产生额外验收面积。 | cycle-normalization-method |
| shared_consumers | scaffold_cycle | 列举套件、辅助设备及电表的全部实际使用者和相关期间，包括外部使用者。先拆分实测使用量，剩余共享负荷才按有记录的因果能力或使用基准以互斥份额分配，并披露不确定性；除以 A 前先核对供应方或电表总量。 | asset-attribution-method |
| asset_coverage | scaffold_cycle | 对每项实际资产保持套件占用与辅助租用设备互斥。供应方已含制造、燃料和维护只计一次；自有资产须有服务能力或寿命、实际使用、磨损、维修及损伤退役归属证据，否则声明缺口。不预设周转次数，不按每次部署计入全套新制造。 | asset-attribution-method |
| replacement_and_return | scaffold_cycle | 避免同一替换件制造既作为消耗产品又在未调整套件服务制造中计入。使用后套件归还须记录磨损、清洁和维修状态，不是未用投入退货；产品及废物退出保留实际接收方，归还或回收本身不自动产生替代信用。 | asset-attribution-method; compatible-pool-ledger-method |
| rejected_cycle | scaffold_cycle | 将检查失败、重复连接、清洁、隔离、批准维修和退出决定关联原套件及配置，保留实际负荷和未决去向；部分交接、变更队列或未闭合归还台账不能分配成虚构的完整服务输出。 | cycle-normalization-method; compatible-pool-ledger-method |


## 8. 前景数据采集、计算与质量规则

以下协议是紧凑且由本节点负责的事件台账。原始数量在归属或换算前保留，按第 8 节方法汇总为每参考流归一化数量。每项实际交换保留自身身份、状态及接收方分子，汇总总量仅用于核对。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_scaffold_cycle_material | scaffold_cycle | 配置几何；材料；产品及废物退出 | 按阶段索引的前景事件记录 | 事件/批次/配置编号；过程/阶段/时间；责任方；角色；实际身份/当前状态；原生数量/单位；实测同状态换算；接收方/介质；证据；不确定性 | 独立测量不重叠验收立面多边形并核对交接及闭合；逐项称量具体材料当前状态及外运量，不能直接称量时保留件数及可追溯同状态换算；独立观测外来沉积物和组分水分，识别实际接收方及阶段。 | kg; m2 | 每个事件及区间边界 | 完整发出至归还周期，包括不可用及返工 | 声明场址/配置及责任内场外清洁归还作业 | 每参考流 | 测量及验收记录；秤校准；构件/SKU 及外运文件；水分及组分证据 |
| cp_scaffold_cycle_utility | scaffold_cycle | 燃料；电力；供应水 | 按阶段索引的前景事件记录 | 事件/批次/配置编号；过程/阶段/时间；责任方；角色；实际身份/当前状态；原生数量/单位；实测同状态换算；接收方/介质；证据；不确定性; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | 在全部责任作业、怠速、测试及返工区间读取经校准燃料和公用设施计量及期初期末存量；记录供应身份及计量拓扑，周期归属前核对全部使用者和供应方已覆盖量；仅按独立证实的同状态换算转换原生单位。 按 fuel_supply_fate 分列供应与燃烧；采集各互斥去向、真实分母及单位，保留未退回废物/损失的供应负荷，披露未知去向。 | kg; kWh | 每个事件及区间边界 | 完整发出至归还周期，包括不可用及返工 | 声明场址/配置及责任内场外清洁归还作业 | 每参考流 | 计量校准及读数；供应文件；设备/阶段日志；分配核对 |
| cp_scaffold_cycle_asset | scaffold_cycle | 套件占用；独立辅助服务；资产观测 | 按阶段索引的前景事件记录 | 事件/批次/配置编号；过程/阶段/时间；责任方；角色；实际身份/当前状态；原生数量/单位；实测同状态换算；接收方/介质；证据；不确定性 | 按资产和构件编号追踪发出、交接、实际可用及不可用期、拆除及经评估归还维修退役；记录全部使用者、供应方边界及实际占用使用区间；自有归属须采集实际寿命或能力、使用、磨损和损伤证据，不得假定周期次数。 | h; kg observations | 每个事件及区间边界 | 完整发出至归还周期，包括不可用及返工 | 声明场址/配置及责任内场外清洁归还作业 | 每参考流 | 保管及状态台账；带日期使用者和可用状态日志；供应方合同；有证据的自有资产归属 |
| cp_scaffold_cycle_release | scaffold_cycle | 取水；物质/区室排放 | 按阶段索引的前景事件记录 | 事件/批次/配置编号；过程/阶段/时间；责任方；角色；实际身份/当前状态；原生数量/单位；实测同状态换算；接收方/介质；证据；不确定性 | 按来源、物质及区室测量实际取水和排放；仅在观测活动、组分和不确定性支持下使用有记录且适用的排放或蒸发模型；保留原始浓度、流量及捕集记录，区分直接排水与处理废物、化石碳与水池。 | kg | 每个事件及区间边界 | 完整发出至归还周期，包括不可用及返工 | 声明场址/配置及责任内场外清洁归还作业 | 每参考流 | 采样及分析 QA；计量及模型依据；活动及组分记录；捕集和接收方证据 |


### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_area | reference_service | A = 稳定配置各不重叠验收立面多边形面积之和。去除未服务空缺及重复重叠；不得叠加作业层、架体层、重复日或平面投影。 | survey; configuration; gate; cp_scaffold_cycle_material | A | cycle-normalization-method |
| cycle_numerators | all inventory rows | 对每个具体身份/状态/接收方 j，N_j = 实测同状态换算及互斥归属后以声明分子单位表示的周期归属数量；E_j = N_j / A。各 j 分别保留；异质总量只检验台账完整性。 | N_j; A; cp_scaffold_cycle_material; cp_scaffold_cycle_utility; cp_scaffold_cycle_asset; cp_scaffold_cycle_release | E_j | cycle-normalization-method; asset-attribution-method |
| final_area_output | reference_service | 最终输出 = A / A = 1 m2，对应完整验收周期，保留实际持续期及配置限定信息；其他观测不得自行归一为最终产品。 | A; closed gate; cp_scaffold_cycle_material | 1 m2 | cycle-normalization-method |
| exclusive_attribution | all inventory rows | 先归属独立计量事件；仅将共享供应方或计量剩余负荷按实际因果使用或能力分给全部有证据使用者，保留穷尽互斥份额及不确定性；计算 E_j 前核对供应方已含与另录数量。 | consumer/phase register; provider coverage; cp_scaffold_cycle_asset; cp_scaffold_cycle_utility | attributed N_j | asset-attribution-method |
| compatible_closure | all inventory rows | 对各兼容材料/状态/组分池，期初存量 + 观测外来增加 = 期末存量 + 独立测量留置、归还、废弃及释放组分 + 残差。评估残差不确定性，不生成配平交换；使用后套件状态与外来沉积物分开。 | state/constituent ledgers; cp_scaffold_cycle_material; cp_scaffold_cycle_release | closure findings | compatible-pool-ledger-method |
| water_only_closure | water_supplied; direct_freshwater_abstraction; collected_wastewater_slurry; water_vapour_air; specific_direct_water_releases | 将独立观测纯水组分投入及期初水与纯水组分期末、留置、退回含量、收集液体废物、有依据蒸发及直接排放核对；内部循环抵消，固体及化学品是独立组分，残差不能证明蒸发。 | water-only measurements; cp_scaffold_cycle_utility; cp_scaffold_cycle_release; cp_scaffold_cycle_material | water closure findings | compatible-pool-ledger-method |
| fossil_carbon_constraint | fossil_co2_air | 对独立测量的燃烧化石碳 C_f，化石 CO2 <= C_f * 44 / 12。以适用测量或模型记录实际 CO2，分别核对其他物种中的碳及残差不确定性。此上限不假定完全氧化，不是每 kg 柴油对应 kg CO2。 | C_f; actual emission evidence; cp_scaffold_cycle_utility; cp_scaffold_cycle_release | fossil-carbon QA | carbon-oxidation-identity |
| fuel_supply_fate | diesel_fuel | 对每种真实燃料身份及互不重叠的节点/事件期间，G_fuel = 期初可用燃料 + 外部接收量 - 期末可用燃料库存（含设备油箱）；扣除容器皮重，边界内领用/转移不再作新增接收。G_fuel 为真实可用向外退回 U_fuel、向外转移 X_fuel、收集的未燃燃料 W_fuel 和未收集燃料 P_fuel 扣除之前的物理产品输入总量。各去向互斥并分别解析实际产品、废物流或物质/介质身份；泄漏事件总量仅作核查，不重复扣除。W_fuel 和 P_fuel 指所含燃料质量，不是受污染吸附物或废水的总质量。仅在完整且有证据的去向台账下，B_fuel = G_fuel - U_fuel - X_fuel - W_fuel - P_fuel；未知去向保留缺口，不假定已燃烧。只有有独立依据的 B_fuel 驱动燃烧排放。所有未退回的未燃燃料、废物和损失均保留上游供应负荷；真实可用退出物仅可携带有记录的原始未用材料负荷，不再次扣减净输入或给予避免生产信用。期初/期末库存负荷只结转一次。各物理量仅除以 D_fuel 一次；D_fuel 为本 PCR 第3-4节规定的参考单位下独立实测的正值验收批量（验收体积、面积、轴向长度、钢材质量或完整验收计数），不是燃料量或中间产出。现有 actual_consumed/燃料消耗字段是燃烧活动记录，不能替代上游输入 G_fuel。供应商已含燃料和排放只设一个责任方，不重复加入重叠的前景供应或燃烧。 | opening fuel; external receipts; closing intact fuel; U_fuel; X_fuel; W_fuel; P_fuel; D_fuel; actual node fuel protocol and fate evidence | G_fuel product input; independently supported B_fuel; separately resolved exclusive outlets |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| configuration_gate | reference_service | 保留配置及套件编号、实测立面多边形和正值 A、高度、荷载等级、作业层和架体层及拉结布置、基底放行、交接和拆除归还恢复记录、实际注明日期的可用及不可用期和责任方；几何变更须有另行审查队列。 | 测量、设计及闭合验收日志 |
| actual_condition | all inventory rows | 每张条件卡均须有实际是、否、未决发生状态及证据；按每个具体材料、SKU、状态、物种和接收方分别实例化原生观测、换算及 N_j/A，不得将未决发生状态设为零。 | 事件证据及具体交换登记 |
| temporal_asset_coverage | scaffold_cycle | 将全部阶段事件、投入、资产、退出、沉积及维护关联实际日期及编号，列举全部套件、设备、电表使用者和期间份额；保留供应方覆盖范围或有证据的自有寿命及能力、实际使用、磨损、损伤、维修和退役，披露缺失证据。 | 阶段台账；合同；资产状态及归属核对 |
| reject_and_fate | scaffold_cycle | 识别未就绪或改变的架体、检查失败及缺陷或隔离构件；将重复作业及实际普通维护、外部维修、可用归还、留存或有记录废弃关联原周期。未闭合归还或去向表示不完整；丢失或被盗存量不是废物，已用套件不是未用退货。 | 检查及保管去向记录；正值废弃及接收方证据 |
| compatible_constituents | all inventory rows | 保留独立带入及使用期沉积、实际水分、污染和组分换算，逐一闭合兼容材料状态池；不得将湿混合物整体等同干组分。纯水组分与化石碳分别核算，不得添加 O2 或虚构粉尘、废物、水蒸气及其他配平流。 | 独立测量；组分分析；不确定性及残差报告 |
| range_evidence | all inventory rows | 25 张无数值范围卡各自在描述中声明具体缺失证据及物理约束；须采集相关记录并检查实际范围后才可视为已知。不得插入任意宽界限或暗示厂家安全及设计示例是 LCA 消耗因子。 | 逐行采集及物理 QA 评估；有依据归一化及碳范围 |
| identity_support | all inventory rows | 最终交换创建前独立确认实际流身份及兼容支持；将 Area 和 Mass 支持与未决 Energy 及独立 Duration 支持分开。身份确认与用量、范围、实际启用及工程验收分别判断。 | 身份及支持核实和实际前景证据 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| accepted_gate | reference_service | 要求独立测量的正值 A、检查交接、注明日期的可用期闭合、拆除及核对闭合的构件归还维修废弃和责任恢复；每个验收立面只计一次，核验全部必需限定信息并分开几何变更。 | cycle-normalization-method |
| identity_and_activation | all inventory rows | 最终交换交付前须解决每项具体实例身份、状态、属性、单位和接收方；实际发生状态按有证据的是、否、未决报告，无证据不等于零，已核实 UUID 不证明用量或启用。未特指空气固定身份仅用于该区室。 | compatible-pool-ledger-method |
| phase_and_asset_coverage | scaffold_cycle | 检查阶段事件连续性、套件及构件身份和全部共享使用者及期间；核实单一责任方，排除套件、制造、维护、燃料或计量负荷重复；将失败及返工状态与实际去向核对，禁止未验收服务进入分母。 | asset-attribution-method; cycle-normalization-method |
| physical_qa | all inventory rows | 按兼容材料、当前状态及组分池核对期初期末存量和独立观测增加量，分别检查纯水组分及燃料碳约束；不得将燃料 kg 与 CO2 kg 直接平衡，也不得由残差虚构氧气、废物、粉尘、水蒸气或其他交换。 | compatible-pool-ledger-method; carbon-oxidation-identity |
| range_and_gaps | all inventory rows | 保留两个有依据范围及其他 25 行各自的范围证据需求；依据实测投入及去向检查实际物理约束。缺失范围证据、状态不确定、支持身份或资产归属缺口均须披露，不得虚构界限。 | cycle-normalization-method; compatible-pool-ledger-method |
| report_completeness | foreground dataset | 报告接受输入、执行及跳过检查、发现、不确定性和完整性。自动结构检查通过不证明工程合规、最终 UUID 就绪或不完整周期闭合。 | cycle-normalization-method |
| validate_fuel_supply_fate | diesel_fuel | 按实际燃料协议、库存和供应商覆盖核查 G_fuel、B_fuel 及各互斥去向。未退回的未燃废物/损失保留上游负荷；去向、燃料组分或正值 D_fuel 未解决时，不得宣称燃料定量清单完整。不以燃烧活动替代采购燃料，不同时扣减泄漏总量及其各组成去向。 |  |
| validate_physical_slurry_stream | all collected wastewater/slurry | 废水/浆液卡仅表示一个接收门槛下真实未物理分离的液固混合物流。分别收集的液体、已分离固体或不同处理去向须建立独立实际交换，不能为适配本卡而重新合并。混合物总质量与所含水/固体属于不可相加的视图。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景脚手架周期数据包及 process/lifecyclemodel 投影 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 明确面积、配置、实际持续期及资产供应方覆盖的兼容支承式模块化镀锌钢立面脚手架周期 |
| excluded_use | 工程安全认证；单纯租赁；其他脚手架系统；使用者工种清单；无限定面积天比较；不完整周期 |
| required_metadata | 场址地域；实际配置及套件编号；正值 A 及多边形；高度荷载作业层拉结基底；阶段日期及实际可用持续期；交接闭合；具体身份；资产供应方及计量覆盖 |
| required_quality_disclosure | 已执行及跳过检查和完整性；未决身份、支持、范围、去向及自有资产归属；实测换算、因子模型适用性、不确定性和闭合残差 |
| update_trigger | 配置几何、荷载作业层拉结、来源技术、责任供应方覆盖、持续期队列、维护去向证据或身份方法变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| peri-instructions | handbook | PERI UP Scaffolding Kit, Core components, Assembly instructions, Version 2.2, pp. 8, 10, 12–14. https://www.peri.ie/dam/jcr%3A8e2c13f7-1dd2-337d-a227-cb3329355256/peri-up-scaffolding-kit-core-components-instructions-for-assembly-and-use.pdf | 厂家特定清洁维护、构件状态、支承锚固、运输、标识及检查交接；不采用通用寿命、周转次数、消耗率或安全阈值。 |
| osha-scaffold | official_guidance | US OSHA, Scaffolding eTool, General Requirements, Scaffold Platform Construction and Criteria for Supported Scaffolds. https://www.osha.gov/etools/scaffolding/general-requirements | 刚性支承区分及支承、斜撑、平台背景；美国安全指导不提供 LCA 清单率，亦不替代实际当地设计和验收。 |
| unsd-cpc21-scaffold | official_guidance | UNSD, CPC Version 2.1, 54570 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/54570 | 搭设拆除及附随租赁与单纯租赁区分的历史背景；明确不是 CPC 3.0 解释性条文。 |
| cycle-normalization-method | method_factor | 本 PCR 第 3、4、8 节定义的规范方法：唯一验收立面及完整周期归一化。 | 作者定义采集及归一化合同，不是外部出版物或经验消耗率。 |
| asset-attribution-method | method_factor | 本 PCR 第 7、8 节定义的规范方法：互斥事件、供应方及资产归属。 | 作者定义归属和覆盖方法，仍须真实寿命、能力及使用证据。 |
| compatible-pool-ledger-method | method_factor | 本 PCR 第 6、8 节定义的规范方法：兼容当前状态及组分闭合。 | 作者定义物理 QA 及独立沉积物和水核算；残差保留为发现。 |
| carbon-oxidation-identity | method_factor | 第 8 节定义的规范碳核算恒等关系：化石碳至 CO2 质量上限 44/12。 | 仅为分子质量约束，不是经验燃料因子，不假定完全氧化，不虚构外部出版物。 |
