---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.insect-waxes-and-spermaceti-whether-or-not-refined-or-coloured
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 昆虫蜡及鲸蜡，不论是否精制或着色

## 1. 范围与适用性

本方法按来源限定，涵盖作为蜡销售的蜂蜡、其他昆虫蜡及鲸蜡，包括原蜡、精制蜡和着色蜡。具体批次的昆虫路线与鲸蜡路线互斥，不能建立无物种来源的平均品或合成混合代表品。鲸蜡路线仅在既存原料具有可证明的合法来源、可追溯链和真实上游负担时实例化；不假定当代捕鲸活动或其法律许可。排除植物、矿物和合成蜡、脱脂残渣、蜡烛、乳膏、巢础以及其他蜡制成品。

昆虫路线从真实蜂巢、封盖蜡或其他有记录的昆虫分泌物独立采集。蜂蜜只有在真实蜂源且实际产出蜂蜜时才是联产品，不适用于其他昆虫或鲸蜡。合法鲸蜡路线从记录完整的既存原料及其实际回收开始，不使用蜂箱过程。首次熔融、分离与清洁后，可按实际销售状态进一步精制或着色。分级和防护包装止于实际生产或首次精制交付点；下游配方及运输不在范围内。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.insect-waxes-and-spermaceti-whether-or-not-refined-or-coloured |
| classification_refs | CPC 3.0 02960；对应 HS 1521.90 中的动物蜡部分 |
| covered_products | 按来源明确的昆虫蜡及合法来源鲸蜡，作为原蜡、精制蜡或着色蜡销售。 |
| excluded_products | 植物/矿物/合成蜡、脱脂残渣、配方产品和蜡制成品。 |
| representative_product | 单一已识别来源和销售状态、在真实交付点销售的蜡。 |
| production_route | 昆虫材料采集或合法既存鲸蜡材料回收；初制、可选处理、分级与交付。 |
| market_state | 净蜡；声明来源、原蜡/精制/着色状态、纯度/等级、着色剂、水分/杂质及 gate。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已识别昆虫来源的蜡或合法来源鲸蜡，处于声明的销售状态，不是跨来源汇总品。 |
| How much | 1 kg 净销售蜡，不含包装和可单独移除的异物。 |
| How well | 声明物种/来源、适用时的合法来源、处理、颜色、纯度/等级、水分/杂质及 gate。 |
| How long or cycle | 来源、采集、初制、处理及共用服务按真实批次和期间只归属一次。 |
| reference_flow_link | `sold_wax` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 来源、状态和 gate 明确的昆虫蜡或鲸蜡 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 昆虫物种或合法鲸蜡来源；路线；原蜡/精制/着色状态；着色剂；纯度/等级；水分/杂质；净重/皮重；gate；期间 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_net | 销售批次 | Mass | kg | 以校准毛重扣除包装皮重得净蜡；扣除可分离异物并披露留存杂质。 |
| m_state | 各处理状态 | Mass | kg | 实测分离及可选处理前后质量；单独记录添加着色剂与移除材料，不套用通用收率。 |
| m_balance | 每一按来源限定的批次 | Mass | kg | 核对来源材料、添加物、蜡等级、残余和库存变化。 |
| m_period | 来源与共用服务 | 时间 | 期间 | 按实际期间归集来源、采集和共用资产事件，不重复年化。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 已识别昆虫生产来源，或在实际采集/回收接口处的合法既存含鲸蜡材料。 |
| starting_condition_role | 相容上游数据集承担蜂群/昆虫生产或合法鲸蜡来源至该接口的负担；前景采集不重复上游生产。 |
| product_classification_scope | CPC 02960 动物蜡，不含植物蜡或蜡制成品。 |
| recursive_input_rule | 外购同类蜡保留上游负担，只进入实际适用的后续节点，不虚构再次采集。 |
| upstream_dataset_requirement | 按路线、来源、实际产出和期间确定的负担；鲸蜡须有合法来源链；蜂蜜仅限真实蜂业产出。 |
| disclosure | 蜡来源、合法取得、来源交接、真实联产品、采集和加工路线、状态、质量、gate、期间及共用资产。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_source | 来源路线 | 每批仅实例化一条路线。鲸蜡须有合法可追溯既存投入和相容负担，不建构假设性新捕获。蜂蜜仅限真实蜂业生产。 | un-cpc-3-notes;fao-beeswax |
| b_collect | 采集 | 蜂巢/封盖蜡/其他昆虫分泌物采集或合法鲸蜡原料回收，须与来源生产及后续熔融分开。 | fao-beeswax;fao-beekeeping |
| b_condition | 初次分离 | 纳入实际熔融、分离和清洁至初制蜡及实测服务/残渣；无默认配方。 | fao-beeswax;fao-beekeeping |
| b_treat | 可选处理 | 只纳入实际精制或着色及前后质量、投入、残余；原蜡批次绕过。 | un-cpc-3-notes;fao-beeswax |
| b_gate | 分级与交付 | 区分合格、可售降级与废弃；保护蜡至实际生产或首次精制交付点；排除配方与运输。 | un-cpc-3-notes |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| collect | 按来源采集含蜡材料 | required | 新取得的含蜡材料 | 独立采集/回收及首次交接。 | kg 采集材料 |
| condition | 首次蜡分离与初制 | required | 采集的原材料 | 首次熔融、分离、清洁至初制蜡。 | kg 初制蜡 |
| treat | 可选精制或着色 | conditional | 销售状态为精制或着色 | 有明确前后状态的实际材料处理。 | kg 处理后蜡 |
| grade | 蜡等级与去向分拣 | required | 初制或处理后蜡 | 区分合格、可售降级和废弃。 | kg 可售分级蜡 |
| handover | 保护性包装与交付 | required | 可售蜡 | 包装一次，在声明的 gate 交付。 | kg 净销售蜡 |

来源台账只计真实独立产出：仅蜂业实际采蜜时才计蜂蜜；其他昆虫和鲸蜡不预设蜂蜜或捕获联产品。上游来源止于含蜡材料交接，前景采集从此开始。熔融罐、过滤器、能源、仓储和包装按实际使用节点及期间只分配一次。原蜡批次绕过可选处理。每个可售等级只有一个去向；废物不是产品。
### 过程：按来源采集含蜡材料（`collect`）

#### 输入

##### 产品流

###### 昆虫来源含蜡材料（`insect_source`）

仅实际蜂巢、封盖蜡或其他有记录的昆虫分泌物，不包括鲸蜡。

分母与范围要求：每千克采集材料

原始数量及计算要求：计量实际昆虫来源含蜡材料，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：昆虫来源含蜡材料（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collect`
- 数量范围：暂定非负台账 QA，不是收率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克采集材料
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 合法取得且可追溯的既存含鲸蜡材料（`sperm_source`）

仅使用有合法来源链、上游负担且属于可交易 Product 的既存原料，不模拟新的捕鲸。依法属于 Waste 的材料使用另一张卡，同一材料不得两卡并计。

分母与范围要求：每千克采集材料

原始数量及计算要求：计量实际合法取得且可追溯的既存含鲸蜡材料，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：合法来源鲸蜡原料（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collect`
- 数量范围：暂定非负台账 QA，不是收率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克采集材料
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 合法可回收的含鲸蜡废物（`sperm_waste`）

仅在现有材料依法属于 Waste 且允许回收时使用；同一材料不得再计 Product 投入。

分母与范围要求：每千克采集材料

原始数量及计算要求：称量合法废物投入，保留法律状态、上游负担和终端处理备选记录。 原始采集分母类型：process_output。

- 选定流：合法来源且可回收的含鲸蜡废物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collect`
- 数量范围：条件性废物投入台账 QA，不是回收收率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克采集材料
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 采集后的含蜡材料（`collected`）

按来源记录一次采集并交接至初次分离。

分母与范围要求：每千克采集材料

原始数量及计算要求：计量实际采集后的含蜡材料，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：来源明确的采集含蜡材料（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collect`
- 数量范围：实测归一化恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每千克采集材料
  - 基准类型：过程产出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 采集废弃物（`collect_reject`）

不可售杂质按实际废物去向记录，不虚构蜂蜜或鲸类产出。

分母与范围要求：每千克采集材料

原始数量及计算要求：计量实际采集废弃物，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：按来源识别的不可售采集残渣（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 数量范围：暂定非负台账 QA，不是收率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克采集材料
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：首次蜡分离与初制（`condition`）

#### 输入

##### 产品流

###### 进入初次分离的采集材料（`condition_in`）

关联采集记录，不重复计入蜂群或存量原料负担。

分母与范围要求：每千克初制蜡

原始数量及计算要求：计量实际进入初次分离的采集材料，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：来源明确的采集含蜡材料（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_condition`
- 数量范围：暂定非负台账 QA，不是收率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克初制蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初制能源（`energy`）

计量熔融或分离实际使用的能源，不设默认热量。

分母与范围要求：每千克初制蜡

原始数量及计算要求：计量实际初制能源，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：初次分离实际能源载体（UUID 未解析）
- 流属性/单位：Energy / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_condition`
- 数量范围：暂定非负台账 QA，不是收率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：MJ/kg
  - 基准：每千克初制蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 条件性洗涤或清洁用水（`wash_water`）

仅在现场实际洗涤或水基清洁时，按 Product 投入记录供水；干法分离没有此投入。声明水源，并按实际去向和受纳介质核对废水或蒸发。

分母与范围要求：每千克初制蜡

原始数量及计算要求：按水源和批次计量跨初制边界的供水，不推断默认洗涤率。 原始采集分母类型：process_output。

- 选定流：初次蜡清洁实际供应的水（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_condition`
- 数量范围：条件性用水台账 QA，不是洗涤配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克初制蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 初制蜡（`prepared`）

初次分离清洁后、可选精制着色前称重。

分母与范围要求：每千克初制蜡

原始数量及计算要求：计量实际初制蜡，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：来源明确的初制蜡（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_condition`
- 数量范围：实测归一化恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每千克初制蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 分离残渣（`separation_reject`）

滤渣等不可售残余按实际处理去向记录。

分母与范围要求：每千克初制蜡

原始数量及计算要求：计量实际分离残渣，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：不可售初次分离残渣（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 数量范围：暂定非负台账 QA，不是收率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克初制蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：可选精制或着色（`treat`）

#### 输入

##### 产品流

###### 进入可选处理的蜡（`treat_in`）

仅精制或着色批次进入；原蜡批次绕过此节点。

分母与范围要求：每千克处理后蜡

原始数量及计算要求：计量实际进入可选处理的蜡，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：来源明确的初制蜡（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_treat`
- 数量范围：暂定非负台账 QA，不是收率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克处理后蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际精制助剂或着色剂（`additive`）

计量实际材料和留存在蜡中的着色剂；未处理批次不计入。

分母与范围要求：每千克处理后蜡

原始数量及计算要求：计量实际实际精制助剂或着色剂，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：具体材料的精制助剂或蜡着色剂（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_treat`
- 数量范围：暂定非负台账 QA，不是收率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克处理后蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 精制或着色蜡（`treated`）

按实测质量及纯度、颜色状态交接处理后蜡。

分母与范围要求：每千克处理后蜡

原始数量及计算要求：计量实际精制或着色蜡，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：来源明确的精制或着色蜡（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_treat`
- 数量范围：实测归一化恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每千克处理后蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 处理残渣（`treat_reject`）

废助剂和不可售残余按实际废物去向记录。

分母与范围要求：每千克处理后蜡

原始数量及计算要求：计量实际处理残渣，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：不可售精制或着色残渣（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 数量范围：暂定非负台账 QA，不是收率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克处理后蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：蜡等级与去向分拣（`grade`）

#### 输入

##### 产品流

###### 进入分级的蜡（`grade_in`）

同一批次仅从初制蜡或处理后蜡进入一次，不得双计。

分母与范围要求：每千克可售分级蜡

原始数量及计算要求：计量实际进入分级的蜡，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：来源和状态明确的待分级蜡（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定非负台账 QA，不是收率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克可售分级蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格或降级可售蜡（`saleable`）

合格及独立销售的降级品各有唯一去向。

分母与范围要求：每千克可售分级蜡

原始数量及计算要求：计量实际合格或降级可售蜡，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：来源、状态和等级明确的可售蜡（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：实测归一化恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每千克可售分级蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 分级废蜡（`grade_reject`）

不可售蜡按废物处理，不作为第二个产品。

分母与范围要求：每千克可售分级蜡

原始数量及计算要求：计量实际分级废蜡，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：不可售废蜡（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 数量范围：暂定非负台账 QA，不是收率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克可售分级蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：保护性包装与交付（`handover`）

#### 输入

##### 产品流

###### 包装前可售蜡（`handover_in`）

从分级接收一批来源、状态和等级确定的蜡。

分母与范围要求：每千克净销售蜡

原始数量及计算要求：计量实际包装前可售蜡，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：来源、状态和等级明确的可售蜡（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定非负台账 QA，不是收率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克净销售蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保护性包装（`package`）

记录实际消耗的包装或计量后的复用服务，不计后续运输。

分母与范围要求：每千克净销售蜡

原始数量及计算要求：计量实际保护性包装，并关联批次、来源、状态和期间。 原始采集分母类型：process_output。

- 选定流：实际蜡包装或复用服务（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定非负台账 QA，不是收率或配方
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg
  - 基准：每千克净销售蜡
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际交付口的净蜡（`sold_wax`）

按实际来源、销售状态和交付口实例化一个参考角色；不假定宽泛固定 UUID。

参考产出的原始记录：计量实际实际交付口的净蜡，并关联批次、来源、状态和期间。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 来源、状态和 gate 明确的昆虫蜡或鲸蜡
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：实测归一化恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg
  - 基准：每 1 千克净参考蜡
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_source | 实际来源产出组合 | 列出蜡及每种实际独立销售产出和各自交付点。蜂蜜只在真实蜂源实际采蜜时作为联产品。优先采用有依据的因果物理分配；若无可靠因果驱动量，则披露按期间价格的经济分配及敏感性。不自动给蜡零负担或全部来源负担。 | fao-beeswax;fao-beekeeping |
| a_sperm | 合法鲸蜡来源 | 要求合法链、相容上游负担、真实其他产出，并说明既存材料及终端备选处理。不虚构新捕获或联产品。 | un-cpc-3-notes |
| a_state | 加工与等级 | 实际蜡状态和相互独立可售等级各归集一次。添加着色剂或提纯不等于再产生原始蜡；废物不作为可售蜡。 | fao-beeswax |
| a_period | 来源阶段与共用服务 | 标引蜂群/来源、采集、熔融、过滤、仓储与包装期间；共用罐、过滤器、能源及包装服务按观察的吞吐量/时间在实际使用者间分配一次，记录更换/终止。 | fao-beeswax |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_collect | collect | 来源与采集材料 | 来源台账 | 来源/物种、合法链、路线、材料质量、真实产出、事件、期间 | 来源单与校准秤；原始汇总要求：路线互斥，每批一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;period | 每批 | 来源和采集期间 | 供应商与采集点 | 每参考流 | 单据、校准、合法链；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_condition | condition | 材料、能源、条件性洗涤水和初制蜡 | 分离台账 | 批次、进出质量、方法、能源载体/数量、水源/投入、废水或蒸发去向、纯度、水分 | 秤、仪表与检测；原始汇总要求：按来源核对前后及用水平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg;MJ | 每批 | 初制期间 | 设施 | 每参考流 | 秤、仪表、检测；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_treat | treat | 可选精制或着色 | 处理台账 | 批次、进出质量、添加材料、颜色、纯度、废弃物 | 批次表、秤、检测；原始汇总要求：一次；原蜡绕过。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每处理批 | 处理期间 | 设施 | 每参考流 | 批次表、检测；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_grade | grade | 合格、降级、废弃 | 分级台账 | 来源、状态、等级、质量、去向 | 分级单与秤；原始汇总要求：等级互斥。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 分级期间 | 设施 | 每参考流 | 分级与废弃单；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_handover | handover | 蜡、包装、gate | 出货台账 | 来源、状态、着色剂、纯度、水分、毛重、皮重、净重、包装复用、gate | 出货单与秤；原始汇总要求：每批一次净重销售。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每售出批 | 交付期间 | 设施 | 每参考流 | 单据与校准；可追溯分子、合格参考产出分母及归一化计算表 |
| cp_residue | collect;condition;treat;grade | 废物 | 处理台账 | 批次、类型、质量、去向、期间 | 秤与转移单；原始汇总要求：每材料/去向一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每事件 | 相应期间 | 来源点 | 每参考流 | 转移单；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_net | 售出批次 | 净销售蜡 = 毛重 - 包装皮重 - 可单独移除的异物；披露留存水分和杂质。 | cp_handover | kg 净销售蜡 |  |
| c_balance | 来源至交付 | 来源材料加实际添加物，等于可售蜡、残余、实测移除物及库存变化；不得用通用蜡收率。 | cp_collect;cp_condition;cp_treat;cp_grade;cp_handover;cp_residue | kg 平衡残差 | fao-beeswax |
| c_period | 来源与共用服务 | 各来源阶段、共用罐、过滤器、能源、仓储或包装服务按使用批次及期间只归属一次。 | cp_collect;cp_condition;cp_treat;cp_handover | 负担/kg 蜡 | fao-beeswax |
| c_norm | 最终交换 | 可归属交换量除以同一来源/状态/gate 批次的正净质量。 | cp_handover | 单位/kg 蜡 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | 每批 | 证明来源/物种、鲸蜡合法性、状态、等级、着色剂、纯度及 gate。 | 来源/合法链、批次、出货记录 |
| q_mass | 每批 | 校准净重/皮重和前后质量；检测杂质/水分。 | 秤、检测、物料衡算 |
| q_allocation | 来源与共用服务 | 记录真实产出、期间、驱动量及不重复的资产服务。 | 来源产出与服务期间台账 |
| q_uuid | 最终交换 | 具体交换须核实确切来源/状态/角色/gate 和属性/单位支持。 | 已核实身份依据 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | 参考批次 | 排除植物/矿物/合成蜡、脱脂残渣、制成品与无来源平均品；要求来源及原蜡/精制/着色销售状态。 | un-cpc-3-notes |
| v_route | 来源 | 昆虫或合法既存鲸蜡来源互斥且上游负担完整；不得虚构捕鲸或非蜂源蜂蜜。 | fao-beeswax;fao-beekeeping |
| v_balance | 批次 | 核对采集材料、添加物、初制/处理后蜡、等级、废弃及净重；调查残差。 | fao-beeswax |
| v_allocation | 来源与共用服务 | 排除蜡自动零/全部负担、重复蜂蜜/蜡或共用资产期间。 | fao-beeswax |
| v_identity | 具体交换 | 核实流类型、方向、来源、状态、gate、Mass 属性和单位组；蜂蜡专用流不能代表宽泛参考品。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 来源、路线、等级、状态及 gate 明确的动物蜡前景数据集。 |
| downstream_use | 仅在具体流身份核实、审查和发布后作为候选 secondary_dataset 或 background_dataset。 |
| allowed_use | 同来源/状态蜡比较或基于实测的状态换算。 |
| excluded_use | 跨来源代理、虚构捕获、不实蜂蜜、下游制成品或通用收率。 |
| required_metadata | 来源/物种、合法链、路线、状态、着色剂、纯度、水分、净质量、gate、期间和真实产出。 |
| required_quality_disclosure | 联产品/期间分配、平衡、废弃物、共用服务驱动量及未解析 UUID。 |
| update_trigger | 平台精确蜡流核实、合法/来源路线变化、实测方法证据或分类变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-notes` | official_guidance | [UN CPC 3.0 说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 蜡范围与销售状态 |
| `fao-beeswax` | official_guidance | [FAO 蜂蜡生产与精制](https://www.fao.org/4/i0842e/i0842e12.pdf) | 蜂来源与分离 |
| `fao-beekeeping` | official_guidance | [FAO 蜂业增值产品，第 4 章](https://www.fao.org/4/w0076e/w0076e12.htm) | 蜂巢/封盖蜡与蜂蜜情境 |
