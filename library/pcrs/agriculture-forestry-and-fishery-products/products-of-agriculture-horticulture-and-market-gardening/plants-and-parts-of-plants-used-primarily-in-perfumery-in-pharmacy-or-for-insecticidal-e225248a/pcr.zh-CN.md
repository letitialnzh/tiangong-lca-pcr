---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.plants-and-parts-of-plants-used-primarily-in-perfumery-in-pharmacy-or-for-insecticidal-e225248a
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 主要用于香料、药用、杀虫、杀菌或类似用途的植物及植物部分

## 1. 范围与适用性

本 PCR 适用于声明主要用途为香料、药用、杀虫、杀菌或类似专门用途的植物及植物部分。边界涵盖人工栽培或野生采集二选一的来源路线，以及随后的采收、分级和初级调制，终点为生产者或采集交付口。每个数据集必须声明一个具体物种或类群、植物部位、预期用途、栽培或野生采集路线，以及鲜品或初级干燥状态。不包括精油提取、溶剂提取、蒸馏、配制、药品、香料或农药制造、下游包装和运输，以及主要市场用途不属于本类别的食品或饮料作物。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.plants-and-parts-of-plants-used-primarily-in-perfumery-in-pharmacy-or-for-insecticidal-e225248a |
| classification_refs | CPC 3.0: 0 > 01 > 019 > 0193 > 01930 |
| covered_products | 主要用于声明的香料、药用、杀虫、杀菌或类似用途的栽培或野生采集植物、叶、花、果、种子、皮、木质部、茎、根、根茎或其他植物部分；在生产者或采集交付口为鲜品或初级干燥品 |
| excluded_products | 精油、提取物、馏出物、配方药品、香料或农药；食品或饮料用途为主的作物；未声明物种、植物部位、用途、来源路线或市场状态的混合物 |
| representative_product | 在声明含水率下交付的单一已声明类群与植物部位的合格鲜品或初级干燥原料 |
| production_route | 人工栽培是管理生物生产父路线；野生采集是替代生产路线，增加来源生态系统、采集范围、资源移除和可持续采集记录。两路线对同一物料量互斥，之后汇合于采收、分级和初级调制。鲜品交付与初级干燥是调制父活动下互斥的技术分层。 |
| market_state | 在生产者或采集交付口的鲜品或初级干燥、未提取植物原料；状态必须声明 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 符合声明类群、植物部位、用途和质量规格的合格专用植物原料 |
| How much | 1,000 kg |
| How well | 声明物种或类群、植物部位、预期用途、栽培或野生采集来源、鲜品或初级干燥状态、含水率基准、杂质和验收等级 |
| How long or cycle | 一个栽培作物周期或一个野生采集期，以及相连的调制批次或连续报告期 |
| reference_flow_link | `accepted_specialty_plant` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Plants and parts of plants used primarily in perfumery, in pharmacy, or for insecticidal, fungicidal or similar purposes |
| Reference flow property |  |
| Reference unit group |  |
| Reference unit | kg |
| Required qualifiers | 生产者或采集交付口；物种或类群；植物部位；预期用途；栽培或野生采集路线；鲜品或初级干燥状态；水分或干物质基准；地理位置；作物年份或采集期；批次；等级与去向 |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_unresolved_identity` | 参考产品 | 与最终核实参考流一致的质量属性 | kg | 参考流属性与单位组身份尚未解析；在身份核实前不得补造 UUID。按交付时质量计量，并报告同批次含水率。 |
| `moisture_state_alignment` | 所有植物物料交付 | 质量 | kg 鲜物或 kg 干物 | 聚合前声明并统一鲜/干基准；干物质量等于湿质量乘以干物质分数。 |
| `route_mass_reconciliation` | 来源与调制节点 | 质量 | kg | 分别平衡栽培或野生采集输入、合格品、降级品、废物、损失和干燥去除水分；同一物料量不得同时计入两条来源路线。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 栽培路线从本作物周期开始前已准备的生产地块开始；野生路线从声明种群、生态系统、采集范围和采集期开始 |
| starting_condition_role | 互斥来源路线的前景入口条件 |
| product_classification_scope | CPC 3.0 `01930` |
| recursive_input_rule | 同类别植物原料重新进入边界时，将其记录为具有供应数据集的外部产品输入，不递归重建其生产或采集。 |
| upstream_dataset_requirement | 所有外购产品或服务投入使用地理、技术和功能具有代表性的上游数据集，或明确保留为前景选择待解析项。 |
| disclosure | 声明类群、植物部位、用途、栽培或野生采集来源、地点、周期/采集期、鲜/干状态、含水率、采收与调制技术、分级、拒收/返工路径及所有排除活动。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_origin_route` | 所有物料 | 每一物料量仅选择人工栽培或野生采集之一。栽培包括本周期管理投入、土地占用和田间排放；野生采集包括来源种群、采集范围、资源移除、采集投入和遗留状态。 | `who-gacp-medicinal-plants`; `fairwild-standard` |
| `boundary_independent_harvest` | 采收/采集交付 | 将从生产地或野生来源移除目标植物部分作为独立节点责任，因为其产出状态、损失和交付记录与生长或来源管理不同。 | `who-gacp-medicinal-plants`; `fairwild-standard` |
| `boundary_conditioning` | 初级调制 | 包括采后清洁、分级、切割以及为生产者/采集交付所需的初级干燥或稳定化。鲜品交付没有干燥；排除提取、蒸馏、配制和下游制造。 | `who-gacp-medicinal-plants`; `who-quality-control-herbal-materials` |
| `boundary_route_delta` | 替代路线与技术 | 栽培是管理生物生产父活动；野生采集增加种群与生态系统、采集范围和资源移除要求。调制是父活动；鲜品交付和初级干燥改变能源、水分平衡与排放要求。互斥分层分别采集后方可加权聚合。 | `who-gacp-medicinal-plants`; `fairwild-standard` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_cultivation` | 人工栽培 | `conditional` | included only for cultivated lots; mutually exclusive with wild_collection for the same material quantity | managed biological production from declared propagation material to harvestable target plant or plant part | declared cultivated area and crop cycle |
| `wild_collection` | 野生采集与资源移除 | `conditional` | included only for wild-collected lots; mutually exclusive with managed_cultivation for the same material quantity | independent removal and capture from the declared wild source with collection-period indexing | declared source area or collection unit and collection period |
| `primary_conditioning` | 采收、分级与初级调制 | `required` | one declared cultivated or wild-collected input route; fresh hand-off may omit drying | independent harvest/capture hand-off, cleaning, sorting, cutting and optional primary drying or stabilization to the producer or collection gate; the fresh/dried choice is an alternative technology route | 1,000 kg accepted product at declared fresh or primary-dried state |

### 过程: 人工栽培 (`managed_cultivation`)

#### 投入

##### 产品流

###### 物种特定繁殖材料 (`propagation_material`)

记录所声明栽培类群实际使用的种子、苗木、插条、根茎或其他繁殖材料；不同繁殖状态不得在无质量或数量换算时合并。

- 选定流: Species-specific propagation material
- 流属性/单位: Mass or count / kg or item
- 数量规则: measured quantity established or planted
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: per declared cultivated area and crop cycle
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivation_inputs`
- 来源:
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: kg or items/ha crop cycle
  - 基准: actual propagation material per cultivated hectare
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
###### 合并农业养分与肥料供应 (`nutrient_supply`)

在这一张合并卡中记录矿质和有机肥、粪肥、堆肥、石灰及养分改良剂，并保留各产品身份和养分分析。

- 选定流: Agricultural nutrient and fertilizer supply
- 流属性/单位: Product quantity and nutrient content / kg, m3, kg N, kg P2O5 or kg K2O as applicable
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set 版本: `0.3.0`
- 数量规则: measured supplied products and calculated nutrient contents
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per cultivated area and crop cycle
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivation_inputs`
- 来源: who-gacp-medicinal-plants
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kg product/ha crop cycle
  - 基准: sum of solid supplied products; liquids remain in native volume
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
###### 实际植保产品 (`crop_protection_inputs`)

按商品身份、活性成分和剂型记录各除草剂、杀虫剂、杀菌剂或生物防治产品；实际产品由田间记录确定。

- 选定流: Actual formulated crop-protection products
- 流属性/单位: Mass or volume / kg or L product
- 数量规则: measured formulated product and active substance applied
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per treated area and crop cycle
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cultivation_inputs`
- 来源: who-gacp-medicinal-plants
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 200
  - 单位: kg or L product/ha crop cycle
  - 基准: total formulated products per treated hectare
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
###### 灌溉水供应 (`irrigation_water`)

仅对灌溉分层记录输送到田间的水；雨养分层不创建交换。

- 选定流: Irrigation water supply
- 流属性/单位: Volume / m3
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set 版本: `0.2.0`
- Flow Set 分组: `irrigation-water`
- 数量规则: metered or calculated water delivered to the cultivated area
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per irrigated area and crop cycle
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_water`
- 来源:
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: m3/ha crop cycle
  - 基准: zero when rainfed; broad screen for delivered irrigation water
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
###### 栽培机械能源供应 (`cultivation_energy`)

记录整地、种植、田间管理、灌溉辅助和其他田间作业实际使用的燃料、电力或其他能源载体。

- 选定流: Cultivation machinery fuel or energy supply
- 流属性/单位: Energy or carrier-native property / MJ, kWh, kg or L
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: measured carrier consumption attributed to the cultivated lot
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per cultivated area and crop cycle
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`
- 来源:
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 30000
  - 单位: MJ/ha crop cycle
  - 基准: all cultivation energy carriers converted to MJ for the QA screen
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
##### 废物流

##### 基本流

###### 农业用地占用 (`land_occupation`)

记录实际作物周期的栽培面积乘以占用时长；区分实质不同的土地利用分层。

- 选定流: agriculture `e1d56d4e-afe3-4b92-bd51-0a21f75e50a8`
- 流属性/单位: Area*time / ha*a
- 绑定: 固定 (`fixed`)
- 数量规则: cultivated area multiplied by occupation duration
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per cultivated hectare and crop cycle
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_cultivation_identity`
- 来源:
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5
  - 单位: ha*a/ha crop cycle
  - 基准: occupation duration per cultivated hectare
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
#### 产出

##### 产品流

###### 内部转移的栽培目标原料 (`cultivated_raw_material`)

将所声明可采收物种和植物部位转移到共同采收与调制节点；排除留田残余和未采集损失。

- 选定流: Cultivated target plant material (internal)
- 流属性/单位: Mass / kg fresh matter
- 数量规则: measured or mass-balanced harvestable material transferred
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: per cultivated area and crop cycle
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_cultivation_identity`
- 来源:
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 200000
  - 单位: kg fresh matter/ha crop cycle
  - 基准: harvestable target material transferred from cultivation
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
##### 废物流

##### 基本流

###### 直接一氧化二氮排放至空气 (`direct_n2o`)

使用声明的 IPCC 层级和因子，根据采集的氮活动数据计算管理土壤直接 N2O。

- 选定流: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg N2O
- 绑定: 固定 (`fixed`)
- 数量规则: calculated direct N2O emitted to air
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per cultivated area and crop cycle
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源: ipcc-2019-managed-soils
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg N2O/ha crop cycle
  - 基准: direct N2O to air per cultivated hectare
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
###### 氨排放至空气 (`ammonia_to_air`)

按氮源和施用事件记录或计算 NH3 挥发，并保留所用氮基准或物质基准。

- 选定流: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg NH3
- 绑定: 固定 (`fixed`)
- 数量规则: measured or calculated NH3 emitted to air
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per cultivated area and crop cycle
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源: ipcc-2019-managed-soils
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 300
  - 单位: kg NH3/ha crop cycle
  - 基准: ammonia mass as NH3 per cultivated hectare
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
###### 硝酸根排放至受纳水体 (`nitrate_to_water`)

按实际受纳水体子环境记录硝酸根淋失或径流，并保留报告基准为硝酸根还是硝态氮。

- 选定流: Nitrate to reported water compartment
- 流属性/单位: Mass / kg NO3 or kg NO3-N
- 数量规则: measured or modelled nitrate loss by compartment
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per cultivated area and crop cycle
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源: ipcc-2019-managed-soils
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg NO3/ha crop cycle
  - 基准: nitrate mass after declared substance-basis conversion
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
###### 磷物质排放至受纳水体 (`phosphorus_to_water`)

记录测量或模型化的磷形态和受纳水体子环境；总磷与磷酸盐不得在无换算时互换。

- 选定流: Reported phosphorus substance to reported water compartment
- 流属性/单位: Mass / kg reported substance
- 数量规则: measured or modelled phosphorus loss by species and compartment
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per cultivated area and crop cycle
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源: who-gacp-medicinal-plants
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 200
  - 单位: kg reported P substance/ha crop cycle
  - 基准: reported phosphorus substance per cultivated hectare
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
###### 按子环境记录的植保活性物质 (`crop_protection_releases`)

根据施用记录将此总括卡展开为具体活性物质和受纳子环境交换；不得以未指定农药 UUID 替代。

- 选定流: Reported active substance to reported compartment
- 流属性/单位: Mass / kg active substance
- 数量规则: calculated release by active substance and compartment
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per treated area and crop cycle
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源: who-gacp-medicinal-plants
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg active substance/ha crop cycle
  - 基准: sum of modelled releases without merging compartments
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
### 过程: 野生采集与资源移除 (`wild_collection`)

#### 投入

##### 产品流

###### 野生采集设备能源供应 (`collection_energy`)

记录进入采集地、切割、挖掘、提升或采集设备实际使用的能源载体；纯手工作业可记录为零。

- 选定流: Collection equipment fuel or energy supply
- 流属性/单位: Energy or carrier-native property / MJ, kWh, kg or L
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: measured carrier consumption attributed to the collection lot
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per accepted collection lot
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`
- 来源: fairwild-standard
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: MJ/1000 kg accepted product
  - 基准: all collection energy carriers converted to MJ
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
##### 废物流

##### 基本流

###### 物种与植物部位特定的野生生物量移除 (`wild_biomass_withdrawal`)

按类群、植物部位、来源生态系统和采集面积记录从所声明野生种群中的移除；不得绑定属性不兼容的通用生物量行。

- 选定流: Declared wild plant resource withdrawal
- 流属性/单位: Mass or count / kg or item
- 数量规则: measured removed biomass or count from the wild source
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: per source area and collection period
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wild_collection`
- 来源: fairwild-standard
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 200000
  - 单位: kg fresh matter/collection unit period
  - 基准: gross target biomass removed from the declared wild source
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
#### 产出

##### 产品流

###### 内部转移的野生采集目标原料 (`wild_collected_raw_material`)

仅将预期采集的物种和植物部位转移到调制节点；将伴生物料、来源地残余和未采集生物量分开。

- 选定流: Wild-collected target plant material (internal)
- 流属性/单位: Mass / kg fresh matter
- 数量规则: measured collected target material transferred
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: per source area and collection period
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wild_collection`
- 来源: fairwild-standard
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 200000
  - 单位: kg fresh matter/collection unit period
  - 基准: target material transferred from wild collection
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
##### 废物流

###### 离开野生采集节点的伴生废弃物 (`collection_residues`)

记录从来源地移除并在来源生态系统之外处置的非产品植物物或杂物；留在原地的物料不是废物流。

- 选定流: Incidental collection material
- 流属性/单位: Mass / kg
- 数量规则: measured incidental material crossing the node boundary as waste
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per accepted collection lot
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wild_collection`
- 来源: fairwild-standard
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/1000 kg accepted product
  - 基准: incidental material removed and discarded outside the source
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
##### 基本流

### 过程: 采收、分级与初级调制 (`primary_conditioning`)

#### 投入

##### 产品流

###### 栽培或野生采集原料 (`incoming_raw_material`)

每一份物料仅接收一个声明的内部路线状态，并保留物种、植物部位、来源路线、批次和鲜质量基准。

- 选定流: Cultivated or wild-collected target material (internal)
- 流属性/单位: Mass / kg fresh matter
- 数量规则: measured internal transfer into conditioning
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: per conditioning batch or continuous reporting period
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_mass_balance`
- 来源:
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000000
  - 单位: kg fresh matter/run or period
  - 基准: incoming target material assigned once to the conditioning run
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
###### 清洗或清洁工艺水 (`process_water`)

记录用于洗涤或湿法清洁的供水；纯干法路线不创建交换。

- 选定流: Process water
- 流属性/单位: Volume / m3
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set 版本: `0.2.0`
- Flow Set 分组: `process-water`
- 数量规则: metered or calculated process water supplied
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per 1,000 kg accepted product
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_inputs`
- 来源: who-quality-control-herbal-materials
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: m3/1000 kg accepted product
  - 基准: zero for dry-only routes; water supplied to wet conditioning
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
###### 调制与干燥能源供应 (`conditioning_energy`)

记录清洁、切割、分选、通风、干燥和稳定化实际使用的电力、热或燃料，包括与批次相关的清洁和换批能源。

- 选定流: Conditioning and drying energy supply
- 流属性/单位: Energy or carrier-native property / MJ, kWh, kg or L
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: measured carrier use assigned to the run or period
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: per 1,000 kg accepted product
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`
- 来源: who-gacp-medicinal-plants
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: MJ/1000 kg accepted product
  - 基准: all conditioning carriers converted to MJ
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 合格专用植物原料 (`accepted_specialty_plant`)

在生产者或采集交付口将合格物料记录为预期产出，并声明一个具体物种或类群、植物部位、预期用途以及鲜品或初级干燥状态。

- 选定流: Plants or plant parts for declared perfumery, pharmacy, insecticidal, fungicidal or similar use
- 流属性/单位: Mass / kg at declared moisture basis
- 数量规则: measured accepted mass after sorting and conditioning
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 1,000 kg accepted reference product
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_mass_balance`
- 来源: who-gacp-medicinal-plants
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg/reference flow
  - 基准: accepted product reference mass at the declared moisture state
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
###### 转作其他用途的降级植物材料 (`downgraded_plant_material`)

仅当存在有记录的接收方和有益用途时，才将不合格物料记录为预期产出；否则归类为废物。

- 选定流: Downgraded plant material with declared destination
- 流属性/单位: Mass / kg
- 数量规则: measured mass transferred to documented alternate use
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: per conditioning run or period
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_reject_destinations`
- 来源: who-quality-control-herbal-materials
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/1000 kg incoming raw material
  - 基准: downgraded mass with documented destination
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
##### 废物流

###### 调制植物残余和拒收物 (`conditioning_plant_residues`)

按废物去向记录丢弃的植物部分、杂物和拒收目标物料；不包括具有记录产品用途的降级物料。

- 选定流: Plant residues and rejected material
- 流属性/单位: Mass / kg
- 数量规则: measured discarded solid mass by destination
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per conditioning run or period
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_reject_destinations`
- 来源: who-quality-control-herbal-materials
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg/1000 kg incoming raw material
  - 基准: solid residue and rejected mass leaving as waste
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
###### 湿法调制废水 (`conditioning_wastewater`)

发生洗涤或湿法处理时，按测量数量、组成和去向记录废水；纯干法路线不创建交换。

- 选定流: Wastewater from plant-material washing or wet conditioning
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: measured wastewater sent to the declared destination
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: per 1,000 kg accepted product
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_inputs`
- 来源: who-quality-control-herbal-materials
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: m3/1000 kg accepted product
  - 基准: zero for dry-only routes; wastewater crossing the boundary
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
##### 基本流

###### 初级干燥产生的水蒸气排放至空气 (`water_vapour_to_air`)

根据进出物料质量和含水率测量计算初级干燥去除的水分；鲜品交付路线记录为零。

- 选定流: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg water
- 绑定: 固定 (`fixed`)
- 数量规则: moisture removed by mass and moisture balance
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: per 1,000 kg accepted product
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_drying_records`
- 来源: who-gacp-medicinal-plants
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kg water/1000 kg accepted product
  - 基准: zero for fresh hand-off; moisture removed during declared primary drying
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
###### 植物颗粒物排放至空气 (`plant_dust_to_air`)

按报告的粒径分级和受纳空气子环境记录测量或模型化植物粉尘；有粒径分级时不得绑定未指定粒径流。

- 选定流: Plant particulate matter by reported particle-size fraction
- 流属性/单位: Mass / kg particulate matter
- 数量规则: measured or modelled dust release after control
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: per 1,000 kg accepted product
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_drying_records`
- 来源: who-quality-control-herbal-materials
- 数量范围: 暂定 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/1000 kg accepted product
  - 基准: dust released after declared control equipment
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:
## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_route_exclusivity` | 栽培与野生来源 | 同一物料量不得同时分配给两条来源路线；仅在分层数据完整时按实际合格产量加权。 | `who-gacp-medicinal-plants`; `fairwild-standard` |
| `allocation_mass_balance_first` | 合格品、降级品与废物 | 首先分别记录所有产出和去向并应用质量平衡。仅当多个具有经济价值的产品共享不可分割负担时才分配，并报告方法、价格期和敏感性。 | `who-quality-control-herbal-materials` |
| `allocation_rework_and_runs` | 批次、连续期、返工与换批 | 将投入、产出、清洁和换批事件关联到一次运行或报告期；返工保留原产生节点负担并只计新增操作，防止共享运行负担重复计算。 | `who-gacp-medicinal-plants` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_identity` | `managed_cultivation` | route, taxon, area and internal hand-off | field and crop records | field id; taxon; plant part; crop dates; area; harvestable mass; moisture | field register plus calibrated area and mass records | ha; dates; kg; % | each field and crop cycle | complete crop cycle | all cultivated sites | retain field strata; sum only after route checks | field register, scale and moisture-test evidence |
| `cp_cultivation_inputs` | `managed_cultivation` | propagation, nutrients and crop protection | purchase, issue and application records | product identity; supplier; formulation; active substance or nutrient analysis; quantity; treated area; event | reconcile invoices, stock issues and application logs | kg; L; items; ha | each input and application event | complete crop cycle | all cultivated fields | sum by concrete product and field without double counting | invoice, label, analysis and application log |
| `cp_field_water` | `managed_cultivation` | irrigation water | meter or irrigation record | water source; delivered volume; irrigated area; event | meter reading or engineering calculation with method | m3; ha | each irrigation event | complete crop cycle | all irrigated fields | sum delivered water by field; rainfed strata remain zero | meter calibration or calculation inputs |
| `cp_energy_records` | `all processes` | energy carriers and run-linked cleaning/changeover | meter, fuel and equipment logs | carrier; quantity; energy content; equipment; field/run; cleaning/changeover event | reconcile meters, purchase and operating logs | MJ; kWh; kg; L | each operation or reporting period | complete cycle, collection period or conditioning period | all foreground sites | assign once to the consuming node and convert separately | meter calibration, invoices and operating logs |
| `cp_field_emissions` | `managed_cultivation` | direct field emissions | activity and model records | N inputs; amendment; active substances; application event; soil/climate; receiving compartment; factor/model | collect activity data and apply declared method | kg substance; ha | each event and crop cycle | complete crop cycle | all cultivated fields | calculate by field, substance and compartment then sum | activity records, factor version and model output |
| `cp_wild_collection` | `wild_collection` | population, collection effort, withdrawal and residuals | collector and source-area records | taxon; plant part; ecosystem; source area; permit; collector; dates; gross removal; target output; incidental material; residual condition | verified collection log and field observation | kg; items; ha or declared collection unit | each collection event | complete collection period | all source areas and collectors | retain source-area strata and reconcile gross removal | permit, collector log, geolocation and field inspection |
| `cp_conditioning_mass_balance` | `primary_conditioning` | incoming, accepted, downgraded, waste and loss states | batch or continuous-period records | origin lot; input mass/moisture; accepted grades; downgraded mass/destination; waste mass/destination; output moisture | calibrated weighing and same-lot moisture tests | kg; % | each batch or continuous period | complete conditioning campaign | all conditioning sites | close mass and moisture balance per run before aggregation | scale calibration, lab/test record and destination receipt |
| `cp_conditioning_inputs` | `primary_conditioning` | water and wastewater | meter and discharge records | water source; supplied volume; wastewater mass/volume; composition; destination | metering, tank balance and discharge documentation | m3; kg | each batch or reporting period | complete conditioning campaign | all wet-conditioning sites | balance supplied water, retained moisture and wastewater | meter calibration and discharge receipt |
| `cp_drying_records` | `primary_conditioning` | drying moisture and dust | dryer and environmental records | input/output mass; input/output moisture; run time; controls; dust measurement/model; particle size; air compartment | same-lot moisture balance plus measured or documented emission model | kg water; kg particulate; particle-size fraction | each drying run | complete drying campaign | all drying units | calculate water removed and dust after controls by run | moisture test, run log, control record and emission evidence |
| `cp_reject_destinations` | `primary_conditioning` | downgrade, reject, rework and waste routing | grade and destination records | state; mass; reason; rework loop; recipient; beneficial use or waste destination; receipt | reconcile sorting record with recipient or disposal evidence | kg | each batch or period | complete campaign | all grading sites | each rejected quantity has exactly one path and is excluded from accepted output | grade record, recipient confirmation or waste receipt |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_matter` | 所有植物物料 | 干物质量 = 湿质量 × 干物质分数；所有水分百分比声明湿基或干基。 | 湿质量；同批次含水率 | kg 干物质 | `who-quality-control-herbal-materials` |
| `calc_conditioning_balance` | 初级调制 | 进入质量 = 合格品 + 降级品 + 固体废物 + 未回收损失 + 净去除水分；报告未解释差额。 | 运行级质量与含水率记录 | 运行级质量平衡与差额 | `who-gacp-medicinal-plants` |
| `calc_managed_soil_n2o` | 栽培土壤 | 使用声明的 IPCC 层级、氮活动数据和因子计算 N2O-N，并乘以 44/28 转为 N2O。 | 各氮源；土壤与气候；因子 | kg N2O | `ipcc-2019-managed-soils` |
| `calc_route_weighting` | 多来源汇总 | 汇总值 = 各完整互斥分层值按合格质量加权；缺失分层不得隐式归零。 | 分层清单；分层合格质量 | 加权清单 | `who-gacp-medicinal-plants`; `fairwild-standard` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 所有批次 | 物种/类群、植物部位、用途、来源路线、地理、鲜/干状态和含水率基准齐全且不矛盾。 | 批次身份记录、标签、许可或供应文件 |
| `dq_completeness` | 所有节点 | 采集期或作物周期以及相连调制期内所有场地、采集者、运行、投入、产出、拒收和去向均纳入；量化缺失覆盖。 | 覆盖清单与质量平衡 |
| `dq_wild_source` | 野生采集 | 保留许可、采集范围、种群/生境观察、采集强度和残余状态，以支持资源移除与可持续性解释。 | 许可、地理记录、采集日志与检查记录 |
| `dq_temporal_and_technology` | 所有路线 | 数据代表声明年份/期间和实际技术；替代路线或技术仅在完整分层后聚合。 | 日期记录、设备记录和分层覆盖 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity_gap` | 参考流 | 在核实一个与类别、交付口、状态和质量属性兼容的天工产品流之前，参考 UUID、属性 UUID 和单位组 UUID 必须保持为空；不得以相似物种、提取物、配方产品或通用生物量替代。 |  |
| `validate_origin_exclusivity` | 每一物料量 | 恰好声明一条栽培或野生采集来源路线；两者不得重复计算。 | `who-gacp-medicinal-plants`; `fairwild-standard` |
| `validate_identity_qualifiers` | 参考产品 | 缺少物种/类群、植物部位、预期用途、鲜/干状态、含水率基准、地理或批次时验证失败；不同状态不得在无换算和分层时合并。 | `who-quality-control-herbal-materials` |
| `validate_nutrient_cardinality` | `managed_cultivation` | 最多允许一张合并养分产品投入卡；仅在 set 层级绑定 `flow-set.agricultural-nutrient-supply` 版本 `0.3.0`，不含 group，且不得拆分 N、P、K、粪肥、石灰或改良剂卡。 |  |
| `validate_runs_and_rework` | 调制运行 | 所有投入、产出、清洁、换批、降级、返工和废弃路径关联到运行/期间；拒收物不得计入合格产出，共享负担不得重复。 | `who-gacp-medicinal-plants` |
| `validate_mass_moisture_balance` | 调制 | 每次运行完成质量与水分平衡；鲜品路线的干燥能耗和水蒸气为零，湿法路线必须平衡供水和废水。 | `who-quality-control-herbal-materials` |
| `validate_deferred_elementary_identity` | 硝酸根、磷、植保释放、野生生物量和粉尘 | 最终过程交换前必须将每张总括卡展开为已核实的具体物质/物种、属性和受纳或来源子环境 UUID；不得用宽泛检索候选自动绑定。 |  |

## 10. 已发布数据集配置

| Field | Value |
| --- | --- |
| dataset_role | 具有栽培或野生采集来源和调制路线证据的前景生产数据包 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 在所声明物种/类群、植物部位、用途、来源路线、地理、交付口和鲜/干状态相匹配时，用于过程或生命周期模型 |
| excluded_use | 不得代表未声明物种或部位、不得代表提取物/精油/配方产品、不得将野生与栽培来源互换、不得跨含水率状态无换算使用 |
| required_metadata | 类群；植物部位；预期用途；来源路线；地理；作物周期或采集期；批次/运行；鲜/干状态；含水率；等级；采收和调制技术；产出与去向 |
| required_quality_disclosure | 记录覆盖率、测量与模型方法、身份与 UUID 缺口、分层、质量/水分平衡差额、野生来源证据、代理数据及不确定性 |
| update_trigger | 物种/部位/用途、来源路线、交付状态、地理、采收/调制技术、质量规则、排放方法或天工身份绑定发生实质变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `who-gacp-medicinal-plants` | `official_guidance` | World Health Organization (2003), WHO guidelines on good agricultural and collection practices (GACP) for medicinal plants, ISBN 92 4 154627 1 | cultivated and collected route, harvest, primary processing, hygiene, records and quality controls |
| `fairwild-standard` | `standard` | FairWild Foundation, FairWild Standard Version 3.0 | wild collection source, collection practice, traceability and sustainable resource-removal records |
| `who-quality-control-herbal-materials` | `official_guidance` | World Health Organization (2011), Quality control methods for herbal materials, ISBN 978 92 4 150073 9 | identity, foreign matter, moisture, sampling and quality evidence |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC (2019), 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11 | managed-soil nitrogen emissions and N2O conversion |
