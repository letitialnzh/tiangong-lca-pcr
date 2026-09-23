---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.yautia
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 牙芋（Yautia）

## 1. 范围与适用性

本 PCR 覆盖栽培 *Xanthosoma* 的田间生产、起收、有限农场门整理和鲜食球茎分级，包括以 yautia、tannia、malanga、macabo、new cocoyam 或 tiquisque 名称交易的产品。边界终点为农场门处已声明等级的鲜、未加工产品。

不包括 *Colocasia esculenta* 芋头/dasheen、观赏用 *Xanthosoma*、作为独立蔬菜出售的叶片，以及煮制、去皮、冷冻、切片、磨粉、制淀粉、储藏、包装或农场门后运输的产品。“Cocoyam”单独使用含义不明确；数据集必须确认 *Xanthosoma*，不得无披露地替用 *Colocasia* 数据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.yautia` |
| classification_refs | CPC 3.0 `01591` Yautia |
| covered_products | Fresh edible *Xanthosoma* cormels/tubercles, including yautia, tannia and malanga trade names |
| excluded_products | *Colocasia* taro/dasheen; edible leaves as reference product; ornamental, processed, preserved, packaged, or post-farm products |
| representative_product | Sound fresh *Xanthosoma sagittifolium* cormels accepted for the declared market grade |
| production_route | Vegetative planting material → managed cultivation → lifting → limited primary conditioning → grading and dispatch |
| market_state | Fresh, unprocessed produce at farm gate; cultivar/species, grade, wet basis, washing/trimming state and gate declared |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门处符合已声明等级的鲜食牙芋球茎 |
| How much | 1,000 kg 鲜质量 |
| How well | 完好、坚实、达到生理成熟并符合已声明等级，排除腐烂球茎 |
| How long or cycle | 一个已声明作物周期，终止于农场门分级 |
| reference_flow_link | `rf_fresh_yautia_at_farm_gate` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Yautia `72013e1f-538d-4031-b97a-03bfaa42b37d` |
| 参考流 property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | *Xanthosoma* 物种/品种；地理范围；作物年度；生产系统；收获部位；等级；湿基；水洗/修整状态；门点；纳入的整理操作 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted fresh yautia | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted cormels on the fresh wet basis after included trimming and cleaning. |
| `field_area_cycle` | cultivation inputs and emissions | Area; crop cycle | ha; cycle | Record actual area and dates; normalize only after linked mass balances close. |
| `nutrient_content` | fertilizers | Product mass and nutrient content | kg product; kg N; kg P2O5 or P; kg K2O or K | Retain product mass and assay separately and state oxide-to-element conversions. |
| `water_energy` | irrigation and utilities | Volume or energy | m3; kWh; L; MJ | Record each utility separately and disclose source, pumping boundary and upstream coverage. |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | Land prepared for the crop cycle; planting material and external supplies enter as product flows |
| starting_condition_role | Foreground begins before establishment and ends when accepted fresh yautia leaves farm-gate grading |
| product_classification_scope | Fresh edible *Xanthosoma* cormels corresponding to CPC 3.0 `01591`, distinct from *Colocasia* taro |
| recursive_input_rule | Internally retained corms/cormels used for planting are internal transfers; purchased planting material requires an upstream dataset and is not reference output |
| upstream_dataset_requirement | Require upstream datasets for purchased planting material, fertilizers, amendments, pesticides, fuels, electricity, irrigation supply and external services |
| disclosure | Declare geography, cycle, species/cultivar, field and irrigation system, planting-material origin, included operations, wet basis, grades, destinations, allocation and gate |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_managed_crop` | cultivation | Include establishment, soil/crop management, inputs, irrigation where used, field energy and direct field emissions until harvest-ready biomass is handed to lifting. | `fao-qds-2010`; `sri-lanka-doa-kiri-ala` |
| `boundary_harvest` | lifting | Model lifting separately because it creates raw collected material, soil carryover, damage and uncollected loss before conditioning. | `sri-lanka-doa-kiri-ala`; `fao-aroids-postharvest` |
| `boundary_conditioning` | conditioning | Include trimming, dry cleaning and washing only when performed; keep utilities, wastewater, removed soil and trimmings explicit. Curing, storage and packaging are extensions. | `codex-tannia-224-2001` |
| `boundary_grading` | grading | Sort prepared material into accepted product, downgraded edible product, propagation material and rejects, and record one hand-off for every state. | `codex-tannia-224-2001` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_cultivation` | Managed yautia cultivation | required | Always | foreground | one hectare and crop cycle |
| `lifting_harvest` | Lifting and harvest | required | Always | foreground | kg raw lifted crop |
| `farm_gate_conditioning` | Limited primary conditioning | required | Utilities may be zero for manual dry conditioning | foreground | kg raw material received |
| `farm_gate_grading` | Grading and destination sorting | required | Always | foreground | kg prepared material graded |

### 过程：牙芋管理种植（`field_cultivation`）

管理对象是营养繁殖的 *Xanthosoma* 作物。预期交接状态为可收获地下生物量；地上部、未收获生物量和损失分别作为残余物或损失。

#### 输入

##### 产品流

###### 营养繁殖种植材料（`planting_material_count`）

记录已定植的母球茎切块、球茎或育苗植株，并记录来源和健康状态。

- 选定流： Yautia planting material
- 流属性/单位： Number of items / plant or piece
- 数量规则： Count planting units established
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per ha and crop cycle
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_inputs`
- 来源： `fao-qds-2010`; `sri-lanka-doa-kiri-ala`
- 数量范围： Sri Lankan planting-density example
  - 范围角色： 典型范围 (`typical_range`)
  - 下限： 9000
  - 上限： 10000
  - 单位： planting units/ha/cycle
  - 基准： established units per occupied hectare for the documented Sri Lankan route
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `sri-lanka-doa-kiri-ala`

###### 农业养分与肥料投入（`field_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per ha and crop cycle
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：`sri-lanka-doa-kiri-ala`
- 数量范围：有文献依据的矿质肥料产品总量示例
  - 范围角色：典型范围（`typical_range`）
  - 下限：450
  - 上限：450
  - 单位：kg product/ha/cycle
  - 基准：每公顷、每作物周期的尿素、TSP 和 MOP 记录方案总和；并非普适施用量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`sri-lanka-doa-kiri-ala`

###### 灌溉水（`irrigation_water`）

记录取水量、输送量、水源、扬程和灌溉方式；雨养路线记录为零。

- 选定流： Irrigation water
- 绑定模式： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set version： `0.2.0`
- Flow Set group： `irrigation-water`
- 流属性/单位： Volume / m3
- 数量规则： Metered delivery or pump-flow calculation
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per ha and crop cycle
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_water_energy`
- 数量范围： Provisional irrigation screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 10000
  - 单位： m3/ha/cycle
  - 基准： delivered water per occupied hectare; zero is valid for rainfed production
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 田间机械燃料（`field_fuel`）

按作业记录每种燃料，并避免与外包服务重复计算。

- 选定流： 田间作业移动机械燃料
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- Flow Set group： `mobile-machinery-fuel`
- 流属性/单位： Volume or energy / L or MJ
- 数量规则： Purchases or machine-use records allocated to the cycle
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per ha and crop cycle
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_water_energy`
- 数量范围： Provisional field-fuel screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 400
  - 单位： L diesel-equivalent/ha/cycle
  - 基准： direct field fuel per occupied hectare; zero requires a manual or externally serviced route
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可收获牙芋作物（`harvest_ready_crop`）

记录发生起收损失前可收获球茎的总质量。

- 选定流： Harvest-ready yautia corms and cormels
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Field estimate reconciled to lifted mass and documented loss
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per ha and crop cycle
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_mass`
- 来源： `fao-ecocrop-xanthosoma`
- 数量范围： Published yield context
  - 范围角色： 典型范围 (`typical_range`)
  - 下限： 6000
  - 上限： 37000
  - 单位： kg fresh corms and cormels/ha/cycle
  - 基准： broad context spanning reported average and optimum yields; foreground mass governs
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `fao-ecocrop-xanthosoma`

##### 废物流

###### 田间残余物与未收获损失（`field_residues_losses`）

按去向记录地上部、根、损伤生物量和未收获作物。

- 选定流： Yautia field residues and losses
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Measured or sampled mass by fate
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per kg gross harvestable corm/cormel mass
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residue_destinations`
- 数量范围： Provisional residue-and-loss screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 5
  - 单位： kg fresh residue/kg gross harvestable output
  - 基准： all crop residues and uncollected loss per kg gross harvestable corm/cormel mass
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

###### 管理土壤直接氧化亚氮（`direct_soil_n2o`）

使用已声明方法根据所有适用氮源计算直接 N2O。

- 选定流： Dinitrogen monoxide, air
- 流属性/单位： Mass / kg N2O
- 数量规则： Apply the selected factor to recorded 氮投入 and convert N2O-N to N2O by 44/28
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per kg 氮投入, then per 1,000 kg accepted yautia
- 基准类型： 氮投入 (`n_input`)
- 证据类型： 方法公式 (`method_formula`)
- 采集协议： `cp_field_inputs`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： Corrected IPCC Tier 1 EF1 uncertainty screen
  - 范围角色： 不确定性范围 (`uncertainty_range`)
  - 下限： 0.002
  - 上限： 0.018
  - 单位： kg N2O-N/kg N input
  - 基准： managed-soil direct-emission factor per kg applicable 氮投入 before 44/28 conversion
  - 基准类型： 氮投入 (`n_input`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `ipcc-2019-managed-soils`

### 过程：起收与收获（`lifting_harvest`）

该节点将作物从田间移除，并在整理前形成已收集原始球茎、夹带土壤、损伤和损失。

#### 输入

##### 产品流

###### 进入起收的可收获作物（`crop_entering_lifting`）

- 选定流： Harvest-ready yautia corms and cormels
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Equal `harvest_ready_crop` for the represented field
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per harvest operation
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_mass`
- 数量范围： Node transfer identity
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 1
  - 上限： 1
  - 单位： kg input/kg cultivation-node output
  - 基准： same represented lot crossing into lifting
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

###### 收获燃料（`harvest_fuel`）

记录起收和收集作物所用的移动机械燃料；人工或纯电动路线记录为零。

- 选定流： 收获移动机械燃料
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- Flow Set group： `mobile-machinery-fuel`
- 流属性/单位： 体积或能量 / L 或 MJ
- 数量规则： 按计量、发票或机械工时推算燃料，并分配至起收原料输出
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 起收原料输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest_mass`
- 数量范围： 暂定收获燃料筛选范围
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： L diesel-equivalent/1,000 kg raw lifted output
  - 基准： 每 1,000 kg 起收原料输出的移动机械直接燃料；未使用燃料机械时为零
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 收获用电（`harvest_electricity`）

记录电动起收、收集或田间搬运设备使用的电力；人工或纯燃料路线记录为零。

- 选定流： 收获设备用电
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- Flow Set group： `electricity-supply`
- 流属性/单位： 能量 / kWh
- 数量规则： 按电表计量或设备功率乘记录工时计算，并分配至起收原料输出
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 起收原料输出
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest_mass`
- 数量范围： 暂定收获用电筛选范围
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kWh/1,000 kg raw lifted output
  - 基准： 每 1,000 kg 起收原料输出的收获设备直接用电；未使用电动收获设备时为零
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 起收原始牙芋（`raw_lifted_yautia`）

- 选定流： Raw lifted yautia corms and cormels
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Weighed collected mass before conditioning
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per kg crop entering lifting
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest_mass`
- 数量范围： Provisional lifting recovery
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0.7
  - 上限： 1
  - 单位： kg raw output/kg harvest-ready crop input
  - 基准： collected raw crop per kg estimated harvest-ready crop
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 起收损失与损伤物料（`lifting_loss`）

- 选定流： Yautia lifting loss and damaged material
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Difference between crop entering lifting and collected raw mass after soil adjustment
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per kg crop entering lifting
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_mass`
- 数量范围： Provisional lifting-loss screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.3
  - 单位： kg loss/kg harvest-ready crop input
  - 基准： uncollected and damaged crop per kg crop entering lifting
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：有限初级整理（`farm_gate_conditioning`）

该节点接收起收原料并交接修整、清洁后的球茎。水洗和动力清洁为条件路线；愈伤、冷藏、包装和加工位于默认边界之外。

#### 输入

##### 产品流

###### 进入整理的原始物料（`raw_material_conditioning_input`）

- 选定流： Raw lifted yautia corms and cormels
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Equal `raw_lifted_yautia` for the represented lot
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per conditioning lot
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_conditioning_records`
- 数量范围： Node transfer identity
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 1
  - 上限： 1
  - 单位： kg input/kg raw lifted output
  - 基准： same represented lot crossing into conditioning
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

###### 整理用水（`conditioning_water`）

- 选定流： Process water
- 绑定模式： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set version： `0.2.0`
- Flow Set group： `process-water`
- 流属性/单位： Volume / m3
- 数量规则： Metered water supplied; dry-cleaned lots report zero
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per 1,000 kg raw material received
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning_records`
- 数量范围： Provisional optional-washing water screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 2
  - 单位： m3/1,000 kg raw material received
  - 基准： supplied water per 1,000 kg raw input; zero when washing is absent
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 整理用电（`conditioning_electricity`）

- 选定流： Electricity
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- Flow Set group： `electricity-supply`
- 流属性/单位： Energy / kWh
- 数量规则： Metered or equipment-rated electricity allocated to the lot
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： per 1,000 kg raw material received
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning_records`
- 数量范围： Provisional conditioning-electricity screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： kWh/1,000 kg raw material received
  - 基准： direct electricity per 1,000 kg raw input; zero for manual dry conditioning
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 进入分级的已整理牙芋（`prepared_yautia`）

- 选定流： Prepared fresh yautia cormels
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Weighed prepared mass after included trimming/cleaning
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per kg raw material received
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_conditioning_records`
- 数量范围： Provisional conditioning yield
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0.75
  - 上限： 1
  - 单位： kg prepared material/kg raw material received
  - 基准： prepared cormels per kg raw input
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 整理剔除物与移除物料（`conditioning_rejects`）

- 选定流： Removed soil, trimmings and conditioning rejects
- 流属性/单位： Mass / kg
- 数量规则： Weighed outputs or mass-balance difference, distinguishing soil and crop material
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per kg raw material received
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_conditioning_records`
- 数量范围： Provisional conditioning-reject screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.25
  - 单位： kg removed material/kg raw material received
  - 基准： all removed soil, trimmings and rejects per kg raw input
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 整理废水（`conditioning_wastewater`）

- 选定流： Wastewater from yautia washing
- 流属性/单位： Volume / m3
- 数量规则： Measured discharge or water balance; zero without washing
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per 1,000 kg raw material received
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_conditioning_records`
- 数量范围： Provisional wastewater screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 2
  - 单位： m3/1,000 kg raw material received
  - 基准： discharge per 1,000 kg raw input; zero without washing
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：分级与去向分选（`farm_gate_grading`）

输入状态为已整理球茎。必须声明合格等级、降级食用输出、繁殖材料和剔除物，并为每一状态指定一个去向。

#### 输入

##### 产品流

###### 进入分级的已整理物料（`prepared_material_grading_input`）

- 选定流： Prepared fresh yautia cormels
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Equal `prepared_yautia` for the represented lot
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per grading lot
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_grade_destinations`
- 数量范围： Node transfer identity
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 1
  - 上限： 1
  - 单位： kg input/kg prepared output
  - 基准： same represented lot crossing into grading
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格鲜牙芋（`accepted_fresh_yautia`）

- 选定流： Yautia `72013e1f-538d-4031-b97a-03bfaa42b37d`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式： `fixed`
- 数量规则： Weighed accepted mass; normalize final dataset to exactly 1,000 kg
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per kg prepared material and final 1,000 kg reference product
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_grade_destinations`
- 来源： `codex-tannia-224-2001`
- 数量范围： Provisional accepted-grade recovery
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0.6
  - 上限： 1
  - 单位： kg accepted product/kg prepared material graded
  - 基准： accepted fresh mass per kg prepared input; actual grade records govern
  - 基准类型： 参考流 (`reference_flow`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 降级食用牙芋（`downgraded_edible_yautia`）

- 选定流： Downgraded fresh yautia
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Weighed downgraded mass by buyer or use
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per kg prepared material graded
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_grade_destinations`
- 数量范围： Provisional downgraded-output screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.35
  - 单位： kg downgraded edible output/kg prepared material graded
  - 基准： downgraded output with documented use per kg prepared input
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 留用或出售的种植材料（`planting_material_output`）

- 选定流： Yautia planting material
- 流属性/单位： Mass and number / kg and item
- 数量规则： Weighed and counted propagation material by retention or sale destination
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per kg prepared material graded
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_grade_destinations`
- 来源： `fao-qds-2010`
- 数量范围： Provisional propagation-output screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.25
  - 单位： kg planting material/kg prepared material graded
  - 基准： intentionally retained or sold propagation material per kg prepared input
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 分级剔除物与残余物（`grading_rejects`）

- 选定流： Yautia grading rejects and residues
- 流属性/单位： Mass / kg fresh mass
- 数量规则： Weighed reject mass or mass-balance residual, with destination stated
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： per kg prepared material graded
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_grade_destinations`
- 来源： `codex-tannia-224-2001`
- 数量范围： Provisional grading-reject screen
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.2
  - 单位： kg rejects/kg prepared material graded
  - 基准： rejects after product outputs per kg prepared input
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_output_classification` | all outputs | Classify each output once as reference product, downgraded product, propagation material, residue, waste, or loss; record one hand-off and prohibit double counting. | `mass-balance-identity` |
| `allocation_planting_material` | propagation output | Treat internally retained material as an internal transfer. For independently sold intended products, prefer subdivision; otherwise allocate remaining shared burdens by fresh mass and disclose an economic sensitivity when values differ materially. |  |
| `allocation_residue` | residues and rejects | Give no co-product allocation to material returned to soil or discarded without a documented product function; include its treatment burden. |  |
| `allocation_shared_operations` | shared operations | Assign separable inputs directly before allocating remaining shared burdens; disclose output quantities, prices where used, method and precedence. |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_cultivation` | planting and crop inputs | invoices, labels, field logs, assays | identity; quantity; nutrient assay; date; area; planting count; origin | reconcile purchase, stock and application logs | kg product; kg nutrient; item; ha | every event | complete crop cycle | each field | sum by product and nutrient | invoice, label, assay, operator log |
| `cp_water_energy` | `field_cultivation` | water and energy | meters, pump logs, invoices, machine hours | source; volume; lift; energy; fuel; operation | meter or engineering calculation | m3; kWh; L; MJ | each event/interval | complete cycle | each field/shared asset | sum direct use; documented shared allocation | calibration, invoice, runtime log |
| `cp_harvest_mass` | `lifting_harvest` | crop, raw output, loss and energy | weigh tickets, samples, harvest logs | area; crop estimate; raw mass; damage; loss; soil; energy | calibrated weighing and documented sampling | kg; L; kWh | each field/lot | entire harvest | each field/lot | reconcile crop to raw output and loss | scale check, sampling record, operator log |
| `cp_residue_destinations` | `field_cultivation` | residues and loss | sampling, load weights, destination logs | material; mass; moisture; fate; recipient | representative sampling or weighed loads | kg fresh/dry mass | each event | complete cycle | each field | sum by material and fate | sample, scale and destination evidence |
| `cp_conditioning_records` | `farm_gate_conditioning` | material, utilities and rejects | lot weights, meters, batch and discharge logs | raw mass; operation; water; electricity; prepared mass; rejects; wastewater | weigh before/after and meter utilities | kg; m3; kWh | each lot | all conditioning | each conditioning line or station | close mass and water balances | calibrated scale/meter and destination log |
| `cp_grade_destinations` | `farm_gate_grading` | all grade states | grade sheets, scale tickets, invoices | input; specification; output masses; count; use; price | weigh each state and link to same lot | kg; item; currency/kg | each lot | all grading | each grading line or station | sum by state/destination | scale, grade and destination evidence |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all rows | cycle or lot amount × 1,000 / accepted fresh yautia mass, after balances close | amount; accepted mass | amount per 1,000 kg reference product | `mass-balance-identity` |
| `calc_nutrients` | fertilizer | nutrient mass = product mass × assay; state P/P2O5 and K/K2O conversion | product mass; assay | kg nutrient |  |
| `calc_direct_n2o` | soil N | selected factor × applicable N; multiply N2O-N by 44/28 to report N2O | kg N; factor | kg N2O | `ipcc-2019-managed-soils` |
| `calc_conditioning_balance` | conditioning | raw input = prepared output + removed soil/trimmings/rejects + unexplained difference | lot masses | closed balance | `mass-balance-identity` |
| `calc_grade_balance` | grading | prepared input = accepted + downgraded + propagation material + rejects | state masses | closed output balance | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Verify *Xanthosoma* identity and prohibit silent *Colocasia* substitution. | planting-material, crop inspection or agronomist record |
| `dq_temporal` | foreground | Cover one complete cycle and all contributing lots. | dated field and lot records |
| `dq_mass_balance` | harvest through grading | Reconcile each hand-off and explain differences exceeding 2% of the relevant input. | calibrated weights and worksheet |
| `dq_range_review` | every inventory card | Use ranges as QA context, retain foreground values, and explain outliers. | range review and linked evidence |
| `dq_co_products` | multiple outputs | Enumerate every intended output/destination and prevent double counting. | transfers, invoices and destination receipts |
| `dq_completeness` | inventory | Account for at least 95% by mass of external non-water materials and disclose missing water, energy, pesticide, nutrient, emission, reject or destination records. | completeness and missing-data logs |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Exactly one 1,000 kg output uses Yautia flow `72013e1f-538d-4031-b97a-03bfaa42b37d`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66` and all qualifiers. |  |
| `validate_species_boundary` | identity | Reject an ambiguous “cocoyam” identity or *Colocasia* substitution without reviewed proxy disclosure. | `fao-aroids-postharvest`; `codex-tannia-224-2001` |
| `validate_node_handoffs` | process map | Require exact cultivation→lifting, lifting→conditioning and conditioning→grading lot links. | `mass-balance-identity` |
| `validate_destinations` | grading | Require explicit zero or measured accepted, downgraded, propagation and reject states, each with one hand-off. | `codex-tannia-224-2001` |
| `validate_conditional_routes` | conditioning | Unused washing/powered routes have zero flows; used routes report utilities and wastes. Storage/packaging requires a boundary extension. |  |
| `validate_ranges` | all cards | Require ordered nonnegative bounds, unit, denominator, basis kind and evidence kind; external ranges require source ids and regional examples are not limits. |  |
| `validate_multi_output` | intended outputs | Require a complete output set and explicit attribution; prohibit crediting internally transferred planting material as a sale. |  |
| `validate_flow_set_bindings` | 参数化身份的产品输入 | 要求卡片给出的准确 Flow Set id、版本和单一最窄功能组；保持产品输入方向，并在发布 TIDAS 前将每个最终交换解析为已核实 UUID。 |  |
| `validate_direct_emissions` | field emissions | Require selected soil-emission method, 氮投入, factors, conversions and flow assignments; never infer emissions from fertilizer product mass alone. | `ipcc-2019-managed-soils` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | Foreground farm-gate dataset for fresh unprocessed yautia |
| downstream_use | Reviewed `secondary_dataset` or `background_dataset` for systems requiring fresh *Xanthosoma* at farm gate |
| allowed_use | Geography-, cycle-, cultivar-, grade-, irrigation- and conditioning-matched attributional modelling |
| excluded_use | *Colocasia* taro, edible-leaf production, processed/preserved yautia, or post-farm transport/storage/packaging unless added |
| required_metadata | geography; crop year/cycle; species/cultivar; system; irrigation; planting origin; area; yield; grade; wet basis; lifting; conditioning; washing; gate; destinations; allocation |
| required_quality_disclosure | record coverage; range evidence status; mass-balance closure; missing data/proxies; assays; emissions method; utility allocation; co-product records; boundary extensions |
| update_trigger | material change in identity, geography, management, yield, irrigation, harvest, conditioning, grade, destinations, allocation, emissions method or reference UUID |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `fao-qds-2010` | official_guidance | FAO, *Quality Declared Planting Material: Protocols and Standards for Vegetatively Propagated Crops*, 2010, https://www.fao.org/4/i1195e/i1195e00.pdf | *Xanthosoma* identity, synonyms and propagation material |
| `sri-lanka-doa-kiri-ala` | extension_guidance | Sri Lanka Department of Agriculture, “Kiri Ala – Xanthosoma sagittifolium,” https://doa.gov.lk/hordi-crop-kiri-ala/ | route, planting density, fertilizer schedule, harvest and regional yield |
| `fao-ecocrop-xanthosoma` | dataset | FAO Ecocrop, “Xanthosoma sagittifolium,” crop id 2168, https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=2168 | identity, growing period and broad yield context |
| `codex-tannia-224-2001` | standard | Codex Alimentarius, CODEX STAN 224-2001, https://www.fao.org/4/a1389e/a1389e00.pdf | fresh tannia identity, quality, harvest care and grading |
| `fao-aroids-postharvest` | handbook | FAO INPhO, *Edible Aroids: Post-harvest Operations*, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Edible_aroids.pdf | *Xanthosoma* versus *Colocasia* and post-harvest route |
| `ipcc-2019-managed-soils` | method_factor | IPCC, *2019 Refinement*, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | managed-soil N2O method and EF1 uncertainty |
| `mass-balance-identity` | method_factor | Conservation of mass for linked foreground nodes | transfer, conditioning and grading balances |
