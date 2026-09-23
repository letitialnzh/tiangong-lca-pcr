---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vegetables-fresh-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 新鲜蔬菜，未另列明者

## 1. 范围与适用性

本 PCR 适用于在声明的农场交付、包装场交付或等效首次市场交接点以新鲜状态销售的整株蔬菜，且该蔬菜不属于 CPC 3.0 中更窄的具名蔬菜类别。这是一个剩余类别：具体数据包必须先依据物种、品种、食用部分和市场路线检查更窄的 CPC 类别，只有在均不适用时才使用本 PCR。

具体数据包应声明物种或品种、食用部分、生产系统、地理位置、作物周期、采收状态和声明的交接点。当路线被明确限定时，可以表示露地、保护地和混合路线生产。本 PCR 不规定单一作物技术或单一蔬菜物种。

本 PCR 排除加工、烹煮、冷冻、盐渍、腌制、发酵、干燥、粉末化、罐藏、榨汁或其他保藏蔬菜；种子、种植材料和育苗产品；动物饲料或废弃物产品；以及属于更窄具名 CPC 类别的蔬菜。除非另行声明，声明的首次市场交接点之后的配送不在默认边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vegetables-fresh-n-e-c` |
| classification_refs | CPC 3.0:01290; exact residual category reference |
| covered_products | 不属于更窄具名 CPC 蔬菜类别的整株新鲜蔬菜，未另列明者；必须声明物种、品种、食用部分、路线和市场状态 |
| excluded_products | 更窄 CPC 蔬菜类别；加工、冷冻、盐渍、腌制、发酵、干燥、粉末化、罐藏、榨汁、保藏、种子、种植材料、饲料和废弃物产品 |
| representative_product | 在声明的首次市场交接点交付的、属于剩余类别的具体物种或品种整株新鲜蔬菜 |
| production_route | 管理型作物生产及采收；在声明交接点之前发生时，可选纳入初步调理、分级或分选以及包装或展示 |
| market_state | 在声明的农场、包装场或等效首次市场交接点的新鲜、整株、可销售产品；纳入储存或配送时必须声明限定信息 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明的 CPC 01290 剩余类别中，声明首次市场交接点的 1 kg 可销售整株新鲜蔬菜 |
| How much | 声明首次市场交接点的 1 kg 净产品 |
| How well | 声明物种或品种、食用部分、等级或可销售状态、生产路线、地理位置、作物周期以及调理或包装状态 |
| How long or cycle | 一个完整作物周期及其相关采收期，并声明报告期间 |
| reference_flow_link | 最后一个纳入过程的 `reference_fresh_vegetable` 输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Fresh vegetables `b9e1edf7-c890-448d-99c3-167460588c33` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或品种；食用部分；生产系统；生产地理位置；作物周期或采收期；声明交接点；新鲜且整株状态；等级或可销售性；是否纳入调理和包装；适用时的储存时间 |
| 绑定模式 | fixed |


构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `rule_reference_mass_basis` | reference product and all normalized outputs | Mass | kg | 将参考产品报告为声明交接点的新鲜净质量。使用净参考数量推导时，应分别记录毛质量、包装质量以及田间或未分级质量。 |
| `rule_water_volume_conversion` | irrigation and conditioning water | Volume or Mass | m3 or kg | 保留源记录的计量单位；将水记录转换到所选质量或体积基准时，说明密度或仪表换算。 |
| `rule_nutrient_basis_declaration` | fertilizer or soil amendment input | Mass of product and declared nutrient basis | kg product and kg nutrient | 记录实际使用产品及其声明的 N、P、K 或有机养分基准；不得从剩余蔬菜类别推断产品类别。 |
| `rule_crop_cycle_time_index` | crop production inputs and outputs | Mass, energy, or substance amount | row-specific unit | 在按 1 kg 参考产品归一化前，将每条记录索引到同一作物周期和报告期间。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 管理型作物生产从为该作物周期准备好的声明地块或生产单元开始，并包括进入该单元的外购或转移投入 |
| starting_condition_role | 剩余类别新鲜蔬菜的前景生产边界 |
| product_classification_scope | 仅在按物种、食用部分和路线排除更窄具名 CPC 蔬菜类别后适用 CPC 3.0:01290 |
| recursive_input_rule | 在前景单元之间转移的同类别蔬菜投入，作为产品输入记录其来源身份、数量、状态和转移边界；接收单元不在本 PCR 内递归重建其上游生产，除非明确作为链接数据集纳入 |
| upstream_dataset_requirement | 对于在前景边界之外的种子或种植材料、外购养分或改良剂、能源、水供应、包装以及转移产品投入，应在投入跨越边界处使用声明的上游数据集 |
| disclosure | 声明起始土地或生产单元状态、路线、物种或品种、作物周期、是否纳入调理和包装，以及为核对参考产品所需的所有转移、损失和输出去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `rule_residual_category_gate` | product identity and reference flow | 选择本 PCR 前确认没有更窄具名 CPC 蔬菜类别适用；在数据集元数据中保留物种、品种、食用部分和路线判定。 | `iso-14044-2006` |
| `rule_first_market_handoff` | system boundary | 默认前景边界在声明的新鲜整株产品首次市场交接点结束。仅当交接前发生且作为纳入过程记录时，才纳入采后调理或包装。 | `iso-14040-2006`; `fao-fresh-produce-hygiene-2003` |
| `rule_upstream_input_linkage` | purchased and transferred inputs | 在上游投入跨越前景边界的位置链接上游投入数据集；不得将上游产品系统隐藏在本地活动记录中。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_crop_production` | 管理型作物生产 | required | 声明作物周期始终纳入 | 生产在田作物，并记录作物管理投入和环境交换 | 每个作物周期，归一化到 1 kg 参考产品 |
| `p_harvest_capture` | 采收与田间收集 | required | 将声明产品从生产单元移出时始终纳入 | 将采收的新鲜蔬菜从在田作物中分离，并记录采收作业和田间损失 | 每个采收期，归一化到 1 kg 参考产品 |
| `p_primary_conditioning` | 初步调理 | conditional | 在交接前发生清洗、修整、冷却、清洁或其他首次调理并改变产品状态时纳入 | 将采收状态转换为声明的调理状态 | 每个调理批次，归一化到 1 kg 参考产品 |
| `p_grading_sorting` | 分级与分选 | conditional | 在交接前将产品分为两个或更多等级或去向时纳入 | 核对可销售、次级、拒收和损失状态 | 每个分级批次，归一化到 1 kg 参考产品 |
| `p_packaging_presentation` | 包装与展示 | conditional | 在交接前包装、贴标或展示处于声明边界内时纳入 | 将所选产品状态转换为包装或展示交接状态 | 每个包装批次，归一化到 1 kg 参考产品 |

### 过程：管理型作物生产（`p_crop_production`）

#### 输入

##### 产品流

###### 种子或种植材料（`crop_seed_or_propagule`）

当种子、移栽苗或其他种植材料为建立声明作物周期而供应时，其跨越作物生产边界。

- 选定流：声明的种子或种植材料；
- 流属性/单位：Mass / kg
- 数量规则：实际质量，或依据声明材料基准将数量换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`fao-crop-production-guidance-2016`

###### 灌溉水（`crop_irrigation_water`）

当灌溉水被取用或供应到作物生产单元用于声明周期时，记录灌溉水。

- 选定流：灌溉水
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 数量规则：有计量或文件证明的灌溉施用量；若在边界内，还应包括声明的取水和输送损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`fao-crop-production-guidance-2016`

###### 农业养分与肥料投入（`p_crop_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`fao-fertilizer-code-of-conduct-2019`

###### 作物生产用电（`crop_electricity`）

当泵、保护地设备、照明、控制系统或其他作物生产设备位于边界内时，记录其用电。

- 选定流：电力供应
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- 数量规则：声明作物周期的电表记录或供应商账单分摊量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`iso-14044-2006`

###### 作物生产燃料（`crop_fuel`）

当拖拉机、泵、加热设备或其他边界内移动或固定作物生产设备使用燃料时，记录燃料。

- 选定流：农业燃料供应 或 `stationary-combustion-fuel`
- 流属性/单位：Mass or Energy / kg or MJ
- 数量规则：按燃料领用、计量或账单记录分摊至声明作物周期
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`iso-14044-2006`

##### 废物流

###### 作物投入包装废物（`crop_input_packaging_waste`）

当作物投入的包装作为单独管理的废物流跨越前景边界时记录。

- 选定流：非危险投入包装废物；
- 流属性/单位：Mass / kg
- 数量规则：称重废物或供应商包装核对量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_inputs`
- 来源：`fao-food-loss-waste-2019`

##### 基本流

###### 土地占用（`crop_land_occupation`）

根据声明作物周期使用的面积和时间记录土地占用。

- 选定流：农业土地占用
- 流属性/单位：Area-time / m2*a
- 数量规则：声明占用面积乘以作物周期持续时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_area_yield`
- 来源：`fao-crop-production-guidance-2016`

#### 输出

##### 产品流

###### 在田作物交接（`standing_crop_output`）

在田作物输出是交给采收过程的声明作物状态，尚不是可销售参考流。

- 选定流：声明的剩余类别在田蔬菜作物；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：采收损失和后续调理前的田间输出核对量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_area_yield`
- 来源：`fao-crop-production-guidance-2016`

##### 废物流

###### 未收集作物残余（`crop_residue_output`）

记录留在田间或从作物生产单元移出的作物残余，并在边界重要时说明去向和处理。

- 选定流：作物残余或生产损失废物；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：依据作物产量核对记录田间残余和未采收生物量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_area_yield`
- 来源：`fao-food-loss-waste-2019`

##### 基本流

###### 土壤磷损失（`crop_soil_phosphate_loss`）

当选定方法识别出作物养分管理的损失途径时，记录释放到土壤的磷。

- 选定流：土壤磷排放
- 流属性/单位：Mass / kg P
- 数量规则：将采集的 P 投入和保留记录代入声明的养分损失方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_inputs`
- 来源：`ipcc-2019-refinement-agriculture`

###### 土壤氮损失（`crop_soil_nitrogen_loss`）

根据声明的养分施用量以及为数据集选择的场址或方法因子，计算释放到土壤的氮。

- 选定流：土壤氮排放
- 流属性/单位：Mass / kg N
- 数量规则：将声明的作物周期养分投入和作物保留氮量代入所声明的计算方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_inputs`
- 来源：`ipcc-2019-refinement-agriculture`

###### 直接土壤氧化亚氮（`crop_direct_n2o`）

根据适用的养分投入方法和声明的管理记录，计算直接土壤氧化亚氮。

- 选定流：排放到空气的氧化亚氮
- 流属性/单位：Mass / kg N2O
- 数量规则：对声明的 N 投入应用选定的直接排放因子，并记录因子选择
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_inputs`
- 来源：`ipcc-2019-refinement-agriculture`

###### 田间氨和氮氧化物（`crop_reactive_n_emissions`）

当选定方法或场址记录支持时，分别记录氨和氮氧化物释放。

- 选定流：一种已识别的空气排放：氨（NH3）或方法报告的氮氧化物物种；分别生成交换并保留 NOx 报告基准
- 流属性/单位：Mass / kg substance
- 数量规则：使用实测或按方法计算的排放，并在数据包中保留分开的物质身份
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_inputs`
- 来源：`ipcc-2019-refinement-agriculture`

### 过程：采收与田间收集（`p_harvest_capture`）

#### 输入

##### 产品流

###### 待采收在田作物（`harvest_standing_crop_input`）

在田作物以管理型作物生产的输出状态进入采收过程。

- 选定流：`standing_crop_output`；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：作物生产输出与采收记录的核对量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_area_yield`
- 来源：`fao-crop-production-guidance-2016`

###### 采收燃料或服务投入（`harvest_fuel_input`）

当机械或承包作业将产品从田间移出时，燃料或声明的采收服务跨越边界。

- 选定流：移动机械燃料或采收服务
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 流属性/单位：Mass or Energy / kg or MJ
- 绑定模式：`parameterized`
- 数量规则：按采收作业燃料或服务记录分摊至采收期
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_operations`
- 来源：`iso-14044-2006`

##### 废物流

###### 采收损伤和田间损失（`harvest_field_loss`）

当产品未转移到下一个纳入过程时，记录采收损伤和田间损失。

- 选定流：采收损失废物；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：可用在田作物与采收交接量之差，并按去向分类
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_operations`
- 来源：`fao-food-loss-waste-2019`

##### 基本流

#### 输出

##### 产品流

###### 采收新鲜蔬菜（`harvested_fresh_vegetable`）

采收的整株新鲜蔬菜交给下一个纳入过程；若没有后续调理，则直接交给声明交接点。

- 选定流：采收的剩余类别新鲜蔬菜；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：田间损失后的称重或核对采收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_operations`
- 来源：`fao-crop-production-guidance-2016`

##### 废物流

##### 基本流

### 过程：初步调理（`p_primary_conditioning`）

#### 输入

##### 产品流

###### 待调理采收产品（`conditioning_harvested_input`）

当交接前发生清洗、修整、冷却或等效首次准备时，采收产品进入调理过程。

- 选定流：`harvested_fresh_vegetable`；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：与采收输出核对的批次称重进料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-fresh-produce-hygiene-2003`

###### 调理用水（`conditioning_water`）

当水为声明边界内的新鲜蔬菜清洗、冷却或清洁而跨越边界时纳入。

- 选定流：过程水
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 数量规则：按计量或批次记录的用水量，并声明循环使用和排放基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-fresh-produce-hygiene-2003`

###### 调理用电（`conditioning_electricity`）

纳入调理步骤时，记录泵、冷却、清洗、修整或控制设备的用电。

- 选定流：电力供应
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- 数量规则：调理批次的计量或分摊用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`iso-14044-2006`

##### 废物流

###### 调理拒收物和修整物（`conditioning_rejects`）

记录调理后离开的修整物、损坏部分和拒收物，并说明去向。

- 选定流：调理拒收物或有机废物；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：与调理进料和输出核对的称重拒收流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-food-loss-waste-2019`

###### 调理废水（`conditioning_wastewater`）

当使用后的水离开纳入的调理边界进入处理或排放时，记录废水。

- 选定流：废水处理服务或废水
- 流属性/单位：Volume / m3
- 数量规则：排放或处理体积，并声明处理路线和污染物记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-fresh-produce-hygiene-2003`

##### 基本流

#### 输出

##### 产品流

###### 调理后的新鲜蔬菜（`conditioned_fresh_vegetable`）

调理后的新鲜蔬菜是可选首次调理步骤之后、分级、包装或交接之前的输出状态。

- 选定流：调理后的剩余类别新鲜蔬菜；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：扣除调理拒收物和损失后的批次输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-fresh-produce-hygiene-2003`

##### 废物流

##### 基本流

### 过程：分级与分选（`p_grading_sorting`）

#### 输入

##### 产品流

###### 待分级的调理或采收蔬菜（`grading_product_input`）

当交接前形成两个或更多质量或去向状态时，产品进入分级。

- 选定流：`conditioned_fresh_vegetable` 或 `harvested_fresh_vegetable`；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：批次称重进料量及声明的分级前状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_reconciliation`
- 来源：`fao-food-loss-waste-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售等级输出（`marketable_grade_output`）

选定的可销售等级输出进入包装；若不纳入包装，则成为参考流。

- 选定流：可销售新鲜蔬菜等级；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：称重的合格等级输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_grading_reconciliation`
- 来源：`fao-food-loss-waste-2019`

###### 次级等级或副产品输出（`secondary_grade_output`）

当次级等级或副产品被有意销售或转移到一个有明确声明去向时，记录该输出。

- 选定流：次级新鲜蔬菜等级或副产品；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：带有去向和市场状态的称重次级输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_reconciliation`
- 来源：`fao-food-loss-waste-2019`

##### 废物流

###### 分级拒收物（`grading_rejects`）

未作为产品转移的拒收物，按去向和处理路线记录为废物。

- 选定流：分级拒收物或有机废物；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：分级进料与所有声明产品输出之差，并按去向核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_grading_reconciliation`
- 来源：`fao-food-loss-waste-2019`

##### 基本流

### 过程：包装与展示（`p_packaging_presentation`）

#### 输入

##### 产品流

###### 待包装可销售蔬菜（`packaging_product_input`）

当包装或展示处于声明边界内时，可销售输出进入包装过程。

- 选定流：`marketable_grade_output` 或声明的采收/调理输出；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：包装批次称重进料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-fresh-produce-hygiene-2003`

###### 包装材料（`packaging_material`）

只有当包装处于声明产品边界内时，才记录包装材料。

- 选定流：包装材料、`rigid-container-packaging`、`carton-and-box-packaging` 或 `pallet-and-crate-packaging`
- 流属性/单位：Mass / kg
- 数量规则：按材料、重复使用状态记录实际包装材料质量，并分配到包装批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`iso-14044-2006`

###### 包装用电（`packaging_electricity`）

当纳入包装时，记录包装、贴标或展示设备的用电。

- 选定流：电力供应
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- 数量规则：包装批次的计量或分摊用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`iso-14044-2006`

##### 废物流

###### 包装拒收物（`packaging_rejects`）

按材料和去向记录损坏或拒收的包装及产品—包装损失。

- 选定流：包装或包装产品废物；
- 流属性/单位：Mass / kg
- 数量规则：包装批次的称重或核对拒收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考新鲜蔬菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-food-loss-waste-2019`

##### 基本流

#### 输出

##### 产品流

###### 参考新鲜蔬菜（`reference_fresh_vegetable`）

这是声明首次市场交接点的新鲜整株可销售蔬菜最终输出。若不纳入包装，则最后一个纳入过程提供同一参考流角色而不包含包装步骤。

- 选定流：声明的 CPC 01290 剩余类别新鲜蔬菜；
- 流属性/单位：Mass / kg fresh matter
- 数量规则：声明交接点的可销售净质量，不包括包装质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考新鲜蔬菜
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`iso-14044-2006`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `rule_single_output_crop_allocation` | crop production with one declared marketable output | 当没有有意报告的副产品或次级销售输出时，将作物周期全部库存分配给声明参考产品。 | `iso-14044-2006` |
| `rule_grade_output_allocation` | grading, sorting, and multiple marketed grades | 报告每个有意销售的等级或副产品。当输出具有可比的新鲜材料功能时，默认采用物理质量分配；只有在质量不能代表相关因果关系时，才使用有明确理由的替代方法。 | `iso-14044-2006`; `fao-food-loss-waste-2019` |
| `rule_residue_not_coproduct` | field residue, rejects, and non-marketed losses | 除非残余物和拒收物被有意销售或作为具有独立交接点的声明副产品转移，否则将其作为废物或按去向区分的材料处理。 | `fao-food-loss-waste-2019` |
| `rule_shared_input_allocation` | shared machinery, infrastructure, or utilities | 使用有记录的面积、时间、质量或活动驱动因子将共享记录分配至声明作物周期和输出集合，并保留驱动因子和参与输出。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_area_yield` | `p_crop_production` | area, crop-cycle output, and residue | field and harvest records | area; crop dates; cultivar; harvested mass; field residue; destination | farm records, weighbridge, calibrated measurement, and grower interview | ha, kg, date | every crop cycle | full declared crop cycle | each contributing field or production unit | aggregate by field and crop cycle, then reconcile to reported output | field map, weighbridge record, and crop-cycle log |
| `cp_crop_inputs` | `p_crop_production` | seed, water, nutrient, energy, fuel, and calculated emissions | input and utility records | product identity; amount; nutrient basis; water meter; electricity; fuel; application date; source | invoices, application logs, meters, supplier declarations, and method calculation | kg, m3, kWh, MJ, kg nutrient | each application or meter period | full declared crop cycle | each contributing field or production unit | allocate shared records by documented crop-cycle driver | invoice, meter, application record, and factor-selection note |
| `cp_harvest_operations` | `p_harvest_capture` | harvested output, harvest fuel, and losses | harvest campaign records | operation date; machinery or contractor; fuel or service; harvested mass; damage; field destination | harvest log, fuel issue, contractor record, and weighbridge | kg, L, MJ, date | each harvest event | full harvest campaign | each harvest block or campaign | reconcile standing crop, harvested output, and loss destinations | harvest log, scale record, and contractor invoice |
| `cp_conditioning_records` | `p_primary_conditioning` | conditioning input, water, electricity, rejects, wastewater, and output | batch and utility records | batch id; input mass; water; electricity; reject mass; wastewater; output mass; treatment route | batch sheet, meters, scale, and wastewater record | kg, m3, kWh | each batch | all included conditioning batches | each conditioning line or site | reconcile input to output, rejects, and wastewater by batch | batch sheet, scale calibration, meter record, and treatment receipt |
| `cp_grading_reconciliation` | `p_grading_sorting` | grade outputs, rejects, and grading input | grading and sales records | batch id; input; accepted grade; secondary grade; reject; destination; sale status | grading log, scale, sales record, and destination record | kg, date | each grading batch | all included grading batches | each grading line or site | reconcile input to all product outputs and rejects | grade log, scale record, and destination evidence |
| `cp_packaging_records` | `p_packaging_presentation` | product input, packaging, electricity, rejects, and reference output | packaging and dispatch records | batch id; product input; material and mass; reuse status; electricity; reject; net output; hand-off | packaging bill of materials, scale, meter, and dispatch record | kg, kWh, date | each packaged batch | all included packaging batches | each packaging line or site | report net product separately from packaging mass and reconcile rejects | packaging specification, scale calibration, utility record, and dispatch record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `rule_normalize_to_reference_flow` | all inventory rows | `normalized_amount = recorded_or_calculated_amount / net_marketable_reference_mass` | row amount; net marketable reference mass | amount per 1 kg reference fresh vegetable | `iso-14044-2006` |
| `rule_calculate_crop_yield_reconciliation` | crop production and harvest | `standing_crop = harvested_output + field_loss + residue + other_declared_destinations` | field output; harvested mass; losses; residues; destinations | reconciled crop-cycle output set | `fao-crop-production-guidance-2016`; `fao-food-loss-waste-2019` |
| `rule_calculate_nutrient_basis` | fertilizer or soil amendment input | `nutrient_basis = product_mass * declared_nutrient_fraction` for each declared nutrient basis | product mass; supplier or laboratory nutrient fraction | kg N, P, K, or organic nutrient | `fao-fertilizer-code-of-conduct-2019` |
| `rule_calculate_crop_emissions` | crop elementary outputs | Apply the selected IPCC-compatible factor or measured value to the declared nutrient input, soil, climate, and management records; document factor hierarchy and units. | nutrient input; management records; selected factor; measured emissions where available | normalized substance-specific elementary flows | `ipcc-2019-refinement-agriculture` |
| `rule_reconcile_grade_outputs` | grading and sorting | `grading_input = marketable_grade + secondary_grade + reject + unaccounted_loss`; unaccounted loss must be investigated or disclosed | grading input; all declared outputs; reject; loss | complete grade-output reconciliation | `fao-food-loss-waste-2019` |
| `rule_reconcile_packaged_output` | packaging and presentation | `product_input = net_reference_output + packaging-process_product_loss + other_declared_product_destinations` and packaging mass is reported separately | product input; net output; losses; package material | net reference flow and package inventory | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `req_identity_qualifiers` | all datasets | 声明物种或品种、食用部分、生产路线、地理位置、作物周期、新鲜状态、等级或可销售性和首次市场交接点；记录剩余类别判定。 | 数据集元数据、作物记录和分类复核 |
| `req_measurement_traceability` | all quantitative rows | 优先使用经校准的秤和仪表、账单、施用日志和供应商记录；保留换算因子和分配驱动因子。 | 计量记录、校准证据和供应商文件 |
| `req_temporal_coverage` | crop production and harvest | 覆盖一个完整作物周期和采收期；说明缺失事件、异常天气或非季节作业。 | 作物日历、田间日志和报告期间声明 |
| `req_mass_balance_completeness` | crop, conditioning, grading, and packaging | 核对投入、产品输出、副产品、残余物、拒收物、废水和声明损失；调查未解释差异。 | 批次、分级、地磅和发运核对记录 |
| `req_emission_method_disclosure` | calculated elementary flows | 说明因子或测量方法、养分基准、单位、地理位置、气候或土壤假设以及不确定性或替换计划。 | 计算表、因子来源和方法说明 |
| `req_route_and_scope_disclosure` | conditional processes | 说明是否纳入调理、分级、包装、储存和配送，并确定首次市场交接点。 | 过程图、场址说明和交接记录 |
| `req_data_update_trigger` | published datasets | 当品种、生产技术、养分制度、灌溉制度、调理线、包装形式、地理位置或适用排放方法发生变化时重新评估数据集。 | 变更日志和定期复核记录 |

## 9. 校验规则

以下检查对所有使用本 PCR 的前景数据包具有规范性：

- `rule_validate_residual_category`: 当更窄具名 CPC 蔬菜类别适用，或缺少物种或品种及食用部分时，拒绝数据包。
- `rule_validate_fresh_whole_state`: 拒绝加工、冷冻、盐渍、腌制、发酵、干燥、粉末化、罐藏、榨汁、保藏、种子、种植材料、饲料或废弃物产品。
- `rule_validate_reference_qualifiers`: 要求全部 `Required qualifiers`，且参考数量必须为声明交接点的 1 kg 新鲜净产品。
- `rule_validate_process_completeness`: 要求 `p_crop_production` 和 `p_harvest_capture`；条件成立时要求相应条件过程，并且不能把省略的条件过程当作未解释缺口。
- `rule_validate_flow_binding`: 仅当选定组符合流的方向、类型、材料角色和过程状态时接受 parameterized Flow Set 绑定；时保留 unmapped，不强行填写 fixed UUID。
- `rule_validate_nutrient_disclosure`: 存在 `crop_nutrient_or_amendment` 时，要求实际产品身份、施用质量、声明养分基准、施用时间以及上游数据集或证据引用。
- `rule_validate_mass_reconciliation`: 要求作物、调理、分级和包装平衡在声明的计量容差内闭合；调查未核对质量。
- `rule_validate_allocation`: 要求每个有意销售的等级或副产品只列一次，并披露所选分配驱动因子和输出集合。
- `rule_validate_emission_calculation`: 每条计算基本流都必须有物质特定单位、因子或测量方法、养分基准和来源证据。
- `rule_validate_protocol_coverage`: 每条采集或计算行都必须引用已声明的采集协议，并且每个协议都要确定时间范围和场址范围。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 剩余类别新鲜蔬菜产品类别的前景农业生产数据集；可作为 `secondary_dataset` 发布，并链接背景供应数据集 |
| downstream_use | 当满足剩余类别门槛时，为 CPC 01290 的整株新鲜蔬菜构建产品、过程和生命周期模型投影 |
| allowed_use | 在披露物种或品种、路线、地理位置、作物周期、交接点、库存基准和数据质量时，用于比较型或归因型 LCA |
| excluded_use | 加工或保藏蔬菜；种子或种植材料；饲料或废弃物产品；无明确证据的替代声明；跨未限定物种、路线、地理位置或市场状态的外推 |
| required_metadata | CPC 3.0:01290；规范 PCR id；物种或品种；食用部分；路线；地理位置；作物周期；交接点；纳入过程；参考数量；参考流身份；养分和灌溉基准；等级和损失去向；包装和储存范围 |
| required_quality_disclosure | 数据来源和期间；场址或地块覆盖；计量和分配方法；质量平衡状态；排放因子或测量方法；排除项；不确定性或暂定范围 |
| update_trigger | 新的更窄分类覆盖；品种或生产路线变化；养分、灌溉、能源、调理、分级或包装实践的重大变化；排放方法修订；重大的数据质量发现 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14040-2006` | standard | ISO 14040:2006, Environmental management — Life cycle assessment — Principles and framework, https://www.iso.org/standard/37456.html | PCR 边界框架和生命周期清单原则 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | 分配、清单归一化、数据质量和校验规则 |
| `fao-crop-production-guidance-2016` | official_guidance | FAO, Save and Grow in practice: maize, rice, wheat, 2016, https://www.fao.org/3/i4009e/i4009e.pdf | 作物周期记录、田间投入、产量和生产单元证据 |
| `fao-fertilizer-code-of-conduct-2019` | official_guidance | FAO, International Code of Conduct for the Sustainable Use and Management of Fertilizers, 2019, https://openknowledge.fao.org/3/ca5253en/ca5253en.pdf | 养分基准声明和肥料记录要求 |
| `ipcc-2019-refinement-agriculture` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4: Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 养分相关农业排放计算方法和因子披露 |
| `fao-food-loss-waste-2019` | official_guidance | FAO, The State of Food and Agriculture 2019: Moving forward on food loss and waste reduction, https://www.fao.org/3/ca6030en/ca6030en.pdf | 损失、拒收物、残余物、去向和核对规则 |
| `fao-fresh-produce-hygiene-2003` | official_guidance | FAO and WHO, Assuring Food Safety and Quality: Guidelines for Strengthening National Food Control Systems, 2003, https://www.fao.org/3/y8705e/y8705e.pdf | 新鲜产品调理、用水、交接和卫生相关记录要求 |
