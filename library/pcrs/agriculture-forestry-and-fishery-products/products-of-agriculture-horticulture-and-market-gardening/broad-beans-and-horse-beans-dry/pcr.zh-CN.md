---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.broad-beans-and-horse-beans-dry
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 干蚕豆和干马豆

## 1. 范围与适用性

本 PCR 适用于在农场门口作为蚕豆、faba bean、field bean 或 horse bean 交付的成熟干燥 *Vicia faba* 籽粒。边界包括冷凉季田间生产、成熟收获、必要的预干、脱粒、清理、条件性水分控制干燥和分级；排除鲜青豆及豆荚、其他干豆类、按种子规格出售的播种用种子、未收获干籽粒的覆盖作物生物质，以及门后运输或加工。

应声明冬播/春播、雨养/灌溉、人工/机械收获、脱粒安排、自然/机械干燥、目标水分、等级、作物周期、场址和报告期。替代路线是相对其父活动的差异，仅可按独立计量批次或有记录的份额并存。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.broad-beans-and-horse-beans-dry |
| classification_refs | CPC 3.0 `01702` Broad beans and horse beans, dry |
| covered_products | mature dry *Vicia faba* grain sold as broad, faba, field, or horse bean |
| excluded_products | green/fresh beans; planting seed sold as seed; other dry pulses; forage, silage, cover crop or green manure; processed bean fractions |
| representative_product | cleaned and graded mature dry *Vicia faba* grain |
| production_route | managed cool-season field production, mature harvest, threshing/cleaning, conditional drying and grading; route deltas are declared from their parent node |
| market_state | harvested grain, unprocessed, at `Production mix, at farm gate`, with moisture, grade and intended food/feed market declared |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | cleaned, graded, mature dry *Vicia faba* grain accepted at farm gate |
| How much | 1,000 kg net grain mass |
| How well | declared moisture and market grade; excludes foreign matter, straw/hulls, shattering loss, downgraded grain, rejects and seed sold for planting |
| How long or cycle | one declared crop cycle and linked conditioning lots |
| reference_flow_link | accepted output of `farm_gate_grading` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Broad beans and horse beans, dry `b9ccab43-8330-44f4-b125-456e97ec6e87` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | *Vicia faba* identity; mature dry grain; production geography; winter/spring crop; rainfed/irrigated; harvest, threshing and drying route; wet-basis moisture; grade; market; accepted, downgraded, rejected, residue and loss quantities; crop cycle; farm-gate hand-off |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted grain | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net grain mass at measured farm-gate moisture; exclude packaging, foreign matter, residues, downgraded grain and rejects. |
| `moisture_conversion` | grain before/after drying | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and % wet basis | Preserve dry matter: `dry matter = wet mass × (1 − moisture fraction)`; convert only from paired mass and moisture observations. |
| `nutrient_products` | all mineral/organic fertilizers and nutrient-bearing amendments | product mass and analysis | kg product and kg nutrient | Collect each product and analysis separately, but use one consolidated nutrient-supply Product-input card per process. |
| `area_yield` | field production | area and accepted grain mass | ha and kg | Calculate yield from cultivated area and accepted grain in the same crop cycle; disclose failed area. |
| `energy_identity` | all energy uses | carrier-specific property | original unit plus MJ or kWh | Preserve carrier, original quantity and conversion basis. |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | prepared field and purchased or retained planting material entering the declared crop cycle |
| starting_condition_role | foreground agricultural start; preceding crop, land occupation and retained-seed origin disclosed when material |
| product_classification_scope | mature dry *Vicia faba* grain represented by CPC 3.0 `01702` |
| recursive_input_rule | retained grain used for sowing is an input from a separately described prior-cycle or seed dataset, not current-cycle reference output |
| upstream_dataset_requirement | supplier/region-specific datasets for planting material, nutrients, crop protection, water and energy; actual identities retained |
| disclosure | site, season, cultivar class, prior crop, sowing, irrigation, management, harvest state, pre-drying, threshing, cleaning, drying, grading, moisture, destinations and hand-off |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_gate` | full route | Include field establishment and management through accepted graded dry grain, including route-specific pre-drying, threshing, cleaning, drying and grading. | `vce-faba-bean-2024`; `fao-grain-postharvest` |
| `boundary_identity` | reference output | Count only mature dry *Vicia faba* grain; exclude green harvest, planting-seed certification, other pulses and downstream processing. | `vce-faba-bean-2024`; `feedipedia-faba-bean` |
| `boundary_harvest_node` | harvest | Keep harvest distinct because standing crop becomes collected material and creates shattering, field-residue and hand-off records before conditioning. | `fao-predrying` |
| `boundary_conditioning_states` | post-harvest | Record harvested material, clean grain, stabilized grain, residues, removed water, rejects and losses at their actual hand-offs. | `fao-grain-postharvest` |
| `boundary_residue_destination` | residues | Separate returned, removed, burned and discarded residues in soil-emission calculations and prevent double counting. | `ipcc-2019-managed-soils` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `managed_field_production` | 蚕豆田间管理生产 | `required` | always | biological-production parent with winter/spring and rainfed/irrigated route delta records | crop cycle and cultivated hectare |
| `mature_crop_harvest` | 成熟收获与预干 | `required` | always; pre-drying may be zero | independent capture parent with manual, windrow and combine technology delta records | kg standing crop entering harvest |
| `threshing_cleaning` | 脱粒与清理 | `required` | may be physically integrated with harvest but quantitatively distinct | primary conditioning to clean grain | kg collected material |
| `moisture_stabilization` | 水分控制干燥 | `conditional` | grain above declared gate moisture or active drying/aeration | preservation to stable moisture | kg clean grain entering drying |
| `farm_gate_grading` | 分级与交接 | `required` | always | sorting to accepted, downgraded, rework and reject states | kg conditioned grain |

田间生产按作物周期索引，收获和调理按批次或运行索引。替代路线应分别计量或按合格产出加权；共享清洁、空转和换线负担只归属一次。

### 过程： 蚕豆田间管理生产 (`managed_field_production`)

#### 输入

##### 产品流

###### 播种材料 (`planting_material`)

记录实际播种的外购种子或留用成熟籽粒。

- 选定流： *Vicia faba* planting material
- 流属性/单位： Mass / kg
- 数量规则： measured mass sown, net of unused material
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`
- 数量范围： 暂定 sowing-input screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 50
  - 上限： 600
  - 单位： kg
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 合并农业养分产品 (`nutrient_products`)

本过程唯一的养分卡覆盖全部矿质肥料、有机肥、石灰及含养分改良剂；原始记录保留实际产品和成分分析，以便解析具体 UUID。

- 选定流： agricultural nutrient supply products
- 流属性/单位： Mass / kg product, with nutrient analysis
- 绑定模式： `parameterized`
- Flow Set： `flow-set.agricultural-nutrient-supply`
- Flow Set 版本： `0.3.0`
- 数量规则： sum product masses after retaining individual product records; zero when none
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`
- 数量范围： 暂定 nutrient-product screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 5000
  - 单位： kg product
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 灌溉水 (`irrigation_water`)

仅对灌溉批次记录取水量或到田水量，并保留水源及输送边界。

- 选定流： irrigation water
- 流属性/单位： Volume / m3
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则： measured withdrawal or delivered volume
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`
- 数量范围： 暂定 irrigation screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 10000
  - 单位： m3
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 田间处理产品 (`field_treatment_products`)

按产品和浓度记录制剂型植保产品及非养分功能接种剂。

- 选定流： crop-protection and non-nutrient inoculation products
- 流属性/单位： Mass or volume / kg or L formulated product
- 数量规则： measured formulated-product amount applied
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`
- 数量范围： 暂定 treatment-product screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg or L formulated product
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 田间能源 (`field_energy`)

记录整地、播种、灌溉泵送和田间管理所用燃料与电力。

- 选定流： field-operation energy carriers
- 流属性/单位： Energy / MJ and kWh, preserving carrier quantity
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： carrier-specific metered or invoiced use allocated to crop cycle
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_cycle`
- 数量范围： 暂定 field-energy screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 20000
  - 单位： MJ energy-equivalent
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 田间成熟植株 (`standing_mature_crop`)

成熟植株在此交付收获节点，尚不构成合格干籽粒。

- 选定流： standing mature *Vicia faba* crop
- 流属性/单位： Mass / kg above-ground harvested fraction
- 数量规则： harvested material plus measured field/shattering losses, moisture state declared
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 依据采集计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_lot`
- 数量范围： 来源支持的 yield plausibility screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 111
  - 上限： 909
  - 单位： m2 cultivated area
  - 基准： area implied by 1.1–9 t/ha reported dry-seed yield per 1,000 kg accepted grain, before losses
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `feedipedia-faba-bean`

##### 废物流

##### 基本流

###### 管理土壤排放 (`managed_soil_emissions`)

采用声明的国家方法或 IPCC 方法，依据养分投入、残余物氮、沉降、淋失、石灰和尿素计算物质与环境介质特定排放。

- 选定流： managed-soil emissions by substance and compartment
- 流属性/单位： Mass / kg substance
- 数量规则： method calculation from collected field and residue records
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 方法公式 (`method_formula`)
- 采集协议： `cp_field_cycle`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： 暂定 aggregate soil-emission screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg reported substances
  - 基准： 每 1,000 kg 合格干籽粒; substances remain separate before screening
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

### 过程： 成熟收获与预干 (`mature_crop_harvest`)

#### 输入

##### 产品流

###### 收获能源 (`harvest_energy`)

记录切割、拔取、铺条、联合收获、捡拾和运至调理点所用燃料或电力。

- 选定流： harvest energy carriers
- 流属性/单位： Energy / MJ and kWh, preserving carrier quantity
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： carrier-specific use assigned to lot/period
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest_lot`
- 数量范围： 暂定 harvest-energy screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 5000
  - 单位： MJ energy-equivalent
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 收集的收获物 (`collected_harvest_material`)

将收集的豆荚/植株或联合收获物记作预期产出，并记录其在调理交接点的预干状态。

- 选定流： collected mature faba bean harvest material
- 流属性/单位： Mass / kg
- 数量规则： measured wet mass with moisture and included plant fractions
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 路线特定 (`route_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest_lot`
- 来源： `fao-grain-postharvest`; `fao-predrying`
- 数量范围： 暂定 collected-material screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 1000
  - 上限： 6000
  - 单位： kg wet harvested material
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 有价值田间残余物 (`field_residue_product`)

仅当移出的秸秆/茎秆有有益去向且具正价值时记作共产品；返田部分留在残余物管理中。

- 选定流： faba bean field residues with beneficial destination
- 流属性/单位： Mass / kg dry matter
- 数量规则： measured/calculated removed dry matter by destination
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 依据采集计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_lot`
- 来源： `vce-faba-bean-2024`; `ipcc-2019-managed-soils`
- 数量范围： 暂定 removed-residue screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 5000
  - 单位： kg dry matter
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 裂荚和收获损失 (`harvest_grain_loss`)

记录裂荚、捡拾或收获作业造成的籽粒损失，绝不计入合格或降级产出。

- 选定流： faba bean grain lost during harvest
- 流属性/单位： Mass / kg
- 数量规则： measured loss sample or lot mass-balance estimate
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 依据采集计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_lot`
- 来源： `fao-predrying`; `feedipedia-faba-bean`
- 数量范围： 暂定 harvest-loss screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kg grain
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程： 脱粒与清理 (`threshing_cleaning`)

#### 输入

##### 产品流

###### 调理能源 (`conditioning_energy`)

记录脱粒、剥荚、风选、筛分和物料移动所用燃料或电力。

- 选定流： conditioning energy carriers
- 流属性/单位： Energy / MJ and kWh, preserving carrier quantity
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： carrier use metered/allocated to lot
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning_lot`
- 数量范围： 暂定 conditioning-energy screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 3000
  - 单位： MJ energy-equivalent
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 清洁籽粒 (`cleaned_grain`)

将脱粒清理后的籽粒记作预期产出并记录进料水分；高于目标时送干燥，否则直接送分级。

- 选定流： cleaned mature faba bean grain
- 流属性/单位： Mass / kg
- 数量规则： measured lot mass after foreign matter removal
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning_lot`
- 来源： `fao-grain-postharvest`
- 数量范围： 暂定 clean-grain screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 1000
  - 上限： 1800
  - 单位： kg at incoming moisture
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 有价值秸秆和荚壳 (`conditioning_residue_product`)

仅当分离秸秆/荚壳有有益去向且具正价值时记作共产品。

- 选定流： faba bean straw and pod hulls with beneficial destination
- 流属性/单位： Mass / kg dry matter
- 数量规则： measured/moisture-corrected mass by destination
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 依据采集计算 (`calculated_from_collection`)
- 采集协议： `cp_conditioning_lot`
- 数量范围： 暂定 residue-product screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 4000
  - 单位： kg dry matter
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 清理拒收物 (`conditioning_rejects`)

按类别和去向记录受污染秸秆/荚壳、土、石块、杂物和未回收籽粒。

- 选定流： discarded threshing and cleaning residues
- 流属性/单位： Mass / kg
- 数量规则： measured reject mass
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning_lot`
- 数量范围： 暂定 conditioning-reject screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000
  - 单位： kg residues
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程： 水分控制干燥 (`moisture_stabilization`)

#### 输入

##### 产品流

###### 干燥能源 (`drying_energy`)

记录干燥或通风所用燃料、电力或外购热；自然干燥记录零外购能源，并记录时间和天气。

- 选定流： drying and aeration energy carriers
- 流属性/单位： Energy / MJ and kWh, preserving carrier quantity
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： carrier use metered to lot
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_drying_lot`
- 数量范围： 暂定 drying-energy screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 5000
  - 单位： MJ energy-equivalent
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 稳定化籽粒 (`stabilized_grain`)

记录自然或机械干燥后交付分级的籽粒，并保留成对的质量和水分测量。

- 选定流： moisture-stabilized mature faba bean grain
- 流属性/单位： Mass / kg
- 数量规则： measured outgoing mass verified by dry-matter balance
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_drying_lot`
- 来源： `fao-grain-postharvest`; `feedipedia-faba-bean`
- 数量范围： 来源支持的 moisture screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 14
  - 单位： percent moisture, wet basis
  - 基准： stabilized grain lot; above 12% requires aeration/destination justification and above 14% explicit non-storage hand-off
  - 基准类型： 过程产出 (`process_output`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `fao-grain-postharvest`; `feedipedia-faba-bean`

##### 废物流

###### 干燥损失 (`drying_loss`)

记录洒落、霉变、热损伤或虫害籽粒，不含计算所得的除水量。

- 选定流： grain rejected during drying
- 流属性/单位： Mass / kg
- 数量规则： measured loss plus reconciled unexplained dry-matter loss
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 依据采集计算 (`calculated_from_collection`)
- 采集协议： `cp_drying_lot`
- 数量范围： 暂定 drying-loss screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 300
  - 单位： kg grain dry-matter equivalent
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

###### 干燠除水 (`removed_water`)

根据成对质量/水分测量计算除水量，并与干物质损失分开。

- 选定流： water to air from grain drying
- 流属性/单位： Mass / kg
- 数量规则： incoming water mass minus outgoing water mass
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 依据采集计算 (`calculated_from_collection`)
- 采集协议： `cp_drying_lot`
- 来源： `fao-grain-drying`
- 数量范围： 暂定 removed-water screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1500
  - 单位： kg water
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

### 过程： 分级与交接 (`farm_gate_grading`)

#### 输入

##### 产品流

###### 分级能源 (`grading_energy`)

记录筛机、分选机、输送机和搬运所用电力/燃料，共享清洁只计一次。

- 选定流： grading energy carriers
- 流属性/单位： Energy / MJ and kWh, preserving carrier quantity
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： carrier use assigned to grading lots
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_grading_lot`
- 数量范围： 暂定 grading-energy screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000
  - 单位： MJ energy-equivalent
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格干籽粒 (`accepted_dry_grain`)

预期参考产出是在声明等级、水分和农场门口交接条件下的合格籽粒。

- 选定流： Broad beans and horse beans, dry `b9ccab43-8330-44f4-b125-456e97ec6e87`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式： `fixed`
- 数量规则： 1,000 kg net accepted grain
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 一个参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 身份引用 (`identity_reference`)
- 数量范围： 参考产出恒等范围
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 1000
  - 上限： 1000
  - 单位： kg
  - 基准： 一个参考流
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 身份引用 (`identity_reference`)

###### 降级籽粒 (`downgraded_grain`)

仅在有销售或有益去向时将破损、裂粒、过小或不合格籽粒记作共产品，并从合格产出中排除。

- 选定流： downgraded mature faba bean grain by grade and destination
- 流属性/单位： Mass / kg
- 数量规则： measured net mass at each beneficial hand-off
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_grading_lot`
- 数量范围： 暂定 downgraded-grain screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000
  - 单位： kg grain
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 分级拒收物 (`grading_rejects`)

无有益去向的不合格籽粒和杂物记作废物；返工回到清理或分级，仅在最终交接点计数。

- 选定流： grading rejects and discarded off-spec grain
- 流属性/单位： Mass / kg
- 数量规则： measured reject mass net of documented rework return
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格干籽粒
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_grading_lot`
- 数量范围： 暂定 grading-reject screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kg rejects
  - 基准： 每 1,000 kg 合格干籽粒
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_output_classification` | all outputs | Assign each quantity once to accepted product, valuable co-product, field-returned residue, rework, downgraded product, waste or loss at one hand-off. | `ipcc-2019-managed-soils` |
| `allocation_residue_default` | straw/stems/leaves/hulls | Field-returned material has no co-product allocation; removed material is a co-product only with beneficial destination and positive value, otherwise waste. | `vce-faba-bean-2024`; `ipcc-2019-managed-soils` |
| `allocation_economic_precedence` | independently valuable co-products | Use economic allocation with contemporaneous farm-gate values; otherwise single-output treatment. Report mass-allocation sensitivity when values are unavailable, unstable, or based on fewer than three representative transactions. |  |
| `allocation_rework` | damaged/off-spec grain | Retain burdens through re-cleaning/re-grading, count loop energy once, and classify material only at final hand-off. |  |
| `allocation_route_period` | mixed routes/shared runs | Attribute field burdens by crop cycle and post-harvest burdens by metered lot or throughput share; assign shared cleaning/changeover once. |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_cycle` | `managed_field_production` | inputs, area and emission drivers | field log/invoice/meter | crop; field; dates; area; seed; each nutrient product/analysis; treatments; water; carriers; lime/urea; prior crop | reconcile logs, invoices, meters and maps | native units, kg, L, m3, MJ, kWh, ha | each operation | crop cycle | each field/route | retain product rows; sum like identities; allocate shared use by documented driver | invoices, calibration, map, application/meter log |
| `cp_harvest_lot` | `mature_crop_harvest` | crop, collected state, residues and losses | ticket/sample/log | lot; maturity; route; pre-drying; masses; moisture; fractions; shatter; residue dry matter/destination; energy | scales plus representative loss sampling | kg, %, kg DM, MJ, kWh | field/lot | harvest period | field/route | reconcile standing, collected, residue and loss; weight routes by accepted output | calibration, sample design, log |
| `cp_conditioning_lot` | `threshing_cleaning` | clean grain, residues, rejects and energy | batch/meter/scale | lot; route; mass/moisture; residue mass/moisture/destination/value; rejects; energy/changeover | calibrated instruments and destination records | kg, %, kg DM, MJ, kWh | lot/run | campaign | line/site | close wet/dry mass balance; assign shared burdens once | calibration, batch sheet, receipt |
| `cp_drying_lot` | `moisture_stabilization` | stable grain, energy, water and loss | dryer/meter/moisture log | lot; technology; paired mass/moisture; duration; temperature; airflow; carriers; losses | calibrated mass/moisture and energy records | kg, %, MJ, kWh, h, °C | lot | campaign | drying route | preserve dry matter; calculate water; assign energy/loss | calibration, dryer/meter/inspection log |
| `cp_grading_lot` | `farm_gate_grading` | accepted, downgraded, rework and rejects | grading/scale/sales record | lot; incoming mass/moisture; criteria; each output mass/destination/value; rework; energy; date | scale/sorter reconciled to destination | kg, %, currency/kg, MJ, kWh | lot | reporting period | grading site | accepted + downgraded + rejects = input − measured loss; rework only at final hand-off | calibration, ticket, invoice, receipt |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_dry_matter` | moisture conversion | `dry matter = wet mass × (1 − wet-basis moisture fraction)`; normalized wet mass = dry matter / (1 − target fraction) | paired mass/moisture | dry matter and normalized mass | `fao-grain-drying` |
| `calc_removed_water` | drying | incoming water minus outgoing water; do not count as dry-matter loss | paired mass/moisture | kg water | `fao-grain-drying` |
| `calc_accepted_yield` | field/reference | accepted net grain divided by cultivated area; disclose failed area and moisture | output, area, moisture | kg/ha |  |
| `calc_residue_n` | returned residue | selected national method or IPCC Equation 11.6, separating above/below ground and removed/burned fractions | yield, residue DM/N, destination fractions | kg residue N returned | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | post-harvest lots | incoming dry matter = accepted + downgraded + valuable residue + final waste/loss dry matter; investigate residual | all states/moisture | closure error/flag |  |
| `calc_route_mix` | route alternatives | sum(route result × accepted-output share); enter shared burdens once | route inventories/shares | production mix |  |
| `calc_economic_allocation` | valuable outputs | output value / sum independently valuable output values on same period/moisture basis | masses/prices/moisture | allocation fractions |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | grain | Demonstrate *Vicia faba*, mature dry-grain purpose, market name, grade and non-seed hand-off. | crop/lot/specification/invoice |
| `dq_temporal` | route | Link one representative crop cycle to its post-harvest lots; justify averaging and retain failed crops. | dated records |
| `dq_measurement` | mass/moisture/energy/water | Use calibrated instruments or documented invoices/meters; retain basis, uncertainty and substitutions. | calibration and raw records |
| `dq_completeness` | output states | Reconcile accepted, downgraded, reworked, residue, waste, shattering, handling and removed-water states. | node balances/receipts |
| `dq_route_specificity` | alternatives | Keep winter/spring, rainfed/irrigated, manual/mechanical and natural/mechanical drying records separate before mixing. | route-coded records |
| `dq_flow_identity` | parameterized/unmapped rows | Resolve every emitted Product exchange and substance/compartment-specific elementary exchange to verified UUIDs before TIDAS publication. | resolution record |
| `dq_range_review` | quantitative rows | Use ranges only as QA screens; investigate exceptions and retain foreground values. | QA note/raw record |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference output | Require the stated product/property/unit-group UUIDs, 1,000 kg, mature dry *Vicia faba*, moisture, grade and farm-gate hand-off. |  |
| `validate_scope` | package | Reject green beans, planting seed sold as seed, other pulse species, downstream processing or post-gate transport in the reference output. |  |
| `validate_processes` | graph | Require field production, harvest, threshing/cleaning and grading; require drying when moisture exceeds target or active drying/aeration occurs. | `fao-grain-postharvest`; `fao-predrying` |
| `validate_route_delta` | alternatives | Name parent and real topology/inventory/calculation/data/validation delta; require shares for coexisting routes and forbid unqualified merging of mutually exclusive routes. |  |
| `validate_mode_indexing` | cycles/lots/runs | Link inputs, outputs, cleaning and changeover to cycles/lots/periods; prevent duplicate shared-run burdens. |  |
| `validate_nutrient_cardinality` | each process | At most one nutrient Product-input card, bound only to `flow-set.agricultural-nutrient-supply@0.3.0` without group; retain actual products separately. |  |
| `validate_output_states` | all output nodes | Give every accepted, downgraded, reworked, valuable residue, returned residue, waste and loss one class and hand-off; rejected material cannot be accepted output. |  |
| `validate_allocation` | multi-output nodes | Require explicit single-output/economic decision, values and period; require mass sensitivity when values are weak and prevent double hand-offs. |  |
| `validate_moisture` | drying/final grain | Require paired mass/moisture, dry-matter preservation, separate removed water and investigation of unexplained loss. | `fao-grain-drying` |
| `validate_rework` | rejects | Point rework to cleaning or grading, retain prior burdens, count loop energy once and record final destination. |  |
| `validate_ranges` | Flow Cards | Require exactly one complete Range per quantitative card and exact EN/ZH/structured agreement of label, role, bounds, unit, basis, basis kind, evidence kind and source ids. |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground production dataset for mature dry *Vicia faba* grain at farm gate |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness review |
| allowed_use | farm-gate footprints and supply-chain models for unprocessed dry broad/faba/horse bean grain with declared moisture, grade and route |
| excluded_use | green beans; planting seed; other pulses; processed ingredients; undisclosed generic pulse proxy |
| required_metadata | identity; geography; crop cycle; season route; irrigation; prior crop; harvest/threshing/drying/grading; moisture; grade; market; route shares; destinations; allocation; hand-off |
| required_quality_disclosure | age/coverage; primary share; calibration; substitutions; range exceptions; mass balance; residue destinations; emission method; allocation/sensitivity; unresolved identities |
| update_trigger | material change in cultivar, route, input regime, yield/climate, technology, moisture/grade, destination/value, allocation/emission method, or data older than five years |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `vce-faba-bean-2024` | `extension_guidance` | Virginia Cooperative Extension, *Faba Bean: A Multipurpose Specialty Crop for the Mid-Atlantic USA*, SPES-590, https://www.pubs.ext.vt.edu/SPES/spes-590/spes-590.html | identity, green/dry distinction, cool-season production, residue return |
| `fao-grain-postharvest` | `official_guidance` | FAO, *Agricultural engineering in development: Grain and post-harvest systems*, https://www.fao.org/4/T0522E/T0522E03.htm | harvest, pre-drying, threshing, cleaning, drying and about 14% storage moisture |
| `fao-predrying` | `official_guidance` | FAO, *Agricultural engineering in development: Pre-drying*, https://www.fao.org/4/T0522E/T0522E06.htm | pre-drying boundary, route conditions and field-delay losses |
| `fao-grain-drying` | `handbook` | FAO, *Farm structures in tropical climates: Grain drying*, https://www.fao.org/4/s1250e/S1250E0u.htm | wet-basis moisture, dry-matter conversion and drying controls |
| `feedipedia-faba-bean` | `handbook` | Feedipedia (INRAE, CIRAD, AFZ and FAO), *Faba bean (Vicia faba)*, https://feedipedia.review.fao.org/node/4926 | identity, maturity, 1.1–9 t/ha yield span, shattering/splitting and 12% storage moisture |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC, *2019 Refinement, Volume 4, Chapter 11*, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil emissions, N-fixing pulse residue N and destination double-counting prevention |
