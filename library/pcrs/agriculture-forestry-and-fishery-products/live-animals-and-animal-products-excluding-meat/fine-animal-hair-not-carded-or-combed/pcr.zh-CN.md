---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.fine-animal-hair-not-carded-or-combed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未梳理或精梳的细动物毛

## 1. 范围与适用性

本 PCR 适用于实际农场或首个收集点交付的、已脱离动物且未经纺织梳理或精梳的原细动物毛。须申报物种（视实际情况为产开司米山羊、马海毛山羊、骆驼、牦牛、羊驼或安哥拉兔等）、纤维等级、采集方法、销售状态含水率与污染物及交付点。不同物种与等级不可直接视作物理等价。对活体动物梳毛以采下松脱纤维属于采集路线；对已脱离动物的纤维作纺织梳理或精梳则在范围外。剪取羊毛、拔取羊毛、粗动物毛、带毛皮张、纱线和成品纺织品不在范围内。首次挑拣、清洁、分选或去粗毛只有在销售品仍属未梳理／精梳的原细毛且实际操作有记录时才纳入。不得采用通用原毛至净毛产率。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.fine-animal-hair-not-carded-or-combed |
| classification_refs | CPC 3.0 02943 — 未梳理或精梳的细动物毛 |
| covered_products | 已脱离动物、申报物种和等级的未梳理／精梳原细毛，包括有证据且仍属原毛类别的初次清洁状态。 |
| excluded_products | 普通或拔取羊毛、粗动物毛、带毛皮张、纺织梳理／精梳纤维、毛条、纱线及织物。 |
| representative_product | 一个明确物种和等级的原细毛批次，记录销售净质量及实测状态。 |
| production_route | 物种特定的动物饲养为上游；实际梳取、剪取或收集脱落纤维；首次挑拣／清洁；分级；保护性交付。 |
| market_state | 实际农场或首个收集点交付的、已脱离动物且未梳理／精梳的原细毛。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际交付点的一个已申报物种及等级的未梳理／精梳原细动物毛批次。 |
| How much | 销售状态净纤维 1 kg，不含容器及已单独去除的污物、粗外层毛和剔除物。 |
| How well | 申报物种、细度／长度或有记录的等级、颜色、粗外层毛含量、污染物和含水率；不得假定净纤维等价。 |
| How long or cycle | 识别动物群、采集事件、生产期间、首次整理批次和交付；将共用服务关联到实际期间。 |
| reference_flow_link | `fine_hair_handover` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 按物种／状态／门槛限定的未梳理／精梳原细动物毛 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；采集方法；纤维等级／细度／长度／颜色；原态或首次清洁状态；含水率；粗外层毛及污染状况；实际交付点；报告期间；包装皮重 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | 参考及分级批次 | 质量 | kg | 扣除包装皮重后称量净纤维；单独称量已去除粗外层毛、杂物、可销售降级料及废物。 |
| m_moisture | 原态与清洁状态 | 质量分数 | kg/kg | 各批测定含水率；跨状态比较使用实测干物质，同时保留原销售状态质量。 |
| m_quality | 等级判定 | 纤维直径／长度或有记录的等级 | µm;mm;grade | 保存实际检测方法、物种和阈值；不得仅凭等级名称跨物种等同。 |
| m_period | 动物服务与共用资产 | 时间 | 报告期间 | 将动物养护负担及实际产毛、奶、肉或其他产出关联到同一动物、阶段和报告期间。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别的活体产毛动物及其上游动物服务负担，或有上游负担和门槛记录的独立购入原细毛。 |
| starting_condition_role | 由兼容且已分摊的上游数据集提供动物饲养、饲料及兽医负担；购入原毛进入整理，不虚构采毛。 |
| product_classification_scope | 仅限脱离动物的原细毛；物种、等级及状态决定实际产品交换。 |
| recursive_input_rule | 本类购入原细毛可再整理或分级，但须保留其上游负担与质量，不得宣称为新采毛产出。 |
| upstream_dataset_requirement | 须有兼容的动物服务或购入原毛上游数据，按实际动物产出和期间分摊；能源、水和包装供应也须有兼容数据。 |
| disclosure | 报告物种、动物或购入纤维来源、采集方法、各等级／剔除物去向、含水率、门槛、期间、分摊与共用资产服务。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_harvest | 活体或脱落纤维路线 | 将实际梳取、剪取或收集作为有原毛移交的独立采集事件；不要求每个物种都采用所有方法。饲养属于上游，除非明确扩展且避免重复计入。 | fao-animal-fibre-harvesting |
| b_condition | 首次整理 | 仅在产品仍为未梳理／精梳原细毛时纳入实际挑拣、清洁／干燥或去粗毛；记录合格纤维、粗外层毛、污染物和损失；纺织梳理／精梳属下游。 | fao-animal-fibre-harvesting;fao-animal-fibre-processing |
| b_grade | 分选与销售 | 依据物种特定的细度／长度、颜色和污染情况，将材料分为合格、独立销售的降级品和剔除／废物，各有去向；不得将粗毛改称细毛。 | fao-animal-fibre-processing |
| b_gate | 交付 | 纳入实际保护包装，止于农场／收集点交付；排除交付后的运输与纺织整理。 | fao-animal-fibre-harvesting |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| harvest | 按物种采毛或收集自然脱落纤维 | conditional | 实际采毛时必需；已识别外购原毛时省略 | 已分摊动物服务至原毛移交并分列附带损失 | 每次采集的原毛 kg |
| condition | 原毛首次整理 | required | 去除杂物；湿洗、干燥或去粗毛仅在实际实施时纳入 | 采得原毛转为已整理、未梳理／精梳的投入状态 | 原毛来料 kg |
| grade | 按物种及质量分级 | required | 每个销售批次 | 已整理毛分为合格、可售降级及剔除去向 | 已整理分级纤维 kg |
| present | 保护包装与交付 | required | 合格原细毛批次 | 合格纤维及包装交付至声明的农场／收集点 | 销售净纤维 kg |

采毛独立于动物生产与首次整理：动物服务在有记录的来源事件止步，采毛移出纤维，整理准备已脱离动物的材料，分级确定去向。同一纤维质量仅在节点间移交一次。购入原毛携带上游负担进入整理，不虚构采毛。清洁用水和能源为条件性投入，不适用于所有批次。共用剪具／梳具、清洁工具、分级设备和仓储资产须记录使用节点与期间，每项服务只分摊一次。

### 过程：按物种采毛或收集自然脱落纤维（`harvest`）

#### 输入

##### 产品流

###### 已分摊的动物产毛服务 (`animal_service`)

记录已识别物种、动物群和期间的兼容上游饲养负担；这是归属链接，不是虚构的混合饲料与护理 kg。

分母与范围要求：每 kg 已采原纤维

原始数量及计算要求：每次采毛事件记录实际上游动物服务的一个有证据份额。 原始采集分母类型：process_output。

- 选定流: 按物种及期间归属的动物生产服务 （UUID 未解析）
- 流属性/单位: 服务 / 已归属动物群期间
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_animal_service`
- 数量范围: 归属份额核查区间，不是动物产率
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: 份额
  - 基准: 动物群期间上游负担中归属纤维的份额
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已脱离动物的原细毛 (`raw_hair`)

记录实际梳取、剪取或收集脱落纤维的质量；动物本身不是纤维产出。

分母与范围要求：每 kg 已采原纤维

原始数量及计算要求：挑拣前称量已采纤维，并将批次 id 传递至整理节点。 原始采集分母类型：process_output。

- 选定流: 按物种及采集事件区分的已脱离原细动物毛 （UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_lot_mass`
- 数量范围: 按实测产出基础核查移交完整性
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 实测已采原纤维
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 废物流

###### 遗失或不适用的毛与采收杂物 (`harvest_reject`)

按物理材料和处理去向，将不可回收毛及杂物与可用原毛分开。

分母与范围要求：每 kg 已采原纤维

原始数量及计算要求：单独称量收集的废物；无法计量的损失作为不确定性报告。 原始采集分母类型：process_output。

- 选定流: 按材料和去向区分的采毛损失或杂物 （UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_rejects`
- 数量范围: 暂定废物筛查范围，不是损失系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg/kg
  - 基准: 每 kg 已采原纤维
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：原毛首次整理（`condition`）

#### 输入

##### 产品流

###### 原细毛来料 (`incoming_hair`)

这是采毛移交或另行购入且携带上游负担的原毛，只计一次。

分母与范围要求：每 kg 原纤维来料

原始数量及计算要求：称量来料净纤维并记录来源、含水率和皮重。 原始采集分母类型：process_output。

- 选定流: 按物种、状态和供应商区分的原细动物毛 （UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_lot_mass`
- 数量范围: 来料批次在自身基础上的完整性
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 原细毛来料
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

###### 条件性清洁用水 (`cleaning_water`)

仅记录实际首次湿洗所供应的水；不假定每个物种或批次均须洗涤。

分母与范围要求：每 kg 原纤维来料

原始数量及计算要求：按批次计量供应水量，单独实测的回流水另列。 原始采集分母类型：process_output。

- 选定流: 供应的过程用水 （UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_utility`
- 数量范围: 暂定用水筛查范围，不是洗涤配方
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 原纤维来料; zero only when wet cleaning absent
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 条件性整理能源 (`conditioning_energy`)

仅对实际实施的动力操作按载体展开电、热或燃料。

分母与范围要求：每 kg 原纤维来料

原始数量及计算要求：计量实际载体，并依据服务记录分摊共用量。 原始采集分母类型：process_output。

- 选定流: 场址特定的能源载体 （UUID 未解析）
- 流属性/单位: 能源 / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_utility`
- 数量范围: 暂定能源筛查范围，不是默认效率
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: MJ/kg
  - 基准: 每 kg 原纤维来料; zero for documented manual operation
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已整理但未梳理的细毛 (`prepared_hair`)

首次清洁或挑拣的毛移交分级，未经纺织梳理或精梳。

分母与范围要求：每 kg 原纤维来料

原始数量及计算要求：称量产出并记录含水率、粗外层毛及污染物的变化。 原始采集分母类型：process_output。

- 选定流: 按物种／状态限定的已整理原细动物毛 （UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_lot_mass`
- 数量范围: 暂定整理质量筛查范围，不是净毛产率
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 原纤维来料，含水变化另行实测
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 去除的污物及不可用粗外层毛 (`conditioning_reject`)

按材料及处置去向记录。独立销售的粗外层毛是另一产品，绝不可放入此废物卡。

分母与范围要求：每 kg 原纤维来料

原始数量及计算要求：称量去除固体；水或蒸发量为另列平衡项。 原始采集分母类型：process_output。

- 选定流: 按材料和去向区分的整理剔除物 （UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_rejects`
- 数量范围: 暂定固体剔除物筛查范围，不是清洁产率
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg/kg
  - 基准: 每 kg 原纤维来料
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流
### 过程：按物种及质量分级（`grade`）

#### 输入

##### 产品流

###### 待分级的已整理细毛 (`grade_input`)

接收已识别的整理批次，不得将同一纤维再次作为购入品。

分母与范围要求：每 kg 已分级的整理纤维

原始数量及计算要求：分级边界只称量一次来料，并保留来源批次 id。 原始采集分母类型：process_output。

- 选定流: 已整理且未梳理的细动物毛 （UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 按自身实测基础核查来料完整性
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 已分级的整理纤维
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格原细毛等级 (`accepted_grade`)

合格等级携带实测或记录的细度／长度、颜色、污染物和含水率，只向包装移交一次。

分母与范围要求：每 kg 已分级的整理纤维

原始数量及计算要求：称量合格材料，不含降级及剔除质量。 原始采集分母类型：process_output。

- 选定流: 按物种和等级限定的合格原细动物毛 （UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 物理等级份额，不是通用合格率
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 已分级整理纤维，按实测含水变化校正
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

###### 可独立销售的降级原细毛 (`downgraded_grade`)

仅当仍属原细毛时记录实际单独销售的较低等级；粗毛或其他类别须另具身份与分配披露。

分母与范围要求：每 kg 已分级的整理纤维

原始数量及计算要求：分别称量各销售等级；未销售时为零。 原始采集分母类型：process_output。

- 选定流: 按物种、等级和去向区分的可售降级原细毛 （UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 物理降级份额，不是通用联产品比例
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 已分级整理纤维，按实测含水变化校正
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 废物流

###### 不可销售的分级剔除物 (`grade_reject`)

先分清可售降级纤维与实际处置去向，再记录未销售剔除物。

分母与范围要求：每 kg 已分级的整理纤维

原始数量及计算要求：剔除物与样品独立于销售产品称量。 原始采集分母类型：process_output。

- 选定流: 按材料与去向区分的不可售分级剔除物 （UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_rejects`
- 数量范围: 物理剔除份额，不是处置系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 已分级整理纤维，按实测含水变化校正
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 基本流

### 过程：保护包装与交付（`present`）

#### 输入

##### 产品流

###### 待包装的合格细毛 (`pack_input`)

仅包装已识别的合格等级；重新包装购入毛不构成新采毛。

分母与范围要求：每 kg 净包装细毛

原始数量及计算要求：从分级移交包装的净纤维质量。 原始采集分母类型：process_output。

- 选定流: 按物种和等级限定的合格原细毛 （UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 按净包装纤维基础核查来料完整性
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 净包装细毛
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

###### 保护性纤维包装 (`fibre_package`)

选择实际清洁的软袋或其他有记录且兼容的保护包装；记录重复使用并避免纤维污染。

分母与范围要求：每 kg 净包装细毛

原始数量及计算要求：称量新包装质量；按有证据的周转次数分摊可复用包装负担。 原始采集分母类型：process_output。

- 选定流: 软质保护性纤维包装 （UUID 未解析）
- 流属性/单位: 质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 暂定包装筛查范围，不是袋规格默认值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg/kg
  - 基准: 每 kg 净包装细毛
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流
#### 输出

##### 产品流

###### 实际交付的原细动物毛 (`fine_hair_handover`)

已识别物种、等级、状态及农场／收集点的唯一参考交付；不含包装质量。

参考产出的原始记录：包装毛重减去实测皮重及去除物，得到销售净纤维。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流: 按物种／状态／门槛限定的未梳理／精梳原细动物毛
- 流属性/单位: 质量 / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 按自身净质量基础核查参考产出完整性
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 声明交付点销售净细毛
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_outputs | 纤维及其他动物产品 | 按实际物种、动物、阶段及独立销售产出细分动物服务：细毛、实际销售的粗／外层毛，以及只有实际产生时的奶、后代或肉。纯采毛路线不得虚构屠宰联产品。优先按实测因果服务分摊；不可分割时披露有依据的物理或经济分配、价格期间及敏感性。剔除物不自动构成联产品。 | fao-animal-fibre-harvesting |
| a_grades | 合格及其他销售等级 | 有记录时拆分等级专属操作；共同分级的可售产出按实测因果使用分摊共用负担，否则披露分配及不确定性。一个批次只在一个产出交付点计量。 | fao-animal-fibre-processing |
| a_period | 重复采毛及动物阶段 | 将饲养投入、动物替换及库存变化跨实际期间结转；各项服务对相关采毛事件及其他实际产出仅归属一次，不使用通用动物寿命或产毛率。 | fao-animal-fibre-harvesting |
| a_shared | 剪具、梳具、清洁、分级及仓储 | 登记每项共用资产或公用工程表计、使用它的采毛／整理／分级／交付节点及服务期间；按实测工时、吞吐量或有理由的替代指标只分摊一次。 | fao-animal-fibre-harvesting |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animal_service` | harvest | 动物上游服务 | 动物群与分摊台账 | 物种；动物／群；阶段；上游来源；其他实际产出；期间；份额 | 关联上游与销售台账；原始汇总要求：各事件只归属一个有证据的份额。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 份额;kg | 事件及期间 | 全部生产阶段 | 来源农场 | 每参考流 | 数据集与产出台账；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_lot_mass` | harvest;condition | 纤维移交 | 带批号称重单 | 动物／群；来源；方法；来料／产出质量；含水率；粗外层毛；时间 | 校准称重与抽样；原始汇总要求：按批次和状态核算净质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;kg/kg | 每批 | 采毛至整理 | 各批次 | 每参考流 | 校准、样品及交接签字；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_utility` | condition | 可选水与能源 | 表计／燃料记录 | 批次；清洁路线；水；载体；能源；表计；期间 | 表计及操作日志；原始汇总要求：实际载体／批次只归属一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;MJ | 每次操作 | 整理期间 | 各场址 | 每参考流 | 表计及操作单；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_grade` | grade | 产品等级 | 检测与销售单 | 批次；物种；细度；长度；颜色；含水率；合格；降级；买方 | 检测与校准称重；原始汇总要求：按去向核对等级。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | µm;mm;kg | 每批 | 分级至销售 | 所有批次 | 每参考流 | 检测与买方记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_rejects` | harvest;condition;grade | 废物与损失 | 材料去向日志 | 批次；阶段；材料；质量；样品；处理 | 分流、称量并保留单据；原始汇总要求：各材料按去向只累计一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次移出 | 完整路线 | 所有场址 | 每参考流 | 称重／处置单；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_handover` | present | 最终纤维及包装 | 销售／包装台账 | 批次；物种；等级；状态；毛重；皮重；净重；包装；复用；含水率；买方；门槛 | 毛重／皮重称量及交接单；原始汇总要求：销售净质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;item | 每次交付 | 分级至交付 | 各销售方 | 每参考流 | 包装单及签收单；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | 各销售批次 | 净纤维＝实测毛重－包装皮重－单独去除物；保留物种、等级、状态和交付点。 | 毛重、皮重、去除物 | 净纤维 kg | fao-animal-fibre-harvesting |
| c_balance | 采毛至分级 | 核对来料及移交干物质与合格、降级、剔除及抽样干物质；湿质量不同须使用实测含水率。 | 各状态质量／含水率、剔除、抽样 | 批次及干物质平衡 | fao-animal-fibre-processing |
| c_attribution | 动物及资产服务 | 实际动物群期间上游负担乘以有证据的采毛事件份额；共用公用工程／资产在使用者之间只分摊一次。 | 服务台账、产出、分摊键 | 各批次归属负担 | fao-animal-fibre-harvesting |
| c_intensity | 最终数据集 | 归属清单除以申报物种／等级／状态／交付点的销售净纤维，不使用通用原毛至净毛系数。 | 已归属流、净质量、限定条件 | 每 1 kg 参考流清单 | fao-animal-fibre-processing |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 各批次 | 验证物种、采毛方式、无纺织梳理／精梳、等级和状态；仅对动物梳毛不意味着纤维已纺织精梳。 | 动物／来源及操作记录 |
| dq_quality | 状态比较 | 披露细度／长度测试、含水率／污染物抽样及不确定性；无跨物种通用换算。 | 检测报告与样品链 |
| dq_complete | 所有节点 | 核算来源负担、移交、销售等级、剔除物、公用工程、包装与期间；解释实际零活动。 | 来源、批次与表计核对 |
| dq_source | 购入及动物服务投入 | 保留上游数据集范围与产出归属，避免重复计入饲养或遗漏购入原毛负担。 | 供应商元数据与分摊台账 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | 参考及产出 | 拒绝将带毛皮张、普通羊毛、仅粗毛、纺织梳理／精梳纤维或缺物种／等级／门槛的质量作为参考流；采毛时梳理动物仍在范围内。 | fao-animal-fibre-harvesting;fao-animal-fibre-processing |
| v_balance | 物料节点 | 核查批次连续性、净质量、抽样含水率及合格／降级／废物去向；同一批次仅有一个交付点。 | fao-animal-fibre-processing |
| v_allocation | 动物期间及共用服务 | 检查实际动物产出集合、期间归属及共用资产使用者；拒绝缺失上游负担及重复服务。 | fao-animal-fibre-harvesting |
| v_route | 可选整理 | 洗涤、去粗毛或干燥须有操作证据，销售状态须确认类别；拒绝默认产率或跨物种强制加工。 | fao-animal-fibre-processing |
| v_binding | 生成的交换 | 根据前景记录将 待确认流身份 投入解析为已核验的精确 UUID；其他 UUID 在详情／属性／单位组确认前保持未解析。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 按物种及等级确定的细毛前景数据包，不表示 PCR 已发布。 |
| downstream_use | UUID 解析后可供后续纺织链及流／过程／生命周期模型投影作次级／背景数据。 |
| allowed_use | 比较有记录的物种、等级、原毛状态、含水率和交付点；不同含水率仅按实测干物质归一化。 |
| excluded_use | 不得代替羊毛、粗毛、带毛皮张、梳理／精梳纤维、纱线或无物种限定的净毛平均品。 |
| required_metadata | 物种、来源、采毛方法、动物期间／产出、等级检测、清洁、质量／含水率、交付点、包装和分摊。 |
| required_quality_disclosure | 物种／等级可比性、实测含水率、上游范围、平衡不确定性、未解析身份和共用资产分摊。 |
| update_trigger | 新物种／采毛／加工路线、等级定义、交付点、供应商证据或精确平台 UUID 支持。 |

## 11. 数据来源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `fao-animal-fibre-harvesting` | handbook | [FAO，《纺织动物纤维采集》第 4 章](https://www.fao.org/4/v9384e/v9384e09.htm) | 按物种的梳取、剪取／收集、首次包装与保护。 |
| `fao-animal-fibre-processing` | handbook | [FAO，《纺织动物纤维采集》第 5 章](https://www.fao.org/4/v9384e/v9384e10.htm) | 分选、首次整理、等级状态及下游纺织加工区别。 |
