---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.mules-and-hinnies
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 骡与駃騠

## 1. 范围与适用性

本规则适用于育种、育成或销售生产者在实际交接点交付的活骡或活駃騠。骡由马母与驴公交配产生，駃騠由驴母与马公交配产生。母体种属改变妊娠、哺乳、母畜饲料、用水及粪污活动，因此这是两条不同的受管理生产路线。同一个后代只能属于一条路线，但同一场所可有分别记录的两类群体。须记录核实的亲本种属和性别、杂交类型、年龄或等级、头数、实测活重与真实交接点。亲本马和驴不是本规则的参考产品。屠宰、肉、胴体以及提供的役用或运输服务均排除。购入杂交幼畜须携带上游负担。联合国粮农组织的马属动物指南支持这些亲本与饲养差异（`fao-equine-1994`）。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.mules-and-hinnies` |
| classification_refs | CPC 3.0 `02133`，骡与駃騠 |
| covered_products | 在实际生产者交接点交付的活马驴杂交骡或駃騠 |
| excluded_products | 亲本马或驴、胴体、肉、屠宰和役用服务 |
| representative_product | 已接受且声明类型与等级的活杂交动物，以 kg 活重计 |
| production_route | 亲本管理和交配 → 分娩及哺乳 → 可选育成 → 独立的活体筛选与交接；或购入杂交幼畜 → 育成 → 交接 |
| market_state | 活体、未经加工；声明类型、等级、头数、活重、状态及交接点 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在实际生产者交接点交付的已声明类型的活骡或活駃騠 |
| How much | 经称量的 1 kg 已接受活重，并与头数核对 |
| How well | 已核实马母/驴公或驴母/马公亲本关系，以及类型、年龄/等级和健康状态 |
| How long or cycle | 声明实际纳入的育种、妊娠、哺乳、育成和交接期间；不预设统一周期 |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 实际生产者交接点的活骡与活駃騠；跨交接点 UUID 待解 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 骡或駃騠；已核实亲本种属/性别；年龄/等级；头数；实测活重；状态；实际交接点；生产期间 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | 参考产品及活体转移 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在每个真实交接点称量活体，并用可识别的头数核对批次质量。 |
| `stock_balance` | 每条杂交路线 | 质量与头数 | kg; head | 按期间核对期初、出生/购入、转移、死亡、出售及期末存栏；不得重复计入转移。 |
| `parent_service` | 亲本群体 | 畜日及资源数量 | head-day; kg | 将实际妊娠及哺乳归于马母或驴母，依据已记录服务分配种公畜及共用亲本负担。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

纳入实际使用的购入动物、饲料、粗饲料、水、垫料、电力、燃料、护理材料和服务的上游负担，以及亲本管理、交配、妊娠、分娩、哺乳、杂交幼畜育成、粪污处理、筛选和实际活体交接。放牧摄食须申报，不得把它当作购入饲料。共用畜舍、供水设施和设备的负担在各节点及期间仅归属一次。亲本淘汰出售或粪肥仅在实际独立交付时作为产品；否则属于存栏变化、残余物或废物。不得假定杂交动物必然形成繁殖亲本产品，也不设统一的不育结论。交配和妊娠属于受管理生物生产；出生及存活幼畜转移形成独立且可测量的交接，最终筛选又是独立的接受关口（`fao-equine-1994`）。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 按种属/类型、年龄/等级、所有权、头数、质量和期间声明期初亲本及杂交动物存栏；标明购入动物与首个前景阶段。 |
| starting_condition_role | 已声明的前景起点，不代表无负担购入。 |
| product_classification_scope | 仅活马驴杂交动物；亲本动物保留各自上游身份。 |
| recursive_input_rule | 购入骡/駃騠幼畜须携带截至购入关口的单个上游数据集，不得递归重复计入早期育成。 |
| upstream_dataset_requirement | 购入动物、饲料、材料、公用工程和服务须有兼容的上游数据集，否则披露缺口。 |
| disclosure | 母体路线、实际关口、期间、动物台账、上游覆盖、联产品和共用资产归属。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_identity` | 所有路线 | 参考输出只含活马驴杂交动物；不得以马、驴或役用服务身份代替。 | `fao-equine-1994` |
| `boundary_maternal_route` | 育种 | 对每个后代只能记录马母×驴公或驴母×马公之一，并计入实际母体投入与期间。 | `fao-equine-1994` |
| `boundary_gate` | 交接 | 以观测到的活体接受为终点，排除下游役用、运输服务及屠宰。 | `fao-equine-1994` |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `parents` | 管理亲本并使已辨种属亲本交配 | conditional | 在前景中育种 | 按路线拆分母体妊娠和种公畜服务 | 每 kg 出生阶段输出的存活杂交幼畜 |
| `birth` | 分娩、哺乳并转移活杂交幼畜 | conditional | 在前景中分娩/哺乳 | 独立的活体出生与接受，区分损失 | 每 kg 转移的存活杂交幼畜 |
| `growth` | 育成杂交幼畜 | conditional | 前景育成，含购入幼畜 | 受管理生长、资源和粪污 | 每 kg 离开育成的活杂交动物 |
| `handover` | 筛选、称重并交接活杂交动物 | required | 所有路线 | 独立接受与真实生产者关口 | 每 kg 关口已接受活杂交动物 |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

`parents` 是受管理生物生产节点，其两个有证据的替代路线分别为骡的马母妊娠及哺乳和駃騠的驴母妊娠及哺乳。这会改变母体活动、日粮、粪污、期间及群体核查，而非仅改变路线名称。同场可并存两种群体，但同一后代只能采用其中一种。出生/转移与最终接受是两个独立采集节点，具有不同的活体交接状态及可能损失。按真实畜日、面积时间或计量使用情况，将共用畜舍、牧场、供水和设备归于相关期间，不得在多个节点重复记账。亲本淘汰与独立出售粪肥为有条件联产品；死亡与处置粪污不是产品。

### 过程：管理亲本并使已辨种属亲本交配（`parents`）

#### 输入

##### 产品流

###### 获得亲本动物或交配服务（`parent_input`）

记录马/驴种属、性别、所有权和上游负担；亲本均不是杂交参考产品。

分母与范围要求：每 kg 离开出生阶段的存活杂交幼畜

原始数量及计算要求：归于杂交群体的购入或服务记录 原始采集分母类型：process_output。

- 选定流：按实际种属的亲本动物或交配服务（UUID 待解）
- 流属性/单位：质量或服务 / kg 或声明服务单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：暂定非负购入核查范围，非默认值
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 存活幼畜；服务另计
  - 基准：每 kg 离开出生阶段的存活杂交幼畜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 母畜与种公畜饲料（`parent_feed`）

分别记录马母与驴母的妊娠/哺乳，并按真实服务分配共用种公畜护理。

分母与范围要求：每 kg 离开出生阶段的存活杂交幼畜

原始数量及计算要求：按亲本群体和期间统计交付量，扣除库存变化与损失 原始采集分母类型：process_output。

- 选定流：按实际材料确定的马属饲料和粗饲料（UUID 待解）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed`
- 数量范围：暂定饲料完整性核查，非日粮因子
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 存活幼畜
  - 基准：每 kg 离开出生阶段的存活杂交幼畜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 亲本供水（`parent_water`）

按真实用途及亲本群体计量饮用和护理用水。

分母与范围要求：每 kg 离开出生阶段的存活杂交幼畜

原始数量及计算要求：按用途及期间实测用水 原始采集分母类型：process_output。

- 选定流：供应水（UUID 待解）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定用水完整性核查
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 存活幼畜
  - 基准：每 kg 离开出生阶段的存活杂交幼畜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 亲本畜舍与护理能源（`parent_energy`）

仅按载体、表计及服务期间记录真实消耗的电力和燃料；具体载体后续确认。

分母与范围要求：每 kg 离开出生阶段的存活杂交幼畜

原始数量及计算要求：按亲本群体归属的计量或账单能源 原始采集分母类型：process_output。

- 选定流：能源供应（UUID 待解）
- 流属性/单位：能量 / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定能源完整性核查，非能源默认值
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ/kg 存活幼畜
  - 基准：每 kg 离开出生阶段的存活杂交幼畜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入出生阶段的母体护理（`maternal_service`）

将实际妊娠和哺乳服务只转移一次至对应的骡或駃騠群体；不代表亲本出售。

分母与范围要求：每 kg 离开出生阶段的存活杂交幼畜

原始数量及计算要求：真实母畜畜日及资源归属 原始采集分母类型：process_output。

- 选定流：内部母畜服务（UUID 待解）
- 流属性/单位：服务 / 畜日
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：暂定服务记账核查
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：畜日/kg 存活幼畜
  - 基准：每 kg 离开出生阶段的存活杂交幼畜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

###### 进入实际处置路径的亲本粪污（`parent_manure`）

记录真实粪污管理路径；独立出售的粪肥是产品，不属于本废物流。

分母与范围要求：每 kg 离开出生阶段的存活杂交幼畜

原始数量及计算要求：按路径实测或有记录的质量 原始采集分母类型：process_output。

- 选定流：进入记录处理路径的马属粪污（UUID 待解）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：暂定粪污完整性核查，非种属因子
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 存活幼畜
  - 基准：每 kg 离开出生阶段的存活杂交幼畜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 亲本肠道甲烷排入空气（`parent_enteric_ch4`）

仅在亲本畜日、生产力及兼容马属方法均有记录时计算；明确甲烷物质及空气受纳环境。这不是固定种属系数。

分母与范围要求：每 kg 离开出生阶段的存活杂交幼畜

原始数量及计算要求：已记录亲本动物活动 × 兼容且路线特定的肠道排放系数 原始采集分母类型：process_output。

- 选定流：生物源甲烷排入空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定非负调查范围，非排放因子
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 存活幼畜
  - 基准：每 kg 离开出生阶段的存活杂交幼畜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 亲本粪污甲烷排入空气（`parent_manure_ch4`）

只对有记录的亲本粪污路径、动物活动及气候计算甲烷；肠道与粪污甲烷分开记录。

分母与范围要求：每 kg 离开出生阶段的存活杂交幼畜

原始数量及计算要求：有记录的亲本粪污活动 × 兼容路径的甲烷方法 原始采集分母类型：process_output。

- 选定流：生物源甲烷排入空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定非负调查范围，非排放因子
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 存活幼畜
  - 基准：每 kg 离开出生阶段的存活杂交幼畜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 亲本粪污氧化亚氮排入空气（`parent_manure_n2o`）

仅对观测到的粪污氮和管理路径计算，避免与上游处理数据集重复排放。

分母与范围要求：每 kg 离开出生阶段的存活杂交幼畜

原始数量及计算要求：观测粪污氮 × 兼容气候/路径的氧化亚氮方法 原始采集分母类型：process_output。

- 选定流：氧化亚氮排入空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定非负调查范围，非排放因子
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 存活幼畜
  - 基准：每 kg 离开出生阶段的存活杂交幼畜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

### 过程：分娩、哺乳并转移活杂交幼畜（`birth`）

#### 输入

##### 产品流

###### 分娩与哺乳材料（`birth_supplies`）

仅纳入实际消耗的垫料、兽医用品及其他材料，并记录路线与期间。

分母与范围要求：每 kg 转移的存活杂交幼畜

原始数量及计算要求：领用记录中的消耗材料 原始采集分母类型：process_output。

- 选定流：按实际材料确定的分娩和哺乳用品（UUID 待解）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_supplies`
- 数量范围：暂定材料完整性核查
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 存活幼畜
  - 基准：每 kg 转移的存活杂交幼畜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 存活的活杂交幼畜（`young_output`）

在转入育成或直接交接时称量活骡或駃騠幼畜，并单独记录损失。

分母与范围要求：每 kg 转移的存活杂交幼畜

原始数量及计算要求：转移时实测的存活活重 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：内部转移的活骡或駃騠幼畜（UUID 待解）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：活体输出质量恒等式
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 存活幼畜
  - 基准：每 kg 转移的存活杂交幼畜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集后计算（`calculated_from_collection`）

##### 废物流

###### 分娩死亡或处置物（`birth_waste`）

只有观测到的非活体处置物属于废物；存活幼畜仍是产品或存栏。

分母与范围要求：每 kg 转移的存活杂交幼畜

原始数量及计算要求：按去向观测的处置质量 原始采集分母类型：process_output。

- 选定流：进入真实处置路径的分娩损失（UUID 待解）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 数量范围：暂定损失调查范围
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 存活幼畜
  - 基准：每 kg 转移的存活杂交幼畜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

### 过程：育成杂交幼畜（`growth`）

#### 输入

##### 产品流

###### 进入育成的活杂交幼畜（`growth_stock`）

内部或购入幼畜只计入一次；购入存栏保留上游数据集和实测质量。

分母与范围要求：每 kg 离开育成的活杂交动物

原始数量及计算要求：入口实测活重 原始采集分母类型：process_output。

- 选定流：育成入口的活骡或駃騠幼畜（UUID 待解）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：暂定存栏核对范围
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活杂交动物
  - 基准：每 kg 离开育成的活杂交动物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 杂交幼畜育成饲料（`growth_feed`）

杂交动物群体的日粮与粗饲料须独立于亲本饲料记录，并调整库存和损失。

分母与范围要求：每 kg 离开育成的活杂交动物

原始数量及计算要求：交付量扣除库存变化和实测损失 原始采集分母类型：process_output。

- 选定流：按实际材料确定的马属饲料和粗饲料（UUID 待解）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed`
- 数量范围：暂定饲料完整性核查，非日粮因子
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 活杂交动物
  - 基准：每 kg 离开育成的活杂交动物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 杂交幼畜育成用水（`growth_water`）

按真实用途计量或记录饮用及护理用水。

分母与范围要求：每 kg 离开育成的活杂交动物

原始数量及计算要求：按群体和用途实测用水 原始采集分母类型：process_output。

- 选定流：供应水（UUID 待解）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定用水完整性核查
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 活杂交动物
  - 基准：每 kg 离开育成的活杂交动物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 杂交动物育成畜舍能源（`growth_energy`）

按载体与服务计量或根据账单记录真实电力和燃料；共用设备只分配一次。

分母与范围要求：每 kg 离开育成的活杂交动物

原始数量及计算要求：按载体和育成群体计量的能源 原始采集分母类型：process_output。

- 选定流：能源供应（UUID 待解）
- 流属性/单位：能量 / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定能源完整性核查，非能源默认值
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ/kg 活杂交动物
  - 基准：每 kg 离开育成的活杂交动物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 离开育成的活杂交动物（`grown_hybrid`）

在转入筛选时称量真实活重；这不自动等于对外交付的养殖场关口。

分母与范围要求：每 kg 离开育成的活杂交动物

原始数量及计算要求：转移时称量的活杂交动物质量 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：内部转移的活骡或駃騠（UUID 待解）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：活体输出质量恒等式
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 活杂交动物
  - 基准：每 kg 离开育成的活杂交动物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集后计算（`calculated_from_collection`）

##### 废物流

###### 育成粪污进入实际处理（`growth_manure`）

区分真实管理路径与独立出售粪肥，不套用通用马属系数。

分母与范围要求：每 kg 离开育成的活杂交动物

原始数量及计算要求：按路径实测或有记录的质量 原始采集分母类型：process_output。

- 选定流：进入记录处理路径的马属粪污（UUID 待解）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：暂定粪污完整性核查
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 活杂交动物
  - 基准：每 kg 离开育成的活杂交动物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 杂交动物育成肠道甲烷排入空气（`growth_enteric_ch4`）

仅依据已记录杂交动物活动和兼容的马属方法计算；不得以亲本种属充当杂交产品流身份。

分母与范围要求：每 kg 离开育成的活杂交动物

原始数量及计算要求：杂交动物活动 × 兼容且路线特定的肠道排放系数 原始采集分母类型：process_output。

- 选定流：生物源甲烷排入空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定非负调查范围，非排放因子
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活杂交动物
  - 基准：每 kg 离开育成的活杂交动物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 杂交动物育成粪污甲烷排入空气（`growth_manure_ch4`）

仅按观测的杂交动物粪污管理、气候及路径计算；不得重复外部处理排放。

分母与范围要求：每 kg 离开育成的活杂交动物

原始数量及计算要求：有记录的杂交动物粪污活动 × 兼容路径的甲烷方法 原始采集分母类型：process_output。

- 选定流：生物源甲烷排入空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定非负调查范围，非排放因子
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活杂交动物
  - 基准：每 kg 离开育成的活杂交动物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 杂交动物育成粪污氧化亚氮排入空气（`growth_manure_n2o`）

依据观测的粪污氮及真实管理路径计算，不得重复计入外部处理排放。

分母与范围要求：每 kg 离开育成的活杂交动物

原始数量及计算要求：观测粪污氮 × 兼容气候/路径的氧化亚氮方法 原始采集分母类型：process_output。

- 选定流：氧化亚氮排入空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定非负调查范围，非排放因子
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活杂交动物
  - 基准：每 kg 离开育成的活杂交动物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

### 过程：筛选、称重并交接活杂交动物（`handover`）

#### 输入

##### 产品流

###### 进入筛选的活杂交动物（`handover_stock`）

只携带一次前期育种或育成负担；被拒绝但仍存活的动物仍属存栏。

分母与范围要求：每 kg 关口已接受活杂交动物

原始数量及计算要求：入口称量的活重 原始采集分母类型：process_output。

- 选定流：交接前的活骡或駃騠（UUID 待解）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：暂定筛选平衡核查
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 已接受活杂交动物
  - 基准：每 kg 关口已接受活杂交动物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 养殖场门已接受活骡或活駃騠（`live_hybrid_handover`）

已核实的 CPC 02133 产品/质量身份仅适用于真实养殖场门交接的未经加工活杂交动物；其他关口仍不绑定。

分母与范围要求：每 kg 养殖场门已接受活杂交动物

原始数量及计算要求：匹配的养殖场门实测已接受活重 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：养殖场门生产组合、未经加工的活骡与活駃騠 `e80a7596-d6b5-4958-9370-05f2834def0e`
- 流属性/单位：质量 / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：已接受活体输出质量恒等式
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 已接受活杂交动物
  - 基准：每 kg 养殖场门已接受活杂交动物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集后计算（`calculated_from_collection`）

##### 废物流

###### 交接死亡并处置（`handover_waste`）

只记录观测到的非活体损失及真实去向；活体拒收存栏不是废物。

分母与范围要求：每 kg 关口已接受活杂交动物

原始数量及计算要求：已称量的处置质量 原始采集分母类型：process_output。

- 选定流：进入实际处置路径的杂交动物死亡损失（UUID 待解）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 数量范围：暂定损失调查范围
  - 范围角色：质量核查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 已接受活杂交动物
  - 基准：每 kg 关口已接受活杂交动物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 实际生产者交接点的活骡与活駃騠；跨交接点 UUID 待解（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `young_output`, `grown_hybrid`, `live_hybrid_handover` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`young_output`, `grown_hybrid`, `live_hybrid_handover`

必需产品实例限定项：骡或駃騠；已核实亲本种属/性别；年龄/等级；头数；实测活重；状态；实际交接点；生产期间

- 选定流：实际生产者交接点的活骡与活駃騠；跨交接点 UUID 待解（实际生产者交付关联）
- 流属性 / 单位：质量 / kg
- 数量规则：使用与关联来源行核对的同批实测合格数量，仅对声明参考流归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 数据特异性：场址特异（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reference_handover`

- 数量范围：归一化后的确切身份核对，不是生产产率默认值
  - 范围角色：质量检查边界（`qa_guardrail`）
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - 基准：声明参考数量；输入与输出为同一交付台账中的同一实际合格产品
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际生产者交接点的活骡与活駃騠；跨交接点 UUID 待解 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`young_output`, `grown_hybrid`, `live_hybrid_handover`

必需产品实例限定项：骡或駃騠；已核实亲本种属/性别；年龄/等级；头数；实测活重；状态；实际交接点；生产期间

- 选定流：实际生产者交接点的活骡与活駃騠；跨交接点 UUID 待解
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：计算值（`calculated_value`）
- 数据特异性：场址特异（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reference_handover`

- 数量范围：归一化后的确切身份核对，不是生产产率默认值
  - 范围角色：质量检查边界（`qa_guardrail`）
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - 基准：声明参考数量；输入与输出为同一交付台账中的同一实际合格产品
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_parents` | 马母、驴母、驴公、马公 | 将实际母体妊娠及哺乳归于对应后代路线；按记录的服务与期间分配种公畜护理，不默认按头数均分。 | `fao-equine-1994` |
| `alloc_outputs` | 独立交接的亲本淘汰或出售粪肥 | 优先划分真实交接；若不可分，披露完整产品集合并一致采用有依据的物理因果或经济基准；死亡及废物不计产品收益。 | `fao-equine-1994` |
| `alloc_assets` | 共用畜舍、供水系统及牧场设备 | 按消费节点和服务期间索引，并依据适用的真实畜日、面积时间或计量使用分配一次负担。 | `fao-equine-1994` |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | parents, birth, growth, handover | 亲本、出生、转移与接受活体 | 个体动物台账及称重单 | 父母种属与性别；杂交个体身份/类型；年龄/等级；头数；kg；事件日期；关口 | 个体标识与校准活体秤；原始汇总要求：核对存栏事件并按关口汇总接受的 kg。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | head; kg; date | 每次事件 | 所有纳入期间 | 各场址/群体 | 每参考流 | 育种台账、秤记录和销售凭证；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed` | parents, growth | 饲料和粗饲料 | 发票及领用台账 | 类型、交付量、库存、损失、亲本或杂交群体、日期 | 发票及称量领用；原始汇总要求：交付量扣除库存变化和损失。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次领用 | 所有纳入期间 | 各场址 | 每参考流 | 发票及库房平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_utilities` | parents, growth | 水与能源 | 表计/发票 | 水、电力/燃料载体、群体和表计期间 | 表计与账单；原始汇总要求：按载体汇总且仅分配一次共用服务。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; MJ | 每月 | 所有纳入期间 | 各场址 | 每参考流 | 校准表计/账单；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_supplies` | birth | 分娩材料 | 护理/材料台账 | 材料、质量、群体、日期 | 称量领用材料；原始汇总要求：汇总消耗材料。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次事件 | 分娩与哺乳期间 | 各场址 | 每参考流 | 库存和护理记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure` | parents, growth | 管理粪污 | 处理台账 | 质量或活动基准、期间、处理和去向 | 路径称重或有据估算；原始汇总要求：每路径只汇总一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次处理事件 | 所有纳入期间 | 各场址 | 每参考流 | 处理/接收凭证；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_waste` | birth, handover | 死亡或处置 | 事件日志 | 个体身份、质量、原因、去向、日期 | 观察及称重；原始汇总要求：按去向汇总处置质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次事件 | 所有纳入期间 | 各场址 | 每参考流 | 兽医和处置证据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_stock` | 杂交类型与期间 | 以头数计，期初＋出生/购入－转移/出售/死亡＝期末；另按各关口的称重质量核对 | 身份、事件、头数、kg、日期 | 存栏平衡及接受参考 kg | `fao-equine-1994` |
| `calc_maternal` | 亲本阶段 | 按马母或驴母路线将实测母畜畜日和资源归于有记录的后代群体；按真实使用分配种公畜服务 | 亲本、事件、资源、期间 | 路线特定亲本负担 | `fao-equine-1994` |
| `calc_manure` | 粪污路径 | 汇总实测质量；任何模型须使用观测动物活动及有记录的气候/路径专属方法，不得使用通用杂交因子 | 畜日、实测质量、路径 | 按路径粪污量 | `ipcc-livestock-2019` |
| `calc_normalize` | 所有节点 | 可归属记录量除以实测节点输出 kg；每次转移只关联一次至接受的参考 kg | 记录、输出 kg、分配比例 | 每 kg 接受杂交动物的数量 | `fao-equine-1994` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_parentage` | 杂交路线 | 核实父母种属及性别；亲本关系不明时不得确称骡/駃騠路线。 | 育种台账 |
| `dq_mass_gate` | 参考产品 | 活体称重、头数与真实生产者关口相符。 | 校准秤及交易凭证 |
| `dq_period` | 所有阶段 | 带日期的投入、资产、输出、替换和期末存栏须关联报告期间。 | 动物与资源日志 |
| `dq_destination` | 粪污、死亡、淘汰 | 产品交接和废物去向须分开记录。 | 接收/处置证据 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_parentage` | 所有路线 | 要求种属/性别证据，每只杂交动物只选一条母体路线；駃騠不能记为马母所生。 | `fao-equine-1994` |
| `validate_stock` | 所有期间 | 核查头数、质量台账、已接受活体输出、损失及期末存栏，不得重复转移或混合关口。 | `fao-equine-1994` |
| `validate_allocation` | 联产品与资产 | 要求完整的真实交接产品集合及期间/服务归属，不得重复计入亲本或基础设施负担。 | `fao-equine-1994` |
| `validate_factor` | 模型化粪污/排放 | 使用 IPCC 骡/驴类别时须匹配动物活动、生产力、气候和粪污路径；不得对全部杂交动物使用一个通用因子。 | `ipcc-livestock-2019` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 生产者交接点活骡或活駃騠的前景数据包 |
| downstream_use | 关口/UUID 确认后作为 `secondary_dataset` 或 `background_dataset`；用于过程及生命周期模型投影 |
| allowed_use | 已声明的杂交类型、母体路线、等级、期间、活重及匹配关口 |
| excluded_use | 亲本动物、役用服务、屠宰/肉、假定头重，或将未经验证的关口/UUID 用作具体交换 |
| required_metadata | 亲本种属/性别、杂交类型、群体、头数、实测活重、年龄/等级、关口、期间、上游负担及归属 |
| required_quality_disclosure | 亲本关系、秤/存栏平衡、母体路线、粪污路径、共用资产分配及未解身份 |
| update_trigger | 新核实路线、实测绩效变化、交接变化或平台流身份确认 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-equine-1994` | official_guidance | 联合国粮农组织《基层动物保健人员手册》第 5 章，https://www.fao.org/4/t0690e/t0690e07.htm | 亲本关系、妊娠/分娩、饲养及路线边界 |
| `ipcc-livestock-2019` | official_guidance | 政府间气候变化专门委员会《2019 年细化指南》第 4 卷第 10 章，https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 按路径判定粪污方法的适用性，而非统一系数 |
