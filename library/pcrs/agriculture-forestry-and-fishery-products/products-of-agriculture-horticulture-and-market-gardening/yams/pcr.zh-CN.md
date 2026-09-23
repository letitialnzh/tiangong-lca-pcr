---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.yams
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 山药

## 1. 范围与适用性

本 PCR 适用于送达农场门口的鲜食、未加工山药块茎（*Dioscorea* spp.）的受控种植、挖收、首次农场门口整理和分级。参考产品不包括种用山药，也不包括木薯、甘薯、芋头、箭叶黄体芋、山药加工品、场外贮藏、包装、零售准备和烹饪。

默认路线止于合格完整块茎在农场门口交接前称重。灌溉、清洗、动力操作和投入品只在实际发生时记录。愈伤、延长贮藏、包装或农场门口后的运输应作为下游过程建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.yams` |
| classification_refs | CPC 3.0 `01540`（Yams），精确候选映射语境 |
| covered_products | 农场门口交付的 *Dioscorea* spp. 鲜食完整商品山药块茎 |
| excluded_products | 作为销售产品的种用山药；其他根茎作物；去皮、切分、干制、冷冻、熟制、发酵、切片或磨粉山药 |
| representative_product | 鲜食、完整、未加工的可销售山药块茎 |
| production_route | 受控田间种植；块茎挖收；发生时的首次清洁或修整；分级与农场门口交接 |
| market_state | 农场门口的鲜食、未加工农产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门口交付的鲜食、完整、可销售山药块茎 |
| How much | 净质量 1,000 kg |
| How well | 符合所声明买方或等级规格的完好可售块茎；净质量不含泥土、包装、拒收块茎和游离清洗水 |
| How long or cycle | 一个单一期间的声明山药作物周期，结束于农场门口交接 |
| reference_flow_link | `yam_grading` 的净合格产出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Yams `227a29cc-a11c-4357-9188-2ee8ead339bd` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或物种组；已知时的品种；生产国家和场址；作物周期日期；雨养或灌溉制度；完整鲜食状态；清洗状态；等级或买方规格；农场门口交接点 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 农场门口合格山药 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分级后称量合格块茎净质量；剔除皮重、包装、游离水、松散泥土、降级批次和拒收品。 |
| `transfer_mass` | 节点间转移的山药物料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每个交接点采用实测湿质量，并披露其间任何改变水分的时段。 |
| `area_conversion` | 占用田地 | 每作物周期面积 | ha·crop_cycle | 归一化前，将种植面积与相同地块、相同周期的收获块茎质量匹配。 |
| `nutrient_mass` | 肥料投入 | 养分质量 | kg nutrient | 保留实物肥料产品，并分别计算 N、P2O5 和 K2O 当量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已备好田地及可识别的山药种植材料；购入投入品保留关联的上游数据集。 |
| starting_condition_role | 前景采集始于一个作物周期的田间建植和投入品施用。 |
| product_classification_scope | 农场门口的鲜食完整商品山药块茎。 |
| recursive_input_rule | 购入或内部转移的种用山药/种块保持为显式产品流投入。同类别种植材料关联单独划界的数据集，不递归展开当前商品山药过程。 |
| upstream_dataset_requirement | 为种植材料、肥料、植保产品、燃料、电力、灌溉供水和废物处理关联适宜的上游数据集。 |
| disclosure | 声明种源、田地面积、作物日期、管理制度、整理步骤、等级定义、拒收品去向及排除的贮藏或包装。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_managed_cultivation` | `yam_cultivation` | 纳入田间建植、管理投入、实际发生的灌溉、田间能源以及该作物周期的受控土壤直接排放。 | `fao-quality-declared-yam-planting-material`; `iita-yam-yield-2020` |
| `boundary_harvest_handoff` | `yam_harvest` | 将挖收与田间收集作为独立交接；区分收集山药、损伤块茎和未收集损失。 | `fao-yam-postharvest` |
| `boundary_primary_conditioning` | `yam_primary_conditioning` | 纳入分级前的松散泥土清除、修整、条件性清洗、沥水和风干；排除以延长保质期为目的的贮藏。 | `fao-yam-postharvest` |
| `boundary_grading` | `yam_grading` | 将整理后块茎核对为合格产品、降级产品、拒收品和物理损失。 | `fao-yam-postharvest`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yam_cultivation` | 受控山药种植 | required | 始终 | 建植并管理山药直至块茎可挖收 | 每份待收块茎产出 |
| `yam_harvest` | 山药挖收与田间收集 | required | 始终 | 挖起块茎并转移到整理环节 | 每份已收集块茎产出 |
| `yam_primary_conditioning` | 农场门口初步整理 | required | 始终；单项操作有条件 | 去除泥土和植株杂物、修整，并在需要时清洗和沥水 | 每份整理后块茎产出 |
| `yam_grading` | 分级与农场门口交接 | required | 始终 | 分离合格、降级和拒收状态 | 每 1,000 kg 合格山药 |

### 过程：受控山药种植（`yam_cultivation`）

#### 输入

##### 产品流

###### 山药种植材料（`seed_yam_setts`）

记录贡献地块中种植的经病害筛查完整种薯或切块。

- 选定流：Yam planting material
- 流属性/单位：Mass / kg
- 数量规则：实测种植鲜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门口合格山药产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy_inputs`
- 来源：`fao-quality-declared-yam-planting-material`
- 数量范围：暂定种植材料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：20
  - 上限：500
  - 单位：kg
  - 基准：每 1,000 kg 农场门口合格山药产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`yam_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门口合格山药产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy_inputs`
- 来源：
- 数量范围：施用状态养分产品总质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg product
  - 基准：每 1,000 kg 农场门口合格山药产出；养分分析结果另行保留
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水（`irrigation_water`）

仅在灌溉生产中记录送达田地的水；雨养生产记录为零。

- 选定流：Irrigation water
- 流属性/单位：Volume / m3
- Binding: `parameterized`
- 绑定模式：`parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则：计量或校准的田间供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门口合格山药产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 数量范围：暂定灌溉筛查范围；仅在灌溉启用时适用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：m3
  - 基准：每 1,000 kg 农场门口合格山药产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种植用农机燃料（柴油载体）（`cultivation_diesel`）

记录田间设备使用的柴油；其他能源载体分别记录。

- 选定流：Mobile machinery fuel, diesel carrier
- 流属性/单位：Volume / L
- Binding: `parameterized`
- 绑定模式：`parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则：实测分配到种植活动的燃料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门口合格山药产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy_inputs`
- 数量范围：暂定种植柴油筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：L
  - 基准：每 1,000 kg 农场门口合格山药产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不规定废物投入。外购粪肥或回收养分材料属于需声明来源的产品流投入。

##### 基本流

###### 占用田地面积（`field_area_occupation`）

将田地面积和作物周期日期与相同地块的收获量匹配。

- 选定流：Agricultural land occupation
- 流属性/单位：Area-time / ha·crop_cycle
- 数量规则：贡献面积除以待收块茎质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 待收山药块茎
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_area_and_yield`
- 来源：`iita-yam-yield-2020`
- 数量范围：由报道的 13.1–23 t/ha 产量换算的尼日利亚示例
  - 范围角色：典型范围（`typical_range`）
  - 下限：0.0435
  - 上限：0.0763
  - 单位：ha·crop_cycle
  - 基准：每 1,000 kg 待收山药块茎；仅为区域示例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`iita-yam-yield-2020`

#### 输出

##### 产品流

###### 待收山药作物（`harvest_ready_yams`）

该中间块茎状态交给 `yam_harvest`，不是参考产品。

- 选定流：Harvest-ready yam tubers
- 流属性/单位：Mass / kg
- 数量规则：挖收前实测或按地块估算的块茎质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门口合格山药产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_mass_transfers`
- 数量范围：暂定待收质量核对范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 农场门口合格山药产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

留在田内的植株残体记入田间平衡和排放模型，不作为废物输出。

##### 基本流

###### 受控土壤直接氧化亚氮（`direct_soil_n2o`）

采用选定 IPCC 层级或更优区域方法，将直接 N2O 与间接途径分开计算。

- 选定流：Nitrous oxide, to air
- 流属性/单位：Mass / kg N2O
- 数量规则：氮投入乘以直接 N2O-N 因子，再乘以 44/28
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门口合格山药产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2006-managed-soils-n2o`
- 数量范围：分子量换算前的 IPCC Tier 1 因子不确定性范围
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0.003
  - 上限：0.03
  - 单位：kg N2O-N/kg N input
  - 基准：每 kg 施入受控土壤的 N 投入
  - 基准类型：氮投入（`n_input`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`ipcc-2006-managed-soils-n2o`

### 过程：山药挖收与田间收集（`yam_harvest`）

#### 输入

##### 产品流

###### 接收待收山药作物（`harvest_ready_yams_received`）

按相同批次和作物周期基准接收种植产出。

- 选定流：Harvest-ready yam tubers
- 流属性/单位：Mass / kg
- 数量规则：等于转移的 `harvest_ready_yams`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门口合格山药产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`
- 数量范围：转移质量核对范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 农场门口合格山药产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获用农机燃料（柴油载体）（`harvest_diesel`）

记录挖收和收集设备使用的柴油；人工收获记零。

- 选定流：Mobile harvest machinery fuel, diesel carrier
- 流属性/单位：Volume / L
- Binding: `parameterized`
- 绑定模式：`parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则：实测分配到收获的燃料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已收集山药产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy_inputs`
- 数量范围：暂定收获柴油筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：L
  - 基准：每 1,000 kg 已收集山药产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不规定废物投入。

##### 基本流

不规定单独的基本流投入。

#### 输出

##### 产品流

###### 已收集山药块茎（`collected_yams`）

记录实际挖起并送往整理的全部块茎，包括随后被拒收的块茎。

- 选定流：Collected fresh yam tubers
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门口合格山药产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_mass_transfers`
- 来源：`fao-yam-postharvest`
- 数量范围：暂定已收集块茎核对范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1800
  - 单位：kg
  - 基准：每 1,000 kg 农场门口合格山药产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 挖收中损伤或损失的块茎（`harvest_damaged_yams`）

记录挖收中损伤至不可用或单独量化为未收集损失的块茎；可售降级块茎不属于废物。

- 选定流：Damaged yam tubers
- 流属性/单位：Mass / kg
- 数量规则：实测损伤或未回收块茎质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 已收集山药产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_and_loss_records`
- 来源：`fao-yam-postharvest`
- 数量范围：暂定收获损失筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg
  - 基准：每 1,000 kg 已收集山药产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

除非直接计量，设备尾气保留在关联的燃料燃烧数据集中。

### 过程：农场门口初步整理（`yam_primary_conditioning`）

#### 输入

##### 产品流

###### 接收已收集山药块茎（`collected_yams_received`）

在清洁或修整前接收完整的已收集块茎状态。

- 选定流：Collected fresh yam tubers
- 流属性/单位：Mass / kg
- 数量规则：等于转移的 `collected_yams`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门口合格山药产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`
- 数量范围：转移质量核对范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1800
  - 单位：kg
  - 基准：每 1,000 kg 农场门口合格山药产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理清洗水（`conditioning_wash_water`）

仅在因污染或买方要求而清洗时记录用水；干式清洁路线记零。

- 选定流：Process water
- 流属性/单位：Mass / kg
- Binding: `parameterized`
- 绑定模式：`parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- 数量规则：实测山药清洗供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 整理后山药产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`fao-yam-postharvest`
- 数量范围：暂定清洗用水筛查范围；仅在清洗启用时适用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 整理后山药产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理电力（`conditioning_electricity`）

记录清洗机、输送机或风机用电；无动力整理记零。

- 选定流：Electricity
- 流属性/单位：Energy / kWh
- Binding: `parameterized`
- 绑定模式：`parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则：实测分配到整理过程的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 整理后山药产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy_inputs`
- 数量范围：暂定整理用电筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kWh
  - 基准：每 1,000 kg 整理后山药产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不规定废物投入。

##### 基本流

不规定单独的基本流投入。

#### 输出

##### 产品流

###### 整理后山药块茎（`conditioned_yams`）

记录去除松散泥土、修整并在需要时清洗和沥水后准备分级的完整块茎。

- 选定流：Conditioned fresh yam tubers
- 流属性/单位：Mass / kg
- 数量规则：游离水沥除后转入分级的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门口合格山药产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_mass_transfers`
- 来源：`fao-yam-postharvest`
- 数量范围：暂定整理后块茎核对范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1600
  - 单位：kg
  - 基准：每 1,000 kg 农场门口合格山药产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 去除的泥土与植株杂物（`conditioning_solid_residue`）

记录整理中去除的固体；若去向不同，具体数据集中应分开泥土和植株杂物。

- 选定流：Conditioning solid residue
- 流属性/单位：Mass / kg
- 数量规则：离开整理节点的实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 整理后山药产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_and_loss_records`
- 数量范围：暂定固体残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：每 1,000 kg 整理后山药产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗废水（`conditioning_wastewater`）

仅在清洗启用时记录废水，并声明排放、回用或处理去向。

- 选定流：Wastewater from produce washing
- 流属性/单位：Mass / kg
- 数量规则：实测或水量平衡计算的排出量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 整理后山药产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_records`
- 数量范围：暂定废水筛查范围；仅在清洗启用时适用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 整理后山药产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

当前景边界直接向环境排放时，可用逐物质基本流替代废水行。

### 过程：分级与农场门口交接（`yam_grading`）

#### 输入

##### 产品流

###### 接收整理后山药块茎（`conditioned_yams_received`）

在分级前接收完整的整理后状态。

- 选定流：Conditioned fresh yam tubers
- 流属性/单位：Mass / kg
- 数量规则：等于转移的 `conditioned_yams`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门口合格山药产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`
- 数量范围：转移质量核对范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1600
  - 单位：kg
  - 基准：每 1,000 kg 农场门口合格山药产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不规定废物投入。

##### 基本流

不规定基本流投入。

#### 输出

##### 产品流

###### 作为预期产出的农场门口合格山药（`accepted_yams`）

这是应用声明等级或买方规格后的参考产品。

- 选定流：Yams `227a29cc-a11c-4357-9188-2ee8ead339bd`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：净合格块茎恰为 1,000 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`
- 数量范围：固定参考流恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 作为预期产出的降级但可售山药（`downgraded_yams`）

将销售到不同去向的完好低等级块茎记录为独立预期产品流。

- 选定流：Downgraded fresh yam tubers
- 流属性/单位：Mass / kg
- 数量规则：实测低等级可销售质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门口合格山药产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_and_loss_records`
- 来源：`fao-yam-postharvest`
- 数量范围：暂定降级产出筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg
  - 基准：每 1,000 kg 农场门口合格山药产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 拒收山药块茎（`grading_rejects`）

按去向记录不可销售的切伤、压伤、穿刺、病害或腐烂块茎。

- 选定流：Rejected yam tubers
- 流属性/单位：Mass / kg
- 数量规则：实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门口合格山药产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_and_loss_records`
- 来源：`fao-yam-postharvest`
- 数量范围：暂定分级拒收筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg
  - 基准：每 1,000 kg 农场门口合格山药产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

不规定直接基本流输出。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 可分别计量的田地、操作、等级或去向 | 优先采用过程细分和直接归属，再考虑分配。 |  |
| `allocation_single_output` | 不具有预期产品功能的残余物和拒收品 | 将负荷归于合格山药，并将残余物和拒收品保留为废物流；无明确情景时不得计入避免处置收益。 |  |
| `allocation_saleable_downgrade` | 作为预期产品销售的降级山药 | 声明全部预期产出；仅在无法细分时采用有依据的物理或经济分配，并报告基准和敏感性。 | `mass-balance-identity` |
| `allocation_seed_retention` | 内部留用的种植材料 | 记录内部产品流转移和负荷决定；防止同一块茎质量及其负荷同时作为当前产出和下一周期免费投入。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_energy_inputs` | cultivation, harvest, conditioning | planting material, fertilizer products, diesel, electricity | 发票、领用日志、仪表、产品分析 | 日期、标识、数量、单位、分析、过程、地块或批次 | 核对采购与领用；换算前保留实物产品 | 原始单位和 kg nutrient | 每次事件 | 完整作物周期 | 贡献农场和地块 | 按产品和过程求和后归一化 | 发票、标签、仪表和领用日志 |
| `cp_water_records` | cultivation and conditioning | irrigation water, wash water, wastewater | 仪表、泵日志、容器计数、水量平衡 | 来源、日期、体积或质量、去向 | 优先仪表；否则采用校准泵时或容器计数 | m3 或 kg | 每次事件 | 作物周期和整理时段 | 田地和整理区 | 按来源和去向求和 | 校准和水量平衡核查 |
| `cp_field_area_and_yield` | cultivation | area occupation and yield | 田地图、地块登记、收获票据 | 地块、面积、日期、待收质量 | 将测量面积与地块收获量匹配 | ha、date、kg | 每地块每次收获 | 完整作物周期 | 全部贡献地块 | 仅纳入进入数据包的地块 | 地图、登记、校准秤 |
| `cp_crop_mass_transfers` | all nodes | intermediate and accepted yam masses | 秤单和转移日志 | 时间、来源、去向、毛重、皮重、净重、批次、状态 | 每个交接点校准称重 | kg | 每批次 | 收获至交接 | 全部贡献批次 | 按状态求和并核对 | 校准和可追溯性 |
| `cp_reject_and_loss_records` | harvest, conditioning, grading | damaged tubers, residues, downgraded yams, rejects | 分类箱称重和去向日志 | 角色、原因、等级、质量、去向、批次 | 称量每一分离状态 | kg | 每批次 | 收获至分级 | 全部贡献批次 | 按物理标识和去向分别求和 | 秤单、检查、接收证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 可归属数量 × 1,000 / 合格山药净质量 | 可归属数量；合格质量 | 每 1,000 kg 参考产品的数量 | `mass-balance-identity` |
| `calc_nutrient_equivalent` | 肥料投入 | 实物肥料质量 × 声明养分分数；N、P2O5、K2O 分开 | 产品质量；分析值 | kg nutrient |  |
| `calc_land_intensity` | 田地面积 | 贡献面积 × 1,000 / 相同地块待收块茎质量 | ha；kg 块茎 | 每 1,000 kg 块茎的 ha·crop_cycle | `iita-yam-yield-2020` |
| `calc_direct_n2o` | 土壤直接 N2O | 应用所选直接 N2O-N 因子，再乘以 44/28 | kg N input；因子 | kg N2O | `ipcc-2006-managed-soils-n2o` |
| `calc_node_mass_balance` | 收获、整理、分级 | 山药投入质量 = 山药产品输出 + 山药废物输出 + 库存变化 + 已记录损失 | 转移、拒收和库存记录 | 残差及完整性标志 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品与中间状态 | 保留物种或物种组、已知品种、批次、等级和状态；不得将其他根茎作物并入山药产出。 | 批次记录和买方规格 |
| `dq_temporal` | 前景记录 | 采用覆盖一个完整作物周期及全部收获、整理和分级事件的单一报告期；不存在替换或终止事件。 | 有日期的田间和转移记录 |
| `dq_mass_balance` | 转移节点 | 核对合格、降级、拒收、残余物、废水、损失和库存变化，避免重复。 | 节点核对表 |
| `dq_conditional_routes` | 灌溉、清洗、动力操作 | 仅在确认相应操作未发生时记录为零。 | 操作日志和仪表或发票 |
| `dq_range_use` | 数量范围 | 范围仅用于筛查；实际前景记录决定报告值，区域示例不是通用限值。 | 范围例外复核 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产出应恰为 1,000 kg 净合格 Yams 流，并声明全部必需限定信息。 |  |
| `validate_node_linkage` | 过程图 | 种植、收获、整理和分级的转移行应按批次和质量基准匹配。 | `mass-balance-identity` |
| `validate_grade_completeness` | 分级 | 每份进入块茎应归入合格、降级、拒收、库存变化或有记录损失，并给出各状态去向。 | `fao-yam-postharvest`; `mass-balance-identity` |
| `validate_conditional_inputs` | 灌溉、清洗、电力、柴油 | 只有记录证明相关操作或载体不存在时，零值才合规。 |  |
| `validate_range_denominators` | 全部范围 | 每个界值应采用声明的田地、过程输出、氮投入或参考流分母；条件范围仅在路线启用时适用。 |  |
| `validate_no_extended_boundary` | 数据集边界 | 愈伤、延长贮藏、包装和农场门口后运输应排除或建模为显式下游过程。 | `fao-yam-postharvest` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经验证后适合发布为 `secondary_dataset` 或 `background_dataset` 的农场前景生产数据包 |
| downstream_use | 鲜食完整农场门口山药的归因型过程和生命周期模型构建 |
| allowed_use | 所声明的地理、作物周期、管理制度、整理路线和等级 |
| excluded_use | 种用山药生产；其他根茎作物；加工、包装或贮藏山药链；零售和消费 |
| required_metadata | 地理；场址与地块覆盖；作物日期；物种；已知品种；种源；灌溉状态；投入产品；收获方式；清洗状态；等级；去向；分配 |
| required_quality_disclosure | 记录覆盖；实测与估算份额；校准；范围例外；质量平衡残差；未解析 UUID；来源代表性 |
| update_trigger | 产品边界、流标识、市场状态、方法来源、过程拓扑、分配决定改变，或新证据使范围或规则失效 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-yam-postharvest` | official_guidance | FAO, *Yams: Post-harvest Operations*, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Yams.pdf；FAO crop profile, https://www.fao.org/4/x5014e/X5014e0f.htm | 成熟度、谨慎挖收、条件性清洗和风干、损伤剔除、分级、路线分解 |
| `fao-quality-declared-yam-planting-material` | official_guidance | FAO, *Quality declared planting material — protocols and standards for vegetatively propagated crops*, https://www.fao.org/4/i1195e/i1195e00.pdf | 种用山药和种块标识与质量语境 |
| `iita-yam-yield-2020` | extension_guidance | IITA, *IITA BIP team achieves 23 tons per hectare yield for yam in Nigeria* (2020), https://iita.org/news-item/iita-bip-team-achieves-23-tons-per-hectare-yield-for-yam-in-nigeria/ | 尼日利亚区域产量示例、作物周期和种植操作 |
| `ipcc-2006-managed-soils-n2o` | method_factor | IPCC, *2006 Guidelines for National Greenhouse Gas Inventories*, Volume 4, Chapter 11 | 受控土壤直接 N2O 方法与因子不确定性 |
| `mass-balance-identity` | method_factor | 各声明过程节点采用的质量守恒恒等式 | 转移、参考流恒等式、节点核对 |
