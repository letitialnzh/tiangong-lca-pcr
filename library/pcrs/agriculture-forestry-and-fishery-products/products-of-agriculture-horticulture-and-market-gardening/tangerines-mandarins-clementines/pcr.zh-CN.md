---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tangerines-mandarins-clementines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 柑橘、宽皮柑和克莱门汀

## 1. 范围与适用性

本 PCR 覆盖多年生果园生产并在农场交接点转移的新鲜、未经加工的柑橘、宽皮柑和克莱门汀。包括果园建立、更新、管理、采收和交接前的条件性分选或基础调理；排除苗木生产、果汁或浓缩汁、腌制、干燥、冷冻、场外运输、储存、零售、消费者使用及包装末端处置。建立和更新投入应分配到声明生产年度并披露。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tangerines-mandarins-clementines |
| classification_refs | CPC 3.0: 01324 Tangerines, mandarins, clementines |
| covered_products | 农场交接点的新鲜、未经加工柑橘、宽皮柑和克莱门汀 |
| excluded_products | 苗木；果汁、浓缩汁、果泥、腌制、干燥或冷冻产品；场外物流和下游使用 |
| representative_product | 农场交接点采收的新鲜柑橘、宽皮柑或克莱门汀 |
| production_route | 多年生柑橘园建立、管理、采收和条件性农场分选 |
| market_state | 声明交接状态的新鲜果实，披露品种、成熟度、等级、质量和调理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场交接点新鲜、未经加工柑橘、宽皮柑或克莱门汀 |
| How much | 1,000 kg 按接收状态计的合格果实 |
| How well | 满足品种、成熟度、等级、缺陷和交接条件；不转化为加工产品 |
| How long or cycle | 结果寿命内的一个生产年度，建立和更新投入分配到声明果园寿命 |
| reference_flow_link | tangerine_harvest_and_farm_gate_handling 或 tangerine_optional_farm_gate_sorting 的终端输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 农场交接点新鲜柑橘、宽皮柑或克莱门汀＼ |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或品种组；国家、地区和气候；果园年龄和结果状态；作物年度；面积和密度；灌溉和水源；成熟度及接收状态质量基础；合格、降级和拒收基础；分选状态 |

必需限定信息应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_fresh_mass` | 参考果实 | Mass | kg | 按农场交接接收状态报告质量，保留任何水分、成熟度或缺陷换算基础。 |
| `orchard_life_allocation_basis` | 建园、未结果期和更新树 | 面积、时间或质量活动属性 | ha、果园年或 kg 果实 | 按果园面积、生产年度和合格果实输出分配建立和更新投入，并披露特殊替换或废弃。 |
| `crop_cycle_normalization` | 果园、采收和分选 | 活动特定属性 | 活动特定单位 | 使用同一果园区块、批次或有记录的多年汇总质量，归一化到 1,000 kg 合格果实。 |
| `nutrient_product_and_basis` | 肥料和土壤改良剂 | 产品质量和养分质量 | kg 产品；kg N、kg P2O5、kg K2O 或有机养分基础 | 记录实际产品、施用量和养分基础；允许一个条件性总卡片。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明生产周期开始时已建立或新建立的柑橘园，苗木和购买投入跨越前景边界，并披露前期土地状态 |
| starting_condition_role | 多年生柑橘生产和果园资产核算起点 |
| product_classification_scope | CPC 3.0 01324 的新鲜、未经加工柑橘、宽皮柑和克莱门汀 |
| recursive_input_rule | 不得将新鲜柑橘循环为本类别递归投入；苗木使用自身上游身份，果实次品和残余物按去向披露 |
| upstream_dataset_requirement | 未实测的苗木、养分、植保、电力、燃料、灌溉、机械服务、交接前包装和废物处理需要兼容上游数据集 |
| disclosure | 披露品种、位置、气候、年龄、密度、建立和更新历史、面积、灌溉、养分、植保、能源、年度、采收批次、合格和拒收果实、分选和残余物去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_citrus_orchard_to_farm_gate` | 所有数据集 | 纳入果园建立或更新、未结果期、结果期管理、采收和交接前条件性分选或调理。 | `fao-crop-production-methodology`; `fao-citrus-production-guidance` |
| `boundary_perennial_orchard_disclosure` | 果园资产和更新 | 按声明果园寿命或合格果实输出分配建立、未结果期和更新投入，并披露期限和特殊事件。 | `fao-citrus-production-guidance`; `iso-14067` |
| `boundary_direct_field_exchanges` | 土壤、残余物和植保 | 使用同一活动记录和地理适用方法纳入相关直接及适用间接环境交换。 | `ipcc-2019-refinement-vol-4`; `emep-eea-2023-guidebook` |
| `boundary_post_farm_gate_exclusion` | 下游活动 | 排除场外运输、储存、配送、零售、消费者使用、果汁生产和包装末端处置，除非声明扩展。 | `iso-14044` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `tangerine_orchard_establishment_and_management` | 柑橘果园建立与管理 | required | 始终纳入建立、更新和结果期管理 | 多年生生物生产和果园资产形成 | 面积、果园年、建立或更新期和合格果实输出 |
| `tangerine_harvest_and_farm_gate_handling` | 柑橘采收和农场交接处理 | required | 始终纳入 | 采收、田间处理、质量平衡和交接 | 采收、合格、降级、拒收和损失质量 |
| `tangerine_optional_farm_gate_sorting` | 可选农场分选或基础调理 | conditional | 交接前发生且未包含在采收记录中 | 准备交接状态 | 按批次进料、输出、去向、水、能源和废物 |

### 过程：柑橘果园建立与管理（`tangerine_orchard_establishment_and_management`）

#### 输入

##### 产品流

###### 柑橘种植材料（`citrus_planting_material_input`）

记录进入果园建立或更新的苗木和嫁接苗，保留果实和残余物不得替代其身份。

- 选定流：柑橘种植材料＼
- 流属性/单位：数量或质量 / trees, plants, or kg
- 数量规则：按区块和年度记录安装或替换数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每果园年并换算到 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：

###### 农业养分与肥料投入（`tangerine_orchard_establishment_and_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年并换算到 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_management_records`
- 来源：
- 数量范围：Provisional nutrient and amendment screen
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：600
  - 单位：kg product/ha/year
  - 基准：all nutrient and soil-amendment products combined; replace with product records and nutrient analysis
  - 基准类型：Crop cycle (`crop_cycle`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### 灌溉水供应（`irrigation_water_input`）

仅在果园实际用水时记录；零灌溉须有记录或生产依据。

- 选定流：灌溉水供应
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按区块和年度计量或计算灌溉量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年并换算到 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_management_records`
- 来源：

###### 果园电力和移动机械燃料（`orchard_energy_input`）

记录抽水和果园作业能源，避免重复计入承包服务。

- 选定流：电力供应和农业移动机械燃料
- 流属性/单位：能源或载能体质量 / kWh, L, or kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按电表、发票、燃料日志或承包商记录换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年并换算到 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_management_records`
- 来源：

###### 植保产品供应（`crop_protection_input`）

按产品、有效成分、施用事件和面积记录不同植保配方。

- 选定流：柑橘果园植保配方＼
- 流属性/单位：配方质量 / kg
- 数量规则：按产品、面积和事件汇总配方质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每果园年并换算到 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_management_records`
- 来源：

##### 废物流

###### 移除或死亡柑橘树及残余物（`orchard_tree_and_residue_waste`）

不作为共产品的树木和残余物记录为废物；覆盖物或生物质转移须记录去向。

- 选定流：移除柑橘树和果园残余物＼
- 流属性/单位：质量 / kg dry or as-received biomass
- 数量规则：按区块和年度测量或计算并记录去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年并换算到 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：

##### 基本流

###### 柑橘果园土地占用（`orchard_land_occupation`）

记录果园面积和占用时间，包括声明寿命内的非结果期。

- 选定流：多年生柑橘果园土地占用
- 流属性/单位：面积时间 / m2*a or ha*year
- 数量规则：面积乘以占用时间并分配到合格果实
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年并换算到 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-crop-production-methodology`

#### 输出

##### 产品流

###### 管理型柑橘果园生产输出（`managed_citrus_orchard_output`）

作为内部链接传给采收，不得作为额外市场产品。

- 选定流：管理型柑橘果园生产输出＼
- 流属性/单位：面积或质量 / ha or kg accepted fruit basis
- 数量规则：声明年度面积及合格果实输出基础
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_management_records`
- 来源：

##### 基本流

###### 养分、残余物和植保环境交换（`orchard_environmental_exchanges`）

根据活动记录和地理适用方法计算空气、水和土壤交换，并在证据支持时区分物质和接收环境。

- 选定流：柑橘生产环境排放＼
- 流属性/单位：排放物质质量 / kg substance
- 数量规则：根据活动数据和声明方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年并换算到 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_management_records`
- 来源：`ipcc-2019-refinement-vol-4`; `emep-eea-2023-guidebook`

### 过程：柑橘、宽皮柑和克莱门汀采收与农场交接处理（`tangerine_harvest_and_farm_gate_handling`）

#### 输入

##### 产品流

###### 进入采收的管理型果园输出（`managed_citrus_orchard_input`）

接收果园年度生产背景，支持过程链接，不重复上游库存。

- 选定流：管理型柑橘果园生产输出＼
- 流属性/单位：面积或质量 / ha or kg accepted fruit basis
- 数量规则：分选前的果园年度采收量链接
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_output_records`
- 来源：

###### 采收能源和承包服务（`harvest_energy_input`）

记录采摘、周转箱、收集和交接处理的能源或承包活动。

- 选定流：采收能源供应或承包采收服务
- 流属性/单位：能源、载能体质量或服务 / kWh, L, kg, or activity unit
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按计量或承包活动分配到合格输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每采收活动并换算到 1,000 kg 合格果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场交接点新鲜柑橘果实（`fresh_citrus_farm_gate_output`）

记录声明交接状态的合格果实；无分选时为终端参考输出。

- 选定流：农场交接点新鲜柑橘、宽皮柑或克莱门汀＼
- 流属性/单位：质量 / kg
- 数量规则：按交接状态测量合格果实质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：终端输出换算到 1,000 kg 参考果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 来源：

##### 废物流

###### 采收次品和田间损失（`harvest_cull_and_loss_waste`）

记录田间遗留、采摘损伤、无声明用途的降级或拒收果实。

- 选定流：柑橘采收次品和损失＼
- 流属性/单位：质量 / kg
- 数量规则：按采收、合格、明确去向和库存变化核算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_output_records`
- 来源：

### 过程：可选农场分选或基础调理（`tangerine_optional_farm_gate_sorting`）

#### 输入

##### 产品流

###### 进入可选分选的采收果实（`sorting_citrus_input`）

当交接前发生独立清洗、分选、分级或调理时记录进料。

- 选定流：进入可选农场分选的新鲜柑橘＼
- 流属性/单位：质量 / kg
- 数量规则：分选前测量进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格分选果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting_records`
- 来源：

###### 分选用水和电力（`sorting_water_and_energy_input`）

记录交接前清洗、分选、分级或基础调理使用的水和电力。

- 选定流：可选农场分选用水和电力
- 流属性/单位：体积或能源 / m3 or kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：按水表、批次日志或发票分配到合格分选果实
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格分选果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场交接点分选新鲜柑橘（`sorted_citrus_farm_gate_output`）

记录分选或调理后、场外运输前的合格果实；纳入此过程时为终端参考输出。

- 选定流：农场交接点分选新鲜柑橘、宽皮柑或克莱门汀＼
- 流属性/单位：质量 / kg
- 数量规则：测量分选或调理后的合格果实质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：终端输出换算到 1,000 kg 参考果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorting_records`
- 来源：

##### 废物流

###### 分选拒收物和移除物（`sorting_reject_waste`）

记录分选、分级、清洗或修整移除且没有共产品去向的物料。

- 选定流：分选拒收柑橘物料＼
- 流属性/单位：质量 / kg
- 数量规则：进料质量减去合格输出和明确去向，并记录水分或处理调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格分选果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sorting_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orchard_establishment_over_productive_life` | 果园建立、未结果期和更新树 | 按面积和合格果实输出分配建立、未结果期和更新投入，并报告寿命、建立年度、更新事件和基础。 | `fao-citrus-production-guidance`; `iso-14067` |
| `allocation_accepted_and_named_destinations` | 合格、降级和残余物 | 只有有去向证据且可区分时才分配给合格果实或共产品；无用途损失不作为共产品。 | `iso-14044` |
| `allocation_internal_process_links` | 果园、采收和分选链接 | 内部链接仅用于平衡，不得重复作为市场产品。 | `iso-14044` |
| `allocation_mass_default_for_shared_fruit_output` | 多个等级或去向 | 没有更强因果证据时采用质量分配，并披露等级、接收状态基础和拒收处理。 | `iso-14044` |

如果研究报告同一果园或分选作业产生的鲜食柑橘和有记录的共产品，数据包应说明分配规则、共同过程清单和去向证据。经济分配不是缺少质量或因果数据时的默认替代方法。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `tangerine_orchard_establishment_and_management` | planting material; renewal trees; land occupation | 果园登记、苗木发票、种植图、移除日志 | block_id; species_or_cultivar; tree_count; planting_year; renewal_count; area; previous_land_use; removed_biomass; destination | 核对登记、地图、发票和田间记录 | trees, ha, kg, orchard-year | 建立、更新及年度 | 建立期和声明寿命 | 每个果园区块 | 按区块、年度和分配期限汇总 | 果园登记、种植图、供应商记录或田间日志 |
| `cp_orchard_management_records` | `tangerine_orchard_establishment_and_management` | nutrients; irrigation; energy; crop protection; environmental exchanges | 投入台账、水表、电表、喷施记录、发票 | block_id; product; formulation; nutrient_analysis; amount; date; area; water_volume; energy_carrier; fuel; treatment; soil_or_residue_event | 采集原始记录并核对 | kg product, kg nutrient, m3, kWh, L, ha | 每次作业及年度 | 一个生产年度及适用建立或更新记录 | 区块和共享设施 | 按区块和年度求和，再按面积或活动分配 | 发票、读表、产品标签、施用日志和计算记录 |
| `cp_harvest_output_records` | `tangerine_harvest_and_farm_gate_handling` | orchard output; harvest energy; accepted fruit; culls and losses | 采收票、地磅、周转箱、承包商和分级记录 | block_id; harvest_date; species_or_cultivar; harvested_mass; accepted_mass; rejected_mass; destination; carrier_use; contractor_activity; maturity_or_grade | 核对田间、称量、分级和去向记录 | kg, L, kWh, activity unit | 每批采收及年度 | 一个生产年度 | 区块和采收设施 | 按区块、批次和去向汇总 | 地磅、批次追踪、分级报告和发票 |
| `cp_sorting_records` | `tangerine_optional_farm_gate_sorting` | incoming fruit; water; electricity; accepted output; rejects | 批次表、计量、分级和废物日志 | batch_id; incoming_mass; accepted_mass; reject_mass; water; electricity; cleaning_agent; packaging_aid; destination | 核对批次、称量、计量、物料和废物记录 | kg, m3, kWh, kg material | 每个分选或调理批次 | 声明生产年度 | 农场分选场所 | 按批次核对进料、输出、去向和废物 | 批次表、称量、读表、废物凭证和去向记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_orchard_activity_to_reference_mass` | 果园年度和采收流 | 归一化数量 = 活动总量 / 农场交接合格果实质量 × 1,000 kg | activity total; accepted fruit mass; reference amount | 每 1,000 kg 合格果实的数量 |  |
| `calc_orchard_life_allocation` | 建立和更新投入 | 按声明结果寿命和合格果实输出分配建立或更新总量，并在规定时保留未结果年度 | establishment total; renewal events; orchard life; annual accepted output | 分配到年度和参考流的投入 | `fao-citrus-production-guidance`; `iso-14067` |
| `calc_nutrient_basis` | 养分和改良剂 | 养分质量 = 产品质量 × 声明养分比例，分别报告产品和养分质量 | product quantity; label or supplier nutrient analysis | kg product 及 kg N、kg P2O5、kg K2O 或有机养分基础 | `fao-crop-production-methodology` |
| `calc_harvest_mass_balance` | 采收输出、次品和损失 | 采收质量 = 合格果实 + 共产品 + 次品或损失，并记录库存变化 | harvest tickets; accepted mass; co-product destinations; cull and loss mass; stock change | 经核对的采收平衡 |  |
| `calc_sorting_mass_balance` | 可选分选输出和废物 | 进料 = 合格分选果实 + 明确去向 + 废物，并记录调整 | batch inputs; accepted output; destinations; waste; adjustment basis | 经核对的分选平衡 |  |
| `calc_direct_citrus_field_exchanges` | 土壤、残余物和植保交换 | 对养分、残余物、灌溉和植保数据采用地理适用方法，并记录层级、地理和活动基础 | nutrient inputs; residue fate; soil or climate context; method parameters | 按物质和接收环境区分的基本流 | `ipcc-2019-refinement-vol-4`; `emep-eea-2023-guidebook` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_citrus_orchard_identity` | 所有过程 | 识别区块、品种、国家地区、作物年度、年龄、结果状态和分选边界。 | 果园登记；农场地图；元数据 |
| `dq_perennial_citrus_time_basis` | 建立和管理 | 声明建立年度、未结果期、结果寿命、更新事件和资产分配基础。 | 果园历史；分配工作表 |
| `dq_input_traceability` | 种植材料、养分、灌溉、能源和植保 | 将投入追溯到发票、计量表、产品标签、承包商记录或田间记录，并分开保留产品和养分身份。 | 农场原始记录；供应商记录 |
| `dq_fruit_mass_balance` | 采收和可选分选 | 核对采收、合格、拒收、共产品、库存变化和废物质量，并解释调整。 | 地磅、批次、分级、处理和去向记录 |
| `dq_temporal_coverage` | 所有过程 | 覆盖完整生产年度，并纳入寿命分配所需建立或更新记录。 | 年度台账；果园历史 |
| `dq_environmental_method` | 基本流 | 记录方法、层级、地理、活动数据和假设，并将身份证据缺口与数量证据分开。 | 计算工作表；方法参考 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 参考流和终端过程 | 应有且仅有一个终端合格果实输出连接参考流；产品身份可证据缺口，但须披露绑定和交接条件。 |  |
| `validation_orchard_life_disclosure` | 果园建立和管理 | 缺少果园年龄、建立期、结果寿命、更新事件或分配基础时标记问题。 | `fao-citrus-production-guidance`; `iso-14067` |
| `validation_irrigation_and_nutrients` | 灌溉和养分 | 检查零灌溉或零养分是否有记录或生产理由，并检查产品质量未与养分质量混淆。 | `fao-crop-production-methodology` |
| `validation_fruit_mass_balance` | 采收和可选分选 | 检查各边界质量平衡，并解释差异、拒收去向、库存变化或水分换算。 |  |
| `validation_boundary_exclusions` | 下游活动 | 未声明扩展时，标记场外运输、储存、果汁加工、零售、消费者使用或包装末端处置。 | `iso-14044` |
| `validation_bilingual_alignment` | 英文和中文渲染 | 要求机器标识符、受控词、process_id、row_id、rule_id、协议 ID、要求 ID 和 source_ids 完全一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查农场交接柑橘、宽皮柑或克莱门汀数据集的 secondary_dataset；兼容上游数据明确发布时可作 background_dataset |
| downstream_use | 前景数据包构建、过程投影、生命周期模型汇总和新鲜柑橘供应比较 |
| allowed_use | 声明农场交接和可选分选状态的新鲜、未经加工果实，并保留寿命分配和质量元数据 |
| excluded_use | 果汁、浓缩汁、腌制、干燥或冷冻产品的直接替代；未经区域、年龄、灌溉、品种或市场状态审查的使用；边界外物流或消费者研究 |
| required_metadata | canonical PCR id；CPC；果园范围；物种或品种；地理；年度；年龄；寿命和分配基础；灌溉；养分和植保基础；产量；合格和拒收果实；分选状态；流绑定状态 |
| required_quality_disclosure | 原始记录、时间覆盖、质量平衡、身份证据缺口、参数化 Flow Set、环境方法和层级、假设及区域代表性 |
| update_trigger | 寿命或分配方法、产品身份分类、Flow Set 分类、环境方法、生产路线、分选边界或重要证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-production-methodology` | official_guidance | FAO crop production and farm-data methodology guidance | 作物周期、田间记录、农场交接边界和投入采集 |
| `fao-citrus-production-guidance` | extension_guidance | FAO or national agricultural extension guidance for citrus orchard establishment and management | 柑橘建立、寿命、管理和采收背景 |
| `ipcc-2019-refinement-vol-4` | method_factor | 2019 IPCC Refinement to the 2006 IPCC Guidelines, Volume 4 | 土壤和残余物交换计算 |
| `emep-eea-2023-guidebook` | method_factor | EMEP/EEA air pollutant emission inventory guidebook | 农业排放方法和接收环境 |
| `iso-14044` | standard | ISO 14044, Environmental management — Life cycle assessment — Requirements and guidelines | 分配、共产品和校验 |
| `iso-14067` | standard | ISO 14067, Greenhouse gases — Carbon footprint of products | 产品边界和多年生生产分配 |
