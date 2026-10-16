---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.jellyfish-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水母，活、鲜或冷藏

## 1. 范围与适用性

本 PCR 用于构建以活、鲜或冷藏状态上市的水母前景数据包。它覆盖声明的捕捞或采集、船上分选、发生时的沥水、活体暂养或冷藏保持、上岸、分级、发生时的清洗、包装、加冰或温度控制、发运和在声明边界的放行。

覆盖产品包括以活、鲜或冷藏状态销售，并仍属于未加工初级水生无脊椎动物产品的食用或工业用途水母。排除产品包括观赏用活水母，冷冻水母，熏制、干制、盐渍、盐水浸渍、明矾腌制、发酵、熟制、罐装、预制、保藏、提取或其他加工水母产品，以及水母类别以外的其他水生无脊椎动物。

数据集必须保留短货架期湿产品状态。如果盐渍、明矾处理、干制、冷冻或其他保藏改变了产品身份，这些过程属于其他 PCR，或必须作为该参考产品之外的下游加工建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.jellyfish-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04530`, `Jellyfish, live, fresh or chilled` |
| covered_products | 作为未加工初级水生无脊椎动物产品被捕捞、采集、上岸、分选、活体暂养、鲜售或冷藏的水母 |
| excluded_products | 观赏用活水母；冷冻水母；熏制、干制、盐渍、盐水浸渍、明矾腌制、发酵、熟制、罐装、预制、保藏、提取或其他加工水母；非水母类水生无脊椎动物；作为单独产品的残余物、修整物、废水或剔除生物量 |
| representative_product | 在声明物种或物种组、捕捞区域、产品状态、湿质量基准、处理条件、包装状态和声明边界下的活、鲜或冷藏水母 |
| production_route | 野外捕捞或采集、船上分选或沥水、上岸、分级、发生时的清洗、活体或冷藏暂养、包装、加冰或温控，以及声明边界放行 |
| market_state | 已声明物种、捕捞区域、渔具或采集方法、上岸条件、沥水或湿质量基准、产品温度或活体暂养条件、包装状态和边界的活、鲜或冷藏水母 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为活、鲜或冷藏初级产品的水母 |
| How much | 1 kg |
| How well | 声明物种或物种组、活/鲜/冷藏状态、湿或沥水质量基准、捕捞区域、处理条件、包装状态和边界 |
| How long or cycle | 一个捕捞航次、上岸批次、处理批次、销售批次或报告期，并归一化至可销售水母产出 |
| reference_flow_link | `declared_gate_product` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 水母 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种或物种组；捕捞或采集区域；野外捕捞、采集或声明生产路线；渔具或采集方法；上岸地点；活、鲜或冷藏状态；湿、沥水、整只、伞部、口腕或声明产品基准；可获得时的水分或沥水基准；暂养时长和温度或活体暂养条件；包装状态；声明边界；已知时的食品、饲料、工业或其他声明用途；捕捞文件、许可、可追溯性和未解决的 Tiangong UUID 替代项 |

构建前景数据包时，`Required qualifiers` 中列出的项目必须在数据集元数据、过程说明、参考流注释、产品描述或等效字段中声明。

质量是主要参考基准。篮、桶、周转箱、袋、箱、计数、体积或航次记录只有在保留净质量、皮重、沥水方法、产品状态和抽样方法时，才可使用。

每个数据包须在采集前锁定一个物理参考对象：单一物种或经证实同一物理商品的物种组、单一来源/生产路线、形态、实际生命/处理状态、含水/沥水基准、等级及唯一门的位置/时间/接收条件。不得把不同物种、活与死亡、鲜与冷藏、原始与整理态或不同门混入同一参考交换；不确定项未落实时数据包不完整。各阶段是同一批对象的实测状态，不等于最终1 kg。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示为声明活、鲜或冷藏产品形态下的水母 kg。 |
| `product_state_identity` | all datasets | Product state and handling evidence | declared records | 产品记录必须证明活、鲜或冷藏状态，不得将冷冻、干制、盐渍、盐水浸渍、明矾腌制、预制或保藏水母与参考产品混合。 |
| `wet_drained_mass_basis` | live, fresh, chilled, washed, drained, or iced records | Mass and drainage basis | kg | 产品质量必须说明湿整只质量、沥水质量、伞部质量、口腕质量、不含冰质量或其他声明基准。只有在有实测沥水或得率证据时才可换算。 |
| `catch_lot_identity` | harvest, landing, sorting, and sales records | Mass, count, or volume | kg, item, basket, tub, crate, or m3 | 捕捞记录必须保留物种或物种组、捕捞区域、渔具或采集方法、船舶或采集者、航次、批次、上岸日期、接受质量、剔除质量和已知时的预期用途。 |
| `water_temperature_and_holding` | washing, live holding, chilled holding, and discharge | Temperature, salinity, mass, or volume | deg C, ppt, kg, or m3 | 保留水源、受控水量、相关盐度、温度、暂养时间、沥水和排放基准。环境海水属于边界条件，除非在前景控制下被泵送、处理、交换或排放。 |
| `energy_fuel_and_ice_inventory` | vessel operation, landing, live holding, chilling, ice making or use, cold rooms, and dispatch | Energy, fuel, or mass | kWh, MJ, L, or kg | 在归一化到参考流前记录电力、燃料、冰和能源载体的原始单位。 |
| `packaging_basis` | baskets, tubs, crates, sacks, liners, labels, insulated containers, ice boxes, and pallets | Mass or item count | kg or item | 包装和容器必须在归一化前保留材料类型、件数、皮重或装填质量、重复使用率和目的地。 |

## 5. 系统边界

默认边界覆盖前景控制的水母捕捞或采集，直到声明的上岸、处理、发运、包装场或交付边界：

1. 捕鱼、捕捞或采集，包括船舶或采集者活动、渔具作业、捕获物处理、兼捕或非目标物料处理，以及发生时的船上沥水或分选。
2. 上岸、分级、发生时的清洗、活体暂养或冷藏暂养、沥水、剔除、残余物处理、温度控制、加冰、包装和声明边界放行。
3. 当参考流是超过上岸、发运或包装场边界的交付产品时，包括交付到声明边界。

资本品和长期船舶、渔具、暂养池、冷库和基础设施只有在声明数据包范围要求时才纳入。购买的冰、包装、电力、燃料、水、活体暂养氧气和运输服务需要上游数据集，除非同一运营方控制并在前景包中报告其生产。

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_jellyfish_harvest_or_collection_lot |
| starting_condition_role | wild_aquatic_invertebrate_lot_identity_and_product_state |
| product_classification_scope | current CPC 3.0 product category `04530`, `Jellyfish, live, fresh or chilled` |
| recursive_input_rule | 作为活、鲜或冷藏市场产品投入的捕捞或采集水母，记录为声明捕捞或采集批次，并披露区域、渔具、船舶或采集者、物种、产品状态和质量基准，而不是递归记录为成品参考产品输出 |
| upstream_dataset_requirement | 捕鱼或采集航次记录、供应方捕捞记录、上岸文件、许可或可追溯性证据，以及前景控制之外的包装、冰、燃料、电力、水和交付数据集 |
| disclosure | 披露物种或物种组、捕捞或采集区域、渔具或采集方法、船舶或采集者、上岸地点、活/鲜/冷藏状态、湿或沥水质量基准、分选和剔除、清洗或活体暂养水、温度或用冰、暂养时长、包装状态、已知时的预期用途、声明边界，以及未解决的 Tiangong UUID 替代项 |

## 6. 过程清单结构

真实路线由事件和交接记录确定。最终声明门为唯一参考输出责任节点，承接实际最后一个前序节点；门在上岸时，后续整理及运输绕过；门在整理出货时，运输绕过；门在送达时，运输接收量先实测，再由最终门验收。任何未明确的实际路线/门均不得默认选择。

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `harvest_collection_and_landing` | 捕捞、采集及上岸 | required | 须有实际来源/生产路线证据 | 实际事件/交接及资源所有权 | 每 1 kg 参考流 |
| `sorting_holding_chilling_and_packout` | 分选、活体维持、冷藏及包装出货 | conditional | 仅实际门前整理；上岸门或无整理时绕过 | 实际事件/交接及资源所有权 | 每 1 kg 参考流 |
| `delivery_to_declared_gate` | 向声明门配送 | conditional | 仅所选门前实际配送；选择未知则失败 | 实际事件/交接及资源所有权 | 每 1 kg 参考流 |
| `declared_gate_release` | 最终声明门验收与放行 | required | 一个声明门接收实际最后前序节点；参考输出唯一 | 实际事件/交接及资源所有权 | 每 1 kg 参考流 |

### 过程：捕捞、采集及上岸 (`harvest_collection_and_landing`)

#### 输入

##### 产品流

###### 条件性柴油输入 (`source_diesel`)

仅在该节点实际使用时记录，非默认投入；核实供应、组成/纯度与用途，保持各自实测原生数量及同批次最终门基准，完整服务与自有组成互斥。该 UUID 仅确认柴油质量身份，未给出牌号、供应商、密度、热值或排放因子；L 转 kg 需匹配密度证据。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_harvest_collection_and_landing_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_collection_and_landing_records`

###### 条件性冰输入 (`source_ice`)

仅在该节点实际使用时记录，非默认投入；核实供应、组成/纯度与用途，保持各自实测原生数量及同批次最终门基准，完整服务与自有组成互斥。具体 UUID 尚待核实；活体状态不得因使用介质名称而默认成立。

- 选定流：冰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_harvest_collection_and_landing_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_collection_and_landing_records`

#### 输出

##### 产品流

###### 已接受来源批次向下一实际责任转移 (`accepted_landed_jellyfish`)

逐批记录物种、来源、原始形态/状态和接受净质量；此来源阶段量独立实测，配对下一真实接收。上岸UUID只有在原始捕获物/上岸品质限定匹配时适用，不能替代后续加工或最终交付门身份。

- 选定流：水母，活的，新鲜的或冷藏的 `f60402c9-806e-430e-bc77-851e2ff4dc59`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_harvest_collection_and_landing_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_collection_and_landing_records`

##### 基本流

###### 实际前景化石源二氧化碳排至未细分空气 (`source_fossil_co2`)

只包括该节点实际直接化石燃料燃烧的空气排放；采用实测量或明确燃料/发动机/单位相容的有来源因子计算，记录氧化、控制及不确定性。不包括动物呼吸、溶解到水中的碳或供应商已覆盖排放；其他实际污染物另按具体物质/环境补充。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_harvest_collection_and_landing_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_collection_and_landing_records`


### 过程：分选、活体维持、冷藏及包装出货 (`sorting_holding_chilling_and_packout`)

#### 输入

##### 产品流

###### 来源批次整理接收 (`accepted_jellyfish_entering_final_handling`)

与实际上游转移配对，保留原始接收状态及独立实测质量；只在此门前节点实际存在时激活。

- 选定流：水母，活的，新鲜的或冷藏的 `f60402c9-806e-430e-bc77-851e2ff4dc59`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_packout_product_state_and_mass_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packout_product_state_and_mass_records`

###### 条件性电力输入 (`preparation_electricity`)

仅在该节点实际使用时记录，非默认投入；核实供应、组成/纯度与用途，保持各自实测原生数量及同批次最终门基准，完整服务与自有组成互斥。

- 选定流：电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：依据 cp_packaging_ice_chilling_and_dispatch_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_ice_chilling_and_dispatch_records`

###### 条件性冰输入 (`preparation_ice`)

仅在该节点实际使用时记录，非默认投入；核实供应、组成/纯度与用途，保持各自实测原生数量及同批次最终门基准，完整服务与自有组成互斥。具体 UUID 尚待核实；活体状态不得因使用介质名称而默认成立。

- 选定流：冰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_packaging_ice_chilling_and_dispatch_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_ice_chilling_and_dispatch_records`

###### 条件性气态氧输入 (`preparation_oxygen`)

仅在该节点实际使用时记录，非默认投入；核实供应、组成/纯度与用途，保持各自实测原生数量及同批次最终门基准，完整服务与自有组成互斥。具体 UUID 尚待核实；活体状态不得因使用介质名称而默认成立。

- 选定流：气态氧
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_packaging_ice_chilling_and_dispatch_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_ice_chilling_and_dispatch_records`

#### 输出

##### 产品流

###### 整理后产品向最后实际节点转移 (`marketable_live_fresh_or_chilled_jellyfish`)

采用整理后独立实测的同批次产品质量、形态、生命/处理状态与含水基准，保留拒收、组织/水分变化和损失。不得固定为参考1 kg；当配送不存在时转交最终门，有配送时转交配送。

- 选定流：水母
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_packout_product_state_and_mass_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packout_product_state_and_mass_records`

##### 基本流

###### 实际前景化石源二氧化碳排至未细分空气 (`preparation_fossil_co2`)

只包括该节点实际直接化石燃料燃烧的空气排放；采用实测量或明确燃料/发动机/单位相容的有来源因子计算，记录氧化、控制及不确定性。不包括动物呼吸、溶解到水中的碳或供应商已覆盖排放；其他实际污染物另按具体物质/环境补充。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_packaging_ice_chilling_and_dispatch_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_ice_chilling_and_dispatch_records`


### 过程：向声明门配送 (`delivery_to_declared_gate`)

#### 输入

##### 产品流

###### 产品配送接收 (`delivery_product_receipt`)

仅当此具体交换在该节点实际发生且由前景负责时采集，供应商完整服务已覆盖的组成不得重复。实际未分配数量和原生单位须单独保留；不得复制任何集合总量或范围。

- 选定流：水母
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_delivery_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_delivery_records`

###### 条件性柴油输入 (`delivery_diesel`)

仅在该节点实际使用时记录，非默认投入；核实供应、组成/纯度与用途，保持各自实测原生数量及同批次最终门基准，完整服务与自有组成互斥。该 UUID 仅确认柴油质量身份，未给出牌号、供应商、密度、热值或排放因子；L 转 kg 需匹配密度证据。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_delivery_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_delivery_records`

###### 条件性电力输入 (`delivery_electricity`)

仅在该节点实际使用时记录，非默认投入；核实供应、组成/纯度与用途，保持各自实测原生数量及同批次最终门基准，完整服务与自有组成互斥。

- 选定流：电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：依据 cp_delivery_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_delivery_records`

###### 条件性冰输入 (`delivery_ice`)

仅在该节点实际使用时记录，非默认投入；核实供应、组成/纯度与用途，保持各自实测原生数量及同批次最终门基准，完整服务与自有组成互斥。具体 UUID 尚待核实；活体状态不得因使用介质名称而默认成立。

- 选定流：冰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_delivery_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_delivery_records`

###### 条件性气态氧输入 (`delivery_oxygen`)

仅在该节点实际使用时记录，非默认投入；核实供应、组成/纯度与用途，保持各自实测原生数量及同批次最终门基准，完整服务与自有组成互斥。具体 UUID 尚待核实；活体状态不得因使用介质名称而默认成立。

- 选定流：气态氧
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_delivery_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_delivery_records`

#### 输出

##### 产品流

###### 送达产品向最终门验收转移 (`delivered_jellyfish_at_declared_gate`)

逐实际路线独立称量送达产品，扣除可分离货载水、冰与包装皮重，保留途中损失、状态和水分变化；随后最终门另行验收。此内部交接量不是固定参考输出。

- 选定流：水母
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_delivery_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_delivery_records`

##### 基本流

###### 实际前景化石源二氧化碳排至未细分空气 (`delivery_fossil_co2`)

只包括该节点实际直接化石燃料燃烧的空气排放；采用实测量或明确燃料/发动机/单位相容的有来源因子计算，记录氧化、控制及不确定性。不包括动物呼吸、溶解到水中的碳或供应商已覆盖排放；其他实际污染物另按具体物质/环境补充。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_delivery_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_delivery_records`


### 过程：最终声明门验收与放行 (`declared_gate_release`)

#### 输入

##### 产品流

###### 实际最后前序节点的产品接收 (`declared_gate_receipt`)

只接收实际最后前序节点：上岸/接收、整理出货或送达三者中由真实门界定的一处。记录前序转移ID、净产品质量、状态和损失，不能把不同路线相加。

- 选定流：水母
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_declared_gate 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_declared_gate`

#### 输出

##### 产品流

###### 唯一声明门参考产品 (`declared_gate_product`)

唯一最终参考输出；声明门的同批次实测净验收质量 Q 为正，排除独立包装皮重和游离载体水/冰。该恒等式不证明存活、产率或上游内部流量。

- 选定流：水母
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`identity_reference`
- 采集协议：`cp_declared_gate`
- 数量范围：最终参考归一化恒等式，不是产率或经验区间
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

## 7. 分配与共产品处理

| allocation_id | Applies to | Rule | Required data | Source |
| --- | --- | --- | --- | --- |
| `single_reference_product_default` | 唯一声明门参考产品与全部其他预期输出 | 最终参考输出始终唯一；逐实际物种、形态、状态和去向列出有意接受的其他产品与其独立交接，不能因兼捕、死亡或残余物存在便自动认定共产品。先实测细分/直接归属，残余共享负担才按有因果依据的物理关系，物理依据不足时按经说明的经济关系并作敏感性分析；不能分配改变物理质量。 | 各预期输出、真实接受/市场、交接、专属与共享活动、驱动及价格/期间证据 | `mass-balance-identity` |
| `bycatch_and_reject_handling` | bycatch, non-target material, rejected jellyfish, and residues | 不得通过把兼捕、剔除、沥水或残余物排除在前景包之外来分摊掉这些负荷。记录去向，并且只有在记录了回收共产品时才分配。 | 兼捕质量、剔除质量、沥水或废水、目的地、处置或回收路线 | `brotz-pauly-jellyfish-fisheries-2017` |
| `shared_trip_and_landing_allocation` | multi-species trips or shared landing services | 共享船舶燃料、渔具服务、上岸能源、水、冰和包装，应先按直接计量、航次日志、捕获质量、暂养时间、包装件数或其他声明物理驱动因子分配，再使用经济分配。 | 航次记录、按物种上岸质量、服务日志、包装件数、暂养时间和分配驱动因子 | `mass-balance-identity` |
| `delivery_allocation` | mixed-product delivery | 交付燃料、冰、活体暂养、制冷和可重复使用包装负荷按产品质量、包装件数、行程、温控区域或 tonne-km 分配。 | 发运记录、包装件数、装载质量、距离、温度条件和返程物流 | `codex-cxc-52-2003` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_harvest_collection_and_landing_records` | `harvest_collection_and_landing` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 物种、捕捞区域、渔具、船舶/采集者、航次/日期、毛重/皮重/捕获及接受上岸量、兼捕/拒收与去向、船上沥水/冰/水、实际适用的许可/追溯; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_packout_product_state_and_mass_records` | `sorting_holding_chilling_and_packout` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 实际分选、表面清洗、沥水、活体维持或冷藏、生命/温度/盐度/时长、游离水冰/皮重、来源/处理产品状态及配对交接、各水/冰/氧/化学品组成与容器件数/皮重/复用; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_packaging_ice_chilling_and_dispatch_records` | `sorting_holding_chilling_and_packout` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 实际分选、表面清洗、沥水、活体维持或冷藏、生命/温度/盐度/时长、游离水冰/皮重、来源/处理产品状态及配对交接、各水/冰/氧/化学品组成与容器件数/皮重/复用; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_delivery_records` | `delivery_to_declared_gate` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 起讫点、逐段距离/方式/实载（含同行水冰与容器）、温控/增氧、装载/空返、服务范围、接收与损失; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_declared_gate` | `declared_gate_release` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 唯一声明门的位置/时间/接收者、前序路线、实际验收、物种/形态/状态/含水基准、同批次最终验收净质量 Q、毛重/皮重/游离水冰及拒收; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_harvest_collection_and_landing_outputs` | `harvest_collection_and_landing` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 物种、捕捞区域、渔具、船舶/采集者、航次/日期、毛重/皮重/捕获及接受上岸量、兼捕/拒收与去向、船上沥水/冰/水、实际适用的许可/追溯; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_sorting_holding_chilling_and_packout_outputs` | `sorting_holding_chilling_and_packout` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 实际分选、表面清洗、沥水、活体维持或冷藏、生命/温度/盐度/时长、游离水冰/皮重、来源/处理产品状态及配对交接、各水/冰/氧/化学品组成与容器件数/皮重/复用; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_delivery_outputs` | `delivery_to_declared_gate` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 起讫点、逐段距离/方式/实载（含同行水冰与容器）、温控/增氧、装载/空返、服务范围、接收与损失; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_gate_outputs` | `declared_gate_release` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 唯一声明门的位置/时间/接收者、前序路线、实际验收、物种/形态/状态/含水基准、同批次最终验收净质量 Q、毛重/皮重/游离水冰及拒收; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | 所有清单行 | 归一化量 = 同批次实际交换数量 / 声明门同批次正值净验收产品质量 Q；原始逐航次/批次/报告期分子及单位保留。只在独立负担归属视图中对真正共享LCA负担应用有证据份额，物料物理台账保持未分配。中间过程产率须由实测中间质量与Q连接，不能以局部产出替代Q或假定1:1。最终参考输出Q/Q=1 kg。 | 逐节点原始量；Q；实测中间产率；归属决定 | 每1 kg参考流量及独立物理台账 | `mass-balance-identity` |
| `material_state_balance` | 所有物料阶段与存量 | 分别记录期初存量、接收/采集、实际观察的生物/物料变化（不假定受管理生产）、实际水/物料增加、内部交接、期末存量、接受产品、拒收、死亡、组织去除、修剪、沥水/蒸发和其他损失；在一致物种/形态/含水基准下核对并保留未闭合差。已测净产品质量不得再次扣除未包含在内的包装皮重或游离冰。 | 逐节点质量/含水/存量与去向记录 | 实测阶段产率与平衡差 | `mass-balance-identity` |
| `delivery_tonne_kilometres` | delivered reference product | 按每段实际路线，将实际承运本货批的货载质量（吨）乘该段距离（km），再按匹配最终参考产品的实际产量归一化。货载包含实际随行的载体水、冰和包装，不等于参考产品净质量。共载时使用有因果依据的质量、占用体积或其他已说明分配键。记录空返、冷却、增氧和暂养服务的覆盖；不得把空返的零货载视为零运输负荷。若以实测燃料和直接排放建模，不得重复叠加已覆盖同一负荷的运输服务。 | delivered mass, distance, route, load factor, temperature or live-holding condition | tonne-km and delivered product inventory | `mass-balance-identity` |
| `direct_emissions` | 所有实际直接释放 | 按实际燃料/物质/单位/接收环境相容的实测或有来源因子计算，记录因子原文、范围、控制和不确定性；不使用通用柴油默认因子，不将水体收支直接视为负排放或信用。 | 节点活动、实测或有来源因子、介质 | 具体物质直接释放量 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `collect_fishing_fuel_gear_service_and_collection_inputs` | `harvest_collection_and_landing` | 本节点每项实际物料、天然资源、独立服务、其他预期产品、废物流和直接释放，须按实际身份逐项增补独立交换与数量，记录组成/物种/状态、原生属性单位、供应边界、去向/接收环境、所有权和实际不存在的证据。生成的剔除、残余物与排放属于实际输出；只有真实接收的废物才作输入。产品回收、受管理废物和直接环境释放须按真实去向分开。不绑定通用污泥/包装/工艺水身份，不继承集合总量或多单位范围。 流属性/单位: 燃料、质量、能量、体积、件数或服务量 / L、kg、MJ、kWh、m3、item 或 service unit; 数量规则: 按航次或批次计量或分配船舶燃料、渔具使用、采集投入、船上冰或水和上岸支持; 来源: `fao-jellyfish-commodity-profile`, `brotz-pauly-jellyfish-fisheries-2017` 在原始航次/批次/报告期保留逐流量和适用的产率/含水基准；全部报告量除以实测同批次最终声明门净验收质量 Q。各具体流须独立采集范围/不确定性证据，不能以混合总量screen作为子流范围。 | `cp_harvest_collection_and_landing_records`; 原始记录、供应商/接收者证据、质量/水/存量平衡、独立范围与不确定性支持 |
| `collect_bycatch_rejected_jellyfish_drainage_and_landing_residues` | `harvest_collection_and_landing` | 本节点每项实际物料、天然资源、独立服务、其他预期产品、废物流和直接释放，须按实际身份逐项增补独立交换与数量，记录组成/物种/状态、原生属性单位、供应边界、去向/接收环境、所有权和实际不存在的证据。生成的剔除、残余物与排放属于实际输出；只有真实接收的废物才作输入。产品回收、受管理废物和直接环境释放须按真实去向分开。不绑定通用污泥/包装/工艺水身份，不继承集合总量或多单位范围。 流属性/单位: 质量、体积或尾数 / kg、m3 或 item; 数量规则: 计量剔除水母、兼捕、非目标物料、沥水或废水、残余物质量、去向、处置路线、回收路线和受纳环境; 来源:  在原始航次/批次/报告期保留逐流量和适用的产率/含水基准；全部报告量除以实测同批次最终声明门净验收质量 Q。各具体流须独立采集范围/不确定性证据，不能以混合总量screen作为子流范围。 | `cp_harvest_collection_and_landing_outputs`; 原始记录、供应商/接收者证据、质量/水/存量平衡、独立范围与不确定性支持 |
| `collect_water_ice_electricity_packaging_and_live_holding_inputs` | `sorting_holding_chilling_and_packout` | 本节点每项实际物料、天然资源、独立服务、其他预期产品、废物流和直接释放，须按实际身份逐项增补独立交换与数量，记录组成/物种/状态、原生属性单位、供应边界、去向/接收环境、所有权和实际不存在的证据。生成的剔除、残余物与排放属于实际输出；只有真实接收的废物才作输入。产品回收、受管理废物和直接环境释放须按真实去向分开。不绑定通用污泥/包装/工艺水身份，不继承集合总量或多单位范围。 流属性/单位: 质量、体积、能量或件数 / kg、m3、kWh 或 item; 数量规则: 计量清洗或活体暂养水、冰、电力、氧气、包装、冷藏、容器和发运准备数量; 来源: `codex-cxc-52-2003` 在原始航次/批次/报告期保留逐流量和适用的产率/含水基准；全部报告量除以实测同批次最终声明门净验收质量 Q。各具体流须独立采集范围/不确定性证据，不能以混合总量screen作为子流范围。 | `cp_packaging_ice_chilling_and_dispatch_records`; 原始记录、供应商/接收者证据、质量/水/存量平衡、独立范围与不确定性支持 |
| `collect_sorting_rejects_drainage_wastewater_and_packaging_waste` | `sorting_holding_chilling_and_packout` | 本节点每项实际物料、天然资源、独立服务、其他预期产品、废物流和直接释放，须按实际身份逐项增补独立交换与数量，记录组成/物种/状态、原生属性单位、供应边界、去向/接收环境、所有权和实际不存在的证据。生成的剔除、残余物与排放属于实际输出；只有真实接收的废物才作输入。产品回收、受管理废物和直接环境释放须按真实去向分开。不绑定通用污泥/包装/工艺水身份，不继承集合总量或多单位范围。 流属性/单位: 质量或体积 / kg 或 m3; 数量规则: 计量剔除水母、沥水、废水、废冰、包装废物、残余物质量、处置路线、回收路线和受纳环境; 来源:  在原始航次/批次/报告期保留逐流量和适用的产率/含水基准；全部报告量除以实测同批次最终声明门净验收质量 Q。各具体流须独立采集范围/不确定性证据，不能以混合总量screen作为子流范围。 | `cp_sorting_holding_chilling_and_packout_outputs`; 原始记录、供应商/接收者证据、质量/水/存量平衡、独立范围与不确定性支持 |
| `collect_delivery_fuel_electricity_ice_and_temperature_control_support` | `delivery_to_declared_gate` | 本节点每项实际物料、天然资源、独立服务、其他预期产品、废物流和直接释放，须按实际身份逐项增补独立交换与数量，记录组成/物种/状态、原生属性单位、供应边界、去向/接收环境、所有权和实际不存在的证据。生成的剔除、残余物与排放属于实际输出；只有真实接收的废物才作输入。产品回收、受管理废物和直接环境释放须按真实去向分开。不绑定通用污泥/包装/工艺水身份，不继承集合总量或多单位范围。 流属性/单位: 燃料、能量、质量、体积或运输服务 / L、MJ、kWh、kg、m3 或 tonne-km; 数量规则: 仅当声明参考流交付超过上岸、发运或包装场边界时纳入；记录距离、方式、装载率、活体或冷藏条件和相关返程物流; 来源:  在原始航次/批次/报告期保留逐流量和适用的产率/含水基准；全部报告量除以实测同批次最终声明门净验收质量 Q。各具体流须独立采集范围/不确定性证据，不能以混合总量screen作为子流范围。 | `cp_delivery_records`; 原始记录、供应商/接收者证据、质量/水/存量平衡、独立范围与不确定性支持 |
| `dq_unique_object_gate` | 参考对象与所有阶段 | 每个数据包须在采集前锁定一个物理参考对象：单一物种或经证实同一物理商品的物种组、单一来源/生产路线、形态、实际生命/处理状态、含水/沥水基准、等级及唯一门的位置/时间/接收条件。不得把不同物种、活与死亡、鲜与冷藏、原始与整理态或不同门混入同一参考交换；不确定项未落实时数据包不完整。各阶段是同一批对象的实测状态，不等于最终1 kg。 | 物种/来源/状态/含水/等级规范、真实门与逐批交接/验收记录 |
| `dq_ranges_uncertainty` | 所有实际独立交换 | 范围依据须逐具体流、真实单位、同批次最终Q分母和代表性条件核实；保留独立来源/历史批次证据、观测偏差和不确定性，未知不设为零。混合单位的集合screen不是独立流范围；不存在可通用于不同水分、产率、门或不同物种的固定初始上限。不得以当前被测批次最大值自证或裁剪实际异常量。 | 原始独立证据、校准、方法与不确定性记录 |
| `dq_period_ownership` | 所有节点、期次、资产和完整服务 | 覆盖实际完整航次/生产/处理/暂养/运输期间、返程、空闲/失败、维护/清洗、资产替换与退出；逐共享消费者核对唯一归属及存量携带负担。无产出或未知Q时不能除零或删除负担；依据完整服务范围排除重复组成。天然来源/栖息地/许可、n.e.c.理由、时间/技术/地理代表性和排除范围按实际适用逐项披露。 | 期间日历、资源/资产/服务和存量台账、来源/范围证据 |
| `collect_declared_gate_handling` | `declared_gate_release` | 最终门为真实边界责任接口，不默认新增加工。逐实际门前验收/称重/装卸事件采集各自电力、物料、服务、拒收及释放；已由前序节点负责的同一事件只携带原记录，不能重复计量。每个适用具体交换须有独立原生数量单位、同Q归一化、去向及核实身份，无数据不设零。 | `cp_declared_gate`; `cp_gate_outputs`; 实际事件/所有权/交接/验收及独立范围不确定性记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 参考对象 | 核实本PCR范围、单一物种/物理商品、真实来源/路线、实际生命/处理状态、形态/含水/等级和唯一声明门；不得用分类标签或通用landing UUID替代实际gate/状态。n.e.c.对象须说明为何更具体PCR不适用，天然海绵须确认动物来源。 | |
| `validate_gate_quantity` | 参考输出及全部数量 | declared_gate_product是唯一1 kg最终参考输出，Q必须为同批次实测正值净验收量；保留所有原始批次量、实际中间产率、拒收/途中损失/水分变化及配对交接。包装出货与配送送达量独立实测，不作为竞争参考输出。 | |
| `validate_atomic_completion` | 全部采集义务和实际交换 | 每项适用第8节义务必须落实为具体物理/化学交换及独立数量、原生单位、范围/不确定性依据、组成/状态、同Q归一化、去向/接收环境及兼容核实UUID。任何适用项未落实则最终数据包不完整且验证失败；未知不等于零，集合量/范围/UUID不得复制。 | |
| `validate_fates_ownership` | 输出、资源、服务及期间 | 按实际去向分别检查预期产品、受管理废物、环境释放与存量；生成废物/释放不能当输入。完整服务不得与自有燃料/电力/资产/释放重叠；运输货载含实际同行水、冰与容器，空返不等于零负荷。所有实际节点/期次/共享消费者与负担携带须完整。 | |
| `validate_projection` | 双语与结构化投影 | 中英必须保持相同参考对象、交换ID、规则、单位/分母与义务；规范UUID中文display须官方baseName，未核实身份保持明确。正常生成并核对structured schema/指纹；结构检查pass不证明身份、产率、数值范围或实际数据完整。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 活、鲜或冷藏水母的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset`; 在保留捕捞和处理记录时作为 process 或 lifecyclemodel 构建的前景参考 |
| allowed_use | 对声明的活、鲜或冷藏水母产品，在上岸、发运、包装场或交付边界进行 LCA 建模 |
| excluded_use | 观赏用活水母；冷冻、干制、熏制、盐渍、盐水浸渍、明矾腌制、熟制、罐装、预制、保藏、提取或加工水母；非水母水生无脊椎动物；作为单独产品的残余物、废水、兼捕或剔除生物量；没有单独审查方法的生态系统服务声明 |
| required_metadata | canonical PCR id；CPC 3.0 代码；物种或物种组；捕捞或采集区域；渔具或采集方法；上岸地点；活/鲜/冷藏状态；湿或沥水质量基准；产品形态；暂养时长和温度；包装状态；声明边界；地理位置；报告期；数据所有者；未解决 UUID 替代项 |
| required_quality_disclosure | 产品状态证据、质量平衡闭合、湿/沥水基准、时间覆盖、分配基准、上游数据集链接、缺失前景记录、代理行，以及仅用于 QA 筛选的推理估算范围 |
| update_trigger | Tiangong 中新增水母渔具、船舶服务、冰、活体暂养氧气、盐水或盐渍排除项、兼捕、残余物、包装、制冷剂或交付服务流身份；关于燃料、得率、沥水、冰、包装或冷藏范围的经审查定量证据；Codex、FAO 或法律要求更新；分类映射变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-jellyfish-commodity-profile` | official_guidance | FAO Knowledge Repository, aquatic products chapter 4.2 Jellyfish, https://openknowledge.fao.org/server/api/core/bitstreams/0aa558d4-57c7-498d-87f7-b9e37577882f/content/src/html/chapter-4.2.html | 水母产品身份、产品用途和商品背景 |
| `brotz-pauly-jellyfish-fisheries-2017` | literature | Brotz and Pauly, studying jellyfish fisheries and global catch context, Sea Around Us PDF, https://legacy.seaaroundus.s3.amazonaws.com/researcher/dpauly/PDF/2017/Books%26Chapters/Brotz%2B%26%2BPauly%2B2017%2BStudying%2Bjellyfish%2Bfisheries.pdf | 水母渔业背景、捕捞和管理不确定性、兼捕和捕捞文件背景 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | 活、鲜、冷藏水产品处理、卫生、运输和产品状态背景 |
| `mass-balance-identity` | method_factor | 本PCR第4、7和8节规定的守恒/存量台账与同批次最终门归一化方法；包括实测接收、存量、水分/组织变化和全部真实去向；不提供经验产率或因子。 | 归一化、分配、上岸平衡、得率和交付计算 |
