---
pcr_id: pcr.constructions-and-construction-services.construction-services.paste-the-paper-interior-wallpaper-installation-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 纸背施胶法室内纸质壁纸安装服务

## 1. 范围与适用性

本方法描述在已接收为平整、牢固、清洁、干燥且适当涂底漆的室内墙面上安装未预涂胶装饰纸质壁纸。顺序为房间布局和裁切、在纸背涂相容预混水性胶粘剂、实际折叠润纸、铺贴与对花、抚平、修边与湿清洁，以及干燥和客户验收。交付状态须粘附且外观通过验收，实际干燥程度满足声明的纸张、胶粘剂与项目说明。

壁纸与胶粘剂制造、底漆施涂、旧覆盖物拆除、大面积基层修复、涂装、乙烯基覆盖物、自粘或预涂胶产品及墙面施胶路线不在本类别内。不得通过改名准备或安装交换吸收其负担。接收不适用墙面的作业，须先记录独立准备工作及后续验收接口，才可使用本安装方法。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.paste-the-paper-interior-wallpaper-installation-services |
| classification_refs | cpc:3.0:54750 |
| covered_products | 在纸背涂相容预混水性胶粘剂并折叠润纸后铺贴的未预涂胶纸质壁纸室内安装服务 |
| excluded_products | 壁纸制造；乙烯基；自粘；预涂胶；墙面施胶法；涂装；上游旧覆盖物拆除、墙面修复及底漆施涂 |
| representative_product | 在声明的已接收涂底漆基层上完成的一个验收纸质壁纸安装批次 |
| production_route | 接收墙面与壁纸卷 → 布局／裁切 → 纸背施胶／折叠润纸 → 铺贴／对花／抚平／修边／湿清洁 → 干燥／检查／验收 |
| market_state | 实际达到干燥与外观验收后移交客户的完整安装服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 干燥验收门的纸背施胶法室内纸质壁纸安装服务 |
| How much | 1 m2 最终验收净墙面面积 |
| How well | 纸张和胶粘剂与接收基层相容；声明图案与接缝布置；表面粘附良好，无未解决的气泡、皱折、撕裂、污染或接缝失效；实际满足指定干燥要求 |
| How long or cycle | 一个已识别安装批次，从接收墙面验收至最后一次纠正验收；列明实际施工、等待、干燥、检查与纠正期间；不假定使用寿命 |
| reference_flow_link | `reference_service` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 纸背施胶法室内纸质壁纸安装服务 |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | 作业／批次与墙面编号;场地／地理范围;接收基层及底漆状态;实际未预涂胶纸张结构,涂层,等级,卷批次,对花及重复距离;实际水性胶产品与相容性;折叠润纸说明及观察时长;净面积计量规则;干燥准则及实际验收;施工和纠正期间;公用工程及服务供应方;废物与水去向 |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| accepted_area | 参考产品 | Area | m2 | A 为本批次最终验收的正值净墙面面积，依据实际尺寸和洞口，并明确重叠／转角规则计量。每一验收区域仅计一次。试铺、不合格、未验收及重复覆盖面积不增加 A。采用 cp_dry_accept。 |
| common_denominator | 所有清单行 | 声明的行属性 | 声明的行单位 | 各节点归属的物理总量仅除以同一个 A 一次。最终服务为 A/A = 1 m2。内部交接保留其实际分子，不能因为参考为 1 m2 就设为 1。 |
| paper_mass_area_bridge | paper_rolls; cut_strips; paste_feed; booked_strips; hang_feed; wet_wallcovering; dry_feed | Mass and Area | kg and m2 | 按条带及交接编号记录实际纸张尺寸、称量／含水条件。需要时同时保留湿／干质量及面积观察。仅用数量、标称卷面积或干态定量不能替代实际湿态交接质量或吸水后安装面积。 |
| water_constituent_basis | paste_book_vapour; hang_trim_vapour; dry_vapour | Mass | kg | 水为组分 H2O，而非胶粘剂、湿纸或废水总质量。记录湿质量及相应实测或可追溯水分比例、时间和含水计量方法。不得由部分平衡假定完整去向。 |
| stock_exclusivity | paper_rolls; adhesive; wash_consumables; unused_paper_return; unused_adhesive_return; unused_hanging_consumable_return | Mass | kg | 物理总领用包含可用退回或未用外部转移：完好未发出期初库存 + 接收 - 完好未发出期末库存。kg 可用退出以独立正向输出记录。完好期末库存、退回、外部转移、加工材料及在制品为互斥水／物料池。 |
| service_time | layout_cut_shared_service; paste_book_shared_service; hang_trim_shared_service; dry_accept_shared_service | Duration | h | 采用实际合同起止及计费可用期间，包括归属的付费闲置。不采用 8 小时工作日或假定润纸／干燥时长。供应方不相容计费单位保留在原始记录；形成 h 交换前须有证据支持换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已验收平整、牢固、清洁、干燥且适当涂底漆的室内墙面；供应到作业的实际未预涂胶纸质壁纸卷及相容预混水性胶粘剂 |
| starting_condition_role | 上游接收安装接口，须有独立的准备及验收证明；不表示底漆施涂在此前景边界内 |
| product_classification_scope | 上述特定纸质壁纸安装服务；分类 54750 的语义范围大于本次选择的路线 |
| recursive_input_rule | 为其他承包方负责部分采购的同类服务，仅跨越声明责任门一次。记录其范围、验收面积、供应方及期间；采用其上游服务数据集或展开其施工记录，不能并用。不得将本批次自身中间状态作为采购最终服务反馈输入。 |
| upstream_dataset_requirement | 分别识别实际纸张、水性胶、水、电及付费服务的数据集或明确缺口。下游研究纳入墙面准备时另行关联该上游过程。内部裁切、润纸及铺贴状态具有保管编号和实测状态，不虚构市场产品身份。 |
| disclosure | 公开接收墙面条件及证据；材料等级／配方；纳入的节点责任及期间；外包服务范围；实际返工及废物路线；实测／估计水去向；共享服务归属；剩余身份与数量缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_start | 接收墙面 | 仅在墙面／底漆适用性及干燥有证据后开始。接口不适用时拒收，或另行建模准备工作。 | roman-wall-preparation |
| boundary_route | 安装路线 | 施胶前核对实际纸张铺贴说明；采用其相容胶粘剂及折叠润纸要求，不替换为墙面施胶路线。 | roman-paper-preparation |
| boundary_nodes | 四个前景节点 | 将布局／裁切、施胶／润纸、铺贴／修边／清洁及干燥／验收作为独立责任，具有实际输入输出门；计入直到最终验收的实际纠正及公用工程。 | roman-paper-preparation; roman-first-strip |
| boundary_nonwater_releases | paste_book; hang_trim; dry_accept | 将实际观察的每种非 H2O 物种释放归属于实际产生节点，并提供发生、物种／物态、介质、数量和方法证据。早期节点释放不得并入干燥卡。发生或去向未知时保留缺口；捕集废物与直接释放互斥。 |  |
| boundary_water | 含水状态 | 配方水及纸张水分随各时间点交接传递；蒸发归实际发生节点；收集废水、固体废物含水、在制品及验收覆盖物含水分别记录。 |  |
| boundary_services | 实际公用工程／服务 | 计入归属本批次的实际现场电力及付费通行、工具、储存或环境调节，记录全部消费者和付费可用期间。服务已含电力时，单独加电力前须明确组成边界。 |  |
| boundary_end | 客户交付 | 止于实际干燥验收；壁纸使用、后续维护、替换及寿命末期不在此前景服务内；首次失败安装及纠正保留在本批次。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：已验收的可铺贴壁纸墙面接口 (`wall_interface`)

过程／待建立交换的方向／类型：`layout_cut` / `inputs` / `product`.

接收上游已干燥、平整、牢固、清洁且适当涂底漆的墙面；本卡仅记录面积接口，不代表新的墙体材料投入，也不表示整栋建筑均应归属于本安装批次。

- 采集对象：已验收的可铺贴壁纸墙面接口
- 流属性/单位： Area / m2
- 数量规则：实测接收净接口面积 / A；保留墙面及验收编号。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_layout_cut`
- 来源： `roman-wall-preparation`
- 尚待核实的可选筛查提示：暂定独立筛选区间；允许接收接口面积大于最终覆盖面积；未覆盖部分过大须核查。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 3
  - 单位： m2
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：实际付费的通行、工具、储存或环境调节服务 (`layout_cut_shared_service`)

过程／待建立交换的方向／类型：`layout_cut` / `inputs` / `product`.

条件性实际供应方／资产／合同服务。列明消费者及期间，计入付费闲置可用时间；明确服务数据集所含组成，避免电力或资产负担重复。

- 采集对象：实际付费的通行、工具、储存或环境调节服务
- 流属性/单位： Duration / h
- 数量规则：实际归属的付费可用小时数 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_layout_cut_utilities`
- 尚待核实的可选筛查提示：暂定独立筛选区间；本节点服务筛选允许不发生，也允许小型作业有较长付费可用时间；不默认按工作日换算。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： h
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：未使用且完好的实际壁纸卷材料 (`unused_paper_return`)

过程／待建立交换的方向／类型：`layout_cut` / `outputs` / `product`.

从本节点向已识别供应商或外部保管方发生的实际正向退出；不含保留的期末库存。与输入采用同一等级及供应含水状态的 kg 基准；仅随其转移原始未用材料的上游负担。

- 采集对象：未使用且完好的实际壁纸卷材料
- 流属性/单位： Mass / kg
- 数量规则：实际互斥可用纸张退回或未用外部转移量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_layout_cut`
- 尚待核实的可选筛查提示：暂定独立筛选区间；最小整卷采购可能使可用纸张退出为零或较大。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 2
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：拆除的壁纸卷包装 (`paper_packaging`)

过程／待建立交换的方向／类型：`layout_cut` / `outputs` / `waste`.

按实际纸板、塑料或其他包装材料及去向分别记录；包装皮重不计入净纸质量；不得假定回收。

- 采集对象：拆除的壁纸卷包装
- 流属性/单位： Mass / kg
- 数量规则：实际按材料区分的包装废弃质量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_layout_cut`
- 尚待核实的可选筛查提示：暂定独立筛选区间；小型作业的壁纸卷包装可能占较大比例。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.3
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：实际付费的通行、工具、储存或环境调节服务 (`paste_book_shared_service`)

过程／待建立交换的方向／类型：`paste_book` / `inputs` / `product`.

条件性实际供应方／资产／合同服务。列明消费者及期间，计入付费闲置可用时间；明确服务数据集所含组成，避免电力或资产负担重复。

- 采集对象：实际付费的通行、工具、储存或环境调节服务
- 流属性/单位： Duration / h
- 数量规则：实际归属的付费可用小时数 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_paste_book_utilities`
- 尚待核实的可选筛查提示：暂定独立筛选区间；本节点服务筛选允许不发生，也允许小型作业有较长付费可用时间；不默认按工作日换算。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： h
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：已施胶并完成折叠润纸的壁纸条带 (`booked_strips`)

过程／待建立交换的方向／类型：`paste_book` / `outputs` / `product`.

记录实际折叠润纸结束时纸张、胶粘剂固体和水的状态；记录纸张吸水及尺寸变化；与 hang_feed 配对。

- 采集对象：已施胶并完成折叠润纸的壁纸条带
- 流属性/单位： Mass / kg
- 数量规则：实际湿态润纸条带交接质量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_paste_book`
- 来源： `roman-paper-preparation`
- 尚待核实的可选筛查提示：暂定独立筛选区间；实际胶粘剂和水吸收可使湿态质量超过干态裁切质量。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0.02
  - 上限： 5
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：施胶和折叠润纸期间实际按物种区分的直接释放 (`paste_book_other_releases`)

过程／待建立交换的方向／类型：`paste_book` / `outputs` / `elementary`.

仅用于本节点实际发生的非 H2O 直接释放的条件性总括卡。依据实际配方和活动记录确定精确物种、物态或颗粒基准、接收环境介质及数量方法。不得假定发生、物种、介质或数量；未知项保留为数据缺口。捕集残余物与废水转移属于独立去向。本卡不得继承 dry_accept_other_releases 的节点归属或通用 VOC 身份。

- 采集对象：施胶和折叠润纸期间实际按物种区分的直接释放
- 流属性/单位： Mass / kg
- 数量规则：本节点实际有证据的非 H2O 释放，按精确物种及接收介质区分，再除以 A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_paste_book`
- 尚待核实的可选筛查提示：暂定独立筛选区间；仅在本节点实际释放有证据时按物种筛选，不假定发生，数据缺口不默认零。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.5
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：已施胶并完成折叠润纸的壁纸条带 (`hang_feed`)

过程／待建立交换的方向／类型：`hang_trim` / `inputs` / `product`.

与 booked_strips 采用相同交接编号及湿态组分；任何独立记录的保管损失另行归属；不得再次计入前序蒸发。

- 采集对象：已施胶并完成折叠润纸的壁纸条带
- 流属性/单位： Mass / kg
- 数量规则：实际接收湿态润纸条带质量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_hang_trim`
- 来源： `roman-first-strip`
- 尚待核实的可选筛查提示：暂定独立筛选区间；接收湿态独立于假定最终覆盖量进行筛选。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0.02
  - 上限： 5
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：实际擦拭和清洁耗材 (`wash_consumables`)

过程／待建立交换的方向／类型：`hang_trim` / `inputs` / `product`.

按实际海绵／布或其他有证据的清洁材料逐项解析；适用时将可重复使用资产／服务单独记录；不得假定清洁剂化学组成。

- 采集对象：实际擦拭和清洁耗材
- 流属性/单位： Mass / kg
- 数量规则：各材料的物理总领用量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_hang_trim`
- 尚待核实的可选筛查提示：暂定独立筛选区间；重复使用工具实现功能时，一次性耗材可不发生。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.5
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：实际付费的通行、工具、储存或环境调节服务 (`hang_trim_shared_service`)

过程／待建立交换的方向／类型：`hang_trim` / `inputs` / `product`.

条件性实际供应方／资产／合同服务。列明消费者及期间，计入付费闲置可用时间；明确服务数据集所含组成，避免电力或资产负担重复。

- 采集对象：实际付费的通行、工具、储存或环境调节服务
- 流属性/单位： Duration / h
- 数量规则：实际归属的付费可用小时数 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_hang_trim_utilities`
- 尚待核实的可选筛查提示：暂定独立筛选区间；本节点服务筛选允许不发生，也允许小型作业有较长付费可用时间；不默认按工作日换算。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： h
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：未使用的实际清洁材料 (`unused_hanging_consumable_return`)

过程／待建立交换的方向／类型：`hang_trim` / `outputs` / `product`.

仅记录本节点实际保管边界退出的未用耗材，或确有该事件时有证据证明未使用的供应水；按材料展开实际交换；与输入采用同一 kg 基准，排除期末库存及受污染残余物。

- 采集对象：未使用的实际清洁材料
- 流属性/单位： Mass / kg
- 数量规则：各材料实际互斥可用退回或未用外部转移量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_hang_trim`
- 尚待核实的可选筛查提示：暂定独立筛选区间；可用退出单独筛选，涵盖未用大包装清洁供应品；不代替实测输入。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：废弃擦拭材料及捕集的清洁残余物 (`spent_wipes`)

过程／待建立交换的方向／类型：`hang_trim` / `outputs` / `waste`.

记录材料、胶残余物及含水量；区分重复使用的擦拭物、可重复使用资产期末库存及废水，避免水量重复。

- 采集对象：废弃擦拭材料及捕集的清洁残余物
- 流属性/单位： Mass / kg
- 数量规则：实际废弃湿态擦拭物／残余物质量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_hang_trim`
- 尚待核实的可选筛查提示：暂定独立筛选区间；湿擦拭物可同时含胶和水，须为独立去向。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：铺贴和清洁期间实际按物种区分的直接释放 (`hang_trim_other_releases`)

过程／待建立交换的方向／类型：`hang_trim` / `outputs` / `elementary`.

仅用于本节点实际发生的非 H2O 直接释放的条件性总括卡。依据实际配方和活动记录确定精确物种、物态或颗粒基准、接收环境介质及数量方法。不得假定发生、物种、介质或数量；未知项保留为数据缺口。捕集残余物与废水转移属于独立去向。本卡不得继承 dry_accept_other_releases 的节点归属或通用 VOC 身份。

- 采集对象：铺贴和清洁期间实际按物种区分的直接释放
- 流属性/单位： Mass / kg
- 数量规则：本节点实际有证据的非 H2O 释放，按精确物种及接收介质区分，再除以 A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_hang_trim`
- 尚待核实的可选筛查提示：暂定独立筛选区间；仅在本节点实际释放有证据时按物种筛选，不假定发生，数据缺口不默认零。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.5
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：实际付费的通行、工具、储存或环境调节服务 (`dry_accept_shared_service`)

过程／待建立交换的方向／类型：`dry_accept` / `inputs` / `product`.

条件性实际供应方／资产／合同服务。列明消费者及期间，计入付费闲置可用时间；明确服务数据集所含组成，避免电力或资产负担重复。

- 采集对象：实际付费的通行、工具、储存或环境调节服务
- 流属性/单位： Duration / h
- 数量规则：实际归属的付费可用小时数 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_dry_accept_utilities`
- 尚待核实的可选筛查提示：暂定独立筛选区间；本节点服务筛选允许不发生，也允许小型作业有较长付费可用时间；不默认按工作日换算。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： h
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：干燥或检查阶段的废弃不合格覆盖物 (`dry_rejects`)

过程／待建立交换的方向／类型：`dry_accept` / `outputs` / `waste`.

记录纸张／胶粘剂／残余水组成、失败区域与期间、拆除责任及接收方；原位纠正属于返工事件，不得虚构为废物退出。

- 采集对象：干燥或检查阶段的废弃不合格覆盖物
- 流属性/单位： Mass / kg
- 数量规则：实际拆除不合格复合物质量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_dry_accept`
- 尚待核实的可选筛查提示：暂定独立筛选区间；干燥阶段失败可不发生，但实际拆除质量可能较大。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 3
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：干燥期间实际按物种区分的直接释放 (`dry_accept_other_releases`)

过程／待建立交换的方向／类型：`dry_accept` / `outputs` / `elementary`.

本节点条件性非 H2O 释放总括卡；依据实际配方和活动确定是否发生、物种、物态／颗粒基准、接收介质及方法。不得使用通用 VOC 身份或将不明质量损失推定为污染。

- 采集对象：干燥期间实际按物种区分的直接释放
- 流属性/单位： Mass / kg
- 数量规则：实际有证据的各物种及接收介质释放量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_dry_accept`
- 尚待核实的可选筛查提示：暂定独立筛选区间；仅在有实际释放证据时按物种使用宽泛筛选范围；未知释放不等于零。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.5
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 6. 过程清单结构

以下全部卡均须有前景数量。条件卡仅在记录证实身份及适用性后，展开为零个、一个或多个实际材料／供应方／物种交换。有证据的不发生不同于数量未知。身份匹配不能提供数量。各暂定 Range 为独立作者筛选区间，不是技术规格、实测分布或裁剪实际记录的许可。应以独立审查样本或更强证据替换；核查离群值并保留实际数值。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| layout_cut | 接收墙面、规划图案并裁切壁纸 | required | 所有覆盖安装 | 接收验收墙面和纸张；建立条带布局与裁切状态交接；负责干边角料和壁纸卷包装 | 实际裁切条带质量及尺寸；按最终 A 归一化 |
| paste_book | 纸背施胶与折叠润纸 | required | 所有覆盖安装 | 接收裁切条带；涂实际相容水性胶并按实际说明折叠润纸；交接湿态润纸条带 | 实际湿态润纸条带质量及含水状态；按最终 A 归一化 |
| hang_trim | 铺贴、对花、抚平、修边与湿式清洁 | required | 所有覆盖安装 | 接收润纸条带，铺贴到接收墙面，完成对花及湿清洁；交接等待干燥的实际铺贴表面 | 实际铺贴面积及组分质量；按最终 A 归一化 |
| dry_accept | 干燥、检查与验收 | required | 所有覆盖安装 | 接收湿态铺贴表面，观察干燥与外观质量，安排失败状态去向并交付验收服务 | A m2 最终验收表面 |

实际纠正事件保留 event_id、条带／区域编号、产生节点、目标节点、期间及材料状态。裁错但保留条带返回 layout_cut；润纸条带需重新施胶时，记录真实新增 paste_book 事件；原位铺贴缺陷纠正记录新增 hang_trim 事件；干燥／检查失败返回实际纠正节点或 dry_rejects 退出。这些是利用现有责任的图循环。失败区域在最终验收前不计入 A。按实际物理事件身份去除记录副本；重复物理事件、替换材料及负担均各保留一次。

### 过程：接收墙面、规划图案并裁切壁纸（`layout_cut`）

#### 输入

##### 产品流

###### 未预涂胶的纸质装饰壁纸卷（`paper_rolls`）

声明实际装饰纸结构与涂层、等级、批次、图案及供应时的含水状态；不包括乙烯基、原纸或预涂胶材料。

- 选定流：未预涂胶的纸质装饰壁纸卷
- 流属性/单位： Mass / kg
- 数量规则：纸张物理总领用量 / A；不得在该输入中扣除未用退出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_layout_cut`
- 来源： `roman-paper-preparation`
- 数量范围：暂定独立筛选区间；宽泛质量筛选范围涵盖纸张等级、对花损耗及纠正，不表示平均值。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0.02
  - 上限： 3
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际归属的现场电力（`layout_cut_electricity`）

声明实际供应方、电压、混合／地理范围、期间及电表边界；共享计量须识别所有消费者及未被直接归属覆盖的实际剩余活动份额。仅在正共享余量需要分配时要求完整正权重；已知余量为零时仅保留直接归属，未知或负余量为缺口。实际待机用电按其归属计入。

- 选定流：实际归属的现场电力
- 流属性/单位： Energy / kWh
- 数量规则：直接计量的节点电力加互斥归属的共享电力，再除以 A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_layout_cut_utilities`
- 数量范围：暂定独立筛选区间；本节点宽泛筛选；手工作业可无增量用电，动力或环境调节作业可能更多。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： kWh
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 裁切后未施胶的壁纸条带（`cut_strips`）

保留条带编号、尺寸、方向与对花顺序；向 paste_book 的交接与 paste_feed 配对；未使用的完好材料另行记录。

- 选定流：裁切后未施胶的壁纸条带
- 流属性/单位： Mass / kg
- 数量规则：实际裁切条带交接质量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_layout_cut`
- 来源： `roman-room-layout`
- 数量范围：暂定独立筛选区间；独立裁切状态质量范围允许不合格裁切件另行退出。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0.01
  - 上限： 3
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 干态壁纸裁切边角料（`paper_offcuts`）

区分实际纸张／涂层组成及废物接收方；保留供再次裁切的材料属于在制品或可用库存，而非废弃物。

- 选定流：干态壁纸裁切边角料
- 流属性/单位： Mass / kg
- 数量规则：实际废弃干态边角料质量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_layout_cut`
- 来源： `roman-paper-preparation`
- 数量范围：暂定独立筛选区间；小型作业的对花裁切可能占较大比例；干态边角料与施胶修边料分开。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 2
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：纸背施胶与折叠润纸（`paste_book`）

#### 输入

##### 产品流

###### 裁切后未施胶的壁纸条带（`paste_feed`）

与 cut_strips 保持相同的 transfer_id、纸张结构及交接时含水状态；运输或保管差异须解释。

- 选定流：裁切后未施胶的壁纸条带
- 流属性/单位： Mass / kg
- 数量规则：实际接收裁切条带质量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_paste_book`
- 来源： `roman-paper-preparation`
- 数量范围：暂定独立筛选区间；以输入裁切状态质量独立核对接收交接。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0.01
  - 上限： 3
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 相容的预混水性壁纸胶粘剂（`adhesive`）

声明实际配方／产品、湿质量、水分比例、相容性及批次；不假定通用淀粉化学组成、稀释、固含量或推荐品牌。

- 选定流：相容的预混水性壁纸胶粘剂
- 流属性/单位： Mass / kg
- 数量规则：配制胶粘剂物理总领用量 / A；组分水另行追踪。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_paste_book`
- 来源： `roman-paper-preparation`
- 数量范围：暂定独立筛选区间；宽泛湿胶范围涵盖实际胶层、领料及纠正。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0.01
  - 上限： 3
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际归属的现场电力（`paste_book_electricity`）

声明实际供应方、电压、混合／地理范围、期间及电表边界；共享计量须识别所有消费者及未被直接归属覆盖的实际剩余活动份额。仅在正共享余量需要分配时要求完整正权重；已知余量为零时仅保留直接归属，未知或负余量为缺口。实际待机用电按其归属计入。

- 选定流：实际归属的现场电力
- 流属性/单位： Energy / kWh
- 数量规则：直接计量的节点电力加互斥归属的共享电力，再除以 A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_paste_book_utilities`
- 数量范围：暂定独立筛选区间；本节点宽泛筛选；手工作业可无增量用电，动力或环境调节作业可能更多。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： kWh
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 未使用的实际预混胶粘剂（`unused_adhesive_return`）

从本节点保管边界实际退出，与胶粘剂输入采用相同配制湿态 kg 基准；须为未开封或有证据表明可用且未加工的胶粘剂，不含胶残余物或保留的期末库存。

- 选定流：未使用的实际预混胶粘剂
- 流属性/单位： Mass / kg
- 数量规则：实际互斥可用胶粘剂退回或未用外部转移量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_paste_book`
- 数量范围：暂定独立筛选区间；过大容器的退回量可能超过实际涂胶量。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 2
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 废弃水性胶粘剂残余物（`paste_residue`）

与可用退回及期末库存分开；识别所含水与固体、去向及另计的容器皮重。

- 选定流：废弃水性胶粘剂残余物
- 流属性/单位： Mass / kg
- 数量规则：实际废弃湿态配制胶残余物质量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_paste_book`
- 数量范围：暂定独立筛选区间；小型安装的残余物可为零或较多。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废弃胶粘剂容器（`paste_packaging`）

记录包装材料与皮重；附着胶粘剂仅在本卡或 paste_residue 中计入一次，并相应分配其含水量。

- 选定流：废弃胶粘剂容器
- 流属性/单位： Mass / kg
- 数量规则：实际容器及计入残余物的废弃质量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_paste_book`
- 数量范围：暂定独立筛选区间；容器皮重和尺寸变化，不采用通用包装因子。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.5
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 施胶和折叠润纸期间释放的水蒸气 H2O（`paste_book_vapour`）

仅记录本节点向 air, unspecified 的释放。配方水／纸张水分输入、下一节点交接水、可用退出、废物、期末库存／在制品及转移须作为互斥水池记录；去向不完整时保留缺口。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位： Mass / kg
- 数量规则：本节点实际蒸发 H2O / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_paste_book`
- 来源： `roman-paper-preparation`
- 数量范围：暂定独立筛选区间；折叠润纸虽为短时湿操作，实际水损失不默认零。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：铺贴、对花、抚平、修边与湿式清洁（`hang_trim`）

#### 输入

##### 产品流

###### 实际新鲜清洁用水（`wash_water`）

声明湿式擦拭／工具清洁所用水的实际等级和供应方；不得自动指定自来水身份、稀释水或假定耗用量。实际未用外部退出须在 unused_hanging_consumable_return 下按材料展开为独立可用输出。

- 选定流：实际新鲜清洁用水
- 流属性/单位： Mass / kg
- 数量规则：实际计量／称量的供应水 / A；储存时核对期初、接收及完好期末水池。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_hang_trim`
- 来源： `roman-first-strip`
- 数量范围：暂定独立筛选区间；宽泛清洁水范围涵盖海绵漂洗及小型作业差异。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际归属的现场电力（`hang_trim_electricity`）

声明实际供应方、电压、混合／地理范围、期间及电表边界；共享计量须识别所有消费者及未被直接归属覆盖的实际剩余活动份额。仅在正共享余量需要分配时要求完整正权重；已知余量为零时仅保留直接归属，未知或负余量为缺口。实际待机用电按其归属计入。

- 选定流：实际归属的现场电力
- 流属性/单位： Energy / kWh
- 数量规则：直接计量的节点电力加互斥归属的共享电力，再除以 A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_hang_trim_utilities`
- 数量范围：暂定独立筛选区间；本节点宽泛筛选；手工作业可无增量用电，动力或环境调节作业可能更多。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： kWh
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已铺贴、等待干燥验收的壁纸（`wet_wallcovering`）

记录实际墙面／区域／条带编号及吸水后尺寸、湿纸／胶粘剂／水状态；属于中间状态，可能含后续失败区域，不等同于最终验收 A。

- 选定流：已铺贴、等待干燥验收的壁纸
- 流属性/单位： Area / m2
- 数量规则：实际移交干燥的表面面积 / A；同时携带各组分质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_hang_trim`
- 来源： `roman-first-strip`
- 数量范围：暂定独立筛选区间；湿态几何尺寸及重复交接事件可与验收干态表面不同。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0.8
  - 上限： 5
  - 单位： m2
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 湿态施胶壁纸修边料及废弃失败条带（`wet_trim`）

记录实际纸张／胶粘剂／水组成及接收方；排除布局节点的干态边角料和保留的返工材料；每次实际替换事件均保留在本批次内。

- 选定流：湿态施胶壁纸修边料及废弃失败条带
- 流属性/单位： Mass / kg
- 数量规则：实际废弃湿态复合物质量 / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_hang_trim`
- 来源： `roman-first-strip`
- 数量范围：暂定独立筛选区间；湿复合物含胶和水，不等于干纸质量。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 3
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收集的含胶粘剂清洁废水（`wash_wastewater`）

转交指定废水接收方；总液体质量不等于直接环境释放或纯水质量。实际排放须先分别确定物种及介质，才可形成基本流交换。

- 选定流：收集的含胶粘剂清洁废水
- 流属性/单位： Mass / kg
- 数量规则：实际收集废水质量 / A；另记水分比例。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_hang_trim`
- 数量范围：暂定独立筛选区间；收集液体可不发生，也可能是湿清洁主要输出。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 铺贴和清洁期间释放的水蒸气 H2O（`hang_trim_vapour`）

仅记录接收折叠润纸条带后、向 dry_accept 交接前向 air, unspecified 的释放；有证据的新鲜水蒸发仅计一次，所有保留／外出水去向均须量化。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位： Mass / kg
- 数量规则：本节点实际蒸发 H2O / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_hang_trim`
- 来源： `roman-first-strip`
- 数量范围：暂定独立筛选区间；暴露及清洁可在最终干燥前损失水，不默认零。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 5
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：干燥、检查与验收（`dry_accept`）

#### 输入

##### 产品流

###### 已铺贴、等待干燥验收的壁纸（`dry_feed`）

按区域、事件与交接门与 wet_wallcovering 配对；接收水量须为扣除 paste_book 和 hang_trim 实际损失后的状态。

- 选定流：已铺贴、等待干燥验收的壁纸
- 流属性/单位： Area / m2
- 数量规则：实际接收的已铺贴表面面积 / A；携带其实际输入组分水。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_dry_accept`
- 数量范围：暂定独立筛选区间；保留湿态接收几何尺寸，独立于最终验收。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0.8
  - 上限： 5
  - 单位： m2
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际归属的现场电力（`dry_accept_electricity`）

声明实际供应方、电压、混合／地理范围、期间及电表边界；共享计量须识别所有消费者及未被直接归属覆盖的实际剩余活动份额。仅在正共享余量需要分配时要求完整正权重；已知余量为零时仅保留直接归属，未知或负余量为缺口。实际待机用电按其归属计入。

- 选定流：实际归属的现场电力
- 流属性/单位： Energy / kWh
- 数量规则：直接计量的节点电力加互斥归属的共享电力，再除以 A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_dry_accept_utilities`
- 数量范围：暂定独立筛选区间；本节点宽泛筛选；手工作业可无增量用电，动力或环境调节作业可能更多。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： kWh
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 纸背施胶法室内纸质壁纸安装服务（`reference_service`）

最终交付客户的已粘附、实际达到干燥要求且外观验收通过的净墙面面积；完成实际纠正后交付；仅一个最终参考输出，不设固定使用寿命。

- 选定流：纸背施胶法室内纸质壁纸安装服务
- 流属性/单位： Area / m2
- 数量规则：1 m2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_dry_accept`
- 数量范围：暂定独立筛选区间；仅为归一化恒等式：实际验收 A 除以同一个正值 A。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： m2
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 最终干燥期间释放的水蒸气 H2O（`dry_vapour`）

仅记录 dry_feed 接收后向 air, unspecified 的释放；将实际验收残余水、外出／拆除复合物所含水及期末未验收湿态在制品列为互斥去向；不得假定完全无水的验收产品。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位： Mass / kg
- 数量规则：本节点实际蒸发 H2O / A。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_dry_accept`
- 数量范围：暂定独立筛选区间；干燥蒸发取决于实际输入水分及验收残余水。
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 5
  - 单位： kg
  - 基准：每 1 m2 最终验收服务；暂定作者推理，并非实测限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | 节点活动 | 优先采用实测独立责任和互斥事件；采购服务按实际边界仅计一次，不得同时计供应方服务及其展开的材料／公用工程清单。 |  |
| allocation_service_lot | 验收安装批次 | 将本批次实际布局、润纸、铺贴、干燥、失败尝试、纠正、搬运与废物负担归属最终验收 A；废纸及可用未用退回均不得获得安装或纠正负担抵扣。 |  |
| allocation_unused | 可用未加工边界退出 | 保持物理总输入及正向可用输出不变；有证据证明可用、未加工的退出仅转移原始未用材料对应上游负担。净耗用仅作诊断，不是追加物理交换、负抵扣或避免生产主张。加工不合格物不能认作原始未用材料。 |  |
| allocation_shared | 共享电力、资产及服务 | 电力先从源总量扣除全部独立直接归属消费者数量。仅将正余量分配给未被直接归属覆盖的剩余实际合格活动份额，采用有证据的正权重及完整正分母。完全直接归属的活动份额不得再获余量。已知余量为零时，仅保留 direct_node_kWh，不虚构共享分母；未知或负余量为数据缺口。付费服务则将包含付费闲置／预留可用时间的完整实际计费总量，按全部有证据消费份额的完整正权重分配。核对各源总量，包括本批次之外的消费者。 |  |
| allocation_periods | 施工、等待、纠正及验收期间 | 将各唯一事件、期初／期末状态关联实际期间及服务批次。跨报告截止点携带在制状态和已发生负担，不重复形成采购／事件。汇总最终验收批次有关期间负担，不采用通用年化或寿命因子。 |  |
| allocation_rework | 返工循环、不合格及终止批次 | 每次真实纠正事件保留一次，仅去除重复记录。失败区域仅在最终通过验收后计为验收面积。终止且无验收面积的批次不得除以零或隐含并入无关成功批次；公开独立失败服务清单及归属决定。 |  |
| allocation_waste | 捕集废物及处理 | 按实际材料及含水状态报告接收方转移。处理数据集责任和回收主张均须明确边界；收集本身不证明回收或避免负担。 |  |

## 8. 前景数据采集、计算与质量规则

形成覆盖全部有关期间的可追溯作业／批次台账。计量包含 event_id、node_id、job_lot_id、period_id、时间戳、材料／条带／区域身份、方法、单位、计量不确定性及责任记录方。修正记录保留前序及原因。仅按物理事件身份去除副本，不按相同数量、区域编号或重复工作描述去重。

各含水节点须互不重叠地区分初始／配方水、输入交接水及新鲜水。每个输出水池仅归属一次：下一节点交接、可用外部退出、废水／液体转移、固体废物含水、未发出完好期末库存、期末未验收在制品、验收残余水或实际蒸发。水池归属取决于状态与时间。期初在制品携带实际含水量及前期编号；期末在制品不是验收产品或蒸气。纸张吸水仍保留在纸张实测水池。某交接门输出水经已记录期间事件后成为下一门输入水，故前序损失不得在下游重复。

只有所有物理相关输入及其他水输出均已观察或有独立证据、实际空气释放机制相符、水池互斥已核实并报告不确定性时，完整核对的残差才可量化蒸发；也可采用独立蒸发计量确定节点数量。仅部分去向已知时，报告缺失去向与平衡不确定性，不得将未解释差额或负残差作为蒸气。paste_book 单独记录的加水／稀释或漂洗水，以及 dry_accept 额外清洁，须有本节点实际输入输出交换并进行语义审查，不得转归 hang_trim。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_layout_cut | layout_cut | 接收墙面、纸张发出、条带、干废物及可用退出 | 接口实测与物料事件台账 | event_id; job_lot_id; period_id; wall_id; wall_dimensions_m; openings_m2; received_area_m2; primer_identity; wall_condition; wall_acceptance; paper_grade; roll_id; pattern_match; pattern_repeat_m; paper_opening_kg; paper_receipts_kg; paper_closing_intact_kg; paper_unused_return_kg; paper_unused_external_transfer_kg; strip_id; transfer_id; strip_dimensions_m; strip_mass_kg; paper_moisture_fraction; offcut_mass_kg; packaging_tare_kg; waste_custodian; rework_origin; rework_destination; closing_wip_id; closing_wip_mass_kg; A_m2; material_id; opening_intact_unissued_kg; receipts_kg; closing_intact_unissued_kg; unused_return_kg; unused_external_transfer_kg; actual_wet_mass_kg; tare_kg; evidenced_water_fraction; waste_material; custodian; gate_mass_kg; gate_area_m2; gate_water_kg; moisture_fraction; opening_wip_id; outgoing_rework_water_kg | 实测实际墙面及洞口，保留已涂底漆／干燥接口接收验收。识别卷与裁切条带；使用校准秤实测物料及完好库存，或采用可追溯同等级质量记录。供应纸质量不含包装皮重。分别记录实际裁切、纠正、边角料废弃及可用保管退出。跨期间配对条带交接与在制品。先核对 gross_draw、paired_transfer 与 waste_totals，再将各本节点分子除以相同最终 A。通用库存键为逐材料纸张台账字段 paper_opening_kg、paper_receipts_kg、paper_closing_intact_kg；通用未用退出键对应纸张退回／转移字段。通用 gate 质量／面积／水键为本节点各时间点条带或区域交接观察；通用废物键为各材料实际转移，不是追加数量。期初／期末在制编号及 outgoing_rework_water_kg 标识分别归属的实际返工状态。 | kg; m; m2 | 每次接收、发出、裁切、交接、退回、废弃及期间截止 | 从接收墙面门至本批次最后一次布局／裁切纠正 | 实际安装作业及布局责任 | 每参考流 | 实测表；实际铺贴说明；卷／条带编号；秤校准；库存台账；墙面验收；交接／退回／废物凭据 |
| cp_paste_book | paste_book | 输入纸张、胶粘剂、湿态润纸交接、可用退出、残余物及本节点水 | 各时间点施胶／润纸与水台账 | event_id; job_lot_id; period_id; strip_id; transfer_id; incoming_strip_kg; incoming_strip_water_kg; incoming_strip_dimensions_m; adhesive_identity; adhesive_batch; adhesive_opening_kg; adhesive_receipts_kg; adhesive_closing_intact_kg; adhesive_unused_return_kg; adhesive_unused_external_transfer_kg; adhesive_water_fraction; formulation_water_draw_kg; fresh_water_kg; opening_wip_water_kg; booked_strip_kg; booked_strip_water_kg; booked_strip_dimensions_m; booking_start; booking_end; instruction_id; residue_wet_kg; residue_water_kg; container_tare_kg; container_residue_water_kg; usable_exit_water_kg; liquid_exit_water_kg; closing_intact_water_kg; closing_wip_water_kg; directly_measured_evaporation_kg; evaporation_method; fate_coverage; water_uncertainty_kg; waste_custodian; rework_link; A_m2; material_id; opening_intact_unissued_kg; receipts_kg; closing_intact_unissued_kg; unused_return_kg; unused_external_transfer_kg; actual_wet_mass_kg; tare_kg; evidenced_water_fraction; waste_material; custodian; gate_mass_kg; gate_area_m2; gate_water_kg; moisture_fraction; opening_wip_id; closing_wip_id; outgoing_rework_water_kg; species_identity; release_state_basis; receiving_compartment; release_kg; release_method; release_occurrence_evidence | 以实测含水状态接收已识别裁切条带；称量实际配制胶发出及互斥库存／退回。保留产品专属相容性、实际润纸说明及观察时间。使用可追溯湿／干试样或经验证配方／组分证据实测湿态润纸条带与水分，不能假定全部增重均为胶。每项残余物、容器、可用退出及在制品含水仅归属一个去向。仅在去向完整或蒸发独立计量时采用 paste_water_balance。保留实际重复施胶／润纸事件并配对输出交接。本节点物理总量仅除以最终 A 一次。通用库存及未用退出键对应本材料台账 adhesive_* 字段。formulation_water_draw_kg 为配制胶总领用质量乘以有证据的 adhesive_water_fraction，不同批次分别计算；不是追加水输入。容器与残余物含水互斥计入。通用 gate 质量／面积／水键为本节点各时间点条带或区域交接观察；通用废物键为各材料实际转移，不是追加数量。期初／期末在制编号及 outgoing_rework_water_kg 标识分别归属的实际返工状态。对本节点实际非 H2O 直接释放，保留发生证据、精确物种／物态基准、接收介质、释放质量、方法及不确定性。仅用本节点协议应用 direct_release_total。是否发生、物种、介质或质量未知时保留缺口；明确不发生须有证据，不能从其他节点推断。捕集固体和液体转移不得再次计作直接释放。 | kg; m; h; m2 | 每次施胶／润纸、湿态交接、可用退出、废弃及截止 | 从裁切条带接收至每次实际润纸条带交接或边界退出 | 实际施胶／润纸责任 | 每参考流 | 产品／相容性说明；配方水证据；秤及水分方法校准；条带交接记录；润纸时间戳；库存／退回／废弃记录；不确定性与去向覆盖 |
| cp_hang_trim | hang_trim | 湿态输入、清洁供应、铺贴交接、可用退出、湿废物、液体及本节点水 | 铺贴／清洁及组分台账 | event_id; job_lot_id; period_id; patch_id; strip_id; transfer_id; incoming_booked_kg; incoming_booked_water_kg; incoming_dimensions_m; wash_water_provider; wash_water_opening_kg; wash_water_receipts_kg; wash_water_closing_intact_kg; wash_water_unused_exit_kg; fresh_water_kg; consumable_material; consumable_opening_kg; consumable_receipts_kg; consumable_closing_intact_kg; consumable_unused_return_kg; consumable_unused_external_transfer_kg; consumable_water_draw_kg; hung_area_m2; hung_paper_dry_kg; hung_adhesive_solids_kg; hung_water_kg; wet_trim_kg; wet_trim_water_kg; wastewater_kg; wastewater_water_fraction; spent_wipes_kg; spent_wipes_water_kg; usable_exit_water_kg; opening_wip_water_kg; closing_intact_water_kg; closing_wip_water_kg; directly_measured_evaporation_kg; evaporation_method; fate_coverage; water_uncertainty_kg; waste_custodian; rework_link; A_m2; material_id; opening_intact_unissued_kg; receipts_kg; closing_intact_unissued_kg; unused_return_kg; unused_external_transfer_kg; actual_wet_mass_kg; tare_kg; evidenced_water_fraction; waste_material; custodian; gate_mass_kg; gate_area_m2; gate_water_kg; moisture_fraction; opening_wip_id; closing_wip_id; outgoing_rework_water_kg; species_identity; release_state_basis; receiving_compartment; release_kg; release_method; release_occurrence_evidence | 将输入润纸条带身份、质量及实际含水量与 paste_book 核对。实测实际垂直定位／对花／修边工作与铺贴区域几何形态；观察而非推定吸水后尺寸。计量清洁供水及逐材料耗材物理总领用。称量湿态修边料、收集液体及废擦拭物，记录实际水组分及互斥容器／收集边界。可用正向退出单列；未用水仅在实际退回／转移时纳入。记录扣除本节点损失后传给 dry_accept 的实际铺贴含水量。仅在去向完整或蒸发独立计量时采用 hang_water_balance；汇总唯一真实事件，将各本节点总量仅除以 A 一次。通用库存及未用退出键对应各材料 consumable_* 字段，水台账则对应 wash_water_* 字段。consumable_water_draw_kg 为实际发出清洁材料组分水，不是新鲜漂洗水。wastewater_water_kg 为 wastewater_kg 乘以有证据的 wastewater_water_fraction。通用 gate 质量／面积／水键为本节点各时间点条带或区域交接观察；通用废物键为各材料实际转移，不是追加数量。期初／期末在制编号及 outgoing_rework_water_kg 标识分别归属的实际返工状态。对本节点实际非 H2O 直接释放，保留发生证据、精确物种／物态基准、接收介质、释放质量、方法及不确定性。仅用本节点协议应用 direct_release_total。是否发生、物种、介质或质量未知时保留缺口；明确不发生须有证据，不能从其他节点推断。捕集固体和液体转移不得再次计作直接释放。 | kg; m; m2 | 每次铺贴、纠正、修边、漂洗、收集、退出及交接事件 | 从润纸条带接收至铺贴表面交接，包括实际清洁／纠正 | 实际铺贴及清洁责任 | 每参考流 | 湿态交接记录；尺寸；秤／表／水分校准；材料身份；废水／废物保管；正向未用退出；去向覆盖及不确定性 |
| cp_dry_accept | dry_accept | 湿态接收、干燥／外观检查、不合格、验收表面及释放 | 区域验收及最终节点水台账 | event_id; job_lot_id; period_id; wall_id; patch_id; transfer_id; incoming_hung_area_m2; incoming_surface_water_kg; opening_wip_water_kg; added_water_kg; dry_start; inspection_time; dryness_instruction_id; dryness_method; observed_dryness; visual_result; accepted_patch_area_m2; accepted_residual_water_kg; rejected_patch_area_m2; reject_composite_kg; reject_water_kg; other_liquid_exit_water_kg; usable_exit_water_kg; closing_wip_water_kg; outgoing_rework_water_kg; directly_measured_evaporation_kg; evaporation_method; fate_coverage; water_uncertainty_kg; species_identity; receiving_compartment; release_kg; release_method; rework_link; termination_status; A_m2; material_id; opening_intact_unissued_kg; receipts_kg; closing_intact_unissued_kg; unused_return_kg; unused_external_transfer_kg; actual_wet_mass_kg; tare_kg; evidenced_water_fraction; waste_material; custodian; gate_mass_kg; gate_area_m2; gate_water_kg; moisture_fraction; opening_wip_id; closing_wip_id; release_state_basis; release_occurrence_evidence | 接收扣除前序损失后的实际铺贴区域状态。按照实际适用说明及记录方法检查干燥；记录外观验收及客户交付。实测唯一最终验收净区域面积，排除洞口／不合格及重复覆盖。保留实际验收准则下残余水，不设为零。称量拆除不合格物及含水量；分别记录期末未验收在制品及外出返工水。仅在去向完整或蒸发独立计量时采用 dry_water_balance。其他直接释放仅依据实际物种、物态及介质证据量化，并保留发生证据。去除记录副本，保留每次真实纠正，形成 accepted_area_total，将本节点总量除以 A。通用 gate 质量／面积／水键为本节点各时间点条带或区域交接观察；通用废物键为各材料实际转移，不是追加数量。期初／期末在制编号及 outgoing_rework_water_kg 标识分别归属的实际返工状态。 | kg; m2; h | 每次干燥／检查／纠正事件、验收及期间截止 | 湿态接收至最终批次验收或记录的终止 | 实际干燥及最终验收责任 | 每参考流 | 实际说明；验收表；实测；干燥／水分实测及校准；不合格／返工保管；物种／介质证据；去向完整性及不确定性 |
| cp_layout_cut_utilities | layout_cut | 实际电力及条件性付费服务 | 互斥来源期间归属台账 | event_id; job_lot_id; period_id; node_id; source_id; meter_id; meter_start_kWh; meter_end_kWh; direct_node_kWh; shared_source_kWh; utility_provider; voltage; mix_geography; source_period_start; source_period_end; consumer_id; consumer_node; consumer_period; positive_weight; all_consumer_weight_sum; service_provider; asset_id; contract_id; charge_unit; contract_start; contract_end; charged_hours; active_hours; paid_idle_hours; service_component_boundary; already_included_energy; A_m2; source_total_kWh; direct_consumer_kWh; positive_weight_node; source_period | 为本节点识别直接电表及完整来源期间。列明全部来源消费者，包括其他批次／节点及归属待机／预留可用活动。先扣除全部直接归属电量，仅按未被直接覆盖的剩余实际合格活动份额加权；仅在已知余量为正时要求完整正剩余权重。已知零余量仅保留 direct_node_kWh，不虚构共享分母；未知或负余量为缺口。付费服务采用完整付费可用总量，对全部消费份额保持完整正权重。各服务采用实际合同付费可用时间，包括付费闲置；必要时提供小时换算证据。明确服务是否包含电力／资产负担。对互斥来源数量仅应用 node_electricity 和 node_service_hours 一次，核对全部消费者与来源总量，再将本节点份额除以最终 A。有证据的未计费／未消费服务可记为不发生；缺记录为缺口。source_total_kWh 为实际 meter_end_kWh 减 meter_start_kWh，加有证据边界调整；direct_consumer_kWh 为全部单独直接归属消费者总量。电力的 positive_weight_node 为本节点合格剩余活动权重，all_consumer_weight_sum 仅为全部合格剩余活动份额的完整权重和，排除完全直接归属份额。服务的相同键表示完整计费服务的全部消费份额。source_period 为实际来源期间起止对。 | kWh; h | 每个电表／来源／合同期间及实际归属修订 | 本节点归属本批次的全部施工、等待、干燥及纠正期间 | 实际 layout_cut 消费者及所有同来源期间共同消费者 | 每参考流 | 电表／发票；供应方／电压证据；完整消费者与权重台账；已签合同／日历；实际计费单位换算；服务组成核对 |
| cp_paste_book_utilities | paste_book | 实际电力及条件性付费服务 | 互斥来源期间归属台账 | event_id; job_lot_id; period_id; node_id; source_id; meter_id; meter_start_kWh; meter_end_kWh; direct_node_kWh; shared_source_kWh; utility_provider; voltage; mix_geography; source_period_start; source_period_end; consumer_id; consumer_node; consumer_period; positive_weight; all_consumer_weight_sum; service_provider; asset_id; contract_id; charge_unit; contract_start; contract_end; charged_hours; active_hours; paid_idle_hours; service_component_boundary; already_included_energy; A_m2; source_total_kWh; direct_consumer_kWh; positive_weight_node; source_period | 为本节点识别直接电表及完整来源期间。列明全部来源消费者，包括其他批次／节点及归属待机／预留可用活动。先扣除全部直接归属电量，仅按未被直接覆盖的剩余实际合格活动份额加权；仅在已知余量为正时要求完整正剩余权重。已知零余量仅保留 direct_node_kWh，不虚构共享分母；未知或负余量为缺口。付费服务采用完整付费可用总量，对全部消费份额保持完整正权重。各服务采用实际合同付费可用时间，包括付费闲置；必要时提供小时换算证据。明确服务是否包含电力／资产负担。对互斥来源数量仅应用 node_electricity 和 node_service_hours 一次，核对全部消费者与来源总量，再将本节点份额除以最终 A。有证据的未计费／未消费服务可记为不发生；缺记录为缺口。source_total_kWh 为实际 meter_end_kWh 减 meter_start_kWh，加有证据边界调整；direct_consumer_kWh 为全部单独直接归属消费者总量。电力的 positive_weight_node 为本节点合格剩余活动权重，all_consumer_weight_sum 仅为全部合格剩余活动份额的完整权重和，排除完全直接归属份额。服务的相同键表示完整计费服务的全部消费份额。source_period 为实际来源期间起止对。 | kWh; h | 每个电表／来源／合同期间及实际归属修订 | 本节点归属本批次的全部施工、等待、干燥及纠正期间 | 实际 paste_book 消费者及所有同来源期间共同消费者 | 每参考流 | 电表／发票；供应方／电压证据；完整消费者与权重台账；已签合同／日历；实际计费单位换算；服务组成核对 |
| cp_hang_trim_utilities | hang_trim | 实际电力及条件性付费服务 | 互斥来源期间归属台账 | event_id; job_lot_id; period_id; node_id; source_id; meter_id; meter_start_kWh; meter_end_kWh; direct_node_kWh; shared_source_kWh; utility_provider; voltage; mix_geography; source_period_start; source_period_end; consumer_id; consumer_node; consumer_period; positive_weight; all_consumer_weight_sum; service_provider; asset_id; contract_id; charge_unit; contract_start; contract_end; charged_hours; active_hours; paid_idle_hours; service_component_boundary; already_included_energy; A_m2; source_total_kWh; direct_consumer_kWh; positive_weight_node; source_period | 为本节点识别直接电表及完整来源期间。列明全部来源消费者，包括其他批次／节点及归属待机／预留可用活动。先扣除全部直接归属电量，仅按未被直接覆盖的剩余实际合格活动份额加权；仅在已知余量为正时要求完整正剩余权重。已知零余量仅保留 direct_node_kWh，不虚构共享分母；未知或负余量为缺口。付费服务采用完整付费可用总量，对全部消费份额保持完整正权重。各服务采用实际合同付费可用时间，包括付费闲置；必要时提供小时换算证据。明确服务是否包含电力／资产负担。对互斥来源数量仅应用 node_electricity 和 node_service_hours 一次，核对全部消费者与来源总量，再将本节点份额除以最终 A。有证据的未计费／未消费服务可记为不发生；缺记录为缺口。source_total_kWh 为实际 meter_end_kWh 减 meter_start_kWh，加有证据边界调整；direct_consumer_kWh 为全部单独直接归属消费者总量。电力的 positive_weight_node 为本节点合格剩余活动权重，all_consumer_weight_sum 仅为全部合格剩余活动份额的完整权重和，排除完全直接归属份额。服务的相同键表示完整计费服务的全部消费份额。source_period 为实际来源期间起止对。 | kWh; h | 每个电表／来源／合同期间及实际归属修订 | 本节点归属本批次的全部施工、等待、干燥及纠正期间 | 实际 hang_trim 消费者及所有同来源期间共同消费者 | 每参考流 | 电表／发票；供应方／电压证据；完整消费者与权重台账；已签合同／日历；实际计费单位换算；服务组成核对 |
| cp_dry_accept_utilities | dry_accept | 实际电力及条件性付费服务 | 互斥来源期间归属台账 | event_id; job_lot_id; period_id; node_id; source_id; meter_id; meter_start_kWh; meter_end_kWh; direct_node_kWh; shared_source_kWh; utility_provider; voltage; mix_geography; source_period_start; source_period_end; consumer_id; consumer_node; consumer_period; positive_weight; all_consumer_weight_sum; service_provider; asset_id; contract_id; charge_unit; contract_start; contract_end; charged_hours; active_hours; paid_idle_hours; service_component_boundary; already_included_energy; A_m2; source_total_kWh; direct_consumer_kWh; positive_weight_node; source_period | 为本节点识别直接电表及完整来源期间。列明全部来源消费者，包括其他批次／节点及归属待机／预留可用活动。先扣除全部直接归属电量，仅按未被直接覆盖的剩余实际合格活动份额加权；仅在已知余量为正时要求完整正剩余权重。已知零余量仅保留 direct_node_kWh，不虚构共享分母；未知或负余量为缺口。付费服务采用完整付费可用总量，对全部消费份额保持完整正权重。各服务采用实际合同付费可用时间，包括付费闲置；必要时提供小时换算证据。明确服务是否包含电力／资产负担。对互斥来源数量仅应用 node_electricity 和 node_service_hours 一次，核对全部消费者与来源总量，再将本节点份额除以最终 A。有证据的未计费／未消费服务可记为不发生；缺记录为缺口。source_total_kWh 为实际 meter_end_kWh 减 meter_start_kWh，加有证据边界调整；direct_consumer_kWh 为全部单独直接归属消费者总量。电力的 positive_weight_node 为本节点合格剩余活动权重，all_consumer_weight_sum 仅为全部合格剩余活动份额的完整权重和，排除完全直接归属份额。服务的相同键表示完整计费服务的全部消费份额。source_period 为实际来源期间起止对。 | kWh; h | 每个电表／来源／合同期间及实际归属修订 | 本节点归属本批次的全部施工、等待、干燥及纠正期间 | 实际 dry_accept 消费者及所有同来源期间共同消费者 | 每参考流 | 电表／发票；供应方／电压证据；完整消费者与权重台账；已签合同／日历；实际计费单位换算；服务组成核对 |

### 计算规则

以下公式是采集转换而非经验因子。事件求和保留真实重复工作，仅去除记录副本。节点下标表示责任过程，材料及交接编号保持明确。A 在所有节点均为相同正值 accepted_area_total。水项单位是组分 kg H2O，不是复合物总 kg。负物理领用、权重分母、水池或未解释残差均为问题，不得静默裁剪为零。

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_area_total | reference_service | A = sum(unique finally accepted net patch areas); service_ref = A / A = 1 m2。采用实际尺寸／洞口及吸水至验收状态；排除重复覆盖及未验收区域。要求 A > 0。 | accepted_patch_area_m2; wall_dimensions_m; openings_m2; patch_id; visual_result; observed_dryness; cp_dry_accept | A; service_ref |  |
| gross_draw | paper_rolls; adhesive; wash_consumables | gross_draw_kg = opening_intact_unissued_kg + receipts_kg - closing_intact_unissued_kg; input_ref = gross_draw_kg / A。可用未用退回及外部转移离开节点保管，故包含在物理总领用中；此处不得扣除。期初／期末已加工在制品为独立状态，不是完好未发出库存。 | material_id; opening_intact_unissued_kg; receipts_kg; closing_intact_unissued_kg; A; cp_layout_cut; cp_paste_book; cp_hang_trim | gross_draw_kg; input_ref |  |
| unused_exit_total | unused_paper_return; unused_adhesive_return; unused_hanging_consumable_return | unused_exit_kg = sum(unique actual usable return events + unique unused external-transfer events)，按原始材料及节点区分；output_ref = unused_exit_kg / A。Net_consumed_diagnostic_kg = gross_draw_kg - unused_exit_kg；不得据诊断再生成交换或再次扣减。 | event_id; material_id; unused_return_kg; unused_external_transfer_kg; gross_draw_kg; A; cp_layout_cut; cp_paste_book; cp_hang_trim | unused_exit_kg; output_ref; net_consumed_diagnostic_kg |  |
| paired_transfer | cut_strips; paste_feed; booked_strips; hang_feed; wet_wallcovering; dry_feed | transfer_ref = actual own-gate mass_kg or area_m2 / A，保留该卡单位。配对发送与接收 transfer_id、状态、时间及组分；交接间任何独立归属物理事件分别量化。本节点扣除前序损失后的实际输出水作为下一节点输入水。不得用 A 替代分子，亦不得在无实测等级／含水转换桥梁时由面积推质量。 | transfer_id; gate_mass_kg; gate_area_m2; gate_water_kg; strip_dimensions_m; moisture_fraction; A; cp_layout_cut; cp_paste_book; cp_hang_trim; cp_dry_accept | transfer_ref; paired_gate_state |  |
| fresh_water_total | wash_water | gross_fresh_water_kg = wash_water_opening_kg + wash_water_receipts_kg - wash_water_closing_intact_kg; fresh_water_ref = gross_fresh_water_kg / A。无储存的直接供水须有证据表明期初期末不存在，实测接收量即物理领用。实际未用水退出保持独立正向、按材料区分输出。 | wash_water_opening_kg; wash_water_receipts_kg; wash_water_closing_intact_kg; wash_water_unused_exit_kg; A; cp_hang_trim | gross_fresh_water_kg; fresh_water_ref |  |
| waste_totals | paper_offcuts; paper_packaging; paste_residue; paste_packaging; wet_trim; wash_wastewater; spent_wipes; dry_rejects | waste_ref = sum(unique actual waste transfer masses by material/state/custodian) / A。区分皮重和残余物，或证明所含物仅计一次。water_in_waste_kg = actual_wet_mass_kg × evidenced_water_fraction，或独立实测组分水。固体废物含水与废水含水互斥。 | event_id; waste_material; actual_wet_mass_kg; tare_kg; evidenced_water_fraction; custodian; A; cp_layout_cut; cp_paste_book; cp_hang_trim; cp_dry_accept | waste_ref; water_in_waste_kg |  |
| water_constituent_inputs | paste_book_vapour; hang_trim_vapour; dry_vapour | formulation_water_draw_kg = gross formulated adhesive draw_kg × actual batch adhesive_water_fraction，逐批相加；wastewater_water_kg = wastewater_kg × evidenced wastewater_water_fraction。consumable_water_draw_kg 为实际发出清洁材料组分水实测值。这些是现有物理输入／输出的组分，不是额外交换。container_residue_water_kg 与 residue_water_kg 保持互斥。 | adhesive_opening_kg; adhesive_receipts_kg; adhesive_closing_intact_kg; adhesive_water_fraction; wastewater_kg; wastewater_water_fraction; consumable_water_draw_kg; residue_water_kg; container_residue_water_kg; cp_paste_book; cp_hang_trim | formulation_water_draw_kg; wastewater_water_kg |  |
| paste_water_balance | paste_book_vapour | W_in_paste = incoming_strip_water_kg + formulation_water_draw_kg + fresh_water_kg + opening_wip_water_kg。W_out_paste = booked_strip_water_kg + usable_exit_water_kg + residue_water_kg + container_residue_water_kg + liquid_exit_water_kg + closing_wip_water_kg + outgoing_rework_water_kg。总物料领用已排除未发出期末配方水，不得再次扣除；可用退回水同时保留在 W_in 与 W_out。Actual evaporation = 独立实测本节点蒸发量，或仅在去向完整、互斥且空气释放有依据时采用 W_in_paste - W_out_paste。evaporation_ref = actual evaporation / A。 | incoming_strip_water_kg; formulation_water_draw_kg; fresh_water_kg; opening_wip_water_kg; booked_strip_water_kg; usable_exit_water_kg; residue_water_kg; container_residue_water_kg; liquid_exit_water_kg; closing_wip_water_kg; outgoing_rework_water_kg; fate_coverage; directly_measured_evaporation_kg; water_uncertainty_kg; A; cp_paste_book | actual_paste_evaporation_kg; evaporation_ref; water_balance_gap |  |
| hang_water_balance | hang_trim_vapour | W_in_hang = incoming_booked_water_kg + gross_fresh_water_kg + consumable_water_draw_kg + opening_wip_water_kg。W_out_hang = hung_water_kg + usable_exit_water_kg + wet_trim_water_kg + wastewater_water_kg + spent_wipes_water_kg + closing_wip_water_kg + outgoing_rework_water_kg。实际新鲜水／配制物总领用已排除完好未发出期末水，不得再次扣除。Actual evaporation = 独立实测本节点蒸发量，或仅在去向完整、互斥且空气释放有依据时采用 W_in_hang - W_out_hang。evaporation_ref = actual evaporation / A。 | incoming_booked_water_kg; gross_fresh_water_kg; consumable_water_draw_kg; opening_wip_water_kg; hung_water_kg; usable_exit_water_kg; wet_trim_water_kg; wastewater_water_kg; spent_wipes_water_kg; closing_wip_water_kg; outgoing_rework_water_kg; fate_coverage; directly_measured_evaporation_kg; water_uncertainty_kg; A; cp_hang_trim | actual_hang_evaporation_kg; evaporation_ref; water_balance_gap |  |
| dry_water_balance | dry_vapour | W_in_dry = incoming_surface_water_kg + opening_wip_water_kg + added_water_kg。W_out_dry = accepted_residual_water_kg + reject_water_kg + other_liquid_exit_water_kg + usable_exit_water_kg + closing_wip_water_kg + outgoing_rework_water_kg。Actual evaporation = 独立实测本节点蒸发量，或仅在去向完整、互斥且空气释放有依据时采用 W_in_dry - W_out_dry。evaporation_ref = actual evaporation / A。验收残余水按实际干燥验收实测，不必为零。 | incoming_surface_water_kg; opening_wip_water_kg; added_water_kg; accepted_residual_water_kg; reject_water_kg; other_liquid_exit_water_kg; usable_exit_water_kg; closing_wip_water_kg; outgoing_rework_water_kg; fate_coverage; directly_measured_evaporation_kg; water_uncertainty_kg; A; cp_dry_accept | actual_dry_evaporation_kg; evaporation_ref; water_balance_gap |  |
| node_electricity | layout_cut_electricity; paste_book_electricity; hang_trim_electricity; dry_accept_electricity | 对各互斥来源期间：shared_remainder_kWh = source_total_kWh - independently assigned direct_consumer_kWh。若 shared_remainder_kWh > 0，share_node = positive_weight_node / all_consumer_weight_sum，仅包含未被直接归属覆盖的剩余实际合格活动份额；E_node = direct_node_kWh + shared_remainder_kWh × share_node。完全直接归属份额不得再次获得余量。若已知 shared_remainder_kWh = 0，则 E_node = direct_node_kWh，不要求共享分母。未知或负余量为数据缺口。对正余量，完整合格权重及分母须为正，份额合计核对至 1；分母缺失／零阻止分配。汇总互斥来源期间 E_node 后除以 A。 | source_total_kWh; direct_consumer_kWh; direct_node_kWh; positive_weight_node; all_consumer_weight_sum; source_period; service_component_boundary; A; cp_layout_cut_utilities; cp_paste_book_utilities; cp_hang_trim_utilities; cp_dry_accept_utilities | E_node; electricity_ref |  |
| node_service_hours | layout_cut_shared_service; paste_book_shared_service; hang_trim_shared_service; dry_accept_shared_service | H_source = 根据实际合同期间及有证据计费单位换算确定的付费可用小时数，包括付费闲置。H_node = H_source × positive_weight_node / sum(all positive consumer weights)。汇总互斥来源期间后将 H_node 除以 A。按有证据权重方法纳入预留／闲置消费者；不使用 8 小时工作日乘数或假定干燥时长。保留供应方服务边界，避免重复电力。 | charged_hours; contract_start; contract_end; paid_idle_hours; charge_unit; positive_weight_node; all_consumer_weight_sum; consumer_id; source_period; service_component_boundary; A; cp_layout_cut_utilities; cp_paste_book_utilities; cp_hang_trim_utilities; cp_dry_accept_utilities | H_node; service_ref |  |
| direct_release_total | paste_book_other_releases; hang_trim_other_releases; dry_accept_other_releases | release_ref = sum(unique actually evidenced own-node release_kg for each exact non-H2O species, physical-state basis and receiving compartment) / A。保留发生证据、方法与不确定性；发生、物种、介质或数量未知时为缺口，不得从不明材料损失重建释放。采用实际产生节点及本节点协议；dry_accept 数量不得替代前序节点释放。 | event_id; species_identity; release_state_basis; receiving_compartment; release_kg; release_method; release_occurrence_evidence; A; cp_paste_book; cp_hang_trim; cp_dry_accept | species_release_ref |  |
| period_rollforward | all inventory rows | 前期 Closing WIP state = 后期 next opening WIP state，并分别记录期间之间独立归属事件。汇总同一批次各期间唯一归属真实事件负担，保留纠正事件，仅排除记录副本。最终按批次验收 A 归一化；状态结转不得形成第二次采购或第二次蒸发。 | event_id; job_lot_id; period_id; closing_wip_id; opening_wip_id; rework_link; A; cp_layout_cut; cp_paste_book; cp_hang_trim; cp_dry_accept | reconciled_lot_totals; carried_state |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| dq_route | 批次边界 | 确认未预涂胶纸张／纸背施胶结构、相容预混水性胶，以及已接收干燥、牢固、适当涂底漆墙面。更宽泛或不相容交换身份不能扩大类别。 | 实际纸张／胶粘剂说明；接收墙面验收 |
| dq_area | 参考及交接 | 采用实际区域实测几何、洞口／重叠规则及最终验收；记录水分引起的纸张尺寸变化；保留实际湿态交接，不强制等于最终 A。 | 实测；条带／区域／交接台账；含水与验收记录 |
| dq_material | 库存及退出 | 按材料／状态以 kg 核对互斥完好库存、总领用、加工／在制、原始可用退出及实际废物。记录包装皮重及湿／干基准。 | 校准秤；库存、交接、退回及接收方记录 |
| dq_water | paste_book, hang_trim, dry_accept | 声明完整／部分去向覆盖、各互斥水组分池、实际交接水分及不确定性。部分平衡不支持默认蒸气量或零损失。 | 独立可追溯水分／配方／废水证据及节点平衡 |
| dq_rework | 实际事件 | 每次物理纠正、替换及废弃保留一次，仅去重记录副本。失败／终止状态及外出纠正转移具有明确去向及负担。 | 事件前序编号；纠正及终止记录 |
| dq_shared | 公用工程／服务 | 核对供应方／来源期间及全部消费者；电力先直接归属，再仅分配合格剩余活动份额，只有正余量要求完整正权重。已知零余量保留直接归属；未知／负余量为缺口。服务以完整正消费者权重核对全部付费可用量及付费闲置，避免服务／电力重叠。 | 电表；合同；计费换算；分配核对 |
| dq_period | 跨期间批次 | 覆盖至最终验收的全部实际施工、等待、干燥及纠正期间；结转状态不得重复采购、负担或蒸发。 | 截止库存；期间关联事件台账；最终验收 |
| dq_identity | 具体交换 | 形成最终交换前解析实际材料／供应方／物种身份及属性／单位。条件性总括卡在实际交换明确前保留语义状态；直接释放须有物种及介质证据。 | 已核实身份详情及前景限定信息记录 |
| dq_range | 每个 Range | 将宽泛作者区间保持为暂定范围。经验替代须对独立审查参考总体检验，不得用本批次最大值验证本批次。离群量保留实际数值及解释。 | 独立参考样本及审查；暂定范围公开 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | 实际路线 | 若将乙烯基、自粘、预涂胶、墙面施胶、制造或基层准备作为本服务，范围不相容；核实实际已涂底漆并干燥的接收接口。 | roman-wall-preparation; roman-paper-preparation |
| validate_reference | 验收服务 | 要求正值 A、唯一实际最终验收面积台账及 reference_service 关联。A/A = 1 仅为归一化；终止的零 A 批次独立公开。 |  |
| validate_handoffs | 配对交接门 | 核对交接两侧 transfer_id、状态、属性／单位、实际数量、含水量及期间。解释交接间实际损失／纠正；不得将内部分子强设为 1 m2。 |  |
| validate_stock | 物料领用及可用退出 | 要求总物理输入为期初 + 接收 - 互斥完好未发出期末库存；原始可用输出另以正值记录。拒绝重复扣减、将期末库存报告为退回、将加工不合格物报告为未用材料及服务／返工抵扣。 |  |
| validate_water | 三个含水节点 | 按不确定性及交接连续性核对本节点输入，以及所有互斥保留、液体、固体、库存／在制、可用退出与空气去向。数值蒸气交换须有完整核对或独立蒸发计量。缺失去向为不完整覆盖；负残差为问题。 |  |
| validate_dryness | 最终验收 | 采用实际适用的干燥／外观准则及观察结果。润纸、修边余量、底漆等待与最终干燥时长均来自产品／场地记录；不采用通用 3–5 分钟、两英寸、24 小时或使用寿命。验收残余水不得默认为零。 | roman-paper-preparation; roman-first-strip; roman-wall-preparation |
| validate_rework | 失败状态与纠正 | 每个不合格状态均须在产生／保管节点具有返工、保留在制、原始可用材料退出或实际废弃去向。各验收区域仅计一次、每次真实纠正仅计一次；仅去重重复记录。 |  |
| validate_services | 共享来源 | 要求实际供应方、期间及源总量核对。电力扣除全部直接归属后，仅将已知正余量分给未被直接覆盖的实际合格活动份额，权重及分母须完整且为正。已知余量为零时仅保留直接量，不要求共享分母；未知或负余量为缺口。服务以全部实际消费者的完整正权重分配完整付费可用量，包括付费闲置。拒绝虚构工作日换算和电力／组成重复。 |  |
| validate_periods | 批次事件覆盖 | 核对全部实际期间的期初／期末在制品及负担。终止／替换责任未解决时不得完成；状态结转不得形成重复采购或蒸发。 |  |
| validate_own_node_releases | paste_book_other_releases; hang_trim_other_releases; dry_accept_other_releases | 形成具体非 H2O 释放交换前须确认实际发生、物种／物态、接收介质、数量方法及本节点协议。不得从证据缺失推定发生或数值零，不得将全部释放归干燥，亦不得将捕集废物再次计作基本流释放。 |  |
| validate_identity | 全部交换身份 | 核实具体身份与材料／配方／状态／供应方／介质及声明属性／单位相符。水蒸气 UUID 仅可复用于精确 H2O 空气身份，不能证明数量。未知物种／介质不得变成通用 VOC 或混合粉尘。 |  |
| validate_coverage | 完整数据包 | 报告执行及跳过检查、数量／身份缺口与不确定性。机械投影或检查器成功不能证明实际完整性、身份确认或暂定 Range 合理性。实质缺口阻止完整数据集声明。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明安装服务的前景采集包；仅在交换身份解析及质量审查后投影为 process 或 lifecyclemodel |
| downstream_use | secondary_dataset; background_dataset，受公开作业范围与质量约束 |
| allowed_use | 在相容材料与场地条件下，从已验收准备墙面至实际干燥验收的指定纸背施胶法安装责任建模 |
| excluded_use | 壁纸／胶粘剂／墙体制造；旧覆盖物拆除／大修／底漆施涂；乙烯基或其他安装路线；使用期寿命、维护或寿命末期；声称本较窄路线代表全部 54750 活动 |
| required_metadata | 作业／批次与场地／地理范围；墙面／底漆接收条件；实际纸张结构／批次／图案；胶粘剂产品／配方；路线及供应方责任；区域／条带编号；面积规则及 A；润纸／干燥与验收证据；期间、纠正及终止；上游数据集；交接、废物及水去向；公用工程／服务归属 |
| required_quality_disclosure | 计量方法／校准及不确定性；完整／部分去向覆盖；原始可用退出处理；共享消费者／付费闲置；未解决交换／支持身份及数量；跳过检查；暂定作者 Range；范围限制及代表性 |
| update_trigger | 纸张或胶粘剂、接收基层／接口、安装路线或验收准则变化；修订实测数量／去向证据；新增公用工程／供应方或服务合同；纠正返工／期间归属；更强独立范围或身份确认 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| roman-room-layout | handbook | ROMAN Products, How to Prep the Room for Wallpaper; https://romandecoratingproducts.com/blogs/how-to/preparing-walls-wallcovering-installation ; accessed 2026-10-12 | 布局、实际对花及条带顺序；不支撑基层底漆准备或数量损耗默认值 |
| roman-paper-preparation | handbook | ROMAN Products, How to Prep the Paper; https://romandecoratingproducts.com/blogs/how-to/preparing-the-wallpaper ; accessed 2026-10-12 | 裁切条带／施胶／润纸顺序、实际铺贴说明核对及纸张吸水；示例修边／润纸数字不是通用默认值或清单因子 |
| roman-first-strip | handbook | ROMAN Products, How to Hang the First Strip; https://romandecoratingproducts.com/blogs/how-to/hang-first-wallpaper-strip ; accessed 2026-10-12 | 铺贴、抚平、修边及湿清洁责任；不提供耗水或蒸发因子 |
| roman-wall-preparation | handbook | ROMAN Products, How to Prepare Walls for Wallpaper; https://romandecoratingproducts.com/blogs/how-to/prepare-walls-for-wallpaper-installation ; accessed 2026-10-12 | 适用性、底漆相容性及干燥上游墙面接口；准备本身不在边界内，文章等待时间不是默认值 |
