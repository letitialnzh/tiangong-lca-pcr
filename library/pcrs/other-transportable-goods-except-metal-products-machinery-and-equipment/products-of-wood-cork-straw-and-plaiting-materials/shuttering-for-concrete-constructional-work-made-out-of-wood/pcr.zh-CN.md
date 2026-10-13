---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.shuttering-for-concrete-constructional-work-made-out-of-wood
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 按图加工并重封边的无框架酚醛膜桦木混凝土模板面板

## 1. 范围与适用性

本 PCR 只针对新制单件模板面板：采购全桦木全单板 PF 胶合、双面光滑酚醛膜覆面的已固化板材，按具体混凝土模板图纸切割轮廓及按需钻孔，刷涂兼容水性丙烯酸漆重封全部裸露切边和孔壁，常温干燥、验收、包装，至工厂交付。面板作为模板接触混凝土的面层交付，不是完整承重模板系统。图纸、订单和验收须证明模板用途及实际加工，不能仅把原板改名为模板。参见 `wisa-formwork-2020`、`metsa-formwork-manual`、`metsa-overlaid-epd-2024`。

排除原木至胶合板制造、现场新覆膜或热压、普通未加工库存板销售、其他树种或芯层、其他膜或封边漆路线、拼接大板、面膜翻新、支撑或框架组装、随件紧固件、安装、每次浇筑使用、拆模、清洗、维修、损耗及寿命终点。已采购的胶和覆膜负荷由匹配上游板材背景承载，不因此归零。新覆膜及有紧固件的组件需要另行方法扩展，不隐去材料。制造不设可浇筑面积、承载系统或周转次数默认值；使用服务须另设经测量的参考和独立服务账。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.shuttering-for-concrete-constructional-work-made-out-of-wood |
| classification_refs | CPC 3.0 31623; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 按具体模板图纸加工且全部裸露边孔重新封漆的新制无框架桦木模板面板 |
| excluded_products | 库存原板；其他木质模板路线；完整模板系统；使用服务 |
| representative_product | 单件按图成品，无默认厚度、尺寸、配方或质量 |
| production_route | 采购双面覆膜板—切割/按需钻孔—清除粉尘—刷涂封边—常温干燥—验收—包装；电动搬运，无燃烧 |
| market_state | 净面板已干燥验收并可交付；运输包装另计 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供按模板图纸加工的混凝土接触面板 |
| How much | 1 kg 验收交付净面板，含实测留存水 |
| How well | 声明轮廓/孔位、厚度、公差、表面状态和验收要求；适用性不表示完整系统承载认证 |
| How long or cycle | 一次制造至工厂交付周期；不假定每次浇筑的寿命或周转次数 |
| reference_flow_link | finished_panel |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木制混凝土结构工程的模板 `0c63533f-7bd2-4d58-a0cb-03a1bed26179` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 桦木及全单板组坯；PF 胶接与双面光滑酚醛膜；来料及交付膜/封边状态；订单和模板图纸/轮廓孔位；厚度/公差/表面验收；净质量与含水检测方法；水性丙烯酸漆 TDS/SDS/固体及挥发物；供电电压/地区/时期/损耗边界；制造范围、废物及排气去向；包装与分摊；无框架/紧固件和无使用服务声明 |

所有必需限定信息在数据包元数据、产品或过程说明中声明。净质量含留存胶、膜、漆和水，排除运输包装；1 kg 不代表不同尺寸或支撑系统的功能等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_product 称验收交付净面板；所有清单行使用每 1 kg 参考流。拒绝包装毛重、烘干木质量或理论密度替代。 |
| coated_moisture | coated_board; finished_panel; coated_offcut; captured_dust | 质量 | kg | 采用 cp_material/cp_product 验证覆膜胶合基质水分检测；烘干减重可能含漆或胶挥发物，不能全作水。未胶合木材 MC=100×水质量/烘干木质量（usda-wood-handbook-2021），不能用默认树种密度转换。 |
| electricity_basis | electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 采用 cp_energy；1 kWh = 3.6 MJ。注明平台净热值属性承载电能，核对用户侧低压交付、供方和损耗基准，未知时供方链接待定。 |
| wet_paint_basis | edge_paint; waste_paint; washwater | 质量 | kg | 按实际整配方湿漆记录投入；用 cp_coating 分开干固体、配方水、挥发组分和另加水。水性不等于无挥发排放，固体率、密度及挥发份均需实测或供应商实证。 |
| particle_partition | pm25; pmcoarse; pmover10 | 质量 | kg | 同一出口、时期和方法的 PM2.5、PM10 与总可过滤 PM 是嵌套量；仅在测量可比时取粗段=PM10−PM2.5，大粒径段=总 PM−PM10。负差或不兼容检测不得强制清零或套用比例。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已固化、双面覆膜且原边封漆的外购全桦木全单板 PF 胶合板及辅料接收；上游工艺不在本前景重复 |
| starting_condition_role | 制造接收截面；不是零负荷原料 |
| product_classification_scope | CPC 31623 的按图加工无框架模板面板子集；库存原板与其他模板产品不据此映射 |
| recursive_input_rule | 本路线不采购成品模板面板返修。自产同批返工仅作内部等量链接，不重复购入或制造负荷；外购已加工模板或使用过模板须另行方法扩展。 |
| upstream_dataset_requirement | 匹配来料木材、PF、双面膜和原边漆状态的板材背景，辅料、供电、水、入厂运输及外部废物处理。未覆膜板背景不能独自填补覆膜板；不得叠加已包含的膜或运输。 |
| disclosure | 声明现场、调查期、流程及状态、制造/运输交付截面、供方和去向、待定背景、计量完整性和无使用服务。 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_actual_route | manufacturing | 纳入接收、切割、按需钻孔、粉尘收集、刷涂裸露边孔、常温干燥通风、验收、包装、电动搬运和本生产期设备维护。已覆膜在上游计，现场无新覆膜、热压或燃烧。 | wisa-formwork-2020; metsa-formwork-manual; metsa-overlaid-epd-2024 |
| boundary_one_unit | manufacturing | 聚合加工、封边和包装为同一前景单元，只列一次交付成品。保留各阶段实物计量和循环，内部交接两端记录相同数量、批次、状态；不是第二外部产品流。 | wisa-formwork-2020 |
| boundary_releases | manufacturing | 分别记录捕集粉尘与实际室外排放。刷具清洗废水及残漆送外部处理，不预设直接水排放或本地焚烧；如实际出现则扩展方法和各物种流。电力背景排放不复制为本现场排放。 | epa-sawmill-pm-2014 |
| boundary_fasteners | finished_panel | 无框架面板交付没有随件螺钉、钉子、夹具或支撑件；现场安装紧固件属于独立施工服务。若实际出厂附带紧固件，不可静默排除，当前范围不适用。 | wisa-formwork-2020; metsa-formwork-manual |
| boundary_use_service | dataset | 制造 PCR 明确排除周转使用服务。扩展服务时须独立测接触面积及合格浇筑次数、各板周转和退役、替换/损耗、修补材料、清洗水/能耗/废水、脱模剂、现场紧固件和搬运。制造负荷按实测服务分配一次，不再逐次重购整板或重复计整板制造；厂家次数和建筑寿命不作为默认。 | wisa-formwork-2020; metsa-formwork-manual; metsa-overlaid-epd-2024 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| manufacturing | 加工、封边和交付包装 | required | 声明的采购覆膜板路线 | foreground production | 1 kg 净成品参考流 |

实物流图：接收覆膜板→按图切割/钻孔→除尘→边孔刷漆→常温干燥→验收/返工→包装交付。边角料、捕集粉尘、残漆、清洗废水及包装废物按产生点分账；同板阶段转移和内部返工不是重复投入/产出。阶段质量、水、木生物碳及胶膜漆化石碳平衡，与归属环境负荷账分别保存。所有下列行均为一个原子交换；条件不存在需有调查证据，漏报不是零。现场发现其他具体化学物、包装或污染物须拆行并核验；不能塞入现有流。

### 过程：加工、封边和交付包装（`manufacturing`）

#### 输入

##### 产品流

###### 胶合板仅由板材组成，外层至少有一层非针叶木，热带木材除外（`coated_board`）

采购全桦木全单板 PF 胶合板，两面为已固化的光滑酚醛膜，原边已有丙烯酸封边。记录实际组坯、膜用量与状态、含水状态和接收净质量。广义胶合板身份包含本子集，但不提供覆膜板配方、数量或背景。仅有未覆膜板背景时，上游膜及原始封边负荷仍未解决。

- 选定流：胶合板仅由板材组成，外层至少有一层非针叶木，热带木材除外 `897daeae-8210-4a8e-af21-7ad112411dc5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_material 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`metsa-overlaid-epd-2024`

###### 涂料（水性）（`edge_paint`）

整配方湿态水性丙烯酸封边漆，刷涂裸露切边和孔壁，与采购膜层兼容并常温干燥。必须取得供应商 TDS/SDS 和配方；不覆盖 UV 固化、溶剂型清漆，也不假定固含量或 VOC 因子。该身份包含更宽的树脂示例，不允许替换为醇酸配方或引用其泛称减排断言。

- 选定流：涂料（水性） `47411f13-cc57-455b-ba23-dafbaeef17db`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_coating 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_coating`
- 来源：`wisa-formwork-2020`

###### 交流电（`electricity`）

低压（<1 kV）用户侧电网交流电，用于切割、钻孔、除尘、常温干燥通风、电动搬运及包装。所选身份为中国供电；要求现场电压、地区、年份、组合及供方损耗边界。其他接收电压或地区需扩展经核实的兼容身份与背景；未获证据前供方链接保持待定。净热值是数据库基准属性；对电力承载电能兆焦，不表示燃烧供热。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_energy 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 自来水（`tap_water`）

计量实际用于刷具或工具清洗及供应商允许稀释的外购自来水；不重复计算湿漆自身含水。体积换质量时记录温度并测量密度，不设通用密度默认值。

- 选定流：自来水 `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_water 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

###### 聚乙烯薄膜（`pe_wrap`）

仅在实际采用时记录交付用聚乙烯包装薄膜；称量膜净质量并识别牌号及再生含量。广义薄膜身份不提供包装配方；运输包装膜不计入参考面板净质量。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_pack 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`metsa-formwork-manual`

###### 聚丙烯包装打包带（`pp_strap`）

仅指实际聚丙烯扁平包装打包带。捆扎绳、树脂颗粒、线束扎带及再生钢带均不兼容；UUID 未解决。

- 选定流：聚丙烯包装打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_pack 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`

###### 木制托盘、箱式托盘和其他装载板，木制托盘套环（`wood_pallet`）

记录广义身份内实际使用的木制装载托盘，声明结构及实测净质量。追踪留用或周转托盘，只计入有证据的归属制造与维修负荷；不设托盘周转次数，也不在缺少围板时计围板投入。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_pack 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`metsa-formwork-manual`

###### 润滑油（`mineral_oil`）

仅在存在时记录调查生产期内向加工或搬运设备补加的石油基液态润滑油。核对库存和设备留存充装；不代替合成油、润滑脂或脱模剂。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_maintenance 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_maintenance`

###### 货物运输（`road_freight`）

实际公路货运服务用于来料覆膜板与辅料，以及所选废物处理供方尚未包含的外运废物路段。逐票记录路段、实际运输湿质量、距离、承运者/车辆/载荷/回程和供方包含范围。不设距离、载荷、空返比例或燃料默认量，不重复已包含的材料交付或废物运输；工厂门参考排除送往工地的成品外运。其他运输方式必须另列并核验具体服务流。

- 选定流：货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` / 单位组 `3620148f-c5db-48ce-9065-a10092089aca` / kg*km
- 数量规则：采用 cp_transport 采集每 1 kg 参考流的数量；保留原始路段量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`route_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`

#### 输出

##### 产品流

###### 木制混凝土结构工程的模板（`finished_panel`）

唯一交付验收的按模板图纸加工的无框架桦木模板面板参考。净面板含木材、已固化 PF 胶、留存面膜、新固化封边漆及留存水；排除运输包装、支撑框架及安装紧固件。同一面板在加工、封边与包装间移动不另列产品输出。

- 选定流：木制混凝土结构工程的模板 `0c63533f-7bd2-4d58-a0cb-03a1bed26179`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_product`
- 来源：`wisa-formwork-2020`

##### 废物流

###### 酚醛膜覆面 PF 胶合桦木胶合板边角料（`coated_offcut`）

送外部处理的未团聚、未再压制成木砖的已固化酚醛膜覆面PF胶合桦木边角料及不合格板块。保留胶、膜、水组成和去向。该未团聚限定不否认原板已热压固化；压制木砖及未处理锯屑不兼容，内部返工保持内部循环。

- 选定流：酚醛膜覆面 PF 胶合桦木胶合板边角料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_waste 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 捕集的 PF 胶合酚醛膜胶合板加工粉尘（`captured_dust`）

捕集的切割和钻孔粉尘含木材、已固化胶和膜。称容器皮重及净质量，记录含水状态、组成和外部接收者；不能视为空气排放或清洁生物燃料。

- 选定流：捕集的 PF 胶合酚醛膜胶合板加工粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_waste 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-sawmill-pm-2014`

###### 废水性涂料（`waste_paint`）

产生点分离收集的水性丙烯酸涂料残余，记录固体与水状态及实际处理。不能把另行称量的清洗废水或容器聚合物并入本行。

- 选定流：废水性涂料 `3ec596f0-fe78-40d3-be98-8ef4e3cb99e5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_waste 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 送外部处理的丙烯酸封边漆刷具清洗废水（`washwater`）

分离收集的丙烯酸漆刷具或工具清洗废水；测湿质量、悬浮和溶解组分及接收者。不覆盖直接排放。采矿、电解锰渣洗涤或已处理废水身份不兼容。

- 选定流：送外部处理的丙烯酸封边漆刷具清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_water 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

###### 带残余丙烯酸漆的空 HDPE 封边漆容器（`paint_container`）

若实际封边漆使用 HDPE 容器，分别记录空容器聚合物净质量和附着残漆，不能与 waste_paint 重复。其他容器材质必须另列原子行并核实身份。

- 选定流：带残余丙烯酸漆的空 HDPE 封边漆容器
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_waste 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 弃置的未清洗聚乙烯包装薄膜（`discarded_pe`）

产生点实际弃置的来料包装或包装修剪 PE 膜，排除随成品出厂膜。已清洗机械回收输出及 PET 废料不兼容；追踪污染状态和处理。

- 选定流：弃置的未清洗聚乙烯包装薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_waste 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

###### 废润滑油（`used_oil`）

设备维护实际排出的石油基废润滑油；追踪污染及外部处理、设备留存充装和库存。产生废物身份不表示回收抵扣或处理过程。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_maintenance 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_maintenance`

##### 基本流

###### 颗粒物 (PM2.5)（`pm25`）

实际排气或无组织逸散经控制后进入室外空气未特指的 PM2.5 质量。不是校正流或室内暴露浓度；最细实测粒径区间只计一次。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_air 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-sawmill-pm-2014`

###### 颗粒物 (PM2.5 - PM10)（`pmcoarse`）

室外空气未特指、不重叠的 PM2.5–PM10 粒径区间；与嵌套总量保持同一出口、时期和方法。不另重复计完整 PM10 流。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_air 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-sawmill-pm-2014`

###### 颗粒物（> PM10）（`pmover10`）

同一实测粒径分布中 >PM10 的室外空气未特指颗粒物。不能把未知粒径视为本区间，也不另重复列总颗粒物流。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_air 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-sawmill-pm-2014`

###### 水蒸气（`water_vapour`）

从漆、清洗工具或板材含水变化实际蒸发并排到室外的水；分离非水挥发损失后由封闭水账计算。环境湿度不是过程投入，也不表示蒸汽能源交换。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_water 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

###### 甲醛（`formaldehyde`）

仅在现场筛查或测量证实时记录加工、储存或干燥期间排向室外的甲醛（CAS 50-00-0）。固化板试验舱浓度、热压因子及总 VOC 均不能代替工厂排放质量。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_air 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`metsa-overlaid-epd-2024`

###### 2-正丁氧基乙醇（`butoxyethanol`）

仅当实际水性漆配方或 SDS 及现场账识别时，记录室外空气未特指的 2-丁氧基乙醇（CAS 111-76-2）。不设正排放默认值，也不假定所有丙烯酸漆含此物；分别测定留存、废物及空气份额。

- 选定流：2-正丁氧基乙醇 `fe0acd60-3ddc-11dd-ae31-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_air 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

###### 二氧化碳（生物源）（`co2_bio`）

仅在有证据显示储存时现场木碳氧化时记录生物源二氧化碳，介质为室外空气未特指；声明路线无燃烧。证实不存在与未计量须分别记录。不能因 LCIA 或温室气体统计口径而删除实际生物 CO2；树脂及涂料的化石碳另核算。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采用 cp_carbon 采集每 1 kg 参考流的数量；保留原始总量及相同验收净质量分母。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carbon`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | manufacturing | 优先专门批次计量、分表或有实测因果依据的设备工时归属，涵盖待机和控制负荷。保留全场总量、实物账及归属账；归属份额合计为一，不能用份额乘共产品的实物输出来制造平衡。 |  |
| allocation_waste | coated_offcut; captured_dust; waste_paint; washwater | 本路线以验收面板为唯一制造参考；废物处理负荷归该生产，出售废料不自动证明独立联产品，不默认负负荷、回收或燃料替代抵扣。可用返工板内部回用只抵实际新料需求，既有制造不重算。 | metsa-overlaid-epd-2024 |
| allocation_extension | dataset | 若真实工厂联产独立商品、共享其他路线或提供周转服务，必须公开独立测量、分割或经论证的物理/经济方法与敏感性；未解决不得宣称完整数据集，也不能移植针叶锯材调查份额。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | manufacturing | finished_panel | 验收记录与称量 | 订单/图纸版本；批次；桦木/PF/膜状态；轮廓/孔位/厚度/面积；逐批去包装净质量；水分基质方法；验收/返工/废品；交付量 | 经校准秤称已干燥验收面板，排除运输包装；按相同订单配置复核质量、图纸、孔位和表面要求，不能以型号目录质量替代。 | kg; m; m2; moisture fraction | 逐批及相应事件 | 同一声明连续生产期；保留起止及非正常时段 | 同一工厂及订单路线 | 每 1 kg 参考流 | 校准、供应商证据、批次记录、异常/不确定性和闭合残差 |
| cp_material | manufacturing | coated_board | 来料批次与存货称量 | 供应商/背景；树种/组坯/PF；双面膜和原封边；来料净质量/尺寸；期初期末/WIP；实际耗用；退料；水/干木/胶膜组成及测法 | 逐批核对供应商声明，称净来料与存货；采用覆膜胶合基质验证的水分方法，分离非水挥发份，追踪切割图与每个阶段实物。 | kg; m; moisture fraction | 逐批及相应事件 | 同一声明连续生产期；保留起止及非正常时段 | 同一工厂及订单路线 | 每 1 kg 参考流 | 校准、供应商证据、批次记录、异常/不确定性和闭合残差 |
| cp_coating | manufacturing | edge_paint | 配方/领退料/称量 | 漆商品名与 TDS/SDS；水性丙烯酸证据；湿漆质量/密度/固含/挥发物 CAS；刷具与边孔面积；额外稀释水；留存干漆；残漆；清洗去向 | 称领用与回收湿漆，验证现场涂布/干燥与供应商适用性；用配方及试验区分留存、挥发、废物、附着容器及工具残留。 | kg; mass fraction; m2 | 逐批及相应事件 | 同一声明连续生产期；保留起止及非正常时段 | 同一工厂及订单路线 | 每 1 kg 参考流 | 校准、供应商证据、批次记录、异常/不确定性和闭合残差 |
| cp_energy | manufacturing | electricity | 电表/工时记录 | 分表起止 kWh；生产/待机/除尘/通风/包装/搬运工时；批次；电压/地区/供方/时期；损耗与分摊依据 | 用分表或经实测校准设备功率与工时核对账单，识别共享负荷。保持用户侧低压背景及电表边界一致，不能把高压生产组合直接接到终端电表。 | kWh; MJ; h | 逐批及相应事件 | 同一声明连续生产期；保留起止及非正常时段 | 同一工厂及订单路线 | 每 1 kg 参考流 | 校准、供应商证据、批次记录、异常/不确定性和闭合残差 |
| cp_water | manufacturing | tap_water; washwater; water_vapour | 水表/称量/水账 | 用水、漆内水、额外水、工具/板内水；废水称量；密度/温度；留存/蒸发/库存；固体/溶解物；处理者 | 实测新水与废水、板及漆含水，闭合水账；废水水量和所含组分分开，防止重复计质量。干燥损失只有验证为水才作水蒸气。 | kg; m3; density; temperature | 逐批及相应事件 | 同一声明连续生产期；保留起止及非正常时段 | 同一工厂及订单路线 | 每 1 kg 参考流 | 校准、供应商证据、批次记录、异常/不确定性和闭合残差 |
| cp_pack | manufacturing | pe_wrap; pp_strap; wood_pallet | 包装 BOM/称量/周转账 | 每种包装材质/净质量；包装和托盘型号；批次出入/期初期末；实际留用与损失/维修；背景包含范围 | 拆分每种材质称净质量，逐批核对交付包装及实际托盘返回，核对背景是否已经包含容器/包装；未经测量不摊假定周转。 | kg; count | 逐批及相应事件 | 同一声明连续生产期；保留起止及非正常时段 | 同一工厂及订单路线 | 每 1 kg 参考流 | 校准、供应商证据、批次记录、异常/不确定性和闭合残差 |
| cp_waste | manufacturing | coated_offcut; captured_dust; waste_paint; paint_container; discarded_pe | 废物称量与转移记录 | 流材质/胶膜漆水；容器皮重/净重；捕集位置；返工/库存；外部接收者/运输/实际处理；附着残余 | 分别称各废物，保存处理联单，核对粉尘捕集率与排气出口；空桶聚合物和残漆不与湿废漆/废水重计。 | kg; mass fraction | 逐批及相应事件 | 同一声明连续生产期；保留起止及非正常时段 | 同一工厂及订单路线 | 每 1 kg 参考流 | 校准、供应商证据、批次记录、异常/不确定性和闭合残差 |
| cp_maintenance | manufacturing | mineral_oil; used_oil | 设备补油/排油记录 | 油配方；设备/批次；补加/排出；库存/设备留存；归属工时；废油去向 | 按生产期称补油/排油并核对设备留存和存货；维护共享负荷须有归属证据。 | kg; h | 逐批及相应事件 | 同一声明连续生产期；保留起止及非正常时段 | 同一工厂及订单路线 | 每 1 kg 参考流 | 校准、供应商证据、批次记录、异常/不确定性和闭合残差 |
| cp_air | manufacturing | pm25; pmcoarse; pmover10; formaldehyde; butoxyethanol | 出口测量与物种筛查 | 出口/位置/介质；流量、温湿压/湿干标准；浓度与时间；过滤方法/粒径口径；控制效率实测；CAS/SDS；检出限/非检出；捕集去向/共享出口 | 按实际出口用可追溯测量或经验证的物种物料账；浓度和气量保持相同干湿/标准状态，覆盖实际运行时间；共享出口只计一次，报告非检出而不是自动零。 | kg; mass/volume; gas volume/time; h; T/P | 逐批及相应事件 | 同一声明连续生产期；保留起止及非正常时段 | 同一工厂及订单路线 | 每 1 kg 参考流 | 校准、供应商证据、批次记录、异常/不确定性和闭合残差 |
| cp_carbon | manufacturing | co2_bio | 物料碳分析与排放筛查 | 木干质量/碳比例；PF/膜/漆化石碳；成品/废物/库存；生物氧化证据及 CO2；核对差额/测量误差 | 用实际材料分析或供应商一次数据闭合生物与化石碳；不得把未闭合质量差全变 CO2，也不能在加工边界虚构森林吸收抵扣。 | kg; mass fraction | 逐批及相应事件 | 同一声明连续生产期；保留起止及非正常时段 | 同一工厂及订单路线 | 每 1 kg 参考流 | 校准、供应商证据、批次记录、异常/不确定性和闭合残差 |
| cp_transport | manufacturing | road_freight | 承运路段记录 | 货物与批次；出发/到达；实际湿质量 kg 与包装；距离 km；车型/燃料/载荷/回程；供应者已含运输；废物处理包含运输 | 用磅单、发票和实际路线测量逐票核对；按相同服务边界确定供方，不能把工厂内部电动搬运再计公路服务。 | kg*km; kg; km | 每票实际运输 | 同一声明生产期的实际供应及废物路段 | 同一工厂及订单 | 每 1 kg 参考流 | 磅单、路线记录、承运者背景、去重复核对 |

所有协议保留逐批或事件绝对原始量，把经库存调整的归属总量与同批验收交付净面板 kg 对应，按 calc_normalize 报告每 1 kg 参考流。不得简单平均各批比例，也不除以板片数或浇筑次数。cp_product 确定同一净质量分母；最终参考数量为 1 kg。

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | all inventory rows | x_i = 归属且经库存调整的交换总量 / Q；Q 为 cp_product 同期验收交付净面板 kg，成品参考输出为 1 kg。存货和在制品与批次相匹配，不以浇筑次数作分母。 | cp_product; all row collection protocols | 每 1 kg 参考流的清单 |  |
| calc_electricity | electricity | 电量 MJ=实测 kWh×3.6；先确定归属和电表边界，保留原始 kWh。 | cp_energy | MJ |  |
| calc_paint | edge_paint; waste_paint; washwater; water_vapour; butoxyethanol | 整配方湿漆耗用=领用−退料−存货增加；湿漆=留存固体/水/挥发物+废物+排气+设备存量变化，各组分分别实测且加水另计。未知挥发份不能全归水或 VOC。 | cp_coating; cp_water; cp_air; cp_waste | 湿漆组分账 | wisa-formwork-2020 |
| calc_physical_balance | manufacturing | 接收+期初存量=验收交付+各废物+实际排气+期末存量，按干木、胶膜漆固体、水分别核对；内部循环两端等量抵消。包装及设备油用各自子账，不混成板材质量。 | cp_material; cp_coating; cp_product; cp_water; cp_waste; cp_pack; cp_maintenance; cp_air | 原始实物账及残差 | usda-wood-handbook-2021 |
| calc_particles | pm25; pmcoarse; pmover10 | 同法同出口取 PM2.5、PM10−PM2.5、总可过滤 PM−PM10，三段只加一次；与捕集粉尘分开，负差、未知粒径或凝结颗粒口径不匹配保持待定。 | cp_air; cp_waste | 不重叠粒径质量 | epa-sawmill-pm-2014 |
| calc_air_mass | formaldehyde; butoxyethanol | 实际排气质量=匹配标准状态的浓度×排气体积，按现场实际运行时间积分并转换 kg；现场验证的组分账可作独立核对。不得把舱 ppm 或职业暴露值直接当工厂 kg。 | cp_air; cp_coating | 实际室外物种质量 | metsa-overlaid-epd-2024 |
| calc_carbon | co2_bio | 输入生物碳=成品+废物+实际排气+存量变化生物碳，化石碳另账。只有实证木碳氧化份额可按 CO2/C 摩尔质量比转换；树脂/膜/漆不能假定生物碳，CO2 仍留在 LCI。 | cp_carbon; cp_product; cp_waste; cp_air | 生物/化石碳账 | metsa-overlaid-epd-2024 |
| calc_transport | road_freight | 各实际路段 kg*km=运输湿质量 kg×实测路段 km；原始 t*km 按 1 t*km=1000 kg*km 换算，再除同批验收净产品 kg。回程与载荷按承运者背景声明核对，不再额外假定空返负荷。 | cp_transport; cp_product | 每 1 kg 参考流的公路货运质量距离 |  |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_scope | dataset | 以订单图纸、供应商板材/漆证据及现场工艺证明范围。未知配方、膜负荷、介质或供方基准为具体待定项，身份成功不等于完整数据集。 | cp_product; cp_material; cp_coating; cp_energy |
| dq_period | all inventory rows | 所有流与成品分母同址同期同批；记录存量、返工、废品和非正常时段。并厂或多时期结果用总归属数量/总净产品量，不简单平均比例。 | all collection protocols |
| dq_complete | all inventory rows | 没有通用耗用或排放因子；记录实测、不适用、低于检出限和未测的区别。未知 UUID、供应链和去向不因缺省值而消失，报告不确定性与完整性。 | calibration; records; supplier declarations; outlet tests |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_identity | dataset | 确认采购板与按图成品为不同产品状态且只有 finished_panel 是参考输出；核实桦木/全单板/PF/双面膜、实际加工、边孔重封和无框架/随件紧固件。仅普通库存板销售或服务不适用。 | wisa-formwork-2020; metsa-overlaid-epd-2024 |
| validation_measurement | all inventory rows | 核对同一验收净质量分母、配方水/固体/挥发物、原始实物平衡与分摊负荷账。参考不是使用次数；出现计量 unsupported、未解释残差或未知基准不得报通过。 | usda-wood-handbook-2021 |
| validation_emissions | pm25; pmcoarse; pmover10; formaldehyde; butoxyethanol; co2_bio | 核查排气介质/物种/CAS/生物化石来源和实际数量定义；颗粒物区间不重复，捕集与排出分开；不能用相近物种或校正流替代。未知源份额、气量标准、粒径或检出限使有关结论待定。 | epa-sawmill-pm-2014 |
| validation_background | dataset | 核实每个流的完整身份路线、参考属性及单位组，核对供应者数量、状态、地点/时期、包装和已包含的制造/运输。空 UUID 和待定供应者不能宣称已解决；未覆膜原板、木砖、清洁锯屑、矿业废水及高压生产电不能替代本路线对应交换。 | metsa-overlaid-epd-2024 |
| validation_service | dataset | 制造结果只支持净面板交付；无独立实测周转、维修/损耗/清洗/脱模剂和制造负荷一次性归属，不能宣称每次浇筑或多次模板服务结果。科学审核及映射接受另行进行。 | wisa-formwork-2020; metsa-formwork-manual |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在所有限定信息及背景已匹配、完整性已声明后，用于同路线按图无框架模板面板制造；单独加工单元可以发布但须明确不是完整摇篮到工厂门结果。 |
| excluded_use | 原板一体化制造、其他木材/涂层/系统、单次或多次浇筑服务、支撑承载性能声明、自动方法批准或 mapping 接受 |
| required_metadata | PCR id/版本；产品图纸/材质/PF/膜/封边/净质量/水分；场址时期/电压/供应链/边界/协议/归属/去向/不适用；所有身份及数量链接待定项 |
| required_quality_disclosure | 方法尚未独立科学审核；实测覆盖/跳过/检出限、样本和不确定性、库存平衡/残差、未决 UUID 和背景适用性；不虚称完整 |
| update_trigger | 供应板/膜/PF/漆配方、尺寸加工、干燥/能源/包装、废物处理、供方电压/地区/时期或边界变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| metsa-overlaid-epd-2024 | dataset | Metsä Wood, Overlaid birch plywood, S-P-03018, published 2024-10-11, p4. https://www.metsagroup.com/contentassets/9a224a9f84e54845add88157b7e658d7/epd-metsa-wood-overlaid-birch-plywood.pdf; 读取原件日期 2026-10-11 | 仅支持上游 PF 单板胶接、膜及封边的区别；多产品平均，不采用配方、密度、舱排放、建筑寿命或报废默认值。 |
| wisa-formwork-2020 | handbook | UPM, WISA Plywood for Concrete Forming, February 2020, pp3–4. https://www.wisaplywood.com/siteassets/documents/brochures/wisa_concrete-forming-plywood-en.pdf; 读取原件日期 2026-10-11 | 按客户要求加工、切边孔壁丙烯酸重封、另行安装及使用维护；周转指导不是担保或默认量。 |
| metsa-formwork-manual | handbook | Metsä Wood plywood for Concrete Formwork, undated retained official edition, pp2,4,11–12. https://www.metsagroup.com/contentassets/a8523a58d22c4f00831390ad8a4369ad/metsa_wood_plywood_for_concrete_formwork.pdf; 读取原件日期 2026-10-11 | 另一厂家独立证据：酚醛膜桦木模板面板、丙烯酸护边、交付包装及现场维护。不采用数值默认量。 |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282 (2021), ch4 p4-1. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf; 读取原件日期 2026-10-11 | 木材干基含水率定义；覆膜胶合板必须验证基质方法，不采用树种密度默认值。 |
| epa-sawmill-pm-2014 | official_guidance | EPA Region 10, Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country (May 2014), table and footnotes. https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf; 读取原件日期 2026-10-11 | 仅支持嵌套可过滤颗粒物口径。锯木潜在排放不是胶合桦木板因子；不转移因子、室内零排放判断或锅炉参数。 |
