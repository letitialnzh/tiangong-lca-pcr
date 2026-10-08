---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.eggs-from-other-birds-in-shell-fresh-for-hatching
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非鸡类鲜带壳孵化蛋

## 1. 范围与适用性

本 PCR 覆盖除鸡以外的鸟类所产、经筛选并作为孵化用途交付的完整鲜带壳蛋。实际发生的种禽饲养、独立集蛋、孵化适用性筛选及生产者交付前的保护性暂存和包装均纳入边界。必须记录鸟种、品系、枚数、实测带壳质量、质量证据和实际交付门槛。“孵化用”标签不等于已证明受精率或孵化率。排除鸡蛋、作为参考产品的非孵化蛋、破损或加工蛋、交付后的孵化及雏禽。自产自孵企业必须拆分蛋与雏禽的产品边界。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.eggs-from-other-birds-in-shell-fresh-for-hatching` |
| classification_refs | `cpc:3.0:02321` |
| covered_products | 在实际生产者门槛交付、经孵化用途筛选的非鸡类鲜带壳蛋 |
| excluded_products | 鸡蛋；作为参考产品的非孵化蛋；加工或破损蛋；蛋交付门槛之后的孵化蛋；雏禽 |
| representative_product | 标明鸟种和批次、在生产者门槛交付的鲜孵化蛋 |
| production_route | 种禽产蛋为母活动。鸟种或饲养方式差异只有在饲料、水、巢位、粪污、集蛋、暂存或验收的清单与验证要求发生变化时才构成独立路线；分开计量的群次可并存，不得隐含平均。 |
| market_state | 新鲜、带壳、已筛选为孵化用途，并披露生产者控制的暂存及包装状态 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在声明的生产者门槛验收为孵化用途的非鸡类完整鲜带壳蛋 |
| How much | 实测带壳蛋质量 1 kg，同时保留枚数和批次实测平均单蛋质量 |
| How well | 披露鸟种/品系、蛋壳完整性、等级、集蛋和暂存时间及条件，以及实际做过的受精或活力检测；不得推断孵化率 |
| How long or cycle | 声明种禽生产期和集蛋/暂存期，并关联替换群次 |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 非鸡类鲜带壳孵化蛋 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 鸟种/品系；种禽群次；实际生产者门槛；枚数与 kg；蛋壳等级；孵化验收/检测证据；集蛋和暂存期及条件；拒收及降级去向；包装复用 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `egg_count_mass` | 最终及内部蛋批次 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 和枚 | 按批次实测带壳质量和枚数；按批次实测平均单蛋质量换算枚数，不采用跨鸟种通用单蛋质量。 |
| `egg_balance_unit` | 蛋状态转移 | Mass | 带壳 kg | 结合实测库存变化核对收集、筛选、降级、拒收、暂存和发运的质量。 |
| `service_period` | 种禽和共用投入 | 各载体对应属性 | kg、L、MJ、kWh | 归一化到参考量之前，把每项投入、资产和产出关联至种禽期或蛋批期。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 外购种禽、饲料、水、能源和包装材料在有记录的农场接收点进入；自产投入应另行追踪前景过程。 |
| starting_condition_role | 实测种禽生产期之前进入的种禽。 |
| product_classification_scope | CPC 02321 仅指验收的非鸡类鲜带壳孵化蛋，不包括未分拣内部蛋或另售非孵化等级。 |
| recursive_input_rule | 用于建立种禽群的外购同类孵化蛋在接收点为上游投入，不得从随后产出的蛋中抵扣。 |
| upstream_dataset_requirement | 将种禽、饲料、能源、水和包装追溯至上游数据集；仅农场记录不是摇篮到大门结果。 |
| disclosure | 鸟种/路线、种禽和蛋批期间、门槛、枚数/质量、质量检测、集蛋和暂存条件、损失、联产品交付及共用资产归属。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `producer_gate` | 所有路线 | 纳入种禽产蛋、独立集蛋、分级和生产者端交付前保护；排除孵化、雏禽生产和门后运输。 | `fao-goose-production` |
| `species_delta` | 替代种禽路线 | 记录管理性生产母活动及有证据的清单、集蛋、暂存或验收变化；鸡蛋储存或孵化率假设不可转用到其他鸟种。 | `fao-goose-production`; `fao-animal-genetic-resources` |
| `grade_state` | 已筛选蛋 | 孵化用途需要有记录的批次筛选；预期用途不等于受精率或实际孵化率证据。 | `fao-goose-production` |
| `handoff_once` | 蛋状态 | 同一批次的产出、收集、分级和包装状态按转移核对，不得作为重复独立产品。 | `fao-goose-production` |
| `shared_boundary` | 禽舍、集蛋室、分级设备和复用蛋托 | 标明消耗节点和服务期；按因果分配驱动量仅计一次共用负担。 | `fao-animal-genetic-resources` |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder_laying` | 管理性非鸡类种禽产蛋 | `required` | 每条农场路线 | 产生带壳蛋，并区分售出种禽/粪肥与残余废物 | 群次期间和总 kg |
| `egg_collection` | 独立集蛋 | `required` | 每条路线 | 从巢位/禽舍收集蛋，记录破损及交接 | 总 kg 和收集 kg |
| `hatching_grade` | 孵化适用性筛选及去向分级 | `required` | 每条路线 | 分开验收蛋、安全另售降级蛋和废弃蛋 | 收集 kg |
| `egg_presentation` | 生产者端保护与交付 | `required` | 直接或暂存批次 | 记录包装、暂存、损失及唯一最终交付门槛 | 验收 kg |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

### 过程：管理性非鸡类种禽产蛋（`breeder_laying`）

#### 输入

##### 产品流

###### 接收非鸡类种禽 (`breeder_stock`)

记录来源、鸟种、数量、活重和生产群次。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：按群次仅记录一次外购替换种禽质量。 原始采集分母类型：reference_flow。

- 选定流：非鸡类种禽（UUID 未解析）
- 流属性/单位：Mass / 活重 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_flock`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg liveweight/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种禽饲料与补充料 (`breeder_feed`)

按鸟种和群次记录配方及净饲料供应。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：收货加期初库存减去期末库存及转出量。 原始采集分母类型：reference_flow。

- 选定流：种禽饲料原料（UUID 未解析）
- 流属性/单位：Mass / 原样 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_inputs`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg as-fed/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饮用和清洁用水 (`flock_water`)

依据计量或发票分开记录饮用与清洁功能。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：按实际功能记录供水量。 原始采集分母类型：reference_flow。

- 选定流：种禽舍供水
- 流属性/单位：Volume / L
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_inputs`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：L/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种禽舍能源载体 (`house_energy`)

分开计量通风、照明和供暖的能源载体。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：记录各载体及有凭据的换算。 原始采集分母类型：reference_flow。

- 选定流：能源载体与公用工程
- 流属性/单位：Energy / 按载体 MJ 或 kWh
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_inputs`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

此坐标不预设卡片；实测交换流须独立核实身份。

##### 基本流

此坐标不预设卡片；实测交换流须独立核实身份。

#### 输出

##### 产品流

###### 集蛋前产出的带壳蛋 (`laid_eggs`)

总量内部蛋状态交给独立集蛋过程，不是第二次销售。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：称重或用枚数与批次实测平均质量换算，并核对损失。 原始采集分母类型：reference_flow。

- 选定流：新产非鸡类带壳蛋（UUID 未解析）
- 流属性/单位：Mass / 带壳 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_eggs`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立出售的淘汰种禽 (`spent_breeders`)

仅纳入实际出售禽只，不包括死亡禽只。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：记录独立销售质量、门槛和群次。 原始采集分母类型：reference_flow。

- 选定流：淘汰非鸡类种禽（UUID 未解析）
- 流属性/单位：Mass / 活重 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_flock`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg liveweight/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立外售粪肥 (`sold_manure`)

仅在买方接收具有明确规格的产品时使用；否则为废物。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：记录出售质量与含水率，不得同时计为废物。 原始采集分母类型：reference_flow。

- 选定流：外售非鸡类种禽粪肥（UUID 未解析）
- 流属性/单位：Mass / 湿重及干重 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residues`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg wet/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 未出售粪污及死亡禽只 (`farm_residues`)

按材料与去向展开交换流，不与外售产出混合。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：按去向记录产生量与转移量。 原始采集分母类型：reference_flow。

- 选定流：按材料与去向区分的农场残余废物（UUID 未解析）
- 流属性/单位：Mass / 湿重及干重 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residues`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg wet/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

此坐标不预设卡片；实测交换流须独立核实身份。


### 过程：独立集蛋（`egg_collection`）

#### 输入

##### 产品流

###### 接收待收集的产出蛋 (`laid_eggs_in`)

同一群次从产蛋过程转入，不新增外购蛋负担。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：按批次与 laid_eggs 核对。 原始采集分母类型：reference_flow。

- 选定流：产出带壳蛋内部转移（UUID 未解析）
- 流属性/单位：Mass / 带壳 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_eggs`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

此坐标不预设卡片；实测交换流须独立核实身份。

##### 基本流

此坐标不预设卡片；实测交换流须独立核实身份。

#### 输出

##### 产品流

###### 收集的未分拣带壳蛋 (`collected_eggs`)

独立集蛋记录巢位取蛋、破损及交给分级过程。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：按鸟种、集蛋路线和时间称重。 原始采集分母类型：reference_flow。

- 选定流：已收集未分拣非鸡类蛋（UUID 未解析）
- 流属性/单位：Mass / 带壳 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_eggs`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 集蛋破损或损失蛋 (`collection_loss`)

仅包括实际破损、损失或不安全且未独立出售的蛋。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：记录枚数、质量和处理去向。 原始采集分母类型：reference_flow。

- 选定流：按去向区分的破损蛋废物（UUID 未解析）
- 流属性/单位：Mass / 带壳当量 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_eggs`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

此坐标不预设卡片；实测交换流须独立核实身份。


### 过程：孵化适用性筛选及去向分级（`hatching_grade`）

#### 输入

##### 产品流

###### 进入分级的未分拣蛋 (`collected_eggs_in`)

仅接收一次，并记录蛋壳状况与实际检测。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：与 collected_eggs 及库存变化核对。 原始采集分母类型：reference_flow。

- 选定流：收集蛋内部转移（UUID 未解析）
- 流属性/单位：Mass / 带壳 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

此坐标不预设卡片；实测交换流须独立核实身份。

##### 基本流

此坐标不预设卡片；实测交换流须独立核实身份。

#### 输出

##### 产品流

###### 已筛选孵化级蛋 (`selected_eggs`)

验收鲜带壳蛋进入保护或直接交付，不构成另一次销售。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：按鸟种和等级记录验收枚数及实测质量。 原始采集分母类型：reference_flow。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：已筛选非鸡类孵化蛋内部状态（UUID 未解析）
- 流属性/单位：Mass / 带壳 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立出售的非孵化降级蛋 (`downgraded_eggs`)

仅限在自身门槛被接收的安全非孵化蛋；不安全蛋仍为废物。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：记录枚数、质量、买方和安全状态。 原始采集分母类型：reference_flow。

- 选定流：实际门槛的非鸡类鲜非孵化蛋（UUID 未解析）
- 流属性/单位：Mass / 带壳 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 拒收的不安全或破损蛋 (`grading_rejects`)

与安全的外售降级蛋分开，并披露去向。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：记录枚数、质量和拒收原因。 原始采集分母类型：reference_flow。

- 选定流：拒收蛋与蛋壳废物（UUID 未解析）
- 流属性/单位：Mass / 湿重 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

此坐标不预设卡片；实测交换流须独立核实身份。


### 过程：生产者端保护与交付（`egg_presentation`）

#### 输入

##### 产品流

###### 进入保护过程的已筛选蛋 (`selected_eggs_in`)

仅一批已筛选蛋进入；如暂存，记录出入库时间。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：与 selected_eggs 和实测库存变化核对。 原始采集分母类型：reference_flow。

- 选定流：已筛选孵化蛋内部转移（UUID 未解析）
- 流属性/单位：Mass / 带壳 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保护性蛋托与包装 (`egg_packaging`)

记录新料、复用材料及次数；门后运输包装不在本过程。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：记录新投入、损失及复用周期份额。 原始采集分母类型：reference_flow。

- 选定流：保护性蛋包装材料
- 流属性/单位：Mass 或枚数 / 按材料 kg 或件
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg package/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 生产者控制暂存的能源 (`hold_energy`)

仅包括门前保护能源，不包括下游孵化器热量。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：计量交付前的载体和期间。 原始采集分母类型：reference_flow。

- 选定流：保护性暂存能源
- 流属性/单位：Energy / 按载体 MJ 或 kWh
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

此坐标不预设卡片；实测交换流须独立核实身份。

##### 基本流

此坐标不预设卡片；实测交换流须独立核实身份。

#### 输出

##### 产品流

###### 匹配农场门口的鲜带壳孵化蛋 (`farm_gate_hatching_eggs`)

仅匹配农场门口的非鸡类孵化蛋时采用固定身份；其他门槛仍未解析。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：在匹配门槛记录实测验收带壳质量与枚数。 原始采集分母类型：reference_flow。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：其他鸟类鲜带壳孵化蛋 `3ee29323-915c-4635-b8a2-8942a155e806`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：参考量恒等检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg reference
  - 基准：实测验收农场门口产出归一化至自身
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-goose-production`

##### 废物流

###### 门前破损蛋与包装损失 (`handover_loss`)

按实际蛋或包装材料及去向展开，不得隐入验收质量。

分母与范围要求：每 kg 验收鲜带壳孵化蛋

原始数量及计算要求：分开记录实际破损、拒收和包装损失。 原始采集分母类型：reference_flow。

- 选定流：门前蛋或包装废物（UUID 未解析）
- 流属性/单位：Mass / 按材料 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定宽范围质量检查
  - 范围角色：质量检查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg reference
  - 基准：初轮宽范围筛查；须以鸟种、批次的实测数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

此坐标不预设卡片；实测交换流须独立核实身份。

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 非鸡类鲜带壳孵化蛋（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `selected_eggs`, `farm_gate_hatching_eggs` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`selected_eggs`, `farm_gate_hatching_eggs`

必需产品实例限定项：鸟种/品系；种禽群次；实际生产者门槛；枚数与 kg；蛋壳等级；孵化验收/检测证据；集蛋和暂存期及条件；拒收及降级去向；包装复用

- 选定流：非鸡类鲜带壳孵化蛋（实际生产者交付关联）
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

###### 非鸡类鲜带壳孵化蛋 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`selected_eggs`, `farm_gate_hatching_eggs`

必需产品实例限定项：鸟种/品系；种禽群次；实际生产者门槛；枚数与 kg；蛋壳等级；孵化验收/检测证据；集蛋和暂存期及条件；拒收及降级去向；包装复用

- 选定流：非鸡类鲜带壳孵化蛋
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
| `output_partition` | 种禽群与分级 | 分别列明独立交付的孵化蛋、安全外售非孵化蛋、淘汰种禽和外售粪肥。内部状态及废物不是联产品；记录实际门槛、质量和期间。 | `fao-goose-production` |
| `causal_attribution` | 联合种禽负担 | 可分离的分级与包装负担归因于造成该负担的产出；不可分离的群体负担应说明一致的实测驱动量及替代方案敏感性，不预设通用质量或经济比率。 | `fao-animal-genetic-resources` |
| `period_attribution` | 种禽年份与蛋批次 | 将替换、产蛋、集蛋、资产和损失关联至实际服务/生产期间；不得假定通用群寿命或在替换/退出时重复归属。 | `fao-animal-genetic-resources` |
| `shared_asset_attribution` | 禽舍、集蛋室、分级机和蛋托 | 列出种禽、集蛋、分级及包装的使用节点和服务期；按实际服务、吞吐量或复用次数仅计一次资产负担。 | `fao-animal-genetic-resources` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock` | `breeder_laying` | 种禽接收与退出 | 群体和销售台账 | 鸟种、品系、数量、活重、日期、群龄、死亡、销售 | 台账与发票及称重记录核对；原始汇总要求：将种禽和销售关联至服务期。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 枚、kg | 每事件 | 完整生产群期 | 农场与群次 | 每参考流 | 发票、秤检与死亡记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_inputs` | `breeder_laying` | 饲料、水、能源 | 供应台账与表计 | 饲料收货/库存、水用途、载体和读数 | 发票、库存及表计核对；原始汇总要求：按群次及用途汇总净使用。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、L、MJ、kWh | 每月及每群期 | 种禽生产期 | 禽舍 | 每参考流 | 发票、表计与盘点；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_residues` | `breeder_laying` | 粪污与死亡 | 清运记录 | 湿/干 kg、含水率、去向、买方、死亡数 | 转运称重并记录销售/处理；原始汇总要求：仅一次拆分产品和废物。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、只 | 每次转运 | 完整群期 | 禽舍与去向 | 每参考流 | 转运单与买方验收；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_eggs` | `egg_collection` | 产出、收集和损失蛋 | 巢位/集蛋日志 | 群次、时间、枚数、批次 kg、破损 | 校准秤与枚数核对；原始汇总要求：平衡总产、收集和损失。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、枚 | 每次集蛋 | 集蛋期 | 农场巢位路线 | 每参考流 | 秤检及集蛋日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_grade` | `hatching_grade` | 验收、降级、拒收 | 分级/检测日志 | 蛋壳状况、检测、枚数、kg、等级、买方或废物 | 检查和校准称重；原始汇总要求：每枚蛋仅赋一个去向。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、枚 | 每批次 | 集蛋至分级 | 分级节点 | 每参考流 | 检测、买方及拒收记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_handover` | `egg_presentation` | 暂存、包装和最终蛋批 | 暂存/发运日志 | 暂存时间/条件、材料/复用、能源、枚数/kg、损失、门槛 | 表计、材料及批次称重；原始汇总要求：平衡库存、损失及唯一产出。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、枚、时间、温度、MJ | 每批次 | 分级至交付 | 生产者暂存室/门槛 | 每参考流 | 秤检、暂存日志和收据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `count_to_mass` | 蛋批次 | 如不能逐枚称重，以带壳样本 kg 除以样本枚数取得批次平均质量，再乘总枚数；保留鸟种、等级及样本量。 | 样本 kg、样本枚数、总枚数 | 实际批次的带壳 kg | `fao-goose-production` |
| `egg_balance` | 集蛋至交付 | 期初库存加产出/收集投入等于验收产出加独立降级品加废物加期末库存；内部转移仅计一次。 | 各批次及状态的质量/枚数 | 质量平衡残差 | `fao-goose-production` |
| `reference_normalization` | 所有卡片 | 将归属后的前景量除以声明门槛的实测验收 kg；独立产出交付单列。 | 已归属量、验收 kg | 每 kg 参考量 | `fao-goose-production` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `species_identity` | 所有批次 | 可追溯鸟种/品系、群次及孵化用途验收；不得将不同鸟种合为未披露的参考流。 | 群体与分级记录 |
| `mass_count_quality` | 蛋 | 保留枚数、kg、称重校准和批次换算，不使用通用单蛋质量。 | 秤检及批次表 |
| `time_quality` | 种禽与暂存 | 明确生产、集蛋、分级、暂存时间/条件，并披露缺口。 | 带日期的农场和暂存日志 |
| `output_completeness` | 多产出节点 | 记录验收、降级、种禽/粪肥外售及废物去向，包括零值。 | 发票与拒收日志 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 最终产品 | 不得以鸡蛋、非孵化蛋、无壳蛋、孵化后蛋或雏禽流作本参考；要求鸟种、鲜带壳状态、孵化用途及实际门槛。 | `fao-goose-production` |
| `validate_balance` | 所有蛋节点 | 结合库存和损失，核对产出、收集、筛选、降级、拒收和交付状态的枚数与质量；拒绝无解释的重复产出。 | `fao-goose-production` |
| `validate_route` | 替代路线 | 要求管理性母活动、真实清单/计量/验证变化及单独计量的群次；仅有路线标签不够。 | `fao-animal-genetic-resources` |
| `validate_attribution` | 产出、期间及资产 | 要求交付点、因果分配驱动量、使用节点和服务期；拒绝共用或跨期负担重复计量。 | `fao-animal-genetic-resources` |
| `validate_binding` | 交换流投影 | 发布交换流之前，把每个未解析/待确认卡片落实到唯一经核实状态、门槛、属性及去向的 UUID。 | `fao-goose-production` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 声明生产者门槛的非鸡类鲜带壳孵化蛋前景生产数据包。 |
| downstream_use | 经具体身份复核后，可供 `secondary_dataset` 或 `background_dataset` 的过程及生命周期模型投影使用。 |
| allowed_use | 有鸟种、批次、门槛、期间和孵化筛选证据的带壳 kg 结果。 |
| excluded_use | 从 kg 推断雏禽或孵化率；替用鸡蛋/食用蛋；将孵化场孵化或运输计作农场生产。 |
| required_metadata | CPC 参考、鸟种/品系、群次、枚数/kg、等级、检测、门槛、暂存、产出、分配、能源载体及包装。 |
| required_quality_disclosure | 未检测受精率、不确定枚数—质量桥接、混合路线、暂存缺口、拒收及未解析 UUID。 |
| update_trigger | 新鸟种路线、门槛/状态、验收准则、实测损失、联产品处理、身份或证据基础变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-goose-production` | `official_guidance` | [联合国粮农组织：鹅生产与孵化](https://www.fao.org/4/y4359e/y4359e0a.htm) | 鸟种特定的集蛋、暂存及孵化适用性。 |
| `fao-animal-genetic-resources` | `official_guidance` | [联合国粮农组织：动物遗传资源与禽蛋处理](https://www.fao.org/4/X6526E/X6526E32.htm) | 避免跨鸟种照搬鸡蛋假设并声明管理期间。 |
