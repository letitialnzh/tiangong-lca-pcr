---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.toilet-or-facial-tissue-stock-towel-or-napkin-stock-and-similar-paper-cellulose-wadding-78b17897
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 原生纤维起皱卫生原纸母卷

## 1. 范围与适用性

本 PCR 覆盖外购原生漂白阔叶木和针叶木硫酸盐商品浆制造单层起皱卫生原纸母卷的非一体化路线：再碎浆、浆料净化和磨浆、湿法成形、常规压榨及真空脱水、蒸汽加热扬克缸和热风气罩干燥、刮刀起皱、卷取，以及厂门验收前实际母卷复卷、修边和运输保护。原纸供后续转换，不以消费卷、面巾张或餐巾张计量。[jrc-pp-bref-2015, sofidel-parent-reels]

CPC3.0 32131 还包括超出本方法的纤维素絮片及纤维网，本方法范围为 narrower，已接受关系以权威映射及其 ADR 为准。排除干法或气流成网非织造产品、TAD 和混合或不起皱路线、回收纤维和脱墨路线、厂内木材制浆漂白、功能涂层或乳液、层间复合、消费端压花打孔折叠、纸条卷截切及 32193 零售包装。其他实际路线须另行方法审查，分类标签不建立适用性。[jrc-pp-bref-2015]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.toilet-or-facial-tissue-stock-towel-or-napkin-stock-and-similar-paper-cellulose-wadding-78b17897 |
| classification_refs | CPC 3.0 32131; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 用于厕用纸、面巾、擦手纸或餐巾转换的原生纤维常规湿压干起皱单层母卷 |
| excluded_products | 转换后的成品纸制品、纤维素絮片或非织造纤维网、再生或 TAD 或混合或不起皱原纸、木材一体化制浆 |
| representative_product | 实测厂门含水状态下的合格起皱卫生原纸母卷 |
| production_route | 外购漂白硫酸盐浆 -> 湿法成形和压榨 -> 扬克及气罩干燥 -> 刮刀起皱 -> 母卷 |
| market_state | 供转换厂使用的单层母卷；实测含水率；卷芯和包膜排除于原纸质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 向转换工序提供起皱卫生原纸基材 |
| How much | 1 kg 实测厂门含水状态下的合格原纸净质量 |
| How well | 声明定量、柔软度、拉伸强度及适用时湿强度、吸收性与买方验收；质量比较要求质量水平兼容 |
| How long or cycle | 一个声明制造及交付生产期，不建立消费者使用等价 |
| reference_flow_link | parent_reel |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 卫生纸或面巾纸、纸巾或餐巾纸及类似的纸、纤维素填絮和纤维素纤维网 `3070a34a-8d40-426e-9299-7c367b0dca21` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 原生阔叶及针叶配浆与实测份额；树种、来源和供方；硫酸盐及漂白路线；到货浆干物质及背景质量约定；纸机、纸种及生产期；常规压榨或真空与扬克及气罩路线；刮刀起皱与卷取状态；实际湿部和涂层配方及湿强状态；原纸净质量、厂门含水率和采样及测试 SOP；定量、层数为一、尺寸及验收质量；电压、燃气体积、蒸汽压力及供方基准；排除卷芯包膜；供水、处理、接收介质及废物接收方 |

前景包必须声明这些限定信息；缺失必需限定信息时参考流不完整。采用的广义原纸记录包含本物理子集且不规定相反路线；它不是背景过程，也不说明记录所列各原纸子类可互换。不规定固定卷重、含水率、纤维配比或吸收功能等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | P 为实际厂门含水状态下称量的合格原纸净质量，排除全部卷芯、卷轴、包膜、不合格品及内部损纸；采用 cp_mass 采集。所有清单行使用同一 1 kg 分母。 |
| dry_wet_basis | 质量基纸浆、原纸、药剂/配方及残料水分组分账 | Mass | kg | 记录质量 m 和同批湿基含水率 w；干固体 d = m*(1-w)。干输出强度按实测干输出 D/P 换算为到货输出强度。供方气干吨、绝干吨及到货吨不得等同。ISO 来源仅为范围说明；应取得适用且经验证的采样和测试 SOP。 辅助组分质量/水分不替代原生燃气Volume/m3、蒸汽热GCV/MJ或电力NCV/MJ参考。 |
| utility_basis | natural_gas, steam, electricity | Volume / Gross calorific value / Net calorific value | m3 / MJ / MJ | 分别匹配气体体积条件、实物蒸汽／凝结水质量与焓、供热供方参考 MJ 和电网电压接口。1 kWh = 3.6 MJ 是精确单位换算，不是效率。GCV 属性不证明净交付热量，须实际 k_bg。 |
| chemical_basis | wet_strength, retention_aid, defoamer, yankee_adhesive, yankee_pae, release_oil, wwtp_pac | Mass | kg | 区分到货配方质量、干固体及活性成分；载体水和每种其他实际化学组分分列，稀释水不重复计量。 |
| emission_basis | co2_fossil; co2_biogenic; co; nox; n2o; methane; methane_biogenic; so2; voc_ethane; pm_fine; pm_coarse; pm_large; water_vapour; effluent_water; cod; bod; tn; tp; aox; tss | Mass / Volume | kg / m3 | 基础流物种、来源、介质及数量定义必须匹配。COD 和 BOD 用氧当量，AOX 用氯当量，总氮总磷用元素质量；这些指标不是可相加的实物物种。NOx 至 NO2 约定未证明前未决。使用互斥颗粒粒径段并保留生物源 CO2。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购成品漂白阔叶及针叶木硫酸盐商品浆在原纸厂接收；上游生产不属于前景，链接一次 |
| starting_condition_role | 前景输入厂门 |
| product_classification_scope | CPC:3.0:32131; narrower |
| recursive_input_rule | 仅外购卫生原纸母卷复卷或零售转换不属于本生产 PCR；内部损纸及纤维回流保留为实物回路，不是上游采购 |
| upstream_dataset_requirement | 需要供方浆、化学品、水、公用工程、包装及实际入厂运输背景数据，地点、年份、处理和数量定义兼容；未决链接阻止完整从摇篮到厂门声明 |
| disclosure | 区分前景厂门到厂门与链接后的从摇篮到厂门；披露干燥起皱路线、边界内燃气锅炉或外购蒸汽、处理及接收方、排除项、库存及差额 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | tissue_mill | 在声明厂门边界内纳入全部实际备浆、成形及压榨真空、扬克及气罩干燥、刮刀起皱、母卷卷取修边、合格卷调湿及保护、损纸白水回收和归属的公用工程及处理。保留边界内燃烧排放。 | jrc-pp-bref-2015 |
| boundary_conversion | tissue_mill | 止于合格单层母卷：下游层间复合、压花、打孔、折叠、纸条卷截切和消费包装属于独立转换。一体化工厂必须分开计量记录，并仅链接一次本上游输出。 | sofidel-parent-reels |
| boundary_water | tissue_mill | 内部白水、回收纤维、损纸及凝结水返回为守恒链接。同一水流的厂外未处理废水转移与厂内处理直接排放是替代路线，不是同时负荷。 | jrc-pp-bref-2015 |
| boundary_heat | tissue_mill | 边界内燃气锅炉记录燃料及实际排放，其蒸汽属于内部流。外购蒸汽计供方输入一次，生产负荷在上游。共用公用工程须实测分配；不得重复燃料和外购蒸汽生产。 | jrc-pp-bref-2015, epa-ap42-gas-2026 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| tissue_mill | 原生纤维起皱卫生原纸母卷 | required | 声明的原生纤维常规起皱母卷路线 | foreground production | 1 kg 参考流 |

实物阶段图：商品浆接收 -> 各类纤维分开备浆磨浆 -> 混浆及湿法成形 -> 压榨真空 -> 扬克及气罩 -> 起皱刮刀 -> 卷取及可选母卷复卷干修边 -> 合格母卷。白水、白水回收纤维、湿损纸及干损纸返回浆料；排污去实际处理或厂外处理接收方。即使聚合为一个前景单元，仍保留独立阶段质量、水、碳、库存及分表记录。内部链接发送与接收两端数量、物料状态及期间一致；实物产品输出不得乘环境分配份额。[jrc-pp-bref-2015]

### 过程：卫生原纸母卷制造（`tissue_mill`）

#### 输入

##### 产品流

###### 漂白阔叶木硫酸盐商品浆（`hardwood_pulp`）

分开记录实际原生阔叶木硫酸盐浆牌号与来源；采用的广义身份排除溶解浆及机械浆。使用实测到货质量，附同批干固体含量及供方质量约定，不预设气干基准。

- 选定流：化学木浆，溶解级除外 `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_furnish`
- 来源：`jrc-pp-bref-2015`

###### 漂白针叶木硫酸盐商品浆（`softwood_pulp`）

分开记录实际原生针叶木硫酸盐浆的树种、来源、漂白路线和实测湿干基准。广义化学浆身份不证明供方背景数据集，也不确定固定配浆比例。

- 选定流：化学木浆，溶解级除外 `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_furnish`
- 来源：`jrc-pp-bref-2015`

###### 外购电网电力（`electricity`）

仅在供电电压及背景损耗边界匹配时采用已核实的 1–35 kV 电网平均用户接口；保留碎浆、磨浆、真空、压榨、风机、复卷及处理分表记录。不得用于其他电压或特定发电路线。

来源地理为 CN。实际地区组合、年份、供方／损耗边界须匹配；其他电网须另核实身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
参考单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`jrc-pp-bref-2015`

###### 气罩及边界内锅炉用管输天然气（`natural_gas`）

分别计量气罩与厂内锅炉，再将归属本产品的燃气量各计一次。参考属性为 Volume/m3；匹配供方背景立方米的温度、压力、湿干组成及压缩因子；数据库次级质量系数不是密度。体积约定不明时链接不完整。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
参考单位组：`93a60a57-a3c8-12da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`epa-ap42-gas-2026`, `jrc-pp-bref-2015`

###### 扬克外购蒸汽（`steam`）

实际由厂外工业锅炉向扬克干燥缸供给的蒸汽热。本实物记录不限定压力，但其 Gross calorific value/MJ 参考量不证明净交付热量。采集真实供／回质量、绝压／表压、温度、干度、焓及接口损失；以有记录的供方换算 k_bg 将接口净热量对应至供方参考 MJ。换算未知则数据集链接仍未完成。来源中的 1.15 MWh/t 基准不是消耗因子。厂内锅炉蒸汽保留内部实物链接，同一现场燃料／发能不得再叠加本外购热背景。

- 选定流：蒸汽供热 `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
参考单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`。
- 数量规则：Q_bg / P，其中 Q_bg = k_bg * H_net，须有记录的供方约定；cp_utilities 与 cp_mass 另保留实际蒸汽／凝结水 kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`jrc-pp-bref-2015`

###### 外购已处理工艺用水（`process_water`）

计量跨前景边界的外部补水、化学品稀释水和锅炉补水；循环白水或返回凝结水不计为新供水。仅以实测密度及温度将体积换算为 Mass/kg 参考量。自取水路线必须另列对应资源流及处理模型。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-pp-bref-2015`

###### 有条件的永久湿强树脂（`wet_strength`）

仅在实际纸种使用该 PAE 化学体系且有供方 SDS 和配方记录时纳入。分别计量到货树脂质量及固体或活性份额；记录含氯残留物和 AOX 适用性。不得采用环氧树脂 UUID，也不假定所有厕用原纸均加湿强树脂。

- 选定流：聚酰胺胺-环氧氯丙烷湿强树脂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chemicals`
- 来源：`solenis-pae-scope`

###### 有条件的非离子聚丙烯酰胺助留剂（`retention_aid`）

仅在实际 SDS 证明非离子聚合物身份时使用；记录粉体或聚合物含量与载体水、添加点及槽罐和发票核对。阳离子或阴离子牌号需各自匹配身份；不提供固定剂量。

- 选定流：聚丙烯酰胺 `f8ff6647-6bb3-4b72-9830-60a7a86203c4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chemicals`
- 来源：`jrc-pp-bref-2015`

###### 有条件的硅油消泡剂（`defoamer`）

仅代表经供方化学规格、CAS、牌号和黏度证实的实际原生生产 PDMS 聚硅氧烷聚合物组分。广义有机硅原件明确包括聚合硅氧烷液体，无相反聚合物限定，但不提供 PDMS 专属 CAS 或即用消泡剂配方。匹配实际聚合物质量及供方基准；载体水与其他配方组分分别实测，不能再重复计入外购完整配方。其他有机硅化学体系、再生路线或整份混合消泡剂须采用自身适用身份及供方。

- 选定流：有机硅 `4af74934-ef9f-40c1-9de6-e6223ca0b4fe`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chemicals`
- 来源：`jrc-pp-bref-2015`

###### 有条件的 PVOH 扬克黏附剂（`yankee_adhesive`）

本聚合物行仅用于采购/配方记录证实的真实独立购入、现场加入PVOH；计量相容供货干湿参考量，溶液水/添加剂保留组成分析。实际现场配制水/公用工程计一次。外购PVOH扬克黏附预混剂须在使用前有一项具体完整配方卡及覆盖供方配制/交付的兼容背景；聚合物/水/助剂仅作组成记录，不另采购。专利化学只是可能路线，不规定必用混合物、牌号、浓度或剂量；不以PVAc替代。

- 选定流：聚乙烯醇 `cea707dd-98a3-451d-bc43-2dcc145091e9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chemicals`
- 来源：`ep-creping-2019`

###### 有条件的 PAE 扬克涂层（`yankee_pae`）

该涂层树脂与湿部湿强用途分开计量；核对喷淋供料、库存变动、载体水和活性固体。仅在实际供方树脂化学身份匹配时使用；环氧树脂不能替代。

- 选定流：聚酰胺胺-环氧氯丙烷起皱黏附树脂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chemicals`
- 来源：`ep-creping-2019`

###### 有条件的矿物油剥离组分（`release_oil`）

本行仅用于经确认、真实独立采购并现场加入剥离配方的石油矿物油；SDS须区分矿物油、植物油、蜡及无油改性剂并记录实际牌号。另购乳化剂/载体和现场混合/公用工程为真实额外交换。实际外购即用剥离制剂时，须有一项具体完整配方投入及覆盖其配制/交付的兼容供方；内含油/乳化剂/载体仅作组成分析。矿物油身份本身既不证明预混剂制造，也不证明纸厂使用该化学体系。

- 选定流：矿物油 `e4d87634-a041-48d6-b071-da57551c8ab5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chemicals`
- 来源：`jrc-pp-bref-2015`

###### 有条件的母卷 PE 运输包膜（`pe_wrap`）

称量发给合格母卷的实际 PE 薄膜并计入归属边角损耗；包膜质量不含于原纸参考质量。源 CPC29220 分类瑕疵下有条件保留物理薄膜身份；须核实供方薄膜组成及背景路线。

核实实际薄膜结构、聚合物品级及助剂；本行不定位层合复合包装。若外购复合件为一个实物交换，须核实其完整组成和供方，不能与组分输入重复。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`sofidel-parent-reels`

###### 有条件的纸板母卷芯（`reel_core`）

仅记录实际纸板卷芯、周转次数、新卷芯及报废卷芯；单独称皮重并从原纸输出扣除。不得用于钢制卷轴；回收耐用卷轴另保留周转服务账。

未分配实物账保留实际新购、接收、返回及报废的纸芯／卷轴质量。回用仅改变有证据的服务负荷及更换消耗，不能缩减实际返回或报废物体质量。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`sofidel-parent-reels`

###### 有条件的废水处理聚合氯化铝（`wwtp_pac`）

厂内混凝实际使用该聚合氯化铝配方时，核对到货质量、活性固体、铝基准和载体水，并使用供方约定；不是默认处理配方。

采用的原件明确为水溶性固体，本行须为实际固态 PAC 试剂并实测含量／水合状态。外购液态配方须有自身匹配的完整配方身份和参考基准，替代而非重复本固体输入。

- 选定流：聚合氯化铝 `f1b285a5-2733-450c-af08-69e960b671ee`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chemicals`
- 来源：`jrc-pp-bref-2015`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格起皱卫生原纸母卷（`parent_reel`）

1 千克实测厂门含水状态下的原纸净质量，排除卷芯、卷轴及包膜。以唯一最终产品输出涵盖卷取、调湿及交付；阶段数量保留于实物账。广义原纸身份在本稿限于原生纤维常规湿压起皱母卷，不证明吸收量、张数或零售卷功能等价。

- 选定流：卫生纸或面巾纸、纸巾或餐巾纸及类似的纸、纤维素填絮和纤维素纤维网 `3070a34a-8d40-426e-9299-7c367b0dca21`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_mass`
- 来源：`jrc-pp-bref-2015`, `sofidel-parent-reels`

##### 废物流

###### 外运原纸边料及损纸（`broke_export`）

仅称量实际外运的原纸边料及损纸，披露湿干状态、添加物和接收方。返回碎浆机的湿损纸或干损纸是内部回路，不是废物外排或新购原生浆。广义废纸身份需确认实际未涂布原纸状态。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`jrc-pp-bref-2015`

###### 外运干切及起皱收集粉尘（`collected_dust`）

广义工业捕尘废物身份仅定位实际单独捕集并离厂的卫生原纸起皱／切纸／卷取粉尘。称量实物湿／干质量，记录纤维／涂层／矿物组成、污染、库存变化及接收路线；不假定捕集效率、发生与否或质量。厂内再碎浆是实物回流；捕集废物与逸散颗粒物粒径段不得重叠。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`jrc-pp-bref-2015`

###### 脱水造纸处理污泥（`wwtp_sludge`）

记录实际外运初级或生物处理污泥的湿质量、干固体、组成、处理和接收方；不与产品销售或厂内白水纤维回收混同，不给通用固含量。

一行仅代表一条实际物理合并后外运的污泥流。若初沉与生化污泥分别离厂，即使共用本广义 UUID，也须各建原子行并分别计质量／组成／接收方；不得把独立处理物流压缩为集合标签。

- 选定流：造纸污泥 `b48b29ab-4ead-4413-9adb-07631cd7af09`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`jrc-pp-bref-2015`

###### 替代厂外废水处理转移（`wastewater_export`）

实际向厂外处理方转移的整份未处理卫生原纸造纸废水。广义工业废液身份不规定组成、法定危废分类或处理方式。直接实测交付湿质量，或按 M = V*rho_eff(T) 使用实际混合流密度和温度换算；核实固体／水分数及接收相容性，不默认密度1000。污染浓度负荷另保留整份流体积。其水组分计入转移水账，不同时作为直接淡水排放；下游处理释放仅经供方计入一次。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：`jrc-pp-bref-2015`

##### 基本流

###### 化石燃烧二氧化碳（`co2_fossil`）

边界内实际燃气锅炉或气罩排入非城市空气或高烟囱的量；核实烟囱场景。采用实测燃料碳与氧化情况或源测试，化石燃气碳与纤维碳分开。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-9c13-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-ap42-gas-2026`

###### 纤维损失或处理的生物源二氧化碳（`co2_biogenic`）

记录边界内处理或纤维氧化实际排入室外空气未特指子介质的量。即使 LCIA 温室气体统计口径排除，仍保留于 LCI；不得以全部投入纤维碳推断排放。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carbon`
- 来源：`jrc-pp-bref-2015`

###### 化石源一氧化碳（`co`）

记录边界内燃烧实际排入室外空气未特指子介质的量；采集物种质量、氧折算、湿干气基准及匹配烟气流量。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-ap42-gas-2026`

###### 不含一氧化二氮的燃烧氮氧化物（`nox`）

室外空气未特指子介质。Mass/kg 本身不证明 NO2 当量；使用前核对监测 NO/NO2 报告、参考流及所选 LCIA 数量约定。数量约定缺失为未决；排除一氧化二氮，不能在汇总上再加同一 NO/NO2。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-ap42-gas-2026`

###### 边界内燃烧或处理一氧化二氮（`n2o`）

记录实际排入室外空气未特指子介质的量；一氧化二氮物种质量与 NOx 及元素氮质量分开。原始记录区分烟囱和处理来源。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-ap42-gas-2026`, `jrc-pp-bref-2015`

###### 厂内供气或燃烧化石源甲烷（`methane`）

记录实际无组织或未燃甲烷排入室外空气未特指子介质的量，需供方甲烷组成及现场测试。不得再次计入上游背景泄漏。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-ap42-gas-2026`

###### 有条件的生物处理甲烷（`methane_biogenic`）

仅在边界内处理实际产生及释放时计入室外空气未特指子介质。另核对捕集、氧化及外送气；好氧处理不意味着默认甲烷因子。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carbon`
- 来源：`jrc-pp-bref-2015`

###### 燃烧二氧化硫（`so2`）

以实测燃气硫及源测试记录实际二氧化硫物种质量，介质为室外空气未特指子介质；不能以硫氧化物汇总替代该物种。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-ap42-gas-2026`

###### 有条件的乙烷释放（`voc_ethane`）

仅在供方燃气分析和现场证据确认时记录泄漏或未燃管输燃气中的实际乙烷，排入室外空气未特指子介质。其他实际相关 VOC 每种单列，不假定乙烷份额或 NMVOC 默认量。

- 选定流：乙烷 `4d9a8790-3ddd-11dd-9219-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-ap42-gas-2026`

###### 排放的粒径不大于 2.5 微米颗粒物（`pm_fine`）

室外空气未特指子介质；采集捕集后逸出的起皱、复卷、干切及边界内燃烧颗粒。使用互斥细粒段，不将总尘与嵌套 PM10 重复合计。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dust`
- 来源：`jrc-pp-bref-2015`, `epa-ap42-gas-2026`

###### 排放的粒径大于 2.5 至 10 微米颗粒物（`pm_coarse`）

室外空气未特指子介质；单独测量 2.5–10 粒径段，或以相同采样和治理基准下 PM10 减 PM2.5 求得。保留不确定性，拒绝负值及基准不兼容差值。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dust`
- 来源：`jrc-pp-bref-2015`

###### 排放的粒径大于 10 微米颗粒物（`pm_large`）

室外空气未特指子介质；纳入实际逸出的干切或起皱粗粉尘。直接测量，或用基准匹配的总颗粒减 PM10 并说明粒径上限及采样定义。空气释放中排除捕集或回用粉尘。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dust`
- 来源：`jrc-pp-bref-2015`

###### 排入空气的蒸发水（`water_vapour`）

室外空气未特指子介质；以实际水平衡及实测湿度核对干燥、燃气燃烧生成水和处理或冷却蒸发，不使用液态淡水排放身份。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-pp-bref-2015`

###### 排入淡水的已处理液态水（`effluent_water`）

仅计实际直接排入淡水的液态水，不是取水或外购水；参考属性为 Volume/m3。识别接收水体、返还水状态和接收水体介质。

本交换是实际液态水组分，不能把整份混合废水当纯水。记录排口温度、混合废水密度及水质量分数：M_water = V_eff*rho_eff(T)*f_water；V_water = M_water/rho_water(T)。使用有记录的实际密度，不默认1000。整份废水体积另供污染负荷计算；固体与指标不是额外载体水。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
参考单位组：`93a60a57-a3c8-12da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：`eu-paper-bat-2014`

###### 淡水化学需氧量（`cod`）

实际处理后排入淡水的废水；数量为氧当量千克，不是有机碳。COD 与 BOD 保留为不同测试指标，不当作不同化学污染物质量相加；已知相关物种单列以免掩盖毒性排放。天工平台未提供中文名称；保留原始名称，不虚构官方译名。

- 选定流：chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：`eu-paper-bat-2014`

###### 淡水生物需氧量（`bod`）

实际处理后排入淡水的废水；声明 BOD5 或 BOD7、实验室方法、氧当量千克及接收水体。不得将汇总指标当作单一化学物种或与 COD 相加做质量平衡。

- 选定流：生物需氧量 `08a91e70-3ddc-11dd-97de-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：`eu-paper-bat-2014`

###### 淡水总氮（不含分子氮）（`tn`）

实际处理后排入淡水的废水；数量为不含 N2 的氮元素千克，附方法及无机和有机物种核对。同一铵或硝酸盐物种不得在已表征汇总负荷上再加，除非明确 LCIA 处理。

- 选定流：总氮（不含N₂） `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：`eu-paper-bat-2014`

###### 淡水总磷（`tp`）

实际处理后排入淡水的废水；数量为磷元素千克，不是磷酸盐千克。核对单独磷物种，避免汇总与物种重复表征。

- 选定流：总磷 `f9df3107-6b59-4067-b920-3c61cf3630c7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：`eu-paper-bat-2014`

###### 有条件的淡水可吸附有机卤素（`aox`）

当含氯湿强或涂层杂质及实际化学体系使 AOX 相关时，记录实际处理后淡水排放；按匹配分析约定计氯当量千克。相关有机氯物种分别列出，并与汇总核对。天工平台未提供中文名称；保留原始名称，不虚构官方译名。

- 选定流：adsorbable organic halogen compounds `fe0acd60-3ddc-11dd-aaa0-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：`eu-paper-bat-2014`, `solenis-pae-scope`

###### 淡水悬浮固体排放（`tss`）

实测处理后排入淡水的颗粒固体，保留过滤方法、干残留物基准及接收水体。未特指水介质 UUID 不能替代已知淡水子介质，身份未决。同一固体物种不得在已表征汇总上再加。

- 选定流：排入淡水的总悬浮固体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
参考单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`。
- 数量规则：采集实际生产期交换数量并除以合格原纸净输出 P；使用 cp_mass 及本行采集协议。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：`eu-paper-bat-2014`

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | tissue_mill | 优先用产品、产线及生产期分表避免分配。不可分割的共用公用工程或处理以实测电量、蒸汽焓或污染负荷证明有因果关系的物理关联；质量仅在纸种兼容且有理由时适用。无法支持物理归属时记录须独立审查的替代及敏感性，不虚构固定份额。 | eu-pef-multifunctionality-2021 |
| allocation_physical | all inventory rows | 未分配的物料、水、碳平衡与实际联产品或废物数量，和分配后的环境负荷账分开保留。内部损纸循环不产生联产品抵扣；外部回收纸及污泥处理或替代需要接收方和所选末端方法，不自动给予避免产品抵扣。 | jrc-pp-bref-2015, eu-pef-multifunctionality-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | tissue_mill | 对应原子流 | 实际原始记录 | 卷及生产期及牌号标识；毛重；卷芯卷轴包膜皮重；合格原纸净质量；厂门含水率及采样测试 SOP；质量验收；合格品期初期末库存 | 经校准卷重称量并实测皮重；配对厂门样品及经验证水分或干物质方法，核对挥发损失适用性；核对生产、验收、交付及库存 | kg; mass fraction | 每批及阶段期间；排放按监测计划 | 完整声明生产期，包括开机、断纸、换纸种及库存变化 | 声明纸厂产线及归属共用单元 | 每 1 kg 参考流 | 校准、实验室 SOP、供方定义及完整原始记录 |
| cp_furnish | tissue_mill | 对应原子流 | 实际原始记录 | 阔叶和针叶树种；来源；供方及牌号；硫酸盐及漂白路线；到货湿质量；实际干固体；供方质量定义；库存变动 | 每类浆分别校准称量、干物质测试及投入和库存平衡核对；不只凭森林认证推断身份 | kg; mass fraction | 每批及阶段期间；排放按监测计划 | 完整声明生产期，包括开机、断纸、换纸种及库存变化 | 声明纸厂产线及归属共用单元 | 每 1 kg 参考流 | 校准、实验室 SOP、供方定义及完整原始记录 |
| cp_utilities | tissue_mill | 对应原子流 | 实际原始记录 | 阶段及来源分表；电压及千瓦时；燃气立方米温压湿干和 Z 及组成；蒸汽供回千克、绝压或表压、温度、干度及焓；供方约定；锅炉气罩运行治理历史 | 时间匹配的校准计量及供方定义；区分自制锅炉与外购蒸汽；保留压力焓证据，拒绝无依据数量链接 | kWh; MJ; m3; kg | 每批及阶段期间；排放按监测计划 | 完整声明生产期，包括开机、断纸、换纸种及库存变化 | 声明纸厂产线及归属共用单元 | 每 1 kg 参考流 | 校准、实验室 SOP、供方定义及完整原始记录 |
| cp_water | tissue_mill | 对应原子流 | 实际原始记录 | 补水千克或立方米；密度温度；白水回路；凝结水；纸浆和化学品水分；处理排水；湿度；库存水变动 | 外部及内部校准计量配对物料水平衡；循环与净交换分开；蒸发量附不确定性 | kg; m3 | 每批及阶段期间；排放按监测计划 | 完整声明生产期，包括开机、断纸、换纸种及库存变化 | 声明纸厂产线及归属共用单元 | 每 1 kg 参考流 | 校准、实验室 SOP、供方定义及完整原始记录 |
| cp_chemicals | tissue_mill | 对应原子流 | 实际原始记录 | 具体组分、CAS、供方 SDS 及牌号；湿部涂层处理位置；到货质量；活性或干固体；载体水；投入返回及库存 | 校准加料槽罐质量平衡与发票/库存对账。每项真实完整外购药剂/配方按兼容供方数量及配制/交付边界计一次；内含聚合物/油/载体/助剂仅留组成平衡。独立购入现场原料/调整剂及真实混合水/公用工程为单列交换。新增经审计行对应真实额外供货，不仅因供方列出组分而采购。 | kg; mass fraction | 每批及阶段期间；排放按监测计划 | 完整声明生产期，包括开机、断纸、换纸种及库存变化 | 声明纸厂产线及归属共用单元 | 每 1 kg 参考流 | 校准、实验室 SOP、供方定义及完整原始记录 |
| cp_packaging | tissue_mill | 对应原子流 | 实际原始记录 | PE 组成；包膜及卷芯皮重和投入；损耗；卷芯周转；耐用卷轴返回；供方路线 | 组分实测称量与生产期库存使用平衡；实物返回／报废质量完整保留；仅服务负荷及更换消耗按有记录实际周转归属；全部皮重从 P 扣除 | kg; count | 每批及阶段期间；排放按监测计划 | 完整声明生产期，包括开机、断纸、换纸种及库存变化 | 声明纸厂产线及归属共用单元 | 每 1 kg 参考流 | 校准、实验室 SOP、供方定义及完整原始记录 |
| cp_residues | tissue_mill | 对应原子流 | 实际原始记录 | 每项废物质量；含水固体；组成污染；接收方；处理；内部回用；收集器库存 | 实际外运逐项校准称量，代表性固体测试及接收凭证；捕集和排放粉尘分开 | kg; mass fraction | 每批及阶段期间；排放按监测计划 | 完整声明生产期，包括开机、断纸、换纸种及库存变化 | 声明纸厂产线及归属共用单元 | 每 1 kg 参考流 | 校准、实验室 SOP、供方定义及完整原始记录 |
| cp_air | tissue_mill | 对应原子流 | 实际原始记录 | 物种 CAS；化石或生物来源；来源烟囱；流量浓度时间；氧折算；湿干气温压；方法检出不确定性；治理；燃气组成；NOx 约定 | 使用实际匹配源测试或连续记录和运行期间；燃料碳硫计算需实测组成及差额核对。缺测为未决而非零；将来用 AP42 锅炉因子须另核验适用性 | kg; concentration; flow | 每批及阶段期间；排放按监测计划 | 完整声明生产期，包括开机、断纸、换纸种及库存变化 | 声明纸厂产线及归属共用单元 | 每 1 kg 参考流 | 校准、实验室 SOP、供方定义及完整原始记录 |
| cp_dust | tissue_mill | 对应原子流 | 实际原始记录 | 干切起皱复卷来源；采样器粒径定义；总颗粒及 PM10 及 PM2.5；治理效率；收集器捕集质量；湿干基准；期间及不确定性 | 采用兼容分粒径采样测量实际出口及相关无组织逸尘；仅用匹配差值；厂内干切复卷粉尘不使用锅炉或锯材默认因子 | kg; particle size | 每批及阶段期间；排放按监测计划 | 完整声明生产期，包括开机、断纸、换纸种及库存变化 | 声明纸厂产线及归属共用单元 | 每 1 kg 参考流 | 校准、实验室 SOP、供方定义及完整原始记录 |
| cp_effluent | tissue_mill | 对应原子流 | 实际原始记录 | 接收水体及路线；实测整份废水立方米、实际温度／密度／水分数；匹配时间浓度毫克每升；COD 和 BOD 测试；总氮排除 N2；总磷元素基准；悬浮物过滤；AOX 氯基准；实际毒性物种；原水及处理后点位 | 流量加权代表性处理后出口采样及合格方法；COD 和 TSS 日测、BOD 及氮磷周测作为 BAT 参考并结合脚注和场址条件；AOX 及相关金属螯合剂按实际化学品判断。涵盖旁路异常期间，不以浓度限值代替排放量 | m3; mg/L; kg | 每批及阶段期间；排放按监测计划 | 完整声明生产期，包括开机、断纸、换纸种及库存变化 | 声明纸厂产线及归属共用单元 | 每 1 kg 参考流 | 校准、实验室 SOP、供方定义及完整原始记录 |
| cp_carbon | tissue_mill | 对应原子流 | 实际原始记录 | 实测纤维化学品碳；产品碳；外送碳；库存；处理碳气体；捕集气氧化；化石分离 | 保留实物碳输入输出及库存变化；分别量化实测或有模型依据的生物 CO2 和 CH4 路径，披露差额；无支持换算不得从 COD 推断碳 | kg C; kg species | 每批及阶段期间；排放按监测计划 | 完整声明生产期，包括开机、断纸、换纸种及库存变化 | 声明纸厂产线及归属共用单元 | 每 1 kg 参考流 | 校准、实验室 SOP、供方定义及完整原始记录 |

有条件行需证明实际使用或记录缺席；缺失数量为未决。未列出的每种实际化学品、载体、包装废物、处理营养物或排放物种必须扩展原子清单。缺失身份不允许合并流或以相邻产品替代。不提供经验或默认范围，数值由兼容前景采集产生。[jrc-pp-bref-2015]

另按物件和材质核查实际成形网、压榨毛毯、起皱刮刀、液压／润滑剂更换及清洗剂。每条实际补充物及独立处理的废弃物流均须建立原子交换，附各自身份、库存／使用期证据、实物废弃质量及接收方。不假定耗材配方、零磨损或通用寿命；实际更换量和负荷不能由已安装设备质量推断。

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_mass | parent_reel | P = sum(合格卷毛重 - 实测卷芯或卷轴皮重 - 实测包膜皮重)；核对生产、交付及库存；P 不含不合格品或返回内部损纸。 | cp_mass | P | iso-solid-dry-matter-scope-2022 |
| same_reference_normalization | 所有清单行 | x = X / P，X 为实际归属生产期交换数量且使用本行单位，P 为实测厂门含水状态下的合格原纸净质量千克；实物原始账与分配后负荷账分开。 | cp_mass; each linked row protocol | x | jrc-pp-bref-2015 |
| dry_conversion | 质量基纸浆、原纸、药剂/配方及残料水分组分账 | d = m*(1-w)；D = sum(合格原纸 d)；干输出强度 I_d 换算为到货输出强度 I_d*D/P。实测总干固体不自动等于纯纤维素质量。 辅助组分质量/水分不替代原生燃气Volume/m3、蒸汽热GCV/MJ或电力NCV/MJ参考。 | cp_mass; cp_furnish; cp_chemicals; cp_residues | 实测干湿基准 | iso-solid-dry-matter-scope-2022 |
| electricity_conversion | electricity | MJ = 3.6 * kWh; x = MJ/P. | cp_utilities; cp_mass | MJ/kg | jrc-pp-bref-2015 |
| steam_reconciliation | steam | 在声明接口 H_net = sum(m_supply*h_supply - m_return*h_return)；焓零点、状态、存储及实际边界损失须匹配且只计一次。按核实供方 MJ 定义 Q_bg = k_bg*H_net；x = Q_bg/P。不得重复扣除已含损失或假设 k_bg=1。实物蒸汽／凝结水 kg 另行保留。 | cp_utilities; cp_mass | 供方参考 MJ/kg 原纸及独立实物热量／质量核对 | jrc-pp-bref-2015 |
| water_pollutant_load | cod, bod, tn, tp, tss, aox | L = sum(c_k * V_k * 0.001)，c_k 为毫克每升，V_k 为匹配排水立方米；x = L/P。COD 和 BOD 用 O2、氮用 N、磷用 P、AOX 用 Cl；指标不进入实物质量合计。 | cp_effluent; cp_mass | kg indicator/kg | eu-paper-bat-2014 |
| particle_partition | pm_fine, pm_coarse, pm_large | 细粒 = 实测 PM2.5；中粗粒 = 匹配 PM10 - PM2.5；大粒 = 匹配总颗粒 - PM10，仅限采样定义一致；x = 粒径段/P。不能在三段上再加总颗粒或 PM10；未知分粒径为未决。 | cp_dust; cp_mass | kg fraction/kg | jrc-pp-bref-2015 |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| identity | all inventory rows | 核对完整名称、CAS、分类、路线、说明、参考属性单位及精确物种介质。供方数量兼容性与身份分开审查，披露元数据冲突。 | 供方 SDS 及已核实身份 |
| balances | tissue_mill | 实物闭合湿质量、干固体、水及碳并保留库存和不确定性；保留内部链接等量、粉尘捕集外送和排放分拆。环境归属不能修复实物不平衡。 | 阶段账及实验室 |
| route_scope | tissue_mill | 不得将木材加工资料或历史单厂配方变为卫生原纸默认值。本路线需要实际干燥、起皱、配浆、化学品和厂门含水状态核实。 | BREF 及实际采集 |
| coverage | tissue_mill | 完整生产期包括开机、停机、断纸、清洁、损纸卷、相关废物空气水路径及背景运输链接；披露不支持方法和未决数值，不能设为零。 | 完整生产期记录 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | parent_reel | 要求由 parent_reel 和参考 UUID 链接的唯一合格最终产品输出，数量为 1 kg 原纸净质量；中英文数量、分母、聚合及公式一致。卷取转包装不得另列第二参考输出。 | jrc-pp-bref-2015 |
| validate_applicability | tissue_mill | 确认原生外购漂白硫酸盐浆、常规湿压扬克气罩刮刀起皱路线及单层母卷状态；拒绝以本稿覆盖零售转换产品、气流成网非织造、TAD 或混合及再生或一体化制浆。 | jrc-pp-bref-2015, sofidel-parent-reels |
| validate_inventory | all inventory rows | 每个交换必须为原子流且实际物质、介质子介质、来源、属性单位和供方数量约定匹配。身份、蒸汽压力焓、燃气立方米定义或 NOx 基准缺失保持未决，不得宣称完整数据集。 | jrc-pp-bref-2015 |
| validate_conservation | tissue_mill | 环境分配前核对实物质量水平衡碳平衡及内部链接等量。粉尘捕集、回用、外送及排放数量不重叠；三空气粒径段不包含嵌套汇总。保留实际生物 CO2 及分开的化石和生物甲烷。 | jrc-pp-bref-2015, eu-pef-multifunctionality-2021 |
| validate_discharge | tissue_mill | 要求实际接收介质及处理边界；直接淡水排放与厂外废水转移不能重复同一负荷。已知毒性有机氯、金属及其他实际排放须单独物种行，并与 COD、BOD、总氮、总磷、AOX 指标核对。缺测不是未检出或零排放。 | eu-paper-bat-2014 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_production |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 经审查的供方产线起皱母卷上游清单，用于转换厂且实际质量状态与参考数量兼容 |
| excluded_use | 完整 CPC32131 覆盖；消费卷张功能比较；絮片非织造或 TAD 混合再生路线；科学或发布批准；仅靠 UUID 身份声明完整从摇篮到厂门 |
| required_metadata | 场址年份生产期；纤维来源牌号；纸机压榨干燥起皱复卷状态；配方及供方约定；厂门含水净质量和质量；上游链接；处理接收方；分配平衡账 |
| required_quality_disclosure | 实际监测覆盖、未决身份基准供方、实测不确定性、样品 SOP 限制、源元数据缺陷及排除项；不使用通用数量默认值 |
| update_trigger | 纤维化学品干燥起皱或交付状态、公用工程供方基准、废水路线、粉尘治理或验收质量变化；解决缺口的新证据 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-pp-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015); https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 第 7.1.1–7.1.4、7.1.10、7.1.11.3 节，印刷页 660、664–665、670、672–674；技术路线、损纸白水回收及切纸粉尘。欧盟背景，不是通用数量；选择常规原生浆分支。 |
| sofidel-parent-reels | handbook | Sofidel, Parent Reels and Production Cycle; https://www.sofidel.com/en/business-lines/parent-reels/ | Parent Reels 及 Production Cycle 步骤 1–4 和 7：生产者证据支持备浆、母卷验收与独立下游转换。仅生产者例子，不规定配浆含水及能耗；工艺页 https://www.sofidel.com/en/about-us/production-cycle/。 |
| solenis-pae-scope | handbook | Solenis, Kymene Wet Strength Additives; https://www.solenis.com/en/the-solenis-way/innovation-solenis/our-product-innovations/kymene-wet-strength-additives/ | Technology Overview：PAE 用于卫生纸及擦手纸湿强，并涉及含氯副产物。供方范围说明，不是剂量、固含或普遍添加要求。 |
| ep-creping-2019 | literature | EP 2661285 B1, Creping adhesive compositions and methods of using those compositions; granted 27 March 2019; https://patentimages.storage.googleapis.com/98/9c/f7/a97cf4334331c9/EP2661285B1.pdf | PDF 第 2 页段落 0001–0004：PAE 和 PVOH 涂层化学及扬克起皱机制。仅专利路线例子，不采用试验配方或数量。 |
| iso-solid-dry-matter-scope-2022 | standard | ISO 638-1:2022, official solid-material dry-matter scope and notes; https://committee.iso.org/standard/83614.html?browse=ics | 仅官方摘要：固态浆纸样品及非水挥发损失限制；总干物质包含溶解固体。不用于浆悬浮液或销售批质量。完整采样测试合规须实际经验证 SOP；未声称取得完整标准。 |
| epa-ap42-gas-2026 | official_guidance | US EPA AP-42 Section 1.4 Natural Gas Combustion, corrected October 2026; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | 第 1.4.1–1.4.3 节及声明，页 1.4-1–1.4-3：燃烧来源物种及优先源测试。锅炉来源不证明切纸粉尘或气罩专属因子；不使用公布因子作默认值。 |
| eu-paper-bat-2014 | official_guidance | Commission Implementing Decision 2014/687/EU; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014D0687 | BAT 10 监测表及适用性脚注：水排放 COD、BOD、TSS、氮磷及有条件的 AOX、螯合剂和金属。仅官方网页范围和表格片段。仅监测背景，不把法规限值或 BAT 排放范围当通用清单量。 |
| eu-pef-multifunctionality-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | PDF 第 63 页：细分或系统扩展及有理由的底层物理分配层级。仅一般方法，不规定原纸分配份额，不声明完全 PEF 合规。 |
