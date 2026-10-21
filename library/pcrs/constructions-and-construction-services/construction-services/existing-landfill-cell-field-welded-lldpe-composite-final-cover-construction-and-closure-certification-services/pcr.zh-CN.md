---
pcr_id: pcr.construction-services.existing-landfill-cell-field-welded-lldpe-composite-final-cover-construction-and-closure-certification-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 既有填埋单元现场焊接LLDPE复合最终覆盖施工及封场认证服务

## 1. 范围与适用性

本PCR覆盖在已识别的保留已填废物填埋单元上，完成现场焊接LLDPE复合最终覆盖施工并取得封场认证的服务。本范围要求按批准设计使低渗土料或GCL与LLDPE复合接触；实际设计的排水、气体、防护及植被层另行识别。从已填单元基线获接受时开始，不是新建填埋场工程。实际许可、封场设计和CQA要求决定工作及责任认证。来源支持物理职责；历史Rose Hill RCRA/CERCLA案例门槛并非通用生活垃圾填埋场规定。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-landfill-cell-field-welded-lldpe-composite-final-cover-construction-and-closure-certification-services |
| classification_refs | CPC 3.0 54290; narrower |
| covered_products | 既有已填废物填埋单元认证复合最终覆盖封场服务 |
| excluded_products | 新填埋场或底衬；运营/填废；日/中间覆盖；纯土质蒸散盖；裸膜供应；焚烧/核工程；后续封场管护 |
| representative_product | 经认证的现场焊接LLDPE复合填埋场最终封场覆盖服务 |
| production_route | 合格既有单元准备基底→批准土料/GCL与现场焊接LLDPE复合阻水及设计其他层/接口→检查/修补/试验完成覆盖→封场认证 |
| market_state | 已完成并签署封场认证交付的施工服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 经认证的现场焊接LLDPE复合填埋场最终封场覆盖服务 |
| How much | 1 m2 |
| How well | 实际批准封场/CQA方案、材料/接口/层位及试验验收、竣工资料、缺陷闭合及签署认证 |
| How long or cycle | 一次实际准备至封场认证施工批次；声明阶段/时期日期；后续管护分开，不假定寿命 |
| reference_flow_link | `certified_final_cover` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| product_flow | 经认证的现场焊接LLDPE复合填埋场最终封场覆盖服务 |
| flow_property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| unit_group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| reference_unit | m2 |
| required_qualifiers | cell_id; retained_waste_baseline; jurisdiction_and_approved_plan; climate_topography; LLDPE_grade_surface_thickness; soil_or_GCL_composite_contact; layer_sequence_and_interfaces; CQA_acceptance_and_certification; developed_surface_and_slope_convention; project_campaign_and_periods |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| net_area | certified_final_cover | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A为cp_cap_gate采集的实际正值唯一净展开已完成认证最终覆盖面积，单位m2。声明测量口径，实际坡面仅计一次。将归属清单归一到1 m2。不得相加各层、搭接、修补、卷面积或prepare交接面积。 |
| native_units | all inventory rows | Actual compatible verified property | actual native unit | 各实际供应及退回SKU保留原生Area、Length、Count、Volume、Mass、Energy或供应商服务单位，独立核实兼容支撑身份。native_state约束具有实际状态与温度的不可相加密度/含水转换；能量、时间及价格不能强制为件数服务或质量。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 明确既有已填单元、废物/中间覆盖测量及保留气体/渗滤液接口；实际批准封场和CQA方案 |
| starting_condition_role | retained_asset_baseline |
| product_classification_scope | 其他土木工程施工中的特定填埋场最终封场覆盖服务 |
| recursive_input_rule | 内部基底及层交接是活动，不重新采购本工程输出；实际同类外购服务须明确门槛和资源覆盖 |
| upstream_dataset_requirement | 完整实际产品/服务及资本生命周期范围、地域/技术/状态和原生单位；披露覆盖缺失 |
| disclosure | 实际设计、保留基线、归属方法、库存口径、供应商/资产归属、阶段及排除的后续管护 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_gate | 所有过程 | 承担实际整形、基底调理/压实、批准土料或GCL与LLDPE复合阻水层、另行设计的气体/排水/防护/侵蚀控制层及连接、现场焊接、检测、修补和认证。交付门槛包括符合方案的最终层位测量、材料追溯、实际规定的非破坏/破坏焊缝试验、穿透/锚固和排水/气体检查、规定的侵蚀控制/植被建立、缺陷闭合、竣工资料及责任工程师/业主/主管方签署验收。标准、层厚、含水/压实限值、试验频率、气象限制及认证职责均来自实际适用批准方案；本PCR不规定施工工程参数。 | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| baseline_increment | 所有过程 | 施工前声明保留废物、中间覆盖、既有气体/渗滤液设施、背景分解及基线气/水流。历史废物制造不得重新采购。承担实际增量整形/移除、扰动释放、临时收集/抽排/处理、损坏、污染控制及恢复。通过可比基线与工程/事件测量建立归属并说明混杂因素与不确定性；归属缺失是实质数据缺口，不能自动归零或假定净减排。 | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| owned_resources | 所有过程 | 实际直接与分包资源、租赁/供应商资产、进退场、货运及必要空返、临时设施、取样、破坏试样、重试、清理及库存流出均计一次。增加物理采购前拆明上游服务覆盖。工厂复合组件已包含工厂组成。排除运营填废、新单元底衬或整体填埋场、日/中间覆盖、纯土质蒸散盖和后续封场管护。 | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| internal_handoffs | 所有过程 | prepare向cap的基底交接是通过transfer_id关联的内部状态转移，不是额外外购或最终参考输出。实际准备与验收覆盖范围分开记录。同类外购封场覆盖服务须明确其实际认证门槛及完整上游范围；不得递归重新采购本工程。 | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：批准的整形及基底土料供应 (`prep_soil`)

过程／待建立交换的方向／类型：`prepare` / `inputs` / `product`.

逐项按实际供应原生Mass/kg或Volume/m3记录外购土料等级及交付干湿、松散/压实状态；原位废物和中间覆盖层属于基线，不是新供应土料。场内调配是活动记录，不得重复采购。

- 采集对象：批准的整形及基底土料供应
- 流属性/单位：实际核实的土料属性 / 实际原生供应单位
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_stock`
- 来源：`epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

数量范围证据需求：采集实际批准的整形及基底土料供应原生SKU收货、匹配退回、库存及安装状态记录、供应商规格及测量不确定性。层设计/搭接、含水/密度或单件尺寸均为实际工程证据，不设默认率。

#### 采集要求：实际基底调理剂及临时防护耗材 (`prep_conditioners`)

过程／待建立交换的方向／类型：`prepare` / `inputs` / `product`.

仅记录实际批准用于形成合格基底或保护暴露界面的产品；采集产品组成，排除供应成品已覆盖的工厂配料。

- 采集对象：实际基底调理剂及临时防护耗材
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_stock`
- 来源：

数量范围证据需求：采集实际基底调理剂及临时防护耗材原生SKU收货、匹配退回、库存及安装状态记录、供应商规格及测量不确定性。层设计/搭接、含水/密度或单件尺寸均为实际工程证据，不设默认率。

#### 采集要求：基底准备实际燃料供应 (`prepare_fuel`)

过程／待建立交换的方向／类型：`prepare` / `inputs` / `product`.

各实际燃料SKU保留实际原生供应属性/单位（按实际供应采用Mass/kg或Volume/l或m3）；分别核对燃烧、可用退回、未燃受控废液、未受控释放及期末库存。必要质量视图需要实际密度、温度与来源，且不得相加。

- 采集对象：基底准备实际燃料供应
- 流属性/单位：实际核实的燃料属性 / 实际原生供应单位
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_energy`
- 来源：

数量范围证据需求：采集实际燃料SKU收货、期初期末及实测燃烧或完整互斥去向和表计/库存不确定性；无可迁移每m2升数。

#### 采集要求：基底准备实际分包施工检测及临时管理服务 (`prepare_services`)

过程／待建立交换的方向／类型：`prepare` / `inputs` / `product`.

展开实际供应商成果，包括合格土方或焊接检测、临时气体/渗滤液/雨水管理、实验室和临时设施。独立计量货运归入本节点freight卡；其他服务保留自身原生物理单位。声明已完成物理成果、原生单位及覆盖资源。补齐分包燃料、材料、废物和资本范围；价格或工时不等同于完整服务数量。

- 采集对象：基底准备实际分包施工检测及临时管理服务
- 流属性/单位：实际核实的服务属性 / 实际原生单位
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_service`
- 来源：

数量范围证据需求：按供应商/事件采集原生物理完工服务量及覆盖；货运需实际载重/距离及空返。从这些记录取得波动/不确定性，不采用价格/工时等效。

#### 采集要求：基底准备分摊施工及CQA资产全生命周期服务 (`prepare_assets`)

过程／待建立交换的方向／类型：`prepare` / `inputs` / `product`.

包括本节点使用的挖掘机、压实机、泵、焊机、检测仪、车辆及临时设施。按asset_share选择全生命周期每驱动单位服务或原生资产等效份额，不得并加。共享消费者包括其他工程和时期。

- 采集对象：基底准备分摊施工及CQA资产全生命周期服务
- 流属性/单位：实际核实的资产或服务属性 / 实际原生单位
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_service`
- 来源：

数量范围证据需求：提供实际工程驱动和全寿命所有消费者分母、观察历史/剩余、替换/终止/报废及敏感性证据；无假定机械寿命或每面积资产比例。

#### 采集要求：基底准备实际货运工作量 (`prepare_freight`)

过程／待建立交换的方向／类型：`prepare` / `inputs` / `product`.

记录实际材料进出、库存退回、废物及机械进退场货运的载重乘实载距离、兼容方式及实际必要空返。明确供应商/原生货运单位及完整燃料/车辆覆盖。此独立计量职责不是所有施工/检测服务活动；供应商或废物处理范围已覆盖的重叠货运不得叠加。

- 采集对象：基底准备实际货运工作量
- 流属性/单位：mass*distance / kg*km
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_service`
- 来源：

数量范围证据需求：逐实际运输段采集归属实载质量与实载距离、方式、路线、共载分配、必要空返活动及供应商覆盖，并保留称重、距离与分配不确定性。空载段须由有证据的货运服务覆盖或另记车辆活动，不虚构正货重。不设默认运距或每m2的kg*km。

#### 采集要求：基底准备实际淡水取用 (`prep_abstraction`)

过程／待建立交换的方向／类型：`prepare` / `inputs` / `elementary`.

仅包括实际从环境直接取得的水，注明来源介质和许可证据；不重复产品供水。

- 采集对象：基底准备实际淡水取用
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_stock`
- 来源：

数量范围证据需求：采集按来源计量的实际供水/取水、用途及废水/排放/土壤含水/蒸发去向证据和不确定性；无假定用水率或重复采购交付水分。

#### 采集要求：基底准备匹配可用外部退回 (`prepare_returns`)

过程／待建立交换的方向／类型：`prepare` / `outputs` / `product`.

按与收货匹配的单位和状态展开可用土料、卷材、管材、配件、燃料及耗材的外部退回。内部转移及期末库存不是外部退回。总投入含流出或净消耗口径只选一次。两种口径均保留本物理退回卡；净消耗口径下仅审计，不再扣除或抵扣。

- 采集对象：基底准备匹配可用外部退回
- 流属性/单位：实际退回产品属性 / 匹配原生单位
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_stock`
- 来源：

数量范围证据需求：采集实际匹配可用外退SKU数量/状态及回执不确定性；无通用残值比例，期末库存不是退回。

#### 采集要求：基底准备实际受控液体废物 (`prepare_liquid_waste`)

过程／待建立交换的方向／类型：`prepare` / `outputs` / `waste`.

按组成与去向分别记录工程归属渗滤液、受污染抽排水、清洗水及未燃燃料/油品的处理转移。受控废水转移属于废物流，不是环境排放；燃料原生升记录必须明确换算。

- 采集对象：基底准备实际受控液体废物
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_waste`
- 来源：

数量范围证据需求：逐流采集增量受控废水/渗滤液及未燃液体、组成、计量/密度状态及实际处理回执；不假定泵流率或一律零扰动。

#### 采集要求：基底准备实际向空气的物种排放 (`prepare_air`)

过程／待建立交换的方向／类型：`prepare` / `outputs` / `elementary`.

仅对归属本工程的燃烧、扰动填埋气、扬尘及材料/整液释放建立实际物种与空气介质交换。采用实测物种质量，或匹配活动乘物种因子，或实测整液释放乘有证据的组成与去向。完整物种因子不得再乘组成或去向。基线分解及既有收集流单独计量披露；不得编造气体因子、一律归零或给未来甲烷减排抵扣。

- 采集对象：基底准备实际向空气的物种排放
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_emission`
- 来源：

数量范围证据需求：采集实际事件/物种/介质质量或匹配活动因子操作数及组成/去向证据、可比基线和归属不确定性；无通用填埋气、扬尘或溢漏排放因子。

#### 采集要求：基底准备实际向水体或土壤的物种释放 (`prepare_water_soil`)

过程／待建立交换的方向／类型：`prepare` / `outputs` / `elementary`.

识别未受控溢漏、排放或受扰污染材料的实际物种、受纳水体/土壤介质及增量工程事件。整液体积及受控废物质量属于审计视图，不是额外物种交换。安全说明书危害浓度和一般低VOC声明不能量化排放。

- 采集对象：基底准备实际向水体或土壤的物种释放
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_emission`
- 来源：

数量范围证据需求：采集实际事件/物种/介质质量或匹配活动因子操作数及组成/去向证据、可比基线和归属不确定性；无通用填埋气、扬尘或溢漏排放因子。

#### 采集要求：基底准备实际施工水向环境释放 (`prepare_water_release`)

过程／待建立交换的方向／类型：`prepare` / `outputs` / `elementary`.

按事件记录归属实际退水/排水或蒸发进入有证据受纳介质的水量。区分土壤含水保留/期末水、受控废水处理转移及原有基线水流。通过相同水事件ID联结另行量化的实际污染物种，不重复整液水量；不得假定蒸发或零扰动。

- 采集对象：基底准备实际施工水向环境释放
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_emission`
- 来源：

数量范围证据需求：采集按来源计量的实际供水/取水、用途及废水/排放/土壤含水/蒸发去向证据和不确定性；无假定用水率或重复采购交付水分。

#### 采集要求：覆盖施工实际燃料供应 (`cap_fuel`)

过程／待建立交换的方向／类型：`cap` / `inputs` / `product`.

各实际燃料SKU保留实际原生供应属性/单位（按实际供应采用Mass/kg或Volume/l或m3）；分别核对燃烧、可用退回、未燃受控废液、未受控释放及期末库存。必要质量视图需要实际密度、温度与来源，且不得相加。

- 采集对象：覆盖施工实际燃料供应
- 流属性/单位：实际核实的燃料属性 / 实际原生供应单位
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_energy`
- 来源：

数量范围证据需求：采集实际燃料SKU收货、期初期末及实测燃烧或完整互斥去向和表计/库存不确定性；无可迁移每m2升数。

#### 采集要求：覆盖施工实际分包施工检测及临时管理服务 (`cap_services`)

过程／待建立交换的方向／类型：`cap` / `inputs` / `product`.

展开实际供应商成果，包括合格土方或焊接检测、临时气体/渗滤液/雨水管理、实验室和临时设施。独立计量货运归入本节点freight卡；其他服务保留自身原生物理单位。声明已完成物理成果、原生单位及覆盖资源。补齐分包燃料、材料、废物和资本范围；价格或工时不等同于完整服务数量。

- 采集对象：覆盖施工实际分包施工检测及临时管理服务
- 流属性/单位：实际核实的服务属性 / 实际原生单位
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_service`
- 来源：

数量范围证据需求：按供应商/事件采集原生物理完工服务量及覆盖；货运需实际载重/距离及空返。从这些记录取得波动/不确定性，不采用价格/工时等效。

#### 采集要求：覆盖施工分摊施工及CQA资产全生命周期服务 (`cap_assets`)

过程／待建立交换的方向／类型：`cap` / `inputs` / `product`.

包括本节点使用的挖掘机、压实机、泵、焊机、检测仪、车辆及临时设施。按asset_share选择全生命周期每驱动单位服务或原生资产等效份额，不得并加。共享消费者包括其他工程和时期。

- 采集对象：覆盖施工分摊施工及CQA资产全生命周期服务
- 流属性/单位：实际核实的资产或服务属性 / 实际原生单位
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_service`
- 来源：

数量范围证据需求：提供实际工程驱动和全寿命所有消费者分母、观察历史/剩余、替换/终止/报废及敏感性证据；无假定机械寿命或每面积资产比例。

#### 采集要求：独立供应的防护及过滤土工布 (`separate_geotextile`)

过程／待建立交换的方向／类型：`cap` / `inputs` / `product`.

仅记录未包含在GCL或复合排水组件中的独立采购防护、缓冲、隔离或过滤层；保留实际SKU/状态及安装层位图。

- 采集对象：独立供应的防护及过滤土工布
- 流属性/单位：Area / m2
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_stock`
- 来源：`epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

数量范围证据需求：采集实际独立供应的防护及过滤土工布原生SKU收货、匹配退回、库存及安装状态记录、供应商规格及测量不确定性。层设计/搭接、含水/密度或单件尺寸均为实际工程证据，不设默认率。

#### 采集要求：实际排水及气体接口管材长度 (`pipes`)

过程／待建立交换的方向／类型：`cap` / `inputs` / `product`.

各实际管材、直径、压力/孔隙等级及功能保留原生长度；包括与既有气体/渗滤液接口及雨水出口的实际连接。保留旧管是基线，实际替换及临时管由本工程承担。

- 采集对象：实际排水及气体接口管材长度
- 流属性/单位：Length / m
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_stock`
- 来源：`epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

数量范围证据需求：采集实际排水及气体接口管材长度原生SKU收货、匹配退回、库存及安装状态记录、供应商规格及测量不确定性。层设计/搭接、含水/密度或单件尺寸均为实际工程证据，不设默认率。

#### 采集要求：实际按件供应的管件锚固及穿透组件 (`fittings`)

过程／待建立交换的方向／类型：`cap` / `inputs` / `product`.

按SKU记录管件、排气件、套靴、夹具和锚件的实际供应件数，并保留尺寸和兼容性参数。件数不得替代独立供应的管材长度或卷材面积。

- 采集对象：实际按件供应的管件锚固及穿透组件
- 流属性/单位：Count / item
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_stock`
- 来源：`epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

数量范围证据需求：采集实际按件供应的管件锚固及穿透组件原生SKU收货、匹配退回、库存及安装状态记录、供应商规格及测量不确定性。层设计/搭接、含水/密度或单件尺寸均为实际工程证据，不设默认率。

#### 采集要求：规定的土料骨料及植被覆盖介质 (`cap_soil`)

过程／待建立交换的方向／类型：`cap` / `inputs` / `product`.

按层和材料展开实际采用的低渗土质阻水层、气体/排水矿物层、防护和植被介质。交付松散体积与安装压实体积为不同不可相加状态，并核对实际干固体及含水。场内再用土是带来源及处理负荷的内部活动，不是新供应或默认零负荷。

- 采集对象：规定的土料骨料及植被覆盖介质
- 流属性/单位：实际核实的土料属性 / 实际原生供应单位
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_stock`
- 来源：`epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

数量范围证据需求：采集实际规定的土料骨料及植被覆盖介质原生SKU收货、匹配退回、库存及安装状态记录、供应商规格及测量不确定性。层设计/搭接、含水/密度或单件尺寸均为实际工程证据，不设默认率。

#### 采集要求：实际侵蚀控制植被建立及土壤改良产品 (`erosion_vegetation`)

过程／待建立交换的方向／类型：`cap` / `inputs` / `product`.

按质量SKU记录实际种子、覆盖料、肥料、黏结剂及土壤改良产品，保留实际交付组成/含水及去向。独立按面积供应的侵蚀毯归入erosion_blanket。无通用施用率、植被产量或维护寿命。

- 采集对象：实际侵蚀控制植被建立及土壤改良产品
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_stock`
- 来源：`epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

数量范围证据需求：采集实际侵蚀控制植被建立及土壤改良产品原生SKU收货、匹配退回、库存及安装状态记录、供应商规格及测量不确定性。层设计/搭接、含水/密度或单件尺寸均为实际工程证据，不设默认率。

#### 采集要求：实际焊接及安装耗材 (`weld_consumables`)

过程／待建立交换的方向／类型：`cap` / `inputs` / `product`.

记录实际挤出焊条、清洗剂、密封剂、补片附件及试验修补耗材的配方与交付基准，排除已包含于膜材库存的材料。无释放证据时不得把溶剂含量当排放量。

- 采集对象：实际焊接及安装耗材
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_stock`
- 来源：`epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

数量范围证据需求：采集实际焊接及安装耗材原生SKU收货、匹配退回、库存及安装状态记录、供应商规格及测量不确定性。层设计/搭接、含水/密度或单件尺寸均为实际工程证据，不设默认率。

#### 采集要求：独立供应的侵蚀控制毯或垫 (`erosion_blanket`)

过程／待建立交换的方向／类型：`cap` / `inputs` / `product`.

仅记录实际按面积独立供应的毯垫SKU，排除工厂复合组件已含织物。无实际产品面密度与证据不得转质量；该质量视图不是额外采购。

- 采集对象：独立供应的侵蚀控制毯或垫
- 流属性/单位：Area / m2
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_stock`
- 来源：`epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

数量范围证据需求：采集实际独立供应的侵蚀控制毯或垫原生SKU收货、匹配退回、库存及安装状态记录、供应商规格及测量不确定性。层设计/搭接、含水/密度或单件尺寸均为实际工程证据，不设默认率。

#### 采集要求：覆盖施工实际货运工作量 (`cap_freight`)

过程／待建立交换的方向／类型：`cap` / `inputs` / `product`.

记录实际材料进出、库存退回、废物及机械进退场货运的载重乘实载距离、兼容方式及实际必要空返。明确供应商/原生货运单位及完整燃料/车辆覆盖。此独立计量职责不是所有施工/检测服务活动；供应商或废物处理范围已覆盖的重叠货运不得叠加。

- 采集对象：覆盖施工实际货运工作量
- 流属性/单位：mass*distance / kg*km
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_service`
- 来源：

数量范围证据需求：逐实际运输段采集归属实载质量与实载距离、方式、路线、共载分配、必要空返活动及供应商覆盖，并保留称重、距离与分配不确定性。空载段须由有证据的货运服务覆盖或另记车辆活动，不虚构正货重。不设默认运距或每m2的kg*km。

#### 采集要求：覆盖施工实际淡水取用 (`cap_abstraction`)

过程／待建立交换的方向／类型：`cap` / `inputs` / `elementary`.

仅计直接从环境取水，与产品供水和土料自带水分区分，记录实际来源介质与归属。

- 采集对象：覆盖施工实际淡水取用
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_stock`
- 来源：

数量范围证据需求：采集按来源计量的实际供水/取水、用途及废水/排放/土壤含水/蒸发去向证据和不确定性；无假定用水率或重复采购交付水分。

#### 采集要求：覆盖施工匹配可用外部退回 (`cap_returns`)

过程／待建立交换的方向／类型：`cap` / `outputs` / `product`.

按与收货匹配的单位和状态展开可用土料、卷材、管材、配件、燃料及耗材的外部退回。内部转移及期末库存不是外部退回。总投入含流出或净消耗口径只选一次。两种口径均保留本物理退回卡；净消耗口径下仅审计，不再扣除或抵扣。

- 采集对象：覆盖施工匹配可用外部退回
- 流属性/单位：实际退回产品属性 / 匹配原生单位
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_stock`
- 来源：

数量范围证据需求：采集实际匹配可用外退SKU数量/状态及回执不确定性；无通用残值比例，期末库存不是退回。

#### 采集要求：覆盖施工实际受控液体废物 (`cap_liquid_waste`)

过程／待建立交换的方向／类型：`cap` / `outputs` / `waste`.

按组成与去向分别记录工程归属渗滤液、受污染抽排水、清洗水及未燃燃料/油品的处理转移。受控废水转移属于废物流，不是环境排放；燃料原生升记录必须明确换算。

- 采集对象：覆盖施工实际受控液体废物
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_waste`
- 来源：

数量范围证据需求：逐流采集增量受控废水/渗滤液及未燃液体、组成、计量/密度状态及实际处理回执；不假定泵流率或一律零扰动。

#### 采集要求：覆盖施工实际向空气的物种排放 (`cap_air`)

过程／待建立交换的方向／类型：`cap` / `outputs` / `elementary`.

仅对归属本工程的燃烧、扰动填埋气、扬尘及材料/整液释放建立实际物种与空气介质交换。采用实测物种质量，或匹配活动乘物种因子，或实测整液释放乘有证据的组成与去向。完整物种因子不得再乘组成或去向。基线分解及既有收集流单独计量披露；不得编造气体因子、一律归零或给未来甲烷减排抵扣。

- 采集对象：覆盖施工实际向空气的物种排放
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_emission`
- 来源：

数量范围证据需求：采集实际事件/物种/介质质量或匹配活动因子操作数及组成/去向证据、可比基线和归属不确定性；无通用填埋气、扬尘或溢漏排放因子。

#### 采集要求：覆盖施工实际向水体或土壤的物种释放 (`cap_water_soil`)

过程／待建立交换的方向／类型：`cap` / `outputs` / `elementary`.

识别未受控溢漏、排放或受扰污染材料的实际物种、受纳水体/土壤介质及增量工程事件。整液体积及受控废物质量属于审计视图，不是额外物种交换。安全说明书危害浓度和一般低VOC声明不能量化排放。

- 采集对象：覆盖施工实际向水体或土壤的物种释放
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_emission`
- 来源：

数量范围证据需求：采集实际事件/物种/介质质量或匹配活动因子操作数及组成/去向证据、可比基线和归属不确定性；无通用填埋气、扬尘或溢漏排放因子。

#### 采集要求：覆盖施工实际施工水向环境释放 (`cap_water_release`)

过程／待建立交换的方向／类型：`cap` / `outputs` / `elementary`.

按事件记录归属实际退水/排水或蒸发进入有证据受纳介质的水量。区分土壤含水保留/期末水、受控废水处理转移及原有基线水流。通过相同水事件ID联结另行量化的实际污染物种，不重复整液水量；不得假定蒸发或零扰动。

- 采集对象：覆盖施工实际施工水向环境释放
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_emission`
- 来源：

数量范围证据需求：采集按来源计量的实际供水/取水、用途及废水/排放/土壤含水/蒸发去向证据和不确定性；无假定用水率或重复采购交付水分。

#### 采集要求：基底准备实际分类固体施工废物 (`prepare_solid_waste`)

过程／待建立交换的方向／类型：`prepare` / `outputs` / `waste`.

每个物理上独立的实际废物流、组成/状态及接收方须建立独立原子交换。本采集要求不是合并废物流；真实未分离的物理混合物可使用有证据的混合物身份，已分离去向不得重新合并。

识别实际土方/残渣、不合格材料、边角料、破坏试验试样、包装及受污染吸附材料，记录干湿基及实际许可去向。移出的历史废物不是负数新材料采购。保留未退回损失的上游负荷，不默认回收抵扣。

- 采集对象：基底准备实际分类固体施工废物
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_waste`
- 来源：

数量范围证据需求：采集实际分类残渣/边角料/试样/包装废物质量、干湿状态、称重不确定性及去向回执；无默认拒收或回收比例。

#### 采集要求：覆盖施工实际分类固体施工废物 (`cap_solid_waste`)

过程／待建立交换的方向／类型：`cap` / `outputs` / `waste`.

每个物理上独立的实际废物流、组成/状态及接收方须建立独立原子交换。本采集要求不是合并废物流；真实未分离的物理混合物可使用有证据的混合物身份，已分离去向不得重新合并。

识别实际土方/残渣、不合格材料、边角料、破坏试验试样、包装及受污染吸附材料，记录干湿基及实际许可去向。移出的历史废物不是负数新材料采购。保留未退回损失的上游负荷，不默认回收抵扣。

- 采集对象：覆盖施工实际分类固体施工废物
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_waste`
- 来源：

数量范围证据需求：采集实际分类残渣/边角料/试样/包装废物质量、干湿状态、称重不确定性及去向回执；无默认拒收或回收比例。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare | 既有单元基底准备及准入检验 | required | 所有本范围工程 | 将实际入场土料/基线调理为独立检查合格基底；拒收区再调理后方可向cap放行 | 实测准备展开面积、土料状态及验收记录；内部交接 |
| cap | 复合覆盖安装CQA及封场认证 | required | 在prepare合格交接后 | 整合批准阻水及其他设计层，现场焊接/检测/修补并认证最终覆盖 | 认证唯一净展开最终覆盖面积A |

### 过程：基底准备及准入检验 (`prepare`)

#### 输入

##### 产品流

###### 基底准备施工供水 (`prep_water`)

按来源和用途区分产品供水与直接取水；交付土料自带水分不是另一笔采购水。

- 选定流：基底准备施工供水
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_stock`
- 来源：

数量范围证据需求：采集按来源计量的实际供水/取水、用途及废水/排放/土壤含水/蒸发去向证据和不确定性；无假定用水率或重复采购交付水分。

###### 基底准备计量供电 (`prepare_electricity`)

记录电网、临时电源及供应商计量用电，并说明上游范围。发电机燃料及其供电不得重复承担同一发电负荷。

- 选定流：基底准备计量供电
- 流属性/单位：Energy / kWh
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_energy`
- 来源：

数量范围证据需求：采集逐阶段电表不确定性、进出电、待机及供应商供电范围；无默认焊接、抽排或压实每m2电耗。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 既有填埋单元合格基底交接 (`prepared_subgrade`)

按设计完成整形、含水调理及压实/检验后向覆盖组装内部交接。记录实际验收基底展开面积及状态；它不是另售最终覆盖或额外采购。拒收区域留在prepare节点直至整改。

- 选定流：既有填埋单元合格基底交接
- 流属性/单位：Area / m2
- 数量规则：将实际合格准备基底展开面积仅除以A一次；为不可相加内部交接，不固定成1 m2。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare_gate`
- 来源：`epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

数量范围证据需求：采集合格准备范围、拒收区面积、入场与压实土料状态及独立准入检查的不确定性；不要求等于最终A。

##### 废物流

##### 基本流

### 过程：复合覆盖安装及认证 (`cap`)

#### 输入

##### 产品流

###### 覆盖施工计量供电 (`cap_electricity`)

记录电网、临时电源及供应商计量用电，并说明上游范围。发电机燃料及其供电不得重复承担同一发电负荷。

- 选定流：覆盖施工计量供电
- 流属性/单位：Energy / kWh
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_energy`
- 来源：

数量范围证据需求：采集逐阶段电表不确定性、进出电、待机及供应商供电范围；无默认焊接、抽排或压实每m2电耗。

###### 规定的LLDPE土工膜卷材及焊接修补备料 (`lldpe_geomembrane`)

按批准设计记录可追溯LLDPE等级、表面、厚度及板片/卷号；供应卷材面积包含搭接、锚固延伸、试样及修补。现场焊缝、穿透及锚固按实际批准CQA验收。采购卷面积不等于A。

- 选定流：规定的LLDPE土工膜卷材及焊接修补备料
- 流属性/单位：Area / m2
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_stock`
- 来源：`epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

数量范围证据需求：采集实际规定的LLDPE土工膜卷材及焊接修补备料原生SKU收货、匹配退回、库存及安装状态记录、供应商规格及测量不确定性。层设计/搭接、含水/密度或单件尺寸均为实际工程证据，不设默认率。

###### 规定的土工合成黏土衬垫阻水组件 (`gcl_barrier`)

实际采用GCL与LLDPE紧密复合接触形成低渗透组件时记录。采购GCL已含的膨润土和载体不得重复购入。批准土质阻水层替代GCL时记录未用GCL并使用cap_soil；复合排水层不得悄然替代阻水职责。

- 选定流：规定的土工合成黏土衬垫阻水组件
- 流属性/单位：Area / m2
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_stock`
- 来源：`epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

数量范围证据需求：采集实际规定的土工合成黏土衬垫阻水组件原生SKU收货、匹配退回、库存及安装状态记录、供应商规格及测量不确定性。层设计/搭接、含水/密度或单件尺寸均为实际工程证据，不设默认率。

###### 规定的复合排水土工材料 (`composite_drain`)

记录实际批准的排水芯及结合过滤织物SKU；层位与排水出口须符合设计。工厂已复合织物不得另作独立土工布采购。排水功能本身不能证明复合阻水合格。

- 选定流：规定的复合排水土工材料
- 流属性/单位：Area / m2
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_stock`
- 来源：`epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

数量范围证据需求：采集实际规定的复合排水土工材料原生SKU收货、匹配退回、库存及安装状态记录、供应商规格及测量不确定性。层设计/搭接、含水/密度或单件尺寸均为实际工程证据，不设默认率。

###### 覆盖施工及建立用供水 (`cap_water`)

记录验收前铺设、抑尘、清洁、试验及规定植被建立的实际用水，区分来源和供应商范围。后续日常灌溉属于封场后管护。

- 选定流：覆盖施工及建立用供水
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生数量仅除以A一次，按关联节点协议直接记录为每参考流数量，并闭合兼容库存和物理状态。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_stock`
- 来源：

数量范围证据需求：采集按来源计量的实际供水/取水、用途及废水/排放/土壤含水/蒸发去向证据和不确定性；无假定用水率或重复采购交付水分。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经认证的现场焊接LLDPE复合填埋场最终封场覆盖服务 (`certified_final_cover`)

仅计按实际封场及CQA方案认证的唯一已完成净展开最终覆盖表面。每个表面跨各层和坡面只计一次；未闭合缺陷及临时保护面积不是验收最终输出。

- 选定流：经认证的现场焊接LLDPE复合填埋场最终封场覆盖服务
- 流属性/单位：Area / m2
- 数量规则：1 m2
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`source_rule`
- 采集协议：`cp_cap_gate`
- 来源：`epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006`

数量范围证据需求：最终1 m2仅为归一化。按唯一认证表面多边形、坡面口径、测量精度及认证范围确定实际A不确定性；无经验产率范围。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| stock_account | 所有过程 | 逐原生SKU/状态采用S = attributed_opening + external_net_tare_gross_receipts - carried_closing。内部领用及安装活动不是收货。声明并只选总投入含流出口径：投入S且另列匹配可用外退；或净消耗口径：投入S减匹配可用外退且不再追加退回负荷扣除或抵扣。两种口径均保留独立实测物理外退记录/卡作为审计视图；该物理记录不是另一笔上游扣除或抵扣。选定供应和退回负荷视图不可相加。期末库存、期末仍持有的回收溢漏、受控废物、未受控损失及可用外退为独立互斥去向。未退边角料、不合格物及损失保留上游负荷。移出历史材料不得减少新采购；不隐含回收或避免生产抵扣。 |  |
| asset_share | 所有过程 | 逐共享机械/工具/检测仪及临时设施，覆盖所有消费者、工程、节点和时期的制造、维护、替换和报废。列明prepare/cap和其他工程消费者、日历时期、准备/换场/清理、替换及终止。只选一种表达：每参考流原生资产等效数量 = (job_driver / full_life_driver) / A，并配套相同原生单位的整资产生命周期负荷；或每参考流完整生命周期每驱动单位服务数量 = job_driver / A，并配套同驱动单位负荷。不得合并或二次除算。full_life_driver需要已观察完整寿命，或已观察历史加有证据的剩余使用、未来替换、终止和报废，并附来源、不确定性、敏感性及更新条件。仅工程工时不能证明全寿命服务或整机等效件数；寿命/覆盖证据缺失阻止完整数据集。 |  |
| campaign_rework | 所有过程 | 生产采用按单元、批准层/分区、板片/焊缝或土料批次、事件及时期索引的项目施工批次。准备、铺设、试验/修补与最终验收阶段保留实际起止日期。准备、换场、待机、清洁及共享供应商需求按有证据的因果物理驱动分摊；失败/重做留在本工程分子。土料试验失败关联prepare再调理，焊缝/试样/穿透失败关联cap修补复测；在产生节点识别保留修复材料、可用外退及实际废物流出。缺陷闭合后最终表面只计一次。无默认拒收率、年化、后续管护寿命或未来避免渗滤液/气体生成抵扣。 | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prepare_stock | prepare | prepare节点的物料库存记录 | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; sku; lot_id; state; material_role; layer_id; transfer_id; attributed_opening; external_gross_receipts; tare; external_net_tare_gross_receipts; carried_closing; internal_issue; installed_activity; usable_outward_return; return_receipt_link; return_condition; accounting_view; quantity; native_unit; wet_volume; wet_volume_unit; wet_density; wet_density_unit; wet_density_source; wet_mass; wet_mass_unit; dry_mass; dry_mass_unit; loose_volume; loose_volume_unit; compacted_volume; compacted_volume_unit; density; density_unit; density_state; density_method; density_source; wet_basis_water_fraction; dry_basis_water_ratio; moisture_method; moisture_source; loose_dry_density; loose_dry_density_unit; loose_dry_density_source; compacted_dry_density; compacted_dry_density_unit; compacted_dry_density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; water_source; water_event_id; supplied_water; directly_abstracted_water; incoming_moisture_water; soil_water_retained; water_closing; contained_wastewater; discharge_water; evaporated_water; water_destination; receiving_compartment; water_balance_uncertainty; uncertainty | 核对原生SKU收货、校准测量/称重、领用/退回及实物盘点。保留实际含水/密度状态和来源，联结土料/卷材/管材/层记录。不得相加原生与转换视图。 | 实际兼容原生单位；面积m2 | 逐交易/事件及阶段结束；最终输出仅认证一次 | 全部施工批次；资产覆盖所有消费者完整观察寿命，或观察历史加有证据的剩余使用、维护/替换/终止/报废 | 明确单元/项目和本节点；共享事件不重复 | 每参考流 | 可追溯校准记录、来源、不确定性、签署检查及覆盖闭合 |
| cp_prepare_energy | prepare | prepare节点的能源记录 | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; fuel_sku; native_unit; attributed_opening; external_net_tare_gross_receipts; carried_closing; burned; burn_measurement; usable_outward_return; contained_nonburned_waste; uncontained_loss; recovered_closing; total_spill_audit; fate_completeness; unknown_loss; metered_electricity_import; metered_electricity_export; electricity_unit; generator_owner; upstream_scope; density; density_unit; density_state; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; uncertainty | 使用校准电表、燃料领用及库存记录，以直接实测燃烧或经审计完整互斥去向并附独立不确定性；调查未知损失。取得供应商电力/发电机归属及总进口/出口。 | 实际兼容原生单位；面积m2 | 逐交易/事件及阶段结束；最终输出仅认证一次 | 全部施工批次；资产覆盖所有消费者完整观察寿命，或观察历史加有证据的剩余使用、维护/替换/终止/报废 | 明确单元/项目和本节点；共享事件不重复 | 每参考流 | 可追溯校准记录、来源、不确定性、签署检查及覆盖闭合 |
| cp_prepare_service | prepare | prepare节点的服务资产记录 | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; provider_id; completed_physical_result; result_gate; native_unit; service_quantity; upstream_scope; excluded_scope; resource_owner; asset_id; asset_native_unit; consuming_nodes; all_consumers; all_jobs; all_periods; job_driver; driver_unit; full_life_driver; observed_history; observed_life; evidenced_remainder; remainder_source; replacement_events; replacement_burdens; replacement_source; termination_basis; termination_source; end_of_life_basis; end_of_life_burden; end_of_life_source; manufacture_burden; maintenance_burden; representation; lifecycle_service_scope; uncertainty; sensitivity; update_trigger; update_record; observed_history_source; observed_life_source; route_id; mode; actual_load_mass_kg; actual_loaded_distance_km; empty_return_activity; load_state; transport_work_unit; conversion_factor; conversion_unit; conversion_source | 取得物理完工记录、供应商资源覆盖及所有消费者的全资产寿命证据。统一按实际驱动归属；寿命未结束时重建观察历史加有证据的剩余/替换/终止/报废。核对装载距离及空返与货运范围。 | 实际兼容原生单位；面积m2 | 逐交易/事件及阶段结束；最终输出仅认证一次 | 全部施工批次；资产覆盖所有消费者完整观察寿命，或观察历史加有证据的剩余使用、维护/替换/终止/报废 | 明确单元/项目和本节点；共享事件不重复 | 每参考流 | 可追溯校准记录、来源、不确定性、签署检查及覆盖闭合 |
| cp_prepare_waste | prepare | prepare节点的废物记录 | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; stream_id; source_sku; originating_node; defect_id; rework_id; waste_class; waste_state; waste_composition; measured_quantity; native_unit; wet_dry_basis; waste_destination; treatment_provider; transfer_id; destination_receipt; retained_repair; external_return; recovered_closing; contained_nonburned_waste; total_spill_audit; density; density_unit; density_state; density_source; moisture; moisture_basis; moisture_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; uncertainty | 称量或计量实际分类废物，记录状态/污染、产生节点、交接链、联单及处理回执。将各不合格区/板片对应保留修补、可用退回或实际废弃。 | 实际兼容原生单位；面积m2 | 逐交易/事件及阶段结束；最终输出仅认证一次 | 全部施工批次；资产覆盖所有消费者完整观察寿命，或观察历史加有证据的剩余使用、维护/替换/终止/报废 | 明确单元/项目和本节点；共享事件不重复 | 每参考流 | 可追溯校准记录、来源、不确定性、签署检查及覆盖闭合 |
| cp_prepare_emission | prepare | prepare节点的排放记录 | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; species_id; substance_name; receiving_medium; compartment; source_event; baseline_period; baseline_activity; baseline_species_mass; job_activity; confounders; attribution_method; attributable_fraction; attribution_source; measured_species_mass; matched_activity; activity_unit; complete_species_factor; factor_numerator_unit; factor_denominator_unit; factor_basis; factor_source; factor_validity; measured_whole_fluid_release; release_unit; evidenced_species_fraction; composition_basis; composition_source; evidenced_release_fate; fate_basis; fate_source; release_basis; water_event_id; actual_water_release; water_release_unit; water_destination; receiving_compartment; baseline_water_flow; attributed_water_flow; soil_water_retained; contained_wastewater; evaporated_water; water_balance_uncertainty; density; density_unit; density_state; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; uncertainty | 使用实际物种/介质事件测量或经验证匹配活动因子及原始操作数；相对可比既有单元基线建立增量归属并披露混杂因素。分别记录整液及物种视图。 | 实际兼容原生单位；面积m2 | 逐交易/事件及阶段结束；最终输出仅认证一次 | 全部施工批次；资产覆盖所有消费者完整观察寿命，或观察历史加有证据的剩余使用、维护/替换/终止/报废 | 明确单元/项目和本节点；共享事件不重复 | 每参考流 | 可追溯校准记录、来源、不确定性、签署检查及覆盖闭合 |
| cp_prepare_gate | prepare | prepare节点的准入验收记录 | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; approval_id; cqa_plan; permit_jurisdiction; layer_id; zone_id; panel_id; weld_id; transfer_id; incoming_condition; qualified_condition; material_traceability; material_test; moisture_test; compaction_test; subgrade_survey; qualification_inspection; contact_barrier_component; seam_ndt; seam_destructive_test; repair_id; retest_record; penetration_inspection; anchorage_inspection; drain_inspection; gas_interface_inspection; erosion_vegetation_gate; acceptance_id; certification_id; signed_engineer; owner_authority; certified_date; accepted_net_developed_area; area_unit; slope_convention; survey_polygons; duplicate_surface_check; prepared_area; rejected_area; defects_closed; asbuilt_id; exclusions; uncertainty | 使用实际批准方案/CQA记录、校准测量、材料/层试验和签署检查。prepare记录实际土料入场与调湿/压实后状态，取得合格基底交接后cap方可继续。cap联结此前放行、层接触、板片/焊缝试验修补、排水/气体/侵蚀控制完成及签署认证与唯一最终展开表面多边形。 | 实际兼容原生单位；面积m2 | 逐交易/事件及阶段结束；最终输出仅认证一次 | 全部施工批次；资产覆盖所有消费者完整观察寿命，或观察历史加有证据的剩余使用、维护/替换/终止/报废 | 明确单元/项目和本节点；共享事件不重复 | 每参考流 | 可追溯校准记录、来源、不确定性、签署检查及覆盖闭合 |
| cp_cap_stock | cap | cap节点的物料库存记录 | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; sku; lot_id; state; material_role; layer_id; transfer_id; attributed_opening; external_gross_receipts; tare; external_net_tare_gross_receipts; carried_closing; internal_issue; installed_activity; usable_outward_return; return_receipt_link; return_condition; accounting_view; quantity; native_unit; wet_volume; wet_volume_unit; wet_density; wet_density_unit; wet_density_source; wet_mass; wet_mass_unit; dry_mass; dry_mass_unit; loose_volume; loose_volume_unit; compacted_volume; compacted_volume_unit; density; density_unit; density_state; density_method; density_source; wet_basis_water_fraction; dry_basis_water_ratio; moisture_method; moisture_source; loose_dry_density; loose_dry_density_unit; loose_dry_density_source; compacted_dry_density; compacted_dry_density_unit; compacted_dry_density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; water_source; water_event_id; supplied_water; directly_abstracted_water; incoming_moisture_water; soil_water_retained; water_closing; contained_wastewater; discharge_water; evaporated_water; water_destination; receiving_compartment; water_balance_uncertainty; uncertainty | 核对原生SKU收货、校准测量/称重、领用/退回及实物盘点。保留实际含水/密度状态和来源，联结土料/卷材/管材/层记录。不得相加原生与转换视图。 | 实际兼容原生单位；面积m2 | 逐交易/事件及阶段结束；最终输出仅认证一次 | 全部施工批次；资产覆盖所有消费者完整观察寿命，或观察历史加有证据的剩余使用、维护/替换/终止/报废 | 明确单元/项目和本节点；共享事件不重复 | 每参考流 | 可追溯校准记录、来源、不确定性、签署检查及覆盖闭合 |
| cp_cap_energy | cap | cap节点的能源记录 | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; fuel_sku; native_unit; attributed_opening; external_net_tare_gross_receipts; carried_closing; burned; burn_measurement; usable_outward_return; contained_nonburned_waste; uncontained_loss; recovered_closing; total_spill_audit; fate_completeness; unknown_loss; metered_electricity_import; metered_electricity_export; electricity_unit; generator_owner; upstream_scope; density; density_unit; density_state; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; uncertainty | 使用校准电表、燃料领用及库存记录，以直接实测燃烧或经审计完整互斥去向并附独立不确定性；调查未知损失。取得供应商电力/发电机归属及总进口/出口。 | 实际兼容原生单位；面积m2 | 逐交易/事件及阶段结束；最终输出仅认证一次 | 全部施工批次；资产覆盖所有消费者完整观察寿命，或观察历史加有证据的剩余使用、维护/替换/终止/报废 | 明确单元/项目和本节点；共享事件不重复 | 每参考流 | 可追溯校准记录、来源、不确定性、签署检查及覆盖闭合 |
| cp_cap_service | cap | cap节点的服务资产记录 | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; provider_id; completed_physical_result; result_gate; native_unit; service_quantity; upstream_scope; excluded_scope; resource_owner; asset_id; asset_native_unit; consuming_nodes; all_consumers; all_jobs; all_periods; job_driver; driver_unit; full_life_driver; observed_history; observed_life; evidenced_remainder; remainder_source; replacement_events; replacement_burdens; replacement_source; termination_basis; termination_source; end_of_life_basis; end_of_life_burden; end_of_life_source; manufacture_burden; maintenance_burden; representation; lifecycle_service_scope; uncertainty; sensitivity; update_trigger; update_record; observed_history_source; observed_life_source; route_id; mode; actual_load_mass_kg; actual_loaded_distance_km; empty_return_activity; load_state; transport_work_unit; conversion_factor; conversion_unit; conversion_source | 取得物理完工记录、供应商资源覆盖及所有消费者的全资产寿命证据。统一按实际驱动归属；寿命未结束时重建观察历史加有证据的剩余/替换/终止/报废。核对装载距离及空返与货运范围。 | 实际兼容原生单位；面积m2 | 逐交易/事件及阶段结束；最终输出仅认证一次 | 全部施工批次；资产覆盖所有消费者完整观察寿命，或观察历史加有证据的剩余使用、维护/替换/终止/报废 | 明确单元/项目和本节点；共享事件不重复 | 每参考流 | 可追溯校准记录、来源、不确定性、签署检查及覆盖闭合 |
| cp_cap_waste | cap | cap节点的废物记录 | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; stream_id; source_sku; originating_node; defect_id; rework_id; waste_class; waste_state; waste_composition; measured_quantity; native_unit; wet_dry_basis; waste_destination; treatment_provider; transfer_id; destination_receipt; retained_repair; external_return; recovered_closing; contained_nonburned_waste; total_spill_audit; density; density_unit; density_state; density_source; moisture; moisture_basis; moisture_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; uncertainty | 称量或计量实际分类废物，记录状态/污染、产生节点、交接链、联单及处理回执。将各不合格区/板片对应保留修补、可用退回或实际废弃。 | 实际兼容原生单位；面积m2 | 逐交易/事件及阶段结束；最终输出仅认证一次 | 全部施工批次；资产覆盖所有消费者完整观察寿命，或观察历史加有证据的剩余使用、维护/替换/终止/报废 | 明确单元/项目和本节点；共享事件不重复 | 每参考流 | 可追溯校准记录、来源、不确定性、签署检查及覆盖闭合 |
| cp_cap_emission | cap | cap节点的排放记录 | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; species_id; substance_name; receiving_medium; compartment; source_event; baseline_period; baseline_activity; baseline_species_mass; job_activity; confounders; attribution_method; attributable_fraction; attribution_source; measured_species_mass; matched_activity; activity_unit; complete_species_factor; factor_numerator_unit; factor_denominator_unit; factor_basis; factor_source; factor_validity; measured_whole_fluid_release; release_unit; evidenced_species_fraction; composition_basis; composition_source; evidenced_release_fate; fate_basis; fate_source; release_basis; water_event_id; actual_water_release; water_release_unit; water_destination; receiving_compartment; baseline_water_flow; attributed_water_flow; soil_water_retained; contained_wastewater; evaporated_water; water_balance_uncertainty; density; density_unit; density_state; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; uncertainty | 使用实际物种/介质事件测量或经验证匹配活动因子及原始操作数；相对可比既有单元基线建立增量归属并披露混杂因素。分别记录整液及物种视图。 | 实际兼容原生单位；面积m2 | 逐交易/事件及阶段结束；最终输出仅认证一次 | 全部施工批次；资产覆盖所有消费者完整观察寿命，或观察历史加有证据的剩余使用、维护/替换/终止/报废 | 明确单元/项目和本节点；共享事件不重复 | 每参考流 | 可追溯校准记录、来源、不确定性、签署检查及覆盖闭合 |
| cp_cap_gate | cap | cap节点的准入验收记录 | foreground_record | site_id; job_id; cell_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; date_start; date_end; owner; source_record; A; reference_unit; approval_id; cqa_plan; permit_jurisdiction; layer_id; zone_id; panel_id; weld_id; transfer_id; incoming_condition; qualified_condition; material_traceability; material_test; moisture_test; compaction_test; subgrade_survey; qualification_inspection; contact_barrier_component; seam_ndt; seam_destructive_test; repair_id; retest_record; penetration_inspection; anchorage_inspection; drain_inspection; gas_interface_inspection; erosion_vegetation_gate; acceptance_id; certification_id; signed_engineer; owner_authority; certified_date; accepted_net_developed_area; area_unit; slope_convention; survey_polygons; duplicate_surface_check; prepared_area; rejected_area; defects_closed; asbuilt_id; exclusions; uncertainty | 使用实际批准方案/CQA记录、校准测量、材料/层试验和签署检查。prepare记录实际土料入场与调湿/压实后状态，取得合格基底交接后cap方可继续。cap联结此前放行、层接触、板片/焊缝试验修补、排水/气体/侵蚀控制完成及签署认证与唯一最终展开表面多边形。 | 实际兼容原生单位；面积m2 | 逐交易/事件及阶段结束；最终输出仅认证一次 | 全部施工批次；资产覆盖所有消费者完整观察寿命，或观察历史加有证据的剩余使用、维护/替换/终止/报废 | 明确单元/项目和本节点；共享事件不重复 | 每参考流 | 可追溯校准记录、来源、不确定性、签署检查及覆盖闭合 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_area | all inventory rows | quantity_per_reference = attributable_native_quantity / A；A为正的经认证唯一净展开最终覆盖面积，单位m2；最终验收参考输出为1 m2。 | attributable_native_quantity; A; cp_cap_gate | 每1 m2认证最终覆盖的原生数量 |  |
| native_state | prep_soil; cap_soil; prepare_fuel; cap_fuel; erosion_vegetation | 只换算实际兼容状态：wet_mass = wet_volume * wet_density；dry_mass = wet_mass * (1 - wet_basis_water_fraction)；同一保留干固体单独记录增补与损失后，loose_volume * loose_dry_density = compacted_volume * compacted_dry_density。干基含水采用dry_mass = wet_mass / (1 + dry_basis_water_ratio)。保留实际单位、温度、密度/含水方法、批次、来源及不确定性。这些是不可相加的替代视图；不得等同松散和压实体积或重复计水。 | wet_volume; wet_density; wet_mass; wet_basis_water_fraction; dry_basis_water_ratio; loose_volume; loose_dry_density; compacted_volume; compacted_dry_density | 兼容且闭合的原生状态数量 |  |
| fuel_fates | prepare_fuel; cap_fuel | 供应燃料上游与排放所需实测燃烧量分开。采用直接实测燃烧，或经审计完整互斥的原生单位去向：S = burned + usable_outward_return + contained_nonburned_waste + uncontained_loss，其中S已扣除期末库存。保留独立不确定性并调查未知损失；不得从不完整残差推断燃烧。总溢漏仅审计；回收并保留于期末的溢漏已在期末库存内。 | S; burned; usable_outward_return; contained_nonburned_waste; uncontained_loss; carried_closing; cp_prepare_energy; cp_cap_energy | 实测燃烧与互斥闭合去向 |  |
| species_release | prepare_air; prepare_water_soil; cap_air; cap_water_soil | species_mass = measured_species_mass或matched_activity * complete_species_factor或measured_whole_fluid_release * evidenced_species_fraction * evidenced_release_fate。逐事件/物种/介质只选一种基准；完整物种因子不得再乘组成/去向。要求实际因子分子/分母单位、来源、适用性、组成/去向来源及实测增量归属。整液和总溢漏视图不可相加。 | measured_species_mass; matched_activity; complete_species_factor; measured_whole_fluid_release; evidenced_species_fraction; evidenced_release_fate | 按受纳介质的实际物种质量 |  |
| freight_work | prepare_freight; cap_freight | transport_work_kg_km = sum(actual_load_mass_kg * actual_loaded_distance_km)；保留实际路线、运输方式、装载状态、必要空返活动及覆盖。若上游采用原生t*km，1 t*km = 1000 kg*km。不得叠加完整货运服务已包含的燃料/车辆负荷。 | actual_load_mass_kg; actual_loaded_distance_km; empty_return_activity; upstream_scope | 兼容的实际质量距离运输工作量 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| traceability | 所有过程 | 保留批准方案、单元身份/基线、供应商/材料批次、实际验收门槛及关联时期的原始物理记录；不得编造数值或数值范围。 | 签署批准、测量与原始记录 |
| coverage | 所有交换与资产 | 记录供应商及共享资产上游范围、所有消费者寿命分母、原生供应/退回去向、排放归属及缺失覆盖、不确定性和敏感性。实质数据缺失阻止最终生产；身份支撑不是数量证据。 | 资源覆盖矩阵及闭合物理台账 |
| comparability | 参考服务 | 要求单元废物/基线、气候/地形、覆盖层与阻水设计、LLDPE规格、认证门槛及坡面面积口径兼容。不得因m2相同或未来填埋性能推断等效。 | 声明的项目参数及质量披露 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| acceptance_area | 所有过程 | 要求A > 0、唯一实测净展开表面多边形、声明坡面测量口径、准确认证范围和日期、签署验收、缺陷闭合且functional_unit.reference_flow_link = certified_final_cover。搭接、卷材供应、GCL/排水层面积、准备基底、试样、修补及重复试验均不能增加A。未完成或临时防护区不得默认验收。 | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| layer_quality | 所有过程 | 要求实际批准的LLDPE加低渗GCL或土质接触复合设计、层材料追溯与顺序、合格基底、实际方案要求的土料/层位及焊缝/修补/穿透/锚固/排水/气体检测、侵蚀/植被门槛、竣工资料和责任认证。不得借用历史案例厚度/频率/面积或通用性能。纯土质蒸散盖、新底衬及裸卷供应不符合本范围。 | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| ledger_completeness | 所有过程 | 要求原生SKU供给/退回/废物/库存闭合、兼容土料含水密度状态、燃料去向闭合、实际物种介质释放基准及基线/增量归属。覆盖所有消费者/时期的供应商及共享资产上游范围；只用一种表达并归一化一次。实质活动、身份、因子、退回、寿命分母或分包资源覆盖未知时阻止完整数据集；记录已做/跳过检查与不确定性。 | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |
| rework_period | 所有过程 | 联结节点、单元/工程、批次/板片/焊缝、事件、施工批次和时期ID。核对prepare再调理与cap修补复测、保留修补和废物/退回、临时气/水管理、共享准备/清理及替换/终止。后期验收不得抹除先前失败资源；后续管护另行披露。最终交换导出前核实各具体交换身份及支撑单位；候选语义指南并非可发布交换数据。 | `epa-mswlf-closure-requirements`; `frtr-landfill-soil-capping`; `rid-em-rosehill-cqa-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已完成认证填埋场最终覆盖封场服务前景数据包 |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 在声明兼容条件下每m2认证交付的已完成最终覆盖施工服务 |
| excluded_use | 新填埋场/底衬、日/中间/纯土质蒸散盖、填埋运营、后续管护、已核证长期避免气体/渗滤液或生态收益声明 |
| required_metadata | 单元/场址/工程与阶段日期、保留基线、实际封场/CQA方案及管辖、LLDPE与阻水/组件层设计、测量/坡面口径及A、签署门槛、资源归属、上游服务和资产范围 |
| required_quality_disclosure | 已执行/跳过检查、未定具体身份/支撑、来源局限、测量与因子数据、库存/燃料/状态闭合、增量归属、寿命分母、不确定性及覆盖缺失 |
| update_trigger | 封场设计、材料SKU、基线/气水接口、CQA/认证门槛、面积口径、供应商覆盖、排放证据或资产寿命/替换/终止证据改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| epa-mswlf-closure-requirements | official_guidance | https://www.epa.gov/landfills/requirements-municipal-solid-waste-landfills-mswlfs | 封场方案、完成封场认证与后续管护分离；仅适用于实际管辖条件。 |
| frtr-landfill-soil-capping | official_guidance | https://www.frtr.gov/matrix-2019/Landfill-and-Soil-Capping/ | 项目特定覆盖层、阻水/排水/气体层职责与安装关注点；不引用历史数值为设计默认值。 |
| rid-em-rosehill-cqa-2006 | official_guidance | https://semspub.epa.gov/work/01/293114.pdf | RIDEM/Louis Berger，Rose Hill填埋场Superfund场址第二阶段修复CQA方案，2006，导言及目录：场址特定LLDPE/GCL/复合排水层覆盖和认证路线，并非通用生活垃圾填埋场门槛。 |
