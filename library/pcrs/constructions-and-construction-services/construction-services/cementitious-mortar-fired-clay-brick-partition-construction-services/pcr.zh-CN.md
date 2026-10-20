---
pcr_id: pcr.constructions-and-construction-services.construction-services.cementitious-mortar-fired-clay-brick-partition-construction-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---
# 水泥基砂浆烧结黏土砖室内隔墙施工服务

## 1. 范围与适用性

本 PCR 适用于以烧结黏土砖和在现场加入实际供水的工厂干拌水泥基砌筑预混砂浆施工的非承重室内隔墙。起点是已验收实体基层/支承接口及签字项目设计；终点是本工作包完成指定细部、接缝整饰、保护、凝结、清洗及所有实际修正后的唯一最终验收隔墙。

实际项目设计和产品说明决定兼容性及必需作业。仅有砖墙实体不足以证明完成：设计要求且由工作包承担的新装过梁、约束、固定件、变形/滑移/顶部细部及防火/声学封闭均须纳入。逐项记录接口内已存在与新安装的部件。通用资料未说明某细部，不能据此将其排除。

该路线排除原水泥/砂/石灰现场配方拌制、纯石灰砂浆、作为前景的砖或预混料制造、结构基层制造、承重/外墙/空腔墙、涂装/抹灰饰面以及施工验收后的使用寿命和报废阶段。其他产品或进入条件须重新审查范围。真实供应商/产品说明及项目验收证据控制工作；所引通用指南只提供程序背景，不构成通用设计认证或数量因子。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.cementitious-mortar-fired-clay-brick-partition-construction-services |
| classification_refs | cpc:3.0:54560；仅作为分类参照 |
| covered_products | 使用工厂干拌水泥基预混砂浆及实际供水的非承重烧结黏土砖室内隔墙已验收施工服务，含全部实际由施工承担且兼容的附属细部 |
| excluded_products | 承重/外墙/空腔砌体；纯石灰及现场原组分配方砂浆；砖/预混料/基层制造；涂装/抹灰饰面 |
| representative_product | 按设计完成并作为完整工作包验收的烧结黏土砖室内隔墙 |
| production_route | 收料/放行及放线 -> 工厂干预混料/水制备 -> 砌砖、切割、附属件集成及接缝整饰 -> 保护、水泥基凝结、清洗/修正及验收 |
| market_state | 已安装、完工并验收的室内隔墙施工服务；几何、厚度、准确砖/砂浆身份及设计细部集合仍为必需限定信息 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完成的非承重烧结黏土砖室内隔墙施工服务 |
| How much | 1 m2 净的、唯一最终验收单一墙平面表面；洞口排除一次，两面不重复计量 |
| How well | 满足实际签字项目设计及供应商兼容性，含墙体几何、支承/约束/滑移/顶部细部、过梁、变形/防火/声学封闭、接缝整饰及验收；不推定通用防火/声学等级 |
| How long or cycle | 一个从放行进入至最终验收的真实施工批次；按实际截止点列出收料、制备、砌筑、保护/凝结、清洗/修正和验收期间；不固定养护日数或资产寿命 |
| reference_flow_link | accepted_partition_service |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已验收的室内砖隔墙施工服务 |
| reference_flow_property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| reference_unit_group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| reference_unit | m2 |
| required_qualifiers | 场址和地理; 实际批次期间; 墙体/墙板表面身份及洞口; 厚度/砌筑组砌/接缝轮廓; 非承重室内用途; 准确烧结黏土 SKU 及含水状态; 工厂水泥基预混料等级/说明; 实体支承及签字设计放行; 实际约束/过梁/变形/防火/声学细部清单; 临时支撑所有者; 实际保护/养护/清洗条件; 最终竣工验收; 上游数据集及包装覆盖 |

A 是最终验收表面并集的未归一化正面积。实际修正的全部投入、能量、废物和服务可用量仍留在批次分子内，不能增加最终墙面积。内部湿砂浆按真实 kg、新砌未养护墙交接按真实 m2 计量，均不固定为最终参考量。既有资产接口几何及放行/接收保留为自身协议和计算内独立实测 m2 观测，不是产品交换或生产负荷。最终 1 m2 输出仅是同一正的验收 A 经 A/A 归一化的计算恒等式，不是假定材料产率。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `measure_accepted_area` | 最终服务 | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A 来源为最终验收单一墙平面几何并集，洞口和未验收作业排除一次，A 必须为正。每个物理分子只归一化一次；A/A 计算为 1。 |
| `measure_interface_area` | 既有基层与墙体交接 | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 实体接口几何是观测量，文件是证据；均不能进入 kg 核对，也不隐含新增结构材料。 |
| `measure_material_bridge` | 全部材料/废物/可用退出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保持当前含水率和状态。件数/长度/面积只可用实际同 SKU/状态质量证据换算；整件组装体与组成总量不得重复相加。 |
| `measure_gross_stock` | 外部暂存材料及供水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 毛领用等于所有相关保管位置期初完整库存加外部进入减期末完整库存，保留可用退出；完整期末库存只扣一次，废物/在制品/退出互斥。 |
| `measure_water_state` | 含水拌料/墙体/废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按真实状态/时点跟踪总水及结合/游离水。内部交接水与最终保留水分开。水化保留结合水；无法闭合不是水蒸气。 |
| `measure_energy_lineage` | 用电 | Energy | kWh | 使用带因子、区间及拓扑证据的真实读数差，并仅核算扣除所有总表内直接归属一次后的合格残余；准确量纲支持仍须独立具备。 |
| `measure_service_unit` | 登高及支持服务 | Duration | h | 使用实际合同/服务可用性及所有权期间，不能替换为人工、假定班次或无证据量纲。 |
| `measure_species_medium` | 直接基本流输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 识别真实向外物质、颗粒表述基准和接收介质，并区分捕集；输出不能表示吸收，也不能用通用尘替代。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已有基层/支承实体几何已放行，具备签字设计及已解决的新装与既有部件清单 |
| starting_condition_role | 接收外部实体质量/接口状态；几何为观测、文件为证据，均不是新材料采购 |
| product_classification_scope | 本 PCR 定义的室内非承重烧结黏土砖施工服务语义，独立于外部分级分类树 |
| recursive_input_rule | 同类别外购已完成隔墙或继承的未解决部分砌筑墙不能静默展开进本路线。记录其供货状态和上游所有者；改变起始门槛或重复施工清单前必须审查范围。 |
| upstream_dataset_requirement | 每种真实外部材料/水/供应方及废物路径与适当且经审查的上游数据集关联一次。内部材料/投入和几何交接保持既有所有权；记录供应商包装覆盖以及任何需单列的剩余包装负荷。 |
| disclosure | 披露准确路线、进入/放行及验收门槛、真实部件所有权及产品说明、期间/保管权/在制品边界、上游覆盖、分摊决定及未解决数量/身份/计量缺口 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_entry` | entry_gate | 以已验收实体基层及签字放行的隔墙设计为起点。进入前必须明确准确砖/预混料兼容性、几何及洞口、支承荷载、底部/滑移/顶部/侧向细部、过梁、变形缝、防火/声学封闭和临时支撑所有权。所有权或兼容性未解决即为缺口。 | `bda-workmanship-2023`; `ancon-restraint-interface` |
| `boundary_work` | all_four_nodes | 包括收料/储存损失、真实工厂预混料拌和、砌筑/切割、设计附属件集成、接缝整饰、保护、水泥基凝结、清洗、全部真实修正及最终验收。通用指南缺少某细部，不能作为实际工作包省略该细部的理由。 | `bda-workmanship-2023`; `bda-mortar-2023` |
| `boundary_composition` | mix_mortar 与 cure_accept | 拌和责任将准确工厂干拌水泥基预混料与实际供水结合，并交接实际湿砂浆。水泥与水的反应按实际观测状态延续至已验收墙体交接。保留结合/游离水、未反应/未用投入、损失和不合格状态；不能推定化学路径、产率或 CO2 吸收。 | `bda-mortar-2023` |
| `boundary_assembly` | lay_joint | 将实际烧结黏土砖、湿砂浆及每项设计要求的兼容附属件连接到已放行的现有接口。预期未养护墙体和组成状态交给 cure_accept；不合格组装体、切损及损失须保持各自去向和产生节点责任。 | `bda-workmanship-2023`; `ancon-restraint-interface` |
| `boundary_finishing` | lay_joint 与 cure_accept | 已形成砌筑墙体后，lay_joint 内的接缝整饰是明确的表面/性能完工责任。记录父状态、真实整饰/封闭投入和整饰完成的未养护交接。cure_accept 拥有其后的保护/清洗及实际修补整饰直至验收，残余和释放归属产生节点。不能由此隐含引入装饰涂层或抹灰。 | `bda-workmanship-2023` |
| `boundary_receipt` | staged_materials_and_packaging | 每种暂存材料及随料包装只有一个外部毛收料责任节点。保留本节点收料拒收/可用退出，并匹配真实领出及下游内部接收。供水仅进入实际使用节点。包装上游数据集覆盖仅计一次，按具体材料分别分配废物、重复使用退出及库存责任。 |  |
| `boundary_periods` | lot_and_shared_assets | 列出实际收料、拌和、砌筑、保护/养护、清洗/修正和验收期间，将截止库存、在制品、资产、更换/终止事件及每个用户关联到各期间。使用真实边界和所有权，不假定施工日、服务寿命或年化值。 |  |
| `boundary_exclusions` | external_interfaces | 砖/预混料制造及既有基层/结构不属于前景作业，但真实材料进入处须关联其上游数据集且只计一次。排除纯石灰/现场原组分配方砂浆、承重/外墙/空腔墙、涂装/抹灰、结构基层制造及验收后的使用/报废阶段。进入状态改变或新承担被排除的作业时必须审查范围。 | `bda-workmanship-2023`; `bda-mortar-2023` |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：收料包装与搬运保护物 (`receive_packaging`)

过程／待建立交换的方向／类型：`receive_setout` / `inputs` / `product`.

按真实组成和保管权核算收料时的包膜、袋、衬里、托盘及搬运保护材料，包括随后随材料领出的包装。增加独立包装生产负荷前，逐一核实其生产是否已包含在供应商材料数据集内，确保只计一次。

- 采集对象：收料包装与搬运保护物
- 流属性/单位: Mass / kg
- 数量规则: actual_receive_packaging/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 40
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

收料包装与搬运保护物的上限 40 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。它筛查保留损失及可用退出的毛领用量，而非净安装材料或规定消耗率。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：收料、勘测及隔墙放线实际归属登高及设备支持服务 (`receive_setout_access_service`)

过程／待建立交换的方向／类型：`receive_setout` / `inputs` / `product`.

记录本节点真实拥有的升降、脚手架、除尘或其他支持设备可用服务量，包含其实际归属的闲置和补救期间。必须以证据界定服务单位、供应方及合同边界。合同可用性不能用人工作业时、假定八小时班次或资产寿命替代。直接归属后仅可分摊同一边界内的正残余，须列全合格用户及正权重分母；负数或未知残余阻断归属，不能截零、分摊或转为信用。证明完整且残余恰为零时不需权重。

- 采集对象：收料、勘测及隔墙放线实际归属登高及设备支持服务
- 流属性/单位: Duration / h
- 数量规则: actual_receive_setout_access_service/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: h
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

收料、勘测及隔墙放线实际归属登高及设备支持服务的上限 100 h/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。真实付费可用时间可能超过主动施工时长，并随共享登高安排变化；该界限不是人工定额或班次假设。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：外部收料：设计隔墙附属部件 (`receive_restraint_components`)

过程／待建立交换的方向／类型：`receive_setout` / `inputs` / `product`.

在收料节点记录实际新安装的约束、固定件、过梁、配筋及变形/防火/声学封闭部件唯一的外部材料进入。期初和最终完整库存覆盖所有保管权位置，包括留在使用点、尚未领出的后续批次物料。毛领用量保留收料拒收及可用退出；之后的内部领出不能形成第二次采购。

- 采集对象：外部收料：设计隔墙附属部件
- 流属性/单位: Mass / kg
- 数量规则: actual_receive_restraint_components/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`; `ancon-restraint-interface`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 150
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

外部收料：设计隔墙附属部件的上限 150 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。它筛查保留损失及可用退出的毛领用量，而非净安装材料或规定消耗率。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：外部收料：保护消耗材料 (`receive_protection_material`)

过程／待建立交换的方向／类型：`receive_setout` / `inputs` / `product`.

在收料节点记录实际覆盖物、麻布及消耗性保护物，并区分可重复使用服务资产唯一的外部材料进入。期初和最终完整库存覆盖所有保管权位置，包括留在使用点、尚未领出的后续批次物料。毛领用量保留收料拒收及可用退出；之后的内部领出不能形成第二次采购。

- 采集对象：外部收料：保护消耗材料
- 流属性/单位: Mass / kg
- 数量规则: actual_receive_protection_material/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 40
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

外部收料：保护消耗材料的上限 40 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。它筛查保留损失及可用退出的毛领用量，而非净安装材料或规定消耗率。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：外部收料：清洗及修补消耗材料 (`receive_cure_cleaning_material`)

过程／待建立交换的方向／类型：`receive_setout` / `inputs` / `product`.

在收料节点记录实际获准程序使用且配方组成明确的清洗与修补产品唯一的外部材料进入。期初和最终完整库存覆盖所有保管权位置，包括留在使用点、尚未领出的后续批次物料。毛领用量保留收料拒收及可用退出；之后的内部领出不能形成第二次采购。

- 采集对象：外部收料：清洗及修补消耗材料
- 流属性/单位: Mass / kg
- 数量规则: actual_receive_cure_cleaning_material/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 30
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

外部收料：清洗及修补消耗材料的上限 30 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。它筛查保留损失及可用退出的毛领用量，而非净安装材料或规定消耗率。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：收料原始未用物料退回或转出 (`receive_unused_return`)

过程／待建立交换的方向／类型：`receive_setout` / `outputs` / `product`.

按材料身份及当前等级记录确实离开收料保管权、退给供应商或转给其他工作包的原始未用物料。拒收品只有在仍可用且接收方及用途有证据时才能计入。留在任何场内位置的完整物料均属于库存，不能因靠近施工点就算已领用。

- 采集对象：收料原始未用物料退回或转出
- 流属性/单位: Mass / kg
- 数量规则: actual_receive_unused_return/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

收料原始未用物料退回或转出的上限 1000 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。真实保管权退出取决于采购和再用安排，不能决定负负荷。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：领往工厂干拌水泥基砂浆制备的随料包装 (`issue_packaging_mix_mortar`)

过程／待建立交换的方向／类型：`receive_setout` / `outputs` / `product`.

按组成、物件、当前状态和保管权事件领出从收料节点实际随材料进入 mix_mortar 的包装。它是内部材料交接，保留供应商数据集覆盖证据，不能再次增加包装制造负荷。

- 采集对象：领往工厂干拌水泥基砂浆制备的随料包装
- 流属性/单位: Mass / kg
- 数量规则: actual_issue_packaging_mix_mortar/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 40
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

领往工厂干拌水泥基砂浆制备的随料包装的上限 40 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：领往砌砖、切割、约束安装与接缝整饰的随料包装 (`issue_packaging_lay_joint`)

过程／待建立交换的方向／类型：`receive_setout` / `outputs` / `product`.

按组成、物件、当前状态和保管权事件领出从收料节点实际随材料进入 lay_joint 的包装。它是内部材料交接，保留供应商数据集覆盖证据，不能再次增加包装制造负荷。

- 采集对象：领往砌砖、切割、约束安装与接缝整饰的随料包装
- 流属性/单位: Mass / kg
- 数量规则: actual_issue_packaging_lay_joint/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 40
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

领往砌砖、切割、约束安装与接缝整饰的随料包装的上限 40 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：领往保护、养护、清洗及隔墙验收的随料包装 (`issue_packaging_cure_accept`)

过程／待建立交换的方向／类型：`receive_setout` / `outputs` / `product`.

按组成、物件、当前状态和保管权事件领出从收料节点实际随材料进入 cure_accept 的包装。它是内部材料交接，保留供应商数据集覆盖证据，不能再次增加包装制造负荷。

- 采集对象：领往保护、养护、清洗及隔墙验收的随料包装
- 流属性/单位: Mass / kg
- 数量规则: actual_issue_packaging_cure_accept/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 40
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

领往保护、养护、清洗及隔墙验收的随料包装的上限 40 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：实际领往砌筑节点的材料 (`issue_materials_lay_joint`)

过程／待建立交换的方向／类型：`receive_setout` / `outputs` / `product`.

从 receive_setout 向 lay_joint 实际领出的同状态 Mass/kg 条件性集合角色，涵盖组件账 issue_bricks、issue_restraint_components 中的真实材料角色。按实际安排展开为零个、一个或多个交换，每项保留真实材料/SKU、组成、当前状态、实测组件 kg、交接事件、发送/接收方，以及身份解决后独立核实的具体 UUID。集合角色不是固定混合产品，几种材料的总质量不能构成身份。保留每个原有组件数量计算，并匹配同 SKU/当前状态的下游特定材料投入，不重复采购或增加上游生产负荷。每个实例化交换采用自身真实 SKU/状态/具体身份分子/A；另行命名的角色诊断总量仅供核对，不能在具体组件之外再发布集合交换。组件身份/数量或保管权关联未知仍是缺口，不猜 UUID、不自动推定数量。

- 采集对象：实际领往砌筑节点的材料
- 流属性/单位: Mass / kg
- 数量规则: actual_issue_materials_lay_joint/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1200
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

为收料节点向 lay_joint 的真实材料领出独立选定暂定 0..1200 kg/m2 规划筛查值，并非原有卡片界限之和、材料表、经验率或默认量。它只触发对真实批次采购、细部密度、完整库存和实际组件领出的复核，不规定 SKU 混合。数量由同 SKU/当前状态组件实测及保管权匹配控制；零须有真实未发生证据，未知不能填零，超出范围须解释而不能裁切。该范围用于每个实际实例化交换的分子/A；另行命名的角色诊断总量没有清单数量范围，也不能替代组件量。

#### 采集要求：实际领往养护验收节点的材料 (`issue_materials_cure_accept`)

过程／待建立交换的方向／类型：`receive_setout` / `outputs` / `product`.

从 receive_setout 向 cure_accept 实际领出的同状态 Mass/kg 条件性集合角色，涵盖组件账 issue_protection_material、issue_cure_cleaning_material 中的真实材料角色。按实际安排展开为零个、一个或多个交换，每项保留真实材料/SKU、组成、当前状态、实测组件 kg、交接事件、发送/接收方，以及身份解决后独立核实的具体 UUID。集合角色不是固定混合产品，几种材料的总质量不能构成身份。保留每个原有组件数量计算，并匹配同 SKU/当前状态的下游特定材料投入，不重复采购或增加上游生产负荷。每个实例化交换采用自身真实 SKU/状态/具体身份分子/A；另行命名的角色诊断总量仅供核对，不能在具体组件之外再发布集合交换。组件身份/数量或保管权关联未知仍是缺口，不猜 UUID、不自动推定数量。

- 采集对象：实际领往养护验收节点的材料
- 流属性/单位: Mass / kg
- 数量规则: actual_issue_materials_cure_accept/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

为收料节点向 cure_accept 的真实材料领出独立选定暂定 0..100 kg/m2 规划筛查值，并非原有卡片界限之和、材料表、经验率或默认量。它只触发对真实批次采购、细部密度、完整库存和实际组件领出的复核，不规定 SKU 混合。数量由同 SKU/当前状态组件实测及保管权匹配控制；零须有真实未发生证据，未知不能填零，超出范围须解释而不能裁切。该范围用于每个实际实例化交换的分子/A；另行命名的角色诊断总量没有清单数量范围，也不能替代组件量。

#### 采集要求：收料包装废物 (`receive_packaging_waste`)

过程／待建立交换的方向／类型：`receive_setout` / `outputs` / `waste`.

记录本节点收料、拆包时实际废弃的包装，按塑料、纸、木、金属等组成区分去向。继续随料携带的包装是内部领出；完整可重复使用且退给所有人的托盘是可用退出，不能重复作为包装废物。

- 采集对象：收料包装废物
- 流属性/单位: Mass / kg
- 数量规则: actual_receive_packaging_waste/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 40
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

收料包装废物的上限 40 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。仅包含真实本节点收料废弃，未获审查的真实改变状态保管权交接不能把下游修补拆除移入本节点；数量仍须对应材料和水账。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。仅包括收料过程中实际拆开并废弃、组成明确的包装；完整/可重复使用包装退出及实际下游领出后的包装废弃各有自身去向。砂浆或拆墙质量不是包装废物。实际返工或保管权退回只有在真实当前状态交接有独立证据、且兼容路线/责任已被审查时才可影响本节点；下游拆除仍归实际产生节点，绝不能仅按废物名称转移责任。

#### 采集要求：收料节点实际废弃材料 (`receive_material_waste`)

过程／待建立交换的方向／类型：`receive_setout` / `outputs` / `waste`.

receive_setout 在实际下游领出前产生的、按材料展开的条件性收料废物，包含烧结黏土砖及真实干预混料、附属件、保护或清洗/修补材料，采用实测真实相态及当前含水状态。每项实际 SKU/状态/去向/接收方/处理目的地展开为自身实测具体废物交换，只有真实身份依据存在时才独立核实 UUID。保留原砖和非砖组件账及其数量，在收料材料池内各计一次。排除包装废物、可用供应商退回或外部转移、完整库存/在制品及下游施工/修补拆除。下游拆除仍归实际产生节点，除非真实改变状态的保管权交接已被审查，不推定这种交接。集合角色不是一个固定混合废物身份，每个真实组成/状态/接收方交换采用自身分子/A，另行命名的诊断核对总量和组成不是可相加的独立交换。相态、数量、身份或去向未知仍是缺口。

- 采集对象：收料节点实际废弃材料
- 流属性/单位: Mass / kg
- 数量规则: actual_receive_material_waste/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 600
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

针对收料节点实际材料废弃独立选定暂定 0..600 kg/m2 筛查值，不是原砖/非砖界限之和、经验拒收率、默认废物量或允许拆除定额。仅筛查领出前真实自身收料废物，按实测 SKU/状态/相态和去向记录；没有经审查真实改变状态的保管权交接，下游修补拆除仍归产生节点。零须有真实未发生证据，未知保持缺失，实测超出范围须解释而不能裁切。该范围用于每个实际实例化交换的分子/A；另行命名的角色诊断总量没有清单数量范围，也不能替代组件量。仅限领出前真实本节点收料材料废弃，保留实际组成/SKU/当前状态/相态及接收方/处理去向；包装、可用退回/转移、库存/在制品和下游墙体拆除均分开。实际返工或保管权退回只有在真实当前状态交接有独立证据、且兼容路线/责任已被审查时才可影响本节点；下游拆除仍归实际产生节点，绝不能仅按废物名称转移责任。

#### 采集要求：工厂干拌水泥基砂浆制备实际归属登高及设备支持服务 (`mix_mortar_access_service`)

过程／待建立交换的方向／类型：`mix_mortar` / `inputs` / `product`.

记录本节点真实拥有的升降、脚手架、除尘或其他支持设备可用服务量，包含其实际归属的闲置和补救期间。必须以证据界定服务单位、供应方及合同边界。合同可用性不能用人工作业时、假定八小时班次或资产寿命替代。直接归属后仅可分摊同一边界内的正残余，须列全合格用户及正权重分母；负数或未知残余阻断归属，不能截零、分摊或转为信用。证明完整且残余恰为零时不需权重。

- 采集对象：工厂干拌水泥基砂浆制备实际归属登高及设备支持服务
- 流属性/单位: Duration / h
- 数量规则: actual_mix_mortar_access_service/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mix_mortar`
- 来源: `bda-mortar-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: h
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

工厂干拌水泥基砂浆制备实际归属登高及设备支持服务的上限 100 h/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。真实付费可用时间可能超过主动施工时长，并随共享登高安排变化；该界限不是人工定额或班次假设。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：工厂干拌水泥基砂浆制备接收的随料包装 (`mix_mortar_packaging_feed`)

过程／待建立交换的方向／类型：`mix_mortar` / `inputs` / `product`.

接收进入 mix_mortar 的同一包装领出，匹配物件/组成及事件。每一部分在本节点都须有真实、按材料区分的废物、可重复使用退出或留存库存去向；不能把未拆包装自动视为废物。

- 采集对象：工厂干拌水泥基砂浆制备接收的随料包装
- 流属性/单位: Mass / kg
- 数量规则: actual_mix_mortar_packaging_feed/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mix_mortar`
- 来源: `bda-mortar-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 40
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

工厂干拌水泥基砂浆制备接收的随料包装的上限 40 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：拌和原始未用物料退出 (`mix_unused_return`)

过程／待建立交换的方向／类型：`mix_mortar` / `outputs` / `product`.

按材料分别计量实际离开拌和节点保管权的原始未用干预混料、新水或可重复使用包装。湿拌或已开始凝结的砂浆不能冒充未用干预混料，应进入真实的在制品或废物路径。

- 采集对象：拌和原始未用物料退出
- 流属性/单位: Mass / kg
- 数量规则: actual_mix_unused_return/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mix_mortar`
- 来源: `bda-mortar-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

拌和原始未用物料退出的上限 500 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。真实保管权退出取决于采购和再用安排，不能决定负负荷。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：拌和废弃砂浆 (`mix_mortar_waste`)

过程／待建立交换的方向／类型：`mix_mortar` / `outputs` / `waste`.

按当前湿态计量在拌和或制备处实际废弃的拒收、剩余湿砂浆，保留干固体及水含量证据。区分未用干预混料、保留的批次在制品以及收集的清洗液，不得合并重复核算。

- 采集对象：拌和废弃砂浆
- 流属性/单位: Mass / kg
- 数量规则: actual_mix_mortar_waste/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mix_mortar`
- 来源: `bda-mortar-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 300
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

拌和废弃砂浆的上限 300 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。数量仍须对应材料和水账。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。仅包括拌和作业实际拒收或剩余湿砂浆，保留当前湿质量、干固体及水证据；不能将砌筑/验收拆墙物仅因称为砂浆废物就转归拌和。实际返工或保管权退回只有在真实当前状态交接有独立证据、且兼容路线/责任已被审查时才可影响本节点；下游拆除仍归实际产生节点，绝不能仅按废物名称转移责任。

#### 采集要求：拌和包装废物 (`mix_packaging_waste`)

过程／待建立交换的方向／类型：`mix_mortar` / `outputs` / `waste`.

按准确组成计量在拌和处从对应随料包装投入中实际拆出并废弃的包装。将可重复使用物、保留包材和真实处理去向分别记录，不能把收料包装再次采购或再次废弃。

- 采集对象：拌和包装废物
- 流属性/单位: Mass / kg
- 数量规则: actual_mix_packaging_waste/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mix_mortar`
- 来源: `bda-mortar-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 40
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

拌和包装废物的上限 40 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。数量仍须对应材料和水账。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。仅包括由拌和实际拆开并废弃、组成明确的随料包装，并与对应包装接收核对；收料/后续节点包装废物、可用包装退出和砂浆/墙体残余均分开。实际返工或保管权退回只有在真实当前状态交接有独立证据、且兼容路线/责任已被审查时才可影响本节点；下游拆除仍归实际产生节点，绝不能仅按废物名称转移责任。

#### 采集要求：拌和直接物质释放 (`mix_direct_release`)

过程／待建立交换的方向／类型：`mix_mortar` / `outputs` / `elementary`.

制备过程确有直接释放时，识别实际向外释放的物质、颗粒组成及粒径表述基准和接收介质。被捕集的物料应计入废物。该条件性集合角色须展开为组成明确的真实交换，不能用通用水泥尘身份或平衡差额替代。

- 采集对象：拌和直接物质释放
- 流属性/单位: Mass / kg
- 数量规则: actual_mix_direct_release/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mix_mortar`
- 来源: `bda-mortar-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 20
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

拌和直接物质释放的上限 20 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。总量不是物质排放因子；每项真实向外物质仍须有组成及介质证据。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：内部接收的烧结黏土砖 (`bricks`)

过程／待建立交换的方向／类型：`lay_joint` / `inputs` / `product`.

接收实际领往砌筑的烧结黏土砖批次，保留非耐火材料身份、SKU、尺寸、凹槽或孔洞、当前含水状态和质量。件数仅可借助同一 SKU、同一状态的实测质量关系换算；此处不形成第二次采购。发送清单角色为 issue_materials_lay_joint，其中 issue_bricks 是按材料保留的组件账，不是第二个产品产出。此特定接收投入须按真实材料/SKU/当前状态、数量及物理保管事件匹配该组件，不能把集合总量用于每个组件，也不能重复外部采购。

- 采集对象：内部接收的烧结黏土砖
- 流属性/单位: Mass / kg
- 数量规则: actual_bricks/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_lay_joint`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

内部接收的烧结黏土砖的上限 1000 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：内部接收的设计附属部件 (`restraint_components`)

过程／待建立交换的方向／类型：`lay_joint` / `inputs` / `product`.

接收实际隔墙设计要求的新安装部件，包括底部/滑移/顶部及侧向约束、连接固定件、配筋、过梁、变形缝及防火/声学封闭材料。逐项明确金属、矿物和聚合物组成，保留兼容性及同一物件的质量换算证据。预先存在的部件只属于实体接口状态。发送清单角色为 issue_materials_lay_joint，其中 issue_restraint_components 是按材料保留的组件账，不是第二个产品产出。此特定接收投入须按真实材料/SKU/当前状态、数量及物理保管事件匹配该组件，不能把集合总量用于每个组件，也不能重复外部采购。

- 采集对象：内部接收的设计附属部件
- 流属性/单位: Mass / kg
- 数量规则: actual_restraint_components/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_lay_joint`
- 来源: `bda-workmanship-2023`; `ancon-restraint-interface`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 150
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

内部接收的设计附属部件的上限 150 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：砌砖、切割、约束安装与接缝整饰实际归属登高及设备支持服务 (`lay_joint_access_service`)

过程／待建立交换的方向／类型：`lay_joint` / `inputs` / `product`.

记录本节点真实拥有的升降、脚手架、除尘或其他支持设备可用服务量，包含其实际归属的闲置和补救期间。必须以证据界定服务单位、供应方及合同边界。合同可用性不能用人工作业时、假定八小时班次或资产寿命替代。直接归属后仅可分摊同一边界内的正残余，须列全合格用户及正权重分母；负数或未知残余阻断归属，不能截零、分摊或转为信用。证明完整且残余恰为零时不需权重。

- 采集对象：砌砖、切割、约束安装与接缝整饰实际归属登高及设备支持服务
- 流属性/单位: Duration / h
- 数量规则: actual_lay_joint_access_service/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_lay_joint`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: h
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

砌砖、切割、约束安装与接缝整饰实际归属登高及设备支持服务的上限 100 h/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。真实付费可用时间可能超过主动施工时长，并随共享登高安排变化；该界限不是人工定额或班次假设。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：砌砖、切割、约束安装与接缝整饰接收的随料包装 (`lay_joint_packaging_feed`)

过程／待建立交换的方向／类型：`lay_joint` / `inputs` / `product`.

接收进入 lay_joint 的同一包装领出，匹配物件/组成及事件。每一部分在本节点都须有真实、按材料区分的废物、可重复使用退出或留存库存去向；不能把未拆包装自动视为废物。

- 采集对象：砌砖、切割、约束安装与接缝整饰接收的随料包装
- 流属性/单位: Mass / kg
- 数量规则: actual_lay_joint_packaging_feed/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_lay_joint`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 40
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

砌砖、切割、约束安装与接缝整饰接收的随料包装的上限 40 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：砌筑原始未用物料退出 (`lay_unused_return`)

过程／待建立交换的方向／类型：`lay_joint` / `outputs` / `product`.

仅登记确实离开砌筑保管权的原始未用砖、实际附属部件、新供水或可重复使用包装，保留准确材料/SKU/当前状态、数量、接收方及用途。每项退出须匹配 lay_joint 实际接收的同一材料。本路线干预混料只进入 mix_mortar：砌筑不能把湿砂浆退作未用干料，也不能静默增加干料投入。留置作业、拆下/凝结砂浆、废物及完整期末库存/加工在制品各有独立去向。任何真实新增干料或改变状态的投入/退出路径均须明确审查范围和保管权，当前不推定。

- 采集对象：砌筑原始未用物料退出
- 流属性/单位: Mass / kg
- 数量规则: actual_lay_unused_return/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_lay_joint`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

砌筑原始未用物料退出的上限 1000 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。真实保管权退出取决于采购和再用安排，不能决定负负荷。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：砌筑材料及包装废物 (`lay_solid_waste`)

过程／待建立交换的方向／类型：`lay_joint` / `outputs` / `waste`.

记录砌筑产生的实际砖切损、砂浆落料、拆除的不合格墙体、附属件边角料、随料包装废弃物及捕集尘，逐一保留组成、当前含水状态和去向。捕集尘与未捕集基本流释放是互斥数量。

- 采集对象：砌筑材料及包装废物
- 流属性/单位: Mass / kg
- 数量规则: actual_lay_solid_waste/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_lay_joint`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

砌筑材料及包装废物的上限 1000 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。数量仍须对应材料和水账。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。仅包括砌筑作业实际产生的砖切损、砂浆落料、附属件/包装边角料、捕集尘及本节点修正拆除，逐项保留组成/当前含水状态和去向；未捕集释放、收集浆液及其他节点拆除不能计作本固体废物量。实际返工或保管权退回只有在真实当前状态交接有独立证据、且兼容路线/责任已被审查时才可影响本节点；下游拆除仍归实际产生节点，绝不能仅按废物名称转移责任。

#### 采集要求：砌筑收集废水 (`lay_wastewater`)

过程／待建立交换的方向／类型：`lay_joint` / `outputs` / `waste`.

按事件和去向记录切割或勾缝清洗产生的实际液体与浆液，保留悬浮固体和水的测量。直接排放必须另有向外物质及介质记录，同一液体不能又记为收集废水。

- 采集对象：砌筑收集废水
- 流属性/单位: Mass / kg
- 数量规则: actual_lay_wastewater/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_lay_joint`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 200
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

砌筑收集废水的上限 200 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。数量仍须对应材料和水账。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。仅包括砌筑作业实际收集的切割/整饰/清理液体或浆液，保留当前悬浮固体/水组成及去向；其他节点清洗液、固体废弃及直接释放分别归属。实际返工或保管权退回只有在真实当前状态交接有独立证据、且兼容路线/责任已被审查时才可影响本节点；下游拆除仍归实际产生节点，绝不能仅按废物名称转移责任。

#### 采集要求：砌筑直接物质释放 (`lay_direct_release`)

过程／待建立交换的方向／类型：`lay_joint` / `outputs` / `elementary`.

实际切割或勾缝释放须保留向外物质、颗粒表述基准、接收介质及捕集证据，具备这些证据后才形成组成明确的交换。砖切损总质量和平衡差额都不能当作空气粉尘。

- 采集对象：砌筑直接物质释放
- 流属性/单位: Mass / kg
- 数量规则: actual_lay_direct_release/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_lay_joint`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 50
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

砌筑直接物质释放的上限 50 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。总量不是物质排放因子；每项真实向外物质仍须有组成及介质证据。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：接收未养护墙体 (`cure_wall_feed`)

过程／待建立交换的方向／类型：`cure_accept` / `inputs` / `product`.

从砌筑节点接收同一未养护墙面事件及其材料组成/水状态，计量真实交接几何，不能固定为一个平方米。其几何交换本身不是质量平衡中的 kg 投入。仅为 kg 核对，另行保留同一墙板、同一当前状态的整墙实测质量或组成分项实测质量，关联交接/验收事件和换算证据；两种基础只能择一。面积本身不能按假定密度或通用 kg/m2 因子转换。组成水含量也须在同一状态实测。

- 采集对象：接收未养护墙体
- 流属性/单位: Area / m2
- 数量规则: actual_cure_wall_feed/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cure_accept`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 4
  - 单位: m2
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

接收未养护墙体的上限 4 m2/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。重复接口或未养护状态交接可超过最终验收几何；该范围并不把面积等同材料质量。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：内部接收的保护材料 (`protection_material`)

过程／待建立交换的方向／类型：`cure_accept` / `inputs` / `product`.

接收从收料节点真实领出的覆盖物、麻布及消耗性临时保护物，按组成和状态区分。可重复使用的脚手架或支撑按实际所有权和服务期间归为服务，不得把整个资产制造负荷计给每面墙。发送清单角色为 issue_materials_cure_accept，其中 issue_protection_material 是按材料保留的组件账，不是第二个产品产出。此特定接收投入须按真实材料/SKU/当前状态、数量及物理保管事件匹配该组件，不能把集合总量用于每个组件，也不能重复外部采购。

- 采集对象：内部接收的保护材料
- 流属性/单位: Mass / kg
- 数量规则: actual_protection_material/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cure_accept`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 40
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

内部接收的保护材料的上限 40 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：内部接收的清洗修补材料 (`cure_cleaning_material`)

过程／待建立交换的方向／类型：`cure_accept` / `inputs` / `product`.

接收为了达到验收要求而实际使用的清洗和修补材料，明确组成及产品说明，并保留每一次实际修补。不得从通用砖工指南推定必须酸洗或引入另一套砂浆配方。发送清单角色为 issue_materials_cure_accept，其中 issue_cure_cleaning_material 是按材料保留的组件账，不是第二个产品产出。此特定接收投入须按真实材料/SKU/当前状态、数量及物理保管事件匹配该组件，不能把集合总量用于每个组件，也不能重复外部采购。

- 采集对象：内部接收的清洗修补材料
- 流属性/单位: Mass / kg
- 数量规则: actual_cure_cleaning_material/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cure_accept`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 30
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

内部接收的清洗修补材料的上限 30 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：保护、养护、清洗及隔墙验收实际归属登高及设备支持服务 (`cure_accept_access_service`)

过程／待建立交换的方向／类型：`cure_accept` / `inputs` / `product`.

记录本节点真实拥有的升降、脚手架、除尘或其他支持设备可用服务量，包含其实际归属的闲置和补救期间。必须以证据界定服务单位、供应方及合同边界。合同可用性不能用人工作业时、假定八小时班次或资产寿命替代。直接归属后仅可分摊同一边界内的正残余，须列全合格用户及正权重分母；负数或未知残余阻断归属，不能截零、分摊或转为信用。证明完整且残余恰为零时不需权重。

- 采集对象：保护、养护、清洗及隔墙验收实际归属登高及设备支持服务
- 流属性/单位: Duration / h
- 数量规则: actual_cure_accept_access_service/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cure_accept`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: h
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

保护、养护、清洗及隔墙验收实际归属登高及设备支持服务的上限 100 h/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。真实付费可用时间可能超过主动施工时长，并随共享登高安排变化；该界限不是人工定额或班次假设。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：保护、养护、清洗及隔墙验收接收的随料包装 (`cure_accept_packaging_feed`)

过程／待建立交换的方向／类型：`cure_accept` / `inputs` / `product`.

接收进入 cure_accept 的同一包装领出，匹配物件/组成及事件。每一部分在本节点都须有真实、按材料区分的废物、可重复使用退出或留存库存去向；不能把未拆包装自动视为废物。

- 采集对象：保护、养护、清洗及隔墙验收接收的随料包装
- 流属性/单位: Mass / kg
- 数量规则: actual_cure_accept_packaging_feed/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cure_accept`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 40
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

保护、养护、清洗及隔墙验收接收的随料包装的上限 40 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：养护清洗原始未用物料退出 (`cure_unused_return`)

过程／待建立交换的方向／类型：`cure_accept` / `outputs` / `product`.

按准确身份和保管权计量从本节点实际退回或转出的原始未用保护/清洗物、新水及可重复使用包装。已消耗化学品和拆除墙体不能当作原始未用产品。

- 采集对象：养护清洗原始未用物料退出
- 流属性/单位: Mass / kg
- 数量规则: actual_cure_unused_return/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cure_accept`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

养护清洗原始未用物料退出的上限 500 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。真实保管权退出取决于采购和再用安排，不能决定负负荷。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 采集要求：养护清洗及修补材料废物 (`cure_solid_waste`)

过程／待建立交换的方向／类型：`cure_accept` / `outputs` / `waste`.

按组成、当前含水状态及保管权计量本节点实际废弃的随料包装、保护/清洗残余和验收修正中拆除的砖墙。留在原处且尚未解决的不合格墙体是安装在制品，不能贡献最终验收面积。

- 采集对象：养护清洗及修补材料废物
- 流属性/单位: Mass / kg
- 数量规则: actual_cure_solid_waste/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cure_accept`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

养护清洗及修补材料废物的上限 1000 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。数量仍须对应材料和水账。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。仅包括保护/验收作业实际产生的保护/清洗/包装残余及本节点实物拆除的不合格作业，保留当前组成/含水状态和保管权。未拆除且未解决墙体仍是加工在制品，其他节点废弃、废水及直接释放分开。实际返工或保管权退回只有在真实当前状态交接有独立证据、且兼容路线/责任已被审查时才可影响本节点；下游拆除仍归实际产生节点，绝不能仅按废物名称转移责任。

#### 采集要求：养护清洗其他实际向外物质释放 (`cure_other_release`)

过程／待建立交换的方向／类型：`cure_accept` / `outputs` / `elementary`.

记录养护、修补或清洗中实际向外释放的物质，排除已经单列的 H2O 水蒸气，逐项确定物质和接收介质。实际有证据的直接液态 H2O 释放属于该节点的条件性角色，必须采用真实接收介质，不能使用空气水蒸气 UUID。交给收集液体接收方的仍是废水；发生性或介质未知则保留缺口。输出角色不能表示吸收，不推定碳化吸收、反应路径或溶剂排放；实际吸收须另设经过审查的输入角色。

- 采集对象：养护清洗其他实际向外物质释放
- 流属性/单位: Mass / kg
- 数量规则: actual_cure_other_release/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cure_accept`
- 来源: `bda-workmanship-2023`
- 尚待核实的可选筛查提示：暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 30
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

养护清洗其他实际向外物质释放的上限 30 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。总量不是物质排放因子；每项真实向外物质仍须有组成及介质证据。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receive_setout` | 收料、勘测及隔墙放线 | required | 本实际路线必需；条件交换须有真实发生证据 | 进入记录前检查已放行实体基层及项目设计。核对送货单、SKU/状态称量、拒收及储存检查。中央库和使用点全部完整库存均按唯一保管方记录，包括未领的后续批次货物。逐笔记录真实材料及随料包装领出和接收方。设计文件证明就绪但不是材料；保持新安装与已存在部件的完整清单。 既有接口观测由 base_design_interface、physical_interface_release 保持真实几何/状态和放行/接收责任，不是产品清单。 | 同一最终 A；内部交接保持真实数量 |
| `mix_mortar` | 工厂干拌水泥基砂浆制备 | required | 本实际路线必需；条件交换须有真实发生证据 | 每个真实批次均记录准确干预混料身份、称量接收的内部投入、实际供水、拌和操作及产品说明。称量湿料交出并匹配砌筑接收。分别测量废弃砂浆、清洗液、包装和可用退出。凝结前表征固体和水，记录真实反应状态变化，不编造配方或缓凝时间。 | 同一最终 A；内部交接保持真实数量 |
| `lay_joint` | 砌砖、切割、约束安装与接缝整饰 | required | 本实际路线必需；条件交换须有真实发生证据 | 每面墙板/每次作业匹配实际砖、湿砂浆、设计附属件和包装接收。记录实体基层放行、几何、切割方法、勾缝整饰、约束和封闭安装、供水、废物和释放。保留切损/边角料、不合格组装体去向及每个实际补救事件。把实际未养护墙体面积及组成/水状态交给验收，不形成额外材料采购。 既有接口观测由 physical_interface_construction_feed 保持真实几何/状态和放行/接收责任，不是产品清单。 | 同一最终 A；内部交接保持真实数量 |
| `cure_accept` | 保护、养护、清洗及隔墙验收 | required | 本实际路线必需；条件交换须有真实发生证据 | 遵循实际保护/养护和清洗程序，记录条件、临时支撑所有权、清洗/修补物以及每一次真实修正。匹配接收的未养护墙体状态和实际水池。对每项设计细部采集竣工证据及签字验收。A 仅测量最终验收的唯一表面；未解决作业仍有标识地保留为在制品。 | 同一最终 A；内部交接保持真实数量 |

四个责任节点拥有完整物理事件账。lay_joint 中明确承担接缝整饰责任，随后交接实际已整饰未养护墙体；水泥与水的凝结状态从拌和跟踪至 cure_accept 的验收状态。条件性用水、直接释放、包装去向及补救作业均须有发生证据，激活未知就是缺口。记录分拆不能虚构额外节点或材料采购。

### 既有资产接口观测

| observation_role_id | own_node | protocol_id | calculation_id | raw_fields | 规则 |
| --- | --- | --- | --- | --- | --- |
| base_design_interface | receive_setout | cp_receive_setout | calc_base_design_interface | `base_design_interface_actual_quantity`; `base_design_interface_native_unit`; `base_design_interface_mass_or_geometry_bridge`; `base_design_interface_actual_state`; `base_design_interface_measured_absence_evidence`; `base_design_interface_destination` | 接收已放行的现有底部基层、板底及相邻支承实体几何，并记录经认可布置所对应的隔墙接口及其状态。图纸、检查单和设计签字只是质量与放行证据，不是具有材料质量的交换。 |
| physical_interface_construction_feed | lay_joint | cp_lay_joint | calc_physical_interface_construction_feed | `physical_interface_construction_feed_actual_geometry`; `physical_interface_construction_feed_surface_panel_ids`; `physical_interface_construction_feed_upstream_state`; `physical_interface_construction_feed_handoff_evidence` | 接收勘测节点放行的同一实体底部/支承几何，并对应交接事件。用面积及状态核验接口就绪，不能把签字设计文件当作施工材料，也不能把几何量加进 kg 平衡。 |
| physical_interface_release | receive_setout | cp_receive_setout | calc_physical_interface_release | `physical_interface_release_actual_geometry`; `physical_interface_release_surface_panel_ids`; `physical_interface_release_upstream_state`; `physical_interface_release_handoff_evidence` | 以表面身份和设计状态证据，将经勘测放行的实际底部基层及约束支承几何交给砌筑。它是对既有实体接口的观测性交接，不携带新采购结构质量，也不重复承担支承结构施工。 |

### 条件性集合角色组件账

| component_ledger_role | umbrella_row_id | protocol_id | calculation_id | actual_output | raw_fields | 规则 |
| --- | --- | --- | --- | --- | --- | --- |
| issue_bricks | issue_materials_lay_joint | cp_receive_setout | calc_issue_bricks | actual_issue_bricks | `issue_bricks_actual_quantity_kg`; `issue_bricks_event_id`; `issue_bricks_material_id`; `issue_bricks_state_id`; `issue_bricks_custodian_from`; `issue_bricks_custodian_to`; `issue_bricks_receiving_node`; `issue_bricks_handoff_evidence` | 仅按实际放行给指定下游节点的数量、准确材料身份和当前状态领出指定非耐火 SKU 和真实含水状态，含逐项标识的异形砖。保留事件、保管方和批次关联；接收投入必须匹配该领出。仍在收料保管权内的未用库存不能虚构成领出。 |
| issue_restraint_components | issue_materials_lay_joint | cp_receive_setout | calc_issue_restraint_components | actual_issue_restraint_components | `issue_restraint_components_actual_quantity_kg`; `issue_restraint_components_event_id`; `issue_restraint_components_material_id`; `issue_restraint_components_state_id`; `issue_restraint_components_custodian_from`; `issue_restraint_components_custodian_to`; `issue_restraint_components_receiving_node`; `issue_restraint_components_handoff_evidence` | 仅按实际放行给指定下游节点的数量、准确材料身份和当前状态领出实际新安装的约束、固定件、过梁、配筋及变形/防火/声学封闭部件。保留事件、保管方和批次关联；接收投入必须匹配该领出。仍在收料保管权内的未用库存不能虚构成领出。 |
| issue_protection_material | issue_materials_cure_accept | cp_receive_setout | calc_issue_protection_material | actual_issue_protection_material | `issue_protection_material_actual_quantity_kg`; `issue_protection_material_event_id`; `issue_protection_material_material_id`; `issue_protection_material_state_id`; `issue_protection_material_custodian_from`; `issue_protection_material_custodian_to`; `issue_protection_material_receiving_node`; `issue_protection_material_handoff_evidence` | 仅按实际放行给指定下游节点的数量、准确材料身份和当前状态领出实际覆盖物、麻布及消耗性保护物，并区分可重复使用服务资产。保留事件、保管方和批次关联；接收投入必须匹配该领出。仍在收料保管权内的未用库存不能虚构成领出。 |
| issue_cure_cleaning_material | issue_materials_cure_accept | cp_receive_setout | calc_issue_cure_cleaning_material | actual_issue_cure_cleaning_material | `issue_cure_cleaning_material_actual_quantity_kg`; `issue_cure_cleaning_material_event_id`; `issue_cure_cleaning_material_material_id`; `issue_cure_cleaning_material_state_id`; `issue_cure_cleaning_material_custodian_from`; `issue_cure_cleaning_material_custodian_to`; `issue_cure_cleaning_material_receiving_node`; `issue_cure_cleaning_material_handoff_evidence` | 仅按实际放行给指定下游节点的数量、准确材料身份和当前状态领出实际获准程序使用且配方组成明确的清洗与修补产品。保留事件、保管方和批次关联；接收投入必须匹配该领出。仍在收料保管权内的未用库存不能虚构成领出。 |
| receive_rejected_brick | receive_material_waste | cp_receive_setout | calc_receive_rejected_brick | actual_receive_rejected_brick | `receive_rejected_brick_actual_quantity`; `receive_rejected_brick_native_unit`; `receive_rejected_brick_mass_or_geometry_bridge`; `receive_rejected_brick_actual_state`; `receive_rejected_brick_measured_absence_evidence`; `receive_rejected_brick_destination` | 仅记录收料作业实际废弃的砖，保留废弃原因、当前含水状态和废物接收方。隔离待判材料仍是有标识的库存；尚可使用且实际退回供应商的砖属于正的可用退出，不属于该废物。 |
| receive_nonbrick_material_waste | receive_material_waste | cp_receive_setout | calc_receive_nonbrick_material_waste | actual_receive_nonbrick_material_waste | `receive_nonbrick_material_waste_actual_quantity`; `receive_nonbrick_material_waste_native_unit`; `receive_nonbrick_material_waste_same_sku_current_state_mass_bridge_ref`; `receive_nonbrick_material_waste_material_composition`; `receive_nonbrick_material_waste_material_id`; `receive_nonbrick_material_waste_sku_id`; `receive_nonbrick_material_waste_current_moisture_state`; `receive_nonbrick_material_waste_receipt_origin_event_id`; `receive_nonbrick_material_waste_discard_event_id`; `receive_nonbrick_material_waste_custodian`; `receive_nonbrick_material_waste_treatment_destination`; `receive_nonbrick_material_waste_actual_nonoccurrence_evidence`; `receive_nonbrick_material_waste_exclusive_fate_ref` | 仅记录 receive_setout 在真实下游领出之前实际废弃的工厂干拌水泥基预混砂浆、设计附属部件、保护消耗物或清洗/修补物。按实际材料/配方/SKU、当前含水状态、废弃相态及废物接收方/处理去向展开。该条件性集合角色不包括砖废物、包装废物、可用供应商退货和完整或加工库存/在制品。没有真实领出/接收事件，不能把收料拒收品转记到拌和、砌筑或养护废物。每项实际材料只形成一个测量交换，集合总量与组成分项不得相加。组成、状态、发生性或去向未知时保留缺口，不能填零或编造身份。 |

### 材料保管权交接

| external_gross_owner | source_issue | component_ledger_role | receiving_internal_feed | receiving_node | basis |
| --- | --- | --- | --- | --- | --- |
| receive_dry_mortar | issue_dry_mortar | issue_dry_mortar | dry_mortar | mix_mortar | 同一材料/SKU/状态、事件及真实 kg |
| receive_bricks | issue_materials_lay_joint | issue_bricks | bricks | lay_joint | 同一材料/SKU/状态、事件及真实 kg |
| receive_restraint_components | issue_materials_lay_joint | issue_restraint_components | restraint_components | lay_joint | 同一材料/SKU/状态、事件及真实 kg |
| receive_protection_material | issue_materials_cure_accept | issue_protection_material | protection_material | cure_accept | 同一材料/SKU/状态、事件及真实 kg |
| receive_cure_cleaning_material | issue_materials_cure_accept | issue_cure_cleaning_material | cure_cleaning_material | cure_accept | 同一材料/SKU/状态、事件及真实 kg |

| source | receiving | basis |
| --- | --- | --- |
| issue_packaging_mix_mortar | mix_mortar_packaging_feed | 同一组成/物件、保管权事件及实际 kg；不重复包装生产负荷 |
| issue_packaging_lay_joint | lay_joint_packaging_feed | 同一组成/物件、保管权事件及实际 kg；不重复包装生产负荷 |
| issue_packaging_cure_accept | cure_accept_packaging_feed | 同一组成/物件、保管权事件及实际 kg；不重复包装生产负荷 |

### 过程：收料、勘测及隔墙放线 (`receive_setout`)

进入记录前检查已放行实体基层及项目设计。核对送货单、SKU/状态称量、拒收及储存检查。中央库和使用点全部完整库存均按唯一保管方记录，包括未领的后续批次货物。逐笔记录真实材料及随料包装领出和接收方。设计文件证明就绪但不是材料；保持新安装与已存在部件的完整清单。

#### 输入

##### 产品流

###### 收料、勘测及隔墙放线实际归属用电 (`receive_setout_electricity`)

计量本节点可归属的实际用电，保留电表编号、倍率、时间区间和上级表拓扑。优先用直接读数差；总表残余须恰好扣除一次总表内所有已直接归属用户，不能扣除总表外直接负荷。仅能在完整且权重分母为正的合格用户集合内分摊正残余。负数或未知残余阻断归属，须先解决读数、区间、拓扑或服务证据，不能分摊、截零或转为信用；证明完整且残余恰为零时不需要权重。

- 选定流: 收料、勘测及隔墙放线实际归属用电
- 流属性/单位: Energy / kWh
- 数量规则: actual_receive_setout_electricity/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 50
  - 单位: kWh
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

收料、勘测及隔墙放线实际归属用电的上限 50 kWh/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。小型工具及共享现场作业随实测表计期间和闲置负荷有很大差异，不能由此推定设备额定功率或运行时数因子。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

###### 外部收料：工厂干拌水泥基预混砂浆 (`receive_dry_mortar`)

在收料节点记录实际指定预混料，含真实袋装/筒仓含水状态唯一的外部材料进入。期初和最终完整库存覆盖所有保管权位置，包括留在使用点、尚未领出的后续批次物料。毛领用量保留收料拒收及可用退出；之后的内部领出不能形成第二次采购。

- 选定流: 外部收料：工厂干拌水泥基预混砂浆
- 流属性/单位: Mass / kg
- 数量规则: actual_receive_dry_mortar/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 300
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

外部收料：工厂干拌水泥基预混砂浆的上限 300 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。它筛查保留损失及可用退出的毛领用量，而非净安装材料或规定消耗率。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

###### 外部收料：烧结黏土隔墙砖 (`receive_bricks`)

在收料节点记录指定非耐火 SKU 和真实含水状态，含逐项标识的异形砖唯一的外部材料进入。期初和最终完整库存覆盖所有保管权位置，包括留在使用点、尚未领出的后续批次物料。毛领用量保留收料拒收及可用退出；之后的内部领出不能形成第二次采购。

- 选定流: 外部收料：烧结黏土隔墙砖
- 流属性/单位: Mass / kg
- 数量规则: actual_receive_bricks/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

外部收料：烧结黏土隔墙砖的上限 1000 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。它筛查保留损失及可用退出的毛领用量，而非净安装材料或规定消耗率。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 输出

##### 产品流

###### 内部领出：工厂干拌水泥基预混砂浆 (`issue_dry_mortar`)

仅按实际放行给指定下游节点的数量、准确材料身份和当前状态领出实际指定预混料，含真实袋装/筒仓含水状态。保留事件、保管方和批次关联；接收投入必须匹配该领出。仍在收料保管权内的未用库存不能虚构成领出。

- 选定流: 内部领出：工厂干拌水泥基预混砂浆
- 流属性/单位: Mass / kg
- 数量规则: actual_issue_dry_mortar/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_receive_setout`
- 来源: `bda-workmanship-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 300
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

内部领出：工厂干拌水泥基预混砂浆的上限 300 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

##### 废物流

### 过程：工厂干拌水泥基砂浆制备 (`mix_mortar`)

每个真实批次均记录准确干预混料身份、称量接收的内部投入、实际供水、拌和操作及产品说明。称量湿料交出并匹配砌筑接收。分别测量废弃砂浆、清洗液、包装和可用退出。凝结前表征固体和水，记录真实反应状态变化，不编造配方或缓凝时间。

#### 输入

##### 产品流

###### 内部接收的干预混砂浆 (`dry_mortar`)

接收与收料节点领出记录完全一致、已经称量的工厂干拌水泥基预混砂浆批次，保留等级、配方身份、袋装或筒仓供货状态和含水率。这是内部投入；不能再次采购或计入其水泥、砂或石灰的上游负荷。

- 选定流: 内部接收的干预混砂浆
- 流属性/单位: Mass / kg
- 数量规则: actual_dry_mortar/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mix_mortar`
- 来源: `bda-mortar-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 300
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

内部接收的干预混砂浆的上限 300 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

###### 拌和实际供水 (`mix_water`)

记录该拌和节点实际领用的供水，并区分拌料、设备清洗和获准调整等用途，说明水源、供应方及水质。原始未用新水的实际退出仍包含在毛领用量内，并单独归类；完整新水期末库存仅扣除一次。

- 选定流: 拌和实际供水
- 流属性/单位: Mass / kg
- 数量规则: actual_mix_water/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mix_mortar`
- 来源: `bda-mortar-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 200
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

拌和实际供水的上限 200 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。它筛查保留损失及可用退出的毛领用量，而非净安装材料或规定消耗率。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

###### 工厂干拌水泥基砂浆制备实际归属用电 (`mix_mortar_electricity`)

计量本节点可归属的实际用电，保留电表编号、倍率、时间区间和上级表拓扑。优先用直接读数差；总表残余须恰好扣除一次总表内所有已直接归属用户，不能扣除总表外直接负荷。仅能在完整且权重分母为正的合格用户集合内分摊正残余。负数或未知残余阻断归属，须先解决读数、区间、拓扑或服务证据，不能分摊、截零或转为信用；证明完整且残余恰为零时不需要权重。

- 选定流: 工厂干拌水泥基砂浆制备实际归属用电
- 流属性/单位: Energy / kWh
- 数量规则: actual_mix_mortar_electricity/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mix_mortar`
- 来源: `bda-mortar-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 150
  - 单位: kWh
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

工厂干拌水泥基砂浆制备实际归属用电的上限 150 kWh/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。小型工具及共享现场作业随实测表计期间和闲置负荷有很大差异，不能由此推定设备额定功率或运行时数因子。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 输出

##### 产品流

###### 实际湿砂浆交接 (`wet_mortar_feed`)

在实际交接时称量送往砌筑节点的湿砂浆，并记录其批次、时点和水状态。将其与预混料和供水记录对应，先区分拌和废料、液态退出及有证据的释放。实际湿砂浆交接质量不能固定为与面积参考量相等的一个质量单位。

- 选定流: 实际湿砂浆交接
- 流属性/单位: Mass / kg
- 数量规则: actual_wet_mortar_feed/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mix_mortar`
- 来源: `bda-mortar-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

实际湿砂浆交接的上限 500 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

##### 废物流

###### 拌和收集废水 (`mix_wastewater`)

计量离开拌和节点并交给废水接收方的实际清洗液及悬浮砂浆固体，记录湿总质量和固体/水份额。它既不是纯 H2O 基本流，也不能与单列砂浆废料重复计量。

- 选定流: 拌和收集废水
- 流属性/单位: Mass / kg
- 数量规则: actual_mix_wastewater/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mix_mortar`
- 来源: `bda-mortar-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 200
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

拌和收集废水的上限 200 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。数量仍须对应材料和水账。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。仅包括此处实际拌和/设备清洗产生并收集的液体及悬浮固体，保留实测水/固体份额和废水接收方。湿砂浆废弃、后续切割浆液及基本流液态/水蒸气释放均分开。实际返工或保管权退回只有在真实当前状态交接有独立证据、且兼容路线/责任已被审查时才可影响本节点；下游拆除仍归实际产生节点，绝不能仅按废物名称转移责任。

##### 基本流

###### 拌和 H2O 水蒸气向空气释放 (`mix_water_vapour`)

仅记录该拌和节点实际向未细分空气介质释放的 H2O 水蒸气，数量必须来自实测或经验证的蒸发方法。按互斥的结束状态池核对水量，正的未解释差额仍是质量问题，不能当作水蒸气排放量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 绑定模式: `fixed`
- 数量规则: actual_mix_water_vapour/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mix_mortar`
- 来源: `bda-mortar-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 200
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

拌和 H2O 水蒸气向空气释放的上限 200 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。宽泛暂定量范围不能凌驾于实测水进入量和互斥结束池约束。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

### 过程：砌砖、切割、约束安装与接缝整饰 (`lay_joint`)

每面墙板/每次作业匹配实际砖、湿砂浆、设计附属件和包装接收。记录实体基层放行、几何、切割方法、勾缝整饰、约束和封闭安装、供水、废物和释放。保留切损/边角料、不合格组装体去向及每个实际补救事件。把实际未养护墙体面积及组成/水状态交给验收，不形成额外材料采购。

#### 输入

##### 产品流

###### 内部接收的湿砂浆 (`lay_mortar`)

记录实际湿砂浆领出的对应接收量，以批次、交接事件、时间、湿质量和水状态匹配 wet_mortar_feed。交出与接收之间的实际损失必须有唯一责任事件，不能以无法匹配的数量差静默减少投入。

- 选定流: 内部接收的湿砂浆
- 流属性/单位: Mass / kg
- 数量规则: actual_lay_mortar/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_lay_joint`
- 来源: `bda-workmanship-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

内部接收的湿砂浆的上限 500 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。该行保留自身真实交接或作业数量，不从中推定供应商配方、砖件数因子或材料身份。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

###### 砌筑实际供水 (`lay_water`)

记录砌筑、获准润砖、切割、勾缝整饰及本工作包清理所用的实际供水。实际操作和产品条件须支持发生性；通用指南中的条件性短时润湿不能变成普遍浸泡要求，未用库存水也不能算作消耗。

- 选定流: 砌筑实际供水
- 流属性/单位: Mass / kg
- 数量规则: actual_lay_water/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_lay_joint`
- 来源: `bda-workmanship-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

砌筑实际供水的上限 100 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。它筛查保留损失及可用退出的毛领用量，而非净安装材料或规定消耗率。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

###### 砌砖、切割、约束安装与接缝整饰实际归属用电 (`lay_joint_electricity`)

计量本节点可归属的实际用电，保留电表编号、倍率、时间区间和上级表拓扑。优先用直接读数差；总表残余须恰好扣除一次总表内所有已直接归属用户，不能扣除总表外直接负荷。仅能在完整且权重分母为正的合格用户集合内分摊正残余。负数或未知残余阻断归属，须先解决读数、区间、拓扑或服务证据，不能分摊、截零或转为信用；证明完整且残余恰为零时不需要权重。

- 选定流: 砌砖、切割、约束安装与接缝整饰实际归属用电
- 流属性/单位: Energy / kWh
- 数量规则: actual_lay_joint_electricity/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_lay_joint`
- 来源: `bda-workmanship-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 200
  - 单位: kWh
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

砌砖、切割、约束安装与接缝整饰实际归属用电的上限 200 kWh/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。小型工具及共享现场作业随实测表计期间和闲置负荷有很大差异，不能由此推定设备额定功率或运行时数因子。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 输出

##### 产品流

###### 完成接缝整饰的未养护隔墙交接 (`uncured_partition`)

将实际已组装并完成接缝整饰、尚未达到最终验收的墙体状态交给保护和验收节点，记录唯一表面/墙板几何及对应材料组成和水账。实际补救交接属于独立物理事件，不能增加最终验收参考面积。仅为 kg 核对，另行保留同一墙板、同一当前状态的整墙实测质量或组成分项实测质量，关联交接/验收事件和换算证据；两种基础只能择一。面积本身不能按假定密度或通用 kg/m2 因子转换。组成水含量也须在同一状态实测。

- 选定流: 完成接缝整饰的未养护隔墙交接
- 流属性/单位: Area / m2
- 数量规则: actual_uncured_partition/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_lay_joint`
- 来源: `bda-workmanship-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 4
  - 单位: m2
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

完成接缝整饰的未养护隔墙交接的上限 4 m2/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。重复接口或未养护状态交接可超过最终验收几何；该范围并不把面积等同材料质量。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

##### 废物流

##### 基本流

###### 砌筑 H2O 水蒸气向空气释放 (`lay_water_vapour`)

计量或验证该砌筑节点在实际时点和状态下向未细分空气介质释放的 H2O 水蒸气。将进入未养护墙体的水、原始新水退出、液体/固体废物水和在制品水分开；砂浆凝结并不把保留的结合水转化为蒸发，也不能把未解释差额当作蒸发。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 绑定模式: `fixed`
- 数量规则: actual_lay_water_vapour/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_lay_joint`
- 来源: `bda-workmanship-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 200
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

砌筑 H2O 水蒸气向空气释放的上限 200 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。宽泛暂定量范围不能凌驾于实测水进入量和互斥结束池约束。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

### 过程：保护、养护、清洗及隔墙验收 (`cure_accept`)

遵循实际保护/养护和清洗程序，记录条件、临时支撑所有权、清洗/修补物以及每一次真实修正。匹配接收的未养护墙体状态和实际水池。对每项设计细部采集竣工证据及签字验收。A 仅测量最终验收的唯一表面；未解决作业仍有标识地保留为在制品。

#### 输入

##### 产品流

###### 养护清洗实际供水 (`cure_water`)

计量实际获准保护、养护或清洗程序使用的供水。被动等待不会自动产生用水量。将原始未用新水、保留于水泥基材料的加工水、收集液体和实际释放分别记录。

- 选定流: 养护清洗实际供水
- 流属性/单位: Mass / kg
- 数量规则: actual_cure_water/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cure_accept`
- 来源: `bda-workmanship-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 200
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

养护清洗实际供水的上限 200 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。它筛查保留损失及可用退出的毛领用量，而非净安装材料或规定消耗率。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

###### 保护、养护、清洗及隔墙验收实际归属用电 (`cure_accept_electricity`)

计量本节点可归属的实际用电，保留电表编号、倍率、时间区间和上级表拓扑。优先用直接读数差；总表残余须恰好扣除一次总表内所有已直接归属用户，不能扣除总表外直接负荷。仅能在完整且权重分母为正的合格用户集合内分摊正残余。负数或未知残余阻断归属，须先解决读数、区间、拓扑或服务证据，不能分摊、截零或转为信用；证明完整且残余恰为零时不需要权重。

- 选定流: 保护、养护、清洗及隔墙验收实际归属用电
- 流属性/单位: Energy / kWh
- 数量规则: actual_cure_accept_electricity/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cure_accept`
- 来源: `bda-workmanship-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kWh
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

保护、养护、清洗及隔墙验收实际归属用电的上限 100 kWh/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。小型工具及共享现场作业随实测表计期间和闲置负荷有很大差异，不能由此推定设备额定功率或运行时数因子。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

#### 输出

##### 产品流

###### 已验收室内砖隔墙施工服务 (`accepted_partition_service`)

只有实际设计细部、接缝整饰、保护、养护、清洗及全部修正已通过验收，才能输出完成的非承重烧结黏土砖室内隔墙施工服务。按已验收单一墙平面表面的并集计量并排除洞口，两面墙面及重复验收单不能使产出倍增。仅为 kg 核对，另行保留同一墙板、同一当前状态的整墙实测质量或组成分项实测质量，关联交接/验收事件和换算证据；两种基础只能择一。面积本身不能按假定密度或通用 kg/m2 因子转换。组成水含量也须在同一状态实测。

- 选定流: 已验收室内砖隔墙施工服务
- 流属性/单位: Area / m2
- 数量规则: 1 m2
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cure_accept`
- 来源: `bda-workmanship-2023`
- 数量范围: 精确面积归一化恒等式
  - 范围角色: `qa_guardrail`
  - 下限: 1
  - 上限: 1
  - 单位: m2
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `calculated_from_collection`

精确的 1..1 仅由分子和分母采用同一正的唯一验收 A 得到。它是数学归一化恒等式，不是现场产率或经验消耗范围。

##### 废物流

###### 养护清洗收集废水 (`cure_wastewater`)

计量交给废水接收方的实际含水清洗残余，并记录水/固体份额及真实处理路径。直接向外释放须有其独立物质和介质证据，不能又作为收集废水。

- 选定流: 养护清洗收集废水
- 流属性/单位: Mass / kg
- 数量规则: actual_cure_wastewater/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cure_accept`
- 来源: `bda-workmanship-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 300
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

养护清洗收集废水的上限 300 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。数量仍须对应材料和水账。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。仅包括保护/验收作业实际收集的含水清洗/修补液体，保留实测水/固体/溶质份额和废水接收方；其他节点清洗液、固体废物及直接液态/水蒸气释放均不重复计入。实际返工或保管权退回只有在真实当前状态交接有独立证据、且兼容路线/责任已被审查时才可影响本节点；下游拆除仍归实际产生节点，绝不能仅按废物名称转移责任。

##### 基本流

###### 养护清洗 H2O 水蒸气向空气释放 (`cure_water_vapour`)

记录该保护、凝结和清洗节点实际向未细分空气介质释放的 H2O 水蒸气，数量须实测或经验证，绝不能来自残余差额。水泥基材料中的化学结合水仍为保留质量；按真实水状态核算，不预设养护时间、水化产率或干燥损失。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 绑定模式: `fixed`
- 数量规则: actual_cure_water_vapour/A
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_cure_accept`
- 来源: `bda-workmanship-2023`
- 数量范围: 暂定个体规划筛查
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 300
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

养护清洗 H2O 水蒸气向空气释放的上限 300 kg/m2 是独立选定的暂定规划复核触发值，允许真实批次规模、细部密度和实际重复施工量变化。宽泛暂定量范围不能凌驾于实测水进入量和互斥结束池约束。零仅为允许的筛查下限，绝不能把必要证据缺失转为未发生。超出范围要求复核解释，不否定或截断有效测量。这不是经验依据，也不是默认清单值。

## 7. 分配与共产品处理

预期产出只有一种已验收施工服务。内部接口、材料交接和原始未用可用退出不产生共生产最终服务。材料分项上游负荷账与施工负荷账分开。任何净使用诊断仅供核对，不能形成第二个负交换或避免生产主张：

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | own_node_materials | 优先采用直接测量的节点/材料/事件量，再考虑分摊。内部领出及投入传递数量和已有负荷，不能当作新采购、共产品或额外最终服务。 |  |
| `allocation_usable_exits` | positive_original_unused_exits | 毛收料/领用量保留原始未用可用退出，并按相同等级、当前状态和接收方正向记录。证据充分时可分离与该退出相关的原始上游材料负荷；全部施工/返工负荷仍留在批次内。净使用诊断值可为核对扣除一次退出量，但不能成为额外交换或负信用，也不产生避免生产的主张。 |  |
| `allocation_power` | four_node_electricity | 优先使用已换算的直接表计读数差。实际总表残余在扣除所有总表内直接归属用户一次后计算，表外直接负荷不参与扣除。残余恰为零时无需权重；正残余仅能在完整合格用户及正分母、因果证据下分摊。最终全部归属与真实总表/直接量只核对一次。负数或未知残余阻断归属，须解决读数、区间、拓扑或服务证据，不能分摊、截零或转为信用；证明完整且为零后才适用无权重情形。 |  |
| `allocation_service` | four_node_access_service | 识别每个真实共享脚手架/升降/除尘/保护资产、供应方/服务边界及消费节点/期间。先归属直接实际可用量，再仅对同一服务区间的正残余，按完整合格用户、正分母及有记录的因果基础分摊。包括真实拥有的闲置和返工。不得用人工代理、假定班次、整件资产重复购买或编造寿命。负数或未知残余阻断归属，不能分摊、截零或转为信用；证明完整且恰为零时无需权重。 |  |
| `allocation_period` | all_event_periods | 截止点完整库存与加工在制品须保持准确保管权及期间关联。逐期间保留共享资产、更换、终止的归属决定，最终确定前解决重叠和缺口。同一采购、表计读数差、服务区间或事件不能在下一期间再归属一次。 |  |
| `allocation_rework` | rejected_and_corrected_states | 保留每个真实修正事件，并将返工循环关联到产生及接收节点。区分可用原始物料、返工料、废物及未解决在制品。重复物理作业仍进入分子，仅最终验收的唯一几何进入 A。降级/回收去向须有真实证据及经审查的负荷决定，不能假定信用。 | `bda-workmanship-2023` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

每个协议只拥有一个真实节点。类型明确的原始数组或标量保留原始单位、真实状态、不确定度以及事件/期间粒度。节点前缀公共字段标识物理事件、电子修订、材料/SKU/状态、位置/保管权、设计/说明引用、验收、修正父事件和去向。角色前缀字段记录清单角色、明确观测角色和组件账选择器的实测量或真实换算证据；只有已声明清单角色形成交换。读数/服务区间数组须保留表号或资产身份、开始/结束、来源期间、原始单位、换算因子、上级边界、用户及归属证据。用户权重数组列全每个合格用户及其真实因果权重。

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receive_setout` | `receive_setout` | 由 receive_setout 拥有的全部物理交换及接口角色 | 带时间戳的材料、保管权、几何、水状态、电表及服务事件账 | `receive_setout_lot_id`; `receive_setout_event_id`; `receive_setout_physical_event_id`; `receive_setout_record_revision`; `receive_setout_period_id`; `receive_setout_timestamp_start`; `receive_setout_timestamp_end`; `receive_setout_material_id`; `receive_setout_sku_id`; `receive_setout_state_id`; `receive_setout_custodian_from`; `receive_setout_custodian_to`; `receive_setout_sublocation_id`; `receive_setout_surface_id`; `receive_setout_component_schedule_ref`; `receive_setout_design_release_ref`; `receive_setout_supplier_instruction_ref`; `receive_setout_acceptance_ref`; `receive_setout_rework_parent_event_id`; `receive_setout_disposition`; `receive_setout_evidence_ref`; `receive_setout_mass_uncertainty_kg`; `receive_setout_mass_pool_partition_ref`; `receive_setout_stock_custody_partition_ref`; `receive_setout_rework_route_ref`; `receive_setout_period_attribution_ref`; `base_design_interface_actual_quantity`; `base_design_interface_native_unit`; `base_design_interface_mass_or_geometry_bridge`; `base_design_interface_actual_state`; `base_design_interface_measured_absence_evidence`; `base_design_interface_destination`; `receive_packaging_opening_intact_kg`; `receive_packaging_external_receipts_kg`; `receive_packaging_closing_intact_all_locations_kg`; `receive_packaging_material_state_ref`; `receive_packaging_native_quantity_records`; `receive_packaging_same_sku_state_mass_bridge_ref`; `receive_packaging_custody_partition_ref`; `receive_packaging_upstream_coverage_ref`; `receive_rejected_brick_actual_quantity`; `receive_rejected_brick_native_unit`; `receive_rejected_brick_mass_or_geometry_bridge`; `receive_rejected_brick_actual_state`; `receive_rejected_brick_measured_absence_evidence`; `receive_rejected_brick_destination`; `receive_packaging_waste_actual_quantity`; `receive_packaging_waste_native_unit`; `receive_packaging_waste_mass_or_geometry_bridge`; `receive_packaging_waste_actual_state`; `receive_packaging_waste_measured_absence_evidence`; `receive_packaging_waste_destination`; `receive_unused_return_actual_quantity`; `receive_unused_return_native_unit`; `receive_unused_return_mass_or_geometry_bridge`; `receive_unused_return_actual_state`; `receive_unused_return_measured_absence_evidence`; `receive_unused_return_destination`; `receive_setout_electricity_direct_reading_intervals`; `receive_setout_electricity_master_reading_intervals`; `receive_setout_electricity_inside_master_assigned_intervals`; `receive_setout_electricity_outside_master_assigned_intervals`; `receive_setout_electricity_residual_consumer_weights`; `receive_setout_electricity_meter_topology_ref`; `receive_setout_electricity_conversion_factor_ref`; `receive_setout_electricity_interval_completeness_ref`; `receive_setout_access_service_direct_service_intervals`; `receive_setout_access_service_master_service_intervals`; `receive_setout_access_service_inside_master_assigned_intervals`; `receive_setout_access_service_outside_master_assigned_intervals`; `receive_setout_access_service_residual_consumer_weights`; `receive_setout_access_service_contract_unit_ref`; `receive_setout_access_service_service_owner_ref`; `receive_setout_access_service_period_completeness_ref`; `receive_dry_mortar_opening_intact_kg`; `receive_dry_mortar_external_receipts_kg`; `receive_dry_mortar_closing_intact_all_locations_kg`; `receive_dry_mortar_material_state_ref`; `receive_dry_mortar_native_quantity_records`; `receive_dry_mortar_same_sku_state_mass_bridge_ref`; `receive_dry_mortar_custody_partition_ref`; `receive_dry_mortar_upstream_coverage_ref`; `issue_dry_mortar_actual_quantity_kg`; `issue_dry_mortar_event_id`; `issue_dry_mortar_material_id`; `issue_dry_mortar_state_id`; `issue_dry_mortar_custodian_from`; `issue_dry_mortar_custodian_to`; `issue_dry_mortar_receiving_node`; `issue_dry_mortar_handoff_evidence`; `receive_bricks_opening_intact_kg`; `receive_bricks_external_receipts_kg`; `receive_bricks_closing_intact_all_locations_kg`; `receive_bricks_material_state_ref`; `receive_bricks_native_quantity_records`; `receive_bricks_same_sku_state_mass_bridge_ref`; `receive_bricks_custody_partition_ref`; `receive_bricks_upstream_coverage_ref`; `issue_bricks_actual_quantity_kg`; `issue_bricks_event_id`; `issue_bricks_material_id`; `issue_bricks_state_id`; `issue_bricks_custodian_from`; `issue_bricks_custodian_to`; `issue_bricks_receiving_node`; `issue_bricks_handoff_evidence`; `receive_restraint_components_opening_intact_kg`; `receive_restraint_components_external_receipts_kg`; `receive_restraint_components_closing_intact_all_locations_kg`; `receive_restraint_components_material_state_ref`; `receive_restraint_components_native_quantity_records`; `receive_restraint_components_same_sku_state_mass_bridge_ref`; `receive_restraint_components_custody_partition_ref`; `receive_restraint_components_upstream_coverage_ref`; `issue_restraint_components_actual_quantity_kg`; `issue_restraint_components_event_id`; `issue_restraint_components_material_id`; `issue_restraint_components_state_id`; `issue_restraint_components_custodian_from`; `issue_restraint_components_custodian_to`; `issue_restraint_components_receiving_node`; `issue_restraint_components_handoff_evidence`; `receive_protection_material_opening_intact_kg`; `receive_protection_material_external_receipts_kg`; `receive_protection_material_closing_intact_all_locations_kg`; `receive_protection_material_material_state_ref`; `receive_protection_material_native_quantity_records`; `receive_protection_material_same_sku_state_mass_bridge_ref`; `receive_protection_material_custody_partition_ref`; `receive_protection_material_upstream_coverage_ref`; `issue_protection_material_actual_quantity_kg`; `issue_protection_material_event_id`; `issue_protection_material_material_id`; `issue_protection_material_state_id`; `issue_protection_material_custodian_from`; `issue_protection_material_custodian_to`; `issue_protection_material_receiving_node`; `issue_protection_material_handoff_evidence`; `receive_cure_cleaning_material_opening_intact_kg`; `receive_cure_cleaning_material_external_receipts_kg`; `receive_cure_cleaning_material_closing_intact_all_locations_kg`; `receive_cure_cleaning_material_material_state_ref`; `receive_cure_cleaning_material_native_quantity_records`; `receive_cure_cleaning_material_same_sku_state_mass_bridge_ref`; `receive_cure_cleaning_material_custody_partition_ref`; `receive_cure_cleaning_material_upstream_coverage_ref`; `issue_cure_cleaning_material_actual_quantity_kg`; `issue_cure_cleaning_material_event_id`; `issue_cure_cleaning_material_material_id`; `issue_cure_cleaning_material_state_id`; `issue_cure_cleaning_material_custodian_from`; `issue_cure_cleaning_material_custodian_to`; `issue_cure_cleaning_material_receiving_node`; `issue_cure_cleaning_material_handoff_evidence`; `physical_interface_release_actual_geometry`; `physical_interface_release_surface_panel_ids`; `physical_interface_release_upstream_state`; `physical_interface_release_handoff_evidence`; `issue_packaging_mix_mortar_actual_mass_kg`; `issue_packaging_mix_mortar_material_composition`; `issue_packaging_mix_mortar_item_id`; `issue_packaging_mix_mortar_current_state`; `issue_packaging_mix_mortar_custody_event_id`; `issue_packaging_mix_mortar_recipient_node`; `issue_packaging_mix_mortar_upstream_dataset_boundary_evidence`; `issue_packaging_lay_joint_actual_mass_kg`; `issue_packaging_lay_joint_material_composition`; `issue_packaging_lay_joint_item_id`; `issue_packaging_lay_joint_current_state`; `issue_packaging_lay_joint_custody_event_id`; `issue_packaging_lay_joint_recipient_node`; `issue_packaging_lay_joint_upstream_dataset_boundary_evidence`; `issue_packaging_cure_accept_actual_mass_kg`; `issue_packaging_cure_accept_material_composition`; `issue_packaging_cure_accept_item_id`; `issue_packaging_cure_accept_current_state`; `issue_packaging_cure_accept_custody_event_id`; `issue_packaging_cure_accept_recipient_node`; `issue_packaging_cure_accept_upstream_dataset_boundary_evidence`; `receive_nonbrick_material_waste_actual_quantity`; `receive_nonbrick_material_waste_native_unit`; `receive_nonbrick_material_waste_same_sku_current_state_mass_bridge_ref`; `receive_nonbrick_material_waste_material_composition`; `receive_nonbrick_material_waste_material_id`; `receive_nonbrick_material_waste_sku_id`; `receive_nonbrick_material_waste_current_moisture_state`; `receive_nonbrick_material_waste_receipt_origin_event_id`; `receive_nonbrick_material_waste_discard_event_id`; `receive_nonbrick_material_waste_custodian`; `receive_nonbrick_material_waste_treatment_destination`; `receive_nonbrick_material_waste_actual_nonoccurrence_evidence`; `receive_nonbrick_material_waste_exclusive_fate_ref`; `receive_setout_opening_processed_wip_records`; `receive_setout_closing_processed_wip_records`; `receive_setout_material_internal_in_kg_absence_records`; `receive_setout_final_retained_mass_kg_absence_records`; `receive_setout_aqueous_waste_kg_absence_records`; `receive_setout_direct_release_kg_absence_records`; `receive_setout_other_exclusive_transfer_absence_records`; `issue_materials_lay_joint_actual_component_exchange_records`; `issue_materials_lay_joint_actual_exchange_key`; `issue_materials_cure_accept_actual_component_exchange_records`; `issue_materials_cure_accept_actual_exchange_key`; `receive_material_waste_actual_component_exchange_records`; `receive_material_waste_actual_exchange_key` | 进入记录前检查已放行实体基层及项目设计。核对送货单、SKU/状态称量、拒收及储存检查。中央库和使用点全部完整库存均按唯一保管方记录，包括未领的后续批次货物。逐笔记录真实材料及随料包装领出和接收方。设计文件证明就绪但不是材料；保持新安装与已存在部件的完整清单。每项原始量保留原始单位和同身份/当前状态实测换算证据。电表读数差须有谱系及区间证据，服务记录须有真实供应方和合同边界。physical_event_id 与电子 record_revision 分开记录，只去除副本而保留真实修正。池谱系记录必须说明自身来源卡片及计算输出、物理事件、材料/SKU、当前含水状态、期间、同状态实测 kg 或实测份额比例、不确定度及唯一去向。在制品观测关联前一截止点或起源事件。墙体状态另行记录实测整件或组成质量，并与同一墙板/交接/验收状态对应，两种基础择一；面积不能进入 kg 运算。手工录入池汇总值不能替代上述谱系。按物理事件、材料/SKU、状态、节点、期间及保管方分组，真实物理量各汇总一次。汇总前匹配同身份内部交接对。保留未归一化分子，最终仅除以同一正的 A 一次。组合总量与其组成分项不得相加。既有资产观测角色：base_design_interface、physical_interface_release。保留独立实测几何、表面/事件身份、当前状态及设计/放行/验收责任，不形成产品交换。明确组件账选择器：issue_bricks 属于 issue_materials_lay_joint、issue_restraint_components 属于 issue_materials_lay_joint、issue_protection_material 属于 issue_materials_cure_accept、issue_cure_cleaning_material 属于 issue_materials_cure_accept、receive_rejected_brick 属于 receive_material_waste、receive_nonbrick_material_waste 属于 receive_material_waste。原有数量、SKU/状态、相态/去向和保管事件保持实测，并与实际实例化集合交换核对；无固定混合身份，集合不能再与组件相加。 | kg；m2；kWh；h 分别记录于类型明确的字段，不能跨量纲相加 | 每次接收、领出、使用、修正、去向及电表/服务边界；每个报告截止点和最终批次结束均盘存 | 覆盖从已放行进入到最终验收的全部真实批次时间，跨所有报告期间，并包含实际所有权下的闲置和返工区间 | 指定过程节点、批次、墙板、材料/状态、保管位置及真实共享服务用户集合 | per reference flow | 供应商批次/说明和项目设计；秤/表校准及原始单位换算；保管权/签收和废物票据；服务合同及合格用户记录；实际水状态证据、部件完整性及签字测量验收。必须有来源输出/份额核对、同状态整件或组成换算证据以及零角色池的真实未发生证据。 |
| `cp_mix_mortar` | `mix_mortar` | 由 mix_mortar 拥有的全部物理交换及接口角色 | 带时间戳的材料、保管权、几何、水状态、电表及服务事件账 | `mix_mortar_lot_id`; `mix_mortar_event_id`; `mix_mortar_physical_event_id`; `mix_mortar_record_revision`; `mix_mortar_period_id`; `mix_mortar_timestamp_start`; `mix_mortar_timestamp_end`; `mix_mortar_material_id`; `mix_mortar_sku_id`; `mix_mortar_state_id`; `mix_mortar_custodian_from`; `mix_mortar_custodian_to`; `mix_mortar_sublocation_id`; `mix_mortar_surface_id`; `mix_mortar_component_schedule_ref`; `mix_mortar_design_release_ref`; `mix_mortar_supplier_instruction_ref`; `mix_mortar_acceptance_ref`; `mix_mortar_rework_parent_event_id`; `mix_mortar_disposition`; `mix_mortar_evidence_ref`; `mix_mortar_mass_uncertainty_kg`; `mix_mortar_mass_pool_partition_ref`; `mix_mortar_stock_custody_partition_ref`; `mix_mortar_rework_route_ref`; `mix_mortar_period_attribution_ref`; `dry_mortar_received_quantity_kg`; `dry_mortar_source_issue_id`; `dry_mortar_material_id`; `dry_mortar_state_id`; `dry_mortar_custody_evidence`; `mix_water_opening_intact_kg`; `mix_water_external_receipts_kg`; `mix_water_closing_intact_all_locations_kg`; `mix_water_material_state_ref`; `mix_water_native_quantity_records`; `mix_water_same_sku_state_mass_bridge_ref`; `mix_water_custody_partition_ref`; `mix_water_upstream_coverage_ref`; `wet_mortar_feed_actual_quantity`; `wet_mortar_feed_native_unit`; `wet_mortar_feed_mass_or_geometry_bridge`; `wet_mortar_feed_actual_state`; `wet_mortar_feed_measured_absence_evidence`; `wet_mortar_feed_destination`; `mix_mortar_waste_actual_quantity`; `mix_mortar_waste_native_unit`; `mix_mortar_waste_mass_or_geometry_bridge`; `mix_mortar_waste_actual_state`; `mix_mortar_waste_measured_absence_evidence`; `mix_mortar_waste_destination`; `mix_wastewater_actual_quantity`; `mix_wastewater_native_unit`; `mix_wastewater_mass_or_geometry_bridge`; `mix_wastewater_actual_state`; `mix_wastewater_measured_absence_evidence`; `mix_wastewater_destination`; `mix_water_vapour_validated_evaporation_kg`; `mix_water_vapour_evaporation_method_ref`; `mix_water_vapour_pool_partition_ref`; `mix_water_vapour_uncertainty_kg`; `mix_direct_release_actual_quantity`; `mix_direct_release_native_unit`; `mix_direct_release_mass_or_geometry_bridge`; `mix_direct_release_actual_state`; `mix_direct_release_measured_absence_evidence`; `mix_direct_release_destination`; `mix_direct_release_substance`; `mix_direct_release_medium`; `mix_direct_release_direction`; `mix_direct_release_sampling_method`; `mix_direct_release_formulation_or_dust_composition`; `mix_direct_release_capture_fraction_evidence`; `mix_packaging_waste_actual_quantity`; `mix_packaging_waste_native_unit`; `mix_packaging_waste_mass_or_geometry_bridge`; `mix_packaging_waste_actual_state`; `mix_packaging_waste_measured_absence_evidence`; `mix_packaging_waste_destination`; `mix_unused_return_actual_quantity`; `mix_unused_return_native_unit`; `mix_unused_return_mass_or_geometry_bridge`; `mix_unused_return_actual_state`; `mix_unused_return_measured_absence_evidence`; `mix_unused_return_destination`; `mix_mortar_electricity_direct_reading_intervals`; `mix_mortar_electricity_master_reading_intervals`; `mix_mortar_electricity_inside_master_assigned_intervals`; `mix_mortar_electricity_outside_master_assigned_intervals`; `mix_mortar_electricity_residual_consumer_weights`; `mix_mortar_electricity_meter_topology_ref`; `mix_mortar_electricity_conversion_factor_ref`; `mix_mortar_electricity_interval_completeness_ref`; `mix_mortar_access_service_direct_service_intervals`; `mix_mortar_access_service_master_service_intervals`; `mix_mortar_access_service_inside_master_assigned_intervals`; `mix_mortar_access_service_outside_master_assigned_intervals`; `mix_mortar_access_service_residual_consumer_weights`; `mix_mortar_access_service_contract_unit_ref`; `mix_mortar_access_service_service_owner_ref`; `mix_mortar_access_service_period_completeness_ref`; `mix_mortar_packaging_feed_actual_mass_kg`; `mix_mortar_packaging_feed_source_issue_id`; `mix_mortar_packaging_feed_material_composition`; `mix_mortar_packaging_feed_current_state`; `mix_mortar_packaging_feed_custody_event_id`; `mix_mortar_opening_processed_wip_records`; `mix_mortar_closing_processed_wip_records`; `mix_mortar_final_retained_mass_kg_absence_records`; `mix_mortar_other_exclusive_transfer_absence_records`; `mix_mortar_unused_fresh_exit_water_portion_records`; `mix_mortar_internal_received_absence_records`; `mix_mortar_material_entry_water_portion_records`; `mix_mortar_opening_processed_wip_water_records`; `mix_mortar_closing_processed_wip_water_records`; `mix_mortar_next_handoff_water_kg_water_portion_records`; `mix_mortar_final_retained_bound_water_kg_absence_records`; `mix_mortar_final_retained_free_water_kg_absence_records`; `mix_mortar_solid_waste_water_kg_water_portion_records`; `mix_mortar_aqueous_waste_water_kg_water_portion_records`; `mix_mortar_direct_liquid_release_water_kg_water_portion_records`; `mix_mortar_other_exclusive_water_exit_absence_records` | 每个真实批次均记录准确干预混料身份、称量接收的内部投入、实际供水、拌和操作及产品说明。称量湿料交出并匹配砌筑接收。分别测量废弃砂浆、清洗液、包装和可用退出。凝结前表征固体和水，记录真实反应状态变化，不编造配方或缓凝时间。每项原始量保留原始单位和同身份/当前状态实测换算证据。电表读数差须有谱系及区间证据，服务记录须有真实供应方和合同边界。physical_event_id 与电子 record_revision 分开记录，只去除副本而保留真实修正。池谱系记录必须说明自身来源卡片及计算输出、物理事件、材料/SKU、当前含水状态、期间、同状态实测 kg 或实测份额比例、不确定度及唯一去向。在制品观测关联前一截止点或起源事件。墙体状态另行记录实测整件或组成质量，并与同一墙板/交接/验收状态对应，两种基础择一；面积不能进入 kg 运算。手工录入池汇总值不能替代上述谱系。按物理事件、材料/SKU、状态、节点、期间及保管方分组，真实物理量各汇总一次。汇总前匹配同身份内部交接对。保留未归一化分子，最终仅除以同一正的 A 一次。组合总量与其组成分项不得相加。 | kg；m2；kWh；h 分别记录于类型明确的字段，不能跨量纲相加 | 每次接收、领出、使用、修正、去向及电表/服务边界；每个报告截止点和最终批次结束均盘存 | 覆盖从已放行进入到最终验收的全部真实批次时间，跨所有报告期间，并包含实际所有权下的闲置和返工区间 | 指定过程节点、批次、墙板、材料/状态、保管位置及真实共享服务用户集合 | per reference flow | 供应商批次/说明和项目设计；秤/表校准及原始单位换算；保管权/签收和废物票据；服务合同及合格用户记录；实际水状态证据、部件完整性及签字测量验收。必须有来源输出/份额核对、同状态整件或组成换算证据以及零角色池的真实未发生证据。 |
| `cp_lay_joint` | `lay_joint` | 由 lay_joint 拥有的全部物理交换及接口角色 | 带时间戳的材料、保管权、几何、水状态、电表及服务事件账 | `lay_joint_lot_id`; `lay_joint_event_id`; `lay_joint_physical_event_id`; `lay_joint_record_revision`; `lay_joint_period_id`; `lay_joint_timestamp_start`; `lay_joint_timestamp_end`; `lay_joint_material_id`; `lay_joint_sku_id`; `lay_joint_state_id`; `lay_joint_custodian_from`; `lay_joint_custodian_to`; `lay_joint_sublocation_id`; `lay_joint_surface_id`; `lay_joint_component_schedule_ref`; `lay_joint_design_release_ref`; `lay_joint_supplier_instruction_ref`; `lay_joint_acceptance_ref`; `lay_joint_rework_parent_event_id`; `lay_joint_disposition`; `lay_joint_evidence_ref`; `lay_joint_mass_uncertainty_kg`; `lay_joint_mass_pool_partition_ref`; `lay_joint_stock_custody_partition_ref`; `lay_joint_rework_route_ref`; `lay_joint_period_attribution_ref`; `bricks_received_quantity_kg`; `bricks_source_issue_id`; `bricks_material_id`; `bricks_state_id`; `bricks_custody_evidence`; `lay_mortar_actual_quantity`; `lay_mortar_native_unit`; `lay_mortar_mass_or_geometry_bridge`; `lay_mortar_actual_state`; `lay_mortar_measured_absence_evidence`; `lay_mortar_destination`; `restraint_components_received_quantity_kg`; `restraint_components_source_issue_id`; `restraint_components_material_id`; `restraint_components_state_id`; `restraint_components_custody_evidence`; `lay_water_opening_intact_kg`; `lay_water_external_receipts_kg`; `lay_water_closing_intact_all_locations_kg`; `lay_water_material_state_ref`; `lay_water_native_quantity_records`; `lay_water_same_sku_state_mass_bridge_ref`; `lay_water_custody_partition_ref`; `lay_water_upstream_coverage_ref`; `uncured_partition_actual_quantity`; `uncured_partition_native_unit`; `uncured_partition_mass_or_geometry_bridge`; `uncured_partition_actual_state`; `uncured_partition_measured_absence_evidence`; `uncured_partition_destination`; `lay_solid_waste_actual_quantity`; `lay_solid_waste_native_unit`; `lay_solid_waste_mass_or_geometry_bridge`; `lay_solid_waste_actual_state`; `lay_solid_waste_measured_absence_evidence`; `lay_solid_waste_destination`; `lay_wastewater_actual_quantity`; `lay_wastewater_native_unit`; `lay_wastewater_mass_or_geometry_bridge`; `lay_wastewater_actual_state`; `lay_wastewater_measured_absence_evidence`; `lay_wastewater_destination`; `lay_water_vapour_validated_evaporation_kg`; `lay_water_vapour_evaporation_method_ref`; `lay_water_vapour_pool_partition_ref`; `lay_water_vapour_uncertainty_kg`; `lay_direct_release_actual_quantity`; `lay_direct_release_native_unit`; `lay_direct_release_mass_or_geometry_bridge`; `lay_direct_release_actual_state`; `lay_direct_release_measured_absence_evidence`; `lay_direct_release_destination`; `lay_direct_release_substance`; `lay_direct_release_medium`; `lay_direct_release_direction`; `lay_direct_release_sampling_method`; `lay_direct_release_formulation_or_dust_composition`; `lay_direct_release_capture_fraction_evidence`; `lay_unused_return_actual_quantity`; `lay_unused_return_native_unit`; `lay_unused_return_mass_or_geometry_bridge`; `lay_unused_return_actual_state`; `lay_unused_return_measured_absence_evidence`; `lay_unused_return_destination`; `lay_joint_electricity_direct_reading_intervals`; `lay_joint_electricity_master_reading_intervals`; `lay_joint_electricity_inside_master_assigned_intervals`; `lay_joint_electricity_outside_master_assigned_intervals`; `lay_joint_electricity_residual_consumer_weights`; `lay_joint_electricity_meter_topology_ref`; `lay_joint_electricity_conversion_factor_ref`; `lay_joint_electricity_interval_completeness_ref`; `lay_joint_access_service_direct_service_intervals`; `lay_joint_access_service_master_service_intervals`; `lay_joint_access_service_inside_master_assigned_intervals`; `lay_joint_access_service_outside_master_assigned_intervals`; `lay_joint_access_service_residual_consumer_weights`; `lay_joint_access_service_contract_unit_ref`; `lay_joint_access_service_service_owner_ref`; `lay_joint_access_service_period_completeness_ref`; `physical_interface_construction_feed_actual_geometry`; `physical_interface_construction_feed_surface_panel_ids`; `physical_interface_construction_feed_upstream_state`; `physical_interface_construction_feed_handoff_evidence`; `lay_joint_packaging_feed_actual_mass_kg`; `lay_joint_packaging_feed_source_issue_id`; `lay_joint_packaging_feed_material_composition`; `lay_joint_packaging_feed_current_state`; `lay_joint_packaging_feed_custody_event_id`; `uncured_partition_measured_component_mass_records`; `uncured_partition_same_state_mass_bridge_ref`; `uncured_partition_whole_or_components_partition_ref`; `lay_joint_opening_processed_wip_records`; `lay_joint_closing_processed_wip_records`; `lay_joint_final_retained_mass_kg_absence_records`; `lay_joint_other_exclusive_transfer_absence_records`; `lay_joint_unused_fresh_exit_water_portion_records`; `lay_joint_internal_received_water_portion_records`; `lay_joint_material_entry_water_portion_records`; `lay_joint_opening_processed_wip_water_records`; `lay_joint_closing_processed_wip_water_records`; `lay_joint_next_handoff_water_kg_water_portion_records`; `lay_joint_final_retained_bound_water_kg_absence_records`; `lay_joint_final_retained_free_water_kg_absence_records`; `lay_joint_solid_waste_water_kg_water_portion_records`; `lay_joint_aqueous_waste_water_kg_water_portion_records`; `lay_joint_direct_liquid_release_water_kg_water_portion_records`; `lay_joint_other_exclusive_water_exit_absence_records`; `bricks_source_umbrella_row_id`; `bricks_source_component_ledger_role`; `restraint_components_source_umbrella_row_id`; `restraint_components_source_component_ledger_role` | 每面墙板/每次作业匹配实际砖、湿砂浆、设计附属件和包装接收。记录实体基层放行、几何、切割方法、勾缝整饰、约束和封闭安装、供水、废物和释放。保留切损/边角料、不合格组装体去向及每个实际补救事件。把实际未养护墙体面积及组成/水状态交给验收，不形成额外材料采购。每项原始量保留原始单位和同身份/当前状态实测换算证据。电表读数差须有谱系及区间证据，服务记录须有真实供应方和合同边界。physical_event_id 与电子 record_revision 分开记录，只去除副本而保留真实修正。池谱系记录必须说明自身来源卡片及计算输出、物理事件、材料/SKU、当前含水状态、期间、同状态实测 kg 或实测份额比例、不确定度及唯一去向。在制品观测关联前一截止点或起源事件。墙体状态另行记录实测整件或组成质量，并与同一墙板/交接/验收状态对应，两种基础择一；面积不能进入 kg 运算。手工录入池汇总值不能替代上述谱系。按物理事件、材料/SKU、状态、节点、期间及保管方分组，真实物理量各汇总一次。汇总前匹配同身份内部交接对。保留未归一化分子，最终仅除以同一正的 A 一次。组合总量与其组成分项不得相加。既有资产观测角色：physical_interface_construction_feed。保留独立实测几何、表面/事件身份、当前状态及设计/放行/验收责任，不形成产品交换。仅对 lay_unused_return，原始未用可退出来源限实际接收的砖、附属部件、新供水及可重复使用包装。干预混料不是 lay_joint 投入，湿砂浆不能改称原始未用干料退出。真实新增干料或改变状态路线须明确审查范围/保管权，不推定采购或交接。 | kg；m2；kWh；h 分别记录于类型明确的字段，不能跨量纲相加 | 每次接收、领出、使用、修正、去向及电表/服务边界；每个报告截止点和最终批次结束均盘存 | 覆盖从已放行进入到最终验收的全部真实批次时间，跨所有报告期间，并包含实际所有权下的闲置和返工区间 | 指定过程节点、批次、墙板、材料/状态、保管位置及真实共享服务用户集合 | per reference flow | 供应商批次/说明和项目设计；秤/表校准及原始单位换算；保管权/签收和废物票据；服务合同及合格用户记录；实际水状态证据、部件完整性及签字测量验收。必须有来源输出/份额核对、同状态整件或组成换算证据以及零角色池的真实未发生证据。 |
| `cp_cure_accept` | `cure_accept` | 由 cure_accept 拥有的全部物理交换及接口角色 | 带时间戳的材料、保管权、几何、水状态、电表及服务事件账 | `cure_accept_lot_id`; `cure_accept_event_id`; `cure_accept_physical_event_id`; `cure_accept_record_revision`; `cure_accept_period_id`; `cure_accept_timestamp_start`; `cure_accept_timestamp_end`; `cure_accept_material_id`; `cure_accept_sku_id`; `cure_accept_state_id`; `cure_accept_custodian_from`; `cure_accept_custodian_to`; `cure_accept_sublocation_id`; `cure_accept_surface_id`; `cure_accept_component_schedule_ref`; `cure_accept_design_release_ref`; `cure_accept_supplier_instruction_ref`; `cure_accept_acceptance_ref`; `cure_accept_rework_parent_event_id`; `cure_accept_disposition`; `cure_accept_evidence_ref`; `cure_accept_mass_uncertainty_kg`; `cure_accept_mass_pool_partition_ref`; `cure_accept_stock_custody_partition_ref`; `cure_accept_rework_route_ref`; `cure_accept_period_attribution_ref`; `cure_accept_accepted_surface_polygons`; `cure_accept_opening_polygons`; `cure_accept_excluded_surface_polygons`; `cure_accept_geometry_unit_factor`; `cure_accept_final_acceptance_status`; `cure_accept_gate_component_completeness_ref`; `cure_wall_feed_actual_quantity`; `cure_wall_feed_native_unit`; `cure_wall_feed_mass_or_geometry_bridge`; `cure_wall_feed_actual_state`; `cure_wall_feed_measured_absence_evidence`; `cure_wall_feed_destination`; `protection_material_received_quantity_kg`; `protection_material_source_issue_id`; `protection_material_material_id`; `protection_material_state_id`; `protection_material_custody_evidence`; `cure_cleaning_material_received_quantity_kg`; `cure_cleaning_material_source_issue_id`; `cure_cleaning_material_material_id`; `cure_cleaning_material_state_id`; `cure_cleaning_material_custody_evidence`; `cure_water_opening_intact_kg`; `cure_water_external_receipts_kg`; `cure_water_closing_intact_all_locations_kg`; `cure_water_material_state_ref`; `cure_water_native_quantity_records`; `cure_water_same_sku_state_mass_bridge_ref`; `cure_water_custody_partition_ref`; `cure_water_upstream_coverage_ref`; `cure_solid_waste_actual_quantity`; `cure_solid_waste_native_unit`; `cure_solid_waste_mass_or_geometry_bridge`; `cure_solid_waste_actual_state`; `cure_solid_waste_measured_absence_evidence`; `cure_solid_waste_destination`; `cure_wastewater_actual_quantity`; `cure_wastewater_native_unit`; `cure_wastewater_mass_or_geometry_bridge`; `cure_wastewater_actual_state`; `cure_wastewater_measured_absence_evidence`; `cure_wastewater_destination`; `cure_water_vapour_validated_evaporation_kg`; `cure_water_vapour_evaporation_method_ref`; `cure_water_vapour_pool_partition_ref`; `cure_water_vapour_uncertainty_kg`; `cure_other_release_actual_quantity`; `cure_other_release_native_unit`; `cure_other_release_mass_or_geometry_bridge`; `cure_other_release_actual_state`; `cure_other_release_measured_absence_evidence`; `cure_other_release_destination`; `cure_other_release_substance`; `cure_other_release_medium`; `cure_other_release_direction`; `cure_other_release_sampling_method`; `cure_other_release_formulation_or_dust_composition`; `cure_other_release_capture_fraction_evidence`; `cure_other_release_outgoing_direction_evidence`; `cure_other_release_no_uptake_in_output_ref`; `cure_unused_return_actual_quantity`; `cure_unused_return_native_unit`; `cure_unused_return_mass_or_geometry_bridge`; `cure_unused_return_actual_state`; `cure_unused_return_measured_absence_evidence`; `cure_unused_return_destination`; `cure_accept_electricity_direct_reading_intervals`; `cure_accept_electricity_master_reading_intervals`; `cure_accept_electricity_inside_master_assigned_intervals`; `cure_accept_electricity_outside_master_assigned_intervals`; `cure_accept_electricity_residual_consumer_weights`; `cure_accept_electricity_meter_topology_ref`; `cure_accept_electricity_conversion_factor_ref`; `cure_accept_electricity_interval_completeness_ref`; `cure_accept_access_service_direct_service_intervals`; `cure_accept_access_service_master_service_intervals`; `cure_accept_access_service_inside_master_assigned_intervals`; `cure_accept_access_service_outside_master_assigned_intervals`; `cure_accept_access_service_residual_consumer_weights`; `cure_accept_access_service_contract_unit_ref`; `cure_accept_access_service_service_owner_ref`; `cure_accept_access_service_period_completeness_ref`; `cure_accept_packaging_feed_actual_mass_kg`; `cure_accept_packaging_feed_source_issue_id`; `cure_accept_packaging_feed_material_composition`; `cure_accept_packaging_feed_current_state`; `cure_accept_packaging_feed_custody_event_id`; `cure_wall_feed_measured_component_mass_records`; `cure_wall_feed_same_state_mass_bridge_ref`; `cure_wall_feed_whole_or_components_partition_ref`; `accepted_partition_service_measured_component_mass_records`; `accepted_partition_service_same_state_mass_bridge_ref`; `accepted_partition_service_whole_or_components_partition_ref`; `cure_accept_opening_processed_wip_records`; `cure_accept_closing_processed_wip_records`; `cure_accept_next_material_handoff_kg_absence_records`; `cure_accept_other_exclusive_transfer_absence_records`; `cure_accept_unused_fresh_exit_water_portion_records`; `cure_accept_internal_received_water_portion_records`; `cure_accept_material_entry_water_portion_records`; `cure_accept_opening_processed_wip_water_records`; `cure_accept_closing_processed_wip_water_records`; `cure_accept_next_handoff_water_kg_absence_records`; `cure_accept_final_retained_bound_water_kg_water_portion_records`; `cure_accept_final_retained_free_water_kg_water_portion_records`; `cure_accept_solid_waste_water_kg_water_portion_records`; `cure_accept_aqueous_waste_water_kg_water_portion_records`; `cure_accept_direct_liquid_release_water_kg_water_portion_records`; `cure_accept_other_exclusive_water_exit_absence_records`; `protection_material_source_umbrella_row_id`; `protection_material_source_component_ledger_role`; `cure_cleaning_material_source_umbrella_row_id`; `cure_cleaning_material_source_component_ledger_role` | 遵循实际保护/养护和清洗程序，记录条件、临时支撑所有权、清洗/修补物以及每一次真实修正。匹配接收的未养护墙体状态和实际水池。对每项设计细部采集竣工证据及签字验收。A 仅测量最终验收的唯一表面；未解决作业仍有标识地保留为在制品。每项原始量保留原始单位和同身份/当前状态实测换算证据。电表读数差须有谱系及区间证据，服务记录须有真实供应方和合同边界。physical_event_id 与电子 record_revision 分开记录，只去除副本而保留真实修正。池谱系记录必须说明自身来源卡片及计算输出、物理事件、材料/SKU、当前含水状态、期间、同状态实测 kg 或实测份额比例、不确定度及唯一去向。在制品观测关联前一截止点或起源事件。墙体状态另行记录实测整件或组成质量，并与同一墙板/交接/验收状态对应，两种基础择一；面积不能进入 kg 运算。手工录入池汇总值不能替代上述谱系。按物理事件、材料/SKU、状态、节点、期间及保管方分组，真实物理量各汇总一次。汇总前匹配同身份内部交接对。保留未归一化分子，最终仅除以同一正的 A 一次。组合总量与其组成分项不得相加。 | kg；m2；kWh；h 分别记录于类型明确的字段，不能跨量纲相加 | 每次接收、领出、使用、修正、去向及电表/服务边界；每个报告截止点和最终批次结束均盘存 | 覆盖从已放行进入到最终验收的全部真实批次时间，跨所有报告期间，并包含实际所有权下的闲置和返工区间 | 指定过程节点、批次、墙板、材料/状态、保管位置及真实共享服务用户集合 | per reference flow | 供应商批次/说明和项目设计；秤/表校准及原始单位换算；保管权/签收和废物票据；服务合同及合格用户记录；实际水状态证据、部件完整性及签字测量验收。必须有来源输出/份额核对、同状态整件或组成换算证据以及零角色池的真实未发生证据。 |

### 计算规则

A 由 calc_accepted_area 生成。每个 actual_<row_id> 是以该卡片单位表示的未归一化物理分子，q_<row_id> 只将该分子除以 A 一次。静态卡片选择器为第6节 row_id，cp_ 输入标识自身节点协议。暂定范围不生成清单数量。标量输出保持来源卡片及类型明确池规则的单位，面积谱系标识绝不变成 kg 运算项。下列辅助定义也写入每个实际使用它的可解析计算规则。

| static_symbol | 定义 |
| --- | --- |
| EVENT_SUM | 使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 |
| METER_ASSIGN | 按真实读数差及换算因子计量，以拓扑和区间界定直接用电与合格总表残余。总表残余恰好扣除一次全部表内直接归属用户，表外直接用电不参与扣除。仅正残余可在完整合格用户及正权重分母下分摊。负数或未知残余阻断归属，须解决读数、区间、拓扑或服务证据，不能分摊、截零或变为信用。证明完整且残余恰为零时不需要权重；最终份额与实际总表/直接量只核对一次。 |
| SERVICE_ASSIGN | 按实际合同确定的直接服务可用量及同一服务边界内的合格残余归属，每个用户和期间只核对一次，包含真实拥有的闲置及修补时间。所有同边界直接归属先扣一次，边界外直接服务不扣。仅正残余可按完整合格用户及正权重分母分摊；负数或未知残余阻断归属，不能分摊、截零或变为信用。证明完整且残余恰为零时无需权重。不得用人工、假定班次或资产寿命替代服务。 |
| UNION_AREA | 根据真实测量单位证据，将唯一已验收单一墙平面表面的并集面积减去洞口及排除/未验收多边形，各扣一次并换算为 m2。 |
| PORTION_MASS | 仅从指定来源卡片未归一化 kg 输出中选取记录明确且互斥的材料/事件/状态份额。份额记录必须声明 source_card_id、source_calc_output、physical_event_id、材料/SKU、当前状态、期间、实测份额 kg 或比例及其方法/不确定度，以及唯一去向。分项须与来源输出核对，未知份额阻断闭合。面积、组合体与其组成重复相加的值及已经归一化的值均不得进入 kg 运算。每一份额须非负且不超过其真实物理载体；同一载体中互斥份额之和也不得超过载体，不得用缺失值补零。 |
| WATER_PORTION | 遵守 PORTION_MASS 全部规则，仅返回同一来源事件、当前状态中的实测水 kg，明确结合/游离状态、介质及新水/加工水来源。湿废物总量不是纯水。同一来源质量的多个水池份额必须互斥；水含量未知仍是缺口。水份额不得超过物理载体，互斥水份额之和也不得超过载体。 |
| WALL_COMPONENT_MASS | 从来源面积卡片的关联记录取得另行实测的同一墙板、同一当前状态的整墙质量，或实测组成分项质量；只能择一。保留事件/墙板/批次及成对交接或最终验收证据，必须有整墙或组成互斥分组和实测换算证据。面积不能作为 kg 加项，不能使用假定密度或配方因子。来源面积输出仅识别几何。 |
| WIP_MASS | 按自身卡片、来源量/事件、材料/SKU/状态、期间及保管权汇总真实期初/期末加工库存观测。记录须关联上期末库存或本期留存事件，并排除已在毛领用量扣除的完整未领库存。墙体在制品须有同状态实测整墙或组成 kg 关系。数量或保管权未知会阻断闭合。 |
| WIP_WATER | 选取 WIP_MASS 使用的同一加工在制品记录内实测水含量，保持来源事件、当前状态和时点一致，区分结合/游离并保留不确定度。完整新水期末库存、交接水、最终验收保留水或其他退出池均不能再次计入。 |
| EVIDENCED_ZERO | 只有自身节点的未发生证据记录证明整个批次/期间确实没有该实际池时，才返回零。未知、缺失或非零记录会阻断闭合，并要求审查真实角色及路径；不得用平衡量掩盖。 |
| OBSERVED_GEOMETRY | 读取明确声明的观测角色及其自身协议原始几何/单位/当前状态记录，保留真实墙板/表面身份、独立实测 m2、放行/验收证据及同一事件的交出与接收责任。按真实接口事件、几何及状态匹配 physical_interface_release 与 physical_interface_construction_feed。几何或放行未知仍是阻断门槛的缺口，不能假定交接量为一。这里只观测既有资产，不形成产品交换、供应商采购、生产负荷、清单数量范围或 kg 贡献。 |
| EXCHANGE_COMPONENT_MASS | 对记录的实际交换键所标识的一个具体实例化交换，仅从原组件账中选取并汇总属于它的实测事件。交换键包含真实材料/SKU/组成、当前状态、physical_event_id 或批次内同 SKU/状态/具体身份且物理事件已去重的有记录汇总、身份解决后独立核实的具体 UUID、实际保管权/接收方；废物还包含相态、接收保管方及处理去向。选中事件份额须匹配来源组件输出，份额非负、不超过真实物理载体且互不重叠。返回的是该一个具体交换的 Mass/kg 分子，绝不是混合角色总量。只允许真实 kg 组件运算项，长度、面积、件数及既有接口观测不能在此相加；任何原始单位换算必须已经具备同 SKU/当前状态的实测质量关系。按真实安排展开为零个、一个或多个交换，不编造身份或数量。交换键、组件数量或保管权/去向未知仍是缺口。另行命名的角色诊断总量仅供核对，不是额外交换。 |

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_accepted_area` | cure_accept | A = UNION_AREA(cure_accept_accepted_surface_polygons, cure_accept_opening_polygons, cure_accept_excluded_surface_polygons, cure_accept_geometry_unit_factor)。仅在 cure_accept_final_acceptance_status 及 cure_accept_gate_component_completeness_ref 确认完成门槛后计算。求已验收单一墙平面表面多边形并集，洞口及未验收表面各排除一次，用实际测量尺度转换为 m2。A 必须为正；重复单据或修正次数不增加几何，但其真实物理负荷全部保留。 UNION_AREA 定义：根据真实测量单位证据，将唯一已验收单一墙平面表面的并集面积减去洞口及排除/未验收多边形，各扣一次并换算为 m2。 | `cure_accept_accepted_surface_polygons`; `cure_accept_opening_polygons`; `cure_accept_excluded_surface_polygons`; `cure_accept_geometry_unit_factor`; `cure_accept_final_acceptance_status`; `cure_accept_gate_component_completeness_ref`; `cp_cure_accept`; `UNION_AREA` | `A` |  |
| `calc_base_design_interface` | receive_setout | actual_base_design_interface = OBSERVED_GEOMETRY(base_design_interface, cp_receive_setout); q_base_design_interface = actual_base_design_interface/A. 该自身节点观测计算保留全部原始实测几何/单位/当前状态字段、表面/墙板身份、真实接口事件/接收方关联及放行/验收证据。它不是清单流、材料采购或生产交接负荷；面积保持 m2，不能进入 kg 闭合。观测量保持真实值，不固定为参考量；状态或几何未知会阻断设计门槛。 OBSERVED_GEOMETRY 定义：读取明确声明的观测角色及其自身协议原始几何/单位/当前状态记录，保留真实墙板/表面身份、独立实测 m2、放行/验收证据及同一事件的交出与接收责任。按真实接口事件、几何及状态匹配 physical_interface_release 与 physical_interface_construction_feed。几何或放行未知仍是阻断门槛的缺口，不能假定交接量为一。这里只观测既有资产，不形成产品交换、供应商采购、生产负荷、清单数量范围或 kg 贡献。 | `base_design_interface_actual_quantity`; `base_design_interface_native_unit`; `base_design_interface_mass_or_geometry_bridge`; `base_design_interface_actual_state`; `base_design_interface_measured_absence_evidence`; `base_design_interface_destination`; `cp_receive_setout`; `A`; `base_design_interface`; `OBSERVED_GEOMETRY` | `actual_base_design_interface`; `q_base_design_interface` | `bda-workmanship-2023` |
| `calc_receive_packaging` | receive_setout | actual_receive_packaging = receive_packaging_opening_intact_kg + receive_packaging_external_receipts_kg - receive_packaging_closing_intact_all_locations_kg; q_receive_packaging = actual_receive_packaging/A. 三项均用实际同 SKU/当前状态 kg 关系。完整期末库存覆盖收料保管权内所有位置，包括未领的后续批次物料；已领未用退出、废物及加工在制品互斥。毛量包含可用退出。负结果是账目矛盾，不能截为零。 | `receive_packaging_opening_intact_kg`; `receive_packaging_external_receipts_kg`; `receive_packaging_closing_intact_all_locations_kg`; `receive_packaging_material_state_ref`; `receive_packaging_native_quantity_records`; `receive_packaging_same_sku_state_mass_bridge_ref`; `receive_packaging_custody_partition_ref`; `receive_packaging_upstream_coverage_ref`; `cp_receive_setout`; `A` | `actual_receive_packaging`; `q_receive_packaging` | `bda-workmanship-2023` |
| `calc_receive_rejected_brick` | receive_setout | actual_receive_rejected_brick = EVENT_SUM(receive_rejected_brick, cp_receive_setout); q_receive_rejected_brick = actual_receive_rejected_brick/A. 按该组件账全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 receive_rejected_brick 选择器现为 receive_material_waste 内原有按材料/SKU/当前状态区分的组件账，不是独立清单卡。保留其物理事件、数量、相态/去向及保管权证据，具体交换只在集合角色中实例化一次。禁止集合与组件重复交换、重复采购或信用。 actual_receive_material_waste = EXCHANGE_COMPONENT_MASS(receive_material_waste_actual_component_exchange_records, receive_material_waste_actual_exchange_key, actual_receive_rejected_brick, actual_receive_nonbrick_material_waste); q_receive_material_waste = actual_receive_material_waste/A; diagnostic_total_receive_material_waste = actual_receive_rejected_brick + actual_receive_nonbrick_material_waste. 实际分子及归一化数量仅用于所选的一个真实 SKU/状态/具体身份交换。另行命名的诊断和仅为互斥真实同 SKU/当前状态组件事件的核对视图，不是混合产品/废物身份或额外交换。receive_material_waste_actual_component_exchange_records 须逐项标识具体材料/SKU/状态、实测 kg、真实事件/相态/去向、保管权/接收方、独立核实的具体 UUID 或明确身份缺口，以及匹配的原组件账角色。将该安排与两个原组件输出核对；未知或未匹配组件阻断对应交接/废物结论。不得自动假定任一组件数量、将集合与组成相加、重复采购。 EXCHANGE_COMPONENT_MASS 定义：对记录的实际交换键所标识的一个具体实例化交换，仅从原组件账中选取并汇总属于它的实测事件。交换键包含真实材料/SKU/组成、当前状态、physical_event_id 或批次内同 SKU/状态/具体身份且物理事件已去重的有记录汇总、身份解决后独立核实的具体 UUID、实际保管权/接收方；废物还包含相态、接收保管方及处理去向。选中事件份额须匹配来源组件输出，份额非负、不超过真实物理载体且互不重叠。返回的是该一个具体交换的 Mass/kg 分子，绝不是混合角色总量。只允许真实 kg 组件运算项，长度、面积、件数及既有接口观测不能在此相加；任何原始单位换算必须已经具备同 SKU/当前状态的实测质量关系。按真实安排展开为零个、一个或多个交换，不编造身份或数量。交换键、组件数量或保管权/去向未知仍是缺口。另行命名的角色诊断总量仅供核对，不是额外交换。 | `receive_rejected_brick_actual_quantity`; `receive_rejected_brick_native_unit`; `receive_rejected_brick_mass_or_geometry_bridge`; `receive_rejected_brick_actual_state`; `receive_rejected_brick_measured_absence_evidence`; `receive_rejected_brick_destination`; `cp_receive_setout`; `A`; `EVENT_SUM`; `receive_rejected_brick`; `actual_receive_nonbrick_material_waste`; `receive_material_waste_actual_component_exchange_records`; `receive_material_waste_actual_exchange_key`; `EXCHANGE_COMPONENT_MASS` | `actual_receive_rejected_brick`; `q_receive_rejected_brick`; `actual_receive_material_waste`; `q_receive_material_waste`; `diagnostic_total_receive_material_waste` | `bda-workmanship-2023` |
| `calc_receive_packaging_waste` | receive_setout | actual_receive_packaging_waste = EVENT_SUM(receive_packaging_waste, cp_receive_setout); q_receive_packaging_waste = actual_receive_packaging_waste/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `receive_packaging_waste_actual_quantity`; `receive_packaging_waste_native_unit`; `receive_packaging_waste_mass_or_geometry_bridge`; `receive_packaging_waste_actual_state`; `receive_packaging_waste_measured_absence_evidence`; `receive_packaging_waste_destination`; `cp_receive_setout`; `A`; `EVENT_SUM`; `receive_packaging_waste` | `actual_receive_packaging_waste`; `q_receive_packaging_waste` | `bda-workmanship-2023` |
| `calc_receive_unused_return` | receive_setout | actual_receive_unused_return = EVENT_SUM(receive_unused_return, cp_receive_setout); q_receive_unused_return = actual_receive_unused_return/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。正的原始未用退出须按供应商退回或外部可用转移归类，排除废物、库存及在制品。保留全部施工/返工负荷，不产生避免生产信用。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `receive_unused_return_actual_quantity`; `receive_unused_return_native_unit`; `receive_unused_return_mass_or_geometry_bridge`; `receive_unused_return_actual_state`; `receive_unused_return_measured_absence_evidence`; `receive_unused_return_destination`; `cp_receive_setout`; `A`; `EVENT_SUM`; `receive_unused_return` | `actual_receive_unused_return`; `q_receive_unused_return` | `bda-workmanship-2023` |
| `calc_receive_setout_electricity` | receive_setout | actual_receive_setout_electricity = METER_ASSIGN(receive_setout_electricity_direct_reading_intervals, receive_setout_electricity_master_reading_intervals, receive_setout_electricity_inside_master_assigned_intervals, receive_setout_electricity_outside_master_assigned_intervals, receive_setout_electricity_residual_consumer_weights, receive_setout_electricity_meter_topology_ref, receive_setout_electricity_conversion_factor_ref, receive_setout_electricity_interval_completeness_ref); q_receive_setout_electricity = actual_receive_setout_electricity/A. 将每段真实末读数减初读数换算后，拒绝重叠/缺失区间或错误上级表；总表内全部直接归属量扣一次，表外直接负荷不扣，仅归属合格残余。仅正残余可按完整合格用户及正权重分母、经审查的因果证据分摊。负数或未知残余阻断归属，须解决读数/区间/拓扑/服务证据，不能分摊、截零或转为信用。证明完整且残余恰为零时不需要权重；全部份额须与真实总量核对一次。 METER_ASSIGN 定义：按真实读数差及换算因子计量，以拓扑和区间界定直接用电与合格总表残余。总表残余恰好扣除一次全部表内直接归属用户，表外直接用电不参与扣除。仅正残余可在完整合格用户及正权重分母下分摊。负数或未知残余阻断归属，须解决读数、区间、拓扑或服务证据，不能分摊、截零或变为信用。证明完整且残余恰为零时不需要权重；最终份额与实际总表/直接量只核对一次。 | `receive_setout_electricity_direct_reading_intervals`; `receive_setout_electricity_master_reading_intervals`; `receive_setout_electricity_inside_master_assigned_intervals`; `receive_setout_electricity_outside_master_assigned_intervals`; `receive_setout_electricity_residual_consumer_weights`; `receive_setout_electricity_meter_topology_ref`; `receive_setout_electricity_conversion_factor_ref`; `receive_setout_electricity_interval_completeness_ref`; `cp_receive_setout`; `A`; `METER_ASSIGN` | `actual_receive_setout_electricity`; `q_receive_setout_electricity` | `bda-workmanship-2023` |
| `calc_receive_setout_access_service` | receive_setout | actual_receive_setout_access_service = SERVICE_ASSIGN(receive_setout_access_service_direct_service_intervals, receive_setout_access_service_master_service_intervals, receive_setout_access_service_inside_master_assigned_intervals, receive_setout_access_service_outside_master_assigned_intervals, receive_setout_access_service_residual_consumer_weights, receive_setout_access_service_contract_unit_ref, receive_setout_access_service_service_owner_ref, receive_setout_access_service_period_completeness_ref); q_receive_setout_access_service = actual_receive_setout_access_service/A. 采用实际合同规定的 h 服务可用量，包含本节点拥有的闲置及返工区间。同一服务内全部直接归属用户先扣一次，边界外直接服务不扣。不得用人工或假定班次替代可用性。仅正残余可按完整合格用户及正权重分母、经审查的因果证据分摊。负数或未知残余阻断归属，须解决读数/区间/拓扑/服务证据，不能分摊、截零或转为信用。证明完整且残余恰为零时不需要权重；全部份额须与真实总量核对一次。 SERVICE_ASSIGN 定义：按实际合同确定的直接服务可用量及同一服务边界内的合格残余归属，每个用户和期间只核对一次，包含真实拥有的闲置及修补时间。所有同边界直接归属先扣一次，边界外直接服务不扣。仅正残余可按完整合格用户及正权重分母分摊；负数或未知残余阻断归属，不能分摊、截零或变为信用。证明完整且残余恰为零时无需权重。不得用人工、假定班次或资产寿命替代服务。 | `receive_setout_access_service_direct_service_intervals`; `receive_setout_access_service_master_service_intervals`; `receive_setout_access_service_inside_master_assigned_intervals`; `receive_setout_access_service_outside_master_assigned_intervals`; `receive_setout_access_service_residual_consumer_weights`; `receive_setout_access_service_contract_unit_ref`; `receive_setout_access_service_service_owner_ref`; `receive_setout_access_service_period_completeness_ref`; `cp_receive_setout`; `A`; `SERVICE_ASSIGN` | `actual_receive_setout_access_service`; `q_receive_setout_access_service` | `bda-workmanship-2023` |
| `calc_dry_mortar` | mix_mortar | actual_dry_mortar = EVENT_SUM(dry_mortar, cp_mix_mortar); q_dry_mortar = actual_dry_mortar/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `dry_mortar_received_quantity_kg`; `dry_mortar_source_issue_id`; `dry_mortar_material_id`; `dry_mortar_state_id`; `dry_mortar_custody_evidence`; `cp_mix_mortar`; `A`; `EVENT_SUM`; `dry_mortar` | `actual_dry_mortar`; `q_dry_mortar` | `bda-mortar-2023` |
| `calc_mix_water` | mix_mortar | actual_mix_water = mix_water_opening_intact_kg + mix_water_external_receipts_kg - mix_water_closing_intact_all_locations_kg; q_mix_water = actual_mix_water/A. 三项均用实际同 SKU/当前状态 kg 关系。完整期末库存覆盖收料保管权内所有位置，包括未领的后续批次物料；已领未用退出、废物及加工在制品互斥。毛量包含可用退出。负结果是账目矛盾，不能截为零。 | `mix_water_opening_intact_kg`; `mix_water_external_receipts_kg`; `mix_water_closing_intact_all_locations_kg`; `mix_water_material_state_ref`; `mix_water_native_quantity_records`; `mix_water_same_sku_state_mass_bridge_ref`; `mix_water_custody_partition_ref`; `mix_water_upstream_coverage_ref`; `cp_mix_mortar`; `A` | `actual_mix_water`; `q_mix_water` | `bda-mortar-2023` |
| `calc_wet_mortar_feed` | mix_mortar | actual_wet_mortar_feed = EVENT_SUM(wet_mortar_feed, cp_mix_mortar); q_wet_mortar_feed = actual_wet_mortar_feed/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `wet_mortar_feed_actual_quantity`; `wet_mortar_feed_native_unit`; `wet_mortar_feed_mass_or_geometry_bridge`; `wet_mortar_feed_actual_state`; `wet_mortar_feed_measured_absence_evidence`; `wet_mortar_feed_destination`; `cp_mix_mortar`; `A`; `EVENT_SUM`; `wet_mortar_feed` | `actual_wet_mortar_feed`; `q_wet_mortar_feed` | `bda-mortar-2023` |
| `calc_mix_mortar_waste` | mix_mortar | actual_mix_mortar_waste = EVENT_SUM(mix_mortar_waste, cp_mix_mortar); q_mix_mortar_waste = actual_mix_mortar_waste/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `mix_mortar_waste_actual_quantity`; `mix_mortar_waste_native_unit`; `mix_mortar_waste_mass_or_geometry_bridge`; `mix_mortar_waste_actual_state`; `mix_mortar_waste_measured_absence_evidence`; `mix_mortar_waste_destination`; `cp_mix_mortar`; `A`; `EVENT_SUM`; `mix_mortar_waste` | `actual_mix_mortar_waste`; `q_mix_mortar_waste` | `bda-mortar-2023` |
| `calc_mix_wastewater` | mix_mortar | actual_mix_wastewater = EVENT_SUM(mix_wastewater, cp_mix_mortar); q_mix_wastewater = actual_mix_wastewater/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `mix_wastewater_actual_quantity`; `mix_wastewater_native_unit`; `mix_wastewater_mass_or_geometry_bridge`; `mix_wastewater_actual_state`; `mix_wastewater_measured_absence_evidence`; `mix_wastewater_destination`; `cp_mix_mortar`; `A`; `EVENT_SUM`; `mix_wastewater` | `actual_mix_wastewater`; `q_mix_wastewater` | `bda-mortar-2023` |
| `calc_mix_water_vapour` | mix_mortar | actual_mix_water_vapour = mix_water_vapour_validated_evaporation_kg; q_mix_water_vapour = actual_mix_water_vapour/A. 仅当 mix_water_vapour_evaporation_method_ref 和 mix_water_vapour_pool_partition_ref 证明该节点真实向未细分空气释放 H2O 时采用。独立用 calc_mix_mortar_water_closure 核对所有已声明水池。未解释水差额是缺口，绝不能替代该实测/经验证分子；结合/游离保留水和交接水属于互斥结束状态。 | `mix_water_vapour_validated_evaporation_kg`; `mix_water_vapour_evaporation_method_ref`; `mix_water_vapour_pool_partition_ref`; `mix_water_vapour_uncertainty_kg`; `cp_mix_mortar`; `A` | `actual_mix_water_vapour`; `q_mix_water_vapour` | `bda-mortar-2023` |
| `calc_mix_direct_release` | mix_mortar | actual_mix_direct_release = EVENT_SUM(mix_direct_release, cp_mix_mortar); q_mix_direct_release = actual_mix_direct_release/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。按真实向外物质及接收介质展开，集合总量和组成分项不得相加。输出不能表示吸收，不使用通用尘或假定碳化量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `mix_direct_release_actual_quantity`; `mix_direct_release_native_unit`; `mix_direct_release_mass_or_geometry_bridge`; `mix_direct_release_actual_state`; `mix_direct_release_measured_absence_evidence`; `mix_direct_release_destination`; `mix_direct_release_substance`; `mix_direct_release_medium`; `mix_direct_release_direction`; `mix_direct_release_sampling_method`; `mix_direct_release_formulation_or_dust_composition`; `mix_direct_release_capture_fraction_evidence`; `cp_mix_mortar`; `A`; `EVENT_SUM`; `mix_direct_release` | `actual_mix_direct_release`; `q_mix_direct_release` | `bda-mortar-2023` |
| `calc_mix_packaging_waste` | mix_mortar | actual_mix_packaging_waste = EVENT_SUM(mix_packaging_waste, cp_mix_mortar); q_mix_packaging_waste = actual_mix_packaging_waste/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `mix_packaging_waste_actual_quantity`; `mix_packaging_waste_native_unit`; `mix_packaging_waste_mass_or_geometry_bridge`; `mix_packaging_waste_actual_state`; `mix_packaging_waste_measured_absence_evidence`; `mix_packaging_waste_destination`; `cp_mix_mortar`; `A`; `EVENT_SUM`; `mix_packaging_waste` | `actual_mix_packaging_waste`; `q_mix_packaging_waste` | `bda-mortar-2023` |
| `calc_mix_unused_return` | mix_mortar | actual_mix_unused_return = EVENT_SUM(mix_unused_return, cp_mix_mortar); q_mix_unused_return = actual_mix_unused_return/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。正的原始未用退出须按供应商退回或外部可用转移归类，排除废物、库存及在制品。保留全部施工/返工负荷，不产生避免生产信用。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `mix_unused_return_actual_quantity`; `mix_unused_return_native_unit`; `mix_unused_return_mass_or_geometry_bridge`; `mix_unused_return_actual_state`; `mix_unused_return_measured_absence_evidence`; `mix_unused_return_destination`; `cp_mix_mortar`; `A`; `EVENT_SUM`; `mix_unused_return` | `actual_mix_unused_return`; `q_mix_unused_return` | `bda-mortar-2023` |
| `calc_mix_mortar_electricity` | mix_mortar | actual_mix_mortar_electricity = METER_ASSIGN(mix_mortar_electricity_direct_reading_intervals, mix_mortar_electricity_master_reading_intervals, mix_mortar_electricity_inside_master_assigned_intervals, mix_mortar_electricity_outside_master_assigned_intervals, mix_mortar_electricity_residual_consumer_weights, mix_mortar_electricity_meter_topology_ref, mix_mortar_electricity_conversion_factor_ref, mix_mortar_electricity_interval_completeness_ref); q_mix_mortar_electricity = actual_mix_mortar_electricity/A. 将每段真实末读数减初读数换算后，拒绝重叠/缺失区间或错误上级表；总表内全部直接归属量扣一次，表外直接负荷不扣，仅归属合格残余。仅正残余可按完整合格用户及正权重分母、经审查的因果证据分摊。负数或未知残余阻断归属，须解决读数/区间/拓扑/服务证据，不能分摊、截零或转为信用。证明完整且残余恰为零时不需要权重；全部份额须与真实总量核对一次。 METER_ASSIGN 定义：按真实读数差及换算因子计量，以拓扑和区间界定直接用电与合格总表残余。总表残余恰好扣除一次全部表内直接归属用户，表外直接用电不参与扣除。仅正残余可在完整合格用户及正权重分母下分摊。负数或未知残余阻断归属，须解决读数、区间、拓扑或服务证据，不能分摊、截零或变为信用。证明完整且残余恰为零时不需要权重；最终份额与实际总表/直接量只核对一次。 | `mix_mortar_electricity_direct_reading_intervals`; `mix_mortar_electricity_master_reading_intervals`; `mix_mortar_electricity_inside_master_assigned_intervals`; `mix_mortar_electricity_outside_master_assigned_intervals`; `mix_mortar_electricity_residual_consumer_weights`; `mix_mortar_electricity_meter_topology_ref`; `mix_mortar_electricity_conversion_factor_ref`; `mix_mortar_electricity_interval_completeness_ref`; `cp_mix_mortar`; `A`; `METER_ASSIGN` | `actual_mix_mortar_electricity`; `q_mix_mortar_electricity` | `bda-mortar-2023` |
| `calc_mix_mortar_access_service` | mix_mortar | actual_mix_mortar_access_service = SERVICE_ASSIGN(mix_mortar_access_service_direct_service_intervals, mix_mortar_access_service_master_service_intervals, mix_mortar_access_service_inside_master_assigned_intervals, mix_mortar_access_service_outside_master_assigned_intervals, mix_mortar_access_service_residual_consumer_weights, mix_mortar_access_service_contract_unit_ref, mix_mortar_access_service_service_owner_ref, mix_mortar_access_service_period_completeness_ref); q_mix_mortar_access_service = actual_mix_mortar_access_service/A. 采用实际合同规定的 h 服务可用量，包含本节点拥有的闲置及返工区间。同一服务内全部直接归属用户先扣一次，边界外直接服务不扣。不得用人工或假定班次替代可用性。仅正残余可按完整合格用户及正权重分母、经审查的因果证据分摊。负数或未知残余阻断归属，须解决读数/区间/拓扑/服务证据，不能分摊、截零或转为信用。证明完整且残余恰为零时不需要权重；全部份额须与真实总量核对一次。 SERVICE_ASSIGN 定义：按实际合同确定的直接服务可用量及同一服务边界内的合格残余归属，每个用户和期间只核对一次，包含真实拥有的闲置及修补时间。所有同边界直接归属先扣一次，边界外直接服务不扣。仅正残余可按完整合格用户及正权重分母分摊；负数或未知残余阻断归属，不能分摊、截零或变为信用。证明完整且残余恰为零时无需权重。不得用人工、假定班次或资产寿命替代服务。 | `mix_mortar_access_service_direct_service_intervals`; `mix_mortar_access_service_master_service_intervals`; `mix_mortar_access_service_inside_master_assigned_intervals`; `mix_mortar_access_service_outside_master_assigned_intervals`; `mix_mortar_access_service_residual_consumer_weights`; `mix_mortar_access_service_contract_unit_ref`; `mix_mortar_access_service_service_owner_ref`; `mix_mortar_access_service_period_completeness_ref`; `cp_mix_mortar`; `A`; `SERVICE_ASSIGN` | `actual_mix_mortar_access_service`; `q_mix_mortar_access_service` | `bda-mortar-2023` |
| `calc_bricks` | lay_joint | actual_bricks = EVENT_SUM(bricks, cp_lay_joint); q_bricks = actual_bricks/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。接收谱系必须指向 issue_materials_lay_joint 内 issue_bricks 组件，按实测同 SKU/状态数量和真实保管事件匹配，不能采用集合总量代替每个组件或重复采购。 | `bricks_received_quantity_kg`; `bricks_source_issue_id`; `bricks_material_id`; `bricks_state_id`; `bricks_custody_evidence`; `cp_lay_joint`; `A`; `EVENT_SUM`; `bricks`; `bricks_source_umbrella_row_id`; `bricks_source_component_ledger_role` | `actual_bricks`; `q_bricks` | `bda-workmanship-2023` |
| `calc_lay_mortar` | lay_joint | actual_lay_mortar = EVENT_SUM(lay_mortar, cp_lay_joint); q_lay_mortar = actual_lay_mortar/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `lay_mortar_actual_quantity`; `lay_mortar_native_unit`; `lay_mortar_mass_or_geometry_bridge`; `lay_mortar_actual_state`; `lay_mortar_measured_absence_evidence`; `lay_mortar_destination`; `cp_lay_joint`; `A`; `EVENT_SUM`; `lay_mortar` | `actual_lay_mortar`; `q_lay_mortar` | `bda-workmanship-2023` |
| `calc_restraint_components` | lay_joint | actual_restraint_components = EVENT_SUM(restraint_components, cp_lay_joint); q_restraint_components = actual_restraint_components/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。接收谱系必须指向 issue_materials_lay_joint 内 issue_restraint_components 组件，按实测同 SKU/状态数量和真实保管事件匹配，不能采用集合总量代替每个组件或重复采购。 | `restraint_components_received_quantity_kg`; `restraint_components_source_issue_id`; `restraint_components_material_id`; `restraint_components_state_id`; `restraint_components_custody_evidence`; `cp_lay_joint`; `A`; `EVENT_SUM`; `restraint_components`; `restraint_components_source_umbrella_row_id`; `restraint_components_source_component_ledger_role` | `actual_restraint_components`; `q_restraint_components` | `bda-workmanship-2023`; `ancon-restraint-interface` |
| `calc_lay_water` | lay_joint | actual_lay_water = lay_water_opening_intact_kg + lay_water_external_receipts_kg - lay_water_closing_intact_all_locations_kg; q_lay_water = actual_lay_water/A. 三项均用实际同 SKU/当前状态 kg 关系。完整期末库存覆盖收料保管权内所有位置，包括未领的后续批次物料；已领未用退出、废物及加工在制品互斥。毛量包含可用退出。负结果是账目矛盾，不能截为零。 | `lay_water_opening_intact_kg`; `lay_water_external_receipts_kg`; `lay_water_closing_intact_all_locations_kg`; `lay_water_material_state_ref`; `lay_water_native_quantity_records`; `lay_water_same_sku_state_mass_bridge_ref`; `lay_water_custody_partition_ref`; `lay_water_upstream_coverage_ref`; `cp_lay_joint`; `A` | `actual_lay_water`; `q_lay_water` | `bda-workmanship-2023` |
| `calc_uncured_partition` | lay_joint | actual_uncured_partition = EVENT_SUM(uncured_partition, cp_lay_joint); q_uncured_partition = actual_uncured_partition/A. 按该卡片全部原始字段及节点谱系，在 m2 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。实体几何仍为 Area/m2，不能作为 kg 观测。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `uncured_partition_actual_quantity`; `uncured_partition_native_unit`; `uncured_partition_mass_or_geometry_bridge`; `uncured_partition_actual_state`; `uncured_partition_measured_absence_evidence`; `uncured_partition_destination`; `cp_lay_joint`; `A`; `EVENT_SUM`; `uncured_partition`; `uncured_partition_measured_component_mass_records`; `uncured_partition_same_state_mass_bridge_ref`; `uncured_partition_whole_or_components_partition_ref` | `actual_uncured_partition`; `q_uncured_partition` | `bda-workmanship-2023` |
| `calc_lay_solid_waste` | lay_joint | actual_lay_solid_waste = EVENT_SUM(lay_solid_waste, cp_lay_joint); q_lay_solid_waste = actual_lay_solid_waste/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `lay_solid_waste_actual_quantity`; `lay_solid_waste_native_unit`; `lay_solid_waste_mass_or_geometry_bridge`; `lay_solid_waste_actual_state`; `lay_solid_waste_measured_absence_evidence`; `lay_solid_waste_destination`; `cp_lay_joint`; `A`; `EVENT_SUM`; `lay_solid_waste` | `actual_lay_solid_waste`; `q_lay_solid_waste` | `bda-workmanship-2023` |
| `calc_lay_wastewater` | lay_joint | actual_lay_wastewater = EVENT_SUM(lay_wastewater, cp_lay_joint); q_lay_wastewater = actual_lay_wastewater/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `lay_wastewater_actual_quantity`; `lay_wastewater_native_unit`; `lay_wastewater_mass_or_geometry_bridge`; `lay_wastewater_actual_state`; `lay_wastewater_measured_absence_evidence`; `lay_wastewater_destination`; `cp_lay_joint`; `A`; `EVENT_SUM`; `lay_wastewater` | `actual_lay_wastewater`; `q_lay_wastewater` | `bda-workmanship-2023` |
| `calc_lay_water_vapour` | lay_joint | actual_lay_water_vapour = lay_water_vapour_validated_evaporation_kg; q_lay_water_vapour = actual_lay_water_vapour/A. 仅当 lay_water_vapour_evaporation_method_ref 和 lay_water_vapour_pool_partition_ref 证明该节点真实向未细分空气释放 H2O 时采用。独立用 calc_lay_joint_water_closure 核对所有已声明水池。未解释水差额是缺口，绝不能替代该实测/经验证分子；结合/游离保留水和交接水属于互斥结束状态。 | `lay_water_vapour_validated_evaporation_kg`; `lay_water_vapour_evaporation_method_ref`; `lay_water_vapour_pool_partition_ref`; `lay_water_vapour_uncertainty_kg`; `cp_lay_joint`; `A` | `actual_lay_water_vapour`; `q_lay_water_vapour` | `bda-workmanship-2023` |
| `calc_lay_direct_release` | lay_joint | actual_lay_direct_release = EVENT_SUM(lay_direct_release, cp_lay_joint); q_lay_direct_release = actual_lay_direct_release/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。按真实向外物质及接收介质展开，集合总量和组成分项不得相加。输出不能表示吸收，不使用通用尘或假定碳化量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `lay_direct_release_actual_quantity`; `lay_direct_release_native_unit`; `lay_direct_release_mass_or_geometry_bridge`; `lay_direct_release_actual_state`; `lay_direct_release_measured_absence_evidence`; `lay_direct_release_destination`; `lay_direct_release_substance`; `lay_direct_release_medium`; `lay_direct_release_direction`; `lay_direct_release_sampling_method`; `lay_direct_release_formulation_or_dust_composition`; `lay_direct_release_capture_fraction_evidence`; `cp_lay_joint`; `A`; `EVENT_SUM`; `lay_direct_release` | `actual_lay_direct_release`; `q_lay_direct_release` | `bda-workmanship-2023` |
| `calc_lay_unused_return` | lay_joint | actual_lay_unused_return = EVENT_SUM(lay_unused_return, cp_lay_joint); q_lay_unused_return = actual_lay_unused_return/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。正的原始未用退出须按供应商退回或外部可用转移归类，排除废物、库存及在制品。保留全部施工/返工负荷，不产生避免生产信用。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。仅对 lay_unused_return，原始未用可退出来源限实际接收的砖、附属部件、新供水及可重复使用包装。干预混料不是 lay_joint 投入，湿砂浆不能改称原始未用干料退出。真实新增干料或改变状态路线须明确审查范围/保管权，不推定采购或交接。 | `lay_unused_return_actual_quantity`; `lay_unused_return_native_unit`; `lay_unused_return_mass_or_geometry_bridge`; `lay_unused_return_actual_state`; `lay_unused_return_measured_absence_evidence`; `lay_unused_return_destination`; `cp_lay_joint`; `A`; `EVENT_SUM`; `lay_unused_return` | `actual_lay_unused_return`; `q_lay_unused_return` | `bda-workmanship-2023` |
| `calc_lay_joint_electricity` | lay_joint | actual_lay_joint_electricity = METER_ASSIGN(lay_joint_electricity_direct_reading_intervals, lay_joint_electricity_master_reading_intervals, lay_joint_electricity_inside_master_assigned_intervals, lay_joint_electricity_outside_master_assigned_intervals, lay_joint_electricity_residual_consumer_weights, lay_joint_electricity_meter_topology_ref, lay_joint_electricity_conversion_factor_ref, lay_joint_electricity_interval_completeness_ref); q_lay_joint_electricity = actual_lay_joint_electricity/A. 将每段真实末读数减初读数换算后，拒绝重叠/缺失区间或错误上级表；总表内全部直接归属量扣一次，表外直接负荷不扣，仅归属合格残余。仅正残余可按完整合格用户及正权重分母、经审查的因果证据分摊。负数或未知残余阻断归属，须解决读数/区间/拓扑/服务证据，不能分摊、截零或转为信用。证明完整且残余恰为零时不需要权重；全部份额须与真实总量核对一次。 METER_ASSIGN 定义：按真实读数差及换算因子计量，以拓扑和区间界定直接用电与合格总表残余。总表残余恰好扣除一次全部表内直接归属用户，表外直接用电不参与扣除。仅正残余可在完整合格用户及正权重分母下分摊。负数或未知残余阻断归属，须解决读数、区间、拓扑或服务证据，不能分摊、截零或变为信用。证明完整且残余恰为零时不需要权重；最终份额与实际总表/直接量只核对一次。 | `lay_joint_electricity_direct_reading_intervals`; `lay_joint_electricity_master_reading_intervals`; `lay_joint_electricity_inside_master_assigned_intervals`; `lay_joint_electricity_outside_master_assigned_intervals`; `lay_joint_electricity_residual_consumer_weights`; `lay_joint_electricity_meter_topology_ref`; `lay_joint_electricity_conversion_factor_ref`; `lay_joint_electricity_interval_completeness_ref`; `cp_lay_joint`; `A`; `METER_ASSIGN` | `actual_lay_joint_electricity`; `q_lay_joint_electricity` | `bda-workmanship-2023` |
| `calc_lay_joint_access_service` | lay_joint | actual_lay_joint_access_service = SERVICE_ASSIGN(lay_joint_access_service_direct_service_intervals, lay_joint_access_service_master_service_intervals, lay_joint_access_service_inside_master_assigned_intervals, lay_joint_access_service_outside_master_assigned_intervals, lay_joint_access_service_residual_consumer_weights, lay_joint_access_service_contract_unit_ref, lay_joint_access_service_service_owner_ref, lay_joint_access_service_period_completeness_ref); q_lay_joint_access_service = actual_lay_joint_access_service/A. 采用实际合同规定的 h 服务可用量，包含本节点拥有的闲置及返工区间。同一服务内全部直接归属用户先扣一次，边界外直接服务不扣。不得用人工或假定班次替代可用性。仅正残余可按完整合格用户及正权重分母、经审查的因果证据分摊。负数或未知残余阻断归属，须解决读数/区间/拓扑/服务证据，不能分摊、截零或转为信用。证明完整且残余恰为零时不需要权重；全部份额须与真实总量核对一次。 SERVICE_ASSIGN 定义：按实际合同确定的直接服务可用量及同一服务边界内的合格残余归属，每个用户和期间只核对一次，包含真实拥有的闲置及修补时间。所有同边界直接归属先扣一次，边界外直接服务不扣。仅正残余可按完整合格用户及正权重分母分摊；负数或未知残余阻断归属，不能分摊、截零或变为信用。证明完整且残余恰为零时无需权重。不得用人工、假定班次或资产寿命替代服务。 | `lay_joint_access_service_direct_service_intervals`; `lay_joint_access_service_master_service_intervals`; `lay_joint_access_service_inside_master_assigned_intervals`; `lay_joint_access_service_outside_master_assigned_intervals`; `lay_joint_access_service_residual_consumer_weights`; `lay_joint_access_service_contract_unit_ref`; `lay_joint_access_service_service_owner_ref`; `lay_joint_access_service_period_completeness_ref`; `cp_lay_joint`; `A`; `SERVICE_ASSIGN` | `actual_lay_joint_access_service`; `q_lay_joint_access_service` | `bda-workmanship-2023` |
| `calc_cure_wall_feed` | cure_accept | actual_cure_wall_feed = EVENT_SUM(cure_wall_feed, cp_cure_accept); q_cure_wall_feed = actual_cure_wall_feed/A. 按该卡片全部原始字段及节点谱系，在 m2 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。实体几何仍为 Area/m2，不能作为 kg 观测。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `cure_wall_feed_actual_quantity`; `cure_wall_feed_native_unit`; `cure_wall_feed_mass_or_geometry_bridge`; `cure_wall_feed_actual_state`; `cure_wall_feed_measured_absence_evidence`; `cure_wall_feed_destination`; `cp_cure_accept`; `A`; `EVENT_SUM`; `cure_wall_feed`; `cure_wall_feed_measured_component_mass_records`; `cure_wall_feed_same_state_mass_bridge_ref`; `cure_wall_feed_whole_or_components_partition_ref` | `actual_cure_wall_feed`; `q_cure_wall_feed` | `bda-workmanship-2023` |
| `calc_protection_material` | cure_accept | actual_protection_material = EVENT_SUM(protection_material, cp_cure_accept); q_protection_material = actual_protection_material/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。接收谱系必须指向 issue_materials_cure_accept 内 issue_protection_material 组件，按实测同 SKU/状态数量和真实保管事件匹配，不能采用集合总量代替每个组件或重复采购。 | `protection_material_received_quantity_kg`; `protection_material_source_issue_id`; `protection_material_material_id`; `protection_material_state_id`; `protection_material_custody_evidence`; `cp_cure_accept`; `A`; `EVENT_SUM`; `protection_material`; `protection_material_source_umbrella_row_id`; `protection_material_source_component_ledger_role` | `actual_protection_material`; `q_protection_material` | `bda-workmanship-2023` |
| `calc_cure_cleaning_material` | cure_accept | actual_cure_cleaning_material = EVENT_SUM(cure_cleaning_material, cp_cure_accept); q_cure_cleaning_material = actual_cure_cleaning_material/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。接收谱系必须指向 issue_materials_cure_accept 内 issue_cure_cleaning_material 组件，按实测同 SKU/状态数量和真实保管事件匹配，不能采用集合总量代替每个组件或重复采购。 | `cure_cleaning_material_received_quantity_kg`; `cure_cleaning_material_source_issue_id`; `cure_cleaning_material_material_id`; `cure_cleaning_material_state_id`; `cure_cleaning_material_custody_evidence`; `cp_cure_accept`; `A`; `EVENT_SUM`; `cure_cleaning_material`; `cure_cleaning_material_source_umbrella_row_id`; `cure_cleaning_material_source_component_ledger_role` | `actual_cure_cleaning_material`; `q_cure_cleaning_material` | `bda-workmanship-2023` |
| `calc_cure_water` | cure_accept | actual_cure_water = cure_water_opening_intact_kg + cure_water_external_receipts_kg - cure_water_closing_intact_all_locations_kg; q_cure_water = actual_cure_water/A. 三项均用实际同 SKU/当前状态 kg 关系。完整期末库存覆盖收料保管权内所有位置，包括未领的后续批次物料；已领未用退出、废物及加工在制品互斥。毛量包含可用退出。负结果是账目矛盾，不能截为零。 | `cure_water_opening_intact_kg`; `cure_water_external_receipts_kg`; `cure_water_closing_intact_all_locations_kg`; `cure_water_material_state_ref`; `cure_water_native_quantity_records`; `cure_water_same_sku_state_mass_bridge_ref`; `cure_water_custody_partition_ref`; `cure_water_upstream_coverage_ref`; `cp_cure_accept`; `A` | `actual_cure_water`; `q_cure_water` | `bda-workmanship-2023` |
| `calc_cure_solid_waste` | cure_accept | actual_cure_solid_waste = EVENT_SUM(cure_solid_waste, cp_cure_accept); q_cure_solid_waste = actual_cure_solid_waste/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `cure_solid_waste_actual_quantity`; `cure_solid_waste_native_unit`; `cure_solid_waste_mass_or_geometry_bridge`; `cure_solid_waste_actual_state`; `cure_solid_waste_measured_absence_evidence`; `cure_solid_waste_destination`; `cp_cure_accept`; `A`; `EVENT_SUM`; `cure_solid_waste` | `actual_cure_solid_waste`; `q_cure_solid_waste` | `bda-workmanship-2023` |
| `calc_cure_wastewater` | cure_accept | actual_cure_wastewater = EVENT_SUM(cure_wastewater, cp_cure_accept); q_cure_wastewater = actual_cure_wastewater/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `cure_wastewater_actual_quantity`; `cure_wastewater_native_unit`; `cure_wastewater_mass_or_geometry_bridge`; `cure_wastewater_actual_state`; `cure_wastewater_measured_absence_evidence`; `cure_wastewater_destination`; `cp_cure_accept`; `A`; `EVENT_SUM`; `cure_wastewater` | `actual_cure_wastewater`; `q_cure_wastewater` | `bda-workmanship-2023` |
| `calc_cure_water_vapour` | cure_accept | actual_cure_water_vapour = cure_water_vapour_validated_evaporation_kg; q_cure_water_vapour = actual_cure_water_vapour/A. 仅当 cure_water_vapour_evaporation_method_ref 和 cure_water_vapour_pool_partition_ref 证明该节点真实向未细分空气释放 H2O 时采用。独立用 calc_cure_accept_water_closure 核对所有已声明水池。未解释水差额是缺口，绝不能替代该实测/经验证分子；结合/游离保留水和交接水属于互斥结束状态。 | `cure_water_vapour_validated_evaporation_kg`; `cure_water_vapour_evaporation_method_ref`; `cure_water_vapour_pool_partition_ref`; `cure_water_vapour_uncertainty_kg`; `cp_cure_accept`; `A` | `actual_cure_water_vapour`; `q_cure_water_vapour` | `bda-workmanship-2023` |
| `calc_cure_other_release` | cure_accept | actual_cure_other_release = EVENT_SUM(cure_other_release, cp_cure_accept); q_cure_other_release = actual_cure_other_release/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。按真实向外物质及接收介质展开，集合总量和组成分项不得相加。输出不能表示吸收，不使用通用尘或假定碳化量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `cure_other_release_actual_quantity`; `cure_other_release_native_unit`; `cure_other_release_mass_or_geometry_bridge`; `cure_other_release_actual_state`; `cure_other_release_measured_absence_evidence`; `cure_other_release_destination`; `cure_other_release_substance`; `cure_other_release_medium`; `cure_other_release_direction`; `cure_other_release_sampling_method`; `cure_other_release_formulation_or_dust_composition`; `cure_other_release_capture_fraction_evidence`; `cure_other_release_outgoing_direction_evidence`; `cure_other_release_no_uptake_in_output_ref`; `cp_cure_accept`; `A`; `EVENT_SUM`; `cure_other_release` | `actual_cure_other_release`; `q_cure_other_release` | `bda-workmanship-2023` |
| `calc_cure_unused_return` | cure_accept | actual_cure_unused_return = EVENT_SUM(cure_unused_return, cp_cure_accept); q_cure_unused_return = actual_cure_unused_return/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。正的原始未用退出须按供应商退回或外部可用转移归类，排除废物、库存及在制品。保留全部施工/返工负荷，不产生避免生产信用。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `cure_unused_return_actual_quantity`; `cure_unused_return_native_unit`; `cure_unused_return_mass_or_geometry_bridge`; `cure_unused_return_actual_state`; `cure_unused_return_measured_absence_evidence`; `cure_unused_return_destination`; `cp_cure_accept`; `A`; `EVENT_SUM`; `cure_unused_return` | `actual_cure_unused_return`; `q_cure_unused_return` | `bda-workmanship-2023` |
| `calc_accepted_partition_service` | cure_accept | actual_accepted_partition_service = A; q_accepted_partition_service = A/A = 1. 必须 A > 0 且最终几何/设计验收有证据。物理面积为唯一验收并集，不能按砌筑或修正次数累加。 | `cure_accept_accepted_surface_polygons`; `cure_accept_opening_polygons`; `cure_accept_excluded_surface_polygons`; `cure_accept_geometry_unit_factor`; `cure_accept_final_acceptance_status`; `cure_accept_gate_component_completeness_ref`; `cp_cure_accept`; `A`; `accepted_partition_service_measured_component_mass_records`; `accepted_partition_service_same_state_mass_bridge_ref`; `accepted_partition_service_whole_or_components_partition_ref` | `actual_accepted_partition_service`; `q_accepted_partition_service` | `bda-workmanship-2023` |
| `calc_cure_accept_electricity` | cure_accept | actual_cure_accept_electricity = METER_ASSIGN(cure_accept_electricity_direct_reading_intervals, cure_accept_electricity_master_reading_intervals, cure_accept_electricity_inside_master_assigned_intervals, cure_accept_electricity_outside_master_assigned_intervals, cure_accept_electricity_residual_consumer_weights, cure_accept_electricity_meter_topology_ref, cure_accept_electricity_conversion_factor_ref, cure_accept_electricity_interval_completeness_ref); q_cure_accept_electricity = actual_cure_accept_electricity/A. 将每段真实末读数减初读数换算后，拒绝重叠/缺失区间或错误上级表；总表内全部直接归属量扣一次，表外直接负荷不扣，仅归属合格残余。仅正残余可按完整合格用户及正权重分母、经审查的因果证据分摊。负数或未知残余阻断归属，须解决读数/区间/拓扑/服务证据，不能分摊、截零或转为信用。证明完整且残余恰为零时不需要权重；全部份额须与真实总量核对一次。 METER_ASSIGN 定义：按真实读数差及换算因子计量，以拓扑和区间界定直接用电与合格总表残余。总表残余恰好扣除一次全部表内直接归属用户，表外直接用电不参与扣除。仅正残余可在完整合格用户及正权重分母下分摊。负数或未知残余阻断归属，须解决读数、区间、拓扑或服务证据，不能分摊、截零或变为信用。证明完整且残余恰为零时不需要权重；最终份额与实际总表/直接量只核对一次。 | `cure_accept_electricity_direct_reading_intervals`; `cure_accept_electricity_master_reading_intervals`; `cure_accept_electricity_inside_master_assigned_intervals`; `cure_accept_electricity_outside_master_assigned_intervals`; `cure_accept_electricity_residual_consumer_weights`; `cure_accept_electricity_meter_topology_ref`; `cure_accept_electricity_conversion_factor_ref`; `cure_accept_electricity_interval_completeness_ref`; `cp_cure_accept`; `A`; `METER_ASSIGN` | `actual_cure_accept_electricity`; `q_cure_accept_electricity` | `bda-workmanship-2023` |
| `calc_cure_accept_access_service` | cure_accept | actual_cure_accept_access_service = SERVICE_ASSIGN(cure_accept_access_service_direct_service_intervals, cure_accept_access_service_master_service_intervals, cure_accept_access_service_inside_master_assigned_intervals, cure_accept_access_service_outside_master_assigned_intervals, cure_accept_access_service_residual_consumer_weights, cure_accept_access_service_contract_unit_ref, cure_accept_access_service_service_owner_ref, cure_accept_access_service_period_completeness_ref); q_cure_accept_access_service = actual_cure_accept_access_service/A. 采用实际合同规定的 h 服务可用量，包含本节点拥有的闲置及返工区间。同一服务内全部直接归属用户先扣一次，边界外直接服务不扣。不得用人工或假定班次替代可用性。仅正残余可按完整合格用户及正权重分母、经审查的因果证据分摊。负数或未知残余阻断归属，须解决读数/区间/拓扑/服务证据，不能分摊、截零或转为信用。证明完整且残余恰为零时不需要权重；全部份额须与真实总量核对一次。 SERVICE_ASSIGN 定义：按实际合同确定的直接服务可用量及同一服务边界内的合格残余归属，每个用户和期间只核对一次，包含真实拥有的闲置及修补时间。所有同边界直接归属先扣一次，边界外直接服务不扣。仅正残余可按完整合格用户及正权重分母分摊；负数或未知残余阻断归属，不能分摊、截零或变为信用。证明完整且残余恰为零时无需权重。不得用人工、假定班次或资产寿命替代服务。 | `cure_accept_access_service_direct_service_intervals`; `cure_accept_access_service_master_service_intervals`; `cure_accept_access_service_inside_master_assigned_intervals`; `cure_accept_access_service_outside_master_assigned_intervals`; `cure_accept_access_service_residual_consumer_weights`; `cure_accept_access_service_contract_unit_ref`; `cure_accept_access_service_service_owner_ref`; `cure_accept_access_service_period_completeness_ref`; `cp_cure_accept`; `A`; `SERVICE_ASSIGN` | `actual_cure_accept_access_service`; `q_cure_accept_access_service` | `bda-workmanship-2023` |
| `calc_receive_dry_mortar` | receive_setout | actual_receive_dry_mortar = receive_dry_mortar_opening_intact_kg + receive_dry_mortar_external_receipts_kg - receive_dry_mortar_closing_intact_all_locations_kg; q_receive_dry_mortar = actual_receive_dry_mortar/A. 三项均用实际同 SKU/当前状态 kg 关系。完整期末库存覆盖收料保管权内所有位置，包括未领的后续批次物料；已领未用退出、废物及加工在制品互斥。毛量包含可用退出。负结果是账目矛盾，不能截为零。 | `receive_dry_mortar_opening_intact_kg`; `receive_dry_mortar_external_receipts_kg`; `receive_dry_mortar_closing_intact_all_locations_kg`; `receive_dry_mortar_material_state_ref`; `receive_dry_mortar_native_quantity_records`; `receive_dry_mortar_same_sku_state_mass_bridge_ref`; `receive_dry_mortar_custody_partition_ref`; `receive_dry_mortar_upstream_coverage_ref`; `cp_receive_setout`; `A` | `actual_receive_dry_mortar`; `q_receive_dry_mortar` | `bda-workmanship-2023` |
| `calc_issue_dry_mortar` | receive_setout | actual_issue_dry_mortar = EVENT_SUM(issue_dry_mortar, cp_receive_setout); q_issue_dry_mortar = actual_issue_dry_mortar/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `issue_dry_mortar_actual_quantity_kg`; `issue_dry_mortar_event_id`; `issue_dry_mortar_material_id`; `issue_dry_mortar_state_id`; `issue_dry_mortar_custodian_from`; `issue_dry_mortar_custodian_to`; `issue_dry_mortar_receiving_node`; `issue_dry_mortar_handoff_evidence`; `cp_receive_setout`; `A`; `EVENT_SUM`; `issue_dry_mortar` | `actual_issue_dry_mortar`; `q_issue_dry_mortar` | `bda-workmanship-2023` |
| `calc_receive_bricks` | receive_setout | actual_receive_bricks = receive_bricks_opening_intact_kg + receive_bricks_external_receipts_kg - receive_bricks_closing_intact_all_locations_kg; q_receive_bricks = actual_receive_bricks/A. 三项均用实际同 SKU/当前状态 kg 关系。完整期末库存覆盖收料保管权内所有位置，包括未领的后续批次物料；已领未用退出、废物及加工在制品互斥。毛量包含可用退出。负结果是账目矛盾，不能截为零。 | `receive_bricks_opening_intact_kg`; `receive_bricks_external_receipts_kg`; `receive_bricks_closing_intact_all_locations_kg`; `receive_bricks_material_state_ref`; `receive_bricks_native_quantity_records`; `receive_bricks_same_sku_state_mass_bridge_ref`; `receive_bricks_custody_partition_ref`; `receive_bricks_upstream_coverage_ref`; `cp_receive_setout`; `A` | `actual_receive_bricks`; `q_receive_bricks` | `bda-workmanship-2023` |
| `calc_issue_bricks` | receive_setout | actual_issue_bricks = EVENT_SUM(issue_bricks, cp_receive_setout); q_issue_bricks = actual_issue_bricks/A. 按该组件账全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 issue_bricks 选择器现为 issue_materials_lay_joint 内原有按材料/SKU/当前状态区分的组件账，不是独立清单卡。保留其物理事件、数量、相态/去向及保管权证据，具体交换只在集合角色中实例化一次。禁止集合与组件重复交换、重复采购或信用。 actual_issue_materials_lay_joint = EXCHANGE_COMPONENT_MASS(issue_materials_lay_joint_actual_component_exchange_records, issue_materials_lay_joint_actual_exchange_key, actual_issue_bricks, actual_issue_restraint_components); q_issue_materials_lay_joint = actual_issue_materials_lay_joint/A; diagnostic_total_issue_materials_lay_joint = actual_issue_bricks + actual_issue_restraint_components. 实际分子及归一化数量仅用于所选的一个真实 SKU/状态/具体身份交换。另行命名的诊断和仅为互斥真实同 SKU/当前状态组件事件的核对视图，不是混合产品/废物身份或额外交换。issue_materials_lay_joint_actual_component_exchange_records 须逐项标识具体材料/SKU/状态、实测 kg、真实事件/相态/去向、保管权/接收方、独立核实的具体 UUID 或明确身份缺口，以及匹配的原组件账角色。将该安排与两个原组件输出核对；未知或未匹配组件阻断对应交接/废物结论。不得自动假定任一组件数量、将集合与组成相加、重复采购。 EXCHANGE_COMPONENT_MASS 定义：对记录的实际交换键所标识的一个具体实例化交换，仅从原组件账中选取并汇总属于它的实测事件。交换键包含真实材料/SKU/组成、当前状态、physical_event_id 或批次内同 SKU/状态/具体身份且物理事件已去重的有记录汇总、身份解决后独立核实的具体 UUID、实际保管权/接收方；废物还包含相态、接收保管方及处理去向。选中事件份额须匹配来源组件输出，份额非负、不超过真实物理载体且互不重叠。返回的是该一个具体交换的 Mass/kg 分子，绝不是混合角色总量。只允许真实 kg 组件运算项，长度、面积、件数及既有接口观测不能在此相加；任何原始单位换算必须已经具备同 SKU/当前状态的实测质量关系。按真实安排展开为零个、一个或多个交换，不编造身份或数量。交换键、组件数量或保管权/去向未知仍是缺口。另行命名的角色诊断总量仅供核对，不是额外交换。 | `issue_bricks_actual_quantity_kg`; `issue_bricks_event_id`; `issue_bricks_material_id`; `issue_bricks_state_id`; `issue_bricks_custodian_from`; `issue_bricks_custodian_to`; `issue_bricks_receiving_node`; `issue_bricks_handoff_evidence`; `cp_receive_setout`; `A`; `EVENT_SUM`; `issue_bricks`; `actual_issue_restraint_components`; `issue_materials_lay_joint_actual_component_exchange_records`; `issue_materials_lay_joint_actual_exchange_key`; `EXCHANGE_COMPONENT_MASS` | `actual_issue_bricks`; `q_issue_bricks`; `actual_issue_materials_lay_joint`; `q_issue_materials_lay_joint`; `diagnostic_total_issue_materials_lay_joint` | `bda-workmanship-2023` |
| `calc_receive_restraint_components` | receive_setout | actual_receive_restraint_components = receive_restraint_components_opening_intact_kg + receive_restraint_components_external_receipts_kg - receive_restraint_components_closing_intact_all_locations_kg; q_receive_restraint_components = actual_receive_restraint_components/A. 三项均用实际同 SKU/当前状态 kg 关系。完整期末库存覆盖收料保管权内所有位置，包括未领的后续批次物料；已领未用退出、废物及加工在制品互斥。毛量包含可用退出。负结果是账目矛盾，不能截为零。 | `receive_restraint_components_opening_intact_kg`; `receive_restraint_components_external_receipts_kg`; `receive_restraint_components_closing_intact_all_locations_kg`; `receive_restraint_components_material_state_ref`; `receive_restraint_components_native_quantity_records`; `receive_restraint_components_same_sku_state_mass_bridge_ref`; `receive_restraint_components_custody_partition_ref`; `receive_restraint_components_upstream_coverage_ref`; `cp_receive_setout`; `A` | `actual_receive_restraint_components`; `q_receive_restraint_components` | `bda-workmanship-2023`; `ancon-restraint-interface` |
| `calc_issue_restraint_components` | receive_setout | actual_issue_restraint_components = EVENT_SUM(issue_restraint_components, cp_receive_setout); q_issue_restraint_components = actual_issue_restraint_components/A. 按该组件账全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 issue_restraint_components 选择器现为 issue_materials_lay_joint 内原有按材料/SKU/当前状态区分的组件账，不是独立清单卡。保留其物理事件、数量、相态/去向及保管权证据，具体交换只在集合角色中实例化一次。禁止集合与组件重复交换、重复采购或信用。 | `issue_restraint_components_actual_quantity_kg`; `issue_restraint_components_event_id`; `issue_restraint_components_material_id`; `issue_restraint_components_state_id`; `issue_restraint_components_custodian_from`; `issue_restraint_components_custodian_to`; `issue_restraint_components_receiving_node`; `issue_restraint_components_handoff_evidence`; `cp_receive_setout`; `A`; `EVENT_SUM`; `issue_restraint_components` | `actual_issue_restraint_components`; `q_issue_restraint_components` | `bda-workmanship-2023`; `ancon-restraint-interface` |
| `calc_receive_protection_material` | receive_setout | actual_receive_protection_material = receive_protection_material_opening_intact_kg + receive_protection_material_external_receipts_kg - receive_protection_material_closing_intact_all_locations_kg; q_receive_protection_material = actual_receive_protection_material/A. 三项均用实际同 SKU/当前状态 kg 关系。完整期末库存覆盖收料保管权内所有位置，包括未领的后续批次物料；已领未用退出、废物及加工在制品互斥。毛量包含可用退出。负结果是账目矛盾，不能截为零。 | `receive_protection_material_opening_intact_kg`; `receive_protection_material_external_receipts_kg`; `receive_protection_material_closing_intact_all_locations_kg`; `receive_protection_material_material_state_ref`; `receive_protection_material_native_quantity_records`; `receive_protection_material_same_sku_state_mass_bridge_ref`; `receive_protection_material_custody_partition_ref`; `receive_protection_material_upstream_coverage_ref`; `cp_receive_setout`; `A` | `actual_receive_protection_material`; `q_receive_protection_material` | `bda-workmanship-2023` |
| `calc_issue_protection_material` | receive_setout | actual_issue_protection_material = EVENT_SUM(issue_protection_material, cp_receive_setout); q_issue_protection_material = actual_issue_protection_material/A. 按该组件账全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 issue_protection_material 选择器现为 issue_materials_cure_accept 内原有按材料/SKU/当前状态区分的组件账，不是独立清单卡。保留其物理事件、数量、相态/去向及保管权证据，具体交换只在集合角色中实例化一次。禁止集合与组件重复交换、重复采购或信用。 actual_issue_materials_cure_accept = EXCHANGE_COMPONENT_MASS(issue_materials_cure_accept_actual_component_exchange_records, issue_materials_cure_accept_actual_exchange_key, actual_issue_protection_material, actual_issue_cure_cleaning_material); q_issue_materials_cure_accept = actual_issue_materials_cure_accept/A; diagnostic_total_issue_materials_cure_accept = actual_issue_protection_material + actual_issue_cure_cleaning_material. 实际分子及归一化数量仅用于所选的一个真实 SKU/状态/具体身份交换。另行命名的诊断和仅为互斥真实同 SKU/当前状态组件事件的核对视图，不是混合产品/废物身份或额外交换。issue_materials_cure_accept_actual_component_exchange_records 须逐项标识具体材料/SKU/状态、实测 kg、真实事件/相态/去向、保管权/接收方、独立核实的具体 UUID 或明确身份缺口，以及匹配的原组件账角色。将该安排与两个原组件输出核对；未知或未匹配组件阻断对应交接/废物结论。不得自动假定任一组件数量、将集合与组成相加、重复采购。 EXCHANGE_COMPONENT_MASS 定义：对记录的实际交换键所标识的一个具体实例化交换，仅从原组件账中选取并汇总属于它的实测事件。交换键包含真实材料/SKU/组成、当前状态、physical_event_id 或批次内同 SKU/状态/具体身份且物理事件已去重的有记录汇总、身份解决后独立核实的具体 UUID、实际保管权/接收方；废物还包含相态、接收保管方及处理去向。选中事件份额须匹配来源组件输出，份额非负、不超过真实物理载体且互不重叠。返回的是该一个具体交换的 Mass/kg 分子，绝不是混合角色总量。只允许真实 kg 组件运算项，长度、面积、件数及既有接口观测不能在此相加；任何原始单位换算必须已经具备同 SKU/当前状态的实测质量关系。按真实安排展开为零个、一个或多个交换，不编造身份或数量。交换键、组件数量或保管权/去向未知仍是缺口。另行命名的角色诊断总量仅供核对，不是额外交换。 | `issue_protection_material_actual_quantity_kg`; `issue_protection_material_event_id`; `issue_protection_material_material_id`; `issue_protection_material_state_id`; `issue_protection_material_custodian_from`; `issue_protection_material_custodian_to`; `issue_protection_material_receiving_node`; `issue_protection_material_handoff_evidence`; `cp_receive_setout`; `A`; `EVENT_SUM`; `issue_protection_material`; `actual_issue_cure_cleaning_material`; `issue_materials_cure_accept_actual_component_exchange_records`; `issue_materials_cure_accept_actual_exchange_key`; `EXCHANGE_COMPONENT_MASS` | `actual_issue_protection_material`; `q_issue_protection_material`; `actual_issue_materials_cure_accept`; `q_issue_materials_cure_accept`; `diagnostic_total_issue_materials_cure_accept` | `bda-workmanship-2023` |
| `calc_receive_cure_cleaning_material` | receive_setout | actual_receive_cure_cleaning_material = receive_cure_cleaning_material_opening_intact_kg + receive_cure_cleaning_material_external_receipts_kg - receive_cure_cleaning_material_closing_intact_all_locations_kg; q_receive_cure_cleaning_material = actual_receive_cure_cleaning_material/A. 三项均用实际同 SKU/当前状态 kg 关系。完整期末库存覆盖收料保管权内所有位置，包括未领的后续批次物料；已领未用退出、废物及加工在制品互斥。毛量包含可用退出。负结果是账目矛盾，不能截为零。 | `receive_cure_cleaning_material_opening_intact_kg`; `receive_cure_cleaning_material_external_receipts_kg`; `receive_cure_cleaning_material_closing_intact_all_locations_kg`; `receive_cure_cleaning_material_material_state_ref`; `receive_cure_cleaning_material_native_quantity_records`; `receive_cure_cleaning_material_same_sku_state_mass_bridge_ref`; `receive_cure_cleaning_material_custody_partition_ref`; `receive_cure_cleaning_material_upstream_coverage_ref`; `cp_receive_setout`; `A` | `actual_receive_cure_cleaning_material`; `q_receive_cure_cleaning_material` | `bda-workmanship-2023` |
| `calc_issue_cure_cleaning_material` | receive_setout | actual_issue_cure_cleaning_material = EVENT_SUM(issue_cure_cleaning_material, cp_receive_setout); q_issue_cure_cleaning_material = actual_issue_cure_cleaning_material/A. 按该组件账全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 issue_cure_cleaning_material 选择器现为 issue_materials_cure_accept 内原有按材料/SKU/当前状态区分的组件账，不是独立清单卡。保留其物理事件、数量、相态/去向及保管权证据，具体交换只在集合角色中实例化一次。禁止集合与组件重复交换、重复采购或信用。 | `issue_cure_cleaning_material_actual_quantity_kg`; `issue_cure_cleaning_material_event_id`; `issue_cure_cleaning_material_material_id`; `issue_cure_cleaning_material_state_id`; `issue_cure_cleaning_material_custodian_from`; `issue_cure_cleaning_material_custodian_to`; `issue_cure_cleaning_material_receiving_node`; `issue_cure_cleaning_material_handoff_evidence`; `cp_receive_setout`; `A`; `EVENT_SUM`; `issue_cure_cleaning_material` | `actual_issue_cure_cleaning_material`; `q_issue_cure_cleaning_material` | `bda-workmanship-2023` |
| `calc_physical_interface_release` | receive_setout | actual_physical_interface_release = OBSERVED_GEOMETRY(physical_interface_release, cp_receive_setout); q_physical_interface_release = actual_physical_interface_release/A. 该自身节点观测计算保留全部原始实测几何/单位/当前状态字段、表面/墙板身份、真实接口事件/接收方关联及放行/验收证据。它不是清单流、材料采购或生产交接负荷；面积保持 m2，不能进入 kg 闭合。观测量保持真实值，不固定为参考量；状态或几何未知会阻断设计门槛。 OBSERVED_GEOMETRY 定义：读取明确声明的观测角色及其自身协议原始几何/单位/当前状态记录，保留真实墙板/表面身份、独立实测 m2、放行/验收证据及同一事件的交出与接收责任。按真实接口事件、几何及状态匹配 physical_interface_release 与 physical_interface_construction_feed。几何或放行未知仍是阻断门槛的缺口，不能假定交接量为一。这里只观测既有资产，不形成产品交换、供应商采购、生产负荷、清单数量范围或 kg 贡献。 | `physical_interface_release_actual_geometry`; `physical_interface_release_surface_panel_ids`; `physical_interface_release_upstream_state`; `physical_interface_release_handoff_evidence`; `cp_receive_setout`; `A`; `physical_interface_release`; `OBSERVED_GEOMETRY` | `actual_physical_interface_release`; `q_physical_interface_release` | `bda-workmanship-2023` |
| `calc_physical_interface_construction_feed` | lay_joint | actual_physical_interface_construction_feed = OBSERVED_GEOMETRY(physical_interface_construction_feed, cp_lay_joint); q_physical_interface_construction_feed = actual_physical_interface_construction_feed/A. 该自身节点观测计算保留全部原始实测几何/单位/当前状态字段、表面/墙板身份、真实接口事件/接收方关联及放行/验收证据。它不是清单流、材料采购或生产交接负荷；面积保持 m2，不能进入 kg 闭合。观测量保持真实值，不固定为参考量；状态或几何未知会阻断设计门槛。 OBSERVED_GEOMETRY 定义：读取明确声明的观测角色及其自身协议原始几何/单位/当前状态记录，保留真实墙板/表面身份、独立实测 m2、放行/验收证据及同一事件的交出与接收责任。按真实接口事件、几何及状态匹配 physical_interface_release 与 physical_interface_construction_feed。几何或放行未知仍是阻断门槛的缺口，不能假定交接量为一。这里只观测既有资产，不形成产品交换、供应商采购、生产负荷、清单数量范围或 kg 贡献。 | `physical_interface_construction_feed_actual_geometry`; `physical_interface_construction_feed_surface_panel_ids`; `physical_interface_construction_feed_upstream_state`; `physical_interface_construction_feed_handoff_evidence`; `cp_lay_joint`; `A`; `physical_interface_construction_feed`; `OBSERVED_GEOMETRY` | `actual_physical_interface_construction_feed`; `q_physical_interface_construction_feed` | `bda-workmanship-2023` |
| `calc_issue_packaging_mix_mortar` | receive_setout | actual_issue_packaging_mix_mortar = EVENT_SUM(issue_packaging_mix_mortar, cp_receive_setout); q_issue_packaging_mix_mortar = actual_issue_packaging_mix_mortar/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `issue_packaging_mix_mortar_actual_mass_kg`; `issue_packaging_mix_mortar_material_composition`; `issue_packaging_mix_mortar_item_id`; `issue_packaging_mix_mortar_current_state`; `issue_packaging_mix_mortar_custody_event_id`; `issue_packaging_mix_mortar_recipient_node`; `issue_packaging_mix_mortar_upstream_dataset_boundary_evidence`; `cp_receive_setout`; `A`; `EVENT_SUM`; `issue_packaging_mix_mortar` | `actual_issue_packaging_mix_mortar`; `q_issue_packaging_mix_mortar` | `bda-workmanship-2023` |
| `calc_mix_mortar_packaging_feed` | mix_mortar | actual_mix_mortar_packaging_feed = EVENT_SUM(mix_mortar_packaging_feed, cp_mix_mortar); q_mix_mortar_packaging_feed = actual_mix_mortar_packaging_feed/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `mix_mortar_packaging_feed_actual_mass_kg`; `mix_mortar_packaging_feed_source_issue_id`; `mix_mortar_packaging_feed_material_composition`; `mix_mortar_packaging_feed_current_state`; `mix_mortar_packaging_feed_custody_event_id`; `cp_mix_mortar`; `A`; `EVENT_SUM`; `mix_mortar_packaging_feed` | `actual_mix_mortar_packaging_feed`; `q_mix_mortar_packaging_feed` | `bda-mortar-2023` |
| `calc_issue_packaging_lay_joint` | receive_setout | actual_issue_packaging_lay_joint = EVENT_SUM(issue_packaging_lay_joint, cp_receive_setout); q_issue_packaging_lay_joint = actual_issue_packaging_lay_joint/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `issue_packaging_lay_joint_actual_mass_kg`; `issue_packaging_lay_joint_material_composition`; `issue_packaging_lay_joint_item_id`; `issue_packaging_lay_joint_current_state`; `issue_packaging_lay_joint_custody_event_id`; `issue_packaging_lay_joint_recipient_node`; `issue_packaging_lay_joint_upstream_dataset_boundary_evidence`; `cp_receive_setout`; `A`; `EVENT_SUM`; `issue_packaging_lay_joint` | `actual_issue_packaging_lay_joint`; `q_issue_packaging_lay_joint` | `bda-workmanship-2023` |
| `calc_lay_joint_packaging_feed` | lay_joint | actual_lay_joint_packaging_feed = EVENT_SUM(lay_joint_packaging_feed, cp_lay_joint); q_lay_joint_packaging_feed = actual_lay_joint_packaging_feed/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `lay_joint_packaging_feed_actual_mass_kg`; `lay_joint_packaging_feed_source_issue_id`; `lay_joint_packaging_feed_material_composition`; `lay_joint_packaging_feed_current_state`; `lay_joint_packaging_feed_custody_event_id`; `cp_lay_joint`; `A`; `EVENT_SUM`; `lay_joint_packaging_feed` | `actual_lay_joint_packaging_feed`; `q_lay_joint_packaging_feed` | `bda-workmanship-2023` |
| `calc_issue_packaging_cure_accept` | receive_setout | actual_issue_packaging_cure_accept = EVENT_SUM(issue_packaging_cure_accept, cp_receive_setout); q_issue_packaging_cure_accept = actual_issue_packaging_cure_accept/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `issue_packaging_cure_accept_actual_mass_kg`; `issue_packaging_cure_accept_material_composition`; `issue_packaging_cure_accept_item_id`; `issue_packaging_cure_accept_current_state`; `issue_packaging_cure_accept_custody_event_id`; `issue_packaging_cure_accept_recipient_node`; `issue_packaging_cure_accept_upstream_dataset_boundary_evidence`; `cp_receive_setout`; `A`; `EVENT_SUM`; `issue_packaging_cure_accept` | `actual_issue_packaging_cure_accept`; `q_issue_packaging_cure_accept` | `bda-workmanship-2023` |
| `calc_cure_accept_packaging_feed` | cure_accept | actual_cure_accept_packaging_feed = EVENT_SUM(cure_accept_packaging_feed, cp_cure_accept); q_cure_accept_packaging_feed = actual_cure_accept_packaging_feed/A. 按该卡片全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 | `cure_accept_packaging_feed_actual_mass_kg`; `cure_accept_packaging_feed_source_issue_id`; `cure_accept_packaging_feed_material_composition`; `cure_accept_packaging_feed_current_state`; `cure_accept_packaging_feed_custody_event_id`; `cp_cure_accept`; `A`; `EVENT_SUM`; `cure_accept_packaging_feed` | `actual_cure_accept_packaging_feed`; `q_cure_accept_packaging_feed` | `bda-workmanship-2023` |
| `calc_receive_setout_mass_closure` | receive_setout | receive_setout_mass_gap_kg = receive_setout_opening_processed_wip_kg + receive_setout_fresh_external_draw_kg + receive_setout_material_internal_in_kg - receive_setout_final_retained_mass_kg - receive_setout_next_material_handoff_kg - receive_setout_material_discard_kg - receive_setout_aqueous_waste_kg - receive_setout_direct_release_kg - receive_setout_usable_exit_kg - receive_setout_closing_processed_wip_kg - receive_setout_other_exclusive_transfer_kg。全部池输入来自 calc_receive_setout_mass_pools，须按自身卡片/事件/份额谱系表核对；要求 receive_setout_mass_pool_partition_ref 并对照可追溯 receive_setout_mass_uncertainty_kg 判断差额。毛领用已扣所有完整期末库存一次，不能再扣。墙体同状态实测组成质量与 Area 观测分开。最终验收保留质量只计一次，不增加第二个客户交付质量。未知池、未匹配路径或缺少同状态 kg 换算证据均阻断闭合，不能用残余或假定零填补。 | `receive_setout_opening_processed_wip_kg`; `receive_setout_closing_processed_wip_kg`; `receive_setout_fresh_external_draw_kg`; `receive_setout_material_internal_in_kg`; `receive_setout_final_retained_mass_kg`; `receive_setout_next_material_handoff_kg`; `receive_setout_material_discard_kg`; `receive_setout_aqueous_waste_kg`; `receive_setout_direct_release_kg`; `receive_setout_usable_exit_kg`; `receive_setout_other_exclusive_transfer_kg`; `receive_setout_mass_uncertainty_kg`; `receive_setout_mass_pool_partition_ref`; `cp_receive_setout` | `receive_setout_mass_gap_kg` |  |
| `calc_mix_mortar_mass_closure` | mix_mortar | mix_mortar_mass_gap_kg = mix_mortar_opening_processed_wip_kg + mix_mortar_fresh_external_draw_kg + mix_mortar_material_internal_in_kg - mix_mortar_final_retained_mass_kg - mix_mortar_next_material_handoff_kg - mix_mortar_material_discard_kg - mix_mortar_aqueous_waste_kg - mix_mortar_direct_release_kg - mix_mortar_usable_exit_kg - mix_mortar_closing_processed_wip_kg - mix_mortar_other_exclusive_transfer_kg。全部池输入来自 calc_mix_mortar_mass_pools，须按自身卡片/事件/份额谱系表核对；要求 mix_mortar_mass_pool_partition_ref 并对照可追溯 mix_mortar_mass_uncertainty_kg 判断差额。毛领用已扣所有完整期末库存一次，不能再扣。墙体同状态实测组成质量与 Area 观测分开。最终验收保留质量只计一次，不增加第二个客户交付质量。未知池、未匹配路径或缺少同状态 kg 换算证据均阻断闭合，不能用残余或假定零填补。 | `mix_mortar_opening_processed_wip_kg`; `mix_mortar_closing_processed_wip_kg`; `mix_mortar_fresh_external_draw_kg`; `mix_mortar_material_internal_in_kg`; `mix_mortar_final_retained_mass_kg`; `mix_mortar_next_material_handoff_kg`; `mix_mortar_material_discard_kg`; `mix_mortar_aqueous_waste_kg`; `mix_mortar_direct_release_kg`; `mix_mortar_usable_exit_kg`; `mix_mortar_other_exclusive_transfer_kg`; `mix_mortar_mass_uncertainty_kg`; `mix_mortar_mass_pool_partition_ref`; `cp_mix_mortar` | `mix_mortar_mass_gap_kg` |  |
| `calc_mix_mortar_water_closure` | mix_mortar | mix_mortar_water_gap_kg = mix_water_vapour_gross_fresh_draw_kg + mix_water_vapour_internal_received_water_kg + mix_water_vapour_material_bound_and_free_entry_water_kg + mix_water_vapour_opening_processed_water_kg - mix_water_vapour_unused_fresh_exit_kg - mix_water_vapour_next_handoff_water_kg - mix_water_vapour_final_retained_bound_water_kg - mix_water_vapour_final_retained_free_water_kg - mix_water_vapour_solid_waste_water_kg - mix_water_vapour_aqueous_waste_water_kg - mix_water_vapour_direct_liquid_release_water_kg - mix_water_vapour_closing_processed_wip_water_kg - mix_water_vapour_other_exclusive_water_exit_kg - actual_mix_water_vapour。每个池均为 calc_mix_mortar_water_pools 的计算输出，并有准确自身卡片/输出/份额谱系。新水毛领用等于 actual_mix_water，已扣完整新水期末库存一次，不能第二次扣除。未用新水退出仅取 actual_mix_unused_return 中实测新供水份额。砂浆/砖附带进入水只可属于内部过程水或材料固有进入水之一。中间节点的结合/游离水属于下一交接，不能同时计作最终保留；最终验收保留水只计一次，不另计客户交付。废物、退出及在制品水须按 mix_water_vapour_pool_partition_ref 的当前状态/时点互斥，差额与 mix_water_vapour_uncertainty_kg 比较。水化只改变结合/游离状态，不改变总保留水质量。状态证据缺失仍是问题，不能作蒸发。 | `mix_water_vapour_gross_fresh_draw_kg`; `mix_water_vapour_unused_fresh_exit_kg`; `mix_water_vapour_internal_received_water_kg`; `mix_water_vapour_material_bound_and_free_entry_water_kg`; `mix_water_vapour_opening_processed_water_kg`; `mix_water_vapour_closing_processed_wip_water_kg`; `mix_water_vapour_next_handoff_water_kg`; `mix_water_vapour_final_retained_bound_water_kg`; `mix_water_vapour_final_retained_free_water_kg`; `mix_water_vapour_solid_waste_water_kg`; `mix_water_vapour_aqueous_waste_water_kg`; `mix_water_vapour_direct_liquid_release_water_kg`; `mix_water_vapour_other_exclusive_water_exit_kg`; `actual_mix_water_vapour`; `mix_water_vapour_evaporation_method_ref`; `mix_water_vapour_pool_partition_ref`; `mix_water_vapour_uncertainty_kg`; `cp_mix_mortar`; `actual_mix_water`; `actual_mix_unused_return` | `mix_mortar_water_gap_kg` | `bda-mortar-2023` |
| `calc_lay_joint_mass_closure` | lay_joint | lay_joint_mass_gap_kg = lay_joint_opening_processed_wip_kg + lay_joint_fresh_external_draw_kg + lay_joint_material_internal_in_kg - lay_joint_final_retained_mass_kg - lay_joint_next_material_handoff_kg - lay_joint_material_discard_kg - lay_joint_aqueous_waste_kg - lay_joint_direct_release_kg - lay_joint_usable_exit_kg - lay_joint_closing_processed_wip_kg - lay_joint_other_exclusive_transfer_kg。全部池输入来自 calc_lay_joint_mass_pools，须按自身卡片/事件/份额谱系表核对；要求 lay_joint_mass_pool_partition_ref 并对照可追溯 lay_joint_mass_uncertainty_kg 判断差额。毛领用已扣所有完整期末库存一次，不能再扣。墙体同状态实测组成质量与 Area 观测分开。最终验收保留质量只计一次，不增加第二个客户交付质量。未知池、未匹配路径或缺少同状态 kg 换算证据均阻断闭合，不能用残余或假定零填补。 | `lay_joint_opening_processed_wip_kg`; `lay_joint_closing_processed_wip_kg`; `lay_joint_fresh_external_draw_kg`; `lay_joint_material_internal_in_kg`; `lay_joint_final_retained_mass_kg`; `lay_joint_next_material_handoff_kg`; `lay_joint_material_discard_kg`; `lay_joint_aqueous_waste_kg`; `lay_joint_direct_release_kg`; `lay_joint_usable_exit_kg`; `lay_joint_other_exclusive_transfer_kg`; `lay_joint_mass_uncertainty_kg`; `lay_joint_mass_pool_partition_ref`; `cp_lay_joint` | `lay_joint_mass_gap_kg` |  |
| `calc_lay_joint_water_closure` | lay_joint | lay_joint_water_gap_kg = lay_water_vapour_gross_fresh_draw_kg + lay_water_vapour_internal_received_water_kg + lay_water_vapour_material_bound_and_free_entry_water_kg + lay_water_vapour_opening_processed_water_kg - lay_water_vapour_unused_fresh_exit_kg - lay_water_vapour_next_handoff_water_kg - lay_water_vapour_final_retained_bound_water_kg - lay_water_vapour_final_retained_free_water_kg - lay_water_vapour_solid_waste_water_kg - lay_water_vapour_aqueous_waste_water_kg - lay_water_vapour_direct_liquid_release_water_kg - lay_water_vapour_closing_processed_wip_water_kg - lay_water_vapour_other_exclusive_water_exit_kg - actual_lay_water_vapour。每个池均为 calc_lay_joint_water_pools 的计算输出，并有准确自身卡片/输出/份额谱系。新水毛领用等于 actual_lay_water，已扣完整新水期末库存一次，不能第二次扣除。未用新水退出仅取 actual_lay_unused_return 中实测新供水份额。砂浆/砖附带进入水只可属于内部过程水或材料固有进入水之一。中间节点的结合/游离水属于下一交接，不能同时计作最终保留；最终验收保留水只计一次，不另计客户交付。废物、退出及在制品水须按 lay_water_vapour_pool_partition_ref 的当前状态/时点互斥，差额与 lay_water_vapour_uncertainty_kg 比较。水化只改变结合/游离状态，不改变总保留水质量。状态证据缺失仍是问题，不能作蒸发。 | `lay_water_vapour_gross_fresh_draw_kg`; `lay_water_vapour_unused_fresh_exit_kg`; `lay_water_vapour_internal_received_water_kg`; `lay_water_vapour_material_bound_and_free_entry_water_kg`; `lay_water_vapour_opening_processed_water_kg`; `lay_water_vapour_closing_processed_wip_water_kg`; `lay_water_vapour_next_handoff_water_kg`; `lay_water_vapour_final_retained_bound_water_kg`; `lay_water_vapour_final_retained_free_water_kg`; `lay_water_vapour_solid_waste_water_kg`; `lay_water_vapour_aqueous_waste_water_kg`; `lay_water_vapour_direct_liquid_release_water_kg`; `lay_water_vapour_other_exclusive_water_exit_kg`; `actual_lay_water_vapour`; `lay_water_vapour_evaporation_method_ref`; `lay_water_vapour_pool_partition_ref`; `lay_water_vapour_uncertainty_kg`; `cp_lay_joint`; `actual_lay_water`; `actual_lay_unused_return` | `lay_joint_water_gap_kg` | `bda-mortar-2023` |
| `calc_cure_accept_mass_closure` | cure_accept | cure_accept_mass_gap_kg = cure_accept_opening_processed_wip_kg + cure_accept_fresh_external_draw_kg + cure_accept_material_internal_in_kg - cure_accept_final_retained_mass_kg - cure_accept_next_material_handoff_kg - cure_accept_material_discard_kg - cure_accept_aqueous_waste_kg - cure_accept_direct_release_kg - cure_accept_usable_exit_kg - cure_accept_closing_processed_wip_kg - cure_accept_other_exclusive_transfer_kg。全部池输入来自 calc_cure_accept_mass_pools，须按自身卡片/事件/份额谱系表核对；要求 cure_accept_mass_pool_partition_ref 并对照可追溯 cure_accept_mass_uncertainty_kg 判断差额。毛领用已扣所有完整期末库存一次，不能再扣。墙体同状态实测组成质量与 Area 观测分开。最终验收保留质量只计一次，不增加第二个客户交付质量。未知池、未匹配路径或缺少同状态 kg 换算证据均阻断闭合，不能用残余或假定零填补。 | `cure_accept_opening_processed_wip_kg`; `cure_accept_closing_processed_wip_kg`; `cure_accept_fresh_external_draw_kg`; `cure_accept_material_internal_in_kg`; `cure_accept_final_retained_mass_kg`; `cure_accept_next_material_handoff_kg`; `cure_accept_material_discard_kg`; `cure_accept_aqueous_waste_kg`; `cure_accept_direct_release_kg`; `cure_accept_usable_exit_kg`; `cure_accept_other_exclusive_transfer_kg`; `cure_accept_mass_uncertainty_kg`; `cure_accept_mass_pool_partition_ref`; `cp_cure_accept` | `cure_accept_mass_gap_kg` |  |
| `calc_cure_accept_water_closure` | cure_accept | cure_accept_water_gap_kg = cure_water_vapour_gross_fresh_draw_kg + cure_water_vapour_internal_received_water_kg + cure_water_vapour_material_bound_and_free_entry_water_kg + cure_water_vapour_opening_processed_water_kg - cure_water_vapour_unused_fresh_exit_kg - cure_water_vapour_next_handoff_water_kg - cure_water_vapour_final_retained_bound_water_kg - cure_water_vapour_final_retained_free_water_kg - cure_water_vapour_solid_waste_water_kg - cure_water_vapour_aqueous_waste_water_kg - cure_water_vapour_direct_liquid_release_water_kg - cure_water_vapour_closing_processed_wip_water_kg - cure_water_vapour_other_exclusive_water_exit_kg - actual_cure_water_vapour。每个池均为 calc_cure_accept_water_pools 的计算输出，并有准确自身卡片/输出/份额谱系。新水毛领用等于 actual_cure_water，已扣完整新水期末库存一次，不能第二次扣除。未用新水退出仅取 actual_cure_unused_return 中实测新供水份额。砂浆/砖附带进入水只可属于内部过程水或材料固有进入水之一。中间节点的结合/游离水属于下一交接，不能同时计作最终保留；最终验收保留水只计一次，不另计客户交付。废物、退出及在制品水须按 cure_water_vapour_pool_partition_ref 的当前状态/时点互斥，差额与 cure_water_vapour_uncertainty_kg 比较。水化只改变结合/游离状态，不改变总保留水质量。状态证据缺失仍是问题，不能作蒸发。 | `cure_water_vapour_gross_fresh_draw_kg`; `cure_water_vapour_unused_fresh_exit_kg`; `cure_water_vapour_internal_received_water_kg`; `cure_water_vapour_material_bound_and_free_entry_water_kg`; `cure_water_vapour_opening_processed_water_kg`; `cure_water_vapour_closing_processed_wip_water_kg`; `cure_water_vapour_next_handoff_water_kg`; `cure_water_vapour_final_retained_bound_water_kg`; `cure_water_vapour_final_retained_free_water_kg`; `cure_water_vapour_solid_waste_water_kg`; `cure_water_vapour_aqueous_waste_water_kg`; `cure_water_vapour_direct_liquid_release_water_kg`; `cure_water_vapour_other_exclusive_water_exit_kg`; `actual_cure_water_vapour`; `cure_water_vapour_evaporation_method_ref`; `cure_water_vapour_pool_partition_ref`; `cure_water_vapour_uncertainty_kg`; `cp_cure_accept`; `actual_cure_water`; `actual_cure_unused_return` | `cure_accept_water_gap_kg` | `bda-mortar-2023` |
| `calc_receive_nonbrick_material_waste` | receive_setout | actual_receive_nonbrick_material_waste = EVENT_SUM(receive_nonbrick_material_waste, cp_receive_setout); q_receive_nonbrick_material_waste = actual_receive_nonbrick_material_waste/A. 按该组件账全部原始字段及节点谱系，在 kg 单位内汇总每个真实物理发生一次，必要换算须同身份、同当前状态实测。保留真实补救发生，仅去除重复记录。实际未发生须有证据；未知量保持缺失。物理材料量为真实 Mass/kg，原记录为件数、长度或面积时只能用同一 SKU/当前状态的实测质量关系。内部投入和领出使用实际匹配的事件量，不固定为参考量。纳入本节点所有实际领出前非砖废弃物，砖废物、包装废物、可用退出及库存/在制品均有互斥去向；组成或状态未知保持缺口。 EVENT_SUM 定义：使用已声明的清单角色或明确登记的组件账选择器及其自身协议原始字段，在准确类型换算后汇总每个真实物理事件一次。组件账选择器不是额外清单卡或产品身份。按物理事件/记录修订去除电子副本，保留每次真实重复作业/修正。组件账只在所属条件性集合角色内核对，不能再与集合交换重复相加。 receive_nonbrick_material_waste 选择器现为 receive_material_waste 内原有按材料/SKU/当前状态区分的组件账，不是独立清单卡。保留其物理事件、数量、相态/去向及保管权证据，具体交换只在集合角色中实例化一次。禁止集合与组件重复交换、重复采购或信用。 | `receive_nonbrick_material_waste_actual_quantity`; `receive_nonbrick_material_waste_native_unit`; `receive_nonbrick_material_waste_same_sku_current_state_mass_bridge_ref`; `receive_nonbrick_material_waste_material_composition`; `receive_nonbrick_material_waste_material_id`; `receive_nonbrick_material_waste_sku_id`; `receive_nonbrick_material_waste_current_moisture_state`; `receive_nonbrick_material_waste_receipt_origin_event_id`; `receive_nonbrick_material_waste_discard_event_id`; `receive_nonbrick_material_waste_custodian`; `receive_nonbrick_material_waste_treatment_destination`; `receive_nonbrick_material_waste_actual_nonoccurrence_evidence`; `receive_nonbrick_material_waste_exclusive_fate_ref`; `cp_receive_setout`; `A`; `EVENT_SUM`; `receive_nonbrick_material_waste` | `actual_receive_nonbrick_material_waste`; `q_receive_nonbrick_material_waste` | `bda-workmanship-2023` |
| `calc_receive_setout_mass_pools` | receive_setout | receive_setout_opening_processed_wip_kg = WIP_MASS(receive_setout_opening_processed_wip_records)。每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。；receive_setout_closing_processed_wip_kg = WIP_MASS(receive_setout_closing_processed_wip_records)。每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。；receive_setout_fresh_external_draw_kg = actual_receive_packaging + actual_receive_dry_mortar + actual_receive_bricks + actual_receive_restraint_components + actual_receive_protection_material + actual_receive_cure_cleaning_material。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；receive_setout_material_internal_in_kg = EVIDENCED_ZERO(receive_setout_material_internal_in_kg_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 material_internal_in_kg 都会阻断闭合，须明确审查角色及路径。；receive_setout_final_retained_mass_kg = EVIDENCED_ZERO(receive_setout_final_retained_mass_kg_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_mass_kg 都会阻断闭合，须明确审查角色及路径。；receive_setout_next_material_handoff_kg = actual_issue_dry_mortar + actual_issue_bricks + actual_issue_restraint_components + actual_issue_protection_material + actual_issue_cure_cleaning_material + actual_issue_packaging_mix_mortar + actual_issue_packaging_lay_joint + actual_issue_packaging_cure_accept。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；receive_setout_material_discard_kg = actual_receive_rejected_brick + actual_receive_nonbrick_material_waste + actual_receive_packaging_waste。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；receive_setout_aqueous_waste_kg = EVIDENCED_ZERO(receive_setout_aqueous_waste_kg_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 aqueous_waste_kg 都会阻断闭合，须明确审查角色及路径。这里的未发生仅针对排除已计入 receive_material_waste 的全部液体或其他相态后的新增含水废物池，并不声称收料不能出现液体废弃物。任何其他真实含水退出路径都须先明确自身节点角色，才能闭合。；receive_setout_direct_release_kg = EVIDENCED_ZERO(receive_setout_direct_release_kg_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 direct_release_kg 都会阻断闭合，须明确审查角色及路径。；receive_setout_usable_exit_kg = actual_receive_unused_return。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；receive_setout_other_exclusive_transfer_kg = EVIDENCED_ZERO(receive_setout_other_exclusive_transfer_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_transfer 都会阻断闭合，须明确审查角色及路径。。全部池按同一来源事件/材料/状态/期间与实际来源输出核对。来源整件或组成只能采用一个基础。内部质量来自交接记录，几何不进入质量算术。原始未用正退出仍保留在毛投入内，无负信用。产品毛质量须通过实测组成分割排除已单列包装，不能把带包装整件及包装再相加。 WIP_MASS 定义：按自身卡片、来源量/事件、材料/SKU/状态、期间及保管权汇总真实期初/期末加工库存观测。记录须关联上期末库存或本期留存事件，并排除已在毛领用量扣除的完整未领库存。墙体在制品须有同状态实测整墙或组成 kg 关系。数量或保管权未知会阻断闭合。 EVIDENCED_ZERO 定义：只有自身节点的未发生证据记录证明整个批次/期间确实没有该实际池时，才返回零。未知、缺失或非零记录会阻断闭合，并要求审查真实角色及路径；不得用平衡量掩盖。 相关组件账量只在所属当前集合角色内按同 SKU/状态核对一次，不能另加集合总量；不是独立清单卡。 相关组件账量只在所属当前集合角色内按同 SKU/状态核对一次，不能另加集合总量；不是独立清单卡。 相关组件账量只在所属当前集合角色内按同 SKU/状态核对一次，不能另加集合总量；不是独立清单卡。 相关组件账量只在所属当前集合角色内按同 SKU/状态核对一次，不能另加集合总量；不是独立清单卡。 | `receive_setout_opening_processed_wip_records`; `WIP_MASS`; `receive_setout_closing_processed_wip_records`; `actual_receive_packaging`; `actual_receive_dry_mortar`; `actual_receive_bricks`; `actual_receive_restraint_components`; `actual_receive_protection_material`; `actual_receive_cure_cleaning_material`; `receive_setout_material_internal_in_kg_absence_records`; `EVIDENCED_ZERO`; `receive_setout_final_retained_mass_kg_absence_records`; `actual_issue_dry_mortar`; `actual_issue_bricks`; `actual_issue_restraint_components`; `actual_issue_protection_material`; `actual_issue_cure_cleaning_material`; `actual_issue_packaging_mix_mortar`; `actual_issue_packaging_lay_joint`; `actual_issue_packaging_cure_accept`; `actual_receive_rejected_brick`; `actual_receive_nonbrick_material_waste`; `actual_receive_packaging_waste`; `receive_setout_aqueous_waste_kg_absence_records`; `receive_setout_direct_release_kg_absence_records`; `actual_receive_unused_return`; `receive_setout_other_exclusive_transfer_absence_records`; `cp_receive_setout` | `receive_setout_opening_processed_wip_kg`; `receive_setout_closing_processed_wip_kg`; `receive_setout_fresh_external_draw_kg`; `receive_setout_material_internal_in_kg`; `receive_setout_final_retained_mass_kg`; `receive_setout_next_material_handoff_kg`; `receive_setout_material_discard_kg`; `receive_setout_aqueous_waste_kg`; `receive_setout_direct_release_kg`; `receive_setout_usable_exit_kg`; `receive_setout_other_exclusive_transfer_kg` |  |
| `calc_mix_mortar_mass_pools` | mix_mortar | mix_mortar_opening_processed_wip_kg = WIP_MASS(mix_mortar_opening_processed_wip_records)。每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。；mix_mortar_closing_processed_wip_kg = WIP_MASS(mix_mortar_closing_processed_wip_records)。每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。；mix_mortar_fresh_external_draw_kg = actual_mix_water。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；mix_mortar_material_internal_in_kg = actual_dry_mortar + actual_mix_mortar_packaging_feed。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；mix_mortar_final_retained_mass_kg = EVIDENCED_ZERO(mix_mortar_final_retained_mass_kg_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_mass_kg 都会阻断闭合，须明确审查角色及路径。；mix_mortar_next_material_handoff_kg = actual_wet_mortar_feed。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；mix_mortar_material_discard_kg = actual_mix_mortar_waste + actual_mix_packaging_waste。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；mix_mortar_aqueous_waste_kg = actual_mix_wastewater。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；mix_mortar_direct_release_kg = actual_mix_water_vapour + actual_mix_direct_release。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；mix_mortar_usable_exit_kg = actual_mix_unused_return。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；mix_mortar_other_exclusive_transfer_kg = EVIDENCED_ZERO(mix_mortar_other_exclusive_transfer_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_transfer 都会阻断闭合，须明确审查角色及路径。。全部池按同一来源事件/材料/状态/期间与实际来源输出核对。来源整件或组成只能采用一个基础。内部质量来自交接记录，几何不进入质量算术。原始未用正退出仍保留在毛投入内，无负信用。产品毛质量须通过实测组成分割排除已单列包装，不能把带包装整件及包装再相加。 WIP_MASS 定义：按自身卡片、来源量/事件、材料/SKU/状态、期间及保管权汇总真实期初/期末加工库存观测。记录须关联上期末库存或本期留存事件，并排除已在毛领用量扣除的完整未领库存。墙体在制品须有同状态实测整墙或组成 kg 关系。数量或保管权未知会阻断闭合。 EVIDENCED_ZERO 定义：只有自身节点的未发生证据记录证明整个批次/期间确实没有该实际池时，才返回零。未知、缺失或非零记录会阻断闭合，并要求审查真实角色及路径；不得用平衡量掩盖。 | `mix_mortar_opening_processed_wip_records`; `WIP_MASS`; `mix_mortar_closing_processed_wip_records`; `actual_mix_water`; `actual_dry_mortar`; `actual_mix_mortar_packaging_feed`; `mix_mortar_final_retained_mass_kg_absence_records`; `EVIDENCED_ZERO`; `actual_wet_mortar_feed`; `actual_mix_mortar_waste`; `actual_mix_packaging_waste`; `actual_mix_wastewater`; `actual_mix_water_vapour`; `actual_mix_direct_release`; `actual_mix_unused_return`; `mix_mortar_other_exclusive_transfer_absence_records`; `cp_mix_mortar` | `mix_mortar_opening_processed_wip_kg`; `mix_mortar_closing_processed_wip_kg`; `mix_mortar_fresh_external_draw_kg`; `mix_mortar_material_internal_in_kg`; `mix_mortar_final_retained_mass_kg`; `mix_mortar_next_material_handoff_kg`; `mix_mortar_material_discard_kg`; `mix_mortar_aqueous_waste_kg`; `mix_mortar_direct_release_kg`; `mix_mortar_usable_exit_kg`; `mix_mortar_other_exclusive_transfer_kg` |  |
| `calc_lay_joint_mass_pools` | lay_joint | lay_joint_opening_processed_wip_kg = WIP_MASS(lay_joint_opening_processed_wip_records)。每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。；lay_joint_closing_processed_wip_kg = WIP_MASS(lay_joint_closing_processed_wip_records)。每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。；lay_joint_fresh_external_draw_kg = actual_lay_water。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；lay_joint_material_internal_in_kg = actual_bricks + actual_lay_mortar + actual_restraint_components + actual_lay_joint_packaging_feed。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；lay_joint_final_retained_mass_kg = EVIDENCED_ZERO(lay_joint_final_retained_mass_kg_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_mass_kg 都会阻断闭合，须明确审查角色及路径。；lay_joint_next_material_handoff_kg = WALL_COMPONENT_MASS(uncured_partition_measured_component_mass_records, uncured_partition_same_state_mass_bridge_ref, uncured_partition_whole_or_components_partition_ref)。面积卡片只锚定墙板/事件。质量池取同一状态下实际实测的整件质量或组成 kg 记录，两者择一；不使用面积加项、假定 kg/m2 或重复整件/分项质量。；lay_joint_material_discard_kg = actual_lay_solid_waste。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；lay_joint_aqueous_waste_kg = actual_lay_wastewater。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；lay_joint_direct_release_kg = actual_lay_water_vapour + actual_lay_direct_release。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；lay_joint_usable_exit_kg = actual_lay_unused_return。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；lay_joint_other_exclusive_transfer_kg = EVIDENCED_ZERO(lay_joint_other_exclusive_transfer_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_transfer 都会阻断闭合，须明确审查角色及路径。。全部池按同一来源事件/材料/状态/期间与实际来源输出核对。来源整件或组成只能采用一个基础。内部质量来自交接记录，几何不进入质量算术。原始未用正退出仍保留在毛投入内，无负信用。产品毛质量须通过实测组成分割排除已单列包装，不能把带包装整件及包装再相加。 WALL_COMPONENT_MASS 定义：从来源面积卡片的关联记录取得另行实测的同一墙板、同一当前状态的整墙质量，或实测组成分项质量；只能择一。保留事件/墙板/批次及成对交接或最终验收证据，必须有整墙或组成互斥分组和实测换算证据。面积不能作为 kg 加项，不能使用假定密度或配方因子。来源面积输出仅识别几何。 WIP_MASS 定义：按自身卡片、来源量/事件、材料/SKU/状态、期间及保管权汇总真实期初/期末加工库存观测。记录须关联上期末库存或本期留存事件，并排除已在毛领用量扣除的完整未领库存。墙体在制品须有同状态实测整墙或组成 kg 关系。数量或保管权未知会阻断闭合。 EVIDENCED_ZERO 定义：只有自身节点的未发生证据记录证明整个批次/期间确实没有该实际池时，才返回零。未知、缺失或非零记录会阻断闭合，并要求审查真实角色及路径；不得用平衡量掩盖。 | `lay_joint_opening_processed_wip_records`; `WIP_MASS`; `lay_joint_closing_processed_wip_records`; `actual_lay_water`; `actual_bricks`; `actual_lay_mortar`; `actual_restraint_components`; `actual_lay_joint_packaging_feed`; `lay_joint_final_retained_mass_kg_absence_records`; `EVIDENCED_ZERO`; `actual_uncured_partition`; `uncured_partition_measured_component_mass_records`; `uncured_partition_same_state_mass_bridge_ref`; `uncured_partition_whole_or_components_partition_ref`; `WALL_COMPONENT_MASS`; `actual_lay_solid_waste`; `actual_lay_wastewater`; `actual_lay_water_vapour`; `actual_lay_direct_release`; `actual_lay_unused_return`; `lay_joint_other_exclusive_transfer_absence_records`; `cp_lay_joint` | `lay_joint_opening_processed_wip_kg`; `lay_joint_closing_processed_wip_kg`; `lay_joint_fresh_external_draw_kg`; `lay_joint_material_internal_in_kg`; `lay_joint_final_retained_mass_kg`; `lay_joint_next_material_handoff_kg`; `lay_joint_material_discard_kg`; `lay_joint_aqueous_waste_kg`; `lay_joint_direct_release_kg`; `lay_joint_usable_exit_kg`; `lay_joint_other_exclusive_transfer_kg` |  |
| `calc_cure_accept_mass_pools` | cure_accept | cure_accept_opening_processed_wip_kg = WIP_MASS(cure_accept_opening_processed_wip_records)。每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。；cure_accept_closing_processed_wip_kg = WIP_MASS(cure_accept_closing_processed_wip_records)。每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。；cure_accept_fresh_external_draw_kg = actual_cure_water。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；cure_accept_material_internal_in_kg = actual_protection_material + actual_cure_cleaning_material + actual_cure_accept_packaging_feed + WALL_COMPONENT_MASS(cure_wall_feed_measured_component_mass_records, cure_wall_feed_same_state_mass_bridge_ref, cure_wall_feed_whole_or_components_partition_ref)。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 面积卡片只锚定墙板/事件。质量池取同一状态下实际实测的整件质量或组成 kg 记录，两者择一；不使用面积加项、假定 kg/m2 或重复整件/分项质量。；cure_accept_final_retained_mass_kg = WALL_COMPONENT_MASS(accepted_partition_service_measured_component_mass_records, accepted_partition_service_same_state_mass_bridge_ref, accepted_partition_service_whole_or_components_partition_ref)。面积卡片只锚定墙板/事件。质量池取同一状态下实际实测的整件质量或组成 kg 记录，两者择一；不使用面积加项、假定 kg/m2 或重复整件/分项质量。；cure_accept_next_material_handoff_kg = EVIDENCED_ZERO(cure_accept_next_material_handoff_kg_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 next_material_handoff_kg 都会阻断闭合，须明确审查角色及路径。；cure_accept_material_discard_kg = actual_cure_solid_waste。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；cure_accept_aqueous_waste_kg = actual_cure_wastewater。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；cure_accept_direct_release_kg = actual_cure_water_vapour + actual_cure_other_release。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；cure_accept_usable_exit_kg = actual_cure_unused_return。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；cure_accept_other_exclusive_transfer_kg = EVIDENCED_ZERO(cure_accept_other_exclusive_transfer_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_transfer 都会阻断闭合，须明确审查角色及路径。。全部池按同一来源事件/材料/状态/期间与实际来源输出核对。来源整件或组成只能采用一个基础。内部质量来自交接记录，几何不进入质量算术。原始未用正退出仍保留在毛投入内，无负信用。产品毛质量须通过实测组成分割排除已单列包装，不能把带包装整件及包装再相加。 WALL_COMPONENT_MASS 定义：从来源面积卡片的关联记录取得另行实测的同一墙板、同一当前状态的整墙质量，或实测组成分项质量；只能择一。保留事件/墙板/批次及成对交接或最终验收证据，必须有整墙或组成互斥分组和实测换算证据。面积不能作为 kg 加项，不能使用假定密度或配方因子。来源面积输出仅识别几何。 WIP_MASS 定义：按自身卡片、来源量/事件、材料/SKU/状态、期间及保管权汇总真实期初/期末加工库存观测。记录须关联上期末库存或本期留存事件，并排除已在毛领用量扣除的完整未领库存。墙体在制品须有同状态实测整墙或组成 kg 关系。数量或保管权未知会阻断闭合。 EVIDENCED_ZERO 定义：只有自身节点的未发生证据记录证明整个批次/期间确实没有该实际池时，才返回零。未知、缺失或非零记录会阻断闭合，并要求审查真实角色及路径；不得用平衡量掩盖。 | `cure_accept_opening_processed_wip_records`; `WIP_MASS`; `cure_accept_closing_processed_wip_records`; `actual_cure_water`; `actual_protection_material`; `actual_cure_cleaning_material`; `actual_cure_accept_packaging_feed`; `actual_cure_wall_feed`; `cure_wall_feed_measured_component_mass_records`; `cure_wall_feed_same_state_mass_bridge_ref`; `cure_wall_feed_whole_or_components_partition_ref`; `WALL_COMPONENT_MASS`; `actual_accepted_partition_service`; `accepted_partition_service_measured_component_mass_records`; `accepted_partition_service_same_state_mass_bridge_ref`; `accepted_partition_service_whole_or_components_partition_ref`; `cure_accept_next_material_handoff_kg_absence_records`; `EVIDENCED_ZERO`; `actual_cure_solid_waste`; `actual_cure_wastewater`; `actual_cure_water_vapour`; `actual_cure_other_release`; `actual_cure_unused_return`; `cure_accept_other_exclusive_transfer_absence_records`; `cp_cure_accept` | `cure_accept_opening_processed_wip_kg`; `cure_accept_closing_processed_wip_kg`; `cure_accept_fresh_external_draw_kg`; `cure_accept_material_internal_in_kg`; `cure_accept_final_retained_mass_kg`; `cure_accept_next_material_handoff_kg`; `cure_accept_material_discard_kg`; `cure_accept_aqueous_waste_kg`; `cure_accept_direct_release_kg`; `cure_accept_usable_exit_kg`; `cure_accept_other_exclusive_transfer_kg` |  |
| `calc_mix_mortar_water_pools` | mix_mortar | mix_water_vapour_gross_fresh_draw_kg = actual_mix_water。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；mix_water_vapour_unused_fresh_exit_kg = WATER_PORTION(actual_mix_unused_return, mix_mortar_unused_fresh_exit_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅选取关联 mix_water 的原始未用新供水份额，排除已改变的过程液、其他材料固有水、废物及在制品。该正份额已经位于自身可用退出总量内，不形成第二个材料交换。 必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；mix_water_vapour_internal_received_water_kg = EVIDENCED_ZERO(mix_mortar_internal_received_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 internal_received 都会阻断闭合，须明确审查角色及路径。；mix_water_vapour_material_bound_and_free_entry_water_kg = WATER_PORTION(actual_dry_mortar, mix_mortar_material_entry_water_portion_records) + WATER_PORTION(actual_mix_mortar_packaging_feed, mix_mortar_material_entry_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅包含这些接收材料内固有/附带的水，包括真实预混料水分或配制溶液水。排除另供新水及湿过程交接水；已包含在工厂产品中的水不能再次作为新水采购。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；mix_water_vapour_opening_processed_water_kg = WIP_WATER(mix_mortar_opening_processed_wip_records, mix_mortar_opening_processed_wip_water_records)。取准确期初加工在制品观测的水份额，按自身来源卡片/输出/事件和同一当前状态测量关联。排除完整未领/新水期末库存以及全部交接、验收保留、废物/退出池。期初在制品水须关联上一个截止点的期末状态，不能视为新进入。；mix_water_vapour_closing_processed_wip_water_kg = WIP_WATER(mix_mortar_closing_processed_wip_records, mix_mortar_closing_processed_wip_water_records)。取准确期末加工在制品观测的水份额，按自身来源卡片/输出/事件和同一当前状态测量关联。排除完整未领/新水期末库存以及全部交接、验收保留、废物/退出池。期初在制品水须关联上一个截止点的期末状态，不能视为新进入。；mix_water_vapour_next_handoff_water_kg = WATER_PORTION(actual_wet_mortar_feed, mix_mortar_next_handoff_water_kg_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅包含扣除自身节点真实废物/释放后、实际向外过程交接时仍保留的水；其中结合/游离份额属于该交接，不能同时计为最终保留。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；mix_water_vapour_final_retained_bound_water_kg = EVIDENCED_ZERO(mix_mortar_final_retained_bound_water_kg_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_bound_water_kg 都会阻断闭合，须明确审查角色及路径。；mix_water_vapour_final_retained_free_water_kg = EVIDENCED_ZERO(mix_mortar_final_retained_free_water_kg_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_free_water_kg 都会阻断闭合，须明确审查角色及路径。；mix_water_vapour_solid_waste_water_kg = WATER_PORTION(actual_mix_mortar_waste, mix_mortar_solid_waste_water_kg_water_portion_records) + WATER_PORTION(actual_mix_packaging_waste, mix_mortar_solid_waste_water_kg_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计材料废弃物/捕集残余中的实测水，按来源废物的材料和当前含水状态展开，不能把总质量当作水量。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；mix_water_vapour_aqueous_waste_water_kg = WATER_PORTION(actual_mix_wastewater, mix_mortar_aqueous_waste_water_kg_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计收集废水中的实际水份额，排除悬浮固体及其他溶质，不能再作为直接释放重复计入。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；mix_water_vapour_direct_liquid_release_water_kg = WATER_PORTION(actual_mix_direct_release, mix_mortar_direct_liquid_release_water_kg_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计有真实接收介质证据的实际向外液态 H2O 份额，与水蒸气、其他物质和收集废水互斥。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；mix_water_vapour_other_exclusive_water_exit_kg = EVIDENCED_ZERO(mix_mortar_other_exclusive_water_exit_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_water_exit 都会阻断闭合，须明确审查角色及路径。。全部水进入和结束池按真实来源材料/事件/状态/时点及实测份额谱系互斥。新水毛量等于自身供水卡分子，已扣完整新水期末库存一次，不再扣一次新水库存。 WATER_PORTION 定义：遵守 PORTION_MASS 全部规则，仅返回同一来源事件、当前状态中的实测水 kg，明确结合/游离状态、介质及新水/加工水来源。湿废物总量不是纯水。同一来源质量的多个水池份额必须互斥；水含量未知仍是缺口。水份额不得超过物理载体，互斥水份额之和也不得超过载体。 WIP_WATER 定义：选取 WIP_MASS 使用的同一加工在制品记录内实测水含量，保持来源事件、当前状态和时点一致，区分结合/游离并保留不确定度。完整新水期末库存、交接水、最终验收保留水或其他退出池均不能再次计入。 EVIDENCED_ZERO 定义：只有自身节点的未发生证据记录证明整个批次/期间确实没有该实际池时，才返回零。未知、缺失或非零记录会阻断闭合，并要求审查真实角色及路径；不得用平衡量掩盖。 PORTION_MASS 定义：仅从指定来源卡片未归一化 kg 输出中选取记录明确且互斥的材料/事件/状态份额。份额记录必须声明 source_card_id、source_calc_output、physical_event_id、材料/SKU、当前状态、期间、实测份额 kg 或比例及其方法/不确定度，以及唯一去向。分项须与来源输出核对，未知份额阻断闭合。面积、组合体与其组成重复相加的值及已经归一化的值均不得进入 kg 运算。每一份额须非负且不超过其真实物理载体；同一载体中互斥份额之和也不得超过载体，不得用缺失值补零。 WIP_MASS 定义：按自身卡片、来源量/事件、材料/SKU/状态、期间及保管权汇总真实期初/期末加工库存观测。记录须关联上期末库存或本期留存事件，并排除已在毛领用量扣除的完整未领库存。墙体在制品须有同状态实测整墙或组成 kg 关系。数量或保管权未知会阻断闭合。 | `actual_mix_water`; `actual_mix_unused_return`; `mix_mortar_unused_fresh_exit_water_portion_records`; `WATER_PORTION`; `mix_mortar_internal_received_absence_records`; `EVIDENCED_ZERO`; `actual_dry_mortar`; `actual_mix_mortar_packaging_feed`; `mix_mortar_material_entry_water_portion_records`; `mix_mortar_opening_processed_wip_records`; `mix_mortar_opening_processed_wip_water_records`; `WIP_WATER`; `mix_mortar_closing_processed_wip_records`; `mix_mortar_closing_processed_wip_water_records`; `actual_wet_mortar_feed`; `mix_mortar_next_handoff_water_kg_water_portion_records`; `mix_mortar_final_retained_bound_water_kg_absence_records`; `mix_mortar_final_retained_free_water_kg_absence_records`; `actual_mix_mortar_waste`; `actual_mix_packaging_waste`; `mix_mortar_solid_waste_water_kg_water_portion_records`; `actual_mix_wastewater`; `mix_mortar_aqueous_waste_water_kg_water_portion_records`; `actual_mix_direct_release`; `mix_mortar_direct_liquid_release_water_kg_water_portion_records`; `mix_mortar_other_exclusive_water_exit_absence_records`; `cp_mix_mortar`; `PORTION_MASS`; `WIP_MASS` | `mix_water_vapour_gross_fresh_draw_kg`; `mix_water_vapour_unused_fresh_exit_kg`; `mix_water_vapour_internal_received_water_kg`; `mix_water_vapour_material_bound_and_free_entry_water_kg`; `mix_water_vapour_opening_processed_water_kg`; `mix_water_vapour_closing_processed_wip_water_kg`; `mix_water_vapour_next_handoff_water_kg`; `mix_water_vapour_final_retained_bound_water_kg`; `mix_water_vapour_final_retained_free_water_kg`; `mix_water_vapour_solid_waste_water_kg`; `mix_water_vapour_aqueous_waste_water_kg`; `mix_water_vapour_direct_liquid_release_water_kg`; `mix_water_vapour_other_exclusive_water_exit_kg` |  |
| `calc_lay_joint_water_pools` | lay_joint | lay_water_vapour_gross_fresh_draw_kg = actual_lay_water。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；lay_water_vapour_unused_fresh_exit_kg = WATER_PORTION(actual_lay_unused_return, lay_joint_unused_fresh_exit_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅选取关联 lay_water 的原始未用新供水份额，排除已改变的过程液、其他材料固有水、废物及在制品。该正份额已经位于自身可用退出总量内，不形成第二个材料交换。 必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；lay_water_vapour_internal_received_water_kg = WATER_PORTION(actual_lay_mortar, lay_joint_internal_received_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计真实接收湿过程/组装体交接中附带的水，并关联上游同状态交出。不能再次计作配方/材料进入水分。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；lay_water_vapour_material_bound_and_free_entry_water_kg = WATER_PORTION(actual_bricks, lay_joint_material_entry_water_portion_records) + WATER_PORTION(actual_restraint_components, lay_joint_material_entry_water_portion_records) + WATER_PORTION(actual_lay_joint_packaging_feed, lay_joint_material_entry_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅包含这些接收材料内固有/附带的水，包括真实预混料水分或配制溶液水。排除另供新水及湿过程交接水；已包含在工厂产品中的水不能再次作为新水采购。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；lay_water_vapour_opening_processed_water_kg = WIP_WATER(lay_joint_opening_processed_wip_records, lay_joint_opening_processed_wip_water_records)。取准确期初加工在制品观测的水份额，按自身来源卡片/输出/事件和同一当前状态测量关联。排除完整未领/新水期末库存以及全部交接、验收保留、废物/退出池。期初在制品水须关联上一个截止点的期末状态，不能视为新进入。；lay_water_vapour_closing_processed_wip_water_kg = WIP_WATER(lay_joint_closing_processed_wip_records, lay_joint_closing_processed_wip_water_records)。取准确期末加工在制品观测的水份额，按自身来源卡片/输出/事件和同一当前状态测量关联。排除完整未领/新水期末库存以及全部交接、验收保留、废物/退出池。期初在制品水须关联上一个截止点的期末状态，不能视为新进入。；lay_water_vapour_next_handoff_water_kg = WATER_PORTION(WALL_COMPONENT_MASS(uncured_partition_measured_component_mass_records, uncured_partition_same_state_mass_bridge_ref, uncured_partition_whole_or_components_partition_ref), lay_joint_next_handoff_water_kg_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅包含扣除自身节点真实废物/释放后、实际向外过程交接时仍保留的水；其中结合/游离份额属于该交接，不能同时计为最终保留。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；lay_water_vapour_final_retained_bound_water_kg = EVIDENCED_ZERO(lay_joint_final_retained_bound_water_kg_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_bound_water_kg 都会阻断闭合，须明确审查角色及路径。；lay_water_vapour_final_retained_free_water_kg = EVIDENCED_ZERO(lay_joint_final_retained_free_water_kg_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_free_water_kg 都会阻断闭合，须明确审查角色及路径。；lay_water_vapour_solid_waste_water_kg = WATER_PORTION(actual_lay_solid_waste, lay_joint_solid_waste_water_kg_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计材料废弃物/捕集残余中的实测水，按来源废物的材料和当前含水状态展开，不能把总质量当作水量。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；lay_water_vapour_aqueous_waste_water_kg = WATER_PORTION(actual_lay_wastewater, lay_joint_aqueous_waste_water_kg_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计收集废水中的实际水份额，排除悬浮固体及其他溶质，不能再作为直接释放重复计入。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；lay_water_vapour_direct_liquid_release_water_kg = WATER_PORTION(actual_lay_direct_release, lay_joint_direct_liquid_release_water_kg_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计有真实接收介质证据的实际向外液态 H2O 份额，与水蒸气、其他物质和收集废水互斥。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；lay_water_vapour_other_exclusive_water_exit_kg = EVIDENCED_ZERO(lay_joint_other_exclusive_water_exit_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_water_exit 都会阻断闭合，须明确审查角色及路径。。全部水进入和结束池按真实来源材料/事件/状态/时点及实测份额谱系互斥。新水毛量等于自身供水卡分子，已扣完整新水期末库存一次，不再扣一次新水库存。 WATER_PORTION 定义：遵守 PORTION_MASS 全部规则，仅返回同一来源事件、当前状态中的实测水 kg，明确结合/游离状态、介质及新水/加工水来源。湿废物总量不是纯水。同一来源质量的多个水池份额必须互斥；水含量未知仍是缺口。水份额不得超过物理载体，互斥水份额之和也不得超过载体。 WALL_COMPONENT_MASS 定义：从来源面积卡片的关联记录取得另行实测的同一墙板、同一当前状态的整墙质量，或实测组成分项质量；只能择一。保留事件/墙板/批次及成对交接或最终验收证据，必须有整墙或组成互斥分组和实测换算证据。面积不能作为 kg 加项，不能使用假定密度或配方因子。来源面积输出仅识别几何。 WIP_WATER 定义：选取 WIP_MASS 使用的同一加工在制品记录内实测水含量，保持来源事件、当前状态和时点一致，区分结合/游离并保留不确定度。完整新水期末库存、交接水、最终验收保留水或其他退出池均不能再次计入。 EVIDENCED_ZERO 定义：只有自身节点的未发生证据记录证明整个批次/期间确实没有该实际池时，才返回零。未知、缺失或非零记录会阻断闭合，并要求审查真实角色及路径；不得用平衡量掩盖。 PORTION_MASS 定义：仅从指定来源卡片未归一化 kg 输出中选取记录明确且互斥的材料/事件/状态份额。份额记录必须声明 source_card_id、source_calc_output、physical_event_id、材料/SKU、当前状态、期间、实测份额 kg 或比例及其方法/不确定度，以及唯一去向。分项须与来源输出核对，未知份额阻断闭合。面积、组合体与其组成重复相加的值及已经归一化的值均不得进入 kg 运算。每一份额须非负且不超过其真实物理载体；同一载体中互斥份额之和也不得超过载体，不得用缺失值补零。 WIP_MASS 定义：按自身卡片、来源量/事件、材料/SKU/状态、期间及保管权汇总真实期初/期末加工库存观测。记录须关联上期末库存或本期留存事件，并排除已在毛领用量扣除的完整未领库存。墙体在制品须有同状态实测整墙或组成 kg 关系。数量或保管权未知会阻断闭合。 | `actual_lay_water`; `actual_lay_unused_return`; `lay_joint_unused_fresh_exit_water_portion_records`; `WATER_PORTION`; `actual_lay_mortar`; `lay_joint_internal_received_water_portion_records`; `actual_bricks`; `actual_restraint_components`; `actual_lay_joint_packaging_feed`; `lay_joint_material_entry_water_portion_records`; `lay_joint_opening_processed_wip_records`; `lay_joint_opening_processed_wip_water_records`; `WIP_WATER`; `lay_joint_closing_processed_wip_records`; `lay_joint_closing_processed_wip_water_records`; `actual_uncured_partition`; `uncured_partition_measured_component_mass_records`; `uncured_partition_same_state_mass_bridge_ref`; `uncured_partition_whole_or_components_partition_ref`; `lay_joint_next_handoff_water_kg_water_portion_records`; `WALL_COMPONENT_MASS`; `lay_joint_final_retained_bound_water_kg_absence_records`; `EVIDENCED_ZERO`; `lay_joint_final_retained_free_water_kg_absence_records`; `actual_lay_solid_waste`; `lay_joint_solid_waste_water_kg_water_portion_records`; `actual_lay_wastewater`; `lay_joint_aqueous_waste_water_kg_water_portion_records`; `actual_lay_direct_release`; `lay_joint_direct_liquid_release_water_kg_water_portion_records`; `lay_joint_other_exclusive_water_exit_absence_records`; `cp_lay_joint`; `PORTION_MASS`; `WIP_MASS` | `lay_water_vapour_gross_fresh_draw_kg`; `lay_water_vapour_unused_fresh_exit_kg`; `lay_water_vapour_internal_received_water_kg`; `lay_water_vapour_material_bound_and_free_entry_water_kg`; `lay_water_vapour_opening_processed_water_kg`; `lay_water_vapour_closing_processed_wip_water_kg`; `lay_water_vapour_next_handoff_water_kg`; `lay_water_vapour_final_retained_bound_water_kg`; `lay_water_vapour_final_retained_free_water_kg`; `lay_water_vapour_solid_waste_water_kg`; `lay_water_vapour_aqueous_waste_water_kg`; `lay_water_vapour_direct_liquid_release_water_kg`; `lay_water_vapour_other_exclusive_water_exit_kg` |  |
| `calc_cure_accept_water_pools` | cure_accept | cure_water_vapour_gross_fresh_draw_kg = actual_cure_water。使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。；cure_water_vapour_unused_fresh_exit_kg = WATER_PORTION(actual_cure_unused_return, cure_accept_unused_fresh_exit_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅选取关联 cure_water 的原始未用新供水份额，排除已改变的过程液、其他材料固有水、废物及在制品。该正份额已经位于自身可用退出总量内，不形成第二个材料交换。 必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；cure_water_vapour_internal_received_water_kg = WATER_PORTION(WALL_COMPONENT_MASS(cure_wall_feed_measured_component_mass_records, cure_wall_feed_same_state_mass_bridge_ref, cure_wall_feed_whole_or_components_partition_ref), cure_accept_internal_received_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计真实接收湿过程/组装体交接中附带的水，并关联上游同状态交出。不能再次计作配方/材料进入水分。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；cure_water_vapour_material_bound_and_free_entry_water_kg = WATER_PORTION(actual_protection_material, cure_accept_material_entry_water_portion_records) + WATER_PORTION(actual_cure_cleaning_material, cure_accept_material_entry_water_portion_records) + WATER_PORTION(actual_cure_accept_packaging_feed, cure_accept_material_entry_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅包含这些接收材料内固有/附带的水，包括真实预混料水分或配制溶液水。排除另供新水及湿过程交接水；已包含在工厂产品中的水不能再次作为新水采购。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；cure_water_vapour_opening_processed_water_kg = WIP_WATER(cure_accept_opening_processed_wip_records, cure_accept_opening_processed_wip_water_records)。取准确期初加工在制品观测的水份额，按自身来源卡片/输出/事件和同一当前状态测量关联。排除完整未领/新水期末库存以及全部交接、验收保留、废物/退出池。期初在制品水须关联上一个截止点的期末状态，不能视为新进入。；cure_water_vapour_closing_processed_wip_water_kg = WIP_WATER(cure_accept_closing_processed_wip_records, cure_accept_closing_processed_wip_water_records)。取准确期末加工在制品观测的水份额，按自身来源卡片/输出/事件和同一当前状态测量关联。排除完整未领/新水期末库存以及全部交接、验收保留、废物/退出池。期初在制品水须关联上一个截止点的期末状态，不能视为新进入。；cure_water_vapour_next_handoff_water_kg = EVIDENCED_ZERO(cure_accept_next_handoff_water_kg_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 next_handoff_water_kg 都会阻断闭合，须明确审查角色及路径。；cure_water_vapour_final_retained_bound_water_kg = WATER_PORTION(WALL_COMPONENT_MASS(accepted_partition_service_measured_component_mass_records, accepted_partition_service_same_state_mass_bridge_ref, accepted_partition_service_whole_or_components_partition_ref), cure_accept_final_retained_bound_water_kg_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计最终验收墙体状态中保留的实测结合水；不预设化学计量或水化产率，不与客户交付重复。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；cure_water_vapour_final_retained_free_water_kg = WATER_PORTION(WALL_COMPONENT_MASS(accepted_partition_service_measured_component_mass_records, accepted_partition_service_same_state_mass_bridge_ref, accepted_partition_service_whole_or_components_partition_ref), cure_accept_final_retained_free_water_kg_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计最终验收墙体状态中保留的实测游离水，与结合水及全部其他结束池互斥。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；cure_water_vapour_solid_waste_water_kg = WATER_PORTION(actual_cure_solid_waste, cure_accept_solid_waste_water_kg_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计材料废弃物/捕集残余中的实测水，按来源废物的材料和当前含水状态展开，不能把总质量当作水量。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；cure_water_vapour_aqueous_waste_water_kg = WATER_PORTION(actual_cure_wastewater, cure_accept_aqueous_waste_water_kg_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计收集废水中的实际水份额，排除悬浮固体及其他溶质，不能再作为直接释放重复计入。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；cure_water_vapour_direct_liquid_release_water_kg = WATER_PORTION(actual_cure_other_release, cure_accept_direct_liquid_release_water_kg_water_portion_records)。份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计有真实接收介质证据的实际向外液态 H2O 份额，与水蒸气、其他物质和收集废水互斥。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。；cure_water_vapour_other_exclusive_water_exit_kg = EVIDENCED_ZERO(cure_accept_other_exclusive_water_exit_absence_records)。必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_water_exit 都会阻断闭合，须明确审查角色及路径。。全部水进入和结束池按真实来源材料/事件/状态/时点及实测份额谱系互斥。新水毛量等于自身供水卡分子，已扣完整新水期末库存一次，不再扣一次新水库存。 WATER_PORTION 定义：遵守 PORTION_MASS 全部规则，仅返回同一来源事件、当前状态中的实测水 kg，明确结合/游离状态、介质及新水/加工水来源。湿废物总量不是纯水。同一来源质量的多个水池份额必须互斥；水含量未知仍是缺口。水份额不得超过物理载体，互斥水份额之和也不得超过载体。 WALL_COMPONENT_MASS 定义：从来源面积卡片的关联记录取得另行实测的同一墙板、同一当前状态的整墙质量，或实测组成分项质量；只能择一。保留事件/墙板/批次及成对交接或最终验收证据，必须有整墙或组成互斥分组和实测换算证据。面积不能作为 kg 加项，不能使用假定密度或配方因子。来源面积输出仅识别几何。 WIP_WATER 定义：选取 WIP_MASS 使用的同一加工在制品记录内实测水含量，保持来源事件、当前状态和时点一致，区分结合/游离并保留不确定度。完整新水期末库存、交接水、最终验收保留水或其他退出池均不能再次计入。 EVIDENCED_ZERO 定义：只有自身节点的未发生证据记录证明整个批次/期间确实没有该实际池时，才返回零。未知、缺失或非零记录会阻断闭合，并要求审查真实角色及路径；不得用平衡量掩盖。 PORTION_MASS 定义：仅从指定来源卡片未归一化 kg 输出中选取记录明确且互斥的材料/事件/状态份额。份额记录必须声明 source_card_id、source_calc_output、physical_event_id、材料/SKU、当前状态、期间、实测份额 kg 或比例及其方法/不确定度，以及唯一去向。分项须与来源输出核对，未知份额阻断闭合。面积、组合体与其组成重复相加的值及已经归一化的值均不得进入 kg 运算。每一份额须非负且不超过其真实物理载体；同一载体中互斥份额之和也不得超过载体，不得用缺失值补零。 WIP_MASS 定义：按自身卡片、来源量/事件、材料/SKU/状态、期间及保管权汇总真实期初/期末加工库存观测。记录须关联上期末库存或本期留存事件，并排除已在毛领用量扣除的完整未领库存。墙体在制品须有同状态实测整墙或组成 kg 关系。数量或保管权未知会阻断闭合。 | `actual_cure_water`; `actual_cure_unused_return`; `cure_accept_unused_fresh_exit_water_portion_records`; `WATER_PORTION`; `actual_cure_wall_feed`; `cure_wall_feed_measured_component_mass_records`; `cure_wall_feed_same_state_mass_bridge_ref`; `cure_wall_feed_whole_or_components_partition_ref`; `cure_accept_internal_received_water_portion_records`; `WALL_COMPONENT_MASS`; `actual_protection_material`; `actual_cure_cleaning_material`; `actual_cure_accept_packaging_feed`; `cure_accept_material_entry_water_portion_records`; `cure_accept_opening_processed_wip_records`; `cure_accept_opening_processed_wip_water_records`; `WIP_WATER`; `cure_accept_closing_processed_wip_records`; `cure_accept_closing_processed_wip_water_records`; `cure_accept_next_handoff_water_kg_absence_records`; `EVIDENCED_ZERO`; `actual_accepted_partition_service`; `accepted_partition_service_measured_component_mass_records`; `accepted_partition_service_same_state_mass_bridge_ref`; `accepted_partition_service_whole_or_components_partition_ref`; `cure_accept_final_retained_bound_water_kg_water_portion_records`; `cure_accept_final_retained_free_water_kg_water_portion_records`; `actual_cure_solid_waste`; `cure_accept_solid_waste_water_kg_water_portion_records`; `actual_cure_wastewater`; `cure_accept_aqueous_waste_water_kg_water_portion_records`; `actual_cure_other_release`; `cure_accept_direct_liquid_release_water_kg_water_portion_records`; `cure_accept_other_exclusive_water_exit_absence_records`; `cp_cure_accept`; `PORTION_MASS`; `WIP_MASS` | `cure_water_vapour_gross_fresh_draw_kg`; `cure_water_vapour_unused_fresh_exit_kg`; `cure_water_vapour_internal_received_water_kg`; `cure_water_vapour_material_bound_and_free_entry_water_kg`; `cure_water_vapour_opening_processed_water_kg`; `cure_water_vapour_closing_processed_wip_water_kg`; `cure_water_vapour_next_handoff_water_kg`; `cure_water_vapour_final_retained_bound_water_kg`; `cure_water_vapour_final_retained_free_water_kg`; `cure_water_vapour_solid_waste_water_kg`; `cure_water_vapour_aqueous_waste_water_kg`; `cure_water_vapour_direct_liquid_release_water_kg`; `cure_water_vapour_other_exclusive_water_exit_kg` |  |

逐材料/SKU/状态，将毛领用与实际领出、本节点收料废弃、正的可用退出及互斥加工保留/在制品/其他交接核对。池总量须来自准确自身卡片未归一化输出或自身状态实测观测，并有物理事件/份额谱系；手填汇总不能替代。按真实保管事件匹配领出/接收对。未领的后续批次完整物料无论位置均留在收料库存内。已获上游覆盖的供应商包装不再加制造负荷，但物理保管/废物仍可见。各含水节点的过程交接水与另行表征的材料进入水分是互斥来源；结束池分别为交接、最终结合/游离保留、材料废物/废水份额、真实液态释放、原始未用新水退出、在制品、其他有证据退出及经验证水蒸气。中间交接不能同时算最终保留。新水毛领用已扣完整新水期末库存一次。结合水仍是保留量；蒸发须独立证据，未知差额绝不能成为释放。

### 闭合池谱系

| pool_output | process_id | category | formula | source_card_ids | source_component_ledger_role_ids | source_calculation_outputs | raw_portion_or_observation_fields | operator_symbols | 规则 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| receive_setout_opening_processed_wip_kg | receive_setout | material | receive_setout_opening_processed_wip_kg = WIP_MASS(receive_setout_opening_processed_wip_records) | `receive_packaging`; `receive_unused_return`; `receive_dry_mortar`; `issue_dry_mortar`; `receive_bricks`; `issue_materials_lay_joint`; `receive_restraint_components`; `receive_protection_material`; `issue_materials_cure_accept`; `receive_cure_cleaning_material`; `issue_packaging_mix_mortar`; `issue_packaging_lay_joint`; `issue_packaging_cure_accept` | `issue_bricks`; `issue_restraint_components`; `issue_protection_material`; `issue_cure_cleaning_material` |  | `receive_setout_opening_processed_wip_records` | `WIP_MASS` | 每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。 这些原有同 SKU/状态组件输出属于已声明的当前集合角色，只核算一次，不能再加集合总量；它们是组件账数量，不是虚构清单卡。 |
| receive_setout_closing_processed_wip_kg | receive_setout | material | receive_setout_closing_processed_wip_kg = WIP_MASS(receive_setout_closing_processed_wip_records) | `receive_packaging`; `receive_unused_return`; `receive_dry_mortar`; `issue_dry_mortar`; `receive_bricks`; `issue_materials_lay_joint`; `receive_restraint_components`; `receive_protection_material`; `issue_materials_cure_accept`; `receive_cure_cleaning_material`; `issue_packaging_mix_mortar`; `issue_packaging_lay_joint`; `issue_packaging_cure_accept` | `issue_bricks`; `issue_restraint_components`; `issue_protection_material`; `issue_cure_cleaning_material` |  | `receive_setout_closing_processed_wip_records` | `WIP_MASS` | 每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。 这些原有同 SKU/状态组件输出属于已声明的当前集合角色，只核算一次，不能再加集合总量；它们是组件账数量，不是虚构清单卡。 |
| receive_setout_fresh_external_draw_kg | receive_setout | material | receive_setout_fresh_external_draw_kg = actual_receive_packaging + actual_receive_dry_mortar + actual_receive_bricks + actual_receive_restraint_components + actual_receive_protection_material + actual_receive_cure_cleaning_material | `receive_packaging`; `receive_dry_mortar`; `receive_bricks`; `receive_restraint_components`; `receive_protection_material`; `receive_cure_cleaning_material` |  | `actual_receive_packaging`; `actual_receive_dry_mortar`; `actual_receive_bricks`; `actual_receive_restraint_components`; `actual_receive_protection_material`; `actual_receive_cure_cleaning_material` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| receive_setout_material_internal_in_kg | receive_setout | material | receive_setout_material_internal_in_kg = EVIDENCED_ZERO(receive_setout_material_internal_in_kg_absence_records) |  |  |  | `receive_setout_material_internal_in_kg_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 material_internal_in_kg 都会阻断闭合，须明确审查角色及路径。 |
| receive_setout_final_retained_mass_kg | receive_setout | material | receive_setout_final_retained_mass_kg = EVIDENCED_ZERO(receive_setout_final_retained_mass_kg_absence_records) |  |  |  | `receive_setout_final_retained_mass_kg_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_mass_kg 都会阻断闭合，须明确审查角色及路径。 |
| receive_setout_next_material_handoff_kg | receive_setout | material | receive_setout_next_material_handoff_kg = actual_issue_dry_mortar + actual_issue_bricks + actual_issue_restraint_components + actual_issue_protection_material + actual_issue_cure_cleaning_material + actual_issue_packaging_mix_mortar + actual_issue_packaging_lay_joint + actual_issue_packaging_cure_accept | `issue_dry_mortar`; `issue_materials_lay_joint`; `issue_materials_cure_accept`; `issue_packaging_mix_mortar`; `issue_packaging_lay_joint`; `issue_packaging_cure_accept` | `issue_bricks`; `issue_restraint_components`; `issue_protection_material`; `issue_cure_cleaning_material` | `actual_issue_dry_mortar`; `actual_issue_bricks`; `actual_issue_restraint_components`; `actual_issue_protection_material`; `actual_issue_cure_cleaning_material`; `actual_issue_packaging_mix_mortar`; `actual_issue_packaging_lay_joint`; `actual_issue_packaging_cure_accept` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 这些原有同 SKU/状态组件输出属于已声明的当前集合角色，只核算一次，不能再加集合总量；它们是组件账数量，不是虚构清单卡。 |
| receive_setout_material_discard_kg | receive_setout | material | receive_setout_material_discard_kg = actual_receive_rejected_brick + actual_receive_nonbrick_material_waste + actual_receive_packaging_waste | `receive_material_waste`; `receive_packaging_waste` | `receive_rejected_brick`; `receive_nonbrick_material_waste` | `actual_receive_rejected_brick`; `actual_receive_nonbrick_material_waste`; `actual_receive_packaging_waste` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 这些原有同 SKU/状态组件输出属于已声明的当前集合角色，只核算一次，不能再加集合总量；它们是组件账数量，不是虚构清单卡。 |
| receive_setout_aqueous_waste_kg | receive_setout | material | receive_setout_aqueous_waste_kg = EVIDENCED_ZERO(receive_setout_aqueous_waste_kg_absence_records) |  |  |  | `receive_setout_aqueous_waste_kg_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 aqueous_waste_kg 都会阻断闭合，须明确审查角色及路径。这里的未发生仅针对排除已计入 receive_material_waste 的全部液体或其他相态后的新增含水废物池，并不声称收料不能出现液体废弃物。任何其他真实含水退出路径都须先明确自身节点角色，才能闭合。 |
| receive_setout_direct_release_kg | receive_setout | material | receive_setout_direct_release_kg = EVIDENCED_ZERO(receive_setout_direct_release_kg_absence_records) |  |  |  | `receive_setout_direct_release_kg_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 direct_release_kg 都会阻断闭合，须明确审查角色及路径。 |
| receive_setout_usable_exit_kg | receive_setout | material | receive_setout_usable_exit_kg = actual_receive_unused_return | `receive_unused_return` |  | `actual_receive_unused_return` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| receive_setout_other_exclusive_transfer_kg | receive_setout | material | receive_setout_other_exclusive_transfer_kg = EVIDENCED_ZERO(receive_setout_other_exclusive_transfer_absence_records) |  |  |  | `receive_setout_other_exclusive_transfer_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_transfer 都会阻断闭合，须明确审查角色及路径。 |
| mix_mortar_opening_processed_wip_kg | mix_mortar | material | mix_mortar_opening_processed_wip_kg = WIP_MASS(mix_mortar_opening_processed_wip_records) | `dry_mortar`; `mix_water`; `wet_mortar_feed`; `mix_unused_return`; `mix_mortar_packaging_feed` |  |  | `mix_mortar_opening_processed_wip_records` | `WIP_MASS` | 每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。 |
| mix_mortar_closing_processed_wip_kg | mix_mortar | material | mix_mortar_closing_processed_wip_kg = WIP_MASS(mix_mortar_closing_processed_wip_records) | `dry_mortar`; `mix_water`; `wet_mortar_feed`; `mix_unused_return`; `mix_mortar_packaging_feed` |  |  | `mix_mortar_closing_processed_wip_records` | `WIP_MASS` | 每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。 |
| mix_mortar_fresh_external_draw_kg | mix_mortar | material | mix_mortar_fresh_external_draw_kg = actual_mix_water | `mix_water` |  | `actual_mix_water` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| mix_mortar_material_internal_in_kg | mix_mortar | material | mix_mortar_material_internal_in_kg = actual_dry_mortar + actual_mix_mortar_packaging_feed | `dry_mortar`; `mix_mortar_packaging_feed` |  | `actual_dry_mortar`; `actual_mix_mortar_packaging_feed` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| mix_mortar_final_retained_mass_kg | mix_mortar | material | mix_mortar_final_retained_mass_kg = EVIDENCED_ZERO(mix_mortar_final_retained_mass_kg_absence_records) |  |  |  | `mix_mortar_final_retained_mass_kg_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_mass_kg 都会阻断闭合，须明确审查角色及路径。 |
| mix_mortar_next_material_handoff_kg | mix_mortar | material | mix_mortar_next_material_handoff_kg = actual_wet_mortar_feed | `wet_mortar_feed` |  | `actual_wet_mortar_feed` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| mix_mortar_material_discard_kg | mix_mortar | material | mix_mortar_material_discard_kg = actual_mix_mortar_waste + actual_mix_packaging_waste | `mix_mortar_waste`; `mix_packaging_waste` |  | `actual_mix_mortar_waste`; `actual_mix_packaging_waste` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| mix_mortar_aqueous_waste_kg | mix_mortar | material | mix_mortar_aqueous_waste_kg = actual_mix_wastewater | `mix_wastewater` |  | `actual_mix_wastewater` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| mix_mortar_direct_release_kg | mix_mortar | material | mix_mortar_direct_release_kg = actual_mix_water_vapour + actual_mix_direct_release | `mix_water_vapour`; `mix_direct_release` |  | `actual_mix_water_vapour`; `actual_mix_direct_release` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| mix_mortar_usable_exit_kg | mix_mortar | material | mix_mortar_usable_exit_kg = actual_mix_unused_return | `mix_unused_return` |  | `actual_mix_unused_return` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| mix_mortar_other_exclusive_transfer_kg | mix_mortar | material | mix_mortar_other_exclusive_transfer_kg = EVIDENCED_ZERO(mix_mortar_other_exclusive_transfer_absence_records) |  |  |  | `mix_mortar_other_exclusive_transfer_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_transfer 都会阻断闭合，须明确审查角色及路径。 |
| lay_joint_opening_processed_wip_kg | lay_joint | material | lay_joint_opening_processed_wip_kg = WIP_MASS(lay_joint_opening_processed_wip_records) | `bricks`; `lay_mortar`; `restraint_components`; `lay_water`; `lay_unused_return`; `lay_joint_packaging_feed`; `uncured_partition` |  |  | `lay_joint_opening_processed_wip_records` | `WIP_MASS` | 每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。 |
| lay_joint_closing_processed_wip_kg | lay_joint | material | lay_joint_closing_processed_wip_kg = WIP_MASS(lay_joint_closing_processed_wip_records) | `bricks`; `lay_mortar`; `restraint_components`; `lay_water`; `lay_unused_return`; `lay_joint_packaging_feed`; `uncured_partition` |  |  | `lay_joint_closing_processed_wip_records` | `WIP_MASS` | 每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。 |
| lay_joint_fresh_external_draw_kg | lay_joint | material | lay_joint_fresh_external_draw_kg = actual_lay_water | `lay_water` |  | `actual_lay_water` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| lay_joint_material_internal_in_kg | lay_joint | material | lay_joint_material_internal_in_kg = actual_bricks + actual_lay_mortar + actual_restraint_components + actual_lay_joint_packaging_feed | `bricks`; `lay_mortar`; `restraint_components`; `lay_joint_packaging_feed` |  | `actual_bricks`; `actual_lay_mortar`; `actual_restraint_components`; `actual_lay_joint_packaging_feed` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| lay_joint_final_retained_mass_kg | lay_joint | material | lay_joint_final_retained_mass_kg = EVIDENCED_ZERO(lay_joint_final_retained_mass_kg_absence_records) |  |  |  | `lay_joint_final_retained_mass_kg_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_mass_kg 都会阻断闭合，须明确审查角色及路径。 |
| lay_joint_next_material_handoff_kg | lay_joint | material | lay_joint_next_material_handoff_kg = WALL_COMPONENT_MASS(uncured_partition_measured_component_mass_records, uncured_partition_same_state_mass_bridge_ref, uncured_partition_whole_or_components_partition_ref) | `uncured_partition` |  | `actual_uncured_partition` | `uncured_partition_measured_component_mass_records`; `uncured_partition_same_state_mass_bridge_ref`; `uncured_partition_whole_or_components_partition_ref` | `WALL_COMPONENT_MASS` | 面积卡片只锚定墙板/事件。质量池取同一状态下实际实测的整件质量或组成 kg 记录，两者择一；不使用面积加项、假定 kg/m2 或重复整件/分项质量。 |
| lay_joint_material_discard_kg | lay_joint | material | lay_joint_material_discard_kg = actual_lay_solid_waste | `lay_solid_waste` |  | `actual_lay_solid_waste` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| lay_joint_aqueous_waste_kg | lay_joint | material | lay_joint_aqueous_waste_kg = actual_lay_wastewater | `lay_wastewater` |  | `actual_lay_wastewater` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| lay_joint_direct_release_kg | lay_joint | material | lay_joint_direct_release_kg = actual_lay_water_vapour + actual_lay_direct_release | `lay_water_vapour`; `lay_direct_release` |  | `actual_lay_water_vapour`; `actual_lay_direct_release` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| lay_joint_usable_exit_kg | lay_joint | material | lay_joint_usable_exit_kg = actual_lay_unused_return | `lay_unused_return` |  | `actual_lay_unused_return` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| lay_joint_other_exclusive_transfer_kg | lay_joint | material | lay_joint_other_exclusive_transfer_kg = EVIDENCED_ZERO(lay_joint_other_exclusive_transfer_absence_records) |  |  |  | `lay_joint_other_exclusive_transfer_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_transfer 都会阻断闭合，须明确审查角色及路径。 |
| cure_accept_opening_processed_wip_kg | cure_accept | material | cure_accept_opening_processed_wip_kg = WIP_MASS(cure_accept_opening_processed_wip_records) | `protection_material`; `cure_cleaning_material`; `cure_water`; `cure_unused_return`; `cure_accept_packaging_feed`; `cure_wall_feed` |  |  | `cure_accept_opening_processed_wip_records` | `WIP_MASS` | 每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。 |
| cure_accept_closing_processed_wip_kg | cure_accept | material | cure_accept_closing_processed_wip_kg = WIP_MASS(cure_accept_closing_processed_wip_records) | `protection_material`; `cure_cleaning_material`; `cure_water`; `cure_unused_return`; `cure_accept_packaging_feed`; `cure_wall_feed` |  |  | `cure_accept_closing_processed_wip_records` | `WIP_MASS` | 每条观测均指明所列自身卡片及未归一化来源输出/事件、准确当前状态实测 kg、期间和保管权，关联上期末在制品或本期留存。整件组装体或组成只能择一；排除已在毛领用量扣除的完整未领库存。期末在制品状态必须位于全部真实交接、验收保留和退出之后。 |
| cure_accept_fresh_external_draw_kg | cure_accept | material | cure_accept_fresh_external_draw_kg = actual_cure_water | `cure_water` |  | `actual_cure_water` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| cure_accept_material_internal_in_kg | cure_accept | material | cure_accept_material_internal_in_kg = actual_protection_material + actual_cure_cleaning_material + actual_cure_accept_packaging_feed + WALL_COMPONENT_MASS(cure_wall_feed_measured_component_mass_records, cure_wall_feed_same_state_mass_bridge_ref, cure_wall_feed_whole_or_components_partition_ref) | `protection_material`; `cure_cleaning_material`; `cure_accept_packaging_feed`; `cure_wall_feed` |  | `actual_protection_material`; `actual_cure_cleaning_material`; `actual_cure_accept_packaging_feed`; `actual_cure_wall_feed` | `cure_wall_feed_measured_component_mass_records`; `cure_wall_feed_same_state_mass_bridge_ref`; `cure_wall_feed_whole_or_components_partition_ref` | `WALL_COMPONENT_MASS` | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 面积卡片只锚定墙板/事件。质量池取同一状态下实际实测的整件质量或组成 kg 记录，两者择一；不使用面积加项、假定 kg/m2 或重复整件/分项质量。 |
| cure_accept_final_retained_mass_kg | cure_accept | material | cure_accept_final_retained_mass_kg = WALL_COMPONENT_MASS(accepted_partition_service_measured_component_mass_records, accepted_partition_service_same_state_mass_bridge_ref, accepted_partition_service_whole_or_components_partition_ref) | `accepted_partition_service` |  | `actual_accepted_partition_service` | `accepted_partition_service_measured_component_mass_records`; `accepted_partition_service_same_state_mass_bridge_ref`; `accepted_partition_service_whole_or_components_partition_ref` | `WALL_COMPONENT_MASS` | 面积卡片只锚定墙板/事件。质量池取同一状态下实际实测的整件质量或组成 kg 记录，两者择一；不使用面积加项、假定 kg/m2 或重复整件/分项质量。 |
| cure_accept_next_material_handoff_kg | cure_accept | material | cure_accept_next_material_handoff_kg = EVIDENCED_ZERO(cure_accept_next_material_handoff_kg_absence_records) |  |  |  | `cure_accept_next_material_handoff_kg_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 next_material_handoff_kg 都会阻断闭合，须明确审查角色及路径。 |
| cure_accept_material_discard_kg | cure_accept | material | cure_accept_material_discard_kg = actual_cure_solid_waste | `cure_solid_waste` |  | `actual_cure_solid_waste` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| cure_accept_aqueous_waste_kg | cure_accept | material | cure_accept_aqueous_waste_kg = actual_cure_wastewater | `cure_wastewater` |  | `actual_cure_wastewater` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| cure_accept_direct_release_kg | cure_accept | material | cure_accept_direct_release_kg = actual_cure_water_vapour + actual_cure_other_release | `cure_water_vapour`; `cure_other_release` |  | `actual_cure_water_vapour`; `actual_cure_other_release` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| cure_accept_usable_exit_kg | cure_accept | material | cure_accept_usable_exit_kg = actual_cure_unused_return | `cure_unused_return` |  | `actual_cure_unused_return` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| cure_accept_other_exclusive_transfer_kg | cure_accept | material | cure_accept_other_exclusive_transfer_kg = EVIDENCED_ZERO(cure_accept_other_exclusive_transfer_absence_records) |  |  |  | `cure_accept_other_exclusive_transfer_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_transfer 都会阻断闭合，须明确审查角色及路径。 |
| mix_water_vapour_gross_fresh_draw_kg | mix_mortar | water | mix_water_vapour_gross_fresh_draw_kg = actual_mix_water | `mix_water` |  | `actual_mix_water` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| mix_water_vapour_unused_fresh_exit_kg | mix_mortar | water | mix_water_vapour_unused_fresh_exit_kg = WATER_PORTION(actual_mix_unused_return, mix_mortar_unused_fresh_exit_water_portion_records) | `mix_unused_return` |  | `actual_mix_unused_return` | `mix_mortar_unused_fresh_exit_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅选取关联 mix_water 的原始未用新供水份额，排除已改变的过程液、其他材料固有水、废物及在制品。该正份额已经位于自身可用退出总量内，不形成第二个材料交换。 必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| mix_water_vapour_internal_received_water_kg | mix_mortar | water | mix_water_vapour_internal_received_water_kg = EVIDENCED_ZERO(mix_mortar_internal_received_absence_records) |  |  |  | `mix_mortar_internal_received_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 internal_received 都会阻断闭合，须明确审查角色及路径。 |
| mix_water_vapour_material_bound_and_free_entry_water_kg | mix_mortar | water | mix_water_vapour_material_bound_and_free_entry_water_kg = WATER_PORTION(actual_dry_mortar, mix_mortar_material_entry_water_portion_records) + WATER_PORTION(actual_mix_mortar_packaging_feed, mix_mortar_material_entry_water_portion_records) | `dry_mortar`; `mix_mortar_packaging_feed` |  | `actual_dry_mortar`; `actual_mix_mortar_packaging_feed` | `mix_mortar_material_entry_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅包含这些接收材料内固有/附带的水，包括真实预混料水分或配制溶液水。排除另供新水及湿过程交接水；已包含在工厂产品中的水不能再次作为新水采购。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| mix_water_vapour_opening_processed_water_kg | mix_mortar | water | mix_water_vapour_opening_processed_water_kg = WIP_WATER(mix_mortar_opening_processed_wip_records, mix_mortar_opening_processed_wip_water_records) | `dry_mortar`; `mix_water`; `wet_mortar_feed`; `mix_unused_return`; `mix_mortar_packaging_feed` |  |  | `mix_mortar_opening_processed_wip_records`; `mix_mortar_opening_processed_wip_water_records` | `WIP_WATER` | 取准确期初加工在制品观测的水份额，按自身来源卡片/输出/事件和同一当前状态测量关联。排除完整未领/新水期末库存以及全部交接、验收保留、废物/退出池。期初在制品水须关联上一个截止点的期末状态，不能视为新进入。 |
| mix_water_vapour_closing_processed_wip_water_kg | mix_mortar | water | mix_water_vapour_closing_processed_wip_water_kg = WIP_WATER(mix_mortar_closing_processed_wip_records, mix_mortar_closing_processed_wip_water_records) | `dry_mortar`; `mix_water`; `wet_mortar_feed`; `mix_unused_return`; `mix_mortar_packaging_feed` |  |  | `mix_mortar_closing_processed_wip_records`; `mix_mortar_closing_processed_wip_water_records` | `WIP_WATER` | 取准确期末加工在制品观测的水份额，按自身来源卡片/输出/事件和同一当前状态测量关联。排除完整未领/新水期末库存以及全部交接、验收保留、废物/退出池。期初在制品水须关联上一个截止点的期末状态，不能视为新进入。 |
| mix_water_vapour_next_handoff_water_kg | mix_mortar | water | mix_water_vapour_next_handoff_water_kg = WATER_PORTION(actual_wet_mortar_feed, mix_mortar_next_handoff_water_kg_water_portion_records) | `wet_mortar_feed` |  | `actual_wet_mortar_feed` | `mix_mortar_next_handoff_water_kg_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅包含扣除自身节点真实废物/释放后、实际向外过程交接时仍保留的水；其中结合/游离份额属于该交接，不能同时计为最终保留。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| mix_water_vapour_final_retained_bound_water_kg | mix_mortar | water | mix_water_vapour_final_retained_bound_water_kg = EVIDENCED_ZERO(mix_mortar_final_retained_bound_water_kg_absence_records) |  |  |  | `mix_mortar_final_retained_bound_water_kg_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_bound_water_kg 都会阻断闭合，须明确审查角色及路径。 |
| mix_water_vapour_final_retained_free_water_kg | mix_mortar | water | mix_water_vapour_final_retained_free_water_kg = EVIDENCED_ZERO(mix_mortar_final_retained_free_water_kg_absence_records) |  |  |  | `mix_mortar_final_retained_free_water_kg_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_free_water_kg 都会阻断闭合，须明确审查角色及路径。 |
| mix_water_vapour_solid_waste_water_kg | mix_mortar | water | mix_water_vapour_solid_waste_water_kg = WATER_PORTION(actual_mix_mortar_waste, mix_mortar_solid_waste_water_kg_water_portion_records) + WATER_PORTION(actual_mix_packaging_waste, mix_mortar_solid_waste_water_kg_water_portion_records) | `mix_mortar_waste`; `mix_packaging_waste` |  | `actual_mix_mortar_waste`; `actual_mix_packaging_waste` | `mix_mortar_solid_waste_water_kg_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计材料废弃物/捕集残余中的实测水，按来源废物的材料和当前含水状态展开，不能把总质量当作水量。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| mix_water_vapour_aqueous_waste_water_kg | mix_mortar | water | mix_water_vapour_aqueous_waste_water_kg = WATER_PORTION(actual_mix_wastewater, mix_mortar_aqueous_waste_water_kg_water_portion_records) | `mix_wastewater` |  | `actual_mix_wastewater` | `mix_mortar_aqueous_waste_water_kg_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计收集废水中的实际水份额，排除悬浮固体及其他溶质，不能再作为直接释放重复计入。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| mix_water_vapour_direct_liquid_release_water_kg | mix_mortar | water | mix_water_vapour_direct_liquid_release_water_kg = WATER_PORTION(actual_mix_direct_release, mix_mortar_direct_liquid_release_water_kg_water_portion_records) | `mix_direct_release` |  | `actual_mix_direct_release` | `mix_mortar_direct_liquid_release_water_kg_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计有真实接收介质证据的实际向外液态 H2O 份额，与水蒸气、其他物质和收集废水互斥。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| mix_water_vapour_other_exclusive_water_exit_kg | mix_mortar | water | mix_water_vapour_other_exclusive_water_exit_kg = EVIDENCED_ZERO(mix_mortar_other_exclusive_water_exit_absence_records) |  |  |  | `mix_mortar_other_exclusive_water_exit_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_water_exit 都会阻断闭合，须明确审查角色及路径。 |
| lay_water_vapour_gross_fresh_draw_kg | lay_joint | water | lay_water_vapour_gross_fresh_draw_kg = actual_lay_water | `lay_water` |  | `actual_lay_water` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| lay_water_vapour_unused_fresh_exit_kg | lay_joint | water | lay_water_vapour_unused_fresh_exit_kg = WATER_PORTION(actual_lay_unused_return, lay_joint_unused_fresh_exit_water_portion_records) | `lay_unused_return` |  | `actual_lay_unused_return` | `lay_joint_unused_fresh_exit_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅选取关联 lay_water 的原始未用新供水份额，排除已改变的过程液、其他材料固有水、废物及在制品。该正份额已经位于自身可用退出总量内，不形成第二个材料交换。 必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| lay_water_vapour_internal_received_water_kg | lay_joint | water | lay_water_vapour_internal_received_water_kg = WATER_PORTION(actual_lay_mortar, lay_joint_internal_received_water_portion_records) | `lay_mortar` |  | `actual_lay_mortar` | `lay_joint_internal_received_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计真实接收湿过程/组装体交接中附带的水，并关联上游同状态交出。不能再次计作配方/材料进入水分。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| lay_water_vapour_material_bound_and_free_entry_water_kg | lay_joint | water | lay_water_vapour_material_bound_and_free_entry_water_kg = WATER_PORTION(actual_bricks, lay_joint_material_entry_water_portion_records) + WATER_PORTION(actual_restraint_components, lay_joint_material_entry_water_portion_records) + WATER_PORTION(actual_lay_joint_packaging_feed, lay_joint_material_entry_water_portion_records) | `bricks`; `restraint_components`; `lay_joint_packaging_feed` |  | `actual_bricks`; `actual_restraint_components`; `actual_lay_joint_packaging_feed` | `lay_joint_material_entry_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅包含这些接收材料内固有/附带的水，包括真实预混料水分或配制溶液水。排除另供新水及湿过程交接水；已包含在工厂产品中的水不能再次作为新水采购。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| lay_water_vapour_opening_processed_water_kg | lay_joint | water | lay_water_vapour_opening_processed_water_kg = WIP_WATER(lay_joint_opening_processed_wip_records, lay_joint_opening_processed_wip_water_records) | `bricks`; `lay_mortar`; `restraint_components`; `lay_water`; `lay_unused_return`; `lay_joint_packaging_feed`; `uncured_partition` |  |  | `lay_joint_opening_processed_wip_records`; `lay_joint_opening_processed_wip_water_records` | `WIP_WATER` | 取准确期初加工在制品观测的水份额，按自身来源卡片/输出/事件和同一当前状态测量关联。排除完整未领/新水期末库存以及全部交接、验收保留、废物/退出池。期初在制品水须关联上一个截止点的期末状态，不能视为新进入。 |
| lay_water_vapour_closing_processed_wip_water_kg | lay_joint | water | lay_water_vapour_closing_processed_wip_water_kg = WIP_WATER(lay_joint_closing_processed_wip_records, lay_joint_closing_processed_wip_water_records) | `bricks`; `lay_mortar`; `restraint_components`; `lay_water`; `lay_unused_return`; `lay_joint_packaging_feed`; `uncured_partition` |  |  | `lay_joint_closing_processed_wip_records`; `lay_joint_closing_processed_wip_water_records` | `WIP_WATER` | 取准确期末加工在制品观测的水份额，按自身来源卡片/输出/事件和同一当前状态测量关联。排除完整未领/新水期末库存以及全部交接、验收保留、废物/退出池。期初在制品水须关联上一个截止点的期末状态，不能视为新进入。 |
| lay_water_vapour_next_handoff_water_kg | lay_joint | water | lay_water_vapour_next_handoff_water_kg = WATER_PORTION(WALL_COMPONENT_MASS(uncured_partition_measured_component_mass_records, uncured_partition_same_state_mass_bridge_ref, uncured_partition_whole_or_components_partition_ref), lay_joint_next_handoff_water_kg_water_portion_records) | `uncured_partition` |  | `actual_uncured_partition` | `uncured_partition_measured_component_mass_records`; `uncured_partition_same_state_mass_bridge_ref`; `uncured_partition_whole_or_components_partition_ref`; `lay_joint_next_handoff_water_kg_water_portion_records` | `WATER_PORTION`; `WALL_COMPONENT_MASS` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅包含扣除自身节点真实废物/释放后、实际向外过程交接时仍保留的水；其中结合/游离份额属于该交接，不能同时计为最终保留。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| lay_water_vapour_final_retained_bound_water_kg | lay_joint | water | lay_water_vapour_final_retained_bound_water_kg = EVIDENCED_ZERO(lay_joint_final_retained_bound_water_kg_absence_records) |  |  |  | `lay_joint_final_retained_bound_water_kg_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_bound_water_kg 都会阻断闭合，须明确审查角色及路径。 |
| lay_water_vapour_final_retained_free_water_kg | lay_joint | water | lay_water_vapour_final_retained_free_water_kg = EVIDENCED_ZERO(lay_joint_final_retained_free_water_kg_absence_records) |  |  |  | `lay_joint_final_retained_free_water_kg_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 final_retained_free_water_kg 都会阻断闭合，须明确审查角色及路径。 |
| lay_water_vapour_solid_waste_water_kg | lay_joint | water | lay_water_vapour_solid_waste_water_kg = WATER_PORTION(actual_lay_solid_waste, lay_joint_solid_waste_water_kg_water_portion_records) | `lay_solid_waste` |  | `actual_lay_solid_waste` | `lay_joint_solid_waste_water_kg_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计材料废弃物/捕集残余中的实测水，按来源废物的材料和当前含水状态展开，不能把总质量当作水量。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| lay_water_vapour_aqueous_waste_water_kg | lay_joint | water | lay_water_vapour_aqueous_waste_water_kg = WATER_PORTION(actual_lay_wastewater, lay_joint_aqueous_waste_water_kg_water_portion_records) | `lay_wastewater` |  | `actual_lay_wastewater` | `lay_joint_aqueous_waste_water_kg_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计收集废水中的实际水份额，排除悬浮固体及其他溶质，不能再作为直接释放重复计入。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| lay_water_vapour_direct_liquid_release_water_kg | lay_joint | water | lay_water_vapour_direct_liquid_release_water_kg = WATER_PORTION(actual_lay_direct_release, lay_joint_direct_liquid_release_water_kg_water_portion_records) | `lay_direct_release` |  | `actual_lay_direct_release` | `lay_joint_direct_liquid_release_water_kg_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计有真实接收介质证据的实际向外液态 H2O 份额，与水蒸气、其他物质和收集废水互斥。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| lay_water_vapour_other_exclusive_water_exit_kg | lay_joint | water | lay_water_vapour_other_exclusive_water_exit_kg = EVIDENCED_ZERO(lay_joint_other_exclusive_water_exit_absence_records) |  |  |  | `lay_joint_other_exclusive_water_exit_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_water_exit 都会阻断闭合，须明确审查角色及路径。 |
| cure_water_vapour_gross_fresh_draw_kg | cure_accept | water | cure_water_vapour_gross_fresh_draw_kg = actual_cure_water | `cure_water` |  | `actual_cure_water` |  |  | 使用自身卡片的完整未归一化输出，按真实材料/事件/状态/期间各计一次，采用记录的完整量。 |
| cure_water_vapour_unused_fresh_exit_kg | cure_accept | water | cure_water_vapour_unused_fresh_exit_kg = WATER_PORTION(actual_cure_unused_return, cure_accept_unused_fresh_exit_water_portion_records) | `cure_unused_return` |  | `actual_cure_unused_return` | `cure_accept_unused_fresh_exit_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅选取关联 cure_water 的原始未用新供水份额，排除已改变的过程液、其他材料固有水、废物及在制品。该正份额已经位于自身可用退出总量内，不形成第二个材料交换。 必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| cure_water_vapour_internal_received_water_kg | cure_accept | water | cure_water_vapour_internal_received_water_kg = WATER_PORTION(WALL_COMPONENT_MASS(cure_wall_feed_measured_component_mass_records, cure_wall_feed_same_state_mass_bridge_ref, cure_wall_feed_whole_or_components_partition_ref), cure_accept_internal_received_water_portion_records) | `cure_wall_feed` |  | `actual_cure_wall_feed` | `cure_wall_feed_measured_component_mass_records`; `cure_wall_feed_same_state_mass_bridge_ref`; `cure_wall_feed_whole_or_components_partition_ref`; `cure_accept_internal_received_water_portion_records` | `WATER_PORTION`; `WALL_COMPONENT_MASS` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计真实接收湿过程/组装体交接中附带的水，并关联上游同状态交出。不能再次计作配方/材料进入水分。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| cure_water_vapour_material_bound_and_free_entry_water_kg | cure_accept | water | cure_water_vapour_material_bound_and_free_entry_water_kg = WATER_PORTION(actual_protection_material, cure_accept_material_entry_water_portion_records) + WATER_PORTION(actual_cure_cleaning_material, cure_accept_material_entry_water_portion_records) + WATER_PORTION(actual_cure_accept_packaging_feed, cure_accept_material_entry_water_portion_records) | `protection_material`; `cure_cleaning_material`; `cure_accept_packaging_feed` |  | `actual_protection_material`; `actual_cure_cleaning_material`; `actual_cure_accept_packaging_feed` | `cure_accept_material_entry_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅包含这些接收材料内固有/附带的水，包括真实预混料水分或配制溶液水。排除另供新水及湿过程交接水；已包含在工厂产品中的水不能再次作为新水采购。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| cure_water_vapour_opening_processed_water_kg | cure_accept | water | cure_water_vapour_opening_processed_water_kg = WIP_WATER(cure_accept_opening_processed_wip_records, cure_accept_opening_processed_wip_water_records) | `protection_material`; `cure_cleaning_material`; `cure_water`; `cure_unused_return`; `cure_accept_packaging_feed`; `cure_wall_feed` |  |  | `cure_accept_opening_processed_wip_records`; `cure_accept_opening_processed_wip_water_records` | `WIP_WATER` | 取准确期初加工在制品观测的水份额，按自身来源卡片/输出/事件和同一当前状态测量关联。排除完整未领/新水期末库存以及全部交接、验收保留、废物/退出池。期初在制品水须关联上一个截止点的期末状态，不能视为新进入。 |
| cure_water_vapour_closing_processed_wip_water_kg | cure_accept | water | cure_water_vapour_closing_processed_wip_water_kg = WIP_WATER(cure_accept_closing_processed_wip_records, cure_accept_closing_processed_wip_water_records) | `protection_material`; `cure_cleaning_material`; `cure_water`; `cure_unused_return`; `cure_accept_packaging_feed`; `cure_wall_feed` |  |  | `cure_accept_closing_processed_wip_records`; `cure_accept_closing_processed_wip_water_records` | `WIP_WATER` | 取准确期末加工在制品观测的水份额，按自身来源卡片/输出/事件和同一当前状态测量关联。排除完整未领/新水期末库存以及全部交接、验收保留、废物/退出池。期初在制品水须关联上一个截止点的期末状态，不能视为新进入。 |
| cure_water_vapour_next_handoff_water_kg | cure_accept | water | cure_water_vapour_next_handoff_water_kg = EVIDENCED_ZERO(cure_accept_next_handoff_water_kg_absence_records) |  |  |  | `cure_accept_next_handoff_water_kg_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 next_handoff_water_kg 都会阻断闭合，须明确审查角色及路径。 |
| cure_water_vapour_final_retained_bound_water_kg | cure_accept | water | cure_water_vapour_final_retained_bound_water_kg = WATER_PORTION(WALL_COMPONENT_MASS(accepted_partition_service_measured_component_mass_records, accepted_partition_service_same_state_mass_bridge_ref, accepted_partition_service_whole_or_components_partition_ref), cure_accept_final_retained_bound_water_kg_water_portion_records) | `accepted_partition_service` |  | `actual_accepted_partition_service` | `accepted_partition_service_measured_component_mass_records`; `accepted_partition_service_same_state_mass_bridge_ref`; `accepted_partition_service_whole_or_components_partition_ref`; `cure_accept_final_retained_bound_water_kg_water_portion_records` | `WATER_PORTION`; `WALL_COMPONENT_MASS` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计最终验收墙体状态中保留的实测结合水；不预设化学计量或水化产率，不与客户交付重复。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| cure_water_vapour_final_retained_free_water_kg | cure_accept | water | cure_water_vapour_final_retained_free_water_kg = WATER_PORTION(WALL_COMPONENT_MASS(accepted_partition_service_measured_component_mass_records, accepted_partition_service_same_state_mass_bridge_ref, accepted_partition_service_whole_or_components_partition_ref), cure_accept_final_retained_free_water_kg_water_portion_records) | `accepted_partition_service` |  | `actual_accepted_partition_service` | `accepted_partition_service_measured_component_mass_records`; `accepted_partition_service_same_state_mass_bridge_ref`; `accepted_partition_service_whole_or_components_partition_ref`; `cure_accept_final_retained_free_water_kg_water_portion_records` | `WATER_PORTION`; `WALL_COMPONENT_MASS` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计最终验收墙体状态中保留的实测游离水，与结合水及全部其他结束池互斥。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| cure_water_vapour_solid_waste_water_kg | cure_accept | water | cure_water_vapour_solid_waste_water_kg = WATER_PORTION(actual_cure_solid_waste, cure_accept_solid_waste_water_kg_water_portion_records) | `cure_solid_waste` |  | `actual_cure_solid_waste` | `cure_accept_solid_waste_water_kg_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计材料废弃物/捕集残余中的实测水，按来源废物的材料和当前含水状态展开，不能把总质量当作水量。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| cure_water_vapour_aqueous_waste_water_kg | cure_accept | water | cure_water_vapour_aqueous_waste_water_kg = WATER_PORTION(actual_cure_wastewater, cure_accept_aqueous_waste_water_kg_water_portion_records) | `cure_wastewater` |  | `actual_cure_wastewater` | `cure_accept_aqueous_waste_water_kg_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计收集废水中的实际水份额，排除悬浮固体及其他溶质，不能再作为直接释放重复计入。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| cure_water_vapour_direct_liquid_release_water_kg | cure_accept | water | cure_water_vapour_direct_liquid_release_water_kg = WATER_PORTION(actual_cure_other_release, cure_accept_direct_liquid_release_water_kg_water_portion_records) | `cure_other_release` |  | `actual_cure_other_release` | `cure_accept_direct_liquid_release_water_kg_water_portion_records` | `WATER_PORTION` | 份额记录保留每一来源卡片/输出/事件及真实状态/时点。仅计有真实接收介质证据的实际向外液态 H2O 份额，与水蒸气、其他物质和收集废水互斥。必须有实测水 kg 或同状态实测水比例，湿总质量不是水质量。结合/游离池、来源整件或组成及其他去向均须互斥。水含量未知会阻断闭合。 |
| cure_water_vapour_other_exclusive_water_exit_kg | cure_accept | water | cure_water_vapour_other_exclusive_water_exit_kg = EVIDENCED_ZERO(cure_accept_other_exclusive_water_exit_absence_records) |  |  |  | `cure_accept_other_exclusive_water_exit_absence_records` | `EVIDENCED_ZERO` | 必须有自身节点覆盖完整期间的真实未发生证据；任何实际非零或未知的 other_exclusive_water_exit 都会阻断闭合，须明确审查角色及路径。 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_design` | 进入和最终验收 | 保留每项必需部件的签字设计、准确供应商兼容性、当前项目说明及竣工验收清单。 | design_release_ref；component_schedule_ref；supplier_instruction_ref；acceptance_ref |
| `dq_stock` | 全部材料与包装账 | 记录各材料/状态/保管位置及唯一最终去向，包括使用点后续批次库存；将每个毛领用、领出、接收、退出及在制品量关联到真实事件。 | stock_custody_partition_ref；保管权证据；称量记录；upstream_coverage_ref |
| `dq_water` | 每个含水节点 | 按实际时点区分进入/交接/保留/废物各状态的水含量。结合水仍是质量，未解释闭合差额属于不确定性。 | pool_partition_ref；含水测量方法；evaporation_method_ref；uncertainty_kg |
| `dq_meter` | 每个能量或共享服务节点 | 保留真实表号、因子、来源区间、拓扑及完整合格用户集合。核对直接及残余归属，证明零残余情形。 | 读数区间数组；conversion_factor_ref；meter_topology_ref；contract_unit_ref |
| `dq_event` | 全部真实发生 | 按物理事件谱系对电子修订去重，保留真实重复施工及其节点/期间；更换/终止未解决仍是缺口。 | physical_event_id；record_revision；rework_parent_event_id；period_attribution_ref |
| `dq_quantity` | 全部发布量 | 保留原始记录和换算不确定度，保持未归一化数量及一次 A 归一化。仅凭经审查独立证据替换暂定筛查，不能用样本自身最大值验证同一样本。 | 校准；原始数量；真实同状态换算；计算审计 |
| `dq_identity` | 全部已解析及未解析交换 | 宣称最终下游交换就绪前，须明确实际材料/供应方/物质/介质及独立量纲支持。数量可用不能证明数据库身份。 | 实际供应商/材料和废物去向证据；已核实身份/支持决定 |

## 9. 校验规则

校验评估已声明路线、所有权和证据，保留已做/跳过检查及不确定度。身份或数量缺失在其真实角色披露，不能替换为零或通用代理。数学或结构检查不能单独证明实体设计、外部流身份或发布就绪：

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_gate` | scope_and_final_output | 确认已放行进入设计，以及所有真实兼容约束、过梁、变形缝、防火/声学封闭和保护/养护/清洗的最终竣工完整性。未解决墙板不计入已验收 A，并保留其在制品/修正证据。 | `bda-workmanship-2023`; `ancon-restraint-interface` |
| `validation_geometry` | area_and_mass | A 必须为正，来源为最终验收单一墙平面表面并集，洞口扣一次。双面、重复验收单或返工次数均不能增加 A。实体接口面积是观测量，不能进入 kg 平衡或隐含新供结构。 |  |
| `validation_material` | gross_stock_and_transfers | 逐材料/SKU/状态核对期初、外部进入、所有位置完整期末库存、实际领出、本节点收料废物/可用退出及互斥在制品。按事件、数量、状态和保管权匹配领出/接收。未领的后续批次完整库存，无论位置都仍在收料保管权内；不能重复采购或第二次扣库存。 |  |
| `validation_units` | conversion_and_measured_absence | 件数/长度/面积到 kg 的换算须为同一 SKU、当前状态的实测证据，并有校准单位及明确组成、整件或分项责任。禁止混合量纲相加。零须先证明未发生；记录缺失和条件性激活未知均保留缺口。 |  |
| `validation_water` | mix_lay_cure | 以实际毛供水及附带进入水核对自身节点按状态/时点互斥的水池。完整新水期末库存只扣一次。区分真实交接、最终结合/游离保留、废物水、液态释放、可用退出和加工在制品。H2O 向未细分空气释放必须有真实经验证蒸发证据，差额或水化状态变化均不足。 | `bda-mortar-2023` |
| `validation_release` | elementary_output_roles | 直接释放须有真实向外物质/颗粒基准及接收介质，避免捕集尘/废物重复。释放输出卡不能表示吸收；任何实际吸收须有单独审查的输入语义，不能预设碳化或通用尘身份。 |  |
| `validation_meter` | meter_topology_and_service | 审查电表编号、源区间、因子、上级拓扑和完整合格用户集合，核对残余算术、内外边界、零残余例外及汇总核对。服务 h 须有实际供应方/合同单位及期间，不能采用假定班次或人工代理。仅正残余可在完整用户及正权重分母下分摊；负数或未知残余阻断归属，不能分摊、截零或转为信用；证明完整且恰为零时无须权重。 |  |
| `validation_rework` | all_reject_routes | 每项拒收均须有实际状态、所有者及路径：返工、有记录的可用退出、负荷处理经审查的回收/降级、废物或保留在制品。匹配循环事件，保留全部真实修正。未解决不合格墙面不能成为最终验收产出。 | `bda-workmanship-2023` |
| `validation_periods` | period_asset_event_linkage | 列全批次阶段和期间，将投入、资产、产出及修正/更换/终止事件关联起来。审查期间专属归属并防止负荷或验收几何跨期重复。更换或终止所有权未解决时阻断最终确定。 |  |
| `validation_quality` | ranges_and_identity | 全部暂定 reasoned_estimate 范围仅作复核筛查，不能充当经验因子、验收限值或允许缺失量的理由。实际交换身份、属性/单位和数量证据须独立核验；供应方/材料/物质及 Duration/Energy 支持缺口须明确保留。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 施工批次前景数据包，供下游 process 或 lifecyclemodel 投影 |
| downstream_use | 仅在已声明已验收室内隔墙路线及限定信息范围内作为 secondary_dataset 和/或 background_dataset |
| allowed_use | 在已审查范围和测量下，使用真实上游材料、供应方及去向，对准确界定的服务进行施工阶段建模 |
| excluded_use | 通用墙体设计/认证；材料制造清单；外墙/承重/空腔/纯石灰/现场配方路线；装饰饰面或建筑使用/寿命终结清单；假定寿命/养护/天气/配方默认值 |
| required_metadata | PCR 身份/版本；地理/场址/批次及真实阶段/期间边界；砖/预混料/附属件身份和状态；部件所有权/设计/说明/竣工验收；唯一面积和洞口几何；全部库存/保管权/在制品和返工事件谱系；上游数据集/包装覆盖；能量/服务用户拓扑及归属；测量不确定度 |
| required_quality_disclosure | 实测/计算量与暂定筛查的区别；已做/跳过检查；身份/属性/单位缺口；来源年代/范围限制；材料/水闭合和缺失记录；残余归属证据；拒收/返工去向及未解决期间/所有权决定 |
| update_trigger | 实际产品/路线/设计所有权、供应商说明、验收门槛或上游数据集边界变化；测量/期间归属重大修订；新获支持身份或独立定量证据 |

## 11. 数据源

BDA 手册介绍通用黏土砖工艺及砂浆实践，包含历史示例和多种路线；它们不能确立工厂预混料消耗、砖尺寸、每日砌筑高度、养护时长、润湿指令或当前项目天气阈值。砂浆体积比例、每砖件数对应吨数、组分比例及缓凝示例均不是本 PCR 因子。约束文章说明工程接口，其砌块示例不能认证所有烧结黏土砖。真实项目设计和产品说明仍是必需前景证据。

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| bda-workmanship-2023 | handbook | Brick Development Association，《Good Site Practice and Workmanship》，2023 年 4 月，19 页。https://d23z90m210izbx.cloudfront.net/uploads/downloads/13.-Good-Site-Practice-Workmanship-General-Guide-2023.f1678702110.pdf | 第5-8页设计、参考验收、送货/储存/搬运；第9-11页放线、饱满接缝、切割及整饰时点；第14-15页实际保护和天气背景。仅为通用程序，项目/供应商细节具有控制作用。 |
| bda-mortar-2023 | handbook | Brick Development Association，《Mortar for Brickwork》，2023 年 4 月，18 页。https://d23z90m210izbx.cloudfront.net/uploads/downloads/08.-Mortar-for-Brickwork-Technical-Guide-2023.f1678701358.pdf | 第5-6页功能及设计选用；第8-10页水/吸水性、真实拌和与废物；第12-14页工厂干拌水泥基/筒仓状态；第15页纯石灰替代路线不在本范围。不能作为通用数量换算或养护因子。 |
| ancon-restraint-interface | extension_guidance | Ancon，《What is a Head Restraint and why are Head Restraints required in masonry panels?》，2017 年 5 月 8 日。https://www.ancon.co.uk/blog/what-is-a-head-restraint-and-why-are-head-restraints-required-in-masonry-panels | 仅支持由设计者控制的顶部约束/运动接口、兼容性及遗漏后果。文章尺寸、间距、荷载因子均不导入本 PCR。 |
