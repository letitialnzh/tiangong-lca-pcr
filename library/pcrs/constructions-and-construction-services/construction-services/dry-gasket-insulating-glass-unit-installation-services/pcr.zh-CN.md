---
pcr_id: pcr.constructions-and-construction-services.construction-services.dry-gasket-insulating-glass-unit-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 干式胶条中空玻璃单元安装服务

## 1. 范围与适用性

本方法适用于将工厂密封的矩形中空玻璃单元安装到已经完成并获准装玻璃的既有相容框架中。安装方接收框架接口与成品单元，核查适用性和状态，采用实际指定的支承垫块与侧边垫块就位，安装预制干式胶条及机械固定件，并移交清洁、无损且经检验的安装成果，保持设计排水通道畅通。声明的服务包括从接收状态至最终验收之间实际发生的搬运、作业通达、纠正作业、耗材使用及废物。制造商指南分别要求保护成品边缘、采用相容弹性材料、提供支承和排水。[来源：`pilkington-general-glazing-2013`]

本类别排除中空玻璃制造、新框架安装、框架维修、旧玻璃拆除或拆毁、湿式嵌装或现场施作湿密封剂、结构硅酮粘接、防火玻璃系统，以及中空玻璃的现场切割、磨边或研磨。实际工程需要这些操作时，应另行声明前景边界，不得通过遗漏操作使其符合本类别。供应单元自带的工厂边部密封仍属于供应组件，不因此将本安装认定为结构硅酮路线。

是否符合路线应由实际系统文件确定。预制聚合物胶条或垫块须获准与实际中空玻璃密封、镀膜和框架系统配合使用。通用指南中的材料例子不是工程物料清单。本方法不统一规定玻璃厚度、玻璃片组合、边缘间隙、垫块几何形状、胶条压力、排水孔数量或安装使用寿命。特别是 ATS-192 中退火单片玻璃的尺寸表不能作为中空玻璃默认规格；验收应采用实际批准的工程细节。[来源：`pilkington-general-glazing-2013`]

本宽乘高面积方法仅限有文件确认的矩形单元外轮廓。任何库存、移交、废弃或验收面积换算前，须确认rectangular_outline_confirmed。非矩形或外形未知的单元，须先单独审查几何与路线方法，之后才能使用本PCR；外接矩形不是其单元面积。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.dry-gasket-insulating-glass-unit-installation-services |
| classification_refs | cpc:3.0:54710；本语义服务仅覆盖玻璃安装服务分类中的有限范围，而非整个分类 |
| covered_products | 在已验收的既有框架中，以干式支承和机械固定方式安装工厂密封矩形中空玻璃；包括安装验收前实际检查、搬运、清洁及纠正作业 |
| excluded_products | 中空玻璃制造；框架制造、安装或维修；拆除及旧玻璃移除；湿式及结构硅酮安装；防火玻璃；成品中空玻璃现场切割、磨边或研磨 |
| representative_product | 采用系统指定相容垫块、预制胶条和机械固定件安装的工厂密封中空玻璃，在排水和状态检查后验收 |
| production_route | 勘查和接收 → 干式支承与固定 → 检验、清洁、必要纠正及验收 |
| market_state | 客户验收时完成的安装服务；供应组件和中间安装状态不构成额外最终服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 干式胶条中空玻璃单元安装服务 |
| How much | 唯一已验收单元的中空玻璃面积 1 m2，每个单元只计一次 |
| How well | 实际玻璃组合及朝向正确；组件经批准且相容；单元及边缘无损；支承、固定、胶条配合与排水经检验；清洁状态和工程验收有记录 |
| How long or cycle | 一个明确安装批次，自接收框架放行至首次最终验收，包括验收前所有实际纠正到访；报告日期及各期间，不假定使用寿命 |
| reference_flow_link | `reference_service` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 干式胶条中空玻璃单元安装服务 |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | 场地与洞口编号; 安装批次; 已验收单元编号及日期; 实际单元宽度和高度; 中空玻璃片组合; 镀膜; 边部密封和朝向; 框架系统与接收状态放行; 实际垫块; 胶条; 压条和紧固件规格; 制造商相容性批准; 排水与固定验收要求; 实际新增与既有保留组件; 通达和搬运方法; 完整返工与拒收历史; 报告期间; 实物库存和在制品处理; 纳入的上游数据集及供应商地域技术 |

A 为本批次中安装已经通过最终验收的唯一单元的工厂单元外形实测面积之和。只计单元外轮廓一次，不得累加两个表面、各玻璃片层数、可视透光面积或框架面积。声明参考面积是已安装单元面积，不代表热工或寿命功能。工程计价使用其他面积口径时，保留两种原始面积及逐单元可追溯换算。A 必须为正。最终输出经 A 归一化后为 1 m2；中间移交仍采用实际记录数量除以 A。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `accepted_area_basis` | reference product | Area | m2 | A 按 cp_accept_handoffs 中实际尺寸和编号计算唯一最终验收单元外形面积；无论玻璃片数、表面数或重复检验次数，每个验收单元只计一次。 |
| `input_area_consistency` | supplied_igus; accepted_igus; glaze_feed; retained_glazing; accept_feed; unused_igu_return; accept_rework_return; glaze_rework_feed | Area | m2 | 供应、正向和反向移交、在制品及可用玻璃退出均保持同一实测单元外形面积口径；不得将内部移交固定为 1 m2。 |
| `mass_bridge_required` | setting_blocks; gaskets; beads_fasteners; glazing_offcuts; broken_igus; survey_rejected_igu_waste; accept_rejected_igu_waste | Mass | kg | 称量实际材料或完整拒收中空玻璃。长度、件数或面积只有在具备实际同牌号线质量、单件质量或完整实际组合面积质量证据时才能换算成 kg；仅玻璃片厚度不能确定完整中空玻璃质量。 |
| `gross_draw_basis` | supplied_igus; setting_blocks; gaskets; beads_fasteners; cleanup_water; cleanup_supplies | Area or Mass as stated on each card | m2 or kg as stated on each card | 实物总取用量为期初完好未领用库存加接收量减期末完好未领用库存。可用边界退出包含在总取用量中，并以同属性同单位的正产品输出单列；保留加工损失及纠正取用。 |
| `water_pool_basis` | cleanup_water; cleanup_supplies; cleanup_waste; cleanup_wastewater; accept_water_vapour | Mass | kg | 实际水组分与混合物总质量分别记录。收集废水、废擦拭物含水、保留水、未用退出及实际水蒸气为互斥去向；不得将未解释残差转为水蒸气或其他直接排放。 |
| `power_basis` | survey_electricity; glaze_electricity; accept_electricity | Energy | kWh | 采用本节点实际电表值或有证据的完整共享归属。实际电力记录为 MJ 时除以 3.6 换算成 kWh；保留原记录、供应商、电压和期间。 |
| `service_duration_basis` | survey_shared_service; glaze_shared_service; accept_shared_service | Duration | h | 采用实际付费可用时长或合同小时，包括付费闲置。仅凭具体合同的每日小时证据换算计费天数；不得假设每天八小时。 |
| `period_stock_boundary` | all inventory rows | Relevant card property | Relevant card unit | 按单元、材料、节点和期间区分期初及期末各池。完好未领用库存、已加工在制品、可用退出、拒收料和已验收安装输出互斥；在制品携带原有负担，不重复计制造。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 既有相容框架已完成并放行装玻璃；接收工厂密封中空玻璃的实际供应状态；新增玻璃安装及清洁材料分别识别 |
| starting_condition_role | 已验收的既有接收接口及成品组件供应，不等于新增购买中空玻璃或耗材的零负担声明 |
| product_classification_scope | 第 1、2 节限定的干式胶条和机械固定安装服务 |
| recursive_input_rule | 先前安装服务或既有已装框架作为披露的接收状态，不得经接口卡递归重复计算相同安装或框架生产；实际购买的独立服务按其供应商及范围只链接一次 |
| upstream_dataset_requirement | 实际工厂中空玻璃组合和每种新增取用材料各链接相容上游数据集一次；记录实际电力和合同服务；区分组件制造与前景安装，并披露未解决匹配 |
| disclosure | 接收框架放行、供应商和组件规格、全部节点期间、通达服务边界、实物取用及可用退出、内部移交和在制品平衡、拒收单元去向、纠正到访、共享归属决策及排除项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_received_frame` | survey | 包括既有框架的状态及相容性检查。frame_interface 表示既有接收安装接口，其面积不得引入新框架制造或框架安装负担。需要维修的框架不符合本批次起始状态。 | `pilkington-general-glazing-2013` |
| `boundary_factory_unit` | survey; glaze | 按实际组合与编号接收工厂成品中空玻璃，纳入搬运和保护；不得通过切割、磨边或研磨成品纠正尺寸不符。 | `pilkington-general-glazing-2013` |
| `boundary_dry_joining` | glaze | 纳入实际中空玻璃、相容支承与侧边垫块、预制胶条及实际新增机械固定件。既有保留件分别识别，不视为新购物料。支承、胶条配合、边缘保护和排水均属安装责任。 | `pilkington-general-glazing-2013` |
| `boundary_stage_gates` | survey; glaze; accept | 分别记录接收检查放行、已固定但未验收状态及最终验收。只有最终验收属于参考服务；中间及反向移交保持实际内部数量。 | `pilkington-general-glazing-2013` |
| `boundary_own_node_rejects` | survey; glaze; accept | 报废单元归属实际损坏或拒收并发运的节点。区分来料损坏复合单元、安装破损、最终检查损坏、可用未加工退出及完好纠正返回。每个拒收事件保留编号、数量、接收方或返工去向及日期。 | `pilkington-general-glazing-2013` |
| `boundary_periods` | all foreground nodes | 列明接收储存、安装、检验清洁及首次验收前纠正期间。包括期初期末在制品及付费服务期间。使用、日常维护及验收后更换不在本批次边界内；没有已验收面积的终止批次不能归一化为已验收服务。 |  |
| `boundary_shared_services` | survey; glaze; accept | 纳入服务于本边界的实际搬运、通达、工具、储存服务及电力。列出共享资产的全部使用者及期间，包括共享总量的其他工程。服务数据集已含能源或操作员时，不得另加重复负担。 |  |
| `boundary_water_and_emissions` | glaze; accept | 区分清洁用水及材料、收集废物废水和实际物种直接排放。降雨和建筑径流不是清洁投入。报告验收节点水的互斥去向，以及安装/验收各节点按实际物种、粒径和介质独立举证的释放；附带组件配装修整释放是条件性实际事件，不得由边角料缺口推定。 | `pilkington-general-glazing-2013` |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：既有框架安装接口 (`frame_interface`)

过程／待建立交换的方向／类型：`survey` / `inputs` / `product`.

以既有相容框架面积记录接收边界接口；不由本卡供应新增框架材料、安装或维修。

- 采集对象：既有框架安装接口
- 流属性/单位：Area / m2
- 数量规则：surveyed_opening_area / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_interface`
- 来源：`pilkington-general-glazing-2013`
- 尚待核实的可选筛查提示：frame_interface 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：接口与最终单元面积口径可不同，未完成洞口可跨期间；宽泛面积比筛查口径或重复计数错误。

#### 采集要求：实际接收通达、搬运或储存可用服务 (`survey_shared_service`)

过程／待建立交换的方向／类型：`survey` / `inputs` / `product`.

按实际合同供应商、资产与服务分别记录；纳入付费闲置、实际合同时间口径和已含操作员/能源范围。

- 采集对象：实际接收通达、搬运或储存可用服务
- 流属性/单位：Duration / h
- 数量规则：survey_attributed_contract_hours / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_service`
- 尚待核实的可选筛查提示：survey_shared_service 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：72
  - 单位：h
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：小批次储存或通达可持续跨日；宽泛小时强度用于检查换算及重复账单，不定义计费天数时长。

#### 采集要求：已检查放行中空玻璃及框架接口 (`accepted_igus`)

过程／待建立交换的方向／类型：`survey` / `outputs` / `product`.

按实际单元和转移事件向 glaze 放行；匹配实测移交量，不构成最终安装服务，也不固定为参考数量。

- 采集对象：已检查放行中空玻璃及框架接口
- 流属性/单位：Area / m2
- 数量规则：survey_forward_area / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_igus`
- 来源：`pilkington-general-glazing-2013`
- 尚待核实的可选筛查提示：accepted_igus 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：放行可含跨期未完成单元或纠正放行事件；宽泛范围用于事件去重和在制品核对。

#### 采集要求：拆除的中空玻璃运输包装 (`igu_packaging`)

过程／待建立交换的方向／类型：`survey` / `outputs` / `waste`.

按实际材料和污染状态区分报废包装并明确接收方；可周转货架及退回再用包装不属于报废包装。

- 采集对象：拆除的中空玻璃运输包装
- 流属性/单位：Mass / kg
- 数量规则：survey_discarded_packaging_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_packaging`
- 来源：`pilkington-general-glazing-2013`
- 尚待核实的可选筛查提示：igu_packaging 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：木材、垫片及保护包装随尺寸和所有权变化；宽泛质量范围提示核查皮重及货架与废物区别。

#### 采集要求：已检查放行中空玻璃及框架接口 (`glaze_feed`)

过程／待建立交换的方向／类型：`glaze` / `inputs` / `product`.

实际接收 survey 移交，按编号、日期、面积和保管匹配 accepted_igus。原组件负担随移交，不另计第二次上游购买。

- 采集对象：已检查放行中空玻璃及框架接口
- 流属性/单位：Area / m2
- 数量规则：glaze_forward_received_area / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_handoffs`
- 尚待核实的可选筛查提示：glaze_feed 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：宽泛面积范围容纳跨期及实际多事件，提示核查未配对或重复移交。

#### 采集要求：指定弹性支承及侧边垫块 (`setting_blocks`)

过程／待建立交换的方向／类型：`glaze` / `inputs` / `product`.

分别记录实际材料、牌号和相容组件规格。总取用为期初完好未领用库存加接收减期末完好未领用库存，包含真实未用退出，并通过 unused_glazing_component_return 正记。实际损失和每次新增纠正取用均保留。

- 采集对象：指定弹性支承及侧边垫块
- 流属性/单位：Mass / kg
- 数量规则：setting_blocks_gross_draw_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_materials`
- 来源：`pilkington-general-glazing-2013`
- 尚待核实的可选筛查提示：setting_blocks 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：垫块为小件，但尺寸材质质量各异；宽泛范围筛查把长度或件数误当 kg。

#### 采集要求：新增玻璃压条及机械紧固件 (`beads_fasteners`)

过程／待建立交换的方向／类型：`glaze` / `inputs` / `product`.

按实际材料和部件分开记录，新增物料按期初加接收减期末完好未领用库存总记。可用退出正记，保留损失及纠正取用；既有保留部件不得当作新购物料。

- 采集对象：新增玻璃压条及机械紧固件
- 流属性/单位：Mass / kg
- 数量规则：beads_fasteners_gross_draw_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_materials`
- 来源：`pilkington-general-glazing-2013`
- 尚待核实的可选筛查提示：beads_fasteners 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：新固定型材可能比胶条重，也可能使用既有件；宽泛范围核查新/旧归属及材料分开。

#### 采集要求：实际安装通达、搬运或工具可用服务 (`glaze_shared_service`)

过程／待建立交换的方向／类型：`glaze` / `inputs` / `product`.

按实际供应商、资产和合同记录安装节点服务及付费闲置。明确已含范围、实际合同时间换算及全部纠正使用。

- 采集对象：实际安装通达、搬运或工具可用服务
- 流属性/单位：Duration / h
- 数量规则：glaze_attributed_contract_hours / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_service`
- 尚待核实的可选筛查提示：glaze_shared_service 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：168
  - 单位：h
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：小批次通达或起吊可跨多日和闲置期间；宽泛范围检查无证据合同换算和重复总量。

#### 采集要求：按实际材料区分的未用新增安装组件 (`unused_glazing_component_return`)

过程／待建立交换的方向／类型：`glaze` / `outputs` / `product`.

展开为离开 glaze 保管的实际未用完好垫块、胶条、压条和紧固件；供应商退货与外部转移分开，以对应投入 kg 记正输出。只携带原未用材料负担，安装及纠正负担留在服务批次。

- 采集对象：按实际材料区分的未用新增安装组件
- 流属性/单位：Mass / kg
- 数量规则：glaze_usable_exit_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_materials`
- 尚待核实的可选筛查提示：unused_glazing_component_return 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：未用库存退出可为零或在小批次中较大；范围用于检查其与期末库存及加工拒收互斥。

#### 采集要求：报废安装组件边角料及耗材 (`glazing_offcuts`)

过程／待建立交换的方向／类型：`glaze` / `outputs` / `waste`.

按实际胶条、垫块、压条、紧固件等材料、状态和接收方分别记录；不包括中空玻璃单元或玻璃。

- 采集对象：报废安装组件边角料及耗材
- 流属性/单位：Mass / kg
- 数量规则：glaze_component_waste_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_waste`
- 来源：`pilkington-general-glazing-2013`
- 尚待核实的可选筛查提示：glazing_offcuts 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：修整及拒收随周长和采购长度变化；宽泛范围核查组成、皮重及可用退出重叠。

#### 采集要求：组件配装产生的实际物种直接释放 (`glaze_other_releases`)

过程／待建立交换的方向／类型：`glaze` / `outputs` / `elementary`.

仅纳入 glaze 新胶条、垫块、压条或机械固定件实际搬运、配装及附带修整的非 H2O 直接释放。由事件证据确定实际物料、物种或颗粒、状态和环境介质。不得纳入中空玻璃现场切磨、结构湿密封或假定通用 VOC/粉尘。捕集边角料/粉尘仍为废物，不兼记释放。发生情况、物种、介质或数量未知时为数据缺口，只有证实未发生才记零。

- 采集对象：组件配装产生的实际物种直接释放
- 流属性/单位：Mass / kg
- 数量规则：glaze_species_release_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_releases`
- 尚待核实的可选筛查提示：glaze_other_releases 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：实际组件配装修整的按物种宽泛暂定范围只筛查物料平衡、单位和操作错误；不假定发生，不验证未知物种，也非实测因子或排放限值。每事件仅选直接测量或独立验证的活动/控制特定方法，不用废物或库存残差。

#### 采集要求：实际清洁及保护耗材 (`cleanup_supplies`)

过程／待建立交换的方向／类型：`accept` / `inputs` / `product`.

按实际擦拭物、清洁剂及保护材料区分，具备镀膜/材料相容批准。总取用包括可用未用退出；保留重复使用设备不得反复按新增耗材购买。

- 采集对象：实际清洁及保护耗材
- 流属性/单位：Mass / kg
- 数量规则：cleanup_supplies_gross_draw_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_accept_materials`
- 来源：`pilkington-general-glazing-2013`
- 尚待核实的可选筛查提示：cleanup_supplies 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：擦拭物、配方及保护方式不同；范围检查件数质量换算及重复收费的周转设备。

#### 采集要求：实际最终检查通达或清洁可用服务 (`accept_shared_service`)

过程／待建立交换的方向／类型：`accept` / `inputs` / `product`.

按供应商及合同记录实际通达、设备或清洁服务及付费闲置，保持已含能源/操作范围与实际合同小时。

- 采集对象：实际最终检查通达或清洁可用服务
- 流属性/单位：Duration / h
- 数量规则：accept_attributed_contract_hours / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_accept_service`
- 尚待核实的可选筛查提示：accept_shared_service 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：72
  - 单位：h
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：等待或纠正期间可继续租用；范围避免将租赁天数暗改为默认工作班次。

#### 采集要求：返回干式安装纠正的完好已固定中空玻璃 (`accept_rework_return`)

过程／待建立交换的方向／类型：`accept` / `outputs` / `product`.

实际完好已固定单元返回 glaze 时才纳入，按事件与单元匹配 glaze_rework_feed。携带原单元负担，不是最终服务、未用供应退货或废物；全部检验纠正活动留在批次。

- 采集对象：返回干式安装纠正的完好已固定中空玻璃
- 流属性/单位：Area / m2
- 数量规则：accept_rework_sent_area / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_accept_handoffs`
- 尚待核实的可选筛查提示：accept_rework_return 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：可发生多次真实纠正返回；范围核查重复事件，不把返回面积变成已验收输出。

#### 采集要求：按实际材料区分的未用清洁用水和耗材 (`unused_cleanup_material_return`)

过程／待建立交换的方向／类型：`accept` / `outputs` / `product`.

accept 实际可用未加工退出，以对应供水或材料投入同一 kg 单位正记。退货及外部转移与期末库存、废水、湿擦拭物和残渣互斥。只携带原未用材料负担。

- 采集对象：按实际材料区分的未用清洁用水和耗材
- 流属性/单位：Mass / kg
- 数量规则：accept_usable_cleanup_exit_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_accept_materials`
- 尚待核实的可选筛查提示：unused_cleanup_material_return 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：订单变更时未用水或耗材退出可为零或显著；范围检查投入身份对应及库存互斥。

#### 采集要求：收集的清洁残渣及废耗材 (`cleanup_waste`)

过程／待建立交换的方向／类型：`accept` / `outputs` / `waste`.

按实际湿擦拭物、保护物和残渣组成、状态及接收方分别记录。湿擦拭物总质量包含实际含水，该水不再记入废水或空气；排除中空玻璃报废和另收废水。

- 采集对象：收集的清洁残渣及废耗材
- 流属性/单位：Mass / kg
- 数量规则：accept_collected_solid_waste_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_accept_waste`
- 来源：`pilkington-general-glazing-2013`
- 尚待核实的可选筛查提示：cleanup_waste 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：湿擦拭物及保护材料湿质量不同；范围检查水重叠、皮重及材料分开。

#### 采集要求：实际物种直接释放 (`accept_other_releases`)

过程／待建立交换的方向／类型：`accept` / `outputs` / `elementary`.

按实际物种、状态或颗粒级别及接收介质独立记录条件性释放。排除另计 H2O、水废物和收集废水。不得把通用 VOC、粉尘或缺失质量绑定到具体物种。

- 采集对象：实际物种直接释放
- 流属性/单位：Mass / kg
- 数量规则：accept_species_release_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_accept_releases`
- 尚待核实的可选筛查提示：accept_other_releases 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：少量实际释放取决于清洁化学和证据；暂定范围不能授权虚构释放或替代物种识别。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| survey | 接收检查中空玻璃及既有框架接口 | required | 每个适用批次 | 前景接收、保护及相容放行；负责本节点来料拒收及可用退出 | 实际放行单元面积按参考流归一化；期初期末库存单列 |
| glaze | 垫块就位、干式胶条与机械固定 | required | 每个适用批次 | 整合实际中空玻璃、支承/侧边垫块、预制胶条及固定组件，并包括实际纠正 | 按参考流归一化的实际已固定移交单元面积，包括明确纠正轮次 |
| accept | 检查排水固定、清洁与安装验收 | required | 每个适用批次 | 最终检验清洁、拒收及纠正发运；仅一个最终验收服务输出 | 按唯一已验收面积 A 归一化后的 1 m2 参考流 |

只有实际完好单元从 accept 返回 glaze 纠正时，才启用反向移交。accept_rework_return 与 glaze_rework_feed 按事件和单元编号成对匹配。实际记录全部新增安装及重复验收活动；原组件负担随移交携带一次，不将同一玻璃再次作为新增购买。只有检查意见而没有实际实物或关口返回，不得制造反向转移。待决检查不合格状态属于在制品，不是验收或废物。

以下数量均由第 8 节协议产生，统一按同一正值 A 归一化。暂定筛选范围是推理估算，不是允许界限或实测数量替代；超出范围须调查，有证据时仍可有效。只有具备实际未发生证据时条件交换才可记零，缺测不是零。当前景记录确定材料、服务、牌号、供应商、状态或介质时，将概括卡展开为实际独立交换。

### 过程：接收检查中空玻璃及既有框架接口（`survey`）

#### 输入

##### 产品流

###### 工厂密封中空玻璃单元（`supplied_igus`）

采用实际工厂组合和单元编号。gross_igu_draw 包括离开本节点的可用退货或外部转移，另以正输出单列，不得再从实物投入扣除。

- 选定流：工厂密封中空玻璃单元
- 流属性/单位：Area / m2
- 数量规则：gross_igu_draw / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_igus`
- 来源：`pilkington-general-glazing-2013`
- 数量范围：supplied_igus 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：新供应面积通常接近已验收面积，期初在制品、拒收和完好退出可改变批次比值；宽泛范围不规定损失率。

###### 实际归属的现场电力（`survey_electricity`）

记录实际供应商、电压及期间，用于接收、搬运和保护。优先本节点电表；共享量需完整且有证据的正权重。

- 选定流：实际归属的现场电力
- 流属性/单位：Energy / kWh
- 数量规则：survey_attributed_kwh / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_power`
- 数量范围：survey_electricity 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：接收检查可人工或使用动力设备；宽泛范围容纳工具及现场开销，不预设用电量。

#### 输出

##### 产品流

###### 未使用完好工厂中空玻璃（`unused_igu_return`）

survey 保管下实际可用未加工退出，以同一面积单位正记，分别记录供应商退货或外部转移，不在期末库存中。只携带原未用材料负担，不转出安装服务负担或给予避免生产抵扣。

- 选定流：未使用完好工厂中空玻璃
- 流属性/单位：Area / m2
- 数量规则：survey_usable_exit_area / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_igus`
- 数量范围：unused_igu_return 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：订单变更时未用退出可为零或相当大；面积比用于检查库存与保管，不规定退货率。

##### 废物流

###### 来料检查损坏或不可恢复拒收的中空玻璃（`survey_rejected_igu_waste`）

仅 survey 实际以废物发运的拒收单元，保留完整复合单元质量及编号。区分可用完好退货、隔离保留和安装破损。完整/收集复合质量实称，或采用实际同组合完整单元质量面积桥。

- 选定流：来料检查损坏或不可恢复拒收的中空玻璃
- 流属性/单位：Mass / kg
- 数量规则：survey_discarded_igu_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_igus`
- 来源：`pilkington-general-glazing-2013`
- 数量范围：survey_rejected_igu_waste 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：小验收批次中一件较重拒收单元即可占主导；宽泛范围检查复合质量是否被无证据纯玻璃质量或面积替代。

### 过程：垫块就位、干式胶条与机械固定（`glaze`）

#### 输入

##### 产品流

###### 返回干式安装纠正的完好已固定中空玻璃（`glaze_rework_feed`）

仅实际从 accept 返回时纳入。按事件、单元和面积匹配 accept_rework_return；既有单元携带原负担。计入每次额外纠正资源，不再次制造同一玻璃。

- 选定流：返回干式安装纠正的完好已固定中空玻璃
- 流属性/单位：Area / m2
- 数量规则：glaze_rework_received_area / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_handoffs`
- 数量范围：glaze_rework_feed 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：真实纠正轮次可超过一次面积；零至多轮范围用于事件核对，不承认默认返工率。

###### 指定预制干式玻璃胶条（`gaskets`）

分别记录实际材料、牌号、型材和相容批准；总取用为期初加接收减期末完好未领用库存，真实可用退出单独正记，保留全部损失和新增纠正取用。不得视为湿硅酮。

- 选定流：指定预制干式玻璃胶条
- 流属性/单位：Mass / kg
- 数量规则：gaskets_gross_draw_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_materials`
- 来源：`pilkington-general-glazing-2013`
- 数量范围：gaskets 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：胶条取决于实际周长及断面而非面积本身；宽泛范围检查线质量桥缺失或误纳湿密封剂。

###### 实际归属的现场电力（`glaze_electricity`）

实际用于安装工具、起吊及范围内纠正的电力。采用本节点电表或实际供应商/电压/期间的完整共享归属，不重复使用接收或验收整表总量。

- 选定流：实际归属的现场电力
- 流属性/单位：Energy / kWh
- 数量规则：glaze_attributed_kwh / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_power`
- 数量范围：glaze_electricity 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：手工安装可能用电少，动力起吊和重复作业增加用电；宽泛范围检查能源单位及重复分配。

#### 输出

##### 产品流

###### 待最终验收的干式固定中空玻璃（`retained_glazing`）

记录实际已机械固定单元及正向轮次事件移交 accept；未验收单元仍为在制品。纠正后重复移交是实际轮次，不是额外最终输出。

- 选定流：待最终验收的干式固定中空玻璃
- 流属性/单位：Area / m2
- 数量规则：glaze_retained_forward_area / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_handoffs`
- 来源：`pilkington-general-glazing-2013`
- 数量范围：retained_glazing 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：真实纠正后可重复移交；范围允许大于最终面积并提示重复事件核查。

##### 废物流

###### 干式安装中损坏并报废的中空玻璃（`broken_igus`）

记录 glaze 实际完整或收集破损复合中空玻璃质量，包括相关间隔条及密封组成，保留单元组合、损坏事件和接收方；不得将整件认定为纯玻璃碎料。

- 选定流：干式安装中损坏并报废的中空玻璃
- 流属性/单位：Mass / kg
- 数量规则：glaze_discarded_igu_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_waste`
- 来源：`pilkington-general-glazing-2013`
- 数量范围：broken_igus 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：小批次破损可占主导；范围核查完整质量证据及本节点归属，不定义允许破损率。

##### 基本流

### 过程：检查排水固定、清洁与安装验收（`accept`）

#### 输入

##### 产品流

###### 待最终验收的干式固定中空玻璃（`accept_feed`）

实际接收 glaze 已固定单元，按事件及单元配对。真实重复轮次属于内部活动，不预判已验收。

- 选定流：待最终验收的干式固定中空玻璃
- 流属性/单位：Area / m2
- 数量规则：accept_forward_received_area / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_accept_handoffs`
- 数量范围：accept_feed 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：正向重复移交及期初在制品可不同于最终面积；宽泛范围检查未匹配移交。

###### 实际供应的清洁用水（`cleanup_water`）

以 kg 记录实际水源和等级。总实物取用包含可用退出，另在清洁材料退出卡正记；将实际使用水池分配到互斥去向，不假定未测蒸发。

- 选定流：实际供应的清洁用水
- 流属性/单位：Mass / kg
- 数量规则：cleanup_water_gross_draw_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_accept_water`
- 来源：`pilkington-general-glazing-2013`
- 数量范围：cleanup_water 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：可采用湿擦或更多清洗；宽泛范围检查水量单位和边界混入，不规定用水剂量。

###### 实际归属的现场电力（`accept_electricity`）

实际用于最终检查、清洁和纠正复检，以本节点电表或完整共享证据及实际供应商/电压/期间归属。

- 选定流：实际归属的现场电力
- 流属性/单位：Energy / kWh
- 数量规则：accept_attributed_kwh / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_accept_power`
- 数量范围：accept_electricity 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：检查可人工，清洁设备和复检增加电力；范围检查能源单位及重复。

#### 输出

##### 产品流

###### 干式胶条中空玻璃单元安装服务（`reference_service`）

最终通过支承、机械固定、无损、清洁和排水验收的安装服务。A/A 恰为一个参考单位；唯一已验收面积排除隔离、待决缺陷及重复检验轮次。

- 选定流：干式胶条中空玻璃单元安装服务
- 流属性/单位：Area / m2
- 数量规则：1 m2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_accept_handoffs`
- 来源：`pilkington-general-glazing-2013`
- 数量范围：正值已验收面积的参考归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：m2
  - 基准：每参考流；仅为 A/A 恒等式，不是产率范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集计算（`calculated_from_collection`）

筛选解释：仅为正值唯一验收面积的 A/A 归一化恒等式，不代表物理产率、验收率或默认损失。

##### 废物流

###### 收集的清洁废水（`cleanup_wastewater`）

记录实际向明确接收方移交的收集水混合物，水组分另行确定供水衡算；不自动认定为直接环境释放。

- 选定流：收集的清洁废水
- 流属性/单位：Mass / kg
- 数量规则：accept_collected_wastewater_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_accept_water`
- 来源：`pilkington-general-glazing-2013`
- 数量范围：cleanup_wastewater 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：湿擦可无废水收集，冲洗可较多；范围检查真实收集，不假定每个水投入均变成废水。

###### 最终检查或清洁时损坏或不可恢复拒收的中空玻璃（`accept_rejected_igu_waste`）

只纳入 accept 实际产生并发运的复合中空玻璃废物；保留单元组合及完整复合实测质量或实际同组合质量桥。不得方便地归入 glaze/survey；排除完好纠正返回。

- 选定流：最终检查或清洁时损坏或不可恢复拒收的中空玻璃
- 流属性/单位：Mass / kg
- 数量规则：accept_discarded_igu_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_accept_waste`
- 来源：`pilkington-general-glazing-2013`
- 数量范围：accept_rejected_igu_waste 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：小批次中一件晚期损坏可占主导；范围检查完整质量证据与实际节点保管。

##### 基本流

###### 实际清洁用水以 H2O 蒸气释放至空气／未指定（`accept_water_vapour`）

仅实际清洁操作向 air / unspecified 排放的 H2O；不声明更细空气子介质。数量须直接测量或独立验证的操作特定蒸发证据。未解释水残差不是排放证据；排除降雨和径流。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：accept_evidenced_water_vapour_kg / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_accept_water`
- 数量范围：accept_water_vapour 暂定筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

筛选解释：清洁水可被收集、保留或蒸发；宽泛范围允许真实零并提示水量单位或衡算错误，不将残差默认认定为释放。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | survey; glaze; accept | 先按节点、批次、单元、物料和事件区分独立计量活动，再归属共享量。安装服务是唯一预期最终输出，不假定常规玻璃联产品。 |  |
| `allocation_shared_complete` | electricity and contracted services | 确定实际共享资产/服务、电表或发票、期间及全部使用者。每个重叠电表主期间仅选完整直接计量或全主表共享分配，两者互斥。不得将直接量再加同一整主表的份额；本方法不声明部分直接加残余分配。合同采用实际直接记录或完整使用者集合中的有证据因果驱动，总权重为正，全部份额与一次记录总量核对，包括本批次外使用者。 |  |
| `allocation_paid_idle` | survey_shared_service; glaze_shared_service; accept_shared_service | 保持全部付费可用边界，包括付费闲置。采用实际预留可用小时或其他有证据合同驱动，不删除闲置或自动替换为工具有效作业时间。按节点期间采集实际小时和权重。 |  |
| `allocation_bundle_boundary` | all purchased services | 核查服务数据集及发票是否已含能源、操作员、运输和设备供给。声明范围只计一次，不另加已全部包含的负担；另行实测且未含部分须披露。 |  |
| `allocation_unused_material` | unused_igu_return; unused_glazing_component_return; unused_cleanup_material_return | 保留总实物取用投入及同属性同单位正记的可用退出。实际可用退出只分得原未用材料上游负担；接收、搬运、安装、清洁、通达、闲置、检验及返工负担留在服务批次。不产生避免生产抵扣、负交换或二次扣除。 |  |
| `allocation_rework` | accept_rework_return; glaze_rework_feed; rejected units | 完好单元跨返工移交时携带原组件负担，不重复制造同一中空玻璃。最终验收前每次实际新增物料、电力、检验、通达和纠正均保留；废单元和处理负担归实际产生节点及已声明处理边界。 |  |
| `allocation_period_carry` | stock; WIP; accepted and terminated lots | 各池记录期初期末期间、单元/材料状态、携带负担和责任。购买材料和实际服务事件只计一次；未完成工作向明确后续批次携带，不计本期已验收输出。后续验收按真实关联携带前期负担一次。 |  |
| `allocation_accepted_denominator` | all normalized rows | 先区分批次外活动并记录期初期末在制品，再以 A 除各归属量。分母为唯一已验收面积，不含拒收、未用、待决或重复轮次面积。没有已验收面积便不能生成已验收服务数据集。 |  |
| `allocation_recovery` | waste and usable exits | 不得因废物发运标签推断再生联产品或避免原生生产信用。回收与处理模型须具备实际去向、技术及另行披露的适用上/下游分配方法。 |  |

节点 n 的材料 i 实物总取用 G = 期初完好未领用库存 O + 接收 R - 期末完好未领用库存 C。互斥未用供应商退货 U 与外部转移 X 以正输出单列。G − U − X 只供诊断和原材料负担分开，不是另一个投入或负信用。退货和转移不在 C 中；已加工组件、边角料、损坏单元及在制品不是完好未领用库存。另行核对加工状态平衡，不将进入在制品误认为可用退货。混合材料或规格分别衡算及链接原上游因子后才汇总。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

各协议采用实际场地批次记录，并只归属一个真实节点，即使共享仪表、发票或供应商文件也是如此。共享主事件只由一个记录所有者管理；节点记录链接主事件并记本节点归属份额。保留归一化前原始数量和单位。aggregation_rule 仅声明参考基准；collection_method 完整说明库存、事件、分配、全部原字段定义及稳定键映射。raw_fields 仅列稳定 ASCII 键，在两种语言中形成相同采集字段。协议不得采用假定班次分母，也不得把中间进料固定为一平方米。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_survey_interface` | `survey` | 接收既有框架接口 | 洞口勘查和放行记录 | lot_id; period_id; event_ID; producing_node; opening_ID; actual_opening_width_m; actual_opening_height_m; interface_area_convention; site_id; frame_system; unit_outline_convention; actual_opening_dimensions; release_date; accepted_receiving_condition; compatibility_detail; defects; repair_exclusion_decision | 逐洞口勘查并保留实际框架放行、相容细节、缺陷及需维修排除决定。按实际宽高计算并汇总 surveyed_opening_area，保持接口面积口径及单元洞口对应，保留未完成洞口和跨期差异后除以 A；不引入新框架生产。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；opening_ID = 实际洞口编号；actual_opening_width_m = 接收框架接口实测宽度，单位 m；actual_opening_height_m = 接收框架接口实测高度，单位 m；interface_area_convention = 单元外形与洞口测量面积口径，以及准确单元洞口对应；site_id = 实际场地；frame_system = 实际框架系统；unit_outline_convention = 实际单元外形面积口径；actual_opening_dimensions = 实际洞口实测尺寸；release_date = 实际放行日期；accepted_receiving_condition = 获准接收的实际状态；compatibility_detail = 实际相容性技术细节；defects = 实际缺陷；repair_exclusion_decision = 框架需维修而排除本路线的决定。 | m2 | 每个实际洞口及变更放行 | 接收放行及相关期初洞口期间 | 实际场地的本批次洞口 | 每参考流 | 签署框架放行、实测尺寸、照片、系统详图和单元洞口对应。 |
| `cp_survey_igus` | `survey` | 玻璃实物取用、正向移交、可用退出及来料报废 | 库存台账、单元登记、移交及废物记录 | lot_id; period_id; event_ID; producing_node; unit_ID; rectangular_outline_confirmed; outline_evidence; actual_unit_width_m; actual_unit_height_m; forward_event_ID; corrective_event_ID; unit_state_event_IDs; opening_processed_WIP; processed_receipts; processed_exits; closing_processed_WIP; carrying_burden_link; material_pool_ID; actual_original_upstream_burden_per_matching_unit; original_gross_draw_material_burden; actual_usable_exit_quantity; survey_opening_unit_IDs; survey_receipt_unit_IDs; survey_closing_unit_IDs; survey_supplier_return_unit_IDs; survey_external_transfer_unit_IDs; measured_complete_or_collected_composite_mass_kg; documented_actual_complete_build_kg_per_m2; discarded_unit_ID; actual_net_discarded_mass_j; site_id; actual_build; complete_unit_mass_where_needed; mass_bridge_source; opening_intact_unissued_quantity; receipts; closing_intact_unissued_quantity; usable_return_ids; external_transfer_ids; quarantine_ids; wip_ids; custodian; event_timestamp; discard_stream_id; discard_mass_method; complete_unit_discard_confirmed; complete_constituent_coverage_evidence; discard_current_state; mass_bridge_state; partial_stream_component_mass_records; other_constituent_fate_ids; mass_method_evidence | 逐单元按 actual_unit_width_m * actual_unit_height_m 得到 actual_unit_area。将期初、接收、期末未领用、未用供应商退货、未用外部转移各自编号集合面积求和，分别形成 survey_opening_intact_unissued_area、survey_igu_receipt_area、survey_closing_intact_unissued_area、survey_unused_supplier_return_area、survey_unused_external_transfer_area。gross_igu_draw 按期初加接收减期末，不能扣可用退出。survey_usable_exit_area 为两个互斥退出之和；survey_forward_area 按唯一实际正向事件求和。survey_discarded_igu_kg 按 complete_igu_mass_bridge 的实际状态方法与完整性条件求得；部分流不允许采用整单元面积构造替代换算，也不得借用别的组合或纯玻璃桥。匹配全部状态的单元事件，保留隔离和在制品，实际各流分别除以 A。原材料负担仅用本节点实际面积池的相容上游因子，不重复制造。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；unit_ID = 实际工厂供应单元编号；actual_unit_width_m = 实际工厂单元外轮廓实测宽度，单位 m；actual_unit_height_m = 实际工厂单元外轮廓实测高度，单位 m；forward_event_ID = 唯一正向移交事件，不能只用单元编号代替；corrective_event_ID = 真实完好单元纠正返回的唯一事件；unit_state_event_IDs = 单元、状态、事件及期间的组合编号；opening_processed_WIP = 按单元状态记录的期初已加工在制品实际面积及原携带负担；processed_receipts = 按单元状态和事件记录的已加工接收；processed_exits = 按单元状态和事件记录的正向、纠正、可用或废物退出；closing_processed_WIP = 按单元状态记录的期末已加工在制品，不含完好未领用库存；carrying_burden_link = 原上游材料及既有实际服务负担只携带一次的台账关联；material_pool_ID = 本节点实际材料、规格、批次和状态池，保持一致投入单位；actual_original_upstream_burden_per_matching_unit = 明确数据集和情景的相容实际上游因子，按对应实际投入单位计，不是假定因子；original_gross_draw_material_burden = 可用退出分开前，已与实际上游数据集核对的总取用原材料负担；actual_usable_exit_quantity = 同投入单位下分别举证的未用供应商退货与外部转移之和；survey_opening_unit_IDs = 期初完好未领用单元的互斥编号集合；survey_receipt_unit_IDs = 实际来料单元编号及接收事件集合；survey_closing_unit_IDs = 期末完好未领用单元的互斥编号集合；survey_supplier_return_unit_IDs = 实际未用可用供应商退货单元及保管交接凭证；survey_external_transfer_unit_IDs = 实际未用可用外部转移单元及保管交接凭证；measured_complete_or_collected_composite_mass_kg = 校准称量的完整或已收集复合中空玻璃净质量，保留相关密封和间隔条；documented_actual_complete_build_kg_per_m2 = 有证据的实际同组合完整中空玻璃单位外形面积质量，包含密封和间隔条；discarded_unit_ID = 本节点实际报废的单元编号；actual_net_discarded_mass_j = 已识别组件或复合单元流 j 的实际净废物质量，只选一种有证据称量或换算方法；site_id = 实际场地；actual_build = 实际单元组合；complete_unit_mass_where_needed = 需要时记录实际完整单元质量；mass_bridge_source = 实际质量换算证据来源；opening_intact_unissued_quantity = 实际期初完好未领用数量；receipts = 实际接收记录；closing_intact_unissued_quantity = 实际期末完好未领用数量；usable_return_ids = 实际可用退货编号；external_transfer_ids = 实际外部转移编号；quarantine_ids = 实际隔离单元编号；wip_ids = 实际在制品编号；custodian = 实际接收保管方；event_timestamp = 实际事件日期时间。 对每个 discard_stream_id 及实际 discard_current_state 只选择一种 discard_mass_method。仅当 complete_unit_discard_confirmed 和 complete_constituent_coverage_evidence 证明该系数代表的确切数量及全部组成均以匹配的 mass_bridge_state 进入本废物流时，才允许整单元面积构造换算。部分、分选或其他状态改变的破损单元废物，应采用扣皮实测流质量，或独立测量且相容的 partial_stream_component_mass_records；不能将完整原单元面积直接乘完好整套 kg/m2 系数。用 other_constituent_fate_ids 将留存、退回、另行弃置或实际释放的部分各记录一次，保持真实废物身份，不再累加整单元与组成质量。覆盖或状态证据缺失阻止该换算，不能抹去原供应负担、据此认定释放或记零。 | m2; kg | 每次接收、库存期间边界、移交或拒收事件 | 对本批次有贡献的全部接收期间及关联期初期末在制品 | 实际场地 survey 保管 | 每参考流 | 供应商标签和组合证书、库存盘点、尺寸记录、校准称量皮重或实际同完整组合桥、移交废物凭证及互斥状态台账。 |
| `cp_survey_packaging` | `survey` | 实际报废运输包装 | 材料分离与废物称量 | lot_id; period_id; event_ID; producing_node; material_pool_ID; gross_packaging_kg; tare_packaging_kg; packaging_driver_by_consumer; packaging_complete_driver_total; actual_net_discarded_mass_j; unit_shipment; material; rack_owner; packaging_state; gross_and_tare_mass; reusable_return_quantity; waste_custodian; event_timestamp | 按实际材料状态分离报废包装并称毛重减皮重，排除可用退回货架。共享运输包装采用覆盖全部单元的有证据物理驱动和正完整分母。survey_discarded_packaging_kg 为本批次实际净废物各流之和，保留所有权及去向后除以 A，不假定每件包装因子。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；material_pool_ID = 本节点实际材料、规格、批次和状态池，保持一致投入单位；gross_packaging_kg = 实际校准称量的报废包装毛质量；tare_packaging_kg = 实际容器皮重；packaging_driver_by_consumer = 所覆盖运输全部使用者各自有证据物理分配驱动；packaging_complete_driver_total = 所覆盖完整运输使用者集合的正驱动总量；actual_net_discarded_mass_j = 已识别组件或复合单元流 j 的实际净废物质量，只选一种有证据称量或换算方法；unit_shipment = 实际单元运输批；material = 实际材料；rack_owner = 实际货架所有者；packaging_state = 实际包装状态；gross_and_tare_mass = 实际毛质量和皮重；reusable_return_quantity = 实际可周转退回数量；waste_custodian = 实际废物接收方；event_timestamp = 实际事件日期时间。 | kg | 每次拆包装或废物发运 | 纳入的全部接收拆包装事件 | survey 拆包装区域 | 每参考流 | 皮重、材料分离照片、货架退回凭证、废物发运凭证及共享包装分配记录。 |
| `cp_glaze_handoffs` | `glaze` | 正向及纠正单元接收和已固定输出 | 配对移交和单元轮次台账 | lot_id; period_id; event_ID; producing_node; unit_ID; rectangular_outline_confirmed; outline_evidence; actual_unit_width_m; actual_unit_height_m; forward_event_ID; corrective_event_ID; unit_state_event_IDs; opening_processed_WIP; processed_receipts; processed_exits; closing_processed_WIP; carrying_burden_link; opening_ID; build; measured_unit_area; pass_id; retained_output_id; event_timestamp; accepted_rejected_wip_state; original_carrying_burden_link | 实际尺寸相乘得 actual_unit_area。每次接收与 survey 正向事件配对；实际完好纠正接收与 accept_rework_return 的事件编号、单元和面积配对。glaze_forward_received_area、glaze_rework_received_area 和 glaze_retained_forward_area 分别按各自独立真实事件流求和，保留纠正轮次及期初期末在制品后除以 A；原玻璃负担随移交，不重新购买。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；unit_ID = 实际工厂供应单元编号；actual_unit_width_m = 实际工厂单元外轮廓实测宽度，单位 m；actual_unit_height_m = 实际工厂单元外轮廓实测高度，单位 m；forward_event_ID = 唯一正向移交事件，不能只用单元编号代替；corrective_event_ID = 真实完好单元纠正返回的唯一事件；unit_state_event_IDs = 单元、状态、事件及期间的组合编号；opening_processed_WIP = 按单元状态记录的期初已加工在制品实际面积及原携带负担；processed_receipts = 按单元状态和事件记录的已加工接收；processed_exits = 按单元状态和事件记录的正向、纠正、可用或废物退出；closing_processed_WIP = 按单元状态记录的期末已加工在制品，不含完好未领用库存；carrying_burden_link = 原上游材料及既有实际服务负担只携带一次的台账关联；opening_ID = 实际洞口编号；build = 实际单元组合；measured_unit_area = 实际单元实测面积；pass_id = 实际作业轮次编号；retained_output_id = 实际已固定输出事件编号；event_timestamp = 实际事件日期时间；accepted_rejected_wip_state = 实际已验收、拒收或在制品状态；original_carrying_burden_link = 原有携带负担关联。 | m2 | 每次保管/关口移交及每次实际纠正轮次 | 首次最终验收前全部安装及纠正期间 | glaze 节点及明确双方移交节点 | 每参考流 | 配对签署移交、实测单元登记、轮次历史、状态照片及携带负担台账。 |
| `cp_glaze_materials` | `glaze` | 新增垫块胶条机械固定件及可用退出 | 物料库存和配装记录 | lot_id; period_id; event_ID; producing_node; material_pool_ID; weighed_net_kg; actual_length_m; documented_same_grade_kg_per_m; actual_count; documented_same_grade_kg_per_item; opening_intact_unissued_i_kg; receipt_i_kg; closing_intact_unissued_i_kg; unused_supplier_return_i_kg; unused_external_transfer_i_kg; actual_original_upstream_burden_per_matching_unit; original_gross_draw_material_burden; actual_usable_exit_quantity; actual_mass_method; actual_grade_and_profile; manufacturer_approval; new_existing_status; opening_intact_unissued_stock; receipts; closing_intact_unissued_stock; length_count_if_recorded; actual_linear_item_mass_bridge; usable_supplier_returns; usable_external_transfers; issued_rework_quantity; wip; exit_custodian | 每实际材料规格事件只选实际净称量、实长乘同牌号型材线质量，或实件数乘同牌号单件质量。actual_material_kg 填入对应期初、接收、期末或可用退出字段。gross_draw_i_kg 为期初加接收减期末完好未领用库存，含实际未用退出；供应商退货与外转分别正记 kg，并从期末库存排除。setting_blocks_gross_draw_kg、gaskets_gross_draw_kg、beads_fasteners_gross_draw_kg 按真实角色物料池求和；glaze_usable_exit_kg 按各材料独立退出求和，先保留身份和原上游因子。已加工拒收和在制品另计，全部纠正新取用保留；既有压条紧固件不计新增购买。各实际流除以 A。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；material_pool_ID = 本节点实际材料、规格、批次和状态池，保持一致投入单位；weighed_net_kg = 实际校准毛重减皮重的净质量；actual_length_m = 该实际材料牌号型材的实测长度；选换算时须有同牌号线质量；documented_same_grade_kg_per_m = 实际同牌号同型材经测量或供应商认证的线质量；actual_count = 实际同牌号同单件编号的件数；documented_same_grade_kg_per_item = 实际同牌号同物件经测量或供应商认证的单件质量；opening_intact_unissued_i_kg = 实际材料 i 期初完好未领用库存，以实称或自身长度件数的同规格桥得到；receipt_i_kg = 实际材料或水 i 接收质量，以实称或明确同规格/水密度桥得到；closing_intact_unissued_i_kg = 实际材料 i 期末完好未领用库存，排除可用退出和在制品；unused_supplier_return_i_kg = 实际材料或水 i 未用可用供应商退货质量；unused_external_transfer_i_kg = 实际材料或水 i 未用可用外部转移质量；actual_original_upstream_burden_per_matching_unit = 明确数据集和情景的相容实际上游因子，按对应实际投入单位计，不是假定因子；original_gross_draw_material_burden = 可用退出分开前，已与实际上游数据集核对的总取用原材料负担；actual_usable_exit_quantity = 同投入单位下分别举证的未用供应商退货与外部转移之和；actual_mass_method = 每个材料事件只选实称、同规格线质量或同规格单件质量方法之一；actual_grade_and_profile = 实际材料牌号和型材；manufacturer_approval = 实际制造商批准；new_existing_status = 实际新增或既有状态；opening_intact_unissued_stock = 实际期初完好未领用库存；receipts = 实际接收记录；closing_intact_unissued_stock = 实际期末完好未领用库存；length_count_if_recorded = 若记录则保留实际长度或件数；actual_linear_item_mass_bridge = 实际同规格线质量或单件质量桥；usable_supplier_returns = 实际可用供应商退货记录；usable_external_transfers = 实际可用外部转移记录；issued_rework_quantity = 实际领用及每次返工取用量；wip = 实际在制品状态与数量；exit_custodian = 实际退出接收保管方。 | kg；实际长度或件数及桥证据 | 每次接收、领用、纠正取用、可用退出及库存边界 | 全部安装期间及关联物料期初期末库存池 | 实际场地 glaze 物料保管 | 每参考流 | 供应商规格及相容批准、校准称量或实际质量桥、库存领用台账、组件安装记录及退出凭证。 |
| `cp_glaze_waste` | `glaze` | 组件边角料及复合中空玻璃破损 | 材料分开废物及拒收台账 | lot_id; period_id; event_ID; producing_node; unit_ID; rectangular_outline_confirmed; outline_evidence; actual_unit_width_m; actual_unit_height_m; forward_event_ID; corrective_event_ID; unit_state_event_IDs; opening_processed_WIP; processed_receipts; processed_exits; closing_processed_WIP; carrying_burden_link; material_pool_ID; weighed_net_kg; actual_length_m; actual_count; documented_same_grade_kg_per_m; documented_same_grade_kg_per_item; measured_complete_or_collected_composite_mass_kg; documented_actual_complete_build_kg_per_m2; actual_net_discarded_mass_j; actual_mass_method; actual_build_or_material_grade; rejected_state; event_pass_id; net_waste_mass; tare; exact_build_mass_bridge_if_used; collection_method; destination; custodian; event_timestamp; discard_stream_id; discard_mass_method; complete_unit_discard_confirmed; complete_constituent_coverage_evidence; discard_current_state; mass_bridge_state; partial_stream_component_mass_records; other_constituent_fate_ids; mass_method_evidence | 区分实际组件边角料、复合中空玻璃废物及可用退出。各实际材料状态按净实称或匹配规格桥得到质量。actual_discarded_unit_area 按报废单元实测外形面积求和；glaze_discarded_igu_kg 按完整复合单元称量或实际同完整组合桥得到，保留密封间隔条，不能用玻璃厚度密度代替。glaze_component_waste_kg 仅汇总非中空玻璃组件质量，二者保留独立流。按 glaze 实际事件和接收方核对输入/在制品，再除以 A。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；unit_ID = 实际工厂供应单元编号；actual_unit_width_m = 实际工厂单元外轮廓实测宽度，单位 m；actual_unit_height_m = 实际工厂单元外轮廓实测高度，单位 m；forward_event_ID = 唯一正向移交事件，不能只用单元编号代替；corrective_event_ID = 真实完好单元纠正返回的唯一事件；unit_state_event_IDs = 单元、状态、事件及期间的组合编号；opening_processed_WIP = 按单元状态记录的期初已加工在制品实际面积及原携带负担；processed_receipts = 按单元状态和事件记录的已加工接收；processed_exits = 按单元状态和事件记录的正向、纠正、可用或废物退出；closing_processed_WIP = 按单元状态记录的期末已加工在制品，不含完好未领用库存；carrying_burden_link = 原上游材料及既有实际服务负担只携带一次的台账关联；material_pool_ID = 本节点实际材料、规格、批次和状态池，保持一致投入单位；weighed_net_kg = 实际校准毛重减皮重的净质量；actual_length_m = 该实际材料牌号型材的实测长度；选换算时须有同牌号线质量；actual_count = 实际同牌号同单件编号的件数；documented_same_grade_kg_per_m = 实际同牌号同型材经测量或供应商认证的线质量；documented_same_grade_kg_per_item = 实际同牌号同物件经测量或供应商认证的单件质量；measured_complete_or_collected_composite_mass_kg = 校准称量的完整或已收集复合中空玻璃净质量，保留相关密封和间隔条；documented_actual_complete_build_kg_per_m2 = 有证据的实际同组合完整中空玻璃单位外形面积质量，包含密封和间隔条；actual_net_discarded_mass_j = 已识别组件或复合单元流 j 的实际净废物质量，只选一种有证据称量或换算方法；actual_mass_method = 每个材料事件只选实称、同规格线质量或同规格单件质量方法之一；actual_build_or_material_grade = 实际单元组合或材料牌号；rejected_state = 实际拒收状态；event_pass_id = 实际事件和轮次编号；net_waste_mass = 实际废物净质量；tare = 实际皮重；exact_build_mass_bridge_if_used = 如采用则保留实际同组合完整质量换算桥；collection_method = 实际采集方法记录；destination = 实际去向；custodian = 实际接收保管方；event_timestamp = 实际事件日期时间。 对每个 discard_stream_id 及实际 discard_current_state 只选择一种 discard_mass_method。仅当 complete_unit_discard_confirmed 和 complete_constituent_coverage_evidence 证明该系数代表的确切数量及全部组成均以匹配的 mass_bridge_state 进入本废物流时，才允许整单元面积构造换算。部分、分选或其他状态改变的破损单元废物，应采用扣皮实测流质量，或独立测量且相容的 partial_stream_component_mass_records；不能将完整原单元面积直接乘完好整套 kg/m2 系数。用 other_constituent_fate_ids 将留存、退回、另行弃置或实际释放的部分各记录一次，保持真实废物身份，不再累加整单元与组成质量。覆盖或状态证据缺失阻止该换算，不能抹去原供应负担、据此认定释放或记零。 | kg | 每次拒收或废物发运 | 本批次纳入的全部安装及纠正事件 | glaze 废物产生至首个保管方移交 | 每参考流 | 实际称量皮重和桥证据、破损照片、单元轮次台账、废物移交及处理边界。 |
| `cp_glaze_releases` | `glaze` | 实际条件性非 H2O 组件配装修整直接释放 | 真实发生、物种测量或独立验证因子记录 | lot_id; period_id; event_ID; producing_node; actual_component_material_ID; species; physical_state_particle_fraction; receiving_medium; release_occurrence_evidence; release_method; measured_species_mass_kg; actual_activity; validated_applicable_species_factor; control_capture_boundary; release_uncertainty; excluded_captured_waste_event_IDs; sampled_air_volume_m3; measurement_scope; source_boundary; background_corrected_concentration_mg_m3; actual_source_flow_m3_s; interval_duration_s; gas_state_basis; source_coverage_evidence; measured_total_release_kg; total_release_method; control_factor_basis; measured_source_concentration_mg_m3; measured_background_concentration_mg_m3; background_correction_method; source_flow_measurement_evidence | 记录实际组件配装修整、实际材料和纠正事件；独立证实是否直接释放，并确定物种、状态或颗粒及环境介质。每事件只选具有完整环境源覆盖证据的直接释放总质量或适用独立验证的实际活动/控制特定因子；actual_release_species_kg 与 glaze_species_release_kg 只表示本节点真实结果，不累加两种方法。捕集边角料粉尘仍在 cp_glaze_waste，并通过 excluded_captured_waste_event_IDs 排除重记。发生、物种、介质或量未知均为缺口，非零；只有实际未发生证据才记零。不从缺失边角料、捕集废物或库存残差推释放，不许可中空玻璃现场切磨或结构湿密封。各唯一实际事件及纠正求和后除以 A。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；actual_component_material_ID = 涉及的新胶条、垫块、压条或机械固定件实际材料牌号，不包括中空玻璃现场切割；species = 具备身份依据的实际释放物种或材料物种；physical_state_particle_fraction = 实际物态或粒径材料分数，不推定通用粉尘身份；receiving_medium = 实际环境接收介质；release_occurrence_evidence = 独立实际观察、测量或操作验证的释放发生/未发生证据；release_method = 每个实际事件只选直接质量或适用活动因子方法；measured_species_mass_kg = 具有完整环境源覆盖证据的实际事件物种直接释放总质量，不是采样器捕集质量；actual_activity = 实际本节点操作或纠正活动，以匹配独立验证因子单位记录；validated_applicable_species_factor = 有独立证据编号和不确定性的实际材料、物种、活动及控制特定适用因子；control_capture_boundary = 实际控制捕集边界，捕集边角料和粉尘仍为废物；release_uncertainty = 实际测量或因子及代表性不确定性；excluded_captured_waste_event_IDs = 从直接释放排除的实际安装捕集废物事件，避免重叠。 量化实际环境边界上整个事件的释放量，不能用采样器捕集的质量代替。对具备代表性实测的源气流，保留背景校正浓度、完整源气流流量及匹配时长，温压和干湿基一致。仅有采样泵抽气体积或职业/室内暴露浓度不能确定事件总量。无组织释放采用经验证的场址特定总通量方法或受支持活动因子模型，保留实际事件覆盖与不确定性；覆盖未知仍为缺口。排除捕集废物；下游释放实测或已含控制效果的释放因子不能再扣捕集量。每个真实物种、粒径、介质事件只汇总一次，并只除以 A 一次。 保留原始 measured_source_concentration_mg_m3、measured_background_concentration_mg_m3、经验证 background_correction_method 及 source_flow_measurement_evidence；原始观测和方法须支持 background_corrected_concentration_mg_m3 与实际流量。 | kg; mg/m3; m3; m3/s; s；实际活动及因子单位 | 每次实际组件配装修整或具有可能释放的纠正事件 | 首次验收前全部相关安装及纠正期间 | glaze 及实际环境接收介质 | 每参考流 | 真实物料操作和发生证据、物种粒径介质身份、直接采样或适用独立验证因子、实际控制边界、捕集废物排除、不确定性及唯一事件台账。 |
| `cp_accept_handoffs` | `accept` | 已固定接收、完好纠正返回及最终服务 | 移交台账、检查及签署验收 | lot_id; period_id; event_ID; producing_node; unit_ID; rectangular_outline_confirmed; outline_evidence; actual_unit_width_m; actual_unit_height_m; forward_event_ID; corrective_event_ID; unit_state_event_IDs; opening_processed_WIP; processed_receipts; processed_exits; closing_processed_WIP; carrying_burden_link; accepted_unit_ID; acceptance_timestamp; acceptance_status; opening_ID; area_convention; forward_event_pass_id; inspection_result; support_retention_and_gasket_inspection; drainage_status; surface_edge_condition; clean_status; held_rejected_state; acceptance_signature; original_burden_link | 将实际已固定接收与 glaze 正向事件配对，逐单元实测外形尺寸相乘，记录各次检验及完好纠正返回。actual_unit_area 的唯一最终验收子集为 accepted_unit_area，汇总成正值 A，须已批准支承、固定、排水、清洁及无损。待决、拒收和重复轮次不入 A。accept_forward_received_area 与 accept_rework_sent_area 分别按唯一真实事件求和，反向匹配 glaze_rework_feed。内部流除以 A；最终输出 A/A = 1 m2。其他节点仅共享 A 作最终分母，不用 A 替代自身原始数量。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；unit_ID = 实际工厂供应单元编号；actual_unit_width_m = 实际工厂单元外轮廓实测宽度，单位 m；actual_unit_height_m = 实际工厂单元外轮廓实测高度，单位 m；forward_event_ID = 唯一正向移交事件，不能只用单元编号代替；corrective_event_ID = 真实完好单元纠正返回的唯一事件；unit_state_event_IDs = 单元、状态、事件及期间的组合编号；opening_processed_WIP = 按单元状态记录的期初已加工在制品实际面积及原携带负担；processed_receipts = 按单元状态和事件记录的已加工接收；processed_exits = 按单元状态和事件记录的正向、纠正、可用或废物退出；closing_processed_WIP = 按单元状态记录的期末已加工在制品，不含完好未领用库存；carrying_burden_link = 原上游材料及既有实际服务负担只携带一次的台账关联；accepted_unit_ID = 经签署支承、固定、排水、清洁和无损最终验收的唯一实际单元编号；acceptance_timestamp = 实际最终验收日期时间；acceptance_status = 逐事件实际验收、保留、拒收或返回状态；opening_ID = 实际洞口编号；area_convention = 实际面积口径；forward_event_pass_id = 实际正向事件及轮次编号；inspection_result = 实际检查结果；support_retention_and_gasket_inspection = 实际支承、机械固定和胶条检查结果；drainage_status = 实际排水状态；surface_edge_condition = 实际表面及边缘状态；clean_status = 实际清洁状态；held_rejected_state = 实际保留或拒收状态；acceptance_signature = 实际验收签字；original_burden_link = 原有负担关联。 | m2 | 每次移交、检查、纠正及最终验收 | 首次验收前全部最终检查及纠正期间 | accept 节点和客户验收关口 | 每参考流 | 配对移交台账、实测单元登记、工程和制造商验收细则、排水固定检查表及唯一单元签署验收。 |
| `cp_accept_water` | `accept` | 供水、实际收集废水和独立举证水蒸气 | 水库存水表、去向和独立证据记录 | lot_id; period_id; event_ID; producing_node; opening_intact_unused_i_kg; receipt_i_kg; closing_intact_unused_i_kg; unused_supplier_return_i_kg; unused_external_transfer_i_kg; water_volume_m3; evidenced_water_density_kg_per_m3; opening_processed_retained_water_kg; actual_collected_wastewater_mixture_kg; wastewater_water_content; closing_processed_retained_water_kg; other_separately_measured_collected_water_kg; independently_evidenced_cleaning_H2O_vapour_kg; vapour_species; vapour_receiving_medium; evaporation_evidence_ID; water_fraction_uncertainty; material_pool_ID; actual_original_upstream_burden_per_matching_unit; original_gross_draw_material_burden; actual_usable_exit_quantity; water_provider_grade; opening_intact_unused_water; water_receipts_or_metered_supply; closing_unused_water; usable_water_returns_and_transfers; cleaning_event; water_content_of_cleaning_formulations; wastewater_mixture_mass_and_water_fraction; water_in_spent_wipes; opening_closing_retained_surface_or_equipment_water; actual_h2o_vapour_measurement_or_validated_evaporation_evidence; rain_runoff_exclusion; fate_id; uncertainty | 实际称水，或 water_volume_m3 * evidenced_water_density_kg_per_m3 得接收 kg。供水池期初加接收减期末未用库存为 cleanup_water_gross_draw_kg；actual_unused_water_exit_kg 为本水池互斥未用退货和外转，单独正输出。实际废水混合物 kg 与其水分数相乘得 collected_wastewater_water_kg；accept_collected_wastewater_kg 是同一实际混合物质量，不重复纯水输出。spent_wipe_water_kg 按同一去向事件从 cp_accept_waste 引入，独立保留期初期末表面设备在制水及其他收集水。actual_water_in_consumed_cleaning_formulations_kg 由 cp_accept_materials 的 cleaning_formulation_water 提供，不能包含未用配方退出。evidenced_water_vapour_kg、accept_evidenced_water_vapour_kg 均为独立举证的实际 H2O 至 air / unspecified，不用水残差。各去向互斥，排除降雨径流；量与不确定性核对后各流除以 A，未闭合仍为缺口。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；opening_intact_unused_i_kg = 实际清洁保护材料或供水 i 期初完好未用质量；receipt_i_kg = 实际材料或水 i 接收质量，以实称或明确同规格/水密度桥得到；closing_intact_unused_i_kg = 实际材料或水 i 期末完好未用质量，排除退出及已加工在制品；unused_supplier_return_i_kg = 实际材料或水 i 未用可用供应商退货质量；unused_external_transfer_i_kg = 实际材料或水 i 未用可用外部转移质量；water_volume_m3 = 采用体积方法时实际水表或量测体积；evidenced_water_density_kg_per_m3 = 该次实际水质温度的有证据密度桥；opening_processed_retained_water_kg = 期初已加工表面设备或在制品中独立测量或验证的实际保留水；actual_collected_wastewater_mixture_kg = 校准称量的实际收集废水混合物质量，不假定为纯水；wastewater_water_content = 实际废水混合物实测或独立举证的水质量分数；closing_processed_retained_water_kg = 期末表面设备或在制品独立测量或验证的实际保留水；other_separately_measured_collected_water_kg = 独立识别收集残渣中实测水组分，排除废水及废擦拭物含水；independently_evidenced_cleaning_H2O_vapour_kg = 实际直接 H2O 蒸气测量或独立验证的操作特定蒸发结果，有方法事件编号；绝非水缺口残差；vapour_species = H2O；vapour_receiving_medium = air / unspecified，不声明更细空气子介质；evaporation_evidence_ID = 独立实际测量或操作验证证据编号；water_fraction_uncertainty = 实际水组分测量不确定性及代表性；material_pool_ID = 本节点实际材料、规格、批次和状态池，保持一致投入单位；actual_original_upstream_burden_per_matching_unit = 明确数据集和情景的相容实际上游因子，按对应实际投入单位计，不是假定因子；original_gross_draw_material_burden = 可用退出分开前，已与实际上游数据集核对的总取用原材料负担；actual_usable_exit_quantity = 同投入单位下分别举证的未用供应商退货与外部转移之和；water_provider_grade = 实际供水方及水等级；opening_intact_unused_water = 实际期初完好未用水；water_receipts_or_metered_supply = 实际接收水或水表供水记录；closing_unused_water = 实际期末未用水；usable_water_returns_and_transfers = 实际可用水退货和转移记录；cleaning_event = 实际清洁事件；water_content_of_cleaning_formulations = 实际清洁配方含水证据；wastewater_mixture_mass_and_water_fraction = 实际废水混合物质量及水分数；water_in_spent_wipes = 实际废擦拭物含水；opening_closing_retained_surface_or_equipment_water = 实际期初期末表面或设备保留水；actual_h2o_vapour_measurement_or_validated_evaporation_evidence = 实际 H2O 蒸气测量或独立验证的蒸发证据；rain_runoff_exclusion = 排除实际降雨及建筑径流的记录；fate_id = 实际互斥去向编号；uncertainty = 实际数据不确定性。 | kg；原水表体积及桥证据 | 每次清洁、收集、可用退出及库存边界 | 全部清洁复清洁及关联期初期末水池 | accept 清洁区域、实际水收集和空气释放 | 每参考流 | 水表秤记录、适用的实际密度桥、配方/SDS 水分数、废水称量、湿/干擦拭物实际水特定测定、保留水证据、独立蒸发验证、不确定性及水闭合台账。 |
| `cp_accept_materials` | `accept` | 清洁保护耗材及包括供水的可用退出 | 物料库存及退出台账 | lot_id; period_id; event_ID; producing_node; material_pool_ID; weighed_net_kg; actual_length_m; documented_same_grade_kg_per_m; actual_count; documented_same_grade_kg_per_item; opening_intact_unissued_i_kg; receipt_i_kg; closing_intact_unissued_i_kg; unused_supplier_return_i_kg; unused_external_transfer_i_kg; actual_original_upstream_burden_per_matching_unit; original_gross_draw_material_burden; actual_usable_exit_quantity; opening_intact_unused_i_kg; closing_intact_unused_i_kg; evidenced_actual_water_fraction_i; cleaning_formulation_pool_ID; actual_mass_method; water_exit_event_ID; actual_material_provider; formulation_grade; coating_compatibility; opening_intact_unissued_stock; receipts; closing_intact_unissued_stock; reusable_equipment_status; original_length_count; actual_mass_bridge; unused_water_exit_ids; usable_supplier_returns; usable_external_transfers; destination; wip | 每种实际清洁保护材料按实称或真实同规格长度件数桥记录。cleanup_gross_draw_i_kg 为期初加接收减期末完好未用库存，cleanup_supplies_gross_draw_kg 只汇总清洁保护池，排除已单列供水。逐含水实际配方，consumed_formulation_i_kg = cleanup_gross_draw_i_kg - unused_supplier_return_i_kg - unused_external_transfer_i_kg，乘 独立举证的 evidenced_actual_water_fraction_i 后只汇总实际含水配方，得到 actual_water_in_consumed_cleaning_formulations_kg；绝不能用含未用退出的总配方质量计算消耗水。实际未用退货和外转按相应投入 kg 正记，水退出与 cp_accept_water 的 water_exit_event_ID 配对只记一次，形成 accept_usable_cleanup_exit_kg。退出排除在期末库存外；区分已加工在制品、废料及周转设备，原材料负担不带服务。各流除以 A。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；material_pool_ID = 本节点实际材料、规格、批次和状态池，保持一致投入单位；weighed_net_kg = 实际校准毛重减皮重的净质量；actual_length_m = 该实际材料牌号型材的实测长度；选换算时须有同牌号线质量；documented_same_grade_kg_per_m = 实际同牌号同型材经测量或供应商认证的线质量；actual_count = 实际同牌号同单件编号的件数；documented_same_grade_kg_per_item = 实际同牌号同物件经测量或供应商认证的单件质量；opening_intact_unissued_i_kg = 实际材料 i 期初完好未领用库存，以实称或自身长度件数的同规格桥得到；receipt_i_kg = 实际材料或水 i 接收质量，以实称或明确同规格/水密度桥得到；closing_intact_unissued_i_kg = 实际材料 i 期末完好未领用库存，排除可用退出和在制品；unused_supplier_return_i_kg = 实际材料或水 i 未用可用供应商退货质量；unused_external_transfer_i_kg = 实际材料或水 i 未用可用外部转移质量；actual_original_upstream_burden_per_matching_unit = 明确数据集和情景的相容实际上游因子，按对应实际投入单位计，不是假定因子；original_gross_draw_material_burden = 可用退出分开前，已与实际上游数据集核对的总取用原材料负担；actual_usable_exit_quantity = 同投入单位下分别举证的未用供应商退货与外部转移之和；opening_intact_unused_i_kg = 实际清洁保护材料或供水 i 期初完好未用质量；closing_intact_unused_i_kg = 实际材料或水 i 期末完好未用质量，排除退出及已加工在制品；evidenced_actual_water_fraction_i = 实际清洁配方 i 的实测或实际供应商配方水质量分数，保留证据编号及不确定性；cleaning_formulation_pool_ID = 实际含水清洁配方 i 的牌号批次池，排除独立供水及干保护材料；actual_mass_method = 每个材料事件只选实称、同规格线质量或同规格单件质量方法之一；water_exit_event_ID = 与 cp_accept_water 匹配且只计一次的未用水退出事件；actual_material_provider = 实际材料及供应商；formulation_grade = 实际配方或牌号；coating_compatibility = 实际镀膜相容性；opening_intact_unissued_stock = 实际期初完好未领用库存；receipts = 实际接收记录；closing_intact_unissued_stock = 实际期末完好未领用库存；reusable_equipment_status = 实际周转设备状态；original_length_count = 原始实际长度或件数；actual_mass_bridge = 实际匹配材料的质量换算桥；unused_water_exit_ids = 实际未用水退出编号；usable_supplier_returns = 实际可用供应商退货记录；usable_external_transfers = 实际可用外部转移记录；destination = 实际去向；wip = 实际在制品状态与数量。 | kg；原始件数或长度及换算桥 | 每次接收、领用、清洁纠正、可用退出及库存边界 | 全部纳入的清洁保护期间 | accept 保管及首个可用退出接收方 | 每参考流 | 供应商/SDS 与相容证据、校准称量或匹配桥、库存领用台账、供水交叉关联、退货外转凭证及唯一事件归属。 |
| `cp_accept_waste` | `accept` | 废清洁固体及晚期复合玻璃报废 | 废物分离称量及单元拒收记录 | lot_id; period_id; event_ID; producing_node; unit_ID; rectangular_outline_confirmed; outline_evidence; actual_unit_width_m; actual_unit_height_m; forward_event_ID; corrective_event_ID; unit_state_event_IDs; opening_processed_WIP; processed_receipts; processed_exits; closing_processed_WIP; carrying_burden_link; material_pool_ID; weighed_net_kg; actual_length_m; actual_count; documented_same_grade_kg_per_m; documented_same_grade_kg_per_item; measured_complete_or_collected_composite_mass_kg; documented_actual_complete_build_kg_per_m2; actual_net_discarded_mass_j; spent_wipe_wet_mass_kg; measured_spent_wipe_water_fraction; wipe_water_evidence_ID; actual_mass_method; actual_igu_build; waste_state; event_pass_id; wet_mass; tare; measured_water_content; independently_weighed_composite_igu_mass_or_exact_build_bridge; rejected_state; destination; custodian; event_timestamp; discard_stream_id; discard_mass_method; complete_unit_discard_confirmed; complete_constituent_coverage_evidence; discard_current_state; mass_bridge_state; partial_stream_component_mass_records; other_constituent_fate_ids; mass_method_evidence | 分别称实际废擦拭物、保护料及残渣湿混合物净质量，不包括另收废水，得 accept_collected_solid_waste_kg。spent_wipe_water_kg = spent_wipe_wet_mass_kg * measured_spent_wipe_water_fraction，含水须水特定独立验证，其他挥发清洁组分使一般湿减干法不足；同一含水去向提供给 cp_accept_water，不另记物理输出。另称 accept 实际报废复合中空玻璃，或用报废实际面积和同完整组合质量桥得 accept_discarded_igu_kg。保留组合及单元，不用纯玻璃质量；完好纠正和待决均不属废物。按真实接收方和事件核对后各废物流除以 A。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；unit_ID = 实际工厂供应单元编号；actual_unit_width_m = 实际工厂单元外轮廓实测宽度，单位 m；actual_unit_height_m = 实际工厂单元外轮廓实测高度，单位 m；forward_event_ID = 唯一正向移交事件，不能只用单元编号代替；corrective_event_ID = 真实完好单元纠正返回的唯一事件；unit_state_event_IDs = 单元、状态、事件及期间的组合编号；opening_processed_WIP = 按单元状态记录的期初已加工在制品实际面积及原携带负担；processed_receipts = 按单元状态和事件记录的已加工接收；processed_exits = 按单元状态和事件记录的正向、纠正、可用或废物退出；closing_processed_WIP = 按单元状态记录的期末已加工在制品，不含完好未领用库存；carrying_burden_link = 原上游材料及既有实际服务负担只携带一次的台账关联；material_pool_ID = 本节点实际材料、规格、批次和状态池，保持一致投入单位；weighed_net_kg = 实际校准毛重减皮重的净质量；actual_length_m = 该实际材料牌号型材的实测长度；选换算时须有同牌号线质量；actual_count = 实际同牌号同单件编号的件数；documented_same_grade_kg_per_m = 实际同牌号同型材经测量或供应商认证的线质量；documented_same_grade_kg_per_item = 实际同牌号同物件经测量或供应商认证的单件质量；measured_complete_or_collected_composite_mass_kg = 校准称量的完整或已收集复合中空玻璃净质量，保留相关密封和间隔条；documented_actual_complete_build_kg_per_m2 = 有证据的实际同组合完整中空玻璃单位外形面积质量，包含密封和间隔条；actual_net_discarded_mass_j = 已识别组件或复合单元流 j 的实际净废物质量，只选一种有证据称量或换算方法；spent_wipe_wet_mass_kg = 收集废擦拭物实际净混合物湿质量，包含水；measured_spent_wipe_water_fraction = 该实际擦拭物独立验证的水质量分数，区别其他挥发性清洁组分；wipe_water_evidence_ID = 实际水特定组分测量或验证方法及代表性样本关联；actual_mass_method = 每个材料事件只选实称、同规格线质量或同规格单件质量方法之一；actual_igu_build = 实际中空玻璃组合；waste_state = 实际废物状态；event_pass_id = 实际事件和轮次编号；wet_mass = 实际湿质量；tare = 实际皮重；measured_water_content = 实际实测含水；independently_weighed_composite_igu_mass_or_exact_build_bridge = 实际独立复合中空玻璃称量或同组合完整质量桥；rejected_state = 实际拒收状态；destination = 实际去向；custodian = 实际接收保管方；event_timestamp = 实际事件日期时间。 对每个 discard_stream_id 及实际 discard_current_state 只选择一种 discard_mass_method。仅当 complete_unit_discard_confirmed 和 complete_constituent_coverage_evidence 证明该系数代表的确切数量及全部组成均以匹配的 mass_bridge_state 进入本废物流时，才允许整单元面积构造换算。部分、分选或其他状态改变的破损单元废物，应采用扣皮实测流质量，或独立测量且相容的 partial_stream_component_mass_records；不能将完整原单元面积直接乘完好整套 kg/m2 系数。用 other_constituent_fate_ids 将留存、退回、另行弃置或实际释放的部分各记录一次，保持真实废物身份，不再累加整单元与组成质量。覆盖或状态证据缺失阻止该换算，不能抹去原供应负担、据此认定释放或记零。 | kg | 每次清洁废物或单元报废 | 本批次全部纳入检查清洁及纠正期间 | accept 废物产生至首个保管方移交 | 每参考流 | 实际秤皮重、湿/干材料水特定测定、实际单元组合质量桥、报废决定、废物发运凭证及水交叉关联。 |
| `cp_accept_releases` | `accept` | 实际非另计 H2O 物种介质直接释放 | 直接释放测量或独立验证活动因子记录 | lot_id; period_id; event_ID; producing_node; measured_species_mass_kg; actual_activity; validated_applicable_species_factor; species; receiving_medium; release_method; event; actual_cleaning_chemistry; substance_species; cas_where_available; physical_state_particle_fraction; receiving_compartment; concentration_source_flow_time_or_activity_factor_evidence; capture_efficiency_where_relevant; mass_unit; uncertainty; excluded_collected_waste_and_h2o_vapour_ids; sampled_air_volume_m3; measurement_scope; source_boundary; background_corrected_concentration_mg_m3; actual_source_flow_m3_s; interval_duration_s; gas_state_basis; source_coverage_evidence; measured_total_release_kg; total_release_method; control_factor_basis; measured_source_concentration_mg_m3; measured_background_concentration_mg_m3; background_correction_method; source_flow_measurement_evidence | 先确定实际清洁化学、物种、状态或颗粒基准及环境介质。每个实际事件只用可追溯直接测量质量，或适用独立验证的活动因子与实际活动、控制捕集边界得到 actual_release_species_kg；accept_species_release_kg 是本节点各物种介质结果别名。保留浓度、实际源气流、时长和覆盖证据，或实际活动及因子证据与不确定性。排除收集废物废水及另计 H2O，不将直接质量再加因子估计，不合成通用 VOC/粉尘。缺测为缺口，不是假零；各量除以 A。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；measured_species_mass_kg = 具有完整环境源覆盖证据的实际事件物种直接释放总质量，不是采样器捕集质量；actual_activity = 实际本节点操作或纠正活动，以匹配独立验证因子单位记录；validated_applicable_species_factor = 有独立证据编号和不确定性的实际材料、物种、活动及控制特定适用因子；species = 具备身份依据的实际释放物种或材料物种；receiving_medium = 实际环境接收介质；release_method = 每个实际事件只选直接质量或适用活动因子方法；event = 实际操作事件；actual_cleaning_chemistry = 实际清洁化学组成；substance_species = 实际物质或物种；cas_where_available = 有记录时保留实际 CAS 编号；physical_state_particle_fraction = 实际物态或粒径材料分数，不推定通用粉尘身份；receiving_compartment = 实际环境接收分区；concentration_source_flow_time_or_activity_factor_evidence = 浓度及实际源气流、时长和覆盖证据，或实际活动及独立验证因子；capture_efficiency_where_relevant = 适用时实际捕集效率；mass_unit = 实际原始质量单位；uncertainty = 实际数据不确定性；excluded_collected_waste_and_h2o_vapour_ids = 排除重计的收集废物及 H2O 蒸气事件编号。 量化实际环境边界上整个事件的释放量，不能用采样器捕集的质量代替。对具备代表性实测的源气流，保留背景校正浓度、完整源气流流量及匹配时长，温压和干湿基一致。仅有采样泵抽气体积或职业/室内暴露浓度不能确定事件总量。无组织释放采用经验证的场址特定总通量方法或受支持活动因子模型，保留实际事件覆盖与不确定性；覆盖未知仍为缺口。排除捕集废物；下游释放实测或已含控制效果的释放因子不能再扣捕集量。每个真实物种、粒径、介质事件只汇总一次，并只除以 A 一次。 保留原始 measured_source_concentration_mg_m3、measured_background_concentration_mg_m3、经验证 background_correction_method 及 source_flow_measurement_evidence；原始观测和方法须支持 background_corrected_concentration_mg_m3 与实际流量。 | kg; mg/m3; m3; m3/s; s；实际活动及因子单位 | 每次实际释放操作或有代表性的独立验证测量期间 | 本批次全部相关清洁复清洁操作 | accept 及实际环境接收介质 | 每参考流 | 直接采样报告或独立验证因子来源及适用性、实际化学身份、捕集边界、测量不确定性与重复排放检查。 |
| `cp_survey_power` | `survey` | 本节点实际电力 | 实际电表与完整共享归属记录 | lot_id; period_id; event_ID; producing_node; supplier_id; meter_ID; master_period_ID; power_accounting_mode; direct_node_kwh; actual_MJ; original_energy_unit; shared_total_kwh; actual_node_weight; actual_weights_of_all_consumers; bundled_energy_scope; supplier; voltage; technology_mix; start_end_readings; direct_attributable_kwh; shared_total_event_id; complete_consumer_list; actual_causal_weight_per_consumer; total_weight; allocated_share; service_bundle_boundary | 逐实际期间记录本节点电表起止差量、供应商、电压及电力技术组合。原记录为 MJ 时按 energy_unit_conversion 得 actual_kwh；已为 kWh 则保留。每个重叠 master_period_ID 在所有节点中仅选一个模式：direct_complete 采用覆盖完整区间的 direct_node_kwh，不再加整主表分配；shared_full 采用一次共享主量，按实际完整使用者集合正权重求 node_kwh，不另加任何重叠直接量。禁止部分直接量加完整主量份额，本方法不声明部分直接加残余；直接覆盖不足时，用完整有证据 shared_full 替代且不另加部分电表，或保留缺口。own_node_period_kwh 仅为选定方法数量别名；survey_attributed_kwh 对本节点真实纳入期间求和，排除已含在计费服务内的电力。全部使用者包括其他工程，各份额与一次主量核对后除以 A。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；supplier_id = 实际期间特定供应商；meter_ID = 实际本节点或共享主电表编号；master_period_ID = 真实互不重叠计量区间及主事件所有者；power_accounting_mode = 每个重叠主期间仅选 direct_complete 或 shared_full；direct_node_kwh = 本节点覆盖完整纳入区间的实际电表差量 kWh，仅 direct_complete 使用；actual_MJ = 原始记录确为 MJ 时的实际电力 MJ；original_energy_unit = 换算前保留的实际电表发票单位；shared_total_kwh = 一次记录的完整共享主期间 kWh，仅 shared_full 使用；actual_node_weight = 完整共享区间中有实际证据的本节点权重；actual_weights_of_all_consumers = 同主区间覆盖的完整实际使用者权重向量，包括其他工程及期间；bundled_energy_scope = 合同服务已含电力范围及排除重复的证据；supplier = 实际供应商；voltage = 实际电压；technology_mix = 实际技术及电力组合；start_end_readings = 实际起止读数；direct_attributable_kwh = 实际直接归属 kWh；shared_total_event_id = 共享总量唯一事件编号；complete_consumer_list = 全部实际使用者清单；actual_causal_weight_per_consumer = 各实际使用者有因果依据的权重；total_weight = 完整实际权重之和；allocated_share = 实际计算归属份额；service_bundle_boundary = 实际服务已含项目边界。 | kWh；适用时保留原始 MJ | 每个电表期间及共享使用者集合变更 | 全部纳入 survey 及纠正期间 | 实际 survey 活动，且共享总量覆盖全部外部使用者 | 每参考流 | 电表校准及读数、实际供应商发票、完整使用者权重及理由、原单位换算、服务已含范围检查和分配闭合。 |
| `cp_survey_service` | `survey` | 本节点实际合同可用服务 | 实际合同发票及可用时间归属记录 | lot_id; period_id; event_ID; producing_node; provider_id; asset_service_ID; contract_ID; recorded_actual_paid_hours; billed_days; documented_contract_hours_per_day; actual_node_contract_weight; actual_contract_weights_of_all_consumers; paid_idle_hours; contract_accounting_mode; provider; asset_service_identity; scope_and_bundled_energy_operator; actual_start_end; billed_unit; actual_paid_hours_or_contract_specific_hours_per_day; master_event_id; all_consumer_periods; reserved_availability_or_causal_weights; complete_positive_weight_sum; node_share; correction_use | 核查实际供应商、资产、合同、发票及已含能源操作员运输设备范围。付费可用小时包含闲置；actual_contract_hours 来自实付小时，或真实计费天数乘有条款证据的合同每日小时，不能默认班次。直接本节点合同的 own_node_attributed_paid_hours 为实际合同小时；共享合同则为一次总合同小时按实际完整使用者正权重得到的 node_service_hours，不能再加整发票或重叠直接量。权重采用实际预留可用量或其他有证据驱动，保留付费闲置及预留责任，不暗换工具有效时间。survey_attributed_contract_hours 对本节点批次真实期间及纠正求和；各使用者份额核对总量，防止已含范围重计，再除以 A。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；provider_id = 实际服务提供方；asset_service_ID = 实际资产及合同服务身份；contract_ID = 实际合同与一次归属的发票期间；recorded_actual_paid_hours = 实际计费付费可用小时，包括付费闲置；billed_days = 实际按天计费合同的发票天数；documented_contract_hours_per_day = 实际合同每计费天小时及条款证据，不默认八小时；actual_node_contract_weight = 本节点批次期间实际预留可用量或其他有证据合同驱动；actual_contract_weights_of_all_consumers = 全部实际合同使用者权重向量，包括其他工程及期间；paid_idle_hours = 保留在总边界中的实际付费闲置小时；contract_accounting_mode = 本节点直接合同或共享合同，同一发票重叠数量互斥；provider = 实际服务提供方；asset_service_identity = 实际资产或服务身份；scope_and_bundled_energy_operator = 实际范围及已含能源、操作员；actual_start_end = 实际起止时间；billed_unit = 实际计费单位；actual_paid_hours_or_contract_specific_hours_per_day = 实际付费小时或有证据的具体合同每日小时；master_event_id = 一次记录的实际主事件编号；all_consumer_periods = 全部实际使用者及期间；reserved_availability_or_causal_weights = 实际预留可用量或有因果依据的权重；complete_positive_weight_sum = 完整使用者权重之和，须为正；node_share = 实际本节点份额；correction_use = 实际纠正使用。 | h；原计费单位 | 每个合同发票期间及使用者集合变更 | 全部 survey 付费服务期间，包括闲置及纠正 | 实际 survey 使用，且覆盖共享合同全部使用者 | 每参考流 | 实际供应商合同发票、必要的具体合同每日小时证据、付费闲置和预留可用台账、完整权重、已含范围声明及归属闭合。 |
| `cp_glaze_power` | `glaze` | 本节点实际电力 | 实际电表与完整共享归属记录 | lot_id; period_id; event_ID; producing_node; supplier_id; meter_ID; master_period_ID; power_accounting_mode; direct_node_kwh; actual_MJ; original_energy_unit; shared_total_kwh; actual_node_weight; actual_weights_of_all_consumers; bundled_energy_scope; supplier; voltage; technology_mix; start_end_readings; direct_attributable_kwh; shared_total_event_id; complete_consumer_list; actual_causal_weight_per_consumer; total_weight; allocated_share; service_bundle_boundary | 逐实际期间记录本节点电表起止差量、供应商、电压及电力技术组合。原记录为 MJ 时按 energy_unit_conversion 得 actual_kwh；已为 kWh 则保留。每个重叠 master_period_ID 在所有节点中仅选一个模式：direct_complete 采用覆盖完整区间的 direct_node_kwh，不再加整主表分配；shared_full 采用一次共享主量，按实际完整使用者集合正权重求 node_kwh，不另加任何重叠直接量。禁止部分直接量加完整主量份额，本方法不声明部分直接加残余；直接覆盖不足时，用完整有证据 shared_full 替代且不另加部分电表，或保留缺口。own_node_period_kwh 仅为选定方法数量别名；glaze_attributed_kwh 对本节点真实纳入期间求和，排除已含在计费服务内的电力。全部使用者包括其他工程，各份额与一次主量核对后除以 A。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；supplier_id = 实际期间特定供应商；meter_ID = 实际本节点或共享主电表编号；master_period_ID = 真实互不重叠计量区间及主事件所有者；power_accounting_mode = 每个重叠主期间仅选 direct_complete 或 shared_full；direct_node_kwh = 本节点覆盖完整纳入区间的实际电表差量 kWh，仅 direct_complete 使用；actual_MJ = 原始记录确为 MJ 时的实际电力 MJ；original_energy_unit = 换算前保留的实际电表发票单位；shared_total_kwh = 一次记录的完整共享主期间 kWh，仅 shared_full 使用；actual_node_weight = 完整共享区间中有实际证据的本节点权重；actual_weights_of_all_consumers = 同主区间覆盖的完整实际使用者权重向量，包括其他工程及期间；bundled_energy_scope = 合同服务已含电力范围及排除重复的证据；supplier = 实际供应商；voltage = 实际电压；technology_mix = 实际技术及电力组合；start_end_readings = 实际起止读数；direct_attributable_kwh = 实际直接归属 kWh；shared_total_event_id = 共享总量唯一事件编号；complete_consumer_list = 全部实际使用者清单；actual_causal_weight_per_consumer = 各实际使用者有因果依据的权重；total_weight = 完整实际权重之和；allocated_share = 实际计算归属份额；service_bundle_boundary = 实际服务已含项目边界。 | kWh；适用时保留原始 MJ | 每个电表期间及共享使用者集合变更 | 全部纳入 glaze 及纠正期间 | 实际 glaze 活动，且共享总量覆盖全部外部使用者 | 每参考流 | 电表校准及读数、实际供应商发票、完整使用者权重及理由、原单位换算、服务已含范围检查和分配闭合。 |
| `cp_glaze_service` | `glaze` | 本节点实际合同可用服务 | 实际合同发票及可用时间归属记录 | lot_id; period_id; event_ID; producing_node; provider_id; asset_service_ID; contract_ID; recorded_actual_paid_hours; billed_days; documented_contract_hours_per_day; actual_node_contract_weight; actual_contract_weights_of_all_consumers; paid_idle_hours; contract_accounting_mode; provider; asset_service_identity; scope_and_bundled_energy_operator; actual_start_end; billed_unit; actual_paid_hours_or_contract_specific_hours_per_day; master_event_id; all_consumer_periods; reserved_availability_or_causal_weights; complete_positive_weight_sum; node_share; correction_use | 核查实际供应商、资产、合同、发票及已含能源操作员运输设备范围。付费可用小时包含闲置；actual_contract_hours 来自实付小时，或真实计费天数乘有条款证据的合同每日小时，不能默认班次。直接本节点合同的 own_node_attributed_paid_hours 为实际合同小时；共享合同则为一次总合同小时按实际完整使用者正权重得到的 node_service_hours，不能再加整发票或重叠直接量。权重采用实际预留可用量或其他有证据驱动，保留付费闲置及预留责任，不暗换工具有效时间。glaze_attributed_contract_hours 对本节点批次真实期间及纠正求和；各使用者份额核对总量，防止已含范围重计，再除以 A。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；provider_id = 实际服务提供方；asset_service_ID = 实际资产及合同服务身份；contract_ID = 实际合同与一次归属的发票期间；recorded_actual_paid_hours = 实际计费付费可用小时，包括付费闲置；billed_days = 实际按天计费合同的发票天数；documented_contract_hours_per_day = 实际合同每计费天小时及条款证据，不默认八小时；actual_node_contract_weight = 本节点批次期间实际预留可用量或其他有证据合同驱动；actual_contract_weights_of_all_consumers = 全部实际合同使用者权重向量，包括其他工程及期间；paid_idle_hours = 保留在总边界中的实际付费闲置小时；contract_accounting_mode = 本节点直接合同或共享合同，同一发票重叠数量互斥；provider = 实际服务提供方；asset_service_identity = 实际资产或服务身份；scope_and_bundled_energy_operator = 实际范围及已含能源、操作员；actual_start_end = 实际起止时间；billed_unit = 实际计费单位；actual_paid_hours_or_contract_specific_hours_per_day = 实际付费小时或有证据的具体合同每日小时；master_event_id = 一次记录的实际主事件编号；all_consumer_periods = 全部实际使用者及期间；reserved_availability_or_causal_weights = 实际预留可用量或有因果依据的权重；complete_positive_weight_sum = 完整使用者权重之和，须为正；node_share = 实际本节点份额；correction_use = 实际纠正使用。 | h；原计费单位 | 每个合同发票期间及使用者集合变更 | 全部 glaze 付费服务期间，包括闲置及纠正 | 实际 glaze 使用，且覆盖共享合同全部使用者 | 每参考流 | 实际供应商合同发票、必要的具体合同每日小时证据、付费闲置和预留可用台账、完整权重、已含范围声明及归属闭合。 |
| `cp_accept_power` | `accept` | 本节点实际电力 | 实际电表与完整共享归属记录 | lot_id; period_id; event_ID; producing_node; supplier_id; meter_ID; master_period_ID; power_accounting_mode; direct_node_kwh; actual_MJ; original_energy_unit; shared_total_kwh; actual_node_weight; actual_weights_of_all_consumers; bundled_energy_scope; supplier; voltage; technology_mix; start_end_readings; direct_attributable_kwh; shared_total_event_id; complete_consumer_list; actual_causal_weight_per_consumer; total_weight; allocated_share; service_bundle_boundary | 逐实际期间记录本节点电表起止差量、供应商、电压及电力技术组合。原记录为 MJ 时按 energy_unit_conversion 得 actual_kwh；已为 kWh 则保留。每个重叠 master_period_ID 在所有节点中仅选一个模式：direct_complete 采用覆盖完整区间的 direct_node_kwh，不再加整主表分配；shared_full 采用一次共享主量，按实际完整使用者集合正权重求 node_kwh，不另加任何重叠直接量。禁止部分直接量加完整主量份额，本方法不声明部分直接加残余；直接覆盖不足时，用完整有证据 shared_full 替代且不另加部分电表，或保留缺口。own_node_period_kwh 仅为选定方法数量别名；accept_attributed_kwh 对本节点真实纳入期间求和，排除已含在计费服务内的电力。全部使用者包括其他工程，各份额与一次主量核对后除以 A。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；supplier_id = 实际期间特定供应商；meter_ID = 实际本节点或共享主电表编号；master_period_ID = 真实互不重叠计量区间及主事件所有者；power_accounting_mode = 每个重叠主期间仅选 direct_complete 或 shared_full；direct_node_kwh = 本节点覆盖完整纳入区间的实际电表差量 kWh，仅 direct_complete 使用；actual_MJ = 原始记录确为 MJ 时的实际电力 MJ；original_energy_unit = 换算前保留的实际电表发票单位；shared_total_kwh = 一次记录的完整共享主期间 kWh，仅 shared_full 使用；actual_node_weight = 完整共享区间中有实际证据的本节点权重；actual_weights_of_all_consumers = 同主区间覆盖的完整实际使用者权重向量，包括其他工程及期间；bundled_energy_scope = 合同服务已含电力范围及排除重复的证据；supplier = 实际供应商；voltage = 实际电压；technology_mix = 实际技术及电力组合；start_end_readings = 实际起止读数；direct_attributable_kwh = 实际直接归属 kWh；shared_total_event_id = 共享总量唯一事件编号；complete_consumer_list = 全部实际使用者清单；actual_causal_weight_per_consumer = 各实际使用者有因果依据的权重；total_weight = 完整实际权重之和；allocated_share = 实际计算归属份额；service_bundle_boundary = 实际服务已含项目边界。 | kWh；适用时保留原始 MJ | 每个电表期间及共享使用者集合变更 | 全部纳入 accept 及纠正期间 | 实际 accept 活动，且共享总量覆盖全部外部使用者 | 每参考流 | 电表校准及读数、实际供应商发票、完整使用者权重及理由、原单位换算、服务已含范围检查和分配闭合。 |
| `cp_accept_service` | `accept` | 本节点实际合同可用服务 | 实际合同发票及可用时间归属记录 | lot_id; period_id; event_ID; producing_node; provider_id; asset_service_ID; contract_ID; recorded_actual_paid_hours; billed_days; documented_contract_hours_per_day; actual_node_contract_weight; actual_contract_weights_of_all_consumers; paid_idle_hours; contract_accounting_mode; provider; asset_service_identity; scope_and_bundled_energy_operator; actual_start_end; billed_unit; actual_paid_hours_or_contract_specific_hours_per_day; master_event_id; all_consumer_periods; reserved_availability_or_causal_weights; complete_positive_weight_sum; node_share; correction_use | 核查实际供应商、资产、合同、发票及已含能源操作员运输设备范围。付费可用小时包含闲置；actual_contract_hours 来自实付小时，或真实计费天数乘有条款证据的合同每日小时，不能默认班次。直接本节点合同的 own_node_attributed_paid_hours 为实际合同小时；共享合同则为一次总合同小时按实际完整使用者正权重得到的 node_service_hours，不能再加整发票或重叠直接量。权重采用实际预留可用量或其他有证据驱动，保留付费闲置及预留责任，不暗换工具有效时间。accept_attributed_contract_hours 对本节点批次真实期间及纠正求和；各使用者份额核对总量，防止已含范围重计，再除以 A。 字段定义：lot_id = 实际安装批次；period_id = 实际报告、计量或纠正期间；event_ID = 唯一实际发生事件编号；producing_node = 本协议声明的实际产生节点，不得迁移归属；provider_id = 实际服务提供方；asset_service_ID = 实际资产及合同服务身份；contract_ID = 实际合同与一次归属的发票期间；recorded_actual_paid_hours = 实际计费付费可用小时，包括付费闲置；billed_days = 实际按天计费合同的发票天数；documented_contract_hours_per_day = 实际合同每计费天小时及条款证据，不默认八小时；actual_node_contract_weight = 本节点批次期间实际预留可用量或其他有证据合同驱动；actual_contract_weights_of_all_consumers = 全部实际合同使用者权重向量，包括其他工程及期间；paid_idle_hours = 保留在总边界中的实际付费闲置小时；contract_accounting_mode = 本节点直接合同或共享合同，同一发票重叠数量互斥；provider = 实际服务提供方；asset_service_identity = 实际资产或服务身份；scope_and_bundled_energy_operator = 实际范围及已含能源、操作员；actual_start_end = 实际起止时间；billed_unit = 实际计费单位；actual_paid_hours_or_contract_specific_hours_per_day = 实际付费小时或有证据的具体合同每日小时；master_event_id = 一次记录的实际主事件编号；all_consumer_periods = 全部实际使用者及期间；reserved_availability_or_causal_weights = 实际预留可用量或有因果依据的权重；complete_positive_weight_sum = 完整使用者权重之和，须为正；node_share = 实际本节点份额；correction_use = 实际纠正使用。 | h；原计费单位 | 每个合同发票期间及使用者集合变更 | 全部 accept 付费服务期间，包括闲置及纠正 | 实际 accept 使用，且覆盖共享合同全部使用者 | 每参考流 | 实际供应商合同发票、必要的具体合同每日小时证据、付费闲置和预留可用台账、完整权重、已含范围声明及归属闭合。 |

### 计算规则

公式先处理按节点、材料和事件区分的原始量，再归一化。A、单元面积及库存各项保持前述定义和互斥状态。符号均对应关联协议的实际原始字段或明确中间计算量，不能填入假定数量。计算编号标识方法规则，参考面积归一化不暗含按件转质量。

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_unit_area` | reference_service | accepted_unit_area = actual_unit_width_m * actual_unit_height_m；A = 对唯一最终 accepted_unit_ID 的 accepted_unit_area 求和；A 须为正。 | actual_unit_width_m; actual_unit_height_m; accepted_unit_ID; cp_accept_handoffs | A |  |
| `survey_interface_area` | frame_interface | surveyed_opening_intensity = surveyed_opening_area / A；保留实际接收接口面积口径，此文件性接口不产生新框架生产负担。 | surveyed_opening_area; A; cp_survey_interface | surveyed_opening_intensity |  |
| `igu_stock_draw` | supplied_igus | gross_igu_draw = survey_opening_intact_unissued_area + survey_igu_receipt_area - survey_closing_intact_unissued_area；supplied_igu_intensity = gross_igu_draw / A。 | survey_opening_intact_unissued_area; survey_igu_receipt_area; survey_closing_intact_unissued_area; A; cp_survey_igus | supplied_igu_intensity |  |
| `igu_usable_exit` | unused_igu_return | survey_usable_exit_area = survey_unused_supplier_return_area + survey_unused_external_transfer_area；usable_igu_exit_intensity = survey_usable_exit_area / A；两个退出池互斥且不在期末库存中。 | survey_unused_supplier_return_area; survey_unused_external_transfer_area; A; cp_survey_igus | usable_igu_exit_intensity |  |
| `igu_net_diagnostic` | supplied_igus; unused_igu_return | diagnostic_consumed_igu_area = gross_igu_draw - survey_unused_supplier_return_area - survey_unused_external_transfer_area；只用于实物核对及原材料负担归属，不作为另一个投入或负信用。 | gross_igu_draw; survey_unused_supplier_return_area; survey_unused_external_transfer_area; cp_survey_igus | diagnostic_consumed_igu_area |  |
| `actual_material_mass_bridge` | setting_blocks; gaskets; beads_fasteners; cleanup_supplies; glazing_offcuts; cleanup_waste | actual_material_kg = weighed_net_kg，或 actual_length_m * documented_same_grade_kg_per_m，或 actual_count * documented_same_grade_kg_per_item；逐实际材料只选有证据的一种方法。 | weighed_net_kg; actual_length_m; documented_same_grade_kg_per_m; actual_count; documented_same_grade_kg_per_item; cp_glaze_materials; cp_glaze_waste; cp_accept_materials; cp_accept_waste | actual_material_kg |  |
| `complete_igu_mass_bridge` | survey_rejected_igu_waste; broken_igus; accept_rejected_igu_waste | 对每个 discard_stream_id 只选择一种有证据的 discard_mass_method：实际扣皮外送流采用 actual_discarded_igu_kg = measured_complete_or_collected_composite_mass_kg；或仅在具有 complete_unit_discard_confirmed 及 complete_constituent_coverage_evidence 时，采用 actual_discarded_igu_kg = actual_discarded_unit_area * documented_actual_complete_build_kg_per_m2。桥接必须匹配确切构造、数量及 discard_current_state/mass_bridge_state，且系数代表的全部组成均进入同一废物流。部分收集、分选或状态已变的破损单元流，不能用完整原面积乘完好整单元系数。此类部分流采用独立实测当前状态流质量，或具有 mass_method_evidence 的相容 partial_stream_component_mass_records，并保持各实际废物流身份分开。核对 other_constituent_fate_ids，不重复累加整体与组成、不推定缺失释放，也不丢失原供应负担。完整性或状态证据缺失使桥接不可用，不能自动记零。不能默认所有弃置流均为纯玻璃或完整复合单元。 | measured_complete_or_collected_composite_mass_kg; actual_discarded_unit_area; documented_actual_complete_build_kg_per_m2; cp_survey_igus; cp_glaze_waste; cp_accept_waste; discard_stream_id; discard_mass_method; complete_unit_discard_confirmed; complete_constituent_coverage_evidence; discard_current_state; mass_bridge_state; partial_stream_component_mass_records; other_constituent_fate_ids; mass_method_evidence | actual_discarded_igu_kg |  |
| `glaze_material_gross_draw` | setting_blocks; gaskets; beads_fasteners | 逐实际材料 i，gross_draw_i_kg = opening_intact_unissued_i_kg + receipt_i_kg - closing_intact_unissued_i_kg；normalized_input_i = gross_draw_i_kg / A；总取用含可用退出及全部实际纠正取用。 | opening_intact_unissued_i_kg; receipt_i_kg; closing_intact_unissued_i_kg; A; cp_glaze_materials | normalized_input_i |  |
| `glaze_material_usable_exit` | unused_glazing_component_return | 逐材料 i，usable_exit_i_kg = unused_supplier_return_i_kg + unused_external_transfer_i_kg；normalized_exit_i = usable_exit_i_kg / A；保留不同身份和上游因子后才能汇总。 | unused_supplier_return_i_kg; unused_external_transfer_i_kg; A; cp_glaze_materials | normalized_exit_i |  |
| `glaze_material_net_diagnostic` | setting_blocks; gaskets; beads_fasteners; unused_glazing_component_return | diagnostic_consumed_i_kg = gross_draw_i_kg - unused_supplier_return_i_kg - unused_external_transfer_i_kg；仅诊断和原材料归属，不是进一步交换或信用。 | gross_draw_i_kg; unused_supplier_return_i_kg; unused_external_transfer_i_kg; cp_glaze_materials | diagnostic_consumed_i_kg |  |
| `cleanup_stock_draw` | cleanup_water; cleanup_supplies | 逐实际供水或材料 i，cleanup_gross_draw_i_kg = opening_intact_unused_i_kg + receipt_i_kg - closing_intact_unused_i_kg；normalized_cleanup_input_i = cleanup_gross_draw_i_kg / A；总取用保留可用退出。 | opening_intact_unused_i_kg; receipt_i_kg; closing_intact_unused_i_kg; A; cp_accept_water; cp_accept_materials | normalized_cleanup_input_i |  |
| `cleanup_usable_exit` | unused_cleanup_material_return | 逐实际供水或材料 i，cleanup_usable_exit_i_kg = unused_supplier_return_i_kg + unused_external_transfer_i_kg；normalized_cleanup_exit_i = cleanup_usable_exit_i_kg / A；各互斥实际退出按对应投入属性单位只记一次。 | unused_supplier_return_i_kg; unused_external_transfer_i_kg; A; cp_accept_materials; cp_accept_water | normalized_cleanup_exit_i |  |
| `cleanup_net_diagnostic` | cleanup_water; cleanup_supplies; unused_cleanup_material_return | diagnostic_cleanup_consumed_i_kg = cleanup_gross_draw_i_kg - unused_supplier_return_i_kg - unused_external_transfer_i_kg；只供诊断和原材料归属，不新增物理交换或信用。 | cleanup_gross_draw_i_kg; unused_supplier_return_i_kg; unused_external_transfer_i_kg; cp_accept_water; cp_accept_materials | diagnostic_cleanup_consumed_i_kg |  |
| `forward_transfer_areas` | accepted_igus; glaze_feed; retained_glazing; accept_feed | each_transfer_intensity = 某一正向流中各唯一实际事件的 actual_unit_area 之和 / A；survey 至 glaze 及 glaze 至 accept 的双方必须按事件、期间、单元编号匹配。 | actual_unit_area; forward_event_ID; unit_ID; A; cp_survey_igus; cp_glaze_handoffs; cp_accept_handoffs | each_transfer_intensity |  |
| `corrective_transfer_areas` | accept_rework_return; glaze_rework_feed | corrective_transfer_intensity = 各唯一实际完好纠正返回事件的 actual_unit_area 之和 / A；发送接收相等，原材料负担携带，额外活动独立实测。 | actual_unit_area; corrective_event_ID; unit_ID; A; cp_accept_handoffs; cp_glaze_handoffs | corrective_transfer_intensity |  |
| `discarded_mass_normalization` | igu_packaging; survey_rejected_igu_waste; glazing_offcuts; broken_igus; cleanup_waste; accept_rejected_igu_waste | waste_intensity_j = 实际产生节点的材料或状态 j 净报废质量之和 / A；保持组件和复合单元流独立及真实接收方。 | actual_net_discarded_mass_j; producing_node; event_ID; A; cp_survey_packaging; cp_survey_igus; cp_glaze_waste; cp_accept_waste | waste_intensity_j |  |
| `cleaning_formulation_water` | cleanup_supplies; cleanup_waste; cleanup_wastewater; accept_water_vapour | 逐实际含水配方 i，consumed_formulation_i_kg = cleanup_gross_draw_i_kg - unused_supplier_return_i_kg - unused_external_transfer_i_kg；actual_water_in_consumed_cleaning_formulations_kg = 对实际 cleaning_formulation_pool_ID 的 consumed_formulation_i_kg * evidenced_actual_water_fraction_i 求和。排除单独供水和干物料，保留总混合物实物投入及可用退出正输出，不能把包含未用退出的配方总量当作消耗水。 | cleanup_gross_draw_i_kg; unused_supplier_return_i_kg; unused_external_transfer_i_kg; evidenced_actual_water_fraction_i; cleaning_formulation_pool_ID; cp_accept_materials | actual_water_in_consumed_cleaning_formulations_kg |  |
| `cleaning_water_pool` | cleanup_water; cleanup_supplies; cleanup_waste; cleanup_wastewater; accept_water_vapour | cleaning_water_available_kg = cleanup_water_gross_draw_kg - actual_unused_water_exit_kg + actual_water_in_consumed_cleaning_formulations_kg + opening_processed_retained_water_kg；evidenced_water_fates_kg = collected_wastewater_water_kg + spent_wipe_water_kg + other_separately_measured_collected_water_kg + closing_processed_retained_water_kg + evidenced_water_vapour_kg；water_gap_kg = cleaning_water_available_kg - evidenced_water_fates_kg。去向全部互斥，缺口保持为问题，不自动转为蒸气。 | cleanup_water_gross_draw_kg; actual_unused_water_exit_kg; actual_water_in_consumed_cleaning_formulations_kg; opening_processed_retained_water_kg; collected_wastewater_water_kg; spent_wipe_water_kg; other_separately_measured_collected_water_kg; closing_processed_retained_water_kg; evidenced_water_vapour_kg; cp_accept_water; cp_accept_materials; cp_accept_waste | water_gap_kg |  |
| `wastewater_normalization` | cleanup_wastewater | wastewater_intensity = actual_collected_wastewater_mixture_kg / A；水去向使用独立举证的水组分，不把混合物质量再作为纯水累加。 | actual_collected_wastewater_mixture_kg; wastewater_water_content; A; cp_accept_water | wastewater_intensity |  |
| `vapour_normalization` | accept_water_vapour | water_vapour_intensity = independently_evidenced_cleaning_H2O_vapour_kg / A；未闭合水衡算不是本排放计算输入。 | independently_evidenced_cleaning_H2O_vapour_kg; A; cp_accept_water | water_vapour_intensity |  |
| `energy_unit_conversion` | survey_electricity; glaze_electricity; accept_electricity | 只有原电力记录为 MJ 时，actual_kwh = actual_MJ / 3.6；原记录已为 kWh 则保持。 | actual_MJ; original_energy_unit; cp_survey_power; cp_glaze_power; cp_accept_power | actual_kwh |  |
| `shared_power_attribution` | survey_electricity; glaze_electricity; accept_electricity | 各共享主期间只有 shared_full 模式才用 node_kwh = shared_total_kwh * actual_node_weight / sum actual_weights_of_all_consumers；完整权重之和须为正，全部份额等于完整主量，不叠加任何重叠 direct_node_kwh。 | power_accounting_mode; shared_total_kwh; actual_node_weight; actual_weights_of_all_consumers; cp_survey_power; cp_glaze_power; cp_accept_power | node_kwh |  |
| `own_node_power_normalization` | survey_electricity; glaze_electricity; accept_electricity | own_node_period_kwh 在 direct_complete 模式仅取 direct_node_kwh，在 shared_full 模式仅取 node_kwh；node_power_intensity = 所纳入期间各选定 own_node_period_kwh 之和 / A。每重叠主量两模式互斥；直接覆盖不足为缺口，除非以完整 shared_full 替代且不加部分电表。排除服务已含能源。 | power_accounting_mode; direct_node_kwh; node_kwh; A; cp_survey_power; cp_glaze_power; cp_accept_power | node_power_intensity |  |
| `contract_hours_conversion` | survey_shared_service; glaze_shared_service; accept_shared_service | actual_contract_hours = recorded_actual_paid_hours；只有按天计费时，actual_contract_hours = billed_days * documented_contract_hours_per_day；纳入实际付费闲置可用，不假定班次长度。 | recorded_actual_paid_hours; billed_days; documented_contract_hours_per_day; cp_survey_service; cp_glaze_service; cp_accept_service | actual_contract_hours |  |
| `shared_service_attribution` | survey_shared_service; glaze_shared_service; accept_shared_service | node_service_hours = actual_contract_hours * actual_node_contract_weight / sum actual_contract_weights_of_all_consumers；完整总权重须为正，保持全部付费可用边界，全部份额核对主期间总量。 | actual_contract_hours; actual_node_contract_weight; actual_contract_weights_of_all_consumers; cp_survey_service; cp_glaze_service; cp_accept_service | node_service_hours |  |
| `own_node_service_normalization` | survey_shared_service; glaze_shared_service; accept_shared_service | node_service_intensity = 所纳入期间本节点实际归属付费小时之和 / A；不得向每个节点分别计入完整共享发票。 | own_node_attributed_paid_hours; A; cp_survey_service; cp_glaze_service; cp_accept_service | node_service_intensity |  |
| `substance_release_normalization` | glaze_other_releases; accept_other_releases | actual_release_species_kg = measured_species_mass_kg，或 actual_activity * validated_applicable_species_factor；species_release_intensity = actual_release_species_kg / A。每个实际本节点事件交换仅用一种有证据方法及实际接收介质。glaze_species_release_kg 和 accept_species_release_kg 只表示各自本节点实际结果，包括纠正；捕集废物和未知残差不是排放。 measured_species_mass_kg 必须为独立证实跨越实际环境源边界的整个事件物种质量，不能用采样器捕集质量。浓度方法仅在相容 gas_state_basis、具代表性的 source_coverage_evidence 及 total_release_method 下，measured_species_mass_kg = sum(background_corrected_concentration_mg_m3 * actual_source_flow_m3_s * interval_duration_s) / 1000000。sampled_air_volume_m3 仅支持样品分析；无组织、职业或室内暴露采样须有经验证的完整源通量桥接。保留 measurement_scope、source_boundary 和 control_factor_basis；已释放质量或已含控制效果因子不能再作捕集扣减。完整源覆盖未知阻止量化，不能变成零。 保留原始源和背景浓度观测、经验证 background_correction_method 以及 source_flow_measurement_evidence；校正与实际源流量均须有独立证据。 | measured_species_mass_kg; actual_activity; validated_applicable_species_factor; species; receiving_medium; A; cp_glaze_releases; cp_accept_releases; sampled_air_volume_m3; measurement_scope; source_boundary; background_corrected_concentration_mg_m3; actual_source_flow_m3_s; interval_duration_s; gas_state_basis; source_coverage_evidence; measured_total_release_kg; total_release_method; control_factor_basis; measured_source_concentration_mg_m3; measured_background_concentration_mg_m3; background_correction_method; source_flow_measurement_evidence | species_release_intensity | epa-eiip-sample-source-flow |
| `original_material_burden_split` | supplied_igus; setting_blocks; gaskets; beads_fasteners; cleanup_water; cleanup_supplies; unused_igu_return; unused_glazing_component_return; unused_cleanup_material_return | 逐相容材料规格池，unused_original_upstream_burden = actual_usable_exit_quantity * actual_original_upstream_burden_per_matching_unit；remaining_original_material_burden = original_gross_draw_material_burden - unused_original_upstream_burden。全部安装、纠正和服务负担留在批次，不产生第二次投入削减或负信用。 | actual_usable_exit_quantity; actual_original_upstream_burden_per_matching_unit; original_gross_draw_material_burden; material_pool_ID; cp_survey_igus; cp_glaze_materials; cp_accept_water; cp_accept_materials | remaining_original_material_burden |  |
| `processed_wip_carry` | accepted_igus; glaze_feed; retained_glazing; accept_feed; accept_rework_return; glaze_rework_feed; reference_service | 按单元、状态和事件核对期初已加工在制品加实际已加工接收，与实际正向、可用、废物退出及期末已加工在制品相平衡。原携带负担在关联期间间只转移一次，仅增加实际新增服务或物料事件。 | opening_processed_WIP; processed_receipts; processed_exits; closing_processed_WIP; unit_state_event_IDs; carrying_burden_link; cp_survey_igus; cp_glaze_handoffs; cp_accept_handoffs | period_reconciliation_record |  |

### 稳定原始键和计算沿袭

raw_fields 仅包含稳定 ASCII 键；各键的实际源记录定义、原字段说明及真实尺寸换算完整保留在本协议 collection_method 中。泛指材料 i 和废物流 j 均按本节点、真实规格组合、事件和期间区分。只填已选用的有证据称量或换算字段，不把未使用替代方法填成虚假零。尺寸采用真实工厂单元外轮廓，质量桥须匹配真实牌号、型材、单件或完整中空玻璃组合。

| 计算键或别名 | 协议所有者 | 实际记录或上游计算 | 物理含义及防重计 |
| --- | --- | --- | --- |
| A; accepted_unit_area | cp_accept_handoffs | accepted_unit_area 由实测 actual_unit_width_m、actual_unit_height_m 和 accepted_unit_ID 得到 | 正值唯一验收面积，仅作共同分母，不替换原始内部移交 |
| surveyed_opening_area | cp_survey_interface | 实际洞口宽乘高并按声明接口口径求和 | 既有框架接口，不新增框架制造 |
| actual_unit_area; actual_discarded_unit_area | cp_survey_igus; cp_glaze_handoffs; cp_glaze_waste; cp_accept_handoffs; cp_accept_waste | 本节点实际宽乘高，报废子集由真实单元事件选择 | 每单元事件一次外形面积，不乘玻璃片数或表面数 |
| survey_opening_intact_unissued_area; survey_igu_receipt_area; survey_closing_intact_unissued_area; survey_unused_supplier_return_area; survey_unused_external_transfer_area | cp_survey_igus | 分别按明确的互斥库存或退出编号集合求和实际面积 | 退货外转排除于期末完好库存，已加工在制品单独记录 |
| gross_igu_draw | cp_survey_igus | igu_stock_draw | 期初加接收减期末，包括可用退出 |
| gross_draw_i_kg | cp_glaze_materials | 实际材料桥后应用 glaze_material_gross_draw | 新材料池实物总取用，不扣可用退出 |
| cleanup_gross_draw_i_kg; cleanup_water_gross_draw_kg | cp_accept_materials; cp_accept_water | cleanup_stock_draw，供水别名只选择实际供水池 | 混合物/材料总取用，独立供水不算清洁配方混合物 |
| actual_water_in_consumed_cleaning_formulations_kg | cp_accept_materials | cleaning_formulation_water：实际配方总取用减该配方互斥退货及外转，再乘实际水分数 | 只计实际消耗配方水，未用配方水排除一次 |
| collected_wastewater_water_kg | cp_accept_water | 实际收集混合物质量乘实际独立举证水分数 | 仅组分衡算，物理清单输出仍为实际混合物质量 |
| spent_wipe_water_kg | cp_accept_waste | 实际湿擦拭物质量乘水特定独立验证水分数 | 已含在湿废物中，同事件引入水衡算，不另记物理输出 |
| actual_unused_water_exit_kg | cp_accept_water | 同供水池未用退货加外转，以 water_exit_event_ID 与耗材协议共享 | 正可用退出只记一次，排除期末库存与实际用水池 |
| evidenced_water_vapour_kg; accept_evidenced_water_vapour_kg | cp_accept_water | 独立实际蒸气量和 evaporation_evidence_ID 的别名 | 仅 H2O 至 air / unspecified，water_gap_kg 绝不是排放来源 |
| actual_kwh | cp_survey_power; cp_glaze_power; cp_accept_power | 实际 MJ 用 energy_unit_conversion，原 kWh 保持 | 保留原单位和电表期间 |
| node_kwh | cp_survey_power; cp_glaze_power; cp_accept_power | 仅 shared_full 使用 shared_power_attribution | 完整主量按完整正权重归属，不加重叠直接量 |
| own_node_period_kwh | cp_survey_power; cp_glaze_power; cp_accept_power | direct_complete 只选 direct_node_kwh，shared_full 只选 node_kwh | 每重叠主期间一种互斥方法，不声明部分电表加残余算法 |
| actual_contract_hours | cp_survey_service; cp_glaze_service; cp_accept_service | 实付小时，或实际计费天数乘具体合同每日小时 | 保留付费闲置，不假定班次 |
| own_node_attributed_paid_hours | cp_survey_service; cp_glaze_service; cp_accept_service | 按实际 contract_accounting_mode 选择直接实际合同量或共享 node_service_hours | 原发票只按全部使用者分配一次 |
| actual_usable_exit_quantity; original_gross_draw_material_burden | cp_survey_igus; cp_glaze_materials; cp_accept_water; cp_accept_materials | 对应同单位正可用退出及原总取用乘匹配实际上游因子，按 material_pool_ID | 仅原材料负担，服务纠正闲置留在安装批次，不给避免生产信用 |
| 各流卡中的本节点移交、材料、废物、电力和服务别名 | 各卡声明的本节点协议 | 按本协议采集方法将互斥真实原始或上游计算事件量求和，再除以 A | 汇总前保留身份和期间，别名不是额外量测或交换 |

### 组件配装责任

实际胶条、垫块或固定组件的定尺、配装及附带修整均保留于 glaze 装配责任，不形成独立移交的成形产品或独立成形验收关口。保留实际配装前材料牌号型材与新旧状态、配装后固定成果、实测边角料、完好纠正轮次及有证据直接释放。若实际前景证据确立独立成形组件生产责任或移交，应先重新评估声明范围，再使用本类别，不能遗漏该操作。中空玻璃现场切磨仍被排除。

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | qualifying lot | 汇总数量前确认既有框架接收边界和工厂成品干式机械固定路线，不得暗含维修、湿密封或成品改造。 | 签署范围、框架放行及批准系统详图；ATS-192 边缘损伤、干式安装和相容材料章节。 |
| `dq_actual_component` | component and upstream data | 识别实际玻璃组合、镀膜朝向、密封系统及各材料牌号型材、新旧状态、制造商相容批准；具体交换须匹配真实身份与上游范围。 | 供应标签、图纸、材料证书、批准、真实物料清单及身份读回证据。 |
| `dq_area_unique` | reference_service and all unit streams | 保留实际尺寸、统一口径、唯一单元和轮次、正唯一验收面积及全部拒收在制状态；商业面积差异须逐单元可追溯换算。 | 实测表、签署验收、事件台账和面积转换记录。 |
| `dq_mass_bridge` | kg material and rejected-unit rows | 采用校准净称量或实际同牌号单件/完整组合证据。完整中空玻璃为复合物，通用玻璃密度或名义厚度不能决定完整质量。 | 校准、皮重、实际供应线质量/单件质量或完整组合质量证据。 |
| `dq_stock_exclusive` | material inputs and usable exits | 证明总实物取用及可用正退出；期末完好未领用、可用退货、外转、废物和已加工在制品不能重叠，净消耗只诊断。 | 按状态事件核对库存、保管凭证及原负担台账。 |
| `dq_reject_ownership` | rejected and corrective streams | 每个报废或返回单元保留本节点来源、实际状态及去向；完好纠正配对并保留额外活动，不重复制造同一玻璃。 | 损坏检查决定、单元轮次事件账、配对移交或废物凭证。 |
| `dq_water_closure` | cleaning-water pool | 独立举证废水含水、擦拭物水、保留水、未用退出和实际蒸气，包括配方水；超不确定性的未解释差异阻止水完整性声明。 | 水组分测量、收集保留证据、独立蒸发验证、水池平衡及不确定性。 |
| `dq_power_complete` | own-node electricity | 具备实际供应商电压期间及直接计量或完整正共享权重；解决服务已含能源边界并将全部使用者一次核对。 | 电表、完整使用者权重理由表、发票及服务范围。 |
| `dq_service_complete` | own-node services | 具备实际供应商资产合同、付费可用及闲置小时、完整权重和真实计费换算，不填默认八小时天数。 | 合同发票、实际可用排程、必要的合同每日小时证据及完整分配表。 |
| `dq_period_lineage` | all stock, events and final lot | 覆盖首次验收前全部期间并链接期初期末在制品、实际纠正及终止，防止重复归属；后续更换需另声明边界。 | 期间库存、在制沿袭、原负担携带及验收终止日期。 |
| `dq_range_status` | all inventory cards | 除精确归一化恒等式外，暂定范围均为可替换推理估算；保留实测值和不确定性，以独立评审样本替换，不用同批最大值验证同批。 | 范围证据级别和理由、独立样本来源、异常调查。 |
| `dq_release_specificity` | direct elementary releases | 选择具体释放前先确定真实物种、状态或粒径及接收介质；缺测不证明未发生，未知质量残差不是污染物。 | 化学身份、采样或验证因子、实际操作和介质记录。 |
| `dq_completeness` | completed data package | 披露测量不确定性、时间场地规格代表性、上游不匹配、排除操作、未闭合池和未解身份；跳过检查或剩余缺口时不能称完全验证。 | 采集覆盖台账、质量审查、已执行/跳过检查报告及剩余缺口清单。 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_dry_scope` | product category and lot | 核查实际既有框架、工厂成品玻璃、预制干胶条和机械固定；不能暗含框架维修、现场玻璃改造、湿/结构硅酮或防火安装。 | `pilkington-general-glazing-2013` |
| `validate_project_details` | support, gasket, retention and drainage acceptance | 采用实际批准中空玻璃/框架系统要求及相容证据；ATS-192 单片玻璃尺寸不得变成中空玻璃默认界限，不推定统一垫块、压力或排水数值。 | `pilkington-general-glazing-2013` |
| `validate_reference_area` | reference_service | 首先核对每个计入单元的rectangular_outline_confirmed和实际外形证据；非矩形或未知外形不满足适用性。A 须为唯一最终验收实际单元外形面积的正值，确认 reference_service 名称、Area/m2 及 1 m2 数量。排除玻璃片表面倍乘、无转换可视面积、拒收待决及重复检验。 |  |
| `validate_forward_handoffs` | accepted_igus; glaze_feed; retained_glazing; accept_feed | 按双方事件、单元、面积、状态和期间匹配，以实际库存在制品解释差异，不能把中间实际进料改成 1 m2。 |  |
| `validate_corrective_handoffs` | accept_rework_return; glaze_rework_feed | 只启用实际完好纠正返回，匹配双方编号与面积；原材料负担携带而不重复制造，保留各新增实际材料服务事件。 |  |
| `validate_own_node_discards` | survey_rejected_igu_waste; broken_igus; accept_rejected_igu_waste | 核查实际产生节点、单元组合、完整复合质量或实际同组合桥、拒收状态和真实废物接收方；完好可用退货或待决保留不得当废物，晚期报废不得方便地归前节点。 对每个 discard_stream_id 及实际 discard_current_state 只选择一种 discard_mass_method。仅当 complete_unit_discard_confirmed 和 complete_constituent_coverage_evidence 证明该系数代表的确切数量及全部组成均以匹配的 mass_bridge_state 进入本废物流时，才允许整单元面积构造换算。部分、分选或其他状态改变的破损单元废物，应采用扣皮实测流质量，或独立测量且相容的 partial_stream_component_mass_records；不能将完整原单元面积直接乘完好整套 kg/m2 系数。用 other_constituent_fate_ids 将留存、退回、另行弃置或实际释放的部分各记录一次，保持真实废物身份，不再累加整单元与组成质量。覆盖或状态证据缺失阻止该换算，不能抹去原供应负担、据此认定释放或记零。 |  |
| `validate_physical_draw` | material inputs and usable exit cards | 按期初加接收减期末完好未领用库存重算总实物取用，包含可用退出。确认同属性正退出及互斥状态；净诊断不得再次减少投入或给信用。 |  |
| `validate_unused_burden` | usable outputs | 只转出有证据原未用材料负担，不转服务、闲置、检验、纠正或安装负担，不给避免制造信用。 |  |
| `validate_mass_conversions` | all kg material and rejected-unit flows | 确认实际称量扣皮或同状态、同数量且牌号、件或构造相容的换算。中空玻璃可用退出仍为 Area/m2；其实际质量视图与实际废物流数量分开。 弃置中空玻璃仅在符合条件的完整当前状态流中使用 complete_igu_mass_bridge 的整单元换算。部分、分选或状态已变的废物须实际称量流质量，或独立支持的同状态组成数量，不能用完整原单元面积乘整套构造系数。核对 discard_stream_id、complete_unit_discard_confirmed、complete_constituent_coverage_evidence、discard_current_state、mass_bridge_state、mass_method_evidence 及 other_constituent_fate_ids；证据缺失使换算不可用，不要求虚构整单元质量。 |  |
| `validate_water_pools` | cleanup_water; cleanup_supplies; cleanup_waste; cleanup_wastewater; accept_water_vapour | 在量化不确定性内核对实际可用水与互斥废水、擦拭物、保留水、未用退出及独立蒸气；不从残差推蒸气，不把湿擦拭物含水重记废水；未闭合报告不完整。 |  |
| `validate_electricity` | each own-node electricity card | 各本节点须实际计量或完整正权重共享归属，覆盖全部使用者期间，MJ/kWh 正确，实际供应商电压明确，服务已含边界无重叠。 |  |
| `validate_paid_service` | each own-node shared-service card | 各本节点须实际提供方资产范围、含闲置的实付合同小时、合同特定天数换算、完整正权重及总量闭合；假定八小时天数无效。 |  |
| `validate_periods` | all node and stock records | 核查接收安装验收及纠正期间关联、互斥期初期末完好库存和已加工在制品、原携带负担只归属一次；未验收终止批次没有验收分母。 |  |
| `validate_emission_identity` | glaze_other_releases; accept_other_releases; accept_water_vapour | 须具实际物种、相关物态或粒径、接收介质及实测或验证数量；发生、物种、介质或量未知均是缺口。概括标签、缺失捕集废物、水或库存残差不足以证明释放。捕集边角料粉尘不能又直接释放，各非 H2O 事件使用本节点协议。 |  |
| `validate_range_evidence` | inventory ranges | 暂定范围均标 reasoned_estimate，与真实数量分开；用外部或独立前景证据调查异常。最终 1..1 只表示 A/A 归一化，不证明物理产率。 |  |
| `validate_publication_completeness` | final downstream dataset | 报告接受输入、执行检查、跳过检查、发现及完整性。具体数据集完整声明前解决实际交换及支持身份、物料平衡和审查阻碍；自动结构通过不证明外部身份或物理正确。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 按节点记录组件、事件、库存、在制品、服务、纠正及废物的前景安装服务数据包；完成核实的投影可用作 secondary_dataset 或 background_dataset |
| downstream_use | 在声明的既有框架接收和最终验收关口，每 1 m2 已验收单元面积的干式胶条安装服务；可支持同边界下游 LCA process 与 lifecyclemodel |
| allowed_use | 实际中空玻璃/框架系统相匹配的干式安装，披露规格、地域、期间、上游供应及通达服务条件，并保留实际不确定性及纠正废物处理 |
| excluded_use | 整窗制造；框架安装维修；含拆除旧玻璃的更换；湿式、结构硅酮或防火安装；现场改造玻璃；完整围护结构性能；使用期能源或寿命收益；无条件转换面积口径、玻璃组合或通达系统 |
| required_metadata | 场地地域期间、批次和唯一单元编号、尺寸和面积口径、既有框架接收关口、实际玻璃组合朝向镀膜密封、相容垫块胶条固定件、新增或保留件、最终支承固定排水清洁无损验收、供应商技术电压、实物库存和可用退出、在制与原负担沿袭、全部纠正、共享资产合同范围和完整归属、真实废物去向、上游覆盖、方法及版本 |
| required_quality_disclosure | 记录及不确定性覆盖、独立质量桥、互斥水去向闭合和实际排放证据、完整共享权重及付费闲置、未解身份或上游不匹配、排除项、暂定范围状态、已执行/跳过检查及剩余发现 |
| update_trigger | 玻璃组合镀膜密封或框架变化；批准组件或干式固定方式变化；接收/验收关口或面积口径变化；供应商能源服务通达变化；新的纠正拒收模式；报告或在制边界变化；新实测证据替换暂定范围；制造商要求更新 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `pilkington-general-glazing-2013` | handbook | Pilkington North America，Technical Information ATS-192，General glazing guidelines，2013-01-02，共八页；https://www.pilkington.com/-/media/pilkington/site-content/usa/window-manufacturers/technical-bulletins/ats192generalglazingguidelines2013102.pdf ；读取日期 2026-10-12 | 成品边缘保护及禁止现场切割磨边研磨；干式支承及侧边垫块；相容弹性材料；排水、玻璃保护和具体产品系统验收责任。其退火单片玻璃尺寸表不是中空玻璃默认规格；本来源不提供本方法库存消耗、损失、电力或服务小时范围。 |
| `epa-eiip-sample-source-flow` | official_guidance | US EPA，EIIP 第 II 卷第 2 章，Preferred and Alternative Methods for Estimating Air Emissions from Boilers，标注 2001 年 1 月 8 日的印刷页 2.4-13，式 2.4-12；https://19january2021snapshot.epa.gov/sites/static/files/2015-08/documents/ii02.pdf | 仅支持从浓度推导排放质量时区分采样气体积与完整源气流流量。锅炉烟道方法、因子及例值不移用于安装粉尘或无组织释放；仍需实际适用方法及事件覆盖证据。 |
