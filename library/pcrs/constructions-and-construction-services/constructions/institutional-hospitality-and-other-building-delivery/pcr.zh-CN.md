---
pcr_id: pcr.constructions-and-construction-services.constructions.institutional-hospitality-and-other-building-delivery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 机构、旅宿及其他非住宅建筑交付

## 1. 范围与适用性

本 PCR 依据 un-cpc-3-53129 用途边界，覆盖实际施工和验收的公众娱乐、旅宿及餐饮、教育或图书馆或档案馆或博物馆、含兽医用途的医疗、室内体育或休闲、会展、宗教、监狱、法院或议会、通信及其余非住宅农用建筑。覆盖声明的完整交付实体，不缩为较容易的单一学校或医院路线。排除施工服务、建材包、商业办公或零售或仓库或交通客运站建筑、工业厂房、农业储藏建筑或粮仓、住宅或集体住宅、矿山或电站或化工厂及其他专用工业设施、室外体育设施。非工业或储藏设施的农用实体棚舍按实际主要用途可纳入。混合用途场址须声明建筑及共用系统范围，分类名称本身不能证明方法适用性。

实际设计可采用钢筋现浇或预制混凝土、钢、木、砌体及混合结构，按有证据的工程包适用。固定系统及装修须符合实际交付功能，例如医疗通风或压力或洁净系统、教学或实验室空间、酒店卫生设施、厨房排烟、礼堂声学及室内体育长跨屋盖、机构安防设施或通信基础设施，仅在实际交付时纳入。这些是适用性核对提示，不是通用必装设备配方或设计阈值。业主业务设备、活动家具、医疗机器、广播或 IT 设备及后续使用者装修应作为独立披露的排除项，除非声明实体确实含有它们并有独立清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.institutional-hospitality-and-other-building-delivery |
| classification_refs | CPC 3.0 53129 — Other non-residential buildings |
| covered_products | 所述用途的完整验收机构、旅宿及其余非住宅建筑实体 |
| excluded_products | 住宅、工业或储藏、商业办公或零售建筑及专用土木设施；服务和建材包；未声明运营设备 |
| representative_product | 一栋有实际用途和配置记录的验收建筑，不是假定类别平均建筑 |
| production_route | 实际准备、基础或结构、围护或装修、固定系统、试验及交付，按路线细分工程包 |
| market_state | 在声明场址安装完毕并以声明完整状态验收交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付用于有记录非住宅功能的声明结构、围护、装修及固定系统 |
| How much | 一栋完整验收建筑；按明确测量口径记录实测总建筑或内部或有效面积、层数、高度、占地及带单位的实际功能特定容量 |
| How well | 实际竣工配置与项目性能或验收记录，含交付装修及排除设备；不假定荷载、合规或批准 |
| How long or cycle | 一次有实际日期的施工至交付事件；不预设运营周期或使用寿命 |
| reference_flow_link | reference_building |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已交付机构、旅宿或其他非住宅建筑 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 场址或国家；建筑标识；主要用途与混合用途划分；实际交付日期和状态；实测面积定义与几何；结构体系；功能容量与实际性能条件；验收结构或装修或固定系统范围；排除设备；实际工程包；保留旧结构；上游交付门与缺失链接 |

item 是公开 Item(s) 的数量简写，不等于 kg、m2 或 m3。面积和容量限定功能或配置，不默默缩放参考实体。仅主体或分期交付须披露不完整性，不得作为完整装修交付建筑进行比较。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_entity | reference_building | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 一栋验收建筑为 1 item；采用 cp_handover 关联完整配置和实测几何，不虚构建筑质量。 |
| geometry_scope | glazing; roof_membrane | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 在 cp_materials 实测实际供货表面，区分毛量、净量、搭接与损耗；面积分子仍是同一实体的交换，不是新功能单位。 |
| energy_basis | lv_electricity; mv_electricity; diesel | 净热值，低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开能量属性和单位组。电力按 3.6 MJ/kWh 换算；柴油换算须有 cp_site 的实际质量或体积、密度与低位热值证据，不用通用发动机耗油率。 |
| volume_state | plywood; tap_water; groundwater; river_water; ready_mix | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按有记录状态计物理体积。质量票据换算须有相同材料、含水率或温度的实测或有来源密度，并保留原值；不默认建筑体积转数量或标准水密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 项目开工前实际场地状态及明确供货门的建材或构件 |
| starting_condition_role | foreground_starting_point |
| product_classification_scope | 上述纳入或排除范围的交付非住宅实体，现场服务不等于产品 |
| recursive_input_rule | 保留或回用建筑或主体按接收状态计入一次，披露继承负担和新增工程；不递归重建已供同类实体 |
| upstream_dataset_requirement | 分别链接相符建材或构件制造及从明确起点或交付门的实际运输；核对已安装构件和上游范围以免重复。链接缺失时不得声称完整从摇篮至交付 |
| disclosure | 实际准备、施工、调试与废物路线；上游链接；前置拆除；排除的后续使用、维护或更新、最终拆除或处理和边界外收益 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| construction_boundary | dataset | 采集实际开挖或回填、基础、结构、围护或隔墙或装修、固定系统安装、吊装、焊接或螺接、养护、试验或复试与验收，以及临设与废物转出。场外建材或设备制造为上游，不自动属于现场前景。此范围本身不等于完整从摇篮至大门或全寿命 LCA。 | rics-wlca-2024 |
| actual_route | all inventory rows | 流卡是原子适用性起点，不是固定工程量清单。所有实际使用构件、涂层、接缝、化学品、燃料、包装和废物须分别列行，使用同一参考、采集和证据规则。路线不适用须有证据；身份未解决不能排除真实路线或遗漏负担。 | jrc-levels-boq-2021; un-cpc-3-53129 |
| water_emissions | utilities; waste | 区分产品供水、自然取水、循环回用、降水和收集的送处理液体。实际排放成分、空气物种和受纳介质须有证据；噪声或振动及土地影响须结合活动、位置、持续时间评估，披露缺失交换身份或评价方法，不编造通用必然排放。 | epa-concrete-washout-2012; epa-construction-dust-2010 |
| transport_split | dataset | 明确分开制造、实际进场运输、场内移动、废物转出和处理；cp_transport 保留路线距离、载荷及空返。用相符提供者添加各运输方式的原子货运服务。运输服务已含燃料不重复算现场燃料；不预设距离。 | rics-wlca-2024 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| site | 场地准备与土方工程 | required |  | 前景生产 | 每声明的参考流 |
| structure | 基础与结构施工 | required |  | 前景生产 | 每声明的参考流 |
| enclosure | 围护、隔墙与装修 | required |  | 前景生产 | 每声明的参考流 |
| services | 固定建筑系统及类别专用装修 | required |  | 安装 | 每声明的参考流 |
| utilities | 现场公用工程及直接环境交换 | required |  | 施工前景 | 每声明的参考流 |
| temporary | 临时工程与共用施工设备 | conditional | Actual temporary works or shared plant are used / 实际使用临时工程或共用设备 | 前景支持 | 每声明的参考流 |
| waste | 施工废物分流与转出 | conditional | Actual waste or treatment-bound liquid crosses the boundary / 实际废物或送往处理的液体跨边界 | 废物管理 | 每声明的参考流 |
| handover | 试验、调试与验收交付 | required |  | 验收 | 每声明的参考流 |

### 过程：场地准备与土方工程（`site`）

#### 输入

##### 产品流

###### 基础垫层碎石 （`subbase`）

仅用于实际碎石垫层；保留粒级、含水率及称重到货量。现场回用土为内部转移，不作为外购骨料。

- 选定流：基础垫层碎石
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

#### 输出

##### 产品流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 废物流

###### 运出处置的未污染开挖矿质土 （`soil_disposal`）

仅在实际开挖土作为废物运出时记录；保留原状或松方状态、质量票据换算的密度证据、污染检测与去向。

- 选定流：运出处置的未污染开挖矿质土
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_waste 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`rics-wlca-2024`

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

### 过程：基础与结构施工（`structure`）

#### 输入

##### 产品流

###### 浇筑前交付的预拌混凝土 （`ready_mix`）

预拌路线条件行：采集实际等级、配方、到货体积、坍落度或状态，以及泵送、浇筑、振捣和养护记录；供货混凝土内含水不重复计入。现场搅拌须按实际配料票另列水泥、各骨料、外加剂和拌合水。

- 选定流：浇筑前交付的预拌混凝土
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 钢筋，钢制建筑材料 （`rebar`）

仅用于符合公开身份的实际供货热轧低合金钢筋，C≤0.2%；记录牌号和供货形态。现场切断、弯曲及绑扎单独采集活动；其他成分或已制成组件须另核实身份。

- 选定流：钢筋，钢制建筑材料 `43050e3b-42be-465c-a021-17f606484151`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 加工成品结构钢梁 （`steel_beam`）

仅在实际安装时纳入；计量成品梁及声明的涂层和节点；吊装、螺栓连接和焊接活动仍属施工前景。不得用轧制型材或焊接服务代替成品梁。

- 选定流：加工成品结构钢梁
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 预制钢筋混凝土结构柱 （`precast_column`）

仅用于实际预制路线；记录柱几何、钢筋及预埋件范围、到货状态及吊装、连接和灌浆施工；不重复计算厂内钢筋。

- 选定流：预制钢筋混凝土结构柱
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 结构胶合木梁 （`timber_beam`）

仅用于实际胶合木结构；记录树种、含水率、层合、处理及几何净体积；连接件和安装活动另计。

- 选定流：结构胶合木梁
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 烧结砖 （`masonry_brick`）

仅用于与供货产品相符的烧结砖；保留实际黏土或矿物成分及尺寸。非烧结砌块、耐火制品及其他砌体分别列原子行。

- 选定流：烧结砖 `aedc2027-2154-4b0e-95fd-9baeb46d4153`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 水泥砂砌筑砂浆 （`mortar`）

仅用于实际水泥砂砂浆；采集供货配方，或将现场水泥、砂、水分别列出且不重复负担；记录湿态及实际质量，不预设砂比例。

- 选定流：水泥砂砌筑砂浆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 结构钢螺栓 （`steel_bolt`）

仅用于实际结构螺栓节点；注明等级、尺寸、涂层及螺母和垫圈是否另供。

- 选定流：结构钢螺栓
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

#### 输出

##### 产品流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

### 过程：围护、隔墙与装修（`enclosure`）

#### 输入

##### 产品流

###### 中空玻璃 （`glazing`）

仅用于供货中空玻璃组件，测量玻璃面积、玻片成分或厚度及空腔配置。公开范围含内部间隔框、干燥剂和密封组装，不得剥离或重复计入。建筑外窗框不同，且仅在供货清单未包括时单列。

- 选定流：中空玻璃 `12053592-e6c4-4c56-ad15-a36a267c500a`
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 建筑成品铝窗框 （`window_frame`）

仅列实际另供外窗框，扣除已含于玻璃或整窗组件的部分；保留合金、表面处理和洞口几何。

- 选定流：建筑成品铝窗框
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 沥青基防水卷材 （`roof_membrane`）

仅用于与公开产品范围相符的实际沥青基卷材；记录配方、胎基、厚度、搭接及到货和安装面积。其他防水体系另核身份。

- 选定流：沥青基防水卷材 `78f09f81-deb9-42dd-9418-7860faee0a2e`
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 岩矿棉 （`rock_wool`）

仅用于实际岩矿棉保温或吸声材料；按产品记录采集粘结剂、面层范围及密度或厚度，不沿用公开说明的回收含量比例或默认热处理能耗。

- 选定流：岩矿棉 `3a298360-f298-4a11-999e-11943f142cec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 石膏板 （`gypsum_board`）

仅用于与身份相符的实际面层石膏芯板；计量板质量及安装废料；声学、防火或湿区性能以项目记录为准。

- 选定流：石膏板 `0cf61f85-2df7-4f65-be58-257d4252fb02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

#### 输出

##### 产品流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

### 过程：固定建筑系统及类别专用装修（`services`）

#### 输入

##### 产品流

###### 低压电缆 （`power_cable`）

本成品低压电缆身份仅适用于声明工厂门端的实际中国供货且产品规格匹配GB/T12706.1-2020。其他供货地域、电压或规格须另核身份；引用2020版规格不代表当前通用批准。记录导体、截面、芯数、绝缘及电压；保留公开长度和实测安装长度，不替换为质量。

- 选定流：低压电缆 `49101b44-20cc-46a0-adfb-af07e4cc8908`
- 流属性/单位：长度 `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 成品镀锌钢通风管道 （`ventilation_duct`）

仅在固定通风系统属于交付范围时；识别钢材、镀层、风管几何和加工交付门。供货范围未含的防火阀、绝热和风机须分别列行。

- 选定流：成品镀锌钢通风管道
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 完整建筑空气处理机组 （`air_handler`）

仅用于安装的完整空气处理机组；从实际设备表保留风量、过滤、冷热组件及控制范围。医院过滤或压力、学校通风、酒店舒适需求是实际项目限定，不设通用默认值。

- 选定流：完整建筑空气处理机组
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 用于建筑安装的完整乘客电梯 （`passenger_lift`）

仅在交付乘客电梯时；记录载客量、行程、停层和驱动配置，组件范围排除另计的井道结构。

- 选定流：用于建筑安装的完整乘客电梯
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 完整建筑 LED 灯具 （`led_luminaire`）

仅用于实际完整固定灯具；记录光输出、驱动和壳体范围、应急配置及安装数量；LED 模组不能代替整灯。

- 选定流：完整建筑 LED 灯具
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 自动消防喷淋头 （`sprinkler_head`）

仅用于已验收消防设计中实际安装的喷淋头；采集额定类型、动作规格与数量。另供泵、管道和阀件分别计入，不用灭火器组件代替。

- 选定流：自动消防喷淋头
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 清洁铜制医用气体输送管 （`medical_gas_pipe`）

仅用于实际医疗用途安装：记录清洁医用铜管、外径或壁厚、验收洁净要求和实测长度；普通铜管不能证明此清洁状态。实际使用的各试验或吹扫气体及排放分别列行，不预设氧气或氮气用量。

- 选定流：清洁铜制医用气体输送管
- 流属性/单位：长度 `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 不锈钢商用厨房排烟罩 （`kitchen_hood`）

仅在餐饮、酒店或机构厨房实际交付固定烟罩时；记录钢级、尺寸、油烟过滤或风机范围及安装状态。炊事设备和餐饮运营不自动属于建筑交付范围。

- 选定流：不锈钢商用厨房排烟罩
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

###### 固定钢制通信配线柜 （`telecom_cabinet`）

仅用于实际固定建筑配线柜；记录壳体及内含五金。广播发射机、服务器和业务电子设备属于不同运营设备，不默认为建筑部件。

- 选定流：固定钢制通信配线柜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_materials 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-levels-boq-2021`

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

#### 输出

##### 产品流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

### 过程：现场公用工程及直接环境交换（`utilities`）

#### 输入

##### 产品流

###### 交流电 （`lv_electricity`）

仅在有实际场址和电压证据、且为中国用户端低于 1 kV 电网平均供电时采用。计量施工、储存、吊装、安装及试验负荷；按每千瓦时 3.6 MJ 换算。其他地域或电压另配身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值，低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_site 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site`
- 来源：`rics-wlca-2024`

###### 交流电 （`mv_electricity`）

仅用于与实际接入相符的中国用户端 1–35 kV 电网平均供电；与低压计量分清，避免变压器或下游电量重复。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值，低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_site 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site`
- 来源：`rics-wlca-2024`

###### 柴油 （`diesel`）

仅用于与身份相符的实际蒸馏精炼柴油，保留净热值属性。采集燃料质量或体积、实测密度及供应商或检测低位热值以换算 MJ，记录化石或生物份额。现场挖机、起重机、泵和发电机保留运行记录；不重复燃烧负担与已含燃烧的供电数据。

- 选定流：柴油 `fbd79004-188c-47a4-900b-96005d994690`
- 流属性/单位：净热值，低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_site 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site`
- 来源：`rics-wlca-2024`

###### 自来水 （`tap_water`）

本体积身份仅适用于匹配其声明香港水处理厂接口及供水边界的实际香港处理水生产/供应。其他供水地域或供方接口须另行核实原子身份，不得采用该地域代理。分别实测养护、洗浆、临时生活设施及调试用水，不重复供货产品内含水；保留体积/m3，不把原件次要属性中的筛查1000kg/m3当成默认质量换算。

- 选定流：自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_site 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site`
- 来源：`rics-wlca-2024`

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

###### 地下水 （`groundwater`）

仅用于实际从环境进入现场的淡地下水直接取用；注明井源、场址或国家、时间及计量。外购供水及外排降水另计，不用此资源流代替废水。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_site 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site`
- 来源：`rics-wlca-2024`

###### 河水 （`river_water`）

仅用于实际河流淡水直接取用；保留河流和取水地点或国家以支持水影响评价。不得代替未指定淡水、湖水或排水。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_site 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site`
- 来源：`rics-wlca-2024`

#### 输出

##### 产品流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

###### 二氧化碳（化石源） （`fossil_co2`）

条件性记录实测或建模的即时化石碳 CO₂ 向室外空气排放；仅在更细空气子介质未明确且已披露时使用未指定空气身份。只采用实际燃料化石碳及氧化证据或相符发动机系数；生物源和土地利用 CO₂ 分列，不用长期或土壤或水排放代替。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_emissions 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`rics-wlca-2024`

###### 二氧化氮 （`nitrogen_dioxide`）

仅在有单独证据证明实际 NO₂ 即时排向室外未指定空气时采用。以 NO₂ 当量表示的 NOx、NO、N₂O 或亚硝酸盐不得直接填此行；物种换算须有证据，未解决物种保留数据缺口。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_emissions 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`rics-wlca-2024`

###### 颗粒物 (PM10) （`pm10`）

仅用于有证据的即时室外空气 PM10 质量排放，披露更细空气子介质未明确；区分扬尘或发动机贡献及控制效率。总悬浮颗粒、PM2.5 或沉降土不等于 PM10，不采用 EPA 历史总悬浮颗粒系数或臆定换算。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_emissions 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`epa-construction-dust-2010`

### 过程：临时工程与共用施工设备（`temporary`）

#### 输入

##### 产品流

###### 胶合板 （`plywood`）

仅用于与此供货状态相符的实际单板胶合压制胶合板，按厚度和几何计量净体积。保留投用和回用台账，重复使用不等于重复购入，制造负担份额须有依据。

- 选定流：胶合板 `8b239d58-5fc2-40a5-8003-33f4082bc995`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_assets 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`rics-wlca-2024`

###### 液压挖掘机 （`excavator_share`）

仅用于现场实际自有或租用液压挖机；记录具体配置及按有证据累计活动计算的制造负担份额。燃料和运行另计，寿命或总活动未知时不得猜测份额。

- 选定流：液压挖掘机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_assets 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`rics-wlca-2024`

###### 塔式起重机 （`crane_share`）

仅用于实际塔吊投用；保留资产号、配置、吊次或工时及跨场址累计份额台账，不每项目重置完整塔吊制造负担。

- 选定流：塔式起重机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_assets 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`rics-wlca-2024`

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

#### 输出

##### 产品流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

### 过程：施工废物分流与转出（`waste`）

#### 输入

##### 产品流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

#### 输出

##### 产品流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 废物流

###### 送往处置的硬化混凝土施工余料 （`concrete_scrap`）

仅用于实际混凝土单一废物，与钢筋和砖分别分离；记录成分、称重票、处置路线及另行回收产品。混合建筑垃圾不能代替此身份。

- 选定流：送往处置的硬化混凝土施工余料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`rics-wlca-2024`

###### 收集的水泥质混凝土洗浆水 （`washwater`）

仅用于实际收集且转出处理的洗浆液或浆液；记录固含量、pH、容纳体积和去向。如分离则回收固体另计；排放成分和受纳水体须逐项证实，不设通用水排放。

- 选定流：收集的水泥质混凝土洗浆水
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_waste 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-concrete-washout-2012`

###### 送往场外处理的基坑降水 （`dewatering`）

仅用于实际作为废物送往场外处理的降水液体；记录来源、水质、泵排体积及路线。按有记录路线回排的清水及各成分属于另外的基础流交换，不填此处置行。

- 选定流：送往场外处理的基坑降水
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_waste 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`rics-wlca-2024`

###### 废弃聚乙烯包装薄膜 （`film_waste`）

仅用于实际作为废物转出的聚乙烯薄膜；记录聚合物纯度或污染及回收或处置凭证；交易的再生聚合物产品及 PVC 膜属于不同流。

- 选定流：废弃聚乙烯包装薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste 采集实际归属交换量，保留行单位及接收或转出状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`rics-wlca-2024`

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

### 过程：试验、调试与验收交付（`handover`）

#### 输入

##### 产品流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

#### 输出

##### 产品流

###### 已交付机构、旅宿或其他非住宅建筑 （`reference_building`）

一栋完整验收的场址特定建筑，包含声明的结构、围护和固定设施配置；产出是实际交付实体，不是面积服务、票据或施工合同。

- 选定流：已交付机构、旅宿或其他非住宅建筑
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 件
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 来源：`un-cpc-3-53129`

##### 废物流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

##### 基本流

此处不规定通用必然交换；实际适用原子交换须逐项补充。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| shared_site | dataset | 先细分工程包并直接计量或追踪归属材料、能量和废物。如不可避免，对每项共用活动记录物理因果驱动量，如设备工时、供货量或实际服务需求。面积不自动适用于不同医院、剧院或酒店系统。未证明关系保留审查；经济分配须论证及敏感性分析。 | ghg-allocation-2011 |
| asset_conservation | temporary | 按资产保留跨项目、期间及回用累计台账。用项目活动相对于有证据、相符的总服务或活动基准分配制造负担，累计归属份额不得大于一。保留未分配份额及有依据寿命或活动估计；总基准未知保留审查。不复制 RICS 示例回用次数或寿命，不每场址重置完整制造负担。 | rics-wlca-2024 |
| waste_recovery | waste | 废物转出不等于共产品抵扣。记录分流、接收者、处理及是否实际存在交易回收产品。循环假设及边界外替代独立披露；不自动抵扣原生制造，不重复外购回收材料负担。 | ghg-allocation-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_handover | handover | 参考实体 | foreground_record | 建筑号；用途；带日期验收；配置；实际几何；面积口径；容量；性能证据；排除项 | 测量竣工尺寸并核对签署验收、图纸、固定系统设备表和装修范围；本 PCR 不推定合规 | item | 每事件或读数及工程包结算 | 实际项目开工至验收交付 | 声明建筑及归属共用现场 | 每声明的参考流 | 可追溯原始记录；校准测量；核对及不确定性 |
| cp_materials | structure; enclosure; services; site | 原子供货或安装交换 | foreground_record | 行号；到货票；供应商门；成分；数量或单位；密度；几何；安装量；剩余；退货；批次与不确定性 | 按工程包核对供货称重或体积或长度或面积记录、实测竣工清单及库存变动；记录组件内含部件和实际路线 | row unit | 每事件或读数及工程包结算 | 实际项目开工至验收交付 | 声明建筑及归属共用现场 | 每声明的参考流 | 可追溯原始记录；校准测量；核对及不确定性 |
| cp_site | utilities | 现场燃料或电水 | foreground_record | 表号；日期读数；电压或国家；设备号或工时；燃料质量或体积或密度或低位热值或碳来源；水源或用途；分配驱动 | 校准表、燃料票及设备或场地台账包含试验或复试负荷；核对共用供给、自发电及电网账单；记录有依据换算 | MJ; m3 | 每事件或读数及工程包结算 | 实际项目开工至验收交付 | 声明建筑及归属共用现场 | 每声明的参考流 | 可追溯原始记录；校准测量；核对及不确定性 |
| cp_waste | site; waste | 原子废物转出 | foreground_record | 行号；成分；污染；实际质量或体积或状态；适用固含量或 pH；容器；日期；接收者；处理凭证 | 分流称重票或校准容器或泵量记录、实际物质测试及可追溯接收记录；区分回用、处置和直接排放 | row unit | 每事件或读数及工程包结算 | 实际项目开工至验收交付 | 声明建筑及归属共用现场 | 每声明的参考流 | 可追溯原始记录；校准测量；核对及不确定性 |
| cp_emissions | utilities | 单项直接基础流排放 | foreground_record | 物质或 CAS；化石或生物来源；实测排放质量；设备或负荷；系数来源或版本；控制；位置；介质或子介质；时间；不确定性 | 采用实测排放或有来源设备或活动特定系数，保留原始活动与物种证据；区分 NO₂ 与 NOx 当量、PM10 与总悬浮颗粒；另评噪声、振动或土地 | kg | 每事件或读数及工程包结算 | 实际项目开工至验收交付 | 声明建筑及归属共用现场 | 每声明的参考流 | 可追溯原始记录；校准测量；核对及不确定性 |
| cp_assets | temporary | 临设产品或设备份额 | foreground_record | 资产号；成分或配置；净材料体积；投用；使用或回用；当前活动；有依据总活动；历史分配份额；剩余份额 | 测量临设材料几何并读设备或模板台账；保留提供者制造范围及有依据活动或寿命基准，跨全部项目核对 | row unit | 每事件或读数及工程包结算 | 实际项目开工至验收交付 | 声明建筑及归属共用现场 | 每声明的参考流 | 可追溯原始记录；校准测量；核对及不确定性 |
| cp_transport | site; waste | 分方式运输交换 | foreground_record | 货物身份；实际质量；起终点；实际路线距离；方式或车辆；载荷；空返；提供者范围 | 读取物流或称重及实际路线或方式台账；仅在有相符证据时添加原子运输服务身份及提供者单位换算 | provider unit | 每事件或读数及工程包结算 | 实际项目开工至验收交付 | 声明建筑及归属共用现场 | 每声明的参考流 | 可追溯原始记录；校准测量；核对及不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| reference_aggregation | 所有清单行 | 仅汇总声明施工或验收事件内实际归属交换；各交换分子保留行单位，基准为每声明的参考流；参考产出保持 1 件。核对期初期末库存、退货、安装量及实际损耗；内部阶段转移不是新外购。 | cp_materials; cp_site; cp_waste; cp_handover | 每声明的参考流的行数量 | jrc-levels-boq-2021 |
| conversion_evidence | lv_electricity; mv_electricity; diesel; plywood; ready_mix | 电力千瓦时按精确 3.6 系数换为 MJ。其他体积或质量、燃料能量换算采用同态实测或供应商支持密度与低位热值，保留原单位及不确定性；不从无关身份获取通用物理常数。 | cp_site; cp_materials; cp_assets | 每声明的参考流的实际行单位交换 | rics-wlca-2024 |
| direct_release | fossil_co2; nitrogen_dioxide; pm10 | 保留实测排放质量；如计算，则记录实际相符活动与单独有证据物质或设备或介质特定系数及控制基准。物种或系数缺失为不确定，不作为零；本 PCR 不规定必用系数。 | cp_emissions; cp_site | 每声明的参考流的实际物质千克数 | epa-construction-dust-2010; rics-wlca-2024 |
| supported_asset_share | excavator_share; crane_share; plywood | 仅按 asset_conservation 赋有依据项目份额；保留分子活动、相符总基准及所有历史份额。未知基准属审查缺口，须继续披露。 | cp_assets | 每声明的参考流的归属负担 | rics-wlca-2024 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| identity_state | all inventory rows | 物质或物种、供货或废物状态、组件范围与真实公开属性或单位精确相符，不按名称强配 | 供应商及原始身份或计量记录 |
| building_function | reference_building | 实测几何、实际用途或容量及性能或验收状态；区分仅主体、专用系统及运营设备 | cp_handover |
| coverage_complete | dataset | 核对全部工程包、现场水电燃料、固定系统、包装及废物；披露不存在或未测交换、上游链接及缺失运输或处理 | cp_materials; cp_site; cp_transport; cp_waste |
| temporal_location | dataset | 实际施工时期与供货或场址地域；记录季节或天气相关施工、排放条件及不确定性，不编默认值 | cp_site; cp_emissions |
| commissioning_state | handover | 保留实际系统设备表、试验条件、失败或复试及带日期验收；GSA 示例不构成当地批准 | cp_handover; gsa-commissioning-2020 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| entity_gate | reference_building | 缺少实体配置、实测几何、明确面积口径、有记录功能或容量、交付状态或日期、范围排除项则拒绝；只比较等效交付功能及阶段范围。 | un-cpc-3-53129 |
| inventory_gate | all inventory rows | 核查原子身份、公开中文名称、方向或类型、实际参考属性或单位、路线条件及重复组件；未确认 UUID 必须明确，不代表负担不存在。 | jrc-levels-boq-2021 |
| records_gate | dataset | 每项实际交换须有可追溯采集及同一参考汇总、实际几何或换算证据及阶段完整性。排放物种、设备分配基准或上游或处理链接未知时，相关结论仍不确定，不设为零。 | rics-wlca-2024; ghg-allocation-2011 |
| handover_gate | handover | 按项目要求和交付系统核查实际调试或复试记录；不得用其他用途路线掩盖必需安装系统缺失；施工至交付检查不验证未来寿命或运营性能。 | gsa-commissioning-2020 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一栋声明交付建筑实体的施工至交付前景数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 用于独立完成建筑模型中的已披露施工阶段组件；具有相符上游提供者的功能等效、配置或阶段匹配比较 |
| excluded_use | 自动完整从摇篮至大门或全寿命评价、每千克或每面积通用强度、运营建筑服务、建材制造替代、法律合规或科学批准 |
| required_metadata | 身份或用途或场址；验收配置及日期；带定义实测几何或容量；工程包或构件范围；固定系统及排除项；实际工序或运输或废物路线；参考；上游链接；分配及资产台账 |
| required_quality_disclosure | 原始记录覆盖、不确定性、换算基准、缺失 UUID 或提供者或数量或物种；排除生命周期阶段、专用系统或业主装修；证据地域或时期限制 |
| update_trigger | 用途、结构或装修或系统范围、面积定义或几何、交付事件、供应商路线、运输或废物处理、分配基准变化，或新增实际活动证据 |

## 11. 数据源

| 来源标识 | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-53129 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, pp. 277–278, 53121–53129. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 用途与实体边界，不作为施工配方 |
| jrc-levels-boq-2021 | official_guidance | JRC Level(s) indicator 2.1, version 1.1, January 2021, p. 24 Table 2. https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2021-01/UM3_Indicator_2.1_v1.1_34pp.pdf | 定性结构、核心系统及外部构件清单，不采用默认工程量或寿命 |
| rics-wlca-2024 | standard | RICS Whole life carbon assessment for the built environment, second edition, version 3 August 2024, §5.1.4 pp. 80, 82 (PDF pp. 88, 90). https://www.rics.org/content/dam/ricsglobal/documents/standards/Whole_life_carbon_assessment_PS_Sept23.pdf. | 施工、临时工程与废物阶段区分，以项目证据为准，不采用默认回用次数、寿命、碳强度或废物比例 |
| ghg-allocation-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9 p. 63, Tables 9.1–9.2 (PDF p. 65). https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 过程细分和有依据的分配关系，不采用数值份额 |
| epa-construction-dust-2010 | official_guidance | US EPA AP-42 §13.2.3 Heavy Construction Operations, January 1995, corrected February 2010, p. 13.2.3-1. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | 仅历史定性扬尘、活动和天气关系，不采用总悬浮颗粒系数、PM10 换算或现行许可结论 |
| epa-concrete-washout-2012 | official_guidance | US EPA EPA-833-F-11-006 Concrete Washout, February 2012, p. 1. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | 历史洗浆作业及收集液体与排放的区分，不采用默认浓度或现行法律结论 |
| gsa-commissioning-2020 | official_guidance | GSA Commissioning Guide, September 2020, p. 28, functional performance testing. Publisher-original copy hosted by WBDG: https://nibs-s3-wbdg3-production.s3.us-east-1.amazonaws.com/FFC/GSA/gsa_commissioning_guide_2020.pdf | 仅美国联邦项目试验记录示例，实际当地验收要求优先，不代表通用规范或批准 |
