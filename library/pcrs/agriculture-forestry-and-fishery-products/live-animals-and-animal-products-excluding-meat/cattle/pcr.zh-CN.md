---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.cattle
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 牛

## 1. 范围与适用性

本 PCR 规定在生产农场门口交接的 *Bos* 属家牛活体的前景数据生产要求。范围涵盖以肉用、奶用、繁育、替换或混合目的管理的牛，包括引入的繁育或替换畜，在适用时纳入受控繁殖、犊牛培育、放牧或舍饲、健康管理、水和能源使用、粪污处理、选择、活重计量及农场门交接。

范围排除水牛、野牛及其他牛科动物；肉和胴体；作为参考产品的生乳、皮、精液和胚胎；单独销售的饲养或兽医服务；屠宰、去内脏、屠宰场接收；以及农场门交接后的运输。只有在独立预期并发生交接时，牛奶、种牛、淘汰牛和外运粪肥才属于共产品。死亡畜和不可利用粪污属于损失或废物。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.cattle` |
| classification_refs | CPC 3.0 `02111`，`Cattle` |
| covered_products | 为肉用、奶用、繁育、替换或混合目的管理并在生产农场门口活体交接的 *Bos* 属家牛 |
| excluded_products | 水牛、野牛和其他牛科动物；牛肉或胴体；生乳；牛皮；精液或胚胎；单独销售的饲养或兽医服务；屠宰场接收后的动物 |
| representative_product | 在生产农场门口转移所有权或运行控制前立即称量的活牛 |
| production_route | 以受控养牛为父级活动，包含放牧/牧区、混合、奶业关联、舍饲或育肥场变体；每个变体声明饲料、粪污、基础设施和排放要求的差异 |
| market_state | 农场门活体动物，并声明动物类别、必要时的性别、路线、活重计量基准、地理范围、健康或市场状态及群组或报告期 |

多个路线变体可以在同一农场或报告组合中并存，但只要过程拓扑、饲料来源、粪污路径、基础设施使用、排放计算或交接方式不同，就必须保持记录可分离。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产农场门口的 *Bos* 属家牛活体 |
| How much | 1 kg 活重 |
| How well | 声明动物类别、必要时的性别、生产目的与路线、必要时的品种或遗传系、活重计量基准、健康或市场状态、地理范围及农场门状态 |
| How long or cycle | 声明群组或完整报告期，覆盖所归属的繁育、饲养、生长、育肥、粪污及共享基础设施服务期 |
| reference_flow_link | `live_cattle_reference_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 生产农场门口的活牛 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 动物类别；必要时的性别；生产目的；放牧、混合、奶业关联、舍饲或育肥场路线；必要时的品种或遗传系；实测或推算活重基准；地理范围；农场门交接；群组或报告期；纳入的生命周期阶段 |

尚未核实与此农场门质量身份相容的产品流，因此产品流 UUID 保持空白。独立确认的质量属性及质量单位组支持身份已列于上表；这些支持引用不构成产品流绑定。头数只作为并行活动数据，不得替代质量参考属性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_live_mass` | 参考产品 | 质量 | kg | 将参考产出归一化为在生产农场交接前立即测得的 1 kg 活体质量；记录秤具、计量时点、胃内容物或缩重约定，以及单体或群组推算方式。 |
| `count_to_mass` | 动物头数 | 质量 | kg | 头数记录在换算为活重前必须包含群组或代表性个体实测质量、抽样方法及动物类别。 |
| `feed_basis` | 粗饲料、精饲料、补充料和代乳料 | 质量 | kg 原物和 kg 干物质 | 保留原物量以及水分或干物质基准；没有记录的换算证据时不得比较或合并湿基和干基。 |
| `water_basis` | 饮水和作业用水 | 体积或质量 | m3 或 kg | 将动物饮水与清洗、降温和粪污管理用水分开，并保留水源和计量方法。 |
| `energy_basis` | 电力、热和燃料载体 | 能量或载体数量 | kWh、MJ、L 或 kg | 换算前保留载能体特定数量，并用有记录的服务证据分配共享计量。 |
| `gas_species_basis` | 肠道和粪污排放 | 污染物质量 | kg 物种 | 分别报告 CH4、N2O、NH3 和其他物种；保留活动数据、因子层级、气候或粪污系统类别及分子换算基准。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

默认前景边界始于繁育或替换牛、饲料和粗饲料以及其他受控投入进入声明的养牛系统。它包括适用时的受控繁殖、妊娠、产犊和犊牛培育；放牧、混合、奶业关联、舍饲或育肥场生长和育肥；动物健康；前景控制的进场移动；饮水和作业用水；购入和现场能源；农场控制下的粪污收集、贮存、处理或利用；动物选择；活重计量；以及生产农场门交接。

交接后运输、屠宰、去内脏、剥皮、肉加工及下游乳加工不属于参考产品门。上游饲料、兽药、购入动物、电力、燃料和运输服务由供应商数据集连接，除非由报告主体控制并明确纳入前景数据包。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告期开始时引入的繁育或替换牛，以及声明的群组或牛群阶段 |
| starting_condition_role | 作为生物起始存栏，其前期生产负担需要供应商数据集或明确的跨期归属决定 |
| product_classification_scope | CPC 3.0 `02111` 活牛；范围不通过肉、奶、皮、精液、胚胎或服务类别递归 |
| recursive_input_rule | 本类别内购入或内部转移的活牛按起始存栏或中间生物投入记录，并声明来源、类别、质量、前期阶段和负担处理；不得将其静默重建为最终农场门参考产出 |
| upstream_dataset_requirement | 对引入动物和购入饲料、健康产品、能源及服务提供供应商或前期阶段数据集；若无相容数据集，则明确披露截断及理由 |
| disclosure | 声明路线变体、动物类别和阶段、牛群/群组转换、饲料系统、放牧和舍饲时期、粪污系统、共享资产、预期共产品及交接、死亡畜、活重方法、地理、报告期和未解析流身份 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `b_managed_parent` | 所有路线变体 | 使用一个受控养牛父级活动，并在过程拓扑、清单类别、计算、验证和当前记录中声明放牧/牧区、混合、奶业关联、舍饲或育肥场差异。 | `fao-leap-large-ruminants-2016` |
| `b_handover` | 参考产出 | 边界终止于活牛在生产农场门口转移所有权或运行控制前立即称量；排除屠宰场接收和交接后运输。 | `fao-leap-large-ruminants-2016` |
| `b_periods` | 繁育、妊娠、犊牛、生长、育肥及淘汰阶段 | 按阶段和报告期索引投入、产出、事件、替换和终止，并仅归属一次起始存栏负担。 | `fao-leap-large-ruminants-2016` |
| `b_manure` | 粪污 | 纳入农场控制下的收集、贮存、处理和土地利用；在实际交接节点记录外运粪肥，并连接场外处理且不重复上游粪污负担。 | `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure` |
| `b_shared_assets` | 牛舍、挤奶或饲喂系统、牧场、水、能源及粪污基础设施 | 列明使用共享资产的每个牛类、产品节点和服务期；优先按实测服务归属一次负担，再使用后备基准。 | `fao-leap-large-ruminants-2016` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `herd_production` | 牛群生产与饲养 | required | 只有在采用购入起始存栏并披露供应商负担时，路线特定繁殖阶段才可不适用 | 具有明确替代生物路线差异的受控生物生产 | 转入农场门选择的活牛质量 |
| `manure_management` | 粪污收集、贮存、处理与利用 | required | 记录实际粪污路径；若无场内贮存或处理，须提供证据并明确交接 | 受控残余物管理 | 各路径处理的粪污质量或挥发性固体和氮 |
| `farm_gate_transfer` | 选择、称量与农场门交接 | required |  | 参考产品节点 | 农场门交接的实测活牛质量 |

### 过程：牛群生产与饲养（`herd_production`）

#### 输入

##### 产品流

###### 繁育牛、替换牛或购入青年牛（`starting_cattle_input`）

记录进入受控系统的每头动物的来源、类别、年龄或阶段、头数、活重、预期角色、前期负担处理和进入日期。

分母与范围要求：每 1,000 kg 农场门活牛产出及每个引入群组

原始数量及计算要求：按群组和阶段记录引入的实测活重及头数 原始采集分母类型：process_output。

- 选定流：活牛起始存栏
- 流属性/单位：质量及并行头数 / kg 和头
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animal_events`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定起始存栏筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg 引入活重/kg 农场门活体产出
  - 基准：宽泛的路线相关筛查；全部场内出生群组可为零
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饲料、粗饲料、补充料和代乳料（`feed_and_forage_input`）

按身份、来源、原物量、干物质、组成、牛类和饲喂期记录全部消耗或发放的饲料；放牧采食量可由实测牧场和动物记录计算。

分母与范围要求：每 1,000 kg 农场门活牛产出及每个群组时期

原始数量及计算要求：按饲料身份、群组和阶段计量净发放量或计算采食量 原始采集分母类型：process_output。

- 选定流：牛用饲料和粗饲料产品
- 流属性/单位：质量 / kg 原物和 kg 干物质
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed_and_grazing`
- 来源：`fao-leap-large-ruminants-2016`; `ipcc-2019-livestock-manure`
- 数量范围：暂定饲料干物质筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：50
  - 单位：kg 干物质/kg 农场门活体产出
  - 基准：跨路线和跨时期的宽泛筛查；应由群组饲料及牧场记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饮水与饲养用水（`herd_water_input`）

该条件性总括卡覆盖供应的饮水、清洗及降温用水。具体交换由前景记录决定，并将作业用水与环境降水分开。

分母与范围要求：每 1,000 kg 农场门活牛产出

原始数量及计算要求：按用途、水源、牛类和时期计量或计算供应水量 原始采集分母类型：process_output。

- 选定流：工艺水供应
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_records`
- 数量范围：暂定牛群用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：100
  - 单位：m3/1,000 kg 农场门活体产出
  - 基准：覆盖多种养牛路线的宽泛饮水和饲养用水筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 牛群生产能源载体（`herd_energy_input`）

记录用于饲喂、通风、降温、与养牛系统共享的挤奶、围栏、牧场管理和移动机械的各载体电力、热和燃料。

分母与范围要求：每 1,000 kg 农场门活牛产出

原始数量及计算要求：按载体、使用节点和服务期记录仪表、发票或设备日志 原始采集分母类型：process_output。

- 选定流：牛群生产能源供应
- 流属性/单位：能量或载体数量 / kWh、MJ、L 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_infrastructure`
- 数量范围：暂定牛群能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kWh-equivalent/1,000 kg 农场门活体产出
  - 基准：从放牧到舍饲路线的宽泛筛查；保留具体载能体
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 兽医和动物健康产品（`animal_health_input`）

记录实际使用的药物、疫苗、消毒剂和其他健康产品；兽医服务与实物产品分开记录，且不是牛的参考产品。

分母与范围要求：每个接受治疗的群组及每 1,000 kg 农场门活牛产出

原始数量及计算要求：按产品、剂量、动物类别和事件记录治疗及采购数据 原始采集分母类型：process_output。

- 选定流：兽医和动物健康产品
- 流属性/单位：质量、体积、剂量或件 / 含产品身份的原始单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_health_records`
- 数量范围：暂定健康产品筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：治疗事件/1,000 kg 农场门活体产出
  - 基准：宽泛事件数筛查；仍必须记录具体产品数量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 前景控制的牛和饲料进场运输（`inbound_transport_input`）

仅纳入前景控制下从引入动物或饲料起点到农场的移动；已在上游表示的供应商交付运输不得重复计入。

分母与范围要求：每 1,000 kg 农场门活牛产出

原始数量及计算要求：货物质量吨数乘以前景控制的载货距离；动物和饲料移动分别保留 原始采集分母类型：transport_service。

- 选定流：进场公路货运服务
- 流属性/单位：运输服务 / tonne-kilometre
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_transport_records`
- 数量范围：暂定进场运输筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：tkm/1,000 kg 农场门活体产出
  - 基准：宽泛路线筛查；无前景控制进场运输时可为零
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设废物投入。实际使用的外来粪污、垫料废物或残余物必须以独立前景卡记录来源和去向。

##### 基本流

不预设基本流投入。只有在确定场址范围和准确基本流身份后，才添加放牧土地占用、取水或其他基本资源。

#### 输出

##### 产品流

###### 转入农场门选择的活牛预期产出（`live_cattle_to_gate`）

该内部产出将合格活牛从牛群生产转入选择和称量，并保留群组、类别、头数及实测活重。

分母与范围要求：农场门选择前每个生产群组

原始数量及计算要求：测量进入农场门选择的活重和头数 原始采集分母类型：process_output。

- 选定流：农场门选择前活牛
- 流属性/单位：质量及并行头数 / kg 和头
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animal_events`
- 数量范围：牛群至门口活重平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 转出活重/kg 可供选择的活牛质量
  - 基准：受群组质量平衡约束的转出比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 独立预期的养牛系统共产品（`intended_coproducts`）

只有在另有明确预期和交接，并具备独立交接点、数量和目的地时，才记录牛奶、种牛、淘汰牛或其他预期产出。生成数据集时依据前景记录将此总括卡展开为具体交换。

分母与范围要求：每个牛群报告期及归属后每 1,000 kg 参考产出

原始数量及计算要求：在每个独立记录的交接点测量数量 原始采集分母类型：process_output。

- 选定流：独立预期的养牛系统共产品
- 流属性/单位：产品特定属性和单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_outputs_and_allocation`
- 来源：`fao-leap-large-ruminants-2016`
- 数量范围：暂定预期产出筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 产品当量/kg 农场门活体产出
  - 基准：有意设置的跨产品宽泛筛查；没有归属工作表时不得合并不同产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 牛死亡与不可利用生物损失（`cattle_mortalities`）

按动物类别、头数、估测或实测质量、原因、日期及处置或回收路径记录死亡与不可利用生物损失；不得自动视为共产品。

分母与范围要求：每个群组及每 1,000 kg 农场门活牛产出

原始数量及计算要求：记录实测或计算的死亡质量，并保留去向和头数 原始采集分母类型：process_output。

- 选定流：牛死亡废物
- 流属性/单位：质量和头数 / kg 和头
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animal_events`
- 数量范围：死亡质量平衡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 死亡质量/kg 起始与出生存活质量
  - 基准：受牛群组活体质量平衡约束的死亡比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 转入管理的粪污（`manure_to_management`）

按动物类别、时期、挥发性固体、氮基准和粪污路径，记录进入收集、牧场沉积、贮存、处理或直接利用的排泄物；尽可能单独记录垫料。

分母与范围要求：每条粪污路径及每 1,000 kg 农场门活牛产出

原始数量及计算要求：根据动物数量、采食量、消化率和时期计量粪污或计算排泄量 原始采集分母类型：process_output。

- 选定流：需要管理的牛粪污
- 流属性/单位：质量、挥发性固体和氮 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_and_emissions`
- 来源：`fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- 数量范围：暂定粪污湿重筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 湿粪污/kg 农场门活体产出
  - 基准：宽泛的系统和含水率相关筛查；排放由挥发性固体和氮计算控制
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 向空气的肠道甲烷（`enteric_methane_air`）

按牛类、日粮、采食或能量基准、生产阶段、因子层级、地理和报告期计算甲烷；排入未指定空气区室时采用已核实的生物源甲烷身份。

分母与范围要求：每个群组时期及每 1,000 kg 农场门活牛产出

原始数量及计算要求：根据采集的动物类别和饲料活动数据采用与 IPCC 一致的方法计算，或采用实测农场证据 原始采集分母类型：process_output。

- 选定流：methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_and_emissions`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定肠道甲烷筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg CH4/1,000 kg 农场门活体产出
  - 基准：跨路线宽泛 QA 筛查；不是 IPCC 默认因子或通用清单数量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：粪污收集、贮存、处理与利用（`manure_management`）

#### 输入

##### 产品流

###### 粪污管理能源载体（`manure_energy_input`）

记录农场控制下刮粪、泵送、分离、贮存、曝气、处理和土地施用的能源。

分母与范围要求：每 kg 处理粪污及每 1,000 kg 农场门活牛产出

原始数量及计算要求：按粪污路径分配载体特定的仪表、发票或设备日志 原始采集分母类型：process_output。

- 选定流：粪污管理能源供应
- 流属性/单位：能量或载体数量 / kWh、MJ、L 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_infrastructure`
- 数量范围：暂定粪污能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kWh-equivalent/1,000 kg 农场门活体产出
  - 基准：从被动沉积到机械管理系统的宽泛筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污管理用水（`manure_water_input`）

将冲洗、稀释和处理用水与饮水和降雨分开记录。

分母与范围要求：每 kg 处理粪污及每 1,000 kg 农场门活牛产出

原始数量及计算要求：按粪污路径计量或计算供应水量 原始采集分母类型：process_output。

- 选定流：工艺水供应
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_records`
- 数量范围：暂定粪污用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：m3/1,000 kg 农场门活体产出
  - 基准：宽泛的系统相关 QA 筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 从牛群生产接收的粪污（`manure_received`）

该内部废物投入必须按路径和时期与牛群生产转出的粪污核对一致。

分母与范围要求：每条粪污路径和报告期

原始数量及计算要求：在单独记录牧场沉积和库存变化后，等于进入各声明路径的粪污量 原始采集分母类型：process_output。

- 选定流：需要管理的牛粪污
- 流属性/单位：质量、挥发性固体和氮 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_and_emissions`
- 数量范围：粪污转移核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 接收粪污/kg 转入管理的粪污
  - 基准：在单独记录牧场沉积和库存变化后的内部转移比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

不预设基本流投入。仅针对实际粪污路径和已核实身份添加土地、水或材料基本投入。

#### 输出

##### 产品流

###### 外运粪肥或回收养分产品（`exported_manure_product`）

只有在粪污被有意回收和转移，并具备实测数量、组成、接收方、交接及上游负担处理时，才将其作为产品。

分母与范围要求：每条粪污路径及归属后每 1,000 kg 农场门活牛产出

原始数量及计算要求：测量外运质量，并记录干物质、氮和其他声明的养分含量 原始采集分母类型：process_output。

- 选定流：外运牛粪肥或回收养分产品
- 流属性/单位：质量和养分含量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_outputs_and_allocation`
- 来源：`fao-leap-nutrient-flows-2018`
- 数量范围：外运粪肥质量平衡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 外运粪肥/kg 贮存损失后可用粪污
  - 基准：受粪污路径质量平衡约束的回收外运比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 不可利用粪污和处理残余物（`unusable_manure_waste`）

记录未有意作为产品交接的粪污、污泥、垫料残余或处理残余物，包括实际去向和处理目的地。

分母与范围要求：每条粪污路径及每 1,000 kg 农场门活牛产出

原始数量及计算要求：按路径和目的地计量或核对废物质量 原始采集分母类型：process_output。

- 选定流：不可利用牛粪污及处理残余物
- 流属性/单位：质量 / kg 湿基和干基
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_and_emissions`
- 数量范围：残余物质量平衡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 残余物/kg 接收粪污
  - 基准：在记录产品、田间利用、排放和库存变化后的残余比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

###### 向空气的粪污甲烷（`manure_methane_air`）

按粪污管理系统、挥发性固体、温度或气候、贮存时长、甲烷回收和报告期计算甲烷。

分母与范围要求：每条粪污路径及每 1,000 kg 农场门活牛产出

原始数量及计算要求：根据采集的动物及粪污系统活动数据采用与 IPCC 一致的方法计算，并在适用时按实测回收量调整 原始采集分母类型：process_output。

- 选定流：methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_and_emissions`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定粪污甲烷筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg CH4/1,000 kg 农场门活体产出
  - 基准：宽泛路径 QA 筛查；不是通用排放因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 向空气的直接和间接氧化亚氮（`manure_nitrous_oxide_air`）

按氮排泄、粪污路径、田间沉积或施用、挥发和淋溶假设计算 N2O，并保持直接和间接部分可追溯。

分母与范围要求：每条粪污路径及每 1,000 kg 农场门活牛产出

原始数量及计算要求：根据采集的氮和粪污路径活动数据采用与 IPCC 一致的方法计算 原始采集分母类型：n_input。

- 选定流：nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_and_emissions`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定粪污 N2O 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/1,000 kg 农场门活体产出
  - 基准：宽泛路径 QA 筛查；不是通用排放因子
  - 基准类型：氮投入（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 向空气或水体的氨及其他报告氮损失（`manure_nitrogen_losses`）

在最终身份绑定前，按接收介质分别记录 NH3、NOx、硝酸盐、氮径流及其他报告氮物种。

分母与范围要求：每条粪污路径及每 1,000 kg 农场门活牛产出

原始数量及计算要求：测量或按方法计算，并保留物种、元素基准、接收介质及路径 原始采集分母类型：n_input。

- 选定流：牛粪污产生的报告氮损失物种
- 流属性/单位：指定物种或氮的质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_and_emissions`
- 来源：`fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- 数量范围：氮损失平衡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 报告损失中的 N/kg 可用粪污 N
  - 基准：报告氮损失总比例不得超过扣除外运和留存氮后的可用粪污氮
  - 基准类型：氮投入（`n_input`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

### 过程：选择、称量与农场门交接（`farm_gate_transfer`）

#### 输入

##### 产品流

###### 进入选择和称量的活牛（`live_cattle_gate_input`）

从牛群生产承接牛只并保持群组、类别和可追溯性不变；记录选择结果和交接前实测活重。

分母与范围要求：每个交接批次

原始数量及计算要求：按交接批次记录实测投入活重和头数 原始采集分母类型：process_output。

- 选定流：农场门选择前活牛
- 流属性/单位：质量及并行头数 / kg 和头
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate_transfer`
- 数量范围：门口投入核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg 进入选择的牛/kg 农场门参考产出
  - 基准：宽泛的选择和短期滞留损失筛查；范围外数值须调查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农场门操作能源（`gate_energy_input`）

记录交接前短期滞留、驱赶、称量和装载的电力或燃料；排除交接后的运输。

分母与范围要求：每 1,000 kg 农场门活牛产出

原始数量及计算要求：分配至门口操作的仪表、发票或设备运行时间 原始采集分母类型：reference_flow。

- 选定流：农场门操作能源供应
- 流属性/单位：能量或载体数量 / kWh、MJ、L 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_infrastructure`
- 数量范围：暂定门口能耗筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh-equivalent/1,000 kg 农场门活体产出
  - 基准：不含交接后运输的宽泛驱赶和称量筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农场门操作用水（`gate_water_input`）

按用途分别记录短期滞留期间动物饮水和门口清洗的供应水。

分母与范围要求：每 1,000 kg 农场门活牛产出

原始数量及计算要求：计量或计算门口操作期间的供应水量 原始采集分母类型：reference_flow。

- 选定流：工艺水供应
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_records`
- 数量范围：暂定门口用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3/1,000 kg 农场门活体产出
  - 基准：宽泛的短期滞留和清洗筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设废物投入。

##### 基本流

不预设基本流投入。

#### 输出

##### 产品流

###### 活牛参考产品（`live_cattle_reference_output`）

这是参考产品：在农场门所有权或控制转移前立即测量的活牛。排除交接后的车辆移动。

参考产出的原始记录：在声明的活重基准上测量已接受的交接质量 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 生产农场门口的活牛
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate_transfer`
- 数量范围：参考产品归一化
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考流
  - 基准：归一化的已接受农场门活牛产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-definition`

##### 废物流

###### 门口不合格、死亡和实测活重损失（`gate_rejects_and_losses`）

将不合格动物、死亡和任何实测短期滞留质量损失与合格产品分开记录，并注明去向和原因。

分母与范围要求：每个交接批次及每 kg 参考产出

原始数量及计算要求：投入活重减去合格参考产出和单独记录的留存或退回牛只，并与实测损失核对 原始采集分母类型：reference_flow。

- 选定流：门口牛只不合格与生物损失
- 流属性/单位：质量和头数 / kg 和头
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate_transfer`
- 数量范围：门口质量平衡校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 不合格和损失/kg 进入选择的活牛
  - 基准：扣除留存或退回活牛后的交接批次质量平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

不预设基本流产出。只有在实际载能体和排放物种已有记录，且供应能源数据集未表示时，才添加门口设备的直接排放。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `a_output_hierarchy` | 活牛、牛奶、种牛、淘汰牛和外运粪肥 | 优先划分直接实测的产品特定记录。列明每个预期产出和交接。若仍有不可分负担，采用明确的 PCR 特定物理因果关系；仅在物理因果不可辩护时采用经济分配，并披露价格、时期和敏感性。 | `fao-leap-large-ruminants-2016`; `fao-leap-nutrient-flows-2018` |
| `a_residue_status` | 粪污、死亡畜和生物损失 | 仅在有意回收并有交接记录时将外运粪肥作为共产品；死亡畜和不可利用粪污作为废物或损失。不得仅为获得抵扣而将残余物转为产品。 | `fao-leap-nutrient-flows-2018` |
| `a_multi_period` | 繁育存栏、替换畜、犊牛、生长和育肥阶段 | 按群组时期索引起始存栏、出生、购入、销售、死亡、淘汰和期末存栏。前期和当期负担仅归属一次，核对存栏变化，并记录替换或终止处理。 | `fao-leap-large-ruminants-2016` |
| `a_shared_infrastructure` | 共享牛舍、挤奶、饲喂、牧场、水、能源和粪污资产 | 识别全部使用节点和服务期；优先按实测服务分配，其次按设备小时、动物日、活重日或其他有记录的因果驱动量。份额合计为一，且共享负担仅计一次。 | `fao-leap-large-ruminants-2016` |
| `a_route_separation` | 并存的放牧、混合、奶业关联、舍饲和育肥场变体 | 保持路线特定的饲料、粪污、基础设施和排放记录分离。仅在具有按产量加权的路线份额且动物和时期不重复时发布组合平均值。 | `fao-leap-large-ruminants-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animal_events` | `herd_production` | 起始存栏、出生、转移、死亡、淘汰及送往门口的牛 | 牛群登记、移动记录、磅单、兽医死亡记录 | 动物或群组 id；类别；性别；目的；品种；事件；日期；头数；活重；来源；目的地；阶段 | 电子牛群登记和经校准秤具或有记录的代表性称量；原始汇总要求：按类别和时期核对期初存栏 + 出生 + 购入 = 转出 + 死亡 + 淘汰 + 期末存栏。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头和 kg | 每次事件 | 完整群组和报告期 | 指定农场、牛群和群组 | 每参考流 | 移动文件、秤具校准、签署牛群登记；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed_and_grazing` | `herd_production` | 饲料、粗饲料和放牧采食 | 采购、配方、发料、牧场和剩余记录 | 饲料身份；来源；原物量；干物质；养分或能量组成；剩余；牧场面积和时期；牛类 | 发票、饲料库存、日粮日志、牧场记录及有记录的采食量计算；原始汇总要求：按饲料、类别和时期计算净发放量或采食量；保留换算基准。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 原物、kg 干物质、ha-day | 每次发料或时期汇总 | 全部饲喂和放牧阶段 | 饲料库、牧地、舍饲组和群组 | 每参考流 | 供应商规格、水分结果、库存核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_water_records` | `herd_production`; `manure_management`; `farm_gate_transfer` | 饮水、清洗、降温及粪污用水 | 仪表、水箱、泵运行时间及分配记录 | 水源；用途；期初和期末读数；体积；运行时间；共享用户；时期 | 经校准仪表或有记录的泵/运行时间计算；原始汇总要求：按用途汇总且共享读数仅分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | m3 或 kg | 每日、每月或每批 | 完整报告期 | 水源、过程及使用节点 | 每参考流 | 仪表校准、账单和分配工作表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_energy_and_infrastructure` | `herd_production`; `manure_management`; `farm_gate_transfer` | 能源和共享资产 | 仪表、发票、燃料、设备及资产登记 | 载体；数量；仪表；设备；服务；用户；运行小时；资产寿命；服务期；分配驱动量 | 分表、发票、油箱记录、运行日志和资产登记；原始汇总要求：优先按仪表直接归属；剩余共享量按有记录的因果驱动量仅分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kWh、MJ、L、kg、小时 | 每月及每次主要作业 | 完整报告期和资产服务期 | 过程、牛群组及共享农场系统 | 每参考流 | 发票、仪表校准、设备日志、分配工作表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_health_records` | `herd_production` | 动物健康产品和干预 | 药物登记、采购和治疗记录 | 产品；活性物质；剂量；单位；动物类别；头数；日期；原因；休药状态 | 农场治疗登记和供应商记录；原始汇总要求：按身份和类别汇总产品数量；服务单独保留。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 产品原始单位和事件 | 每次治疗 | 完整报告期 | 牛群、群组和治疗组 | 每参考流 | 发票、兽医或治疗记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_transport_records` | `herd_production` | 前景控制的牛和饲料进场移动 | 运输和路线记录 | 货物；质量；起点；终点；方式；车辆；载货距离；空返约定；控制边界 | 磅单、交付记录和路线日志；原始汇总要求：按货物和方式汇总吨数乘以载货公里数。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | t、km、tkm | 每次运输 | 完整报告期 | 前景控制的进场路线 | 每参考流 | 清单、磅单和路线证据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure_and_emissions` | `herd_production`; `manure_management` | 排泄、粪污路径、甲烷和氮损失 | 动物、饲料、粪污、贮存、处理、回收和施用记录 | 动物类别；数量；天数；采食；消化率；挥发性固体；氮；系统；贮存天数；气候；回收；外运；施用；因子层级 | 实测加上由采集活动数据进行的 IPCC 一致性计算；原始汇总要求：按类别-路径-时期计算；核对粪污和氮转移；保留分项后汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 粪污、kg VS、kg N、kg 气体物种 | 每月或每次管理事件 | 每个动物阶段和粪污路径 | 牛舍、牧场、贮存、处理和田间路径 | 每参考流 | 实验室或供应商数据、日志、因子表和计算工作簿；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_outputs_and_allocation` | `herd_production`; `manure_management` | 预期产出、交接和归属 | 销售、奶、繁育、淘汰、粪肥外运和分配记录 | 产品；数量；属性；交接；接收方；日期；直接负担；共享池；分配驱动量；使用经济分配时的价格 | 发票、仪表、秤具和分配工作表；原始汇总要求：优先直接归属；仅分配剩余共享池；份额合计为一。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 产品特定 | 每次交接及报告期结算 | 完整时期 | 全部产品节点和接收方 | 每参考流 | 已签交接、实测数量、审核工作表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_gate_transfer` | `farm_gate_transfer` | 选择、交接前称量及交接 | 选择清单、校准磅单、健康或市场文件及交接记录 | 批次；动物类别；性别；路线；头数；活重；称量时间；秤具；胃内容物或缩重约定；合格/不合格；留存；目的地；交接时间 | 经校准秤具和签署交接记录；原始汇总要求：核对投入、合格产出、留存或退回牛、不合格、死亡和实测损失。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 和头 | 每个交接批次 | 完整门口操作 | 生产农场门 | 每参考流 | 秤具校准、签署磅单和交接文件；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_normalize_reference` | 全部清单行 | 归一化数量 = 已归属过程数量 / 声明称量基准上的合格农场门活牛质量。 | 已归属数量；合格活重 | 每 1 kg 参考产出的数量 | `reference-definition` |
| `c_herd_balance` | 动物事件 | 期初动物 + 出生 + 购入 = 送往门口的牛 + 其他销售 + 死亡 + 淘汰 + 期末动物；按类别和时期分别核对，且不得混合头数与质量。 | 动物事件头数和质量 | 群组时期平衡及残差 | `mass-balance-identity` |
| `c_feed_dry_matter` | 饲料和粗饲料 | 干物质采食量 = 原物净采食量 × 实测或供应商干物质比例；保留每种饲料身份。 | 毛发放量；剩余；干物质比例 | 按饲料和牛类的 kg 干物质 | `fao-leap-large-ruminants-2016` |
| `c_enteric_ch4` | 肠道甲烷 | 对采集的类别、数量、天数、采食或能量及日粮记录应用所选 IPCC 层级；保留输入与因子后再汇总类别时期 CH4。 | 动物类别；数量日；饲料或能量数据；所选因子 | 按类别时期的 kg CH4 | `ipcc-2019-livestock-manure` |
| `c_manure_emissions` | 粪污甲烷和氮排放 | 按粪污系统、挥发性固体、氮、气候、贮存和回收计算；分别保留直接 N2O、间接 N2O、NH3 和其他物种，并避免重复计算外运氮。 | VS；N；系统份额；时间；气候；回收；外运；因子 | 按路径时期的 kg 指定气体或损失物种 | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `c_transport_service` | 前景控制进场运输 | 运输服务 = 实际货物吨数 × 载货距离；仅当供应商数据未包含时纳入空返。 | 货物质量；距离；方式；返程约定 | tonne-kilometres | `mass-balance-identity` |
| `c_shared_attribution` | 共享资源和资产 | 归属量 = 共享池 × 有记录的服务比例；服务期内所有使用者比例合计为一。 | 共享总量；使用者；服务期；分配驱动量 | 按过程、产品和时期的数量 | `mass-balance-identity` |
| `c_gate_balance` | 交接批次 | 进入选择的牛 = 合格产出 + 留存或退回牛 + 不合格 + 死亡 + 在一致称量基准上的实测活重变化。 | 门口投入和产出记录 | 交接批次平衡及残差 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考和所有最终交换 | 数据集发布前确认具体流类型、方向、产品或物质身份、农场或过程节点、属性、单位及支撑引用。 | 平台详情读取和支撑引用审核 |
| `dq_route` | 每条表示路线 | 声明受控父级活动及其在饲料、拓扑、粪污、基础设施、计算和验证方面的路线差异；不得合并不相容路线记录。 | 路线说明、舍饲/放牧记录、过程图 |
| `dq_period` | 动物阶段和共享资产 | 覆盖完整归属群组或报告期，并连接期初存栏、替换、出生、事件、产出、终止及资产服务期。 | 牛群登记、日历和分配工作表 |
| `dq_completeness` | 前景清单 | 对起始动物、饲料、水、能源、健康产品、前景控制运输、预期产出、死亡、粪污路径和直接排放全部纳入或说明不适用。 | 完整性矩阵和源记录 |
| `dq_mass_and_nitrogen` | 牛和粪污 | 核对动物头数/活重以及粪污或氮转移，不得将未测库存变化视为销售或排放。 | 平衡、秤具记录和计算工作簿 |
| `dq_attribution` | 多产出和共享系统 | 保留直接归属、共享池、驱动量、比例及敏感性；证明每项负担、产出和交接只计一次。 | 已审核分配工作表 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_reference_gate` | 参考产出 | 若 1 kg 未表示在生产农场所有权或控制转移前立即称量并具备全部必需限定信息的 *Bos* 活牛，则拒绝数据包；仅头数不可接受。 | `reference-definition` |
| `v_route_delta` | 放牧、混合、奶业关联、舍饲和育肥场变体 | 要求受控父级活动以及当前证据支持的拓扑、饲料、粪污、基础设施、计算或验证差异；拒绝只有标签的变体及无法说明的互斥时期合并。 | `fao-leap-large-ruminants-2016` |
| `v_output_status` | 每个产品、残余物和损失 | 要求归类为预期产出、残余物或废物之一，并给出实际交接或去向；牛奶、种牛、淘汰牛和外运粪肥不是自动共产品。 | `fao-leap-large-ruminants-2016`; `fao-leap-nutrient-flows-2018` |
| `v_period_attribution` | 全部群组阶段和替换 | 要求阶段和时期索引、期初与期末存栏、替换和终止处理，并禁止前期或起始存栏负担重复归属。 | `fao-leap-large-ruminants-2016` |
| `v_shared_infrastructure` | 由多个节点、产品或时期使用的资产或服务 | 要求列出全部使用者和服务期、一个有证据的归属决定、比例合计为一，并禁止在奶、牛、粪肥或其他产品间重复负担。 | `fao-leap-large-ruminants-2016` |
| `v_manure_and_emissions` | 粪污和直接排放 | 要求动物类别、粪污路径、VS 和 N 基准、所选因子层级、气候或贮存条件、回收及物种特定产出；最终交换中拒绝笼统气体或氮标签。 | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `v_flow_binding` | 所有最终交换 | 根据实际记录展开待确认流身份，并核实每个具体 UUID、属性和单位。未解析身份保持空白；不得将生乳、兽医服务、水牛、山羊、牛肉、仅计数的牛或其他近似项绑定为活牛质量参考。 | `reference-definition` |
| `v_mass_balance` | 牛群、粪污和门口记录 | 调查动物、活重、粪污和氮平衡残差，并在作为二手或背景数据使用前披露计量不确定性。 | `mass-balance-identity` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景养牛数据包；只有完成身份和方法学审核后才可成为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 作为生产农场门之后的畜牧、屠宰、食品、皮革、粪肥利用和农业生命周期模型投入 |
| allowed_use | 具有声明的质量、路线、群组时期、生产农场门基准以及完整归属和质量披露的 *Bos* 属活牛 |
| excluded_use | 水牛或其他牛科动物；以肉、奶、皮、精液、胚胎或服务为参考产品；屠宰场门口动物；仅计数参考流；未解析或近似 UUID 替代 |
| required_metadata | 牛类；必要时的性别；用途；必要时的品种；路线变体；活重基准；地理；农场门交接；群组和报告期；阶段；饲料基准；粪污系统；共产品交接；共享资产；因子层级 |
| required_quality_disclosure | 记录覆盖率、路线和时期代表性、平衡残差、直接和共享归属、暂定范围、未解析身份、因子来源及遗漏 |
| update_trigger | 路线或节点变化、动物/饲料/粪污记录修订、分配或时期处理变化、新排放方法或新核实的相容参考身份 |

## 11. 数据来源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `fao-leap-large-ruminants-2016` | official_guidance | FAO LEAP，*Environmental performance of large ruminant supply chains*，2016，https://openknowledge.fao.org/handle/20.500.14283/i6494en | 牛供应链边界、过程分解、动物阶段、饲料记录、共产品和分配。 |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP，*Nutrient flows and associated environmental impacts in livestock supply chains*，2018，https://openknowledge.fao.org/handle/20.500.14283/ca1328en | 粪污和养分路径、预期回收、氮平衡及损失报告。 |
| `ipcc-2019-livestock-manure` | method_factor | IPCC，*2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management*，https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 动物类别、活动记录、肠道甲烷以及粪污甲烷和氮排放计算。 |
| `mass-balance-identity` | method_factor | 将质量守恒和氮守恒恒等式应用于实测前景记录。 | 牛群、转移、粪污、氮、分配比例和门口核对。 |
| `reference-definition` | method_factor | 本 PCR 的 1 kg 生产农场门活牛参考定义及算术归一化。 | 参考归一化和节点验证。 |
