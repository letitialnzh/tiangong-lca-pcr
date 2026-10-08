---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-bovine-animals
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 牛类动物原皮

## 1. 范围与适用性

本 PCR 适用于牛类 0211（包括家牛、水牛及其他牛类）在实际申报的农场屠宰、回收、屠宰场或保藏厂交付点的鲜态或保藏态、但未经鞣制的原皮。记录物种、肉用/乳用/役用/混合用途动物历史、屠宰或合法倒毙回收、等级、鲜态/湿盐/干盐/风干/盐水浸渍状态、水分、盐及交付点。倒毙路线不得虚构肉类联产品。排除其他物种、已鞣或进一步加工的皮革以及交付点之后的运输。 [UN CPC 3.0](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf), [FAO hides and skins](https://www.fao.org/4/i0523e/i0523e.pdf) and [FAO hide definitions](https://www.fao.org/4/x9892e/X9892e06.htm) 支持此边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-bovine-animals |
| classification_refs | CPC 3.0 02951 |
| covered_products | 牛类 0211 的鲜态或保藏态未鞣原皮。 |
| excluded_products | 非牛类皮、鞣制或进一步加工的皮革、单独取下的毛及交付点后运输。 |
| representative_product | 在实际交付点按销售状态计净重的合格牛类原皮。 |
| production_route | 动物饲养和屠宰后的独立剥皮，或合法倒毙动物回收；实际初次清理、分级、可选保藏及申报交付。 |
| market_state | 申报的鲜态或保藏原皮状态，并记录等级、水分及盐/盐水。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 内容 | 在实际申报交付点的合格牛类原皮。 |
| 数量 | 1 kg 按销售状态计的原皮净重，不含包装皮重及可分离盐水/盐。 |
| 质量 | 明确物种、动物用途、来源路线及合法性、等级、状态、水分/盐和交付点。 |
| 时间或周期 | 来源动物各阶段至剥皮和实际申报交付；共享服务期仅归属一次。 |
| reference_flow_link | `final_hide` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 按状态与交付点限定的牛类原皮 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定条件 | 牛类物种；肉用/乳用/役用/混合来源；屠宰或合法倒毙回收；等级；鲜态/湿盐/干盐/风干/盐水浸渍；水分及盐/盐水；实际交付点；批次；净重及皮重 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 所需属性 | 所需单位 | 规则 |
| --- | --- | --- | --- | --- |
| m_net | 最终批次 | 质量 | kg | 扣除包装皮重及可分离的游离盐水/盐；已进入产品的水分与盐按测量值保留在销售状态质量中。 |
| m_state | 鲜态与保藏态 | 质量与含水率 | kg;kg/kg | 测量处理前后质量、水分及盐/盐水；不得使用通用鲜皮至保藏皮换算率。 |
| m_grade | 分级批次 | 质量 | kg | 对账合格、降级、拒收、修边物及实测损失。 |
| m_period | 来源动物与共享设施 | 服务时间 | period | 将乳用、役用、生长、终端及设施服务阶段各自且仅一次关联到实际期间。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 可识别的牛类动物系统及屠宰事件，或有合法记录的倒毙动物回收事件。 |
| starting_condition_role | 动物及终端处理负担与上游相连；购入的水、能源、盐和包装作为产品投入。 |
| product_classification_scope | 牛类 0211 的鲜态或保藏态、但未经进一步加工的原皮。 |
| recursive_input_rule | 外购牛类原皮继承上游负担，不得再次记作新剥皮产出。 |
| upstream_dataset_requirement | 来源肉用/乳用/役用/混合生产及终端屠宰/回收数据集须说明已纳入操作；若同一剥皮服务已由前景剥皮节点建模，应从上游剔除。不得默认零负担或全部负担。 |
| disclosure | 物种、动物用途/阶段、来源路线、回收合法性、等级、状态、质量、分配及交付点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_source | 动物来源 | 追踪实际肉用/乳用/役用/混合动物系统及屠宰，或不虚构肉类产出的合法倒毙回收；区分来源期间。 | fao-hides;fao-statistics |
| b_remove | 原皮剥离 | 剥皮独立于饲养/屠宰或回收；记录原皮、附着物、偶发损失及初整交接。若上游屠宰数据集已包含相同剥皮服务，不得重复计入。 | fao-hides |
| b_prepare | 清整与分级 | 仅纳入实际去肉/清洗/修边；区分合格、独立可售降级及拒收/废物状态与去向。 | fao-hides |
| b_preserve | 可选保藏 | 仅纳入已实施的冷藏、干燥、盐渍或盐水浸渍，记录盐/水/能源投入、废盐水及水分损失；不纳入鞣制、浸灰或脱毛。 | fao-hides;unido-leather |
| b_gate | 包装与交付 | 纳入至实际申报交付点的保护性包装及共享场址服务；农场屠宰或回收交付不得虚构保藏厂操作。排除后续运输与鞣制。 | fao-hides |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入方式 | 纳入条件 | 作用 | 数量基准 |
| --- | --- | --- | --- | --- | --- |
| remove | 独立剥皮 | required | 屠宰或合法回收路线 | 来源动物/胴体至剥离原皮、偶附物及拒收物 | kg 原皮/事件 |
| prepare | 初次清理与修边 | conditional | 仅申报交付点前实际实施时 | 原皮至初整未鞣皮、修边物及拒收物 | kg 原皮投入 |
| grade | 质量分级 | conditional | 仅交付前实际分级时 | 初整皮至合格、可售降级或拒收去向 | kg 初整皮投入 |
| preserve | 条件性保藏 | conditional | 仅保藏批次 | 合格鲜皮至实际稳定状态，明确盐、水分及残余 | kg 原皮投入 |
| handover | 保护性包装与实际交付 | required | 每个合格批次 | 在实际申报交付点只产生一种鲜态或保藏态净皮产出 | kg 销售状态净皮 |

剥皮是在动物来源事件后的独立移除交接。合法倒毙回收路线承担实际回收负担，但不虚构胴体/肉类联产品。共享剥皮设备、清洗设施、保藏空间及周转包装须按实际使用节点和期间采用同一实测服务驱动量。

### 过程：独立剥皮（`remove`）

#### 输入

##### 产品流

###### 来源牛类或屠宰胴体（`source_bovine`）

仅用于屠宰路线，并记录动物实际肉用、乳用、役用或混合用途历史及终端事件。独立的倒毙动物废物投入卡只在当地法律及实际操作将回收物认定为废物时适用；若为产品，生成交换前须另行核实产品身份。

分母与范围要求：每 kg 已剥离原皮

原始数量及计算要求：记录事件投入，动物系统负担与联产品仅关联一次。 原始采集分母类型：process_output。

- 选定流: 按路线及法律角色限定的来源牛类材料（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_source`
- 数量范围: 暂定事件平衡筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 原皮所对应的来源材料；不是默认动物产皮率
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

###### 合法回收的倒毙牛类来源（`fallen_source`）

仅在倒毙材料的实际法律身份是废物且允许取皮时使用。记录先前动物负担及终端处理；不得虚构肉/内脏交付。具有产品身份的回收物需在具体前景数据包中另设经核实的产品卡，不得使用此废物身份。

分母与范围要求：每 kg 回收原皮

原始数量及计算要求：按事件称量回收材料并记录法律身份。 原始采集分母类型：process_output。

- 选定流: 法律上属废物的倒毙牛类回收材料（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_source`
- 数量范围: 暂定回收平衡筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 原皮所对应的倒毙材料；不设默认回收率
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 基本流

#### 输出

##### 产品流

###### 新剥离的鲜原皮（`raw_removed`）

在剥皮交接点而非最终厂门称量原皮。

分母与范围要求：每来源事件

原始数量及计算要求：按动物/事件记录剥皮净重。 原始采集分母类型：process_output。

- 选定流: 来源交付点限定的鲜剥牛皮（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_source`
- 数量范围: 暂定批次规模筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/event
  - 基准: 每来源事件的称量原皮
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

###### 附着物及剥皮拒收组织（`remove_residue`）

按去向分开偶附肉组织及拒收物；独立出售的内脏不是废物。

分母与范围要求：每 kg 已剥离原皮

原始数量及计算要求：称量送交处理方的材料。 原始采集分母类型：process_output。

- 选定流: 按组成及去向限定的剥皮残余（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_residue`
- 数量范围: 暂定残余完整性筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 新剥离原皮的残余
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：初次清理与修边（`prepare`）

#### 输入

##### 产品流

###### 接收的原皮（`prepare_input`）

从剥皮或外购皮仅继承一次来源负担。

分母与范围要求：每 kg 初整原皮

原始数量及计算要求：接收净重。 原始采集分母类型：process_output。

- 选定流: 初整接收点牛类原皮（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_prepare`
- 数量范围: 暂定初整平衡筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 初整原皮的原料投入
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 清洗用水（`prepare_water`）

仅在初次清洗确实使用供应水时记录。

分母与范围要求：每 kg 初整原皮

原始数量及计算要求：批次计量用量。 原始采集分母类型：process_output。

- 选定流: 供应过程水（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_utilities`
- 数量范围: 暂定用水筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 初整原皮的用水；未用时为零
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 初整未鞣原皮（`prepared_hide`）

将清洗/修边后的原皮交付分级，不纳入鞣制化学品。

分母与范围要求：每初整批次

原始数量及计算要求：称量批次产出。 原始采集分母类型：process_output。

- 选定流: 初整牛类原皮（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_prepare`
- 数量范围: 暂定批次规模筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/lot
  - 基准: 每批次初整原皮
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

###### 去肉及修边残余（`prepare_trim`）

将废弃修边物与独立上市的动物产品区分。

分母与范围要求：每 kg 初整原皮

原始数量及计算要求：称量送交处理方的修边物。 原始采集分母类型：process_output。

- 选定流: 按去向限定的牛皮去肉残余（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_residue`
- 数量范围: 暂定修边物筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 初整原皮的修边废物
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：质量分级（`grade`）

#### 输入

##### 产品流

###### 待分级初整原皮（`grade_input`）

测量初整后的投入状态。

分母与范围要求：每 kg 合格及可售降级皮

原始数量及计算要求：称量投入批次。 原始采集分母类型：process_output。

- 选定流: 待分级初整牛类原皮（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 暂定分级平衡筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 可售等级皮的投入
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收等级原皮（`grade_accepted`）

将合格等级皮交付鲜态包装或保藏。

分母与范围要求：每分级批次

原始数量及计算要求：称量合格质量并记录等级。 原始采集分母类型：process_output。

- 选定流: 分级合格牛类原皮（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 暂定等级产出筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/lot
  - 基准: 每批次合格等级皮
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 独立出售的降级原皮（`grade_downgraded`）

仅在有独立销售交接时归为产品；否则按实际废物去向重新分类。

分母与范围要求：每分级批次

原始数量及计算要求：称量独立出售的降级品。 原始采集分母类型：process_output。

- 选定流: 按等级限定的降级牛类原皮（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 暂定降级品筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/lot
  - 基准: 每批次独立销售的降级品
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

###### 拒收原皮（`grade_reject`）

按处理方记录无法销售的污染或损伤皮，不视作降级销售。

分母与范围要求：每分级批次

原始数量及计算要求：称量拒收批次。 原始采集分母类型：process_output。

- 选定流: 按去向限定的拒收牛类皮（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_residue`
- 数量范围: 暂定拒收物筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/lot
  - 基准: 每批次拒收质量
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：条件性保藏（`preserve`）

#### 输入

##### 产品流

###### 保藏前已分级原皮（`preserve_input`）

鲜皮销售跳过该节点；使用该节点时记录投入质量与水分。

分母与范围要求：每 kg 保藏原皮

原始数量及计算要求：称量投入。 原始采集分母类型：process_output。

- 选定流: 待保藏合格鲜牛类原皮（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 暂定保藏平衡筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 保藏皮投入的鲜皮；不是换算因子
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 保藏用盐或盐水（`preserve_salt`）

仅在适用路线记录实际组成、盐浓度、领用量及游离/回收量。

分母与范围要求：每 kg 保藏原皮

原始数量及计算要求：领用量减返还量及库存变化。 原始采集分母类型：process_output。

- 选定流: 按组成限定的保藏盐或盐水（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 暂定保藏投入筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 保藏皮投入的盐/盐水；无通用保藏配方
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 保藏能源（`preserve_energy`）

记录动力干燥/冷却所用实际能源；常温保藏不得虚构用电。

分母与范围要求：每 kg 保藏原皮

原始数量及计算要求：计量或发票能源仅归属一次。 原始采集分母类型：process_output。

- 选定流: 实际保藏能源载体（UUID 未解析）
- 流属性/单位: Energy or Mass / kWh, MJ or kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_utilities`
- 数量范围: 暂定能耗筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kWh/kg
  - 基准: 每 kg 保藏皮的等效能源，并披露能源载体换算
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 稳定化原皮（`preserve_output`）

只有一种实际保藏状态携实测质量、水分及盐含量进入包装。

分母与范围要求：每保藏批次

原始数量及计算要求：称量稳定化净质量。 原始采集分母类型：process_output。

- 选定流: 按状态限定的未鞣牛类原皮（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 暂定保藏产出筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg/lot
  - 基准: 每批次实测保藏皮
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

###### 废保藏介质与拒收皮（`preserve_residue`）

按组成和去向区分废盐、废盐水及拒收皮；蒸发水为实测损失，不是废物产品。

分母与范围要求：每 kg 保藏原皮

原始数量及计算要求：称量送交处理方的残余。 原始采集分母类型：process_output。

- 选定流: 按组成限定的保藏残余（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_residue`
- 数量范围: 暂定残余完整性筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 保藏皮的废保藏介质/拒收皮
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：保护性包装与实际交付（`handover`）

#### 输入

##### 产品流

###### 鲜态或保藏态合格皮（`handover_input`）

依实际路线和交付点，仅从剥皮、初整、分级或保藏带入一种状态；同批次不得重复计两种终态。

分母与范围要求：每 kg 最终原皮

原始数量及计算要求：接收净质量。 原始采集分母类型：process_output。

- 选定流: 交付前按状态限定的合格牛类原皮（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 暂定接收平衡筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 最终净皮的接收皮量
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 保护性包装（`handover_package`）

记录实际包裹物/托盘/容器功能、质量及复用；包装质量不计入产品。

分母与范围要求：每 kg 最终原皮

原始数量及计算要求：包装领用量减返还量，按实测复用次数归属。 原始采集分母类型：process_output。

- 选定流: 按功能限定的原皮保护包装（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 暂定包装用量筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 原皮的包装用量；无包装时为零
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际交付点牛类原皮（`final_hide`）

在实际申报的农场屠宰、回收、屠宰场或保藏厂交付点，只记录一个合格的鲜态或保藏态牛类原皮产出。销售状态和交付点是同一批次互斥的限定条件；不得为另一状态或交付点重复生成最终产出。狭义交付点身份不能代表此宽义卡。

参考产出的原始记录：在实际交付点称量销售状态净皮，不含包装皮重及可分离游离盐水/盐。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流: 按状态与交付点限定的牛类原皮
- 流属性/单位: Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 参考数量恒等校验
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 按定义每 kg 参考基准恰为 1 kg 参考产品
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：采集记录 (`collected_record`)

##### 废物流

###### 废弃包装（`handover_pack_waste`）

仅交付点前废弃的一次性或损坏包装才是废物；可重复使用的返还包装仍为库存。

分母与范围要求：每 kg 最终原皮

原始数量及计算要求：称量送交处理方的废弃物。 原始采集分母类型：process_output。

- 选定流: 按组成限定的包装废物（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_residue`
- 数量范围: 暂定包装废物筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/kg
  - 基准: 每 kg 最终原皮的废弃包装
  - 基准类型：过程输出 (`process_output`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| a_animal | 屠宰关联路线 | 枚举实际预期产出及交付：乳用阶段的奶、实际提供的役用服务、屠宰时肉/胴体与食用内脏、剥皮时原皮。优先按阶段细分及实测因果归属；否则披露有依据且覆盖全部预期产出的物理或经济分配。不得默认原皮零负担或单张皮承担全部动物负担。 | fao-hides |
| a_fallen | 合法倒毙回收 | 记录胴体产品/废物法律角色、上游负担与终端处置；不得虚构屠宰肉。回收服务与来源负担须按明确记录的决策归属。 | fao-statistics |
| a_grade | 等级与保藏 | 合格皮及独立销售的降级皮有不同交付。拒收与残余在未上市时属废物。比较可售质量前需对账水分与盐变化。 | fao-hides |
| a_period | 动物阶段及设施 | 记录生长、乳用、役用和终端阶段、替换/终止，以及共享剥皮/清洗/保藏/包装服务的使用者和服务期；按实测吞吐量、时间或其他有依据驱动量只归属一次。 | fao-hides |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | remove | 来源事件与产出 | 动物/屠宰/回收台账 | 物种、动物 ID、肉/乳/役阶段、终端事件、法律角色、产出质量 | 供应商台账与磅秤；原始汇总要求：产出和负担仅关联一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;period | 每事件 | 被归属的动物服务期及终端事件 | 实际来源 | 每参考流 | 动物台账、许可和过磅单；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_prepare | prepare | 原皮及初整皮 | 批次记录 | 接收、水、清理、修边、初整质量 | 磅秤及水表；原始汇总要求：按批次平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批次 | 全部批次 | 实际场址 | 每参考流 | 校准及接收单；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_grade | grade | 等级及拒收 | 分级记录 | 投入、合格、降级、拒收、买家/处置 | 磅秤及分级单；原始汇总要求：按等级和去向平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批次 | 全部批次 | 实际场址 | 每参考流 | 等级规范、销售/处置证据；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_preserve | preserve | 状态转换 | 保藏批次记录 | 前后质量、水分、盐/盐水、时间、能源、残余 | 磅秤、配方、计量、检测；原始汇总要求：按状态批次平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;kWh | 每已实施路线 | 保藏批次 | 实际场址 | 每参考流 | 配方、实验室与计量记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_utilities | prepare;preserve;handover | 水、能源及共享资产 | 计量/资产台账 | 载体、数量、节点、期间、驱动量 | 计量表及发票；原始汇总要求：仅归属一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;kWh;h | 每服务期 | 全部前景期间 | 实际使用者 | 每参考流 | 校准及归属工作表；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_handover | handover | 净产品及包装 | 出货记录 | 来源批次、状态、等级、毛/皮/净重、游离盐/盐水、包装复用、交付点 | 磅秤及出货单；原始汇总要求：按状态/等级合计净重。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批次 | 全部销售批次 | 实际申报交付点 | 每参考流 | 校准及出货单；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_residue | remove;prepare;grade;preserve;handover | 废物及残余 | 处置台账 | 组成、质量、原因、去向 | 磅秤及处理方收据；原始汇总要求：各去向只合计一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每事件 | 全部相关期间 | 实际节点 | 每参考流 | 处置单；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | 销售批次 | 净皮质量 = 毛重减包装皮重及可分离盐/游离盐水；已进入产品的水分/盐保留于申报状态 | cp_handover;cp_preserve | kg 净皮 | fao-hides |
| c_balance | 物理节点 | 实测投入加进入产品的保藏介质 = 合格皮加降级皮加拒收/残余加实测水分损失与库存变化；报告差额 | cp_source;cp_prepare;cp_grade;cp_preserve | kg 差额 | fao-hides |
| c_state | 状态比较 | 原皮干物质 = 实测净质量 × 实测干物质分数，并单列盐固形物；无通用状态换算 | cp_preserve | kg 原皮干物质 | fao-hides |
| c_attribution | 来源/资产 | 每 kg 可归属投入 = 实测投入 × 已记录产出份额 × 已记录期间/服务份额 ÷ 销售净皮；份额不得重复应用 | cp_source;cp_utilities;cp_handover | 每 kg 原皮 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| q_source | 所有批次 | 追踪 0211 物种、动物用途及阶段、实际屠宰或合法倒毙回收、等级和交付点。 | 台账与许可 |
| q_mass | 所有批次 | 校准毛重/皮重、等级、水分和盐平衡，并报告差额。 | 磅秤、实验室与批次平衡 |
| q_shared | 来源与场址 | 记录动物阶段、共享使用者、服务期、替换和终止，无重复负担。 | 阶段及资产台账 |
| q_uuid | 所有交换卡 | 最终数据包前核实具体流身份、角色、状态、交付点和属性；待确认流身份只能以实际前景证据展开。 | 身份解析记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_scope | 参考批次 | 非牛类、鞣制/进一步加工、状态未知、实际交付点未申报或缺少净质量基准时拒绝。 | un-cpc-3 |
| v_route | 来源 | 屠宰路线须有实际动物系统产出分配；合法倒毙路线须有回收证据且不得虚构肉类产出。 | fao-statistics;fao-hides |
| v_balance | 所有批次 | 对账剥皮、初整、分级、保藏及最终质量，并纳入修边物、盐/盐水和水分损失；按场址容差调查差额。 | fao-hides |
| v_attribution | 动物及共享资产 | 对重复动物阶段或设施服务期、缺失产出交接或归属决策予以拒绝。 | fao-hides |
| v_binding | 所有卡 | 仅在实际状态、交付点与质量属性有证据后，才将宽义最终产出解析为一个具体产品 UUID；狭义厂门流不得强加于全部批次。其余具体 UUID 和待确认流身份成员在生成交换前均须独立核实。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 按路线、物种、等级、状态及实际交付点限定的牛类原皮前景数据集。 |
| downstream_use | 交换身份解析、审查和发布后可作为候选 secondary_dataset 或 background_dataset。 |
| allowed_use | 相同状态及交付点的比较，或披露假设后的实测干物质换算。 |
| excluded_use | 非牛类/鞣制皮、原皮默认零负担、通用状态换算、其他交付点复用厂门 UUID、下游运输。 |
| required_metadata | 物种、动物用途/阶段、来源路线/法律身份、产出及分配、等级、状态、水分/盐、净重、实际交付点与期间。 |
| required_quality_disclosure | 动物产出和共享服务归属、质量/等级平衡、保藏投入/残余及未解析身份。 |
| update_trigger | 出现新核实流身份、路线、交付点、保藏或实测分配证据。 |

## 11. 数据来源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3` | official_guidance | [UN CPC 3.0 说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 0211 牛类及 02951 原皮身份。 |
| `fao-hides` | official_guidance | [FAO，原皮与皮张](https://www.fao.org/4/i0523e/i0523e.pdf) | 剥皮、初次处理、分级与保藏路线。 |
| `fao-statistics` | official_guidance | [FAO，皮张产量定义](https://www.fao.org/4/x9892e/X9892e06.htm) | 屠宰与倒毙动物来源区分。 |
| `unido-leather` | official_guidance | [UNIDO 可持续皮革框架](https://downloads.unido.org/ot/46/70/4670793/KRAL_AGR_AIT_URT_2015_100228_001.pdf) | 原皮与后续皮革加工边界。 |
