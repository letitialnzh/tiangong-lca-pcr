---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.figs
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 无花果

## 1. 范围与适用性

本 PCR 适用于在多年生果园生产、并在农场大门交付的新鲜、未经加工的无花果（*Ficus carica* L.）。声明产品为采收市场状态下的完整果实，不包括干燥、烹煮、冷冻、榨汁、罐藏或其他转化。范围包括在报告期内对产品系统有贡献的果园建立或更新、年度果园管理、采收，以及可销售新鲜无花果在农场大门的交付。

农场大门边界在采收的新鲜无花果可在生产农场交付时结束。清洗、分级、下游配送用包装、交付后的储存、农场大门外运输，以及干燥和加工均不属于本 PCR，除非研究明确扩展边界。只有在声明大门处交付产品所必需的采收容器才作为条件性前景投入；交付后的运输和包装处置不包括在内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.figs` |
| classification_refs | CPC 3.0 / 01315 / Figs |
| covered_products | *Ficus carica* L. 的新鲜完整无花果，包括在农场大门以新鲜状态销售的普通型、斯迈纳型、圣佩德罗型及其他栽培品种 |
| excluded_products | 干燥或部分干燥无花果；冷冻、罐藏、烹煮、发酵、榨汁、制泥或其他加工无花果；苗木；叶、木材、雄无花果及下游包装、储存或运输后交付的产品 |
| representative_product | 农场大门的新鲜成熟无花果，完整、未清洗且未经加工 |
| production_route | 多年生果园建立或更新；果园管理；条件性灌溉、养分和植物保护投入；手工或机械采收；农场大门汇集 |
| market_state | 农场大门的新鲜、未经加工的完整果实 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产农场大门交付的新鲜、未经加工的完整无花果 |
| How much | 农场大门 1 kg 可销售新鲜无花果 |
| How well | 果实符合声明的新鲜市场规格，完整、健康、清洁、外观新鲜，且无异常外部水分、异味或异味感；数据集应披露当地质量等级或买方规格 |
| How long or cycle | 一个报告年度或完整采收季，包括声明果园区块在该期间采收的全部果实 |
| reference_flow_link | `fresh_figs_farm_gate` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 无花果 `f80297fb-fa6f-46e4-8da8-49f2fdcdab34` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种；品种或栽培品种；新鲜市场状态；生产地理位置；果园年龄和生产状态；报告年度或采收季；灌溉状态；产量基准；农场大门状态 |

构建前景数据包时，必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。新鲜无花果产品 UUID 应在前景数据生成期间解析；本候选不指定固定 UUID。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考产品和可销售产出 | 质量 | kg | 参考流和可销售新鲜无花果产出必须按农场大门交付时的质量报告。不得替换为干质量、可食部分质量或加工产品质量。 |
| `measurement_area_time` | 果园土地占用 | 面积-时间 | m2*a 或 ha*a | 报告报告期内果园占用面积和占用时间。建立或更新投入应在归一化到参考流前，按有记录的生产年限进行年度化。 |
| `measurement_nutrient_basis` | 肥料和土壤改良剂总量 | 质量 | kg 产品及 kg 养分 | 记录实际产品或改良剂质量，并在可获得时分别记录 N、P2O5、K2O 和有机质基础。不得根据养分总量推断肥料身份。 |
| `measurement_water_basis` | 灌溉水 | 体积或质量 | m3 或 kg | 报告输送到果园区块的计量或计算灌溉水量，并披露记录是总输送量、净作物用水量，还是模型化土壤水分平衡。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告期从声明的果园区块、期初已有的生产树木以及期初记录的场地状态开始。只有在声明果园区块内发生并对产品系统有贡献的新植或补植才纳入。 |
| starting_condition_role | 已有多年生果园资产通过可获得的建立或更新记录进行年度化；已有土地占用仍作为年度前景资源记录。 |
| product_classification_scope | CPC 01315 / 新鲜、未经加工的无花果；分类仅作为映射参考，不将边界扩展至干燥或加工无花果产品。 |
| recursive_input_rule | 同一产品类别的新鲜无花果不作为生产投入。若特殊情景引入同类产品流，应将其记录为上游产品数据集并披露递归中断，而不是将其作为新的前景作物。 |
| upstream_dataset_requirement | 苗木、肥料或土壤改良剂、植物保护产品、燃料、电力、灌溉水和采收容器等投入，在最终过程发布前需要上游数据集或声明的场址特定身份。 |
| disclosure | 声明果园区块、栽培面积、树龄或建立年份、品种、生产地理位置、灌溉制度、养分和植物保护投入、采收季、可销售产量、落果/次品以及产品在农场大门交付的确切位置。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_farm_orchard` | 前景系统边界 | 纳入果园建立或更新、土地占用、果园管理、采收，以及生产新鲜无花果至声明农场大门交付所需的全部直接投入和排放。 | `iso-14044-2006`; `fao-good-agricultural-practices-figs-2008` |
| `boundary_annualize_perennial_assets` | 多年生果园建立 | 当种植或更新投入支持多个报告年度时，按有记录的生产年限进行年度化，并保留未年度化原始记录以便审计。 | `iso-14044-2006`; `fao-good-agricultural-practices-figs-2008` |
| `boundary_exclude_downstream_fresh_handling` | 下游处理 | 排除声明农场大门交付后的清洗、分级、包装、储存、运输、干燥和加工。 | `unece-ffv-17-fresh-figs-2017`; `iso-14067-2018` |
| `boundary_disclose_starting_condition` | 数据集披露 | 声明果园期初状态、生产状态、报告期以及任何新植或补植，避免多年生资产和土地占用被隐藏。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `orchard_establishment_and_renewal` | 果园建立与更新 | conditional | 当报告期内发生新果园区块、补植、树木更换或建立投入时纳入；否则保留声明的零活动状态。 | 年度化多年生生产资产 | 每 1 kg 农场大门新鲜无花果 |
| `orchard_management` | 果园管理 | required | 对所有生产区块纳入果园土地占用、灌溉、养分和土壤改良剂施用、植物保护、机械或燃料使用以及相关田间排放。 | 作物生产 | 每 1 kg 农场大门新鲜无花果 |
| `harvest_and_farm_gate` | 采收与农场大门交付 | required | 纳入采收、田间收集、次品核算以及在声明农场大门交付未经加工产品所需的容器。 | 产品产出和大门交付 | 每 1 kg 农场大门可销售新鲜无花果 |

### 过程：果园建立与更新（`orchard_establishment_and_renewal`）

#### 输入

##### 产品流

###### 新建或更新果园区块的苗木（`planting_stock`）

仅当报告期内种植、补植或更新果园时记录苗木。已有树木不作为重复的年度投入重新创建。

- Selected flow: 无花果苗木或农场记录的其他种植材料
- Flow property / unit: 质量或件数 / kg 或 item
- Amount rule: 实际苗木数量；当其支持多个报告期时，按有记录的生产年限年度化
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 农场大门新鲜无花果
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_orchard_establishment`
- Sources:

##### 废物流

##### 基本流

###### 年度化果园土地占用（`orchard_land_occupation`）

生产果园面积在被无花果树占用并用于生产参考产品的期间，是一项基本资源投入。

- Selected flow: 多年生果园土地占用
- Flow property / unit: 面积-时间 / m2*a 或 ha*a
- Amount rule: 声明的果园占用面积乘以报告期占用时间；适用时加上年度化的建立面积
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 农场大门新鲜无花果
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_orchard_establishment`
- Sources: `iso-14044-2006`; `fao-good-agricultural-practices-figs-2008`

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：果园管理（`orchard_management`）

#### 输入

##### 产品流

###### 输送到无花果果园区块的灌溉水（`irrigation_water`）

当补充灌溉或全灌溉水输送到生产果园区块时记录灌溉水。降雨不作为产品投入记录；研究需要时可另行披露取水。

- Selected flow: 输送至果园的灌溉水
- Flow property / unit: 体积或质量 / m3 或 kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: 计量输送的灌溉水；无计量时，根据有记录的土壤水分平衡、灌溉计划或流量与时长记录计算
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 农场大门新鲜无花果
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_irrigation_records`
- Sources: `fao-crop-evapotranspiration-56-1998`; `fao-good-agricultural-practices-figs-2008`

###### 农业养分与肥料投入（`orchard_management_agricultural_nutrient_inputs`）

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
- 来源：`fao-good-agricultural-practices-figs-2008`; `ipcc-2019-managed-soils-n2o`

###### 施用于果园区块的植物保护产品（`crop_protection_products`）

当生产果园区块施用经批准的杀虫剂、杀菌剂、除草剂、杀螨剂、杀线虫剂或其他植物保护产品时记录。只有农场记录确认报告期内未施用时，才可省略该行。

- Selected flow: 农场记录的实际植物保护产品配方
- Flow property / unit: 质量 / kg 产品或 L 产品
- Amount rule: 按果园区块和施用事件记录实际配方质量或体积；在可获得时记录有效成分和浓度
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 农场大门新鲜无花果
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_crop_protection_records`
- Sources: `fao-good-agricultural-practices-figs-2008`

###### 果园作业使用的移动机械燃料（`mobile_machinery_fuel`）

记录耕作、割草、修剪、养分施用、植物保护、灌溉支持或其他边界内果园作业使用的燃料或等效移动机械能源。

- Selected flow: 移动机械燃料或燃料服务
- Flow property / unit: 质量、体积或能量 / kg、L 或 MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: 果园机械领用燃料，或根据设备、运行时间和有记录的耗油率计算
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 农场大门新鲜无花果
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_machinery_fuel_records`
- Sources: `fao-good-agricultural-practices-figs-2008`

##### 废物流

###### 从果园区块移出的修剪和植物残体（`pruning_and_plant_residues_removed`）

记录从果园边界移出的修剪木、叶片、雄无花果或其他植物残体。留在果园内的残体应在数据集说明中描述，不作为输出废物记录。

- Selected flow: 果园修剪和植物残体废物
- Flow property / unit: 质量 / kg 湿残体或干残体，并披露含水基准
- Amount rule: 称量或估算每个果园区块移出的残体，并记录声明的处理或处置路线
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 农场大门新鲜无花果
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_residue_records`
- Sources: `fao-good-agricultural-practices-figs-2008`

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 受管理果园土壤的氨挥发（`ammonia_emission`）

当所选计算方法要求且具备相关活动数据时，纳入养分施用或其他受管理土壤来源产生的氨排放。

- Selected flow: 受管理果园土壤向空气的氨排放
- Flow property / unit: 质量 / kg NH3
- Amount rule: 根据声明的氮投入和选定的有记录排放因子或 Tier 方法计算；无氮活动记录时不得报告默认数量
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 农场大门新鲜无花果
- Basis kind: 氮投入（`n_input`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_soil_emission_calculation`
- Sources: `ipcc-2019-managed-soils-n2o`

###### 受管理果园土壤的直接氧化亚氮（`direct_nitrous_oxide_emission`）

纳入人类引起的氮添加或所选与受管理土壤相容的 IPCC 方法覆盖的其他来源产生的直接 N2O。

- Selected flow: 受管理果园土壤向空气的直接氧化亚氮排放
- Flow property / unit: 质量 / kg N2O-N 或 kg N2O，并披露换算基础
- Amount rule: 对合成和有机养分投入、作物残体氮及其他纳入的氮源应用有记录的方法；披露 Tier 和所用因子
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 农场大门新鲜无花果
- Basis kind: 氮投入（`n_input`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_soil_emission_calculation`
- Sources: `ipcc-2019-managed-soils-n2o`

###### 受管理果园土壤的硝酸盐淋失或径流（`nitrate_leaching`）

当所选方法和场址证据表明该路径相关时，纳入通过淋失或径流损失的硝酸盐。

- Selected flow: 受管理果园土壤向水体的硝酸盐排放
- Flow property / unit: 质量 / kg NO3-N 或 kg NO3，并披露换算基础
- Amount rule: 根据氮投入记录和有记录的淋失或径流方法计算；如果场址证据表明不适用，应披露未建模原因
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 农场大门新鲜无花果
- Basis kind: 氮投入（`n_input`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_soil_emission_calculation`
- Sources: `ipcc-2019-managed-soils-n2o`

### 过程：采收与农场大门交付（`harvest_and_farm_gate`）

#### 输入

##### 产品流

###### 农场大门交付所需的采收容器（`harvest_containers_or_tools`）

记录作为新鲜无花果农场大门交付的一部分而跨越声明过程的容器或果箱。可重复使用容器按声明的使用次数或服务寿命分配；留在农场的工具作为农场资产披露，但除非研究要求资本品，否则不作为消耗性流计算。

- Selected flow: 用于新鲜无花果农场大门交付的果箱、托盘或可重复使用容器
- Flow property / unit: 质量或件数 / kg 或 item
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- Amount rule: 仅当声明大门需要容器时，记录实际容器数量和质量，并根据有记录的重复使用次数及损耗率调整
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 农场大门新鲜无花果
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_harvest_container_records`
- Sources: `unece-ffv-17-fresh-figs-2017`

##### 废物流

###### 采收次品和田间损失（`harvest_culls_and_field_loss`）

记录因损伤、过熟、病害或其他有记录的质量原因，在农场大门交付前被拒收的果实。作为新鲜无花果销售的产品仍属于参考产出；除非有单独市场证据，次品不作为共产品。

- Selected flow: 新鲜无花果采收次品或田间损失废物
- Flow property / unit: 质量 / kg 新鲜果实
- Amount rule: 称量或计算农场大门交付前被拒收的采收果实，并披露去向路线和含水基准
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 农场大门可销售新鲜无花果
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_harvest_yield_and_culls`
- Sources: `unece-ffv-17-fresh-figs-2017`; `iso-14044-2006`

##### 基本流

#### 输出

##### 产品流

###### 在农场大门交付的可销售新鲜无花果（`fresh_figs_farm_gate`）

这是参考产品产出：在声明市场状态下，于生产农场大门交付的完整、新鲜、未经加工的无花果。

- Selected flow: 农场大门的完整新鲜无花果
- Flow property / unit: 质量 / kg
- Amount rule: 称量农场大门交付的可销售新鲜无花果；与采收记录和声明次品进行核对
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 1 kg 农场大门可销售新鲜无花果的参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_harvest_yield_and_culls`
- Sources: `unece-ffv-17-fresh-figs-2017`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_unnecessary` | 果园和采收过程 | 当可以按分别计量的果园区块、作业或产品产出进行过程细分且不会实质损失信息时，不进行分配。 | `iso-14044-2006` |
| `allocation_same_category_outputs` | 多种新鲜无花果产出 | 不同品种、采收窗口或市场等级的新鲜无花果，除非数据集声明了不同的产品规格，否则视为同一参考产品类别；在归一化前汇总其计量负荷。 | `unece-ffv-17-fresh-figs-2017`; `iso-14044-2006` |
| `allocation_marketed_coproducts` | 有证据的可销售共产品 | 如果单独的可销售共产品与果园或采收作业共享过程，首先尽可能细分；否则按报告期数量和农场大门价格以经济价值分配剩余共享负荷，并披露分配敏感性。 | `iso-14044-2006` |
| `allocation_culls_not_coproducts` | 次品和田间损失 | 没有有记录市场的未销售次品、田间损失和残体作为废物或保留在田间的材料处理，不作为获得避免负荷的共产品。 | `iso-14044-2006`; `unece-ffv-17-fresh-figs-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment` | `orchard_establishment_and_renewal` | planting_stock; orchard_land_occupation | 果园登记和场地图 | block_id; area; tree_count; planting_year; renewal_area; planting_stock; productive_life; land tenure | 农场登记、地图、发票和现场核查 | ha; item; year | 年度和事件 | 报告年度及有记录的生产年限 | 每个声明的果园区块 | 对每个区块建立或更新记录年度化，再汇总区块 | 签字登记、地图、发票以及农艺师或农场经理审核 |
| `cp_irrigation_records` | `orchard_management` | irrigation_water | 灌溉日志或计量记录 | block_id; date; source; delivery volume; meter reading; irrigation method; rainfall note | 计量读数、水泵日志或有记录的水量平衡计算 | m3 或 kg | 事件和月度汇总 | 完整采收季和报告年度 | 每个灌溉果园区块 | 按区块和报告期汇总输送水量，并保留总量/净量基础 | 计量校准或流量证据及操作员签字 |
| `cp_nutrient_amendment_records` | `orchard_management` | fertilizer_soil_amendment | 投入发票和施用日志 | product_name; supplier; product_mass; N; P2O5; K2O; organic_matter; date; block_id; application_method | 发票、标签或证书及施用记录 | kg product; kg nutrient | 事件 | 报告年度 | 每个施用养分的果园区块 | 汇总实际产品，并分别汇总声明的养分基础 | 发票、产品标签、土壤或植物分析及施用日志 |
| `cp_crop_protection_records` | `orchard_management` | crop_protection_products | 植物保护日志 | product_name; formulation; active_ingredient; dose; volume or mass; date; block_id; target | 农场喷施日志、发票和产品标签 | kg 或 L 产品 | 事件 | 报告年度 | 每个处理的果园区块 | 按配方和施用事件汇总，并保留有效成分详情 | 批准使用记录、发票、标签和操作员签字 |
| `cp_machinery_fuel_records` | `orchard_management` | mobile_machinery_fuel | 燃料领用记录或机械日志 | equipment_id; fuel_type; volume or mass; operating_hours; operation; date; block_id | 燃料台账、罐计量、供应商发票或设备记录 | L、kg 或 MJ | 事件和月度 | 报告年度 | 边界内果园作业 | 按直接领用或有记录的活动份额分配至果园区块 | 发票或计量记录及设备日志 |
| `cp_residue_records` | `orchard_management` | pruning_and_plant_residues_removed | 残体日志 | block_id; residue_type; mass; moisture_basis; removal_date; treatment_route | 称重单、承包商记录或有记录的估算 | kg 湿残体或干残体 | 事件 | 报告年度 | 声明果园区块 | 只汇总移出边界的残体；另行披露留存残体 | 称重单、承包商记录或带方法说明的田间估算 |
| `cp_soil_emission_calculation` | `orchard_management` | ammonia_emission; direct_nitrous_oxide_emission; nitrate_leaching | 方法工作表 | N inputs; residue N; soil and climate variables where required; method tier; factors; pathway assumptions | 使用有记录的方法和场址记录计算 | kg NH3；kg N2O-N 或 N2O；kg NO3-N 或 NO3 | 年度计算 | 报告年度 | 每个相关果园区块或有记录的区域因子 | 由同一组声明的活动数据计算各路径，并保留路径分离 | 签字工作表、因子引用和独立计算核查 |
| `cp_harvest_container_records` | `harvest_and_farm_gate` | harvest_containers_or_tools | 容器清单 | container_type; units; mass; reuse_cycles; loss_rate; gate_use; season | 清单和采购/维修记录 | item 或 kg | 季节 | 采收季 | 采收和大门交付作业 | 按有记录的使用次数和产品吞吐量分配可重复使用容器负荷 | 清点、采购记录和重复使用声明 |
| `cp_harvest_yield_and_culls` | `harvest_and_farm_gate` | fresh_figs_farm_gate; harvest_culls_and_field_loss | 采收和发运记录 | block_id; harvest_date; gross harvest; saleable mass; cull mass; loss reason; gate date; product qualifiers | 称重采收和发运记录，并与销售或交付单核对 | kg 新鲜果实 | 事件和季节 | 完整采收季 | 每个声明果园区块和大门交付 | 汇总可销售产出和次品；使总采收量与所有有记录去向核对 | 称重记录、发运单、买方或接收记录以及核对检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_annualized_orchard_establishment` | `planting_stock`; `orchard_land_occupation` | 年度化数量 = 有记录的建立或更新数量 / 有记录的生产年限（年）；按果园区块和报告年度分别计算。 | 区块建立记录；更新记录；生产年限 | 年度化苗木数量和果园土地占用 | `iso-14044-2006`; `fao-good-agricultural-practices-figs-2008` |
| `calc_irrigation_from_water_balance` | `irrigation_water` | 有计量记录时使用计量记录；否则根据有记录的流量 × 运行时间，或使用本地气候、土壤、作物和管理数据的有记录土壤水分平衡计算，并披露所选基础。 | 计量记录；流量；运行时间；土壤水分平衡；天气和作物数据 | 按参考流的灌溉水量 | `fao-crop-evapotranspiration-56-1998` |
| `calc_nutrient_basis` | `fertilizer_soil_amendment` | 对每种实际产品保留产品质量和声明的养分基础。按元素或养分形式汇总投入，不对未记录的配方进行反推。 | 产品质量；标签或证书；N；P2O5；K2O；有机质 | 产品质量和养分总量 | `fao-good-agricultural-practices-figs-2008`; `ipcc-2019-managed-soils-n2o` |
| `calc_managed_soil_emissions` | `ammonia_emission`; `direct_nitrous_oxide_emission`; `nitrate_leaching` | 对声明的氮活动数据应用所选有记录的 Tier 或排放因子方法。保持直接、挥发和淋失/径流路径分离，并报告换算基础。 | 养分氮；残体氮；必要时土壤和气候数据；所选因子；路径假设 | 按路径划分的基本流 | `ipcc-2019-managed-soils-n2o` |
| `calc_harvest_output_and_culls` | `fresh_figs_farm_gate`; `harvest_culls_and_field_loss` | 总采收量 = 农场大门可销售质量 + 次品 + 有记录的田间损失或其他去向。所有投入和产出按每 1 kg 农场大门可销售新鲜无花果归一化。 | 总采收量；可销售质量；次品质量；田间损失估算；去向记录 | 可销售产出和次品/废物数量 | `unece-ffv-17-fresh-figs-2017`; `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 所有产品和投入行 | 声明物种、品种或栽培品种、农场地理位置、市场状态，以及前景数据包中每个流的身份或证据缺口状态。 | 农场产品规格、投入标签和身份解析记录 |
| `dq_activity_records` | 所有采集活动行 | 优先使用计量记录、发票、计量器、称重单或供应商记录；保留原始记录引用，并解释每个估算值或缺失值。 | 农场一手记录和有记录的估算方法 |
| `dq_temporal_completeness` | 所有过程 | 覆盖完整报告年度或采收季，并披露异常天气、歉收、补植或缺失月份。 | 季节生产汇总和例外日志 |
| `dq_spatial_representativeness` | 果园和田间排放 | 当管理、土壤、灌溉或产量存在实质差异时分开果园区块；没有有记录的汇总规则时不得混合无关农场。 | 区块登记、地图、土壤或气候记录和汇总说明 |
| `dq_mass_reconciliation` | 采收和农场大门 | 在称重和估算方法的精度范围内核对总采收量、可销售产出、次品和其他去向。 | 称重记录、发运单和核对工作表 |
| `dq_disclosure` | 发布的前景数据集 | 披露边界、果园期初状态、分配、流绑定状态、来源方法、缺失数据和所有场址特定假设。 | 完整数据集元数据和审核记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考流 | 除非参考数量为农场大门 1 kg 新鲜无花果、全部必需限定信息齐全，且证据缺口的产品身份已解析为经核实的前景流，否则拒绝最终数据集。 | `unece-ffv-17-fresh-figs-2017`; `iso-14044-2006` |
| `validation_boundary_start` | 系统边界 | 检查数据集是否声明果园期初状态、生产状态、报告期，以及是否纳入建立和更新活动。 | `iso-14044-2006` |
| `validation_input_basis` | 养分、水、燃料、植物保护和容器行 | 检查每项投入是否有场址记录、明确的单位和属性、归一化基准、采集协议和身份状态；养分卡必须保留实际产品和养分基础。 | `fao-good-agricultural-practices-figs-2008`; `fao-crop-evapotranspiration-56-1998` |
| `validation_flow_binding` | 参数化和证据缺口流 | 只接受 0.2.0 版本（或前景数据生成期间的后续版本）的适用 Flow Set 分组，或之后核实的具体 UUID；不得改变近似产品、方向或流类型以强行匹配。 | `iso-14044-2006` |
| `validation_emission_pathways` | 受管理土壤基本流输出 | 检查每个氨、N2O 或硝酸盐流是否存在氮活动数据、方法 Tier 或因子、换算基础和路径假设；未建模路径必须明确说明理由。 | `ipcc-2019-managed-soils-n2o` |
| `validation_yield_reconciliation` | 采收和农场大门过程 | 在归一化前检查总采收量、可销售新鲜无花果、次品、田间损失和其他去向是否核对；拒绝未解释的负值或重复计算产出。 | `unece-ffv-17-fresh-figs-2017`; `iso-14044-2006` |
| `validation_downstream_boundary` | 农场大门产出 | 检查声明大门之后的清洗、分级、下游配送包装、储存、运输、干燥和加工未被默默纳入。 | `unece-ffv-17-fresh-figs-2017`; `iso-14067-2018` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset` 用于农场大门新鲜无花果生产；只有在地理位置、季节、市场状态和边界适用于接收研究时，才可作为 `background_dataset` |
| downstream_use | 新鲜、未经加工的农场大门无花果前景过程和生命周期模型投影；当影响评价方法假设已声明时用于农场大门部分碳足迹研究 |
| allowed_use | 新鲜无花果比较性或归因性 LCA、果园管理情景、灌溉或养分管理情景，以及明确增加下游处理的供应链研究 |
| excluded_use | 干燥或加工无花果产品；苗木数据集；没有新鲜无花果限定信息的通用水果数据集；假设已包括农场大门后包装、储存、运输或加工的研究 |
| required_metadata | PCR id 和版本；物种和品种；农场地理位置；果园区块面积和年龄；报告年度或采收季；灌溉制度；养分和植物保护记录；产量和次品核对；农场大门定义；流身份和 Flow Set 绑定 |
| required_quality_disclosure | 数据覆盖、计量和估算方法、缺失数据、多年生果园投入年度化、排放方法 Tier、分配、不确定性或敏感性，以及前景完成前所有身份证据缺口 |
| update_trigger | 新 PCR 版本；农场大门定义改变；果园系统、灌溉、养分、植物保护、采收或分配方法发生实质变化；或新鲜无花果市场状态或边界发生变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `unece-ffv-17-fresh-figs-2017` | standard | https://unece.org/fileadmin/DAM/trade/agr/standard/fresh/FFV-Std/English/17_FreshFigs.pdf | 新鲜无花果身份、新鲜市场状态、质量限定信息以及工业加工排除 |
| `fao-good-agricultural-practices-figs-2008` | official_guidance | https://www.fao.org/input/download/report/700/al31_41e.pdf | 无花果果园建立、灌溉、施肥、植物保护、修剪和采收活动分解；不将干无花果特定的下游处理指南带入本新鲜农场大门边界 |
| `uc-ipm-cultural-tips-growing-fig` | extension_guidance | https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-fig/ | 灌溉、氮管理、成熟度和采收记录的场址特定性 |
| `fao-crop-evapotranspiration-56-1998` | handbook | https://www.fao.org/4/X0490E/x0490e00.htm | 灌溉计算、土壤水分平衡、气候和作物数据以及优先使用本地数据 |
| `ipcc-2019-managed-soils-n2o` | method_factor | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 受管理土壤排放的氮投入活动数据以及直接、挥发、淋失和径流路径 |
| `iso-14044-2006` | standard | https://committee.iso.org/standard/38498.html | LCA 目标与范围、清单、分配、报告和评审原则 |
| `iso-14067-2018` | standard | https://www.iso.org/files/live/sites/isoorg/files/store/en/PUB100271.pdf | 产品部分碳足迹边界和农场大门报告背景 |
