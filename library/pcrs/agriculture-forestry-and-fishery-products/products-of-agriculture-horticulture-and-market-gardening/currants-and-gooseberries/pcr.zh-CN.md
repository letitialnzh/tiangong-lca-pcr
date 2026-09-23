---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.currants-and-gooseberries
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 醋栗和鹅莓

## 1. 范围与适用性

本 PCR 覆盖鲜醋栗和鹅莓从多年生浆果种植管理、采收到农场交付点交接的前景生产过程。它适用于露地生产；只有在明确声明保护地路线、设施归属和活动记录时，才适用于保护地生产。范围包括种植管理、作物投入、采收、初级整理、分级，以及当这些活动由前景经营者控制并有记录时的场内包装或短时冷却。

本 PCR 用于按农场交付点净可销售果实归一化的作物年度或报告期前景数据包。数据包应识别物种或产品类型（例如醋栗或鹅莓）、品种、地理位置、生产系统、作物年度、采收状态、等级，以及是否包含场内清洗、冷却或包装。

本 PCR 不包括加工、冷冻、干燥、榨汁、发酵、保藏或其他转化后的浆果产品；不包括苗木繁育；不包括零售配送和消费者使用；也不包括降级果的下游加工。默认边界止于声明的农场交付点，交付后的运输不在范围内。动物产品、叶片、修剪物和其他非果实产物不属于参考产品，除非另有文件化的共产品路线声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.currants-and-gooseberries |
| classification_refs | CPC 3.0 `01351` — Currants and gooseberries |
| covered_products | 由多年生浆果种植管理生产、并以鲜果形式在农场交付点交付的鲜醋栗和鹅莓，可为散装或声明的包装状态 |
| excluded_products | 加工、冷冻、干燥、榨汁、发酵、保藏或其他转化后的果实；苗木繁育材料；未披露下游活动的零售成品；叶片和修剪物，除非单独声明为共产品 |
| representative_product | 在农场交付点交付的可销售鲜醋栗或鹅莓 |
| production_route | 多年生灌木建植与管理、适用时的灌溉和养分管理、作物保护、采收、初级整理、分级，以及条件性的场内包装或短时冷却 |
| market_state | 声明的农场交付点处于鲜果、可销售、已分级状态；散装或包装状态必须披露 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在农场交付点交付的可销售鲜醋栗或鹅莓 |
| How much | 1 kg 净可销售果实，已将声明的采收和整理拒收量及损失量分开记录 |
| How well | 声明产品身份、品种、成熟度或采收等级、采收状态、包装状态以及生产声明；质量按声明的交付状态计量 |
| How long or cycle | 一个声明的作物年度或报告期；披露多年生植株的树龄、生产阶段以及建植或补植处理 |
| reference_flow_link | `farm_gate_marketable_fresh_currant_gooseberry_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 农场交付点的可销售鲜醋栗和鹅莓 — 未映射 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或产品类型；品种；地理位置；生产系统；作物年度；植株树龄或生产阶段；市场等级或成熟度；采收产品状态；散装或包装状态；是否包含清洗、冷却、分级和包装；有机或其他生产声明；产量和分配基准 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考产品和终端可销售产出 | 质量 | kg | 按声明的农场交付状态计量净可销售果实。单独保留总采收量、拒收量、损失量以及任何水分或状态修正；不得在未声明的情况下改用干物质基准。 |
| `measurement_crop_cycle_basis` | 种植投入、采收、残余物和排放 | 视情况为质量、面积或体积 | kg；ha；m3；L；kWh | 每个数值必须关联同一声明的作物年度或报告期，以及所代表的地块或生产单元。只有在作物年度质量平衡闭合后，才可按净可销售参考产出归一化。 |
| `measurement_nutrient_basis` | 肥料和土壤改良剂投入 | 质量和元素养分含量 | kg 产品；kg N；kg P；kg K 或声明的等效基准 | 记录实际使用产品及其产品质量。若有养分含量，应按供应商或实验室报告基准记录 N、P、K，并保留产品身份；披露 P 或 K 是元素基准还是氧化物当量基准。 |
| `measurement_water_energy` | 灌溉水、工艺水、燃料和电力 | 体积、质量或能量 | m3；L；kg；kWh 或 MJ | 使用声明场址和作业对应的计量、发票、设备或承包商记录。仅在有文件化换算时转换单位，并保留原始记录基准。 |
| `measurement_output_reconciliation` | 采收和初级整理产出 | 质量 | kg | 在声明的计量不确定度内，将进入或采收的果实与可销售产出、声明的共产品、拒收量、腐败量和测得损失量进行平衡。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告期开始时已声明的多年生醋栗或鹅莓植株，以及其所代表的地块或生产单元；若建植或补植发生在报告期内，或有文件支持进行年度化，则纳入相关投入 |
| starting_condition_role | 作物年度前景生产起始条件；必须识别植株、土地占用、生产系统和生产阶段 |
| product_classification_scope | 来自管理种植、采收和可选初级整理，并在农场交付点交付的鲜醋栗和鹅莓 |
| recursive_input_rule | 前景路线中使用的同类别果实输入应记录为内部产品转移，或记录为披露来源的上游次级数据集；不得为同一产品流递归实例化本 PCR |
| upstream_dataset_requirement | 对苗木、肥料和土壤改良剂、作物保护产品、能源载体、供水、包装以及承包服务使用声明的上游数据集或供应商记录。本 PCR 不重建投入品的上游生产过程。 |
| disclosure | 数据包必须披露地理位置、地块或单元清单、作物年度、植株树龄或生产阶段、生产系统、灌溉来源、养分和作物保护实践、采收和分级路线、冷却或清洗、包装状态、残余物去向、共产品路线以及农场交付点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_year` | 种植和管理生产 | 纳入声明作物年度或报告期的作物管理投入和产出，并关联所代表的地块或生产单元。 | `fao-gaps-family-agriculture-2007` |
| `boundary_perennial_stand` | 多年生植株建植和补植 | 报告期发生的建植或补植投入应纳入；否则仅在有植株树龄和生产阶段证据时进行年度化，并披露处理方式。 | `osu-currants-gooseberries-production` |
| `boundary_harvest_hand_off` | 采收和农场交付点产出 | 默认前景边界止于声明的可销售鲜果农场交付点。交付后的运输和下游加工不纳入，除非作为单独范围明确加入。 | `fao-codex-fresh-produce-primary-production` |
| `boundary_conditional_conditioning` | 清洗、分级、包装和短时冷却 | 仅当场内经营者控制相关活动且能提供匹配的活动、产出和废物记录时，才纳入场内整理、包装或冷却；否则应将其披露为前景边界之外。 | `fao-codex-fresh-produce-primary-production` |
| `boundary_upstream_inputs` | 外购投入和服务 | 使用声明的次级数据集或供应商记录表示外购投入的上游生产，不得在前景库存中重复计算其上游活动。 | `fao-gaps-family-agriculture-2007` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_currant_gooseberry_management` | 多年生浆果种植管理 | required | 纳入声明作物年度或报告期的全部代表性地块或生产单元。 | 醋栗或鹅莓的生物生产管理 | 作物年度地块清单、面积、投入、植株阶段和净可销售产出 |
| `p_currant_gooseberry_harvest` | 采收和田间收集 | required | 纳入从受管理植株移除成熟或可销售果实并记录田间损失的作业。 | 采收责任以及从地块到采收果实的交接 | 采收批次、日期、总果量、合格果量和田间损失记录 |
| `p_currant_gooseberry_conditioning` | 初级整理、分级和农场交付准备 | conditional | 当经营者在农场交付前进行清洗、整理、分级、排序、冷却、包装或其他准备时纳入。 | 将原始采收果实转化为声明的可销售和降级状态 | 匹配的进入量、合格量、降级量、拒收量、能源、水、包装和储存记录 |

### 过程：多年生浆果种植管理（`p_currant_gooseberry_management`）

#### 输入

##### 产品流

###### 管理性浆果植株的种植材料（`planting_material`）

当苗圃植株、插条或其他繁殖材料在所代表的醋栗或鹅莓地块中种植或补植时，种植材料跨越生产边界。

- 选定流：醋栗或鹅莓种植材料 [unmapped]
- 流属性/单位：质量或数量 / kg 或 item，按记录填写
- 数量规则：按地块和作物年度记录实际种植或补植数量；如进行数量到质量换算，应保留换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stand_and_planting_records`
- 来源：`osu-currants-gooseberries-production`

###### 农业养分与肥料投入（`p_currant_gooseberry_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出，并单独报告养分总量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_soil_amendment_records`
- 来源：`fao-gaps-family-agriculture-2007`; `ipcc-2019-managed-soils-n2o`

###### 供给受管理植株的灌溉水（`irrigation_water`）

当水因作物灌溉而被取用或购买时，灌溉水跨越边界。记录必须识别水源和施用方法。

- 选定流：Irrigation water supply
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按地块和作物年度计量或由供应商记录的灌溉水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_and_water_quality_records`
- 来源：`fao-codex-fresh-produce-primary-production`

###### 声明路线中使用的作物保护产品（`crop_protection_products`）

当作物保护产品在所代表的作物年度中被购买、混配、施用或以其他方式使用时，其跨越边界。应保留施用时间和采前间隔记录。

- 选定流：作物保护产品供应 [unmapped]
- 流属性/单位：质量或体积 / kg 或 L 有效产品
- 数量规则：按施用事件记录实际制剂或有效成分量，并保留产品身份和剂量基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-codex-fresh-produce-primary-production`

###### 田间作业移动机械燃料（`mobile_machinery_fuel`）

在声明的前景路线中运行拖拉机、喷雾机、割草机、采收辅助设备和其他移动机械所用燃料应予记录。

- 选定流：Mobile agricultural machinery fuel supply
- 流属性/单位：能量或质量 / MJ、L 或 kg 燃料
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：按计量、发票或承包商记录归属于所代表田间作业的燃料使用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`fao-gaps-family-agriculture-2007`

##### 废物流

##### 基本流

###### 受管理浆果地块的土地占用（`land_occupation`）

土地占用记录声明作物年度或报告期内受管理植株所占用的面积和时间。

- 选定流：Agricultural land occupation
- 流属性/单位：面积-时间 / m2·year 或 ha·year
- 数量规则：记录作物年度内所代表的面积和占用时间；仅纳入声明的生产面积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stand_and_planting_records`
- 来源：`fao-gaps-family-agriculture-2007`

###### 新建或补植浆果生产面积的土地转化（`land_transformation`）

土地转化为条件性流，仅在声明报告期发生且有记录的土地用途转换或重大补植事件时记录。

- 选定流：浆果生产土地转化 [unmapped unless the transformation event is resolved]
- 流属性/单位：面积 / ha
- 数量规则：记录实际转化或补植面积，以及声明的转化前后土地状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出，并披露事件年度
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stand_and_planting_records`
- 来源：`fao-gaps-family-agriculture-2007`

###### 支持灌溉的水资源取用（`water_resource_withdrawal`）

当水源取用由前景数据包控制或有记录时，除灌溉水产品输入外，还应单独记录自然资源取用。

- 选定流：Water resource withdrawal
- 流属性/单位：体积 / m3
- 数量规则：在有记录时，记录与所代表地块灌溉水供给相对应的水源取用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_and_water_quality_records`
- 来源：`fao-codex-fresh-produce-primary-production`

##### 输出

##### 产品流

###### 待采收果实生物量（`fruit_ready_for_harvest`）

种植管理过程将声明的待采收状态果实交接给采收过程。该流是内部产品状态交换，不是终端参考产品。

- 选定流：待采收醋栗和鹅莓果实 [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按作物年度记录可采收果实质量，并与采收记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_and_yield_records`
- 来源：`osu-currants-gooseberries-production`

##### 废物流

###### 修剪和移除的植株残余物（`pruning_residues`）

修剪残余物和移除的植株部分应按实际去向记录：留存、还田、焚烧、堆肥、移出或其他处理。

- 选定流：浆果植株修剪残余物 [unmapped]
- 流属性/单位：质量 / kg 干物质或湿物质，并声明基准
- 数量规则：按地块或生产单元测量或估计残余物质量，并记录去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_waste_fate_records`
- 来源：`ipcc-2019-managed-soils-n2o`

#### 输出

##### 基本流

###### 管理土壤直接产生的氧化亚氮排放（`soil_nitrous_oxide`）

当所选计算方法将排放归因于作物年度中的氮投入、残余物管理或其他管理土壤来源时，记录土壤氧化亚氮。

- 选定流：Nitrous oxide emission to ambient air
- 流属性/单位：质量 / kg N2O
- 数量规则：根据声明的氮投入、残余物去向、土壤与气候背景和一个适用的经审查方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_and_soil_amendment_records`
- 来源：`ipcc-2019-managed-soils-n2o`

###### 管理养分施用产生的氨排放（`ammonia_to_air`）

当养分产品、施用方法和所选方法支持排放估算时，记录氨排放。

- 选定流：Ammonia emission to ambient air
- 流属性/单位：质量 / kg NH3
- 数量规则：根据声明的养分投入、产品类型、施用方法、时间和适用因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_and_soil_amendment_records`
- 来源：`ipcc-2019-managed-soils-n2o`

###### 生产区域向水体的硝酸盐损失（`nitrate_to_water`）

当场址条件和所选方法支持淋失或径流估算时，记录向水体的硝酸盐损失。

- 选定流：Nitrate emission to water
- 流属性/单位：质量 / kg nitrate 或 kg N，并声明报告基准
- 数量规则：根据声明的养分投入、土壤和水文条件以及适用的淋失或径流方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_and_soil_amendment_records`
- 来源：`ipcc-2019-managed-soils-n2o`

### 过程：采收和田间收集（`p_currant_gooseberry_harvest`）

#### 输入

##### 产品流

###### 处于待采收状态的果实生物量（`harvest_ready_fruit_input`）

采收过程从种植管理过程接收声明的待采收状态果实。

- 选定流：待采收醋栗和鹅莓果实 [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按地块和采收记录核对每个采收批次进入的果实质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_and_yield_records`
- 来源：`osu-currants-gooseberries-production`

##### 废物流

##### 基本流

##### 输出

##### 产品流

###### 原始采收醋栗和鹅莓（`raw_harvested_fruit`）

当果实从植株上采下并转移至初级整理或农场交付点时，原始采收果实跨越采收边界。

- 选定流：原始采收醋栗和鹅莓 [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按批次和采收日期称量或记录的采收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_yield_records`
- 来源：`osu-currants-gooseberries-production`

##### 废物流

###### 田间和采收损失（`harvest_losses`）

因未成熟、损伤、掉落或其他原因未被收集、留在田间的果实，应与采收产品分开记录。

- 选定流：醋栗和鹅莓采收损失 [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按地块和作物年度测量或计算田间及采收损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_and_yield_records`
- 来源：`fao-codex-fresh-produce-primary-production`

##### 基本流

### 过程：初级整理、分级和农场交付准备（`p_currant_gooseberry_conditioning`）

#### 输入

##### 产品流

###### 用于整理的原始采收果实（`conditioning_fruit_input`）

当经营者在交付前执行清洗、整理、分级、排序、冷却、包装或其他初级准备时，原始采收果实进入该条件性过程。

- 选定流：原始采收醋栗和鹅莓 [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：记录每个整理或包装批次匹配的进入批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch_records`
- 来源：`fao-codex-fresh-produce-primary-production`

###### 清洗或整理用工艺水（`conditioning_water`）

仅当声明边界内实际发生清洗或其他用水整理步骤时，记录工艺水。

- 选定流：Process water supply
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：计量或按批次归属的整理作业用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch_records`
- 来源：`fao-codex-fresh-produce-primary-production`

###### 分级、冷却或包装用电力（`conditioning_electricity`）

记录声明初级整理边界内设备和短时冷却作业所用电力。

- 选定流：Electricity supply for primary conditioning
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：与匹配整理批次和纳入的冷却时长对应的计量或设备归属电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-gaps-family-agriculture-2007`

###### 声明交付格式的包装材料和容器（`packaging_materials`）

当场内经营者在农场交付前提供或控制用于保护或展示果实的包装、周转箱、托盘、袋或其他材料时，应记录包装。身份解析前必须声明具体包装族类。

- 选定流：鲜醋栗和鹅莓交付用包装材料 [unmapped]
- 流属性/单位：质量 / kg 包装材料，或带材料质量的数量
- 数量规则：按匹配产品批次记录实际包装材料，并声明周转或一次性状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch_records`
- 来源：`fao-codex-fresh-produce-primary-production`

##### 废物流

##### 基本流

##### 输出

##### 产品流

###### 农场交付点的可销售鲜醋栗和鹅莓（`marketable_farm_gate_fruit`）

这是终端参考产品，即满足声明市场等级和状态条件并跨越农场交付点的果实。

- 选定流：农场交付点的可销售鲜醋栗和鹅莓 [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：扣除声明的分级、包装、冷却和损失后得到的净合格产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 净可销售果实的参考数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_batch_records`
- 来源：`fao-codex-fresh-produce-primary-production`

###### 转用于声明非鲜食用途的降级果（`downgraded_fruit_coproduct`）

未达到鲜食市场等级、但有文件证明转移给加工商、饲料路线或其他使用者的果实，应作为条件性产品共产品记录，而不是未分类废物。

- 选定流：用于声明非鲜食用途的降级醋栗和鹅莓 [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按批次和去向称量或记录降级产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售鲜果产出，并披露共产品分配
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch_records`
- 来源：`mass-balance-identity`

##### 废物流

###### 整理产生的不可食、腐败或拒收果实（`conditioning_rejects`）

未作为声明共产品销售或转移的果实，应按实际去向作为废物或残余物记录。

- 选定流：鲜浆果整理拒收物和腐败果 [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按匹配整理批次和去向称量或计算拒收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_batch_records`
- 来源：`mass-balance-identity`

###### 条件性短时存放过程中的产品腐败（`holding_spoilage`）

当短时冷却或存放步骤纳入声明的前景边界时，应单独记录存放期间按批次和存放时间产生的果实损失。

- 选定流：鲜浆果短时存放腐败 [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按批次和存放期记录腐败量；活动未纳入时允许为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售果实产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_batch_records`
- 来源：`fao-codex-fresh-produce-primary-production`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 种植管理、采收和整理 | 优先使用分开的地块、采收、分级、包装和冷却记录，使共享负荷在应用分配规则前能够按测得的产品状态归属。 | `iso-14044-2006` |
| `allocation_mass_balance` | 果实、降级果、拒收物和损失 | 先闭合匹配的果实质量平衡。具有文件化预期用途和正向转移的去向作为共产品；未转移或不可食材料按记录的废物或残余物去向处理。 | `mass-balance-identity` |
| `allocation_perennial_output` | 多年生植株共享投入 | 使用数据集已审查并披露的基准，将共享植株投入分配给声明的可销售产品和文件化共产品。不得以未披露的经济或质量基准替代。 | `iso-14044-2006` |
| `allocation_package_and_cooling` | 可选包装和冷却 | 将包装和冷却活动归属于接受该服务的匹配果实批次或产品状态；不得将活动分摊给范围外的下游产品。 | `fao-codex-fresh-produce-primary-production` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stand_and_planting_records` | `p_currant_gooseberry_management` | planting material, land occupation, land transformation | field register, planting invoice, stand map, replacement record | field_id; area; species; cultivar; stand_age; planting_date; replacement_area; prior_land_state; production_system | reconcile field roster and stand records to the declared crop year | ha; years; kg or item | each planting or replacement event; annual roster | complete crop year and stand period | all represented fields and units | sum by field and state; retain establishment or replacement events separately | field map; supplier invoice; stand inventory; land-use record |
| `cp_nutrient_and_soil_amendment_records` | `p_currant_gooseberry_management` | fertilizer and soil-amendment products | purchase record, application log, supplier label, assay, or laboratory result | field_id; product_name; product_mass; application_date; nutrient_N; nutrient_P; nutrient_K; reporting_basis; method | reconcile product records to each application and preserve product-specific nutrient content | kg product; kg N; kg P; kg K | each application | complete crop year | all represented fields and units | sum actual product mass and nutrient totals without merging product identities | invoices; labels; assays; application logs |
| `cp_irrigation_and_water_quality_records` | `p_currant_gooseberry_management` | irrigation water and source withdrawal | meter, pump record, invoice, source register, water-quality record | field_id; source_id; volume; application_date; method; quality_test; withdrawal_volume | match water supply and source withdrawal to fields and crop year | m3 | each irrigation event or meter period | complete crop year | all represented irrigation sources | sum by source and field; preserve measured versus attributed volumes | meter calibration; source permit or register; water-quality test |
| `cp_crop_protection_records` | `p_currant_gooseberry_management` | crop-protection products | application log, product label, invoice, sprayer record | field_id; product_name; formulation; active_ingredient; amount; date; pest_or_disease; method; preharvest_interval | reconcile products and application events to represented fields and harvest lots | kg; L; date | each application | complete crop year | all represented fields and contractors | retain formulation identity and active-ingredient basis; do not combine products | label; calibrated sprayer; application log; harvest interval record |
| `cp_field_energy_records` | `p_currant_gooseberry_management` | mobile machinery fuel | fuel invoice, tank meter, contractor record, equipment log | field_id; operation; equipment; fuel_type; amount; date; contractor_scope | attribute fuel to included field operations using measured or documented contractor records | L; kg; MJ | each refuelling or operation period | complete crop year | all represented field operations | sum by operation and represented field; disclose attribution method | invoices; meter; equipment log; contractor statement |
| `cp_harvest_and_yield_records` | `p_currant_gooseberry_harvest` | harvest-ready fruit, raw harvested fruit, harvest losses | lot ticket, scale, harvest log, field inspection, yield record | field_id; lot_id; cultivar; harvest_date; harvested_mass; accepted_mass; field_loss; grade; destination | reconcile field-level harvest lots to crop-year output | kg | each harvest lot | complete harvest period | all represented fields and units | sum gross, accepted, loss, and destination outputs without double counting | calibrated scale; lot ticket; harvest log; grade record |
| `cp_residue_and_waste_fate_records` | `p_currant_gooseberry_management` | pruning residues and residue fate | pruning log, weigh record, field note, destination record | field_id; residue_type; mass; moisture_basis; date; fate; destination | record removed and retained residues separately and link fate to the field | kg; percent | each removal or management event | complete crop year | all represented fields | retain dry or wet basis and convert only with documented factor | field log; weigh record; destination evidence |
| `cp_conditioning_batch_records` | `p_currant_gooseberry_conditioning` | incoming fruit, water, package, accepted fruit, downgraded fruit, rejects, spoilage | batch ticket, scale, grade sheet, wash record, cooling record, package record | batch_id; incoming_mass; accepted_mass; downgraded_mass; reject_mass; spoilage_mass; water; package; start_end_time; destination | match every conditioning batch to incoming lot, output state, included activity, and destination | kg; m3; item; time | each batch | complete included conditioning period | all included conditioning equipment and lots | close fruit mass balance; preserve each destination and optional operation separately | calibrated scale; grade sheet; water meter; cooling log; package record |
| `cp_conditioning_energy_records` | `p_currant_gooseberry_conditioning` | electricity for grading, packing, and cooling | electricity meter, equipment log, invoice, runtime record | equipment_id; batch_id; kWh; runtime; cooling_duration; allocation_method | match meter or runtime attribution to included batches and equipment | kWh; h | meter period and batch attribution | complete included conditioning period | all included equipment | attribute shared meters by documented runtime or processed mass and disclose method | meter record; calibration; runtime log; allocation worksheet |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground flows | Normalize each included flow to 1 kg net marketable farm-gate fruit after the crop-year and conditioning mass balances are closed. | crop-year flow amount; net marketable output | amount per kg reference fruit | `mass-balance-identity` |
| `calc_nutrient_content` | fertilizer and soil-amendment products | Product mass × declared nutrient fraction; preserve each product and reporting basis before summing nutrient totals. | product identity; product mass; supplier label or assay; N/P/K basis | kg product and kg N/P/K by source |  |
| `calc_perennial_stand_allocation` | establishment, replacement, and shared stand inputs | Allocate documented establishment or replacement activity over the declared productive period only when stand-age and productive-phase evidence support the treatment; disclose the period and method. | establishment records; replacement records; stand age; productive phase; crop-year output | crop-year allocated amount | `osu-currants-gooseberries-production`; `iso-14044-2006` |
| `calc_managed_soil_emissions` | soil N2O, ammonia, and nitrate loss | Apply one geographically and methodologically applicable reviewed method to declared nutrient inputs, residue fate, soil and water context, and relevant pathways; retain factor provenance and avoid double counting. | nutrient records; residue records; soil and climate data; application method; factors | emissions by pathway and reference output | `ipcc-2019-managed-soils-n2o` |
| `calc_harvest_mass_balance` | managed production and harvest | Gross available fruit = raw harvested fruit + field or harvest losses within declared measurement uncertainty; document any unmeasured remainder. | yield records; harvested mass; field-loss records | reconciled harvest outputs | `mass-balance-identity` |
| `calc_conditioning_mass_balance` | primary conditioning | Incoming fruit = marketable fruit + declared co-product + rejects + spoilage + measured process loss within the stated uncertainty. | batch masses; grade records; destinations; loss records | reconciled conditioning outputs | `mass-balance-identity` |
| `calc_shared_energy_allocation` | conditioning electricity | Attribute shared electricity by measured batch meter, documented runtime, or processed mass, and retain the chosen basis with the batch records. | meter total; runtime or processed mass; batch output | batch electricity per reference output |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and all product-state rows | Confirm currant or gooseberry identity, cultivar or variety, harvested state, grade, production system, and farm-gate hand-off; do not use an unnamed mixed-berry proxy without disclosure. | field register; lot ticket; grade record; sales or hand-off record |
| `dq_temporal_alignment` | all foreground rows | Inputs, harvest, emissions, conditioning, and output records must cover the same declared crop year or reporting period; proxy years and partial seasons must be disclosed. | dated field, application, harvest, meter, and batch records |
| `dq_field_and_site_completeness` | managed production | Enumerate all represented fields, production units, and contributing sites; reconcile included and excluded areas and prevent double counting in aggregation. | field roster; site register; area reconciliation |
| `dq_mass_and_unit_basis` | product, waste, residue, water, and nutrient rows | Retain original measurement units, conversion factors, moisture or nutrient bases, and scale or meter evidence; distinguish zero, not applicable, estimated, and missing. | calibration records; labels; assays; conversion worksheet |
| `dq_input_application_traceability` | nutrient, crop-protection, water, and energy rows | Link each input to field, date, operation, product identity, and contractor scope where applicable; retain application and source-quality evidence. | invoices; labels; application logs; water tests; contractor records |
| `dq_output_and_waste_reconciliation` | harvest and conditioning | Close the fruit mass balance and record every marketable, co-product, reject, spoilage, residue, and loss destination. | scales; batch tickets; grade sheets; destination records |
| `dq_identity_resolution` | parameterized and unmapped flows | Before final TIDAS process publication, resolve each applicable Flow Set reference and each remaining physical exchange to a verified UUID, or retain the exchange as explicitly coverage finding with review evidence. | identity review record |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | terminal product output | 将数据集缩放为 1 kg 净可销售鲜醋栗或鹅莓，并声明参考流要求的产品限定信息。 |  |
| `validation_process_route` | process map | 管理生产和采收各纳入一次；仅在活动和交接记录属于声明边界时纳入初级整理；不得重复计算已嵌入的投入。 | `fao-codex-fresh-produce-primary-production` |
| `validation_crop_cycle_reconciliation` | fields, inputs, outputs, and emissions | 确认地块清单、植株阶段、作物投入、采收、残余物、排放和可销售产出属于同一作物年度或报告期。 | `fao-gaps-family-agriculture-2007` |
| `validation_nutrient_and_emission_basis` | nutrient and managed-soil emissions | 核对实际产品和养分记录、残余物去向、选定排放路径、因子和报告基准；披露未建模的路径。 | `ipcc-2019-managed-soils-n2o` |
| `validation_conditioning_balance` | optional conditioning | 在不确定度范围内核对进入果实与可销售果实、文件化共产品、拒收量、腐败量和测得损失量。 | `mass-balance-identity` |
| `validation_water_and_crop_protection_records` | irrigation and crop protection | 核实水源、施用方法、水质证据、产品身份、施用日期以及纳入活动的采前间隔或等效声明。 | `fao-codex-fresh-produce-primary-production` |
| `validation_flow_identity` | every flow | 仅接受经过核实的 UUID 作为 `fixed`，以及适用的现有 Flow Set 作为 `parameterized`；否则保留未映射覆盖，不得为强行匹配而改变真实产品边界、流类型或方向。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 鲜醋栗和鹅莓前景生产数据集 |
| downstream_use | `secondary_dataset`；仅在审查和发布后作为 `background_dataset` |
| allowed_use | 保持声明物种、品种、地理位置、作物年度、生产系统、植株阶段、灌溉、投入实践、整理、包装状态、共产品路线和分配基准的鲜醋栗和鹅莓农场交付点 LCA |
| excluded_use | 加工、冷冻、干燥、榨汁、发酵、保藏、苗圃、零售、消费者使用或下游加工数据集；未经审查的其他浆果物种代理 |
| required_metadata | 物种或产品类型；品种；地理位置；地块和场址清单；作物年度；植株树龄或生产阶段；生产系统；面积；产量；灌溉来源和方法；养分和作物保护记录；采收和等级；整理、冷却、清洗和包装状态；残余物和废物去向；分配；农场交付点；身份解析 |
| required_quality_disclosure | 地块和场址覆盖；作物年度覆盖；代理值和估计值；缺失记录；计量和换算基准；养分和排放方法；水质证据；质量平衡；包装和冷却纳入状态；范围或不确定性发现 |
| update_trigger | 新的经审查醋栗或鹅莓生产证据、实质性路线或生产系统变化、管理土壤或作物保护方法修订、Flow Set 或 UUID 身份变化、包装或整理边界变化，或代表性数据超出声明的 QA 基准 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-codex-fresh-produce-primary-production` | official_guidance | FAO/Codex, Proposed Draft Code of Hygienic Practice for the Primary Production, Harvesting and Packing of Fresh Fruits and Vegetables, https://www.fao.org/4/x8735e/x8735e0n.htm | 初级生产边界、灌溉和水质、农业化学品记录、采收、包装、可追溯性和整理控制 |
| `fao-gaps-family-agriculture-2007` | extension_guidance | FAO, Guidelines: Good Agricultural Practices for Family Agriculture, 2007, https://www.fao.org/4/a1193e/a1193e00.htm | 作物管理、肥料和水记录、采收、运输边界背景和田间记录要求 |
| `osu-currants-gooseberries-production` | extension_guidance | Oregon State University Extension Service, Growing Berries on the Oregon Coast: Gooseberries, Currants, and Other Minor Berry Crops, https://extension.oregonstate.edu/catalog/em-9182-growing-berries-oregon-coast-gooseberries-currants-other-minor-berry-crops | 醋栗和鹅莓多年生生产、植株建植、作物发育、采收背景和作物特定路线证据 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤 N2O 路径、氮挥发和淋失背景、残余物及氮平衡方法披露 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级、优先细分和分配基准披露 |
| `mass-balance-identity` | method_factor | 将质量守恒应用于匹配的作物、采收和整理记录 | 参考归一化、采收和整理核对、共产品与拒收物分类 |
