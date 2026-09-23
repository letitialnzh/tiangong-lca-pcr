---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-edible-roots-and-tubers-with-high-starch-or-inulin-content-n-e-c
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 其他高淀粉或菊粉含量的食用根及块茎，未另分类

## 1. 范围与适用性

本PCR覆盖一个明确命名、具有可靠高淀粉或高菊粉食用贮藏器官证据且归入CPC 01599剩余类别的根或块茎物种。数据集可止于鲜品收获交接，也可包括申报交付点之前实际发生的愈伤、贮藏、分选和包装。

每个数据集必须申报物种、必要时品种、淀粉/菊粉依据、生产系统、批次或汇总规则、新鲜/愈伤/贮藏状态、水分基准和终端交付点。不得混合不同物种或状态。排除木薯、甘薯、山药、芋头、箭叶黄体芋、马铃薯等具名CPC产品、归入其他类别的菊苣根、以面积或面积时间计量的在田作物、作为种用商品出售的繁殖材料、粉末、淀粉、菊粉、提取物、干制品和制成食品。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-edible-roots-and-tubers-with-high-starch-or-inulin-content-n-e-c |
| classification_refs | CPC 3.0: 01599 其他高淀粉或菊粉含量的食用根及块茎，未另分类 |
| covered_products | 一个明确命名的剩余食用根块茎物种，具有高淀粉或菊粉贮藏器官证据 |
| excluded_products | 具名CPC根块茎；在田作物；繁殖材料；粉末；淀粉/菊粉提取物；干制品；制成食品；混合物种批次 |
| representative_product | 申报的新鲜、愈伤或贮藏状态下的一个剩余高淀粉/菊粉食用根块茎物种 |
| production_route | 种植和管理生产、起收、轻柔处理、分选以及条件适用的愈伤、贮藏和包装 |
| market_state | 收获交接点鲜品，或在申报初级处理交付点的愈伤/贮藏合格品 |

同一类别允许多条路线，但一个数据集只选择实际路线和一个终端状态。投入、损失或交付点有实质差异的技术不得混合。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 选定终端交付点的一个申报物种其他高淀粉或菊粉食用根块茎 |
| How much | 1,000 kg 按接收状态计的合格产品 |
| How well | 申报物种、必要时品种、淀粉/菊粉资格证据、产地、生产系统、收获期、批次、表皮/附土状态、新鲜/愈伤/贮藏状态、水分基准、等级、包装和交付点 |
| How long or cycle | 一个作物周期及交付点之前仅实际包含的后处理批次和贮藏期间 |
| reference_flow_link | 按交付点选择 `harvested_root_tuber_output`、`stored_root_tuber_output` 或 `reference_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考量 | 1,000 kg |
| 参考产品流 | 未解析：未确认与CPC 01599类别兼容的已收获质量流 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定项 | 物种；必要时品种；淀粉/菊粉证据；产地；生产系统；作物周期；批次；状态；水分基准；等级；包装；交付点；包含操作 |

不得绑定以面积时间计量的在田菊苣作物或制成的冬虫夏草粉。升为active或发布过程数据前必须解析兼容的已收获质量流。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 终端合格品 | 质量 | kg | 报告按接收状态计的质量、水分和产品状态，干物质换算另行保留。 |
| `species_eligibility` | 参考身份 | 成分和分类证据 | 描述记录 | 保留该食用贮藏器官高淀粉/菊粉且非具名CPC产品的证据。 |
| `area_to_reference_conversion` | 作物生产 | 活动特定属性 | 活动特定单位 | 将同一作物及申报后处理路线的田间总量归一到合格终端质量。 |
| `nutrient_content_basis` | 养分投入 | 养分质量 | kg N、kg P2O5、kg K2O | 分别保留产品量、配方、含量及元素/氧化物基准。 |
| `batch_mass_balance` | 起收、愈伤、贮藏、分选和包装 | 质量 | kg | 核对进料、合格品、降级品、剔除物、异物、腐损和水分损失；蒸发水不得计作固废。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 种植时已准备好的生产区；种植材料及可归属共享设施进入边界 |
| starting_condition_role | 一个申报作物周期的起点 |
| product_classification_scope | CPC 01599内一个明确命名的其他高淀粉/菊粉食用根块茎物种 |
| recursive_input_rule | 从其他经营者接收的同类产品链接其实际上游数据集，不在本PCR内重建 |
| upstream_dataset_requirement | 兼容的种植材料、养分、植保、灌溉、能源、包装和废物处理数据集 |
| disclosure | 物种与资格证据、地理、生产系统、周期、面积、产量、状态、水分、交付点、路线启用、贮藏时间、批次、剔除物、包装、共享资产 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_residual_identity` | 全部路线 | 仅包括一个明确命名的剩余食用物种，并记录其淀粉/菊粉和CPC资格。 |  |
| `boundary_crop_cycle` | 生产 | 包括申报周期的种植材料、整地、养分、植保、灌溉、田间能源、起收和直接排放。 |  |
| `boundary_postharvest` | 后处理路线 | 仅包括交付点前实际发生的愈伤、清洁、贮藏、分选和包装，并保留配对批次和水分状态。 | `fao-root-tuber-postharvest` `fao-root-tuber-storage` |
| `boundary_downstream_exclusion` | 全部路线 | 止于制粉、切片制造、干制、淀粉/菊粉提取、食品制造、配送和零售之前。 |  |
| `boundary_direct_emissions` | 管理土壤和现场燃烧 | 依据库存中相同的养分、残余物和燃料记录计算排放。 | `ipcc-2019-managed-soils` `emep-eea-2023-guidebook` `ipcc-2006-stationary-combustion` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_production_lifting` | 种植、起收与收获交接 | `required` | 始终 | 生产并起收申报的食用贮藏器官 | 种植面积和一个作物周期 |
| `curing_storage` | 愈伤与贮藏 | `conditional` | 在申报交付点之前发生愈伤或贮藏 | 稳定并保存配对批次 | 进出批次质量和贮藏时间 |
| `sorting_packing` | 分选、分级与包装 | `conditional` | 在申报交付点之前发生分选、分级或包装 | 制备合格终端产品 | 配对的进料、合格品和剔除物质量 |

### 过程: 种植、起收与收获交接 (`managed_production_lifting`)

#### 投入

##### 产品流

###### 物种专用种植材料 (`planting_material_input`)

收集并核对物种专用种植材料，保留本卡所需的身份、状态、来源和去向。

- 选定流: 申报物种的繁殖材料或种植材料
- 流属性 / 单位: Mass or number / kg or item
- 数量规则: 分别计量外购和自留材料
- 数值模式: `foreground_record`
- 特异性: `product_specific`
- 归一化基准: 一个作物周期的鲜种植材料
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 收集协议: `cp_crop_inputs`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 5000
  - 单位: kg/ha·crop
  - 基准: 一个作物周期的鲜种植材料
  - 基准类型: `crop_cycle`
  - 证据类型: `reasoned_estimate`

###### 农业养分和肥料投入 (`agricultural_nutrient_inputs`)

收集并核对农业养分和肥料投入，保留本卡所需的身份、状态、来源和去向。

- 选定流: 农业养分和肥料供应
- 流属性 / 单位: Product and nutrient quantity / kg product, m3 product, kg N, kg P2O5, kg K2O
- 绑定: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set 版本: `0.3.0`
- 数量规则: 每种矿质、有机和含养分改良剂仅收集一次并保留身份和含量
- 数值模式: `foreground_record`
- 特异性: `site_specific`
- 归一化基准: 申报养分量而非肥料产品质量
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 收集协议: `cp_crop_inputs`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1200
  - 单位: kg N+P2O5+K2O/ha·crop
  - 基准: 申报养分量而非肥料产品质量
  - 基准类型: `crop_cycle`
  - 证据类型: `reasoned_estimate`

###### 灌溉水 (`irrigation_water_input`)

收集并核对灌溉水，保留本卡所需的身份、状态、来源和去向。

- 选定流: 灌溉供水
- 流属性 / 单位: Volume / m3
- 绑定: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set 版本: `0.2.0`
- Flow Set 组: `irrigation-water`
- 数量规则: 计量或计算施用水量；雨养系统有证据时记零
- 数值模式: `foreground_record`
- 特异性: `site_specific`
- 归一化基准: 施用灌溉水，不含有效降雨
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 收集协议: `cp_crop_inputs`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 20000
  - 单位: m3/ha·crop
  - 基准: 施用灌溉水，不含有效降雨
  - 基准类型: `crop_cycle`
  - 证据类型: `reasoned_estimate`

###### 田间机械能源 (`field_energy_input`)

收集并核对田间机械能源，保留本卡所需的身份、状态、来源和去向。

- 选定流: 种植和起收机械的能源供应
- 流属性 / 单位: Carrier quantity or energy / kg, L, m3, kWh or MJ
- 绑定: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- Flow Set 组: `mobile-machinery-fuel`
- 数量规则: 记录实际能源载体和作业
- 数值模式: `calculated_value`
- 特异性: `site_specific`
- 归一化基准: 保留实际能源载体
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 收集协议: `cp_crop_inputs`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 800
  - 单位: L diesel-equivalent/ha·crop
  - 基准: 保留实际能源载体
  - 基准类型: `crop_cycle`
  - 证据类型: `reasoned_estimate`

###### 植保制剂 (`crop_protection_input`)

收集并核对植保制剂，保留本卡所需的身份、状态、来源和去向。

- 选定流: 申报物种使用的植保制剂
- 流属性 / 单位: Mass / kg formulation
- 数量规则: 按制剂、有效成分和施用事件计量
- 数值模式: `foreground_record`
- 特异性: `product_specific`
- 归一化基准: 汇总前保留全部制剂身份
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 收集协议: `cp_crop_inputs`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 150
  - 单位: kg formulation/ha·crop
  - 基准: 汇总前保留全部制剂身份
  - 基准类型: `crop_cycle`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 收获的未另分类根或块茎 (`harvested_root_tuber_output`)

收集并核对收获的未另分类根或块茎，保留本卡所需的身份、状态、来源和去向。

- 选定流: 申报物种的未解析收获根或块茎
- 流属性 / 单位: Mass / kg
- 数量规则: 计量合格起收质量并记录附土、损伤、状态和水分
- 数值模式: `foreground_record`
- 特异性: `product_specific`
- 归一化基准: 收获状态的合格贮藏器官
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 收集协议: `cp_harvest_lots`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 500
  - 上限: 100000
  - 单位: kg/ha·crop
  - 基准: 收获状态的合格贮藏器官
  - 基准类型: `crop_cycle`
  - 证据类型: `reasoned_estimate`

##### 废物流

###### 田间残余物、损伤器官和附着土壤 (`field_residue_output`)

收集并核对田间残余物、损伤器官和附着土壤，保留本卡所需的身份、状态、来源和去向。

- 选定流: 按材料和去向区分的田间残余物与收获剔除物
- 流属性 / 单位: Mass / kg
- 数量规则: 分别计量作物生物质、损伤器官和返田土壤
- 数值模式: `calculated_value`
- 特异性: `site_specific`
- 归一化基准: 所有类别按去向分别保留
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 收集协议: `cp_harvest_lots`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 3000
  - 单位: kg/1,000 kg accepted harvest
  - 基准: 所有类别按去向分别保留
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 基本流

###### 管理土壤的含氮排放 (`soil_n_emissions_output`)

收集并核对管理土壤的含氮排放，保留本卡所需的身份、状态、来源和去向。

- 选定流: 排放至相应环境介质的含氮物质
- 流属性 / 单位: Mass / kg substance
- 数量规则: 依据核对后的养分和田间记录分别计算各物质
- 数值模式: `calculated_value`
- 特异性: `site_specific`
- 归一化基准: 各物质和环境介质分别保留
- 基准类型: `crop_cycle`
- 证据类型: `collected_record`
- 收集协议: `cp_field_emissions`
- 来源: `ipcc-2019-managed-soils` `emep-eea-2023-guidebook`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 2000
  - 单位: kg reported substance/ha·crop
  - 基准: 各物质和环境介质分别保留
  - 基准类型: `crop_cycle`
  - 证据类型: `reasoned_estimate`

### 过程: 愈伤与贮藏 (`curing_storage`)

#### 投入

##### 产品流

###### 进入愈伤或贮藏的收获产品 (`storage_product_input`)

收集并核对进入愈伤或贮藏的收获产品，保留本卡所需的身份、状态、来源和去向。

- 选定流: 申报物种的未解析收获根或块茎
- 流属性 / 单位: Mass / kg
- 数量规则: 计量进料批次并记录状态、损伤和水分
- 数值模式: `foreground_record`
- 特异性: `product_specific`
- 归一化基准: 按记录水分状态配对的批次
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 收集协议: `cp_storage_lots`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 1
  - 上限: 2
  - 单位: kg incoming/kg accepted output
  - 基准: 按记录水分状态配对的批次
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 愈伤和贮藏能源 (`storage_energy_input`)

收集并核对愈伤和贮藏能源，保留本卡所需的身份、状态、来源和去向。

- 选定流: 通风、温控和搬运的能源供应
- 流属性 / 单位: Carrier quantity or energy / kWh, MJ, kg, L or m3
- 绑定: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: 按批次和期间计量；被动贮藏记零
- 数值模式: `foreground_record`
- 特异性: `technology_specific`
- 归一化基准: 申报实际能源载体和时间
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 收集协议: `cp_storage_lots`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10000
  - 单位: MJ/1,000 kg accepted output
  - 基准: 申报实际能源载体和时间
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 愈伤或清洁用水 (`storage_water_input`)

收集并核对愈伤或清洁用水，保留本卡所需的身份、状态、来源和去向。

- 选定流: 工艺用水供应
- 流属性 / 单位: Volume / m3
- 绑定: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set 版本: `0.2.0`
- Flow Set 组: `process-water`
- 数量规则: 计量供水；干法路线记零
- 数值模式: `foreground_record`
- 特异性: `site_specific`
- 归一化基准: 未用水时为零
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 收集协议: `cp_storage_lots`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: m3/1,000 kg accepted output
  - 基准: 未用水时为零
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 愈伤或贮藏后的合格产品 (`stored_root_tuber_output`)

收集并核对愈伤或贮藏后的合格产品，保留本卡所需的身份、状态、来源和去向。

- 选定流: 申报物种的未解析愈伤或贮藏根或块茎
- 流属性 / 单位: Mass / kg
- 数量规则: 计量合格产出并记录期间、状态和水分
- 数值模式: `foreground_record`
- 特异性: `product_specific`
- 归一化基准: 配对批次并申报水分和期间
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 收集协议: `cp_storage_lots`
- 来源: `fao-root-tuber-postharvest` `fao-root-tuber-storage`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0.5
  - 上限: 1
  - 单位: kg accepted/kg incoming
  - 基准: 配对批次并申报水分和期间
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 废物流

###### 贮藏损失和剔除物 (`storage_loss_output`)

收集并核对贮藏损失和剔除物，保留本卡所需的身份、状态、来源和去向。

- 选定流: 按去向区分的腐烂、萌芽、损伤或剔除产品
- 流属性 / 单位: Mass / kg
- 数量规则: 计量移出物并核对期初期末库存
- 数值模式: `calculated_value`
- 特异性: `site_specific`
- 归一化基准: 实物剔除物；水分损失另计
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 收集协议: `cp_storage_lots`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg/1,000 kg incoming
  - 基准: 实物剔除物；水分损失另计
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 基本流

###### 现场能源产生的化石二氧化碳 (`storage_fossil_co2_output`)

收集并核对现场能源产生的化石二氧化碳，保留本卡所需的身份、状态、来源和去向。

- 选定流: 排放至空气、未指定环境的化石二氧化碳 `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg CO2
- 绑定: `fixed`
- 数量规则: 依据实际化石燃料计算；无现场燃烧时为零
- 数值模式: `calculated_value`
- 特异性: `technology_specific`
- 归一化基准: 仅现场化石燃料燃烧
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 收集协议: `cp_storage_lots`
- 来源: `ipcc-2006-stationary-combustion`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg CO2/1,000 kg accepted output
  - 基准: 仅现场化石燃料燃烧
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

### 过程: 分选、分级与包装 (`sorting_packing`)

#### 投入

##### 产品流

###### 进入分选的产品批次 (`sorting_product_input`)

收集并核对进入分选的产品批次，保留本卡所需的身份、状态、来源和去向。

- 选定流: 申报的新鲜、愈伤或贮藏根块茎批次
- 流属性 / 单位: Mass / kg
- 数量规则: 计量进料质量并记录状态、水分和来源批次
- 数值模式: `foreground_record`
- 特异性: `product_specific`
- 归一化基准: 配对的分选批次
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 收集协议: `cp_sorting_runs`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 1
  - 上限: 2
  - 单位: kg incoming/kg accepted terminal product
  - 基准: 配对的分选批次
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 分选和包装能源 (`packing_energy_input`)

收集并核对分选和包装能源，保留本卡所需的身份、状态、来源和去向。

- 选定流: 分选、分级和包装的能源供应
- 流属性 / 单位: Energy / kWh or MJ
- 绑定: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: 按批次计量或分配能源
- 数值模式: `foreground_record`
- 特异性: `site_specific`
- 归一化基准: 保留实际能源载体
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 收集协议: `cp_sorting_runs`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 2000
  - 单位: MJ/1,000 kg accepted product
  - 基准: 保留实际能源载体
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 产品包装 (`packaging_input`)

收集并核对产品包装，保留本卡所需的身份、状态、来源和去向。

- 选定流: 申报交付所需包装
- 流属性 / 单位: Mass or item / kg or item
- 绑定: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set 版本: `0.2.0`
- 数量规则: 按材料、功能和回收率计量包装
- 数值模式: `foreground_record`
- 特异性: `product_specific`
- 归一化基准: 扣除有证据重复使用后的归属包装
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 收集协议: `cp_sorting_runs`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg packaging/1,000 kg accepted product
  - 基准: 扣除有证据重复使用后的归属包装
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 合格终端根块茎产品 (`reference_product_output`)

收集并核对合格终端根块茎产品，保留本卡所需的身份、状态、来源和去向。

- 选定流: 申报物种的未解析其他高淀粉或菊粉食用根块茎
- 流属性 / 单位: Mass / kg
- 数量规则: 在申报状态、水分和交付点恰为1000 kg合格产品
- 数值模式: `foreground_record`
- 特异性: `product_specific`
- 归一化基准: 按接收状态计的合格终端产品
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 收集协议: `cp_sorting_runs`
- 来源: `mass-balance-identity`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: 按接收状态计的合格终端产品
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

###### 分选剔除物和异物 (`sorting_reject_output`)

收集并核对分选剔除物和异物，保留本卡所需的身份、状态、来源和去向。

- 选定流: 按去向区分的不合格、损伤或污染器官及异物
- 流属性 / 单位: Mass / kg
- 数量规则: 与有用降级产品和返工品分开计量
- 数值模式: `calculated_value`
- 特异性: `site_specific`
- 归一化基准: 仅剔除物；有用降级品仍为产品
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 收集协议: `cp_sorting_runs`
- 数量范围: 宽范围质量控制筛查值
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg/1,000 kg incoming
  - 基准: 仅剔除物；有用降级品仍为产品
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_crop_outputs` | 作物生产 | 优先物理细分；不可分的有用次级产品必须报告数量并采用有依据的一致分配。 |  |
| `allocation_grades` | 分选 | 合格等级和有用降级品均作为产品；不得为规避分配而记为废物。 |  |
| `allocation_residues` | 残余物 | 无功能弃置时不计收益；出售或利用时申报去向并采用经评审的分配或单独替代情景。 |  |
| `allocation_shared_assets` | 共享设施 | 按实测运行时间、面积时间、体积时间或吞吐量分配，防止节点间重复归属。 |  |
| `allocation_rework` | 返工 | 返工回到原批次，额外投入和损失仅计一次，验收后才计产出。 |  |

## 8. 前景数据收集、计算与质量规则

### 数据收集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_inputs` | `managed_production_lifting` | 种植、养分、水、植保、能源 | 发票、田间日志、仪表、承包记录 | 物种、品种、田块、面积、日期、投入身份、配方、含量、数量、单位、载体、作业 | 将采购、自留材料和施用记录核对至田块 | 原单位及ha | 每事件 | 完整作物周期 | 每个田块和共享服务 | 按田块和投入汇总，共享用量因果分配，再除以配对终端产量 | 发票、施用日志、仪表、田块图、承包凭证 |
| `cp_harvest_lots` | `managed_production_lifting` | 起收、合格收获物、残余物、土壤 | 称量单、收获日志、抽样 | 物种、田块、日期、毛皮重、合格质量、水分、附土、损伤、残余/剔除类别、去向、批次 | 校准称量及代表性外观/水分抽样 | kg、%、ha | 每批 | 完整起收期 | 每个田块和收集点 | 按批次和类别汇总，保留状态和去向 | 校准、批次号、照片/检验、水分和去向记录 |
| `cp_field_emissions` | `managed_production_lifting` | 管理土壤排放 | 计算前景记录 | 各形态N、残余N、土壤/气候、因子版本、物质、环境介质 | 对核对后的田间投入应用有文件依据的方法 | kg物质 | 每周期 | 同一周期及方法规定滞后期 | 每个管理田块 | 逐田块计算后按产出质量加权 | 方法来源、工作表、投入核对、复核 |
| `cp_storage_lots` | `curing_storage` | 愈伤、贮藏、损失、能源、水 | 批次单、称量、仪表、环境日志 | 物种、批次、期初期末质量、水分、损伤、方法、时间、温湿度、通风、水、能源、剔除物、去向 | 配对批次计量和库存核对 | kg、%、day、m3、kWh、MJ | 每批及环境期间 | 完整申报期间 | 每个仓库、愈伤区和公用仪表 | 按批次核对期初、收发、合格品、剔除物和水分变化 | 校准、环境记录器、批次链、盘点、去向 |
| `cp_sorting_runs` | `sorting_packing` | 分选、等级、返工、包装、剔除物 | 运行单、称量、包装记录、仪表 | 物种、批次、状态、进料、等级标准、合格/降级/剔除量、返工、包装材料/质量/复用、能源、交付点 | 配对运行质量平衡和包装数量核对 | kg、item、kWh | 每运行或批次 | 全部代表性运行 | 每条分选包装线及共享资产 | 按等级和去向汇总，共享运行按吞吐量分配 | 校准、检验、包装规格、运行/批次链接、闭合检查 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_normalization` | 作物周期流 | 田间总量/同一作物归属的终端合格质量×1000 | 田间量、配对合格量 | 每1000 kg参考产品量 |  |
| `calc_batch_balance` | 贮藏和分选 | 期初/进料+接收=合格+降级+剔除+发出/期末库存+水分变化±闭合误差 | 配对质量和水分 | 已核对批次清单 | `mass-balance-identity` |
| `calc_dry_matter` | 水分换算 | 接收质量×(1−湿基水分分数) | 质量、水分 | 干物质质量 | `mass-balance-identity` |
| `calc_combustion_co2` | 现场燃料 | 燃料量×适用热值、碳和氧化因子 | 能源记录、因子 | kg化石CO2 | `ipcc-2006-stationary-combustion` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 命名物种和状态，并保留高淀粉/菊粉及CPC剩余资格证据。 | 植物/产品规格、成分来源、分类复核、批次记录 |
| `dq_completeness` | 全部节点 | 核对田块、投入、收获批次、库存、分选、损失、包装和去向。 | 完整性清单和平衡 |
| `dq_temporal` | 作物与贮藏 | 保持一个作物周期及配对后处理批次，披露贮藏时间和平均方法。 | 有日期的田间、批次、库存记录 |
| `dq_measurement` | 质量、水分、环境 | 使用校准秤及有文件依据的代表性水分/环境测量。 | 校准、抽样、记录器记录 |
| `dq_route` | 条件节点 | 仅包括实际愈伤、贮藏、分选和包装；披露未启用节点和终端交付点。 | 路线声明、过程图、记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | severity |
| --- | --- | --- | --- |
| `validate_residual_identity` | 参考产品 | 未命名单一物种、未证明高淀粉/菊粉和CPC 01599资格、状态或交付点时拒绝。 | error |
| `validate_exclusions` | 参考产品 | 拒绝具名CPC根块茎、在田作物、繁殖材料、粉末、提取物和制成品。 | error |
| `validate_reference_identity` | 参考产品 | candidate阶段UUID可空；active和过程发布前必须确认兼容的已收获质量流。 | error |
| `validate_reference_mass` | 终端产出 | 合格终端产出必须为1000 kg接收状态质量，不含剔除物和未验收返工。 | error |
| `validate_route_activation` | 条件节点 | 未启用时相关负荷为零或缺省；启用时必须有配对记录。 | error |
| `validate_nutrient_binding` | 作物养分 | 生产过程最多一张养分卡，使用set级`flow-set.agricultural-nutrient-supply` 0.3.0，无group或固定UUID。 | error |
| `validate_mass_balance` | 收获、贮藏、分选 | 核对合格、降级、剔除、异物、库存和水分损失并披露闭合误差。 | error |
| `validate_ranges` | 全部清单卡 | 范围例外需复核；临时筛查值不替代前景证据或构成生产限值。 | warning |
| `validate_flow_resolution` | 清单 | 过程发布前将参数化卡解析为经确认UUID，并解析当前未解决身份。 | error |
| `validate_shared_rework` | 共享资产和返工 | 拒绝共享服务或返工产品重复计量。 | error |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个明确命名的其他高淀粉/菊粉食用根块茎物种的前景产品系统 |
| downstream_use | `secondary_dataset`；仅在物种、路线、状态、地理和交付点匹配时作`background_dataset` |
| allowed_use | 限于申报物种、生产系统、周期、状态、贮藏时间、技术、地理和交付点 |
| excluded_use | 无物种剩余平均；具名CPC产品；在田作物；繁殖材料；粉末；提取物；制成品；跨新鲜/愈伤/贮藏交付点替代 |
| required_metadata | 物种/品种、成分和分类资格、产地、系统、周期、面积、批次、状态、水分、等级、交付点、启用节点、时间、包装、分配和身份解析 |
| required_quality_disclosure | 完整性、测量、缺失数据、范围例外、平衡闭合、共享资产、返工、分配和未解析身份 |
| update_trigger | 物种/分类纠正、交付点或路线变化、技术变化、新记录、因子修订、产量/损失变化或身份确认 |

## 11. 数据来源

| Source id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `fao-root-tuber-postharvest` | official_guidance | FAO, https://www.fao.org/4/y4358e/y4358e05.htm | 轻柔收获、搬运、愈伤、劣变和后处理路线 |
| `fao-root-tuber-storage` | official_guidance | FAO, https://www.fao.org/4/x5415e/x5415e03.htm | 贮藏条件、库存控制和损失记录 |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤含氮排放 |
| `emep-eea-2023-guidebook` | method_factor | EEA EMEP/EEA 2023, https://www.eea.europa.eu/publications/emep-eea-guidebook-2023 | 农业氨排放 |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC 2006, Volume 2 Chapter 2, https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html | 现场燃烧CO2 |
| `mass-balance-identity` | method_factor | 应用于配对前景记录的质量守恒恒等式 | 批次核对和精确参考产出 |
