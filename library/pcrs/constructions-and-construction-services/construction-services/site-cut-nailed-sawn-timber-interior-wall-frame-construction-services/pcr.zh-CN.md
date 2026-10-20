---
pcr_id: pcr.construction-services.site-cut-nailed-sawn-timber-interior-wall-frame-construction-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 现场下料钉接锯材室内非承重墙骨架施工服务

## 1. 范围与适用性

本 PCR 适用于首次在现场建造裸露的室内非承重锯材立柱墙骨架，其路线包括有记录的下料清单准备和构件交接阶段，随后钉接组装并机械固定到已验收的既有支承界面。验收骨架尚未覆面，可交接给后续工种。施工前必须明确支承界面和非承重设计。实际经项目批准的骨架立面图决定所有尺寸、间距、洞口细节、等级、含水率和连接。PNNL 提供路线示例及覆面前检查指导；其高级骨架示例尺寸不是通用规定（`pnnl-minimum-wall-studs`）。

排除承重墙或抗剪墙、整栋建筑骨架、楼面和顶棚骨架、工厂预制墙板组装、工程木制品替代、既有墙拆除、支承结构建造或结构修复、覆面板、结构护面、保温、建筑设备管线和涂装。荷载路径改变，或必须依靠覆面才能达到所声明的骨架阶段稳定状态时，须重新审查边界。不赋予裸骨架成品隔墙的隔声、保温或防火性能。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.site-cut-nailed-sawn-timber-interior-wall-frame-construction-services |
| classification_refs | cpc:3.0:54521; narrower |
| covered_products | 具有独立记录的现场下料准备及钉接/机械竖立工序的裸露室内非承重锯材立柱墙骨架 |
| excluded_products | 承重墙/抗剪墙和整栋建筑骨架；预制墙板；完整覆面隔墙；锯材制造；既有墙拆除 |
| representative_product | 按项目批准的室内立柱墙立面图施工，具有规定的上下枋、立柱、横撑和洞口构件，并机械连接到相容且已验收的支承界面 |
| production_route | 供应锯材原长料 → 经计量的下料准备与标识构件交接 → 钉接组装、支承固定、校正及闭合整改 → 裸骨架阶段签字验收 |
| market_state | 裸骨架验收时的已完成现场施工服务，而非木材销售或完整房间服务 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已验收的裸露室内非承重锯材墙骨架施工服务 |
| How much | 1 m2 已验收墙骨架净立面面积，仅在一个平面计量一次；从立面毛面积扣除洞口净投影面积；保留全部洞口周边骨架及整改负担 |
| How well | 符合实际批准的非承重骨架立面图和相容支承连接要求；规定构件与紧固件齐全，裸骨架交接时垂直、对齐并稳定；缺陷闭合且检查签字 |
| How long or cycle | 一次首次施工和验收周期，含下料准备、竖立和整改；不含建筑使用寿命或后续覆面周期 |
| reference_flow_link | accepted_frame |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收的裸露室内非承重锯材墙骨架施工服务 |
| 参考流属性 | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` |
| 参考单位组 | 面积单位 `93a60a57-a3c8-18da-a746-0800200c9a66` |
| 参考单位 | m2 |
| 必需限定信息 | 项目与立面 ID；非承重用途；支承类型/就绪状态及固定批准；墙高/厚度；实际树种/等级/处理/含水率；实际构件截面及间距；上下枋/横撑/洞口细节；实测毛面积与洞口净面积；净面积；下料清单与交接 ID；紧固件配置；裸骨架阶段稳定性/检查记录；地域/日期 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| net_elevation | 参考产品 | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 通过 cp_erect_acceptance 仅计量一个立面平面一次，扣除洞口净面积，保留全部上下枋、立柱、横撑及洞口构件负担。不得计数两侧墙面或立柱表面积。净验收面积必须为正。 |
| timber_state | sawn_timber; prepared_members; prepared_feed; cut_rework_feed | 质量 | kg | 采用声明含水率/处理状态下可追溯的实测质量。实际截面和长度仅用于核对；由几何量换算质量前必须取得实际树种及状态特定的密度与含水率证据。披露含水率基准和密度不确定性；不得采用通用木材密度或替换为绝干状态。 |
| services_basis | cut_energy; erect_energy; cut_services; erect_services | 实际服务属性 | 实际供应商或仪表单位 | 保留实际能源与服务单位、覆盖范围及资产 ID。按计量或有记录的因果使用依据分配真实共用总量，披露不确定性；不得臆造工时到能源的换算。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已批准的非承重骨架设计、已验收且相容的既有支承界面，以及实际供应的锯材和紧固件在声明交付节点的状态 |
| starting_condition_role | 支承就绪是有证据的前提；既有支承的生产不是本服务消耗的投入。交付材料仍为包含其生产负担的上游产品投入。 |
| product_classification_scope | CPC 3.0 54521 内更窄的室内墙骨架施工路线，不代表全部建筑骨架服务 |
| recursive_input_rule | 不得将已表示验收墙骨架施工服务的投入直接作为木材原料。记录单独界定的前序服务或审查边界；不得递归纳入相同验收服务。 |
| upstream_dataset_requirement | 采用实际供应状态相容的上游锯材、紧固件、能源、物流及有界服务数据集；披露未确定的身份、含水率、处理、地域和供应方覆盖范围。 |
| disclosure | 声明设计、支承验收、采购和运输节点、现场期间、预备构件交接、不合格品与保管责任、共用资产使用者、供应方覆盖范围及全部缺口。不推定支承负担、废物抵扣或碳储存抵扣。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| cut_handoff | cut_members | 负责原料选取及从供应原长料到已验收标识构件的下料清单转换。记录实际下料后尺寸、质量及通向 erect_frame 的交接 ID；锯缝、边角料、锯屑和整改切割留在本节点。此路线须有真实的分阶段交接。 | pnnl-minimum-wall-studs |
| erection_gate | erect_frame | 将预备的上下枋/立柱/横撑/洞口构件通过钉子和规定机械紧固件与支承界面连接。检查全部设计细节、支承就绪、对齐及骨架阶段稳定性；后续工种进入前闭合整改并签字检查。 | pnnl-minimum-wall-studs |
| site_coverage | 两个节点 | 纳入实际材料、包装、交付/场内物流、工具/钻机/锯/钉枪能源、条件适用的空压机及集尘、通行设施和临时定位服务，以及其分配的生产/使用/拆除覆盖和闭合整改负担。区分供应方服务与直接材料/能源覆盖，避免重复。 |  |
| excluded_interfaces | 两个节点 | 排除历史支承/墙体负担、作为本地节点的上游木材生产、支承建造、旧墙拆除、完整隔墙性能和后续工种。支承/设计就绪未知时不能形成可用的验收数据集。 | pnnl-minimum-wall-studs |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际供应的切割与抽吸能源 (`cut_energy`)

过程／待建立交换的方向／类型：`cut_members` / `inputs` / `product`.

仅在声明的直接计量覆盖内纳入锯、抽吸集尘及实际相关充电/空压机能源，不再添加供应方已覆盖能源。 数量范围证据需求：须有实测运行/待机记录、实际电源和供应方覆盖，不以工具额定功率乘工时作为默认范围。

- 采集对象：实际供应的切割与抽吸能源
- 流属性/单位：能量 / kWh
- 数量规则：通过 cp_cut_services 按电路/工具及分配期间记录实际电力；使用其他实际燃料/服务单位时保留为单独交换。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cut_services`

#### 采集要求：切割工具与有界共用现场服务 (`cut_services`)

过程／待建立交换的方向／类型：`cut_members` / `inputs` / `product`.

条件性集合卡表示实际零项、一项或多项服务交换。识别共用资产、包括 erect_frame/其他作业的使用者及报告期间、生产/使用/拆除边界和因果分配。 数量范围证据需求：须有实际供应方范围、设备使用、服务单位及使用者台账；工时不确定能源、资本寿命或默认服务量。

- 采集对象：切割工具与有界共用现场服务
- 流属性/单位：时长 / h
- 数量规则：通过 cp_cut_services 分别记录锯/工具、通行、物流、抽吸或压缩空气服务消费；保留每项实际供应方数量/单位及覆盖。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cut_services`

#### 采集要求：实际可用木材及包装保管责任转移 (`cut_usable_returns`)

过程／待建立交换的方向／类型：`cut_members` / `outputs` / `product`.

可用未切木材、边角料或可退包装跨越所定义批次边界至明确接收方时属于产品转移。留待后续使用的材料保留在库存余额中并声明结转负担归属；内部重切留在其循环。 数量范围证据需求：实际称量转移和接收凭证确立出库数量；期末库存记录确立单独留存余额，而非回收率或第二次净扣除。

- 采集对象：实际可用木材及包装保管责任转移
- 流属性/单位：质量 / kg
- 数量规则：通过 cp_cut_material 仅按材料、质量、接收方及去向记录真实出库保管责任转移；留存期末库存没有输出数量。不得再从毛投入中扣除这些退回。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cut_material`

#### 采集要求：切割阶段丢弃的交付包装 (`cut_packaging_waste`)

过程／待建立交换的方向／类型：`cut_members` / `outputs` / `waste`.

不可退包膜、捆扎带或损坏包装在保管责任真实结束时于此离开；可用退回仍为产品/库存。 数量范围证据需求：须有实际包装组成、供应方覆盖及废物称量，不采用通用包装比例。

- 采集对象：切割阶段丢弃的交付包装
- 流属性/单位：质量 / kg
- 数量规则：通过 cp_cut_waste 记录每种实际丢弃包装材料及去向；交付包装负担保留在其上游供应覆盖内。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cut_waste`

#### 采集要求：实际表征的未收集切割颗粒空气排放 (`cut_air_release`)

过程／待建立交换的方向／类型：`cut_members` / `outputs` / `elementary`.

此条件性基本流集合卡覆盖实际未捕集切割颗粒排放，排除已收集锯屑；宽泛粉尘名称不能确定具体污染物 UUID。 数量范围证据需求：须有实际粉尘监测，或与活动/捕集证据相容且经审查的因子；无证据不等于零排放。

- 采集对象：实际表征的未收集切割颗粒空气排放
- 流属性/单位：质量 / kg
- 数量规则：通过 cp_cut_waste 按粒径/物质基准及接收空气区室记录实测或有证据的真实空气排放；缺少表征时保留明确缺口。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cut_waste`

#### 采集要求：实际钉子及骨架或支承机械连接件 (`frame_fasteners`)

过程／待建立交换的方向／类型：`erect_frame` / `inputs` / `product`.

钉子连接木构件；规定的机械紧固件连接骨架与已验收支承。条件适用的连接件类型服从实际设计，不假定金属或锚固件数量。 数量范围证据需求：须有实际紧固件配置、采购/领用记录及实测单件质量，不采用每平方米默认钉数。

- 采集对象：实际钉子及骨架或支承机械连接件
- 流属性/单位：质量 / kg
- 数量规则：通过 cp_erect_material 记录归属本批次的实际钉子/连接件/锚固件毛收货/领用量，包括替换件。真实退回单列而不预先净扣；留存库存作为声明负担保管责任的余额。按实际产品证据核实件数到质量换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_erect_material`
- 来源：`pnnl-minimum-wall-studs`

#### 采集要求：实际供应的竖立钻孔和紧固能源 (`erect_energy`)

过程／待建立交换的方向／类型：`erect_frame` / `inputs` / `product`.

按真实供应节点记录实际安装和闭合整改的直接能源；手工工具需要有记录的未用电事实，不假定必有动力路线。 数量范围证据需求：须有实际仪表/操作记录、电源和覆盖范围，不采用通用单位骨架面积能源。

- 采集对象：实际供应的竖立钻孔和紧固能源
- 流属性/单位：能量 / kWh
- 数量规则：通过 cp_erect_services 记录实际直接钻孔/钉枪/充电/空压机能源；排除 cut_energy 或外购完整服务中已覆盖的能源。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_erect_services`

#### 采集要求：竖立工具通行物流及条件适用空气服务 (`erect_services`)

过程／待建立交换的方向／类型：`erect_frame` / `inputs` / `product`.

实际共用钻机/钉枪/空压机/抽吸/通行资产按期间关联 cut_members 及其他使用者。声明材料/能源/资产生产与拆除覆盖，含实际使用的临时定位资源。 数量范围证据需求：须有实际账单/运行服务数量及因果分配证据；不假定空气使用、资产寿命或服务时长。

- 采集对象：竖立工具通行物流及条件适用空气服务
- 流属性/单位：时长 / h
- 数量规则：通过 cp_erect_services 分别记录实际工具、通行、搬运/物流及条件适用压缩空气服务；采用每项真实供应方数量/单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_erect_services`

#### 采集要求：实际可用竖立材料保管责任转移 (`erect_usable_returns`)

过程／待建立交换的方向／类型：`erect_frame` / `outputs` / `product`.

实际不合格但可重切的构件退回 cut_members 时保留配对 cut_rework_feed ID。分别识别向供应商/其他接收方转移的可用木材、紧固件和包装。留待后续使用的材料仍为期末库存并声明结转负担归属。 数量范围证据需求：实际缺陷批准、称量交接及接收凭证决定各项退回数量；不假定退回率，也不将留存库存作为产品输出。

- 采集对象：实际可用竖立材料保管责任转移
- 流属性/单位：质量 / kg
- 数量规则：通过 cp_erect_material 仅按材料、状态、质量、接收方及去向分别记录实际转移。只有重切子集与 cut_rework_feed 配对；供应商/其他接收方退回是独立出口。留存期末库存为余额，没有输出数量；不从毛投入预先净扣任何退回。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_erect_material`

#### 采集要求：丢弃的竖立材料及包装 (`erect_waste`)

过程／待建立交换的方向／类型：`erect_frame` / `outputs` / `waste`.

固定失败、构件损坏及清理产生的废物从 erect_frame 于此离开；切割阶段粉尘/边角料仍由 cut_members 负责。数据集中须区分每种真实废物身份。 数量范围证据需求：须有实际分类质量、支承钻孔材料及污染/处理证据，不采用合并通用废物比例。

- 采集对象：丢弃的竖立材料及包装
- 流属性/单位：质量 / kg
- 数量规则：通过 cp_erect_waste 按材料特定状态和去向分别计量实际丢弃木材、紧固件、包装及已收集钻孔残渣。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_erect_waste`

#### 采集要求：实际表征的竖立钻孔颗粒空气排放 (`erect_air_release`)

过程／待建立交换的方向／类型：`erect_frame` / `outputs` / `elementary`.

空气中的木材或支承颗粒区别于已收集残渣及切割节点排放。实际支承/材料身份决定污染物证据。 数量范围证据需求：须有实际钻孔活动、颗粒表征和相容监测/因子；未知支承粉尘不能自动视为木尘或零排放。

- 采集对象：实际表征的竖立钻孔颗粒空气排放
- 流属性/单位：质量 / kg
- 数量规则：通过 cp_erect_waste 记录实际污染物/粒径分辨的未收集排放及接收空气区室；仅在实际钻孔或磨削整改时适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_erect_waste`

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cut_members | 锯材构件下料准备 | required | 有记录的现场下料准备和实物构件交接 | 独立尺寸转换；包括重切循环及切割损失 | 每参考流所归属的实际称量预备构件交接量，绝不是 1 m2 木材 |
| erect_frame | 裸墙骨架竖立与机械固定 | required | 实际非承重设计及支承就绪已验收 | 组装并固定构件和紧固件至签字的裸骨架节点；保留整改 | 1 m2 净验收墙立面面积 |

长度不合或损坏的下料构件留在 cut_members 返工，或作为可用退回/库存、已分类废物离开。竖立缺陷在 erect_frame 内整改；退回重切的构件使用匹配的交接进入 cut_members，并通过预备构件交接重新投入。保留每次重复操作。不得将循环计为新的外购木材，或将不合格骨架计为验收面积。共用工具、空压机、抽吸和物流须保留资产/服务 ID 及全部消费节点/作业/期间清单。

### 过程：锯材构件下料准备 (`cut_members`)

#### 输入

##### 产品流

###### 实际交付状态的锯材 (`sawn_timber`)

实际结构等级锯材原长料用于上下枋、立柱、横撑和洞口构件；记录树种、等级、尺寸、含水率、处理、供应方及交付节点。 数量范围证据需求：须有实际批准下料清单、发票及状态特定称量/库存台账以确定材料使用和切割损失变异；PNNL 尺寸不构成 kg/m2 范围。

- 选定流：实际交付状态的锯材
- 流属性/单位：质量 / kg
- 数量规则：通过 cp_cut_material 记录归属本批次的实际锯材毛收货/领用质量，包括整改材料。分别记录真实保管责任退回输出，不预先净扣退回。期末留存库存作为具有声明结转负担归属的余额，绝非出库交换。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cut_material`
- 来源：`pnnl-minimum-wall-studs`



###### 竖立构件退回重切 (`cut_rework_feed`)

竖立构件经批准的切割整改后仍可用时条件适用；保留相同实物身份、含水率及不合格状态。 数量范围证据需求：由实际缺陷批准和交接质量确定发生情况及分布，不假定不合格百分比。

- 选定流：竖立构件退回重切
- 流属性/单位：质量 / kg
- 数量规则：通过 cp_cut_material 记录实际退回质量和配对交接 ID；仅纳入所归属的重切服务，不重复上游采购负担。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cut_material`



##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交接竖立的已验收下料锯材构件 (`prepared_members`)

已验收并标识的下料上下枋、立柱、必要横撑和洞口构件经真实的分阶段交接进入 erect_frame。这是内部转移，不是另一最终产品。 数量范围证据需求：实际下料交接计量和当前含水率状态决定数量及变异；不采用固定木材得率或几何到质量的默认换算。

- 选定流：交接竖立的已验收下料锯材构件
- 流属性/单位：质量 / kg
- 数量规则：通过 cp_cut_material 计量实际归属的预备构件质量和尺寸，交接 ID 与 prepared_feed 匹配；不得将数量设为 1 m2 或由最终面积推定。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cut_material`



##### 废物流

###### 丢弃的锯材边角料和不合格构件 (`cut_offcuts`)

边角料及无法修复的不合格构件从 cut_members 离开至声明的收集/处理路线。匹配污染及接收要求，包括实际存在的处理木材。 数量范围证据需求：须有实际分类质量、处理状态及去向证据，不采用默认切割损失比例。

- 选定流：丢弃的锯材边角料和不合格构件
- 流属性/单位：质量 / kg
- 数量规则：通过 cp_cut_waste 按木材处理状态及去向称量实际丢弃固体，排除可用库存和收集的细锯屑。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cut_waste`



###### 已收集锯屑和木材切割粉尘 (`cut_sawdust`)

实际收集粉尘作为废物离开抽吸/容器节点，注明真实木材/处理状态及接收路线，不是空气基本排放。 数量范围证据需求：须有实际收集质量和抽吸记录，不假定收集效率，也不将全部锯屑换算为空气排放。

- 选定流：已收集锯屑和木材切割粉尘
- 流属性/单位：质量 / kg
- 数量规则：通过 cp_cut_waste 计量收集的细木残留物；单独披露收集效率/不确定性，区别于空气损失。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cut_waste`



##### 基本流

### 过程：裸墙骨架竖立与机械固定 (`erect_frame`)

#### 输入

##### 产品流

###### 竖立接收的已验收下料锯材构件 (`prepared_feed`)

上下枋、立柱、横撑和洞口构件作为经计量的预备材料投入，其切割阶段上游负担仅携带一次。 数量范围证据需求：须有实际匹配的交接称量、含水率和竖立下料清单修订；不得将内部数量固定为最终参考量。

- 选定流：竖立接收的已验收下料锯材构件
- 流属性/单位：质量 / kg
- 数量规则：通过 cp_erect_material 记录实际接收构件质量/尺寸及交接 ID；在明确核对在途库存/退回后与 prepared_members 匹配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_erect_material`



##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的裸露室内非承重锯材墙骨架施工服务 (`accepted_frame`)

最终服务为在实际设计、支承及裸骨架阶段稳定节点签字的骨架；排除未闭合缺陷及未验收面积。 数量范围证据需求：精确参考量定义归一化而非得率范围。比较须有实际验收立面、洞口净面积及有记录的几何/计量不确定性。

- 选定流：已验收的裸露室内非承重锯材墙骨架施工服务
- 流属性/单位：面积 / m2
- 数量规则：1 m2
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_erect_acceptance`



##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| retained_rework | cut_members; erect_frame | 将每次不合格尝试及整改的木材、紧固件、能源、服务和废物负担保留在验收批次。不得将不合格面积加入分母。配对竖立至切割的返工及预备构件返回交接；内部交接携带既有负担，不作为新采购或第二最终产出。 |  |
| usable_custody | 两个节点 | 采用归属该批次的材料毛收货/领用量及真实保管责任退回输出；不得先净扣退回再将其建模为输出。保留的期末库存是余额，绝非出库产品。单独声明其结转负担归属与验收服务的关系，不得臆造库存抵扣。可用边角料、紧固件和包装须有接收方及后续使用/退回证据。竖立重切交接是单独匹配的子集；供应商退回不是重切原料。废物保留产生节点责任及实际去向。 |  |
| shared_services | cut_services; erect_services; cut_energy; erect_energy | 识别每项共用资产/供应方及全部消费节点、作业和服务期间。优先直接计量或活动证据；否则记录具有完整分母、待机处理及不确定性的因果分配键。归属份额不得超过事件总量。核对供应方覆盖与直接数量，避免工具制造、物流、空压机能源和拆除重复计数。 |  |
| no_automatic_credit | 两个节点 | 不得自动给予联产品、废物回收、避免原生木材或生物碳储存抵扣。有记录的可用材料离开须明确其保留负担处理及单独的后续使用边界；木材碳/含水率事实须有实际证据。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cut_material | cut_members | 木材领用；预备构件交接；返工；可用退回/库存 | 材料及交接台账 | lot; elevation; member ID; cut-list revision; supplier; species; grade; treatment; section; length; moisture basis; weighed mass; opening/closing stock; return owner; transfer ID | 记录进入所定义批次的实际供应/库存毛领用，不预先净扣保管责任退回。称量预备构件和真实可用出库转移；期末库存为声明结转负担的留存余额，绝非输出交换。将预备构件交接与 cp_erect_material 配对，单列重切退回并保留重复操作。按声明状态和不确定性核对毛领用、库存、转移、废物及实际排放；将归属批次总量除以 cp_erect_acceptance 净验收面积。 | kg | 每次领用/切割批次/交接及结项 | 含整改的完整施工批次 | 实际现场切割工位及库存区 | per reference flow | 秤具可追溯性；含水率方法/状态；下料尺寸核对；收货凭证；配对交接；期末库存保管责任；核对缺口 |
| cp_cut_services | cut_members | 能源；共用切割工具/服务 | 仪表及服务事件台账 | event ID; asset/provider; supply unit; meter start/end; use/standby period; consumers/jobs/nodes; allocation key; total activity; share; coverage; energy source | 计量切割/抽吸直接能源，并单独记录实际有界供应方数量。将完整共用使用者/期间总量与 cp_erect_services 匹配，仅分配归属份额，核对能源/工具/物流/空气覆盖后除以净验收面积。保留每项实际供应方单位。 | kWh; h; 实际服务单位 | 每个仪表/服务事件及分配结项 | 完整准备及重切期间 | 现场切割操作和实际共用供应方 | per reference flow | 仪表读数；完整共用分母；事件 ID；实际供应方范围；待机决定；分配不确定性 |
| cp_cut_waste | cut_members | 边角料；锯屑；包装废物；实际空气排放 | 分类废物及排放记录 | cut batch; waste material; timber treatment; mass; capture route; receiver; transfer ticket; emission substance/size; air compartment; activity/factor provenance; uncertainty | 完成可用库存分类后分别称量边角料、已收集锯屑及包装。识别实际污染和去向。通过监测或相容的活动/因子证据表征未收集空气排放，并排除已收集粉尘；披露因子缺失而非记零。将归属总量除以净验收面积。 | kg | 每次分类/外运及适用监测事件 | 完整准备及整改期间 | 切割和抽吸边界及实际接收方 | per reference flow | 称量/票据；处理状态；收集效率证据；污染物定义；因子适用性；不确定性及未解决缺口 |
| cp_erect_material | erect_frame | 预备构件投入；钉子/连接件；可用退回 | 构件及交接台账 | elevation; member/connector specification; received mass; transfer ID; cut-list revision; used/replaced quantity; unit mass evidence; return state/destination/owner; stock balance | 将预备构件接收与 cp_cut_material 匹配，不重复上游供应负担。记录实际紧固件毛收货/领用，不预先净扣退回。区分实际重切交接、供应商/接收方出口、期末留存库存余额及废物；仅重切构件与 cut_rework_feed 配对。留存库存声明负担保管责任且没有输出数量。件数到质量换算须有实际产品证据。将归属总量除以净验收面积。 | kg | 每次收货/固定/整改/退回及批次结项 | 含闭合整改的完整竖立过程 | 实际立面、界面和现场库存 | per reference flow | 配对构件 ID；紧固件配置；支承相容性；产品质量证据；供应商退回凭证；期末库存及缺陷记录 |
| cp_erect_services | erect_frame | 直接能源；工具/通行/物流/空气服务 | 仪表及服务事件台账 | event ID; asset/provider; supply unit; meter start/end; use/standby period; all consumers; allocation key; total activity; share; coverage; actual power/air source | 计量实际钻孔/钉枪/充电/空压机使用及有界服务。将共用事件总量与 cp_cut_services 配对，包括其他作业/期间；核对直接与供应方能源/材料/资产覆盖。保留整改和拆除责任，将归属总量除以净验收面积，保留实际服务单位。 | kWh; h; 实际服务单位 | 每个服务/仪表事件及分配结项 | 完整竖立/整改及归属服务期间 | 实际现场与服务供应方 | per reference flow | 仪表/服务记录；事件/使用者核对；完整分母；供应方边界；留存/拆除保管责任；不确定性 |
| cp_erect_acceptance | erect_frame | 验收裸骨架服务 | 竣工几何及验收记录 | elevation ID; actual length/height; clear-opening dimensions; gross area; net accepted area; design revision; actual members/spacing; host approval; fixing inspection; alignment/stability; defects; signed date | 通过可追溯尺寸仅计量一个墙立面平面一次。扣除门及其他洞口的净投影面积，保留全部周边骨架负担。检查实际规定构件/紧固件、非承重/支承相容性和裸骨架阶段稳定性；后续工种进入前闭合缺陷并签字。采用正的净验收总面积作为该批次唯一分母。 | m2 | 每个立面及最终签字整改结项 | 仅首次施工至验收 | 实际验收骨架立面 | per reference flow | 批准骨架立面图/当地适用性；尺寸不确定性；支承验收；检查照片/签字；闭合缺陷清单；洞口核对 |
| cp_erect_waste | erect_frame | 丢弃构件/包装；实际钻孔排放 | 分类废物及排放记录 | elevation; event; actual host material; waste composition/treatment; mass; destination; ticket; particle/substance/size; air compartment; factor/monitoring; uncertainty | 将可用退回与丢弃木材/紧固件/包装及已收集支承钻孔残渣分开；保留节点和去向证据。用适用监测/因子及捕集证据确定实际未收集颗粒排放；未取得则报告缺口。排除切割节点废物，将归属总量除以净验收面积。 | kg | 每次整改/清理/外运及适用排放事件 | 完整竖立及闭合整改 | 实际竖立边界和废物接收方 | per reference flow | 材料/处理身份；称量废物票据；实际支承/钻孔活动；污染物表征；捕集证据；不确定性 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_net_area | accepted_frame | 将验收立面毛面积仅求和一次，并扣除其洞口净投影面积；不得扣除洞口周边骨架，也不得计数双面。 | cp_erect_acceptance 尺寸；验收；洞口 | 以 m2 表示的正净验收面积 |  |
| lot_normalization | 所有清单行 | 对每种材料、废物、排放及实际服务单位，将归属批次数量除以相同的正净验收面积。保留实际预备构件及返工交接质量，其数量独立于最终产出面积。 | 节点特定协议总量；cp_erect_acceptance 净验收面积；分配证据 | 每参考流的每项实际交换量 |  |
| stock_reconciliation | sawn_timber; cut_usable_returns; erect_usable_returns | 在一致含水率状态下，将批次毛收货/领用及初始库存与安装/预备转移、实际保管责任退回、期末留存库存余额、废物和实际排放核对。期末库存不是产品输出，披露其结转负担归属。区分重切交接与供应商出口。内部交接仅在整批实物总量中抵消；保留节点记录，不得预先净扣又作为输出建模的退回。 | cp_cut_material; cp_erect_material; cp_cut_waste; cp_erect_waste | 可追溯材料核对及披露差额 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| design_gate | 参考产品 | 须有实际非承重设计和已验收的相容支承界面；PNNL 示例尺寸/间距不构成项目验收。 | 批准立面图与固定规格；cp_erect_acceptance |
| transfer_state | 两个节点 | 按构件、状态、含水率及交接 ID 匹配实测下料交接与重切循环。不得将内部数量固定为参考面积。 | cp_cut_material 和 cp_erect_material 核对 |
| range_collection | 全部流卡 | 设定 QA 范围前采集实际可比批次变异、计量误差及身份限定信息。此处来源均不支持通用材料、损失、紧固件、能源或服务范围。缺失数量/身份作为明确数据缺口。 | 节点特定记录；逐卡数量范围证据需求 |
| material_conversion | 木材与紧固件 | 质量换算须有相容状态下实际尺寸/密度/含水率或实测单件质量；保留不确定性并拒绝无依据通用因子。 | 称量、含水率记录及供应商规格 |
| shared_coverage | 全部服务 | 保留完整使用者和服务期间、实际分配证据及供应方/直接覆盖核对。 | cp_cut_services; cp_erect_services |
| release_identity | 废物及基本流输出 | 区分边角料、已收集锯屑、退回/库存和实际物质/粒径特定空气排放；缺少表征不能视为零。 | cp_cut_waste; cp_erect_waste |
| temporal_completeness | 全部流卡 | 使用含整改与最终验收的完整首次作业。记录供应方地域/日期、现场期间、缺口及代表性；不得将原型/示例物料表与实际现场数据混用。 | 批次台账；来源/版本披露；签字结项 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_acceptance | 参考产品 | 数据包中承重用途未知、支承/设计未验收、规定构件/紧固件缺失、骨架阶段稳定性未解决或缺陷未闭合时拒绝。确认后续工种进入前已签字裸骨架验收。 | pnnl-minimum-wall-studs |
| area_consistency | 所有清单行 | 检查一个正的净验收立面面积、明确洞口扣除、保留洞口构件负担及各项数量采用相同分母。拒绝双面计数及臆造与最终面积相等的内部木材数量。 |  |
| handoff_rework | 两个节点 | 匹配实际预备构件和重切交接及含水率状态，保留重复负担，排除验收产出中的不合格面积。对未匹配数量作为缺口检查，不作隐性损失。 |  |
| stock_waste_air | 两个节点 | 核实可用保管责任、库存、边角料、锯屑、包装和实际空气排放的独立路径，采用材料特定处理和接收介质。不得重复扣除、自动给予回收抵扣或将缺失排放记零。 |  |
| sharing_check | 全部服务 | 对照事件总量核对共用资产、全部使用者/期间、完整分配分母、待机及供应方覆盖；能源/服务/材料不得重复。 |  |
| identity_quantity | 全部流卡 | 形成最终交换前核实其具体实际流身份、属性和单位，提供真实采集证据及经审查的范围。集合卡或自动候选检查不确立数量、UUID 验证或发布就绪。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 用于所声明裸露室内墙骨架路线的前景施工服务数据包 |
| downstream_use | secondary_dataset; background_dataset; 下游 process 和 lifecyclemodel 投影 |
| allowed_use | 实际设计/支承/验收已声明且净立面计量一致的可比现场下料室内非承重木骨架 |
| excluded_use | 承重/抗剪墙、整栋建筑、工厂墙板、覆面隔墙性能、既有墙拆除、后续维护或推定碳储存/避免废物收益 |
| required_metadata | 实际项目/立面/设计及下料清单；构件和紧固件规格；支承批准；供应方/交付节点；含水率/处理；现场地域/日期；洞口/净面积规则；配对交接；整改与验收；共用服务覆盖/保管责任 |
| required_quality_disclosure | 逐卡数量/身份的证据及缺口；密度/含水率及面积不确定性；范围证据；完整废物/空气/库存路径；分配/待机/供应方限制；时间/技术代表性 |
| update_trigger | 荷载路径/设计、材料状态、构件布置/洞口、支承/固定件、下料清单或分阶段路线、电力/供应方/空气服务、废物路线、计量方法或验收要求改变 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| pnnl-minimum-wall-studs | official_guidance | 美国太平洋西北国家实验室 / 美国能源部 Building America Solution Center。《高级骨架：最少墙立柱》。最近更新 2022-09-16。https://basc.pnnl.gov/resource-guides/advanced-framing-minimum-wall-studs | 切割/构件/上下枋及室内非承重骨架路线示例；实际批准骨架立面图和后续工种前目视检查。数字示例不是通用设计或清单范围。 |
| un-cpc3-notes-2025 | official_guidance | 联合国统计司。《CPC 3.0 解释性说明》，2025 年 6 月 30 日，第 290–291 页。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 包含墙骨架的建筑骨架分类背景；更窄语义范围，不作为清单或产品设计规格。 |
