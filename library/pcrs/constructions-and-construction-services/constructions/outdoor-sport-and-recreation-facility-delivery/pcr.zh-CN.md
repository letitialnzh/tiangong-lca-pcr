---
pcr_id: pcr.constructions-and-construction-services.constructions.outdoor-sport-and-recreation-facility-delivery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 户外运动与游憩设施施工及交付

## 1. 范围与适用性

适用于真实场址完整验收的户外运动游憩土木实体：露天足球棒球橄榄球田径网球、汽车自行车赛及赛马场地；高尔夫海滩设施游艇码头；公共公园花园动物园植物园。独立室内运动建筑、工程服务、建材设备制造、设施运营和动物饲养不属于参考产品。类别依据官方范围，实际身份由功能配置及交付状态确定。[un-cpc3-2025]

运动面层根区、活体种植建植、动物围护及沿海游憩设施需要自己的选定施工路线和完整验收方法，建材道路建筑港口方法不能替代完整实体。默认真实施工至声明最终验收，含合同建植整改；实测功能几何和同一配置必须一致。不以一平方米草坪或一千克建材替代整个类别，不宣称完整从摇篮到大门或全寿命。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.outdoor-sport-and-recreation-facility-delivery |
| classification_refs | CPC 3.0 53270；仅背景，不表示已接受映射 |
| covered_products | 完整户外运动赛车场高尔夫海滩游艇码头公园花园动物园植物园及整体构件 |
| excluded_products | 独立室内运动建筑、建材设备制造、工程服务、运营饲养及独立交通港口水利管线实体 |
| representative_product | 一个实际完整设施，功能范围几何配置及验收终点明确 |
| production_route | 真实准备，选定排水面层景观结构永久安装，现场支持物流验收整改 |
| market_state | 声明场址配置完整建造验收实体，含真实合同建植终点 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以验收实体提供声明露天运动游憩园林或动物植物展示功能及必要通行围护 |
| How much | 一个完整声明设施；按类型实测场地跑道长宽、净运动面总占地、球场分区、植物配置、围护、海滩通道、泊位及水域几何，不设标准尺寸 |
| How well | 真实合同用途验收，竣工测量层系排水面层建植围护安装测试及整改证据，不自动认证或批准 |
| How long or cycle | 一次真实施工至最终验收周期，含合同建植；无默认运营年寿命更新周期 |
| reference_flow_link | `finished_facility` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收配置完整的户外运动或游憩设施 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 件数单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 场址范围及全部功能；新建保留资产；实测原状竣工坐标标高几何；运动层系跑道分区；分类群根区建植；动物围护生命支持；海滩通道护岸补砂；泊位水域固定浮动结构盐度；设备规格；真实验收建植终点日期；供应运输接口；复用台账；材料状态实测量；水受体污染检测；排除阶段 |

item是公开Item(s)的单件显示别名，件为同一数量单位。所有清单采集均按每声明的参考流，指同一真实验收配置。几何功能质量限定完整交付，不设每设施质量、默认荷载、造价或寿命；缺限定信息的数据包不完整。

类型特定限定信息按声明的真实配置适用：运动工程声明运动和球场几何，实际园林动物园声明分类群和围护，只有真实海滩或码头工程声明沿海及泊位几何。各不适用限定项须图纸或现场证据；不得因此省略已安装构件。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 恰1件完整验收设施，cp_handover采集；所有清单协议每声明的参考流。 |
| physical_records | 材料几何 | Mass; Volume; Area; Length; Number of items | kg; m3; m2; m; item | 实测或证实交货几何，体积面积转质量须同物料状态实测密度或单位面积质量，不杜撰整设施质量。 cp_plant下活体种植材料garden_tree、garden_shrub采用物品数量/item，保留真实物种、规格与件数。质量/kg、体积/m3、面积/m2及长度/m仅适用于相应原生量；仅有实测适用依据时换算，不将活体苗木强行改为质量或几何量。 |
| energy_property | 电力柴油 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ; kg | 电力MJ，实测kWh乘3.6；柴油kg，体积转质量须批次密度。属性系数非物理密度热值。 |
| cable_length | `cable` | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | 保留公开Length/m，核对安装裁切退回长度，不改写Mass。 |
| water_state | 水接口 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | m3; kg | 体积台账独立守恒；海水资源主属性Mass/kg须称重或同盐温有依据密度，排水Volume/m3；污染组分单列。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 施工前实测场地植被土水及保留资产，真实供应材料总成门端和运输起点 |
| starting_condition_role | foreground_start |
| product_classification_scope | 完整声明户外运动游憩实体及整体安装，分类不替代功能判断 |
| recursive_input_rule | 保留同类设施为起始库存，独立取得完成工程有界上游链接，不递归自身产出或假定重建历史负担 |
| upstream_dataset_requirement | 分别核实材料构件公用工程设备独立工程的供应状态工艺地域属性单位及生产运输边界，披露缺口 |
| disclosure | 现场施工至最终验收；上游覆盖运营更新拆除各单列，非完整从摇篮到大门或全寿命 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| b_delivery | 纳入真实准备、选定排水面层种植结构安装、公用工程物流测试整改至声明最终验收，含合同建植。选真实完整配置并证实不存在的替代路线。 | un-cpc3-2025; cedd-landscape-2026; se-natural-2025 |
| b_consumed_inputs | 全部外购投入行保留真实可归属消耗，包括最终验收前损坏、拒收、切割余料及替换。局部安装、施用或种植措辞识别目标路线或配置，对实际消耗的安装前或建植损耗适用本显式例外，不将投入限为成功安装量。按原生单位核对可归属总收货+期初库存−经核实退回或转移−期末可复用库存；安装验收量及真实废物分别记录。保留准确供货状态和总成边界，不再次计入内含组分。  库存消耗公式适用于消耗材料构件，不适用于cp_reuse管理的制造份额行。特别是excavator_capital和timber_formwork，即使实体退回、转移或作为可复用期末库存留存，仍按c_share保留实际资产质量乘有依据且守恒的制造份额；实物流转另记，同一资产不得同时计全额消耗制造与制造份额。 | |
| b_supplied_state | 材料总成制造在真实供应门端另链接上游。现场混凝土拌制、土稳定喷播橡胶拌配焊接涂装须真实组分设备释放另列，不重复完整外购总成及内含组分。 | se-artificial-2013; cedd-landscape-2026 |
| b_interfaces | 整体内工程仅计一次。独立完整建筑道路港口管线电缆须有界上游接口，可借其构件方法但不替代完整游憩设施方法。保留资产是起始库存。 | un-cpc3-2025; epa-marina-2001 |
| b_environment | 分开供水取水排放送处理液及废沉积物羽流。真实污染组分填充散失化学释放土和土地碳须证据及各自行。噪声振动栖息地占地另有界评估，未测不是零。 | epa-marina-2001; epa-heavy-construction-1995 |
| b_later | 默认排除验收后运动游客船舶运营、饲养日常灌溉割草施肥、维护疏浚未来面层植物设备更新及拆除。扩展须真实时间活动更新移除去向清单，不默认寿命。验收前建植移除返工纳入。 | cedd-landscape-2026; epa-marina-2001; defra-zoo-2012 |
| b_extensions | 行卡是具体候选路线，不是所有设施材料清单。数据集完整前列全真实运动赛车高尔夫公园花园海滩动物园植物园码头要求，其他分类群面层标线接缝材料土建总成设备化学包装废物释放逐原子另列。UUID缺口不理由缩小范围。 | un-cpc3-2025; se-artificial-2013; defra-zoo-2012 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| earth | 实测清理整平及土方工程 | conditional | 实际挖填清理既有移除或码头基建疏浚 | foreground_process | 每声明的参考流 |
| drainage | 排水及灌溉安装 | conditional | 真实选定排水根区灌溉设计 | foreground_process | 每声明的参考流 |
| surface | 运动赛车面层及建植 | conditional | 真实天然混合人工草坪聚合物铺装或赛车路线 | foreground_process | 每声明的参考流 |
| landscape | 园林栖息地及种植建植 | conditional | 真实公园花园高尔夫动物园植物园景观 | foreground_process | 每声明的参考流 |
| structure | 土建结构围护及沿海通道 | conditional | 真实基础围栏栖息地结构栈道海滩码头工程 | foreground_process | 每声明的参考流 |
| services | 永久照明及场地设备 | conditional | 真实电气排水控制动物生命支持码头设备 | foreground_process | 每声明的参考流 |
| support | 施工设备公用工程及环境控制 | required | 全部真实纳入工序，各交换以发生为条件 | foreground_process | 每声明的参考流 |
| logistics | 物流及可复用施工资产 | conditional | 真实外部运输或明确制造模块 | foreground_process | 每声明的参考流 |
| handover | 测试整改清理及验收产出 | required | 一个真实完整设施及最终验收终点 | reference_process | 每声明的参考流 |

公用工程水及释放在support按实际工序标记仅计一次。各条件交换仅实际发生时赋量，不适用须证据；所列物种材料不是完整类别的限制，实际替代项另列核实。

### 过程：实测清理整平及土方工程（`earth`）

保留原状竣工测量、剥离表土及压实几何、真实挖机压路机疏浚设备和侵蚀控制，移除材料分开。

#### 输入

##### 产品流

###### 填筑用洁净级配矿质土（`imported_fill`）

仅纳入真实外购检验填料，核对压实几何、含水率及交货质量。场内挖填调配是库存转移。

- 选定流：填筑用洁净级配矿质土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`

###### 筛分园艺表土（`topsoil`）

仅纳入真实外购种植或根区表土，记录质地、污染、含水率和铺置厚度。保留表土是起始库存。

- 选定流：筛分园艺表土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`

#### 输出

##### 废物流

###### 送处置的非危险开挖矿质土（`soil_waste`）

仅记录已表征、外运处置的剩余土，保留湿质量及接收方。污染土和外部有益利用批次另列行及去向。

- 选定流：送处置的非危险开挖矿质土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_waste采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`

###### 非危险海洋疏浚矿质沉积物，湿态（`sediment_waste`）

仅在实际游艇码头基建疏浚时纳入，保留沉积物检验、湿干状态及去向。移除沉积物不等于环境羽流。

- 选定流：非危险海洋疏浚矿质沉积物，湿态
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_waste采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`

### 过程：排水及灌溉安装（`drainage`）

依据场址土壤检验选真实无排水管排辅助或工程根区剖面，不设通用管距埋深砂比。保留排口及土层相容性。

#### 输入

##### 产品流

###### 穿孔高密度聚乙烯地下排水管（`drain_pipe`）

声明路线实际消耗的外供排水管，包含安装前损坏、切割余料及拒收或替换管材。保留准确聚合物、穿孔、管径、壁厚、供货状态及实测质量，安装长度另存。保留HDPE树脂及穿孔证据；泛称塑料管或未成型聚合物身份不足。不得以压力灌溉管替代指定排水管。

- 选定流：穿孔高密度聚乙烯地下排水管
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_drainage采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_drainage`
- 来源：`se-natural-2025`; `cedd-landscape-2026`

###### 水洗棱角矿质排水砾料（`drain_gravel`）

仅用于真实规定排水剖面，依据工程和实验室级配及渗透证据，不设通用粒级或配方。

- 选定流：水洗棱角矿质排水砾料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_drainage采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_drainage`
- 来源：`se-natural-2025`; `cedd-landscape-2026`

###### 硅砂（`drain_sand`）

仅用于选定排水或根区剖面的真实外购硅砂。独立核验供应商矿物组成、真实生产路线、含水率及洁净度、实测交付质量和符合项目层系渗透要求的实验室级配。依据供应商证据确定实际加工步骤。项目粒径级配及任何更窄规格和配比均须证据，不规定通用粒径包络或配方。

- 选定流：硅砂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_drainage采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_drainage`
- 来源：`se-natural-2025`; `cedd-landscape-2026`

###### 非织造聚丙烯隔离土工布（`geotextile`）

真实规定的过滤或隔离织物，记录聚合物、单位面积质量、透水性及搭接。泛称非织造布不足。

- 选定流：非织造聚丙烯隔离土工布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_drainage采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_drainage`
- 来源：`se-natural-2025`; `cedd-landscape-2026`

###### 高密度聚乙烯灌溉压力管（`irrigation_pipe`）

声明路线实际消耗的外供灌溉管，包含安装前损坏、切割余料及拒收或替换管材；仍须保留等级、压力、配件及供货接口。消耗量与安装长度分别记录。穿孔排水管及真实喷头、阀门总成仍另列行。

- 选定流：高密度聚乙烯灌溉压力管
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_drainage采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_drainage`
- 来源：`se-natural-2025`; `cedd-landscape-2026`

### 过程：运动赛车面层及建植（`surface`）

真实播种草皮草茎建植、分层基层垫毯聚合物接缝标线及验收为选定路线。USGA步骤2–8仅指导声明USGA果岭；发球台球道沙坑路径有自身几何材料。赛马汽车自行车须真实跑道剖面排水围护。

#### 输入

##### 产品流

###### 碎石，16/32粒级（`base_stone`）

公开Mass/kg身份仅用于真实匹配16/32粒级碎石层，保留供应门端、状态及已含运输。其他级配另列。

- 选定流：碎石，16/32粒级 `4f197bee-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_surface采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_surface`
- 来源：`se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### 多年生黑麦草种子（Lolium perenne）（`grass_seed`）

仅记录实际独立供应的黑麦草种子，记录品种、净度、发芽率及施用。另购其他分类群种子及真实现场混合的投入分别列行，并保留真实混合活动。外购预混种子混合物须按其实际供货混合物单列一行，保留供应商组成、批次及上游混合和供货边界；内含种子物种是组成证据，不另增采购投入行。采购混合物之外另行添加的种子仍为额外交换。不强制单物种路线。

- 选定流：多年生黑麦草种子（Lolium perenne）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_surface采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_surface`
- 来源：`se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### 多年生黑麦草草皮（`turf_sod`）

仅在真实草皮路线纳入，保留附土、含水率、品种、面积及实测单位面积质量。供应方种子不另计现场投入。其他草皮草茎分类群另列。

- 选定流：多年生黑麦草草皮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_surface采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_surface`
- 来源：`se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### 人造草坪毯（`artificial_carpet`）

仅用于真实外购合成草坪毯总成，须独立核验供应商材料清单、纤维背衬组成、绒高、实测单位面积质量及安装裁切记录。确认填充物、胶粘剂及缓冲垫是总成内含还是另供，各构件仅计一次。独立核验真实供应商及总成内含范围。用于建模的性能、安全和寿命声明须有适用于实际产品及条件的证据，不预设普遍使用年限或安全无毒承诺。此合成总成不能替代活体种植材料。

- 选定流：人造草坪毯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_surface采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_surface`
- 来源：`se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### 硅砂（`infill_sand`）

仅在规定运动面层实际采用硅砂填充时纳入，不强制填充。独立核验供应商矿物组成、真实生产路线、干湿状态、粒级纯度、面层相容规格及真实投退料。依据供应商证据确定实际加工步骤。任何接受的粒径包络、更窄项目级配及用量均须实物证据，不规定默认粒径包络或用量。本填充交换与排水根区砂分开。

- 选定流：硅砂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_surface采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_surface`
- 来源：`se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### 废轮胎来源丁苯橡胶填充颗粒（`sbr_infill`）

仅用于真实规定废轮胎SBR填充物，保留组成粒径、污染检测及围控。原聚合物或未指定胶粉不是此颗粒。

- 选定流：废轮胎来源丁苯橡胶填充颗粒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_surface采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_surface`
- 来源：`se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### 硫化三元乙丙橡胶运动面层颗粒（`epdm_granules`）

仅记录真实EPDM面层，保留颜色添加剂及原生再生来源。天然草坪、沥青及所有人工草坪不必采用。

- 选定流：硫化三元乙丙橡胶运动面层颗粒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_surface采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_surface`
- 来源：`se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### 双组分聚氨酯运动面层粘结剂（`surface_binder`）

仅用于真实外购双组分配方，声明组分比例及固化体系边界。单组分湿气固化胶不能代替此配方，记录真实拌配损耗及有依据组分释放。

- 选定流：双组分聚氨酯运动面层粘结剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_surface采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_surface`
- 来源：`se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### 预制再生丁苯橡胶缓冲垫片（`shockpad`）

真实规定外购片材，记录厚度、单位面积质量、粘结剂及测试。现场成型层须实际组分和施工行。

- 选定流：预制再生丁苯橡胶缓冲垫片
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_surface采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_surface`
- 来源：`se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

###### 沥青混合料（`asphalt_course`）

适用于球场、赛车场、跑道基层或路径真实厂供骨料粘结剂填料混合料，声明配比温度层位门端。不是纯沥青或现场制造；UUID不证明透水性或运动合格。

- 选定流：沥青混合料 `ad29a865-2fd6-41da-99d2-9669b9c7984d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_surface采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_surface`
- 来源：`se-natural-2025`; `se-artificial-2013`; `usga-green-2018`

### 过程：园林栖息地及种植建植（`landscape`）

采集全部真实分类群根区土处理改良覆盖浇水补植至合同最终验收；实质完工与最终建植终点区分。交付后动物饲养分开。

#### 输入

##### 产品流

###### 活体苗圃欧洲槭树（Acer campestre）（`garden_tree`）

仅用于真实种植物种，记录土球裸根容器状态、尺寸及验收补植建植记录。真实植物园动物园分类群逐项列全，本例不缩小范围。

- 选定流：活体苗圃欧洲槭树（Acer campestre）
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：用cp_plant采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_plant`
- 来源：`cedd-landscape-2026`; `defra-zoo-2012`; `usga-green-2018`

###### 活体苗圃欧山茱萸灌木（Cornus sanguinea）（`garden_shrub`）

仅记录真实苗圃灌木，包括最终验收前补植，保留根系容器及种植几何。其他物种另列。

- 选定流：活体苗圃欧山茱萸灌木（Cornus sanguinea）
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：用cp_plant采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_plant`
- 来源：`cedd-landscape-2026`; `defra-zoo-2012`; `usga-green-2018`

###### 腐熟筛分绿废堆肥（`compost`）

仅记录真实检验根区改良料，保留原料腐熟度含水率及真实配方。不是泥炭，不设默认掺量。

- 选定流：腐熟筛分绿废堆肥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_landscape采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_landscape`
- 来源：`cedd-landscape-2026`; `defra-zoo-2012`; `usga-green-2018`

###### 硝酸铵肥料（`fertilizer`）

仅记录实际检验农艺支持的建植施用，保留配方氮含量、时地及数量。其他肥料农药逐化学品另列，不预设未来常规使用。

- 选定流：硝酸铵肥料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_landscape采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_landscape`
- 来源：`cedd-landscape-2026`; `defra-zoo-2012`; `usga-green-2018`

###### 洁净未处理木片园林覆盖物（`wood_mulch`）

仅记录真实覆盖，保留来源、污染含水率及施退量。交付模块不自动抵扣储存或分解碳。

- 选定流：洁净未处理木片园林覆盖物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_landscape采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_landscape`
- 来源：`cedd-landscape-2026`; `defra-zoo-2012`; `usga-green-2018`

### 过程：土建结构围护及沿海通道（`structure`）

真实浇筑养护钢筋围栏安装、物种特定围护、通道及固定浮动泊位桩方法。护岸补砂须真实侵蚀栖息地证据，不强制防波堤疏浚。

#### 输入

##### 产品流

###### 新拌预拌硅酸盐水泥混凝土（`wet_concrete`）

实际交付的板、路缘、基础或码头混凝土，保留配合比新拌状态、质量体积密度、养护及拒收。硬化或预制混凝土不是此新拌供应材料。现场拌制须自身组分。

- 选定流：新拌预拌硅酸盐水泥混凝土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_structure采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_structure`
- 来源：`cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### 钢筋，钢制建筑材料（`reinforcing_bar`）

仅用于匹配公开厂门热轧低合金钢筋，C≤0.2%，核实牌号直径、真实切断弯制及余料。其他合金或网片另核身份。

- 选定流：钢筋，钢制建筑材料 `43050e3b-42be-465c-a021-17f606484151`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_structure采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_structure`
- 来源：`cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### 镀锌焊接钢制围护网片（`enclosure_mesh`）

真实运动或物种特定动物围护网片，保留网孔镀层尺寸及牢固立柱门。立柱门及电围栏装置另列，泛称丝网不证实此总成。

- 选定流：镀锌焊接钢制围护网片
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_structure采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_structure`
- 来源：`cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### 动物园夹层安全玻璃观察窗板（`viewing_glass`）

声明围护实际消耗的外供观察层合玻璃，包含安装前损坏及拒收或替换面板。保留组成、厚度、固定件及物种特定抗冲击验收证据，安装验收几何另存。普通片状玻璃不是本总成，不假定荷载。

- 选定流：动物园夹层安全玻璃观察窗板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_structure采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_structure`
- 来源：`cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### 防腐处理针叶木栈道板（`deck_plank`）

真实公园海滩码头铺板，记录树种药剂保持量、含水率几何、通行防滑测试及供应门端。仅有真实现场处理或释放证据时记录化学释放。

- 选定流：防腐处理针叶木栈道板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_structure采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_structure`
- 来源：`cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### 镀锌钢制游艇码头导向管桩（`steel_pile`）

仅在真实有桩路线纳入，保留钢材镀层尺寸质量、打入钻孔及验收。无导向桩浮体不强制此路线。

- 选定流：镀锌钢制游艇码头导向管桩
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_structure采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_structure`
- 来源：`cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### 预制钢筋混凝土游艇码头浮趸（`pontoon`）

真实厂供浮体总成，保留浮芯壳体钢筋五金及门端，不再重复内含组分。固定码头须真实自身结构。

- 选定流：预制钢筋混凝土游艇码头浮趸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_structure采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_structure`
- 来源：`cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### AISI 316不锈钢系泊羊角（`mooring_cleat`）

仅纳入真实匹配合金的安装系泊羊角，采集规格质量固定件。其他系泊锚柱另列，不假定荷载。

- 选定流：AISI 316不锈钢系泊羊角
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_structure采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_structure`
- 来源：`cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### 级配本地矿质海滩补砂（`beach_sand`）

仅纳入真实海滩设施补砂，保留相容来源受纳沉积物、检验及实测铺置。不强制补砂，无匹配证据的工业硅砂不是本地矿质身份。

- 选定流：级配本地矿质海滩补砂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_structure采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_structure`
- 来源：`cedd-landscape-2026`; `se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

### 过程：永久照明及场地设备（`services`）

保留完整安装清单供应总成接口调试。杆配电配件喷头游乐设备罐化学品调试燃料逐项另列，不因UUID缺失省略真实技术。

#### 输入

##### 产品流

###### 专为发光二极管（LED）光源设计的灯具和照明配件（`luminaire`）

仅用于匹配完整已制造厂门LED专用灯具，保留功率配光防候、总成边界、实测质量数量及安装配置。杆缆另列。

- 选定流：专为发光二极管（LED）光源设计的灯具和照明配件 `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_material_services采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material_services`
- 来源：`se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### 低压电缆（`cable`）

仅适用于真实中国厂门电缆，匹配GB/T12706.1-2020及不超过1000V，核对导体绝缘护套截面额定参数。保留公开Length/m及裁切退回长度；不含敷设使用损耗处置。其他产地规格另核身份。

- 选定流：低压电缆 `49101b44-20cc-46a0-adfb-af07e4cc8908`
- 流属性/单位：长度 `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：用cp_services采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_services`
- 来源：`se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### 电动离心雨水排水泵总成（`drainage_pump`）

仅用于真实永久泵，保留电机总成边界及调试。临时降水设备归现场支持及复用。

- 选定流：电动离心雨水排水泵总成
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：用cp_services采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_services`
- 来源：`se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### 固定电动游艇码头污水抽取撬装装置（`pumpout_skid`）

真实永久安装码头污水系统，保留收集管线接口及测试；未来船舶污水数量属运营并排除。

- 选定流：固定电动游艇码头污水抽取撬装装置
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：用cp_services采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_services`
- 来源：`se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

###### 游艇码头汽油输送加油机总成（`fuel_dispenser`）

仅用于真实汽油站安装，保留围控储存管道电气接口。真实调试汽油另列，未来船舶加油排除。

- 选定流：游艇码头汽油输送加油机总成
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：用cp_services采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_services`
- 来源：`se-artificial-2013`; `defra-zoo-2012`; `epa-marina-2001`

### 过程：施工设备公用工程及环境控制（`support`）

记录开挖压实铺草播种摊铺混凝土泵振捣起重打桩水泵测试设备。公用工程释放按工序设备日期仅归属一次，临时处理围控纳入。

#### 输入

##### 产品流

###### 柴油（`site_diesel`）

用于匹配未特指牌号配方物料身份的真实柴油；独立取得供应牌号、化石生物掺混、体积采集时密度及设备工序使用。身份不提供炼制清单热值或必然尾气。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_energy采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### 交流电（`site_electricity_cn_lv`）

仅用于真实中国电网平均用户端消费且低于1kV，保留真实电网电压计量边界。保留Net calorific value/MJ，kWh×3.6。其他电网电压发电另列。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：用cp_energy采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### 送达施工场地的处理市政水（`supplied_water`）

实际分工序抑尘养护建植测试用水，保留本地门端及供水输送链接。香港处理厂门端水不是无地域现场供水，不假定纯度密度。

- 选定流：送达施工场地的处理市政水
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：用cp_water采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

##### 基本流

###### 地下水（`groundwater_resource`）

仅用于真实直接地下水取用或降水，CAS7732-18-5，水资源，Volume/m3，保留地域含水层时间数量。不是供水排放或自动消耗性用水。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：用cp_water采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### 海水（`sea_resource`）

仅用于真实沿海施工测试直接海水取用，CAS7732-18-5，水资源，主属性Mass/kg。实测质量，或体积乘同盐度温度有依据密度；体积台账另行守恒。密度未知须审查。

- 选定流：海水 `172a3db9-6556-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_water采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

#### 输出

##### 废物流

###### 送处理的混凝土洗出碱性悬浮液（`washout`）

实际单独收集洗出液，保留pH固液组成及接收方；不是环境直排或无关洗涤废水路线。

- 选定流：送处理的混凝土洗出碱性悬浮液
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：用cp_waste_support采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_support`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### 废矿物液压油（`used_oil`）

仅用于真实现场维修或泄漏收集，保留组成及受控接收方。收集废物不默认排入土水。

- 选定流：废矿物液压油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_waste_support采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_support`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

##### 基本流

###### 二氧化碳（化石源）（`fossil_co2`）

仅用于真实化石CO2即时排至外部未指定空气，CAS124-38-9；采用物种实测或独立审查含真实化石份额氧化的燃料碳平衡。燃料存在不提供数量。生物及土地碳分开。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_release采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### 一氧化氮（`nitrogen_monoxide`）

仅用于真实分子NO，CAS10102-43-9，即时外部未指定空气，须组分证据。以NO2计NOx、NO2及N2O不是此交换。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_release采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### 二氧化氮（`nitrogen_dioxide`）

仅用于真实分子NO2，CAS10102-44-0，即时外部未指定空气。以NO2计总NOx不是分子NO2，N2O4是不同分子交换。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_release采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### 颗粒物 (PM2.5)（`pm_fine`）

仅用于粒级分辨扬尘尾气证据及真实控制支持的净外部即时未指定空气PM2.5释放。不是室内暴露、收集袋尘或TSP。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_release采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### 颗粒物 (PM2.5 - PM10)（`pm_coarse`）

仅用于真实互不重叠2.5–10微米即时外部未指定空气粒级。同一释放不再叠加总PM10；历史面积月TSP因子不是此数量。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_release采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### 水（`freshwater_discharge`）

仅用于真实液态水排入淡水受体，CAS7732-18-5，淡水排放，Volume/m3。保留来源受体时间体积盐度水质；逐污染组分另测另列。不是供水取水蒸气或送处理液。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：用cp_water采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

###### 水（`marine_water_discharge`）

仅用于真实液态水直接排入海水受体，CAS7732-18-5，海水排放，Volume/m3。记录来源、真实受纳海域时间体积盐度及另测组分，不默认清水或零污染。不是淡水受体、取水资源、蒸气或送处理液。

- 选定流：水 `631ecf13-0e51-4e35-8235-c6f80c60d72c`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：用cp_water采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`; `epa-heavy-construction-1995`

### 过程：物流及可复用施工资产（`logistics`）

记录装载返程及已含交付；持久跨项目实物资产使用记录支持设备模板份额，分母未知须审查。

#### 输入

##### 产品流

###### 柴油（`transport_diesel`）

实际自有承包货运燃料，须在已含供应服务边界外；真实载荷返程路线归属一次。不重复现场燃料或完整外购货运服务负担。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_transport采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`

###### 完整柴油液压挖掘机（`excavator_capital`）

仅用于明确纳入制造模块，以真实完整挖掘机实测净质量乘有依据归属因果活动份额，原质量和无量纲份额分别保留。按实际质量参考链接制造清单且仅缩放一次，不把负担向量标成kg。跨项目持久累计份额≤1，寿命活动分母未知须审查，每项目不重置全制造。

- 选定流：完整柴油液压挖掘机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_reuse采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_reuse`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`

###### 可复用针叶锯材混凝土模板板（`timber_formwork`）

仅用于真实临时模板，有依据复用返还及持久构件台账守恒制造份额。永久栈道板是不同去向。

- 选定流：可复用针叶锯材混凝土模板板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_reuse采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_reuse`
- 来源：`cedd-landscape-2026`; `epa-marina-2001`

### 过程：测试整改清理及验收产出（`handover`）

核对竣工几何层系设备、面层排水围护电气测试、调试整改及建植补植；真实清理废物及接收方分流。

#### 输出

##### 产品流

###### 已验收配置完整的户外运动或游憩设施（`finished_facility`）

一个完整真实验收设施，场址配置一致并含合同建植及已整改缺陷；参考及产出名称一致，不杜撰设施质量寿命。

- 选定流：已验收配置完整的户外运动或游憩设施
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 件
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 来源：`un-cpc3-2025`; `cedd-landscape-2026`; `se-natural-2025`

##### 废物流

###### 人造草坪毯裁切余料（`carpet_offcuts`）

仅记录真实余料总成，保留背衬纤维及接收方；脱落填充或其他聚合物余料分开，不自动回收抵扣。

- 选定流：人造草坪毯裁切余料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_waste_handover采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_handover`
- 来源：`un-cpc3-2025`; `cedd-landscape-2026`; `se-natural-2025`

###### 硬化硅酸盐水泥混凝土余料（`concrete_offcuts`）

真实浇筑整改非危险固体废物，分离钢筋涂层并核实接收方。不是新拌混凝土或洗出液。

- 选定流：硬化硅酸盐水泥混凝土余料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用cp_waste_handover采集本设施实际归属原子交换，保留批次状态单位，仅在上述真实条件发生时记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_handover`
- 来源：`un-cpc3-2025`; `cedd-landscape-2026`; `se-natural-2025`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| a_direct | 采用cp_material; cp_material_drainage; cp_material_surface; cp_material_landscape; cp_material_structure; cp_material_services、cp_energy、cp_transport先按实测工序地点批次归属，共享设备公用工程用真实分表或有依据因果活动，披露剩余及分母。造价面积不自动适当。 |  |
| a_reuse | 采用cp_reuse维护设备模板构件跨项目期间复用情形持久台账，有依据活动服务分母及同资产制造份额和≤1。分母未知须审查，不每项目重置全制造，损失退役翻新另证。 |  |
| a_destination | 场内复用是内部转移，外部有益利用及处置各份额去向互斥。不自动原生料替代回收生物碳抵扣。扩展抵扣须审查方法等效及守恒。 | cedd-landscape-2026; epa-marina-2001 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_handover | handover | 设施验收 | acceptance_record | 场址范围功能保留资产原状竣工几何层系跑道球场分类群围护泊位测试缺陷最终验收建植终点 | 签字验收实测几何完整安装建植表及缺陷整改 | item | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_material | earth | imported_fill; topsoil | delivery_installation_record | 行批次组成状态供应门端规格交货退回安装废物库存原单位换算时同批含水密度或单位面积质量；安装前损坏、拒收及替换量；期初期末可复用库存；经核实转移 | 校准称重交货证据实测层系根区及同批换算核对；全部材料或组件投入采用b_consumed_inputs，保留安装或验收前全部实际消耗损耗，并与安装几何分开；本协议仅覆盖earth，包含已声明行及该过程另有证据发生的原子投入。相关分过程协议与同一原始台账核对，每项物量只归属一次，保留真实失败、返工消耗及废物。 | kg | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_material_drainage | drainage | drain_pipe; drain_gravel; drain_sand; geotextile; irrigation_pipe | delivery_installation_record | 行批次组成状态供应门端规格交货退回安装废物库存原单位换算时同批含水密度或单位面积质量；安装前损坏、拒收及替换量；期初期末可复用库存；经核实转移 | 校准称重交货证据实测层系根区及同批换算核对；全部材料或组件投入采用b_consumed_inputs，保留安装或验收前全部实际消耗损耗，并与安装几何分开；本协议仅覆盖drainage，包含已声明行及该过程另有证据发生的原子投入。相关分过程协议与同一原始台账核对，每项物量只归属一次，保留真实失败、返工消耗及废物。 | kg | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_material_surface | surface | base_stone; grass_seed; turf_sod; artificial_carpet; infill_sand; sbr_infill; epdm_granules; surface_binder; shockpad; asphalt_course | delivery_installation_record | 行批次组成状态供应门端规格交货退回安装废物库存原单位换算时同批含水密度或单位面积质量；安装前损坏、拒收及替换量；期初期末可复用库存；经核实转移 | 校准称重交货证据实测层系根区及同批换算核对；全部材料或组件投入采用b_consumed_inputs，保留安装或验收前全部实际消耗损耗，并与安装几何分开；本协议仅覆盖surface，包含已声明行及该过程另有证据发生的原子投入。相关分过程协议与同一原始台账核对，每项物量只归属一次，保留真实失败、返工消耗及废物。 | kg | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_material_landscape | landscape | compost; fertilizer; wood_mulch | delivery_installation_record | 行批次组成状态供应门端规格交货退回安装废物库存原单位换算时同批含水密度或单位面积质量；安装前损坏、拒收及替换量；期初期末可复用库存；经核实转移 | 校准称重交货证据实测层系根区及同批换算核对；全部材料或组件投入采用b_consumed_inputs，保留安装或验收前全部实际消耗损耗，并与安装几何分开；本协议仅覆盖landscape，包含已声明行及该过程另有证据发生的原子投入。相关分过程协议与同一原始台账核对，每项物量只归属一次，保留真实失败、返工消耗及废物。 | kg | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_material_structure | structure | wet_concrete; reinforcing_bar; enclosure_mesh; viewing_glass; deck_plank; steel_pile; pontoon; mooring_cleat; beach_sand | delivery_installation_record | 行批次组成状态供应门端规格交货退回安装废物库存原单位换算时同批含水密度或单位面积质量；安装前损坏、拒收及替换量；期初期末可复用库存；经核实转移 | 校准称重交货证据实测层系根区及同批换算核对；全部材料或组件投入采用b_consumed_inputs，保留安装或验收前全部实际消耗损耗，并与安装几何分开；本协议仅覆盖structure，包含已声明行及该过程另有证据发生的原子投入。相关分过程协议与同一原始台账核对，每项物量只归属一次，保留真实失败、返工消耗及废物。 | kg | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_material_services | services | luminaire | delivery_installation_record | 行批次组成状态供应门端规格交货退回安装废物库存原单位换算时同批含水密度或单位面积质量；安装前损坏、拒收及替换量；期初期末可复用库存；经核实转移 | 校准称重交货证据实测层系根区及同批换算核对；全部材料或组件投入采用b_consumed_inputs，保留安装或验收前全部实际消耗损耗，并与安装几何分开；本协议仅覆盖services，包含已声明行及该过程另有证据发生的原子投入。相关分过程协议与同一原始台账核对，每项物量只归属一次，保留真实失败、返工消耗及废物。 | kg | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_plant | landscape | 各活体分类群 | nursery_planting_record | 分类群品种根系容器尺寸到货种植补植数量几何检查验收日期拒收去向；种植前损耗；期初期末可复用库存；经核实退回或转移 | 苗圃数量及真实种植补植检查至最终验收；按b_consumed_inputs计入截至最终验收全部可归属消耗苗木，含种植前损耗、建植失败及替换；成功种植件数和死亡苗木废物分别记录 | item | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_services | services | 各电缆设备 | installation_test_record | 构件规格总成边界供应地域真实安装长度数量裁切退回调试接口测试 | 可追溯交货实测长度数量及配置测试核对 | m; item | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_energy | support | 燃料电力分别 | meter_device_record | 工序设备日期电网电压读数燃料交货库存退回牌号组成换算密度供应边界 | 校准工序计量燃料日志，需要时真实批次密度热值，不采用公开属性系数 | kg; kWh; MJ | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_water | support | 供水取水排放分别 | meter_receiver_record | 工序日期真实来源地域受体淡水海水体积通量时段盐度温度海水kg匹配密度存储复用独立污染采样处理去向 | 接口分别计量体积守恒，海水质量称重或同状态密度，污染另测不假定纯度 | m3; kg | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_release | support | 各物质粒级 | measurement_reviewed_model | 来源工序物种CAS来源介质子介质时间粒级控制状态实测通量活动因子原件背景不确定性 | 代表性物种粒级测量或独立审查匹配模型，对实际净通量积分，注明未测释放 | kg | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_waste | earth | soil_waste; sediment_waste | destination_record | 行批次组成危险检验湿干状态质量体积真实来源接收运输处理清理 | 批次分开称重计量签字回执，土沉积物油洗出液分开，不默认处理回收效率；本协议仅覆盖earth，包含已声明行及该过程另有证据发生的原子废物。相关分过程协议与同一原始台账核对，每项物量只归属一次，保留真实失败、返工消耗及废物。 | kg; m3 | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_waste_support | support | washout; used_oil | destination_record | 行批次组成危险检验湿干状态质量体积真实来源接收运输处理清理 | 批次分开称重计量签字回执，土沉积物油洗出液分开，不默认处理回收效率；本协议仅覆盖support，包含已声明行及该过程另有证据发生的原子废物。相关分过程协议与同一原始台账核对，每项物量只归属一次，保留真实失败、返工消耗及废物。 | kg; m3 | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_waste_handover | handover | carpet_offcuts; concrete_offcuts | destination_record | 行批次组成危险检验湿干状态质量体积真实来源接收运输处理清理 | 批次分开称重计量签字回执，土沉积物油洗出液分开，不默认处理回收效率；本协议仅覆盖handover，包含已声明行及该过程另有证据发生的原子废物。相关分过程协议与同一原始台账核对，每项物量只归属一次，保留真实失败、返工消耗及废物。 | kg; m3 | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_transport | logistics | 真实货运燃料路段 | load_route_fuel_record | 货物设备起终点路段真实质量里程载荷返程燃料供应已含路段及归属份额 | 真实载荷路线燃料台账核对已含交付，不重复完整服务及全部燃料 | kg; km | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |
| cp_reuse | logistics | 复用资产制造份额 | cross_project_ledger | 资产配置实测质量真实活动有依据累计服务分母历史本次份额转移返还损失翻新 | 持久跨项目实物台账及有依据分母，份额和≤1，分母未知须审查 | kg; h; dimensionless | 每批次工序计量检查 | 实际施工至合同最终验收，含建植整改调试清理 | 同一场址设施范围及声明外部供应去向 | 每声明的参考流 | 校准原件代表性签字核对不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_project | all inventory rows | 对单一声明参考流，每真实归属工序批次仅计一次，保留实物单位及库存退回安装废物去向，不除以假定设施质量寿命 | cp_handover; cp_material; cp_material_drainage; cp_material_surface; cp_material_landscape; cp_material_structure; cp_material_services; cp_plant; cp_services; cp_energy; cp_water; cp_release; cp_waste; cp_waste_support; cp_waste_handover; cp_transport; cp_reuse | 每声明参考流的交换 | un-cpc3-2025 |
| c_state | Material state conversion | 体积转质量须同物料状态实测密度，面积转质量须同产品实测单位面积质量。保留含水温度盐度单位不确定性，未证保留原单位 | cp_material; cp_material_drainage; cp_material_surface; cp_material_landscape; cp_material_structure; cp_material_services; cp_water | 可追溯实物量，不是虚构设施质量 | cedd-landscape-2026 |
| c_energy | Electricity conversion | 实测kWh乘3.6为MJ，保留采用净热值。柴油本稿Mass/kg不自动转能量 | cp_energy | 每声明参考流实测MJ |  |
| c_release | Specific releases | 用物质粒级分辨实测或独立审查匹配活动因子模型，按真实时段对背景修正净通量积分。浓度NTU或dB开挖质量本身不是释放质量 | cp_release; cp_water; cp_energy | 特定物质介质交换，无依据基准须审查 | epa-marina-2001; epa-heavy-construction-1995 |
| c_share | Equipment/temporary manufacture | 真实资产制造清单乘持久台账中有依据因果活动份额，保留实物质量及跨项目期间复用累计份额≤1。分母未知须审查 | cp_reuse | 每声明参考流有依据制造清单 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_entity | 参考实体 | 同场址范围功能实测几何配置完整验收建植，不虚构质量寿命配比认证 | cp_handover |
| dq_material | 各物料及废物 | 批次组成状态门端实物量去向可追溯，披露身份及范围证据缺口 | cp_material; cp_material_drainage; cp_material_surface; cp_material_landscape; cp_material_structure; cp_material_services; cp_plant; cp_services; cp_waste; cp_waste_support; cp_waste_handover |
| dq_environment | 环境清单 | 真实受体物种粒级时间代表性，污染另测，未测非零，dB或NTU不硬转交换量 | cp_water; cp_release |
| dq_reuse | 复用设备构件 | 持久跨项目实物台账有依据分母累计份额≤1；未知寿命活动须审查 | cp_reuse |
| dq_completeness | 项目数据包 | 所有真实路线工序交换、逐项不适用、上下游计量身份覆盖分别披露；候选检查不证明实测数据或科学批准 | actual BOM/task ledger; cp_handover |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| v_reference | 须一个真实完整验收配置场址范围用途实测几何及最终建植验收终点，产出恰1件并与参考同产品。不是材料包或施工服务。 | un-cpc3-2025 |
| v_route | 按图纸台账材料清单测试核实现场支持交付及真实条件工序，列全实际构件设备公用工程建植返工物流废物，未核分支不可声称完整。 | se-natural-2025; se-artificial-2013; cedd-landscape-2026; defra-zoo-2012; epa-marina-2001 |
| v_identity | 采用UUID须匹配真实物质状态来源路线地域介质时间及主属性单位。中文名为官方baseName。电缆保留Length/m海水取用Mass/kg排水Volume/m3及正确受体。未解决身份显式保留。 | un-cpc3-2025 |
| v_basis | 清单协议一致按每声明参考流，核实实物换算供应现场接口库存废物平衡复用守恒，不确定关系须审查。 | cedd-landscape-2026 |
| v_release | 不虚构必然尘尾气或清水零污染。核实NO与NO2或NOx、非重叠PM粒级、真实外部转移、正确淡海受体及独立监测组分。披露未表征噪声栖息地土地碳。 | epa-heavy-construction-1995; epa-marina-2001 |
| v_coverage | 分别报告检查发现省略及计量身份路线阶段覆盖。上游链接不构成全寿命完整从摇篮到大门或比较等效方法，候选技术检查不授科学批准或发表。 | un-cpc3-2025 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景施工及验收交付实体记录 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 同场址功能配置及声明边界施工交付建模；全寿命须独立有依据上下游阶段 |
| excluded_use | 无条件全寿命完整从摇篮到大门比较等效；运营饲养服务；默认质量寿命配方认证法律批准 |
| required_metadata | 参考实测几何配置、全部路线工序、供应运输、日期验收建植、分类群物态、电网电压、水资源受体、台账协议、复用份额、外部链接 |
| required_quality_disclosure | 实测建模来源不确定性身份范围缺口、路线阶段覆盖、未表征噪声栖息地土地碳水污染和缺失释放；科学审查元数据管理 |
| update_trigger | 功能场地配置层系分类群供应验收建植水受体复用分母变化，新增实际证据身份 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Explanatory Notes (30Jun2025), PDF/printed pp281–282; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; 资料获取 2026-10-06 | 仅范围，排除室内运动，不构成方法批准 |
| se-natural-2025 | official_guidance | Sport England Natural Turf for Sport Part B (May2025), pp11–28,33–35; https://sportengland-production-files.s3.eu-west-2.amazonaws.com/s3fs-public/2025-05/NTS-Part-B-Playing-fields.pdf; 资料获取 2026-10-06 | 天然草坪排水施工路线及建植，不照搬尺寸配方 |
| se-artificial-2013 | official_guidance | Sport England Artificial Surfaces for Outdoor Sport (Dec Revision003,2013), printed pp9–16,21–26 / PDF10–17,22–27; https://sportengland-production-files.s3.eu-west-2.amazonaws.com/s3fs-public/artificial-surfaces-for-outdoor-sports-2013.pdf; 资料获取 2026-10-06 | 仅历史物理层系工序，不证明当前认证安全寿命法律资格；须真实规格测试 |
| cedd-landscape-2026 | official_guidance | CEDD General Specification Civil Engineering Works 2020 Edition Vol1 Rev8 (23Jul2026), §3 pp3.3,3.14–3.15,3.18–3.24 / PDF116,127–128,131–137; https://www.cedd.gov.hk/filemanager/eng/content_978/GS%202020%20Vol%201%20Rev%208_clean.pdf; 资料获取 2026-10-06 | 土种植及合同建植验收，香港规格仅实际采用时适用，不照搬固定数量期间 |
| epa-marina-2001 | official_guidance | EPA National Management Measures Marinas and Recreational Boating (2001), §4 pp4-7,4-13,4-19,4-27,4-31,4-45,4-77; https://www.epa.gov/sites/default/files/2015-10/documents/2001_10_30_nps_mmsp_section4.pdf; 资料获取 2026-10-06 | 历史新扩建码头设计水栖息地机制及选定护岸径流加油污水安装，不证明当前法律批准或因子 |
| defra-zoo-2012 | official_guidance | DEFRA Standards of Modern Zoo Practice (2012), §§2.1–2.11,3.4,8.2–8.18; printed pp6–8,16–17 / PDF10–12,20–21; https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/69596/standards-of-zoo-practice.pdf; 资料获取 2026-10-06 | 围护排水通行及物种特定安装背景，须真实本地验收，不提供通用荷载运营清单 |
| usga-green-2018 | official_guidance | USGA Recommendations for a Method of Putting Green Construction (2018), Steps2–8 printed pp2–15 / PDF3–16; primary authored document linked from USGA official collection; https://archive.lib.msu.edu/tic/usgamisc/monos/2018recommendationsmethodputtinggreen.pdf; 资料获取 2026-10-06 | 仅真实声明USGA果岭根区建植，不是整场配方，不照搬层厚配比寿命 |
| epa-heavy-construction-1995 | official_guidance | EPA AP42 §13.2.3 Heavy Construction Operations (Jan1995), pp13.2.3-1–2; https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf; 资料获取 2026-10-06 | 仅历史扬尘机制及面积月TSP限制，不采用数值因子分子尾气量或PM粒级量 |
