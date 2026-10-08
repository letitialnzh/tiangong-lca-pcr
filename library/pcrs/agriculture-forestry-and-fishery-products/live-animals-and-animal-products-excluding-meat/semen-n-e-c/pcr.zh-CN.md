---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.semen-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非牛繁殖用精液

## 1. 范围与适用性

本 PCR 适用于绵羊、山羊等非牛动物的合格繁殖用精液，边界止于精液采集／处理中心的放行。新鲜、冷藏与冷冻状态按批次分别记录。牛精液（CPC 02411）、胚胎、活体供体、人工授精服务及放行后的配送均不适用。兽医及贸易条件仅在物种和目的地确实适用时采用，不能作为通用 LCA 系数。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.semen-n-e-c |
| classification_refs | CPC 3.0 `02419` |
| covered_products | 标明物种及最终状态的合格非牛繁殖用精液。 |
| excluded_products | 牛精液、胚胎、活体供体、人工授精及放行后物流。 |
| representative_product | 采集中心以密封容器放行的一份合格羊或山羊精液剂量。 |
| production_route | 供体管理 → 独立采集 → 质量分级 → 初步制备／稀释 → 分装剂量 → 可选保存 → 防护包装。 |
| market_state | 新鲜、冷藏或冷冻剂量，并标明供体、质量、精子数、体积和包装。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 采集／处理中心放行的合格非牛繁殖用精液。 |
| How much | 1 份放行剂量；另报告实测体积及精子浓度／数量。 |
| How well | 声明物种、品种、供体健康、等级、活力、存活率、稀释液、剂量规格及最终状态。 |
| How long or cycle | 一批从采集到放行；供体与资产负担关联至实际服务期间。 |
| reference_flow_link | `released_dose` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 中心放行的非牛繁殖用精液剂量 |
| Reference flow property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | 供体物种／品种；健康和采集批次；质量规格与精子数；剂量体积；新鲜／冷藏／冷冻；容器；中心关口；报告期间。 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_count` | 参考产出 | 合格数量 | dose | 只计入满足该物种既定验收规格并已放行的剂量。 |
| `liquid_balance` | 原精液和稀释液 | 校准体积及浓度 | mL; sperm/mL | 核对原液、制备液、废弃物与分装剂量；不能仅由体积推定剂量等价。 |
| `state_partition` | 最终产品 | 按状态计数 | dose | 新鲜、冷藏、冷冻各用独立分母；跨状态比较须说明转换。 |
| `period_link` | 供体及共享服务 | 时长和合格产出 | donor-day; dose | 将有日期的投入、事件及资产服务关联至供体和批次期间，避免重复年化。 |
| `accepted_item_count` | 参考产品及其产出卡 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 机器单位 item 是已确认单位组参考单位 Item(s) 的本地写法，倍率为 1。一件表示一个符合声明物种、状态、等级及放行规格的合格繁殖用剂量。原始采集记录保留剂量计数。此计数写法不将容器、体积、精子数、卵母细胞或操作次数视为合格产品，也不建立不同物种、状态或剂量规格之间的等价关系。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 已识别的非牛供体进入有记录的饲养期间；饲料、水、实验室介质、能源和包装作为上游供给进入。 |
| starting_condition_role | 受管理供体生产可采集精液，不包括活体交易或人工授精服务。 |
| product_classification_scope | CPC 3.0 `02419`；排除 CPC `02411` 牛精液。 |
| recursive_input_rule | 外购同类精液作为可追踪上游投入，不能再作为本地供体产出重复计入。 |
| upstream_dataset_requirement | 与物种和路线相符的饲料、水、电、制备液、低温介质、包装和处理服务。 |
| disclosure | 供体、关口、批次日期、质量规格、最终状态、废弃、期间、共享服务归属及分配。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `centre_gate` | 所有路线 | 纳入实测供体管理、采集、评估、制备、分装、条件性保存及防护包装，直到质量放行；不纳入授精和后续运输。 | `un-cpc-3-2025`; `woah-semen-hygiene-2024` |
| `species_boundary` | 供体 | 分开非牛物种，不套用牛的饲养系数或牛精液 UUID。 | `un-cpc-3-2025`; `woah-semen-hygiene-2024` |
| `state_interfaces` | 中心 | 原始采集精液、合格／降级／拒收等级、制备液、分装剂量、保存剂量及包装放行剂量必须作为可测量的不同状态，即使作业同址。 | `woah-semen-hygiene-2024`; `fao-cryoconservation-2012` |
| `route_delta` | 受管理生物生产母路线 | 新鲜、冷藏与冷冻共享供体管理，但保存改变电／低温介质、持有时间、损失和质量检查；每批仅选一种最终状态。 | `fao-cryoconservation-2012` |
| `shared_assets` | 圈舍和中心 | 圈舍、采集设备、实验室及制冷设备只按实际使用节点和服务期间归属一次。 | `woah-semen-hygiene-2024` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `donor` | 供体饲养 | required | 实际服务期间 | 受管理生物生产母路线与合格状态 | 供体日及对应剂量 |
| `collect` | 独立采集 | required | 每次采集 | 从供体取得原液 | 原精液 mL |
| `grade` | 质量分级 | required | 每批采集物 | 合格、降级和拒收去向 | 各等级 mL |
| `prepare` | 初步制备 | required | 合格精液批次 | 原液转制备液及损失 | 制备液 mL |
| `fill` | 离散剂量分装 | required | 每批制备液 | 散装转单份及拒收 | 剂量数 |
| `preserve` | 冷藏或冷冻 | conditional | 冷藏或冷冻批次 | 稳定化、状态特定服务及损失 | 保存剂量数 |
| `release` | 防护包装与放行 | required | 已放行批次 | 中心关口包装的合格产品 | 1 份合格剂量 |

### 过程：供体饲养（`donor`）

#### 输入

##### 产品流

###### 物种专用饲料（`feed`）

记录供体在对应期间的实测摄入，不按剂量假定固定值。

分母与范围要求：每份关联的合格剂量

原始数量及计算要求：汇总供体期间实际摄入。 原始采集分母类型：reference_flow。

- 选定流：已识别非牛供体的饲料和牧草（UUID 未解析）
- 流属性/单位：干物质质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_donor`
- 数量范围：暂定饲料完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg dry matter/dose
  - 基准：供体期间摄入量除以关联合格剂量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供体用水（`donor_water`）

计量饮水和卫生用水，不假设跨物种统一耗水率。

分母与范围要求：每份关联的合格剂量

原始数量及计算要求：按供体期间计量或核对供应量。 原始采集分母类型：reference_flow。

- 选定流：供体管理所用供水（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_donor`
- 数量范围：暂定用水完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/dose
  - 基准：供体期间计量供应量除以关联合格剂量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 供体粪污（`manure`）

除非有独立产品交接证据，收集粪污按废物处理；区分直接排泄与已收集量。

分母与范围要求：每供体期间

原始数量及计算要求：只记录一次收集质量及去向。 原始采集分母类型：process_output。

- 选定流：流向已记录管理去向的供体粪污（UUID 未解析）
- 流属性/单位：湿质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_donor`
- 数量范围：暂定粪污筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/donor-period
  - 基准：实际收集湿粪污
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：独立采集（`collect`）

#### 输入

##### 产品流

###### 采集耗材（`collection_supplies`）

一次性器材计入采集；可复用设备在共享服务中归属。

分母与范围要求：每次采集

原始数量及计算要求：逐次采集计数或称量领用材料。 原始采集分母类型：process_output。

- 选定流：与物种相容的精液采集耗材（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collect`
- 数量范围：暂定耗材筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/event
  - 基准：每次采集领用的一次性耗材
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 原始射出精液（`raw_semen`）

独立采集从受管理供体取出精液，将原液交给质量评估。

分母与范围要求：每次采集

原始数量及计算要求：测量事件体积及浓度。 原始采集分母类型：process_output。

- 选定流：采集到的非牛原精液（UUID 未解析）
- 流属性/单位：体积 / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collect`
- 数量范围：暂定原液体积筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：mL/event
  - 基准：采集原液，按供体物种解释
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 失败采集物（`collection_reject`）

附带或不可回收采集物按真实去向归为废物。

分母与范围要求：每次采集

原始数量及计算要求：称量或由实测事件平衡估算，并记录去向。 原始采集分母类型：process_output。

- 选定流：送处理的失败采集物（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collect`
- 数量范围：暂定拒收物筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/event
  - 基准：实际失败采集物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：质量分级（`grade`）

#### 输入

##### 产品流

###### 分级原液投入（`grade_input`）

按物种适用的浓度、活力和存活率标准评估采集批次。

分母与范围要求：每分级批次

原始数量及计算要求：与采集事件体积和批次身份核对。 原始采集分母类型：process_output。

- 选定流：分级入口的非牛原精液（UUID 未解析）
- 流属性/单位：体积 / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：原液投入筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：mL/lot
  - 基准：实际进入分级的原液
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格分级精液（`accepted_grade`）

合格部分交至初步制备。

分母与范围要求：每分级批次

原始数量及计算要求：记录合格体积和精子数。 原始采集分母类型：process_output。

- 选定流：制备前合格的非牛精液（UUID 未解析）
- 流属性/单位：体积 / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：合格占比筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction
  - 基准：合格体积除以分级原液投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有独立用途的降级品（`downgraded_grade`）

仅在有合法替代用途和独立交接记录时按产品计；否则归入拒收废物。

分母与范围要求：每分级批次

原始数量及计算要求：记录独立转移体积和去向。 原始采集分母类型：process_output。

- 选定流：转向有记录替代用途的非牛降级精液（UUID 未解析）
- 流属性/单位：体积 / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：条件性降级占比
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction
  - 基准：独立转移降级体积除以原液投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 拒收精液（`rejected_grade`）

不可用部分作为废物进入已记录处理去向。

分母与范围要求：每分级批次

原始数量及计算要求：拒收、合格和降级体积与投入核对。 原始采集分母类型：process_output。

- 选定流：送处理的非牛拒收精液（UUID 未解析）
- 流属性/单位：体积 / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：拒收占比筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction
  - 基准：拒收体积除以原液投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：初步制备（`prepare`）

#### 输入

##### 产品流

###### 制备介质（`medium`）

使用实际的物种相容稀释液配方，不假定通用配方。

分母与范围要求：每制备批次

原始数量及计算要求：按批记录制备和领用液体。 原始采集分母类型：process_output。

- 选定流：精液制备介质（UUID 未解析）
- 流属性/单位：体积 / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare`
- 数量范围：暂定介质筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：mL/lot
  - 基准：领用制备液
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备后的散装精液（`prepared_bulk`）

合格原液与介质制成散装液并交给分装。

分母与范围要求：每制备批次

原始数量及计算要求：合格原液加介质减去损失。 原始采集分母类型：process_output。

- 选定流：分装前制备好的非牛精液散装液（UUID 未解析）
- 流属性/单位：体积 / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare`
- 数量范围：制备体积筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：mL/lot
  - 基准：实测散装制备液体积
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 制备损失（`preparation_loss`）

洒漏及拒收的制备液按废物处理，与合格散装液分开。

分母与范围要求：每制备批次

原始数量及计算要求：测量并标明实际处置路径。 原始采集分母类型：process_output。

- 选定流：送处理的精液制备残液（UUID 未解析）
- 流属性/单位：体积 / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare`
- 数量范围：制备损失占比
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction
  - 基准：损失液体除以制备投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：离散剂量分装（`fill`）

#### 输入

##### 产品流

###### 精液剂量管或瓶（`dose_container`）

领用容器与正确分装及拒收数量相核对。

分母与范围要求：每分装批次

原始数量及计算要求：计数领用的精液管或瓶及封口材料。 原始采集分母类型：process_output。

- 选定流：与物种／路线相容的剂量容器（UUID 未解析）
- 流属性/单位：计数 / item
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fill`
- 数量范围：容器领用筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：items/batch
  - 基准：领用容器数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 分装后可用剂量（`filled_doses`）

散装制备液成为可保存或直接包装的新鲜剂量。

分母与范围要求：每分装批次

原始数量及计算要求：计数正确分装和封口的剂量，记录体积和精子规格。 原始采集分母类型：process_output。

- 选定流：分装后的非牛繁殖用精液剂量（UUID 未解析）
- 流属性/单位：计数 / dose
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fill`
- 数量范围：分装剂量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：doses/batch
  - 基准：可用分装剂量计数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分装失败品（`fill_reject`）

灌装错误、损坏或封口失败的单位按废物处理，除非有记录的回收路线。

分母与范围要求：每分装批次

原始数量及计算要求：核对领用容器、合格分装及失败单位。 原始采集分母类型：process_output。

- 选定流：送处理的精液分装拒收单位（UUID 未解析）
- 流属性/单位：计数 / item
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fill`
- 数量范围：分装拒收占比
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction
  - 基准：失败单位除以所有分装单位
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：冷藏或冷冻（`preserve`）

#### 输入

##### 产品流

###### 保存用电（`cooling_power`）

仅对实际使用的冷藏或冷冻路线计入实测制冷电力。

分母与范围要求：每保存剂量

原始数量及计算要求：计量批次和持有期间的电力。 原始采集分母类型：reference_flow。

- 选定流：精液冷藏或冷冻用电（UUID 未解析）
- 流属性/单位：能源 / kWh
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preserve`
- 数量范围：暂定电力筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kWh/dose
  - 基准：计量电力除以合格保存剂量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 低温介质（`cryogen`）

冷冻批次记录实际补充的低温介质；冷藏和新鲜批次不继承此投入。

分母与范围要求：每冷冻剂量

原始数量及计算要求：记录领用及回收数量和储存服务归属。 原始采集分母类型：reference_flow。

- 选定流：路线特定低温介质（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preserve`
- 数量范围：暂定低温介质筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/frozen dose
  - 基准：领用低温介质除以合格冷冻剂量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 稳定化合格剂量（`preserved_doses`）

冷藏或冷冻剂量经时间／温度和质量验收后交接。

分母与范围要求：每保存批次

原始数量及计算要求：按冷藏或冷冻状态计数合格单位。 原始采集分母类型：process_output。

- 选定流：包装前保存的非牛精液剂量（UUID 未解析）
- 流属性/单位：计数 / dose
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preserve`
- 数量范围：保存产率筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction
  - 基准：合格保存数除以进入保存的分装数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 保存拒收品（`preservation_reject`）

完整性或保存后质量不合格者独立记录废弃去向。

分母与范围要求：每保存批次

原始数量及计算要求：核对进入、合格和拒收单位。 原始采集分母类型：process_output。

- 选定流：送处理的保存后拒收精液单位（UUID 未解析）
- 流属性/单位：计数 / item
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preserve`
- 数量范围：保存拒收占比
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction
  - 基准：拒收数除以进入保存的分装数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：防护包装与放行（`release`）

#### 输入

##### 产品流

###### 防护包装（`packaging`）

仅纳入中心领用的防护包装；可复用容器按实际复用次数归属。

分母与范围要求：每放行剂量

原始数量及计算要求：称量领用包装并只计入一次复用服务份额。 原始采集分母类型：reference_flow。

- 选定流：非牛精液剂量防护包装（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 数量范围：暂定包装筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/dose
  - 基准：包装质量除以合格放行剂量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行的繁殖剂量（`released_dose`）

唯一参考产品是中心交接的合格非牛繁殖用精液。

参考产出的原始记录：按物种、等级和状态计数合格单位，并关联体积和精子数。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

机器单位 item 是已确认单位组参考单位 Item(s) 的本地写法，倍率为 1。一件表示一个符合声明物种、状态、等级及放行规格的合格繁殖用剂量。原始采集记录保留剂量计数。此计数写法不将容器、体积、精子数、卵母细胞或操作次数视为合格产品，也不建立不同物种、状态或剂量规格之间的等价关系。

分母与范围要求：每参考流

- 选定流： 中心放行的非牛繁殖用精液剂量
- 流属性 / 单位：物品数量 / item
- 数量规则：1 item
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 数量范围：参考计数恒等
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：accepted dose
  - 基准：中心关口的一份合格剂量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 放行包装失败品（`package_reject`）

损坏包装按记录的回收或处置路线作为废物，不增加产品数量。

分母与范围要求：每放行批次

原始数量及计算要求：中心拒收包装只计数或称量一次。 原始采集分母类型：process_output。

- 选定流：送实际去向的拒收防护包装（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 数量范围：暂定包装拒收筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/lot
  - 基准：每放行批次拒收的中心包装
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `period_attribution` | 供体 | 将饲料、水、卫生、粪污、采集及合格批次关联至有日期的供体阶段；记录替换及淘汰。供体期间不得重复收费。 | `woah-semen-hygiene-2024` |
| `shared_service` | 圈舍、采集设备、实验室和制冷 | 列出消费者及服务期间，按实测占用、使用时间或其他合理因果基础只归属一次。 | `woah-semen-hygiene-2024` |
| `quality_outputs` | 分级与分装 | 降级精液仅有合法独立交接才算联产品，否则拒收归废物。披露因果、物理或经济分配及敏感性。 | `woah-semen-hygiene-2024` |
| `mixed_state` | 新鲜、冷藏与冷冻 | 按已记录因果服务或合格剂量给实际批次归属共同供体／采集负担；状态特定能源、低温介质及损失仅归适用批次。 | `fao-cryoconservation-2012` |

## 8. 前景数据采集、计算及质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_donor` | `donor` | 供体投入和产出 | 供体登记与计量 | donor_id, species, period, feed_mass, water_mass, health_event, eligible_days, manure_mass | 有日期记录与校准计量；原始汇总要求：将投入与事件关联供体期间。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | day; kg | 每事件并按月核对 | 完整供体期间 | 中心和供体 | 每参考流 | 登记与票据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_collect` | `collect` | 耗材、原液、失败物 | 采集事件 | donor_id, event_id, issued_mass, raw_mL, concentration, rejected_mass | 校准容器和领用台账；原始汇总要求：按供体和批次汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | mL; kg | 每次事件 | 所有采集事件 | 中心 | 每参考流 | 校准与链路；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_grade` | `grade` | 质量状态 | 实验室评估 | lot_id, raw_mL, accepted_mL, downgraded_mL, rejected_mL, grade, destination | 物种特定检测及去向台账；原始汇总要求：核对所有等级与投入。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | mL; fraction | 每批 | 所有评估批次 | 实验室 | 每参考流 | 检测与批准；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_prepare` | `prepare` | 介质、散装液和损失 | 批次记录 | lot_id, accepted_mL, medium_mL, bulk_mL, loss_mL | 校准分配与体积平衡；原始汇总要求：逐批平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | mL | 每批 | 所有制备批次 | 实验室 | 每参考流 | 配方与校准；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_fill` | `fill` | 容器与合格／拒收单位 | 分装记录 | lot_id, issued_items, filled_doses, rejected_items, dose_mL, sperm_count | 计数与封口检查；原始汇总要求：核对领用与分装。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | item; dose; mL | 每批 | 所有分装批次 | 分装线 | 每参考流 | 批次和 QA；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_preserve` | `preserve` | 电力、低温介质、合格／拒收单位 | 保存记录 | batch_id, state, kWh, cryogen_kg, start, end, accepted_doses, rejected_items | 计量、供给台账和温度记录；原始汇总要求：按批次和服务时间归属。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kWh; kg; dose | 每批 | 完整处理与持有 | 中心 | 每参考流 | 计量与校准；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_release` | `release` | 包装、产品、拒收 | 放行台账 | lot_id, species, state, packaging_kg, reuse_cycles, accepted_doses, rejected_kg | 计数、称量和放行证；原始汇总要求：按物种和状态汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; dose | 每次放行 | 所有放行批次 | 中心关口 | 每参考流 | 签署放行；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `dose_yield` | 采集至放行 | 核对原液体积和浓度、等级、制备液、分装与放行数量；合格剂量除以关联供体期间。 | 供体、批次、液体、质量及剂量记录 | 合格产率与损失台账 | `woah-semen-hygiene-2024` |
| `service_share` | 供体与共享资产 | 期间负担乘有证据的服务份额，再除以关联合格剂量；披露无产出期间并拒绝零分母。 | 有日期投入、服务时长、关联剂量 | 每剂量负担 | `woah-semen-hygiene-2024` |
| `state_burden` | 保存 | 状态特定计量用电、低温介质及拒收，仅除以该状态合格剂量。 | 批次状态、计量、供给与验收 | 新鲜、冷藏或冷冻清单 | `fao-cryoconservation-2012` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | 参考产品 | 验证非牛物种、繁殖用途、剂量规格及中心放行关口。 | 供体、批次、放行记录 |
| `completeness` | 所有节点 | 覆盖选定阶段，核对合格、降级、拒收及损失，不重复计算内部转移。 | 过程与平衡台账 |
| `temporal` | 供体和保存批次 | 对齐供体阶段、采集、批次、持有及资产服务日期。 | 日期登记与计量 |
| `route` | 状态分支 | 披露新鲜、冷藏或冷冻路线及适用的物种特定卫生控制。 | 质量和保存记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `non_bovine` | 参考流 | 拒绝牛供体、分类不符或未经明细确认与非牛繁殖精液关口／属性一致的 UUID。 | `un-cpc-3-2025` |
| `balance` | 分级至放行 | 在有记录的测量容差内核对液体及离散单位的合格、降级、拒收和损失状态。 | `woah-semen-hygiene-2024` |
| `branch` | 最终状态 | 每批须有一种新鲜／冷藏／冷冻状态；冷藏／冷冻须有实测处理和时长，不能套用牛的默认系数。 | `fao-cryoconservation-2012` |
| `no_double_count` | 供体与资产 | 有日期的供体阶段及圈舍、实验室、采集和制冷份额，在每期间只计一次服务。 | `woah-semen-hygiene-2024` |
| `gate_quality` | 放行 | 要求供体物种、数量、体积、精子规格及质量放行；排除人工授精和配送活动。 | `woah-semen-hygiene-2024` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 非牛繁殖剂量生产的实测前景数据包。 |
| downstream_use | `secondary_dataset`；仅物种／状态／关口适用性审核后可作 `background_dataset`。 |
| allowed_use | 中心关口与物种、剂量及状态相符的精液生产 LCA。 |
| excluded_use | 牛精液、胚胎、供体活体交易、人工授精及不同剂量类型的无证据普遍等价。 |
| required_metadata | 物种、品种、供体、期间、批次、验收、精子数、体积、最终状态、保存、关口及分配。 |
| required_quality_disclosure | 完整性、拒收、数量／体积转换、未解析 UUID 和共享服务不确定性。 |
| update_trigger | 物种、保存路线、剂量规格、中心关口、质量标准或已验证流身份变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | [联合国 CPC 3.0 解释说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 02419 非牛与 02411 牛的区分。 |
| `woah-semen-hygiene-2024` | `official_guidance` | [WOAH 陆生动物法典第 4.6 章，精液采集和处理中心卫生](https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2024/en_chapitre_general_hygiene_semen.htm) | 供体、采集、处理、质量和中心路线；物种／贸易条件按适用性采用。 |
| `fao-cryoconservation-2012` | `handbook` | [FAO，动物遗传资源低温保存](https://www.fao.org/4/i3017e/i3017e00.htm) | 状态特定制备、保存和储存路线。 |
