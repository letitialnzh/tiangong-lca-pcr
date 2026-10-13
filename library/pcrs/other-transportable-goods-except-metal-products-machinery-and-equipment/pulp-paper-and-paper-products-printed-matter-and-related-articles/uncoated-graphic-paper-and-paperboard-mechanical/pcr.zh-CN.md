---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.uncoated-graphic-paper-and-paperboard-mechanical
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 原生浆超级压光未涂布凹版印刷纸

## 1. 范围与适用性

本PCR涵盖卷筒交付的原生浆SC凹版杂志／目录用纸：外购原生木材热机械浆（TMP，磨浆前不经化学浸渍）、外购漂白针叶木硫酸盐增强浆，并以高岭土作纸内填料。机械／TMP纤维至少占绝干纤维配料10%，分母排除填料和助剂。不提供固定浆比、填料含量、定量、得率或排放数量。UPM Cat G证明该SC商业纸种及化学／机械浆、填料和卷筒交付，但不证明特定TMP子类、供方、非一体化工厂、配方或无施胶。后述较窄条件是本PCR明确的适用要求，须逐个前景数据集核实。JRC BREF术语表（印刷页850）将含高填料SC纸的未涂布含机械浆杂志纸与无木纸区分。

本稿“未涂布”指无表面颜料涂层。表面施胶是另一项操作：BREF §7.1.5（印刷页666）区分淀粉／合成施胶与§7.1.6的颜料浆涂布。本选定路线不经表面施胶压榨，仅有未涂布商品标签不能证明无表面施胶。仍可能使用湿部阳离子淀粉或留着助剂，须按实际配方采集。排除新闻纸、再生／脱墨SC纸、无木办公纸、颜料涂布LWC／MWC、纸板、CTMP一体化生产、印刷出版物及表面施胶变体。越界路线须单独裁定适用性，不能默用本方法。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.uncoated-graphic-paper-and-paperboard-mechanical |
| classification_refs | CPC 3.0 32125; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 原生浆超级压光未涂布凹版印刷纸 |
| excluded_products | 新闻纸；再生SC；无木纸；涂布纸；纸板；表面施胶纸；一体化制浆 |
| representative_product | 原生浆SC-A凹版杂志卷筒纸；UPM Cat G仅为商业纸种例证，不是指定配方 |
| production_route | 非一体化，外购TMP及漂白针叶木硫酸盐浆；高岭土加填湿法成形；燃气锅炉供热烘缸干燥；超级压光；分切／复卷；分别采用牛皮纸／PE包装及纸芯；厂内废水处理 |
| market_state | 未印刷的合格SC卷筒成品于交付厂门，声明实测水分及质量，净纸质量不含卷芯与包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应可用于杂志／目录凹版印刷加工的SC纸 |
| How much | 交付厂门1 kg合格净纸 |
| How well | 声明定量、厚度、不透明度、白度、平滑度／光泽、抗张和水分，满足约定凹版验收，不复制单一生产者通用目标 |
| How long or cycle | 一次生产／交付供应周期，不假定印刷得率或使用寿命 |
| reference_flow_link | `finished_paper` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 无涂层印刷纸和纸板，机械 `a708be32-4fc9-49c7-a7da-57ce387f98c0` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | SC凹版等级；TMP／化学纤维绝干占比及供方路线；高岭土灰分／留着；无颜料涂层；表面施胶不存在的证据；原生／再生状态；实测定量、水分及质量；工厂边界；用电电压；燃气锅炉压力／焓；水源／受纳水体；包装及处理路线 |

这是以质量为基准的供货声明单位。印刷服务比较还须实测面积／定量、印刷性能及加工得率；同质量不证明同等印刷服务。生成数据集必须声明全部限定信息。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished_paper | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用最终分切／复卷后的校准净纸称量，排除卷芯、包装、不合格品、内部损纸及返工。保留实际水分，不假定风干或绝干成品。 |
| `common_basis` | 所有清单行 | 各行已声明属性 | 各行单位／kg纸 | 双语均按每1 kg参考流；协议以同期实际合格净纸P（kg）为共同分母，P须为正。 |
| `dry_furnish` | tmp_pulp; kraft_pulp; kaolin; primary_sludge; bio_sludge | 质量 | kg | 分别保留交付湿质量、实测干固形物、绝干纤维、灰分及残余水，不设90%浆干度或纸水分默认值。纤维占比分母排除矿物、化学品与包装。 |
| `energy_volume` | gas; electricity | 体积／净热值 | m3 / MJ | 天然气m3须有实测温压／压缩因子／组成／干湿及供方相同参考；电力采用已核实净热值能量链，1 kWh = 3.6 MJ。天然气次级质量系数不得当密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购原生TMP、漂白针叶木硫酸盐浆、高岭土、实际化学产品及包装进入工厂；直接河流取水、电网用电及锅炉管道气跨厂界。 |
| starting_condition_role | 造纸前景门到门，供方从摇篮到交付厂门的数据提供上游负荷。 |
| product_classification_scope | 仅CPC32125的原生浆SC子集，不是所有书写／印刷纸。 |
| recursive_input_rule | 内部损纸、回收浆、细小纤维、填料、滤液及凝结水为内部循环。外购同类纸不能未经新适用性裁定便进入本原生浆路线。 |
| upstream_dataset_requirement | 要求与子类／路线／水分兼容的浆数据，包含林业、制浆、漂白及供方运输；化学品、包装及交付电力／天然气等级和数量兼容；实际厂外废物运输处理。供方交付厂门数据若缺运输，在生成模型中显式补计一次。 |
| disclosure | 厂址／年份、产品生产批次、排除一体化制浆、无施胶／涂布证据、锅炉及水处理边界、物料能源协议、运输覆盖、截断及未解决数量／背景兼容性。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing` | sc_papermaking | 纳入碎浆、筛选、各浆磨浆／混合、高岭土／化学品投加、流送、湿成形／压榨、烘缸干燥、超级压光、干分切／复卷、包装及装芯，包含开机、断纸及清洗。 | jrc-paper-bref-2015 |
| `boundary_utilities` | 厂内辅助 | 纳入燃气锅炉、内部蒸汽分配／凝结水、原水处理、白水回收、厂内初级／生化废水处理、污泥脱水及除尘。本选定路线不假定CHP、生物质／污泥燃烧、外购热或一体化制浆；实际存在则重裁边界。 | jrc-paper-bref-2015; epa-gas-combustion-2026 |
| `boundary_water_loops` | 水／纤维／矿物账 | 白水I短循环及白水II／回收装置长循环留在前景内部。每个内部链接两端以相同数量分别跟踪水、长纤维、细小纤维和高岭土。实际返回配浆的回收固体是内部回收，只有进入处理的净排出料才可能成为外运污泥。 | jrc-paper-bref-2015 |
| `boundary_complete_rows` | 全部交换 | 卡片为路线原子清单，不准据此遗漏未列场址交换。核对采购／SDS／维修、处理及监测登记，每种实际存在化学品、污染物、润滑剂、制冷剂、包装废物及其他筛渣均另立核实身份的原子行。区分不存在、缺数据及截断，身份空缺或未测不得算零。 | jrc-paper-bref-2015 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `sc_papermaking` | 原生浆超级压光未涂布凹版印刷纸 | required | 仅限以上合格非一体化路线 | 聚合前景制造及厂内辅助 | 1 kg合格SC成品净纸 |

实物顺序：采购浆→备浆／混合→成形／压榨→干燥→超级压光→分切／复卷→包装／交付。白水I返回流送；多余白水II进入回收装置→回收纤维／细小纤维／高岭土及澄清水返回；净排出进入处理→最终河流排水及初沉／生化污泥。捕集切纸粉尘分别进入有记录的内部碎浆或净外部接收方。内部供汽及凝结水回流分别计量为两端同量的传递。这些连续造纸阶段构成一个前景单元并保留阶段仪表记录，中间纸不是另一个可销售输出。

### 过程：原生浆超级压光未涂布凹版印刷纸（`sc_papermaking`）

#### 输入

##### 产品流

###### 纸浆（`tmp_pulp`）

仅限外购原生木材热机械浆，机械磨浆前不经化学浸渍。该广义原生木浆身份包含此子集；供方路线、漂白、树种及绝干／交付质量基准必须与背景数据匹配，不作为混合浆料选择器。

- 选定流：纸浆 `6752b268-93a1-4dca-b098-3f3afa7eaddf`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_furnish 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_furnish`
- 来源：jrc-paper-bref-2015

###### 化学木浆，溶解级除外 (`kraft_pulp`)

仅限已制造、非溶解级化学木浆身份中的实际外购漂白针叶木硫酸盐增强浆。须核实实际针叶树种、硫酸盐／漂白路线、品级、交付水分及相容供方干质量参考。其他化学路线或溶解浆不能替代；实物定位本身不证明供方清单适用。

- 选定流：化学木浆，溶解级除外 `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_furnish 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_furnish`
- 来源：jrc-paper-bref-2015

###### 造纸级高岭土填料（`kaolin`）

指留在纸页内部的高岭土填料，不是表面颜料涂层。记录采购产品纯度及浆液固形物；矿山实体不是已核实的造纸级产品身份。

- 选定流：造纸级高岭土填料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_furnish 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_furnish`
- 来源：jrc-paper-bref-2015

###### 湿部用阳离子淀粉（`starch`）

仅在实际湿部添加时纳入，不设置表面施胶压榨。记录改性淀粉等级、配方及干固形物；原生淀粉身份不能证明阳离子改性。

- 选定流：湿部用阳离子淀粉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_chemicals 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chemicals`
- 来源：jrc-paper-bref-2015

###### 阳离子聚丙烯酰胺（`pam`）

有实际留着／絮凝聚合物投入时纳入。分别计量湿部与废水处理用量，保留两种用途后才可聚合同一聚合物；核实电荷等级、配方、有效成分比例及背景基准。

- 选定流：阳离子聚丙烯酰胺 `ccf600a4-35af-45d6-95b3-cb58590a579f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_chemicals 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chemicals`
- 来源：jrc-paper-bref-2015

###### 聚二甲基硅氧烷消泡乳液（`defoamer`）

仅在实际采用该乳液产品时纳入。记录完整配方质量及供方组成，不用泛有机硅替代，不再次计入其有效聚合物。

- 选定流：聚二甲基硅氧烷消泡乳液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_chemicals 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chemicals`
- 来源：jrc-paper-bref-2015

###### 次氯酸钠杀菌剂溶液（`biocide`）

仅在实际使用时纳入。记录溶液质量、实测次氯酸钠比例、有效氯基准及用途。纯度至少10%的候选不能证明与未知采购浓度兼容；不设浓度默认值。

- 选定流：次氯酸钠杀菌剂溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_chemicals 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chemicals`
- 来源：jrc-paper-bref-2015

###### 三氯化铁（`ferric_chloride`）

仅在废水混凝实际使用时纳入；只有供方／背景采用同一基准时才以无水FeCl3当量入账。保留溶液质量、实测有效成分及仅计一次的载体水；若背景为溶液则采用溶液质量，不叠加两种表达。
CAS7705-08-0及名称／注释指向无机FeCl3；CPC34160有机化合物分类属于须澄清的来源错误，不能解释为另一物种。固体／溶液参考量相容性仍为必需条件。

- 选定流：三氯化铁 `d29463c7-fbbf-4811-b122-a651f205d603`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_chemicals 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chemicals`
- 来源：jrc-paper-bref-2015

###### 调节pH用氢氧化钠溶液（`caustic`）

仅在实际使用该pH调节溶液时纳入，记录交付浓度。已检固体烧碱候选明确95%–98%纯度，不赋给未限定浓度的溶液。

- 选定流：调节pH用氢氧化钠溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_chemicals 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_chemicals`
- 来源：jrc-paper-bref-2015

###### 交流电（`electricity`）

仅限用户侧1–35 kV电网平均交流电。备浆、泵、真空、干燥辅助、超级压光、复卷、除尘、锅炉辅助及水处理各计一次。核实实际电压、地域／年份、损耗及供方组合，不以电厂生产组合替代用户边界。
来源指定CN，实际地区电力组合、参考年份、中压接口及损耗仍须核实，不能由UUID推断。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_energy 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：jrc-paper-bref-2015

###### 气态天然气（`gas`）

指供给厂内锅炉的管道天然气，参考属性为体积而非质量。记录表温、绝对压力、干湿状态、组成及压缩因子，并核对供方／背景立方米定义。次级质量系数不是密度；内部蒸汽保留实测压力、焓及凝结水回流，不另列外购蒸汽交换。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：由 cp_energy 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：jrc-paper-bref-2015

###### 未涂布印刷书写纸和包装纸 (`wrapper`)

实际未涂布牛皮卷筒包装纸片及端部覆盖用纸，与PE薄膜和纸板芯分开计量。核实纤维组成、定量、水分、供给节点及供方基准。广义包装纸名称包括该实物子集，但其CPC32129图文纸分类属于已披露来源矛盾，不能证明包装品级。纸袋不是本纸片；外购层合复合包装须有自身核实交换，替代而非重复组分输入。

- 选定流：未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_packaging 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：upm-cat-g-2026

###### 聚乙烯薄膜（`pe_film`）

实际单独采用聚乙烯防潮薄膜时纳入，不是PET膜或复合包装。核实聚合物等级、厚度、实测质量及供方；名称／CAS／说明支持PE薄膜物理身份，但源分类不一致。
本行仅代表实际非泡沫、非自粘、未增强、未层合且无衬背的薄膜；牛皮纸／PE复合包装不属于此独立薄膜身份。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_packaging 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：upm-cat-g-2026

###### 圆纸筒（`core`）

记录实际尺寸及等级的纸板卷芯。记录新购、返回纸芯、回用次数及报废，不在每次回用均赋全部新芯负荷。参考纸质量排除纸芯与包装。
实物账保留实际接收／返回／外运纸芯质量。回用仅影响有证据的服务负荷及更换消耗，不能缩减真实实物返回或报废量。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_packaging 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：upm-cat-g-2026

##### 基本流

###### 河水（`water_in`）

仅指厂址直接从河流取水，记录水体及地域。内部白水不算新取水。若外购水或地下水须另立实际流及供方／资源边界。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：由 cp_water 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：jrc-paper-bref-2015

#### 输出

##### 产品流

###### 无涂层印刷纸和纸板，机械（`finished_paper`）

仅有一个成品参考输出：符合本稿TMP／化学浆限定的SC卷筒纸，无颜料涂层、不经表面施胶。数据库名称比本PCR广，不得扩大适用范围。聚合制造单元只以最终合格净纸为产品输出。

- 选定流：无涂层印刷纸和纸板，机械 `a708be32-4fc9-49c7-a7da-57ce387f98c0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_output`
- 来源：jrc-paper-bref-2015; upm-cat-g-2026

##### 废物流

###### 造纸污泥（`primary_sludge`）

指净外运的脱水初沉污泥：未由多盘／回收装置返回的纤维、细小纤维及高岭土。记录湿质量、干固形物、有机／灰分组成及接收方。返回配浆的回收料不算外排污泥，不自动计联产品抵扣。

- 选定流：造纸污泥 `b48b29ab-4ead-4413-9adb-07631cd7af09`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_residues 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：jrc-paper-bref-2015

###### 造纸污泥（`bio_sludge`）

指与初沉污泥分别计量的生化剩余污泥净外运量。回流活性污泥及脱水滤液留在内部。若两者实际混合脱水，保留实测成分核对，并只表达一次混合外运，不把两行再与混合总量叠加。

- 选定流：造纸污泥 `b48b29ab-4ead-4413-9adb-07631cd7af09`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_residues 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：jrc-paper-bref-2015

###### 固体废物 (`screen_rejects`)

实际外运的外购原生浆备浆湿筛渣，条件采用广义工业固体废物身份定位。计量湿质量、干固形物、纤维／填料／异物组成、污染状态及相容接收／处理供方。内部回用浆不是外部输出；共用UUID不表示可与初级污泥、生化污泥、纸边料或捕集粉尘合并，各真实物流和接收路线分别保留。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_residues 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：jrc-paper-bref-2015

###### 粉尘（`collected_dust`）

指干切／复卷收集并外运的含纸纤维和高岭土粉尘。称量除尘器排料并单独跟踪内部碎浆回用；此废物质量不是大气排放量，也不是原生纤维替代抵扣。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_dust 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dust`
- 来源：jrc-paper-bref-2015

##### 基本流

###### 水（`water_out`）

仅记录厂内处理后最终排入河流的液态水，体积／立方米。记录所有旁路及受纳水体，不另列未处理废水产品交换，不用取水资源流替代输出。污染物行表示水中负荷，不是额外废水体积。
本行是液态水组分，不表示混合废水为纯水。记录排口温度、实测整份废水密度及水质量分数；水组分质量 = 实测废水体积 × 废水密度 × 水分数，水组分体积 = 水组分质量／排放温度下有记录的水密度。污染负荷另用实际整份废水体积；不默认密度1000，也不把COD／TSS计为额外载体水。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：由 cp_water 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：jrc-paper-bref-2015

###### 水蒸气（`water_vapour`）

指实际干燥、冷却及锅炉向室外空气未特指子介质释放的水蒸气。水账区分工艺蒸发与天然气燃烧生成水；内部蒸汽／凝结水不算排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_water 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：jrc-paper-bref-2015

###### 二氧化碳（化石源）（`co2_fossil`）

计量锅炉化石CO2及其他可归属化石碳释放，区分碳酸盐矿物碳与生物质碳。 介质为室外空气未特指；实际更具体子介质须核实身份后采用。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_air 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：epa-gas-combustion-2026; jrc-paper-bref-2015

###### 二氧化碳（生物源）（`co2_bio`）

计量／建模废水处理及其他边界内生物碳氧化释放；不因温室气体统计排除而从LCI删除。本门到门单元不另造森林吸碳。 介质为室外空气未特指；实际更具体子介质须核实身份后采用。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_air 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：epa-gas-combustion-2026; jrc-paper-bref-2015

###### 一氧化碳（化石源）（`co`）

指燃气锅炉实际化石源CO排放，保留实测干烟气条件及物种质量。 介质为室外空气未特指；实际更具体子介质须核实身份后采用。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_air 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：epa-gas-combustion-2026; jrc-paper-bref-2015

###### 氮氧化物（`nox`）

仅NO与NO2，排除N2O。源质量／千克不证明以NO2当量报告；监测物种或NO2当量基准须与LCIA定义一致，未解决换算保持待定，不能将同一汇总与物种质量相加。 介质为室外空气未特指；实际更具体子介质须核实身份后采用。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_air 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：epa-gas-combustion-2026; jrc-paper-bref-2015

###### 二氧化硫（`so2`）

仅记录燃料硫／加臭剂来源或实测锅炉SO2，不作硫氧化物总量替身。 介质为室外空气未特指；实际更具体子介质须核实身份后采用。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_air 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：epa-gas-combustion-2026; jrc-paper-bref-2015

###### 甲烷 (化石源)（`ch4`）

化石甲烷包括实测管道泄漏及不完全燃烧，各计一次；采购天然气仍为投入，甲烷释放为输出，不是另一次燃料消耗。 介质为室外空气未特指；实际更具体子介质须核实身份后采用。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_air 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：epa-gas-combustion-2026; jrc-paper-bref-2015

###### 甲烷 (生物源)（`ch4_bio`）

实际生化处理甲烷存在时纳入；核查厌氧区及污泥储存，不因名为好氧系统即假定为零。 介质为室外空气未特指；实际更具体子介质须核实身份后采用。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_air 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：epa-gas-combustion-2026; jrc-paper-bref-2015

###### 一氧化二氮（`n2o`）

记录锅炉及生化处理实际N2O，独立于NOx，保留工况和实测或有依据的场址估计。 介质为室外空气未特指；实际更具体子介质须核实身份后采用。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_air 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：epa-gas-combustion-2026; jrc-paper-bref-2015

###### 颗粒物 (PM2.5)（`pm25`）

记录干切、复卷、搬运及锅炉经收集后实际排入厂界外空气的PM2.5及以下颗粒物；按源记录可过滤／可凝结覆盖范围，不设通用切纸或燃烧因子。 介质为室外空气未特指；实际更具体子介质须核实身份后采用。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_dust 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dust`
- 来源：jrc-paper-bref-2015

###### 颗粒物 (PM2.5 - PM10)（`pmcoarse`）

记录实际外排的互斥大于PM2.5至PM10区间；只有采样定义一致时才由累积PM10减PM2.5。 介质为室外空气未特指；实际更具体子介质须核实身份后采用。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_dust 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dust`
- 来源：jrc-paper-bref-2015

###### 颗粒物（> PM10）（`pmover`）

记录实际外排大于PM10颗粒物，特别是切纸／复卷粉尘；流身份不是正排放数量证据。不叠加累积TSP／PM10／PM2.5，收集粉尘另行记录。 介质为室外空气未特指；实际更具体子介质须核实身份后采用。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_dust 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dust`
- 来源：jrc-paper-bref-2015

###### 甲醛（`formaldehyde`）

核查天然气燃烧实际痕量甲醛；采用物种测量或有记录的场址估计，不以总VOC代替此物种。 介质为室外空气未特指；实际更具体子介质须核实身份后采用。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_air 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：epa-gas-combustion-2026; jrc-paper-bref-2015

###### 苯（`benzene`）

核查天然气燃烧实际痕量苯；其他识别VOC另立核实物种行，不将总VOC与其已物种化部分叠加。 介质为室外空气未特指；实际更具体子介质须核实身份后采用。

- 选定流：苯 `08a91e70-3ddc-11dd-9202-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_air 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：epa-gas-combustion-2026; jrc-paper-bref-2015

###### chemical oxygen demand（`cod`）

以千克需氧量记录最终COD负荷，保留分析方法及还原剂干扰。 仅指处理／旁路后的最终淡水排放，不叠加入水或被污泥捕集负荷。 天工平台未提供中文名称；保留原英文名称，非自称的官方译名。

- 选定流：chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_effluent 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：jrc-paper-bref-2015

###### 生物需氧量（`bod`）

声明BOD5培养及硝化抑制，并核对广义BOD身份兼容性；BOD为并列诊断，不是与COD相加的第二份需氧负荷。 仅指处理／旁路后的最终淡水排放，不叠加入水或被污泥捕集负荷。

- 选定流：生物需氧量 `08a91e70-3ddc-11dd-97de-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_effluent 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：jrc-paper-bref-2015

###### 排入淡水的总悬浮固体（`tss`）

记录最终实测TSS，包括残留纤维／细小纤维／填料；溶解性固体不是此指标，已检未特指水介质记录不能建立本淡水子介质身份。 仅指处理／旁路后的最终淡水排放，不叠加入水或被污泥捕集负荷。

- 选定流：排入淡水的总悬浮固体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_effluent 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：jrc-paper-bref-2015

###### 总氮（不含N₂）（`nitrogen`）

以N质量计，披露实测含氮物种，排除N2，不把总氮负荷与同一已物种化氮重复。 仅指处理／旁路后的最终淡水排放，不叠加入水或被污泥捕集负荷。

- 选定流：总氮（不含N₂） `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_effluent 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：jrc-paper-bref-2015

###### 总磷（`phosphorus`）

以P质量而非磷酸盐产品质量计，保留实测方法及颗粒／溶解覆盖。 仅指处理／旁路后的最终淡水排放，不叠加入水或被污泥捕集负荷。

- 选定流：总磷 `f9df3107-6b59-4067-b920-3c61cf3630c7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_effluent 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：jrc-paper-bref-2015

###### adsorbable organic halogen compounds（`aox`）

声明AOX分析的卤素当量基准及与源汇总指标的兼容性；存在高影响单体时须识别，不仅凭采购浆料便假定有含氯排放。 仅指处理／旁路后的最终淡水排放，不叠加入水或被污泥捕集负荷。 天工平台未提供中文名称；保留原英文名称，非自称的官方译名。

- 选定流：adsorbable organic halogen compounds `fe0acd60-3ddc-11dd-aaa0-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由 cp_effluent 记录可归属的边界净交换量，并保留其数量基准。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_effluent`
- 来源：jrc-paper-bref-2015

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | 合格SC生产批次 | 仅一个可销售纸输出，内部浆／损纸／细小纤维／填料回收不是联产品，不赋分配份额或避免制浆抵扣。实际净废物收集／处理归其来源批次，除非后续有依据模型另立废物／次生产品边界。 | jrc-paper-bref-2015; eu-pef-allocation-2021 |
| `allocation_shared_loads` | 多纸种工厂辅助／处理 | 优先批次／生产线细分及直接仪表。其余共享负荷采用已证明物理关系：实测蒸汽／焓或用电负荷，废水污泥按实测水力／有机／固体处理驱动量。记录驱动验证、边界及敏感性，产品质量份额不是通用处理或能耗驱动。物理关系不成立时以同期取值论证其他关系，不设分配因子默认值。 | eu-pef-allocation-2021 |
| `allocation_two_ledgers` | 所有质量／水／碳平衡 | 分别保留未分配实物图及组分质量／水／碳平衡和分配后环境负荷账。分配改变归属负荷，不改实测联产品／外运质量或内部链接任一端。同一固体不得同时计污泥转移和原料回收抵扣。 | jrc-paper-bref-2015; eu-pef-allocation-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | sc_papermaking | 称量合格SC纸 | 一手实测／可追溯记录 | 纸种／批次；卷净重；包装／芯皮重；水分；定量；不合格品；期初／期末库存 | 校准的最终卷称量及质量放行，核对销售与库存。 | kg | 每卷及批次 | 同一完整声明批次／年，含停机及库存变化 | 所选生产线及因果可归属厂内辅助 | 每 1 kg 参考流 | 校准、原始记录、方法、供方证明、覆盖、不确定性及核对 |
| cp_furnish | sc_papermaking | TMP／硫酸盐浆／高岭土及内部组分平衡 | 一手实测／可追溯记录 | 供方／树种／路线；收货；库存；浆干固形物；高岭土纯度／灰分；TMP纤维比例；白水流量／长纤维／细小纤维／灰分；回收返回／净排出 | 称量收货／领用，实验室干固形物、纤维比例和灰分，匹配内部链接仪表、采样及库存。 | kg | 每批／班及换纸种 | 同一完整声明批次／年，含停机及库存变化 | 所选生产线及因果可归属厂内辅助 | 每 1 kg 参考流 | 校准、原始记录、方法、供方证明、覆盖、不确定性及核对 |
| cp_chemicals | sc_papermaking | 各实际配方投入 | 一手实测／可追溯记录 | SDS；配方；电荷等级；组成；交付浓度；溶液／有效成分质量；用途；清洗；库存变化 | 逐产品称量／计量，核对供方参考量及实验室固形物／有效成分，不重复完整配方及其组分。 | kg | 每批／投加班 | 同一完整声明批次／年，含停机及库存变化 | 所选生产线及因果可归属厂内辅助 | 每 1 kg 参考流 | 校准、原始记录、方法、供方证明、覆盖、不确定性及核对 |
| cp_energy | sc_papermaking | 电力、天然气及内部热账 | 一手实测／可追溯记录 | 分阶段子表；电网电压／年份；天然气体积温压／压缩因子／干湿／组成；供方标准体积；锅炉负荷；蒸汽压力／温度／焓；凝结水量／焓；排污 | 校准的能源及阶段仪表，核对供汽／凝结水热平衡与账单，保留同期条件。 | MJ; m3 | 连续／班及批次 | 同一完整声明批次／年，含停机及库存变化 | 所选生产线及因果可归属厂内辅助 | 每 1 kg 参考流 | 校准、原始记录、方法、供方证明、覆盖、不确定性及核对 |
| cp_packaging | sc_papermaking | 牛皮包装纸、PE膜、纸芯 | 一手实测／可追溯记录 | 材料等级；尺寸；皮重；领用／返回／库存；边角料；新购／回用纸芯；供方运输 | 分别称各组分，核对回用及废物，若用采购复合物则替代重复组分。 | kg | 每卷／批次 | 同一完整声明批次／年，含停机及库存变化 | 所选生产线及因果可归属厂内辅助 | 每 1 kg 参考流 | 校准、原始记录、方法、供方证明、覆盖、不确定性及核对 |
| cp_water | sc_papermaking | 河流取水、液态返回及水蒸气 | 一手实测／可追溯记录 | 进／排水流量；水源／受纳；工艺蒸发；浆／化学品／纸／污泥含水；雨水；锅炉燃烧水；内部I／II／滤液／凝结水；储量变化；旁路 | 校准独立进／出水流量计，实测温度、分别保留废水与水的密度、水分数及各流含水；载体水按water_out定义换算，整份废水体积另留给cp_effluent。蒸发采用有不确定度的实测平衡，不用BREF默认值。 | m3; kg | 连续及每日 | 同一完整声明批次／年，含停机及库存变化 | 所选生产线及因果可归属厂内辅助 | 每 1 kg 参考流 | 校准、原始记录、方法、供方证明、覆盖、不确定性及核对 |
| cp_residues | sc_papermaking | 初沉／生化污泥及浆筛渣 | 一手实测／可追溯记录 | 湿重；干固形物；纤维／细小纤维／灰分／有机碳；混合脱水分拆；库存变化；返回；承运人；接收方；实际处置／回收 | 校准废物秤／转移联单及配套固形物／灰分／碳分析，核对发生与接收，混合脱水外运只计一次。 | kg | 每次转移及代表批次 | 同一完整声明批次／年，含停机及库存变化 | 所选生产线及因果可归属厂内辅助 | 每 1 kg 参考流 | 校准、原始记录、方法、供方证明、覆盖、不确定性及核对 |
| cp_air | sc_papermaking | 燃气锅炉物种及处理温室气体 | 一手实测／可追溯记录 | 物种／CAS；排放源；化石／生物碳；NO／NO2基准；浓度；实际／参考氧；干湿温压；烟气量；时间／负荷；控制状态；检出限；泄漏 | 源测试／连续监测与流量在时间及干湿／温压／氧参考上匹配，积分物种负荷；记录实测或场址有依据的处理／泄漏估计及全部未测范围。 | kg | 安装连续监测处连续，另做代表负荷测试 | 同一完整声明批次／年，含停机及库存变化 | 所选生产线及因果可归属厂内辅助 | 每 1 kg 参考流 | 校准、原始记录、方法、供方证明、覆盖、不确定性及核对 |
| cp_dust | sc_papermaking | 各粒径区间及捕集切纸粉尘 | 一手实测／可追溯记录 | 切纸／复卷源；除尘进口／出口／效率；厂外逸散份额；采样粒径；PM2.5／PM10／TSP；可过滤／可凝结；流量／时间；捕集质量／灰分；回用／外运量 | 粒径分辨的有组织及逸散外排评估，加除尘器称重；差分前核对累积分级一致性。室内捕集不自动等于室外排放。 | kg | 代表切纸／锅炉负荷及每次粉尘转移 | 同一完整声明批次／年，含停机及库存变化 | 所选生产线及因果可归属厂内辅助 | 每 1 kg 参考流 | 校准、原始记录、方法、供方证明、覆盖、不确定性及核对 |
| cp_effluent | sc_papermaking | 各最终水污染指标 | 一手实测／可追溯记录 | 配对流量及24h混样；COD方法；BOD5培养；TSS；总氮以N；总磷以P；AOX卤素基准；污泥去除；旁路；采样覆盖；定量限 | 流量比例混样或经论证等效方法、认可化验及匹配排水体积；按参数／场址定频，量化缺口，不宣称通用BREF监测频率。 | kg; mg/L; m3 | 按场址方案配对采样及旁路事件 | 同一完整声明批次／年，含停机及库存变化 | 所选生产线及因果可归属厂内辅助 | 每 1 kg 参考流 | 校准、原始记录、方法、供方证明、覆盖、不确定性及核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `net_basis` | all inventory rows | x_i = X_i / P；X_i为同期可归属净交换；P为合格成品净纸kg，finished_paper行恰为1 kg。 | X_i; P; cp_output | x_i | jrc-paper-bref-2015 |
| `dry_components` | tmp_pulp; kraft_pulp; kaolin; primary_sludge; bio_sludge | D_i = W_i * s_i；water_i = W_i - D_i；纤维与灰分细分用实测组成，不推断得率。纤维占比＝绝干TMP纤维／全部绝干纤维，排除矿物。 | W_i; s_i; cp_furnish; cp_residues | D_i; water_i; fibre share | jrc-paper-bref-2015 |
| `effluent_load` | cod; bod; tss; nitrogen; phosphorus; aox | L_j = sum(C_j,t * V_t * 0.001)；C为mg/L、V为m3、L为kg。配对同一最终排口同一时段浓度与水量，含旁路，再除P；不把分开年度平均数相乘。 | C_j,t; V_t; cp_effluent; P | L_j / P | jrc-paper-bref-2015 |
| `air_load` | co2_fossil; co2_bio; co; nox; so2; ch4; ch4_bio; n2o; pm25; pmcoarse; pmover; formaldehyde; benzene | L_j = sum(c_j,t * v_t * dt * 0.000001)，c为mg/m3、v为m3/h、dt为h且气体参考条件一致。参考氧修正不能仅改浓度却保留不兼容实际烟气量。 | c_j,t; v_t; dt; cp_air; cp_dust; P | L_j / P | jrc-paper-bref-2015 |
| `particle_partition` | pm25; pmcoarse; pmover | E_small＝实测PM2.5；E_coarse＝实测PM10－实测PM2.5；E_large＝实测TSP－实测PM10，仅限采样／凝结覆盖一致且差值非负。否则保留粒径未决，不设比例。 | cp_dust; matched cumulative loads | mutually exclusive emitted bins | jrc-paper-bref-2015 |
| `component_balance` | sc_papermaking | 对水、长纤维、细小纤维、矿物／灰分及碳各组分：外部投入＋生成组分＝纸＋包装外运＋净废物＋最终排放＋库存变化＋量化残差。内部链接仅在两端同量时抵消。碳账按实测流股碳含量或明确记录的化学计量换算为kg C，并区分生物、化石与矿物碳；木材／高岭土名称不是碳含量系数。COD／BOD需氧量不是实物碳质量。颗粒物流只计实际携带水分并与水蒸气分开；核对纯水组分排放与混合废水体积，污染物／固体质量不得重复。 | cp_furnish; cp_output; cp_water; cp_residues; cp_air; cp_dust; cp_effluent | unallocated balance and residual | jrc-paper-bref-2015 |
| `burden_partition` | shared burdens | B_SC = B_direct,SC + sum(B_shared,k * f_SC,k)；各f用实测因果驱动论证，服务的全部输出份额合计为1，实际实物外运量保持不变。 | shared burden; driver records; cp_energy; cp_effluent | assigned burden ledger | eu-pef-allocation-2021 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 核实实际物理子集、名称／CAS／路线／名称属性、供方参考量及单位链；UUID解析不是数据兼容。空UUID仍为具名原子缺口。 | 供方规格、流直读元数据、基准核对 |
| dq_period | all inventory rows | 使用完整同期净产量分母，包含变化、降级批次、停机、监测缺口及不确定性，不用设计产能。 | 生产／仪表记录及校准 |
| dq_completeness | all exchanges | BREF及AP-42限定证据范围，不是配方或默认负荷。已列卡外实际化学品、气体及废物须增具名行，未知不等于不存在。 | 采购／SDS／维修及环境登记 |
| dq_indicators | water emissions | COD／BOD及TN／TP／AOX为分析指标，不是独立分子物种。保留分析／物种数据并选无重复LCIA处理，不用汇总指标隐藏高影响物种。 | 化验方法、物种化及LCIA核对 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | finished_paper | 原生TMP／漂白针叶木硫酸盐浆／高岭土SC路线、至少10%绝干机械纤维、无颜料涂布或无表面施胶证据若缺失或相反，适用不通过；CPC标签或广义UUID不能替代实物事实。 | jrc-paper-bref-2015; upm-cat-g-2026 |
| `validate_measurement` | all inventory rows | 要求单一最终1 kg输出、相同分母及时间聚合、已支持属性／单位链、实测水分／有效成分及供方／背景数量兼容。未支持转换或未知天然气体积约定保持不完整。 | jrc-paper-bref-2015 |
| `validate_loops_residues` | water/fibre/mineral/carbon ledger | 核对内部链接同量及纸、回收浆、初沉污泥、生化污泥、湿筛渣、捕集粉尘和残余出水去向。未知残差须调查，不任意比例配平或重复分配，须有实际接收方及厂外处理。 | jrc-paper-bref-2015; eu-pef-allocation-2021 |
| `validate_emissions` | all elementary outputs | 要求正确介质／物种／碳来源、匹配监测条件、颗粒区间不交叠并与捕集分开。LCI保留生物CO2。NOx排除N2O且须明确NO2当量／物种兼容；COD／BOD／TN／TP／AOX交叠须有显式LCIA排除／映射。无测量或量化有依据估计即不完整，不算通过。 | jrc-paper-bref-2015; epa-gas-combustion-2026 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 适用SC工厂门供货并显式链接上游及废物处理；服务／质量评估后用作印刷模型投入 |
| excluded_use | 完整CPC32125覆盖、所有文化纸、印刷成品足迹、已核实商业配方、印刷服务比较等效、独立科学批准 |
| required_metadata | 全部参考限定；厂址／年份／批次；等级及数量基准；供方数据；运输；处理及接收方；实物与负荷账；实际附加交换 |
| required_quality_disclosure | 身份缺口、源元数据冲突、计量／监测覆盖、不确定性、LCIA交叠、分配敏感性及缺失前景记录 |
| update_trigger | 浆料、制浆处理、施胶／涂布、能源、包装、水／污泥路线、产品质量或计量／背景参考改变 |

## 11. 数据源

| 来源id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| jrc-paper-bref-2015 | official_guidance | European Commission JRC, Production of Pulp, Paper and Board (2015), DOI 10.2791/370629; [original PDF](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf), §§2.2.2, 7.1.1–7.1.10; Figure 7.3 printed 664; glossary printed 850 | 通用造纸、白水纤维／细小纤维／填料回收、损纸、施胶／涂布区分、压光／切纸粉尘、监测及净产量基准。欧洲2015范围，案例数量、配方及BAT-AEL不作通用值。 |
| upm-cat-g-2026 | handbook | UPM Cat G, dated 05.10.2026, p.1 [producer PDF](https://www.upmpaper.com/siteassets/images/products--services/paper-catalog/public/upm_cat_g_en_232002.pdf) | 商业SC纸种、化学／机械浆和填料、凹版卷筒及包装选项例证。不建立精确浆子类／比例、高岭土配方、非一体化或无施胶，信息性技术目标不作默认值。 |
| epa-gas-combustion-2026 | official_guidance | US EPA AP-42 §1.4 Natural Gas Combustion, header 10/26, §§1.4.1–1.4.3, pp.1.4-1–1.4-3 [original PDF](https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf) | 仅限外部天然气锅炉污染物／物种覆盖和测试条件，不是切纸粉尘、生物质／污泥燃烧或场址许可证据，不采用数值因子／热值。 |
| eu-pef-allocation-2021 | official_guidance | Commission Recommendation C(2021)9332 final, Annex I §4.5, printed pp.63–64 [original annex](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf) | 通用细分／物理／其他关系分配层级，不提供纸种份额，不声称完整PEF合规。 |
