---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-hen-eggs-in-shell-fresh
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 农场门口鲜壳食用鸡蛋

## 1. 范围与适用性

本 PCR 覆盖生产农场门口交付的非孵化用鲜壳鸡蛋，以 1 kg 可销售带壳质量归一化。纳入管理型产蛋、后备鸡、饲料、供水、舍饲、粪污及独立收蛋。分级和初级包装仅在交付前实际由农场实施时纳入。外部分级或包装厂、农场后运输、打蛋、巴氏杀菌及进一步加工均排除。孵化蛋、其他鸟类的蛋及无壳产品均排除。淘汰鸡和外运粪污只有独立交付的证据成立时才作为联产品；破损及变质蛋为损失或废物，另行销售时须声明不同产品状态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-hen-eggs-in-shell-fresh |
| classification_refs | CPC 3.0: 02312 其他鲜壳鸡蛋 |
| covered_products | 农场门口交付的非孵化用鲜壳鸡蛋，包括未分级及场内分级、包装状态。 |
| excluded_products | 孵化蛋、其他鸟类的蛋、无壳或加工蛋以及农场后工厂分级、包装和配送。 |
| representative_product | 农场门口可销售鲜壳食用鸡蛋。 |
| production_route | 蛋鸡管理型生物生产为母过程；笼养、舍养、散养等有证据路线在一个鸡群内相互排斥，舍饲、饲料、垫料、粪污、能源和数据要求各异。独立收蛋为必需，场内分级和包装为条件节点。 |
| market_state | 鲜态、带壳、非孵化用途，声明等级、枚数、质量、收集/贮存和包装状态。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产农场门口非孵化用鲜壳鸡蛋。 |
| How much | 1 kg 可销售带壳质量，并保留枚数。 |
| How well | 壳完整且为鲜态，声明等级或未分级状态、破损规则、贮存和包装状态。 |
| How long or cycle | 一个声明的鸡群与报告期，关联后备及产蛋负担。 |
| reference_flow_link | `saleable_shell_eggs` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 生产农场门口非孵化用鲜壳鸡蛋 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 蛋鸡鸡群；非孵化用途；鲜态带壳；实测质量及枚数；等级；破损处理；收集、贮存及包装状态；交付点；报告期 |

广义参考 UUID 保持空白。现有 CPC 02312 候选为消费混合，不能证明鲜壳状态或生产农场门口；CPC 02311 孵化蛋不在本范围。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `saleable_egg_mass` | 参考鸡蛋 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在交付点称量可销售鲜壳蛋并核对收集、分级、废弃及库存质量。 |
| `egg_count_conversion` | 鸡蛋枚数 | 质量 | kg | 按批次保留枚数及实测质量，仅用本批实测或抽样均重换算。 |
| `feed_dry_matter` | 饲料 | 质量 | 湿重 kg 和干物质 kg | 汇总湿料与干料前保留来源专属干物质证据。 |
| `gas_species_basis` | 粪污气体 | 质量 | kg N2O、kg NH3 或氮基准 | 保留分子和氮基准并记录换算。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入生产农场的后备蛋鸡或已分配的场内育成历史，以及饲料、供水、能源、垫料和健康产品。 |
| starting_condition_role | 投入支持受管理的产蛋；鸡蛋进入独立收集、条件性场内分级和包装，最终在农场门口交付。 |
| product_classification_scope | CPC 3.0 02312 非孵化用鲜壳鸡蛋；孵化蛋、其他鸟类的蛋、淘汰鸡及粪污另列。 |
| recursive_input_rule | 外购鸡蛋保留供应商数据集与独立转移，不得重复建立上游产蛋或计作本场产出。 |
| upstream_dataset_requirement | 后备鸡、饲料、供水、能源、垫料、健康产品和包装采用状态及供应商匹配的数据集，前景生成时解析实际产品交换。 |
| disclosure | 声明舍饲路线、鸡群及阶段、后备负担、等级、收蛋损失、条件性场内分级/包装、贮存、淘汰鸡及粪污交付、共享资产、地域与农场门口。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `layer_farm_boundary` | 所有路线 | 纳入管理型产蛋、后备鸡、饲料、供水、舍饲、粪污、直接排放和收蛋直至农场门口；排除外部分级/包装厂及配送。 | `fao-leap-poultry-2016`; `fao-small-poultry-production` |
| `route_delta` | 笼养、舍养、散养等变体 | 声明管理型生物生产母过程及舍饲、户外活动、饲料、垫料/粪污、能源、计算和质量检查的路线差异；相互排斥鸡群分别归一化后汇总。 | `fao-leap-poultry-2016`; `ipcc-2019-livestock-manure` |
| `collection_handover` | 离开产蛋区的鸡蛋 | 从生产向独立收蛋过程计数、称量和交付，在分级或销售前核对完整产物及损失。 | `fao-small-poultry-production` |
| `conditional_grading_packing` | 场内分级或包装 | 分级须有至少两个等级/去向状态并记录各自交付；包装须有场内材料、复用及产品状态记录。外部设施排除。 | `fao-small-poultry-production` |
| `period_shared_assets` | 后备鸡及共享服务 | 将育成、产蛋、鸡群退出、鸡舍、收蛋及条件性设备关联到使用节点和期间，每项负担只计一次。 | `fao-leap-poultry-2016` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `layer_husbandry` | 蛋鸡管理生产 | required | 所有路线。 | 产出新产鸡蛋，记录饲料、粪污、淘汰鸡、阶段和共享资产。 | 每鸡群和期间新产蛋 kg。 |
| `egg_collection` | 农场收蛋 | required | 所有路线。 | 独立收集、计数、称量并记录破损及交付。 | 完整收集蛋 kg。 |
| `farm_grading` | 农场鸡蛋分级与分拣 | conditional | 农场交付前实际分配等级或去向。 | 将收集蛋分为等级、降级品和废弃物。 | 投入及各产出状态 kg。 |
| `farm_packing` | 农场鸡蛋包装与呈现 | conditional | 农场交付前实际包装。 | 用有记录材料和复用保护鸡蛋，排除外部工厂及配送。 | 包装蛋和材料 kg。 |
| `farm_gate_handover` | 农场门口鸡蛋交付 | required | 收蛋及实际启用的场内分级/包装之后的每条路线。 | 核实鲜态带壳可销售状态并转移实测参考鸡蛋。 | 1 kg 可销售带壳鸡蛋。 |

### 过程：蛋鸡管理生产（`layer_husbandry`）

#### 输入

##### 产品流

###### 后备蛋鸡入群（`replacement_pullets`）

按鸡群记录外购后备鸡或场内育成负担，仅分配一次。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：后备蛋鸡（UUID 待核实）
- 流属性/单位：质量 / kg 活体质量; 保留只数
- 数量规则：按实际产蛋服务期分配入群和育成负担。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_flock_events`
- 来源：`fao-leap-poultry-2016`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg 鸡/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 蛋鸡饲料与补充料（`layer_feed`）

按饲料身份、来源和鸡群阶段分别记录。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：蛋鸡饲料与补充料（UUID 待核实）
- 流属性/单位：质量 / kg 湿重与 kg 干物质
- 数量规则：采用保留边界内损失及其生产负担的已核对饲料投入记录，依 inventory_reference_normalization 和 stage_throughput_linkage 计算可归属最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_feed`
- 来源：`fao-leap-poultry-2016`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：15
  - 单位：kg 饲料/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饮用及清洁供水（`supplied_water`）

按用途记录受管理的供水；降雨不自动计入产品投入。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：蛋鸡生产供水
- 流属性/单位：质量 or 体积 / kg or m3
- 数量规则：按用途和期间汇总计量供水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy`
- 来源：`fao-leap-water-livestock-2019`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：100
  - 单位：L/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 设备供电点的电力（`farm_energy_electricity`）

**farm_energy 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

记录照明、通风、供水及粪污处理所需实际能源载体。
分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_water_energy` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy`
- 来源：`fao-leap-poultry-2016`；`fao-agricultural-energy`

###### 供应设备的柴油（`farm_energy_diesel`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：供应设备的柴油
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_water_energy` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy`
- 来源：`fao-leap-poultry-2016`；`fao-agricultural-energy`

###### 过程入口的外购热量（`farm_energy_heat`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：过程入口的外购热量
- 流属性 / 单位：能源 / MJ
- 数量规则：依 `cp_water_energy` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_energy`
- 来源：`fao-leap-poultry-2016`；`fao-agricultural-energy`

##### 废物流

本坐标不预设流；实际交换须有场址证据。

##### 基本流

本坐标不预设流；实际交换须有场址证据。

#### 输出

##### 产品流

###### 新产蛋壳鸡蛋（`laid_shell_eggs`）

产蛋过程向独立收蛋过程交付的内部产物。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：新产蛋壳鸡蛋（UUID 待核实）
- 流属性/单位：质量 / kg 带壳鸡蛋; 保留枚数
- 数量规则：将总产蛋质量与收集蛋及损失核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_eggs_collection`
- 来源：`fao-small-poultry-production`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg 新产蛋/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立转移的活体淘汰鸡（`spent_hens`）

只有实证独立转移才构成联产品。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：活体淘汰蛋鸡（UUID 待核实）
- 流属性/单位：质量 / kg 活体质量; 保留只数
- 数量规则：按鸡群称量活体转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_flock_events`
- 来源：`fao-leap-poultry-2016`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 鸡/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外运禽粪（`exported_manure`）

只有独立转移供他用才构成产品。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：外运禽粪（UUID 待核实）
- 流属性/单位：质量 / kg 湿重与 kg 干物质
- 数量规则：测量外运质量、含水率及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manure_emissions`
- 来源：`fao-leap-nutrients-2018`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 湿粪/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 死亡鸡及弃置粪污（`biological_waste`）

按实际状态与去向记录废物，与产品性粪污分开。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：禽类死亡物与粪污废物（UUID 待核实）
- 流属性/单位：质量 / kg 湿重
- 数量规则：按处理路径汇总废物转移。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manure_emissions`
- 来源：`fao-leap-nutrients-2018`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 湿废物/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 粪污氧化亚氮排入空气（`manure_n2o`）

按粪污路径建模，区分 N2O 与 N2O-N。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：一氧化二氮（排放至空气） `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 / kg N2O
- 数量规则：由粪污氮和路径专属方法计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_manure_emissions`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg N2O/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污氨排入空气（`manure_nh3`）

保留 NH3 物质身份和氮基准换算。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：氨（排放至空气） `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 / kg NH3
- 数量规则：由记录的粪污路径和氮流计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_manure_emissions`
- 来源：`fao-leap-nutrients-2018`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg NH3/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污生物源甲烷排放至空气（`review_layer_husbandry_manure_ch4`）

按粪污系统、气候、停留时间及挥发性固体活动量计算实际大气排放。核对回收、销毁或氧化甲烷；产生量不自动等于排放量。 仅适用于实际运行的 `layer_husbandry` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：生物源甲烷排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg CH4
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`ipcc-2019-livestock-manure`

###### 粪污氮引致的间接氧化亚氮排放至空气（`review_layer_husbandry_indirect_n2o`）

适用时，由有记录的粪污氮挥发/沉降及淋溶/径流路径计算可归属间接 N2O。与直接 N2O 分开，并核对下游或所用背景/影响模型中已包含的氮去向计算。 仅适用于实际运行的 `layer_husbandry` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氧化亚氮排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg N2O
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`ipcc-2019-livestock-manure`

### 过程：农场收蛋（`egg_collection`）

#### 输入

##### 产品流

###### 接收新产鸡蛋（`laid_eggs_received`）

记录来自产蛋节点的内部交付、收集时间、枚数和质量。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：新产蛋壳鸡蛋（UUID 待核实）
- 流属性/单位：质量 / kg 带壳鸡蛋; 保留枚数
- 数量规则：核对接收质量、完整收集蛋及损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eggs_collection`
- 来源：`fao-small-poultry-production`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg 接收蛋/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本坐标不预设流；实际交换须有场址证据。

##### 基本流

本坐标不预设流；实际交换须有场址证据。

#### 输出

##### 产品流

###### 收集的完整蛋壳鸡蛋（`collected_intact_eggs`）

按实际路线交给场内分级、包装或直接销售。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：收集的完整鲜壳鸡蛋（UUID 待核实）
- 流属性/单位：质量 / kg 带壳鸡蛋; 保留枚数
- 数量规则：称量完整收集蛋并核对破损。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eggs_collection`
- 来源：`fao-small-poultry-production`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg 收集蛋/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收蛋阶段废弃蛋（`collection_rejects`）

破损或变质蛋按实际去向作为废物；独立售出的加工蛋不在本行。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：待废物处理的破损或变质蛋（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：记录废弃质量并核对收蛋台账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_eggs_collection`
- 来源：`fao-small-poultry-production`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 废弃物/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

本坐标不预设流；实际交换须有场址证据。

### 过程：农场鸡蛋分级与分拣（`farm_grading`）

#### 输入

##### 产品流

###### 进入场内分级的鸡蛋（`grading_input_eggs`）

仅当生产农场实际分配等级或去向时启用。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：收集的完整鲜壳鸡蛋（UUID 待核实）
- 流属性/单位：质量 / kg 带壳鸡蛋
- 数量规则：记录待分级批次枚数和质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_packing`
- 来源：`fao-small-poultry-production`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg 投入蛋/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本坐标不预设流；实际交换须有场址证据。

##### 基本流

本坐标不预设流；实际交换须有场址证据。

#### 输出

##### 产品流

###### 可销售的分级蛋（`graded_saleable_eggs`）

分别记录各合格等级及交付去向。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：场内分级鲜壳鸡蛋（UUID 待核实）
- 流属性/单位：质量 / kg 带壳鸡蛋
- 数量规则：汇总合格等级质量并与投入核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_grading_packing`
- 来源：`fao-small-poultry-production`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 等级蛋/kg 投入鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立转移的降级蛋（`downgraded_eggs`）

较低等级或供加工鸡蛋有独立状态和去向。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：按市场状态区分的降级鸡蛋（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：测量每种独立转移等级和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_packing`
- 来源：`fao-small-poultry-production`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 降级蛋/kg 投入鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分级废弃蛋（`grading_rejects`）

未出售的破损或变质蛋按处理去向列为废物。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：分级废弃蛋（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：核对投入、等级、降级品、废弃物及库存。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_grading_packing`
- 来源：`fao-small-poultry-production`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 废弃物/kg 投入鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

本坐标不预设流；实际交换须有场址证据。

### 过程：农场鸡蛋包装与呈现（`farm_packing`）

#### 输入

##### 产品流

###### 进入场内包装的鸡蛋（`packing_input_eggs`）

仅在农场实际包装时记录来自收集或分级的完整蛋。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：供农场包装的完整鲜壳鸡蛋（UUID 待核实）
- 流属性/单位：质量 / kg 带壳鸡蛋
- 数量规则：按等级和批次记录投入质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_packing`
- 来源：`fao-small-poultry-production`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg 投入蛋/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 模塑木浆蛋托（`egg_packaging_pulp_tray`）

**egg_packaging 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

记录实际托盘、纸盒、薄膜等材料以及复用与损失。
分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：模塑木浆蛋托
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_grading_packing` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_packing`
- 来源：`fao-small-poultry-production`；`fao-egg-packaging`

###### 瓦楞纸板箱（`egg_packaging_corrugated_box`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：瓦楞纸板箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_grading_packing` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_packing`
- 来源：`fao-small-poultry-production`；`fao-package-identities`

##### 废物流

本坐标不预设流；实际交换须有场址证据。

##### 基本流

本坐标不预设流；实际交换须有场址证据。

#### 输出

##### 产品流

###### 包装后的完整鲜壳鸡蛋（`packed_shell_eggs`）

场内包装节点将受保护的完整鸡蛋交给最终农场门口交付节点。只有实际在农场包装时才启用。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：包装后的鲜壳鸡蛋（UUID 待核实）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 带壳鸡蛋
- 数量规则：在离开包装节点时称量完整包装蛋，保留枚数、等级和包装状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_packing`
- 来源：`fao-small-poultry-production`
- 数量范围：暂定包装产出筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg/kg 参考产品
  - 基准：宽泛初筛值，需由批次实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 包装阶段废弃物（`packing_rejects`）

分别记录破损蛋和损坏包装的实际废物去向。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：按实际身份区分的包装废弃物（UUID 待核实）
- 流属性/单位：质量 / kg
- 数量规则：核对投入蛋、材料、包装产物、废弃物及复用库存。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_grading_packing`
- 来源：`fao-small-poultry-production`
- 数量范围：暂定、可替换的筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 废弃物/kg 已包装鸡蛋
  - 基准：宽泛初筛值，需以经审查的路线数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

本坐标不预设流；实际交换须有场址证据。

### 过程：农场门口鸡蛋交付（`farm_gate_handover`）

#### 输入

##### 产品流

###### 交付前接收的完整鸡蛋（`handover_input_eggs`）

根据实际路线接收来自收蛋、场内分级或场内包装的完整鸡蛋，保留等级及包装状态。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

- 选定流：供农场门口转移的完整鲜壳鸡蛋（UUID 待核实）
- 流属性/单位：质量 / kg 带壳；保留枚数
- 数量规则：按来源节点、等级及包装状态记录完整蛋的投入枚数和质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_farm_gate_handover`
- 来源：`fao-small-poultry-production`
- 数量范围：暂定交付前投入筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg 投入/kg 可销售鸡蛋
  - 基准：宽泛初筛值，需以批次实测值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本坐标不预设流；实际交换须有场址证据。

##### 基本流

本坐标不预设流；实际交换须有场址证据。

#### 输出

##### 产品流

###### 农场门口可销售鲜壳鸡蛋（`saleable_shell_eggs`）

实际路线的最终产物；未包装时不虚构包装过程。

分母与范围要求：每 kg 农场门口可销售鲜壳鸡蛋

参考产出的原始记录：在交付点称量可销售蛋，保留枚数、等级和包装状态。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

- 选定流： 生产农场门口非孵化用鲜壳鸡蛋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_farm_gate_handover`
- 来源：`fao-small-poultry-production`
- 数量范围：参考归一化恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考产品
  - 基准：可销售蛋壳质量除以自身
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-leap-poultry-2016`


##### 废物流

本坐标不预设流；实际交换须有场址证据。

##### 基本流

本坐标不预设流；实际交换须有场址证据。

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `egg_output_precedence` | 壳蛋、淘汰鸡及外运粪污 | 先将可分离活动直接归属；独立交付产品的剩余共同负担优先用有证据的物理因果关系，否则用同期间农场门口价值进行经济分配，公开份额及敏感性；废物和损失不取产品份额。 | `fao-leap-poultry-2016`; `fao-leap-nutrients-2018` |
| `replacement_period` | 育成与产蛋鸡群 | 将后备负担分摊至实际产蛋服务及产出，核对期初期末鸡群，避免外购后备鸡和场内育成重复。 | `fao-leap-poultry-2016` |
| `shared_asset` | 鸡舍、收蛋和条件设备 | 按计量使用、运行时间或吞吐量分配给使用节点、鸡群和期间，记录驱动量和服务期，仅计一次。 | `fao-leap-poultry-2016` |
| `grade_loss` | 分级与废弃蛋 | 保留独立等级及去向交付；保留等级元数据后才汇总同类别可销售蛋，供加工产品和废物单列。 | `fao-small-poultry-production` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock_events` | `layer_husbandry` | 后备与淘汰鸡 | 鸡群及交付台账 | 鸡群、路线、入出日期、只数、质量、用途、去向 | 台账和校准批次秤；原始汇总要求：将事件分配至产蛋服务及可销售蛋质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 只；kg | 每次出入 | 覆盖完整鸡群 | 生产农场 | 每参考流 | 日期台账及秤校准；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed` | `layer_husbandry` | 饲料 | 交付与库存 | 饲料来源、湿重、干物质、阶段、拒食、库存 | 发票、料仓和饲喂台账；原始汇总要求： 按 calc_feed_supply_and_intake 区分承担生产负担的饲料投入、实际采食量及损失；保留原生库存及期间记录，可归属量对合格最终产出归一化一次。 | 湿重 kg；干重 kg | 每次交付及每月 | 完整鸡群 | 生产农场 | 每参考流 | 发票及库存核对；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_water_energy` | `layer_husbandry` | 供水与能源 | 仪表与发票 | 来源、用途、载体、数量、单位、期间、共享表驱动量 | 仪表及采购记录；原始汇总要求：按用途分配，分开保留载体。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | m3；kWh；MJ | 每月 | 完整鸡群 | 生产农场 | 每参考流 | 仪表及发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure_emissions` | `layer_husbandry` | 粪污、死亡及气体 | 粪污与氮台账 | 氮投入、粪污质量及含水率、贮存、处理、转移、死亡、路径、因子 | 农场台账、取样及路径方法；原始汇总要求：路径计算并归一化转移量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 湿重 kg；干重 kg；kg N；kg 气体 | 每月及每次转移 | 完整鸡群 | 生产农场 | 每参考流 | 取样、转移单及方法版本；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_eggs_collection` | `egg_collection` | 鸡蛋及损失 | 收蛋与交付台账 | 日期、鸡群、枚数、新产/收集/可销售质量、破损、贮存 | 每日计数、校准批次秤及交付票据；原始汇总要求：核对各活动节点并归一化至 1 kg 可销售蛋。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 枚；kg | 每次收集/交付 | 完整报告期 | 生产农场 | 每参考流 | 计数表、秤及废弃记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_farm_gate_handover` | `farm_gate_handover` | 最终参考鸡蛋 | 农场转移台账 | 来源节点、鸡群、批次、等级、鲜态带壳状态、枚数、质量、包装、贮存、日期及接收方 | 校准批次秤及转移单；原始汇总要求：按批次汇总实测可销售质量并与上游启用节点核对。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 枚；kg | 每次农场门口交付 | 完整报告期 | 生产农场门口 | 每参考流 | 签收单、秤及批次追踪；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_grading_packing` | `farm_grading`; `farm_packing` | 条件等级及包装 | 批次与材料台账 | 投入枚数/质量、等级、去向、废弃物、包装类型/质量/枚数/复用 | 分拣和材料领退记录；原始汇总要求：核对各等级与包装库存。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 枚；kg；包装件 | 每启用批次 | 节点运行期间 | 生产农场 | 每参考流 | 批次追踪、票据及废弃记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_pathway_emissions` | `layer_husbandry` | 路径专属气体及粪污氮/碳 | 动物、饲料、粪污、田间及方法台账 | 物种/类别；动物日；采食/干物质/消化率；挥发性固体；粪污氮/铵态氮；系统份额；气候；贮存时间；肥料氮；放牧；挥发/淋溶；甲烷回收；因子来源/单位；最终合格产出 ；收集粪污湿质量；干物质；去向| 按节点及期间采集一手活动数据，证明参数适用性，保留各路径计算表及链接的处理/牧地数据集  保留原始总量，可归属数量仅对实测最终合格参考产出归一化一次。| animal-day；kg DM；kg VS；kg N；kg CH4；kg N2O；kg NH3 | 各运行期间及管理变化时 | 完整所代表群体与服务期间 | 仅实际运行节点 | 每参考流 | 计量/分析记录、氮级联、方法与因子证据、防重复台账 |
| `cp_feed_supply_and_intake` | `layer_husbandry` | 饲料投入、采食及损失 | 库存、收货、发料及损失台账 | 饲料身份/来源；群体/阶段；期间；期初/期末库存；收货；自产供给；未用退回/转出；未食用/变质质量及去向；原物/干物质；实际采食量；负担归属；合格最终产出 | 按 calc_feed_supply_and_intake 核对匹配的库存、称重、日粮/采草估算及处置记录。保留原始总量及阶段分母，生产与处理负担各归属一次，再对合格最终产出归一化。 | kg as-fed; kg DM | 每次发料及期间结算 | 完整所代表群体/期间 | 实际运行饲喂节点 | 每参考流 | 库存及供应商记录；水分证据；损失及无重复核算核对 |
| `cp_manure_n2o_coverage` | `layer_husbandry` | 粪污/土壤直接及间接 N2O 覆盖 | 分路径氮台账及方法计算表 | 物种/类别；期间；排泄氮；阶段库存/转移；系统份额；挥发 NH3-N/NOx-N；淋溶/径流氮；施用/放牧氮；因子来源、单位及适用性；直接/间接分项；接受介质；已链接过程及归属卡；合格最终产出 | 按 calc_manure_n2o_coverage 保留原始阶段氮及分项计算，并匹配实际作业与现有粪污协议。记录缺证据或不适用路径及覆盖边界，可归属 N2O 归一化一次。 | kg N; kg N2O | 每个报告期间及管理变化 | 完整所代表管理期间 | 实际运行及明确链接节点 | 每参考流 | 氮平衡、因子单位/适用性、分项到卡片及无重复核算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `egg_balance` | 各启用节点 | 投入壳蛋质量等于合格产出、降级产出、废弃物及库存变化之和，处于声明不确定度内。 | 批次质量、等级、废弃物及库存 | 核对后的可销售鸡蛋 kg | `fao-small-poultry-production` |
| `normalize_reference` | 清单 | 鸡群/期间数量除以在生产农场门口实际交付的可销售带壳蛋 kg。 | 期间总量及可销售质量 | 每 1 kg 参考量 | `fao-leap-poultry-2016` |
| `manure_gases` | 粪污路径 | 将路径专属官方方法用于采集的粪污氮，区分 N2O/N2O-N 和 NH3/NH3-N。 | 鸡群、氮、路径及因子 | 按物质分列气体质量 | `ipcc-2019-livestock-manure`; `fao-leap-nutrients-2018` |
| `period_assets` | 后备及共享资产 | 按有证据的服务驱动量跨节点和期间分配实际育成及资产负担，分配总量与来源总量相等。 | 鸡群事件、服务期、节点使用 | 已分配负担 | `fao-leap-poultry-2016` |
| `calc_pathway_emissions` | `layer_husbandry` | 采用物种和管理方式相容的方法，保留分路径总量。N2O-N 乘 44/28 转为 N2O，NH3-N 乘 17/14 转为 NH3，且恰换算一次；已为分子质量者不得重算。依据有记录的可用碳/甲烷潜力平衡检查甲烷，并按各阶段可用氮核对氮损失。已挥发氮引致的间接形成是下游转化，不是源阶段第二次氮损失。归属及归一化只做一次，不重复计入链接处理或去向模型中的排放。  物理筛查采用分配前、同一原始期间的数量：CH4 质量 × 12/16 不得超过所代表路径的可用碳；源阶段 NH3 质量 × 14/17、直接 N2O 质量 × 28/44 与其他源阶段氮损失之和，在核对库存及转移后不得超过该阶段可用氮。各项间接 N2O-N 计算以有记录的挥发氮或淋溶氮前体为上限，不再从源台账扣除该下游转化。这些是守恒检查，不是排放因子或经验单位产品区间。| `cp_pathway_emissions` | 每最终参考流的指定化合物 kg | `ipcc-2019-livestock-manure`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `layer_feed` | 所代表作业使用的饲料投入 = 期初饲料库存 + 收货 + 进入本作业的自产饲料 - 期末饲料库存 - 有记录的未用退回或转出。该投入保留边界内变质、拒食及被丢弃的剩余料。实际采食量 = 该投入 - 实测未食用/丢弃损失，并匹配水分/干物质与期间；采食量仅用于营养及代谢计算。期初库存承接原有负担，不是再次采购。追溯未用退回或转出的物料及负担去向，不自动给予替代抵扣。同一饲料的生产负担由采购饲料数据集或已建模自产作物/采集节点承担一次，不得两者并计。实际废料处理及粪污贡献计一次，不再次添加饲料生产负担。 | `cp_feed_supply_and_intake` | 同一原物/干物质基准下分开的饲料投入、采食及损失数量 | `fao-feed-loss-accounting-2018` |
| `calc_manure_n2o_coverage` | `manure_n2o`; `review_layer_husbandry_indirect_n2o` | 按真实粪污阶段，采用有记录的物种/系统活动量及因子基准，分别计算直接 N2O、挥发/沉降引致间接 N2O，以及适用的淋溶/径流引致间接 N2O。N2O-N 乘 44/28 恰换算一次为分子态 N2O；已为分子质量的不得再次换算。保留分项计算表。现有 N2O 卡同时覆盖直接与间接排放时，填报其不重叠总和；已有直接/间接独立卡时，每个分项只归入对应卡，不再另报总和。放牧沉积及田间施用采用管理土壤方法，不套用粪污贮存因子。明确前景与已链接处理/牧地数据的核算责任；粪污转出不消除此前排放，已覆盖的下游排放不得重复。氮级联核对库存、转移及此前氮损失；间接 N2O 是前体的下游转化，不再次视为源阶段氮损失。可归属分子质量对合格参考产出归一化一次。记录不适用依据；路径数据缺失不等于零。 | `cp_manure_n2o_coverage` | 按路径及现有归属卡分开的 kg 分子态 N2O | `ipcc-2019-livestock-manure`; `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `reference_identity` | 参考鸡蛋 | 证明鲜态带壳、非孵化用途和生产农场门口；消费混合或孵化蛋不可替代。 | 产品、批次及交付记录 |
| `coverage` | 所有节点 | 声明完整或部分鸡群期间，分级/包装仅由真实场内活动启用。 | 鸡群和批次日期 |
| `egg_mass` | 产出与损失 | 跨生产、收集、条件节点及交付核对枚数和实测质量。 | 秤、台账及废弃记录 |
| `route_period` | 舍饲、粪污及资产 | 汇总前保留路线路径、阶段连接和分配驱动量。 | 饲养、粪污及服务记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `reference_gate` | 可销售参考鸡蛋 | 要求鲜态带壳非孵化用鸡蛋、实测 1 kg 可销售质量及生产农场门口，消费混合不可固定为农场参考流。 | `fao-small-poultry-production` |
| `node_gate` | 过程图 | 必须有管理型产蛋和独立收蛋；场内分级/包装仅由批次证据启用，排除外部工厂。 | `fao-small-poultry-production` |
| `output_gate` | 等级、淘汰鸡及粪污 | 核查各预期联产品独立交付，不得将废物当产品；核对各启用节点并保留去向。 | `fao-leap-poultry-2016`; `fao-small-poultry-production` |
| `period_gate` | 后备及共享资产 | 核查鸡群/阶段、育成处理、资产使用者及跨期间负担守恒，防止重复计算。 | `fao-leap-poultry-2016` |
| `exchange_gate` | 具体过程交换 | 构建下游 TIDAS 过程前须有已核实具体流 UUID、属性及单位；候选 PCR 缺口明确保留。 | `fao-leap-poultry-2016` |
| `v_pathway_emission_coverage` | `layer_husbandry` | 要求路径覆盖台账，包含生物学适用时的肠道 CH4、粪污 CH4、直接/间接 N2O、NH3 及相关田间排放。每条路径须有实测/计算量、覆盖匹配的明确链接过程，或有依据的不适用结论；缺数据不得记零。捕获前的野生生活不纳入受管理饲养，实际受管理留置须另行评估，并保留物种专属证据。 | `ipcc-2019-livestock-manure`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | 实际运行节点及链接服务 | 适用时记录现场燃料燃烧及制冷剂泄漏的核算责任：须为量化前景排放，或明确覆盖它们的具名链接过程，不能仅凭燃料供应或电力生产投入视为已包含。特殊类群生物及残余物排放须依物种/路线证据评估，不套通用畜牧因子。标明尚未落实的路径，不宣称清单完整；记录有依据的不存在结论并防止上/下游重复核算。 | |
| `v_feed_supply_intake_separation` | 全部饲料投入 | 拒绝扣除边界内拒食、变质或丢弃剩余料且未保留其生产负担的上游饲料清单。按 calc_feed_supply_and_intake 核对投入、采食、库存、转移及损失去向。不得把采食量当作饲料投入，不得假设自产饲料零负担或自动给予替代产品抵扣。 | `fao-feed-loss-accounting-2018` |
| `v_manure_n2o_coverage` | 适用粪污及管理土壤氮路径 | 须明确直接及间接路径覆盖、阶段氮平衡及分子质量换算。按 calc_manure_n2o_coverage，将各分项归入现有 N2O 卡或明确覆盖的已链接过程一次。间接路径证据缺失时不得宣称完整；不得默认零值或把汇总值与分项重复并计。 | `ipcc-2019-livestock-manure`; `review-ipcc-soils-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门口非孵化用鲜壳鸡蛋的前景数据包。 |
| downstream_use | 完成审查及具体交换解析后可作 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 已声明的蛋鸡路线、实际收蛋、条件性场内分级/包装及实测可销售带壳质量。 |
| excluded_use | 孵化蛋、其他鸟类的蛋、无壳/加工蛋、外部分级/包装及农场后配送。 |
| required_metadata | 鸡群、舍饲路线、期间、等级/枚数/质量、贮存/包装、粪污路径、联产品、分配、共享资产及流身份。 |
| required_quality_disclosure | 记录覆盖、鸡蛋及氮平衡、暂定范围、路线/期间分配、未解析身份及不确定度。 |
| update_trigger | 产品边界、农场路线、条件节点、方法、分配基准或已核实流改变。 |

## 11. 数据来源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `fao-leap-poultry-2016` | official_guidance | FAO LEAP, Greenhouse gas emissions and fossil energy use from poultry supply chains (2016), https://openknowledge.fao.org/handle/20.500.14283/i6421en | 产蛋路线、饲料、育成、归属及边界。 |
| `ipcc-2019-livestock-manure` | official_guidance | IPCC, 2019 Refinement, Volume 4 Chapter 10, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 粪污路径气体。 |
| `fao-leap-nutrients-2018` | official_guidance | FAO LEAP, Nutrient flows and associated environmental impacts in livestock supply chains (2018), https://openknowledge.fao.org/handle/20.500.14283/ca1328en | 粪污及氮记录。 |
| `fao-leap-water-livestock-2019` | official_guidance | FAO LEAP, Water use in livestock production systems and supply chains (2019), https://www.fao.org/partnerships/leap/resources/publications/ | 供水区分。 |
| `fao-small-poultry-production` | extension_guidance | FAO, Small-scale poultry production, https://www.fao.org/4/y5169e/y5169e0a.htm | 农场收蛋及条件性分级/包装门槛。 |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | 管理土壤直接及间接氮路径与边界核对 |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 氮流方法；采用参数前核实实际物种、管理方式及地域适用性 |
| `fao-feed-loss-accounting-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains, section 11.2.2](https://www.fao.org/4/i8686en/I8686EN.pdf) | 饲料投入、采食及废料负担的区分，不提供动物参数。将该核算原则用于声明类群是本 PCR 的方法学选择；不移植猪的日粮或排放因子。 |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-egg-packaging` | official_guidance | FAO Egg packaging, transport and storage, https://www.fao.org/4/Y4628E/y4628e05.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
