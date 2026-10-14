---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.horses
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 马

## 1. 范围与适用性

本 PCR 覆盖在种马场或养殖农场生产者门口交付的活马（*Equus caballus*），包括马驹和较大日龄的马。不包括驴、骡、駃騠、马肉、马皮、屠宰，也不包括交付后骑乘、运输或劳役服务。日后用于工作的马在生产者门口仍是活体动物产品；后续服务不是此处的联产品。种马、产驹和幼马养殖阶段仅在实际运行时纳入。外购种马或幼马承继上游负担一次。记录品种、性别、日龄/类别、预期用途、实测活重、只数、饲养方式、实际交付门和期间。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.horses` |
| classification_refs | CPC 3.0 `02131`，马 |
| covered_products | 活马，包括种马场生产者门口的马驹和养殖农场生产者门口的较大日龄马 |
| excluded_products | 驴、骡、駃騠、死马、马肉、马皮、作为参考流的屠宰投入和下游马匹服务 |
| representative_product | 在声明的生产者交付门按活重计量的活马 |
| production_route | 实际运行时纳入母马/公马繁殖和产驹的受管理生物生产，较大日龄马路线有条件纳入幼马养殖。放牧与圈舍补饲路线共享生物生产母过程，但牧草/饲料、用水、圈舍能源、粪污沉积和监测不同；两者可跨期间共存，应记录份额而非只贴路线标签。独立的活马集合、状态检查与交付承接实际运行的生产阶段。同一批次的种马场马驹与养殖农场较大日龄马最终交付互斥。 |
| market_state | 活体、未经加工，并声明日龄/类别、性别、用途和健康状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 对象 | 种马场或养殖农场生产者门口的活马 |
| 数量 | 1 kg 实测活重；报告只数及类别特定的每匹马 kg |
| 品质 | 活体且未经加工；记录品种、性别、日龄/类别、预期用途和状态 |
| 时间或周期 | 声明的繁殖季、产驹群体或养殖周期；种马及共享资产负担按实际服务期间归属 |
| reference_flow_link | `live_horses_handover` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 生产者交付的活马 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必要限定条件 | 品种；性别；马驹/幼马/成年马类别；用途；活体状态；只数；实测质量；称重协议；种马场或养殖农场生产者交付门；地点与周期 |

两个已核实平台候选均以屠宰场/工厂为交接位置，而非生产者门，不能绑定至此宽口径参考流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 所需属性 | 所需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `live_mass` | 参考及活马转移 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 整批称重或按日龄/类别对代表马匹称重并核对只数；没有类别特定实测平均质量，不得由只数换算 kg。 |
| `herd_count` | 种马与养殖存栏 | Count | 匹 | 按群体及期间核对期初、购入、产驹、转移、售出、死亡和期末匹数。 |
| `service_period` | 种马与共享资产 | Time | 天或季 | 分配负担前对繁殖、产驹、养殖期间、母马/公马更新和共享服务建立时间索引。 |
| `manure_mass` | 粪肥产品/废物 | Mass | kg | 将外运可用粪肥、送处理废物与放牧排泄分成不同去向；记录水分或收到时的质量基准。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 首个运行节点的期初种马群或接收幼马，连同来源、日龄、只数、实测质量和承继负担 |
| starting_condition_role | 前景期初存栏或上游产品投入，不得默认零负担 |
| product_classification_scope | 仅 CPC 3.0 `02131` 活马 |
| recursive_input_rule | 对外购活马，在其真实前序交付门连接一个上游数据集；不得递归重复生产同一阶段或将内部马驹转移作为第二个最终产品。 |
| upstream_dataset_requirement | 按真实供应方/交付门、属性和地理范围匹配饲料、外购马、兽医材料、水、能源与服务的上游数据集。 |
| disclosure | 运行的种马/养殖节点、放牧及圈舍份额、繁殖季与更新、共享资产、所有活体产出交付门、死亡及粪污去向。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_product` | 所有路线 | 截止于种马场或养殖农场生产者的活马交付。屠宰、马肉/马皮及售后劳役、骑乘或运输服务属于下游并排除。 | `un-cpc-2025`; `fao-equine-husbandry` |
| `boundary_breeder` | 繁殖路线 | 仅在实际运行时纳入母马/公马维持、繁殖、产驹和马驹护理；外购马保留供应商负担，种马期间和活体淘汰马分别报告。 | `fao-equine-husbandry` |
| `boundary_route` | 放牧与圈养路线 | 按实际方式和期间记录饲料/牧草、放牧土地、公用工程、兽医护理、圈舍和粪污沉积；多个方式可共存，不设通用单一路线。 | `fao-equine-husbandry`; `woah-working-equids` |
| `boundary_shared` | 资产及粪污 | 按记录的马日、占用容量或计量服务量，将共享马厩、围栏、供水和处理设备归至实际节点/期间一次；记录粪污路径并避免重复。 | `fao-equine-husbandry`; `ipcc-livestock-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量基准 |
| --- | --- | --- | --- | --- | --- |
| `breeder` | 维持种马群并产生活马驹 | conditional | 实际运行母马/公马繁殖与产驹；否则使用外购幼马数据集 | 受管理的生物生产，按季节记录母马/公马与马驹义务 | 每 kg 离开种马阶段的活马驹 |
| `rearing` | 养殖马驹与幼马 | conditional | 较大日龄马的生产者交付路线 | 受管理的生物生长，具有放牧/圈舍清单差异 | 每 kg 离开养殖的活马 |
| `handover` | 集合、评估和交付活马 | required | 最终种马场马驹或养殖农场较大日龄马路线 | 独立的活体捕捉与生产者门计量 | 每 kg 合格参考活马 |

集合是生物生产后独立的职责：在实际交付点识别合格活马、核对处理损失，且不能虚构屠宰场交付门。每批次的两个最终生产者路线互斥。种马繁殖季、产驹事件、养殖群体、更新/淘汰和资产服务期间均明确建立索引。

### 过程：维持种马群并产生活马驹 (`breeder`)

#### 输入

##### 产品流

###### 进入种马群的母马与公马 (`breeder_stock`)

按实测活重和承继上游负担记录购入种马；自有期初存栏属于声明的起始条件。

分母与范围要求：每 kg 离开种马阶段的活马驹

原始数量及计算要求：按日龄与性别记录的实测接收活重 原始采集分母类型：process_output。

- 选定流：活体种马（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定进入种马群的母马与公马完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活马驹
  - 基准：每 kg 离开种马阶段的活马驹
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种马牧草与精饲料 (`breeder_feed`)

分别记录交付饲料、自有牧草及放牧采食，不把牧草采食重复计为外购饲料。

分母与范围要求：每 kg 离开种马阶段的活马驹

原始数量及计算要求：按 calc_feed_supply_and_intake 分别建立饲料投入、采食及损失台账。承担饲料生产负担的数量包含边界内拒食、变质及未食用饲料，不得缩减为动物采食量。保留来源、物种/群体、阶段及原始质量/水分基准。最终贡献依 inventory_reference_normalization 和 stage_throughput_linkage 恰归一化一次。 原始采集分母类型：process_output.

- 选定流：马饲料与外购牧草（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：采用保留边界内损失及其生产负担的已核对饲料投入记录，依 inventory_reference_normalization 和 stage_throughput_linkage 计算可归属最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed`
- 数量范围：暂定种马牧草与精饲料完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活马驹
  - 基准：每 kg 离开种马阶段的活马驹
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供种马群用水 (`breeder_water`)

按用途采集饮用水和马厩清洁用水；牧场降雨不是购入产品投入。

分母与范围要求：每 kg 离开种马阶段的活马驹

原始数量及计算要求：计量或记录的供水量 原始采集分母类型：process_output。

- 选定流：种马群供水（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定供种马群用水完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 活马驹
  - 基准：每 kg 离开种马阶段的活马驹
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种马兽医药品与护理用品 (`breeder_care`)

按诊疗日志记录进入种马节点的药品与护理用品；外部专业服务按提供方与期间记录。

分母与范围要求：每 kg 离开种马阶段的活马驹

原始数量及计算要求：按药品和护理材料计量的产品数量 原始采集分母类型：process_output。

- 选定流：马兽医用品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_health`
- 数量范围：暂定种马兽医药品与护理用品完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 活马驹
  - 基准：每 kg 离开种马阶段的活马驹
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 设备供电点的电力（`breeder_energy_electricity`）

**breeder_energy 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

运行种马圈舍时按载体和期间记录实际电、热与燃料。
分母与范围要求：每 kg 离开种马阶段的活马驹
原始数量及计算要求：计量的载体能源 原始采集分母类型：process_output。

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_utilities` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`fao-agricultural-energy`

###### 供应设备的柴油（`breeder_energy_diesel`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：供应设备的柴油
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_utilities` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`fao-agricultural-energy`

###### 过程入口的外购热量（`breeder_energy_heat`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：过程入口的外购热量
- 流属性 / 单位：能源 / MJ
- 数量规则：依 `cp_utilities` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`fao-agricultural-energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 离开种马阶段的活马驹 (`live_foals`)

在种马阶段交接点称量并计数活马驹；区分销售与内部转养殖。

分母与范围要求：每 kg 离开种马阶段的活马驹

原始数量及计算要求：合格马驹的实测活重 原始采集分母类型：process_output。

- 选定流：种马场门口活马驹（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：产出质量归一化
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 活马驹
  - 基准：每 kg 离开种马阶段的活马驹
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-equine-husbandry`

###### 独立销售的活体淘汰种马 (`breeder_culls`)

仅实际售出的活体淘汰种马属于联产品；死马和屠宰产物不属于此项。

分母与范围要求：每 kg 离开种马阶段的活马驹

原始数量及计算要求：已售淘汰种马的实测活重 原始采集分母类型：process_output。

- 选定流：种马场门口活体淘汰马（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定独立销售的活体淘汰种马完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活马驹
  - 基准：每 kg 离开种马阶段的活马驹
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作为可用产品外运的种马粪肥 (`breeder_manure_product`)

仅记录有接收方和用途证据的称重粪肥；放牧排泄保留于实际土地路径。

分母与范围要求：每 kg 离开种马阶段的活马驹

原始数量及计算要求：称重并转移的粪肥产品 原始采集分母类型：process_output。

- 选定流：外运马粪肥（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：暂定作为可用产品外运的种马粪肥完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活马驹
  - 基准：每 kg 离开种马阶段的活马驹
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 种马死亡与弃置粪污 (`breeder_losses`)

按质量与去向分类死马和送处理粪污，与可用粪肥产品分开。

分母与范围要求：每 kg 离开种马阶段的活马驹

原始数量及计算要求：按去向计量的损失 原始采集分母类型：process_output。

- 选定流：送往处理的种马阶段损失（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：暂定种马死亡与弃置粪污完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活马驹
  - 基准：每 kg 离开种马阶段的活马驹
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 种马肠道发酵生物源甲烷排入空气 (`breeder_enteric_ch4_air`)

依据记录的马日、类别及饲料方式，以所选 IPCC 方法单独计算马肠道发酵 CH4，不与粪污 CH4 混合；UUID 仅标识排入空气的甲烷。

分母与范围要求：每 kg 离开种马阶段的活马驹

原始数量及计算要求：按类别种群与期间、所选 IPCC 方法计算马肠道发酵 CH4 原始采集分母类型：process_output。

- 选定流：甲烷 (生物源)（排放至空气） `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定非负肠道发酵 CH4 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活马驹
  - 基准：每 kg 离开种马阶段的活马驹
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种马粪污生物源甲烷排入空气 (`breeder_manure_ch4_air`)

仅按记录的粪污系统和期间特定 IPCC 活动量与因子选择计算。

分母与范围要求：每 kg 离开种马阶段的活马驹

原始数量及计算要求：依据采集粪污活动数据的路径特定 CH4 计算 原始采集分母类型：process_output。

- 选定流：甲烷 (生物源)（排放至空气） `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定种马粪污生物源甲烷排入空气完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活马驹
  - 基准：每 kg 离开种马阶段的活马驹
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种马粪污氧化亚氮排入空气 (`breeder_manure_n2o_air`)

采用实际粪污管理路径及直接及适用间接 N2O 方法输入；避免放牧土壤排放重复。

本节点单张 N2O 卡的覆盖：按 calc_manure_n2o_coverage 分别计算所代表节点的直接与适用间接分项，再仅填报归入本卡的不重叠分子态 N2O 总和。贮存与管理土壤计算分开。排除由已链接过程明确覆盖的分项并保留覆盖证据，不得把汇总交换与分项交换重复并计。间接路径证据缺失不等于零。

分母与范围要求：每 kg 离开种马阶段的活马驹

原始数量及计算要求：依据采集粪污活动数据的路径特定 N2O 计算 原始采集分母类型：process_output。

- 选定流：一氧化二氮（排放至空气） `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定种马粪污氧化亚氮排入空气完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活马驹
  - 基准：每 kg 离开种马阶段的活马驹
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种马粪污氨排入空气 (`breeder_manure_nh3_air`)

仅报告实测 NH3 或另经审查的路径估算；空气流 UUID 不是排放因子。

分母与范围要求：每 kg 离开种马阶段的活马驹

原始数量及计算要求：实测 NH3 释放量或经审查的路径计算 原始采集分母类型：process_output。

- 选定流：氨（排放至空气） `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：暂定种马粪污氨排入空气完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 活马驹
  - 基准：每 kg 离开种马阶段的活马驹
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：养殖马驹与幼马 (`rearing`)

#### 输入

##### 产品流

###### 进入养殖的马驹或幼马 (`young_horses`)

内部种马转入或外购幼马上游数据只使用一次，并记录日龄、只数与质量。

分母与范围要求：每 kg 离开养殖的活马

原始数量及计算要求：实测接收活重 原始采集分母类型：process_output。

- 选定流：进入养殖的活幼马（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定进入养殖的马驹或幼马完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 离开养殖的活马
  - 基准：每 kg 离开养殖的活马
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 养殖牧草与精饲料 (`rearing_feed`)

记录外购及自产饲料和实际放牧采食，区分放牧与圈养管理需求。

分母与范围要求：每 kg 离开养殖的活马

原始数量及计算要求：按 calc_feed_supply_and_intake 分别建立饲料投入、采食及损失台账。承担饲料生产负担的数量包含边界内拒食、变质及未食用饲料，不得缩减为动物采食量。保留来源、物种/群体、阶段及原始质量/水分基准。最终贡献依 inventory_reference_normalization 和 stage_throughput_linkage 恰归一化一次。 原始采集分母类型：process_output.

- 选定流：马饲料与外购牧草（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：采用保留边界内损失及其生产负担的已核对饲料投入记录，依 inventory_reference_normalization 和 stage_throughput_linkage 计算可归属最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed`
- 数量范围：暂定养殖牧草与精饲料完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 离开养殖的活马
  - 基准：每 kg 离开养殖的活马
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供养殖马匹用水 (`rearing_water`)

按用途、仪表与水源记录饮用和清洁供水；在用途未明前不指定单一流身份范围。

分母与范围要求：每 kg 离开养殖的活马

原始数量及计算要求：实测供水量 原始采集分母类型：process_output。

- 选定流：养殖供水（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定供养殖马匹用水完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 离开养殖的活马
  - 基准：每 kg 离开养殖的活马
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 设备供电点的电力（`rearing_energy_electricity`）

**rearing_energy 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

按载体记录实际照明、供暖、通风与护理能源；放牧路线可有不同用量。
分母与范围要求：每 kg 离开养殖的活马
原始数量及计算要求：按载体计量或发票记录的能源 原始采集分母类型：process_output。

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_utilities` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`fao-agricultural-energy`

###### 养殖马匹兽医药品与护理用品 (`rearing_care`)

按马群与期间纳入实际预防或治疗用品；不推断通用治疗计划。

分母与范围要求：每 kg 离开养殖的活马

原始数量及计算要求：按群体计量的药品与护理材料 原始采集分母类型：process_output。

- 选定流：马兽医用品（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_health`
- 数量范围：暂定养殖马匹兽医药品与护理用品完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 离开养殖的活马
  - 基准：每 kg 离开养殖的活马
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 离开养殖的活马 (`grown_horses`)

在独立交付前测量成年马或较大日龄幼马的活重，记录日龄/用途与只数。

分母与范围要求：每 kg 离开养殖的活马

原始数量及计算要求：进入交付过程的实测活重 原始采集分母类型：process_output。

- 选定流：养殖出口活马（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：产出质量归一化
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 离开养殖的活马
  - 基准：每 kg 离开养殖的活马
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-equine-husbandry`

###### 外运的可用养殖粪肥 (`rearing_manure_product`)

按称重质量、买方和去向记录独立转移的可用粪肥。

分母与范围要求：每 kg 离开养殖的活马

原始数量及计算要求：外运可售粪肥称重质量 原始采集分母类型：process_output。

- 选定流：外运马粪肥（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：暂定外运的可用养殖粪肥完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 离开养殖的活马
  - 基准：每 kg 离开养殖的活马
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 养殖死马及送处理粪污 (`rearing_losses`)

按日期、质量与去向记录死马和弃置粪污；放牧排泄不属外运废物。

分母与范围要求：每 kg 离开养殖的活马

原始数量及计算要求：实测损失和外运粪污 原始采集分母类型：process_output。

- 选定流：送往处理的养殖损失（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：暂定养殖死马及送处理粪污完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 离开养殖的活马
  - 基准：每 kg 离开养殖的活马
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 养殖马匹肠道发酵生物源甲烷排入空气 (`rearing_enteric_ch4_air`)

依据记录的马日、类别及饲料方式，以所选 IPCC 方法单独计算马肠道发酵 CH4，不与粪污 CH4 混合；UUID 仅标识排入空气的甲烷。

分母与范围要求：每 kg 离开养殖的活马

原始数量及计算要求：按类别种群与期间、所选 IPCC 方法计算马肠道发酵 CH4 原始采集分母类型：process_output。

- 选定流：甲烷 (生物源)（排放至空气） `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定非负肠道发酵 CH4 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 离开养殖的活马
  - 基准：每 kg 离开养殖的活马
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 养殖粪污生物源甲烷排入空气 (`rearing_manure_ch4_air`)

仅根据实际粪污管理路径与采集的 IPCC 活动数据计算。

分母与范围要求：每 kg 离开养殖的活马

原始数量及计算要求：依据养殖粪污记录的路径特定 CH4 计算 原始采集分母类型：process_output。

- 选定流：甲烷 (生物源)（排放至空气） `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定养殖粪污生物源甲烷排入空气完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 离开养殖的活马
  - 基准：每 kg 离开养殖的活马
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 养殖粪污氧化亚氮排入空气 (`rearing_manure_n2o_air`)

按记录路径将粪污管理直接和间接 N2O 与放牧土壤归属分开。

本节点单张 N2O 卡的覆盖：按 calc_manure_n2o_coverage 分别计算所代表节点的直接与适用间接分项，再仅填报归入本卡的不重叠分子态 N2O 总和。贮存与管理土壤计算分开。排除由已链接过程明确覆盖的分项并保留覆盖证据，不得把汇总交换与分项交换重复并计。间接路径证据缺失不等于零。

分母与范围要求：每 kg 离开养殖的活马

原始数量及计算要求：依据养殖粪污记录的路径特定 N2O 计算 原始采集分母类型：process_output。

- 选定流：一氧化二氮（排放至空气） `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定养殖粪污氧化亚氮排入空气完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 离开养殖的活马
  - 基准：每 kg 离开养殖的活马
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 养殖粪污氨排入空气 (`rearing_manure_nh3_air`)

仅纳入实测 NH3 或另经审查的粪污路径方法，不借用 CH4/N2O 因子。

分母与范围要求：每 kg 离开养殖的活马

原始数量及计算要求：实测 NH3 或另经审查的计算 原始采集分母类型：process_output。

- 选定流：氨（排放至空气） `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：暂定养殖粪污氨排入空气完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 离开养殖的活马
  - 基准：每 kg 离开养殖的活马
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：集合、评估和交付活马 (`handover`)

#### 输入

##### 产品流

###### 进入独立交付过程的活马 (`horses_to_handover`)

最终批次投入为种马场门口马驹或养殖马之一，先前负担仅转移一次。

分母与范围要求：每 kg 合格参考活马

原始数量及计算要求：核对后只数乘实测平均活重 原始采集分母类型：reference_flow。

- 选定流：进入交付处理的活马（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：暂定进入独立交付过程的活马完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg/kg 合格活马
  - 基准：每 kg 合格参考活马
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交付买方的合格活马 (`live_horses_handover`)

在声明的种马场或养殖农场生产者门口计数、称重合格活马。

参考产出的原始记录：实测合格活重 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 生产者交付的活马
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd`
- 数量范围：产出质量归一化
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 合格活马
  - 基准：每 kg 合格参考活马
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-equine-husbandry`

##### 废物流

###### 交付期间死亡或淘汰的马 (`handover_losses`)

按质量/只数和实际去向记录淘汰或死亡马；不得把屠宰投入称作生产者产品。

分母与范围要求：每 kg 合格参考活马

原始数量及计算要求：按去向实测未接受马匹质量 原始采集分母类型：reference_flow。

- 选定流：送处理的不合格马（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 数量范围：暂定交付期间死亡或淘汰的马完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 合格活马
  - 基准：每 kg 合格参考活马
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 所有操作 | 首先按各自记录细分种马、养殖和交付投入产出；不得再次分配已经直接归属于马群或节点的负担。 | `fao-equine-husbandry` |
| `allocation_outputs` | 马驹、活体淘汰种马、较大日龄活马及可用粪肥 | 列出每项有意产出的产品、质量、去向和交付门。共享负担无法细分时，用实测的物理因果关系（马日、服务用量或饲料需求）分配；若无可辩护关系，用同期经济价值并披露价格与敏感性。死马和处置粪污是废物，不能作产品抵扣。 | `fao-equine-husbandry`; `ipcc-livestock-2019` |
| `allocation_periods` | 跨季繁殖和养殖 | 按记录期间将母马/公马维持、繁殖/妊娠、产驹、断奶、养殖、更新与活体淘汰归属受益群体；转移的马驹仅传递一次先前负担。 | `fao-equine-husbandry` |
| `allocation_shared` | 共享马厩、牧场/围栏、供水及处理设备 | 按计量用量、占用马日或容量天数，将每项资产或服务只分配一次给使用马匹/节点/期间；披露所选归属键及份额之和。 | `fao-equine-husbandry` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd` | `breeder`, `rearing`, `handover` | 马匹存栏与活重 | 马群及买方记录 | 期初/接收/产驹/售出/死亡匹数；按类别马日；品种、性别、日龄、用途；实测体重、交付门和日期 | 每次流转计数，并称量整批或日龄类别样本；原始汇总要求：存栏平衡、按类别加权的活重及类别特定马日。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 匹；马日；kg | 每次流转及期间 | 完整繁殖/养殖群体 | 每个生产者交付门 | 每参考流 | 动物登记、秤及买方收据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed` | `breeder`, `rearing` | 饲料与牧场 | 饲料发票和放牧日志 | 交付量、期初/期末库存、自有牧草、牧场面积/天数、马日 | 称重收据、饲料台账和放牧记录；原始汇总要求： 按 calc_feed_supply_and_intake 区分承担生产负担的饲料投入、实际采食量及损失；保留原生库存及期间记录，可归属量对合格最终产出归一化一次。 | kg；ha 日；马日 | 每次接收及期间 | 完整种马季/群体 | 所有马厩与围场 | 每参考流 | 发票、秤及田间日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_utilities` | `breeder`, `rearing` | 水、电及燃料 | 仪表及燃料日志 | 水源、用途、期初/期末读数、载体和资产使用者 | 仪表读数或发票，使用因果归属键处理共享用量；原始汇总要求：读数差、单位换算及一次性服务分配。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 水；kWh；MJ | 仪表间隔 | 所有运行期间 | 所有水、电接点 | 每参考流 | 仪表图像、收据与资产日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_health` | `breeder`, `rearing` | 药品与兽医护理 | 诊疗和采购日志 | 药品/材料、剂量/质量、马群、服务提供者及日期 | 处方及库存核对；原始汇总要求：按群体汇总产品量，并披露外部服务。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；次 | 每次事件 | 完整马群 | 所有受治疗马匹 | 每参考流 | 兽医记录与发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure` | `breeder`, `rearing`, `handover` | 粪污、死亡与排放 | 粪污、死亡及监测日志 | 粪污管理、放牧排泄、外运及弃置质量、挥发性固体、直接气体监测、死亡匹数/质量、去向 | 称重/抽样，记录路径；声称实测气体时保存观测；原始汇总要求：核对去向并只选择一次路径特定方法。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；马日 | 每次事件/期间 | 所有运行马群期间 | 马厩、围场及处理处 | 每参考流 | 粪污分析、田间和处置记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed_supply_and_intake` | `breeder`; `rearing` | 饲料投入、采食及损失 | 库存、收货、发料及损失台账 | 饲料身份/来源；群体/阶段；期间；期初/期末库存；收货；自产供给；未用退回/转出；未食用/变质质量及去向；原物/干物质；实际采食量；负担归属；合格最终产出 | 按 calc_feed_supply_and_intake 核对匹配的库存、称重、日粮/采草估算及处置记录。保留原始总量及阶段分母，生产与处理负担各归属一次，再对合格最终产出归一化。 | kg as-fed; kg DM | 每次发料及期间结算 | 完整所代表群体/期间 | 实际运行饲喂节点 | 每参考流 | 库存及供应商记录；水分证据；损失及无重复核算核对 |
| `cp_manure_n2o_coverage` | `breeder`; `rearing` | 粪污/土壤直接及间接 N2O 覆盖 | 分路径氮台账及方法计算表 | 物种/类别；期间；排泄氮；阶段库存/转移；系统份额；挥发 NH3-N/NOx-N；淋溶/径流氮；施用/放牧氮；因子来源、单位及适用性；直接/间接分项；接受介质；已链接过程及归属卡；合格最终产出 | 按 calc_manure_n2o_coverage 保留原始阶段氮及分项计算，并匹配实际作业与现有粪污协议。记录缺证据或不适用路径及覆盖边界，可归属 N2O 归一化一次。 | kg N; kg N2O | 每个报告期间及管理变化 | 完整所代表管理期间 | 实际运行及明确链接节点 | 每参考流 | 氮平衡、因子单位/适用性、分项到卡片及无重复核算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_live_mass` | 活马转移 | 活重＝核对后的只数×按品种/性别/日龄类别实测的平均体重；有整批秤量时使用整批实测值 | 只数、抽样体重、秤 | kg 及 kg/匹 | `fao-equine-husbandry` |
| `calc_herd` | 马群存栏 | 期初＋购入＋产驹−售出−死亡−内部移出＝期末匹数，逐群体和期间计算 | 马群流转 | 匹数平衡 | `fao-equine-husbandry` |
| `calc_enteric` | 马肠道发酵 CH4 | 根据类别特定马日及所选 IPCC 马匹方法计算肠道发酵甲烷，与粪污 CH4 分开；披露方法/因子和期间。 | 马群马日、类别及饲料方式 | 排入空气的肠道发酵 CH4 | `ipcc-livestock-2019` |
| `calc_gas` | 粪污 CH4、N2O、NH3 | 粪污 CH4/N2O 仅按实际路径和采集的 IPCC 输入计算；NH3 需要实测或单独审查的路径因子。流 UUID 是身份，不是排放因子。 | 粪污与监测记录 | 粪污产生的分物种空气排放 | `ipcc-livestock-2019` |
| `calc_shared` | 共享基础设施 | 按计量用量或记录的马日/容量天数，将一项实测服务负担分配给种马与养殖节点/期间；份额之和必须为一 | 服务、使用者、期间及归属键 | 节点/期间负担 | `fao-equine-husbandry` |
| `calc_feed_supply_and_intake` | `breeder_feed`; `rearing_feed` | 所代表作业使用的饲料投入 = 期初饲料库存 + 收货 + 进入本作业的自产饲料 - 期末饲料库存 - 有记录的未用退回或转出。该投入保留边界内变质、拒食及被丢弃的剩余料。实际采食量 = 该投入 - 实测未食用/丢弃损失，并匹配水分/干物质与期间；采食量仅用于营养及代谢计算。期初库存承接原有负担，不是再次采购。追溯未用退回或转出的物料及负担去向，不自动给予替代抵扣。同一饲料的生产负担由采购饲料数据集或已建模自产作物/采集节点承担一次，不得两者并计。实际废料处理及粪污贡献计一次，不再次添加饲料生产负担。 | `cp_feed_supply_and_intake` | 同一原物/干物质基准下分开的饲料投入、采食及损失数量 | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `breeder_manure_n2o_air`; `rearing_manure_n2o_air` | 按真实粪污阶段，采用有记录的物种/系统活动量及因子基准，分别计算直接 N2O、挥发/沉降引致间接 N2O，以及适用的淋溶/径流引致间接 N2O。N2O-N 乘 44/28 恰换算一次为分子态 N2O；已为分子质量的不得再次换算。保留分项计算表。现有 N2O 卡同时覆盖直接与间接排放时，填报其不重叠总和；已有直接/间接独立卡时，每个分项只归入对应卡，不再另报总和。放牧沉积及田间施用采用管理土壤方法，不套用粪污贮存因子。明确前景与已链接处理/牧地数据的核算责任；粪污转出不消除此前排放，已覆盖的下游排放不得重复。氮级联核对库存、转移及此前氮损失；间接 N2O 是前体的下游转化，不再次视为源阶段氮损失。可归属分子质量对合格参考产出归一化一次。记录不适用依据；路径数据缺失不等于零。 | `cp_manure_n2o_coverage` | 按路径及现有归属卡分开的 kg 分子态 N2O | `ipcc-livestock-2019`; `ipcc-managed-soils-2019` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考与转移 | 保留马而非其他马科动物的身份、品种、性别、日龄/类别、只数、实测活重、用途和实际生产者交付门。 | 马匹登记与买方收据 |
| `dq_period` | 种马与养殖 | 将繁殖、产驹、断奶、更新、淘汰、饲料、粪污及资产使用关联完整带日期的期间。 | 马群及资产日志 |
| `dq_route` | 放牧与圈养 | 以实际饲料、牧场、圈舍公用工程、护理和粪污记录支持方式差异；明确记录混合期间。 | 牧场、马厩与诊疗日志 |
| `dq_complete` | 投入和产出 | 核对活体转移、饲料、水、能源、兽医用品、活体淘汰、死亡和粪污去向；披露遗漏。 | 核对表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 最终活马 | 如缺实测 kg、核对后只数、日龄/类别、用途或种马场/养殖农场生产者交付门，则拒绝参考流。屠宰场/工厂候选 UUID 不是生产者门参考身份。 | `un-cpc-2025` |
| `validate_species` | 分类 | 仅限马；驴、骡/駃騠、马肉/皮或下游劳役/运输服务不得作为活马参考流。 | `un-cpc-2025` |
| `validate_route` | 受管理生产 | 核实实际运行的种马/养殖节点和有记录的放牧/圈养清单差异；同一内部批次不得同时计为种马场马驹与养殖农场较大日龄马的最终产出。 | `fao-equine-husbandry`; `woah-working-equids` |
| `validate_outputs` | 产品、废物和排放 | 在各交付门核对马驹、活体淘汰种马、较大日龄活马、可用粪肥、死马及送处理粪污；记录分配并避免活马或粪污产出重复。 | `fao-equine-husbandry`; `ipcc-livestock-2019` |
| `validate_period_asset` | 跨期间/共享负担 | 核查繁殖、产驹、断奶、养殖与更新期间，以及跨所有使用节点的服务归属键，份额只合计一次。 | `fao-equine-husbandry` |
| `validate_gas` | 肠道发酵与粪污排放 | 肠道 CH4 与粪污 CH4 分别使用活动数据和计算路径。肠道 CH4 需类别特定马日与所选马匹方法；粪污 CH4/N2O 需实际去向和路径特定 IPCC 输入；NH3 需实测或经审查的方法。不得从固定流 UUID 推断数量。 | `ipcc-livestock-2019` |
| `v_foreground_emission_responsibility` | 实际运行节点及链接服务 | 适用时记录现场燃料燃烧及制冷剂泄漏的核算责任：须为量化前景排放，或明确覆盖它们的具名链接过程，不能仅凭燃料供应或电力生产投入视为已包含。特殊类群生物及残余物排放须依物种/路线证据评估，不套通用畜牧因子。标明尚未落实的路径，不宣称清单完整；记录有依据的不存在结论并防止上/下游重复核算。 | |
| `v_feed_supply_intake_separation` | 全部饲料投入 | 拒绝扣除边界内拒食、变质或丢弃剩余料且未保留其生产负担的上游饲料清单。按 calc_feed_supply_and_intake 核对投入、采食、库存、转移及损失去向。不得把采食量当作饲料投入，不得假设自产饲料零负担或自动给予替代产品抵扣。 | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | 适用粪污及管理土壤氮路径 | 须明确直接及间接路径覆盖、阶段氮平衡及分子质量换算。按 calc_manure_n2o_coverage，将各分项归入现有 N2O 卡或明确覆盖的已链接过程一次。间接路径证据缺失时不得宣称完整；不得默认零值或把汇总值与分项重复并计。 | `ipcc-livestock-2019`; `ipcc-managed-soils-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 活马生产农场门前景数据包 |
| downstream_use | 经审查后在过程/生命周期模型组装中作 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 具体参考流身份经核实且交付门相符的种马场或养殖农场活马 |
| excluded_use | 屠宰场投入、肉/皮、驴/骡、马匹劳役服务或未经称重的只数转质量换算 |
| required_metadata | 品种、性别、日龄/类别、用途、只数与 kg、生产者门、场址、种马/养殖期间、放牧/圈养、粪污去向、联产品及共享资产归属键 |
| required_quality_disclosure | 体重/只数平衡、证据缺口、暂定 Range 筛查、上游身份及任何未解析 UUID |
| update_trigger | 马分类、路线、生产者门、UUID 证据、粪污方法或已审查规则变化 |

## 11. 数据来源

| 来源 ID | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-2025` | `official_guidance` | [联合国 CPC 3.0 解释说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 马与其他马科及下游产品边界 |
| `fao-equine-husbandry` | `extension_guidance` | [FAO 第 5 章：马、驴和骡](https://www.fao.org/4/t0690e/t0690e07.htm) | 马匹护理、产驹、圈养/放牧、饲料、用水和交付背景 |
| `woah-working-equids` | `official_guidance` | [WOAH 第 7.12 章：工作马科动物福利](https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/en_chapitre_aw_working_equids.htm) | 饲养与福利接口，并非将服务视为产品 |
| `ipcc-livestock-2019` | `method_factor` | [2019 IPCC 修订，第 4 卷第 10 章](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | 粪污路径与温室气体方法 |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | 饲料投入、采食及废料负担的区分，不提供动物参数。将该核算原则用于声明类群是本 PCR 的方法学选择；不移植猪的日粮或排放因子。 |
| `ipcc-managed-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | 直接及间接氮路径，以及粪污贮存与管理土壤排放的衔接；须选择适用的物种及管理证据。 |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
