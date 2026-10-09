---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-camel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 骆驼生乳

## 1. 范围与适用性

本 PCR 涵盖单峰驼或双峰驼未经加工的乳，边界止于产乳驼群的实际交付点。移动牧场营地不等于固定农场门；温乳和牧场内冷却乳是互斥的交付状态。排除热处理、分离、配制、集乳中心加工及交付后的运输。幼驼吸乳为驼群内部用途，不是可售乳。[fao-camel-dairy; fao-camel-production; un-cpc-3]

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-camel` |
| classification_refs | CPC 3.0 `02293` |
| covered_products | 在实际产乳驼群交付点的单峰驼与双峰驼生乳 |
| excluded_products | 巴氏杀菌、发酵、分离、脱脂或配制乳；集乳中心作业及后续运输 |
| representative_product | 指定驼群交付点净交付的 1 kg 骆驼生乳 |
| production_route | 驼群生物生产后设独立挤乳采集；移动放牧与固定圈养/集约管理按互斥驼日记录。首次调理与冷却是条件过程。 |
| market_state | 温乳或驼群内冷却乳；披露驼种、交付点、温度和调理状态 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 产乳驼群交付的骆驼生乳 |
| How much | 净称重交付 1 kg |
| How well | 未加工，注明驼种及温乳/冷却状态 |
| How long or cycle | 驼群报告期关联泌乳、干乳、妊娠与更新阶段 |
| reference_flow_link | `reference_product_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 移动营地或固定农场实际驼群交付的骆驼生乳 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 驼种；移动或固定交付点；温乳/冷却温度与状态；调理；挤乳方式；报告期；体积换算所用实测密度 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | 基准乳 | Mass | kg | 扣除损失后称重；体积仅按批次温度和实测密度换算。 |
| `milk_partition` | 挤乳 | Mass | kg | 核对采集、幼驼吸食、拒收和最终乳；标明估算的吸乳量。 |
| `period_link` | 驼群 | 各卡属性 | 各卡单位 | 归一化前将驼日、服务和产品对应到实际路线及阶段。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际营地/牧场或固定农场的繁育与泌乳驼群；披露外购动物和饲料。 |
| starting_condition_role | 生物性乳生产，而非下游乳加工。 |
| product_classification_scope | CPC 3.0 `02293`。 |
| recursive_input_rule | 外购骆驼生乳是可追溯的上游投入，不得并入自有驼群产乳量。 |
| upstream_dataset_requirement | 外购动物、饲料、能源、供水服务及材料分别关联有来源的上游数据集。 |
| disclosure | 驼种、路线、实际交付点、驼群阶段、幼驼分奶、粪污、损失、冷却及独立产品。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | 所有路线 | 止于实际驼群向买方交付点；移动营地不视作固定农场。排除后续运输和集乳中心作业。 | `un-cpc-3`; `fao-camel-dairy` |
| `route_delta` | 驼群 | 移动路线记录采食和移动供水/燃料；圈养路线记录运入饲料、抽水、棚舍及粪污管理。混合驼群按实际驼日分期。 | `fao-camel-dairy`; `fao-camel-production` |
| `raw_state` | 生乳 | 区分采集温乳、调理温乳和冷却乳。过滤与冷却均需批次证据；不得纳入热处理。 | `fao-camel-production` |
| `shared_asset` | 多过程 | 井、泵、车辆、棚舍、挤乳设备或冷却器按实际使用方和服务期只分摊一次。 | `fao-camel-dairy` |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `herd_management` | 骆驼群管理 | required | 完整支持驼群报告期 | 生物产乳能力、幼驼、淘汰驼、残余物和排放 | 每 kg 净交付乳 |
| `milk_capture` | 挤乳与幼驼分奶 | required | 每次挤乳 | 独立采乳与乳量划分 | 每 kg 采集乳 |
| `first_conditioning` | 生乳首次调理 | conditional | 驼群内实际过滤 | 生乳到调理乳交接与拒收物 | 每 kg 调理乳 |
| `farm_cooling` | 驼群内冷却 | conditional | 交付前实际冷却 | 温乳到冷却乳保藏与损失 | 每 kg 冷却乳 |
| `producer_handover` | 生产者交付 | required | 实际移动或固定交付点 | 唯一最终生乳产品 | 1 kg 净交付乳 |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

### 过程：骆驼群管理（`herd_management`）

#### 输入

##### 产品流

###### 饲料与放牧采食（`herd_feed`）

按路线和动物阶段记录实际干物质摄入。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg DM/kg milk。 原始采集分母类型：reference_flow。

- 选定流：骆驼饲料或采食生物量（UUID 未解析）
- 流属性/单位：Mass / kg dry matter
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 来源：`fao-camel-production`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg DM/kg milk
  - 基准：所述分母对应的饲料与放牧采食
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 驼群饮水（`herd_water`）

移动营地运水或固定农场抽水，不预设统一饮水频次。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 m3/kg milk。 原始采集分母类型：reference_flow。

- 选定流：驼群供水（UUID 未解析）
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 来源：`fao-camel-production`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：m3/kg milk
  - 基准：所述分母对应的驼群饮水
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 抽水与驼群能源（`herd_energy`）

记录生产者侧供水及驼群作业燃料或电力，共享服务仅分摊一次。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 MJ/kg milk。 原始采集分母类型：reference_flow。

- 选定流：驼群能源（UUID 未解析）
- 流属性/单位：Energy / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg milk
  - 基准：所述分母对应的抽水与驼群能源
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 幼驼与淘汰驼（`animal_outputs`）

按实际交付点记录独立活体产品；留作更新的动物属于内部存量。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg live weight/kg milk。 原始采集分母类型：reference_flow。

- 选定流：按类别划分的活骆驼产品（UUID 未解析）
- 流属性/单位：Mass / kg live weight
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 来源：`fao-camel-dairy`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg live weight/kg milk
  - 基准：所述分母对应的幼驼与淘汰驼
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 管理粪污（`herd_residues`）

按去向记录粪污；销售粪或燃料是联产品，不是废物。死亡动物另设废物卡。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg/kg milk。 原始采集分母类型：reference_flow。

- 选定流：按去向划分的驼群残余（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg milk
  - 基准：所述分母对应的管理粪污
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 待处置死亡骆驼（`dead_stock`）

记录非市场性死亡的原因、质量和处置去向；不属于淘汰驼联产品。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：逐头称重或使用已记录的类别估算。 原始采集分母类型：reference_flow。

- 选定流：按处置路径划分的死亡骆驼（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定死亡废物 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg net milk
  - 基准：每 kg 净乳对应的死亡动物
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 向空气排放的肠道甲烷（`enteric_ch4`）

依记录的驼日、饲料及方法计算；UUID 不是排放因子。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg CH4/kg milk。 原始采集分母类型：reference_flow。

- 选定流：生物源甲烷，排向空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg CH4/kg milk
  - 基准：所述分母对应的向空气排放的肠道甲烷
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污管理向空气排放甲烷（`manure_ch4`）

依据实际粪污管理系统、挥发性固体和驼群类别计算，与肠道甲烷分开。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：对驼群类别与粪污阶段记录应用选定方法，按净乳归一化。 原始采集分母类型：reference_flow。

- 选定流：生物源甲烷，排向空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定排放筛查范围，并非方法因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg CH4/kg milk
  - 基准：每 kg 净交付乳对应的粪污阶段大气排放
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污管理向空气排放氧化亚氮（`manure_n2o`）

按实测或推算氮排泄、管理系统与 IPCC 方法计算直接 N2O，避免与管理土壤重复。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：对驼群类别与粪污阶段记录应用选定方法，按净乳归一化。 原始采集分母类型：reference_flow。

- 选定流：氧化亚氮，排向空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定排放筛查范围，并非方法因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg N2O/kg milk
  - 基准：每 kg 净交付乳对应的粪污阶段大气排放
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污处理向空气排放氨（`manure_nh3`）

仅在方法或实测确定各处理阶段氨挥发时记录，间接 N2O 另行计算。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：对驼群类别与粪污阶段记录应用选定方法，按净乳归一化。 原始采集分母类型：reference_flow。

- 选定流：氨，排向空气 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定排放筛查范围，并非方法因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg NH3/kg milk
  - 基准：每 kg 净交付乳对应的粪污阶段大气排放
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：挤乳与幼驼分奶（`milk_capture`）

#### 输入

##### 产品流

###### 挤乳与清洗用水（`milking_water`）

计量手工或机械挤乳时乳房、容器及设备清洗用水。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 m3/kg collected milk。 原始采集分母类型：reference_flow。

- 选定流：挤乳过程水（UUID 未解析）
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：m3/kg collected milk
  - 基准：所述分母对应的挤乳与清洗用水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采集温乳（`collected_milk`）

调理前采集的生乳，不含幼驼吸食乳，也不是最终交付。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg/kg accounted milk。 原始采集分母类型：reference_flow。

- 选定流：骆驼温生乳（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking`
- 来源：`fao-camel-production`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg accounted milk
  - 基准：所述分母对应的采集温乳
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 幼驼吸食乳（`calf_milk`）

观察或估算挤乳前或期间的吸乳；属驼群内部生物用途，不是市场乳。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg/kg accounted milk。 原始采集分母类型：reference_flow。

- 选定流：幼驼吸食的骆驼乳（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking`
- 来源：`fao-camel-production`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg accounted milk
  - 基准：所述分母对应的幼驼吸食乳
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 挤乳弃乳（`milking_loss`）

记录溢漏或拒收乳及去向；清洗废水另设废物卡。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg/kg collected milk。 原始采集分母类型：reference_flow。

- 选定流：按去向划分的骆驼生乳弃乳（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg collected milk
  - 基准：所述分母对应的挤乳弃乳
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 挤乳清洗废水（`milking_wastewater`）

记录按处理或排放路径离开挤乳过程的已用清洗水；它不是弃乳。

分母与范围要求：每 kg 采集乳

原始数量及计算要求：计量排出量，或由投入减去实测滞留水量并记录去向。 原始采集分母类型：process_output。

- 选定流：按去向划分的挤乳废水（UUID 未解析）
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking`
- 数量范围：暂定废水 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：m3/kg collected milk
  - 基准：每 kg 采集乳对应废水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：生乳首次调理（`first_conditioning`）

#### 输入

##### 产品流

###### 进入首次调理的生乳（`conditioning_input`）

仅实际过滤时转入采集生乳，不给予第二次生产收益。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg/kg prepared milk。 原始采集分母类型：reference_flow。

- 选定流：采集的骆驼温生乳（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg prepared milk
  - 基准：所述分母对应的进入首次调理的生乳
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调理后温生乳（`prepared_milk`）

非转化性过滤后称量保留乳，可温乳交付或进一步冷却。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg/kg prepared milk。 原始采集分母类型：reference_flow。

- 选定流：调理后骆驼温生乳（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 数量范围：归一化质量恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg prepared milk
  - 基准：所述分母对应的调理后温生乳
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 过滤拒收物（`conditioning_rejects`）

将截留杂质与拒收乳分开记录，两者都不计入可用乳。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg/kg input milk。 原始采集分母类型：reference_flow。

- 选定流：调理拒收物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg input milk
  - 基准：所述分母对应的过滤拒收物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：驼群内冷却（`farm_cooling`）

#### 输入

##### 产品流

###### 进入冷却的可用温乳（`cooling_input`）

只有可用生乳进入条件保藏过程。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg/kg chilled milk。 原始采集分母类型：reference_flow。

- 选定流：可用骆驼温生乳（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg chilled milk
  - 基准：所述分母对应的进入冷却的可用温乳
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却能源（`cooling_energy`）

计量驼群内冷却用电或燃料及发电机共享服务份额。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 MJ/kg chilled milk。 原始采集分母类型：reference_flow。

- 选定流：冷却能源（UUID 未解析）
- 流属性/单位：Energy / MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg chilled milk
  - 基准：所述分母对应的冷却能源
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可用冷却乳（`cooled_milk`）

最终交付前的内部转移，不等于已固定的农场门产品身份。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg/kg chilled milk。 原始采集分母类型：reference_flow。

- 选定流：内部转移的骆驼冷却生乳（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling`
- 数量范围：归一化质量恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg chilled milk
  - 基准：所述分母对应的可用冷却乳
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 冷却变质损失（`cooling_loss`）

按原因和处置记录拒收批次与溢漏。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg/kg cooling input。 原始采集分母类型：reference_flow。

- 选定流：冷却乳损失（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooling`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg cooling input
  - 基准：所述分母对应的冷却变质损失
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：生产者交付（`producer_handover`）

#### 输入

##### 产品流

###### 准备交付的乳（`handover_input`）

只从最后一个有效上游过程转入温乳或冷却乳中的一种。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg/kg delivered milk。 原始采集分母类型：reference_flow。

- 选定流：待交付骆驼生乳（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg delivered milk
  - 基准：所述分母对应的准备交付的乳
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际交付点的温生乳（`warm_gate_milk`）

在指定移动营地或固定农场的最终温乳；不得使用冷却乳 UUID。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg/kg delivered milk。 原始采集分母类型：reference_flow。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：生产者交付点骆驼温生乳（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg delivered milk
  - 基准：所述分母对应的实际交付点的温生乳
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 移动营地交付点冷却生乳（`chilled_mobile_gate_milk`）

仅在移动牧场营地实际冷却并交付时作为条件最终产出。已核实冷却 UUID 要求固定农场门，因此本卡不绑定。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：在实际移动营地净称重；与其他最终产出互斥。 原始采集分母类型：reference_flow。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：移动营地交付的骆驼冷却生乳（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：条件移动营地冷却乳份额
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg delivered milk
  - 基准：移动营地冷却乳占净交付生乳份额
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 固定农场门冷却生乳（`chilled_farm_gate_milk`）

仅固定产乳农场门的最终冷却乳；移动营地冷却乳仍留空。

分母与范围要求：每 kg 生产者门口净交付乳

原始数量及计算要求：按事件、路线和时期取得所述流量，再归一化为 kg/kg delivered milk。 原始采集分母类型：reference_flow。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：骆驼生乳，冷却，农场门生产组合 `c20da2ab-1dac-40ad-9206-43996d07bcff`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：暂定筛查范围，并非默认数值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg delivered milk
  - 基准：所述分母对应的固定农场门冷却生乳
  - 基准类型：基准流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 移动营地或固定农场实际驼群交付的骆驼生乳（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `warm_gate_milk`, `chilled_mobile_gate_milk`, `chilled_farm_gate_milk` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`warm_gate_milk`, `chilled_mobile_gate_milk`, `chilled_farm_gate_milk`

必需产品实例限定项：驼种；移动或固定交付点；温乳/冷却温度与状态；调理；挤乳方式；报告期；体积换算所用实测密度

- 选定流：移动营地或固定农场实际驼群交付的骆驼生乳（实际生产者交付关联）
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

###### 移动营地或固定农场实际驼群交付的骆驼生乳 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`warm_gate_milk`, `chilled_mobile_gate_milk`, `chilled_farm_gate_milk`

必需产品实例限定项：驼种；移动或固定交付点；温乳/冷却温度与状态；调理；挤乳方式；报告期；体积换算所用实测密度

- 选定流：移动营地或固定农场实际驼群交付的骆驼生乳
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
| `output_set` | 驼群与交付 | 列出首次对外交付的生乳、出售或转出的幼驼及淘汰驼，以及实际销售的粪、粪燃料或毛。自有幼驼吸乳和留用更新驼为内部用途；死亡动物和弃乳为废物。 | `fao-camel-dairy` |
| `allocation_precedence` | 不可分驼群负担 | 先细分直接计量的挤乳与育幼服务。不可分驼群负担若有可辩护的生物物理因果关系则据此分配，否则采用同期间经济分配并披露价格与敏感性。不得默认全部繁育/干乳期负担归乳，也不得默默采用系统扩展。 | `fao-camel-dairy` |
| `period_attribution` | 驼群时期 | 将泌乳、干乳、妊娠、育幼及更新期与投入、资产、出生、死亡及产出关联；支持期负担只计一次，不设统一年化因子。 | `fao-camel-production` |
| `shared_service` | 共享资产 | 列出井、泵、车辆、棚舍、挤乳设备和冷却器的所有使用者及服务期，按实测水、能或运行时间分摊一次并披露代理值。 | `fao-camel-dairy` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd` | `herd_management` | 驼群投入与产出 | 驼群日志 | 驼种；类别；路线；阶段；驼日；饲料；采食；用水；燃料；出生；淘汰；粪污；死亡 | 称重、计量、日期登记；原始汇总要求：按路线和时期划分。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; m3; MJ; head; day | 每日/事件 | 全部支持期 | 实际营地与农场 | 每参考流 | 发票、校准、方法版本；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_milking` | `milk_capture` | 采集乳、幼驼乳及损失 | 挤乳记录 | 母驼；方法；采集质量；吸乳；用水；废物流 | 称、表、观察；原始汇总要求：逐次核对后求和。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; m3 | 每次 | 产乳期 | 挤乳点 | 每参考流 | 校准秤和观察记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_conditioning` | `first_conditioning` | 生乳、调理乳、拒收 | 批次日志 | 投入；过滤；保留；拒收；去向 | 批次称量与过滤日志；原始汇总要求：投入=保留+损失。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批适用 | 产乳期 | 驼群点 | 每参考流 | 秤检与批次号；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_cooling` | `farm_cooling` | 温乳、能源、冷却乳、损失 | 冷却日志 | 质量；时间；温度；电/燃料；拒收 | 称、温度计、电表；原始汇总要求：投入=冷却乳+损失。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; °C; MJ | 每批适用 | 产乳期 | 实际冷却点 | 每参考流 | 校准仪表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_handover` | `producer_handover` | 最终产品 | 交付票据 | 移动/固定地点；买方；状态；温度；净质量 | 称重签收；原始汇总要求：每批只选一种状态。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; °C | 每次 | 产乳期 | 实际驼群交付点 | 每参考流 | 票据及秤检；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `net_yield` | 最终乳 | 按物种、温乳或冷藏状态及实际生产者交付门划分合格交付。每一分层仅汇总其合格净乳质量，并仅用该分层可归属清单除以这一正质量。实际冷却投入和损失仅归入冷却路线；共享驼群负担依既定分配规则归属一次。温乳与冷藏乳质量之和仅用于总量核对，不得作为单一状态结果的分母。 | `cp_handover`；各状态与交付门的合格质量及可归属清单 | 各状态与交付门分别归一化的参考流结果 | `mass-balance-identity` |
| `milk_balance` | 乳 | 核算乳=采集+幼驼吸食+披露的未采集量；后续投入=保留+损失。不设统一幼驼分奶因子。 | `cp_milking`; `cp_conditioning`; `cp_cooling` | 核对 kg 与不确定性 | `fao-camel-production`; `mass-balance-identity` |
| `enteric_method` | 甲烷 | 对实测驼日使用已披露的类别、饲料及 IPCC 一致方法，不从 UUID 取得因子。 | `cp_herd` | kg 生物源 CH4 | `ipcc-livestock-2019` |
| `manure_air_method` | 粪污 CH4、N2O 和 NH3 | 对粪污系统甲烷、直接氧化亚氮与挥发氨分别选用并披露方法，使用驼群类别、排泄量、处理阶段和去向；核对直接与间接氮路径避免重复排放。 | `cp_herd` | kg CH4; kg N2O; kg NH3 | `ipcc-livestock-2019` |
| `attribution` | 驼群与资产 | 加总直接负担与支持/共享负担的一次份额，依披露顺序分给独立产品。 | `cp_herd`; `cp_handover` | 每 kg 乳负担 | `fao-camel-dairy` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `gate_identity` | 最终产品 | 核实驼种、移动/固定交付点和状态；固定 UUID 仅适用冷却固定农场。 | 签收单及流详情 |
| `period_coverage` | 驼群 | 纳入支持阶段、幼驼分奶、淘汰、死亡和损失并披露缺口。 | 日期登记 |
| `route_partition` | 混合驼群 | 同一驼日或共享资产服务不得列入两个路线或时期。 | 移动与服务记录 |
| `quantity_trace` | 所有卡 | 保留校准、密度换算、估算标志及方法版本；范围不代替数据。 | QA 记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_gate` | 基准乳 | 温乳、移动营地、交付点不明或加工乳不得绑定固定冷却农场 UUID；宽口径基准仍留空。 | `un-cpc-3`; `fao-camel-dairy` |
| `v_mass` | 乳阶段 | 核对采集、幼驼吸食、调理、冷却、拒收及交付质量，每批只有一个最终产出。 | `fao-camel-production`; `mass-balance-identity` |
| `v_route` | 混合驼群 | 核实路线特定饲料、水、能源、粪污及互斥驼日；条件步骤需要批次证据。 | `fao-camel-dairy`; `fao-camel-production` |
| `v_attribution` | 联产品与资产 | 核实独立幼驼/淘汰驼产品、支持时期及共享使用者，拒绝重复负担。 | `fao-camel-dairy` |
| `v_range` | 数量 QA | 暂定推理范围仅供筛查，不是实测默认值或接受限值。 | `mass-balance-identity` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 产乳驼群骆驼生乳前景数据 |
| downstream_use | `secondary_dataset`；`background_dataset` 仅在路线与交付点相符时 |
| allowed_use | 驼种、路线、状态和交付点匹配的生乳供应建模 |
| excluded_use | 加工乳、集乳中心、下游运输或把固定冷却乳身份泛用于移动交付点 |
| required_metadata | 驼种；路线及日期；交付点；状态；乳质量/密度；幼驼分奶；时期；分配；绑定证据 |
| required_quality_disclosure | 原始数据覆盖、估算分奶、损失平衡、共享服务份额、排放方法、UUID 缺口 |
| update_trigger | 驼种、路线、交付点、冷却、联产品或重要活动证据改变 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3` | `official_guidance` | [联合国 CPC 3.0 说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 分类边界 |
| `fao-camel-dairy` | `official_guidance` | [FAO 骆驼乳业](https://www.fao.org/dairy-production-products/dairy/camels/en) | 驼种、移动路线、联产品 |
| `fao-camel-production` | `handbook` | [FAO 骆驼乳生产](https://www.fao.org/4/t0755e/t0755e01.htm) | 分奶、变动产量及挤乳 |
| `ipcc-livestock-2019` | `method_factor` | [IPCC 2019 修订，第四卷第十章](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | 畜牧排放方法选择 |
| `mass-balance-identity` | `standard` | 质量守恒：投入=保留+损失 | 乳 QA 恒等式 |
