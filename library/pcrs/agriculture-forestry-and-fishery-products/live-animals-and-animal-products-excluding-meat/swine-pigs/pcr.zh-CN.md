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
| production_route | 直至实际声明动物类别农场门的家猪受控生产；仅纳入实际运行的繁殖分娩和保育育肥阶段，承担所代表各动物阶段的粪污责任，并统一关联一次最终交付 |
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
| Required qualifiers | 动物类别；必要时性别；已知品种/基因型；后院型、中间型或工业型路线；活重称量基础；地理范围；群组和报告期；农场门交付；预期产出集合；分配方法；实际最终来源行；运行阶段拓扑；合格批次标识 |
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
| `boundary_managed_phases` | 生产群组 | 仅在所代表边界内实际运行时纳入繁殖/妊娠/分娩、哺乳、保育和育肥；保留这些阶段的健康、圈舍及粪污责任。仅仔猪路线止于实际仔猪生产交付门，不附加未运行的保育育肥负担。外购仔猪进入实际接收阶段时保留上游负担。 | `fao-leap-pig-2018`; `ipcc-2019-livestock-manure` |
| `boundary_route_variant` | 后院型、中间型或工业型路线 | 识别饲料来源、圈舍与环境控制、能源、粪污途径、基础设施和数据采集方面的路线特定拓扑与清单差异；不得无透明权重地平均互斥路线。 | `fao-leap-pig-2018` |
| `boundary_periods` | 种猪群、猪群组和共享资产 | 对繁殖周期、哺乳、保育、育肥、粪污服务期和基础设施服务期编制索引；每项投入、产出、损失和事件只归属一次。 | `fao-leap-pig-2018` |
| `boundary_shared_assets` | 圈舍、通风、饲喂、供水、储存和粪污资产 | 识别全部消费节点和服务期，按实测占用、活重日、吞吐、计量使用量或其他有文件支持的因果因子分配，且不得重复。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeding_farrowing` | 繁殖、妊娠、分娩和哺乳 | conditional | 报告系统生产仔猪或维持可归属于参考群组的种用动物时纳入。 | 受控生物繁殖和仔猪交付 | 转入保育阶段的仔猪活重及声明繁殖周期记录 |
| `nursery_grow_finish` | 保育与育肥生产 | conditional | 仅纳入为声明交付类别实际运行的保育/生长/育肥阶段；没有这类运行的仅仔猪路线省略本节点。 | 受控生长及其实际最终活体来源；不虚构后续育肥 | 实际阶段移交的合格活重 |
| `manure_management` | 粪污收集、储存、处理、利用和外运 | required | 纳入所代表动物阶段产生的全部粪污；路线特定操作可以为零但必须声明。 | 粪污责任和直接排放 | 按状态及报告期记录的 kg 或 m3 粪污 |
| `reference_handover` | 实际动物类别的农场门交付 | required | 每个合格最终批次，仅关联其实际运行的最终来源。 | 将同一物理产出核对为一次参考交付；不增加饲养、运输或销售 | 声明农场门 1 kg 合格家猪活体 |

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

原始数量及计算要求：按 calc_feed_supply_and_intake 分别建立饲料投入、采食及损失台账。承担饲料生产负担的数量包含边界内拒食、变质及未食用饲料，不得缩减为动物采食量。保留来源、物种/群体、阶段及原始质量/水分基准。最终贡献依 inventory_reference_normalization 和 stage_throughput_linkage 恰归一化一次。 原始采集分母类型：process_output.

- 选定流：路线特定猪饲料产品（UUID 未解析）
- 流属性/单位：Mass / kg as-fed
- 数量规则：采用保留边界内损失及其生产负担的已核对饲料投入记录，依 inventory_reference_normalization 和 stage_throughput_linkage 计算可归属最终数据包交换量。
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

- 选定流：生产用水供应
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

###### 设备供电点的电力（`breeding_energy_input_electricity`）

**breeding_energy_input 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

分别记录圈舍、通风、供暖、饲喂和其他操作的电力与燃料。
分母与范围要求：每 kg 仔猪活体产出
原始数量及计算要求：记录各载体计量或发票用量，共用仪表按有文件支持的因果因子分配。 原始采集分母类型：process_output。

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_water_energy_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy_records`
- 来源：`fao-agricultural-energy`

###### 供应设备的柴油（`breeding_energy_input_diesel`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：供应设备的柴油
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_water_energy_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy_records`
- 来源：`fao-agricultural-energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入保育或出售的仔猪活体（`live_piglet_output`）
记录实际合格仔猪转移及去向；UUID 未解析。对于仅仔猪参考批次，本行是关联 reference_handover 的最终来源，不是第二次对外销售。对于一体化生长路线，本行是移交接收阶段的内部转移；其他独立出售批次按 allocation_output_set 保留为不同共产品。
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
仅在具有单独实测活体交付时记录种用/淘汰动物，否则在期间归属中保留其终止事件。所选种用/淘汰动物参考批次以本行为关联 reference_handover 的最终来源，不是第二次对外销售。其他独立移交批次按 allocation_output_set 作为共产品。UUID 未解析。
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

###### 繁殖阶段进入空气的肠道甲烷（`breeding_enteric_methane_output`）
仅由声明动物类别、采食量/消化率、种群或活重日及认可方法计算；排入未指定空气区室时采用已核实的生物源甲烷身份。
分母与范围要求：每 kg 声明合格活体参考产出

原始数量及计算要求：按声明的 IPCC 兼容类别和保留的活动数据计算；不得把 IPCC 因子当作直接实测农场流。 原始采集分母类型：process_output。

- 选定流：甲烷 (生物源)（排放至空气） `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animal_emission_records`
- 来源：`ipcc-2019-livestock-manure`

繁殖/哺乳类别、动物期间、实际生物摄入量及适用方法参数与生长动物分别记录。即使为仅仔猪路线，也纳入所代表繁殖阶段的此项途径，不复制育肥排放因子。只归属于所选实际产出类别一次，并保留原始期间总量。未断言相容的物种/路线数值范围；在 manifest 保留范围证据缺口。

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

原始数量及计算要求：按 calc_feed_supply_and_intake 分别建立饲料投入、采食及损失台账。承担饲料生产负担的数量包含边界内拒食、变质及未食用饲料，不得缩减为动物采食量。保留来源、物种/群体、阶段及原始质量/水分基准。最终贡献依 inventory_reference_normalization 和 stage_throughput_linkage 恰归一化一次。 原始采集分母类型：process_output.

- 选定流：路线特定猪饲料产品（UUID 未解析）
- 流属性/单位：Mass / kg as-fed
- 数量规则：采用保留边界内损失及其生产负担的已核对饲料投入记录，依 inventory_reference_normalization 和 stage_throughput_linkage 计算可归属最终数据包交换量。
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

- 选定流：生产用水供应
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

###### 设备供电点的电力（`grow_finish_energy_input_electricity`）

**grow_finish_energy_input 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

分别记录圈舍、通风、供暖、饲喂和处理的电力与燃料载体。
分母与范围要求：每 kg 商品猪活体产出
原始数量及计算要求：记录各载体消耗，共用仪表按占用、活重日或计量使用量分配。 原始采集分母类型：process_output。

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_water_energy_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy_records`
- 来源：`fao-agricultural-energy`

###### 供应设备的柴油（`grow_finish_energy_input_diesel`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：供应设备的柴油
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_water_energy_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy_records`
- 来源：`fao-agricultural-energy`

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

###### 实际保育育肥阶段移交活猪（`live_grow_finish_output`）

仅适用于实际运行的 nursery_grow_finish 节点。记录合格活重及实际动物类别、批次、期间和交付门。对同一最终批次，本行是关联 reference_handover 的最终来源，不是额外的对外参考产出。UUID 未解析。

- 选定流：实际保育或育肥阶段移交活猪（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 和 stage_throughput_linkage，使用实测同批合格活重计算可归属最终数据包交换量，并与 live_handover_input 核对一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_animal_transfer`
- 数量范围：同批最终移交核对，不是生长产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：与归一化 1 kg 最终参考相同的合格最终批次；不是上游仔猪质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集计算（`calculated_from_collection`)

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

- 选定流：甲烷 (生物源)（排放至空气） `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
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

###### 设备供电点的电力（`manure_energy_input_electricity`）

**manure_energy_input 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

按载体记录收集、泵送、曝气、分离、处理及场内操作能源。
分母与范围要求：每 kg 活猪产出
原始数量及计算要求：记录各载体消耗，共用仪表按运行时间、吞吐或分表数据分配。 原始采集分母类型：process_output。

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_manure_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manure_records`
- 来源：`fao-agricultural-energy`

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

- 选定流：甲烷 (生物源)（排放至空气） `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
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

本节点单张 N2O 卡的覆盖：按 calc_manure_n2o_coverage 分别计算所代表节点的直接与适用间接分项，再仅填报归入本卡的不重叠分子态 N2O 总和。贮存与管理土壤计算分开。排除由已链接过程明确覆盖的分项并保留覆盖证据，不得把汇总交换与分项交换重复并计。间接路径证据缺失不等于零。

- 选定流：一氧化二氮（排放至空气） `08a91e70-3ddc-11dd-94c3-0050c2490048`
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

- 选定流：氨（排放至空气） `08a91e70-3ddc-11dd-a2a9-0050c2490048`
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

### 过程：实际动物类别的农场门交付（`reference_handover`）

每个合格批次只选择一个实际最终来源：没有后续实际生长阶段的仔猪生产路线选择 live_piglet_output；实际保育/生长/育肥路线选择 live_grow_finish_output；单独交付种用/淘汰动物的参考批次选择 breeding_animal_output。动物类别、批次、期间和交付门保持分层。来源至交付的关联描述同一物理事件，不增加饲养、处理、运输或对外销售。汇总数据包时抵消匹配的内部来源产出和本节点输入；live_pig_output 是该批次唯一对外参考产出。来源缺失、缺少实际生产阶段或路线无依据时阻断生产。

#### 输入

##### 产品流

###### 同批合格活猪交付关联（`live_handover_input`）

这是内部关联，不是新增采购。仅关联一个实际最终来源，不同时关联多个来源行或前后相继的阶段转移；UUID 未解析。

- 选定流：生产农场门家猪活体
- 流属性/单位：Mass / kg
- 数量规则：按 cp_live_animal_transfer 将实测同批合格活重与所选最终来源核对，恰归一化一次至声明参考流。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_animal_transfer`
- 数量范围：同批身份核对，不是生产产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：与归一化 1 kg 最终参考相同的合格实物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集计算（`calculated_from_collection`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门活猪（`live_pig_output`）
这是所选实际类别活体动物批次的唯一对外参考产出，按 reference_handover 关联其最终来源。尚未核实兼容的平台 Product 流。
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

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_output_set` | 全部预期产出 | 枚举商品活猪、独立转移仔猪、种用动物、淘汰动物和外运粪污。除非有改变角色的预期交付证据，死亡动物和不可用粪污仍为损失/废物。 | `fao-leap-pig-2018` |
| `allocation_physical_first` | 多产出过程 | 先细分实测阶段特定投入和排放。其余不可分负担使用活增重、活重日、养分含量或实测服务等因果物理因子；经济分配必须说明理由和敏感性。 | `fao-leap-pig-2018` |
| `allocation_period` | 种猪群和群组阶段 | 将繁殖、哺乳、保育、育肥、更新、淘汰及终止事件关联至声明期间和产出；记录结转并防止群组间重复归属。 | `fao-leap-pig-2018` |
| `allocation_shared_infrastructure` | 共享建筑和设备 | 枚举消费节点和服务期；每项资产仅按实测占用、活重日、吞吐、运行时间或计量使用量分配一次，并保留因子证据。 |  |
| `allocation_manure` | 外运粪污 | 记录选定归属或替代处理、去向、质量、干物质和养分。除非研究方法明确要求并披露两者，不得对同一产出同时施加分配负担和避免产品抵扣。 | `fao-leap-nutrient-flows-2018` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_breeding_records` | `breeding_farrowing` | breeding stock, reproduction, piglet output | 猪群清册和秤记录 | 类别；头数；活重；进出；配种；分娩；断奶；淘汰；期间 | 清册与校准秤及事件日志核对；原始汇总要求：每个事件和库存变化只归属一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | head; kg live weight; date | 每次事件；每月核对 | 完整繁殖周期 | 全部供给繁殖单元 | 每参考流 | 秤校准；库存核对；异常日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed_records` | `breeding_farrowing`; `nursery_grow_finish` | feed inputs | 发票、配方和库存记录 | 产品/配方；供应商；供应态质量；水分/DM；组成；期初/期末库存；损失；群组 ；未用退回/转出；未食用损失；实际采食量；损失去向；水分/干物质| 承担上游负担的饲料投入 = 期初库存 + 收货 - 期末库存 - 有记录的未用退货或转出。边界内变质和拒食损失仍计入该投入。另行计算生物采食量 = 该投入 - 实测未食用损失，并核对水分/干物质；动物代谢计算采用采食量，不直接使用采购投入。逐项记录损失去向，并只计一次处理或粪污贡献。 保留原始记录，归属量仅对合格参考产出归一化一次。 | kg as-fed; kg DM | 每批交付；每月盘点 | 完整群组/报告期 | 全部饲料库和动物单元 | 每参考流 | 发票；配方表；库存核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_water_energy_records` | `breeding_farrowing`; `nursery_grow_finish` | water and energy inputs | 仪表、发票和设备日志 | 仪表；载体；读数；用途；建筑；日期；分配因子 | 优先分表，否则因果分配；原始汇总要求：差值、换算、一次分配。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | m3; kWh; MJ | 每月或更细 | 完整期间 | 全部动物建筑和公用系统 | 每参考流 | 校准；发票核对；分配表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_health_mortality_records` | `breeding_farrowing`; `nursery_grow_finish` | health products and mortalities | 治疗和死亡记录 | 产品；活性成分；数量/剂量；动物组；日期；死亡头数/质量；死因；去向 | 事件记录与库存和头数核对；原始汇总要求：按产品和群组汇总；死亡仅核算一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 产品记录单位；head; kg | 每次事件 | 完整群组/期间 | 全部动物单元 | 每参考流 | 药品记录；库存；处置凭证；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_live_animal_transfer` | `breeding_farrowing`; `nursery_grow_finish`; `reference_handover` | admitted and transferred live animals | 校准秤和交付记录 | 批次标识；最终来源行；内部/外部去向；类别；性别；头数；毛重/皮重/净活重；时间；来源/去向；交付点 | 交付前立即个体或群体校准称量；原始汇总要求：仅汇总所选最终类别/批次/交付门内合格质量，头数另保留。最终来源与交付只匹配一次，数据包边界抵消内部关联。不得把前后相继阶段转移相加作最终分母。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg live weight; head | 每次转移 | 完整群组 | 全部农场门和内部交接 | 每参考流 | 校准证书；签字交接；拒收日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_transport_records` | `nursery_grow_finish` | foreground-controlled inbound transport | 调度和路线记录 | 有效载荷；起讫点；载货距离；方式；控制权 | 仅对边界内段计算载荷距离；原始汇总要求：汇总载荷×距离，排除交付后段。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | t; km; t*km | 每个行程 | 完整群组/期间 | 全部受控入场段 | 每参考流 | 调度单；路线；边界理由；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_animal_emission_records` | `breeding_farrowing`; `nursery_grow_finish` | enteric emissions | 动物活动和饲料记录 | 类别；头日或活重日；采食；消化率；方法参数 | IPCC 兼容方法应用于活动数据；原始汇总要求：按类别计算后归一化。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | head-day; kg DM; kg CH4 | 阶段和报告期 | 完整群组 | 全部代表动物 | 每参考流 | 方法版本；参数来源；类别核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure_records` | `manure_management` | manure, treatment, export and emissions | 粪污系统日志和分析 | 类别；排泄基础；量；DM；N；VS；系统份额；储存期；处理；外运；去向；水/能源 | 质量与养分平衡及声明排放方法；原始汇总要求：期初+流入-期末-产出-损失，仅分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; m3; kg DM; kg N; kg VS; kWh | 每月及每次转移 | 完整报告期及库存结转 | 全部粪污系统 | 每参考流 | 分析；储存测量；转移凭证；方法表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed_supply_and_intake` | `breeding_farrowing`; `nursery_grow_finish` | 饲料投入、采食及损失 | 库存、收货、发料及损失台账 | 饲料身份/来源；群体/阶段；期间；期初/期末库存；收货；自产供给；未用退回/转出；未食用/变质质量及去向；原物/干物质；实际采食量；负担归属；合格最终产出 | 按 calc_feed_supply_and_intake 核对匹配的库存、称重、日粮/采草估算及处置记录。保留原始总量及阶段分母，生产与处理负担各归属一次，再对合格最终产出归一化。 | kg as-fed; kg DM | 每次发料及期间结算 | 完整所代表群体/期间 | 实际运行饲喂节点 | 每参考流 | 库存及供应商记录；水分证据；损失及无重复核算核对 |
| `cp_manure_n2o_coverage` | `manure_management` | 粪污/土壤直接及间接 N2O 覆盖 | 分路径氮台账及方法计算表 | 物种/类别；期间；排泄氮；阶段库存/转移；系统份额；挥发 NH3-N/NOx-N；淋溶/径流氮；施用/放牧氮；因子来源、单位及适用性；直接/间接分项；接受介质；已链接过程及归属卡；合格最终产出 | 按 calc_manure_n2o_coverage 保留原始阶段氮及分项计算，并匹配实际作业与现有粪污协议。记录缺证据或不适用路径及覆盖边界，可归属 N2O 归一化一次。 | kg N; kg N2O | 每个报告期间及管理变化 | 完整所代表管理期间 | 实际运行及明确链接节点 | 每参考流 | 氮平衡、因子单位/适用性、分项到卡片及无重复核算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部交换 | 归一化量=可归属交换/验收农场门活重 | 可归属交换；校准验收活重 | 每 kg 活猪的交换 | `mass-balance-identity` |
| `calc_feed_consumed` | 饲料 | 承担上游负担的饲料投入 = 期初库存 + 收货 - 期末库存 - 有记录的未用退货或转出。边界内变质和拒食损失仍计入该投入。另行计算生物采食量 = 该投入 - 实测未食用损失，并核对水分/干物质；动物代谢计算采用采食量，不直接使用采购投入。逐项记录损失去向，并只计一次处理或粪污贡献。 | 配方特定库存与交付 | 各阶段 kg as-fed 和 kg DM | `review-fao-pig-lca-2018` |
| `calc_transport_service` | 入场运输 | 仅对前景控制入场段汇总有效载荷吨×载货 km | 有效载荷；距离；边界决定 | t*km |  |
| `calc_live_weight_days` | 阶段和共享负担 | 按类别和阶段汇总活重×日，阶段日期不得重叠 | 带日期清册和体重 | kg live-weight-days |  |
| `calc_manure_emissions` | 甲烷和氧化亚氮 | 将 IPCC 兼容类别及粪污系统方程用于采集活动并保留全部参数 | 类别；种群/时间；采食/排泄；VS；N；系统份额；气候；因子 | kg CH4 和 kg N2O | `ipcc-2019-livestock-manure` |
| `calc_nitrogen_balance` | 粪污路线 | N投入/排泄=N留存/外运+残渣N+量化N损失±库存变化 | 饲料/动物和粪污N；外运分析；参数 | 各路线 kg N | `fao-leap-nutrient-flows-2018` |
| `calc_feed_supply_and_intake` | `breeding_feed_input`; `grow_finish_feed_input` | 所代表作业使用的饲料投入 = 期初饲料库存 + 收货 + 进入本作业的自产饲料 - 期末饲料库存 - 有记录的未用退回或转出。该投入保留边界内变质、拒食及被丢弃的剩余料。实际采食量 = 该投入 - 实测未食用/丢弃损失，并匹配水分/干物质与期间；采食量仅用于营养及代谢计算。期初库存承接原有负担，不是再次采购。追溯未用退回或转出的物料及负担去向，不自动给予替代抵扣。同一饲料的生产负担由采购饲料数据集或已建模自产作物/采集节点承担一次，不得两者并计。实际废料处理及粪污贡献计一次，不再次添加饲料生产负担。 | `cp_feed_supply_and_intake` | 同一原物/干物质基准下分开的饲料投入、采食及损失数量 | `review-fao-pig-lca-2018` |
| `calc_manure_n2o_coverage` | `manure_nitrous_oxide_output` | 按真实粪污阶段，采用有记录的物种/系统活动量及因子基准，分别计算直接 N2O、挥发/沉降引致间接 N2O，以及适用的淋溶/径流引致间接 N2O。N2O-N 乘 44/28 恰换算一次为分子态 N2O；已为分子质量的不得再次换算。保留分项计算表。现有 N2O 卡同时覆盖直接与间接排放时，填报其不重叠总和；已有直接/间接独立卡时，每个分项只归入对应卡，不再另报总和。放牧沉积及田间施用采用管理土壤方法，不套用粪污贮存因子。明确前景与已链接处理/牧地数据的核算责任；粪污转出不消除此前排放，已覆盖的下游排放不得重复。氮级联核对库存、转移及此前氮损失；间接 N2O 是前体的下游转化，不再次视为源阶段氮损失。可归属分子质量对合格参考产出归一化一次。记录不适用依据；路径数据缺失不等于零。 | `cp_manure_n2o_coverage` | 按路径及现有归属卡分开的 kg 分子态 N2O | `ipcc-2019-livestock-manure`; `ipcc-managed-soils-2019` |

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
| `validate_terminal_route` | 阶段拓扑及参考交付 | 按动物类别、批次、期间、交付门及合格质量，将唯一实际最终来源与 live_pig_output 匹配。无保育/生长活动的仅仔猪路线省略 nursery_grow_finish；生长路线只保留实际阶段及关联上游仔猪负担。拒绝实际生产阶段缺失、虚构后续育肥、合并不相容动物类别、重复内部转移或同批多次参考销售。 | error |
| `validate_reference_uuid` | 参考绑定 | 在兼容产品身份经明细核实前，参考产品流 UUID 保持为空。独立确认的质量属性及单位组 UUID 仅为支持引用；未解析产品身份阻止 active/发布就绪。 | error |
| `validate_route_delta` | 路线 | 若合并路线时未提供路线特定拓扑、清单类别、计算/验证差异、当前证据和透明权重，则失败。 | error |
| `validate_phase_period` | 阶段与期间 | 相关阶段、粪污、更新、淘汰或资产服务期未编制索引、无说明重叠或重复归属时失败。 | error |
| `validate_output_roles` | 产出、残余和废物 | 除非记录每个活体产出及外运粪污交付，并区分死亡动物/不可用粪污与预期产品，否则失败。 | error |
| `validate_shared_assets` | 共享基础设施 | 除非每项资产至少有两个消费节点或期间、服务边界、分配因子及防重复检查，否则失败。 | error |
| `validate_flow_identity` | 待确认 Product 投入 | 根据记录确定实际能源载体、供水及受前景控制的入场运输；最终交换需要相容且已核实的具体 UUID。 | error |
| `validate_emission_identity` | 基本流产出 | 除非物质、接收区室、流属性、单位组和支持引用经明细核实，否则固定绑定失败；宽泛污染物名称保持未解析。 | error |
| `validate_ranges` | 全部重要流 | 要求证据支持范围或可替换 `reasoned_estimate`，包含角色、上下限、单位、基准和证据类型。 | error |
| `validate_mass_n_balance` | 动物和粪污 | 调查无法解释的动物质量、粪污质量或氮不平衡；记录库存变化和转化，不得强制闭合。 | error |
| `v_feed_loss_burden` | 饲料平衡 | 若饲料投入扣除了边界内损失且未保留其上游负担，则拒绝该清单。核对采食、损失、库存及未用退回，并记录损失处理；不得自动给予共产品抵扣。 | `review-fao-pig-lca-2018` |
| `v_foreground_emission_responsibility` | 实际运行节点及链接服务 | 适用时记录现场燃料燃烧及制冷剂泄漏的核算责任：须为量化前景排放，或明确覆盖它们的具名链接过程，不能仅凭燃料供应或电力生产投入视为已包含。特殊类群生物及残余物排放须依物种/路线证据评估，不套通用畜牧因子。标明尚未落实的路径，不宣称清单完整；记录有依据的不存在结论并防止上/下游重复核算。 | |
| `v_feed_supply_intake_separation` | 全部饲料投入 | 拒绝扣除边界内拒食、变质或丢弃剩余料且未保留其生产负担的上游饲料清单。按 calc_feed_supply_and_intake 核对投入、采食、库存、转移及损失去向。不得把采食量当作饲料投入，不得假设自产饲料零负担或自动给予替代产品抵扣。 | `review-fao-pig-lca-2018` |
| `v_manure_n2o_coverage` | 适用粪污及管理土壤氮路径 | 须明确直接及间接路径覆盖、阶段氮平衡及分子质量换算。按 calc_manure_n2o_coverage，将各分项归入现有 N2O 卡或明确覆盖的已链接过程一次。间接路径证据缺失时不得宣称完整；不得默认零值或把汇总值与分项重复并计。 | `ipcc-2019-livestock-manure`; `ipcc-managed-soils-2019` |

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
| `review-fao-pig-lca-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains: Guidelines for assessment, section 11.2.2 and Appendix 2.13](https://www.fao.org/4/i8686en/I8686EN.pdf) | 饲料损失核算及一般 LCA 分配层级；向其他类群或繁殖产品的应用是本 PCR 明示的方法学选择，不移植猪的参数 |
| `ipcc-managed-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | 直接及间接氮路径，以及粪污贮存与管理土壤排放的衔接；须选择适用的物种及管理证据。 |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
