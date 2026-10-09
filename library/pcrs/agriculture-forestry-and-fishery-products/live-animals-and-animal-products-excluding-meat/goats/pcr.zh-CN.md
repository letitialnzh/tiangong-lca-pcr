---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.goats
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 农场门口活山羊

## 1. 范围与适用性

本 PCR 适用于为肉、奶、纤维、繁殖、补充或混合目的饲养，并在生产农场门口以活体状态移交的家养山羊及羔羊。其范围始于进入系统的种用或补充羊只，涵盖存在时的繁殖、羔羊培育、放牧或采食灌木以及补饲或舍饲、动物健康、可选的挤奶或纤维采集、用水和能源、肠道排放、粪污路径、选育或育肥、活重称量，以及所有权或控制权移交。

参考产品不包括绵羊及其他反刍动物；山羊肉或胴体；作为单独参考产品的山羊原奶、马海毛、山羊绒、山羊皮、精液和胚胎；单独出售的饲养或兽医服务；出场后运输；以及进入屠宰场后的动物。粗放或转场、混合或农牧结合、舍饲或半集约路线是母体受管理生物生产活动的替代实施方式。数据集应选择一种路线，或在透明汇总前分别保留各路线记录。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.goats |
| classification_refs | CPC 3.0: 02123 Goats |
| covered_products | 在生产农场门口移交的家养活山羊及羔羊；当参考产出仍为活体动物时，包括肉用、奶用、纤维用、繁殖、补充、淘汰或混合用途动物类别。 |
| excluded_products | 绵羊及其他反刍动物；肉和胴体；作为单独参考产品的原奶、马海毛、山羊绒、山羊皮、精液和胚胎；单独出售的饲养或兽医服务；屠宰及出场后运输。 |
| representative_product | 在农场门口移交前即时称量的一只家养活山羊。 |
| production_route | 母活动：受管理生物生产。路线变体包括粗放或转场放牧与采食灌木、混合或农牧结合管理，以及舍饲或半集约生产。其饲料来源、移动、圈舍、共享基础设施、粪污路径、能源使用、挤奶或纤维采集及计算要求均须保持路线特异性。 |
| market_state | 活体且适于所申报的移交目的；须申报物种或山羊类型、动物类别、重要时的性别、生产目的、路线、活重计量基础、地域及报告群组。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 生产农场门口的家养活山羊，位于出场后运输或屠宰之前。 |
| How much | 1 kg 活重。 |
| How well | 申报山羊类型、动物类别与用途、重要时的性别、生产路线、与移交有关的健康或适用状态，以及活重计量基础。 |
| How long or cycle | 一个明确的群组周期或报告期，在不重复归属的前提下连接繁殖或补充、培育、死亡、预期联产品、共享资产和移交。 |
| reference_flow_link | `live_goat_reference_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 生产农场门口的家养活山羊 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 山羊物种或类型；动物类别与用途；重要时的性别；重要时的品种或基因型；生产系统路线；放牧、采食灌木、转场或舍饲制度；活重计量基础与称重点；地域；农场门口交接；群组周期或报告期 |

参考产品 UUID 保持空白。已确认的平台候选仅限屠宰就绪、屠宰重量或边际粗放型山羊，因此不能代表本宽泛类别。头数仅为活动数据，不能替代活重质量。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_weight` | 参考活山羊 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在生产农场门口移交前即时测量活重。保留称重点、日期、个体或批次基础，以及任何禁食或消化道充盈约定。 |
| `count_mass_conversion` | 以头数记录的出生、进入、死亡和移交 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可使用动物类别特异的实测或抽样平均活重将头数换算为质量；同时保留头数和换算证据。 |
| `feed_dry_matter` | 放牧采食的灌木和牧草、储存饲料、精料、副产品、补充料和代乳品 | 质量 | kg 干物质和 kg 原物料 | 保留原物料量及实测或供应商提供的干物质比例。无换算证据不得汇总湿基和干基饲料记录。 |
| `water_separation` | 饮用水和服务用水 | 质量或体积 | kg 或 m3 | 区分供应水、降雨和非管理地表水，并披露计量或估算方法。 |
| `gas_species_basis` | 甲烷、氧化亚氮和氨 | 质量 | kg CH4、kg N2O 或 kg N2O-N，以及 kg NH3 或 kg NH3-N | 保留指定物质及元素或分子基础；任何换算均须明确且可复现。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 进入所代表羊群的种用或补充山羊，以及进入生产农场的外购或转入饲料、牧草、水、能源、保健产品和其他管理投入。 |
| starting_condition_role | 进入系统的羊群和外部管理投入标志前景受管理生物生产责任的开始；繁殖、产羔、培育、放牧或舍饲、健康管理、存在时的挤奶或纤维采集、粪污处理、选育、称量和移交均在边界内。 |
| product_classification_scope | 对应 CPC 3.0 02123 的活山羊。奶、纤维、粪污、山羊皮、肉和服务仍为单独分类的产出或活动。 |
| recursive_input_rule | 从其他生产者获得的活山羊记录为由供应商数据集支持的上游 Product 投入；不得在接收农场过程中递归重建其移交前生产。 |
| upstream_dataset_requirement | 对外部活山羊、饲料和牧草、保健产品、供应水、能源载体及重要时的入场运输要求供应商数据集。仅在身份、状态、供应者和目的地已知后，才可在前景生成时选择具体流 UUID。 |
| disclosure | 申报山羊类型、动物类别与用途、路线变体、放牧或舍饲制度、饲料边界、繁殖与补充处理、奶和纤维交接、粪污路径、共享资产与服务期、群组周期或报告期、地域、称重点和农场门口交接。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `managed_goat_boundary` | 所有涵盖路线 | 包括存在时的受管理繁殖、产羔与羔羊培育、放牧或舍饲、动物健康、水和能源、肠道排放、粪污路径、可选的挤奶或纤维采集、选育或育肥，以及农场门口称量。排除屠宰、胴体处理和出场后运输。 | `fao-leap-small-ruminants-2016`; `fao-gleam` |
| `route_delta_separation` | 粗放或转场、混合或农牧结合，以及舍饲或半集约路线 | 识别母体受管理生物生产活动及所选路线。保留饲料或灌木采食、移动、圈舍与共享资产、粪污路径、能源、联产品处理、计算和验证方面的路线差异。在分别计算之前不得混合互斥路线。 | `fao-leap-small-ruminants-2016`; `fao-ruminant-lca-2013` |
| `phase_and_period_linkage` | 繁殖、妊娠、产羔、培育、泌乳或纤维阶段、育肥、淘汰和移交 | 将投入、资产、动物事件、死亡、预期产出和粪污关联到导致它们的生物阶段和报告期。披露部分周期覆盖和补充处理。 | `fao-leap-small-ruminants-2016` |
| `shared_asset_boundary` | 多个群组或时期共用的圈舍、围栏、供水系统、车辆、处理、挤奶及纤维采集设施 | 识别资产或服务、每个消费节点或动物群、相关服务期、分配驱动因素和证据。所有消费者合计仅计一次负担。 | `fao-leap-small-ruminants-2016` |
| `farm_gate_handover` | 参考活山羊产出 | 当前景责任在生产农场门口完成动物称量并移交所有权或控制权时结束；后续装载和运输排除在外，除非明确移入所申报前景边界。 | `fao-leap-small-ruminants-2016` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_goat_herd` | 受管理山羊群生产与农场门口移交 | required | 始终必需。仅在实际存在且单独记录时，才表示繁殖、转场、舍饲、挤奶、纤维采集和粪污子路线。 | 前景受管理生物生产，在农场门口移交前保持路线、阶段、预期产出和共享基础设施归属。 | 农场门口 1 kg 活山羊；保留动物头数、动物日、群组、阶段和报告期记录。 |

### 过程：受管理山羊群生产与农场门口移交（`managed_goat_herd`）

#### 输入

##### 产品流

###### 种用和补充山羊（`breeding_replacement_goats`）

记录从所代表羊群历史之外获得的活山羊。在所代表群组内出生并留用的动物属于内部流，不得再次计为外购投入。

分母与范围要求：每 kg 农场门口活山羊，基于所申报群组周期或报告期

- Selected flow: 活种用或补充山羊（UUID 未解析）
- Flow property / unit: 质量 / kg 活重；保留头数
- Amount rule: 根据类别特异的进入体重计算进入活重，并将上游负担分配至实际服务期或所代表产出。
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特异（`site_specific`）
- 归一化基准：每参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_goat_events_weights`
- Sources: `fao-leap-small-ruminants-2016`
- Range: 暂定外部补充筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 2
  - Unit: kg 进入活重/kg 参考活重
  - Basis: 覆盖自繁更新和外部补充羊群的宽泛可替换筛查范围
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

###### 饲料、牧草和灌木采食供给（`feed_forage_browse`）

记录跨越核算边界的每一种受管理日粮来源，包括其生产在范围内的放牧牧草或灌木、储存饲料、精料、副产品、补充料和代乳品。在实际饲料身份已知前，伞状条目保持未绑定。

分母与范围要求：每 kg 农场门口活山羊及所申报羊群期间

- Selected flow: 饲料、牧草、采食灌木和补充料（UUID 未解析）
- Flow property / unit: 质量 / kg 干物质和 kg 原物料
- Amount rule: 将原物料记录换算为干物质后，按来源和阶段汇总采食量或供应饲料；仅当拒食物被单独测量并确定路径时方可扣除。
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特异（`site_specific`）
- 归一化基准：每参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_feed_and_grazing`
- Sources: `fao-leap-small-ruminants-2016`; `ipcc-2019-livestock-manure`
- Range: 暂定干物质供给筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0.2
  - Upper: 40
  - Unit: kg 干物质/kg 参考活重
  - Basis: 跨短期育肥和繁殖关联系统的宽泛可替换全路线筛查范围
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

###### 兽医和羊群保健产品（`herd_health_products`）

记录跨越农场边界的药品、疫苗、消毒剂、矿物质处理剂和其他保健产品。保留后续精确选流所需的配方和施用基础。

分母与范围要求：每 kg 农场门口活山羊

- Selected flow: 兽医和山羊保健产品（UUID 未解析）
- Flow property / unit: 产品特异属性 / 申报单位
- Amount rule: 按产品、活性成分或配方、动物类别和阶段记录购入或施用量；不得将不同产品合并为一个最终交换。
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特异（`product_specific`）
- 归一化基准：每参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_health_inputs`
- Sources: `fao-leap-small-ruminants-2016`
- Range: 暂定保健投入筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 0.2
  - Unit: kg 产品/kg 参考活重
  - Basis: 宽泛可替换的汇总筛查范围；最终交换保持产品特异
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

###### 供应的饮用水和服务用水（`supplied_water`）

记录供应的饮用、清洗、降温及其他管理用途用水。降雨和非管理地表水单独披露，不自动视为供应的 Product 投入。

分母与范围要求：每 kg 农场门口活山羊

- Selected flow: 山羊生产供应水
- Flow property / unit: 质量或体积 / kg 或 m3
- Amount rule: 按用途和阶段汇总计量或有记录的供应水；无直接测量时披露估算方法。
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特异（`site_specific`）
- 归一化基准：每参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_water_energy`
- Sources: `fao-leap-small-ruminants-2016`
- Range: 暂定供应水筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0.5
  - Upper: 200
  - Unit: L/kg 参考活重
  - Basis: 跨放牧、炎热气候、舍饲、清洗和降温条件的宽泛可替换筛查范围
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

###### 能源供给（`energy_supply`）

记录用于圈舍、照明、泵送、挤奶、纤维采集、饲喂、粪污处理和称量的外购电力、燃料、热力或其他能源载体。由前景记录确定实际载体。

分母与范围要求：每 kg 农场门口活山羊

- Selected flow: 山羊生产能源载体和公用工程
- Flow property / unit: 能源或载体特异属性 / MJ、kWh 或载体单位
- Amount rule: 按用途、仪表、发票或燃料日志分别记录每种载体；保留换算因子，在最终交换选择前不得合并不同载体。
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特异（`site_specific`）
- 归一化基准：每参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_water_energy`
- Sources: `fao-leap-small-ruminants-2016`
- Range: 暂定直接能源筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg 参考活重
  - Basis: 跨粗放和机械化舍饲路线的宽泛可替换筛查范围
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

###### 入场货运服务（`inbound_freight_transport`）

仅当运输位于所申报前景边界内时，记录饲料、垫料、保健产品、燃料和其他外购材料的货运服务。由独立牲畜服务实施的动物移动，在得到精确核验前保持未绑定。

分母与范围要求：每 kg 农场门口活山羊

- Selected flow: 入场材料道路货运服务
- Flow property / unit: 货物运输 / t*km
- Amount rule: 对纳入前景边界的材料交付，根据运输质量和路线距离计算吨公里。
- Value mode: 计算值（`calculated_value`）
- Specificity: 路线特异（`route_specific`）
- 归一化基准：每参考流
- Basis kind: 运输服务（`transport_service`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_inbound_transport`
- Sources: `fao-leap-small-ruminants-2016`
- Range: 暂定入场货运筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 20
  - Unit: t*km/kg 参考活重
  - Basis: 从本地到远距离外购投入的宽泛可替换筛查范围
  - Basis kind: 运输服务（`transport_service`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

##### 废物流

默认不要求 Waste 流输入。仅当进口粪污、垫料废物或其他废物被接收并在所申报边界内处理时记录，并选择与目的地兼容的身份。

##### 基本流

默认不规定基本流输入。土地占用、取水和其他资源交换仅可在其环境区室、属性和计算方法得到明确支持时添加。

#### 输出

##### 产品流

###### 活山羊参考产出（`live_goat_reference_output`）

记录在农场门口移交所有权或控制权之前即时称量的活体动物质量。在宽泛的农场门口山羊 Product 流得到验证前，语义身份保持未绑定。

分母与范围要求：生产农场门口 1 kg 活山羊

参考产出的原始记录：归一化后恰为 1 kg 实测活重；保留归一化前实测批次或个体质量。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

- Selected flow: 生产农场门口的家养活山羊
- Flow property / unit: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- Specificity: 产品特异（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- Collection protocol: `cp_goat_events_weights`
- Sources: `fao-leap-small-ruminants-2016`
- Range: 参考归一化恒等范围
  - Range role: 允许范围（`allowed_range`）
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg 参考流
  - Basis: 归一化参考产出
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 方法公式（`method_formula`）
  - Sources: `fao-leap-small-ruminants-2016`

###### 山羊原奶联产品（`raw_goat_milk_coproduct`）

仅当山羊原奶被有意采集并独立移交时记录。羔羊饮用或废弃的奶不属于此联产品。逐批分别记录温乳或冷藏状态、温度和实际交付门。本宽口径卡不固定 UUID；只有实际冷藏且交付门匹配的批次，才能在身份确认后采用冷藏农场门身份。不得根据 UUID 假定发生了冷却；仅在实际冷却时纳入交付前实测冷却投入和损失。

分母与范围要求：每 kg 农场门口活山羊

- Selected flow: 交付状态与交付门明确的山羊原奶
- Flow property / unit: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 按羊群阶段和报告期记录移交的原奶质量，扣除内部消耗或废弃的奶。
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特异（`site_specific`）
- 归一化基准：每参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_intended_outputs`
- Sources: `fao-leap-small-ruminants-2016`
- Range: 暂定移交奶筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 50
  - Unit: kg 奶/kg 参考活重
  - Basis: 涵盖非奶用和奶用关联羊群的宽泛可替换筛查范围
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

###### 纤维联产品（`fibre_coproduct`）

仅当马海毛、山羊绒或其他山羊纤维被有意采集并作为独立产出移交时记录。保留纤维类型、清洁状态、水分基础和交接点，以供后续身份解析。

分母与范围要求：每 kg 农场门口活山羊

- Selected flow: 农场门口山羊纤维（UUID 未解析）
- Flow property / unit: 质量 / kg
- Amount rule: 按类型和状态测量移交纤维；无文件化换算时不得合并含脂、洗净或去粗毛状态。
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特异（`product_specific`）
- 归一化基准：每参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_intended_outputs`
- Sources: `fao-leap-small-ruminants-2016`
- Range: 暂定移交纤维筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 1
  - Unit: kg 纤维/kg 参考活重
  - Basis: 涵盖非纤维和纤维生产羊群的宽泛可替换筛查范围
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

###### 外运粪污联产品（`exported_manure_coproduct`）

仅当粪污被有意移交利用且有文件化接收方时，才记录为 Product 产出。场内保留粪污为内部存量；不可用或废弃粪污为 Waste 流。

分母与范围要求：每 kg 农场门口活山羊

- Selected flow: 外运山羊粪污或粪污源土壤改良剂（UUID 未解析）
- Flow property / unit: 质量 / kg 鲜物质和 kg 干物质；保留养分含量
- Amount rule: 记录移交质量、水分或干物质、氮含量、处理状态、接收方和交接；排除内部还田粪污。
- Value mode: 计算值（`calculated_value`）
- Specificity: 产品特异（`product_specific`）
- 归一化基准：每参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_manure_pathways`
- Sources: `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- Range: 暂定外运粪污筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 100
  - Unit: kg 鲜粪污/kg 参考活重
  - Basis: 跨直接沉积、贮存、处理和外运路线的宽泛可替换筛查范围
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

##### 废物流

###### 死亡动物与不可用动物材料（`mortality_waste`）

按质量和目的地记录在参考交接前死亡的山羊及不可用动物材料。有意以活体淘汰畜移交的动物仍为预期 Product 产出，而非废物。

分母与范围要求：每 kg 农场门口活山羊

- Selected flow: 山羊死亡动物和不可用动物材料（UUID 未解析）
- Flow property / unit: 质量 / kg
- Amount rule: 根据实测尸体重量，或头数乘以类别特异实测平均质量计算；记录目的地和处理路线。
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特异（`site_specific`）
- 归一化基准：每参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_goat_events_weights`
- Sources: `fao-leap-small-ruminants-2016`
- Range: 暂定死亡损失筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 2
  - Unit: kg 死亡动物/kg 参考活重
  - Basis: 用于触发严重损失或群组不匹配调查的宽泛可替换筛查范围
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

##### 基本流

###### 排放至空气的肠道生物源甲烷（`enteric_methane_air`）

计算所代表山羊类别、日粮、路线和期间由肠道发酵产生的甲烷。保留 CH4 质量和排放因子层级。

分母与范围要求：每 kg 农场门口活山羊

- Selected flow: 排放至未指定空气的生物源甲烷 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Binding: 固定（`fixed`）
- Amount rule: 根据动物群体和阶段、饲料或能量摄入及文件化 IPCC 或国家特异方法计算；群组计算后归一化。
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特异（`site_specific`）
- 归一化基准：每参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_emission_drivers`
- Sources: `ipcc-2019-livestock-manure`
- Range: 暂定肠道甲烷筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 2
  - Unit: kg CH4/kg 参考活重
  - Basis: 宽泛可替换筛查范围；计算值由来源方法而非本区间决定
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

###### 排放至空气的粪污管理生物源甲烷（`manure_methane_air`）

计算牧场沉积或在收集、贮存、处理和利用路径中管理的粪污所产生的甲烷。该量须与肠道甲烷分开。

分母与范围要求：每 kg 农场门口活山羊

- Selected flow: 排放至未指定空气的生物源甲烷 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CH4
- Binding: 固定（`fixed`）
- Amount rule: 按动物类别、挥发性固体产量、路径份额、气候、贮存时长、甲烷转化因子及存在时的回收计算。
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特异（`site_specific`）
- 归一化基准：每参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_manure_pathways`
- Sources: `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- Range: 暂定粪污甲烷筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 1
  - Unit: kg CH4/kg 参考活重
  - Basis: 宽泛可替换筛查范围；路径计算仍为权威依据
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

###### 排放至空气的直接与间接氧化亚氮（`manure_nitrous_oxide_air`）

计算受管理粪污和沉积排泄物产生的 N2O，保留直接与间接路径及 N2O 或 N2O-N 基础。

分母与范围要求：每 kg 农场门口活山羊

- Selected flow: 排放至未指定空气的氧化亚氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg N2O
- Binding: 固定（`fixed`）
- Amount rule: 按动物类别和阶段计算氮排泄量，将其分配至粪污路径，应用文件化直接和间接因子，并在需要时将 N2O-N 换算为 N2O。
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特异（`site_specific`）
- 归一化基准：每参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_manure_pathways`
- Sources: `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`
- Range: 暂定氧化亚氮筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 0.2
  - Unit: kg N2O/kg 参考活重
  - Basis: 宽泛可替换筛查范围；路径计算仍为权威依据
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）

###### 排放至空气的氨（`manure_ammonia_air`）

计算所纳入前景边界的圈舍、放牧沉积、收集、贮存、处理和施用路径产生的氨挥发。

分母与范围要求：每 kg 农场门口活山羊

- Selected flow: 排放至未指定空气的氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg NH3
- Binding: 固定（`fixed`）
- Amount rule: 计算进入各路径的氮，应用文件化 NH3-N 挥发因子，并在需要时将 NH3-N 换算为 NH3；防止与粪污外运氮重叠。
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特异（`site_specific`）
- 归一化基准：每参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_manure_pathways`
- Sources: `fao-leap-nutrient-flows-2018`; `ipcc-2019-livestock-manure`
- Range: 暂定氨筛查范围
  - Range role: 质量保证护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 0.5
  - Unit: kg NH3/kg 参考活重
  - Basis: 宽泛可替换筛查范围；路径计算仍为权威依据
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 推理估计（`reasoned_estimate`）
## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide_before_allocation` | 可分离的羊群组、阶段和活动 | 在应用分配前，对可独立测量的动物类别、路线变体、挤奶、纤维采集、粪污处理和移交使用独立记录。 | `fao-leap-small-ruminants-2016` |
| `complete_intended_output_set` | 活山羊、奶、纤维、种用或淘汰动物及外运粪污 | 列举每项独立预期产出及其交接。将保留粪污归为内部流、有接收方的外运粪污归为 Product 流、死亡或不可用材料归为 Waste 流。 | `fao-leap-small-ruminants-2016`; `fao-leap-nutrient-flows-2018` |
| `output_attribution_decision` | 多产出过程实例 | 当细分不能消除共同负担时，记录一种 PCR 特异归属方法、产出数量和价格或其他驱动因素、期间、证据及敏感性，并一致应用于所有预期产出。 | `fao-leap-small-ruminants-2016` |
| `multi_period_attribution` | 跨时期的种用动物、补充动物、共享资产和产出 | 使用记录事件和服务时长，将负担归属于实际服务期、生物期或报告期。记录补充和终止决策，防止结转负担出现在两个期间。 | `fao-leap-small-ruminants-2016` |
| `shared_infrastructure_attribution` | 群组或时期共用的圈舍、围栏、供水、处理、挤奶、纤维、运输及粪污资产 | 列举所有消费者和服务期，尽可能选择并举证物理服务驱动因素，并使分配份额与资产或服务总负担仅核对一次。 | `fao-leap-small-ruminants-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_goat_events_weights` | `managed_goat_herd` | 山羊进入、出生、类别变化、死亡和移交 | 羊群事件登记和称量记录 | 动物 id 或批次；山羊类型；类别；性别；用途；事件；日期；实测体重；秤 id；来源或目的地 | 将羊群登记与经校准的个体或批次称量核对；原始汇总要求：按事件和类别汇总实测质量；仅使用类别特异抽样体重换算头数。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头；kg 活重 | 每次事件和移交 | 完整群组周期或所申报报告期 | 每个所代表羊群组和农场单元 | 每参考流 | 秤校准；事件台账核对；死亡去向证据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed_and_grazing` | `managed_goat_herd` | 饲料、牧草、灌木采食、放牧和转场 | 采购、日粮、牧场和移动记录 | 饲料身份；原物料质量；干物质比例；拒食质量；牧场或灌木面积；动物日；路线和日期 | 外购饲料使用发票和秤；日粮日志；放牧使用牧场和移动记录；原始汇总要求：将各来源换算为干物质，按类别和阶段分配，再按参考质量归一化。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 原物料；kg 干物质；ha；动物日 | 每次交付或日粮；每日或定期放牧记录 | 期间内所有饲喂阶段 | 每个所代表饲喂区域、路线和羊群组 | 每参考流 | 供应商分析或抽样干物质；库存平衡；路线日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_health_inputs` | `managed_goat_herd` | 兽医和羊群保健产品 | 药品、疫苗、消毒和处理日志 | 产品；配方或活性成分；用量；单位；动物类别；施用日期；用途 | 采购核对和处理登记；原始汇总要求：保留不同产品，仅汇总相同配方和单位。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 产品特异 | 每次采购和施用 | 完整报告期 | 每个所代表羊群组和农场单元 | 每参考流 | 发票；批次 id；处理记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_water_energy` | `managed_goat_herd` | 供应水和能源 | 仪表、发票、燃料和使用日志 | 来源或载体；数量；单位；计量期；用途；动物群；共享用户 | 仪表读数、发票、储罐或燃料日志，以及必要时的文件化估算；原始汇总要求：扣除无关用途；将共享总量仅一次归属至已识别消费者和期间。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；m3；kWh；MJ；载体单位 | 计量或交付间隔 | 含期初和期末读数的完整报告期 | 每个所代表仪表、供应点、羊群组和共享用户 | 每参考流 | 仪表 id 和读数；发票；换算因子；分配核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_inbound_transport` | `managed_goat_herd` | 入场材料货运 | 交付和路线记录 | 材料；运输质量；起点；目的地；距离；方式；装载份额 | 供应商文件、发运记录和有证据的路线距离；原始汇总要求：按路线和方式汇总质量乘距离。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | t；km；t*km | 每次纳入的交付 | 完整报告期 | 每条纳入的起点至农场路线 | 每参考流 | 发票或发运单；距离来源；装载份额证据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_intended_outputs` | `managed_goat_herd` | 奶、纤维、外运粪污及其他预期产出 | 产出测量和交接记录 | 产出身份；状态；数量；单位；日期；接收方；相关时的水分或干物质；价格或物理分配驱动因素 | 与接收方交接关联的校准仪表或秤；原始汇总要求：汇总相同产出状态和交接；归属前分别保留产出。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 及产出特异质量单位 | 每次采集或移交 | 完整报告期和相关阶段 | 每个所代表羊群组、采集点和接收方交接 | 每参考流 | 校准；销售或移交记录；质量或组成结果；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure_pathways` | `managed_goat_herd` | 粪污产生、沉积、贮存、处理、外运和排放 | 粪污和氮路径记录 | 类别和动物日；饲料摄入；消化率；排泄基础；路径份额；气候；贮存时长；处理；回收；外运；氮含量 | 羊群记录结合文件化 IPCC 或国家方法及实测移交；原始汇总要求：将路径份额核对至 100%；按路径计算气体，并一致扣除文件化回收或外运。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 挥发性固体；kg N；kg 粪污；kg CH4；kg N2O；kg NH3 | 每月或每次管理变化 | 报告期内产生的全部粪污 | 每个所代表羊群组、沉积区域、贮存、处理和外运路线 | 每参考流 | 方法层级；因子来源；可用时的实验室结果；路径平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_emission_drivers` | `managed_goat_herd` | 肠道甲烷 | 动物、日粮和排放方法记录 | 类别；动物日；体重；饲料摄入或总能；日粮；消化率；排放因子；层级 | 羊群和饲料记录结合文件化 IPCC 或国家方法；原始汇总要求：按类别和阶段计算，汇总期间排放后归一化。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 动物日；kg 干物质；MJ；kg CH4 | 每月或阶段变化 | 每个所代表类别和阶段 | 每个所代表羊群组和饲喂路线 | 每参考流 | 因子来源；计算工作簿；羊群和饲料核对；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_live_weight` | 参考产出 | 参考质量 = 符合条件的农场门口实测活重之和；归一化交换 = 参考质量/参考质量 | 移交体重；合格性；交接日期 | 1 kg 活山羊参考产出 | `fao-leap-small-ruminants-2016` |
| `calc_feed_dry_matter` | 饲料和牧草 | 干物质 = sum（原物料质量 × 实测或供应商干物质比例）− 有记录的拒食干物质 | 饲料交付；日粮；干物质比例；拒食 | 按来源和阶段的 kg 干物质 | `fao-leap-small-ruminants-2016`; `ipcc-2019-livestock-manure` |
| `calc_transport_service` | 纳入的入场货运 | 对实测交付，t*km = 本批货物交付吨数 × 纳入边界的路线公里数；不得再次乘以本批货物占整车载荷的份额。只有从有记录的整车运输总量起算时，才可将实测本批货物份额乘入该总量一次。核对纳入的路段，对可归属运输服务仅归一化一次。 | 本批交付质量；纳入的距离；或整车运输总量及实测本批份额 | 按路线和方式的可归属 t*km | `fao-leap-small-ruminants-2016` |
| `calc_enteric_methane` | 肠道甲烷 | 按山羊类别和阶段应用文件化 IPCC 或国家方法，使用群体及饲料或能量驱动因素；归一化前求和 | 动物日；类别；饲料或总能；消化率；所选因子 | kg CH4 | `ipcc-2019-livestock-manure` |
| `calc_manure_emissions` | 粪污 CH4、N2O 和 NH3 | 将排泄物分配至已核对路径；应用路径特异的挥发性固体和氮方法；一致扣除回收和转移养分；明确换算分子基础 | 动物日；摄入；排泄；路径份额；气候；时长；处理；外运；因子 | kg CH4；kg N2O；kg NH3；路径平衡 | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `calc_multi_output_shares` | 联合活山羊、奶、纤维和粪污产出 | 归属份额 = 某项预期产出的所选驱动值/所有预期产出相同驱动值之和；份额之和须为 1 | 完整产出集；数量；质量；价格或物理驱动因素；期间 | 文件化产出份额 | `fao-leap-small-ruminants-2016` |
| `calc_shared_asset_shares` | 共享基础设施 | 资产份额 = 某消费者—期间的有证据服务驱动值/所有消费者—期间相同驱动值之和；分配负担须与资产总量核对 | 资产负担；消费节点；服务期；驱动因素 | 按节点和期间分配的共享负担 | `fao-leap-small-ruminants-2016` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_gate` | 参考产品和预期产出 | 保留山羊类型、动物类别、用途、路线、产品状态、属性、交接及相关时的接收方；不得为未解析语义身份指定方便的 UUID。 | 移交和产出记录，以及前景生成时确认的流详情 |
| `dq_temporal_completeness` | 羊群、饲料、产出、粪污和资产 | 覆盖所申报群组周期或报告期，并记录期初羊群、进入、出生、退出、死亡、期末羊群、补充和部分周期处理。 | 已核对的羊群和期间平衡 |
| `dq_route_separation` | 替代生产路线 | 在计算路线结果前，保持路线特异的饲料、移动、圈舍、能源、粪污、产出和基础设施记录。 | 路线登记和独立活动总量 |
| `dq_mass_and_output_balance` | 动物和预期产出记录 | 核对活体动物质量事件，并在归属前列举全部独立预期产出；调查无法解释的缺口。 | 羊群事件平衡和产出交接台账 |
| `dq_manure_balance` | 粪污和氮路径 | 将路径份额核对至 100%，防止外运粪污中的氮又被计作排放或场内施用。 | 路径工作表和氮平衡 |
| `dq_shared_asset_reconciliation` | 共享基础设施 | 识别每个消费节点和期间，保留驱动因素与服务边界，并将份额与总负担仅核对一次。 | 资产登记和分配工作表 |
| `dq_uncertainty_disclosure` | 建模值和计算值 | 披露方法层级、因子地域和年份、估算方法、缺失记录、替代及暂定质量保证范围的影响。 | 计算文件、因子引文和数据质量声明 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_gate` | 参考活山羊交换 | 要求恰为 1 kg 归一化活重、生产农场门口、全部必需限定项，且参考交换中不含屠宰或出场后活动。拒绝将狭窄平台候选用于宽泛参考。 | `fao-leap-small-ruminants-2016` |
| `validate_route_delta` | 所选生产路线 | 要求一个命名的母体受管理生物生产活动，并为拓扑、清单、计算、数据或验证中的每项路线差异提供证据；在获得分别计算的结果前保留互斥路线记录。 | `fao-leap-small-ruminants-2016`; `fao-ruminant-lca-2013` |
| `validate_period_balance` | 群组和报告期 | 按类别满足：期初羊群 + 出生 + 进入 − 死亡 − 移交 = 期末羊群，但可有文件化类别变化；补充、终止和结转负担仅可出现在一种期间处理中。 | `fao-leap-small-ruminants-2016` |
| `validate_output_attribution` | 多产出实例 | 要求完整预期产出清单、每项交接、一项有证据的明确归属决策、份额之和为 1，以及使用经济或其他可变驱动因素时的敏感性。 | `fao-leap-small-ruminants-2016` |
| `validate_residue_waste_distinction` | 粪污、死亡动物、废弃奶和纤维 | 要求按目的地和证据区分预期移交产品、保留内部材料、残余物、损失和 Waste 流。 | `fao-leap-small-ruminants-2016`; `fao-leap-nutrient-flows-2018` |
| `validate_emission_basis` | CH4、N2O 和 NH3 | 要求指定物质、分子或元素基础、方法层级、因子来源、完整动物和粪污路径驱动因素及明确基础换算。 | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `validate_shared_infrastructure` | 共享资产和服务 | 要求两个或以上消费者或期间、服务边界、驱动因素、证据、与总量核对的份额，且无重复过程或期间负担。 | `fao-leap-small-ruminants-2016` |
| `validate_flow_binding` | 所有最终交换 | 待确认卡片须依据实际前景记录解析一个相容的具体 UUID；每张未绑定卡片均需精确身份确认。不得为强行匹配而使 UUID 选择改变方向、类型、状态、路线、供应者或交接。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 活山羊受管理生物生产与农场门口移交的前景数据包。 |
| downstream_use | 可支持单元过程数据集和关联生命周期模型；经审查后，仅可作为匹配山羊类型、路线、关口、地域、期间和联产品处理的次级或背景数据集。 |
| allowed_use | 保持所申报功能单位、产品边界、路线、饲料和粪污范围、产出归属、期间处理及数据质量披露的比较或核算研究。 |
| excluded_use | 直接替代绵羊或其他反刍动物；以山羊肉、奶、纤维、山羊皮或服务为参考产品；屠宰场门口或出场后系统；或未经适配的重大不同路线。 |
| required_metadata | 山羊物种或类型；动物类别和用途；重要时的性别；生产路线；地域；群组和报告期；放牧、灌木采食、舍饲、饲料、水、能源、健康、粪污、奶和纤维处理；活重基础；农场门口交接；分配和共享资产决策；流 UUID 证据。 |
| required_quality_disclosure | 前景覆盖、称量证据、饲料干物质换算、路线分离、羊群和产出平衡、粪污路径平衡、因子层级和地域、共享资产核对、缺失数据、替代、不确定性和未解析身份。 |
| update_trigger | 新的精确宽泛参考 UUID；分类边界变更；畜牧或粪污方法修订；新的来源支持范围；实际流身份或核验证据变化；重要路线证据；或反复验证失败。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-small-ruminants-2016` | official_guidance | FAO LEAP，*Greenhouse gas emissions and fossil energy use from small ruminant supply chains*，2016。https://openknowledge.fao.org/handle/20.500.14283/i6434en | 小型反刍动物边界、路线分解、饲料和羊群记录、预期产出、归属、期间处理及质量检查。 |
| `fao-gleam` | official_guidance | FAO，*Global Livestock Environmental Assessment Model*。https://www.fao.org/gleam | 山羊生产系统覆盖和畜牧路线背景。 |
| `fao-ruminant-lca-2013` | official_guidance | FAO，*Greenhouse gas emissions from ruminant supply chains — A global life cycle assessment*，2013。https://www.fao.org/docrep/018/i3461e/i3461e.pdf | 反刍动物路线类型、系统边界和归属背景。 |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP，*Nutrient flows and associated environmental impacts in livestock supply chains*，2018。https://openknowledge.fao.org/handle/20.500.14283/ca1328en | 粪污和氮路径、产品或废物区分，以及 NH3 和 N2O 核算。 |
| `ipcc-2019-livestock-manure` | method_factor | IPCC，*2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management*。https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 山羊类别、饲料和能量驱动因素、肠道甲烷、粪污甲烷、直接和间接 N2O 及必需活动数据。 |
