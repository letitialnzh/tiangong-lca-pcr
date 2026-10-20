---
pcr_id: pcr.gravity-fed-prefabricated-polyethylene-septic-tank-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 重力式预制聚乙烯化粪池罐体安装服务

## 1. 范围与适用性

本 PCR 适用于工厂预制聚乙烯重力式化粪池罐体的首次安装，场址须为非车辆通行区域，且已证明满足干燥、无需抗浮措施的条件。责任范围包括地下设施核查、实际开挖及水平支承准备、罐体检查和吊放、相容的进出水短接管及密封件/三通连接、必需的检查井筒及井盖、适宜回填和压实、地表排水整坡及抗侵蚀植被恢复，以及实际规定的安装阶段检查/试验。交付界面是通过验收的安装罐体及明确定位的进出水短接管端点。仅完成罐体安装不能提供可运行的完整化粪处理及土壤排放系统。

排除现场制造罐体、车辆荷载或高地下水位抗浮路线、泵/定量投配/曝气/消毒单元、排水渗滤场、建筑排水管、持续污水处理、抽排清理及后续维护。实际许可/设计和型号对应的批准说明决定合规要求；所引制造商示例用于明确路线责任，不是通用尺寸或试验设定。实际场址若需要所排除的抗浮或地下水控制工程，使用本 PCR 前须重新评估路线适配性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.gravity-fed-prefabricated-polyethylene-septic-tank-installation-services |
| classification_refs | cpc:3.0:54342；范围窄于化粪系统安装服务 |
| covered_products | 一座实际工厂预制聚乙烯重力式罐体的短接管界面内验收安装，包括土建支承、连接及恢复工程 |
| excluded_products | 完整运行化粪系统和渗滤场；泵及处理单元；罐体生产；车辆或抗浮安装路线；后续维护 |
| representative_product | 实际获批 IM-1060 类重力罐体在合格干燥非通车场址的安装；须声明型号和当地批准依据 |
| production_route | 针对实际工程的开挖/支承、工厂罐体集成、连接、回填/压实/恢复和实际安装验收 |
| market_state | 已完成的土建/连接安装服务，界面为规定的短接管；工厂罐体为上游产品输入 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 通过验收的非通车场址工厂聚乙烯重力式化粪池罐体安装，界面为规定短接管 |
| How much | 1 item 实际通过验收的安装 |
| How well | 实际获批型号/容量/分隔及重力用途；罐体完好；短接管、三通/密封件/井筒/井盖相容且标高正确；支承/回填/恢复及必需安装试验通过验收 |
| How long or cycle | 一个工程从首次场址准备至签署交付，包含归属该工程的损坏零件、安装失败、修复及复验。资产分摊还须索引生产、跨其他工程的服务期间、维护/更换和最终移除。罐体未来运行另行建模。 |
| reference_flow_link | `accepted_tank_installation` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 通过验收的非通车场址工厂聚乙烯重力式化粪池罐体安装，界面为规定短接管 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 工程/场址及许可/设计修订版；制造商/型号/容量/分隔；重力配置；干燥场址土壤/地下水资格和非通车用途；短接管准确端点/管底标高及带单位的尺寸；实际原土/外购支承和回填、覆土、井筒/井盖及恢复；实际试验/检查方法、单位、公差、批准机构和验收记录；排除项及下游界面责任方 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| counted_handover | accepted_tank_installation | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 仅在所声明完整土建/连接界面通过验收后计为一项安装；容量是设计限定信息，不能将不同型号换算为等价数量。 |
| physical_measurements | 所有清单行 | 实际交换的流属性 | 实际记录单位 | 各数量保留物理测量单位，包括质量、能量、服务时长、运输功或实际设备服务单位。最终绑定前核实各流属性至单位组链。土壤或水的体积换算质量时须记录实际密度/含水状态及经校准测量；不得由罐体容量推算质量，也不得用计数替代时间或能量。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 获批且合格的非通车场址及处于声明供货界面的上游工厂罐体。现场原土是环境起始存量；针对新工程的开挖、土壤搬运、支承和恢复属于前景责任。 |
| starting_condition_role | 声明场址条件及上游采购产品界面；不代表新开挖无负荷，也不代表完整运行化粪设施 |
| product_classification_scope | CPC3.0 54342 的语义罐体安装子集，界面为进出水短接管 |
| recursive_input_rule | 不得对同一工程递归使用本最终验收服务。仅在独立供方的开挖/支承服务具有真实工程、数量、责任及验收交接时，将其作为明确边界的上游供方输入；否则其操作留在 tank_installation 内。 |
| upstream_dataset_requirement | 工厂罐体和实际单独材料需要从摇篮至供货的数据集。机械/供方须声明生产、使用/维护及移除的覆盖范围，真实缺口补计一次；上游已含运输/包装不得再次计入。 |
| disclosure | 声明实际范围责任方、供货套件清单、土壤保管转移、现场方法、全部场址工程、安装验收、失败/复验、库存结转和机械服务期间分摊。未来污水运行和下游排水设施分别由明确责任方负责。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| site_fit | tank_installation | 要求实际地下设施/土壤/地下水/非通车评估获批。纳入开挖和水平压实支承。计量不适宜土壤移除和适宜材料置换。实际需要已排除的抗浮/车辆工程时不得使用此路线。 | `ads-septic-tank-installation-2024` |
| complete_assembly | tank_installation | 核对工厂供货清单中的罐体、密封件、相容短接管/三通、螺钉、井盖及井筒，仅将真正额外组件单列。吊放完好罐体，按实际许可配置连接；支承罐体下侧弧部，交替回填各侧壁后再覆顶，压实并完成排水整坡和抗侵蚀植被恢复。 | `ads-septic-tank-installation-2024` |
| water_and_tests | tank_installation | 仅要求实际制造商/主管辖区规定的安装检查/试验，并记录单位及限值。来源未普遍要求回填前注水；开挖区域有雨水/其他水进入风险时才触发保护性注水。记录实际保护/试验用水及去向。俄勒冈井筒试验数值和真空警告不是通用默认条件。 | `ads-septic-tank-installation-2024` |
| period_assets | tank_installation | 索引工程的准备、吊放/连接、回填/恢复、检查、修复/复验和交付阶段。将每项共享挖掘机/压实机/工具关联至全部使用工程和报告期间，包含生产、服务/维护/更换及终止。实际有界供方覆盖或有证据的全寿命资产分摊须包含资本和移除负荷，并避免重复燃料/材料。 |  |
| soil_custody | tank_installation | 按来源/去向和实际产品或废物状态追踪开挖原土、场内回用回填、外购填料、期末存量及实际外运。场内转移属于平衡，不是新购土壤输入或联产品抵扣。废物交接与经表征的直接排放分开。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：单独供货的短接管及允许三通 (`extra_pipe_tees`)

过程／待建立交换的方向／类型：`tank_installation` / `inputs` / `product`.

进出水短接管端点和实际获准三通配置决定组件边界；建筑排水管和渗滤场管道排除。

- 采集对象：单独供货的短接管及允许三通
- 流属性/单位：质量 / kg
- 数量规则：记录套件外实际不同短管/三通材料和尺寸的质量，保留长度/数量及可追溯质量换算记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际短接管端点/长度/直径/壁厚及单位、短管/三通清单、实测质量或核实的单位长度质量和当地配置。

#### 采集要求：单独供货的检查井筒井盖及紧固件 (`extra_access_parts`)

过程／待建立交换的方向／类型：`tank_installation` / `inputs` / `product`.

按实际覆土/型号和当地批准要求集成检查组件。

- 采集对象：单独供货的检查井筒井盖及紧固件
- 流属性/单位：质量 / kg
- 数量规则：记录工厂供货范围外实际不同井筒/井盖/紧固件组件质量；更换件单独识别。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际相容型号/材料/尺寸、数量以及实测或供方证明质量；无通用井筒高度或螺钉质量。

#### 采集要求：实际单独消耗的接头连接产品 (`joint_consumables`)

过程／待建立交换的方向／类型：`tank_installation` / `inputs` / `product`.

连接耗材由实际连接方法决定；工厂自带密封件不重复计入。实际直接排放须记录化学组成。

- 采集对象：实际单独消耗的接头连接产品
- 流属性/单位：质量 / kg
- 数量规则：记录每种产品身份的实际工程总接收/领用；分别核对安装/消耗去向、真实外退、废物及期末留存。消耗或放置属于去向，不得作为另一种净输入基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际获准连接方法、产品组成、领用/剩余数量及废物记录；无一律适用的胶粘剂或溶剂用量。总接收/领用及各保管去向须对同批次/状态闭合。

#### 采集要求：实际外购垫层及回填产品 (`imported_support_fill`)

过程／待建立交换的方向／类型：`tank_installation` / `inputs` / `product`.

合适的现场原土支承可能不需要外购垫层；实际支承/回填需要时才纳入外购材料。原土场内移动记录于土壤台账。

- 采集对象：实际外购垫层及回填产品
- 流属性/单位：质量 / kg
- 数量规则：记录每种产品身份的实际工程总接收/领用；分别核对安装/消耗去向、真实外退、废物及期末留存。消耗或放置属于去向，不得作为另一种净输入基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_soil`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际开挖/支承设计、原土适宜性、外购材料称重票据/含水状态及放置/库存平衡；型号示例不规定通用体积或密度。总接收/领用及各保管去向须对同批次/状态闭合。

#### 采集要求：实际单独供货的抗侵蚀恢复材料 (`finish_products`)

过程／待建立交换的方向／类型：`tank_installation` / `inputs` / `product`.

地表恢复属于实际安装；仅在实际使用时记录采购种子、覆盖垫或其他必需材料。

- 采集对象：实际单独供货的抗侵蚀恢复材料
- 流属性/单位：质量 / kg
- 数量规则：记录每种产品身份的实际工程总接收/领用；分别核对安装/消耗去向、真实外退、废物及期末留存。消耗或放置属于去向，不得作为另一种净输入基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_soil`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际获批恢复规格、不同产品身份及称重领用/库存；无通用播种或覆盖率。总接收/领用及各保管去向须对同批次/状态闭合。

#### 采集要求：安装机械实际供应的燃料 (`installation_fuels`)

过程／待建立交换的方向／类型：`tank_installation` / `inputs` / `product`.


本节点真实上游燃料供应，尚未扣除可用向外退出量。按 fuel_supply_fate 保留未退回废物/损失的供应负荷，并单独确定燃烧活动。保留真实燃料牌号、设备工况、供应商覆盖、密度/状态和计量不确定性。

- 采集对象：安装机械实际供应的燃料
- 流属性/单位：质量 / kg
- 数量规则：真实上游供应燃料质量 G_fuel 仅除以声明参考单位下独立实测的正值验收批量 D_fuel 一次；保留各互斥燃料去向，按第8节另行确定实际燃烧 B_fuel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际设备/任务计量、燃料类型、加注及库存记录、密度/温度及供方覆盖；无通用挖掘机耗油因子。

#### 采集要求：实际可重复使用的挖掘机压实机及工具供应 (`equipment_provision`)

过程／待建立交换的方向／类型：`tank_installation` / `inputs` / `product`.

挖掘机、压实机、吊具、开孔器及手工/试验工具可能跨工程/期间共享。供方服务和自有资产须有不重复的明确覆盖；服务身份不是机械质量。

- 采集对象：实际可重复使用的挖掘机压实机及工具供应
- 流属性/单位：时长 / h
- 数量规则：按合同或测量服务单位记录各项实际资产/服务；仅真正按时长供应时使用 h。关联全寿命归属的生产/维护/移除和实际服务覆盖。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际资产编号、安装任务小时、全寿命服务期间/工程、更换/终止记录及经核实供方覆盖；无通用寿命、小时或所有权分摊比例。

#### 采集要求：实际外部运输及废物清运服务 (`transport_service`)

过程／待建立交换的方向／类型：`tank_installation` / `inputs` / `product`.

车辆装载和实际空驶/调车依据选用运输数据集明确记录；场内土方搬运仍属安装任务。

- 采集对象：实际外部运输及废物清运服务
- 流属性/单位：运输功 / t km
- 数量规则：记录罐体/材料运入、真实退回及废物运输的各实际路线/供方质量和距离；仅增加上游/服务覆盖范围外运输。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际托运路线、载重、距离、车辆/供方及数据集所含行程边界；无通用公里数或运输计数换算。

#### 采集要求：实际退出工程保管的可用产品 (`usable_product_returns`)

过程／待建立交换的方向／类型：`tank_installation` / `outputs` / `product`.

可用组件、包装或依法交接的洁净土壤仅在实际保管接收和用途证据支持时作为产品外移；期末留存库存不是对外交换。原生洁净土壤外运须在 cp_soil 保留场址/开挖来源，并以同一 transfer_id 关联 cp_components 外移保管记录；不要求原采购批次，也不产生上游土壤生产负荷。计数罐体/密封件以 kg 退回时，须保留同一 transfer_id 对应物品/序列号数量及实际测量或可追溯的产品特定质量，不得默认换算。

- 采集对象：实际退出工程保管的可用产品
- 流属性/单位：质量 / kg
- 数量规则：按总外移数量记录各不同可用退回产品，保留原输入批次或原场址开挖来源及同一 transfer_id。原生土壤须与 cp_soil 配对。以 kg 记录计数罐体/密封件退回时，要求实测或可追溯的产品特定质量及匹配物品数量；不得默认计数换算质量。不得先抵减输入再将同一退回计为输出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际接收方确认、可用状态、组件身份/质量及交接/退货单；不得假定回用抵扣或回收比例。原土须有 cp_soil 来源状态及实际质量证据；计数罐体/密封件退回须有匹配实测质量和 transfer_id。

#### 采集要求：实际废弃组件包装及开挖材料 (`solid_waste`)

过程／待建立交换的方向／类型：`tank_installation` / `outputs` / `waste`.

废物保管包含被拒收罐体及实际具有废物状态的不适宜/外运土壤。供方已含包装/废物管理须核对；可用退回分开处理。

- 采集对象：实际废弃组件包装及开挖材料
- 流属性/单位：质量 / kg
- 数量规则：按质量、组成/污染及获准接收路线记录各不同废弃罐体/零件、边角料、包装或实际废土。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：每股流须有实际废物分类、称重/去向票据及服务已含证据；不得将所有土壤通称废物或给予替代生产抵扣。

#### 采集要求：实际经表征的环境排放 (`direct_releases`)

过程／待建立交换的方向／类型：`tank_installation` / `outputs` / `elementary`.

潜在机械尾气、粉尘、连接产品释放或合法直接排水须有实际物质/介质证据。废物运输不是基本流排放；背景/供方已覆盖排放不得重复增加。

- 采集对象：实际经表征的环境排放
- 流属性/单位：质量 / kg
- 数量规则：依据实测活动或相容且有据的因子，分开记录各实际排放物质和接收介质；保留粉尘粒径/物种及原因子基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际物质身份、介质、实测或有源因子和活动、治理措施及不确定性；通用尾气/粉尘或排水质量不能替代污染物 UUID。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tank_installation | 土建准备、罐体集成及安装验收 | required | 全部范围内工程；保护/试验水、额外组件及更换/复验投入依据实际记录 | 前景安装和装配集成 | 1 item 已验收的短接管界面内罐体安装 |

单一节点负责开挖/支承、罐体集成、回填/恢复及检查/修复循环。罐体损坏、连接不相容、检查失败或渗漏属于 tank_installation 内不合格状态，直至修复及复验、按实际产品保管关系退回，或按实际废物去向处置。不合格状态不得计为另一项验收安装。文件接收、许可或试验证书均不是独立生产节点。以下可变卡片须根据实际记录展开为零项、一项或多项独立识别交换；不同材料、燃料、废物类别或排放物质不得合并为一个通用流。

### 过程：土建准备、罐体集成及安装验收 (`tank_installation`)

#### 输入

##### 产品流

###### 声明供货界面的工厂聚乙烯化粪池罐体 (`factory_tank`)

完整采购罐体为上游产品。声明型号/容量/分隔、工厂开孔和随附配件/井盖/井筒；单独树脂不是其身份。

- 选定流：声明供货界面的工厂聚乙烯化粪池罐体
- 流属性/单位：物品数量 / item
- 数量规则：记录归属该工程的罐体实际总接收/领用数量，包括已安装及损坏/更换罐体；区分真实退回和期末库存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际型号对应的发运、工程领用/序列号、更换/损坏记录、供货清单及库存保管证据；无通用罐体质量或损耗率。

###### 单独供货的相容进出水密封件 (`extra_gaskets`)

真正额外的每种密封件是与获批罐体/管道开孔匹配的离散组件。

- 选定流：单独供货的相容进出水密封件
- 流属性/单位：物品数量 / item
- 数量规则：按具体材料/尺寸记录实际单独供货密封件数量，包括更换件；工厂随附件不得再计负荷。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求套件不含该件的实际证据、相容密封件规格、领用/退回数量及损坏记录；不得假定额外需要两个密封件。

###### 实际安装及试验电力 (`installation_electricity`)

电力产品以实际供电组合/供方和计量边界限定。最终绑定要求准确且已核实的能量属性支持链。

- 选定流：实际安装及试验电力
- 流属性/单位：能量 / kWh
- 数量规则：记录归属工程的工具/充电器/试验实际计量电力，与未来污水运行及供方已含能源分开。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际供电身份、任务计量/充电分摊、计量不确定性及实际工程时长；不得使用默认试验能耗或机械功率乘积。

###### 实际供给的试验或保护性注水 (`test_protection_water`)

安装不预设注水。实际注水、试验、修复及复验用水均须负责核算，并记录留存或排出。

- 选定流：实际供给的试验或保护性注水
- 流属性/单位：质量 / kg
- 数量规则：仅在实际试验或雨水保护说明要求时记录实际采购/供给用水；保留来源/水质和重复注水量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际适用试验/保护规定、型号对应注水液位、供水计量或有已核实密度的体积记录及去向；无通用整罐注水量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 通过验收的非通车场址工厂聚乙烯重力式化粪池罐体安装，界面为规定短接管 (`accepted_tank_installation`)

验收输出已完成实际开挖/支承、完好罐体集成、短接管、必需检查组件、回填/压实/恢复和安装阶段验收。计数排除未关闭失败，不证明未来处理性能。

- 选定流：通过验收的非通车场址工厂聚乙烯重力式化粪池罐体安装，界面为规定短接管
- 流属性/单位：物品数量 / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：准确的 1 item 数量是参考定义而非经验范围。实际型号/场址/短接管/验收记录须证明此单项完整工程符合声明单位；不得由容量推断等价。

##### 废物流

###### 实际交接处理的试验或保护用水 (`water_waste`)

仅实际交接路线发生时，收集的污染试验水才作为废物跨越保管边界；直接环境排出归入实际表征排放。

- 选定流：实际交接处理的试验或保护用水
- 流属性/单位：质量 / kg
- 数量规则：按来源事件及接收路线记录实际交至管理处理/废物接收方的水量，考虑留存水及重复试验。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`ads-septic-tank-installation-2024`

数量范围证据需求：要求实际接收路线、计量数量、污染/接收记录、留存量及适用排放授权；不得假定污水处理负荷。

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| job_attribution | tank_installation | 将实际工程材料/能源/场址作业及失败、修复和复验归属于最终验收工程。内部修复循环不产生另一项验收输出。不同配置或未完成工程须分开并披露，不得稀释分母。 |  |
| asset_attribution | equipment_provision | 对每项资产索引生产、各服务/报告期间及使用工程、维护/更换和最终移除。按实际记录的服务活动份额相对完整有据的服务范围分摊，并说明剩余/闲置能力。资本/维护/移除负荷或经核实的供方覆盖计入一次；供方缺失阶段须明确补计，避免重复已含运行燃料。不得假设通用寿命或摊销。 |  |
| custody_attribution | usable_product_returns; solid_waste; imported_support_fill | 按实际身份平衡期初库存/总接收/领用/安装或消耗去向/真实外退/废物/期末库存。全部材料输入使用工程总接收/领用；放置或消耗属于去向，不是另一种输入基准。燃料产品输入与燃烧活动按 fuel_supply_fate 区分；未用/退回燃料按真实库存和退出去向核对。留存库存以声明的未消耗负荷结转，不是产品输出。退回产品保持原批次负荷保管关系，不自动获得替代抵扣。现场回用原土承担搬运负荷，不承担采购生产负荷。实际出现范围外联产品时须另行明确审查分配。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_components | tank_installation | 罐体/组件及可用退回 | 供货清单及经校准数量/库存记录 | job_id; lot_id; product_identity; model; included_kit_parts; gross_receipts; gross_issues; installed_amount; real_outward_returns; waste_amount; closing_stock; mass_kg; matched_item_count; product_specific_mass_evidence; dimension_unit; native_soil_provenance; transfer_id | 使用材料总接收/领用及全部去向核对工厂清单和实际额外角色，不得用净消耗/放置量作为输入。实测质量或使用匹配供方尺寸/质量的可追溯证据；保留计数罐体/密封件记录。真实外退仅计一次，留存库存结转。按 transfer_id 关联 cp_soil 原土来源；使用实际质量证据闭合计数罐体/密封件接收与质量退回。 | kg; item; 实际尺寸单位 | 每次接收/领用/安装/退回/更换 | 准备至最终交付及全部失败尝试 | 工程及供货批次 | per reference flow | 签署清单、序列号、秤校准、相容性及批次平衡 |
| cp_soil | tank_installation | 开挖/支承/回填及恢复 | 场址测量及材料台账 | job_id; native_soil_suitability; groundwater_state; excavated_quantity; surveyed_volume_unit; reused_onsite_quantity; import_mass_kg; material_identity; gross_receipts; gross_issues; placed_or_consumed; real_outward_returns; waste_quantity; closing_quantity; disposition_unit; moisture_basis; density_unit; finish_product_identity; closing_stock; exported_quantity; destination; custody_status; transfer_id | 按材料状态计量实际开挖及土壤/恢复材料保管；使用现场测量和称重票据、实测换算性质并明确平衡不确定性。原土外运以 transfer_id 及实测质量关联 cp_components 外移记录，保留场址来源而非采购批次。记录带实际单位和限值的放置/压实/整坡验收；场内土壤转移不形成采购输入。 | kg; 实际测量体积和几何单位 | 每次开挖/运入/放置/外运及恢复验收 | 全部土建准备、回填、修正和恢复 | 实际开挖及受控库存区域 | per reference flow | 获批土壤/场址报告、经校准测量/秤及签署放置/压实/整坡记录 |
| cp_energy | tank_installation | 燃料及电力 | 仪表及燃料库存/任务日志 | job_id; task_id; asset_id; period_id; fuel_identity; fuel_mass_kg; fuel_volume; fuel_volume_unit; density_value; density_unit; density_temperature; density_temperature_unit; electricity_kWh; charging_boundary; provider_inclusion; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | 核对实际任务燃料及计量电力，包含返工。活动分摊使用记录任务及有据分母；明确供方已含使用及未来运行能源排除。按 fuel_supply_fate 核对供应、燃烧、未燃废物/损失、可用退回和期末库存，不以燃烧量替代供应量。保留各物理单位及换算证据。 按 fuel_supply_fate 分列供应与燃烧；采集各互斥去向、真实分母及单位，保留未退回废物/损失的供应负荷，披露未知去向。 | kg; kWh | 每个任务/加注/计量区间 | 准备至修复/复验/交付 | 工程设备及声明充电供电 | per reference flow | 仪表/秤校准、燃料/密度证据及供方覆盖 |
| cp_water | tank_installation | 实际供水及安装出水 | 仪表和试验/去向日志 | job_id; event_id; actual_requirement; water_source; fill_level_unit; supply_mass_kg; measured_volume; measured_volume_unit; density_unit; retained_water; treatment_handoff; direct_release; receiving_medium; test_method; test_duration; test_duration_unit; test_pressure; pressure_unit; test_temperature; temperature_unit; test_volume; test_volume_unit; acceptance_limit_unit; test_result_value; result | 依据适用说明确定实际用水要求。逐次计量注水及复验；平衡留存水、管理废物交接和实际直接排出。记录实际试验/保护方法以及适用压力、温度、液位、体积、时长单位及规定验收条件和机构；不得假设通用注水或真空试验。 | kg; 实际体积/液位/时间/试验单位 | 每次实际注水、试验及去向 | 全部安装阶段注水/修复/复验事件 | 罐体/场址及实际水接收方 | per reference flow | 适用获批说明、校准仪表、试验/接收记录 |
| cp_assets | tank_installation | 共享可重复使用资产及供应 | 资产/服务登记和全寿命分摊 | asset_id; provider_id; coverage_boundary; production_phase; service_period_id; consumer_job_id; task_duration_h; total_service_basis; maintenance_event; replacement_event; termination_event; removal_coverage; allocation_decision; uncovered_phase | 将本节点和其他全部使用工程/报告期间关联各资产。保留实际工程小时或合同单位和全寿命服务基准；逐阶段记录供方覆盖、运行/资本分开、缺口、分摊和事件单一归属。 | h 或实际核实的合同服务单位 | 每个资产/工程/期间及维护/更换/终止事件 | 完整资产生产/服务/移除范围及本工程 | 实际资产/供方及全部有据服务使用方 | per reference flow | 资产登记、活动计量、供方数据集范围、寿命/终止证据及不确定性 |
| cp_transport | tank_installation | 运入退回及废物移动 | 托运及路线记录 | job_id; transfer_id; provider_id; origin; destination; payload_mass_t; distance_km; vehicle_class; included_legs; upstream_coverage | 将实际进出运输及所含运输与材料/供方范围匹配。仅按相容载重/路线单位计算实际运输功；记录所含空驶并防止重复运单。 | t km; 原始 t 及 km | 每次实际托运/清运 | 全部工程交付、退回和废物去向 | 实际路线/供方 | per reference flow | 票据、路线距离证据、载重及数据集行程范围 |
| cp_acceptance | tank_installation | 验收安装参考 | 签署安装检查及试验记录 | job_id; model; capacity_unit; compartments; design_revision; permit; nontraffic_state; groundwater_evidence; stub_endpoints; invert_units; cover_units; connection_parts; test_method; acceptance_source; limit_units; failed_state; correction_id; retest_result; handover_signature; accepted_count | 仅计数完整通过验收的短接管界面内工程。匹配实际型号/场址/支承/组件/回填/整坡及必需试验/检查记录。记录带单位的适用限值，关闭各缺陷/修正/复验；分母仅含验收工程，并保留归属的失败负荷。 | item; 实际设计/试验单位 | 每项工程验收及修正关闭 | 首次作业至最终签署交付 | 实际安装罐体及规定短接管 | per reference flow | 许可/设计、制造商说明、现场验收及已关闭缺陷/复验台账 |
| cp_waste | tank_installation | 废物及实际环境排放 | 保管票据及表征排放记录 | job_id; event_id; material_identity; waste_status; composition; mass_kg; receiver; transfer_id; substance; receiving_medium; particle_size; activity_unit; factor_source; factor_basis; provider_inclusion | 区分实际废物、可用退回和内部库存。对各股废物称重并取得接收证据。对各直接排放确立物质/介质及有据活动/因子或实测值；去重供方排放并保留不确定性。 | kg; 原始因子/活动单位 | 每次废物/排放及修正事件 | 归属工程及失败作业的全部事件 | 工程及实际接收方/介质 | per reference flow | 获准接收票据、经校准测量、组成和相容排放因子证据 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| job_normalization | 所有清单行 | 在规定工程边界内汇总各不同实际归属交换，并除以匹配的验收安装数量；保留物理单位及全部失败作业负荷。未经声明分层不得汇总不同型号。 | 节点特定工程记录; accepted_count; cp_acceptance | 每参考流的交换数量 |  |
| stock_reconciliation | factory_tank; extra_gaskets; extra_pipe_tees; extra_access_parts; joint_consumables; imported_support_fill; finish_products; usable_product_returns; solid_waste | 按身份分别核对期初库存及总接收，与安装/消耗去向、真实外退、废物及期末库存。内部领用/转移是配对台账移动，不是重复外部接收。 | cp_components; cp_soil; cp_waste | 身份特定保管平衡及结转期末库存负荷 |  |
| asset_share | equipment_provision | 将有据的实际工程服务份额用于完整有据资产阶段负荷；按同一服务基准核对全部使用方/期间份额及剩余能力，供方已含部分只计一次。 | cp_assets; cp_energy; 经核实供方范围 | 分摊资产供应及明确未覆盖阶段要求 |  |
| fuel_supply_fate | installation_fuels | 对每种真实燃料身份及互不重叠的节点/事件期间，G_fuel = 期初可用燃料 + 外部接收量 - 期末可用燃料库存（含设备油箱）；扣除容器皮重，边界内领用/转移不再作新增接收。G_fuel 为真实可用向外退回 U_fuel、向外转移 X_fuel、收集的未燃燃料 W_fuel 和未收集燃料 P_fuel 扣除之前的物理产品输入总量。各去向互斥并分别解析实际产品、废物流或物质/介质身份；泄漏事件总量仅作核查，不重复扣除。W_fuel 和 P_fuel 指所含燃料质量，不是受污染吸附物或废水的总质量。仅在完整且有证据的去向台账下，B_fuel = G_fuel - U_fuel - X_fuel - W_fuel - P_fuel；未知去向保留缺口，不假定已燃烧。只有有独立依据的 B_fuel 驱动燃烧排放。所有未退回的未燃燃料、废物和损失均保留上游供应负荷；真实可用退出物仅可携带有记录的原始未用材料负荷，不再次扣减净输入或给予避免生产信用。期初/期末库存负荷只结转一次。各物理量仅除以 D_fuel 一次；D_fuel 为本 PCR 第3-4节规定的参考单位下独立实测的正值验收批量（验收体积、面积、轴向长度、钢材质量或完整验收计数），不是燃料量或中间产出。现有 actual_consumed/燃料消耗字段是燃烧活动记录，不能替代上游输入 G_fuel。供应商已含燃料和排放只设一个责任方，不重复加入重叠的前景供应或燃烧。 | opening fuel; external receipts; closing intact fuel; U_fuel; X_fuel; W_fuel; P_fuel; D_fuel; actual node fuel protocol and fate evidence | G_fuel product input; independently supported B_fuel; separately resolved exclusive outlets |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| route_identity | tank_installation | 证明实际非通车、干燥、无需抗浮的重力路线、许可/设计/型号、独立短接管界面和完整套件范围。 | 获批场址/设计及实际供货清单 |
| quantity_quality | 所有清单行 | 保留身份特定的实际单位、校准、时间/场址/批次范围、换算含水率/密度或供方质量、缺失活动及不确定性。不得推断默认值或用零表示缺失。 | 节点特定协议和原始记录 |
| period_completeness | equipment_provision | 完整覆盖资产阶段/使用方/期间、更换/终止及供方缺口；服务寿命证据未解决时阻止最终资产分摊。 | 资产/服务登记及全寿命支撑记录 |
| acceptance_quality | accepted_tank_installation | 验收数量须匹配签署交付、带单位的实际检查/试验标准和已关闭修复/复验路径；罐体安装通过不证明污水处理性能。 | cp_acceptance 及适用制造商/辖区文件 |
| custody_quality | usable_product_returns; solid_waste; water_waste; direct_releases | 核对来源、数量、状态、真实接收方及身份类别；库存结转和现场留存水属于平衡，不是虚构对外交换。 | 转移、库存、水及废物台账 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_fit | tank_installation | 土壤/地下水/交通条件不合格、缺少实际开挖/支承责任、短接管不明确或含已排除设备/工程时，路线适配失败。 | `ads-septic-tank-installation-2024` |
| validate_gate | accepted_tank_installation | 要求一项完整验收安装、实际型号/场址/零件、回填/压实/恢复及带原始单位的适用试验/检查标准；计数前关闭失败状态。不得声明处理性能。 | `ads-septic-tank-installation-2024` |
| validate_kit_balance | 所有清单行 | 拒绝套件组件重复、供方已含包装/运输重复、输入净额加外退重复、未分类土壤外运或留存库存当作输出。可变集合卡须展开为实际不同交换身份。 |  |
| validate_assets | equipment_provision | 要求全部使用工程/期间和完整生产/服务/维护/更换/移除范围、实际份额基准及每个共享事件的单一归属；未解决寿命/终止或供方缺口时阻止完成。 |  |
| validate_bindings | 所有清单行 | 各最终 TIDAS 交换须有准确实际流、属性/单位组和去向支持；未解决语义身份及未支持的能量/时长/运输链须明确作为数据要求。不得使用近似身份或为方便而转换计数。 |  |
| validate_rework | tank_installation | 在产生节点保留损坏/不合格材料、修复/更换及重复试验，明确实际内部循环、产品退回或废物退出。废弃罐体或未关闭失败不得进入验收数量。 |  |
| validate_fuel_supply_fate | installation_fuels | 按实际燃料协议、库存和供应商覆盖核查 G_fuel、B_fuel 及各互斥去向。未退回的未燃废物/损失保留上游负荷；去向、燃料组分或正值 D_fuel 未解决时，不得宣称燃料定量清单完整。不以燃烧活动替代采购燃料，不同时扣减泄漏总量及其各组成去向。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一项合格短接管界面内重力罐体安装的前景数据包；process/lifecyclemodel 是下游投影 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅在声明场址/型号/界面/验收范围及资产/供方覆盖匹配时进行安装阶段比较 |
| excluded_use | 完整化粪系统运行、污水去除性能、渗滤场设计、车辆/抗浮变型、通用容量等价主张及饮用水批准 |
| required_metadata | 实际场址/时间/许可/设计和制造商型号；材料及套件身份；土壤/地下水和短接管；作业/试验/恢复标准；验收数量；上游及资产阶段/服务覆盖 |
| required_quality_disclosure | 缺失记录和未解决绑定/支持链；测量/换算不确定性；失败/复验数量；库存/保管及废物/排放路径；资产寿命/覆盖分摊限制 |
| update_trigger | 罐体/场址/路线/界面、制造商/辖区说明、套件内容、试验验收、供方或资产范围变化；新测量数据或核实流身份 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| ads-septic-tank-installation-2024 | handbook | Infiltrator Water Technologies / ADS, Infiltrator Septic Tank General Installation Instructions, February 2024, pp1-3 and6; https://assets.adspipe.com/asset/2c4fb1a6-27dd-4e01-9d46-c24e90bcd72b/Tank-General-Installation-Instructions.pdf | 实际制造商路线、非通车/场址/土壤及组件说明、回填/恢复、条件性保护注水及辖区特定试验；型号示例不是通用数值 |
| un-cpc3-explanatory-notes-2025 | official_guidance | United Nations Statistics Division, CPC Version3.0 explanatory notes, 30June2025, printed pp289-290; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 化粪系统和渗滤/排水场安装的分类范围；较窄的罐体安装语义边界 |
