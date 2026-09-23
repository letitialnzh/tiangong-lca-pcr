---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.ginger-raw
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 生姜，鲜

## 1. 范围与适用性

本 PCR 覆盖鲜、未加工生姜根茎（*Zingiber officinale*）至农场门口交接的前景生产，包括雨养或灌溉田间生产、种姜准备、起挖、田间处理、分选分级，以及仅在农场门口交接前实施的清洗。去皮、刮皮、制干、干燥、切片、粉碎、保藏、提取、工业加工、农场后储存运输及消费包装均排除。干姜折干率不得用于表示本参考产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.ginger-raw |
| classification_refs | CPC 3.0 01657, Ginger, raw |
| covered_products | 去除松散土壤、可选择清洗并完成表面沥水后在农场门口交接的完整鲜生姜根茎 |
| excluded_products | 作为种植材料销售的种姜；去皮、制干、干燥、切片、粉碎、保藏、提取或其他加工姜 |
| representative_product | 可销售的完整 *Zingiber officinale* 鲜根茎 |
| production_route | 种姜繁殖的管理生产、起挖、条件性初级整理及分选分级 |
| market_state | 农场门口鲜、未加工、完整且坚实；声明清洗状态和商业等级 |

管理生产父活动为 `field_production`。雨养与灌溉路线的差异体现在灌溉和泵送记录；人工与机械起挖的差异体现在能源记录；清洗与未清洗路线的差异体现在水、能源和废水记录。这些路线可存在于不同批次，但每批次须选择实际路线，互斥路线负荷不得合并。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门口交接的合格鲜生姜根茎 |
| How much | 1 kg |
| How well | 完整、健全、坚实且可销售；基本无可见土壤与异物；声明清洗状态与等级 |
| How long or cycle | 一个单一期间的作物周期及其关联收获、整理和分级批次；无储存 |
| reference_flow_link | `accepted_fresh_ginger` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Ginger, raw `e30e5bf0-243f-4388-a2a0-8fdee391b4a9` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或品种；地理位置；作物日期；雨养或灌溉；起挖技术；清洗或未清洗；商业等级；鲜未加工状态；农场门口交接 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格鲜姜 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 去除松散土壤后计量净鲜质量；清洗时须在表面水沥除后计量。 |
| `area_to_reference` | 田间记录 | Mass | kg/kg 参考产品 | 作物周期数量除以同一面积和周期的合格品质量。 |
| `nutrient_product_mass` | 养分供应 | Mass | kg 产品及 kg 养分 | 分别采集实际产品及成分；养分属性不得重复生成产品交换。 |
| `water_volume` | 灌溉与清洗 | Volume | m3 | 计量供水体积，或记录质量转体积所用的密度假设。 |
| `energy_conversion` | 燃料与电力 | Energy | MJ | 保留原始载体记录并记录换算因子。 |

## 5. 系统边界

前景边界始于种姜及管理投入进入所表示的作物周期，止于合格鲜姜在农场门口交接。包括准备、田间管理、起挖、条件性清洗和表面沥水及分级。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 可供准备或种植的种姜，声明来源、自留比例、健康状态、适用时的贮藏损失及上游覆盖 |
| starting_condition_role | 一个管理生姜作物周期的生物繁殖投入 |
| product_classification_scope | 本 PCR 覆盖的鲜生姜根茎 |
| recursive_input_rule | 自留作种的生姜仅作为投入记录一次，并包含前一周期上游覆盖或披露截断；不得计为本周期合格产出 |
| upstream_dataset_requirement | 种姜、养分产品、水、能源、植保及服务需有兼容上游数据集或披露未解决覆盖 |
| disclosure | 声明品种、地点、面积、日期、种姜来源、生产模式、灌溉、起挖技术、清洗状态、分级方案和拒收去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_raw_fresh` | 产品状态 | 参考产品保持鲜且未加工；排除去皮、制干、干燥、切片、粉碎、保藏及提取。 | `codex-cxs-218-1999`; `fao-ginger-postharvest-compendium` |
| `boundary_seed` | 种姜 | 纳入本周期种姜质量及其准备处理。 | `aicrps-ginger-package`; `icar-ccari-ginger` |
| `boundary_field` | 管理生产 | 纳入管理投入、田间能源、直接排放、残余物与损失。 | `aicrps-ginger-package`; `ipcc-2019-managed-soils` |
| `boundary_harvest` | 起挖 | 起挖形成具有可测损失的收获批次，须独立建模。 | `aicrps-ginger-package` |
| `boundary_conditioning` | 初级整理 | 仅在农场门口前实施时纳入清洗，并包括投入、产出、水、能源和废水。 | `icar-ccari-ginger`; `codex-cxs-218-1999` |
| `boundary_grading` | 分级 | 枚举合格、降级和拒收状态及每项交接。 | `codex-cxs-218-1999` |
| `boundary_route_delta` | 替代路线 | 每批次仅采用实际发生的雨养/灌溉、人工/机械、清洗/未清洗路线。 | `aicrps-ginger-package`; `icar-ccari-ginger` |
| `boundary_post_gate` | 下游 | 本参考结果排除农场后储存、运输、包装及加工。 | `codex-cxs-218-1999` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_production` | 种姜准备与田间管理生产 | `required` | 始终 | 管理生物生产父活动，含雨养/灌溉替代生产路线差异；按作物周期索引 | 所表示田块与周期的合格品质量 |
| `harvest_lifting` | 收获与起挖 | `required` | 始终 | 独立收获，含人工/机械替代技术路线差异；按收获批次索引 | 起挖原始根茎质量 |
| `primary_conditioning` | 初级整理 | `conditional` | 农场门口前清洗、复洗或动力去土 | 原始至整理后接口；按批次索引 | 整理后根茎质量 |
| `sorting_grading` | 分选与分级 | `required` | 始终 | 合格、降级和拒收状态；按批次索引 | 进入的整理后质量 |

### 过程：种姜准备与田间管理生产（`field_production`）

管理对象是在已声明田块和作物周期内由种姜繁殖的生姜作物。投入分为繁殖材料、养分供应、水、植保或能源。交接状态为可收获的土中根茎；残余物与损失单列。

#### 输入

##### 产品流

###### 种植用种姜根茎（`seed_rhizomes`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：生姜种用根茎
- 流属性/单位：Mass / kg
- 数量规则：按来源汇总种姜种植质量并除以合格品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_cycle_inputs`
- 来源：`aicrps-ginger-package`; `csir-traditional-ginger-2009`
- 数量范围：有来源支持的种姜投入强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：0.0375
  - 上限：0.333
  - 单位：kg/kg accepted fresh ginger
  - 基准：1.5-2.0 t 种姜/ha 除以报告的 6-40 t/ha 鲜姜产量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`aicrps-ginger-package`; `icar-ccari-ginger`; `csir-traditional-ginger-2009`

###### 合并的农业养分供应产品（`nutrient_supply_products`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：农业养分供应产品
- 流属性/单位：Mass / kg
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：汇总施用的全部矿质肥料、有机肥、厩肥、堆肥、绿叶覆盖物及含养分改良剂，养分属性不得重复计量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_products`
- 来源：`aicrps-ginger-package`; `icar-ccari-ginger`
- 数量范围：区域栽培规程质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.38
  - 上限：10.1
  - 单位：kg applied products/kg accepted fresh ginger
  - 基准：15-30 t/ha 厩肥、最高 30 t/ha 绿叶覆盖物及 6-40 t/ha 鲜姜产量；以实际产品记录为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`aicrps-ginger-package`; `icar-ccari-ginger`; `csir-traditional-ginger-2009`

###### 田间灌溉供水（`irrigation_water`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：灌溉水
- 流属性/单位：Volume / m3
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：计量或计算灌溉供水量；雨养批次记录为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`aicrps-ginger-package`
- 数量范围：灌溉路线用水筛查范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：0
  - 上限：1
  - 单位：m3/kg accepted fresh ginger
  - 基准：雨养为零；上限依据 90-100 ha-cm 用水量及 10-15 t/ha 产量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`aicrps-ginger-package`

###### 植保与种姜处理产品（`crop_protection_products`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：实际配制的植保产品
- 流属性/单位：Mass / kg
- 数量规则：汇总种姜和田间施用的制剂产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_cycle_inputs`
- 来源：`aicrps-ginger-package`; `icar-ccari-ginger`
- 数量范围：暂定制剂产品筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg/kg accepted fresh ginger
  - 基准：宽泛且可替换的筛查范围；未施用时为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：

###### 田间能源载体与电力（`field_energy`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：田间能源载体与电力
- 流属性/单位：Energy / MJ
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：将整地、种植、灌溉及田间管理的实际能源载体换算为 MJ，同时保留各交换
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定田间能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：MJ/kg accepted fresh ginger
  - 基准：从人工雨养到动力灌溉生产的宽泛可替换筛查范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：

#### 输出

##### 产品流

###### 可收获的土中姜根茎（`harvestable_rhizomes`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：可收获的土中姜根茎
- 流属性/单位：Mass / kg
- 数量规则：估算或核算起挖前鲜根茎质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_yield_reconciliation`
- 来源：`mass-balance-identity`
- 数量范围：作物至合格品质量平衡筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.5
  - 单位：kg/kg accepted fresh ginger
  - 基准：合格品加实测收获、整理和分级损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 田间残余物、病株与未回收根茎（`field_residues_losses`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：田间作物残余物及生物损失
- 流属性/单位：Mass / kg
- 数量规则：按残余物类别和去向测量或抽样估算鲜质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residue_reject_routes`
- 来源：
- 数量范围：暂定田间残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg fresh residue/kg accepted fresh ginger
  - 基准：残余物及收获前损失的宽泛可替换筛查范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：

##### 基本流

###### 管理土壤直接氧化亚氮氮排放（`direct_n2o_n`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：排放至空气的氧化亚氮氮
- 流属性/单位：Mass / kg N2O-N
- 数量规则：适用氮投入乘以选定的土壤直接排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 氮投入
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_products`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：IPCC 汇总土壤直接排放因子不确定范围
  - 范围角色：不确定范围（`uncertainty_range`）
  - 下限：0.002
  - 上限：0.018
  - 单位：kg N2O-N/kg N input
  - 基准：适用的合成肥、有机改良剂及作物残余物氮投入
  - 基准类型：氮投入（`n_input`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ipcc-2019-managed-soils`

### 过程：收获与起挖（`harvest_lifting`）

该独立节点从管理田块中起挖根茎，交接起挖原始批次，并将目标产出与土壤、茎叶、根、损伤及未回收损失区分。

#### 输入

##### 产品流

###### 接收自田间生产的可收获根茎（`harvest_input_rhizomes`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：可收获的土中姜根茎
- 流属性/单位：Mass / kg
- 数量规则：等于匹配的田间生产交接量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_yield_reconciliation`
- 来源：`mass-balance-identity`
- 数量范围：关联的进入根茎质量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.5
  - 单位：kg/kg accepted fresh ginger
  - 基准：与田间交接量严格相等
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 收获能源载体与电力（`harvest_energy`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：收获能源载体与电力
- 流属性/单位：Energy / MJ
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：记录起挖与搬运使用的载体；完全人工起挖可为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 起挖原始根茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定起挖能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：MJ/kg raw lifted rhizomes
  - 基准：人工至动力起挖的宽泛可替换筛查范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：

#### 输出

##### 产品流

###### 起挖后的原始姜根茎（`raw_lifted_rhizomes`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：起挖后的鲜姜根茎
- 流属性/单位：Mass / kg
- 数量规则：整理或分级前称量收获批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lots`
- 来源：`mass-balance-identity`
- 数量范围：起挖品至合格品质量平衡筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.4
  - 单位：kg/kg accepted fresh ginger
  - 基准：合格品加实测整理与分级损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 收获残余物与起挖损失（`harvest_residues_losses`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：根、茎叶、损伤根茎与未回收收获损失
- 流属性/单位：Mass / kg
- 数量规则：测量或抽样各残余物类别并记录去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residue_reject_routes`
- 来源：
- 数量范围：暂定收获损失筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg/kg accepted fresh ginger
  - 基准：根、茎叶、损伤及未回收根茎的宽泛可替换筛查范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：

### 过程：初级整理（`primary_conditioning`）

原始状态为带根或附着土壤的刚起挖根茎。整理后状态为去除松散土壤、可选择清洗并完成表面沥水的未去皮鲜根茎。未清洗批次的清洗投入为零。

#### 输入

##### 产品流

###### 进入初级整理的起挖根茎（`conditioning_input_rhizomes`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：起挖后的鲜姜根茎
- 流属性/单位：Mass / kg
- 数量规则：等于同批次匹配的收获输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_harvest_lots`
- 来源：`mass-balance-identity`
- 数量范围：关联原始批次质量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.4
  - 单位：kg/kg accepted fresh ginger
  - 基准：与收获交接量严格相等
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 清洗供水（`washing_water`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：生姜清洗工艺水
- 流属性/单位：Volume / m3
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：计量清洗与复洗用水；未清洗路线为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 整理后鲜根茎
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源：`icar-ccari-ginger`
- 数量范围：暂定清洗用水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：m3/kg prepared fresh rhizomes
  - 基准：未清洗批次为零；清洗用水的宽泛可替换筛查范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：

###### 整理能源载体与电力（`conditioning_energy`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：整理能源载体与电力
- 流属性/单位：Energy / MJ
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：记录泵、清洗机及搬运能源；无动力未清洗处理为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 整理后鲜根茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定整理能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：MJ/kg prepared fresh rhizomes
  - 基准：无动力处理至动力清洗的宽泛可替换筛查范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：

#### 输出

##### 产品流

###### 供分级的整理后鲜根茎（`prepared_rhizomes`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：去除松散土壤的未去皮鲜姜根茎
- 流属性/单位：Mass / kg
- 数量规则：去土后称量；清洗时须在表面沥水后称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源：`codex-cxs-218-1999`; `mass-balance-identity`
- 数量范围：整理品至合格品质量平衡筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.3
  - 单位：kg/kg accepted fresh ginger
  - 基准：合格品加实测降级品与拒收物质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 清洗废水与分离土壤（`conditioning_effluent`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：含分离土壤的生姜清洗废水
- 流属性/单位：Volume / m3
- 数量规则：计量废水量；将分离固体质量与去向保留为批次属性
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 整理后鲜根茎
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch`
- 来源：`mass-balance-identity`
- 数量范围：清洗废水平衡筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：m3/kg prepared fresh rhizomes
  - 基准：未清洗批次为零；无记录新增水时不得高于供水量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

### 过程：分选与分级（`sorting_grading`）

整理后根茎分为合格、降级但可销售及拒收状态。每一状态均有去向。仅因污物而不合格的材料可返回一个明确整理批次一次，且不得重复计量。

#### 输入

##### 产品流

###### 进入分级的整理后根茎（`grading_input_rhizomes`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：整理后鲜姜根茎
- 流属性/单位：Mass / kg
- 数量规则：等于匹配的整理后输出；有记录的未整理路线可等于起挖输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_grading_batch`
- 来源：`mass-balance-identity`
- 数量范围：关联分级投入质量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.3
  - 单位：kg/kg accepted fresh ginger
  - 基准：与前一交接批次严格关联
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 分级能源载体与电力（`grading_energy`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：分级能源载体与电力
- 流属性/单位：Energy / MJ
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：记录输送、分级设备及搬运能源；人工分级为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 分级投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定分级能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：MJ/kg grading input
  - 基准：人工至动力分级的宽泛可替换筛查范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：

#### 输出

##### 产品流

###### 农场门口合格鲜姜（`accepted_fresh_ginger`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：Ginger, raw `e30e5bf0-243f-4388-a2a0-8fdee391b4a9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：固定（`fixed`）
- 数量规则：恰为 1 kg 合格参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`
- 数量范围：精确参考输出
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg accepted fresh ginger
  - 基准：精确参考流恒等关系
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 降级但可销售的鲜姜（`downgraded_fresh_ginger`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：降级但可销售的鲜姜
- 流属性/单位：Mass / kg
- 数量规则：称量各降级等级及去向；不得计入合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_batch`
- 来源：`codex-cxs-218-1999`
- 数量范围：暂定降级品筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.25
  - 单位：kg/kg accepted fresh ginger
  - 基准：宽泛可替换筛查范围；以实际等级质量为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：

##### 废物流

###### 拒收姜与分级残余物（`grading_rejects`）

该流在本过程边界内按所述数量规则记录，并与关联批次及去向核对。

- 选定流：拒收姜与分级残余物
- 流属性/单位：Mass / kg
- 数量规则：称量各拒收状态及最终去向；复洗返回物在最终处置前不计为废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格鲜姜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_reject_routes`
- 来源：`codex-cxs-218-1999`
- 数量范围：暂定分级拒收物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.25
  - 单位：kg/kg accepted fresh ginger
  - 基准：完成已声明复洗后的宽泛可替换筛查范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 前景系统 | 优先按田块、作物周期、收获批次及处理批次细分并直接测量。 | `mass-balance-identity` |
| `allocation_cycle` | 田间投入 | 归一化前将全部投入归属至所表示作物周期；共享记录按实测面积时间或其他因果驱动量分配。 | `mass-balance-identity` |
| `allocation_run` | 运行与换批 | 将投入、产出、清洗及换批关联至一个运行或期间；共享事件仅分配一次，防止下游重复计入。 | `mass-balance-identity` |
| `allocation_routes` | 替代路线 | 路线差异仅适用于实际采用该路线的批次；不得合并互斥路线负荷。 | `mass-balance-identity` |
| `allocation_downgrade` | 降级产品 | 可销售降级品作为独立产品；细分后声明物理或经济分配并报告敏感性。 | `mass-balance-identity` |
| `allocation_reject` | 拒收与返工 | 复洗材料保留原有负荷，仅增加复洗负荷；合格品排除未解决拒收物，最终处理遵循声明路线。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_cycle_inputs` | `field_production` | 种姜与植保 | 发票、库存及田间日志 | 周期、田块、产品、种姜来源、制剂、数量、日期、面积 | 核对采购、库存及施用 | 原单位及 kg | 每次事件 | 完整作物周期 | 每田块 | 按实际产品与周期汇总 | 发票、秤及库存核对 |
| `cp_nutrient_products` | `field_production` | 全部养分产品 | 发票、成分及施用日志 | 产品、质量、成分、干物质、日期、面积 | 分别采集每一实际产品 | kg 产品及养分 | 每次施用 | 完整周期 | 每田块 | 产品仅汇总一次；由成分计算养分 | 发票、标签/分析及日志 |
| `cp_irrigation_records` | `field_production` | 灌溉 | 水表或流量时间日志 | 事件、水表、流量、时长、水源、面积 | 水表或流量×时间 | m3 | 每次事件 | 完整周期 | 每灌溉田块 | 汇总事件；雨养明确为零 | 校准或流量试验 |
| `cp_energy_records` | 所有过程 | 能源 | 发票、仪表或设备日志 | 过程、周期/批次、载体、数量、单位、因子、运行时间 | 按载体记录用量 | 原单位、kWh、MJ | 每事件/批次 | 完整期间 | 每场址 | 换算且共享用量仅分配一次 | 发票、仪表及换算来源 |
| `cp_yield_reconciliation` | `field_production` | 产量交接 | 抽样与质量台账 | 田块、周期、批次、样方面积/质量、估算质量、产出/损失 | 分层抽样加核算 | kg 和 ha | 每批次 | 收获期 | 每田块 | 放大样方并核对下游 | 设计、秤检查及台账 |
| `cp_harvest_lots` | `harvest_lifting` | 起挖根茎 | 称重单与批次日志 | 周期、批次、方法、毛重、皮重、净重、时间 | 校准秤逐批称量 | kg | 每批次 | 完整收获期 | 每田块 | 汇总关联净重 | 称重单与校准 |
| `cp_conditioning_batch` | `primary_conditioning` | 清洗与整理后产出 | 批次、仪表与称重记录 | 批次、进入批次、清洗/复洗、水、能源、产出、废水、固体 | 逐批计量称重 | kg、m3、MJ | 每批次 | 完整理期 | 每场址 | 逐批核对各状态 | 校准与批次表 |
| `cp_grading_batch` | `sorting_grading` | 等级产出 | 分级表与称重 | 批次、投入、方案、合格、降级、拒收、去向 | 各状态分别称重 | kg | 每批次 | 完整分级期 | 每场址 | 核对互斥产出状态 | 校准与等级规范 |
| `cp_residue_reject_routes` | 所有过程 | 残余、损失、拒收与返工 | 路线及称重/抽样记录 | 过程、周期/批次、状态、质量、方法、去向、返工关联 | 称重或代表性抽样 | kg | 每事件/批次 | 完整系统 | 每田块/场址 | 按状态及最终去向汇总 | 称重/抽样及去向证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 作物周期流 | 数量/同周期合格品质量 | 采集量；合格品质量 | 每 kg 合格鲜姜数量 | `mass-balance-identity` |
| `calc_product_nutrients` | 养分 | 产品质量×记录的养分比例；保留产品交换 | 质量；成分 | 养分质量 | `mass-balance-identity` |
| `calc_irrigation` | 灌溉 | 水表差值或流量×时间 | 水表/流量；时间 | m3 | `mass-balance-identity` |
| `calc_energy` | 能源 | 载体数量×记录的换算因子 | 载体及因子 | 各载体 MJ | `mass-balance-identity` |
| `calc_direct_n2o` | 田间 N2O | 适用氮×选定 EF1；仅在将 N2O-N 转为 N2O 时使用 44/28 | 氮；EF1 | kg N2O-N 及可选 N2O | `ipcc-2019-managed-soils` |
| `calc_mass_reconciliation` | 各节点 | 投入=产品+废物+库存变化+记录的土壤/水/水分差异 | 所有关联状态 | 残差 | `mass-balance-identity` |
| `calc_shared_run` | 共享设备 | 按吞吐量或运行时间仅分配一次 | 共享投入；驱动量 | 归属投入 | `mass-balance-identity` |
| `calc_downgrade_allocation` | 降级品 | 细分后采用声明的分配并报告敏感性 | 质量与价值 | 分配负荷 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留已核实 UUID 及限定信息。 | 元数据与流备注 |
| `dq_temporal` | 周期 | 覆盖种植至关联农场门口批次。 | 日期日志 |
| `dq_completeness` | 清单 | 核对库存、施用、全部产品、残余物及损失。 | 台账 |
| `dq_seed` | 种姜 | 区分外购与自留种姜及上游覆盖。 | 来源与种植记录 |
| `dq_nutrients` | 养分 | 保留实际产品及成分，不得重复交换。 | 标签、分析、发票 |
| `dq_routes` | 替代路线 | 逐批记录实际路线；混合路线须有加权原始数据。 | 路线字段 |
| `dq_instruments` | 测量 | 校准仪器或记录方法与不确定性。 | 证书/方法 |
| `dq_emissions` | 排放 | 声明因子层级、气候、氮基准、来源及换算。 | 工作簿与引用 |
| `dq_rejects` | 拒收 | 每项拒收物有一个返工/降级/回收/处理/处置关联及最终状态。 | 路线与去向记录 |
| `dq_ranges` | QA | 调查超范围值；范围不替代记录，推理范围为暂定。 | 差异说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考流 | 要求恰好 1 kg 合格鲜姜并具有指定身份及限定信息。 | `mass-balance-identity` |
| `validate_raw_state` | 范围 | 合格产出若为去皮、制干、干燥、切片、粉碎、保藏或提取产品则失败。 | `codex-cxs-218-1999`; `fao-ginger-postharvest-compendium` |
| `validate_parent_delta` | 路线 | 要求田间父活动，并标识灌溉、起挖及清洗替代路线改变的清单类别。 | `aicrps-ginger-package`; `icar-ccari-ginger` |
| `validate_route_exclusion` | 替代路线 | 每批次要求一个实际路线，防止互斥路线负荷重复计量。 | `mass-balance-identity` |
| `validate_nutrient_card` | 田间 | 至多一个合并养分产品投入卡，仅绑定无 group 的 0.3.0 集合；采集时实际产品仍须分开。 | `mass-balance-identity` |
| `validate_process_links` | 图 | 要求周期、收获批次、整理批次和分级批次关联及一致交接。 | `mass-balance-identity` |
| `validate_batch_attribution` | 运行 | 将投入、产出、清洗及换批索引至运行/期间，并防止共享负荷重复计量。 | `mass-balance-identity` |
| `validate_washing` | 整理 | 清洗批次要求水、整理后质量及废水；未清洗批次要求清洗投入为零并声明干式处理。 | `icar-ccari-ginger`; `mass-balance-identity` |
| `validate_grades` | 分级 | 要求合格状态及降级或拒收状态，并为每一状态记录交接。 | `codex-cxs-218-1999` |
| `validate_rework` | 返工 | 每一返回均标识产生与接收节点；合格品排除未解决拒收物。 | `mass-balance-identity` |
| `validate_mass_balance` | 各节点 | 解释包括土壤、表面水、水分及损失在内的残差。 | `mass-balance-identity` |
| `validate_ranges` | 流卡 | 每卡要求一个完整且双语及结构化一致的 Range；调查异常但不得替换前景值。 | `mass-balance-identity` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门口合格鲜姜的前景生产数据集 |
| downstream_use | 需要鲜生姜的系统所用二手或背景数据集 |
| allowed_use | 地理、品种、周期、路线、技术、清洗状态、等级及交接兼容 |
| excluded_use | 种姜；干姜、制干姜、姜粉、保藏姜或提取物；农场后储存、包装或运输 |
| required_metadata | UUID、地理、品种、面积、日期、种姜来源、路线、产量、实际养分与植保产品、水、能源、等级、拒收物及数据年份 |
| required_quality_disclosure | 原始数据比例、估算、异常、仪器质量、上游缺口、排放方法、分配及残差 |
| update_trigger | 品种、地理、产量、种姜、养分、灌溉、机械化、清洗、分级、拒收路线、排放方法或证据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `aicrps-ginger-package` | extension_guidance | AICRPS, *Package of Practices – Ginger*, https://aicrps.res.in/Extension%20Pamphlets/Ginger/English/Package%20of%20practices%20Ginger.pdf | 种姜、养分、覆盖、灌溉、收获、产量及路线 |
| `icar-ccari-ginger` | official_guidance | ICAR-CCARI, *Crop: Ginger*, https://ccari.res.in/dss/ginger.html | 种姜、生产、养分、清洗、收获期及鲜产量 |
| `csir-traditional-ginger-2009` | literature | Rahman et al. (2009), *Traditional practices of ginger cultivation in Northeast India*, http://nopr.niscpr.res.in/handle/123456789/2969 | 种姜和鲜姜产量范围；路线多样性 |
| `codex-cxs-218-1999` | standard | Codex CXS 218-1999, *Standard for Ginger*, https://workspace.fao.org/sites/codex/Standards/CXS%20218-1999/CXS_218e.pdf | 鲜品身份、状态、清洁、清洗与等级 |
| `fao-ginger-postharvest-compendium` | handbook | FAO INPhO, *Ginger: Post-harvest Operations*, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Ginger.pdf | 区分鲜品处理与下游加工 |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Vol. 4 Ch. 11 Table 11.1, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 直接 N2O 方法及 EF1 不确定范围 |
| `mass-balance-identity` | method_factor | 适用于关联前景记录的质量守恒恒等式 | 交接、核算、参考输出及路线 |
