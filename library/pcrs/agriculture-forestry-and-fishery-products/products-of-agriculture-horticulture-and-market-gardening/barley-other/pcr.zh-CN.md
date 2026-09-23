---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.barley-other
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 声明农场门或初级处理门的非播种用大麦谷物

## 1. 范围与适用性

本 PCR 用于 CPC 3.0 `01152`“Barley, other（大麦，其他）”对应的非播种用大麦谷物前景数据包构建。范围覆盖为声明的食用、饲用、制麦或其他工业用途种植的大麦，从作物生产、收获，到在选定时纳入的收获后初级干燥、清理、分级和短期储存，直至声明的农场门或初级处理门。

本 PCR 不覆盖播种用大麦种子、育种或认证种子、麦芽、面粉、淀粉、乙醇、酿造产品、配制食品或饲料、零售产品以及其他下游加工。谷物可以声明下游用途，但制麦、食品加工、饲料配制和其他转化活动应建模为独立数据集。CPC 叶节点中的“其他”是覆盖标签而非产品身份；数据包必须说明预期用途类别和物理产品状态。

默认声明门为：(a) 与已核实的“农场门、收获谷物、未加工”大麦参考流匹配的收获农场门，或 (b) 初级干燥、清理、分级或短期储存之后的门。选定的门、含水率基准、清理状态、质量描述、地理范围、作物年度以及散装或包装状态均为必需限定条件。初级处理后的输出必须根据声明的产品状态重新核验；不得仅因材料仍被称为大麦谷物就重复使用农场门固定 UUID。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.barley-other` |
| classification_refs | CPC 3.0 `01152`，`Barley, other` |
| covered_products | 用于声明的食用、饲用、制麦或其他工业用途，在收获农场门或声明的初级处理门的非播种用大麦谷物 |
| excluded_products | 播种用大麦种子；育种、基础、登记或认证种子；麦芽；面粉；淀粉；乙醇；酿造产品；配制食品或饲料；零售即用产品 |
| representative_product | 在声明含水率基准以及声明农场门或初级处理门的完整非播种用大麦谷物 |
| production_route | 一年生大麦作物生产、收获，以及可选的收获后初级干燥、清理、分级和短期储存 |
| market_state | 记录预期用途、质量描述、含水率基准和声明门的散装或包装非播种用大麦谷物 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场门或初级处理门的非播种用大麦谷物 |
| How much | 1 kg |
| How well | 声明的用途；在具有实质性影响时记录大麦类型或品种；含水率基准；等级或质量描述；清理和干燥状态；地理范围；作物年度；以及声明门 |
| How long or cycle | 一个声明的作物周期和收获年度；若门在储存之后，另行声明储存时长 |
| reference_flow_link | 以下参考数量和产品流 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Barley, other `7054f7a2-d70f-4b45-8fd9-7e6f314aa5a9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Binding | fixed |
| Required qualifiers | 非播种用途；食用、饲用、制麦或其他工业用途声明；在具有实质性影响时记录大麦类型或品种；含水率基准；质量描述；清理和干燥状态；地理范围；作物年度；声明门；散装或包装状态 |

构建前景数据包时，`Required qualifiers` 中的项目必须出现在数据集元数据、过程说明、参考流注释、产品描述或等效数据包字段中。固定参考 UUID 仅适用于已核实的农场门、收获谷物、未加工状态。若选定门位于初级处理或储存之后，应重新核验接收流身份；若不存在精确固定 UUID 或适用的 Flow Set，则保留未映射覆盖。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以选定声明门的非播种用大麦谷物净质量 kg 表示参考流，并声明含水率基准。 |
| `moisture_basis` | 收获和处理后的谷物 | 质量和含水率 | kg 和 percent | 记录原样质量和含水率基准；若采用干物质归一化，保留实测含水率和换算规则。 |
| `nitrogen_input_basis` | 肥料和氮排放 | 质量 | kg 产品和 kg N | 分别记录肥料产品质量和养分含量；氮排放计算使用声明的 kg N 投入基准。 |
| `water_basis` | 灌溉和取水 | 体积或质量 | m3 或 kg | 区分来源取水、交付灌溉水、消耗量和水足迹结果，不得合并为一个流。 |
| `energy_inventory` | 田间燃料、电力、收获和谷物干燥 | 质量、体积或能量 | kg、L、MJ 或 kWh | 归一化前记录载能体、活动、期间、单位和换算基准。 |
| `output_reconciliation` | 收获、处理、筛下物、残余物和损失 | 质量 | kg | 在按参考流归一化前，使用共同含水率基准核对收获谷物、接收谷物、筛下物、残余物和实测损失。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_production` | 田间生产 | 纳入声明的播种用种子投入、土地占用、整地、播种、施肥、适用时的灌溉、作物保护、田间作业以及收获前的直接田间排放。 | `ipcc-2019-managed-soils-n2o`; `fao-crop-evapotranspiration-56` |
| `boundary_harvest` | 收获和田间交接 | 在其属于前景数据包时，纳入收割、脱粒或联合收割、田边收集以及至声明农场或初级处理交接点的运输。 | `fao-grain-postharvest-systems-1998` |
| `boundary_primary_conditioning` | 收获后路线 | 仅当声明门位于相关作业之后时，纳入初级干燥、清理、分级、粉尘或筛下物处理以及短期储存。 | `fao-grain-postharvest-systems-1998`; `usda-barley-grain-standards` |
| `boundary_downstream_exclusion` | 下游加工 | 排除制麦、制粉、淀粉或乙醇转化、酿造、食品或饲料配制、零售和消费者使用；将其表示为下游数据集。 | `usda-barley-grain-standards`; `fao-grain-postharvest-systems-1998` |
| `boundary_input_completeness` | 所有前景路线 | 对肥料、灌溉、作物保护、田间能量、电力、土地、收获能量、干燥能量、清理损失、残余物、纳入时的储存以及直接排放给出数值、合理归零或有记录的排除。 | `ipcc-2019-managed-soils-n2o`; `fao-grain-postharvest-systems-1998` |

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | seed_for_sowing_input_and_declared_crop_cycle |
| starting_condition_role | crop_establishment_condition |
| product_classification_scope | 对应 CPC 3.0 `01152`、`Barley, other` 的非播种用大麦谷物；播种用大麦种子是上游投入而非参考产品 |
| recursive_input_rule | 用作作物建立投入的同类大麦流，应以播种用种子投入记录来源、批次、数量和上游种子数据集披露；不得静默追溯为非播种用参考产品 |
| upstream_dataset_requirement | 播种用种子、肥料、作物保护产品、能源、供水、运输、干燥、废物处理和其他上游投入使用已识别数据集或声明的供应商记录 |
| disclosure | 声明用途、在具有实质性影响时的大麦类型或品种、作物周期、地理范围、作物年度、播种用种子来源、灌溉状态、含水率基准、收获和处理路线、声明门、质量描述以及每个非参考输出的去向 |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `barley_crop_production` | 大麦作物生产 | required |  | foreground | 收获的大麦谷物及相关残余物 |
| `barley_harvest_and_delivery` | 大麦收获和田间交付 | required |  | foreground | 农场门或初级处理交接点的收获谷物 |
| `barley_primary_conditioning` | 初级干燥、清理和分级 | conditional | 声明门位于初级干燥、清理、分级或短期储存之后时纳入 | foreground | 声明门的处理后大麦谷物 |
| `barley_storage_and_dispatch` | 储存和声明门发运 | conditional | 储存或发运实质性改变声明参考流时纳入 | foreground | 选定门的声明大麦谷物 |

### 过程：大麦作物生产（`barley_crop_production`）

#### 输入

##### 产品流

###### 用于大麦作物的播种用种子（`seed_for_sowing_input`）

播种用种子是上游作物建立投入而非参考产品。记录来源、批次、处理信息以及在具有实质性影响时的品种。

- Selected flow: Barley seed for sowing `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- Binding: fixed
- Flow property / unit: Mass / kg
- Amount rule: 按田块或作物批次实测播种用种子质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按选定门每 1,000 kg 收获大麦谷物
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_input_records`

###### 农业养分与肥料投入（`barley_crop_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一过程和报告期的定量参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 来源：

###### 作为产品投入的灌溉水（`irrigation_water_input`）

灌溉发生时记录交付的灌溉水，并保持来源、取水、交付和消耗的区别。

- Selected flow: Irrigation water
- Binding: parameterized
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: 实测灌溉水体积，并在需要时换算为声明单位
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按选定门每 1,000 kg 收获大麦谷物
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation_records`

###### 田间机械动力或燃料（`field_energy_input`）

- Selected flow: Field mechanical power or energy carrier
- Flow property / unit: Energy / MJ or kWh
- Amount rule: 按田间作业实测或供应商记录的能量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: 按选定门每 1,000 kg 收获大麦谷物
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_energy_records`

###### 作物保护产品（`crop_protection_product_input`）

根据原始记录按配制产品或活性物质记录作物保护产品。不使用通用 material-input Flow Set；在确认兼容身份前保留未映射覆盖。

- Selected flow: 原始记录中的具名作物保护产品或活性物质
- Flow property / unit: Mass / kg
- Amount rule: 按施用记录实测配制产品或活性物质质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 按选定门每 1,000 kg 收获大麦谷物
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crop_protection_records`

##### 废物流

不假定有废物投入。再利用有机材料、回用水或其他废物衍生投入只有在跨越前景边界且身份和去向有记录时单独记录。

##### 基础流

###### 土地占用（`land_occupation`）

- Selected flow: Agricultural land occupation
- Binding: parameterized
- Flow property / unit: Area-time / ha a
- Amount rule: 实测田块面积乘以声明作物持续时间
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按作物周期和参考输出
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land_and_output_records`

###### 灌溉水取水（`water_withdrawal`）

- Selected flow: 来源特定的水取用
- Binding: parameterized
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: 根据来源特定的计量取水记录计算
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按选定门每 1,000 kg 收获大麦谷物
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_irrigation_records`

#### 输出

##### 产品流

###### 收获的非播种用大麦谷物（`harvested_barley_grain`）

收获的大麦谷物是交给农场门或初级处理路线的输出，仍是非播种用谷物过程输出。

- Selected flow: 田间交接点的收获非播种用大麦谷物
- Flow property / unit: Mass / kg
- Amount rule: 保留含水率基准和收获批次身份的实测收获谷物质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 初级处理前的过程输出
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`

###### 大麦秸秆或田间残余物（`barley_straw_or_field_residue`）

秸秆或其他田间残余物在移出、销售、转移、还田、焚烧或以其他方式跨越前景边界时记录；留在田间的残余物通过声明去向记录。

- Selected flow: 原始记录中的具名大麦秸秆或田间残余物
- Flow property / unit: Mass / kg
- Amount rule: 跨边界残余物质量和声明去向的实测值
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按选定门每 1,000 kg 收获大麦谷物
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_fate_records`

##### 废物流

只有在有边界跨越和去向记录时，才将收获损失、损坏谷物以及离开田间路线的其他材料记录为废物。不使用产品输出 Flow Set 作为后备绑定。

##### 基础流

除上述行之外的直接田间排放，仅在选定方法支持且基础流身份得到确认时增加。

###### 直接土壤氧化亚氮排放（`direct_soil_n2o_emission`）

根据声明的氮投入和选定方法或层级计算直接土壤 N₂O。建立最终交换前确认接收环境和流身份。

- Selected flow: direct nitrous oxide emission to air
- Binding: parameterized
- Flow property / unit: Mass / kg
- Amount rule: 对核算的 N 投入应用选定方法，并披露 N₂O-N 至 N₂O 的换算
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按选定门每 1,000 kg 收获大麦谷物
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fertilizer_input_records`

### 过程：大麦收获和田间交付（`barley_harvest_and_delivery`）

#### 输入

##### 产品流

###### 待收获的大麦作物（`barley_crop_received_for_harvest`）

收获节点接收生产路线的大麦作物，并分别记录谷物和残余物结果。

- Selected flow: 收获作业接收的大麦作物或收获谷物材料
- Flow property / unit: Mass / kg
- Amount rule: 进入收获和田间交付作业的作物或谷物实测质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按收获事件和参考输出
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`

###### 收获能量（`harvest_energy_input`）

- Selected flow: 收获机械动力或能量载体
- Flow property / unit: Energy / MJ or kWh
- Amount rule: 按作业实测或供应商记录的收获能量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: 按 1,000 kg 收获大麦谷物
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy_records`

###### 收获或田间交付运输服务（`harvest_transport_service`）

- Selected flow: 谷物货运或内部搬运服务
- Flow property / unit: Mass-distance / kg*km or t*km
- Amount rule: 运输质量、距离、方式和路线的实测值
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 按声明交接点每 1,000 kg 谷物
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_energy_records`

##### 废物流

只有在离开收获边界且去向已知时记录收获损失。

#### 输出

##### 产品流

###### 交付至农场或初级处理交接点的谷物（`barley_at_handoff`）

交接输出是转入选定门路线的实测谷物质量，并保留含水率基准和批次身份。

- Selected flow: 田间或初级处理交接点的收获非播种用大麦谷物
- Flow property / unit: Mass / kg
- Amount rule: 收获或处理交接点的实测谷物质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 定量过程输出
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`

##### 废物流

###### 收获和田间交付损失（`harvest_field_delivery_loss`）

记录实测谷物或异物损失及声明去向；不假定固定废物流 UUID。

- Selected flow: 具有声明去向的实测收获或田间交付损失
- Flow property / unit: Mass / kg
- Amount rule: 损失质量和声明去向的实测值
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按 1,000 kg 收获大麦谷物
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_fate_records`

### 过程：初级干燥、清理和分级（`barley_primary_conditioning`）

#### 输入

##### 产品流

###### 进入初级处理的收获大麦谷物（`grain_to_primary_conditioning`）

仅当声明门位于初级干燥、清理、分级或短期储存之后时使用。除非声明状态得到核实，否则不复用农场门固定 UUID。

- Selected flow: 进入初级处理的收获大麦谷物
- Flow property / unit: Mass / kg
- Amount rule: 具有含水率基准的处理批次进料实测质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按处理批次和声明输出
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_output_records`

###### 处理工艺热（`conditioning_process_heat`）

- Selected flow: 干燥或处理用工艺热
- Binding: parameterized
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `purchased-process-heat`
- Flow property / unit: Energy / MJ or kWh
- Amount rule: 分配到处理批次的计量或供应商记录能量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: 按 kg 处理后大麦谷物输出
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`

###### 处理机械动力（`conditioning_mechanical_power`）

- Selected flow: 清理、分级或输送用机械动力
- Flow property / unit: Energy / MJ or kWh
- Amount rule: 分配到处理批次的计量或供应商记录能量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: 按 kg 处理后大麦谷物输出
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_records`

###### 处理用水（`conditioning_water_input`）

仅在实际使用且用途有记录时记录工艺水。

- Selected flow: 处理工艺水
- Binding: parameterized
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: 按处理批次或活动记录的计量用水量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按 kg 处理后大麦谷物输出
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water_records`

###### 清理辅助材料（`cleaning_auxiliary_input`）

使用时记录具名清理辅助或处理投入。不使用通用 material-input Flow Set；在确认兼容身份前保留未映射覆盖。

- Selected flow: 批次记录中的具名清理辅助材料
- Flow property / unit: Mass / kg
- Amount rule: 每个处理批次实测辅助材料质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 按 kg 处理后大麦谷物输出
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_auxiliary_records`

##### 废物流

###### 处理筛下物和拒收谷物（`conditioning_screenings_and_rejects`）

筛下物、异物、拒收谷物和不合格材料按流和去向记录，不得计入接收的参考产品。除非确认精确身份或适用 Flow Set，否则该流保持未映射。

- Selected flow: 具有声明去向的实测处理筛下物或拒收物
- Flow property / unit: Mass / kg
- Amount rule: 批次质量和声明去向的实测值
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按进入初级处理的 kg 谷物
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_reject_records`

#### 输出

##### 产品流

###### 处理后的非播种用大麦谷物（`conditioned_barley_grain`）

当声明门位于初级处理之后时，处理后大麦谷物为接收的参考输出。只有在产品状态精确核验后才绑定，否则保留未映射输出记录。

- Selected flow: 声明门的处理后非播种用大麦谷物
- Flow property / unit: Mass / kg
- Amount rule: 带含水率基准和质量描述的接收谷物实测输出
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 定量参考输出
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioned_output_records`

##### 废物流

数据包应为全部处理拒收物、筛下物、损坏谷物以及包装或搬运废物指定实测去向。

##### 基础流

仅在能量记录、因子选择和基础流身份确认后计算处理能量排放。

###### 处理粉尘排放至空气（`conditioning_dust_to_air`）

仅在有声明方法、实测或计算依据，并确认接收环境和基础流身份时记录粉尘；否则保留未映射覆盖。

- Selected flow: 谷物粉尘排放至空气
- Binding: parameterized
- Flow property / unit: Mass / kg
- Amount rule: 除尘器实测质量或按方法计算的排放量
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: 按 kg 处理后大麦谷物输出
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_reject_records`

### 过程：储存和声明门发运（`barley_storage_and_dispatch`）

#### 输入

##### 产品流

###### 进入声明储存或发运的谷物（`grain_to_declared_storage`）

当选定门位于储存或交付之后时纳入此条件过程。

- Selected flow: 进入声明储存或发运的非播种用大麦谷物
- Flow property / unit: Mass / kg
- Amount rule: 具有含水率基准和批次身份的储存或发运进料实测质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按储存期间和参考输出
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_handoff_records`

###### 储存或发运能量（`storage_dispatch_energy`）

- Selected flow: 储存电力、通风或其他能量载体
- Binding: parameterized
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Flow property / unit: Energy / MJ or kWh
- Amount rule: 按储存期间和谷物质量计量或由供应商记录的能量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按 kg 谷物和声明储存时长
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_handoff_records`

###### 发运运输服务（`dispatch_transport_service`）

- Selected flow: 从储存点或声明门出发的货运服务
- Flow property / unit: Mass-distance / kg*km or t*km
- Amount rule: 运输质量、距离、方式和路线的实测值
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 按声明门每 kg 大麦谷物
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_gate_output_records`

###### 运输包装（`transport_packaging_input`）

仅当声明门采用袋、内衬或其他包装状态而非散装谷物时记录包装。

- Selected flow: transport-packaging function
- Binding: parameterized
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- Flow property / unit: Mass / kg
- Amount rule: 实测包装质量，或依据包装记录将件数换算为质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 按声明包装门每 kg 大麦
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

##### 废物流

###### 储存损失或损坏谷物（`storage_loss_or_damaged_grain`）

纳入储存时，按批次、期间、质量、损坏类别和去向记录储存损失。除非确认精确身份或适用 Flow Set，否则该损失保持未映射。

- Selected flow: 具有声明去向的实测储存损失或损坏谷物
- Flow property / unit: Mass / kg
- Amount rule: 实测库存核对或处置质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 按进入储存的 kg 谷物
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_and_handoff_records`

#### 输出

##### 产品流

###### 声明门的非播种用大麦谷物（`declared_gate_barley_grain`）

当选定门包括储存或发运时，声明门输出为参考产品。只有在产品状态精确核验后才绑定。

- Selected flow: 声明门的非播种用大麦谷物
- Flow property / unit: Mass / kg
- Amount rule: 声明门的实测谷物质量，并记录含水率、质量描述以及散装或包装状态
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 定量参考输出
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_gate_output_records`

##### 废物流

未在储存损失行中记录的其他损坏或拒收材料，应分别记录实测去向。

##### 基础流

仅根据已确认的能量记录和声明因子计算能量相关排放。

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_priority` | 作物、收获、处理、储存和发运过程 | 首先在记录支持时将作物作业、收获、干燥、清理、分级、储存和废物处理拆分为独立过程节点，以避免分配。 | `iso-14044-2006` |
| `allocation_grain_and_residue` | 大麦谷物及移出的秸秆或残余物 | 按声明去向处理留在田间的残余物。无法拆分且秸秆或其他残余物被移出或销售时，采用明确声明的物理或经济分配方法并披露敏感性。 | `iso-14044-2006`; `fao-grain-postharvest-systems-1998` |
| `allocation_screenings_and_rejects` | 筛下物、损坏谷物和不合格材料 | 将接收谷物、筛下物、拒收物和损失作为不同输出并记录去向。没有明确返工或分配决定时，不得将拒收材料分配给参考产品。 | `fao-grain-postharvest-systems-1998`; `usda-barley-grain-standards` |
| `allocation_substitution` | 残余物或副产品利用 | 仅当被替代产品、路线、市场和证据均有声明时使用替代法；不得从产品标签或通用残余物名称推断替代抵扣。 | `iso-14044-2006` |

## 8. 前景数据收集、计算与质量规则

### 数据收集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_input_records` | `barley_crop_production` | 播种用种子投入 | 种子采购或接收记录 | 批次；品种；供应商；来源；处理；质量；含水率基准；日期；田块 | 地磅、经校准秤、发票或供应商记录 | kg | 每个种子批次 | 作物周期 | 生产田块或农场 | 按田块和作物批次汇总种子质量 | 秤校准、发票、供应商记录 |
| `cp_fertilizer_input_records` | `barley_crop_production` | 肥料投入 | 采购和施用记录 | 产品；养分；产品质量；养分质量；日期；田块；施用方式 | 发票、养分分析、农场日志或施用记录 | kg 产品和 kg 养分 | 每次施用 | 作物周期 | 生产田块或农场 | 按产品和养分汇总并按声明输出归一化 | 发票、养分分析、施用日志 |
| `cp_irrigation_records` | `barley_crop_production` | 灌溉和取水 | 计量或泵送记录 | 来源；计量器；读数；体积；泵能量；日期；田块 | 经校准计量器、泵送日志或发票 | m3、kg 和能量单位 | 每次事件或期间 | 灌溉季 | 田块和水源 | 按来源汇总并区分取水和交付 | 计量器校准、读数、发票 |
| `cp_field_energy_records` | `barley_crop_production` | 田间能量 | 田间作业能量记录 | 作业；机器；能量载体；数量；田块；日期 | 燃料日志、发票、遥测或计量器 | L、kg、MJ 或 kWh | 每次田间作业 | 作物周期 | 生产田块或农场 | 按作业汇总并按选定门输出归一化 | 发票、机器日志、遥测 |
| `cp_crop_protection_records` | `barley_crop_production` | 作物保护 | 施用记录 | 产品；活性物质；配方；质量；日期；田块；施用方式 | 喷洒日志、产品标签或施用记录 | kg 产品或 kg 活性物质 | 每次施用 | 作物周期 | 生产田块或农场 | 按产品或活性物质汇总并按输出归一化 | 标签、日志、施用记录 |
| `cp_land_and_output_records` | `barley_crop_production` | 土地、收获和输出 | 田块和收获记录 | 田块；面积；作物持续时间；收获日期；总谷物；残余物；去向；含水率；质量 | 田块记录、经校准秤和发运记录 | ha、作物持续时间、kg、percent | 每次收获和年度核对 | 作物年度 | 生产田块或农场 | 归一化前核对田块输出 | 田块图、秤校准、收获票据 |
| `cp_harvest_and_output_records` | `barley_harvest_and_delivery` | 收获谷物和收获能量 | 收获和交付记录 | 田块；机器；作业；谷物质量；残余物；损失；含水率；能量；日期；交接点 | 经校准秤、收获日志、遥测和交付票据 | kg、percent、L、MJ 或 kWh | 每次收获 | 作物周期 | 田间至交接点 | 按批次和声明交接点汇总 | 秤票、机器记录、交付记录 |
| `cp_harvest_energy_records` | `barley_harvest_and_delivery` | 收获能量 | 机器或承包商记录 | 机器；能量载体；数量；收获质量；期间 | 承包商发票、燃料日志、遥测或计量器 | kg、L、MJ 或 kWh | 每次收获或期间 | 作物周期 | 收获作业 | 按收获质量和声明作业分配 | 发票、遥测、计量器 |
| `cp_residue_and_fate_records` | `barley_harvest_and_delivery` | 残余物和损失去向 | 残余物或损失记录 | 流；质量；含水率；去向；目的地；日期；田块或批次 | 秤票、打捆记录、田间日志、处置、转移或销售记录 | kg | 每次事件或活动 | 作物周期 | 田块和交接点 | 按流和去向汇总，不与接收谷物合并 | 秤票、去向记录、田间日志 |
| `cp_conditioning_energy_records` | `barley_primary_conditioning` | 干燥、清理和分级能量 | 设施能量记录 | 产线；能量类型；数量；期间；批次；进料和出料质量 | 计量器、公用事业账单、设备日志或供应商记录 | kWh、MJ、kg 或 L | 每批或活动 | 处理活动 | 设施和产线 | 分配到批次并按接收输出归一化 | 计量器、账单、设备日志 |
| `cp_conditioning_water_records` | `barley_primary_conditioning` | 处理用水 | 批次用水记录 | 批次；来源；体积；用途；日期；进料和出料质量 | 计量器、批次单或公用事业记录 | m3 或 kg | 每批或活动 | 处理活动 | 设施和产线 | 按来源和用途汇总 | 计量器、批次单、公用事业记录 |
| `cp_conditioning_auxiliary_records` | `barley_primary_conditioning` | 清理辅助材料 | 批次投入记录 | 产品；身份；质量；用途；批次；日期 | 批次单、发票、标签或供应商记录 | kg | 每批 | 处理活动 | 设施和产线 | 按具名投入和批次汇总 | 发票、标签、批次记录 |
| `cp_conditioning_reject_records` | `barley_primary_conditioning` | 筛下物、拒收物和粉尘 | 处理拒收记录 | 批次；流；质量；含水率；质量；去向；除尘器质量 | 经校准秤、拒收日志、粉尘记录或承包商记录 | kg 和 percent | 每批或活动 | 处理活动 | 设施和产线 | 按流和去向汇总并与批次进料核对 | 秤、拒收日志、去向记录 |
| `cp_conditioned_output_records` | `barley_primary_conditioning` | 处理后参考输出 | 处理输出记录 | 批次；接收质量；含水率；等级；质量；清理状态；门 | 经校准秤和质量检验记录 | kg 和 percent | 每批 | 处理活动 | 设施和声明门 | 按声明基准汇总接收批次 | 秤校准、质量检验、发运记录 |
| `cp_storage_and_handoff_records` | `barley_storage_and_dispatch` | 储存能量和损失 | 储存库存记录 | 批次；期初质量；期末质量；含水率；时长；能量；损失；去向 | 库存核对、计量器、公用事业账单或储存日志 | kg、percent、days、MJ 或 kWh | 每批或储存期间 | 声明储存时长 | 储存地点 | 按批次和时长核对质量并分配能量 | 库存记录、计量器、账单 |
| `cp_packaging_records` | `barley_storage_and_dispatch` | 运输包装 | 包装领用或发运记录 | 包装类型；件数；质量；容量；批次；门；日期 | 包装库存、包装日志或供应商记录 | 件和 kg | 每个包装批次 | 声明门期间 | 声明门或包装地点 | 汇总包装质量，或用记录的容量和质量换算件数 | 库存记录、包装日志、供应商记录 |
| `cp_declared_gate_output_records` | `barley_storage_and_dispatch` | 声明门输出 | 发运或门记录 | 批次；门；日期；质量；含水率；质量；包装或散装状态 | 地磅、秤、发运或接收记录 | kg 和 percent | 每次发运或门事件 | 声明门期间 | 声明门 | 汇总输出批次并保留门身份 | 秤票、发运记录、质量记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_declared_gate` | 所有前景流 | 记录流量 / 选定声明门的接收非播种用大麦谷物质量 * 参考数量 | 所有适用协议；声明门输出 | 每 1 kg 参考产品的数量 | `mass-balance-identity` |
| `convert_moisture_basis` | 谷物质量比较 | 干物质质量 = 原样质量 * (1 - 含水率分数)；保留原样值、换算值和实测含水率基准 | 收获和处理质量；含水率记录 | 可比质量基准 | `fao-grain-postharvest-systems-1998`; `usda-barley-grain-standards` |
| `calculate_water_withdrawal` | 灌溉 | 将来源特定的计量取水换算为声明单位并按选定门输出归一化；单独报告交付和消耗 | `cp_irrigation_records`; `cp_declared_gate_output_records` | 每参考输出的取水量 | `fao-crop-evapotranspiration-56` |
| `calculate_direct_soil_n2o` | 肥料 N 和直接 N2O | 对核算的 N 投入应用选定 IPCC 层级和因子，并在适用时换算 N₂O-N 至 N₂O；披露因子选择 | `cp_fertilizer_input_records`; 选定方法因子 | 每参考输出的直接土壤 N2O | `ipcc-2019-managed-soils-n2o` |
| `reconcile_harvest_outputs` | 收获和田间交付 | 共同含水率基准下，收获谷物 + 移出残余物 + 实测损失 + 田间返回或解释的余项 = 声明收获投入 | `cp_land_and_output_records`; `cp_harvest_and_output_records`; `cp_residue_and_fate_records` | 质量平衡核对 | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | 初级处理 | 共同含水率基准下，接收谷物 + 筛下物 + 拒收物 + 粉尘或实测损失 = 处理投入；解释余项 | `cp_conditioning_reject_records`; `cp_conditioned_output_records` | 处理收率和损失核对 | `fao-grain-postharvest-systems-1998`; `mass-balance-identity` |
| `allocate_storage_energy` | 储存 | 按记录的批次质量和声明储存时长分配储存能量；有专用计量时避免分配 | `cp_storage_and_handoff_records` | 每参考输出的储存能量 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_non_seed_identity` | 参考产品 | 声明产品为非播种用大麦谷物并说明预期用途类别；不得用种子质量声明替代。 | 产品元数据、合同、质量记录或发运记录 |
| `dq_gate_and_moisture` | 参考流和输出 | 对每个核对输出记录选定门、原样质量、含水率基准以及任何干物质换算。 | 秤、含水率检测、发运和计算记录 |
| `dq_temporal_coverage` | 作物生产和收获 | 覆盖声明作物周期和收获年度；披露是单年、多年平均还是情景。 | 有日期的农场、收获和投入记录 |
| `dq_input_completeness` | 田间和处理清单 | 对播种用种子、肥料、灌溉、作物保护、土地、田间能量、收获能量、干燥能量、储存能量和直接排放给出量化或合理归零/排除。 | 台账、发票、日志、计量器和方法声明 |
| `dq_output_fate` | 残余物、筛下物、拒收物和损失 | 记录每个非参考输出的质量基准、边界跨越、目的地和去向；未解决的去向会阻止最终化。 | 秤记录、田间日志、处置、转移或销售记录 |
| `dq_quality_descriptor` | 谷物身份 | 记录与预期用途相关的质量或等级描述，不将其变成通用接收阈值。 | 官方等级检验、买方规格或本地质量记录 |
| `dq_uuid_identity` | 流和基础流引用 | 每个固定 UUID 必须可追溯到已确认的身份记录；无固定 UUID 的行使用兼容的参数化 Flow Set，或保持未绑定，不得静默替换为通用 UUID。 | 本地身份记录和审查元数据 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_non_seed_boundary` | 产品身份 | 确认参考产品为非播种用大麦谷物，并确认播种用种子、麦芽、面粉、淀粉、乙醇、酿造产品以及下游食品或饲料加工已排除或单独建模。 | `usda-barley-grain-standards`; `fao-grain-postharvest-systems-1998` |
| `validation_reference_flow` | 参考流 | 确认一个 1 kg 参考流使用已核实的 `Barley, other` 身份、质量属性、kg 单位、声明用途、含水率基准、质量描述、地理范围、作物年度和门。 | `usda-barley-grain-standards` |
| `validation_process_completeness` | 过程图和清单 | 确认作物生产、收获以及适用的初级处理或储存过程存在，或已根据声明门明确排除。 | `fao-grain-postharvest-systems-1998` |
| `validation_nitrogen` | 肥料和排放 | 确认产品质量不同于 kg N，声明因子选择，N2O-N 换算透明，并对其他氮路径进行处理或说明。 | `ipcc-2019-managed-soils-n2o` |
| `validation_water` | 灌溉 | 确认取水、交付灌溉、消耗和水足迹结果已区分且未重复计算。 | `fao-crop-evapotranspiration-56` |
| `validation_moisture_and_mass_balance` | 收获和处理 | 确认质量核对使用共同含水率基准，且接收谷物、残余物、筛下物、拒收物和损失具有声明去向。 | `fao-grain-postharvest-systems-1998`; `mass-balance-identity` |
| `validation_allocation` | 副产品和残余物 | 确认优先考虑拆分，声明任何分配方法，被替代产品有证据，且在具有实质性影响时报告敏感性。 | `iso-14044-2006` |
| `validation_uuid_review` | 身份引用 | 确认每个固定 UUID 和接收环境；在创建最终 TIDAS 交换前，于前景数据生成阶段解析每个参数化 Flow Set。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在声明非播种用途、地理范围、作物年度、含水率基准、质量描述、生产路线和门与数据集元数据匹配时，用于下游粮食贸易、食用、饲用、制麦、工业或 LCA 数据构建 |
| excluded_use | 播种用大麦种子；麦芽；面粉；淀粉；乙醇；酿造产品；加工食品或饲料；门不兼容或材料损失/去向未解决的数据集 |
| required_metadata | 参考流；非播种用途；在具有实质性影响时的大麦类型或品种；地理范围；作物周期和年度；播种用种子来源；灌溉状态；肥料和作物保护记录；含水率基准；质量描述；收获和处理路线；声明门；残余物和拒收物去向；分配；数据质量披露 |
| required_quality_disclosure | 原始记录覆盖；时间和地理代表性；含水率和质量平衡处理；所选因子；身份覆盖和未映射流披露；遗漏投入；分配和敏感性；模块检查结果 |
| update_trigger | 路线、门、含水率或质量表示、用途范围、肥料或作物保护实践、灌溉、收获或处理技术、储存时长、因子来源、身份绑定或证据状态发生实质性变化 |

## 11. 数据来源

| Source id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-barley-01152` | classification | 联合国统计司 CPC 3.0，`01152 Barley, other`，<https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/01152> | 分类边界和 CPC 叶节点身份 |
| `fao-grain-postharvest-systems-1998` | official_guidance | FAO，*Agricultural engineering in development — Grain and post-harvest systems*，<https://www.fao.org/4/t0522e/T0522E03.htm> | 收获至储存序列、干燥、清理、搬运、损失和收获后交接 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO 灌溉与排水文件 56，*Crop evapotranspiration*，<https://www.fao.org/4/X0490E/X0490E00.htm> | 灌溉和作物水数据收集以及水量区分 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement，第 4 卷第 11 章，<https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 管理土壤 N2O 方法选择、活动数据和因子披露 |
| `usda-barley-grain-standards` | official_guidance | USDA Agricultural Marketing Service，*Barley Standards*，<https://www.ams.usda.gov/grades-standards/barley-grades-and-standards> | 大麦谷物质量和等级描述，以及与种子范围的区分 |
| `iso-14044-2006` | standard | ISO 14044:2006，*Environmental management — Life cycle assessment — Requirements and guidelines*，<https://www.iso.org/standard/38498.html> | 分配层级、LCA 范围、清单、报告和数据质量披露 |
| `mass-balance-identity` | method_factor | 作为 PCR 计算恒等式使用的质量守恒。 | 收获、处理、储存和输出核对 |
