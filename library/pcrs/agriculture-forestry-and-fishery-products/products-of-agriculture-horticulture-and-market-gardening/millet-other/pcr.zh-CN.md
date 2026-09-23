---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.millet-other
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 小米，其他

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 01182 的非种用小米谷物，以收获后未加工状态在农场门交付。不包括种用小米、画眉草、加工产品及下游阶段。前景包括建植、种植、田间投入与排放、收获、脱粒及实际发生的农场门准备；须声明物种、地理、灌溉、水分和残余物去向。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.millet-other |
| classification_refs | CPC 3.0: 01182, Millet, other |
| covered_products | 收获的非种用稗、黍、穇子、鸭乸草、珍珠粟、谷子及其他范围内粟类谷物 |
| excluded_products | 种用小米；画眉草；面粉、去壳粒、麦芽、发酵或预制产品 |
| representative_product | 农场门未加工收获小米谷物 |
| production_route | 田间种植，随后收获、脱粒和已声明的农场门准备 |
| market_state | 未加工谷物，并声明物种、水分、等级和清理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门未加工收获的非种用小米谷物 |
| How much | 1 kg |
| How well | 声明物种或混合物种、水分、等级、清理状态和破损粒比例 |
| How long or cycle | 一个完整作物周期 |
| reference_flow_link | `reference_millet_grain` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Millet, other `f3fc75e0-f49a-48fd-a12f-88246beb1d0a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或混合物种；非种用；地理；作物年份；生产系统；灌溉；水分；等级；清理状态；残余物去向 |
| 绑定模式 | `fixed` |

构建前景数据包时，`必需限定信息` 中的信息须在元数据、过程说明、参考流备注、产品说明或等效字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `millet_reference_mass` | 参考谷物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告收到时质量和水分；干物质换算须保留实测水分。 |
| `crop_cycle_normalization` | 面积基投入和排放 | 相容的质量、体积或能量属性 | kg、L、m3、MJ 或 kWh | 使用同一作物周期的合格谷物产量归一化。 |
| `nutrient_basis` | 养分投入 | 产品质量和养分质量 | kg 产品和 kg 养分 | 保留产品身份、N、P/P2O5、K/K2O 基准及换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 种子和外购投入已交付农场；作物周期开始时的土地状态 |
| starting_condition_role | 前景建植起始条件 |
| product_classification_scope | CPC 3.0 子类 01182 非种用小米谷物 |
| recursive_input_rule | 用于播种的谷物记录为种用小米投入，不记录为参考产品。 |
| upstream_dataset_requirement | 为种子、养分、水、燃料、植保产品及其他投入使用相容上游数据集。 |
| disclosure | 声明物种、地理、轮作、灌溉、收获和准备、水分、排除项及残余物去向。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 小米前景 | 纳入建植、种植、施用、实际灌溉、田间直接排放、收获、脱粒及实际发生的农场门准备。 | `fao-millet-systems`; `fao-millet-postharvest` |
| `boundary_upstream_inputs` | 投入 | 分别建模每个跨界投入，不使用未区分的农业投入包。 | `iso-14044-2006` |
| `boundary_residue_fate` | 残余物 | 区分秸秆或茎叶、糠秕和破碎穗，并声明各自去向。 | `fao-millet-systems` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `millet_cultivation` | 小米建植与种植 | required | 始终纳入 | 受管理生物生产 | 一个作物周期和种植面积 |
| `millet_harvest_preparation` | 收获与农场门准备 | required | 始终纳入；干燥或清理仅在实际发生时记录 | 收获、脱粒、分离和准备 | 1 kg 合格谷物 |

### 过程：小米建植与种植（`millet_cultivation`）

#### 输入

##### 产品流

###### 播种用小米种子（`millet_seed_input`）

用于建植的种子级小米。

- 选定流：Millet, seed `8a2d72cb-ab4f-4c21-a783-c62f81599895`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：计量声明面积和周期使用的种子。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：作物周期种子量除以合格谷物质量
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_millet_field`
- 来源：
- 数量范围：暂定播种量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：30
  - 单位：kg/ha
  - 基准：宽泛建植筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：`fao-millet-systems`

###### 农业养分与肥料投入（`millet_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：作物周期养分投入除以合格谷物质量
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_millet_field`
- 来源：
- 数量范围：暂定总养分筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：600
  - 单位：kg 声明养分/ha
  - 基准：宽泛合计养分筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：`fao-millet-systems`

###### 输送至田间的灌溉水（`irrigation_water`）

实际灌溉时记录输送水量；降雨不作为技术流投入。

- 选定流：Irrigation water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.1.0`
- 流集分组：`irrigation-water`
- 数量规则：计量输送水量并保留水源和灌溉面积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：作物周期灌溉量除以合格谷物质量
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_millet_field`
- 来源：
- 数量范围：暂定灌溉筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：m3/ha
  - 基准：雨养至灌溉的宽泛筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：`fao-millet-systems`

###### 配制植保产品（`crop_protection_product`）

按物理身份分别记录每种制剂及有效成分和浓度。

- 选定流：Formulated crop-protection product applied to millet
- 流属性/单位：Mass or volume / kg or L
- 绑定模式：
- 数量规则：分别计量每种制剂，不合并不同产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：作物周期施用量除以合格谷物质量
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_millet_field`
- 来源：
- 数量范围：暂定植保施用量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 或 L/ha
  - 基准：宽泛首轮制剂施用量筛查；保留选定物理单位
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：`fao-millet-systems`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 向环境空气直接排放的氧化亚氮（`direct_n2o`）

根据采集的氮投入和选定 IPCC 层级计算土壤 N2O。

- 选定流：Nitrous oxide to ambient air
- 流属性/单位：Mass / kg N2O
- 数量规则：应用 `calc_direct_n2o` 并保留 N2O-N 至 N2O 换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：作物周期排放量除以合格谷物质量
- 基准类型：氮投入（`n_input`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_millet_emissions`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定 N2O 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg N2O-N/kg N 投入
  - 基准：宽泛初筛
  - 基准类型：氮投入（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：`ipcc-2019-managed-soils`

### 过程：收获与农场门准备（`millet_harvest_preparation`）

#### 输入

##### 产品流

###### 收获与装载柴油（`harvest_diesel`）

农业机械收获和装载时燃烧的柴油。

- 选定流：Diesel `1bfff35f-7618-4c07-8bd3-d477eea72b73`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：计量分配至收获和装载机械的柴油。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：收获燃料除以合格谷物质量
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_millet_harvest`
- 来源：
- 数量范围：暂定收获燃料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：L/ha
  - 基准：宽泛收获作业筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：`fao-millet-postharvest`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门收获小米谷物（`reference_millet_grain`）

达到声明水分、等级和清理状态的谷物为定量参考。

- 选定流：Millet, other `f3fc75e0-f49a-48fd-a12f-88246beb1d0a`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：汇总合格谷物并归一化至 1 kg。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：声明水分下 1 kg 合格谷物
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_millet_harvest`
- 来源：
- 数量范围：暂定产量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：8
  - 单位：t/ha
  - 基准：宽泛作物周期产量筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：`fao-millet-systems`

###### 移出利用的小米秸秆或茎叶（`millet_straw_product`）

仅在秸秆、茎和叶以有记录产品用途离开时记录。

- 选定流：Millet straw or stover removed after grain harvest
- 流属性/单位：Mass / kg
- 绑定模式：
- 数量规则：分别计量质量、水分、去向和市场状态。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：移出质量除以合格谷物质量
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_millet_harvest`
- 来源：`fao-millet-systems`
- 数量范围：暂定移出秸秆筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：t/ha
  - 基准：声明水分的宽泛筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：`fao-millet-systems`

##### 废物流

###### 送往处理的糠秕与破碎穗（`millet_chaff_waste`）

仅在糠秕和破碎穗跨界至有记录处理去向时记录。

- 选定流：Millet chaff and broken panicles sent to treatment
- 流属性/单位：Mass / kg
- 绑定模式：
- 数量规则：分别计量质量、水分和去向。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：废物质量除以合格谷物质量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_millet_harvest`
- 来源：`fao-millet-postharvest`
- 数量范围：暂定糠秕筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考谷物
  - 基准：宽泛脱粒和清理损失筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：`fao-millet-postharvest`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 小米生产 | 优先分别记录种植、收获、残余物处理和废物处理以避免分配。 | `iso-14044-2006` |
| `allocation_straw_product` | 谷物和移出秸秆或茎叶 | 其具有有记录的经济产品功能时，按代表性经济价值分配不可分割负荷并报告质量敏感性。 | `iso-14044-2006` |
| `allocation_residue_waste` | 糠秕和破碎穗 | 无有记录产品功能的物料不得分配产品负荷；按物理身份和去向分类。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_millet_field` | `millet_cultivation` | 种子、养分、灌溉和植保产品 | 发票、施用、仪表和田间记录 | field_id; cycle; species; area; product_identity; quantity; unit; composition; water | 核对采购、库存和田间施用并保留标签。 | kg, L, m3, ha | 每次施用和周期 | 完整周期 | 每个农场和田块 | 按物理身份和田块汇总并按合格谷物归一化。 | 发票、标签、仪表、日志和库存核对 |
| `cp_millet_emissions` | `millet_cultivation` | 受管理土壤 N2O | 田间投入和计算记录 | nitrogen_sources; nitrogen_mass; residue_N; soil; climate; water_regime; factor_identity | 对每个田块或层应用接受的 IPCC 层级。 | kg N, kg N2O-N, kg N2O | 每周期 | 完整周期 | 每田块或层 | 按层计算并按合格谷物汇总。 | 计算表、因子、换算和复核 |
| `cp_millet_harvest` | `millet_harvest_preparation` | 收获燃料、谷物、秸秆或茎叶和糠秕 | 机械日志、称重单、水分和去向记录 | field_id; batch_id; area; fuel; grain_mass; moisture; straw_mass; chaff_mass; destinations | 按田块和批次核对产出与燃料。 | kg, t, L, percent, ha | 每次收获和批次 | 完整收获期 | 每个农场和田块 | 按批次汇总并按合格谷物归一化。 | 秤检查、票据、水分、燃料和去向证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 作物周期行 | 归一化流量 = 作物周期数量 / 合格谷物质量 | 数量；合格谷物质量 | 每 kg 参考谷物数量 | `mass-balance-identity` |
| `calc_nutrient_mass` | 养分 | 养分质量 = 产品质量 × 有依据的养分分数 | 产品质量；组成 | kg 养分 | `mass-balance-identity` |
| `calc_direct_n2o` | 土壤 N2O | 应用选定 IPCC 层级并以 44/28 将 N2O-N 换算为 N2O。 | 氮投入；因子；条件 | kg N2O | `ipcc-2019-managed-soils` |
| `calc_moisture_mass` | 谷物和残余物 | 干质量 = 收到时质量 ×（1 − 水分分数） | 质量；水分 | 干质量和收到时质量 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考谷物 | 声明物种、非种用、状态、等级、水分及固定 UUID。 | 产品、田间、批次和身份记录 |
| `dq_coverage` | 前景 | 覆盖完整周期和收获，并披露缺失数据和平均处理。 | 带日期记录 |
| `dq_completeness` | 清单 | 核对投入、产品、残余物和排放，并保留身份证据缺口缺口。 | 协议、质量平衡和缺口检查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 确认固定 UUID 表示非种用小米，数量为 1 kg 质量，并声明必需限定信息。 | `unsd-cpc-3-millet` |
| `validation_binding` | 清单流 | 仅将已核验 UUID 设为 fixed、适用既有流集设为 parameterized；其余保持未映射。 |  |
| `validation_protocols` | 采集和计算行 | 确认每个采集或由采集记录计算的行引用现有协议。 |  |
| `validation_mass_balance` | 收获 | 核对谷物、移出秸秆或茎叶、糠秕、破碎穗、水分变化和损失。 | `mass-balance-identity` |
| `validation_nitrogen` | 养分和 N2O | 核对产品记录与氮质量，并核验因子层级、环境区室和换算。 | `ipcc-2019-managed-soils` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门非种用小米谷物作物生产数据集 |
| downstream_use | `secondary_dataset`；评审发布后可作 `background_dataset` |
| allowed_use | 需要相容农场门状态小米谷物的足迹和模型 |
| excluded_use | 种用小米、画眉草、加工小米，或不相容替代 |
| required_metadata | PCR 和参考身份；物种；地理；年份；系统；灌溉；面积；产量；水分；等级；准备；残余物；分配；协议覆盖 |
| required_quality_disclosure | 覆盖、缺失数据、范围超限、证据缺口绑定、因子层级、测量质量、汇总和分配敏感性 |
| update_trigger | 身份或分类修订、新评审证据、路线变化、改进区域因子或持续范围失效 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-millet` | official_guidance | 联合国统计司，CPC 3.0 子类 01182，https://unstats.un.org/unsd/classifications/econ | 产品范围和身份校验 |
| `fao-millet-postharvest` | official_guidance | FAO, Post-harvest Operations Compendium: Millet, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_MILLET.pdf | 收获、脱粒、准备和残余物分解 |
| `fao-millet-systems` | official_guidance | FAO, The World Sorghum and Millet Economies, https://www.fao.org/4/w1808e/w1808e00.htm | 生产多样性和残余物用途 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 受管理土壤 N2O 方法 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 边界和分配层级 |
| `mass-balance-identity` | method_factor | 带水分换算的物理质量守恒关系 | 质量、养分和水分核对 |
