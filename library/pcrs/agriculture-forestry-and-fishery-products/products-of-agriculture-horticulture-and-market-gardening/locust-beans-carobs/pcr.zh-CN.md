---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.locust-beans-carobs
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 角豆（长角豆）

## 1. 适用范围与适用性

本 PCR 用于构建由受管理的角豆园或受管理的栽培型角豆林生产、并在生产地点或首次调理交接点交付的成熟整荚角豆（*Ceratonia siliqua* L.）前景数据包。产品是保留果肉和种子的完整豆荚。路线包括在申报生产期内可归属的建园或树体更新、常年园地管理、采收与收集，以及在申报交接点之前进行的可选初级调理，例如自然或供气干燥、清洁、分拣和分级。

本 PCR 适用于雨养和灌溉的受管理生产、人工或机械采收，以及鲜/原始状态或自然干燥的整荚角豆；产品市场状态和水分基准必须申报。受管理的栽培型角豆林可以采用低投入方式，但必须具有明确的面积、报告期和活动记录。非受管理的野生采集不在本 PCR 范围内，因为它属于资源移除路线，而不是本 PCR 所覆盖的受管理生物生产路线。

切碎角豆荚、去种子果肉、作为分离产品的角豆种子、角豆胶、胚芽粕、面粉、粉末、糖浆、糖蜜、烘烤豆荚、发酵产品、零售包装、申报交接点之后的下游储存和运输，以及其他加工角豆产品均排除在外。默认边界不包括采收容器和包装；除非研究明确申报包含它们的交接点。此类扩展必须增加相应包装记录并完成身份解析。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.locust-beans-carobs` |
| classification_refs | CPC 3.0 `01356`，Locust beans (carobs) |
| covered_products | *Ceratonia siliqua* L. 的成熟整荚角豆，保留果肉和种子，在原始状态或经过申报的初级干燥/清洁/分拣后交付 |
| excluded_products | 非受管理的野生采集；分离种子、去种子果肉、切碎物、角豆胶、胚芽粕、面粉、粉末、糖浆、糖蜜、烘烤、发酵、零售及下游物流产品 |
| representative_product | 可接受的成熟整荚角豆，通常在申报的初级交接状态下自然干燥或以其他方式稳定化，并保留种子 |
| production_route | 受管理的多年生角豆园或栽培型角豆林的建园与管理、采收与收集，以及可选的初级干燥、清洁、分拣和分级 |
| market_state | 生产农场或首次调理交接点的可接受整荚角豆；物种、品种或类型、作物年度、水分约定、质量或目的地等级以及保留种子状态均需申报 |

“locust bean”在本 PCR 中指完整的角豆荚，而不是分离种子或角豆胶的同义词。该区分依据 FAO Feedipedia 角豆条目和 FAO 非木质林产品章节中的产品术语与工艺描述（`fao-feedipedia-carob`；`fao-carob-nwfp-chapter7`）。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 申报初级交接状态下，保留果肉和种子的可接受成熟整荚角豆 |
| How much | 1 kg 净可接受整荚角豆 |
| How well | 物种；品种或品种组；受管理角豆园或栽培型角豆林路线；鲜/原始或干燥状态；水分基准；质量或目的地等级；保留种子状态；可接受、降级、拒收和损失质量；地理位置；作物年度；以及申报交接点 |
| How long or cycle | 一个申报的作物年度或完整采收活动；多年生建园、更新和未结果期与有文件依据的生产期基准关联 |
| reference_flow_link | 当包含初级调理时，连接 `carob_primary_conditioning` 的终端输出；否则连接 `carob_harvest_and_collection` 的终端输出 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Locust beans (carobs), production mix, at farm gate, fresh, unprocessed (`a5e8d701-0314-4eba-a5ba-37ba590d469b`) |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200c9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | 物种；品种或品种组；受管理角豆园或栽培型角豆林状态；生产地理位置；园地年龄和结果面积；作物年度或采收活动；灌溉状态和水源；养分与土壤改良剂基准；采收方法；鲜/原始或干燥状态；水分约定；质量或目的地等级；保留种子状态；可接受和拒收质量；是否包含初级调理；申报交接点 |
| Reference identity status | 已根据 CPC 01356 精确产品候选及保存的质量流属性/单位组索引复核固定 UUID |

构建前景数据包时，Required qualifiers 中的项目必须写入数据集元数据、过程说明、参考流注释、产品描述或等效数据包字段。净产品质量不包括容器皮重。最终 TIDAS 交换应保留经复核的产品流、质量流属性和单位组身份，并验证其与申报交接点及批次证据兼容。

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和可接受输出 | Mass | kg | 参考流应表示申报交接点的净可接受整荚角豆质量。保留原始接收质量和水分测量；不得无说明地替换为仅种子、仅果肉、干物质或加工产品质量。 |
| `moisture_basis` | 采收、干燥、储存和可接受豆荚 | Mass and moisture fraction | kg 以及 percent 或 kg water/kg product | 记录批次水分、测定方法和采样点。进行干质量换算时，仅使用相应批次测得的水分比例，并说明输入和输出质量是原始接收基准还是干基。 |
| `orchard_life_annualization` | 建园、更新和未成熟树体投入 | 面积、时间或质量活动属性 | ha、orchard-year 或 kg product | 每项建园或更新活动均应关联园地、生产期和可接受豆荚输出。只有在生产期假设有文件依据时才进行年度化，并保留原始活动记录。 |
| `nutrient_product_and_basis` | 肥料和土壤改良剂投入 | 产品质量和养分质量 | kg product 以及 kg N、P2O5、K2O 或申报的有机基准 | 只记录实际使用的产品、产品质量以及申报的养分或改良剂基准。不得从养分总量反推肥料类型。 |
| `water_energy_unit` | 灌溉、直接取水、园地作业、采收和调理 | 体积、质量或能量 | m3、kg、L、MJ 或 kWh | 保留实测活动单位、载体或来源、设备或作业、期间及任何换算方程。当供应水和直接取水描述同一体积时，不得相加。 |
| `whole_pod_identity` | 产品输出和同类别过程连接 | 申报的产品状态 | 申报的描述符 | 本 PCR 保持果肉和种子在同一完整豆荚内。分离成种子、果肉、切碎物、角豆胶或其他产品属于下游转化，不能表示为整荚参考输出。 |

## 5. 系统边界

前景边界从申报的受管理角豆园或栽培型角豆林开始，经过园地管理、采收、收集，以及达到申报整荚角豆交接点所需的初级调理。初级调理可以包括在交接点之前发生的自然或供气干燥、清洁、分拣和分级。边界终止于生产地点或首次调理交接点可接受整荚角豆的交付。

当苗木、肥料和土壤改良剂、作物保护制剂、灌溉供应、燃料、电力、机械服务和废物处理服务跨越前景边界时，采用兼容的背景数据集表示其上游生产。直接资源取用以及在本 PCR 边界内实测或按方法计算的田间或调理排放作为前景交换。

非受管理野生采集、申报豆荚输出以外的园地产品、切碎、研磨、种子分离、角豆胶提取、烘烤、糖浆或糖蜜生产、零售展示、申报交接点之后的运输、下游储存、消费者使用和包装终端处理均排除在外。拒收或降级物料应保留在质量平衡中，直到其申报交接或废物去向得到证据支持。

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 申报作物年度开始时已经存在或新建的受管理角豆园或栽培型角豆林；必须披露种植或更新记录以及既有土地状况 |
| starting_condition_role | 受管理多年生角豆生产和园地资产核算的起点 |
| product_classification_scope | 当前 CPC 3.0 产品类别 `01356`，Locust beans (carobs)；语义范围限定为初级交接点保留种子的成熟整荚角豆 |
| recursive_input_rule | 生产、采收和调理节点之间转移的整荚角豆是内部过程连接，不是额外市场输出。跨越外部边界的同类别豆荚投入应记录为上游产品数据集，不得递归展开为另一个整荚角豆生产系统。 |
| upstream_dataset_requirement | 对于未作为前景活动实测的苗木、养分和土壤改良剂产品、作物保护制剂、供应灌溉水、燃料、电力、机械服务和废物处理，使用兼容的上游数据集。 |
| disclosure | 物种和品种或类型；园地或角豆林状态；地块和面积；树龄和结果状态；生产期假设；作物年度；既有土地状况；灌溉来源和体积；养分与土壤改良剂记录；作物保护；能量；采收方法；原始和可接受豆荚质量；水分；等级和目的地；拒收和损失去向；调理活动；以及申报交接点 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_managed_orchard_to_pod_gate` | 所有符合要求的数据集 | 纳入受管理园地或栽培型角豆林生产、采收、收集以及申报初级调理，直到在生产地点或首次调理交接点转移可接受整荚角豆。 | `fao-feedipedia-carob`；`fao-carob-nwfp-chapter7`；`iso-14044-2006` |
| `boundary_perennial_asset_period` | 建园、更新和未结果期 | 将建园、更新和幼树投入关联到申报生产期和可接受豆荚输出；披露年度化期限、作物年度关联以及任何未结果期。 | `fao-feedipedia-carob`；`carob-macronutrients-water-2005`；`iso-14044-2006` |
| `boundary_primary_conditioning_only` | 干燥、清洁、分拣和分级 | 仅纳入达到申报整荚豆荚交接状态所需的首次调理。在切碎、研磨、种子分离、角豆胶提取、烘烤、糖浆、面粉或其他下游转化之前停止。 | `fao-feedipedia-carob`；`carob-drying-characteristics-2016` |
| `boundary_unmanaged_wild_exclusion` | 野生或逸生树采收 | 将非受管理的野生采集排除在本受管理生产 PCR 外；如果申报路线没有受管理生产边界，应使用另行审查的资源移除方法。 | `fao-carob-nwfp-chapter7` |
| `boundary_direct_exchange_completeness` | 资源、养分、残余物和排放 | 当土地占用、灌溉或直接取水、能量、养分相关环境交换、残余物、拒收物和损失发生在申报边界内时，纳入其测量值或按方法计算值。 | `carob-macronutrients-water-2005`；`ipcc-2019-refinement-vol-4`；`iso-14044-2006` |
| `boundary_recursive_product_input` | 同类别产品投入 | 不递归展开整荚豆荚投入。记录外部投入身份和上游数据集要求，或说明没有同类别产品投入跨越边界。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `carob_orchard_production` | 受管理角豆园或栽培型角豆林生产 | required | 纳入申报的受管理结果面积、作物年度管理，以及可归属的建园或更新活动 | 前景多年生生物生产 | 园地面积、生产期、作物年度和可采收豆荚质量 |
| `carob_harvest_and_collection` | 角豆采收与收集 | required | 纳入从受管理生产环境中移除成熟豆荚，并将其收集为原始豆荚批次 | 前景采收捕获和生产交接 | 初级调理前的采收批次质量 |
| `carob_primary_conditioning` | 角豆初级干燥、清洁、分拣和分级 | conditional | 当申报交接点之前发生任何干燥、清洁、分拣或分级时纳入；仅在明确申报未经调理的交接时省略 | 前景原始物料到准备状态的调理 | 申报交接点的可接受、降级、拒收和水分损失质量 |

### 过程：受管理角豆园或栽培型角豆林生产（`carob_orchard_production`）

#### 输入

##### 产品流

###### 角豆种植或更新材料（`carob_planting_and_replacement_stock`）

仅当申报的受管理角豆园或栽培型角豆林发生种植或更新时，记录苗木、嫁接树或其他种植材料。既有树体通过申报起始条件和生产期核算表示，不作为重复的年度种植投入。

- 选定流：角豆苗木或更新树体材料（UUID 未解析；有意留空）
- 流属性/单位：件数或质量 / item 或 kg
- 数量规则：按地块和活动测量种植或更新数量，并关联申报生产期
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物年度、每 1,000 kg 可接受整荚角豆
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carob_orchard_lifecycle_records`
- 来源：`fao-feedipedia-carob`

###### 农业养分与肥料投入（`carob_orchard_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物年度、每 1,000 kg 可接受整荚角豆
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_orchard_lifecycle_records`
- 来源：`carob-macronutrients-water-2005`

###### 供应的灌溉水（`carob_irrigation_water_input`）

按水源和园地地块记录输送的灌溉水。只有在路线和田间记录支持该状态时，雨养生产才记录有依据的零值。

- 选定流：灌溉水供应（UUID 未解析；从实际水源和用途解析）
- 流属性/单位：体积 / m3
- 绑定：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`irrigation-water`
- 数量规则：按水源、地块和作物年度计量、开票或核算供应的灌溉体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物年度、每 1,000 kg 可接受整荚角豆
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_irrigation_records`
- 来源：`carob-macronutrients-water-2005`

###### 实际施用的作物保护制剂（`carob_orchard_crop_protection_input`）

记录每种实际制剂、可获得时的有效成分或制剂身份、施用活动、施用质量、地块和目标。不得用通用农药默认值替代缺失的制剂身份。

- 选定流：角豆生产用实际作物保护制剂（UUID 未解析；有意留空）
- 流属性/单位：产品质量 / kg formulation
- 数量规则：按产品、活动、地块和作物年度汇总测量的制剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个作物年度、每 1,000 kg 可接受整荚角豆
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_orchard_lifecycle_records`

###### 园地燃料和电力（`carob_orchard_energy_inputs`）

记录灌溉抽水、修剪、割草、养分施用、作物保护、通行和其他园地活动的能量。应保持电力、燃料和承包活动记录可区分。

- 选定流：受管理角豆园作业能量供应（UUID 未解析；根据实际载体解析）
- 流属性/单位：能量、质量或体积 / kWh、MJ、L 或记录单位
- 绑定：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- 数量规则：按作业、地块和作物年度使用计量表、发票、承包商记录或有文件依据的设备计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物年度、每 1,000 kg 可接受整荚角豆
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_orchard_lifecycle_records`

##### 废物流

###### 园地修剪物和移除的生物残余物（`carob_orchard_residues`）

仅当修剪木、移除的果实、叶片或其他生物残余物离开田间或作为申报废物流管理时记录。留在园地内并按田间方式管理的物料应披露为田间残余物状态，不得计为场外废物输出。

- 选定流：角豆园生物残余物或修剪废物（UUID 未解析；有意留空）
- 流属性/单位：质量 / kg 原始质量或干物质
- 数量规则：按地块、活动和申报去向测量或核算残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物年度、每 1,000 kg 可接受整荚角豆
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_orchard_lifecycle_records`

##### 基本流

###### 园地土地占用（`carob_orchard_land_occupation`）

记录受管理园地或栽培型角豆林的面积和占用期。不假定发生土地转化；任何土地转化或既有土地利用变化均须单独提供证据并披露。

- 选定流：受管理角豆园或栽培型角豆林的土地占用（UUID 未解析；根据场址和占用类型解析）
- 流属性/单位：面积-时间 / ha*a 或 m2*a
- 数量规则：申报占用面积乘以作物年度或年度化占用期
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物年度、每 1,000 kg 可接受整荚角豆
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carob_orchard_lifecycle_records`
- 来源：`iso-14044-2006`

###### 园地直接取水（`carob_orchard_water_withdrawal`）

仅当园地直接从自然资源取水且同一体积未在上游灌溉供应数据集中表示时，记录直接取水。

- 选定流：角豆园灌溉的水资源取用（UUID 未解析；解析水源和环境分区）
- 流属性/单位：体积 / m3
- 数量规则：按水源、地块和作物年度测量或核算取水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物年度、每 1,000 kg 可接受整荚角豆
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_irrigation_records`
- 来源：`carob-macronutrients-water-2005`

##### 输出

##### 产品流

###### 生产交接点的成熟可采收豆荚（`carob_harvestable_pods_on_tree`）

记录可从受管理生产环境中独立移除的成熟整荚豆荚作物。这是连接采收过程的中间产品交接，不是第二个市场输出。

- 选定流：保留种子的成熟整荚角豆（UUID 未解析；有意留空）
- 流属性/单位：质量 / kg
- 数量规则：按地块和作物年度测量或核算可采收豆荚质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个结果公顷、每 1,000 kg 可接受整荚角豆
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carob_harvest_lot_records`
- 来源：`fao-feedipedia-carob`
- 数量范围：可采收豆荚典型产量筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：1.7
  - 上限：7.0
  - 单位：t/ha crop year
  - 基准：结果角豆园面积和一个作物年度
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-feedipedia-carob`

##### 废物流

#### 输出

##### 基本流

###### 排放到环境空气的氧化亚氮（`carob_soil_nitrous_oxide_output`）

依据选定的、适用于地理位置的方法层级，利用申报的养分、改良剂、残余物、土壤、气候和管理记录计算直接及适用的间接氧化亚氮排放。

- 选定流：排放到环境空气的氧化亚氮（UUID 未解析；解析污染物种类和介质）
- 流属性/单位：质量 / kg N2O
- 数量规则：根据申报的氮和残余物活动数据按方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物年度、每 1,000 kg 可接受整荚角豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carob_orchard_lifecycle_records`
- 来源：`ipcc-2019-refinement-vol-4`

###### 排放到环境空气的氨（`carob_soil_ammonia_output`）

当选定方法要求时，根据申报的养分产品、施用方法、改良剂、土壤和气候背景计算氨排放。

- 选定流：排放到环境空气的氨（UUID 未解析；解析污染物种类和介质）
- 流属性/单位：质量 / kg NH3
- 数量规则：根据申报的养分和改良剂施用记录按方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物年度、每 1,000 kg 可接受整荚角豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carob_orchard_lifecycle_records`
- 来源：`ipcc-2019-refinement-vol-4`

###### 排放到申报受纳介质的硝酸盐（`carob_nitrate_release_output`）

仅当有测量结果或选定的区域方法支持时，记录或计算硝酸盐释放。前景数据包必须在解析基本流身份前申报受纳介质是土壤还是水体。

- 选定流：排放到申报受纳介质的硝酸盐污染物（UUID 未解析；必须申报受纳介质）
- 流属性/单位：质量 / kg nitrate 或方法定义的氮基准
- 数量规则：根据申报作物年度养分和水量平衡记录测量或按方法计算硝酸盐释放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物年度、每 1,000 kg 可接受整荚角豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carob_orchard_lifecycle_records`
- 来源：`ipcc-2019-refinement-vol-4`

### 过程：角豆采收与收集（`carob_harvest_and_collection`）

#### 输入

##### 产品流

###### 来自受管理生产的成熟可采收豆荚（`carob_harvestable_pods_input`）

接收来自受管理生产的成熟整荚豆荚交接。该过程连接不得计为额外市场输出。

- 选定流：保留种子的成熟整荚角豆（UUID 未解析；有意留空）
- 流属性/单位：质量 / kg
- 数量规则：按地块、采收批次和作物年度测量或核算输入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个采收活动、每 1,000 kg 可接受整荚角豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_harvest_lot_records`

###### 采收与收集能量（`carob_harvest_energy_input`）

记录振摇、敲击、收集网、输送设备或其他采收和收集活动的燃料或电力。完全人工采收应以劳务和路线证据记录有依据的零值。

- 选定流：角豆采收与收集能量供应（UUID 未解析；根据实际载体解析）
- 流属性/单位：能量、质量或体积 / kWh、MJ、L 或记录单位
- 绑定：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- 数量规则：将燃料发票、设备计量表、承包商声明或有文件依据的设备计算分配到申报采收活动
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个采收活动、每 1,000 kg 可接受整荚角豆
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carob_harvest_lot_records`

##### 废物流

###### 未收集或田间损失豆荚（`carob_field_loss_and_uncollected_pods`）

当豆荚掉落、未收集或在移除过程中损失且没有作为有意产品转移时，记录该部分。说明其留在园地、被收集至其他目的地或以其他方式管理的状态。

- 选定流：未收集或田间损失的角豆荚（UUID 未解析；有意留空）
- 流属性/单位：质量 / kg 原始接收质量
- 数量规则：由可采收豆荚、收集的原始豆荚和其他申报去向之间的差额测量或核算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个采收活动、每 1,000 kg 可接受整荚角豆
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carob_harvest_lot_records`

###### 采收损伤或不可销售豆荚（`carob_harvest_damaged_or_rejected_pods`）

当受损、未成熟、污染或其他不可销售豆荚没有作为有意的整荚产品离开边界时，将其作为废物记录。申报去向，不得将其计入可接受产品。

- 选定流：采收损伤或不可销售角豆荚（UUID 未解析；有意留空）
- 流属性/单位：质量 / kg 原始接收质量
- 数量规则：按采收批次、原因和去向测量拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个采收活动、每 1,000 kg 可接受整荚角豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_harvest_lot_records`

##### 基本流

#### 输出

##### 产品流

###### 收集的原始整荚豆荚（`carob_collected_raw_pods`）

记录从受管理树体收集、但尚未进入条件性初级调理的原始整荚豆荚。种子仍嵌在豆荚内。

- 选定流：保留种子的收集原始整荚角豆（UUID 未解析；有意留空）
- 流属性/单位：质量 / kg
- 数量规则：按批次称量或核算收集的原始豆荚质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个采收活动、每 1,000 kg 可接受整荚角豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_harvest_lot_records`

##### 废物流

##### 基本流

### 过程：角豆初级干燥、清洁、分拣和分级（`carob_primary_conditioning`）

#### 输入

##### 产品流

###### 进入初级调理的收集原始豆荚（`carob_collected_raw_pods_input`）

接收收集的原始豆荚批次。申报交接点之前发生的自然空气干燥包含在本过程中；供气干燥及其能量单独记录。

- 选定流：保留种子的收集原始整荚角豆（UUID 未解析；有意留空）
- 流属性/单位：质量 / kg
- 数量规则：记录调理入口称量的批次质量和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个调理活动、每 1,000 kg 可接受整荚角豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_conditioning_records`

###### 调理能量（`carob_conditioning_energy_input`）

记录申报边界内供气干燥、风机、输送、清洁、分拣、分级和短距离处理使用的电力或燃料。没有供能的自然干燥应记录有文件依据的零能量状态。

- 选定流：角豆初级调理能量供应（UUID 未解析；根据实际载体解析）
- 流属性/单位：能量、质量或体积 / kWh、MJ、L 或记录单位
- 绑定：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- 数量规则：按调理活动使用计量表、发票、设备记录或有文件依据的能量计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个调理活动、每 1,000 kg 可接受整荚角豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_conditioning_records`

###### 调理过程水（`carob_conditioning_process_water_input`）

仅当申报交接点之前发生清洗或其他用水清洁步骤时记录用水。干式清洁应以所选清洁方法记录有依据的零值。

- 选定流：角豆清洁过程水（UUID 未解析；根据实际用途解析）
- 流属性/单位：体积或质量 / m3 或 kg
- 绑定：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`process-water`
- 数量规则：按调理活动使用计量表、供水记录或核对后的用水日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个调理活动、每 1,000 kg 可接受整荚角豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_conditioning_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 降级或其他目的地的整荚豆荚（`carob_downgraded_whole_pods_output`）

仅当降级整荚豆荚作为有意产品转移到申报目的地时，记录为有意产品输出。如果该物料被丢弃或没有作为产品转移，应使用拒收卡。

- 选定流：保留种子的降级或其他目的地整荚角豆（UUID 未解析；有意留空）
- 流属性/单位：质量 / kg
- 数量规则：按等级、批次和申报目的地测量输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个调理活动、每 1,000 kg 可接受整荚角豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_conditioning_records`

###### 申报交接点的可接受整荚角豆（`carob_accepted_whole_pods_output`）

记录终端可接受整荚输出。默认市场状态是自然干燥或以其他方式稳定化的整荚豆荚，但在没有调理的路线中也可以申报原始状态交接。本卡不进行种子分离。

- 选定流：保留种子的可接受成熟整荚角豆（UUID 未解析；有意留空）
- 流属性/单位：质量 / kg
- 数量规则：申报交接点实测的净可接受质量，不含容器皮重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：终端输出缩放至 1,000 kg 可接受整荚角豆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_carob_conditioning_records`
- 来源：`carob-drying-characteristics-2016`；`carob-nutritional-characterization-2018`
- 数量范围：初级交接点水分筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：8
  - 上限：15
  - 单位：percent mass basis
  - 基准：申报初级交接点的可接受整荚豆荚批次；保留测量值和采购方规格
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`carob-drying-characteristics-2016`；`carob-nutritional-characterization-2018`

##### 废物流

###### 调理拒收物和异物（`carob_conditioning_rejects`）

记录清洁、分拣或分级中移除的果梗、石块、土壤、异物、受损豆荚和不合规格豆荚。说明每个物流是返工、作为有意产品销售、返回田间、转作饲料或其他目的地、作为废物处理，还是以其他方式离开边界。

- 选定流：角豆调理拒收物和异物（UUID 未解析；有意留空）
- 流属性/单位：质量 / kg 原始接收质量
- 数量规则：按拒收类别、批次和去向测量输出质量；与输入以及可接受或降级输出进行核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个调理活动、每 1,000 kg 可接受整荚角豆
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carob_conditioning_records`

##### 基本流

###### 干燥释放的水蒸气（`carob_water_vapour_from_drying`）

当干燥发生在申报边界内时，根据输入和输出水分质量平衡计算释放的水蒸气。路线和身份审查完成前，受纳介质和最终基本流身份保持未解析。

- 选定流：排放到申报受纳介质的水蒸气（UUID 未解析；必须申报受纳介质）
- 流属性/单位：质量 / kg water
- 数量规则：水蒸气 = 输入批次水质量 - 可接受及降级输出水质量 - 申报拒收物中保留的水质量 + 测得的过程加水量；负值必须调查，不得截断
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个调理活动、每 1,000 kg 可接受整荚角豆
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_carob_conditioning_records`
- 来源：`carob-drying-characteristics-2016`

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_intended_pod_output` | 只有一个有意转移的整荚豆荚产品输出的过程 | 将过程负荷分配给单一有意整荚豆荚产品输出。仅当田间损失、拒收物和残余物去向不是有意转移产品时，才将其作为废物处理。 | `iso-14044-2006` |
| `allocation_quality_destination_outputs` | 调理过程同时产生可接受和降级或其他目的地的整荚豆荚输出 | 首先在等级专属作业有独立测量时进行过程细分。若仍有共同负荷，则由于各输出保留相同的整荚豆荚物理身份，在有意转移的整荚产品之间采用质量分配；只有产品特定研究证明质量不能代表因果关系时，才使用有文件依据的经济分配。申报输出质量、等级、目的地、参考期和分配因子。 | `iso-14044-2006` |
| `allocation_rejects_not_products` | 田间损失、采收拒收物和调理拒收物 | 不得仅因拒收或残余物流可能被下游利用，就向其分配负荷。只有当其以申报身份和目的地被有意转移时，才将其重分类为有意联产品，并应用 `allocation_quality_destination_outputs` 或另行论证的方法。 | `iso-14044-2006` |
| `allocation_perennial_establishment_and_replacement` | 种植、建园、更新和未成熟树体活动 | 在有文件依据的生产期内年度化可归属活动，并将年度化量分配到作物年度输出基准。保留原始活动质量、日期、地块和假设以供审计。 | `fao-feedipedia-carob`；`carob-macronutrients-water-2005`；`iso-14044-2006` |
| `allocation_period_and_phase_linkage` | 多个作物年度、结果阶段和更新事件 | 将每项投入、输出、建园事件、更新事件和分配因子关联到申报的作物年度或生命周期阶段。没有明确核对，不得将同一活动归入两个报告期。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_carob_orchard_lifecycle_records` | `carob_orchard_production` | 种植材料、树体更新、园地面积、养分、土壤改良剂、作物保护、燃料、电力、残余物和园地活动 | 园地登记、地块图、种植或更新发票、施用日志、供应商记录、设备日志和残余物去向记录 | block_id；species；cultivar_or_type；tree_age；bearing_area_ha；establishment_year；replacement_event；planting_material_quantity；product_name；product_mass；nutrient_basis；application_date；target；fuel；electricity；residue_mass；residue_destination；crop_year | 按地块采集活动记录，并与供应商、操作员和设备记录核对 | 活动特定混合单位 | 每次种植、更新、施用、能量和残余物活动；每个作物年度核对 | 一个申报作物年度以及用于年度化的生产期记录 | 每个受管理园地或栽培型角豆林地块 | 按地块和作物年度汇总；归一化前保留产品和养分字段；将年度化活动关联到申报输出基准 | 发票、田间日志、园地登记、操作员确认和完整性核对 |
| `cp_carob_irrigation_records` | `carob_orchard_production` | 灌溉水、直接取水和抽水能量 | 计量记录、泵记录、电费单、水费单、许可证、水源记录和有文件依据的水量平衡 | block_id；source_type；rainfed_flag；meter_start；meter_end；irrigation_date；delivered_volume_m3；withdrawal_volume_m3；pump_kwh；source_quality；crop_year | 读取计量表，或将发票和水源记录与灌溉活动及地块面积核对 | m3 和 kWh | 每次灌溉活动或账单期；每个作物年度核对 | 一个申报作物年度和灌溉季 | 每个水源和园地地块 | 按水源、地块和作物年度汇总；防止供应水与直接取水重复计算 | 计量表或发票证据、许可证或水源核查以及水量平衡核对 |
| `cp_carob_harvest_lot_records` | `carob_harvest_and_collection` | 可采收豆荚、收集原始豆荚、采收能量、田间损失和采收拒收物 | 采收日志、称重单、地块记录、承包商声明、批次记录和去向记录 | block_id；harvest_date；lot_id；harvest_method；harvestable_mass_kg；collected_mass_kg；field_loss_mass_kg；damaged_mass_kg；destination；fuel_quantity；electricity；crop_year | 对每个采收批次称量或核对，并记录移除和收集方法 | kg 豆荚及活动特定能量单位 | 每个采收批次；每个活动核对 | 一个采收活动和作物年度 | 每个受管理地块和接收批次 | 在归一化前按地块和批次汇总可采收、收集、损失和拒收质量 | 校准称重或经验证的称重单、批次可追溯性、承包商证据、去向证据和质量平衡核对 |
| `cp_carob_conditioning_records` | `carob_primary_conditioning` | 原始豆荚输入、干燥、清洁、分拣、分级、过程水、可接受豆荚、降级豆荚、拒收物和水分损失 | 接收单、调理批次记录、水分测试、能量计量、水表、等级记录、拒收记录和去向记录 | campaign_id；lot_id；input_mass_kg；input_moisture；drying_method；drying_start；drying_end；fuel；electricity；process_water_m3；cleaning_method；grade；accepted_mass_kg；downgraded_mass_kg；reject_mass_kg；reject_class；reject_destination；output_moisture；container_tare；gate | 记录每个调理批次，并核对水分、质量、等级、能量、用水和去向记录 | kg、percent、m3、kWh、L 或 MJ | 每个调理批次；每个活动核对 | 一个申报调理活动和交接点 | 每个批次、批号和申报接收设施 | 按批次和等级汇总；保留输入、输出水分和皮重；只有在质量和水分核对后计算水分损失 | 校准称重、水分方法、计量记录、采购方或等级规格、去向证据和批次平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有作物年度、采收和调理行 | 参考归一化数量 = 测量或计算数量 × 1 kg / 可接受整荚豆荚质量（kg）；报告表可再乘以 1,000 表示每 1,000 kg | accepted_whole_pod_mass_kg；process_amount | 每 1 kg 或每 1,000 kg 可接受整荚角豆的数量 | `iso-14044-2006` |
| `calc_orchard_life_annualization` | 建园、更新和未成熟树体投入 | 年度化活动数量 = 有文件依据的活动数量 / 申报生产期分配基准；将年度化数量关联到作物年度和可接受输出基准 | event_amount；productive_period；crop_year_link；accepted_output_mass | 年度化多年生投入数量 | `fao-feedipedia-carob`；`carob-macronutrients-water-2005`；`iso-14044-2006` |
| `calc_moisture_mass_conversion` | 采收、干燥、可接受、降级和拒收豆荚质量 | 干物质 = 原始接收质量 ×（1 - 水分比例）；水质量 = 原始接收质量 × 水分比例；仅对相关批次使用测得或申报的水分 | as_received_mass；moisture_fraction；sampling_method | 按批次的干物质质量和水质量 | `carob-drying-characteristics-2016`；`carob-nutritional-characterization-2018` |
| `calc_nutrient_product_to_basis` | 肥料和土壤改良剂投入 | 养分数量 = 实际产品质量 × 有文件依据的养分比例；保留产品名称、产品质量、养分基准和施用活动 | product_mass；documented_nutrient_fraction；nutrient_basis | 产品质量和养分基准数量 | `carob-macronutrients-water-2005` |
| `calc_water_energy_reconciliation` | 灌溉、直接取水、抽水、采收和调理能量 | 按地块或批次核对计量表、发票、承包商记录和设备计算；不得将同一活动的重复记录相加 | meter_records；invoices；source_records；equipment_calculation | 核对后的水和能量总量 | `carob-macronutrients-water-2005` |
| `calc_soil_emissions` | 与养分相关的空气、土壤和水体基本流输出 | 对申报的养分、改良剂、残余物、土壤、气候和水活动数据应用适用地理位置的方法层级；披露层级和因子 | nutrient_inputs；amendments；residues；soil_parameters；climate_parameters；water_records | 按方法计算的排放量 | `ipcc-2019-refinement-vol-4` |
| `calc_conditioning_mass_balance` | 采收和初级调理输出 | 残余质量 = 输入质量 - 可接受质量 - 降级质量 - 申报拒收质量 - 其他有证据的目的地质量；不得将残余物无说明地归入可接受产品 | input_mass；output_masses；reject_masses；destination_masses | 核对后的损失和残余物 | `iso-14044-2006` |
| `calc_shared_grade_allocation` | 两个或更多有意整荚产品输出共用调理负荷 | 等级 i 的质量分配因子 = 等级 i 可接受质量 / 有意转移的整荚产品输出质量总和，除非适用有文件依据的物理细分或合理的经济方法 | grade_output_masses；method_decision | 等级特定的分配负荷和因子 | `iso-14044-2006` |
| `calc_drying_water_vapour` | 初级调理中的干燥 | 水蒸气 = 输入水质量 - 可接受输出水质量 - 降级输出水质量 - 拒收物水质量 + 测得的过程加水量；负值必须调查，不得截断 | incoming_mass；incoming_moisture；output_masses；output_moistures；process_water | 向申报受纳介质释放的水蒸气量 | `carob-drying-characteristics-2016` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_qualifiers` | 参考流、产品输出、种植材料、养分产品、作物保护和基本流输出 | 申报物种、品种或类型、受管理生产状态、地理位置、交接点、产品状态、保留种子状态和身份依据。最终 TIDAS 发布前解析全部交换身份。 | 数据集元数据、批次记录、产品文件和身份审查 |
| `dq_period_and_phase_linkage` | 多年生园地生产 | 将作物年度、树龄、结果阶段、建园、更新以及终止或弃置活动关联到输出期间；未解决的归属关系阻止最终化。 | 园地登记、地块历史、生产期假设和年度化工作表 |
| `dq_mass_reconciliation` | 采收和初级调理 | 可采收、收集、可接受、降级、拒收、田间损失、其他去向和水分损失质量必须在有文件依据的测量不确定度内核对一致。 | 称重单、水分测试、批次记录、去向记录和核对工作表 |
| `dq_nutrient_basis_traceability` | 肥料、土壤改良剂投入及相关排放 | 核对实际产品、产品质量、申报养分或改良剂基准、施用活动和排放方法输入。缺失产品证据不得用通用默认值替代。 | 供应商标签或规格、发票、施用日志和计算表 |
| `dq_activity_completeness` | 园地、采收和调理活动 | 覆盖所有申报地块、采收批次和调理批次。雨养、人工或无水状态必须以路线证据记录为有依据的零值。 | 地块登记、操作员确认、计量或发票记录和活动核对 |
| `dq_moisture_and_quality` | 可接受和降级整荚豆荚输出 | 报告测定方法、采样点、水分约定、等级或目的地、保留种子状态以及采购方或本地规格。超出筛选范围的值需要解释，不自动拒绝。 | 水分检测、等级规格、批次记录和质量审查 |
| `dq_flow_set_and_uuid_resolution` | 所有参数化或未解析身份行 | 最终过程发布前，将参数化 Flow Set 行和未解析身份解析为具有兼容流、属性、单位组、方向、流类型、地理位置及供应商或用途证据的具体身份。 | 身份解析记录、Flow Set 组决定和最终过程审查 |
| `dq_boundary_and_fate_disclosure` | 完整前景数据集 | 披露申报交接点、排除的下游加工、野生采集排除、调理路线、拒收物和残余物去向、包装状态以及任何路线扩展。 | 边界声明、过程说明、去向记录和下游使用声明 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity_and_state` | 参考流和终端产品输出 | 确认终端输出是保留果肉和种子的成熟整荚角豆，并以申报交接点的净 kg 表示。分离种子、果肉、角豆胶、面粉或加工产品必须未通过本 PCR 身份检查。 | `fao-feedipedia-carob`；`carob-drying-characteristics-2016` |
| `validation_process_and_module_coverage` | 过程图和清单 | 确认受管理生产、独立采收与收集以及适用的初级调理节点均有表示。检查选定的分级和多输出义务，确保有输入状态、每个有意输出交接点以及明确的拒收或废物状态。 | `fao-feedipedia-carob`；`fao-carob-nwfp-chapter7` |
| `validation_period_and_phase_linkage` | 多年生生产和分配 | 确认每项建园、更新、作物年度、结果阶段、输出和分配活动都有申报的期间或阶段，且不能被重复归属。 | `iso-14044-2006` |
| `validation_harvest_and_conditioning_mass_balance` | 采收和初级调理 | 确认可采收、收集、可接受、降级、拒收、田间损失、其他去向和水分损失质量相互核对。未解释的残余量阻止最终化。 | `iso-14044-2006` |
| `validation_quality_output_attribution` | 分级和分拣输出 | 确认每个有意转移的等级或目的地输出都有交接点、输出质量、质量或目的地描述以及明确的分配决定。拒收物不得计为可接受输出。 | `iso-14044-2006` |
| `validation_nutrient_emission_linkage` | 养分投入和基本排放 | 确认养分相关排放连接到实际产品和改良剂记录、残余物和土壤数据、选定方法层级及申报受纳介质。 | `ipcc-2019-refinement-vol-4` |
| `validation_flow_set_resolution` | 参数化和未解析清单行 | 最终 TIDAS 过程发布前，将每个参数化 Flow Set 行或未解析身份解析为具有属性、单位、方向、流类型、地理位置和用途证据的兼容具体 UUID。 |  |
| `validation_boundary_exclusions` | 完整前景数据集 | 当数据集包含切碎、研磨、种子分离、角豆胶、面粉、烘烤、糖浆、交接点后的下游储存或运输、非受管理野生采集或包装终端处理时，应拒绝或标记，除非记录了明确审查的边界扩展。 | `iso-14044-2006` |

## 10. 已发布数据集配置

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 用于下游过程和生命周期模型投影的受管理角豆园、采收、收集和首次调理前景过程数据 |
| allowed_use | 当身份、期间关联、质量平衡、水分、等级和路线记录完整时，用于模拟申报生产地点或首次调理交接点的保留种子的成熟整荚角豆 |
| excluded_use | 模拟非受管理野生采集、分离种子或果肉、角豆胶、面粉、粉末、糖浆、烘烤、下游储存或运输、消费者使用或其他水果类别；身份未解析的行不是最终 TIDAS 交换 |
| required_metadata | PCR id 和生命周期状态；CPC 参考；物种和品种或类型；受管理角豆园或栽培型角豆林状态；地理位置；树龄和面积；生产期基准；作物年度；灌溉和养分基准；采收方法；原始、可接受、降级、拒收和损失质量；水分约定；等级和目的地；是否包含调理；保留种子状态；申报交接点 |
| required_quality_disclosure | 时间和场址覆盖；地块、批次和调理批次汇总；测量和计算方法；缺失数据和有依据零值处理；水分采样；参数化 Flow Set 决定；身份证据缺口；分配因子；拒收物和残余物去向；以及边界扩展 |
| update_trigger | 产品状态、品种或路线、树龄或生产期假设、灌溉或养分实践、采收技术、调理技术、等级或目的地、Flow Set 版本、排放方法、身份证据或适用产品质量规格发生变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-feedipedia-carob` | official_guidance | FAO Feedipedia，“Carob (Ceratonia siliqua)”，https://feedipedia.review.fao.org/node/320 | 整荚术语、多年生生产背景、采收、空气干燥、干物质指示、产量筛选证据以及果肉和种子分离 |
| `fao-carob-nwfp-chapter7` | official_guidance | FAO，《Non-Wood Forest Products for Rural Development》第 7 章，https://www.fao.org/4/Y4351E/y4351e0b.htm | 受管理和野生路线背景、采收背景、作物时间以及初级切碎边界证据 |
| `carob-drying-characteristics-2016` | literature | Benković 等，“Assessment of Drying Characteristics and Texture in Relation with Micromorphological Traits of Carob Pods and Seeds”，Food Technology and Biotechnology 54(4), 432–440，DOI: 10.17113/ftb.54.04.16.4475 | 整荚干燥行为、水分基准计算和初级干燥证据 |
| `carob-macronutrients-water-2005` | literature | Correia 等，“The use of macronutrients and water in marginal Mediterranean areas: the case of carob-tree”，Field Crops Research 91(1), 1–6，DOI: 10.1016/j.fcr.2004.05.004 | 角豆水分和养分管理背景，以及场址特定灌溉或养分采集 |
| `carob-nutritional-characterization-2018` | literature | Papaefstathiou 等，“Nutritional characterization of carobs and traditional carob products”，Food Science & Nutrition 6, 2151–2161，DOI: 10.1002/fsn3.776 | 支持 QA 筛选的豆荚水分和产品状态特征 |
| `ipcc-2019-refinement-vol-4` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4: Agriculture, Forestry and Other Land Use，https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 养分、残余物、土壤和气候相关排放计算方法的选择与披露 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines，https://www.iso.org/standard/38498.html | 边界、归一化、分配、质量核对和数据质量方法规则 |
