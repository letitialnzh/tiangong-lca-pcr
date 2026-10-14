---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-bovine-animals
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他牛亚科动物活体

## 1. 适用范围

本 PCR 适用于牛亚科中未归入另列的牛属（*Bos*）牛类及水牛/野牛属（*Bubalus*、*Syncerus*、*Bison*）的活体，且仅在逐物种分类决定获得证明后纳入剩余牛类。蓝牛羚（*Boselaphus tragocamelus*）是有条件的实例：ITIS 将其列入牛亚科，但联合国并未明确将该物种列在 CPC 02119，且在 02129 的剩余反刍动物说明中提到羚羊。每个实际批次必须记录分类单元、CPC/HS 判断、合法来源、活体状态及真实交接点，不得同时计入 02119 和 02129。分类或迁移要求本身不等于许可。死亡动物、肉、皮、捕后放归的科研活动以及交接点之后的买方运输均不在范围内。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-bovine-animals` |
| classification_refs | CPC 3.0 `02119`，须有逐物种剩余类决定 |
| covered_products | 有来源证明并在养殖者或获准捕获来源处真实交接的牛亚科剩余类活体；蓝牛羚仅在剩余分类论证获接受时适用 |
| excluded_products | 牛属动物，包括牦牛、野牛、印度野牛和爪哇野牛；水牛属、非洲水牛属和野牛属；逐项审查后归入 02129 的动物；死体及交接后产品 |
| representative_product | 一个合格已申报物种在真实交接点的 1 kg 实测活体质量 |
| production_route | 有记录的圈养/牧场繁育饲养，或单独获准的捕获及活体转移；同一批次不得同时具有两种来源历史 |
| market_state | 活体、未加工，已确认物种/类别、状态和合法来源 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一个已申报物种和来源路线的牛亚科剩余类活体 |
| How much | 1 kg 实测活体质量，并记录头数及个体或批次称量 |
| How well | 核实物种/分类单元、年龄性别类、存活与健康状态、所有权/保管链和合法来源 |
| How long or cycle | 饲养存栏及设施的实际期间，或获得授权的真实捕获行动期 |
| reference_flow_link | `live_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 具物种、来源和交接点限定的其他牛亚科动物活体 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 科学物种名及牛亚科证据；02119 与 02129 分类决定；辖区和授权；养殖/捕获路线；头数；性别年龄类；实测质量；存活状态；存栏/行动期；真实交接点 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_live_mass` | 每次活体转移和参考流 | 质量 | kg | 在每一真实交接点记录实测活体质量与头数，不得采用通用 kg/头 系数。 |
| `m_period` | 存栏、捕获和共用设施 | 时间 | 已申报日或期间 | 将实际投入、死亡、移动和产出关联到唯一的存栏/行动期及设施服务期间。 |
| `m_balance` | 活体台账 | 头数及质量 | 头、kg | 对期初/购入、出生或捕获、死亡、活体转移及期末存栏进行不重复的平衡。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 养殖路线：有记录的期初群或购入繁殖/幼畜及其前序负担；捕获路线：明确获准的自由活动来源与行动期，不虚构终生饲养。 |
| starting_condition_role | 受管理生物存栏或合法捕获情境；购入动物为带上游负担的产品投入。 |
| product_classification_scope | 排除另列类别并明确解决蓝牛羚/其他羚羊与 02129 重叠后的逐物种牛亚科剩余类活体。 |
| recursive_input_rule | 对同类购入活体只链接一次前一交接点数据；内部活体转移不是另一最终产品。 |
| upstream_dataset_requirement | 核对购入动物、饲料、供水、能源和服务的供应者、物料身份、地理、单位及交接点；保留来源、保管和迁移许可。 |
| disclosure | 分类单元及 CPC 决定、合法来源、路线、存栏/行动期、实测头数/质量、损失、设施期间、真实交接及未解析身份。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_class` | 每一批次 | 证明属于牛亚科且不属于另列的牛属/水牛野牛属；记录为什么带“羚羊”名称的物种不归入 02129。蓝牛羚是分类推断，不是联合国明确点名。 | `un-cpc3-2025`; `itis-nilgai`; `un-cpc21-2015` |
| `b_managed` | 受管理来源 | 记录真实繁育饲养、购入动物前序负担、饲养及存栏期间变化，直至活体移交。 | `fws-nilgai-zoo-2019` |
| `b_capture` | 获准捕获来源 | 独立捕获节点须有实际合法授权、行动记录、存活动物及目的地交接；捕后放归的科研活动不属于上市活体参考产出。 | `usda-nilgai-capture-2023`; `tahc-exotics-movement` |
| `b_gate` | 两种路线 | 止于一个真实活体来源交接；不含屠宰、尸体产品和交接后买方运输。 | `un-cpc3-2025`; `nandankanan-nilgai-exchange`; `tahc-exotics-movement` |
| `b_shared` | 设施及设备 | 将共用圈舍、供水和操作服务按实际使用节点及期间分配一次。 | `fws-nilgai-zoo-2019` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed` | 繁育饲养合格的剩余类牛亚科动物 | conditional | 有记录的受管理存栏与实际饲养 | 生物生产及活体存栏交接 | 每 kg 验收活体产出 |
| `capture` | 独立捕获并短暂留置合格的剩余类牛亚科动物 | conditional | 有活体转移的真实获准行动，且与受管理来源互斥 | 捕获、福利及损失交接 | 每 kg 验收活体产出 |
| `gate` | 挑选、称量并交接活体动物 | required | 一个真实养殖/捕获来源交接点 | 活体验收及参考产出 | 每 kg 验收活体产出 |

圈养蓝牛羚出生证明受管理繁育可发生；另有蓝牛羚科研捕获证据，但捕后放归**不是**产品路线。下述捕获过程只有在获准且真实转移活体时才适用。每一批次只选一种来源路线；未发生的投入为零须有未使用记录。不能预设另有独立共产品；如确有独立移交产品，应先识别其流与归属。死亡动物及粪肥不是活体产品。

### 过程：繁育饲养合格的剩余类牛亚科动物（`managed`）

#### 输入

##### 产品流

###### 购入的活体繁殖畜或幼畜（`managed_stock`）

保留供应者负担，将期初存栏与新增购入分开记录。

分母与范围要求：每 kg 验收活体产出

- 选定流：逐物种其他牛亚科动物活体存栏；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按类别和进入事件称量购入及期初动物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animals`
- 数量范围：暂定非负存栏筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供给受管理存栏的饲料（`managed_feed`）

计入购入或外供饲料；原地放牧作为土地/管理情境申报，不虚构购入流。

分母与范围要求：每 kg 验收活体产出

- 选定流：按真实物料身份确定的外供饲料；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：采用保留边界内损失及其生产负担的已核对饲料投入记录，依 inventory_reference_normalization 和 stage_throughput_linkage 计算可归属最终数据包交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 数量范围：暂定非负外供饲料筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饮用与饲养供水（`managed_water`）

记录计量或分摊的供水，不计雨水。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实供水
- 流属性/单位：质量 / kg
- 数量规则：按实际动物及设施期间计量或核对供水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 数量范围：暂定非负供水筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 设备供电点的电力（`managed_energy_electricity`）

**managed_energy 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

记录圈舍、供水和操作的实际电力或燃料；按期间分配共用服务。
分母与范围要求：每 kg 验收活体产出

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 来源：`fao-agricultural-energy`

###### 供应设备的柴油（`managed_energy_diesel`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：供应设备的柴油
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 来源：`fao-agricultural-energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交由验收的受管理活体动物（`managed_live`）

这是存活动物的内部转移，不是第二次出售。

分母与范围要求：每 kg 验收活体产出

- 选定流：受管理来源出口的逐物种其他牛亚科动物活体；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按物种类别和期间称量、计数转移的活体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animals`
- 数量范围：暂定活体转移对账筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 受管理存栏死亡尸体（`managed_deaths`）

按死亡原因和合法处置去向记录，不计作活体产出。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实处置交接点的其他牛亚科动物尸体；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按存栏、事件及去向计量死体质量和头数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_losses`
- 数量范围：暂定非负死亡筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 受管理存栏弃置粪肥（`managed_manure`）

此处仅列跨边界的废弃粪肥；若确有单独销售的粪肥，应另立有证据的产品卡。

分母与范围要求：每 kg 验收活体产出

- 选定流：按去向确定的真实弃置粪肥；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：称量或核算收集后弃置的粪肥，不含牧场原地排泄。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_losses`
- 数量范围：暂定非负粪肥筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 肠道生物源甲烷排放至空气（`review_managed_enteric_ch4`）

仅适用于实际受管理物种及类别存在的消化路径；用有记录的动物活动/采食量及有依据的方法计算。不得将牛类因子套用于尚未表征的物种。 仅适用于实际运行的 `managed` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：生物源甲烷排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg CH4
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污生物源甲烷排放至空气（`review_managed_manure_ch4`）

按粪污系统、气候、停留时间及挥发性固体活动量计算实际大气排放。核对回收、销毁或氧化甲烷；产生量不自动等于排放量。 仅适用于实际运行的 `managed` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：生物源甲烷排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg CH4
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污直接氧化亚氮排放至空气（`review_managed_direct_n2o`）

使用实际粪污管理氮路径。贮存/处理须与田间施用和放牧沉积分开；后两者须使用管理土壤方法并明确清单核算责任。 仅适用于实际运行的 `managed` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氧化亚氮排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg N2O
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污氮引致的间接氧化亚氮排放至空气（`review_managed_indirect_n2o`）

适用时，由有记录的粪污氮挥发/沉降及淋溶/径流路径计算可归属间接 N2O。与直接 N2O 分开，并核对下游或所用背景/影响模型中已包含的氮去向计算。 仅适用于实际运行的 `managed` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氧化亚氮排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg N2O
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污氨排放至空气（`review_managed_nh3`）

采用真实物种、圈舍/贮存条件及有依据的氮流方法。逐阶段跟踪总氮和铵态氮；通用挥发氮估计可能包含其他氮物种，不能自动视为 NH3。 仅适用于实际运行的 `managed` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氨排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg NH3
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-eea-manure-2023`

### 过程：独立捕获并短暂留置合格的剩余类牛亚科动物（`capture`）

#### 输入

##### 产品流

###### 设备供电点的电力（`capture_energy_electricity`）

**capture_energy 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

仅计获准捕获/留置行动实际消耗的燃料或电力。
分母与范围要求：每 kg 验收活体产出

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_capture` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 来源：`fao-agricultural-energy`

###### 供应设备的柴油（`capture_energy_diesel`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：供应设备的柴油
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_capture` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 来源：`fao-agricultural-energy`

###### 短暂留置供水（`capture_water`）

记录真实留置用水；零用水须有未使用记录。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实供给的留置用水
- 流属性/单位：质量 / kg
- 数量规则：按捕获批次与留置期间计量或核对供水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：暂定非负留置用水筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 一次性捕获和福利耗材（`capture_materials`）

保留真实物料身份；可复用器具为跨行动分配的设施服务，不重复计作消耗品。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实一次性捕获/留置物料；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：从发放及消耗记录计数或称量行动耗材。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：暂定非负耗材筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交由验收的存活捕获动物（`captured_live`）

仅记录确实以活体交接的动物；捕后放归不属于本产品路线。

分母与范围要求：每 kg 验收活体产出

- 选定流：获准捕获出口的逐物种其他牛亚科动物活体；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按行动、类别与目的地计量存活转移的质量与头数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：暂定活体捕获转移筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 捕获及留置死亡动物（`capture_deaths`）

将死体与存活捕获及合法放归分开记录。

分母与范围要求：每 kg 验收活体产出

- 选定流：捕获路线产生的真实其他牛亚科动物尸体；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按行动计量死亡头数/质量及处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_losses`
- 数量范围：暂定非负捕获损失筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：挑选、称量并交接活体动物（`gate`）

#### 输入

##### 产品流

###### 来自唯一来源的活体动物（`gate_in`）

仅链接一次受管理来源或捕获来源的活体转移；购入批次须保留供应者负担。

分母与范围要求：每 kg 验收活体产出

- 选定流：来源至交接点转移的逐物种其他牛亚科动物活体；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：称量并核对进入的头数、类别与路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animals`
- 数量范围：暂定进入活体对账筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 适用于物种的活体防护容纳材料（`gate_containment`）

仅计真实一次性容纳材料；可复用箱笼或设施按共用资产服务处理。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实防护容纳材料
- 流属性/单位：质量 / kg
- 数量规则：按验收活体交接实际使用量计数或称量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 数量范围：暂定非负容纳材料筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 真实交接点验收的其他牛亚科动物活体（`live_output`）

这是唯一参考产出，不是跨物种平均流。

分母与范围要求：每 kg 验收活体产出

参考产出的原始记录：加总实测验收活体质量并归一化为 1 kg。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

- 选定流： 具物种、来源和交接点限定的其他牛亚科动物活体
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：精确参考归一化
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集计算（`calculated_from_collection`）

###### 验收前退回的活体动物（`gate_return`）

仅真实退回来源的活体为产品转移，绝非第二次最终出售或废物。

分母与范围要求：每 kg 验收活体产出

- 选定流：逐物种退回的活体动物；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：称量和计数退回动物；后续重新饲养须链接真实新增责任。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animals`
- 数量范围：暂定非负活体退回筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 活体交接前死亡动物（`gate_deaths`）

死体具有独立处置去向，不能进入活体参考产出。

分母与范围要求：每 kg 验收活体产出

- 选定流：交接点真实其他牛亚科动物尸体；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：计量交接前死亡头数/质量及处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_losses`
- 数量范围：暂定非负交接损失筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_live_only` | 来源及交接点 | 已申报基线仅有一种预期活体产品；死亡动物、弃置粪肥和科研放归不得分配为共产品。如有单独销售的新增产品，须先有其独立实测交换及明确归属决定。 | `fws-nilgai-zoo-2019` |
| `a_period` | 受管理存栏及捕获行动 | 将期初存栏、投入、损失、替换和验收动物归于真实存栏/行动期及报告期间；不得按假定通用寿命摊销。 | `fws-nilgai-zoo-2019`; `usda-nilgai-capture-2023` |
| `a_shared` | 圈舍、供水和操作设施 | 依记录的使用情况在真实消耗的来源/交接节点及服务期间分配每项共用设施或服务，且只计一次。 | `fws-nilgai-zoo-2019` |
| `a_transfer` | 活体移动 | 来源至交接点的内部转移及退回均为平衡项，绝非新增最终产出。 | |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | `managed`; `gate` | 活体存栏、转移及参考流 | 存栏台账；称量单；保管记录 | 物种；分类单元；来源；类别；头数；活体 kg；事件时间；交接点；接收方；授权 | 标识、称量真实动物并逐批对账；原始汇总要求：只加总一次验收 kg，退回另列。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头；kg | 每次移动及期间结账 | 全部存栏与交接期间 | 单一操作及真实交接点 | 每参考流 | 校准称；身份台账；签收单；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_inputs` | `managed`; `gate` | 饲料、供水、能源、容纳材料 | 发票；计量表；物料发放记录 | 物料；数量；单位；供应方；节点；服务期间 | 计量或核对真实供给量；原始汇总要求： 按 calc_feed_supply_and_intake 区分承担生产负担的饲料投入、实际采食量及损失；保留原生库存及期间记录，可归属量对合格最终产出归一化一次。 | kg；kWh | 每次供给及期间结账 | 完整服务期间 | 实际使用节点 | 每参考流 | 发票；计量表；库存台账；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_capture` | `capture` | 行动与活体捕获 | 许可；行动日志；称量单 | 授权；地点；物种；头数；活体质量；燃料；供水；耗材；放归/死亡/转移；目的地 | 记录获准操作与真实活体交接；原始汇总要求：只有存活且移交的动物成为活体产出。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头；kg；kWh | 每次行动事件 | 真实行动及留置期间 | 获准来源与交接点 | 每参考流 | 许可；日志；签收单；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_losses` | `managed`; `capture`; `gate` | 死亡及弃置粪肥 | 兽医；处置；粪肥台账 | 物种；质量；头数；原因；去向；期间 | 按物质分开称量或核对真实损失；原始汇总要求：各废物只加总一次，不含活体退回。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头；kg | 每次事件及期间结账 | 所有来源及交接期间 | 真实节点 | 每参考流 | 兽医记录；处置收据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_pathway_emissions` | `managed` | 路径专属气体及粪污氮/碳 | 动物、饲料、粪污、田间及方法台账 | 物种/类别；动物日；采食/干物质/消化率；挥发性固体；粪污氮/铵态氮；系统份额；气候；贮存时间；肥料氮；放牧；挥发/淋溶；甲烷回收；因子来源/单位；最终合格产出 ；收集粪污湿质量；干物质；去向| 按节点及期间采集一手活动数据，证明参数适用性，保留各路径计算表及链接的处理/牧地数据集  保留原始总量，可归属数量仅对实测最终合格参考产出归一化一次。| animal-day；kg DM；kg VS；kg N；kg CH4；kg N2O；kg NH3 | 各运行期间及管理变化时 | 完整所代表群体与服务期间 | 仅实际运行节点 | 每参考流 | 计量/分析记录、氮级联、方法与因子证据、防重复台账 |
| `cp_feed_supply_and_intake` | `managed` | 饲料投入、采食及损失 | 库存、收货、发料及损失台账 | 饲料身份/来源；群体/阶段；期间；期初/期末库存；收货；自产供给；未用退回/转出；未食用/变质质量及去向；原物/干物质；实际采食量；负担归属；合格最终产出 | 按 calc_feed_supply_and_intake 核对匹配的库存、称重、日粮/采草估算及处置记录。保留原始总量及阶段分母，生产与处理负担各归属一次，再对合格最终产出归一化。 | kg as-fed; kg DM | 每次发料及期间结算 | 完整所代表群体/期间 | 实际运行饲喂节点 | 每参考流 | 库存及供应商记录；水分证据；损失及无重复核算核对 |
| `cp_manure_n2o_coverage` | `managed` | 粪污/土壤直接及间接 N2O 覆盖 | 分路径氮台账及方法计算表 | 物种/类别；期间；排泄氮；阶段库存/转移；系统份额；挥发 NH3-N/NOx-N；淋溶/径流氮；施用/放牧氮；因子来源、单位及适用性；直接/间接分项；接受介质；已链接过程及归属卡；合格最终产出 | 按 calc_manure_n2o_coverage 保留原始阶段氮及分项计算，并匹配实际作业与现有粪污协议。记录缺证据或不适用路径及覆盖边界，可归属 N2O 归一化一次。 | kg N; kg N2O | 每个报告期间及管理变化 | 完整所代表管理期间 | 实际运行及明确链接节点 | 每参考流 | 氮平衡、因子单位/适用性、分项到卡片及无重复核算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_reference` | 最终活体交接点 | 加总一个交接点的实测验收活体 kg，以此除各边界内数量，并核对头数/质量台账平衡。 | `cp_animals`; `cp_capture`; `cp_losses` | 每 kg 验收活体产出数量 | `tahc-exotics-movement` |
| `c_shared` | 共用服务 | 将有记录的服务按真实使用节点和期间分配一次后再归一化；保留分母及期间证据。 | `cp_inputs`; `cp_animals` | 每 kg 活体产出的归属服务量 | |
| `calc_pathway_emissions` | `managed` | 采用物种和管理方式相容的方法，保留分路径总量。N2O-N 乘 44/28 转为 N2O，NH3-N 乘 17/14 转为 NH3，且恰换算一次；已为分子质量者不得重算。依据有记录的可用碳/甲烷潜力平衡检查甲烷，并按各阶段可用氮核对氮损失。已挥发氮引致的间接形成是下游转化，不是源阶段第二次氮损失。归属及归一化只做一次，不重复计入链接处理或去向模型中的排放。  物理筛查采用分配前、同一原始期间的数量：CH4 质量 × 12/16 不得超过所代表路径的可用碳；源阶段 NH3 质量 × 14/17、直接 N2O 质量 × 28/44 与其他源阶段氮损失之和，在核对库存及转移后不得超过该阶段可用氮。各项间接 N2O-N 计算以有记录的挥发氮或淋溶氮前体为上限，不再从源台账扣除该下游转化。这些是守恒检查，不是排放因子或经验单位产品区间。| `cp_pathway_emissions` | 每最终参考流的指定化合物 kg | `review-ipcc-livestock-2019`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `managed_feed` | 所代表作业使用的饲料投入 = 期初饲料库存 + 收货 + 进入本作业的自产饲料 - 期末饲料库存 - 有记录的未用退回或转出。该投入保留边界内变质、拒食及被丢弃的剩余料。实际采食量 = 该投入 - 实测未食用/丢弃损失，并匹配水分/干物质与期间；采食量仅用于营养及代谢计算。期初库存承接原有负担，不是再次采购。追溯未用退回或转出的物料及负担去向，不自动给予替代抵扣。同一饲料的生产负担由采购饲料数据集或已建模自产作物/采集节点承担一次，不得两者并计。实际废料处理及粪污贡献计一次，不再次添加饲料生产负担。 | `cp_feed_supply_and_intake` | 同一原物/干物质基准下分开的饲料投入、采食及损失数量 | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `review_managed_direct_n2o`; `review_managed_indirect_n2o` | 按真实粪污阶段，采用有记录的物种/系统活动量及因子基准，分别计算直接 N2O、挥发/沉降引致间接 N2O，以及适用的淋溶/径流引致间接 N2O。N2O-N 乘 44/28 恰换算一次为分子态 N2O；已为分子质量的不得再次换算。保留分项计算表。现有 N2O 卡同时覆盖直接与间接排放时，填报其不重叠总和；已有直接/间接独立卡时，每个分项只归入对应卡，不再另报总和。放牧沉积及田间施用采用管理土壤方法，不套用粪污贮存因子。明确前景与已链接处理/牧地数据的核算责任；粪污转出不消除此前排放，已覆盖的下游排放不得重复。氮级联核对库存、转移及此前氮损失；间接 N2O 是前体的下游转化，不再次视为源阶段氮损失。可归属分子质量对合格参考产出归一化一次。记录不适用依据；路径数据缺失不等于零。 | `cp_manure_n2o_coverage` | 按路径及现有归属卡分开的 kg 分子态 N2O | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_class` | 每一批次 | 证明分类单元及 02119 相对于 02111/02112/02129 的剩余定位，不得只看俗名。 | 分类学记录；分类决定 |
| `dq_legal` | 每一批次 | 证明来源、保管、迁移/捕获权限和接收方；科研放归不是上市产出。 | 许可；来源及交接记录 |
| `dq_mass` | 参考流及转移 | 实测活体质量和头数，核对退回及死亡，不假定 kg/头。 | 称量单；动物台账 |
| `dq_period` | 存栏/行动及设施 | 覆盖完整报告期间并只分配一次共用负担。 | 服务及事件台账 |
| `dq_uuid` | 最终交换 | 下游 TIDAS 交换发布前核实精确流、流属性和单位组。 | 平台详情及支持行证据 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_class` | 每个数据集 | 拒绝缺少物种、未说明与 02129 重叠，或已归入牛类/水牛/野牛的动物。 | `un-cpc3-2025`; `itis-nilgai`; `un-cpc21-2015` |
| `v_route` | 每一批次 | 要求恰好一种来源路线、真实合法权限和活体转移；捕后放归不得作为产品产出。 | `usda-nilgai-capture-2023`; `tahc-exotics-movement` |
| `v_balance` | 存栏及产出 | 对期初/购入/捕获、出生、转移、退回、死亡和期末存栏进行头数及质量平衡；只有验收活体为参考产出。 | |
| `v_period` | 设施及存栏 | 要求真实服务期间、使用节点及不重复的共用归属；不得假定通用寿命或捕获产率。 | |
| `v_identity` | 未绑定卡片 | 未确认 UUID 留空；最终具体交换须有精确流、流属性和单位组证据。 | |
| `v_pathway_emission_coverage` | `managed` | 要求路径覆盖台账，包含生物学适用时的肠道 CH4、粪污 CH4、直接/间接 N2O、NH3 及相关田间排放。每条路径须有实测/计算量、覆盖匹配的明确链接过程，或有依据的不适用结论；缺数据不得记零。捕获前的野生生活不纳入受管理饲养，实际受管理留置须另行评估，并保留物种专属证据。 | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | 实际运行节点及链接服务 | 适用时记录现场燃料燃烧及制冷剂泄漏的核算责任：须为量化前景排放，或明确覆盖它们的具名链接过程，不能仅凭燃料供应或电力生产投入视为已包含。特殊类群生物及残余物排放须依物种/路线证据评估，不套通用畜牧因子。标明尚未落实的路径，不宣称清单完整；记录有依据的不存在结论并防止上/下游重复核算。 | |
| `v_feed_supply_intake_separation` | 全部饲料投入 | 拒绝扣除边界内拒食、变质或丢弃剩余料且未保留其生产负担的上游饲料清单。按 calc_feed_supply_and_intake 核对投入、采食、库存、转移及损失去向。不得把采食量当作饲料投入，不得假设自产饲料零负担或自动给予替代产品抵扣。 | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | 适用粪污及管理土壤氮路径 | 须明确直接及间接路径覆盖、阶段氮平衡及分子质量换算。按 calc_manure_n2o_coverage，将各分项归入现有 N2O 卡或明确覆盖的已链接过程一次。间接路径证据缺失时不得宣称完整；不得默认零值或把汇总值与分项重复并计。 | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 前景逐物种牛亚科剩余类活体数据集 |
| downstream_use | `secondary_dataset`；仅在物种/交接点专项审查后可作 `background_dataset` |
| allowed_use | 一个合格物种、已记录的剩余分类、合法来源及真实活体交接 |
| excluded_use | 跨物种平均；无证明捕获或转移；科研放归；死亡动物；交接后运输 |
| required_metadata | 分类单元及分类理由；许可；路线；头数/质量；类别；存栏/行动期；交接点；期间；损失；身份依据 |
| required_quality_disclosure | 法律与分类不确定性、质量测量、清单缺口、暂定 Range 及未解析 UUID |
| update_trigger | 新的官方 CPC/HS 归类、物种/路线变化、迁移限制、交接点变化或核实的流身份 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | [联合国 CPC 3.0 解释说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 另列牛/水牛排除及剩余类别 |
| `un-cpc21-2015` | official_guidance | [联合国 CPC 2.1 与 HS 0102.90 对照](https://unstats.un.org/unsd/classifications/unsdclassifications/cpcv21.pdf) | 剩余牛类分类解释 |
| `itis-nilgai` | dataset | [ITIS 蓝牛羚分类](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=552477) | 牛亚科归属，不是交易许可 |
| `fws-nilgai-zoo-2019` | official_guidance | [美国鱼类与野生动物管理局许可档案中的圈养蓝牛羚出生记录](https://downloads.regulations.gov/FWS-HQ-IA-2019-0102-0003/content.pdf) | 受管理繁育路线证据，不是具体批次授权 |
| `nandankanan-nilgai-exchange` | dataset | [Nandankanan 动物园蓝牛羚交换记录](https://nandankanan.org/mobile/exchange-of-animals.php) | 机构间真实活体移交证据，不证明普遍销售或一概许可 |
| `usda-nilgai-capture-2023` | literature | [USDA ARS 蓝牛羚活体捕获研究摘要](https://www.ars.usda.gov/research/publications/publication/?seqNo115=393616) | 独立捕获及福利问题，不证明产品出售 |
| `tahc-exotics-movement` | official_guidance | [得州动物卫生委员会外来牲畜迁移要求](https://www.tahc.texas.gov/regs/pdf/MovementRequirements_Exotics-Ratites.pdf) | 蓝牛羚活体迁移控制问题，不是普遍法律许可 |
| `review-ipcc-livestock-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | 物种与路径适用性；CH4 和 N2O 方法选择，不作为通用排放因子 |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 氮流方法；采用参数前核实实际物种、管理方式及地域适用性 |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | 管理土壤直接及间接氮路径与边界核对 |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | 饲料投入、采食及废料负担的区分，不提供动物参数。将该核算原则用于声明类群是本 PCR 的方法学选择；不移植猪的日粮或排放因子。 |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
