---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bees
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---
# 活蜂

## 1. 范围与适用性

本 PCR 涵盖在可核实生产者交接点作为商品交付的可存活活蜂：管理养蜂场的整群、核群、工蜂包和单独销售的蜂王，以及有证据证明合法的活捕商品。联合国 CPC 所列若干 *Apis* 物种仅为例示，并未将类别限制在该属。其他蜂类须有物种专属的饲养或捕获证据及可存活商品状态。蜂蜜、蜂蜡、蜂王浆、花粉、死亡蜂、蜂箱硬件与授粉服务均非参考产品。活蜂质量结果不能代理授粉能力或群势。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bees |
| classification_refs | CPC 3.0 02196 — Bees |
| covered_products | 有物种记录、在实际生产者交接点交付的整群、核群、工蜂包或单王活蜂；有证据证明合法的活捕产出。 |
| excluded_products | 蜂蜜、蜂蜡、蜂王浆、花粉、死亡蜂、蜂箱硬件、授粉服务、交付后的运输及买方管理。 |
| representative_product | 实测可存活活蜂生物量并申报销售配置；单王按只结果另行披露。 |
| production_route | 管理蜂群或蜂王繁育、条件性独立活捕、存活分级、通风包装展示与交付。 |
| market_state | 未经加工的可存活活蜂；须申报蜂王状态、工蜂、蜂子、群势、包装及门点。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 作为商品交付的可存活活蜂；结果按物种和销售配置分层。 |
| How much | 1 kg 实测活蜂生物量，不含蜂箱、蜂巢、糖浆及容器。单王按只结果须另有批次实测数量—质量桥接，否则不纳入该质量比较。 |
| How well | 申报物种、蜂王状态、工蜂与蜂子、群势以及存活验收状态；相同 kg 不代表相同蜂群或授粉功能。 |
| How long or cycle | 实际繁育、活捕、分级及生产者交接期间；可重复使用资产按服务期间分摊。 |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 按配置及门点限定的活蜂 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；管理或合法活捕路线；整群/核群/工蜂包/单王；蜂王、工蜂与蜂子状态；数量或群势；实际门点；非蜂包装质量 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

## 4. 计量与单位规则

| rule_id | 适用对象 | 所需属性 | 所需单位 | 规则 |
| --- | --- | --- | --- | --- |
| live_mass | 活蜂参考产品 | 质量 | kg | 交接时实测或推导仅含蜂体的活体生物量；扣除容器、蜂箱、蜂巢和饲料，并保留批次称重证据。 |
| configuration_count | 各活蜂批次 | 件数 | 只或群 | 分别记录蜂王只数、蜂群数及工蜂包构成；无批次实测桥接时不得由数量换算质量。 |
| temporal_link | 全部阶段 | 时间 | 天或报告期 | 把来源蜂群、分群、捕获、分级和交付事件关联到实际期间；同批蜂不得在两个产出门点重复计数。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 购入或期初管理蜂群/蜂王，或有证据的合法野外来源；识别物种和状态。 |
| starting_condition_role | 同类递归活蜂投入保留上游负担；期初自有蜂群作为期初库存单独披露。 |
| product_classification_scope | CPC 3.0 02196 活蜂；列出的 Apis 物种仅为例子，其他蜂类需有专门路线证据。 |
| recursive_input_rule | 购入活蜂若属相同产品类别，仅引入一次上游数据集；内部转移不得视为新增生产。 |
| upstream_dataset_requirement | 购入活蜂及另行购入的饲料、包装和服务须记录来源、物种/配置、门点和上游负担。 |
| disclosure | 报告路线、物种、配置、蜂王/蜂子/工蜂状态、捕获许可、仅含蜂体的质量、数量桥接、联产品交付、期间及共享资产。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_scope | 全部路线 | 仅在实际运行时纳入管理繁育或合法活捕；若交付前单独评估或包装展示，则分别设置分级和包装节点。 | un-cpc-3;fao-value-bees |
| b_route | 管理母节点与捕获 | 蜂王培育、核群分群与工蜂包摇取仅在改变蜂子/蜂王投入、分群核算或验证时成为管理生产变体。野外活捕是独立路线，不是管理变体；不可把一种路线清单套用于另一种。 | fao-value-bees;fao-queen-rearing |
| b_gate | 交接 | 边界止于实际生产者门点；纳入交付前包装、补饲和损失，排除买方安置与下游配送。农场门和活捕地点产出分别处理。 | fao-practical-bees |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| colony | 管理蜂群及蜂王繁育 | conditional | 实际经营管理繁育或销售来源蜂场 | 管理生物生产母节点；蜂王培育、核群和工蜂包生产变体分别取证 | kg 可存活繁育活蜂 |
| capture | 合法活捕 | conditional | 实际捕获并有物种与辖区许可 | 从野生或逸出来源独立捕获；采集活蜂移交分级，损失/放归分开 | kg 可存活活捕活蜂 |
| grade | 存活分级与去向分类 | required | 评估进入的活蜂是否符合申报销售配置 | 合格、降级及死亡状态各有去向 | kg 进入分级的活蜂 |
| present | 通风包装展示及生产者交付 | required | 活蜂销售批次在实际门点前完成包装或展示 | 仅含交付前包装与补饲，不含下游运输 | kg 门点仅含蜂体的活蜂质量 |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

管理蜂王培育、蜂群分群和工蜂包生产共用生物生产母节点，但蜂王/蜂子投入、工蜂移出、验收测试及产出构成不同；路线群组可并存，必须分别记录。活捕独立于繁育，须有合法来源及捕获至分级的实测交接。分级把进入的蜂分为合格、降级或废物。包装展示将各合格配置映射到一个实际生产者门点；同一批次的农场门与非农场门质量产出互斥。只有单王销售缺少批次实测数量—质量桥接时，蜂王按只卡才作为替代的最终产出；若桥接存在，蜂王数量仅为一个质量产出的支持元数据，不再形成第二个产品交换。跨季节蜂群资产、蜂王和共享蜂箱必须关联期间和使用节点。

不限定商品配置的活蜂状态卡和混合材料废物卡是条件性前景展开位置。具体数据集须按物种、销售配置以及废物材料和去向形成各自交换；一枚 UUID 不得代表伞形卡的全部变体。

### 过程：管理蜂群及蜂王繁育 (`colony`)

#### 输入

##### 产品流

###### 购入活体种蜂 (`acquired_live`)

购入蜂王、核群或整群时须承接其上游负担；期初自有蜂群另行披露。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：记录接收活蜂生物量、数量及商品配置 原始采集分母类型：process_output。

- 选定流：活蜂（按商品配置）（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_stock`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 蜂群补饲投入 (`supplemental_feed`)

仅记录实际供应的购入糖浆或代用饲料；自然花源不作为购入产品交换。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：发放量扣除库存变化与损耗 原始采集分母类型：process_output。

- 选定流：蜂群补饲饲料（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外供工艺用水 (`supplied_water`)

仅当蜂场管理或清洁用水跨越前景边界时记录；不得将天然水源推定为购入投入。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：计量或记录的外供用水量 原始采集分母类型：process_output。

- 选定流：外供用水（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 蜂箱与巢框使用 (`hive_service`)

记录管理生产使用的蜂箱、巢框制造及维护的分摊量；售出蜂箱不计入活蜂生物量。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：按服务期间和使用量分摊资产及维护负担 原始采集分母类型：process_output。

- 选定流：蜂箱与巢框设备（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可存活的分群或蜂王 (`viable_daughter`)

仅记录移交分级的可存活活蜂状态，并区分单王、核群、工蜂包及整群路线。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：繁育交接时实测活蜂生物量 原始采集分母类型：process_output。

- 选定流：繁育活蜂（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_stock`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 条件性独立蜂蜜或蜂蜡产出 (`separate_honey_wax`)

本卡是条件性前景展开位置，不代表单一交换或单一固定 UUID。若蜂蜜和蜂蜡均独立回收并交付，须生成分别具有质量、身份、门点及分摊信息的具体产品交换，并使用各自产品方法。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：若有，分别记录不同交付点的蜂蜜与蜂蜡实测质量 原始采集分母类型：process_output。

- 选定流：蜂蜜或蜂蜡，前景中分别展开为不同交换（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_outputs`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 蜂群死亡与不可用残余物 (`colony_loss`)

死亡蜂及不可销售蜂巢为损失或废物，不是可存活活蜂产品；须按材料、去向与处理展开成不同的具体废物交换。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：实测损失质量及去向 原始采集分母类型：process_output。

- 选定流：死亡蜂及不可用残余物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_losses`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：合法活捕 (`capture`)

#### 输入

##### 产品流

###### 活捕设备与耗材 (`capture_material`)

仅在有合法活捕事件证据时计入实际消耗或分摊的诱捕器、容器等。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：逐次记录材料和资产使用量 原始采集分母类型：process_output。

- 选定流：活捕材料（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 活捕可存活蜂 (`captured_viable`)

仅在物种、许可、地点、来源蜂群、采集活蜂状态及交接证据齐全时设活捕节点；放归量记录但不作为销售产出。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：实测活捕交接的活蜂生物量 原始采集分母类型：process_output。

- 选定流：活捕活蜂（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_capture`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 活捕死亡蜂 (`capture_mortality`)

分别记录死亡蜂与伴生非蜂物质；不得将捕获损失虚构为活蜂产量。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：实测死亡蜂质量 原始采集分母类型：process_output。

- 选定流：活捕死亡蜂（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_losses`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：存活分级与去向分类 (`grade`)

#### 输入

##### 产品流

###### 进入分级的活蜂状态 (`incoming_live`)

评估存活状态、蜂王状态与群势前，识别来源节点及商品配置。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：实测进入分级的活蜂生物量 原始采集分母类型：process_output。

- 选定流：进入分级的活蜂（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_stock`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格活蜂等级 (`accepted_live`)

按申报商品配置和健康状态接收可存活活蜂，并将合格批次移交包装展示。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：实测合格活蜂生物量 原始采集分母类型：process_output。

- 选定流：合格活蜂（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 降级但存活的活蜂等级 (`downgraded_live`)

若仍存活且独立交付或改道，记录独立的降级活蜂状态，不得与合格等级重复计算。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：实测降级活蜂生物量 原始采集分母类型：process_output。

- 选定流：降级活蜂（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分级不合格死亡蜂 (`grade_reject`)

无可存活活蜂去向的不合格品属于废物或损失，须记录实际处置路线。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：实测不合格品质量 原始采集分母类型：process_output。

- 选定流：死亡蜂不合格品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_losses`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：通风包装展示及生产者交付 (`present`)

#### 输入

##### 产品流

###### 用于包装交付的已分级活蜂 (`graded_live`)

仅将合格或明确降级的可存活批次投入按配置的交付包装，不得再次计入生产产出。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：实测投入活蜂生物量 原始采集分母类型：process_output。

- 选定流：已分级活蜂（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 通风包装材料 (`ventilated_package`)

仅在实际供应时计入一次性透气箱、蜂王笼或内衬；可重复使用蜂箱或容器按服务期分摊。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：记录包装质量或可重复使用服务份额 原始采集分母类型：process_output。

- 选定流：通风包装（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_package`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交付前补给饲料 (`travel_feed`)

记录生产者交付前放入包装的糖浆或其他饲料；下游运输和买方补饲在边界外。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：实测交付前加入的饲料质量 原始采集分母类型：process_output。

- 选定流：包装内饲料（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_package`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门活蜂生物量 (`farm_live_mass`)

仅实际管理蜂场门交付、未经加工的活蜂质量批次可使用已确认农场门身份；剔除容器、蜂巢和糖浆质量。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：农场门实测活蜂生物量 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：未经加工的农场门活蜂 `0be7ee1d-758e-458f-9dba-56d8c5298875`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他门点的活蜂交付 (`other_live_gate`)

活捕地点和其他非农场生产者门点交付须另行识别并保持未绑定；同一批次不得再计入农场门产出。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：实际交接处实测活蜂生物量 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：其他申报门点的活蜂（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 按只计的单王活蜂 (`queen_count`)

仅当单王销售批次缺少实测数量—质量桥接、因而不纳入 kg 参考结果时，才以本卡记录独立销售的可存活蜂王数量。若有桥接，蜂王数量仅作为一个质量产出的元数据，不得建立第二个产品交换；不得由整群或工蜂包重量推算蜂王质量。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：清点合格蜂王只数；质量桥接另行实测 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：单只活蜂王（UUID 未解析）
- 流属性/单位：Number of items / item
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：item/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 包装不合格品与交付前死亡蜂 (`package_reject`)

本卡是条件性前景展开位置：须按去向分别建立受损包装材料和死亡蜂的具体废物交换，不可共用一枚固定 UUID；存活验收失败不得计入活蜂产出。

分母与范围要求：每 kg 所在过程接收或产出的活蜂质量；单王卡仅作数量补充

原始数量及计算要求：按类别实测废物质量 原始采集分母类型：process_output。

- 选定流：包装不合格品与死亡蜂（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_losses`
- 数量范围：暂定完整性 QA 筛查，不作为默认用量或排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 所在过程接收或产出的活蜂质量；仅用于提示复核
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 按配置及门点限定的活蜂（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `farm_live_mass`, `other_live_gate`, `queen_count` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。 蜂王个体产品仍须原有实测计数至质量桥接；缺少该桥接的纯计数结果仍不属于质量比较。

选定来源／接口行：`farm_live_mass`, `other_live_gate`, `queen_count`

必需产品实例限定项：物种；管理或合法活捕路线；整群/核群/工蜂包/单王；蜂王、工蜂与蜂子状态；数量或群势；实际门点；非蜂包装质量

- 选定流：按配置及门点限定的活蜂（实际生产者交付关联）
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

###### 按配置及门点限定的活蜂 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。 蜂王个体产品仍须原有实测计数至质量桥接；缺少该桥接的纯计数结果仍不属于质量比较。

选定来源／接口行：`farm_live_mass`, `other_live_gate`, `queen_count`

必需产品实例限定项：物种；管理或合法活捕路线；整群/核群/工蜂包/单王；蜂王、工蜂与蜂子状态；数量或群势；实际门点；非蜂包装质量

- 选定流：按配置及门点限定的活蜂
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

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| a_avoid | 全部节点 | 先分离独立产出过程或记录。内部转群、分级移交及包装交付的同一批蜂只是一条谱系，不能获得三次最终产品收益。 | fao-value-bees |
| a_outputs | 繁育与分级 | 申报实际独立交付的活蜂王、整群、核群、工蜂包、蜂蜜、蜂蜡或服务；死亡与不可用残余物作为废物。无服务产出证据不得分摊授粉服务负担。 | fao-value-bees |
| a_choice | 真正联合生产 | 无法分离时，若有证据优先记录基于物理因果关系的本 PCR 专属分摊；否则记录具同期价值证据的经济分摊及敏感性分析。不预设蜂蜜/活蜂通用比例。 | fao-value-bees |
| a_period | 共享蜂群与资产 | 按报告期索引种群建立、蜂王培育、分群、补饲、捕获、分级和交付。利用记录的使用量/占用期，把共享蜂箱、巢框及设备服务分摊到使用节点和期间，每项负担只有一个归属。 | fao-practical-bees |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_live_stock | colony;grade | 活蜂 | 批次称重与计数 | 物种；配置；蜂王数；工蜂状态；蜂子；活蜂质量；日期；来源 | 称重并记录数量；原始汇总要求：按批求和并防止内部重复。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;item | 每批 | 完整生产期 | 全部来源及分级批次 | 每参考流 | 称重记录；批次身份；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_feed | colony | 补饲饲料 | 发放台账 | 饲料类别；接收；发放；库存变化；损失 | 称量购入饲料并核对库存；原始汇总要求：按期间计算净发放。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次发放 | 完整生产期 | 全部管理蜂群 | 每参考流 | 采购与库存台账；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_utilities | colony | 用水 | 水表记录 | 表头；表尾；使用节点；日期 | 按水表或供应账单并分配节点；原始汇总要求：按节点计算水表差值。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 至少每月 | 完整生产期 | 全部管理蜂场 | 每参考流 | 水表或账单；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_assets | colony;capture | 蜂箱、巢框及诱捕器 | 资产台账 | 资产编号；质量；服务期；使用节点；使用份额 | 记录购入、维护和服务；原始汇总要求：每项服务仅分摊一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;day | 购入时及每年 | 资产服务期 | 全部共享资产 | 每参考流 | 发票；资产记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_outputs | colony | 独立联产品 | 交付记录 | 产品类别；质量；收件人；门点；日期 | 称重并取得交付回执；原始汇总要求：按不同产出批次求和。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次交付 | 完整生产期 | 全部独立产出 | 每参考流 | 称重单；回执；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_losses | colony;capture;grade;present | 死亡与废物 | 损失台账 | 批次；材料类别；质量；去向；日期 | 按类别称量损失；原始汇总要求：按类别和去向仅统计一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次损失 | 完整生产期 | 全部节点 | 每参考流 | 处置记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_capture | capture | 合法活捕 | 事件记录 | 物种；许可；地点；来源；捕获活蜂质量；放归质量；死亡质量；日期 | 捕获交接时称重与检查；原始汇总要求：逐事件质量平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次事件 | 捕获期 | 全部合法事件 | 每参考流 | 许可；现场记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_grade | grade;present | 合格与降级活蜂 | 分级记录 | 批次；物种；配置；蜂王状态；群势；合格质量；降级质量；死亡质量 | 逐去向检查并称重；原始汇总要求：核对各去向质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 完整生产期 | 全部分级批次 | 每参考流 | 检查表；称重记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_package | present | 包装材料与饲料 | 包装发放记录 | 批次；容器类型；容器质量；重复使用份额；饲料质量；日期 | 称重并记录材料；原始汇总要求：按批汇总，一次分摊重复使用份额。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 完整生产期 | 全部包装批次 | 每参考流 | 发放台账；资产记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_handover | present | 按门点活蜂商品 | 交接证明 | 批次；物种；配置；门点；蜂体质量；蜂王数量；数量—质量桥接；买方；日期 | 称量仅含蜂体质量、验收存活、计数并签收；原始汇总要求：每批只有一个最终门点。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;item | 每次交付 | 完整生产期 | 全部交付批次 | 每参考流 | 称重证明；签收单；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_bee_mass | 活蜂参考及交付 | 活蜂生物量 = 批次总称重 − 容器 − 蜂箱/蜂巢 − 饲料；单王另记录实测批次质量。 | cp_handover;cp_package | kg 仅含蜂体的活体质量 | fao-value-bees |
| c_balance | 分级与捕获 | 进入活蜂质量 = 合格 + 降级 + 死亡 + 放归 + 经记录的库存变化；各阶段转移不得重复记为最终产出。 | cp_capture;cp_grade;cp_losses | 批次质量平衡差值 | fao-value-bees |
| c_shared | 共享资产 | 资产负担 × 经记录的节点期间使用份额；各份额之和不超过 1。 | cp_assets | 节点/期间资产负担 | fao-practical-bees |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| q_species | 全部批次 | 记录物种及无法外推到其他蜂类的路线限制。 | 物种鉴定与路线记录 |
| q_mass | 交付批次 | 保留仅含蜂体质量的称重、容器扣除和单王数量—质量桥接；缺失则单王仅报数量。 | 称重与交接证明 |
| q_period | 跨期群组与资产 | 每项来源、繁育、分群、捕获、分级、交付和共享资产均关联期间及节点。 | 事件台账与资产记录 |
| q_complete | 产出与损失 | 按批次闭合合格、降级、死亡、放归和库存变化；记载独立联产品及实际去向。 | 批次平衡与交付记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_identity | 各交付批次 | 缺少物种、存活状态、销售配置、蜂王/蜂子/工蜂状态、实际生产者门点，或未将仅含蜂体质量与蜂箱/饲料/包装分离时拒绝。 | un-cpc-3 |
| v_count | 单王销售 | 缺少批次实测质量的单王按只批次仅报告数量，不纳入 kg 生物量比较；不得推定群势等价。 | fao-queen-rearing |
| v_route | 管理与捕获 | 须有管理母节点及变体专属变化证据，或合法活捕许可及捕获至分级质量平衡；不得仅类比推定非 Apis 蜂类饲养方式。 | un-cpc-3;fao-value-bees |
| v_balance | 全部阶段 | 按批次和门点核对投入、合格、降级、死亡、放归及最终活蜂状态；联产品、期间和共享资产只追溯一次；不得重复计算最终活蜂产出。 | fao-value-bees |
| v_binding | 流身份 | UUID 仅支持精确匹配的卡片。平台农场门质量活蜂产品不得绑定单王按只、活捕门点或广义参考。 | un-cpc-3 |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 前景活蜂生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 物种、配置及门点匹配且申报测量和分配方式的活蜂商品。 |
| excluded_use | 授粉服务、蜂蜜方法、蜂箱硬件、死亡蜂商品、跨配置功能等价及无证据的数量—质量换算。 |
| required_metadata | CPC 与 PCR 身份；物种；配置；蜂王/工蜂/蜂子状态；数量和群势；仅含蜂体的质量；路线与合法捕获证据；门点；报告期；共享资产。 |
| required_quality_disclosure | 批次测量与数量桥接、验收/损失核对、来源及联产品交接、期间分摊、待确认流身份 展开及未解析 UUID。 |
| update_trigger | 物种、销售配置、捕获法律/路线、生产者门点、主要管理方法、分配或身份依据变更。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 官方活蜂分类范围。 |
| fao-practical-bees | handbook | https://www.fao.org/4/x0083e/X0083E06.htm | 蜂场设备、整群与核群、工蜂包及交付前护理。 |
| fao-value-bees | handbook | https://www.fao.org/4/w0076e/w0076e19.htm | 活蜂包、蜂王及蜂群生产和活蜂交付展示。 |
| fao-queen-rearing | handbook | https://www.fao.org/4/t0104e/T0104E0e.htm | 管理蜂王培育与蜂王状态。 |
