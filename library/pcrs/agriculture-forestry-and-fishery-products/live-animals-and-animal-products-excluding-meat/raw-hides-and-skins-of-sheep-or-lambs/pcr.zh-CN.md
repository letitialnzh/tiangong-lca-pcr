---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-sheep-or-lambs
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 绵羊或羔羊的生皮和原皮

## 1. 范围与适用性

本 PCR 覆盖绵羊或羔羊的未鞣制鲜皮及初步保存原皮，止于实际剥皮或原皮保存交付点。记录成年羊／羔羊、羊毛是否附着、来源与合法性、等级、保存状态、水分和附着盐、净质量及交付点。羊毛仍附着于原皮时属于皮张；已剪取羊毛另属其他产品。排除山羊皮、已鞣制带毛羊皮、制成皮革、进一步加工和交付后运输。合法、质量适用的死亡动物可回收原皮，不得虚构肉类联产品。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-sheep-or-lambs |
| classification_refs | CPC 3.0 02953 |
| covered_products | 鲜或初步保存的未鞣制绵羊／羔羊原皮，羊毛可仍附着。 |
| excluded_products | 分离羊毛、山羊皮、鞣制带毛羊皮、皮革及进一步加工品。 |
| representative_product | 在实际交付点按售出状态称量的合格原皮。 |
| production_route | 实际养殖及屠宰或合法死亡动物回收；独立剥皮、初步整理、分级、可选保存及交付。 |
| market_state | 记录羊龄、羊毛、等级和状态的未鞣制原皮。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 实际交付点的合格未鞣制绵羊／羔羊原皮。 |
| How much | 1 kg 按售出状态计的净原皮，不含包装和游离盐／盐水。 |
| How well | 记录羊龄、来源合法性、羊毛、等级、保存、水分／盐及交付点。 |
| How long or cycle | 按动物群组、屠宰／回收事件及服务期间仅归属一次。 |
| reference_flow_link | `raw_skin_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 状态及交付点限定的绵羊／羔羊原皮 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 成年羊或羔羊；屠宰或合法死亡动物回收；羊毛；等级；保存状态；水分／盐；净质量；交付点；期间 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | 相关批次 | Mass | kg | 校准毛重／皮重；净皮不含包装及可分离游离盐／盐水。 |
| m_state | 相关批次 | Mass, moisture and salt fractions | kg; kg/kg | 仅用批次实测质量、水分及盐转换鲜皮与保存皮；无通用系数。 |
| m_balance | 相关批次 | Mass | kg | 按来源批次核对合格、降级、不合格、修边料及失水。 |
| m_period | 相关批次 | Time and service measure | period; service unit | 将动物阶段、产出事件及共享服务连到实际期间且不重复负担。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 屠宰路线为可追溯群组及实际屠宰；死亡动物路线为合法回收事件。 |
| starting_condition_role | 优先使用截止活畜到场的兼容上游养殖数据，此处在前景记录实际屠宰／剖解。若上游数据已含屠宰，来源节点仅作可追溯接口及分配记录，不重复屠宰交换。死亡动物回收从合法来源开始，另计实际终端处理。外购物料及服务仅在实际使用时作为产品投入。 |
| product_classification_scope | 鲜或初步保存且未进一步加工的绵羊／羔羊原皮。 |
| recursive_input_rule | 外购同类原皮保留上游负担，不重计为新剥取原皮。 |
| upstream_dataset_requirement | 要求可追溯养殖、屠宰或回收数据及真实物料服务数据；原皮不自动零负担。 |
| disclosure | 羊龄、羊毛、来源合法性、状态、等级、交付点、期间、分配和共享服务。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_source | 动物来源 | 包括可追溯养殖及实际屠宰／剖解，并按不同阶段计入真实肉、已分离羊毛及乳；上游已含屠宰时不得重计交换。合法死亡动物回收遵循实际终端处理路线，不虚构肉。只有质量合格的回收带皮物料才作为产品离开来源接口；不合格回收尸体按真实废物／处理路径记录，不能混入产品卡。 | fao-hides-statistics;fao-hides-skins |
| b_remove | 剥皮 | 独立剥皮将完整未鞣制原皮交给初步整理；分开附带组织及损伤。 | fao-small-ruminant-slaughter |
| b_condition | 初步整理 | 包括分选前实际清洁、去肉与修边；排除脱毛、浸灰与鞣制。 | fao-small-ruminant-slaughter |
| b_preserve | 保存批次 | 鲜皮跳过处理。保存批次实测方法、能源、盐／盐水、处理前后状态及残余，不设通用配方。 | fao-hides-skins |
| b_gate | 交付 | 保护原皮至实际剥皮场所或保存场所交付点；排除制革及后续运输。 | un-cpc-3-notes;unido-leather-framework |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| source | 动物来源、屠宰或合法回收 | required | relevant lots | 实际上游动物及联产品接口；死亡动物路线按合法回收，不虚构肉。 | kg source event |
| remove | 独立原皮剥取 | required | relevant lots | 将剥皮与来源事件及初步整理分开。 | kg node output |
| condition | 原皮初步整理 | required | relevant lots | 分级前仅包括实际进行的清洁、去肉与修边。 | kg node output |
| grade | 原皮分级分选 | required | relevant lots | 区分合格、可售降级及不合格去向。 | kg node output |
| preserve | 可选原皮保存处理 | conditional | preserved lots only | 仅按实际冷藏、干燥、盐或盐水方法稳定；鲜皮跳过。 | kg node output |
| handover | 保护性呈现与交付 | required | relevant lots | 保护合格原皮至声明的剥皮或保存交付点。 | kg node output |

养殖可能跨繁殖、泌乳、剪毛与育肥期间。实际可售联产品按各自期间和交付点归属；附着羊毛不可再计已分离羊毛。剥皮独立于来源事件和初步整理。分级区分合格、可售降级和不合格去向。鲜皮跳过保存。共享屠宰场、剥皮台、清洗、冷库和保存资产按真实使用节点与期间仅计一次。

### Process: 动物来源、屠宰或合法回收 (`source`)

#### Inputs

##### Product flows

###### 可追溯的绵羊或羔羊 (`source_animal`)

仅屠宰路线；追溯先前繁育、羊毛和乳生产期间及供应方负担。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 实际屠宰所接收的活绵羊或羔羊 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_source`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 带皮绵羊／羔羊物料 (`source_skinbearing`)

来自实际屠宰，或来自合法死亡动物回收且已经确认适合作为原皮来源的物料。不合格回收尸体仍走另行记录的废物／处理路线；死亡动物路线不虚构肉。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 附有原皮的绵羊／羔羊胴体或部分 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_source`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 实际独立动物产品 (`source_coproduct`)

仅在其真实生产阶段和交付点记录；附着羊毛并非已分离羊毛。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 实际可销售的肉、已分离羊毛、乳等产品 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_source`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: 独立原皮剥取 (`remove`)

#### Inputs

##### Product flows

###### 待剥皮带皮物料 (`remove_input`)

仅从来源移交一次；剥皮独立于养殖及初步清洁。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 绵羊／羔羊带皮胴体或部分 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_remove`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 剥取后的新鲜原皮 (`remove_skin`)

计量成年／羔羊类别、完整性及羊毛附着。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 剥取后未鞣制绵羊／羔羊原皮 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_remove`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### Waste flows

###### 剥皮损伤与附带组织 (`remove_residue`)

区分目标皮张、损失、组织及损伤不合格皮。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 按实际去向区分的不可售剥皮残余 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_residues`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### Process: 原皮初步整理 (`condition`)

#### Inputs

##### Product flows

###### 进入初步整理的鲜皮 (`condition_in`)

核对剥皮交接单并保留批次及羊毛附着身份。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 新鲜未鞣制绵羊／羔羊皮 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_condition`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 初步清洁用水 (`condition_water`)

仅在实际清洁时使用；按节点和期间计量。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 供应的工艺用水 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_utilities`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 已整理但仍为原皮的皮张 (`condition_out`)

实际清洁、去肉或修边后交给分级；无脱毛或鞣制。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 初步整理后未鞣制绵羊／羔羊皮 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_condition`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### Waste flows

###### 初步整理残余 (`condition_residue`)

区分单独销售物、废物及实测损失。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 按去向区分的组织及不可售修边料 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_residues`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### Process: 原皮分级分选 (`grade`)

#### Inputs

##### Product flows

###### 待分级的已整理原皮 (`grade_in`)

检验年龄、羊毛、缺陷及买方标准。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 初步整理的绵羊／羔羊原皮 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 合格及降级可售等级 (`grade_sale`)

命名每个可售等级和交付点；可售降级皮不是废物。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 按实际可售等级区分的绵羊／羔羊原皮 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_grade`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

###### 不合格原皮 (`grade_reject`)

记录实际处理去向，区别于可售降级皮。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 不可售不合格绵羊／羔羊皮 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_residues`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### Process: 可选原皮保存处理 (`preserve`)

#### Inputs

##### Product flows

###### 进入保存处理的鲜皮 (`preserve_in`)

鲜皮销售批次完全跳过该节点。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 可售的新鲜绵羊／羔羊原皮 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 实际保存处理材料 (`preserve_salt`)

仅相关盐渍批次记录实际浓度；无默认用量。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 实际使用的盐或盐水组分 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 保存处理能源 (`preserve_energy`)

按载体、保存节点和服务期间计量。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 冷藏、干燥或保存实际能源载体 (UUID 未解析)
- 流属性/单位: Energy / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_utilities`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: MJ/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 保存后仍为原皮的皮张 (`preserve_out`)

分别计量处理后质量、水分、附着盐及游离介质。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 按方法区分的已保存未鞣制绵羊／羔羊皮 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preserve`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 采集记录 (`collected_record`)

##### Waste flows

###### 废保存介质与不合格皮 (`preserve_residue`)

将废物、蒸发水及皮内盐区分。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 按去向区分的废盐／盐水及不合格皮 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_residues`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

### Process: 保护性呈现与交付 (`handover`)

#### Inputs

##### Product flows

###### 合格鲜皮或保存皮 (`handover_in`)

从分级或保存节点接收一次，不重复。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 按进入状态区分的绵羊／羔羊原皮 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 保护性包装 (`handover_package`)

记录材料及复用；排除后续运输服务。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 实际包裹、箱或托盘材料 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 实际交付点的净绵羊／羔羊原皮 (`raw_skin_product`)

参考产出不含包装及可分离游离盐／盐水。

参考产出的原始记录：按真实批次实测并核对节点投入、产出和去向。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流: 状态及交付点限定的绵羊／羔羊原皮
- 流属性/单位: Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg
  - 基准: 每 1 kg 净参考产品
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 采集记录 (`collected_record`)

##### Waste flows

###### 损坏包装及最终不合格品 (`handover_reject`)

区分产品及包装不合格品及其处置去向。

分母与范围要求：每 kg 节点产出

原始数量及计算要求：按真实批次实测并核对节点投入、产出和去向。 原始采集分母类型：process_output。

- 选定流: 按实际去向区分的不合格皮及包装 (UUID 未解析)
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_residues`
- 数量范围: 批次完整性校验，非默认用量系数
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/kg
  - 基准: 每 kg 节点产出
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### Elementary flows

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_slaughter | 屠宰路线 | 按真实阶段及交付点列出可销售的肉、皮、分离羊毛、乳及其他产出。有可证明因果物理关系时采用并记录物理分配，否则记录按期间价格的经济分配及敏感性。不把动物全部负担归皮，也不自动归零。 | fao-hides-skins |
| a_fallen | 死亡动物路线 | 记录既有动物负担、合法回收及终端处理反事实；说明负担归属，避免处理信用单列，不虚构肉。 | fao-hides-statistics |
| a_grade | 等级与保存 | 每个可售等级仅在一个交付点计数；单独售出修边物需独立产品决定。水分／盐的质量变化不产生额外皮张。 | fao-hides-skins |
| a_period | 阶段与共享资产 | 按实际期间索引繁殖、泌乳、剪毛、育肥、屠宰／回收及替换。共享屠宰场、清洁、冷库及保存资产按有证据的服务时间、吞吐量或其他因果驱动量只计一次。 | fao-hides-skins |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | source | cohort, actual slaughter or lawful recovery, independently marketable outputs by phase | 批次台账 | cohort, actual slaughter or lawful recovery, independently marketable outputs by phase | 校准称量、仪表及单据；原始汇总要求：按批次和期间仅汇总一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;period | 每批次或期间 | 全部相关事件 | 实际场址 | 每参考流 | 校准、来源及交付记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_remove | remove | source event, intact raw skin, fleece and loss | 批次台账 | source event, intact raw skin, fleece and loss | 校准称量、仪表及单据；原始汇总要求：按批次和期间仅汇总一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;period | 每批次或期间 | 全部相关事件 | 实际场址 | 每参考流 | 校准、来源及交付记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_condition | condition | incoming, water, prepared skin, trim | 批次台账 | incoming, water, prepared skin, trim | 校准称量、仪表及单据；原始汇总要求：按批次和期间仅汇总一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;period | 每批次或期间 | 全部相关事件 | 实际场址 | 每参考流 | 校准、来源及交付记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_grade | grade | accepted, downgraded, rejected grades and destination | 批次台账 | accepted, downgraded, rejected grades and destination | 校准称量、仪表及单据；原始汇总要求：按批次和期间仅汇总一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;period | 每批次或期间 | 全部相关事件 | 实际场址 | 每参考流 | 校准、来源及交付记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_preserve | preserve | method, input/output mass, salt/brine, moisture, energy | 批次台账 | method, input/output mass, salt/brine, moisture, energy | 校准称量、仪表及单据；原始汇总要求：按批次和期间仅汇总一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;period | 每批次或期间 | 全部相关事件 | 实际场址 | 每参考流 | 校准、来源及交付记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_utilities | condition;preserve;handover | carrier, meter, node, asset and service period | 批次台账 | carrier, meter, node, asset and service period | 校准称量、仪表及单据；原始汇总要求：按批次和期间仅汇总一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;period | 每批次或期间 | 全部相关事件 | 实际场址 | 每参考流 | 校准、来源及交付记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_handover | handover | net/gross, package tare, state and gate | 批次台账 | net/gross, package tare, state and gate | 校准称量、仪表及单据；原始汇总要求：按批次和期间仅汇总一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;period | 每批次或期间 | 全部相关事件 | 实际场址 | 每参考流 | 校准、来源及交付记录；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_residues | source;remove;condition;grade;preserve;handover | material, mass, reason and actual destination | 批次台账 | material, mass, reason and actual destination | 校准称量、仪表及单据；原始汇总要求：按批次和期间仅汇总一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;period | 每批次或期间 | 全部相关事件 | 实际场址 | 每参考流 | 校准、来源及交付记录；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | 最终批次 | 净皮＝毛重减包装皮重及可分离游离盐／盐水；披露皮内水分／盐 | cp_handover;cp_preserve | kg net skin | fao-hides-skins |
| c_balance | 全部操作 | 投入加保存材料＝各可售等级加不合格／残余加水分／库存变化及差额 | cp_remove;cp_condition;cp_grade;cp_preserve | kg residual | fao-small-ruminant-slaughter |
| c_period | 动物与共享服务 | 将每项阶段／服务负担在真实产出和使用节点间仅归属一次 | cp_source;cp_utilities | burden/kg | fao-hides-skins |
| c_norm | 参考批次 | 可归属实测量除以相同状态和交付点的正数净皮质量 | cp_handover;cp_source | quantity/kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | 相关批次 | 核实绵羊／羔羊、羊龄、羊毛、原皮状态、来源合法性、等级和交付点。 | 来源、批次与复核记录 |
| q_mass | 相关批次 | 校准净重／皮重并实测水分／盐及批次差额；不作假设状态换算。 | 来源、批次与复核记录 |
| q_attribution | 相关批次 | 保留真实产出／阶段、分配依据、期间及共享服务驱动量表。 | 来源、批次与复核记录 |
| q_uuid | 相关批次 | 最终 TIDAS 交换构建前解析状态／交付点匹配的具体 UUID。 | 来源、批次与复核记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | 参考批次 | 拒绝非绵羊／羔羊、已鞣制或进一步加工品，以及缺年龄、羊毛、状态、交付点或净质量的批次。 | un-cpc-3-notes |
| v_route | 来源与剥皮 | 要求独立剥皮交接；屠宰路线列真实联产品；死亡动物路线合法回收且不虚构肉。 | fao-hides-statistics;fao-small-ruminant-slaughter |
| v_balance | 各批次 | 核对合格、降级与不合格皮、残余、库存及水分／盐变化；相对场址测量不确定度调查差额。 | fao-hides-skins |
| v_attribution | 产品、阶段及共享服务 | 拒绝无依据的零负担皮、重复计入附着羊毛／分离羊毛、重复动物阶段或共享工厂负担，以及缺失分配证据。 | fao-hides-skins |
| v_uuid | 具体数据集交换 | 未解析卡不得成为最终交换；单有 CPC 标签无法使鞣制羊皮或制成皮革成为精确原皮质量流。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 按羊龄、羊毛、路线、状态及交付点限定的绵羊／羔羊原皮前景数据集。 |
| downstream_use | 具体交换身份核实、审核及发布后才可作为 secondary_dataset 或 background_dataset 候选。 |
| allowed_use | 同状态／交付点比较，或使用批次实测盐／水分转换。 |
| excluded_use | 山羊皮、分离羊毛、鞣制带毛羊皮、皮革、通用鲜皮换算或无依据零负担。 |
| required_metadata | 羊龄、来源事件／合法性、羊毛、等级、状态、净重／皮重、盐／水分、交付点、期间及分配。 |
| required_quality_disclosure | 联产品与期间归属、质量平衡、保存配方、不合格品、共享服务及未解析 UUID。 |
| update_trigger | 精确原皮流核实、路线／交付点变化或新状态／分配证据。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-notes` | official_guidance | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | species and raw-skin product boundary |
| `fao-hides-skins` | official_guidance | [FAO Hides and Skins](https://www.fao.org/4/i0523e/i0523e.pdf) | source and preservation route |
| `fao-small-ruminant-slaughter` | official_guidance | [FAO small-ruminant slaughter and curing](https://www.fao.org/4/X6552E/X6552E10.htm) | flaying and first conditioning |
| `fao-hides-statistics` | official_guidance | [FAO hide production definitions](https://www.fao.org/4/x9892e/X9892e06.htm) | fallen-animal source |
| `unido-leather-framework` | official_guidance | [UNIDO leather framework](https://downloads.unido.org/ot/46/70/4670793/KRAL_AGR_AIT_URT_2015_100228_001.pdf) | pre-tannery boundary |
