---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.flower-seeds
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 花卉种子

## 1. 范围与适用性

本 PCR 适用于专门为播种而生产并放行的开花植物种子。边界追踪一个明确物种、品种和批次，从亲本材料与受控繁育开始，经采收、提取、干燥、清选、检测、可选处理和包装，止于种子生产者或调制者交付点。

不包括切花、球根和其他营养繁殖材料、食用或榨油用途种子、无受控生产记录的野生采集种子，以及未声明播种用途的种子。若无透明加权，不得合并不同物种、品种、生产路线或处理状态。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.flower-seeds |
| classification_refs | CPC 3.0 `01963` (exact) |
| covered_products | Conditioned seed of declared flowering-plant species intended for sowing |
| excluded_products | Cut flowers; vegetative propagules; seed sold for food, feed or oil; unidentified mixtures; unmanaged wild collection |
| representative_product | One accepted lot of a declared flower species and cultivar |
| production_route | Parent stock → managed seed crop → harvest/extraction → drying/cleaning/grading → testing, optional treatment and packaging |
| market_state | Conditioned sowing seed with lot, species/cultivar, purity, germination or viability, moisture, treatment and certification status declared |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 对象 | Conditioned flower seed released for sowing at producer or conditioner hand-off |
| 数量 | 1 kg |
| 质量要求 | Species, cultivar, lot, purity, germination/viability, moisture, treatment and certification status declared |
| 时间或周期 | One traceable multiplication and conditioning lot; multi-period burdens cover the declared productive period |
| reference_flow_link | `released_flower_seed` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Flower seed for sowing; UUID unresolved for the full category |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必填限定信息 | species; cultivar; lot; multiplication route; purity; germination or viability; moisture; treatment; certification; geography; hand-off gate |

现有 `Seed of H. annuus` 身份仅限该物种，不作为全类别参考流。

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference and intermediate seed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net seed mass at the moisture value reported for the same lot; exclude packaging mass. |
| `quality_alignment` | released seed | lot-specific test result | declared test unit | Purity, germination/viability and moisture shall refer to the same sampled lot. |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | Parent-stock identity, multiplication class, field or protected-production state, and perennial stand age when applicable |
| starting_condition_role | Traceable starting condition for the multiplication lot |
| product_classification_scope | One flower-seed product within CPC 3.0 01963 |
| recursive_input_rule | Parent flower seed is a linked upstream product input and is not recursively produced inside the current lot |
| upstream_dataset_requirement | Match species/cultivar, class, treatment, geography and supplier gate of received parent seed |
| disclosure | Declare production system, crop cycle, pollination management, sites, conditioning route, storage, treatment and reject destinations |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_seed_route` | all datasets | Include evidenced multiplication, harvest/extraction, drying, cleaning, testing and pre-hand-off treatment, packaging and storage. | `fao-seed-handling`; `fao-seed-portal` |
| `boundary_parent_stock` | parent seed | Represent parent seed as a separate upstream exchange with lot identity and stop recursion there. |  |
| `boundary_market_state` | reference product | Release only seed intended for sowing and distinguish treated, coated, pelleted and untreated states. |  |
| `boundary_reject_route` | rejected material | Report off-spec seed, screenings and foreign matter by recovery, downgraded use or disposal destination. | `fao-seed-handling` |
| `boundary_multi_period` | perennial crops and shared assets | Attribute establishment and shared assets over documented productive output without double charging. |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `seed_crop_production` | Parent-stock establishment and seed-crop production | `required` | Managed production of the declared flowering plant for seed | biological production | 1 kg harvested seed-bearing material |
| `harvest_extraction` | Harvest and seed extraction | `required` | Collection and separation of seed from heads, capsules, pods or fruit | harvest/capture | 1 kg raw extracted seed |
| `dry_clean` | Drying, cleaning and grading | `required` | Moisture stabilization and separation of accepted seed | conditioning/grading | 1 kg conditioned seed |
| `release_pack` | Testing, optional treatment, packaging and hand-off | `required` | Lot testing, release, presentation and pre-dispatch storage | material treatment/presentation | 1 kg released flower seed |

### Process: Parent-stock establishment and seed-crop production (`seed_crop_production`)

#### 输入

##### 产品流

###### Parent flower seed (`parent_seed`)

Declared parent seed enters the managed multiplication lot.

- 选定流： Parent flower seed for sowing; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured mass assigned to the production lot
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
- 归一化基准： per kg harvested seed-bearing material
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parent_stock`

- 数量范围： Provisional parent-seed QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.0001
  - 上限： 0.5
  - 单位： kg
  - 基准： per kg harvested seed-bearing material
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### Consolidated fertilizer and nutrient supply (`nutrient_supply`)

All mineral fertilizers, organic fertilizers and nutrient amendments are combined in this single card while actual product identity and nutrient analysis remain in records.

- 选定流： Agricultural nutrient supply
- 流属性/单位： Mass / kg
- 绑定： Parameterized (`parameterized`)
- Flow Set： `flow-set.agricultural-nutrient-supply`
- Flow Set 版本： `0.3.0`
- 数量规则： measured mass by nutrient product, retaining composition
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： per kg harvested seed-bearing material
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_crop_inputs`

- 数量范围： Provisional consolidated nutrient-supply QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 3
  - 单位： kg product
  - 基准： per kg harvested seed-bearing material
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### Irrigation water (`irrigation_water`)

Water delivered for irrigation is recorded when that route is active.

- 选定流： Irrigation water
- 流属性/单位： Volume / m3
- 绑定： Parameterized (`parameterized`)
- Flow Set： `flow-set.water-use`
- Flow Set 版本： `0.2.0`
- Flow Set 组： `irrigation-water`
- 数量规则： metered delivery or verified pump-flow calculation
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： per kg harvested seed-bearing material
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_irrigation`

- 数量范围： Provisional irrigation QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： m3
  - 基准： per kg harvested seed-bearing material; zero only for documented rainfed production
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### Crop-protection products (`crop_protection`)

Applied products remain differentiated by formulation and active substance; a rice-farm aggregate is not compatible with this route.

- 选定流： Crop-protection product; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured formulated-product mass
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： per kg harvested seed-bearing material
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_crop_inputs`

- 数量范围： Provisional crop-protection QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.5
  - 单位： kg formulated product
  - 基准： per kg harvested seed-bearing material
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### Production energy (`production_energy`)

Fuel, electricity and supplied heat used for field or protected production are expanded from records.

- 选定流： Energy supply
- 流属性/单位： Energy / MJ
- 绑定： Parameterized (`parameterized`)
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： energy-equivalent sum by carrier and use node
- 数值来源模式： `calculated_value`
- 适用范围： `technology_specific`
- 归一化基准： per kg harvested seed-bearing material
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_energy`

- 数量范围： Provisional production-energy QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.1
  - 上限： 500
  - 单位： MJ
  - 基准： per kg harvested seed-bearing material
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

不要求设置通用卡。

##### 基本流

Route-specific field emissions are calculated in the concrete package from recorded inputs and the declared method.

#### 输出

##### 产品流

###### Harvested seed-bearing material (`harvested_seed_material`)

Mature heads, capsules, pods, fruit or other declared material transferred to extraction.

- 选定流： Harvested flower seed-bearing material; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured net mass with material form and moisture
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
- 归一化基准： per crop lot
- 基准类型： `crop_cycle`
- 证据类型： `collected_record`
- 采集协议： `cp_stage_mass_quality`

- 数量范围： Provisional harvested-material QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 100
  - 单位： kg
  - 基准： per kg raw extracted seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

不要求设置通用卡。

##### 基本流

不要求设置通用卡。

### Process: Harvest and seed extraction (`harvest_extraction`)

#### 输入

##### 产品流

###### Harvested material received (`harvested_material_input`)

- 选定流： Harvested flower seed-bearing material; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： linked measured mass from production
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
- 归一化基准： per kg raw extracted seed
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stage_mass_quality`

- 数量范围： Provisional extraction-input QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 100
  - 单位： kg
  - 基准： per kg raw extracted seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### Harvest and extraction energy (`extraction_energy`)

- 选定流： Energy supply
- 流属性/单位： Energy / MJ
- 绑定： Parameterized (`parameterized`)
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： converted carrier and meter records assigned by equipment time or throughput
- 数值来源模式： `calculated_value`
- 适用范围： `technology_specific`
- 归一化基准： per kg raw extracted seed
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_energy`

- 数量范围： Provisional extraction-energy QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： MJ
  - 基准： per kg raw extracted seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

不要求设置通用输入卡。

##### 基本流

不要求设置通用卡。

#### 输出

##### 产品流

###### Raw extracted flower seed (`raw_seed`)

- 选定流： Raw extracted flower seed; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured output mass and moisture by lot
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
- 归一化基准： per extraction lot
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stage_mass_quality`

- 数量范围： Provisional raw-seed QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 2
  - 单位： kg
  - 基准： per kg conditioned seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

###### Extraction residues (`extraction_residue`)

- 选定流： Flower-seed extraction residue; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured residue mass or moisture-corrected mass balance
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： per kg raw extracted seed
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_residue_reject`

- 数量范围： Provisional extraction-residue QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg
  - 基准： per kg raw extracted seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 基本流

不要求设置通用卡。

### Process: Drying, cleaning and grading (`dry_clean`)

#### 输入

##### 产品流

###### Raw flower seed received (`raw_seed_input`)

- 选定流： Raw extracted flower seed; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： linked measured input mass and moisture
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
- 归一化基准： per kg conditioned seed
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stage_mass_quality`

- 数量范围： Provisional raw-seed input QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 2
  - 单位： kg
  - 基准： per kg conditioned seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### Drying and cleaning energy (`conditioning_energy`)

- 选定流： Energy supply
- 流属性/单位： Energy / MJ
- 绑定： Parameterized (`parameterized`)
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： recorded energy assigned to the batch
- 数值来源模式： `calculated_value`
- 适用范围： `technology_specific`
- 归一化基准： per kg conditioned seed
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_energy`

- 数量范围： Provisional conditioning-energy QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.01
  - 上限： 100
  - 单位： MJ
  - 基准： per kg conditioned seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

不要求设置通用输入卡。

##### 基本流

不要求设置通用卡。

#### 输出

##### 产品流

###### Conditioned flower seed (`conditioned_seed`)

- 选定流： Conditioned flower seed for sowing; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured conditioned mass at declared moisture
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
- 归一化基准： per conditioning batch
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stage_mass_quality`

- 数量范围： Provisional conditioned-seed QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 1.5
  - 单位： kg
  - 基准： per kg released flower seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

###### Cleaning and grading rejects (`cleaning_rejects`)

- 选定流： Flower-seed cleaning rejects; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured reject mass by reason and destination
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： per kg conditioned seed
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_residue_reject`

- 数量范围： Provisional cleaning-reject QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg
  - 基准： per kg conditioned seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 基本流

不要求设置通用卡。

### Process: Testing, optional treatment, packaging and hand-off (`release_pack`)

#### 输入

##### 产品流

###### Conditioned seed received (`conditioned_seed_input`)

- 选定流： Conditioned flower seed for sowing; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： linked measured mass from conditioning
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
- 归一化基准： per kg released flower seed
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stage_mass_quality`

- 数量范围： Provisional conditioned-input QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 1.5
  - 单位： kg
  - 基准： per kg released flower seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### Seed treatment material (`seed_treatment`)

Treatment, coating or pelleting material is recorded only when applied before hand-off.

- 选定流： Seed treatment material; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured material applied net of returned stock
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
- 归一化基准： per kg released treated seed
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_treatment_packaging`

- 数量范围： Provisional treatment-material QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： kg
  - 基准： per kg released seed; zero for an untreated lot
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### Seed packaging (`seed_packaging`)

- 选定流： Flexible packaging for flower seed
- 流属性/单位： Mass / kg
- 绑定： Parameterized (`parameterized`)
- Flow Set： `flow-set.packaging-function`
- Flow Set 版本： `0.2.0`
- Flow Set 组： `flexible-packaging`
- 数量规则： measured packaging mass by component; use another permitted group when the actual package is not flexible
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： per kg released flower seed
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_treatment_packaging`

- 数量范围： Provisional packaging QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.001
  - 上限： 2
  - 单位： kg
  - 基准： per kg released flower seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### Final-stage energy (`final_energy`)

- 选定流： Energy supply
- 流属性/单位： Energy / MJ
- 绑定： Parameterized (`parameterized`)
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： energy assigned by run time, storage duration or throughput
- 数值来源模式： `calculated_value`
- 适用范围： `technology_specific`
- 归一化基准： per kg released flower seed
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_energy`

- 数量范围： Provisional final-stage energy QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0.01
  - 上限： 100
  - 单位： MJ
  - 基准： per kg released flower seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

不要求设置通用输入卡。

##### 基本流

不要求设置通用卡。

#### 输出

##### 产品流

###### Released flower seed (`released_flower_seed`)

- 选定流： Flower seed for sowing; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured net mass covered by the release decision
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
- 归一化基准： per released lot
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_release_quality`

- 数量范围： Reference-flow mass identity
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1
  - 上限： 1
  - 单位： kg
  - 基准： per 1 kg reference flow
  - 基准类型： `reference_flow`
  - 证据类型： `collected_record`

##### 废物流

###### Failed-test or treatment rejects (`release_rejects`)

- 选定流： Rejected flower seed; UUID unresolved
- 流属性/单位： Mass / kg
- 数量规则： measured rejected mass by failure reason and destination
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： per kg released flower seed
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_residue_reject`

- 数量范围： Provisional release-reject QA screen
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.5
  - 单位： kg
  - 基准： per kg released flower seed
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 基本流

不要求设置通用卡。

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_reconciliation` | each process | Reconcile opening stock, inputs, outputs, moisture change, residues, rejects and closing stock on one basis. |  |
| `allocation_secondary_outputs` | saleable plant material or downgraded seed | Prefer subdivision or direct physical attribution; if allocation remains, disclose outputs, causal basis, formula and sensitivity. |  |
| `allocation_rejects` | all rejects | Do not include rejected seed in released output or credit a destination before routing is evidenced. |  |
| `allocation_periods` | perennial crops and shared assets | Attribute establishment and infrastructure over documented productive output using one consistent period rule. |  |
| `allocation_batches` | shared processing, storage and changeovers | Assign shared burdens by measured time, occupied storage, throughput or another causal driver without double counting. |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_parent_stock` | `seed_crop_production` | parent seed | supplier/sowing record | species, cultivar, class, lot, treatment, mass, date, plot | invoice, label and calibrated scale | kg | each sowing | crop cycle | production lot | sum traceable parent stock | label, invoice, scale check |
| `cp_crop_inputs` | `seed_crop_production` | nutrients and crop protection | purchase/application record | product, composition or active, mass, date, plot, purpose | invoice plus application log | kg | each application | crop cycle | plot/lot | retain actual products and composition | invoice and log |
| `cp_irrigation` | `seed_crop_production` | irrigation | meter/pump record | volume, source, meter, runtime, plot, date | meter or documented pump calculation | m3 | each event | crop cycle | plot/lot | sum delivered volume | calibration or pump specification |
| `cp_energy` | `all processes` | energy | meter, fuel and run record | carrier, quantity, equipment, node, lot, runtime | invoices, meters and equipment logs | MJ; kWh | each run/interval | complete route | site/process | convert and allocate by causal driver | invoice, reading, run log |
| `cp_stage_mass_quality` | `all processes` | product/intermediate mass | batch/lot record | lot, stage, input, output, tare, moisture, form, time | weighing and moisture test | kg; % | each transfer/batch | complete route | lot/node | preserve stage mass and moisture | ticket, calibration, sample id |
| `cp_residue_reject` | `harvest_extraction; dry_clean; release_pack` | residues/rejects | disposition record | type, mass, reason, destination, date, lot | scale plus dispatch/receiver record | kg | each removal/lot | complete route | node/lot | sum by material and destination | scale, dispatch, mass balance |
| `cp_treatment_packaging` | `release_pack` | treatment/packaging | batch/stock record | formulation, applied mass, package type, component mass, count, returns, lot | equipment record and stock reconciliation | kg | each lot | final preparation | line/lot | net consumed by component | stock and equipment check |
| `cp_release_quality` | `release_pack` | released seed | sampling/test/release record | identity, lot, purity, germination/viability, moisture, treatment, certification, mass | representative sampling and recognized test method | kg; % | each lot | hand-off | lot | include only released mass | test, certificate, chain of custody |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all rows | normalized amount = lot-attributed amount / net released seed mass | attributed amount; released mass | amount per kg reference seed |  |
| `calc_irrigation` | irrigation | delivered volume = meter difference, or verified pump rate × runtime | meter or pump data | m3 delivered |  |
| `calc_energy` | energy | convert carriers to declared energy and assign by evidenced driver | quantity; conversion; driver | MJ per process output |  |
| `calc_stage_balance` | each process | loss = opening stock + inputs − intended outputs − closing stock, adjusted for moisture | mass, stock, moisture | reconciled loss/residue |  |
| `calc_multi_period` | perennial/shared production | attributed burden = total burden × lot output / documented productive output | burden; outputs | lot burden |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference lot | Species, cultivar, lot, sowing use and state shall be explicit; a species UUID represents only that species. | label, release record, binding review |
| `dq_quality_tests` | released seed | Purity, germination/viability and moisture shall cover the released lot and state method/date. | laboratory record and sample chain |
| `dq_completeness` | foreground route | Include all released/rejected lots and at least 95% of operating days; quantify gaps. | coverage reconciliation |
| `dq_mass_balance` | each node | Reconcile material on a consistent moisture basis and disclose tolerance. | stage balance and calibration |
| `dq_binding` | emitted exchanges | Resolve parameterized and unmapped cards to verified UUIDs before final TIDAS publication. | expansion and identity review |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | Reject non-sowing seed, vegetative propagules, cut flowers and records without species, cultivar and lot. |  |
| `validate_reference` | reference flow | Require exactly 1 kg net released seed and the required quality qualifiers. |  |
| `validate_species_uuid` | reference identity | Keep the category UUID blank unless compatible; use `50835e31-8359-4b7c-a818-81ef48e5ed42` only for explicitly declared H. annuus after detail compatibility is rechecked. |  |
| `validate_nutrient_cardinality` | `seed_crop_production` | Permit at most one nutrient Product-input card, bound only to `flow-set.agricultural-nutrient-supply` `0.3.0` at set level without a group. |  |
| `validate_lot_chain` | all processes | Require an unbroken parent-stock, production, extraction, conditioning and release lot chain. |  |
| `validate_rework_rejects` | rework/rejects | Rework re-enters through a recorded node; rejected mass cannot also be released output. |  |
| `validate_ranges` | all flow cards | Require ordered bounds, unit, basis, basis kind and evidence kind; foreground records determine amounts. |  |
| `validate_binding` | all cards | Accept fixed UUIDs only after detail confirmation and parameterized bindings only under compatible Flow Sets. |  |

## 10. 发布数据集配置

| 字段 | 值 |
| --- | --- |
| dataset_role | Foreground flower-seed data package and process projection |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Studies matching species/cultivar, route, geography, quality state and conditioner hand-off |
| excluded_use | Proxy for another species, cut flowers, food/oil seed, vegetative propagules or an unqualified species average |
| required_metadata | species; cultivar; lot; parent class; field/protected route; crop period; sites; purity; germination/viability; moisture; treatment; certification; storage; gate |
| required_quality_disclosure | record coverage; gaps; range exceedances; unresolved UUIDs; mass-balance tolerance; allocation; reject/rework destinations |
| update_trigger | new reviewed route evidence, compatible category UUID, changed Flow Set, quality rule, treatment route or repeated range exceedance |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seed-portal` | `official_guidance` | FAO, Seeds portal, https://www.fao.org/seeds/en | conditioning, packaging, storage, sampling and testing stages |
| `fao-seed-handling` | `handbook` | FAO, *A Guide to Forest Seed Handling*, https://www.fao.org/4/ad232e/ad232e00.htm | collection, extraction, drying, cleaning, storage and seed-quality testing |
