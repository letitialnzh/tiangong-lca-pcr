---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bovine-semen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 牛精液

## 1. 范围与适用性

本 PCR 覆盖采精中心交付门的牛科可用精液；至少包括家牛和水牛供体。其他牛族供体（如野牛）必须提供物种与路线直接证据，不得套用家牛因子。新鲜、冷却和冷冻剂量分开建模。活体公牛、胚胎、非牛类精液、授精服务及交付后运输不在范围内。即使中心作业物理上合并，材料或质量状态变化的接口仍需独立计量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bovine-semen |
| classification_refs | CPC 3.0 `02411` |
| covered_products | 家牛和水牛可用精液剂量；其他牛族须有供体专属证据。 |
| excluded_products | 活牛、胚胎、非牛类精液、未交付为产品的不合格物、授精服务。 |
| representative_product | 采精中心交付的一支质量合格密封精液剂量。 |
| production_route | 供体管理→采集→质量分级→首处理→稀释液配制→灌装→条件性保存→交付包装。 |
| market_state | 新鲜、冷却或冷冻；逐项声明供体、质量、体积、精子数、容器和中心交付门。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 采精中心交付的一剂可用牛精液。 |
| How much | 一剂合格品；另报实测体积或质量与精子数。 |
| How well | 声明供体物种/品种、健康、合格等级、活力/存活性、精子数、稀释液和保存状态。 |
| How long or cycle | 一个从采集到交付的批次；供体维持按观测服役期分摊。 |
| reference_flow_link | `usable_dose` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 采精中心交付的可用牛精液剂量 |
| Reference flow property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | 供体物种、品种与健康状况；批次；精子浓度、数量、活力和等级；每剂体积；新鲜、冷却或冷冻状态；稀释液；容器；中心交付门；报告期间。 |

平台按质量计量的农场门候选流既非中心交付剂量，说明字段又错误描述非牛类精液，因此不绑定。

## 4. 计量与单位规则

| rule_id | 适用对象 | 所需属性 | 所需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `dose_identity` | 参考输出 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 仅计数质量合格的放行剂量；一件为满足声明规格的一剂，不是一个精子或任意容器。另报精子数与存活性。 |
| `material_balance` | 精液、稀释液与灌装剂量 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` 或校准体积 | kg or mL | 以实测密度完成必要换算，核对原精液与稀释液投入以及合格、降级、不合格和损失物料。 |
| `state_separation` | 保存 | 剂量件数 | dose | 新鲜、冷却、冷冻品分用不同分母和质量规格，不假设通用等价。 |
| `period_link` | 供体维持 | 供体日与剂量件数 | day; dose | 服务和输出归属到相同的已记录供体期间。 |
| `accepted_item_count` | 参考产品及其产出卡 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 机器单位 item 是已确认单位组参考单位 Item(s) 的本地写法，倍率为 1。一件表示一个符合声明物种、状态、等级及放行规格的合格繁殖用剂量。原始采集记录保留剂量计数。此计数写法不将容器、体积、精子数、卵母细胞或操作次数视为合格产品，也不建立不同物种、状态或剂量规格之间的等价关系。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别的合格牛科供体进入记录的中心服役期，同时纳入上游饲料、水、能源、稀释液、包装和低温剂供应。 |
| starting_condition_role | 供体生物管理及中心生殖产品制备，不是活畜销售或授精服务。 |
| product_classification_scope | CPC 3.0 `02411`；家牛和水牛，其他牛族需直接证据。 |
| recursive_input_rule | 外购牛精液是可追溯上游产品投入，不得再作为现场供体生产重复计。 |
| upstream_dataset_requirement | 与物种和路线相符的供应、能源、耗材及资本服务数据。 |
| disclosure | 供体、期间、交付门、健康/质量标准、状态路线、不合格物、副产品、共享资产和分配。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `gate` | 全部路线 | 经实际制备和保护包装后，在采精中心质量放行处结束；排除后续配送和授精。 | `woah-hygiene-2024`; `woah-bovine-2024` |
| `donor` | 供体管理 | 家牛与水牛分开追溯；其他牛族需物种证据。按供体期间归属观测饲料、水、健康及残余物，不套用通用每管因子。 | `un-cpc-3`; `fao-cryoconservation-2021` |
| `interfaces` | 中心处理 | 识别采得原精液、分级、首处理、配制散装、灌装、保存和包装状态；另记不合格及损失。 | `woah-hygiene-2024`; `fao-cryoconservation-2021` |
| `route_delta` | 保存 | 新鲜、冷却、冷冻是互斥最终状态。保存母活动的能源、低温剂、储存期、检测和损失随路线改变；混合批次须分拆。 | `fao-cryoconservation-2021` |
| `shared_service` | 资产 | 圈舍、实验室、制冷及重复使用容器服务多个节点/期间；服务与负担仅计一次，并与一次性包装分离。 | `woah-hygiene-2024` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `donor_management` | 供体公牛管理 | required | 观测供体期间 | 生物维持、淘汰和残余物 | 每供体期间合格剂量 |
| `semen_collection` | 精液采集 | required | 每次采集事件 | 独立采得原精液 | mL 原精液 |
| `quality_grading` | 质量评估与分级 | required | 每次采得精液 | 合格、降级和不合格状态 | mL 分级精液 |
| `first_preparation` | 精液首处理 | required | 每个首处理批次 | 原精液到已处理状态及淘汰物 | mL 已处理精液 |
| `formulation` | 稀释液配制 | required | 每个配制批次 | 组分投入至散装状态 | mL 配制散装精液 |
| `dosing` | 剂量灌装与封口 | required | 每次灌装运行 | 散装到离散剂量交接 | 灌装剂量件数 |
| `preservation` | 冷却或冷冻保存 | conditional | 交付前进行保存时 | 状态专属干预及损失 | 保存后合格剂量 |
| `centre_dispatch` | 保护包装与交付 | required | 每个放行批次 | 最终剂量及包装交接 | 一剂合格品 |

### 过程：供体公牛管理（`donor_management`）

#### 输入

##### 产品流

###### 供体饲料与牧草（`donor_feed`）

按供体物种和服役期计量饲料干物质。

分母与范围要求：每合格剂量

原始数量及计算要求：按记录的摄入量归属到供体日和合格剂量。 原始采集分母类型：reference_flow。

- 选定流: 供体饲料与牧草（UUID 未解析）
- 流属性/单位: Mass / kg dry matter
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_donor`
- 数量范围: 暂定核查范围，非排放因子
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg dry matter per dose
  - 基准: 供体期摄入量除以相关合格剂量
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 供体用水（`donor_water`）

计量饮水和饲养用水；具体供水组别由前景用途确定。

分母与范围要求：每合格剂量

原始数量及计算要求：按供体期水表或水罐平衡核算。 原始采集分母类型：reference_flow。

- 选定流: 供体用水（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_donor`
- 数量范围: 暂定用水核查范围
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per dose
  - 基准: 供体期实测用水除以相关合格剂量
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 独立交付的淘汰供体（`donor_cull`）

仅实际合法交付的活体淘汰牛构成独立产品。

分母与范围要求：每供体期间

原始数量及计算要求：记录交付活体质量及供体期间归属。 原始采集分母类型：process_output。

- 选定流: 淘汰牛科活体（UUID 未解析）
- 流属性/单位: Mass / kg live mass
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_donor`
- 数量范围: 条件性淘汰活体质量
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg per donor period
  - 基准: 实际交付的活体动物
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 送处理的供体粪污（`donor_manure`）

未作为有用产品独立交付时，将粪污列为待处理废物。

分母与范围要求：每合格剂量

原始数量及计算要求：按处理路径、期间和供体组计量粪污。 原始采集分母类型：reference_flow。

- 选定流: 受管供体粪污（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_donor`
- 数量范围: 暂定粪污核查范围
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg per dose
  - 基准: 供体期送处理废物除以相关剂量
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 肠道生物源甲烷排入空气（`enteric_ch4_air`）

根据已记录的供体物种、摄入量和供体日计算肠道甲烷；流 UUID 不是排放因子。

分母与范围要求：每合格剂量

原始数量及计算要求：按供体日及实测活动应用已声明的物种适用肠道排放方法。 原始采集分母类型：reference_flow。

- 选定流：生物源甲烷 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位: Mass / kg CH4
- 绑定: `fixed`
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_donor`
- 来源: `ipcc-livestock-2019`
- 数量范围: 暂定排放核查范围，非因子
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg CH4 per dose
  - 基准: 同期物种专属供体管理量除以相应合格剂量
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 粪污氧化亚氮排入空气（`manure_n2o_air`）

对供体专属排泄和管理途径应用已记录方法，不套用通用因子。

分母与范围要求：每合格剂量

原始数量及计算要求：按实际粪污管理和供体期间计算 N2O。 原始采集分母类型：reference_flow。

- 选定流：氧化亚氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg N2O
- 绑定: `fixed`
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_donor`
- 来源: `ipcc-livestock-2019`
- 数量范围: 暂定排放核查范围，非因子
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg N2O per dose
  - 基准: 同期粪污排放除以相应合格剂量
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 粪污氨排入空气（`manure_nh3_air`）

按实际圈舍与粪污管理路径报告氨，并说明计算方法和氮基准。

分母与范围要求：每合格剂量

原始数量及计算要求：按记录的粪污与圈舍路线计算氨；不能从流身份推断因子。 原始采集分母类型：reference_flow。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg NH3
- 绑定: `fixed`
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_donor`
- 来源: `ipcc-livestock-2019`
- 数量范围: 暂定排放核查范围，非因子
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg NH3 per dose
  - 基准: 同期报告的粪污氨除以相应合格剂量
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程：精液采集（`semen_collection`）

#### 输入

##### 产品流

###### 采精耗材（`collection_consumables`）

记录接触精液的一次性采集耗材；重复使用的设备按服务负担计。

分母与范围要求：每采集事件

原始数量及计算要求：发放量扣除未用或重复使用归还量。 原始采集分母类型：process_output。

- 选定流: 采精耗材（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_collection`
- 来源: `woah-hygiene-2024`
- 数量范围: 暂定耗材核查范围
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg per event
  - 基准: 采集时实际消耗的材料
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采得的原精液（`raw_ejaculate`）

采得状态由动物采集节点独立转交实验室评估。

分母与范围要求：每采集事件

原始数量及计算要求：按供体及事件计量采集体积，包含失败事件。 原始采集分母类型：process_output。

- 选定流: 牛科原采精液（UUID 未解析）
- 流属性/单位: Volume / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_collection`
- 来源: `woah-bovine-2024`
- 数量范围: 暂定采集体积核查范围
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: mL per event
  - 基准: 采得原精液体积
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

### 过程：质量评估与分级（`quality_grading`）

#### 输入

##### 产品流

###### 送检原精液（`grading_input`）

质量检验全程保持供体和采集事件的关联。

分母与范围要求：每分级事件

原始数量及计算要求：转入采得体积，另行记录抽样量。 原始采集分母类型：process_output。

- 选定流: 送分级的牛科原精液（UUID 未解析）
- 流属性/单位: Volume / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_quality`
- 数量范围: 分级投入平衡
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: mL per event
  - 基准: 提交的原精液体积
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格精液等级（`accepted_grade`）

精子数、活力等规定检测合格后，原精液转入首处理。

分母与范围要求：每分级事件

原始数量及计算要求：按供体与去向汇总合格分级份额。 原始采集分母类型：process_output。

- 选定流: 质量合格的牛科原精液（UUID 未解析）
- 流属性/单位: Volume / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_quality`
- 来源: `woah-bovine-2024`
- 数量范围: 合格等级体积
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: mL per event
  - 基准: 已接受份额
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 独立交付的降级精液（`downgraded_grade`）

仅有独立可用标准和实际交接时，降级精液才算目的产品。

分母与范围要求：每分级事件

原始数量及计算要求：计量独立交付的较低等级物料，否则按不合格处理。 原始采集分母类型：process_output。

- 选定流: 降级牛科精液（UUID 未解析）
- 流属性/单位: Volume / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_quality`
- 数量范围: 条件性降级品体积
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: mL per event
  - 基准: 仅独立目的产品交接
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 分级不合格精液（`grading_reject`）

质量不合格精液与检测残余物进入记录的废物去向。

分母与范围要求：每分级事件

原始数量及计算要求：核对投入与合格、降级、抽样和不合格状态。 原始采集分母类型：process_output。

- 选定流: 牛科原精液不合格物及检测残余（UUID 未解析）
- 流属性/单位: Volume / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_quality`
- 数量范围: 不合格体积平衡
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: mL per event
  - 基准: 实际不合格与抽样量
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：精液首处理（`first_preparation`）

#### 输入

##### 产品流

###### 首处理原精液投入（`preparation_input`）

首个有界实验室处理节点接收分级合格的原精液。

分母与范围要求：每首处理批次

原始数量及计算要求：计量从分级转入的合格体积。 原始采集分母类型：process_output。

- 选定流: 合格牛科原精液（UUID 未解析）
- 流属性/单位: Volume / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preparation`
- 数量范围: 首处理投入体积
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: mL per batch
  - 基准: 收到的合格物料
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首处理后精液（`prepared_semen`）

扣除移除组分后的可用精液转入稀释液混配。

分母与范围要求：每首处理批次

原始数量及计算要求：计量回收体积与精子数。 原始采集分母类型：process_output。

- 选定流: 稀释前已处理牛科精液（UUID 未解析）
- 流属性/单位: Volume / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preparation`
- 数量范围: 已处理体积平衡
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: mL per batch
  - 基准: 可用的首处理状态
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 首处理淘汰物（`preparation_reject`）

移除组分及不可用精液进入实际废物处理。

分母与范围要求：每首处理批次

原始数量及计算要求：核对投入、合格处理输出、抽样和损失。 原始采集分母类型：process_output。

- 选定流: 精液首处理不合格物（UUID 未解析）
- 流属性/单位: Volume / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preparation`
- 数量范围: 条件性首处理淘汰量
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: mL per batch
  - 基准: 已移除的不可用物料
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：稀释液配制（`formulation`）

#### 输入

##### 产品流

###### 配方中的精液组分（`formulation_semen`）

计量进入已记录配方的精液组分。

分母与范围要求：每配制批次

原始数量及计算要求：逐批计量精液投入。 原始采集分母类型：process_output。

- 选定流: 稀释前已处理牛科精液（UUID 未解析）
- 流属性/单位: Volume / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_formulation`
- 数量范围: 精液组分体积
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: mL per batch
  - 基准: 配方中的已处理精液
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 稀释液各组分（`extender_components`）

逐项记录实际稀释剂、缓冲剂、营养物、如使用的抗生素及冷冻路线的保护剂；不规定通用配方。

分母与范围要求：每配制批次

原始数量及计算要求：称量各组分并与配制散装产出核对。 原始采集分母类型：process_output。

- 选定流: 精液稀释液组分（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_formulation`
- 来源: `fao-cryoconservation-2021`
- 数量范围: 暂定组分质量核查范围
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg per batch
  - 基准: 实际配方全部组分
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 配制后散装精液（`formulated_bulk`）

质量合格的混配散装精液转入离散剂量灌装。

分母与范围要求：每配制批次

原始数量及计算要求：计量批次散装体积与成分。 原始采集分母类型：process_output。

- 选定流: 配制后的牛科散装精液（UUID 未解析）
- 流属性/单位: Volume / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_formulation`
- 数量范围: 配制散装平衡
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: mL per batch
  - 基准: 合格混合散装物料
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 配制不合格物（`formulation_reject`）

失败混合物进入声明的处置去向，除非证明存在独立有用产品交接。

分母与范围要求：每配制批次

原始数量及计算要求：投入减去合格散装量及实测过程损失。 原始采集分母类型：process_output。

- 选定流: 配制不合格精液（UUID 未解析）
- 流属性/单位: Volume / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_formulation`
- 数量范围: 条件性不合格配制体积
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: mL per batch
  - 基准: 被拒收的配制状态
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：剂量灌装与封口（`dosing`）

#### 输入

##### 产品流

###### 待灌装散装精液（`dosing_bulk`）

计量后的混合物进入独立的散装到离散剂量灌装职责。

分母与范围要求：每灌装运行

原始数量及计算要求：按灌装运行记录计量投入。 原始采集分母类型：process_output。

- 选定流: 配制后的牛科散装精液（UUID 未解析）
- 流属性/单位: Volume / mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_dosing`
- 数量范围: 灌装投入平衡
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: mL per run
  - 基准: 送灌装的配制物料
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 剂量管与封口材料（`straws`）

计数一次剂量容器和封口；二次交付包装另计。

分母与范围要求：每灌装运行

原始数量及计算要求：发放量减未用归还量，并与灌装和不合格件数核对。 原始采集分母类型：process_output。

- 选定流: 剂量管与封口材料（UUID 未解析）
- 流属性/单位: Count / item
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_dosing`
- 来源: `woah-bovine-2024`
- 数量范围: 剂量管件数平衡
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000000
  - 单位: items per run
  - 基准: 发放的一次容器
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格灌装剂量（`filled_doses`）

已灌装并密封的合格单位进入保存，或在新鲜路线直接进入交付包装。

分母与范围要求：每灌装运行

原始数量及计算要求：按批次计数质量合格灌装剂量并记录体积、精子数。 原始采集分母类型：process_output。

- 选定流: 保存前已灌装牛科精液剂量（UUID 未解析）
- 流属性/单位: Count / dose
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_dosing`
- 数量范围: 合格灌装件数
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000000
  - 单位: doses per run
  - 基准: 合格的离散剂量
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 灌装不合格剂量（`fill_reject`）

灌装不足、破损或未密封单位按实际废物去向处理，并另计精液损失体积。

分母与范围要求：每灌装运行

原始数量及计算要求：计数不合格单位并核对相应物料损失。 原始采集分母类型：process_output。

- 选定流: 灌装不合格牛科精液剂量（UUID 未解析）
- 流属性/单位: Count / dose
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_dosing`
- 数量范围: 不合格件数平衡
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000000
  - 单位: doses per run
  - 基准: 灌装失败单位
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：冷却或冷冻保存（`preservation`）

#### 输入

##### 产品流

###### 送保存的灌装剂量（`preservation_input`）

新鲜剂量绕过该干预；冷却和冷冻批次按记录路线进入。

分母与范围要求：每保存批次

原始数量及计算要求：计数按保存路线分配的投入单位。 原始采集分母类型：process_output。

- 选定流: 保存前已灌装牛科精液剂量（UUID 未解析）
- 流属性/单位: Count / dose
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preservation`
- 数量范围: 保存路线投入件数
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000000
  - 单位: doses per batch
  - 基准: 分配至冷却或冷冻路线的单位
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 冷却与冷冻能源（`preservation_energy`）

按路线及占用期计量制冷、受控冷冻和储存能源。

分母与范围要求：每合格保存剂量

原始数量及计算要求：实测共享能源按实际路线和期间只归属一次。 原始采集分母类型：process_output。

- 选定流: 保存供能，载体由前景记录确定（由前景确定）
- 流属性/单位: Energy / kWh
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preservation`
- 数量范围: 暂定能源核查范围
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kWh per dose
  - 基准: 实际路线及储存期间用能
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 冷冻批次液氮（`nitrogen`）

计量低温剂消耗及容器补充损失；重复使用罐体为单独共享资产。

分母与范围要求：每合格冷冻剂量

原始数量及计算要求：采购量减退回和期末库存，分配给冷冻批次。 原始采集分母类型：process_output。

- 选定流: 采精中心输入液氮（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preservation`
- 来源: `fao-cryoconservation-2021`
- 数量范围: 暂定液氮核查范围
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg per frozen dose
  - 基准: 实际储存期间实测低温剂
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保存后合格剂量（`preserved_doses`）

冷却或冷冻后质量合格单位带状态标签进入交付包装。

分母与范围要求：每保存批次

原始数量及计算要求：计数经路线专属保持或解冻测试合格的单位。 原始采集分母类型：process_output。

- 选定流: 冷却或冷冻牛科精液剂量（UUID 未解析）
- 流属性/单位: Count / dose
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preservation`
- 数量范围: 保存后合格件数
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000000
  - 单位: doses per batch
  - 基准: 状态专属合格单位
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 保存不合格剂量（`preservation_reject`）

质量失败或储存损失按实际去向列为废物。

分母与范围要求：每保存批次

原始数量及计算要求：按路线、原因、批次和服务期计数损失。 原始采集分母类型：process_output。

- 选定流: 保存不合格牛科精液剂量（UUID 未解析）
- 流属性/单位: Count / dose
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_preservation`
- 数量范围: 保存不合格件数
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000000
  - 单位: doses per batch
  - 基准: 实际拒收的储存单位
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：保护包装与交付（`centre_dispatch`）

#### 输入

##### 产品流

###### 送包装的合格剂量（`dispatch_input`）

新鲜已灌装或保存后合格单位只接收一次，并保留供体、质量和状态。

分母与范围要求：每交付批次

原始数量及计算要求：每个放行批次只计一个来源路径。 原始采集分母类型：process_output。

- 选定流: 交付前合格牛科精液剂量（UUID 未解析）
- 流属性/单位: Count / dose
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_dispatch`
- 数量范围: 交付投入件数
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000000
  - 单位: doses per lot
  - 基准: 到达包装线的合格单位
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 二次保护包装（`dispatch_packaging`）

记录实际二次包装材料；可回收运输容器按周转服务归属，而非一次耗材。

分母与范围要求：每合格交付剂量

原始数量及计算要求：按材料和批次计发放量减未用包装。 原始采集分母类型：reference_flow。

- 选定流: 保护性交付包装，材料由前景确定（由前景确定）
- 流属性/单位: Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_dispatch`
- 数量范围: 暂定包装核查范围
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg per dose
  - 基准: 中心实际消耗的二次包装
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采精中心交付的可用剂量（`usable_dose`）

一剂质量放行的授精用精液跨越采精中心交付门。

参考产出的原始记录：每参考流恰为一剂合格放行品。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

机器单位 item 是已确认单位组参考单位 Item(s) 的本地写法，倍率为 1。一件表示一个符合声明物种、状态、等级及放行规格的合格繁殖用剂量。原始采集记录保留剂量计数。此计数写法不将容器、体积、精子数、卵母细胞或操作次数视为合格产品，也不建立不同物种、状态或剂量规格之间的等价关系。

分母与范围要求：每参考流

- 选定流: 采精中心交付的可用牛精液剂量
- 流属性 / 单位：物品数量 / item
- 数量规则：1 item
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_dispatch`
- 来源: `un-cpc-3`; `woah-bovine-2024`
- 数量范围: 参考剂量恒等式
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: dose
  - 基准: 每一合格中心交付参考剂量
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 采集记录 (`collected_record`)

##### 废物流

###### 交付前包装淘汰物（`packing_reject`）

放行前破损剂量和包装进入实际废物路线。

分母与范围要求：每交付批次

原始数量及计算要求：核对放行与不合格件数，并另计包装质量。 原始采集分母类型：process_output。

- 选定流: 交付前淘汰的精液剂量和包装（UUID 未解析）
- 流属性/单位: Count / dose plus kg package
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_dispatch`
- 数量范围: 包装后不合格件数
  - 范围角色: 质量核查边界 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000000
  - 单位: doses per lot
  - 基准: 交付门前的拒收单位
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `subdivide` | 全部节点 | 分配前按物种、供体、批次和路线分拆；仅将实测服务计入放行剂量。 | `woah-hygiene-2024` |
| `output_status` | 淘汰供体及降级品 | 独立淘汰活体或可售降级精液须有实际去向与交接；不合格物和送处理粪污属废物。 | `un-cpc-3`; `woah-bovine-2024` |
| `residual` | 不可拆负担 | 优先用有因果性的供体日、批次使用或储存占用；披露剩余物理/经济分配及敏感性，不作虚构替代品抵扣。 | `woah-hygiene-2024` |
| `period_asset` | 供体和共享资产 | 将饲料、健康、供体替换/淘汰、实验室与罐体服务只归到实际期间和使用节点一次，防止重复计入。 | `woah-hygiene-2024` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_donor` | `donor_management` | 饲料、水、淘汰、粪污、资产 | 供体台账 | donor_id, species, breed, donor_days, feed_DM, water, health, cull_mass, manure, asset_service | 称量、水表与饲养日志；原始汇总要求：按供体期间汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, day | 每日/事件 | 完整供体服役期 | 全部供精供体 | 每参考流 | 有日期的供体与采购记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_collection` | `semen_collection` | 原精液与耗材 | 采精日志 | donor_id, event_id, volume, consumables, failed_event | 体积与材料发放记录；原始汇总要求：按事件汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | mL, kg | 每事件 | 全部合格采集事件 | 中心采精室 | 每参考流 | 校准的采集记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_quality` | `quality_grading` | 合格、降级、不合格 | 实验室检测 | event_id, sperm_count, concentration, motility, grade, sample_volume, destination | 等级检测；原始汇总要求：核对各去向。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | mL, count | 每事件 | 全部采集 | 中心实验室 | 每参考流 | 签认检测与分级记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_preparation` | `first_preparation` | 已处理与淘汰 | 批次日志 | batch_id, incoming_volume, prepared_volume, removed_volume | 校准物料平衡；原始汇总要求：投入产出平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | mL | 每批 | 全部首处理批次 | 中心实验室 | 每参考流 | 批次追踪；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_formulation` | `formulation` | 精液、组分、散装、不合格 | 配方日志 | batch_id, semen_volume, ingredient_mass, batch_volume, reject_volume | 称量实际配方；原始汇总要求：物料平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, mL | 每批 | 全部配制批次 | 中心实验室 | 每参考流 | 批次与称量记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_dosing` | `dosing` | 散装、剂量管、合格及淘汰 | 灌装运行台账 | run_id, bulk_volume, straw_issued, straw_returned, filled_count, reject_count, dose_volume, sperm_per_dose | 计数器与灌装平衡；原始汇总要求：件数与体积平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | mL, dose | 每次运行 | 全部灌装运行 | 灌装线 | 每参考流 | 设备校准；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_preservation` | `preservation` | 能源、液氮、合格及淘汰 | 冷链日志 | batch_id, route, temperature, hold_days, kWh, nitrogen_mass, vessel_service, accepted_count, reject_count | 电表、记录仪和罐体平衡；原始汇总要求：路线/期间分母。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kWh, kg, dose | 每批/每日 | 全部储存批次 | 冷库与罐体 | 每参考流 | 记录仪与采购凭证；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_dispatch` | `centre_dispatch` | 包装、放行、不合格 | 放行台账 | lot_id, donor, species, route, grade, package_mass, vessel_cycle, released_count, reject_count, gate_time | 放行计数与材料发放日志；原始汇总要求：放行剂量仅计一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | dose, kg | 每批 | 全部交付 | 中心交付门 | 每参考流 | 质量放行与交接单；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `material_reconcile` | 从采集到交付 | 经校准单位换算后，原精液与稀释液组分投入等于合格、降级、不合格、抽样及损失物料。 | `cp_collection`, `cp_quality`, `cp_preparation`, `cp_formulation`, `cp_dosing`, `cp_preservation`, `cp_dispatch` | 批次物料与剂量平衡 | `fao-cryoconservation-2021` |
| `donor_intensity` | 供体维持 | 独立输出归属后，用同期供体负担除以相关合格剂量。 | `cp_donor`, `cp_dispatch` | 每剂量负担 | `woah-hygiene-2024` |
| `route_intensity` | 保存 | 状态专属能源、液氮、损失与储存占用量除以该状态的合格剂量。 | `cp_preservation`, `cp_dispatch` | 每路线剂量负担 | `fao-cryoconservation-2021` |
| `shared_asset` | 基础设施 | 在完整服务期内按实测使用/占用将服务只归属到使用节点一次。 | `cp_donor`, `cp_preservation`, `cp_dispatch` | 唯一归属的资产负担 | `woah-hygiene-2024` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `identity` | 放行剂量 | 保留供体物种/品种、批次、路线、质量、每剂精子数与体积。 | 供体、检测和放行记录 |
| `completeness` | 整个中心 | 包含失败采集、分级不合格、配制和灌装损失、包装、公用能源与资产。 | 已核对的过程台账 |
| `temporal` | 供体和储存 | 供体日、储存占用、替换/淘汰和输出须匹配所声明期间。 | 有日期的饲养与罐体日志 |
| `comparability` | 保存状态 | 新鲜/冷却/冷冻分母及质量分别记录；不设通用剂量产率或冻结因子。 | 路线与质量日志 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `reference` | 最终剂量 | 必填中心交付门、供体物种、合格件数、质量和状态；未解析产品 UUID 不支持固定流发布。 | `un-cpc-3`; `woah-bovine-2024` |
| `route` | 新鲜/冷却/冷冻 | 每个放行单位只能有一个状态；仅计实际路线投入、储存期和不合格品。 | `fao-cryoconservation-2021` |
| `balance` | 全部材料接口 | 以实际记录核对精液、组分、等级去向、灌装数量、废物和包装。 | `fao-cryoconservation-2021` |
| `attribution` | 输出、期间、资产 | 检查淘汰/降级交接、供体期间、因果分配和共享资产唯一归属。 | `woah-hygiene-2024` |
| `identity_review` | 流 UUID | 元数据矛盾的平台牛精液候选仍留空，待源行修复及重新详情核实。 | `un-cpc-3` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 采精中心交付门的牛精液生产前景数据包。 |
| downstream_use | `secondary_dataset`；仅经路线、身份和数据质量复核后才作 `background_dataset`。 |
| allowed_use | 与物种、质量及保存状态相符的精液剂量建模。 |
| excluded_use | 活畜、胚胎、非牛类精液、授精服务或未区分新鲜/冷冻状态的比较。 |
| required_metadata | 中心、交付门、供体、健康、批次、合格等级、每剂精子数与体积、保存、包装、储存期、输出和分配。 |
| required_quality_disclosure | 未解析 UUID、缺失记录、分配假设、暂定范围及物料平衡缺口。 |
| update_trigger | 供体范围、质量标准、稀释液、保存方法、包装、流身份或分配证据变动。 |

## 11. 数据来源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3` | standard | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品身份与排除项 |
| `woah-hygiene-2024` | standard | https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2024/en_chapitre_general_hygiene_semen.htm | 供体管理、中心卫生与储存 |
| `woah-bovine-2024` | standard | https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2024/en_chapitre_coll_semen.htm | 精液采集、处理与可追溯性 |
| `fao-cryoconservation-2021` | official_guidance | https://www.fao.org/fileadmin/user_upload/animal_genetics/docs/CGRFA-18-21-10_2_Inf1_forPDF.pdf | 家牛和水牛精液、处理与保存路线 |
| `ipcc-livestock-2019` | method_factor | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 物种与粪污路径专属的畜牧排放计算 |
