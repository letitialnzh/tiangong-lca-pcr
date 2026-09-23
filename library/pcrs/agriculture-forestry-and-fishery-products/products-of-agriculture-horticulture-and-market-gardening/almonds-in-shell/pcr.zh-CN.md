---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.almonds-in-shell
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 带壳杏仁

## 1. 范围与适用性

本 PCR 适用于在受管理的多年生杏仁果园中生产，并在声明的农场、脱外果皮设施或首次调制交接点交付的合格带壳杏仁。范围包括果园建立和补植、未结果期和结果期管理、采收与收集、去外果皮、必要时的干燥、清理、分级，以及声明交接点内可选的散装或包装交付。

适用于在披露路线、品种组、地理位置、果园年龄和交接点的前提下采用的常规、综合、有机、雨养和灌溉路线。不包括苗圃生产、杏仁脱壳取仁、仁加工、烘烤、漂白、杏仁油、杏仁粉、饮料、糖果、零售、消费者使用、交接点外运输和储存以及包装末端处理。由于参考产品仍保留硬壳但不含外果皮，本 PCR 包含去外果皮；脱壳取仁属于单独的去壳杏仁类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.almonds-in-shell` |
| classification_refs | CPC 3.0 `01371`，Almonds, in shell |
| covered_products | 保留硬壳、在声明农场、脱外果皮设施或首次调制交接点交付的完整或分级杏仁 |
| excluded_products | 杏仁仁或去壳杏仁；烘烤、漂白、加盐、研磨、制油、饮料、糖果和其他加工产品；苗圃材料及下游物流 |
| representative_product | 在声明交接点交付的合格、清理、必要时干燥并分级的带壳杏仁 |
| production_route | 多年生杏仁果园建立和管理、采收与收集、去外果皮、干燥、清理、分级和声明交接 |
| market_state | 声明品种或品种组、壳型、尺寸或等级、水分约定、质量状态、地理位置、作物年度和交接点的带壳杏仁 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明交接点的合格带壳杏仁 |
| How much | 1,000 kg 净合格带壳杏仁 |
| How well | 品种或品种组；硬壳、半软壳、软壳或纸壳类型；尺寸或等级；仁和壳质量；水分基准；合格和不合格质量；作物年度；地理位置；交接点 |
| How long or cycle | 果园结果寿命内声明的一个作物年度；建立、未结果年份、补植和清除按声明的果园寿命基准分配 |
| reference_flow_link | 声明交接点 `almond_hulling_drying_and_grading` 的合格输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Almonds, in shell `774866bc-5c13-4def-a264-05a61a532a3e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种或品种组；壳型；生产国家、地区和气候；果园年龄及结果状态；作物年度或平均期；果园面积；灌溉状态和水源；采收和去外果皮状态；尺寸或等级；水分基准；合格和不合格质量；杏仁外果皮去向；交接点；包装状态 |
| Binding | `fixed` |

构建前景数据包时，`必需限定信息` 应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。净产品质量不含容器皮重。不得用去壳杏仁仁作为本 PCR 的参考产品。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` | kg | 以声明交接点的净合格带壳杏仁表示参考流，并排除容器皮重。 |
| `yield_and_output_basis` | 果园产量和调制输出 | 质量和面积 | kg 和 ha | 归一化前，对同一果园年度或声明聚合期记录采收作物、合格带壳杏仁、杏仁外果皮、拒收物和实测损失。 |
| `moisture_basis` | 采收、干燥、储存和合格杏仁 | 质量和水分分数 | kg 和声明分数 | 保留接收状态质量和水分；仅使用实测水分和透明的干物质或水质量方程进行换算。 |
| `shell_and_kernel_quality` | 合格带壳杏仁 | 声明的质量属性 | 声明单位 | 保留壳型、尺寸或等级、壳缺陷、仁缺陷基准、异物和干燥充分状态，不使用统一默认等级替代。 |
| `orchard_life_allocation_basis` | 建立、补植和未结果期投入 | 面积、时间或质量活动属性 | ha、果园年或 kg 产品 | 将多年生果园建立和补植投入按声明寿命及合格带壳杏仁产出基准分配，并披露未结果年份和补植事件。 |
| `nutrient_product_and_n_basis` | 养分和土壤改良投入 | 产品和养分质量 | kg 产品及 kg N、P2O5 或 K2O | 分开记录配方产品质量和有文件支持的养分含量；氮排放计算使用声明的 kg N。 |
| `water_basis` | 灌溉和取水 | 体积或质量 | m3 或 kg | 区分交付灌溉水、自然资源取水、排水或消耗指标以及水质证据。 |
| `energy_inventory` | 果园、采收、干燥和分级 | 质量、体积或能量 | kg、L、MJ 或 kWh | 保留能源载体、单位、作业、设备、期间和换算基准。 |
| `packaging_quantity` | 交接点内可选包装 | 质量或件数 | kg、g 或 item | 若包装位于声明交接点内，记录包装材料质量或件数、包装容量和批次归属。 |

## 5. 系统边界

前景边界从声明的果园起始条件开始，经过果园管理、采收与收集、去外果皮、必要时干燥、清理、分级，至合格带壳杏仁在声明交接点的交付。种苗、肥料、植保产品、供水、能源载体、机械服务和包装材料的上游生产使用有代表性的背景数据集。脱壳取仁、仁加工、烘烤、零售包装、交接点外运输、储存和使用不在默认边界内。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 建园前或建立时的果园地块，种植材料和购买的管理投入跨越前景边界；既有土地用途和果园历史单独披露 |
| starting_condition_role | 受管理多年生杏仁生产和果园资产核算的起点 |
| product_classification_scope | CPC 3.0 `01371`，Almonds, in shell；去壳杏仁和加工杏仁产品不在本 PCR 内 |
| recursive_input_rule | 同类种植材料或保留杏仁跨越边界时作为上游投入记录，不递归展开为另一个带壳产品输出。果园、采收和去外果皮之间的内部交接只是过程链接，不是额外市场输出。 |
| upstream_dataset_requirement | 种苗、养分产品、植保、灌溉供水、燃料、电力、干燥能源、包装、机械服务和废物处理在跨越边界时应使用有代表性的上游数据集。 |
| disclosure | 品种和壳型；果园地块和地点；建立年份、果园年龄、结果寿命和补植；土地历史；土壤和气候；灌溉水源和水质；养分和植保；采收时间和质量；去外果皮、干燥、分级、合格输出、外果皮、拒收物、损失、去向和交接点 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_to_accepted_in_shell` | 所有符合条件的数据集 | 纳入建立、未结果年份、结果期管理、采收、收集、去外果皮、必要时干燥、清理、分级和声明交接点的合格带壳交付。 | `fao-crop-production-methodology`; `usda-almonds-in-shell-grade-2013` |
| `boundary_perennial_orchard_disclosure` | 建立和补植 | 将建立、未结果年份、补植树和清除按声明果园寿命及合格产出基准分配，并披露寿命、未结果年份和补植事件。 | `iso-14067`; `fao-crop-production-methodology` |
| `boundary_hulling_not_shelling` | 去外果皮和下游加工 | 纳入去除外果皮并制备保留硬壳的杏仁；排除脱壳取仁、仁分离、仁加工和脱壳副产品。 | `usda-almond-commercial-storage`; `usda-almonds-in-shell-grade-2013` |
| `boundary_input_completeness` | 果园和调制 | 对种植材料、养分、灌溉、植保、土地、燃料、电力、干燥、去外果皮、分级、包装、直接排放和废物处理提供采集值、合理零值或有记录的排除。 | `almond-board-irrigation-continuum`; `ipcc-2019-managed-soils-n2o` |
| `boundary_quality_and_fate` | 所有输出 | 通过实测质量和声明去向区分合格带壳杏仁、杏仁外果皮、降级或拒收杏仁、异物、粉尘和未解释损失。 | `usda-almonds-in-shell-grade-2013`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `almond_orchard_establishment_and_management` | 杏仁果园建立和管理 | required |  | foreground | 果园年度投入和合格产出基准 |
| `almond_harvest_and_collection` | 杏仁采收和收集 | required |  | foreground | 去外果皮前的采收杏仁作物 |
| `almond_hulling_drying_and_grading` | 杏仁去外果皮、干燥和分级 | required | 纳入在声明交接点形成合格带壳杏仁所需的作业 | foreground | 1,000 kg 合格带壳杏仁 |

### 过程：杏仁果园建立和管理（`almond_orchard_establishment_and_management`）

#### 输入

##### 产品流

###### 果园种植材料和支撑投入（`orchard_planting_material`）

按果园地块、建立或补植事件记录苗木、嫁接材料、支撑材料和归属的灌溉系统材料，并按果园寿命关联资产和补植。

- 选定流：杏仁苗木和果园支撑材料
- 流属性/单位：声明属性 / item、kg 或 unit
- 数量规则：按地块和事件实测数量，并按合格产出年度化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格带壳杏仁
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_almond_orchard_lifecycle_records`
- 来源：`fao-crop-production-methodology`; `iso-14067`

###### 农业养分与肥料投入（`almond_orchard_establishment_and_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格带壳杏仁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_almond_orchard_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`; `almond-board-water-quality`

###### 供应的灌溉水（`orchard_irrigation_water`）

按水源和地块记录交付灌溉；经过验证的雨养路线记录有证据支持的零值。

- 选定流：供应至果园的灌溉水
- 流属性/单位：体积或质量 / m3 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按水源、地块和作物年度计量或有证据的交付量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格带壳杏仁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_almond_irrigation_records`
- 来源：`almond-board-irrigation-continuum`; `almond-board-water-quality`

###### 果园燃料和电力（`orchard_energy_input`）

记录抽水、施肥、割草、修剪、地面管理和其他田间作业能源，并区分燃料和电力。

- 选定流：果园作业能源供应；在前景数据中展开为电力或移动机械燃料交换
- 流属性/单位：质量或能量 / kg、L、MJ 或 kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 分组选择：在前景数据中根据实际记录确定电力或移动机械燃料功能
- 数量规则：按作业和地块实测或供应商记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格带壳杏仁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_almond_energy_records`
- 来源：`fao-crop-production-methodology`

##### 废物流

###### 果园修剪和补植残余物（`orchard_residue_output`）

按质量、水分、地块、期间和去向记录修剪物、清除树木和补植残余物。没有证据支持的产品交接时，不得将残余物作为共产品。

##### 基础流

###### 果园土地占用（`orchard_land_occupation`）

按地块和作物年度记录种植面积及占用。土地转化应单独记录，不得由占用量推断。

- 选定流：杏仁果园农业土地占用
- 流属性/单位：面积-时间 / ha·orchard year

#### 输出

##### 产品流

###### 果园生产管理交接（`managed_almond_orchard_output`）

将果园年度生产情境作为内部过程链接传递至采收，不作为额外市场产品。

##### 基本流

###### 养分相关田间排放（`orchard_field_emissions`）

使用养分记录采用的相同活动数据和方法层级计算直接及间接养分、残余物相关排放。

- 选定流：向空气、水或土壤排放的养分及残余物相关基础流；在前景数据中按污染物和接收介质展开
- 流属性/单位：质量 / kg substance
- 分组选择：在前景数据中根据实际污染物和接收介质确定

### 过程：杏仁采收和收集（`almond_harvest_and_collection`）

#### 输入和输出

记录果园生产交接、摇树、清扫、拾取、田间运输和装载能源；单独记录留在果园、损伤作物及其他采收损失。形成去外果皮前的采收杏仁作物中间状态，不将其当作参考产品。

采收机械燃料使用 `parameterized` 绑定到 `flow-set.energy-supply` `0.2.0` 的 `mobile-machinery-fuel` 分组。若使用跨边界的承包采收服务且未被燃料或电力记录表示，应作为单独的未映射服务流记录，不得强行归入能源分组。

### 过程：杏仁去外果皮、干燥和分级（`almond_hulling_drying_and_grading`）

#### 输入

记录去外果皮前作物的接收质量、水分、外果皮状态、接收日期和来源地块；记录去外果皮、输送、干燥、清理和分级所用电力、燃料及必要工艺水。只在声明路线实际包含干燥时记录干燥。

调制能源使用 `parameterized` 绑定到 `flow-set.energy-supply` `0.2.0`，分组在前景数据中根据电力或固定燃烧燃料确定。工艺水使用 `parameterized` 绑定到 `flow-set.water-use` `0.2.0` 的 `process-water` 分组。

#### 输出

##### 产品流

###### 合格带壳杏仁（`accepted_almonds_in_shell`）

使用 CLI 核验的产品流 `Almonds, in shell 774866bc-5c13-4def-a264-05a61a532a3e`，记录去外果皮、干燥、清理和分级后的净合格质量。硬壳仍附着于杏仁仁上，本过程不进行脱壳取仁。

###### 杏仁外果皮共产品（`almond_hull_co_product`）

若外果皮以有记录的交接或用途跨越边界，使用 CLI 核验的 `Almond hulls 5f0a0004-6949-4658-ad23-3d0088c89c4d` 作为共产品；若被丢弃，则应改用废物流身份并记录去向。

##### 废物流和基础流

分别记录空壳、破损或缺陷坚果、异物、粉尘和拒收杏仁；只有在现场记录和身份核验支持时才记录粉尘、废水及直接调制排放。

## 7. 分配和共产品处理

### 分配规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 果园、采收和调制 | 记录允许时，优先按果园地块、采收批次、去外果皮批次、等级和去向进行过程细分，避免分配。 | `iso-14044-2006` |
| `allocation_perennial_time` | 建立、未结果年份、补植和清除 | 按声明果园寿命、面积、期间和产量基准分配多年生果园负荷，并披露未结果年份和补植事件。 | `iso-14067`; `fao-crop-production-methodology` |
| `allocation_hull_co_product` | 合格带壳杏仁和商品化外果皮 | 外果皮具有有证据支持的产品交接时，在过程细分后使用质量分配。经济分配必须有代表性价格及质量分配敏感性；外果皮为废物时不分配产品信用。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_rejects_and_losses` | 拒收物、破损坚果、粉尘和田间损失 | 将收集和处理负荷保留在产生过程，不将拒收或损失计为合格输出。只有在去向和交接有证据时，回收物才可作为共产品。 | `usda-almonds-in-shell-grade-2013`; `iso-14044-2006` |
| `allocation_no_double_counting_internal_links` | 果园、采收和去外果皮内部链接 | 内部交接只传递质量平衡，不是额外市场产品，不得重复计入上游负荷。 | `iso-14044-2006` |

本 PCR 对有证据支持的杏仁外果皮共产品采用“过程细分后质量分配”的默认规则。数据集必须声明外果皮是销售、饲用、堆肥、焚烧、还田还是丢弃，并披露分配敏感性。

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_almond_orchard_lifecycle_records` | `almond_orchard_establishment_and_management` | 建立、补植、清除和土地 | 果园资产及土地记录 | block; area; cultivar; planting year; orchard age; productive life; trees; supports; prior land use; replacement; removal; fate | GIS、资产登记、发票、田间记录 | ha、item、kg、year | 建立、补植及年度更新 | 声明果园寿命和作物年度 | 每个果园地块 | 按合格产出年度化归属投入 | 地图、发票、资产登记和补植记录 |
| `cp_almond_orchard_input_records` | `almond_orchard_establishment_and_management` | 养分、植保和田间排放 | 采购及施用记录 | product; formulation; nutrient; active ingredient; mass; date; block; purpose; method | 发票、标签、施用日志、农艺记录 | kg product、kg nutrient、kg active ingredient | 每次施用 | 完整作物年度 | 每个果园地块 | 按产品及养分或活性成分汇总 | 发票、标签、施用记录 |
| `cp_almond_irrigation_records` | `almond_orchard_establishment_and_management` | 灌溉和取水 | 水表及抽水记录 | source; meter; reading; volume; pumping energy; date; block; rain-fed flag; water quality | 校准水表、泵记录、发票、水质分析 | m3、kg、kWh、MJ | 事件或月份 | 灌溉季和作物年度 | 地块和水源 | 按水源汇总并按合格产出归一化 | 校准、读数、发票、水质分析 |
| `cp_almond_energy_records` | `almond_orchard_establishment_and_management` | 果园和采收能源 | 燃料、电力和承包商记录 | operation; machine; carrier; amount; date; block; service provider | 燃料日志、车辆数据、水表、发票 | L、kg、kWh、MJ、服务单位 | 作业或账单期间 | 完整作物年度 | 果园地块和承包商 | 按作业分配并按合格产出归一化 | 发票、仪表、设备日志 |
| `cp_almond_harvest_records` | `almond_harvest_and_collection` | 采收作物和损失 | 采收票据及接收记录 | block; cultivar; harvest pass; date; gross mass; moisture; hull condition; rejected mass; loss; destination | 校准秤和采收日志 | kg 和水分分数 | 每次采收 | 完整作物年度 | 地块和接收点 | 核对采收作物、损失和接收质量 | 校准、票据、水分记录 |
| `cp_almond_conditioning_records` | `almond_hulling_drying_and_grading` | 合格输出、外果皮、拒收物、能源、水和包装 | 批次、批组和等级记录 | input mass; moisture; hulling date; drying energy; water; grade; accepted mass; hull mass; reject mass; fate; package | 接收秤、批次单、仪表、等级和发运记录 | kg、水分分数、kWh、MJ、m3、item | 批次或批组 | 作物年度和声明交接期 | 去外果皮或调制设施 | 核对输入与合格、外果皮、拒收和损失输出 | 校准秤、仪表、等级证书、发运和去向记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_accepted_yield` | 果园和参考产品 | 合格带壳质量 / 代表果园面积，同时单独报告合格率 | `cp_almond_harvest_records`; `cp_almond_conditioning_records` | kg 合格杏仁/ha 和合格率 | `mass-balance-identity` |
| `annualize_almond_orchard_life` | 建立和补植投入 | 按年龄记录或声明产量曲线，以可归属生命周期投入 / 声明寿命合格产出 | `cp_almond_orchard_lifecycle_records`; `cp_almond_harvest_records` | 每 kg 参考产品的年度化投入 | `iso-14067`; `fao-crop-production-methodology` |
| `calculate_irrigation_and_withdrawal` | 灌溉 | 按水源交付灌溉和取水 / 合格产出；另行报告消耗或水足迹 | `cp_almond_irrigation_records`; `cp_almond_harvest_records` | m3/kg 参考产品及分水源取水量 | `almond-board-irrigation-continuum`; `almond-board-water-quality` |
| `calculate_direct_soil_emissions` | 养分和残余物排放 | 对声明养分和残余物记录使用选定 IPCC 方法层级；适用时按 44/28 将 N2O-N 换算为 N2O | `cp_almond_orchard_input_records`; 声明因子 | kg 排放/kg 参考产品 | `ipcc-2019-managed-soils-n2o` |
| `reconcile_almond_outputs` | 采收和调制 | 合格带壳杏仁 + 商品化外果皮 + 拒收物 + 实测损失 = 声明调制输入，并在声明容差内闭合 | `cp_almond_harvest_records`; `cp_almond_conditioning_records` | 质量平衡和未解释残差 | `mass-balance-identity` |
| `allocate_hull_co_product` | 商品化外果皮 | 仅在外果皮输出和去向有证据后采用过程细分和质量分配 | `cp_almond_conditioning_records` | 合格杏仁和外果皮的分配负荷 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考流和输出 | 声明已核验参考流 UUID、品种、壳型、地理位置、果园地块或贡献地点、作物年度、交接点、水分、等级和包装状态。 | 数据集元数据、果园和等级记录 |
| `dq_temporal_representativeness` | 多年生生产 | 覆盖完整作物年度并披露果园年龄、结果状态、建立、补植和报告期；若宣称多年代表性，需使用有文件支持的多年平均。 | 日期化果园、采收和资产记录 |
| `dq_site_aggregation` | 多地块或多地点 | 识别每个贡献地块或设施，将其输入输出链接到共同边界，披露权重和代表性并防止重复计数。 | 地点登记、地块记录、聚合工作簿 |
| `dq_mass_balance` | 采收和调制 | 核对接收作物、合格杏仁、外果皮、拒收物和损失；保留皮重、水分基准、秤校准和残差说明。 | 秤记录、水分测试、批次和去向记录 |
| `dq_input_completeness` | 果园和调制 | 对范围内的种植材料、养分、灌溉、植保、燃料、电力、干燥、去外果皮、分级、包装、直接排放和废物处理量化或说明零值/排除。 | 台账、标签、仪表、发票、日志 |
| `dq_quality_attributes` | 合格带壳输出 | 保留壳型、尺寸或等级、水分、仁缺陷基准、异物和充分干燥或等效质量证据。 | 等级证书、检验、水分和批次记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 核对 1,000 kg 参考流使用 `774866bc-5c13-4def-a264-05a61a532a3e`、Mass、kg 及全部必需限定信息。 | `usda-almonds-in-shell-grade-2013` |
| `validation_scope_and_handoff` | 过程图 | 核对果园管理、独立采收与收集、去外果皮、必要时干燥、清理、分级和声明交接点均已表示，且没有脱壳取仁或仁加工。 | `usda-almond-commercial-storage`; `usda-almonds-in-shell-grade-2013` |
| `validation_perennial_periods` | 果园生命周期 | 核对建立、未结果年份、结果年份、补植、终止或清除及年度化基准已声明且未重复计数。 | `iso-14067`; `fao-crop-production-methodology` |
| `validation_site_aggregation` | 多地点或多地块 | 核对每个贡献地块都有边界、证据链接、权重和代表性决定；遗漏或重复贡献时拒绝聚合。 | `mass-balance-identity` |
| `validation_outputs_and_attribution` | 合格杏仁和外果皮 | 核对预期输出及交接完整，商品化外果皮使用声明的分配规则，外果皮或拒收物未在两个交接点重复计数。 | `iso-14044-2006`; `mass-balance-identity` |
| `validation_mass_balance` | 采收和调制 | 核对合格杏仁、外果皮、拒收物和损失在声明容差内与输入质量闭合，所有非参考输出都有去向。 | `usda-almonds-in-shell-grade-2013`; `mass-balance-identity` |
| `validation_nitrogen_and_water` | 养分、排放和水 | 核对产品质量与养分质量区分，排放因子和单位有声明，交付灌溉水未与自然取水或消耗混淆。 | `ipcc-2019-managed-soils-n2o`; `almond-board-water-quality` |
| `validation_quality_attributes` | 合格输出 | 核对壳型、尺寸或等级、水分、缺陷基准、异物和充分干燥或等效质量证据存在。 | `usda-almonds-in-shell-grade-2013` |
| `validation_completeness` | 数据包 | 核对每个必需投入和输出类别都有数值、合理零值或有记录排除，且所有未解决身份发现均可见。 | `fao-crop-production-methodology`; `mass-balance-identity` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与声明品种或壳型、地理位置、果园年龄、作物年度或平均期、调制路线、等级、水分和交接点相匹配的农场或脱外果皮设施带壳杏仁供应 |
| excluded_use | 去壳杏仁、杏仁仁、烘烤、漂白、加盐、研磨、制油、饮料、糖果或其他加工产品；苗圃生产、脱壳取仁、零售和消费者使用 |
| required_metadata | 已核验参考流及属性/单位身份；贡献果园和设施；品种和壳型；地理位置；果园年龄和寿命；灌溉；养分和植保基准；采收和去外果皮记录；合格、外果皮、拒收和损失基准；水分；等级；交接点；Flow Set 选择及最终 UUID 解析；分配；协议覆盖 |
| required_quality_disclosure | 作物年度；一手记录覆盖；地点聚合和权重；质量平衡容差；秤和仪表校准；水源；因子；外果皮去向；排除项；不确定性和敏感性 |
| update_trigger | 品种或壳型、果园路线、水源、年龄模型、产量、去外果皮或干燥技术、等级基准、外果皮去向、交接点、背景数据集、排放方法或代表性期间发生重大变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usda-almonds-in-shell-grade-2013` | official_guidance | USDA AMS, United States Standards for Grades of Almonds in the Shell, <https://www.ams.usda.gov/sites/default/files/media/Almonds_in_the_Shell_Standard%5B1%5D.pdf> | 带壳身份、壳型、等级、缺陷、异物和质量属性 |
| `usda-almond-commercial-storage` | handbook | USDA ARS, Commercial Storage — Almond section, <https://www.ars.usda.gov/is/np/CommercialStorage/CommercialStorage.pdf> | 外果皮分离、干燥和储存状态，以及外果皮、硬壳和仁的区分 |
| `almond-board-irrigation-continuum` | extension_guidance | Almond Board of California, Almond Irrigation Improvement Continuum, <https://www.almonds.com/sites/default/files/2020-02/Almond-Irrigation-Improvement-Continuum.pdf> | 灌溉调度、用水和系统性能 |
| `almond-board-water-quality` | extension_guidance | Almond Board of California, Orchard Water Supply and Quality, <https://www.almonds.org/almond-industry/orchard-management/water-and-irrigation/water-supply-and-quality> | 水源、盐分、硝酸盐、淋洗和径流披露 |
| `ucipm-almond-hull-split` | official_guidance | UC IPM, Almond Pest Management Guidelines: Identify Hull Split, <https://ipm.ucanr.edu/agriculture/almond/identify-hull-split/> | 采收时间、外果皮开裂、采收批次和虫害暴露 |
| `fao-crop-production-methodology` | official_guidance | FAO crop production and farm data collection guidance | 果园过程完整性和生产边界 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 受管理土壤 N2O 计算 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Requirements and guidelines | 分配层级、过程细分和共产品处理 |
| `iso-14067` | standard | ISO 14067, Greenhouse gases — Carbon footprint of products | 多年生寿命分配和产品碳足迹披露 |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity | 输出核对、地点聚合和防止重复计数 |
