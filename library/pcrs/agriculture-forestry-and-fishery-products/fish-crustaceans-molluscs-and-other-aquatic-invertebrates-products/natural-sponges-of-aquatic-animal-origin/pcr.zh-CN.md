---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.natural-sponges-of-aquatic-animal-origin
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水生动物源天然海绵

## 1. 范围与适用性

本 PCR 用于构建作为采收、上岸或初级整理海绵产品上市的水生动物源天然海绵前景数据包。它覆盖声明的潜水、切割、手工采集、合法拖采或钩采、船上处理、上岸、清洗或冲洗、沥水、不可用组织修剪、在仍保持初级天然海绵产品身份下的干燥或简单保藏、包装、储存、发运和在声明边界的放行。

覆盖产品包括以未加工、上岸、清洗、沥水、干燥或简单整理初级生物质销售的声明物种或商业等级天然海洋或淡水动物海绵。排除产品包括合成海绵、塑料泡沫海绵、成形浴用制品、化学精整或制造海绵制品、复合清洁产品、化妆品或医疗成品、提取物，以及作为单独产品建模的残余物或受损海绵生物量。

合规数据集必须保留物种或商业等级、采集区域、采集方法、湿或干质量基准、清洗或干燥状态和边界。相关时必须披露海绵床管理、许可、受保护栖息地和再生采收实践。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.natural-sponges-of-aquatic-animal-origin` |
| classification_refs | CPC 3.0 `04920`, `Natural sponges of aquatic animal origin` |
| covered_products | 作为初级天然海绵产品被捕捞、采集、上岸、清洗、沥水、干燥或简单整理的天然水生动物海绵 |
| excluded_products | 合成海绵；塑料泡沫海绵；成形、零售切割、化学精整、制造、复合、化妆品、医疗或工业海绵制品；提取物；作为单独产品的受损生物量、废物、清洗水或修剪残余物 |
| representative_product | 在声明物种或等级、采集区域、湿或干质量基准、清洗或干燥状态、包装状态和声明边界下的天然水生动物海绵 |
| production_route | 由潜水员、船舶、手工、钩具、拖具或声明合法方法捕捞或采集，上岸、清洗/冲洗、沥水、修剪，在保持初级产品身份时简单干燥或保藏，包装、储存和声明边界放行 |
| market_state | 已声明物种或等级、采集方法、湿/干/清洗/干燥基准、质量等级、包装状态和边界的采收或初级整理天然海绵 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为采收或初级整理产品的水生动物源天然海绵 |
| How much | 1 kg |
| How well | 声明物种或商业等级、天然动物来源、采集区域、采集方法、湿或干质量基准、清洗/干燥状态、包装状态和边界 |
| How long or cycle | 一个采收航次、采集批次、上岸批次、处理批次、销售批次或报告期，并归一化至可销售海绵产出 |
| reference_flow_link | `declared_gate_product` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 水生动物源天然海绵 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种或商业等级；天然水生动物来源；捕捞或采集区域；采集方法；相关时的许可或进入权；湿、沥水、干、清洗或简单整理质量基准；干燥或保藏状态；质量等级；包装状态；声明边界；栖息地、保护区、海绵床再生和未解决的 Tiangong UUID 替代项 |

质量是主要参考基准。件、捆、袋、篮、箱、潜水员批次或航次记录只有在保留净质量、湿或干基准、等级、皮重和抽样方法时，才可使用。

每个数据包须在采集前锁定一个物理参考对象：单一物种或经证实同一物理商品的物种组、单一来源/生产路线、形态、实际生命/处理状态、含水/沥水基准、等级及唯一门的位置/时间/接收条件。不得把不同物种、活与死亡、鲜与冷藏、原始与整理态或不同门混入同一参考交换；不确定项未落实时数据包不完整。各阶段是同一批对象的实测状态，不等于最终1 kg。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示为声明湿、沥水、清洗、干燥或初级整理产品基准下的天然海绵 kg。 |
| `natural_origin_identity` | all datasets | Product identity and origin evidence | declared records | 数据集记录必须证明天然水生动物海绵来源，不得将合成、塑料、成形制造或化学精整海绵制品与参考产品混合。 |
| `wet_dry_cleaned_basis` | harvested, washed, drained, dried, or cleaned sponge lots | Mass and moisture or drying state | kg, %, or kg dry sponge | 产品质量必须说明湿、沥水、清洗、干燥或声明基准。只有在有实测水分、干燥得率或保留批次证据时才可在湿基和干基之间换算。 |
| `harvest_lot_identity` | collection, landing, grading, and sales records | Mass, count, or lot | kg, item, bundle, sack, basket, or crate | 采收记录必须保留物种或等级、采收区域、方法、潜水员/船舶/采集者、航次、批次、上岸日期、接受质量、剔除质量和相关时的许可或进入记录。 |
| `cleaning_preservation_basis` | washing, trimming, drying, disinfecting, bleaching, or preservation | Mass, volume, concentration, or energy | kg, L, %, kWh, MJ, or h | 简单初级整理只有在保持天然海绵身份时才可纳入。记录水、化学品、干燥能耗、时间、剔除组织和产品状态换算基准。 |
| `energy_fuel_and_delivery_inventory` | diving, vessel operation, air compression, landing, drying, storage, and dispatch | Energy or fuel quantity | kWh, MJ, L, or kg | 在归一化到参考流前记录电力、燃料、压缩空气、干燥、储存和交付的原始单位。 |
| `packaging_basis` | sacks, bales, cartons, liners, labels, reusable crates, and pallets | Mass or item count | kg or item | 包装记录必须在归一化前保留材料类型、件数、皮重或装填质量、重复使用率和目的地。 |

## 5. 系统边界

默认边界覆盖前景控制的海绵采收或采集，直到声明的上岸、干燥、发运、包装场或交付边界：

1. 海绵捕捞或采集，包括潜水员、船舶、手工、钩具、拖具或合法采集方法、渔具作业、进入或许可合规，以及船上处理。
2. 上岸、分级、清洗、冲洗、沥水、修剪、在产品仍为初级天然海绵时的简单干燥或保藏、残余物处理、包装、储存和声明边界放行。
3. 当参考流是超过上岸、干燥场、发运或包装场边界的交付产品时，包括交付到声明边界。

资本品和长期船舶、潜水设备、空气压缩机、渔具、池槽、干燥设施和基础设施只有在声明数据包范围要求时才纳入。购买的燃料、电力、压缩空气、水、清洗化学品、包装和运输服务需要上游数据集，除非同一运营方控制并在前景包中报告其生产。

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_natural_sponge_harvest_or_collection_lot |
| starting_condition_role | aquatic_animal_sponge_lot_identity_and_product_state |
| product_classification_scope | current CPC 3.0 product category `04920`, `Natural sponges of aquatic animal origin` |
| recursive_input_rule | 作为初级海绵产品投入的天然海绵采集物，记录为声明采收或采集批次，并披露区域、方法、物种或等级、湿/干基准和边界，而不是递归记录为成品参考产品输出 |
| upstream_dataset_requirement | 捕鱼或采集航次记录、供应方采收记录、上岸文件、许可或可追溯证据，以及前景控制之外的燃料、电力、水、化学品、包装和交付数据集 |
| disclosure | 披露物种或商业等级、捕捞或采集区域、采集方法、潜水员或船舶、许可或进入权、相关时的栖息地或保护区状态、湿/干/清洗/干燥基准、清洗、修剪、干燥或保藏路线、剔除物和残余物、包装状态、声明边界，以及未解决的 Tiangong UUID 替代项 |

## 6. 过程清单结构

真实路线由事件和交接记录确定。最终声明门为唯一参考输出责任节点，承接实际最后一个前序节点；门在上岸时，后续整理及运输绕过；门在整理出货时，运输绕过；门在送达时，运输接收量先实测，再由最终门验收。任何未明确的实际路线/门均不得默认选择。

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `harvest_collection_and_landing` | 采收、采集及上岸 | required | 须有实际来源/生产路线证据 | 实际事件/交接及资源所有权 | 每 1 kg 参考流 |
| `primary_preparation_drying_and_packout` | 初级整理、干燥及包装出货 | conditional | 仅实际门前整理；上岸门或无整理时绕过 | 实际事件/交接及资源所有权 | 每 1 kg 参考流 |
| `delivery_to_declared_gate` | 向声明门配送 | conditional | 仅所选门前实际配送；选择未知则失败 | 实际事件/交接及资源所有权 | 每 1 kg 参考流 |
| `declared_gate_release` | 最终声明门验收与放行 | required | 一个声明门接收实际最后前序节点；参考输出唯一 | 实际事件/交接及资源所有权 | 每 1 kg 参考流 |

### 过程：采收、采集及上岸 (`harvest_collection_and_landing`)

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

###### 条件性电力输入 (`source_electricity`)

仅在该节点实际使用时记录，非默认投入；核实供应、组成/纯度与用途，保持各自实测原生数量及同批次最终门基准，完整服务与自有组成互斥。

- 选定流：电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：依据 cp_harvest_collection_and_landing_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_collection_and_landing_records`

#### 输出

##### 产品流

###### 已接受来源批次向下一实际责任转移 (`accepted_landed_natural_sponge`)

逐批记录物种、来源、原始形态/状态和接受净质量；此来源阶段量独立实测，配对下一真实接收。上岸UUID只有在原始捕获物/上岸品质限定匹配时适用，不能替代后续加工或最终交付门身份。

- 选定流：水生动物源天然海绵 `972e9d63-d123-4b6e-ad97-5b72d0735453`
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


### 过程：初级整理、干燥及包装出货 (`primary_preparation_drying_and_packout`)

#### 输入

##### 产品流

###### 来源批次整理接收 (`accepted_sponge_entering_primary_preparation`)

与实际上游转移配对，保留原始接收状态及独立实测质量；只在此门前节点实际存在时激活。

- 选定流：水生动物源天然海绵 `972e9d63-d123-4b6e-ad97-5b72d0735453`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_preparation_product_state_and_mass_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_preparation_product_state_and_mass_records`

###### 条件性电力输入 (`preparation_electricity`)

仅在该节点实际使用时记录，非默认投入；核实供应、组成/纯度与用途，保持各自实测原生数量及同批次最终门基准，完整服务与自有组成互斥。

- 选定流：电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：依据 cp_preparation_packaging_and_storage_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_preparation_packaging_and_storage_records`

#### 输出

##### 产品流

###### 整理后产品向最后实际节点转移 (`marketable_natural_sponge`)

采用整理后独立实测的同批次产品质量、形态、生命/处理状态与含水基准，保留拒收、组织/水分变化和损失。不得固定为参考1 kg；当配送不存在时转交最终门，有配送时转交配送。

- 选定流：水生动物源天然海绵
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_preparation_product_state_and_mass_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_preparation_product_state_and_mass_records`

##### 基本流

###### 实际前景化石源二氧化碳排至未细分空气 (`preparation_fossil_co2`)

只包括该节点实际直接化石燃料燃烧的空气排放；采用实测量或明确燃料/发动机/单位相容的有来源因子计算，记录氧化、控制及不确定性。不包括动物呼吸、溶解到水中的碳或供应商已覆盖排放；其他实际污染物另按具体物质/环境补充。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据 cp_preparation_packaging_and_storage_records 逐实际交换采集数量，按独立所有权/归属和实测同批次最终声明边界验收净质量归一化；物料转移保留未分配物理数量，非最终转移不得固定为1 kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_preparation_packaging_and_storage_records`


### 过程：向声明门配送 (`delivery_to_declared_gate`)

#### 输入

##### 产品流

###### 产品配送接收 (`delivery_product_receipt`)

仅当此具体交换在该节点实际发生且由前景负责时采集，供应商完整服务已覆盖的组成不得重复。实际未分配数量和原生单位须单独保留；不得复制任何集合总量或范围。

- 选定流：水生动物源天然海绵
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

#### 输出

##### 产品流

###### 送达产品向最终门验收转移 (`delivered_natural_sponge_at_declared_gate`)

逐实际路线独立称量送达产品，扣除可分离货载水、冰与包装皮重，保留途中损失、状态和水分变化；随后最终门另行验收。此内部交接量不是固定参考输出。

- 选定流：水生动物源天然海绵
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

- 选定流：水生动物源天然海绵
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

- 选定流：水生动物源天然海绵
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
| `habitat_and_reject_handling` | damaged sponge, non-target material, residues, and protected habitat disclosure | 不得通过把剔除海绵、受损物料或栖息地扰动排除在前景包之外来分摊掉这些负荷。记录去向，并在相关时披露海绵床或保护区状态。 | 受损质量、剔除质量、非目标物料、采集区域、处置或回收路线、许可和栖息地披露 | `fao-sponge-production` |
| `shared_trip_and_preparation_allocation` | multi-product trips or shared preparation services | 共享船舶燃料、潜水支持、电力、水、干燥、储存和包装，应先按直接计量、航次日志、接受质量、干质量产出、暂养或干燥时间、包装件数或其他声明物理驱动因子分配，再使用经济分配。 | 航次记录、上岸质量、接受质量、干质量、服务日志、包装件数、干燥时间和分配驱动因子 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_harvest_collection_and_landing_records` | `harvest_collection_and_landing` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 物种/商业等级、天然动物来源、采收区域/海绵床/栖息地、实际潜水员/采集者/船舶/渔具方法与航次/日期、实际使用的潜水供气/压缩、毛重/皮重/接受质量、受损/拒收海绵及非目标物去向、实际适用切割/再生实践与许可/追溯证据; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_preparation_product_state_and_mass_records` | `primary_preparation_drying_and_packout` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 实际清洗/漂洗、非骨架有机组织去除、修剪、干燥及范围内初级整理、各水/化学品组成/浓度、投入产出含水/固含量、相关温度/时长、清洗/组织/水分损失与去向、容器件数/皮重/复用与储存防护; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_preparation_packaging_and_storage_records` | `primary_preparation_drying_and_packout` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 实际清洗/漂洗、非骨架有机组织去除、修剪、干燥及范围内初级整理、各水/化学品组成/浓度、投入产出含水/固含量、相关温度/时长、清洗/组织/水分损失与去向、容器件数/皮重/复用与储存防护; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_delivery_records` | `delivery_to_declared_gate` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 起讫点、逐段距离/方式/实载（含同行水冰与容器）、温控/增氧、装载/空返、服务范围、接收与损失; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_declared_gate` | `declared_gate_release` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 唯一声明门的位置/时间/接收者、前序路线、实际验收、物种/形态/状态/含水基准、同批次最终验收净质量 Q、毛重/皮重/游离水冰及拒收; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_harvest_collection_and_landing_outputs` | `harvest_collection_and_landing` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 物种/商业等级、天然动物来源、采收区域/海绵床/栖息地、实际潜水员/采集者/船舶/渔具方法与航次/日期、实际使用的潜水供气/压缩、毛重/皮重/接受质量、受损/拒收海绵及非目标物去向、实际适用切割/再生实践与许可/追溯证据; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_primary_preparation_drying_and_packout_outputs` | `primary_preparation_drying_and_packout` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 实际清洗/漂洗、非骨架有机组织去除、修剪、干燥及范围内初级整理、各水/化学品组成/浓度、投入产出含水/固含量、相关温度/时长、清洗/组织/水分损失与去向、容器件数/皮重/复用与储存防护; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_delivery_outputs` | `delivery_to_declared_gate` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 起讫点、逐段距离/方式/实载（含同行水冰与容器）、温控/增氧、装载/空返、服务范围、接收与损失; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |
| `cp_gate_outputs` | `declared_gate_release` | 该节点具体交换、存量与逐流补充义务 | 称重、计量、活动、供应商、交接及接收记录 | 唯一声明门的位置/时间/接收者、前序路线、实际验收、物种/形态/状态/含水基准、同批次最终验收净质量 Q、毛重/皮重/游离水冰及拒收; 批次/事件/时间、独立交换身份/原生数量单位、去向/接收环境、所有权、分配驱动、期初期末存量与独立范围/不确定性证据 | 采用校准秤/表、原始票据、过程与温度/水分日志、供应商和接收方确认；保留方法/抽样/因子及不确定性，无数量或转化默认值 | kg; kWh; L; m3; item; h; deg C; km; tkm; 各真实原生单位分别保留 | 逐事件/批次；月度/期间核对 | 完整生产/航次/处理/交付期及归属返程、空闲、失败、维护和资产替换/退出期间 | 本节点实际地点/设备/供应方/接收方及共享消费者 | per 1 kg reference flow | 校准、溯源、交接配对、质量/水分/存量核对、服务范围、分配与不确定性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | 所有清单行 | 归一化量 = 同批次实际交换数量 / 声明门同批次正值净验收产品质量 Q；原始逐航次/批次/报告期分子及单位保留。只在独立负担归属视图中对真正共享LCA负担应用有证据份额，物料物理台账保持未分配。中间过程产率须由实测中间质量与Q连接，不能以局部产出替代Q或假定1:1。最终参考输出Q/Q=1 kg。 | 逐节点原始量；Q；实测中间产率；归属决定 | 每1 kg参考流量及独立物理台账 | `mass-balance-identity` |
| `material_state_balance` | 所有物料阶段与存量 | 分别记录期初存量、接收/采集、实际观察的生物/物料变化（不假定受管理生产）、实际水/物料增加、内部交接、期末存量、接受产品、拒收、死亡、组织去除、修剪、沥水/蒸发和其他损失；在一致物种/形态/含水基准下核对并保留未闭合差。已测净产品质量不得再次扣除未包含在内的包装皮重或游离冰。 | 逐节点质量/含水/存量与去向记录 | 实测阶段产率与平衡差 | `mass-balance-identity` |
| `delivery_tonne_kilometres` | delivered reference product | 按每段实际路线，将实际承运本货批的货载质量（吨）乘该段距离（km），再按匹配最终参考产品的实际产量归一化。货载包含实际随行的载体水、冰和包装，不等于参考产品净质量。共载时使用有因果依据的质量、占用体积或其他已说明分配键。记录空返、冷却、增氧和暂养服务的覆盖；不得把空返的零货载视为零运输负荷。若以实测燃料和直接排放建模，不得重复叠加已覆盖同一负荷的运输服务。 | delivered mass, distance, route, load factor, moisture-protection condition | tonne-km and delivered product inventory | `mass-balance-identity` |
| `direct_emissions` | 所有实际直接释放 | 按实际燃料/物质/单位/接收环境相容的实测或有来源因子计算，记录因子原文、范围、控制和不确定性；不使用通用柴油默认因子，不将水体收支直接视为负排放或信用。 | 节点活动、实测或有来源因子、介质 | 具体物质直接释放量 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `collect_harvest_fuel_diving_gear_and_collection_inputs` | `harvest_collection_and_landing` | 本节点每项实际物料、天然资源、独立服务、其他预期产品、废物流和直接释放，须按实际身份逐项增补独立交换与数量，记录组成/物种/状态、原生属性单位、供应边界、去向/接收环境、所有权和实际不存在的证据。生成的剔除、残余物与排放属于实际输出；只有真实接收的废物才作输入。产品回收、受管理废物和直接环境释放须按真实去向分开。不绑定通用污泥/包装/工艺水身份，不继承集合总量或多单位范围。 流属性/单位: 燃料、能量、质量、体积、件数、时间或服务量 / L、kWh、MJ、kg、m3、item、h 或 service unit; 数量规则: 按航次或批次计量或分配船舶燃料、空气压缩、潜水服务、渔具使用、采集投入和上岸支持; 来源: `fao-sponge-production`, `martinangeli-commercial-sponges-2022` 在原始航次/批次/报告期保留逐流量和适用的产率/含水基准；全部报告量除以实测同批次最终声明门净验收质量 Q。各具体流须独立采集范围/不确定性证据，不能以混合总量screen作为子流范围。 | `cp_harvest_collection_and_landing_records`; 原始记录、供应商/接收者证据、质量/水/存量平衡、独立范围与不确定性支持 |
| `collect_damaged_sponges_non_target_material_and_landing_residues` | `harvest_collection_and_landing` | 本节点每项实际物料、天然资源、独立服务、其他预期产品、废物流和直接释放，须按实际身份逐项增补独立交换与数量，记录组成/物种/状态、原生属性单位、供应边界、去向/接收环境、所有权和实际不存在的证据。生成的剔除、残余物与排放属于实际输出；只有真实接收的废物才作输入。产品回收、受管理废物和直接环境释放须按真实去向分开。不绑定通用污泥/包装/工艺水身份，不继承集合总量或多单位范围。 流属性/单位: 质量、体积或件数 / kg、m3 或 item; 数量规则: 计量剔除或受损海绵、非目标物料、残余物质量、去向、处置路线、回收路线和受纳环境; 来源:  在原始航次/批次/报告期保留逐流量和适用的产率/含水基准；全部报告量除以实测同批次最终声明门净验收质量 Q。各具体流须独立采集范围/不确定性证据，不能以混合总量screen作为子流范围。 | `cp_harvest_collection_and_landing_outputs`; 原始记录、供应商/接收者证据、质量/水/存量平衡、独立范围与不确定性支持 |
| `collect_water_chemicals_energy_drying_and_packaging_inputs` | `primary_preparation_drying_and_packout` | 本节点每项实际物料、天然资源、独立服务、其他预期产品、废物流和直接释放，须按实际身份逐项增补独立交换与数量，记录组成/物种/状态、原生属性单位、供应边界、去向/接收环境、所有权和实际不存在的证据。生成的剔除、残余物与排放属于实际输出；只有真实接收的废物才作输入。产品回收、受管理废物和直接环境释放须按真实去向分开。不绑定通用污泥/包装/工艺水身份，不继承集合总量或多单位范围。 流属性/单位: 质量、体积、能量、浓度或件数 / kg、L、m3、kWh、MJ、% 或 item; 数量规则: 计量清洗水、清洗或保藏化学品、干燥能源、电力、包装、储存和发运准备数量; 来源: `fao-sponge-production` 在原始航次/批次/报告期保留逐流量和适用的产率/含水基准；全部报告量除以实测同批次最终声明门净验收质量 Q。各具体流须独立采集范围/不确定性证据，不能以混合总量screen作为子流范围。 | `cp_preparation_packaging_and_storage_records`; 原始记录、供应商/接收者证据、质量/水/存量平衡、独立范围与不确定性支持 |
| `collect_trimming_residues_wash_water_and_packaging_waste` | `primary_preparation_drying_and_packout` | 本节点每项实际物料、天然资源、独立服务、其他预期产品、废物流和直接释放，须按实际身份逐项增补独立交换与数量，记录组成/物种/状态、原生属性单位、供应边界、去向/接收环境、所有权和实际不存在的证据。生成的剔除、残余物与排放属于实际输出；只有真实接收的废物才作输入。产品回收、受管理废物和直接环境释放须按真实去向分开。不绑定通用污泥/包装/工艺水身份，不继承集合总量或多单位范围。 流属性/单位: 质量或体积 / kg、L 或 m3; 数量规则: 计量修剪残余物、清洗水、废浴液、废水、包装废物、处置路线、回收路线和受纳环境; 来源:  在原始航次/批次/报告期保留逐流量和适用的产率/含水基准；全部报告量除以实测同批次最终声明门净验收质量 Q。各具体流须独立采集范围/不确定性证据，不能以混合总量screen作为子流范围。 | `cp_primary_preparation_drying_and_packout_outputs`; 原始记录、供应商/接收者证据、质量/水/存量平衡、独立范围与不确定性支持 |
| `collect_delivery_fuel_electricity_and_packaging_support` | `delivery_to_declared_gate` | 本节点每项实际物料、天然资源、独立服务、其他预期产品、废物流和直接释放，须按实际身份逐项增补独立交换与数量，记录组成/物种/状态、原生属性单位、供应边界、去向/接收环境、所有权和实际不存在的证据。生成的剔除、残余物与排放属于实际输出；只有真实接收的废物才作输入。产品回收、受管理废物和直接环境释放须按真实去向分开。不绑定通用污泥/包装/工艺水身份，不继承集合总量或多单位范围。 流属性/单位: 燃料、能量、质量或运输服务 / L、MJ、kWh、kg 或 tonne-km; 数量规则: 仅当声明参考流交付超过上岸、干燥场、发运或包装场边界时纳入；记录距离、方式、装载率、防潮条件和相关返程物流; 来源:  在原始航次/批次/报告期保留逐流量和适用的产率/含水基准；全部报告量除以实测同批次最终声明门净验收质量 Q。各具体流须独立采集范围/不确定性证据，不能以混合总量screen作为子流范围。 | `cp_delivery_records`; 原始记录、供应商/接收者证据、质量/水/存量平衡、独立范围与不确定性支持 |
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
| dataset_role | 水生动物源天然海绵的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset`; 在保留采收和初级整理记录时作为 process 或 lifecyclemodel 构建的前景参考 |
| allowed_use | 对声明的天然水生动物海绵，在上岸、干燥、发运、包装场或交付边界进行 LCA 建模 |
| excluded_use | 合成海绵；塑料泡沫海绵；成形浴用制品；化学精整或制造海绵制品；复合清洁产品；化妆品或医疗成品；提取物；作为单独产品的受损海绵生物量、残余物、废水或修剪物；没有单独审查方法的生态系统服务或再生声明 |
| required_metadata | canonical PCR id；CPC 3.0 代码；物种或商业等级；天然动物来源；捕捞或采集区域；采集方法；许可或进入权；湿/干/清洗/干燥质量基准；产品等级；包装状态；声明边界；地理位置；报告期；数据所有者；未解决 UUID 替代项 |
| required_quality_disclosure | 天然来源证据、相关时的栖息地和许可披露、质量平衡闭合、湿/干/清洗基准、时间覆盖、分配基准、上游数据集链接、缺失前景记录、代理行，以及仅用于 QA 筛选的推理估算范围 |
| update_trigger | Tiangong 中新增海绵物种、采集渔具、潜水员服务、压缩空气、清洗化学品、干燥能源、残余物、包装或交付服务流身份；关于燃料、得率、水分损失、修剪、干燥、包装或栖息地范围的经审查定量证据；FAO、渔业管理或法律要求更新；分类映射变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-sponge-production` | official_guidance | FAO, Sponge production chapter, https://www.fao.org/4/ac286e/AC286E02.htm | 历史定性采收与初级整理接口，区分原始采集和非骨架组织去除；不作为当前工艺、数量、渔具影响、许可或状态的证明。 |
| `martinangeli-commercial-sponges-2022` | literature | Martinangeli et al., The global catch of commercial sponges (1950 to 2019), Sea Around Us PDF, https://s3.us-west-2.amazonaws.com/legacy.seaaroundus/researcher/dpauly/PDF/2022/Book%2C%2Bchapters%2C%2Breports/Martinangeli%2C%2BL.%2C%2BM.%2BFourt%2C%2BM.%2BButler%2C%2BA.%2BC.%2BTsikliras%2C%2BN.%2BSmith%2C%2BM.L.D.%2BPalomares%2C%2BB.%2BDerrick%2C%2BE.%2BChu%2Band%2BD.%2BPauly.%2B2022.%2B2022.%2BThe%2Bglobal%2Bcatch%2Bof%2Bcommercial%2Bsponges.pdf | 商业海绵捕获背景、物种和渔业记录不确定性 |
| `mass-balance-identity` | method_factor | 本PCR第4、7和8节规定的守恒/存量台账与同批次最终门归一化方法；包括实测接收、存量、水分/组织变化和全部真实去向；不提供经验产率或因子。 | 归一化、分配、上岸平衡、得率和交付计算 |
