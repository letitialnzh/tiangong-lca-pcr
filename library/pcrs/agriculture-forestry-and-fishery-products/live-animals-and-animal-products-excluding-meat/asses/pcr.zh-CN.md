---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.asses
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 活驴

## 1. 范围与适用性

本 PCR 涵盖繁育者或饲养者生产、并在实际生产者交付点以活体状态交付的驴。繁育者可出售驴驹，饲养者可出售较年长的驴；两者是不同的最终交付，不能把同一批动物的连续流转算作两次最终产出。不包括马、骡、駃騠、死亡动物、肉、乳，以及交付后的使役、运输或骑乘服务。记录品系、性别、年龄或生产类别、头数、实测活体质量、预定用途、健康状态、路线、期间和实际交付点。购入动物必须携带此前生产负担。留场驴的劳动只有在农场确实提供且有证据时才作为单独服务处理，不能假定为联产品。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.asses` |
| classification_refs | CPC 3.0 `02132`，Asses |
| covered_products | 在繁育者的驴驹交付点或饲养者/销售者的生产者交付点交付的活驴 |
| excluded_products | 马、骡与駃騠；屠体、肉与乳；下游动物使役或运输服务 |
| representative_product | 在声明的生产者交付点称重的活驴 |
| production_route | 有管理的配种与产驹、按需开展的幼驴饲养，以及之后独立的活体集中、检查与交付。以放牧为主和以厩养/饲料为主的管理路线同属生物生产母活动，但饲料来源、垫料、厩舍能源、用水及粪便落点和测量方式不同。两者可在同一群体或期间并存，应披露实测份额，而非只标一个路线名称。 |
| market_state | 活体、未经加工，声明状态、类别、性别、头数及活体质量 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在实际繁育者、饲养者或销售者生产交付点的活驴 |
| How much | 实测活体质量 1 kg；同时报告头数及各类别实测 kg/头 |
| How well | 活体、未经加工，记录品系、类别、性别、预定用途和状态 |
| How long or cycle | 声明配种/产驹季节或饲养群体；给种畜、幼畜及共享资产的服务期间编制索引 |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 在声明的生产者交付点交付的活驴 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 品系/物种；性别；驴驹/幼驴/成年类别；头数；实测 kg/头；状态；预定用途；繁育或饲养路线；实际生产者交付点；地域与群体期间 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

参考流有意涵盖多个生产者交付点。已确认的 CPC 02132 农场门口产品身份仅用于交付点吻合的最终农场产出卡，不能用于一般驴驹内部转移或跨交付点参考流。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | 参考与动物转移 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对整批或有记录的代表性类别样本称重，并核对头数及 kg/头。不得用通用驴体重由头数推算质量。 |
| `head_balance` | 繁育及饲养群体 | Count | 头 | 按类别与期间核对期初、购入、出生、转移、出售、死亡及期末动物。 |
| `period_basis` | 种畜与共享资产 | Time | 天或季节 | 给配种、妊娠、产驹、生长、替换及最终交付注明日期；经常性负担只按实际服务分摊。 |
| `manure_basis` | 外售粪肥与管理废物 | Mass | kg | 区分出售/利用的粪便、收集处置和放牧地沉积，记录湿/干基及去向。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 进入首个实际运行节点的期初种驴或购入驴驹/幼驴，带有来源、年龄、头数、活体质量和继承负担 |
| starting_condition_role | 前景期初畜群或上游产品输入，不能默认动物零负担 |
| product_classification_scope | 仅 CPC 3.0 `02132` 活驴 |
| recursive_input_rule | 购入活驴按真实前一交付点仅连接一次上游数据集；驴驹内部转移不是第二次最终销售，也不是新的外部输入。 |
| upstream_dataset_requirement | 按真实来源、单位、技术与地域匹配购入动物、饲料、水、能源、材料及服务。 |
| disclosure | 实际运行节点、放牧/厩养份额、繁育与饲养期间、共享资产、动物死亡/淘汰、粪便去向及精确活体交付点。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_live_ass` | 所有路线 | 在活驴生产者交付点结束；排除屠宰、肉乳加工及交付后使役服务。损失或死亡动物不是活体产品。 | `un-cpc-2025`; `fao-working-equids` |
| `boundary_breeding` | 实际繁育节点 | 若运行则纳入公驴/母驴维持、配种、妊娠、产驹及哺育；购入种畜保留既有上游负担。 | `fao-working-equids` |
| `boundary_route` | 放牧与厩养 | 按模式及期间披露实际饲料、放牧、垫料、能源、用水及粪便路径；仅有“厩养”标签不足以证明清单变化。 | `fao-working-equids`; `ipcc-livestock-2019` |
| `boundary_shared` | 共享基础设施 | 按计量使用或有记录的动物日，将厩舍、围栏、供水和转运设施分配给所有使用它们的繁育、饲养及交付节点/期间；防止重复归属。 | `fao-working-equids` |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeding` | 繁育并哺育活驴驹 | conditional | 实际运行公驴/母驴配种与产驹；否则采用购入幼驴的上游数据 | 有管理的生物生产和驴驹交接 | 每 kg 离开繁育节点的活驴驹 |
| `rearing` | 饲养活驴 | conditional | 成年/较年长驴的生产者交付或购入驴驹的生长 | 有管理的生长，并体现放牧/厩养清单差异 | 每 kg 离开饲养节点的活驴 |
| `handover` | 集中、评估并交付活驴 | required | 最终繁育者驴驹销售或饲养农场销售 | 独立的活体收集与验收、损失核对和交付点测量 | 每 kg 在最终交付点验收的活驴 |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

集中与验收独立于生长过程：它确定最终活体产品状态和交付点，并区分拒收或死亡动物与可出售动物。每批动物只有一个最终路线，但其历程中可兼有放牧与厩养。记录配种/妊娠、产驹、哺育、饲养、资产服务、替换及处置期间。

### 过程：繁育并哺育活驴驹（`breeding`）

#### 输入

##### 产品流

###### 购入种驴（`breeder_stock`）

只在购入母驴和公驴跨入此繁育边界时计入；期初自有存栏属于声明的起始条件。

分母与范围要求：每 kg 离开繁育节点的活驴驹

原始数量及计算要求：实测收货活体质量、上游负担及头数 原始采集分母类型：process_output。

- 选定流：购入活种驴（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：非负种畜输入完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴驹
  - 基准：每 kg 离开繁育节点的活驴驹；上限仅用于筛查单位错误，并非典型值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 繁育畜群饲料与供应牧草（`breeder_feed`）

分别计量购入和自产饲料；放牧采食的草料不自动视为购入产品输入。

分母与范围要求：每 kg 离开繁育节点的活驴驹

原始数量及计算要求：发放量扣除库存变化与已记录损失，按种类细分 原始采集分母类型：process_output。

- 选定流：种驴饲料与牧草（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed`
- 数量范围：非负饲料完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴驹
  - 基准：每 kg 离开繁育节点的活驴驹；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 繁育节点供应水（`breeder_water`）

记录供应的饮用与清洁用水；落在牧场的雨水不是购入产品输入。

分母与范围要求：每 kg 离开繁育节点的活驴驹

原始数量及计算要求：水表或交付记录按种畜动物日分配 原始采集分母类型：process_output。

- 选定流：供应水（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：非负用水完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴驹
  - 基准：每 kg 离开繁育节点的活驴驹；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种驴厩舍能源（`breeder_energy`）

仅在厩舍或供水系统确实用能时，按载能体记录电、热或燃料。

分母与范围要求：每 kg 离开繁育节点的活驴驹

原始数量及计算要求：计量或购入载能量按有记录的转换因子折算为能量 原始采集分母类型：process_output。

- 选定流：繁育能源载体（UUID 未解析）
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：非负能源完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kWh/kg 活驴驹
  - 基准：每 kg 离开繁育节点的活驴驹；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设常规购入废物输入；若实际使用外来废物，应另行记录许可和身份。

##### 基本流

牧场占地按地点、面积和时间记录为土地利用活动，不能虚构为购入饲料流。

#### 输出

##### 产品流

###### 离开繁育节点的活驴驹（`breeder_foals`）

跟踪离开繁育阶段的活驴驹。内部转移仅进入饲养一次；直接在繁育者交付点销售须经交付节点才成为最终产品。

分母与范围要求：每 kg 离开繁育节点的活驴驹

原始数量及计算要求：实测验收活体质量及驴驹头数 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：繁育阶段活驴驹（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：驴驹产出质量平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 活驴驹
  - 基准：若此节点运行且分母非零，每 kg 离开繁育节点的活驴驹产出为 1
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立出售的活体淘汰种驴（`breeder_culls`）

只有实际单独出售的活体淘汰驴是联产品；死亡动物不是。

分母与范围要求：每 kg 离开繁育节点的活驴驹

原始数量及计算要求：在自身交付点称重的活体淘汰驴，若无则为零 原始采集分母类型：process_output。

- 选定流：活体淘汰种驴（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：非负淘汰量平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴驹
  - 基准：每 kg 离开繁育节点的活驴驹；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 送往废物处理的繁育粪便（`breeder_manure_waste`）

这里只记录作为废物送去处置/处理的收集粪便；有文件证明为有用产品外售的粪便是另一实际产出，不能混在此行。

分母与范围要求：每 kg 离开繁育节点的活驴驹

原始数量及计算要求：按收集时状态称重或计量，并记录去向 原始采集分母类型：process_output。

- 选定流：收集的驴粪废物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：非负粪便转移筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴驹
  - 基准：每 kg 离开繁育节点的活驴驹；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 繁育阶段肠道甲烷排向空气（`breeder_ch4`）

只按实际驴类别及饲喂/生产力状况，使用有记录且适用的方法计算。IPCC 的 Mules/Asses 参数有分层，不是通用排放因子。

分母与范围要求：每 kg 离开繁育节点的活驴驹

原始数量及计算要求：按类别的动物日乘以经论证的类别与管理状态因子 原始采集分母类型：process_output。

- 选定流：生物源甲烷排向空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`ipcc-livestock-2019`
- 数量范围：非负计算排放筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴驹
  - 基准：每 kg 离开繁育节点的活驴驹；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 繁育粪污甲烷排向空气（`breeder_manure_ch4`）

仅对实际在场址储存或处理且其路径产生甲烷的粪便计算；外送粪便的处理排放属于外部处理数据集。

分母与范围要求：每 kg 离开繁育节点的活驴驹

原始数量及计算要求：按动物类别的排泄活动乘以经论证的粪污系统甲烷因子 原始采集分母类型：process_output。

- 选定流：粪污生物源甲烷排向空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`ipcc-livestock-2019`
- 数量范围：非负粪污甲烷筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴驹
  - 基准：每 kg 离开繁育节点的活驴驹；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 繁育粪污氧化亚氮排向空气（`breeder_manure_n2o`）

按所选方法适用的实际储存、处理或放牧地沉积路径计算直接氧化亚氮；间接氮路径分开处理，外送粪便不得重复计入。

分母与范围要求：每 kg 离开繁育节点的活驴驹

原始数量及计算要求：按路径的氮或排泄活动乘以经论证的直接 N2O 因子 原始采集分母类型：process_output。

- 选定流：粪污氧化亚氮排向空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`ipcc-livestock-2019`
- 数量范围：非负粪污氧化亚氮筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴驹
  - 基准：每 kg 离开繁育节点的活驴驹；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：饲养活驴（`rearing`）

#### 输入

##### 产品流

###### 进入饲养的活幼驴（`young_ass_input`）

只接纳一次内部转来的驴驹，或携带其上游负担和真实前一交付点的购入幼驴。

分母与范围要求：每 kg 离开饲养节点的活驴

原始数量及计算要求：按类别及来源称重的进入活体质量 原始采集分母类型：process_output。

- 选定流：进入饲养的活幼驴（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：非负动物进入量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴
  - 基准：每 kg 离开饲养节点的活驴；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饲养饲料与牧草（`rearing_feed`）

区分供应的精料、收获牧草与牧场采食；自产饲料的上游负担归属须记录。

分母与范围要求：每 kg 离开饲养节点的活驴

原始数量及计算要求：按类别和期间发放量，并修正库存与损失 原始采集分母类型：process_output。

- 选定流：幼驴饲料与牧草（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed`
- 数量范围：非负饲料完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴
  - 基准：每 kg 离开饲养节点的活驴；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饲养节点供应水（`rearing_water`）

按实际路线和期间计量提供给饲养动物的饮水与清洁用水。

分母与范围要求：每 kg 离开饲养节点的活驴

原始数量及计算要求：计量或记录的供水按动物日归属 原始采集分母类型：process_output。

- 选定流：供应水（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：非负用水完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴
  - 基准：每 kg 离开饲养节点的活驴；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 厩舍垫料与护理材料（`rearing_materials`）

仅在确实厩养或治疗时，按材料记录垫料和兽医耗材；不预设每头动物通用耗材包。

分母与范围要求：每 kg 离开饲养节点的活驴

原始数量及计算要求：发放给饲养批次和期间的材料 原始采集分母类型：process_output。

- 选定流：驴垫料与护理材料（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 数量范围：非负材料完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴
  - 基准：每 kg 离开饲养节点的活驴；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饲养厩舍能源（`rearing_energy`）

记录实际载能体及共享厩舍服务；纯放牧期间的厩舍能源可为零。

分母与范围要求：每 kg 离开饲养节点的活驴

原始数量及计算要求：计量或购入能源载体及实际服务分配 原始采集分母类型：process_output。

- 选定流：饲养能源载体（UUID 未解析）
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：非负能源完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kWh/kg 活驴
  - 基准：每 kg 离开饲养节点的活驴；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设幼驴使用外来废物原料。

##### 基本流

适用时按面积、地点和时间记录放牧占地；不能仅从饲料采购推算。

#### 输出

##### 产品流

###### 饲养阶段活驴（`reared_asses`）

离开饲养阶段的活驴进入最终检查与交付，不能把它另算为一批最终产品。

分母与范围要求：每 kg 离开饲养节点的活驴

原始数量及计算要求：称重的活体离场动物及头数 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：离开饲养的活驴（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：饲养产出质量平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 活驴
  - 基准：若节点运行，每 kg 离开饲养节点的活驴产出为 1
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 送往废物处理的饲养粪便（`rearing_manure_waste`）

这里只包括作为废物运出的收集粪便；放牧地沉积及确实出售的有用粪便分别记录。

分母与范围要求：每 kg 离开饲养节点的活驴

原始数量及计算要求：按收集时状态记录的粪便、去向及含水基准 原始采集分母类型：process_output。

- 选定流：收集的驴粪废物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：非负粪便转移筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴
  - 基准：每 kg 离开饲养节点的活驴；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 饲养阶段肠道甲烷排向空气（`rearing_ch4`）

按实际幼驴动物日、饲粮和生产力类别计算；不可复用未经限定的物种汇总数字。

分母与范围要求：每 kg 离开饲养节点的活驴

原始数量及计算要求：动物日乘以经论证的 Mules/Asses 类别与管理状况因子 原始采集分母类型：process_output。

- 选定流：生物源甲烷排向空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`ipcc-livestock-2019`
- 数量范围：非负计算排放筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴
  - 基准：每 kg 离开饲养节点的活驴；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饲养粪污甲烷排向空气（`rearing_manure_ch4`）

按真实的场内粪污储存或处理计算，并记录气候及管理系统；不能把场外处理排放记在这里。

分母与范围要求：每 kg 离开饲养节点的活驴

原始数量及计算要求：按路径的排泄活动乘以经论证的甲烷因子 原始采集分母类型：process_output。

- 选定流：粪污生物源甲烷排向空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`ipcc-livestock-2019`
- 数量范围：非负粪污甲烷筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴
  - 基准：每 kg 离开饲养节点的活驴；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饲养粪污氧化亚氮排向空气（`rearing_manure_n2o`）

用相应的氮量、气候和路径数据计算有记录的粪污储存及放牧地沉积产生的直接氧化亚氮；氨或间接 N2O 不能混作此直接流。

分母与范围要求：每 kg 离开饲养节点的活驴

原始数量及计算要求：按路径的排泄氮乘以经论证的直接 N2O 因子 原始采集分母类型：process_output。

- 选定流：粪污氧化亚氮排向空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`ipcc-livestock-2019`
- 数量范围：非负粪污氧化亚氮筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活驴
  - 基准：每 kg 离开饲养节点的活驴；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：集中、评估并交付活驴（`handover`）

#### 输入

##### 产品流

###### 到达最终检查的活驴（`handover_animals`）

一批动物只接收一次来自繁育的驴驹或来自饲养的较年长活驴，携带实际质量和历程。

分母与范围要求：每 kg 在最终交付点验收的活驴

原始数量及计算要求：到达时实测活体质量及头数 原始采集分母类型：process_output。

- 选定流：生产者交付前的活驴（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：非负到达量平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 验收活驴
  - 基准：每 kg 在最终交付点验收的活驴；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交付作业用水（`handover_water`）

只记录活体集中、检查和短期看护期间经单独计量或有充分依据分配的用水。

分母与范围要求：每 kg 在最终交付点验收的活驴

原始数量及计算要求：按验收活体质量分配实际供应水 原始采集分母类型：process_output。

- 选定流：交付节点供应水（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：非负用水完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 验收活驴
  - 基准：每 kg 在最终交付点验收的活驴；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交付作业能源（`handover_energy`）

记录确实用于集中、检查或看护的电力或其他计量载能体，不假定所有场址都有动力设备。

分母与范围要求：每 kg 在最终交付点验收的活驴

原始数量及计算要求：按验收活体质量分配计量载能量 原始采集分母类型：process_output。

- 选定流：交付节点能源载体（UUID 未解析）
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：非负能源完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kWh/kg 验收活驴
  - 基准：每 kg 在最终交付点验收的活驴；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

活体交付节点不预设常规废物输入。

##### 基本流

不预设检查本身的基本流输入；如实际使用土地资源，应另行记录。

#### 输出

##### 产品流

###### 在生产者农场门口验收的活驴（`live_ass_handover`）

此卡是具体的农场门口情形。对于不匹配的繁育者或销售者交付点，流 UUID 保持未解析，并在前景包中标注真实交付点。

分母与范围要求：每 kg 在最终交付点验收的活驴

原始数量及计算要求：验收的称重活体质量，并核对头数与类别 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：农场门口生产混合的活驴、未经加工 `40fd68b3-1ea0-4828-8532-f64140fc3ea3`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：最终活体产出归一化检查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 验收活驴
  - 基准：每 kg 在匹配农场交付点验收的活驴
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 需要处置的死亡或拒收动物（`handover_losses`）

只有死亡动物或必须处置的物料属于废物；退回饲养的活体拒收动物仍是内部动物转移。

分母与范围要求：每 kg 在最终交付点验收的活驴

原始数量及计算要求：实测处置质量、命运及原因 原始采集分母类型：process_output。

- 选定流：死亡动物处置废物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_losses`
- 数量范围：非负处置量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 验收活驴
  - 基准：每 kg 在最终交付点验收的活驴；上限仅筛查单位错误
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

活体销售本身不产生默认排放。现场交付燃料若有直接排放，应在其运行节点继续记录。

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 在声明的生产者交付点交付的活驴（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `breeder_foals`, `reared_asses`, `live_ass_handover` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`breeder_foals`, `reared_asses`, `live_ass_handover`

必需产品实例限定项：品系/物种；性别；驴驹/幼驴/成年类别；头数；实测 kg/头；状态；预定用途；繁育或饲养路线；实际生产者交付点；地域与群体期间

- 选定流：在声明的生产者交付点交付的活驴（实际生产者交付关联）
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

###### 在声明的生产者交付点交付的活驴 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`breeder_foals`, `reared_asses`, `live_ass_handover`

必需产品实例限定项：品系/物种；性别；驴驹/幼驴/成年类别；头数；实测 kg/头；状态；预定用途；繁育或饲养路线；实际生产者交付点；地域与群体期间

- 选定流：在声明的生产者交付点交付的活驴
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

### 分配规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_live_outputs` | 繁育与饲养节点 | 将驴驹、较年长驴及独立出售的活体淘汰驴作为各自交付点的不同产出批次。先尝试过程细分及实测负担归属；若仍有不可分的联合负担，披露有依据的物理因果键（动物日、饲料使用或活体增重）及其他合理键的敏感性。内部转移不得计两次。 | `fao-working-equids`; `iso-14044` |
| `alloc_manure` | 粪便 | 收集外售的有用粪便只有具备实际质量、数量与交付证据才是联产品；处置粪便是废物，放牧地沉积是就地路径。不得对全部排泄物假设替代收益。 | `ipcc-livestock-2019`; `iso-14044` |
| `alloc_period` | 种畜群 | 按实测服务期间及驴驹群体分配公驴/母驴维持负担，并计及替换、死亡和淘汰；说明跨报告年度群体的处理。不得使用假设的通用寿命摊销。 | `fao-working-equids`; `iso-14044` |
| `alloc_shared` | 厩舍、围栏、用水及转运资产 | 确定每个使用的繁育/饲养/交付节点与服务期间。用计量服务或记录的动物日/占用容量作为因果键，只设一本共享负担台账，不重复分配。 | `iso-14044` |
| `alloc_work` | 留场劳动驴 | 若确实提供农场劳动，计量其服务，并仅从可售活体生产中划分有因果依据的饲料/资产负担；出售后的第三方使役不在范围内。 | `fao-working-equids`; `iso-14044` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | breeding; rearing; handover | 动物输入、转移、最终产出、淘汰 | 畜群与销售台账 | 动物 ID、品系、性别、年龄/类别、来源、去向、状态、头数、称重质量、日期 | 秤与核对后的转移登记；原始汇总要求：按类别、交付点及期间核对头数和质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头；kg | 每次事件 | 完整群体期间 | 所有实际运行节点 | 每参考流 | 经校准的秤、销售记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed` | breeding; rearing | 饲料输入 | 日粮/库存台账 | 饲料种类、购入/自产来源、期初、发放、期末、损失、路线、动物日 | 称重或核验的采购/库存核对；原始汇总要求：按类别/动物日分配发放饲料。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次交付；每月结账 | 完整季节/群体 | 所有管理动物 | 每参考流 | 收据、库存盘点；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_utilities` | breeding; rearing; handover | 用水与能源输入 | 计量与服务台账 | 载能体、水功能、计量、节点、共享服务、期间 | 计量及有记录的分配；原始汇总要求：每一载能体总量只分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；kWh；MJ | 计量间隔 | 完整运行期间 | 所有相关节点 | 每参考流 | 发票、计量日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_materials` | rearing | 垫料/护理输入 | 发放与治疗日志 | 材料、质量、治疗、动物批次、日期 | 称重及用药记录；原始汇总要求：按实际批次汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次使用 | 完整群体期间 | 厩养及接受治疗动物 | 每参考流 | 发放与兽医记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure` | breeding; rearing | 废物/产品粪便 | 粪便路径台账 | 收集质量、湿/干基、去向、放牧沉积、处理 | 称重与路径记录；原始汇总要求：分离销售、处置及就地命运。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次清运；每月 | 完整期间 | 所有饲养节点 | 每参考流 | 清运票据、土地与销售日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_emissions` | breeding; rearing | 计算的肠道/粪便排放 | 活动与因子档案 | 动物日、类别、饲粮/生产力、气候、粪污系统、来源因子及其单位 | 按管理状态从实测畜群/路径数据计算；原始汇总要求：先按类别/路径计算再汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头日；kg 气体 | 每个报告期间 | 完整繁育/饲养期间 | 每群体与粪便路线 | 每参考流 | 来源版本与算术审计；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_losses` | handover | 拒收/死亡动物 | 处置日志 | 动物 ID、原因、活/死、质量、日期、处置/退回去向 | 事件与质量记录；原始汇总要求：区分退回活体与废物。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头；kg | 每次事件 | 完整交付期间 | 最终批次 | 每参考流 | 处置记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass` | 活体产出 | 按声明交付点验收动物/类别汇总实测 kg；只有披露抽样框及不确定性时，才可用实测样本均重乘以头数。 | `cp_animals` | kg 活体参考及头数/kg 核对 | `fao-working-equids` |
| `calc_feed` | 有管理的生产 | 发放饲料 = 期初 + 收货 − 期末 − 有记录损失；自产饲料的生产负担只归属于一个消耗节点。 | `cp_feed` | 按类别/期间的 kg 饲料 | `fao-working-equids` |
| `calc_emissions` | 肠道/粪便路径 | 动物日或实测排泄量乘以按生产力、气候和粪污路径明确选择的 Mules/Asses 因子，并统一单位；报告不确定性，不能把流 UUID 当作因子。 | `cp_emissions`; `cp_manure` | 指定介质中指定物质的 kg 数 | `ipcc-livestock-2019` |
| `calc_shared` | 共享资产 | 单项资产负担 × 每服务期间实测的使用者服务份额 / 所有份额之和。 | `cp_utilities`; `cp_animals` | 按节点且不重复的负担 | `iso-14044` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 每批动物 | 核实为驴而非马或杂交体，并记录类别、性别、头数、状态与真实生产者交付点。 | 畜群、兽医与交付记录 |
| `dq_mass` | 参考及转移 | 保存秤校准、抽样框和头数—质量核对；不使用通用头数换算。 | 校准与转移核对 |
| `dq_period` | 跨期畜群与资产 | 覆盖种畜、妊娠、产驹、饲养、淘汰和最终产出期间及全部共享服务使用者。 | 注明日期的台账与负担安排 |
| `dq_factors` | 排放 | 写明精确的 IPCC 或其他合理因子分层、版本、气体/介质及兼容的动物活动；标示缺失数据。 | 因子记录与计算审计 |
| `dq_completeness` | 全部节点 | 解释零值或省略流、损失、粪便去向以及任何联产品或劳动服务；内部转移只核对一次。 | 清单与产出平衡 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_ass_identity` | 参考 | 拒绝马/杂交动物或未限定的活体质量、缺少类别/头数/交付点，以及假定的 kg/头换算。 | `un-cpc-2025` |
| `validate_route` | 过程图 | 必须有实际繁育或购入幼驴、按需饲养、最终交付及实测放牧/厩养份额；拒绝没有清单变化的路线标签或两个最终交付点。 | `fao-working-equids` |
| `validate_balance` | 畜群与产出集合 | 按类别/期间核对期初 + 购入 + 出生 − 死亡 − 出售 − 期末；活体淘汰、有用粪便和劳动服务仅依据实际证据分类。 | `fao-working-equids`; `iso-14044` |
| `validate_period_shared` | 畜群与基础设施 | 将每阶段、替换和共享厩舍/用水/转运使用者连到服务期间；防止两个群体或节点重复负担。 | `iso-14044` |
| `validate_emissions` | 直接气体 | 要求气体物质、接收介质、实际动物生产力、气候/粪污路线及因子来源。没有分层的通用 Mules/Asses 因子不足以使用。 | `ipcc-livestock-2019` |
| `validate_bindings` | 具体交换 | 从实际前景记录展开待确认输入。每个发布的交换都须有验证过的精确 UUID/属性/单位/交付点；未解析语义卡不允许虚构身份。 | `iso-14044` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 声明的生产者交付点活驴前景生产数据包 |
| downstream_use | 用作过程/生命周期模型构建的 `secondary_dataset`，适当时亦可作 `background_dataset` |
| allowed_use | 与驴的品系、动物类别、生产者交付点、管理路线及地域匹配，且期间及负担归属透明的情形 |
| excluded_use | 马或杂交体生产、肉乳、下游使役、屠宰场交付点，或未说明的头数—质量换算 |
| required_metadata | 驴品系、性别、年龄/类别、头数、实测质量、状态、预定用途、实际交付点、场址、期间、放牧/厩养组合、因子分层、上游动物来源及联产品处理 |
| required_quality_disclosure | 测量/抽样不确定性、缺失记录、分配选择、产出/粪便平衡、排放因子适用性、精确流绑定覆盖及未解析身份 |
| update_trigger | 动物边界、交付点、路线组合、实测因子、来源指导或已核实流身份改变 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | [联合国 CPC 3.0 解释性说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 驴产品身份与排除项 |
| `fao-working-equids` | handbook | [FAO 马、驴和骡饲养手册](https://www.fao.org/4/t0690e/t0690e07.htm) | 繁育、产驹、饲养、饲料及动物护理路线 |
| `ipcc-livestock-2019` | method_factor | [IPCC 2019 精细化指南，第 4 卷第 10 章](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | 条件化的 Mules/Asses 气体与粪便方法，不提供通用数量 |
| `iso-14044` | standard | ISO 14044:2006，环境管理——生命周期评价——要求与指南 | 分配、完整性和数据质量决策顺序 |
