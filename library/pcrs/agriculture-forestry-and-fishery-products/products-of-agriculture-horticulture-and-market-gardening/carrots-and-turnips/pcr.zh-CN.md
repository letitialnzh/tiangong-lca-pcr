---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.carrots-and-turnips
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 胡萝卜和芜菁

## 1. 范围与适用性

本 PCR 为新鲜、整根、未加工的胡萝卜和芜菁建立前景数据包，范围从声明田块、畦面或设施单元的场地准备和播种开始，经过作物管理、灌溉、养分和植保投入、采收、可选去土清洗、分级、冷却、一次包装，到声明的农场门或包装场交接。胡萝卜和芜菁可以按幼嫩或成熟根菜交付，但作物、品种、成熟度、根部状态、等级、清洗状态和交付门必须披露。

胡萝卜和芜菁种子生产、苗圃生产、加工、切割、罐藏、冷冻、腌制、干燥、榨汁、零售、消费者储存和使用不在默认范围内。马铃薯、甜菜、萝卜及其他根菜应依据各自产品类别处理。耐久灌溉或设施基础设施、机械制造、土地利用变化和交付门之后的运输被排除，除非另行归属并披露。田间残体、次品、拒收品、清洗废水、去除土壤和包装废物在声明去向或交接前属于前景范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.carrots-and-turnips` |
| classification_refs | CPC 3.0 `01251`，胡萝卜和芜菁 |
| covered_products | 露地或文件化设施路线生产的新鲜整根胡萝卜和芜菁，包括幼嫩或成熟根菜，交付时声明品种、成熟度、大小、等级、清洗和包装状态 |
| excluded_products | 种子或苗圃生产；加工、切割、腌制、罐藏、冷冻、干燥和榨汁产品；其他根菜；资本货物、土地利用变化和交付门后服务 |
| representative_product | 符合声明品种、成熟度、根部状态、等级、含水状态和卫生要求并在农场门交接的商品新鲜整根胡萝卜或芜菁 |
| production_route | 声明的露地或设施播种、田间管理、灌溉、养分和植保、起挖采收、分级、可选去土清洗、冷却、一次包装和交付门交接路线 |
| market_state | 声明交付门的新鲜、整根、未加工胡萝卜或芜菁，散装或一次包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明交付门的新鲜整根商品胡萝卜或芜菁 |
| How much | 1,000 kg |
| How well | 新鲜、整根、未加工，符合声明作物、品种、成熟度、根部状态、大小、等级、水分和清洗状态 |
| How long or cycle | 一个完整声明作物周期，从播种到最终采收和交付门交接；生产年度、采收窗口和路线均需报告 |
| reference_flow_link | `carrot_turnip_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Carrots and turnips；生产混合，在农场门；新鲜、未加工 `<050a9dc0-7d9a-49da-9ad3-1892d880cdc7>` |
| 参考流属性 | Mass `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| 参考单位组 | Units of mass `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| 参考单位 | kg |
| 必需限定信息 | 作物（胡萝卜或芜菁）和品种；CPC 01251 基准；生产地理范围；生产年度和作物周期；露地或设施路线；播种和采收日期；幼嫩或成熟状态；根部、大小、等级和水分状态；灌溉或雨养状态；养分产品和养分基准；植保方案；清洗、冷却和包装状态；商品、次品、拒收品、残体、废水、去除土壤和包装废物去向；声明交付门 |

绑定模式：`fixed`


构建前景数据包时，`必需限定信息` 中的信息必须写入数据集元数据、过程说明、参考流备注、产品说明或等效字段。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_root_mass` | 商品根菜、次品、拒收品、残体和损失 | Mass | kg | 分别称量采收根菜、商品输出、次品、拒收品、田间损失、处理损失和残体，并在转换为 1,000 kg 参考输出前核对。 |
| `crop_cycle_normalization` | 田块和设施记录 | Area and mass | ha and kg | 按场址、品种、路线和作物周期记录投入与采收，并按同一周期商品输出归一化。 |
| `nutrient_product_and_n_basis` | 矿质和有机养分投入 | Product and nutrient mass | kg product, kg N, kg P2O5, kg K2O | 分开记录产品质量和文件化养分浓度；复合产品可提供多个养分角色，但不得重复计数。 |
| `water_delivery_basis` | 灌溉、取水、清洗和废水 | Volume | m3 | 将作物灌溉、施肥载体水、清洗水和水源取用分别记录，并披露计量或水量平衡基准。 |
| `harvest_grade_reconciliation` | 重复采收、分级和包装 | Mass and declared grade | kg and declared fraction | 保留每个采收批次、采收总量、商品质量、次品、拒收品和损失，使声明等级可复现。 |
| `moisture_and_root_state` | 采收和交付门输出 | Mass and moisture | kg and declared moisture basis | 报告交付门的水分、成熟度、根部和清洗状态；不得把清洗去除的水计入产品输出。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已准备的农业田块、畦面或声明设施单元，接收胡萝卜或芜菁种子，且先前土地利用和排除的基础设施作业已披露 |
| starting_condition_role | 声明作物、品种和路线周期的起点及前景投入核算起点 |
| product_classification_scope | CPC 3.0 `01251`，胡萝卜和芜菁，至声明农场门或包装场交接 |
| recursive_input_rule | 购买的胡萝卜或芜菁种子作为上游种植材料投入记录一次并链接上游数据集；本 PCR 不重建其生产。 |
| upstream_dataset_requirement | 对种植材料、养分产品、植保产品、供水、燃料、电力、包装、运输和废物处理服务使用兼容上游数据集。 |
| disclosure | 披露作物和品种、场址和路线、先前土地利用、周期日期、灌溉、水源、养分产品和基准、植保方案、采收和分级、根菜水分和状态、清洗冷却、包装、次品和残体去向、废水和去除土壤处理、交付门。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_crop_cycle` | 从田间或设施场地准备、播种、作物管理、采收到交付门前处理，均纳入声明的胡萝卜或芜菁作物周期。 | undefined | `fao-good-agricultural-practices`; `fao-crop-production-records` |
| `boundary_farm_gate` | 默认前景边界在声明的农场门或包装场交接点结束。仅在清洗、分级、冷却、一次包装和交付门前运输发生在交接点之前时纳入。 | undefined | `fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce` |
| `boundary_route_and_infrastructure` | 披露露地或设施路线；当路线特定的能源、水、消耗品和共享基础设施服务分配给声明周期时纳入。 | undefined | `fao-good-agricultural-practices` |
| `boundary_managed_soils` | 依据一个声明的方法纳入养分和还田残体造成的直接和间接管理土壤排放。不得重复计算上游数据集已包含的负荷。 | undefined | `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture` |
| `boundary_residue_and_reject_fate` | 记录每个非商品流的第一去向：还田、堆肥、饲料、处理、处置或其他文件化用途。未报告去向属于数据质量缺口。 | undefined | `fao-crop-residue-management`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 胡萝卜和芜菁作物建植 | required | 每个声明田块、畦面或设施单元及其作物周期 | 前景作物建植 | 种植面积、种子数量和建植作业 |
| `root_crop_management` | 根菜作物管理生产 | required | 每个声明胡萝卜或芜菁作物周期内 | 前景管理型生物生产 | 管理面积、投入、土壤排放和作物损失记录 |
| `harvest_and_gate_preparation` | 根菜采收和农场门准备 | required | 每个采收活动和声明的交付门前处理路线 | 前景采收、分级、处理、包装和交接 | 声明交付门的 1,000 kg 商品新鲜根菜输出 |

### 过程：胡萝卜和芜菁作物建植（`crop_establishment`）

#### 输入

##### 产品流

###### 胡萝卜或芜菁种子及种植材料（`planting_material_input`）

记录进入每个声明田块、畦面或设施单元的种子或其他种植材料，并保留作物、品种、供应商批次、种子处理、播种日期和去向。

- 选定流：Carrot or turnip seed or planting material
- 流属性/单位：质量或有效数量 / kg、种子单位或株
- 数量规则：按作物、品种、场址和周期记录供应商数量及实际种植有效数量；仅在有供应商文件时将数量转换为质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_planting_material_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：暂定种植材料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg 种子或声明种子单位/ha
  - 基准：在取得田间和供应商记录前的宽泛作物建植筛选范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 建植燃料或机械服务（`establishment_energy`）

当初耕、作畦、苗床准备和播种位于声明边界内时，纳入其使用的燃料、电力或外购机械服务。

- 选定流：Fuel or machinery service for crop establishment
- 流属性/单位：质量、能量或服务量 / kg、L、kWh 或 ha-服务
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则：按场址和作物周期使用燃料票据、机械日志、计量读数或供应商服务记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_energy_records`
- 来源：`fao-crop-production-records`
- 数量范围：建植能耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg 燃料或 kWh/1,000 kg 输出
  - 基准：宽泛的首轮建植能耗筛选范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 建植灌溉水（`establishment_irrigation_water`）

按水源、施用方法和生产单元记录用于苗床准备和出苗的水量。若对降雨建模，应将其作为独立气候输入保留。

- 选定流：Irrigation water supplied to the crop
- 流属性/单位：体积 / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则：汇总建植期间计量或文件化的供水量，并披露水源和施用方法。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：建植灌溉筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：m3/ha
  - 基准：从播种到形成均匀植株的建植期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输入

##### 基本流

###### 占用的农业生产面积（`land_occupation`）

记录声明胡萝卜或芜菁作物周期的土地面积和占用时间。若纳入耐久设施结构，应单独报告。

- 选定流：Agricultural land occupation
- 流属性/单位：面积-时间 / ha*a
- 数量规则：将声明生产面积乘以作物占用时间，并按商品根菜输出归一化。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_site_cycle_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：面积-产出筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：2
  - 单位：ha/1,000 kg 输出
  - 基准：声明面积和作物周期商品输出
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 建植用水资源取用（`establishment_water_withdrawal`）

当自然水体、井水或市政水源属于前景记录时，将水源取用量与实际输送灌溉水量分开记录。

- 选定流：Water resource withdrawal for crop establishment
- 流属性/单位：体积 / m3
- 数量规则：使用水源计量读数或声明的水量平衡计算，并保留输送和回流水假设。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_withdrawal_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：取水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：m3/ha
  - 基准：建植期水源和输送水量平衡
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已建植胡萝卜或芜菁作物面积（`established_crop_area`）

该内部交接记录进入作物管理的有效种植面积，不是商品产品输出。

- 选定流：Established carrot or turnip crop area
- 流属性/单位：面积 / ha
- 数量规则：在记录建植损失后，使用有效种植或占用面积。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_site_cycle_records`
- 来源：`fao-crop-production-records`

### 过程：根菜作物管理生产（`root_crop_management`）

#### 输入

##### 产品流

###### 生产灌溉水（`production_irrigation_water`）

记录建植后的灌溉水和施肥载体水，并区分水源、施用方法和回用水。

- 选定流：Irrigation water supplied to the crop
- 流属性/单位：体积 / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则：汇总从建植到最终采收的田块、畦面或设施单元计量读数，并保留灌溉计划。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：作物灌溉筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：6,000
  - 单位：m3/ha/作物周期
  - 基准：完整胡萝卜或芜菁作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉泵电力（`irrigation_electricity`）

当抽水、加压或分配灌溉水的电力跨越前景边界时，将其纳入。

- 选定流：Electricity for irrigation pumping and distribution
- 流属性/单位：能量 / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则：使用水泵计量读数、电费单或与输送水量关联的文件化泵能耗计算。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_operation_energy_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：灌溉泵能耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kWh/1,000 kg 输出
  - 基准：声明周期的水泵和输送记录
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`root_crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：氮投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kg N/ha/作物周期
  - 基准：文件化作物养分计划和完整周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：磷投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg P2O5/ha/作物周期
  - 基准：文件化养分计划和完整周期；未施用并有记录时可为零
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：钾投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg K2O/ha/作物周期
  - 基准：文件化养分计划和完整周期；未施用并有记录时可为零
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：有机改良剂筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30,000
  - 单位：kg 产品/ha/作物周期
  - 基准：声明的改良剂施用和干物质记录
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保产品投入（`crop_protection_input`）

记录施用于作物的除草剂、杀虫剂、杀菌剂、生物防治剂或其他植保产品，并保留有效成分和制剂信息。

- 选定流：Crop-protection product applied to carrot or turnip production
- 流属性/单位：质量或体积 / kg 或 L 产品
- 数量规则：按有效成分、制剂、场址和处理事件汇总产品数量；不得从泛化的农药总量推断产品身份。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：植保投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：kg 或 L 产品/ha/作物周期
  - 基准：在取得产品记录前的声明处理计划筛选范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间作业燃料或机械服务（`field_operations_energy`）

纳入间苗、除草、中耕、施肥、植保和其他周期内田间作业的燃料或外购机械服务。

- 选定流：Fuel or machinery service for root-crop management
- 流属性/单位：质量、能量或服务量 / kg、L、kWh 或 ha-服务
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则：按田块和作物周期使用作业日志、票据、计量读数或供应商服务记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_operation_energy_records`
- 来源：`fao-crop-production-records`
- 数量范围：田间作业能耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg 燃料或 kWh/1,000 kg 输出
  - 基准：完整田间作业日志
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物管理用水资源取用（`management_water_withdrawal`）

将水源取用与实际输送至作物的水量分开记录，并识别输送、回用和回流。

- 选定流：Water resource withdrawal for crop management
- 流属性/单位：体积 / m3
- 数量规则：使用管理期的水源计量读数或声明的水量平衡计算。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_withdrawal_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：管理期取水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：6,500
  - 单位：m3/ha/作物周期
  - 基准：声明水源取用和灌溉输送记录
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 废物流

###### 采收前根和叶残体（`preharvest_root_and_leaf_residues`）

记录间苗、损伤或其他移除的根和叶生物量及其第一去向，例如还田、堆肥、饲料或处置。

- 选定流：Carrot or turnip crop residues and thinnings
- 流属性/单位：质量 / kg 鲜重或干物质
- 数量规则：按事件称量或计算移除生物量，并保留水分和去向。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_loss_records`
- 来源：`fao-crop-residue-management`
- 数量范围：采收前残体筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：8,000
  - 单位：kg 鲜物质/1,000 kg 输出
  - 基准：作物间苗和田间损失记录
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 基本流

###### 管理土壤向空气排放的一氧化二氮（`managed_soil_n2o`）

依据一个声明的方法计算施用养分和还田残体产生的直接和间接 N2O，并与上游负荷分开。

- 选定流：Nitrous oxide, emissions to air from managed agricultural soil
- 流属性/单位：质量 / kg N2O
- 数量规则：对文件化养分和残体投入应用声明的场址方法或 IPCC 兼容方法。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_managed_soil_emission_records`
- 来源：`ipcc-2019-refinement-managed-soils`
- 数量范围：管理土壤 N2O 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg N2O/1,000 kg 输出
  - 基准：声明的养分和残体方法
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 管理土壤向空气排放的氨（`managed_soil_nh3`）

当声明的排放方法包括氨挥发时，记录或计算养分施用产生的氨，并披露排放环境介质。

- 选定流：Ammonia, emissions to air from managed agricultural soil
- 流属性/单位：质量 / kg NH3
- 数量规则：采用本作物周期使用的同一养分排放方法，并避免重复计算上游肥料排放。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_managed_soil_emission_records`
- 来源：`ipcc-2019-refinement-managed-soils`
- 数量范围：管理土壤 NH3 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg NH3/1,000 kg 输出
  - 基准：声明的养分排放方法
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 管理农业土壤向水体排放的硝酸盐（`nitrate_to_water`）

当有测量或声明的养分损失方法支持时，记录硝酸盐淋失或径流入水体。

- 选定流：Nitrate, emissions to water from managed agricultural soil
- 流属性/单位：质量 / kg 硝酸盐
- 数量规则：根据文件化养分平衡、排水、径流或批准的排放方法计算；不得仅由肥料产品质量推断。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_managed_soil_emission_records`
- 来源：`ipcc-2019-refinement-managed-soils`
- 数量范围：硝酸盐入水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：kg 硝酸盐/1,000 kg 输出
  - 基准：养分损失和排水记录
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 管理农业土壤向水体排放的磷酸盐（`phosphate_to_water`）

当有田间、排水、径流或批准的养分损失方法支持时，记录磷酸盐入水损失。

- 选定流：Phosphate, emissions to water from managed agricultural soil
- 流属性/单位：质量 / kg 磷酸盐
- 数量规则：根据文件化养分平衡和损失路径计算，并披露基准是元素 P 还是磷酸盐当量。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_managed_soil_emission_records`
- 来源：`ipcc-2019-refinement-managed-soils`
- 数量范围：磷酸盐入水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：8
  - 单位：kg 磷酸盐/1,000 kg 输出
  - 基准：养分损失和排水记录
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保有效成分进入土壤（`pesticide_to_soil`）

仅当产品身份、施用记录以及声明的归趋或排放方法支持时，记录有效成分进入土壤的排放。

- 选定流：Crop-protection active substance, emissions to agricultural soil
- 流属性/单位：质量 / kg 有效成分
- 数量规则：使用文件化有效成分施用量和声明的归趋方法；没有成分信息时不得转换泛化产品总量。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1,000 kg 商品新鲜根菜输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-good-agricultural-practices`

### 过程：根菜采收和农场门准备（`harvest_and_gate_preparation`）

#### 输入

##### 产品流

###### 采收燃料或机械服务（`harvest_energy`）

记录声明交付门之前用于起挖、去缨、集条、装载和田间转运的燃料或外购机械服务。

- 选定流：Fuel or machinery service for root-crop harvest
- 流属性/单位：质量、能量或服务量 / kg、L、kWh 或 ha-服务
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则：按采收事件使用采收日志、票据、计量读数或供应商服务记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品农场门根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_energy_records`
- 来源：`fao-crop-production-records`
- 数量范围：采收能耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kg 燃料或 kWh/1,000 kg 输出
  - 基准：采收事件和装载记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 采收和分级电力（`harvest_electricity`）

当动力起挖、分级、称量或装载设备位于声明边界内时，纳入其使用电力。

- 选定流：Electricity for harvest and grading equipment
- 流属性/单位：能量 / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则：使用按采收批次的计量读数、电费单或设备记录，并按质量或运行时间分配共享能耗。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品农场门根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-postharvest-handling-vegetables`
- 数量范围：采收电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kWh/1,000 kg 输出
  - 基准：采收和分级批次记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 根菜清洗或去土水（`washing_water`）

当清洗发生在声明农场门交接之前时，记录去除土壤或异物的用水量。干式处理作为独立路线记录。

- 选定流：Process water for root washing or de-soiling
- 流属性/单位：体积 / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- 数量规则：使用批次计量读数或水量平衡记录，并区分新鲜水、回用水和排放水。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品农场门根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce`
- 数量范围：根菜清洗用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m3/1,000 kg 输出
  - 基准：清洗批次和回用水记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却或短期暂存电力（`cooling_electricity`）

仅当冷却或短期暂存发生在声明交付门之前且披露持续时间、温度状态和批次时纳入。

- 选定流：Electricity for pre-gate root cooling or holding
- 流属性/单位：能量 / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则：按批次使用设备计量读数或电费单，并按产品质量或运行时间分配共享制冷。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品农场门根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce`
- 数量范围：交付门前冷却能耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kWh/1,000 kg 输出
  - 基准：声明暂存时间和批次记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柔性一次包装（`primary_flexible_packaging`）

记录声明交付门之前使用的袋、薄膜或其他柔性一次包装。包装为条件性投入，仅在使用时记录。

- 选定流：Flexible packaging for fresh roots
- 流属性/单位：质量 / kg 包装材料
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- 数量规则：按材料、批次和声明的回用或处置状态使用包装领用记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1,000 kg 商品农场门根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-postharvest-handling-vegetables`
- 数量范围：柔性包装筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 包装/1,000 kg 输出
  - 基准：包装领用和损失记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 可重复使用周转箱或托盘包装（`reusable_crate_packaging`）

记录声明交付门之前使用的可重复使用周转箱、料箱或托盘，包括材料、质量、已核实使用次数和损失。

- 选定流：Reusable crate or pallet packaging for fresh roots
- 流属性/单位：质量 / kg 包装材料
- Binding: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `pallet-and-crate-packaging`
- 数量规则：使用领用记录和已核实使用次数；将补充包装分摊到文件化使用周期，并单独记录损失。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1,000 kg 商品农场门根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-postharvest-handling-vegetables`
- 数量范围：可重复使用包装筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg 包装/1,000 kg 输出
  - 基准：已核实使用周期和损失记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交付门前道路运输服务（`pregate_transport_service`）

记录声明边界内至农场门或包装场交接点的根菜、包装或物料运输。

- 选定流：Road freight transport service before farm-gate hand-off
- 流属性/单位：运输服务 / t*km
- Binding: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- 数量规则：用运输质量乘以文件化距离计算，并保留路线、载荷、车辆和空载段处理方式。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品农场门根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pregate_transport_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：交付门前运输筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：t*km/1,000 kg 输出
  - 基准：文件化交付门前运输活动
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废水处理服务（`wastewater_treatment_service`）

当清洗水在声明交付门之前经过外部或现场废水处理时纳入处理服务，并保留处理技术及排放或回用状态。

- 选定流：Wastewater treatment service for root washing water
- 流属性/单位：服务量 / m3 废水
- Binding: `parameterized`
- Flow Set: `flow-set.waste-treatment-service`
- Flow Set version: `0.2.0`
- Flow Set group: `wastewater-treatment-service`
- 数量规则：按处理批次使用处理票据、设施日志或文件化现场处理平衡。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品农场门根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce`

#### 输出

##### 产品流

###### 商品新鲜胡萝卜和芜菁农场门输出（`marketable_root_farm_gate_output`）

记录在声明农场门或包装场交接点转移的商品整根根菜，并注明作物、品种、成熟度、等级、水分状态和清洗状态。

- 选定流：Marketable carrots and turnips; fresh, whole, unprocessed, at farm gate
- 流属性/单位：质量 / kg
- 数量规则：使用声明交付门的校准秤或地磅记录，并保留等级和水分基准。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：1,000 kg 商品新鲜根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_grade_records`
- 来源：`fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce`
- 数量范围：商品输出核对范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,000
  - 单位：每 1,000 kg 商品输出的 kg 次品和损失
  - 基准：声明作物和等级平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 废物流

###### 根菜次品和拒收胡萝卜或芜菁（`root_culls_and_rejects`）

记录被排除在声明商品等级之外的根菜及其第一去向。只有在符合分配规则并有文件化接收方时，饲料或其他接收用途才可作为独立共产品处理。

- 选定流：Carrot and turnip culls or rejected roots
- 流属性/单位：质量 / kg 鲜物质
- 数量规则：按采收批次称量分级次品和拒收品，并保留去向和水分信息。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品农场门根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_grade_records`
- 来源：`fao-postharvest-handling-vegetables`; `mass-balance-identity`
- 数量范围：次品和拒收品筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg/1,000 kg 商品输出
  - 基准：等级和去向记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 采收缨叶和田间残体（`harvest_field_residues`）

记录采收产生的缨叶、留在田间的损伤根菜及其他作物残体，并记录还田、堆肥、饲料、处理或处置去向。

- 选定流：Carrot and turnip tops and harvest residues
- 流属性/单位：质量 / kg 鲜重或干物质
- 数量规则：按采收事件测量或计算残体质量，并保留水分和去向。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品农场门根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_loss_records`
- 来源：`fao-crop-residue-management`; `mass-balance-identity`
- 数量范围：采收残体筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10,000
  - 单位：kg 鲜物质/1,000 kg 输出
  - 基准：缨叶和田间残体记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 根菜清洗废水（`washing_wastewater`）

记录交付门前清洗产生的废水及去除的土壤或有机固体，并保留处理、排放、回用和固液分离状态。

- 选定流：Wastewater from carrot and turnip washing
- 流属性/单位：体积 / m3
- 数量规则：使用批次测量或文件化水量平衡，并核对新鲜水、回用水、产品带水、蒸发和排放。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品农场门根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`fao-postharvest-handling-vegetables`; `mass-balance-identity`
- 数量范围：清洗废水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m3/1,000 kg 输出
  - 基准：清洗批次水量平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 去除土壤和修整固体（`soil_and_trim_solids`）

当清洗或分级过程中去除的土壤、损伤物料和修整固体作为独立废物流离开前景路线时，记录该流。

- 选定流：Soil and organic solids removed from fresh roots
- 流属性/单位：质量 / kg 鲜重或干物质
- 数量规则：按批次测量或计算去除固体，并保留水分和去向。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1,000 kg 商品农场门根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-postharvest-handling-vegetables`
- 数量范围：去除固体筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg/1,000 kg 输出
  - 基准：清洗和分级批次记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装废物和损失（`packaging_waste`）

记录声明交付门之前产生的损坏、废弃或丢失的一次包装和可重复使用包装，包括材料和去向。

- 选定流：Packaging waste from pre-gate root preparation
- 流属性/单位：质量 / kg 包装材料
- 数量规则：按材料和批次使用包装领用、损失和废物处理记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1,000 kg 商品农场门根菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-postharvest-handling-vegetables`; `mass-balance-identity`
- 数量范围：包装损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/1,000 kg 输出
  - 基准：包装损失和去向记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_same_crop_and_route` | 多个田块、品种、场址或路线时，在归一化前保持记录分开；需要汇总时，按文件化的面积-时间、运行时间、输送水量、吞吐量或质量分配共享投入。 | undefined | `iso-14044-2006` |
| `allocation_marketable_and_off_grade` | 当次品或降级根菜有文件化产品接收方和功能时使用质量分配；若被丢弃、还田或处理，则建模其去向，不分配共产品收益。 | undefined | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_shared_water_and_energy` | 按实测水量、产品质量、批次时间或运行时间分配共享公用工程，并说明选用的基准。 | undefined | `fao-crop-evapotranspiration-56`; `fao-postharvest-handling-vegetables` |
| `allocation_reusable_packaging` | 将包装生产和补充分配到已核实的使用周期，并将损失归属于发生路线；不得把一次性物品分摊到未文件化周期。 | undefined | `fao-postharvest-handling-vegetables` |
| `allocation_residue_destination` | 保留按去向区分的行。还田、堆肥、饲料、处理和处置是不同路径，不可互换为共产品。 | undefined | `fao-crop-residue-management`; `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site_cycle_records` | `crop_establishment; root_crop_management` | 场址、作物、品种、路线和周期 | 田块或场址登记 | 作物；品种；场址；面积；路线；播种和采收日期；先前土地利用 | 操作员登记和场址图 | ha 和日期 | 每个场址和周期 | 完整声明作物周期 | 声明田块或设施场址 | 保留场址-周期行；审核后汇总 | 签字田间记录、地图和日期核对 |
| `cp_planting_material_records` | `crop_establishment` | 种植材料投入 | 采购和播种记录 | 供应商；作物；品种；种子状态；数量；批次；去向 | 票据、供应商标签和播种日志 | 种子单位、株或 kg | 每次播种事件 | 播种期 | 场址和田块 | 按作物、品种和周期汇总 | 票据与日志核对 |
| `cp_establishment_energy_records` | `crop_establishment` | 建植能耗 | 燃料、计量或服务记录 | 载能体；数量；设备；日期；田块；运行小时 | 票据、计量读数和机械日志 | kg、L、kWh 或服务单位 | 每次作业 | 建植期 | 场址和作业 | 按文件化面积或时间分配共享作业 | 票据、计量或服务证据 |
| `cp_irrigation_records` | `crop_establishment; root_crop_management` | 灌溉水 | 用水记录 | 水源；计量器；输送量；日期；田块；输送；回用；回流 | 计量数据和核实计划 | m3 | 每日、批次或账单周期 | 完整作物周期 | 田块或场址 | 核对水源取用、输送、回用和排放 | 计量校准和水量平衡 |
| `cp_site_and_cycle_records` | `crop_establishment; root_crop_management` | 土地占用和作物周期 | 场址和周期登记 | 作物；品种；面积；路线；日期；占用时间 | 场址图和操作员登记 | ha、m2*a 和日期 | 每个场址和周期 | 完整声明周期 | 场址 | 分别保留面积和时间 | 地图、登记和日期检查 |
| `cp_water_withdrawal_records` | `crop_establishment; root_crop_management` | 水资源取用 | 水源取用记录 | 水源；计量器；取用量；输送量；回流；日期 | 水源计量器和水量平衡 | m3 | 每日、批次或账单周期 | 完整作物周期 | 水源和田块 | 核对取用、输送、回用和排放 | 计量和水量平衡审核 |
| `cp_nutrient_input_records` | `root_crop_management` | 养分投入卡片 | 投入施用记录 | 产品；供应商；产品质量；养分成分；施用日期；施用位置；面积 | 票据、标签、施用日志和养分分析 | kg 产品和 kg 养分 | 每次施用 | 完整作物周期 | 田块或场址 | 保留产品和养分基准，不重复计数 | 标签、票据和施用记录 |
| `cp_crop_protection_records` | `root_crop_management` | 植保投入和入土有效成分 | 处理日志 | 产品；有效成分；制剂；浓度；用量；面积；日期；天气 | 操作员日志和产品标签 | kg、L 和 ha | 每次处理 | 完整作物周期 | 田块或场址 | 按有效成分和产品状态汇总 | 标签、票据和处理日志 |
| `cp_field_operation_energy_records` | `root_crop_management` | 田间作业能耗 | 田间作业记录 | 作业；载能体；数量；设备；日期；田块；小时 | 票据、机械日志和服务记录 | kg、L、kWh 或服务单位 | 每次作业 | 完整作物周期 | 田块或场址 | 按面积、时间或质量分配共享作业 | 票据和作业日志 |
| `cp_managed_soil_emission_records` | `root_crop_management` | 土壤排放和养分损失 | 养分和残体平衡 | 养分投入；残体质量；水分；去向；土壤或排水证据 | 平衡表和测量或模型 | kg 鲜/干物质和 kg 排放 | 每周期及事件 | 完整作物周期 | 田块或场址 | 核对投入、吸收、损失和残体去向 | 方法版本、实测数据和审核签字 |
| `cp_harvest_energy_records` | `harvest_and_gate_preparation` | 采收能耗 | 采收和装载记录 | 采收日期；设备；载能体；数量；运行时间；采收质量 | 票据、计量读数和采收日志 | kg、L、kWh 或服务单位 | 每次采收 | 采收窗口 | 田块和事件 | 按采收质量分配到各去向 | 采收日志和能耗记录 |
| `cp_conditioning_energy_records` | `harvest_and_gate_preparation` | 处理能耗 | 处理能耗记录 | 批次质量；设备；电力；持续时间；温度；交付门 | 计量器、电费单和批次日志 | kWh 和日期 | 每批次 | 处理期 | 生产线或场址 | 按批次质量或运行时间分配共享能耗 | 计量和批次核对 |
| `cp_conditioning_records` | `harvest_and_gate_preparation` | 清洗水和去除固体 | 批次处理记录 | 批次质量；水；回用；排放；固体；设备；持续时间 | 计量器、批次日志和水量平衡 | m3、kg 和日期 | 每批次 | 处理期 | 生产线或场址 | 按批次质量或时间分配公用工程；固体单列 | 计量记录和批次核对 |
| `cp_packaging_records` | `harvest_and_gate_preparation` | 包装和包装废物 | 包装领用和损失记录 | 材料；质量；容器数量；回用周期；批次；损失；去向 | 票据、材料领用记录和回用日志 | kg 和单位 | 每个包装批次 | 交付门前准备期 | 场址和生产线 | 将可重复使用包装分配到已核实周期 | 票据、回用日志和损失记录 |
| `cp_pregate_transport_records` | `harvest_and_gate_preparation` | 交付门前运输服务 | 移动或服务记录 | 装载质量；距离；车辆；日期；起点；终点 | 运输日志或供应商记录 | 吨公里 | 每次移动 | 交付门前期间 | 场址至声明交付门 | 仅汇总声明边界内运输 | 行程日志或供应商票据 |
| `cp_wastewater_records` | `harvest_and_gate_preparation` | 废水处理和排放 | 处理记录 | 批次；进水；处理技术；回用；排放；固体 | 处理日志、票据和水量平衡 | m3 和日期 | 每批次 | 交付门前处理期 | 场址或处理厂 | 核对进水、回用、处理和排放 | 处理记录和平衡审核 |
| `cp_harvest_and_grade_records` | `harvest_and_gate_preparation` | 商品输出和次品 | 地磅、秤或等级记录 | 采收质量；商品质量；等级；次品；去向；水分；交接日期 | 校准秤和等级登记 | kg | 每次采收和交接 | 采收窗口 | 场址和去向 | 核对采收质量与等级、损失和去向行 | 秤检查、等级登记和交付记录 |
| `cp_residue_and_loss_records` | `root_crop_management; harvest_and_gate_preparation` | 残体、间苗和田间损失 | 残体和损失记录 | 残体类型；质量；水分；事件；去向；方法 | 田间观察、称量和去向记录 | kg 鲜/干物质 | 每个事件和周期 | 完整作物周期 | 保留按去向区分的行并与采收平衡核对 | 称量、水分检查和去向记录 | undefined |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | `mass-balance-identity` | 所有清单行 | 记录数量；农场门商品质量 | 归一化行值 | normalized row value |
| `calc_area_occupation` | `fao-good-agricultural-practices` | 土地占用 | 面积；日期；路线 | ha*a 或声明面积-时间 | ha*a or declared area-time |
| `calc_nutrient_content` | `fao-good-agricultural-practices` | N、P、K 和有机养分卡片 | 产品质量；标签、计划或分析 | kg N、kg P2O5、kg K2O 或有机产品质量 | kg N, kg P2O5, kg K2O, or organic product mass |
| `calc_irrigation_withdrawal` | `fao-crop-evapotranspiration-56` | 灌溉和取水 | 水源计量；输送水量；回流 | 水源取用量和输送水量 | source withdrawal and delivered water |
| `calc_managed_soil_emissions` | `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture` | N2O、NH3、硝酸盐和磷酸盐行 | 养分和残体记录；方法因子 | 声明的基本流排放 | declared elementary emissions |
| `calc_harvest_mass_balance` | `mass-balance-identity` | 商品输出、次品、残体、损失和废物 | 采收、等级、残体和废物记录 | 平衡的输出集合 | balanced output set |
| `calc_conditioning_water_balance` | `fao-postharvest-handling-vegetables`; `mass-balance-identity` | 清洗水和废水 | 进水；回用；排放；平衡项 | 废水体积 | wastewater volume |
| `calc_reusable_packaging` | `fao-postharvest-handling-vegetables` | 可重复使用包装 | 包装质量；使用周期；损失记录 | 每周期包装投入和废物 | per-cycle packaging input and waste |
| `calc_pregate_transport` | `fao-good-agricultural-practices` | 交付门前运输服务 | 质量；距离；路线；载荷 | t*km | t*km |
| `calc_reference_mass_reconciliation` | `mass-balance-identity` | 采收和交付门准备 | 采收重量；等级；残体；损失 | 核对后的作物周期质量平衡 | reconciled crop-cycle mass balance |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_product_identity` | 参考产品和输出 | 声明胡萝卜或芜菁身份、品种、市场状态、成熟度、等级、清洗状态和交付门。 | 产品元数据、等级记录和交付门记录 |
| `quality_site_cycle_completeness` | 所有必需过程 | 覆盖完整声明场址和作物周期，包括建植、管理、每次采收和路线特定的交付门前作业。 | 场址登记、日期、作业日志和采收记录 |
| `quality_input_traceability` | 种子、养分、植保、水、能源和包装 | 将每项投入关联到供应商、票据、计量器、施用记录或文件化计算。 | 票据、标签、计量器和作业日志 |
| `quality_mass_balance` | 商品、次品、残体、废水和包装输出 | 核对作物、水和包装平衡，在发布前调查未解释的残差。 | 秤记录、水量平衡和审核签字 |
| `quality_nutrient_basis` | 养分投入和土壤排放 | 说明产品质量、养分基准、成分来源、施用时间和排放方法。 | 标签或分析、施用日志和方法记录 |
| `quality_water_energy_measurement` | 灌溉、取水、清洗、电力和燃料 | 优先使用计量或票据数据；采用计算值时披露公式、因子、不确定性和分配基准。 | 计量校准、票据和计算表 |
| `quality_destination_disclosure` | 次品、残体、废水、土壤固体和包装废物 | 声明每个非商品流的第一去向及处理或回流路径。 | 交付、处理、堆肥、饲料、处置或还田记录 |
| `quality_uncertainty_and_estimates` | 使用估算或范围的所有行 | 标记估算或缺失值，保留范围和证据类型，并在可用时用采集记录替换暂定估算。 | 不确定性说明、范围元数据和数据质量审核 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 数据集必须识别声明交付门的新鲜、整根、未加工胡萝卜或芜菁产品。身份证据缺口仍是覆盖问题，不得悄然替换为其他根菜。 | `mass-balance-identity` |
| `validation_required_processes` | 过程图和清单 | 三个必需过程必须存在，且每个详细过程章节必须对应过程图中的 id。 | `fao-crop-production-records` |
| `validation_crop_scope` | 产品类别身份 | 胡萝卜和芜菁必须保持在 CPC 01251 范围内；种子生产、加工产品和其他根菜需单独处理或映射。 | `fao-good-agricultural-practices` |
| `validation_nutrient_non_double_counting` | 养分投入 | 复合产品按产品基准记录一次；需要时转换为文件化养分当量，不得将其作为独立 N、P、K 产品相加。 | `fao-good-agricultural-practices` |
| `validation_water_balance` | 灌溉、取水、清洗和废水 | 核对声明路线的水源取用、输送水、回用、蒸发和排放。不得使用降雨闭合计量灌溉行。 | `fao-crop-evapotranspiration-56`; `mass-balance-identity` |
| `validation_mass_balance` | 根菜产品、次品、残体、固体和废物 | 采收根菜、商品输出、次品、残体、去除固体、废水和包装废物必须在声明容差内核对。 | `mass-balance-identity` |
| `validation_boundary_hand_off` | 处理和运输 | 清洗、分级、冷却、包装、处理和运输仅在声明交付门前发生时纳入；交付门后分销排除。 | `fao-postharvest-handling-vegetables`; `codex-cxc-53-2003-fresh-produce` |
| `validation_emission_method` | 基本流排放 | 每个排放行必须说明物质、环境介质、方法、因子基准以及上游数据集是否已包含该负荷。 | `ipcc-2019-refinement-managed-soils`; `ipcc-2006-guidelines-agriculture` |
| `validation_parameterized_identity_resolution` | 参数化行和参考流 | 构建前景数据集时，将每个参数化行解析为兼容 UUID，并保留流属性、单位、地理范围和预期用途核对。未覆盖行在证据支持固定身份前保持未映射。 | `mass-balance-identity` |
| `validation_quality_disclosure` | 发布数据集画像 | 在下游使用前报告时间、地理、路线、计量、估算、分配、残体去向和身份证据缺口限制。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门新鲜整根胡萝卜和芜菁的前景生产数据集 |
| downstream_use | 可作为声明作物、品种、路线、地理范围、生产年度和市场状态的 `secondary_dataset`；仅在下游模型核对兼容性后作为 `background_dataset` 参考 |
| allowed_use | 声明 CPC 01251 产品的农场门 LCA；仅在作物、等级、水分、路线和分配兼容时进行比较 |
| excluded_use | 其他根菜、种子或加工产品；未限定的跨作物替代；存在未核对质量平衡、去向或身份问题的数据集 |
| required_metadata | 作物和品种；CPC 基准；地理范围；生产年度和周期；路线；面积；灌溉和取水；养分基准；植保；采收和等级；根菜状态和水分；残体、次品、废水、土壤固体和包装去向；交付门；UUID 解析状态 |
| required_quality_disclosure | 来源和计量方法；时间和地理代表性；作物和路线组成；估算或缺失值；养分、水、能源和排放因子基准；分配决定；残体、废水、土壤固体和包装去向；参数化流 UUID 解析；不确定性和范围处理 |
| update_trigger | CPC 解释、产品边界、作物或路线范围、交付门状态、边界或分配方法、Flow Set 分类、材料证据、排放方法或新数据集显示需要更窄 PCR 时更新 |

## 11. 数据源

| source_id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO，水果和蔬菜良好农业规范，FAO 农业指导资源 | 作物周期分解、田间作业、养分和植保记录、灌溉及路线披露 |
| `fao-crop-production-records` | official_guidance | FAO，作物生产和农场记录指导，FAO 农业资源 | 场址、周期、作业、完整性和汇总记录 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO 灌溉与排水论文 56《作物蒸散》，https://www.fao.org/4/X0490E/X0490E00.htm | 灌溉计划、水量平衡和取水记录 |
| `fao-postharvest-handling-vegetables` | handbook | FAO，《水果和蔬菜的准备与销售手册》，https://www.fao.org/4/y4893e/y4893e00.htm | 采收、清洗、分级、冷却、包装和交付门边界 |
| `fao-crop-residue-management` | extension_guidance | FAO 作物残体和可持续土壤管理资源 | 残体测量和去向披露 |
| `codex-cxc-53-2003-fresh-produce` | standard | Codex Alimentarius，《新鲜水果和蔬菜卫生操作规范》（CXC 53-2003），https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | 新鲜产品状态、水、卫生、分级和处理限定信息 |
| `ipcc-2019-refinement-managed-soils` | method_factor | IPCC，《2006 年 IPCC 指南 2019 修订版》第 4 卷 AFOLU，https://www.ipcc-nggip.iges.or.jp/public/2019rf/index.html | 管理土壤 N2O、NH3、硝酸盐和磷酸盐方法基准 |
| `ipcc-2006-guidelines-agriculture` | method_factor | IPCC，《国家温室气体清单指南 2006》第 4 卷 AFOLU，https://www.ipcc-nggip.iges.or.jp/public/2006gl/ | 农业排放因子方法基准 |
| `iso-14044-2006` | standard | ISO 14044，《环境管理—生命周期评价—要求与指南》，https://www.iso.org/standard/38498.html | 分配、汇总和数据质量规则 |
| `mass-balance-identity` | method_factor | 声明作物周期、采收等级、水、残体和包装质量平衡核对方法 | 归一化、损失、次品、残体、废水和包装核对 |
