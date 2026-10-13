---
pcr_id: pcr.constructions-and-construction-services.constructions.multi-dwelling-and-community-building-delivery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 多户与共同居住住宅建筑交付

## 1. 范围与适用性

产品是实际场址交付的住宅建筑实体：三户及以上住宅，以及老人/学生住所、工人宿舍、孤儿院、无家可归者收容住所等共同居住住宅。共同居住设施按居住功能纳入，不虚构三个独立住宅单元。医院、酒店、建筑服务及散装构件不属于本类别；混合用途须证明适用性并识别各自范围。不要求统一结构、高度、电梯、厨房或护理设备。

前景包括实际场地准备、基础/结构、围护、声明的固定安装和装修、现场物流、测试及验收。区分完整交付、结构与核心系统交付以及其他交付状态。整栋核算包括合同交付的共同通行、楼梯、核心筒、真实中央系统和群体居住空间。上游建材制造单独链接，交付运输与现场施工分别识别。运营公用消耗、日后实际维护/更新、拆除及最终废物去向属于被排除的后续阶段，不隐含默认寿命。施工清单本身不构成完整 cradle-to-gate 或全寿命评价。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.multi-dwelling-and-community-building-delivery |
| classification_refs | CPC 3.0 53112 |
| covered_products | 交付的多户住宅与共同居住住宅建筑，包括声明的全部专有/共同固定工程 |
| excluded_products | 一户/两户住宅；非住宅机构；酒店；移动住所；施工/改造服务；散装材料及设备 |
| representative_product | 一栋实测住宅建筑，附真实住宅单元/房间/容量明细与共同设施 |
| production_route | 实际砌体、混凝土、钢、木或混合建造；明确现场与预制数据门，不规定通用配方 |
| market_state | 签署实物交付状态的不可移动住宅资产 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于有记录住宅/共同居住用途的交付建筑实体 |
| How much | 一栋完整建筑；真实户/房间数量、居住容量、建筑内部总面积、专有居住面积、共同通行/设施面积、占地、层数和尺寸 |
| How well | 竣工结构/围护规格、专有/共同安装、项目要求的无障碍/消防/服务性能及检查记录；不推断法定批准 |
| How long or cycle | 一个施工与验收交付周期；不默认寿命或住户年。后续服务比较须有证据支持的期间和情景 |
| reference_flow_link | reference_building |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 竣工交付的多户或共同居住住宅建筑 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 项目/场址；居住用途；户/房间数量及真实容量；测量方法和面积分项；结构/基础及地质；高度/层数；竣工材料；专有/共同交付完整性；中央设备容量及服务分区；无障碍/消防验收记录；共用地下室/场地归属；日期；上游及 A4/A5 覆盖；排除的后续阶段 |

item 表示公开 Item(s) 单位：一栋建筑，而非一户或一名住户。真实数据集必须具备所有限定信息。建筑面积为实测几何描述，不是假设居住功能换算。名称相符的公开类别使用质量属性，尚无本建筑质量至数量的证据，故参考 UUID 未解决。不得改写公开属性或编造建筑质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | reference product | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 按 cp_handover 记录一栋真实验收整栋建筑。所有交换使用相同声明参考流；住户数量不得倍增共同结构负担。 |
| geometry | reference product | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 按 cp_geometry 采集测量定义及专有/共同/服务面积分项。核对纳入楼层面积且不重复计算走廊；区分占地、内部总面积和可用面积。面积报告是补充结果，不能表示住宅功能相等。 |
| energy | lv_electricity; mv_electricity; site_diesel | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留真实净热值属性及参考能量单位。计量电力 kWh 乘 3.6 转 MJ；燃料须有真实批次净热值和实测质量/密度。不默认燃料因子。 |
| physical_quantities | all inventory rows | 真实行参考属性 | 行单位 | 保留每项实测质量、面积、体积、件数或运输量的真实属性。换算须有材料实测、厚度/密度及物理状态证据；土或洗涤废水体积不表示抽取水资源。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 有记录的初始场地与供应产品门，包括真实先期工程及保留结构 |
| starting_condition_role | foreground_start |
| product_classification_scope | 多户及共同居住住宅建筑实体 |
| recursive_input_rule | 保留/复用的同类别结构为单独识别的既有资产输入，声明负担及状态，不作为第二个新整栋输出 |
| upstream_dataset_requirement | 每项真实供应原子材料/构件链接到单位/状态/数据门相容的制造证据；识别缺失供应商/背景覆盖 |
| disclosure | 分别披露上游制造、进场运输、现场施工、如有的初始拆除、废物去向及排除的使用/维护/最终拆除；声明共同/场地工程归属 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_delivery | all inventory rows | 核算交付整栋实体及结构、核心系统、专有与共同工程中每项实际交换。条件行是最低检查提示，不是封闭通用材料表。真实存在的屋面面材、装置、楼梯、外部工程、供热/制冷设备、共同厨房、安防/消防系统及具体材料须增加独立原子行。不默换或遗漏路线。 | jrc-levels-boq-2021; rics-wlca-2024 |
| boundary_consumed_inputs | 永久供货或消耗材料总成；排除可复用资产制造 | 局部安装、交付、调试或竣工配置措辞限定目标路线配置及验收证据，不排除在实际尝试安装、损坏、拒收报废或验收前替换中消耗的可归属材料总成。各原生单位消耗投入=可归属总收货+期初库存−经核实退回或转移−期末可用库存。保留真实供货身份配置与总成内含范围，失败替换件按自身身份追溯，不套用最终替换件身份。安装验收与废物分别核对。经核实退回或可用余料排除消耗，但可归属运输搬运返工仍保留。本公式不计量可复用设备模板制造：实体退回转移或留在期末库存时仍保留第7节守恒全寿命使用份额，同一资产不同时计全额消耗与使用份额。 |  |
| boundary_stages | dataset | 安装设备/材料制造归上游；装配、吊装、现场调理、压力试验和调试归前景。运营、日后真实维护/更新和最终拆除为另定范围后续阶段。实际初始拆除与清理为施工先期活动，不是未来拆除。披露缺失 A1–A3/A4/A5 覆盖。 | rics-wlca-2024 |
| boundary_common | common_facilities | 整栋账本包括真实共同楼梯、核心筒、设备房及共同居住设施，即使另行承包。识别中央系统与服务分区。共用地下室的连接建筑须先建立联合评价账本，再归属各栋份额；披露母评价与守恒。不得以不属于专有住宅面积为由排除全部共同工程。  对永久共同设施的外供投入，局部安装或调试措辞限定目标配置路线，不以成功安装作为计入制造的条件。按cp_common_facilities纳入可归属验收前损坏、报废拒收品、切割损耗及替换消耗；经核实退回及可复用未用库存不计消耗投入。原生单位投入=可归属总收货+期初库存−经核实退回或转移−期末可用库存。安装验收量与真实废物作为独立核对记录。本消耗公式排除可复用临时设备模板制造，后者保留allocation_reuse的全寿命份额。 | rics-wlca-2024 |
| boundary_releases | site_utilities | 技术圈供水与自然资源取水分开；按去向与化学状态跟踪降水回流。洗涤液/固体不是淡水。真实尾气/扬尘/排水须有排放证据才列入；施工噪声依真实设备/受体/时段证据评价，披露表征缺口，不编造质量流。 | epa-concrete-washout-2012; epa-construction-dust-2010 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| groundworks | 场地准备与土方 | required | 检查真实工程包完整性；每项交换按真实发生条件纳入 | foreground_production | 每参考流 |
| structure | 基础、承重结构与通行核心筒 | required | 检查真实工程包完整性；每项交换按真实发生条件纳入 | foreground_production | 每参考流 |
| enclosure | 屋面与围护安装 | required | 检查真实工程包完整性；每项交换按真实发生条件纳入 | foreground_production | 每参考流 |
| fitout | 户内与共同居住室内装修 | required | 检查真实工程包完整性；每项交换按真实发生条件纳入 | foreground_production | 每参考流 |
| fixed_systems | 固定分配管线系统 | required | 检查真实工程包完整性；每项交换按真实发生条件纳入 | foreground_production | 每参考流 |
| common_facilities | 共同与群体居住设施安装 | conditional | 交付规格包含真实共同/群体居住安装时 | foreground_production | 每参考流 |
| site_utilities | 现场机械、水与直接排放 | required | 检查真实工程包完整性；每项交换按真实发生条件纳入 | foreground_production | 每参考流 |
| waste_transfer | 废物分选与转移 | required | 检查真实工程包完整性；每项交换按真实发生条件纳入 | foreground_production | 每参考流 |
| inbound_delivery | 进场交付运输核算 | required | 检查真实工程包完整性；每项交换按真实发生条件纳入 | foreground_production | 每参考流 |
| handover | 检查、调试与验收交付 | required | 检查真实工程包完整性；每项交换按真实发生条件纳入 | foreground_production | 每参考流 |

### 过程：场地准备与土方（`groundworks`）

将本工程包与图纸、领退记录及分包记录核对；跨工程包公用消耗在 site_utilities 中仅计一次并保留归属证据。活动不存在时记录不适用证据，不虚构数量。

#### 输入

##### 产品流

###### 地基垫层用碎石 （`granular_fill`）

仅在铺设碎石垫层时纳入；记录级配、压实尺寸和到货/退货质量。不得以砂或开挖土代替。

- 选定流：地基垫层用碎石
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_groundworks 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_groundworks`
- 来源：`jrc-levels-boq-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 外运处置的未污染开挖矿质土 （`soil_export`）

仅在未污染开挖矿质土作为废物外运时纳入；测量原状与松散体积，记录去向和污染检验。场内回用土为内部转移。

- 选定流：外运处置的未污染开挖矿质土
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_groundworks 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_groundworks`
- 来源：`rics-wlca-2024`

##### 基本流

### 过程：基础、承重结构与通行核心筒（`structure`）

将本工程包与图纸、领退记录及分包记录核对；跨工程包公用消耗在 site_utilities 中仅计一次并保留归属证据。活动不存在时记录不适用证据，不虚构数量。

#### 输入

##### 产品流

###### 浇筑前交付的预拌混凝土 （`ready_mix`）

仅用于实际外购的新拌预拌混凝土。记录强度/环境类别、坍落度、批次、票据体积、拒收退料、泵送、浇筑及养护。现场拌制须依真实配合记录增加水泥、骨料、外加剂和水的独立行。

- 选定流：浇筑前交付的预拌混凝土
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_structure 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_structure`
- 来源：`jrc-levels-boq-2021`

###### 非合金钢条材，不规则卷材 （`reinforcement`）

仅用于匹配公开身份、以不规则卷材供应的实际非合金钢筋。记录牌号、来料卷材形态、直径、实际调直/弯曲/切断、到货退回净质量及专有/共同部位竣工位置。其他合金成分、直条或已切断弯曲供货及预制钢筋笼须另核身份；不得把该卷材身份强配所有配筋。

- 选定流：非合金钢条材，不规则卷材 `4f1a1837-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_structure 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_structure`
- 来源：`jrc-levels-boq-2021`

###### 窑干锯材（针叶材） （`timber_frame`）

仅用于符合出厂供应身份的窑干针叶锯材构件。记录树种、等级、含水率和处理；工程木及处理构件须另列。纳入实际出厂后运输。

- 选定流：窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_structure 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_structure`
- 来源：`jrc-levels-boq-2021`

###### 加工成型的结构钢梁 （`steel_member`）

仅纳入实际安装的加工结构钢梁；记录牌号、加工/涂层状态和构件明细，不得以钢筋替代。

- 选定流：加工成型的结构钢梁
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_structure 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_structure`
- 来源：`jrc-levels-boq-2021`

###### 烧结砖 （`fired_brick`）

仅用于实际烧结粘土砖砌体；记录孔隙、尺寸、砂浆灰缝及安装位置。该身份不表示土坯或混凝土砌块。

- 选定流：烧结砖 `aedc2027-2154-4b0e-95fd-9baeb46d4153`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_structure 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_structure`
- 来源：`jrc-levels-boq-2021`

###### 水泥砂砌筑砂浆 （`masonry_mortar`）

仅在消耗水泥砂浆时纳入；保留实际湿/干状态、供应商或称量配料记录。不得规定通用砂浆配比。

- 选定流：水泥砂砌筑砂浆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_structure 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_structure`
- 来源：`jrc-levels-boq-2021`

###### 胶合板模板 （`plywood_formwork`）

对于实际用作模板的胶合板，记录等级、厚度、板标识和使用面积；不得每次复用重计完整制造。按资产账本应用 allocation_reuse。

- 选定流：胶合板模板
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：采用 cp_structure 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_structure`
- 来源：`jrc-levels-boq-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：屋面与围护安装（`enclosure`）

将本工程包与图纸、领退记录及分包记录核对；跨工程包公用消耗在 site_utilities 中仅计一次并保留归属证据。活动不存在时记录不适用证据，不虚构数量。

#### 输入

##### 产品流

###### 中空玻璃 （`glazing`）

仅用于一致的实际双层玻璃配置；记录玻璃厚度、空腔、镀膜和洞口面积。供应中空玻璃单元包括其内部间隔框及密封；外窗框与现场密封/固定仅在该单元数据门之外时另列。不得重计单元内部构件，玻璃面积不代表完整立面。

- 选定流：中空玻璃 `12053592-e6c4-4c56-ad15-a36a267c500a`
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：采用 cp_enclosure 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_enclosure`
- 来源：`jrc-levels-boq-2021`

###### 岩矿棉 （`rock_wool`）

仅用于实际围护构造中与核验身份一致的岩棉，不表示玻璃棉或矿渣棉；记录密度、厚度、面层及防火/热工规格。不同化学组成保温材料须独立交换。

- 选定流：岩矿棉 `3a298360-f298-4a11-999e-11943f142cec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_enclosure 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_enclosure`
- 来源：`jrc-levels-boq-2021`

###### 沥青基防水卷材 （`waterproofing`）

仅用于实际铺设且匹配身份的沥青膜；记录层数、厚度和搭接。使用胶粘剂或底涂时须独立列入。

- 选定流：沥青基防水卷材 `78f09f81-deb9-42dd-9418-7860faee0a2e`
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：采用 cp_enclosure 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_enclosure`
- 来源：`jrc-levels-boq-2021`

###### 成品铝窗框 （`window_frame`）

仅用于实际安装的成品铝窗框；保留表面处理、型材、玻璃分离和实测质量。原铝不能表示成品窗框。

- 选定流：成品铝窗框
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_enclosure 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_enclosure`
- 来源：`jrc-levels-boq-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：户内与共同居住室内装修（`fitout`）

将本工程包与图纸、领退记录及分包记录核对；跨工程包公用消耗在 site_utilities 中仅计一次并保留归属证据。活动不存在时记录不适用证据，不虚构数量。

#### 输入

##### 产品流

###### 石膏板 （`plasterboard`）

仅用于户内、宿舍或共同隔墙/吊顶中一致的石膏板身份；记录厚度、面层和布置。龙骨及饰面须独立行。

- 选定流：石膏板 `3c6973a0-916b-4a04-923f-de0356448088`
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：采用 cp_fitout 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fitout`
- 来源：`jrc-levels-boq-2021`

###### 陶瓷地砖（一次烧成-抛光） （`ceramic_floor`）

仅用于实际专有/共同室内区域安装的核验一次烧成抛光陶瓷地砖；采集尺寸、厚度、切割损失和铺贴面积。铺贴砂浆与填缝料独立列入。

- 选定流：陶瓷地砖（一次烧成-抛光） `38191c2b-88f9-4b8d-9a1a-6b7b0b506169`
- 流属性/单位：面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：采用 cp_fitout 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fitout`
- 来源：`jrc-levels-boq-2021`

###### 水性丙烯酸建筑涂料 （`acrylic_paint`）

仅用于实际水性丙烯酸建筑涂料；记录湿产品质量及配方/固含信息。溶剂或颜料排放须有实测组分独立行，不采用通用 VOC 默认值。

- 选定流：水性丙烯酸建筑涂料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_fitout 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fitout`
- 来源：`jrc-levels-boq-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：固定分配管线系统（`fixed_systems`）

将本工程包与图纸、领退记录及分包记录核对；跨工程包公用消耗在 site_utilities 中仅计一次并保留归属证据。活动不存在时记录不适用证据，不虚构数量。

#### 输入

##### 产品流

###### 绝缘铜芯低压建筑电缆 （`copper_cable`）

仅用于实际安装且身份明确的绝缘铜低压电缆；记录绝缘化学组成、导体截面、长度和称量或供应商证明质量。后续核验适用公共身份时保留其真实参考属性。

- 选定流：绝缘铜芯低压建筑电缆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_fixed_systems 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fixed_systems`
- 来源：`jrc-levels-boq-2021`

###### UPVC管 （`upvc_pipe`）

仅用于实际中国施工材料供应门下的核验未增塑 PVC 管产品；采集直径、壁厚、压力/排水类别、接头、铺设长度和实际质量。给水与排水管网分别建立用途/位置账本。

- 选定流：UPVC管 `a343bef6-8d18-4594-b1aa-99bc47172684`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_fixed_systems 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fixed_systems`
- 来源：`jrc-levels-boq-2021`

###### 陶瓷坐便器 （`ceramic_toilet`）

仅在专有/共同卫生设施实际供应陶瓷坐便器时纳入。记录型号、冲洗接口、数量及交付完整性；供应门之外的水箱、座圈及配件另列。

- 选定流：陶瓷坐便器
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_fixed_systems 采集归属本项目的实际净消耗总成件数，包括验收前损坏、拒收后报废及替换件；合格安装件数另列并保留完整配置，不以质量替代件数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fixed_systems`
- 来源：`jrc-levels-boq-2021`

###### LED 灯具总成 （`led_luminaire`）

纳入为声明交付实际消耗的完整 LED 灯具，包括安装前报废的替换投入；记录驱动、外壳、光源是否包含及控制。调试电力归 site_utilities，不是全寿命照明能耗。

- 选定流：LED 灯具总成
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_fixed_systems 采集归属本项目的实际净消耗总成件数，包括验收前损坏、拒收后报废及替换件；合格安装件数另列并保留完整配置，不以质量替代件数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fixed_systems`
- 来源：`jrc-levels-boq-2021`

###### 空气源热泵机组 （`heat_pump`）

纳入交付合同内实际消耗的空气源机组，包括验收前损坏报废及替换投入；保留类型、供热/制冷容量、所含部件、制冷剂种类/充注量及调试。单独供应或实际释放制冷剂须按具体物质独立行；不默认泄漏或运营寿命。

- 选定流：空气源热泵机组
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_fixed_systems 采集归属本项目的实际净消耗总成件数，包括验收前损坏、拒收后报废及替换件；合格安装件数另列并保留完整配置，不以质量替代件数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fixed_systems`
- 来源：`jrc-levels-boq-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：共同与群体居住设施安装（`common_facilities`）

将本工程包与图纸、领退记录及分包记录核对；跨工程包公用消耗在 site_utilities 中仅计一次并保留归属证据。活动不存在时记录不适用证据，不虚构数量。

#### 输入

##### 产品流

###### 泵 （`water_booster`）

仅用于符合该通用液体泵身份的实际给水增压泵；记录厂家、类型、完整泵质量、电机是否包含、流量/扬程和服务分区。制造为上游，安装与调试为前景。

- 选定流：泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_common_facilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_common_facilities`
- 来源：`jrc-levels-boq-2021`

###### 完整乘客电梯总成 （`passenger_lift`）

仅在实际安装且属于交付规格时纳入；识别轿厢、驱动、控制器、导轨、门、服务楼层、额定容量及调试。不得推断每栋多户住宅必设电梯。

- 选定流：完整乘客电梯总成
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_common_facilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_common_facilities`
- 来源：`jrc-levels-boq-2021`

###### 机械通风风机总成 （`ventilation_fan`）

仅纳入实际安装的风机；保留容量、控制、服务房间和完整总成配置。风管、风阀与过滤器为独立产品，不默认含在裸风机内。

- 选定流：机械通风风机总成
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_common_facilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_common_facilities`
- 来源：`jrc-levels-boq-2021`

###### 防火钢门组件 （`fire_door`）

仅纳入共同通行/防火分区中实际交付的防火钢门组件；记录门框、门扇、五金、尺寸及要求的防火性能和试验/验收证据。不编造法定等级。

- 选定流：防火钢门组件
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：采用 cp_common_facilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_common_facilities`
- 来源：`jrc-levels-boq-2021`

###### 不锈钢饮用水储水箱 （`water_tank`）

仅在安装该种具体水箱时纳入；记录合金、有效容量、实际空箱质量、保温和服务分区。不得把水质量作为水箱制造质量。

- 选定流：不锈钢饮用水储水箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_common_facilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_common_facilities`
- 来源：`jrc-levels-boq-2021`

###### 镀锌钢通风管道 （`steel_duct`）

仅纳入实际镀锌风管；保留板厚、表面处理、尺寸、连接明细和实际质量。共同居住设施中的厨房或医疗系统须各自真实清单。

- 选定流：镀锌钢通风管道
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_common_facilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_common_facilities`
- 来源：`jrc-levels-boq-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：现场机械、水与直接排放（`site_utilities`）

将本工程包与图纸、领退记录及分包记录核对；跨工程包公用消耗在 site_utilities 中仅计一次并保留归属证据。活动不存在时记录不适用证据，不虚构数量。

#### 输入

##### 产品流

###### 交流电 （`lv_electricity`）

仅用于实际中国场址且电压匹配的小于 1 kV 用户端电力。分表计量吊装、泵送、养护、工具、临时住宿与调试；其他情况须选择真实地域/电压身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_site_utilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`rics-wlca-2024`

###### 交流电 （`mv_electricity`）

仅用于实际场址计量点为 1–35 kV 的中国用户端电力；明确变压损耗。同一电量不得在两电压层重复计入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_site_utilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`rics-wlca-2024`

###### 柴油 （`site_diesel`）

仅用于现场发动机/发电机实际供应且匹配身份的柴油；保留批次燃料类型、计量升数/质量、换算所需实测密度和真实净热值。内部发电不是第二份外购输入。

- 选定流：柴油 `fbd79004-188c-47a4-900b-96005d994690`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_site_utilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`rics-wlca-2024`

###### 供应到场址的处理后自来水 （`supplied_water`）

仅用于跨技术系统边界的处理后自来水；计量养护、清洗、抑尘和压力测试实际用水。内部循环水不重复输入，不得以自然资源流替代。

- 选定流：供应到场址的处理后自来水
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_site_utilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`rics-wlca-2024`

##### 废物流

##### 基本流

###### 地下水 （`groundwater`）

仅用于场址直接抽取并消耗的地下水资源，须有含水层/位置证据。降水排出的转移与回流水单独建立去向账本，不自动视为消耗资源或废水。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_site_utilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`rics-wlca-2024`

###### 河水 （`riverwater`）

仅用于实际直接河水资源取用，须有来源和取水计量；不表示未指定淡水、湖水或废水。回流按实际受纳介质记录。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_site_utilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`rics-wlca-2024`

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 二氧化碳（化石源） （`diesel_co2`）

条件性记录实际现场柴油燃烧向未指定空气介质即时排放的化石 CO2。采集燃料真实碳含量与氧化证据或适用尾气实测数据。区分化石/生物份额，避免与含燃烧的背景数据重复。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_site_utilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`rics-wlca-2024`

###### 一氧化氮 （`diesel_no`）

仅用于实际发动机、负荷和尾气控制下有依据的 NO 组分质量，向未指定空气即时排放。以 NO2 当量报告的 NOx 不得当作 NO 质量。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_site_utilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`rics-wlca-2024`

###### 二氧化氮 （`diesel_no2`）

仅用于单独有依据的 NO2 质量，向未指定空气即时排放。区分 NO、氮、N2O 与 NO2 当量 NOx；不自动采用默认排放因子。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_site_utilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`rics-wlca-2024`

###### 颗粒物 (PM10) （`construction_pm10`）

仅记录有依据的现场土方/搬运/交通或发动机向未指定空气即时排放的实际 PM10，须有来源特定证据及气象/控制条件。避免粒径区间重叠；历史 AP-42 仅支持定性发生条件，不表示当前通用因子。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_site_utilities 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`epa-construction-dust-2010`

### 过程：废物分选与转移（`waste_transfer`）

将本工程包与图纸、领退记录及分包记录核对；跨工程包公用消耗在 site_utilities 中仅计一次并保留归属证据。活动不存在时记录不适用证据，不虚构数量。

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 硬化混凝土施工边角废料 （`concrete_waste`）

仅用于外运处理的硬化混凝土边角料；区分湿混凝土退料与洗涤液。

- 选定流：硬化混凝土施工边角废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste_transfer 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_transfer`
- 来源：`rics-wlca-2024`

###### 未处理锯材边角废料 （`timber_waste`）

仅用于未处理锯材边角料；涂层、胶合或防腐废料须独立行。

- 选定流：未处理锯材边角废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste_transfer 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_transfer`
- 来源：`rics-wlca-2024`

###### 石膏板边角废料 （`gypsum_waste`）

仅用于分选石膏板边角料；保留面层、污染与去向。

- 选定流：石膏板边角废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste_transfer 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_transfer`
- 来源：`rics-wlca-2024`

###### 瓦楞纸板包装废料 （`carton_waste`）

仅用于废弃瓦楞纸板；核对供应包装与实际转移重量。

- 选定流：瓦楞纸板包装废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste_transfer 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_transfer`
- 来源：`rics-wlca-2024`

###### 聚乙烯包装薄膜废料 （`film_waste`）

仅用于身份明确的聚乙烯包装膜；其他聚合物须独立原子行。

- 选定流：聚乙烯包装薄膜废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste_transfer 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_transfer`
- 来源：`rics-wlca-2024`

###### 收集外运处理的混凝土溜槽洗涤废水 （`concrete_washwater`）

仅用于收集并外运处理的溜槽/泵洗涤废水。记录 pH、悬浮固体、体积及接收方。场外搅拌车罐洗涤归实际场外过程；直接排放须独立实测组分及受纳介质。

- 选定流：收集外运处理的混凝土溜槽洗涤废水
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_waste_transfer 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_transfer`
- 来源：`epa-concrete-washout-2012`

##### 基本流

### 过程：进场交付运输核算（`inbound_delivery`）

将本工程包与图纸、领退记录及分包记录核对；跨工程包公用消耗在 site_utilities 中仅计一次并保留归属证据。活动不存在时记录不适用证据，不虚构数量。

#### 输入

##### 产品流

###### 货车 （`road_freight`）

仅用于符合核验货车身份且供应数据门未包括的实际进场公路货运。记录车型/载重、每票货物及实际路线；废物外运单独记录。

- 选定流：货车 `d55f1329-cd61-44c0-8000-9367d38d5634`
- 流属性/单位：货物运输（质量×距离） `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则：采用 cp_inbound_delivery 采集真实交换数量，保留行单位、物理状态及本栋归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_inbound_delivery`
- 来源：`rics-wlca-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：检查、调试与验收交付（`handover`）

将本工程包与图纸、领退记录及分包记录核对；跨工程包公用消耗在 site_utilities 中仅计一次并保留归属证据。活动不存在时记录不适用证据，不虚构数量。

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 竣工交付的多户或共同居住住宅建筑 （`reference_building`）

按实测场址及签署交付配置记录一栋完整建筑，包含归属其的共同结构/设施。房间、住户和共同核心筒不是额外建筑输出。

- 选定流：竣工交付的多户或共同居住住宅建筑
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 件
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 来源：`un-cpc-3-53112`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_whole | dataset | 参考量为一栋建筑。专有住宅/房间、核心筒及共同设施为构成部分，不因住户数量自动变为须分配共产品。保留整栋清单；补充户/房间报告须守恒整栋总量并识别共同空间归属。 | rics-wlca-2024 |
| allocation_shared | all inventory rows | 先按分表、交付和工程包细分避免分配。共用地下室、公用系统或中央设施服务多栋/多用途时，先完整记录一次共同账本，再依据真实物理服务、实测内部总面积、人数/容量或其他有证据使用关系证明份额。不规定统一每户均分或面积比。声明分子/分母及未分配用途；已分配与未分配份额合计为一，不确定关系须敏感性分析。 | rics-wlca-2024; ghg-allocation-2011 |
| allocation_reuse | plywood_formwork; site_utilities | 复用模板、脚手架与设备保留资产标识。制造负担依据有证据的全寿命总活动/复用次数及本项目实际部署；运输、修复、损失和寿命终止仍明确。跨项目、期间及复用累计制造份额不得超过一；观察期间仅能分配归其的制造份额。未知寿命/总活动为审查缺口，不得每项目重置完整制造。 | rics-wlca-2024; ghg-allocation-2011 |
| allocation_waste | waste_transfer | 分别记录真实废物转移、处理覆盖和回收产品去向；不得自动将施工废料作为避免生产抵扣。一致声明回收分配及供应商数据门重叠。 | ghg-allocation-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_groundworks | groundworks | 真实行交换 | foreground_records | 初始场地、开挖原状/松散几何、填料级配/重量、污染及去向 ；外供材料总成投入：准确身份、总收货、期初期末可用库存、经核实退回转移、实际消耗损坏拒收替换及独立安装验收 | 施工前后测量及地磅记录；保留勘察与处置票据  对永久供货或消耗投入应用boundary_consumed_inputs；可复用资产制造保留单独守恒全寿命份额台账。 | 各行 kg、m3、m2、MJ、item、t*km | 每交付/事件及计量时段；每次验收 | 实际完整施工期间至签署交付；披露缺口 | 声明整栋建筑及归属分包/共同工程 | 每参考流 | 校准、签署票据、测量、原始测试、核对及不确定性 |
| cp_structure | structure | 真实行交换 | foreground_records | 竣工构件明细、材料状态/等级、混凝土票据、钢筋切割、模板资产部署、养护/泵送/吊装 ；外供材料总成投入：准确身份、总收货、期初期末可用库存、经核实退回转移、实际消耗损坏拒收替换及独立安装验收 | 核对竣工图、交付/退货票据、实测量和临时工程日志  对永久供货或消耗投入应用boundary_consumed_inputs；可复用资产制造保留单独守恒全寿命份额台账。 | 各行 kg、m3、m2、MJ、item、t*km | 每交付/事件及计量时段；每次验收 | 实际完整施工期间至签署交付；披露缺口 | 声明整栋建筑及归属分包/共同工程 | 每参考流 | 校准、签署票据、测量、原始测试、核对及不确定性 |
| cp_enclosure | enclosure | 真实行交换 | foreground_records | 屋面/立面层次、洞口/构造面积、厚度、等级、安装及废弃量 ；外供材料总成投入：准确身份、总收货、期初期末可用库存、经核实退回转移、实际消耗损坏拒收替换及独立安装验收 | 测量真实构造，核对供应规格及领退记录  对永久供货或消耗投入应用boundary_consumed_inputs；可复用资产制造保留单独守恒全寿命份额台账。 | 各行 kg、m3、m2、MJ、item、t*km | 每交付/事件及计量时段；每次验收 | 实际完整施工期间至签署交付；披露缺口 | 声明整栋建筑及归属分包/共同工程 | 每参考流 | 校准、签署票据、测量、原始测试、核对及不确定性 |
| cp_fitout | fitout | 真实行交换 | foreground_records | 专有/共同房间账本、隔墙/地面/饰面安装状态、数量及完整性 ；外供材料总成投入：准确身份、总收货、期初期末可用库存、经核实退回转移、实际消耗损坏拒收替换及独立安装验收 | 逐房核对装修明细及交付/计量记录，包括真实未交付工程  对永久供货或消耗投入应用boundary_consumed_inputs；可复用资产制造保留单独守恒全寿命份额台账。 | 各行 kg、m3、m2、MJ、item、t*km | 每交付/事件及计量时段；每次验收 | 实际完整施工期间至签署交付；披露缺口 | 声明整栋建筑及归属分包/共同工程 | 每参考流 | 校准、签署票据、测量、原始测试、核对及不确定性 |
| cp_fixed_systems | fixed_systems | 真实行交换 | foreground_records | 电路/管道明细、长度、截面、材料身份、设备接口、总收货与期初库存件数、已核实退回/转出和期末可用库存、净消耗及另列合格安装件数、损坏/拒收报废和替换关联、完整配置、制冷剂充注/真实损失及测试记录 | 按 equipment_consumption 核对收货、库存、退回/转移、安装验收和废物票据；保留损坏报废设备的制造投入及独立废物处理。测量已安装网络，核对供应质量/长度及压力/电气测试报告；已核实退回供应方的设备不作为本项目消耗。 | 各行 kg、m3、m2、MJ、item、t*km | 每交付/事件及计量时段；每次验收 | 实际完整施工期间至签署交付；披露缺口 | 声明整栋建筑及归属分包/共同工程 | 每参考流 | 校准、签署票据、测量、原始测试、核对及不确定性 |
| cp_common_facilities | common_facilities | 真实行交换 | foreground_records | 资产/型号、完整总成质量/数量、容量、服务分区、共同/专有归属、调试消耗 ；逐行逐型号总收货；期初期末可用库存；经核实退回转移；拒收损坏报废及替换；分别记录原生单位消耗量与安装验收量 | 读取厂家/竣工明细及签署调试记录；使用 kg 时称量或保留可追溯产品质量  在各行原生单位应用equipment_consumption（总成用件，泵水箱风管用kg）；纳入验收前实际消耗的失败与损耗，与安装验收及废物分别核对。保留真实配置总成内含范围及消耗替换品制造，排除经核实退回和可用结存。 | 各行 kg、m3、m2、MJ、item、t*km | 每交付/事件及计量时段；每次验收 | 实际完整施工期间至签署交付；披露缺口 | 声明整栋建筑及归属分包/共同工程 | 每参考流 | 校准、签署票据、测量、原始测试、核对及不确定性 |
| cp_site_utilities | site_utilities | 真实行交换 | foreground_records | 计量表、电压/场址、燃料批次/密度/净热值/碳、发动机工时/负荷、水源/回流、尾气组分与扬尘/控制/气象 | 读取校准表及燃料领退日志；采用实测场址尾气/资源数据，无法实测时记录适用模型及依据 | 各行 kg、m3、m2、MJ、item、t*km | 每交付/事件及计量时段；每次验收 | 实际完整施工期间至签署交付；披露缺口 | 声明整栋建筑及归属分包/共同工程 | 每参考流 | 校准、签署票据、测量、原始测试、核对及不确定性 |
| cp_waste_transfer | waste_transfer | 真实行交换 | foreground_records | 原子废物身份、状态、数量、污染、运输者及接收/处理；洗涤废水 pH 和固体 | 使用分选地磅/体积票据及接收凭证；分别跟踪场内回用和场外处理 | 各行 kg、m3、m2、MJ、item、t*km | 每交付/事件及计量时段；每次验收 | 实际完整施工期间至签署交付；披露缺口 | 声明整栋建筑及归属分包/共同工程 | 每参考流 | 校准、签署票据、测量、原始测试、核对及不确定性 |
| cp_inbound_delivery | inbound_delivery | 真实行交换 | foreground_records | 每票质量、车辆、实际路线长度、载荷、空返及供应商已含数据门 | 读取真实运输日志与供应商边界声明；逐段依证据计算，不假设距离 | 各行 kg、m3、m2、MJ、item、t*km | 每交付/事件及计量时段；每次验收 | 实际完整施工期间至签署交付；披露缺口 | 声明整栋建筑及归属分包/共同工程 | 每参考流 | 校准、签署票据、测量、原始测试、核对及不确定性 |
| cp_handover | handover | 真实行交换 | foreground_records | 建筑/场址标识、住宅/共同居住用途、户/房间数、容量、专有/共同交付配置、验收与施工日期 | 核对签署交付、竣工图、房间/资产账本与检查记录；不推断入住批准 | item | 每交付/事件及计量时段；每次验收 | 实际完整施工期间至签署交付；披露缺口 | 声明整栋建筑及归属分包/共同工程 | 每参考流 | 校准、签署票据、测量、原始测试、核对及不确定性 |
| cp_geometry | handover | 建筑几何及共同空间身份 | foreground_records | 楼层面积；户/房间面积；走廊/楼梯/设备/配套；占地；层数；真实居住容量；计量惯例 | 测量竣工图/现场，将互斥面积类别核对至声明内部总面积。记录墙体/空洞/停车定义及排除空间。 | m2 | 竣工核验与交付时 | 真实交付建筑状态 | 纳入全部楼层及归本栋共同面积 | 每参考流 | 测量方法、图纸、面积明细及签署验收 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| project_ledger | all inventory rows | 核对真实交付、退货、工程包领料、废物转移及计量记录；将有记录数量归至这一参考建筑，不按默认住户数或面积相除。保留内部转移且不重复计入。  对永久供货或消耗材料总成应用boundary_consumed_inputs，按真实原生单位及准确供货身份保留全部可归属安装失败和替换消耗。安装验收与真实废物分开；可复用设备模板制造保留allocation_reuse份额，不用净库存消耗公式。 | cp_groundworks; cp_structure; cp_enclosure; cp_fitout; cp_fixed_systems; cp_common_facilities; cp_site_utilities; cp_waste_transfer; cp_inbound_delivery; cp_handover | 每参考流的行数量 | rics-wlca-2024 |
| equipment_consumption | ceramic_toilet; led_luminaire; heat_pump; water_booster; passenger_lift; ventilation_fan; fire_door; water_tank; steel_duct | 各行原生单位净消耗量=总收货+期初库存−经核实退回或转移−期末可用库存。件数总成保留件数，质量基准的泵水箱风管保留实测kg，不虚构件数质量换算。纳入验收前损坏、拒收报废件、切割损耗与替换消耗。安装验收量另记；核对消耗量与留置安装、可归属废料及其他有据消耗去向。废物处理不能替代报废件制造投入，不设默认损失率。 | cp_fixed_systems; cp_common_facilities | 每声明参考流各原生单位外供投入 | jrc-levels-boq-2021 |
| electricity_conversion | lv_electricity; mv_electricity | 真实计量 kWh 乘 3.6 报告 MJ；保留相同交付电量及电压门；另证变压损耗。 | cp_site_utilities | 每参考流的 MJ |  |
| fuel_conversion | site_diesel | 使用实测燃料质量和批次净热值确定 MJ；升数须有记录条件下批次/现场密度。化石 CO2 部分另由真实碳/氧化证据确定。 | cp_site_utilities | 每参考流的燃料 MJ |  |
| freight_legs | road_freight | 每一真实运输段以有记录载货吨数乘行驶 km，汇总归属段。报告分配/空返，排除供应数据已含段。 | cp_inbound_delivery | 每参考流的 t*km | rics-wlca-2024 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_completeness | dataset | 将结构/核心/外部及每项专有/共同工程包核对至交付范围。补充此处未列的全部真实材料/设备、路线特定废物及排放。不存在须有不适用证明；必需未采集数量为缺口，不是零。 | jrc-levels-boq-2021; cp_handover |
| quality_shared | common_facilities | 保留整栋及母级共用设施账本、容量/服务证据和面积定义。不得等同住户数、床位、房间与人数或默排共同区域。 | rics-wlca-2024; cp_geometry; cp_common_facilities |
| quality_representativeness | all inventory rows | 报告施工日期、场址、供应技术/地域、实测与模型数量、校准、未计量期间、不确定性及上游相容性。区分缺失测量/UUID 与已证明不存在。 | cp_site_utilities; cp_handover |
| quality_environment | site_utilities; waste_transfer | 直接污染物估计须有真实来源化学、介质/子介质、即时/长期状态及发动机/土壤/气象/处理条件依据。报告噪声及水去向数据/表征缺口；排放名称不能证明发生。 | epa-construction-dust-2010; epa-concrete-washout-2012 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_building | 核验住宅/共同居住类别、一项真实整栋输出、签署交付状态、真实数量/容量和全部限定信息。房间或建筑服务不得使用该参考身份。 | un-cpc-3-53112 |
| validate_geometry_shared | dataset | 对竣工图检查实测专有/共同/服务面积类别及惯例；核对共用设施/地下室分配负担和项目总量。补充人数/住户归属须守恒整栋总量并披露真实依据。 | rics-wlca-2024 |
| validate_atomic_units | all inventory rows | 检查每项单一物理/化学交换、精确公共参考属性/单位组、条件适用性、采集协议及双语共同基准。空 UUID 身份保持登记缺口；近似标签不授权替代。 |  |
| validate_stages | dataset | 分别核验制造链接、运输及施工覆盖；缺阶段或必需数量时不得声明完整 cradle-to-gate/全寿命。验收证据不表示 PCR 科学批准或当地入住许可。 | rics-wlca-2024 |
| validate_releases | site_utilities; waste_transfer | 检查化石/生物来源、NO 与 NO2/N2O、无重叠颗粒区间、自然取水与技术圈水/废水及真实受纳介质。避免背景燃烧/处理重复，必需环境数据未解决须保持覆盖不完整。 | epa-concrete-washout-2012; epa-construction-dust-2010 |
| validate_asset_shares | plywood_formwork; site_utilities | 核验复用资产身份、寿命活动证据及跨项目/期间累计制造份额不超过一。缺失分母须审查，不重置资产制造。 | rics-wlca-2024; ghg-allocation-2011 |
| validate_equipment_consumption | ceramic_toilet; led_luminaire; heat_pump; water_booster; passenger_lift; ventilation_fan; fire_door; water_tank; steel_duct | 按equipment_consumption以各原生单位核验逐行逐型号收货库存及退回转移。分别核对损坏替换实际消耗、安装验收及废物，永久共同设施亦纳入。经核实已退回拒收品及可用结存排除消耗，最终安装件数或质量不能替代投入消耗。可复用临时资产制造采用allocation_reuse而非本消耗公式。 | jrc-levels-boq-2021 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明整栋住宅/共同居住建筑施工交付，明确上游链接与阶段覆盖；仅在交付范围、居住功能、几何及共用设施处理相当时比较 |
| excluded_use | 全寿命/服务年声明；统一 kg/栋或材料配方；法定批准；建筑服务；将只含专有住宅的足迹表示为整栋 |
| required_metadata | 全部参考限定；专有/共同及母评价账本；真实结构/路线；验收范围；阶段与上游门；真实数据/校准/分配来源 |
| required_quality_disclosure | 实测/模型范围、缺失上游及数量、未解决身份、环境/表征缺口、代表性、共用/复用资产分配不确定性及排除后续阶段 |
| update_trigger | 用途/容量/住户配置、场址/几何、共同安装、交付状态、结构路线、供应商、实测记录或证据状态变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-53112 | official_guidance | UN Statistics Division, CPC Version 3.0 subclass 53112 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/53112 | 类别边界：三户及以上住宅和共同居住住所。分类不证明施工配方或法定许可。 |
| jrc-levels-boq-2021 | official_guidance | European Commission JRC, Level(s) indicator 2.1 Bill of Quantities, publication v1.1 January 2021, PDF/printed pp.23–24, Table 2. https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2021-01/UM3_Indicator_2.1_v1.1_34pp.pdf | 仅采用要素/安装系统覆盖提示，不采用案例数量、默认材料强度或寿命。每项数量由真实工程记录决定。 |
| rics-wlca-2024 | standard | RICS Whole life carbon assessment for the built environment, second edition, version 3 August 2024; section 3.5–3.6 printed p.36/PDF p.44; section 5.1.4 printed pp.80–82/PDF pp.88–90. https://www.rics.org/content/dam/ricsglobal/documents/standards/Whole_life_carbon_assessment_PS_Sept23.pdf. | 共同/群体设施、连接建筑评价、现场活动及复用临时工程；不采用默认排放率、寿命或笼统 RICS 全寿命合规声明。 |
| ghg-allocation-2011 | official_guidance | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard, 2011, chapter 9, Tables 9.1–9.2 printed p.63/PDF p.65. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 历史细分及有证据分配方法层级；不采用默认份额或新法规声明。 |
| epa-construction-dust-2010 | official_guidance | US EPA AP-42 13.2.3 Heavy Construction Operations, January 1995 corrected February 2010, printed p.13.2.3-1/PDF p.1. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | 仅采用历史定性扬尘/活动/气象关系；不作为通用当前因子或必然排放。 |
| epa-concrete-washout-2012 | official_guidance | US EPA Concrete Washout, EPA-833-F-11-006 February 2012, PDF pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | 历史洗涤废水状态及去向区分；真实组分、去向和当地许可须独立采集。 |