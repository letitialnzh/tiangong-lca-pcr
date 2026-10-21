---
pcr_id: pcr.constructions-and-construction-services.construction-services.galvanized-chain-link-fabric-and-rail-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 合格既有立柱及基础上的镀锌勾花网布及导轨安装服务

## 1. 范围与适用性

本方法针对将镀锌钢勾花网布及实际所需导轨、连接基础安装到已验收立柱和基础接口的前景工作。从实物接口放行和材料接收开始，至安装服务验收结束。围栏按真实高度、网孔、线规、网边和镀锌状态描述，不将不同配置的一米静默视作等效。

工作包包含实际导轨/支撑集成、张力线角色、网布拉伸连接固定、附带切割、损失、返工、自有责任临时服务、包装去向及规定的完工清洁。既有柱帽、导轨或配件不重复采购，逐项清单区分既有和新增项。编织后镀锌与编织前镀锌切端状态可不同，实际供应商和项目指令决定兼容性及验收。

本路线排除新立柱、挖掘、整地、混凝土基础、门及驱动器、刺线/刺带、隐私条和独立构件制造。增加排除责任须重新审查真实边界。所引文件涵盖更广系统，其中示例尺寸、线规、间距、基础、风荷载和门施工指令不作为本方法通用因子。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.galvanized-chain-link-fabric-and-rail-installation-services |
| classification_refs | cpc:3.0:54770；分类只提供关联背景，不证明更广范围或已接受映射 |
| covered_products | 在已放行既有立柱和基础上安装实际镀锌编织钢勾花网布及导轨/连接基础 |
| excluded_products | 新完整围栏制造；新柱/基础/土方；门及驱动器；刺线/刺带；隐私条；未经另审的聚合物涂层或非镀锌替代网布路线 |
| representative_product | 实际项目配置下、区段中心线一验收米 |
| production_route | 既有接口放行及收料 → 导轨/支撑集成 → 网布连接张紧固定 → 实际规定完工及最终验收 |
| market_state | 现场安装验收状态，实际自有责任构件完整，既有柱接口的所有权边界不变 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已放行既有立柱/基础接口上的验收镀锌勾花网布及导轨安装服务 |
| How much | 唯一净验收区段中心线长度 1 m |
| How well | 实际设计兼容的高度、网孔、线规、网边和镀锌状态；网布绷紧、连接牢固、全部自有责任构件完整、余端剪弯、实际规定净空及完工要求合格 |
| How long or cycle | 从接口进入放行到验收的一真实安装批次，包括实际收料/存储、导轨、网布、完工、闲置和返工期间，不假定使用寿命 |
| reference_flow_link | `accepted_fence_service` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 验收合格的镀锌勾花网布及导轨安装服务 |
| reference_flow_property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| reference_unit_group | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| reference_unit | m |
| required_qualifiers | 场地及批次; 实际高度; 网孔; 线规; 上下网边; GAW 或 GBW; 实际牌号及涂层; 中间/终端柱状态和几何放行; 既有/新增构件清单; 实际完工要求及验收; 中心线/开口/拐角方法; 工作及验收期间 |

L 来自唯一验收区段登记，不是交付网卷长度、名义间距、围栏面面积或工作遍次。分子覆盖全批实际损失和返工，各量只除以 L 一次；仅最终参考卡为 L/L。L = 0 的未验收批次不能形成此参考数据集。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| measure_reference_length | accepted_fence_service | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | 使用 cp_finish_accept 按 calc_accepted_fence_service 计算 L，唯一净中心线拐角一次、排除门洞/开口和 WIP，L > 0。 |
| measure_physical_interface | cp_survey_receive/cp_rail_brace observation keys: post_interface; physical_interface_release; physical_interface_construction_feed | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | 由责任节点协议测量现有柱实物几何，设计放行文件支持状态，不成为千克或文件产品交换。 |
| measure_same_state_bridge | 全部材料、包装和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实测质量，或将真实件数/长度/面积凭同 SKU/当前状态实测 kg/原生单位桥接换算，不相加异维单位、不借用其他材料系数。 |
| measure_composite_exclusive | 复合物及保留材料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 购入整体复合物与实际实测组分互斥，材料净质量不含包装，验收保留质量仅检查存量，不再作最终交换。 |
| measure_meter_lineage | 全部电力行 | Energy | kWh | 按电源因子和区间换算实测差值，保留总/分表拓扑及全部总表内归属；不借用净热值等其他属性。 |
| measure_service_time | 全部 access_service 行 | Duration | h | 实际合同可用时间和有据换算含自有责任闲置返工；不默认八小时工作日、年化、寿命或人工代理。 |
| measure_normalize_once | 全部清单行 | 各行规定属性 | 各行规定单位 | 先计算第8节命名物理分子，再以同一正 L 执行 Amount 一次；内部移交保留真实量，仅最终 L/L 为一。 |
| measure_water_pools | finish_water; finish_water_vapour; finish_wastewater; finish_unused_return | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | finish_accept 使用实测纯水池，新鲜水总领用已排除完好库存一次。H2O 排入未特指空气需独立验证发生与量，闭合余差只诊断。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 既有中间/终端柱和基础针对真实荷载、几何、高度的签署设计及状态放行，真实收料保管条件和既有/新增构件清单 |
| starting_condition_role | 安装工作的既有实物支撑接口，不是新柱/基础生产或文件产品 |
| product_classification_scope | cpc:3.0:54770 中本已审镀锌网布与导轨安装路线，分类本身不扩大边界 |
| recursive_input_rule | 同类别已有区段/服务只有以独立实际状态和保管移交进入时才记录。既有负荷只携带一次，本批仅加新增责任工作，不递归创建第二完整围栏或替代为最终参考。 |
| upstream_dataset_requirement | 实际材料/SKU/状态或服务范围和地理相符的供应数据集，明确制造、交货和包装覆盖，解决上游证据缺失 |
| disclosure | 实际进入状态及责任人、排除操作、全部构件清单、收发/保留/废物/U/X/WIP及包装去向、路线期间状态、共享服务决定、测量不确定性及未解决身份/支持和覆盖缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_start | 全部节点 | 始于现有中间柱、终端柱及基础针对实际荷载、高度、几何和状态的验收合格放行。明确上游责任人提供实际设计和实物状态签署证据。接口长度是既有资产观察边界，不是新柱/混凝土质量或设计文件产品。 | clfmi-product-manual-2017; masterhalco-galvanized-components |
| boundary_component_ownership | 全部构件角色 | 逐项明确柱帽、环顶、轨端、箍带、套筒、支撑、拉杆、张紧条或带、螺栓、绑丝、扣环及张力线是既有合格项还是本工作包新装项。全部实际新装自有责任项进入对应材料台账；一件只有一个操作责任节点，归属未知阻止完成。 | clfmi-product-manual-2017; masterhalco-galvanized-components |
| boundary_exclusions | 范围变化 | 本路线不含新立柱、土方、基础、门及驱动器、刺线、刺带、隐私条和独立框架/网布制造。若实际安装包需要或实施这些工作，先重审边界及流卡，不隐藏为零或既有项。 | clfmi-product-manual-2017; masterhalco-galvanized-components |
| boundary_receipt | survey_receive 和全部材料供料 | 每种暂存材料仅在 survey_receive 有一次外部总领用，随后真实发料并由自有节点接收内部供料。总领用=期初+外部收料−全部本批未发完好库存。收料拒收及实际 U/X 退出保留在总领用内，并独立正输出；下游不得重复采购。 |  |
| boundary_packaging | 全部包装角色 | 随料包装独立接收，记录其收料处置或向实际拆包节点实测发出/接收。该节点废物、可用退出、实际复用转移和在制品保留互斥。供应数据集包装覆盖有记录且只计一次，材料净 kg 不含包装。 |  |
| boundary_handoff | 全部区段和构件移交 | 材料、包装和区段转移以同一事件、材料/区段、当前状态、批次、源接收人证据配对。保留实际内部量，不替换为最终参考 1 m。保留构件携带既有负荷一次，后续只增加本节点操作和投入。 |  |
| boundary_actual_operations | rail_brace 和 fabric_tension | 导轨装配和真实现场切割属于本连接操作，包含实际工具、切余、捕集粉尘、未捕集排放及返工。独立加工产品移交须另审范围。网布连接、拉伸、固定、剪裁和弯端按真实操作记录，不设默认速率或尺寸。 | clfmi-product-manual-2017; masterhalco-galvanized-components |
| boundary_finishing | finish_accept | 母体为实测已张紧固定区段。表面修补、化学或用水清洁仅凭实际获批要求和操作记录激活，明确配方和施用/清洁状态。未发生需证据，未知保留缺口；焊接门锌漆条款不能证明本非门路线所有导轨切口均需修补。 | clfmi-product-manual-2017; masterhalco-galvanized-components |
| boundary_final_gate | accepted_fence_service | 仅当布面实际绷紧、配件牢固、余端剪除并弯折、净空满足实际规定、所有自有责任构件及修补清洁要求合格时放行。参考量为唯一净区段中心线长度，拐角只计一次并排除门洞/开口间隙，保留实际高度/网孔/线规/网边/涂层。单纯等待不构成独立保全服务。 | clfmi-product-manual-2017; masterhalco-galvanized-components |
| boundary_actual_releases | 全部废物和基本流角色 | 按产生节点测量固体、液态废物、可用退出、保留材料和在制品的互斥实物去向。基本流须明确物质或颗粒基准及介质。捕集颗粒和送处理液体为废物，未解释差额不是排放。finish_water_vapour 仅为实际 H2O 排入未特指空气。 |  |
| boundary_periods | 全部节点 | 列出真实收料/存储、导轨、网布、实际完工、验收、返工及自有责任闲置期间，含期初期末状态和事件 ID。资产、收料、转移、废物、服务与验收均关联期间；截止时未验收安装为在制品，不假定终止或验收。 |  |
| boundary_shared_assets | 全部能源和服务角色 | 识别实际共享电表、通行资产、升降吊装、抽集或防护服务，明确合同/供应商边界及全部使用节点和期间。先直接归属再分剩余，避免重复计入已含能源、资产或包装负荷。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：外部收料包装与临时防护 (`receive_packaging`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

接收本批材料随附的实际包裹、捆扎、罩盖及搬运防护，区分成分和可复用状态。材料供应数据集的边界决定是否已包含包装生产负荷。

- 采集对象：外部收料包装与临时防护
- 流属性/单位：Mass / kg
- 数量规则：actual_receive_packaging/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。包装用量受供应商、复用和交货批量影响；宽泛区间仅检查异常包装领用，不提供包装比例。

#### 采集要求：归属于 survey_receive 的通行、机械及支持服务 (`survey_receive_access_service`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

记录 survey_receive 实际合同约定的通行、升降、吊装、抽集或防护服务，包括由其负责的闲置和返工可用时间。小时表示有记录的服务边界，不从人工劳动或标准工作日虚构。

- 采集对象：归属于 survey_receive 的通行、机械及支持服务
- 流属性/单位：Duration / h
- 数量规则：actual_survey_receive_access_service/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：48
  - 单位：h
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。自有责任可用时间及中断影响小时数，宽泛区间不提供资产寿命或八小时工作日换算。

#### 采集要求：外部领用的导轨配件与支撑构件 (`receive_rail_fittings`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

收料节点负责导轨配件与支撑构件唯一一次外部进入。逐项识别柱帽、环顶、轨端、箍带、套筒、支撑、拉杆及螺栓，包括铁基或压铸铝实际成分。在收料废物、实际未用退出及节点发料之前测量批次总领用量；逐处识别全部完好未发库存的真实保管人和地点。

- 采集对象：外部领用的导轨配件与支撑构件
- 流属性/单位：Mass / kg
- 数量规则：actual_receive_rail_fittings/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。总领用包括收料损失及未用退出，因此可超过安装保留量；区间只诊断台账尺度，不将退料再次扣减。

#### 采集要求：外部领用的网布张紧和连接件 (`receive_fabric_fittings`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

收料节点负责网布张紧和连接件唯一一次外部进入。按实际材料识别张紧条或带、箍带、螺栓、绑丝及扣环，铝绑丝与镀锌钢绑丝分开。在收料废物、实际未用退出及节点发料之前测量批次总领用量；逐处识别全部完好未发库存的真实保管人和地点。

- 采集对象：外部领用的网布张紧和连接件
- 流属性/单位：Mass / kg
- 数量规则：actual_receive_fabric_fittings/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。总领用包括收料损失及未用退出，因此可超过安装保留量；区间只诊断台账尺度，不将退料再次扣减。

#### 采集要求：外部领用的实际规定的修补和清洁材料 (`receive_coating_cleanup`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

收料节点负责实际规定的修补和清洁材料唯一一次外部进入。仅实际批准配方及观察到的操作激活，不推定所有导轨切口必须涂锌漆。在收料废物、实际未用退出及节点发料之前测量批次总领用量；逐处识别全部完好未发库存的真实保管人和地点。

- 采集对象：外部领用的实际规定的修补和清洁材料
- 流属性/单位：Mass / kg
- 数量规则：actual_receive_coating_cleanup/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。总领用包括收料损失及未用退出，因此可超过安装保留量；区间只诊断台账尺度，不将退料再次扣减。

#### 采集要求：离开收料保管范围的可用原材料 (`receive_unused_return`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

将本节点向供应商退回或交给明确外部保管人的未使用构件或可用包装记录为正输出。保留材料和状态身份，区分退回 U 与外部转移 X。

- 采集对象：离开收料保管范围的可用原材料
- 流属性/单位：Mass / kg
- 数量规则：actual_receive_unused_return/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。超量订购或构件安排变更可能产生大量可用退出，应核对互斥保管事件及原始负荷，不将区间解释为抵扣。

#### 采集要求：向 rail_brace 的实际材料发料 (`issue_materials_rail_brace`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

此条件移交角色仅包括 survey_receive 向 rail_brace 实际发出的、当前状态未改变的 Mass/kg 安装材料：导轨、导轨配件及张力线。前景记录按实际 SKU、材料及当前状态展开为零、一项或多项具体交换，每项均有自身已核实 UUID 和实测实物量。数量按每个实际材料/SKU及当前状态交换分别选择；批次发料求和仅作诊断，不能成为混合产品交换、组合身份、默认发生或固定量。保留 calc_issue_rails, calc_issue_rail_fittings, calc_issue_tension_wire 中各构件量及保管 ID，并逐项核对匹配的接收材料投入。上游购入只发生在原外部收料一次，包装另用随料发出/接收配对。

- 采集对象：向 rail_brace 的实际材料发料
- 流属性/单位：Mass / kg
- 数量规则：actual_issue_materials_rail_brace/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：实际同接收节点发料的暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：160
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此可替换暂定区间分别筛查每一具体材料/状态发料量，仅以所声明的宽泛边界提示异常尺度，不是材料配方、身份、必需量或实证限值。实际零需未发生证据，未知为缺口。展开真实交换时各 SKU/状态及原角色数量保持独立；超界时核对构件及保管证据，不删除真实损失或返工。

#### 采集要求：向 fabric_tension 的实际材料发料 (`issue_materials_fabric_tension`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

此条件移交角色仅包括 survey_receive 向 fabric_tension 实际发出的、当前状态未改变的 Mass/kg 安装材料：镀锌勾花网布及网布连接件。前景记录按实际 SKU、材料及当前状态展开为零、一项或多项具体交换，每项均有自身已核实 UUID 和实测实物量。数量按每个实际材料/SKU及当前状态交换分别选择；批次发料求和仅作诊断，不能成为混合产品交换、组合身份、默认发生或固定量。保留 calc_issue_chainlink_fabric, calc_issue_fabric_fittings 中各构件量及保管 ID，并逐项核对匹配的接收材料投入。上游购入只发生在原外部收料一次，包装另用随料发出/接收配对。

- 采集对象：向 fabric_tension 的实际材料发料
- 流属性/单位：Mass / kg
- 数量规则：actual_issue_materials_fabric_tension/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：实际同接收节点发料的暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：130
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此可替换暂定区间分别筛查每一具体材料/状态发料量，仅以所声明的宽泛边界提示异常尺度，不是材料配方、身份、必需量或实证限值。实际零需未发生证据，未知为缺口。展开真实交换时各 SKU/状态及原角色数量保持独立；超界时核对构件及保管证据，不删除真实损失或返工。

#### 采集要求：向 finish_accept 实际发出的实际规定的修补和清洁材料 (`issue_coating_cleanup`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

将 survey_receive 实际发出的实际规定的修补和清洁材料按匹配材料、状态、批次、保管事件移交给 finish_accept。接收节点登记同一实物量为内部供料；未解释收料差额不是实测发料。

- 采集对象：向 finish_accept 实际发出的实际规定的修补和清洁材料
- 流属性/单位：Mass / kg
- 数量规则：actual_issue_coating_cleanup/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。实际发料发生在收料处置之后，区间不要求与最终几何相等，也不暗示再次采购。

#### 采集要求：随材料发往 rail_brace 的包装 (`issue_packaging_rail_brace`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

只发出仍真实随材料从 survey_receive 移交给 rail_brace 的包装，识别包装件、成分、状态及材料保管事件，上游包装覆盖只携带一次。

- 采集对象：随材料发往 rail_brace 的包装
- 流属性/单位：Mass / kg
- 数量规则：actual_issue_packaging_rail_brace/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。包装何时拆除决定发往本节点的量，区间检查实际转移，不假定全部包装在收料成为废物。

#### 采集要求：随材料发往 fabric_tension 的包装 (`issue_packaging_fabric_tension`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

只发出仍真实随材料从 survey_receive 移交给 fabric_tension 的包装，识别包装件、成分、状态及材料保管事件，上游包装覆盖只携带一次。

- 采集对象：随材料发往 fabric_tension 的包装
- 流属性/单位：Mass / kg
- 数量规则：actual_issue_packaging_fabric_tension/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。包装何时拆除决定发往本节点的量，区间检查实际转移，不假定全部包装在收料成为废物。

#### 采集要求：随材料发往 finish_accept 的包装 (`issue_packaging_finish_accept`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

只发出仍真实随材料从 survey_receive 移交给 finish_accept 的包装，识别包装件、成分、状态及材料保管事件，上游包装覆盖只携带一次。

- 采集对象：随材料发往 finish_accept 的包装
- 流属性/单位：Mass / kg
- 数量规则：actual_issue_packaging_finish_accept/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。包装何时拆除决定发往本节点的量，区间检查实际转移，不假定全部包装在收料成为废物。

#### 采集要求：收料节点丢弃的全部安装材料 (`receive_reject`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `waste`.

记录 survey_receive 实际丢弃的所有新收安装材料，包括导轨、编织网布、配件、张力线及实际涂层修补或清洁配方。分别确定固态、液态、当前材料或涂层状态及处理去向。包装有独立收料废物卡；可用供应商退料属于产品 U/X，完好库存不属于废物。无真实移交时不得将下游废物归入此处。

- 采集对象：收料节点丢弃的全部安装材料
- 流属性/单位：Mass / kg
- 数量规则：actual_receive_reject/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。交货拒收可能在最终验收长度很少时产生大量废物；高比值需要交货和拒收证据，不得删除损失。

#### 采集要求：收料时丢弃的包装 (`receive_packaging_waste`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `waste`.

只记录接收期间实际拆下并丢弃的包装。仍随材料发往工作节点的包装按独立发出卡记录，不同时计作此处废物。

- 采集对象：收料时丢弃的包装
- 流属性/单位：Mass / kg
- 数量规则：actual_receive_packaging_waste/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。拆包方式决定收料包装废物量；此区间仅诊断异常包装，不规定必须丢弃的比例。

#### 采集要求：内部接收的导轨配件与支撑构件 (`rail_fittings`)

过程／待建立交换的方向／类型：`rail_brace` / `inputs` / `product`.

接收实际新装且归导轨工作负责的柱帽、环顶、轨端、套筒、带箍、支撑、拉杆部件和螺栓。逐 SKU 识别材料，铁基和压铸铝配件是不同实际交换。

- 采集对象：内部接收的导轨配件与支撑构件
- 流属性/单位：Mass / kg
- 数量规则：actual_rail_fittings/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rail_brace`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。既有柱帽与新增支撑比例及不同金属质量均影响需求，高比值须用逐项构件清单核查。

#### 采集要求：归属于 rail_brace 的通行、机械及支持服务 (`rail_brace_access_service`)

过程／待建立交换的方向／类型：`rail_brace` / `inputs` / `product`.

记录 rail_brace 实际合同约定的通行、升降、吊装、抽集或防护服务，包括由其负责的闲置和返工可用时间。小时表示有记录的服务边界，不从人工劳动或标准工作日虚构。

- 采集对象：归属于 rail_brace 的通行、机械及支持服务
- 流属性/单位：Duration / h
- 数量规则：actual_rail_brace_access_service/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rail_brace`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：48
  - 单位：h
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。自有责任可用时间及中断影响小时数，宽泛区间不提供资产寿命或八小时工作日换算。

#### 采集要求：在 rail_brace 接收的随料包装 (`rail_brace_packaging_feed`)

过程／待建立交换的方向／类型：`rail_brace` / `inputs` / `product`.

接收 issue_packaging_rail_brace 对应的同一真实包装，不再次购入外部包装。分别登记本节点废物、可用外部退出、真实复用转移或在制品保留去向。

- 采集对象：在 rail_brace 接收的随料包装
- 流属性/单位：Mass / kg
- 数量规则：actual_rail_brace_packaging_feed/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rail_brace`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。区间仅为暂定异常筛查，物理数量由与源发料的核对建立，不能靠区间证明。

#### 采集要求：移交至网布安装的导轨集成区段 (`rail_ready_panels`)

过程／待建立交换的方向／类型：`rail_brace` / `outputs` / `product`.

移交已完成下一工序所需导轨、支撑和连接基础的实测区段，携带构件台账和验收状态。不合格区段仍属于拒收或返工状态。

- 采集对象：移交至网布安装的导轨集成区段
- 流属性/单位：Length / m
- 数量规则：actual_rail_ready_panels/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rail_brace`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。部分批次及真实重复返工移交均可能改变比值；它是路径筛查，不要求将移交量改为一米。

#### 采集要求：离开批次的可用导轨阶段材料 (`rail_unused_return`)

过程／待建立交换的方向／类型：`rail_brace` / `outputs` / `product`.

记录实际从本节点交给外部保管人的未用导轨、线材、配件或可复用包装。每项正退出保留自身材料、状态和原始上游负荷；已安装或污染材料不能自动认定可用。

- 采集对象：离开批次的可用导轨阶段材料
- 流属性/单位：Mass / kg
- 数量规则：actual_rail_unused_return/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rail_brace`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。发料后仍可能退出多余构件和可用防护，高值要求核对保管和库存，绝不授权避免生产抵扣。

#### 采集要求：导轨工作产生的未捕集物质排放 (`rail_direct_release`)

过程／待建立交换的方向／类型：`rail_brace` / `outputs` / `elementary`.

按实际金属或涂层物质、粒径描述及接收介质展开此条件角色。只计本节点切割、钻孔或连接造成的未捕集环境排放，捕集粉尘为废物。

- 采集对象：导轨工作产生的未捕集物质排放
- 流属性/单位：Mass / kg
- 数量规则：actual_rail_direct_release/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rail_brace`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。工具和捕集系统决定排放；筛查质量不是排放因子，也不提供物质身份或粒径类别。

#### 采集要求：网布工作接收的导轨集成区段 (`rail_panel_feed`)

过程／待建立交换的方向／类型：`fabric_tension` / `inputs` / `product`.

按匹配转移 ID 接收 rail_ready_panels 同状态实测区段，保留构件完整性。这是内部实物移交，不增加框架制造或采购负荷。

- 采集对象：网布工作接收的导轨集成区段
- 流属性/单位：Length / m
- 数量规则：actual_rail_panel_feed/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fabric_tension`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。接收量跟随真实移交和返访登记，比值高于最终验收长度时先核对源与接收数量。

#### 采集要求：内部接收的网布张紧与连接件 (`fabric_fittings`)

过程／待建立交换的方向／类型：`fabric_tension` / `inputs` / `product`.

接收实际新装的张紧条或带、箍带、螺栓、绑丝及扣环。铁基与铝件分别记录；张力线连接件只归一个工序，不在两阶段重复计入。

- 采集对象：内部接收的网布张紧与连接件
- 流属性/单位：Mass / kg
- 数量规则：actual_fabric_fittings/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fabric_tension`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。连接设计和紧固件材料影响质量和件数，高比值必须逐项核对，不假定所有配件均为钢。

#### 采集要求：归属于 fabric_tension 的通行、机械及支持服务 (`fabric_tension_access_service`)

过程／待建立交换的方向／类型：`fabric_tension` / `inputs` / `product`.

记录 fabric_tension 实际合同约定的通行、升降、吊装、抽集或防护服务，包括由其负责的闲置和返工可用时间。小时表示有记录的服务边界，不从人工劳动或标准工作日虚构。

- 采集对象：归属于 fabric_tension 的通行、机械及支持服务
- 流属性/单位：Duration / h
- 数量规则：actual_fabric_tension_access_service/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fabric_tension`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：48
  - 单位：h
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。自有责任可用时间及中断影响小时数，宽泛区间不提供资产寿命或八小时工作日换算。

#### 采集要求：在 fabric_tension 接收的随料包装 (`fabric_tension_packaging_feed`)

过程／待建立交换的方向／类型：`fabric_tension` / `inputs` / `product`.

接收 issue_packaging_fabric_tension 对应的同一真实包装，不再次购入外部包装。分别登记本节点废物、可用外部退出、真实复用转移或在制品保留去向。

- 采集对象：在 fabric_tension 接收的随料包装
- 流属性/单位：Mass / kg
- 数量规则：actual_fabric_tension_packaging_feed/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fabric_tension`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。区间仅为暂定异常筛查，物理数量由与源发料的核对建立，不能靠区间证明。

#### 采集要求：离开批次的可用网布阶段材料 (`fabric_unused_return`)

过程／待建立交换的方向／类型：`fabric_tension` / `outputs` / `product`.

记录 fabric_tension 实际交给外部保管人的未用网布、连接件库存或可用包装。材料对应的 U 和 X 为正输出，不包含保留围栏、废物及期末在制品。

- 采集对象：离开批次的可用网布阶段材料
- 流属性/单位：Mass / kg
- 数量规则：actual_fabric_unused_return/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fabric_tension`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。施工变更后可能退回未开网卷或多余紧固件，高比值只提示异常并保留原始材料负荷。

#### 采集要求：网布安装张紧产生的废物 (`fabric_waste`)

过程／待建立交换的方向／类型：`fabric_tension` / `outputs` / `waste`.

按实际材料和涂层记录本节点裁切网布、失效连接件、捕集颗粒及拆弃包装。本节点产生的缺陷网布拆除废物也在此记录。

- 采集对象：网布安装张紧产生的废物
- 流属性/单位：Mass / kg
- 数量规则：actual_fabric_waste/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fabric_tension`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。短区段、裁切和连接失败可产生大量损失，即使超出暂定区间，真实损失仍保留在批次负荷中。

#### 采集要求：网布安装产生的未捕集物质排放 (`fabric_direct_release`)

过程／待建立交换的方向／类型：`fabric_tension` / `outputs` / `elementary`.

只记录本节点剪裁或紧固实际造成的未捕集金属或涂层排放，确定物质、粒径基准及接收介质。不得用通用粉尘身份或不明材料亏差代替。

- 采集对象：网布安装产生的未捕集物质排放
- 流属性/单位：Mass / kg
- 数量规则：actual_fabric_direct_release/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fabric_tension`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。手工与动力裁剪的排放和捕集不同，此暂定区间不能代替测量或证明污染物 UUID。

#### 采集要求：内部接收的规定修补或清洁材料 (`coating_cleanup`)

过程／待建立交换的方向／类型：`finish_accept` / `inputs` / `product`.

只接收收料节点发出的项目或制造商实际要求的修补和清洁产品。记录配方及用途；焊接门的涂漆条款不要求本非门路线每一处导轨切口都涂锌漆。

- 采集对象：内部接收的规定修补或清洁材料
- 流属性/单位：Mass / kg
- 数量规则：actual_coating_cleanup/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish_accept`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。有的批次不需表面产品，真实损伤或清洁要求也可能需要多种配方；零需观察到未发生的证据，上限不是涂装配方。

#### 采集要求：归属于 finish_accept 的通行、机械及支持服务 (`finish_accept_access_service`)

过程／待建立交换的方向／类型：`finish_accept` / `inputs` / `product`.

记录 finish_accept 实际合同约定的通行、升降、吊装、抽集或防护服务，包括由其负责的闲置和返工可用时间。小时表示有记录的服务边界，不从人工劳动或标准工作日虚构。

- 采集对象：归属于 finish_accept 的通行、机械及支持服务
- 流属性/单位：Duration / h
- 数量规则：actual_finish_accept_access_service/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish_accept`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：48
  - 单位：h
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。自有责任可用时间及中断影响小时数，宽泛区间不提供资产寿命或八小时工作日换算。

#### 采集要求：在 finish_accept 接收的随料包装 (`finish_accept_packaging_feed`)

过程／待建立交换的方向／类型：`finish_accept` / `inputs` / `product`.

接收 issue_packaging_finish_accept 对应的同一真实包装，不再次购入外部包装。分别登记本节点废物、可用外部退出、真实复用转移或在制品保留去向。

- 采集对象：在 finish_accept 接收的随料包装
- 流属性/单位：Mass / kg
- 数量规则：actual_finish_accept_packaging_feed/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish_accept`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。区间仅为暂定异常筛查，物理数量由与源发料的核对建立，不能靠区间证明。

#### 采集要求：离开批次的可用完工材料 (`finish_unused_return`)

过程／待建立交换的方向／类型：`finish_accept` / `outputs` / `product`.

按确切当前状态，将 finish_accept 未用修补产品、新鲜水或可复用包装的实际 U/X 退出记为正输出。保留涂层、废水、固体残渣和期末在制品不能同时作为未用退出。

- 采集对象：离开批次的可用完工材料
- 流属性/单位：Mass / kg
- 数量规则：actual_finish_unused_return/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish_accept`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。发料后可退出剩余配方或新鲜水，高值需要分材料及水的保管记录，而不是再次从总投入扣除。

#### 采集要求：完工验收产生的固体废物 (`finish_waste`)

过程／待建立交换的方向／类型：`finish_accept` / `outputs` / `waste`.

按材料记录最终节点包装、耗用修补清洁残渣、捕集污染物和实际拆除的拒收构件。待纠正或待验收材料保留为可识别在制品，不默认成为废物。

- 采集对象：完工验收产生的固体废物
- 流属性/单位：Mass / kg
- 数量规则：actual_finish_waste/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish_accept`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。最终节点可能拆除先前安装件而产生较多废物，必须由产生节点和缺陷事件证据支持。

#### 采集要求：完工产生的其他未捕集物质排放 (`finish_other_release`)

过程／待建立交换的方向／类型：`finish_accept` / `outputs` / `elementary`.

按确切溶剂、金属、涂层组分或颗粒及接收介质展开实际排放，排除 finish_water_vapour 中的 H2O 及固液废物已捕集物质。 实际有证据的直接液态H2O退出也按本条件角色的真实接收介质单独展开，其实测水份额由calc_finish_water_vapour核对；空气蒸气UUID不能用于液态介质，收集处理液仍是废水。

- 采集对象：完工产生的其他未捕集物质排放
- 流属性/单位：Mass / kg
- 数量规则：actual_finish_other_release/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish_accept`
- 尚待核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。不同真实配方有不同挥发或颗粒组分，筛查质量不规定 VOC 成分，也不能用涂料产品流代替排放。

#### 采集要求：导轨集成产生的废物 (`rail_waste`)

过程／待建立交换的方向／类型：`rail_brace` / `outputs` / `waste`.

每个物理上独立的实际废物流、组成/状态及接收方须建立独立原子交换。本采集要求不是合并废物流；真实未分离的物理混合物可使用有证据的混合物身份，已分离去向不得重新合并。

按实际材料记录导轨切余、失效配件、线材残余、捕集加工颗粒及本节点丢弃包装。捕集颗粒仍为废物，收集器记录不证明其直接环境排放。

- 采集对象：导轨集成产生的废物
- 流属性/单位：Mass / kg
- 数量规则：actual_rail_waste/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rail_brace`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 未核实的可选筛查提示：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。切割布置、拒收和本节点拆包影响损失；核对材料与废物台账，不套用通用损耗百分比。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| survey_receive | 既有接口放行与安装材料接收 | required | 每个安装批次 | 接口验收、外部材料与包装保管及向工作节点真实发料 观察项 post_interface 和 physical_interface_release 仍由 cp_survey_receive 及 calc_post_interface/calc_physical_interface_release 独立测量既有柱/基础 Length/m 就绪与放行状态，不作为清单产品交换。 | 实际同状态移交量；仅 finish_accept 使用最终 L |
| rail_brace | 导轨、支撑及规定张力线集成 | required | 每个安装批次；新构件角色按实际既有/新增清单 | 将构件连接至放行立柱，附带切割归此节点 观察项 physical_interface_construction_feed 由 cp_rail_brace 和 calc_physical_interface_construction_feed 确认同一已放行资产几何/状态，保留源接收观察 ID 和真实责任，不增加资产制造或产品购入。 | 实际同状态移交量；仅 finish_accept 使用最终 L |
| fabric_tension | 镀锌勾花网布连接、张紧及固定 | required | 每个安装批次 | 集成实际网布与连接件为绷紧牢固区段 | 实际同状态移交量；仅 finish_accept 使用最终 L |
| finish_accept | 实际规定完工、清理及围栏服务验收 | required | 每批必检验收；修补、清洁材料及水仅按有据实际操作激活 | 接收张紧母体，执行真实自有责任完工并放行唯一验收输出 | 实际同状态移交量；仅 finish_accept 使用最终 L |

材料和包装从 survey_receive 直接发给真实使用或拆包节点；实物接口交 rail_brace，导轨就绪区段交 fabric_tension，张紧区段交 finish_accept。表面修补是最终节点内条件操作，所有批次仍需唯一检查验收门槛。缺陷可凭新遍次/转移事件回到明确节点，但不增加唯一最终输出。

### 明确的内部转移配对

| 源行 | 接收行 | 单位 | 含义 |
| --- | --- | --- | --- |
| issue_materials_rail_brace | rails | kg | 准确构件台账 issue_rails 对 rails；同 SKU/状态/kg，不重复采购 |
| issue_materials_rail_brace | rail_fittings | kg | 准确构件台账 issue_rail_fittings 对 rail_fittings；同 SKU/状态/kg，不重复采购 |
| issue_materials_rail_brace | tension_wire | kg | 准确构件台账 issue_tension_wire 对 tension_wire；同 SKU/状态/kg，不重复采购 |
| issue_materials_fabric_tension | chainlink_fabric | kg | 准确构件台账 issue_chainlink_fabric 对 chainlink_fabric；同 SKU/状态/kg，不重复采购 |
| issue_materials_fabric_tension | fabric_fittings | kg | 准确构件台账 issue_fabric_fittings 对 fabric_fittings；同 SKU/状态/kg，不重复采购 |
| issue_coating_cleanup | coating_cleanup | kg | 同材料及当前状态，只外部收料一次 |
| issue_packaging_rail_brace | rail_brace_packaging_feed | kg | 同实际包装件、成分和当前状态质量 |
| issue_packaging_fabric_tension | fabric_tension_packaging_feed | kg | 同实际包装件、成分和当前状态质量 |
| issue_packaging_finish_accept | finish_accept_packaging_feed | kg | 同实际包装件、成分和当前状态质量 |
| rail_ready_panels | rail_panel_feed | m | 同实测区段/立柱接口中心线几何及状态 |
| tensioned_fence | finish_panel_feed | m | 同实测区段/立柱接口中心线几何及状态 |

### 过程：既有接口放行与安装材料接收（`survey_receive`）

#### 输入

##### 产品流

###### 归属于 survey_receive 的电力（`survey_receive_electricity`）

包括 survey_receive 负责的实际电动工具、照明、抽集和防护负荷。登记电源、区间、读数系数及总表/分表拓扑，只分配真实未归属的总表剩余量。

- 选定流：归属于 survey_receive 的电力
- 流属性/单位：Energy / kWh
- 数量规则：actual_survey_receive_electricity/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。工具、返工及实际照明防护影响本节点需求，初始 kWh/米筛查不是额定功率或班次假设。

###### 外部领用的镀锌钢导轨（`receive_rails`）

收料节点负责镀锌钢导轨唯一一次外部进入。保留断面、牌号、成形和涂层状态，既有导轨留在接口记录。在收料废物、实际未用退出及节点发料之前测量批次总领用量；逐处识别全部完好未发库存的真实保管人和地点。

- 选定流：外部领用的镀锌钢导轨
- 流属性/单位：Mass / kg
- 数量规则：actual_receive_rails/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。总领用包括收料损失及未用退出，因此可超过安装保留量；区间只诊断台账尺度，不将退料再次扣减。

###### 外部领用的规定张力线（`receive_tension_wire`）

收料节点负责规定张力线唯一一次外部进入。保留实际顶部或底部角色、材料和涂层，不设默认线道数。在收料废物、实际未用退出及节点发料之前测量批次总领用量；逐处识别全部完好未发库存的真实保管人和地点。

- 选定流：外部领用的规定张力线
- 流属性/单位：Mass / kg
- 数量规则：actual_receive_tension_wire/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。总领用包括收料损失及未用退出，因此可超过安装保留量；区间只诊断台账尺度，不将退料再次扣减。

###### 外部领用的镀锌钢勾花网布（`receive_chainlink_fabric`）

收料节点负责镀锌钢勾花网布唯一一次外部进入。保留编织身份、SKU、高度、网孔、线规、网边和 GAW/GBW 切端状态，通用金属网身份不足。在收料废物、实际未用退出及节点发料之前测量批次总领用量；逐处识别全部完好未发库存的真实保管人和地点。

- 选定流：外部领用的镀锌钢勾花网布
- 流属性/单位：Mass / kg
- 数量规则：actual_receive_chainlink_fabric/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_survey_receive`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。总领用包括收料损失及未用退出，因此可超过安装保留量；区间只诊断台账尺度，不将退料再次扣减。

#### 输出

##### 产品流

##### 废物流

### 过程：导轨、支撑及规定张力线集成（`rail_brace`）

#### 输入

##### 产品流

###### 内部接收的镀锌钢导轨（`rails`）

只接收 survey_receive 实际发出的导轨，保留钢材牌号、成形路线、涂层及交付状态。合格现有接口上的既有导轨属于既有资产，不重复作为新购导轨。

- 选定流：内部接收的镀锌钢导轨
- 流属性/单位：Mass / kg
- 数量规则：actual_rails/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rail_brace`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。断面及顶部、中间、底部和斜撑导轨数量取决于实际设计；本区间不规定断面或材料系数。

###### 内部接收的规定张力线（`tension_wire`）

接收获批顶部或底部角色所用的实际张力线及当前涂层状态。既有合格线材不再次投入，也不从通用围栏图推定角色或间距。

- 选定流：内部接收的规定张力线
- 流属性/单位：Mass / kg
- 数量规则：actual_tension_wire/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rail_brace`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。直径、角色和线道数量属于项目选择；宽泛筛查不设默认线道数。

###### 归属于 rail_brace 的电力（`rail_brace_electricity`）

包括 rail_brace 负责的实际电动工具、照明、抽集和防护负荷。登记电源、区间、读数系数及总表/分表拓扑，只分配真实未归属的总表剩余量。

- 选定流：归属于 rail_brace 的电力
- 流属性/单位：Energy / kWh
- 数量规则：actual_rail_brace_electricity/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rail_brace`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。工具、返工及实际照明防护影响本节点需求，初始 kWh/米筛查不是额定功率或班次假设。

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：镀锌勾花网布连接、张紧及固定（`fabric_tension`）

#### 输入

##### 产品流

###### 内部接收的镀锌钢勾花网布（`chainlink_fabric`）

接收实际发往安装的编织镀锌网布，识别供应商 SKU、钢材牌号、高度、网孔、线规、上下网边和编织后镀锌或编织前镀锌状态。通用焊网或原钢丝不能证明其身份。

- 选定流：内部接收的镀锌钢勾花网布
- 流属性/单位：Mass / kg
- 数量规则：actual_chainlink_fabric/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fabric_tension`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。高度、网孔、线规及实际裁切决定质量；宽泛区间既不是面积质量换算系数，也不是合格产品规格。

###### 归属于 fabric_tension 的电力（`fabric_tension_electricity`）

包括 fabric_tension 负责的实际电动工具、照明、抽集和防护负荷。登记电源、区间、读数系数及总表/分表拓扑，只分配真实未归属的总表剩余量。

- 选定流：归属于 fabric_tension 的电力
- 流属性/单位：Energy / kWh
- 数量规则：actual_fabric_tension_electricity/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fabric_tension`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。工具、返工及实际照明防护影响本节点需求，初始 kWh/米筛查不是额定功率或班次假设。

#### 输出

##### 产品流

###### 移交至完工节点的绷紧固定区段（`tensioned_fence`）

实际连接、拉伸和固定后移交实测区段，并按要求剪除和弯折余端。保留高度、净空、网孔及涂层状态，将未解决缺陷送返工而非最终验收输出。

- 选定流：移交至完工节点的绷紧固定区段
- 流属性/单位：Length / m
- 数量规则：actual_tensioned_fence/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fabric_tension`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。移交记录反映实际完成及返工路径；区间仅检查路径尺度，不证明已绷紧或验收。

##### 废物流

##### 基本流

### 过程：实际规定完工、清理及围栏服务验收（`finish_accept`）

#### 输入

##### 产品流

###### 完工接收的已张紧区段母体（`finish_panel_feed`）

在表面处理与最终检查前，接收 tensioned_fence 的实际绷紧区段。相关时登记剩余材料与水状态，不含已丢弃物。

- 选定流：完工接收的已张紧区段母体
- 流属性/单位：Length / m
- 数量规则：actual_finish_panel_feed/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish_accept`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。部分验收和重复检查可改变母体移交比值，必须实测，不强设为最终参考量。

###### 完工工作直接供应的新鲜水（`finish_water`）

记录 finish_accept 实际清洁或配料操作所用新鲜水、来源和水质。完好未发库存只扣一次；已发出后又未使用退出的水保留为正输出。

- 选定流：完工工作直接供应的新鲜水
- 流属性/单位：Mass / kg
- 数量规则：actual_finish_water/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish_accept`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。用水量取决于是否及如何清洁或湿处理，区间可替换，不暗示每段围栏都要水洗。

###### 归属于 finish_accept 的电力（`finish_accept_electricity`）

包括 finish_accept 负责的实际电动工具、照明、抽集和防护负荷。登记电源、区间、读数系数及总表/分表拓扑，只分配真实未归属的总表剩余量。

- 选定流：归属于 finish_accept 的电力
- 流属性/单位：Energy / kWh
- 数量规则：actual_finish_accept_electricity/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish_accept`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。工具、返工及实际照明防护影响本节点需求，初始 kWh/米筛查不是额定功率或班次假设。

#### 输出

##### 产品流

###### 验收合格的镀锌勾花网布及导轨安装服务（`accepted_fence_service`）

仅对既有立柱和基础已放行、实际高度、网孔、线规、网边及镀锌状态已声明、全部自有责任构件和完工要求已验收的唯一净区段中心线长度，交付本安装服务。

- 选定流：验收合格的镀锌勾花网布及导轨安装服务
- 流属性/单位：Length / m
- 数量规则：1 m
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish_accept`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 数量范围：严格参考归一化
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：m
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集计算（`calculated_from_collection`）

L 为实测且为正的唯一净验收区段长度；L/L 严格定义一参考米，不提供施工收率、性能容许值或验收配额。

##### 废物流

###### 交给废物保管人的完工废水（`finish_wastewater`）

测量 finish_accept 实际退出的液态废物、悬浮组分及去向。送处理的液体与直接环境排放区别记录，水和各组分量分开保留。

- 选定流：交给废物保管人的完工废水
- 流属性/单位：Mass / kg
- 数量规则：actual_finish_wastewater/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish_accept`
- 来源：`clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。清洗液和夹带固体随真实操作变化，宽泛区间不定义废水成分或处置路线。

##### 基本流

###### 实际排入未特指空气的 H2O 水蒸气（`finish_water_vapour`）

此角色仅表示 finish_accept 实际操作中 H2O 跨越环境边界排入未特指空气。必须有独立观察且经验证的蒸气量，或经验证的操作专用模型；身份相符不证明发生蒸发。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定模式：fixed
- 流属性/单位：Mass / kg
- 数量规则：actual_finish_water_vapour/L
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish_accept`
- 数量范围：暂定诊断筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

此区间为暂定作者推理，经独立审查可替换。是否蒸发及其数量取决于实际配方和清洁水，区间不是干燥因子，未闭合水差额绝不是蒸气。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | 前景批次和节点 | 优先采用独立实测节点和批次操作。最终目的输出为验收围栏服务；内部供料、临时区段状态和未用原材料保管退出不是额外共同生产围栏服务。 |  |
| allocation_original_unused_exit | 全部可用 U/X 输出 | U 与 X 为仍可用原材料向真实外部保管人的正且互斥退出。按同一材料/状态证据只携带未改变原料的原上游负荷；收料、现场安装搬运、闲置和返工负荷仍归本安装批次。净消耗可用于诊断扣减，但不得产生第二次负交换或避免生产抵扣。 |  |
| allocation_rework | 每项拒收状态和返工循环 | 记录每项缺陷、产生节点、状态、去向、接收人及返工遍次。去向为本节点或明确上游纠正、证实可用退回/转移、需显式状态重审的回收/降级、实际废物或期末在制品。保留全部真实工作和损失，重复遍次增加负荷而不增加唯一验收长度；拒收区段不作最终输出。 |  |
| allocation_meter_residual | 全部电力流卡 | 同一校准区间按实际系数换算读数。从总表差值只扣全部总表内已直接归属用电各一次，不扣总表外直接量。本节点直接量加其正剩余份额，份额须有完整合格消费者及正分母。实测零剩余不需权重；负/未知剩余、拓扑缺失或消费者不全为缺口，不得直接量加完整总表量。 |  |
| allocation_shared_services | 全部服务流卡 | 实际合同小时先归直接使用、自有责任闲置和返工，仅剩余实际服务按完整有据分母分配。记录资产、账单、期间、供应边界和决定；不得默认八小时工作日、年化、通用寿命或人工小时代理，不重复供应商已含能源/资产生产。 |  |
| allocation_periods | 期间和阶段台账 | 每项投入、事件、服务区间和输出只归实际期间或明确拆分区间一次。期初期末库存/WIP 以相同保管状态 ID 结转。记录跨期服务决定及更换、终止、重启的理由和证据；未知状态阻止最终完成。先核对期间与全批次总量，再用最终 L 归一化一次。 |  |
| allocation_material_representation | 复合物材料负荷和质量 | 使用真实购入复合物整体或有据实测组分拆分，两者互斥。完整复合物数据集不得再加组分生产。验收保留质量是物理存量检查，不是第二次客户移交交换或额外最终参考输出。 |  |
| allocation_rule_8 | foreground_burden_allocation | 受损安装区段不自动成为有用共产品。实际回收或降级须先记录改变状态后的去向与负荷处理，再选最终交换。实物保留材料、临时接口和可用原库存均须与验收安装服务明确区分。 |  |

## 8. 前景数据采集、计算与质量规则

以下原始字段为稳定 ASCII 键，每卡仅链接真实自有节点。数组数量与同记录事件或区段 ID 对应；电表和服务中间计算逐唯一分配区间执行后才累加批次分子。测量换算及当前状态桥接先保留。证据字段为类别或文档引用，不作为可加数量。发生、状态或量未知为缺口，未发生需相应证据。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_survey_receive | survey_receive | 本节点实际负责的全部清单角色 | 事件台账；库存盘点；仪器读数；签署实物移交；缺陷/返工及验收记录 | post_interface_transfer_event_ids; post_interface_segment_ids; post_interface_centerline_m; post_interface_state_ids; post_interface_source_node; post_interface_recipient_node; post_interface_handoff_document_ids; post_interface_condition_evidence; post_interface_corner_and_opening_resolution; receive_packaging_opening_kg; receive_packaging_external_receipts_kg; receive_packaging_closing_unissued_intact_kg; receive_packaging_material_ids; receive_packaging_state_ids; receive_packaging_native_units; receive_packaging_native_quantities; receive_packaging_measured_kg_per_native_unit; receive_packaging_bridge_evidence; receive_packaging_stock_item_ids; receive_packaging_stock_sublocations; receive_packaging_stock_custodians; receive_packaging_stock_count_times; receive_packaging_receipt_event_ids; receive_reject_exit_event_ids; receive_reject_mass_kg; receive_reject_material_ids; receive_reject_state_ids; receive_reject_fate_codes; receive_reject_custodian_ids; receive_reject_waste_treatment_route; receive_reject_native_units; receive_reject_native_quantities; receive_reject_measured_kg_per_native_unit; receive_reject_bridge_evidence; receive_reject_absence_evidence; receive_packaging_waste_exit_event_ids; receive_packaging_waste_mass_kg; receive_packaging_waste_material_ids; receive_packaging_waste_state_ids; receive_packaging_waste_fate_codes; receive_packaging_waste_custodian_ids; receive_packaging_waste_waste_treatment_route; receive_packaging_waste_native_units; receive_packaging_waste_native_quantities; receive_packaging_waste_measured_kg_per_native_unit; receive_packaging_waste_bridge_evidence; receive_packaging_waste_absence_evidence; receive_unused_return_return_event_ids; receive_unused_return_return_kg; receive_unused_return_transfer_event_ids; receive_unused_return_transfer_kg; receive_unused_return_material_ids; receive_unused_return_state_ids; receive_unused_return_native_units; receive_unused_return_native_quantities; receive_unused_return_measured_kg_per_native_unit; receive_unused_return_bridge_evidence; receive_unused_return_external_custodian_ids; receive_unused_return_original_input_ids; receive_unused_return_original_upstream_burden_evidence; receive_unused_return_exit_quality_evidence; receive_unused_return_retained_wip_exclusion_evidence; survey_receive_electricity_supply_id; survey_receive_electricity_allocation_instance_ids; survey_receive_electricity_interval_ids; survey_receive_electricity_interval_start; survey_receive_electricity_interval_end; survey_receive_electricity_own_direct_meter_ids; survey_receive_electricity_own_direct_read_event_ids; survey_receive_electricity_own_direct_start_reads; survey_receive_electricity_own_direct_end_reads; survey_receive_electricity_own_direct_kwh_factors; survey_receive_electricity_own_direct_topology; survey_receive_electricity_master_scope_present; survey_receive_electricity_master_meter_id; survey_receive_electricity_master_start_read; survey_receive_electricity_master_end_read; survey_receive_electricity_master_kwh_factor; survey_receive_electricity_all_inside_meter_ids; survey_receive_electricity_all_inside_read_event_ids; survey_receive_electricity_all_inside_start_reads; survey_receive_electricity_all_inside_end_reads; survey_receive_electricity_all_inside_kwh_factors; survey_receive_electricity_all_inside_consumer_ids; survey_receive_electricity_eligible_consumer_ids; survey_receive_electricity_own_residual_weight; survey_receive_electricity_all_eligible_residual_weights; survey_receive_electricity_weight_method_evidence; survey_receive_electricity_meter_topology_evidence; survey_receive_electricity_calibration_evidence; survey_receive_access_service_asset_or_service_id; survey_receive_access_service_allocation_instance_ids; survey_receive_access_service_contract_id; survey_receive_access_service_period_ids; survey_receive_access_service_period_start; survey_receive_access_service_period_end; survey_receive_access_service_billed_native_quantity; survey_receive_access_service_billed_native_unit; survey_receive_access_service_actual_hours_per_native_unit; survey_receive_access_service_conversion_evidence; survey_receive_access_service_all_direct_service_event_ids; survey_receive_access_service_all_direct_service_hours; survey_receive_access_service_own_direct_service_event_ids; survey_receive_access_service_own_direct_service_hours; survey_receive_access_service_owned_idle_event_ids; survey_receive_access_service_owned_rework_event_ids; survey_receive_access_service_eligible_consumer_ids; survey_receive_access_service_own_residual_weight; survey_receive_access_service_all_eligible_residual_weights; survey_receive_access_service_allocation_decision_id; survey_receive_access_service_provider_boundary_coverage; receive_rails_opening_kg; receive_rails_external_receipts_kg; receive_rails_closing_unissued_intact_kg; receive_rails_material_ids; receive_rails_state_ids; receive_rails_native_units; receive_rails_native_quantities; receive_rails_measured_kg_per_native_unit; receive_rails_bridge_evidence; receive_rails_stock_item_ids; receive_rails_stock_sublocations; receive_rails_stock_custodians; receive_rails_stock_count_times; receive_rails_receipt_event_ids; issue_rails_transfer_event_ids; issue_rails_mass_kg; issue_rails_material_ids; issue_rails_state_ids; issue_rails_source_row_ids; issue_rails_source_node; issue_rails_recipient_node; issue_rails_custodian_from; issue_rails_custodian_to; issue_rails_handoff_document_ids; issue_rails_native_units; issue_rails_native_quantities; issue_rails_measured_kg_per_native_unit; issue_rails_bridge_evidence; receive_rail_fittings_opening_kg; receive_rail_fittings_external_receipts_kg; receive_rail_fittings_closing_unissued_intact_kg; receive_rail_fittings_material_ids; receive_rail_fittings_state_ids; receive_rail_fittings_native_units; receive_rail_fittings_native_quantities; receive_rail_fittings_measured_kg_per_native_unit; receive_rail_fittings_bridge_evidence; receive_rail_fittings_stock_item_ids; receive_rail_fittings_stock_sublocations; receive_rail_fittings_stock_custodians; receive_rail_fittings_stock_count_times; receive_rail_fittings_receipt_event_ids; issue_rail_fittings_transfer_event_ids; issue_rail_fittings_mass_kg; issue_rail_fittings_material_ids; issue_rail_fittings_state_ids; issue_rail_fittings_source_row_ids; issue_rail_fittings_source_node; issue_rail_fittings_recipient_node; issue_rail_fittings_custodian_from; issue_rail_fittings_custodian_to; issue_rail_fittings_handoff_document_ids; issue_rail_fittings_native_units; issue_rail_fittings_native_quantities; issue_rail_fittings_measured_kg_per_native_unit; issue_rail_fittings_bridge_evidence; receive_tension_wire_opening_kg; receive_tension_wire_external_receipts_kg; receive_tension_wire_closing_unissued_intact_kg; receive_tension_wire_material_ids; receive_tension_wire_state_ids; receive_tension_wire_native_units; receive_tension_wire_native_quantities; receive_tension_wire_measured_kg_per_native_unit; receive_tension_wire_bridge_evidence; receive_tension_wire_stock_item_ids; receive_tension_wire_stock_sublocations; receive_tension_wire_stock_custodians; receive_tension_wire_stock_count_times; receive_tension_wire_receipt_event_ids; issue_tension_wire_transfer_event_ids; issue_tension_wire_mass_kg; issue_tension_wire_material_ids; issue_tension_wire_state_ids; issue_tension_wire_source_row_ids; issue_tension_wire_source_node; issue_tension_wire_recipient_node; issue_tension_wire_custodian_from; issue_tension_wire_custodian_to; issue_tension_wire_handoff_document_ids; issue_tension_wire_native_units; issue_tension_wire_native_quantities; issue_tension_wire_measured_kg_per_native_unit; issue_tension_wire_bridge_evidence; receive_chainlink_fabric_opening_kg; receive_chainlink_fabric_external_receipts_kg; receive_chainlink_fabric_closing_unissued_intact_kg; receive_chainlink_fabric_material_ids; receive_chainlink_fabric_state_ids; receive_chainlink_fabric_native_units; receive_chainlink_fabric_native_quantities; receive_chainlink_fabric_measured_kg_per_native_unit; receive_chainlink_fabric_bridge_evidence; receive_chainlink_fabric_stock_item_ids; receive_chainlink_fabric_stock_sublocations; receive_chainlink_fabric_stock_custodians; receive_chainlink_fabric_stock_count_times; receive_chainlink_fabric_receipt_event_ids; issue_chainlink_fabric_transfer_event_ids; issue_chainlink_fabric_mass_kg; issue_chainlink_fabric_material_ids; issue_chainlink_fabric_state_ids; issue_chainlink_fabric_source_row_ids; issue_chainlink_fabric_source_node; issue_chainlink_fabric_recipient_node; issue_chainlink_fabric_custodian_from; issue_chainlink_fabric_custodian_to; issue_chainlink_fabric_handoff_document_ids; issue_chainlink_fabric_native_units; issue_chainlink_fabric_native_quantities; issue_chainlink_fabric_measured_kg_per_native_unit; issue_chainlink_fabric_bridge_evidence; receive_fabric_fittings_opening_kg; receive_fabric_fittings_external_receipts_kg; receive_fabric_fittings_closing_unissued_intact_kg; receive_fabric_fittings_material_ids; receive_fabric_fittings_state_ids; receive_fabric_fittings_native_units; receive_fabric_fittings_native_quantities; receive_fabric_fittings_measured_kg_per_native_unit; receive_fabric_fittings_bridge_evidence; receive_fabric_fittings_stock_item_ids; receive_fabric_fittings_stock_sublocations; receive_fabric_fittings_stock_custodians; receive_fabric_fittings_stock_count_times; receive_fabric_fittings_receipt_event_ids; issue_fabric_fittings_transfer_event_ids; issue_fabric_fittings_mass_kg; issue_fabric_fittings_material_ids; issue_fabric_fittings_state_ids; issue_fabric_fittings_source_row_ids; issue_fabric_fittings_source_node; issue_fabric_fittings_recipient_node; issue_fabric_fittings_custodian_from; issue_fabric_fittings_custodian_to; issue_fabric_fittings_handoff_document_ids; issue_fabric_fittings_native_units; issue_fabric_fittings_native_quantities; issue_fabric_fittings_measured_kg_per_native_unit; issue_fabric_fittings_bridge_evidence; receive_coating_cleanup_opening_kg; receive_coating_cleanup_external_receipts_kg; receive_coating_cleanup_closing_unissued_intact_kg; receive_coating_cleanup_material_ids; receive_coating_cleanup_state_ids; receive_coating_cleanup_native_units; receive_coating_cleanup_native_quantities; receive_coating_cleanup_measured_kg_per_native_unit; receive_coating_cleanup_bridge_evidence; receive_coating_cleanup_stock_item_ids; receive_coating_cleanup_stock_sublocations; receive_coating_cleanup_stock_custodians; receive_coating_cleanup_stock_count_times; receive_coating_cleanup_receipt_event_ids; issue_coating_cleanup_transfer_event_ids; issue_coating_cleanup_mass_kg; issue_coating_cleanup_material_ids; issue_coating_cleanup_state_ids; issue_coating_cleanup_source_row_ids; issue_coating_cleanup_source_node; issue_coating_cleanup_recipient_node; issue_coating_cleanup_custodian_from; issue_coating_cleanup_custodian_to; issue_coating_cleanup_handoff_document_ids; issue_coating_cleanup_native_units; issue_coating_cleanup_native_quantities; issue_coating_cleanup_measured_kg_per_native_unit; issue_coating_cleanup_bridge_evidence; physical_interface_release_transfer_event_ids; physical_interface_release_segment_ids; physical_interface_release_centerline_m; physical_interface_release_state_ids; physical_interface_release_source_node; physical_interface_release_recipient_node; physical_interface_release_handoff_document_ids; physical_interface_release_condition_evidence; physical_interface_release_corner_and_opening_resolution; issue_packaging_rail_brace_transfer_event_ids; issue_packaging_rail_brace_mass_kg; issue_packaging_rail_brace_material_ids; issue_packaging_rail_brace_state_ids; issue_packaging_rail_brace_source_row_ids; issue_packaging_rail_brace_source_node; issue_packaging_rail_brace_recipient_node; issue_packaging_rail_brace_custodian_from; issue_packaging_rail_brace_custodian_to; issue_packaging_rail_brace_handoff_document_ids; issue_packaging_rail_brace_native_units; issue_packaging_rail_brace_native_quantities; issue_packaging_rail_brace_measured_kg_per_native_unit; issue_packaging_rail_brace_bridge_evidence; issue_packaging_fabric_tension_transfer_event_ids; issue_packaging_fabric_tension_mass_kg; issue_packaging_fabric_tension_material_ids; issue_packaging_fabric_tension_state_ids; issue_packaging_fabric_tension_source_row_ids; issue_packaging_fabric_tension_source_node; issue_packaging_fabric_tension_recipient_node; issue_packaging_fabric_tension_custodian_from; issue_packaging_fabric_tension_custodian_to; issue_packaging_fabric_tension_handoff_document_ids; issue_packaging_fabric_tension_native_units; issue_packaging_fabric_tension_native_quantities; issue_packaging_fabric_tension_measured_kg_per_native_unit; issue_packaging_fabric_tension_bridge_evidence; issue_packaging_finish_accept_transfer_event_ids; issue_packaging_finish_accept_mass_kg; issue_packaging_finish_accept_material_ids; issue_packaging_finish_accept_state_ids; issue_packaging_finish_accept_source_row_ids; issue_packaging_finish_accept_source_node; issue_packaging_finish_accept_recipient_node; issue_packaging_finish_accept_custodian_from; issue_packaging_finish_accept_custodian_to; issue_packaging_finish_accept_handoff_document_ids; issue_packaging_finish_accept_native_units; issue_packaging_finish_accept_native_quantities; issue_packaging_finish_accept_measured_kg_per_native_unit; issue_packaging_finish_accept_bridge_evidence; survey_receive_lot_id; survey_receive_site_id; survey_receive_event_id; survey_receive_period_id; survey_receive_phase_id; survey_receive_event_start; survey_receive_event_end; survey_receive_operator_id; survey_receive_instrument_id; survey_receive_calibration_id; survey_receive_record_revision; survey_receive_source_document_id; survey_receive_state_before; survey_receive_state_after; survey_receive_defect_id; survey_receive_rework_route; survey_receive_rework_pass_id; survey_receive_upstream_dataset_id; survey_receive_upstream_dataset_boundary; survey_receive_upstream_dataset_packaging_coverage; survey_receive_absence_evidence; survey_receive_uncertainty_record; survey_receive_component_schedule; survey_receive_design_release_id; survey_receive_post_foundation_compatibility; survey_receive_height_mesh_gauge_selvage_gaw_gbw; survey_receive_material_receipt_fate_ledger; survey_receive_packaging_receipt_fate_ledger; survey_receive_original_material_unit_burdens; survey_receive_intact_stock_future_lot_assignments; survey_receive_mass_closure_group_keys; survey_receive_mass_closure_card_event_crosswalk; survey_receive_mass_closure_material_source_state_actual_state_period_kg_evidence; survey_receive_mass_closure_opening_processed_wip_kg; survey_receive_mass_closure_opening_processed_wip_event_ids; survey_receive_mass_closure_opening_previous_closing_event_ids; survey_receive_mass_closure_closing_processed_wip_kg; survey_receive_mass_closure_closing_processed_wip_event_ids; survey_receive_mass_closure_wip_panel_or_component_ids; survey_receive_mass_closure_wip_exclusivity_evidence; survey_receive_mass_closure_processed_transfer_in_kg; survey_receive_mass_closure_processed_transfer_out_kg; survey_receive_mass_closure_processed_transfer_event_crosswalk; survey_receive_mass_closure_measured_tolerance_kg | 每批放行时按实际签署设计测量中间/终端柱和基础接口并检查状态。逐项区分既有合格和本安装责任新增构件。按 SKU/当前状态称量收料与期初期末库存；全部未发完好库存按真实保管人和地点只计一次。记录每次材料总收料、包装、拒收、U/X及发料事件。随料包装独立称量并关联接收节点。发票须匹配实际材料和包装边界。记录本节点电表、合同服务及缺陷纠正与原收料关联。 完整累加和归属方法：按文字明确规则及唯一事件键计算物理分子，保留真实重复遍次、缺陷及分材料互斥池。每卡物理量只除同一正 L 一次，L 来自 calc_accepted_fence_service。先核对相邻转移ID和期间总量再归一化。 观察项 post_interface 和 physical_interface_release 仍由 cp_survey_receive 及 calc_post_interface/calc_physical_interface_release 独立测量既有柱/基础 Length/m 就绪与放行状态，不作为清单产品交换。 | kg; m; kWh; h，按各原始记录声明单位分开 | 每次收料、发料、实物移交、操作、缺陷/返工、退出和验收；报告边界盘点；每记录区间电表读数；每账单期间服务记录 | 从节点实际进入至验收或已记录WIP/退出的完整批次期间，保留各期期初期末及全部自有责任闲置返工区间 | 仅 survey_receive 及明确项目/场地和真实保管位置，共享资产覆盖同区间完整消费者 | 每参考流 | 校准秤/测量/电表证据；同SKU当前状态原生量桥接、包装皮重与不确定性；设计/状态和保管签署；配方和水去向；废物/接收单；全部库存位置；完整拓扑消费者及分配决定；记录版本及不确定性历史 |
| cp_rail_brace | rail_brace | 本节点实际负责的全部清单角色 | 事件台账；库存盘点；仪器读数；签署实物移交；缺陷/返工及验收记录 | rails_transfer_event_ids; rails_mass_kg; rails_material_ids; rails_state_ids; rails_source_row_ids; rails_source_node; rails_recipient_node; rails_custodian_from; rails_custodian_to; rails_handoff_document_ids; rails_native_units; rails_native_quantities; rails_measured_kg_per_native_unit; rails_bridge_evidence; rail_fittings_transfer_event_ids; rail_fittings_mass_kg; rail_fittings_material_ids; rail_fittings_state_ids; rail_fittings_source_row_ids; rail_fittings_source_node; rail_fittings_recipient_node; rail_fittings_custodian_from; rail_fittings_custodian_to; rail_fittings_handoff_document_ids; rail_fittings_native_units; rail_fittings_native_quantities; rail_fittings_measured_kg_per_native_unit; rail_fittings_bridge_evidence; tension_wire_transfer_event_ids; tension_wire_mass_kg; tension_wire_material_ids; tension_wire_state_ids; tension_wire_source_row_ids; tension_wire_source_node; tension_wire_recipient_node; tension_wire_custodian_from; tension_wire_custodian_to; tension_wire_handoff_document_ids; tension_wire_native_units; tension_wire_native_quantities; tension_wire_measured_kg_per_native_unit; tension_wire_bridge_evidence; rail_ready_panels_transfer_event_ids; rail_ready_panels_segment_ids; rail_ready_panels_centerline_m; rail_ready_panels_state_ids; rail_ready_panels_source_node; rail_ready_panels_recipient_node; rail_ready_panels_handoff_document_ids; rail_ready_panels_condition_evidence; rail_ready_panels_corner_and_opening_resolution; rail_waste_exit_event_ids; rail_waste_mass_kg; rail_waste_material_ids; rail_waste_state_ids; rail_waste_fate_codes; rail_waste_custodian_ids; rail_waste_waste_treatment_route; rail_waste_native_units; rail_waste_native_quantities; rail_waste_measured_kg_per_native_unit; rail_waste_bridge_evidence; rail_waste_absence_evidence; rail_direct_release_release_event_ids; rail_direct_release_uncaptured_mass_kg; rail_direct_release_substance_ids; rail_direct_release_substance_names; rail_direct_release_receiving_media; rail_direct_release_particle_size_basis; rail_direct_release_measurement_method; rail_direct_release_capture_boundary_evidence; rail_direct_release_operation_ids; rail_direct_release_absence_evidence; rail_unused_return_return_event_ids; rail_unused_return_return_kg; rail_unused_return_transfer_event_ids; rail_unused_return_transfer_kg; rail_unused_return_material_ids; rail_unused_return_state_ids; rail_unused_return_native_units; rail_unused_return_native_quantities; rail_unused_return_measured_kg_per_native_unit; rail_unused_return_bridge_evidence; rail_unused_return_external_custodian_ids; rail_unused_return_original_input_ids; rail_unused_return_original_upstream_burden_evidence; rail_unused_return_exit_quality_evidence; rail_unused_return_retained_wip_exclusion_evidence; rail_brace_electricity_supply_id; rail_brace_electricity_allocation_instance_ids; rail_brace_electricity_interval_ids; rail_brace_electricity_interval_start; rail_brace_electricity_interval_end; rail_brace_electricity_own_direct_meter_ids; rail_brace_electricity_own_direct_read_event_ids; rail_brace_electricity_own_direct_start_reads; rail_brace_electricity_own_direct_end_reads; rail_brace_electricity_own_direct_kwh_factors; rail_brace_electricity_own_direct_topology; rail_brace_electricity_master_scope_present; rail_brace_electricity_master_meter_id; rail_brace_electricity_master_start_read; rail_brace_electricity_master_end_read; rail_brace_electricity_master_kwh_factor; rail_brace_electricity_all_inside_meter_ids; rail_brace_electricity_all_inside_read_event_ids; rail_brace_electricity_all_inside_start_reads; rail_brace_electricity_all_inside_end_reads; rail_brace_electricity_all_inside_kwh_factors; rail_brace_electricity_all_inside_consumer_ids; rail_brace_electricity_eligible_consumer_ids; rail_brace_electricity_own_residual_weight; rail_brace_electricity_all_eligible_residual_weights; rail_brace_electricity_weight_method_evidence; rail_brace_electricity_meter_topology_evidence; rail_brace_electricity_calibration_evidence; rail_brace_access_service_asset_or_service_id; rail_brace_access_service_allocation_instance_ids; rail_brace_access_service_contract_id; rail_brace_access_service_period_ids; rail_brace_access_service_period_start; rail_brace_access_service_period_end; rail_brace_access_service_billed_native_quantity; rail_brace_access_service_billed_native_unit; rail_brace_access_service_actual_hours_per_native_unit; rail_brace_access_service_conversion_evidence; rail_brace_access_service_all_direct_service_event_ids; rail_brace_access_service_all_direct_service_hours; rail_brace_access_service_own_direct_service_event_ids; rail_brace_access_service_own_direct_service_hours; rail_brace_access_service_owned_idle_event_ids; rail_brace_access_service_owned_rework_event_ids; rail_brace_access_service_eligible_consumer_ids; rail_brace_access_service_own_residual_weight; rail_brace_access_service_all_eligible_residual_weights; rail_brace_access_service_allocation_decision_id; rail_brace_access_service_provider_boundary_coverage; physical_interface_construction_feed_transfer_event_ids; physical_interface_construction_feed_segment_ids; physical_interface_construction_feed_centerline_m; physical_interface_construction_feed_state_ids; physical_interface_construction_feed_source_node; physical_interface_construction_feed_recipient_node; physical_interface_construction_feed_handoff_document_ids; physical_interface_construction_feed_condition_evidence; physical_interface_construction_feed_corner_and_opening_resolution; rail_brace_packaging_feed_transfer_event_ids; rail_brace_packaging_feed_mass_kg; rail_brace_packaging_feed_material_ids; rail_brace_packaging_feed_state_ids; rail_brace_packaging_feed_source_row_ids; rail_brace_packaging_feed_source_node; rail_brace_packaging_feed_recipient_node; rail_brace_packaging_feed_custodian_from; rail_brace_packaging_feed_custodian_to; rail_brace_packaging_feed_handoff_document_ids; rail_brace_packaging_feed_native_units; rail_brace_packaging_feed_native_quantities; rail_brace_packaging_feed_measured_kg_per_native_unit; rail_brace_packaging_feed_bridge_evidence; rail_brace_lot_id; rail_brace_site_id; rail_brace_event_id; rail_brace_period_id; rail_brace_phase_id; rail_brace_event_start; rail_brace_event_end; rail_brace_operator_id; rail_brace_instrument_id; rail_brace_calibration_id; rail_brace_record_revision; rail_brace_source_document_id; rail_brace_state_before; rail_brace_state_after; rail_brace_defect_id; rail_brace_rework_route; rail_brace_rework_pass_id; rail_brace_upstream_dataset_id; rail_brace_upstream_dataset_boundary; rail_brace_upstream_dataset_packaging_coverage; rail_brace_absence_evidence; rail_brace_uncertainty_record; rail_brace_component_schedule; rail_brace_incidental_cut_register; rail_brace_material_fate_ledger; rail_brace_packaging_fate_ledger; rail_brace_rejected_state_register; rail_ready_panels_retained_component_mass_kg; rail_ready_panels_retained_component_event_ids; rail_ready_panels_retained_component_material_ids; rail_ready_panels_retained_component_source_state_ids; rail_ready_panels_retained_component_actual_state_ids; rail_ready_panels_retained_component_period_ids; rail_ready_panels_retained_component_panel_transfer_ids; rail_ready_panels_retained_component_source_input_ids; rail_ready_panels_retained_component_bridge_evidence; rail_ready_panels_retained_component_existing_exclusion; rail_ready_panels_retained_component_representation_mode; rail_brace_mass_closure_group_keys; rail_brace_mass_closure_card_event_crosswalk; rail_brace_mass_closure_material_source_state_actual_state_period_kg_evidence; rail_brace_mass_closure_opening_processed_wip_kg; rail_brace_mass_closure_opening_processed_wip_event_ids; rail_brace_mass_closure_opening_previous_closing_event_ids; rail_brace_mass_closure_closing_processed_wip_kg; rail_brace_mass_closure_closing_processed_wip_event_ids; rail_brace_mass_closure_wip_panel_or_component_ids; rail_brace_mass_closure_wip_exclusivity_evidence; rail_brace_mass_closure_processed_transfer_in_kg; rail_brace_mass_closure_processed_transfer_out_kg; rail_brace_mass_closure_processed_transfer_event_crosswalk; rail_brace_mass_closure_measured_tolerance_kg | 按匹配转移 ID 确认立柱接口放行和各导轨材料/包装发料。用校准秤测量发接同状态 kg，件数或长度原记录仅用同 SKU/状态实测桥接。登记导轨切割连接、框架配件完成和区段实测移交。每遍返工、切余、捕集废物、未捕集物质、U/X和包装去向归 rail_brace。保留操作电表拓扑、读数校准、合格消费者、合同机械可用性和原工作包责任。 完整累加和归属方法：按文字明确规则及唯一事件键计算物理分子，保留真实重复遍次、缺陷及分材料互斥池。每卡物理量只除同一正 L 一次，L 来自 calc_accepted_fence_service。先核对相邻转移ID和期间总量再归一化。 观察项 physical_interface_construction_feed 由 cp_rail_brace 和 calc_physical_interface_construction_feed 确认同一已放行资产几何/状态，保留源接收观察 ID 和真实责任，不增加资产制造或产品购入。 | kg; m; kWh; h，按各原始记录声明单位分开 | 每次收料、发料、实物移交、操作、缺陷/返工、退出和验收；报告边界盘点；每记录区间电表读数；每账单期间服务记录 | 从节点实际进入至验收或已记录WIP/退出的完整批次期间，保留各期期初期末及全部自有责任闲置返工区间 | 仅 rail_brace 及明确项目/场地和真实保管位置，共享资产覆盖同区间完整消费者 | 每参考流 | 校准秤/测量/电表证据；同SKU当前状态原生量桥接、包装皮重与不确定性；设计/状态和保管签署；配方和水去向；废物/接收单；全部库存位置；完整拓扑消费者及分配决定；记录版本及不确定性历史 |
| cp_fabric_tension | fabric_tension | 本节点实际负责的全部清单角色 | 事件台账；库存盘点；仪器读数；签署实物移交；缺陷/返工及验收记录 | rail_panel_feed_transfer_event_ids; rail_panel_feed_segment_ids; rail_panel_feed_centerline_m; rail_panel_feed_state_ids; rail_panel_feed_source_node; rail_panel_feed_recipient_node; rail_panel_feed_handoff_document_ids; rail_panel_feed_condition_evidence; rail_panel_feed_corner_and_opening_resolution; chainlink_fabric_transfer_event_ids; chainlink_fabric_mass_kg; chainlink_fabric_material_ids; chainlink_fabric_state_ids; chainlink_fabric_source_row_ids; chainlink_fabric_source_node; chainlink_fabric_recipient_node; chainlink_fabric_custodian_from; chainlink_fabric_custodian_to; chainlink_fabric_handoff_document_ids; chainlink_fabric_native_units; chainlink_fabric_native_quantities; chainlink_fabric_measured_kg_per_native_unit; chainlink_fabric_bridge_evidence; fabric_fittings_transfer_event_ids; fabric_fittings_mass_kg; fabric_fittings_material_ids; fabric_fittings_state_ids; fabric_fittings_source_row_ids; fabric_fittings_source_node; fabric_fittings_recipient_node; fabric_fittings_custodian_from; fabric_fittings_custodian_to; fabric_fittings_handoff_document_ids; fabric_fittings_native_units; fabric_fittings_native_quantities; fabric_fittings_measured_kg_per_native_unit; fabric_fittings_bridge_evidence; tensioned_fence_transfer_event_ids; tensioned_fence_segment_ids; tensioned_fence_centerline_m; tensioned_fence_state_ids; tensioned_fence_source_node; tensioned_fence_recipient_node; tensioned_fence_handoff_document_ids; tensioned_fence_condition_evidence; tensioned_fence_corner_and_opening_resolution; fabric_waste_exit_event_ids; fabric_waste_mass_kg; fabric_waste_material_ids; fabric_waste_state_ids; fabric_waste_fate_codes; fabric_waste_custodian_ids; fabric_waste_waste_treatment_route; fabric_waste_native_units; fabric_waste_native_quantities; fabric_waste_measured_kg_per_native_unit; fabric_waste_bridge_evidence; fabric_waste_absence_evidence; fabric_direct_release_release_event_ids; fabric_direct_release_uncaptured_mass_kg; fabric_direct_release_substance_ids; fabric_direct_release_substance_names; fabric_direct_release_receiving_media; fabric_direct_release_particle_size_basis; fabric_direct_release_measurement_method; fabric_direct_release_capture_boundary_evidence; fabric_direct_release_operation_ids; fabric_direct_release_absence_evidence; fabric_unused_return_return_event_ids; fabric_unused_return_return_kg; fabric_unused_return_transfer_event_ids; fabric_unused_return_transfer_kg; fabric_unused_return_material_ids; fabric_unused_return_state_ids; fabric_unused_return_native_units; fabric_unused_return_native_quantities; fabric_unused_return_measured_kg_per_native_unit; fabric_unused_return_bridge_evidence; fabric_unused_return_external_custodian_ids; fabric_unused_return_original_input_ids; fabric_unused_return_original_upstream_burden_evidence; fabric_unused_return_exit_quality_evidence; fabric_unused_return_retained_wip_exclusion_evidence; fabric_tension_electricity_supply_id; fabric_tension_electricity_allocation_instance_ids; fabric_tension_electricity_interval_ids; fabric_tension_electricity_interval_start; fabric_tension_electricity_interval_end; fabric_tension_electricity_own_direct_meter_ids; fabric_tension_electricity_own_direct_read_event_ids; fabric_tension_electricity_own_direct_start_reads; fabric_tension_electricity_own_direct_end_reads; fabric_tension_electricity_own_direct_kwh_factors; fabric_tension_electricity_own_direct_topology; fabric_tension_electricity_master_scope_present; fabric_tension_electricity_master_meter_id; fabric_tension_electricity_master_start_read; fabric_tension_electricity_master_end_read; fabric_tension_electricity_master_kwh_factor; fabric_tension_electricity_all_inside_meter_ids; fabric_tension_electricity_all_inside_read_event_ids; fabric_tension_electricity_all_inside_start_reads; fabric_tension_electricity_all_inside_end_reads; fabric_tension_electricity_all_inside_kwh_factors; fabric_tension_electricity_all_inside_consumer_ids; fabric_tension_electricity_eligible_consumer_ids; fabric_tension_electricity_own_residual_weight; fabric_tension_electricity_all_eligible_residual_weights; fabric_tension_electricity_weight_method_evidence; fabric_tension_electricity_meter_topology_evidence; fabric_tension_electricity_calibration_evidence; fabric_tension_access_service_asset_or_service_id; fabric_tension_access_service_allocation_instance_ids; fabric_tension_access_service_contract_id; fabric_tension_access_service_period_ids; fabric_tension_access_service_period_start; fabric_tension_access_service_period_end; fabric_tension_access_service_billed_native_quantity; fabric_tension_access_service_billed_native_unit; fabric_tension_access_service_actual_hours_per_native_unit; fabric_tension_access_service_conversion_evidence; fabric_tension_access_service_all_direct_service_event_ids; fabric_tension_access_service_all_direct_service_hours; fabric_tension_access_service_own_direct_service_event_ids; fabric_tension_access_service_own_direct_service_hours; fabric_tension_access_service_owned_idle_event_ids; fabric_tension_access_service_owned_rework_event_ids; fabric_tension_access_service_eligible_consumer_ids; fabric_tension_access_service_own_residual_weight; fabric_tension_access_service_all_eligible_residual_weights; fabric_tension_access_service_allocation_decision_id; fabric_tension_access_service_provider_boundary_coverage; fabric_tension_packaging_feed_transfer_event_ids; fabric_tension_packaging_feed_mass_kg; fabric_tension_packaging_feed_material_ids; fabric_tension_packaging_feed_state_ids; fabric_tension_packaging_feed_source_row_ids; fabric_tension_packaging_feed_source_node; fabric_tension_packaging_feed_recipient_node; fabric_tension_packaging_feed_custodian_from; fabric_tension_packaging_feed_custodian_to; fabric_tension_packaging_feed_handoff_document_ids; fabric_tension_packaging_feed_native_units; fabric_tension_packaging_feed_native_quantities; fabric_tension_packaging_feed_measured_kg_per_native_unit; fabric_tension_packaging_feed_bridge_evidence; fabric_tension_lot_id; fabric_tension_site_id; fabric_tension_event_id; fabric_tension_period_id; fabric_tension_phase_id; fabric_tension_event_start; fabric_tension_event_end; fabric_tension_operator_id; fabric_tension_instrument_id; fabric_tension_calibration_id; fabric_tension_record_revision; fabric_tension_source_document_id; fabric_tension_state_before; fabric_tension_state_after; fabric_tension_defect_id; fabric_tension_rework_route; fabric_tension_rework_pass_id; fabric_tension_upstream_dataset_id; fabric_tension_upstream_dataset_boundary; fabric_tension_upstream_dataset_packaging_coverage; fabric_tension_absence_evidence; fabric_tension_uncertainty_record; fabric_tension_component_schedule; fabric_tension_trim_join_register; fabric_tension_material_fate_ledger; fabric_tension_packaging_fate_ledger; fabric_tension_rejected_state_register; rail_panel_feed_retained_component_mass_kg; rail_panel_feed_retained_component_event_ids; rail_panel_feed_retained_component_material_ids; rail_panel_feed_retained_component_source_state_ids; rail_panel_feed_retained_component_actual_state_ids; rail_panel_feed_retained_component_period_ids; rail_panel_feed_retained_component_panel_transfer_ids; rail_panel_feed_retained_component_source_input_ids; rail_panel_feed_retained_component_bridge_evidence; rail_panel_feed_retained_component_existing_exclusion; rail_panel_feed_retained_component_representation_mode; tensioned_fence_retained_component_mass_kg; tensioned_fence_retained_component_event_ids; tensioned_fence_retained_component_material_ids; tensioned_fence_retained_component_source_state_ids; tensioned_fence_retained_component_actual_state_ids; tensioned_fence_retained_component_period_ids; tensioned_fence_retained_component_panel_transfer_ids; tensioned_fence_retained_component_source_input_ids; tensioned_fence_retained_component_bridge_evidence; tensioned_fence_retained_component_existing_exclusion; tensioned_fence_retained_component_representation_mode; fabric_tension_mass_closure_group_keys; fabric_tension_mass_closure_card_event_crosswalk; fabric_tension_mass_closure_material_source_state_actual_state_period_kg_evidence; fabric_tension_mass_closure_opening_processed_wip_kg; fabric_tension_mass_closure_opening_processed_wip_event_ids; fabric_tension_mass_closure_opening_previous_closing_event_ids; fabric_tension_mass_closure_closing_processed_wip_kg; fabric_tension_mass_closure_closing_processed_wip_event_ids; fabric_tension_mass_closure_wip_panel_or_component_ids; fabric_tension_mass_closure_wip_exclusivity_evidence; fabric_tension_mass_closure_processed_transfer_in_kg; fabric_tension_mass_closure_processed_transfer_out_kg; fabric_tension_mass_closure_processed_transfer_event_crosswalk; fabric_tension_mass_closure_measured_tolerance_kg | 配对接收导轨集成区段、实际镀锌编织网布、连接件和随料包装。确认 SKU、高度、网孔、线规、网边、GAW/GBW状态，铁基及铝配件分开。按真实桥接测 kg，记录连接拉伸紧固剪裁、区段长度及绷紧/牢固余端/净空状态。逐项识别拒收返工、材料废物、未捕集排放、U/X及包装去向，记录完整区间消费者关联的电表和服务。 完整累加和归属方法：按文字明确规则及唯一事件键计算物理分子，保留真实重复遍次、缺陷及分材料互斥池。每卡物理量只除同一正 L 一次，L 来自 calc_accepted_fence_service。先核对相邻转移ID和期间总量再归一化。 | kg; m; kWh; h，按各原始记录声明单位分开 | 每次收料、发料、实物移交、操作、缺陷/返工、退出和验收；报告边界盘点；每记录区间电表读数；每账单期间服务记录 | 从节点实际进入至验收或已记录WIP/退出的完整批次期间，保留各期期初期末及全部自有责任闲置返工区间 | 仅 fabric_tension 及明确项目/场地和真实保管位置，共享资产覆盖同区间完整消费者 | 每参考流 | 校准秤/测量/电表证据；同SKU当前状态原生量桥接、包装皮重与不确定性；设计/状态和保管签署；配方和水去向；废物/接收单；全部库存位置；完整拓扑消费者及分配决定；记录版本及不确定性历史 |
| cp_finish_accept | finish_accept | 本节点实际负责的全部清单角色 | 事件台账；库存盘点；仪器读数；签署实物移交；缺陷/返工及验收记录 | finish_panel_feed_transfer_event_ids; finish_panel_feed_segment_ids; finish_panel_feed_centerline_m; finish_panel_feed_state_ids; finish_panel_feed_source_node; finish_panel_feed_recipient_node; finish_panel_feed_handoff_document_ids; finish_panel_feed_condition_evidence; finish_panel_feed_corner_and_opening_resolution; coating_cleanup_transfer_event_ids; coating_cleanup_mass_kg; coating_cleanup_material_ids; coating_cleanup_state_ids; coating_cleanup_source_row_ids; coating_cleanup_source_node; coating_cleanup_recipient_node; coating_cleanup_custodian_from; coating_cleanup_custodian_to; coating_cleanup_handoff_document_ids; coating_cleanup_native_units; coating_cleanup_native_quantities; coating_cleanup_measured_kg_per_native_unit; coating_cleanup_bridge_evidence; finish_water_opening_kg; finish_water_external_receipts_kg; finish_water_closing_unissued_intact_kg; finish_water_material_ids; finish_water_state_ids; finish_water_native_units; finish_water_native_quantities; finish_water_measured_kg_per_native_unit; finish_water_bridge_evidence; finish_water_stock_item_ids; finish_water_stock_sublocations; finish_water_stock_custodians; finish_water_stock_count_times; finish_water_receipt_event_ids; finish_waste_exit_event_ids; finish_waste_mass_kg; finish_waste_material_ids; finish_waste_state_ids; finish_waste_fate_codes; finish_waste_custodian_ids; finish_waste_waste_treatment_route; finish_waste_native_units; finish_waste_native_quantities; finish_waste_measured_kg_per_native_unit; finish_waste_bridge_evidence; finish_waste_absence_evidence; finish_wastewater_exit_event_ids; finish_wastewater_mass_kg; finish_wastewater_material_ids; finish_wastewater_state_ids; finish_wastewater_fate_codes; finish_wastewater_custodian_ids; finish_wastewater_waste_treatment_route; finish_wastewater_native_units; finish_wastewater_native_quantities; finish_wastewater_measured_kg_per_native_unit; finish_wastewater_bridge_evidence; finish_wastewater_absence_evidence; finish_water_vapour_release_event_ids; finish_water_vapour_observed_h2o_kg; finish_water_vapour_measurement_evidence; finish_water_vapour_air_medium_evidence; finish_water_vapour_coating_water_fraction; finish_water_vapour_coating_received_mass_kg; finish_water_vapour_coating_transfer_ids; finish_water_vapour_coating_formulation_ids; finish_water_vapour_coating_fraction_evidence; finish_water_vapour_panel_received_water_kg; finish_water_vapour_opening_processed_wip_water_kg; finish_water_vapour_accepted_retained_water_kg; finish_water_vapour_solid_waste_water_kg; finish_water_vapour_liquid_waste_water_kg; finish_water_vapour_unused_fresh_return_water_kg; finish_water_vapour_unused_fresh_transfer_water_kg; finish_water_vapour_processed_transfer_water_kg; finish_water_vapour_closing_processed_wip_water_kg; finish_water_vapour_pool_event_ids; finish_water_vapour_pool_exclusivity_evidence; finish_water_vapour_measurement_tolerance_kg; finish_other_release_release_event_ids; finish_other_release_uncaptured_mass_kg; finish_other_release_substance_ids; finish_other_release_substance_names; finish_other_release_receiving_media; finish_other_release_particle_size_basis; finish_other_release_measurement_method; finish_other_release_capture_boundary_evidence; finish_other_release_operation_ids; finish_other_release_absence_evidence; finish_unused_return_return_event_ids; finish_unused_return_return_kg; finish_unused_return_transfer_event_ids; finish_unused_return_transfer_kg; finish_unused_return_material_ids; finish_unused_return_state_ids; finish_unused_return_native_units; finish_unused_return_native_quantities; finish_unused_return_measured_kg_per_native_unit; finish_unused_return_bridge_evidence; finish_unused_return_external_custodian_ids; finish_unused_return_original_input_ids; finish_unused_return_original_upstream_burden_evidence; finish_unused_return_exit_quality_evidence; finish_unused_return_retained_wip_exclusion_evidence; accepted_fence_service_segment_ids; accepted_fence_service_net_centerline_m; accepted_fence_service_acceptance_ids; accepted_fence_service_corner_resolution; accepted_fence_service_opening_gap_register; accepted_fence_service_required_components_complete; accepted_fence_service_taut_fabric_state; accepted_fence_service_end_and_clearance_check; accepted_fence_service_finish_requirement_state; accepted_fence_service_configuration_id; finish_accept_electricity_supply_id; finish_accept_electricity_allocation_instance_ids; finish_accept_electricity_interval_ids; finish_accept_electricity_interval_start; finish_accept_electricity_interval_end; finish_accept_electricity_own_direct_meter_ids; finish_accept_electricity_own_direct_read_event_ids; finish_accept_electricity_own_direct_start_reads; finish_accept_electricity_own_direct_end_reads; finish_accept_electricity_own_direct_kwh_factors; finish_accept_electricity_own_direct_topology; finish_accept_electricity_master_scope_present; finish_accept_electricity_master_meter_id; finish_accept_electricity_master_start_read; finish_accept_electricity_master_end_read; finish_accept_electricity_master_kwh_factor; finish_accept_electricity_all_inside_meter_ids; finish_accept_electricity_all_inside_read_event_ids; finish_accept_electricity_all_inside_start_reads; finish_accept_electricity_all_inside_end_reads; finish_accept_electricity_all_inside_kwh_factors; finish_accept_electricity_all_inside_consumer_ids; finish_accept_electricity_eligible_consumer_ids; finish_accept_electricity_own_residual_weight; finish_accept_electricity_all_eligible_residual_weights; finish_accept_electricity_weight_method_evidence; finish_accept_electricity_meter_topology_evidence; finish_accept_electricity_calibration_evidence; finish_accept_access_service_asset_or_service_id; finish_accept_access_service_allocation_instance_ids; finish_accept_access_service_contract_id; finish_accept_access_service_period_ids; finish_accept_access_service_period_start; finish_accept_access_service_period_end; finish_accept_access_service_billed_native_quantity; finish_accept_access_service_billed_native_unit; finish_accept_access_service_actual_hours_per_native_unit; finish_accept_access_service_conversion_evidence; finish_accept_access_service_all_direct_service_event_ids; finish_accept_access_service_all_direct_service_hours; finish_accept_access_service_own_direct_service_event_ids; finish_accept_access_service_own_direct_service_hours; finish_accept_access_service_owned_idle_event_ids; finish_accept_access_service_owned_rework_event_ids; finish_accept_access_service_eligible_consumer_ids; finish_accept_access_service_own_residual_weight; finish_accept_access_service_all_eligible_residual_weights; finish_accept_access_service_allocation_decision_id; finish_accept_access_service_provider_boundary_coverage; finish_accept_packaging_feed_transfer_event_ids; finish_accept_packaging_feed_mass_kg; finish_accept_packaging_feed_material_ids; finish_accept_packaging_feed_state_ids; finish_accept_packaging_feed_source_row_ids; finish_accept_packaging_feed_source_node; finish_accept_packaging_feed_recipient_node; finish_accept_packaging_feed_custodian_from; finish_accept_packaging_feed_custodian_to; finish_accept_packaging_feed_handoff_document_ids; finish_accept_packaging_feed_native_units; finish_accept_packaging_feed_native_quantities; finish_accept_packaging_feed_measured_kg_per_native_unit; finish_accept_packaging_feed_bridge_evidence; finish_accept_lot_id; finish_accept_site_id; finish_accept_event_id; finish_accept_period_id; finish_accept_phase_id; finish_accept_event_start; finish_accept_event_end; finish_accept_operator_id; finish_accept_instrument_id; finish_accept_calibration_id; finish_accept_record_revision; finish_accept_source_document_id; finish_accept_state_before; finish_accept_state_after; finish_accept_defect_id; finish_accept_rework_route; finish_accept_rework_pass_id; finish_accept_upstream_dataset_id; finish_accept_upstream_dataset_boundary; finish_accept_upstream_dataset_packaging_coverage; finish_accept_absence_evidence; finish_accept_uncertainty_record; finish_accept_component_acceptance_register; finish_accept_actual_formulation_ids; finish_accept_surface_repair_requirement_evidence; finish_accept_finish_activation_evidence; finish_accept_material_fate_ledger; finish_accept_packaging_fate_ledger; finish_accept_rejected_state_register; finish_accept_unique_final_output_register; finish_panel_feed_retained_component_mass_kg; finish_panel_feed_retained_component_event_ids; finish_panel_feed_retained_component_material_ids; finish_panel_feed_retained_component_source_state_ids; finish_panel_feed_retained_component_actual_state_ids; finish_panel_feed_retained_component_period_ids; finish_panel_feed_retained_component_panel_transfer_ids; finish_panel_feed_retained_component_source_input_ids; finish_panel_feed_retained_component_bridge_evidence; finish_panel_feed_retained_component_existing_exclusion; finish_panel_feed_retained_component_representation_mode; accepted_fence_service_retained_component_mass_kg; accepted_fence_service_retained_component_event_ids; accepted_fence_service_retained_component_material_ids; accepted_fence_service_retained_component_source_state_ids; accepted_fence_service_retained_component_actual_state_ids; accepted_fence_service_retained_component_period_ids; accepted_fence_service_retained_component_panel_transfer_ids; accepted_fence_service_retained_component_source_input_ids; accepted_fence_service_retained_component_bridge_evidence; accepted_fence_service_retained_component_existing_exclusion; accepted_fence_service_retained_component_representation_mode; finish_accept_mass_closure_group_keys; finish_accept_mass_closure_card_event_crosswalk; finish_accept_mass_closure_material_source_state_actual_state_period_kg_evidence; finish_accept_mass_closure_opening_processed_wip_kg; finish_accept_mass_closure_opening_processed_wip_event_ids; finish_accept_mass_closure_opening_previous_closing_event_ids; finish_accept_mass_closure_closing_processed_wip_kg; finish_accept_mass_closure_closing_processed_wip_event_ids; finish_accept_mass_closure_wip_panel_or_component_ids; finish_accept_mass_closure_wip_exclusivity_evidence; finish_accept_mass_closure_processed_transfer_in_kg; finish_accept_mass_closure_processed_transfer_out_kg; finish_accept_mass_closure_processed_transfer_event_crosswalk; finish_accept_mass_closure_measured_tolerance_kg; finish_water_vapour_pool_card_event_crosswalk; finish_water_vapour_processed_transfer_event_crosswalk ; finish_water_vapour_direct_liquid_h2o_kg | 接收实测张紧母体，使用修补品或水前先识别真实完工要求。记录获批实际配方、耗用组分、新鲜水源和期初/收料/未发期末库存、全部纯水去向及独立实际 H2O 排气观察或验证模型。固液废物按材料称量、未捕集物质和介质实测、U/X及包装去向归此节点。逐项检查自有构件、绷紧、剪弯余端、规定净空和修补状态。测唯一验收中心线，拐角一次、排除门洞/开口、缺陷和WIP。最终验收、米分母、电表和服务均关联实际期间。 完整累加和归属方法：按文字明确规则及唯一事件键计算物理分子，保留真实重复遍次、缺陷及分材料互斥池。每卡物理量只除同一正 L 一次，L 来自 calc_accepted_fence_service。先核对相邻转移ID和期间总量再归一化。  实际有证据的直接液态H2O退出须在finish_other_release物理载体内按来源事件/当前状态/介质计量独立水份额，与蒸气、收集废水和全部其他去向互斥；未知发生/介质/水量是缺口，不由剩余差额推定。| kg; m; kWh; h，按各原始记录声明单位分开 | 每次收料、发料、实物移交、操作、缺陷/返工、退出和验收；报告边界盘点；每记录区间电表读数；每账单期间服务记录 | 从节点实际进入至验收或已记录WIP/退出的完整批次期间，保留各期期初期末及全部自有责任闲置返工区间 | 仅 finish_accept 及明确项目/场地和真实保管位置，共享资产覆盖同区间完整消费者 | 每参考流 | 校准秤/测量/电表证据；同SKU当前状态原生量桥接、包装皮重与不确定性；设计/状态和保管签署；配方和水去向；废物/接收单；全部库存位置；完整拓扑消费者及分配决定；记录版本及不确定性历史 |

### 计算规则

每条规则首输出为对应卡的物理分子，calc_accepted_fence_service 首输出为 L。电表/服务中间量和水差额也明确列出，仍为物理单位诊断。本表公式不除以 L，唯一归一化在卡片 Amount。原键、协议、输出和函数全部声明；函数完整定义在相关规则内投影，不仅依靠外部说明。

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_post_interface | post_interface | actual_post_interface = SUM_UNIQUE_SEGMENTS(post_interface_centerline_m, post_interface_segment_ids)。输出为 m 物理分子，此观测输出仅用于自身协议与验收门槛，不适用库存Amount或交换；保留实测物理几何，不增加产品负荷。记录真实接收/移交几何及合格/当前状态，源接收事件配对一致并明确部分批次和 WIP，设计文件及固定 1 m 不能替代真实几何。 定义 SUM_UNIQUE_SEGMENTS：按稳定区段 ID 对互不重叠的实测中心线求和，拐角只计一次并先排除实际门洞/开口，返工返访不产生新验收段。只计满足本卡当前状态门槛的区段，最终参考段必须净且已验收。 此为既有资产观察/就绪测量，保留自身 ID、实测 Length/m/状态和接口门槛，不是清单产品交换、制造材料或设计文件产品。 | post_interface_transfer_event_ids; post_interface_segment_ids; post_interface_centerline_m; post_interface_state_ids; post_interface_source_node; post_interface_recipient_node; post_interface_handoff_document_ids; post_interface_condition_evidence; post_interface_corner_and_opening_resolution; cp_survey_receive; SUM_UNIQUE_SEGMENTS | actual_post_interface |  |
| calc_receive_packaging | receive_packaging | actual_receive_packaging = receive_packaging_opening_kg + receive_packaging_external_receipts_kg - receive_packaging_closing_unissued_intact_kg。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。三个池均为同 SKU/当前状态桥接后的真实 kg；期末为所有地点本批未发完好库存各一次，不含已发 U/X、安装保留或处理 WIP。总领用包含实际未用退出，不二次净扣。 | receive_packaging_opening_kg; receive_packaging_external_receipts_kg; receive_packaging_closing_unissued_intact_kg; receive_packaging_material_ids; receive_packaging_state_ids; receive_packaging_native_units; receive_packaging_native_quantities; receive_packaging_measured_kg_per_native_unit; receive_packaging_bridge_evidence; receive_packaging_stock_item_ids; receive_packaging_stock_sublocations; receive_packaging_stock_custodians; receive_packaging_stock_count_times; receive_packaging_receipt_event_ids; cp_survey_receive | actual_receive_packaging |  |
| calc_receive_reject | receive_reject | actual_receive_reject = SUM_ONCE(receive_reject_mass_kg, receive_reject_exit_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。每项丢弃实物量只有一个产生节点和实测去向，包装及捕集颗粒按成分识别。期末 WIP 或可用退出不是废物；混合固液先区分组分再做纯水平衡。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | receive_reject_exit_event_ids; receive_reject_mass_kg; receive_reject_material_ids; receive_reject_state_ids; receive_reject_fate_codes; receive_reject_custodian_ids; receive_reject_waste_treatment_route; receive_reject_native_units; receive_reject_native_quantities; receive_reject_measured_kg_per_native_unit; receive_reject_bridge_evidence; receive_reject_absence_evidence; cp_survey_receive; SUM_ONCE | actual_receive_reject |  |
| calc_receive_packaging_waste | receive_packaging_waste | actual_receive_packaging_waste = SUM_ONCE(receive_packaging_waste_mass_kg, receive_packaging_waste_exit_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。每项丢弃实物量只有一个产生节点和实测去向，包装及捕集颗粒按成分识别。期末 WIP 或可用退出不是废物；混合固液先区分组分再做纯水平衡。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | receive_packaging_waste_exit_event_ids; receive_packaging_waste_mass_kg; receive_packaging_waste_material_ids; receive_packaging_waste_state_ids; receive_packaging_waste_fate_codes; receive_packaging_waste_custodian_ids; receive_packaging_waste_waste_treatment_route; receive_packaging_waste_native_units; receive_packaging_waste_native_quantities; receive_packaging_waste_measured_kg_per_native_unit; receive_packaging_waste_bridge_evidence; receive_packaging_waste_absence_evidence; cp_survey_receive; SUM_ONCE | actual_receive_packaging_waste |  |
| calc_receive_unused_return | receive_unused_return | actual_receive_unused_return = SUM_ONCE(receive_unused_return_return_kg, receive_unused_return_return_event_ids) + SUM_ONCE(receive_unused_return_transfer_kg, receive_unused_return_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。退回 U 与外部转移 X 为正且互斥，不含期末完好库存、保留产品、WIP、废物或内部供料。只携带未改变原材料上游负荷，现场工作、闲置和返工仍归安装批次，净消耗诊断不产生第二负交换或抵扣。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | receive_unused_return_return_event_ids; receive_unused_return_return_kg; receive_unused_return_transfer_event_ids; receive_unused_return_transfer_kg; receive_unused_return_material_ids; receive_unused_return_state_ids; receive_unused_return_native_units; receive_unused_return_native_quantities; receive_unused_return_measured_kg_per_native_unit; receive_unused_return_bridge_evidence; receive_unused_return_external_custodian_ids; receive_unused_return_original_input_ids; receive_unused_return_original_upstream_burden_evidence; receive_unused_return_exit_quality_evidence; receive_unused_return_retained_wip_exclusion_evidence; cp_survey_receive; SUM_ONCE | actual_receive_unused_return |  |
| calc_survey_receive_electricity | survey_receive_electricity | survey_receive_electricity_direct_kwh = SUM_ONCE((survey_receive_electricity_own_direct_end_reads - survey_receive_electricity_own_direct_start_reads) * survey_receive_electricity_own_direct_kwh_factors, survey_receive_electricity_own_direct_read_event_ids); survey_receive_electricity_master_kwh = CASE_PRESENT(survey_receive_electricity_master_scope_present, (survey_receive_electricity_master_end_read - survey_receive_electricity_master_start_read) * survey_receive_electricity_master_kwh_factor, 0); survey_receive_electricity_inside_direct_kwh = CASE_PRESENT(survey_receive_electricity_master_scope_present, SUM_ONCE((survey_receive_electricity_all_inside_end_reads - survey_receive_electricity_all_inside_start_reads) * survey_receive_electricity_all_inside_kwh_factors, survey_receive_electricity_all_inside_read_event_ids), 0); survey_receive_electricity_residual_kwh = survey_receive_electricity_master_kwh - survey_receive_electricity_inside_direct_kwh; survey_receive_electricity_allocated_interval_kwh = survey_receive_electricity_direct_kwh + CASE_ZERO(survey_receive_electricity_residual_kwh, 0, survey_receive_electricity_residual_kwh * survey_receive_electricity_own_residual_weight / SUM(survey_receive_electricity_all_eligible_residual_weights)); actual_survey_receive_electricity = SUM_ONCE(survey_receive_electricity_allocated_interval_kwh, survey_receive_electricity_allocation_instance_ids)。输出为 kWh 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。各同总表区间分别算直接、总表内直接、总表、剩余及分配；读数事件 ID 包含电表与区间，保留真实重复区间。按唯一 allocation_instance_ids 累加批次分子。本节点直接量可含总表外，all_inside 仅含总表内已直接归属者各一次。证实零剩余无需权重；拓扑证明纯直接且无共享总表时零为中性诊断项。非零总表恰好等于全部内直接量也为零剩余。正剩余须完整消费者、每个合格权重严格正及正分母。未知/负剩余是缺口，所有节点和其他消费者须核对同一总表区间。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 CASE_PRESENT：仅当真实电表拓扑证明有共享总表时求值存在分支；仅当拓扑证明直接供电时求值不存在分支。未知范围为缺口；不存在分支的零只是中性诊断项，绝非虚构零读数。 定义 CASE_ZERO：CASE_ZERO(r, z, p) 在实测 r 为零时返回 z，不求值权重除法；仅当 r 为正、消费者完整已审、各合格权重严格为正且分母为正时返回 p。负或未知剩余无效并保留缺口，不截为零。 定义 SUM：对本协议明确完整登记集合进行算术求和。 | survey_receive_electricity_supply_id; survey_receive_electricity_allocation_instance_ids; survey_receive_electricity_interval_ids; survey_receive_electricity_interval_start; survey_receive_electricity_interval_end; survey_receive_electricity_own_direct_meter_ids; survey_receive_electricity_own_direct_read_event_ids; survey_receive_electricity_own_direct_start_reads; survey_receive_electricity_own_direct_end_reads; survey_receive_electricity_own_direct_kwh_factors; survey_receive_electricity_own_direct_topology; survey_receive_electricity_master_scope_present; survey_receive_electricity_master_meter_id; survey_receive_electricity_master_start_read; survey_receive_electricity_master_end_read; survey_receive_electricity_master_kwh_factor; survey_receive_electricity_all_inside_meter_ids; survey_receive_electricity_all_inside_read_event_ids; survey_receive_electricity_all_inside_start_reads; survey_receive_electricity_all_inside_end_reads; survey_receive_electricity_all_inside_kwh_factors; survey_receive_electricity_all_inside_consumer_ids; survey_receive_electricity_eligible_consumer_ids; survey_receive_electricity_own_residual_weight; survey_receive_electricity_all_eligible_residual_weights; survey_receive_electricity_weight_method_evidence; survey_receive_electricity_meter_topology_evidence; survey_receive_electricity_calibration_evidence; cp_survey_receive; SUM_ONCE; CASE_PRESENT; CASE_ZERO; SUM | actual_survey_receive_electricity; survey_receive_electricity_direct_kwh; survey_receive_electricity_master_kwh; survey_receive_electricity_inside_direct_kwh; survey_receive_electricity_residual_kwh; survey_receive_electricity_allocated_interval_kwh |  |
| calc_survey_receive_access_service | survey_receive_access_service | survey_receive_access_service_billed_h = survey_receive_access_service_billed_native_quantity * survey_receive_access_service_actual_hours_per_native_unit; survey_receive_access_service_direct_h = SUM_ONCE(survey_receive_access_service_own_direct_service_hours, survey_receive_access_service_own_direct_service_event_ids); survey_receive_access_service_residual_h = survey_receive_access_service_billed_h - SUM_ONCE(survey_receive_access_service_all_direct_service_hours, survey_receive_access_service_all_direct_service_event_ids); survey_receive_access_service_allocated_period_h = survey_receive_access_service_direct_h + CASE_ZERO(survey_receive_access_service_residual_h, 0, survey_receive_access_service_residual_h * survey_receive_access_service_own_residual_weight / SUM(survey_receive_access_service_all_eligible_residual_weights)); actual_survey_receive_access_service = SUM_ONCE(survey_receive_access_service_allocated_period_h, survey_receive_access_service_allocation_instance_ids)。输出为 h 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。逐一真实合同/账单分配期间计算已计费、直接、剩余及分配，再按唯一 allocation_instance_ids 累加小时。各期保留自身权重，不混合不同期间剩余；正剩余的合格权重严格正，有证据不合格节点不分剩余。转换由合同和实际可用性确定，不默认班次、年度或寿命。自有责任闲置/返工在直接记录中只计一次，全部账单消费者核对直接加剩余；零无需权重，正需完整正权重，供应商已含能源或资产负荷不重复采购。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 CASE_ZERO：CASE_ZERO(r, z, p) 在实测 r 为零时返回 z，不求值权重除法；仅当 r 为正、消费者完整已审、各合格权重严格为正且分母为正时返回 p。负或未知剩余无效并保留缺口，不截为零。 定义 SUM：对本协议明确完整登记集合进行算术求和。 | survey_receive_access_service_asset_or_service_id; survey_receive_access_service_allocation_instance_ids; survey_receive_access_service_contract_id; survey_receive_access_service_period_ids; survey_receive_access_service_period_start; survey_receive_access_service_period_end; survey_receive_access_service_billed_native_quantity; survey_receive_access_service_billed_native_unit; survey_receive_access_service_actual_hours_per_native_unit; survey_receive_access_service_conversion_evidence; survey_receive_access_service_all_direct_service_event_ids; survey_receive_access_service_all_direct_service_hours; survey_receive_access_service_own_direct_service_event_ids; survey_receive_access_service_own_direct_service_hours; survey_receive_access_service_owned_idle_event_ids; survey_receive_access_service_owned_rework_event_ids; survey_receive_access_service_eligible_consumer_ids; survey_receive_access_service_own_residual_weight; survey_receive_access_service_all_eligible_residual_weights; survey_receive_access_service_allocation_decision_id; survey_receive_access_service_provider_boundary_coverage; cp_survey_receive; SUM_ONCE; CASE_ZERO; SUM | actual_survey_receive_access_service; survey_receive_access_service_billed_h; survey_receive_access_service_direct_h; survey_receive_access_service_residual_h; survey_receive_access_service_allocated_period_h |  |
| calc_rails | rails | actual_rails = SUM_ONCE(rails_mass_kg, rails_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 原构件测量台账 issue_rails 保留在条件清单发料 issue_materials_rail_brace 下；其实际 SKU/状态量匹配独立接收材料投入，各真实交换独立核实，不创建聚合混合产品身份或重复采购。 | rails_transfer_event_ids; rails_mass_kg; rails_material_ids; rails_state_ids; rails_source_row_ids; rails_source_node; rails_recipient_node; rails_custodian_from; rails_custodian_to; rails_handoff_document_ids; rails_native_units; rails_native_quantities; rails_measured_kg_per_native_unit; rails_bridge_evidence; cp_rail_brace; SUM_ONCE | actual_rails |  |
| calc_rail_fittings | rail_fittings | actual_rail_fittings = SUM_ONCE(rail_fittings_mass_kg, rail_fittings_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 原构件测量台账 issue_rail_fittings 保留在条件清单发料 issue_materials_rail_brace 下；其实际 SKU/状态量匹配独立接收材料投入，各真实交换独立核实，不创建聚合混合产品身份或重复采购。 | rail_fittings_transfer_event_ids; rail_fittings_mass_kg; rail_fittings_material_ids; rail_fittings_state_ids; rail_fittings_source_row_ids; rail_fittings_source_node; rail_fittings_recipient_node; rail_fittings_custodian_from; rail_fittings_custodian_to; rail_fittings_handoff_document_ids; rail_fittings_native_units; rail_fittings_native_quantities; rail_fittings_measured_kg_per_native_unit; rail_fittings_bridge_evidence; cp_rail_brace; SUM_ONCE | actual_rail_fittings |  |
| calc_tension_wire | tension_wire | actual_tension_wire = SUM_ONCE(tension_wire_mass_kg, tension_wire_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 原构件测量台账 issue_tension_wire 保留在条件清单发料 issue_materials_rail_brace 下；其实际 SKU/状态量匹配独立接收材料投入，各真实交换独立核实，不创建聚合混合产品身份或重复采购。 | tension_wire_transfer_event_ids; tension_wire_mass_kg; tension_wire_material_ids; tension_wire_state_ids; tension_wire_source_row_ids; tension_wire_source_node; tension_wire_recipient_node; tension_wire_custodian_from; tension_wire_custodian_to; tension_wire_handoff_document_ids; tension_wire_native_units; tension_wire_native_quantities; tension_wire_measured_kg_per_native_unit; tension_wire_bridge_evidence; cp_rail_brace; SUM_ONCE | actual_tension_wire |  |
| calc_rail_ready_panels | rail_ready_panels | actual_rail_ready_panels = SUM_ONCE(rail_ready_panels_centerline_m, rail_ready_panels_transfer_event_ids); rail_ready_panels_retained_material_mass_kg = SUM_ONCE(rail_ready_panels_retained_component_mass_kg, rail_ready_panels_retained_component_event_ids)。输出为 m 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。记录真实接收/移交几何及合格/当前状态，源接收事件配对一致并明确部分批次和 WIP，设计文件及固定 1 m 不能替代真实几何。保留质量诊断按本次实际区段移交/验收事件及准确材料/源状态/当前状态/期间和源投入 ID，对实测新增安装构件或组分 kg 求和。排除既有柱、基础及既有构件；复合物整体或实测组分互斥。米仅确定移交/验收门槛，不推算 kg；诊断不新增产品交换或采购负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | rail_ready_panels_transfer_event_ids; rail_ready_panels_segment_ids; rail_ready_panels_centerline_m; rail_ready_panels_state_ids; rail_ready_panels_source_node; rail_ready_panels_recipient_node; rail_ready_panels_handoff_document_ids; rail_ready_panels_condition_evidence; rail_ready_panels_corner_and_opening_resolution; cp_rail_brace; SUM_ONCE; rail_ready_panels_retained_component_mass_kg; rail_ready_panels_retained_component_event_ids; rail_ready_panels_retained_component_material_ids; rail_ready_panels_retained_component_source_state_ids; rail_ready_panels_retained_component_actual_state_ids; rail_ready_panels_retained_component_period_ids; rail_ready_panels_retained_component_panel_transfer_ids; rail_ready_panels_retained_component_source_input_ids; rail_ready_panels_retained_component_bridge_evidence; rail_ready_panels_retained_component_existing_exclusion; rail_ready_panels_retained_component_representation_mode | actual_rail_ready_panels; rail_ready_panels_retained_material_mass_kg |  |
| calc_rail_waste | rail_waste | actual_rail_waste = SUM_ONCE(rail_waste_mass_kg, rail_waste_exit_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。每项丢弃实物量只有一个产生节点和实测去向，包装及捕集颗粒按成分识别。期末 WIP 或可用退出不是废物；混合固液先区分组分再做纯水平衡。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | rail_waste_exit_event_ids; rail_waste_mass_kg; rail_waste_material_ids; rail_waste_state_ids; rail_waste_fate_codes; rail_waste_custodian_ids; rail_waste_waste_treatment_route; rail_waste_native_units; rail_waste_native_quantities; rail_waste_measured_kg_per_native_unit; rail_waste_bridge_evidence; rail_waste_absence_evidence; cp_rail_brace; SUM_ONCE | actual_rail_waste |  |
| calc_rail_direct_release | rail_direct_release | actual_rail_direct_release = SUM_ONCE(rail_direct_release_uncaptured_mass_kg, rail_direct_release_release_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。各物质、颗粒基准及介质为不同最终交换，本聚合角色不是通用污染物 UUID。排除捕集废物；物质、介质或量未知则该交换不能完成，材料亏差不是实测排放。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | rail_direct_release_release_event_ids; rail_direct_release_uncaptured_mass_kg; rail_direct_release_substance_ids; rail_direct_release_substance_names; rail_direct_release_receiving_media; rail_direct_release_particle_size_basis; rail_direct_release_measurement_method; rail_direct_release_capture_boundary_evidence; rail_direct_release_operation_ids; rail_direct_release_absence_evidence; cp_rail_brace; SUM_ONCE | actual_rail_direct_release |  |
| calc_rail_unused_return | rail_unused_return | actual_rail_unused_return = SUM_ONCE(rail_unused_return_return_kg, rail_unused_return_return_event_ids) + SUM_ONCE(rail_unused_return_transfer_kg, rail_unused_return_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。退回 U 与外部转移 X 为正且互斥，不含期末完好库存、保留产品、WIP、废物或内部供料。只携带未改变原材料上游负荷，现场工作、闲置和返工仍归安装批次，净消耗诊断不产生第二负交换或抵扣。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | rail_unused_return_return_event_ids; rail_unused_return_return_kg; rail_unused_return_transfer_event_ids; rail_unused_return_transfer_kg; rail_unused_return_material_ids; rail_unused_return_state_ids; rail_unused_return_native_units; rail_unused_return_native_quantities; rail_unused_return_measured_kg_per_native_unit; rail_unused_return_bridge_evidence; rail_unused_return_external_custodian_ids; rail_unused_return_original_input_ids; rail_unused_return_original_upstream_burden_evidence; rail_unused_return_exit_quality_evidence; rail_unused_return_retained_wip_exclusion_evidence; cp_rail_brace; SUM_ONCE | actual_rail_unused_return |  |
| calc_rail_brace_electricity | rail_brace_electricity | rail_brace_electricity_direct_kwh = SUM_ONCE((rail_brace_electricity_own_direct_end_reads - rail_brace_electricity_own_direct_start_reads) * rail_brace_electricity_own_direct_kwh_factors, rail_brace_electricity_own_direct_read_event_ids); rail_brace_electricity_master_kwh = CASE_PRESENT(rail_brace_electricity_master_scope_present, (rail_brace_electricity_master_end_read - rail_brace_electricity_master_start_read) * rail_brace_electricity_master_kwh_factor, 0); rail_brace_electricity_inside_direct_kwh = CASE_PRESENT(rail_brace_electricity_master_scope_present, SUM_ONCE((rail_brace_electricity_all_inside_end_reads - rail_brace_electricity_all_inside_start_reads) * rail_brace_electricity_all_inside_kwh_factors, rail_brace_electricity_all_inside_read_event_ids), 0); rail_brace_electricity_residual_kwh = rail_brace_electricity_master_kwh - rail_brace_electricity_inside_direct_kwh; rail_brace_electricity_allocated_interval_kwh = rail_brace_electricity_direct_kwh + CASE_ZERO(rail_brace_electricity_residual_kwh, 0, rail_brace_electricity_residual_kwh * rail_brace_electricity_own_residual_weight / SUM(rail_brace_electricity_all_eligible_residual_weights)); actual_rail_brace_electricity = SUM_ONCE(rail_brace_electricity_allocated_interval_kwh, rail_brace_electricity_allocation_instance_ids)。输出为 kWh 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。各同总表区间分别算直接、总表内直接、总表、剩余及分配；读数事件 ID 包含电表与区间，保留真实重复区间。按唯一 allocation_instance_ids 累加批次分子。本节点直接量可含总表外，all_inside 仅含总表内已直接归属者各一次。证实零剩余无需权重；拓扑证明纯直接且无共享总表时零为中性诊断项。非零总表恰好等于全部内直接量也为零剩余。正剩余须完整消费者、每个合格权重严格正及正分母。未知/负剩余是缺口，所有节点和其他消费者须核对同一总表区间。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 CASE_PRESENT：仅当真实电表拓扑证明有共享总表时求值存在分支；仅当拓扑证明直接供电时求值不存在分支。未知范围为缺口；不存在分支的零只是中性诊断项，绝非虚构零读数。 定义 CASE_ZERO：CASE_ZERO(r, z, p) 在实测 r 为零时返回 z，不求值权重除法；仅当 r 为正、消费者完整已审、各合格权重严格为正且分母为正时返回 p。负或未知剩余无效并保留缺口，不截为零。 定义 SUM：对本协议明确完整登记集合进行算术求和。 | rail_brace_electricity_supply_id; rail_brace_electricity_allocation_instance_ids; rail_brace_electricity_interval_ids; rail_brace_electricity_interval_start; rail_brace_electricity_interval_end; rail_brace_electricity_own_direct_meter_ids; rail_brace_electricity_own_direct_read_event_ids; rail_brace_electricity_own_direct_start_reads; rail_brace_electricity_own_direct_end_reads; rail_brace_electricity_own_direct_kwh_factors; rail_brace_electricity_own_direct_topology; rail_brace_electricity_master_scope_present; rail_brace_electricity_master_meter_id; rail_brace_electricity_master_start_read; rail_brace_electricity_master_end_read; rail_brace_electricity_master_kwh_factor; rail_brace_electricity_all_inside_meter_ids; rail_brace_electricity_all_inside_read_event_ids; rail_brace_electricity_all_inside_start_reads; rail_brace_electricity_all_inside_end_reads; rail_brace_electricity_all_inside_kwh_factors; rail_brace_electricity_all_inside_consumer_ids; rail_brace_electricity_eligible_consumer_ids; rail_brace_electricity_own_residual_weight; rail_brace_electricity_all_eligible_residual_weights; rail_brace_electricity_weight_method_evidence; rail_brace_electricity_meter_topology_evidence; rail_brace_electricity_calibration_evidence; cp_rail_brace; SUM_ONCE; CASE_PRESENT; CASE_ZERO; SUM | actual_rail_brace_electricity; rail_brace_electricity_direct_kwh; rail_brace_electricity_master_kwh; rail_brace_electricity_inside_direct_kwh; rail_brace_electricity_residual_kwh; rail_brace_electricity_allocated_interval_kwh |  |
| calc_rail_brace_access_service | rail_brace_access_service | rail_brace_access_service_billed_h = rail_brace_access_service_billed_native_quantity * rail_brace_access_service_actual_hours_per_native_unit; rail_brace_access_service_direct_h = SUM_ONCE(rail_brace_access_service_own_direct_service_hours, rail_brace_access_service_own_direct_service_event_ids); rail_brace_access_service_residual_h = rail_brace_access_service_billed_h - SUM_ONCE(rail_brace_access_service_all_direct_service_hours, rail_brace_access_service_all_direct_service_event_ids); rail_brace_access_service_allocated_period_h = rail_brace_access_service_direct_h + CASE_ZERO(rail_brace_access_service_residual_h, 0, rail_brace_access_service_residual_h * rail_brace_access_service_own_residual_weight / SUM(rail_brace_access_service_all_eligible_residual_weights)); actual_rail_brace_access_service = SUM_ONCE(rail_brace_access_service_allocated_period_h, rail_brace_access_service_allocation_instance_ids)。输出为 h 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。逐一真实合同/账单分配期间计算已计费、直接、剩余及分配，再按唯一 allocation_instance_ids 累加小时。各期保留自身权重，不混合不同期间剩余；正剩余的合格权重严格正，有证据不合格节点不分剩余。转换由合同和实际可用性确定，不默认班次、年度或寿命。自有责任闲置/返工在直接记录中只计一次，全部账单消费者核对直接加剩余；零无需权重，正需完整正权重，供应商已含能源或资产负荷不重复采购。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 CASE_ZERO：CASE_ZERO(r, z, p) 在实测 r 为零时返回 z，不求值权重除法；仅当 r 为正、消费者完整已审、各合格权重严格为正且分母为正时返回 p。负或未知剩余无效并保留缺口，不截为零。 定义 SUM：对本协议明确完整登记集合进行算术求和。 | rail_brace_access_service_asset_or_service_id; rail_brace_access_service_allocation_instance_ids; rail_brace_access_service_contract_id; rail_brace_access_service_period_ids; rail_brace_access_service_period_start; rail_brace_access_service_period_end; rail_brace_access_service_billed_native_quantity; rail_brace_access_service_billed_native_unit; rail_brace_access_service_actual_hours_per_native_unit; rail_brace_access_service_conversion_evidence; rail_brace_access_service_all_direct_service_event_ids; rail_brace_access_service_all_direct_service_hours; rail_brace_access_service_own_direct_service_event_ids; rail_brace_access_service_own_direct_service_hours; rail_brace_access_service_owned_idle_event_ids; rail_brace_access_service_owned_rework_event_ids; rail_brace_access_service_eligible_consumer_ids; rail_brace_access_service_own_residual_weight; rail_brace_access_service_all_eligible_residual_weights; rail_brace_access_service_allocation_decision_id; rail_brace_access_service_provider_boundary_coverage; cp_rail_brace; SUM_ONCE; CASE_ZERO; SUM | actual_rail_brace_access_service; rail_brace_access_service_billed_h; rail_brace_access_service_direct_h; rail_brace_access_service_residual_h; rail_brace_access_service_allocated_period_h |  |
| calc_rail_panel_feed | rail_panel_feed | actual_rail_panel_feed = SUM_ONCE(rail_panel_feed_centerline_m, rail_panel_feed_transfer_event_ids); rail_panel_feed_retained_material_mass_kg = SUM_ONCE(rail_panel_feed_retained_component_mass_kg, rail_panel_feed_retained_component_event_ids)。输出为 m 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。记录真实接收/移交几何及合格/当前状态，源接收事件配对一致并明确部分批次和 WIP，设计文件及固定 1 m 不能替代真实几何。保留质量诊断按本次实际区段移交/验收事件及准确材料/源状态/当前状态/期间和源投入 ID，对实测新增安装构件或组分 kg 求和。排除既有柱、基础及既有构件；复合物整体或实测组分互斥。米仅确定移交/验收门槛，不推算 kg；诊断不新增产品交换或采购负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | rail_panel_feed_transfer_event_ids; rail_panel_feed_segment_ids; rail_panel_feed_centerline_m; rail_panel_feed_state_ids; rail_panel_feed_source_node; rail_panel_feed_recipient_node; rail_panel_feed_handoff_document_ids; rail_panel_feed_condition_evidence; rail_panel_feed_corner_and_opening_resolution; cp_fabric_tension; SUM_ONCE; rail_panel_feed_retained_component_mass_kg; rail_panel_feed_retained_component_event_ids; rail_panel_feed_retained_component_material_ids; rail_panel_feed_retained_component_source_state_ids; rail_panel_feed_retained_component_actual_state_ids; rail_panel_feed_retained_component_period_ids; rail_panel_feed_retained_component_panel_transfer_ids; rail_panel_feed_retained_component_source_input_ids; rail_panel_feed_retained_component_bridge_evidence; rail_panel_feed_retained_component_existing_exclusion; rail_panel_feed_retained_component_representation_mode | actual_rail_panel_feed; rail_panel_feed_retained_material_mass_kg |  |
| calc_chainlink_fabric | chainlink_fabric | actual_chainlink_fabric = SUM_ONCE(chainlink_fabric_mass_kg, chainlink_fabric_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 原构件测量台账 issue_chainlink_fabric 保留在条件清单发料 issue_materials_fabric_tension 下；其实际 SKU/状态量匹配独立接收材料投入，各真实交换独立核实，不创建聚合混合产品身份或重复采购。 | chainlink_fabric_transfer_event_ids; chainlink_fabric_mass_kg; chainlink_fabric_material_ids; chainlink_fabric_state_ids; chainlink_fabric_source_row_ids; chainlink_fabric_source_node; chainlink_fabric_recipient_node; chainlink_fabric_custodian_from; chainlink_fabric_custodian_to; chainlink_fabric_handoff_document_ids; chainlink_fabric_native_units; chainlink_fabric_native_quantities; chainlink_fabric_measured_kg_per_native_unit; chainlink_fabric_bridge_evidence; cp_fabric_tension; SUM_ONCE | actual_chainlink_fabric |  |
| calc_fabric_fittings | fabric_fittings | actual_fabric_fittings = SUM_ONCE(fabric_fittings_mass_kg, fabric_fittings_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 原构件测量台账 issue_fabric_fittings 保留在条件清单发料 issue_materials_fabric_tension 下；其实际 SKU/状态量匹配独立接收材料投入，各真实交换独立核实，不创建聚合混合产品身份或重复采购。 | fabric_fittings_transfer_event_ids; fabric_fittings_mass_kg; fabric_fittings_material_ids; fabric_fittings_state_ids; fabric_fittings_source_row_ids; fabric_fittings_source_node; fabric_fittings_recipient_node; fabric_fittings_custodian_from; fabric_fittings_custodian_to; fabric_fittings_handoff_document_ids; fabric_fittings_native_units; fabric_fittings_native_quantities; fabric_fittings_measured_kg_per_native_unit; fabric_fittings_bridge_evidence; cp_fabric_tension; SUM_ONCE | actual_fabric_fittings |  |
| calc_tensioned_fence | tensioned_fence | actual_tensioned_fence = SUM_ONCE(tensioned_fence_centerline_m, tensioned_fence_transfer_event_ids); tensioned_fence_retained_material_mass_kg = SUM_ONCE(tensioned_fence_retained_component_mass_kg, tensioned_fence_retained_component_event_ids)。输出为 m 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。记录真实接收/移交几何及合格/当前状态，源接收事件配对一致并明确部分批次和 WIP，设计文件及固定 1 m 不能替代真实几何。保留质量诊断按本次实际区段移交/验收事件及准确材料/源状态/当前状态/期间和源投入 ID，对实测新增安装构件或组分 kg 求和。排除既有柱、基础及既有构件；复合物整体或实测组分互斥。米仅确定移交/验收门槛，不推算 kg；诊断不新增产品交换或采购负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | tensioned_fence_transfer_event_ids; tensioned_fence_segment_ids; tensioned_fence_centerline_m; tensioned_fence_state_ids; tensioned_fence_source_node; tensioned_fence_recipient_node; tensioned_fence_handoff_document_ids; tensioned_fence_condition_evidence; tensioned_fence_corner_and_opening_resolution; cp_fabric_tension; SUM_ONCE; tensioned_fence_retained_component_mass_kg; tensioned_fence_retained_component_event_ids; tensioned_fence_retained_component_material_ids; tensioned_fence_retained_component_source_state_ids; tensioned_fence_retained_component_actual_state_ids; tensioned_fence_retained_component_period_ids; tensioned_fence_retained_component_panel_transfer_ids; tensioned_fence_retained_component_source_input_ids; tensioned_fence_retained_component_bridge_evidence; tensioned_fence_retained_component_existing_exclusion; tensioned_fence_retained_component_representation_mode | actual_tensioned_fence; tensioned_fence_retained_material_mass_kg |  |
| calc_fabric_waste | fabric_waste | actual_fabric_waste = SUM_ONCE(fabric_waste_mass_kg, fabric_waste_exit_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。每项丢弃实物量只有一个产生节点和实测去向，包装及捕集颗粒按成分识别。期末 WIP 或可用退出不是废物；混合固液先区分组分再做纯水平衡。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | fabric_waste_exit_event_ids; fabric_waste_mass_kg; fabric_waste_material_ids; fabric_waste_state_ids; fabric_waste_fate_codes; fabric_waste_custodian_ids; fabric_waste_waste_treatment_route; fabric_waste_native_units; fabric_waste_native_quantities; fabric_waste_measured_kg_per_native_unit; fabric_waste_bridge_evidence; fabric_waste_absence_evidence; cp_fabric_tension; SUM_ONCE | actual_fabric_waste |  |
| calc_fabric_direct_release | fabric_direct_release | actual_fabric_direct_release = SUM_ONCE(fabric_direct_release_uncaptured_mass_kg, fabric_direct_release_release_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。各物质、颗粒基准及介质为不同最终交换，本聚合角色不是通用污染物 UUID。排除捕集废物；物质、介质或量未知则该交换不能完成，材料亏差不是实测排放。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | fabric_direct_release_release_event_ids; fabric_direct_release_uncaptured_mass_kg; fabric_direct_release_substance_ids; fabric_direct_release_substance_names; fabric_direct_release_receiving_media; fabric_direct_release_particle_size_basis; fabric_direct_release_measurement_method; fabric_direct_release_capture_boundary_evidence; fabric_direct_release_operation_ids; fabric_direct_release_absence_evidence; cp_fabric_tension; SUM_ONCE | actual_fabric_direct_release |  |
| calc_fabric_unused_return | fabric_unused_return | actual_fabric_unused_return = SUM_ONCE(fabric_unused_return_return_kg, fabric_unused_return_return_event_ids) + SUM_ONCE(fabric_unused_return_transfer_kg, fabric_unused_return_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。退回 U 与外部转移 X 为正且互斥，不含期末完好库存、保留产品、WIP、废物或内部供料。只携带未改变原材料上游负荷，现场工作、闲置和返工仍归安装批次，净消耗诊断不产生第二负交换或抵扣。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | fabric_unused_return_return_event_ids; fabric_unused_return_return_kg; fabric_unused_return_transfer_event_ids; fabric_unused_return_transfer_kg; fabric_unused_return_material_ids; fabric_unused_return_state_ids; fabric_unused_return_native_units; fabric_unused_return_native_quantities; fabric_unused_return_measured_kg_per_native_unit; fabric_unused_return_bridge_evidence; fabric_unused_return_external_custodian_ids; fabric_unused_return_original_input_ids; fabric_unused_return_original_upstream_burden_evidence; fabric_unused_return_exit_quality_evidence; fabric_unused_return_retained_wip_exclusion_evidence; cp_fabric_tension; SUM_ONCE | actual_fabric_unused_return |  |
| calc_fabric_tension_electricity | fabric_tension_electricity | fabric_tension_electricity_direct_kwh = SUM_ONCE((fabric_tension_electricity_own_direct_end_reads - fabric_tension_electricity_own_direct_start_reads) * fabric_tension_electricity_own_direct_kwh_factors, fabric_tension_electricity_own_direct_read_event_ids); fabric_tension_electricity_master_kwh = CASE_PRESENT(fabric_tension_electricity_master_scope_present, (fabric_tension_electricity_master_end_read - fabric_tension_electricity_master_start_read) * fabric_tension_electricity_master_kwh_factor, 0); fabric_tension_electricity_inside_direct_kwh = CASE_PRESENT(fabric_tension_electricity_master_scope_present, SUM_ONCE((fabric_tension_electricity_all_inside_end_reads - fabric_tension_electricity_all_inside_start_reads) * fabric_tension_electricity_all_inside_kwh_factors, fabric_tension_electricity_all_inside_read_event_ids), 0); fabric_tension_electricity_residual_kwh = fabric_tension_electricity_master_kwh - fabric_tension_electricity_inside_direct_kwh; fabric_tension_electricity_allocated_interval_kwh = fabric_tension_electricity_direct_kwh + CASE_ZERO(fabric_tension_electricity_residual_kwh, 0, fabric_tension_electricity_residual_kwh * fabric_tension_electricity_own_residual_weight / SUM(fabric_tension_electricity_all_eligible_residual_weights)); actual_fabric_tension_electricity = SUM_ONCE(fabric_tension_electricity_allocated_interval_kwh, fabric_tension_electricity_allocation_instance_ids)。输出为 kWh 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。各同总表区间分别算直接、总表内直接、总表、剩余及分配；读数事件 ID 包含电表与区间，保留真实重复区间。按唯一 allocation_instance_ids 累加批次分子。本节点直接量可含总表外，all_inside 仅含总表内已直接归属者各一次。证实零剩余无需权重；拓扑证明纯直接且无共享总表时零为中性诊断项。非零总表恰好等于全部内直接量也为零剩余。正剩余须完整消费者、每个合格权重严格正及正分母。未知/负剩余是缺口，所有节点和其他消费者须核对同一总表区间。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 CASE_PRESENT：仅当真实电表拓扑证明有共享总表时求值存在分支；仅当拓扑证明直接供电时求值不存在分支。未知范围为缺口；不存在分支的零只是中性诊断项，绝非虚构零读数。 定义 CASE_ZERO：CASE_ZERO(r, z, p) 在实测 r 为零时返回 z，不求值权重除法；仅当 r 为正、消费者完整已审、各合格权重严格为正且分母为正时返回 p。负或未知剩余无效并保留缺口，不截为零。 定义 SUM：对本协议明确完整登记集合进行算术求和。 | fabric_tension_electricity_supply_id; fabric_tension_electricity_allocation_instance_ids; fabric_tension_electricity_interval_ids; fabric_tension_electricity_interval_start; fabric_tension_electricity_interval_end; fabric_tension_electricity_own_direct_meter_ids; fabric_tension_electricity_own_direct_read_event_ids; fabric_tension_electricity_own_direct_start_reads; fabric_tension_electricity_own_direct_end_reads; fabric_tension_electricity_own_direct_kwh_factors; fabric_tension_electricity_own_direct_topology; fabric_tension_electricity_master_scope_present; fabric_tension_electricity_master_meter_id; fabric_tension_electricity_master_start_read; fabric_tension_electricity_master_end_read; fabric_tension_electricity_master_kwh_factor; fabric_tension_electricity_all_inside_meter_ids; fabric_tension_electricity_all_inside_read_event_ids; fabric_tension_electricity_all_inside_start_reads; fabric_tension_electricity_all_inside_end_reads; fabric_tension_electricity_all_inside_kwh_factors; fabric_tension_electricity_all_inside_consumer_ids; fabric_tension_electricity_eligible_consumer_ids; fabric_tension_electricity_own_residual_weight; fabric_tension_electricity_all_eligible_residual_weights; fabric_tension_electricity_weight_method_evidence; fabric_tension_electricity_meter_topology_evidence; fabric_tension_electricity_calibration_evidence; cp_fabric_tension; SUM_ONCE; CASE_PRESENT; CASE_ZERO; SUM | actual_fabric_tension_electricity; fabric_tension_electricity_direct_kwh; fabric_tension_electricity_master_kwh; fabric_tension_electricity_inside_direct_kwh; fabric_tension_electricity_residual_kwh; fabric_tension_electricity_allocated_interval_kwh |  |
| calc_fabric_tension_access_service | fabric_tension_access_service | fabric_tension_access_service_billed_h = fabric_tension_access_service_billed_native_quantity * fabric_tension_access_service_actual_hours_per_native_unit; fabric_tension_access_service_direct_h = SUM_ONCE(fabric_tension_access_service_own_direct_service_hours, fabric_tension_access_service_own_direct_service_event_ids); fabric_tension_access_service_residual_h = fabric_tension_access_service_billed_h - SUM_ONCE(fabric_tension_access_service_all_direct_service_hours, fabric_tension_access_service_all_direct_service_event_ids); fabric_tension_access_service_allocated_period_h = fabric_tension_access_service_direct_h + CASE_ZERO(fabric_tension_access_service_residual_h, 0, fabric_tension_access_service_residual_h * fabric_tension_access_service_own_residual_weight / SUM(fabric_tension_access_service_all_eligible_residual_weights)); actual_fabric_tension_access_service = SUM_ONCE(fabric_tension_access_service_allocated_period_h, fabric_tension_access_service_allocation_instance_ids)。输出为 h 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。逐一真实合同/账单分配期间计算已计费、直接、剩余及分配，再按唯一 allocation_instance_ids 累加小时。各期保留自身权重，不混合不同期间剩余；正剩余的合格权重严格正，有证据不合格节点不分剩余。转换由合同和实际可用性确定，不默认班次、年度或寿命。自有责任闲置/返工在直接记录中只计一次，全部账单消费者核对直接加剩余；零无需权重，正需完整正权重，供应商已含能源或资产负荷不重复采购。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 CASE_ZERO：CASE_ZERO(r, z, p) 在实测 r 为零时返回 z，不求值权重除法；仅当 r 为正、消费者完整已审、各合格权重严格为正且分母为正时返回 p。负或未知剩余无效并保留缺口，不截为零。 定义 SUM：对本协议明确完整登记集合进行算术求和。 | fabric_tension_access_service_asset_or_service_id; fabric_tension_access_service_allocation_instance_ids; fabric_tension_access_service_contract_id; fabric_tension_access_service_period_ids; fabric_tension_access_service_period_start; fabric_tension_access_service_period_end; fabric_tension_access_service_billed_native_quantity; fabric_tension_access_service_billed_native_unit; fabric_tension_access_service_actual_hours_per_native_unit; fabric_tension_access_service_conversion_evidence; fabric_tension_access_service_all_direct_service_event_ids; fabric_tension_access_service_all_direct_service_hours; fabric_tension_access_service_own_direct_service_event_ids; fabric_tension_access_service_own_direct_service_hours; fabric_tension_access_service_owned_idle_event_ids; fabric_tension_access_service_owned_rework_event_ids; fabric_tension_access_service_eligible_consumer_ids; fabric_tension_access_service_own_residual_weight; fabric_tension_access_service_all_eligible_residual_weights; fabric_tension_access_service_allocation_decision_id; fabric_tension_access_service_provider_boundary_coverage; cp_fabric_tension; SUM_ONCE; CASE_ZERO; SUM | actual_fabric_tension_access_service; fabric_tension_access_service_billed_h; fabric_tension_access_service_direct_h; fabric_tension_access_service_residual_h; fabric_tension_access_service_allocated_period_h |  |
| calc_finish_panel_feed | finish_panel_feed | actual_finish_panel_feed = SUM_ONCE(finish_panel_feed_centerline_m, finish_panel_feed_transfer_event_ids); finish_panel_feed_retained_material_mass_kg = SUM_ONCE(finish_panel_feed_retained_component_mass_kg, finish_panel_feed_retained_component_event_ids)。输出为 m 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。记录真实接收/移交几何及合格/当前状态，源接收事件配对一致并明确部分批次和 WIP，设计文件及固定 1 m 不能替代真实几何。保留质量诊断按本次实际区段移交/验收事件及准确材料/源状态/当前状态/期间和源投入 ID，对实测新增安装构件或组分 kg 求和。排除既有柱、基础及既有构件；复合物整体或实测组分互斥。米仅确定移交/验收门槛，不推算 kg；诊断不新增产品交换或采购负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | finish_panel_feed_transfer_event_ids; finish_panel_feed_segment_ids; finish_panel_feed_centerline_m; finish_panel_feed_state_ids; finish_panel_feed_source_node; finish_panel_feed_recipient_node; finish_panel_feed_handoff_document_ids; finish_panel_feed_condition_evidence; finish_panel_feed_corner_and_opening_resolution; cp_finish_accept; SUM_ONCE; finish_panel_feed_retained_component_mass_kg; finish_panel_feed_retained_component_event_ids; finish_panel_feed_retained_component_material_ids; finish_panel_feed_retained_component_source_state_ids; finish_panel_feed_retained_component_actual_state_ids; finish_panel_feed_retained_component_period_ids; finish_panel_feed_retained_component_panel_transfer_ids; finish_panel_feed_retained_component_source_input_ids; finish_panel_feed_retained_component_bridge_evidence; finish_panel_feed_retained_component_existing_exclusion; finish_panel_feed_retained_component_representation_mode | actual_finish_panel_feed; finish_panel_feed_retained_material_mass_kg |  |
| calc_coating_cleanup | coating_cleanup | actual_coating_cleanup = SUM_ONCE(coating_cleanup_mass_kg, coating_cleanup_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | coating_cleanup_transfer_event_ids; coating_cleanup_mass_kg; coating_cleanup_material_ids; coating_cleanup_state_ids; coating_cleanup_source_row_ids; coating_cleanup_source_node; coating_cleanup_recipient_node; coating_cleanup_custodian_from; coating_cleanup_custodian_to; coating_cleanup_handoff_document_ids; coating_cleanup_native_units; coating_cleanup_native_quantities; coating_cleanup_measured_kg_per_native_unit; coating_cleanup_bridge_evidence; cp_finish_accept; SUM_ONCE | actual_coating_cleanup |  |
| calc_finish_water | finish_water | actual_finish_water = finish_water_opening_kg + finish_water_external_receipts_kg - finish_water_closing_unissued_intact_kg。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。三个池均为同 SKU/当前状态桥接后的真实 kg；期末为所有地点本批未发完好库存各一次，不含已发 U/X、安装保留或处理 WIP。总领用包含实际未用退出，不二次净扣。 | finish_water_opening_kg; finish_water_external_receipts_kg; finish_water_closing_unissued_intact_kg; finish_water_material_ids; finish_water_state_ids; finish_water_native_units; finish_water_native_quantities; finish_water_measured_kg_per_native_unit; finish_water_bridge_evidence; finish_water_stock_item_ids; finish_water_stock_sublocations; finish_water_stock_custodians; finish_water_stock_count_times; finish_water_receipt_event_ids; cp_finish_accept | actual_finish_water |  |
| calc_finish_waste | finish_waste | actual_finish_waste = SUM_ONCE(finish_waste_mass_kg, finish_waste_exit_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。每项丢弃实物量只有一个产生节点和实测去向，包装及捕集颗粒按成分识别。期末 WIP 或可用退出不是废物；混合固液先区分组分再做纯水平衡。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | finish_waste_exit_event_ids; finish_waste_mass_kg; finish_waste_material_ids; finish_waste_state_ids; finish_waste_fate_codes; finish_waste_custodian_ids; finish_waste_waste_treatment_route; finish_waste_native_units; finish_waste_native_quantities; finish_waste_measured_kg_per_native_unit; finish_waste_bridge_evidence; finish_waste_absence_evidence; cp_finish_accept; SUM_ONCE | actual_finish_waste |  |
| calc_finish_wastewater | finish_wastewater | actual_finish_wastewater = SUM_ONCE(finish_wastewater_mass_kg, finish_wastewater_exit_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。每项丢弃实物量只有一个产生节点和实测去向，包装及捕集颗粒按成分识别。期末 WIP 或可用退出不是废物；混合固液先区分组分再做纯水平衡。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | finish_wastewater_exit_event_ids; finish_wastewater_mass_kg; finish_wastewater_material_ids; finish_wastewater_state_ids; finish_wastewater_fate_codes; finish_wastewater_custodian_ids; finish_wastewater_waste_treatment_route; finish_wastewater_native_units; finish_wastewater_native_quantities; finish_wastewater_measured_kg_per_native_unit; finish_wastewater_bridge_evidence; finish_wastewater_absence_evidence; cp_finish_accept; SUM_ONCE | actual_finish_wastewater |  |
| calc_finish_water_vapour | finish_water_vapour | actual_finish_water_vapour = SUM_ONCE(finish_water_vapour_observed_h2o_kg, finish_water_vapour_release_event_ids); finish_coating_water_received_kg = SUM_ONCE(finish_water_vapour_coating_received_mass_kg * finish_water_vapour_coating_water_fraction, finish_water_vapour_coating_transfer_ids); finish_coating_feed_mass_gap_kg = actual_coating_cleanup - SUM_ONCE(finish_water_vapour_coating_received_mass_kg, finish_water_vapour_coating_transfer_ids); finish_water_closure_gap_kg = actual_finish_water + finish_coating_water_received_kg + WATER_PORTION(finish_water_vapour_panel_received_water_kg, finish_panel_feed_retained_material_mass_kg, finish_water_vapour_pool_card_event_crosswalk) + WATER_PORTION(finish_water_vapour_opening_processed_wip_water_kg, SUM_ONCE(finish_accept_mass_closure_opening_processed_wip_kg, finish_accept_mass_closure_opening_processed_wip_event_ids), finish_water_vapour_pool_card_event_crosswalk) - WATER_PORTION(finish_water_vapour_accepted_retained_water_kg, accepted_fence_service_retained_material_mass_kg, finish_water_vapour_pool_card_event_crosswalk) - WATER_PORTION(finish_water_vapour_solid_waste_water_kg, actual_finish_waste, finish_water_vapour_pool_card_event_crosswalk) - WATER_PORTION(finish_water_vapour_liquid_waste_water_kg, actual_finish_wastewater, finish_water_vapour_pool_card_event_crosswalk) - WATER_PORTION(finish_water_vapour_direct_liquid_h2o_kg, actual_finish_other_release, finish_water_vapour_pool_card_event_crosswalk) - actual_finish_water_vapour - WATER_PORTION(finish_water_vapour_unused_fresh_return_water_kg + finish_water_vapour_unused_fresh_transfer_water_kg, actual_finish_unused_return, finish_water_vapour_pool_card_event_crosswalk) - WATER_PORTION(finish_water_vapour_processed_transfer_water_kg, LINKED_TRANSFER_MASS(finish_accept_mass_closure_processed_transfer_out_kg, finish_water_vapour_processed_transfer_event_crosswalk, finish_accept_mass_closure_group_keys), finish_water_vapour_pool_card_event_crosswalk) - WATER_PORTION(finish_water_vapour_closing_processed_wip_water_kg, SUM_ONCE(finish_accept_mass_closure_closing_processed_wip_kg, finish_accept_mass_closure_closing_processed_wip_event_ids), finish_water_vapour_pool_card_event_crosswalk)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。实际 H2O 排入未特指空气须独立观察或经验证的操作专用蒸气模型，闭合差额仅诊断。actual_finish_water 已排除完好库存一次，此处无再次库存扣减。每次涂层/清洁转移保留自身实测配方水比例，零也需证据；按真实转移 ID 对水 kg 求和，用 finish_coating_feed_mass_gap_kg 将配方供料质量核对 actual_coating_cleanup。实际配方及入站区段剩余水证明输入；期初处理 WIP 不含这些新输入。废物水分、保留水、未用新鲜 U/X、处理转移和期末 WIP 为实测互斥池，不是混合废物总质量。差额绝对值须在登记容差内，否则保留缺口，不改称蒸发。每项水操作数为明确自有节点物理载体输出或实测 WIP 的真实组分，按卡片原事件/材料/状态/期间关联。正处理水转移须已表示产生卡/接收供料配对，否则范围缺口阻止完成，不虚构转移或默认零。新鲜水 U/X 都属于 actual_finish_unused_return，不独立净扣输入。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 WATER_PORTION：按确切事件/材料/状态/期间返回命名自有节点质量输出中的实测纯水 kg，逐份对照实际湿质量及配方水分，不超过载体质量，也不与其他水池重叠。 定义 LINKED_TRANSFER_MASS：只有交叉表明确自有节点实际产生卡/输出、接收供料/输出、事件、材料、源和实际状态、期间及单位且配对量一致时，才返回实测处理/复用/返工转移 kg。正转移无已表示语义配对时阻止完成并要求流卡审查，不是差额填补或自动新增交换。  直接液态H2O仅取actual_finish_other_release中有真实接收介质和来源事件证据的实测水份额，不包括已单列空气水蒸气或收集废水。水份额不能超过其释放载体；未知份额或介质阻断水闭合，不新增推定排放，不借用蒸气空气UUID。| finish_water_vapour_release_event_ids; finish_water_vapour_observed_h2o_kg; finish_water_vapour_measurement_evidence; finish_water_vapour_air_medium_evidence; finish_water_vapour_coating_water_fraction; finish_water_vapour_coating_received_mass_kg; finish_water_vapour_coating_transfer_ids; finish_water_vapour_coating_formulation_ids; finish_water_vapour_coating_fraction_evidence; finish_water_vapour_panel_received_water_kg; finish_water_vapour_opening_processed_wip_water_kg; finish_water_vapour_accepted_retained_water_kg; finish_water_vapour_solid_waste_water_kg; finish_water_vapour_liquid_waste_water_kg; finish_water_vapour_unused_fresh_return_water_kg; finish_water_vapour_unused_fresh_transfer_water_kg; finish_water_vapour_processed_transfer_water_kg; finish_water_vapour_closing_processed_wip_water_kg; finish_water_vapour_pool_event_ids; finish_water_vapour_pool_exclusivity_evidence; finish_water_vapour_measurement_tolerance_kg; actual_finish_water; actual_coating_cleanup; cp_finish_accept; SUM_ONCE; finish_water_vapour_pool_card_event_crosswalk; finish_water_vapour_processed_transfer_event_crosswalk; WATER_PORTION; LINKED_TRANSFER_MASS; accepted_fence_service_retained_material_mass_kg; finish_panel_feed_retained_material_mass_kg; actual_finish_waste; actual_finish_wastewater; actual_finish_unused_return; finish_accept_mass_closure_opening_processed_wip_kg; finish_accept_mass_closure_opening_processed_wip_event_ids; finish_accept_mass_closure_closing_processed_wip_kg; finish_accept_mass_closure_closing_processed_wip_event_ids; finish_accept_mass_closure_processed_transfer_out_kg; finish_accept_mass_closure_group_keys ; finish_water_vapour_direct_liquid_h2o_kg; actual_finish_other_release | actual_finish_water_vapour; finish_coating_water_received_kg; finish_coating_feed_mass_gap_kg; finish_water_closure_gap_kg |  |
| calc_finish_other_release | finish_other_release | actual_finish_other_release = SUM_ONCE(finish_other_release_uncaptured_mass_kg, finish_other_release_release_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。各物质、颗粒基准及介质为不同最终交换，本聚合角色不是通用污染物 UUID。排除捕集废物；物质、介质或量未知则该交换不能完成，材料亏差不是实测排放。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | finish_other_release_release_event_ids; finish_other_release_uncaptured_mass_kg; finish_other_release_substance_ids; finish_other_release_substance_names; finish_other_release_receiving_media; finish_other_release_particle_size_basis; finish_other_release_measurement_method; finish_other_release_capture_boundary_evidence; finish_other_release_operation_ids; finish_other_release_absence_evidence; cp_finish_accept; SUM_ONCE | actual_finish_other_release |  |
| calc_finish_unused_return | finish_unused_return | actual_finish_unused_return = SUM_ONCE(finish_unused_return_return_kg, finish_unused_return_return_event_ids) + SUM_ONCE(finish_unused_return_transfer_kg, finish_unused_return_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。退回 U 与外部转移 X 为正且互斥，不含期末完好库存、保留产品、WIP、废物或内部供料。只携带未改变原材料上游负荷，现场工作、闲置和返工仍归安装批次，净消耗诊断不产生第二负交换或抵扣。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | finish_unused_return_return_event_ids; finish_unused_return_return_kg; finish_unused_return_transfer_event_ids; finish_unused_return_transfer_kg; finish_unused_return_material_ids; finish_unused_return_state_ids; finish_unused_return_native_units; finish_unused_return_native_quantities; finish_unused_return_measured_kg_per_native_unit; finish_unused_return_bridge_evidence; finish_unused_return_external_custodian_ids; finish_unused_return_original_input_ids; finish_unused_return_original_upstream_burden_evidence; finish_unused_return_exit_quality_evidence; finish_unused_return_retained_wip_exclusion_evidence; cp_finish_accept; SUM_ONCE | actual_finish_unused_return |  |
| calc_accepted_fence_service | accepted_fence_service | L = SUM_UNIQUE_SEGMENTS(accepted_fence_service_net_centerline_m, accepted_fence_service_segment_ids); accepted_fence_service_retained_material_mass_kg = SUM_ONCE(accepted_fence_service_retained_component_mass_kg, accepted_fence_service_retained_component_event_ids)。只对配置及完工状态完整签署且验收的区段求和，L > 0；未知验收、待纠正缺陷和 WIP 排除，Amount 为 L/L，每参考流严格 1 m。保留质量诊断按本次实际区段移交/验收事件及准确材料/源状态/当前状态/期间和源投入 ID，对实测新增安装构件或组分 kg 求和。排除既有柱、基础及既有构件；复合物整体或实测组分互斥。米仅确定移交/验收门槛，不推算 kg；诊断不新增产品交换或采购负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 SUM_UNIQUE_SEGMENTS：按稳定区段 ID 对互不重叠的实测中心线求和，拐角只计一次并先排除实际门洞/开口，返工返访不产生新验收段。只计满足本卡当前状态门槛的区段，最终参考段必须净且已验收。 | accepted_fence_service_segment_ids; accepted_fence_service_net_centerline_m; accepted_fence_service_acceptance_ids; accepted_fence_service_corner_resolution; accepted_fence_service_opening_gap_register; accepted_fence_service_required_components_complete; accepted_fence_service_taut_fabric_state; accepted_fence_service_end_and_clearance_check; accepted_fence_service_finish_requirement_state; accepted_fence_service_configuration_id; cp_finish_accept; SUM_UNIQUE_SEGMENTS; L; accepted_fence_service_retained_component_mass_kg; accepted_fence_service_retained_component_event_ids; accepted_fence_service_retained_component_material_ids; accepted_fence_service_retained_component_source_state_ids; accepted_fence_service_retained_component_actual_state_ids; accepted_fence_service_retained_component_period_ids; accepted_fence_service_retained_component_panel_transfer_ids; accepted_fence_service_retained_component_source_input_ids; accepted_fence_service_retained_component_bridge_evidence; accepted_fence_service_retained_component_existing_exclusion; accepted_fence_service_retained_component_representation_mode; SUM_ONCE | L; accepted_fence_service_retained_material_mass_kg |  |
| calc_finish_accept_electricity | finish_accept_electricity | finish_accept_electricity_direct_kwh = SUM_ONCE((finish_accept_electricity_own_direct_end_reads - finish_accept_electricity_own_direct_start_reads) * finish_accept_electricity_own_direct_kwh_factors, finish_accept_electricity_own_direct_read_event_ids); finish_accept_electricity_master_kwh = CASE_PRESENT(finish_accept_electricity_master_scope_present, (finish_accept_electricity_master_end_read - finish_accept_electricity_master_start_read) * finish_accept_electricity_master_kwh_factor, 0); finish_accept_electricity_inside_direct_kwh = CASE_PRESENT(finish_accept_electricity_master_scope_present, SUM_ONCE((finish_accept_electricity_all_inside_end_reads - finish_accept_electricity_all_inside_start_reads) * finish_accept_electricity_all_inside_kwh_factors, finish_accept_electricity_all_inside_read_event_ids), 0); finish_accept_electricity_residual_kwh = finish_accept_electricity_master_kwh - finish_accept_electricity_inside_direct_kwh; finish_accept_electricity_allocated_interval_kwh = finish_accept_electricity_direct_kwh + CASE_ZERO(finish_accept_electricity_residual_kwh, 0, finish_accept_electricity_residual_kwh * finish_accept_electricity_own_residual_weight / SUM(finish_accept_electricity_all_eligible_residual_weights)); actual_finish_accept_electricity = SUM_ONCE(finish_accept_electricity_allocated_interval_kwh, finish_accept_electricity_allocation_instance_ids)。输出为 kWh 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。各同总表区间分别算直接、总表内直接、总表、剩余及分配；读数事件 ID 包含电表与区间，保留真实重复区间。按唯一 allocation_instance_ids 累加批次分子。本节点直接量可含总表外，all_inside 仅含总表内已直接归属者各一次。证实零剩余无需权重；拓扑证明纯直接且无共享总表时零为中性诊断项。非零总表恰好等于全部内直接量也为零剩余。正剩余须完整消费者、每个合格权重严格正及正分母。未知/负剩余是缺口，所有节点和其他消费者须核对同一总表区间。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 CASE_PRESENT：仅当真实电表拓扑证明有共享总表时求值存在分支；仅当拓扑证明直接供电时求值不存在分支。未知范围为缺口；不存在分支的零只是中性诊断项，绝非虚构零读数。 定义 CASE_ZERO：CASE_ZERO(r, z, p) 在实测 r 为零时返回 z，不求值权重除法；仅当 r 为正、消费者完整已审、各合格权重严格为正且分母为正时返回 p。负或未知剩余无效并保留缺口，不截为零。 定义 SUM：对本协议明确完整登记集合进行算术求和。 | finish_accept_electricity_supply_id; finish_accept_electricity_allocation_instance_ids; finish_accept_electricity_interval_ids; finish_accept_electricity_interval_start; finish_accept_electricity_interval_end; finish_accept_electricity_own_direct_meter_ids; finish_accept_electricity_own_direct_read_event_ids; finish_accept_electricity_own_direct_start_reads; finish_accept_electricity_own_direct_end_reads; finish_accept_electricity_own_direct_kwh_factors; finish_accept_electricity_own_direct_topology; finish_accept_electricity_master_scope_present; finish_accept_electricity_master_meter_id; finish_accept_electricity_master_start_read; finish_accept_electricity_master_end_read; finish_accept_electricity_master_kwh_factor; finish_accept_electricity_all_inside_meter_ids; finish_accept_electricity_all_inside_read_event_ids; finish_accept_electricity_all_inside_start_reads; finish_accept_electricity_all_inside_end_reads; finish_accept_electricity_all_inside_kwh_factors; finish_accept_electricity_all_inside_consumer_ids; finish_accept_electricity_eligible_consumer_ids; finish_accept_electricity_own_residual_weight; finish_accept_electricity_all_eligible_residual_weights; finish_accept_electricity_weight_method_evidence; finish_accept_electricity_meter_topology_evidence; finish_accept_electricity_calibration_evidence; cp_finish_accept; SUM_ONCE; CASE_PRESENT; CASE_ZERO; SUM | actual_finish_accept_electricity; finish_accept_electricity_direct_kwh; finish_accept_electricity_master_kwh; finish_accept_electricity_inside_direct_kwh; finish_accept_electricity_residual_kwh; finish_accept_electricity_allocated_interval_kwh |  |
| calc_finish_accept_access_service | finish_accept_access_service | finish_accept_access_service_billed_h = finish_accept_access_service_billed_native_quantity * finish_accept_access_service_actual_hours_per_native_unit; finish_accept_access_service_direct_h = SUM_ONCE(finish_accept_access_service_own_direct_service_hours, finish_accept_access_service_own_direct_service_event_ids); finish_accept_access_service_residual_h = finish_accept_access_service_billed_h - SUM_ONCE(finish_accept_access_service_all_direct_service_hours, finish_accept_access_service_all_direct_service_event_ids); finish_accept_access_service_allocated_period_h = finish_accept_access_service_direct_h + CASE_ZERO(finish_accept_access_service_residual_h, 0, finish_accept_access_service_residual_h * finish_accept_access_service_own_residual_weight / SUM(finish_accept_access_service_all_eligible_residual_weights)); actual_finish_accept_access_service = SUM_ONCE(finish_accept_access_service_allocated_period_h, finish_accept_access_service_allocation_instance_ids)。输出为 h 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。逐一真实合同/账单分配期间计算已计费、直接、剩余及分配，再按唯一 allocation_instance_ids 累加小时。各期保留自身权重，不混合不同期间剩余；正剩余的合格权重严格正，有证据不合格节点不分剩余。转换由合同和实际可用性确定，不默认班次、年度或寿命。自有责任闲置/返工在直接记录中只计一次，全部账单消费者核对直接加剩余；零无需权重，正需完整正权重，供应商已含能源或资产负荷不重复采购。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 CASE_ZERO：CASE_ZERO(r, z, p) 在实测 r 为零时返回 z，不求值权重除法；仅当 r 为正、消费者完整已审、各合格权重严格为正且分母为正时返回 p。负或未知剩余无效并保留缺口，不截为零。 定义 SUM：对本协议明确完整登记集合进行算术求和。 | finish_accept_access_service_asset_or_service_id; finish_accept_access_service_allocation_instance_ids; finish_accept_access_service_contract_id; finish_accept_access_service_period_ids; finish_accept_access_service_period_start; finish_accept_access_service_period_end; finish_accept_access_service_billed_native_quantity; finish_accept_access_service_billed_native_unit; finish_accept_access_service_actual_hours_per_native_unit; finish_accept_access_service_conversion_evidence; finish_accept_access_service_all_direct_service_event_ids; finish_accept_access_service_all_direct_service_hours; finish_accept_access_service_own_direct_service_event_ids; finish_accept_access_service_own_direct_service_hours; finish_accept_access_service_owned_idle_event_ids; finish_accept_access_service_owned_rework_event_ids; finish_accept_access_service_eligible_consumer_ids; finish_accept_access_service_own_residual_weight; finish_accept_access_service_all_eligible_residual_weights; finish_accept_access_service_allocation_decision_id; finish_accept_access_service_provider_boundary_coverage; cp_finish_accept; SUM_ONCE; CASE_ZERO; SUM | actual_finish_accept_access_service; finish_accept_access_service_billed_h; finish_accept_access_service_direct_h; finish_accept_access_service_residual_h; finish_accept_access_service_allocated_period_h |  |
| calc_receive_rails | receive_rails | actual_receive_rails = receive_rails_opening_kg + receive_rails_external_receipts_kg - receive_rails_closing_unissued_intact_kg。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。三个池均为同 SKU/当前状态桥接后的真实 kg；期末为所有地点本批未发完好库存各一次，不含已发 U/X、安装保留或处理 WIP。总领用包含实际未用退出，不二次净扣。 | receive_rails_opening_kg; receive_rails_external_receipts_kg; receive_rails_closing_unissued_intact_kg; receive_rails_material_ids; receive_rails_state_ids; receive_rails_native_units; receive_rails_native_quantities; receive_rails_measured_kg_per_native_unit; receive_rails_bridge_evidence; receive_rails_stock_item_ids; receive_rails_stock_sublocations; receive_rails_stock_custodians; receive_rails_stock_count_times; receive_rails_receipt_event_ids; cp_survey_receive | actual_receive_rails |  |
| calc_issue_rails | `issue_materials_rail_brace` | actual_issue_rails = SUM_ONCE(issue_rails_mass_kg, issue_rails_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 原构件测量台账 issue_rails 保留在条件清单发料 issue_materials_rail_brace 下；其实际 SKU/状态量匹配独立接收材料投入，各真实交换独立核实，不创建聚合混合产品身份或重复采购。 | issue_rails_transfer_event_ids; issue_rails_mass_kg; issue_rails_material_ids; issue_rails_state_ids; issue_rails_source_row_ids; issue_rails_source_node; issue_rails_recipient_node; issue_rails_custodian_from; issue_rails_custodian_to; issue_rails_handoff_document_ids; issue_rails_native_units; issue_rails_native_quantities; issue_rails_measured_kg_per_native_unit; issue_rails_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_rails |  |
| calc_receive_rail_fittings | receive_rail_fittings | actual_receive_rail_fittings = receive_rail_fittings_opening_kg + receive_rail_fittings_external_receipts_kg - receive_rail_fittings_closing_unissued_intact_kg。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。三个池均为同 SKU/当前状态桥接后的真实 kg；期末为所有地点本批未发完好库存各一次，不含已发 U/X、安装保留或处理 WIP。总领用包含实际未用退出，不二次净扣。 | receive_rail_fittings_opening_kg; receive_rail_fittings_external_receipts_kg; receive_rail_fittings_closing_unissued_intact_kg; receive_rail_fittings_material_ids; receive_rail_fittings_state_ids; receive_rail_fittings_native_units; receive_rail_fittings_native_quantities; receive_rail_fittings_measured_kg_per_native_unit; receive_rail_fittings_bridge_evidence; receive_rail_fittings_stock_item_ids; receive_rail_fittings_stock_sublocations; receive_rail_fittings_stock_custodians; receive_rail_fittings_stock_count_times; receive_rail_fittings_receipt_event_ids; cp_survey_receive | actual_receive_rail_fittings |  |
| calc_issue_rail_fittings | `issue_materials_rail_brace` | actual_issue_rail_fittings = SUM_ONCE(issue_rail_fittings_mass_kg, issue_rail_fittings_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 原构件测量台账 issue_rail_fittings 保留在条件清单发料 issue_materials_rail_brace 下；其实际 SKU/状态量匹配独立接收材料投入，各真实交换独立核实，不创建聚合混合产品身份或重复采购。 | issue_rail_fittings_transfer_event_ids; issue_rail_fittings_mass_kg; issue_rail_fittings_material_ids; issue_rail_fittings_state_ids; issue_rail_fittings_source_row_ids; issue_rail_fittings_source_node; issue_rail_fittings_recipient_node; issue_rail_fittings_custodian_from; issue_rail_fittings_custodian_to; issue_rail_fittings_handoff_document_ids; issue_rail_fittings_native_units; issue_rail_fittings_native_quantities; issue_rail_fittings_measured_kg_per_native_unit; issue_rail_fittings_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_rail_fittings |  |
| calc_receive_tension_wire | receive_tension_wire | actual_receive_tension_wire = receive_tension_wire_opening_kg + receive_tension_wire_external_receipts_kg - receive_tension_wire_closing_unissued_intact_kg。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。三个池均为同 SKU/当前状态桥接后的真实 kg；期末为所有地点本批未发完好库存各一次，不含已发 U/X、安装保留或处理 WIP。总领用包含实际未用退出，不二次净扣。 | receive_tension_wire_opening_kg; receive_tension_wire_external_receipts_kg; receive_tension_wire_closing_unissued_intact_kg; receive_tension_wire_material_ids; receive_tension_wire_state_ids; receive_tension_wire_native_units; receive_tension_wire_native_quantities; receive_tension_wire_measured_kg_per_native_unit; receive_tension_wire_bridge_evidence; receive_tension_wire_stock_item_ids; receive_tension_wire_stock_sublocations; receive_tension_wire_stock_custodians; receive_tension_wire_stock_count_times; receive_tension_wire_receipt_event_ids; cp_survey_receive | actual_receive_tension_wire |  |
| calc_issue_tension_wire | `issue_materials_rail_brace` | actual_issue_tension_wire = SUM_ONCE(issue_tension_wire_mass_kg, issue_tension_wire_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 原构件测量台账 issue_tension_wire 保留在条件清单发料 issue_materials_rail_brace 下；其实际 SKU/状态量匹配独立接收材料投入，各真实交换独立核实，不创建聚合混合产品身份或重复采购。 | issue_tension_wire_transfer_event_ids; issue_tension_wire_mass_kg; issue_tension_wire_material_ids; issue_tension_wire_state_ids; issue_tension_wire_source_row_ids; issue_tension_wire_source_node; issue_tension_wire_recipient_node; issue_tension_wire_custodian_from; issue_tension_wire_custodian_to; issue_tension_wire_handoff_document_ids; issue_tension_wire_native_units; issue_tension_wire_native_quantities; issue_tension_wire_measured_kg_per_native_unit; issue_tension_wire_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_tension_wire |  |
| calc_receive_chainlink_fabric | receive_chainlink_fabric | actual_receive_chainlink_fabric = receive_chainlink_fabric_opening_kg + receive_chainlink_fabric_external_receipts_kg - receive_chainlink_fabric_closing_unissued_intact_kg。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。三个池均为同 SKU/当前状态桥接后的真实 kg；期末为所有地点本批未发完好库存各一次，不含已发 U/X、安装保留或处理 WIP。总领用包含实际未用退出，不二次净扣。 | receive_chainlink_fabric_opening_kg; receive_chainlink_fabric_external_receipts_kg; receive_chainlink_fabric_closing_unissued_intact_kg; receive_chainlink_fabric_material_ids; receive_chainlink_fabric_state_ids; receive_chainlink_fabric_native_units; receive_chainlink_fabric_native_quantities; receive_chainlink_fabric_measured_kg_per_native_unit; receive_chainlink_fabric_bridge_evidence; receive_chainlink_fabric_stock_item_ids; receive_chainlink_fabric_stock_sublocations; receive_chainlink_fabric_stock_custodians; receive_chainlink_fabric_stock_count_times; receive_chainlink_fabric_receipt_event_ids; cp_survey_receive | actual_receive_chainlink_fabric |  |
| calc_issue_chainlink_fabric | `issue_materials_fabric_tension` | actual_issue_chainlink_fabric = SUM_ONCE(issue_chainlink_fabric_mass_kg, issue_chainlink_fabric_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 原构件测量台账 issue_chainlink_fabric 保留在条件清单发料 issue_materials_fabric_tension 下；其实际 SKU/状态量匹配独立接收材料投入，各真实交换独立核实，不创建聚合混合产品身份或重复采购。 | issue_chainlink_fabric_transfer_event_ids; issue_chainlink_fabric_mass_kg; issue_chainlink_fabric_material_ids; issue_chainlink_fabric_state_ids; issue_chainlink_fabric_source_row_ids; issue_chainlink_fabric_source_node; issue_chainlink_fabric_recipient_node; issue_chainlink_fabric_custodian_from; issue_chainlink_fabric_custodian_to; issue_chainlink_fabric_handoff_document_ids; issue_chainlink_fabric_native_units; issue_chainlink_fabric_native_quantities; issue_chainlink_fabric_measured_kg_per_native_unit; issue_chainlink_fabric_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_chainlink_fabric |  |
| calc_receive_fabric_fittings | receive_fabric_fittings | actual_receive_fabric_fittings = receive_fabric_fittings_opening_kg + receive_fabric_fittings_external_receipts_kg - receive_fabric_fittings_closing_unissued_intact_kg。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。三个池均为同 SKU/当前状态桥接后的真实 kg；期末为所有地点本批未发完好库存各一次，不含已发 U/X、安装保留或处理 WIP。总领用包含实际未用退出，不二次净扣。 | receive_fabric_fittings_opening_kg; receive_fabric_fittings_external_receipts_kg; receive_fabric_fittings_closing_unissued_intact_kg; receive_fabric_fittings_material_ids; receive_fabric_fittings_state_ids; receive_fabric_fittings_native_units; receive_fabric_fittings_native_quantities; receive_fabric_fittings_measured_kg_per_native_unit; receive_fabric_fittings_bridge_evidence; receive_fabric_fittings_stock_item_ids; receive_fabric_fittings_stock_sublocations; receive_fabric_fittings_stock_custodians; receive_fabric_fittings_stock_count_times; receive_fabric_fittings_receipt_event_ids; cp_survey_receive | actual_receive_fabric_fittings |  |
| calc_issue_fabric_fittings | `issue_materials_fabric_tension` | actual_issue_fabric_fittings = SUM_ONCE(issue_fabric_fittings_mass_kg, issue_fabric_fittings_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 原构件测量台账 issue_fabric_fittings 保留在条件清单发料 issue_materials_fabric_tension 下；其实际 SKU/状态量匹配独立接收材料投入，各真实交换独立核实，不创建聚合混合产品身份或重复采购。 | issue_fabric_fittings_transfer_event_ids; issue_fabric_fittings_mass_kg; issue_fabric_fittings_material_ids; issue_fabric_fittings_state_ids; issue_fabric_fittings_source_row_ids; issue_fabric_fittings_source_node; issue_fabric_fittings_recipient_node; issue_fabric_fittings_custodian_from; issue_fabric_fittings_custodian_to; issue_fabric_fittings_handoff_document_ids; issue_fabric_fittings_native_units; issue_fabric_fittings_native_quantities; issue_fabric_fittings_measured_kg_per_native_unit; issue_fabric_fittings_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_fabric_fittings |  |
| calc_receive_coating_cleanup | receive_coating_cleanup | actual_receive_coating_cleanup = receive_coating_cleanup_opening_kg + receive_coating_cleanup_external_receipts_kg - receive_coating_cleanup_closing_unissued_intact_kg。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。三个池均为同 SKU/当前状态桥接后的真实 kg；期末为所有地点本批未发完好库存各一次，不含已发 U/X、安装保留或处理 WIP。总领用包含实际未用退出，不二次净扣。 | receive_coating_cleanup_opening_kg; receive_coating_cleanup_external_receipts_kg; receive_coating_cleanup_closing_unissued_intact_kg; receive_coating_cleanup_material_ids; receive_coating_cleanup_state_ids; receive_coating_cleanup_native_units; receive_coating_cleanup_native_quantities; receive_coating_cleanup_measured_kg_per_native_unit; receive_coating_cleanup_bridge_evidence; receive_coating_cleanup_stock_item_ids; receive_coating_cleanup_stock_sublocations; receive_coating_cleanup_stock_custodians; receive_coating_cleanup_stock_count_times; receive_coating_cleanup_receipt_event_ids; cp_survey_receive | actual_receive_coating_cleanup |  |
| calc_issue_coating_cleanup | issue_coating_cleanup | actual_issue_coating_cleanup = SUM_ONCE(issue_coating_cleanup_mass_kg, issue_coating_cleanup_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | issue_coating_cleanup_transfer_event_ids; issue_coating_cleanup_mass_kg; issue_coating_cleanup_material_ids; issue_coating_cleanup_state_ids; issue_coating_cleanup_source_row_ids; issue_coating_cleanup_source_node; issue_coating_cleanup_recipient_node; issue_coating_cleanup_custodian_from; issue_coating_cleanup_custodian_to; issue_coating_cleanup_handoff_document_ids; issue_coating_cleanup_native_units; issue_coating_cleanup_native_quantities; issue_coating_cleanup_measured_kg_per_native_unit; issue_coating_cleanup_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_coating_cleanup |  |
| calc_physical_interface_release | physical_interface_release | actual_physical_interface_release = SUM_UNIQUE_SEGMENTS(physical_interface_release_centerline_m, physical_interface_release_segment_ids)。输出为 m 物理分子，此观测输出仅用于自身协议与验收门槛，不适用库存Amount或交换；保留实测物理几何，不增加产品负荷。记录真实接收/移交几何及合格/当前状态，源接收事件配对一致并明确部分批次和 WIP，设计文件及固定 1 m 不能替代真实几何。 定义 SUM_UNIQUE_SEGMENTS：按稳定区段 ID 对互不重叠的实测中心线求和，拐角只计一次并先排除实际门洞/开口，返工返访不产生新验收段。只计满足本卡当前状态门槛的区段，最终参考段必须净且已验收。 此为既有资产观察/就绪测量，保留自身 ID、实测 Length/m/状态和接口门槛，不是清单产品交换、制造材料或设计文件产品。 | physical_interface_release_transfer_event_ids; physical_interface_release_segment_ids; physical_interface_release_centerline_m; physical_interface_release_state_ids; physical_interface_release_source_node; physical_interface_release_recipient_node; physical_interface_release_handoff_document_ids; physical_interface_release_condition_evidence; physical_interface_release_corner_and_opening_resolution; cp_survey_receive; SUM_UNIQUE_SEGMENTS | actual_physical_interface_release |  |
| calc_physical_interface_construction_feed | physical_interface_construction_feed | actual_physical_interface_construction_feed = SUM_UNIQUE_SEGMENTS(physical_interface_construction_feed_centerline_m, physical_interface_construction_feed_segment_ids)。输出为 m 物理分子，此观测输出仅用于自身协议与验收门槛，不适用库存Amount或交换；保留实测物理几何，不增加产品负荷。记录真实接收/移交几何及合格/当前状态，源接收事件配对一致并明确部分批次和 WIP，设计文件及固定 1 m 不能替代真实几何。 定义 SUM_UNIQUE_SEGMENTS：按稳定区段 ID 对互不重叠的实测中心线求和，拐角只计一次并先排除实际门洞/开口，返工返访不产生新验收段。只计满足本卡当前状态门槛的区段，最终参考段必须净且已验收。 此为既有资产观察/就绪测量，保留自身 ID、实测 Length/m/状态和接口门槛，不是清单产品交换、制造材料或设计文件产品。 | physical_interface_construction_feed_transfer_event_ids; physical_interface_construction_feed_segment_ids; physical_interface_construction_feed_centerline_m; physical_interface_construction_feed_state_ids; physical_interface_construction_feed_source_node; physical_interface_construction_feed_recipient_node; physical_interface_construction_feed_handoff_document_ids; physical_interface_construction_feed_condition_evidence; physical_interface_construction_feed_corner_and_opening_resolution; cp_rail_brace; SUM_UNIQUE_SEGMENTS | actual_physical_interface_construction_feed |  |
| calc_issue_packaging_rail_brace | issue_packaging_rail_brace | actual_issue_packaging_rail_brace = SUM_ONCE(issue_packaging_rail_brace_mass_kg, issue_packaging_rail_brace_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | issue_packaging_rail_brace_transfer_event_ids; issue_packaging_rail_brace_mass_kg; issue_packaging_rail_brace_material_ids; issue_packaging_rail_brace_state_ids; issue_packaging_rail_brace_source_row_ids; issue_packaging_rail_brace_source_node; issue_packaging_rail_brace_recipient_node; issue_packaging_rail_brace_custodian_from; issue_packaging_rail_brace_custodian_to; issue_packaging_rail_brace_handoff_document_ids; issue_packaging_rail_brace_native_units; issue_packaging_rail_brace_native_quantities; issue_packaging_rail_brace_measured_kg_per_native_unit; issue_packaging_rail_brace_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_packaging_rail_brace |  |
| calc_rail_brace_packaging_feed | rail_brace_packaging_feed | actual_rail_brace_packaging_feed = SUM_ONCE(rail_brace_packaging_feed_mass_kg, rail_brace_packaging_feed_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | rail_brace_packaging_feed_transfer_event_ids; rail_brace_packaging_feed_mass_kg; rail_brace_packaging_feed_material_ids; rail_brace_packaging_feed_state_ids; rail_brace_packaging_feed_source_row_ids; rail_brace_packaging_feed_source_node; rail_brace_packaging_feed_recipient_node; rail_brace_packaging_feed_custodian_from; rail_brace_packaging_feed_custodian_to; rail_brace_packaging_feed_handoff_document_ids; rail_brace_packaging_feed_native_units; rail_brace_packaging_feed_native_quantities; rail_brace_packaging_feed_measured_kg_per_native_unit; rail_brace_packaging_feed_bridge_evidence; cp_rail_brace; SUM_ONCE | actual_rail_brace_packaging_feed |  |
| calc_issue_packaging_fabric_tension | issue_packaging_fabric_tension | actual_issue_packaging_fabric_tension = SUM_ONCE(issue_packaging_fabric_tension_mass_kg, issue_packaging_fabric_tension_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | issue_packaging_fabric_tension_transfer_event_ids; issue_packaging_fabric_tension_mass_kg; issue_packaging_fabric_tension_material_ids; issue_packaging_fabric_tension_state_ids; issue_packaging_fabric_tension_source_row_ids; issue_packaging_fabric_tension_source_node; issue_packaging_fabric_tension_recipient_node; issue_packaging_fabric_tension_custodian_from; issue_packaging_fabric_tension_custodian_to; issue_packaging_fabric_tension_handoff_document_ids; issue_packaging_fabric_tension_native_units; issue_packaging_fabric_tension_native_quantities; issue_packaging_fabric_tension_measured_kg_per_native_unit; issue_packaging_fabric_tension_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_packaging_fabric_tension |  |
| calc_fabric_tension_packaging_feed | fabric_tension_packaging_feed | actual_fabric_tension_packaging_feed = SUM_ONCE(fabric_tension_packaging_feed_mass_kg, fabric_tension_packaging_feed_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | fabric_tension_packaging_feed_transfer_event_ids; fabric_tension_packaging_feed_mass_kg; fabric_tension_packaging_feed_material_ids; fabric_tension_packaging_feed_state_ids; fabric_tension_packaging_feed_source_row_ids; fabric_tension_packaging_feed_source_node; fabric_tension_packaging_feed_recipient_node; fabric_tension_packaging_feed_custodian_from; fabric_tension_packaging_feed_custodian_to; fabric_tension_packaging_feed_handoff_document_ids; fabric_tension_packaging_feed_native_units; fabric_tension_packaging_feed_native_quantities; fabric_tension_packaging_feed_measured_kg_per_native_unit; fabric_tension_packaging_feed_bridge_evidence; cp_fabric_tension; SUM_ONCE | actual_fabric_tension_packaging_feed |  |
| calc_issue_packaging_finish_accept | issue_packaging_finish_accept | actual_issue_packaging_finish_accept = SUM_ONCE(issue_packaging_finish_accept_mass_kg, issue_packaging_finish_accept_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | issue_packaging_finish_accept_transfer_event_ids; issue_packaging_finish_accept_mass_kg; issue_packaging_finish_accept_material_ids; issue_packaging_finish_accept_state_ids; issue_packaging_finish_accept_source_row_ids; issue_packaging_finish_accept_source_node; issue_packaging_finish_accept_recipient_node; issue_packaging_finish_accept_custodian_from; issue_packaging_finish_accept_custodian_to; issue_packaging_finish_accept_handoff_document_ids; issue_packaging_finish_accept_native_units; issue_packaging_finish_accept_native_quantities; issue_packaging_finish_accept_measured_kg_per_native_unit; issue_packaging_finish_accept_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_packaging_finish_accept |  |
| calc_finish_accept_packaging_feed | finish_accept_packaging_feed | actual_finish_accept_packaging_feed = SUM_ONCE(finish_accept_packaging_feed_mass_kg, finish_accept_packaging_feed_transfer_event_ids)。输出为 kg 物理分子，本计算完成后只执行卡片 Amount 一次，原始量和输出不重复归一化。使用同材料/当前状态实际转移量，不用最终几何或收料剩余反推量。相邻源与供料的事件、状态、保管人、量一致；内部交换只携带原负荷一次，不重复外部生产负荷。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 | finish_accept_packaging_feed_transfer_event_ids; finish_accept_packaging_feed_mass_kg; finish_accept_packaging_feed_material_ids; finish_accept_packaging_feed_state_ids; finish_accept_packaging_feed_source_row_ids; finish_accept_packaging_feed_source_node; finish_accept_packaging_feed_recipient_node; finish_accept_packaging_feed_custodian_from; finish_accept_packaging_feed_custodian_to; finish_accept_packaging_feed_handoff_document_ids; finish_accept_packaging_feed_native_units; finish_accept_packaging_feed_native_quantities; finish_accept_packaging_feed_measured_kg_per_native_unit; finish_accept_packaging_feed_bridge_evidence; cp_finish_accept; SUM_ONCE | actual_finish_accept_packaging_feed |  |
| calc_survey_receive_material_mass_closure | survey_receive_material_mass_closure | survey_receive_mass_closure_opening_processed_wip_mass_kg = SUM_ONCE(survey_receive_mass_closure_opening_processed_wip_kg, survey_receive_mass_closure_opening_processed_wip_event_ids); survey_receive_mass_closure_closing_processed_wip_mass_kg = SUM_ONCE(survey_receive_mass_closure_closing_processed_wip_kg, survey_receive_mass_closure_closing_processed_wip_event_ids); survey_receive_mass_closure_processed_transfer_in_mass_kg = LINKED_TRANSFER_MASS(survey_receive_mass_closure_processed_transfer_in_kg, survey_receive_mass_closure_processed_transfer_event_crosswalk, survey_receive_mass_closure_group_keys); survey_receive_mass_closure_processed_transfer_out_mass_kg = LINKED_TRANSFER_MASS(survey_receive_mass_closure_processed_transfer_out_kg, survey_receive_mass_closure_processed_transfer_event_crosswalk, survey_receive_mass_closure_group_keys); survey_receive_mass_closure_gap_kg = LEDGER_VALUE(actual_receive_packaging, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + LEDGER_VALUE(actual_receive_rails, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + LEDGER_VALUE(actual_receive_rail_fittings, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + LEDGER_VALUE(actual_receive_tension_wire, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + LEDGER_VALUE(actual_receive_chainlink_fabric, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + LEDGER_VALUE(actual_receive_fabric_fittings, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + LEDGER_VALUE(actual_receive_coating_cleanup, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + survey_receive_mass_closure_opening_processed_wip_mass_kg + survey_receive_mass_closure_processed_transfer_in_mass_kg - LEDGER_VALUE(actual_receive_reject, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_receive_packaging_waste, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_receive_unused_return, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_rails, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_rail_fittings, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_tension_wire, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_chainlink_fabric, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_fabric_fittings, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_coating_cleanup, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_packaging_rail_brace, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_packaging_fabric_tension, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_packaging_finish_accept, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - survey_receive_mass_closure_closing_processed_wip_mass_kg - survey_receive_mass_closure_processed_transfer_out_mass_kg。按准确材料/源状态/实际状态谱系及报告期间分别执行 kg 闭合；各组对照自身实测容差，不用异组误差抵消。每个 LEDGER_VALUE 操作数为本规则列出的自有节点流卡输出，份额指向其原数量记录并核对该输出。WIP 以真实构件/区段 ID、上期末关联、真实保管及互斥状态测量；期初处理 WIP 不同时作为新供料或总库存期初。入/出区段质量来自对应 Length 卡的实测诊断，不是米乘通用系数。内部返工/复用/处理转移只凭真实已表示源/供料配对和互斥事件抵消；正转移缺方向或状态配对时保留阻止完成的流卡审查缺口，不虚构交换。未来批次未发完好库存已在收料总领用中排除一次，此处不再扣。各台账复合物整体/组分表示互斥，保留质量不增加移交负荷。切割或完工改变状态时保留材料身份及状态转变谱系。本规则仅物理闭合诊断，不是额外归一化输出、净采购计算、负交换或抵扣。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 LEDGER_VALUE：按保留原始事件及流卡交叉表，返回明确自有节点计算输出在同一材料/源状态/实际状态/期间 kg 组中的实测份额。每份额有准确原记录、单位、状态和操作责任，其和核对命名输出，不另造总数，不跨异组抵消，不将几何变质量。 定义 LINKED_TRANSFER_MASS：只有交叉表明确自有节点实际产生卡/输出、接收供料/输出、事件、材料、源和实际状态、期间及单位且配对量一致时，才返回实测处理/复用/返工转移 kg。正转移无已表示语义配对时阻止完成并要求流卡审查，不是差额填补或自动新增交换。 收料闭合保留 issue_materials_rail_brace 下 actual_issue_rails/actual_issue_rail_fittings/actual_issue_tension_wire 各构件输出，以及 issue_materials_fabric_tension 下 actual_issue_chainlink_fabric/actual_issue_fabric_fittings。事件交叉表同时记录存续的条件清单卡 ID 与原构件测量台账 ID，各独立构件量只计一次，不再次加入条件卡 QA 总量。 | survey_receive_mass_closure_group_keys; survey_receive_mass_closure_card_event_crosswalk; survey_receive_mass_closure_material_source_state_actual_state_period_kg_evidence; survey_receive_mass_closure_opening_processed_wip_kg; survey_receive_mass_closure_opening_processed_wip_event_ids; survey_receive_mass_closure_opening_previous_closing_event_ids; survey_receive_mass_closure_closing_processed_wip_kg; survey_receive_mass_closure_closing_processed_wip_event_ids; survey_receive_mass_closure_wip_panel_or_component_ids; survey_receive_mass_closure_wip_exclusivity_evidence; survey_receive_mass_closure_processed_transfer_in_kg; survey_receive_mass_closure_processed_transfer_out_kg; survey_receive_mass_closure_processed_transfer_event_crosswalk; survey_receive_mass_closure_measured_tolerance_kg; actual_receive_packaging; actual_receive_rails; actual_receive_rail_fittings; actual_receive_tension_wire; actual_receive_chainlink_fabric; actual_receive_fabric_fittings; actual_receive_coating_cleanup; actual_receive_reject; actual_receive_packaging_waste; actual_receive_unused_return; actual_issue_rails; actual_issue_rail_fittings; actual_issue_tension_wire; actual_issue_chainlink_fabric; actual_issue_fabric_fittings; actual_issue_coating_cleanup; actual_issue_packaging_rail_brace; actual_issue_packaging_fabric_tension; actual_issue_packaging_finish_accept; cp_survey_receive; SUM_ONCE; LEDGER_VALUE; LINKED_TRANSFER_MASS | survey_receive_mass_closure_gap_kg; survey_receive_mass_closure_opening_processed_wip_mass_kg; survey_receive_mass_closure_closing_processed_wip_mass_kg; survey_receive_mass_closure_processed_transfer_in_mass_kg; survey_receive_mass_closure_processed_transfer_out_mass_kg |  |
| calc_rail_brace_material_mass_closure | rail_brace_material_mass_closure | rail_brace_mass_closure_opening_processed_wip_mass_kg = SUM_ONCE(rail_brace_mass_closure_opening_processed_wip_kg, rail_brace_mass_closure_opening_processed_wip_event_ids); rail_brace_mass_closure_closing_processed_wip_mass_kg = SUM_ONCE(rail_brace_mass_closure_closing_processed_wip_kg, rail_brace_mass_closure_closing_processed_wip_event_ids); rail_brace_mass_closure_processed_transfer_in_mass_kg = LINKED_TRANSFER_MASS(rail_brace_mass_closure_processed_transfer_in_kg, rail_brace_mass_closure_processed_transfer_event_crosswalk, rail_brace_mass_closure_group_keys); rail_brace_mass_closure_processed_transfer_out_mass_kg = LINKED_TRANSFER_MASS(rail_brace_mass_closure_processed_transfer_out_kg, rail_brace_mass_closure_processed_transfer_event_crosswalk, rail_brace_mass_closure_group_keys); rail_brace_mass_closure_gap_kg = LEDGER_VALUE(actual_rails, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) + LEDGER_VALUE(actual_rail_fittings, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) + LEDGER_VALUE(actual_tension_wire, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) + LEDGER_VALUE(actual_rail_brace_packaging_feed, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) + rail_brace_mass_closure_opening_processed_wip_mass_kg + rail_brace_mass_closure_processed_transfer_in_mass_kg - LEDGER_VALUE(rail_ready_panels_retained_material_mass_kg, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) - LEDGER_VALUE(actual_rail_waste, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) - LEDGER_VALUE(actual_rail_direct_release, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) - LEDGER_VALUE(actual_rail_unused_return, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) - rail_brace_mass_closure_closing_processed_wip_mass_kg - rail_brace_mass_closure_processed_transfer_out_mass_kg。按准确材料/源状态/实际状态谱系及报告期间分别执行 kg 闭合；各组对照自身实测容差，不用异组误差抵消。每个 LEDGER_VALUE 操作数为本规则列出的自有节点流卡输出，份额指向其原数量记录并核对该输出。WIP 以真实构件/区段 ID、上期末关联、真实保管及互斥状态测量；期初处理 WIP 不同时作为新供料或总库存期初。入/出区段质量来自对应 Length 卡的实测诊断，不是米乘通用系数。内部返工/复用/处理转移只凭真实已表示源/供料配对和互斥事件抵消；正转移缺方向或状态配对时保留阻止完成的流卡审查缺口，不虚构交换。未来批次未发完好库存已在收料总领用中排除一次，此处不再扣。各台账复合物整体/组分表示互斥，保留质量不增加移交负荷。切割或完工改变状态时保留材料身份及状态转变谱系。本规则仅物理闭合诊断，不是额外归一化输出、净采购计算、负交换或抵扣。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 LEDGER_VALUE：按保留原始事件及流卡交叉表，返回明确自有节点计算输出在同一材料/源状态/实际状态/期间 kg 组中的实测份额。每份额有准确原记录、单位、状态和操作责任，其和核对命名输出，不另造总数，不跨异组抵消，不将几何变质量。 定义 LINKED_TRANSFER_MASS：只有交叉表明确自有节点实际产生卡/输出、接收供料/输出、事件、材料、源和实际状态、期间及单位且配对量一致时，才返回实测处理/复用/返工转移 kg。正转移无已表示语义配对时阻止完成并要求流卡审查，不是差额填补或自动新增交换。 | rail_brace_mass_closure_group_keys; rail_brace_mass_closure_card_event_crosswalk; rail_brace_mass_closure_material_source_state_actual_state_period_kg_evidence; rail_brace_mass_closure_opening_processed_wip_kg; rail_brace_mass_closure_opening_processed_wip_event_ids; rail_brace_mass_closure_opening_previous_closing_event_ids; rail_brace_mass_closure_closing_processed_wip_kg; rail_brace_mass_closure_closing_processed_wip_event_ids; rail_brace_mass_closure_wip_panel_or_component_ids; rail_brace_mass_closure_wip_exclusivity_evidence; rail_brace_mass_closure_processed_transfer_in_kg; rail_brace_mass_closure_processed_transfer_out_kg; rail_brace_mass_closure_processed_transfer_event_crosswalk; rail_brace_mass_closure_measured_tolerance_kg; actual_rails; actual_rail_fittings; actual_tension_wire; actual_rail_brace_packaging_feed; rail_ready_panels_retained_material_mass_kg; actual_rail_waste; actual_rail_direct_release; actual_rail_unused_return; cp_rail_brace; SUM_ONCE; LEDGER_VALUE; LINKED_TRANSFER_MASS | rail_brace_mass_closure_gap_kg; rail_brace_mass_closure_opening_processed_wip_mass_kg; rail_brace_mass_closure_closing_processed_wip_mass_kg; rail_brace_mass_closure_processed_transfer_in_mass_kg; rail_brace_mass_closure_processed_transfer_out_mass_kg |  |
| calc_fabric_tension_material_mass_closure | fabric_tension_material_mass_closure | fabric_tension_mass_closure_opening_processed_wip_mass_kg = SUM_ONCE(fabric_tension_mass_closure_opening_processed_wip_kg, fabric_tension_mass_closure_opening_processed_wip_event_ids); fabric_tension_mass_closure_closing_processed_wip_mass_kg = SUM_ONCE(fabric_tension_mass_closure_closing_processed_wip_kg, fabric_tension_mass_closure_closing_processed_wip_event_ids); fabric_tension_mass_closure_processed_transfer_in_mass_kg = LINKED_TRANSFER_MASS(fabric_tension_mass_closure_processed_transfer_in_kg, fabric_tension_mass_closure_processed_transfer_event_crosswalk, fabric_tension_mass_closure_group_keys); fabric_tension_mass_closure_processed_transfer_out_mass_kg = LINKED_TRANSFER_MASS(fabric_tension_mass_closure_processed_transfer_out_kg, fabric_tension_mass_closure_processed_transfer_event_crosswalk, fabric_tension_mass_closure_group_keys); fabric_tension_mass_closure_gap_kg = LEDGER_VALUE(rail_panel_feed_retained_material_mass_kg, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) + LEDGER_VALUE(actual_chainlink_fabric, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) + LEDGER_VALUE(actual_fabric_fittings, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) + LEDGER_VALUE(actual_fabric_tension_packaging_feed, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) + fabric_tension_mass_closure_opening_processed_wip_mass_kg + fabric_tension_mass_closure_processed_transfer_in_mass_kg - LEDGER_VALUE(tensioned_fence_retained_material_mass_kg, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) - LEDGER_VALUE(actual_fabric_waste, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) - LEDGER_VALUE(actual_fabric_direct_release, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) - LEDGER_VALUE(actual_fabric_unused_return, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) - fabric_tension_mass_closure_closing_processed_wip_mass_kg - fabric_tension_mass_closure_processed_transfer_out_mass_kg。按准确材料/源状态/实际状态谱系及报告期间分别执行 kg 闭合；各组对照自身实测容差，不用异组误差抵消。每个 LEDGER_VALUE 操作数为本规则列出的自有节点流卡输出，份额指向其原数量记录并核对该输出。WIP 以真实构件/区段 ID、上期末关联、真实保管及互斥状态测量；期初处理 WIP 不同时作为新供料或总库存期初。入/出区段质量来自对应 Length 卡的实测诊断，不是米乘通用系数。内部返工/复用/处理转移只凭真实已表示源/供料配对和互斥事件抵消；正转移缺方向或状态配对时保留阻止完成的流卡审查缺口，不虚构交换。未来批次未发完好库存已在收料总领用中排除一次，此处不再扣。各台账复合物整体/组分表示互斥，保留质量不增加移交负荷。切割或完工改变状态时保留材料身份及状态转变谱系。本规则仅物理闭合诊断，不是额外归一化输出、净采购计算、负交换或抵扣。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 LEDGER_VALUE：按保留原始事件及流卡交叉表，返回明确自有节点计算输出在同一材料/源状态/实际状态/期间 kg 组中的实测份额。每份额有准确原记录、单位、状态和操作责任，其和核对命名输出，不另造总数，不跨异组抵消，不将几何变质量。 定义 LINKED_TRANSFER_MASS：只有交叉表明确自有节点实际产生卡/输出、接收供料/输出、事件、材料、源和实际状态、期间及单位且配对量一致时，才返回实测处理/复用/返工转移 kg。正转移无已表示语义配对时阻止完成并要求流卡审查，不是差额填补或自动新增交换。 | fabric_tension_mass_closure_group_keys; fabric_tension_mass_closure_card_event_crosswalk; fabric_tension_mass_closure_material_source_state_actual_state_period_kg_evidence; fabric_tension_mass_closure_opening_processed_wip_kg; fabric_tension_mass_closure_opening_processed_wip_event_ids; fabric_tension_mass_closure_opening_previous_closing_event_ids; fabric_tension_mass_closure_closing_processed_wip_kg; fabric_tension_mass_closure_closing_processed_wip_event_ids; fabric_tension_mass_closure_wip_panel_or_component_ids; fabric_tension_mass_closure_wip_exclusivity_evidence; fabric_tension_mass_closure_processed_transfer_in_kg; fabric_tension_mass_closure_processed_transfer_out_kg; fabric_tension_mass_closure_processed_transfer_event_crosswalk; fabric_tension_mass_closure_measured_tolerance_kg; rail_panel_feed_retained_material_mass_kg; actual_chainlink_fabric; actual_fabric_fittings; actual_fabric_tension_packaging_feed; tensioned_fence_retained_material_mass_kg; actual_fabric_waste; actual_fabric_direct_release; actual_fabric_unused_return; cp_fabric_tension; SUM_ONCE; LEDGER_VALUE; LINKED_TRANSFER_MASS | fabric_tension_mass_closure_gap_kg; fabric_tension_mass_closure_opening_processed_wip_mass_kg; fabric_tension_mass_closure_closing_processed_wip_mass_kg; fabric_tension_mass_closure_processed_transfer_in_mass_kg; fabric_tension_mass_closure_processed_transfer_out_mass_kg |  |
| calc_finish_accept_material_mass_closure | finish_accept_material_mass_closure | finish_accept_mass_closure_opening_processed_wip_mass_kg = SUM_ONCE(finish_accept_mass_closure_opening_processed_wip_kg, finish_accept_mass_closure_opening_processed_wip_event_ids); finish_accept_mass_closure_closing_processed_wip_mass_kg = SUM_ONCE(finish_accept_mass_closure_closing_processed_wip_kg, finish_accept_mass_closure_closing_processed_wip_event_ids); finish_accept_mass_closure_processed_transfer_in_mass_kg = LINKED_TRANSFER_MASS(finish_accept_mass_closure_processed_transfer_in_kg, finish_accept_mass_closure_processed_transfer_event_crosswalk, finish_accept_mass_closure_group_keys); finish_accept_mass_closure_processed_transfer_out_mass_kg = LINKED_TRANSFER_MASS(finish_accept_mass_closure_processed_transfer_out_kg, finish_accept_mass_closure_processed_transfer_event_crosswalk, finish_accept_mass_closure_group_keys); finish_accept_mass_closure_gap_kg = LEDGER_VALUE(finish_panel_feed_retained_material_mass_kg, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) + LEDGER_VALUE(actual_coating_cleanup, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) + LEDGER_VALUE(actual_finish_water, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) + LEDGER_VALUE(actual_finish_accept_packaging_feed, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) + finish_accept_mass_closure_opening_processed_wip_mass_kg + finish_accept_mass_closure_processed_transfer_in_mass_kg - LEDGER_VALUE(accepted_fence_service_retained_material_mass_kg, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) - LEDGER_VALUE(actual_finish_waste, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) - LEDGER_VALUE(actual_finish_wastewater, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) - LEDGER_VALUE(actual_finish_water_vapour, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) - LEDGER_VALUE(actual_finish_other_release, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) - LEDGER_VALUE(actual_finish_unused_return, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) - finish_accept_mass_closure_closing_processed_wip_mass_kg - finish_accept_mass_closure_processed_transfer_out_mass_kg。按准确材料/源状态/实际状态谱系及报告期间分别执行 kg 闭合；各组对照自身实测容差，不用异组误差抵消。每个 LEDGER_VALUE 操作数为本规则列出的自有节点流卡输出，份额指向其原数量记录并核对该输出。WIP 以真实构件/区段 ID、上期末关联、真实保管及互斥状态测量；期初处理 WIP 不同时作为新供料或总库存期初。入/出区段质量来自对应 Length 卡的实测诊断，不是米乘通用系数。内部返工/复用/处理转移只凭真实已表示源/供料配对和互斥事件抵消；正转移缺方向或状态配对时保留阻止完成的流卡审查缺口，不虚构交换。未来批次未发完好库存已在收料总领用中排除一次，此处不再扣。各台账复合物整体/组分表示互斥，保留质量不增加移交负荷。切割或完工改变状态时保留材料身份及状态转变谱系。本规则仅物理闭合诊断，不是额外归一化输出、净采购计算、负交换或抵扣。 定义 SUM_ONCE：按唯一实物事件 ID 求和；纠正的重复电子读数替换原记录，真实不同返工遍次保留为不同事件，不因同一构件重现而去重。 定义 LEDGER_VALUE：按保留原始事件及流卡交叉表，返回明确自有节点计算输出在同一材料/源状态/实际状态/期间 kg 组中的实测份额。每份额有准确原记录、单位、状态和操作责任，其和核对命名输出，不另造总数，不跨异组抵消，不将几何变质量。 定义 LINKED_TRANSFER_MASS：只有交叉表明确自有节点实际产生卡/输出、接收供料/输出、事件、材料、源和实际状态、期间及单位且配对量一致时，才返回实测处理/复用/返工转移 kg。正转移无已表示语义配对时阻止完成并要求流卡审查，不是差额填补或自动新增交换。 | finish_accept_mass_closure_group_keys; finish_accept_mass_closure_card_event_crosswalk; finish_accept_mass_closure_material_source_state_actual_state_period_kg_evidence; finish_accept_mass_closure_opening_processed_wip_kg; finish_accept_mass_closure_opening_processed_wip_event_ids; finish_accept_mass_closure_opening_previous_closing_event_ids; finish_accept_mass_closure_closing_processed_wip_kg; finish_accept_mass_closure_closing_processed_wip_event_ids; finish_accept_mass_closure_wip_panel_or_component_ids; finish_accept_mass_closure_wip_exclusivity_evidence; finish_accept_mass_closure_processed_transfer_in_kg; finish_accept_mass_closure_processed_transfer_out_kg; finish_accept_mass_closure_processed_transfer_event_crosswalk; finish_accept_mass_closure_measured_tolerance_kg; finish_panel_feed_retained_material_mass_kg; actual_coating_cleanup; actual_finish_water; actual_finish_accept_packaging_feed; accepted_fence_service_retained_material_mass_kg; actual_finish_waste; actual_finish_wastewater; actual_finish_water_vapour; actual_finish_other_release; actual_finish_unused_return; cp_finish_accept; SUM_ONCE; LEDGER_VALUE; LINKED_TRANSFER_MASS | finish_accept_mass_closure_gap_kg; finish_accept_mass_closure_opening_processed_wip_mass_kg; finish_accept_mass_closure_closing_processed_wip_mass_kg; finish_accept_mass_closure_processed_transfer_in_mass_kg; finish_accept_mass_closure_processed_transfer_out_mass_kg |  |
| calc_issue_materials_rail_brace | issue_materials_rail_brace | actual_issue_materials_rail_brace对每个实际材料/SKU、当前状态和交接事件单独定义为actual_issue_rails、actual_issue_rail_fittings、actual_issue_tension_wire中相匹配且不重叠的实测材料子账数量。按具体流分别形成交换，每条数量只用其自身kg/L；跨材料求和仅作批次台账诊断，不是一个混合产品交换，亦不与组成数量再相加。逐SKU匹配实际接收节点的材料输入、状态、事件及保管权；未知身份保持未解析，不继承固定UUID。 | actual_issue_rails; actual_issue_rail_fittings; actual_issue_tension_wire; cp_survey_receive | actual_issue_materials_rail_brace |  |
| calc_issue_materials_fabric_tension | issue_materials_fabric_tension | actual_issue_materials_fabric_tension对每个实际材料/SKU、当前状态和交接事件单独定义为actual_issue_chainlink_fabric、actual_issue_fabric_fittings中相匹配且不重叠的实测材料子账数量。按具体流分别形成交换，每条数量只用其自身kg/L；跨材料求和仅作批次台账诊断，不是一个混合产品交换，亦不与组成数量再相加。逐SKU匹配实际接收节点的材料输入、状态、事件及保管权；未知身份保持未解析，不继承固定UUID。 | actual_issue_chainlink_fabric; actual_issue_fabric_fittings; cp_survey_receive | actual_issue_materials_fabric_tension |  |

### 材料、包装和水闭合

四个 calc_<node>_material_mass_closure 以自有命名输出和原事件交叉表计算，并分别实测区段保留构件及处理WIP。按准确材料/源状态/实际状态谱系和期间逐组闭合，不跨异组抵消。五个长度移交/验收卡以实测新增构件台账计算保留 kg，不用几何猜质量，不增加移交交换。正处理/复用/返工转移须明确真实已表示产生卡与接收供料，否则方向/状态缺口阻止完成并要求流卡审查。WIP 有真实构件、保管、上期末关联及互斥状态。

每种收料总领用等于真实发料、收料废物、正 U/X及互斥处理WIP/其他实测去向。下游供料核对保留中间体/最终物、真实废物和排放、正可用退出、后续转移和期末处理WIP。未来批次未发完好库存只在真实地点计入收料期末项，不作已发退料。净消耗只诊断，不再次抵扣采购。

包装按真实件和成分同样闭合；收料废物和随料发出互斥。拆包节点处置、可用退料、实际复用和WIP分别有事件，后续复用须真实关联保管转移。材料转移不自动证明包装移动或丢弃，供应数据集包装生产按边界只计一次。

水各池通过 WATER_PORTION 对命名载体输出或实测WIP原事件/材料/状态/期间追溯。新鲜U/X属于 actual_finish_unused_return，固液废物水属于 actual_finish_waste/actual_finish_wastewater，验收保留水属于实测验收构件质量，区段入水属于 finish_panel_feed_retained_material_mass_kg。正处理水转移需真实已表示配对，否则保留阻止完成的缺口。蒸气独立操作证据与闭合差额分开。每种实际配方、每次转移有自身实测水分并核对供料质量，不用混合角色的统一水分。入站区段水是前序去向扣除后的剩余水，期初处理WIP另池。废物水为其实测水分而非混合废物总量；保留、U/X、处理转移、期末WIP和蒸气互斥。新鲜水不再扣完好期末库存；超容差差额修复记录或保留不确定性，不称蒸发。其他节点实际用水须先重审语义卡。

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_identity | 每种材料和实际交换 | 保留供应商SKU/供应者/物质、当前状态、规格和保管证据；宽泛金属网不能证明镀锌编织勾花网牌号状态，变化配件或排放角色须实际展开。 | 材料证书、实际产品记录、配方及现场状态检查。 |
| quality_measurement | 全部kg及m量 | 校准称量和测量，保留原读数、同SKU状态桥接样本、皮重、不确定性、纠正和实际未发生证据；未知不为零。 | 校准证、原始读数、桥接、库存和移交记录。 |
| quality_periods | 全部节点 | 完整覆盖真实操作、收料、闲置、返工和验收期间及期初期末状态，跨截止结转WIP/库存不重复归属。 | 节点期间/阶段ID、保管台账、WIP及验收日期。 |
| quality_attribution | 共享资产、电表及服务 | 保留真实电源、系数、区间、拓扑、完整消费者、必要正权重及签署期间决定；供应商已含负荷与附加前景供应区分。 | 电表谱系、资产/服务合同、发票、区间消费者表和归属决定。 |
| quality_mass_and_water | 全部材料与水去向 | 分材料核对互斥收料、保留、废物、可用退出、转移和WIP，使用纯水实测组分及独立实际H2O排气发生与量。 | 秤、废物单、配方水、池互斥记录和操作专用蒸气证据。 |
| quality_final_gate | 最终区段 | 测真实净验收中心线，保留实际围栏限定信息、逐项完整性、绷紧连接、剪弯端、净空和完工状态，不代入历史模板尺寸。 | 实际设计及既有接口放行、竣工测量、构件清单和验收。 |
| quality_uncertainty | 全部行及发布元数据 | 分别声明观察覆盖、缺失记录、暂定区间、数量/换算不确定性及未解决身份支持缺口，不凭单一结构检查推定就绪。 | 数据集披露和可追溯独立质量审查。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_scope | 全部节点 | 以实际工作核对既有柱/基础签署放行和排除项。新增柱、基础、门、隐私或其他责任必须重审边界，不默记为零。 | clfmi-product-manual-2017; masterhalco-galvanized-components |
| validation_component_completeness | 收料清单和最终验收门槛 | 逐项核对构件角色的既有/新增责任、供应 SKU/材料/涂层及安装验收记录，明确检查铁基与铝配件及绑丝。最终验收须全部自有责任项完成。 | clfmi-product-manual-2017; masterhalco-galvanized-components |
| validation_transfers | 全部配对行 | 各材料、包装和几何配对在归一化前核对事件、材料/区段、状态、单位、量及保管人。每卡只用自身节点协议，内部量不改为 1 m，供料不增加第二次采购。 |  |
| validation_receipt_closure | 收料及下游材料台账 | 按实际材料身份/当前状态，将收料总领用核对到真实发料、收料废物、正 U/X 及互斥处理在制品/其他实测去向。全部未发完好库存仅排除一次，各地有真实保管证据。下游供料核对保留物、废物/排放、可用退出、转移及在制品；不明差额保留缺口。 |  |
| validation_packaging_closure | 全部包装流卡 | 包装总领用核对收料废物、可用退出、节点发料和互斥保留处理状态。每项随料发出/接收配对并核对自有节点废物、复用、可用退出/WIP，供应边界覆盖只计一次，材料净 kg 不含包装。 |  |
| validation_units | 全部数值行 | m、kg、kWh、h 分开。件数/长度/面积只凭同 SKU/当前状态实测桥接及不确定性换算 kg。接口保持长度，复合物整体或组分互斥，最终保留质量不作额外移交输出。 |  |
| validation_water_fates | finish_accept 水 | 水源为真实配方水、已扣完好期末库存一次的新鲜水总领用、入站区段剩余水和期初处理 WIP，彼此不同。核对互斥验收保留、固液废物水、独立观察验证 H2O 排气、finish_other_release中有证据的直接液态H2O份额、未用新鲜水 U/X、处理转移及期末 WIP。差额对照实测不确定性，不作蒸气，不再次扣完好库存。 |  |
| validation_actual_releases | 基本流卡 | 须有真实操作、未捕集量、物质/颗粒基准及介质，按条件角色展开真实交换。不用通用粉尘/VOC UUID、涂料产品排放身份，不重复捕集废物与直接排放。只有finish_water_vapour是已核实的H2O向未特指空气释放角色。finish_other_release中任何实际液态H2O须有自身真实接收介质，在独立核实前保持未解析。 |  |
| validation_finish_activation | finish_accept | 核对实际批准的修补/清洁要求及操作和配方证据。未发生需证据；未知要求或目录偏好不能证明零或强制修补。 | clfmi-product-manual-2017; masterhalco-galvanized-components |
| validation_reject_routing | 缺陷和 WIP 台账 | 每项不合格状态有唯一产生节点及实际纠正、退回/转移、已审降级/回收、废物或 WIP 路径。上游循环有真实转移/遍次 ID，保留工作和损失；未解决拒收和 WIP 不进入最终验收。 |  |
| validation_shared_reconciliation | 电力和服务 | 按全部消费者核对实际总/分表和供应服务区间一次，包括总表外直接量及自有责任闲置返工。零剩余不计算权重除法；正剩余须完整正合格分母及决定证据，供应范围或支持单位身份缺失保留缺口。 |  |
| validation_period_reconciliation | 全部期间和阶段记录 | 核对期间及全批次期初期末保管和 WIP，不重复收料、资产区间或验收事件，完成前披露并解决更换、终止、重启的不确定性。 |  |
| validation_final_length | accepted_fence_service | 按唯一净验收中心线区段计算正 L，拐角一次并排除门洞/开口；声明实际高度、网孔、线规、网边、涂层及完整最终门槛。只有 L/L 为严格计算 1..1，返工不增加唯一最终长度。 | clfmi-product-manual-2017; masterhalco-galvanized-components |
| validation_ranges | 每项流卡 | 每项非参考 Range 均为有自身理由的暂定推理异常筛查，不是配方、排放因子、验收限值、默认零或实测分布。超界真实值须审查并保留有效损失返工，只有独立已审证据可替换，不用同批最大值验证同一批。 |  |
| validation_quantity_and_identity | 每项交换 | 执行文字明确的物理分子计算及匹配 Amount，全部输入已声明且只归一化一次。缺失测量、身份或支持证据要披露；后续真实数据集须以匹配证据确定各交换 UUID，语义卡、区间或结构检查不证明身份、完整验证或发布就绪。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 既有合格立柱及基础上真实镀锌勾花网布和导轨安装批次的前景数据包 |
| downstream_use | secondary_dataset; background_dataset，声明配置、边界和完整性；process 和 lifecyclemodel 为下游投影 |
| allowed_use | 适用于相符真实安装配置及进入/验收门槛，明确地理、时间、供应者适用性和数量/身份不确定性 |
| excluded_use | 完整围栏制造；新柱/基础/土方；门/隐私/刺线系统；未经另审的其他网布；通用设计认证、保修、寿命或排放因子声明 |
| required_metadata | 批次/场地、实际日期期间；上游接口责任人及放行；高度/网孔/线规/网边/GAW或GBW/牌号/涂层；构件责任清单；转移缺陷图；L方法；材料/包装/水去向；供应者及上游边界；方法和换算证据 |
| required_quality_disclosure | 采集和计算覆盖；实际未发生与缺失数据区分；暂定推理Range状态；不确定性；未解决交换/支持身份；供应边界和分配缺口；实际执行/跳过检查及完整性 |
| update_trigger | 实际产品/设计/规格或既有接口变化；新增责任；供应商/配方/服务变化；收料废物路线变化；共享拓扑合同变化；库存/期间/验收纠正；独立新数量证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| clfmi-product-manual-2017 | handbook | Chain Link Fence Manufacturers Institute, Product Manual，2017年3月更新。https://chainlinkinfo.org/wp-content/uploads/2017/05/CLFMI-Product-Manual-revised-March-2017-1.pdf | PDF第3–4页：编织网布/网边角色及变体；20–23页：设计、提交及收料；24–29页：框架/配件/绑丝；32–34页：导轨网布集成、张紧固定、剪端清理。历史模板数值不作通用限值、当前设计或默认。29–31页焊门涂漆不证明非门导轨切口通用修补。 |
| masterhalco-galvanized-components | handbook | Master Halco, Galvanized Chain-Link 官方制造商手册。https://www.masterhalco.com/hubfs/MH%20PDF%20Files/Chainlink-Downloads/Galvanized-Chainlink/Brochures/Galvanized-Brochure-reduced.pdf?hsLang=en | 第2页：GAW/GBW切端状态；第4页：铁基/压铸铝配件和铝/镀锌钢绑丝等不同材料。实际供应SKU记录决定安装材料，目录尺寸和保修不是PCR因子。 |

第8节协议规定真实前景证据。暂定推理Range无来源支持的数值主张。上述来源支持路线和角色，不提供默认材料率、损耗率、排放因子、寿命或安装设计。
