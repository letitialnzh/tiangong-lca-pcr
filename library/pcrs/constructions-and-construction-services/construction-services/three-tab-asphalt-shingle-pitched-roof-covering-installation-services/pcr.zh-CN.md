---
pcr_id: pcr.constructions-and-construction-services.construction-services.three-tab-asphalt-shingle-pitched-roof-covering-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 三片式沥青瓦坡屋面覆盖安装服务

## 1. 范围与适用性

本方法规定在已交付、干燥、兼容且验收合格木基层上机械钉固玻璃纤维增强三片式沥青瓦覆盖的前景数据生产。服务包括实际规定的垫层与渗漏屏障、滴水边、起始瓦、大面瓦、斜脊/屋脊瓦、天沟/墙/烟囱/穿出物泛水、所需兼容手工密封材料及本安装责任的通风配件。只有声明密封、排水、节点和通风条件有记录地验收后才结束。规定且实际发生的配件饰面及清理属于本批次。[gaf-three-tab-route; gaf-fiberglass-physical-state]

起始接口排除构架/基层制造、架设或修理、旧覆盖拆除及保留旧瓦上的覆盖。热沥青、火焰和液态膜屋面属于不同路线。若本承包方修理交付接口，或施工导水坡、烟囱、反泛水、通风件或其他原外部项目，使用数据集前须重新评估范围并纳入真实材料、作业和责任。责任标签不能把实际工作移出清单。

实际安装供应商产品说明和项目设计决定适用坡度、层次、搭接、紧固件、手工密封及细节处理。引用的历史产品说明仅证明路线实例，不是通用安装限值。制造商尺寸、片数、钉数、性能、质保或气候值均不成为默认因子。被动等待密封记录为经过时间，不暗示加热；实际保护、通行及电力负荷持续归属至验收。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.three-tab-asphalt-shingle-pitched-roof-covering-installation-services |
| classification_refs | cpc:3.0:54530 |
| covered_products | 新建机械钉固玻璃纤维增强三片式沥青瓦坡屋面覆盖安装，含规定配件集成及实际饰面至验收。 |
| excluded_products | 结构屋面/基层生产或修理；旧屋面拆除/覆盖；非三片式屋面；热沥青、火焰或液态膜体系；建筑运行、未来维护及寿命终结。 |
| representative_product | 验收合格木基层上的规定完整三片式瓦覆盖，按唯一净斜面覆盖面积计量。 |
| production_route | 基层/接口释放及暂存接收 -> 垫层/渗漏屏障/边部安装 -> 钉固大面/起始/脊瓦/节点/通风集成 -> 实际饰面、密封状态闭合及验收。 |
| market_state | 现场安装且在声明交付关口验收的屋面覆盖安装服务，供应商构件保留记录的实际状态。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在已接收木基层上最终验收的完整规定三片式沥青瓦屋面覆盖安装服务。 |
| How much | 1 m2唯一净验收斜面覆盖基层面积。 |
| How well | 符合声明层次、钉、密封、节点排水及自有通风接口的实际供应商/产品和设计要求，并有签署证据；无通用屋面性能等级。 |
| How long or cycle | 一个明确安装批次，跨全部实际接收、安装、等待/保护、纠正、在制品闭合及最终验收期间；不假定使用寿命或年化。 |
| reference_flow_link | `accepted_roof_service` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 验收合格三片式沥青瓦屋面覆盖安装服务 |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | 屋面/场址及批次; 实际瓦供应商/SKU/批次; 木基层释放和状态; 坡度/几何及开口排除; 选定层次和泛水/通风责任; 实际紧固/密封要求; 期间及返工沿袭; 验收证据。 |

A定义为各独立最终验收斜面多边形之和，每个开口仅扣一次。使用实际表面ID和同一批次/验收状态。搭接、裁切、重叠、重复测量及返工构成真实投入负担，却不产生额外最终面积。留存构件质量用于组件核对；同一材料不再作为独立客户交付质量输出。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_area | accepted_roof_service | Area | m2 | 由唯一验收斜面几何A > 0计量，不用水平投影面积。最终参考量为A/A = 1；内部表面积保留实测物理分子。 |
| observational_interface | CP基层及准备状态观测与相邻验收记录 | Area | m2 | 物理验收木基层接口区别于设计文件质量证据，不携带新增基层制造质量或重复资产负担。 |
| material_mass | 材料、包装、废物、可用流出及物种流卡 | Mass | kg | 保留实际材料ID及当前状态。件数、长度、供应面积或体积仅能通过有单位/不确定性的同ID/当前状态实测或供应商确认换算桥转换；原件数/长度不能直接加到kg。 |
| water_state | finish_water、含水材料及最终水去向 | Mass | kg | 毛新鲜水与实际配方/接收/期初已加工水互斥。结合/自由留存水、固/液废物水、直接液态排放、交接及期末在制品是独立水池。未闭合即数据缺口。 |
| electricity_measure | 各节点电力流卡 | Energy | kWh | 使用实际换算电表差值及拓扑/期间证据。保留确切能量属性身份要求；不能仅为单位匹配而替换成NCV属性。 |
| service_measure | 各节点通行/支持服务流卡 | Duration | h | 使用实际合同/计费服务可用量及可归属期间，相关时含本方闲置。不用人工工时、假定八小时日、寿命或任意年化代理。 |
| quantity_once | 全部流卡及计算 | 声明的物理属性 | 声明的单位 | 除normalized_accepted_roof_service外，计算输出均为物理分子，仅在清单数量处除以A一次。A/A已归一化。未发生须有测量证据；未知不是零。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 干燥且验收合格的木基层、兼容实际持钉基材及已释放几何/接口；实际屋面产品/设计说明和责任名册齐全。 |
| starting_condition_role | 外部交付物理资产接口按面积观测，不将基层制造表示为新增材料投入。 |
| product_classification_scope | 规定的新建三片式覆盖安装服务；分类背景不将范围扩大至所有屋面或结构服务。 |
| recursive_input_rule | 接收构件使用合适上游产品数据集；不递归展开另一屋面服务，也不将观测基层接口视为本服务。任何同类别分包须有显式不重叠责任和负担边界。 |
| upstream_dataset_requirement | 声明实际材料/供应方/状态/地理和数据集关口，包括运输/包装覆盖。在唯一外部毛采购处保留构件上游负担；内部发料/接收不重购，仅携带既有负担。 |
| disclosure | 场址/屋面/批次、已释放基层及外部责任方、实际供应商说明和设计修订、全部期间、构件/包装边界、实际配件/饰面发生、返工、未完成密封、废物去向及缺口。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_received_deck | survey_receive | 从签署的验收合格干燥兼容木基层释放开始。物理基层几何与图纸/检查证据分开。若实际修理基层或新增结构/节点工作，须在批次最终确定前重新评估并纳入责任。 | gaf-three-tab-route |
| boundary_components | survey_receive; underlay_edges; shingle_details | 列出实际垫层/渗漏屏障、边部金属、垫层紧固/密封耗材、大面瓦、单独采购起始/脊瓦、屋面钉、泛水/自有通风件及密封配方。保留确切供应商/材料/当前状态和构件清单；由大面库存裁制脊瓦是内部加工，不是第二次采购。 | gaf-three-tab-route; gaf-fiberglass-physical-state |
| boundary_gross_custody | 全部暂存材料及包装 | 外部毛领用G = 期初 + 外部接收 - 未领用完整期末库存，跨实际子地点只计一次。G含真实接收废物及正向U/X可用流出。每项实测来源发料匹配实际下游内部接收。无后续外部重购、差额推定发料或重复期末库存扣除。 |  |
| boundary_packaging | 全部四节点 | 随材料保留的包装通过实测来源发料/接收流动。在实际节点记录拆包；供应商包装覆盖仅携带一次上游负担。要求保留的瓦背离型膜不得默认松散废物。 | gaf-three-tab-route |
| boundary_assembly_handoffs | underlay_edges; shingle_details; finish_accept | 采用匹配实际表面/状态/保管记录及构件清单，将已铺垫层及边部完成表面交给铺瓦，再将已安装细节完备覆盖交给饰面。这些内部接口不是额外最终服务，也不是固定单位数量。 | gaf-three-tab-route |
| boundary_finishing | finish_accept | 饰面从已安装细节完备屋面开始。只纳入实际规定且发生的配件饰面/清理、直接新鲜水及本方支持服务。目录外观偏好本身不要求涂漆。将残留、未用流出及物种排放分开，直至完成验收输出。 | gaf-three-tab-route |
| boundary_gate | accepted_roof_service | 验收须满足实际声明的密封、排水、节点及自有通风条件。记录等待/天气及实际保护负荷。不推定即时密封、固定固化时长或虚构加热。所有直到验收关口的可归属纠正和服务均留在本批次。 | gaf-three-tab-route |
| boundary_period_assets | 各节点及实际报告期间 | 列明接收、安装、等待/保护、纠正、库存/在制品闭合及验收期间。将资产、投入、交接和处置关联至期间；识别所有实际共用电力/通行消费者、合同/电表边界及已审查期间分配决策。不假定通用寿命或年度期间。 |  |
| boundary_water_species | 实际作业及去向 | 本路线新鲜供水仅属于finish_accept。额外用水作业须显式审查语义范围/流卡。在实际节点计量配方/接收水及互斥去向。直接排放先识别实际物种及接收介质；质量差额保留为缺口。 |  |
| boundary_outside | 排除工作及阶段 | 排除已交付验收的构架/基层生产、旧屋面拆除/覆盖、热沥青/火焰/液态膜体系及未来使用/维护/寿命终结；披露外部供应方和接口，不得掩盖承包方实际工作。 | gaf-three-tab-route |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：接收保护及搬运包装 (`receive_packaging`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

随屋面材料实际进入的包装和接收保护材料，按组成及可重复使用状态拆分。保留供应商数据集的包装边界，确保上游生产只计一次。仍随领用材料携带的包装，通过实测领用/接收记录到达实际拆包节点。

- 采集对象：接收保护及搬运包装
- 流属性/单位： Mass / kg
- 数量规则： actual_receive_packaging/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 尚待核实的可选筛查提示：接收保护及搬运包装——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：接收保护及搬运包装的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：确认木屋面基层交接并接收屋面材料的可归属通行、共用设备及支持服务 (`survey_receive_access_service`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

确认木屋面基层交接并接收屋面材料实际可归属的合同通行、吊装、脚手架、抽排或保护服务可用量/使用量。保留供应方、资产、计费基准及本方承担的闲置/返工时段。人工工时或假定八小时班次不能证明服务交换量。

- 采集对象：确认木屋面基层交接并接收屋面材料的可归属通行、共用设备及支持服务
- 流属性/单位： Duration / h
- 数量规则： actual_survey_receive_access_service/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 尚待核实的可选筛查提示：确认木屋面基层交接并接收屋面材料的可归属通行、共用设备及支持服务——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： h
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：确认木屋面基层交接并接收屋面材料的可归属通行、共用设备及支持服务的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：外部接收选定屋面垫层与渗漏屏障材料 (`receive_underlay`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

按项目选定的垫层与渗漏屏障各层，按实际毡材、聚合物或沥青配方及安装用途分别记录。纳入真实搭接、裁切用量及实际揭除的离型衬层；所需层次由所安装产品说明和屋面设计确定。只有此卡承担该暂存构件的外部毛领用，包括之后真实接收废物和可用流出。仅扣除接收台账中的未领用完整期末库存，跨所有保管子地点只扣一次。

- 采集对象：外部接收选定屋面垫层与渗漏屏障材料
- 流属性/单位： Mass / kg
- 数量规则： actual_receive_underlay/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：外部接收选定屋面垫层与渗漏屏障材料——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：外部接收选定屋面垫层与渗漏屏障材料的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：外部接收实际檐口及山墙边滴水金属构件 (`receive_edge_metal`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

以交付成型状态记录檐口和山墙边滴水型材，保留实际金属、涂层和尺寸。计量裁切长度和余料；长度到质量的换算必须针对同一型材及状态。只有此卡承担该暂存构件的外部毛领用，包括之后真实接收废物和可用流出。仅扣除接收台账中的未领用完整期末库存，跨所有保管子地点只扣一次。

- 采集对象：外部接收实际檐口及山墙边滴水金属构件
- 流属性/单位： Mass / kg
- 数量规则： actual_receive_edge_metal/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：外部接收实际檐口及山墙边滴水金属构件——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：外部接收实际檐口及山墙边滴水金属构件的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：外部接收垫层/边部紧固件及密封耗材 (`receive_underlay_fixings`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

实际用于垫层和边部施工的紧固件及兼容胶带、胶黏剂或密封耗材。不同材料和配方分别记录；固定方案是验收证据，不能替代实际消耗计量。只有此卡承担该暂存构件的外部毛领用，包括之后真实接收废物和可用流出。仅扣除接收台账中的未领用完整期末库存，跨所有保管子地点只扣一次。

- 采集对象：外部接收垫层/边部紧固件及密封耗材
- 流属性/单位： Mass / kg
- 数量规则： actual_receive_underlay_fixings/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：外部接收垫层/边部紧固件及密封耗材——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：外部接收垫层/边部紧固件及密封耗材的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：外部接收选定起始瓦及斜脊/屋脊瓦 (`receive_starter_cap_shingles`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

仅在实际规定且单独采购时记录起始瓦和斜脊/屋脊覆盖构件。若由大面瓦库存裁制脊瓦或起始件，将该加工及裁切归入原大面瓦台账，不再添加第二次采购数量。只有此卡承担该暂存构件的外部毛领用，包括之后真实接收废物和可用流出。仅扣除接收台账中的未领用完整期末库存，跨所有保管子地点只扣一次。

- 采集对象：外部接收选定起始瓦及斜脊/屋脊瓦
- 流属性/单位： Mass / kg
- 数量规则： actual_receive_starter_cap_shingles/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 来源： `gaf-three-tab-route`; `gaf-fiberglass-physical-state`
- 尚待核实的可选筛查提示：外部接收选定起始瓦及斜脊/屋脊瓦——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：外部接收选定起始瓦及斜脊/屋脊瓦的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：外部接收节点泛水及施工自有通风构件 (`receive_flashing_vent_components`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

实际安装的天沟、墙面、烟囱、穿出物和交接部位泛水、套靴、封闭件、固定零件及由本安装责任范围承担的通风配件，按构件和材料分别记录。已交付验收的烟囱、反泛水或结构性导水坡接口须有明确外部责任方；本施工实际新增的工作须纳入重新评估后的范围。只有此卡承担该暂存构件的外部毛领用，包括之后真实接收废物和可用流出。仅扣除接收台账中的未领用完整期末库存，跨所有保管子地点只扣一次。

- 采集对象：外部接收节点泛水及施工自有通风构件
- 流属性/单位： Mass / kg
- 数量规则： actual_receive_flashing_vent_components/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：外部接收节点泛水及施工自有通风构件——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：外部接收节点泛水及施工自有通风构件的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：外部接收实际沥青塑性胶泥及兼容密封剂 (`receive_asphalt_cement`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

只有实际产品说明、设计和现场条件要求使用时，才记录沥青塑性胶泥及其他兼容密封配方。保留配方、供货状态、水/溶剂含量、施用记录和残留物；不得默认热沥青或强制加热。只有此卡承担该暂存构件的外部毛领用，包括之后真实接收废物和可用流出。仅扣除接收台账中的未领用完整期末库存，跨所有保管子地点只扣一次。

- 采集对象：外部接收实际沥青塑性胶泥及兼容密封剂
- 流属性/单位： Mass / kg
- 数量规则： actual_receive_asphalt_cement/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：外部接收实际沥青塑性胶泥及兼容密封剂——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：外部接收实际沥青塑性胶泥及兼容密封剂的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：外部接收实际规定的屋面配件涂装/清洁材料 (`receive_accessory_finish`)

过程／待建立交换的方向／类型：`survey_receive` / `inputs` / `product`.

按供应商产品、状态和组成分别记录实际规定且实际施用的配件涂层、补漆或清洁配方。外观建议本身不能证明发生了作业；用途或去向不同时，应将涂料、清洁剂与屋面密封材料分开。只有此卡承担该暂存构件的外部毛领用，包括之后真实接收废物和可用流出。仅扣除接收台账中的未领用完整期末库存，跨所有保管子地点只扣一次。

- 采集对象：外部接收实际规定的屋面配件涂装/清洁材料
- 流属性/单位： Mass / kg
- 数量规则： actual_receive_accessory_finish/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：外部接收实际规定的屋面配件涂装/清洁材料——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：外部接收实际规定的屋面配件涂装/清洁材料的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：接收节点可用材料退回或转移 (`receive_unused_return`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

通过退货或外部转移实际离开接收保管方的可用构件或包装。明确原等级和状态，将该正向流出与未领用完整期末库存、接收废物及内部领用区分。

- 采集对象：接收节点可用材料退回或转移
- 流属性/单位： Mass / kg
- 数量规则： actual_receive_unused_return/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 尚待核实的可选筛查提示：接收节点可用材料退回或转移——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：接收节点可用材料退回或转移的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：向垫层及边缘安装节点实际交接材料 (`issue_materials_underlay_edges`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

这是survey_receive向underlay_edges的条件性实际物料交接卡，可按实际材料/SKU、当前状态、交接事件及独立核实的具体流UUID展开为零条、一条或多条产品交换。各具体交换只使用自己的实测kg分子/A；不得给混合材料总量虚构一个固定产品身份。材料角色账务键issue_underlay、issue_edge_metal、issue_underlay_fixings分别保留在采集协议及计算规则中，并逐一匹配接收节点的各具体材料输入、状态和保管事件。外部采购只在原收料节点记录一次；包装、废物和可用退回不在本交接量内。

- 采集对象：向垫层及边缘安装节点实际交接材料
- 流属性/单位： Mass / kg
- 数量规则： actual_issue_materials_underlay_edges/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：向垫层及边缘安装节点实际交接材料——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：0..500 kg/m2仅为每一具体材料/状态交接交换的独立暂定推理筛选，非所有材料相加的配方、消耗默认值或事实限值。实际量由对应材料交接记录确定；有证据的未发生才可为零，未知不得为零。超界需调查并可据独立证据修订，不裁剪实际值。

#### 采集要求：向铺瓦及细部安装节点实际交接材料 (`issue_materials_shingle_details`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

这是survey_receive向shingle_details的条件性实际物料交接卡，可按实际材料/SKU、当前状态、交接事件及独立核实的具体流UUID展开为零条、一条或多条产品交换。各具体交换只使用自己的实测kg分子/A；不得给混合材料总量虚构一个固定产品身份。材料角色账务键issue_field_shingles、issue_starter_cap_shingles、issue_roof_nails、issue_flashing_vent_components、issue_asphalt_cement分别保留在采集协议及计算规则中，并逐一匹配接收节点的各具体材料输入、状态和保管事件。外部采购只在原收料节点记录一次；包装、废物和可用退回不在本交接量内。

- 采集对象：向铺瓦及细部安装节点实际交接材料
- 流属性/单位： Mass / kg
- 数量规则： actual_issue_materials_shingle_details/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 来源： `gaf-three-tab-route`; `gaf-fiberglass-physical-state`
- 尚待核实的可选筛查提示：向铺瓦及细部安装节点实际交接材料——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：0..500 kg/m2仅为每一具体材料/状态交接交换的独立暂定推理筛选，非所有材料相加的配方、消耗默认值或事实限值。实际量由对应材料交接记录确定；有证据的未发生才可为零，未知不得为零。超界需调查并可据独立证据修订，不裁剪实际值。

#### 采集要求：向完成实际配件饰面、闭合密封条件并验收屋面实际批次发放实际规定的屋面配件涂装/清洁材料 (`issue_accessory_finish`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

按供应商产品、状态和组成分别记录实际规定且实际施用的配件涂层、补漆或清洁配方。外观建议本身不能证明发生了作业；用途或去向不同时，应将涂料、清洁剂与屋面密封材料分开。此卡是接收保管方向指定安装节点实测发放的正向内部流出。材料、状态、事件和kg与内部接收卡逐一匹配，不产生第二次采购。

- 采集对象：向完成实际配件饰面、闭合密封条件并验收屋面实际批次发放实际规定的屋面配件涂装/清洁材料
- 流属性/单位： Mass / kg
- 数量规则： actual_issue_accessory_finish/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：向完成实际配件饰面、闭合密封条件并验收屋面实际批次发放实际规定的屋面配件涂装/清洁材料——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：向完成实际配件饰面、闭合密封条件并验收屋面实际批次发放实际规定的屋面配件涂装/清洁材料的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：随向安装规定垫层、渗漏屏障及滴水边发料而保留的包装 (`issue_packaging_underlay_edges`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

实际随发料送往underlay_edges的包装，按组成和可重复使用状态区分，使用同一保管事件。保留实际kg和供应商包装边界证据。已在接收阶段丢弃或退回的包装不能再随此次交接流动。

- 采集对象：随向安装规定垫层、渗漏屏障及滴水边发料而保留的包装
- 流属性/单位： Mass / kg
- 数量规则： actual_issue_packaging_underlay_edges/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 尚待核实的可选筛查提示：随向安装规定垫层、渗漏屏障及滴水边发料而保留的包装——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：随向安装规定垫层、渗漏屏障及滴水边发料而保留的包装的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：随向钉固三片式瓦并完成节点和自有通风配件发料而保留的包装 (`issue_packaging_shingle_details`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

实际随发料送往shingle_details的包装，按组成和可重复使用状态区分，使用同一保管事件。保留实际kg和供应商包装边界证据。已在接收阶段丢弃或退回的包装不能再随此次交接流动。

- 采集对象：随向钉固三片式瓦并完成节点和自有通风配件发料而保留的包装
- 流属性/单位： Mass / kg
- 数量规则： actual_issue_packaging_shingle_details/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 尚待核实的可选筛查提示：随向钉固三片式瓦并完成节点和自有通风配件发料而保留的包装——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：随向钉固三片式瓦并完成节点和自有通风配件发料而保留的包装的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：随向完成实际配件饰面、闭合密封条件并验收屋面发料而保留的包装 (`issue_packaging_finish_accept`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `product`.

实际随发料送往finish_accept的包装，按组成和可重复使用状态区分，使用同一保管事件。保留实际kg和供应商包装边界证据。已在接收阶段丢弃或退回的包装不能再随此次交接流动。

- 采集对象：随向完成实际配件饰面、闭合密封条件并验收屋面发料而保留的包装
- 流属性/单位： Mass / kg
- 数量规则： actual_issue_packaging_finish_accept/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 尚待核实的可选筛查提示：随向完成实际配件饰面、闭合密封条件并验收屋面发料而保留的包装——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：随向完成实际配件饰面、闭合密封条件并验收屋面发料而保留的包装的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：接收时丢弃的屋面构件 (`receive_reject`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `waste`.

因损坏或其他拒收原因由接收节点丢弃的材料，记录实际身份、状态和废物接收方。可用退货是独立产品流出；接收废物仍保留原材料上游负担。

- 采集对象：接收时丢弃的屋面构件
- 流属性/单位： Mass / kg
- 数量规则： actual_receive_reject/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 尚待核实的可选筛查提示：接收时丢弃的屋面构件——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：接收时丢弃的屋面构件的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：接收包装废物 (`receive_packaging_waste`)

过程／待建立交换的方向／类型：`survey_receive` / `outputs` / `waste`.

仅记录接收时实际丢弃的包装。仍随领用材料携带的包装不能在这里计废。当实际说明要求时，瓦背离型膜须留在瓦上，不得虚构为散装包装废物。

- 采集对象：接收包装废物
- 流属性/单位： Mass / kg
- 数量规则： actual_receive_packaging_waste/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 尚待核实的可选筛查提示：接收包装废物——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：接收包装废物的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：选定屋面垫层与渗漏屏障材料 (`underlay`)

过程／待建立交换的方向／类型：`underlay_edges` / `inputs` / `product`.

按项目选定的垫层与渗漏屏障各层，按实际毡材、聚合物或沥青配方及安装用途分别记录。纳入真实搭接、裁切用量及实际揭除的离型衬层；所需层次由所安装产品说明和屋面设计确定。此卡为来自issue_materials_underlay_edges（材料交接子账issue_underlay）的实测内部材料接收；上游采购仅由survey_receive承担。

- 采集对象：选定屋面垫层与渗漏屏障材料
- 流属性/单位： Mass / kg
- 数量规则： actual_underlay/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_underlay_edges`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：选定屋面垫层与渗漏屏障材料——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：选定屋面垫层与渗漏屏障材料的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：实际檐口及山墙边滴水金属构件 (`edge_metal`)

过程／待建立交换的方向／类型：`underlay_edges` / `inputs` / `product`.

以交付成型状态记录檐口和山墙边滴水型材，保留实际金属、涂层和尺寸。计量裁切长度和余料；长度到质量的换算必须针对同一型材及状态。此卡为来自issue_materials_underlay_edges（材料交接子账issue_edge_metal）的实测内部材料接收；上游采购仅由survey_receive承担。

- 采集对象：实际檐口及山墙边滴水金属构件
- 流属性/单位： Mass / kg
- 数量规则： actual_edge_metal/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_underlay_edges`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：实际檐口及山墙边滴水金属构件——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：实际檐口及山墙边滴水金属构件的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：垫层/边部紧固件及密封耗材 (`underlay_fixings`)

过程／待建立交换的方向／类型：`underlay_edges` / `inputs` / `product`.

实际用于垫层和边部施工的紧固件及兼容胶带、胶黏剂或密封耗材。不同材料和配方分别记录；固定方案是验收证据，不能替代实际消耗计量。此卡为来自issue_materials_underlay_edges（材料交接子账issue_underlay）_fixings的实测内部材料接收；上游采购仅由survey_receive承担。

- 采集对象：垫层/边部紧固件及密封耗材
- 流属性/单位： Mass / kg
- 数量规则： actual_underlay_fixings/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_underlay_edges`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：垫层/边部紧固件及密封耗材——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：垫层/边部紧固件及密封耗材的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：安装规定垫层、渗漏屏障及滴水边的可归属通行、共用设备及支持服务 (`underlay_edges_access_service`)

过程／待建立交换的方向／类型：`underlay_edges` / `inputs` / `product`.

安装规定垫层、渗漏屏障及滴水边实际可归属的合同通行、吊装、脚手架、抽排或保护服务可用量/使用量。保留供应方、资产、计费基准及本方承担的闲置/返工时段。人工工时或假定八小时班次不能证明服务交换量。

- 采集对象：安装规定垫层、渗漏屏障及滴水边的可归属通行、共用设备及支持服务
- 流属性/单位： Duration / h
- 数量规则： actual_underlay_edges_access_service/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_underlay_edges`
- 尚待核实的可选筛查提示：安装规定垫层、渗漏屏障及滴水边的可归属通行、共用设备及支持服务——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： h
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：安装规定垫层、渗漏屏障及滴水边的可归属通行、共用设备及支持服务的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：安装规定垫层、渗漏屏障及滴水边接收的随料包装 (`underlay_edges_packaging_feed`)

过程／待建立交换的方向／类型：`underlay_edges` / `inputs` / `product`.

实际随已发材料从issue_packaging_underlay_edges接收的包装，以来源事件、组成、当前状态和kg识别。之后拆包废物、可用退回、真实再用转移或期末在制品由underlay_edges承担，不产生新包装采购或重复接收废物。

- 采集对象：安装规定垫层、渗漏屏障及滴水边接收的随料包装
- 流属性/单位： Mass / kg
- 数量规则： actual_underlay_edges_packaging_feed/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_underlay_edges`
- 尚待核实的可选筛查提示：安装规定垫层、渗漏屏障及滴水边接收的随料包装——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：安装规定垫层、渗漏屏障及滴水边接收的随料包装的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：已完成垫层及边部细节的屋面交接 (`underlay_ready_roof`)

过程／待建立交换的方向／类型：`underlay_edges` / `outputs` / `product`.

规定垫层、渗漏屏障和边部细节经中间交接验收后的实际基层表面。保留表面ID及已安装构件清单，交给铺瓦节点；该交接不是第二项最终屋面服务。

- 采集对象：已完成垫层及边部细节的屋面交接
- 流属性/单位： Area / m2
- 数量规则： actual_underlay_ready_roof/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_underlay_edges`
- 尚待核实的可选筛查提示：已完成垫层及边部细节的屋面交接——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： m2
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：已完成垫层及边部细节的屋面交接的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。复核实测几何和匹配状态；搭接与重复作业不能扩大最终输出。

#### 采集要求：可用垫层、金属及紧固材料退回 (`underlay_unused_return`)

过程／待建立交换的方向／类型：`underlay_edges` / `outputs` / `product`.

实际离开垫层保管方的已领用但仍可用垫层、金属、紧固件、密封耗材或包装。按原有实际状态记录正向退回或转移；与留存、废物及期末在制品区分。

- 采集对象：可用垫层、金属及紧固材料退回
- 流属性/单位： Mass / kg
- 数量规则： actual_underlay_unused_return/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_underlay_edges`
- 尚待核实的可选筛查提示：可用垫层、金属及紧固材料退回——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：可用垫层、金属及紧固材料退回的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：垫层、边部金属、衬层及紧固件废物 (`underlay_waste`)

过程／待建立交换的方向／类型：`underlay_edges` / `outputs` / `waste`.

垫层节点实际丢弃的垫层裁片、实际揭除的衬层、金属边条余料、紧固残留及包装，按组成拆分。捕集颗粒归入废物，同一质量不能再报告为环境排放。

- 采集对象：垫层、边部金属、衬层及紧固件废物
- 流属性/单位： Mass / kg
- 数量规则： actual_underlay_waste/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_underlay_edges`
- 尚待核实的可选筛查提示：垫层、边部金属、衬层及紧固件废物——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：垫层、边部金属、衬层及紧固件废物的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：实际垫层裁切/密封施用直接排放 (`underlay_direct_release`)

过程／待建立交换的方向／类型：`underlay_edges` / `outputs` / `elementary`.

实际垫层裁切、固定或密封作业中的条件性直接排放。明确实测物质或颗粒组成/粒径、实际方向和接收介质；捕集残留属于废物，无法解释的质量差额属于缺口。

- 采集对象：实际垫层裁切/密封施用直接排放
- 流属性/单位： Mass / kg
- 数量规则： actual_underlay_direct_release/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_underlay_edges`
- 尚待核实的可选筛查提示：实际垫层裁切/密封施用直接排放——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：实际垫层裁切/密封施用直接排放的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：选定起始瓦及斜脊/屋脊瓦 (`starter_cap_shingles`)

过程／待建立交换的方向／类型：`shingle_details` / `inputs` / `product`.

仅在实际规定且单独采购时记录起始瓦和斜脊/屋脊覆盖构件。若由大面瓦库存裁制脊瓦或起始件，将该加工及裁切归入原大面瓦台账，不再添加第二次采购数量。此卡为来自issue_materials_shingle_details（材料交接子账issue_starter_cap_shingles）的实测内部材料接收；上游采购仅由survey_receive承担。

- 采集对象：选定起始瓦及斜脊/屋脊瓦
- 流属性/单位： Mass / kg
- 数量规则： actual_starter_cap_shingles/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_shingle_details`
- 来源： `gaf-three-tab-route`; `gaf-fiberglass-physical-state`
- 尚待核实的可选筛查提示：选定起始瓦及斜脊/屋脊瓦——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：选定起始瓦及斜脊/屋脊瓦的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：节点泛水及施工自有通风构件 (`flashing_vent_components`)

过程／待建立交换的方向／类型：`shingle_details` / `inputs` / `product`.

实际安装的天沟、墙面、烟囱、穿出物和交接部位泛水、套靴、封闭件、固定零件及由本安装责任范围承担的通风配件，按构件和材料分别记录。已交付验收的烟囱、反泛水或结构性导水坡接口须有明确外部责任方；本施工实际新增的工作须纳入重新评估后的范围。此卡为来自issue_materials_shingle_details（材料交接子账issue_flashing_vent_components）的实测内部材料接收；上游采购仅由survey_receive承担。

- 采集对象：节点泛水及施工自有通风构件
- 流属性/单位： Mass / kg
- 数量规则： actual_flashing_vent_components/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_shingle_details`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：节点泛水及施工自有通风构件——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：节点泛水及施工自有通风构件的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：实际沥青塑性胶泥及兼容密封剂 (`asphalt_cement`)

过程／待建立交换的方向／类型：`shingle_details` / `inputs` / `product`.

只有实际产品说明、设计和现场条件要求使用时，才记录沥青塑性胶泥及其他兼容密封配方。保留配方、供货状态、水/溶剂含量、施用记录和残留物；不得默认热沥青或强制加热。此卡为来自issue_materials_shingle_details（材料交接子账issue_asphalt_cement）的实测内部材料接收；上游采购仅由survey_receive承担。

- 采集对象：实际沥青塑性胶泥及兼容密封剂
- 流属性/单位： Mass / kg
- 数量规则： actual_asphalt_cement/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_shingle_details`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：实际沥青塑性胶泥及兼容密封剂——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：实际沥青塑性胶泥及兼容密封剂的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：钉固三片式瓦并完成节点和自有通风配件的可归属通行、共用设备及支持服务 (`shingle_details_access_service`)

过程／待建立交换的方向／类型：`shingle_details` / `inputs` / `product`.

钉固三片式瓦并完成节点和自有通风配件实际可归属的合同通行、吊装、脚手架、抽排或保护服务可用量/使用量。保留供应方、资产、计费基准及本方承担的闲置/返工时段。人工工时或假定八小时班次不能证明服务交换量。

- 采集对象：钉固三片式瓦并完成节点和自有通风配件的可归属通行、共用设备及支持服务
- 流属性/单位： Duration / h
- 数量规则： actual_shingle_details_access_service/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_shingle_details`
- 尚待核实的可选筛查提示：钉固三片式瓦并完成节点和自有通风配件的可归属通行、共用设备及支持服务——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： h
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：钉固三片式瓦并完成节点和自有通风配件的可归属通行、共用设备及支持服务的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：钉固三片式瓦并完成节点和自有通风配件接收的随料包装 (`shingle_details_packaging_feed`)

过程／待建立交换的方向／类型：`shingle_details` / `inputs` / `product`.

实际随已发材料从issue_packaging_shingle_details接收的包装，以来源事件、组成、当前状态和kg识别。之后拆包废物、可用退回、真实再用转移或期末在制品由shingle_details承担，不产生新包装采购或重复接收废物。

- 采集对象：钉固三片式瓦并完成节点和自有通风配件接收的随料包装
- 流属性/单位： Mass / kg
- 数量规则： actual_shingle_details_packaging_feed/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_shingle_details`
- 尚待核实的可选筛查提示：钉固三片式瓦并完成节点和自有通风配件接收的随料包装——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：钉固三片式瓦并完成节点和自有通风配件接收的随料包装的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：可用铺瓦构件或胶泥退回 (`shingle_unused_return`)

过程／待建立交换的方向／类型：`shingle_details` / `outputs` / `product`.

按记录状态离开本节点的已领用但可用瓦、单独采购脊瓦、钉、泛水/通风构件、密封配方或包装。裁切或污染材料不能自动视为原态未用库存；明确实际返工和废物路径。

- 采集对象：可用铺瓦构件或胶泥退回
- 流属性/单位： Mass / kg
- 数量规则： actual_shingle_unused_return/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_shingle_details`
- 尚待核实的可选筛查提示：可用铺瓦构件或胶泥退回——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：可用铺瓦构件或胶泥退回的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：瓦、脊瓦、金属、紧固及施用废物 (`shingle_waste`)

过程／待建立交换的方向／类型：`shingle_details` / `outputs` / `waste`.

实际瓦及脊瓦裁片、拆除的不合格构件、金属/紧固/施用残留、捕集裁切粉尘及铺瓦时丢弃的包装。按材料和干湿状态分别记录，保留原制造及返工负担。

- 采集对象：瓦、脊瓦、金属、紧固及施用废物
- 流属性/单位： Mass / kg
- 数量规则： actual_shingle_waste/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_shingle_details`
- 尚待核实的可选筛查提示：瓦、脊瓦、金属、紧固及施用废物——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：瓦、脊瓦、金属、紧固及施用废物的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：实际瓦裁切或胶泥施用排放 (`shingle_direct_release`)

过程／待建立交换的方向／类型：`shingle_details` / `outputs` / `elementary`.

瓦裁切或胶泥/密封剂施用中实际未捕集的排放，明确物质或组成/粒径及介质。裁切可能产生颗粒或烟气；其发生和数量须有记录，不能以通用粉尘或VOC身份替代。

- 采集对象：实际瓦裁切或胶泥施用排放
- 流属性/单位： Mass / kg
- 数量规则： actual_shingle_direct_release/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_shingle_details`
- 尚待核实的可选筛查提示：实际瓦裁切或胶泥施用排放——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：实际瓦裁切或胶泥施用排放的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：最终饰面和验收节点接收的已安装屋面 (`finish_roof_feed`)

过程／待建立交换的方向／类型：`finish_accept` / `inputs` / `product`.

验收节点接收的已安装并完成细节的屋面表面，保留匹配表面和交接ID。尚未满足的密封或饰面条件持续可见；接收该面积不等于客户验收。

- 采集对象：最终饰面和验收节点接收的已安装屋面
- 流属性/单位： Area / m2
- 数量规则： actual_finish_roof_feed/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish_accept`
- 尚待核实的可选筛查提示：最终饰面和验收节点接收的已安装屋面——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： m2
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：最终饰面和验收节点接收的已安装屋面的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。复核实测几何和匹配状态；搭接与重复作业不能扩大最终输出。

#### 采集要求：实际规定的屋面配件涂装/清洁材料 (`accessory_finish`)

过程／待建立交换的方向／类型：`finish_accept` / `inputs` / `product`.

按供应商产品、状态和组成分别记录实际规定且实际施用的配件涂层、补漆或清洁配方。外观建议本身不能证明发生了作业；用途或去向不同时，应将涂料、清洁剂与屋面密封材料分开。此卡为来自issue_accessory_finish的实测内部材料接收；上游采购仅由survey_receive承担。

- 采集对象：实际规定的屋面配件涂装/清洁材料
- 流属性/单位： Mass / kg
- 数量规则： actual_accessory_finish/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish_accept`
- 来源： `gaf-three-tab-route`
- 尚待核实的可选筛查提示：实际规定的屋面配件涂装/清洁材料——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：实际规定的屋面配件涂装/清洁材料的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：完成实际配件饰面、闭合密封条件并验收屋面的可归属通行、共用设备及支持服务 (`finish_accept_access_service`)

过程／待建立交换的方向／类型：`finish_accept` / `inputs` / `product`.

完成实际配件饰面、闭合密封条件并验收屋面实际可归属的合同通行、吊装、脚手架、抽排或保护服务可用量/使用量。保留供应方、资产、计费基准及本方承担的闲置/返工时段。人工工时或假定八小时班次不能证明服务交换量。

- 采集对象：完成实际配件饰面、闭合密封条件并验收屋面的可归属通行、共用设备及支持服务
- 流属性/单位： Duration / h
- 数量规则： actual_finish_accept_access_service/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish_accept`
- 尚待核实的可选筛查提示：完成实际配件饰面、闭合密封条件并验收屋面的可归属通行、共用设备及支持服务——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： h
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：完成实际配件饰面、闭合密封条件并验收屋面的可归属通行、共用设备及支持服务的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：完成实际配件饰面、闭合密封条件并验收屋面接收的随料包装 (`finish_accept_packaging_feed`)

过程／待建立交换的方向／类型：`finish_accept` / `inputs` / `product`.

实际随已发材料从issue_packaging_finish_accept接收的包装，以来源事件、组成、当前状态和kg识别。之后拆包废物、可用退回、真实再用转移或期末在制品由finish_accept承担，不产生新包装采购或重复接收废物。

- 采集对象：完成实际配件饰面、闭合密封条件并验收屋面接收的随料包装
- 流属性/单位： Mass / kg
- 数量规则： actual_finish_accept_packaging_feed/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish_accept`
- 尚待核实的可选筛查提示：完成实际配件饰面、闭合密封条件并验收屋面接收的随料包装——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：完成实际配件饰面、闭合密封条件并验收屋面接收的随料包装的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：可用饰面材料或未用新鲜水退回 (`finish_unused_return`)

过程／待建立交换的方向／类型：`finish_accept` / `outputs` / `product`.

由本保管方实际退回或向外部转移的可用饰面配方、包装或供应的新鲜水，按实际组成和当前状态拆分。此类正向未用流出与未领用完整期末库存、废物及已加工在制品区分。

- 采集对象：可用饰面材料或未用新鲜水退回
- 流属性/单位： Mass / kg
- 数量规则： actual_finish_unused_return/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish_accept`
- 尚待核实的可选筛查提示：可用饰面材料或未用新鲜水退回——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：可用饰面材料或未用新鲜水退回的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：最终屋面清理或拆除不合格构件废物 (`finish_waste`)

过程／待建立交换的方向／类型：`finish_accept` / `outputs` / `waste`.

本节点实际最终清理废物和拆除的不合格构件，含本节点拆包废物及捕集涂装/清洁残留。保留固废含水量，避免其水分又作为废水或水蒸气重复计入。

- 采集对象：最终屋面清理或拆除不合格构件废物
- 流属性/单位： Mass / kg
- 数量规则： actual_finish_waste/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish_accept`
- 尚待核实的可选筛查提示：最终屋面清理或拆除不合格构件废物——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：最终屋面清理或拆除不合格构件废物的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 采集要求：其他实际最终涂装或清理排放 (`finish_other_release`)

过程／待建立交换的方向／类型：`finish_accept` / `outputs` / `elementary`.

除单列H2O水蒸气外，本节点实际条件性环境排放。须明确实际物质/配方或颗粒基准、接收介质及未捕集数量。收集的液态残留仍是废物交接；不得用通用VOC或差额排放替代。

- 采集对象：其他实际最终涂装或清理排放
- 流属性/单位： Mass / kg
- 数量规则： actual_finish_other_release/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish_accept`
- 尚待核实的可选筛查提示：其他实际最终涂装或清理排放——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：其他实际最终涂装或清理排放的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| survey_receive | 确认木屋面基层交接并接收屋面材料 | required | 适用于本安装路线；每项可选材料/饰面/支持的发生以实际记录及有证据的未发生状态为准。 | 根据项目设计及所安装产品说明，检查实际干燥木基层、紧固兼容性、坡度、穿出物、屋面几何和已由外部验收的节点接口。明确每个接口责任方。用校准质量测量或确切同ID换算证据核对各交付构件和包装台账。逐一签署发料及物理基层交接；接收拒收与可用流出分别保留证据。 | 实测实际状态/数量；可归属物理分子按最终A归一化一次。 |
| underlay_edges | 安装规定垫层、渗漏屏障及滴水边 | required | 适用于本安装路线；每项可选材料/饰面/支持的发生以实际记录及有证据的未发生状态为准。 | 将物理基层释放及各材料发料与实际接收匹配。记录该屋面规定的层次、渗漏屏障位置、搭接、边部顺序和紧固/密封作业。计量本节点实际安装数量、裁切、揭除衬层及包装。在将已铺垫层表面交给铺瓦节点前检查隐蔽接口，记录并保留每次纠正。 | 实测实际状态/数量；可归属物理分子按最终A归一化一次。 |
| shingle_details | 钉固三片式瓦并完成节点和自有通风配件 | required | 适用于本安装路线；每项可选材料/饰面/支持的发生以实际记录及有证据的未发生状态为准。 | 匹配已铺垫层表面及构件发料，记录大面排布、裁切、起始/脊瓦来源、实际钉规格及钉固、天沟、墙/烟囱/穿出部位泛水及自有通风配件。按需记录胶泥/手工密封施用。由大面瓦裁出的脊瓦保留在原库存台账中。捕集废物与实际未捕集物种排放分开采集，保留每次返工事件。 | 实测实际状态/数量；可归属物理分子按最终A归一化一次。 |
| finish_accept | 完成实际配件饰面、闭合密封条件并验收屋面 | required | 适用于本安装路线；每项可选材料/饰面/支持的发生以实际记录及有证据的未发生状态为准。 | 匹配已安装表面、饰面材料发料及随料包装。仅记录实际规定的涂装或清理作业及直接新鲜水供应。在实际等待/保护时段后检查所需密封状态、排水连续性、节点完成及自有通风接口。计量所有废物、未用流出和水去向；只有声明验收关口满足后才能签署最终验收。 | 实测实际状态/数量；可归属物理分子按最终A归一化一次。 |

各节点缺陷均关联其产生事件和状态。完整安装上的纠正留在该节点并记录新的关联返工事件；实际退回前节点须有匹配有方向保管和状态记录，不新增采购。拆除材料按实际状态进入实测可用流出、记录回收/降级或废物。未验收安装和已加工在制品保持互斥，直到纠正、拆除或最终验收。上述循环不产生另一个验收面积分母。

### 过程：确认木屋面基层交接并接收屋面材料（`survey_receive`）

根据项目设计及所安装产品说明，检查实际干燥木基层、紧固兼容性、坡度、穿出物、屋面几何和已由外部验收的节点接口。明确每个接口责任方。用校准质量测量或确切同ID换算证据核对各交付构件和包装台账。逐一签署发料及物理基层交接；接收拒收与可用流出分别保留证据。

#### 输入

##### 产品流

###### 确认木屋面基层交接并接收屋面材料的可归属电力（`survey_receive_electricity`）

确认木屋面基层交接并接收屋面材料实际可归属的电力，包括自有工具、照明、抽排、保护及返工负荷。保留实际供电/电压及电表拓扑；直接分配与剩余量分配合计须将计量服务核对一次。

- 选定流：确认木屋面基层交接并接收屋面材料的可归属电力
- 流属性/单位： Energy / kWh
- 数量规则： actual_survey_receive_electricity/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 数量范围：确认木屋面基层交接并接收屋面材料的可归属电力——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kWh
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：确认木屋面基层交接并接收屋面材料的可归属电力的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

###### 外部接收玻璃纤维增强三片式沥青瓦（`receive_field_shingles`）

以实际供应商SKU和批次识别含矿物覆面的玻璃纤维增强、沥青结合三片式成品瓦，保留交付复合材料状态。原玻璃纤维、原沥青以及卷材或液态防水膜均不能代表该构件。只有此卡承担该暂存构件的外部毛领用，包括之后真实接收废物和可用流出。仅扣除接收台账中的未领用完整期末库存，跨所有保管子地点只扣一次。

- 选定流：外部接收玻璃纤维增强三片式沥青瓦
- 流属性/单位： Mass / kg
- 数量规则： actual_receive_field_shingles/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 来源： `gaf-three-tab-route`; `gaf-fiberglass-physical-state`
- 数量范围：外部接收玻璃纤维增强三片式沥青瓦——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：外部接收玻璃纤维增强三片式沥青瓦的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

###### 外部接收实际屋面钉（`receive_roof_nails`）

满足实际瓦产品及基层要求的屋面钉，保留实际材质、表面处理和尺寸。件数到质量换算须使用该确切紧固件的实测或供应商确认单件质量；规定钉位本身不能代表实际用量。只有此卡承担该暂存构件的外部毛领用，包括之后真实接收废物和可用流出。仅扣除接收台账中的未领用完整期末库存，跨所有保管子地点只扣一次。

- 选定流：外部接收实际屋面钉
- 流属性/单位： Mass / kg
- 数量规则： actual_receive_roof_nails/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_survey_receive`
- 来源： `gaf-three-tab-route`
- 数量范围：外部接收实际屋面钉——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：外部接收实际屋面钉的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 输出

##### 产品流

##### 废物流

### 过程：安装规定垫层、渗漏屏障及滴水边（`underlay_edges`）

将物理基层释放及各材料发料与实际接收匹配。记录该屋面规定的层次、渗漏屏障位置、搭接、边部顺序和紧固/密封作业。计量本节点实际安装数量、裁切、揭除衬层及包装。在将已铺垫层表面交给铺瓦节点前检查隐蔽接口，记录并保留每次纠正。

#### 输入

##### 产品流

###### 安装规定垫层、渗漏屏障及滴水边的可归属电力（`underlay_edges_electricity`）

安装规定垫层、渗漏屏障及滴水边实际可归属的电力，包括自有工具、照明、抽排、保护及返工负荷。保留实际供电/电压及电表拓扑；直接分配与剩余量分配合计须将计量服务核对一次。

- 选定流：安装规定垫层、渗漏屏障及滴水边的可归属电力
- 流属性/单位： Energy / kWh
- 数量规则： actual_underlay_edges_electricity/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_underlay_edges`
- 数量范围：安装规定垫层、渗漏屏障及滴水边的可归属电力——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kWh
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：安装规定垫层、渗漏屏障及滴水边的可归属电力的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：钉固三片式瓦并完成节点和自有通风配件（`shingle_details`）

匹配已铺垫层表面及构件发料，记录大面排布、裁切、起始/脊瓦来源、实际钉规格及钉固、天沟、墙/烟囱/穿出部位泛水及自有通风配件。按需记录胶泥/手工密封施用。由大面瓦裁出的脊瓦保留在原库存台账中。捕集废物与实际未捕集物种排放分开采集，保留每次返工事件。

#### 输入

##### 产品流

###### 铺瓦节点实际接收的已铺垫层屋面（`roof_feed`）

从垫层节点接收的同一已识别、已完成垫层和边部细节表面。将实测几何、状态和保管交接事件与发送记录核对。其面积独立于最终验收面积计量，不得自动赋为归一化的1。

- 选定流：铺瓦节点实际接收的已铺垫层屋面
- 流属性/单位： Area / m2
- 数量规则： actual_roof_feed/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_shingle_details`
- 数量范围：铺瓦节点实际接收的已铺垫层屋面——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： m2
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：铺瓦节点实际接收的已铺垫层屋面的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。复核实测几何和匹配状态；搭接与重复作业不能扩大最终输出。

###### 玻璃纤维增强三片式沥青瓦（`field_shingles`）

以实际供应商SKU和批次识别含矿物覆面的玻璃纤维增强、沥青结合三片式成品瓦，保留交付复合材料状态。原玻璃纤维、原沥青以及卷材或液态防水膜均不能代表该构件。此卡为来自issue_materials_shingle_details（材料交接子账issue_field_shingles）的实测内部材料接收；上游采购仅由survey_receive承担。

- 选定流：玻璃纤维增强三片式沥青瓦
- 流属性/单位： Mass / kg
- 数量规则： actual_field_shingles/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_shingle_details`
- 来源： `gaf-three-tab-route`; `gaf-fiberglass-physical-state`
- 数量范围：玻璃纤维增强三片式沥青瓦——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：玻璃纤维增强三片式沥青瓦的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

###### 实际屋面钉（`roof_nails`）

满足实际瓦产品及基层要求的屋面钉，保留实际材质、表面处理和尺寸。件数到质量换算须使用该确切紧固件的实测或供应商确认单件质量；规定钉位本身不能代表实际用量。此卡为来自issue_materials_shingle_details（材料交接子账issue_roof_nails）的实测内部材料接收；上游采购仅由survey_receive承担。

- 选定流：实际屋面钉
- 流属性/单位： Mass / kg
- 数量规则： actual_roof_nails/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_shingle_details`
- 来源： `gaf-three-tab-route`
- 数量范围：实际屋面钉——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：实际屋面钉的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

###### 钉固三片式瓦并完成节点和自有通风配件的可归属电力（`shingle_details_electricity`）

钉固三片式瓦并完成节点和自有通风配件实际可归属的电力，包括自有工具、照明、抽排、保护及返工负荷。保留实际供电/电压及电表拓扑；直接分配与剩余量分配合计须将计量服务核对一次。

- 选定流：钉固三片式瓦并完成节点和自有通风配件的可归属电力
- 流属性/单位： Energy / kWh
- 数量规则： actual_shingle_details_electricity/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_shingle_details`
- 数量范围：钉固三片式瓦并完成节点和自有通风配件的可归属电力——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kWh
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：钉固三片式瓦并完成节点和自有通风配件的可归属电力的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 输出

##### 产品流

###### 供饰面/验收的已安装细节完备瓦屋面（`installed_roof`）

大面瓦、起始瓦和斜脊/屋脊细节、实际节点泛水、规定施用的密封材料及自有通风配件集成完成后的已识别瓦覆盖表面。交给饰面/验收节点时保留尚待满足的条件和已安装构件清单。

- 选定流：供饰面/验收的已安装细节完备瓦屋面
- 流属性/单位： Area / m2
- 数量规则： actual_installed_roof/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_shingle_details`
- 数量范围：供饰面/验收的已安装细节完备瓦屋面——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： m2
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：供饰面/验收的已安装细节完备瓦屋面的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。复核实测几何和匹配状态；搭接与重复作业不能扩大最终输出。

##### 废物流

##### 基本流

### 过程：完成实际配件饰面、闭合密封条件并验收屋面（`finish_accept`）

匹配已安装表面、饰面材料发料及随料包装。仅记录实际规定的涂装或清理作业及直接新鲜水供应。在实际等待/保护时段后检查所需密封状态、排水连续性、节点完成及自有通风接口。计量所有废物、未用流出和水去向；只有声明验收关口满足后才能签署最终验收。

#### 输入

##### 产品流

###### 实际最终清洁新鲜水（`finish_water`）

仅针对实际饰面或清理作业直接供应的新鲜水，记录供水来源及当前状态。本路线不向先前节点分配新鲜水采购。配方内水或接收组件中的水另行记录。

- 选定流：实际最终清洁新鲜水
- 流属性/单位： Mass / kg
- 数量规则： actual_finish_water/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish_accept`
- 数量范围：实际最终清洁新鲜水——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：实际最终清洁新鲜水的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

###### 完成实际配件饰面、闭合密封条件并验收屋面的可归属电力（`finish_accept_electricity`）

完成实际配件饰面、闭合密封条件并验收屋面实际可归属的电力，包括自有工具、照明、抽排、保护及返工负荷。保留实际供电/电压及电表拓扑；直接分配与剩余量分配合计须将计量服务核对一次。

- 选定流：完成实际配件饰面、闭合密封条件并验收屋面的可归属电力
- 流属性/单位： Energy / kWh
- 数量规则： actual_finish_accept_electricity/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish_accept`
- 数量范围：完成实际配件饰面、闭合密封条件并验收屋面的可归属电力——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kWh
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：完成实际配件饰面、闭合密封条件并验收屋面的可归属电力的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

#### 输出

##### 产品流

###### 验收合格三片式沥青瓦屋面覆盖安装服务（`accepted_roof_service`）

本批次木基层唯一净斜面面积上的一次最终验收合格覆盖安装。所有规定且属本方责任的层次、钉固三片式瓦、节点/排水细节、所需密封状态和通风接口均已通过记录的验收关口。构架、基层制造及旧屋面作业不属于本服务。

- 选定流：验收合格三片式沥青瓦屋面覆盖安装服务
- 流属性/单位： Area / m2
- 数量规则： 1 m2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish_accept`
- 数量范围：验收合格三片式沥青瓦屋面覆盖安装服务——归一化参考身份
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： m2
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集计算（`calculated_from_collection`）
  - 说明：单个最终参考交换的计算身份：正且唯一验收A除以同一个A等于1。这不是产率、钉数、服务寿命或验收目标。

##### 废物流

###### 交给接收方的实际最终清理废水（`finish_wastewater`）

交给下水系统或其他明确接收方的收集液态清理残留，保留实际质量、组成和水分比例。该技术系统废物交接区别于直接进入环境接收介质的排放。

- 选定流：交给接收方的实际最终清理废水
- 流属性/单位： Mass / kg
- 数量规则： actual_finish_wastewater/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish_accept`
- 数量范围：交给接收方的实际最终清理废水——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：交给接收方的实际最终清理废水的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

##### 基本流

###### 实际最终清洁/涂装水蒸气（`finish_water_vapour`）

最终节点实际向空气释放的H2O，须由测量或验证过的纯水质量平衡支持。将配方水、接收过程水、结合/自由留存水、废物含水、期末已加工在制品及其他转移分别记录。平衡缺口不能证明蒸发。接收介质明确为未指定空气，物质为H2O。该身份仅表示本节点实际排放，不提供蒸发发生与否或排放数量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定模式：fixed
- 流属性/单位： Mass / kg
- 数量规则： actual_finish_water_vapour/A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish_accept`
- 数量范围：实际最终清洁/涂装水蒸气——暂定诊断筛选
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准：每1 m2最终验收唯一净斜面覆盖基层面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 说明：实际最终清洁/涂装水蒸气的独立暂定reasoned_estimate筛选。区间容纳初期未知屋面几何、实际安装/返工数量及有证据的条件性未发生，不提供默认数量或安装规格。以针对确切用途、材料/状态及批次的独立已审查记录替代此宽泛筛选。超出触发调查，落在区间内不证明完整性。

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | 全部节点 | 在共用分配前，将实际计量材料、废物、电力及服务直接归属真实节点、批次和期间。内部面积/材料/包装交接携带既有负担，不是共生产的最终屋面服务。 |  |
| allocation_unused | 原可用未用材料 | 将U退回和X外部可用转移记录为互斥正向物理输出。仅转移原未用材料实际未改变状态下有证据的上游负担。接收搬运、施工、保护、服务及返工全部留在屋面批次；不计避免生产信用，不再从毛投入二次扣除U/X。净消耗仅可用作诊断。 |  |
| allocation_rework | 不合格及纠正工作 | 原材料及实际重复安装/拆除/清理/服务负担均留在本批次。记录产生节点、缺陷、实际返工去向或废物/可用/回收处置及关联事件。未解决不合格工作不是验收输出；回收或降级处理须有实际去向和已审查边界。 |  |
| allocation_power | 所有节点电力流卡及电表期间 | 对每个电表边界使用换算后的实际差值。将主表内所有已直接分配消费者扣一次得到剩余量，主表外直接分配不得参与该扣除。零剩余量无需权重。正剩余量须有完整合格名册及有证据的正权重，权重之和为分母。直接量加分配剩余量须将主表核对一次。负/未知剩余量阻止归属。 |  |
| allocation_service | 共用通行/吊装/脚手架/保护及期间 | 明确实际供应方/资产、服务范围、计费量和期间；列出所有使用节点/批次/期间、直接分配及本方实际闲置。先直接分配，再仅用已审查的正合格基准分配实际剩余计费服务。核对计费总量一次；不得使用人工/默认班次或寿命代理。 |  |
| allocation_periods | 接收至最终验收 | 每项投入、共用资产、纠正、废物、库存及在制品移动保留期间/阶段/事件关联及已审查归属决策。仅结转未匹配的物理库存，不重新采购或将同一服务归属两个期间。最终唯一A在关口完成后仅计一次。更换/终止或未完成在制品须显式处置，不能静默年化。 |  |
| allocation_assembly_mass | 已安装留存构件 | 留存构件质量仅用于实际复合组件闭合。复合总量与组成子行是互斥汇总视图。不能在面积服务之外，将同一验收材料既记留存输出又记客户质量交付。 |  |

## 8. 前景数据采集、计算与质量规则

每个协议仅归属一个过程节点。共同字段名描述记录粒度，各流卡使用本节点实际数量字段和证据。换算前保留原数量、单位及当前状态。区分重复电子记录纠正与独立真实作业，绝不能删除真实返工。暂定范围下限为零不能证明必需构件或验收关口未发生。

### 数据采集协议

既有干燥屋面基层的观测、签字放行及施工接收以同一唯一表面ID、实际面积、状态和责任方连通，属于cp_survey_receive和cp_underlay_edges的验收/计量记录，不产生单独产品交换或第二次基层生产负荷。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_survey_receive | survey_receive | receive_packaging; receive_reject; receive_packaging_waste; receive_unused_return; survey_receive_electricity; survey_receive_access_service; receive_underlay; issue_materials_underlay_edges; receive_edge_metal; receive_underlay_fixings; receive_field_shingles; issue_materials_shingle_details; receive_starter_cap_shingles; receive_roof_nails; receive_flashing_vent_components; receive_asphalt_cement; receive_accessory_finish; issue_accessory_finish; issue_packaging_underlay_edges; issue_packaging_shingle_details; issue_packaging_finish_accept | 单节点带时间的物理观测、库存、保管、电表、处置及验收关口记录 | lot_id; node_id; event_id; timestamp_start; timestamp_end; material_id; state_id; custodian_from; custodian_to; surface_or_panel_id; acceptance_status; evidence_ref; period_id; phase_id; revision_event_id; superseded_record_id; actual_rework_event_id; rework_source_node; rework_destination_node; defect_state; disposition; rework_quantity; measurement_unit; component_schedule_ref; product_instructions_ref; design_revision_ref; source_boundary_ref; surface_state_manifest_ref; unique_measurement_id; directed_transfer_id; actual_absence_evidence; allocation_decision_id; allocation_consumer_register_ref; water_fate_register_ref; deck_interface_actual_quantity; deck_interface_native_unit; deck_interface_mass_or_geometry_bridge; deck_interface_actual_state; deck_interface_measured_absence_evidence; deck_interface_destination; receive_packaging_opening; receive_packaging_receipts; receive_packaging_closing_intact; receive_packaging_native_unit; receive_packaging_native_quantity; receive_packaging_actual_mass_factor; receive_packaging_factor_state_evidence; receive_reject_actual_quantity; receive_reject_native_unit; receive_reject_mass_or_geometry_bridge; receive_reject_actual_state; receive_reject_measured_absence_evidence; receive_reject_destination; receive_packaging_waste_actual_quantity; receive_packaging_waste_native_unit; receive_packaging_waste_mass_or_geometry_bridge; receive_packaging_waste_actual_state; receive_packaging_waste_measured_absence_evidence; receive_packaging_waste_destination; receive_unused_return_actual_quantity; receive_unused_return_native_unit; receive_unused_return_mass_or_geometry_bridge; receive_unused_return_actual_state; receive_unused_return_measured_absence_evidence; receive_unused_return_destination; survey_receive_electricity_meter_id; survey_receive_electricity_meter_start; survey_receive_electricity_meter_end; survey_receive_electricity_unit_factor; survey_receive_electricity_meter_parent; survey_receive_electricity_inside_master_direct_total; survey_receive_electricity_outside_master_direct_total; survey_receive_electricity_master_total; survey_receive_electricity_consumer_weight; survey_receive_electricity_all_eligible_weights; survey_receive_electricity_period; survey_receive_electricity_topology_evidence; survey_receive_access_service_asset_id; survey_receive_access_service_period_start; survey_receive_access_service_period_end; survey_receive_access_service_billed_quantity; survey_receive_access_service_actual_service_quantity; survey_receive_access_service_owned_idle; survey_receive_access_service_consumer_weight; survey_receive_access_service_all_eligible_weights; survey_receive_access_service_assignment_evidence; receive_underlay_opening; receive_underlay_external_receipts; receive_underlay_closing_intact_all_locations; receive_underlay_current_state; receive_underlay_native_unit; receive_underlay_exact_mass_bridge; receive_underlay_material_id; receive_underlay_sublocation_stock_evidence; issue_underlay_actual_quantity_kg; issue_underlay_event_id; issue_underlay_material_id; issue_underlay_state_id; issue_underlay_custodian_from; issue_underlay_custodian_to; issue_underlay_receiving_node; issue_underlay_handoff_evidence; receive_edge_metal_opening; receive_edge_metal_external_receipts; receive_edge_metal_closing_intact_all_locations; receive_edge_metal_current_state; receive_edge_metal_native_unit; receive_edge_metal_exact_mass_bridge; receive_edge_metal_material_id; receive_edge_metal_sublocation_stock_evidence; issue_edge_metal_actual_quantity_kg; issue_edge_metal_event_id; issue_edge_metal_material_id; issue_edge_metal_state_id; issue_edge_metal_custodian_from; issue_edge_metal_custodian_to; issue_edge_metal_receiving_node; issue_edge_metal_handoff_evidence; receive_underlay_fixings_opening; receive_underlay_fixings_external_receipts; receive_underlay_fixings_closing_intact_all_locations; receive_underlay_fixings_current_state; receive_underlay_fixings_native_unit; receive_underlay_fixings_exact_mass_bridge; receive_underlay_fixings_material_id; receive_underlay_fixings_sublocation_stock_evidence; issue_underlay_fixings_actual_quantity_kg; issue_underlay_fixings_event_id; issue_underlay_fixings_material_id; issue_underlay_fixings_state_id; issue_underlay_fixings_custodian_from; issue_underlay_fixings_custodian_to; issue_underlay_fixings_receiving_node; issue_underlay_fixings_handoff_evidence; receive_field_shingles_opening; receive_field_shingles_external_receipts; receive_field_shingles_closing_intact_all_locations; receive_field_shingles_current_state; receive_field_shingles_native_unit; receive_field_shingles_exact_mass_bridge; receive_field_shingles_material_id; receive_field_shingles_sublocation_stock_evidence; issue_field_shingles_actual_quantity_kg; issue_field_shingles_event_id; issue_field_shingles_material_id; issue_field_shingles_state_id; issue_field_shingles_custodian_from; issue_field_shingles_custodian_to; issue_field_shingles_receiving_node; issue_field_shingles_handoff_evidence; receive_starter_cap_shingles_opening; receive_starter_cap_shingles_external_receipts; receive_starter_cap_shingles_closing_intact_all_locations; receive_starter_cap_shingles_current_state; receive_starter_cap_shingles_native_unit; receive_starter_cap_shingles_exact_mass_bridge; receive_starter_cap_shingles_material_id; receive_starter_cap_shingles_sublocation_stock_evidence; issue_starter_cap_shingles_actual_quantity_kg; issue_starter_cap_shingles_event_id; issue_starter_cap_shingles_material_id; issue_starter_cap_shingles_state_id; issue_starter_cap_shingles_custodian_from; issue_starter_cap_shingles_custodian_to; issue_starter_cap_shingles_receiving_node; issue_starter_cap_shingles_handoff_evidence; receive_roof_nails_opening; receive_roof_nails_external_receipts; receive_roof_nails_closing_intact_all_locations; receive_roof_nails_current_state; receive_roof_nails_native_unit; receive_roof_nails_exact_mass_bridge; receive_roof_nails_material_id; receive_roof_nails_sublocation_stock_evidence; issue_roof_nails_actual_quantity_kg; issue_roof_nails_event_id; issue_roof_nails_material_id; issue_roof_nails_state_id; issue_roof_nails_custodian_from; issue_roof_nails_custodian_to; issue_roof_nails_receiving_node; issue_roof_nails_handoff_evidence; receive_flashing_vent_components_opening; receive_flashing_vent_components_external_receipts; receive_flashing_vent_components_closing_intact_all_locations; receive_flashing_vent_components_current_state; receive_flashing_vent_components_native_unit; receive_flashing_vent_components_exact_mass_bridge; receive_flashing_vent_components_material_id; receive_flashing_vent_components_sublocation_stock_evidence; issue_flashing_vent_components_actual_quantity_kg; issue_flashing_vent_components_event_id; issue_flashing_vent_components_material_id; issue_flashing_vent_components_state_id; issue_flashing_vent_components_custodian_from; issue_flashing_vent_components_custodian_to; issue_flashing_vent_components_receiving_node; issue_flashing_vent_components_handoff_evidence; receive_asphalt_cement_opening; receive_asphalt_cement_external_receipts; receive_asphalt_cement_closing_intact_all_locations; receive_asphalt_cement_current_state; receive_asphalt_cement_native_unit; receive_asphalt_cement_exact_mass_bridge; receive_asphalt_cement_material_id; receive_asphalt_cement_sublocation_stock_evidence; issue_asphalt_cement_actual_quantity_kg; issue_asphalt_cement_event_id; issue_asphalt_cement_material_id; issue_asphalt_cement_state_id; issue_asphalt_cement_custodian_from; issue_asphalt_cement_custodian_to; issue_asphalt_cement_receiving_node; issue_asphalt_cement_handoff_evidence; receive_accessory_finish_opening; receive_accessory_finish_external_receipts; receive_accessory_finish_closing_intact_all_locations; receive_accessory_finish_current_state; receive_accessory_finish_native_unit; receive_accessory_finish_exact_mass_bridge; receive_accessory_finish_material_id; receive_accessory_finish_sublocation_stock_evidence; issue_accessory_finish_actual_quantity_kg; issue_accessory_finish_event_id; issue_accessory_finish_material_id; issue_accessory_finish_state_id; issue_accessory_finish_custodian_from; issue_accessory_finish_custodian_to; issue_accessory_finish_receiving_node; issue_accessory_finish_handoff_evidence; physical_interface_release_actual_geometry; physical_interface_release_surface_panel_ids; physical_interface_release_upstream_state; physical_interface_release_handoff_evidence; issue_packaging_underlay_edges_actual_mass_kg; issue_packaging_underlay_edges_material_composition; issue_packaging_underlay_edges_item_id; issue_packaging_underlay_edges_current_state; issue_packaging_underlay_edges_custody_event_id; issue_packaging_underlay_edges_recipient_node; issue_packaging_underlay_edges_upstream_dataset_boundary_evidence; issue_packaging_shingle_details_actual_mass_kg; issue_packaging_shingle_details_material_composition; issue_packaging_shingle_details_item_id; issue_packaging_shingle_details_current_state; issue_packaging_shingle_details_custody_event_id; issue_packaging_shingle_details_recipient_node; issue_packaging_shingle_details_upstream_dataset_boundary_evidence; issue_packaging_finish_accept_actual_mass_kg; issue_packaging_finish_accept_material_composition; issue_packaging_finish_accept_item_id; issue_packaging_finish_accept_current_state; issue_packaging_finish_accept_custody_event_id; issue_packaging_finish_accept_recipient_node; issue_packaging_finish_accept_upstream_dataset_boundary_evidence; survey_receive_opening_processed_wip_mass_kg; survey_receive_incoming_material_mass_kg; survey_receive_incoming_transfer_mass_kg; survey_receive_accepted_retained_mass_kg; survey_receive_next_handoff_mass_kg; survey_receive_closing_processed_wip_mass_kg; survey_receive_other_exclusive_transfer_mass_kg; survey_receive_installed_not_accepted_mass_kg; survey_receive_mass_balance_gap_kg; survey_receive_kg_bridge_evidence; survey_receive_water_pool_exclusivity_evidence; survey_receive_complete_component_schedule_evidence; survey_receive_mass_closure_evidence; survey_receive_water_closure_evidence; survey_receive_measurement_uncertainty_evidence; survey_receive_access_service_all_direct_assignments_total; survey_receive_access_service_direct_assignment_register_evidence; survey_receive_access_service_contract_idle_basis_evidence; survey_receive_incoming_assembly_component_mass_kg; survey_receive_outgoing_assembly_component_mass_kg; survey_receive_assembly_mass_view; survey_receive_component_mass_manifest_evidence; survey_receive_exclusive_fate_register_evidence | 根据项目设计及所安装产品说明，检查实际干燥木基层、紧固兼容性、坡度、穿出物、屋面几何和已由外部验收的节点接口。明确每个接口责任方。用校准质量测量或确切同ID换算证据核对各交付构件和包装台账。逐一签署发料及物理基层交接；接收拒收与可用流出分别保留证据。使用calc_survey_receive_material_closure及独立实测的整体或组成覆盖构件质量清单闭合本节点物理材料台账，排除观测性木基层/Area接口。给每个含材料/水的物理部分指定唯一去向；保留有符号且无法解释的闭合差额和不确定性。按唯一物理事件去除电子副本，保留独立的真实重复作业。按实际身份/状态/期间汇总物理分子，再除以最终正且唯一的A一次。观测性接口面积不承担新增基层制造。复合整体与组成子项使用互斥汇总视图。  既有基层几何及签字放行只作为观测/验收记录，不是产品库存交换。deck_interface、physical_interface_release、physical_interface_construction_feed仅为保留的观测账务键；其原始字段和calc规则继续测量唯一表面ID、实际面积、状态及相邻责任门槛。issue_*原材料角色键是逐SKU/状态的交接子账；条件交接卡按实际具体交换分别展开，不生成混合材料固定UUID，不合并不同材料的计量值。| 声明的原始单位；物理质量kg、几何m2、供电kWh及服务h分别记录，换算前须有确切同ID/当前状态换算桥。 | 每次实际接收、发料、安装作业、纠正、废物/可用流出、电表边界、库存闭合及状态验收时记录；保留全部事件及纠正沿袭。 | 从本节点首个批次事件到最后可归属纠正、库存/在制品闭合及最终屋面验收的所有实际期间；保留日期和未完成关口状态。 | 由survey_receive操作的明确屋面/场址、批次、实际表面ID和保管子地点；关联外部供应方/接收方及全部合格共用消费者，不导入其他节点数量。 | per reference flow | 签署实际产品/设计及接口修订；校准仪器及确切换算桥；供应商接收/发料；匹配保管；按材料拆分废物凭证；实际电表拓扑/服务合同及完整消费者名册；竣工关口照片/签字、水/质量闭合及纠正历史。保留独立转入/交出组件质量kg、互斥整体或组成视图、材料去向责任及有符号闭合诊断；最终留存覆盖质量不是第二个客户输出。 |
| cp_underlay_edges | underlay_edges | underlay; edge_metal; underlay_fixings; underlay_ready_roof; underlay_waste; underlay_direct_release; underlay_unused_return; underlay_edges_electricity; underlay_edges_access_service; underlay_edges_packaging_feed | 单节点带时间的物理观测、库存、保管、电表、处置及验收关口记录 | lot_id; node_id; event_id; timestamp_start; timestamp_end; material_id; state_id; custodian_from; custodian_to; surface_or_panel_id; acceptance_status; evidence_ref; period_id; phase_id; revision_event_id; superseded_record_id; actual_rework_event_id; rework_source_node; rework_destination_node; defect_state; disposition; rework_quantity; measurement_unit; component_schedule_ref; product_instructions_ref; design_revision_ref; source_boundary_ref; surface_state_manifest_ref; unique_measurement_id; directed_transfer_id; actual_absence_evidence; allocation_decision_id; allocation_consumer_register_ref; water_fate_register_ref; underlay_received_quantity_kg; underlay_source_issue_id; underlay_material_id; underlay_state_id; underlay_custody_evidence; edge_metal_received_quantity_kg; edge_metal_source_issue_id; edge_metal_material_id; edge_metal_state_id; edge_metal_custody_evidence; underlay_fixings_received_quantity_kg; underlay_fixings_source_issue_id; underlay_fixings_material_id; underlay_fixings_state_id; underlay_fixings_custody_evidence; underlay_ready_roof_actual_quantity; underlay_ready_roof_native_unit; underlay_ready_roof_mass_or_geometry_bridge; underlay_ready_roof_actual_state; underlay_ready_roof_measured_absence_evidence; underlay_ready_roof_destination; underlay_waste_actual_quantity; underlay_waste_native_unit; underlay_waste_mass_or_geometry_bridge; underlay_waste_actual_state; underlay_waste_measured_absence_evidence; underlay_waste_destination; underlay_direct_release_actual_quantity; underlay_direct_release_native_unit; underlay_direct_release_mass_or_geometry_bridge; underlay_direct_release_actual_state; underlay_direct_release_measured_absence_evidence; underlay_direct_release_destination; underlay_direct_release_substance; underlay_direct_release_medium; underlay_direct_release_direction; underlay_direct_release_sampling_method; underlay_direct_release_formulation_or_dust_composition; underlay_direct_release_capture_fraction_evidence; underlay_unused_return_actual_quantity; underlay_unused_return_native_unit; underlay_unused_return_mass_or_geometry_bridge; underlay_unused_return_actual_state; underlay_unused_return_measured_absence_evidence; underlay_unused_return_destination; underlay_edges_electricity_meter_id; underlay_edges_electricity_meter_start; underlay_edges_electricity_meter_end; underlay_edges_electricity_unit_factor; underlay_edges_electricity_meter_parent; underlay_edges_electricity_inside_master_direct_total; underlay_edges_electricity_outside_master_direct_total; underlay_edges_electricity_master_total; underlay_edges_electricity_consumer_weight; underlay_edges_electricity_all_eligible_weights; underlay_edges_electricity_period; underlay_edges_electricity_topology_evidence; underlay_edges_access_service_asset_id; underlay_edges_access_service_period_start; underlay_edges_access_service_period_end; underlay_edges_access_service_billed_quantity; underlay_edges_access_service_actual_service_quantity; underlay_edges_access_service_owned_idle; underlay_edges_access_service_consumer_weight; underlay_edges_access_service_all_eligible_weights; underlay_edges_access_service_assignment_evidence; physical_interface_construction_feed_actual_geometry; physical_interface_construction_feed_surface_panel_ids; physical_interface_construction_feed_upstream_state; physical_interface_construction_feed_handoff_evidence; underlay_edges_packaging_feed_actual_mass_kg; underlay_edges_packaging_feed_source_issue_id; underlay_edges_packaging_feed_material_composition; underlay_edges_packaging_feed_current_state; underlay_edges_packaging_feed_custody_event_id; underlay_edges_opening_processed_wip_mass_kg; underlay_edges_incoming_material_mass_kg; underlay_edges_incoming_transfer_mass_kg; underlay_edges_accepted_retained_mass_kg; underlay_edges_next_handoff_mass_kg; underlay_edges_closing_processed_wip_mass_kg; underlay_edges_other_exclusive_transfer_mass_kg; underlay_edges_installed_not_accepted_mass_kg; underlay_edges_mass_balance_gap_kg; underlay_edges_kg_bridge_evidence; underlay_edges_water_pool_exclusivity_evidence; underlay_edges_complete_component_schedule_evidence; underlay_edges_mass_closure_evidence; underlay_edges_water_closure_evidence; underlay_edges_measurement_uncertainty_evidence; underlay_edges_access_service_all_direct_assignments_total; underlay_edges_access_service_direct_assignment_register_evidence; underlay_edges_access_service_contract_idle_basis_evidence; underlay_edges_incoming_assembly_component_mass_kg; underlay_edges_outgoing_assembly_component_mass_kg; underlay_edges_assembly_mass_view; underlay_edges_component_mass_manifest_evidence; underlay_edges_exclusive_fate_register_evidence | 将物理基层释放及各材料发料与实际接收匹配。记录该屋面规定的层次、渗漏屏障位置、搭接、边部顺序和紧固/密封作业。计量本节点实际安装数量、裁切、揭除衬层及包装。在将已铺垫层表面交给铺瓦节点前检查隐蔽接口，记录并保留每次纠正。使用calc_underlay_edges_material_closure及独立实测的整体或组成覆盖构件质量清单闭合本节点物理材料台账，排除观测性木基层/Area接口。给每个含材料/水的物理部分指定唯一去向；保留有符号且无法解释的闭合差额和不确定性。按唯一物理事件去除电子副本，保留独立的真实重复作业。按实际身份/状态/期间汇总物理分子，再除以最终正且唯一的A一次。观测性接口面积不承担新增基层制造。复合整体与组成子项使用互斥汇总视图。  既有基层几何及签字放行只作为观测/验收记录，不是产品库存交换。deck_interface、physical_interface_release、physical_interface_construction_feed仅为保留的观测账务键；其原始字段和calc规则继续测量唯一表面ID、实际面积、状态及相邻责任门槛。issue_*原材料角色键是逐SKU/状态的交接子账；条件交接卡按实际具体交换分别展开，不生成混合材料固定UUID，不合并不同材料的计量值。| 声明的原始单位；物理质量kg、几何m2、供电kWh及服务h分别记录，换算前须有确切同ID/当前状态换算桥。 | 每次实际接收、发料、安装作业、纠正、废物/可用流出、电表边界、库存闭合及状态验收时记录；保留全部事件及纠正沿袭。 | 从本节点首个批次事件到最后可归属纠正、库存/在制品闭合及最终屋面验收的所有实际期间；保留日期和未完成关口状态。 | 由underlay_edges操作的明确屋面/场址、批次、实际表面ID和保管子地点；关联外部供应方/接收方及全部合格共用消费者，不导入其他节点数量。 | per reference flow | 签署实际产品/设计及接口修订；校准仪器及确切换算桥；供应商接收/发料；匹配保管；按材料拆分废物凭证；实际电表拓扑/服务合同及完整消费者名册；竣工关口照片/签字、水/质量闭合及纠正历史。保留独立转入/交出组件质量kg、互斥整体或组成视图、材料去向责任及有符号闭合诊断；最终留存覆盖质量不是第二个客户输出。 |
| cp_shingle_details | shingle_details | roof_feed; field_shingles; starter_cap_shingles; roof_nails; flashing_vent_components; asphalt_cement; installed_roof; shingle_waste; shingle_direct_release; shingle_unused_return; shingle_details_electricity; shingle_details_access_service; shingle_details_packaging_feed | 单节点带时间的物理观测、库存、保管、电表、处置及验收关口记录 | lot_id; node_id; event_id; timestamp_start; timestamp_end; material_id; state_id; custodian_from; custodian_to; surface_or_panel_id; acceptance_status; evidence_ref; period_id; phase_id; revision_event_id; superseded_record_id; actual_rework_event_id; rework_source_node; rework_destination_node; defect_state; disposition; rework_quantity; measurement_unit; component_schedule_ref; product_instructions_ref; design_revision_ref; source_boundary_ref; surface_state_manifest_ref; unique_measurement_id; directed_transfer_id; actual_absence_evidence; allocation_decision_id; allocation_consumer_register_ref; water_fate_register_ref; roof_feed_actual_quantity; roof_feed_native_unit; roof_feed_mass_or_geometry_bridge; roof_feed_actual_state; roof_feed_measured_absence_evidence; roof_feed_destination; field_shingles_received_quantity_kg; field_shingles_source_issue_id; field_shingles_material_id; field_shingles_state_id; field_shingles_custody_evidence; starter_cap_shingles_received_quantity_kg; starter_cap_shingles_source_issue_id; starter_cap_shingles_material_id; starter_cap_shingles_state_id; starter_cap_shingles_custody_evidence; roof_nails_received_quantity_kg; roof_nails_source_issue_id; roof_nails_material_id; roof_nails_state_id; roof_nails_custody_evidence; flashing_vent_components_received_quantity_kg; flashing_vent_components_source_issue_id; flashing_vent_components_material_id; flashing_vent_components_state_id; flashing_vent_components_custody_evidence; asphalt_cement_received_quantity_kg; asphalt_cement_source_issue_id; asphalt_cement_material_id; asphalt_cement_state_id; asphalt_cement_custody_evidence; installed_roof_actual_quantity; installed_roof_native_unit; installed_roof_mass_or_geometry_bridge; installed_roof_actual_state; installed_roof_measured_absence_evidence; installed_roof_destination; shingle_waste_actual_quantity; shingle_waste_native_unit; shingle_waste_mass_or_geometry_bridge; shingle_waste_actual_state; shingle_waste_measured_absence_evidence; shingle_waste_destination; shingle_direct_release_actual_quantity; shingle_direct_release_native_unit; shingle_direct_release_mass_or_geometry_bridge; shingle_direct_release_actual_state; shingle_direct_release_measured_absence_evidence; shingle_direct_release_destination; shingle_direct_release_substance; shingle_direct_release_medium; shingle_direct_release_direction; shingle_direct_release_sampling_method; shingle_direct_release_formulation_or_dust_composition; shingle_direct_release_capture_fraction_evidence; shingle_unused_return_actual_quantity; shingle_unused_return_native_unit; shingle_unused_return_mass_or_geometry_bridge; shingle_unused_return_actual_state; shingle_unused_return_measured_absence_evidence; shingle_unused_return_destination; shingle_details_electricity_meter_id; shingle_details_electricity_meter_start; shingle_details_electricity_meter_end; shingle_details_electricity_unit_factor; shingle_details_electricity_meter_parent; shingle_details_electricity_inside_master_direct_total; shingle_details_electricity_outside_master_direct_total; shingle_details_electricity_master_total; shingle_details_electricity_consumer_weight; shingle_details_electricity_all_eligible_weights; shingle_details_electricity_period; shingle_details_electricity_topology_evidence; shingle_details_access_service_asset_id; shingle_details_access_service_period_start; shingle_details_access_service_period_end; shingle_details_access_service_billed_quantity; shingle_details_access_service_actual_service_quantity; shingle_details_access_service_owned_idle; shingle_details_access_service_consumer_weight; shingle_details_access_service_all_eligible_weights; shingle_details_access_service_assignment_evidence; shingle_details_packaging_feed_actual_mass_kg; shingle_details_packaging_feed_source_issue_id; shingle_details_packaging_feed_material_composition; shingle_details_packaging_feed_current_state; shingle_details_packaging_feed_custody_event_id; shingle_details_opening_processed_wip_mass_kg; shingle_details_incoming_material_mass_kg; shingle_details_incoming_transfer_mass_kg; shingle_details_accepted_retained_mass_kg; shingle_details_next_handoff_mass_kg; shingle_details_closing_processed_wip_mass_kg; shingle_details_other_exclusive_transfer_mass_kg; shingle_details_installed_not_accepted_mass_kg; shingle_details_mass_balance_gap_kg; shingle_details_kg_bridge_evidence; shingle_details_water_pool_exclusivity_evidence; shingle_details_complete_component_schedule_evidence; shingle_details_mass_closure_evidence; shingle_details_water_closure_evidence; shingle_details_measurement_uncertainty_evidence; shingle_details_access_service_all_direct_assignments_total; shingle_details_access_service_direct_assignment_register_evidence; shingle_details_access_service_contract_idle_basis_evidence; shingle_details_incoming_assembly_component_mass_kg; shingle_details_outgoing_assembly_component_mass_kg; shingle_details_assembly_mass_view; shingle_details_component_mass_manifest_evidence; shingle_details_exclusive_fate_register_evidence | 匹配已铺垫层表面及构件发料，记录大面排布、裁切、起始/脊瓦来源、实际钉规格及钉固、天沟、墙/烟囱/穿出部位泛水及自有通风配件。按需记录胶泥/手工密封施用。由大面瓦裁出的脊瓦保留在原库存台账中。捕集废物与实际未捕集物种排放分开采集，保留每次返工事件。使用calc_shingle_details_material_closure及独立实测的整体或组成覆盖构件质量清单闭合本节点物理材料台账，排除观测性木基层/Area接口。给每个含材料/水的物理部分指定唯一去向；保留有符号且无法解释的闭合差额和不确定性。按唯一物理事件去除电子副本，保留独立的真实重复作业。按实际身份/状态/期间汇总物理分子，再除以最终正且唯一的A一次。观测性接口面积不承担新增基层制造。复合整体与组成子项使用互斥汇总视图。 | 声明的原始单位；物理质量kg、几何m2、供电kWh及服务h分别记录，换算前须有确切同ID/当前状态换算桥。 | 每次实际接收、发料、安装作业、纠正、废物/可用流出、电表边界、库存闭合及状态验收时记录；保留全部事件及纠正沿袭。 | 从本节点首个批次事件到最后可归属纠正、库存/在制品闭合及最终屋面验收的所有实际期间；保留日期和未完成关口状态。 | 由shingle_details操作的明确屋面/场址、批次、实际表面ID和保管子地点；关联外部供应方/接收方及全部合格共用消费者，不导入其他节点数量。 | per reference flow | 签署实际产品/设计及接口修订；校准仪器及确切换算桥；供应商接收/发料；匹配保管；按材料拆分废物凭证；实际电表拓扑/服务合同及完整消费者名册；竣工关口照片/签字、水/质量闭合及纠正历史。保留独立转入/交出组件质量kg、互斥整体或组成视图、材料去向责任及有符号闭合诊断；最终留存覆盖质量不是第二个客户输出。 |
| cp_finish_accept | finish_accept | finish_roof_feed; accessory_finish; finish_water; finish_waste; finish_wastewater; finish_water_vapour; finish_other_release; finish_unused_return; accepted_roof_service; finish_accept_electricity; finish_accept_access_service; finish_accept_packaging_feed | 单节点带时间的物理观测、库存、保管、电表、处置及验收关口记录 | lot_id; node_id; event_id; timestamp_start; timestamp_end; material_id; state_id; custodian_from; custodian_to; surface_or_panel_id; acceptance_status; evidence_ref; period_id; phase_id; revision_event_id; superseded_record_id; actual_rework_event_id; rework_source_node; rework_destination_node; defect_state; disposition; rework_quantity; measurement_unit; component_schedule_ref; product_instructions_ref; design_revision_ref; source_boundary_ref; surface_state_manifest_ref; unique_measurement_id; directed_transfer_id; actual_absence_evidence; allocation_decision_id; allocation_consumer_register_ref; water_fate_register_ref; finish_roof_feed_actual_quantity; finish_roof_feed_native_unit; finish_roof_feed_mass_or_geometry_bridge; finish_roof_feed_actual_state; finish_roof_feed_measured_absence_evidence; finish_roof_feed_destination; accessory_finish_received_quantity_kg; accessory_finish_source_issue_id; accessory_finish_material_id; accessory_finish_state_id; accessory_finish_custody_evidence; finish_water_opening; finish_water_receipts; finish_water_closing_intact; finish_water_native_unit; finish_water_native_quantity; finish_water_actual_mass_factor; finish_water_factor_state_evidence; finish_waste_actual_quantity; finish_waste_native_unit; finish_waste_mass_or_geometry_bridge; finish_waste_actual_state; finish_waste_measured_absence_evidence; finish_waste_destination; finish_wastewater_actual_quantity; finish_wastewater_native_unit; finish_wastewater_mass_or_geometry_bridge; finish_wastewater_actual_state; finish_wastewater_measured_absence_evidence; finish_wastewater_destination; finish_water_vapour_actual_quantity; finish_water_vapour_native_unit; finish_water_vapour_mass_or_geometry_bridge; finish_water_vapour_actual_state; finish_water_vapour_measured_absence_evidence; finish_water_vapour_destination; finish_water_vapour_gross_fresh_water; finish_water_vapour_unused_fresh_exit; finish_water_vapour_received_process_water; finish_water_vapour_formulation_water; finish_water_vapour_opening_processed_water; finish_water_vapour_next_handoff_water; finish_water_vapour_retained_bound_water; finish_water_vapour_retained_free_water; finish_water_vapour_solid_waste_water; finish_water_vapour_liquid_waste_water; finish_water_vapour_direct_liquid_release_water; finish_water_vapour_closing_processed_wip_water; finish_water_vapour_other_exclusive_transfer_water; finish_water_vapour_validated_evaporation_evidence; finish_other_release_actual_quantity; finish_other_release_native_unit; finish_other_release_mass_or_geometry_bridge; finish_other_release_actual_state; finish_other_release_measured_absence_evidence; finish_other_release_destination; finish_other_release_substance; finish_other_release_medium; finish_other_release_direction; finish_other_release_sampling_method; finish_other_release_formulation_or_dust_composition; finish_other_release_capture_fraction_evidence; finish_unused_return_actual_quantity; finish_unused_return_native_unit; finish_unused_return_mass_or_geometry_bridge; finish_unused_return_actual_state; finish_unused_return_measured_absence_evidence; finish_unused_return_destination; accepted_a; accepted_geometry_records; accepted_unique_ids; excluded_openings; final_gate_evidence; finish_accept_electricity_meter_id; finish_accept_electricity_meter_start; finish_accept_electricity_meter_end; finish_accept_electricity_unit_factor; finish_accept_electricity_meter_parent; finish_accept_electricity_inside_master_direct_total; finish_accept_electricity_outside_master_direct_total; finish_accept_electricity_master_total; finish_accept_electricity_consumer_weight; finish_accept_electricity_all_eligible_weights; finish_accept_electricity_period; finish_accept_electricity_topology_evidence; finish_accept_access_service_asset_id; finish_accept_access_service_period_start; finish_accept_access_service_period_end; finish_accept_access_service_billed_quantity; finish_accept_access_service_actual_service_quantity; finish_accept_access_service_owned_idle; finish_accept_access_service_consumer_weight; finish_accept_access_service_all_eligible_weights; finish_accept_access_service_assignment_evidence; finish_accept_packaging_feed_actual_mass_kg; finish_accept_packaging_feed_source_issue_id; finish_accept_packaging_feed_material_composition; finish_accept_packaging_feed_current_state; finish_accept_packaging_feed_custody_event_id; finish_accept_opening_processed_wip_mass_kg; finish_accept_incoming_material_mass_kg; finish_accept_incoming_transfer_mass_kg; finish_accept_accepted_retained_mass_kg; finish_accept_next_handoff_mass_kg; finish_accept_closing_processed_wip_mass_kg; finish_accept_other_exclusive_transfer_mass_kg; finish_accept_installed_not_accepted_mass_kg; finish_accept_mass_balance_gap_kg; finish_accept_kg_bridge_evidence; finish_accept_water_pool_exclusivity_evidence; finish_accept_complete_component_schedule_evidence; finish_accept_mass_closure_evidence; finish_accept_water_closure_evidence; finish_accept_measurement_uncertainty_evidence; finish_accept_access_service_all_direct_assignments_total; finish_accept_access_service_direct_assignment_register_evidence; finish_accept_access_service_contract_idle_basis_evidence; finish_water_vapour_unused_fresh_exit_component_register; finish_water_vapour_received_assembly_water_evidence; finish_water_vapour_own_formulation_water_evidence; finish_water_vapour_pool_owner_exclusivity_evidence; finish_accept_incoming_assembly_water_mass_kg; finish_accept_incoming_assembly_component_mass_kg; finish_accept_outgoing_assembly_component_mass_kg; finish_accept_assembly_mass_view; finish_accept_component_mass_manifest_evidence; finish_accept_exclusive_fate_register_evidence | 匹配已安装表面、饰面材料发料及随料包装。仅记录实际规定的涂装或清理作业及直接新鲜水供应。在实际等待/保护时段后检查所需密封状态、排水连续性、节点完成及自有通风接口。计量所有废物、未用流出和水去向；只有声明验收关口满足后才能签署最终验收。使用calc_finish_accept_material_closure及独立实测的整体或组成覆盖构件质量清单闭合本节点物理材料台账，排除观测性木基层/Area接口。给每个含材料/水的物理部分指定唯一去向；保留有符号且无法解释的闭合差额和不确定性。按唯一物理事件去除电子副本，保留独立的真实重复作业。按实际身份/状态/期间汇总物理分子，再除以最终正且唯一的A一次。观测性接口面积不承担新增基层制造。复合整体与组成子项使用互斥汇总视图。 | 声明的原始单位；物理质量kg、几何m2、供电kWh及服务h分别记录，换算前须有确切同ID/当前状态换算桥。 | 每次实际接收、发料、安装作业、纠正、废物/可用流出、电表边界、库存闭合及状态验收时记录；保留全部事件及纠正沿袭。 | 从本节点首个批次事件到最后可归属纠正、库存/在制品闭合及最终屋面验收的所有实际期间；保留日期和未完成关口状态。 | 由finish_accept操作的明确屋面/场址、批次、实际表面ID和保管子地点；关联外部供应方/接收方及全部合格共用消费者，不导入其他节点数量。 | per reference flow | 签署实际产品/设计及接口修订；校准仪器及确切换算桥；供应商接收/发料；匹配保管；按材料拆分废物凭证；实际电表拓扑/服务合同及完整消费者名册；竣工关口照片/签字、水/质量闭合及纠正历史。保留独立转入/交出组件质量kg、互斥整体或组成视图、材料去向责任及有符号闭合诊断；最终留存覆盖质量不是第二个客户输出。 |

计算Inputs将原始字段声明为raw:<field>、协议背景为cp:<protocol>、跨节点分母为symbol:A。A由cp_finish_accept的accepted_a、accepted_geometry_records、accepted_unique_ids、excluded_openings及final_gate_evidence计量，不是假定常量。卡片计算内未加前缀的字段后缀（如meter_end、consumer_weight或source_issue_id）表示Inputs中该流卡确切row_id前缀字段，前缀不是新变量。“直接归属”和“合格”描述由已列拓扑/归属证据及完整消费者名册证明的子集，不是虚构数量。除normalized_accepted_roof_service外，actual_<row_id>计算输出均为物理分子。来源发料可以作为核对依赖，但不能替代接收节点独立测量。

以下四项本节点计算规则闭合材料。九类暂存构件毛领用及接收包装分别核对至实测接收发料、实际接收废物、可用流出及互斥在制品/其他去向。下游节点按完整构件清单或实测整体复合视图独立计量接收和交出的已安装覆盖构件质量kg，两种视图不得相加。木基层和屋面状态Area交接仍为观测几何，不提供kg。随下次组件交接携带的留存材料不同时计验收留存。最终关口的验收留存覆盖质量是闭合去向，不是在面积服务之外额外客户质量输出。已安装未验收质量是期末已加工在制品子集。投入配方/组件中的水已属于其物理质量，不重新采购。未闭合或负差额保留为有符号缺口，不是推定排放。

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_deck_interface | survey_receive / 观测验收记录 (deck_interface) | actual_deck_interface = 实测deck_interface_actual_quantity，使用记录的几何换算桥换算为m2，按唯一表面ID、状态和有方向交接核对。不得汇总同一状态的重复测量或用最终A替换实测内部面积。返工保留实际负担，最终唯一面积仅计一次。输出是物理面积分子。 | raw:deck_interface_actual_quantity; raw:deck_interface_native_unit; raw:deck_interface_mass_or_geometry_bridge; raw:deck_interface_actual_state; raw:deck_interface_measured_absence_evidence; raw:deck_interface_destination; cp:cp_survey_receive; symbol:A | actual_deck_interface |  |
| calc_receive_packaging | survey_receive / receive_packaging | actual_receive_packaging = receive_packaging_opening + receive_packaging_receipts - receive_packaging_closing_intact；各项先根据确切原单位数量、actual_mass_factor和factor_state_evidence换算成kg。未领用完整库存只扣一次，实际U/X流出保留在毛领用内。输出是物理分子而非强度。 | raw:receive_packaging_opening; raw:receive_packaging_receipts; raw:receive_packaging_closing_intact; raw:receive_packaging_native_unit; raw:receive_packaging_native_quantity; raw:receive_packaging_actual_mass_factor; raw:receive_packaging_factor_state_evidence; cp:cp_survey_receive; symbol:A | actual_receive_packaging |  |
| calc_receive_reject | survey_receive / receive_reject | actual_receive_reject = sum(receive_reject_actual_quantity)，按唯一实际事件汇总，先用native_unit和mass_or_geometry_bridge按确切身份/状态换算为kg。保留actual_state、destination及measured_absence_evidence；发生或数量未知则保留缺口。保留组成、含水量、接收方及实际去向；丢弃材料区别于可用退回及直接环境排放。 | raw:receive_reject_actual_quantity; raw:receive_reject_native_unit; raw:receive_reject_mass_or_geometry_bridge; raw:receive_reject_actual_state; raw:receive_reject_measured_absence_evidence; raw:receive_reject_destination; cp:cp_survey_receive; symbol:A | actual_receive_reject |  |
| calc_receive_packaging_waste | survey_receive / receive_packaging_waste | actual_receive_packaging_waste = sum(receive_packaging_waste_actual_quantity)，按唯一实际事件汇总，先用native_unit和mass_or_geometry_bridge按确切身份/状态换算为kg。保留actual_state、destination及measured_absence_evidence；发生或数量未知则保留缺口。保留组成、含水量、接收方及实际去向；丢弃材料区别于可用退回及直接环境排放。 | raw:receive_packaging_waste_actual_quantity; raw:receive_packaging_waste_native_unit; raw:receive_packaging_waste_mass_or_geometry_bridge; raw:receive_packaging_waste_actual_state; raw:receive_packaging_waste_measured_absence_evidence; raw:receive_packaging_waste_destination; cp:cp_survey_receive; symbol:A | actual_receive_packaging_waste |  |
| calc_receive_unused_return | survey_receive / receive_unused_return | actual_receive_unused_return = sum(receive_unused_return_actual_quantity)，按唯一实际事件汇总，先用native_unit和mass_or_geometry_bridge按确切身份/状态换算为kg。保留actual_state、destination及measured_absence_evidence；发生或数量未知则保留缺口。将可用退回U和可用外部转移X拆为互斥正向保管流出，排除未领用完整库存、留存、废物及已加工在制品。仅转移有证据的原态未用材料上游负担；施工、服务和返工负担保留在本屋面批次。无避免生产信用或第二次负扣除。 | raw:receive_unused_return_actual_quantity; raw:receive_unused_return_native_unit; raw:receive_unused_return_mass_or_geometry_bridge; raw:receive_unused_return_actual_state; raw:receive_unused_return_measured_absence_evidence; raw:receive_unused_return_destination; cp:cp_survey_receive; symbol:A | actual_receive_unused_return |  |
| calc_survey_receive_electricity | survey_receive / survey_receive_electricity | actual_survey_receive_electricity = 直接归属的实际换算电表差值 + 合格的正向已核对主表剩余量份额。每项差值 = (meter_end - meter_start) * unit_factor，使用实际期间。剩余量 = 已换算master_total - inside_master_direct_total；主表内每个已直接分配消费者均须扣除一次。记录outside_master_direct_total，但不得从该主表扣除。若剩余量为零，无需权重。若剩余量为正，份额 = 剩余量 * consumer_weight / all_eligible_weights，须有完整合格消费者名册及正权重/分母。负或未知剩余量须纠正并保留为缺口。输出为物理kWh，仅在流卡处归一化。 | raw:survey_receive_electricity_meter_id; raw:survey_receive_electricity_meter_start; raw:survey_receive_electricity_meter_end; raw:survey_receive_electricity_unit_factor; raw:survey_receive_electricity_meter_parent; raw:survey_receive_electricity_inside_master_direct_total; raw:survey_receive_electricity_outside_master_direct_total; raw:survey_receive_electricity_master_total; raw:survey_receive_electricity_consumer_weight; raw:survey_receive_electricity_all_eligible_weights; raw:survey_receive_electricity_period; raw:survey_receive_electricity_topology_evidence; cp:cp_survey_receive; symbol:A | actual_survey_receive_electricity |  |
| calc_survey_receive_access_service | survey_receive / survey_receive_access_service | actual_survey_receive_access_service = survey_receive_access_service_actual_service_quantity + 合格剩余量份额；直接分配的survey_receive_access_service_actual_service_quantity是本节点/批次/期间消费者实际合同直接归属量。剩余量 = survey_receive_access_service_billed_quantity - survey_receive_access_service_all_direct_assignments_total；后者为同一供应方/资产/合同/服务期间边界内所有实际直接分配消费者之和，各计一次，由survey_receive_access_service_direct_assignment_register_evidence证明。剩余量 = 0时，分配的剩余份额 = 0，无需权重。剩余量 > 0时，剩余份额 = 剩余量 * survey_receive_access_service_consumer_weight / survey_receive_access_service_all_eligible_weights，须使用完整实际合格消费者名册及有证据支持的正权重/分母。负或未知剩余量是未解决归属缺口，不得强制置零或视为排放。直接分配和剩余份额合计将实际计费服务核对一次。survey_receive_access_service_owned_idle依survey_receive_access_service_contract_idle_basis_evidence只纳入适用直接分配或剩余计费可用量一次，不再额外添加h。保留实际period_start/period_end、供应方/资产及服务范围。不得用人工工时、假定班次、寿命或年化代理。输出为实际物理h，仅在流卡处除以A一次。 | raw:survey_receive_access_service_asset_id; raw:survey_receive_access_service_period_start; raw:survey_receive_access_service_period_end; raw:survey_receive_access_service_billed_quantity; raw:survey_receive_access_service_actual_service_quantity; raw:survey_receive_access_service_owned_idle; raw:survey_receive_access_service_consumer_weight; raw:survey_receive_access_service_all_eligible_weights; raw:survey_receive_access_service_assignment_evidence; raw:survey_receive_access_service_all_direct_assignments_total; raw:survey_receive_access_service_direct_assignment_register_evidence; raw:survey_receive_access_service_contract_idle_basis_evidence; cp:cp_survey_receive; symbol:A | actual_survey_receive_access_service |  |
| calc_underlay | underlay_edges / underlay | actual_underlay = sum(underlay_received_quantity_kg)，按唯一来源发料ID汇总，与issue_underlay及同材料/状态/保管信息匹配。此内部物理分子在本节点废物、未用流出或留存之前记录。仅携带既有上游负担一次，不新增外部采购或二次库存扣除。 | raw:underlay_received_quantity_kg; raw:underlay_source_issue_id; raw:underlay_material_id; raw:underlay_state_id; raw:underlay_custody_evidence; cp:cp_underlay_edges; symbol:A | actual_underlay |  |
| calc_edge_metal | underlay_edges / edge_metal | actual_edge_metal = sum(edge_metal_received_quantity_kg)，按唯一来源发料ID汇总，与issue_edge_metal及同材料/状态/保管信息匹配。此内部物理分子在本节点废物、未用流出或留存之前记录。仅携带既有上游负担一次，不新增外部采购或二次库存扣除。 | raw:edge_metal_received_quantity_kg; raw:edge_metal_source_issue_id; raw:edge_metal_material_id; raw:edge_metal_state_id; raw:edge_metal_custody_evidence; cp:cp_underlay_edges; symbol:A | actual_edge_metal |  |
| calc_underlay_fixings | underlay_edges / underlay_fixings | actual_underlay_fixings = sum(underlay_fixings_received_quantity_kg)，按唯一来源发料ID汇总，与issue_underlay_fixings及同材料/状态/保管信息匹配。此内部物理分子在本节点废物、未用流出或留存之前记录。仅携带既有上游负担一次，不新增外部采购或二次库存扣除。 | raw:underlay_fixings_received_quantity_kg; raw:underlay_fixings_source_issue_id; raw:underlay_fixings_material_id; raw:underlay_fixings_state_id; raw:underlay_fixings_custody_evidence; cp:cp_underlay_edges; symbol:A | actual_underlay_fixings |  |
| calc_underlay_ready_roof | underlay_edges / underlay_ready_roof | actual_underlay_ready_roof = 实测underlay_ready_roof_actual_quantity，使用记录的几何换算桥换算为m2，按唯一表面ID、状态和有方向交接核对。不得汇总同一状态的重复测量或用最终A替换实测内部面积。返工保留实际负担，最终唯一面积仅计一次。输出是物理面积分子。 | raw:underlay_ready_roof_actual_quantity; raw:underlay_ready_roof_native_unit; raw:underlay_ready_roof_mass_or_geometry_bridge; raw:underlay_ready_roof_actual_state; raw:underlay_ready_roof_measured_absence_evidence; raw:underlay_ready_roof_destination; cp:cp_underlay_edges; symbol:A | actual_underlay_ready_roof |  |
| calc_underlay_waste | underlay_edges / underlay_waste | actual_underlay_waste = sum(underlay_waste_actual_quantity)，按唯一实际事件汇总，先用native_unit和mass_or_geometry_bridge按确切身份/状态换算为kg。保留actual_state、destination及measured_absence_evidence；发生或数量未知则保留缺口。保留组成、含水量、接收方及实际去向；丢弃材料区别于可用退回及直接环境排放。 | raw:underlay_waste_actual_quantity; raw:underlay_waste_native_unit; raw:underlay_waste_mass_or_geometry_bridge; raw:underlay_waste_actual_state; raw:underlay_waste_measured_absence_evidence; raw:underlay_waste_destination; cp:cp_underlay_edges; symbol:A | actual_underlay_waste |  |
| calc_underlay_direct_release | underlay_edges / underlay_direct_release | actual_underlay_direct_release = sum(underlay_direct_release_actual_quantity)，按唯一实际事件汇总，先用native_unit和mass_or_geometry_bridge按确切身份/状态换算为kg。保留actual_state、destination及measured_absence_evidence；发生或数量未知则保留缺口。对每个真实交换明确substance、接收medium、direction、sampling_method及配方/粉尘基准。使用capture_fraction_evidence区分捕集废物与未捕集直接排放；无法解释的质量差额不是排放。 | raw:underlay_direct_release_actual_quantity; raw:underlay_direct_release_native_unit; raw:underlay_direct_release_mass_or_geometry_bridge; raw:underlay_direct_release_actual_state; raw:underlay_direct_release_measured_absence_evidence; raw:underlay_direct_release_destination; raw:underlay_direct_release_substance; raw:underlay_direct_release_medium; raw:underlay_direct_release_direction; raw:underlay_direct_release_sampling_method; raw:underlay_direct_release_formulation_or_dust_composition; raw:underlay_direct_release_capture_fraction_evidence; cp:cp_underlay_edges; symbol:A | actual_underlay_direct_release |  |
| calc_underlay_unused_return | underlay_edges / underlay_unused_return | actual_underlay_unused_return = sum(underlay_unused_return_actual_quantity)，按唯一实际事件汇总，先用native_unit和mass_or_geometry_bridge按确切身份/状态换算为kg。保留actual_state、destination及measured_absence_evidence；发生或数量未知则保留缺口。将可用退回U和可用外部转移X拆为互斥正向保管流出，排除未领用完整库存、留存、废物及已加工在制品。仅转移有证据的原态未用材料上游负担；施工、服务和返工负担保留在本屋面批次。无避免生产信用或第二次负扣除。 | raw:underlay_unused_return_actual_quantity; raw:underlay_unused_return_native_unit; raw:underlay_unused_return_mass_or_geometry_bridge; raw:underlay_unused_return_actual_state; raw:underlay_unused_return_measured_absence_evidence; raw:underlay_unused_return_destination; cp:cp_underlay_edges; symbol:A | actual_underlay_unused_return |  |
| calc_underlay_edges_electricity | underlay_edges / underlay_edges_electricity | actual_underlay_edges_electricity = 直接归属的实际换算电表差值 + 合格的正向已核对主表剩余量份额。每项差值 = (meter_end - meter_start) * unit_factor，使用实际期间。剩余量 = 已换算master_total - inside_master_direct_total；主表内每个已直接分配消费者均须扣除一次。记录outside_master_direct_total，但不得从该主表扣除。若剩余量为零，无需权重。若剩余量为正，份额 = 剩余量 * consumer_weight / all_eligible_weights，须有完整合格消费者名册及正权重/分母。负或未知剩余量须纠正并保留为缺口。输出为物理kWh，仅在流卡处归一化。 | raw:underlay_edges_electricity_meter_id; raw:underlay_edges_electricity_meter_start; raw:underlay_edges_electricity_meter_end; raw:underlay_edges_electricity_unit_factor; raw:underlay_edges_electricity_meter_parent; raw:underlay_edges_electricity_inside_master_direct_total; raw:underlay_edges_electricity_outside_master_direct_total; raw:underlay_edges_electricity_master_total; raw:underlay_edges_electricity_consumer_weight; raw:underlay_edges_electricity_all_eligible_weights; raw:underlay_edges_electricity_period; raw:underlay_edges_electricity_topology_evidence; cp:cp_underlay_edges; symbol:A | actual_underlay_edges_electricity |  |
| calc_underlay_edges_access_service | underlay_edges / underlay_edges_access_service | actual_underlay_edges_access_service = underlay_edges_access_service_actual_service_quantity + 合格剩余量份额；直接分配的underlay_edges_access_service_actual_service_quantity是本节点/批次/期间消费者实际合同直接归属量。剩余量 = underlay_edges_access_service_billed_quantity - underlay_edges_access_service_all_direct_assignments_total；后者为同一供应方/资产/合同/服务期间边界内所有实际直接分配消费者之和，各计一次，由underlay_edges_access_service_direct_assignment_register_evidence证明。剩余量 = 0时，分配的剩余份额 = 0，无需权重。剩余量 > 0时，剩余份额 = 剩余量 * underlay_edges_access_service_consumer_weight / underlay_edges_access_service_all_eligible_weights，须使用完整实际合格消费者名册及有证据支持的正权重/分母。负或未知剩余量是未解决归属缺口，不得强制置零或视为排放。直接分配和剩余份额合计将实际计费服务核对一次。underlay_edges_access_service_owned_idle依underlay_edges_access_service_contract_idle_basis_evidence只纳入适用直接分配或剩余计费可用量一次，不再额外添加h。保留实际period_start/period_end、供应方/资产及服务范围。不得用人工工时、假定班次、寿命或年化代理。输出为实际物理h，仅在流卡处除以A一次。 | raw:underlay_edges_access_service_asset_id; raw:underlay_edges_access_service_period_start; raw:underlay_edges_access_service_period_end; raw:underlay_edges_access_service_billed_quantity; raw:underlay_edges_access_service_actual_service_quantity; raw:underlay_edges_access_service_owned_idle; raw:underlay_edges_access_service_consumer_weight; raw:underlay_edges_access_service_all_eligible_weights; raw:underlay_edges_access_service_assignment_evidence; raw:underlay_edges_access_service_all_direct_assignments_total; raw:underlay_edges_access_service_direct_assignment_register_evidence; raw:underlay_edges_access_service_contract_idle_basis_evidence; cp:cp_underlay_edges; symbol:A | actual_underlay_edges_access_service |  |
| calc_roof_feed | shingle_details / roof_feed | actual_roof_feed = 实测roof_feed_actual_quantity，使用记录的几何换算桥换算为m2，按唯一表面ID、状态和有方向交接核对。不得汇总同一状态的重复测量或用最终A替换实测内部面积。返工保留实际负担，最终唯一面积仅计一次。输出是物理面积分子。 | raw:roof_feed_actual_quantity; raw:roof_feed_native_unit; raw:roof_feed_mass_or_geometry_bridge; raw:roof_feed_actual_state; raw:roof_feed_measured_absence_evidence; raw:roof_feed_destination; cp:cp_shingle_details; symbol:A | actual_roof_feed |  |
| calc_field_shingles | shingle_details / field_shingles | actual_field_shingles = sum(field_shingles_received_quantity_kg)，按唯一来源发料ID汇总，与issue_field_shingles及同材料/状态/保管信息匹配。此内部物理分子在本节点废物、未用流出或留存之前记录。仅携带既有上游负担一次，不新增外部采购或二次库存扣除。 | raw:field_shingles_received_quantity_kg; raw:field_shingles_source_issue_id; raw:field_shingles_material_id; raw:field_shingles_state_id; raw:field_shingles_custody_evidence; cp:cp_shingle_details; symbol:A | actual_field_shingles |  |
| calc_starter_cap_shingles | shingle_details / starter_cap_shingles | actual_starter_cap_shingles = sum(starter_cap_shingles_received_quantity_kg)，按唯一来源发料ID汇总，与issue_starter_cap_shingles及同材料/状态/保管信息匹配。此内部物理分子在本节点废物、未用流出或留存之前记录。仅携带既有上游负担一次，不新增外部采购或二次库存扣除。 | raw:starter_cap_shingles_received_quantity_kg; raw:starter_cap_shingles_source_issue_id; raw:starter_cap_shingles_material_id; raw:starter_cap_shingles_state_id; raw:starter_cap_shingles_custody_evidence; cp:cp_shingle_details; symbol:A | actual_starter_cap_shingles |  |
| calc_roof_nails | shingle_details / roof_nails | actual_roof_nails = sum(roof_nails_received_quantity_kg)，按唯一来源发料ID汇总，与issue_roof_nails及同材料/状态/保管信息匹配。此内部物理分子在本节点废物、未用流出或留存之前记录。仅携带既有上游负担一次，不新增外部采购或二次库存扣除。 | raw:roof_nails_received_quantity_kg; raw:roof_nails_source_issue_id; raw:roof_nails_material_id; raw:roof_nails_state_id; raw:roof_nails_custody_evidence; cp:cp_shingle_details; symbol:A | actual_roof_nails |  |
| calc_flashing_vent_components | shingle_details / flashing_vent_components | actual_flashing_vent_components = sum(flashing_vent_components_received_quantity_kg)，按唯一来源发料ID汇总，与issue_flashing_vent_components及同材料/状态/保管信息匹配。此内部物理分子在本节点废物、未用流出或留存之前记录。仅携带既有上游负担一次，不新增外部采购或二次库存扣除。 | raw:flashing_vent_components_received_quantity_kg; raw:flashing_vent_components_source_issue_id; raw:flashing_vent_components_material_id; raw:flashing_vent_components_state_id; raw:flashing_vent_components_custody_evidence; cp:cp_shingle_details; symbol:A | actual_flashing_vent_components |  |
| calc_asphalt_cement | shingle_details / asphalt_cement | actual_asphalt_cement = sum(asphalt_cement_received_quantity_kg)，按唯一来源发料ID汇总，与issue_asphalt_cement及同材料/状态/保管信息匹配。此内部物理分子在本节点废物、未用流出或留存之前记录。仅携带既有上游负担一次，不新增外部采购或二次库存扣除。 | raw:asphalt_cement_received_quantity_kg; raw:asphalt_cement_source_issue_id; raw:asphalt_cement_material_id; raw:asphalt_cement_state_id; raw:asphalt_cement_custody_evidence; cp:cp_shingle_details; symbol:A | actual_asphalt_cement |  |
| calc_installed_roof | shingle_details / installed_roof | actual_installed_roof = 实测installed_roof_actual_quantity，使用记录的几何换算桥换算为m2，按唯一表面ID、状态和有方向交接核对。不得汇总同一状态的重复测量或用最终A替换实测内部面积。返工保留实际负担，最终唯一面积仅计一次。输出是物理面积分子。 | raw:installed_roof_actual_quantity; raw:installed_roof_native_unit; raw:installed_roof_mass_or_geometry_bridge; raw:installed_roof_actual_state; raw:installed_roof_measured_absence_evidence; raw:installed_roof_destination; cp:cp_shingle_details; symbol:A | actual_installed_roof |  |
| calc_shingle_waste | shingle_details / shingle_waste | actual_shingle_waste = sum(shingle_waste_actual_quantity)，按唯一实际事件汇总，先用native_unit和mass_or_geometry_bridge按确切身份/状态换算为kg。保留actual_state、destination及measured_absence_evidence；发生或数量未知则保留缺口。保留组成、含水量、接收方及实际去向；丢弃材料区别于可用退回及直接环境排放。 | raw:shingle_waste_actual_quantity; raw:shingle_waste_native_unit; raw:shingle_waste_mass_or_geometry_bridge; raw:shingle_waste_actual_state; raw:shingle_waste_measured_absence_evidence; raw:shingle_waste_destination; cp:cp_shingle_details; symbol:A | actual_shingle_waste |  |
| calc_shingle_direct_release | shingle_details / shingle_direct_release | actual_shingle_direct_release = sum(shingle_direct_release_actual_quantity)，按唯一实际事件汇总，先用native_unit和mass_or_geometry_bridge按确切身份/状态换算为kg。保留actual_state、destination及measured_absence_evidence；发生或数量未知则保留缺口。对每个真实交换明确substance、接收medium、direction、sampling_method及配方/粉尘基准。使用capture_fraction_evidence区分捕集废物与未捕集直接排放；无法解释的质量差额不是排放。 | raw:shingle_direct_release_actual_quantity; raw:shingle_direct_release_native_unit; raw:shingle_direct_release_mass_or_geometry_bridge; raw:shingle_direct_release_actual_state; raw:shingle_direct_release_measured_absence_evidence; raw:shingle_direct_release_destination; raw:shingle_direct_release_substance; raw:shingle_direct_release_medium; raw:shingle_direct_release_direction; raw:shingle_direct_release_sampling_method; raw:shingle_direct_release_formulation_or_dust_composition; raw:shingle_direct_release_capture_fraction_evidence; cp:cp_shingle_details; symbol:A | actual_shingle_direct_release |  |
| calc_shingle_unused_return | shingle_details / shingle_unused_return | actual_shingle_unused_return = sum(shingle_unused_return_actual_quantity)，按唯一实际事件汇总，先用native_unit和mass_or_geometry_bridge按确切身份/状态换算为kg。保留actual_state、destination及measured_absence_evidence；发生或数量未知则保留缺口。将可用退回U和可用外部转移X拆为互斥正向保管流出，排除未领用完整库存、留存、废物及已加工在制品。仅转移有证据的原态未用材料上游负担；施工、服务和返工负担保留在本屋面批次。无避免生产信用或第二次负扣除。 | raw:shingle_unused_return_actual_quantity; raw:shingle_unused_return_native_unit; raw:shingle_unused_return_mass_or_geometry_bridge; raw:shingle_unused_return_actual_state; raw:shingle_unused_return_measured_absence_evidence; raw:shingle_unused_return_destination; cp:cp_shingle_details; symbol:A | actual_shingle_unused_return |  |
| calc_shingle_details_electricity | shingle_details / shingle_details_electricity | actual_shingle_details_electricity = 直接归属的实际换算电表差值 + 合格的正向已核对主表剩余量份额。每项差值 = (meter_end - meter_start) * unit_factor，使用实际期间。剩余量 = 已换算master_total - inside_master_direct_total；主表内每个已直接分配消费者均须扣除一次。记录outside_master_direct_total，但不得从该主表扣除。若剩余量为零，无需权重。若剩余量为正，份额 = 剩余量 * consumer_weight / all_eligible_weights，须有完整合格消费者名册及正权重/分母。负或未知剩余量须纠正并保留为缺口。输出为物理kWh，仅在流卡处归一化。 | raw:shingle_details_electricity_meter_id; raw:shingle_details_electricity_meter_start; raw:shingle_details_electricity_meter_end; raw:shingle_details_electricity_unit_factor; raw:shingle_details_electricity_meter_parent; raw:shingle_details_electricity_inside_master_direct_total; raw:shingle_details_electricity_outside_master_direct_total; raw:shingle_details_electricity_master_total; raw:shingle_details_electricity_consumer_weight; raw:shingle_details_electricity_all_eligible_weights; raw:shingle_details_electricity_period; raw:shingle_details_electricity_topology_evidence; cp:cp_shingle_details; symbol:A | actual_shingle_details_electricity |  |
| calc_shingle_details_access_service | shingle_details / shingle_details_access_service | actual_shingle_details_access_service = shingle_details_access_service_actual_service_quantity + 合格剩余量份额；直接分配的shingle_details_access_service_actual_service_quantity是本节点/批次/期间消费者实际合同直接归属量。剩余量 = shingle_details_access_service_billed_quantity - shingle_details_access_service_all_direct_assignments_total；后者为同一供应方/资产/合同/服务期间边界内所有实际直接分配消费者之和，各计一次，由shingle_details_access_service_direct_assignment_register_evidence证明。剩余量 = 0时，分配的剩余份额 = 0，无需权重。剩余量 > 0时，剩余份额 = 剩余量 * shingle_details_access_service_consumer_weight / shingle_details_access_service_all_eligible_weights，须使用完整实际合格消费者名册及有证据支持的正权重/分母。负或未知剩余量是未解决归属缺口，不得强制置零或视为排放。直接分配和剩余份额合计将实际计费服务核对一次。shingle_details_access_service_owned_idle依shingle_details_access_service_contract_idle_basis_evidence只纳入适用直接分配或剩余计费可用量一次，不再额外添加h。保留实际period_start/period_end、供应方/资产及服务范围。不得用人工工时、假定班次、寿命或年化代理。输出为实际物理h，仅在流卡处除以A一次。 | raw:shingle_details_access_service_asset_id; raw:shingle_details_access_service_period_start; raw:shingle_details_access_service_period_end; raw:shingle_details_access_service_billed_quantity; raw:shingle_details_access_service_actual_service_quantity; raw:shingle_details_access_service_owned_idle; raw:shingle_details_access_service_consumer_weight; raw:shingle_details_access_service_all_eligible_weights; raw:shingle_details_access_service_assignment_evidence; raw:shingle_details_access_service_all_direct_assignments_total; raw:shingle_details_access_service_direct_assignment_register_evidence; raw:shingle_details_access_service_contract_idle_basis_evidence; cp:cp_shingle_details; symbol:A | actual_shingle_details_access_service |  |
| calc_finish_roof_feed | finish_accept / finish_roof_feed | actual_finish_roof_feed = 实测finish_roof_feed_actual_quantity，使用记录的几何换算桥换算为m2，按唯一表面ID、状态和有方向交接核对。不得汇总同一状态的重复测量或用最终A替换实测内部面积。返工保留实际负担，最终唯一面积仅计一次。输出是物理面积分子。 | raw:finish_roof_feed_actual_quantity; raw:finish_roof_feed_native_unit; raw:finish_roof_feed_mass_or_geometry_bridge; raw:finish_roof_feed_actual_state; raw:finish_roof_feed_measured_absence_evidence; raw:finish_roof_feed_destination; cp:cp_finish_accept; symbol:A | actual_finish_roof_feed |  |
| calc_accessory_finish | finish_accept / accessory_finish | actual_accessory_finish = sum(accessory_finish_received_quantity_kg)，按唯一来源发料ID汇总，与issue_accessory_finish及同材料/状态/保管信息匹配。此内部物理分子在本节点废物、未用流出或留存之前记录。仅携带既有上游负担一次，不新增外部采购或二次库存扣除。 | raw:accessory_finish_received_quantity_kg; raw:accessory_finish_source_issue_id; raw:accessory_finish_material_id; raw:accessory_finish_state_id; raw:accessory_finish_custody_evidence; cp:cp_finish_accept; symbol:A | actual_accessory_finish |  |
| calc_finish_water | finish_accept / finish_water | actual_finish_water = finish_water_opening + finish_water_receipts - finish_water_closing_intact；各项先根据确切原单位数量、actual_mass_factor和factor_state_evidence换算成kg。未领用完整库存只扣一次，实际U/X流出保留在毛领用内。输出是物理分子而非强度。 | raw:finish_water_opening; raw:finish_water_receipts; raw:finish_water_closing_intact; raw:finish_water_native_unit; raw:finish_water_native_quantity; raw:finish_water_actual_mass_factor; raw:finish_water_factor_state_evidence; cp:cp_finish_accept; symbol:A | actual_finish_water |  |
| calc_finish_waste | finish_accept / finish_waste | actual_finish_waste = sum(finish_waste_actual_quantity)，按唯一实际事件汇总，先用native_unit和mass_or_geometry_bridge按确切身份/状态换算为kg。保留actual_state、destination及measured_absence_evidence；发生或数量未知则保留缺口。保留组成、含水量、接收方及实际去向；丢弃材料区别于可用退回及直接环境排放。 | raw:finish_waste_actual_quantity; raw:finish_waste_native_unit; raw:finish_waste_mass_or_geometry_bridge; raw:finish_waste_actual_state; raw:finish_waste_measured_absence_evidence; raw:finish_waste_destination; cp:cp_finish_accept; symbol:A | actual_finish_waste |  |
| calc_finish_wastewater | finish_accept / finish_wastewater | actual_finish_wastewater = sum(finish_wastewater_actual_quantity)，按唯一实际事件汇总，先用native_unit和mass_or_geometry_bridge按确切身份/状态换算为kg。保留actual_state、destination及measured_absence_evidence；发生或数量未知则保留缺口。保留组成、含水量、接收方及实际去向；丢弃材料区别于可用退回及直接环境排放。 | raw:finish_wastewater_actual_quantity; raw:finish_wastewater_native_unit; raw:finish_wastewater_mass_or_geometry_bridge; raw:finish_wastewater_actual_state; raw:finish_wastewater_measured_absence_evidence; raw:finish_wastewater_destination; cp:cp_finish_accept; symbol:A | actual_finish_wastewater |  |
| calc_finish_water_vapour | finish_accept / finish_water_vapour | actual_finish_water_vapour = 本节点实测H2O向未指定空气排放量之和，或由下列互斥纯水质量平衡独立验证的蒸发量：finish_water_vapour_gross_fresh_water - finish_water_vapour_unused_fresh_exit + finish_water_vapour_received_process_water + finish_water_vapour_formulation_water + finish_water_vapour_opening_processed_water - finish_water_vapour_next_handoff_water - finish_water_vapour_retained_bound_water - finish_water_vapour_retained_free_water - finish_water_vapour_solid_waste_water - finish_water_vapour_liquid_waste_water - finish_water_vapour_direct_liquid_release_water - finish_water_vapour_closing_processed_wip_water - finish_water_vapour_other_exclusive_transfer_water，全部为kg H2O。finish_water_vapour_gross_fresh_water须与calc:actual_finish_water严格核对；后者已扣除未领用完整期末水库存一次，不再扣除期末完整库存。通过finish_water_vapour_unused_fresh_exit_component_register将finish_water_vapour_unused_fresh_exit核对至calc:actual_finish_unused_return内实测供应新鲜水部分；其他配方/材料/包装退回不是新鲜水流出。finish_water_vapour_received_process_water等于finish_accept_incoming_assembly_water_mass_kg，即接收已安装覆盖组件经前节点全部实际损失后的独立实测含水，由finish_water_vapour_received_assembly_water_evidence及匹配表面/状态清单证明，绝不能从观测性Area推算。finish_water_vapour_formulation_water仅含calc:actual_accessory_finish代表的本节点接收配件饰面配方中的实测H2O，使用finish_water_vapour_own_formulation_water_evidence；排除已在接收组件或期初已加工在制品中的水。期初已加工水仅是结转在制品水，不得重放为当前投入。使用实测含水比例及finish_water_vapour_pool_owner_exclusivity_evidence，确保结合/自由留存、废物、直接液态排放、交接、其他转移及期末已加工在制品水池互斥；湿配方/废物总质量不是水质量。发生和数量须有finish_water_vapour_validated_evaporation_evidence及不确定性审查。负结果或未闭合平衡保留为缺口，不自动视为水蒸气、不强制置零或变成其他排放。输出是除以A前本节点实际向未指定空气排放的物理kg H2O。 | raw:finish_water_vapour_actual_quantity; raw:finish_water_vapour_native_unit; raw:finish_water_vapour_mass_or_geometry_bridge; raw:finish_water_vapour_actual_state; raw:finish_water_vapour_measured_absence_evidence; raw:finish_water_vapour_destination; raw:finish_water_vapour_gross_fresh_water; raw:finish_water_vapour_unused_fresh_exit; raw:finish_water_vapour_received_process_water; raw:finish_water_vapour_formulation_water; raw:finish_water_vapour_opening_processed_water; raw:finish_water_vapour_next_handoff_water; raw:finish_water_vapour_retained_bound_water; raw:finish_water_vapour_retained_free_water; raw:finish_water_vapour_solid_waste_water; raw:finish_water_vapour_liquid_waste_water; raw:finish_water_vapour_direct_liquid_release_water; raw:finish_water_vapour_closing_processed_wip_water; raw:finish_water_vapour_other_exclusive_transfer_water; raw:finish_water_vapour_validated_evaporation_evidence; raw:finish_water_vapour_unused_fresh_exit_component_register; raw:finish_water_vapour_received_assembly_water_evidence; raw:finish_water_vapour_own_formulation_water_evidence; raw:finish_water_vapour_pool_owner_exclusivity_evidence; raw:finish_accept_incoming_assembly_water_mass_kg; cp:cp_finish_accept; calc:actual_finish_water; calc:actual_finish_unused_return; calc:actual_accessory_finish; symbol:A | actual_finish_water_vapour |  |
| calc_finish_other_release | finish_accept / finish_other_release | actual_finish_other_release = sum(finish_other_release_actual_quantity)，按唯一实际事件汇总，先用native_unit和mass_or_geometry_bridge按确切身份/状态换算为kg。保留actual_state、destination及measured_absence_evidence；发生或数量未知则保留缺口。对每个真实交换明确substance、接收medium、direction、sampling_method及配方/粉尘基准。使用capture_fraction_evidence区分捕集废物与未捕集直接排放；无法解释的质量差额不是排放。 | raw:finish_other_release_actual_quantity; raw:finish_other_release_native_unit; raw:finish_other_release_mass_or_geometry_bridge; raw:finish_other_release_actual_state; raw:finish_other_release_measured_absence_evidence; raw:finish_other_release_destination; raw:finish_other_release_substance; raw:finish_other_release_medium; raw:finish_other_release_direction; raw:finish_other_release_sampling_method; raw:finish_other_release_formulation_or_dust_composition; raw:finish_other_release_capture_fraction_evidence; cp:cp_finish_accept; symbol:A | actual_finish_other_release |  |
| calc_finish_unused_return | finish_accept / finish_unused_return | actual_finish_unused_return = sum(finish_unused_return_actual_quantity)，按唯一实际事件汇总，先用native_unit和mass_or_geometry_bridge按确切身份/状态换算为kg。保留actual_state、destination及measured_absence_evidence；发生或数量未知则保留缺口。将可用退回U和可用外部转移X拆为互斥正向保管流出，排除未领用完整库存、留存、废物及已加工在制品。仅转移有证据的原态未用材料上游负担；施工、服务和返工负担保留在本屋面批次。无避免生产信用或第二次负扣除。 | raw:finish_unused_return_actual_quantity; raw:finish_unused_return_native_unit; raw:finish_unused_return_mass_or_geometry_bridge; raw:finish_unused_return_actual_state; raw:finish_unused_return_measured_absence_evidence; raw:finish_unused_return_destination; cp:cp_finish_accept; symbol:A | actual_finish_unused_return |  |
| calc_accepted_roof_service | finish_accept / accepted_roof_service | normalized_accepted_roof_service = A / A。由accepted_a、accepted_geometry_records及accepted_unique_ids按最终验收表面计算A，开口仅扣一次，单位m2，并须有final_gate_evidence；要求A > 0。输出仅为归一化最终交换量，不再除一次。 | raw:accepted_a; raw:accepted_geometry_records; raw:accepted_unique_ids; raw:excluded_openings; raw:final_gate_evidence; cp:cp_finish_accept; symbol:A | normalized_accepted_roof_service |  |
| calc_finish_accept_electricity | finish_accept / finish_accept_electricity | actual_finish_accept_electricity = 直接归属的实际换算电表差值 + 合格的正向已核对主表剩余量份额。每项差值 = (meter_end - meter_start) * unit_factor，使用实际期间。剩余量 = 已换算master_total - inside_master_direct_total；主表内每个已直接分配消费者均须扣除一次。记录outside_master_direct_total，但不得从该主表扣除。若剩余量为零，无需权重。若剩余量为正，份额 = 剩余量 * consumer_weight / all_eligible_weights，须有完整合格消费者名册及正权重/分母。负或未知剩余量须纠正并保留为缺口。输出为物理kWh，仅在流卡处归一化。 | raw:finish_accept_electricity_meter_id; raw:finish_accept_electricity_meter_start; raw:finish_accept_electricity_meter_end; raw:finish_accept_electricity_unit_factor; raw:finish_accept_electricity_meter_parent; raw:finish_accept_electricity_inside_master_direct_total; raw:finish_accept_electricity_outside_master_direct_total; raw:finish_accept_electricity_master_total; raw:finish_accept_electricity_consumer_weight; raw:finish_accept_electricity_all_eligible_weights; raw:finish_accept_electricity_period; raw:finish_accept_electricity_topology_evidence; cp:cp_finish_accept; symbol:A | actual_finish_accept_electricity |  |
| calc_finish_accept_access_service | finish_accept / finish_accept_access_service | actual_finish_accept_access_service = finish_accept_access_service_actual_service_quantity + 合格剩余量份额；直接分配的finish_accept_access_service_actual_service_quantity是本节点/批次/期间消费者实际合同直接归属量。剩余量 = finish_accept_access_service_billed_quantity - finish_accept_access_service_all_direct_assignments_total；后者为同一供应方/资产/合同/服务期间边界内所有实际直接分配消费者之和，各计一次，由finish_accept_access_service_direct_assignment_register_evidence证明。剩余量 = 0时，分配的剩余份额 = 0，无需权重。剩余量 > 0时，剩余份额 = 剩余量 * finish_accept_access_service_consumer_weight / finish_accept_access_service_all_eligible_weights，须使用完整实际合格消费者名册及有证据支持的正权重/分母。负或未知剩余量是未解决归属缺口，不得强制置零或视为排放。直接分配和剩余份额合计将实际计费服务核对一次。finish_accept_access_service_owned_idle依finish_accept_access_service_contract_idle_basis_evidence只纳入适用直接分配或剩余计费可用量一次，不再额外添加h。保留实际period_start/period_end、供应方/资产及服务范围。不得用人工工时、假定班次、寿命或年化代理。输出为实际物理h，仅在流卡处除以A一次。 | raw:finish_accept_access_service_asset_id; raw:finish_accept_access_service_period_start; raw:finish_accept_access_service_period_end; raw:finish_accept_access_service_billed_quantity; raw:finish_accept_access_service_actual_service_quantity; raw:finish_accept_access_service_owned_idle; raw:finish_accept_access_service_consumer_weight; raw:finish_accept_access_service_all_eligible_weights; raw:finish_accept_access_service_assignment_evidence; raw:finish_accept_access_service_all_direct_assignments_total; raw:finish_accept_access_service_direct_assignment_register_evidence; raw:finish_accept_access_service_contract_idle_basis_evidence; cp:cp_finish_accept; symbol:A | actual_finish_accept_access_service |  |
| calc_receive_underlay | survey_receive / receive_underlay | actual_receive_underlay = receive_underlay_opening + receive_underlay_external_receipts - receive_underlay_closing_intact_all_locations。加总前使用同材料ID/当前状态的receive_underlay_exact_mass_bridge将各项换算为kg。期末仅含未领用完整库存，每件在实际保管子地点只计一次。不扣除实际接收废物或正向可用流出，它们属于此毛领用。输出是尚未归一化的物理分子。 | raw:receive_underlay_opening; raw:receive_underlay_external_receipts; raw:receive_underlay_closing_intact_all_locations; raw:receive_underlay_current_state; raw:receive_underlay_native_unit; raw:receive_underlay_exact_mass_bridge; raw:receive_underlay_material_id; raw:receive_underlay_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_underlay |  |
| calc_issue_underlay | survey_receive / issue_materials_underlay_edges / 材料交接子账 (issue_underlay) | actual_issue_underlay = sum(issue_underlay_actual_quantity_kg)，按唯一issue_underlay_event_id汇总并匹配material_id、state_id、接收节点和保管证据。独立计量发料与接收节点actual_underlay匹配。按材料将毛接收量核对至发料、接收废物、可用U/X及互斥剩余在制品/其他去向；不得从无法解释的差额生成发料。 | raw:issue_underlay_actual_quantity_kg; raw:issue_underlay_event_id; raw:issue_underlay_material_id; raw:issue_underlay_state_id; raw:issue_underlay_custodian_from; raw:issue_underlay_custodian_to; raw:issue_underlay_receiving_node; raw:issue_underlay_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_underlay |  |
| calc_receive_edge_metal | survey_receive / receive_edge_metal | actual_receive_edge_metal = receive_edge_metal_opening + receive_edge_metal_external_receipts - receive_edge_metal_closing_intact_all_locations。加总前使用同材料ID/当前状态的receive_edge_metal_exact_mass_bridge将各项换算为kg。期末仅含未领用完整库存，每件在实际保管子地点只计一次。不扣除实际接收废物或正向可用流出，它们属于此毛领用。输出是尚未归一化的物理分子。 | raw:receive_edge_metal_opening; raw:receive_edge_metal_external_receipts; raw:receive_edge_metal_closing_intact_all_locations; raw:receive_edge_metal_current_state; raw:receive_edge_metal_native_unit; raw:receive_edge_metal_exact_mass_bridge; raw:receive_edge_metal_material_id; raw:receive_edge_metal_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_edge_metal |  |
| calc_issue_edge_metal | survey_receive / issue_materials_underlay_edges / 材料交接子账 (issue_edge_metal) | actual_issue_edge_metal = sum(issue_edge_metal_actual_quantity_kg)，按唯一issue_edge_metal_event_id汇总并匹配material_id、state_id、接收节点和保管证据。独立计量发料与接收节点actual_edge_metal匹配。按材料将毛接收量核对至发料、接收废物、可用U/X及互斥剩余在制品/其他去向；不得从无法解释的差额生成发料。 | raw:issue_edge_metal_actual_quantity_kg; raw:issue_edge_metal_event_id; raw:issue_edge_metal_material_id; raw:issue_edge_metal_state_id; raw:issue_edge_metal_custodian_from; raw:issue_edge_metal_custodian_to; raw:issue_edge_metal_receiving_node; raw:issue_edge_metal_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_edge_metal |  |
| calc_receive_underlay_fixings | survey_receive / receive_underlay_fixings | actual_receive_underlay_fixings = receive_underlay_fixings_opening + receive_underlay_fixings_external_receipts - receive_underlay_fixings_closing_intact_all_locations。加总前使用同材料ID/当前状态的receive_underlay_fixings_exact_mass_bridge将各项换算为kg。期末仅含未领用完整库存，每件在实际保管子地点只计一次。不扣除实际接收废物或正向可用流出，它们属于此毛领用。输出是尚未归一化的物理分子。 | raw:receive_underlay_fixings_opening; raw:receive_underlay_fixings_external_receipts; raw:receive_underlay_fixings_closing_intact_all_locations; raw:receive_underlay_fixings_current_state; raw:receive_underlay_fixings_native_unit; raw:receive_underlay_fixings_exact_mass_bridge; raw:receive_underlay_fixings_material_id; raw:receive_underlay_fixings_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_underlay_fixings |  |
| calc_issue_underlay_fixings | survey_receive / issue_materials_underlay_edges / 材料交接子账 (issue_underlay_fixings) | actual_issue_underlay_fixings = sum(issue_underlay_fixings_actual_quantity_kg)，按唯一issue_underlay_fixings_event_id汇总并匹配material_id、state_id、接收节点和保管证据。独立计量发料与接收节点actual_underlay_fixings匹配。按材料将毛接收量核对至发料、接收废物、可用U/X及互斥剩余在制品/其他去向；不得从无法解释的差额生成发料。 | raw:issue_underlay_fixings_actual_quantity_kg; raw:issue_underlay_fixings_event_id; raw:issue_underlay_fixings_material_id; raw:issue_underlay_fixings_state_id; raw:issue_underlay_fixings_custodian_from; raw:issue_underlay_fixings_custodian_to; raw:issue_underlay_fixings_receiving_node; raw:issue_underlay_fixings_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_underlay_fixings |  |
| calc_receive_field_shingles | survey_receive / receive_field_shingles | actual_receive_field_shingles = receive_field_shingles_opening + receive_field_shingles_external_receipts - receive_field_shingles_closing_intact_all_locations。加总前使用同材料ID/当前状态的receive_field_shingles_exact_mass_bridge将各项换算为kg。期末仅含未领用完整库存，每件在实际保管子地点只计一次。不扣除实际接收废物或正向可用流出，它们属于此毛领用。输出是尚未归一化的物理分子。 | raw:receive_field_shingles_opening; raw:receive_field_shingles_external_receipts; raw:receive_field_shingles_closing_intact_all_locations; raw:receive_field_shingles_current_state; raw:receive_field_shingles_native_unit; raw:receive_field_shingles_exact_mass_bridge; raw:receive_field_shingles_material_id; raw:receive_field_shingles_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_field_shingles |  |
| calc_issue_field_shingles | survey_receive / issue_materials_shingle_details / 材料交接子账 (issue_field_shingles) | actual_issue_field_shingles = sum(issue_field_shingles_actual_quantity_kg)，按唯一issue_field_shingles_event_id汇总并匹配material_id、state_id、接收节点和保管证据。独立计量发料与接收节点actual_field_shingles匹配。按材料将毛接收量核对至发料、接收废物、可用U/X及互斥剩余在制品/其他去向；不得从无法解释的差额生成发料。 | raw:issue_field_shingles_actual_quantity_kg; raw:issue_field_shingles_event_id; raw:issue_field_shingles_material_id; raw:issue_field_shingles_state_id; raw:issue_field_shingles_custodian_from; raw:issue_field_shingles_custodian_to; raw:issue_field_shingles_receiving_node; raw:issue_field_shingles_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_field_shingles |  |
| calc_receive_starter_cap_shingles | survey_receive / receive_starter_cap_shingles | actual_receive_starter_cap_shingles = receive_starter_cap_shingles_opening + receive_starter_cap_shingles_external_receipts - receive_starter_cap_shingles_closing_intact_all_locations。加总前使用同材料ID/当前状态的receive_starter_cap_shingles_exact_mass_bridge将各项换算为kg。期末仅含未领用完整库存，每件在实际保管子地点只计一次。不扣除实际接收废物或正向可用流出，它们属于此毛领用。输出是尚未归一化的物理分子。 | raw:receive_starter_cap_shingles_opening; raw:receive_starter_cap_shingles_external_receipts; raw:receive_starter_cap_shingles_closing_intact_all_locations; raw:receive_starter_cap_shingles_current_state; raw:receive_starter_cap_shingles_native_unit; raw:receive_starter_cap_shingles_exact_mass_bridge; raw:receive_starter_cap_shingles_material_id; raw:receive_starter_cap_shingles_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_starter_cap_shingles |  |
| calc_issue_starter_cap_shingles | survey_receive / issue_materials_shingle_details / 材料交接子账 (issue_starter_cap_shingles) | actual_issue_starter_cap_shingles = sum(issue_starter_cap_shingles_actual_quantity_kg)，按唯一issue_starter_cap_shingles_event_id汇总并匹配material_id、state_id、接收节点和保管证据。独立计量发料与接收节点actual_starter_cap_shingles匹配。按材料将毛接收量核对至发料、接收废物、可用U/X及互斥剩余在制品/其他去向；不得从无法解释的差额生成发料。 | raw:issue_starter_cap_shingles_actual_quantity_kg; raw:issue_starter_cap_shingles_event_id; raw:issue_starter_cap_shingles_material_id; raw:issue_starter_cap_shingles_state_id; raw:issue_starter_cap_shingles_custodian_from; raw:issue_starter_cap_shingles_custodian_to; raw:issue_starter_cap_shingles_receiving_node; raw:issue_starter_cap_shingles_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_starter_cap_shingles |  |
| calc_receive_roof_nails | survey_receive / receive_roof_nails | actual_receive_roof_nails = receive_roof_nails_opening + receive_roof_nails_external_receipts - receive_roof_nails_closing_intact_all_locations。加总前使用同材料ID/当前状态的receive_roof_nails_exact_mass_bridge将各项换算为kg。期末仅含未领用完整库存，每件在实际保管子地点只计一次。不扣除实际接收废物或正向可用流出，它们属于此毛领用。输出是尚未归一化的物理分子。 | raw:receive_roof_nails_opening; raw:receive_roof_nails_external_receipts; raw:receive_roof_nails_closing_intact_all_locations; raw:receive_roof_nails_current_state; raw:receive_roof_nails_native_unit; raw:receive_roof_nails_exact_mass_bridge; raw:receive_roof_nails_material_id; raw:receive_roof_nails_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_roof_nails |  |
| calc_issue_roof_nails | survey_receive / issue_materials_shingle_details / 材料交接子账 (issue_roof_nails) | actual_issue_roof_nails = sum(issue_roof_nails_actual_quantity_kg)，按唯一issue_roof_nails_event_id汇总并匹配material_id、state_id、接收节点和保管证据。独立计量发料与接收节点actual_roof_nails匹配。按材料将毛接收量核对至发料、接收废物、可用U/X及互斥剩余在制品/其他去向；不得从无法解释的差额生成发料。 | raw:issue_roof_nails_actual_quantity_kg; raw:issue_roof_nails_event_id; raw:issue_roof_nails_material_id; raw:issue_roof_nails_state_id; raw:issue_roof_nails_custodian_from; raw:issue_roof_nails_custodian_to; raw:issue_roof_nails_receiving_node; raw:issue_roof_nails_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_roof_nails |  |
| calc_receive_flashing_vent_components | survey_receive / receive_flashing_vent_components | actual_receive_flashing_vent_components = receive_flashing_vent_components_opening + receive_flashing_vent_components_external_receipts - receive_flashing_vent_components_closing_intact_all_locations。加总前使用同材料ID/当前状态的receive_flashing_vent_components_exact_mass_bridge将各项换算为kg。期末仅含未领用完整库存，每件在实际保管子地点只计一次。不扣除实际接收废物或正向可用流出，它们属于此毛领用。输出是尚未归一化的物理分子。 | raw:receive_flashing_vent_components_opening; raw:receive_flashing_vent_components_external_receipts; raw:receive_flashing_vent_components_closing_intact_all_locations; raw:receive_flashing_vent_components_current_state; raw:receive_flashing_vent_components_native_unit; raw:receive_flashing_vent_components_exact_mass_bridge; raw:receive_flashing_vent_components_material_id; raw:receive_flashing_vent_components_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_flashing_vent_components |  |
| calc_issue_flashing_vent_components | survey_receive / issue_materials_shingle_details / 材料交接子账 (issue_flashing_vent_components) | actual_issue_flashing_vent_components = sum(issue_flashing_vent_components_actual_quantity_kg)，按唯一issue_flashing_vent_components_event_id汇总并匹配material_id、state_id、接收节点和保管证据。独立计量发料与接收节点actual_flashing_vent_components匹配。按材料将毛接收量核对至发料、接收废物、可用U/X及互斥剩余在制品/其他去向；不得从无法解释的差额生成发料。 | raw:issue_flashing_vent_components_actual_quantity_kg; raw:issue_flashing_vent_components_event_id; raw:issue_flashing_vent_components_material_id; raw:issue_flashing_vent_components_state_id; raw:issue_flashing_vent_components_custodian_from; raw:issue_flashing_vent_components_custodian_to; raw:issue_flashing_vent_components_receiving_node; raw:issue_flashing_vent_components_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_flashing_vent_components |  |
| calc_receive_asphalt_cement | survey_receive / receive_asphalt_cement | actual_receive_asphalt_cement = receive_asphalt_cement_opening + receive_asphalt_cement_external_receipts - receive_asphalt_cement_closing_intact_all_locations。加总前使用同材料ID/当前状态的receive_asphalt_cement_exact_mass_bridge将各项换算为kg。期末仅含未领用完整库存，每件在实际保管子地点只计一次。不扣除实际接收废物或正向可用流出，它们属于此毛领用。输出是尚未归一化的物理分子。 | raw:receive_asphalt_cement_opening; raw:receive_asphalt_cement_external_receipts; raw:receive_asphalt_cement_closing_intact_all_locations; raw:receive_asphalt_cement_current_state; raw:receive_asphalt_cement_native_unit; raw:receive_asphalt_cement_exact_mass_bridge; raw:receive_asphalt_cement_material_id; raw:receive_asphalt_cement_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_asphalt_cement |  |
| calc_issue_asphalt_cement | survey_receive / issue_materials_shingle_details / 材料交接子账 (issue_asphalt_cement) | actual_issue_asphalt_cement = sum(issue_asphalt_cement_actual_quantity_kg)，按唯一issue_asphalt_cement_event_id汇总并匹配material_id、state_id、接收节点和保管证据。独立计量发料与接收节点actual_asphalt_cement匹配。按材料将毛接收量核对至发料、接收废物、可用U/X及互斥剩余在制品/其他去向；不得从无法解释的差额生成发料。 | raw:issue_asphalt_cement_actual_quantity_kg; raw:issue_asphalt_cement_event_id; raw:issue_asphalt_cement_material_id; raw:issue_asphalt_cement_state_id; raw:issue_asphalt_cement_custodian_from; raw:issue_asphalt_cement_custodian_to; raw:issue_asphalt_cement_receiving_node; raw:issue_asphalt_cement_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_asphalt_cement |  |
| calc_receive_accessory_finish | survey_receive / receive_accessory_finish | actual_receive_accessory_finish = receive_accessory_finish_opening + receive_accessory_finish_external_receipts - receive_accessory_finish_closing_intact_all_locations。加总前使用同材料ID/当前状态的receive_accessory_finish_exact_mass_bridge将各项换算为kg。期末仅含未领用完整库存，每件在实际保管子地点只计一次。不扣除实际接收废物或正向可用流出，它们属于此毛领用。输出是尚未归一化的物理分子。 | raw:receive_accessory_finish_opening; raw:receive_accessory_finish_external_receipts; raw:receive_accessory_finish_closing_intact_all_locations; raw:receive_accessory_finish_current_state; raw:receive_accessory_finish_native_unit; raw:receive_accessory_finish_exact_mass_bridge; raw:receive_accessory_finish_material_id; raw:receive_accessory_finish_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_accessory_finish |  |
| calc_issue_accessory_finish | survey_receive / issue_accessory_finish | actual_issue_accessory_finish = sum(issue_accessory_finish_actual_quantity_kg)，按唯一issue_accessory_finish_event_id汇总并匹配material_id、state_id、接收节点和保管证据。独立计量发料与接收节点actual_accessory_finish匹配。按材料将毛接收量核对至发料、接收废物、可用U/X及互斥剩余在制品/其他去向；不得从无法解释的差额生成发料。 | raw:issue_accessory_finish_actual_quantity_kg; raw:issue_accessory_finish_event_id; raw:issue_accessory_finish_material_id; raw:issue_accessory_finish_state_id; raw:issue_accessory_finish_custodian_from; raw:issue_accessory_finish_custodian_to; raw:issue_accessory_finish_receiving_node; raw:issue_accessory_finish_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_accessory_finish |  |
| calc_physical_interface_release | survey_receive / 观测验收记录 (physical_interface_release) | actual_physical_interface_release = 在匹配surface_panel_ids、upstream_state和handoff_evidence下，唯一实测physical_interface_release_actual_geometry，单位m2。此观测几何不是kg、不承担新增材料负担且不自动等于最终A；发送与接收接口计量须核对。 | raw:physical_interface_release_actual_geometry; raw:physical_interface_release_surface_panel_ids; raw:physical_interface_release_upstream_state; raw:physical_interface_release_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_physical_interface_release |  |
| calc_physical_interface_construction_feed | underlay_edges / 观测验收记录 (physical_interface_construction_feed) | actual_physical_interface_construction_feed = 在匹配surface_panel_ids、upstream_state和handoff_evidence下，唯一实测physical_interface_construction_feed_actual_geometry，单位m2。此观测几何不是kg、不承担新增材料负担且不自动等于最终A；发送与接收接口计量须核对。 | raw:physical_interface_construction_feed_actual_geometry; raw:physical_interface_construction_feed_surface_panel_ids; raw:physical_interface_construction_feed_upstream_state; raw:physical_interface_construction_feed_handoff_evidence; cp:cp_underlay_edges; symbol:A | actual_physical_interface_construction_feed |  |
| calc_issue_packaging_underlay_edges | survey_receive / issue_packaging_underlay_edges | actual_issue_packaging_underlay_edges = sum(issue_packaging_underlay_edges_actual_mass_kg)，针对实际随发料送往underlay_edges的唯一custody_event_id及包装物件/组成/状态。将接收包装毛量核对至所有包装发料、接收废物、正向可用流出及互斥剩余去向，不得从缺失平衡推定此次发料。 | raw:issue_packaging_underlay_edges_actual_mass_kg; raw:issue_packaging_underlay_edges_material_composition; raw:issue_packaging_underlay_edges_item_id; raw:issue_packaging_underlay_edges_current_state; raw:issue_packaging_underlay_edges_custody_event_id; raw:issue_packaging_underlay_edges_recipient_node; raw:issue_packaging_underlay_edges_upstream_dataset_boundary_evidence; cp:cp_survey_receive; symbol:A | actual_issue_packaging_underlay_edges |  |
| calc_underlay_edges_packaging_feed | underlay_edges / underlay_edges_packaging_feed | actual_underlay_edges_packaging_feed = sum(underlay_edges_packaging_feed_actual_mass_kg)，按唯一source_issue_id/custody_event_id与issue_packaging_underlay_edges匹配。核实组成和状态。此物理内部分子不附加新的包装生产负担；下游废物/可用流出/留存/在制品不能重复上游去向。 | raw:underlay_edges_packaging_feed_actual_mass_kg; raw:underlay_edges_packaging_feed_source_issue_id; raw:underlay_edges_packaging_feed_material_composition; raw:underlay_edges_packaging_feed_current_state; raw:underlay_edges_packaging_feed_custody_event_id; cp:cp_underlay_edges; symbol:A | actual_underlay_edges_packaging_feed |  |
| calc_issue_packaging_shingle_details | survey_receive / issue_packaging_shingle_details | actual_issue_packaging_shingle_details = sum(issue_packaging_shingle_details_actual_mass_kg)，针对实际随发料送往shingle_details的唯一custody_event_id及包装物件/组成/状态。将接收包装毛量核对至所有包装发料、接收废物、正向可用流出及互斥剩余去向，不得从缺失平衡推定此次发料。 | raw:issue_packaging_shingle_details_actual_mass_kg; raw:issue_packaging_shingle_details_material_composition; raw:issue_packaging_shingle_details_item_id; raw:issue_packaging_shingle_details_current_state; raw:issue_packaging_shingle_details_custody_event_id; raw:issue_packaging_shingle_details_recipient_node; raw:issue_packaging_shingle_details_upstream_dataset_boundary_evidence; cp:cp_survey_receive; symbol:A | actual_issue_packaging_shingle_details |  |
| calc_shingle_details_packaging_feed | shingle_details / shingle_details_packaging_feed | actual_shingle_details_packaging_feed = sum(shingle_details_packaging_feed_actual_mass_kg)，按唯一source_issue_id/custody_event_id与issue_packaging_shingle_details匹配。核实组成和状态。此物理内部分子不附加新的包装生产负担；下游废物/可用流出/留存/在制品不能重复上游去向。 | raw:shingle_details_packaging_feed_actual_mass_kg; raw:shingle_details_packaging_feed_source_issue_id; raw:shingle_details_packaging_feed_material_composition; raw:shingle_details_packaging_feed_current_state; raw:shingle_details_packaging_feed_custody_event_id; cp:cp_shingle_details; symbol:A | actual_shingle_details_packaging_feed |  |
| calc_issue_packaging_finish_accept | survey_receive / issue_packaging_finish_accept | actual_issue_packaging_finish_accept = sum(issue_packaging_finish_accept_actual_mass_kg)，针对实际随发料送往finish_accept的唯一custody_event_id及包装物件/组成/状态。将接收包装毛量核对至所有包装发料、接收废物、正向可用流出及互斥剩余去向，不得从缺失平衡推定此次发料。 | raw:issue_packaging_finish_accept_actual_mass_kg; raw:issue_packaging_finish_accept_material_composition; raw:issue_packaging_finish_accept_item_id; raw:issue_packaging_finish_accept_current_state; raw:issue_packaging_finish_accept_custody_event_id; raw:issue_packaging_finish_accept_recipient_node; raw:issue_packaging_finish_accept_upstream_dataset_boundary_evidence; cp:cp_survey_receive; symbol:A | actual_issue_packaging_finish_accept |  |
| calc_finish_accept_packaging_feed | finish_accept / finish_accept_packaging_feed | actual_finish_accept_packaging_feed = sum(finish_accept_packaging_feed_actual_mass_kg)，按唯一source_issue_id/custody_event_id与issue_packaging_finish_accept匹配。核实组成和状态。此物理内部分子不附加新的包装生产负担；下游废物/可用流出/留存/在制品不能重复上游去向。 | raw:finish_accept_packaging_feed_actual_mass_kg; raw:finish_accept_packaging_feed_source_issue_id; raw:finish_accept_packaging_feed_material_composition; raw:finish_accept_packaging_feed_current_state; raw:finish_accept_packaging_feed_custody_event_id; cp:cp_finish_accept; symbol:A | actual_finish_accept_packaging_feed |  |
| calc_survey_receive_material_closure | survey_receive / survey_receive_material_closure | calculated_survey_receive_mass_balance_gap_kg = survey_receive_opening_processed_wip_mass_kg + survey_receive_incoming_material_mass_kg + survey_receive_incoming_transfer_mass_kg - (survey_receive_accepted_retained_mass_kg + survey_receive_next_handoff_mass_kg + survey_receive_closing_processed_wip_mass_kg + survey_receive_other_exclusive_transfer_mass_kg + actual_receive_reject + actual_receive_packaging_waste + actual_receive_unused_return)，所有项均为归一化前物理kg。survey_receive_incoming_material_mass_kg须与actual_receive_underlay + actual_receive_edge_metal + actual_receive_underlay_fixings + actual_receive_field_shingles + actual_receive_starter_cap_shingles + actual_receive_roof_nails + actual_receive_flashing_vent_components + actual_receive_asphalt_cement + actual_receive_accessory_finish + actual_receive_packaging核对，即九类暂存构件毛领用加包装；每个物理材料/复合物/包装部分只计一次。survey_receive_next_handoff_mass_kg与actual_issue_underlay + actual_issue_edge_metal + actual_issue_underlay_fixings + actual_issue_field_shingles + actual_issue_starter_cap_shingles + actual_issue_roof_nails + actual_issue_flashing_vent_components + actual_issue_asphalt_cement + actual_issue_accessory_finish + actual_issue_packaging_underlay_edges + actual_issue_packaging_shingle_details + actual_issue_packaging_finish_accept核对，使用实测来源发料，不使用差额。九类材料台账和包装台账分别核对其实际发料、按材料拆分的接收废物、可用U/X及互斥剩余在制品/其他去向。survey_receive_incoming_transfer_mass_kg仅含有独立证据且未计入任何毛领用或期初在制品的真实材料转入；本普通接收路线应记录其有证据的未发生状态。干燥木基层接口为观测性Area，不贡献kg。接收节点没有已安装验收留存；survey_receive_accepted_retained_mass_kg及组件质量字段须在此有未发生证据，不得推定屋面/基层质量。assembly_mass_view只能选择独立实测覆盖整体复合物或完整实测组成/构件清单之一，不得整体加组成；用component_mass_manifest_evidence及kg_bridge_evidence核对选定实际当前状态视图。期初已加工在制品排除已计当前转入量。exclusive_fate_register_evidence将每个物理部分只归入验收留存、继续组件/材料交接、期末已加工在制品、其他实际转移、废物、可用U/X或未捕集直接排放之一。已安装但未验收质量是期末已加工在制品的披露子集，不再扣一次。废水按实际全部液体质量计入；含水比例仅用于独立水平衡，不得在此重复添加。已在配方/复合物内的水不另作材料投入。捕集残留属于废物，不能又计排放。Other_exclusive_transfer排除所有已命名发料/交接、可用U/X及废物。kg求和排除电力kWh、服务h、文件及所有观测性Area。将该有符号计算诊断与survey_receive_mass_balance_gap_kg及实测闭合不确定性核对；无法解释的正/负/未知缺口须调查且保留未完成状态，绝不能推定为排放、发料、留存或负信用。此计算不新建交换/流卡，物理闭合不除以A。 | raw:survey_receive_opening_processed_wip_mass_kg; raw:survey_receive_incoming_material_mass_kg; raw:survey_receive_incoming_transfer_mass_kg; raw:survey_receive_accepted_retained_mass_kg; raw:survey_receive_next_handoff_mass_kg; raw:survey_receive_closing_processed_wip_mass_kg; raw:survey_receive_other_exclusive_transfer_mass_kg; raw:survey_receive_installed_not_accepted_mass_kg; raw:survey_receive_mass_balance_gap_kg; raw:survey_receive_kg_bridge_evidence; raw:survey_receive_complete_component_schedule_evidence; raw:survey_receive_mass_closure_evidence; raw:survey_receive_measurement_uncertainty_evidence; raw:survey_receive_incoming_assembly_component_mass_kg; raw:survey_receive_outgoing_assembly_component_mass_kg; raw:survey_receive_assembly_mass_view; raw:survey_receive_component_mass_manifest_evidence; raw:survey_receive_exclusive_fate_register_evidence; cp:cp_survey_receive; calc:actual_receive_underlay; calc:actual_receive_edge_metal; calc:actual_receive_underlay_fixings; calc:actual_receive_field_shingles; calc:actual_receive_starter_cap_shingles; calc:actual_receive_roof_nails; calc:actual_receive_flashing_vent_components; calc:actual_receive_asphalt_cement; calc:actual_receive_accessory_finish; calc:actual_receive_packaging; calc:actual_issue_underlay; calc:actual_issue_edge_metal; calc:actual_issue_underlay_fixings; calc:actual_issue_field_shingles; calc:actual_issue_starter_cap_shingles; calc:actual_issue_roof_nails; calc:actual_issue_flashing_vent_components; calc:actual_issue_asphalt_cement; calc:actual_issue_accessory_finish; calc:actual_issue_packaging_underlay_edges; calc:actual_issue_packaging_shingle_details; calc:actual_issue_packaging_finish_accept; calc:actual_receive_reject; calc:actual_receive_packaging_waste; calc:actual_receive_unused_return | calculated_survey_receive_mass_balance_gap_kg |  |
| calc_underlay_edges_material_closure | underlay_edges / underlay_edges_material_closure | calculated_underlay_edges_mass_balance_gap_kg = underlay_edges_opening_processed_wip_mass_kg + underlay_edges_incoming_material_mass_kg + underlay_edges_incoming_transfer_mass_kg - (underlay_edges_accepted_retained_mass_kg + underlay_edges_next_handoff_mass_kg + underlay_edges_closing_processed_wip_mass_kg + underlay_edges_other_exclusive_transfer_mass_kg + actual_underlay_waste + actual_underlay_unused_return + actual_underlay_direct_release)，所有项均为归一化前物理kg。underlay_edges_incoming_material_mass_kg与actual_underlay + actual_edge_metal + actual_underlay_fixings + actual_underlay_edges_packaging_feed核对。underlay_edges_incoming_transfer_mass_kg仅对实际以本节点表面状态接收的已结合覆盖构件，等于按构件清单独立实测的underlay_edges_incoming_assembly_component_mass_kg。本路线接收裸露且验收合格木基层时，该转入覆盖构件质量有未发生证据；排除上游基层本身。underlay_edges_next_handoff_mass_kg等于随underlay_ready_roof交出的已铺垫层/边部覆盖组件实测underlay_edges_outgoing_assembly_component_mass_kg。underlay_ready_roof和actual_physical_interface_construction_feed的Area不得乘以虚构kg/m2因子。随组件交出的留存垫层/边部构件只属于next_handoff，不再计accepted_retained。assembly_mass_view只能选择独立实测覆盖整体复合物或完整实测组成/构件清单之一，不得整体加组成；用component_mass_manifest_evidence及kg_bridge_evidence核对选定实际当前状态视图。期初已加工在制品排除已计当前转入量。exclusive_fate_register_evidence将每个物理部分只归入验收留存、继续组件/材料交接、期末已加工在制品、其他实际转移、废物、可用U/X或未捕集直接排放之一。已安装但未验收质量是期末已加工在制品的披露子集，不再扣一次。废水按实际全部液体质量计入；含水比例仅用于独立水平衡，不得在此重复添加。已在配方/复合物内的水不另作材料投入。捕集残留属于废物，不能又计排放。Other_exclusive_transfer排除所有已命名发料/交接、可用U/X及废物。kg求和排除电力kWh、服务h、文件及所有观测性Area。将该有符号计算诊断与underlay_edges_mass_balance_gap_kg及实测闭合不确定性核对；无法解释的正/负/未知缺口须调查且保留未完成状态，绝不能推定为排放、发料、留存或负信用。此计算不新建交换/流卡，物理闭合不除以A。 | raw:underlay_edges_opening_processed_wip_mass_kg; raw:underlay_edges_incoming_material_mass_kg; raw:underlay_edges_incoming_transfer_mass_kg; raw:underlay_edges_accepted_retained_mass_kg; raw:underlay_edges_next_handoff_mass_kg; raw:underlay_edges_closing_processed_wip_mass_kg; raw:underlay_edges_other_exclusive_transfer_mass_kg; raw:underlay_edges_installed_not_accepted_mass_kg; raw:underlay_edges_mass_balance_gap_kg; raw:underlay_edges_kg_bridge_evidence; raw:underlay_edges_complete_component_schedule_evidence; raw:underlay_edges_mass_closure_evidence; raw:underlay_edges_measurement_uncertainty_evidence; raw:underlay_edges_incoming_assembly_component_mass_kg; raw:underlay_edges_outgoing_assembly_component_mass_kg; raw:underlay_edges_assembly_mass_view; raw:underlay_edges_component_mass_manifest_evidence; raw:underlay_edges_exclusive_fate_register_evidence; cp:cp_underlay_edges; calc:actual_underlay; calc:actual_edge_metal; calc:actual_underlay_fixings; calc:actual_underlay_edges_packaging_feed; calc:actual_underlay_waste; calc:actual_underlay_unused_return; calc:actual_underlay_direct_release | calculated_underlay_edges_mass_balance_gap_kg |  |
| calc_shingle_details_material_closure | shingle_details / shingle_details_material_closure | calculated_shingle_details_mass_balance_gap_kg = shingle_details_opening_processed_wip_mass_kg + shingle_details_incoming_material_mass_kg + shingle_details_incoming_transfer_mass_kg - (shingle_details_accepted_retained_mass_kg + shingle_details_next_handoff_mass_kg + shingle_details_closing_processed_wip_mass_kg + shingle_details_other_exclusive_transfer_mass_kg + actual_shingle_waste + actual_shingle_unused_return + actual_shingle_direct_release)，所有项均为归一化前物理kg。shingle_details_incoming_material_mass_kg与actual_field_shingles + actual_starter_cap_shingles + actual_roof_nails + actual_flashing_vent_components + actual_asphalt_cement + actual_shingle_details_packaging_feed核对。shingle_details_incoming_transfer_mass_kg等于随roof_feed接收、按垫层节点实际损失后交出构件清单匹配的独立实测shingle_details_incoming_assembly_component_mass_kg。shingle_details_next_handoff_mass_kg等于installed_roof中的独立实测shingle_details_outgoing_assembly_component_mass_kg。保留实际构件添加及去向；由大面瓦加工的脊瓦不是额外采购。roof_feed/installed_roof的Area是观测几何，不是kg投入，也不能替代实测构件质量。继续交出的已安装构件只属于next_handoff，不再计accepted_retained。assembly_mass_view只能选择独立实测覆盖整体复合物或完整实测组成/构件清单之一，不得整体加组成；用component_mass_manifest_evidence及kg_bridge_evidence核对选定实际当前状态视图。期初已加工在制品排除已计当前转入量。exclusive_fate_register_evidence将每个物理部分只归入验收留存、继续组件/材料交接、期末已加工在制品、其他实际转移、废物、可用U/X或未捕集直接排放之一。已安装但未验收质量是期末已加工在制品的披露子集，不再扣一次。废水按实际全部液体质量计入；含水比例仅用于独立水平衡，不得在此重复添加。已在配方/复合物内的水不另作材料投入。捕集残留属于废物，不能又计排放。Other_exclusive_transfer排除所有已命名发料/交接、可用U/X及废物。kg求和排除电力kWh、服务h、文件及所有观测性Area。将该有符号计算诊断与shingle_details_mass_balance_gap_kg及实测闭合不确定性核对；无法解释的正/负/未知缺口须调查且保留未完成状态，绝不能推定为排放、发料、留存或负信用。此计算不新建交换/流卡，物理闭合不除以A。 | raw:shingle_details_opening_processed_wip_mass_kg; raw:shingle_details_incoming_material_mass_kg; raw:shingle_details_incoming_transfer_mass_kg; raw:shingle_details_accepted_retained_mass_kg; raw:shingle_details_next_handoff_mass_kg; raw:shingle_details_closing_processed_wip_mass_kg; raw:shingle_details_other_exclusive_transfer_mass_kg; raw:shingle_details_installed_not_accepted_mass_kg; raw:shingle_details_mass_balance_gap_kg; raw:shingle_details_kg_bridge_evidence; raw:shingle_details_complete_component_schedule_evidence; raw:shingle_details_mass_closure_evidence; raw:shingle_details_measurement_uncertainty_evidence; raw:shingle_details_incoming_assembly_component_mass_kg; raw:shingle_details_outgoing_assembly_component_mass_kg; raw:shingle_details_assembly_mass_view; raw:shingle_details_component_mass_manifest_evidence; raw:shingle_details_exclusive_fate_register_evidence; cp:cp_shingle_details; calc:actual_field_shingles; calc:actual_starter_cap_shingles; calc:actual_roof_nails; calc:actual_flashing_vent_components; calc:actual_asphalt_cement; calc:actual_shingle_details_packaging_feed; calc:actual_shingle_waste; calc:actual_shingle_unused_return; calc:actual_shingle_direct_release | calculated_shingle_details_mass_balance_gap_kg |  |
| calc_finish_accept_material_closure | finish_accept / finish_accept_material_closure | calculated_finish_accept_mass_balance_gap_kg = finish_accept_opening_processed_wip_mass_kg + finish_accept_incoming_material_mass_kg + finish_accept_incoming_transfer_mass_kg - (finish_accept_accepted_retained_mass_kg + finish_accept_next_handoff_mass_kg + finish_accept_closing_processed_wip_mass_kg + finish_accept_other_exclusive_transfer_mass_kg + actual_finish_waste + actual_finish_wastewater + actual_finish_unused_return + actual_finish_water_vapour + actual_finish_other_release)，所有项均为归一化前物理kg。finish_accept_incoming_material_mass_kg与actual_accessory_finish + actual_finish_water + actual_finish_accept_packaging_feed核对。finish_accept_incoming_transfer_mass_kg等于随finish_roof_feed接收的已安装覆盖组件独立实测finish_accept_incoming_assembly_component_mass_kg，与铺瓦节点实际损失后的交出构件清单匹配。finish_accept_accepted_retained_mass_kg是最终验收覆盖内实际留存的构件/复合物质量，含互斥留存水；它仅为闭合去向，不是accepted_roof_service的Area之外又一个客户质量交付交换。通常最终验收无继续内部组件交接：finish_accept_next_handoff_mass_kg有未发生证据；若实际非最终继续转移，须有互斥记录去向，不能同时作为验收留存。finish_roof_feed及accepted_roof_service的Area均不提供kg。assembly_mass_view只能选择独立实测覆盖整体复合物或完整实测组成/构件清单之一，不得整体加组成；用component_mass_manifest_evidence及kg_bridge_evidence核对选定实际当前状态视图。期初已加工在制品排除已计当前转入量。exclusive_fate_register_evidence将每个物理部分只归入验收留存、继续组件/材料交接、期末已加工在制品、其他实际转移、废物、可用U/X或未捕集直接排放之一。已安装但未验收质量是期末已加工在制品的披露子集，不再扣一次。废水按实际全部液体质量计入；含水比例仅用于独立水平衡，不得在此重复添加。已在配方/复合物内的水不另作材料投入。捕集残留属于废物，不能又计排放。Other_exclusive_transfer排除所有已命名发料/交接、可用U/X及废物。kg求和排除电力kWh、服务h、文件及所有观测性Area。将该有符号计算诊断与finish_accept_mass_balance_gap_kg及实测闭合不确定性核对；无法解释的正/负/未知缺口须调查且保留未完成状态，绝不能推定为排放、发料、留存或负信用。此计算不新建交换/流卡，物理闭合不除以A。 | raw:finish_accept_opening_processed_wip_mass_kg; raw:finish_accept_incoming_material_mass_kg; raw:finish_accept_incoming_transfer_mass_kg; raw:finish_accept_accepted_retained_mass_kg; raw:finish_accept_next_handoff_mass_kg; raw:finish_accept_closing_processed_wip_mass_kg; raw:finish_accept_other_exclusive_transfer_mass_kg; raw:finish_accept_installed_not_accepted_mass_kg; raw:finish_accept_mass_balance_gap_kg; raw:finish_accept_kg_bridge_evidence; raw:finish_accept_complete_component_schedule_evidence; raw:finish_accept_mass_closure_evidence; raw:finish_accept_measurement_uncertainty_evidence; raw:finish_accept_incoming_assembly_component_mass_kg; raw:finish_accept_outgoing_assembly_component_mass_kg; raw:finish_accept_assembly_mass_view; raw:finish_accept_component_mass_manifest_evidence; raw:finish_accept_exclusive_fate_register_evidence; cp:cp_finish_accept; calc:actual_accessory_finish; calc:actual_finish_water; calc:actual_finish_accept_packaging_feed; calc:actual_finish_waste; calc:actual_finish_wastewater; calc:actual_finish_unused_return; calc:actual_finish_water_vapour; calc:actual_finish_other_release | calculated_finish_accept_mass_balance_gap_kg |  |
| calc_issue_materials_underlay_edges | survey_receive / issue_materials_underlay_edges | actual_issue_materials_underlay_edges按每个实际材料/SKU、当前状态及交接事件分别定义，取actual_issue_underlay、actual_issue_edge_metal、actual_issue_underlay_fixings对应材料子账中实测且不重叠的数量；不同具体材料分别展开为自己的产品交换，不将所有材料之和认作单一固定产品。每条具体交换以本材料实测kg/A归一化一次，并逐项匹配接收节点同材料输入、状态、事件和保管人。原材料子账仍独立进行采购、废物、可用退出及WIP质量闭合。 | calc:actual_issue_underlay; calc:actual_issue_edge_metal; calc:actual_issue_underlay_fixings; cp:cp_survey_receive; symbol:A | actual_issue_materials_underlay_edges |  |
| calc_issue_materials_shingle_details | survey_receive / issue_materials_shingle_details | actual_issue_materials_shingle_details按每个实际材料/SKU、当前状态及交接事件分别定义，取actual_issue_field_shingles、actual_issue_starter_cap_shingles、actual_issue_roof_nails、actual_issue_flashing_vent_components、actual_issue_asphalt_cement对应材料子账中实测且不重叠的数量；不同具体材料分别展开为自己的产品交换，不将所有材料之和认作单一固定产品。每条具体交换以本材料实测kg/A归一化一次，并逐项匹配接收节点同材料输入、状态、事件和保管人。原材料子账仍独立进行采购、废物、可用退出及WIP质量闭合。 | calc:actual_issue_field_shingles; calc:actual_issue_starter_cap_shingles; calc:actual_issue_roof_nails; calc:actual_issue_flashing_vent_components; calc:actual_issue_asphalt_cement; cp:cp_survey_receive; symbol:A | actual_issue_materials_shingle_details |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_instructions | 实际路线及全部构件 | 保留实际安装供应商/SKU说明修订、项目设计、基层验收及接口责任方。历史路线参考不提供当前通用规定。 | 实际说明/设计包、签署释放及完整构件清单；gaf-three-tab-route；gaf-fiberglass-physical-state |
| quality_identity | 每个实际具体交换 | 明确材料、复合整体或组成视图、物理状态、供应方/地理/电压或废物去向。直接排放须有实际物质/颗粒基准、介质和方向。有用语义汇总项并不是已验证具体最终交换。 | 供应商ID/状态/配方、废物保管凭证及物质采样证据。 |
| quality_geometry | 最终及内部面积状态 | 保留不同实测表面/状态ID、开口只扣一次及实际验收关口。不得用平面投影面积替代、重复作业产出或自动内部A/A。 | 竣工几何、唯一表面名册及匹配交接签字。 |
| quality_stock | 接收、发料、可用流出及包装 | 按确切材料/状态和全部实际保管子地点核对毛期初/接收/期末。未领用库存、已领用未用流出、废物、留存质量和已加工在制品互斥。下游包装须有进入保管链。 | 库存计数/秤量、唯一发料/接收、退回与废物凭证、供应商数据集边界。 |
| quality_mass_water | 全部真实节点及实际期间 | 使用兼容单位、当前状态换算及不确定性闭合材料和水池。观测面积不计kg平衡。转入留存组件质量及配方/接收水须实测，不从面积猜测。披露缺口；无验证去向证据不得差额推排放。 | 节点构件/水去向清单、独立数量/比例、质量/水闭合及不确定性记录。 |
| quality_rework | 不合格、拆除、纠正及在制品状态 | 记录缺陷、产生节点、处置、有方向交接及实际重复投入/服务。电子记录纠正保留沿袭。未解决不合格或已安装未验收状态不得增加A。 | 带时间的缺陷/处置及返工日志、接收保管和最终关口。 |
| quality_periods | 全部批次及报告期间 | 提供完整事件日期、库存/在制品移动和实际验收前全部期间投入/资产/输出归属，含等待/保护及终止/更换决策。 | 期间/阶段名册及签署归属决策；缺失区间显式保留缺口。 |
| quality_shared | 全部共用电力及服务消费者 | 提供电表拓扑/换算差值或实际计费服务期间、全部主表内直接分配、完整合格消费者，以及仅在需要剩余量分配时使用的有证据权重。 | 校准电表/拓扑、供应方记录、消费者名册及归属核对。 |
| quality_estimates | 每个独立范围 | 非参考范围全部保留为暂定reasoned_estimate，不声称外部定量支持。它们不是配方或默认活动数据。以独立已审查证据替换，不能用本批次最大值产生范围验证同批次。 | 独立已审查参考样本或记录的测量/因子不确定性；超范围调查记录。 |
| quality_completeness | 数据集及边界披露 | 报告未知、实际未发生证据、已执行/跳过检查及未完成关口。零、未发生与未知是不同状态；漏记实际作业须修正范围。 | 可审计字段完整性/缺口名册及签署边界/验收审查。 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | 场址/批次及实际作业 | 确认干燥兼容、验收合格木基层及实际三片式机械钉固路线。对超出已释放外部接口的实际基层/结构/导水坡/烟囱/反泛水/通风工作重新评估并建清单，拒绝隐藏排除。 | gaf-three-tab-route |
| validate_components | 组件和连接 | 将完整实际构件清单、规定层次及节点/通风责任与接收、实测发料、同状态接收、安装留存及真实废物/未用/在制品去向核对。核查实际说明/设计验收要求，不采用通用件数或性能默认。 | gaf-three-tab-route; gaf-fiberglass-physical-state |
| validate_handoffs | 所有基层/材料/组件/包装交接 | 逐一按事件、材料或表面ID、当前状态、数量/单位、期间和保管方比对双方。物理观测接口与设计证据分开。不得将内部接收固定为1或在下游新增外部生产。 |  |
| validate_final_area | accepted_roof_service | 由唯一最终验收斜面几何得到A > 0，开口扣一次且所有关口证据齐全。A/A仅计一次；排除未完成密封/节点/通风条件、未解决不合格及未验收在制品。不添加搭接、裁切或返工面积。 | gaf-three-tab-route |
| validate_receipt_exit | 毛库存及正向U/X | 按确切保管/子地点核查G = 期初 + 接收 - 未领用完整期末库存，只计一次。全部毛量匹配实测发料、实际接收废物、可用流出及互斥去向。无二次流出扣除、负信用、缺失下游进入或重复包装覆盖。 |  |
| validate_rework | 每项不合格/偏离事件 | 每项不合格/偏离事件须有产生节点/状态、处置及匹配有方向返工/退回，或真实废物/回收/可用边界流出。保留实际重复作业和原材料负担；未解决不合格面积不得计入验收输出。 |  |
| validate_finishing | finish_accept | 核查实际母体至饰面交接、规定/实际饰面发生、供应材料/服务及互斥残留/排放。记录密封等待及实际保护负荷，不假定涂漆、固定密封时长或虚构加热。 | gaf-three-tab-route |
| validate_mass_water | 全部节点及最终水去向 | 核查确切原单位到kg换算及互斥材料/构件水池，保留实际转入组件质量/含水。毛水量已扣完整库存一次；U/X、结合/自由留存、交接、废物水、直接液态水、期末已加工在制品及其他转移不得重叠。差额或负平衡是缺口，不自动为H2O水蒸气或其他排放。 |  |
| validate_release | 每个直接环境交换 | 每个直接环境交换须有实际物质/颗粒基准、方向、介质、数量及捕集证据。捕集废物和液态接收方交接与未捕集环境排放分开；H2O向空气身份本身不提供发生或数量。 |  |
| validate_power_service | 每个共用资产、节点及期间 | 对每个共用资产、节点和期间识别供应方/资产、实际期间/拓扑、全部使用节点/批次/期间及已审查归属基准。换算电表/计费总量核对一次。仅扣主表内直接量；零剩余量无需权重，正剩余量须完整正合格分母。负/未知闭合阻止归属。不用默认班次/人工/寿命代理。 |  |
| validate_periods | 完整批次至验收 | 核查完整批次直到验收的每个实际期间/阶段/事件及库存/在制品结转和期间归属。调查缺失、更换/终止未解决及重复负担归属；最终唯一A只出现一次。 |  |
| validate_dimensions | 流卡、协议和计算 | 流卡、协议及计算须有本节点协议关联、声明ASCII原始字段/输入及兼容单位。与库存行关联的每个actual_*输出是其规则和流卡数量中命名的未归一化物理分子，仅按A归一化一次。纯观测及材料交接子账输出保留为协议计量，不生成额外交换。normalized_accepted_roof_service是唯一已归一化输出。 |  |
| validate_ranges | 每个独立流卡 | 每个非参考流卡保留独立暂定reasoned_estimate诊断范围，参考量保留严格计算1..1身份。独立调查极端值、必需用途缺失及完整性；筛选通过不证明物理或身份就绪。 |  |
| validate_reporting | 发布数据集包 | 发布数据包须披露实际边界、供应商说明/设计与数据集覆盖、期间、方法/测量证据、缺口及已执行/跳过检查。具体身份或流属性/单位支持未解决的交换不得最终确定。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景安装服务数据包；下游process和lifecyclemodel投影保留该已审查边界及验收关口。 |
| downstream_use | 实际产品、路线、地理、期间、释放接口及验收条件兼容且披露时，可用于secondary_dataset及background_dataset。 |
| allowed_use | 在已接收验收合格干燥木基层上规定完整机械钉固玻纤三片式覆盖安装服务，以实际构件/饰面/支持记录按验收唯一A归一化。 |
| excluded_use | 通用屋面、构架/基层修理或生产、旧屋面拆除/覆盖、其他屋面路线及未来使用/维护/寿命终结；将历史产品尺寸/性能或暂定筛选范围外推为默认值。 |
| required_metadata | PCR身份、实际场址/批次和日期、几何/开口、供应商/SKU/批次/说明修订、设计/释放/责任、构件/包装来源边界、期间/资产、返工/处置、全部实际交换单位及最终关口。 |
| required_quality_disclosure | 身份/支持覆盖、实际计量/换算及校准证据、采集覆盖、库存/保管/电表及材料/水核对、暂定范围、分配决策、缺失期间/数量/物种及已执行/跳过检查。 |
| update_trigger | 产品/路线、基层接口、责任、设计/说明、层次/细节/密封/通风要求、实际饰面/清理、供应商/属性/单位、服务拓扑、分配处理、期间覆盖变化，或影响缺口/筛选的新证据。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| gaf-three-tab-route | handbook | https://www.gaf.com/en-us/document-library/documents/installation-instructions-%26-guides/royal-sovereign-shingles-english-size-installation-instructions.pdf | GAF Royal Sovereign/Sentinel英制尺寸安装说明，历史封面Updated 10/14；仅支撑产品特定路线拆解、垫层/边部/钉固/起始/斜脊/屋脊/节点/天沟/通风用途、手工密封条件性、瓦背离型膜留存及潜在裁切粉尘/烟气。实际安装屋面由真实供应商说明/设计控制。不得将任何数值坡度/层数/搭接/钉数/温度/时间/性能用作默认。 |
| gaf-fiberglass-physical-state | handbook | https://www.gaf.com/en-us/document-library/documents/data-sheets/royal-sovereign-metrics-_data-sheet.pdf | GAF Royal Sovereign公制数据表，仅支撑明确的玻璃纤维/沥青成品构造。公制尺寸、片数/钉数及性能/质保/标准陈述不提供通用活动或设计因子。 |
