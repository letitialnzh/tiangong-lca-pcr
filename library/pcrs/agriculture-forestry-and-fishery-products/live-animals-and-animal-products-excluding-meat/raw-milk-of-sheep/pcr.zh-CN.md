---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-sheep
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 绵羊生乳

## 1. 范围与适用性

本 PCR 涵盖奶用绵羊群在实际生产农场交付的未加工绵羊生乳。温态生乳与场内冷却生乳是互斥最终状态，每批仅选一个。排除热处理奶、配制奶、独立脱脂或部分脱脂奶、收集中心加工及下游乳制品。CPC 的低脂排除条款不是天然未加工生乳脂肪含量的通用测量阈值。记录品种、羊群、泌乳期、温度、首次调理及冷却状态。来源：`un-cpc-3-2025`、`fao-small-ruminant-dairy`、`fao-leap-small-ruminants-2016`。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-sheep |
| classification_refs | CPC 3.0 02291 绵羊生乳 |
| covered_products | 生产农场交付的未加工绵羊生乳，包括温态或场内冷却状态。 |
| excluded_products | 巴氏杀菌或其他热处理、配制、独立脱脂或部分脱脂奶及下游乳制品。 |
| representative_product | 在实际生产农场门交付的 1 kg 实测绵羊生乳。 |
| production_route | 受控奶用母羊生物生产；独立挤奶/收集；可选首次筛滤/过滤；可选场内冷却；最终一次交付。放牧与舍饲/精料型为同一受控羊群主体的有证据替代路线。 |
| market_state | 在生产农场门交付的温态或冷却态绵羊液态生乳。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 奶用绵羊群在实际农场交付的液态生乳。 |
| How much | 1 kg 实测验收奶；若由体积换算，保留实测体积和密度。 |
| How well | 未加热、未配制、未分离；披露温度及首次过滤/冷却状态。 |
| How long or cycle | 挤奶批次及关联的母羊泌乳、繁殖与替换期间。 |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 生产农场交付的温态或冷却绵羊生乳；宽口径 UUID 未解析 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 绵羊物种与奶用品种；羊群/农场；挤奶批次；温态/冷却状态；实际温度；首次过滤/冷却；实际生产者交付点；泌乳期；质量或体积-密度方法 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

已确认的冷却农场门产品 UUID 不代表温态或冷却的宽口径参考身份。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `milk_mass` | 最终生乳 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在生产农场门实测验收质量；由体积换算时记录密度与温度。 |
| `milk_state` | 温态/冷却路线 | 质量与温度 | kg; °C | 保留实际状态；不得仅由笼统生乳名称推定冷却身份。 |
| `feed_basis` | 母羊饲料/牧草 | 原样或干物质基准 | kg | 汇总前明确饲料含水量与放牧采食方法。 |
| `energy_basis` | 挤奶/冷却能源 | 载体特定属性 | 供应单位 | 保留实际载体、单位及有据换算。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 奶用母羊群及有记录的替换羊、饲料/牧草、水、挤奶服务和实际运行的调理/冷却设备。 |
| starting_condition_role | 生物生产起点及采购投入/服务来源。 |
| product_classification_scope | CPC 3.0 02291 绵羊生乳；实际销售时羔羊、淘汰羊、羊毛及独立转出的粪肥为不同产品。 |
| recursive_input_rule | 从其他农场采购的绵羊生乳仅承载一次上游负荷；内部奶转移关联生产节点，不再作为外部投入重新导入。 |
| upstream_dataset_requirement | 为采购饲料、替换羊、水、能源、过滤材料及服务关联来源特定上游数据；披露缺失。 |
| disclosure | 声明农场/羊群/品种、放牧或舍饲期间、泌乳与替换、羔羊哺乳/留奶、挤奶/过滤/冷却路线、最终状态/交付点、粪污去向、副产品及共享设施。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `one_final_state` | 最终批次 | 仅选择一种温态或冷却的生产农场最终奶状态；内部转移不是额外的最终售出奶。 | `un-cpc-3-2025` |
| `milking_capture` | 母羊奶 | 将挤奶与羊群生物生产分开，因为收集在调理前确定实测可销售奶与溢漏/剔除。 | `fao-small-ruminant-dairy` |
| `first_conditioning` | 可选筛滤 | 仅实际运行时纳入首次过滤，记录温态收集奶投入、调理生乳产出、材料投入和剔除；不热处理。 | `fao-small-ruminant-dairy` |
| `farm_chilling` | 可选冷却 | 仅实际场内冷却时纳入，记录温态投入、能源、冷却生乳产出、损失与最终温度。 | `fao-small-ruminant-dairy` |
| `pasture_housed_delta` | 替代羊群管理 | 两者保留受控母羊生产；放牧改变采食测量和粪污落点，舍饲/精料改变饲料来源、舍内用水和粪污贮存。每个羊群期间选择有证据的清单类别及计算途径，混合期有记录地拆分。 | `fao-small-ruminant-dairy` |
| `period_shared` | 羊群与奶节点 | 将繁殖、泌乳、干奶和替换期间及共享挤奶厅/奶罐/水泵服务仅一次关联到受益产出批次。 | `fao-leap-small-ruminants-2016` |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ewe_herd` | 奶用母羊群 | `required` | 产奶绵羊必需。 | 受控繁殖、泌乳及干奶期生物生产。 | 每 1 kg 最终绵羊生乳 |
| `milking` | 挤奶与生乳收集 | `required` | 实际收集生乳。 | 独立收获乳汁及卫生首次交接。 | 每 1 kg 最终绵羊生乳 |
| `primary_conditioning` | 首次筛滤或过滤 | `conditional` | 仅实际场内首次过滤时。 | 收集生乳转调理生乳，并非热处理。 | 每 1 kg 最终绵羊生乳 |
| `farm_chilling` | 场内生乳冷却 | `conditional` | 仅实际冷却最终路线。 | 可用温态转稳定冷却生乳态。 | 每 1 kg 最终绵羊生乳 |
| `farm_handover` | 生产农场生乳交付 | `required` | 每批一个温态或冷却最终农场门。 | 实际生产农场验收最终奶与损失。 | 每 1 kg 最终绵羊生乳 |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

### 过程：奶用母羊群 (`ewe_herd`)

#### 输入

##### 产品流

###### 母羊饲料与牧草 (`herd_feed`)

按来源与基准记录实际放牧、收获及采购饲料。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：供应加期初减期末库存，放牧采食另据证据。 原始采集分母类型：reference_flow。

- 选定流：母羊饲料/牧草；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd_inputs`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
###### 母羊饮用及服务用水 (`herd_water`)

依据前景记录拆分实际饮用和服务用途；组别暂缓。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：计量归属母羊群及期间的用水。 原始采集分母类型：reference_flow。

- 选定流：按实际用途区分的羊群用水
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd_inputs`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入挤奶的生物学奶 (`milk_to_milking`)

此内部羊群产出由对应挤奶批次计量，并非最终售出奶。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：将收集奶质量仅一次归属母羊期间。 原始采集分母类型：reference_flow。

- 选定流：内部温态绵羊奶；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking_lot`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
###### 独立销售羔羊 (`sold_lambs`)

仅实际交付的羔羊属于副产品；记录活重与只数。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：在独立交付时实测羔羊质量/只数。 原始采集分母类型：reference_flow。

- 选定流：活羔羊；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd_outputs`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
###### 独立销售淘汰母羊 (`culled_ewes`)

将售出活母羊与死亡羊分开。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：独立转出时实测活重/只数。 原始采集分母类型：reference_flow。

- 选定流：淘汰活母羊；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd_outputs`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
###### 销售粪肥产品 (`sold_manure`)

仅有产品交付证据时记录有意转出的粪肥。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：独立销售/转出时称重粪肥。 原始采集分母类型：reference_flow。

- 选定流：羊粪肥产品；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd_outputs`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
##### 废物流

###### 未售粪污 (`unsold_manure`)

未销售粪污按去向计残余/废物；不得重复计已售部分。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：称重/核对粪污及处置去向。 原始采集分母类型：reference_flow。

- 选定流：羊粪污残余/废物；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd_outputs`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 母羊死亡 (`ewe_mortality`)

将死亡母羊与独立销售的活淘汰母羊分开，并记录处置路线。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：计数死亡羊，依据实测类别重量计算质量或称重清运物。 原始采集分母类型：reference_flow。

- 选定流：死亡母羊生物废物；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd_outputs`
- 数量范围：暂定死亡量筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 肠道生物源甲烷向空气排放 (`enteric_ch4`)

采用母羊肠道途径和受纳空气环境，UUID 不代表因子。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：依据实测母羊类别/饲料及有据肠道方法计算。 原始采集分母类型：reference_flow。

- 选定流：生物源甲烷，向空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
###### 粪污生物源甲烷向空气排放 (`manure_ch4`)

将粪污贮存/处理途径与肠道甲烷分开。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：依实测粪污系统及有据方法计算。 原始采集分母类型：reference_flow。

- 选定流：生物源甲烷，向空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
###### 粪污氧化亚氮向空气排放 (`manure_n2o`)

明确具体粪污氮途径及受纳空气。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：依实测氮/系统及有据方法层级计算。 原始采集分母类型：reference_flow。

- 选定流：氧化亚氮，向空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
###### 粪污氨向空气排放 (`manure_nh3`)

用独立 NH3 测量或另据来源因子，不采用 IPCC CH4/N2O 因子。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：记录实际粪污/羊舍途径的实测 NH3。 原始采集分母类型：reference_flow。

- 选定流：氨，向空气 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
### 过程：挤奶与生乳收集 (`milking`)

#### 输入

##### 产品流

###### 进入收集的母羊奶 (`milk_at_udder`)

内部羊群奶只一次进入收集，按本挤奶批次计量。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：实测泌乳母羊奶量并披露羔羊留奶。 原始采集分母类型：reference_flow。

- 选定流：收集前温态绵羊生乳；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking_lot`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
###### 挤奶卫生过程用水 (`milking_water`)

乳头和设备清洁用水不同于母羊饮水。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：计量挤奶清洁用水。 原始采集分母类型：reference_flow。

- 选定流：挤奶过程用水
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking_services`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
###### 挤奶泵能源 (`milking_energy`)

记录实际能源载体及归属服务期间。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：计量/发票能源量归属挤奶。 原始采集分母类型：reference_flow。

- 选定流：挤奶能源载体
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking_services`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：1000
  - 单位：MJ/kg 奶
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已收集温态生乳 (`warm_collected_milk`)

此可用奶位于可选过滤/冷却或温奶最终交付之前。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：实测卫生验收的温奶。 原始采集分母类型：reference_flow。

- 选定流：收集温态绵羊生乳；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking_lot`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
##### 废物流

###### 挤奶剔除与溢漏 (`milking_rejects`)

将剔除奶与可销售收集奶分开。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：核对投入与验收奶及处置。 原始采集分母类型：reference_flow。

- 选定流：剔除绵羊奶废物；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking_lot`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
###### 挤奶清洗废水 (`milking_wastewater`)

追踪清洗废液及去向，区别于剔除奶。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：将排水与供应清洗水核对。 原始采集分母类型：reference_flow。

- 选定流：挤奶废水；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking_services`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
##### 基本流

### 过程：首次筛滤或过滤 (`primary_conditioning`)

#### 输入

##### 产品流

###### 进入首次过滤的温奶 (`conditioning_milk`)

收集温奶进入一次有边界的非热过滤步骤。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：实测转入温奶质量。 原始采集分母类型：reference_flow。

- 选定流：供过滤的温态绵羊生乳；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_lot`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
###### 过滤材料 (`filter_media`)

仅记录实际一次性介质；可复用设备为共享服务。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：逐批称量领用介质。 原始采集分母类型：reference_flow。

- 选定流：按实际材料区分的过滤介质；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_lot`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调理后温态生乳 (`conditioned_warm_milk`)

首次过滤奶仍未加热且为生乳，转向冷却或交付。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：实测调理奶净质量。 原始采集分母类型：reference_flow。

- 选定流：过滤温态绵羊生乳；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_lot`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
##### 废物流

###### 过滤残留与剔除奶 (`conditioning_rejects`)

按实际处置路线记录固体/介质及截留奶损失。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：核对过滤投入、调理产出及残留。 原始采集分母类型：reference_flow。

- 选定流：过滤残留/奶废物；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_lot`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
##### 基本流

### 过程：场内生乳冷却 (`farm_chilling`)

#### 输入

##### 产品流

###### 冷却前可用温奶 (`chilling_milk`)

本实物批次仅一次从挤奶或调理接收奶。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：实测温奶和初始温度。 原始采集分母类型：reference_flow。

- 选定流：冷却前温态绵羊生乳；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_lot`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
###### 制冷能源 (`chilling_energy`)

记录实际载体与表计；不设通用制冷因子。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：将计量能源归属奶批次。 原始采集分母类型：reference_flow。

- 选定流：场内冷却能源载体
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_lot`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：1000
  - 单位：MJ/kg 奶
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门前冷却生乳 (`chilled_internal_milk`)

冷却后仍为生乳；内部转移不是农场门身份。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：实测冷却质量与最终温度。 原始采集分母类型：reference_flow。

- 选定流：内部冷却绵羊生乳；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_lot`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
##### 废物流

###### 冷却损失与剔除 (`chilling_losses`)

将溢漏/剔除奶与可用冷却奶分开。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：核对投入与验收产出及处置。 原始采集分母类型：reference_flow。

- 选定流：冷却剔除奶；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_lot`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
##### 基本流

### 过程：生产农场生乳交付 (`farm_handover`)

#### 输入

##### 产品流

###### 农场交付温态生乳投入 (`warm_for_gate`)

仅非冷却路线，从挤奶或调理仅一次转入。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：实测呈送交付的温奶。 原始采集分母类型：reference_flow。

- 选定流：农场门前温态绵羊生乳；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_farm_handover`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
###### 农场交付冷却生乳投入 (`chilled_for_gate`)

仅冷却路线，从场内冷却节点仅一次转入。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：实测呈送交付的冷却奶。 原始采集分母类型：reference_flow。

- 选定流：农场门前冷却绵羊生乳；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_farm_handover`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门温态绵羊生乳 (`warm_final_milk`)

最终温态/未加工奶；冷却 UUID 不相容。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：选择温奶路线时 1 kg 实测验收奶。 原始采集分母类型：reference_flow。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：生产农场门温态绵羊生乳；UUID 未解析
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_farm_handover`
- 数量范围：参考流质量守恒校验
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`
###### 农场门冷却绵羊生乳 (`chilled_final_milk`)

生产农场门精确匹配的冷却未加工绵羊奶产品。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：选择冷却奶路线时 1 kg 实测验收奶。 原始采集分母类型：reference_flow。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：绵羊生乳，冷却，农场门 `8b3a0949-2be7-413b-bdc3-0f1f8942eb61`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_farm_handover`
- 数量范围：参考流质量守恒校验
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`
##### 废物流

###### 最终奶损失与剔除 (`gate_losses`)

剔除奶不得计为最终可销售生乳。

分母与范围要求：每 1 kg 最终绵羊生乳

原始数量及计算要求：呈送减验收售出质量，与处置核对。 原始采集分母类型：reference_flow。

- 选定流：剔除绵羊奶废物；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_farm_handover`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg/kg 最终绵羊生乳
  - 基准：每 1 kg 最终绵羊生乳
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
##### 基本流

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 生产农场交付的温态或冷却绵羊生乳；宽口径 UUID 未解析（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `warm_final_milk`, `chilled_final_milk` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`warm_final_milk`, `chilled_final_milk`

必需产品实例限定项：绵羊物种与奶用品种；羊群/农场；挤奶批次；温态/冷却状态；实际温度；首次过滤/冷却；实际生产者交付点；泌乳期；质量或体积-密度方法

- 选定流：生产农场交付的温态或冷却绵羊生乳；宽口径 UUID 未解析（实际生产者交付关联）
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

###### 生产农场交付的温态或冷却绵羊生乳；宽口径 UUID 未解析 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`warm_final_milk`, `chilled_final_milk`

必需产品实例限定项：绵羊物种与奶用品种；羊群/农场；挤奶批次；温态/冷却状态；实际温度；首次过滤/冷却；实际生产者交付点；泌乳期；质量或体积-密度方法

- 选定流：生产农场交付的温态或冷却绵羊生乳；宽口径 UUID 未解析
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

## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_census` | 母羊群 | 列举生乳、独立销售羔羊/淘汰羊、实际剪取并销售的羊毛及外运粪肥的交付点。死亡羊和未售粪污为废物/残余物。若销售羊毛，按实际记录增列其产出交换。 | `fao-small-ruminant-dairy` |
| `allocation_precedence` | 联合产出 | 优先细分实测活动；否则使用可辩护的物理因果分配，再按同期经济价值并披露期间和敏感性。不默认替代抵扣。 | `fao-leap-small-ruminants-2016` |
| `period_attribution` | 繁殖/泌乳/替换 | 将饲料、服务、奶、羔羊、淘汰羊和事件归属实测期间；跨期负荷仅一次传递，并披露羔羊留奶。 | `fao-leap-small-ruminants-2016` |
| `shared_attribution` | 挤奶厅、奶罐、水泵、表计 | 列出羊群/挤奶/调理/冷却各受益方及服务期间；按表计或有据时间/吞吐量分配，与总量核对且不重复。 | `fao-leap-small-ruminants-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd_inputs` | `ewe_herd` | 饲料、牧草、水 | 饲料库存/放牧与表计 | 羊群；期间；饲料类型；库存；放牧方法；水源/表计 | 按母羊类别与期间核对采食；原始汇总要求：每期一份实测量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每次饲喂/抄表 | 完整泌乳与干奶期 | 母羊群 | 每参考流 | 饲料台账、放牧估算、表计；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_herd_outputs` | `ewe_herd` | 羔羊、淘汰羊、粪污、死亡母羊 | 出生/移动/销售/死亡 | 羊群；期间；羔羊/淘汰羊/死亡只数和质量；粪污质量；交付点；去向 | 分别计数称重产出、损失与死亡；原始汇总要求：按交付区分产品和废物。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; 只 | 每次事件 | 繁殖/替换期 | 母羊群 | 每参考流 | 出生/死亡登记、秤、销售/处置；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure_records` | `ewe_herd` | 粪污与大气物质 | 粪污/氮/肠道记录 | 母羊类别；期间；饲料；粪污途径；挥发性固体；氮；CH4/N2O 因子；独立 NH3 观测 | CH4/N2O 按实际方法；NH3 仅依独立测量或另据来源；原始汇总要求：每份粪污一个途径。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 物质 | 每个羊群期 | 完整舍饲/放牧/粪污期 | 母羊群/粪污节点 | 每参考流 | 分析、方法表、NH3 记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_milking_lot` | `milking` | 生物学奶/收集奶/剔除奶 | 挤奶表与奶罐 | 羊群；母羊只数；时间；体积；密度；温度；质量；剔除 | 逐批计量并核对留奶/溢漏；原始汇总要求：逐批汇总验收与损失。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; L | 每次挤奶 | 完整挤奶期 | 挤奶厅 | 每参考流 | 奶罐校准、挤奶日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_milking_services` | `milking` | 卫生用水、能源、废水 | 表计/发票与清洗 | 批次；水；载体；清洗间隔；废水去向 | 共享服务归属批次；原始汇总要求：核对投入/排放水。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; kWh; MJ | 每次抄表 | 完整挤奶期 | 挤奶厅 | 每参考流 | 表计、清洗日志、发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_conditioning_lot` | `primary_conditioning` | 奶、过滤材料、剔除 | 过滤/批次表 | 批次；投入质量；过滤质量；验收质量；残留；去向 | 称重核对投入、产出、剔除；原始汇总要求：一次实物奶转移。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 完整调理期 | 场内调理 | 每参考流 | 秤、过滤日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_chilling_lot` | `farm_chilling` | 温/冷却奶、能源、损失 | 奶罐/表计 | 批次；温奶质量/温度；冷奶质量/温度；能源；剔除 | 测量前后状态和能源载体；原始汇总要求：核对奶平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; °C; kWh; MJ | 每批 | 完整冷却期 | 场内冷却 | 每参考流 | 奶罐、表计日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_farm_handover` | `farm_handover` | 温/冷却最终奶与损失 | 农场门验收 | 批次；交付点；生乳状态；质量；温度；售出/退回/损失 | 称重验收奶并记录一种路线；原始汇总要求：验收奶归一到 1 kg。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; °C | 每批 | 挤奶至交付点 | 生产农场 | 每参考流 | 交付单、秤、温度记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `feed_consumed` | 母羊饲料 | 期初库存 + 交付/收获 − 期末库存 − 退回；放牧采食另需证据。 | 库存；供应；放牧 | 各类/期间饲料 kg | `mass-balance-identity` |
| `milk_volume_mass` | 体积记录 | 奶 kg = 实测 L × 批次实测密度，不采用统一密度。 | L；密度；温度 | 生乳 kg | `mass-balance-identity` |
| `milk_balance` | 挤奶至交付 | 各节点奶投入 = 合格产出 + 剔除/损失，在表计不确定度内；内部转移不得两次计售。 | 投入；合格；剔除 | 合格及损失 kg | `mass-balance-identity` |
| `herd_ch4_n2o` | 肠道/粪污排放 | 以实测母羊类别、饲料、挥发性固体/氮与粪污途径及有据方法层级计算；UUID 不是因子。 | 羊群；饲料；VS；氮；途径；因子 | CH4/N2O 分别计 kg | `ipcc-livestock-2019` |
| `nh3_measurement` | 粪污 NH3 | 使用独立实测 NH3 或另有来源的相容方法，不采用 CH4/N2O 因子。 | NH3 观测/方法 | NH3 kg |  |
| `shared_reconcile` | 共享挤奶厅/冷却机 | 节点-期间份额在不确定度内等于实测服务总量。 | 表计；时间/吞吐量 | 已分配服务 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 最终奶 | 记录羊群/品种、农场/交付点、批次、生乳/温态/冷却状态、温度和质量。 | 羊群登记、验收单、奶罐日志 |
| `dq_route` | 全部节点 | 明确放牧/舍饲期间、实际调理/冷却、羔羊哺乳/留奶、采购/内部投入。 | 企业图、羊群/奶台账 |
| `dq_complete` | 奶、饲料、水、能源、粪污 | 核对完整期间投入/产出、缺失数据、损失、粪污去向及副产品交付。 | 库存、表计、销售/处置 |
| `dq_attribution` | 联合与共享 | 归档期间、物理/经济分配基准、份额与敏感性；防止重复负荷。 | 分配计算表 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_raw_state` | 最终参考 | 核实未加热、未分离的绵羊生乳和唯一温态/冷却农场门产品；冷却 UUID 不得填入宽口径参考或温奶产出。 | `un-cpc-3-2025` |
| `validate_balance` | 奶节点 | 核对收集、过滤、冷却与验收批次及剔除；中间奶不得两次作为最终售出。 | `mass-balance-identity` |
| `validate_outputs` | 羊群分配 | 分配前检查奶、销售羔羊/淘汰羊、实际羊毛/粪肥转出、死亡和未售粪污状态/交付点。 | `fao-small-ruminant-dairy` |
| `validate_periods` | 羊群/挤奶 | 繁殖、泌乳、干奶和替换期间/事件仅一次关联到受益奶与动物。 | `fao-leap-small-ruminants-2016` |
| `validate_shared` | 共享资产 | 识别挤奶厅、奶罐、水泵、冷却机及表计全部受益方/期间；分配份额与总量核对。 | `fao-leap-small-ruminants-2016` |
| `validate_route` | 放牧/舍饲 | 需实际饲料、水和粪污证据；不得叠加互斥路线假设。 | `fao-small-ruminant-dairy` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 一个生产农场绵羊生乳批次的前景包。 |
| downstream_use | 经审核可作为 `secondary_dataset` 或 `background_dataset` 用于 process/lifecyclemodel 投影。 |
| allowed_use | 有声明绵羊生乳状态及农场门，含实测质量、羊群/期间、投入、排放、损失与副产品。 |
| excluded_use | 加工/脱脂奶、推断冷却状态、收集中心交付点或未声明联合产出假设。 |
| required_metadata | 农场/交付点、羊群/品种、挤奶批次、温态/冷却状态、温度、生乳调理、期间及核实具体流。 |
| required_quality_disclosure | 饲料/放牧测定、羔羊留奶、奶损失、粪污途径、排放方法、分配与未解析身份/Range。 |
| update_trigger | 产品状态/交付点、羊群路线、粪污系统、分配基准或核实 UUID 改变。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 绵羊生乳分类与排除。 |
| `fao-small-ruminant-dairy` | `official_guidance` | https://www.fao.org/dairy-production-products/dairy/small-ruminants/en | 奶用绵羊路线及多产出背景。 |
| `fao-leap-small-ruminants-2016` | `official_guidance` | https://openknowledge.fao.org/handle/20.500.14283/i6434en | 小反刍动物 LCA 边界、分配及活动数据。 |
| `ipcc-livestock-2019` | `method_factor` | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 肠道与粪污 CH4/N2O 方法。 |
| `mass-balance-identity` | `method_factor` | 实测奶、物料及服务数量守恒 | QA 恒等式，并非绵羊奶经验因子。 |
