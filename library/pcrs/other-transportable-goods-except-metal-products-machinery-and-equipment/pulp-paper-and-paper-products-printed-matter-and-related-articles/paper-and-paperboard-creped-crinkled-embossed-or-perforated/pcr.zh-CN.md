---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.paper-and-paperboard-creped-crinkled-embossed-or-perforated
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 外购原纸加工的未涂布双面亚麻纹压花细纸张

## 1. 范围与适用性

本方法覆盖一个白色、未颜料涂布的化学浆细纸纸种，标称定量250 g/m2。从已干燥、未压花的外购原纸开始，经机械压花压光机形成双面亚麻纹，再裁边、切纸、调湿、检验及保护包装，交付至出厂门。商品代表为Favini Biancoflash Premium Classic Linen LN 2/S，打印设备原始介质表核实其为未涂布纹理250 g/m2纸。标称定量用于识别纸种，不是配方、默认水分、实际发货质量或自动质量公差。每份数据集须证明实际原纸浆料、双面辊式纹理、无颜料涂层及当前验收规格。[favini-biancoflash-range, favini-embossed-tds, ricoh-media-2021]

本前景终点在上游原纸制造之后增加实物表面纹理成形，以及拒收、切边和调湿核算。它区别于Yankee刮刀起皱生活用纸母卷、Clupak伸性袋纸和普通未压花印写原纸。排除起皱、穿孔、湿部成形毛毡纹、牛皮袋纸、生活用纸及非织造转换、涂布或底涂或金属效果纸、彩色和象牙色变体、复合层压、自黏标签纸、印刷文具及信封或纸盒制造。一体化制浆造纸不在加工厂前景门内；兼容上游原纸只链接一次。

辊式压花可使用蒸汽，也可无蒸汽运行。实际加工厂须记录选用设备、压花顺序及蒸汽、调湿配置。生产者案例不证明Favini自有工厂实际设备或通用设定。本方法允许外供工业锅炉蒸汽间接供热、电力驱动及加热、处理水调湿；直接喷汽、导热油系统、现场燃烧及现场废水处理或直接排放须另行审查扩展路线。不把未测交换申报为零。[gmund-embossing-process]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.paper-and-paperboard-creped-crinkled-embossed-or-perforated |
| classification_refs | CPC 3.0 32142; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 外购未压花化学浆原纸加工的白色未涂布标称250 g/m2机械双面亚麻纹压花细纸张 |
| excluded_products | 起皱或穿孔产品；生活用纸、Clupak袋纸、湿部毛毡纹纸；涂布、印刷、底涂、层压、自黏纸；象牙色或彩色纸种；一体化造纸及最终制品 |
| representative_product | Favini Biancoflash Premium Classic Linen LN 2/S, 标称250 g/m2，白色未印刷纸张；仅商品身份，不是工厂数据集 |
| production_route | 外购干原纸 -> 受控辊式双面亚麻纹压花 -> 裁切、调湿和验收 -> 保护包装 |
| market_state | 加工厂出厂门验收合格且保护包装的平张纸，尚未印刷或制成制品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供未印刷双面亚麻纹白色细纸印刷基材 |
| How much | 实际交付水分状态下1 kg验收纸张净质量 |
| How well | 声明标称250 g/m2纸种、实际定量、厚度、水分、尺寸、纸纹及双面亚麻纹验收；未涂布、未印刷且无损伤 |
| How long or cycle | 一次制造和出厂交付周期；不声称印刷制品寿命 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 纸及纸板，经皱纹、起皱、压花或打孔处理 `1000e2c4-0fd1-4139-a6ff-7b0cff8abc05` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 白色化学浆原纸浆料；供方及批次；未涂布和未印刷状态；标称及实际定量；厚度；交付水分及水分基准；尺寸；纸纹；双面亚麻纹及验收；压花次数、能源和调湿配置；净质量排除包装；边界及期间 |

各限定信息须在实际数据集元数据或产品、过程描述中声明。P为同一生产期实测验收净输出，不以标称定量乘面积代替。广义参考UUID仅用于声明的成品子集。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | P为实际出厂水分下的验收纸张净质量，排除全部包装、不合格纸和在制品；采用cp_mass采集。所有行统一每1 kg分母。 |
| physical_basis | 物料实物平衡辅助账；不含 electricity、steam_heat 及 freight 原生交换字段 | 质量 | kg | 记录实际湿质量m及同流湿基水分w；干固体d = m*(1-w)。用于碳或固体平衡时测碳和填料。保留投入和输出存量修正、实物返工及包装分账。供方水分或公差不是实测值。物料质量辅助账不得替代各行原生电/热 MJ 或货运 kg*km；保持 utility_basis 和 native_utility_conversion 的独立单位定义。 |
| utility_basis | electricity, steam_heat, process_water, condensate_return | 净热值 / 总热值 / 质量 | MJ / MJ / kg | 电力使用原生净热值/MJ，精确换算1 kWh = 3.6 MJ，不代表效率。蒸汽热原生总热值/MJ须有供方k_bg、实际净焓和蒸汽及凝结水实物kg；统一焓基准、状态和存量，损失仅计一次。核对全部压力及名称限定；MJ本身不证明交付基准。水体积按实测温度下密度换算。 |
| emission_basis | pm25, pm25_10, pm10plus, water_vapour | 质量 | kg | 仅实际可归属最终室外排放；颗粒物互斥粒径、捕集粉尘另账。实物水及碳平衡使用实测物料构成。即使温室气体报告口径排除生物CO2，实际生物CO2仍保留于LCI；实际非预期排放须在完整数据集前增加经核实的物种、来源及介质行。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工厂门收到外购已干燥、未压花的白色化学浆原纸 |
| starting_condition_role | foreground input gate |
| product_classification_scope | CPC:3.0:32142; narrower |
| recursive_input_rule | 采购已压花纸张仅重新包装不属本路线；外购未压花纸只链接一次上游。内部返工或返回粉尘为等量实物循环，不作新采购。 |
| upstream_dataset_requirement | 实际兼容原纸、公用工程、运输、耗材、包装及外部废物处理数据集；保留制造路线、地域、年份及原生参考量。缺失或不兼容链接禁止声称完整从摇篮到厂门。 |
| disclosure | 加工厂门到门与已链接从摇篮到厂门区分；具体设备、能源和调湿；废物接收方；存量及返工；实际包装；排除的上游制造和下游印刷制品 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_finish | emboss_convert | 声明加工厂边界内纳入收纸及拆包、辊式双面压花、实际返工、裁边切纸、调湿、检验、除尘、可归属公用工程和维护、保护包装及发运。一个合并前景单元内仍保留分阶段表计及实物流记录。 | gmund-embossing-process, jrc-pp-bref-2015 |
| boundary_upstream | base_paper | 本前景排除制浆、湿部造纸、漂白及原纸干燥；外购原纸只链接一次上游数据集。木材加工调查及胶合板清单不提供纸加工因子。 | jrc-pp-bref-2015 |
| boundary_utility | steam_heat | 外购热量制造属上游；供热MJ服务交换之外单独保留进入蒸汽及返回凝结水的实物质量，不重复记燃料、供水及返回焓信用。本加工路线内部不含锅炉。 | jrc-pp-bref-2015 |
| boundary_residual | emboss_convert | 内部纸及粉尘返回不重复跨门。外送切边、捕集粉尘及最终空气排放分开。外送完整废水不是水及污染物直接环境排放。数据完成前逐项披露实际辅助组分。 | jrc-pp-bref-2015 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| emboss_convert | 亚麻纹压花、切纸及保护包装 | required | 声明外购原纸加工路线；公用工程仅实际分支 | foreground production | 1 kg reference flow |

实物阶段图：外购原纸收货 -> 拆包及水分核验 -> 受控双面亚麻纹辊式压花 -> 裁边切纸 -> 调湿及检验 -> 验收纸张及保护包装。内部不合格纸返工的发送和接收质量、状态及期间一致；裁切纸尘分为捕集外送、等量内部返回及实测最终室外排放。一个合并前景单元避免在加工和包装之间重复表示同一成品。投入、纸卷、纸张及在制品的质量、水及碳平衡与环境负荷分配分别记录。随货、返回、存量和丢弃包装在独立实物账中保留完整质量，不计入纸参考量P。[gmund-embossing-process, jrc-pp-bref-2015]

### 过程：亚麻纹纸加工（`emboss_convert`）

#### 输入

##### 产品流

###### 未压花白色无机械浆细纸原纸（`base_paper`）

外购已干燥、未印刷、未压花、未颜料涂布的白色化学浆细纸原纸，适用于声明的标称250 g/m2亚麻纹纸种。记录实际浆料及非颜料施胶；排除再生浆、机械浆、涂布和已压花替代品。广义身份包含本子集，但不是供方配方或背景数据集。

- 选定流：未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-pp-bref-2015`

###### 压花、裁切及保护包装用电（`electricity`）

计量驱动、裁切、真空除尘、空压机及可归属照明和调湿用电。身份是低于1 kV的用户侧交流电，供电元数据为CN；实际电压、地域、年份及供方须兼容，否则需另行验证流及供方。代表性欧洲商品不默认采用中国或水电组合。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
参考单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_electricity。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electricity`
- 来源：`jrc-pp-bref-2015`

###### 外供工业锅炉蒸汽热（`steam_heat`）

仅实际压花辊间接蒸汽加热时纳入。该身份未记载压力硬限定；保留实际压力、温度、品质、蒸汽及返回冷凝水kg、焓基准、凝结水返回和损失。原生总热值/MJ及CN元数据要求有证据的供方对应Q_bg = k_bg*H_net；不得默认k_bg为1。k_bg未知则背景链接不完整。不得移植干燥基准用量，也不为外购热量重复添加现场锅炉燃料。直接喷汽及现场锅炉不属本路线。

- 选定流：工业蒸汽热 `e84ac547-7be6-4f22-9b4e-c77bfa745129`
- 流属性/单位：总热值, 高位热值 `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
参考单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集Q_bg除以P；Q_bg = k_bg*H_net，采用实际供方基准；cp_mass及cp_heat。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_heat`
- 来源：`gmund-embossing-process`

###### 调湿及仅用水清洁的处理水（`process_water`）

仅实际为室内调湿、纸张调湿或设备仅用水清洁而加入外供处理水时纳入。各用途分表计量，保留纸张水分净变化，体积按实测密度和温度转为质量。内部循环水及返回凝结水不作新鲜投入。化学清洗和自有取水须增加具体交换并审查方法。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-pp-bref-2015`

###### 未涂布无机械浆纸令包装纸（`wrapper`）

仅实际使用未涂布无机械浆纸包装时纳入。单独称量的保护纸不计入参考纸张。核实实际纤维、施胶及供方；本选定子集不代表牛皮纸、涂布防潮层或胶黏剂。

- 选定流：未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_packaging。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`jrc-pp-bref-2015`

###### 低密度聚乙烯保护膜（`pe_film`）

仅实际非泡沫、非自黏、未增强、未层压的LDPE薄膜时纳入。实测薄膜质量并确认构造；不得替代PET或多层膜。随货薄膜保留为单独披露的包装实物输出。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_packaging。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`jrc-pp-bref-2015`

###### 已制造印刷折叠层压纸板盒（`carton`）

仅实际符合完整直读路线、经裁切、折叠、层压及印刷的纸令纸板盒时纳入；不是瓦楞纸箱的代理。实际构成与供方参考质量须匹配。不得移植其他纸箱记录的16.6/83.4纤维比例。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_packaging。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`jrc-pp-bref-2015`

###### 木制发运托盘（`pallet`）

仅实际木制可搬运平台时纳入，不包括该广义类别的所有产品。记录实物总质量、树种、紧固件、处理及复用回路。按有证据的使用次数归属托盘制造服务，不缩减发出、返回及丢弃托盘的实物质量；不设默认寿命。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_packaging。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`jrc-pp-bref-2015`

###### 入厂公路货运服务（`freight`）

实际原纸及耗材的入厂公路运输。保留原生质量*距离，单位kg*km，以及实际载货量、路线km、车辆、装载及返程约定。逐运输段合计实际载货kg乘距离km；1 t*km = 1000 kg*km。运输供方已覆盖燃料及排放时不重复添加。铁路和海运段须单独原子行。

- 选定流：货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
参考单位组：`3620148f-c5db-48ce-9065-a10092089aca`.
- 数量规则：采集实际各运输段载货kg乘路线km后除以P；cp_mass及cp_freight。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`
- 来源：`jrc-pp-bref-2015`

###### 石油馏分润滑油（`lubricating_oil`）

仅实际压花或裁切设备使用石油馏分润滑油时纳入。采用该身份前须核实供方配方及记录中的40.5 MJ/kg限定；这不是PCR热值因子，不据此推定燃烧量。不得替代全合成PAO。所选行按供方相容的完整实际供货润滑油配方及原生质量计一次采购，包括供应方配制、制造与交付负荷；内含基础油/添加剂只作组成与实物平衡，不再采购。只有实际独立采购并现场配制的其他油/添加剂才另列相容原子行，并计实际配制能水与损失；所选身份不能表示整份供货配方时保留具体替代及未决身份/基准，不改写其物料构造。保留设备油存量及实际更换和泄漏记录。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-pp-bref-2015`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格亚麻纹压花白色细纸张（`reference_product`）

仅验收合格、未印刷、未涂布、白色、标称250 g/m2、机械双面亚麻纹压花细纸张。记录实际交付净质量及水分、纸纹、尺寸、实测定量与厚度及两面表面验收。广义成品纸身份限定为此实物子集；不代表所有起皱、穿孔或压花产品。排除包装纸、盒、托盘、不合格纸和在制品。

- 选定流：纸及纸板，经皱纹、起皱、压花或打孔处理 `1000e2c4-0fd1-4139-a6ff-7b0cff8abc05`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_mass`
- 来源：`favini-biancoflash-range`

###### 间接压花辊加热的返回蒸汽凝结水（`condensate_return`）

仅实际经蒸汽供方验收、返回工业系统复用的已处理锅炉水凝结水，且组成、处理历史、品质规格及返回接口均已核实，才适合本广义工艺用水身份。保留实际温度、压力、密度及返回完整kg，与供热MJ服务分开；返回不是新购供水，也不是自动取得替代信用的销售。供热账仅计一次有据返回焓。被拒收的污染水须按实际废物状态及接收方另设行；乳品凝结水及特定压力供汽不能替代。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_heat。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_heat`
- 来源：`jrc-pp-bref-2015`

##### 废物流

###### 外送洁净亚麻纹纸切边及不合格纸（`paper_trim`）

仅本单一纸种产生并实际合并的一个洁净未涂布纸废物流；分别处理的流须分别列行。称净质量、测水分及填料，记录接收方。内部返工不是外送废物，不自动获得避免原生纸信用；不假定加工厂设碎浆机。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-pp-bref-2015`

###### 单独收集的纸张裁切粉尘（`captured_dust`）

实际由专用除尘器捕集并外送的纸纤维及填料粉尘。广义工业粉尘身份包含本子集；测定来源、水分、填料及润滑油污染，核实接收方和实际捕集质量。不是燃烧灰，也不是排向环境的颗粒物。内部返回粉尘保持等量实物循环，从外送废物及排放合计中扣除。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-pp-bref-2015`

###### 废弃包装纸（`waste_wrapper`）

实际单独收集的包装纸边料或损坏入厂包装纸，记录构成、水分及接收方；不代表生产纸切边或瓦楞纸板。完好随货包装是包装输出，不属本废物。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-pp-bref-2015`

###### 未清洗LDPE保护膜包装废物（`waste_pe`）

仅加工厂门单独丢弃、尚未清洗的实际LDPE保护膜边料或拆包膜，属于该广义固体废物身份的工业废弃物子集。称量交付状态完整质量，记录LDPE及添加剂、粘附纸屑、污物、水分、实际固态和接收方后链接兼容处理。虽与旧木托盘共用广义UUID，仍保留不同实物流和数量。不推定清洗、回收率、危险属性或处理；已清洗回收原料、PET和帘子布不能替代。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-pp-bref-2015`

###### 废弃纸板盒（`waste_carton`）

实际包装时产生的损坏盒或边料，分别称量并记录层压及胶黏成分、接收方。身份原件的2%专家估计不采用。完好随货盒和返回盒单独保留完整实物质量。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-pp-bref-2015`

###### 保留金属紧固件的废弃旧木托盘（`waste_pallet`）

仅本加工厂实际丢弃、含保留金属紧固件的整只旧木托盘，属于该广义固体废物身份的工业废弃制品子集。称量交付状态完整质量，记录树种、木材水分、防腐剂、紧固件、污染及接收方。随货或返回复用托盘为实物包装转移，不属本废物。不按托盘服务分配缩减废弃质量，不与薄膜废物合并，不推定破碎、团聚、危险属性及下游处理；初级木加工边角料不能代表此已使用整件。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-pp-bref-2015`

###### 设备维护废润滑油（`waste_lubricating_oil`）

仅实际单独收集的废油时纳入；称量完整受污染液体、测水分和污染物、记录接收方，不预设燃烧或再生。不得采用海上渔船作业限定的身份。含油抹布及过滤器须各自原子行。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-pp-bref-2015`

###### 外送的仅用水纸设备清洁完整废水（`cleaning_effluent`）

仅实测完整废水交实际外部处理供方时纳入。广义废液身份包含工业清洗废水，限定为本构成及声明接收方。原生质量/kg指完整湿废水，不是纯水：称量或用V*rho_eff(T)。采样悬浮纤维、填料及溶解污染物；水组分账采用实测水质量分数x_H2O乘完整湿废水质量，非水物质另行核平。完整废水不等于全部H2O，互相重叠的污染指标不相加为实物质量。该路线不重复记直接水体排放。排除电解锰洗涤、硅片废水及制药BOD。现场废水处理及直接排放须另行审查路线，配置各物种及介质行。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_wastes。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_wastes`
- 来源：`jrc-pp-bref-2015`

##### 基本流

###### 排向室外空气的纸尘，PM2.5（`pm25`）

仅干式搬运、压花或裁切经捕集后的实际室外排放时纳入，包括可归属无组织排放。核实室外空气未特指介质及实测互斥空气动力学粒径区间。使用烟道或无组织源实测及有记录的现场平衡；不设正排放因子，不把未测视为零。PM2.5、PM2.5-PM10及>PM10仅作为互斥区间可相加，不再叠加嵌套PM10或总尘。捕集粉尘另记。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-pp-bref-2015`

###### 排向室外空气的纸尘，PM2.5-PM10（`pm25_10`）

仅干式搬运、压花或裁切经捕集后的实际室外排放时纳入，包括可归属无组织排放。核实室外空气未特指介质及实测互斥空气动力学粒径区间。使用烟道或无组织源实测及有记录的现场平衡；不设正排放因子，不把未测视为零。PM2.5、PM2.5-PM10及>PM10仅作为互斥区间可相加，不再叠加嵌套PM10或总尘。捕集粉尘另记。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-pp-bref-2015`

###### 排向室外空气的纸尘，>PM10（`pm10plus`）

仅干式搬运、压花或裁切经捕集后的实际室外排放时纳入，包括可归属无组织排放。核实室外空气未特指介质及实测互斥空气动力学粒径区间。使用烟道或无组织源实测及有记录的现场平衡；不设正排放因子，不把未测视为零。PM2.5、PM2.5-PM10及>PM10仅作为互斥区间可相加，不再叠加嵌套PM10或总尘。捕集粉尘另记。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-pp-bref-2015`

###### 调湿及纸张水分损失排出的水蒸气（`water_vapour`）

仅纸张调湿、空气加湿或蒸汽系统排气实际可归属的室外净水分排放时纳入。核对实测纸张水分、调湿供水、蒸汽及凝结水存量和实际空气水分通量。不仅凭外购热量MJ推导kg；蒸汽服务实物质量另保留。不引入全厂锅炉蒸发量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`.
- 数量规则：实际采集生产期交换量除以验收纸张净输出P；cp_mass及cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`jrc-pp-bref-2015`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_separate | emboss_convert | 先分离本纸种生产期及直接表计的公用工程、过程负荷；分配不可避免共享负荷前评估细分及系统扩展。专用纸张保留全部直接可归属负荷。有据采用系统扩展时报告完整扩展功能，不自动给避免产品信用。 | ec-ef-allocation-2021 |
| allocation_relationship | emboss_convert | 不可避免共享公用工程负荷采用有证据的基础物理关系；驱动使用表计或实际运行功率及时间，热服务使用实测界面热量，不默认按吨数或收入份额。有据物理关系不可建立时，论证并披露其他基准及经济分配敏感性。同期间份额之和为1。 | ec-ef-allocation-2021 |
| allocation_physical | emboss_convert | 分配前保留完整纸、水、碳、包装及残余实物账。实物联产品、废物输出、内部链接及托盘返回不乘环境分配份额。切边按废物处理，除非有据产品状态及方法确立独立可销售联产品；采用前须增加其不同状态的已核实身份并审查。不得使质量消失或给未经证实的回收替代信用。 | ec-ef-allocation-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | emboss_convert | accepted output | measured_record | 供方及批次；期间；标称纸种；实际尺寸、纸纹、定量及厚度；实际湿净质量P；水分w；验收、拒收及在制存量；包装皮重；纹理验收 | 以经校准秤在出厂水分下称量验收纸张，排除包装；按经验证实验室SOP抽样测水分、定量及厚度，核对验收及存量。生产者引用ISO536/287，但未提供完整试验程序。 | kg | 每批及生产期 | 对应生产期；声明日期、停机、开机及覆盖 | 声明加工厂及实际供方、接收方 | 每 1 kg 参考流 | 校准、原始记录、测试SOP、覆盖及核对证据 |
| cp_materials | emboss_convert | base_paper, lubricating_oil | measured_record | row_id；供方及批次；实际构成及处理；湿及干质量；水分；期初及期末存量；使用、返工和损失；油配方及限定 | 经校准收货及领料称量、发票及存量核对；供方证明及化验。原纸和润滑油分别记录，不推断配方。 | kg | 每次到货、领用及生产期 | 对应生产期；声明日期、停机、开机及覆盖 | 声明加工厂及实际供方、接收方 | 每 1 kg 参考流 | 校准、原始记录、测试SOP、覆盖及核对证据 |
| cp_packaging | emboss_convert | wrapper, pe_film, carton, pallet | measured_record | row_id；实际构造；供方；皮重及单件质量；数量；新旧和复用；完整发出、返回、丢弃质量及存量；有据使用次数 | 各实际组件分别称量；核对发运、返回和存量及有据服务归属，不设寿命、不缩减实物质量。 | kg | 每包装、发运及返回批 | 对应生产期；声明日期、停机、开机及覆盖 | 声明加工厂及实际供方、接收方 | 每 1 kg 参考流 | 校准、原始记录、测试SOP、覆盖及核对证据 |
| cp_electricity | emboss_convert | electricity | measured_record | 表位；电压；供方、地域及年份；kWh读数；生产线空载、驱动、加热、除尘及空压归属；期间；已覆盖损失 | 经校准分表及发票核对；分实际阶段，不可避免共享负荷按有据物理关系归属；使用精确kWh/MJ单位换算。 | MJ | 连续计量及生产期核对 | 对应生产期；声明日期、停机、开机及覆盖 | 声明加工厂及实际供方、接收方 | 每 1 kg 参考流 | 校准、原始记录、测试SOP、覆盖及核对证据 |
| cp_heat | emboss_convert | steam_heat, condensate_return | measured_record | 实际热服务供方基准；供应、返回及排气kg；绝压及表压；温度；蒸汽干度；凝结水品质；焓及基准；存量变化；损失；H_net；k_bg证据；Q_bg | 用经校准蒸汽及凝结水质量和状态仪表测供应及返回界面；获取兼容供方参考定义和有据焓计算。实物kg账独立于供热MJ，不重复信用。 | MJ; kg | 连续状态及质量记录、生产期 | 对应生产期；声明日期、停机、开机及覆盖 | 声明加工厂及实际供方、接收方 | 每 1 kg 参考流 | 校准、原始记录、测试SOP、覆盖及核对证据 |
| cp_water | emboss_convert | process_water | measured_record | 处理水供给及用途；体积及质量；实际密度和温度；湿度；纸张进出水分；存量变化；废水及排气去向 | 专用水表或秤及密度温度记录；纸张水分化验和对应环境、过程湿度；不假定废水纯水或固定密度。 | kg | 每次使用及生产期平衡 | 对应生产期；声明日期、停机、开机及覆盖 | 声明加工厂及实际供方、接收方 | 每 1 kg 参考流 | 校准、原始记录、测试SOP、覆盖及核对证据 |
| cp_wastes | emboss_convert | paper_trim, captured_dust, waste_wrapper, waste_pe, waste_carton, waste_pallet, waste_lubricating_oil, cleaning_effluent | measured_record | row_id；实际状态、构成和来源；质量；水分、密度及温度；存量；污染；具体接收方及处理；内部返回；独立收集批 | 各实际废物分别用经校准称量，完整液体用V*rho_eff(T)，配合构成采样及转运凭据。每个实际独立处理的流及接收方各一行，不用已处理状态身份代表未处理外送。 | kg | 每收集、转运批及生产期 | 对应生产期；声明日期、停机、开机及覆盖 | 声明加工厂及实际供方、接收方 | 每 1 kg 参考流 | 校准、原始记录、测试SOP、覆盖及核对证据 |
| cp_emissions | emboss_convert | pm25, pm25_10, pm10plus, water_vapour | measured_record | row_id；最终源及介质；流量及运行时间；代表性控制后浓度；空气动力学粒径界限；捕集质量；无组织调查；水分通量及物料水平衡；不确定性和检出限 | 采用有据源特定烟道或无组织监测，记录粒径采样、校准及标准状态；确定运行期控制后的实际排放质量。水蒸气采用实测湿度通量或已核对物料水平衡。分开记录不存在、已测及未测，不设排放因子。 | kg | 代表性生产期及全部运行模式 | 对应生产期；声明日期、停机、开机及覆盖 | 声明加工厂及实际供方、接收方 | 每 1 kg 参考流 | 校准、原始记录、测试SOP、覆盖及核对证据 |
| cp_freight | emboss_convert | freight | measured_record | 发货及运输段；实际载货kg；路线km；车辆、燃料及排放级别；装载及返程约定；供方参考；已含供方运输 | 可追溯到货、载货凭据及路线证据；逐公路运输段合计实际kg*km，核对供方约定。完成数据集前分列其他模式。 | kg*km | 每次到货及运输段 | 对应生产期；声明日期、停机、开机及覆盖 | 声明加工厂及实际供方、接收方 | 每 1 kg 参考流 | 校准、原始记录、测试SOP、覆盖及核对证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | 使用可归属同一生产期实际交换总量除以实测验收纸张净质量P。reference_product为1 kg。未分配实物总量另保留；不以标称纸种质量作为P。 | actual row quantities; P; cp_mass | 每1 kg参考流交换量 |  |
| physical_reconciliation | base_paper, reference_product, paper_trim, captured_dust, water_vapour | 实际湿质量、干固体、水及实测碳分别核对：进入量加期初存量等于验收纸张、实际外送残余及排放加期末存量；内部发送和接收按同状态同量抵消。水平衡包括调湿水和蒸汽实物界面，包装另账，空气侧净水分获得及损失须记录。不虚设收率和水分。 | cp_materials; cp_mass; cp_water; cp_heat; cp_wastes; cp_emissions | 各实物账及实测残差，并附解释 |  |
| native_utility_conversion | electricity, steam_heat, freight | 电力kWh以精确3.6换MJ。仅有据兼容供方定义及实测界面焓时用蒸汽Q_bg = k_bg*H_net，返回、存量及损失只计一次；未知对应保持未决。公路运输保留实际载货kg乘km，1 t*km对应1000 kg*km。 | cp_electricity; cp_heat; cp_freight | 同期未归一原生参考属性总量；随后由 campaign_normalization 按 P 仅归一一次 |  |
| particle_intervals | pm25, pm25_10, pm10plus | 各实测最终控制后浓度乘对应标准化空气体积流率并按运行时间积分；核实干湿及标准体积约定兼容。使用互斥实测粒径，粒径分割未解决时保持未知，不虚设比例或重复PM10总量。 | cp_emissions | 同期未归一各互斥粒径实际排放 kg；随后由 campaign_normalization 按 P 仅归一一次 | jrc-pp-bref-2015 |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | 独立核实完整实物身份、来源路线、名称限定、参考属性单位及供方接收方基准；不采用修正流、路线冲突替代及空UUID代理。 | 原生身份及实际证明、供方定义 |
| coverage | emboss_convert | 覆盖代表性运行模式、换产、返工、调湿、除尘器性能及实际维护包装；披露期间、存量、表计缺口和不确定性。各实际独立购入/消耗的额外化学品、清洁剂、油组分、过滤器、抹布、包装及运输模式各需独立原子行；已含于整份供应润滑油或其他完整产品中的组分仅作组成账，不重复采购，现场另购配制则按真实边界保留实际准备负荷。 | 生产期记录、逐项物料单及计量覆盖 |
| measurement | reference_product | 标称250纸种及历史目录试验不替代实际净P、水分、定量、厚度、双面纹理、当前规格及实测平衡残差。定量清单实际采集，不设通用配方及默认因子。 | cp_mass; favini-embossed-tds |
| physical_allocation | all inventory rows | 完整实物链接和平衡与可归属环境负荷账并存；无论分配份额如何保留完整联产品及包装质量。 | cp_materials; cp_wastes; ec-ef-allocation-2021 |

水组分账须对完整液态残余和湿固体采用实测H2O分数，另核非水物质；完整湿废水不当作纯水，实际从空气吸湿不记为负的外排蒸汽。用采购、存量和维护记录调查压花辊覆层、切刀、滤材、皮带、润滑剂、清洗剂及其他实际消耗或更换件；不预设任何材料存在或不存在，实际新增实物流逐项原子化。

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference_product | 要求声明的白色未涂布标称250双面机械亚麻纹纸及加工路线。拒绝生活用纸、Clupak、湿部纹理、印刷、涂布、层压、其他纹理颜色及仅重新包装用途。 | favini-biancoflash-range, favini-embossed-tds, ricoh-media-2021 |
| validate_reference | all inventory rows | 恰好一个参考产品输出行；1 kg验收纸净质量，数量、协议、计算及两稿使用同一P。缺限定、未核实净质量或不兼容水分基准使实际数据不完整。 |  |
| validate_balance | emboss_convert | 要求核对后的湿干、水、碳及包装实物账，内部等量链接和实测残差解释。核实公用工程供方换算及边界只计一次；只有蒸汽MJ、缺状态及k_bg不能确立完整链接。 |  |
| validate_emissions | pm25, pm25_10, pm10plus, captured_dust, water_vapour | 不叠加嵌套尘合计，不假定粒径比例，不用修正流、默认正因子或未测零声明。捕集外送与室外排放分开；未知或非预期物种、来源及介质核实前明确不完整。实际生物CO2保留于LCI。 | jrc-pp-bref-2015 |
| validate_links | all inventory rows | 凝结水、未清洗LDPE废物及废旧托盘的条件身份须核实实际组成、状态及接收方；未解决的数量与供方兼容性仍属数据完成缺口。已编写方法不豁免这些缺口，不表示独立科学批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 已核实外购原纸双面亚麻纹加工的声明纸种，实际上游供方链接及边界披露 |
| excluded_use | 通用起皱、全部CPC32142产品、上游制浆造纸、印刷制品使用、其他纹理颜色路线及链接未决时完整从摇篮到厂门声称 |
| required_metadata | 参考限定；纸种浆料及实际供方；期间、场址及地域；辊式、能源和调湿配置；数量及原生单位；实物平衡、返工及存量；废物接收方；实际运输及包装；分配方法和来源版本 |
| required_quality_disclosure | 实测与不存在、未测交换区分；粒径不确定性；平衡残差；UUID、数量及供方链接缺失；历史生产者打印设备来源限定及独立审核状态 |
| update_trigger | 纸种浆料、表面处理、能源调湿或接收路线、计量方法、参考身份供方基准或重要来源修订发生变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| favini-biancoflash-range | handbook | [Favini Biancoflash](https://www.favini.com/gs/en/products/biancoflash/); [Favini Embossing](https://www.favini.com/gs/en/embossing/) | 生产者商品亚麻纹、白纸类别及纸张终点；不是环境数量或工厂配置证据。 |
| favini-embossed-tds | handbook | [Favini official technical archive](https://www.favini.com/gs/wp-content/uploads/2023/06/Biancoflash-TDS-16092022-EN-1.zip); Biancoflash-Embossed-TDS-19092022-EN.pdf, 第1-2页，表头19.09.2022 | Premium LN2/S标称250列、定量水分方法标识及调湿。PDF元数据修改于2026年3月，压缩包名称与表头日期不同。不采用供方水分、公差、配方或数量清单默认值；未获取完整ISO方法。 |
| ricoh-media-2021 | handbook | [Ricoh Pro C5300s/C5310s qualified media list, rev1](https://www.ricoh.ch/it/media/pro%20c5300s%20series_integrated%20media%20list_it_%20rev%201_tcm72-45456.pdf), 01/06/2021, PDF第3页 | 独立设备生产者核实Favini LN2/S未涂布纹理250实际商品。历史打印设备案例，不声称当前印刷性能，不提供过程清单、能源或排放因子。 |
| gmund-embossing-process | handbook | [Gmund Paper: Precision in Finishing and Processing](https://www.gmund.com/en_int/magazine/gmund-paper-precision-in-finishing-and-processing/), 后加工设备及技术段落 | 生产者原始案例支持压花压光机、裁切及有无蒸汽选项；不确立Favini设备、温度、数量或通用压花次数。 |
| jrc-pp-bref-2015 | official_guidance | [JRC Production of Pulp, Paper and Board BREF2015](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf#page=708), 印刷670 / PDF708，§7.1.10及此前压光背景 | 官方纸后加工能源、裁切粉尘、切边及发运机理，定性适用于本加工厂。不假定碎浆返回，不给粒径比例及定量因子。 |
| ec-ef-allocation-2021 | official_guidance | [European Commission C(2021)9332 Annexes1-2](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf#page=63), 附件I §4.5，第63-64页 | 仅分配层级：细分、系统扩展、基础物理关系及有据替代。不提供回收信用或完整PEF符合声称。 |
