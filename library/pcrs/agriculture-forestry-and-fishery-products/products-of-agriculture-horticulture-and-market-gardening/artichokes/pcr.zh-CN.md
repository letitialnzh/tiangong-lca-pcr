---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.artichokes
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 洋蓟

## 1. 范围与适用性

This PCR covers 商业生产 of 新鲜, 未加工 洋蓟 花蕾 from 田间 or 设施栽培 建植 through 植株管理, 灌溉, 养分 and 植保 applications, 采收, 分级, 可选 清洗 or 冷却, 一次包装, and hand-off at the 声明的 农场门 or 包装场 gate. It covers 一年生 直播 or 移栽 crops and 多年生 冠芽 or 分株 plantings when the 生产 路线 and 作物周期 attribution are 声明的. 洋蓟 seed, 冠芽s, and nursery 生产, mature opened 流ers, canned, frozen, dried, marinated, or cooked 洋蓟, retail, consumer storage, and consumption are 排除. Packing, 清洗, 冷却, and purchased transport are 纳入d only when they occur before the 声明的 gate.

## 2. 产品类别识别

| 田间 | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.洋蓟 |
| classification_refs | CPC 3.0:01216 洋蓟 |
| covered_products | 新鲜, 未加工 洋蓟 花蕾 delivered at the 声明的 农场门 or 包装场 gate |
| 排除_products | 洋蓟 seed and planting material, opened 流ers, canned, frozen, dried, marinated, cooked, or otherwise 过程ed 洋蓟, and downstream retail or consumption |
| representative_product | 商品 新鲜 洋蓟 花蕾 meeting the 声明的 size, 成熟度, 硬度, 修整, 清洁度, and 等级 requirements |
| 生产_路线 | 直播, 移栽, 冠芽, or 分株 建植; managed vegetative growth; 灌溉, 养分, 杂草, and 害虫 management; 花蕾 采收; 分级; 可选 清洗, 冷却, and 一次包装 |
| market_state | 新鲜, 未加工 洋蓟 花蕾 in loose, bunched, crate, carton, or other 声明的 primary-包装状态 at the farm or 包装场 gate |

## 3. 参考流

| 田间 | Value |
| --- | --- |
| What | 商品 新鲜 洋蓟 花蕾 at the 声明的 农场门 or 包装场 gate |
| How much | 1,000 kg |
| How well | 新鲜 and 未加工, with 声明的 species or cultivar group, 花蕾 成熟度, size or 等级, stem length, 清洁度, 修整, wash and 冷却 state, and 包装状态 |
| How long or 周期 | One 声明的 一年生 作物周期 or one 声明的 生产 year of a 多年生 植株, including all 采收 flushes attributed to that 周期 |
| 参考_流_link | `artichokes_farm_gate_output` |

| 田间 | Value |
| --- | --- |
| 参考 amount | 1,000 kg |
| 参考 product 流 | 洋蓟，生产混合，在农场 `5e964a73-63a6-458b-a013-9785e776c3b6` |
| 参考 流 属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考 单位 group | 单位s of 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考 单位 | kg |
| 必需 限定信息 | 生产 地理范围; 一年生 or 多年生 路线; cultivar or variety group; seed, 移栽苗, 冠芽, or 分株 建植; planting or regrowth date; 采收 dates and flushes; 声明的 gate; 花蕾 size, 成熟度, 硬度, and 等级; stem and 修整 state; 灌溉 来源 and method; 养分 basis; 植保 program; 清洗 and 冷却 state; 包装状态; 残体 and 拒收物 fate |

参考_identity_status: 证据缺口

When constructing a foreground data package, the items listed in `Required qualifiers` must be 声明的 in dataset metadata, 过程 notes, 参考 流 comment, product description, or an equivalent data package 田间. Missing 必需 限定信息 make the 参考 流 definition incomplete for that data package.

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需 属性 | 必需 单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_artichoke_mass` | 商品 花蕾 and 采收 records | 质量 | kg | Keep gross 花蕾 采收, 商品 新鲜 花蕾, un商品 花蕾, 修整, soil or foreign material, and 田间 残体 as 分开 measured or calculated quantities. |
| `crop_cycle_normalization` | 田间, 设施栽培, and 多年生-植株 records | 面积 and 质量 | ha and kg | 记录 投入s and 采收s by 田间, bed, 设施单元, or 多年生 植株 and normalize them to the 商品 产出 attributed to the same 声明的 作物周期 or 生产 year. |
| `nutrient_product_basis` | 肥料, 粪肥, 堆肥, and other 养分 投入s | 质量 of product and 声明的 养分 | kg product, kg N, kg P2O5, or kg K2O | Preserve purchased product 质量 and convert to 养分 basis only from the 记录ed label, supplier specification, 养分 plan, or laboratory result. |
| `water_volume_basis` | 灌溉 and post-采收 清洗 水 | 体积 | m3 | 记录 delivered crop 灌溉 and post-采收 清洗 水 分别 使用 meter records or a 记录ed 水 balance. |
| `perennial_stand_attribution` | 多年生 洋蓟 植株s | 面积-time and 质量 | ha*a and kg | Attribute cutback, dormancy, regrowth, and 采收 投入s to the 声明的 生产 year; disclose 植株 age and treatment of 建植 burdens. |

## 5. 系统边界

### 边界概化

| 田间 | Value |
| --- | --- |
| 声明的_starting_condition | Prepared 生产 bed or 设施栽培 单位 receiving 洋蓟 seed, 移栽苗, 冠芽, or 分株 material, with prior land use and 排除 infrastructure work disclosed |
| starting_condition_role | Start of the 声明的 一年生 作物周期 or 多年生 生产-year accounting |
| product_classification_scope | 新鲜 洋蓟 under CPC 3.0:01216 through the 声明的 农场门 or 包装场 gate |
| recursive_投入_rule | Purchased 洋蓟 seed, 移栽苗s, 冠芽s, or 分株s are upstream product 投入s linked once; their own 生产 is outside this PCR unless a 分开 upstream dataset is supplied. |
| upstream_dataset_requirement | Require upstream datasets for planting material, 肥料s and amendments, 植保 products, 灌溉 水, 能源, 包装, and purchased transport or treatment services when used. |
| disclosure | Declare 地理范围, 一年生 or 多年生 路线, 植株 age, 建植 material, crop dates or 生产 year, 灌溉 来源 and method, 养分 basis, 植保 program, 采收 flushes, yield and 拒收物 reconciliation, 清洗 and 冷却, 包装, 残体 fate, and gate location. |

### 边界规则

| rule_id | 适用对象 | 规则 | 来源_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 建植 and 植株管理 | 纳入 bed preparation, 建植 or 多年生 regrowth, crop management, 作物周期 投入s, and 采收 preparation that produce the 声明的 新鲜 洋蓟 产出; disclose prior land use and exclude unrelated infrastructure construction. | `ucanr-artichoke-production-1997`; `ucanr-artichoke-cultural-tips-2026` |
| `boundary_gate_conditioning` | 采收 and primary conditioning | End the foreground system at the 声明的 农场门 or 包装场 gate and 纳入 cutting, 分级, 修整, 清洗, 冷却, and 一次包装 when they occur before that gate. | `ucanr-artichoke-cultural-tips-2026` |
| `boundary_soil_nitrogen` | 肥料, crop 残体s, and managed soil | Estimate applicable direct and indirect nitrogen emissions 使用 one 声明的 method and the recorded 养分 投入s and 残体 fate; avoid double counting a nitrogen pathway. | `ipcc-2019-refinement-nitrogen` |
| `boundary_residue_fate` | 田间 残体, 拒收物, and 修剪物 | 记录 田间 return, 堆肥ing, feed use, treatment, or disposal 分别; a material with no demonstrated productive use remains a 残体 or waste 流. | `ucanr-artichoke-weed-management-2005`; `ucanr-artichoke-cultural-tips-2026` |

## 6. 过程清单结构

### 过程图

| 过程_id | 过程_name | 纳入状态 | 纳入条件 | 建模角色 | quantitative_参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 洋蓟 crop 建植 | 必需 | every represented sowing, 移栽苗ing, 冠芽 planting, or 分株 建植 | foreground crop 建植 | established 田间, bed, 设施单元, or 多年生 植株 |
| `crop_management` | 洋蓟 植株管理 | 必需 | each represented 一年生 作物周期 or 多年生 生产 year | foreground managed biological 生产 | managed 面积 and 作物周期 or 生产-year 采收 |
| `harvest_and_gate_preparation` | 洋蓟 采收 and gate preparation | 必需 | each represented 采收 campaign and 声明的 gate | foreground 采收, conditioning, packing, and gate hand-off | 1,000 kg 商品 新鲜 洋蓟 |

### 过程：洋蓟 crop 建植（`crop_establishment`）

#### 输入

##### 产品流

###### 流：洋蓟 seed, 冠芽, 分株, or 移栽苗 material（`planting_material_input`）

记录 planting material that enters the 声明的 田间 or 设施单元, identifying whether it is seed, 移栽苗, 冠芽, or 分株 material.

- 选定 流: 洋蓟 seed, 冠芽, 分株, or 移栽苗 material
- 流 属性 / 单位: Number of viable 单位s or 质量 / seed, plant, 冠芽, 分株, or kg
- 数量规则: 记录 purchased lot 数量 and the viable 数量 planted in each 田间, bed, 设施单元, or 多年生 植株.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟 attributed to the same 作物周期 or 生产 year
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_establishment_records`
- 来源: `ucanr-artichoke-cultural-tips-2026`
- 数量范围: Planting-material 数量 screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 1,500
  - 上限: 3,000
  - 单位: viable plants, 冠芽s, or 分株s/ha
  - 基准: broad 一年生 or 多年生 建植 screen pending site records
  - 基准类型: Crop 周期 (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 农业养分与肥料投入（`crop_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg 商品 新鲜 洋蓟 attributed to the same 作物周期 or 生产 year
- 基准类型：过程 产出 (`process_output`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`ucanr-artichoke-cultural-tips-2026`; `shinohara-artichoke-irrigation-nitrogen-2011`
- 数量范围: 建植 organic-amendment screen
  - 数量范围 role: 典型范围 (`typical_range`)
  - 下限: 0
  - 上限: 15000
  - 单位: kg product/ha
  - 基准: 堆肥 or 粪肥 incorporated before planting; replace with 田间 records
  - 基准类型: Crop 周期 (`crop_cycle`)
  - 证据类型: External 来源 (`external_source`)
  - 来源: `ucanr-artichoke-cultural-tips-2026`

- 数量范围: 建植 nitrogen screen
  - 数量范围 role: 典型范围 (`typical_range`)
  - 下限: 0
  - 上限: 80
  - 单位: kg N/ha
  - 基准: preplant or planting application to a 新鲜-洋蓟 crop
  - 基准类型: Crop 周期 (`crop_cycle`)
  - 证据类型: External 来源 (`external_source`)
  - 来源: `ucanr-artichoke-cultural-tips-2026`

- 数量范围: Soil-test-dependent phosphorus screen
  - 数量范围 role: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 125
  - 单位: kg P2O5/ha
  - 基准: 建植 application pending soil-test and 养分-plan records
  - 基准类型: Crop 周期 (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 流：建植 灌溉 水（`establishment_irrigation_water`）

记录 水 delivered for bed preparation, 冠芽 or 移栽苗 建植, and early 植株 建植 分别 from later crop 灌溉.

- 选定 流: 灌溉 水
- 流 属性 / 单位: 体积 / m3
- 绑定模式: `parameterized`
- 流 Set: `flow-set.water-use`
- 流 Set version: `0.2.0`
- 流 Set group: `irrigation-water`
- 数量规则: Metered or 水-balance estimate for 建植 灌溉 by 田间, bed, 设施单元, or 植株.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟 attributed to the same 作物周期 or 生产 year
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_irrigation_records`
- 来源: `ucanr-artichoke-production-1997`
- 数量范围: 建植 灌溉 screen
  - 数量范围 role: 典型范围 (`typical_range`)
  - 下限: 200
  - 上限: 600
  - 单位: m3/ha
  - 基准: delivered 灌溉 during 建植 before full canopy development
  - 基准类型: Crop 周期 (`crop_cycle`)
  - 证据类型: External 来源 (`external_source`)
  - 来源: `ucanr-artichoke-production-1997`

###### 流：Mobile machinery 燃料 for 建植（`establishment_machinery_fuel`）

记录 燃料 used for bed preparation, planting, 移栽苗ing, 冠芽 placement, or other 建植 operations when 田间 machinery crosses the foreground boundary.

- 选定 流: Mobile machinery 燃料
- 流 属性 / 单位: 能源 or 质量 / MJ or kg
- 绑定模式: `parameterized`
- 流 Set: `flow-set.energy-supply`
- 流 Set version: `0.2.0`
- 流 Set group: `mobile-machinery-fuel`
- 数量规则: 使用 a 燃料 log or equipment activity estimate allocated to the represented 田间 or 植株.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟 attributed to the same 作物周期 or 生产 year
- 基准类型: 燃料 inventory (`fuel_inventory`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_field_energy_records`
- 来源: `ucanr-artichoke-production-1997`
- 数量范围: 建植 燃料 screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 50
  - 上限: 600
  - 单位: MJ/ha
  - 基准: bed preparation and planting operations
  - 基准类型: 燃料 inventory (`fuel_inventory`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 流：Discarded planting material（`discarded_planting_material`）

记录 planting material discarded at 建植 when it is not planted and has a distinct fate.

- 选定 流: Discarded 洋蓟 planting material
- 流 属性 / 单位: 质量 or number / kg or viable 单位s
- 数量规则: Weigh or count discarded material and record its destination 分别 from planted material.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟 attributed to the same 作物周期 or 生产 year
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_establishment_records`
- 数量范围: 建植 discard screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 15
  - 单位: percent of purchased planting material
  - 基准: 记录ed lot 损失, damage, and planting reconciliation
  - 基准类型: Crop 周期 (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### 流：Occupation of 洋蓟 生产 面积（`establishment_land_occupation`）

记录 田间 or protected 面积 and represented 持续时间 used for 建植 and the 声明的 作物周期 or 多年生 生产 year.

- 选定 流: Occupation, agricultural land
- 流 属性 / 单位: 面积-time / m2*a
- 数量规则: 声明的 productive 面积 multiplied by the represented 作物周期 or 生产-year 持续时间.
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_field_records`
- 来源: `ucanr-artichoke-production-1997`
- 数量范围: 生产-面积 screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 10
  - 单位: ha per 1,000 kg 商品 产出
  - 基准: broad site-yield screen pending 田间 and 采收 records
  - 基准类型: 过程 产出 (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

#### 输出

##### 产品流

###### 流：Established 洋蓟 植株（`established_artichoke_stand`）

记录 established 一年生 crop or 多年生 植株 state handed from 建植 to management; do not count it as 商品 洋蓟 产出.

- 选定 流: Established 洋蓟 crop or 多年生 植株
- 流 属性 / 单位: 面积 or number / ha or viable plants
- 数量规则: 记录 established 面积 or 植株 count that remains in 生产 after 建植 损失es.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟 attributed to the same 作物周期 or 生产 year
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_field_records`
- 数量范围: Established-植株 screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 85
  - 上限: 100
  - 单位: percent of planted 面积
  - 基准: retained 植株 after 建植
  - 基准类型: Crop 周期 (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

### 过程：洋蓟 植株管理（`crop_management`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg 商品 新鲜 洋蓟
- 基准类型：过程 产出 (`process_output`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`ucanr-artichoke-cultural-tips-2026`; `shinohara-artichoke-irrigation-nitrogen-2011`
- 数量范围: Crop-周期 nitrogen screen
  - 数量范围 role: 典型范围 (`typical_range`)
  - 下限: 0
  - 上限: 180
  - 单位: kg N/ha
  - 基准: in-season and total crop nitrogen application screen
  - 基准类型: Crop 周期 (`crop_cycle`)
  - 证据类型: External 来源 (`external_source`)
  - 来源: `shinohara-artichoke-irrigation-nitrogen-2011`

- 数量范围: In-season phosphorus screen
  - 数量范围 role: Default estimate (`default_estimate`)
  - 下限: 0
  - 上限: 125
  - 单位: kg P2O5/ha
  - 基准: soil-test-dependent in-season amendment
  - 基准类型: Crop 周期 (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

- 数量范围: Crop-周期 potassium screen
  - 数量范围 role: 典型范围 (`typical_range`)
  - 下限: 0
  - 上限: 450
  - 单位: kg K2O/ha
  - 基准: crop 养分 application screen pending soil-test and farm records
  - 基准类型: Crop 周期 (`crop_cycle`)
  - 证据类型: External 来源 (`external_source`)
  - 来源: `shinohara-artichoke-irrigation-nitrogen-2011`

###### 流：灌溉 水 during 植株管理（`crop_irrigation_water`）

记录 灌溉 events during vegetative growth, 花蕾 development, 多年生 regrowth, and any 声明的 active 生产 period.

- 选定 流: 灌溉 水
- 流 属性 / 单位: 体积 / m3
- 绑定模式: `parameterized`
- 流 Set: `flow-set.water-use`
- 流 Set version: `0.2.0`
- 流 Set group: `irrigation-water`
- 数量规则: Sum metered or 记录ed 水-balance 灌溉 deliveries by 田间, bed, 设施单元, or 植株.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_irrigation_records`
- 来源: `ucanr-artichoke-production-1997`; `shinohara-artichoke-irrigation-nitrogen-2011`
- 数量范围: Crop-周期 灌溉 screen
  - 数量范围 role: 典型范围 (`typical_range`)
  - 下限: 1860
  - 上限: 2480
  - 单位: m3/ha/year
  - 基准: 一年生 洋蓟 生产 灌溉 in the cited California 生产 context; adjust for local rainfall and 路线
  - 基准类型: Crop 周期 (`crop_cycle`)
  - 证据类型: External 来源 (`external_source`)
  - 来源: `ucanr-artichoke-production-1997`

###### 流：Crop-protection product（`crop_protection_input`）

记录 herbicide, insecticide, fungicide, or other 植保 product by product, active ingredient, application date, target, and treated 面积.

- 选定 流: Crop-protection product
- 流 属性 / 单位: 质量 / kg product or kg active ingredient
- 数量规则: Supplier invoice, treatment log, and application rate by 田间 or 植株; keep product and active-ingredient amounts distinct.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_crop_protection_records`
- 来源: `ucanr-artichoke-weed-management-2005`
- 数量范围: Crop-protection 数量 screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: kg product/ha
  - 基准: broad product-use screen pending application records and local label requirements
  - 基准类型: Crop 周期 (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 流：Mobile machinery 燃料 during 植株管理（`crop_machinery_fuel`）

记录 燃料 for cultivation, 杂草 control, cutback, ditch maintenance, fertigation support, and other 田间 operations allocated to the 声明的 周期 or 生产 year.

- 选定 流: Mobile machinery 燃料
- 流 属性 / 单位: 能源 or 质量 / MJ or kg
- 绑定模式: `parameterized`
- 流 Set: `flow-set.energy-supply`
- 流 Set version: `0.2.0`
- 流 Set group: `mobile-machinery-fuel`
- 数量规则: 燃料 log or equipment activity estimate allocated by 面积, operating hours, or 田间 record.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟
- 基准类型: 燃料 inventory (`fuel_inventory`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_field_energy_records`
- 来源: `ucanr-artichoke-weed-management-2005`
- 数量范围: Stand-management 燃料 screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 200
  - 上限: 1000
  - 单位: MJ/ha
  - 基准: cultivation, 杂草 control, cutback, and other 田间 operations
  - 基准类型: 燃料 inventory (`fuel_inventory`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 流：电力 for 灌溉 and 植株管理（`crop_electricity_input`）

记录 电力 for pumping, fertigation, protected cultivation, or other in-scope 植株-management equipment when it crosses the foreground boundary.

- 选定 流: 电力, medium voltage or applicable supply
- 流 属性 / 单位: 能源 / kWh
- 绑定模式: `parameterized`
- 流 Set: `flow-set.energy-supply`
- 流 Set version: `0.2.0`
- 流 Set group: `electricity-supply`
- 数量规则: 使用 a meter record or allocate 电力 by pumping hours, 流, 面积, or throughput with the allocation basis disclosed.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_field_energy_records`
- 来源: `ucanr-artichoke-production-1997`
- 数量范围: Stand-management 电力 screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kWh/ha
  - 基准: pumping and 设施栽培 equipment pending meter records
  - 基准类型: Crop 周期 (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 流：Occupation of managed 洋蓟 生产 面积（`management_land_occupation`）

记录 面积-time of the actively managed crop or 多年生 植株; do not count the same 面积 twice if 建植 and management are represented as one continuous land-use record.

- 选定 流: Occupation, agricultural land
- 流 属性 / 单位: 面积-time / m2*a
- 数量规则: Calculate managed 面积 multiplied by the represented active 生产 持续时间 and reconcile it with 建植 land occupation.
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_field_records`
- 来源: `ucanr-artichoke-production-1997`

#### 输出

##### 产品流

###### 流：采收-ready 洋蓟 花蕾（`harvest_ready_buds`）

记录 mature but uncut 花蕾 handed from managed 生产 to 采收, including 采收 flush or date and the 成熟度 or 等级 state used for the gate product.

- 选定 流: 采收-ready 洋蓟 花蕾
- 流 属性 / 单位: 质量 / kg wet 花蕾
- 数量规则: 记录 or calculate 采收-ready 花蕾 质量 by 田间, flush, and 采收 date before separating 商品 产出 and 拒收物.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_harvest_reconciliation`
- 来源: `ucanr-artichoke-cultural-tips-2026`

##### 废物流

###### 流：洋蓟 crop 残体 from cutback or senescence（`field_crop_residue`）

记录 cutback, senesced leaves, stems, and other 田间 残体 and identify whether it is returned to soil, 堆肥ed, removed, or disposed.

- 选定 流: 洋蓟 crop 残体
- 流 属性 / 单位: 质量 / kg wet 残体
- 数量规则: Reconcile pre-采收 bio质量, cutback or senescence records, 采收ed 花蕾 质量, and 残体 destination.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_harvest_reconciliation`
- 来源: `ucanr-artichoke-weed-management-2005`; `ucanr-artichoke-cultural-tips-2026`

###### 流：Un商品 洋蓟 heads and 田间 损失（`unmarketable_heads`）

记录 花蕾 拒收物ed for 成熟度, damage, size, disease, frost, or other 田间 causes and 记录 their destination 分别 from crop 残体.

- 选定 流: Un商品 洋蓟 heads and 田间 损失
- 流 属性 / 单位: 质量 / kg wet material
- 数量规则: Weigh or calculate 拒收物ed heads and 田间 损失 by 采收 flush, then reconcile them with gross 采收 and 商品 花蕾.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_harvest_reconciliation`
- 来源: `ucanr-artichoke-cultural-tips-2026`
- 数量范围: 田间 拒收物 screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 30
  - 单位: percent of gross 采收ed 花蕾 质量
  - 基准: quality and 采收-损失 reconciliation pending lot records
  - 基准类型: 过程 产出 (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### 流：Direct nitrous oxide from managed soil（`direct_n2o_air_output`）

Estimate direct soil nitrous oxide from eligible nitrogen 投入s and the 声明的 soil, climate, and method parameters.

- 选定 流: Nitrous oxide, emissions to air
- 流 属性 / 单位: 质量 / kg N2O
- 数量规则: Apply the 选定 IPCC-compatible factor to eligible nitrogen 投入s and 记录 the factor and climate or soil method in the dataset.
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟
- 基准类型: N 投入 (`n_input`)
- 证据类型: Method formula (`method_formula`)
- 采集协议: `cp_nutrient_records`
- 来源: `ipcc-2019-refinement-nitrogen`
- 数量范围: Direct nitrous-oxide QA screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: kg N2O/ha
  - 基准: method-dependent managed-soil screening range; replace with 声明的 factor calculation
  - 基准类型: N 投入 (`n_input`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 流：Nitrate to 新鲜水 from 田间 损失es（`nitrate_freshwater_output`）

Calculate nitrate 损失 from eligible nitrogen surplus 使用 the 声明的 site or method factor; do not infer nitrate 损失 from 肥料 purchase alone.

- 选定 流: Nitrate, emissions to 新鲜水
- 流 属性 / 单位: 质量 / kg NO3-
- 数量规则: Calculate from eligible nitrogen surplus and the 选定 site or method factor, with the nitrogen pathway and receiving compartment 记录ed.
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟
- 基准类型: N 投入 (`n_input`)
- 证据类型: Method formula (`method_formula`)
- 采集协议: `cp_nutrient_records`
- 来源: `ipcc-2019-refinement-nitrogen`

###### 流：Ammonia from managed 养分 投入s（`ammonia_air_output`）

Estimate ammonia emissions only for 养分 and soil pathways covered by the 选定 method and recorded application conditions.

- 选定 流: Ammonia, emissions to air
- 流 属性 / 单位: 质量 / kg NH3
- 数量规则: Apply the 声明的 method factor to eligible 肥料 or amendment 投入s and disclose the application and incorporation conditions.
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟
- 基准类型: N 投入 (`n_input`)
- 证据类型: Method formula (`method_formula`)
- 采集协议: `cp_nutrient_records`
- 来源: `ipcc-2019-refinement-nitrogen`

### 过程：洋蓟 采收 and gate preparation（`harvest_and_gate_preparation`）

#### 输入

##### 产品流

###### 流：采收-ready 洋蓟 花蕾 for conditioning（`conditioning_bud_input`）

记录 采收-ready 花蕾 received for cutting, 分级, 修整, 清洗, 冷却, or 一次包装 before the 声明的 gate.

- 选定 流: 采收-ready 洋蓟 花蕾
- 流 属性 / 单位: 质量 / kg wet 花蕾
- 数量规则: Reconcile received 花蕾 质量 to 田间 采收 tickets and the conditioning batch record.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟 at the 声明的 gate
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_postharvest_records`
- 来源: `ucanr-artichoke-cultural-tips-2026`

###### 流：水 for 清洗 or conditioning（`conditioning_water_input`）

记录 水 used for 清洗, misting, or other primary conditioning only when it occurs before the 声明的 gate.

- 选定 流: 过程 水
- 流 属性 / 单位: 体积 / m3
- 绑定模式: `parameterized`
- 流 Set: `flow-set.water-use`
- 流 Set version: `0.2.0`
- 流 Set group: `process-water`
- 数量规则: 使用 a meter, batch record, or 记录ed allocation from the conditioning line and keep it 分开 from 田间 灌溉.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟 at the 声明的 gate
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_postharvest_records`
- 来源: `ucanr-artichoke-cultural-tips-2026`
- 数量范围: Conditioning-水 screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 3
  - 单位: m3 per 1,000 kg gate 产出
  - 基准: 可选 清洗 or conditioning before the 声明的 gate
  - 基准类型: 过程 产出 (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 流：电力 for 冷却 and 一次包装（`conditioning_electricity_input`）

记录 电力 for 冷却, 清洗 pumps, 分级, and 一次包装 when the equipment is inside the 声明的 foreground boundary.

- 选定 流: 电力, medium voltage or applicable supply
- 流 属性 / 单位: 能源 / kWh
- 绑定模式: `parameterized`
- 流 Set: `flow-set.energy-supply`
- 流 Set version: `0.2.0`
- 流 Set group: `electricity-supply`
- 数量规则: Allocate meter 电力 to the represented conditioning batch by throughput, run time, or equipment record.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟 at the 声明的 gate
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_postharvest_energy_records`
- 来源: `ucanr-artichoke-cultural-tips-2026`
- 数量范围: Conditioning 电力 screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 2
  - 上限: 25
  - 单位: kWh per 1,000 kg gate 产出
  - 基准: 可选 冷却, pumping, 分级, and primary-packing 能源
  - 基准类型: 过程 产出 (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 流：Reusable crate or pallet 包装（`primary_packaging_input`）

记录 crates, pallets, cartons, or other 一次包装 only when they are part of the 声明的 gate state, retaining material, 单位 质量, reuse, and 损失 information.

- 选定 流: Pallet and crate 包装
- 流 属性 / 单位: 质量 / kg 包装 material
- 绑定模式: `parameterized`
- 流 Set: `flow-set.packaging-function`
- 流 Set version: `0.2.0`
- 流 Set group: `pallet-and-crate-packaging`
- 数量规则: Count 包装 单位s, multiply by 记录ed 单位 质量, and account for reuse 周期s or 包装 损失es.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟 at the 声明的 gate
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_packaging_records`
- 来源: `ucanr-artichoke-cultural-tips-2026`
- 数量范围: Primary-包装 screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 150
  - 单位: kg 包装 material per 1,000 kg gate 产出
  - 基准: 声明的 包装 format and reuse practice
  - 基准类型: 过程 产出 (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 流：Trimming and conditioning 拒收物（`conditioning_rejects`）

记录 修剪物med, damaged, diseased, overmature, or otherwise 拒收物ed material removed during 分级 and conditioning, with its destination.

- 选定 流: 洋蓟 修整 and conditioning 拒收物
- 流 属性 / 单位: 质量 / kg wet material
- 数量规则: Weigh 拒收物 by batch and reconcile them with received 花蕾 and 商品 gate 产出.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟 at the 声明的 gate
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_postharvest_records`
- 来源: `ucanr-artichoke-cultural-tips-2026`
- 数量范围: Conditioning-拒收物 screen
  - 数量范围 role: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: percent of received 花蕾 质量
  - 基准: 分级, 修整, and quality-损失 reconciliation
  - 基准类型: 过程 产出 (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 流：Wash 水 and conditioning waste水（`conditioning_wastewater`）

记录 waste水 or spent wash 水 that leaves the conditioning 过程 as a distinct waste stream and 记录 treatment, discharge, or reuse.

- 选定 流: 洋蓟 wash 水 and waste水
- 流 属性 / 单位: 体积 or 质量 / m3 or kg
- 数量规则: 记录 discharged or reused 数量 from the batch 水 balance; do not count 水 retained in product as waste水.
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟 at the 声明的 gate
- 基准类型: 过程 产出 (`process_output`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_postharvest_records`
- 来源: `ucanr-artichoke-cultural-tips-2026`

##### 基本流

#### 输出

##### 产品流

###### 流：新鲜 洋蓟 at the 声明的 gate（`fresh_artichokes_gate_output`）

记录 商品 新鲜 洋蓟 花蕾 that meet the 声明的 等级 and product-state 限定信息 at the farm or 包装场 gate.

- 选定 流: 新鲜 洋蓟 at 声明的 gate
- 流 属性 / 单位: 质量 / kg wet 洋蓟
- 数量规则: 使用 final scale and lot records; normalize all foreground 投入s and 损失es to 1,000 kg of this gate 产出.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 1,000 kg 商品 新鲜 洋蓟 at 声明的 gate
- 基准类型: 参考 流 (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_gate_output_records`
- 来源: `ucanr-artichoke-cultural-tips-2026`

##### 废物流

###### 流：Final gate 拒收物 and handling 损失（`final_gate_rejects`）

记录 material 拒收物ed after conditioning or at dispatch and keep its destination 分开 from 田间 残体 and conditioning 拒收物 already recorded.

- 选定 流: Final 洋蓟 拒收物 and handling 损失
- 流 属性 / 单位: 质量 / kg wet material
- 数量规则: Reconcile received material, gate 产出, final 拒收物, and measured handling 损失 in the dispatch lot.
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: per 1,000 kg 商品 新鲜 洋蓟 at the 声明的 gate
- 基准类型: 参考 流 (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_gate_output_records`
- 来源: `ucanr-artichoke-cultural-tips-2026`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源_ids |
| --- | --- | --- | --- |
| `allocation_single_crop_cycle` | shared 田间, bed, 设施单元, or 多年生 植株 | Attribute 作物周期 or 生产-year 投入s to 洋蓟 使用 the recorded 面积, 植株, dates, and 商品 产出; do not allocate to another crop or year without its own records. | `ucanr-artichoke-production-1997` |
| `allocation_perennial_stand` | 多年生 洋蓟 建植, cutback, dormancy, and regrowth | Disclose 植株 age and assign 建植 or shared 植株 burdens across the 声明的 生产 years 使用 a 记录ed attribution rule; do not silently assign all 植株 建植 to one 采收 year. | `ucanr-artichoke-cultural-tips-2026` |
| `allocation_residue_fate` | crop 残体, 田间 损失, 拒收物, and 修剪物 | Do not assign a co-product credit to 残体 or 拒收物 unless a 记录ed recipient, 数量, and intended use exists; otherwise retain the burden with 洋蓟 生产 and report the fate. | `ucanr-artichoke-weed-management-2005` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | 过程_id | 流_role | record_type | raw_田间s | collection_method | 单位 | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting material and 建植 投入s | planting-material invoice, lot record, and 建植 log | lot; material type; viable 数量; 田间 or bed; date; product 质量; 养分 amendment | retain supplier record and 田间 建植 record | seed, plant, 冠芽, 分株, kg product, kg 养分 | each 建植 campaign and application | full represented 作物周期 or 生产 year | each 田间, bed, 设施单元, or 多年生 植株 | sum by campaign and normalize to 商品 产出 | supplier lot trace, application record, and 植株 reconciliation |
| `cp_irrigation_records` | `crop_establishment`; `crop_management` | crop 灌溉 | meter, pump, controller, or 水-balance record | 来源; meter start and end; event date; 面积; method; rainfall adjustment | meter reading or 记录ed 水-balance calculation | m3 | each event or meter period | full represented 作物周期 or 生产 year | each 田间, bed, 设施单元, or 植株 | sum delivered 灌溉 by 周期, year, and 来源 | calibrated meter or 记录ed balance 投入s |
| `cp_field_energy_records` | `crop_establishment`; `crop_management` | mobile machinery 燃料 and 田间 电力 | 燃料 invoice, equipment activity log, and 电力 meter | 燃料 or 电力; equipment; operation; 田间; date; allocation basis | supplier record plus equipment or meter log | L, kg, MJ, or kWh | each re燃料ling, operation, or meter period | full represented 作物周期 or 生产 year | each 洋蓟 生产 单位 | allocate shared operations by 面积, hours, 流, or throughput | invoice, equipment log, meter record, and allocation calculation |
| `cp_nutrient_records` | `crop_establishment`; `crop_management` | 养分 投入s and nitrogen basis | 养分 plan, supplier invoice, and application log | product; 养分 concentration; date; 面积; 数量; method; soil test | reconcile product records with 田间 application records | kg product and kg 养分 | each application | full represented 作物周期 or 生产 year | each 洋蓟 生产 单位 | sum 养分 质量 by 周期 or year and 声明的 养分 basis | soil test, label or supplier specification, and application log |
| `cp_crop_protection_records` | `crop_management` | 植保 products | treatment log and supplier record | product; active ingredient; rate; 面积; date; target; equipment | record each application and product lot | kg product or kg active ingredient | each application | full represented 作物周期 or 生产 year | each 洋蓟 生产 单位 | sum by product, active ingredient, and 周期 or year | application log and product label |
| `cp_field_records` | `crop_establishment`; `crop_management` | land occupation, 面积, and 植株 attribution | 田间, bed, protected-单位, or 多年生-植株 register | 面积; 单位; land use; crop dates; 植株 age; bed identifier; protection structure | verify 面积, dates, and 植株 age against 生产 register | ha, m2, days, and years | each 作物周期 or 生产 year | full represented 周期 or year | each 洋蓟 田间, bed, 设施单元, or 植株 | calculate 面积-time and allocate shared 植株 burdens with the 声明的 rule | 田间 map, register, dates, and 植株 evidence |
| `cp_harvest_reconciliation` | `crop_management`; `harvest_and_gate_preparation` | 采收, 田间 残体, and 田间 损失 | 采收 ticket, scale record, and 残体 or 损失 record | 田间; flush; date; gross 质量; 商品 质量; 残体; 损失; destination | weigh each 采收 or use 记录ed lot reconciliation | kg wet material | each 采收 flush or lot | full represented 采收 campaign | each 洋蓟 田间, bed, or 植株 | reconcile gross 采收, 商品 花蕾, 拒收物, 残体, and 损失es | scale record, lot ticket, and destination record |
| `cp_postharvest_records` | `harvest_and_gate_preparation` | 清洗, waste水, 拒收物, and 包装 | conditioning batch and utility records | received 质量; wash 水; discharge; 修剪物; 包装; batch; date; fate | batch record plus meter and 包装 allocation | kg, m3, kWh, and 包装 单位s | each batch or meter period | full represented 采收 campaign | each preparation line or 包装场 | aggregate by batch and normalize to 商品 gate 产出 | meter record, batch sheet, and waste or treatment receipt |
| `cp_postharvest_energy_records` | `harvest_and_gate_preparation` | 冷却, 分级, 清洗, and packing 电力 | 电力 meter and equipment throughput record | meter period; line; kWh; throughput; 冷却 持续时间; batch | meter allocation by throughput or run time | kWh | each meter period or batch | full represented 采收 campaign | each in-scope preparation line | allocate shared 电力 by throughput and reconcile to batch 产出 | meter data and allocation calculation |
| `cp_packaging_records` | `harvest_and_gate_preparation` | 一次包装 | 包装 specification, bill of materials, and count record | material; 单位 质量; 单位s; reuse status; batch; 产出 质量 | 包装 count and specification reconciliation | kg material and 单位s | each 包装 lot or batch | full represented 采收 campaign | each preparation line | sum 包装 material per gate 产出 and disclose reuse | supplier specification, count sheet, and reuse declaration |
| `cp_gate_output_records` | `harvest_and_gate_preparation` | 商品 产出 and final 拒收物 | dispatch scale, lot record, and 拒收物 record | lot; date; gate; packed 质量; 等级; 拒收物; destination; gate state | final scale and lot reconciliation | kg wet 洋蓟 | each dispatch lot | full represented 采收 campaign | 声明的 gate | sum 商品 产出 and final 拒收物 streams; normalize to 1,000 kg | calibrated scale or lot record and 等级 record |

### 计算规则

| rule_id | 适用对象 | Formula or rule | 投入s | 产出 | 来源_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_mass` | 肥料, 粪肥, 堆肥, and amendment rows | Product 质量 multiplied by the 记录ed 养分 fraction; retain original product 质量 and 养分 basis. | product invoice; 养分 concentration; application record | kg N, kg P2O5, or kg K2O by 周期 or year | `ucanr-artichoke-cultural-tips-2026` |
| `calc_crop_cycle_normalization` | all 作物周期 and 生产-year 投入s | Crop-周期 or 生产-year 数量 divided by 商品 新鲜 洋蓟 质量 and multiplied by 1,000 kg. | 投入 record; 商品 gate 产出 | normalized 数量 per 1,000 kg 产出 |  |
| `calc_perennial_attribution` | 多年生 植株 建植, cutback, and regrowth | Apply the 记录ed 植株-age or 生产-year attribution rule to shared 植株 投入s, then reconcile each year to its 商品 产出. | 植株 register; dates; 投入 records; 一年生 产出 | 生产-year 数量 | `ucanr-artichoke-cultural-tips-2026` |
| `calc_area_time` | land occupation | 生产 面积 multiplied by represented 作物周期 or 生产-year 持续时间; disclose protected 面积 treatment. | 面积 register; crop or 生产 dates | 面积-time 数量 | `ucanr-artichoke-production-1997` |
| `calc_nitrogen_emission` | direct soil nitrous oxide and ammonia | Apply the 选定 IPCC-compatible factor to eligible 养分 投入s and 声明的 soil or climate method; 记录 factors in the dataset. | 养分 records; method choice; soil or climate parameters | kg N2O or kg NH3 emitted | `ipcc-2019-refinement-nitrogen` |
| `calc_nitrate_loss` | nitrate to 新鲜水 | Calculate from eligible nitrogen surplus and 选定 site or method factor; do not infer 损失 from purchase alone. | 养分 records; surplus calculation; factor | kg NO3- emitted | `ipcc-2019-refinement-nitrogen` |
| `calc_gate_mass_balance` | 采收 and gate preparation | Received 花蕾 质量 equals 商品 gate 产出 plus 田间 or conditioning 拒收物, 残体, waste水-related solids, and 记录ed handling 损失 within measurement uncertainty. | 采收 tickets; conditioning records; dispatch and 拒收物 records | reconciled 质量 balance | `ucanr-artichoke-cultural-tips-2026` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | 证据 |
| --- | --- | --- | --- |
| `quality_identity` | all 流 and product records | Declare 洋蓟 form, cultivar group, 一年生 or 多年生 路线, 植株 age where relevant, gate, 花蕾 成熟度 and 等级, wash or 冷却 state, and 包装状态; resolve platform identities during foreground dataset construction where 必需. | lot record, product description, and 参考-流 限定信息 |
| `quality_measurement` | 投入s and 产出s | Prefer calibrated meters, scales, supplier invoices, 养分 plans, and application logs; 记录 estimation and allocation methods where direct measurement is unavailable. | meter calibration, scale record, invoice, or calculation sheet |
| `quality_temporal` | 作物周期 or 生产-year inventory | Cover the full represented 建植, active management, cutback or dormancy where applicable, 采收 campaign, and gate preparation period. | 建植 dates, application log, 灌溉 records, 采收 tickets, and dispatch records |
| `quality_completeness` | 作物周期 or 生产-year balance | Reconcile planting material, 养分s, 灌溉, 能源, 植保, gross 花蕾, 商品 产出, 残体, 拒收物, waste水, and 包装 streams. | 作物周期 or 生产-year 投入 and 质量 reconciliation |
| `quality_disclosure` | dataset metadata | Disclose 一年生 or 多年生 路线, 植株 age, 灌溉 来源, 养分 basis, 植保 products, 采收 flushes, 清洗, 冷却, 包装, and 残体 or 拒收物 destination. | dataset metadata and supporting records |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | 参考 流 and gate 产出 | The 声明的 参考 产出 must be 商品 新鲜 洋蓟 花蕾 at the 声明的 gate and use 质量 in kg; opened 流ers, frozen, canned, cooked, or retail products are outside this PCR. | `ucanr-artichoke-cultural-tips-2026` |
| `validate_crop_cycle_dates` | 建植, management, 采收, and gate preparation | 建植, applications, 灌溉, cutback or dormancy, 采收 flushes, conditioning, and gate 产出 must fall within the 声明的 作物周期 or 生产 year or be explicitly attributed to it. | `ucanr-artichoke-production-1997`; `ucanr-artichoke-cultural-tips-2026` |
| `validate_nutrient_basis` | 养分 投入s and emissions | Product 质量, 养分 concentration, 养分 basis, and emission calculation method must be present and internally consistent; do not count product 质量 and 养分 质量 as the same exchange. | `ucanr-artichoke-cultural-tips-2026`; `ipcc-2019-refinement-nitrogen` |
| `validate_mass_balance` | 采收 and gate preparation | Gross 采收 and received 质量 must reconcile with 商品 产出, 拒收物, 残体s, waste水-related solids, and 损失es within the 声明的 measurement uncertainty. | `ucanr-artichoke-cultural-tips-2026` |
| `validate_flow_set_resolution` | parameterized rows | During foreground data generation, each parameterized row must resolve to a verified UUID compatible with its specified 流 Set group, 属性, 单位, and 地理范围; otherwise retain an explicit coverage finding. |  |
| `validate_qualifiers` | 参考 流 and dataset metadata | 必需 限定信息 must be present, including 一年生 or 多年生 路线, 植株 age where relevant, 花蕾 成熟度 and 等级, 采收 flushes, gate, 清洗, 冷却, 包装, and 残体 or 拒收物 fate. | `ucanr-artichoke-cultural-tips-2026` |

## 10. 发布数据集画像

| 田间 | Value |
| --- | --- |
| dataset_role | foreground agricultural 生产 dataset for 新鲜 洋蓟 at a 农场门 or 包装场 gate |
| downstream_use | secondary_dataset for 新鲜-洋蓟 product systems; background_dataset only when the provider explicitly publishes a representative regional or market-average dataset with the 必需 metadata |
| allowed_use | Comparative product studies, 作物周期 or 生产-year inventory modelling, farm or 包装场 improvement, and 声明的 新鲜-洋蓟 supply-chain assessments within the stated 地理范围 and product state |
| 排除_use | Canned, frozen, dried, marinated, cooked, retail, consumption, seed-生产, or unqualified vegetable substitution; do not extrapolate across 一年生 and 多年生 路线s without scenario disclosure |
| 必需_metadata | product form; cultivar group; 一年生 or 多年生 路线; 植株 age; 地理范围; dates or 生产 year; 采收 flushes; gate; yield; 灌溉 来源 and 数量; 养分 basis; 植保 program; 清洗 and 冷却; 包装; 残体 and 拒收物 fate |
| 必需_quality_disclosure | temporal coverage, site scope, measurement versus 计算值s, 植株 attribution and allocation rules, 质量-balance result, platform identity resolution status, and all provisional estimates requiring replacement by 前景记录s |
| update_trigger | change in crop 路线, 植株 age, 灌溉 method, 养分 program, 植保 program, 采收 form, wash or 冷却 line, 包装 format, gate definition, or evidence that changes material quantities or boundary rules |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ucanr-artichoke-production-1997` | literature | University of California Agriculture and Natural Resources, *Artichoke Production in California*, ANR Publication 7221, https://my.ucanr.edu/repository/a/?a=54030 | production route, perennial and annual management, irrigation, and field boundary context |
| `ucanr-artichoke-cultural-tips-2026` | official_guidance | UC Statewide IPM Program, *Cultural Tips for Growing Artichoke*, https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-artichoke/ | establishment, nutrient practice, irrigation principles, harvest maturity, product qualifiers, and gate conditioning context |
| `ucanr-artichoke-weed-management-2005` | official_guidance | UC Statewide IPM Program, *Agriculture: Artichoke Pest Management Guidelines — Integrated Weed Management*, https://ipm.ucanr.edu/agriculture/artichoke/integrated-weed-management/ | annual and perennial stand management, weed control, cutback, residue, and crop-protection context |
| `shinohara-artichoke-irrigation-nitrogen-2011` | literature | Shinohara, Agehara, Yoo, and Leskovar, *Irrigation and Nitrogen Management of Artichoke: Yield, Head Quality, and Phenolic Content*, HortScience 46(3), 377–386, https://doi.org/10.21273/HORTSCI.46.3.377 | irrigation and nitrogen treatment ranges and yield-quality relationship |
| `ipcc-2019-refinement-nitrogen` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, https://www.ipcc.ch/report/2019-refinement-to-the-2006-ipcc-guidelines-for-national-greenhouse-gas-inventories/ | managed-soil nitrogen-emission method and calculation rules |
