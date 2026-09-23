---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.kiwi-fruit
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 包装场发运前鲜猕猴桃

## 1. 范围和适用性

本候选 PCR 覆盖在管理型果园生产、采收、初级处理、分级以及声明的冷藏期之后，于包装场发运的鲜猕猴桃。
覆盖绿心、黄心及其他商业品种的整果鲜猕猴桃。

不包括加工猕猴桃产品、声明发运点之后的零售处理以及无关的果园服务。品种、地区、果园系统、成熟度和市场等级
仍然是前景数据输入。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.kiwi-fruit |
| classification_refs | CPC 3.0 01352 (Kiwi fruit) |
| covered_products | 包装场发运前的鲜整果猕猴桃 |
| excluded_products | 加工水果、果汁、果泥、零售食品处理 |
| representative_product | 包装场发运的市场等级鲜猕猴桃 |
| production_route | 管理型果园生产 → 采收/采集 → 初级处理和分级 → 可选冷藏 → 包装场发运 |
| market_state | 成熟、市场等级鲜果；声明品种和等级 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 包装场发运的鲜整果猕猴桃 |
| How much | 1 kg |
| How well | 品种、成熟度或干物质标准、等级和声明发运状态 |
| How long or cycle | 一个果园生产周期及声明的采后储存期 |
| reference_flow_link | 参考数量和产品流身份见下表 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Kiwifruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 品种；成熟度或干物质；市场等级；发运状态 |

## 4. 测量和单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass (UUID 待解析) | kg | 将声明的产品输出归一化到包装场发运点的 1 kg。 |
| storage_duration | cold-storage process | time | days | 记录实际储存时间，并在使用时识别普通空气或气调储存。 |
| maturity_measure | harvest output | soluble solids or dry matter | % or declared site unit | 记录用于确定采收成熟度的标准并保留其来源方法。 |

## 5. 系统边界

前景边界从声明的果园生产投入开始，到市场等级整果从包装场发运结束。果园建设和耐久基础设施只有在数据提供者
报告其分配期间和基准时纳入。零售配送和消费者催熟不纳入。

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | 管理型果园生产投入和已建立的作物系统 |
| starting_condition_role | 已披露的前景起始条件 |
| product_classification_scope | 包装场发运前的鲜整果猕猴桃 |
| recursive_input_rule | 同类别猕猴桃投入保持显式记录并披露来源批次；不得递归到另一份猕猴桃 PCR |
| upstream_dataset_requirement | 披露购买的种植材料、土壤改良剂、灌溉、植保投入、能源和包装投入及其来源数据集身份 |
| disclosure | 果园地点和系统、品种、成熟度标准、采收日期、包装场交接、等级和储存路线 |

### 规范边界规则（`boundary_start_and_handoff`）

数据提供者必须识别果园生产起始条件、独立采收交接、初级处理/分级交接以及声明的包装场发运点。任何偏离都必须披露。

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| orchard_production | 管理型果园生产 | required | 使用果园路线 | activity | 每 1 kg 发运水果 |
| harvest_capture | 采收和田间处理 | required | 水果离开果园并交接 | activity | 每 1 kg 采收水果 |
| primary_conditioning | 初级处理和分级 | required | 发运前进行处理、分级或分选 | activity | 每 1 kg 处理水果 |
| cold_storage | 冷藏和稳定化 | conditional | 发运前储存水果 | activity | 每 1 kg 发运水果及每储存日 |

### Flow Card 绑定

| process_id | row_id | 绑定状态 | 平台对应 |
| --- | --- | --- | --- |
| orchard_production | planting_material_input | unmapped | 前景种植材料确定后执行精确 UUID 检索 |
| orchard_production | orchard_production_agricultural_nutrient_inputs | parameterized | `flow-set.agricultural-nutrient-supply@0.3.0`，统一记录全部矿质肥料、有机肥料和含养分改良剂 |
| orchard_production | irrigation_water_input | parameterized | `flow-set.water-use@0.2.0/irrigation-water` |
| orchard_production | orchard_electricity_input | parameterized | `flow-set.energy-supply@0.2.0/electricity-supply` |
| orchard_production | orchard_mobile_fuel_input | parameterized | `flow-set.energy-supply@0.2.0/mobile-machinery-fuel` |
| orchard_production | crop_protection_input | unmapped | 实际植保制剂确定后执行精确 UUID 检索 |
| orchard_production | orchard_fruit_output | fixed | Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286` |
| orchard_production | orchard_residues | unmapped | 按残余物身份和去向拆分后检索 |
| harvest_capture | harvest_input | fixed | Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286` |
| harvest_capture | harvested_fruit | fixed | Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286` |
| harvest_capture | harvest_losses | unmapped | 按损失状态和去向拆分后检索 |
| primary_conditioning | conditioning_water_input | parameterized | `flow-set.water-use@0.2.0/process-water` |
| primary_conditioning | conditioning_electricity_input | parameterized | `flow-set.energy-supply@0.2.0/electricity-supply` |
| primary_conditioning | flexible_packaging_input | parameterized | `flow-set.packaging-function@0.2.0/flexible-packaging` |
| primary_conditioning | carton_box_packaging_input | parameterized | `flow-set.packaging-function@0.2.0/carton-and-box-packaging` |
| primary_conditioning | pallet_crate_packaging_input | parameterized | `flow-set.packaging-function@0.2.0/pallet-and-crate-packaging` |
| primary_conditioning | conditioning_input | fixed | Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286` |
| primary_conditioning | graded_fruit | fixed | Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286` |
| primary_conditioning | culls_and_downgrades | unmapped | 区分可用降级果与废弃次品后检索 |
| cold_storage | storage_electricity_input | parameterized | `flow-set.energy-supply@0.2.0/electricity-supply` |
| cold_storage | storage_input | fixed | Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286` |
| cold_storage | storage_output | fixed | Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286` |
| cold_storage | storage_losses | unmapped | 按拒收物状态和去向拆分后检索 |

### Process: 管理型果园生产（`orchard_production`）

记录种植材料、灌溉水、肥料、植保产品和其他管理投入；并记录带有品种和成熟度依据的果园水果输出，以及单独的修剪物、落果和其他损失。

### Process: 采收和田间处理（`harvest_capture`）

记录进入采收的果园输出、成熟度标准、采收日期或批次，并记录交给初级处理的采收水果和采收损失。

### Process: 初级处理和分级（`primary_conditioning`）

记录进入处理的采收状态、市场等级猕猴桃的等级/尺寸/成熟度信息，以及次品和降级水果的后续去向。

### Process: 冷藏和稳定化（`cold_storage`）

发生储存时，记录储存起始状态、储存模式、持续时间、发运状态以及储存损失。

## 7. 分配和联产品处理

### 规范分配规则（`output_set_and_allocation`）

PCR 必须列出市场等级水果、次品、降级水果、残余物和废弃物。当前产品研究必须为联产品选择并说明一种分配或处理方法；
Module 不规定最终方法。任何输出不得在多个交接点重复计算。

## 8. 前景数据采集、计算和质量规则

采集果园面积和生产期、品种、种植及管理投入、灌溉和能源、采收日期和成熟度标准、采收量和分级量、次品、储存模式和时间、包装投入及所有输出去向。
每个数据来源使用独立采集协议，并保留覆盖范围、时间代表性、测量方法和不确定性说明。

所有采集量归一化到 1 kg 发运市场等级猕猴桃。保持果园、采收、处理、储存、次品和损失之间的质量平衡，不得从其他水果 PCR 推断当前果园数量。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_orchard_input_records | orchard_production | 种植和投入 | 采购及田间施用记录 | 投入品、数量、养分或有效成分、日期、地块、面积 | 发票、标签、施用日志 | kg、L、kWh、件 | 每次事件 | 完整生产年度 | 果园地块 | 按投入品汇总并归一化到发运质量 | 发票、标签、田间日志 |
| cp_orchard_output_records | orchard_production | 果园产出和残余物 | 采收及去向记录 | 总果量、合格果、次品、残余物、去向、日期、地块 | 校准秤、采收票据、残余物日志 | kg | 每次采收 | 完整采收年度 | 果园地块 | 核对全部产出并归一化到发运质量 | 秤校准、票据、去向记录 |
| cp_harvest_records | harvest_capture | 采收果实和损失 | 采收作业记录 | 日期、地块、品种、成熟度、数量、劳务或燃料、损失 | 采收日志、票据、设备或燃料记录 | kg、L、h | 每次作业 | 采收季 | 果园及采收作业 | 按地块汇总并与果园产出核对 | 日期日志、票据、计量或发票 |
| cp_conditioning_records | primary_conditioning | 处理、分级、次品和废弃果 | 包装场入场及分级记录 | 入场量、等级、次品、废弃物、水、能源、包装、日期、批次 | 包装场系统、秤、计量表、包装领用记录 | kg、m3、kWh、件 | 每批次或班次 | 处理期间 | 包装场生产线 | 核对入场量、等级、次品和废弃物 | 批次记录、秤和计量检查 |
| cp_storage_records | cold_storage | 入库、发运和储存损失 | 冷库及发运记录 | 批次、起止时间、模式、温度、入库、发运、失重、拒收 | 冷库日志、库存系统、发运票据 | kg、days、kWh | 每批次及每日 | 声明的储存期间 | 冷库及发运交接点 | 核对入库量、发运量和损失 | 温度记录、库存记录、发运票据 |

## 9. 验证规则

### 规范验证规则（`kiwifruit_route_completeness`）

只有在果园生产、采收交接、初级处理/分级和声明的发运点均存在，且目标输出、次品、残余物和损失已区分，品种及成熟度或干物质依据已披露，并在发生储存时记录储存时间和模式，数据集才有效。

## 10. 发布数据集属性

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 鲜猕猴桃前景生产及关联 process 或 lifecycle model 构建 |
| allowed_use | 品种、成熟度/等级、路线和包装场发运边界匹配的鲜整果猕猴桃 |
| excluded_use | 加工猕猴桃产品、零售处理或不同产品终点 |
| required_metadata | 果园系统、品种、成熟度标准、采收日期、等级、储存模式/时间、输出去向 |
| required_quality_disclosure | 场址和期间覆盖、测量方法、完整性和来源批次身份 |
| update_trigger | 果园路线、处理技术、储存实践、产品终点或证据基础发生重大变化 |

## 11. 数据来源

| source_id | Source | Supports |
| --- | --- | --- |
| usda-ams-kiwifruit-grade-standards | USDA Agricultural Marketing Service, Kiwifruit Grades and Standards, https://www.ams.gov/grades-standards/kiwifruit-grades-and-standards | 成熟度、清洁度、缺陷、等级和包装质量维度 |
| uc-davis-kiwifruit-postharvest | UC Davis Postharvest Research and Extension Center, Kiwifruit Produce Facts, https://postharvest.ucdavis.edu/produce-facts-sheets/kiwifruit | 采收成熟度指标、冷藏条件、催熟和质量风险 |
| nzkgi-kiwifruit-book-2024 | New Zealand Kiwifruit Growers Incorporated, The Kiwifruit Book 2024, https://www.nzkgi.org.nz/resource/kiwifruit-book-2024/ | 果园管理、采收、包装场分级、包装和储存路线 |
| fao-kiwifruit-postharvest | FAO, Small-Scale Postharvest Handling Practices, https://www.fao.org/4/ae075e/ae075e21.htm | 呼吸跃变特性、处理、催熟和采后损失控制 |
