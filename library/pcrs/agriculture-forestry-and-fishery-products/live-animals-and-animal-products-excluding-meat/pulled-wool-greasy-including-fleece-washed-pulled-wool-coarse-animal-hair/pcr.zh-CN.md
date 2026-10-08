---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.pulled-wool-greasy-including-fleece-washed-pulled-wool-coarse-animal-hair
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 拔取的含脂羊毛及粗动物毛

## 1. 适用范围

本 PCR 分别覆盖两条原纤维路线：在拉毛场确实从带毛绵羊皮分离、按含脂或原毛洗涤状态出售的羊毛，以及按物种和等级申报、经剪取、梳取、收集或从合格且有记录的来源分离的粗动物毛。两条路线在物理上不可互换，不得合并为来源不明的平均产品。逐批申报物种、来源事件、采集方法、等级、含水、污染物、销售净重和实际农场、收集点或拉毛场交接点。仍附在出售皮张上的羊毛不属于拔毛。排除活体剪取绵羊毛、细动物毛、本类别以外的马尾毛/鬃毛、纺织梳理纤维、精洗毛、纱线、鞣制革和完整皮张。拉毛前洗皮或洗原毛不意味着纳入下游精洗毛工序。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.pulled-wool-greasy-including-fleece-washed-pulled-wool-coarse-animal-hair |
| classification_refs | CPC 3.0 02942 |
| covered_products | 从绵羊皮拔取的含脂或原毛洗涤原毛；另行申报物种的原粗动物毛。 |
| excluded_products | 剪取绵羊毛、细毛、鞣制皮、精洗/梳理纤维、纱线及不属本类的马尾毛或鬃毛。 |
| representative_product | 在实测交接点出售的一种已申报原纤维变体。 |
| production_route | 皮张与拔毛、脱毛皮分离，或独立采集粗动物毛；实际进行的初次清理/初处理、分级和包装。 |
| market_state | 按销售状态的未梳理原纤维；区分含脂、原毛洗涤和实际粗毛状态。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 按路线、物种、状态和交接点限定的原拔毛或粗动物毛。 |
| How much | 1 kg 净重销售原纤维，不含包装和可分离杂质。 |
| How well | 申报原纤维类型、等级、含水/污染、路线、来源事件和交接点；不默认折算为净纤维。 |
| How long or cycle | 将来源动物/皮张、采集批次、动物阶段、共用服务与交接分别关联实际期间且只计一次。 |
| reference_flow_link | `market_fibre` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 按路线、物种、状态和交接点限定的原拔毛或粗动物毛 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 拔毛或粗毛路线；物种；采集/来源事件；原料状态；等级；含水；污染；净重；交接点；报告期间 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | 每批销售产品 | Mass | kg | 以校准的毛重减包装皮重及可分离杂质得到销售净重；单独记录含水。 |
| m_state | 洗涤或干燥批次 | Mass 和实测含水比例 | kg;kg/kg | 核对前后质量和水；不采用通用含脂至精洗或洗涤至干燥折算。 |
| m_balance | 各分离和分级批次 | Mass | kg | 按实测不确定度核对投入、目标纤维、脱毛皮、降级品、弃料、废水与水分损失。 |
| m_period | 上游及共用服务 | 服务量和时间 | 服务单位;期间 | 对动物阶段、皮张取得、设备服务和产出事件只作一次期间索引。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 有记录的带毛绵羊皮进入拉毛场，或已记录物种的粗毛来源进入独立采集事件。 |
| starting_condition_role | 上游饲养、屠宰或合法回收提供兼容负担。拉毛场以已分摊负担的皮张开始；活体采毛记录实际采集服务，不将整只动物当作消耗质量。死后粗毛来源须有可追溯的物料界面。 |
| product_classification_scope | 仅已分离的原拔毛或符合类别的原粗动物毛。 |
| recursive_input_rule | 外购同类纤维保留其上游负担，不再次作为新采集品计算。 |
| upstream_dataset_requirement | 追溯动物/皮张来源、早期产出和期间分摊；不得默认皮张或纤维零负担。 |
| disclosure | 路线、物种、来源事件、共产品、皮张/脱毛皮与纤维交接、等级、含水、交接点、共用资产和分摊。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_routes | 来源与采集 | 拔毛路线始于单独取得的带毛绵羊皮。粗毛路线采用实际活体剪取/梳取/收集或有记录的合格死后分离，不得虚构拉毛化学工序。更早的繁育、肉、乳和纤维阶段保留在兼容上游数据中。 | fao-animal-fibres-ch4;un-cpc-3-notes |
| b_pull | 拔毛路线 | 实际洗皮、分离辅料、拔毛和脱毛皮交接仅在确实发生时纳入。可售脱毛皮是独立目标产出；未从整皮分离的附皮毛不是第二件产品。排除鞣制。 | fao-animal-fibres-ch4 |
| b_condition | 两条路线 | 实际进行的初次择毛、除杂和干燥纳入；须申报原毛洗涤。排除后续精洗及纺织梳理。 | fao-animal-fibres-ch4;fao-animal-fibres-ch5 |
| b_gate | 最终交接 | 在实际农场、收集点或拉毛场交接处保护并称量原纤维；包装在边界内，交接后运输在边界外。 | un-cpc-3-notes |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pull | 皮张与羊毛分离 | conditional | 仅拔毛路线 | 从单独取得的皮张独立分离，交接羊毛、可售脱毛皮及残余物。 | kg 分离羊毛及脱毛皮 |
| coarse | 粗动物毛采集 | conditional | 仅粗毛路线 | 独立剪取、梳取或收集；不虚构皮张处理。 | kg 已采集粗毛 |
| condition | 原纤维初处理 | required | 两条路线，按实际操作 | 实际择毛、清理及干燥；区分原始投入和处理后产出。 | kg 初处理原纤维 |
| grade | 原纤维分级 | required | 两条路线 | 区分合格、可售降级和弃料状态及去向。 | kg 已分级原纤维 |
| pack | 保护性包装与交接 | required | 两条路线 | 将已称量纤维保护至实际交接点，排除后续运输。 | kg 净重可售原纤维 |

同一来源批次的拔毛与粗毛采集节点互斥。拔毛独立于先前饲养/屠宰和后续纤维初处理。共用采集工具、拉毛场洗涤系统、干燥设备、分级场地与压包设备按实际消费节点和期间的计量服务量或产能分摊；不得通过可售脱毛皮重复计入皮张加工负担。

### Process: 皮张与羊毛分离 (`pull`)

#### Inputs

##### Product flows

###### 带毛绵羊原皮（`skin_input`）

拉毛路线单独取得的原料；保留其上游饲养和屠宰负担。

分母与范围要求：每 kg 分离拔毛

原始数量及计算要求：称量入厂原皮，并与羊毛、脱毛皮及残余物核对。 原始采集分母类型：process_output。

- 选定流：未鞣制带毛绵羊皮（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pull`
- 数量范围：原皮投入暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 分离拔毛；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 拉毛前洗皮用水（`pull_water`）

仅计入分离前实际用于洗皮或原毛的水；干法路线没有用水投入。

分母与范围要求：每 kg 分离拔毛

原始数量及计算要求：计量各相关皮张批次的供水。 原始采集分母类型：process_output。

- 选定流：实际洗皮过程用水（待确认流身份 待确认）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pull`
- 数量范围：洗皮用水暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 分离拔毛；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 实际拉毛辅料（`pull_aid`）

仅记录实际使用且明确物质的分离辅料；不设置通用化学配方。

分母与范围要求：每 kg 分离拔毛

原始数量及计算要求：按批次称量每种物质投入并辨识其化学组成。 原始采集分母类型：process_output。

- 选定流：实际明确物质的分离辅料（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pull`
- 数量范围：辅料暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 分离拔毛；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 分离后的原拔毛（`pulled_raw`）

羊毛在拉毛场从皮张分离，不得同时作为附皮羊毛出售。

分母与范围要求：每 kg 分离拔毛

原始数量及计算要求：称量实际分离的纤维，申报含脂或原毛洗涤状态。 原始采集分母类型：process_output。

- 选定流：分级前绵羊原拔毛（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pull`
- 数量范围：节点产出恒等范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 分离拔毛；节点或参考恒等关系
  - 基准类型：过程产出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

###### 可售脱毛皮（`denuded_pelt`）

仅实际出售且有独立交接点的脱毛皮为共产品；不可售材料进入废物路线。

分母与范围要求：每 kg 分离拔毛

原始数量及计算要求：在实际独立交接处称量出售皮张。 原始采集分母类型：process_output。

- 选定流：脱毛后的未鞣绵羊皮（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pull`
- 数量范围：脱毛皮暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 分离拔毛；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### Waste flows

###### 拉毛废物与废液（`pull_residue`）

按材料与去向分开记录废弃皮张、纤维损失和废液。

分母与范围要求：每 kg 分离拔毛

原始数量及计算要求：分别计量残余流并保留处理去向。 原始采集分母类型：process_output。

- 选定流：送处理的实际拉毛残余（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 数量范围：残余物暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 分离拔毛；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### Elementary flows

### Process: 粗动物毛采集 (`coarse`)

#### Inputs

##### Product flows

###### 粗毛采集能源（`coarse_energy`）

仅计入剪取、梳取或收集实际使用的能源；活体动物是上游存量，并非被消耗的质量投入。

分母与范围要求：每 kg 已采集粗毛

原始数量及计算要求：计量或按因果关系分摊各能源载体。 原始采集分母类型：process_output。

- 选定流：实际采集能源载体（待确认流身份 待确认）
- 流属性/单位：按载体 / 实测单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_coarse`
- 数量范围：能源暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kWh/kg
  - 基准：每 kg 已采集粗毛；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 采集的原粗动物毛（`coarse_raw`）

申报物种及活体剪取、梳取、收集或有记录的合法死后分离；不得虚构皮张处理阶段。

分母与范围要求：每 kg 已采集粗毛

原始数量及计算要求：称量所采毛，并关联来源事件和期间。 原始采集分母类型：process_output。

- 选定流：特定物种原粗动物毛（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_coarse`
- 数量范围：节点产出恒等范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 已采集粗毛；节点或参考恒等关系
  - 基准类型：过程产出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### Waste flows

###### 不可用采集杂质（`coarse_reject`）

将实际杂质与损伤毛同目标粗毛分别记录。

分母与范围要求：每 kg 已采集粗毛

原始数量及计算要求：按处理去向称量弃料。 原始采集分母类型：process_output。

- 选定流：不可用的粗毛采集杂质（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 数量范围：弃料暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 已采集粗毛；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### Elementary flows

### Process: 原纤维初处理 (`condition`)

#### Inputs

##### Product flows

###### 初处理投入原纤维（`condition_input`）

按路线和物种接收拔毛或粗毛，不得匿名混合。

分母与范围要求：每 kg 初处理原纤维

原始数量及计算要求：初次清理或干燥前称量投入批次。 原始采集分母类型：process_output。

- 选定流：按路线区分的采集原纤维（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_condition`
- 数量范围：投入暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 初处理原纤维；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 初处理用水（`condition_water`）

仅计入初次清理或原毛洗涤实际使用的水；仅干处理批次无需用水。

分母与范围要求：每 kg 初处理原纤维

原始数量及计算要求：计量水量并标识处理批次。 原始采集分母类型：process_output。

- 选定流：实际初处理过程用水（待确认流身份 待确认）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_condition`
- 数量范围：用水暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 初处理原纤维；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 初处理能源（`condition_energy`）

仅计入实际初次择毛、干燥和清理服务，不计后续纺织洗毛。

分母与范围要求：每 kg 初处理原纤维

原始数量及计算要求：计量实际能源载体，共用烘干机服务只分摊一次。 原始采集分母类型：process_output。

- 选定流：实际初处理能源载体（待确认流身份 待确认）
- 流属性/单位：按载体 / 实测单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_condition`
- 数量范围：能源暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kWh/kg
  - 基准：每 kg 初处理原纤维；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 初处理后原纤维（`condition_output`）

在分级前保留含脂、原毛洗涤或粗毛原状态。

分母与范围要求：每 kg 初处理原纤维

原始数量及计算要求：称量产出并记录含水与杂质。 原始采集分母类型：process_output。

- 选定流：按路线区分的初处理后原纤维（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_condition`
- 数量范围：节点产出恒等范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 初处理原纤维；节点或参考恒等关系
  - 基准类型：过程产出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### Waste flows

###### 初处理弃料与废水（`condition_residue`）

在具体交换与处理记录中区分固体和废水。

分母与范围要求：每 kg 初处理原纤维

原始数量及计算要求：分别计量每一流及其去向。 原始采集分母类型：process_output。

- 选定流：送处理的实际初处理残余（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 数量范围：残余物暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 初处理原纤维；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### Elementary flows

### Process: 原纤维分级 (`grade`)

#### Inputs

##### Product flows

###### 待分级初处理纤维（`grade_input`）

入级批次持续保留路线、物种与纤维状态。

分母与范围要求：每 kg 已分级原纤维

原始数量及计算要求：称量投入并关联前序初处理批次。 原始采集分母类型：process_output。

- 选定流：待分级初处理原纤维（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：投入暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 已分级原纤维；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 合格可售等级（`grade_accepted`）

将合格原纤维等级送包装并申报去向。

分母与范围要求：每 kg 已分级原纤维

原始数量及计算要求：单独称量合格等级。 原始采集分母类型：process_output。

- 选定流：按路线区分的合格原纤维等级（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：等级比例恒等范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 已分级原纤维；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 可售降级等级（`grade_downgrade`）

出售的低等级是独立产品交接，不是废物或合格等级的重复。

分母与范围要求：每 kg 已分级原纤维

原始数量及计算要求：按低等级与购买方称量。 原始采集分母类型：process_output。

- 选定流：可售低等级原纤维（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：等级比例恒等范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 已分级原纤维；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### Waste flows

###### 不可售分级弃料（`grade_reject`）

按实际处理记录损伤、污染纤维及杂质。

分母与范围要求：每 kg 已分级原纤维

原始数量及计算要求：将弃料与可售降级品分别称量。 原始采集分母类型：process_output。

- 选定流：不可售纤维分级弃料（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 数量范围：弃料暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 已分级原纤维；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### Elementary flows

### Process: 保护性包装与交接 (`pack`)

#### Inputs

##### Product flows

###### 待包装合格原纤维（`pack_input`）

仅接收实际申报的参考等级；其他等级有独立交接。

分母与范围要求：每 kg 净重可售原纤维

原始数量及计算要求：包装前称量批次。 原始采集分母类型：process_output。

- 选定流：合格原拔毛或原粗毛（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 数量范围：投入暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 净重可售原纤维；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 打包或装袋材料（`pack_material`）

标识一次性或周转包装及其使用次数；排除下游运输。

分母与范围要求：每 kg 净重可售原纤维

原始数量及计算要求：计数或称量包装物并按实际周转次数分摊。 原始采集分母类型：process_output。

- 选定流：实际纤维打包物、袋或包裹材料（待确认流身份 待确认）
- 流属性/单位：按包装物 / 实测单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 数量范围：包装物暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 净重可售原纤维；仅暂定筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 净重可售原纤维（`market_fibre`）

参考产品具有唯一申报路线、物种、状态、等级和交接点；不包括附皮羊毛。

参考产出的原始记录：计量实际销售批次的毛重、皮重、净重和含水。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 按路线、物种、状态和交接点限定的原拔毛或粗动物毛
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 数量范围：参考产出恒等范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 净重可售原纤维；节点或参考恒等关系
  - 基准类型：过程产出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### Waste flows

##### Elementary flows

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_skin | 拔毛路线 | 将皮张继承负担和实际拉毛负担在分离羊毛与单独出售的脱毛皮之间，优先按有证据的因果过程拆分；否则对完整产出集采用有理由的物理或经济分配并记录期间/价格证据。不得默认零负担或将同一皮张计两次。不可售脱毛皮按废物处理。 | fao-animal-fibres-ch4 |
| a_coarse | 粗毛路线 | 将实际动物阶段负担按相应期间分配给粗毛以及独立出售的乳、肉、细绒或其他真实产出。活体采集不消耗整只动物；死后来源使用其自身可追溯来源分摊。 | fao-animal-fibres-ch4 |
| a_period | 两条路线 | 对繁育、泌乳、采毛、屠宰/回收和更替按实际群体期间索引；每项事件与产出只归属一次，不设通用寿命或产毛率。 | fao-animal-fibres-ch4 |
| a_shared | 两条路线 | 共用采集工具、洗涤系统、烘干机、分级场地和压包设备按实测时间、计量消耗或有证据的产能在真实消费节点和服务期间分摊，不重复负担。 | fao-animal-fibres-ch4 |
| a_grades | 全部等级 | 合格和可售降级品各有唯一交接与应归属服务；弃料和废水保留实际处理负担，不另计产品抵扣。 | fao-animal-fibres-ch4 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pull | pull | 皮张、辅料、羊毛和脱毛皮 | 批次台账 | 皮张来源/质量、含水、辅料种类/质量、原羊毛、脱毛皮、处理和交接 | 秤、计量器、收货和出库票据；原始汇总要求：按来源和批次核对。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;期间 | 每批 | 全部拉毛事件 | 实际拉毛场 | 每参考流 | 校准与来源票据；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_coarse | coarse | 采集事件、能源和粗毛 | 群体/批次台账 | 物种、来源、事件、方法、阶段、能源载体/数量、粗/细毛 | 采集日志、计量器和秤；原始汇总要求：按群体和批次核对。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;载体单位;期间 | 每事件 | 全部来源期间 | 实际农场或收集点 | 每参考流 | 采集与计量记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_condition | condition | 投入、水、能源、初处理纤维 | 批次台账 | 投入/产出质量、含水、洗涤方法、水、能源、弃料 | 秤与公用工程计量器；原始汇总要求：按路线和状态只汇总一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;载体单位 | 每批 | 完整初处理期间 | 实际场址 | 每参考流 | 计量与含水测试；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_grade | grade | 合格、降级和弃料 | 分级台账 | 路线、物种、等级、投入/产出质量、购买方、处理去向 | 秤与分级票据；原始汇总要求：按等级和去向汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 完整分级期间 | 实际场址 | 每参考流 | 分级/出库记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_pack | pack | 净重纤维和包装 | 发运台账 | 等级、毛重、皮重、净重、含水、交接点、包装类型/质量/周转 | 校准秤与发运票据；原始汇总要求：按变体和交接点汇总净重。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;件 | 每批 | 完整交接期间 | 实际场址 | 每参考流 | 校准与销售票据；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_residue | pull;coarse;condition;grade | 废物与废液 | 残余物台账 | 流身份、来源、质量、处理和去向 | 秤、废水计量器、处置票据；原始汇总要求：按流汇总，绝不作为产品。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每一流 | 完整过程期间 | 实际场址 | 每参考流 | 计量与处置记录；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | 销售批次 | 销售净重 = 实测毛重减包装皮重与可分离杂质；披露含水而非换算为净纤维。 | cp_pack | kg 净纤维 | fao-animal-fibres-ch4 |
| c_balance | 各节点 | 入厂皮张/纤维加实测水/辅料 = 产品产出加废物、水分变化、库存变化和残差；按计量不确定度调查残差。 | cp_pull;cp_coarse;cp_condition;cp_grade;cp_residue | 按路线 kg 残差 | fao-animal-fibres-ch4 |
| c_attr | 来源与共用操作 | 按阶段/产出和共用服务只归属一次实际负担；记录方法、分母和每种可售去向。 | cp_pull;cp_coarse;cp_grade | 按变体的归属负担 | fao-animal-fibres-ch4 |
| c_norm | 参考批次 | 将归属数量除以严格大于零的申报路线、等级、状态与交接点的净重。 | cp_pack;cp_pull;cp_coarse | 每 kg 参考量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | 每条路线与批次 | 核实物种、皮张来源或采集事件、原料状态、等级、交接点和类别边界。 | 来源与分级票据 |
| q_mass | 每批 | 校准秤/计量器，测含水，在无默认折算下核对皮张/脱毛皮/羊毛或粗毛。 | 校准与质量平衡 |
| q_attribution | 产出和期间 | 保存动物阶段、皮张继承负担、脱毛皮/毛销售、共用设备和分配工作表。 | 群体、来源、发票和服务记录 |
| q_uuid | 具体交换 | 构建最终 TIDAS 交换前核实准确流类型、状态、方向、属性与交接点。 | 已核实平台详情及支撑行 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | 参考批次 | 排除剪取羊毛、细毛、出售皮张上的附皮毛、已梳理/精洗材料，以及缺少路线、物种、状态、净重或交接点的批次。 | un-cpc-3-notes |
| v_route | 来源与采集 | 拔毛批次须有独立入厂皮张与已分离羊毛/脱毛皮产出；粗毛批次须有实际物种/事件，不得继承虚构洗皮/脱毛步骤。 | fao-animal-fibres-ch4 |
| v_mass | 各批次 | 按实测不确定度核对所有等级、脱毛皮、弃料、公用工程和水分；排除无记录的原毛至净毛系数。 | fao-animal-fibres-ch4 |
| v_attribution | 动物与共用服务 | 排除附皮与已分离羊毛双计、无证据皮张零负担、动物期间、脱毛皮或共用资产负担重复。 | fao-animal-fibres-ch4 |
| v_uuid | 最终交换 | 未解析卡片仅保留语义；每项最终交换须有一个经详情核实的具体 UUID 以及兼容的属性/单位组。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 按路线、物种、状态、等级与交接点限定的前景原纤维。 |
| downstream_use | 仅在具体身份核实、审查和发布后作为候选 secondary_dataset 或 background_dataset。 |
| allowed_use | 已测量、同类变体和真实路线且披露共产品的用途。 |
| excluded_use | 以拔毛替代不相关粗毛、默认净纤维折算、附皮毛或无证据零负担。 |
| required_metadata | 物种、来源事件、路线、等级、原料/原毛洗涤状态、污染、含水、净重、交接点、期间和分配。 |
| required_quality_disclosure | 皮张/脱毛皮与粗毛产出台账、共用服务、洗涤/辅料、弃料、质量残差和未解析 UUID。 |
| update_trigger | 精确产品 UUID 核实、路线/交接点变化或有来源支持的含水、分配、产率证据。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-notes` | official_guidance | [UN CPC 3.0 说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 产品边界 |
| `fao-animal-fibres-ch4` | official_guidance | [FAO 动物纤维采集，第 4 章](https://www.fao.org/4/v9384e/v9384e09.htm) | 拉毛、脱毛皮、采集、初处理和分配 |
| `fao-animal-fibres-ch5` | official_guidance | [FAO 动物纤维采集，第 5 章](https://www.fao.org/4/v9384e/v9384e10.htm) | 原纤维初处理与分级 |
