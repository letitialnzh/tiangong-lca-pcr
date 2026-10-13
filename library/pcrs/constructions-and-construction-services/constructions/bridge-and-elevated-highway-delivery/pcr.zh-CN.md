---
pcr_id: pcr.constructions-and-construction-services.constructions.bridge-and-elevated-highway-delivery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 桥梁与高架公路交付

## 1. 范围与适用性

本PCR覆盖供各类陆路交通或行人使用的完整场址特定桥梁及高架桥，以及机动车高架公路，可采用金属、混凝土及有据的其他材料。产品是含基础下部结构、上部结构、桥面及声明固定设施的验收土木实体，不是施工服务或一包建材。钢及组合结构、现浇、预制预应力混凝土、木、砌体拱和索承路线都在范围内；每条实际路线均须项目记录及特定原子交换，示例行具有条件性，不使该材料成为必需品。

排除隧道、普通非高架道路、独立交付铁路路基轨道设施、单独制造的上游钢桥部件、运营服务及无关输水渡槽。整体交付桥头接线仅到明确约定接口，不默认纳入整条接续道路或铁路走廊。CPC说明也将车辆及人行地下通道与跨线通道列入53211：此类项目须披露分类歧义并审查适用性，不仅靠分类码解决重叠。实际交付的涉水基础及防冲刷纳入，不默认含河道疏浚或港口工程。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.bridge-and-elevated-highway-delivery |
| classification_refs | CPC 3.0 53221 |
| covered_products | 完整验收桥梁、高架桥及机动车高架公路，具有明确土木交付范围 |
| excluded_products | 隧道、独立道路铁路走廊、上游构件、施工运营服务、输水渡槽 |
| representative_product | 一个经实测并验收的完整桥梁或高架公路实体 |
| production_route | 实际基础、临时工程、结构架设、桥面固定设施、试验移交；材料路线具有条件性 |
| market_state | 声明场址的完工状态，具有记录的交通用途及固定设施状态并验收 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供有据的陆路交通或人行跨越，或高架机动车通道，作为交付土木实体 |
| How much | 一个完整验收实体；按声明口径实测线形长度、各跨跨径、桥面宽度面积、车道轨道人行配置、净空及接口 |
| How well | 实际结构、材料等级、设计性能及检查证据、荷载用途限制、地基地质及固定安全排水配置，不默认载荷 |
| How long or cycle | 一次有日期的实际施工至移交事件，不假设运营寿命 |
| reference_flow_link | reference_bridge |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收交付的桥梁或高架公路 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 实体场址编号、签署移交及日期、交通模式用途限制、线形长度跨径表、桥面宽度面积口径及几何、净空、结构基础路线材料状态、固定设施桥头接口、临时工程、性能验收证据、上游边界、排除及未测阶段 |

item是公开Item(s)的显示简写。全部清单与采集分母指向同一个完整交付实体，实际桥面面积和长度描述功能配置，不允许使用每桥、每公里或每平方米的平均质量换算。比较须匹配实际功能、几何、结构性能及生命周期范围。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_handover记录一个完整验收实体，每个协议均保持同一声明参考流，不假定质量M。 |
| geometry | 参考配置 | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 按定义几何保留实测桥面面积、长度宽度及跨径接口记录，属于限定信息而非清单产出归一化。 |
| electricity_basis | lv_power; mv_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留真实能量参考属性，使用精确3.6 MJ/kWh，保留供电电压国家。 |
| liquid_basis | concrete; mains_water; river_water; washwater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 测量体积，质量换算仅采用实际材料状态的实测密度。柴油是质量行，实测升数换算须实际密度。 |
| freight_basis | road_freight | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` | t*km | 实际货物吨数乘实际运输段公里数，每声明参考流，不是参考产品质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 施工前有据的实际场址及安装前明确供应商或现场边界的建设产品资产 |
| starting_condition_role | foreground_starting_point |
| product_classification_scope | 声明接口内完整交付的桥梁或高架公路实体 |
| recursive_input_rule | 既有桥梁构件回用按实际接收状态一次记录，披露继承负担与新干预，不递归重建同类 |
| upstream_dataset_requirement | 核对边界并分别链接匹配材料构件制造与实际货运，缺失上游链接须披露，缺失时不声称完整cradle-to-gate |
| disclosure | 实际清场基础临时工程架设桥面检查至移交；使用维护更新、交通运营、后期拆除及下游处理抵扣排除 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| construction_gate | dataset | 采集实际工序至签署移交，区分上游加工、运输及现场安装。既有拆除与临时拆除和后期寿终拆除分别披露。 | fhwa-fp24-bridges |
| route_completeness | inventory | 保留全部实际材料路线及固定设施，补充每个缺失的特定原子输入输出，包括现场拌制组分、锚固五金、涂装、铁路专用桥面及防冲刷。示例不是完整物料单或通用配方。 | un-cpc-bridges-2025; fhwa-fp24-bridges |
| environment_gate | utilities; waste | 采购水、直接取水、地下水降水、收集洗出水及排放分开。仅在有据时补充实测单物质与介质，不杜撰必然排放；噪声振动、泥沙浊度、土地生态扰动及未測排放显式评估。 | epa-concrete-washout-2012; epa-construction-dust-2010 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| ground | 场址调查、准备与土方 | required | 实际交付设计的开挖、回填、通道、排水与环境保护，原有拆除另披露 | foreground | per declared reference flow |
| foundation | 基础及下部结构施工 | required | 仅实际采用的扩大基础、打入桩、钻孔桩、墩台路线，所需围堰降水纳入 | foreground | per declared reference flow |
| temporary | 临时工程安装、使用与拆除 | conditional | 实际模板、支架、撑护、围堰及架设支撑，区分回用资产制造和运行 | foreground | per declared reference flow |
| structure | 桥梁上部结构架设与连接 | required | 实际钢、现浇或预制预应力混凝土、木、砌体或索承路线，全安装构件及现场操作 | foreground | per declared reference flow |
| deck | 支座、桥面、铺装及桥梁固定设施 | required | 实际完整交付桥面配置；条件性支座接缝防水、防护排水、固定照明及铁路专用设施 | foreground | per declared reference flow |
| utilities | 设备、现场公用工程与直接环境交换 | required | 全部归属施工及检查活动，包括分包、发电燃烧与实测治理，不重复计量 | foreground | per declared reference flow |
| waste | 施工废物收集与外运 | conditional | 每种实际分类废物、洗出水及降水处理；污染土披露并补充特定处理流 | foreground | per declared reference flow |
| transport | 实际交货与外运废物运输 | conditional | 仅上游未含运输段，场内设备移动归公用工程 | foreground | per declared reference flow |
| handover | 检查与验收实体移交 | required | 一个实际完整实体；记录施工试验消耗、缺陷返工及临时工程清除 | reference_product | per declared reference flow |

### 过程： 场址调查、准备与土方 (`ground`)

#### 输入

##### 产品流

###### 基础回填碎石 (`stone_fill`)

仅记录实际接收的粒级与含水状态；测量保留填料并称量进货，不默认厚度或压实系数。

- 选定流： 基础回填碎石
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_ground的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_ground`
- 来源： `fhwa-fp24-bridges`

#### 输出

##### 废物流

###### 送处置的未污染开挖矿质土 (`soil_export`)

仅记录实际外运废土；分别测量原状与松散体积，确认污染状况并保留去向。场内回用土是内部转移。

- 选定流： 送处置的未污染开挖矿质土
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 来自cp_ground的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_ground`
- 来源： `fhwa-fp24-bridges`

### 过程： 基础及下部结构施工 (`foundation`)

#### 输入

##### 产品流

###### 制成的钢管基础桩 (`pile`)

仅用于实际钢桩打入路线；保留截面、牌号、涂层、长度、打桩记录和截桩废料。灌注钢管桩的混凝土另列。

- 选定流： 制成的钢管基础桩
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_foundation的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_foundation`
- 来源： `fhwa-fp24-bridges`

###### 浇筑前预拌结构混凝土 (`concrete`)

仅用于实际桩、承台及墩台基础下部结构预拌混凝土；保留配合比票据、浇筑几何、泵送振捣养护，现场拌制须拆分组分。

- 选定流： 浇筑前预拌结构混凝土
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 来自cp_foundation的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_foundation`
- 来源： `fhwa-fp24-bridges`

###### 钢筋，钢制建筑材料 (`rebar`)

仅用于牌号与尺寸有据的实际热轧钢筋；汇总基础下部结构现浇部位称量和钢筋表，切割废料另计，不重复预制件内已含钢筋。本UUID仅适用于C≤0.2%的低合金热轧钢筋；其他钢筋保留另一精确原子行及未解决UUID。

- 选定流： 钢筋，钢制建筑材料 `43050e3b-42be-465c-a021-17f606484151`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_foundation的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_foundation`
- 来源： `fhwa-fp24-bridges`

### 过程： 临时工程安装、使用与拆除 (`temporary`)

#### 输入

##### 产品流

###### 胶合板模板 (`formwork`)

仅用于实际胶合板模板；记录安装板面积、板件身份、制造边界及全使用期回用台账，分摊制造份额，不在每次浇筑重置全部负担。

- 选定流： 胶合板模板
- 流属性/单位： 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则： 来自cp_temporary的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_temporary`
- 来源： `fhwa-fp24-bridges`

###### 可回用钢围堰板桩 (`sheet_pile`)

仅用于实际钢板桩围堰；保留安装拆除、资产台账、制造份额、降水和实际损失，临时工程不是永久产出。

- 选定流： 可回用钢围堰板桩
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_temporary的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_temporary`
- 来源： `fhwa-fp24-bridges`

### 过程： 桥梁上部结构架设与连接 (`structure`)

#### 输入

##### 产品流

###### 制成的桥梁结构钢梁 (`steel_girder`)

钢桥或组合桥路线：记录构件编号、供货加工及涂装状态、实测质量、吊装或顶推顺序、现场连接和检查。钢厂钢材不是已加工桥梁钢梁。

- 选定流： 制成的桥梁结构钢梁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_structure的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`
- 来源： `fhwa-fp24-bridges`

###### 预应力预制混凝土桥梁梁体 (`precast_girder`)

仅用于交付的完整预应力梁体；记录每种型号、几何信息及内含钢筋、孔道和锚具范围，记录架设接缝，不重复工厂张拉负担。

- 选定流： 预应力预制混凝土桥梁梁体
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 来自cp_structure的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`
- 来源： `fhwa-fp24-bridges`

###### 制成的桥梁结构木梁 (`timber_member`)

木桥仍在范围内；保留树种、等级、防腐或胶合状态、实测体积和含水率，原始锯材不能自动代表已处理成品木梁。

- 选定流： 制成的桥梁结构木梁
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 来自cp_structure的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`
- 来源： `fhwa-fp24-bridges`

###### 切制天然石桥拱券块 (`masonry_stone`)

用于实际石砌拱桥；保留石种、成品尺寸、砌筑、拱架和接缝用量，其他材料路线须补充其实际原子交换。

- 选定流： 切制天然石桥拱券块
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 来自cp_structure的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`
- 来源： `fhwa-fp24-bridges`

###### 预应力钢绞线 (`strand`)

仅用于现场施加的预应力；记录牌号、绞线质量、孔道长度、张拉设备、张拉记录及锚固灌浆，不重复供货预制件内钢绞线。

- 选定流： 预应力钢绞线
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_structure的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`
- 来源： `fhwa-fp24-bridges`

###### 制成的桥梁钢斜拉索 (`stay_cable`)

用于斜拉桥：保留实际索结构、护套、锚固范围、安装与张拉；悬索桥须分别记录实际主缆、吊索及塔部交换。

- 选定流： 制成的桥梁钢斜拉索
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_structure的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`
- 来源： `fhwa-fp24-bridges`

###### 钢制预应力锚具 (`anchor`)

仅用于独立供应锚具，记录型号数量及对应索或绞线范围，不重复完整供货索内的锚具。

- 选定流： 钢制预应力锚具
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 来自cp_structure的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`
- 来源： `fhwa-fp24-bridges`

###### 水泥基预应力孔道灌浆料 (`grout`)

仅用于实际灌浆；记录配方、批次质量、孔道体积、压浆与退料。现场拌制须拆分水泥、每种添加剂及拌合水，不规定配方。

- 选定流： 水泥基预应力孔道灌浆料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_structure的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`
- 来源： `fhwa-fp24-bridges`

###### 高强度结构钢螺栓 (`bolt`)

仅用于实际螺栓连接；记录牌号、类型、数量及安装检验，独立供应的螺母和垫圈各自另列。

- 选定流： 高强度结构钢螺栓
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 来自cp_structure的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`
- 来源： `fhwa-fp24-bridges`

###### 钢制药芯焊丝 (`weld_wire`)

仅用于实际现场药芯焊接；保留耗材规格及消耗质量，焊接电力与每种保护气体另列，厂内焊接归供应加工阶段。

- 选定流： 钢制药芯焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_structure的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`
- 来源： `fhwa-fp24-bridges`

###### 浇筑前预拌结构混凝土 (`structure_concrete`)

仅用于实际现浇上部结构，按构件独立计量；预拌交货与浇筑几何、泵振捣养护及退料核对，不重复预制件内混凝土，现场拌制拆分各组分。

- 选定流： 浇筑前预拌结构混凝土
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 来自cp_structure的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`
- 来源： `fhwa-fp24-bridges`

###### 钢筋，钢制建筑材料 (`structure_rebar`)

仅用于实际现浇上部结构独立供应的C≤0.2%低合金热轧钢筋，保留牌号尺寸称量，不重复完整预制件内钢筋，其他牌号须另选身份。

- 选定流： 钢筋，钢制建筑材料 `43050e3b-42be-465c-a021-17f606484151`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_structure的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_structure`
- 来源： `fhwa-fp24-bridges`

### 过程： 支座、桥面、铺装及桥梁固定设施 (`deck`)

#### 输入

##### 产品流

###### 叠层弹性体桥梁支座 (`bearing`)

仅用于实际叠层弹性体支座；记录图纸、橡胶钢材范围、数量及安装。滑动、盘式、滚轴和摇轴支座须另列精确行，整体式桥梁注明无支座。

- 选定流： 叠层弹性体桥梁支座
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 来自cp_deck的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_deck`
- 来源： `fhwa-fp24-bridges`

###### 钢制桥梁伸缩缝装置 (`joint`)

仅用于实际钢制伸缩装置，记录位移、类型、长度及内含范围；无缝结构注明不存在，供应装置未含安装灌浆或密封件另列。

- 选定流： 钢制桥梁伸缩缝装置
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 来自cp_deck的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_deck`
- 来源： `fhwa-fp24-bridges`

###### 桥面沥青基防水卷材 (`waterproof`)

仅用于符合实际桥面规格的卷材；测量采购面积并保留搭接、裁剪量，底涂另列。

- 选定流： 桥面沥青基防水卷材
- 流属性/单位： 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则： 来自cp_deck的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_deck`
- 来源： `fhwa-fp24-bridges`

###### 沥青混合料 (`asphalt`)

仅用于实际采购的骨料、粘结剂和填料沥青混合料铺装；记录粘结剂、配合比、温度、供应边界、称量进货和退料。水泥混凝土、木桥面及铁路桥面铺装须使用各自实际行。

- 选定流： 沥青混合料 `ad29a865-2fd6-41da-99d2-9669b9c7984d`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_deck的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_deck`
- 来源： `fhwa-fp24-bridges`

###### 制成的钢制桥梁栏杆板 (`railing`)

仅用于实际栏杆，记录几何、锚固及防腐状态，区分道路防撞护栏与人行栏杆。

- 选定流： 制成的钢制桥梁栏杆板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_deck的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_deck`
- 来源： `fhwa-fp24-bridges`

###### 聚氯乙烯桥梁排水管 (`drain`)

仅用于实际PVC排水管；记录尺寸、质量、安装及排水口。交付的其他聚合物或金属管、泄水口、照明及铁路专用固定设施须分别补充。

- 选定流： 聚氯乙烯桥梁排水管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_deck的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_deck`
- 来源： `fhwa-fp24-bridges`

###### 浇筑前预拌结构混凝土 (`deck_concrete`)

仅用于实际现浇桥面，按构件独立计量；预拌交货与浇筑几何、泵振捣养护及退料核对，不重复预制件内混凝土，现场拌制拆分各组分。

- 选定流： 浇筑前预拌结构混凝土
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 来自cp_deck的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_deck`
- 来源： `fhwa-fp24-bridges`

###### 钢筋，钢制建筑材料 (`deck_rebar`)

仅用于实际现浇桥面独立供应的C≤0.2%低合金热轧钢筋，保留牌号尺寸称量，不重复完整预制件内钢筋，其他牌号须另选身份。

- 选定流： 钢筋，钢制建筑材料 `43050e3b-42be-465c-a021-17f606484151`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_deck的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_deck`
- 来源： `fhwa-fp24-bridges`

### 过程： 设备、现场公用工程与直接环境交换 (`utilities`)

#### 输入

##### 产品流

###### 交流电 (`lv_power`)

仅用于实际中国用户端低于1 kV的电网供电，保留电表电压和地域。其他供电须选匹配身份，自发电不是本采购电网输入。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 来自cp_utilities的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源： `fhwa-fp24-bridges`

###### 交流电 (`mv_power`)

仅用于实际中国用户端1–35 kV供电，独立计量线路与低压行分开，不重复同一电量。

- 选定流： 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 来自cp_utilities的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源： `fhwa-fp24-bridges`

###### 柴油 (`diesel`)

仅用于开挖、打桩、泵、起重、顶推及发电机实际柴油；采集阶段设备质量或体积、密度、供应实测低位热值及化石生物份额。现场燃烧与燃料生产分开，并避免与已含燃烧的发电电力重复。

- 选定流： 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_utilities的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源： `fhwa-fp24-bridges`

###### 供应施工现场的处理后自来水 (`mains_water`)

仅用于实际养护、清洗或抑尘的采购处理水；按用途计量，不再作为自然资源直接取水重复录入。

- 选定流： 供应施工现场的处理后自来水
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 来自cp_utilities的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源： `fhwa-fp24-bridges`

##### 基本流

###### 河水 (`river_water`)

仅用于有据的直接河流取水；记录位置、计量、淡水水体及回排，排除地下水、海水、采购水和仅过境的施工降水。在过程位置保留取水国家以支持匹配表征。

- 选定流： 河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 来自cp_utilities的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源： `fhwa-fp24-bridges`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`co2`)

仅用于量化有据的化石碳燃烧向未指定空气即时排放；由实测燃料化石碳质量及氧化证据或匹配发动机测量推导。不设通用排放系数，已知其他子介质须更换身份。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_utilities的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源：

###### 一氧化氮 (`no`)

仅用于测量或模型支持的NO，CAS 10102-43-9，向未指定空气即时排放。以NO2当量报告的合计NOx不能证明本分子交换。

- 选定流： 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_utilities的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源：

###### 二氧化氮 (`no2`)

仅用于测量或模型支持的NO2，CAS 10102-44-0，向未指定空气即时排放；与NO及N2O分开，保留发动机、负荷、后处理及测量不确定性。

- 选定流： 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_utilities的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源：

###### 颗粒物 (PM2.5 - PM10) (`dust`)

仅用于开挖、搬运或交通实际量化的2.5–10微米粒径向未指定空气排放。EPA定性证据不提供项目默认系数，PM10包含PM2.5，不能替代本分离粒径段。

- 选定流： 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_utilities的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源： `epa-construction-dust-2010`

###### 颗粒物 (PM2.5) (`fine_pm`)

仅用于实际量化的燃烧或扬尘产生小于2.5微米颗粒物向未指定空气即时排放，不默认系数或发生。保留源活动和控制效率证据，不与合计PM10重复。

- 选定流： 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_utilities的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源： `epa-construction-dust-2010`

### 过程： 施工废物收集与外运 (`waste`)

#### 输出

##### 废物流

###### 硬化混凝土施工废块 (`concrete_waste`)

仅用于实际分类收集的硬化混凝土废块；计量质量及去向，湿退料、拆除物与混合建筑垃圾另列。

- 选定流： 硬化混凝土施工废块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_waste的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源： `fhwa-fp24-bridges`

###### 送回收的钢材施工边角料 (`steel_waste`)

仅用于实际外运施工钢废料；称量并记录接收者、边界及处理，不默认回收率或替代原生钢抵扣。

- 选定流： 送回收的钢材施工边角料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自cp_waste的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源： `fhwa-fp24-bridges`

###### 收集后送处理的混凝土设备洗出水 (`washwater`)

仅用于跨废物边界的收集洗出水；计量体积、固体和碱性，记录处理回用，不自动视为向淡水环境排放。

- 选定流： 收集后送处理的混凝土设备洗出水
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 来自cp_waste的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源： `epa-concrete-washout-2012`

### 过程： 实际交货与外运废物运输 (`transport`)

#### 输入

##### 产品流

###### 货物运输 (`road_freight`)

仅用于在声明运输服务供应边界实际供应、上游产品未含的道路货运段；保留路线、货物、载荷及空返证据。公开质量*距离属性参考单位为kg*km，t*km = 1000 kg*km；采集货物吨数乘公里。区分场外废物运输和其他运输模式，需要时补充其他匹配身份。

- 选定流： 货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` / t*km
- 数量规则： 来自cp_transport的实际归属交换；保持物理状态单位，不默认数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_transport`
- 来源： `fhwa-fp24-bridges`

### 过程： 检查与验收实体移交 (`handover`)

#### 输出

##### 产品流

###### 验收交付的桥梁或高架公路 (`reference_bridge`)

一个完整交付实体，保留实测线形、跨径和桥面配置及签署移交；施工试验及临时工程拆除纳入本次实际事件，不假设寿命。

- 选定流： 验收交付的桥梁或高架公路
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 1 item
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准： per declared reference flow
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_handover`
- 来源： `un-cpc-bridges-2025`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| partition_first | all processes | 先拆分工序、设备电表、交货及共享资产，优先直接实测。未拆分共享量仅按cp_assets有据的因果台时、载荷、距离或实际工程量分配并保留平衡，不默认造价或质量份额。 |  |
| reuse_conservation | temporary; utilities | 每个回用模板、围堰构件、起重机或架桥资产跨项目期间使用保留同一制造负担台账。累计份额不得超过一，服务分母须实际累计活动或有据寿命，未知须审查。运行和耗损独立测量，不每项目重置100%制造负担。 |  |
| waste_gate | waste; ground | 废物保持实际外运边界，区分回用回收处理处置，不自动抵扣避免材料。共享产出需要分配时须论证实际关系并披露敏感性，不假设废料价格或收率。 |  |

共享设备与回用构件的制造投入保留制造数据集的真实原生参考属性，可按实际采用质量、件数或面积。模板须区分部署面积、可回用板件存量及无量纲制造份额f。制造原生按m2计量时，归属面积交换为同配置实测板件存量面积A乘f，不是每次浇筑的全部部署面积。上游制造按kg或item计量时，将同一存量面积与独立实测质量M（kg/m2=M/A）或板件数N（item/m2=N/A）关联，记录板件ID、尺寸、厚度、状态及来源清单；相应存量乘同一f且只计一次。安装使用记录与制造交换分开，不同时增加原生面积及换算后的制造负担。cp_assets保存存量、换算证据、上游参考量及份额；无据换算须审查，不设默认密度或板件质量。cp_assets须保留真实受益实体数量及跨项目累计份额，不把设备质量用于改写桥梁参考流。未知寿命、累计活动或受益者关系须审查，不默认为零。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_ground | ground | 每个实际原子交换及声明实体 | foreground_records | 场址、地质、原状及松散测量、交货、土去向和排水记录 | 校准计量、称量票据、实测几何、供应记录、设备日志及签署检查；逐工序核对并保留不确定性 | row-specific kg, m3, m2, MJ, item, t*km | 每次交货活动计量间隔及最终移交 | 完整实际施工期含分包及未计量间隔 | 声明场址实体及归属场外工作 | per declared reference flow | 原始记录、校准、几何票据核对、边界身份依据及签署验收 |
| cp_foundation | foundation | 每个实际原子交换及声明实体 | foreground_records | 桩和钻孔几何、施工日志、混凝土票据、钢筋、泵振捣养护用量、开挖及验收 | 校准计量、称量票据、实测几何、供应记录、设备日志及签署检查；逐工序核对并保留不确定性 | row-specific kg, m3, m2, MJ, item, t*km | 每次交货活动计量间隔及最终移交 | 完整实际施工期含分包及未计量间隔 | 声明场址实体及归属场外工作 | per declared reference flow | 原始记录、校准、几何票据核对、边界身份依据及签署验收 |
| cp_temporary | temporary | 每个实际原子交换及声明实体 | foreground_records | 资产编号、板件几何、安装拆除、实际重复使用、全使用期负担台账及未回收损失 | 校准计量、称量票据、实测几何、供应记录、设备日志及签署检查；逐工序核对并保留不确定性 | row-specific kg, m3, m2, MJ, item, t*km | 每次交货活动计量间隔及最终移交 | 完整实际施工期含分包及未计量间隔 | 声明场址实体及归属场外工作 | per declared reference flow | 原始记录、校准、几何票据核对、边界身份依据及签署验收 |
| cp_structure | structure | 每个实际原子交换及声明实体 | foreground_records | 竣工跨径、构件编号、质量体积数量、供应内含范围、吊装顶推、接缝焊接张拉线形记录 | 校准计量、称量票据、实测几何、供应记录、设备日志及签署检查；逐工序核对并保留不确定性 | row-specific kg, m3, m2, MJ, item, t*km | 每次交货活动计量间隔及最终移交 | 完整实际施工期含分包及未计量间隔 | 声明场址实体及归属场外工作 | per declared reference flow | 原始记录、校准、几何票据核对、边界身份依据及签署验收 |
| cp_deck | deck | 每个实际原子交换及声明实体 | foreground_records | 桥面长度宽度面积口径、铺层票据、支座接缝图、排水防护及验收范围 | 校准计量、称量票据、实测几何、供应记录、设备日志及签署检查；逐工序核对并保留不确定性 | row-specific kg, m3, m2, MJ, item, t*km | 每次交货活动计量间隔及最终移交 | 完整实际施工期含分包及未计量间隔 | 声明场址实体及归属场外工作 | per declared reference flow | 原始记录、校准、几何票据核对、边界身份依据及签署验收 |
| cp_utilities | utilities | 每个实际原子交换及声明实体 | foreground_records | 阶段设备编号、计量电力电压国家、柴油库存密度低位热值碳份额、用途水量、排放物种与介质 | 校准计量、称量票据、实测几何、供应记录、设备日志及签署检查；逐工序核对并保留不确定性 | row-specific kg, m3, m2, MJ, item, t*km | 每次交货活动计量间隔及最终移交 | 完整实际施工期含分包及未计量间隔 | 声明场址实体及归属场外工作 | per declared reference flow | 原始记录、校准、几何票据核对、边界身份依据及签署验收 |
| cp_waste | waste | 每个实际原子交换及声明实体 | foreground_records | 材料状态、干湿质量、去向处理、洗出水体积、固体及水平衡 | 校准计量、称量票据、实测几何、供应记录、设备日志及签署检查；逐工序核对并保留不确定性 | row-specific kg, m3, m2, MJ, item, t*km | 每次交货活动计量间隔及最终移交 | 完整实际施工期含分包及未计量间隔 | 声明场址实体及归属场外工作 | per declared reference flow | 原始记录、校准、几何票据核对、边界身份依据及签署验收 |
| cp_transport | transport | 每个实际原子交换及声明实体 | foreground_records | 货物质量、起终点、距离模式载荷空返、已含数据集边界及实际分配 | 校准计量、称量票据、实测几何、供应记录、设备日志及签署检查；逐工序核对并保留不确定性 | row-specific kg, m3, m2, MJ, item, t*km | 每次交货活动计量间隔及最终移交 | 完整实际施工期含分包及未计量间隔 | 声明场址实体及归属场外工作 | per declared reference flow | 原始记录、校准、几何票据核对、边界身份依据及签署验收 |
| cp_handover | handover | 每个实际原子交换及声明实体 | foreground_records | 实体场址编号、签署验收、竣工线形跨径宽度桥面面积、交通模式、结构性能、内含排除固定设施和日期 | 校准计量、称量票据、实测几何、供应记录、设备日志及签署检查；逐工序核对并保留不确定性 | row-specific kg, m3, m2, MJ, item, t*km | 每次交货活动计量间隔及最终移交 | 完整实际施工期含分包及未计量间隔 | 声明场址实体及归属场外工作 | per declared reference flow | 原始记录、校准、几何票据核对、边界身份依据及签署验收 |
| cp_assets | temporary; utilities | 共享制造活动分配 | foreground_records | 资产编号、制造负担、项目期间分配、实际台时循环、有据寿命或累计分母、分子及历史累计份额；制造原生参考属性单位；板件存量面积A；同一存量实测质量M或板件数N；配置状态及换算证据 | 同一持久资产台账与全部项目记录核对，缺分母须审查 | fraction; hours; cycles; m2; kg; item | 每次使用及分配更新 | 全部覆盖项目及资产服务期间 | 共享资产及全部使用 | per declared reference flow | 份额平衡、来源及运行无重复 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory rows | 同一完整实体汇总每个归属原子交换：q_ref = q_total / N，N = 1个验收实体。保持原始属性单位，不按任意质量面积造价寿命归一化。 | cp_ground; cp_foundation; cp_temporary; cp_structure; cp_deck; cp_utilities; cp_waste; cp_transport; cp_handover | per declared reference flow |  |
| electricity | lv_power; mv_power | E_MJ = E_kWh * 3.6 | cp_utilities | MJ per declared reference flow |  |
| liquid_mass | diesel | m_kg = V_L * rho_kg_per_L，按有据温度和燃料状态，保持柴油Mass。低位热值可表征使用但不改写流属性。 | cp_utilities | kg per declared reference flow |  |
| freight | road_freight | 逐归属运输段汇总货物吨数乘实际距离公里；核对分配空返模型及上游已含运输。 | cp_transport | t*km per declared reference flow |  |
| emission_quantification | elementary outputs | 采用逐物种实测排放或经核对的项目特定发动机扬尘模型。化石CO2：实测化石碳乘有据氧化份额乘44/12，保留燃料化学组成及不确定性。合计NOx不能定义分子NO或NO2，颗粒粒径分离，不提供通用系数。 | cp_utilities | kg per declared reference flow |  |
| asset_fraction | temporary; utilities | 归属制造负担=资产制造负担乘有据使用份额；跨全部项目核对累计份额≤1，不重置或假定寿命。 | cp_assets | attributed burden per declared reference flow |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_configuration | reference_bridge | 完整实际实体、实测几何跨径及固定设施接口须与签署验收和全部清单一致，不杜撰尺寸等级载荷工程量寿命。 | cp_handover |
| quantity_reconciliation | all rows | 按状态含水核对交货库存安装量退料废物，量化计量缺口及不确定性，不默认损耗或混凝土钢材比例。 | all collection protocols |
| identity_environment | all rows | 要求公开身份、实际参考属性单位组、材料状态来源及介质子介质匹配。空UUID须精确登记未解决行，不能声称全身份清单；未测活动披露而非置零。 | direct identity and project evidence |
| representativeness | dataset | 记录实际时间场址技术、全部分包、供应边界、估计来源及后期排除。历史指南仅支持声明定性用途，并开展独立审查。 | project evidence and cited scope |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_entity | reference_bridge | 要求一个完整验收实体及全部参考限定、实测几何、跨径接线接口与交通用途。部分跨段或建材包不能声称本参考产品。 | un-cpc-bridges-2025 |
| validate_basis | all rows | 全部分子属性单位、产出1 item、协议计算须使用同一声明参考流，拒绝无依据换算或不守恒的回用资产份额。 |  |
| validate_completeness | dataset | 按竣工工序检查实际基础下部结构、上部结构、架设临时支撑、桥面固定设施、运输公用工程废物移交。每项实际交换须原子化采集；不存在须证据，未知范围须审查。 | fhwa-fp24-bridges |
| validate_environment | utilities; waste | 核对物种化石来源、即时长期、介质子介质及实际路线。收集废物不是环境排放，柴油燃烧不与上游内含燃烧重复。NO、NO2、N2O及颗粒粒径保持分离。 | epa-concrete-washout-2012; epa-construction-dust-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明完整桥梁高架公路的施工移交清单、匹配上游链接；仅在实际功能几何性能范围匹配时比较 |
| excluded_use | 全寿命或交通运营、默认维护拆除、自动上游完整性、kg每公里每平方米桥梁代理、设计法律方法学批准 |
| required_metadata | 参考限定、施工日期路线、工序覆盖、材料供应边界、几何固定范围、属性单位证据、分配及环境覆盖 |
| required_quality_disclosure | 身份证据缺口、不确定性、未计量阶段、缺失背景上游、后期排除及审查限制 |
| update_trigger | 实体功能几何、结构基础路线、交付范围、供应边界、实际清单或证据身份变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| un-cpc-bridges-2025 | official_guidance | 联合国统计司，CPC 3.0解释说明，2025年6月30日，印刷及PDF第279页，53221及相邻条目。 https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅类别边界，不是配方或全部工序的依据。 |
| fhwa-fp24-bridges | standard | 美国联邦公路管理局FP-24（2024），551–557、562、564–565节：印刷第448、461、489、503、507、527、545、561、565页；PDF第465、478、506、520、524、544、562、578、582页。 https://highways.dot.gov/sites/fhwa.dot.gov/files/FP-24.pdf | 桥梁工序构成与记录；美国联邦合同语境，仅被合同指定时作为规范。不转用配比、设计载荷、默认尺寸、寿命或合规声明。 |
| epa-concrete-washout-2012 | official_guidance | 美国EPA，混凝土洗出水雨水管理措施，EPA-833-F-11-006，2012年2月，PDF第1–2页。 https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | 仅历史收集回用及废物与排放区分；无通用用水率、系数或当地排放批准。 |
| epa-construction-dust-2010 | official_guidance | 美国EPA AP-42 13.2.3重型施工操作，1995年1月、2010年2月修正，印刷13.2.3-1–2页及PDF第1–2页。 https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | 仅历史施工活动、土壤含水与扬尘的定性关系，不采用通用面积每月排放系数。 |
