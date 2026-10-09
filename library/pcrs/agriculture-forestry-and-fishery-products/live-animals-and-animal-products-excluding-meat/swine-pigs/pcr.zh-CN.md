---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.swine-pigs
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 猪（活体）

## 1. 范围与适用性

本 PCR 适用于繁殖或商品生产的家猪活体，交付点为生产农场门。边界包括适用时的繁殖、妊娠、分娩、哺乳，以及保育、育肥、饲喂、健康、圈舍与环境控制、粪污管理、活重称量和农场门交付。

不包括野猪、猪肉及胴体、皮和鬃毛、精液和胚胎、单独销售的兽医或饲养服务、屠宰、整理、交付后的运输及屠宰场接收后的活动。后院型、中间型和工业型路线可并存，但饲料来源、圈舍与能源、粪污路线、基础设施及数据必须可分别识别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.swine-pigs` |
| classification_refs | `CPC 3.0: 02140`，已接受的 exact 分类边记录于 `docs/adr/cpc-02140.md` |
| covered_products | 在生产农场门以活体交付、用于繁殖或商品生产的家猪 |
| excluded_products | 野猪；猪肉、胴体、皮和鬃毛；精液和胚胎；单独销售的饲养或兽医服务；屠宰场接收后的动物 |
| representative_product | 在农场门交付前立即按活重计量的商品猪 |
| production_route | 家猪受控生产，包括条件性的繁殖/妊娠/分娩，以及必需的保育育肥和粪污管理职责 |
| market_state | 生产农场门的活体动物，位于交付后运输或屠宰之前 |

受控生产母过程是直至活体交付的养猪活动。后院型、中间型和工业型是替代实现；只有在清单和分配因子保持路线可辨时才能在同一报告组织内并存，否则应选择一条路线。路线差异必须覆盖饲料来源、圈舍与环境控制、能源、粪污途径、共享资产、阶段拓扑和数据质量，并以当前前景证据及 FAO LEAP 生猪指南支持。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产农场门交付的家猪活体 |
| How much | 所有权或控制权转移前立即称量的 1 kg 活重 |
| How well | 声明动物类别、必要时的性别、已知品种/基因型、生产系统、健康/上市资格、称量基础及地理范围 |
| How long or cycle | 一个声明的群组或生产批次；种猪群和共享资产负担跨其声明服务期关联 |
| reference_flow_link | `live_pig_output` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 生产农场门家猪活体 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 动物类别；必要时性别；已知品种/基因型；后院型、中间型或工业型路线；活重称量基础；地理范围；群组和报告期；农场门交付；预期产出集合；分配方法 |
| Binding | 未解析的参考产品绑定留空；独立确认的质量支持 UUID 不代表产品身份 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measure_live_weight` | 参考动物和所有活体转移 | Mass | kg live weight | 使用声明交付前立即取得的校准秤记录。头数是平行活动数据，不得替代质量。 |
| `convert_group_weight` | 群体称量 | Mass; count | kg; head | 仅为逐头校验而分摊净群体质量；保留群组总质量和皮重记录。 |
| `measure_feed` | 饲料投入 | Mass; dry matter where reported | kg as-fed; kg dry matter | 按供应状态记录每种饲料/配方及水分或干物质基准和来源；无组成记录不得合并不同饲料。 |
| `measure_water_energy` | 水和能源投入 | Volume or mass; carrier-specific energy | m3 or kg; kWh or MJ | 保留实测水量和各能源载体，记录换算和仪表分配。 |
| `measure_manure` | 粪污路线 | Mass or volume; dry matter; N and volatile solids when used | kg or m3; kg DM; kg N; kg VS | 记录粪污状态、储存/处理路线、去向，以及排放和外运养分所用分析或计算基础。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 种用/更新猪和转入仔猪以实测活体状态进入；饲料、水、能源、兽医产品及其他受控投入在农场边界进入 |
| starting_condition_role | 从转入动物和投入直至活猪农场门交付的受控生物生产 |
| product_classification_scope | 屠宰前家猪活体；肉、胴体、服务、生殖材料和农场后运输系统不在范围内 |
| recursive_input_rule | 同类采购或转入活猪按实际类别、活重、来源和交付点作为上游 Product 投入记录；没有独立上游数据集时，不得用接收过程的参考产出来表示。 |
| upstream_dataset_requirement | 匹配动物类别、活重基础、生产系统、来源、地理、期间和交付点；饲料数据集匹配配方或原料身份及交付状态。 |
| disclosure | 声明路线、群组阶段、报告期、动物转移、死亡、预期产出、粪污去向、共享基础设施、归属选择及未解析身份。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_farm_gate` | 所有数据集 | 包括直至生产农场门活重称量与交付的受控生产；排除交付后运输、屠宰、整理和加工。 | `fao-leap-pig-2018` |
| `boundary_managed_phases` | 生产群组 | 将适用的繁殖/妊娠/分娩、哺乳、保育、育肥、健康、圈舍和粪污职责关联至声明群组与报告期。 | `fao-leap-pig-2018`; `ipcc-2019-livestock-manure` |
| `boundary_route_variant` | 后院型、中间型或工业型路线 | 识别饲料来源、圈舍与环境控制、能源、粪污途径、基础设施和数据采集方面的路线特定拓扑与清单差异；不得无透明权重地平均互斥路线。 | `fao-leap-pig-2018` |
| `boundary_periods` | 种猪群、猪群组和共享资产 | 对繁殖周期、哺乳、保育、育肥、粪污服务期和基础设施服务期编制索引；每项投入、产出、损失和事件只归属一次。 | `fao-leap-pig-2018` |
| `boundary_shared_assets` | 圈舍、通风、饲喂、供水、储存和粪污资产 | 识别全部消费节点和服务期，按实测占用、活重日、吞吐、计量使用量或其他有文件支持的因果因子分配，且不得重复。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeding_farrowing` | 繁殖、妊娠、分娩和哺乳 | conditional | 报告系统生产仔猪或维持可归属于参考群组的种用动物时纳入。 | 受控生物繁殖和仔猪交付 | 转入保育阶段的仔猪活重及声明繁殖周期记录 |
| `nursery_grow_finish` | 保育与育肥生产 | required | 商品活猪始终纳入；仅仔猪数据集可在其声明的生产农场门终止。 | 包含替代技术路线差异记录的受控生长和农场门交付 | 农场门 1 kg 活猪 |
| `manure_management` | 粪污收集、储存、处理、利用和外运 | required | 纳入所代表动物阶段产生的全部粪污；路线特定操作可以为零但必须声明。 | 粪污责任和直接排放 | 按状态及报告期记录的 kg 或 m3 粪污 |

### 过程：繁殖、妊娠、分娩和哺乳（`breeding_farrowing`）

#### 输入

##### 产品流

###### 种用和更新猪（`breeding_stock_input`）
按类别、来源、活重和交付点记录转入动物；UUID 未解析。
分母与范围要求：每 kg 繁殖阶段转出仔猪活重

原始数量及计算要求：记录转入净活重和头数，仅将可归属的繁殖服务分配给所代表仔猪。 原始采集分母类型：process_output。

- 选定流：种用或更新猪活体（UUID 未解析）
- 流属性/单位：Mass / kg live weight
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeding_records`
- 数量范围：暂定更新猪分配校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 转入种猪活重/kg 仔猪活体产出
  - 基准：宽泛筛选；由猪群清册和繁殖期归属记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 繁殖及哺乳动物饲料（`breeding_feed_input`）
按饲料产品或配方分别保留供应态和组成记录；UUID 未解析。
分母与范围要求：每 kg 仔猪活体产出

原始数量及计算要求：按配方、动物类别和期间记录交付与消耗，并核对期初库存、采购、期末库存和损失。 原始采集分母类型：process_output。

- 选定流：路线特定猪饲料产品（UUID 未解析）
- 流属性/单位：Mass / kg as-fed
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed_records`
- 数量范围：暂定繁殖饲料校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：20
  - 单位：kg as-fed/kg 仔猪活体产出
  - 基准：跨生产系统的宽泛可替换校验，不是饲喂建议
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 繁殖和哺乳用水（`breeding_water_input`）
纳入作为产品投入供应的饮水、降温和清洁用水，并保留用途类别。
分母与范围要求：每 kg 仔猪活体产出

原始数量及计算要求：按用途类别和繁殖期间记录计量或估算供水量。 原始采集分母类型：process_output。

- 选定流：Process water supply
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_energy_records`
- 数量范围：暂定繁殖用水校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.002
  - 上限：0.2
  - 单位：m3/kg 仔猪活体产出
  - 基准：含饮水和受控服务水的宽泛可替换校验
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 繁殖和哺乳能源（`breeding_energy_input`）
分别记录圈舍、通风、供暖、饲喂和其他操作的电力与燃料。
分母与范围要求：每 kg 仔猪活体产出

原始数量及计算要求：记录各载体计量或发票用量，共用仪表按有文件支持的因果因子分配。 原始采集分母类型：process_output。

- 选定流：繁殖和哺乳能源载体供应
- 流属性/单位：Energy / kWh or MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_energy_records`
- 数量范围：暂定繁殖能源校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh-equivalent/kg 仔猪活体产出
  - 基准：跨路线的宽泛可替换校验
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入保育或出售的仔猪活体（`live_piglet_output`）
仅在独立转移至其他过程或客户时作为预期产出；UUID 未解析。
分母与范围要求：每繁殖群组及每 kg 仔猪活体产出

原始数量及计算要求：记录转移时验收活重、头数、日龄/类别和去向。 原始采集分母类型：process_output。

- 选定流：生产阶段交付点仔猪活体（UUID 未解析）
- 流属性/单位：Mass / kg live weight
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_animal_transfer`
- 数量范围：活重质量平衡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 验收仔猪产出/kg 全部实测活体动物产出
  - 基准：由实测活体质量平衡约束的产出份额
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 淘汰或独立转移的种用动物（`breeding_animal_output`）
仅在具有单独实测交付时将种用动物视为预期共产品，否则在期间归属中保留其终止事件。UUID 未解析。
分母与范围要求：每繁殖群组及每 kg 全部预期活体动物产出

原始数量及计算要求：记录活重、头数、类别、转移日期和去向，不与仔猪产出合并。 原始采集分母类型：process_output。

- 选定流：实际活体交付点的淘汰或转移种猪（UUID 未解析）
- 流属性/单位：Mass / kg live weight
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_animal_transfer`
- 数量范围：预期活体产出质量平衡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 种用动物产出/kg 全部预期活体动物产出
  - 基准：由实测活体动物产出质量平衡约束的份额
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 繁殖阶段死亡动物（`breeding_mortality_waste`）
除非存在合法且独立预期的产品交付，否则按废物/损失记录；UUID 未解析。
分母与范围要求：每 kg 仔猪活体产出

原始数量及计算要求：记录死亡头数、实测或估算质量、日期、可得时的死因类别、储存及去向。 原始采集分母类型：process_output。

- 选定流：实际去向的猪死亡废物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_health_mortality_records`
- 数量范围：暂定死亡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 死亡动物/kg 仔猪活体产出
  - 基准：宽泛可替换校验，不是可接受绩效阈值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：保育与育肥生产（`nursery_grow_finish`）

#### 输入

##### 产品流

###### 转入仔猪活体（`piglet_input`）
记录实际活体类别和交付点；同类递归投入需要独立上游数据集。UUID 未解析。
分母与范围要求：每 kg 商品猪活体产出

原始数量及计算要求：按群组记录净活重、头数、来源和转入日期。 原始采集分母类型：process_output。

- 选定流：转入保育或育肥的仔猪活体（UUID 未解析）
- 流属性/单位：Mass / kg live weight
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_animal_transfer`
- 数量范围：暂定转入仔猪校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：1.2
  - 单位：kg 转入仔猪活重/kg 商品猪活体产出
  - 基准：宽泛可替换群组质量平衡校验
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保育和育肥饲料（`grow_finish_feed_input`）
分别保留每种饲料或配方以及干物质、养分和供应商数据；UUID 未解析。
分母与范围要求：每 kg 商品猪活体产出

原始数量及计算要求：按配方和群组由交付、库存、退回及损失记录计算饲料消耗。 原始采集分母类型：process_output。

- 选定流：路线特定猪饲料产品（UUID 未解析）
- 流属性/单位：Mass / kg as-fed
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed_records`
- 数量范围：暂定育肥饲料校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：8
  - 单位：kg as-fed/kg 商品猪活体产出
  - 基准：宽泛可替换校验，不是通用料肉比
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 兽医和健康管理产品（`health_product_input`）
分别记录实际疫苗、药物、消毒剂及其他产品配方；UUID 未解析。
分母与范围要求：每 kg 商品猪活体产出

原始数量及计算要求：记录产品身份、适用时的活性成分、数量、批次、用途和施用日期。 原始采集分母类型：process_output。

- 选定流：实际兽医或健康管理产品（UUID 未解析）
- 流属性/单位：Mass, volume, or dose / recorded unit
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_health_mortality_records`
- 数量范围：暂定健康产品校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg 或 L 产品当量/kg 商品猪活体产出
  - 基准：宽泛身份和数量校验，保留实际配方和单位
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保育和育肥用水（`grow_finish_water_input`）
纳入饮水、降温和清洁用水并保留用途类别。
分母与范围要求：每 kg 商品猪活体产出

原始数量及计算要求：按群组、建筑和用途记录计量或估算供水量。 原始采集分母类型：process_output。

- 选定流：Process water supply
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_energy_records`
- 数量范围：暂定育肥用水校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.002
  - 上限：0.1
  - 单位：m3/kg 商品猪活体产出
  - 基准：含饮水和受控服务水的宽泛可替换校验
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保育和育肥能源（`grow_finish_energy_input`）
分别记录圈舍、通风、供暖、饲喂和处理的电力与燃料载体。
分母与范围要求：每 kg 商品猪活体产出

原始数量及计算要求：记录各载体消耗，共用仪表按占用、活重日或计量使用量分配。 原始采集分母类型：process_output。

- 选定流：保育和育肥能源载体供应
- 流属性/单位：Energy / kWh or MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_energy_records`
- 数量范围：暂定育肥能源校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh-equivalent/kg 商品猪活体产出
  - 基准：跨路线的宽泛可替换校验
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 声明前景内的入场公路运输（`inbound_transport_service`）
仅纳入由前景控制且位于边界内的供应商到农场或场间入场移动；排除交付后运输。
分母与范围要求：每 kg 商品猪活体产出

原始数量及计算要求：对每个纳入的入场移动计算有效载荷质量乘以载货距离；全部入场运输位于上游时报告零。 原始采集分母类型：transport_service。

- 选定流：动物、饲料或受控投入的公路货运服务
- 流属性/单位：Goods transport / t*km
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_transport_records`
- 数量范围：暂定入场运输校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：t*km/kg 商品猪活体产出
  - 基准：仅适用于前景控制入场移动的宽泛可替换校验
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门活猪（`live_pig_output`）
这是参考产出；尚未核实兼容的平台 Product 流。
参考产出的原始记录：记录交付前校准净活重，并将全部交换归一化至 1 kg 验收活体产出。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 生产农场门家猪活体
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_animal_transfer`
- 数量范围：参考归一化约束
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg live weight
  - 基准：归一化参考产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 保育和育肥死亡动物（`grow_finish_mortality_waste`）
除非有合法且独立预期的产品交付，否则按废物/损失记录；UUID 未解析。
分母与范围要求：每 kg 商品猪活体产出

原始数量及计算要求：记录死亡头数、质量、日期、可得时死因类别、储存和去向。 原始采集分母类型：process_output。

- 选定流：实际去向的猪死亡废物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_health_mortality_records`
- 数量范围：暂定育肥死亡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 死亡动物/kg 商品猪活体产出
  - 基准：宽泛可替换校验，不是可接受绩效阈值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 进入空气的肠道甲烷（`enteric_methane_output`）
仅由声明动物类别、采食量/消化率、种群或活重日及认可方法计算；排入未指定空气区室时采用已核实的生物源甲烷身份。
分母与范围要求：每 kg 商品猪活体产出

原始数量及计算要求：按声明的 IPCC 兼容类别和保留的活动数据计算；不得把 IPCC 因子当作直接实测农场流。 原始采集分母类型：process_output。

- 选定流：methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 绑定：固定（`fixed`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animal_emission_records`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定肠道甲烷 QA 筛查，不是允许限值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg CH4/kg 商品猪活体产出
  - 基准：仅为宽泛暂定筛查，不是允许上限、默认因子或截断结果的依据。使用类别特定活动数据和方法参数；超出筛查范围时应调查，不得拒绝或截断有证据支持的结果。非负性不能确定上限。
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：粪污收集、储存、处理、利用和外运（`manure_management`）

#### 输入

##### 产品流

###### 粪污管理能源（`manure_energy_input`）
按载体记录收集、泵送、曝气、分离、处理及场内操作能源。
分母与范围要求：每 kg 活猪产出

原始数量及计算要求：记录各载体消耗，共用仪表按运行时间、吞吐或分表数据分配。 原始采集分母类型：process_output。

- 选定流：粪污管理能源载体供应
- 流属性/单位：Energy / kWh or MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 数量范围：暂定粪污能源校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh-equivalent/kg 活猪产出
  - 基准：跨储存与处理路线的宽泛可替换校验
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污管理用水（`manure_water_input`）
纳入加入粪污系统的工艺或清洁水，不重复计算动物饮水。
分母与范围要求：每 kg 活猪产出

原始数量及计算要求：按操作和期间记录计量或估算加水量。 原始采集分母类型：process_output。

- 选定流：粪污管理 Process water supply
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 数量范围：暂定粪污用水校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：m3/kg 活猪产出
  - 基准：加入粪污处理的宽泛可替换校验
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 从动物圈舍转入的粪污（`manure_waste_input`）
仅转移一次，并保留状态、干物质、氮、挥发性固体和储存来源；UUID 未解析。
分母与范围要求：每 kg 活猪产出

原始数量及计算要求：核对产生量、收集量、垫料、库存变化、处理、外运、田间利用和损失。 原始采集分母类型：process_output。

- 选定流：圈舍至管理环节的猪粪污（UUID 未解析）
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 数量范围：暂定收集粪污校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 鲜粪当量/kg 活猪产出
  - 基准：宽泛可替换校验，保留实际状态和加水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 外运粪污或粪污产品（`exported_manure_output`）
只有质量、数量、所有权转移和去向均独立记录时才作为预期共产品；UUID 未解析。
分母与范围要求：每 kg 活猪产出

原始数量及计算要求：记录转移湿重、干物质、氮、处理状态、接收方和交付日期。 原始采集分母类型：process_output。

- 选定流：实际状态的外运猪粪污或粪污产品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 数量范围：粪污产出质量平衡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 外运粪污/kg 进入管理的粪污
  - 基准：有文件记录转化后粪污管理投入的外运质量份额
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 不可用粪污和处理残渣（`manure_residue_waste`）
没有独立预期交付的材料按实际去向作为废物记录；UUID 未解析。
分母与范围要求：每 kg 活猪产出

原始数量及计算要求：记录质量、状态、干物质、可得时的养分和去向；不得把损失或处置标为共产品。 原始采集分母类型：process_output。

- 选定流：实际去向的粪污残渣或处理废物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 数量范围：残渣质量平衡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 残渣/kg 进入管理的粪污
  - 基准：由粪污质量平衡和已记录转化约束的废物份额
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

###### 粪污管理甲烷进入空气（`manure_methane_output`）
按粪污系统、动物类别、挥发性固体、气候和保留的方法参数计算；排入未指定空气区室时采用已核实的生物源甲烷身份。
分母与范围要求：每 kg 活猪产出

原始数量及计算要求：将 IPCC 兼容方法应用于采集的动物与粪污系统活动数据，保留参数和系统份额。 原始采集分母类型：process_output。

- 选定流：methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 绑定：固定（`fixed`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定甲烷计算校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg CH4/kg 活猪产出
  - 基准：宽泛非负校验，不是 IPCC 默认因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污管理氧化亚氮进入空气（`manure_nitrous_oxide_output`）
由氮排泄和声明粪污途径一致计算直接及纳入的间接 N2O；排入未指定空气区室时采用已核实的氧化亚氮身份。
分母与范围要求：每 kg 活猪产出

原始数量及计算要求：应用声明的 IPCC 兼容方法，并防止在粪污管理和土地施用间重复归属。 原始采集分母类型：process_output。

- 选定流：nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：固定（`fixed`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 来源：`ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- 数量范围：暂定氧化亚氮计算校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg N2O/kg 活猪产出
  - 基准：宽泛非负校验，不是 IPCC 默认因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污管理氨进入空气（`manure_ammonia_output`）
仅在氮流记录和声明挥发方法支持时计算；排入未指定空气区室时采用已核实的氨身份。
分母与范围要求：每 kg 活猪产出

原始数量及计算要求：由采集氮流、粪污途径和声明方法计算，并核对外运粪污及残渣中的剩余氮。 原始采集分母类型：process_output。

- 选定流：ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 绑定：固定（`fixed`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg NH3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 来源：`fao-leap-nutrient-flows-2018`
- 数量范围：暂定氨计算校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg NH3/kg 活猪产出
  - 基准：宽泛非负校验，由路线特定氮流证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_output_set` | 全部预期产出 | 枚举商品活猪、独立转移仔猪、种用动物、淘汰动物和外运粪污。除非有改变角色的预期交付证据，死亡动物和不可用粪污仍为损失/废物。 | `fao-leap-pig-2018` |
| `allocation_physical_first` | 多产出过程 | 先细分实测阶段特定投入和排放。其余不可分负担使用活增重、活重日、养分含量或实测服务等因果物理因子；经济分配必须说明理由和敏感性。 | `fao-leap-pig-2018` |
| `allocation_period` | 种猪群和群组阶段 | 将繁殖、哺乳、保育、育肥、更新、淘汰及终止事件关联至声明期间和产出；记录结转并防止群组间重复归属。 | `fao-leap-pig-2018` |
| `allocation_shared_infrastructure` | 共享建筑和设备 | 枚举消费节点和服务期；每项资产仅按实测占用、活重日、吞吐、运行时间或计量使用量分配一次，并保留因子证据。 |  |
| `allocation_manure` | 外运粪污 | 记录选定归属或替代处理、去向、质量、干物质和养分。除非研究方法明确要求并披露两者，不得对同一产出同时施加分配负担和避免产品抵扣。 | `fao-leap-nutrient-flows-2018` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_breeding_records` | `breeding_farrowing` | breeding stock, reproduction, piglet output | 猪群清册和秤记录 | 类别；头数；活重；进出；配种；分娩；断奶；淘汰；期间 | 清册与校准秤及事件日志核对；原始汇总要求：每个事件和库存变化只归属一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | head; kg live weight; date | 每次事件；每月核对 | 完整繁殖周期 | 全部供给繁殖单元 | 每参考流 | 秤校准；库存核对；异常日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed_records` | `breeding_farrowing`; `nursery_grow_finish` | feed inputs | 发票、配方和库存记录 | 产品/配方；供应商；供应态质量；水分/DM；组成；期初/期末库存；损失；群组 | 按配方和阶段作质量平衡；原始汇总要求：交付+期初-期末-损失。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg as-fed; kg DM | 每批交付；每月盘点 | 完整群组/报告期 | 全部饲料库和动物单元 | 每参考流 | 发票；配方表；库存核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_water_energy_records` | `breeding_farrowing`; `nursery_grow_finish` | water and energy inputs | 仪表、发票和设备日志 | 仪表；载体；读数；用途；建筑；日期；分配因子 | 优先分表，否则因果分配；原始汇总要求：差值、换算、一次分配。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | m3; kWh; MJ | 每月或更细 | 完整期间 | 全部动物建筑和公用系统 | 每参考流 | 校准；发票核对；分配表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_health_mortality_records` | `breeding_farrowing`; `nursery_grow_finish` | health products and mortalities | 治疗和死亡记录 | 产品；活性成分；数量/剂量；动物组；日期；死亡头数/质量；死因；去向 | 事件记录与库存和头数核对；原始汇总要求：按产品和群组汇总；死亡仅核算一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 产品记录单位；head; kg | 每次事件 | 完整群组/期间 | 全部动物单元 | 每参考流 | 药品记录；库存；处置凭证；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_live_animal_transfer` | `breeding_farrowing`; `nursery_grow_finish` | admitted and transferred live animals | 校准秤和交付记录 | 类别；性别；头数；毛重/皮重/净活重；时间；来源/去向；交付点 | 交付前立即个体或群体校准称量；原始汇总要求：汇总验收净质量，头数另保留。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg live weight; head | 每次转移 | 完整群组 | 全部农场门和内部交接 | 每参考流 | 校准证书；签字交接；拒收日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_transport_records` | `nursery_grow_finish` | foreground-controlled inbound transport | 调度和路线记录 | 有效载荷；起讫点；载货距离；方式；控制权 | 仅对边界内段计算载荷距离；原始汇总要求：汇总载荷×距离，排除交付后段。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | t; km; t*km | 每个行程 | 完整群组/期间 | 全部受控入场段 | 每参考流 | 调度单；路线；边界理由；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_animal_emission_records` | `nursery_grow_finish` | enteric emissions | 动物活动和饲料记录 | 类别；头日或活重日；采食；消化率；方法参数 | IPCC 兼容方法应用于活动数据；原始汇总要求：按类别计算后归一化。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | head-day; kg DM; kg CH4 | 阶段和报告期 | 完整群组 | 全部代表动物 | 每参考流 | 方法版本；参数来源；类别核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure_records` | `manure_management` | manure, treatment, export and emissions | 粪污系统日志和分析 | 类别；排泄基础；量；DM；N；VS；系统份额；储存期；处理；外运；去向；水/能源 | 质量与养分平衡及声明排放方法；原始汇总要求：期初+流入-期末-产出-损失，仅分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; m3; kg DM; kg N; kg VS; kWh | 每月及每次转移 | 完整报告期及库存结转 | 全部粪污系统 | 每参考流 | 分析；储存测量；转移凭证；方法表；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部交换 | 归一化量=可归属交换/验收农场门活重 | 可归属交换；校准验收活重 | 每 kg 活猪的交换 | `mass-balance-identity` |
| `calc_feed_consumed` | 饲料 | 消耗=期初库存+交付-期末库存-退回/损失 | 配方特定库存与交付 | 各阶段 kg as-fed 和 kg DM |  |
| `calc_transport_service` | 入场运输 | 仅对前景控制入场段汇总有效载荷吨×载货 km | 有效载荷；距离；边界决定 | t*km |  |
| `calc_live_weight_days` | 阶段和共享负担 | 按类别和阶段汇总活重×日，阶段日期不得重叠 | 带日期清册和体重 | kg live-weight-days |  |
| `calc_manure_emissions` | 甲烷和氧化亚氮 | 将 IPCC 兼容类别及粪污系统方程用于采集活动并保留全部参数 | 类别；种群/时间；采食/排泄；VS；N；系统份额；气候；因子 | kg CH4 和 kg N2O | `ipcc-2019-livestock-manure` |
| `calc_nitrogen_balance` | 粪污路线 | N投入/排泄=N留存/外运+残渣N+量化N损失±库存变化 | 饲料/动物和粪污N；外运分析；参数 | 各路线 kg N | `fao-leap-nutrient-flows-2018` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_gate` | 参考产出 | 保留动物类别、路线、活重基础、生产农场门、时间、起讫点和签字交接；不得以饲料级、计数型、工厂门、肉或胴体替代。 | 秤和交接记录；未解析 UUID 审查说明 |
| `dq_route_phase` | 路线和期间 | 识别路线、全部阶段和场址及日期；说明聚合并保留权重。 | 路线声明；猪群和设施记录 |
| `dq_completeness` | 清单 | 在同一期间核对动物、饲料、水/能源、死亡、粪污、预期产出及库存变化。 | 签字核对和异常日志 |
| `dq_method_parameters` | 排放和分配 | 保留方法版本、因子和参数、来源、单位、换算、分配因子及敏感性方案。 | 计算工作簿和来源 |
| `dq_shared_assets` | 基础设施 | 列出共享资产、消费节点、服务期和因果因子，并证明负担只分配一次。 | 资产清册；仪表/运行时间/占用证据 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | severity |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 若产出不是生产农场门按质量称量的家猪活体，或使用任一已拒绝候选 UUID，则失败。 | error |
| `validate_reference_uuid` | 参考绑定 | 在兼容产品身份经明细核实前，参考产品流 UUID 保持为空。独立确认的质量属性及单位组 UUID 仅为支持引用；未解析产品身份阻止 active/发布就绪。 | error |
| `validate_route_delta` | 路线 | 若合并路线时未提供路线特定拓扑、清单类别、计算/验证差异、当前证据和透明权重，则失败。 | error |
| `validate_phase_period` | 阶段与期间 | 相关阶段、粪污、更新、淘汰或资产服务期未编制索引、无说明重叠或重复归属时失败。 | error |
| `validate_output_roles` | 产出、残余和废物 | 除非记录每个活体产出及外运粪污交付，并区分死亡动物/不可用粪污与预期产品，否则失败。 | error |
| `validate_shared_assets` | 共享基础设施 | 除非每项资产至少有两个消费节点或期间、服务边界、分配因子及防重复检查，否则失败。 | error |
| `validate_flow_identity` | 待确认 Product 投入 | 根据记录确定实际能源载体、供水及受前景控制的入场运输；最终交换需要相容且已核实的具体 UUID。 | error |
| `validate_emission_identity` | 基本流产出 | 除非物质、接收区室、流属性、单位组和支持引用经明细核实，否则固定绑定失败；宽泛污染物名称保持未解析。 | error |
| `validate_ranges` | 全部重要流 | 要求证据支持范围或可替换 `reasoned_estimate`，包含角色、上下限、单位、基准和证据类型。 | error |
| `validate_mass_n_balance` | 动物和粪污 | 调查无法解释的动物质量、粪污质量或氮不平衡；记录库存变化和转化，不得强制闭合。 | error |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 归一化至生产农场门活重的前景生猪生产数据包 |
| downstream_use | `secondary_dataset`; 经审查发布后可作 `background_dataset` |
| allowed_use | 用于声明活猪类别、路线、地理、群组、期间和农场门边界的 LCA process 和 lifecyclemodel 构建 |
| excluded_use | 猪肉/胴体、屠宰场或农场后运输建模；跨未声明路线泛化；替代计数型、饲料级或工厂门流 |
| required_metadata | 动物类别；必要时性别；品种/基因型；路线；地理；群组与日期；阶段/场址覆盖；活重方法；产出集合；粪污路线；分配；待确认流身份 选择；UUID 状态 |
| required_quality_disclosure | 覆盖与核对；前景值与模型值；推理估算替换；方法/因子版本；共享资产处理；未解析身份和排除操作 |
| update_trigger | 参考身份/交付点、路线、饲料或粪污系统、产出集合、分配、排放方法、流身份核验证据、核实 UUID 或重要质量证据变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-pig-2018` | `official_guidance` | FAO LEAP, *Environmental performance of pig supply chains: Guidelines for assessment* (2018), https://openknowledge.fao.org/handle/20.500.14283/i8686en | 生猪系统边界、路线、过程拆分、前景记录、产出与分配规则 |
| `fao-leap-nutrient-flows-2018` | `official_guidance` | FAO LEAP, *Nutrient flows and associated environmental impacts in livestock supply chains* (2018), https://openknowledge.fao.org/handle/20.500.14283/ca1328en | 粪污养分平衡、外运粪污、氨和氮损失核算 |
| `ipcc-2019-livestock-manure` | `method_factor` | IPCC, *2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management*, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 动物类别、饲料/活动输入及肠道和粪污 CH4/N2O 方法要求；不作为直接农场清单量 |
| `mass-balance-identity` | `standard` | 应用于实测动物与粪污转移的质量守恒恒等式 | 参考归一化和产出/残渣 QA 约束 |
