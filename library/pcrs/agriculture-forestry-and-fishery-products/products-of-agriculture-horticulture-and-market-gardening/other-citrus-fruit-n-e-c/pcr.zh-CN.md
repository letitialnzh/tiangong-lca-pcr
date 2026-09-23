---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-citrus-fruit-n-e-c
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 其他未列名柑橘类水果

## 1. 范围与适用性

本 PCR 覆盖 CPC 其他未列名柑橘类水果的鲜果、未加工前景生产，从果园或设施单元管理开始，经过采收、可选初级整理、初级包装，直至声明农场或首个包装场交接点。残余类别包含多个类型时，数据包必须声明通用名称或植物学身份。本 PCR 不包括销售用苗木生产、橙子、柠檬和酸橙、橘类、柚子或葡萄柚、加工或保藏柑橘、交接点后的配送、零售、消费，以及声明起始条件之前的土地利用变化。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-citrus-fruit-n-e-c |
| classification_refs | CPC 3.0:01329 Other citrus fruit, n.e.c. |
| covered_products | 在声明农场或首个包装场交接点交付的鲜食、未加工其他柑橘类水果 |
| excluded_products | 已有专门分类的柑橘、加工或保藏柑橘、作为产品销售的苗木，以及交接点后的配送 |
| representative_product | 在声明交接点采收、分级且处于声明清洗或未清洗、包装或散装状态的可销售鲜食其他柑橘类水果 |
| production_route | 多年生或半多年生果园管理、采收、可选初级整理和声明交接 |
| market_state | 声明交接点的整果鲜柑橘 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场或首个包装场交接点的可销售鲜食其他柑橘类水果 |
| How much | 1,000 kg |
| How well | 新鲜、未加工、可销售，并声明柑橘身份、品种组、产地、成熟度、等级、清洗、冷却、包装和交接点 |
| How long or cycle | 一个年度采收活动及所代表的生产果园期间，多年生负荷分配至报告期间 |
| reference_flow_link | other_citrus_fruit_farm_gate_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 声明农场或首个包装场交接点的鲜食其他柑橘类水果＼ |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 柑橘身份及名称；品种组；产地；路线；树龄；报告年度；生产面积；灌溉来源和方法；养分和植保基准；成熟度和等级；清洗；冷却；包装；拒收物和残余物去向；交接点 |


构建前景数据包时，`必需限定信息` 必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 采收和交接产出 | 质量 | kg | 在归一化前分别保留采收总量、可销售水果、次果、修整物、田间损失和包装拒收物。 |
| `perennial_orchard_annualization` | 果园管理 | 面积时间和质量 | m2*a 和 kg | 记录树龄、生产面积、报告期和更新事件，跨年度分配多年生负荷且不重复计算。 |
| `nutrient_equivalent_basis` | 肥料和土壤改良剂 | 质量 | kg 产品、kg N、kg P2O5 或 kg K2O | 记录实际产品和浓度，同时保留产品质量及养分当量基准。 |
| `irrigation_volume` | 灌溉和取水 | 体积 | m3 | 分开记录输送灌溉水和降水，并在适用时核对取水、输送、回流和损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已建立的果园或设施柑橘单元接收本期间管理投入；起始前土地利用和苗圃生产需披露或排除 |
| starting_condition_role | 所代表生产期和采收活动的开始 |
| product_classification_scope | CPC 3.0:01329 下的鲜食其他未列名柑橘，直至声明农场或首个包装场交接点 |
| recursive_input_rule | 外购柑橘种植材料只作为一次上游投入关联，不在本 PCR 内递归展开为另一个果园周期。 |
| upstream_dataset_requirement | 使用时为种植材料、养分、植保、水、能源、燃料、包装和废物处理提供兼容上游数据集。 |
| disclosure | 声明柑橘身份、品种、产地、路线、树龄、面积、期间、灌溉、养分和植保基准、采收、等级、清洗、冷却、包装、残余物和拒收物去向、废水去向及交接点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_productive_period` | 果园管理 | 纳入所代表生产期和采收活动的管理投入、多年生归属和直接田间排放；单独披露建植和更新。 | `fao-citrus-production-guidance` |
| `boundary_declared_gate` | 采收和整理 | 以声明农场或首个包装场为终点；仅纳入交接前发生的分级、清洗、冷却和初级包装。 | `fao-citrus-postharvest-guidance`; `iso-14067-2018` |
| `boundary_soil_and_residue_emissions` | 养分和残余物 | 对土壤和残余物排放采用一个声明的方法，避免氮基准重复计算。 | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | 残余物和拒收物 | 记录去向；未说明去向的残余物或拒收物保留为损失或废物流，不作为副产品。 | `fao-citrus-production-guidance` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `orchard_management` | 其他柑橘果园管理 | required | 每个所代表的生产期 | 管理型生物生产 | 生产面积和年度采收产出 |
| `harvest` | 其他柑橘采收和田间处理 | required | 每个所代表的采收活动 | 采收和交接 | 采收批次及每 1,000 kg 可销售产出 |
| `primary_conditioning` | 其他柑橘初级整理和包装 | conditional | 交接前发生整理或初级包装时 | 初级整理 | 每 1,000 kg 的整理产出和拒收物 |

### 过程：其他柑橘果园管理（`orchard_management`）

#### 输入

##### 产品流

###### 进入果园的灌溉水（`irrigation_water_input`）

记录进入果园或设施单元的灌溉水，并与降水和水源取水分开。

- 选定流：灌溉水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按区块、水源、方法和期间计量或记录输送的灌溉水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产公顷及每 1,000 kg 可销售交接产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_management_records`
- 来源：`fao-irrigation-water-management`
- 数量范围：灌溉筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20,000
  - 单位：m3/ha/year
  - 基准：生产果园面积和年度采收活动
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-irrigation-water-management`

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
- 归一化基准：每生产公顷及每 1,000 kg 可销售交接产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`fao-citrus-production-guidance`

###### 植保产品（`crop_protection_input`）

按产品、日期、处理面积以及标签或处方基准记录植保产品或有效成分。

- 选定流：植保产品或有效成分＼
- 流属性/单位：质量 / kg 产品或 kg 有效成分
- 数量规则：按期间核对采购、库存、施用、处理面积和标签浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产公顷及每 1,000 kg 可销售交接产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_management_records`
- 来源：`fao-citrus-production-guidance`

###### 果园用电（`orchard_electricity_input`）

记录抽水、施肥灌溉、通风或其他果园服务用电，并将共享电表分配到所代表区块和期间。

- 选定流：外购电力
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：按区块和报告期计量或分配电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每生产公顷及每 1,000 kg 可销售交接产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_management_records`
- 来源：`fao-citrus-production-guidance`

###### 果园机械燃料（`orchard_fuel_input`）

记录割草、喷施、修剪、施肥和内部搬运的机械燃料。

- 选定流：移动机械燃料
- 流属性/单位：能量或质量 / MJ 或 kg fuel
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：使用燃料记录或设备活动量乘以已确认耗油率，并保留燃料类型。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每生产公顷及每 1,000 kg 可销售交接产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_management_records`
- 来源：`fao-citrus-production-guidance`

##### 废物流

##### 基本流

###### 果园土地占用（`land_occupation_input`）

记录所代表期间占用的生产面积和持续时间。

- 选定流：农业土地占用
- 流属性/单位：面积时间 / m2*a
- 数量规则：生产面积乘以所代表占用时间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售交接产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_management_records`
- 来源：`fao-citrus-production-guidance`

#### 输出

##### 产品流

###### 可供采收的果园产出（`orchard_output_handoff`）

该内部交接与采收批次核对，不作为第二个可销售产出重复计算。

- 选定流：待采收的其他柑橘类水果作物＼
- 流属性/单位：质量 / kg fresh fruit
- 数量规则：将可获得产出与采收、田间损失和可销售产出核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产期及每 1,000 kg 可销售交接产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_yield_records`
- 来源：`fao-citrus-production-guidance`

##### 废物流

###### 修剪物和果园残余物（`pruning_residue_output`）

按去向记录修剪生物量和其他果园残余物。

- 选定流：柑橘修剪物和果园残余物＼
- 流属性/单位：质量 / kg fresh or dry matter
- 数量规则：称量或估算残余物，记录含水率基准和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产公顷及每 1,000 kg 可销售交接产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_management_records`
- 来源：`fao-citrus-production-guidance`

##### 基本流

###### 土壤直接氧化亚氮（`soil_nitrous_oxide`）

依据一个声明的方法和适用氮基准计算土壤和残余物氧化亚氮。

- 选定流：排放到大气环境的氧化亚氮
- 流属性/单位：质量 / kg N2O
- 数量规则：删除重复养分和残余物氮基准后应用声明因子或实测结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产公顷及每 1,000 kg 可销售交接产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils`

### 过程：其他柑橘采收和田间处理（`harvest`）

#### 输入

##### 产品流

###### 可重复使用采收筐（`harvest_crate_input`）

记录采收筐或田间容器，并记录重复使用、清洗、更新和损失假设。

- 选定流：可重复使用采收筐或田间容器
- 流属性/单位：包装质量或容器数量 / kg 或 number
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`pallet-and-crate-packaging`
- 数量规则：按声明的服务次数分配制造、清洗、更新和损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每采收活动及每 1,000 kg 可销售交接产出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_yield_records`
- 来源：`fao-citrus-postharvest-guidance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采收的其他柑橘类水果（`harvested_fruit_output`）

称量初级整理前的采收水果，并保留产品、成熟度、等级和批次信息。

- 选定流：采收的鲜食其他柑橘类水果＼
- 流属性/单位：质量 / kg fresh fruit
- 数量规则：称量每批次，并与损失、次果和可销售产出核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售交接产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_yield_records`
- 来源：`fao-citrus-production-guidance`

##### 废物流

###### 采收损失和田间次果（`harvest_loss_output`）

记录留在田间、采收损伤或交接前移除的水果并说明去向。

- 选定流：采收损失或田间次果＼
- 流属性/单位：质量 / kg fresh fruit
- 数量规则：按批次称量或估算，并与采收总量和可销售量核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售交接产出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_yield_records`
- 来源：`fao-citrus-production-guidance`

### 过程：其他柑橘初级整理和包装（`primary_conditioning`）

#### 输入

##### 产品流

###### 整理和清洗用水（`conditioning_water_input`）

记录交接前用于清洗、卫生或初级整理的用水。

- 选定流：过程用水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：按批次计量或记录，并区分补充水和循环水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售交接产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_conditioning_records`
- 来源：`fao-citrus-postharvest-guidance`

###### 整理用电（`conditioning_electricity_input`）

记录交接前分选、分级、清洗、冷却和初级包装的用电。

- 选定流：外购电力
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：按所代表批次和整理期间计量或分配电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售交接产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_conditioning_records`
- 来源：`fao-citrus-postharvest-guidance`

###### 初级包装材料，条件性（`primary_packaging_input`）

只记录交接前实际使用的纸箱、托盘、薄膜、标签或其他包装。

- 选定流：实际使用的初级包装材料＼
- 流属性/单位：质量 / kg packaging material
- 数量规则：按类型称量或取得领用记录，并按重复使用和损失假设分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售交接产出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_conditioning_records`
- 来源：`fao-citrus-postharvest-guidance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明交接点的可销售其他柑橘（`marketable_gate_output`）

记录符合身份、成熟度、等级、质量、处理状态和交接点要求的水果。

- 选定流：声明交接点的可销售鲜食其他柑橘类水果＼
- 流属性/单位：质量 / kg fresh fruit
- 数量规则：按产品身份、批次、等级、处理状态和交接点称量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 可销售交接产出的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_conditioning_records`
- 来源：`fao-citrus-postharvest-guidance`

##### 废物流

###### 整理拒收物和清洗废水（`conditioning_reject_output`）

记录整理过程离开的拒收水果、修整物和废水，并保留去向和处理证据。

- 选定流：整理拒收物、修整物或清洗废水＼
- 流属性/单位：质量或体积 / kg fresh material 或 m3 wastewater
- 数量规则：可行时分别计量或计算拒收物、修整物和废水，并保留去向。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售交接产出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_conditioning_records`
- 来源：`fao-citrus-postharvest-guidance`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_marketable_and_rejects` | 果园和整理共享产出 | 对可比的可销售水果、次果、修整物和独立记录产出按实测质量分配共享投入；不可比物流单独披露。 | `iso-14044-2006`; `fao-citrus-postharvest-guidance` |
| `allocation_perennial_stand` | 果园建植和更新 | 根据生产年限、树龄和更新事件年度化建植、更新和共享多年生资产。 | `fao-citrus-production-guidance`; `iso-14067-2018` |
| `allocation_reuse_packaging` | 可重复使用筐和托盘 | 按服务次数、损失率和所代表活动分配制造和清洗；一次性包装单独记录。 | `fao-citrus-postharvest-guidance` |

拒收、返田、堆肥、处理或丢弃的水果仍为废物或损失流，除非有独立销售和管理证据支持副产品处理。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_management_records` | `orchard_management` | 果园投入、面积、能源、土地和残余物 | 果园日志、计量表、发票、田间记录 | 区块；面积；树龄；路线；灌溉；电力；燃料；残余物；期间 | 按区块记录并与计量表和发票核对 | kg、m3、kWh、MJ、m2*a | 每次作业及月度结账 | 完整生产期 | 各区块或单元 | 先按区块和期间汇总，再按产出归一化 | 计量或发票及田间日志核对 |
| `cp_nutrient_application_records` | `orchard_management` | 养分总量和土壤排放 | 标签、采购、库存、施用和土壤记录 | 产品；质量；N；P2O5；K2O；日期；区块；方法；土壤测试 | 将采购和施用与标签或实验室浓度核对 | kg 产品和 kg 养分 | 每次施用及年度结账 | 完整生产期 | 各区块 | 产品级核对后计算养分当量 | 标签或实验室结果及施用记录 |
| `cp_harvest_yield_records` | `harvest` | 采收批次、筐、损失和交接 | 采收票、秤、筐和燃料记录 | 批次；身份；区块；日期；总量；可销售量；次果；损失；筐；燃料；交接点 | 按批次称量并与区块产量核对 | kg、数量、MJ | 每个采收批次 | 完整采收活动 | 各区块和交接点 | 总量 = 可销售量 + 次果 + 损失 | 校准秤和采收票 |
| `cp_primary_conditioning_records` | `primary_conditioning` | 水、电、包装、产出、拒收物和废水 | 包装场日志、计量表、秤、领用和废物记录 | 批次；水；循环水；电力；包装；产出；拒收物；废水；交接点 | 按处理水果质量分配共享记录 | m3、kWh、kg | 每批次或活动结账 | 完整整理期间 | 每条线或首个包装场 | 核对输入和输出批次 | 计量、称量、包装和废物记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground rows | 归一化数量 = 期间或批次数量 / 可销售交接产出 × 1,000 kg | 采集数量；交接产出 | 每参考产出的数量 | `iso-14067-2018` |
| `calc_nutrient_equivalent` | nutrient input total | 养分当量 = 产品质量 × 声明浓度 | 产品质量；标签或实验室浓度 | kg N、kg P2O5 或 kg K2O | `fao-citrus-production-guidance` |
| `calc_perennial_attribution` | establishment and replacement | 年度归属量 = 已记录数量 / 声明归属期，并按面积和期间调整 | 建植；树龄；期间；面积 | 年度化果园数量 | `fao-citrus-production-guidance`; `iso-14067-2018` |
| `calc_soil_emissions` | soil nitrous oxide | 删除重复基准后，对适用养分和残余物氮应用声明因子或测量结果 | 养分和残余物氮；因子或结果 | 排放量 | `ipcc-2019-managed-soils` |
| `calc_output_reconciliation` | harvest and conditioning | 采收总量 = 可销售量 + 次果 + 修整物 + 损失；调查未解释残差 | 批次称量和去向记录 | 核对后的产品和废物量 | `fao-citrus-postharvest-guidance` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 产品和参考流 | 声明柑橘身份、品种组、路线、等级、交接点和处理状态；证据缺口 身份保持明确。 | 产品规格和批次记录 |
| `quality_measurement` | 数量和单位 | 尽量使用校准秤和计量表，并记录估算、含水率、换算因子和重复使用假设。 | 校准、计量、发票和计算记录 |
| `quality_temporal` | 果园和采收 | 覆盖完整生产期和活动，包括多次采收和更新事件。 | 田间日历、采收票、包装场日志 |
| `quality_completeness` | 清单 | 核对水、养分、能源、燃料、包装、产品、拒收物、残余物、排放和取水，并说明缺失物流。 | 质量平衡和缺失说明 |
| `quality_disclosure` | 数据集元数据 | 披露限定信息、水来源和去向、养分和植保基准、多年生分配及拒收物或残余物去向。 | 数据集元数据和场址记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_mass` | 参考流和交接产出 | 1,000 kg 参考产出必须使用 kg 质量，并与产品身份、等级、处理状态和交接点核对。 | `iso-14067-2018` |
| `validate_process_reconciliation` | 采收和整理 | 采收总量、可销售产出、次果、修整物、损失、拒收物和废水必须核对，或带有记录的残差。 | `fao-citrus-postharvest-guidance` |
| `validate_perennial_period` | 果园管理 | 年度化前必须具备树龄、生产面积、期间、建植或更新事件及年度化依据。 | `fao-citrus-production-guidance` |
| `validate_flow_set_resolution` | parameterized rows | 生成前景数据时，每个 parameterized 行必须解析为与组、属性、单位和地域兼容的已验证 UUID；否则保留明确 coverage finding。 |  |
| `validate_qualifiers` | 参考流和元数据 | 必须提供柑橘身份、品种、产地、树龄、期间、灌溉、养分和植保基准、成熟度或等级、整理、包装、去向和交接点。 | `fao-citrus-production-guidance`; `fao-citrus-postharvest-guidance` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 鲜食其他未列名柑橘类水果的农业前景生产数据集 |
| downstream_use | 在披露参考身份、交接点、地域、期间和 coverage finding 后作为 secondary_dataset 或 background_dataset 使用 |
| allowed_use | 路线、状态和交接点兼容时，用于鲜食柑橘供应的比较性或归因性 LCA |
| excluded_use | 加工、榨汁、保藏、干制、零售、消费或没有记录调整的实质不同边界 |
| required_metadata | 产品身份；品种；产地；路线；树龄；面积；期间；灌溉；养分和植保；采收批次；成熟度和等级；整理；包装；去向；交接点；UUID 和 Flow Set coverage 状态 |
| required_quality_disclosure | 数据年份；测量与估算；分配和年度化；水源和去向；养分基准；质量平衡 |
| update_trigger | 类别解释、Flow Set taxonomy、参考身份、路线、养分或排放方法、包装或农业实践发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-citrus-production-guidance` | official_guidance | FAO citrus production and orchard management guidance | 路线、果园管理、种植、残余物和生产期边界 |
| `fao-irrigation-water-management` | extension_guidance | FAO irrigation and agricultural water-management guidance | 灌溉记录、水披露和取水核对 |
| `fao-citrus-postharvest-guidance` | official_guidance | FAO citrus postharvest handling and packing guidance | 采收、分级、清洗、冷却、包装、拒收物和废水 |
| `ipcc-2019-managed-soils` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, managed-soils methods | 土壤排放计算 |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines | 分配和清单一致性 |
| `iso-14067-2018` | standard | ISO 14067:2018 Greenhouse gases — Carbon footprint of products | 归一化、分配披露和使用条件 |
