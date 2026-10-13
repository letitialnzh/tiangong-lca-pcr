---
pcr_id: "pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.solventless-hexenyl-silicone-coated-glassine-release-paper"
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 外购格拉辛原纸无溶剂加成固化己烯基硅酮离型纸

## 1. 范围与适用性

本 PCR 覆盖以纸卷交付的未印刷单面格拉辛离型纸：外购未涂硅格拉辛原纸，经离线精密辊涂，使用预催化己烯基官能硅酮基料原液及相容的含硅氢聚硅氧烷交联剂，随后热加成固化、分切、复卷和交付。前景公用工程配置限定为全电力，无现场燃烧、外购蒸汽、热氧化装置或现场废水处理。这是明确的建模适用条件，不是对所有商业工厂的断言。

排除溶剂稀释、乳液、缩合固化、紫外固化及仅乙烯基体系，以及挤出淋膜纸、无机颜料涂布、双面离型结构、聚合物薄膜基材、酸法羊皮纸制造、未涂层防油纸/格拉辛原纸制造、印刷标签、胶黏剂/面材复合体、模切标签和成品包装。另行加料的催化剂、离型调节剂或防雾剂须经审查扩展，并为每种真实交付产品增设原子行。Dow 支持己烯基化学及格拉辛相容性；WACKER 独立支持无溶剂辊涂和雾滴控制背景，不把其乙烯基配方扩大用于己烯基体系。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.solventless-hexenyl-silicone-coated-glassine-release-paper |
| classification_refs | CPC 3.0 32149; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 原液热加成固化己烯基硅酮涂布格拉辛纸，单面，纸卷 |
| excluded_products | 第 1 节所列排除路线与产品 |
| representative_product | 声明离型性能并验收合格的单面涂硅格拉辛纸卷 |
| production_route | 外购格拉辛原纸 → 两种投入原液槽配料 → 辊涂 → 电热固化 → 分切/复卷/包装 |
| market_state | 加工厂厂门纸卷纸材；卷芯及运输包装另行计量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 与已声明胶黏剂体系临时接触的纸质离型表面 |
| How much | 交付实测含水状态下 1 kg 验收净参考纸材 |
| How well | 声明原纸定量、涂布面硅酮涂布质量、固化/锚固及规定胶黏剂、老化、剥离角度和速度下的离型测试结果；不规定通用性能阈值 |
| How long or cycle | 一个已声明的下游离型周期；复用和报废在本厂门单元之外 |
| reference_flow_link | `release_paper` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 印刷书写纸（涂布）、包装纸（涂布） `faaae1a8-97af-4a26-bdb2-198abfc0d8e4` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 格拉辛供方/牌号及含水率；无既有硅酮或聚合物薄膜层；己烯基/催化剂/交联剂身份与交付基准；单一涂布面；实测涂布质量及交付含水率；固化/锚固/离型测试方法及胶黏剂/老化/剥离条件；全电力阶段边界；供方背景数量/地域；废物接收方 |

宽泛参考 UUID 仅支持加工纸身份。必需限定信息须在数据包中体现；该 UUID 不建立硅酮配方、实测数量、供方数据集或方法批准。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考数量为 1 kg 验收纸材，包含其中的硅酮和实测水分，排除卷芯、包装和废品。Q_ref 为同一报告期验收净纸质量，须为正值。 |
| common_denominator | 全部清单行 |  |  | 每行交换均以每 1 kg 参考流为基准。按相同库存边界及日期采集报告期总量，应用 normalize_reference；不得以纸卷毛重或投入格拉辛原纸质量为分母。 |
| coat_area | 纸/涂层平衡 | Mass | kg | 面积 A = 验收幅宽 × 验收长度，排除边料；涂布量以 g/m2 表示时，单面固化涂层质量 = A × 实测涂布量 / 1000。与原纸干质量及纸水分核对；不把槽液投料等同于留在纸中的涂层。 |
| electricity_conversion | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按 1 kWh = 3.6 MJ 将电表 kWh 转为 MJ 后归一化。保留原始属性名和用户侧电压；该名称不是燃料热值，也不证明蒸汽焓基准。 |
| wet_dry_separation | 质量/水/碳平衡 | Mass | kg | 每项湿物流干质量 = 湿质量 × (1 - 实测湿基水分比例)。配制基料及交联剂采用交付质量和实测固含量/官能团；纯化学品质量与混合物质量不得互换。硅氢/反应基团计算须遵从供方官能团定义，不设固定混配比。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 涂布加工厂接收外购未涂硅格拉辛纸卷、配制基料/交联剂及公用工程 |
| starting_condition_role | 实测入厂状态，不能代替原木或纸浆生产 |
| product_classification_scope | 仅 CPC32149 中本范围加工纸卷子集 |
| recursive_input_rule | 同类退回涂硅纸卷按库存/返工及其已有上游负荷记录；不重分类为原生格拉辛原纸，不以递归理由宣称上游生产为零 |
| upstream_dataset_requirement | 链接实际相容的格拉辛制造、交付涂层配方/交联剂、自来水、电力及交付材料。虽然制浆造纸在本前景单元之外，外购投入仍带上游负荷 |
| disclosure | 场址/日期、入厂牌号、涂层化学、阶段计量、水分、留存/废弃质量、排风/清洁边界、库存、接收方、排除活动及背景相容性 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_unit | coating_unit | 接收/加料、辊涂、热固化、抽排风、清洁、质量损失、分切/复卷和交付合并为一个前景单元，保留阶段分账。内部纸幅或可用槽液转移两端须为同一实物数量；唯一产品输出是 release_paper。 | dow-hexenyl-guide; jrc-pulp-paper-bref-2015 |
| boundary_emissions | outdoor_release | 清单记录捕集后的真实室外排放及全部对外残余物。捕集纸粉尘和硅酮雾滴在外送时为废物，不同时算基本排放。室内测量本身不建立室外质量。 | jrc-pulp-paper-bref-2015; wacker-release-systems; epa-paper-coating-2007 |
| boundary_limits | dataset_scope | 林业/锯材调查或胶合板配方不能代替格拉辛/造纸制造。本全电力单元排除一体化制纸和现场燃烧/处理；若实际存在，须取得独立工艺原始证据并完成原子清单后才可声称适用。 | jrc-pulp-paper-bref-2015; epa-paper-coating-2007 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| coating_unit | 原液涂布、电热固化及纸卷整饰 | required | 本范围两种投入、单面格拉辛路线 | 前景加工，分设接收、加料、涂布/固化、清洁及交付计量 | 1 kg `release_paper` |

一个实际前景涂布单元保留阶段分账和等量内部返回，以验收纸材作为其末端参考输出。分配环境负荷之前须记录阶段实物数量、留存材料、损失及内部循环。条件行只有经证明不存在时才可为零，未测量属于未知。任何额外真实包装、清洁剂、组分或排放物种，在声称数据集完整前均须增加具体原子行并审查身份/证据。

### 过程：原液涂布及纸卷整饰（`coating_unit`）

#### 输入

##### 产品流

###### 外购格拉辛原纸（`glassine`）

仅限未印刷、尚无硅酮层或聚合物薄膜层的格拉辛原纸；供方证明须将其识别为该宽泛纸流中的格拉辛子集。采集到货质量、含水率、定量及入厂损耗。

- 选定流：植物羊皮纸、防油纸、绘图纸、玻璃纸及其他上光透明纸或半透明纸 `89996c15-334b-4f79-ad2c-e21d667f9c80`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_material`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`dow-hexenyl-guide`

###### 预催化己烯基官能聚硅氧烷离型涂层基料（`silicone_base`）

一项外购配制基料，含其已声明的铂催化剂及抑制剂，原液使用；采集牌号、固含量、反应官能团、组成和批次质量。不得再次计入其中的催化剂。 此宽泛涂层材料身份仅定位实际原液预催化己烯基官能液态基料整项交付配方，包含其中已声明的铂络合物、抑制剂及其他供货组分。背景链接前须取得供方/SDS和牌号完整组成、水/挥发物/固含量定义、反应官能团及质量参考基准。它不是纯PDMS或混配槽液；不得再次计入其中催化剂/抑制剂，也不得把另行投加交联剂质量并入本行。

- 选定流：涂层 `59808a77-a33c-493f-8e5f-c0eb3e837943`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_material`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`dow-hexenyl-guide`

###### 己烯基硅酮离型涂层用含硅氢官能团聚硅氧烷交联剂（`hydride_crosslinker`）

一项相容的外购交联剂，不另加防雾剂或离型调节剂。取得供方硅氢官能团资料及交付质量，不规定通用混配比例。 此宽泛聚硅氧烷流体身份仅条件覆盖作为本项独立产品供货的实际未稀释含硅氢官能团聚硅氧烷交联剂。核实供方/SDS完整牌号组成、SiH官能团及分析定义、交付质量基准、与已声明己烯基基料及原生生产路线的相容性。原记录无CAS，不证明具体官能聚合物、纯度或背景匹配；普通无反应官能团PDMS、氯硅烷、单质硅和硅酮胶黏剂不得替代。随产品供货的抑制剂或其他组分保留在交付产品质量及供方组成账内，不编造数量或重复列为投料。

- 选定流：有机硅 `4af74934-ef9f-40c1-9de6-e6223ca0b4fe`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_material`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`dow-hexenyl-guide`

###### 前景单元用电（`electricity`）

低压外购电用于加料、辊涂、电热固化、抽排风、复卷及包装。保留分阶段电表、开机和待机电耗。本范围单元不使用燃料或外购蒸汽。原记录CN供给地域及<1kV电网平均消费组合不是前景国家或供方默认值；核实实际场址/国家/年份/电压/供方/背景相容性。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_energy`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`dow-hexenyl-guide`; `epa-paper-coating-2007`

###### 交付纸板卷芯（`paper_core`）

称量随可售纸卷交付的新圆柱纸板卷芯。卷芯不计入参考纸净质量；厂内循环卷芯保留于内部资产账。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_material`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`jrc-pulp-paper-bref-2015`

###### 交付聚乙烯包装膜（`pe_wrap`）

仅记录实际随纸卷交付的 PE 薄膜，与纸材分开称量。包装膜的存在不把参考产品变成成品包装制品。核实实际薄膜牌号/组成及供方背景状态，不把原记录箱包分类当作薄膜构造证明。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_material`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`jrc-pulp-paper-bref-2015`

###### 设备清洁用自来水（`cleaning_water`）

仅在实际使用自来水清洁时适用；原液涂布槽不加水。记录供水质量，或实测体积与现场密度；不把数据库次级质量/体积系数当作实测密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_cleaning`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cleaning`
- 来源：`epa-paper-coating-2007`

###### 异丙醇清洁投入（`ipa_cleaner`）

仅在供方认可且实际使用独立称量的异丙醇时适用。记录真实纯度和含水比例；不得用溶剂稀释涂层。不假定使用 70% 混合液。原记录中国生产混合不是通用世界背景：链接前须核实实际国家/年份/供方、交付纯度/组成、供方CAS及交付牌号质量或纯异丙醇质量参考的一致性；仅对已证实基准换算使用实测组分，并另存供货整质量与水分。多组分清洁剂须有其自身相容供货产品身份，不得以异丙醇化学品替代整液质量。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_cleaning`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cleaning`
- 来源：`epa-paper-coating-2007`

###### 聚酯无纺清洁擦拭布（`polyester_wipe`）

仅适用于实际聚酯无纺擦拭布，不代替涤棉混纺布或涂层复合布。分别记录购入干布质量和所加溶剂。须有实际供方非织造/聚酯构造及相容交付背景；相矛盾的绗缝制品分类不证明实际为绗缝布或复合擦拭布。

- 选定流：纺织品，无纺聚酯 `5ac0c411-47ce-40ed-8ce1-9aaf9c351ca4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_cleaning`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cleaning`
- 来源：`epa-paper-coating-2007`

#### 输出

##### 产品流

###### 验收硅酮涂层离型纸（`release_paper`）

唯一参考产品输出为验收合格的单面涂硅格拉辛纸卷纸材，排除卷芯和包装膜，采用交付实测含水状态。涂后纸幅转入复卷是阶段记录，不另列产品交换。 此宽泛涂布纸身份仅定位完整实际单面己烯基硅酮格拉辛纸。须声明基材及留存功能涂层；不得从原记录通用示例推定印刷、水性清漆、矿物颜料、另加增强纤维、供货配方、性能或背景匹配。

- 选定流：印刷书写纸（涂布）、包装纸（涂布） `faaae1a8-97af-4a26-bdb2-198abfc0d8e4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_output`
- 来源：`dow-hexenyl-guide`

##### 废物流

###### 离开单元的未涂硅格拉辛边料（`uncoated_trim`）

一项分离收集的清洁未涂硅废纸交换，记录含水率及接收方条件。只计对外边料，厂内回用保留为等量内部转移。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_residue`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`jrc-pulp-paper-bref-2015`

###### 硅酮涂层格拉辛边料废纸（`coated_trim`）

一项涂硅废纸交换，记录硅酮载量、纸含水率、固化状态及接收方。BREF 损纸回用描述不证明纸厂可接受此种涂层废纸。 保留此项独立实际涂硅格拉辛边料/废纸幅固体，记录纸/涂层组成、固化状态、水分及实际接收条件。宽泛工业固废身份不确定可回收性、处理、危险属性、接收背景或避免信用；其他独立产生的物流不得并入本行。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_residue`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`jrc-pulp-paper-bref-2015`; `dow-hexenyl-guide`

###### 未固化己烯基硅酮涂布槽残液（`spent_bath`）

分离记录槽内放空残液或失效混合物，以交付接收方的质量计量并记录固含量及含催化剂组成。返回同一生产批次的可用槽液不计废物。 保留此项独立实际未固化槽放空/失效配方液体，记录完整基料/交联剂/催化剂/抑制剂组成及交付时实测水/挥发物/固含量。核实实际液态收集状态及接收条件；已固化固体残余物须另行审查固体身份及行。宽泛工业废液身份不是纯硅酮化学品、油漆配方、危险分类、处理或信用。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_residue`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`dow-hexenyl-guide`

###### 沾染硅酮的聚酯清洁擦拭废布（`spent_wipe`）

一项污染废布交换，记录布材、涂层及残留异丙醇组分；不得将布内残留溶剂再计为独立对外废液。 保留此项独立污染聚酯废布固体，包含实测留存硅酮、异丙醇及水，核实实际收集状态及接收条件。宽泛工业固废身份不是清洁聚合物废料，也不证明危险类别或处理。留存溶剂/水属于整项湿废布质量及组分账，不得再列为对外废液交付。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_residue`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-paper-coating-2007`

###### 含格拉辛细纤维与硅酮残留的清洁废水（`aqueous_effluent`）

仅记录送场外处理的实际清洁废水；称量或采集体积与密度，记录固体及化学组成。此为废物转移，不是直接淡水排放。 保留此项独立实际整项湿质量场外清洁废水：水及真实纸细纤维、涂层和实测存在的异丙醇，核实接收/处理相容性及取样状态。采用称量整物流质量或实测体积与同状态实测密度，不假定1000 kg/m3。H2O/异丙醇/干固体属于平衡组分分账，不得为同一交付另增对外废物或淡水排放行。宽泛工业废液身份不建立实际危险属性或处理/背景匹配。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_residue`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-paper-coating-2007`

###### 含硅酮残留的废异丙醇清洁液（`spent_ipa`）

仅记录单独交付接收方的真实废液；记录异丙醇、水和涂层组分、接收方及回收或处置路线。排除已在废布或清洁废水中计入的溶剂。 保留此项独立实际交付接收方的废异丙醇液体，记录实测水、涂层及其他供货组分、取样状态与相容接收/处理。称量整混合物，体积换算须有同状态实测密度。纯异丙醇与H2O质量仅作组分分账，排除已随废布/清洁废水外送的溶剂；不从此宽泛工业废液身份推定危险类别、回收率、处理/背景或信用。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_residue`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`epa-paper-coating-2007`

###### 含硅酮涂层的收集格拉辛裁切粉尘（`collected_dust`）

一项过滤器或收尘器收集的固体废物，记录含水率、纸/涂层组分、捕集阶段及接收方；不得同时把捕集质量算作室外颗粒物排放。 保留此项独立捕集格拉辛/涂层裁切粉尘固体，记录阶段、组成、水分及接收条件；返回厂内的涂层雾滴保留等量内部记录，另行外送的雾滴残余物须独立审查增设原子行。宽泛工业固废身份不推定接收处理、危险类别或背景匹配。捕集质量不得同时算室外PM排放。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_residue`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`
- 来源：`jrc-pulp-paper-bref-2015`; `wacker-release-systems`

##### 基本流

###### 室外细颗粒物排放（`pm_fine`）

实测捕集后排入未特指室外空气的互不重叠空气动力学粒径分量。纸粉尘和硅酮雾滴采用同一实物粒径账，不为同一气溶胶再叠加总雾滴交换。不设置默认正排放因子。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_air`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-pulp-paper-bref-2015`; `wacker-release-systems`

###### 室外大于 2.5 至 10 微米颗粒物排放（`pm_middle`）

实测捕集后排入未特指室外空气的互不重叠空气动力学粒径分量。纸粉尘和硅酮雾滴采用同一实物粒径账，不为同一气溶胶再叠加总雾滴交换。不设置默认正排放因子。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_air`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-pulp-paper-bref-2015`; `wacker-release-systems`

###### 室外大于 10 微米颗粒物排放（`pm_coarse`）

实测捕集后排入未特指室外空气的互不重叠空气动力学粒径分量。纸粉尘和硅酮雾滴采用同一实物粒径账，不为同一气溶胶再叠加总雾滴交换。不设置默认正排放因子。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_air`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`jrc-pulp-paper-bref-2015`; `wacker-release-systems`

###### 排入室外空气的异丙醇（`ipa_air`）

仅在实际异丙醇清洁时适用；实测排放或完成包含库存、回收液、布内残留、废水及产品残留的物种溶剂平衡。工作场所浓度本身不是边界质量。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_cleaning`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cleaning`
- 来源：`epa-paper-coating-2007`

###### 离开单元的水蒸气（`water_vapour`）

用全部实际投入材料/清洁、验收纸材、随货卷芯/包装膜、独立残余物/退回物及期初/期末库存中的实测水确定蒸发水，结合排风核验。通风带入的环境湿度不算过程生成水。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用同一报告期验收净纸质量对实测边界数量归一化，使用 `cp_water`.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`dow-hexenyl-guide`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_separate | coating_unit | 优先按产品批次和阶段计量细分，直接归属配方特定投入、废品和清洁。共用电耗按实测设备时间/负荷归属，分摊并披露开机和待机耗电。不设置默认分配比例。  须证明实测时间/负荷依据能够解释共用用电；否则在分配前取得更好的细分证据。 | eu-pef-allocation-2021; dow-hexenyl-guide; jrc-pulp-paper-bref-2015 |
| allocation_physical | material_balance | 未分配实物质量、水分及碳账与分配后环境负荷账分开。不得将联产品实物输出或内部转移乘以负荷分配份额。 | jrc-pulp-paper-bref-2015 |
| allocation_residue | residue_receiver | 清洁边料出售不自动成立替代信用或联产品地位。披露经济/实物状态和接收方，使用一项已声明的回收/分配约定，避免同时获得避免原纸与下游回收信用。真实联产品带来新分配问题时须独立审查。 | eu-pef-allocation-2021; jrc-pulp-paper-bref-2015 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | coating_unit | 参考纸材 | measured_record | 纸卷 ID；毛重；卷芯/包装皮重；验收净质量 Q_ref；废品质量；幅宽；长度；湿基水分；原纸牌号；涂布量；固化/锚固/离型结果；胶黏剂/老化/剥离条件 | 用经校准称重及含水取样关联交付纸卷；记录涂层/固化测试方法、校准和取样老化时间。涂布量采用针对基材/配方校准的方法，不复制供方试验数值。 Q_ref 汇总验收纸卷净纸质量，排除包装和废品。按相同报告期本行总量除以 Q_ref，表达为每 1 kg 参考流；保留原始总量及库存。 | kg; m; g/m2 | 逐验收纸卷及每涂布批次代表性样品 | 已声明代表性报告期，包含切换、开机、损失及期末库存 | 一个涂布加工厂及已声明生产线/牌号批次 | 每 1 kg 参考流 | 保留校准、原始记录、带日期样品、不确定性及平衡核对 |
| cp_material | coating_unit | 材料投入 | measured_record | 供方/牌号；收货及消耗质量；期初/期末库存；退回质量；纸水分/定量；配方 SDS/固含量；催化剂含量；交联剂/反应基团定义；卷芯/包装膜质量、期初/期末库存、随货皮重及对外退回/损失；实际组分碳来源 | 独立称量各交付材料，用收货加期初库存减期末库存及对外退货与加料/交付记录核对。不采用配方或化学属性默认值。 归一化前保留各供方/牌号独立总量及纸/涂层平衡。按相同报告期本行总量除以 Q_ref，表达为每 1 kg 参考流；保留原始总量及库存。 | kg | 逐批次及报告期库存结算 | 已声明代表性报告期，包含切换、开机、损失及期末库存 | 一个涂布加工厂及已声明生产线/牌号批次 | 每 1 kg 参考流 | 保留校准、原始记录、带日期样品、不确定性及平衡核对 |
| cp_energy | coating_unit | 电力 | measured_record | 电表 ID；阶段；kWh 读数；运行/待机/开机时间；实际电压；共用负荷；背景地域/年份 | 使用经校准阶段电表，含固化炉及抽排风；与单元总进线核对，保留实测共用服务分摊依据。 汇总记录 kWh，乘 3.6 转为 MJ，保留阶段分账。按相同报告期本行总量除以 Q_ref，表达为每 1 kg 参考流；保留原始总量及库存。 | kWh; MJ | 连续读数并按批次/班次结算 | 已声明代表性报告期，包含切换、开机、损失及期末库存 | 一个涂布加工厂及已声明生产线/牌号批次 | 每 1 kg 参考流 | 保留校准、原始记录、带日期样品、不确定性及平衡核对 |
| cp_cleaning | coating_unit | 清洁 | measured_record | 清洁事件；清洁剂认可/SDS；异丙醇纯度；水与擦拭布质量；溶剂库存；各废物流中残留/回收溶剂；产品残溶剂；排风质量 | 独立称量或计量真实清洁剂；分析异丙醇组分，核对废液、废布、废水、库存和室外排放。保留密闭容器交付记录。 按化学品及去向分别汇总；未闭合溶剂平衡保留为未知。按相同报告期本行总量除以 Q_ref，表达为每 1 kg 参考流；保留原始总量及库存。 | kg; m3 with measured density | 逐清洁事件及库存结算 | 已声明代表性报告期，包含切换、开机、损失及期末库存 | 一个涂布加工厂及已声明生产线/牌号批次 | 每 1 kg 参考流 | 保留校准、原始记录、带日期样品、不确定性及平衡核对 |
| cp_residue | coating_unit | 废物输出 | measured_record | row_id；阶段；废物质量；水分；涂层/异丙醇/布材组分；固化状态；内部返回；接收方；接收条件；去向处理 | 分离未涂硅边料、涂硅边料、槽液残余、废布、废水、废异丙醇和捕集粉尘；仅称量对外交付，核对接收记录及真实组成。 按原子废物流及去向汇总；用库存及内部返回核对产生量。按相同报告期本行总量除以 Q_ref，表达为每 1 kg 参考流；保留原始总量及库存。 | kg | 逐收集/交付及报告期结算 | 已声明代表性报告期，包含切换、开机、损失及期末库存 | 一个涂布加工厂及已声明生产线/牌号批次 | 每 1 kg 参考流 | 保留校准、原始记录、带日期样品、不确定性及平衡核对 |
| cp_air | coating_unit | 颗粒物输出 | measured_record | 源/阶段；捕集装置；测试方法；取样体积；空气动力学粒径区间；空白校正；mg/m3；流量/时间；运行状态；排放质量；纸/硅酮组分 | 采用适合路线的粒径分辨排气/逸散测量，保持真实体积基准和时间区间；分开记录捕集与排出物。只有总粉尘或累积 PM10 时不得编造分量。 对每个不重叠粒径区间积分控制设施后的边界排放。按相同报告期本行总量除以 Q_ref，表达为每 1 kg 参考流；保留原始总量及库存。 | mg/m3; m3; kg | 代表性测试覆盖正常运行、开机和裁切，保留实际积分区间 | 已声明代表性报告期，包含切换、开机、损失及期末库存 | 一个涂布加工厂及已声明生产线/牌号批次 | 每 1 kg 参考流 | 保留校准、原始记录、带日期样品、不确定性及平衡核对 |
| cp_water | coating_unit | 水平衡 | measured_record | 纸湿质量和含水率；供货基料/交联剂及清洁剂中水比例；布材/卷芯/包装膜水分及随货皮重；清洁用水；独立液/固废及对外退回物中水；库存；排风湿度/流量；环境进风湿度 | 使用经校准质量/体积计量及水分分析核对过程水；扣除环境进风水蒸气后核验排风水。不假定密度或固化反应产水。 归一化前核对净蒸发水及留存/转移水。按相同报告期本行总量除以 Q_ref，表达为每 1 kg 参考流；保留原始总量及库存。 | kg; m3 with measured density | 相同纸卷/批次记录及报告期库存 | 已声明代表性报告期，包含切换、开机、损失及期末库存 | 一个涂布加工厂及已声明生产线/牌号批次 | 每 1 kg 参考流 | 保留校准、原始记录、带日期样品、不确定性及平衡核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_reference | 全部清单行 | q_ref = q_period / Q_ref；q_period 为本行实测或计算的报告期交换量；Q_ref 为验收净纸质量，单位 kg；q_ref 为每 1 kg 参考流的数量。 | q_period; Q_ref; cp_output | q_ref |  |
| area_coating | 留存涂层 | m_coat = A × coat_g_m2 / 1000；A = 验收幅宽 × 验收长度。实测单面涂布量须与牌号/校准对应，不使用供方示例值。 | cp_output; coat_g_m2; A | m_coat kg | dow-hexenyl-guide |
| packaging_ledger | paper_core; pe_wrap | 每种材料分别核对：对外收货 + 期初库存 = 实际随卷交付质量 + 独立记录的对外废物/损失 + 期末库存 + 对外退回未使用材料。循环卷芯在资产账内抵消。实测离厂量保留于cp_output/cp_material皮重及交付记录，置于Q_ref之外；任何实际外送包装废物须独立原子行及接收方，不强行并入纸/涂层残余物。负荷份额不得改变实物质量。 | cp_material; cp_output; cp_residue | separate core/wrap physical ledgers |  |
| dry_balance | 实物纸及涂层 | 外部干纸/涂层收货 + 期初干库存 = 验收干纸 + 对外干纸/涂层组分 + 排出的干纸/涂层颗粒及其他具体实测涂层物种 + 期末干库存 + 对外退回未使用纸/涂层。本账仅含混合残余物中的纸/涂层组分，不含整湿废物、异丙醇清洁剂、布材、卷芯或包装膜；其组分/材料账分别保留，不重复列为废物交付。内部转移抵消；消耗量另行核对，不再叠加第二次库存调整。残差保留为明确不确定性，不强行归零。 | cp_material; cp_output; cp_residue; cp_air | unallocated dry physical ledger |  |
| water_balance | water_vapour | 全部实际投入材料/清洁中实测水 + 期初水库存 = 验收纸、随货包装、独立残余物及对外退回未使用材料中水 + 期末水库存 + 过程净水蒸气。实际存在的配方、清洁剂及布材/包装水分均须纳入，不以商品固含量说明推定零水；整湿残余物对外交付只列一次，H2O仅作组分分账。环境通风水另计。不假定加成固化产生化学计量水。 | cp_water; cp_output; cp_residue | net process water kg |  |
| ipa_balance | ipa_air | 外部异丙醇收货 + 期初异丙醇库存 = 分别对外废液/废布/废水中的异丙醇 + 期末异丙醇库存 + 对外退回未使用异丙醇 + 产品残留异丙醇 + 室外排放异丙醇。厂内回收溶剂抵消，外送回收废液只归属一项液体交付；废液总质量不当纯异丙醇。 | cp_cleaning; cp_residue | IPA species balance kg | epa-paper-coating-2007 |
| particulate_integration | 室外颗粒物行 | c_i 为 mg/m3 且匹配 V_i 为 m3 时，m_i = sum(c_i × V_i) / 1000000。只有测量源/时间/控制基准一致时，PM10 - PM2.5 才得中间分量；仅在相容总粉尘实测值下，总粉尘 - PM10 才得 >10 分量。不得把累积 PM10 再与其各分量相加。 | cp_air | each disjoint bin kg |  |
| carbon_ledger | 实物碳 | 用实测或供方支持的组分碳比例及生物/化石来源、库存和去向，分开记录纸、涂层、异丙醇、布材、卷芯和包装膜中碳；未知比例/来源保留未知。纳入实际随货卷芯/包装膜及对外残余物/退回物中的碳组分，但排除其参考净纸质量，不从通用名称指定碳来源。留存碳不等于即时负 CO2 排放。实际存在实测生物 CO2 时必须记录，不受温室气体统计口径删除；不推定本全电力路线发生碳转化或燃烧。 | cp_material; cp_output; cp_residue; cp_air; cp_cleaning | unallocated source-separated carbon ledger |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| identity_compatibility | 全部链接交换 | 分别核查实物身份与数量/背景相容性。宽泛产品行须有真实子集证据；不相容物种/CAS/路线不得充当代理。未决行阻止声称数据集完整链接，不取消采集协议。 | SDS、供方声明、牌号、接收方和背景定义 |
| measurement_complete | 全部行及平衡 | 保留原始数据及不确定性；缺测、未检出和已证明不存在的活动须区分。不编造配方、涂布量、效率、粒径分量或工艺排放因子。 | 校准、检出限、匹配分母及平衡核对 |
| performance_tests | 参考纸材 | 报告针对基材/配方的涂布量、固化、锚固和离型试验，以及老化/胶黏剂/剥离条件。供方演示配方、试验限值及设定值只属于案例证据，不作为通用默认值。 | dow-hexenyl-guide |
| source_scope | 方法证据 | BREF §7.1.10 支持裁切粉尘和边料采集，不支持硅酮配方或涂层边料可回收性。EPA2007 仅支持清洁排放源识别，不移植历史行业因子或法律阈值。 | jrc-pulp-paper-bref-2015; epa-paper-coating-2007 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_paper | 要求全部参考限定信息、正值 Q_ref、一个产品输出 release_paper 及双语相同 1 kg 分母；拒绝纸卷毛重、只有面积的基准或未限定纸材替代。 | dow-hexenyl-guide |
| validate_route | coating_unit | 要求未涂硅格拉辛原纸、单面原液己烯基加成固化、相容两种投入供方身份和全电力公用工程证明。额外真实组分、公用工程、排放或处理须完成原子扩展；排除改变涂层路线。 | dow-hexenyl-guide; wacker-release-systems |
| validate_ledgers | physical_accounting | 在分配负荷前核对质量、水及分来源碳账；内部转移两端匹配。粒径区间须不重叠；收集粉尘、气溶胶组成和排出分量不得重复计量。未闭合平衡及缺乏支持的粒径分量为未确定，不能判通过。 | jrc-pulp-paper-bref-2015; wacker-release-systems |
| validate_cleaning | cleaning | 条件清洁行须有真实存在/不存在证据及物种平衡。废物交付不是直接水排放；实际接收处理另行评价。任何真实实测生物 CO2 保留于 LCI，其他检出物种须增设具体行。 | epa-paper-coating-2007 |
| validate_linkage | data_package | 核对真实属性/单位、组成、来源类别及供给/接收基准。在声称背景完整链接前解决空 UUID 行及已披露源瑕疵；身份检索或机械 PCR 检查本身不建立科学批准。 | dow-hexenyl-guide |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 作为一项合格硅酮涂层格拉辛纸投入的实测加工厂厂门交换 |
| allowed_use | 仅在身份/数量链接全部完成后用于相匹配的单面原液己烯基加成固化格拉辛纸及已披露电力/清洁配置 |
| excluded_use | 通用 CPC32149 平均、成品标签/包装、其他固化化学、双面或聚合物薄膜基材、燃料/蒸汽工厂、未限定上游纸材或未决行情况下声称完整链接 |
| required_metadata | 场址/报告期、牌号/配方身份、功能限定信息、Q_ref 及水分、上游链接、计量、库存、来源范围、接收方及回收/分配约定 |
| required_quality_disclosure | 不确定性、缺测、已证明缺省活动、源分类瑕疵、未闭合平衡、背景相容性、未决身份及独立审查状态 |
| update_trigger | 基材、配方/固化/面数、公用工程、清洁、排放、接收方或源数据变化时重新计算平衡并核查适用性 |

## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| dow-hexenyl-guide | handbook | [Dow SYL-OFF Solventless Platinum-Catalyzed Hexenyl Silicone Release Coatings](https://www.dow.com/documents/30/30-1162-01-syl-off-solventless-hexenyl-formulation-guide.pdf?iframe=true), 第 2–5 页，总体信息/产品系列/使用信息/应用信息 | 化学、交付预催化基料、格拉辛相容性、涂布/固化/性能变量；不采用定量配方或试验设定值 |
| wacker-release-systems | handbook | [WACKER DEHESIVE release systems](https://www.wacker.com/h/medias/6188-EN.pdf), PDF 第 11 页/印刷页 20–21 | 独立无溶剂辊涂及雾滴背景；配方/催化剂细节仍依赖真实供方 |
| jrc-pulp-paper-bref-2015 | official_guidance | [JRC Production of Pulp, Paper and Board BREF (2015)](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf), §7.1.10, 印刷页 670/PDF 第 708 页 | 复卷/裁切/交付、粉尘及边料采集；不提供硅酮化学、排放因子或涂层废物回收保证 |
| epa-paper-coating-2007 | official_guidance | [US EPA 453/R-07-003, Control Techniques Guidelines for Paper, Film, and Foil Coatings (2007)](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100957P.TXT), IV.A–B and V.B | 热固化及清洁排放源识别、溶剂/废布分离交付；定性工艺支持，不是现行法律合规测试，也不提供默认溶剂/因子 |
| eu-pef-allocation-2021 | official_guidance | [European Commission Environmental Footprint Annexes (2021)](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf), Annex I §4.5, pp.63–64 | 共用负荷优先细分及证明底层物理关系；无纸材专用份额，不声称完整 PEF 符合性 |
