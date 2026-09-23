---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.forage-products-n-e-c
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 未另分类的饲草产品

## 1. 范围与适用性

本 PCR 适用于一种明确命名、以饲草为生产目的的 CPC 01919 作物或产品，例如饲用甜菜、胡萝卜、芜菁、高粱、三叶草、羽衣甘蓝、羽扇豆、红豆草、野豌豆、干草或饲用芜菁甘蓝。边界从作物建植和生产开始，经过收获，可选择延伸至首次萎蔫、干燥、切碎、打捆、制粒、清理或分级后的交付点。

不包括玉米青贮/饲草、苜蓿、谷物秸秆或颖壳、并非为饲草生产的作物、复合饲料或配方饲料、放牧服务，以及首次调制之后的饲料制造。每个数据包只代表一种指定产品及一个交付状态。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.forage-products-n-e-c |
| classification_refs | CPC 3.0: 01919（未另分类的饲草产品） |
| covered_products | 一种明确命名、以饲草为目的的作物或产品，在收获或首次调制交付点 |
| excluded_products | 玉米饲草；苜蓿；谷物秸秆和颖壳；非饲草作物；复合/配方饲料；放牧服务；后续饲料制造 |
| representative_product | 在声明含水率或干物质状态下的一种指定饲草产品 |
| production_route | 建植与管理生产 → 收获/收集 → 可选首次调制 → 交付 |
| market_state | 收获态新鲜饲草，或声明为萎蔫、干燥、切碎、打捆、制粒、清理或分级的首次调制饲草 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在所选交付点的一种指定饲草产品 |
| How much | 1 kg 净产品 |
| How well | 声明物种/产品、植物部位、形态、等级、含水率或干物质，以及调制状态 |
| How long or cycle | 声明地块和作物期；多年生或多期投入保持期间关联 |
| reference_flow_link | 下方单一参考流对象 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 指定饲草产品（UUID 未解析） |
| Reference flow property | Mass（UUID 未解析） |
| Reference unit group | Units of mass（UUID 未解析） |
| Reference unit | kg |
| Required qualifiers | 物种/产品；植物部位；收获形态；含水率或干物质；等级；作物期；生产系统；调制状态；交付点 |

## 4. 计量与单位规则

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass（UUID 未解析） | kg | 使用去皮重后的净质量；同时声明含水率或干物质基准。 |
| `moisture_conversion` | 新鲜、萎蔫和干燥产品 | Mass | kg | 仅在记录配对含水率、测定方法和换算公式时进行湿基/干基换算。 |
| `area_time` | 土地占用 | Area*time | m2·year | 根据地块面积和实际占用时长计算，并按同一作物期产出归一化。 |
| `transport_work` | 道路货运 | Transport work | t·km | 净运输吨数乘以满载公里；返空处理必须单独披露。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定地块上明确命名的饲草作物在建植或本报告作物期开始时的状态 |
| starting_condition_role | 前景作物生产的起始状态；上游投入使用独立数据集 |
| product_classification_scope | 一种 CPC 01919 指定饲草产品，不跨越被排除的相邻类别 |
| recursive_input_rule | 若同类别饲草作为种植或调制投入，作为已交付的上游产品数据集记录，并按来源、状态和交付点区分；不得递归重建同一产品系统 |
| upstream_dataset_requirement | 种子、肥料、农药、能源、水和服务投入使用适合其供应边界的独立上游数据 |
| disclosure | 声明物种/产品、地块、作物期、生产系统、收获方法、含水率、形态、等级、首次调制作业和所选交付点 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_named_product | Product scope | Model one named forage species/product and plant part at one declared state and gate. Exclude maize forage, alfalfa, cereal straw or husks, crops not grown for forage, compound feed and grazing services. | unsd-cpc-01919 |
| boundary_gate_choice | Reference gate | Select either harvest handoff or the first declared conditioning handoff. If conditioning is selected, harvested forage is an intermediate and only the conditioned product is the reference output. | fao-grassland-forage |
| boundary_conditional_conditioning | Primary conditioning | Include only operations actually performed before the selected gate; identify the raw input state, conditioned output state, service inputs, residues and rejects. | fao-grassland-forage |
| boundary_periods_assets | Periods and shared assets | Retain establishment, annual or multi-year crop periods and shared machinery or facility use; attribute each burden once to its actual consuming node and period. | iso-14044-allocation |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| forage_crop_production | 饲草作物建植与生产管理 | required | 栽培饲草必须纳入；田间生产在可收获作物交接点结束。 | 建植并管理指定饲草作物，报告可收获生物量。 | 按地块和作物期计量的可收获饲草质量。 |
| forage_harvest | 饲草收获与田间收集 | required | 割草、切割、起根或其他从生产环境中移除的作业必须纳入。 | 独立记录收获责任，并核对收集产品、田间残留物和损失。 | 离开收获过程的指定饲草产品净质量。 |
| primary_forage_conditioning | 可选的首次饲草调制 | conditional | 仅当所选交付点之前发生萎蔫、干燥、切碎、打捆、制粒、清理或分级时纳入。 | 将收获饲草转为一种明确的首次调制状态，不包括饲料配方加工。 | 在声明含水率、形态和等级下的调制饲草净质量。 |

### 过程: 饲草作物建植与生产管理 (`forage_crop_production`)

建植并管理指定饲草作物，报告可收获生物量。

#### 投入

##### 产品流

###### 种子或繁殖材料 (`propagation_material`)

记录转入指定饲草作物的种子、根冠、插条或其他种植材料。

- 选定流: Named-crop propagation material; UUID unresolved until species and form are known
- 流属性/单位: Mass / kg or verified count unit
- 数量规则: Measured purchased or internally transferred planting material
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg 参考饲草，并保留地块和作物期关联
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_propagation`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 0.5
  - 单位: kg/kg reference forage
  - 基准: 种植材料按参考饲草归一化的宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 合并的肥料与养分改良剂 (`nutrient_inputs`)

本过程所有矿质肥料、有机肥料和养分改良剂均使用这一张卡；在前景记录中保留每种实际产品及养分品位。

- 选定流: Actual fertilizer and nutrient-supply products expanded from field records
- 流属性/单位: Product-specific property and native unit
- 绑定: parameterized
- Flow Set: flow-set.agricultural-nutrient-supply
- Flow Set 版本: 0.3.0
- 数量规则: Measured mass by actual product, composition, field, date and crop period
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 按地块和作物期记录，再归一化至每 1 kg 参考饲草
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_nutrients`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 2
  - 单位: kg product/kg reference forage
  - 基准: 全部养分产品的宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 作物保护产品 (`crop_protection_inputs`)

仅记录实际施用的产品，并保留商品名、有效成分、处理面积和日期。

- 选定流: Actual crop-protection product; UUID unresolved until product identity is known
- 流属性/单位: Product-specific property and native unit
- 数量规则: Applied amount reconciled to purchase and application logs
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg 参考饲草
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crop_protection`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 0.1
  - 单位: kg product/kg reference forage
  - 基准: 施用作物保护产品的宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 灌溉用水 (`irrigation_water`)

记录灌溉供应水量；降雨属于背景信息，不作为产品流投入。

- 选定流: Irrigation water selected from the actual source record
- 流属性/单位: Volume / m3 preferred
- 绑定: parameterized
- Flow Set: flow-set.water-use
- Flow Set 版本: 0.2.0
- Flow Set 组: irrigation-water
- 数量规则: Metered or supplier-recorded irrigation volume
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按每公顷和作物期记录，再归一化至参考饲草产出
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_irrigation`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 15000
  - 单位: m3/ha·crop period
  - 基准: 灌溉水量筛选区间
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 田间能源载体与公用工程 (`production_energy`)

记录种植、灌溉泵送和田间作业实际使用的电力与燃料。

- 选定流: Energy carriers actually consumed in forage production
- 流属性/单位: Carrier-specific property and native unit
- 绑定: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set 版本: 0.2.0
- 数量规则: Metered electricity and reconciled fuel consumption by operation
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 按作物期记录并归一化至每 1 kg 参考饲草
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_production_energy`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 3
  - 单位: kWh-equivalent/kg reference forage
  - 基准: 生产能源宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 农业用地占用 (`land_occupation`)

计算声明作物期的占地面积与时间。

- 选定流: Agricultural land occupation elementary flow; UUID unresolved
- 流属性/单位: Area*time / m2·year
- 数量规则: Field area multiplied by occupation duration
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按作物期并归一化至参考产出
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_land_history`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.01
  - 上限: 1000
  - 单位: m2·year/kg reference forage
  - 基准: 面积时间宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 土地转化 (`land_transformation`)

仅记录有证据且归属于声明生产系统的土地覆盖转化。

- 选定流: Land transformation elementary flow by prior and new cover; UUID unresolved
- 流属性/单位: Area / m2
- 数量规则: Mapped transformed area allocated once over the declared attribution period
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 在声明归属期内每 1 kg 参考饲草
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_land_history`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1000
  - 单位: m2/kg reference forage
  - 基准: 土地转化宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 产出

##### 产品流

###### 可收获饲草生物量 (`harvest_ready_forage`)

记录交接至收获过程的指定作物及植物部位，不得同时计为最终参考产品。

- 选定流: Named harvest-ready forage biomass; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured net harvest-ready mass at recorded moisture
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 按地块和作物期
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_lot`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.01
  - 上限: 100
  - 单位: kg/m2 crop area
  - 基准: 可收获生物量产量的宽泛路线筛选区间
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 移除的杂草与非目标生物量 (`production_residue_removed`)

记录从田间移除的生物量，并按实际去向分类。

- 选定流: Removed non-target biomass; UUID unresolved
- 流属性/单位: Mass / kg dry matter preferred
- 数量规则: Measured or sampled removed biomass by destination
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 可收获饲草
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residues`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: kg/kg harvest-ready forage
  - 基准: 残留物宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 土壤直接氧化亚氮 (`soil_n2o`)

仅依据选定清单方法和有记录的氮活动数据计算直接 N2O。

- 选定流: Nitrous oxide to air; UUID unresolved pending exact compartment verification
- 流属性/单位: Mass / kg N2O
- 数量规则: Calculated from collected nitrogen inputs and the declared method
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考饲草
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_nutrients`
- 来源: `ipcc-2019-managed-soils`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 0.1
  - 单位: kg N2O/kg reference forage
  - 基准: 方法计算结果的宽泛 QA 筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程: 饲草收获与田间收集 (`forage_harvest`)

独立记录收获责任，并核对收集产品、田间残留物和损失。

#### 投入

##### 产品流

###### 可收获饲草批次 (`harvest_ready_batch`)

以相同物种、地块、作物期和批次标识将生产产出转入收获过程。

- 选定流: Named harvest-ready forage biomass; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Inter-process transferred net mass
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个收获批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_lot`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.01
  - 上限: 1000000
  - 单位: kg/harvest lot
  - 基准: 批量规模筛选区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 收获机械能源 (`harvest_energy`)

记录收获过程内割草、切割、起根、收集或打捆消耗的电力或燃料。

- 选定流: Energy carriers actually consumed by harvest equipment
- 流属性/单位: Carrier-specific property and native unit
- 绑定: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set 版本: 0.2.0
- 数量规则: Metered or reconciled energy by harvest operation
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg 收获饲草
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_energy`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 2
  - 单位: kWh-equivalent/kg harvested forage
  - 基准: 收获能源宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 收获的指定饲草产品 (`harvested_forage`)

将此预期产出记录为收获交付点合格的指定饲草；若选择初级调制交付点，则将其作为中间产品。

- 选定流: Named harvested forage product; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured net accepted mass at declared moisture
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个收获批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_lot`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1.5
  - 单位: kg/kg harvest-ready batch
  - 基准: 收获质量平衡 QA 区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 可销售的较低等级饲草 (`lower_grade_forage`)

仅当较低等级产品具有可证实的预定用途和交接点时，将此预期产出单独记录。

- 选定流: Named lower-grade forage product; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured mass by grade and destination
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个收获批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grade_disposition`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg harvest-ready batch
  - 基准: 质量分数 QA 校验区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 收获剔除物与田间损失 (`harvest_rejects`)

记录剔除、掉落或腐败材料及其田间保留、回收或丢弃去向。

- 选定流: Harvest reject or loss material; UUID unresolved
- 流属性/单位: Mass / kg dry matter preferred
- 数量规则: Measured or sampled mass by exclusive destination
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 可收获批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grade_disposition`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg harvest-ready batch
  - 基准: 质量分数 QA 校验区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 归还土壤的饲草作物残留物 (`residue_to_soil`)

记录有意留在或归还田间的作物生物量，不得将其作为可销售产品。

- 选定流: Biogenic crop residue to soil; UUID unresolved
- 流属性/单位: Mass / kg dry matter
- 数量规则: Sampled dry matter partitioned to the field destination
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 收获饲草
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_residues`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 10
  - 单位: kg dry matter/kg harvested forage
  - 基准: 残留物还田宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程: 可选的首次饲草调制 (`primary_forage_conditioning`)

将收获饲草转为一种明确的首次调制状态，不包括饲料配方加工。

#### 投入

##### 产品流

###### 原始收获饲草批次 (`raw_forage_batch`)

接收收获产品，并保留物种、植物部位、含水率、形态和批次标识。

- 选定流: Named harvested forage product; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured receiving mass and moisture
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个调制批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_batch`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.01
  - 上限: 1000000
  - 单位: kg/conditioning batch
  - 基准: 调制批量规模筛选区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 调制过程用水 (`conditioning_water`)

记录清洗、润湿或其他声明调制作业的新增水；循环水不得重复计入新增投入。

- 选定流: Process water selected from the actual source record
- 流属性/单位: Volume / m3 preferred
- 绑定: parameterized
- Flow Set: flow-set.water-use
- Flow Set 版本: 0.2.0
- Flow Set 组: process-water
- 数量规则: Metered fresh water by conditioning batch
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 调制饲草
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_water`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: m3/t conditioned forage
  - 基准: 过程用水宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 调制能源载体与公用工程 (`conditioning_energy`)

记录实际发生的萎蔫辅助、干燥、切碎、打捆、制粒、清理或分级能源。

- 选定流: Energy carriers actually consumed in first conditioning
- 流属性/单位: Carrier-specific property and native unit
- 绑定: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set 版本: 0.2.0
- 数量规则: Metered or reconciled consumption by equipment and batch
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg 调制饲草
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_energy`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: kWh-equivalent/kg conditioned forage
  - 基准: 调制能源宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 田间至调制点的道路运输服务 (`field_transport`)

仅当田间至调制点运输位于所选边界内时记录购入道路货运服务；避免与自有车辆燃料重复。

- 选定流: Road freight transport service resolved from route records
- 流属性/单位: Transport work / t·km
- 绑定: parameterized
- Flow Set: flow-set.transport-service
- Flow Set 版本: 0.2.0
- Flow Set 组: road-freight-transport
- 数量规则: Net transported tonnes multiplied by loaded kilometres
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准: 每个原始饲草批次
- 基准类型: 运输服务 (`transport_service`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_transport`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1000
  - 单位: t·km/t raw forage
  - 基准: 道路满载运输距离筛选区间
  - 基准类型: 运输服务 (`transport_service`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 外部废水处理服务 (`wastewater_treatment`)

仅对转交有记录服务商的废水记录外部处理服务。

- 选定流: Wastewater treatment service resolved from provider and route records
- 流属性/单位: Volume / m3 or provider-native service unit
- 绑定: parameterized
- Flow Set: flow-set.waste-treatment-service
- Flow Set 版本: 0.2.0
- Flow Set 组: wastewater-treatment-service
- 数量规则: Treated quantity reconciled to generated wastewater and invoice
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准: 每 1 kg 调制饲草
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wastewater`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: m3/t conditioned forage
  - 基准: 处理服务 QA 筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 首次调制参考饲草 (`conditioned_forage`)

将此预期产出记录为声明含水率、形态、等级和初级调制交付点下的一种指定饲草产品。

- 选定流: Named first-conditioned forage product; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured net accepted mass at declared moisture
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个调制批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_batch`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1.5
  - 单位: kg/kg raw forage input
  - 基准: 调制质量平衡 QA 区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 较低等级调制饲草 (`conditioned_lower_grade`)

将此预期产出作为较低等级产品，与剔除物或废物分开报告。

- 选定流: Named lower-grade conditioned forage; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured mass by grade and destination
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个调制批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grade_disposition`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg raw forage input
  - 基准: 质量分数 QA 校验区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 调制剔除物与损失 (`conditioning_rejects`)

按互斥去向记录杂质、腐败生物量、细料及不合格材料。

- 选定流: Conditioning reject material; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured reject mass by batch and destination
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 原始饲草投入
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grade_disposition`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg raw forage input
  - 基准: 质量分数 QA 校验区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 调制废水 (`conditioning_wastewater`)

将产生的废水与购入处理服务分开记录，并标明去向。

- 选定流: Forage-conditioning wastewater; UUID unresolved
- 流属性/单位: Volume / m3 or Mass / kg
- 数量规则: Metered or calculated generated quantity by batch and route
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 调制饲草
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wastewater`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: m3/t conditioned forage
  - 基准: 废水 QA 筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 调制粉尘排放至空气 (`conditioning_dust`)

仅记录实测或按方法计算的颗粒物排放，并保留粒径级别和接收环境。

- 选定流: Particulate matter to air by verified size fraction; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured or method-calculated emitted particulate mass
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg 调制饲草
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_energy`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 0.1
  - 单位: kg/kg conditioned forage
  - 基准: 颗粒物排放宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_outputs | Multiple intended outputs | Use subdivision first. If shared burdens remain, use a documented causal physical relation where defensible; otherwise document the selected allocation basis and sensitivity. Waste and field residue without intended product function receive no co-product allocation. | iso-14044-allocation |
| allocation_periods | Establishment and productive periods | Attribute establishment or multi-year burdens across declared productive outputs using recorded production history or an explicit forecast, and prevent duplicate attribution to each year. | iso-14044-allocation |
| allocation_rejects | Lower grades, rejects and rework | Trace each lot to accepted product, lower grade, rework, recovery, soil return or discard. Count accepted material at its final handoff and include rework inputs once. | iso-14044-allocation |
| allocation_shared_assets | Shared fields, machinery and conditioning assets | Prefer metered use or operating time; otherwise use a documented physical driver. Enumerate consuming nodes and periods and prevent duplicate burdens. | iso-14044-allocation |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_propagation | forage_crop_production | propagation_material | supplier or transfer record | species, variety, form, amount, date, field, source | Reconcile invoices and internal transfers | kg or count | each planting | all establishment events | declared field | sum by product, field and crop period | invoice, lot and unit checks |
| cp_nutrients | forage_crop_production | nutrient_inputs; soil_n2o | application log and invoice | product, mass, nutrient grade, N form, field, date, crop period | Reconcile purchases, application logs and composition | kg product and kg nutrient | each application | all crop periods | declared fields | retain each product under one consolidated card and calculate nutrients | invoice, application calibration and method record |
| cp_crop_protection | forage_crop_production | crop_protection_inputs | application and supplier record | product, active ingredient, amount, area, date, target | Reconcile applied quantity with purchases | kg product | each application | all crop periods | declared fields | sum actual applications by lot and period | label, invoice and operator log |
| cp_irrigation | forage_crop_production | irrigation_water | meter or supplier record | source, volume, date, area, field, crop period | Read calibrated meter or reconcile invoices | m3 | each event or billing period | each crop period | field and water source | sum by field and period; normalize to output | meter calibration and invoice |
| cp_production_energy | forage_crop_production | production_energy | meter, receipt and equipment log | carrier, amount, unit, operation, date, field, shared use | Reconcile energy and operating records | native carrier unit | each operation | each crop period | site and equipment | sum by carrier; allocate shared use by measured operation | meter, invoice and equipment log |
| cp_land_history | forage_crop_production | land_occupation; land_transformation | field and geospatial record | boundary, area, dates, prior cover, crop period | Reconcile maps with dated land evidence | ha, ha·year | each crop period and conversion | full attribution period | declared fields | calculate area-time and allocate transformation once | map, register and dated evidence |
| cp_harvest_lot | forage_crop_production; forage_harvest | harvest_ready_forage; harvest_ready_batch; harvested_forage | lot and scale record | species, plant part, field, dates, gross, tare, net, moisture, destination | Weigh each lot and match handoffs | kg and moisture | each lot | each harvest | field and receiving node | reconcile inter-process transfers without duplicate final output | scale calibration, lot and moisture record |
| cp_residues | forage_crop_production; forage_harvest | production_residue_removed; residue_to_soil | sample and disposition record | biomass type, wet/dry mass, field, period, destination | Sample or weigh and document destination | kg dry matter | each crop period | all included periods | field and residue type | partition among soil return, intended output and removal | sampling, dry-matter and destination evidence |
| cp_harvest_energy | forage_harvest | harvest_energy | fuel, meter and machinery log | carrier, amount, equipment, operation, field, lot | Reconcile consumption to harvest lots | native carrier unit | each operation | each harvest | equipment and field | sum by carrier and normalize to accepted output | invoice, meter and machinery log |
| cp_grade_disposition | forage_harvest; primary_forage_conditioning | lower_grade_forage; harvest_rejects; conditioned_lower_grade; conditioning_rejects | grade, scale and destination record | identity, grade, mass, moisture, intended use, destination, lot | Inspect and weigh each grade and destination | kg | each lot | each harvest or conditioning campaign | lot and handoff | mutually exclusive accepted, lower grade, rework and waste partition | grade sheet, scale and disposition evidence |
| cp_conditioning_batch | primary_forage_conditioning | raw_forage_batch; conditioned_forage | receiving and output lot record | input/output mass, moisture, species, form, grade, route, lot | Match intake and output lots and measure moisture | kg and moisture | each batch | included operations | conditioning site | reconcile products, rejects, removed water and loss | calibrated scale, moisture and lot balance |
| cp_conditioning_water | primary_forage_conditioning | conditioning_water | meter or batch record | source, fresh volume, recirculation, batch, date | Meter or reconcile tank and supplier records | m3 | each batch | wet-conditioning periods | conditioning site | separate fresh from recirculated water | meter/tank calibration and batch log |
| cp_conditioning_energy | primary_forage_conditioning | conditioning_energy; conditioning_dust | meter, fuel and equipment log | carrier, amount, equipment, operation, batch, time, dust measurement | Reconcile measured energy and any emission method to batch | native carrier unit and kg dust | each batch | conditioning campaign | site and equipment | sum by carrier and operation; preserve particulate fraction | meter, invoice, equipment and sampling record |
| cp_transport | primary_forage_conditioning | field_transport | waybill and route record | mass, origin, destination, loaded distance, vehicle, return trip | Reconcile route and mass to lot | t, km and t·km | each transfer | included field-to-site routes | route and lot | tonnes multiplied by loaded kilometres | waybill, route and scale record |
| cp_wastewater | primary_forage_conditioning | wastewater_treatment; conditioning_wastewater | meter, discharge and provider record | volume, batch, operation, destination, provider, route | Meter or reconcile generated and treated quantities | m3 | each batch or billing period | wet-conditioning periods | site and provider | reconcile generation, reuse, discharge and treatment | meter, invoice and treatment evidence |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_reference | All processes | Divide each process exchange by net reference-product mass at the selected gate while retaining crop-period and lot linkage. | Process amount, net reference mass, gate, crop period and lot | Exchange per 1 kg reference forage | mass-balance-identity |
| convert_dry_matter | Fresh, wilted and dried forage | Dry matter = measured wet mass × (1 − moisture fraction on wet basis); inverse conversion requires the target moisture. | Wet mass, moisture test and basis | Dry mass or converted product mass | fao-grassland-forage |
| calculate_n2o | Direct soil N2O | Apply the declared IPCC managed-soils equation and factor to collected N activity data; convert N2O-N to N2O when required by the method. | N inputs, factor, tier, soil and climate fields | kg direct N2O per reference flow | ipcc-2019-managed-soils |
| reconcile_lot | Harvest and conditioning | On one moisture basis, input equals intended outputs plus lower grades, rejects, residues, removed water and measured loss. | Lot masses, grades, moisture and destinations | Reconciled mutually exclusive lot balance | mass-balance-identity |
| road_transport_work | Field-to-conditioner transport | Transport work = net transported tonnes × loaded route kilometres; apply return treatment only when evidenced. | Net mass, loaded distance and return record | t·km by lot | iso-14044-allocation |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_gate | Reference product | Record one species/product, plant part, form, moisture/dry matter, grade, crop period, production system and exclusive gate. | Lot identity, product description and reviewed flow evidence |
| period_coverage | Production periods | Include establishment and productive periods when relevant and retain period-specific yield and attribution records. | Field register, planting/harvest dates and yield history |
| input_completeness | All process inputs | Reconcile propagation material, one consolidated nutrient-card detail, protection products, water, energy, transport and treatment inputs to primary records. | Invoices, logs, meters and Flow Set resolution evidence |
| output_reconciliation | All outputs | Partition accepted product, lower grades, rejects, residues, wastewater and losses into mutually exclusive destinations. | Scale, grade, moisture and disposition records |
| range_replacement | Provisional ranges | Use reasoned ranges only for screening and replace them with product-, region-, technology- and gate-specific evidence before reviewed or active use. | Reviewed records or external quantitative evidence |
| unresolved_identity | UUID-bearing flows | Retain blank UUIDs until one exact product, property, unit group and context are confirmed; do not substitute compound feed, alfalfa or grazing-service identities. | Identity lookup and detail-read audit record |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | Reference product | Require one named forage species/product, plant part or harvested portion, form, moisture or dry-matter state, crop period, grade and selected gate. | unsd-cpc-01919 |
| validate_exclusions | Category boundary | Reject maize forage, alfalfa, cereal straw/husks, non-forage crops, compound feed, mixtures and grazing-service inventories. | unsd-cpc-01919 |
| validate_gate | Process graph | Require one exclusive reference gate and reconcile every inter-process handoff without counting the same material as both intermediate and final product. | fao-grassland-forage |
| validate_mass_moisture | Harvest and conditioning lots | Reconcile inputs, products, lower grades, residues, wastewater, removed moisture and losses on a consistent moisture or dry-matter basis; investigate output above input. | mass-balance-identity |
| validate_flow_sets | Product inputs | Require one set-only agricultural nutrient card in the cultivation process with no group or fixed UUID. Validate water and transport groups and set-level energy against the registry version, then resolve final foreground exchanges from actual records. |  |
| validate_periods | Crop periods | Reconcile establishment and productive periods and ensure shared assets and multi-period burdens are attributed once. | iso-14044-allocation |
| validate_destinations | Grades, rejects and residues | Require mutually exclusive intended-product, lower-grade, rework, recovery, soil-return and waste destinations; do not count rejects as accepted product. | iso-14044-allocation |
| validate_n2o | Direct soil N2O | Require documented nitrogen activity data, selected IPCC equation, factor and tier; keep direct and indirect pathways separate and avoid double counting. | ipcc-2019-managed-soils |
| validate_conditioning | Conditional conditioning routes | Confirm each declared wilting, drying, chopping, baling, pelleting, cleaning or grading operation occurred and has inputs, output state, losses and handoff recorded; omit inactive routes. | fao-grassland-forage |
| validate_ranges | All inventory cards | Check each Range against its amount rule, unit, denominator and route condition. Treat reasoned estimates as replaceable screening values before reviewed or active use. |  |

## 10. 发布数据集配置

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种指定饲草产品的初级前景生产和首次交付数据集 |
| downstream_use | 用于前景过程包及其生命周期模型投影的 secondary_dataset；仅在边界和代表性适合时作为 background_dataset |
| allowed_use | 在声明地点、作物期、生产系统、含水率/干物质、形态和交付点下的一种指定 CPC 01919 饲草 |
| excluded_use | 全部饲草的平均数据；玉米饲草、苜蓿、秸秆/颖壳、复合饲料、放牧服务或后续饲料制造 |
| required_metadata | 物种/产品；植物部位；品种（如已知）；地块和地理；作物期；生产与收获路线；含水率/干物质；形态和等级；交付点；投入记录；调制作业；分配方法 |
| required_quality_disclosure | UUID 缺口；测量和来源覆盖；时期归属；Range 证据等级；水分与质量平衡；共享资产分配；排放方法；地点和年份代表性 |
| update_trigger | 新产品或路线；交付点、形态或水分状态变化；新的已验证参考身份；更新的作物期、分配、排放或调制证据；以评审证据替换暂定 Range |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-01919 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, code 01919, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope and named examples |
| fao-grassland-forage | handbook | FAO, Grassland Index and forage conservation resources, https://www.fao.org/4/x7660e/x7660e00.htm | Forage production, harvest and first-conservation route structure; moisture and dry-matter reporting prompts |
| ipcc-2019-managed-soils | official_guidance | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct N2O calculation and nitrogen activity data |
| iso-14044-allocation | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | Subdivision, co-product attribution and shared burden decisions |
| mass-balance-identity | method_factor | Physical mass-balance identity on a consistent moisture basis | Lot reconciliation and QA; not a product-specific yield factor |
