---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.silk-worm-cocoons-suitable-for-reeling
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---
# 适于缫丝的蚕茧

## 1. 范围与适用性

本 PCR 适用于在蚕茧生产者实际交付点，经证实适于缫丝且经计量的蚕茧批次。鲜茧与生产者杀蛹／干燥的可缫茧是不同产品状态；未实测含水率并作归一化时，不得把两者的 1 kg 视为可互换。须申报品种、等级、缺陷比例、含水率、路线及交付门槛。穿孔或其他不可缫茧、活蚕、绢丝／生丝及交付后缫丝不在范围内。买方接收后才实施的杀蛹不属于本前景边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.silk-worm-cocoons-suitable-for-reeling |
| classification_refs | CPC 3.0 02944 — 适于缫丝的蚕茧 |
| covered_products | 经证实可缫丝，鲜态交付或由生产者处理后作为独立称量的杀蛹／干燥批次交付的蚕茧。 |
| excluded_products | 穿孔／不可缫茧、活蚕、绢丝或丝纱、生丝及下游煮茧与缫丝。 |
| representative_product | 已分级的可缫茧批，按状态记录收货原样质量和实测含水率。 |
| production_route | 管理型寄主叶饲喂与结茧；独立采茧；分级；可选生产者侧杀蛹／干燥；保护性包装。 |
| market_state | 鲜未加工或生产者杀蛹／干燥状态，分别识别，并有可缫性与实际交付门槛证据。 |

管理型生物生产的父路线是从养蚕到结茧。寄主叶来源、蚕种、室内温湿度和上蔟方式只有在前景证据表明清单、计算或验收要求发生变化时，才构成路线差异。鲜茧和生产者干茧可在不同实测批次并存，同一蚕茧不得在两个交付点重复计量。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际生产者门槛的可缫茧；鲜茧与生产者干茧分别报告。 |
| How much | 申报状态下实测原样蚕茧 1 kg，不含容器和已分离剔除物。 |
| How well | 交付时的可缫性、蚕种、等级／缺陷、茧壳／蛹状态及含水率证据。 |
| How long or cycle | 已记录的寄主叶供应、养蚕批次、采茧、分级、可选干燥和交付期间；共用资产按实际服务期间归属。 |
| reference_flow_link | `reference_product_handover` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 按状态和门槛限定的可缫蚕茧 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 蚕种／品系；寄主叶来源；批次；鲜态或生产者杀蛹／干燥状态；实测含水率；可缫性／等级检验与剔除物；实际生产者门槛；包装质量 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| cocoon_mass | 合格与剔除批次 | 质量 | kg | 各批次在其交付点去皮后称重；核对合格、降级、废物及抽样量，不得重复计入同一批次。 |
| moisture_state | 鲜茧与干茧 | 质量分数 | kg/kg | 对各状态的代表性样品测含水率，不得用假设鲜干产率替代。跨状态比较时依据实测含水率计算干物质质量，并保留各自原样质量。 |
| grade_fraction | 已采和合格批次 | 质量分数 | kg/kg | 在相同计量基础上记录可缫性／缺陷检验和合格、降级、剔除质量；不设通用质量门槛。 |
| period_link | 蚕批和共用资产 | 时间 | 报告期间 | 将寄主叶、幼虫、蚕匾／烘干设备服务、产出和处置关联到产生它们的蚕批及期间；共用负担只归属一次。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入蚕种／幼虫和寄主叶，或已识别的场内寄主作物与繁育来源；说明期初蚕批和上游负担。 |
| starting_condition_role | 购入投入及其上游数据集跨入前景边界；期初生物存量和可复用资产分别披露。 |
| product_classification_scope | 仅限可缫蚕茧货物；剔出的纺丝级茧和生丝是不同产品。 |
| recursive_input_rule | 若加入本类别购入蚕茧，只保留一次其上游负担与购入质量，不得宣称为本场新养成产出。 |
| upstream_dataset_requirement | 蚕种／幼虫、寄主叶、燃料、水、包装及适用资产须有供应商特定或有理由选用的次级数据集。 |
| disclosure | 报告蚕批、路线、状态、含水率、等级、各产出去向、门槛、期间、共用资产和购入蚕茧处理。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_rearing | 所有蚕批 | 纳入管理型饲喂、温湿控制、上蔟和结茧，止于完整已结茧移交。除非明确纳入本前景系统，寄主作物生产为上游投入；场内叶片不得重复计量。 | fao-cocoon-quality;fao-cocoon-characteristics |
| b_nodes | 采茧与分级 | 结茧后作为独立节点采收，再将来料分为可缫合格、独立降级及剔除／废物去向；不是每个采下的茧都可缫。 | fao-cocoon-quality |
| b_drying | 可选生产者处理 | 仅在生产者于声明销售门槛前实施时纳入杀蛹／干燥，并计量热、电、水分损失和剔除物。买方侧处理、煮茧和缫丝为下游。 | fao-cocoon-drying |
| b_gate | 所有产出 | 纳入实际生产者门槛前的保护包装和处理，排除所有权转移后的配送。鲜、干分支必须使用不同的最终产出身份。 | fao-cocoon-quality;fao-cocoon-drying |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rear | 养蚕与结茧 | required | 该蚕批产茧 | 管理型生物生产父节点；幼虫、寄主叶、温湿和上蔟形成已结茧 | 每蚕批已结茧 kg |
| collect | 独立采茧 | required | 结茧后从蔟具采下 | 将完整已采茧移交分级，分列杂物与损失 | 已采茧 kg |
| grade | 可缫性分级与去向分选 | required | 每个销售批次 | 来料拆为可缫合格、独立降级和废物状态 | 分级来料 kg |
| dry | 生产者杀蛹与干燥 | conditional | 销售单独识别的干燥可缫茧前实施 | 合格鲜茧变为稳定干茧；记录失水和剔除物 | 干燥鲜茧来料 kg |
| present | 保护性包装与生产者交付 | required | 合格销售批次 | 在一个声明门槛包装并交付鲜或干可缫茧 | 原样合格茧 kg |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

结茧结束与从蔟具上物理采茧是不同责任，故养蚕与采茧分列。分级须记录可缫合格品、独立销售的降级品和废弃物去向；穿孔茧即使卖作纺丝原料也不属于可缫茧。干燥节点接收可用鲜茧，交给包装节点的是另一个稳定状态；脱水是质量损失而非联产品。鲜、干产出只能属于不同实测批次。跨批次或节点共用的寄主作物地块、蚕室、蚕匾、蔟具、分选机和烘干机须按服务期间归属负担。

### 过程：养蚕与结茧（`rear`）

#### 输入

##### 产品流

###### 蚕种或幼虫（`seed_larvae`）

购入蚕卵或幼虫进入已识别批次；期初存栏不得重复记作采购。

分母与范围要求：每 kg 已结蚕茧（按蚕批）

原始数量及计算要求：记录购入数量、龄期、可得批次质量与库存变化。 原始采集分母类型：process_output。

- 选定流: 分龄期蚕种或幼虫（UUID 未解析）
- 流属性/单位: 质量或计数 / kg 或只
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_cohort_inputs`
- 数量范围: 暂定完整性筛查范围（非默认因子）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: item/kg
  - 基准: 每 kg 已结蚕茧（按蚕批）
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 寄主叶和补充饲料（`host_leaves`）

记录购买的寄主叶，或已归属上游负担的自种寄主叶；自种叶不得记为零负担。

分母与范围要求：每 kg 已结蚕茧（按蚕批）

原始数量及计算要求：按批次与来源计量发放量，扣除实测剩余和库存变化。 原始采集分母类型：process_output。

- 选定流: 适配蚕种的寄主叶与有证据的补充饲料（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_cohort_inputs`
- 数量范围: 暂定完整性筛查范围（非默认因子）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kg/kg
  - 基准: 每 kg 已结蚕茧（按蚕批）
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 养蚕和清洁用水（`rear_water`）

计量进入前景边界的养蚕、调湿和清洁供水。

分母与范围要求：每 kg 已结蚕茧（按蚕批）

原始数量及计算要求：记录水表或日志用水量，扣除单独计量的回流水。 原始采集分母类型：process_output。

- 选定流: 供应的过程用水（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_utilities`
- 数量范围: 暂定完整性筛查范围（非默认因子）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 已结蚕茧（按蚕批）
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 养蚕能源供应（`rear_energy`）

根据记录将电力、热力与燃料拆为具体交换；待确认流身份 本身不是单一能源商品。

分母与范围要求：每 kg 已结蚕茧（按蚕批）

原始数量及计算要求：按能源载体、蚕批、房间和期间计量。 原始采集分母类型：process_output。

- 选定流: 场址实际能源载体（UUID 未解析）
- 流属性/单位: 能量 / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_utilities`
- 数量范围: 暂定完整性筛查范围（非默认因子）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: MJ/kg
  - 基准: 每 kg 已结蚕茧（按蚕批）
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 蚕匾与蔟具服务（`tray_service`）

归属共用蚕匾、蔟具的制造、维修和清洁负担。

分母与范围要求：每 kg 已结蚕茧（按蚕批）

原始数量及计算要求：按实际蚕批使用与服务期间归属资产负担，保留购买和寿命证据。 原始采集分母类型：process_output。

- 选定流: 蚕匾与蔟具资产服务（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_assets`
- 数量范围: 暂定完整性筛查范围（非默认因子）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 已结蚕茧（按蚕批）
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转给采茧的完整已结蚕茧（`spun_cocoons`）

这是内部转移，不是最终销售或第二个参考产品。

分母与范围要求：每 kg 已结蚕茧（按蚕批）

原始数量及计算要求：以称量或有证据的批次质量平衡重建转移量。 原始采集分母类型：process_output。

- 选定流: 蔟具上的完整已结蚕茧（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_cocoon_mass`
- 数量范围: 实测质量平衡校验范围（不作通用产率）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 已结蚕茧（按蚕批）
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 废物流

###### 养蚕损失和废有机物（`rear_residue`）

按实物和处置方式拆分死亡幼虫、未食叶片和垫料；该总括卡不是单一实物流。

分母与范围要求：每 kg 已结蚕茧（按蚕批）

原始数量及计算要求：逐流称量，排除已采蚕茧和重复计入的堆肥产出。 原始采集分母类型：process_output。

- 选定流: 按材料和去向分类的养蚕残余物（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_residues`
- 数量范围: 暂定完整性筛查范围（非默认因子）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kg/kg
  - 基准: 每 kg 已结蚕茧（按蚕批）
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流
### 过程：独立采茧（`collect`）

#### 输入

##### 产品流

###### 已结蚕茧转入（`incoming_spun`）

接收养蚕节点同一实测内部转移，不是新增购买。

分母与范围要求：每 kg 采茧节点接收蚕茧

原始数量及计算要求：按蚕批核对接收量与养蚕转出量。 原始采集分母类型：process_output。

- 选定流: 蔟具上的完整已结蚕茧（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_cocoon_mass`
- 数量范围: 实测质量平衡校验范围（不作通用产率）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 采茧节点接收蚕茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已采未分选蚕茧（`collected_unsorted`）

从蔟具采下形成未分选批次，再移交分级。

分母与范围要求：每 kg 采茧节点接收蚕茧

原始数量及计算要求：分选前称量并记录采收时间和蚕批。 原始采集分母类型：process_output。

- 选定流: 已采未分选蚕茧（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_cocoon_mass`
- 数量范围: 实测质量平衡校验范围（不作通用产率）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 采茧节点接收蚕茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 废物流

###### 采茧杂物或压坏蚕茧（`collection_loss`）

按实物和去向区分蔟具杂物及受损茧；仅独立销售时可回收纺丝级材料才算产品。

分母与范围要求：每 kg 采茧节点接收蚕茧

原始数量及计算要求：按处置或销售去向称量采茧剔除物。 原始采集分母类型：process_output。

- 选定流: 按材料和去向分类的采茧剔除物（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_residues`
- 数量范围: 实测质量平衡校验范围（不作通用产率）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 采茧节点接收蚕茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 基本流

### 过程：可缫性分级与去向分选（`grade`）

#### 输入

##### 产品流

###### 未分选茧批投入（`grade_input`）

接收完整未分选批次，不预先认定为可缫产品。

分母与范围要求：每 kg 分级节点接收蚕茧

原始数量及计算要求：称量分级入口批次并核对采收量及抽样取出量。 原始采集分母类型：process_output。

- 选定流: 已采未分选蚕茧（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_cocoon_mass`
- 数量范围: 实测质量平衡校验范围（不作通用产率）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 分级节点接收蚕茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的可缫鲜茧（`accepted_fresh`）

合格批次进入鲜茧交付或生产者干燥；同一实物不得同时进入两路。

分母与范围要求：每 kg 分级节点接收蚕茧

原始数量及计算要求：代表性分级检验后称量，并记录含水率和去向。 原始采集分母类型：process_output。

- 选定流: 最终交付前已分级的可缫鲜茧（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade_state`
- 数量范围: 实测质量平衡校验范围（不作通用产率）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 分级节点接收蚕茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

###### 独立销售的纺丝级茧（`spinning_grade`）

只有独立验收和交付的纺丝级茧才是联产品；穿孔茧不得留在可缫参考产品中。

分母与范围要求：每 kg 分级节点接收蚕茧

原始数量及计算要求：称量单独出售批次并留存买方与去向证据。 原始采集分母类型：process_output。

- 选定流: 销售作纺丝的穿孔或其他不可缫茧（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade_state`
- 数量范围: 实测质量平衡校验范围（不作通用产率）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 分级节点接收蚕茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 废物流

###### 未销售剔除茧和分级废物（`grade_reject`）

未销售的破损或污染批次按实物和处置记录为废物，不自动视为联产品。

分母与范围要求：每 kg 分级节点接收蚕茧

原始数量及计算要求：称量废批并记录处置，避免重复计算销售的纺丝级茧。 原始采集分母类型：process_output。

- 选定流: 按处置去向分类的剔除茧（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade_state`
- 数量范围: 实测质量平衡校验范围（不作通用产率）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 分级节点接收蚕茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 基本流

### 过程：生产者杀蛹和干燥（`dry`）

#### 输入

##### 产品流

###### 用于生产者干燥的可缫鲜茧（`dry_input`）

仅在交付前干燥时接收已验收的鲜茧批次。

分母与范围要求：每 kg 干燥节点接收鲜茧

原始数量及计算要求：称量鲜茧投入、抽测含水率并记录干燥批号。 原始采集分母类型：process_output。

- 选定流: 干燥前已验收可缫鲜茧（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_drying_batch`
- 数量范围: 实测质量平衡校验范围（不作通用产率）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 干燥节点接收鲜茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

###### 杀蛹干燥能源（`dry_energy`）

按能源载体记录实际燃料、热力或电力；不得由鲜干质量差反推能耗。

分母与范围要求：每 kg 干燥节点接收鲜茧

原始数量及计算要求：按批次与期间计量或归属各能源载体。 原始采集分母类型：process_output。

- 选定流: 实际干燥能源载体（UUID 未解析）
- 流属性/单位: 能量 / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_utilities`
- 数量范围: 暂定完整性筛查范围（非默认因子）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: MJ/kg
  - 基准: 每 kg 干燥节点接收鲜茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 稳定的生产者干燥可缫茧（`dried_reelable`）

这是独立的处理状态，鲜茧／未加工平台 UUID 不适用；保留实测含水率和可缫性证据。

分母与范围要求：每 kg 干燥节点接收鲜茧

原始数量及计算要求：处理后称量合格干茧并测含水率；不得把其 kg 等同于鲜茧投入 kg。 原始采集分母类型：process_output。

- 选定流: 生产者杀蛹或干燥的可缫茧（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_drying_batch`
- 数量范围: 实测质量平衡校验范围（不作通用产率）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 干燥节点接收鲜茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 废物流

###### 处理剔除茧（`dry_reject`）

将失去可缫性的茧与蒸发水分开记录。

分母与范围要求：每 kg 干燥节点接收鲜茧

原始数量及计算要求：逐去向称量；蒸发水不算蚕茧废物。 原始采集分母类型：process_output。

- 选定流: 按去向分类的处理剔除茧（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_drying_batch`
- 数量范围: 实测质量平衡校验范围（不作通用产率）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 干燥节点接收鲜茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 基本流

### 过程：保护性包装与生产者交付（`present`）

#### 输入

##### 产品流

###### 包装投入的合格可缫茧（`present_input`）

每一实物茧批只能以一种状态进入：分级鲜茧或处理干茧。

分母与范围要求：每 kg 实际交付的接收状态可缫茧

原始数量及计算要求：称量状态明确的来料并记录来源节点和门槛。 原始采集分母类型：process_output。

- 选定流: 申报状态的可缫茧批（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 暂定完整性筛查范围（非默认因子）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/kg
  - 基准: 每 kg 实际交付的接收状态可缫茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 保护性包装（`protective_pack`）

按材料与复用次数记录实际筐、袋或箱，在前景包中展开具体材料。

分母与范围要求：每 kg 实际交付的接收状态可缫茧

原始数量及计算要求：新包装发放量扣除返还的复用库存，按已核实复用次数归属。 原始采集分母类型：process_output。

- 选定流: 按实际材料确定的蚕茧保护包装（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 暂定完整性筛查范围（非默认因子）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/kg
  - 基准: 每 kg 实际交付的接收状态可缫茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门口鲜未加工可缫茧（`fresh_farm_output`）

仅限农场门口实际交付、带茧壳和蛹的鲜未加工茧；并非广义参考流或干茧。

分母与范围要求：每 kg 实际交付的接收状态可缫茧

原始数量及计算要求：在生产者农场门口计量鲜合格茧净重，并保留含水率与等级证据。 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流: Silk-worm cocoons suitable for reeling `2e62f60f-611b-4e07-bc8a-958260a9cba1`
- 流属性/单位: 质量 / kg
- 绑定: 固定 (`fixed`)
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 实测质量平衡校验范围（不作通用产率）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 实际交付的接收状态可缫茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

###### 生产者干燥可缫茧交付（`dried_gate_output`）

只记录生产者处理后单独实测的批次；干燥状态产品 UUID 尚未解析。

分母与范围要求：每 kg 实际交付的接收状态可缫茧

原始数量及计算要求：记录实际门槛的干燥合格净重和含水率、等级证据。 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流: 生产者实际门槛的杀蛹或干燥可缫茧（UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 实测质量平衡校验范围（不作通用产率）
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 实际交付的接收状态可缫茧
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 废物流

##### 基本流

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 按状态和门槛限定的可缫蚕茧（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `fresh_farm_output`, `dried_gate_output` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`fresh_farm_output`, `dried_gate_output`

必需产品实例限定项：蚕种／品系；寄主叶来源；批次；鲜态或生产者杀蛹／干燥状态；实测含水率；可缫性／等级检验与剔除物；实际生产者门槛；包装质量

- 选定流：按状态和门槛限定的可缫蚕茧（实际生产者交付关联）
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

###### 按状态和门槛限定的可缫蚕茧 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`fresh_farm_output`, `dried_gate_output`

必需产品实例限定项：蚕种／品系；寄主叶来源；批次；鲜态或生产者杀蛹／干燥状态；实测含水率；可缫性／等级检验与剔除物；实际生产者门槛；包装质量

- 选定流：按状态和门槛限定的可缫蚕茧
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
| a_output | 独立销售的产出 | 先按实物批次细分蚕批、等级与处理记录。若可缫茧与单独销售的纺丝级茧为不可分割操作的联合产出，有因果依据时说明物理分配；否则披露经济分配、价格期间和不确定性。未销售剔除物与失水不是联产品。 | fao-cocoon-quality;fao-cocoon-drying |
| a_period | 蚕批和寄主作物阶段 | 将叶片投入、养蚕操作与蚕茧产出归属实际蚕批和报告期间；跨日历截点结转期初／期末存量及未完成蚕批。 | fao-cocoon-quality |
| a_shared | 共用基础设施 | 记录寄主地块、蚕室、蚕匾、蔟具、分级设备和烘干机的实际使用节点、蚕批与服务期间；按观察到的使用量或有理由且披露的代理量，只归属一次制造、维修和公用工程负担。 | fao-cocoon-quality;fao-cocoon-drying |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cohort_inputs` | rear | 蚕种与寄主饲料 | 采购和发料日志 | 蚕批；蚕种；龄期；种量；寄主种类；叶片量；库存变化；供应商 | 数量和发放称重；原始汇总要求：按蚕批汇总净投入。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | item;kg | 每次发料 | 全蚕批 | 每养蚕场 | 每参考流 | 收据与称量票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_utilities` | rear;dry | 水与能源 | 水电表和燃料日志 | 仪表；载体；始末读数；批次；房间；期间；分配键 | 仪表或燃料收据；原始汇总要求：共用计量只分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;MJ | 按批次或每月 | 全活动期间 | 每场址 | 每参考流 | 仪表照片与发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_assets` | rear;dry;present | 共用服务 | 资产台账 | 资产；购置；维修；服务日期；使用节点；使用时数或批次 | 资产与服务日志；原始汇总要求：按观察到的使用量只分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;hour | 每次服务事件 | 服务寿命 | 每场址 | 每参考流 | 采购及维修记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_cocoon_mass` | rear;collect;grade | 蚕茧转移 | 蚕批票据 | 蚕批；转移时间；投入量；产出量；杂物；抽样 | 校准秤与批次标识；原始汇总要求：核对节点间同一次转移。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 采茧至分级 | 全部批次 | 每参考流 | 校准和票据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_residues` | rear;collect | 损失与残余 | 处置或销售票据 | 蚕批；材料；湿质量；去向；收据 | 按材料称重；原始汇总要求：按去向只汇总一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次移出 | 全蚕批 | 每场址 | 每参考流 | 称重和去向收据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_grade_state` | grade | 合格、降级、废物 | 等级测试及批次票据 | 批次；缺陷；检验；等级；合格量；降级量；剔除量；去向 | 代表性检验和称重；原始汇总要求：核对所有产出状态。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 采收到销售 | 全部批次 | 每参考流 | 抽样与买方验收；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_drying_batch` | dry | 鲜至干状态 | 烘干批记录 | 批次；入口／出口质量和含水率；能源；时间；剔除量；出口等级 | 称重与含水率抽样；原始汇总要求：平衡干物质与剔除物。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;kg/kg;MJ | 每批 | 入口至干茧移交 | 全部干茧批 | 每参考流 | 秤、样品与烘干日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_handover` | present | 最终状态与包装 | 销售及包装记录 | 批次；鲜／干；等级；含水率；毛／皮重；包装；复用；门槛；买方；时间 | 秤、包装计数与收据；原始汇总要求：按状态／门槛算蚕茧净重。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;item | 每次交付 | 交付前 | 每销售批 | 每参考流 | 校准与签收凭证；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | 每次交付 | 原样净茧质量＝毛重－包装皮重－已分离剔除物；保留状态。 | 毛重、皮重、剔除量、状态 | 合格批 kg | fao-cocoon-characteristics |
| c_dry | 配对鲜／干批次 | 干物质＝各状态湿质量×（1－实测含水率）；按干物质比较并计入抽样与剔除固体，不作假设换算。 | 入口／出口质量、含水率、剔除物 | 实测干物质平衡 | fao-cocoon-characteristics;fao-cocoon-drying |
| c_grade | 分选 | 合格＋独立销售降级＋废物＋样品与分级来料核对，允许有记录的水分测量时点差异。 | 来料与各产出质量 | 批次平衡及缺陷比例 | fao-cocoon-quality |
| c_intensity | 每个节点 | 将归属的过程量除以其声明产出质量，再将最终数据集归一化至一个状态特定门槛的 1 kg。 | 归属投入、产出质量、状态 | 每 kg 清单 | fao-cocoon-characteristics |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 每批次 | 证明蚕种、等级、可缫性、鲜／干状态和实际门槛；不能仅凭 CPC 标签推断可缫性。 | 样品、分级与买方验收 |
| dq_moisture | 状态比较 | 使用代表性含水率与原始原样质量，披露样本和质量平衡不确定性。 | 样品与秤校准 |
| dq_complete | 所有节点 | 报告适用节点、投入、合格批、降级销售、废物、期间与共用负担；对真实零流给出理由。 | 蚕批台账和节点核对 |
| dq_source | 上游投入 | 保留蚕种、寄主叶、能源、包装与选定上游数据集的来源、数量和质量。 | 发票、寄主作物台账和元数据 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | 参考和最终产出 | 不可将穿孔／不可缫茧认作可缫，亦不可接受缺少等级／状态／门槛证据的批次；鲜未加工农场门口 UUID 不能绑定到干燥、杀蛹或其他门槛批次。 | fao-cocoon-quality;fao-cocoon-drying |
| v_mass | 鲜与干批次 | 按状态实测净质量和含水率；以抽样及失水项核对采收、分级、干燥和交付，不采用假设干燥产率。 | fao-cocoon-characteristics;fao-cocoon-drying |
| v_routes | 路线差异 | 寄主、气候或上蔟变体只有相对于管理型父路线的清单、计算、质量或校验要求变化有证据时才成立；拒绝仅改标签。 | fao-cocoon-quality |
| v_attribution | 多产出与跨期间 | 核查独立销售产出、废物、未完蚕批、共用资产及服务期间；一个实物茧量与共用负担只能归属一个交付点。 | fao-cocoon-quality |
| v_binding | 流卡 | 在形成 TIDAS 过程交换前，把待确认投入解析到有证据的具体 UUID；其他 UUID 在详情核实前保持未解析。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 按状态区分的蚕茧生产前景数据包，不表示 PCR 已正式发布。 |
| downstream_use | 下游丝绸链的次级／背景数据集；流、过程、生命周期模型投影须先解析具体交换身份。 |
| allowed_use | 比较相同可缫状态、蚕种／等级和门槛；鲜干比较仅限实测含水率归一化基础。 |
| excluded_use | 不可代替生丝、绢丝、穿孔茧原料或缫丝服务；不可用假设鲜干换算。 |
| required_metadata | 蚕批、蚕种、寄主来源、等级、含水率、杀蛹操作方／时间、剔除去向、门槛、期间和分配。 |
| required_quality_disclosure | 质量／含水率不确定性、等级测试、抽样、上游数据质量、未解析流身份与共用资产分配。 |
| update_trigger | 新寄主／蚕种或干燥路线、等级验收或门槛变化、确切 UUID 证据或实测数据取代暂定筛查。 |

## 11. 数据来源

| 来源 ID | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `fao-cocoon-characteristics` | handbook | [FAO《缫丝与测试手册》第 2 章](https://www.fao.org/4/x2099e/x2099e03.htm) | 蚕茧组成、质量／含水率状态和干物质比较。 |
| `fao-cocoon-quality` | handbook | [FAO《缫丝与测试手册》第 3 章](https://www.fao.org/4/x2099e/x2099e04.htm) | 养蚕／上蔟质量、采茧、分级以及穿孔／不可缫区分。 |
| `fao-cocoon-drying` | handbook | [FAO《缫丝与测试手册》第 4 章](https://www.fao.org/4/x2099e/x2099e05.htm) | 可选生产者杀蛹／干燥、储存和状态特定计量。 |
