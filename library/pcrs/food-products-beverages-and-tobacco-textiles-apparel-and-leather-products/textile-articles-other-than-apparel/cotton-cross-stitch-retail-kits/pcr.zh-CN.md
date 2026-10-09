---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.cotton-cross-stitch-retail-kits
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 已加工组件配套的棉质十字绣零售套件


## 1. 范围与适用性

本方法覆盖购入已染整纯棉 Aida 绣布和已染整染色多股棉绣线后，进行干法准备和零售配套，供消费者刺绣装饰性纺织画的过程。代表配置含钢制手用绣针、纸质图纸、冲孔纸板整理卡及机械合拢平折纸板零售盒，不含绣框。零售盒和整理卡为声明配置，不是所有市场套件的必备要求。`caterpillar-kit-components` 证实市场存在不附绣框的裁切布与绣线套件；`dmc-kit-components` 证实棉质组件，并提供含绣框 SKU 的反例。两者都不确立工厂产率或通用完整配方。实际长度、尺寸、各色用量、损耗和能耗均须工厂采集。

本方法仅覆盖 `unsd-cpc3-2025` 中零售织物与纱线套装的窄子集，不覆盖全部其他家饰品。排除已刺绣成品、成品地毯或挂毯、靠垫套、窗帘、餐桌布品、羊毛或金属或合成绣线套件、含绣框套件、预印图案绣布套件及需要场内湿法加工的套件。棉花种植、轧棉、纤维和纱线生产、织物成形、漂白、染色、丝光及上游废水处理属于链接的组件上游数据集。消费者刺绣、洗涤、装框、分销和寿命终结均在工厂前景之外。参考质量不构成寿命、健康、法规批准或完整摇篮到厂门声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.cotton-cross-stitch-retail-kits` |
| classification_refs | CPC 3.0 27140; narrower |
| covered_products | 未刺绣棉质十字绣布与绣线零售套件；仅干法组件准备和配套 |
| excluded_products | 成品家饰及刺绣品；非棉、含绣框、预印绣布和场内湿法加工路线 |
| representative_product | 含棉质 Aida 布、分色棉绣线、钢针、纸图纸及冲孔整理卡且不含绣框的完整装饰十字绣套件 |
| production_route | 已加工组件接收 → 棉布裁切 → 绣线测长、裁切及分色 → 配套核对和检验 → 零售包装 |
| market_state | 完整未刺绣套件，已零售包装；未进行消费者刺绣 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应与一个声明的装饰十字绣图案匹配的组件 |
| How much | 同一声明 SKU 和配置的合格完整套件内容物净质量 1 kg |
| How well | 棉布网格及尺寸正确，色号与长度表匹配，针规格正确，图纸可读且声明附件齐全；验收依据工厂规格，不代表认证 |
| How long or cycle | 一个制造配套周期；不规定刺绣用时或装饰使用寿命 |
| reference_flow_link | `reference_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完整未刺绣棉质十字绣零售套件 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | SKU 和图案版本；布组成、Aida 网格、裁切尺寸及染整；绣线色号和批次、结构、整理及用量；针合金、镀层及尺寸；图纸纸基和版本；整理卡配置；无绣框；内容物调湿状态；零售包装；地域、电压及报告期 |

前景数据包须声明每项限定信息。内容物净质量包括交付的布、绣线、针、图纸及实际配置的整理卡，排除外部零售及运输包装。质量为生产参考，不证明不同图案的刺绣功能等价。产品 UUID 尚未解决；参考名称与最终输出名称一致。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_output，以经校准的秤在声明调湿状态下采集合格完整套件内容物净质量。Q 为一个 SKU 的合格内容物总净质量，单位 kg；排除外包装及不完整套件。每行清单均采用相同 1 kg 参考流分母。 |
| `count_length_mass` | received_aida; cotton_floss; thread_card; tapestry_needle; printed_chart; retail_carton | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实际件数、布面积及线长原始记录；以供应商批次特定的实测单件、单位面积或单位长度质量换算交换 kg。不得将公开面积或物品数量属性改写为质量；不提供名义密度或单件重量。 |
| `electricity_units` | cutting_electricity; sorting_electricity; packing_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开参考属性净热值及能量单位组；表计 kWh × 3.6 得到 MJ。这是电能换算，不是燃烧燃料系数。 |

上述电力参考属性链接能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`，参考单位为 MJ，kWh 换算系数为 3.6。质量交换链接质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位为 kg。保留这些属性与单位组关系；电力流不是质量交换。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收已染整棉质 Aida 布和染色棉绣线、成品针、已印图纸、已冲孔卡及购入平折盒；披露供应商加工及真实水分和调湿状态 |
| starting_condition_role | 配套场址厂门技术圈产品输入 |
| product_classification_scope | 仅 CPC 27140 中棉质十字绣零售套装子集 |
| recursive_input_rule | 已完整套件进入重新包装时仍是有独立数据集的同类购入输入；本组件到套件路线不得重复声称其组件准备 |
| upstream_dataset_requirement | 链接路线、组成、地点和时间匹配的布（含纤维生产及湿法加工）、绣线、针、印刷纸、卡、盒及电力数据集。场外废物处理明确链接，不计为工厂操作 |
| disclosure | 声明厂门到厂门干法配套范围、进出运输处理、手工或动力工序、调湿、净内容物、未覆盖路线及上游覆盖缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_dry_route` | 全部前景操作 | 纳入场内接收检查、裁切、测长、分色、配套、检验、可归属公用工程、零售包装及所产生废物。染色、湿洗、化学整理、预印绣布制造或消费者刺绣须采用另一明确路线；场内实际进行时不得隐藏为上游。 | `caterpillar-kit-components`; `dmc-kit-components` |
| `boundary_upstream` | 组件采购 | 上游组件生产单独承接。供应商规格不是完整摇篮到厂门模型的证明；披露所有缺失上游链接。 | `unsd-cpc3-2025` |
| `boundary_auxiliary` | 场内操作及废物 | 检查设备、清洁及通风记录。干法配套不默认使用工艺水、燃料、热或产生废水。实际发生时每个具体原子交换须另加采集数量及身份审查。捕集粉尘、废针、废图纸或整理卡、来料包装废物及其他真实损失均须单独设行；缺失实质流则不得宣称完整。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabric_preparation` | 接收及棉布裁切 | required | 每个适用套件；购入已裁切长度时披露其已在上游完成 | 前景干法套件制造 | 每 1 kg 参考流 |
| `thread_preparation` | 绣线测长、裁切及分色 | required | 每个适用套件；购入已裁切长度时披露其已在上游完成 | 前景干法套件制造 | 每 1 kg 参考流 |
| `kitting_packing` | 组件配套、检验及零售包装 | required | 每个适用套件；购入已裁切长度时披露其已在上游完成 | 前景干法套件制造 | 每 1 kg 参考流 |

用内部 SKU 和批次台账追踪裁切棉布及准备后分色绣线进入包装。它们是同场址内部转移，不是额外购入输入或重复产品输出。以一个汇总厂门到厂门套件平衡闭合三个阶段。制造商组件清单支持路线概念，但不证明具体工厂如何裁切或分线；记录真实工厂设备及外包情况。

### 过程：接收及棉布裁切 (`fabric_preparation`)

#### 输入

##### 产品流

###### 已染整的纯棉 Aida 十字绣布 (`received_aida`)

接收可直接裁切的已染整纯棉机织绣布。记录织物网格、纤维组成、尺寸、供应商染整状态和调湿湿度。称量领用量并扣除可用退料；不得代入坯布或棉纤维。

- 选定流： 已染整的纯棉 Aida 十字绣布
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_fabric 采集可归属交换数量并除以合格内容物净质量 Q（kg）；不设默认数量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_fabric`
- 来源： `dmc-kit-components`

###### 交流电 (`cutting_electricity`)

仅适用于中国真实使用的低于 1 kV 用户侧电网平均供电，计入动力裁切及可归属的准备照明。手工裁切没有裁刀电耗；共享照明在本计量总量中单独披露。其他国家、电压或专属供电须另核验身份。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用 cp_cutting_energy 采集可归属交换数量并除以合格内容物净质量 Q（kg）；不设默认数量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_cutting_energy`

#### 输出

##### 废物流

###### 未刺绣棉质 Aida 布裁切边角料 (`cotton_fabric_offcuts`)

称量进入废物管理的独立收集棉布边角料及未刺绣报废绣布。记录水分、染整、接收者和去向。可用退料属于内部退回而非废物；不设固定损耗率。

- 选定流： 未刺绣棉质 Aida 布裁切边角料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_fabric_waste 采集可归属交换数量并除以合格内容物净质量 Q（kg）；不设默认数量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_fabric_waste`

##### 基本流

###### 颗粒物，粒径未特指 (`airborne_particulates`)

条件行：仅记录绣布准备过程中实际排入环境空气、粒径分级和空气子介质未特指的实测颗粒物质量。工人暴露浓度和滤器捕集粉尘不是本交换。记录排放位置及监测；已知粒径或子介质时使用更具体且经核验的身份。不规定必然排放，也不套用水泥案例系数。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_air 采集可归属交换数量并除以合格内容物净质量 Q（kg）；不设默认数量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_air`


### 过程：绣线测长、裁切及分色 (`thread_preparation`)

#### 输入

##### 产品流

###### 已染整的染色多股棉绣线 (`cotton_floss`)

接收已纺纱、染色并完成整理的刺绣级棉绣线。按供应商色号和批次称量，记录股线结构及整理。每个实际供应商色号单独实例化本原子绣线交换，不作为混合材料选择器。车间以米记录时实测单位长度质量。

- 选定流： 已染整的染色多股棉绣线
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_thread 采集可归属交换数量并除以合格内容物净质量 Q（kg）；不设默认数量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_thread`
- 来源： `caterpillar-kit-components`; `dmc-kit-components`

###### 已冲孔纸板绣线整理卡 (`thread_card`)

接收已加工完成的冲孔整理卡；卡片加工属于上游。称量领用和退回卡片，披露纸板组成、印刷与涂层。该卡保留为套件附件，计入内容物净质量，而不是外部零售盒。

- 选定流： 已冲孔纸板绣线整理卡
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_thread 采集可归属交换数量并除以合格内容物净质量 Q（kg）；不设默认数量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_thread`
- 来源： `caterpillar-kit-components`

###### 交流电 (`sorting_electricity`)

仅适用于中国真实使用的低于 1 kV 用户侧电网平均供电。计量绣线测长裁切设备及可归属的分线照明；披露手工作业和共享表计归属。不得重复计入绣布准备或包装电表。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用 cp_sorting_energy 采集可归属交换数量并除以合格内容物净质量 Q（kg）；不设默认数量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_sorting_energy`

#### 输出

##### 废物流

###### 染色棉绣线裁切废线 (`cotton_thread_trimmings`)

称量独立收集并进入废物管理的不可用棉绣线头及废线。可用退线单独处理；记录接收者、整理状态及处理去向，不假设回收抵扣。

- 选定流： 染色棉绣线裁切废线
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_thread_waste 采集可归属交换数量并除以合格内容物净质量 Q（kg）；不设默认数量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_thread_waste`


### 过程：组件配套、检验及零售包装 (`kitting_packing`)

#### 输入

##### 产品流

###### 已加工钢制手用十字绣针 (`tapestry_needle`)

接收符合 SKU 规格的已加工钢制绣针；披露合金、镀层及尺寸。计数并称量可追溯样本，取得领用数量对应的真实净针质量。不规定默认针重或通用镀层。

- 选定流： 已加工钢制手用十字绣针
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_kitting 采集可归属交换数量并除以合格内容物净质量 Q（kg）；不设默认数量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_kitting`
- 来源： `caterpillar-kit-components`

###### 已印刷纸质十字绣说明图纸 (`printed_chart`)

接收载有图案和说明的已印刷纸质图纸。印刷及造纸属于上游。称量领用纸张并记录尺寸、纸基、印刷和版本；若说明另置于第二张纸，则单独实例化纸张行。

- 选定流： 已印刷纸质十字绣说明图纸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_kitting 采集可归属交换数量并除以合格内容物净质量 Q（kg）；不设默认数量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_kitting`
- 来源： `caterpillar-kit-components`; `dmc-kit-components`

###### 纸盒 (`retail_carton`)

条件行：接收与已核验裁切、折叠、层压厂门身份一致的平折纸板盒。记录实际结构、涂层和质量；机械撑开并合拢。塑料袋、胶黏剂、标签和运输箱不属于本选定盒配置，实际使用时须另设原子行。

- 选定流： 纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_packaging 采集可归属交换数量并除以合格内容物净质量 Q（kg）；不设默认数量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_packaging`

###### 交流电 (`packing_electricity`)

仅适用于中国真实使用的低于 1 kV 用户侧电网平均供电。计量套件检查、包装设备及可归属照明；手工配套不假定电机消耗。三行电力须为互不重叠的实测分配。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用 cp_packing_energy 采集可归属交换数量并除以合格内容物净质量 Q（kg）；不设默认数量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_packing_energy`

#### 输出

##### 产品流

###### 完整未刺绣棉质十字绣零售套件 (`reference_product_output`)

仅将裁切棉质 Aida 布、分色棉绣线、钢针、纸质图纸以及声明配置的整理卡相互匹配的套件计为合格品。内容物净质量包括这些交付组件，排除外部零售及运输包装。记录完整套件数量和实测内容物净质量；不完整套件不得计为合格输出。

- 选定流： 完整未刺绣棉质十字绣零售套件
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： `fixed_value`
- 适用范围： `product_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_output`
- 来源： `caterpillar-kit-components`; `dmc-kit-components`

##### 废物流

###### 包装废弃物，纸板 (`carton_waste`)

条件行：称量包装过程产生并交由废物管理的破损纸板盒，采用处理前质量。本身份不支持采用数据库示例百分比。记录接收者和实际去向；来料运输箱及可复用纸盒另行核算。

- 选定流： 包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用 cp_packaging_waste 采集可归属交换数量并除以合格内容物净质量 Q（kg）；不设默认数量。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_packaging_waste`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共享裁切、分线及包装 | 先区分 SKU 批次、表计操作和组件领用记录。套件只有一个组合产品输出；不在共同交付的组件之间分配套件负担。 | `ghg-product-2011` |
| `allocation_shared_energy` | 不可避免的共享公用工程 | 先采用具有因果关系且有记录的物理依据，例如实测运行时间和观察功率，再考虑有依据的替代方式。不得假设各 SKU 质量或能耗强度相同。披露分配因子、分母、不确定性并与电表总量守恒。 | `ghg-product-2011` |
| `allocation_scrap` | 边角料及报废组件 | 内部退回可用库存不是共产品。按真实接收者及去向分类废棉和包装。若作为次级产品销售，披露其状态并一致采用有依据的过程细分、物理分配或有证据的替代方法；不得自动给予避免生产抵扣。 | `ghg-product-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | kitting_packing | reference_product_output | weighing | SKU；图案版本；组件核对单；合格内容物净质量 Q；合格完整套件数；调湿 | 使用经校准的秤称量完整内容物并扣除外部零售包装皮重；核对布、绣线、针、图纸、卡及验收，隔离不完整套件 | kg | 每批次或计量监测时段 | 声明代表性报告期，覆盖正常操作、换型及报废；披露季节性 | 声明配套场址及单一 SKU；全部适用阶段 | Q = 合格内容物净质量；参考输出为每 1 kg 参考流 | 校准、有日期台账、供应商规格、核对及覆盖证据 |
| cp_fabric | fabric_preparation | received_aida | issue_ledger | 供应商批次；组成；网格；尺寸；染整；湿度；领退质量；实测面密度 | 称量领退布及裁切片样本；核对裁切图、余料库存及内部转移台账 | kg | 每批次或计量监测时段 | 声明代表性报告期，覆盖正常操作、换型及报废；披露季节性 | 声明配套场址及单一 SKU；全部适用阶段 | 每 1 kg 参考流 | 校准、有日期台账、供应商规格、核对及覆盖证据 |
| cp_thread | thread_preparation | cotton_floss; thread_card | issue_ledger | 绣线色号和批次；长度；实测单位长度质量；领退质量；卡数量和实测质量 | 按色测长并称量调湿绣线；单独称量成品整理卡及退料 | kg | 每批次或计量监测时段 | 声明代表性报告期，覆盖正常操作、换型及报废；披露季节性 | 声明配套场址及单一 SKU；全部适用阶段 | 每 1 kg 参考流 | 校准、有日期台账、供应商规格、核对及覆盖证据 |
| cp_kitting | kitting_packing | tapestry_needle; printed_chart | issue_ledger | 针合金、镀层、尺寸、数量及样本质量；图纸版本、数量和质量；报废；退料 | 计数成品组件来料，称量可追溯批次或样本，并将领退数量与合格套件核对单核对 | kg | 每批次或计量监测时段 | 声明代表性报告期，覆盖正常操作、换型及报废；披露季节性 | 声明配套场址及单一 SKU；全部适用阶段 | 每 1 kg 参考流 | 校准、有日期台账、供应商规格、核对及覆盖证据 |
| cp_packaging | kitting_packing | retail_carton | issue_ledger | 纸盒结构及涂层；数量；实测单件质量；领退质量 | 称量供应的平折盒并核对撑开盒、可用退盒及废盒；纸盒质量不计入 Q | kg | 每批次或计量监测时段 | 声明代表性报告期，覆盖正常操作、换型及报废；披露季节性 | 声明配套场址及单一 SKU；全部适用阶段 | 每 1 kg 参考流 | 校准、有日期台账、供应商规格、核对及覆盖证据 |
| cp_cutting_energy | fabric_preparation | cutting_electricity | meter_reading | 电表编号；起止；kWh；中国场址；用户侧电压；设备及照明分配依据；批次归属 | 读取互不重叠且经校准的电表，或记录共享总量的因果归属；将采集的 kWh 换算为 MJ | MJ | 每批次或计量监测时段 | 声明代表性报告期，覆盖正常操作、换型及报废；披露季节性 | 声明配套场址及单一 SKU；全部适用阶段 | 每 1 kg 参考流 | 校准、有日期台账、供应商规格、核对及覆盖证据 |
| cp_sorting_energy | thread_preparation | sorting_electricity | meter_reading | 电表编号；起止；kWh；中国场址；用户侧电压；设备及照明分配依据；批次归属 | 读取互不重叠且经校准的电表，或记录共享总量的因果归属；将采集的 kWh 换算为 MJ | MJ | 每批次或计量监测时段 | 声明代表性报告期，覆盖正常操作、换型及报废；披露季节性 | 声明配套场址及单一 SKU；全部适用阶段 | 每 1 kg 参考流 | 校准、有日期台账、供应商规格、核对及覆盖证据 |
| cp_packing_energy | kitting_packing | packing_electricity | meter_reading | 电表编号；起止；kWh；中国场址；用户侧电压；设备及照明分配依据；批次归属 | 读取互不重叠且经校准的电表，或记录共享总量的因果归属；将采集的 kWh 换算为 MJ | MJ | 每批次或计量监测时段 | 声明代表性报告期，覆盖正常操作、换型及报废；披露季节性 | 声明配套场址及单一 SKU；全部适用阶段 | 每 1 kg 参考流 | 校准、有日期台账、供应商规格、核对及覆盖证据 |
| cp_fabric_waste | fabric_preparation | cotton_fabric_offcuts | waste_weighing | 棉组成和染整；废物质量；水分；可用退料；接收者；去向 | 称量独立收集废布，将转移单与批次平衡核对 | kg | 每批次或计量监测时段 | 声明代表性报告期，覆盖正常操作、换型及报废；披露季节性 | 声明配套场址及单一 SKU；全部适用阶段 | 每 1 kg 参考流 | 校准、有日期台账、供应商规格、核对及覆盖证据 |
| cp_thread_waste | thread_preparation | cotton_thread_trimmings | waste_weighing | 色号和整理；废线质量；可用退料；接收者；去向 | 将废棉线与布料分开称量并核对收集单 | kg | 每批次或计量监测时段 | 声明代表性报告期，覆盖正常操作、换型及报废；披露季节性 | 声明配套场址及单一 SKU；全部适用阶段 | 每 1 kg 参考流 | 校准、有日期台账、供应商规格、核对及覆盖证据 |
| cp_packaging_waste | kitting_packing | carton_waste | waste_weighing | 废盒质量；结构；接收者；去向；时段 | 称量包装阶段废盒；核对供应和退回包装 | kg | 每批次或计量监测时段 | 声明代表性报告期，覆盖正常操作、换型及报废；披露季节性 | 声明配套场址及单一 SKU；全部适用阶段 | 每 1 kg 参考流 | 校准、有日期台账、供应商规格、核对及覆盖证据 |
| cp_air | fabric_preparation | airborne_particulates | emission_monitoring | 实际排气位置；粒径分级；空气子介质；出口浓度；气体体积；时间；捕集粉尘；检出限 | 采用有记录的治理后场址排放实测，浓度乘以相容气体体积；区分环境排放、捕集粉尘和暴露；没有排放须有证据，不得假定 | kg | 每批次或计量监测时段 | 声明代表性报告期，覆盖正常操作、换型及报废；披露季节性 | 声明配套场址及单一 SKU；全部适用阶段 | 每 1 kg 参考流 | 校准、有日期台账、供应商规格、核对及覆盖证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `batch_normalization` | 所有清单行 | 将每个以声明单位计量的可归属交换总量除以合格内容物净质量 Q（kg），按每 1 kg 参考流报告。参考输出为 1 千克。不完整套件不计入 Q，其已消耗材料仍保留为损失。 | 批次交换总量；Q；cp_output | 归一化交换数量 |  |
| `meter_energy` | cutting_electricity; sorting_electricity; packing_electricity | 将可归属实测电量 kWh 乘以 3.6 换算为 MJ 后进行批次归一化；采用已核验能量单位组的换算。 | kWh 表计记录；归属记录 | MJ |  |
| `sample_mass_conversion` | received_aida; cotton_floss; thread_card; tapestry_needle; printed_chart; retail_carton | 按面积、长度或件数采集时，将采集面积、长度或件数乘以同一批次相应实测单位面积、长度或单件净质量。称重为主要依据；记录样本分布及不确定性。 | 面积、长度或件数；可追溯实测质量比 | kg |  |
| `air_mass` | airborne_particulates | 将实测排放颗粒物浓度乘以覆盖时段内相容的实际排气体积并换算为 kg。没有排放体积模型及证据时，不得将工作场所浓度换算为排放质量。 | cp_air | 排出颗粒物 kg |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_configuration` | 合格套件 | 维护图案特定物料表、色号长度及完整组件核对单；没有记录不得声称数量、棉纯度、整理、针合金或寿命。不同配置分开。 | SKU 物料表、供应商规格及验收记录 |
| `dq_balance` | 全部组件及公用工程 | 逐组件核对领料、合格内容物、退料、内部转移、报废及废物；调查含粉尘、废卡、废针及废图纸的缺口。按测量不确定性设置平衡容差，不用猜测百分比。 | 批次台账、校准及残差调查 |
| `dq_representativeness` | 报告期及上游链接 | 记录真实场址、时间、供应路线及电压；评估生产、待机和换型覆盖。未知数据保留为缺失并给出不确定性和补充计划，不默认置零。 | 报告期日志及数据集选择记录 |
| `dq_identity` | 每个交换 | 使用 UUID 前匹配材料、加工状态、介质及实际参考属性；场址特定化学品或废物身份独立核验。数据库数量不是工厂证据。 | 供应商规格、测量记录及核验流身份 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference_product_output | 检查 Q > 0、内容物净重扣皮和调湿及合格套件完整配置；参考输出须为恰好 1 千克，名称须与参考流一致。不得外推为成品装饰或全部 CPC 27140。 | `unsd-cpc3-2025`; `caterpillar-kit-components` |
| `validate_completeness` | 前景清单 | 逐项与台账核对真实材料、电力份额、损失及环境排放。条件行缺省须有证据。完整覆盖声明前须定量并以独立交换补充缺失的废图纸、废卡、废针、清洁、捕集粉尘或包装组件。不得重复相加棉质固体废物和空气颗粒物。 |  |
| `validate_identity_basis` | 全部带 UUID 行 | 核验真实中国低于 1 kV 供电范围并保留净热值及 MJ；检查废物与产品、空气排放与捕集粉尘的区别。已知粒径或子介质须具体身份。每个空 UUID 均显式审查；空值不代表可发表。 |  |
| `validate_allocation` | 共享活动归属 | 将分配份额与实测总量核对，确保组件转移及电表不重复计量。说明共产品状态及替代方案敏感性。 | `ghg-product-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景工厂干法组件到套件生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 经过适用性、科学及数据质量审查后用于声明配置的棉套件供应；各上游组件单独链接 |
| excluded_use | 完整 CPC 27140 覆盖；成品刺绣或家饰生产；消费者使用；仅按质量比较图案；上游数据缺失时声称完整摇篮到厂门 |
| required_metadata | SKU、物料表及版本；第 3 节全部限定信息；场址及报告期；手工或动力工序；供应商来料状态；Q 及合格件数；归一化及分配；上游链接；废物去向 |
| required_quality_disclosure | 表计及样本不确定性；缺失交换及身份；条件流证据；上游完整性；科学审查状态及方法限制 |
| update_trigger | 图案或物料表、棉来源及染整、供应状态、绣框或附件配置、包装、电压、加工路线或实测损耗特征变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | official_guidance | 联合国统计司 CPC 3.0 解释说明，2025 年 6 月 30 日，PDF 及印刷第 126 页，27140 和相邻类别。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类子集边界；不提供生产数量 |
| `caterpillar-kit-components` | handbook | Caterpillar Cross Stitch, Cross Stitch Kits, “What's Inside Every Kit” and hoop FAQ. https://www.caterpillarcrossstitch.com/collections/cross-stitch-kits | 制造商已加工组件和无绣框配置例证；产品描述不是制造清单 |
| `dmc-kit-components` | handbook | DMC Learning Cross Stitch Kit, SKU BK1986/BE, Kit Content. https://www.dmc.com/GB/en-GB/products/learning-cross-stitch-kit | 棉布及棉绣线例证和含绣框反例；不将公开长度采用为配方默认值 |
| `ghg-product-2011` | official_guidance | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), chapter 9, printed p.63, PDF p.65, Tables 9.1/9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 历史已出版分配层级，仅作为方法指导，不代表当前法律义务或认证；不提供排放系数 |
