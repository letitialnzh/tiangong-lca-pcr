---
pcr_id: pcr.existing-outdoor-acrylic-tennis-hardcourt-recoating-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有室外丙烯酸网球硬地重涂修复服务

## 1. 范围与适用性

本PCR适用于一项有明确范围的修复合同：在已确认合格的室外密实沥青球场或兼容既有丙烯酸涂层上，重涂无缓冲丙烯酸纹理/颜色面层及网球线标。合同包括清洗、松散物清除、兼容的局部非结构性修补、实际指定的兼容丙烯酸找平底涂、颜色涂布及干燥固化、线标施工、缺陷闭环和签署修复交付。采用实际产品现行说明及项目规范。

排除保留透水性的多孔碎石沥青喷涂系统、新建路面/基层/排水、结构裂缝或沉降修复、混凝土酸洗、缓冲橡胶层、人造草或红土、新建网柱/围栏/照明、室内球场以及未来使用或定期维护。结构或排水资格不合格时，须先采用其他修复范围；涂漆不能证明基面合格。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.existing-outdoor-acrylic-tennis-hardcourt-recoating-services |
| classification_refs | cpc:3.0:54270；范围更窄的限定修复类别 |
| covered_products | 在密实既有基面上完成并验收交付的室外网球硬地无缓冲丙烯酸重涂修复 |
| excluded_products | 新球场建造；多孔喷涂；结构修复；混凝土酸洗；缓冲及室内系统 |
| representative_product | 既有完好密实沥青球场经清洗修补，兼容重涂、固化和网球线标施工后交付 |
| production_route | 合格保留基面 -> 清洗/局部修补验收 -> 兼容丙烯酸系统及颜色涂层 -> 干燥固化与网球线标 -> 缺陷闭环及修复验收 |
| market_state | 场址特定的已完工建设修复服务；供货涂料仍为投入品 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收合格的既有室外丙烯酸网球硬地重涂修复服务 |
| How much | 1 item 实际验收合同，附球场编号及处理/线标几何信息 |
| How well | 完好、排水合格且兼容的既有基面；批准产品系统、纹理/颜色、尺寸及指定运动面性能验收；缺陷已闭环 |
| How long or cycle | 一次有日期的修复作业期，直至签署交付及开放许可；列明清洗修补/涂布/固化/线标/返工日期，以及跨全部项目的资产制造、使用、更换、寿命终止和报废时期。不承诺运动使用寿命。 |
| reference_flow_link | `accepted_recoating_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格的既有室外丙烯酸网球硬地重涂修复服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 合同/球场编号；地点及日期；基面材料/既有涂层状态及资格；处理/线标面积m2与线标尺寸m；实际批准产品及供货状态；调色/涂层/批次记录；天气/干燥/固化；检验/缺陷闭环及交付标准；资产时期和上游覆盖 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| counted_contract | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 一项定义清楚的验收修复合同为参考；球场数量和面积是属性，不构成不同合同之间的等效性。 |
| wet_dry_mass | 涂料、色浆、修补材料及残余行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别保留供货湿态数量、实际添加组分、湿态涂布量及干膜/蒸发量；体积换质量须有批次实际密度和温度。不得以干膜厚度或通用覆盖率推算湿质量。 |
| native_services | 电力、资产服务时间及运输 | 实际兼容属性 | 按实际记录的kWh；h；t.km | 保留原生单位；实际交换须确认完整支持链。不得将电量、时长或运输换为件数。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

 收货/领用/向外总量指扣除车辆/容器皮重但未预扣退货或外移的材料量；保留实测总载荷和皮重，两者之差作为材料质量进入衡算，不能把车/容器总重当成涂料量。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 经实际检验确认结构完好、排水适当的密实沥青/兼容丙烯酸室外球场；原有建造为保留基面存量。 |
| starting_condition_role | 增量修复的保留场址资产；原有建造在限定服务之外，当前清洗修补负荷仍须计入。 |
| product_classification_scope | CPC54270内限定的室外体育设施修复，非全部设施或全部修复系统。 |
| recursive_input_rule | 同类别外包修复为上游服务，须明确球场/活动覆盖；只计一次并排除与自营投入重叠部分，不递归重建原球场。 |
| upstream_dataset_requirement | 各产品与服务须使用实际供货状态的数据集，明确制造、包装、运输和资产完整寿命覆盖；未解决身份/覆盖不得完成具体交换定稿。 |
| disclosure | 基面资格、几何、修复范围、供应商系统/说明、收料与存量、内部交接责任、废物/排放、运输覆盖、分包排除及时期/资产台账。 |

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| incremental_host | 保留基面及prepare_host | 计入涂布前的实际检查准备、清洗收集、松散物去除和局部非结构修补。不分配新基面负荷或避免新球场抵扣；结构/排水失效不属本合格重涂路线。 | sportmaster-maintenance; sportmaster-neutral-ready-mix-202406 |
| physical_gates | prepare_host; finish_surface | prepare_host负责从有脏污/松散或局部缺陷的合格既有基面到清洁平顺齐平验收基面；finish_surface接收同一编号基面面积，负责有条件兼容底涂、颜色纹理涂层、干燥固化、线标和最终修复交付。交接是真实状态，不是第二个对外产品或新增球场建造。 | sportmaster-neutral-ready-mix-202406 |
| system_identity | 全部供货涂层系统产品 | 声明实际供货产品和配方。Neutral Ready-Mix CMT68须另加实际色浆且不得加施工稀释水；已着色ready-mix和浓缩料有不同供货身份。搅拌调色内嵌在涂布中，无独立配制品输出；清洗/工具水单独计量。 | sportmaster-neutral-ready-mix-202406; sportmaster-tennis-surfaces |
| residual_ownership | 两节点残余和排放交换 | 计入当前准备及涂布的实际残余、收集废水、包装和真实基本流排放。购水为产品，实际取水为基本流投入，收集废水为废物移交，不能将其中全部溶解物视为已排放。不得虚构涂料水污染物或笼统VOC/PM身份。 | sportmaster-neutral-ready-mix-202406 |
| complete_life | prep_assets; finish_assets | 自有清洗机、搅拌机、涂布和线标工具按资产、消费节点、其他项目和时期索引，计入制造、维护、更换和寿命末期份额。供应商服务须明确覆盖这些负荷，否则单独计入未覆盖份额；剩余寿命/存量保留其携带负荷。 完整寿命分配不要求在役资产已实际退役：已结束生命周期使用实测历史，在役资产可用有依据的前瞻剩余服务、更换/寿命终止及报废情景。预测与观测分开，披露总服务分母/来源、不确定性和敏感性，实际生命周期事件或使用证据改变时更新。缺有依据的完整覆盖或分母才阻止定稿，不编造寿命或未来退役事实。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际批准的准备清洗产品 (`prep_cleaners`)

过程／待建立交换的方向／类型：`prepare_host` / `inputs` / `product`.

有条件使用的每种实际兼容洗涤剂/杀生物产品须有浓度和供货状态；不同产品展开为独立具体交换，不得合计异质化学身份。维护用漂白剂/TSP配方不是通用施工准备要求。

- 采集对象：实际批准的准备清洗产品
- 流属性/单位：质量 / kg
- 数量规则：按具体产品、浓度及清洗事件记录实际批次总领用量；区分配制品质量和有效成分含量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_materials`
- 来源：`sportmaster-maintenance`

数量范围证据需求：取得实际批准清洗说明/SDS、剂量、处理范围及称量领用/退回数据；无通用杀生物配方或数量范围。

#### 采集要求：实际兼容的局部非结构修补产品 (`prep_repairs`)

过程／待建立交换的方向／类型：`prepare_host` / `inputs` / `product`.

每种实际裂缝/修补/粘结/填充材料或组分按供货状态分别交换；确认兼容性及非结构修补限度。实际选用粘结剂所需另加水泥/砂为独立身份，不能从丙烯酸修补名称普遍推断。

- 采集对象：实际兼容的局部非结构修补产品
- 流属性/单位：质量 / kg
- 数量规则：按实际修补产品或组分、批次及缺陷位置称量总收料/领用；保留存量和真实退回量另列。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_materials`
- 来源：`sportmaster-neutral-ready-mix-202406`; `sportmaster-tennis-surfaces`

数量范围证据需求：取得实际缺陷图、批准产品说明、修补尺寸与批次计量；无通用每裂缝长度质量、配方或深度。

#### 采集要求：实际准备围护及清洗耗材 (`prep_consumables`)

过程／待建立交换的方向／类型：`prepare_host` / `inputs` / `product`.

有条件的购买吸附材料、临时保护/围护和一次性清洗用品按实际身份分别展开。供应商已包含的包装在材料供货内，不重复计为上游采购。

- 采集对象：实际准备围护及清洗耗材
- 流属性/单位：质量 / kg
- 数量规则：按用品及事件实际称量，或用件数及实测单件质量计算领用；保留产品退回及可用期末存量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_materials`

数量范围证据需求：采集用品规格、计件时的单件质量、清洗/围护方法及实测用量；不设耗材比例。

#### 采集要求：实际总量供应进入准备节点的燃料 (`prep_fuel`)

过程／待建立交换的方向／类型：`prepare_host` / `inputs` / `product`.

每种实际发动机燃料品级/状态有条件分别交换；区分用电及供应商已覆盖的设备服务。未耗可用燃料跨责任边界退回走产品退回，废弃/回收液体走废物流，实际环境物质排放走基本流。边界内油箱转移不产生新增消耗。此投入是进入节点的燃料总量，实际燃烧量是另行推导的活动量。

- 采集对象：实际总量供应进入准备节点的燃料
- 流属性/单位：质量 / kg
- 数量规则：按具体品级/事件记录跨入本节点的实际总供油/领料；分别保留期初期末存量、真实可用外退/外转、未燃废物及实际排放。已记录外退输出时不能在此投入净扣；仅以第8节燃料衡算另算实际燃烧活动量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_operations`

数量范围证据需求：采集设备/燃料品级、油箱/领料记录、实际密度与各运行消耗不确定性；无通用柴油剂量。

#### 采集要求：实际准备货运服务 (`prep_logistics`)

过程／待建立交换的方向／类型：`prepare_host` / `inputs` / `product`.

实际进场材料/设备及出场残余运输按方式、供应商、货物状态及路段分别记录；保留载荷、距离、空返处理和上游包含范围。已在供货/供应商服务中覆盖的路段不能再次计入。

- 采集对象：实际准备货运服务
- 流属性/单位：运输服务 / t.km
- 数量规则：每项具体服务按实际货物吨数及路段公里计算，声明空返分配；服务支持身份在确认前保留未解决。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_operations`

数量范围证据需求：采集真实运单、路线距离、有效载荷和供应商范围，逐路段导出不确定性；无通用运距或装载系数。

#### 采集要求：实际准备可复用设备服务份额 (`prep_assets`)

过程／待建立交换的方向／类型：`prepare_host` / `inputs` / `product`.

准备使用的各清洗机、泵、搅拌机及工具保留原生使用小时或有据的实际物理驱动量。按prepare_host、finish_surface及其他项目/时期分配实际完整寿命制造、维护/更换及报废份额；供应商覆盖须明确。

- 采集对象：实际准备可复用设备服务份额
- 流属性/单位：时长 / h
- 数量规则：按资产/事件/时期实测准备使用时间；资产台账给出完整寿命服务份额。单项目小时不是资产件数或第二次购买资产。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_operations`

数量范围证据需求：取得资产编号、实测使用/寿命、更换/终止、其他消费方及供应商覆盖；不假设工具寿命或每球场小时数。

#### 采集要求：实际直接抽取的准备水 (`prep_abstraction`)

过程／待建立交换的方向／类型：`prepare_host` / `inputs` / `elementary`.

仅实际从已识别水源/环境介质取水；排除购买水和内部循环，不同取水源有不同具体身份。

- 采集对象：实际直接抽取的准备水
- 流属性/单位：质量 / kg
- 数量规则：以实际源水表/取水记录、密度/温度换算并记录水源、许可和使用事件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_materials`

数量范围证据需求：发生取水时须有实际取水计量、水源/季节记录；零取水须由无此活动的证据支持。

#### 采集要求：准备交接时合格清洁齐平的既有基面 (`prepared_host_output`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `product`.

经准备验收的保留球场实际面积，以交接编号关联prepared_host_input。原基面不是上游新建球场，该内部接口仅传递一次准备负荷。

- 采集对象：准备交接时合格清洁齐平的既有基面
- 流属性/单位：面积 / m2
- 数量规则：按球场/修复边界及交接编号实测验收面积；排除或不合格区域在纠正前另留记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_state`
- 来源：`sportmaster-neutral-ready-mix-202406`

数量范围证据需求：采集实际验收几何、容差、检验及交接；无通用球场面积或全域自动合格。

#### 采集要求：实际跨责任边界退回的可用准备产品 (`prep_returns`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `product`.

实际退供应商或转其他项目的可用修补/清洗/耗材按具体产品记录；现场保留期末存量不为输出。投入保留总量，不得先净扣再输出同一退回。包含未耗可用燃料按品级/批次真实外退/外转，区分内部油箱转移及保留燃料存量。

- 采集对象：实际跨责任边界退回的可用准备产品
- 流属性/单位：质量 / kg
- 数量规则：按原批次身份、状态、去向、责任转移时间及上游负荷处理称量外退总量；区别废弃品。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_residuals`

数量范围证据需求：取得退回凭证、可用性验收及批次收料/存量平衡；不设退回比例。

#### 采集要求：实际清除的松散涂层及准备碎屑废物 (`prep_removed_solids`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `waste`.

实际刮除涂层、尘土/碎屑及失败修补材料按组成和废物类别/去向分别记录。保留完好涂层/基面为起始存量，不是新投入或废物。

- 采集对象：实际清除的松散涂层及准备碎屑废物
- 流属性/单位：质量 / kg
- 数量规则：实际移除载荷/容器称重并扣皮，记录含水状态、接收处理/责任，排除仍留基面的质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_residuals`
- 来源：`sportmaster-neutral-ready-mix-202406`

数量范围证据需求：取得实际清除位置图、分流载荷质量/水分与去向凭证；不设清除百分比。

#### 采集要求：实际准备包装及废耗材 (`prep_used_articles`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `waste`.

各实际容器、吸附用品、围护/清洗用品按材料及污染区分。可复用及供应商所有包装的产品退回按责任记录；上游包含包装不得重复购买。

- 采集对象：实际准备包装及废耗材
- 流属性/单位：质量 / kg
- 数量规则：按用品/材料、扣皮/残余分离、去向和事件称量实际废物，供应商已覆盖处理只计一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_residuals`

数量范围证据需求：取得实际包装清单及废用品质量/污染/去向；无通用包装百分比。

#### 采集要求：实际准备向环境释放的物质 (`prep_releases`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `elementary`.

按实际物质及空气/水/土壤介质有条件记录零、一或多项排放，包括实际发动机尾气、粉尘粒径及未收集漂洗物质；分别展开，笼统VOC、PM和废水不是具体基本流物质。模型/推导物质量由采集计算，保留直接监测及是否使用因子。

- 采集对象：实际准备向环境释放的物质
- 流属性/单位：质量 / kg
- 数量规则：根据实测归属活动与适用物种因子/方法计算，或不使用活动模型而采用直接监测；按第8节物种计算保留方法、因子分子/分母单位、产品/技术/介质适用性、捕集和不确定性。燃料活动仅为实际消耗/燃烧量，排除未燃退回/废物/泄漏；直接记录作为计算投入。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prep_residuals`

数量范围证据需求：取得实际物质/SDS/检测、尾气或排放方法/因子、粒径/介质/捕集及不确定性证据；不编造排放因子。

#### 采集要求：准备交接时合格清洁齐平的既有基面 (`prepared_host_input`)

过程／待建立交换的方向／类型：`finish_surface` / `inputs` / `product`.

接收prepared_host_output的同一面积/状态/交接编号，须已完成基面资格、清洗及齐平局部修补。准备负荷仅传递一次；非新路面供货，亦非额外对外验收球场。

- 采集对象：准备交接时合格清洁齐平的既有基面
- 流属性/单位：面积 / m2
- 数量规则：按球场/位置匹配验收实测交接面积；不合格基面返回prepare_host并关联返工事件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_state`
- 来源：`sportmaster-neutral-ready-mix-202406`

数量范围证据需求：取得匹配面积/交接/检验及测量容差，解释面积变化；不套标准球场面积。

#### 采集要求：实际另加的批准涂层系统组分 (`finish_recipe_additions`)

过程／待建立交换的方向／类型：`finish_surface` / `inputs` / `product`.

仅实际选定底涂或涂料说明要求时，分别列零、一或多种组分。实际砂、水或其他组分各有供货状态及角色，分别展开；不得向Neutral Ready-Mix CMT68加稀释水，不重复计工厂已含填料/水。

- 采集对象：实际另加的批准涂层系统组分
- 流属性/单位：质量 / kg
- 数量规则：按具体产品/组分/批次计量真实领用和加入量，记录来源/密度/状态，不合计异质材料。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_materials`
- 来源：`sportmaster-neutral-ready-mix-202406`; `sportmaster-tennis-surfaces`

数量范围证据需求：取得实际产品现行混合说明及批次称量/计量；不借用浓缩料配方用于ready-mix。

#### 采集要求：实际涂布遮蔽及辅助产品 (`finish_auxiliaries`)

过程／待建立交换的方向／类型：`finish_surface` / `inputs` / `product`.

有条件分别记录遮蔽胶带、保护/清洗用品或批准线标底剂的实际供货身份；各产品独立交换，可复用用品入资产账。不自动推断无关面漆或附着促进剂。

- 采集对象：实际涂布遮蔽及辅助产品
- 流属性/单位：质量 / kg
- 数量规则：按产品/运行记录总领用，称量或有实测单件质量支持计件换算，并留存量/退回账。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_materials`
- 来源：`sportmaster-tennis-surfaces`

数量范围证据需求：取得实际批准工序及各用品/产品规格和使用记录；不设通用胶带/底剂量。

#### 采集要求：实际总量供应进入涂布节点的燃料 (`finish_fuel`)

过程／待建立交换的方向／类型：`finish_surface` / `inputs` / `product`.

每种实际动力或进出场设备燃料产品/品级有条件单列，区别已在供应商服务或上游运输中覆盖的部分。未耗可用燃料外退走产品退回，未燃废弃/回收液体走废物，实际环境物质排放走基本流；边界内油箱转移不增加消耗。投入是进入节点总燃料量，实际燃烧量为另算活动量。

- 采集对象：实际总量供应进入涂布节点的燃料
- 流属性/单位：质量 / kg
- 数量规则：按具体品级/事件记录跨入本节点的实际总供油/领料；期初期末存量、可用真实外退/外转、未燃废物及实际排放另列。已列退回输出时不能在投入净扣；仅用第8节燃料衡算另算燃烧活动量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_operations`

数量范围证据需求：采集实际发动机、燃料、油箱/领料及运行证据；无标准单位面积燃料因子。

#### 采集要求：实际涂布货运服务 (`finish_logistics`)

过程／待建立交换的方向／类型：`finish_surface` / `inputs` / `product`.

材料/工具送货、真实退回和废物收运按货物/方式/供应商分别列真实路段、距离/载荷及空返规则。识别上游/供应商已含运输，不再增计负荷。

- 采集对象：实际涂布货运服务
- 流属性/单位：运输服务 / t.km
- 数量规则：按具体运输路段及分配份额记录实际吨数和公里数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_operations`

数量范围证据需求：取得真实运单/载荷/路线及供应商包含范围证据；无示例运距默认值。

#### 采集要求：实际涂布可复用设备服务份额 (`finish_assets`)

过程／待建立交换的方向／类型：`finish_surface` / `inputs` / `product`.

各搅拌机、搅拌桨、刮板和线标设备采用真实原生服务驱动量。完整寿命台账关联准备/涂布、其他合同/时期、制造、维护/更换/终止及报废一次；明确服务已含覆盖或未覆盖资本份额。

- 采集对象：实际涂布可复用设备服务份额
- 流属性/单位：时长 / h
- 数量规则：按资产/运行计量使用时间，并分配在全部消费方完整寿命总服务中的份额；手工具可用其他有据物理驱动量但须保留其真实属性/单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_operations`

数量范围证据需求：采集资产使用/制造/维护/报废证据及其他项目/时期驱动量；不虚构件数换算或默认寿命。

#### 采集要求：实际直接抽取的涂布清洗水 (`finish_abstraction`)

过程／待建立交换的方向／类型：`finish_surface` / `inputs` / `elementary`.

仅实际从已识别水源抽取新水用于工具/换色清洗或允许的独立配方角色，不是购水或循环；不得违规稀释Neutral Ready-Mix。

- 采集对象：实际直接抽取的涂布清洗水
- 流属性/单位：质量 / kg
- 数量规则：按水源/事件取水表或记录及实际密度/温度换算，保留允许用途。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_materials`

数量范围证据需求：采集源水表、水源/季节及实际清洗事件；零取水须有无此活动证据。

#### 采集要求：实际跨责任边界退回的可用涂布产品 (`finish_returns`)

过程／待建立交换的方向／类型：`finish_surface` / `outputs` / `product`.

实际出场退供应商或转其他项目的可用涂料/色浆/线漆/辅助产品批次须有去向和携带负荷。现场期末保留存量为内部账项，实际废物不能靠会计选择变成产品退回。未耗可用燃料按品级/批次外退/外转亦列此处，区别内部转油和保留燃料。

- 采集对象：实际跨责任边界退回的可用涂布产品
- 流属性/单位：质量 / kg
- 数量规则：按原供货或已记录混合状态、批次和责任移交事件称量真实可用外退总量；不能先净扣收料又输出同一数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_residuals`

数量范围证据需求：取得实际发运/接收可用性、湿态及批次平衡证据；不假设回收/退回比例。

#### 采集要求：实际湿涂料及去除缺陷膜废物 (`finish_coating_wastes`)

过程／待建立交换的方向／类型：`finish_surface` / `outputs` / `waste`.

按身份/组成、湿干状态及处理去向分开真实不可用剩余涂料、色浆、线漆和刮除返工废料。留在基面的合格干膜不是废物，失败区域须返工而非增加验收服务。

- 采集对象：实际湿涂料及去除缺陷膜废物
- 流属性/单位：质量 / kg
- 数量规则：实际废容器/载荷称量扣皮并记录湿态、来源批次/缺陷和处理，排除另记废水质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_residuals`

数量范围证据需求：采集实际不可用余料/残余/去除膜质量，必要时固含量、缺陷图及处理票据；无通用涂料损失率。

#### 采集要求：实际涂布包装及废遮蔽用品 (`finish_spent_articles`)

过程／待建立交换的方向／类型：`finish_surface` / `outputs` / `waste`.

各容器、胶带、保护膜和清洗用品按材料/污染/去向分别记录；供应商包装上游负荷只计一次，可用退回/保留存量无证据不得作废物。

- 采集对象：实际涂布包装及废遮蔽用品
- 流属性/单位：质量 / kg
- 数量规则：称量实际用品及包装废物，单独识别内含涂料残余及供应商已含处理覆盖。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_residuals`

数量范围证据需求：取得实际包装/用品规格、废物质量及处理/责任凭证；无通用容器或胶带质量。

#### 采集要求：实际涂布向环境释放的物质 (`finish_releases`)

过程／待建立交换的方向／类型：`finish_surface` / `outputs` / `elementary`.

依据实际产品SDS/组成和实测/模型事件，按物质及接收介质有条件记录蒸发/排放/排水。不得把全部湿涂料水称污染物、使用笼统VOC或合计不明排放；区分固化水和真实物种。模型/推导物质量按采集计算，保留直接监测及是否用因子。

- 采集对象：实际涂布向环境释放的物质
- 流属性/单位：质量 / kg
- 数量规则：根据实测归属活动和适用物种因子/方法计算，或不用活动模型而采用直接监测；按第8节物种计算保留方法、因子分子/分母单位、产品/技术/介质适用性、捕集及不确定性。燃料活动仅实际消耗/燃烧量，排除未燃退回/废物/泄漏；直接记录为计算投入。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_residuals`

数量范围证据需求：取得实际产品/SDS组成、干膜、物种因子/监测、捕集和接收介质证据；不从丙烯酸宣传名称推断排放。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| prepare_host | 清洗及局部修补合格既有基面 | required | 合格密实既有基面；实际清洗和局部修补范围 | 前景处理；合格清洁齐平基面交接 | 实际验收处理面积m2，关联合同和交接编号 |
| finish_surface | 施作兼容丙烯酸系统并验收带线标固化表面 | required | 合格准备基面；底涂仅在实际规范要求时使用 | 前景表面加工；最终修复交付 | 1 item 验收合同 |

生产按球场特定作业期组织，索引材料批次、调色/颜色/线标运行、涂层和换色清洗。准备不合格返回prepare_host；缺陷重涂在同一合同下重复责任工序并保留全部负荷。最终验收服务排除未解决的不合格区域。不创建采购或仅检验的假节点。

### 过程：清洗及局部修补合格既有基面 (`prepare_host`)

#### 输入

##### 产品流

###### 实际供应的准备清洗水 (`prep_supplied_water`)

实际清洗及修补准备使用的购买/公用供水，不含涂料稀释水及单列直接取水；循环用水为内部循环，补充新水另行计量。

- 选定流：实际供应的准备清洗水
- 流属性/单位：质量 / kg
- 数量规则：按起止水表或送水批次分配至本合同的实际总供水；L或m3换算须用实际密度/温度并记录精度。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_materials`
- 来源：`sportmaster-maintenance`

数量范围证据需求：采集现场清洗方法、处理面积、各清洗事件实际新水、密度和水表不确定性；无通用kg/m2清洗系数。

###### 实际准备电力供应 (`prep_electricity`)

prepare_host内实际清洗机/泵/搅拌/检验用电，保留供电电压、地域、时间和供应商覆盖。原生电量为kWh，具体支持身份须另行确认。

- 选定流：实际准备电力供应
- 流属性/单位：能量 / kWh
- 数量规则：按设备/事件分表记录，合用电表按实测运行时间/负荷有据拆分，不能仅用铭牌估算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_operations`

数量范围证据需求：取得准备专属电表/运行记录及实测分配不确定性；无默认单位面积电耗。

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 实际收集移交处理的准备废水 (`prep_wastewater`)

收集的清洗/漂洗/修补水含实际悬浮涂层/碎屑及清洗剂，移交已识别处理方。废水混合物湿质量与捕集外实际排放物质分开。

- 选定流：实际收集移交处理的准备废水
- 流属性/单位：质量 / kg
- 数量规则：实际收集罐/载荷水量平衡或湿废水称量，附组成/采样及下游责任；避免与已单独称量分离固体重复。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_residuals`

数量范围证据需求：采集收集体积/密度、雨水径流流入、固液分离及处理票据和采样不确定性；不设默认捕集率或排放份额。

###### 实际未燃废弃或回收燃料废物 (`prep_fuel_wastes`)

按实际品级/组成分别记录不合格/未燃燃料、回收的游离泄漏液及送废物接收方的含燃料清理混合物。混合物总量与其中燃料量分开；可用燃料外退是产品，失控释放的具体物质走基本流。

- 选定流：实际未燃废弃或回收燃料废物
- 流属性/单位：质量 / kg
- 数量规则：按品级/组成、原事件和接收责任称量实际未燃废物，混合物保留燃料含量计量；对齐燃料衡算且不得计为燃烧量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_residuals`

数量范围证据需求：取得真实事故/油箱排放、分流废物质量/组成和接收记录；无此废物须有事件证据，不设泄漏/回收比例。

##### 基本流

### 过程：施作兼容丙烯酸系统并验收带线标固化表面 (`finish_surface`)

#### 输入

##### 产品流

###### 实际供应的兼容丙烯酸找平底涂产品 (`finish_surfacer`)

仅在实际基面粗糙/孔隙及批准系统要求致密兼容底层时使用，确认具体供货产品和状态。工厂已含砂/水保留在供货质量中，实际另加配方组分为独立交换。

- 选定流：实际供应的兼容丙烯酸找平底涂产品
- 流属性/单位：质量 / kg
- 数量规则：按批次及涂层/运行记录实际供货湿底涂总收料/领用；分别记录涂布、存量、退回和残余。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_materials`
- 来源：`sportmaster-neutral-ready-mix-202406`; `sportmaster-tennis-surfaces`

数量范围证据需求：取得现行批准配方、基面状态、实际覆盖率及批次质量；颜色层通用体积覆盖率不能成为底涂kg/m2。

###### 实际供应的丙烯酸颜色涂料产品 (`finish_colour`)

实际无缓冲网球颜色产品须保持确切供货状态。Neutral Ready-Mix CMT68基料未调色，另加实际ColorPlus色浆且不得加水；已着色ready-mix及浓缩料供货身份不同，不混用配方。

- 选定流：实际供应的丙烯酸颜色涂料产品
- 流属性/单位：质量 / kg
- 数量规则：按产品/批次/运行计量供货湿涂料总量，保留供货含砂/水/色浆状态及涂布、真实外退、可用存量和残余账。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_materials`
- 来源：`sportmaster-neutral-ready-mix-202406`; `sportmaster-tennis-surfaces`

数量范围证据需求：取得实际产品/批次湿质量或密度支持体积、处理面积、层数、天气及损失证据；CMT68近似体积覆盖率不成为通用kg/m2或干膜质量。

###### 实际另供的批准色浆 (`finish_tint`)

选用基料要求调色时，另列实际色浆产品/颜色及供货状态。Neutral Ready-Mix CMT68必须实际加色浆；仅真实工厂着色且无加色要求的供货品可不加。不能从乳液颜色推断原生颜料。

- 选定流：实际另供的批准色浆
- 流属性/单位：质量 / kg
- 数量规则：按色浆批次、基料桶/调色批次、颜色及涂层称量实际加入量；总收料/领用和未用存量/外退分别记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_materials`
- 来源：`sportmaster-neutral-ready-mix-202406`

数量范围证据需求：取得所选现行基料/色浆说明及实际加入量/密度；CMT68按桶体积说明不是其他产品的通用色浆质量。

###### 实际兼容的丙烯酸网球线标漆 (`finish_line_paint`)

实际纹理/颜色和兼容系统的确切供货线标漆，与场地颜色层分开。实际透明线标底剂须在辅助产品要求下另列具体产品。

- 选定流：实际兼容的丙烯酸网球线标漆
- 流属性/单位：质量 / kg
- 数量规则：按批次/运行称量线标漆总领用，分别实测涂布/退回/存量/残余；线长/线宽/面积仍为实测属性。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_materials`
- 来源：`sportmaster-tennis-surfaces`

数量范围证据需求：取得实际线标产品说明、线标几何和称量施工记录；不假设面积换涂料质量系数。

###### 实际供应的涂布工具及换色清洗水 (`finish_tool_water`)

用于搅拌/刮板/线标设备清洗及项目批准表面漂洗的真实购水，与配方水分开，不表示稀释ready-mix。实际直接取水须另列已识别基本流来源。

- 选定流：实际供应的涂布工具及换色清洗水
- 流属性/单位：质量 / kg
- 数量规则：按清洗/换色事件计量真实补水/送水；内部循环不算新水，体积换算用实际密度。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_materials`

数量范围证据需求：采集实际清洗方法、换色频次、新水补充、收集平衡及水表不确定性；无固定漂洗或每涂料桶水量。

###### 实际涂布电力供应 (`finish_electricity`)

真实动力搅拌、泵送/线标或验收设备供电，保留供应商、地域、时间及原生kWh。干燥固化用电仅实际发生时记录，不从天气干燥推断。

- 选定流：实际涂布电力供应
- 流属性/单位：能量 / kWh
- 数量规则：按设备/事件计量，合用线路按实测分配，排除供应商服务已含电量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_operations`

数量范围证据需求：取得实际设备/事件用电及供电记录、负荷/时间依据和不确定性；无通用固化能耗。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的既有室外丙烯酸网球硬地重涂修复服务 (`accepted_recoating_service`)

在已编号且合格密实既有基面上完成的实际合同：批准兼容系统、颜色/纹理、完整干燥固化涂层及网球线标、缺陷闭环和签署交付/开放许可。是增量修复，非新完整球场、保证透水性或自动ITF类别。

- 选定流：验收合格的既有室外丙烯酸网球硬地重涂修复服务
- 流属性/单位：物品数量 / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_state`
- 来源：`sportmaster-neutral-ready-mix-202406`; `sportmaster-tennis-surfaces`

数量范围证据需求：定义固定一项验收合同为分母，不固定面积或使用寿命。采集签署球场/面积/系统/日期/缺陷闭环及真实验收证据；不能推断剂量/产率/寿命的数值范围。

##### 废物流

###### 实际收集的涂布清洗废水 (`finish_wastewater`)

收集工具/换色清洗水及批准漂洗水所含实际涂层物质移交处理；包括本次修复实际管理的受污染雨水/径流。单独追踪已分离固体及捕集外实际排放。

- 选定流：实际收集的涂布清洗废水
- 流属性/单位：质量 / kg
- 数量规则：在移交时称量/计量湿混合物及组成，体积换算须有密度，并记录事件/运行和下游接收方。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_residuals`

数量范围证据需求：采集真实清洗/收集/雨水平衡和处理票据及组成/采样不确定性；不默认全部用水排放或固定捕集率。

###### 实际未燃废弃或回收燃料废物 (`finish_fuel_wastes`)

按实际品级/组成分别记录不合格/未燃燃料、回收的游离泄漏液及送废物接收方的含燃料清理混合物。混合物总量与其中燃料量分开；可用燃料外退是产品，失控释放的具体物质走基本流。

- 选定流：实际未燃废弃或回收燃料废物
- 流属性/单位：质量 / kg
- 数量规则：按品级/组成、原事件和接收责任称量实际未燃废物，混合物保留燃料含量计量；对齐燃料衡算且不得计为燃烧量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_residuals`

数量范围证据需求：取得真实事故/油箱排放、分流废物质量/组成和接收记录；无此废物须有事件证据，不设泄漏/回收比例。

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| single_service | accepted_recoating_service | 一项验收合同承担全部归属准备、涂布及缺陷/重涂负荷；不假定可销售联产品，旧基面保留和废物不是联产品或替代抵扣。多合同作业期仅按可追踪球场/运行真实物理用量分配，保留实测份额及各自验收分母。 |  |
| gross_stock | 全部材料投入、退回和废物输出 | 按批次及供货/混合状态核对期初可用存量+收货总量与施用/使用、真实可用外退、废物/残余及可用期末存量。不得先净扣收货再输出同一退回；期末存量携带已声明上游负荷结转，无负废物或自动避免生产抵扣。区别领用和收货、湿量和干量。 |  |
| shared_complete_life | prep_assets; finish_assets; 运行服务 | 对各消费节点、其他合同及报告时期使用实测资产/公用服务驱动量，全部份额对齐完整寿命总量且责任不重复。记录制造、维护/更换/报废覆盖及实际剩余寿命；供应商已含服务只替代有证据覆盖的负荷，未覆盖份额另计一次并披露不确定性。缺有据完整寿命覆盖或分母才阻止定稿；允许有依据的在役前瞻情景，区分预测/观测并披露不确定性、敏感性及更新。 |  |
| campaign_changeover | 两节点材料及运行记录 | 以合同/球场、实际调色批次、涂层/颜色/线标运行、天气窗口及换色事件定义真实修复作业期，不从售出一桶推断生产批次。混合、清洗、设定、检验、返工按实测因果驱动量归属消费运行/合同；共享事件唯一责任人。跨期作业保持稳定编号并结转分配余额，不重复收费。 |  |
| rework_retention | 两节点不合格区域和材料退回 | 脏污/缺陷基面返回prepare_host，颜色/线标/固化不合格返回finish_surface或原修补节点，以真实事件/交接关联。本合同保留原有及纠正负荷，材料消耗及废物出口只计一次，缺陷闭环后只计一次最终验收。区别外部可用供货退回、废物和内部返工。 | sportmaster-neutral-ready-mix-202406 |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | raw_fields | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prep_materials | prepare_host | 各实际供货材料、水源及配方加入物 | 批次和事件台账 | contract_id; court_id; date; period_id; run_id; event_id; lot_id; product_identity; supply_state; formulation; gross_receipt_kg; issue_kg; opening_stock_kg; closing_stock_kg; outward_return_kg; scale_tare_kg; measured_gross_load_kg; water_meter_start_m3; water_meter_end_m3; density_kg_per_m3; temperature_degC; addition_identity; actual_recipe; supplier_coverage | 逐具体身份采集送货、存量、扣皮称量及校准水表；区别收货/领用、配制品/有效含量、工厂已含/现场另加组分、购水/抽水。关联实际色浆批次/基料和涂层/运行，仅以证据记零。体积换算使用有据密度/温度，按衡器/水表/批次差异导出不确定性。 | 各具体材料/水源kg；原始m3附密度 | 每次收货、领用、加入、期末存量及用水事件 | 含失败尝试及换色的完整修复作业期；起止存量 | 实际合同球场、供应商批次及取水源 | 每参考流 | 供应商说明/SDS、校准扣皮、发票和存量/配方平衡、确切批次角色及兼容性、不确定性和覆盖。材料衡算使用实测载荷总重减车/容器皮重，未预扣退货。 |
| cp_prep_operations | prepare_host | 实际电力、燃料、运输及完整寿命资产份额 | 设备运输和资产服务台账 | contract_id; court_id; date; period_id; run_id; event_id; asset_id; meter_start_kWh; meter_end_kWh; fuel_identity; fuel_issue_kg; fuel_density_kg_per_L; service_hours_h; cargo_t; distance_km; empty_leg_rule; provider_coverage; lifetime_service_h; other_consumers; production_burden; maintenance_event; replacement_event; termination_event; end_of_life_coverage; allocation_driver; opening_fuel_stock_kg; closing_fuel_stock_kg; gross_fuel_receipt_kg; true_fuel_outward_return_kg; fuel_transfer_boundary; unburned_fuel_waste_kg; fuel_spill_kg; actually_burned_fuel_kg; unburned_fuel_release_kg | 实际计量设备、电量、油箱/领料/运输并关联项目/运行；与运营方/供应商记录核对合用电表拆分及载荷/距离。资产账列prepare_host、finish_surface、其他项目/时期及完整制造/使用/维护/更换/终止/报废，按实测因果服务份额分配并披露已含/未含负荷。每个共享事件唯一归属。已结束寿命用实测历史，在役剩余服务/更换/终止/报废可用有依据前瞻情景，标明预测、总服务分母/来源、不确定性/敏感性及实际事件更新。燃料投入记录跨入节点总量，期初期末/总投入与可用真实外退/外转、未燃废物、未回收真实排放和燃烧量闭合；事故总泄漏含回收部分，不再次相减。边界内转油不是消耗，燃烧因子只用实际烧油；未燃燃料按实际产品/废物/基本流责任及状态出场。 | kWh；各燃料kg；各路段t.km；各资产h | 每运行、领油、运输及资产事件；作业期/时期末核对 | 完整作业期及包括其他项目的完整资产寿命时期 | 实际节点设备、供应商、供货路线及完整寿命台账 | 每参考流 | 校准计量、油箱/运输依据、实测驱动量及份额和、资产更换/终止及覆盖、不确定性、无重复供应商负荷 |
| cp_prep_state | prepare_host | 合格保留基面及准备验收交接 | 检验测量及交接记录 | contract_id; court_id; date; period_id; run_id; transfer_id; host_identity; structural_condition; drainage_condition; compatibility_evidence; defect_location; treated_area_m2; line_length_m; line_width_m; line_area_m2; repair_dimensions_mm; coat_id; tint_batch_id; weather_air_degC; weather_surface_degC; rain_record; dry_time_h; cure_time_h; product_instruction_revision; criterion_source; specified_tolerance; measured_result; rejected_area_m2; rework_event_id; signed_acceptance | 按实际单位、指定容差和标准来源测量基面/修补几何。开工前检验结构/排水及既有涂层兼容性；记录实际清洗和齐平局部修补检验、失败区域纠正，以及按匹配交接编号移交finish_surface的合格清洁准备面积。共同追踪字段关联同一合同，最终涂层/固化/线标/服务交付仅由cp_finish_state负责。 | m2；m；mm；实际基面/准备检验单位 | 准备前、清洗/局部修补后及每次纠正准备验收 | 有日期的准备阶段直至合格配对交接 | 已编号实际球场、处理范围及配对接口 | 每参考流 | 测量/检验及真实标准/说明版本、签署交接、带指定容差的原始测试、缺陷闭环和几何/时间不确定性 |
| cp_prep_residuals | prepare_host | 各真实可用外退、废物流及环境物质 | 责任称量及排放记录 | contract_id; court_id; date; period_id; run_id; event_id; lot_id; original_node; outward_custody_id; destination; usable_or_waste; waste_composition; wet_mass_kg; dry_mass_kg; tare_kg; measured_gross_load_kg; wastewater_m3; density_kg_per_m3; rainfall_ingress_m3; separated_solids_kg; substance_identity; receiving_medium; particle_fraction; capture_method; factor_source; monitoring_result; uncertainty; upstream_burden_owner; activity_value; activity_unit; factor_value; factor_numerator_unit; factor_denominator_unit; factor_applicability; factor_capture_basis; factor_uncertainty; fuel_unburned_state; unburned_fuel_release_kg | 按扣皮及湿状态称量分流出场残余/可用外退，验证接收/责任和处理覆盖。计量废水中真实雨水流入和分离固体；监测具体排放物，或用有据实际产品/工序因子及捕集不确定性计算。不得输出保留存量、合计未知物质或把收集废水当基本流排放；失败/重涂事件关联原节点并保留负荷。 | 各实际产品/废物/物质kg；原始废水m3附密度 | 每载荷/外退、收集/清洗及排放事件 | 完整作业期至处理/退回和缺陷闭环 | 实际球场捕集边界、下游接收方/环境介质 | 每参考流 | 废物/退回凭证及接收验收、校准称量、SDS/物种/捕集/监测或因子、湿干固体衡算、责任与不确定性 |
| cp_finish_materials | finish_surface | 各实际供货材料、水源及配方加入物 | 批次和事件台账 | contract_id; court_id; date; period_id; run_id; event_id; lot_id; product_identity; supply_state; formulation; gross_receipt_kg; issue_kg; opening_stock_kg; closing_stock_kg; outward_return_kg; scale_tare_kg; measured_gross_load_kg; water_meter_start_m3; water_meter_end_m3; density_kg_per_m3; temperature_degC; addition_identity; actual_recipe; supplier_coverage | 逐具体身份采集送货、存量、扣皮称量及校准水表；区别收货/领用、配制品/有效含量、工厂已含/现场另加组分、购水/抽水。关联实际色浆批次/基料和涂层/运行，仅以证据记零。体积换算使用有据密度/温度，按衡器/水表/批次差异导出不确定性。 | 各具体材料/水源kg；原始m3附密度 | 每次收货、领用、加入、期末存量及用水事件 | 含失败尝试及换色的完整修复作业期；起止存量 | 实际合同球场、供应商批次及取水源 | 每参考流 | 供应商说明/SDS、校准扣皮、发票和存量/配方平衡、确切批次角色及兼容性、不确定性和覆盖。材料衡算使用实测载荷总重减车/容器皮重，未预扣退货。 |
| cp_finish_operations | finish_surface | 实际电力、燃料、运输及完整寿命资产份额 | 设备运输和资产服务台账 | contract_id; court_id; date; period_id; run_id; event_id; asset_id; meter_start_kWh; meter_end_kWh; fuel_identity; fuel_issue_kg; fuel_density_kg_per_L; service_hours_h; cargo_t; distance_km; empty_leg_rule; provider_coverage; lifetime_service_h; other_consumers; production_burden; maintenance_event; replacement_event; termination_event; end_of_life_coverage; allocation_driver; opening_fuel_stock_kg; closing_fuel_stock_kg; gross_fuel_receipt_kg; true_fuel_outward_return_kg; fuel_transfer_boundary; unburned_fuel_waste_kg; fuel_spill_kg; actually_burned_fuel_kg; unburned_fuel_release_kg | 实际计量设备、电量、油箱/领料/运输并关联项目/运行；与运营方/供应商记录核对合用电表拆分及载荷/距离。资产账列prepare_host、finish_surface、其他项目/时期及完整制造/使用/维护/更换/终止/报废，按实测因果服务份额分配并披露已含/未含负荷。每个共享事件唯一归属。已结束寿命用实测历史，在役剩余服务/更换/终止/报废可用有依据前瞻情景，标明预测、总服务分母/来源、不确定性/敏感性及实际事件更新。燃料投入记录跨入节点总量，期初期末/总投入与可用真实外退/外转、未燃废物、未回收真实排放和燃烧量闭合；事故总泄漏含回收部分，不再次相减。边界内转油不是消耗，燃烧因子只用实际烧油；未燃燃料按实际产品/废物/基本流责任及状态出场。 | kWh；各燃料kg；各路段t.km；各资产h | 每运行、领油、运输及资产事件；作业期/时期末核对 | 完整作业期及包括其他项目的完整资产寿命时期 | 实际节点设备、供应商、供货路线及完整寿命台账 | 每参考流 | 校准计量、油箱/运输依据、实测驱动量及份额和、资产更换/终止及覆盖、不确定性、无重复供应商负荷 |
| cp_finish_state | finish_surface | 接收基面、涂层/固化/线标状态及最终验收服务 | 检验测量及交接记录 | contract_id; court_id; date; period_id; run_id; transfer_id; host_identity; structural_condition; drainage_condition; compatibility_evidence; defect_location; treated_area_m2; line_length_m; line_width_m; line_area_m2; repair_dimensions_mm; coat_id; tint_batch_id; weather_air_degC; weather_surface_degC; rain_record; dry_time_h; cure_time_h; product_instruction_revision; criterion_source; specified_tolerance; measured_result; rejected_area_m2; rework_event_id; signed_acceptance | 按实际单位、容差及标准来源测量球场/修复和线标几何，核对开工前结构/排水及兼容性证据、清洁齐平修补验收和配对交接面积。逐涂层/运行记录实际产品说明、天气/时间及固化/线标/指定运动面检验与缺陷；最终验收须闭环缺陷并有开放许可。原始属性保留实际单位、容差和标准来源，不假设通用ITF/透水性或球场尺寸。 | item最终合同；m2；m；mm；degC；h原始属性 | 准备前各接口核对、每次涂层/纠正及最终交付 | 有日期的完整修复作业期；最终输出只计一次 | 已编号实际球场、处理范围及配对接口 | 每参考流 | 测量/检验及真实标准/说明版本、签署交接、带指定容差的原始测试、缺陷闭环和几何/时间不确定性 |
| cp_finish_residuals | finish_surface | 各真实可用外退、废物流及环境物质 | 责任称量及排放记录 | contract_id; court_id; date; period_id; run_id; event_id; lot_id; original_node; outward_custody_id; destination; usable_or_waste; waste_composition; wet_mass_kg; dry_mass_kg; tare_kg; measured_gross_load_kg; wastewater_m3; density_kg_per_m3; rainfall_ingress_m3; separated_solids_kg; substance_identity; receiving_medium; particle_fraction; capture_method; factor_source; monitoring_result; uncertainty; upstream_burden_owner; activity_value; activity_unit; factor_value; factor_numerator_unit; factor_denominator_unit; factor_applicability; factor_capture_basis; factor_uncertainty; fuel_unburned_state; unburned_fuel_release_kg | 按扣皮及湿状态称量分流出场残余/可用外退，验证接收/责任和处理覆盖。计量废水中真实雨水流入和分离固体；监测具体排放物，或用有据实际产品/工序因子及捕集不确定性计算。不得输出保留存量、合计未知物质或把收集废水当基本流排放；失败/重涂事件关联原节点并保留负荷。 | 各实际产品/废物/物质kg；原始废水m3附密度 | 每载荷/外退、收集/清洗及排放事件 | 完整作业期至处理/退回和缺陷闭环 | 实际球场捕集边界、下游接收方/环境介质 | 每参考流 | 废物/退回凭证及接收验收、校准称量、SDS/物种/捕集/监测或因子、湿干固体衡算、责任与不确定性 |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| contract_attribution | 所有清单行 | 逐项汇总归属实际验收合同的已识别事件量，多合同事件仅按有据实测因果驱动量共享；全部清单为每参考流。在最终验收前保留未完成/不合格尝试负荷。 | 节点专属协议；球场/运行/事件编号；实测驱动量；签署验收合同 | 每1 item验收修复合同的各交换数量 |  |
| lot_reconciliation | 全部材料、存量、退回及残余行 | 期初可用存量+收货总量=实际施用/使用+真实可用外退+废物/残余损失+期末可用存量；按批次/状态披露实际过程内转化和计量差。涂布湿料须有留存干膜及真实挥发/其他损失证据，湿质量不等于干膜。 | 节点材料/残余协议；供货状态；批次；实际膜和物种证据 | 湿料和存量闭合；携带结转负荷及未解决差值 |  |
| volume_mass | 水、涂料、色浆、燃料及废水体积 | 各实际批次体积仅按自身在指定温度实测/有据密度及兼容单位换算，保留原始体积、密度和不确定性。来源覆盖率体积或通用水密度假设不能提供未测涂料质量。 | 实际体积；实际密度；温度；校准 | 各实际批次/水源kg |  |
| interface_match | prepared_host_output; prepared_host_input | 两节点匹配交接编号、验收面积/状态、球场/位置及容差；准备负荷仅一次传入finish_surface，不增外部基面制造。退回/不合格面积须关联真实事件说明。 | cp_prep_state; cp_finish_state; transfer IDs | 配对m2真实交接及唯一负荷责任 |  |
| asset_share | prep_assets; finish_assets | 按本节点/项目/时期实测服务用量占全部消费方完整寿命总服务量份额，分配资产完整寿命负荷，披露更换/终止/报废覆盖及剩余寿命携带负荷。不能以合同件数代替真实资产服务单位。 | 节点运行协议；完整寿命台账；供应商包含范围 | 原生服务量及不重叠完整寿命负荷 |  |
| fuel_consumption | prep_fuel; finish_fuel; prep_returns; finish_returns; prep_fuel_wastes; finish_fuel_wastes; prep_releases; finish_releases | 按品级/事件，实际燃烧量=节点期初燃料存量+燃料总投入-节点期末燃料存量-真实可用外退/外转-未燃燃料废物-实际未燃环境释放量。各出口互斥，事故总泄漏分为回收废物/保留料和真实释放，不再额外扣总泄漏。燃烧推导量仅驱动燃烧排放，燃料投入仍为总量，不能将已列退回/废物输出再次净扣。 | 节点运行/残余协议；实际油箱/收货/退回/废物/释放记录 | 各品级/事件实际燃烧kg，与总量投入交换不同 |  |
| species_release | prep_releases; finish_releases | 逐实际物质及环境介质，将归属实测活动量乘适用物种因子，明确兼容的分子/分母单位和因子捕集基准；仅在因子未含捕集时另用实测捕集修正。或按实际浓度/流量/时间与兼容单位积分直接监测质量。燃烧仅用实际烧油，不含退回/泄漏；未燃释放另走对应物种路线。传播活动/因子/捕集/监测不确定性，缺支持物种留证据缺口。 | 节点残余/运行协议；实测活动；物种方法/因子单位/适用性；捕集及不确定性 | 各实际物质/环境介质kg每参考流 |  |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| identity_gate | 全部交换 | 建立具体数据集交换前须确定各实际材料/供应商/废物/物质身份及兼容支持/属性/单位。各条件总括角色按实际身份展开独立交换；参考候选是确切验收修复，非通用墙漆或完整新球场。 | 实际供应商/SDS/服务方和责任/物种数据；已验证详情及支持链 |
| host_scope | 基面及验收服务 | 实际密实兼容基面须结构和排水合格，既有丙烯酸不能证明底层完好。记录修复限度及实际现行系统兼容性。 | 检验/缺陷/排水和基面涂层兼容记录；现行产品说明 |
| timing_units | 两节点状态/运行 | 温度/时间/几何/电力/检验属性保留实际单位、指定容差及来源；天气、干燥、固化为实测事件数据。厂家示例设置仅适用于实际选定产品。 | 有日期的实际天气/涂层/固化/线标/检验日志及现行标准 |
| completeness | 全部资源及出口 | 核对收货/领用/存量/真实外退、湿干膜、收集废水、实际物种和废物责任，披露不闭合差值。不预设零排放、强制化学配方或遗漏真实局部修补。燃料总投入与实际燃烧量、可用外退/外转、保留存量、未燃废物、未回收实际释放分开闭合，事故总泄漏不能与已回收废物或环境释放重复扣除；全部出口按真实责任/物种处理，未燃燃料不作为燃烧活动。 | 节点台账、衡器/水表不确定性、真实物种/捕集及废物/退回凭证 |
| period_asset | 共享服务及资产 | 列明完整作业期及全部相关资产寿命/报告时期，关联更换/终止及全部消费方；论证因果份额、供应商排除和结转存量。缺有依据完整覆盖或分母才阻止定稿：已结束寿命采用观测历史，在役寿命可用有据标明预测的前瞻情景，披露分母/来源、不确定性/敏感性及更新触发。 | 资产和供应商覆盖台账、时期/事件编号及完整寿命份额和 |
| range_evidence | 每个清单行 | 数值校验范围须有独立且兼容实际产品/状态/路线/分母的证据。当前采集要求是明确缺口，不是通用界限。未来经验范围用另行审查的可比作业数据，披露样本/时间/不确定性，不能用本项目自身最大值验证本项目。 | 真实独立可比记录和不确定性审查、产品专属来源及逐卡范围证据需求 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| accepted_scope | accepted_recoating_service | 要求合格密实、排水适当兼容基面和实际非结构修补边界；只有实际表面/纹理/颜色、涂层/固化条件、网球线标、缺陷闭环及签署交付/开放许可后，才输出一项编号合同。不宣称新球场、通用ITF类别、保证透水性或服务寿命等效。 | sportmaster-maintenance; sportmaster-neutral-ready-mix-202406 |
| recipe_identity | finish_colour; finish_tint; finish_recipe_additions | 实际供货清单和现行说明须区分未着色Neutral Ready-Mix另加真实批准色浆且不加水、工厂已着色ready-mix或其他产品专属浓缩料/底涂路线。确认产品/批次/用途及实际加入物，工具清洗水独立。 | sportmaster-neutral-ready-mix-202406; sportmaster-tennis-surfaces |
| transfer_rework | prepared_host_output; prepared_host_input; 全部不合格路径 | 要求真实面积/状态和交接责任一致，无第二次上游基面建造；失败基面及面层事件关联责任节点，保留原有及纠正负荷，闭合废物出口，未解决不合格面积不得进入验收输出。 |  |
| gross_balance | 全部材料及残余行 | 要求批次/状态总收货、实际施用/使用、真实可用外退、废物和期末存量闭合；核对湿干质量、实际密度换算、收集水/固体划分及实际物质/环境介质。供应商已含包装/运输/处理只计一次。燃料投入保留总量，独立燃烧推导排除未燃退回、期末存量、废物和未回收释放，不再次扣总事故泄漏；各出口有真实产品/废物/基本流责任。物种计算保留活动/因子单位、适用性、捕集基准和不确定性，不重复捕集修正。 |  |
| mode_period_complete | 两节点作业期和资产 | 要求实际项目/球场/调色批次/涂层/天气/换色索引及事件归属、资产完整寿命全部消费方/时期/制造/维护/更换/终止/报废份额、供应商覆盖和剩余寿命/存量负荷。份额和闭合，无重复事件/跨期收费；缺有据完整覆盖或分母才阻止定稿。已结束寿命为观测事实，在役剩余寿命/更换/终止/报废可用有据标明预测的情景，披露来源、不确定性/敏感性及实际事件更新。 |  |
| identity_and_ranges | 全部清单行 | 最终具体交换须有真实UUID详情及兼容支持/属性/单位确认，有证据时使用来源支持或独立经验范围。当前明确证据需求仍是缺口而非界限，保留原生kWh/h/t.km及真实未解决支持；不允许宽泛近似身份或计件换算。 |  |
| source_and_translation | 完整前景数据包 | 英中编号、参考、物理角色、责任、数量、计量/采集/计算/质量规则和范围决策一致，保留真实来源/说明版本和确定性生成投影。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一项验收增量重涂修复的场址特定前景数据包；process/lifecyclemodel为下游投影。 |
| downstream_use | secondary_dataset；background_dataset仅在兼容范围及实际质量限制透明时使用 |
| allowed_use | 按已测合格系统、场址及交付门槛用于声明的密实基面室外丙烯酸网球硬地修复；明确比较须用实测几何和物理资源。 |
| excluded_use | 新建完整球场/基层、结构/排水修复、保透水喷涂、混凝土酸洗、缓冲系统、通用涂漆、室内设施、未来使用/维护或寿命等效球场宣称。 |
| required_metadata | 合同/球场/地点/时间及处理/线标几何、基面资格/限度、实际产品/系统/供货状态及说明版本、批次/调色/涂层/天气/固化/线标/验收、实际供应商/上游覆盖、废物/排放责任、完整寿命资产时期/驱动量及参考/存量/交接归属。 |
| required_quality_disclosure | 实际身份/支持缺口、逐卡范围证据需求、计量不确定性和物理平衡、缺物种/捕集/覆盖、返工及未闭合缺陷、供应商已含范围及资产剩余寿命/存量携带负荷。 |
| update_trigger | 基面/范围/配方/说明、供货状态、几何/验收、捕集或物种证据、设备/供应商/完整寿命分配、实际配方/涂层天气路线或审查可比数量证据变化。 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | 联合国CPC Version3.0解释说明，30June2025，印刷页288；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 室外网球场修复/恢复类别及室内排除，不作为配方或数量来源 |
| sportmaster-tennis-surfaces | literature | SportMaster Tennis Court Surfaces，现行厂家产品网页；https://www.sportmaster.net/tennis-court-surfaces/ | 兼容沥青/既有丙烯酸系统；ready-mix/浓缩料/色浆/底涂/修补/网球线标供货产品区分，排除缓冲路线 |
| sportmaster-maintenance | literature | SportMaster Tennis Court Maintenance，现行厂家指导；https://www.sportmaster.net/maintenance/ | 基面/排水检验、清洗损伤风险及专业修补重涂背景；维护药剂比例和周期不作规定施工准备或寿命值 |
| sportmaster-neutral-ready-mix-202406 | literature | ThorWorks/SportMaster Neutral Ready-Mix CMT68技术数据表，修订06/24；https://www.sportmaster.net/pdfs/specs/NeutralReadyMix.pdf | 清洁齐平完好准备、兼容密实底层、真实加色浆/不加水区分、刮板涂布及层间干燥/固化/天气门槛。产品专属设置/体积覆盖率不作通用kg/m2或普遍验收条件 |
