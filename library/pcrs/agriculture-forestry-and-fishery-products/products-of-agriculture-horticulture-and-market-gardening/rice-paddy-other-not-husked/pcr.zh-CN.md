---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-paddy-other-not-husked
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 农场门其他未去壳稻谷

## 1. 范围与适用性

本 PCR 用于构建对应 CPC 3.0 `01132`“Rice paddy, other (not husked)”的非种用稻谷前景数据包。范围覆盖稻属（*Oryza*）中声明用于食物、饲料或其他非播种用途的稻谷，从作物建立到声明的农场门交接。

默认参考状态为农场门收获、未加工、未去壳稻谷。数据集必须声明在重要时的水稻品种或杂交种、作物年份或作季、地理位置、生产系统、灌溉和水分管理制度、原状含水率基准、收获方式以及预期下游用途。只有当田间收获、脱粒、装载和运至农场门的活动属于声明的前景边界时，才纳入这些活动。

本 PCR 不包括专门用于播种的水稻种子、糙米、半碾或全碾米、作为下游产品的碎米、米粉或其他加工稻米产品、零售产品、消费者使用，以及农场门后的干燥、清理、储存、去壳、碾米或配送；除非消费该 PCR 的数据集明确声明扩展门点，并重新核验其产品身份和边界仍然兼容。同类稻谷流不得被默认为水稻种子。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-paddy-other-not-husked` |
| classification_refs | CPC 3.0 `01132`，`Rice paddy, other (not husked)` |
| covered_products | 属于稻属、非种用、未去壳、在声明农场门交接的稻谷 |
| excluded_products | 播种用水稻种子；糙米；半碾或全碾米；作为下游产品的碎米；米粉和其他加工稻米产品；零售成品；农场门后的加工和配送 |
| representative_product | 声明农场门和原状含水率基准下的收获、未加工、未去壳稻谷 |
| production_route | 年度或声明作季的水稻种植、收获、适用时的脱粒或分离、田间处理和农场门交接 |
| market_state | 声明品种或杂交种（适用时）、含水率基准、作物年份、地理位置、生产系统和下游用途的散装或容器装非种用稻谷 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场门交接的非种用、未去壳稻谷 |
| How much | 1 kg |
| How well | 在重要时声明水稻品种或杂交种；非播种用途；原状含水率基准；作物年份或作季；地理位置；生产系统和水分管理制度；收获状态；预期下游用途；散装或容器状态 |
| How long or cycle | 一个声明的水稻作物周期和收获年份或作季；储存期不在默认农场门边界内 |
| reference_flow_link | 以下参考数量和已核验平台产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Rice paddy, other (not husked) `bdbb913b-620c-42a0-baf6-c5802a2b6c4b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 非播种用途；在重要时的水稻品种或杂交种；未去壳状态；原状含水率基准；作物年份或作季；地理位置；生产系统和水分管理制度；收获状态；声明农场门；预期下游用途；散装或容器状态 |
| 绑定模式 | `fixed` |

参考数量是跨越声明农场门交接的净稻谷输出。土壤、水、稻草、谷壳、杂质、未收获籽粒、收获损失和其他非参考输出在跨越前景边界时分别报告。只有当消费数据集保留已核验的产品状态和限定信息时，才适用该固定身份；它不是糙米或加工稻米的备用身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示声明农场门和原状含水率基准下的非种用、未去壳稻谷净质量。 |
| `moisture_basis` | 收获稻谷、损失和残余物 | 质量和含水率 | kg 和 percent | 为收获稻谷、参考输出、损失和移出残余物记录原状质量、含水率结果和基准；如使用干物质归一化，保留实测含水率和明确的换算规则。 |
| `seed_input_basis` | 播种用种子 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录播种用种子的质量，或记录透明的粒数到质量换算；不得使用稻谷参考流作为播种种子代理。 |
| `nutrient_input_basis` | 肥料和养分排放 | 质量和养分含量 | kg product 和 kg nutrient | 分别记录配方产品质量和声明的养分含量；氮排放计算使用选定的养分基准，而不是未限定的肥料产品质量。 |
| `water_basis` | 灌溉、取水和排水 | 体积或质量 | m3 或 kg | 区分水源取水、送达灌溉、降雨或其他水输入、消耗量、排水量和水足迹结果。 |
| `energy_inventory` | 田间作业、泵送、收获和交接 | 载能体质量或能量 | kg、L、MJ 或 kWh | 在归一化到参考流前保留能源载体、作业、期间、单位、地理位置和换算基准。 |
| `output_reconciliation` | 收获稻谷、稻草、损失和其他输出 | 质量 | kg | 在归一化到参考流前，以共同含水率基准核对收获稻谷、移出稻草或其他共产品、实测损失和未移出残余物。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_production` | 作物建立和田间生产 | 纳入声明的水稻种子投入、土地占用、整地、播种或移栽、养分管理、灌溉或其他水分管理、作物保护、田间作业，以及至声明收获边界的直接田间排放。 | `irri-rice-production-knowledge-bank`; `irri-rice-water-management`; `ipcc-2019-afolu` |
| `boundary_harvest_and_gate` | 收获和农场门交接 | 当属于前景数据包时，纳入收获、适用时的脱粒或分离、田边处理、装载和运至声明农场门的运输。 | `fao-rice-postharvest`; `irri-rice-production-knowledge-bank` |
| `boundary_postfarm_exclusion` | 农场门后的干燥、清理、储存和加工 | 默认边界排除农场门后的干燥、清理、储存、去壳、碾米、下游食物或饲料转化、零售和消费者使用；除非明确声明扩展门点并重新核验身份，否则将其作为下游数据集表示。 | `fao-rice-postharvest`; `unsd-cpc-rice-01132` |
| `boundary_input_completeness` | 所有前景路线 | 对种子、养分、灌溉和取水、作物保护、土地、田间及泵送能源、收获能源、直接排放、收获稻谷、残余物和损失给出采集值、合理为零或书面排除。 | `irri-rice-production-knowledge-bank`; `irri-rice-water-management`; `ipcc-2019-afolu` |
| `boundary_output_fate` | 非参考输出 | 仅当移出稻草、谷壳、未收获籽粒、收获损失、田间残余物和其他输出跨越前景边界时记录；保留实测数量、含水率基准、目的地和去向。 | `fao-rice-postharvest`; `mass-balance-identity` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | rice_seed_for_sowing_input_and_declared_crop_cycle |
| starting_condition_role | crop_establishment_condition |
| product_classification_scope | 对应 CPC 3.0 `01132`、`Rice paddy, other (not husked)` 的非种用、未去壳稻谷 |
| recursive_input_rule | 将播种用水稻种子作为独立上游投入记录其来源、批次、数量和处理或质量信息。不得将同类稻谷递归追踪为种子，也不得将稻谷重新标记为水稻种子产品类别。 |
| upstream_dataset_requirement | 对水稻种子、养分、作物保护产品、能源载体、供水、运输以及任何处理或废物服务使用已识别或已声明的供应商数据集；最终交换发布前将参数化流集行解析为具体 UUID。 |
| disclosure | 声明在重要时的品种或杂交种、作物周期、地理位置、作物年份或作季、生产系统、水分管理制度、种子来源、养分和作物保护记录、田间能源、收获方式、含水率基准、农场门、预期下游用途、参考输出以及每个非参考输出的去向。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| rice_paddy_crop_production | 水稻稻谷作物生产 | required | 纳入声明的水稻作物周期，直到交接前的收获边界 | 前景 | 收获稻谷及相关田间输出 |
| rice_paddy_harvest_and_gate_delivery | 水稻稻谷收获和农场门交付 | required | 纳入收获、适用时的脱粒或分离、田间处理以及至声明农场门的交接 | 前景 | 声明农场门的净稻谷 |
| on_farm_postharvest_handling | 农场内稻谷干燥或储存 | excluded_by_default | 仅当声明产品门点有意包含农场内收获后干燥或储存且仍保持兼容的未去壳产品身份时纳入；否则使用下游数据集 | 前景 | 声明扩展门点的稻谷输出 |

### 过程：水稻稻谷作物生产（`rice_paddy_crop_production`）

#### 输入

##### 产品流

###### 播种用水稻种子（`seed_for_sowing_input`）

播种用水稻种子是上游作物建立投入，不是参考产品。保留其来源、批次、品种或杂交种、处理状态、播种方式和数量。

- 选定流：Rice Seeds `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按田块、批次或声明作物周期记录实测播种用种子质量；需要时使用透明的粒数到质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_input_records`

###### 农业养分与肥料投入（`rice_paddy_crop_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：

###### 作物保护材料（`crop_protection_material`）

仅当作物保护产品跨越前景边界并声明报告基准时，按配方产品或有效成分记录。

 - 选定流：水稻稻谷生产使用的作物保护材料
- 流属性/单位：Mass / kg
- 数量规则：按施用记录配方产品或有效成分质量，并保留产品身份和田块归属
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`

###### 灌溉供水（`irrigation_water`）

送达田间的灌溉水与水源取水、降雨、排水和水消耗分开记录。

- 选定流：送至水稻生产田的灌溉水
- 绑定：`parameterized`
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：按田块、事件、水源和作物周期计量或计算送达灌溉量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`irri-rice-water-management`

###### 田间机械能源（`field_machinery_energy`）

整地、播种或移栽、田间养护和田间移动所用能源在跨越前景边界时按作业记录。

- 选定流：田间机械能源供应
- 绑定：`parameterized`
- 流属性/单位：Energy or carrier mass / MJ, kWh, L, or kg
- 数量规则：按田间作业记录燃料、电力、机器小时或供应商数据，并保留换算基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`

###### 灌溉泵送电力（`irrigation_pumping_electricity`）

灌溉泵送电力与送达灌溉水数量分开记录。

- 选定流：灌溉泵送用电
- 绑定：`parameterized`
- 流属性/单位：Energy / kWh or MJ
- 数量规则：记录泵送电表，或基于泵记录和送达灌溉记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`

##### 废物流

不假定存在废物投入。只有在来源、处理、养分或土壤功能以及边界交接均有记录时，才记录废物衍生改良剂。

##### 基本流

###### 土地占用（`land_occupation`）

记录声明水稻作物周期所占用的土地面积和持续时间；适用时将土地转化单独记录。

- 选定流：支持水稻稻谷生产的土地占用
- 流属性/单位：Area-time / declared platform unit
- 数量规则：记录田块面积、作物持续时间和适用的土地利用变化状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期及每 1,000 kg 声明农场门稻谷
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`

###### 水资源取用（`water_resource_withdrawal`）

水源取水作为基本流投入记录，并与送达灌溉和排水记录核对。

- 选定流：水稻稻谷生产取用的水资源
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：按田块、事件、水源和作物周期记录实测取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`

#### 输出

##### 产品流

###### 转移至收获和农场门交付的收获稻谷（`harvested_paddy_transfer`）

该内部转移将已实测的收获、未去壳稻谷从作物生产边界带到收获和农场门交付过程。田边状态与固定的农场门参考流分开保留。

- 选定流：转移至农场门交付过程的收获非种用稻谷
- 流属性/单位：Mass / kg
- 数量规则：记录带原状含水率基准和收获批次身份的实测收获稻谷质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程定量输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output_records`

###### 移出的稻草或其他声明共产品（`removed_rice_straw_or_coproduct`）

只有当稻草或其他非参考材料带着声明用途、目的地、实测数量和接收门点跨越边界时，才作为产品输出记录。留在田间的材料不得默认作为外运产品。

- 选定流：移出的稻草或其他声明的非参考农业共产品
- 流属性/单位：Mass / kg
- 数量规则：记录移出质量、原状含水率基准、用途、目的地和接收门点
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_fate_records`

##### 废物流

###### 不可回收的田间或交接前稻谷损失（`unrecoverable_paddy_loss`）

只有当籽粒或植物材料离开前景路线、未成为参考产品或声明共产品，且其目的地或去向有记录时，才记录该废物流。精化后仍证据缺口的材料不强行绑定通用废物流身份。

- 选定流：收获或农场门前的不可回收稻谷或植物材料损失
- 流属性/单位：Mass / kg
- 数量规则：记录损失质量、含水率基准、位置或过程阶段以及去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_fate_records`

##### 基本流

###### 氮或碳田间排放覆盖（`field_emission_coverage`）

只有当选定方法要求其他直接排放、物理身份已精化到证据支持的物质和接收环境介质，并且已核验兼容的基本流 UUID时，才增加其他直接排放。

- 选定流：选定水稻排放方法识别的其他直接田间排放
- 流属性/单位：Mass / kg
- 数量规则：基于采集的作物、土壤、水、养分和残余物记录，按方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_records`
- 来源：`ipcc-2019-afolu`

###### 直接甲烷排放（`direct_methane_emission`）

只有当选定的水稻排放方法支持声明的水分管理制度、土壤、残余物和作物周期输入，且基本流身份已核验时，才记录甲烷。

- 选定流：排入环境空气的直接甲烷
- 流属性/单位：Mass / kg
- 数量规则：基于水分管理制度、有机投入、残余物、土壤和作物周期记录，按选定方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_records`
- 来源：`ipcc-2019-afolu`

###### 直接氧化亚氮排放（`direct_nitrous_oxide_emission`）

只有当选定方法和采集的养分、土壤、水分和作物记录支持计算，且基本流身份已核验时，才记录直接氧化亚氮。

- 选定流：排入环境空气的直接氧化亚氮
- 流属性/单位：Mass / kg
- 数量规则：基于采集的养分、土壤、水分管理和作物周期记录，按选定方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_records`
- 来源：`ipcc-2019-afolu`

### 过程：水稻稻谷收获和农场门交付（`rice_paddy_harvest_and_gate_delivery`）

#### 输入

##### 产品流

###### 接收用于农场门交付的收获稻谷（`harvested_paddy_for_gate_delivery`）

该过程接收实测的收获稻谷转移，并记录到达声明农场门的边界内作业。

- 选定流：从作物生产过程接收的收获非种用稻谷
- 流属性/单位：Mass / kg
- 数量规则：记录接收质量、收获批次、原状含水率基准和接收位置
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output_records`

###### 收获和田间至农场门能源（`harvest_and_gate_energy`）

收获、脱粒、装载和田间至农场门处理所用燃料或电力在跨越前景边界时按作业记录。

- 选定流：收获和田间至农场门能源供应
- 绑定：`parameterized`
- 流属性/单位：Energy or carrier mass / MJ, kWh, L, or kg
- 数量规则：按收获和交接作业记录实测燃料、电力、机器小时或供应商数据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`

###### 田间至农场门货运服务（`field_to_gate_transport_or_handling`）

仅当稻谷跨越声明的前景边界时记录路线特定的货运服务。没有货运距离基础的内部处理不属于此集合，需要单独审核。

 - 选定流：稻谷货运服务
- 流属性/单位：Mass-distance or service quantity / declared platform unit
- 绑定：`parameterized`
- 流集：`flow-set.transport-service`
- 流集版本：`0.1.0`
- 流集分组：`freight-transport`
- 数量规则：记录稻谷质量、距离或处理活动、方式、路线和适用时的服务方
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output_records`

##### 废物流

不假定存在废物投入。任何返回、再利用或处理材料都应按实际路线和边界交接记录，不得从稻谷质量中推断。

##### 基本流

除非声明的收获和交接作业引入了由选定方法和已核验身份支持的独立自然资源或排放交换，否则不要求其他基本流投入。

#### 输出

##### 产品流

###### 声明农场门的稻谷（`rice_paddy_at_farm_gate`）

这是参考产品输出：跨越声明农场门交接的非种用、未去壳稻谷净质量，并保留其原状含水率基准和必需限定信息。

- 选定流：Rice paddy, other (not husked) `bdbb913b-620c-42a0-baf6-c5802a2b6c4b`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：记录声明农场门交接的实测净稻谷质量，并与所有实测非参考输出核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程定量输出和 PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output_records`

###### 门点的移出稻草或其他共产品（`removed_straw_or_coproduct_at_gate`）

只有当用途、目的地、质量、含水率基准和接收门点均有记录时，才在门点记录移出共产品。没有产品输出流集备用绑定。

- 选定流：农场门路线上的移出稻草或其他声明非参考共产品
- 流属性/单位：Mass / kg
- 数量规则：记录质量、接收用途、目的地和门点
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_fate_records`

##### 废物流

###### 收获和农场门交付损失（`harvest_and_gate_delivery_loss`）

当收获、脱粒、装载、运输或交接损失离开前景路线且不是声明产品输出时记录；其去向仍是证据记录的一部分。

- 选定流：收获和农场门交付中的稻谷或植物材料损失
- 流属性/单位：Mass / kg
- 数量规则：按作业记录损失质量和声明去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_fate_records`

##### 基本流

###### 收获作业排放覆盖（`harvest_operation_emission_coverage`）

只有当选定方法、实测能源载体和精化后的基本流身份支持时，才增加收获作业排放。排放交换只能使用已核验的基本流 UUID。

- 选定流：选定方法识别的直接收获或田间至农场门排放
- 数量规则：基于实测能源和作业记录，按方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 声明农场门稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_records`
- 来源：`ipcc-2019-afolu`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_priority` | 可分开的田间、收获和交接作业 | 优先对有独立计量记录的作业进行过程细分，将直接投入和输出分配给相应产品或去向，再进行分配。 | `iso-14044-2006` |
| `allocation_removed_residue` | 移出稻草和其他声明共产品 | 仅当移出稻草或其他材料带着声明用途和目的地跨越边界时，才将其作为共产品。在共同含水率基准下核对实测产品和残余物数量后，才分配共同负荷。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_shared_crop_burdens` | 共同作物路线的稻谷和共产品 | 无法细分时，记录选定的物理或经济分配基准、基准证据以及选择可能影响解释时的敏感性案例。除非选定方法明确要求，不得把负荷分配给留在田间的材料。 | `iso-14044-2006` |

如果稻草或其他残余物留在田间，记录田间管理方式以及选定方法要求的直接排放或土壤投入，但不得创建外运共产品交换。去壳、碾米、干燥、清理和下游转化不属于本默认 PCR 边界内的共产品处理。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_input_records` | `rice_paddy_crop_production` | seed for sowing | 田块和供应商记录 | 种子身份；品种或杂交种；批次；处理；播种方式；质量或粒数；田块；日期 | 保留发票、批次记录、田间日志，需要时保留透明粒数到质量换算 | kg 或带 kg 换算的 item | 每次播种 | 声明作物周期 | 每个田块或作物批次 | 按田块和作物周期汇总；保留批次追溯 | 批次文件、田间日志、换算证据 |
| `cp_nutrient_records` | `rice_paddy_crop_production` | mineral and organic nutrient inputs | 施用和供应商记录 | 产品；养分含量；质量；施用日期；田块；方式；来源 | 核对发票、施用日志和养分声明 | kg product 和 kg nutrient | 每次施用 | 声明作物周期 | 每个田块或作物批次 | 按养分和作物周期汇总；不同身份产品不得合并 | 发票、标签或供应商声明、施用日志 |
| `cp_crop_protection_records` | `rice_paddy_crop_production` | crop-protection material | 施用和供应商记录 | 产品或有效成分；配方；质量；施用日期；田块；对象 | 核对采购、施用和产品身份记录 | kg product 或 kg active ingredient | 每次施用 | 声明作物周期 | 每个田块或作物批次 | 按产品身份和有效成分基准汇总 | 标签、发票、施用日志 |
| `cp_irrigation_records` | `rice_paddy_crop_production` | irrigation, withdrawal, pumping, and drainage | 计量或计算水记录 | 水源；取水；送达；降雨或其他输入；排水；消耗；田块；日期；泵能耗 | 计量读数或透明水量平衡计算 | m3 或 kg；能源为 kWh 或 MJ | 每次事件或计量期间 | 声明作物周期 | 每个田块和水源 | 分开保留取水、送达、消耗、排水和能源 | 计量记录、泵记录、水量平衡检查 |
| `cp_field_energy_records` | `rice_paddy_crop_production` | field and pumping energy | 燃料、电力、机器或供应商记录 | 载体；数量；作业；机器；田块；日期；换算因子 | 保留燃料、电力、机器小时和供应商记录及换算基准 | L、kg、kWh、MJ 或 machine-hour | 每次作业或计费期间 | 声明作物周期 | 田块、机器和作业 | 归一化前按载体和作业汇总 | 计量、发票、机器日志、换算证据 |
| `cp_land_and_output_records` | `rice_paddy_crop_production` | land and crop output | 田块登记和收获记录 | 面积；使用或土地利用状态；作物持续时间；品种；作物年份；收获质量；含水率；田块 | 核对田块登记、地图、收获票据和含水率测定 | ha、ha year、kg 和 percent | 每个田块和作物周期 | 作物周期和作物年份 | 每个田块 | 保留田块身份和共同含水率基准后再汇总 | 田图或登记、收获记录、含水率测试 |
| `cp_harvest_and_output_records` | `rice_paddy_harvest_and_gate_delivery` | harvested paddy, gate output, energy, and handling | 收获、地磅和路线记录 | 收获方式；批次；接收质量；输出质量；含水率；作业；距离；方式；门点；日期 | 核对田间收获、地磅、运输和农场门记录 | kg、percent、kg km 或声明服务单位及能源单位 | 每个收获批次或交接 | 作物年份和报告期 | 田块、农场和声明门点 | 保留批次身份；在共同含水率基准上核对投入、参考输出、共产品和损失 | 地磅票据、含水率测试、路线日志、能源记录 |
| `cp_residue_and_fate_records` | both foreground processes | straw, residues, losses, and fates | 残余物和损失记录 | 材料身份；数量；含水率；阶段；边界交接；目的地；用途；处理；去向 | 对每个外运、返回、处理或不可回收流进行测量或文件记录 | kg 和 percent | 每个批次或事件 | 作物周期和报告期 | 田块、收获作业和接收门点 | 区分外运共产品、田间保留残余物、损失和废物路线 | 目的地记录、接收记录、质量平衡检查 |
| `cp_emission_records` | both foreground processes | direct field and operation emissions | 方法输入和计算记录 | 方法；水分管理制度；土壤；养分投入；残余物；作物持续时间；能源；排放身份；因子版本 | 仅使用选定方法和采集输入计算；保留因子及方法证据 | kg substance 或方法定义单位 | 每个作物周期或作业 | 作物年份和报告期 | 田块、作业和技术 | 按田块或路线计算后归一化到参考输出 | 方法选择、输入核对、计算文件 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | 将每个采集或计算数量按声明农场门固定参考稻谷的净 kg 归一化；保留未归一化记录。 | row amount；net farm-gate paddy output | normalized row amount per reference flow | `mass-balance-identity` |
| `calc_moisture_reconciliation` | paddy, straw, losses, and residues | 使用实测含水率将比较质量换算到一个声明的含水率基准；保留原状质量和换算表达式。 | as-is mass；measured moisture；selected basis | common-basis mass and reconciliation difference | `mass-balance-identity`; `fao-rice-postharvest` |
| `calc_nutrient_basis` | nutrient inputs and nitrogen emissions | 在应用选定排放方法前，根据产品质量和声明的养分含量推导养分投入量。 | product mass；nutrient declaration；selected nutrient basis | nutrient input by field and crop cycle | `ipcc-2019-afolu` |
| `calc_water_separation` | irrigation and water resources | 分开保留水源取水、送达灌溉、排水和消耗；没有书面水量平衡方法时不得相互推导。 | meter or water-balance records | separated water exchanges by source and use | `irri-rice-water-management` |
| `calc_direct_emissions` | direct methane, nitrous oxide, and any additional emissions | 使用声明的水分管理制度、土壤、养分、残余物、作物周期和能源输入，应用选定的兼容 IPCC 方法，并保留方法和因子证据。 | collected method inputs；selected factor and version | calculated elementary emissions with verified identity | `ipcc-2019-afolu` |
| `calc_allocation` | paddy and removed co-products | 记录支持时使用过程细分；否则在共同基准质量核对后应用声明的物理或经济分配基准，并记录敏感性。 | process burdens；paddy output；co-product output；allocation basis | allocated inventory values | `iso-14044-2006`; `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_identity` | 参考流和库存流 | 核对产品状态、流类型、方向、地理位置、提供方或来源、属性、单位和必需限定信息；交换发布前将参数化行解析为具体 UUID。 | 已核验流或流集解析记录 |
| `quality_measurement` | 数量和含水率 | 保留仪器、地磅、计量表、实验室、供应商或透明计算证据；保留原状数值和换算。 | 原始记录、检测结果、计量记录或计算文件 |
| `quality_temporal_coverage` | 作物、能源、水、排放和输出记录 | 声明作物年份或作季、报告期和多期间汇总方式；没有汇总规则不得混合作物周期。 | 田块登记、发票、计量期间和方法记录 |
| `quality_completeness` | 所有边界投入和输出 | 对所需投入、直接排放、参考输出、共产品、损失和残余物去向给出数值、合理为零或书面排除。 | 完整性清单和质量平衡核对 |
| `quality_disclosure` | 数据集元数据和过程说明 | 披露在重要时的品种或杂交种、种子来源、水分管理制度、养分基准、作物保护基准、收获方式、含水率基准、农场门、用途、分配和证据缺口覆盖。 | 数据集元数据、过程说明和审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流和农场门输出 | 当声明状态符合已核验农场门身份时，要求固定稻谷 UUID、质量属性、kg 单位和必需限定信息；拒绝糙米、碾米、碎米或播种用种子替代。 | `unsd-cpc-rice-01132` |
| `validate_boundary_qualifiers` | 数据集元数据和门点 | 检查非播种用途、未去壳状态、农场门、作物年份或作季、地理位置、含水率基准、生产系统和水分管理制度。 | `unsd-cpc-rice-01132`; `fao-rice-postharvest` |
| `validate_mass_balance` | 稻谷、共产品、损失和残余物 | 在共同含水率基准上核对实测投入和输出质量；解释差异、边界交接、保留残余物或证据缺口损失。 | `mass-balance-identity` |
| `validate_input_coverage` | 作物和收获过程 | 对种子、养分、水、作物保护、土地、能源、直接排放和门点作业要求采集值、合理为零或书面排除。 | `irri-rice-production-knowledge-bank`; `irri-rice-water-management` |
| `validate_emission_method` | 直接排放 | 要求选定方法、方法输入、因子证据以及身份兼容且已核验的基本流 UUID；不得将证据缺口排放行作为固定交换发布。 | `ipcc-2019-afolu` |
| `validate_co_product_fate` | 稻草、残余物和其他非参考输出 | 对每个跨越边界的共产品要求实测数量、含水率基准、目的地、用途或处理和分配决定；不得把田间保留残余物作为外运产品。 | `fao-rice-postharvest`; `iso-14044-2006` |
| `validate_flow_binding` | 每个库存行 | 仅接受已核验精确 UUID 的 `fixed` 或适用现有流集的 `parameterized`；否则保留未映射覆盖，不强行匹配产品输出。 | `mass-balance-identity` |

校验输出必须区分已接受输入、已执行检查、跳过检查、发现项和完整性。身份证据缺口或无法确定的检查仍是待审发现，不得静默转换为零数量。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明农场门的非种用、未去壳稻谷前景农业产品数据集 |
| downstream_use | 用于下游去壳、碾米、食物、饲料或其他声明稻米产品系统的 secondary_dataset；只有保留农场门元数据和质量披露时才作为 background_dataset |
| allowed_use | 在声明作物周期、地理位置、含水率基准、生产系统、水分管理制度和输出去向的条件下，建模非种用稻谷生产和农场门交接 |
| excluded_use | 播种用水稻种子；糙米、碾米、碎米或加工稻米；农场门后的干燥、储存、配送、食物或饲料制造；缺少门点或含水率限定信息的数据集 |
| required_metadata | 固定产品 UUID；参考属性和单位组；在重要时的品种或杂交种；种子来源；作物年份或作季；地理位置；农场门；生产系统；水分管理制度；含水率基准；预期下游用途；投入和输出去向；分配；方法和因子引用 |
| required_quality_disclosure | 时间、地理、技术、完整性、计量、含水率、身份、分配、直接排放方法和证据缺口覆盖披露 |
| update_trigger | 产品身份、分类范围、农场门定义、水稻生产路线、排放方法、流集契约、必需限定信息或数量和输出去向的材料证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-rice-01132` | official_guidance | UNSD 稻谷分类详情：https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/01132 | 产品纳入、排除和分类边界 |
| `irri-rice-production-knowledge-bank` | extension_guidance | IRRI Rice Knowledge Bank 分步生产：https://www.knowledgebank.irri.org/step-by-step-production | 作物建立、养分、作物保护、收获和生产过程完整性 |
| `irri-rice-water-management` | extension_guidance | IRRI Rice Knowledge Bank 水分管理：https://www.knowledgebank.irri.org/step-by-step-production/growth/water-management | 灌溉、水分管理制度、田间用水和水记录要求 |
| `fao-rice-postharvest` | handbook | FAO《Rice: Post-harvest Operations》：https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_RICE.pdf | 收获、脱粒、稻谷状态、含水率、收获后边界、损失和残余物处理 |
| `ipcc-2019-afolu` | method_factor | IPCC 2019 Refinement，Volume 4 AFOLU：https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | 直接甲烷和氮排放方法选择及输入要求 |
| `iso-14044-2006` | standard | ISO 14044:2006：https://www.iso.org/standard/38498.html | 过程细分、分配、敏感性和校验原则 |
| `mass-balance-identity` | method_factor | 共同含水率基准和声明输出去向的前景质量平衡核对方法 | 稻谷、共产品、残余物、损失和归一化计算 |
