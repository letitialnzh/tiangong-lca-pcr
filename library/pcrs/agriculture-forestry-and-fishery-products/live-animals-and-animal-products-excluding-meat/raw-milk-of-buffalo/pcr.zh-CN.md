---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-buffalo
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水牛原奶

## 1. 范围与适用性

本 PCR 用于产奶农场门口交付的未加工水牛原奶前景数据包，涵盖温乳和农场自身冷却的原奶。必须声明水牛物种、农场、畜群及泌乳期间、原奶状态、温度、脂肪/蛋白或固形物，以及接收和拒收质量。不包括其他物种乳、巴氏杀菌、标准化、消费包装、独立冷却中心及交付后的运输。活水牛为独立产品。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-buffalo` |
| classification_refs | CPC 3.0 `02212`，水牛原奶 |
| covered_products | 产奶农场门口未加工的温热或农场冷却水牛乳 |
| excluded_products | 其他物种乳、加工乳、独立冷却中心出品乳 |
| representative_product | 农场最终交接状态下已接收的水牛原奶 |
| production_route | 管理型水牛畜群 → 挤乳采集 → 初步处理 → 可选农场冷却 |
| market_state | 温热或农场冷却原奶，声明温度与成分 |

放牧和舍饲为管理型水牛畜群母路线的差异实现；同场可以并存，但饲料、能源、粪污及动物期间数据须分别证明。每批原奶的直接温乳交付与农场冷却交付互斥。

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 产奶农场门口已接收的水牛原奶 |
| How much | 净质量 1 kg |
| How well | 原奶；声明状态、温度、物种、脂肪/蛋白或固形物及接收/拒收基准 |
| How long or cycle | 涵盖泌乳、干奶、后备、出生和淘汰阶段的报告期间 |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 产奶农场门口温热或农场冷却的水牛原奶 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 水牛物种；原奶状态；农场门口；温热或冷却；交付温度；脂肪/蛋白或固形物；接收和拒收质量；畜群及泌乳期间 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

核实的冷却乳 UUID 仅用于明确的冷却产出卡，不代表同时涵盖温乳的宽口径参考流。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_reference` | 已接收最终乳 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每批仅有一次最终温乳或冷却乳交付，归一到 1 kg 已接收净质量；内部温乳转移不可重复计数。 |
| `m_composition` | 原奶质量 | 脂肪/蛋白或固形物质量分数 | % 或 g/kg | 保留采样时间、分析基准及湿质量分母；不得假设标准化。 |
| `m_feed` | 饲料 | 质量与干物质 | kg | 区分原物与干物质，并保留实测含水换算。 |
| `m_emission` | 直接排放 | 具名污染物质量 | kg CH4、N2O 或 NH3 | 区分物质、空气介质、路径与因子层级。 |
| `m_energy` | 公用投入 | 原始能源载体量 | kWh、MJ、L 或 kg | 换算前保留载体和共享仪表的分配。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

边界从声明的期初水牛存栏及带有此前负担的购入后备牛开始。管理型畜群生产涵盖饲料、水、圈舍、肠道与粪污路径。独立挤乳采集原奶总量；农场初步处理进行过滤和接收。可选冷却在农场交付前保存已经可用的原奶，并非巴氏杀菌。共享圈舍、泵、挤乳室、储奶罐和仪表按使用节点与期间分配一次。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 按类别、泌乳状态、来源和前期负担声明期初存栏；购入后备牛另列 |
| starting_condition_role | 支持产奶、繁殖及后续活体转让的跨期生物存量 |
| product_classification_scope | CPC 3.0 `02212` 水牛原奶 |
| recursive_input_rule | 购入同类原奶保留供应商来源和上游负担，不重标为本农场自产参考产出 |
| upstream_dataset_requirement | 饲料、后备牛、能源、水和卫生材料的供应证据，缺口须披露 |
| disclosure | 畜群/路线/期间、原奶状态与温度、损失、粪污路径、独立共产品、共享设施及未解析身份 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_farm_gate` | 最终原奶 | 仅纳入产奶农场活动；独立冷却、门口之后运输、巴氏杀菌和包装排除。 | `fao-large-ruminants-2016` |
| `b_capture` | 原奶阶段 | 按交接状态区分生物产奶、物理挤乳采集、首次处理与可选冷却。 | `fao-large-ruminants-2016` |
| `b_route` | 放牧/舍饲 | 管理型水牛畜群为母路线；记录饲料来源、粪污排放或贮存、圈舍能源及校验差异，两种路线可并存。 | `fao-large-ruminants-2016`; `ipcc-livestock-2019` |
| `b_manure` | 排泄物 | 按路径和氮、挥发性固体区分牧场排泄、收集、贮存、场内返回及独立转让。 | `ipcc-livestock-2019` |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd` | 管理型水牛乳用畜群 | required | 所有畜群及后备阶段 | 管理型生物生产与粪污 | 原奶生产总量与动物期间 |
| `milking` | 挤乳与采集 | required | 所有产奶路线 | 独立采集节点 | 采集原奶总量 |
| `conditioning` | 农场初步原奶处理 | required | 采集之后 | 过滤、接收与拒收 | 已接收温乳 |
| `cooling` | 农场控制的原奶冷却 | conditional | 产奶农场于门口前冷却 | 可用原奶的保鲜 | 已接收冷却乳 |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

### 过程：管理型水牛乳用畜群 (`herd`)

#### 输入

##### 产品流

###### 饲料与粗饲料 (`feed`)

按水牛类别和期间记录购入饲料与放牧采食量，区分原物与干物质。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：依据饲料领用记录与有方法说明的放牧采食估算 原始采集分母类型：process_output。

- 选定流： Buffalo feed and forage
- 流属性/单位： Mass / kg dry matter
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_herd`
- 来源： `fao-large-ruminants-2016`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg dry matter/kg accepted milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 牛群供水 (`water`)

按来源记录饮用及饲养用水，不计入未管理降水。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：按来源和动物类别计量供水 原始采集分母类型：process_output。

- 选定流： Supplied water for buffalo herd
- 流属性/单位： Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_utilities`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： m3/kg accepted milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 畜群管理能源 (`herd_energy`)

按能源载体分别记录圈舍、抽水、喂养和粪污设备的能源。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：按服务期间分配仪表和发票数量 原始采集分母类型：process_output。

- 选定流： Energy supply for buffalo herd
- 流属性/单位： Energy or carrier quantity / kWh, MJ, L or kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_utilities`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 30
  - 单位： kWh-equivalent/kg accepted milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无单独报告的此类流。

##### 基本流

无单独报告的此类流。

#### 输出

##### 产品流

###### 转让的犊牛与淘汰水牛 (`animals`)

仅独立转让的活体属于共产品；留作后备的牛只为内部流。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：按类别和期间计量转让时活重 原始采集分母类型：process_output。

- 选定流： Live buffalo calves and culls
- 流属性/单位： Mass / kg live weight
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_herd`
- 来源： `fao-large-ruminants-2016`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 5
  - 单位： kg live mass/kg accepted milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立转让的可用粪肥 (`manure_export`)

仅有独立转让和质量证据时把可用粪肥列为产出。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：计量转让质量、干物质和氮含量 原始采集分母类型：process_output。

- 选定流： Usable buffalo manure at transfer
- 流属性/单位： Mass / kg wet and dry matter
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_manure`
- 来源： `ipcc-livestock-2019`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 50
  - 单位： kg wet manure/kg accepted milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 待处理的剩余粪污 (`manure_residue`)

将不可用残余与粪肥产品、牧场直接排泄分开，记录实际去向。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：按管理路径记录收集的残余质量 原始采集分母类型：process_output。

- 选定流： Buffalo manure residue
- 流属性/单位： Mass / kg wet matter
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_manure`
- 来源： `ipcc-livestock-2019`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 50
  - 单位： kg wet manure/kg accepted milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 肠道甲烷排入空气 (`enteric_ch4`)

按水牛类别和期间计算生物源 CH4，不合并粪污甲烷。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：水牛活动量乘以匹配的肠道排放因子 原始采集分母类型：process_output。

- 选定流： Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位： Mass / kg CH4
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_herd`
- 来源： `ipcc-livestock-2019`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 2
  - 单位： kg CH4/kg accepted milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污甲烷排入空气 (`manure_ch4`)

按水牛粪污挥发性固体和记录的管理路径计算生物源 CH4，与肠道 CH4 分列。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：路径粪污挥发性固体乘以匹配的甲烷因子 原始采集分母类型：process_output。

- 选定流：Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg CH4
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定粪污甲烷筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg CH4/kg accepted milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污氧化亚氮排入空气 (`manure_n2o`)

追踪粪污氮和管理路径，并与农田土壤核算协调。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：按路径计算直接及适用的间接 N2O 原始采集分母类型：process_output。

- 选定流： Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位： Mass / kg N2O
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_manure`
- 来源： `ipcc-livestock-2019`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg N2O/kg accepted milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污氨排入空气 (`manure_nh3`)

将挥发 NH3 与 N2O 和其他氮损失分别追踪。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：按路径氮挥发量计算 NH3 原始采集分母类型：process_output。

- 选定流： Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位： Mass / kg NH3
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_manure`
- 来源： `ipcc-livestock-2019`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg NH3/kg accepted milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：挤乳与采集 (`milking`)

#### 输入

##### 产品流

###### 挤乳设备能源 (`milking_energy`)

挤乳采集能源与畜群管理及冷却分别计量。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：按载体计量挤乳服务能源 原始采集分母类型：process_output。

- 选定流： Energy supplied to milking
- 流属性/单位： Energy or carrier quantity / kWh, MJ, L or kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_utilities`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： kWh-equivalent/kg gross milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无单独报告的此类流。

##### 基本流

无单独报告的此类流。

#### 输出

##### 产品流

###### 采集的原奶总量 (`gross_milk`)

独立采集交接点的原奶为内部流，尚未经接收判定。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：按挤乳批次计量采集总量 原始采集分母类型：process_output。

- 选定流： Gross warm raw buffalo milk at milking handoff
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_milk`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 10
  - 单位： kg gross/kg final accepted milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无单独报告的此类流。

##### 基本流

无单独报告的此类流。

### 过程：农场初步原奶处理 (`conditioning`)

#### 输入

##### 产品流

###### 清洗与初步处理用水 (`cleaning_water`)

记录过滤与卫生操作供应的水，不把废水当清洁水。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：按批次和清洗事件计量供应量 原始采集分母类型：process_output。

- 选定流： Process water for farm milk handling
- 流属性/单位： Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_utilities`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： m3/kg accepted milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无单独报告的此类流。

##### 基本流

无单独报告的此类流。

#### 输出

##### 产品流

###### 已接收的温热原奶 (`warm_milk`)

已接收温乳用于直接农场交付或内部冷却，两者不可同时计为最终产出。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：采集总量减去拒收和初处理损失 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流： Accepted warm raw buffalo milk
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_milk`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg accepted/kg gross
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 拒收原奶与过滤残余 (`conditioning_reject`)

按数量、原因和去向分类记录拒收原奶与过滤残余。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：计量拒收奶并单独记录固体残余 原始采集分母类型：process_output。

- 选定流： Rejected raw buffalo milk and first-conditioning residue
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_milk`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg rejected milk/kg gross
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

无单独报告的此类流。

### 过程：农场控制的原奶冷却 (`cooling`)

#### 输入

##### 产品流

###### 农场冷却能源 (`cooling_energy`)

仅在产奶农场控制冷却时记录制冷用电及备用燃料。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：按载体和批次计量冷却能源 原始采集分母类型：process_output。

- 选定流： Energy supply for farm milk cooling
- 流属性/单位： Energy or carrier quantity / kWh, MJ, L or kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_utilities`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： kWh-equivalent/kg chilled milk
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无单独报告的此类流。

##### 基本流

无单独报告的此类流。

#### 输出

##### 产品流

###### 农场门口已接收的冷却原奶 (`chilled_milk`)

已核实的冷却专属身份仅用于该农场冷却并交付的原奶。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：在农场最终交接点计量已接收冷却乳 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流： Raw milk of buffalo, chilled, at farm gate `790fcd48-b398-4049-898a-f9535f08f97b`
- 流属性/单位： Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_milk`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg chilled/kg warm into cooling
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 冷却损失与冷却乳拒收 (`cooling_reject`)

按实际去向记录泄漏、溢出及拒收批次，不计为可销售冷却乳。

分母与范围要求：每 kg 最终接收原奶，保留畜群期间或批次分层

原始数量及计算要求：计量冷却损失及拒收质量 原始采集分母类型：process_output。

- 选定流： Raw milk lost or rejected during cooling
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_milk`
- 数量范围：暂定完整性筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg lost/kg warm into cooling
  - 基准：宽泛首轮完整性筛选，非通用因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

无单独报告的此类流。

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 产奶农场门口温热或农场冷却的水牛原奶（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `warm_milk`, `chilled_milk` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`warm_milk`, `chilled_milk`

必需产品实例限定项：水牛物种；原奶状态；农场门口；温热或冷却；交付温度；脂肪/蛋白或固形物；接收和拒收质量；畜群及泌乳期间

- 选定流：产奶农场门口温热或农场冷却的水牛原奶（实际生产者交付关联）
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

###### 产奶农场门口温热或农场冷却的水牛原奶 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`warm_milk`, `chilled_milk`

必需产品实例限定项：水牛物种；原奶状态；农场门口；温热或冷却；交付温度；脂肪/蛋白或固形物；接收和拒收质量；畜群及泌乳期间

- 选定流：产奶农场门口温热或农场冷却的水牛原奶
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

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_outputs` | 原奶、活水牛/犊牛和可用粪肥 | 先分离专属操作。剩余奶与活体畜群负担按水牛类别期间产奶及活体生长的记录能量需求作生物物理分配，份额合计为一；价格法仅作披露的敏感性分析。外售可用粪肥须有明确负担决策，不自动给予替代产品抵扣。后备牛、拒收物和未转让粪污不给予共产品抵扣，也不得与活水牛 PCR 重复计入。 | `fao-large-ruminants-2016` |
| `a_period` | 泌乳、干奶、后备、出生和淘汰 | 将投入、设施、原奶和动物事件关联到类别与期间；期初、后备及退出负担只计一次。 | `fao-large-ruminants-2016` |
| `a_shared` | 圈舍、泵、挤乳室、储奶罐和仪表 | 标记各使用节点和服务期间；按服务时长、吞吐量或有依据的因果驱动分配，份额合计为一。 | `fao-large-ruminants-2016` |
| `a_residue` | 拒收乳和剩余粪污 | 核对质量及实际处理，不给予残余废物独立产品抵扣。 | `ipcc-livestock-2019` |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd` | `herd` | 饲料、活体转让、肠道 CH4 | 畜群/饲料台账 | 类别、头日、饲料及含水率、放牧估算、出生、后备、淘汰、来源 | 农场记录及磅秤；原始汇总要求：按类别和期间分层。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头日、kg | 事件及每日 | 完整报告期间 | 产奶农场 | 每参考流 | 畜群盘点及称重票据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure` | `herd` | 粪污产出、CH4、N2O、NH3 | 粪污台账 | 排泄氮、挥发性固体、路径比例、质量、氮品质、转让 | 库存、采样及路径模型；原始汇总要求：核对路径且不重复计土壤负担。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、kg N、kg VS | 事件及每月 | 完整报告期间 | 产奶农场 | 每参考流 | 贮存和转让记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_utilities` | `herd`; `milking`; `conditioning`; `cooling` | 水及能源 | 仪表/发票 | 来源、载体、数量、设施、节点、服务时间、期间 | 仪表及分配日志；原始汇总要求：共享仪表只分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | m3、kWh、MJ、L、kg | 每月及每批 | 完整报告期间 | 产奶农场 | 每参考流 | 校准与发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_milk` | `milking`; `conditioning`; `cooling` | 原奶产出及拒收 | 批次台账 | 总量、接收、拒收、损失质量、状态、温度、成分、交接点 | 校准储奶罐及采样；原始汇总要求：汇总互斥的最终温乳/冷却乳交付。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、°C、% | 每批 | 完整报告期间 | 产奶农场 | 每参考流 | 原奶平衡及接收票据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_milk_balance` | 原奶阶段 | 采集总量 = 已接收温乳 + 初处理拒收/损失；入冷却温乳 = 已接收冷却乳 + 冷却拒收/损失；最终参考量 = 直接温乳 + 冷却乳，均只计一次 | 批次质量 | 已接收净质量 kg | |
| `c_feed` | 畜群饲料 | 干物质 = 原物质量 × 采样干物质分数；放牧估算另行说明 | 饲料及含水率 | 干物质 kg | `fao-large-ruminants-2016` |
| `c_enteric` | CH4 | 水牛类别期间活动量 × 匹配层级因子；肠道与粪污分开 | 头日、采食量、因子 | CH4 kg | `ipcc-livestock-2019` |
| `c_manure_ch4` | 粪污 CH4 | 挥发性固体 × 管理路径份额 × 匹配的甲烷转化及潜势因子 | 挥发性固体和路径台账 | 生物源 CH4 kg | `ipcc-livestock-2019` |
| `c_manure` | N2O 和 NH3 | 排泄氮 × 路径比例 × 物种因子，并核对土壤接口 | 氮/路径台账 | 分别给出 N2O、NH3 kg | `ipcc-livestock-2019` |
| `c_shared` | 共享设施 | 实测总量 × 节点期间服务比例；份额合计为一 | 仪表及服务日志 | 分配的能源/设施负担 | `fao-large-ruminants-2016` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_identity` | 最终原奶 | 核实水牛物种、原奶状态、农场门口、温乳/冷却状态及温度。 | 批次与交付记录 |
| `q_period` | 畜群 | 覆盖泌乳、干奶、后备、出生和淘汰，核对期初期末存栏。 | 畜群台账 |
| `q_balance` | 原奶与粪污 | 原奶各阶段及粪污路径比例须在声明容差内核对。 | 批次与路径平衡 |
| `q_emission` | 直接排放 | 保留物质、介质、水牛类别、粪污路径和因子层级。 | 因子/活动表 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | 最终原奶 | 每批只有一个最终交付状态；归一到 1 kg 接收质量。冷却专属 UUID 不可代表宽口径温乳或冷却乳参考流。 | |
| `v_route` | 放牧/舍饲 | 各路线差异均需饲料、粪污、能源及动物期间证据；路线名称不足以证明。 | `fao-large-ruminants-2016` |
| `v_outputs` | 原奶、活体及粪污 | 每个共产品均需独立交接与归属决策；残余和内部转移不得重复计入。 | `fao-large-ruminants-2016` |
| `v_period` | 畜群阶段 | 期初与后备负担、出生、原奶及淘汰事件仅归属一个类别期间。 | |
| `v_shared` | 共享设施 | 圈舍、泵、挤乳室、储奶罐和仪表在各期间跨畜群、挤乳、初处理及冷却的份额合计为一。 | |
| `v_balance` | 原奶/粪污 | 核对采集总量、接收、拒收及粪污路径；直接温乳和冷却乳最终产出不可重叠。 | |
| `v_uuid` | 身份 | 固定 UUID 须与流类型、属性、状态、交接点及介质精确匹配；未解析身份留空。 | |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 水牛原奶生产前景数据集 |
| downstream_use | `secondary_dataset`；经审查方可作 `background_dataset` |
| allowed_use | 产奶农场门口、声明温热/冷却状态的未加工水牛乳 |
| excluded_use | 其他物种、加工乳、独立冷却及门口后运输 |
| required_metadata | 畜群类别与期间、路线、农场、批次接收/拒收、成分、温度、粪污与活体交接、分配及共享设施 |
| required_quality_disclosure | 活动覆盖、推理估算区间、因子层级及不确定性、平衡与未解析身份 |
| update_trigger | 畜群/饲喂路线、冷却控制权、状态、共产品归属、因子方法或已核实身份改变 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-large-ruminants-2016` | official_guidance | FAO LEAP, Environmental performance of large ruminant supply chains, 2016, https://openknowledge.fao.org/handle/20.500.14283/i6494en | 畜群阶段、边界、饲料、产出及分配 |
| `ipcc-livestock-2019` | method_factor | IPCC, 2019 Refinement, Volume 4 Chapter 10, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 水牛排放及粪污路径 |
