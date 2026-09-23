---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.spinach
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 菠菜

## 1. 范围与适用性

本 PCR 覆盖新鲜未加工菠菜从露地或设施生产床建植、田间管理、切割或拔取、去除土壤和异物、可选清洗与冷却、一次包装，直至声明的农场门或包装场门交付。产品形式可为嫩叶、束装或整叶，前提是声明产品状态和采收路线。菠菜种子生产、种植材料苗圃生产、冷冻或罐藏菠菜、即食餐食、零售、消费者储存、烹饪和消费不在范围内。只有在声明交付门之前发生的加工能源和包装才纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.spinach |
| classification_refs | CPC 3.0:01215 Spinach |
| covered_products | 在声明交付门交付的新鲜未加工菠菜叶、嫩叶、菠菜束或整株 |
| excluded_products | 菠菜种子和种植材料，冷冻、罐藏、干燥、熟制、泥化或其他加工菠菜，以及下游零售和消费 |
| representative_product | 满足声明采收大小、清洁度、修整和等级要求的商品新鲜菠菜叶 |
| production_route | 直播或移栽建植、叶片生产管理、一次或多次切割、分级、可选清洗和冷却以及一次包装 |
| market_state | 农场门或包装场门的新鲜未加工菠菜，散装、束装或使用声明的一次包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场门或包装场门的商品新鲜菠菜 |
| How much | 1,000 kg |
| How well | 新鲜、未加工，并声明叶龄或切次、采收形式、清洁度、修整、等级、水分状态和包装状态 |
| How long or cycle | 一个声明作物周期和采收批次；同一播种批次的多次切割合并为同一作物周期产出 |
| reference_flow_link | `spinach_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Fresh spinach at farm gate |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产地理范围；作物形式（嫩叶、束装或整叶）；品种或品种组；播种或移栽日期；采收日期和切次；声明交付门；等级和大小标准；露地或设施路线；清洗或未清洗状态；冷却状态；包装状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_spinach_mass` | 商品菠菜和采收记录 | Mass | kg | 分开记录切割毛重、商品鲜重、拒收物、土壤或异物以及田间残体的实测或计算质量。 |
| `area_yield_normalization` | 露地和设施生产记录 | Area and mass | ha 和 kg | 按苗床、田块或设施单元记录投入和采收，再按同一作物周期的商品产出归一化。 |
| `nutrient_product_basis` | 肥料和堆肥投入 | 施用产品和声明养分的质量 | kg product、kg N、kg P2O5 或 kg K2O | 保留采购产品质量；只有依据标签、供应商规格或实验室结果记录的浓度才能换算养分基准。 |
| `water_volume_basis` | 灌溉和清洗水 | Volume | m3 | 分开记录作物灌溉和采后清洗的计量或计算供水；除非声明方法要求水量平衡，不得用降雨替代灌溉。 |
| `multi_cut_output` | 嫩叶和多次采收路线 | Mass | kg | 汇总声明播种或移栽批次的商品切割量，并用拒收物和未采收作物材料核对每次切割。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已整备的生产床或设施单元接收菠菜种子或移栽材料，并披露先前土地利用和排除的基础设施作业 |
| starting_condition_role | 声明菠菜作物周期和投入核算的起点 |
| product_classification_scope | CPC 3.0:01215 菠菜，至声明农场门或包装场门 |
| recursive_input_rule | 采购的菠菜种子或移栽材料作为一次上游产品投入连接；其自身生产不在本 PCR 内，除非另有上游数据集。 |
| upstream_dataset_requirement | 使用时须连接种子或移栽苗、肥料、改良剂、植保产品、灌溉水、能源、包装以及外购运输或处理服务的上游数据集。 |
| disclosure | 披露生产地理范围、露地或设施路线、作物周期、播种密度、灌溉来源和计量基准、养分基准、植保方案、采收形式、产量与拒收物核对、清洗与冷却、包装、残体去向和交付门位置。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 建植和田间管理 | 纳入生产声明菠菜产出的苗床整备、播种或移栽、作物管理及作物周期投入；披露先前土地利用，排除无关基础设施建设。 | `ucanr-spinach-production-1996`; `govnl-spinach-production-guide-2025` |
| `boundary_gate_preparation` | 采收和包装 | 前景系统在声明农场门或包装场门结束；交付前发生的切割、分级、修整、清洗、冷却和一次包装均须纳入。 | `usda-ams-bunched-spinach-standard`; `psu-spinach-harvest-guidance-2025` |
| `boundary_soil_emissions` | 肥料、作物残体和受控土壤 | 使用一个声明方法，根据记录的养分投入和残体去向估算适用的直接和间接氮排放；不得重复计算同一氮途径。 | `ipcc-2019-refinement-nitrogen` |
| `boundary_residue_fate` | 田间残体、拒收物和修剪物 | 分别记录还田、堆肥、饲料利用、处理或处置；没有证明生产性用途的材料保留为残体或废物流。 | `ucanr-spinach-production-1996`; `usda-ams-bunched-spinach-standard` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 菠菜作物建植 | required | 每个声明的播种或移栽批次 | 前景作物建植 | 已建生产床或设施面积 |
| `crop_management` | 菠菜作物管理 | required | 每个声明的作物周期 | 前景受控生物生产 | 管理面积和作物周期采收量 |
| `harvest_and_gate_preparation` | 采收和交付门准备 | required | 每个声明的采收批次 | 前景采收、调理和交付门交接 | 1,000 kg 商品新鲜菠菜 |

### 过程：菠菜作物建植（`crop_establishment`）

#### 输入

##### 产品流

###### 流：菠菜种子或移栽材料（`seed_or_transplant_input`）

记录进入每个声明苗床或设施单元的采购种植材料，并区分种子和移栽苗。

- 选定流：Spinach seed or transplant material
- 流属性/单位：Number of viable units or mass / seed、plant 或 kg
- 数量规则：按苗床记录采购批次数量和有活力的播种或移栽数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一作物周期每 1,000 kg 商品新鲜菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`govnl-spinach-production-guide-2025`
- 数量范围：播种或移栽数量筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：10
  - 上限：17
  - 单位：kg seed/ha
  - 基准：直播鲜食菠菜生产床
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`govnl-spinach-production-guide-2025`; `ufifas-leafy-vegetable-guide-2024`

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
- 归一化基准：同一作物周期每 1,000 kg 商品新鲜菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`ucanr-spinach-production-1996`; `govnl-spinach-production-guide-2025`
- 数量范围：建植期氮筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：22
  - 上限：34
  - 单位：kg N/ha
  - 基准：鲜食菠菜播前或播种施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ucanr-spinach-production-1996`

- 数量范围：依土壤测试的磷筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kg P2O5/ha
  - 基准：等待土壤测试和养分计划记录的建植施用量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：依土壤测试的钾筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：200
  - 单位：kg K2O/ha
  - 基准：等待土壤测试和养分计划记录的建植施用量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：建植灌溉水（`establishment_irrigation_water`）

将整床、萌发或移栽建植供水与后续作物灌溉分开记录。

- 选定流：Irrigation water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：按苗床和水源记录的计量或水量平衡建植灌溉量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一作物周期每 1,000 kg 商品新鲜菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`ucanr-spinach-production-1996`; `fao-spinach-irrigation-schedule`
- 数量范围：建植灌溉筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：100
  - 上限：300
  - 单位：m3/ha
  - 基准：播种至出苗或移栽建植期间的供水量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ucanr-spinach-production-1996`; `fao-spinach-irrigation-schedule`

###### 流：整床用移动机械燃料（`establishment_machinery_fuel`）

田间机械跨越前景边界时记录整床、耕作、播种或移栽用燃料。

- 选定流：Mobile machinery fuel
- 流属性/单位：Energy or mass / MJ 或 kg
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：按苗床分配计量燃料或设备燃料日志。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：同一作物周期每 1,000 kg 商品新鲜菠菜
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`ucanr-spinach-production-1996`
- 数量范围：整床和播种燃料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：50
  - 上限：400
  - 单位：MJ/ha
  - 基准：整床和播种作业
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 流：菠菜生产面积占用（`establishment_land_occupation`）

记录苗床或设施单元在作物周期建植和归属期间占用的面积。

- 选定流：Occupation, agricultural land
- 流属性/单位：Area-time / m2*a
- 数量规则：声明生产面积乘以代表的作物周期持续时间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_records`
- 来源：`govnl-spinach-production-guide-2025`
- 数量范围：生产面积筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：0.5
  - 单位：ha per 1,000 kg
  - 基准：声明作物周期面积按商品产出归一化
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：菠菜作物管理（`crop_management`）

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
- 归一化基准：每 1,000 kg 商品新鲜菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`ucanr-spinach-production-1996`; `govnl-spinach-production-guide-2025`
- 数量范围：作物周期氮筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：22
  - 上限：56
  - 单位：kg N/ha
  - 基准：鲜食菠菜的播前加补充氮
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ucanr-spinach-production-1996`

- 数量范围：生长期磷筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kg P2O5/ha
  - 基准：等待土壤测试和养分计划记录的生长期施用量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：生长期钾筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：200
  - 单位：kg K2O/ha
  - 基准：等待土壤测试和养分计划记录的生长期施用量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：植保产品（`crop_protection_input`）

菠菜施用植保产品时，按有效成分或商业制剂记录各项产品。

- 选定流：Crop-protection product
- 流属性/单位：Mass / kg product or kg active ingredient
- 数量规则：按田块和作物周期使用供应商发票、喷施日志或施用记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 商品新鲜菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`govnl-spinach-production-guide-2025`
- 数量范围：植保产品数量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg product/ha
  - 基准：代表作物周期的植保产品施用总量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：作物生长期间的灌溉水（`crop_irrigation_water`）

按田块、水源和灌溉事件或计量周期记录作物生长期间的供水。

- 选定流：Irrigation water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：汇总代表作物周期的计量或有文件的水量平衡灌溉量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`ucanr-spinach-production-1996`; `fao-spinach-irrigation-schedule`
- 数量范围：作物周期灌溉筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：413
  - 上限：1240
  - 单位：m3/ha
  - 基准：鲜食菠菜从播种至采收的总灌溉量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ucanr-spinach-production-1996`

###### 流：作物管理移动机械燃料（`crop_machinery_fuel`）

记录分配给作物周期的耕作、机械除草、施肥灌溉设备及其他移动机械燃料。

- 选定流：Mobile machinery fuel
- 流属性/单位：Energy or mass / MJ 或 kg
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：按照燃料日志或设备活动估算分配至菠菜作物周期。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 商品新鲜菠菜
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`ucanr-spinach-production-1996`
- 数量范围：作物管理燃料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：100
  - 上限：800
  - 单位：MJ/ha
  - 基准：耕作和作物管理作业
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 流：还田的菠菜作物残体（`field_residue_output`）

将未采收的菠菜生物量或切割残体与商品产品和场外拒收物分开记录。

- 选定流：Spinach crop residue
- 流属性/单位：Mass / kg wet residue
- 数量规则：依据田间记录核对采前生物量、采收量和残体量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_reconciliation`
- 来源：`ucanr-spinach-production-1996`
- 数量范围：田间残体筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：4000
  - 单位：kg wet residue/ha
  - 基准：作物周期中的未采收或还田菠菜生物量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 流：作物产出的可采收新鲜菠菜（`harvest_ready_spinach_output`）

记录离开作物管理过程、进入切割、拔取或包装场准备的鲜菠菜质量。

- 选定流：Harvest-ready fresh spinach
- 流属性/单位：Mass / kg
- 数量规则：记录清洗、修整和拒收物分离前的田块或苗床采收量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_reconciliation`
- 来源：`psu-spinach-harvest-guidance-2025`
- 数量范围：采收量核对范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1500
  - 单位：kg harvested mass per 1,000 kg marketable output
  - 基准：分级、修整和拒收物分离前的田间毛采收量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 流：不可销售的田间菠菜和作物损失（`field_spinach_loss_output`）

记录留在田间或交付门准备前移除的未采收、受损、抽薹或其他不可销售菠菜及其去向。

- 选定流：Unmarketable spinach and crop loss
- 流属性/单位：Mass / kg wet material
- 数量规则：用潜在或采收作物量与有文件的商品产出差额计算，并声明物理去向。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_reconciliation`
- 来源：`psu-spinach-harvest-guidance-2025`
- 数量范围：田间损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg wet material per 1,000 kg marketable output
  - 基准：田间和包装前损失
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 流：受控土壤直接氧化亚氮（`direct_n2o_air_output`）

根据声明的氮投入和选定的 IPCC 兼容方法计算土壤直接氧化亚氮，并报告排放至空气。

- 选定流：Nitrous oxide, emissions to air
- 流属性/单位：Mass / kg N2O
- 数量规则：将声明的氮排放因子应用于符合条件的作物周期氮投入，并考虑选定的气候和土壤方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜菠菜
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-refinement-nitrogen`
- 数量范围：直接氧化亚氮 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg N2O/ha
  - 基准：代表作物周期的受控土壤氮排放
  - 基准类型：氮投入（`n_input`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ipcc-2019-refinement-nitrogen`

###### 流：田间损失进入淡水的硝酸盐（`nitrate_freshwater_output`）

只有声明的前景水量平衡或排放方法支持时，才建模进入淡水的硝酸盐损失。

- 选定流：Nitrate, emissions to freshwater
- 流属性/单位：Mass / kg NO3-
- 数量规则：根据符合条件的氮盈余和选定的场址或方法因子计算；不得仅从肥料采购量推断损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜菠菜
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-refinement-nitrogen`
- 数量范围：硝酸盐损失 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：kg NO3-/ha
  - 基准：声明的氮盈余和水损失途径
  - 基准类型：氮投入（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：采收和交付门准备（`harvest_and_gate_preparation`）

#### 输入

##### 产品流

###### 流：进入准备过程的可采收新鲜菠菜（`harvest_ready_spinach_input`）

记录从田间或设施单元转入分级、修整、清洗、冷却或一次包装的采收菠菜。

- 选定流：Harvest-ready fresh spinach
- 流属性/单位：Mass / kg
- 数量规则：用交接单或收料秤记录核对来源作物周期采收量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_reconciliation`
- 来源：`psu-spinach-harvest-guidance-2025`
- 数量范围：准备过程收料质量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1500
  - 单位：kg received material per 1,000 kg marketable spinach
  - 基准：进入分级、清洗、冷却或包装的采收菠菜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：可选采后清洗用水（`wash_water_input`）

在声明交付门之前发生清洗时，记录用于去除土壤和异物的用水。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`process-water`
- 数量规则：记录菠菜清洗的计量或批次供水量，不含作物灌溉水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 清洗后商品菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`
- 来源：`usda-ams-bunched-spinach-standard`
- 数量范围：清洗水 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m3 per 1,000 kg marketable spinach
  - 基准：跨越交付门准备边界的批次清洗或流槽用水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：清洗、冷却和包装用电（`postharvest_electricity_input`）

在相关作业纳入范围时，记录清洗、强制风冷、称量、分选和包装设备用电。

- 选定流：Electricity supply
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：按菠菜吞吐量分配计量或设备级用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：交付门每 1,000 kg 商品新鲜菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_energy_records`
- 来源：`psu-spinach-harvest-guidance-2025`
- 数量范围：采后用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5
  - 上限：120
  - 单位：kWh per 1,000 kg marketable spinach
  - 基准：清洗、冷却、分级和包装作业
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：新鲜菠菜一次包装（`primary_packaging_input`）

记录与菠菜一起跨越交付门准备边界的袋、束带、周转箱、纸箱或其他包装。

- 选定流：Primary packaging
- 流属性/单位：Mass / kg packaging material
- 绑定模式：`parameterized`
- 流集：`flow-set.packaging-function`
- 流集版本：`0.2.0`
- 流集分组：`flexible-packaging`
- 数量规则：用包装物料清单和计数单位核对包装后的商品产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装商品菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`usda-ams-bunched-spinach-standard`
- 数量范围：一次包装筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2
  - 上限：35
  - 单位：kg packaging material per 1,000 kg spinach
  - 基准：声明的一次包装形式和可重复使用容器核算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 流：清洗和修整拒收物（`wash_trim_reject_output`）

记录准备过程中去除的土壤、受损叶片、粗茎和修剪物及其物理去向。

- 选定流：Spinach washing and trimming reject
- 流属性/单位：Mass / kg wet material
- 数量规则：称量或用收料量和包装商品菠菜核对移除量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交付门每 1,000 kg 商品菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`
- 来源：`usda-ams-bunched-spinach-standard`
- 数量范围：准备拒收物筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：0
  - 上限：250
  - 单位：kg wet material per 1,000 kg marketable spinach
  - 基准：交付门前去除的土壤、受损叶片、粗茎和修剪物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：使用后的清洗水或废水（`wash_wastewater_output`）

清洗发生在声明交付门之前并排放或送处理时，记录准备过程离开的清洗水。

- 选定流：Wastewater from spinach washing
- 流属性/单位：Volume / m3
- 数量规则：清洗水投入减去有文件的保留或蒸发量，并与排放或处理记录核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 清洗后商品菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_postharvest_records`
- 来源：`usda-ams-bunched-spinach-standard`
- 数量范围：清洗废水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m3 per 1,000 kg marketable washed spinach
  - 基准：离开准备边界的使用后清洗水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 流：声明交付门的商品新鲜菠菜（`spinach_farm_gate_output`）

记录分级以及范围内清洗或冷却之后，跨越声明农场门或包装场门的包装或未包装菠菜产品。

- 选定流：Fresh spinach at farm gate
- 流属性/单位：Mass / kg
- 数量规则：用秤、发运或批次记录获得拒收物和修剪物核对后的最终销售质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 商品新鲜菠菜参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_output_records`
- 来源：`usda-ams-bunched-spinach-standard`; `psu-spinach-harvest-guidance-2025`
- 数量范围：参考产出 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000
  - 单位：kg marketable fresh spinach
  - 基准：农场门或包装场门声明参考产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）
  - 来源：`usda-ams-bunched-spinach-standard`

##### 废物流

###### 流：交付门准备的最终菠菜拒收物（`final_spinach_reject_output`）

记录分级或包装后拒收的产品，包括其饲料、堆肥、处理或处置去向。

- 选定流：Final spinach rejects
- 流属性/单位：Mass / kg wet material
- 数量规则：用最终分级和包装拒收物重量核对收料量和商品产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交付门每 1,000 kg 商品新鲜菠菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_output_records`
- 来源：`usda-ams-bunched-spinach-standard`
- 数量范围：最终拒收物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg wet material per 1,000 kg marketable spinach
  - 基准：准备后的分级和包装拒收物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_single_crop_cycle` | 共享田块、苗床或设施单元 | 使用记录的苗床或单元面积和作物周期产出将投入归属菠菜；没有另一作物独立记录时不得分配给它。 | `ucanr-spinach-production-1996` |
| `allocation_multi_cut_spinach` | 同一播种批次的多次切割 | 将连续切割视为同一声明作物周期的产出，核对各次切割后再按菠菜总商品量归一化。 | `psu-spinach-harvest-guidance-2025` |
| `allocation_residue_fate` | 田间残体、拒收物和修剪物 | 只有存在有文件的接收方、数量和预期用途时才为残体分配共产品抵扣；否则保留菠菜生产负荷并报告残体去向。 | `usda-ams-bunched-spinach-standard` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | seed, transplant, and establishment nutrients | seed invoice, seed lot, transplant, and input application records | lot id; material type; viable quantity; field or bed; date; product mass; nutrient concentration | retain supplier record and field application log | seed, plant, kg product, kg nutrient | each campaign and application | full represented crop cycle | each spinach bed or protected unit | sum by campaign and normalize to marketable output | supplier label, lot trace, application record, and crop-cycle reconciliation |
| `cp_irrigation_records` | `crop_establishment`; `crop_management` | establishment and crop irrigation | meter, pump, irrigation controller, or water-balance record | source; meter start and end; event date; area; irrigation method; rainfall adjustment | meter reading or documented water-balance calculation | m3 | each event or meter period | full represented crop cycle | each field, bed, or protected unit | sum delivered irrigation by crop cycle and source | calibrated meter or documented balance inputs |
| `cp_field_energy_records` | `crop_establishment`; `crop_management` | mobile machinery fuel | fuel invoice and equipment activity log | fuel type; quantity; equipment; operation; field; date; allocation basis | supplier invoice plus equipment log or activity estimate | L, kg, or MJ | each refuelling or operation | full represented crop cycle | each spinach production unit | allocate shared operations by area, hours, or fuel record | invoice, equipment log, and allocation calculation |
| `cp_nutrient_records` | `crop_management` | crop nutrients and nitrogen basis | nutrient plan, supplier invoice, and application log | product; nutrient concentration; application date; area; quantity; method | reconcile product records with field application records | kg product and kg nutrient | each application | full represented crop cycle | each spinach production unit | sum nutrient mass by crop cycle and declared basis | soil test, label or supplier specification, and application log |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | spray or treatment log and supplier record | product; active ingredient; rate; area; date; target; equipment | record each application and product lot | kg product or kg active ingredient | each application | full represented crop cycle | each spinach production unit | sum by active ingredient and crop cycle | application log and product label |
| `cp_field_records` | `crop_establishment` | land occupation and area | field register or protected-unit register | area; unit; land use; crop dates; bed identifier; protection structure | verify area and dates against production register | ha, m2, and days | each crop cycle | full represented crop cycle | each spinach field or protected unit | calculate area-time and normalize to gate output | field map, register, and date evidence |
| `cp_harvest_reconciliation` | `crop_management`; `harvest_and_gate_preparation` | harvest, field residue, and field loss | harvest ticket, scale record, and field loss record | field; cut number; date; gross mass; marketable mass; residue; loss; destination | weigh each harvest or use documented lot reconciliation | kg wet material | each cut or harvest lot | full represented harvest campaign | each spinach field or bed | reconcile gross harvest, marketable output, rejects, and residue | scale record, lot ticket, and destination record |
| `cp_postharvest_records` | `harvest_and_gate_preparation` | wash water, electricity, rejects, and wastewater | pack-house batch and utility records | received mass; wash water; discharge; electricity; trim; batch; date; fate | batch record plus meter allocation | kg, m3, and kWh | each batch or meter period | full represented harvest campaign | each preparation line or pack-house | aggregate by batch and normalize to marketable packed output | meter record, batch sheet, and waste or treatment receipt |
| `cp_postharvest_energy_records` | `harvest_and_gate_preparation` | washing, cooling, and packing electricity | electricity meter and equipment throughput record | meter period; line; kWh; throughput; cooling duration; batch | meter allocation by throughput or run time | kWh | each meter period or batch | full represented harvest campaign | each in-scope preparation line | allocate shared electricity by throughput and reconcile to batch output | meter data and allocation calculation |
| `cp_packaging_records` | `harvest_and_gate_preparation` | primary packaging | packaging specification, bill of materials, and count record | material; unit mass; units; reuse status; batch; output mass | packaging count and specification reconciliation | kg material and units | each packaging lot or batch | full represented harvest campaign | each preparation line | sum virgin and reusable packaging separately per packed output | supplier specification, count sheet, and reuse declaration |
| `cp_gate_output_records` | `harvest_and_gate_preparation` | marketable product and final rejects | dispatch scale, lot record, and reject record | lot; date; packed mass; unpacked mass; grade; reject; destination; gate | final scale and lot reconciliation | kg wet spinach | each dispatch lot | full represented harvest campaign | declared gate | sum saleable output and reject streams; normalize to 1,000 kg | certified scale or lot record and grade record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_mass` | fertilizer rows | product mass × declared nutrient fraction; retain the original product mass and nutrient basis | product invoice; nutrient concentration; application record | kg N, kg P2O5, or kg K2O by crop cycle | `govnl-spinach-production-guide-2025` |
| `calc_crop_cycle_normalization` | all crop-cycle inputs | crop-cycle quantity ÷ marketable fresh spinach mass × 1,000 kg | crop-cycle input; marketable output | normalized quantity per 1,000 kg output |  |
| `calc_multi_cut_output` | repeated harvest routes | sum marketable mass from all declared cuts in the campaign; reconcile gross mass and rejects before normalization | cut tickets; lot records; reject records | total crop-cycle marketable mass | `psu-spinach-harvest-guidance-2025` |
| `calc_area_time` | land occupation | production area × represented crop-cycle duration; disclose whether protected area is included | area register; crop dates | area-time quantity | `govnl-spinach-production-guide-2025` |
| `calc_nitrogen_emission` | direct soil nitrous oxide | apply the selected IPCC-compatible factor to eligible nitrogen input and declared soil or climate method; document factors in the dataset | nutrient records; method choice; crop-cycle area | kg N2O emitted to air | `ipcc-2019-refinement-nitrogen` |
| `calc_gate_mass_balance` | harvest and packing | received harvest = marketable output + rejects + residue or loss, with documented measurement uncertainty | harvest tickets; packing records; reject and residue records | reconciled mass balance | `usda-ams-bunched-spinach-standard` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all flow and product records | 声明菠菜形式、品种组、作物路线、交付门、采收切次和产品状态；需要时在前景数据集构建时解析平台身份。 | lot record, product description, and reference-flow qualifiers |
| `quality_measurement` | inputs and outputs | 优先使用经校准的计量器、秤、供应商发票和施用日志；无法直接测量时记录估算和分配方法。 | meter calibration, scale record, invoice, or calculation sheet |
| `quality_temporal` | crop-cycle inventory | 覆盖代表的完整作物周期和采收批次，包括所有切次和物料施用。 | sowing or transplant date, application log, harvest tickets, and dispatch records |
| `quality_completeness` | crop-cycle balance | 核对种子或移栽材料、养分投入、灌溉、采收、商品产出、残体、拒收物和废水流。 | crop-cycle mass and input reconciliation |
| `quality_disclosure` | dataset metadata | 披露设施生产、灌溉来源、养分基准、植保产品、清洗、冷却、包装以及残体去向。 | dataset metadata and supporting records |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | reference flow | 声明参考产出必须是声明交付门的新鲜商品菠菜，且使用 kg 质量；冷冻、罐藏、熟制或零售产品不在本 PCR 范围内。 | `usda-ams-bunched-spinach-standard` |
| `validate_crop_cycle_dates` | crop establishment and management | 播种或移栽、投入施用、灌溉、采收切次和交付门产出必须落在声明作物周期内，或明确归属于该周期。 | `govnl-spinach-production-guide-2025` |
| `validate_nutrient_basis` | fertilizer inputs and emissions | 必须具备产品质量、养分浓度、养分基准和排放计算方法且相互一致；不得将产品质量和养分质量作为同一交换重复计入。 | `ucanr-spinach-production-1996`; `ipcc-2019-refinement-nitrogen` |
| `validate_mass_balance` | harvest and gate preparation | 毛采收量和收料量必须在声明测量不确定度内与商品产出、拒收物、残体和损失相符。 | `usda-ams-bunched-spinach-standard` |
| `validate_flow_set_resolution` | parameterized rows | 前景数据生成时，每个参数化行必须解析为与指定 Flow Set 分组、属性、单位和地理范围兼容的已验证 UUID；否则保留明确的证据缺口覆盖发现。 |  |
| `validate_qualifiers` | reference flow and dataset metadata | 数据包必须包含必需限定信息，包括作物形式、切次、交付门、清洗、冷却、包装和生产路线。 | `usda-ams-bunched-spinach-standard`; `psu-spinach-harvest-guidance-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门或包装场门新鲜菠菜的前景农业生产数据集 |
| downstream_use | 新鲜菠菜产品系统的 secondary_dataset；只有提供方发布具备所需元数据的代表性区域或市场平均数据集时，才可作为 background_dataset |
| allowed_use | 在声明地理范围和产品状态内开展产品比较、作物周期清单建模、农场或包装场改进以及新鲜菠菜供应链评估 |
| excluded_use | 冷冻、罐藏、熟制、干燥、零售、消费、种子生产或无限定叶菜替代；未披露情景时不得在设施和露地路线间外推 |
| required_metadata | 产品形式；品种组；作物路线；地理范围；作物日期；切次；交付门；产量；灌溉来源和数量；养分基准；植保方案；清洗和冷却；包装；残体和拒收物去向 |
| required_quality_disclosure | 时间覆盖、场址范围、实测与计算值、分配规则、质量平衡结果、平台身份解析状态以及需要用前景记录替换的所有暂定估算 |
| update_trigger | 作物路线、灌溉方式、养分方案、采收形式、清洗或冷却线、包装形式、交付门定义发生变化，或证据变化影响实质量或边界规则 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ucanr-spinach-production-1996` | literature | University of California Agriculture and Natural Resources, *Spinach Production in California*, ANR Publication 7212, https://anrcatalog.ucanr.edu/pdf/7212.pdf | production route, irrigation, nutrient application, crop management, and boundary context |
| `govnl-spinach-production-guide-2025` | official_guidance | Government of Newfoundland and Labrador, *Vegetable Crops Production Guide: Spinach*, https://www.gov.nl.ca/ffa/files/agrifoods-plants-pdf-spinach.pdf | seeding, crop establishment, soil-test-based nutrient practice, and crop-cycle qualifiers |
| `ufifas-leafy-vegetable-guide-2024` | extension_guidance | University of Florida IFAS, *Leafy Vegetable Production*, https://ask.ifas.ufl.edu/publication/CV293?downloadOpen=true | seed-rate and harvest-period screening |
| `fao-spinach-irrigation-schedule` | official_guidance | FAO, *Crop Water Management: Determination of the Irrigation Schedule for Crops Other Than Rice*, https://www.fao.org/4/T7202E/t7202e06.htm | spinach irrigation scheduling context |
| `usda-ams-bunched-spinach-standard` | official_guidance | USDA Agricultural Marketing Service, *Bunched Spinach Grades and Standards*, https://www.ams.usda.gov/grades-standards/bunched-spinach-grades-and-standards | product grade, freshness, trimming, defect, reject, and gate-quality qualifiers |
| `psu-spinach-harvest-guidance-2025` | extension_guidance | Penn State Extension, *Mid-Atlantic Commercial Vegetable Production: Spinach harvest and post-harvest considerations*, https://extension.psu.edu/downloadable/download/sample/sample_id/128944/ | harvest form, repeated cutting, handling, cooling, and gate-preparation context |
| `ipcc-2019-refinement-nitrogen` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, https://www.ipcc.ch/report/2019-refinement-to-the-2006-ipcc-guidelines-for-national-greenhouse-gas-inventories/ | managed-soil nitrogen-emission method and calculation rule |
