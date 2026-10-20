---
pcr_id: pcr.constructions-and-construction-services.construction-services.prehung-interior-timber-door-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 室内预装框木门安装服务

## 1. 范围与适用性

本方法适用于工厂已完成饰面且饰面已验收的单扇室内预装框木门现场安装。起始接口为兼容的既有门洞。作业包括组件与门洞的到货检查、实际环境调适、许可的门框及垫片修切、校正与机械固定、安装指定锁具、填补和打磨实际紧固孔、保护新露出的切面或进行零星补饰，以及启闭、局部修整干燥状态和清理交付的验收。供应组件包括已装入门框的门扇、门框和合页。须区分整体门框与分体门框；所选组件或完工范围包含分体门框接缝嵌缝及饰条安装时，计入实际作业。

不包括需完整门扇/门框饰面的未饰面来料、门扇或门框制造、门洞/墙体新建及重大修补、旧门拆除、外门、推拉/折叠门、防火门及无证据的隔声或耐候性能主张。超出所声明组件的额外装饰套线不属于本狭窄参考范围，除非已明确纳入并单列材料与验收范围。即使来料已在工厂饰面，新露出的切面仍须按实际要求进行兼容的局部保护。需现场整门涂装的作业不属于本类别，不能作为零材料局部修补处理。[jeldwen-jii109]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.prehung-interior-timber-door-installation-services |
| classification_refs | cpc:3.0:54760 |
| covered_products | 在兼容且已接受门洞内，对工厂已饰面的单扇非防火室内预装木门扇/门框/合页组件进行现场安装并验收 |
| excluded_products | 需完整饰面的未饰面组件；门制造；结构/门洞作业；拆除；外门、推拉门、折叠门或防火门；整门涂装；使用及寿命终结 |
| representative_product | 指定工厂饰面室内木门/门框和工厂合页，配实际现场垫片、紧固件及兼容锁具，经局部完工并由客户接受 |
| production_route | 检查与调适 -> 许可的适配修切与机械固定 -> 锁具、局部修整、干燥/启闭检查与交付 |
| market_state | 客户交付验收时的已完工安装服务；中间固定组件仍属未验收作业 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在兼容且已接受的门洞中安装一套指定室内预装框木门 |
| How much | 一套验收完工单元 |
| How well | 满足指定校正、牢固、启闭与锁具要求；工厂饰面已接受，实际局部修补、切面保护及所选分体门框接缝已完成、干燥并验收；不推定防火、室外或隔声性能 |
| How long or cycle | 一项可识别作业自到货/调适至验收的完整周期，包括实际等待、返工及跨报告期事件；不包括后续使用/维护 |
| reference_flow_link | `reference_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量（reference_amount） | 1 |
| 参考产品流（reference_product_flow） | 室内预装框木门安装服务 |
| 参考流属性（reference_flow_property） | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组（reference_unit_group） | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位（reference_unit） | item |
| 必需限定信息（required_qualifiers） | 门/门洞标识; 门芯/树种/等级; 门框材料/系统; 工厂饰面状态; 尺寸与开启方向; 实际锁具/五金; 实际局部修补/切面保护/分体门框嵌缝范围; 适用供应商及现场验收条件; 场址; 作业日期和报告期 |

验收单元为完整安装，不是木材千克或工时。N 为所声明同质完整作业组中不同验收完工单元的正数计数。更换、实际重复切割和失败尝试的资源仍计入总量，但不增加验收单元数。同一验收门洞/组件配对只计一次。最终行 N/N = 1 item，严格 1..1 范围仅为数学归一化恒等关系，不提供经验成品率证据。

PCR 机器单位 token item 表示已独立核实的平台参考单位 item，在 Units of items 5beb6eed-33a9-47b8-9ede-1dfe8f679159 中因子为 1。此处仅为拼写别名：保留原始 item 记录及不变的实际件数；不表示物理换算或服务身份已核实。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `accepted_count` | 参考产品；`reference_service` | Number of items | item | 从 complete_accept 中唯一且签字的完工验收记录取得 N。排除暂存、拒收、仅固定或尚未干燥单元。同一作业组适用数量均除以该正数 N。 |
| `custody_basis` | `prehung_unit`；`lockset`；可用退出及材料行 | 原输入属性 | 按卡片使用 item 或 kg | 实物毛领用量和正向未用输出须保持相同属性/单位。没有匹配实际标识的实测和明确桥接，不能将门或锁具计数替换为质量。 |
| `handoff_identity` | `conditioned_unit`；`fix_feed`；`fixed_unit`；`complete_feed` | Number of items | item | 按唯一转移/事件标识、状态和时间戳配对节点交接。保留实际计数，不因最终参考为一就把内部转移设为一。 |
| `material_fate` | 材料、粉尘、残余物、水及液体废物行 | Mass | kg | 去皮称重并记录组成/水分。留存、已安装/在制品、可再用退出、固体/液体废物及直接排放池互斥。实测 kg/item 系数不是质量：质量守恒前须将实际同标识/当前状态计数流转换为 kg，或直接称量该确切流。长度桥接的实际总质量独立计算。门洞观察不进入材料池。最终验收安装质量仅作为留存计一次，不再计为向外交付。无法解释或桥接缺失的平衡为缺口。 |
| `energy_service` | 节点电力及共享服务行 | Energy 或实际服务时长要求 | kWh 或有记录的 h | 保持实际电量单位和计量边界。只按实际合同计费时段转换；不得推定八小时工作日，不以劳动时间替代设备电耗。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 既有室内门洞干燥、完好且几何条件与实际组件兼容；所供木质预装门扇/门框/合页已完成工厂饰面并经饰面验收 |
| starting_condition_role | 接收的安装接口与另行记录的供应组件；门洞观察不是新消耗墙体 |
| product_classification_scope | 较广泛细木工安装服务内的狭窄室内预装框木门安装路线；外部分类不定义规范身份 |
| recursive_input_rule | 本类别先前安装服务输入须为范围/时间不重叠的明确上游服务；不得递归展开同一作业，亦不得以该服务替代实际门组件 |
| upstream_dataset_requirement | 声明每个实际上游材料/服务数据集是否包含制造、运输、包装、电力、资本设备及租赁方设置；缺少上游连接仍为披露的缺口 |
| disclosure | 作业/场址、来料饰面状态、门洞接受、实际门框路线、所有排除项、报告窗口、保管转移与上游覆盖重叠 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_start_gate` | 安装前核查实际门洞和来料组件。需重大修正的门洞应暂停本路线，直至形成外部验收的修正接口；保留实际失败检查资源，不虚构墙体施工为安装输入。 | jeldwen-jii109 |
| `boundary_conditioning` | 产品环境调适及实际保护/储存资源归 receive_condition。记录实际湿度/温度、时长及放行依据。所选产品服从其供应商说明；来源中的示例时长、公差或紧固间距不是通用 PCR 数量。 | jeldwen-jii109 |
| `boundary_node_states` | receive_condition 放行已检查调适组件；position_fix 改变许可的门框/垫片几何形态并将组件、垫片和紧固件结合成校正固定单元；complete_accept 安装锁具和实际局部饰面，再放行启闭/干燥验收服务。 | jeldwen-jii109 |
| `boundary_local_finish` | 包括实际紧固孔填料、打磨、新切面保护、零星兼容补饰及所选分体门框接缝嵌缝。未饰面来料及现场整门/门框涂装需采用其他声明路线。 | jeldwen-jii109 |
| `boundary_periods` | 按实际期间和作业索引到货、调适/等待、切割/固定、局部修补/干燥、检查、返工、验收以及期末/终止。共享储存、通行、工具或调适服务仅在实际发生且所有权/覆盖有记录时计入。 | |
| `boundary_releases` | 在实际产生节点区分捕集切割/打磨废物、实际直接空气排放、含水残余物与收集废水。介质、组成或去向未知为覆盖未决，不得假定排放或自动置零。 | |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：已接受室内门洞安装接口 (`opening_interface`)

过程／待建立交换的方向／类型：`receive_condition` / `inputs` / `product`.

按标识接受、与实际门规格相符的既有干燥完好门洞；不是新建或消耗墙体。 去向：仅到货接口。条件：所述实物事件发生时记录。

数量方法：采用 receive_condition_event_counts 和 receive_condition_normalize 及 cp_receive_condition_events：实际 opening_id_count / N，按标识/状态匹配。门洞接口仅为观察，不是消耗墙体材料。

- 采集对象：已接受室内门洞安装接口
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 单位组：Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：实际 opening_id_count / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_receive_condition_events`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：item
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：计数宽范围允许验收一次安装前调查备选或不合格门洞；应核查重复标识，不虚构额外门洞。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：用于到货检查与环境调适的实际租赁设备、通行或调适可用性服务 (`receive_condition_shared_service`)

过程／待建立交换的方向／类型：`receive_condition` / `inputs` / `product`.

按条件记录实际提供方/资产/合同边界及计费单位；保留付费闲置/可用时段。只有合同记录能支持小时才用 h。 去向：receive_condition 的实际服务消费。条件：实际付费可用性/小时服务发生，不能凭工具存在虚构服务。

数量方法：采用 receive_condition_service_total 和 receive_condition_normalize：按实际计费至小时桥、付费闲置及不重叠提供方覆盖取得 H_receive / N。不采用八小时工作日。全部直接归属、剩余为零时不需共享分母。

- 采集对象：用于到货检查与环境调适的实际租赁设备、通行或调适可用性服务
- 流属性/单位：Duration / h
- 数量规则：实际 H_receive / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_receive_condition_resources`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：240
  - 单位：h
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：调适和租赁可覆盖夜间/周末，小时可大于有效劳动；宽泛十天小时筛查仅触发复核，不规定租赁时长。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：已检查并环境调适的预装木门组件 (`conditioned_unit`)

过程／待建立交换的方向／类型：`receive_condition` / `outputs` / `product`.

产品检查合格且实际现场调适放行条件已满足；不假设通用时长或暖通用能。 去向：position_fix。条件：所述实物事件发生时记录。

数量方法：采用 receive_condition_event_counts 和 receive_condition_normalize 及 cp_receive_condition_events：实际 released_count / N，按标识/状态匹配。匹配 transfer_id、assembly_id 及前后状态；不固定为一。

- 采集对象：已检查并环境调适的预装木门组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 单位组：Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：实际 released_count / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_receive_condition_events`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：item
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：交接可含替换单元、真实重复转移或未完成作业组；应按标识和状态对照到货及固定台账。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：废弃来门包装与运输固定材料 (`transport_packaging`)

过程／待建立交换的方向／类型：`receive_condition` / `outputs` / `waste`.

按材料分开的实际纸板、塑料、运输块、垫、夹或其他废弃固定物，并说明所含内容。 去向：实际指定包装废物接收方。条件：所述实物事件发生时记录。

数量方法：采用 receive_condition_waste_net 和 receive_condition_normalize 及 cp_receive_condition_fate：本实际 waste_stream/材料/事件的 sum(gross_mass_kg - tare_mass_kg) / N。排除其他废物/直接排放/库存/可用池。

- 采集对象：废弃来门包装与运输固定材料
- 流属性/单位：Mass / kg
- 数量规则：本 waste_stream 的实际 Q_waste_receive / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_receive_condition_fate`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：门尺寸保护包装可含较大运输块和覆盖物；三十千克筛查混入其他废物或多套组件，不主张包装质量。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：到货或调适不可用门材料 (`receive_rejected_material`)

过程／待建立交换的方向／类型：`receive_condition` / `outputs` / `waste`.

定位前实际废弃的损坏/不合格组件部件；整套组件还保留件标识与实测质量桥。 去向：实际到货节点废物接收方。条件：不可用材料实际作为废物离开到货/调适节点。

数量方法：采用 receive_condition_waste_net 和 receive_condition_normalize 及 cp_receive_condition_fate：本实际 waste_stream/材料/事件的 sum(gross_mass_kg - tare_mass_kg) / N。排除其他废物/直接排放/库存/可用池。

- 采集对象：到货或调适不可用门材料
- 流属性/单位：Mass / kg
- 数量规则：本 waste_stream 的实际 Q_waste_receive / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_receive_condition_fate`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：严重到货拒收可能涉及较重门/框；宽泛质量筛查提示整套实测重量和去向。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：已检查并环境调适的预装木门组件 (`fix_feed`)

过程／待建立交换的方向／类型：`position_fix` / `inputs` / `product`.

与 conditioned_unit 的放行状态和组件标识一致，保留实际交接和接收时间。 去向：修切与定位。条件：所述实物事件发生时记录。

数量方法：采用 position_fix_event_counts 和 position_fix_normalize 及 cp_position_fix_events：实际 received_count / N，按标识/状态匹配。匹配 transfer_id、assembly_id 及前后状态；不固定为一。

- 采集对象：已检查并环境调适的预装木门组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 单位组：Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：实际 received_count / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_position_fix_events`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：item
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：更换和真实重复交接可使接收计数超过一；不能把数量固定成最终参考数。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：实际安装钉、螺钉与固定附件 (`fasteners`)

过程／待建立交换的方向／类型：`position_fix` / `inputs` / `product`.

声明实际金属、涂层、尺寸和用途。工厂随附合页五金保留在预装组件输入内；只单列增加或更换件。 去向：机械固定。条件：所述实物事件发生时记录。

数量方法：采用 position_fix_gross 和 position_fix_normalize 及 cp_position_fix_material：实物毛领用 G_fix = S_open + R_received - S_close_intact_unissued；正向输入 G_fix / N，包括实际失败/重复领用。可用 U_return 和 X_transfer 为另列正向退出；诊断 G-U-X 绝不是第二交换或抵扣。

- 采集对象：实际安装钉、螺钉与固定附件
- 流属性/单位：Mass / kg
- 数量规则：实际物理毛领用 G_fix / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_position_fix_material`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：离散紧固五金质量通常远小于门；十千克宽筛容纳重复纠正，并提示按件数复核。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：用于许可修切、定位与机械固定的实际租赁设备、通行或调适可用性服务 (`position_fix_shared_service`)

过程／待建立交换的方向／类型：`position_fix` / `inputs` / `product`.

按条件记录实际提供方/资产/合同边界及计费单位；保留付费闲置/可用时段。只有合同记录能支持小时才用 h。 去向：position_fix 的实际服务消费。条件：实际付费可用性/小时服务发生，不能凭工具存在虚构服务。

数量方法：采用 position_fix_service_total 和 position_fix_normalize：按实际计费至小时桥、付费闲置及不重叠提供方覆盖取得 H_fix / N。不采用八小时工作日。全部直接归属、剩余为零时不需共享分母。

- 采集对象：用于许可修切、定位与机械固定的实际租赁设备、通行或调适可用性服务
- 流属性/单位：Duration / h
- 数量规则：实际 H_fix / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_position_fix_resources`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：240
  - 单位：h
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：调适和租赁可覆盖夜间/周末，小时可大于有效劳动；宽泛十天小时筛查仅触发复核，不规定租赁时长。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：已校正机械固定的室内预装木门组件 (`fixed_unit`)

过程／待建立交换的方向／类型：`position_fix` / `outputs` / `product`.

许可门框/垫片修切完成、兼容垫片/紧固件已装且校正已查；锁具、局部修整及最终验收可能待做。 去向：complete_accept。条件：所述实物事件发生时记录。

数量方法：采用 position_fix_event_counts 和 position_fix_normalize 及 cp_position_fix_events：实际 fixed_count / N，按标识/状态匹配。匹配 transfer_id、assembly_id 及前后状态；不固定为一。

- 采集对象：已校正机械固定的室内预装木门组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 单位组：Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：实际 fixed_count / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_position_fix_events`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：item
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：替换/重新固定事件可产生真实重复交接；按状态和标识区别重复记录。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：未用可用固定材料（按实际材料） (`unused_fixing_material_return`)

过程／待建立交换的方向／类型：`position_fix` / `outputs` / `product`.

分别识别未加工垫片和紧固材料，保持输入 Mass 基准及实际退出责任方。 去向：指定供应商或外部接收方。条件：实际未用可用固定材料离开本节点保管。

数量方法：采用 position_fix_usable_exit 和 position_fix_normalize 及 cp_position_fix_material：实际 U_return / N 与 X_transfer / N 为保留原输入身份/属性/单位的分别正向输出。两者均不计入期末库存；安装/返工负担留在作业。

- 采集对象：未用可用固定材料（按实际材料）
- 流属性/单位：Mass / kg
- 数量规则：实际 Q_U_fix 或 Q_X_fix，各自分别 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_position_fix_material`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：未用包装组合可比净安装材料更重；每种退出对照自身毛输入，不用单一质量比例。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：许可门框及垫片废边角料 (`jamb_shim_offcuts`)

过程／待建立交换的方向／类型：`position_fix` / `outputs` / `waste`.

实际木/聚合物切块按材料分开；不假设缩短门扇或整套组件制造。 去向：指定切割废物接收方。条件：所述实物事件发生时记录。

数量方法：采用 position_fix_waste_net 和 position_fix_normalize 及 cp_position_fix_fate：本实际 waste_stream/材料/事件的 sum(gross_mass_kg - tare_mass_kg) / N。排除其他废物/直接排放/库存/可用池。

- 采集对象：许可门框及垫片废边角料
- 流属性/单位：Mass / kg
- 数量规则：本 waste_stream 的实际 Q_waste_fix / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_position_fix_fate`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：有限适配修切应对照许可几何；三十千克宽筛发现误混整门拒收或其他作业。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：许可门框及垫片切割捕集粉尘 (`captured_dust`)

过程／待建立交换的方向／类型：`position_fix` / `outputs` / `waste`.

实际捕集木/聚合物粉尘，识别材料、捕集方法和水分状态；捕集固废不是直接空气排放。 去向：指定捕集粉尘废物接收方。条件：所述实物事件发生时记录。

数量方法：采用 position_fix_waste_net 和 position_fix_normalize 及 cp_position_fix_fate：本实际 waste_stream/材料/事件的 sum(gross_mass_kg - tare_mass_kg) / N。排除其他废物/直接排放/库存/可用池。

- 采集对象：许可门框及垫片切割捕集粉尘
- 流属性/单位：Mass / kg
- 数量规则：本 waste_stream 的实际 Q_waste_fix / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_position_fix_fate`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：少量门框/垫片加工可产生细粉；宽筛提示与切割、捕集和大块边料核对，不主张粉尘比例。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：固定阶段废弃门部件与用后固定材料 (`fix_rejected_material`)

过程／待建立交换的方向／类型：`position_fix` / `outputs` / `waste`.

实际不可用拆除紧固件、损坏垫片或不可恢复的修切/失败组件，保留实际材料和安装状态。 去向：指定固定阶段废物接收方。条件：实际固定失败/纠正产生不可用废弃材料。

数量方法：采用 position_fix_waste_net 和 position_fix_normalize 及 cp_position_fix_fate：本实际 waste_stream/材料/事件的 sum(gross_mass_kg - tare_mass_kg) / N。排除其他废物/直接排放/库存/可用池。

- 采集对象：固定阶段废弃门部件与用后固定材料
- 流属性/单位：Mass / kg
- 数量规则：本 waste_stream 的实际 Q_waste_fix / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_position_fix_fate`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：异常失败安装可能废弃远多于修切边料；宽筛区别真实事件与常规切割并保留负担。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：固定阶段附件废包装 (`fixing_packaging`)

过程／待建立交换的方向／类型：`position_fix` / `outputs` / `waste`.

本节点实际开启的垫片/紧固附件容器与包裹物；留存包装不作为废弃物。 去向：指定固定阶段包装接收方。条件：实际固定附件包装在定位/固定节点成为废物。

数量方法：采用 position_fix_waste_net 和 position_fix_normalize 及 cp_position_fix_fate：本实际 waste_stream/材料/事件的 sum(gross_mass_kg - tare_mass_kg) / N。排除其他废物/直接排放/库存/可用池。

- 采集对象：固定阶段附件废包装
- 流属性/单位：Mass / kg
- 数量规则：本 waste_stream 的实际 Q_waste_fix / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_position_fix_fate`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：附件包装相对组件应较小；宽筛查来门包装重复计入。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：实际切割空气粉尘（按材料与粒径） (`position_direct_dust`)

过程／待建立交换的方向／类型：`position_fix` / `outputs` / `elementary`.

本节点有条件的物质/材料分辨空气粉尘；需实际组成、粒径定义、控制状态和接收空气区室。 去向：实际接收空气区室。条件：有证据确认许可切割的直接空气排放，且可指定物种/粒径和介质。

数量方法：采用 position_fix_direct_release 和 position_fix_normalize 及 cp_position_fix_fate：按 species_id、particle_fraction 和 receiving_medium 的独立实测/有证据 Q_release_fix / N。未知证据为缺口；捕集废物或无法解释质量不作为直接排放。

- 采集对象：实际切割空气粉尘（按材料与粒径）
- 流属性/单位：Mass / kg
- 数量规则：实际独立有证据的 Q_release_fix / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_position_fix_fate`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：宽筛承认未控制切割差异；数量须有实际排放证据，捕集质量缺失不是排放估算。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：已校正机械固定的室内预装木门组件 (`complete_feed`)

过程／待建立交换的方向／类型：`complete_accept` / `inputs` / `product`.

与 fixed_unit 的实际组件和固定状态相同；尚未验收为完工服务。 去向：五金安装与局部修整。条件：所述实物事件发生时记录。

数量方法：采用 complete_accept_event_counts 和 complete_accept_normalize 及 cp_complete_accept_events：实际 received_count / N，按标识/状态匹配。匹配 transfer_id、assembly_id 及前后状态；不固定为一。

- 采集对象：已校正机械固定的室内预装木门组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 单位组：Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：实际 received_count / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_events`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：item
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：返工或更换交接需按实际计数；一个验收参考单元不能证明只输入一个。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：实际孔洞填料、切面保护及零星补饰配方 (`local_repair_materials`)

过程／待建立交换的方向／类型：`complete_accept` / `inputs` / `product`.

分别记录实际腻子/填料、切面保护、兼容补饰及所选分体门框接缝胶；明确配方、水分/固体及包装内容；排除现场整门/门框涂装。 去向：有限局部完工修整。条件：所述实物事件发生时记录。

数量方法：采用 complete_accept_gross 和 complete_accept_normalize 及 cp_complete_accept_material：实物毛领用 G_complete = S_open + R_received - S_close_intact_unissued；正向输入 G_complete / N，包括实际失败/重复领用。可用 U_return 和 X_transfer 为另列正向退出；诊断 G-U-X 绝不是第二交换或抵扣。

- 采集对象：实际孔洞填料、切面保护及零星补饰配方
- 流属性/单位：Mass / kg
- 数量规则：实际物理毛领用 G_complete / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_material`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：局部缺陷和切面范围小于整门饰面；十千克提示范围/领用复核，不规定配方或涂布量。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：实际打磨、保护和清理耗材 (`abrasives_protection`)

过程／待建立交换的方向／类型：`complete_accept` / `inputs` / `product`.

分别识别实际磨料、擦拭物、保护片及清理耗材；耐用复用工具不在每项作业全部消耗。 去向：局部打磨、保护和清理。条件：所述实物事件发生时记录。

数量方法：采用 complete_accept_gross 和 complete_accept_normalize 及 cp_complete_accept_material：实物毛领用 G_complete = S_open + R_received - S_close_intact_unissued；正向输入 G_complete / N，包括实际失败/重复领用。可用 U_return 和 X_transfer 为另列正向退出；诊断 G-U-X 绝不是第二交换或抵扣。

- 采集对象：实际打磨、保护和清理耗材
- 流属性/单位：Mass / kg
- 数量规则：实际物理毛领用 G_complete / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_material`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：保护片及重复修补清理可能比细磨料更重；宽筛识别整件复用工具或无关现场材料全额计入。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：用于五金、局部修整与交付验收的实际租赁设备、通行或调适可用性服务 (`complete_accept_shared_service`)

过程／待建立交换的方向／类型：`complete_accept` / `inputs` / `product`.

按条件记录实际提供方/资产/合同边界及计费单位；保留付费闲置/可用时段。只有合同记录能支持小时才用 h。 去向：complete_accept 的实际服务消费。条件：实际付费可用性/小时服务发生，不能凭工具存在虚构服务。

数量方法：采用 complete_accept_service_total 和 complete_accept_normalize：按实际计费至小时桥、付费闲置及不重叠提供方覆盖取得 H_complete / N。不采用八小时工作日。全部直接归属、剩余为零时不需共享分母。

- 采集对象：用于五金、局部修整与交付验收的实际租赁设备、通行或调适可用性服务
- 流属性/单位：Duration / h
- 数量规则：实际 H_complete / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_resources`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：240
  - 单位：h
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：调适和租赁可覆盖夜间/周末，小时可大于有效劳动；宽泛十天小时筛查仅触发复核，不规定租赁时长。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：未用完好实际锁具组件 (`unused_lockset_return`)

过程／待建立交换的方向／类型：`complete_accept` / `outputs` / `product`.

按匹配配置和件标识确认未加工可用锁具；分别记录供应商退回与对外交接。 去向：指定供应商或外部接收方。条件：实际未用可用锁具离开完工节点保管。

数量方法：采用 complete_accept_usable_exit 和 complete_accept_normalize 及 cp_complete_accept_material：实际 U_return / N 与 X_transfer / N 为保留原输入身份/属性/单位的分别正向输出。两者均不计入期末库存；安装/返工负担留在作业。

- 采集对象：未用完好实际锁具组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 单位组：Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：实际 Q_U_complete 或 Q_X_complete，各自分别 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_material`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：item
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：一套安装可退回多个备选/备用锁具；件数/标识桥防止将计数输入变为无依据废物质量。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：未用可用局部修整、保护及新供水材料 (`unused_completion_material_return`)

过程／待建立交换的方向／类型：`complete_accept` / `outputs` / `product`.

分别识别实际未用可用配方、磨料、保护产品或单独新供水，保留实际等级/提供方及原 Mass 基准；只限未改变、未加工材料。 去向：指定供应商或外部接收方。条件：实际未用可用完工材料离开本节点保管。

数量方法：采用 complete_accept_usable_exit 和 complete_accept_normalize 及 cp_complete_accept_material：实际 U_return / N 与 X_transfer / N 为保留原输入身份/属性/单位的分别正向输出。两者均不计入期末库存；安装/返工负担留在作业。

- 采集对象：未用可用局部修整、保护及新供水材料
- 流属性/单位：Mass / kg
- 数量规则：实际 Q_U_complete 或 Q_X_complete，各自分别 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_material`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：未用容器/卷材可超过安装或消耗量；暂定筛查要求产品特定核对，不作整体抵扣。实际可用新供水退出须有记录，不是废液或已加工混合物。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：废弃局部修整残余、用后耗材和包装 (`repair_waste`)

过程／待建立交换的方向／类型：`complete_accept` / `outputs` / `waste`.

按材料分开填料/嵌缝/补饰残余、打磨粉尘、用后磨料/擦拭物/保护物和附件包装；记录实际湿态和所含残余。 去向：指定局部修整废物接收方。条件：所述实物事件发生时记录。

数量方法：采用 complete_accept_waste_net 和 complete_accept_normalize 及 cp_complete_accept_fate：本实际 waste_stream/材料/事件的 sum(gross_mass_kg - tare_mass_kg) / N。适用时记录 water_fraction；排除其他废物/直接排放/库存/可用池。

- 采集对象：废弃局部修整残余、用后耗材和包装
- 流属性/单位：Mass / kg
- 数量规则：本 waste_stream 的实际 Q_waste_complete / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_fate`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：局部作业可产生保护膜和湿擦拭物及少量填料残余；宽筛防止清理流被假定为零。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：收集的局部修整与清理液体废物 (`completion_wastewater`)

过程／待建立交换的方向／类型：`complete_accept` / `outputs` / `waste`.

实际容纳的清洗液或未用含水混合物，记录组成和水量；交接至接收方，不假设直接排放。 去向：指定液体废物/废水接收方。条件：实际局部修整/清理液体被收集并作为废物交接。

数量方法：采用 complete_accept_waste_net 和 complete_accept_normalize 及 cp_complete_accept_fate：本实际 waste_stream/材料/事件的 sum(gross_mass_kg - tare_mass_kg) / N。适用时记录 water_fraction；排除其他废物/直接排放/库存/可用池。

- 采集对象：收集的局部修整与清理液体废物
- 流属性/单位：Mass / kg
- 数量规则：本 waste_stream 的实际 Q_waste_complete / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_fate`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：范围反映可能较大的清理用水，不给定废水比例；与实际供水和配方水核对。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：完工阶段不可恢复门或五金废物 (`rejected_unit`)

过程／待建立交换的方向／类型：`complete_accept` / `outputs` / `waste`.

启闭/修补验收时实际拆除的不可用门/五金，识别部件/复合状态和件数至质量桥。 去向：指定完工阶段废物接收方。条件：实际不可恢复单元或部件在完工节点废弃。

数量方法：采用 complete_accept_waste_net 和 complete_accept_normalize 及 cp_complete_accept_fate：本实际 waste_stream/材料/事件的 sum(gross_mass_kg - tare_mass_kg) / N。适用时记录 water_fraction；排除其他废物/直接排放/库存/可用池。

- 采集对象：完工阶段不可恢复门或五金废物
- 流属性/单位：Mass / kg
- 数量规则：本 waste_stream 的实际 Q_waste_complete / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_fate`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：少见整套拒收可主导局部废物；宽筛要求明确事件和实测身份，不能藏于补饰废物。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 采集要求：实际物质分辨的局部修整或清理直接排放 (`complete_accept_other_releases`)

过程／待建立交换的方向／类型：`complete_accept` / `outputs` / `elementary`.

只记录有证据的直接排放，包括 H2O 蒸气或实际挥发组分/打磨粉尘，明确物质或粒径、状态及接收介质；每个身份单列具体交换。 去向：实际接收环境区室。条件：局部修整、打磨、干燥或清理实际直接排放得到确认。

数量方法：采用 complete_accept_direct_release 和 complete_accept_normalize 及 cp_complete_accept_fate：按 species_id、particle_fraction 和 receiving_medium 的独立实测/有证据 Q_release_complete / N。未知证据为缺口；捕集废物或无法解释质量不作为直接排放。

- 采集对象：实际物质分辨的局部修整或清理直接排放
- 流属性/单位：Mass / kg
- 数量规则：实际独立有证据的 Q_release_complete / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_fate`
- 尚待核实的可选筛查提示：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：集合可能含含水干燥、打磨或挥发组分；宽筛不是化学排放因子，各实际排放须分别识别并有证据。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receive_condition` | 到货检查与环境调适 | required | 每项作业；动力调适/服务子流仅按实际发生 | 前景接收接口与调适责任 | 放行至定位的实际门洞和组件标识 |
| `position_fix` | 许可修切、定位与机械固定 | required | 每项作业；仅在需要且许可时切割 | 前景成形与装配责任 | 实际固定组件交接计数 |
| `complete_accept` | 五金、局部修整与交付验收 | required | 每项作业；各水/化学品/嵌缝/排放子流按实际操作 | 前景五金装配与表面修整责任 | N 个验收完工安装单元 |

即使由同一班组执行，三个节点仍承担独立验收责任。调适来料尚未适配修切；许可的门框/垫片切割产生改变的适配状态、边角料和可能的细粉。机械固定后的母体状态仍需锁具及局部修整验收。调适、成形、装配与修整是在这三个节点内相互区别的责任。

各节点按实际事件分类不合格状态：暂存未加工库存、暂存已安装在制品、内部返工、可用退回/对外交接或不可用废物。每次实际重复切割、重新紧固或修补均计入一次实际资源。只删除同一实物事件的重复记录。暂存单元返回责任节点时须关联状态/事件，不计为最终服务。内部返工采用成对交接/返回事件记录，不作为新购门或负服务交换。终止记录须明确每个暂存单元的去向及保留的作业负担。

下列 33 个非参考流范围为宽泛暂定 QA 筛查（`reasoned_estimate`）；参考卡单独采用严格计算的 1..1 数学归一化范围。每张卡给出各自理由，不主张供应商数量、产率、许可排放水平或有来源的事实边界。超出范围触发实际记录和范围审查；在范围内仍需实测。条件卡可展开为零、一或多个分别识别的实际交换。语义集合身份未决不允许绑定通用 UUID。

### 过程：到货检查与环境调适（`receive_condition`）

#### 输入

##### 产品流

###### 工厂已饰面室内预装木门与门框组件（`prehung_unit`）

单扇木门扇/门芯/门框配工厂合页；到货时所有要求的工厂饰面已验收；声明实际树种/门芯、门框系统、尺寸、开启方向、饰面与随附附件。 去向：检查及实际调适。条件：所述实物事件发生时记录。

数量方法：采用 receive_condition_gross 和 receive_condition_normalize 及 cp_receive_condition_material：实物毛领用 G_receive = S_open + R_received - S_close_intact_unissued；正向输入 G_receive / N，包括实际失败/重复领用。可用 U_return 和 X_transfer 为另列正向退出；诊断 G-U-X 绝不是第二交换或抵扣。

- 选定流：工厂已饰面室内预装木门与门框组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 单位组：Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：实际物理毛领用 G_receive / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_receive_condition_material`
- 数量范围：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：item
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：一套组件通常供一项安装，但损坏、更换和未用退出可增加毛领用；五为宽泛审查触发值，不是拒收率主张。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

###### 归属到货检查与环境调适的实际现场电力（`receive_condition_electricity`）

实际供应商/电网组合、电压、表计边界和服务期间；照明/工具/调适仅计入可归属且未包含于另计服务的部分。 去向：receive_condition 的实际用电操作。条件：实际发生可归属电耗；未发生时保留观察证实未发生的记录。

数量方法：采用 receive_condition_electricity_total 和 receive_condition_normalize：实际 E_receive / N。直接表计归属独立；仅非零合格剩余量需完整正数剩余权重。实测直接/主表差值及有记录的实际单位转换在 receive_condition_electricity_total 中连接 direct_energy_kWh/shared_energy_total_kWh，实际拓扑避免重叠。

- 选定流：归属到货检查与环境调适的实际现场电力
- 流属性/单位：Energy / kWh
- 数量规则：实际 E_receive / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_receive_condition_resources`
- 数量范围：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：便携工具用电可小，但场址调适/照明可跨期间；宽筛要求实际表计/服务覆盖，不用铭牌乘假定工作日。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 输出

##### 产品流

###### 未用完好工厂饰面预装门组件（`unused_door_return`）

离开本节点保管的未加工可用组件；区分供应商退回与外部续交，保留原组件标识。 去向：指定供应商或外部接收方。条件：实际未用可用组件离开到货节点保管。

数量方法：采用 receive_condition_usable_exit 和 receive_condition_normalize 及 cp_receive_condition_material：实际 U_return / N 与 X_transfer / N 为保留原输入身份/属性/单位的分别正向输出。两者均不计入期末库存；安装/返工负担留在作业。

- 选定流：未用完好工厂饰面预装门组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 单位组：Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：实际 Q_U_receive 或 Q_X_receive，各自分别 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_receive_condition_material`
- 数量范围：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：item
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：一次验收作业可退回多个未用备选；按实际毛输入和保管匹配件数，不假设废物转换。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

##### 废物流

### 过程：许可修切、定位与机械固定（`position_fix`）

#### 输入

##### 产品流

###### 实际门安装垫片（`shims`）

声明实际木材或聚合物垫片的材料/等级和尺寸，区分随附与单独购买。 去向：校正与固定。条件：所述实物事件发生时记录。

数量方法：采用 position_fix_gross 和 position_fix_normalize 及 cp_position_fix_material：实物毛领用 G_fix = S_open + R_received - S_close_intact_unissued；正向输入 G_fix / N，包括实际失败/重复领用。可用 U_return 和 X_transfer 为另列正向退出；诊断 G-U-X 绝不是第二交换或抵扣。

- 选定流：实际门安装垫片
- 流属性/单位：Mass / kg
- 数量规则：实际物理毛领用 G_fix / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_position_fix_material`
- 数量范围：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：局部垫片包和返工可能构成实质材料用量；十千克宽泛提示库存领用或单位错误，不猜测材料。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

###### 归属许可修切、定位与机械固定的实际现场电力（`position_fix_electricity`）

实际供应商/电网组合、电压、表计边界和服务期间；照明/工具/调适仅计入可归属且未包含于另计服务的部分。 去向：position_fix 的实际用电操作。条件：实际发生可归属电耗；未发生时保留观察证实未发生的记录。

数量方法：采用 position_fix_electricity_total 和 position_fix_normalize：实际 E_fix / N。直接表计归属独立；仅非零合格剩余量需完整正数剩余权重。实测直接/主表差值及有记录的实际单位转换在 position_fix_electricity_total 中连接 direct_energy_kWh/shared_energy_total_kWh，实际拓扑避免重叠。

- 选定流：归属许可修切、定位与机械固定的实际现场电力
- 流属性/单位：Energy / kWh
- 数量规则：实际 E_fix / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_position_fix_resources`
- 数量范围：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：便携工具用电可小，但场址调适/照明可跨期间；宽筛要求实际表计/服务覆盖，不用铭牌乘假定工作日。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：五金、局部修整与交付验收（`complete_accept`）

#### 输入

##### 产品流

###### 实际锁具五金组件（`lockset`）

声明实际兼容锁舌/锁具、把手和锁扣组件及组成/配置/供货范围；不含工厂合页。 去向：达到可启闭完工状态。条件：所述实物事件发生时记录。

数量方法：采用 complete_accept_gross 和 complete_accept_normalize 及 cp_complete_accept_material：实物毛领用 G_complete = S_open + R_received - S_close_intact_unissued；正向输入 G_complete / N，包括实际失败/重复领用。可用 U_return 和 X_transfer 为另列正向退出；诊断 G-U-X 绝不是第二交换或抵扣。

- 选定流：实际锁具五金组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 单位组：Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：实际物理毛领用 G_complete / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_material`
- 数量范围：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：item
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：一套完工单元通常需一套实际锁具配置，但失败或备件退回可增加毛领用；界限仅为暂定。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

###### 实际局部修整或清理供水（`completion_water`）

单独供水的实际来源和等级按条件声明，包括实测配混加水；配方内水仅按组分跟踪，不重复作为新供水输入。 去向：实际局部修整/清理。条件：实际局部修补、配混或清理使用单独供水。

数量方法：采用 complete_accept_gross 和 complete_accept_normalize 及 cp_complete_accept_material：实物毛领用 G_complete = S_open + R_received - S_close_intact_unissued；正向输入 G_complete / N，包括实际失败/重复领用。可用 U_return 和 X_transfer 为另列正向退出；诊断 G-U-X 绝不是第二交换或抵扣。

- 选定流：实际局部修整或清理供水
- 流属性/单位：Mass / kg
- 数量规则：实际物理毛领用 G_complete / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_material`
- 数量范围：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：用水取决于实际含水产品和清理方法；一百千克宽筛容纳清洗事件，并提示全场址用水误计。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

###### 归属五金、局部修整与交付验收的实际现场电力（`complete_accept_electricity`）

实际供应商/电网组合、电压、表计边界和服务期间；照明/工具/调适仅计入可归属且未包含于另计服务的部分。 去向：complete_accept 的实际用电操作。条件：实际发生可归属电耗；未发生时保留观察证实未发生的记录。

数量方法：采用 complete_accept_electricity_total 和 complete_accept_normalize：实际 E_complete / N。直接表计归属独立；仅非零合格剩余量需完整正数剩余权重。实测直接/主表差值及有记录的实际单位转换在 complete_accept_electricity_total 中连接 direct_energy_kWh/shared_energy_total_kWh，实际拓扑避免重叠。

- 选定流：归属五金、局部修整与交付验收的实际现场电力
- 流属性/单位：Energy / kWh
- 数量规则：实际 E_complete / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_resources`
- 数量范围：暂定 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 理由：便携工具用电可小，但场址调适/照明可跨期间；宽筛要求实际表计/服务覆盖，不用铭牌乘假定工作日。 仅为审查触发值，不是实测数量、有来源的事实区间、缺失记录替代值或接受限值。零值须有观察证实未发生，或明确未激活的条件。

#### 输出

##### 产品流

###### 室内预装框木门安装服务（`reference_service`）

在已接受完好门洞内完成一套单扇非防火室内木门，牢固、校正、启闭及指定锁具符合要求；实际孔洞/切面/接缝局部修整已完成、干燥并验收；清理交付完成。 去向：客户验收关口。条件：所述实物事件发生时记录。

数量方法：采用 accepted_n 和 reference_identity 及 cp_complete_accept_events：N 为唯一 accepted_ids 的验收计数；N/N = 1 item。

- 选定流：室内预装框木门安装服务
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 单位组：Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：1 item
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_complete_accept_events`
- 数量范围：严格验收计数归一化恒等关系
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：item
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`calculated_from_collection`
  - 理由：使用同一实际正数验收 N 的严格 N/N = 1 归一化恒等关系；它是数学关系，不是经验生产/成品率区间或外部来源主张。 需为正数完整验收 N；恒等式不提供拒收单元数量或有来源的成品率。

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `no_service_coproduct` | 本路线产出一项验收安装服务，不假设共产品。每个实际失败/重复事件的资源保留在作业内。废料、退回或暂存单元不产生避免生产/处置抵扣。 | |
| `unused_original_material` | 毛输入为期初完好库存加到货减期末完好未领用库存。未用可用供应商退回和对外交接在相同材料身份/属性/单位下分别为正向输出。仅在上游范围可追溯时，将其原未用材料上游负担归于这些实际退出；安装、调适、切割和返工留在作业。净消耗 G-R-X 仅为诊断/原材料归属，不是另一负交换或第二实物领用。 | |
| `shared_complete_set` | 直接分表计量直接归于实测使用者，不需共享分母。所有独立直接归属及提供方重叠处理后，核对期间 p 的共享电力/服务剩余 B。全部直接归属、剩余严格为零时不需共享分母。非零合格剩余量须涵盖全部合格剩余使用作业/节点，包括本作业外使用者，并有因果权重 w 证据；按 B 乘 w 除以完整正数合格权重和分配。未知/负剩余、缺使用者、零/未知和或权重无依据为分配缺口，需审查替代证据。不得静默将整个共享表归于本作业。 | |
| `service_overlap` | 租赁通行、工具、储存或调适可用性按实际提供方合同及付费有效/闲置时段。披露提供方数据集是否包括能源、资本设备、维护、配送/设置及撤离。各已含负担计一次；现场电力仅在真实不重叠表计/覆盖下另计。自有耐用工具需有证据的归属基准，不能每项安装全计一件新工具。 | |
| `period_bridge` | 跟踪同一可识别作业组跨全部报告期，验收时完成全作业归属。截止报告须按标识/状态桥接期初/期末未加工库存、未验收已安装在制品、共享服务承诺和未决缺陷；不得以虚构验收数归一化未完成工作。终止作业并入验收组前须有去向记录及明确负担处理。不采用通用寿命、工作日或年化因子。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

各协议属于一个真实节点及其实际操作/字段。稳定 ASCII 原始键为要求的前景记录列。重复材料、物种、使用者和事件记录按标识分开。`N` 仅在 complete_accept 按唯一完工验收标识计算。聚合字段采用“每参考流”；库存、交接、转换和归属细节保留在节点方法和明确计算规则。只有经核实支持定义时，单位别名 `item` 或 `item` 才保持件数维度。实际选择属性/表计路线所需字段须填入；未选替代路线字段明确不适用。原生 kg 池不需计数系数，直接称重的计数流也不需同时提供系数。缺所选路线必需原始数据或转换证据为缺口。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receive_condition_material` | `receive_condition` | 材料 | 节点负责的前景台账 | job_id; node_id; period_id; event_id; material_id; actual_unit; unit_alias; assembly_id; provider_id; S_open; R_received; S_close_intact_unissued; U_return; X_transfer; return_recipient; transfer_recipient; custody_time; bridge_item_count; bridge_net_mass_kg; bridge_same_ids; bridge_source; bridge_state; bridge_period; bridge_balance_pool_id | 在到货/调适节点按标识计数匹配的工厂饰面预装组件、期初完好库存、实际到货及期末完好未领用组件。实际可用供应商退回/对外交接单列接收方。需核对到货废弃组件质量时取得实际同标识称重桥。包装在 cp_receive_condition_fate 去除称重，不从门件数扣减。期末库存排除已退出单元及暂存调适/加工在制品。 需计数至质量守恒时取得实际同标识、同状态、同期间净质量证据；kg 每件为系数，物理流质量须件数乘该系数，或直接称量确切整条流。混合单元/配置/状态分开测量加和，不用单一平均值。桥接不改变外部件数交换。 | item; kg | 每次到货、领用、可用退出及报告截止 | 实际节点作业期间，至验收或披露截止/终止 | 实际作业/场址节点，必要时保留完整共享使用者证据 | 每参考流 | 实际组件计数/规格；工厂饰面到货证据；收据、库存/可用退出标识；真实接收方保管；必要时经校准同标识质量桥 |
| `cp_receive_condition_events` | `receive_condition` | 事件 | 节点负责的前景台账 | job_id; node_id; period_id; event_id; assembly_id; opening_id; transfer_id; state_before; state_after; received_count; released_count; opening_id_count; actual_start; actual_end; elapsed_h; actual_RH; actual_temperature; product_criteria; factory_finish_status; opening_geometry; opening_soundness; moisture_condition; defect_id; repeat_attempt_id; disposition; cutoff_wip_ids; termination_decision | 检查实际组件尺寸、开启方向、门芯/树种及工厂饰面，以及干燥完好兼容门洞几何。按所选产品条件记录真实湿度/温度/水分和实际保护/调适区间。通过 transfer_id 和 released_count 放行调适组件标识。记录到货缺陷、实际重复检查/调适、暂存库存/在制品及有记录的终止去向。本协议不采集固定或最终客户验收。 | item; 实际 h; 实际门洞尺寸/湿度/温度单位 | 每个实际事件/转移；环境监测按有证据的合适间隔 | 实际节点作业期间，至验收或披露截止/终止 | 实际作业/场址节点，必要时保留完整共享使用者证据 | 每参考流 | 实际产品/合同条件；有日期测量/环境记录；成对转移标识；签字；缺陷/在制品和终止登记 |
| `cp_receive_condition_resources` | `receive_condition` | 资源 | 节点负责的前景台账 | job_id; node_id; period_id; event_id; meter_id; provider_id; actual_voltage; energy_unit; meter_start; meter_end; energy_kWh_per_actual_unit; direct_energy_kWh; shared_energy_total_kWh; all_direct_energy_kWh; eligible_residual_energy_kWh; consumer_id; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; contract_id; bill_unit; bill_quantity; documented_hours_per_bill_unit; bill_start; bill_end; paid_idle_h; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; included_provider_scope; overlap_excluded_kWh; setup_owner; meter_record_id; meter_owner; meter_interval_start; meter_interval_end; meter_role; meter_topology; direct_submeter_ids; shared_master_id; master_includes_direct_ids; meter_scope; actual_conversion_evidence | 本节点采集实际到货区照明、动力储存/调适或租用调适/保护可用性。读取本节点实际表计/提供方期间及有记录的 kWh 转换。通过完整场外作业使用者登记区分直接实测归属与合格共享剩余。核对提供方能源/资本/设置覆盖；实际合同 bill_quantity 乘 documented_hours_per_bill_unit 得 h，包括付费闲置。全部直接归属且剩余为零不需权重；非零剩余需完整正数合格权重，未知/负剩余为缺口。识别每条表记录所有者、实际区间、覆盖和拓扑。meter_role 为 direct 时，差值乘有记录的实际单位至 kWh 因子供应 direct_energy_kWh；为 shared_master 时供应 shared_energy_total_kWh。包含在主表中的直接分表列于 master_includes_direct_ids，并通过 all_direct_energy_kWh 只扣一次。主表外直接记录不从该主表扣减；主表内直接记录不再计为剩余。各读数归属一次。缺拓扑或来源至总量连接为能量缺口。 | kWh; 实际计费 h | 每个表计区间及提供方/计费期间 | 实际节点作业期间，至验收或披露截止/终止 | 实际作业/场址节点，必要时保留完整共享使用者证据 | 每参考流 | 表计校准；提供方账单/合同；实际单位因子；完整使用者登记；因果权重；付费可用/闲置；提供方/现场重叠核对 |
| `cp_receive_condition_fate` | `receive_condition` | 去向 | 节点负责的前景台账 | job_id; node_id; period_id; event_id; material_id; assembly_id; custodian_id; transfer_id; waste_stream; gross_mass_kg; tare_mass_kg; incoming_transfer_mass_kg; outgoing_transfer_mass_kg; open_processed_wip_kg; close_processed_wip_kg; accepted_retained_kg; custody_time; balance_pool_id; stream_id; stream_pool_kind; stream_actual_unit; stream_item_count; stream_quantity_kg; stream_direct_net_mass_kg; stream_same_ids; stream_state; stream_period; stream_bridge_group; constituent_scope; composite_group_id | 到货/调适节点对实际来料包装/运输固定物和不可恢复来门材料分别按 waste_stream、material_id 去皮称重并记录实际接收方。可用完好门退回按本节点材料协议记录，不作废物。需要时以同标识质量桥核对调适组件交接状态和暂存加工/调适在制品，不将到货废物移至最终验收。 质量核对中各物理流给出互斥 stream_pool_kind 和 balance_pool_id。原生 kg 使用实际 kg；件数流只用实际同标识/当前状态实测 kg 或匹配实测每件 kg 系数乘件数。按标识/状态记录池质量，不把一个系数套至修切/装配后。缺桥只做件数核对，质量核对不完整。完整或已安装复合体按包含所有投入的已声明复合组计一次，或给出有证据组分拆分；不得把整个复合体再记在每个材料池。向外转移质量仅为唯一负责的真实内部交接、回节点/返工转移或另有记录的保管退出；与 U/X 可用输出、废物、期末在制品和最终验收留存互斥。客户最终接受的安装质量只在 accepted_retained，不再另计向外质量。opening_interface 为观察，排除于所有材料平衡。 | 按实际材料/物质 kg | 每次实际到货/调适废弃、交接及截止池测量 | 实际节点作业期间，至验收或披露截止/终止 | 实际作业/场址节点，必要时保留完整共享使用者证据 | 每参考流 | 实际到货节点校准毛/皮/净称重；包装/组件身份；需要时同标识门质量桥；真实接收票据；调适交接及暂存在制品核对 |
| `cp_position_fix_material` | `position_fix` | 材料 | 节点负责的前景台账 | job_id; node_id; period_id; event_id; material_id; actual_unit; unit_alias; assembly_id; provider_id; S_open; R_received; S_close_intact_unissued; U_return; X_transfer; return_recipient; transfer_recipient; custody_time; bridge_item_count; bridge_net_mass_kg; bridge_length_m; bridge_linear_mass_kg_per_m; bridge_same_ids; bridge_source; bridge_state; bridge_period; bridge_balance_pool_id | 在定位/固定节点分别称量从本节点库存和到货领用的实际垫片、紧固材料，核实材料/涂层/规格及随附附件范围。期末完好未领用库存与本节点可用退出分别记录。明确需要桥接时使用实际同标识件重，或实际长度和有证据的同材料线质量。已调适门接收件数归 cp_position_fix_events；工厂随附合页不作为第二新增紧固输入。 需计数至质量守恒时取得实际同标识、同状态、同期间净质量证据；kg 每件为系数，物理流质量须件数乘该系数，或直接称量确切整条流。混合单元/配置/状态分开测量加和，不用单一平均值。桥接不改变外部件数交换。 | item; kg; 实际桥接 m | 每次到货、领用、可用退出及报告截止 | 实际节点作业期间，至验收或披露截止/终止 | 实际作业/场址节点，必要时保留完整共享使用者证据 | 每参考流 | 实际垫片/紧固身份及称重库存/可用退出；涂层/规格；必要的实测件数/长度桥；校准与皮重；接收方保管 |
| `cp_position_fix_events` | `position_fix` | 事件 | 节点负责的前景台账 | job_id; node_id; period_id; event_id; assembly_id; opening_id; transfer_id; state_before; state_after; received_count; fixed_count; actual_start; actual_end; elapsed_h; product_criteria; actual_cut_length_m; permitted_cut_component; shim_material_id; fastener_material_id; alignment_results; defect_id; repeat_attempt_id; disposition; cutoff_wip_ids; termination_decision | 接收调适组件标识/transfer_id 和 received_count。记录每次实际许可门框/垫片修切的部件/尺寸、实际垫片/紧固身份、校正和固定结果及各真实重复切割/重新固定事件。通过 transfer_id 将机械固定标识/fixed_count 放行至完工。记录固定缺陷、暂存已安装在制品或拆除材料去向。本协议不采集初始工厂饰面或最终完工验收。 | item; 实际 h; 实际许可修切尺寸 | 每个实际事件/转移；环境监测按有证据的合适间隔 | 实际节点作业期间，至验收或披露截止/终止 | 实际作业/场址节点，必要时保留完整共享使用者证据 | 每参考流 | 实际产品/合同条件；有日期测量/环境记录；成对转移标识；签字；缺陷/在制品和终止登记 |
| `cp_position_fix_resources` | `position_fix` | 资源 | 节点负责的前景台账 | job_id; node_id; period_id; event_id; meter_id; provider_id; actual_voltage; energy_unit; meter_start; meter_end; energy_kWh_per_actual_unit; direct_energy_kWh; shared_energy_total_kWh; all_direct_energy_kWh; eligible_residual_energy_kWh; consumer_id; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; contract_id; bill_unit; bill_quantity; documented_hours_per_bill_unit; bill_start; bill_end; paid_idle_h; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; included_provider_scope; overlap_excluded_kWh; setup_owner; meter_record_id; meter_owner; meter_interval_start; meter_interval_end; meter_role; meter_topology; direct_submeter_ids; shared_master_id; master_includes_direct_ids; meter_scope; actual_conversion_evidence | 本节点采集实际动力许可切割、固定工具、区域照明或租用通行/工具可用性。读取本节点实际表计/提供方期间及有记录的 kWh 转换。通过完整场外作业使用者登记区分直接实测归属与合格共享剩余。核对提供方能源/资本/设置覆盖；实际合同 bill_quantity 乘 documented_hours_per_bill_unit 得 h，包括付费闲置。全部直接归属且剩余为零不需权重；非零剩余需完整正数合格权重，未知/负剩余为缺口。识别每条表记录所有者、实际区间、覆盖和拓扑。meter_role 为 direct 时，差值乘有记录的实际单位至 kWh 因子供应 direct_energy_kWh；为 shared_master 时供应 shared_energy_total_kWh。包含在主表中的直接分表列于 master_includes_direct_ids，并通过 all_direct_energy_kWh 只扣一次。主表外直接记录不从该主表扣减；主表内直接记录不再计为剩余。各读数归属一次。缺拓扑或来源至总量连接为能量缺口。 | kWh; 实际计费 h | 每个表计区间及提供方/计费期间 | 实际节点作业期间，至验收或披露截止/终止 | 实际作业/场址节点，必要时保留完整共享使用者证据 | 每参考流 | 表计校准；提供方账单/合同；实际单位因子；完整使用者登记；因果权重；付费可用/闲置；提供方/现场重叠核对 |
| `cp_position_fix_fate` | `position_fix` | 去向 | 节点负责的前景台账 | job_id; node_id; period_id; event_id; material_id; assembly_id; custodian_id; transfer_id; waste_stream; gross_mass_kg; tare_mass_kg; incoming_transfer_mass_kg; outgoing_transfer_mass_kg; open_processed_wip_kg; close_processed_wip_kg; accepted_retained_kg; custody_time; species_id; particle_fraction; receiving_medium; direct_mass_kg; emission_method; emission_method_inputs; detection_limit; uncertainty; balance_pool_id; stream_id; stream_pool_kind; stream_actual_unit; stream_item_count; stream_quantity_kg; stream_direct_net_mass_kg; stream_same_ids; stream_state; stream_period; stream_bridge_group; constituent_scope; composite_group_id | 定位/固定节点按 waste_stream、material_id 和皮重分别称量许可门框/垫片边料、捕集切割粉尘、不可用失败/拆除材料及实际附件包装。实际切割空气排放须独立实测/有证据，明确材料/物质、particle_fraction、receiving_medium、emission_method 输入和不确定性。捕集粉尘为互斥废物，不是空气排放。记录固定状态对外交接和暂存已安装在制品；可用固定材料退出仍为产品输出。 质量核对中各物理流给出互斥 stream_pool_kind 和 balance_pool_id。原生 kg 使用实际 kg；件数流只用实际同标识/当前状态实测 kg 或匹配实测每件 kg 系数乘件数。按标识/状态记录池质量，不把一个系数套至修切/装配后。缺桥只做件数核对，质量核对不完整。完整或已安装复合体按包含所有投入的已声明复合组计一次，或给出有证据组分拆分；不得把整个复合体再记在每个材料池。向外转移质量仅为唯一负责的真实内部交接、回节点/返工转移或另有记录的保管退出；与 U/X 可用输出、废物、期末在制品和最终验收留存互斥。客户最终接受的安装质量只在 accepted_retained，不再另计向外质量。opening_interface 为观察，排除于所有材料平衡。 | 按实际材料/物质 kg | 每次实际固体/液体废物或直接排放事件及截止池测量 | 实际节点作业期间，至验收或披露截止/终止 | 实际作业/场址节点，必要时保留完整共享使用者证据 | 每参考流 | 实际切割/固定阶段按木/聚合物/材料毛/皮/净称重；捕集记录；排放证实时的实际空气材料/粒径/介质/方法；接收票据；本节点暂存在制品核对 |
| `cp_complete_accept_material` | `complete_accept` | 材料 | 节点负责的前景台账 | job_id; node_id; period_id; event_id; material_id; actual_unit; unit_alias; assembly_id; provider_id; S_open; R_received; S_close_intact_unissued; U_return; X_transfer; return_recipient; transfer_recipient; custody_time; bridge_item_count; bridge_net_mass_kg; bridge_same_ids; bridge_source; water_fraction; separately_added_water_kg; bridge_state; bridge_period; bridge_balance_pool_id | 在完工节点按配置/标识计数实际另供锁具，称量实际填料、切面保护、补饰、所选分体门框嵌缝、磨料/保护/擦拭产品及单供水。取得实际配方 water_fraction 和 separately_added_water_kg，不重复同一水到货。期初/到货/期末完好未领用材料与已加工混合物/在制品、供应商退回及对外交接分开。实际未用新供水退出仍为本节点原 Mass 基准正向产品输出，不作废液。 需计数至质量守恒时取得实际同标识、同状态、同期间净质量证据；kg 每件为系数，物理流质量须件数乘该系数，或直接称量确切整条流。混合单元/配置/状态分开测量加和，不用单一平均值。桥接不改变外部件数交换。 | item; kg | 每次到货、领用、可用退出及报告截止 | 实际节点作业期间，至验收或披露截止/终止 | 实际作业/场址节点，必要时保留完整共享使用者证据 | 每参考流 | 实际锁具标识/件数；称量修补/保护/水库存和可用退出；配方水分；加水记录；原产品 Mass/Number 桥；真实接收方保管 |
| `cp_complete_accept_events` | `complete_accept` | 事件 | 节点负责的前景台账 | job_id; node_id; period_id; event_id; assembly_id; opening_id; transfer_id; state_before; state_after; received_count; accepted_ids; actual_start; actual_end; elapsed_h; product_criteria; lockset_configuration; operation_results; local_finish_scope; actual_dryness_result; split_jamb_joint_scope; defect_id; repeat_attempt_id; disposition; accepted_signer; cutoff_wip_ids; termination_decision | 接收实际机械固定组件标识/transfer_id 和 received_count。记录实际锁具配置/启闭结果、填孔打磨、露出切面/补饰处理、所选分体门框接缝及产品特定干燥结果。记录真实失败/重复完工事件。只有启闭、局部修整干燥和交付均签字接受的不同组件/门洞配对才进入 accepted_ids。未验收已安装在制品与终止去向分开。 | item; 实际 h; 实际产品特定干燥/启闭测量单位 | 每个实际事件/转移；环境监测按有证据的合适间隔 | 实际节点作业期间，至验收或披露截止/终止 | 实际作业/场址节点，必要时保留完整共享使用者证据 | 每参考流 | 实际产品/合同条件；有日期测量/环境记录；成对转移标识；签字；缺陷/在制品和终止登记 |
| `cp_complete_accept_resources` | `complete_accept` | 资源 | 节点负责的前景台账 | job_id; node_id; period_id; event_id; meter_id; provider_id; actual_voltage; energy_unit; meter_start; meter_end; energy_kWh_per_actual_unit; direct_energy_kWh; shared_energy_total_kWh; all_direct_energy_kWh; eligible_residual_energy_kWh; consumer_id; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; contract_id; bill_unit; bill_quantity; documented_hours_per_bill_unit; bill_start; bill_end; paid_idle_h; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; included_provider_scope; overlap_excluded_kWh; setup_owner; meter_record_id; meter_owner; meter_interval_start; meter_interval_end; meter_role; meter_topology; direct_submeter_ids; shared_master_id; master_includes_direct_ids; meter_scope; actual_conversion_evidence | 本节点采集实际局部打磨/修整/清理工具、局部干燥验收调适/照明或租用完工通行/工具可用性。读取本节点实际表计/提供方期间及有记录的 kWh 转换。通过完整场外作业使用者登记区分直接实测归属与合格共享剩余。核对提供方能源/资本/设置覆盖；实际合同 bill_quantity 乘 documented_hours_per_bill_unit 得 h，包括付费闲置。全部直接归属且剩余为零不需权重；非零剩余需完整正数合格权重，未知/负剩余为缺口。识别每条表记录所有者、实际区间、覆盖和拓扑。meter_role 为 direct 时，差值乘有记录的实际单位至 kWh 因子供应 direct_energy_kWh；为 shared_master 时供应 shared_energy_total_kWh。包含在主表中的直接分表列于 master_includes_direct_ids，并通过 all_direct_energy_kWh 只扣一次。主表外直接记录不从该主表扣减；主表内直接记录不再计为剩余。各读数归属一次。缺拓扑或来源至总量连接为能量缺口。 | kWh; 实际计费 h | 每个表计区间及提供方/计费期间 | 实际节点作业期间，至验收或披露截止/终止 | 实际作业/场址节点，必要时保留完整共享使用者证据 | 每参考流 | 表计校准；提供方账单/合同；实际单位因子；完整使用者登记；因果权重；付费可用/闲置；提供方/现场重叠核对 |
| `cp_complete_accept_fate` | `complete_accept` | 去向 | 节点负责的前景台账 | job_id; node_id; period_id; event_id; material_id; assembly_id; custodian_id; transfer_id; waste_stream; gross_mass_kg; tare_mass_kg; incoming_transfer_mass_kg; outgoing_transfer_mass_kg; open_processed_wip_kg; close_processed_wip_kg; accepted_retained_kg; custody_time; water_fraction; species_id; particle_fraction; receiving_medium; direct_mass_kg; emission_method; emission_method_inputs; detection_limit; uncertainty; water_open_processed_wip_kg; water_close_processed_wip_kg; water_accepted_retained_kg; water_usable_return_kg; water_external_transfer_kg; water_solid_waste_kg; water_liquid_waste_kg; water_direct_measured_kg; balance_pool_id; stream_id; stream_pool_kind; stream_actual_unit; stream_item_count; stream_quantity_kg; stream_direct_net_mass_kg; stream_same_ids; stream_state; stream_period; stream_bridge_group; constituent_scope; composite_group_id | 完工节点称量实际局部饰面残余、捕集打磨细粉、用后磨料/擦拭物/保护物及附件包装；按 waste_stream 区分不可用五金/门拒收和收集清理废液。测量实际水分/组分和去皮净重。按毛领用水基底核对验收留存水、已加工已安装期末在制品、可用新供水/配方退回或对外交接、湿固废、收集液体及独立有证据的蒸气/直接排放。未领用期末水已从毛领用排除。任何直接修整/打磨/清理排放需实际物种/粒径、接收介质、方法和不确定性；未知余额为缺口。 质量核对中各物理流给出互斥 stream_pool_kind 和 balance_pool_id。原生 kg 使用实际 kg；件数流只用实际同标识/当前状态实测 kg 或匹配实测每件 kg 系数乘件数。按标识/状态记录池质量，不把一个系数套至修切/装配后。缺桥只做件数核对，质量核对不完整。完整或已安装复合体按包含所有投入的已声明复合组计一次，或给出有证据组分拆分；不得把整个复合体再记在每个材料池。向外转移质量仅为唯一负责的真实内部交接、回节点/返工转移或另有记录的保管退出；与 U/X 可用输出、废物、期末在制品和最终验收留存互斥。客户最终接受的安装质量只在 accepted_retained，不再另计向外质量。opening_interface 为观察，排除于所有材料平衡。 | 按实际材料/物质 kg | 每次实际固体/液体废物或直接排放事件及截止池测量 | 实际节点作业期间，至验收或披露截止/终止 | 实际作业/场址节点，必要时保留完整共享使用者证据 | 每参考流 | 毛/皮/净测量；实际湿/干/组分比例；接收票据；直接排放方法与介质；不确定性；节点特定核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_n` | reference_service | N = 所声明同质完整作业组中启闭、局部修整干燥和交付均通过的不同 accepted_ids 数量；N 须为正数。同一验收组件/门洞配对计一次。 | cp_complete_accept_events; accepted_ids; accepted_signer; product_criteria | N | |
| `reference_identity` | reference_service | Q_reference = N；q_reference = N / N = 1 item。仅为数学归一化。 | cp_complete_accept_events; accepted_ids; N; accepted_n | q_reference | |
| `receive_condition_gross` | receive_condition 外部材料输入 | 逐 material_id 和 actual_unit：G_receive = S_open + R_received - S_close_intact_unissued。未用可用 U_return 和 X_transfer 在单列正向输出前仍包含于 G。G 为负或库存/在制品/退回记录重叠为缺口。 | cp_receive_condition_material; material_id; actual_unit; S_open; R_received; S_close_intact_unissued | G_receive | |
| `receive_condition_usable_exit` | receive_condition 未用产品退出 | 逐不变输入身份/单位：Q_U_receive = U_return；Q_X_receive = X_transfer，分别为正向交换。诊断 C_receive = G_receive - U_return - X_transfer 不是实物交换或抵扣。U 和 X 均不在期末库存。 | cp_receive_condition_material; material_id; actual_unit; U_return; X_transfer; return_recipient; transfer_recipient; G_receive | Q_U_receive; Q_X_receive; diagnostic_C_receive | |
| `receive_condition_bridge` | receive_condition 需要时的实测属性桥 | 逐确切 bridge_same_ids、bridge_state、bridge_period 和 bridge_balance_pool_id：k_kg_per_item_receive = bridge_net_mass_kg / 正数 bridge_item_count，单位 kg/item。输出为实测系数，不是物理质量。混配置或改变修切/装配状态须分别同标识测量，不用通用系数/密度。缺实际同标识/状态证据或正数件数则系数不可用。外部门/锁具计数交换仍为 item。 | cp_receive_condition_material; bridge_same_ids; bridge_state; bridge_period; bridge_balance_pool_id; bridge_item_count; bridge_net_mass_kg; bridge_source | k_kg_per_item_receive | |
| `receive_condition_event_counts` | receive_condition 接口/内部状态行 | 只使用匹配本节点行/转移/状态的实际 opening_id_count、received_count、released_count；按 transfer_id 和 assembly_id 配对，真实重复事件保留不同事件标识。内部输入不固定为一。 | cp_receive_condition_events; opening_id_count; received_count; released_count; transfer_id; assembly_id; state_before; state_after; event_id; repeat_attempt_id | Q_event_receive | |
| `receive_condition_waste_net` | receive_condition 废物行 | Q_waste_receive = 实际 waste_stream/material_id 的 sum(gross_mass_kg - tare_mass_kg)；各事件/接收方匹配一次。不同废物流互斥，记录实际材料状态。 | cp_receive_condition_fate; material_id; event_id; waste_stream; gross_mass_kg; tare_mass_kg; custodian_id | Q_waste_receive | |
| `receive_condition_electricity_total` | receive_condition_electricity | 逐唯一 meter_record_id/所有者/实际区间：E_meter_receive = (meter_end - meter_start) * energy_kWh_per_actual_unit，采用 actual_conversion_evidence。direct_energy_kWh = 分配给本节点/作业的实际直接表记录 E_meter_receive 之和。shared_energy_total_kWh 为匹配区间/范围实际 shared_master 的 E_meter_receive，或可证明互不重叠主表之和。通过 meter_topology 核对确切标识/区间/范围。主表内所有使用者实际直接读数在 all_direct_energy_kWh 只求和一次；主表外直接读数不从它扣减。合格剩余 B_E = shared_energy_total_kWh - all_direct_energy_kWh - overlap_excluded_kWh，须与 eligible_residual_energy_kWh 核对。完全核实、严格为零的剩余不需共享分母。正剩余仅使用完整合格剩余使用者/权重，E_shared = B_E * eligible_weight / sum(all_eligible_weights)，权重和须为正且有证据。未知/负剩余、缺表计来源连接/拓扑或非零剩余缺权重为缺口。E_receive = direct_energy_kWh + E_shared；已包含于主表的直接读数从剩余扣除一次而非重复收费。提供方/现场重叠覆盖排除一次。 | cp_receive_condition_resources; meter_record_id; meter_owner; meter_interval_start; meter_interval_end; meter_role; meter_topology; direct_submeter_ids; shared_master_id; master_includes_direct_ids; meter_scope; actual_conversion_evidence; meter_start; meter_end; energy_unit; energy_kWh_per_actual_unit; direct_energy_kWh; shared_energy_total_kWh; all_direct_energy_kWh; overlap_excluded_kWh; eligible_residual_energy_kWh; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope | E_receive | |
| `receive_condition_service_total` | receive_condition_shared_service | H_contract_receive = bill_quantity * documented_hours_per_bill_unit，来自实际账单/合同覆盖；bill_start/bill_end 和 paid_idle_h 核对可用性。计费日使用有记录的实际小时长度，绝不默认八小时班次。同一实际提供方期间 total_service_h 须核对 H_contract，明确覆盖/重叠；无法解释的差值为缺口。提供方重叠审查后 B_H = total_service_h - all_direct_service_h 须核对 eligible_residual_service_h。完全核实 B_H = 0 不需权重。B_H > 0 时，按完整合格使用者及正数有证据权重和，H_shared = B_H * eligible_weight / sum(all_eligible_weights)。未知/负剩余或非零剩余缺分母为缺口。H_receive = direct_service_h + H_shared。合同单位不能有证据转 h 时保留单位/转换缺口，不虚构时长。 | cp_receive_condition_resources; contract_id; bill_unit; bill_quantity; documented_hours_per_bill_unit; bill_start; bill_end; paid_idle_h; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope | H_receive | |
| `receive_condition_processed_balance` | receive_condition 节点物理平衡 | 在一致 balance_pool_id 内只使用 receive_condition_stream_mass 的物理 kg 输出：G_mass_kg_receive + incoming_mass_kg_receive + open_wip_mass_kg_receive = outgoing_transfer_mass_kg_receive + accepted_retained_mass_kg_receive + close_wip_mass_kg_receive + U_mass_kg_receive + X_mass_kg_receive + 实际净废物 Q_waste_receive。原生件数或 kg 每件系数不直接进入等式。G 已排除完好未领用期末库存，不重复扣减。各标识/当前状态只属于一个互斥池。向外质量仅为实际节点交接/返工或另有记录保管转移，不能再计已包含留存的最终安装质量，亦不重复 U/X 或废物退出。客户最终验收时安装质量只为 accepted_retained。排除 opening_interface。缺确切桥/组分证据时报告质量平衡缺口，仅做另标件数核对，不混加异单位。复合输出应将所有贡献输入质量纳入一个有证据复合组，或用实际组分拆分，不能在多个部件平衡中重复整个复合体。支持的池核对后差值为缺口。 | cp_receive_condition_material; cp_receive_condition_events; cp_receive_condition_fate; balance_pool_id; stream_pool_kind; stream_same_ids; constituent_scope; composite_group_id; G_mass_kg_receive; incoming_mass_kg_receive; open_wip_mass_kg_receive; outgoing_transfer_mass_kg_receive; accepted_retained_mass_kg_receive; close_wip_mass_kg_receive; U_mass_kg_receive; X_mass_kg_receive; Q_waste_receive | balance_gap_receive | |
| `receive_condition_normalize` | receive_condition 所属全部清单行 | q_row = 实际适用 Q_node / N；Q_node 为本行在完整同质作业组中的相应原始计数、材料 G、正向 U/X、净废物、E 或 H 总量。N 来自实际 accepted_n。不能从参考一推定输出量。 | cp_receive_condition_material; cp_receive_condition_events; cp_receive_condition_resources; cp_receive_condition_fate; cp_complete_accept_events; N; G_receive; Q_U_receive; Q_X_receive; Q_event_receive; Q_waste_receive; E_receive; H_receive | q_row_receive | |
| `receive_condition_period_bridge` | receive_condition 期间/在制品归属 | 期末完好库存及已加工/已安装在制品按匹配材料/组件标识滚入下期期初，不重复购买或登记实物输入。真实各期事件/资源只发生一次。最终作业归一化等待正数 N 或明确审查的终止处理。 | cp_receive_condition_material; cp_receive_condition_events; cp_receive_condition_resources; cp_receive_condition_fate; period_id; event_id; assembly_id; material_id; S_close_intact_unissued; cutoff_wip_ids; close_processed_wip_kg; termination_decision | whole_job_totals_receive | |
| `position_fix_gross` | position_fix 外部材料输入 | 逐 material_id 和 actual_unit：G_fix = S_open + R_received - S_close_intact_unissued。未用可用 U_return 和 X_transfer 在单列正向输出前仍包含于 G。G 为负或库存/在制品/退回记录重叠为缺口。 | cp_position_fix_material; material_id; actual_unit; S_open; R_received; S_close_intact_unissued | G_fix | |
| `position_fix_usable_exit` | position_fix 未用产品退出 | 逐不变输入身份/单位：Q_U_fix = U_return；Q_X_fix = X_transfer，分别为正向交换。诊断 C_fix = G_fix - U_return - X_transfer 不是实物交换或抵扣。U 和 X 均不在期末库存。 | cp_position_fix_material; material_id; actual_unit; U_return; X_transfer; return_recipient; transfer_recipient; G_fix | Q_U_fix; Q_X_fix; diagnostic_C_fix | |
| `position_fix_bridge` | position_fix 需要时的实测属性桥 | 逐确切 bridge_same_ids、bridge_state、bridge_period 和 bridge_balance_pool_id：k_kg_per_item_fix = bridge_net_mass_kg / 正数 bridge_item_count，单位 kg/item。输出为实测系数，不是物理质量。混配置或改变修切/装配状态须分别同标识测量，不用通用系数/密度。缺实际同标识/状态证据或正数件数则系数不可用。外部门/锁具计数交换仍为 item。 | cp_position_fix_material; bridge_same_ids; bridge_state; bridge_period; bridge_balance_pool_id; bridge_item_count; bridge_net_mass_kg; bridge_source | k_kg_per_item_fix | |
| `position_fix_event_counts` | position_fix 接口/内部状态行 | 只使用匹配本节点行/转移/状态的实际 received_count、fixed_count；按 transfer_id 和 assembly_id 配对，真实重复事件保留不同事件标识。内部输入不固定为一。 | cp_position_fix_events; received_count; fixed_count; transfer_id; assembly_id; state_before; state_after; event_id; repeat_attempt_id | Q_event_fix | |
| `position_fix_waste_net` | position_fix 废物行 | Q_waste_fix = 实际 waste_stream/material_id 的 sum(gross_mass_kg - tare_mass_kg)；各事件/接收方匹配一次。不同废物流互斥，记录实际材料状态。 | cp_position_fix_fate; material_id; event_id; waste_stream; gross_mass_kg; tare_mass_kg; custodian_id | Q_waste_fix | |
| `position_fix_direct_release` | position_fix 基本排放行 | Q_release_fix = 按 species_id/particle_fraction/receiving_medium 汇总独立实测 direct_mass_kg，或由有证据的 emission_method 及 emission_method_inputs 明确推得的实际数量。缺物质/介质/数量依据为缺口。排除捕集废物；无法解释的平衡不是排放。 | cp_position_fix_fate; species_id; particle_fraction; receiving_medium; direct_mass_kg; emission_method; emission_method_inputs; detection_limit; uncertainty | Q_release_fix | |
| `position_fix_electricity_total` | position_fix_electricity | 逐唯一 meter_record_id/所有者/实际区间：E_meter_fix = (meter_end - meter_start) * energy_kWh_per_actual_unit，采用 actual_conversion_evidence。direct_energy_kWh = 分配给本节点/作业的实际直接表记录 E_meter_fix 之和。shared_energy_total_kWh 为匹配区间/范围实际 shared_master 的 E_meter_fix，或可证明互不重叠主表之和。通过 meter_topology 核对确切标识/区间/范围。主表内所有使用者实际直接读数在 all_direct_energy_kWh 只求和一次；主表外直接读数不从它扣减。合格剩余 B_E = shared_energy_total_kWh - all_direct_energy_kWh - overlap_excluded_kWh，须与 eligible_residual_energy_kWh 核对。完全核实、严格为零的剩余不需共享分母。正剩余仅使用完整合格剩余使用者/权重，E_shared = B_E * eligible_weight / sum(all_eligible_weights)，权重和须为正且有证据。未知/负剩余、缺表计来源连接/拓扑或非零剩余缺权重为缺口。E_fix = direct_energy_kWh + E_shared；已包含于主表的直接读数从剩余扣除一次而非重复收费。提供方/现场重叠覆盖排除一次。 | cp_position_fix_resources; meter_record_id; meter_owner; meter_interval_start; meter_interval_end; meter_role; meter_topology; direct_submeter_ids; shared_master_id; master_includes_direct_ids; meter_scope; actual_conversion_evidence; meter_start; meter_end; energy_unit; energy_kWh_per_actual_unit; direct_energy_kWh; shared_energy_total_kWh; all_direct_energy_kWh; overlap_excluded_kWh; eligible_residual_energy_kWh; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope | E_fix | |
| `position_fix_service_total` | position_fix_shared_service | H_contract_fix = bill_quantity * documented_hours_per_bill_unit，来自实际账单/合同覆盖；bill_start/bill_end 和 paid_idle_h 核对可用性。计费日使用有记录的实际小时长度，绝不默认八小时班次。同一实际提供方期间 total_service_h 须核对 H_contract，明确覆盖/重叠；无法解释的差值为缺口。提供方重叠审查后 B_H = total_service_h - all_direct_service_h 须核对 eligible_residual_service_h。完全核实 B_H = 0 不需权重。B_H > 0 时，按完整合格使用者及正数有证据权重和，H_shared = B_H * eligible_weight / sum(all_eligible_weights)。未知/负剩余或非零剩余缺分母为缺口。H_fix = direct_service_h + H_shared。合同单位不能有证据转 h 时保留单位/转换缺口，不虚构时长。 | cp_position_fix_resources; contract_id; bill_unit; bill_quantity; documented_hours_per_bill_unit; bill_start; bill_end; paid_idle_h; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope | H_fix | |
| `position_fix_processed_balance` | position_fix 节点物理平衡 | 在一致 balance_pool_id 内只使用 position_fix_stream_mass 的物理 kg 输出：G_mass_kg_fix + incoming_mass_kg_fix + open_wip_mass_kg_fix = outgoing_transfer_mass_kg_fix + accepted_retained_mass_kg_fix + close_wip_mass_kg_fix + U_mass_kg_fix + X_mass_kg_fix + 实际净废物 Q_waste_fix + 独立有依据直接排放 Q_release_fix。原生件数或 kg 每件系数不直接进入等式。G 已排除完好未领用期末库存，不重复扣减。各标识/当前状态只属于一个互斥池。向外质量仅为实际节点交接/返工或另有记录保管转移，不能再计已包含留存的最终安装质量，亦不重复 U/X 或废物退出。客户最终验收时安装质量只为 accepted_retained。排除 opening_interface。缺确切桥/组分证据时报告质量平衡缺口，仅做另标件数核对，不混加异单位。复合输出应将所有贡献输入质量纳入一个有证据复合组，或用实际组分拆分，不能在多个部件平衡中重复整个复合体。支持的池核对后差值为缺口。 | cp_position_fix_material; cp_position_fix_events; cp_position_fix_fate; balance_pool_id; stream_pool_kind; stream_same_ids; constituent_scope; composite_group_id; G_mass_kg_fix; incoming_mass_kg_fix; open_wip_mass_kg_fix; outgoing_transfer_mass_kg_fix; accepted_retained_mass_kg_fix; close_wip_mass_kg_fix; U_mass_kg_fix; X_mass_kg_fix; Q_waste_fix; Q_release_fix | balance_gap_fix | |
| `position_fix_normalize` | position_fix 所属全部清单行 | q_row = 实际适用 Q_node / N；Q_node 为本行在完整同质作业组中的相应原始计数、材料 G、正向 U/X、净废物、独立有证据排放、E 或 H 总量。N 来自实际 accepted_n。不能从参考一推定输出量。 | cp_position_fix_material; cp_position_fix_events; cp_position_fix_resources; cp_position_fix_fate; cp_complete_accept_events; N; G_fix; Q_U_fix; Q_X_fix; Q_event_fix; Q_waste_fix; Q_release_fix; E_fix; H_fix | q_row_fix | |
| `position_fix_period_bridge` | position_fix 期间/在制品归属 | 期末完好库存及已加工/已安装在制品按匹配材料/组件标识滚入下期期初，不重复购买或登记实物输入。真实各期事件/资源只发生一次。最终作业归一化等待正数 N 或明确审查的终止处理。 | cp_position_fix_material; cp_position_fix_events; cp_position_fix_resources; cp_position_fix_fate; period_id; event_id; assembly_id; material_id; S_close_intact_unissued; cutoff_wip_ids; close_processed_wip_kg; termination_decision | whole_job_totals_fix | |
| `complete_accept_gross` | complete_accept 外部材料输入 | 逐 material_id 和 actual_unit：G_complete = S_open + R_received - S_close_intact_unissued。未用可用 U_return 和 X_transfer 在单列正向输出前仍包含于 G。G 为负或库存/在制品/退回记录重叠为缺口。 | cp_complete_accept_material; material_id; actual_unit; S_open; R_received; S_close_intact_unissued | G_complete | |
| `complete_accept_usable_exit` | complete_accept 未用产品退出 | 逐不变输入身份/单位：Q_U_complete = U_return；Q_X_complete = X_transfer，分别为正向交换。诊断 C_complete = G_complete - U_return - X_transfer 不是实物交换或抵扣。U 和 X 均不在期末库存。 | cp_complete_accept_material; material_id; actual_unit; U_return; X_transfer; return_recipient; transfer_recipient; G_complete | Q_U_complete; Q_X_complete; diagnostic_C_complete | |
| `complete_accept_bridge` | complete_accept 需要时的实测属性桥 | 逐确切 bridge_same_ids、bridge_state、bridge_period 和 bridge_balance_pool_id：k_kg_per_item_complete = bridge_net_mass_kg / 正数 bridge_item_count，单位 kg/item。输出为实测系数，不是物理质量。混配置或改变修切/装配状态须分别同标识测量，不用通用系数/密度。缺实际同标识/状态证据或正数件数则系数不可用。外部门/锁具计数交换仍为 item。 | cp_complete_accept_material; bridge_same_ids; bridge_state; bridge_period; bridge_balance_pool_id; bridge_item_count; bridge_net_mass_kg; bridge_source | k_kg_per_item_complete | |
| `complete_accept_event_counts` | complete_accept 接口/内部状态行 | 只使用匹配本节点行/转移/状态的实际 received_count；按 transfer_id 和 assembly_id 配对，真实重复事件保留不同事件标识。内部输入不固定为一。 | cp_complete_accept_events; received_count; transfer_id; assembly_id; state_before; state_after; event_id; repeat_attempt_id | Q_event_complete | |
| `complete_accept_waste_net` | complete_accept 废物行 | Q_waste_complete = 实际 waste_stream/material_id 的 sum(gross_mass_kg - tare_mass_kg)；各事件/接收方匹配一次。水量为实际废物净重乘实测 water_fraction，不与直接排放池重叠。 | cp_complete_accept_fate; material_id; event_id; waste_stream; gross_mass_kg; tare_mass_kg; water_fraction; custodian_id | Q_waste_complete; water_in_waste_complete | |
| `complete_accept_direct_release` | complete_accept 基本排放行 | Q_release_complete = 按 species_id/particle_fraction/receiving_medium 汇总独立实测 direct_mass_kg，或由有证据的 emission_method 及 emission_method_inputs 明确推得的实际数量。缺物质/介质/数量依据为缺口。排除捕集废物；无法解释的平衡不是排放。 | cp_complete_accept_fate; species_id; particle_fraction; receiving_medium; direct_mass_kg; emission_method; emission_method_inputs; detection_limit; uncertainty | Q_release_complete | |
| `complete_accept_electricity_total` | complete_accept_electricity | 逐唯一 meter_record_id/所有者/实际区间：E_meter_complete = (meter_end - meter_start) * energy_kWh_per_actual_unit，采用 actual_conversion_evidence。direct_energy_kWh = 分配给本节点/作业的实际直接表记录 E_meter_complete 之和。shared_energy_total_kWh 为匹配区间/范围实际 shared_master 的 E_meter_complete，或可证明互不重叠主表之和。通过 meter_topology 核对确切标识/区间/范围。主表内所有使用者实际直接读数在 all_direct_energy_kWh 只求和一次；主表外直接读数不从它扣减。合格剩余 B_E = shared_energy_total_kWh - all_direct_energy_kWh - overlap_excluded_kWh，须与 eligible_residual_energy_kWh 核对。完全核实、严格为零的剩余不需共享分母。正剩余仅使用完整合格剩余使用者/权重，E_shared = B_E * eligible_weight / sum(all_eligible_weights)，权重和须为正且有证据。未知/负剩余、缺表计来源连接/拓扑或非零剩余缺权重为缺口。E_complete = direct_energy_kWh + E_shared；已包含于主表的直接读数从剩余扣除一次而非重复收费。提供方/现场重叠覆盖排除一次。 | cp_complete_accept_resources; meter_record_id; meter_owner; meter_interval_start; meter_interval_end; meter_role; meter_topology; direct_submeter_ids; shared_master_id; master_includes_direct_ids; meter_scope; actual_conversion_evidence; meter_start; meter_end; energy_unit; energy_kWh_per_actual_unit; direct_energy_kWh; shared_energy_total_kWh; all_direct_energy_kWh; overlap_excluded_kWh; eligible_residual_energy_kWh; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope | E_complete | |
| `complete_accept_service_total` | complete_accept_shared_service | H_contract_complete = bill_quantity * documented_hours_per_bill_unit，来自实际账单/合同覆盖；bill_start/bill_end 和 paid_idle_h 核对可用性。计费日使用有记录的实际小时长度，绝不默认八小时班次。同一实际提供方期间 total_service_h 须核对 H_contract，明确覆盖/重叠；无法解释的差值为缺口。提供方重叠审查后 B_H = total_service_h - all_direct_service_h 须核对 eligible_residual_service_h。完全核实 B_H = 0 不需权重。B_H > 0 时，按完整合格使用者及正数有证据权重和，H_shared = B_H * eligible_weight / sum(all_eligible_weights)。未知/负剩余或非零剩余缺分母为缺口。H_complete = direct_service_h + H_shared。合同单位不能有证据转 h 时保留单位/转换缺口，不虚构时长。 | cp_complete_accept_resources; contract_id; bill_unit; bill_quantity; documented_hours_per_bill_unit; bill_start; bill_end; paid_idle_h; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; all_consumer_ids; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope | H_complete | |
| `complete_accept_processed_balance` | complete_accept 节点物理平衡 | 在一致 balance_pool_id 内只使用 complete_accept_stream_mass 的物理 kg 输出：G_mass_kg_complete + incoming_mass_kg_complete + open_wip_mass_kg_complete = outgoing_transfer_mass_kg_complete + accepted_retained_mass_kg_complete + close_wip_mass_kg_complete + U_mass_kg_complete + X_mass_kg_complete + 实际净废物 Q_waste_complete + 独立有依据直接排放 Q_release_complete。原生件数或 kg 每件系数不直接进入等式。G 已排除完好未领用期末库存，不重复扣减。各标识/当前状态只属于一个互斥池。向外质量仅为实际节点交接/返工或另有记录保管转移，不能再计已包含留存的最终安装质量，亦不重复 U/X 或废物退出。客户最终验收时安装质量只为 accepted_retained。排除 opening_interface。缺确切桥/组分证据时报告质量平衡缺口，仅做另标件数核对，不混加异单位。复合输出应将所有贡献输入质量纳入一个有证据复合组，或用实际组分拆分，不能在多个部件平衡中重复整个复合体。支持的池核对后差值为缺口。 | cp_complete_accept_material; cp_complete_accept_events; cp_complete_accept_fate; balance_pool_id; stream_pool_kind; stream_same_ids; constituent_scope; composite_group_id; G_mass_kg_complete; incoming_mass_kg_complete; open_wip_mass_kg_complete; outgoing_transfer_mass_kg_complete; accepted_retained_mass_kg_complete; close_wip_mass_kg_complete; U_mass_kg_complete; X_mass_kg_complete; Q_waste_complete; Q_release_complete | balance_gap_complete | |
| `complete_accept_normalize` | complete_accept 所属全部清单行 | q_row = 实际适用 Q_node / N；Q_node 为本行在完整同质作业组中的相应原始计数、材料 G、正向 U/X、净废物、独立有证据排放、E 或 H 总量。N 来自实际 accepted_n。不能从参考一推定输出量。 | cp_complete_accept_material; cp_complete_accept_events; cp_complete_accept_resources; cp_complete_accept_fate; N; G_complete; Q_U_complete; Q_X_complete; Q_event_complete; Q_waste_complete; Q_release_complete; E_complete; H_complete | q_row_complete | |
| `complete_accept_period_bridge` | complete_accept 期间/在制品归属 | 期末完好库存及已加工/已安装在制品按匹配材料/组件标识滚入下期期初，不重复购买或登记实物输入。真实各期事件/资源只发生一次。最终作业归一化等待正数 N 或明确审查的终止处理。 | cp_complete_accept_material; cp_complete_accept_events; cp_complete_accept_resources; cp_complete_accept_fate; period_id; event_id; assembly_id; material_id; S_close_intact_unissued; cutoff_wip_ids; close_processed_wip_kg; termination_decision | whole_job_totals_complete | |
| `complete_water_fate` | completion_water; local_repair_materials; unused_completion_material_return; repair_waste; completion_wastewater; complete_accept_other_releases | 只采用毛领用基底：W_G = 各配方的 G_complete * 实际 water_fraction 之和 + 单供新水的 G_complete，所有项均为 kg 水且不重复 separately_added_water_kg。W_available = W_G + water_open_processed_wip_kg。核对互斥的 water_accepted_retained_kg + water_close_processed_wip_kg + water_usable_return_kg + water_external_transfer_kg + water_solid_waste_kg + water_liquid_waste_kg + water_direct_measured_kg。完好未领用期末水/配方已从 G_complete 排除，不得再次扣减。未加工可用新水/配方退回和对外交接仍为 complete_accept 原产品 Mass 基准分别正向输出。实际蒸气/直接排放水须独立实测/有证据，不从余额赋值；差值为 water_gap。对相关非水配方组分重复实际组分核对，不虚构通用污染物身份。 | cp_complete_accept_material; cp_complete_accept_events; cp_complete_accept_fate; G_complete; water_fraction; separately_added_water_kg; water_open_processed_wip_kg; water_accepted_retained_kg; water_close_processed_wip_kg; water_usable_return_kg; water_external_transfer_kg; water_solid_waste_kg; water_liquid_waste_kg; water_direct_measured_kg | water_gap; separately_supported_water_direct_release | |
| `receive_condition_stream_mass` | receive_condition 各实际物理库存/可用/内部/在制品/验收池 | 逐 stream_id、实际 stream_pool_kind、匹配 stream_same_ids/状态/期间和 balance_pool_id：stream_actual_unit 为 kg 时，m_stream_kg = stream_quantity_kg；为 Number/item 时，使用确切同一流标识/当前状态经校准 stream_direct_net_mass_kg，或按同质同标识实测组汇总 stream_item_count * k_kg_per_item_receive。直接称重与系数路线为替代方案，不叠加。混合标识/状态流需分实测组或直接称量该确切混合流。原生毛领用/可用/内部/在制品件数与实际台账标识核对，保留外部 item。各物理质量按互斥 stream_pool_kind 只分配一次至 G_mass_kg_receive、U_mass_kg_receive、X_mass_kg_receive、incoming_mass_kg_receive、outgoing_transfer_mass_kg_receive、open_wip_mass_kg_receive、close_wip_mass_kg_receive 或 accepted_retained_mass_kg_receive。G/U/X 流件数须核对原生 G_receive、U_return 和 X_transfer。内部/已安装池件数核对节点事件和实际标识。最终验收安装质量为留存，不是客户交付向外质量。opening_interface 不进入池。缺实际同标识/当前状态称重证据为质量缺口；件数核对单列。需要时的原生长度须在 position_fix 单独长度质量计算，不能插入件数系数路线。 | cp_receive_condition_material; cp_receive_condition_events; cp_receive_condition_fate; G_receive; U_return; X_transfer; bridge_same_ids; bridge_state; bridge_period; k_kg_per_item_receive; balance_pool_id; stream_id; stream_pool_kind; stream_actual_unit; stream_item_count; stream_quantity_kg; stream_direct_net_mass_kg; stream_same_ids; stream_state; stream_period; stream_bridge_group; constituent_scope; composite_group_id | G_mass_kg_receive; U_mass_kg_receive; X_mass_kg_receive; incoming_mass_kg_receive; outgoing_transfer_mass_kg_receive; open_wip_mass_kg_receive; close_wip_mass_kg_receive; accepted_retained_mass_kg_receive | |
| `position_fix_stream_mass` | position_fix 各实际物理库存/可用/内部/在制品/验收池 | 逐 stream_id、实际 stream_pool_kind、匹配 stream_same_ids/状态/期间和 balance_pool_id：stream_actual_unit 为 kg 时，m_stream_kg = stream_quantity_kg；为 Number/item 时，使用确切同一流标识/当前状态经校准 stream_direct_net_mass_kg，或按同质同标识实测组汇总 stream_item_count * k_kg_per_item_fix。直接称重与系数路线为替代方案，不叠加。混合标识/状态流需分实测组或直接称量该确切混合流。原生毛领用/可用/内部/在制品件数与实际台账标识核对，保留外部 item。各物理质量按互斥 stream_pool_kind 只分配一次至 G_mass_kg_fix、U_mass_kg_fix、X_mass_kg_fix、incoming_mass_kg_fix、outgoing_transfer_mass_kg_fix、open_wip_mass_kg_fix、close_wip_mass_kg_fix 或 accepted_retained_mass_kg_fix。G/U/X 流件数须核对原生 G_fix、U_return 和 X_transfer。内部/已安装池件数核对节点事件和实际标识。最终验收安装质量为留存，不是客户交付向外质量。opening_interface 不进入池。缺实际同标识/当前状态称重证据为质量缺口；件数核对单列。需要时的原生长度须在 position_fix 单独长度质量计算，不能插入件数系数路线。实际按长度记录的固定材料池，使用 position_fix_length_mass 的 length_total_mass_kg_fix 作为独立有证据替代，匹配流池只分配一次，不是件数系数或第二物理质量。 | cp_position_fix_material; cp_position_fix_events; cp_position_fix_fate; G_fix; U_return; X_transfer; bridge_same_ids; bridge_state; bridge_period; k_kg_per_item_fix; balance_pool_id; stream_id; stream_pool_kind; stream_actual_unit; stream_item_count; stream_quantity_kg; stream_direct_net_mass_kg; stream_same_ids; stream_state; stream_period; stream_bridge_group; constituent_scope; composite_group_id; length_total_mass_kg_fix | G_mass_kg_fix; U_mass_kg_fix; X_mass_kg_fix; incoming_mass_kg_fix; outgoing_transfer_mass_kg_fix; open_wip_mass_kg_fix; close_wip_mass_kg_fix; accepted_retained_mass_kg_fix | |
| `complete_accept_stream_mass` | complete_accept 各实际物理库存/可用/内部/在制品/验收池 | 逐 stream_id、实际 stream_pool_kind、匹配 stream_same_ids/状态/期间和 balance_pool_id：stream_actual_unit 为 kg 时，m_stream_kg = stream_quantity_kg；为 Number/item 时，使用确切同一流标识/当前状态经校准 stream_direct_net_mass_kg，或按同质同标识实测组汇总 stream_item_count * k_kg_per_item_complete。直接称重与系数路线为替代方案，不叠加。混合标识/状态流需分实测组或直接称量该确切混合流。原生毛领用/可用/内部/在制品件数与实际台账标识核对，保留外部 item。各物理质量按互斥 stream_pool_kind 只分配一次至 G_mass_kg_complete、U_mass_kg_complete、X_mass_kg_complete、incoming_mass_kg_complete、outgoing_transfer_mass_kg_complete、open_wip_mass_kg_complete、close_wip_mass_kg_complete 或 accepted_retained_mass_kg_complete。G/U/X 流件数须核对原生 G_complete、U_return 和 X_transfer。内部/已安装池件数核对节点事件和实际标识。最终验收安装质量为留存，不是客户交付向外质量。opening_interface 不进入池。缺实际同标识/当前状态称重证据为质量缺口；件数核对单列。需要时的原生长度须在 position_fix 单独长度质量计算，不能插入件数系数路线。 | cp_complete_accept_material; cp_complete_accept_events; cp_complete_accept_fate; G_complete; U_return; X_transfer; bridge_same_ids; bridge_state; bridge_period; k_kg_per_item_complete; balance_pool_id; stream_id; stream_pool_kind; stream_actual_unit; stream_item_count; stream_quantity_kg; stream_direct_net_mass_kg; stream_same_ids; stream_state; stream_period; stream_bridge_group; constituent_scope; composite_group_id | G_mass_kg_complete; U_mass_kg_complete; X_mass_kg_complete; incoming_mass_kg_complete; outgoing_transfer_mass_kg_complete; open_wip_mass_kg_complete; close_wip_mass_kg_complete; accepted_retained_mass_kg_complete | |
| `position_fix_length_mass` | position_fix 实际许可固定材料的长度桥 | length_total_mass_kg_fix = bridge_length_m * bridge_linear_mass_kg_per_m，仅用于实际匹配同材料/规格/当前状态且有 bridge_source 的情况。它为实际总 kg，与 k_kg_per_item_fix 不同。匹配确切 stream_id/池，以此质量替代而非叠加同一流的直接称重或计数桥质量。没有实测长度/有证据同材料线质量则为转换缺口，不推定通用密度。原垫片/紧固交换保持声明 Mass 基准。 | cp_position_fix_material; cp_position_fix_fate; bridge_length_m; bridge_linear_mass_kg_per_m; bridge_same_ids; bridge_state; bridge_source; stream_id; stream_pool_kind; balance_pool_id | length_total_mass_kg_fix | |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `identity_traceability` | 全部卡片 | 实际材料/产品/服务/物质身份和状态须匹配卡片。条件集合按真实前景规格展开。固定 UUID 须有独立确认的详情/属性/单位证据。 | 规格、组成、供应商/提供方范围、经核实绑定审查 |
| `acceptance_quality` | 参考及节点交接 | 可追溯工厂饰面、兼容完好门洞、实际调适放行、许可修切状态、校正/固定、锁具启闭、局部修整/干燥及签字最终验收。采用实际适用公差和供应商要求。 | 本节点检查/事件日志和签字验收 |
| `measurement_quality` | 件数、质量、能源及服务 | 仪器校准/核对、皮重、标识/计数核对、分子单位和原库存单位一致。记录不确定性及实际检出限。不猜测件数至质量密度，不假定工作日。 | 校准/去皮表、收据、表计、合同和同标识桥 |
| `completeness_quality` | 全部节点 | 核对每个真实失败/重复事件、库存/可用退回、包装、附件/清理材料、残余、废物/液体及可能直接排放。区分观察证实未发生、不适用范围和未测缺口。 | 节点去向/库存核对、事件及缺口登记 |
| `period_quality` | 作业及共享资源 | 覆盖实际到货至交付期间及付费闲置/可用性；声明排除的先前门洞作业和后续使用。登记完整作业外共享使用者及提供方数据集重叠。定稿前记录未决更换/终止。 | 期间/在制品桥、合同、使用者登记及负担归属审查 |
| `range_quality` | 每个非参考卡片 | 非参考范围仅为有各卡理由的暂定 reasoned_estimate QA；参考范围为严格计算 N/N 恒等关系。获得证据后以审查的来源/前景范围替代暂定筛查。不得根据下限填补缺失数量或推定条件性未发生。 | 卡片范围理由及可用时审查的前景分布 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_scope` | 未饰面来料/完整涂装、重大门洞施工、错误门型或无依据室外/防火/隔声主张应在范围审查失败。检查实际产品规格和工厂饰面到货，不用宽分类标签代替。 | jeldwen-jii109 |
| `validate_acceptance` | 确认 N 为正、唯一且仅来自启闭/局部干燥验收完工单元，reference_service 位于 complete_accept。排除未验收已安装在制品和未决缺陷。 | |
| `validate_handoffs` | 按实际转移标识、计数、状态和期间核对 conditioned_unit/fix_feed 及 fixed_unit/complete_feed。各协议属于对应卡的真实节点。不得强制内部计数为参考数量。 | |
| `validate_material_pools` | 检查实物毛输入、另列正向未用退出和期末/在制品池，门/锁具退回保持件数，其他材料保持 Mass。确认没有第二净消耗交换或重复上游抵扣。 | |
| `validate_rework` | 各实际不合格事件追溯产生节点和真实修补、暂存、可用退出或废物去向。每个真实重复操作资源计一次，只删重复记录。废物不能计为验收服务。 | |
| `validate_direct_releases` | 基本流绑定前核实物质/材料、必要的粒径定义、接收介质和数量方法。切割直接粉尘归 position_fix；捕集粉尘为废物。完工水/化学品损失采用互斥组分池；缺去向为覆盖不完整。 | |
| `validate_shared_periods` | 检查全部使用者和实际期间、有证据正数剩余分配分母、独立直接归属、付费闲置/服务单位及提供方/现场能源、资本和设置不重叠范围。缺更换/终止决定或在制品负担未决阻止定稿。 | |
| `validate_identity_range` | 未决流/支持身份明确保持未决；不接受通用近似匹配或猜测 UUID。落入暂定范围不证明数量、安全、身份或就绪。报告实际检查、跳过条件检查和数据缺口。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景现场安装数据包；身份与计量解决后可投影为下游 process 或 lifecyclemodel |
| downstream_use | 同一披露安装边界和实际限定条件下的 secondary_dataset 和/或 background_dataset |
| allowed_use | 模拟验收的工厂饰面室内预装框木门安装，声明输入制造/服务连接及局部完工范围 |
| excluded_use | 门制造；整个建筑/门洞施工；未饰面/完整涂装路线；拆除；室外/防火/隔声产品主张；使用/维护/寿命终结；将未决部分作业作为完工服务 |
| required_metadata | PCR/版本；场址和地理；门芯/树种/门框/饰面/五金/尺寸/开启方向；门洞接受；作业和期间标识；实际路线/局部修整；上游覆盖；N；节点数量；实测桥；共享使用者/提供方边界；保管和返工记录 |
| required_quality_disclosure | 固定与未决身份/支持覆盖；实测与估算数量；暂定推理范围；校准/不确定性；组分/去向缺口；有证据的条件性未发生与未测的区别；期间/在制品/终止及共享归属限制 |
| update_trigger | 产品/路线/饰面或门洞边界改变；五金/材料/提供方改变；新计量/去向/UUID 证据；场址电力/共享合同改变；适用供应商条件修订或观察到重复质量问题 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `jeldwen-jii109` | handbook | JELD-WEN, Installation Instructions for Interior Pre-Hung Doors, JII109 3/25, pp.1-6. https://cmd-jeld-wen.s3.us-east-2.amazonaws.com/assets/documents/3476246473.pdf | 产品与门洞检查；环境调适/储存；整体/分体门框区别；许可门框修切、垫片和固定；锁具、孔洞、条件饰面/嵌缝/保护完工关口。其数字建议不是通用清单默认值。 |
