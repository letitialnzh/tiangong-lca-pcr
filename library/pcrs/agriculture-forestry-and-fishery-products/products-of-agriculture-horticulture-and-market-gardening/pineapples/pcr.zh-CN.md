---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pineapples
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 声明农场门或初级整理门的新鲜菠萝

## 1. 范围与适用性

本 PCR 用于 CPC 3.0 `01318`“Pineapples”对应的完整新鲜菠萝前景数据包。范围包括建植和生产管理、繁殖材料、养分、灌溉、作物保护、田间能源、土地占用、管理土壤排放、采收、田间交接，以及当声明门位于清洗、分选、修整或短期冷却之后时的可选初级整理。

默认门是农场门或田间交接门。数据包可以在所代表的路线包含初级整理时声明初级整理门，并必须声明植株或宿根/再生周期、作物年度、重要时的品种、地理位置、灌溉和水源状态、成熟度或质量类别、合格比例、损失和声明门。果汁、罐藏、干燥、冷冻、发酵、切分、加糖或其他加工产品，零售和消费者使用，独立苗圃系统以及声明门之后物流均不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pineapples` |
| classification_refs | CPC 3.0 `01318`，`Pineapples`; mapping relation: exact |
| covered_products | 声明植株或宿根/再生作物在农场门、田间交接门或可选初级整理门的完整新鲜菠萝 |
| excluded_products | 果汁；罐藏、干燥、冷冻、发酵、切分、加糖或配制产品；零售成品；消费者使用；独立商业苗圃繁殖 |
| representative_product | 在声明成熟度、质量、处理状态及农场门或初级整理门的完整新鲜菠萝 |
| production_route | 菠萝建植、植株或宿根/再生生产、采收、田间交接以及可选初级整理或冷却 |
| market_state | 记录重要时的品种、成熟度或等级、周期、地理位置和声明门的散装或声明包装完整新鲜菠萝 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场门、田间交接门或初级整理门的完整新鲜菠萝 |
| How much | 1 kg |
| How well | 重要时的品种；植株或宿根/再生周期；成熟度或质量类别；地理位置；作物年度；灌溉和水源状态；合格比例；处理状态；以及声明门 |
| How long or cycle | 一个声明的生产周期和作物年度；披露种植、宿根/再生、重植和生产年限处理 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 声明门的完整新鲜菠萝＼ |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 完整新鲜果实；重要时的品种；植株或宿根/再生周期；作物年度；地理位置；成熟度或质量类别；灌溉和水源状态；合格比例；处理状态；声明门；产品身份绑定状态 |

构建前景数据包时，`必需限定信息` 必须在数据包中声明。没有明确门声明时，不得从整理后果实身份推定农场门身份。

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 | kg | 参考流以声明门完整新鲜菠萝的净 kg 表示，并保留收货基准。 |
| `cycle_and_yield_basis` | 生产和产出 | 质量和时间 | kg 和周期标识 | 分别记录植株及每个宿根/再生或重植周期，并按同一周期和合格产出基准归一化。 |
| `nutrient_product_basis` | 肥料和土壤改良剂 | 质量 | kg 产品和 kg 养分 | 每种实际肥料或改良剂产品单独列卡，保留实物质量、配方、养分组成和施用记录；养分量不是同一产品的另一次投入，不使用集合或分组标识代替具体流身份。 |
| `water_and_energy_basis` | 灌溉、取水、燃料和电力 | 体积、质量或能量 | m3、L、kg、MJ 或 kWh | 水源取水、输送灌溉、泵送能源、田间燃料和电力在归一化前保持区分。 |
| `output_quality_basis` | 采收、整理和损失 | 质量和质量 | kg 和声明质量基准 | 以同一声明基准核对采收果实、合格果实、次品、残余物、损失和整理产出。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | planting_material_and_declared_pineapple_crop_cycle |
| starting_condition_role | crop_establishment_or_ratoon_cycle_start |
| product_classification_scope | CPC 3.0 `01318` 对应的完整新鲜菠萝；加工和苗圃产品不在范围内 |
| recursive_input_rule | 同类菠萝用作种植或宿根/再生材料时，记录来源、批次、周期及上游披露作为繁殖投入，不得默认为新鲜参考产品。 |
| upstream_dataset_requirement | 为繁殖材料、肥料和改良剂、作物保护、电力、燃料、水、运输、整理、废物处理和排放因子确定数据集或记录。 |
| disclosure | 声明周期、种植和宿根/再生处理、地理位置、品种、作物年度、面积、产量、质量基准、路线、门、产出归宿、分配和身份证据缺口。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_establishment_and_maintenance` | 田间生产 | 包括建植、土壤和田间准备、养分和改良剂、灌溉、作物保护、田间作业、土地占用及采收前管理土壤排放。 | `fao-gap-framework-2003`；`fao-gap-framework-2003`；`ipcc-2019-refinement` |
| `boundary_harvest_and_field_delivery` | 采收和田间交接 | 当属于前景范围时，包括采收、收集、内部搬运以及至声明农场门或田间交接门的运输。 | `fao-gap-framework-2003`；`fao-postharvest-handling-ae075e` |
| `boundary_primary_conditioning` | 可选整理 | 只有声明门位于这些操作之后时，才包括清洗、分选、修整、冷却、整理能源、废水和次品。 | `codex-cxs-182-1993`；`fao-postharvest-handling-ae075e` |
| `boundary_downstream_exclusion` | 下游加工和使用 | 排除果汁、罐藏、干燥、冷冻、发酵、切分、加糖、零售、消费者使用及声明门后的物流。 | `codex-cxs-182-1993`；`iso-14067` |
| `boundary_input_completeness` | 所有路线 | 对繁殖材料、养分、作物保护、水、土地、能源、采收、运输、排放、产出归宿和整理投入给出数值、合理为零或文件化排除。 | `fao-gap-framework-2003`；`ipcc-2019-refinement`；`mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `pineapple_crop_production` | 菠萝建植与生产管理 | required |  | foreground | 周期投入和采收果实产出 |
| `pineapple_harvest_and_delivery` | 菠萝采收与田间交接 | required |  | foreground | 农场门或田间交接门的完整果实 |
| `pineapple_primary_conditioning` | 菠萝初级整理与声明门 | conditional | 声明门位于清洗、分选、修整、包装或冷却之后时纳入 | foreground | 所选门的整理后果实 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：菠萝建植与生产管理（`pineapple_crop_production`）

#### 输入
##### 产品流

###### 种植或宿根/再生繁殖材料（`propagation_material_input`）

记录种植苗、冠芽、吸芽或保留的宿根/再生材料及来源和周期。

- 选定流：建植用菠萝繁殖材料（unmapped）
- 流属性/单位：质量或换算为声明质量的数量 / kg 或 count
- 数量规则：实测数量和质量，保留换算依据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_propagation_and_cycle_records`
- 来源：`fao-gap-framework-2003`

###### 尿素肥料（`pineapple_crop_production_agricultural_nutrient_inputs_urea`）

**pineapple_crop_production_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_fertilizer_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement`；`fao-fertilizer-identities`

###### 硫酸铵肥料（`pineapple_crop_production_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_fertilizer_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement`；`fao-fertilizer-identities`

###### 重过磷酸钙肥料（`pineapple_crop_production_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_fertilizer_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement`；`fao-fertilizer-identities`

###### 氯化钾肥料（`pineapple_crop_production_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_fertilizer_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement`；`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`pineapple_crop_production_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_fertilizer_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement`；`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`pineapple_crop_production_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_fertilizer_and_amendment_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_and_amendment_records`
- 来源：`fao-gap-framework-2003`；`ipcc-2019-refinement`；`fao-organic-nutrients`

###### 灌溉供水（`irrigation_water_input`）

- 选定流：灌溉供水（unmapped 或 parameterized）
- 流属性/单位：体积 / m3
- 数量规则：按田块和事件计量或记录的输送灌溉量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_and_withdrawal_records`
- 来源：`fao-crop-evapotranspiration-56`；`fao-gap-framework-2003`

###### 作物保护产品（`crop_protection_input`）

- 选定流：作物保护产品（unmapped）
- 流属性/单位：质量 / kg 产品及适用时的 kg 有效成分
- 数量规则：按有效成分和施用事件记录产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-gap-framework-2003`

###### 田间机械燃料（`field_machinery_fuel`）

记录燃料类型、数量、机械或服务商、田间作业和报告期间。

- 选定流：移动机械燃料
- 流属性/单位：质量、体积或能量 / kg、L、MJ 或 kWh
- 数量规则：按作业和周期的燃料实测或承包商记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`fao-gap-framework-2003`

##### 废物流

##### 基本流

###### 菠萝生产土地占用（`pineapple_land_occupation`）

记录菠萝生产周期所代表的占用面积和持续时间。

- 选定流：农业土地占用
- 流属性/单位：面积-时间 / ha-year
- 数量规则：实测面积乘占用时间并分配至周期
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_land_and_cycle_records`
- 来源：`fao-gap-framework-2003`

###### 水源取水（`water_source_withdrawal`）

将水源取水与作物实际灌溉供水分开记录，并保留水源和事件依据。

- 选定流：水资源取水
- 流属性/单位：体积 / m3
- 数量规则：按田块、水源和事件计量或记录水源取水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_and_withdrawal_records`
- 来源：`fao-crop-evapotranspiration-56`

#### 输出
##### 产品流

###### 可采收菠萝作物产出（`harvestable_pineapple_crop`）

记录从栽培转入采收的作物质量，并保留等级和采收时间。

- 选定流：采收交接的完整新鲜菠萝作物（unmapped）
- 流属性/单位：质量 / kg
- 数量规则：进入采收的实测或核算作物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output_records`
- 来源：`fao-gap-framework-2003`；`mass-balance-identity`

##### 废物流

#### 输出
##### 基本流

###### 直接土壤氧化亚氮排放（`direct_soil_n2o_emission`）

根据记录的养分、残余物和土壤管理投入，使用一种选定的因子方法计算声明的直接土壤排放。

- 选定流：排放至空气的氧化亚氮（unmapped 或 parameterized）
- 流属性/单位：质量 / kg N2O 或按方法由 kg N2O-N 换算
- 数量规则：根据肥料、改良剂、残余物和土壤氮投入计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_fertilizer_and_amendment_records`
- 来源：`ipcc-2019-refinement`

### 过程：菠萝采收与田间交接（`pineapple_harvest_and_delivery`）

#### 输入
##### 产品流

###### 进入采收的作物（`crop_received_for_harvest`）

记录进入采收作业的作物质量，并保留用于核算的田块、批次、质量和时间信息。

- 选定流：进入采收的完整新鲜菠萝作物（unmapped）
- 流属性/单位：质量 / kg
- 数量规则：采收入口的实测作物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output_records`
- 来源：`fao-gap-framework-2003`

###### 采收机械燃料（`harvest_machinery_fuel`）

记录采收及相关机械作业或承包服务使用的燃料或能源。

- 选定流：移动机械燃料或能源
- 流属性/单位：质量、体积或能量 / kg、L、MJ 或 kWh
- 数量规则：按批次或事件记录采收作业能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_energy_records`
- 来源：`fao-gap-framework-2003`

###### 采收到声明门的公路运输服务（`harvest_road_transport`）

记录从采收交接到声明门的运输服务，包括距离、载荷和承运依据。

- 选定流：公路货运运输服务
- 流属性/单位：质量-距离 / tonne-km 或声明服务单位
- 数量规则：采收到声明门的载荷、距离和路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_transport_records`
- 来源：`fao-postharvest-handling-ae075e`

##### 废物流

#### 输出
##### 产品流

###### 农场门或田间交接门的完整新鲜菠萝（`fresh_pineapple_farm_gate_output`）

记录在声明农场门或田间交接门交付的合格新鲜菠萝，并与采收投入和损失核对。

- 选定流：声明农场门或田间交接门的完整新鲜菠萝（unmapped）
- 流属性/单位：质量 / kg
原始产出计量与核对要求：按批次记录净合格果实质量并保留质量基准和门

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：声明门每 1,000 kg 合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output_records`
- 来源：`codex-cxs-182-1993`；`mass-balance-identity`

##### 废物流

###### 采收次品和田间损失（`harvest_culls_and_losses`）

将次品和采收损失与合格水果分开记录，并保留声明的去向或处理方式。

- 选定流：有声明归宿的菠萝次品或采收损失（unmapped）
- 流属性/单位：质量 / kg
- 数量规则：按批次和归宿记录次品及损失质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output_records`
- 来源：`mass-balance-identity`；`fao-postharvest-handling-ae075e`

##### 基本流

### 过程：菠萝初级整理与声明门（`pineapple_primary_conditioning`）

#### 输入
##### 产品流

###### 进入初级整理的果实（`fruit_received_for_conditioning`）

记录进入初级整理的新鲜水果批次及其门点、质量和质量基础。

- 选定流：进入初级整理的完整新鲜菠萝（unmapped）
- 流属性/单位：质量 / kg
- 数量规则：整理入口的批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_gate_records`
- 来源：`fao-postharvest-handling-ae075e`

###### 整理用水（`conditioning_water_input`）

将清洗或初级整理用水与水源取水分开记录，并保留事件依据。

- 选定流：工艺用水
- 流属性/单位：体积 / m3
- 数量规则：按批次计量或记录的整理用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water_records`
- 来源：`fao-postharvest-handling-ae075e`

###### 整理用电（`conditioning_electricity_input`）

记录初级整理设备使用的电力，并关联到整理批次或运行期间。

- 选定流：电力供应
- 流属性/单位：能量 / kWh
- 数量规则：按仪表或设备记录分配到果实批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-postharvest-handling-ae075e`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 整理后的完整新鲜菠萝（`conditioned_pineapple_gate_output`）

记录声明初级整理边界后的合格完整新鲜菠萝，并保留其质量基础。

- 选定流：声明初级整理后的完整新鲜菠萝（unmapped）
- 流属性/单位：质量 / kg
原始产出计量与核对要求：整理后的合格产出实测质量

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：声明门每 1,000 kg 合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_gate_records`
- 来源：`codex-cxs-182-1993`；`mass-balance-identity`

##### 废物流


###### 整理次品和废水（`conditioning_culls_and_wastewater`）

记录初级整理移出的水果、固体物和废水及其声明的处理或排放路线。

- 选定流：进入声明处理或排放的整理次品或废水（unmapped）
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：带处理或排放归宿的实测批次产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_gate_records`
- 来源：`fao-postharvest-handling-ae075e`；`mass-balance-identity`


###### 整理损失（`conditioning_loss`）

在相同质量和质量基础上核对整理输入、合格输出和移出物料。

- 选定流：有声明归宿的整理损失（unmapped）
- 流属性/单位：质量 / kg
- 数量规则：在同一质量和质量基准上核对投入和产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明门合格新鲜菠萝产出.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_and_gate_records`
- 来源：`mass-balance-identity`

##### 基本流


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：声明门的完整新鲜菠萝＼
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：声明门的完整新鲜菠萝＼
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_priority` | 生产、采收和整理 | 当记录支持独立节点时，优先拆分植株、宿根/再生、采收、田间交接、整理和储存责任。 | `iso-14044`；`fao-gap-framework-2003` |
| `allocation_plant_and_ratoon_cycles` | 共享田间和基础设施负荷 | 使用声明周期、持续时间和合格产出基准分配共享建植及多周期负荷；信息不完整时披露敏感性。 | `iso-14044`；`fao-gap-framework-2003` |
| `allocation_fruit_and_nonreference_outputs` | 合格果实、次品、残余物和损失 | 分别记录预期产出、残余物、次品和废物及归宿；不能拆分时采用声明的物理或经济方法并披露替代方案。 | `iso-14044`；`mass-balance-identity` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_propagation_and_cycle_records` | `pineapple_crop_production` | propagation and cycle | planting or ratoon record | material; source; lot; count; mass; date; field; cycle | supplier record, planting log, or survey；原始汇总与分配：sum by field and cycle and retain conversion | count, kg, date | per establishment or cycle | represented crop cycle | field or farm | 每声明的参考流 | supplier document, field log |
| `cp_fertilizer_and_amendment_records` | `pineapple_crop_production` | fertilizer and amendment | purchase and application record | product; nutrient; product mass; nutrient mass; date; field | invoice, analysis, log, or applicator record；原始汇总与分配：sum by product and nutrient and normalize | kg product and kg nutrient | per application | crop cycle | field or farm | 每声明的参考流 | invoice, label, analysis, log |
| `cp_irrigation_and_withdrawal_records` | `pineapple_crop_production` | irrigation and withdrawal | meter or pumping record | source; meter; readings; volume; pumping energy; date; field | calibrated meter, pumping log, or invoice；原始汇总与分配：keep withdrawal and delivered irrigation distinct | m3 and energy | per event or period | irrigation season | field and source | 每声明的参考流 | calibration, readings, invoice |
| `cp_crop_protection_records` | `pineapple_crop_production` | crop protection | application record | product; active ingredient; rate; date; field | farm log, invoice, and label；原始汇总与分配：sum by product and active ingredient | kg product and kg active ingredient | per application | crop cycle | field or farm | 每声明的参考流 | label, invoice, log |
| `cp_field_energy_records` | `pineapple_crop_production` | field energy | machine or contractor record | machine; operation; carrier; quantity; date; field | fuel log, meter, telematics, or invoice；原始汇总与分配：aggregate by operation and normalize | L, kg, MJ, or kWh | per operation or period | crop cycle | field and farm | 每声明的参考流 | invoice, meter, telematics |
| `cp_land_and_cycle_records` | `pineapple_crop_production` | land and cycle | field record | field; area; planting date; ratoon status; duration; year | field map and production register；原始汇总与分配：reconcile area and duration before allocation | ha, date, year | per field and cycle | represented cycle | field or farm | 每声明的参考流 | field map, register |
| `cp_harvest_and_output_records` | `pineapple_harvest_and_delivery` | harvest and outputs | harvest and delivery record | field; lot; date; mass; quality; culls; losses; fate; gate | calibrated scale, harvest log, delivery ticket；原始汇总与分配：reconcile inputs and outputs by lot | kg, date, quality | per event | crop cycle | field to gate | 每声明的参考流 | calibration, log, ticket |
| `cp_harvest_energy_records` | `pineapple_harvest_and_delivery` | harvest energy | machine or contractor record | machine; operation; carrier; quantity; mass; period | fuel log, telematics, meter, or invoice；原始汇总与分配：allocate by harvested mass | L, kg, MJ, or kWh | per event or period | crop cycle | harvest operation | 每声明的参考流 | invoice, telematics, meter |
| `cp_harvest_transport_records` | `pineapple_harvest_and_delivery` | field delivery | transport record | vehicle; payload; distance; route; date; lot; gate | weighbridge, route log, and invoice；原始汇总与分配：sum payload-distance by lot and route | tonne-km or service unit | per movement | crop cycle | harvest to gate | 每声明的参考流 | weighbridge, route record |
| `cp_conditioning_and_gate_records` | `pineapple_primary_conditioning` | fruit, outputs, and gate | conditioning batch record | input; water; electricity; culls; wastewater; output; quality; gate | batch sheet, meters, scale, treatment record；原始汇总与分配：reconcile input, output, culls, wastewater, and loss | kg, m3, kWh, quality | per batch | conditioning period | conditioning site | 每声明的参考流 | calibration, batch and treatment records |
| `cp_conditioning_water_records` | `pineapple_primary_conditioning` | conditioning water | meter or batch record | source; meter; batch; volume; date; lot | calibrated meter or batch sheet；原始汇总与分配：sum by source and batch | m3 | per batch or period | conditioning period | conditioning site | 每声明的参考流 | calibration, batch record |
| `cp_conditioning_energy_records` | `pineapple_primary_conditioning` | conditioning energy | meter or equipment record | equipment; operation; electricity; period; lot; mass | meter, equipment log, or invoice；原始汇总与分配：allocate by lot mass and operation | kWh or MJ | per batch or period | conditioning period | conditioning site | 每声明的参考流 | meter, log, invoice |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | `normalized amount = recorded amount / accepted fresh pineapple output × 1 kg` | recorded amount; accepted output; gate and cycle | amount per 1 kg accepted output | `mass-balance-identity` |
| `calc_cycle_allocation` | plant and ratoon cycles | 按声明周期持续时间和合格产出分配共享田间及建植记录，并披露基准和敏感性。 | area; duration; output; shared input | cycle-attributed input or emission | `iso-14044`；`fao-gap-framework-2003` |
| `calc_nutrient_basis` | fertilizer and amendments | `nutrient mass = product mass × declared nutrient fraction`；分别保留产品和养分。 | product mass; label or analysis fraction | kg nutrient and kg product | `fao-gap-framework-2003` |
| `calc_managed_soil_emission` | soil emissions | 将选定方法层级应用于养分、改良剂、残余物和土壤投入；仅在需要时换算 N2O-N 并披露因子。 | inputs; factor; conversion | emission by substance and compartment | `ipcc-2019-refinement`；`emep-eea-2023-guidebook` |
| `calc_output_reconciliation` | harvest and conditioning | `input mass = accepted output + culls + residues + measured loss`，先统一声明基准。 | input; output; culls; residues; loss | mass-balance result and discrepancy | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_reference_identity` | 参考流 | 确认门、产品状态、属性、单位和身份状态；时持续披露。 | reference-flow metadata and identity review |
| `quality_cycle_completeness` | 生产周期 | 覆盖植株及所代表的宿根/再生或重植周期，或记录排除理由。 | crop-cycle register and field records |
| `quality_input_traceability` | 生产投入 | 每项投入关联田块、批次、事件、日期、数量和来源记录。 | invoices, labels, meters, logs |
| `quality_water_separation` | 灌溉和取水 | 确认取水、输送水、泵送能源和消耗结果未重复或错误标注。 | meter reconciliation and source record |
| `quality_output_mass_balance` | 采收和整理 | 核对合格果实、次品、残余物、废水和损失并解释差异。 | scale records and mass-balance worksheet |
| `quality_factor_and_uncertainty` | 排放和外部因子 | 披露方法层级、来源、地理位置、时期、不确定性和敏感性。 | factor register and calculation review |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 确认一个 1 kg 参考流对应声明门的完整新鲜菠萝，并记录限定信息和身份状态。 | `codex-cxs-182-1993` |
| `validation_cycle_coverage` | 过程图 | 确认植株、宿根/再生、重植和作物年度处理明确且未重复计算。 | `fao-gap-framework-2003`；`iso-14044` |
| `validation_input_completeness` | 生产和采收 | 确认繁殖材料、养分、作物保护、水、土地、能源、运输和排放有数值、合理为零或文件化排除。 | `fao-gap-framework-2003`；`ipcc-2019-refinement` |
| `validation_water_and_energy` | 灌溉和整理 | 确认取水、输送水、泵送能源、田间燃料和整理电力保持区分并有基准。 | `fao-crop-evapotranspiration-56`；`fao-postharvest-handling-ae075e` |
| `validation_mass_balance` | 采收和整理 | 确认投入、合格果实、次品、残余物、废水和损失核对，并为非参考产出声明归宿。 | `mass-balance-identity` |
| `validation_allocation_and_disclosure` | 共享负荷和产出 | 确认周期分配、多产出处理、门、质量、地理位置、作物年度和敏感性已披露。 | `iso-14044`；`iso-14067` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset；background_dataset |
| allowed_use | 与声明门、作物周期、地理位置、灌溉状态、质量和时期相匹配的完整新鲜菠萝 LCA 建模 |
| excluded_use | 加工产品；苗圃系统；缺少周期、门、质量、水或产出归宿披露的数据集；边界外下游物流或消费者研究 |
| required_metadata | canonical PCR id；CPC reference；田块或农场范围；品种；植株或宿根/再生周期；作物年度；地理位置；灌溉和水源；养分和作物保护基准；产量；合格和剔除果实；整理状态；门；分配；因子层级；身份证据记录；协议覆盖 |
| required_quality_disclosure | 所代表周期和年份；原始记录覆盖；秤和仪表校准；水处理；质量平衡容差；因子来源和方法；parameterized 和 unmapped 流；排除项；不确定性和敏感性 |
| update_trigger | 周期模型、品种、路线、水源、养分或作物保护实践、产量、整理边界、身份分类、排放方法或代表性时期变化 |

证据适用性：引用的一般农场记录和采后框架不提供作物特定的产量、寿命、交接截止点或 LCA 分配默认值。这些属于本 PCR 的方法选择，应按实际物种、路线和期间限定，取得兼容的农艺证据后才能声称完整。作者暂定范围仅为筛查辅助，不是经验验收限值，也不能替代实测。

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-182-1993` | standard | Codex Alimentarius CXS 182-1993, Standard for Pineapples | 新鲜范围、质量描述和加工排除 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration | 灌溉记录和水平衡区分 |
| `ipcc-2019-refinement` | method_factor | 2019 IPCC Refinement to the 2006 IPCC Guidelines | 管理土壤和残余物排放计算 |
| `emep-eea-2023-guidebook` | method_factor | EMEP/EEA air pollutant emission inventory guidebook, agricultural chapters | 农业排放方法选择 |
| `iso-14044` | standard | ISO 14044, Environmental management — LCA requirements and guidelines | 分配层级、共产品处理和校验 |
| `iso-14067` | standard | ISO 14067, Greenhouse gases — Carbon footprint of products | 产品边界披露和质量报告 |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity | 采收和整理产出核对 |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | 仅为一般监测和农场记录背景；作物特定路线、寿命、数量范围及 LCA 分配属于 PCR 选择，须补充适用证据。 |
| `fao-postharvest-handling-ae075e` | official_guidance | Kitinoja and Kader, Small-Scale Postharvest Handling Practices: A Manual for Horticultural Crops, 4th edition (2002), FAO-hosted original, https://www.fao.org/4/ae075e/ae075e00.htm | 仅为一般采后处理、冷却和损失记录背景；作物特定参数及本 PCR 截止点和归属须另行证据支持。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
