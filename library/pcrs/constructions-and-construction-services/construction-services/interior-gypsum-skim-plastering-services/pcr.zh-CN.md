---
pcr_id: pcr.constructions-and-construction-services.construction-services.interior-gypsum-skim-plastering-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 室内石膏薄层抹灰服务

## 1. 范围与适用性

本方法涵盖已适用并验收的石膏板或底层表面上的室内手工石膏饰面薄抹，包括局部接缝及边缘处理、粉料加水拌和、薄层抹涂、凝结、压光，以及监测干燥至申明的可装饰状态验收关口。排除上游基层施工、板材制造及安装、底层施工、水泥抹面、涂装、拆除和危险清除。本路线属于现场工作批及拌和批次服务，不设通用厚度、配方、覆盖率或干燥时间。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.interior-gypsum-skim-plastering-services |
| classification_refs | CPC 3.0 54720 Plastering services；拟议narrower关系 |
| covered_products | 在适用且已验收既有基层上的室内石膏薄层饰面服务 |
| excluded_products | 基层施工；石膏板安装；水泥抹面；涂装；危险清除；外墙抹灰 |
| representative_product | 在已验收室内石膏板上手工施作石膏饰面薄层 |
| production_route | 局部界面准备；粉料加水拌和；手工抹涂及凝结/压光；干燥与最终验收 |
| market_state | 在申明可装饰干燥关口完成交接的室内表面；基层及随后装饰责任独立 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收可装饰干燥室内石膏薄层抹灰服务 |
| How much | 1 平方米净验收薄抹面积 |
| How well | 申明基层、饰面系统、实际厚度、表面质量及可装饰状态验收证据 |
| How long or cycle | 一个可识别工作批，从起始表面验收至实际干燥验收；不假定使用寿命等效性 |
| reference_flow_link | `accepted_skim` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 验收可装饰干燥石膏薄层抹灰服务 |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | 场址和期间；验收基层及局部准备；饰面石膏等级；实际厚度及涂层次序；净面积测量及开口；分区/批次关联；质量关口；实际干燥判据及观测；气候/通风/供热；返工及废物去向；上下游边界责任 |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| net_area | reference product | Area | m2 | 测量净验收表面，扣除开口及未验收分区；报告洞口侧面、折返面的处理，避免同一物理表面重复计数。 |
| wet_dry_water | gypsum_powder; mixed_paste; finish_paste; evaporated_water | Mass | kg | 区分交付干粉、湿浆、水化保留水、残余自由水、收集液及水蒸气；记录库存和转移变化。 |
| retain_energy | prep_electricity; mix_electricity; finish_electricity; dry_electricity; dry_heat | Energy | kWh; MJ | 分开保留计量电量及交付热量；申明换算和设备边界，不将kWh视为燃料质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 既有基层已验收适合所选石膏饰面，基层施工完成，并已识别局部接缝及边缘 |
| starting_condition_role | 上游交接前提，随后纳入局部界面准备 |
| product_classification_scope | 抹灰服务中较窄的室内石膏薄层路线 |
| recursive_input_rule | 外购同类服务作为已识别上游活动仅进入一次；移除重叠前景作业，并披露递归截断。 |
| upstream_dataset_requirement | 将粉料、供水、准备材料、能源、设备及运输服务关联至相容上游数据集；基层为责任独立的明确上游前提，不得默认为零。 |
| disclosure | 记录排除的基层生产/修复及下游装饰；施工地点、期间、起始验收、实际系统、公用工程及废物责任；报告缺失的上游覆盖。 |

### 边界规则

| rule_id | 适用对象 (Applies to) | 规则 (Rule) | source_ids |
| --- | --- | --- | --- |
| scope_gate | substrate; finish | 核实所选抹灰产品对实际基层的适用性，并纳入局部准备；重大基层修复为上游前提。 | british-gypsum-multifinish-installation |
| reaction_gate | mix; finish; dry_accept | 粉料和水在mix形成浆料；finish内石膏凝结改变保留组成。报告交接处实际产品和水状态、未反应余料及残余物；不得臆造化学计量收率、气体副产物或完全反应。 | |
| dryness_gate | dry_accept | 压光/凝结不证明可装饰干燥状态。相关实际通风/供热及监测持续至申明判据满足；制造商分阶段抹涂时间仅针对特定产品，不提供通用干燥终点。 | british-gypsum-multifinish-installation |
| utility_owner | prep; mix; finish; dry_accept | 识别共享照明、登高平台及设备、每个使用节点和服务期间；实测服务需求仅归属一次，并披露动员、租赁/资本及上游覆盖。完整工作批持续至实际跨日干燥完成；记录报告截止时未验收表面及含水状态，将其已有负荷结转至同一最终验收工作批，不重置、截断或重复计数。 | |
| water_destination | mix; finish; dry_accept | 区分拌和/饰面/清洗供水、保留水、收集浆水/凝水及实际蒸气或直接排放；无物质及受纳介质证据时，不得将污水或粉尘类别假定为基本流排放。 | |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：接缝及边缘处理材料 (`prep_materials`)

过程／待建立交换的方向／类型：`prep` / `inputs` / `product`.

按实际需要局部处理已验收基层的接缝和边缘；将此类别展开为实际识别的产品。

- 采集对象：接缝及边缘处理材料
- 流属性/单位：Mass / kg
- 数量规则：prep_material_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prep`
- 尚待核实的可选筛查提示：暂定筛选。局部接缝带、护角和相容处理料的宽泛暂定筛选；化学组成取决于实际系统。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：准备作业登高及设备服务 (`prep_access`)

过程／待建立交换的方向／类型：`prep` / `inputs` / `product`.

纳入可归属局部准备的实际登高及动员服务；下游具体交换保留设备及服务单位。

- 采集对象：准备作业登高及设备服务
- 流属性/单位：Duration / h
- 数量规则：prep_service_hours / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prep`
- 尚待核实的可选筛查提示：暂定筛选。暂定筛选登高平台和设备分配小时数；不规定寿命或服务因子。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：h
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：已准备合适基层界面 (`prepared_area`)

过程／待建立交换的方向／类型：`prep` / `outputs` / `product`.

局部准备后的内部面积交接，记录基层验收和分区转移编号；既有基层制造属于上游背景。

- 采集对象：已准备合适基层界面
- 流属性/单位：Area / m2
- 数量规则：prepared_area / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prep`
- 尚待核实的可选筛查提示：暂定筛选。暂定筛选允许待验收准备面积及返工；不是恒等数量。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：3
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：准备残余物交收 (`prep_waste`)

过程／待建立交换的方向／类型：`prep` / `outputs` / `waste`.

按组成和接收方记录收集边角料；收集残余物不得当作大气排放。

- 采集对象：准备残余物交收
- 流属性/单位：Mass / kg
- 数量规则：prep_waste_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prep`
- 尚待核实的可选筛查提示：暂定筛选。局部准备残余物宽泛暂定筛选；危险清除仍排除。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：不合格浆料及粉料交收 (`mix_reject`)

过程／待建立交换的方向／类型：`mix` / `outputs` / `waste`.

失效或污染浆料不得计入合格生产；仅在供应商允许时记录获准返用。

- 采集对象：不合格浆料及粉料交收
- 流属性/单位：Mass / kg
- 数量规则：mix_reject_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 尚待核实的可选筛查提示：暂定筛选。暂定不合格物筛选包括失效浆料和洒落物；须记录实际去向。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：石膏包装交收 (`mix_packaging`)

过程／待建立交换的方向／类型：`mix` / `outputs` / `waste`.

按材料和回收或处置接收方拆分包装。

- 采集对象：石膏包装交收
- 流属性/单位：Mass / kg
- 数量规则：mix_packaging_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 尚待核实的可选筛查提示：暂定筛选。实际袋材及包装质量确定前的暂定包装筛选。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：拌和实测大气排放 (`mix_air`)

过程／待建立交换的方向／类型：`mix` / `outputs` / `elementary`.

仅在实际测得时纳入具名颗粒物、水蒸气或其他物种；有证据的拌和期水蒸气由本节点负责，不归入dry_accept；展开物种及粒径，不假定通用粉尘UUID。

- 采集对象：拌和实测大气排放
- 流属性/单位：Mass / kg
- 数量规则：mix_emission_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 尚待核实的可选筛查提示：暂定筛选。仅暂定筛选包络；污染物身份及受纳大气区室须实测证据。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：已准备合适基层供入 (`finish_substrate`)

过程／待建立交换的方向／类型：`finish` / `inputs` / `product`.

来自准备节点的内部界面，保持相同转移编号和合格基层状态。

- 采集对象：已准备合适基层供入
- 流属性/单位：Area / m2
- 数量规则：finish_substrate_area / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 尚待核实的可选筛查提示：暂定筛选。暂定面积筛选按分区与准备输出核对；本节点不生产基层。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：3
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：抹涂登高及设备服务 (`finish_access`)

过程／待建立交换的方向／类型：`finish` / `inputs` / `product`.

记录实际登高服务份额、设备身份和交付动员；避免与准备费用重复。

- 采集对象：抹涂登高及设备服务
- 流属性/单位：Duration / h
- 数量规则：finish_service_hours / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 尚待核实的可选筛查提示：暂定筛选。设备分配小时数暂定筛选，不假定设备寿命。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：h
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：已凝结压光薄层表面转移 (`trowelled_area`)

过程／待建立交换的方向／类型：`finish` / `outputs` / `product`.

本责任内发生抹涂石膏凝结；识别反应保留料、多余浆料和湿残余物，不假定完全反应或气体副产物。

- 采集对象：已凝结压光薄层表面转移
- 流属性/单位：Area / m2
- 数量规则：trowelled_area / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 尚待核实的可选筛查提示：暂定筛选。暂定中间面积筛选；凝结并非可装饰干燥证据。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：3
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：抹涂及返工残余物交收 (`finish_waste`)

过程／待建立交换的方向／类型：`finish` / `outputs` / `waste`.

拒收分区返回饰面节点整改并保留重复人工和材料负荷；清除抹灰料按实测废物出界，拒收面积排除于accepted_area。

- 采集对象：抹涂及返工残余物交收
- 流属性/单位：Mass / kg
- 数量规则：finish_waste_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 尚待核实的可选筛查提示：暂定筛选。洒落抹灰料及清除缺陷的暂定残余物筛选；不假定废物比例。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 采集要求：已凝结压光薄层表面供入 (`dry_surface`)

过程／待建立交换的方向／类型：`dry_accept` / `inputs` / `product`.

接收凝结表面开展监测干燥及检查；实际保留水状态仍须记录不确定性。

- 采集对象：已凝结压光薄层表面供入
- 流属性/单位：Area / m2
- 数量规则：dry_surface_area / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_accept`
- 尚待核实的可选筛查提示：暂定筛选。按分区与饰面输出核对的暂定交接面积筛选。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：3
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 (process_name) | 纳入状态 (inclusion) | 纳入条件 (inclusion_condition) | 角色 (role) | 定量参考 (quantitative_reference) |
| --- | --- | --- | --- | --- | --- |
| prep | 局部基层界面准备 | required | 已验收适用既有基层 | 局部接缝/边缘及准备界面 | 按分区实测准备面积 |
| mix | 饰面石膏粉料加水拌和 | required | 实际所选石膏饰面系统 | 批次配制、粉料/水核对及新拌浆料交接 | 按批次实测新拌浆料质量 |
| finish | 手工抹涂、凝结及压光 | required | 已准备界面和可用新拌浆料 | 表面饰面及石膏凝结责任；整改回路返回本节点 | 按分区实测凝结/压光面积 |
| dry_accept | 干燥、检查及可装饰状态 | required | 凝结/压光面积等待实际最终验收 | 干燥监测、应归属公用工程及最终净验收服务 | 1 平方米accepted_skim |

工作批将分区和拌和批次关联至人工、库存变化、清洗、换批及验收。准备面积、浆料和凝结表面的转移分别实测，不必等于最终参考量。不合格浆料仍由mix负责；拒收表面返回finish，其清除材料由该节点出界。拒收或状态未明分区不得进入验收面积。

### 过程：局部基层界面准备（`prep`）

#### 输入

##### 产品流

###### 准备作业用电（`prep_electricity`）

记录本节点工具直测电量及共享照明分配份额。

- 选定流：准备作业用电
- 流属性/单位：Energy / kWh
- 数量规则：prep_kwh / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prep`
- 数量范围：暂定筛选。暂定筛选允许手工作业零动力需求及应归属的照明。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

### 过程：饰面石膏粉料加水拌和（`mix`）

#### 输入

##### 产品流

###### 石膏饰面抹灰粉料（`gypsum_powder`）

记录实际饰面石膏等级及供应商干粉，排除包装和未用库存。

- 选定流：石膏饰面抹灰粉料
- 流属性/单位：Mass / kg
- 数量规则：powder_net_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 数量范围：暂定筛选。暂定宽泛筛选涵盖申明厚度、配方及损失；不存在通用覆盖率。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 石膏拌和供水（`mix_water`）

供水作为技术系统产品跨界，不假定直接取自自然。

- 选定流：石膏拌和供水
- 流属性/单位：Mass / kg
- 数量规则：mix_water_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 数量范围：暂定筛选。暂定宽泛用水筛选；实际选用产品说明控制配比，现场实测投料控制清单。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 拌和用电（`mix_electricity`）

计量搅拌机用电，并仅一次向本用能节点分配共享照明。

- 选定流：拌和用电
- 流属性/单位：Energy / kWh
- 数量规则：mix_kwh / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 数量范围：暂定筛选。暂定筛选包括手工零需求及实际搅拌机负荷。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 拌和设备清洗供水（`mix_clean_water`）

将清洗水与配方水分开，并关联拌和批次。

- 选定流：拌和设备清洗供水
- 流属性/单位：Mass / kg
- 数量规则：mix_clean_water_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 数量范围：暂定筛选。暂定清洗筛选涵盖批次及班末清洗。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 新拌石膏浆料转移（`mixed_paste`）

凭批次编号将实测新拌浆料交给饰面节点；识别组分但不臆造水化收率。

- 选定流：新拌石膏浆料转移
- 流属性/单位：Mass / kg
- 数量规则：paste_transfer_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 数量范围：暂定筛选。暂定浆料筛选须与实测粉料、水核对；内部供料绝不固定为1。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：40
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 拌和清洗浆水交收（`mix_slurry`）

记录收集清洗浆水的固液质量及废物接收方。

- 选定流：拌和清洗浆水交收
- 流属性/单位：Mass / kg
- 数量规则：mix_slurry_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mix`
- 数量范围：暂定筛选。暂定清洗浆水筛选；包括水和固体，不是直接水体排放。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：手工抹涂、凝结及压光（`finish`）

#### 输入

##### 产品流

###### 新拌石膏浆料供入（`finish_paste`）

拌和节点实际交付浆料；保留批次至分区分配和湿质量。

- 选定流：新拌石膏浆料供入
- 流属性/单位：Mass / kg
- 数量规则：finish_paste_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 数量范围：暂定筛选。暂定筛选须与拌和转移及已识别搬运损失匹配，绝非固定参考量。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：40
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饰面及工具清洗供水（`finish_water`）

将压光保留或蒸发用水与收集的工具清洗液分开。

- 选定流：饰面及工具清洗供水
- 流属性/单位：Mass / kg
- 数量规则：finish_water_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 数量范围：暂定筛选。等待分列压光与清洗记录的暂定筛选；不固定饰面用水量。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 抹涂作业用电（`finish_electricity`）

纳入记录的本节点耗能；人工工时为元数据，不据此创设代谢排放。

- 选定流：抹涂作业用电
- 流属性/单位：Energy / kWh
- 数量规则：finish_kwh / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 数量范围：暂定筛选。实际工具及分配照明暂定筛选；手工抹灰工具用电可为零。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

###### 抹涂清洗浆水交收（`finish_slurry`）

捕集清洗液为废物转移；直接排放须在追加具体交换中逐一识别物质及介质。

- 选定流：抹涂清洗浆水交收
- 流属性/单位：Mass / kg
- 数量规则：finish_slurry_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 数量范围：暂定筛选。暂定浆水筛选须核对水及固体并记录实际接收方。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 抹涂及凝结期间释放水蒸气（`finish_vapour`）

仅在直测或完整finish节点水平衡支持时纳入向未指定大气释放的水蒸气。排除其后干燥阶段水蒸气，不假定其按默认量发生。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：finish_vapour_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_finish`
- 数量范围：暂定宽泛抹涂期蒸发筛选；实际饰面含水交接决定数量。不是观测事实、允许限值或默认数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：干燥、检查及可装饰状态（`dry_accept`）

#### 输入

##### 产品流

###### 干燥及检查用电（`dry_electricity`）

计量或归属直到实际干燥验收的风机、除湿机及检查照明。

- 选定流：干燥及检查用电
- 流属性/单位：Energy / kWh
- 数量规则：dry_kwh / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_accept`
- 数量范围：暂定筛选。暂定宽泛筛选允许自然干燥或较长监测通风时段；不是默认消耗。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥外购热（`dry_heat`）

仅纳入实际供应外购热；现场燃料加热须替换为具体燃料、燃烧及尾气交换，不同时计入外购热。

- 选定流：干燥外购热
- 流属性/单位：Energy / MJ
- 数量规则：dry_heat_mj / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_accept`
- 数量范围：暂定筛选。条件性外购热的暂定宽泛筛选；实际系统及持续时间决定数量。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：MJ
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 验收可装饰干燥石膏薄层抹灰服务（`accepted_skim`）

仅满足申明可装饰状态及饰面验收关口的净面积进入分母；该服务不是制造石膏粉。

- 选定流：验收可装饰干燥石膏薄层抹灰服务
- 流属性/单位：Area / m2
- 数量规则：1 m2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_accept`
- 数量范围：仅精确参考归一化恒等关系；不是经验收率、暂定筛选或规定层厚。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：m2
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集计算（`calculated_from_collection`）

##### 废物流

###### 收集干燥凝水（`dry_condensate`）

条件性收集凝水交付具名接收方；与水蒸气区分，任何直接排放须实际去向证据。

- 选定流：收集干燥凝水
- 流属性/单位：Mass / kg
- 数量规则：condensate_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_accept`
- 数量范围：暂定筛选。实际除湿收集的暂定凝水筛选；不得假定排放介质。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干燥期间向大气释放水蒸气（`evaporated_water`）

采用可辩护水衡算或实测，包含水化结合水、残余含水及收集除湿凝水，并报告不确定性。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：evaporated_water_mass / accepted_area
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dry_accept`
- 数量范围：暂定筛选。暂定蒸发筛选取决于供入、保留及收集水；不假定全部加水蒸发。 所有暂定筛选均仅提示调查；不代表观测事实、允许限值或默认清单数量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与副产品处理

| rule_id | 适用对象 (Applies to) | 规则 (Rule) | source_ids |
| --- | --- | --- | --- |
| subdivision | work_lots | 分配前先细分实测分区、批次和公用工程事件；本路线无预期副产品。出现可售回收输出时，须申明实际状态并另行论证负荷决定。 | |
| batch_owner | mix; finish | 用批次和分区索引所有组分、浆料转移、清洗和换批。无法直接计量时，按记录的批次消耗质量或实测工作时间仅一次归属班末清洗；保留分母及不确定性。 | |
| shared_owner | prep; mix; finish; dry_accept | 识别每项共享资产、账单/仪表总量及期间；优先直测，否则用实测运行时间/负载或可归属服务小时。含其他工种的全部使用方份额须加总至实测总量，避免租赁/资本、照明及动员重复。 | |
| reject_owner | mix; finish; dry_accept | 失败批次及返工负荷保留于产出工作批。获准返用料保留转移编号及既有负荷责任；返工属于额外实际活动，不得作为负的避免负荷或验收面积。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 (flow_role) | 记录类型 (record_type) | 原始字段 (raw_fields) | 采集方法 (collection_method) | 单位 (unit) | 频率 (frequency) | 时间覆盖 (temporal_coverage) | 场址范围 (site_scope) | 汇总规则 (aggregation_rule) | 质量证据 (quality_evidence) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prep | prep | 准备投入、界面、公用工程及残余物 | 分区记录及仪表/服务日志 | lot_id; zone_id; substrate_acceptance; prep_material_mass; prep_metered_kwh; prep_shared_total_kwh; prep_shared_node_share; prep_direct_service_hours; prep_shared_service_hours; prep_service_share; prepared_area; prep_waste_mass; transfer_id; accepted_area | 测量净表面，称量材料/残余物，读取可归属仪表及设备日志；按分区及交收单关联最终面积。 对可归属准备原始量或关联派生量按唯一事件核对后求和，再除以正的同批accepted_area。 | kg; kWh; h; m2 | 每个分区及公用工程/服务事件 | 包括返工、换批的完整工作批 | 具名项目及准备分区 | 每参考流 | 测量/开口表；供应商身份；仪器校准；共享份额核对 |
| cp_mix | mix | 配方组分、浆料、公用工程、拒收物及排放 | 批次称量及交收记录 | lot_id; batch_id; zone_id; opening_powder_mass; received_powder_mass; closing_powder_mass; returned_powder_mass; external_transfer_powder_mass; mix_water_mass; mix_metered_kwh; mix_shared_total_kwh; mix_shared_node_share; mix_clean_water_mass; paste_transfer_mass; mix_reject_mass; mix_packaging_mass; mix_slurry_mass; mix_emission_mass; opening_paste_mass; closing_paste_mass; supplied_process_water; paste_transfer_water; collected_slurry_water; rejected_water_mass; emitted_water_mass; bound_water_change; free_water_change; water_balance_uncertainty; transfer_id; accepted_area | 分别称量期初、收货、期末、退回和外部转移粉料；退回与外部转移为互斥出界，均不含期末库存。采用calc_powder_stock得到powder_net_mass。称量交付/退回库存，计量配方/清洗水，称量湿浆及残余物；适用时取得具名物种大气证据；分开捕集粉尘及清洗浆水。 将粉料和工艺水与湿浆、分别记录的废物/排放及库存变化核对；各可归属节点分子除以正的同批accepted_area，已记录废物不重复扣减。 | kg; kWh; m2 | 每次批次、清洗及转移 | 包括不合格批次、最终清洗的整个工作批 | 向具名分区供料的实际拌和站 | 每参考流 | 秤/水表校准；袋装规格；批次/分区关联；废物交收；物种/介质证据 |
| cp_finish | finish | 基层/浆料供入、表面输出、公用工程及拒收物 | 分区抹涂及整改记录 | lot_id; batch_id; zone_id; finish_substrate_area; finish_paste_mass; finish_water_mass; trowel_water_mass; cleanup_water_mass; finish_metered_kwh; finish_shared_total_kwh; finish_shared_node_share; finish_direct_service_hours; finish_shared_service_hours; finish_service_share; trowelled_area; finish_waste_mass; finish_slurry_mass; thickness; transfer_id; reject_route; received_paste_water; received_finish_water; transferred_surface_water; residue_water; slurry_water; finish_evaporation_method; directly_measured_finish_vapour_mass; opening_finish_water_stock; closing_finish_water_stock; bound_water_change; free_water_change; water_balance_uncertainty; accepted_area | 测量分区供入/输出；称量收到浆料及收集残余物；分开压光/清洗水；测量接收/交接水状态以及直接水蒸气或完整水平衡证据并报告不确定性；记录凝结观测和缺陷及返回finish链接。 每个唯一物理事件仅累计一次，同时保留各次实际重复整改和返工事件及其负荷；各可归属分子除以正的同批accepted_area。 | kg; kWh; h; m2; mm | 每个分区、浆料批次及整改 | 抹涂至凝结/压光交接，包含整改 | 具名工作分区及抹涂队伍 | 每参考流 | 厚度/饰面检查；转移核对；测量校准；拒收分区登记 |
| cp_dry_accept | dry_accept | 表面供入、干燥公用工程、水蒸气、凝水及最终服务 | 监测及最终验收记录 | lot_id; zone_id; dry_surface_area; dry_metered_kwh; dry_shared_total_kwh; dry_shared_node_share; dry_heat_mj; evaporation_method; directly_measured_vapour_mass; received_surface_water; added_drying_water; opening_water_stock; closing_water_stock; condensate_mass; collected_drying_slurry_water; other_evidenced_water_out; retained_bound_water; residual_free_water; water_balance_uncertainty; dry_start; dry_end; climate; dryness_criterion; dryness_observation; rejected_area; accepted_area | 测量验收净面积；保留实际干燥检查证据；按真实持续时间计量风机/除湿机/供热；按配对水状态交接记录供入表面水、实际保留结合/自由水以及全部收集或其他有证据出口。按calc_evaporation计算水蒸气，或使用校准仪器直接测量可辩护的风量/湿度差并报告不确定性；缺失去向的衡算残差为未量化量，不自动当作水蒸气。 跨实际监测持续期间累计完整工作批可归属干燥节点量，再除以正的同批accepted_area；最终验收服务 = accepted_area / accepted_area = 1 m2。 | m2; kg; kWh; MJ | 每个监测间隔及最终分区验收 | 从实际凝结表面接收到可装饰状态验收，覆盖所需全部天数 | 具名分区及分配的共享供热/通风系统 | 每参考流 | 验收签字及判据；标注日期的观测；气候日志；公用工程归属；水平衡不确定性 |

### 计算规则

| rule_id | 适用对象 (Applies to) | 公式或规则 (Formula or rule) | 输入 (Inputs) | 输出 (Output) | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_prep | prep_materials; prep_electricity; prep_access; prepared_area; prep_waste | 每张prep卡分子为其申明原始或关联派生cp_prep分子，经唯一事件、库存/份额核对后，除以正的同批accepted_area。 | cp_prep; prep_material_mass; prep_kwh; prep_service_hours; prepared_area; prep_waste_mass; accepted_area | 每参考流prep交换量 | |
| calc_mix | gypsum_powder; mix_water; mix_electricity; mix_clean_water; mixed_paste; mix_reject; mix_packaging; mix_slurry; mix_air | 每张mix卡分子为其申明原始或关联派生cp_mix分子，除以正的同批accepted_area；湿浆衡算保留实测损失和库存变化。 | cp_mix; powder_net_mass; mix_water_mass; mix_kwh; mix_clean_water_mass; paste_transfer_mass; mix_reject_mass; mix_packaging_mass; mix_slurry_mass; mix_emission_mass; accepted_area | 每参考流mix交换量 | |
| calc_finish | finish_vapour; finish_substrate; finish_paste; finish_water; finish_electricity; finish_access; trowelled_area; finish_waste; finish_slurry | 每张finish卡分子累计其申明原始或关联派生cp_finish分子的唯一物理事件，每个事件计一次，并保留各次实际整改或返工事件及其负荷，再除以正的同批accepted_area；不得将中间浆料或表面供入固定为参考输出。 | cp_finish; finish_substrate_area; finish_paste_mass; finish_water_mass; finish_kwh; finish_service_hours; trowelled_area; finish_waste_mass; finish_slurry_mass; finish_vapour_mass; accepted_area | 每参考流finish交换量 | |
| calc_dry_accept | dry_surface; dry_electricity; dry_heat; accepted_skim; evaporated_water; dry_condensate | 每张dry_accept卡分子为其申明原始或关联派生cp_dry_accept分子除以正的accepted_area；验收服务 = accepted_area / accepted_area = 1 m2。仅在核对实测收集液、水化结合水、残余含水及其他有证据去向后量化水蒸气。 | cp_dry_accept; dry_surface_area; dry_kwh; dry_heat_mj; evaporated_water_mass; condensate_mass; retained_bound_water; residual_free_water; accepted_area | 每参考流干燥量及归一化验收服务 | |
| calc_powder_stock | gypsum_powder | powder_net_mass = opening_powder_mass + received_powder_mass - closing_powder_mass - returned_powder_mass - external_transfer_powder_mass。退回与外部转移为实测、互斥出界且均排除期末库存；耗用粉料包括批次损失，损失作为输出记录，不重复扣减。 | cp_mix; opening_powder_mass; received_powder_mass; closing_powder_mass; returned_powder_mass; external_transfer_powder_mass | powder_net_mass | |
| calc_node_energy | prep_electricity; mix_electricity; finish_electricity; dry_electricity | prep_kwh = prep_metered_kwh + prep_shared_total_kwh * prep_shared_node_share; mix_kwh = mix_metered_kwh + mix_shared_total_kwh * mix_shared_node_share; finish_kwh = finish_metered_kwh + finish_shared_total_kwh * finish_shared_node_share; dry_kwh = dry_metered_kwh + dry_shared_total_kwh * dry_shared_node_share。共享总量排除直测需求；按运行时间/负载记录确定份额，并跨全部使用方核对。各结果采用各节点规则归一化。 | cp_prep; cp_mix; cp_finish; cp_dry_accept; prep_metered_kwh; prep_shared_total_kwh; prep_shared_node_share; mix_metered_kwh; mix_shared_total_kwh; mix_shared_node_share; finish_metered_kwh; finish_shared_total_kwh; finish_shared_node_share; dry_metered_kwh; dry_shared_total_kwh; dry_shared_node_share | 可归属节点用电分子 | |
| calc_node_service | prep_access; finish_access | prep_service_hours = prep_direct_service_hours + prep_shared_service_hours * prep_service_share; finish_service_hours = finish_direct_service_hours + finish_shared_service_hours * finish_service_share。共享服务池排除直接服务，并跨全部使用方与账单/日志期间核对；各结果采用各节点规则归一化。 | cp_prep; cp_finish; prep_direct_service_hours; prep_shared_service_hours; prep_service_share; finish_direct_service_hours; finish_shared_service_hours; finish_service_share | 可归属登高/服务分子 | |
| calc_evaporation | evaporated_water | 申明衡算法时：evaporated_water_mass = received_surface_water + added_drying_water + opening_water_stock - closing_water_stock - retained_bound_water - residual_free_water - condensate_mass - collected_drying_slurry_water - other_evidenced_water_out。各项采用同期间互斥水责任池：closing_water_stock仅包括其他未验收期末水库存，排除验收表面retained_bound_water/residual_free_water；opening_water_stock排除期间入口已计入的received_surface_water。保留表面水不重复计入其他出口。各项采用同一实测工艺水池；一致排除干粉原有结晶水，保留批次/分区配对含水交接，干燥前损失留在产出节点。直接法时：evaporated_water_mass = directly_measured_vapour_mass，并具备校准通风量/湿度证据。申明方法及water_balance_uncertainty；去向缺失或无法解释的负衡算须调查，不截断为零。 | cp_dry_accept; cp_mix; cp_finish; evaporation_method; directly_measured_vapour_mass; received_surface_water; added_drying_water; opening_water_stock; closing_water_stock; retained_bound_water; residual_free_water; condensate_mass; collected_drying_slurry_water; other_evidenced_water_out; water_balance_uncertainty | calc_dry_accept归一化前evaporated_water_mass | |
| calc_finish_evaporation | finish_vapour | 衡算法：finish_vapour_mass = received_paste_water + received_finish_water + opening_finish_water_stock - transferred_surface_water - residue_water - slurry_water - closing_finish_water_stock。各项为同一工艺水池，排除干粉原有结晶水；表面交接含结合水和自由水，与dry_accept的received_surface_water配对。干燥节点仅接收扣除finish期水蒸气、浆水及残余物之后实际剩余的transferred_surface_water，绝非原始浆料加水投料总量；dry_accept不得重复计入此前损失。期初库存排除收到投入；期末库存排除已转移表面及其他已记录出口。直接法：finish_vapour_mass = directly_measured_finish_vapour_mass，采用校准通风量/湿度观测。记录finish_evaporation_method及water_balance_uncertainty；缺失去向或无法解释负残差仍为数据缺口。 | cp_finish; finish_evaporation_method; directly_measured_finish_vapour_mass; received_paste_water; received_finish_water; opening_finish_water_stock; transferred_surface_water; residue_water; slurry_water; closing_finish_water_stock; water_balance_uncertainty | calc_finish归一化前finish_vapour_mass | |

### 数据质量要求

| requirement_id | 适用对象 (Applies to) | 要求 (Requirement) | 证据 (Evidence) |
| --- | --- | --- | --- |
| dq_gate | accepted_skim | 必须记录实际系统、厚度、基层及饰面质量观测和申明干燥判据；固定制造商时间不能证明干燥。 | 供应商系统说明；分区验收签字及含水/目视判据 |
| dq_balance | all nodes | 核对批次、转移、库存及水去向并报告测量不确定性；不得仅为闭合衡算而反算未测内部数量。 | 节点记录、配对转移编号及残差说明 |
| dq_identity | all cards | 下游具体交换须核实产品/物质、属性/单位及去向身份；按实际前景记录展开条件性类别卡。 | 供应商/废物/排放记录及身份核实 |
| dq_period | all nodes | 代表实际场址工作批、天气及持续时间；记录缺失读数、估算和时间/地理覆盖。 | 全期间事件日志及覆盖声明 |
| dq_ranges | all cards | 暂定范围仅为调查筛选；调查超出范围的数值，并在更强复用前以独立复核可比证据替代。 | 原始数据、明确不确定性及独立对照集 |

## 9. 验证规则

| rule_id | 适用对象 (Applies to) | 规则 (Rule) | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_skim | 要求正的净验收面积、开口/洞口侧面政策、申明实际系统/厚度及最终干燥证据；排除状态未明拒收物。 | |
| validate_transfers | prep; mix; finish; dry_accept | 匹配界面、浆料、凝结表面的配对转移编号及实测数量；说明搬运损失和状态变化，不强制其等于最终验收面积。 | |
| validate_batch | mix; finish | 要求批次/分区关联、不合格去向、清洗/换批责任及完整归属；批次清洗或失败材料不得消失。 | |
| validate_shared | all nodes | 跨全部使用方和相关期间核对共享公用工程/设备/动员；每项负荷仅一责任方，避免上游设备服务重复。 | |
| validate_rework | finish; dry_accept | 要求拒收分区记录及关联产出节点的实际整改/废弃路线；保留返工负荷且每个验收表面仅计一次面积。 | |
| validate_water | mix; finish; dry_accept | 核对粉料/水/浆料及水保留、浆水、凝水、蒸气并报告不确定性；捕集固液为废物，不得臆造直接排放。 | |
| validate_binding | all cards | 核实下游具体UUID/支持项及实际限定条件；准备材料、服务、废物或污染物含糊类别须前景拆分，不得继承通用UUID。 | |
| validate_range | all cards | 暂定推理筛选仅提示调查，不是通用允许限值、实测值或替代清单。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景施工服务数据包及其process和lifecyclemodel投影 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 起始表面、饰面系统、厚度、验收关口及场址条件等效的已申明室内石膏薄层服务 |
| excluded_use | 制造石膏粉；整墙施工；室外/水泥抹面；涂装；危险清除；宣称通用使用寿命或整栋建筑性能 |
| required_metadata | 参考面积/关口；基层/系统/厚度；场址/期间；分区/批次关联；起始和下游责任；公用工程及废物范围；地理/技术相容性 |
| required_quality_disclosure | 实测与估算量；暂定范围；缺失上游数据集；水平衡及干燥不确定性；共享/返工归属；未解决身份及具体交换解析 |
| update_trigger | 石膏配方、厚度、基层、验收判据、设备、干燥条件、能源供应、废物路线或代表性证据改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| british-gypsum-multifinish-installation | handbook | British Gypsum，Thistle MultiFinish安装说明，https://www.british-gypsum.com/installation/installation-guidance-and-support/installation-guides/thistle-multifinish-installation-instructions | 所选产品路线示例：基层适用性、拌和、分阶段薄抹/压光及变化的抹涂时间。产品特定数量/时间不是通用PCR默认值，也不证明可装饰干燥状态。 |
