---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.plantains-and-cooking-bananas
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 大蕉和烹调用香蕉

## 1. 范围与适用性

本 PCR 覆盖从已声明的种植园、小农户田块或宿根周期起点，到作物管理、收获、可选的一次分级或清洗，以及在已声明农场门或包装场门交接的鲜食、未加工大蕉和烹调用香蕉。语义重点为大蕉；当声明品种或变种组以及鲜产品状态时，烹调用香蕉也在范围内。前景系统包括跨越已声明边界的外购投入和服务、在门前确定去向的田间残余物和收获废弃物，以及门前使用的可选一次包装。

本 PCR 不包括种植材料生产、干燥、冷冻、烹饪、罐藏、面粉、薯片、泥浆、零售、消费者储存、消费、下游运输、无关土地转化和基础设施建设。清洗、修整、分级、去果梳或一次包装仅可作为门前调理，不得将产品变成加工食品。数据包应说明产品以果穗、果手、散果还是一次包装产品离开边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.plantains-and-cooking-bananas |
| classification_refs | CPC 3.0:01313 Plantains and cooking bananas |
| covered_products | 在已声明农场门或包装场门交付的鲜食、未加工大蕉和烹调用香蕉 |
| excluded_products | 种植材料；加工大蕉或香蕉食品；干燥、冷冻、罐藏、烹饪或碾磨产品；零售和消费者阶段；下游运输；无关土地转化和基础设施 |
| representative_product | 在已声明采收成熟度、等级、修整状态和门状态下的可销售鲜大蕉果实 |
| production_route | 种植园建立或宿根周期更新；营养生长和果穗发育管理；灌溉、养分和作物保护管理；收获；可选分级、清洗、去果梳和一次包装；残余物和废弃物去向记录 |
| market_state | 在农场门或包装场门以果穗、果手、散果、周转箱、纸箱或其他已声明一次包装状态交付的鲜食未加工产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在已声明农场门或包装场门的可销售鲜大蕉和烹调用香蕉 |
| How much | 1,000 kg |
| How well | 鲜食且未加工；声明大蕉或烹调用香蕉的品种或变种组、采收成熟度、尺寸或等级、清洁度、修整或果穗状态、清洗状态、包装状态以及废弃物或残余物去向 |
| How long or cycle | 一个已声明的生产年度或作物周期，包括归属于该周期的全部采收批次；建立期和共享种植园负荷应披露，并分配到已声明的生产周期 |
| reference_flow_link | `plantains_cooking_bananas_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 大蕉和烹调用香蕉 `6f1b8d82-7d01-41ec-953a-c66fe7bf894f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产地理位置；大蕉或烹调用香蕉的品种或变种组；种植园、小农户或多场址路线；建立或宿根状态；植株年龄或周期编号；种植或再生日期；采收日期和批次标识；已声明门；成熟度、尺寸、等级和修整状态；灌溉水源和方法；养分和作物保护依据；清洗和冷却状态；包装状态；田间残余物、废弃物和废水去向 |


构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品、收获批次和门输出 | Mass | kg | 将总采收果实、门交付可销售产品、降级或废弃果实、修整物、田间残余物和有记录的处理损失作为分开的数量进行平衡。 |
| `cycle_normalization` | 种植园、田块、批次和作物周期记录 | Area, time, and mass | ha, year, and kg | 按种植园单元、田块或生产批次记录投入和产出，并归一化到同一生产年度或作物周期归属的可销售产出。 |
| `planting_material_basis` | 吸芽、球茎、组织培养苗和其他建立材料 | Count or mass | plant, sucker, corm, or kg | 保留材料类型和采购批次数量；仅在有文件化供应商或场址换算关系时，才可将计数换算为质量。 |
| `nutrient_product_basis` | 肥料、粪肥、堆肥、覆盖物和其他土壤改良剂 | Product mass and declared nutrient | kg product, kg N, kg P2O5, or kg K2O | 记录实际产品质量，并仅依据标签、供应商规格、养分计划或实验室结果计算养分质量。不得仅依据产品名称推断养分依据。 |
| `water_energy_basis` | 灌溉、清洗、泵送、电力和燃料 | Volume, energy, or fuel | m3, kWh, MJ, or L | 将灌溉水、调理水、外购电力和燃料分别记录，并披露每一个换算或共享设备分配。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已准备的种植园单元或田块接收大蕉或烹调用香蕉种植材料，或进入已声明宿根周期；披露既有土地利用和排除在外的基础设施工作 |
| starting_condition_role | 已声明建立期、生产年度或宿根作物周期核算的起点 |
| product_classification_scope | CPC 3.0:01313 下的鲜大蕉和烹调用香蕉，直至已声明农场门或包装场门 |
| recursive_input_rule | 外购种植材料作为一次上游产品投入关联；除非提供单独的上游数据集，其苗圃、组织培养、吸芽或球茎生产不属于本 PCR。同一 CPC 类别的产品作为投入时，除非有明确上游证据，不得递归展开。 |
| upstream_dataset_requirement | 使用时应要求种植材料、养分和土壤改良产品、作物保护产品、灌溉水、电力、燃料、包装以及外购运输或处理服务的上游数据集。 |
| disclosure | 声明地理位置、生产路线、品种或变种组、建立或宿根状态、植株年龄或周期编号、作物日期、灌溉水源和方法、养分和作物保护计划、收获批次、已声明门、产量和废弃物平衡、清洗和包装、残余物和废水去向，以及共享周期分配。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_crop_cycle` | 建立、宿根更新和作物管理周期 | 纳入已声明的建立或宿根周期更新、作物管理、灌溉、养分和作物保护施用，以及产生已声明鲜产品的周期投入；披露既有土地利用并排除无关基础设施建设。 | `fao-plantain-postharvest-training-manual-1998`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_farm_gate_conditioning` | 收获、分级、清洗和一次包装 | 将前景系统终止于已声明农场门或包装场门；仅当切割、果穗处理、分级、可选清洗和一次包装在该门之前发生时纳入。 | `fao-plantain-postharvest-compendium-2011`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_soil_residue_pathway` | 养分、管理土壤、残余物和废弃物 | 对符合条件的养分投入、管理土壤或残余物路径及废弃物去向采用一种已声明方法；不得重复计算氮路径，也不得在没有记录去向和产品功能时主张残余物信用。 | `ipcc-2019-refinement-afolu`; `fao-plantain-postharvest-training-manual-1998` |
| `boundary_recorded_biosecurity` | 种植材料和田间作业 | 当种植材料来源以及相关作物卫生或生物安全控制影响所代表的作物周期时，应记录它们；处理记录应保留在同一已声明场址范围内。 | `globalgap-ifa-fruit-vegetables-v6` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `plantain_field_establishment` | 大蕉或烹调用香蕉田块建立 | required | 每次代表性种植、补植或已声明种植园单元建立 | 前景种植园建立 | 建立面积和归属的可销售产出 |
| `managed_plantain_crop_cycle` | 大蕉或烹调用香蕉作物管理周期 | required | 每个代表性生产年度或宿根作物周期 | 前景管理型生物生产 | 管理面积和周期收获量 |
| `plantain_harvest_and_gate_handling` | 大蕉收获和农场门处理 | required | 每次代表性收获活动和已声明门 | 前景收获、可选调理、包装和门交接 | 1,000 kg 可销售鲜门输出 |
| `plantain_residue_and_reject_routing` | 大蕉残余物和废弃物去向 | conditional | 在已声明门前发生场内或纳入范围的回收、堆肥、饲料利用、处置或处理 | 前景残余物和废弃物去向 | 范围内记录的残余物、废弃果实、修整物和废水 |

### 过程：大蕉或烹调用香蕉田块建立（`plantain_field_establishment`）

#### 输入

##### 产品流

###### 大蕉或烹调用香蕉种植材料（`planting_material_input`）

种植材料以外购或内部转移的吸芽、球茎、组织培养苗或其他已声明建立材料形式跨越田块建立边界。

- 选定流：大蕉或烹调用香蕉种植材料；
- 流属性/单位：Count or mass / plant, sucker, corm, or kg
- 数量规则：记录每个田块或种植园单元中采购批次数量和实际种植的有效数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 同一作物周期或生产年度归属的可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`fao-plantain-postharvest-training-manual-1998`; `globalgap-ifa-fruit-vegetables-v6`

##### 废物流

##### 基本流

###### 种植园土地占用（`land_occupation`）

记录所代表种植园单元或田块在建立期和已声明作物周期内占用的面积时间。

- 选定流：大蕉或烹调用香蕉种植土地占用；
- 流属性/单位：Area-time / ha*a
- 数量规则：将所代表面积乘以已声明占用期并披露既有土地利用；除非明确在范围内，不纳入无关土地转化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 同一作物周期或生产年度归属的可销售鲜门输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_plantation_register`
- 来源：`fao-plantain-postharvest-training-manual-1998`

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：大蕉或烹调用香蕉作物管理周期（`managed_plantain_crop_cycle`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`managed_plantain_crop_cycle_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 同一作物周期或生产年度归属的可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-refinement-afolu`; `globalgap-ifa-fruit-vegetables-v6`

###### 大蕉作物保护产品（`crop_protection_input`）

记录所代表周期使用的每种作物保护产品或活性成分，包括目标、施用率、施用日期和方法。

- 选定流：大蕉或烹调用香蕉作物保护产品；
- 流属性/单位：Mass of product or active ingredient / kg
- 数量规则：汇总供应商产品数量，并在可用时根据有文件依据的配方计算活性成分质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 同一作物周期或生产年度归属的可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

###### 供应作物灌溉水（`irrigation_water_input`）

记录输送到所代表田块或种植园单元用于作物灌溉的水量。

- 选定流：灌溉水；
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：使用水表、泵、控制器或有文件依据的水平衡记录作物交付水量；保留水源和施用方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 同一作物周期或生产年度归属的可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

###### 田间机械燃料（`field_energy_input`）

记录边界内用于整地、作物作业、泵送和其他作物管理活动的机械和车辆燃料。

- 选定流：田间机械燃料；
- 流属性/单位：Fuel / L or MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：汇总归属于所代表作物周期的燃料发票、储罐记录或机械小时计算，并披露共享设备分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 同一作物周期或生产年度归属的可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

##### 废物流

##### 基本流

###### 灌溉水资源提取（`irrigation_withdrawal`）

当水源和提取位于已声明前景边界内时，记录与交付灌溉水相关的环境水资源提取量。

- 选定流：大蕉灌溉的水资源提取；
- 流属性/单位：Volume / m3
- 数量规则：将水源计量或许可记录与作物交付水量进行平衡，并披露回流水或耗水计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 同一作物周期或生产年度归属的可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

#### 输出

##### 产品流

##### 废物流

###### 作物周期田间残余物（`field_residue_output`）

记录离开作物管理过程并进入田间返回、回收、饲料利用、移除或处置的假茎、叶、果穗梗、田间废果和其他作物残余物。

- 选定流：大蕉或烹调用香蕉田间残余物；
- 流属性/单位：Mass / kg wet or dry material
- 数量规则：按田块或种植园单元测量或计算残余物，并记录已声明去向；不得仅因残余物留在田间就推断其具有生产性利用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 同一作物周期或生产年度归属的可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-plantain-postharvest-training-manual-1998`; `ipcc-2019-refinement-afolu`

##### 基本流

###### 向空气排放的直接氧化亚氮（`direct_n2o_emission`）

使用已声明方法和记录的养分或残余物依据，计算符合条件的养分投入和管理作物残余物产生的直接氧化亚氮排放。

- 选定流：向空气的直接氧化亚氮排放；
- 流属性/单位：Mass / kg N2O
- 数量规则：对有文件依据的养分投入和残余物去向采用一种已声明排放方法，避免重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 同一作物周期或生产年度归属的可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_calculation_records`
- 来源：`ipcc-2019-refinement-afolu`

###### 向空气排放的氨（`ammonia_emission`）

当选定方法支持该路径时，根据有文件依据的养分产品和施用方法计算氨排放。

- 选定流：向空气的氨排放；
- 流属性/单位：Mass / kg NH3
- 数量规则：根据记录的养分形态、施用时间和相关场址条件采用已声明氮排放方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 同一作物周期或生产年度归属的可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_calculation_records`
- 来源：`ipcc-2019-refinement-afolu`

###### 向水体排放的硝酸盐（`water_nitrate_emission`）

仅当前景数据包提供有文件依据的排水、淋失、径流或场址特定排放基础时，计算向水体的硝酸盐损失。

- 选定流：向水体的硝酸盐排放；
- 流属性/单位：Mass / kg nitrate
- 数量规则：根据记录的养分投入、接收介质和有文件依据的损失路径采用已声明氮损失方法；不得指定无依据的默认排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 同一作物周期或生产年度归属的可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_calculation_records`
- 来源：`ipcc-2019-refinement-afolu`

### 过程：大蕉收获和农场门处理（`plantain_harvest_and_gate_handling`）

#### 输入

##### 产品流

###### 收获和门处理燃料（`harvest_energy_input`）

记录在交接前跨越已声明前景边界的收获设备、内部运输和门处理燃料。

- 选定流：收获和门处理燃料；
- 流属性/单位：Fuel / L or MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：汇总归属于收获活动的发票、储罐记录或设备记录，并披露共享设备分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_handling_records`
- 来源：`fao-plantain-postharvest-compendium-2011`; `globalgap-ifa-fruit-vegetables-v6`

###### 调理水（`conditioning_water_input`）

仅当清洗或其他一次调理发生在已声明门之前时，记录调理水。

- 选定流：一次调理水；
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：汇总水表或批次记录，并披露循环使用、处理和排放去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water_records`
- 来源：`fao-plantain-postharvest-compendium-2011`

###### 一次包装（`primary_packaging_input`）

记录已声明门前使用的一次包装，包括材料、质量或件数、重复使用状态和损耗。

- 选定流：鲜大蕉或烹调用香蕉一次包装；
- 流属性/单位：Mass or packaging service / kg or item
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`pallet-and-crate-packaging`
- 数量规则：记录代表性收获活动的包装质量或件数、容量、皮重、重复使用次数和损失率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售鲜大蕉或烹调用香蕉门输出（`marketable_output`）

记录以鲜食、未加工的可销售大蕉或烹调用香蕉形式跨越已声明门的产品。

- 选定流：已声明门的鲜大蕉和烹调用香蕉；
- 流属性/单位：Mass / kg
- 数量规则：在门处按批次称量可销售输出，并保留成熟度、等级、修整、包装和批次标识。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 可销售鲜门产品的参考输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 来源：`fao-plantain-postharvest-compendium-2011`

##### 废物流

###### 收获废弃物和修整物（`rejected_fruit_output`）

记录按收获批次产生的降级、废弃、修整、损伤或其他被排除在可销售门输出之外的果实及其去向。

- 选定流：大蕉或烹调用香蕉收获废弃物和修整物；
- 流属性/单位：Mass / kg wet material
- 数量规则：按收获批次称量或计算废弃和修整物，并与总采收果实和可销售输出进行平衡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-plantain-postharvest-compendium-2011`

###### 调理废水（`conditioning_wastewater_output`）

记录已声明门前可选清洗或调理产生的废水，包括处理或排放去向。

- 选定流：一次调理废水；
- 流属性/单位：Volume / m3
- 数量规则：记录废水量和处理或排放去向；仅当处理发生在已声明系统内时，才使用处理服务投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water_records`
- 来源：`fao-plantain-postharvest-compendium-2011`

##### 基本流

### 过程：大蕉残余物和废弃物去向（`plantain_residue_and_reject_routing`）

#### 输入

##### 产品流

##### 废物流

###### 作物残余物和收获废弃物原料（`residue_reject_input`）

记录在已声明门前进入单独建模的回收、堆肥、饲料利用、处理或处置路线的田间残余物和收获废弃物。

- 选定流：大蕉或烹调用香蕉残余物和废弃物；
- 流属性/单位：Mass / kg wet or dry material
- 数量规则：关联来源田块或收获记录，并保留湿基或干基以及去向。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-plantain-postharvest-training-manual-1998`; `ipcc-2019-refinement-afolu`

##### 基本流

#### 输出

##### 产品流

###### 回收有机材料（`recovered_organic_material_output`）

仅当有文件依据的去向和产品功能支持将其作为产品输出时，记录回收堆肥、覆盖物、饲料材料或其他产品。

- 选定流：大蕉残余物或废弃物回收的有机材料；
- 流属性/单位：Mass / kg wet or dry material
- 数量规则：测量回收输出，并记录去向、质量、预期用途以及任何分配或替代声明；否则将其保留为废物流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`ipcc-2019-refinement-afolu`

##### 废物流

###### 残余物和废弃物处置（`residue_disposal_output`）

记录在已声明边界内送往处置、无管理腐解或其他非产品去向的残余物或废弃物。

- 选定流：大蕉残余物和废弃物处置废物；
- 流属性/单位：Mass / kg wet or dry material
- 数量规则：在扣除有记录的回收和其他去向后，将处置量与残余物和废弃物投入进行平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`ipcc-2019-refinement-afolu`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_cycle_burden` | 建立、宿根更新和共享种植园服务 | 使用一种已声明的物理依据，将共享建立和种植园负荷分配到已声明的生产周期，优先使用归属的可销售产出质量或面积时间；披露依据和任何排除的闲置期。 | `fao-plantain-postharvest-training-manual-1998`; `globalgap-ifa-fruit-vegetables-v6` |
| `allocation_mixed_cultivar_output` | 同时产出大蕉和烹调用香蕉的田块或收获活动 | 在记录允许时分开保留品种或变种组和市场状态。若共享操作无法分开，则按记录的可销售产出质量分配，并报告混合产出条件。 | `fao-plantain-postharvest-compendium-2011` |
| `allocation_residue_recovery` | 回收有机材料、饲料利用、堆肥或覆盖物 | 不得为田间返回、无管理腐解或无文件依据的利用分配共产品信用。回收产品需要测量的输出、有文件依据的去向和功能，以及已声明的分配或替代规则。 | `ipcc-2019-refinement-afolu` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_plantation_register` | `plantain_field_establishment` | `land_occupation` | 田块和种植园登记 | 田块面积；土地利用历史；种植或再生日期；生产期 | 调查、农场登记和有日期的田间记录 | ha, date, year | 每田块和周期 | 完整代表性周期 | 每个代表性田块或种植园单元 | 面积乘以已声明占用时间并关联到产出 | 田图、有日期登记和场址审查 |
| `cp_establishment_records` | `plantain_field_establishment` | `planting_material_input` | 供应商发票和种植日志 | 材料类型；供应商；批次；采购数量；种植有效数量；种植日期 | 发票审查和田间种植日志 | plant, sucker, corm, or kg | 每批次和种植事件 | 建立或更新期间 | 每个田块或种植园单元 | 汇总有效种植数量并单独保留废弃数量 | 发票、批次记录和种植日志 |
| `cp_nutrient_records` | `managed_plantain_crop_cycle` | `nutrient_amendment_total_input` | 养分计划、发票和施用日志 | 产品说明；质量；养分标签或检测；日期；田块；施用方法 | 文件审查和施用记录 | kg product, kg N, kg P2O5, or kg K2O | 每次施用 | 完整代表性周期 | 每个田块或种植园单元 | 汇总产品质量并按有文件依据的浓度计算养分基础 | 发票、产品标签或实验室结果及施用日志 |
| `cp_crop_protection_records` | `managed_plantain_crop_cycle` | `crop_protection_input` | 作物保护登记 | 产品；活性成分；剂量；面积；日期；目标；方法 | 处理日志和供应商记录审查 | kg product or kg active ingredient | 每次处理 | 完整代表性周期 | 每个田块或种植园单元 | 按田块和周期汇总产品与活性成分数量 | 处理日志、产品标签和施药人记录 |
| `cp_irrigation_records` | `managed_plantain_crop_cycle` | `irrigation_water_input; irrigation_withdrawal` | 水表、泵、许可或水平衡记录 | 水源；交付量；提取量；回流水；日期；田块；方法 | 读表或有文件依据的水平衡 | m3 | 每个灌溉期 | 完整代表性周期 | 每个灌溉水源和田块 | 平衡提取、交付、回流和作物分配 | 水表校准、许可或水平衡工作表 |
| `cp_field_energy_records` | `managed_plantain_crop_cycle` | `field_energy_input` | 燃料和设备记录 | 燃料类型；数量；设备；作业；日期；田块；共享使用依据 | 发票、储罐、水表或机械小时记录 | L or MJ | 每次作业或每月 | 完整代表性周期 | 每个田块和共享设备池 | 汇总直接使用量，并按已声明物理依据分配共享使用量 | 发票、储罐日志和设备登记 |
| `cp_harvest_handling_records` | `plantain_harvest_and_gate_handling` | `harvest_energy_input` | 收获和内部物流记录 | 燃料或电力；设备；收获批次；日期；数量；共享使用依据 | 收获日志、计量或发票审查 | L, MJ, or kWh | 每次收获活动 | 周期内全部收获 | 每次收获活动和门 | 汇总活动投入并将共享处理分配到可销售输出 | 批次登记、发票和设备记录 |
| `cp_conditioning_water_records` | `plantain_harvest_and_gate_handling` | `conditioning_water_input; conditioning_wastewater_output` | 清洗批次和废水记录 | 批次；投入量；循环使用；废水量；处理或排放去向；日期 | 水表或批次日志和处理记录 | m3 | 每批次或每天 | 全部门前调理 | 每个包装或调理点 | 汇总新鲜水和废水并记录循环使用 | 水表、批次表和处理或排放记录 |
| `cp_packaging_records` | `plantain_harvest_and_gate_handling` | `primary_packaging_input` | 包装库存和发运记录 | 材料；皮重；件数；容量；重复使用次数；损失；收获批次 | 库存平衡和发运记录 | kg or item | 每次活动或每月 | 全部门前包装 | 每个包装点 | 平衡发出、使用、退回和损失的包装 | 采购记录、库存盘点和批次记录 |
| `cp_harvest_output_records` | `plantain_harvest_and_gate_handling` | `marketable_output` | 收获、分级和门称重记录 | 批次；品种；成熟度；等级；总质量；可销售质量；门日期；门状态 | 地磅、秤和批次记录 | kg | 每批次 | 周期内全部收获 | 每个门和收获批次 | 汇总可销售产出并保留等级和状态限定信息 | 经校准的秤、批次登记和发运记录 |
| `cp_residue_and_reject_records` | `managed_plantain_crop_cycle; plantain_harvest_and_gate_handling; plantain_residue_and_reject_routing` | `field_residue_output; rejected_fruit_output; residue_reject_input; recovered_organic_material_output; residue_disposal_output` | 残余物和废弃物去向记录 | 材料；湿基或干基；数量；来源；去向；回收；处置；日期 | 田间估算、称重、去向凭证或处理记录 | kg wet or dry material | 每次事件或收获批次 | 完整代表性周期 | 每个田块、门和去向点 | 将所有残余物和废弃物去向与记录的产生量平衡 | 田间日志、秤、凭证和去向声明 |
| `cp_emission_calculation_records` | `managed_plantain_crop_cycle` | `direct_n2o_emission; ammonia_emission; water_nitrate_emission` | 计算工作表 | 养分基础；残余物基础；方法；场址因子；接收介质；结果 | 使用一种已声明方法进行有文件依据的计算 | kg N2O, kg NH3, or kg nitrate | 每周期或方法更新 | 完整代表性周期 | 每个田块或生产单元 | 每条路径仅计算一次并关联贡献记录 | 输入记录、方法版本和复核记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_output_normalization` | all inventory rows | 归一化数量 = 记录数量 × 1,000 kg / 可销售鲜门输出（kg） | 记录数量；可销售门输出 | 每 1,000 kg 参考输出的数量 | `fao-plantain-postharvest-compendium-2011` |
| `calc_nutrient_basis` | `nutrient_amendment_total_input` | 养分质量 = 有文件依据的产品质量 × 有文件依据的养分比例；产品质量和养分基础作为分开的字段保留 | 产品质量；标签、供应商规格、养分计划或实验室结果 | kg product and kg nutrient basis | `ipcc-2019-refinement-afolu` |
| `calc_cycle_allocation` | 共享建立、机械、灌溉、能源和调理记录 | 分配数量 = 共享记录 × 已声明物理分配比例；使用可销售产出质量或面积时间，并披露选择 | 共享记录；分配依据；产品或周期产出 | 作物周期数量 | `globalgap-ifa-fruit-vegetables-v6` |
| `calc_harvest_reconciliation` | `marketable_output; rejected_fruit_output; field_residue_output` | 总记录收获量 = 可销售输出 + 废弃或修整果实 + 田间残余物或其他有记录损失；调查无法解释的差额 | 批次重量；残余物和废弃物记录；损失记录 | 平衡后的收获和损失 | `fao-plantain-postharvest-compendium-2011` |
| `calc_water_reconciliation` | `irrigation_water_input; irrigation_withdrawal` | 水源提取量 = 灌溉交付量 + 有记录回流水 + 有记录输配损失；仅使用实测或已声明场址因子 | 水源表；交付表；回流水；损失因子 | 灌溉交付量和提取量 | `globalgap-ifa-fruit-vegetables-v6` |
| `calc_emission_pathway` | soil, nutrient, residue, and water-emission rows | 对有文件依据的投入和接收介质基础采用一种已声明排放方法；不得合并重叠的默认因子 | 养分和残余物记录；方法；场址因子 | 分路径基本流数量 | `ipcc-2019-refinement-afolu` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | reference flow and all inventory rows | 声明大蕉或烹调用香蕉的品种或变种组、过程角色、门、方向、流类型；无可用审查身份时声明身份证据记录。 | 批次记录、过程说明和身份证据缺口覆盖审查 |
| `quality_completeness` | all required and conditional processes | 纳入每个必需过程；当门前发生调理、包装和残余物去向活动时，启用相应条件性流卡。 | 过程图、活动清单和场址边界审查 |
| `quality_temporal_geographic` | all collected records | 覆盖完整的已声明作物周期或生产年度，并标识地理位置、田块、种植园单元、收获批次和门。 | 田间登记、有日期记录和生产年度声明 |
| `quality_measurement_traceability` | measured quantities | 为质量、水、能源、养分和包装保留来源记录、校准或核查证据、单位换算和分配工作表。 | 发票、水表、秤、实验室或标签证据及工作表 |
| `quality_reconciliation` | output, residue, reject, water, and wastewater rows | 平衡投入和去向，并在发布前调查无法解释的重大差异。 | 平衡工作表和复核签字 |
| `quality_method_disclosure` | calculated emissions and recovered products | 披露所选方法、版本、投入依据、接收介质、产品功能以及任何分配或替代声明。 | 计算工作表、方法引用、去向记录和复核说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_qualifiers` | reference flow and dataset metadata | 若数据集缺失本 PCR 要求的产品组、生产地理位置、周期或年度、门、成熟度或等级以及产品状态限定信息，则拒绝该数据集。 | `fao-plantain-postharvest-compendium-2011`; `globalgap-ifa-fruit-vegetables-v6` |
| `validation_identity_coverage` | all flow cards | 仅当 Flow Set 组在语义上覆盖该流卡时接受参数化 Flow Set。对于每个未覆盖流，要求后续验证身份或保留明确的未映射覆盖发现；不得替换为相近产品身份。 | `ipcc-2019-refinement-afolu` |
| `validation_process_completeness` | process map and conditional rows | 检查全部四个过程节点，在活动发生时启用条件性流卡，并确保每个活动流卡具有方向、流类型、数量规则、数值来源模式、适用范围、基准、证据类型、适用时的采集协议以及来源或明确证据缺口状态。 | `globalgap-ifa-fruit-vegetables-v6` |
| `validation_reconciliation` | output, residue, reject, irrigation, and conditioning records | 要求收获、废弃物、残余物、水和废水平衡；对无法解释的重大差异或重复计算的排放路径判定失败。 | `fao-plantain-postharvest-compendium-2011`; `ipcc-2019-refinement-afolu` |
| `validation_boundary` | dataset scope and downstream use | 确认数据集终止于已声明农场门或包装场门，且除非另有数据集单独声明，不含门后运输、零售、消费者或加工食品活动。 | `fao-plantain-postharvest-training-manual-1998` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查的鲜大蕉或烹调用香蕉生产数据集的 secondary_dataset；仅当已记录门和数据质量适合该用途时，才可作为 background_dataset |
| downstream_use | 用于构建已声明农场门或包装场门的鲜食、未加工大蕉或烹调用香蕉产品系统、过程和生命周期模型 |
| allowed_use | 当披露地理位置、品种或变种组、作物周期、门、产品状态、清单覆盖范围和身份证据缺口发现时，用于比较性或归因性建模 |
| excluded_use | 超出已声明边界的加工食品、干燥、冷冻、烹饪、零售、消费者阶段、门后物流或场址声明；没有有文件依据的功能和分配时，不得使用替代或残余物信用 |
| required_metadata | CPC 3.0:01313；产品组；地理位置；农场或包装场门；作物年度或周期；田块和种植园范围；品种或变种组；成熟度和等级；生产路线；产量；养分、水、能源、作物保护、残余物、废弃物、调理和包装记录；身份和方法状态 |
| required_quality_disclosure | 时间和地理覆盖、完整性、计量可追溯性、分配依据、计算方法、条件性过程启用情况、身份证据缺口和平衡结果 |
| update_trigger | 新的生产路线、品种或变种组、门条件、养分或灌溉实践、残余物或调理路径、材料身份、方法版本或重大质量发现 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-plantain-postharvest-compendium-2011` | official_guidance | FAO, *Post-harvest compendium: Plantain*, official PDF: https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Plantain.pdf | 大蕉收获、产品状态、采后处理、分级和门前调理范围 |
| `fao-plantain-postharvest-training-manual-1998` | official_guidance | FAO, *Prevention of post-harvest food losses: fruits, vegetables and root crops*, plantain crop profile: https://www.fao.org/4/t0073e/T0073E07.htm | 大蕉生产和收获背景、产品排除项以及残余物或废弃物边界决策 |
| `ipcc-2019-refinement-afolu` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines*, Volume 4 AFOLU: https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤、养分、残余物和排放计算方法要求 |
| `globalgap-ifa-fruit-vegetables-v6` | extension_guidance | GLOBALG.A.P., *Integrated Farm Assurance for fruit and vegetables*, IFA v6: https://globalgap.org/what-we-offer/solutions/ifa-fruit-and-vegetables/ | 农场记录、可追溯性、投入记录、作物周期数据质量和果蔬门控制 |
