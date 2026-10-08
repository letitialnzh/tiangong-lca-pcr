---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-goats
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 山羊生乳

## 1. 范围与适用性

本规则覆盖生产奶羊场门交付的、未经加工且被验收的山羊生乳：初次农场处理后的温奶，以及由该农场冷却的奶。范围包括泌乳与更新羊群、饲料与水、肠道发酵与粪污路径、独立挤奶采集、初次过滤与质量验收，以及有条件的农场冷却。放牧和舍饲是同一羊群节点的不同实施路线：前者记录采食草量和牧场排粪，后者记录交付饲料和收集粪污；混合路线两者均记但羊只日数不可重复。排除独立收奶或冷却中心、出门后运输、巴氏杀菌、标准化和消费包装。不得代用绵羊、牛或水牛乳。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-goats` |
| classification_refs | CPC 3.0 `02292` |
| covered_products | 生产奶羊场门交付的温山羊生乳或农场冷却山羊生乳 |
| excluded_products | 其他畜种乳、加工乳、独立收奶或冷却中心交付的乳 |
| representative_product | 按实收质量验收的未加工山羊乳 |
| production_route | 受管理羊群 → 独立挤奶采集 → 农场初次处理 → 可选农场冷却；说明放牧、舍饲或混合路线 |
| market_state | 生产农场门交付的未加工液态温奶或农场冷却奶 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 生产奶羊场门被验收的山羊生乳 |
| How much | 按实收质量计 1 kg 验收奶 |
| How well | 声明山羊种属、未加工状态、温度、脂肪/蛋白或固形物、拒收量和抽样依据 |
| How long or cycle | 跨泌乳和更新阶段的确定报告期；披露羊群期间归因 |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 生产奶羊场门山羊生乳 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 山羊种属；农场标识；泌乳与更新期间；羊群路线；验收与拒收质量；温奶或农场冷却状态；乳温；脂肪/蛋白或固形物；交付门点 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

覆盖温奶与冷却奶的宽口径参考流尚无已核实的单一 UUID。仅 `chilled_milk` 可使用冷却特定身份。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_mass` | 参考乳 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单按实测验收奶归一；拒收与损耗仅扣除一次。 |
| `milk_quality` | 验收乳 | 实测脂肪/蛋白或固形物 | 报告的浓度基准 | 保留与具体批次或期间对应的成分、温度和抽样依据；不得暗中标准化乳质量。 |
| `period_link` | 羊群与乳 | 质量和时间 | kg, days | 归一前把羊只日数、饲料、更新和粪污记录关联到产乳报告期。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 已在或进入受管理羊群的山羊；明确外购更新羊和饲料 |
| starting_condition_role | 从有记录的羊群进入及饲料购买/放牧边界开始的前景生产 |
| product_classification_scope | 仅山羊生乳；活羊和独立交付可用粪污保留不同身份 |
| recursive_input_rule | 同类别外购山羊生乳需要上游数据集与独立质量平衡，不得把它再计为本前景乳输出。 |
| upstream_dataset_requirement | 对外购更新羊、饲料、公用工程和其他购买投入使用已核实上游数据集；若活羊 PCR 上游数据已含更新羊负担，不得再加一次。 |
| disclosure | 场门、放牧/舍饲份额、羊群与泌乳期间、饲料来源、粪污去向、乳温与拒收、共用设备及输出归因 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `farm_gate` | 所有路线 | 在生产农场验收生乳交付时结束；排除独立收奶/冷却及后续加工。 | `fao-small-ruminant-2016` |
| `separate_capture` | 挤奶 | 挤奶是从羊群到原始采集乳的独立计量交接；挤奶服务不得在羊群清单再计。 | `fao-small-ruminant-2016` |
| `conditional_cooling` | 冷却 | 仅实际在场门前由生产农场冷却的乳适用冷却节点；温奶绕过此节点。 | `fao-small-ruminant-2016` |
| `route_delta` | 羊群 | 放牧/舍饲/混合改变饲料来源、粪污地点及能源或圈舍记录；羊只日数保持同一本账。 | `fao-small-ruminant-2016` |
| `phase_boundary` | 羊群 | 按期间记录泌乳、干奶/更新与淘汰事件；跨期间负担仅归到输出一次。 | `fao-small-ruminant-2016` |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd` | 受管理山羊群 | required | 农场管理的泌乳与更新羊 | 乳生产潜力、饲水、动物和粪污责任 | 羊只日数及验收乳期间 |
| `milking` | 挤奶采集 | required | 每个验收或拒收的挤奶批次 | 从羊群独立采出并交付采集液态乳 | 采集乳总质量 kg |
| `conditioning` | 农场初次乳处理 | required | 生产农场过滤、初次质检和验收 | 从原始采集乳到验收温奶及拒收物 | 验收温奶 kg |
| `cooling` | 农场乳冷却 | conditional | 生产农场在场门前冷却乳 | 从验收温奶到稳定冷却乳 | 验收冷却奶 kg |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

羊群节点的预期产乳仅交给挤奶一次；挤奶处实测总乳量，不能再作为独立销售。放牧采食与舍饲饲料按场址记录区分。羊羔/淘汰羊和可用外售粪污仅在真实独立交付时为联产品；残余粪污和拒收乳属于废物或内部处理，不虚构销售。

### 过程：受管理山羊群（`herd`）

#### 输入

##### 产品流

###### 饲料、粗饲料与放牧生物量（`feed`）

按干物质和来源记录外购饲料及实际采食草量；区分外购投入和已包含在前景边界内自产的饲料。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：按羊只日数分配饲料台账及实测或有依据的采食量。 原始采集分母类型：reference_flow。

- 选定流：山羊饲料与粗饲料
- 流属性/单位：Mass / kg dry matter
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定饲料完整性筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kg dry matter
  - 基准：每 kg 验收乳；以羊群记录替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 羊群供水（`herd_water`）

记录跨越羊群边界的饮水和受管理清洁用水；降雨不是此产品投入。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：水表或交付记录分配到羊群，排除挤奶与初次处理水表。 原始采集分母类型：reference_flow。

- 选定流：羊群供水
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定羊群供水筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 kg 验收乳；以水表数据替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购更新羊（`replacements`）

仅包括从场外进入奶羊群的动物；已核实的活羊上游负担只使用一次。

分母与范围要求：跨归因期间每 kg 验收乳

原始数量及计算要求：记录进入活重，并分配到实际生产期间。 原始采集分母类型：reference_flow。

- 选定流：外购更新山羊
- 流属性/单位：Mass / kg live weight
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定更新羊筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg live weight
  - 基准：每 kg 验收乳；以羊群登记替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 独立交付羊羔和淘汰羊（`live_goats`）

仅计有记录的动物交付；保留的更新羊是内部转移而非销售输出。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：按动物类别和交付日称重或抽样估算交付活重。 原始采集分母类型：reference_flow。

- 选定流：活羊羔与淘汰山羊
- 流属性/单位：Mass / kg live weight
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定活羊交付筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg live weight
  - 基准：每 kg 验收乳；以交付记录替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立外运可用粪污（`manure_export`）

仅计有实际利用接收方的粪污；留在牧场或作为废物处理者不是此联产品。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：按接收方和日期记录外运质量及含水率。 原始采集分母类型：reference_flow。

- 选定流：独立交付的可用山羊粪污
- 流属性/单位：Mass / kg wet mass
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：暂定外运粪污筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kg wet mass
  - 基准：每 kg 验收乳；以粪污台账替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 待管理残余粪污（`manure_residue`）

记录非独立产品交付的收集或沉积粪污，并按位置纳入牧场排粪。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：按圈舍、储存、施地和牧场沉积平衡粪污；不可与外运粪污重复。 原始采集分母类型：reference_flow。

- 选定流：残余山羊粪污
- 流属性/单位：Mass / kg wet mass
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：暂定残余粪污筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kg wet mass
  - 基准：每 kg 验收乳；以平衡表替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的肠道生物源甲烷（`enteric_ch4`）

依据有证据的羊群方法和羊只日数计算肠道甲烷，与粪污甲烷分开。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：按山羊类别和羊只日数应用声明的 IPCC 肠道方法；披露系数和气候假设。 原始采集分母类型：reference_flow。

- 选定流：Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
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
- 数量范围：暂定肠道甲烷筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 验收乳；以计算值替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 排入空气的粪污生物源甲烷（`manure_ch4`）

按实际分配的各粪污管理路径计算甲烷，必要时包括牧场沉积。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：使用声明的 IPCC 粪污路径方法，不能再次套用肠道结果。 原始采集分母类型：reference_flow。

- 选定流：Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
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
- 数量范围：暂定粪污甲烷筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 验收乳；以计算值替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 排入空气的粪污氧化亚氮（`manure_n2o`）

按山羊氮和路径计算直接粪污系统氧化亚氮；间接影响应另行声明。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：使用声明的 IPCC 粪污氮和路径方法，注明挥发及淋溶边界。 原始采集分母类型：reference_flow。

- 选定流：Nitrous oxide to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
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
- 数量范围：暂定粪污氧化亚氮筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 kg 验收乳；以计算值替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 排入空气的粪污氨（`manure_nh3`）

仅当所选方法支持时记录实际粪污路径的氨挥发。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：按收集的粪污氮和选定挥发系数计算，并保留系数证据。 原始采集分母类型：reference_flow。

- 选定流：Ammonia to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
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
- 数量范围：暂定粪污氨筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 kg 验收乳；以计算值替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：挤奶采集（`milking`）

#### 输入

##### 产品流

###### 挤奶能耗（`milking_energy`）

包括挤奶设备实测电力或燃料，不包括冷却能耗。

分母与范围要求：每 kg 采集乳总量

原始数量及计算要求：按挤奶班次分配水电表或燃料台账。 原始采集分母类型：process_output。

- 选定流：挤奶设备能源
- 流属性/单位：Energy / kWh equivalent
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking`
- 数量范围：暂定挤奶能源筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kWh equivalent
  - 基准：每 kg 采集乳总量；以计量数据替代
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采集山羊生乳总量（`gross_milk`）

初次过滤和验收前计量羊乳；此内部交接并非场门销售。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：汇总经校准的挤奶批次质量，包括后续被拒收部分。 原始采集分母类型：reference_flow。

- 选定流：采集山羊生乳总量
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking`
- 数量范围：采集总量与验收量平衡筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：10
  - 单位：kg
  - 基准：每 kg 验收乳；以批次平衡替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：农场初次乳处理（`conditioning`）

#### 输入

##### 产品流

###### 初次处理用水（`conditioning_water`）

条件性统括卡：仅记录实际跨界、用于过滤、设备卫生及初次农场质量准备的供水，排除羊群饮水。依据场址记录确定具体水功能。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：按水表或批次清洗记录分配。 原始采集分母类型：reference_flow。

- 选定流：初次处理用水
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定初次处理用水筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 kg 验收乳；以水表数据替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收温山羊生乳（`warm_milk`）

此乳可作为温奶在场门交付，或进入可选农场冷却节点；冷却批次不得再作为温奶销售。

分母与范围要求：场门每 kg 验收乳

原始数量及计算要求：采集总量减初次处理拒收；分别记录温奶场门交付及冷却转移。 原始采集分母类型：reference_flow。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：验收温山羊生乳
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 数量范围：温奶平衡筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 验收乳；温奶交付或送冷却批次
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 初次处理拒收乳与残留物（`conditioning_reject`）

记录拒收或洒漏乳与过滤残留物及其处理，不得赋予验收奶状态。

分母与范围要求：每 kg 验收乳

原始数量及计算要求：实测拒收乳质量，并单独描述残留物去向。 原始采集分母类型：reference_flow。

- 选定流：拒收山羊生乳及过滤残留物
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定初次处理拒收筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 验收乳；以拒收台账替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：农场乳冷却（`cooling`）

#### 输入

##### 产品流

###### 农场冷却能耗（`cooling_energy`）

仅包含场门前受生产农场控制的冷却设备能源。

分母与范围要求：每 kg 农场冷却验收乳

原始数量及计算要求：冷却表计或设备台账；共用罐服务仅分配一次。 原始采集分母类型：process_output。

- 选定流：农场冷却能源
- 流属性/单位：Energy / kWh equivalent
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling`
- 数量范围：暂定农场冷却能源筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kWh equivalent
  - 基准：每 kg 农场冷却乳；以计量数据替代
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 场门验收冷却山羊生乳（`chilled_milk`）

这是生产农场门交付的验收冷却乳，不是收奶中心后续冷却的乳。

分母与范围要求：场门每 kg 验收乳

原始数量及计算要求：扣除冷却拒收或洒漏后，计量场门冷却验收乳。 原始采集分母类型：reference_flow。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：Raw goat milk, chilled, farm gate `2c001731-6bd5-4e32-b3cf-15f4c67d4038`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling`
- 数量范围：冷却奶平衡筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：场门每 kg 验收乳；以交付台账替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 冷却损失及拒收冷却乳（`cooling_reject`）

记录农场控制冷却期间洒漏或拒收的乳；不得计入验收冷却输出。

分母与范围要求：场门每 kg 验收乳

原始数量及计算要求：输入温奶减验收冷却乳，记录拒收原因和去向。 原始采集分母类型：reference_flow。

- 选定流：冷却损失及拒收山羊生乳
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling`
- 数量范围：暂定冷却拒收筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 验收乳；以罐体平衡替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 生产奶羊场门山羊生乳（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `warm_milk`, `chilled_milk` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`warm_milk`, `chilled_milk`

必需产品实例限定项：山羊种属；农场标识；泌乳与更新期间；羊群路线；验收与拒收质量；温奶或农场冷却状态；乳温；脂肪/蛋白或固形物；交付门点

- 选定流：生产奶羊场门山羊生乳（实际生产者交付关联）
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

###### 生产奶羊场门山羊生乳 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`warm_milk`, `chilled_milk`

必需产品实例限定项：山羊种属；农场标识；泌乳与更新期间；羊群路线；验收与拒收质量；温奶或农场冷却状态；乳温；脂肪/蛋白或固形物；交付门点

- 选定流：生产奶羊场门山羊生乳
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
| `output_set` | 羊群及场门 | 列出验收乳、独立交付羊羔/淘汰羊及可用外运粪污；残余粪污、死亡动物与拒收乳并非自动联产品。每个交付仅记录一次。 | `fao-small-ruminant-2016` |
| `allocation_order` | 多输出羊群 | 优先按独立计量活动作物理划分；不可分羊群负担应基于羊群能量/饲料及乳与活体生长数据作一致的生物物理分配。若不可行，披露并证明其他经审查的分配基准；不得默认为羊羔或外运粪污零负担。 | `fao-small-ruminant-2016` |
| `period_attribution` | 羊群生命周期 | 标记泌乳、干奶/更新和淘汰阶段；跨期饲料、更新及资本负担仅归到实际服务和输出期间一次，不得通过活羊上游数据再次分配。 | `fao-small-ruminant-2016` |
| `shared_assets` | 挤奶与冷却 | 按消费节点和服务期间列账共用建筑、水电表、罐及设备；按计量使用量或有记录的容量时间份额分配，不得重复计入完整资产负担。 | `fao-small-ruminant-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd` | `herd` | 饲料、水、更新与动物输出 | 羊群与采购台账 | 山羊类别；头数；羊只日数；泌乳阶段；饲料干物质；放牧估计；水；购买和交付活重 | 农场记录、秤、发票和水表；原始汇总要求：按类别与阶段合计；仅归因一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, head, days | 每日和事件 | 完整产乳报告期及更新阶段 | 生产羊群 | 每参考流 | 签字台账、称重与发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure` | `herd` | 外运与残余粪污 | 粪污路径台账 | 圈舍/牧场份额；收集；储存；外运质量；含水率；接收方 | 地磅、农场日志及路径核查；原始汇总要求：按互斥去向平衡全部粪污。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, days | 每日和事件 | 完整报告期 | 羊群牧场及圈舍 | 每参考流 | 交付凭证与路径记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_emissions` | `herd` | 空气排放 | 方法工作表 | 羊只日数；饲料能量；氮；粪污路径；系数；气候 | 基于 `cp_herd` 和 `cp_manure` 按声明的 IPCC 方法计算；原始汇总要求：不同肠道与粪污项各计一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 报告期 | 同一羊群期间 | 排放农场 | 每参考流 | 系数出处与计算表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_milking` | `milking` | 总乳量与能源 | 批次计量日志 | 羊群；乳 kg；挤奶时间；表计；后续拒收 | 校准乳秤及能源表；原始汇总要求：合计批次总乳量及分配挤奶能源。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, kWh | 每次挤奶 | 完整报告期 | 生产农场 | 每参考流 | 校准与班次记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_conditioning` | `conditioning` | 验收温奶、拒收及水 | 批次质量与清洗记录 | 总 kg；过滤损失；拒收 kg；温度；脂肪/蛋白或固形物；水 | 秤、抽样及水表；原始汇总要求：总量 = 验收温奶 + 拒收/损失；温奶只向场门或冷却转移一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, concentration | 每批 | 完整报告期 | 生产农场 | 每参考流 | 检验单和拒收去向；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_cooling` | `cooling` | 冷却乳与能源 | 农场冷却日志 | 温奶输入 kg；冷却输出 kg；温度；能量；时间；损耗 | 校准罐及能源表；原始汇总要求：温奶输入 = 验收冷却乳 + 冷却损失；不重复温奶销售。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, kWh, temperature | 每冷却批次 | 仅农场控制冷却期间 | 生产农场 | 每参考流 | 罐日志及交付凭证；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `milk_balance` | 乳批次 | 采集总乳 = 验收温奶 + 初次处理拒收；验收温奶 = 温奶场门交付 + 冷却输入；冷却输入 = 冷却奶场门交付 + 冷却损失。 | `cp_milking`, `cp_conditioning`, `cp_cooling` | 验收参考 kg 与损失 | `fao-small-ruminant-2016` |
| `herd_intensity` | 羊群投入 | 经记录的输出与期间归因后，期间分配量 / 验收乳 kg。 | `cp_herd`, `cp_manure`, `cp_conditioning` | 参考流归一的羊群清单 | `fao-small-ruminant-2016` |
| `enteric_and_manure` | 空气排放 | 按声明的 IPCC 路径与系数分别计算山羊肠道甲烷和粪污 CH4/N2O；仅在有挥发方法记录时计算氨。 | `cp_emissions` | 各物质排入空气 kg | `ipcc-livestock-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `species_route` | 羊群 | 证明山羊种属、实际放牧/舍饲份额及各类羊只日数；不得无解释地采用牛或绵羊系数。 | 羊群登记、放牧与圈舍记录 |
| `mass_balance` | 乳 | 按批次关联验收、拒收和冷却转移；保存温度与质量抽样依据。 | 签字批次平衡表及检验单 |
| `phase_match` | 分配 | 对齐动物、饲料、粪污、更新与资产记录和实际泌乳及报告期。 | 带日期的羊群与资产台账 |
| `identity_gap` | UUID | 在活跃或发布使用前解析宽口径参考流和每个未绑定输出/管理流身份。 | 流详情与支持行核对 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_check` | 参考流 | 确认山羊生乳为温奶或由生产农场冷却；不得以独立中心乳或加工乳作为本参考流。 | `fao-small-ruminant-2016` |
| `route_check` | 羊群 | 将放牧、舍饲或混合路线与饲料来源、粪污地点及羊只日数核对；没有记录差异的路线标签无效。 | `fao-small-ruminant-2016` |
| `balance_check` | 乳 | 要求批次平衡及互斥温奶/冷却奶场门去向；初次处理和冷却不得重复记账。 | `fao-small-ruminant-2016` |
| `output_check` | 联产品 | 要求活羊和粪污交付、方法优先级和共用期间归因证据；任何负担不得重复计。 | `fao-small-ruminant-2016` |
| `identity_check` | 流卡 | 固定 UUID 检查物质、介质、属性、状态与门点；待确认投入按实际记录展开，未核实身份留空。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 前景山羊乳场门数据包；过程和生命周期模型由此投影。 |
| downstream_use | 身份与证据门槛关闭后，方可作为经审查的次级或背景数据集。 |
| allowed_use | 声明生产农场门点和温度状态的未加工山羊乳供应。 |
| excluded_use | 其他畜种、巴氏杀菌或标准化乳、独立收奶/冷却及出门后运输。 |
| required_metadata | 农场与羊群；期间；山羊类别；放牧/舍饲路线；验收与拒收乳；温/冷批次门点；成分；温度；联产品去向；分配。 |
| required_quality_disclosure | 实测与计算投入、IPCC 系数、缺失表计、暂定范围、未解析 UUID 及共用资产归因。 |
| update_trigger | 路线、乳状态、羊群管理、系数、输出组合、门点、身份或质量证据发生实质变化。 |

## 11. 数据来源

| source_id | type | citation | use |
| --- | --- | --- | --- |
| `cpc-3-2025` | `official_guidance` | 联合国统计司，CPC Version 3.0 Explanatory Notes (2025)，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 分类产品范围 |
| `fao-small-ruminant-2016` | `official_guidance` | FAO LEAP，Greenhouse gas emissions and fossil energy use from small ruminant supply chains (2016)，https://www.fao.org/partnerships/leap/resources/publications/ | 农场路线、边界、分配与报告问题 |
| `fao-small-ruminant-dairy` | `official_guidance` | FAO，Small ruminants: dairy production and products，https://www.fao.org/dairy-production-products/dairy/small-ruminants/en | 山羊乳生产情境 |
| `ipcc-livestock-2019` | `method_factor` | IPCC，2019 Refinement，第 4 卷第 10 章，https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 肠道及粪污排放计算方法 |
