---
pcr_id: pcr.constructions-and-construction-services.constructions.commercial-building-delivery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 商业建筑交付

## 1. 范围与适用性

本PCR针对在实际场址施工并验收的商业建筑实体：批发零售建筑（含商场和室内市场）、仓库、展览馆、办公楼和银行楼、航空铁路公路终端建筑、停车库以及加油站和服务站建筑。声明整栋交付实体及所含固定和室外工程。范围不限于店铺内装或办公装修。结构路线遵循实际设计（钢筋混凝土、钢、砌体、木或混合），不规定配方或设计载荷。含多栋独立交付建筑的站点或终端须有明确实体登记和共享工程归属，不得将整个运输网络任意标为一栋建筑。

前景始于记录的场址初始状态及外供产品门端，止于实体交付，含实际土方、临时工程、结构建造、围护、交付固定系统、调试及施工废物。材料设备制造属于上游，须另关联。进场运输、现场施工和后续废物处理应可区分。维护更新、运营能水、售油、商品物流活动、最终拆除及回收不属于本施工交付数据集；这些排除禁止全寿命宣称，完整cradle-to-gate宣称还须证明上游覆盖。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.commercial-building-delivery |
| classification_refs | CPC 3.0 53122 |
| covered_products | 上述各用途的竣工商业建筑实体；实际交付外壳、核心设施及可归属室外工程 |
| excluded_products | 住宅及工业农业建筑；酒店餐厅学校及其他CPC53129用途；独立公路轨道跑道桥梁及土木网络；散装材料；设计施工服务；纯运营服务 |
| representative_product | 具有声明商业功能、实测几何和签署交付状态的一栋完整建筑，不是全国平均建筑 |
| production_route | 实际场地准备、下部结构、结构体系、围护、装修固定系统、用途专属安装及试验；预制构件保留供应商制造门端 |
| market_state | 声明外壳核心装修交付状态的不动建筑实体 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于明确贸易、存储、办公、展览、终端、停车或站点功能的交付商业建筑 |
| How much | 一栋完整建筑；声明实测总建筑内部使用面积及方法、占地、层数、高度及实际几何；用途相关安装容量和租户停车装卸配置 |
| How well | 实际结构、围护、交付系统、性能要求及调试验收依据；仅外壳交付不是完整装修建筑；不推定合规批准 |
| How long or cycle | 一次施工验收周期；无通用寿命。后续使用期比较须有独立依据支持期间、维护及运营情景 |
| reference_flow_link | reference_building |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 竣工交付的商业建筑 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 场址工程实体标识；商业用途及混合用途份额；实测面积定义尺寸；结构基础及初始地况；材料等级状态；外壳核心租户装修完整性；安装系统及调试容量；室外工程及网络区分；施工日期；签署验收；上游运输现场废物门端；遗漏及后续阶段排除 |

显示单位item表示公开原件Item(s)数量单位。一件是一栋建筑，不是租赁单元、平方米、站点吞吐或货币。面积是必需实测限定信息；比较须有功能性能等效依据。公开商业建筑候选以质量为主属性，没有可追溯完整建筑材料数量和支持换算时不能绑定此数量参考。等待依据时产品UUID留空，不改写其公开质量属性。全部必需限定信息须在数据集元数据或等效实体记录中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | reference product | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 采用cp_acceptance识别声明商业用途和交付配置的一栋完整验收建筑。租赁分区、楼层及车位不是额外建筑件数。所有清单数量均按每声明的参考流计量。 |
| area_identity | glazing; waterproofing; plasterboard; ceramic_floor; plywood_formwork | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 采用有记录的实际面积、厚度和构造规格，不将公开面积属性改为质量。建筑面积及其测绘定义另行记录。 |
| energy_identity | lv_electricity; mv_electricity; site_diesel | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开属性和能量单位组。按单位组，电力MJ等于实测kWh乘3.6。燃料能量采用实测燃料数量、需要时的实际密度及批次净热值，不规定默认燃料因子。 |
| volume_state | ready_mix; supplied_water; groundwater; riverwater; soil_export; concrete_washwater | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按声明物理状态采集体积；质量换算须有具体实测密度和条件。土的松胀、水资源和废水互不等同。 |
| transport_basis | road_freight | 货物运输（质量乘距离） `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | 逐运输段采用实际货物吨数和行驶公里数。空载返回和载荷分配须有明确记录，不假定运输距离。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 施工开始时已记录的场址及外供产品门端；实际发生的场地清理和临时工程须纳入 |
| starting_condition_role | foreground_start |
| product_classification_scope | 交付的商业建筑实体 |
| recursive_input_rule | 回用的同类建筑或保留结构是明确识别的既有输入，须声明负荷和状态，不静默展开为重复建筑输出 |
| upstream_dataset_requirement | 将每项实际外供原子产品关联到地域、技术、单位、运输废物门端适配的制造数据；披露每个缺失上游数据集 |
| disclosure | 声明实际场址、交付规格、A4/A5工序覆盖、A1–A3关联、临时设施、外包工程、排除项及后续阶段遗漏 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commercial_entity_boundary | dataset | 从交付建筑登记中区分独立土木网络、跑道道路及多栋共享工程。实际交付时纳入可归属前场车库工程、固定燃料装置及装卸接口；交付后的租户施工明确排为后续装修。仅外壳状态、混合用途及保留既有部分须显式声明，不隐藏为完整装修商业交付。 | un-cpc-3-53122; jrc-levels-boq-2021; epa-ust-installation |
| boundary_delivery | all inventory rows | 纳入截至验收的实际基础、结构、围护、规定固定设施、施工试验公用工程和废物。工序划分活动而非部分产品。每种额外安装产品及实际交换分别列行；所列路线选项不是可互换占位。 | jrc-levels-boq-2021; rics-wlca-2024 |
| boundary_consumed_inputs | 永久供货或消耗材料总成；排除可复用资产制造 | 局部安装、交付、调试或竣工配置措辞限定目标路线配置及验收证据，不排除在实际尝试安装、损坏、拒收报废或验收前替换中消耗的可归属材料总成。各原生单位消耗投入=可归属总收货+期初库存−经核实退回或转移−期末可用库存。保留真实供货身份配置与总成内含范围，失败替换件按自身身份追溯，不套用最终替换件身份。安装验收与废物分别核对。经核实退回或可用余料排除消耗，但可归属运输搬运返工仍保留。本公式不计量可复用设备模板制造：实体退回转移或留在期末库存时仍保留第7节守恒全寿命使用份额，同一资产不同时计全额消耗与使用份额。 |  |
| boundary_stages | dataset | 分别识别材料制造、进场运输、现场安装、维护更新、运行、最终拆除及废物去向。A4和A5前景不等于完整A1–A5或全寿命覆盖。实际发生的初始拆除清理及废物须单独列清单。 | rics-wlca-2024 |
| boundary_double_count | site_utilities | 分别记录外购公用工程输入和现场直接排放。仅在所用背景燃料数据于燃烧前结束时加入现场柴油燃烧，避免重复上游排放。资源取水、降水转移、回流水及外运液废具有不同去向。 | rics-wlca-2024; epa-concrete-washout-2012 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| site | 场址核实与土方 | required | 始终核实活动覆盖；各交换以实际工程和声明路线为条件 | foreground_production | 每声明的参考流 |
| structure | 基础与结构施工 | required | 始终核实活动覆盖；各交换以实际工程和声明路线为条件 | foreground_production | 每声明的参考流 |
| envelope | 屋面与围护施工 | required | 始终核实活动覆盖；各交换以实际工程和声明路线为条件 | foreground_production | 每声明的参考流 |
| fitout | 固定系统与交付装修 | required | 始终核实活动覆盖；各交换以实际工程和声明路线为条件 | foreground_production | 每声明的参考流 |
| site_utilities | 现场机械、公用工程与直接排放 | required | 始终核实活动覆盖；各交换以实际工程和声明路线为条件 | foreground_production | 每声明的参考流 |
| waste_management | 施工废物分拣与移交 | required | 始终核实活动覆盖；各交换以实际工程和声明路线为条件 | foreground_production | 每声明的参考流 |
| delivery | 进场运输核算 | required | 始终核实活动覆盖；各交换以实际工程和声明路线为条件 | foreground_production | 每声明的参考流 |
| special_installation | 用途专属安装与核验 | conditional | 仅用于实际交付装卸站点或终端设备 | foreground_production | per declared reference flow |
| handover | 检验与实体交付 | required | 始终核实活动覆盖；各交换以实际工程和声明路线为条件 | foreground_production | 每声明的参考流 |

### 过程：场址核实与土方（`site`）

保留标明阶段的现场和供应商记录。路线特定交换若缺失须有不适用证据，额外实际交换须拆为独立物理身份。

#### 输入

##### 产品流

###### 地基垫层用碎石 （`granular_fill`）

仅在竣工地基使用该骨料时纳入；记录级配和来源。

- 选定流： 地基垫层用碎石
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_site采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_site`
- 来源： `jrc-levels-boq-2021`

##### 废物流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

#### 输出

##### 产品流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 废物流

###### 外运处置的未污染开挖矿质土 （`soil_export`）

仅在开挖土作为废物外运时纳入；实测并声明天然或松散体积，污染土和回用填土另列。

- 选定流： 外运处置的未污染开挖矿质土
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 采用cp_site采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_site`
- 来源： `rics-wlca-2024`

##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

### 过程：基础与结构施工（`structure`）

保留标明阶段的现场和供应商记录。路线特定交换若缺失须有不适用证据，额外实际交换须拆为独立物理身份。

#### 输入

##### 产品流

###### 浇筑前交付的预拌混凝土 （`ready_mix`）

仅用于外购预拌混凝土；采集配合比标识、强度和暴露等级、交付退货及泵送浇筑记录。不得将浇筑后的混凝土输出身份用作此输入。

- 选定流： 浇筑前交付的预拌混凝土
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 采用cp_structure采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_structure`
- 来源： `jrc-levels-boq-2021`

###### 钢筋 （`reinforcement`）

本选定身份仅适用于公开中文身份所述、以不规则卷材供应的实际非合金钢条材。记录牌号、来料卷材形态、实际调直和弯曲加工、供应商及领用、安装和退回质量。其他合金成分或直条、已切断弯曲条材须另行核实原子身份；不得将该卷材身份强配所有配筋路线。

- 选定流：非合金钢条材，不规则卷材 `4f1a1837-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_structure采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_structure`
- 来源： `jrc-levels-boq-2021`

###### 窑干针叶锯材 （`timber_frame`）

仅用于锯木厂门端的窑干针叶锯材，记录实测含水率、树种、等级及未浸渍状态。后续加工处理和进场运输分开；工程木材或浸渍产品须用其他身份。

- 选定流：窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_structure采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_structure`
- 来源： `jrc-levels-boq-2021`

###### 烧结砖 （`fired_brick`）

仅用于烧结黏土砌筑砖；声明规格、孔隙和供应商，不用于耐火砖或非烧结砌块。

- 选定流：烧结砖 `aedc2027-2154-4b0e-95fd-9baeb46d4153`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_structure采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_structure`
- 来源： `jrc-levels-boq-2021`

###### 加工成型的结构钢梁 （`steel_member`）

仅在实际安装时纳入；声明加工涂层状态及牌号，钢梁不能代替钢筋。

- 选定流： 加工成型的结构钢梁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_structure采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_structure`
- 来源： `jrc-levels-boq-2021`

###### 水泥砂砌筑砂浆 （`masonry_mortar`）

仅用于外供砌筑砂浆；记录实际组成和含水状态。现场拌制时须将水泥、砂、水及每种添加剂拆为独立输入，不再重复计入外购砂浆。

- 选定流： 水泥砂砌筑砂浆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_structure采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_structure`
- 来源： `jrc-levels-boq-2021`

###### 胶合板模板 （`plywood_formwork`）

仅在使用胶合板模板时纳入；记录铺设面积及实际周转历史，计入有记录支持的供给份额，不设默认周转次数。

- 选定流： 胶合板模板
- 流属性/单位： 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则： 采用cp_structure采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_structure`
- 来源： `jrc-levels-boq-2021`

##### 废物流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

#### 输出

##### 产品流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 废物流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

### 过程：屋面与围护施工（`envelope`）

保留标明阶段的现场和供应商记录。路线特定交换若缺失须有不适用证据，额外实际交换须拆为独立物理身份。

#### 输入

##### 产品流

###### 热浸镀锌波纹钢板（`steel_cladding`）

仅在仓库、车库或其他建筑屋墙实际安装冷轧连续热浸镀锌波纹板、厚度0.25–2.5毫米时采用。记录牌号、镀层质量、厚度，紧固件另列；此身份不是夹芯板。

- 选定流： 镀锌波纹铁 `b302e292-860a-430a-9dc0-b95e89d4a63e`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_envelope采集实际交换数量，保留本行单位及可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_envelope`
- 来源： `jrc-levels-boq-2021`

###### 中空玻璃 （`glazing`）

仅用于匹配的成品中空玻璃单元；声明玻璃层构造、气体、涂层及厚度。公开单元在其供货范围内包括内部间隔框、干燥剂和密封组件，保留该组件边界且不得再次计入其部件。建筑外部窗框是不同构件，仅在实际供应商清单未包含时另行计数。

- 选定流：中空玻璃 `12053592-e6c4-4c56-ad15-a36a267c500a`
- 流属性/单位： 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则： 采用cp_envelope采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_envelope`
- 来源： `jrc-levels-boq-2021`

###### 成品铝窗框 （`window_frame`）

仅用于实际安装且供货玻璃或窗装置未含的建筑外部铝窗框；声明隔热构造、表面处理和尺寸。中空玻璃内部间隔框和光伏组件边框不适用。

- 选定流： 成品铝窗框
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_envelope采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_envelope`
- 来源： `jrc-levels-boq-2021`

###### 岩棉 （`rock_wool`）

仅用于实际构造中的岩棉保温；记录密度、厚度、粘结剂、覆面及性能规格。

- 选定流：岩矿棉 `3a298360-f298-4a11-999e-11943f142cec`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_envelope采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_envelope`
- 来源： `jrc-levels-boq-2021`

###### 沥青防水卷材 （`waterproofing`）

仅在安装沥青卷材时纳入；声明粘结料来源、胎基、厚度及铺设方法，不假定其他卷材具有相同组成。

- 选定流：沥青基防水卷材 `78f09f81-deb9-42dd-9418-7860faee0a2e`
- 流属性/单位： 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则： 采用cp_envelope采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_envelope`
- 来源： `jrc-levels-boq-2021`



##### 废物流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

#### 输出

##### 产品流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 废物流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

### 过程：固定系统与交付装修（`fitout`）

保留标明阶段的现场和供应商记录。路线特定交换若缺失须有不适用证据，额外实际交换须拆为独立物理身份。

#### 输入

##### 产品流

###### 完整乘客电梯装置（`passenger_lift`）

仅在交付调试时纳入；识别额定容量、提升高度、停层、驱动、轿厢、导轨、控制和门范围，安装能耗另列。升降机与扶梯的宽泛类别不能证明此完整装置。

- 选定流： 完整乘客电梯装置
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 采用cp_fitout采集实际交换数量，保留本行单位及可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_fitout`
- 来源： `jrc-levels-boq-2021`

###### 商业建筑空气处理机组（`air_handling`）

仅用于实际固定空气处理机组；记录设计及调试风量、过滤器、风机、盘管、控制和箱体范围。冷水机、风管和末端为独立身份。

- 选定流： 商业建筑空气处理机组
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 采用cp_fitout采集实际交换数量，保留本行单位及可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_fitout`
- 来源： `jrc-levels-boq-2021`

###### 镀锌钢通风风管（`steel_duct`）

仅在安装时纳入；记录截面、厚度、镀锌、保温及耐火依据。保温和风阀另列，除非精确声明供货装置已含。

- 选定流： 镀锌钢通风风管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_fitout采集实际交换数量，保留本行单位及可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_fitout`
- 来源： `jrc-levels-boq-2021`

###### 镀锌钢喷淋管（`sprinkler_pipe`）

仅在安装此实际消防管时纳入；记录直径、牌号、连接、压力试验及镀层。喷头、泵、阀另列；不规定通用消防系统设计。

- 选定流： 镀锌钢喷淋管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_fitout采集实际交换数量，保留本行单位及可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_fitout`
- 来源： `jrc-levels-boq-2021`

###### LED灯具（`led_fixture`）

仅用于交付的固定灯具；记录型号、功率、驱动器和外壳完整性。模块或驱动器本身不是完整灯具。

- 选定流： LED灯具
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 采用cp_fitout采集实际交换数量，保留本行单位及可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_fitout`
- 来源： `jrc-levels-boq-2021`

###### 石膏板 （`plasterboard`）

仅用于实际安装的石膏板；记录厚度、覆面、等级、面积和裁切损耗，保留公开面积属性。

- 选定流：石膏板 `3c6973a0-916b-4a04-923f-de0356448088`
- 流属性/单位： 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则： 采用cp_fitout采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_fitout`
- 来源： `jrc-levels-boq-2021`

###### 陶瓷砖 （`ceramic_floor`）

本选定身份仅适用于采用公开身份一次烧成、抛光路线且饰面匹配的实际室内陶瓷地砖。记录厚度、烧成和抛光路线、等级及安装条件。墙砖、其他饰面或室外应用须另行核实原子身份，不得直接采用该代理。铺贴砂浆或胶粘剂另列。

- 选定流：陶瓷地砖（一次烧成-抛光） `38191c2b-88f9-4b8d-9a1a-6b7b0b506169`
- 流属性/单位： 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则： 采用cp_fitout采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_fitout`
- 来源： `jrc-levels-boq-2021`

###### 水性丙烯酸建筑涂料 （`acrylic_paint`）

仅用于声明的建筑涂层；采集湿配方、固体含量、涂覆面积及实际施工，不能用美术颜料或紫外固化涂料身份替代。

- 选定流： 水性丙烯酸建筑涂料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_fitout采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_fitout`
- 来源： `jrc-levels-boq-2021`

###### 绝缘铜芯低压建筑电缆 （`copper_cable`）

仅用于竣工电气系统中的该电缆；记录导体截面、绝缘和电压，不将热值属性替换成质量。

- 选定流： 绝缘铜芯低压建筑电缆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_fitout采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_fitout`
- 来源： `jrc-levels-boq-2021`

###### UPVC管 （`upvc_pipe`）

仅用于实际硬聚氯乙烯管；声明直径、承压或排水用途、管件及相关饮用水适用性，UUID不证明批准。

- 选定流：UPVC管 `a343bef6-8d18-4594-b1aa-99bc47172684`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_fitout采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_fitout`
- 来源： `jrc-levels-boq-2021`




##### 废物流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

#### 输出

##### 产品流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 废物流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

### 过程：现场机械、公用工程与直接排放（`site_utilities`）

保留标明阶段的现场和供应商记录。路线特定交换若缺失须有不适用证据，额外实际交换须拆为独立物理身份。

#### 输入

##### 产品流

###### 交流电 （`lv_electricity`）

仅用于中国场址供电低于1千伏的用户端电网电力。采用实际电表和供电结构，其他地域电压须另用核验身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用cp_utilities采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_utilities`
- 来源： `rics-wlca-2024`

###### 交流电 （`mv_electricity`）

仅用于中国用户端1–35千伏的独立计量供电；变压器两侧读数不得重复计入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用cp_utilities采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_utilities`
- 来源： `rics-wlca-2024`

###### 柴油 （`site_diesel`）

仅用于施工机械实际燃烧的石油柴油。采用实测燃料和批次净热值，保留该公开净热值属性，范围不同的燃料须另核身份。记录实际化石比例及硫含量；含生物质时须分开碳来源，不能全赋为化石碳。

- 选定流：柴油 `fbd79004-188c-47a4-900b-96005d994690`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用cp_utilities采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_utilities`
- 来源： `rics-wlca-2024`

###### 供应到场址的处理后自来水 （`supplied_water`）

仅用于施工、养护、抑尘或试验使用的外购自来水；记录供水和水表，不再把上游取水计为现场直接取水。

- 选定流： 供应到场址的处理后自来水
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 采用cp_utilities采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_utilities`
- 来源： `rics-wlca-2024`

##### 废物流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 基本流

###### 地下水 （`groundwater`）

仅在地下水从环境直接取入现场使用时纳入；记录含水层、位置和取水，降水排出须另行判断，不默认是消耗性使用。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 采用cp_environment采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_environment`
- 来源： `rics-wlca-2024`

###### 河水 （`riverwater`）

仅用于直接河水取水并记录来源和位置，不用于湖水、地下水或废水。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 采用cp_environment采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_environment`
- 来源： `rics-wlca-2024`

#### 输出

##### 产品流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 废物流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 基本流

###### 二氧化碳（化石源） （`diesel_co2`）

仅用于有记录的化石柴油燃烧即时排入空气、未指定子介质的排放；按实际燃料碳和氧化或适用实测数据量化，避免与含燃烧的背景过程重复。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_environment采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_environment`
- 来源： `rics-wlca-2024`

###### 一氧化氮 （`diesel_no`）

仅在有分物种的一氧化氮空气排放实测或与发动机工况控制系统匹配的依据时纳入；总氮氧化物不能直接赋给一氧化氮。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_environment采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_environment`
- 来源： `rics-wlca-2024`

###### 二氧化氮 （`diesel_no2`）

仅用于有独立依据的二氧化氮质量、即时空气排放及未指定子介质；一氧化氮、氧化亚氮及以二氧化氮当量计的氮氧化物均非本交换。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_environment采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_environment`
- 来源： `rics-wlca-2024`

###### 颗粒物（PM10） （`construction_pm10`）

仅用于实际土方、装卸、交通或机械有依据的PM10即时空气排放、未指定子介质。不得重复加入重叠粒径段。历史AP-42仅支持扬尘发生条件，不采用默认因子。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_environment采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_environment`
- 来源： `epa-construction-dust-2010`

### 过程：施工废物分拣与移交（`waste_management`）

保留标明阶段的现场和供应商记录。路线特定交换若缺失须有不适用证据，额外实际交换须拆为独立物理身份。

#### 输入

##### 产品流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 废物流


##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

#### 输出

##### 产品流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 废物流

###### 分拣的钢筋切割废料（`steel_scrap`）

仅在钢筋切割废料作为废物外出时纳入；记录合金、称重质量及接收者。出售可用钢筋是产品输出，混合拆除物不是本流。

- 选定流： 分拣的钢筋切割废料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_waste采集实际交换数量，保留本行单位及可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `rics-wlca-2024`

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

###### 硬化混凝土施工边角废料 （`concrete_waste`）

仅在混凝土废料外运至记录的处理时纳入；与湿洗出物和土分开。

- 选定流： 硬化混凝土施工边角废料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_waste采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `rics-wlca-2024`

###### 未处理锯材边角废料 （`timber_waste`）

仅用于未处理锯材废料；胶合、涂漆或防腐材须用不同条目和去向。

- 选定流： 未处理锯材边角废料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_waste采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `rics-wlca-2024`

###### 石膏板边角废料 （`gypsum_waste`）

仅用于分拣的石膏板废料；记录覆面、污染及实际去向。

- 选定流： 石膏板边角废料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_waste采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `rics-wlca-2024`

###### 瓦楞纸板包装废料 （`carton_waste`）

仅在实际收到并移除时纳入；核对供应商数据中包装的计入。

- 选定流： 瓦楞纸板包装废料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_waste采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `rics-wlca-2024`

###### 聚乙烯包装薄膜废料 （`film_waste`）

仅用于已识别的聚乙烯薄膜；其他聚合物和污染膜须另列。

- 选定流： 聚乙烯包装薄膜废料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_waste采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `rics-wlca-2024`

###### 收集外运处理的混凝土溜槽洗涤废水 （`concrete_washwater`）

仅在边界内清洗溜槽或泵并将液体外运处理时纳入；采集pH、悬浮物及去向，现场循环液是内部流。直接排放须另列实测组分和受纳介质。

- 选定流： 收集外运处理的混凝土溜槽洗涤废水
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 采用cp_waste采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源： `epa-concrete-washout-2012`

##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

### 过程：进场运输核算（`delivery`）

保留标明阶段的现场和供应商记录。路线特定交换若缺失须有不适用证据，额外实际交换须拆为独立物理身份。

#### 输入

##### 产品流

###### 货运卡车 （`road_freight`）

仅用于供应商门端数据未包含的实际进场公路运输；识别材料、车辆、路线、载荷、趟次和空载返程处理。废物外运与进场运输分开。

- 选定流：货车 `d55f1329-cd61-44c0-8000-9367d38d5634`
- 流属性/单位： 货物运输（质量乘距离） `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则： 采用cp_transport采集实际交换数量，保留本行单位和可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_transport`
- 来源： `rics-wlca-2024`

##### 废物流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

#### 输出

##### 产品流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 废物流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

### 过程：用途专属安装与核验（`special_installation`）

条件性过程：仅执行实际交付仓库、终端或站点专属安装。开挖回填记录于site，混凝土于structure，电水试验于site_utilities，每个装置单独记录；不虚构通用站点终端配方。

#### 输入

##### 产品流

###### 液压装卸平台调节板（`dock_leveller`）

仅用于实际安装的仓库或终端装卸接口；记录平台几何、载荷规格及安装执行器控制范围。后续运营搬运车辆不纳入。

- 选定流： 液压装卸平台调节板
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 采用cp_special采集实际交换数量，保留本行单位及可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_special`
- 来源： `un-cpc-3-53122`

###### 双层钢制地下储油罐（`steel_fuel_tank`）

仅在此实际储罐是加油站交付部分时纳入；记录材料、容量、双层、防腐范围、位置和检查。玻璃纤维罐须另列，不能使用钢罐身份。开挖、回填及试验按实际施工计入。

- 选定流： 双层钢制地下储油罐
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 采用cp_special采集实际交换数量，保留本行单位及可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_special`
- 来源： `epa-ust-installation`

###### 双层聚乙烯地下输油管（`fuel_pipe`）

仅用于此实际材料和包容构造；记录层次、长度、内径、接头及安装泄漏检测范围。钢管和其他聚合物须另列。材料身份不证明输油批准。

- 选定流： 双层聚乙烯地下输油管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 采用cp_special采集实际交换数量，保留本行单位及可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_special`
- 来源： `epa-ust-installation`

###### 完整车用燃油加油机（`fuel_dispenser`）

仅用于安装的加油站加油设备；声明计量、泵、软管、电气及底部包容范围和试验记录。交付后出售燃料不是施工输入；测试燃料和实际蒸气排放须另增物质特定行。

- 选定流： 完整车用燃油加油机
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 采用cp_special采集实际交换数量，保留本行单位及可归属于本工程的范围。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_special`
- 来源： `epa-ust-installation`

##### 废物流

实际废物逐项记录于waste_management。

##### 基本流

不默认通用燃油蒸气或泄漏交换；按实际物质、受纳介质及实测依据增列。

#### 输出

##### 产品流

安装装置是整栋参考建筑的内部部分，不重复列为最终参考输出。

##### 废物流

实际分拣安装废物记录于waste_management。

##### 基本流

实测试验排放须有特定物质，且仅于site_utilities记录一次。

### 过程：检验与实体交付（`handover`）

保留标明阶段的现场和供应商记录。路线特定交换若缺失须有不适用证据，额外实际交换须拆为独立物理身份。

#### 输入

##### 产品流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 废物流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

#### 输出

##### 产品流

###### 竣工交付的商业建筑 （`reference_building`）

声明场址的一栋验收商业建筑，含实际外壳、交付固定系统及声明室外工程；租户单元和楼层仍属于同一栋建筑。

- 选定流： 竣工交付的商业建筑
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 1 件
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每声明的参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_acceptance`
- 来源： `un-cpc-3-53122`

##### 废物流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

##### 基本流

本组不规定普遍必然发生的交换；如有实际交换则分别记录。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| attribution | shared site activities | 优先使用工程专用计量和工作包细分。若活动服务多栋建筑，按cp_joint记录实测机械工时、材料领用或其他因果驱动量、全部受益对象及闲置负荷。面积或价格比例并非默认物理关系。 | ghg-allocation-2011 |
| actual_coproduct | exported useful outputs | 按实际状态和去向区分出售产品、回用土及废物。通过细分避免分配；余下共产品须论证物理关系，无法确立时记录其他分配及敏感性。不自动给与避免材料负荷信用。 | ghg-allocation-2011 |
| temporary_reuse | temporary works | 保留本验收建筑的施工及返工不合格材料负荷。临时模板设备共享采用实际使用和周转记录，并披露未来回用不确定性，不虚构寿命或次数。本门端外的废物处理及回收分别报告。 | rics-wlca-2024 |
| `asset_share_conservation` | reusable formwork, components and equipment | 逐资产维护覆盖全部项目和期间的制造负担账。实测工程使用时间或使用量仅为分子，分母须为有依据的寿命累计服务活动，或经论证且具有敏感性与后续核对的预测。全部项目和期间累计制造份额不得超过一。按观察期间分配时只能分配已归属该期间的制造份额，不能每期重新投入整件资产制造负担。寿命或服务分母未知时保留未解决审查，不给默认值。制造负担实质相关时须纳入；租赁发票本身不证明生命周期覆盖。 | `ghg-allocation-2011`; `rics-wlca-2024` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_site | site | 逐行实际交换 | foreground_records | 开挖体积、土状态、级配、场址条件及外供填料重量 ；存在外供材料总成时：按身份记录总收货、期初期末可用库存、经核实退回转移、实际消耗的损坏拒收替换及独立安装验收量 | 施工前后测绘并保留经校准的地磅交付记录、污染检测及去向凭证；天然与松散体积分开  对外供材料总成投入量应用boundary_consumed_inputs，保留失败替换消耗及独立验收废物记录；可复用资产制造仍单独按守恒份额计算。 | 逐行kg、m3、m2、MJ、item、t*km | 每次交付、工作包事件和计量期间；每次验收 | 完整实际施工期至验收；保留起止日期和未计量时段 | 声明场址及归属于此整栋建筑的全部分包工程 | 每声明的参考流 | 校准、原始凭证、图纸、签署检查、不确定性及核对 |
| cp_structure | structure | 逐行实际交换 | foreground_records | 每种构件材料身份、牌号、几何、含水率、交付退回安装及临时模板使用 ；存在外供材料总成时：按身份记录总收货、期初期末可用库存、经核实退回转移、实际消耗的损坏拒收替换及独立安装验收量 | 将竣工图和工作包领退料与供货凭证核对；采用实际预拌体积及实测钢筋木材质量；保留养护、泵送、吊装及临时工程记录  对外供材料总成投入量应用boundary_consumed_inputs，保留失败替换消耗及独立验收废物记录；可复用资产制造仍单独按守恒份额计算。 | 逐行kg、m3、m2、MJ、item、t*km | 每次交付、工作包事件和计量期间；每次验收 | 完整实际施工期至验收；保留起止日期和未计量时段 | 声明场址及归属于此整栋建筑的全部分包工程 | 每声明的参考流 | 校准、原始凭证、图纸、签署检查、不确定性及核对 |
| cp_envelope | envelope | 逐行实际交换 | foreground_records | 屋墙构造；逐层数量单位；玻璃面积、窗框质量、厚度、密度、门数量和损耗 ；存在外供材料总成时：按身份记录总收货、期初期末可用库存、经核实退回转移、实际消耗的损坏拒收替换及独立安装验收量 | 测量安装尺寸并核对实测收退货及竣工明细；不按假定密度推断保温质量  对外供材料总成投入量应用boundary_consumed_inputs，保留失败替换消耗及独立验收废物记录；可复用资产制造仍单独按守恒份额计算。 | 逐行kg、m3、m2、MJ、item、t*km | 每次交付、工作包事件和计量期间；每次验收 | 完整实际施工期至验收；保留起止日期和未计量时段 | 声明场址及归属于此整栋建筑的全部分包工程 | 每声明的参考流 | 校准、原始凭证、图纸、签署检查、不确定性及核对 |
| cp_fitout | fitout | 逐行实际交换 | foreground_records | 每项固定设施、产品状态、面积质量数量、型号、容量、制冷剂充注及调试记录 ；存在外供材料总成时：按身份记录总收货、期初期末可用库存、经核实退回转移、实际消耗的损坏拒收替换及独立安装验收量 | 使用实测领退料、安装明细及调试依据；实际使用的管件、胶粘剂、紧固件、风管和电气保护分别列出  对外供材料总成投入量应用boundary_consumed_inputs，保留失败替换消耗及独立验收废物记录；可复用资产制造仍单独按守恒份额计算。 | 逐行kg、m3、m2、MJ、item、t*km | 每次交付、工作包事件和计量期间；每次验收 | 完整实际施工期至验收；保留起止日期和未计量时段 | 声明场址及归属于此整栋建筑的全部分包工程 | 每声明的参考流 | 校准、原始凭证、图纸、签署检查、不确定性及核对 |
| cp_utilities | site_utilities | 逐行实际交换 | foreground_records | 电表起止、期间、单位、供应地域电压、燃料收货余量、密度、批次净热值和设备工况 | 使用经校准的工程分表、燃料存量核对和供应商检测热值记录；含临时驻地、吊机、泵、养护及试验；声明场外及租赁设备计入 | 逐行kg、m3、m2、MJ、item、t*km | 每次交付、工作包事件和计量期间；每次验收 | 完整实际施工期至验收；保留起止日期和未计量时段 | 声明场址及归属于此整栋建筑的全部分包工程 | 每声明的参考流 | 校准、原始凭证、图纸、签署检查、不确定性及核对 |
| cp_environment | site_utilities | 逐行实际交换 | foreground_records | 物质及CAS、化石来源、介质子介质、粒径、浓度、流率、实测期间、设备状态、水源和位置 | 采用现场监测或有完整适用依据的发动机工序模型及实际活动。须有分物种结果，以NO2计的NOx不是分物种NO2。记录抑尘、天气和含水状态；直接取水采用校准进水计量。实际土地占用、降水、噪声及其他释放另留证据，量化时增加独立原子行；无支持类别保留明确缺口 | 逐行kg、m3、m2、MJ、item、t*km | 每次交付、工作包事件和计量期间；每次验收 | 完整实际施工期至验收；保留起止日期和未计量时段 | 声明场址及归属于此整栋建筑的全部分包工程 | 每声明的参考流 | 校准、原始凭证、图纸、签署检查、不确定性及核对 |
| cp_waste | waste_management | 逐行实际交换 | foreground_records | 废物组成、分拣、干湿状态、体积质量、洗出水pH固体、去向、实际处理及运输 | 分别采用称重移交凭证及液罐水表读数；核实接收者及处理，区分内部循环洗水、混凝土固体、外运废水及直接排放组分 | 逐行kg、m3、m2、MJ、item、t*km | 每次交付、工作包事件和计量期间；每次验收 | 完整实际施工期至验收；保留起止日期和未计量时段 | 声明场址及归属于此整栋建筑的全部分包工程 | 每声明的参考流 | 校准、原始凭证、图纸、签署检查、不确定性及核对 |
| cp_transport | delivery | 逐行实际交换 | foreground_records | 货物身份、实际质量、起终点、逐段路线距离、卡车载荷类型、空载返程及供应商门端 | 按真实运单、称重载荷和记录路线逐段计算吨公里；保留货物分配及装载条件，不重复产品数据已含运输 | 逐行kg、m3、m2、MJ、item、t*km | 每次交付、工作包事件和计量期间；每次验收 | 完整实际施工期至验收；保留起止日期和未计量时段 | 声明场址及归属于此整栋建筑的全部分包工程 | 每声明的参考流 | 校准、原始凭证、图纸、签署检查、不确定性及核对 |
| cp_special | special_installation | 用途专属安装原子交换 | foreground_records | 设备标识供货门端数量质量、罐材料容量、管组成长度、平台尺寸、包容、试验活动结果和安装验收 ；存在外供材料总成时：按身份记录总收货、期初期末可用库存、经核实退回转移、实际消耗的损坏拒收替换及独立安装验收量 | 检查竣工明细及供应商记录；实际罐安放回填、管连接、加油机及包容安装与试验签署交付核对。保留逐构件边界及分测测试能水废物，不推定通用设计或本地合规认证  对外供材料总成投入量应用boundary_consumed_inputs，保留失败替换消耗及独立验收废物记录；可复用资产制造仍单独按守恒份额计算。 | row-specific item, kg, m3, MJ | 每次安装调试 | 完整实际施工期至交付 | 声明整栋建筑及可归属站点终端室外工程 | 每声明的参考流 | 供应商规格、试验记录、竣工检查及实测不确定性 |
| cp_acceptance | handover | 逐行实际交换 | foreground_records | 建筑工程标识；场址；实际商业用途；租户区域；实测总建筑、内部、使用面积及定义；层数、高度、占地；结构围护范围；安装系统及调试容量；试验交付签署 | 对照竣工图、系统调试和签署交付检查整栋竣工建筑；确认一栋交付建筑、实际商业用途和实测总建筑、内部及使用面积；按用途核实加油站储罐容量、终端功能、仓库存储或车库停车配置。试验水能耗排放废物依对应现场协议采集 | item; m2 | 每次交付、工作包事件和计量期间；每次验收 | 完整实际施工期至验收；保留起止日期和未计量时段 | 声明场址及归属于此整栋建筑的全部分包工程 | 每声明的参考流 | 校准、原始凭证、图纸、签署检查、不确定性及核对 |
| cp_joint | site_utilities | 逐行实际交换 | foreground_records | 资产标识；制造边界；跨项目期间完整使用历史；有依据寿命服务量或论证预测；当前分子；累计份额及余额；敏感性及后续核对 | 细分直接计量活动；维护完整资产制造份额账、核验分母、期间归属份额及累计余额。不按期间重置制造，服务分母未知须审查。 | 逐行kg、m3、m2、MJ、item、t*km | 每次交付、工作包事件和计量期间；每次验收 | 完整实际施工期至验收；保留起止日期和未计量时段 | 声明场址及归属于此整栋建筑的全部分包工程 | 每声明的参考流 | 校准、原始凭证、图纸、签署检查、不确定性及核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| project_reconciliation | all inventory rows | 以本行单位保留每声明的参考流直接归属总量。逐产品核对收货、退货、余料、安装量和外运废物，披露内部循环及试验消耗。不设默认产率、废物比例或面积质量因子。  对永久供货或实际消耗材料总成应用boundary_consumed_inputs，按真实原生单位纳入验收前损失及替换；安装验收不是消耗分子。可复用资产制造保留在单独累计份额台账。 | cp_site; cp_structure; cp_envelope; cp_fitout; cp_utilities; cp_waste; cp_special; cp_acceptance | 每声明的参考流有记录交换总量 | jrc-levels-boq-2021 |
| unit_preservation | lv_electricity; mv_electricity; site_diesel; road_freight | 保留一栋建筑参考量；仅对分子单位应用energy_identity和transport_basis。原值及换算证据随数据集保留。可补充报告每栋面积，不静默替换本参考流。 | cp_utilities; cp_transport | 每声明的参考流MJ或吨公里 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| physical_completeness | dataset | 整栋建筑身份、实际面积及交付系统须与图纸验收一致。缺失固定设施和室外工程须逐项命名并披露影响，代表路线条目本身不足以证明完整。 | cp_acceptance; jrc-levels-boq-2021 |
| measurement_quality | all inventory rows | 保留经校准读数、可追溯供货废物记录、不确定性、日期及准确门端。估计须标明方法适用性和敏感性，缺失未测绝非数值零。 | all collection protocols |
| environment_scope | site_utilities | 须核对CAS化学身份、化石生物来源、即时长期和介质子介质。仅量化实际排放，分别审阅NO与NO2，并披露缺失粒径、水排放组分、土地和噪声覆盖。 | cp_environment |
| source_compatibility | upstream links | 匹配技术、地域、实际产品等级、含水状态和单位。保留公开UUID参考属性及单位组；精确身份未解决时留空直至核验。 | supplier records; identity and unit evidence |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commercial_system_completeness | dataset | 逐工作包核对供货安装范围：仓库货架装卸、商场扶梯店铺装修、办公机电、终端固定旅客行李设备、车库通风排水及加油站罐管检测包容按实际交付纳入；仅安装实际存在的系统。其他冷水机、风机、泵、阀、喷头、配电安防通信设备、卫浴、紧固件、胶粘剂和保护层，仅在实际独立采购或前景边界内制造时逐产品增列原子行。完整供货机组已包含的组件，如空气处理机组内的风机或完整加油机内的泵，以规格及供应商清单覆盖证据核对，不重复增加组件交换或上游制造负担；保留实际安装活动及独立采购的替换件或追加件。缺失这些实际系统时不得声称完整；运营车辆商品及售油排除。 | jrc-levels-boq-2021; un-cpc-3-53122; epa-ust-installation |
| validate_scope | dataset | 拒绝缺失商业用途、场址几何交付状态、类别不适用、建材包替代或施工服务参考；须有整栋验收及全部限定信息。 | un-cpc-3-53122 |
| validate_inventory | all inventory rows | 逐交换检查单一物理化学身份、本行单位、路线适用性、工程分母、每个关联协议及双语一致性。分阶段公用工程废物核对至实际记录，未解决身份是缺口而非允许选择近似名称。 |  |
| validate_stage_claim | dataset | 声称覆盖前核验A1–A3数据关联、A4运输和A5实际工程。遗漏运行更新拆除回收时不能声明全寿命；后续情景须有新的来源支持期间及路线。PCR投影通过不代表科学或法规批准。 | rics-wlca-2024 |
| validate_environment | site_utilities | 须有直接释放依据且与燃烧废物处理背景数据不重叠。检查NO物种、颗粒物分段、化石碳及水去向；所需测量未解决时不能声称数据集完整。 | epa-construction-dust-2010; epa-concrete-washout-2012 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明整栋建筑施工交付清单；仅关联核验的适配上游门端；仅在商业功能、实测几何、交付系统、性能和边界匹配时比较 |
| excluded_use | 全寿命宣称、默认服务年性能、全国代表材料配方、法律入住批准、施工服务足迹、通用kg或m2换算 |
| required_metadata | 全部参考限定信息；阶段化场址承包商记录；实际交付范围；面积方法；供货门端；分配；声明数量属性单位引用 |
| required_quality_disclosure | 时间地域技术代表性、缺失上游数据、未解决身份、测量估计、未计量时段、环境缺口、后续阶段排除及科学审查状态 |
| update_trigger | 商业用途、租户配置、结构、场址、实际尺寸、交付装修、供应链、实测清单或证据身份状态改变 |

## 11. 数据源

| source_id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-53122 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, PDF/printed p.278, subclass 53122; adjacent 53121 p.277 and 53129/532 p.278. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整商业建筑分类及与住宅工业其他非住宅土木产品的区分；不提供施工配方。 |
| jrc-levels-boq-2021 | official_guidance | European Commission JRC, Level(s) indicator 2.1, publication v1.1, January 2021, printed/PDF pp.16 and 23–24, Table 2. https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2021-01/UM3_Indicator_2.1_v1.1_34pp.pdf | 建筑构件覆盖及竣工工程量依据；不采用数值材料足迹或寿命。 |
| rics-wlca-2024 | standard | RICS, Whole life carbon assessment for the built environment, 2nd edition, version 3 August 2024, sections 2.1, 4.5 and 5.1.4, printed pp.18–20,45–47,80–84. https://www.rics.org/content/dam/ricsglobal/documents/standards/Whole_life_carbon_assessment_PS_Sept23.pdf. | 生命周期阶段区分及实际施工证据；有限使用指导，不声明完整RICS符合性，不采用其默认费率或因子。 |
| epa-construction-dust-2010 | official_guidance | US EPA AP-42 section 13.2.3 Heavy Construction Operations, January 1995 corrected February 2010, printed p.13.2.3-1. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | 仅采用工序、含水状态与扬尘关系的历史定性事实，不作为现行通用排放因子。 |
| epa-concrete-washout-2012 | official_guidance | US EPA Stormwater Best Management Practice Concrete Washout, EPA-833-F-11-006 February 2012, PDF pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | 洗出液和固体去向区分；不代表地方许可或默认排放。 |
| ghg-allocation-2011 | official_guidance | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard 2011, chapter 9, printed p.63 / PDF p.65, Tables 9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 历史分配层级；现场因果关系仍需实测证据。 |
| epa-ust-installation | official_guidance | US EPA, Resources for UST Owners and Operators, Tank and Piping Installation section. https://www.epa.gov/ust/resources-ust-owners-and-operators | 定性安装活动：开挖位置装配回填整平、罐管加油机包容及安装核验。美国司法范围条件不作为通用设计或本地法律批准；实际制造商场址指令决定构造。 |
