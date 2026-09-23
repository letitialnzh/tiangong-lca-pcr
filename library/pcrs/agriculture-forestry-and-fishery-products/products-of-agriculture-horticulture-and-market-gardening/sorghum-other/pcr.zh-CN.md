---
pcr_id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-other"
language: "zh-CN"
status: "candidate"
sync_with: "pcr.en-US.md"
content_maturity: "authored_methodology"
translation_status: "aligned"
---

# 声明农场门或初级调理门的非种用高粱谷物

## 1. 范围和适用性

本 PCR 用于构建对应 CPC 3.0 `01142` 的非种用高粱谷物前景数据包，范围从种植田间生产、收获到声明的农场门或初级调理门。默认门点为农场门。若数据包仅包含交付谷物所需的受限首次调理（如脱粒、干燥、清理或分级），可声明初级调理门。

食品、饲料和工业用途是由数据包声明的不同用途，不构成不同的 PCR 身份。雨养和灌溉生产、品种或杂交种、耕作路线、收获技术及调理路线，仅在其身份和证据得到声明时纳入。

播种用高粱种子、饲草或青贮高粱、面粉、粗粉、麦芽、啤酒、烈酒、乙醇、淀粉、配方饲料、食品制造、零售包装、分销、消费和下游储存默认排除。下游过程只有在声明产品状态、水分基准、质量描述和门点后，才可将本 PCR 作为输入使用。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-other` |
| classification_refs | CPC 3.0 `01142`，`Sorghum, other` |
| covered_products | 来自声明作物路线、在农场门或声明初级调理门交付的非种用高粱谷物 |
| excluded_products | 高粱种子；饲草或青贮高粱；面粉、粗粉、麦芽、啤酒、烈酒、乙醇、淀粉、配方饲料、食品及其他下游高粱产品 |
| representative_product | 已声明水分基准、质量描述、终用途路线和门点的可销售非种用高粱谷物，可为散装或声明的包装状态 |
| production_route | 受管理的一年生高粱种植、收获和收集，可在声明门点前包含初级调理 |
| market_state | 在门点交付并声明食品、饲料或工业路线的谷物；不包含下游加工 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场门或初级调理门的非种用高粱谷物 |
| How much | 1 kg 净合格谷物 |
| How well | 高粱品种或杂交种、终用途路线、谷物状态、水分基准、质量或等级描述、异物规则、生产系统、地理位置、灌溉状态和门点 |
| How long or cycle | 一个声明的作季和收获年份 |
| reference_flow_link | 见下方参考数量和产品流 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 品种或杂交种；终用途路线；谷物状态；水分基准；质量或等级描述；异物规则；地理位置；作季和收获年份；灌溉或雨养状态；生产系统；声明门点；包装或散装状态 |
| Binding | `fixed` |

参考数量是声明门点的净合格非种用高粱谷物。皮重、异物、杂质、去除的水分、拒收谷物、残余物和未解释损失应分别记录，不得无说明地并入参考产出。

## 4. 测量和单位规则

| rule_id | 适用对象 | 要求属性 | 要求单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass | kg | 参考流应表示声明门点的净合格非种用高粱谷物，并排除容器皮重。 |
| `moisture_basis` | 谷物产出和去除水分 | 质量和水分含量 | kg 和声明的质量分数 | 记录收到状态质量和水分基准。转换到其他水分基准时必须使用实测或声明的水分和明确计算，不提供通用水分因子。 |
| `yield_basis` | 收获和归一化投入 | 质量和面积 | kg 和 ha | 在归一化前，针对同一作季记录收获谷物、合格谷物、非商品谷物、残余物、损失和种植面积。 |
| `fertilizer_n_basis` | 肥料和土壤排放 | 质量 | kg 产品和 kg N | 分别记录配方产品质量和养分质量；氮排放计算使用声明的 kg N 投入。 |
| `water_basis` | 灌溉和取水 | 体积或质量 | m3 或 kg | 声明水源，并区分取水、输送到田的灌溉水、消耗量以及单独报告的水指标。 |
| `energy_inventory` | 燃料、电力和干燥 | 质量、体积或能量 | L、kg、MJ 或 kWh | 保留能源载体、计量单位、换算基准、作业以及该数值属于田间还是调理作业。 |
| `land_basis` | 土地占用和作物生产 | 面积-时间 | ha·season 或声明的面积-时间单位 | 记录种植面积和声明的作季占用基准；不得用土地占用代替土地转化。 |

## 5. 系统边界

默认前景边界包括来源种植材料、田间整地和播种、施肥及土壤改良、适用时的灌溉、作物保护、田间机械和能源、受管理土壤排放、收获、声明路线中的脱粒或收集，以及从田间到门点的处理。只有当声明门点位于该操作之后时，才纳入可选初级调理。种子、肥料、作物保护产品、供水、燃料、电力、机械服务、适用时的包装和处理服务的上游生产使用代表性背景数据集。食品、饲料、饮料、工业转化和下游分销在默认边界之外。

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_gate` | 前景系统 | 纳入提供声明非种用高粱谷物所需的田间生产、收获、收集和门点交付处理；购入投入作为上游数据集，除非明确位于前景数据包内。 | `fao-sorghum-postharvest-operations`; `ipcc-2019-cropland` |
| `boundary_gate_definition` | 参考产品 | 默认使用农场门。仅当明确记录脱粒、干燥、清理、分级及其损失，且不包含后续食品、饲料、饮料、淀粉、乙醇、制粉或其他制造时，才允许使用初级调理门。 | `fao-grain-postharvest-systems`; `mass-balance-identity` |
| `boundary_primary_conditioning` | 可选调理 | 将首次调理作为独立条件节点，记录其能源、适用时的水、拒收物、水分变化和交接；不得从 CPC 标题推断调理路线。 | `fao-sorghum-postharvest-operations` |
| `boundary_input_completeness` | 作物生产 | 对种植材料、养分投入、作物保护、灌溉、田间能源、土地、受管理土壤排放和残余物去向提供数值、合理零值或有记录的排除。 | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o` |
| `boundary_output_separation` | 全部产出 | 按实测质量和去向区分合格谷物、非商品谷物、主动回收残余物、田间残余物、调理拒收物、去除的水分、粉尘和未解释损失。 | `mass-balance-identity`; `fao-sorghum-postharvest-operations` |

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一年生非种用高粱作物的来源种植种子批次 |
| starting_condition_role | 作物生产投入和身份条件 |
| product_classification_scope | 对应 CPC 3.0 `01142` 的非种用高粱谷物；高粱种子 `01141` 以及本谷物类别之外的饲草或青贮路线排除 |
| recursive_input_rule | 种植种子作为单独声明的投入记录，不计入参考谷物。进入前景路线的同类别高粱谷物应按来源和用途单独识别，不得与当前作季产出合并。 |
| upstream_dataset_requirement | 种子、肥料、改良剂、作物保护产品、灌溉供水、燃料、电力、机械服务、适用时的包装、运输服务和废物处理服务需要代表性上游数据集或有记录的排除。 |
| disclosure | 品种或杂交种、终用途路线、田块和地理位置、作季、生产系统、灌溉、种植材料、门点、谷物状态、水分基准、质量描述、合格产出、残余物和拒收物去向以及分配决定 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| field_sorghum_production | 高粱田间生产 | required |  | foreground | 按合格谷物产出归一化的作季生产 |
| sorghum_harvest_and_collection | 高粱收获与收集 | required |  | foreground | 声明门点前的收获和收集谷物 |
| primary_sorghum_conditioning | 高粱初级调理 | conditional | 在声明门点前发生脱粒、干燥、清理、分级或等效首次调理时纳入 | foreground | 声明调理交接后的合格谷物 |

### 过程：高粱田间生产（`field_sorghum_production`）

#### 输入

##### 产品流

###### 来源高粱种植种子批次（`source_planting_seed_lot`）

种植种子批次是声明的作物投入，不是参考产品。记录其身份、处理状态、质量基准和来源，不得将其作为非种用高粱谷物产出。

- 选定流：Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：声明种植面积使用的种植种子批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_seed_lot_records`
- 来源：`fao-sorghum-postharvest-operations`

###### 农业养分与肥料投入（`field_sorghum_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`

###### 灌溉供水（`irrigation_water_supplied`）

记录计量或其他有证据支持的输送到田灌溉水。经证据支持的雨养路线可记录零值。

- 选定流：输送到田的灌溉水
- 流属性/单位：Volume 或 Mass / m3 或 kg
- 绑定：`parameterized`
- 数量规则：按水源记录计量或有证据支持的灌溉水；只有经验证的雨养生产才可为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`ipcc-2019-cropland`

###### 作物保护投入（`crop_protection_inputs`）

记录用于杂草、害虫或病害的配方产品和活性物质，并记录施用日期、田块和产品身份。

- 选定流：命名的作物保护产品或活性物质
- 流属性/单位：Mass / kg 产品或活性物质
- 数量规则：按命名产品和活性物质记录实测施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`ipcc-2019-cropland`

###### 田间能源和机械服务（`field_energy_and_machinery_services`）

记录田间作业和灌溉泵送使用的燃料、电力、承包机械及其他能源或作业服务。

- 选定流：田间能源载体和机械服务
- 流属性/单位：Mass、Volume 或 Energy / L、kg、MJ 或 kWh
- 绑定：`parameterized`
- 数量规则：按田间作业记录实测或供应方记录的能源或作业服务
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`ipcc-2019-cropland`

##### 废物流

只有当废物来源或返田材料跨越田间边界，并且来源、质量和负担处理已声明时，才记录其为投入。不得将其无说明地并入肥料投入。

##### 基础流

###### 耕地占用（`cultivated_land_occupation`）

当研究范围要求时，将种植面积和作季占用记录为土地使用基础流。

- 选定流：适用的耕地占用基础流
- 流属性/单位：Area-time / ha·season
- 数量规则：种植面积乘以声明的作季占用基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集的计算（`calculated_from_collection`）
- 采集协议：`cp_land_and_output_records`
- 来源：`ipcc-2019-cropland`; `mass-balance-identity`

###### 受管理土壤取水（`managed_soil_water_withdrawal`）

当研究范围包含直接水资源取水时，记录该取水并与输送到田的灌溉水区分。

- 选定流：作物生产的直接水资源取水
- 流属性/单位：Volume 或 Mass / m3 或 kg
- 数量规则：按水源记录直接取水量，或提供有依据的零值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`ipcc-2019-cropland`

#### 输出

##### 产品流

###### 收获的高粱谷物（`harvested_sorghum_grain`）

收获的高粱谷物是可选初级调理前的产品输出。记录收到状态质量以及与声明门点关联所需的质量描述。

- 选定流：Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：声明门点前收获谷物的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`fao-sorghum-postharvest-operations`; `mass-balance-identity`

###### 主动回收的高粱残余物（`intentionally_recovered_sorghum_residue`）

只有当秸秆、穗、糠壳或其他主动回收的作物残余物跨越边界，并且去向和功能已声明时，才将其作为独立产品输出记录。不得使用产品输出流集作为后备绑定。

- 选定流：按物料身份和去向识别的主动回收高粱残余物
- 流属性/单位：Mass / kg
- 数量规则：回收残余物的实测质量和声明去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`ipcc-2019-cropland`; `mass-balance-identity`

##### 废物流

###### 田间残余物和非商品谷物（`field_residue_and_non_marketable_grain`）

分别记录留在田间、返还土壤、焚烧、放牧、处置或其他拒收的残余物，并将非商品谷物与主动回收产品区分。只有在证据支持时才细化物料和去向，否则保留为未映射覆盖。

- 选定流：田间残余物、非商品谷物或按去向识别的损失
- 流属性/单位：Mass / kg 收到状态或声明的干物质基准
- 数量规则：实测质量，或根据产出核算得到的剩余量，并记录去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集的计算（`calculated_from_collection`）
- 采集协议：`cp_land_and_output_records`
- 来源：`ipcc-2019-cropland`; `mass-balance-identity`

##### 基础流

###### 受管理土壤直接氮排放（`direct_managed_soil_nitrogen_emissions`）

只有在采集的养分投入和选定的方法层级支持计算时，才记录排放到相应接收环境介质的含氮排放。

- 选定流：一种已识别的含氮化合物排放到已声明的空气区室；每种有依据的物种分别生成前景交换
- 流属性/单位：Mass / kg 排放物质
- 数量规则：根据声明的养分投入、土壤和气候背景以及选定的方法层级计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集的计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`

###### 田间能源产生的化石二氧化碳（`fossil_carbon_dioxide_from_field_energy`）

只有在田间能源记录和选定的因子方法支持时，才记录田间能源载体的直接化石燃烧排放。

- 选定流：田间能源使用排放到环境空气的化石二氧化碳
- 流属性/单位：Mass / kg 排放物质
- 数量规则：根据采集的燃料或能源记录和声明因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集的计算（`calculated_from_collection`）
- 采集协议：`cp_field_energy_records`
- 来源：`ipcc-2019-cropland`

### 过程：高粱收获与收集（`sorghum_harvest_and_collection`）

#### 输入

##### 产品流

###### 收到的收获谷物（`harvested_grain_received`）

记录收获或门点交付操作收到的高粱谷物，包括收到状态质量和质量描述。

- 选定流：Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：从田间生产收到的收获谷物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_collection_records`
- 来源：`fao-sorghum-postharvest-operations`

##### 废物流

默认不要求废物投入。作为返还或回收投入收到的材料，必须声明来源、质量和负担处理。

##### 基础流

默认不要求基础流投入；作业特定的能源和排放记录在适用的前景作业中。

#### 输出

##### 产品流

###### 交付至门点或调理节点的谷物（`grain_delivered_to_gate_or_conditioning`）

记录交付至声明农场门或可选初级调理节点的谷物。除非运输、处理或储存位于声明前景边界内，否则应在本过程中排除。

- 选定流：Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：交付到下一个声明节点的谷物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_collection_records`
- 来源：`fao-grain-postharvest-systems`; `mass-balance-identity`

##### 废物流

###### 收获和收集拒收物或损失（`harvest_and_collection_rejects_or_loss`）

分别记录破碎谷物、异物、收集损失和其他拒收物，并提供实测质量及去向或处置。若物理材料和去向未建立，不得强行指定产品流身份。

- 选定流：收获或收集拒收物、异物或按去向识别的损失
- 流属性/单位：Mass / kg 收到状态或声明的干物质基准
- 数量规则：拒收物或损失实测质量，或核算后的剩余量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集的计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_collection_records`
- 来源：`fao-sorghum-postharvest-operations`; `mass-balance-identity`

##### 基础流

默认不要求基础流输出；只有在收集作业有受支持的能源或排放记录时，才记录作业特定排放。

### 过程：高粱初级调理（`primary_sorghum_conditioning`）

#### 输入

##### 产品流

###### 进入初级调理的谷物（`grain_entering_primary_conditioning`）

仅当声明门点前发生脱粒、干燥、清理、分级或等效首次调理时，才纳入此条件过程。

- 选定流：Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：进入所纳入调理作业的谷物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格调理高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_records`
- 来源：`fao-sorghum-postharvest-operations`

###### 调理能源（`conditioning_energy`）

记录所纳入脱粒、干燥、清理或分级设备使用的电力、燃料、热空气或其他能源载体。

- 选定流：调理能源载体或公用工程
- 流属性/单位：Mass、Volume 或 Energy / L、kg、MJ 或 kWh
- 绑定：`parameterized`
- 数量规则：按调理批次或作业记录实测公用工程或能源载体用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格调理高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_records`
- 来源：`fao-sorghum-postharvest-operations`

###### 调理用水（`conditioning_water`）

只有在包含清洗、湿法清理、抑尘或其他用水调理步骤时，才记录用水。

- 选定流：高粱调理使用的过程水
- 流属性/单位：Volume 或 Mass / m3 或 kg
- 绑定：`parameterized`
- 数量规则：按调理作业记录用水量；不包含用水步骤时提供有依据的零值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格调理高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_records`
- 来源：`fao-sorghum-postharvest-operations`

##### 废物流

默认不要求废物投入。回收的二次材料必须明确来源和负担处理。

##### 基础流

只有在纳入调理作业且存在相应投入记录时，才记录调理取水和直接燃烧排放。

#### 输出

##### 产品流

###### 声明门点的合格高粱谷物（`accepted_sorghum_grain_at_declared_gate`）

合格高粱谷物是可选调理节点后的参考输出。随合格质量记录水分、质量描述、异物和门点元数据。

- 选定流：Sorghum, other `ff8b6c96-9f97-4952-8832-abfbc4295b65`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：纳入调理后的净合格谷物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：定量参考
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_output_records`
- 来源：`fao-sorghum-postharvest-operations`; `usda-sorghum-standards`; `mass-balance-identity`

##### 废物流

###### 调理拒收物、去除的水分和粉尘（`conditioning_rejects_removed_moisture_and_dust`）

分别记录筛下物、异物、破碎或拒收谷物、去除的水分、粉尘和清理残余物，并以实测质量或明确水分计算提供去向或处置。

- 选定流：按物料身份和去向识别的调理拒收物、去除的水分、筛下物、粉尘或清理残余物
- 流属性/单位：Mass / kg 收到状态或声明的干物质基准
- 数量规则：根据投入-产出核算和水分记录实测或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格调理高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集的计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_output_records`
- 来源：`fao-sorghum-postharvest-operations`; `usda-sorghum-standards`; `mass-balance-identity`

##### 基础流

###### 调理粉尘（`conditioning_dust`）

只有在调理作业、接收环境介质和兼容的接收介质身份均有作业记录支持时，才记录粉尘排放。

- 选定流：排放到环境空气的颗粒物或其他粉尘
- 流属性/单位：Mass / kg 排放物质
- 数量规则：根据纳入调理作业的记录和声明因子实测或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格调理高粱谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集的计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_input_records`
- 来源：`fao-sorghum-postharvest-operations`

###### 调理燃料排放（`conditioning_fuel_emissions`）

只有在纳入燃料使用并且声明的因子方法支持时，才记录直接燃烧排放。

- 选定流：调理能源造成的化石燃烧排放到环境空气
- 流属性/单位：Mass / kg 排放物质
- 数量规则：根据纳入的燃料或能源记录和声明因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格调理高粱谷物
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集的计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_input_records`
- 来源：`fao-sorghum-postharvest-operations`

## 7. 分配和副产品处理

### 分配规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 田间和调理过程 | 优先通过独立划分作业，或分别采集谷物、主动回收残余物、拒收物和按去向处理的记录来避免分配。 | `iso-14044-2006` |
| `allocation_grain_and_recovered_residue` | 谷物和主动回收残余物副产品 | 无法划分时，使用由代表性产品属性或价值支持的声明分配方法，记录选择，并对另一种有依据的方法进行敏感性分析。 | `iso-14044-2006` |
| `allocation_residue_fate` | 田间残余物和拒收物 | 区分残余物收集、还田、放牧、焚烧、处置和转移。除非声明去向、功能、市场和替代证据，不得为替代产品提供抵扣。 | `ipcc-2019-cropland`; `iso-14044-2006` |
| `allocation_moisture_conditioning` | 初级调理 | 使用各产出的实测质量和水分变化分配调理负担；不得将去除的水分作为合格谷物分配。 | `fao-sorghum-postharvest-operations`; `mass-balance-identity` |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot_records` | `field_sorghum_production` | source planting-seed lot | seed and input record | variety or hybrid; lot; treatment; supplier; mass; planting date; field; source status | invoice, seed tag, field log | kg, date, field | per planting event | complete crop season | field or production unit | sum by field and normalize to accepted grain | lot label, invoice, field log |
| `cp_nutrient_input_records` | `field_sorghum_production` | fertilizer and soil amendments | purchase and application record | product; formulation; nutrient content; mass; date; field; application method | invoice, label, application log | kg product, kg nutrient, date | per application | complete crop season | field and production unit | sum by input and field; retain nutrient mass | invoice, label, application record |
| `cp_irrigation_records` | `field_sorghum_production` | irrigation and withdrawal | meter or source record | source; meter; readings; volume; date; field; pumping energy | calibrated meter, pump log, supplier record | m3, kg, kWh | event or month | irrigation portion of crop season | field and source | sum by source and normalize to accepted grain | calibration, readings, source record |
| `cp_crop_protection_records` | `field_sorghum_production` | crop protection | application record | product; active substance; dose; area; date; field; target | label and application log | kg product, kg active substance, ha | per application | complete crop season | field | sum by product and active substance | label, applicator log |
| `cp_field_energy_records` | `field_sorghum_production` | field energy and machinery | fuel, electricity, or service record | operation; carrier; quantity; machine or supplier; date; field | fuel log, meter, invoice, contractor record | L, kg, MJ, kWh, service unit | operation or billing interval | complete crop season | field or production unit | attribute to field operations without double counting | meter, invoice, log |
| `cp_land_and_output_records` | `field_sorghum_production` | land, harvest, grain, residue, and loss | field and harvest record | area; dates; harvested grain; accepted grain; moisture; quality; residues; rejects; losses; fate | calibrated scale, field map, dispatch and fate records | ha, kg, moisture fraction, date | harvest and reconciliation | complete crop season | field and gate | reconcile all outputs before normalization | scale calibration, field map, tickets, fate records |
| `cp_harvest_collection_records` | `sorghum_harvest_and_collection` | harvested and delivered grain | harvest, receiving, and dispatch record | lot; source field; received mass; moisture; quality; foreign material; dispatch mass; date; destination | calibrated scale, receiving ticket, dispatch record | kg, moisture fraction, date | lot or delivery | declared harvest and collection coverage | field, collection point, and gate | reconcile received and delivered lots | scale calibration, tickets, quality record |
| `cp_conditioning_input_records` | `primary_sorghum_conditioning` | conditioning energy and water | batch and utility record | batch; received mass; moisture; operation; carrier; quantity; water; date | batch sheet, meter, invoice | kg, moisture fraction, L, m3, MJ, kWh | batch or utility interval | declared conditioning coverage | conditioning facility | sum by batch and normalize to accepted grain | batch sheet, meter, invoice |
| `cp_conditioning_output_records` | `primary_sorghum_conditioning` | accepted grain and rejects | batch output and quality record | input mass; output mass; moisture; quality; foreign material; screening; removed moisture; dust; fate; gate | calibrated scale, moisture test, quality record | kg, moisture fraction, date | batch | declared conditioning coverage | conditioning facility and gate | reconcile input, accepted output, rejects, moisture, and dust | calibration, moisture test, dispatch and fate records |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_accepted_grain` | 所有前景行 | 将实测或计算的行数量除以同一声明门点和基准下的净合格谷物 | 产出和投入记录 | 每 1 kg 参考产品的数量 | `mass-balance-identity` |
| `convert_moisture_basis` | 谷物和调理行 | 仅根据实测收到状态质量和声明水分，使用明确的质量-水分方程转换；保留原始值和转换值 | `cp_land_and_output_records`; `cp_conditioning_output_records` | 声明水分基准的质量 | `mass-balance-identity`; `fao-sorghum-postharvest-operations` |
| `calculate_managed_soil_emissions` | 氮排放 | 对采集的养分投入和声明的土壤、气候及管理背景应用选定 IPCC 方法层级；披露因子和物种换算 | `cp_nutrient_input_records`; 声明的方法因子 | 按物种的排放 | `ipcc-2019-managed-soils-n2o` |
| `calculate_land_occupation` | 土地占用 | 种植面积乘以声明的作季占用基准，并按合格谷物归一化 | `cp_land_and_output_records` | 每参考产品的面积-时间 | `ipcc-2019-cropland`; `mass-balance-identity` |
| `reconcile_field_outputs` | 田间生产 | 合格谷物、回收残余物、拒收物、田间残余物和未解释损失应在声明容差内与收获记录平衡 | `cp_land_and_output_records` | 产出质量平衡和未解释比例 | `mass-balance-identity` |
| `reconcile_harvest_collection` | 收获和收集 | 收到谷物应在共同质量基准上与交付谷物、拒收物、异物和有记录的收集损失平衡 | `cp_harvest_collection_records` | 收集质量平衡 | `fao-sorghum-postharvest-operations`; `mass-balance-identity` |
| `reconcile_conditioning_outputs` | 初级调理 | 收到谷物的质量和含水量应与合格谷物、拒收物、去除水分、粉尘和有记录的损失平衡 | `cp_conditioning_input_records`; `cp_conditioning_output_records` | 调理质量和水分平衡 | `mass-balance-identity`; `fao-sorghum-postharvest-operations` |
| `apply_co_product_allocation` | 谷物和主动回收残余物 | 只有在产出身份和去向记录后，才应用声明的划分、质量、经济或其他有依据的方法，并进行敏感性分析 | 产出记录；分配决定 | 按产出的分配负担 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和田间 | 声明品种或杂交种、终用途路线、地理位置、作季、生产系统、灌溉、门点、谷物状态、水分基准、质量描述、异物规则以及包装或散装状态。 | 数据集元数据、田间记录、质量和门点记录 |
| `dq_temporal_coverage` | 作物生产 | 覆盖完整声明作季和收获年份；若使用聚合数据集，披露贡献作季和加权方法。 | 有日期的田间、投入、收获和交付记录 |
| `dq_input_completeness` | 作物、收获和调理投入 | 对种子、养分投入、作物保护、灌溉、田间能源、收获或收集、调理能源和用水、土地及处理提供数量、合理零值或有记录的排除。 | 台账、标签、计量器、日志、发票和过程记录 |
| `dq_moisture_and_quality` | 谷物产出 | 保留取样方法、水分结果、质量或等级描述、异物、拒收质量和归一化所用换算基准。 | 校准秤、水分测试、质量记录 |
| `dq_mass_balance` | 全部产出 | 核对田间、收获、收集和调理产出，包括合格谷物、残余物、拒收物、去除水分、粉尘和未解释损失；记录容差和校准。 | 秤记录、批次表和计算工作簿 |
| `dq_method_identity` | UUID 流和因子 | 核验每个 Tiangong 流、属性和单位组身份，并将外部因子与身份证据分开。 | 审核后的身份记录、来源因子和方法说明 |
| `dq_allocation_and_fate` | 副产品和残余物 | 当报告多个有意产出时，记录去向、负担处理、分配方法、替代证据和敏感性。 | 交付、去向、分配和敏感性记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 在发布前确认一个 1 kg 净合格非种用高粱谷物参考流、全部必需限定条件，以及经过审核的 Tiangong 产品、属性和单位组身份。 | `mass-balance-identity`; `usda-sorghum-standards` |
| `validation_scope` | 边界 | 确认排除高粱种子、饲草或青贮路线，以及下游面粉、粗粉、麦芽、饮料、乙醇、淀粉、饲料、食品和分销活动，除非使用单独声明的数据集边界。 | `fao-sorghum-postharvest-operations`; `fao-grain-postharvest-systems` |
| `validation_process_map` | 过程清单 | 确认田间生产和收获或收集存在；仅当初级调理的条件、交接、投入、产出和门点明确时才纳入该过程。 | `fao-sorghum-postharvest-operations` |
| `validation_mass_balance` | 产出 | 确认收获谷物、合格谷物、残余物、拒收物、去除水分、粉尘和损失在声明容差内平衡，且每个非参考产出均有去向。 | `mass-balance-identity` |
| `validation_moisture_and_quality` | 谷物和调理 | 确认保留收到状态质量、水分基准、质量或等级描述、异物和任何换算方程；不得使用无记录的默认水分因子。 | `fao-sorghum-postharvest-operations`; `usda-sorghum-standards`; `mass-balance-identity` |
| `validation_nitrogen` | 肥料和排放 | 确认产品质量、养分质量、选定 IPCC 层级、因子来源、物种、单位和换算已声明，且不是由模块提供。 | `ipcc-2019-managed-soils-n2o` |
| `validation_water_and_energy` | 水和能源 | 确认水源、能源载体、单位、作业、计量器或记录以及上游与前景处理清晰，且供水或能源未重复计算。 | `ipcc-2019-cropland`; `mass-balance-identity` |
| `validation_allocation` | 多产出 | 确认主动回收残余物副产品与废物区分，分配决定明确，并在分配重要时测试另一种有依据的方法。 | `iso-14044-2006` |
| `validation_identity_review` | 所有有绑定的流行 | 当流绑定缺失，或与方向、流类型、属性、单位组、地理位置或门点不匹配时，拒绝最终化；不受支持的概念性产出保留为未映射覆盖。 | `mass-balance-identity` |
| `validation_data_quality` | 数据包 | 确认每个必需类别都有采集值、带输入的计算值、合理零值或有记录的排除，并披露未关闭的审核事项。 | `fao-sorghum-postharvest-operations`; `ipcc-2019-cropland` |

## 10. 已发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与声明品种或杂交种、终用途路线、地理位置、生产系统、灌溉、作季、水分基准、质量描述以及农场或初级调理门匹配的非种用高粱谷物 |
| excluded_use | 高粱种子；饲草或青贮高粱；面粉、粗粉、麦芽、饮料、乙醇、淀粉、饲料、食品、零售、分销、消费或未限定储存数据集 |
| required_metadata | 经审核的参考流身份；品种或杂交种；终用途路线；地理位置；田块和作季；种子投入状态；生产系统；灌溉；门点；谷物状态；水分和质量描述；合格产出；残余物和拒收物去向；分配；来源和协议覆盖 |
| required_quality_disclosure | 作季；田块和供应方覆盖；原始记录覆盖；质量平衡容差；秤和水分校准；养分和排放方法；水源；能源载体；收获和调理覆盖；门点；排除项；分配和敏感性；身份覆盖和未映射流披露 |
| update_trigger | 门点、谷物状态、水分约定、质量规则、生产路线、灌溉、养分或作物保护实践、调理技术、产出去向、分配方法或代表性发生重大变化 |

## 11. 数据来源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `fao-sorghum-postharvest-operations` | official_guidance | FAO INPhO, *Sorghum: Post-harvest Operations*, <https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_SORGHUM.pdf> | 高粱收获、脱粒、干燥、清理、储存、处理、质量和损失过程分解 |
| `fao-grain-postharvest-systems` | official_guidance | FAO, *Agricultural engineering in development: Grain and post-harvest systems*, <https://www.fao.org/4/t0522e/T0522E03.htm> | 谷物从收获到市场的过程顺序、干燥、清理、储存和门点区分 |
| `usda-sorghum-standards` | official_guidance | USDA Agricultural Marketing Service, *United States Standards for Sorghum*, <https://www.ams.usda.gov/sites/default/files/media/SorghumStandards.pdf> | 高粱谷物质量、等级、异物、损伤和接收描述 |
| `ipcc-2019-cropland` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 5 Cropland, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | 耕地管理、残余物处理、土地和作物管理方法背景 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 受管理土壤氮排放计算和因子选择 |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines* | 分配层级、数据质量和敏感性要求 |
| `mass-balance-identity` | method_factor | 将质量守恒用于作物收获、调理、拒收物、水分和参考流核算的 PCR 计算恒等式。 | 产出核算、归一化和 QA 校验范围 |
