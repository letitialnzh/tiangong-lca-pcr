---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-raw-milk-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他特定动物的全脂生乳

## 1. 适用范围

本规则适用于一个明确物种在实际农场或第一收集交接点销售的全脂生乳，前提是该物种在 CPC 3.0 中不属牛、水牛、绵羊、山羊和骆驼。马乳或驴乳仅当具体批次实测达到脂肪门槛时才可能适用；其通常低脂的乳不能作为 02299 代表产品。牦牛属牛，牦牛乳不适用。脱脂、部分脱脂、脂肪低于 CPC 排除阈值 3.5% 的乳，以及巴氏杀菌、发酵或制造乳制品均不适用。阈值是分类门槛，不是调整乳脂的指令。不得合并物种创造平均乳。

边界包含物种特定的泌乳畜群、独立挤乳、初次过滤验收、实际进行的冷却以及交接包装。幼畜吸食、拒收和可售乳分开。仅当第一收集站是声明交接点且中间运输和冷却均有记录时将其纳入；否则止于产乳农场。购入生乳保留独立上游数据集，不可冒充本场产乳。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-raw-milk-n-e-c` |
| classification_refs | CPC 3.0 `02299`，须先核对物种及全脂生乳状态 |
| covered_products | 一个未被排除物种的温态或冷却全脂生乳 |
| excluded_products | 牛（含牦牛）、水牛、绵羊、山羊、骆驼乳；低于 3.5% 脂肪或脱脂/部分脱脂乳；加工乳 |
| representative_product | 仅当批次实测脂肪至少 3.5% 且分类经核实时的全脂驯鹿生乳；并非跨物种默认值 |
| production_route | 物种特定饲养泌乳 → 物理挤乳 → 初次验收 → 可选冷却 → 卫生交接 |
| market_state | 实际初始交接点净重验收的液态全脂生乳 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一个明确合格物种的验收全脂生乳 |
| How much | 扣除容器皮重后的净乳 1 kg |
| How well | 记录物种、检测脂肪和固形物、生乳状态、温度、批次、验收及来源 |
| How long or cycle | 明确泌乳/报告期，替换、干乳和淘汰阶段仅归属一次 |
| reference_flow_link | `gate_milk` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 已声明物种在实际初始交接点的全脂生乳 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 准确物种；分类决定；全脂生乳状态；实测脂肪/固形物；交接点；温度；期间；幼畜吸食量；验收/拒收净重；皮重 |

尚无与物种、状态、交接点完全相符的已核实参考 UUID；候选稿不能凭此生成具体交换。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | 参考乳 | Mass | kg | 按扣除皮重和拒收的称量净乳归一化，不用通用密度由升数推算质量。 |
| `composition` | 各批次 | 实测脂肪和固形物 | 报告质量分数 | 保留采样依据及温度；按实际批次判断 CPC 排除条件，不进行标准化。 |
| `phase_link` | 畜群 | 质量和时间 | kg、animal-days | 将繁殖、替换、泌乳、干乳、淘汰关联至报告期；吸食与挤出乳分开。 |
| `volume_to_mass` | 体积记录 | 批次适用的实测密度 | kg/L | 按实测温度换算或直接称重，并披露不确定性。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 已识别合格物种畜群、购入替换动物及饲料来源进入有记录的阶段 |
| starting_condition_role | 购入动物和饲料的上游负担仅进入一次；前景始于有记录的畜群管理 |
| product_classification_scope | 物种限定全脂生乳；转出的活畜、纤维和出售粪肥为不同产品身份 |
| recursive_input_rule | 同类购入生乳需要独立上游数据集及质量台账，不可重命名为本群产乳。 |
| upstream_dataset_requirement | 购入替换动物、饲料、公用服务及包装的相容数据集，不重复计入自产饲料。 |
| disclosure | 物种与 CPC 门槛、饲养方式、阶段、实际冷却、乳平衡、交接点、联产品分配及共用服务 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `species_gate` | 全部 | 核实来源不属牛（含牦牛）、水牛、绵羊、山羊和骆驼，且为全脂生乳，否则本 PCR 不适用。 | `un-cpc-3-2025` |
| `capture_once` | 畜群/挤乳 | 畜群泌乳与物理挤乳分开；总挤出乳只在挤乳节点出现，吸食乳只在畜群台账。 | `fao-other-dairy-animals` |
| `first_acceptance` | 初次调理 | 只记录实际过滤、采样与拒收；不虚构标准化或巴氏杀菌。 | `fao-dairy-hygiene` |
| `cooling_gate` | 冷却 | 冷却后仍为生乳，且只在实际发生时纳入；不含后续冷链。 | `fao-milk-preservation` |
| `handover_gate` | 交接 | 计入交接前实际容器及复用，不含交接后配送和消费者包装。 | `fao-dairy-hygiene` |
| `shared_services` | 全部 | 共用挤乳室、冷却罐、清洗及计量负担按使用节点和期间仅分配一次。 | `fao-dairy-hygiene` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd` | 合格物种畜群 | required | 泌乳与替换动物 | 生物生产及联产品/期间台账，不是物理挤乳 | animal-days |
| `milking` | 物理挤乳 | required | 每次挤乳 | 独立计量总乳和损失 | kg 总乳 |
| `conditioning` | 生乳初次验收 | required | 实际过滤、采样和拒收 | 挤出乳转为验收生乳 | kg 验收乳 |
| `cooling` | 生乳冷却 | conditional | 交接前实际发生 | 不经热处理稳定生乳 | kg 冷却乳 |
| `presentation` | 卫生交接 | required | 实际容器与净销售 | 转出唯一参考输出 | kg 可售净乳 |

温态乳绕过 `cooling`，不虚构冷却能源；中间乳为节点间转移，不是第二次最终销售。

### 过程：合格物种畜群（`herd`）

#### 输入

##### 产品流

###### 物种适宜饲料和牧草（`feed`）

区分外购、自种和放牧生物质，使用实测干物质，不套用牛日粮。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：按 calc_feed_supply_and_intake 分别建立饲料投入、采食及损失台账。承担饲料生产负担的数量包含边界内拒食、变质及未食用饲料，不得缩减为动物采食量。保留来源、物种/群体、阶段及原始质量/水分基准。最终贡献依 inventory_reference_normalization 和 stage_throughput_linkage 恰归一化一次。 原始采集分母类型：reference_flow.

- 选定流：声明物种的饲料与牧草
- 流属性/单位：Mass / kg dry matter
- 数量规则：采用保留边界内损失及其生产负担的已核对饲料投入记录，依 inventory_reference_normalization 和 stage_throughput_linkage 计算可归属最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定饲料 QA 筛查，非默认日粮
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg dry matter
  - 基准：每 kg 验收乳，以台账替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 畜群供水（`herd_water`）

只计饮水和管理用水，不含降雨或饲料水。实际用水功能和具体交换由畜群记录决定，因此此总括卡推迟选择组。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：只归于畜群的水表或交付记录。 原始采集分母类型：reference_flow。

- 选定流：畜群供水
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定供水 QA 筛查，非默认用水量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 kg 验收乳，以水表替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 购入替换动物（`replacements`）

只计有上游数据集的外购动物，自留幼畜仍属内部。

分母与范围要求：每 kg 验收乳，同时保留畜群报告期追溯事件

原始数量及计算要求：按年龄和期间记录进入事件。 原始采集分母类型：reference_flow。

- 选定流：声明物种的购入替换动物
- 流属性/单位：Number / head
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定替换事件 QA 筛查，非替换率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：head
  - 基准：每 kg 验收乳，来自畜群期间真实事件
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 出售幼畜或淘汰动物（`animals_sold`）

只包括实际独立转出，不包括自留替换。

分母与范围要求：每 kg 验收乳，同时保留畜群报告期追溯事件

原始数量及计算要求：按阶段记录销售台账和交付去向。 原始采集分母类型：reference_flow。

- 选定流：声明物种的出售活畜
- 流属性/单位：Number / head
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定销售事件 QA 筛查，非产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：head
  - 基准：每 kg 验收乳，来自畜群期间真实事件
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立出售的粪肥（`manure_sold`）

仅当粪肥作为独立材料在有记录交接点实际出售时才用产品身份；否则保持内部材料或废物。同一质量不得又计入 `manure_waste`。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：单独称量并保留买方/用途证据。 原始采集分母类型：reference_flow。

- 选定流：声明物种畜群出售的粪肥
- 流属性/单位：Mass / kg wet
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定出售粪肥 QA 筛查，非产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg wet
  - 基准：每 kg 验收乳，以实际出售质量为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收集未出售粪肥（`manure_waste`）

记录废物去向；放牧沉积和单独销售的粪肥不在此卡。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：按去向称量离场废粪肥。 原始采集分母类型：reference_flow。

- 选定流：需废物处理的收集粪肥
- 流属性/单位：Mass / kg wet
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定粪肥 QA 筛查，非产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg wet
  - 基准：每 kg 验收乳，以实测替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的肠道甲烷（`enteric_ch4`）

使用实测或有物种和日粮依据的因子，不自动借用牛因子。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：核实因子乘动物日或直接测量。 原始采集分母类型：reference_flow。

- 选定流：声明物种肠道发酵排入空气的甲烷
- 流属性/单位：Mass / kg CH4
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定排放 QA 筛查，非通用因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg CH4
  - 基准：每 kg 验收乳，以有据估计替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污生物源甲烷排放至空气（`review_herd_manure_ch4`）

按粪污系统、气候、停留时间及挥发性固体活动量计算实际大气排放。核对回收、销毁或氧化甲烷；产生量不自动等于排放量。 仅适用于实际运行的 `herd` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：生物源甲烷排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg CH4
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污直接氧化亚氮排放至空气（`review_herd_direct_n2o`）

使用实际粪污管理氮路径。贮存/处理须与田间施用和放牧沉积分开；后两者须使用管理土壤方法并明确清单核算责任。 仅适用于实际运行的 `herd` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氧化亚氮排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg N2O
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污氮引致的间接氧化亚氮排放至空气（`review_herd_indirect_n2o`）

适用时，由有记录的粪污氮挥发/沉降及淋溶/径流路径计算可归属间接 N2O。与直接 N2O 分开，并核对下游或所用背景/影响模型中已包含的氮去向计算。 仅适用于实际运行的 `herd` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氧化亚氮排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg N2O
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污氨排放至空气（`review_herd_nh3`）

采用真实物种、圈舍/贮存条件及有依据的氮流方法。逐阶段跟踪总氮和铵态氮；通用挥发氮估计可能包含其他氮物种，不能自动视为 NH3。 仅适用于实际运行的 `herd` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氨排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg NH3
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-eea-manure-2023`

### 过程：物理挤乳（`milking`）

#### 输入

##### 产品流

###### 设备供电点的电力（`milking_energy_electricity`）

**milking_energy 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

只计物理挤乳能源，与冷却及共用房间服务分开。
分母与范围要求：每 kg 挤出总乳
原始数量及计算要求：按实际挤乳时段分配表计。 原始采集分母类型：process_output。

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_milking` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milking`
- 来源：`fao-agricultural-energy`

#### 输出

##### 产品流

###### 挤出总生乳（`gross_milk`）

验收前从动物挤出的实测乳，不包括幼畜吸食乳。

分母与范围要求：每 kg 挤出总乳

原始数量及计算要求：每批仅称重一次。 原始采集分母类型：process_output。

- 选定流：声明物种的挤出全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking`
- 数量范围：挤乳批次恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 kg 挤出总乳
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

### 过程：生乳初次验收（`conditioning`）

#### 输入

##### 产品流

###### 进入初次调理的挤出乳（`condition_input`）

同一挤出批次只转入一次；洒漏在批次平衡中核算。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：称量扣除挤乳洒漏后的输入批次。 原始采集分母类型：reference_flow。

- 选定流：验收前收集的全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定验收输入 QA 筛查，非损失率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg
  - 基准：每 kg 验收乳，按实际拒收确定
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初次调理用水（`condition_water`）

计入实际过滤设备或卫生用水，不作乳配料。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：不含挤乳用水的调理表计。 原始采集分母类型：reference_flow。

- 选定流：生乳调理过程用水
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定调理用水 QA 筛查，非默认水量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 kg 验收乳，以表计为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 验收温态生乳（`accepted_warm`）

作为内部状态进入冷却或直接交接，不作第二次销售。

分母与范围要求：每 kg 验收温态乳

原始数量及计算要求：输入减去记录的拒收和采样损失。 原始采集分母类型：process_output。

- 选定流：声明物种的验收温态全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 数量范围：验收温态乳恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 kg 验收温态乳
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 初检拒收乳（`condition_reject`）

失败批次和去向只记录一次，不混入验收全脂乳。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：按原因和去向称量拒收。 原始采集分母类型：reference_flow。

- 选定流：初次调理拒收生乳
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定拒收 QA 筛查，非默认损失因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 kg 验收乳，按真实拒收测量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：生乳冷却（`cooling`）

#### 输入

##### 产品流

###### 送冷却的温态验收乳（`cool_input`）

仅实际冷却份额进入；温态直交乳绕过本节点。

分母与范围要求：每 kg 冷却乳

原始数量及计算要求：按批称量冷却罐输入。 原始采集分母类型：process_output。

- 选定流：声明物种的验收温态全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling`
- 数量范围：暂定冷却平衡 QA 筛查，非损失率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg
  - 基准：每 kg 冷却输出，损失实测
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 设备供电点的电力（`cool_energy_electricity`）

**cool_energy 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

只计实际冷却期间的制冷表计，不含交接后配送。
分母与范围要求：每 kg 冷却乳
原始数量及计算要求：按真实批次和时间计量或分配能源。 原始采集分母类型：process_output。

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_cooling` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling`
- 来源：`fao-agricultural-energy`

#### 输出

##### 产品流

###### 冷却全脂生乳（`cooled_milk`）

冷却后仍为生乳，只内部转交接，不重复出售。

分母与范围要求：每 kg 冷却乳

原始数量及计算要求：称量罐输出并计量损失。 原始采集分母类型：process_output。

- 选定流：声明物种的冷却全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling`
- 数量范围：冷却输出恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 kg 冷却输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

### 过程：卫生交接（`presentation`）

#### 输入

##### 产品流

###### 交接前温态或冷却验收乳（`gate_input`）

按批合计互斥的温态直交和冷却路线，不混物种或重复记内部状态。

分母与范围要求：每 kg 可售净乳

原始数量及计算要求：合计互斥的温态直交及冷却转移质量。 原始采集分母类型：reference_flow。

- 选定流：交接前声明物种的验收全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate`
- 数量范围：暂定交接平衡 QA 筛查，非损失率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg
  - 基准：每 kg 可售净乳，按实测拒收确定
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交接容器或内衬（`container`）

记录交接前容器、内衬、封口及复用次数。

分母与范围要求：每 kg 可售净乳

原始数量及计算要求：称重一次性材料，或按有据次数分配复用服务。 原始采集分母类型：reference_flow。

- 选定流：生乳卫生交接容器或内衬
- 流属性/单位：Mass / kg material 或有据服务量
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate`
- 数量范围：暂定包装 QA 筛查，非默认包装量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg material
  - 基准：每 kg 可售净乳，复用服务单独换算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 实际交接点验收净乳（`gate_milk`）

唯一参考销售为声明物种的全脂生乳净重，不含包装皮重。

参考产出的原始记录：连同物种、脂肪、温度及交接证据称量可售净乳。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 已声明物种在实际初始交接点的全脂生乳
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate`
- 数量范围：参考恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 kg 净参考乳
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `actual_outputs` | 畜群与乳 | 按真实交接列明乳和实际出售的活畜、纤维、粪肥或其他物种特定联产品；区分残余与废物，不因生物可能性虚构联产品。 | `fao-other-dairy-animals` |
| `joint_herd` | 不可分饲养活动 | 首先按因果使用拆分表计服务；不可分畜群负担有依据时用本地物理因果分配，否则披露期间一致的经济分配和敏感性。不默认全归乳或将淘汰动物设零。 | `review-fao-pig-lca-2018` |
| `offspring_milk` | 吸食 | 幼畜吸食乳留在畜群/幼畜台账，不是可售挤出乳或额外产品。 | `fao-other-dairy-animals` |
| `phase_once` | 替换/干乳/泌乳/淘汰 | 输入、输出和资产关联阶段期间，替换负担仅分配一次。 | `review-fao-pig-lca-2018` |
| `asset_once` | 房间/罐/表计/清洗 | 依表计、使用时间或披露的处理量份额将共用服务仅一次分配给实际节点与期间。 | `review-fao-pig-lca-2018` |
| `allocation_method_basis` | 剩余共同负担与共用服务 | 采用一般 LCA 层级：剩余分配前先考虑细分或有适当依据的系统扩展；随后优先使用有证据的物理因果关系，无法确立物理归属时才论证经济基准。供体日、占用时间或处理量驱动是本 PCR 的建模选择，须有个案证据及敏感性分析，并非卫生指南的要求。服务期间须包含失败尝试及损失；不得只选成功产出，也不得引入假设替代抵扣。 | `review-fao-pig-lca-2018` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd` | `herd` | 饲料、水、动物、粪肥、甲烷 | 畜群与供应台账 | 物种、动物编号、阶段日期、动物日、饲料干重、水、购入替换、吸食乳、出售动物、粪肥、有据 CH4 因子 | 对账畜群登记、发票和表计；原始汇总要求： 按 calc_feed_supply_and_intake 区分承担生产负担的饲料投入、实际采食量及损失；保留原生库存及期间记录，可归属量对合格最终产出归一化一次。 | head、days、kg | 事件及每月 | 全泌乳/替换 | 产乳畜群 | 每参考流 | 发票、校准和因子来源；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_milking` | `milking` | 挤出乳和能源 | 挤乳批次 | 批号、总重、洒漏、吸食依据、挤乳能源 | 批次称重和表计；原始汇总要求：对账总乳和转移。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、kWh | 每批 | 所有挤乳 | 挤乳站 | 每参考流 | 秤校准及批次记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_conditioning` | `conditioning` | 生乳输入、验收、拒收、用水 | 批次验收 | 输入、采样损失、拒收、验收、脂肪/固形物、生乳状态、水 | 称重和采样；原始汇总要求：按批平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、质量分数 | 每批 | 所有批次 | 初次调理站 | 每参考流 | 实验室、秤和拒收记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_cooling` | `cooling` | 温态输入、冷却输出、能源 | 罐体表计 | 批次、前后质量、时间、温度、能源 | 称重及表计；原始汇总要求：输入减损失等于输出。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、°C、kWh | 冷却批 | 实际冷却 | 声明罐体 | 每参考流 | 表计/温度计校准；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_gate` | `presentation` | 净乳与容器 | 交接记录 | 批次、物种、净乳、皮重、脂肪、温度、交接点、包装质量/复用、损失 | 净重称量与容器检查；原始汇总要求：只计验收净重。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、°C | 每次销售 | 所有参考销售 | 农场/第一收集交接点 | 每参考流 | 签字交接和实验室记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_pathway_emissions` | `herd` | 路径专属气体及粪污氮/碳 | 动物、饲料、粪污、田间及方法台账 | 物种/类别；动物日；采食/干物质/消化率；挥发性固体；粪污氮/铵态氮；系统份额；气候；贮存时间；肥料氮；放牧；挥发/淋溶；甲烷回收；因子来源/单位；最终合格产出 ；收集粪污湿质量；干物质；去向| 按节点及期间采集一手活动数据，证明参数适用性，保留各路径计算表及链接的处理/牧地数据集  保留原始总量，可归属数量仅对实测最终合格参考产出归一化一次。| animal-day；kg DM；kg VS；kg N；kg CH4；kg N2O；kg NH3 | 各运行期间及管理变化时 | 完整所代表群体与服务期间 | 仅实际运行节点 | 每参考流 | 计量/分析记录、氮级联、方法与因子证据、防重复台账 |
| `cp_feed_supply_and_intake` | `herd` | 饲料投入、采食及损失 | 库存、收货、发料及损失台账 | 饲料身份/来源；群体/阶段；期间；期初/期末库存；收货；自产供给；未用退回/转出；未食用/变质质量及去向；原物/干物质；实际采食量；负担归属；合格最终产出 | 按 calc_feed_supply_and_intake 核对匹配的库存、称重、日粮/采草估算及处置记录。保留原始总量及阶段分母，生产与处理负担各归属一次，再对合格最终产出归一化。 | kg as-fed; kg DM | 每次发料及期间结算 | 完整所代表群体/期间 | 实际运行饲喂节点 | 每参考流 | 库存及供应商记录；水分证据；损失及无重复核算核对 |
| `cp_manure_n2o_coverage` | `herd` | 粪污/土壤直接及间接 N2O 覆盖 | 分路径氮台账及方法计算表 | 物种/类别；期间；排泄氮；阶段库存/转移；系统份额；挥发 NH3-N/NOx-N；淋溶/径流氮；施用/放牧氮；因子来源、单位及适用性；直接/间接分项；接受介质；已链接过程及归属卡；合格最终产出 | 按 calc_manure_n2o_coverage 保留原始阶段氮及分项计算，并匹配实际作业与现有粪污协议。记录缺证据或不适用路径及覆盖边界，可归属 N2O 归一化一次。 | kg N; kg N2O | 每个报告期间及管理变化 | 完整所代表管理期间 | 实际运行及明确链接节点 | 每参考流 | 氮平衡、因子单位/适用性、分项到卡片及无重复核算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_balance` | 乳路线 | 挤出 = 洒漏 + 调理输入；调理输入 = 验收 + 拒收 + 采样损失；温态直转 + 冷却转出 = 交接输入；交接输入 = 净销售 + 有记录的损失。 | 校准批次质量 | 平衡净 kg | `fao-dairy-hygiene` |
| `feed_dry` | 饲料 | 湿饲料只按实测干物质比例换算；不套用通用日粮或产量。 | 饲料质量和样品 | 每 kg 净乳干重 kg | `fao-other-dairy-animals` |
| `shared_split` | 设施 | 一项资产/表计负担按节点及期间的真实使用份额分配，份额和为一。 | 表计/服务台账 | 不重复节点负担 | `fao-dairy-hygiene` |
| `volume_mass` | 升数记录 | 乳 kg = L × 批次及温度适用的实测密度；否则直接称重。 | L、密度、温度 | 乳 kg | `fao-dairy-hygiene` |
| `calc_pathway_emissions` | `herd` | 采用物种和管理方式相容的方法，保留分路径总量。N2O-N 乘 44/28 转为 N2O，NH3-N 乘 17/14 转为 NH3，且恰换算一次；已为分子质量者不得重算。依据有记录的可用碳/甲烷潜力平衡检查甲烷，并按各阶段可用氮核对氮损失。已挥发氮引致的间接形成是下游转化，不是源阶段第二次氮损失。归属及归一化只做一次，不重复计入链接处理或去向模型中的排放。  物理筛查采用分配前、同一原始期间的数量：CH4 质量 × 12/16 不得超过所代表路径的可用碳；源阶段 NH3 质量 × 14/17、直接 N2O 质量 × 28/44 与其他源阶段氮损失之和，在核对库存及转移后不得超过该阶段可用氮。各项间接 N2O-N 计算以有记录的挥发氮或淋溶氮前体为上限，不再从源台账扣除该下游转化。这些是守恒检查，不是排放因子或经验单位产品区间。| `cp_pathway_emissions` | 每最终参考流的指定化合物 kg | `review-ipcc-livestock-2019`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `feed` | 所代表作业使用的饲料投入 = 期初饲料库存 + 收货 + 进入本作业的自产饲料 - 期末饲料库存 - 有记录的未用退回或转出。该投入保留边界内变质、拒食及被丢弃的剩余料。实际采食量 = 该投入 - 实测未食用/丢弃损失，并匹配水分/干物质与期间；采食量仅用于营养及代谢计算。期初库存承接原有负担，不是再次采购。追溯未用退回或转出的物料及负担去向，不自动给予替代抵扣。同一饲料的生产负担由采购饲料数据集或已建模自产作物/采集节点承担一次，不得两者并计。实际废料处理及粪污贡献计一次，不再次添加饲料生产负担。 | `cp_feed_supply_and_intake` | 同一原物/干物质基准下分开的饲料投入、采食及损失数量 | `review-fao-pig-lca-2018` |
| `calc_manure_n2o_coverage` | `review_herd_direct_n2o`; `review_herd_indirect_n2o` | 按真实粪污阶段，采用有记录的物种/系统活动量及因子基准，分别计算直接 N2O、挥发/沉降引致间接 N2O，以及适用的淋溶/径流引致间接 N2O。N2O-N 乘 44/28 恰换算一次为分子态 N2O；已为分子质量的不得再次换算。保留分项计算表。现有 N2O 卡同时覆盖直接与间接排放时，填报其不重叠总和；已有直接/间接独立卡时，每个分项只归入对应卡，不再另报总和。放牧沉积及田间施用采用管理土壤方法，不套用粪污贮存因子。明确前景与已链接处理/牧地数据的核算责任；粪污转出不消除此前排放，已覆盖的下游排放不得重复。氮级联核对库存、转移及此前氮损失；间接 N2O 是前体的下游转化，不再次视为源阶段氮损失。可归属分子质量对合格参考产出归一化一次。记录不适用依据；路径数据缺失不等于零。 | `cp_manure_n2o_coverage` | 按路径及现有归属卡分开的 kg 分子态 N2O | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `species_identity` | 参考 | 必须有准确物种、全脂生乳状态和脂肪门槛检查。 | 分类/批次和实验室记录 |
| `milk_reconciliation` | 所有节点 | 批次转移、拒收、幼畜吸食及皮重各自独立。 | 秤、批次及交接记录 |
| `period_completeness` | 畜群 | 动物日及替换/干乳/泌乳/淘汰覆盖声明期间。 | 完整畜群登记 |
| `shared_trace` | 基础设施 | 列明使用者、期间及份额，每项共同负担仅入账一次。 | 表计/服务记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `verify_species` | 参考 | 拒绝牛（含牦牛）、水牛、绵羊、山羊、骆驼及未识别物种乳。 | `un-cpc-3-2025` |
| `verify_state` | 参考 | 拒绝低于 3.5% 脂肪、脱脂/部分脱脂、巴氏杀菌、发酵或制造乳；仅冷却可保留。 | `un-cpc-3-2025` |
| `verify_mass` | 所有乳节点 | 一个物理挤乳、内部转移及一个最终净销售平衡；不纳入吸食、拒收和皮重。 | `fao-dairy-hygiene` |
| `verify_attribution` | 畜群/设施 | 每项真实联产品交接、替换期间和共用表计仅归属一次。 | `fao-other-dairy-animals` |
| `verify_binding` | 交换生成 | 未核实 UUID 不得成为最终 TIDAS 交换；核对类型、物种/状态/交接点、属性/单位和支持行。 |  |
| `v_pathway_emission_coverage` | `herd` | 要求路径覆盖台账，包含生物学适用时的肠道 CH4、粪污 CH4、直接/间接 N2O、NH3 及相关田间排放。每条路径须有实测/计算量、覆盖匹配的明确链接过程，或有依据的不适用结论；缺数据不得记零。捕获前的野生生活不纳入受管理饲养，实际受管理留置须另行评估，并保留物种专属证据。 | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | 实际运行节点及链接服务 | 适用时记录现场燃料燃烧及制冷剂泄漏的核算责任：须为量化前景排放，或明确覆盖它们的具名链接过程，不能仅凭燃料供应或电力生产投入视为已包含。特殊类群生物及残余物排放须依物种/路线证据评估，不套通用畜牧因子。标明尚未落实的路径，不宣称清单完整；记录有依据的不存在结论并防止上/下游重复核算。 | |
| `v_feed_supply_intake_separation` | 全部饲料投入 | 拒绝扣除边界内拒食、变质或丢弃剩余料且未保留其生产负担的上游饲料清单。按 calc_feed_supply_and_intake 核对投入、采食、库存、转移及损失去向。不得把采食量当作饲料投入，不得假设自产饲料零负担或自动给予替代产品抵扣。 | `review-fao-pig-lca-2018` |
| `v_manure_n2o_coverage` | 适用粪污及管理土壤氮路径 | 须明确直接及间接路径覆盖、阶段氮平衡及分子质量换算。按 calc_manure_n2o_coverage，将各分项归入现有 N2O 卡或明确覆盖的已链接过程一次。间接路径证据缺失时不得宣称完整；不得默认零值或把汇总值与分项重复并计。 | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 物种特定全脂生乳前景包，原始记录和身份未核实前保持候选 |
| downstream_use | `secondary_dataset`；仅在来源及代表性审查后可作 `background_dataset` |
| allowed_use | 一个合格物种在声明初始交接点的全脂生乳 |
| excluded_use | 跨物种平均、被排除物种、加工/低脂乳、无记录的收集链 |
| required_metadata | 物种/CPC 核查、地点/期间、脂肪/采样/温度、实际交接点、净重/拒收/吸食、必要密度、联产品、分配及供应来源 |
| required_quality_disclosure | 实测与估算字段、采样/校准覆盖、未解析 UUID 和共用服务不确定性 |
| update_trigger | 物种分类、产品状态、交接点、路线、已核实 UUID 或重要原始数据改变 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | [UN CPC 3.0 解释性说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf)及[02299 详情](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/02299) | 物种、生乳身份和排除 |
| `fao-other-dairy-animals` | official_guidance | [FAO 其他乳用动物](https://www.fao.org/dairy-production-products/dairy/other-animals/en) | 物种依赖的饲养泌乳背景，不替代 CPC 分类 |
| `fao-milk-preservation` | official_guidance | [FAO 乳保藏](https://www.fao.org/dairy-production-products/processing/milk-preservation/en) | 冷却和生乳路线区分 |
| `fao-dairy-hygiene` | official_guidance | [FAO/Codex 乳卫生](https://www.fao.org/4/j2308e/j2308e02.htm) | 收集、处理和批次追踪 |
| `fao-milk-composition-2013` | official_guidance | [FAO《人类营养中的乳及乳制品》(2013)，第 3 章](https://www.fao.org/4/i3396e/i3396e.pdf) | 驯鹿乳高脂示例、马/驴乳低脂警示；实际批次仍需实测 |
| `review-fao-pig-lca-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains: Guidelines for assessment, section 11.2.2 and Appendix 2.13](https://www.fao.org/4/i8686en/I8686EN.pdf) | 饲料损失核算及一般 LCA 分配层级；向其他类群或繁殖产品的应用是本 PCR 明示的方法学选择，不移植猪的参数 |
| `review-ipcc-livestock-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | 物种与路径适用性；CH4 和 N2O 方法选择，不作为通用排放因子 |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 氮流方法；采用参数前核实实际物种、管理方式及地域适用性 |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | 管理土壤直接及间接氮路径与边界核对 |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
