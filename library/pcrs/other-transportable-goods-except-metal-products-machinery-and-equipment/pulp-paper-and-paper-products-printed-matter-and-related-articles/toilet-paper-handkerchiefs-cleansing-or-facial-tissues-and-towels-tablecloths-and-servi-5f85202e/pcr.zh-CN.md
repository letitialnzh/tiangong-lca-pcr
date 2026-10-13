---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.toilet-paper-handkerchiefs-cleansing-or-facial-tissues-and-towels-tablecloths-and-servi-5f85202e
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 购入起皱生活用纸母卷干法加工厕用卷纸

## 1. 范围与适用性

本PCR适用于将购入的原生纤维常规湿压榨/Yankee干法起皱生活用纸母卷干法加工为未印刷、未加乳液的厕用卷纸：接收/拆包、放卷与组层、机械压花、有证明时采用PVAc/水粘接、打孔、在购入纸板芯上复卷、长卷切割、验收、零售/组合包裹及托盘装载。生产范围为经计量的加工厂门到门单元；不规定工厂配方、年均数量或固定每卷/每张质量。生产者示例支持阶段分离，不表明胶种或层数普遍必需。[sofidel-production-cycle, jrc-pp-bref-2015]

排除母卷造纸、木材制浆/漂白、回收纤维/脱墨、TAD/混合/气流成网材料、纤维素填絮、面巾纸、餐巾纸、纸巾、桌布、服装、印刷、乳液/香精施加、加工端非PVAc化学品及现场制芯。这些需要适用并经审查的方法扩展，不能按分类自动选择。不同母卷技术不能借用32131常规起皱背景。现场热干燥/蒸汽/燃气燃烧及燃油搬运不属于本全电加工路线；若存在，须以合适排放证据单独建模后重新核定适用性。

CPC3.0 32193范围比本产品/路线宽。本方法范围为narrower，已接受关系以权威映射及其ADR为准。现有32131母卷方法止于消费品加工之前，其原纸输出与本PCR成品卷纸输出为不同实物接口；分类与用途本身不能使二者互换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.toilet-paper-handkerchiefs-cleansing-or-facial-tissues-and-towels-tablecloths-and-servi-5f85202e |
| classification_refs | CPC 3.0 32193; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 购入原生纤维CWP干法起皱母卷加工的未印刷、未加乳液有芯厕用卷纸 |
| excluded_products | 原纸；面巾纸/餐巾纸/纸巾/桌布/服装；其他纤维网/造纸/化学/热加工路线 |
| representative_product | 经验收包装的有芯厕用卷纸，具有实测纸张净质量与质量指标 |
| production_route | 购入母卷 -> 放卷/压花/可选PVAc粘接/打孔 -> 有芯复卷/长卷切割 -> 包装/托盘装载 |
| market_state | 加工厂出厂的消费品厕用卷纸；参考质量排除纸芯及包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为声明的卫生用途提供成品厕用纸 |
| How much | 1 kg验收成品纸净质量，采用实测加工厂出厂含水率 |
| How well | 声明层数、定量、尺寸/打孔、柔软度、抗张强度、适用时湿强、分散性及买方验收；质量本身不证明服务相等 |
| How long or cycle | 一个声明的加工批期及交付；不固定单卷使用寿命或张数 |
| reference_flow_link | finished_rolls |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 卫生纸 `928c2d4c-0c44-4a6b-896f-ad51bdb2f317` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 成品厕用卷纸；原生纤维常规干法起皱母卷身份与相容供方；批期/等级；纸净质量P与出厂含水率实测；包含留存胶固体；排除纸芯/包裹；层数/定量/尺寸/打孔及验收质量；实际粘接/配方；电网电压/地区/年份/接口；水源/密度；包装等级、托盘周转、废物状态/接收方及室外空气测试范围 |

须在数据包声明所有必需限定信息，缺失则参考定义不完整。已核实的卫生纸身份描述成品卫生用纸，非上游原纸，且无相反制造路线限制；它不证明背景生产数据集存在。按数量销售的记录须由实际批次称量支持；不允许固定每卷、每张或每包质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | P为实测出厂含水率下验收成品纸净质量，包含留存胶固体，排除纸芯/包装/不合格品。采用cp_mass采集。每行使用同一1 kg分母。 |
| wet_dry_basis | 质量基原纸、纸芯、胶/配方、包装及废物水分组分账 | 质量 | kg | 保留每项实物流的实测湿质量m和湿基含水率w；干固体 = m*(1-w)。交付母卷kg不等于干kg。供方背景须匹配含水率及组成。不固定含水率或损失比例。 原生电力NCV/MJ不在本质量/水分规则内；实测辅助物料水/固体不替代能量分子。 |
| component_basis | adhesive, adhesive_water, water | 质量 | kg | 独立计量配方胶与留存/损失聚合物及水。纯聚合物kg不是乳液kg。水体积转质量采用实际实测密度及条件；数据库次级系数不证明场址密度。 |
| electricity_basis | electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按精确3.6 MJ/kWh换算表计kWh，保留实际供方电压/电网及损耗接口。这是单位换算，不是效率或热能等价。 |
| emission_basis | pm25, pmcoarse, pmover10, water_evaporation | 质量 | kg | 仅计入排向室外空气的流；保留粒径区间及水蒸气身份。收集固体尘为废物，不是空气基本流。不将累计PM10/PM2.5与互斥粒级相加。不假定干切产生CO2；即使温室气体报告指标不计，上游LCI仍保留实际生物CO2。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工厂接收验收购入的相容原生纤维常规起皱母卷 |
| starting_condition_role | 前景投入门；上游供货生产与交付 |
| product_classification_scope | CPC:3.0:32193; narrower |
| recursive_input_rule | 仅购入成品厕用卷纸再包装不属于本生产路线。内部长卷/卷纸/返工为守恒阶段链接，不是递归上游采购。 |
| upstream_dataset_requirement | 实际母卷、纸芯、化学品、水、电力、包装及入厂交付供方，匹配状态/组成/单位/年份/地区。未解决的正投入或接收方链接使完整从摇篮到大门声明不成立。 |
| disclosure | 前景门到门与链接后的从摇篮到大门；分表/等级/批期范围；上游恰好链接一次；排除项、库存变化、废物接收方及任何遗漏交换 |

一体化纸机可内部供给母卷：保留实际kg/含水率/等级及发送/接收两端等量记录；上游造纸单元或其相容背景只纳入一次。不能同时加入购入母卷生产负荷和同一一体化制浆/成形/干燥负荷。独立归属加工公用工程。本汇总加工单元仍保留复卷、切割及包装各阶段分表和衡算；同身份中间卷纸保持内部状态。

纳入可归属的除尘、压缩空气、电动搬运、清洁及包装；记录实际维护用品、废水和不合格品。本清单限定声明路线，不允许遗漏实际化学品、润滑剂、制冷剂泄漏、其他包装组分或污染物。存在额外交换时须另列原子行并取得相容身份/计量证据，之后才能声称完整。不设通用截断；说明遗漏范围及敏感性。现场废水处理或直接排水体须补充处理投入、逐污染物基本流及污泥组成/接收方证据，不能用厂外转移行覆盖。[epa-lca-2006]

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_once | dry_conversion | 相容母卷上游生产/交付恰好链接一次；不重复一体化制浆/成形/干燥负荷。 | sofidel-production-cycle |
| boundary_stage_links | dry_conversion | 在一个汇总加工单元中保留等量实际内部转移及独立阶段公用工程、产品、水和废物记录。 | jrc-pp-bref-2015 |

为每项纸板芯、PE包膜、瓦楞纸箱和木托盘分别保留完整实物账：实际接收/领用、发出、返还、期初/期末库存及外部废物，匹配同一批期及纸净量P。随母卷入厂的纸芯/包膜是供方边界匹配的组分观察，不是来源不明的另购投入；披露其实测入厂及废弃/返还量。出厂辅助组分始终排除在P外，也不是参与分配的联产品。托盘发出/返还质量及所有权/次数保持实物记录；分摊复用托盘制造服务是另行负荷约定，绝不能缩放实物托盘质量。各实际包装等级/来源层次和不确定性分别记录，不强制通用比例。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| dry_conversion | 厕用卷纸干法加工与包装 | required | 声明的购入母卷及电力公用工程路线 | 前景生产 | 1 kg reference flow |

实物阶段图：母卷接收/拆包 -> 放卷/组层 -> 压花/可选粘接/打孔 -> 有芯复卷/长卷切割 -> 验收卷纸 -> 包裹/托盘装载。内部发送/接收链接匹配质量、含水率/状态及时段。分开记录各阶段纸净量、胶、芯、膜、箱及托盘；分拣纸边/收集尘/废芯/包膜交实际接收方。分配前保留产品/库存/水/碳实物衡算。参考输出仅在包装后声明一次；虽参考纸净质量排除包装，实物组分账仍追踪包装组分。[sofidel-production-cycle, jrc-pp-bref-2015]

### 过程：干法加工与包装（`dry_conversion`）

#### 输入

##### 产品流

###### 购入生活用纸母卷 (`parent_reel`)

仅使用原生纤维常规干法起皱母卷。记录浆料、含水率、定量、层数及供方；广义原纸身份包含本子集，但不用于填絮或气流成网材料。母卷生产与交付背景只链接一次。

- 选定流：卫生纸或面巾纸、纸巾或餐巾纸及类似的纸、纤维素填絮和纤维素纤维网 `3070a34a-8d40-426e-9299-7c367b0dca21`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 购入电网电力 (`electricity`)

有条件适用于1–35千伏电网平均用户接口，来源地为中国。核对实际电压、电网/年份、供方与损耗。分表计量放卷、压花/复合、打孔、复卷、切长卷、包装、风机、压缩机及电动搬运；保留1 kWh = 3.6 MJ换算。其他接口须另行核实流。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a3c8-11da-a746-0800200c9a66`.

###### 购入成品纸芯 (`core`)

仅用于与实际卷纸尺寸对应的成品圆纸板芯。参考纸质量排除纸芯；供方背景已含的纸芯制造和胶黏剂不在现场重复计入。保留纸芯实测质量及废母卷纸芯接收方。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 加工胶黏剂中的PVAc聚合物 (`adhesive`)

仅实际有证明的供方二元PVAc/水配方用于条件性粘接，聚合物CAS9003-20-7，不含无依据的额外加工端添加剂。每项真实购胶批按完整湿质量记录聚合物固体、载体水、库存、留存/损失及供方参考。聚合物身份不是整份乳液；adhesive与adhesive_water仅为分析组分或有文件支持的供方过程重建需求，不是两项独立加工厂采购。使用前须有一项兼容完整配方供货卡/供方，或完整供方重建，真实聚合物/制剂制造、实际存在的配制/乳化、辅助/公用工程/损失及交付计一次。真实独立购入现场混合原料/水须有自身记录；其他实际制剂组分须核实路线/清单扩展，不能假定不存在。不设默认浓度。

- 选定流：聚醋酸乙烯酯 `46c91184-28ea-4b2e-a4e7-c07f3f84369b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_adhesive`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### PVAc胶黏剂载体水 (`adhesive_water`)

仅代表有证明的购入二元PVAc/水配方中实际载体水。原生工艺用水为产品流/质量kg，用于混合与配方、工厂端全球生产组合；可条件匹配实际配方载体水，不代表整份乳液kg或全球后台。原记录未给CAS或水质规格。按组分重建前核实实际水源、处理/纯度/等级、供方生产边界、实测水分数及原生kg水参考。按实际供货质量和经验证水检测取得组分质量，不把整份乳液当水；不再计为现场稀释自来水，也不重复完整乳液背景。实际等级/参考不匹配时，供方/身份替代保持待核；CTUe或物品数量基准的近名水不能替代kg。 此载体组分仅为分析或adhesive定义的完整供方过程重建需求；已含于供胶时不是加工厂独立采购。实际供方水处理、制剂配制、辅助、损失、公用工程及交付随完整供货保留一次。

- 选定流：工艺用水 `64ad2a57-fc3a-482b-8592-5457dbe42803`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_adhesive`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 购入稀释及清洁用自来水 (`water`)

仅计入实际另购处理后自来水。参考属性为质量/kg；体积表读数须以记录条件下的实测密度换算，不用数据库筛查系数。先分开稀释与清洁记录，再汇总同一供水流。清洁为辅助操作，不是湿法造纸。核对实际供水方与交付基准。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 包裹用PE薄膜 (`pe_film`)

仅用于实际聚乙烯薄膜，CAS 9002-88-4，包含归属本产品的零售、组合及拉伸包膜。记录牌号、质量、添加剂和供方。其他聚合物及多层膜须另列核实后的原子行。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 成品瓦楞运输纸箱 (`box`)

仅在实际使用成品瓦楞运输纸箱时纳入。原生瓦楞纸箱采用质量kg，并明确限定原生纤维16.6%、再生纤维83.4%；只有实际供应/参考基准与该限制相容且有证明时使用此定位。这些来源比例不是工厂配方，也不是通用默认。记录实际尺寸、等级、涂层/印刷、纤维比例及检测基准、含水率、完整质量、供方地域/年份和数量定义。实际纤维组成不同或未核实时，另取得兼容身份/供方，不能把条件UUID视为已解决数据集。链接实际瓦楞纸箱制造，不用折叠纸盒路线或包装组合；不产生默认再生成分抵扣、废物比例或避免负荷。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 木制运输托盘 (`pallet`)

仅用于实际完整木制载货平台；广义身份包含托盘，不指定树种或处理。记录实际质量、类型、处理、接收方、所有权及周转次数。一次性托盘质量或分摊周转托盘制造服务须匹配供方；实物账保留实际发出和返还数量。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

#### 输出

##### 产品流

###### 验收成品厕用卷纸 (`finished_rolls`)

唯一参考产品输出为1 千克验收成品纸净质量，采用实测出厂含水率，包含留在纸上的加工端胶固体，但排除纸芯及所有包装。实物产品账另记每项留存组分。切割前长卷及包装前卷纸是本前景单元内部阶段，不另列参考产品输出。不固定每卷、每张或每包重量；仅比较相容质量。

- 选定流：卫生纸 `928c2d4c-0c44-4a6b-896f-ad51bdb2f317`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

##### 废物流

###### 交接收方的纸边与不合格纸 (`tissue_trim`)

一项与纸芯及收集粉尘实物分开的废纸流。记录含水率、实际胶污染、称量质量及明确接收方/路线；未指定废纸的广义身份不赋予回收抵扣。内部返工不是外部废物交换。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 交接收方的收集干纸尘 (`captured_dust`)

仅用于实际捕集的干纤维素纸尘，单独称量，记录组成、含水率、污染及接收方。广义粉尘身份包含捕集残余物且无相反处理路线；不是空气基本排放，也不默认纯纤维素。内部回用部分须保留等量发送/接收记录并从外部废物中排除。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 废纸板芯 (`core_waste`)

实际用毕母卷纸板芯及报废购入纸板芯，与纸边和纸箱实物分开。原生未指定废纸身份及纸/纸板废物分类涵盖该材质家族，无强制产生或处理路线；并不证明纸芯专用后台。保留各实际来源记录、尺寸、纸板/胶/涂层组成、污染、完整湿质量、含水率、库存及接收许可/参考基准。链接数据前核实每项实际纸板芯流和下游处理；仅包装边角/不合格的a318记录不覆盖用毕入厂纸芯。不借用其2%估计，不假定回收，也不删掉原有用毕纸芯出口。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 废瓦楞纸箱 (`board_waste`)

实际瓦楞纸箱边角料及破损/拆除纸板包装，与纸芯及纸边分开。原生未指定废纸家族包含纸板废物，无仅包装时产生或特定处理路线；后台兼容仍以实际材料为条件。分别核对入厂拆包及出厂包装损失、实测完整湿质量/含水率、纤维/胶/涂层/印刷污染、库存和实际接收方/参考基准。汇总前核实各来源层次；组成或接收方不同时保留独立实际记录。仅包装时产生的722记录及其来源2%估计，不能默认为入厂拆包或通用PCR损失率。不假定回收率或避免抵扣。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 交外部接收方的未清洗PE废膜 (`pe_waste`)

一项分拣后的实际未清洗固态PE废膜流，包含拆除入厂包膜或包装废料。原生固体废物明确涵盖工业废弃材料，无规定处理路线；此为条件物理定位，不是精确聚合物或处理数据集。按供方物料记录核实实际PE物种/CAS、薄膜牌号/形态、助剂、水分、污染/附着物、各来源质量及合法废物状态。称量完整实际流，并核实接收方许可、运输/处理边界及原生完整质量参考。不将PET/PP或复合废料合并到本项，其他实际材料须单独识别。保留未清洗出厂状态，清洗机械回收或光学装配记录不能替代；不假定清洗、回收率、可售产品身份或避免原生树脂抵扣。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 送厂外处理的含PVAc清洁废水 (`wastewater`)

仅在实际胶设备清洗时记录另行收集并外送处理的液体。原生废液明确包含工业清洗废水，无规定处理路线；可条件定位该实际含PVAc混合物，不是直接水排放。称量完整湿液质量，或按实际混合液体积乘对应状态实测混合液密度；混合液质量不是纯水质量。记录实测水分数、PVAc固体及所有其他实际成分/负荷、库存变化、运输、明确接收许可及处理/参考数量兼容。另保留实际组分水衡算，不对混合液使用纯水密度，也不把接收方排放计为前景直接排放。不假定现场造纸污泥或默认处理。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-pp-bref-2015`, `sofidel-production-cycle`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

##### 基本流

###### 排出的PM2.5粒级颗粒 (`pm25`)

介质为室外空气、未特指子介质，数量为治理后实际排出颗粒质量，加上独立评价的逸散排放。采用相容PM2.5粒径定义；排除布袋/滤器内截留尘。不设默认排放因子。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`epa-method-201a-2020`, `jrc-pp-bref-2015`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 排出的PM2.5–PM10粒级颗粒 (`pmcoarse`)

室外空气、未特指子介质。仅记录互斥粗粒区间：同一流、方法与时段下相容累计PM10减PM2.5。负差值或不相容差值须审查；不再次累加累计PM10。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`epa-method-201a-2020`, `jrc-pp-bref-2015`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 排出的超过PM10颗粒 (`pmover10`)

室外空气、未特指子介质。独立测量该粒级，或采用经验证同流测试的相容总可过滤颗粒减PM10；保留方法回收边界。201A粒径测试本身不能普遍证明总颗粒量。不将未特指总尘再次累加到三个粒级。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`epa-method-201a-2020`, `jrc-pp-bref-2015`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### 实际水蒸发 (`water_evaporation`)

排向室外空气、未特指子介质的水蒸气；质量/kg。仅计入扣除产品含水、液体转移及库存变化后的实际纸/胶/稀释净失水。不是蒸汽能源或淡水液态排放。仅按可信水衡算定量；未知残差保持未解决，不强制视为蒸发。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集批期归属于参考纸的实际数量除以验收成品纸净产量P；保留cp_mass及本行协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`epa-lca-2006`
参考单位组: `93a60a57-a4c8-11da-a746-0800200c9a66`.

## 7. 分配与共产品处理

首先采用分阶段/分等级分表及直接物料记录避免分配。共享压缩机、风机、电动搬运及包装公用工程须采用有证明的因果驱动（计量能源或实测设备负荷及运行小时）、同一时段，并与工厂总量核对。若细分/实物因果仍不能解决共享负荷，披露分配基准、替代方案与敏感性并接受方法审查；不自动按质量或销售额分摊。废物不因销售即自动成为联产品，也不假定避免生产抵扣。真实产品状态须有合法产品/废物身份、接收方认可规格及真实用途/功能；支付本身不足。改变状态需另核产品流身份，不能仅因收入把废物流改为产品。[epa-lca-2006]

实物账保留完整未分配质量/水/碳衡算及每项实际产品/废物输出。另设环境负荷账分配共同负荷；同一时段份额总和为1。不得把实际联产品输出或内部转移量乘以环境分配份额。产品与废物处理须采用一致的供方/接收方回收约定；不能将截断方法与未经支持的替代抵扣混用。

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_causal | dry_conversion | 采用细分及实测因果分配共享负荷；未解决分配须披露替代方案并审查敏感性。 | epa-lca-2006 |
| allocation_physical | dry_conversion | 将完整实际产品/废物/内部转移实物量与分配后环境负荷分开；不以分配份额缩放实物输出。 | epa-lca-2006 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dry_conversion | finished_rolls | 前景计量及记录 | 等级/批号；验收/不合格质量；整包毛重；芯/包装皮重；实测含水率；留存干胶；卷/张数量 | 对拆包/去芯验收成品使用校准秤，或核对同批毛重/皮重。按等级/层数/尺寸抽样并用经验证含水率SOP；数量与实际批质量核对，不采用通用单件质量。 P = 批期验收成品纸净质量；产品行1 kg；其他行除以P | kg | 每批及代表性含水率样本 | 同一声明生产批期，含不合格品、启停及库存 | 声明加工厂及实际供方/接收方 | 每 1 kg 参考流 | 校准；原始联单；经验证抽样；不确定性及覆盖 |
| cp_materials | dry_conversion | parent_reel, core, pe_film, box, pallet | 前景计量及记录 | 供方/批号/等级；实际接收/消耗/发出/返还；含水率；实测干固体/碳比例及方法；库存；包装组分；托盘次数 | 分项称量物料，并将票据与期初/期末库存、内部链接和发出组分记录核对；匹配实际供方参考基准，不用通用配方。 批期可归属净投入除以P；另保留实物发出/返还数量 | kg | 每批与库存核对 | 同一声明生产批期，含不合格品、启停及库存 | 声明加工厂及实际供方/接收方 | 每 1 kg 参考流 | 校准；原始联单；经验证抽样；不确定性及覆盖 |
| cp_utilities | dry_conversion | electricity | 前景计量及记录 | 表计期初/期末；阶段kWh；电压；压缩机/风机负荷/小时；搬运/包装；损耗/供方 | 经校准分表与账单核对。共享公用工程须按实测因果分配；保留独立阶段与共同负荷账。 可归属kWh乘3.6除以P | MJ | 连续表计；批次/批期合计 | 同一声明生产批期，含不合格品、启停及库存 | 声明加工厂及实际供方/接收方 | 每 1 kg 参考流 | 校准；原始联单；经验证抽样；不确定性及覆盖 |
| cp_adhesive | dry_conversion | adhesive, adhesive_water | 前景计量及记录 | 商品牌号/SDS/CAS；供货质量；实测固体/水比例；留存及废物固体/水；背景kg约定 | 供方批次证明、完整湿胶称量及经验证固体/水分析用于闭合组分平衡。完整采购批计一次，组分质量仅为分析或供方重建需求，不是独立加工厂采购。匹配真实供方湿干参考，保留全部聚合物/制剂配制、实际乳化/辅助/公用工程/损失及交付一次。使用前须兼容完整供货卡/供方或有文件支持的供方过程重建；不重复整背景与组分。真实可归属供货量按P归一，原始组成/库存/留存/废料账保留。 | kg | 每配方批与施胶批 | 同一声明生产批期，含不合格品、启停及库存 | 声明加工厂及实际供方/接收方 | 每 1 kg 参考流 | 校准；原始联单；经验证抽样；不确定性及覆盖 |
| cp_waste | dry_conversion | tissue_trim, captured_dust, core_waste, board_waste, pe_waste | 前景计量及记录 | 流身份；湿/干质量；含水率；污染；库存变化；内部回用；接收方联单/接收条件 | 分容器并经校准称量；将转移联单与过程损失及库存核对。区分纸尘、纸边、纸芯、纸板及PE废膜；不假设废物比例或接收方收率。 每项实际外部流质量除以P；排除内部回用 | kg | 每次移出及批期衡算 | 同一声明生产批期，含不合格品、启停及库存 | 声明加工厂及实际供方/接收方 | 每 1 kg 参考流 | 校准；原始联单；经验证抽样；不确定性及覆盖 |
| cp_emissions | dry_conversion | pm25, pmcoarse, pmover10 | 前景计量及记录 | 排口/治理；粒级；方法/温度/液滴；浓度；相容排气体积；运行时间；逸散范围；不确定性/检出限 | 采用有效现场方案实施代表性同流固定源分粒级测试。EPA201A用于可过滤固定源排放，并受温度/液滴条件限制；存在可凝结颗粒时须采用适用补充方法。它不是逸散或通用总尘方法。采用有证据的现场方法另评建筑/逸散排放。 相容浓度乘实际排气体积及运行时间，加独立逸散排放；每互斥粒级质量除以P | kg | 代表性等级/负荷及核实运行覆盖 | 同一声明生产批期，含不合格品、启停及库存 | 声明加工厂及实际供方/接收方 | 每 1 kg 参考流 | 校准；原始联单；经验证抽样；不确定性及覆盖 |
| cp_water | dry_conversion | water, wastewater, water_evaporation | 前景计量及记录 | 稀释/清洁表计；实测密度；载体水；产品含水；液体固体；净蒸发；库存变化；接收方 | 逐水接口称量或计量；体积换算时测密度/温度；分开收集PVAc清洁液并取得接收方记录。与实际纸/胶含水及库存核对进/出水，披露残差不确定性。 每实际可归属水接口质量除以P；未知衡算残差保持待定 | kg | 每批/清洁转移及批期核对 | 同一声明生产批期，含不合格品、启停及库存 | 声明加工厂及实际供方/接收方 | 每 1 kg 参考流 | 校准；原始联单；经验证抽样；不确定性及覆盖 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_campaign | all inventory rows | 采集批期可归属数量 / 验收成品纸净产量P；finished_rolls为1 kg参考流。 | campaign amounts; P; cp_mass | 每1 kg参考流交换 | epa-lca-2006 |
| reconcile_physical | dry_conversion | 按组分及实测湿/干状态核对：进入物料 = 验收成品纸 + 发出的芯/包装 + 实际分拣废物/排放 + 净库存变化；匹配内部转移相消。分配前记录未解释残差。 | cp_materials; cp_mass; cp_adhesive; cp_waste; cp_water | 未分配实物账与残差 | epa-lca-2006 |
| pm_partition | pm25, pmcoarse, pmover10 | 仅用于相容同流测量：粗粒 = 累计PM10 - PM2.5；总尘测试有效时超过10粒级 = 总可过滤颗粒 - PM10。保留方法不确定性及可凝结范围；拒绝不相容或负差值。 | cp_emissions | 互斥室外空气粒级质量 | epa-method-201a-2020 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| identity | all inventory rows | 实物身份、路线、组成、属性及单位须匹配；未知UUID/供方基准保持明确。提供正式中文名时逐字使用。 | 供方规格/SDS；身份及数量定义 |
| period | all inventory rows | 采用共同完整批期，披露等级覆盖、启停/不合格品及库存；不将历史/单厂平均数作为通用因子。 | cp_mass; cp_materials; cp_utilities |
| uncertainty | all inventory rows | 报告实测/缺失/估计状态、检出限、校准及残差不确定性。缺数据不等于零。 | cp_emissions; cp_water; epa-lca-2006 |
| completeness | dry_conversion | 证明实际化学品、公用工程、包装、废物、排放及供方/接收方接口；无证据不得扩路线或作不完整从摇篮到大门声明。 | epa-lca-2006 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_rolls | 恰好一个参考产品输出；P > 0，1 kg成品纸净质量及相容质量/含水率。数量不能代替实测质量。 | epa-lca-2006 |
| validate_boundary | dry_conversion | 母卷上游仅纳入一次；不重复一体化浆/纸/干燥负荷；内部转移发送/接收数量相同。 | sofidel-production-cycle |
| validate_components | all inventory rows | 逐项闭合纸/芯/胶/包膜/纸箱/托盘/水/库存及发出/返还/废物实物账，区分实物输出与分配后环境负荷。不默认胶浓度、包装废物比例或纸含水率。 | epa-lca-2006 |
| validate_emissions | pm25, pmcoarse, pmover10, water_evaporation | 匹配准确介质/物种/粒径范围及数量定义；已知具体室外受纳子介质时须采用对应已核实身份，不能用未特指掩盖已知环境；不重复嵌套颗粒粒级，不把捕集尘记为空气排放；不完整颗粒测试或水衡算为未决，不是通过。 | epa-method-201a-2020 |
| validate_links | all inventory rows | 实际正交换存在未解决UUID或不相容供方数量时，不能通过完整链接数据集验证。有完整证明的不存在条件交换可为零；缺数据不可视为零。 | epa-lca-2006 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景门到门干法加工数据集；另行识别链接后的从摇篮到大门模型 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 证据及独立审查后的声明厕用卷纸路线、相容质量与纸净量基准 |
| excluded_use | 完整CPC32193覆盖；母卷生产；其他生活用纸制品/路线；通用每卷/每张服务比较 |
| required_metadata | 参考限定信息；过程图；供方/接收方；批期/库存；公式；分配与原始实物衡算 |
| required_quality_disclosure | UUID/供方缺口、计量/分粒级测试覆盖、未知残差、不确定性及路线排除项 |
| update_trigger | 母卷技术、组成/粘接、公用工程/包装/接收方路线或实质计量证据变化 |

## 11. 数据源

| 来源id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| jrc-pp-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), section 7.1.10, printed p.670/PDF p.708. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 仅干切/交付及纸边/尘范围；不采用数量或热/造纸因子 |
| sofidel-production-cycle | literature | Sofidel, Production cycle, publisher snapshot read 2026-10-12, steps 07–09. https://www.sofidel.com/en/about-us/production-cycle/ | 仅生产者加工/包装阶段示例；不采用通用配方/消耗因子 |
| epa-method-201a-2020 | method_factor | US EPA Method 201A, October 7, 2020, sections 1.1–1.6/2.1, pp.1–2. https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf | 固定源可过滤颗粒分粒级计量及限制；须现场适用性及补充/逸散评价；不采用排放因子 |
| epa-lca-2006 | official_guidance | US EPA, Life Cycle Assessment: Principles and Practice, EPA/600/R-06/060, May 2006, Chapter 3, printed pp.28–29, publisher text. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1000L86.TXT | 通用数据透明及逐步分配指导；仅历史教学方法，不是现行ISO原文、行业配方或调查数量 |
