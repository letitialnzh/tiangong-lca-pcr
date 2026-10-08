---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-skins-of-other-animals
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他动物的生皮

## 1. 范围与适用性

本方法以具体物种和路线为条件，涵盖牛、马、绵羊/羔羊、山羊/羔羊原皮类（02951–02954）及裘皮用途原毛皮（02955）以外，新鲜或初步保存、未鞣制的生皮。猪、西猯、爬行动物、鱼及部分鹿皮可能符合范围，但必须核实物种、部位和用途。带羽毛鸟皮可能属于 CPC 39110，不能自动归入 02959。排除已鞣制或整理的皮、皮革、脱离皮张的毛羽、制品及整只动物。记录合法来源、原皮状态、等级和实际剥皮、回收或保藏交付 gate。

路线必须按物种确定：养殖、水产养殖、商业屠宰、合法野生捕获及合法且质量合格的回收不得互换。仅计实际联产品。回收皮不自动为零负担；倒毙动物不能虚构肉类产出。不规定通用出皮率、用盐量、水分变化或动物寿命。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-skins-of-other-animals |
| classification_refs | CPC 3.0 02959；须核实物种、用途和状态 |
| covered_products | 02951–02954 以外的新鲜或初步保存非裘皮用途原皮。 |
| excluded_products | 02951–02955 的皮、无分类证据的带羽毛鸟皮、鞣制或制成的皮、脱离的毛羽及完整动物。 |
| representative_product | 在实际交付点按实测净重出售的合格、物种明确的原皮。 |
| production_route | 实际生产/捕获或合法回收；独立剥皮、清理、分级、可选保藏及防护交付。 |
| market_state | 未鞣制原皮；声明物种、部位、用途、状态、等级、水分/附着盐及 gate。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在实际交付点的合格原皮，明确物种、部位、用途和状态。 |
| How much | 1 kg 出售状态的原皮净重，不含包装与可分离的游离盐水或散盐。 |
| How well | 记录合法来源、物种、部位、用途、等级、状态、水分/附着盐及 gate。 |
| How long or cycle | 来源/捕获、剥皮、保藏及共用服务按实际产出事件和报告期各记录一次。 |
| reference_flow_link | `raw_skin_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 按物种、状态和 gate 限定的其他动物原皮 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；部位；预定用途；合法来源；新鲜/保藏状态；等级；水分/附着盐；净重/皮重；gate；期间 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | 参考批次 | Mass | kg | 经校准毛重扣除包装皮重和可分离游离保藏介质，得到净皮重；披露保留水分与附着盐。 |
| m_state | 新鲜与保藏批次 | Mass；水分/盐分比例 | kg；kg/kg | 仅凭批次实测前后质量和成分比例进行状态换算；不得使用通用乘数。 |
| m_balance | 各批次 | Mass | kg | 核对来源皮、各等级、废弃物、添加的保藏介质及实测水分/库存变化。 |
| m_period | 来源及共用服务 | 时间；服务量 | 期间；服务单位 | 按真实事件和期间关联来源阶段、共用场地、冷库及保藏服务，且只归集一次。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 已识别的商业带皮动物整体/部位或合法可回收材料，并记录上游来源事件和边界。 |
| starting_condition_role | 相容上游数据集提供特定物种的生产/捕获、屠宰或回收负担至带皮材料交接；前景从独立剥皮开始，不重复上游剥皮交换。 |
| product_classification_scope | 其他动物的非裘皮原皮；排除 02951–02955 及适用时的鸟皮 39110。 |
| recursive_input_rule | 外购同类原皮保留上游负担，只进入适用的后续节点，不再视作新剥皮。 |
| upstream_dataset_requirement | 实际动物/捕获/回收来源、真实产出组合、合法状态、联产品与期间归属。 |
| disclosure | 物种、部位、用途、来源、路线、等级、状态、gate、合法性、分配、期间、废弃物及共用服务。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_source | 来源路线 | 上游生产、捕获、屠宰或合法回收须与实际物种及交接相符；不得给野生捕获虚构养殖、给倒毙动物虚构肉类，或自动视原皮为零负担。 | un-cpc-3-notes;fao-hides-skins |
| b_remove | 剥皮 | 剥皮独立于来源生产/捕获及首次清理；分开记录附带组织和损伤。 | fao-hides-skins |
| b_prepare | 首次清理与分级 | 纳入实际首次清理/去肉和分级；排除浸灰、鞣制、整理及皮革制造。 | fao-hides-skins;un-cpc-3-notes |
| b_preserve | 保藏批次 | 新鲜销售跳过保藏；按实际记录冷藏、干燥、盐渍或盐水方法、前后质量、投入、服务和残余，不采用通用配方。 | fao-hides-skins |
| b_gate | 交付 | 仅纳入至实际剥皮/回收/保藏交付点的必要防护；排除交付后运输和加工。 | fao-hides-skins |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| remove | 按物种剥皮 | required | 新取得的皮张批次 | 从商业或合法回收动物体独立剥皮。 | kg 剥下原皮 |
| condition | 首次原皮清理 | required | 未清理原皮批次 | 分级前的首次清理与修边。 | kg 清理后原皮 |
| grade | 质量分级与去向分拣 | required | 清理后批次 | 区分合格、可销售降级与废弃。 | kg 可销售等级原皮 |
| preserve | 可选原皮保藏 | conditional | 保藏批次 | 实际稳定处理；新鲜批次跳过。 | kg 保藏原皮 |
| handover | 防护呈现与交付 | required | 可销售新鲜或保藏等级 | 在实际 gate 仅交付一次净重状态。 | kg 净出售原皮 |

上游来源台账只列出该物种、该阶段真实存在的肉、鱼体、种用、蛋、纤维或其他独立产品。带皮动物体只向剥皮节点交接一次，后续清理另列。各等级只能走新鲜或保藏一路。共用剥皮台、清洗设备、冷库和保藏场地按实测服务时间/吞吐量及期间分配给使用节点，不能重复计入。

### 过程：按物种剥皮（`remove`）

#### 输入

##### 产品流

###### 商业来源带皮动物体（`commercial_body`）

仅限申报物种实际上市的动物体或部位；上游来源数据止于此交接。

分母与范围要求：每 kg 剥下原皮

原始数量及计算要求：称量实际投入，记录来源、物种及部位。 原始采集分母类型：process_output。

- 选定流：物种明确的商业带皮动物体或部位（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_remove`
- 数量范围：投入台账 QA，非出皮率
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg/kg
  - 基准： 每 kg 剥下原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

###### 合法回收的带皮材料（`recovered_body`）

仅当实际来源依法为 Waste 且准许回收时使用；可销售 Product 来源使用另一卡，两者不能同时用于同一材料。

分母与范围要求：每 kg 剥下原皮

原始数量及计算要求：称量回收投入，保存许可及终端处理备选记录。 原始采集分母类型：process_output。

- 选定流：记录 Waste 状态且物种明确的可回收动物材料（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_remove`
- 数量范围：回收台账 QA，非回收率
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg/kg
  - 基准： 每 kg 剥下原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 刚剥下的新鲜原皮（`removed_skin`）

按物种及部位限定的未鞣制原皮只向首次清理交接一次。

分母与范围要求：每 kg 剥下原皮

原始数量及计算要求：清理前称量并关联来源事件。 原始采集分母类型：process_output。

- 选定流：申报物种刚剥下的新鲜原皮（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_remove`
- 数量范围： 精确归一化实测产出
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg
  - 基准： 每 kg 剥下原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 采集记录（`collected_record`）

##### 废物流

###### 剥皮损伤与附带组织（`removal_reject`）

不可销售切除物/组织按实际去向处理；若部位单独销售，须另行判定 Product 身份。

分母与范围要求：每 kg 剥下原皮

原始数量及计算要求：残余与可销售皮张分别称量。 原始采集分母类型：process_output。

- 选定流：按去向分类的不可销售剥皮残余（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_residue`
- 数量范围：仅作残余台账 QA
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg/kg
  - 基准： 每 kg 剥下原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

### 过程：首次原皮清理（`condition`）

#### 输入

##### 产品流

###### 首次清理前原皮（`raw_in`）

接收剥皮交付，或保留上游负担的外购同类未清理原皮，不可再记一次剥皮。

分母与范围要求：每 kg 清理后原皮

原始数量及计算要求：来料质量和来源票据只记录一次。 原始采集分母类型：process_output。

- 选定流：物种明确、清理前的原皮（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_condition`
- 数量范围：仅作来料批次 QA
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg/kg
  - 基准： 每 kg 清理后原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 清理用水供应（`clean_water`）

按来源及子类记录实际供水，不设默认清洗用水率。

分母与范围要求：每 kg 清理后原皮

原始数量及计算要求：计量本节点实际供水。 原始采集分母类型：process_output。

- 选定流：首次清理皮张所供用水（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_condition`
- 数量范围：用水台账 QA，非清洗配方
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg/kg
  - 基准： 每 kg 清理后原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首次清理后的原皮（`prepared_skin`）

只经过首次清洗、去肉与修边，不含制革处理。

分母与范围要求：每 kg 清理后原皮

原始数量及计算要求：分级交接时称量皮张。 原始采集分母类型：process_output。

- 选定流：物种明确、首次清理后的原皮（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_condition`
- 数量范围： 精确归一化实测产出
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg
  - 基准： 每 kg 清理后原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 采集记录（`collected_record`）

##### 废物流

###### 首次清理修边废料（`clean_trim`）

将皮/组织修边物与废水分开；废水另列处理台账。

分母与范围要求：每 kg 清理后原皮

原始数量及计算要求：称量不可销售修边物并确定去向。 原始采集分母类型：process_output。

- 选定流：按废物去向分类的不可销售清理修边物（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_residue`
- 数量范围：仅作修边台账 QA
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg/kg
  - 基准： 每 kg 清理后原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

### 过程：质量分级与去向分拣（`grade`）

#### 输入

##### 产品流

###### 待分级的清理后原皮（`grade_in`）

分级前核对批次真实物种、部位和用途。

分母与范围要求：每 kg 可销售分级原皮

原始数量及计算要求：称量来料并核对清理票据。 原始采集分母类型：process_output。

- 选定流： Species-qualified first-cleaned raw skin (UUID unresolved)
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_grade`
- 数量范围：仅作分级投入台账 QA
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg/kg
  - 基准： 每 kg 可销售分级原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格等级原皮（`grade_accepted`）

每个合格批次只能进入新鲜交付或保藏之一，不得双计。

分母与范围要求：每 kg 可销售分级原皮

原始数量及计算要求：称量分级批次并记录唯一去向。 原始采集分母类型：process_output。

- 选定流：物种明确的合格等级原皮（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_grade`
- 数量范围： 等级分流，非规定占比
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg
  - 基准： 每 kg 可销售分级原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 采集记录（`collected_record`）

###### 可销售降级原皮（`grade_downgrade`）

只有可单独销售的低等级才为 Product；不能销售时应走拒收 Waste 卡。

分母与范围要求：每 kg 可销售分级原皮

原始数量及计算要求：称量低等级皮并记录实际价格和去向。 原始采集分母类型：process_output。

- 选定流：物种明确、可销售的低等级原皮（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_grade`
- 数量范围： 等级分流，非规定占比
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg
  - 基准： 每 kg 可销售分级原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 采集记录（`collected_record`）

##### 废物流

###### 不可销售拒收原皮（`grade_reject`）

记录真实处理去向，不虚构联产品抵扣。

分母与范围要求：每 kg 可销售分级原皮

原始数量及计算要求：称量拒收物并记录原因。 原始采集分母类型：process_output。

- 选定流：按去向分类、物种明确的拒收原皮（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_residue`
- 数量范围：仅作拒收台账 QA
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg/kg
  - 基准： 每 kg 可销售分级原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

### 过程：可选原皮保藏（`preserve`）

#### 输入

##### 产品流

###### 保藏前可销售原皮（`cure_in`）

新鲜销售绕过此节点；只有被选中保藏的可销售等级进入。

分母与范围要求：每 kg 保藏原皮

原始数量及计算要求：称量保藏前批次并记等级。 原始采集分母类型：process_output。

- 选定流：物种明确、实际保藏前的已分级原皮（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_preserve`
- 数量范围：保藏前状态台账 QA，非保藏系数
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg/kg
  - 基准： 每 kg 保藏原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 实际保藏介质（`cure_medium`）

仅记录实用盐、盐水或其他合法原皮保藏介质；不得假定每个物种都盐渍。

分母与范围要求：每 kg 保藏原皮

原始数量及计算要求：称量添加介质，区分保留量和废弃量。 原始采集分母类型：process_output。

- 选定流：方法特定的原皮保藏介质（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_preserve`
- 数量范围：介质台账 QA，非配方
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg/kg
  - 基准： 每 kg 保藏原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 保藏能源供应（`cure_energy`）

计量冷藏、干燥或保藏的实际电、燃料等能源，并仅分配一次共用服务。

分母与范围要求：每 kg 保藏原皮

原始数量及计算要求：按方法、批次及节点计量实际能源。 原始采集分母类型：process_output。

- 选定流：实际保藏能源载体（UUID 未解析）
- 流属性/单位： Energy / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_preserve`
- 数量范围：能源台账 QA，非规定系数
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： MJ/kg
  - 基准： 每 kg 保藏原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保藏后仍为原皮的皮张（`cured_skin`）

声明实测处理后状态、水分和附着盐；不含浸灰、鞣制或整理。

分母与范围要求：每 kg 保藏原皮

原始数量及计算要求：保藏后称量，核对投入、添加介质、损耗和拒收物。 原始采集分母类型：process_output。

- 选定流：物种明确、保藏后未鞣制皮张（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_preserve`
- 数量范围： 精确归一化实测产出
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg
  - 基准： 每 kg 保藏原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 采集记录（`collected_record`）

##### 废物流

###### 废保藏介质或拒收物（`cure_residue`）

追踪实际废物去向；水分蒸发不能算作固体废皮。

分母与范围要求：每 kg 保藏原皮

原始数量及计算要求：称量废介质/拒收物，另测水分损耗。 原始采集分母类型：process_output。

- 选定流：按废物去向分类的废介质或拒收皮（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_residue`
- 数量范围：仅作保藏残余 QA
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg/kg
  - 基准： 每 kg 保藏原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

### 过程：防护呈现与交付（`handover`）

#### 输入

##### 产品流

###### 单一状态的可销售来料（`handover_in`）

每个物理批次只从新鲜分级或保藏产出之一接收，不能两者兼算。

分母与范围要求：每 kg 净出售原皮

原始数量及计算要求：在实际 gate 核对等级、状态及来源票据。 原始采集分母类型：process_output。

- 选定流：物种明确、可销售的新鲜或保藏原皮（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_handover`
- 数量范围：仅作状态路径台账 QA
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg/kg
  - 基准： 每 kg 净出售原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 防护包装（`protective_package`）

记录 gate 前实际使用的包裹物、箱或可复用支架；不含后续配送。

分母与范围要求：每 kg 净出售原皮

原始数量及计算要求：称量消耗材料，或按实际使用次数分配实测复用服务。 原始采集分母类型：process_output。

- 选定流：实际防护包装材料或可复用呈现用具（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_handover`
- 数量范围：包装台账 QA，非规定质量
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 100000
  - 单位： kg/kg
  - 基准： 每 kg 净出售原皮
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际 gate 的原皮净重（`raw_skin_product`）

这是由实际物种、部位、等级、状态和 gate 实例化的一张广义参考产出卡，并非假定一个 UUID 可代表所有变体。

参考产出的原始记录：称量净出售原皮，不含包装及可分离游离保藏介质。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 按物种、状态和 gate 限定的其他动物原皮
- 流属性/单位： Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_handover`
- 数量范围：精确参考质量恒等关系
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg
  - 基准： 每 1 kg 参考原皮净重
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 采集记录（`collected_record`）

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_source | 实际上游产出组合 | 仅列该物种和阶段真实独立销售的肉、鱼体、种用、蛋、纤维等产品。优先使用可辩护的物理因果分配；否则记录同期价格、经济分配及敏感性。不得自动赋予原皮零负担或全部动物负担。 | fao-hides-skins |
| a_recovery | 合法回收 | 记录既有来源负担、合法回收及实际终端处理备选；说明原皮负担，单列任何避免处理抵扣，不虚构肉类。 | fao-hides-skins |
| a_grade | 销售等级及保藏 | 每个合格或降级可销售等级只在真实交付点归属一次；分开记录废弃物与保留盐/水分；保藏增重不产生额外皮张。 | fao-hides-skins |
| a_period | 来源阶段与共用资产 | 按适用情况标记养殖/水产/捕获、屠宰/回收、冷库和保藏期间。剥皮、清洗、冷却和保藏服务按实测使用或有据因果驱动分配给使用节点及期间，且仅一次。 | fao-hides-skins |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_remove | remove | 来源动物体和剥下皮张 | 来源/剥皮台账 | 物种、部位、合法来源、Product/Waste 状态、事件、动物体/皮质量、真实联产品、期间 | 来源票据与校准秤；原始汇总要求：每批只计一次来源与剥皮。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;period | 每次事件 | 来源与剥皮期间 | 供应及剥皮场址 | 每参考流 | 许可、票据、校准；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_condition | condition | 原皮投入、用水、清理后原皮 | 清理台账 | 来源批次、水子类、质量、清理动作、修边 | 计量表和秤；原始汇总要求：按批汇总投入产出。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 清理期间 | 实际场址 | 每参考流 | 计量、秤及作业票据；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_grade | grade | 合格、降级和拒收 | 分级台账 | 物种、部位、等级、质量、原因、去向 | 分级票据和秤；原始汇总要求：互斥等级之和。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 分级期间 | 实际场址 | 每参考流 | 发运/拒收票据；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_preserve | preserve | 可选保藏投入产出 | 保藏台账 | 批次、方法、前后质量、盐/盐水、水分、能源、残余、服务时间 | 秤、检测与计量表；原始汇总要求：前后状态及服务相联汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;MJ;period | 每个保藏批次 | 保藏/服务期间 | 实际场址 | 每参考流 | 配方、检测和计量表；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_handover | handover | 净皮、包装与 gate | 交付台账 | 物种、部位、用途、来源、状态、等级、毛重/皮重、净重、包装复用、gate | 发运票据和秤；原始汇总要求：每个物理批次只计一次净重。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每个销售批次 | 实际交付事件 | 实际场址 | 每参考流 | 票据及校准；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_residue | remove;condition;grade;preserve | 拒收和废弃物 | 处理台账 | 批次、材料、质量、分类、去向、期间 | 秤和转运记录；原始汇总要求：按路线和材料各计一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次事件 | 相关期间 | 来源场址 | 每参考流 | 转运记录及秤；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | 交付批次 | 原皮净重 = 出售毛重减包装皮重及可分离游离盐水/散盐；披露保留水分/附着盐 | cp_handover;cp_preserve | kg 出售原皮净重 | fao-hides-skins |
| c_balance | 剥皮至交付 | 皮张投入加保藏介质添加量 = 销售等级加废弃/残余加实测水分/库存变化及已说明残差 | cp_remove;cp_condition;cp_grade;cp_preserve;cp_handover | kg 残差 | fao-hides-skins |
| c_period | 来源与共用服务 | 将每个真实阶段和剥皮/清洗/冷库/保藏服务只归于使用批次及期间一次 | cp_remove;cp_condition;cp_preserve | 负担/kg | fao-hides-skins |
| c_norm | 最终交换 | 可归属数量除以同物种、同状态、同 gate 批次的正净重 | cp_handover;cp_remove;cp_condition;cp_preserve | 单位/kg 原皮 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | 每批 | 核实物种、部位、用途、原皮状态、CPC 排除审查、合法来源和实际 gate。 | 来源、分级及交付记录 |
| q_mass | 每批 | 校准净重/皮重；实测保藏状态、水分/盐分及质量残差，不用通用出皮率。 | 秤、检测及质量平衡表 |
| q_route | 每批 | 保留真实来源/捕获/屠宰/回收路线、实际产品/期间，不重复上游剥皮。 | 路线与分配台账 |
| q_uuid | 最终数据集 | 构建 TIDAS 前为各交换解析精确流类型、物种、状态、属性/单位、gate 和去向。 | 已核实流证据 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | 参考批次 | 拒绝属于 02951–02955 的物种/用途、鞣制/深加工、整只动物及缺乏依据的带羽毛鸟皮 02959 归属。 | un-cpc-3-notes;un-cpc-39110 |
| v_route | 来源/剥皮 | 要求合法且符合物种的来源，剥皮与来源生产/捕获及首次清理分开；不得给野生动物虚构养殖或给回收动物虚构肉类。 | fao-hides-skins |
| v_balance | 各批 | 将新鲜、合格、降级、拒收、保藏介质和净出售状态核对至实测不确定度；调查不明残差。 | fao-hides-skins |
| v_allocation | 阶段与共用资产 | 拒绝无据零负担/全动物负担、重复产品、重复资产期间或任意通用联产品规则。 | fao-hides-skins |
| v_identity | 具体最终交换 | 广义未解析卡并非最终 UUID；核实物种、部位、原皮状态、属性、实际 gate 及方向。山羊皮、毛皮或整鱼流不能替代。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 按物种、路线、部位、等级、状态及 gate 限定的其他动物原皮前景数据集。 |
| downstream_use | 仅在具体身份核实、审查和发布后，作为候选 secondary_dataset 或 background_dataset。 |
| allowed_use | 同物种/用途/状态/gate 对比，或基于批次实测的状态换算。 |
| excluded_use | 跨物种替代、山羊皮/毛皮/带羽毛鸟皮自动映射、鞣制/皮革、通用出皮率/保藏率、无据零负担。 |
| required_metadata | 物种、部位、用途、合法来源、路线、等级、状态、净重、水分/盐分、gate、期间、真实产出组合及分配。 |
| required_quality_disclosure | 联产品/期间归属、等级/保藏质量平衡、拒收物、共用服务驱动及未解析 UUID。 |
| update_trigger | 平台精确流核实、物种/路线/分类变化、新的实测状态或分配证据。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-notes` | official_guidance | [UN CPC 3.0 解释说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 原皮范围与排除 |
| `un-cpc-39110` | official_guidance | [UNSD CPC 39110](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/39110) | 带羽毛鸟皮分类核查 |
| `fao-hides-skins` | official_guidance | [FAO 生皮与原皮](https://www.fao.org/4/i0523e/i0523e.pdf) | 首次处理、保藏和来源方法 |
