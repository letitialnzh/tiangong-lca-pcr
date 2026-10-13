---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.envelopes-letter-cards-plain-postcards-and-correspondence-cards-of-paper-or-paperboard-e8c833f2
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 未印刷无窗再润湿胶封口纸信封

## 1. 范围与适用性

本 PCR 限定一种空的、未印刷、无窗纸质通信信封：外购未涂布化学浆型纸张，使用水性合成树脂分散型接缝胶，另用水性糊精基再润湿封口胶。本稿是未来实测前景数据的路线规范，不是工厂调查、通用配方或数据集批准。限定信息须选定真实原纸和两种真实供应配方，不规定质量、纸张定量、胶比例或成品率。

无透明膜、窗口开孔或贴窗胶；无离型条、压敏热熔胶或乳胶自粘。无内侧防透印刷、外部印刷、油墨、光油、印版生产或印刷清洗溶剂。仍纳入信封外形模切、压痕及折叠。使用者最终封口、装信及邮政服务在厂门边界之外。实质不同的路线须另审适用性，来源中的选配工位不能合成默认配方。[jrc-converted-paper-2018; lefavor-envelope-manufacturing; eukalin-envelope-adhesives]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.envelopes-letter-cards-plain-postcards-and-correspondence-cards-of-paper-or-paperboard-e8c833f2 |
| classification_refs | CPC 3.0 32192; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 转换厂门的未印刷无窗胶封口空通信信封 |
| excluded_products | 信卡、明信片、文具套装、书信用品夹、缓冲邮袋、有窗或印刷或撕条或自粘信封、厂内造纸 |
| representative_product | 未印刷无窗再润湿胶封口纸信封 |
| production_route | 液压压机纸张模切；坯片压痕折叠；接缝与封口分别上胶；电干燥；插扣瓦楞箱包装 |
| market_state | 封口盖打开待装信、干胶状态的验收空信封，待交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 规定纸张及封口路线的空通信封套 |
| How much | 1 千克 |
| How well | 验收尺寸、纸张定量及水分、接缝完整性及客户约定再润湿封口性能，声明实际试验方法与结果 |
| How long or cycle | 一次制造交付周期；储存寿命及邮寄性能仅按实际试验披露 |
| reference_flow_link | envelope_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 纸或纸板制的信封、封缄信片、明信片及通信卡，装有纸制文具的纸或纸板盒、包、夹和书信用品夹 `e75a08f8-57bd-4900-b01b-8482a1dc7546` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 未印刷；无窗口开孔；打开的干态再润湿封口盖；未涂布化学浆纸种、配浆及再生比例；纸张定量；尺寸；净质量水分基准；两种胶牌号、固含及载体水；接缝结构；电干燥；场址年份；验收净产出；包装；实际供应方及背景 |

正式参考名宽于本 PCR。元数据须将该 UUID 绑定到本稿具体信封。须声明全部必需限定信息；UUID 匹配本身不证明过程数据集适用。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | envelope_output | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用验收调湿空信封净质量，不含交付包装及内容物。所有行及采集聚合均为每 1 kg 参考流；测验收时段净质量，不以件数或干纤维代替。 |
| wet_adhesive | seam_glue_input; flap_gum_input | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 湿交付产品质量及实测固体、载体水比例须匹配供应方参考数量。组分平衡单立，不以整份湿质量链接干聚合物数据集，也不重复计胶中水。 |
| electric_delivery | electricity_input | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 采用已核实单位组 1 kWh = 3.6 MJ 将电表读数转换，匹配交付电量及供电损耗边界。不假定热效率或蒸汽焓。 |
| hydraulic_volume | hydraulic_input | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 外部补加工作液按体积参考；质量平衡换算须测批次密度。已有在用油及内部循环不重复计入输入。 |
| disjoint_pm | pm25_output; pmcoarse_output; pmover10_output | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一室外空气边界使用互斥粒径区间；累积 PM10 不与 PM2.5 相加。截留纸尘与外排颗粒分别测量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品未涂布纸张及两种外供水性胶到达转换厂；全部上游制造作为背景链接，不在前景重复造纸 |
| starting_condition_role | 前景厂门输入并要求补齐从资源到厂门背景 |
| product_classification_scope | 仅 CPC32192 中本稿规定信封子集 |
| recursive_input_rule | 外购同类信封不在本纸张转换路线内；不递归，也不把内部返工作为新产品输入。改用外购坯片或成品前须明确调整范围。 |
| upstream_dataset_requirement | 兼容的制浆造纸、胶配方、纸箱、自来水、液压工作液、电网供电及入厂货运数据集；未决 UUID 或供应基准须披露，不作零负荷 |
| disclosure | 声明场址年份、输入状态、截断、物流、废物接收方、可返还胶容器背景、公用工程及产品质量基准 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_converting | converting | 纳入压机裁切、全部压痕折叠上胶、电干燥、抽风、水清洗、物料损失、维护补加及可归属包装和厂内仓储。 | lefavor-envelope-manufacturing; eukalin-envelope-adhesives |
| boundary_upstream | all inventory rows | 上游造纸须用适用制浆造纸原件及匹配供应方条件补齐；不得把木制品调查移植造纸，也不把纸厂排放重复计于转换厂。 | jrc-converted-paper-2018; eu-paper-bref-2015 |
| boundary_route | converting | 本路线排除厂内制浆造纸、涂布、印刷、透明窗及离型条。不假定厂内锅炉、供汽、生物废液处理或直接地表水排放。实际偏离须扩展并重新审查，不默认零值。 | jrc-converted-paper-2018 |
| boundary_waste | all waste outputs | 按实际废物身份和接收处理记录外部交接；内部循环仍为内部流。研究边界若纳入厂外处理，通过其背景计入一次排放。 |  |
| boundary_completeness | all inventory rows | 审计场址物料、公用工程、维护、排放台账及供应方安全数据，包括润滑、挥发性添加剂、污染擦拭物、泄漏及入厂包装。声明数据完整前须逐项增加实际原子交换，不得把未测物种声明为不存在。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| converting | 纸张裁切至包装干胶信封 | required | 规定路线 | foreground | 1 kg |

一个前景单元保留分阶段表计与实物路径：纸张收货 → 液压模切 → 坯片压痕折叠及接缝粘合 → 独立封口上胶及电干燥 → 检验 → 包装。坯片内部交接两端同量，不增加参考产出。环境负荷归属前记录纸、胶固体、载体水、成品水、废物和库存。散装胶采用供应方所有的可返还容器；在供应物料及物流模型内一次纳入容器制造、服务与交付负荷，并记录返还。

### 过程：纸张信封转换 (`converting`)

#### 输入

##### 产品流

###### 原纸 (`paper_input`)

外购未涂布、化学浆型信封用纸张，声明实际再生纤维比例。记录收货与领用质量、水分、定量、尺寸和库存，不以湿纸幅或涂布纸替代。广义 UUID 包含该未涂布纸种，但不决定配浆、供应方或造纸背景数据集。

- 选定流: 未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_materials
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_materials
- 来源: lefavor-envelope-manufacturing

###### 接缝胶液 (`seam_glue_input`)

一个实际供应的湿接缝胶配方，用于侧缝及底缝。要求牌号、完整供应方组成或保密质量核算披露、树脂身份、固含量、载体水、密度、挥发性物种和供应方生产基准。称量实际消耗的湿产品，槽内退回量单列。广义制造粘合剂 UUID 仅涵盖本行限定的一个供应水性接缝配方，不定义其湿参考量或决定供方背景。纯聚醋酸乙烯酯身份不代表整份配方；不默认树脂种类、浓度或涂胶量。

- 选定流: 粘合剂 `279b6b7f-519f-4f32-aab0-99bb61cb90dc`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_adhesive
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_adhesive
- 来源: eukalin-envelope-adhesives

###### 再润湿封口胶 (`flap_gum_input`)

实际供应的一种水性糊精基再润湿封口配方属于广义已制造粘合剂类别；来源重型基材示例不把类别限于建筑用胶。须核实实际糊精化学身份、任何树脂组分、全部添加剂、载体水和实测固含、湿质量及兼容供方参考量与制造基准。完整湿胶不是干糊精，也不是另供的合成树脂接缝胶；虽共用广义UUID，两配方及实量仍分开。供应胶中载体水不重复计新购水。不默认组成、浓度和涂胶量，排除撕封热熔胶、乳胶自粘及离型条。

- 选定流: 粘合剂 `279b6b7f-519f-4f32-aab0-99bb61cb90dc`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_adhesive
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_adhesive
- 来源: jrc-converted-paper-2018; eukalin-envelope-adhesives

###### 稀释及清洗水 (`water_input`)

用于实际胶液稀释及仅用水清洗的处理后自来水。记录水表体积，以实测事件密度换算质量，不套用数据库次级密度默认值。外购胶中原有水仍包含在胶内。要求供应方处理与供水背景兼容。循环水为内部循环，不作为新取水。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_water
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_water
- 来源:

###### 交付电力 (`electricity_input`)

用于压机、折叠粘合、电干燥、抽风机、压缩机及可归属包装仓储公用工程的用户侧低于 1 千伏电网平均交流电。分阶段分表计量并与总表核对。参考属性为净热值，以 MJ 表达；交付电量按电表千瓦时与已核实单位组因子换算，不按燃料燃烧效率换算。场址电压、年份、电源组合、损耗边界及供应方须兼容；较高电压供电的厂内变压须另行明确建模。 采用记录的供电地域为CN；实际地域、年份、电压和供方须兼容，否则另核适用流及背景，不以通用交流电名默认适合任意地区。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_energy
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_energy
- 来源:

###### 交付纸箱 (`box_input`)

一个实际交付纸箱，含其供应时已有的箱体接缝，记录尺寸、楞型及纸板牌号、纤维组成和空箱质量。包装质量不计入参考质量，但纳入环境负荷。不默认原生或再生比例；限定固定纤维混合的 UUID 不能代表任意箱型。本路线限定插扣闭合箱；新增胶带、标签、薄膜或托盘须逐项建实际行并审查适用性。

- 选定流: 瓦楞纤维纸板交付箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_materials
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_materials
- 来源: lefavor-envelope-manufacturing

###### 压机工作液补加 (`hydraulic_input`)

模切压机使用的一个矿物基础油液压工作液配方，按外部补加与更换体积计量。确认牌号、添加剂、实测密度及实际矿物基础油身份。油槽内部循环不作为消耗体积；保留期初期末在用及储存油量、补加、排出与泄漏。广义液压油 UUID 可条件涵盖该矿物基础油子集，但不提供密度、寿命或分配比例。

- 选定流: 液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_maintenance
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_maintenance
- 来源: lefavor-envelope-manufacturing

###### 入厂货运 (`transport_input`)

一种实际入厂柴油公路货运服务，保留含包装的实测货物总质量、实际路线km、车型燃料排放等级、装载及返程约定。广义公路货运身份未规定固定车型大小，但不替代供方选择。原生参考为质量*距离、kg*km：实测吨公里精确乘1000，或逐段合计总kg乘km；保留原吨数和路程记录，验收信封分母不变。服务及已含燃料尾气不重复计，其他运输模式须另行审查并列行。

- 选定流: 货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931`; 单位组 `3620148f-c5db-48ce-9065-a10092089aca` / kg*km
- 数量规则: 实测货运总吨公里乘1000转原生kg*km，再按每1 kg参考流归一化；cp_transport
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_transport
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收信封产出 (`envelope_output`)

验收空成品信封，无印刷、无开孔或透明窗，接缝已粘合，封口胶为干态可再润湿，封口盖保持打开待装信。净交付调湿质量含纸、留存胶固体与残留水，不含纸箱及内容物。用校准秤称量验收批次，废品不进入分母。广义成品 UUID 仅限本稿声明子集。

- 选定流: 纸或纸板制的信封、封缄信片、明信片及通信卡，装有纸制文具的纸或纸板盒、包、夹和书信用品夹 `e75a08f8-57bd-4900-b01b-8482a1dc7546`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_output
- 来源:

##### 废物流

###### 净纸边料 (`trim_output`)

分别收集的干净、未印刷、未上胶模切纸边料，交给已确认接收的回收方。交接称重并声明水分和接收方。这是废纸而不是可售成品信封；内部返工不是外部废物流。不自动给予避免原生纸生产的抵扣。

- 选定流: 废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_waste
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_waste
- 来源: lefavor-envelope-manufacturing

###### 带胶废品 (`reject_output`)

分别收集的带实际两种胶配方的废信封，记录纸、胶、水比例、水分、废物状态和接收方许可。广义废纸身份以实际为纸质废物为条件，不证明处理路径。与净纸边料、整份胶残液及捕集粉尘分开。

- 选定流: 废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_waste
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_waste
- 来源:

###### 收集纸尘 (`dust_output`)

实际由抽风或清扫截留、以一个单独称量工业粉尘流外送的干态裁切纸尘。核实纤维填料组成、水分、实际干净状态、不混入油或化学清扫残物及接收许可。捕集粉尘的废物流身份不代表排放PM，也不与切边或废信封合并。完整捕集量及任何内部返回分开记录，不假定接收处理和捕集效率。

- 选定流: 粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_waste
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_waste
- 来源: eu-paper-bref-2015

###### 清洗废液外送 (`effluent_output`)

两种声明水性胶仅用水清洗后合并收集的实际液态废水，仅在液态、完整组成、储槽来源及厂外接收方已核实时适合工业清洗废液类别。称完整湿交接量，或用实际V*rho(T)；独立测H2O分数并乘湿质量进入水账。悬浮溶解胶固体、添加剂、COD/TOC和pH另行表征，不把重叠指标相加成实物质量。不推定通用危险属性或处理路线。本流不是直接淡水排放；未用浓胶、凝胶或干残胶、油和泄漏物实际存在时须另设实物流。

- 选定流: 废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_water
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_water
- 来源:

###### 排出工作油 (`spent_hydraulic_output`)

实际用于传力和润滑、经使用受到污染的石油或矿物基础油液压工作液，属于该废润滑油类别。须核实基础油和添加剂组成、润滑功能、水及固体污染、完整排出kg、实测体积密度及接收方。新供液压油仍用原生体积/m3，油槽、补加与排出平衡按实际密度换算，不采用数据库辅助属性因子。不假定金属加工来源、固定更换周期、危险属性或再生燃烧信用；含油抹布滤材及泄漏仍为独立实物流。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_maintenance
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_maintenance
- 来源:

##### 基本流

###### 干燥水释放 (`water_vapour_output`)

水性胶干燥或清洗产生、排向室外空气未特指子介质的净蒸发水，物种水、CAS 7732-18-5。按实测胶载体水、加水、原纸及成品水分、废液水分和库存变化核算，保留不确定性及排风排口记录。不是平流层释放或淡水排放。未知平衡保持待定，不默认蒸发比例。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_evaporation
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_evaporation
- 来源:

###### 室外细颗粒 (`pm25_output`)

经捕集后实际到达室外空气未特指子介质的纸裁切颗粒质量，粒径不大于 2.5 微米。要求排口及无组织路径调查，并按实际运行时段进行粒径分辨测量。披露纸、填料、胶组成及生物源或化石源碳含量；该质量不是二氧化碳或校正流。不使用 BREF 默认排放因子或默认零值。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_air
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_air
- 来源: eu-paper-bref-2015

###### 室外中间粒径颗粒 (`pmcoarse_output`)

室外空气未特指子介质中大于 2.5 且不大于 10 微米的颗粒。只有累积 PM10 与 PM2.5 的方法、时段和排口相同时，才取其非负差值并传播不确定性。不再将累积 PM10 与 PM2.5 重复相加。捕集废物与实际外排质量分开。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_air
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_air
- 来源: eu-paper-bref-2015

###### 室外粗颗粒 (`pmover10_output`)

实际裁切及搬运排放中排向室外空气未特指子介质、粒径大于 10 微米的颗粒质量。仅在总颗粒及累积 PM10 方法、采样范围兼容时取差值，否则测该区间或保留待定。三个区间互不重叠；总颗粒只作核对，不作为另一个相加清单流。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 每 1 kg 参考流的实测可归属数量；cp_air
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_air
- 来源: eu-paper-bref-2015

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | converting | 先按阶段、批次表计与生产记录归属消耗，再处理共享负荷。混合订单仅在实测关系支持时用因果机时、负载或处理量，披露分母、空转、换单及排除订单。不规定分配份额。 |  |
| allocation_physical | all inventory rows | 环境负荷分配前保留完整实物、水平衡、碳账及内部同量链接。不得以分配份额乘实物成品、边料、废物或内部交接量。负荷份额与实物产出质量分账。 |  |
| allocation_waste | trim_output; reject_output; dust_output | 核实实际接收方及法律经济状态；本路线将纸废料报告为外送处理或回收废物。不自动作替代抵扣或共产品分配。若转为共产品，须先独立说明分配方法及实测数据。 |  |
| allocation_recycle | all inventory rows | 一致说明上游再生纸核算及下游回收边界。厂内纸及胶退回不产生可售产出或重复避免负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对同一代表时段内可归属实物行量求和，除以实测同期验收信封净千克数；全部原始单位、库存、阶段记录及实物与负荷账分别保留。对时段总量执行 normalize_period，不采用机器件数分母。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | converting | envelope_output | measurement_record | 订单；验收批次质量；皮重；水分；件数；废品批；尺寸；库存及交付核对 | 校准秤及批次验收记录；称调湿空信封，不含箱及内容物。件数及样品质量仅作质控，不作为未经测量的件数转质量分母。 | kg | 逐批或班次；交接与维护逐事件 | 声明覆盖全部订单、开机空转及季节工况的代表时段，并披露缺口 | 指定转换厂及匹配产线订单 | 每 1 kg 参考流 | 校准、原始记录、供应接收凭据、试验、不确定性及核对 |
| cp_materials | converting | paper_input; box_input | measurement_record | 批次；供应方；净收货领用退回；库存；水分；空箱质量；纸种定量配浆 | 称领用、退回、库存和纸箱；用发票及阶段裁切废料记录核对可归属验收产出。纤维或干固体与收到态质量分开。 | kg | 逐批或班次；交接与维护逐事件 | 声明覆盖全部订单、开机空转及季节工况的代表时段，并披露缺口 | 指定转换厂及匹配产线订单 | 每 1 kg 参考流 | 校准、原始记录、供应接收凭据、试验、不确定性及核对 |
| cp_adhesive | converting | seam_glue_input; flap_gum_input | measurement_record | 分别的牌号批次；全配方；安全技术资料；供应方质量基准；湿领用退回库存；固含；载体水；添加剂；粘度；密度；上胶阶段 | 接缝与封口湿胶分别称量，结合经验证固含水分试验及供应记录。回收胶留作内部流；逐项审计挥发物种及质量比例。披露不确定性，不虚构配方。 | kg | 逐批或班次；交接与维护逐事件 | 声明覆盖全部订单、开机空转及季节工况的代表时段，并披露缺口 | 指定转换厂及匹配产线订单 | 每 1 kg 参考流 | 校准、原始记录、供应接收凭据、试验、不确定性及核对 |
| cp_water | converting | water_input; effluent_output | measurement_record | 水表体积；事件密度；稀释清洗位置；槽库存；废液质量体积；水比例；化学需氧量或总有机碳；悬浮固体；酸碱度；添加剂；接收方 | 测新增自来水；实际废液槽采样，在许可厂外处理交接前称重或测量。污染物负荷与整份废液质量及水平衡分开，不重复计取水和排水。 | kg; m3 | 逐批或班次；交接与维护逐事件 | 声明覆盖全部订单、开机空转及季节工况的代表时段，并披露缺口 | 指定转换厂及匹配产线订单 | 每 1 kg 参考流 | 校准、原始记录、供应接收凭据、试验、不确定性及核对 |
| cp_energy | converting | electricity_input | measurement_record | 表号；阶段班次千瓦时；空转换单；压缩空气负载；干燥及风机工时；电压；电网供应方年份；供电损耗边界 | 采用校准分表与核对总表，保留实际因果归属及已核实电量换算。电干燥按实测，不借用蒸汽需求。 | MJ | 逐批或班次；交接与维护逐事件 | 声明覆盖全部订单、开机空转及季节工况的代表时段，并披露缺口 | 指定转换厂及匹配产线订单 | 每 1 kg 参考流 | 校准、原始记录、供应接收凭据、试验、不确定性及核对 |
| cp_waste | converting | trim_output; reject_output; dust_output | measurement_record | 各物流独立质量；水分；纸胶比例；库存；内部返工；交接单；接收处理许可；纸尘捕集记录 | 发运时各料箱分别称量并记录组成、危害和接收方。外部交接量排除内部返工，同时保留其生产实物账。 | kg | 逐批或班次；交接与维护逐事件 | 声明覆盖全部订单、开机空转及季节工况的代表时段，并披露缺口 | 指定转换厂及匹配产线订单 | 每 1 kg 参考流 | 校准、原始记录、供应接收凭据、试验、不确定性及核对 |
| cp_maintenance | converting | hydraulic_input; spent_hydraulic_output | measurement_record | 压机号；工作液牌号组成；供应升数；补加；油槽及仓库存；排出质量升数；密度；泄漏；接收方 | 测或称实际外补与排油，调查泄漏并保持在用油平衡。维护按覆盖期实际使用归属，不以油槽循环体积代替消耗。 | m3; kg | 逐批或班次；交接与维护逐事件 | 声明覆盖全部订单、开机空转及季节工况的代表时段，并披露缺口 | 指定转换厂及匹配产线订单 | 每 1 kg 参考流 | 校准、原始记录、供应接收凭据、试验、不确定性及核对 |
| cp_transport | converting | transport_input | measurement_record | 供应路线；货运总吨数；实际道路千米；车型；装载比例；返程；供料已含货运 | 使用运单、实测货物质量及路线记录；逐段算货运服务，核对与供料背景已含运输的重叠。 | kg*km | 逐批或班次；交接与维护逐事件 | 声明覆盖全部订单、开机空转及季节工况的代表时段，并披露缺口 | 指定转换厂及匹配产线订单 | 每 1 kg 参考流 | 校准、原始记录、供应接收凭据、试验、不确定性及核对 |
| cp_evaporation | converting | water_vapour_output | measurement_record | 胶载体水；加水；纸及成品水分；全部废物水比例；期初期末库存；排风排口；不确定性 | 按水组分闭合实际进出库存平衡；核实非负且物理合理的蒸发量及排口位置。未解释残差保留待定。 | kg | 逐批或班次；交接与维护逐事件 | 声明覆盖全部订单、开机空转及季节工况的代表时段，并披露缺口 | 指定转换厂及匹配产线订单 | 每 1 kg 参考流 | 校准、原始记录、供应接收凭据、试验、不确定性及核对 |
| cp_air | converting | pm25_output; pmcoarse_output; pmover10_output | measurement_record | 排口及无组织位置；采样气量时间；运行时数；控制设施；粒径分数；捕集质量；空白；不确定性；纸填料胶组成 | 场址粒径分辨空气监测，披露实际方法、可比条件及不确定性；捕集废物另外核对。BREF 仅提出裁切粉尘问题，不提供采样标准或因子。 | kg | 逐批或班次；交接与维护逐事件 | 声明覆盖全部订单、开机空转及季节工况的代表时段，并披露缺口 | 指定转换厂及匹配产线订单 | 每 1 kg 参考流 | 校准、原始记录、供应接收凭据、试验、不确定性及核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | 所有清单行 | 各非参考交换的归一化数量 = 时段可归属实物交换总量 / 同期验收成品信封净千克数。保留实物总量及单位；仅 envelope_output 固定为 1 千克。 | 时段行总量；cp_output；对应行协议 | 每 1 kg 参考流的交换数量 |  |
| component_balance_worksheet | converting physical material/water/carbon and packaging/container/oil ledgers | 归一化前保留组分工作表：领用干纸加干胶固体等于验收信封干固体，加外送边料、废品、纸尘及废液干组分，再加库存变化，并披露其他实测损失。包装及液压油另立平衡。实际纸箱及各供方所有的可返回胶容器，逐项记录完整收货加期初库存等于完整随货或返回转移加实际废弃质量加期末库存。外送包装在信封净质量之外，不按复用次数或负荷份额缩减实物交接。仅有据时由物料供方覆盖容器制造服务，避免重复负荷且保留实物返回凭据。原纸、供应湿胶及新增自来水中的水等于信封及全部废物留存水，加蒸发水及水库存变化。废液水含量须独立于整份废液千克数确定。将实际纸及添加剂的生物源、化石源碳比例沿成品、废物及实际空气或水排放记账，不按温室气体报告口径删除生物源二氧化碳。本稿不假定碳反应或直接燃烧。记录不确定性并说明残差，不能靠平衡反推未知配方比例。 | cp_materials; cp_adhesive; cp_water; cp_output; cp_waste; cp_maintenance; cp_evaporation; actual composition and stocks | 未归一实物组分、水、碳及完整包装/容器/油库存账；残差与不确定性 |  |
| native_quantity_worksheet | electricity_input; transport_input; pm25_output; pmcoarse_output; pmover10_output; water_vapour_output | 电力：保留实际千瓦时乘 3.6 的 MJ 量。货运：保留实测货物总吨数及实际各段千米，逐段乘积再乘1000换成原生kg*km，排除已含运输的重叠。2.5 至 10 微米颗粒可采用兼容的累积 PM10 减 PM2.5；大于 10 微米可采用兼容总颗粒减 PM10。差值须采用可比粒径方法且为非负。水蒸气估计使用实测水组分平衡，未决载体水不能猜测。这些辅助工作表不改变共同参考分母。 | cp_energy; cp_transport; cp_air; cp_evaporation; cp_water; cp_output | 原始原生单位工作表及兼容粒径/水量证据；归一仍由 normalize_period 完成一次 |  |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |





### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 分别核实实物组成状态、供方和接收方参考基准与 UUID 身份；空 UUID 明示链接缺失。 | 供应牌号配方、原始身份单位记录、接收许可 |
| quality_coverage | converting | 不用历史或单厂观察生成通用配方、收率、水分、密度、排放因子或背景；采用实际时段覆盖及不确定性。 | 场址协议、记录和平衡 |
| quality_sources | converting | JRC 草案仅作定性背景，BREF 适用制浆造纸及纸后整饰，生产者仅证明所述能力。仍须前景测量，并披露来源日期条件。 | 有定位且有适用限定的原件 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_route | envelope_output | 要求全部限定信息；有窗、印刷或防透涂层纸、撕条、乳胶自粘及厂内造纸数据须另审，否则拒绝。广义参考名不自动扩范围。 |  |
| validation_denominator | all inventory rows | 恰有一个参考成品输出为 1 千克验收调湿空信封净质量。全部采集、聚合与清单采用同一分母；中间坯片留在内部。 |  |
| validation_balance | converting | 负荷归属前核对实物纸胶水碳及独立油包装库存，标出全部残差与不确定性。负的或不兼容的颗粒差值、未解释库存损失保留待定。 |  |
| validation_linkage | all inventory rows | UUID 身份本身不建立供应数据集；核实完整路线牌号、参考属性单位、水分浓度、地域年份及处理边界。空身份和不支持的基准为披露缺口，不作已匹配背景或零值。 |  |
| validation_emissions | all elementary outputs | 要求实际排口介质物种粒径证据；空气释放与捕集废物及整份废液交接分开。不得重复粒径、以校正流替代、未测即零或删除生物源二氧化碳。完整性声明前须扩展实际化学或燃烧路线清单。 | eu-paper-bref-2015 |
| validation_readiness | converting | 本候选方法未经独立审核。定量数据集须补齐前景协议、供应配方、未决流及供应链接、实际排放和接收许可；方法编写完成不代表科学批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 数据完整性检查后：供应方特定的未印刷无窗胶封口信封制造，每 1 kg 厂门净产出 |
| excluded_use | 仅凭 CPC32192 标签扩至全部产品；邮政服务；印刷有窗离型变体；生态标签认证；未采配方；批准或通用基准 |
| required_metadata | 参考限定、来源范围、测量期、场址、过程图、实物平衡、分配方法、原始协议、背景及废物处理 |
| required_quality_disclosure | 缺少独立审查；身份供应测量缺失、不确定性、排除项、化学及颗粒完整性与代表性 |
| update_trigger | 纸种配浆、任一胶配方、窗印刷封口路线、供能、运输方式、产出质量或废物处理变化 |

## 11. 数据源

| source_id | 类型 | 来源及定位 | 引用 | 用途 |
| --- | --- | --- | --- | --- |
| jrc-converted-paper-2018 | official_guidance | JRC《转化纸产品 EU 生态标签标准修订初步报告草案》，2018年11月；4.2.1.2节，PDF54-55 / 印刷52-53页 | https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/contentype/product_group_documents/1581681202/Preliminary%20report_final.pdf | 定性原纸转换及封口透明窗区分；历史草案，不作现行法律要求、配方或因子 |
| eu-paper-bref-2015 | official_guidance | 欧盟委员会 JRC《制浆、造纸及纸板生产 BREF》，2015；7.1.10节，PDF708 / 印刷670页 | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 上游纸范围及定性裁切粉尘调查；纸厂损纸回用不作为信封转换厂默认；无粒径因子 |
| lefavor-envelope-manufacturing | extension_guidance | Lefavor Envelope Company《制造过程》，步骤1-4；未注明日期的生产者原件 | https://www.lefavor.com/manufacturing | 纸张模切、坯片折叠粘合及交付能力；单一生产者，不作通用叠纸数、速度、输入量或必选印刷 |
| eukalin-envelope-adhesives | extension_guidance | EUKALIN《信封及大封套》，侧缝底缝上胶及封口盖上胶章节；未注明日期的生产者原件 | https://www.eukalin.de/en/applications/envelopes/ | 水性合成分散型接缝功能与糊精再润湿封口功能区分；不作实际供料全配方、固含或涂布量默认 |
