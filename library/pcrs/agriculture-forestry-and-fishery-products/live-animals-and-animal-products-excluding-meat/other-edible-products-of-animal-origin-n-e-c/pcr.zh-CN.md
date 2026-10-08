---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-edible-products-of-animal-origin-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他未另分类的动物源可食产品

## 1. 范围与适用性

本残余类方法只适用于 CPC 3.0 未在别处分类的一种具体动物源可食商品。每批必须明确商品和动物来源、合法来源、人类食用资格、销售状态、归类决定及真实交付门槛。可食鸟巢、龟蛋、蜂王浆和蜂胶只是需要逐项核实归类及合法性的候选实例，没有一种能代表整类；本方法不声称其在任何法域必然合法。排除非活体可食昆虫（02931）、天然蜂蜜、普通鸟蛋、原乳、肉、蜗牛、非食用品及另行归类的制成食品。不允许无物种平均产品或统一产率。

相容且来源特定的上游记录承载来源生产及生物阶段。前景采集是独立界面；首次初处理和保藏仅在真实进行时纳入，随后进行食用分级和保护性交付。外购物料携上游负担进入真实后续节点，不虚构二次采集。门槛为真实生产或首次集货交接，不含配送、零售及进一步食品制造。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-edible-products-of-animal-origin-n-e-c |
| classification_refs | CPC 3.0 02939；逐项核对具体商品是否有更具体品目。 |
| covered_products | 一种合法、供人食用且归类确认的残余动物源商品。 |
| excluded_products | 昆虫、天然蜂蜜、普通蛋、原乳、肉、蜗牛、非食用品及另行归类的制成食品。 |
| representative_product | 一种已命名、来源明确且销售状态确定的商品；例子不是通用代表品。 |
| production_route | 真实合法来源采集、实际初处理/保藏、分级和保护性交付。 |
| market_state | 含来源、合法性、食用状态、水分、等级、包装皮重和门槛的可食产品净量。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一种已命名且归类确认的残余动物源可食产品。 |
| How much | 1 kg 可销售净产品，不含包装及单独去除的不可食物。 |
| How well | 声明动物物种/来源、合法及食用状态、等级、水分、物理状态和门槛。 |
| How long or cycle | 将来源建立、生产/终止期间、采集及共用服务一次性关联真实批次。 |
| reference_flow_link | `sold` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 来源、状态及门槛明确的其他动物源可食商品 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 已命名商品；动物物种/来源；合法来源；CPC 与食用状态；水分；等级；销售状态；净量/皮重；门槛；期间 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | 销售批次 | Mass | kg | 校准毛重减包装皮重及单独去除的不可食物；披露保留水分。 |
| m_states | 每个实际节点 | Mass | kg | 核对前后状态及真实增减量；不采用跨商品产率。 |
| m_period | 来源与共用资产 | Time | period | 将来源、采集、替换和共用服务事件一次性归入真实期间。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 真实采集界面已命名的合法动物、群体或巢址来源商品，或按真实进入状态记录的外购物料。 |
| starting_condition_role | 相容且来源特定的上游数据集承载来源生产、各阶段及真实联产品；前景从独立采集或外购交接开始。 |
| product_classification_scope | 仅在核对具体商品的排除项及所有更具体 CPC 品目后适用 CPC 02939。 |
| recursive_input_rule | 外购同类商品保留上游负担并进入真实后续节点，不虚构二次采集。 |
| upstream_dataset_requirement | 来源/物种、合法链、来源期间、真实产出集合、进入状态及负担覆盖。 |
| disclosure | 已命名商品、归类理由、合法/食用状态、实际路线、期间、产出集合、门槛及未解析身份。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_identity | 每批 | 要求具体商品、合法来源、可食资格和残余 CPC 归类；例子不证明属于 02939。 | un-cpc-3;eu-residual |
| b_collect | 来源采集 | 区分真实动物、群体或巢址生产与独立移出、附带损失和采集品交接；外购物品跳过采集。 | eu-residual |
| b_prepare | 首次初处理 | 包含实际首次清洁/分离、用水或服务投入、采集/处理后交接和不可食剔除物；未执行则跳过。 | eu-residual |
| b_preserve | 保藏 | 确认干预前后可用状态、真实能源和服务、残余、蒸发和剔除物；未执行则跳过。 | eu-residual |
| b_grade | 等级与门槛 | 枚举接受品、独立销售的降级品和不可食剔除物及不同去向；保护至实际门槛，不含货运。 | un-cpc-3 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| collect | 经来源核实的采集 | conditional | 真实合法来源的新采集；外购物料跳过采集 | 来源至采集品的独立交接；另记附带损失 | kg 节点产出 |
| prepare | 首次卫生初处理 | conditional | 真实清洁或分离 | 采集原料至处理后状态；记录用水及剔除物 | kg 节点产出 |
| stabilize | 可选保藏 | conditional | 真实且允许的稳定化干预 | 记录干预前后可用状态、能源及剔除物 | kg 节点产出 |
| grade | 食用等级分选 | required | 具体可食批次 | 接受品、可销售低等级品及不可食剔除物有各自去向 | kg 节点产出 |
| handover | 保护性包装与交付 | required | 符合食用条件的可销售批次 | 真实包装/复用、净产品及来源或首次集货门槛 | kg 节点产出 |

每个具体实例只有一种已命名来源路线。鸟巢、分泌物和卵的采集没有通用生物过程或产率。应在各自交接点枚举真实销售的来源产出及附带残余，并作来源特定的归属决定。每个条件节点都有实测进入和离开状态，未执行则跳过。共用采集、清洁、冷却、分级和包装资产仅一次性分配给真实节点和期间。降级品只有可独立销售且符合食用条件时才为第二产品；不可食剔除物不是食用产出。

### 过程：经来源核实的采集（`collect`）

#### 输入

##### 产品流

###### 合法来源的原料（`source`）

仅一种在动物、群体或巢址来源有记录的动物源可食商品；上游来源生产不重复计算。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：来源明确的动物源原料（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collect`
- 数量范围：暂定非负台账校验界限；非产率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采集的合格产品（`collected`）

称重后的采集状态一次性交接，并记录来源及实际期间。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：经来源核实的采集可食产品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collect`
- 数量范围：计量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 采集附带物和剔除物（`collection_reject`）

将不可用物料与销售联产品分开，并记录去向。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：不可食采集残余（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reject`
- 数量范围：暂定非负台账校验界限；非产率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流


### 过程：首次卫生初处理（`prepare`）

#### 输入

##### 产品流

###### 进入首次初处理的采集物（`preparation_in`）

仅在实际清洁或分离时适用，否则直达分级。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：采集的动物源可食原料（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare`
- 数量范围：暂定非负台账校验界限；非产率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 条件性清洁用水（`cleaning_water`）

仅在实际湿法清洁时计量产品用水；追踪废水去向。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：实际供给的清洁用水（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare`
- 数量范围：暂定非负台账校验界限；非产率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首次初处理的合格产品（`prepared`）

记录实测处理后状态与下一交接；无跨产品统一产率。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：经来源核实的首次初处理可食产品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare`
- 数量范围：计量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 首次初处理剔除物（`preparation_reject`）

分类不可食污染物、杂质及真实去向；不得称为可食产出。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：不可食初处理残余（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reject`
- 数量范围：暂定非负台账校验界限；非产率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流


### 过程：可选保藏（`stabilize`）

#### 输入

##### 产品流

###### 保藏前可用产品（`stabilization_in`）

仅在实际独立保藏步骤发生时采用真实采集或初处理投入。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：经来源核实的保藏前产品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilize`
- 数量范围：暂定非负台账校验界限；非产率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际保藏能源（`energy`）

计量真实冷却、干燥或其他合法稳定化所用能源载体。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：实际能源载体（UUID 未解析）
- 流属性/单位：Energy / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilize`
- 数量范围：暂定非负台账校验界限；非产率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：MJ/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 稳定化的合格产品（`stabilized`）

计量稳定化后状态和水分，再交接分级。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：经来源核实的稳定化可食产品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_stabilize`
- 数量范围：计量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 保藏剔除物（`stabilization_reject`）

按法定去向记录变质/剔除物；蒸发为单独平衡项。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：不可食保藏剔除物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reject`
- 数量范围：暂定非负台账校验界限；非产率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流


### 过程：食用等级分选（`grade`）

#### 输入

##### 产品流

###### 分级前合格物料（`grading_in`）

仅选择一种真实前序的采集、初处理或稳定化状态。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：经来源核实的分级前可食产品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定非负台账校验界限；非产率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 接受的食用级产品（`accepted`）

声明食用资格、状态及交付去向。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：接受的经来源核实的可食产品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：计量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

###### 独立销售的低等级品（`downgrade`）

仅在可独立销售且符合食用条件时适用，否则归为剔除物。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：符合食用条件的降级产品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定非负台账校验界限；非产率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 不可食剔除物（`grade_reject`）

记录合法非食用去向，绝非可食等级。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：不可食动物源剔除物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reject`
- 数量范围：暂定非负台账校验界限；非产率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流


### 过程：保护性包装与交付（`handover`）

#### 输入

##### 产品流

###### 包装前的接受品（`handover_in`）

将接受等级一次性交付保护性包装。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：接受的经来源核实的可食产品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定非负台账校验界限；非产率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际食品接触包装（`package`）

记录包装材质、皮重以及复用或一次性服务。

分母与范围要求：每 kg 对应过程产出

原始数量及计算要求：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 原始采集分母类型：process_output。

- 选定流：实际食品接触包装或复用服务（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定非负台账校验界限；非产率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 来源门槛处合格产品净量（`sold`）

在真实生产或首次集货门槛处，净质量不含包装。

参考产出的原始记录：按来源、批次和期间计量真实交换；跳过的条件节点不建模。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 来源、状态及门槛明确的其他动物源可食商品
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：计量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 kg 对应过程产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_source | 真实来源产出集合 | 枚举各预期产品、数量和门槛。有证据时采用实测因果归属，否则记录期间特定的经济分配并进行敏感性分析。不得自动把 02939 分为零或全部来源负担。 | eu-residual |
| a_grade | 等级与残余 | 接受品和独立销售的降级品须有互斥质量及去向；不可食剔除物和附带残余不是额外可食产品。 | un-cpc-3 |
| a_period | 阶段及共用服务 | 标记来源建立/生产/替换/终止期间；依观测服务时间或吞吐量将共用服务一次性分配给消费节点/批次并保留证据。 |  |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_collect | collect | 来源与采集品 | 来源台账 | 商品、物种、合法/食用状态、真实产出、质量、门槛、期间 | 来源单据与校准秤具；原始汇总要求：每产出/批次一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;period | 每批 | 来源与采集期间 | 来源及采集者 | 每参考流 | 来源、合法及秤具记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_prepare | prepare | 首次清洁和处理后商品 | 批次台账 | 状态、进出质量、用水、服务、剔除物 | 单据、秤具和仪表；原始汇总要求：实测状态平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每实际执行批次 | 初处理期间 | 场址 | 每参考流 | 单据和校准；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_stabilize | stabilize | 可选保藏 | 保藏台账 | 前后状态、质量、水分、温度、能源、损失 | 仪表、秤具及检测；原始汇总要求：前后平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;MJ | 每实际执行批次 | 保藏期间 | 场址 | 每参考流 | 仪表和检测；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_grade | grade | 等级与去向 | 分级台账 | 接受、降级、剔除、食用判断、去向 | 分级单及秤具；原始汇总要求：互斥产出集合。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 分级期间 | 场址 | 每参考流 | 分级/去向记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_handover | handover | 净销售、包装、门槛 | 交付台账 | 状态、水分、毛重、皮重、净重、包装复用、门槛 | 交付单及秤具；原始汇总要求：每批一次净交付。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 交付期间 | 场址 | 每参考流 | 单据和校准；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_reject | collect;prepare;stabilize;grade | 残余/废物 | 处置台账 | 批次、类型、质量、法律状态、去向 | 称重及移交单；原始汇总要求：每终端去向一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每事件 | 对应期间 | 场址 | 每参考流 | 移交记录；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | 销售批次 | 合格净商品 = 毛重 - 包装皮重 - 单独去除的不可食物；采用真实水分而非统一干物换算。 | cp_handover | kg 净商品 |  |
| c_balance | 实际节点 | 核对物料投入和添加量与食用产出、剔除物、实测水损及库存变化；调查残差。 | cp_collect;cp_prepare;cp_stabilize;cp_grade;cp_reject | kg 平衡残差 |  |
| c_period | 来源及共用资产 | 将各来源阶段和共用服务关联至真实批次与期间，按观测用量只分配一次。 | cp_collect;cp_prepare;cp_stabilize;cp_handover | 负担/kg |  |
| c_norm | 具体交换 | 将可归属交换量除以同一已命名商品/来源/状态/门槛批次的正净质量。 | cp_handover | 单位/kg 商品 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | 每批 | 核实残余 CPC 归类、已命名商品/物种、合法链、食用资格、销售状态和门槛。 | 来源、合法、食用及交付记录 |
| q_mass | 每批 | 校准毛重/皮重及前后质量；检测相关水分/污染。 | 秤具、检测及平衡 |
| q_allocation | 来源及共用资产 | 完整真实产出集合、各阶段、归属驱动及无重复资产负担。 | 产出、服务及期间台账 |
| q_uuid | 每项具体交换 | 固定 UUID 前核实流类型、角色、来源、状态、门槛、属性及单位支持。 | 详情核实证据 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | 参考批次 | 排除泛称其他动物平均品、昆虫、蜂蜜、普通蛋、原乳、肉、蜗牛、非食用品及归入别处的食品；要求合法及食用证据。 | un-cpc-3;eu-residual |
| v_route | 来源 | 要求真实来源或有记录的外购投入；排除虚构共通生物过程、重复采集及未执行处理。 | eu-residual |
| v_balance | 每批 | 核对实际节点状态、增减量、等级/剔除去向和净交付。 |  |
| v_allocation | 期间/产出 | 排除漏记真实联产品、重复等级、自动零/全额负担及重复共用服务。 |  |
| v_identity | 最终交换 | 核实已命名商品、来源、状态、门槛、方向/类型及属性/单位支持。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 一种来源、路线、状态、等级及门槛明确的残余动物源可食产品前景数据集。 |
| downstream_use | 仅在具体身份核实和发布后作为候选 secondary_dataset 或 background_dataset。 |
| allowed_use | 同一已命名商品/来源/状态的比较或实测条件转换。 |
| excluded_use | 跨商品代理、非法或非食用来源、无食用记录、下游制成食品和通用产率。 |
| required_metadata | 商品名称、残余归类理由、物种/来源、合法性、食用状态、状态/水分、净质量、门槛、期间、产出及跳过节点。 |
| required_quality_disclosure | 产出/期间归属、共用资产驱动、质量平衡、剔除去向及未解析 UUID。 |
| update_trigger | 平台精确身份确认、归类/法律/来源变化或实测路线新证据。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3` | official_guidance | [联合国 CPC 3.0 说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 残余类别及相邻排除项。 |
| `eu-residual` | official_guidance | [欧盟动物源食品规则及残余商品示例](https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1744429744827&uri=CELEX%3A02021R0632-20220818) | 候选示例及食用核查，非通用 CPC 归类。 |
