---
pcr_id: pcr.constructions-and-construction-services.construction-services.mechanically-fitted-arc-resistant-csst-natural-gas-branch-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 机械连接抗电弧护套CSST天然气支管粗装服务

## 1. 范围与适用性

本PCR适用于以黑色抗电弧护套CSST及同一兼容制造商机械接头完成一条实际设计室内天然气支管的首次粗装，在封闭前隔离封帽、通过压力试验和检查后交接。路线包括布管切割及端部准备、机械连接、支承与防穿刺保护、适用等电位接口、试验、整改复试和签署移交。制造商数值设计及试验说明须按实际配置和管辖区选择，不在本PCR泛化。[omegaflex-tracpipe-2026]

排除通入燃气、吹扫、器具连接及燃烧调试、管线调压器调试、外部输配、地下直埋、混用黄色护套系统、LPG、医用气体及供暖通风设备安装。已接受的宿主与批准设计是前提，支管新增改动、保护和等电位作业不得借前提条件遗漏。CPC54640覆盖气体导送安装，本类别仅提出较窄关系，不声明覆盖整个叶类。[un-cpc3-2025]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.mechanically-fitted-arc-resistant-csst-natural-gas-branch-installation-services |
| classification_refs | cpc:3.0:54640; 拟议narrower边界 |
| covered_products | 首次室内机械连接黑色抗电弧护套CSST天然气支管粗装，交接时隔离且封帽 |
| excluded_products | 通气吹扫器具调试；外部地下网络；LPG和医用气；混用黄色护套系统；供暖或通风安装；调压器调试 |
| representative_product | 从明确上游隔离边界至明确封帽出口的一条完整支管，使用实际TracPipe AP或有证据支持的等效兼容AR系统 |
| production_route | 接受设计宿主；布管切割；机械连接；支承保护；完成适用等电位接口；隔离封帽；试压检查；整改复试；交接 |
| market_state | 封闭前签署验收的粗装服务；不声明器具可运行或燃气服务已可使用 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 经验收隔离且通过压力试验的室内天然气CSST支管粗装服务 |
| How much | 1条完整声明回路；1 item |
| How well | 实际批准设计、气体、压力和能力；兼容系统接头版本；无损支承保护安装；已验证适用等电位连接；封帽且未通燃气时完成获准试压与粗装检查 |
| How long or cycle | 从首次安装到签署粗装交接的全部整改复试。可复用供应另与制造供应、使用维护、更换及终止期间相连；不含建筑运行寿命或后续通气调试 |
| reference_flow_link | `accepted_branch` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 经验收隔离且通过压力试验的室内天然气CSST支管粗装服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 支管标识和端点；实际室内路线与管段长度管径；制造商、系统、护套、接头版本；设计气体压力能力；管辖区与批准设计；支承保护等电位范围；宿主改动；安装人员资质；试压介质程序状态结果；检查交接日期；保管权与后续调试责任方 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 仅一条完整且唯一标识的验收支管为1 item。米数、接头、出口和重复试验是配置活动证据，不是额外参考产出；不同配置不得未经披露视为等效。 |
| composite_mass | jacketed_csst | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 区分护套成品复合质量、裸钢与包装；必须采用实际管径单位长度质量或经校准复合称重，只有长度不能确定千克质量。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 批准的实际室内路线设计与接受宿主；上游气源隔离，下游器具不存在或断开；兼容部件在声明供应交接门进入 |
| starting_condition_role | 宿主设计隔离前提及责任有记录；未变建筑存量排除，新增归属安装的改动纳入 |
| product_classification_scope | CPC54640内气体导送支管粗装服务；不含供暖通风与后续运行作业 |
| recursive_input_rule | 内部支管交接和整改不递归进入同类安装服务。采购分包须声明范围与唯一上游负荷所有者。 |
| upstream_dataset_requirement | 实际护套成品CSST、接头、支承保护等电位材料和耗材的供应制造包装覆盖；实际工具试验运输供应与用电；最终交换前须解决未确定身份 |
| disclosure | 实际设计宿主路线供应状态、材料保管权、试验等电位范围、服务商排除项、共享资产期间及后续调试职责 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| rough_in_gate | 所有过程 | 仅在可达粗装获准检查与压力试验、适用等电位验证和保护完成、缺陷关闭、隔离封帽及保管权签署后结束。不为通气吹扫或器具连接赋予产出额度。 | omegaflex-tracpipe-2026 |
| complete_provision | 所有过程 | 实际部件制造供应、嵌入切割连接损失、保护等电位、整改复试、耗材水能源物流及可复用资产生产维护终止供应均仅计一次。记录服务商已含包装服务及未覆盖份额。 | omegaflex-tracpipe-2026 |
| shared_scope | 所有过程 | 共享通道工具与branch_assembly和rough_in_test及服务期间相连；仪表压缩机也可能服务后续作业。记录完整服务资本周期覆盖与拆除责任，不虚构寿命运行或复用次数。 | omegaflex-tracpipe-2026 |
| medium_convention | rough_in_test | 实际获准介质及供应约定必填：ambient_air_intake是现场压缩的有条件基本输入，test_medium是有条件外供产品输入。同一介质不得重复两种约定。与实际排放、留存回收库存、废物或真实产品退回保管权配对；压缩机供应能源仅计一次。 | omegaflex-tracpipe-2026 |
| asset_periods | assembly_provision; test_provision | 分别标识实际资产制造供应、本次使用维护、后续服务作业期间、更换及终止拆除。branch_assembly和rough_in_test活动及验收输出关联初始作业期。声明各阶段责任与负荷份额；更换或终止覆盖未知会阻断最终数据集完成。 | omegaflex-tracpipe-2026 |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际制造商兼容机械接头与端帽 (`compatible_fittings`)

过程／待建立交换的方向／类型：`branch_assembly` / `inputs` / `product`.

按部件号与连接职责逐项声明实际零个、一个或多个接头、过渡件、终端安装件和端帽。临时防杂物封口与试压帽明确供应和拆除责任；可复用端帽不得当作永久消耗。

- 采集对象：实际制造商兼容机械接头与端帽
- 流属性/单位：质量 / kg
- 数量规则：逐个兼容部件的实际领用质量，以供应商质量或经校准称量确定；单独记录复用和退回。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要实际物料表、接头系列、单件质量及退回量；通用接头数量、质量或扭矩均不是清单默认值。

#### 采集要求：实际安装的支承与防穿刺保护部件 (`support_protection`)

过程／待建立交换的方向／类型：`branch_assembly` / `inputs` / `product`.

按实际布线和批准说明要求，记录适合管径的支承件、列名防穿刺板、套管或导管。提供支承的结构件作为宿主条件披露；支管新增改动与保护须纳入。

- 采集对象：实际安装的支承与防穿刺保护部件
- 流属性/单位：质量 / kg
- 数量规则：按部件和路线位置记录实际材料质量，排除未改变的宿主建筑存量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：实际路线几何、受威胁位置、支承类型及适用接头和系统说明决定用量；不设通用间距或保护长度。

#### 采集要求：实际归属于支管的等电位连接部件 (`bonding_materials`)

过程／待建立交换的方向／类型：`branch_assembly` / `inputs` / `product`.

有条件记录支管等电位接口实际需要的夹具、导体和连接件。由合格人员记录现有已验证接口的覆盖范围或新增作业及服务商责任。抗电弧护套不构成普遍免除等电位连接的依据。

- 采集对象：实际归属于支管的等电位连接部件
- 流属性/单位：质量 / kg
- 数量规则：记录实际新增且归属于支管的部件质量；零新增材料须有现有合格接口与适用要求的证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：取得实际管辖区和系统要求、合格连接记录、导体与夹具身份、长度和质量；不预设导体数量或豁免。

#### 采集要求：实际管螺纹密封剂、修补与安装耗材 (`assembly_consumables`)

过程／待建立交换的方向／类型：`branch_assembly` / `inputs` / `product`.

有条件按组成和用途分别记录实际管螺纹密封剂、批准护套修补胶带、割刀刀片或刀轮磨耗、清洁及防护耗材。遵循选定接头说明：管螺纹用密封剂不意味着CSST密封座用密封剂。耗材同样采用毛领用输入；实际可用退料仅在usable_returns记录一次，留存库存仅为结转余额。

- 采集对象：实际管螺纹密封剂、修补与安装耗材
- 流属性/单位：质量 / kg
- 数量规则：按材料和任务记录实际毛领用质量，包括整改；分别记录消耗或磨耗、向外可用退回和留存库存，可复用工具供应按有记录的使用量分摊。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要具体接头程序、配方与收发或实测磨耗、实际修补发生及留存库存；不假设密封剂剂量或损失率。

#### 采集要求：有明确边界的安装工具、作业通道与物流供应 (`assembly_provision`)

过程／待建立交换的方向／类型：`branch_assembly` / `inputs` / `product`.

实际有记录的服务包提供切割或手工具、共享作业通道、配送及人员材料运输。每个服务包声明实际物理驱动、使用者、服务期、资本供应、维护和终止拆除覆盖。未覆盖的工具生产或运输环节另列；不得把公里或工具小时虚构换算为物品当量。

- 采集对象：有明确边界的安装工具、作业通道与物流供应
- 流属性/单位：物品数量 / item
- 数量规则：实际服务商有文件支持的计数服务包数量，或在其有支持的单位中分别解析物理交换；仅纳入分配给安装的份额。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_resources`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要服务商账单与范围、资产使用寿命和完整作业及使用者记录、实际重载空载行程、质量距离或活动证据；无默认寿命或货运因子。

#### 采集要求：实际跨越保管权边界的可用部件退回 (`usable_returns`)

过程／待建立交换的方向／类型：`branch_assembly` / `outputs` / `product`.

只有实际返回供应商或其他声明保管方的可用管材或部件构成此输出。期末留存库存是携带结转负荷的余额，不是向外产品交换。也包括毛领用耗材的实际可用退回。

- 采集对象：实际跨越保管权边界的可用部件退回
- 流属性/单位：质量 / kg
- 数量规则：按物项和保管方记录实际向外退回毛质量；保留毛收发记录，不得先净扣再把退回计作输出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要实际退货凭证、组成、状态、质量和保管权；不假设转售、再生产品替代或退料率。

#### 采集要求：实际分类收集的安装边角料、废弃不合格品与包装废物 (`assembly_waste`)

过程／待建立交换的方向／类型：`branch_assembly` / `outputs` / `waste`.

按实际组成、废物属性和接收方分开记录CSST复合边角料、移除缺陷件、废耗材和供应商包装。返工部件留在branch_assembly；场外处理在安装交接之外，除非明确纳入且仅计一次。

- 采集对象：实际分类收集的安装边角料、废弃不合格品与包装废物
- 流属性/单位：质量 / kg
- 数量规则：实际发运废物质量与安装或整改来源及去向相连，并与收料、安装存量和退回核对。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要实测或有记录质量、实际分类、保管权和处理覆盖；无通用废料率或回收信用。

#### 采集要求：实际经表征的安装环境排放 (`assembly_releases`)

过程／待建立交换的方向／类型：`branch_assembly` / `outputs` / `elementary`.

仅在实际测量或有依据模型表明发生直接排放时，逐项要求具体物质和受纳环境。不得把固体边角料归为排放，也不得由天然气设计用途推断通气前隔离支管的甲烷排放。

- 采集对象：实际经表征的安装环境排放
- 流属性/单位：质量 / kg
- 数量规则：按受纳介质及有文件支持测量或模型记录实际物质排放质量；未发生排放时以任务记录支持零值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_resources`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：先确定实际物质或组分、介质、检出限与不确定性，再定量绑定；无通用VOC、粉尘或甲烷默认值。

#### 采集要求：实际外部供应的获准压力试验介质 (`test_medium`)

过程／待建立交换的方向／类型：`rough_in_test` / `inputs` / `product`.

有条件记录实际外部供应的获准试压介质，在真实供应商交接门处作为产品输入。记录实际组成及气瓶或压缩机服务覆盖。若现场从环境空气压缩，则相同介质量采用ambient_air_intake而非本产品输入，压缩机供应及能源仅计一次。不得预设获准介质类型。

- 采集对象：实际外部供应的获准压力试验介质
- 流属性/单位：质量 / kg
- 数量规则：在声明交接门记录全部试验与复试实际毛供应领用质量，分别核对实际向外可用退回、服务商内部残余、留存库存、废物和具体物质排放。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_test_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要批准试验程序、隔离容积、绝对压力、温度、组成和真实气体或换算方法，或计量证据；不预设通用压力、时长或介质质量。

#### 采集要求：有明确边界的试验仪器、压缩机、干燥耗材及作业通道供应 (`test_provision`)

过程／待建立交换的方向／类型：`rough_in_test` / `inputs` / `product`.

实际测试服务包覆盖经校准仪表、试压装置、实际压缩机、临时端帽操作、干燥耗材、运输通道以及声明的可复用生产、维护和退役份额。共享工具通道与安装使用者相连，由一个负荷所有者负责。

- 采集对象：有明确边界的试验仪器、压缩机、干燥耗材及作业通道供应
- 流属性/单位：物品数量 / item
- 数量规则：记录实际服务包数量及物理活动和完整范围，仅分配试验份额；未覆盖的材料服务交换及其支持单位另行解析。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_test_resources`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要校准证明、服务及使用者期间、实际运行待机、干燥消耗及服务商覆盖；不虚构压缩机功率、端帽寿命或服务当量。

#### 采集要求：现场压缩试压介质的实际环境空气摄取 (`ambient_air_intake`)

过程／待建立交换的方向／类型：`rough_in_test` / `inputs` / `elementary`.

仅在实际获准试压介质为现场压缩环境空气时启用。确定实际摄取物质组成及环境约定，在大气边界记录，压缩机服务能源在test_provision和test_electricity中仅计一次。相同介质不得同时记录为外供test_medium。

- 采集对象：现场压缩试压介质的实际环境空气摄取
- 流属性/单位：质量 / kg
- 数量规则：根据可追溯计量或经验证组成、状态及体积换算记录全部实际周期物质特定大气摄取质量，与test_releases、留存回收及保管权平衡配对。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_test_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要实际批准现场空气使用、组成、摄取状态、隔离容积、换算及计量不确定性；无通用空气因子、压力或质量。

#### 采集要求：实际跨保管权退回的可用试压介质或试验材料 (`test_usable_returns`)

过程／待建立交换的方向／类型：`rough_in_test` / `outputs` / `product`.

只有向明确保管方真实外送的可复用介质或可用溶液材料才是此有条件产品退回，须声明数量、质量及携带负荷。外供服务内部气瓶残余不是另一向外交换；现场留存库存是余额，不是输出。不作避免生产或虚构再生联产品信用。

- 采集对象：实际跨保管权退回的可用试压介质或试验材料
- 流属性/单位：质量 / kg
- 数量规则：按介质材料和接收方记录实际退回毛质量；保持试验材料毛输入，向外退回只计一次并声明剩余负荷和保管权。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_test_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要实际签署退回保管权凭证、状态组成、质量及供应服务覆盖；不预设退回比例或产品信用。

#### 采集要求：实际试验清洁残余、废水与废耗材 (`test_waste`)

过程／待建立交换的方向／类型：`rough_in_test` / `outputs` / `waste`.

实际收集的冲洗废水、检漏液残余、擦拭物和废试验耗材交由明确废物保管方。送往处理的废水与直接环境排放分开，永久安装存量与废物分开。

- 采集对象：实际试验清洁残余、废水与废耗材
- 流属性/单位：质量 / kg
- 数量规则：按组成和去向记录实际收集发运质量，包括整改周期；留存残余在决定去向前仍为期末库存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_test_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要收集称量或废水体积密度及组成记录和接收证明；无默认废水组成或排放去向。

#### 采集要求：实际经表征的试压介质或清洁环境排放 (`test_releases`)

过程／待建立交换的方向／类型：`rough_in_test` / `outputs` / `elementary`.

声明降压后实际排放的试验介质物质及受纳环境，或留存回收介质。外供压缩介质与真实去向配对；不得用泛化气体名，也不得假设通气前边界的燃气甲烷。

- 采集对象：实际经表征的试压介质或清洁环境排放
- 流属性/单位：质量 / kg
- 数量规则：根据计量或经验证的投入、留存、回收平衡记录实际物质排放质量；实际清洁物质排放仅在有证据时另行定量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_test_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要实际介质组成、排放或接收路线、残留回收数量、状态及不确定性；压缩环境空气的摄取排出须明确基本流约定，不能虚构外供气体身份。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| branch_assembly | 支管布置、机械连接、支承与保护 | required | 始终纳入；有条件材料服务交换按实际作业启用 | 集成独立护套管材、接头端帽、支承保护及适用等电位组件；未验收隔离支管交rough_in_test；接收失败支管整改 | 按交接标识记录实际唯一已组装支管 |
| rough_in_test | 隔离粗装压力试验、整改与交接 | required | 始终纳入；全部失败周期与复试仍归属 | 接收组装支管；隔离封帽试压检查；失败返回branch_assembly；仅在签署合格门后输出验收支管 | 1 item完整验收支管 |

切割、护套剥除和接头密封座成形保持为嵌入组装操作，未发现独立预制构件交接。不得假设单独制气、化学反应、能量转换或回收节点。损伤管材仅按实际兼容程序修补更换；试验失败状态不得作为最终产出。内部整改回路保留交接标识、数量和负荷，不取得新增支管产出额度。

### 过程：支管布置、机械连接、支承与保护 (`branch_assembly`)

#### 输入

##### 产品流

###### 供应商交接状态的实际黑色抗电弧护套CSST (`jacketed_csst`)

经制造商确认适用的成品护套不锈钢波纹管进入安装边界，记录实际产品版本、管径、长度和复合质量。不得以裸不锈钢管替代或遗漏护套负荷。

- 选定流：供应商交接状态的实际黑色抗电弧护套CSST
- 流属性/单位：质量 / kg
- 数量规则：归属于参考支管的实际毛领用质量，单独保留未用库存与向外退回量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：采集实际管径和护套对应的供应商或实测单位长度复合质量、领用长度、边角料和批次变异；指南没有每支管通用千克数。

###### 实际安装工具充电或直接用电 (`assembly_electricity`)

有条件记录电动安装工具和实际充电用电；服务商已覆盖部分不再重复。地域、供应组合、电压和使用状态依实际计量与发票确定。

- 选定流：实际安装工具充电或直接用电
- 流属性/单位：能量 / kWh
- 数量规则：实际计量或可追溯分配的安装电量，包括充电损失；纯手工作业零用电及服务商覆盖须有证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_resources`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要电表充电记录、荷电状态变化、实际作业分配和服务商范围；无每支管默认电量，最终交换还须核实能量支持链。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待粗装试验的已组装隔离封帽CSST支管 (`assembled_branch`)

向rough_in_test内部交接时保留实际支管标识、端点和安装配置。这是尚未验收且未通气的中间状态，不是参考输出或独立售出的可接通燃气器具系统。

- 选定流：待粗装试验的已组装隔离封帽CSST支管
- 流属性/单位：物品数量 / item
- 数量规则：按可识别支管记录实际交接数量；重复整改回路交接不得取得新增完整支管产出额度。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assembly_gate`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要实际交接与缺陷记录；有报废或未完工结转时，不得强制中间交接数等于验收产出数。

##### 废物流

##### 基本流

### 过程：隔离粗装压力试验、整改与交接 (`rough_in_test`)

#### 输入

##### 产品流

###### 待粗装试验的已组装隔离封帽CSST支管 (`test_branch`)

内部接收assembled_branch时使用相同交接和支管标识、状态与数量。试验失败的支管回到branch_assembly整改并复试；每次回路不得虚构新增上游支管供应。

- 选定流：待粗装试验的已组装隔离封帽CSST支管
- 流属性/单位：物品数量 / item
- 数量规则：按唯一交接标识记录实际接收数量，与安装输出和未验收在制品核对。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_test_gate`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要实际配对保管权、交接及缺陷记录；最终验收数不能代替中间追踪。

###### 实际非腐蚀性检漏液 (`leak_solution`)

记录实际兼容检漏配方在购入或配制时的浓度。区分采购稀释成品与另行混合的水和原液；每种配制组分仅计一次。

- 选定流：实际非腐蚀性检漏液
- 流属性/单位：质量 / kg
- 数量规则：按批次和试验或整改周期记录实际毛领用配方质量；分别记录消耗、真实向外可用退回和期末留存，不得双重净扣。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_test_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要供应商组成浓度及毛领用库存记录或称量；指南兼容性建议不构成每次试验用量。

###### 实际冲洗与试验清洁用水 (`rinse_water`)

用于冲洗检漏液与实际工作清理的水在真实供水交接门进入。干燥耗材在试验供应或材料记录中单独识别；不得遗漏冲洗并干燥程序中的用水职责。

- 选定流：实际冲洗与试验清洁用水
- 流属性/单位：质量 / kg
- 数量规则：记录实际毛供水质量，或有可追溯体积及状态特定密度，排除检漏液已含稀释水；核对使用、真实向外退回（若有）和留存库存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_test_materials`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要计量或称重用水、实际温度及密度换算和任务用途；无默认冲洗水量。

###### 实际试压压缩机或仪器用电 (`test_electricity`)

有条件记录服务包未含的实际试验设备、压缩机及充电用电。纳入归属于本支管的重复试验和待机。

- 选定流：实际试压压缩机或仪器用电
- 流属性/单位：能量 / kWh
- 数量规则：实际计量或有文件支持分配的试验电量；服务商已纳入部分不再重复计上游负荷。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_test_resources`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：需要实际试验周期电表活动证据；若估计则需要设备负荷和不确定性；无默认电量，最终能量支持链仍须核实。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经验收隔离且通过压力试验的室内天然气CSST支管粗装服务 (`accepted_branch`)

实际完整支管已完成兼容无损组装、支承保护、适用等电位连接验证、隔离封帽、获准压力试验及封闭前可达粗装检查。签署交接明确后续通气、吹扫、器具连接与调试在此交接门以外的具体责任方和范围。

- 选定流：经验收隔离且通过压力试验的室内天然气CSST支管粗装服务
- 流属性/单位：物品数量 / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_test_gate`
- 来源：`omegaflex-tracpipe-2026`

数量范围证据需求：一条完整且符合限定条件的回路是参考定义，不是经验效率区间。需要实际签署的支管登记、配置及验收和不合格数量；压力、时长和能力仍取自实际设计试验事实。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| one_service_output | 所有过程 | 仅一个预期服务输出；边角料、可用退回和废物不预设为联产品。全部整改复试负荷保留在最终验收支管；未解决失败保持未完工或不合格，不算验收。不作避免钢材燃气生产、回收或运行节约信用。 | omegaflex-tracpipe-2026 |
| shared_attribution | assembly_provision; test_provision; 用电 | 以实际资产服务范围和完整使用者活动记录按因果时间使用、运输活动或直接计量电量分摊声明服务期负荷。两个节点及其他作业的分摊份额与来源总量核对，仅应用一次，不重复服务包已含部件负荷。 | omegaflex-tracpipe-2026 |
| custody_balance | 材料与残余行 | 期初库存加毛收料与安装存量、向外实际可用退回、发运废物、实测消耗排放及期末留存核对。期末库存负荷结转，不是向外交换；不得先净扣再计退回。记录处理、复用帽和气瓶保管权，不虚构回收信用。 | omegaflex-tracpipe-2026 |
| period_attribution | assembly_provision; test_provision | 逐资产确定制造供应期、各使用维护期和使用者、更换事件及终止拆除责任。依据完整实际服务寿命使用证据分配生产和终止份额，另计本次使用维护，各期各使用者与来源总量核对。记录服务商覆盖阶段；不得每次作业重复全额生产、把无归属终止责任移出账本或重复更换。首次验收支管周期仍是产出分母，无通用寿命或年化。 | omegaflex-tracpipe-2026 |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_assembly_materials | branch_assembly | 部件耗材、可用退回与废物 | 收发库存保管权记录 | branch_id; part_id; system_revision; diameter; gross_receipt; opening_stock; issued_length; composite_mass; installed_mass; return_mass; waste_mass; closing_stock; receiver; provider_coverage | 追踪实际批准物料表和批次供应质量并校准称重；毛领用与安装、边角料、退回及留存配对。按参考流归一化实际批次归属毛输入，分别记录真实向外可用退回和留存库存结转负荷；消耗仅为去向，绝不构成第二套净输入约定。 | kg; m; item | 每次领用安装整改及向外交接 | 首次收料至支管最终交接，包括整改 | 实际支管场址、供应及接收方 | per reference flow | 账单、校准秤或可追溯部件质量；组成保管权、包装覆盖、平衡残差和不确定性 |
| cp_assembly_resources | branch_assembly | 共享工具通道物流、能源与经表征排放 | 电表任务服务活动记录 | branch_id; task_id; asset_id; service_scope; consumer_id; service_period; provision_period; use_period; upkeep_period; replacement_event; terminal_period; phase_owner; phase_burden; attribution_decision; use_time; life_activity; maintenance; removal_owner; meter_start; meter_end; supplier; load; distance; empty_leg; substance; medium; released_mass; uncertainty | 计量作业用电和物理服务使用；保留全部使用者期间总量，把制造供应、使用维护、更换、终止与实际期间及责任方相连；按因果份额归branch_assembly，避免重复试验或供应商覆盖，采集实际排放方法与介质。 | kWh; item; kg; h; km | 每次任务充电运输及排放事件 | 声明服务商服务期和完整安装周期 | 实际支管及服务商运行 | per reference flow | 计量活动记录、供应商范围、完整使用者分摊、真实寿命服务证据、排放检出与不确定性 |
| cp_assembly_gate | branch_assembly | 未试验内部支管交接与整改 | 支管配置交接登记 | branch_id; transfer_id; endpoints; segment_length; diameter; fitting_revision; support_protection; bonding_record; qualified_installer; defect_id; transfer_count; custody_time | 记录唯一隔离封帽组装与实际配置，transfer_id与试验接收配对；保留失败整改及未完工库存，每条最终验收支管核对，重复回路不算新增生产。 | item; m | 每次初始交接与整改回路 | 组装至完成试验交接 | 一条实际声明室内支管 | per reference flow | 批准设计、部件兼容、安装资质、路线照片、适用等电位验收及配对签署交接 |
| cp_test_materials | rough_in_test | 介质检漏液冲洗水废物与排放 | 试验材料保管权及物理平衡记录 | branch_id; cycle_id; medium_identity; composition; source_gate; isolated_volume; volume_unit; absolute_pressure; pressure_unit; temperature; temperature_unit; meter; delivered_mass; solution_id; concentration; rinse_mass; residual_mass; recovered_mass; waste_mass; substance; receiving_medium; receiver; outward_product_return; provider_internal_residual; retained_stock; intake_convention; uncertainty | 计量或以有记录状态组成核实介质质量；保留全部周期泄漏整改及去向；计量检漏液冲洗水和残余。区分ambient_air_intake基本输入与test_medium外供产品输入，真实test_usable_returns与留存及服务商内部残余分开，亦与环境及废物保管权分开；全部周期数量归本验收参考支管。 每个实测值和状态换算均保留实际程序体积、绝对压力及温度单位；适用时记录表压至绝对压力和温标换算。 | kg; 实际volume_unit; 实际绝对压力pressure_unit; 实际temperature_unit | 每次试验复试冲洗收集排放 | 首次试验准备至最终降压清理及保管权移交 | 实际支管、供应及接收方 | per reference flow | 获准试验程序、校准、密度状态模型证据、组成SDS、完整质量去向平衡及不确定性 |
| cp_test_resources | rough_in_test | 试验设备干燥通道与电力 | 服务校准电表记录 | branch_id; cycle_id; asset_id; calibration; service_scope; consumer_id; service_period; provision_period; use_period; upkeep_period; replacement_event; terminal_period; phase_owner; phase_burden; attribution_decision; use_time; life_activity; maintenance; drying_material; removal_owner; electricity; supplier; transport_leg; uncertainty | 读取实际试验仪器压缩机能源及干燥耗用；保留制造供应、使用维护、更换、终止期间事件责任及共享使用者总量；区分已含服务能源材料，实际rough_in_test份额仅分摊一次。 | item; kWh; kg; h; km | 每次设置试验复试清理及共享服务声明 | 完整试验周期与声明服务商服务期 | 实际场址、服务商及其他有记录使用者 | per reference flow | 校准服务发票、计量活动、完整分摊核对、范围干燥拆除证据 |
| cp_test_gate | rough_in_test | 内部接收、试验验收与最终产出 | 签署试验检查保管权登记 | branch_id; transfer_id; received_count; design_gas; design_pressure; design_capacity; jurisdiction; fitting_revision; medium; test_protocol; test_pressure; pressure_unit; test_duration; duration_unit; result; defect_id; retest_id; inspection; bonding; capped_isolated; accepted_count; commissioning_owner | 接收与assembled_branch配对；核实实际合格安装、隔离封帽、批准试验状态、可达检查及适用等电位连接。失败经branch_assembly整改复试闭环，每条完整合格回路只计一次，后续调试分配明确外部范围。 按实际获准程序保留压力及时长单位，与实测试验设定和结果配对；不得推定压力或时间默认值。 | item; 实际pressure_unit; 实际duration_unit | 每次接收试验复试及最终签署交接 | 首次试验接收至最终粗装验收 | 一条具体完整室内支管 | per reference flow | 批准设计管辖区与当前适用指南、安装资质、校准、试验检查签字、缺陷闭环与保管权 |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| reference_attribution | 所有清单行 | 记录每参考流实际归属交换数量。合并作业保留验收支管标识及按实际配置活动支持的因果分摊，不得对不等支管盲目平均。 | 实际交换; 唯一验收支管登记; cp_assembly_gate; cp_test_gate; 分摊证据 | 每条限定参考回路交换数量 | omegaflex-tracpipe-2026 |
| material_reconciliation | 材料与残余行 | 期初库存加毛收料与安装材料、向外退回、发运废物、实际消耗排放和留存核对；按计量不确定性调查残差，内部移交不得加入外部收料。 | cp_assembly_materials; cp_test_materials | 审计材料去向及结转负荷 | omegaflex-tracpipe-2026 |
| test_medium_balance | test_medium; ambient_air_intake; test_usable_returns; test_releases | 采用可追溯实际计量质量或有依据状态组成换算；逐周期把介质输入摄取与留存、回收、废物保管权和具体物质环境去向核对。保留绝对压力及实际状态证据，不用通用理想气体因子。 | cp_test_materials; 实际获准介质与换算方法 | 按物质和环境的实际介质量及去向 | omegaflex-tracpipe-2026 |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| identity_configuration | 全部流卡 | 声明实际材料服务身份、供应商状态单位、实际试压介质和排放物质环境；最终过程交换前解决具体UUID与支持链。 | 部件记录、服务商范围、组成和已核实详情支持数据 |
| full_cycle | 所有过程 | 包括初装、失败试验、整改复试、清理物流及可复用供应拆除全部责任，明确核对未完工作业。 | 有日期任务缺陷保管权记录和完整使用者总量 |
| measurement_uncertainty | 全部流卡 | 报告校准分辨率、抽样、供应质量变异、库存平衡残差、分摊和状态换算不确定性。证据缺失是缺口，不能变成零或任意范围。 | 电表秤证书、账单、物理平衡及不确定性说明 |
| version_jurisdiction | 粗装交接门 | 采用实际当前适用系统接头说明与合格批准设计；2026年7月指南示例不构成通用压力时长间距能力。 | 有日期版本、批准设计资质、实际程序检查及等电位记录 |


## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| accepted_gate | accepted_branch | 完整声明支管须隔离封帽且未通气，兼容无损，支承保护完成，适用等电位验证，获准试验与可达检查通过，缺陷复试关闭且交接签署，任一缺失均不得计验收产出。 | omegaflex-tracpipe-2026 |
| transfer_rework | assembled_branch; test_branch | 内部交接数量标识配对；每次失败试验连至branch_assembly整改和后续复试。失败支管、重复回路或未完工库存不得增大验收输出。 | omegaflex-tracpipe-2026 |
| inventory_coverage | 所有清单行 | 逐有条件卡核对实际任务，将概括材料服务商物质展开为真实交换。毛材料、退回、期末库存、废物废水、介质去向、能源和工具运输范围应在不确定性内仅核对一次；空证据不是零。 | omegaflex-tracpipe-2026 |
| bonding_test_specificity | 所有过程 | 要求实际管辖区系统接头特定保护、等电位和试验证据；AR护套不豁免适用等电位，不推断通用压力时长支承间距、甲烷泄漏、密封剂剂量或运行性能。 | omegaflex-tracpipe-2026 |
| scope_classification | 参考产品 | 仅使用声明的较窄气体导送粗装类别，不声明供暖通风安装、通气调试或整个CPC54640覆盖。 | un-cpc3-2025 |
| period_completeness | assembly_provision; test_provision | 核实制造供应、使用维护、更换、终止期间联系及责任，实际作业使用者因果分摊、完整阶段总量及无重复归属。缺失寿命更换终止证据阻断最终完成，不得以首次支管交接隐藏。 | omegaflex-tracpipe-2026 |
| medium_typing | test_medium; ambient_air_intake; test_usable_returns; test_releases | 对每份介质量依据实际证据选择外供产品或现场大气基本摄取，压缩机服务能源仅计一次。去向和物质环境身份配对；真实可用产品退回有保管权负荷证据，服务商内部气瓶残余不是第二输出。 | omegaflex-tracpipe-2026 |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; 具体交换核实后的process与lifecyclemodel投影 |
| allowed_use | 在隔离验收门处、完整实测供应和范围已声明的室内AR-CSST天然气支管粗装配置 |
| excluded_use | 通气吹扫器具调试；地下外部网络；黄色护套混用；供暖通风设备；建筑燃气运行性能；无限定每米比较 |
| required_metadata | 全部参考限定信息、路线部件标识、供应宿主边界、实际管辖区版本、试验检查等电位验收、保管权、服务商共享分摊及物理分母 |
| required_quality_disclosure | 实测分摊建模数量、来源覆盖、有条件省略证据、不确定性平衡残差、未解决身份支持与后续调试范围 |
| update_trigger | 路线配置系统接头说明、管辖设计试验程序、供应身份、服务覆盖、实际证据或已核实UUID变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | 联合国统计司CPC3.0解释性说明，2025年6月30日，印刷页295：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 气体配件安装类别、供暖通风排除及较窄语义边界 |
| omegaflex-tracpipe-2026 | handbook | OmegaFlex TracPipe系统柔性燃气管设计与安装指南，FGP-001US07/26 2026年7月，封面品牌更新及1.0、4.1-4.4、4.10、5.1-5.3、6.0-6.1节：https://tracpipe.com/wp-content/uploads/FGP-001US-DI-USA-Guide-Rev-0425-with-LINKS-1.pdf | 合格兼容组装切割连接保护等电位、粗装试压检查整改、兼容检漏液与冲洗干燥；URL文件名保留旧版号，实际文件为2026年7月 |
