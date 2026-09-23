---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cucumbers-and-gherkins
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 黄瓜和小黄瓜

## 1. 范围与适用性

本 PCR 用于构建新鲜、未加工黄瓜和小黄瓜从作物建植到声明农场门或包装场门交付的前景数据包。范围包括露地和设施生产、直播或移栽、需要时的搭架、灌溉、养分和植保管理、采收、分选、清洗、冷却以及交付前的一次包装。数据包必须说明产品是鲜食黄瓜、腌制型黄瓜还是小黄瓜，并保持实质不同的生产路线可区分。

种子生产、种苗生产、腌制、发酵、罐藏、切割、预制沙拉、声明交付门之后的运输、零售、消费者储存和消费不在默认范围内。设施结构以及耐久灌溉或搭架基础设施不纳入作物周期清单，除非数据集另行声明基础设施分摊规则。还田、饲料利用、堆肥、处理或处置的作物残体和降级果实仍属于前景记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cucumbers-and-gherkins |
| classification_refs | CPC 3.0: 01232 Cucumbers and gherkins |
| covered_products | 在声明成熟度、等级、清洗、冷却和包装状态交付的新鲜整根黄瓜和小黄瓜，包括鲜食型和腌制型 |
| excluded_products | 种子、移栽苗、苗圃产出、腌制或发酵黄瓜、罐藏产品、切制蔬菜、预制沙拉、零售服务以及交付门后的运输或储存 |
| representative_product | 满足声明大小、成熟度、硬度、清洁度、缺陷和等级要求的商品新鲜黄瓜或小黄瓜 |
| production_route | 直播或移栽的露地或设施生产、藤蔓管理、灌溉和养分施用、植保、分批采收、分级、可选清洗和冷却以及一次包装 |
| market_state | 声明农场门或包装场门的新鲜未加工整果，散装或使用声明的一次包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场门或包装场门的商品新鲜黄瓜或小黄瓜 |
| How much | 1,000 kg |
| How well | 新鲜、整果、未加工，并声明作物类型、成熟度、大小、等级、硬度、清洁度、缺陷容许度、水分状态和包装状态 |
| How long or cycle | 一个声明作物周期和采收批次；同一播种或移栽批次的所有采收轮次在归一化前核对 |
| reference_flow_link | `cucumber_or_gherkin_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Fresh cucumber or gherkin at farm gate `7b96f91c-8055-431e-8b7d-f24fd4e6d17e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 作物类型（鲜食黄瓜、腌制型黄瓜或小黄瓜）；品种或品种组；生产地理范围；露地或设施路线；种植和采收日期；采收轮次；果实成熟度和大小；等级和缺陷标准；灌溉或雨养状态；清洗和冷却状态；包装状态；声明交付门 |
| Binding | `fixed` |

构建前景数据包时，`必需限定信息` 中的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_cucumber_mass` | 参考果实、采收物、拒收物和残体 | Mass | kg | 分开称量采收物、商品果、降级果、拒收物和残体，完成核对后再换算到 1,000 kg 参考产出。 |
| `crop_type_separation` | 鲜食黄瓜、腌制型黄瓜和小黄瓜 | Product identity | 声明作物类型 | 当品种、采收频次、等级、价格或投入制度不同时保持类型分开；只有各作物周期平衡完成并记录聚合规则后才可合并。 |
| `nutrient_product_basis` | 矿质和有机养分投入 | 产品和养分质量 | kg product、kg N、kg P2O5、kg K2O | 分别记录配方产品质量和文件化养分浓度；仅依据供应商规格、标签、土壤方案或实验室结果换算养分当量。 |
| `water_delivery_basis` | 灌溉、施肥水、清洗和取水 | Volume | m3 | 分别记录作物灌溉、施肥载水、清洗用水和水源取水量，并声明计量或水平衡基础。 |
| `area_time_basis` | 田间苗床和设施单元 | Area-time | m2*a | 记录占用生产面积和作物占用期；耐久设施和长期搭架资产若纳入，须另行声明分摊。 |
| `postharvest_mass_change` | 清洗、冷却和包装 | Mass and moisture | kg 和 percent | 将一次处理中的水分增减与采收果实质量分开记录；没有文件化质量核对时不得把吸水或冷却损失作为产量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已整备的田间苗床或设施单元接收黄瓜或小黄瓜种子或移栽材料，并披露先前土地利用和排除的基础设施作业 |
| starting_condition_role | 声明黄瓜或小黄瓜作物周期及前景投入核算的起点 |
| product_classification_scope | CPC 3.0:01232 新鲜黄瓜和小黄瓜，至声明农场门或包装场门交付 |
| recursive_input_rule | 种子、移栽苗和其他同类别种植材料按接收交付状态记录并连接上游数据集；不在本 PCR 内重建其生产。 |
| upstream_dataset_requirement | 对跨越边界的种子或移栽苗、养分产品、植保产品、供水、燃料、电力、包装以及外购运输或处理服务使用上游数据集。 |
| disclosure | 披露作物类型、品种组、地理范围、路线、种植密度、作物周期、灌溉来源和方法、养分基准、植保方案、搭架或设施路线、采收轮次、等级、产量、拒收物和残体去向、一次处理、包装和交付门状态。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 建植和种植 | 纳入归属于声明作物周期的田间或设施苗床准备、种植、藤蔓管理、灌溉、养分和植保以及直接作物排放；披露先前土地利用，排除无关基础设施建设。 | `fao-crop-evapotranspiration-56`; `ipcc-2019-managed-soils-n2o` |
| `boundary_repeated_harvest` | 采收轮次 | 将种植批次的每个采收轮次归属于同一作物周期，并在归一化前核对商品果、降级果、田间损失和残体。 | `fao-cucumber-production-guide`; `usda-ams-cucumber-standard` |
| `boundary_gate_preparation` | 分选、清洗、冷却和包装 | 默认前景边界在声明农场门或包装场门结束；只有交付前发生的分选、清洗、冷却和一次包装纳入。 | `usda-ams-cucumber-standard`; `usda-ams-pickling-cucumber-standard` |
| `boundary_residue_fate` | 藤蔓、叶片、拒收果和修整物 | 分别记录还田、堆肥、饲料利用、处理、运输或处置。没有文件化接收方和用途时不得分配共产品抵扣。 | `iso-14044-2006`; `fao-cucumber-production-guide` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 黄瓜和小黄瓜作物建植 | required | 每个声明种植、苗床或设施单元 | 前景作物建植 | 种植面积、种植材料和作物周期日期 |
| `crop_management` | 藤蔓和作物管理 | required | 每个声明作物周期 | 前景受控生物生产 | 作物面积、灌溉、养分、植保和采收批次 |
| `harvest_and_gate_preparation` | 采收和农场门准备 | required | 每个声明采收批次 | 前景采收、分级、调理和交付 | 1,000 kg 商品新鲜产出 |

### 过程：黄瓜和小黄瓜作物建植（`crop_establishment`）

#### 输入

##### 产品流

###### 种子或移栽材料（`planting_material_input`）

种子或移栽苗在被接收用于声明田块、苗床或设施单元建植时跨越边界，记录应识别作物类型和种植材料形式。

- 选定流：Cucumber or gherkin seed or transplant material
- 流属性/单位：Mass or viable count / kg seed or plant
- 数量规则：按生产单元记录供应商批次、种子质量或有活力植株数、种植日期、作物类型以及未使用或失败材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜黄瓜或小黄瓜产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_planting_records`
- 来源：`fao-cucumber-production-guide`
- 数量范围：种植材料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：8
  - 单位：每 1,000 kg 产出的 kg seed 或 2,500 plants
  - 基准：声明种植面积和作物周期产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

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
- 归一化基准：每 1,000 kg 商品新鲜黄瓜或小黄瓜产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-cucumber-production-guide`
- 数量范围：建植期养分筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg product/ha
  - 基准：声明生产单元的基肥或启动肥
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 建植期灌溉水（`establishment_irrigation_water`）

按水源和生产单元记录苗床准备、出苗或移栽成活阶段的供水。

- 选定流：Irrigation water supplied to crop
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`irrigation-water`
- 数量规则：汇总建植阶段的计量或文件化水平衡供水，不含降雨。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜黄瓜或小黄瓜产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：建植期灌溉筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：m3/ha
  - 基准：从种植到形成均匀植株的建植期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 占用作物生产面积（`crop_land_occupation`）

记录声明种植批次所占田间苗床或设施单元的面积和时间。

- 选定流：Agricultural land occupation
- 流属性/单位：Area-time / m2*a
- 数量规则：生产面积乘作物占用期，并说明设施结构是排除还是另行分摊。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜黄瓜或小黄瓜产出
- 基准类型：过程输出（`process_output`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_area_and_cycle_records`
- 来源：`fao-cucumber-production-guide`
- 数量范围：面积产出筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：0.3
  - 单位：每 1,000 kg 产出的 ha
  - 基准：声明作物面积和作物周期商品产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：藤蔓和作物管理（`crop_management`）

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
- 归一化基准：每 1,000 kg 商品新鲜黄瓜或小黄瓜产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`; `fao-cucumber-production-guide`
- 数量范围：作物周期氮筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：350
  - 单位：kg N/ha
  - 基准：声明作物周期的总养分施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：作物周期磷筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：220
  - 单位：kg P2O5/ha
  - 基准：有土壤检测支持的养分施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：作物周期钾筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：550
  - 单位：kg K2O/ha
  - 基准：有土壤检测支持的养分施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 藤蔓生长期灌溉水（`crop_irrigation_water`）

按水源、田块或设施单元以及灌溉事件或计量期记录藤蔓生长和坐果期供水。

- 选定流：Irrigation water supplied to crop
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`irrigation-water`
- 数量规则：汇总计量或文件化水平衡供水，并将施肥载水保留在灌溉记录中。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜黄瓜或小黄瓜产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：作物周期灌溉筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：400
  - 上限：2,000
  - 单位：m3/ha
  - 基准：从建植到最后采收的供水
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保产品（`crop_protection_input`）

按配方和可得的有效成分记录除草剂、杀虫剂、杀菌剂、生物防治剂或助剂的每次施用。

- 选定流：Crop-protection product
- 流属性/单位：Mass / kg formulated product
- 数量规则：按作物周期核对供应商记录、喷施日志、库存变动、施用率和处理面积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 商品新鲜黄瓜或小黄瓜产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-cucumber-production-guide`
- 数量范围：植保筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：45
  - 单位：kg formulated product/ha
  - 基准：声明作物周期全部植保施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间和设施生产移动机械燃料（`field_energy_input`）

记录苗床准备、栽培、施肥灌溉、喷施、泵送、搭架和作物维护使用的燃料或电力；长期基础设施另行披露。

- 选定流：Mobile machinery fuel
- 流属性/单位：Energy or volume / MJ or L
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`mobile-machinery-fuel`
- 数量规则：使用燃料发票、设备日志、泵计量或承包商记录，并将共享作业分配到作物周期。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 商品新鲜黄瓜或小黄瓜产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`fao-cucumber-production-guide`
- 数量范围：作物管理能源筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,200
  - 单位：MJ 或 kWh/ha
  - 基准：作物周期的田间和设施作业
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 可采收黄瓜和小黄瓜（`harvested_crop_output`）

记录每个采收轮次从作物中移除、尚未分级和农场门准备前的果实。

- 选定流：Harvested cucumber or gherkin fruit before grading
- 流属性/单位：Mass / kg wet fruit
- 数量规则：每个声明采收轮次和作物类型使用采收票据或校准秤。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品农场门产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_reconciliation`
- 来源：`fao-cucumber-production-guide`; `usda-ams-cucumber-standard`
- 数量范围：采收果筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,000
  - 上限：1,700
  - 单位：每 1,000 kg 商品产出的 kg 采收果
  - 基准：分级和田间损失前的作物周期采收
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 田间藤蔓和作物残体（`crop_residue_output`）

记录最后一次采收后留下的叶片、藤蔓、根和未采收果实，并说明其还田、移除或处理去向。

- 选定流：Cucumber and gherkin crop residue
- 流属性/单位：Mass / kg wet matter
- 数量规则：依据田间记录称量或计算残体，并与采收果和生产单元面积核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品农场门产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-cucumber-production-guide`
- 数量范围：田间残体筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：100
  - 上限：2,500
  - 单位：每 1,000 kg 商品产出的 kg 湿物质
  - 基准：作物周期末藤蔓、叶片、根和未采收果
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 非商品果和分级拒收物（`reject_output`）

记录因大小、形状、成熟度、损伤、病害或其他等级标准被拒收的果实，并记录去向。

- 选定流：Cucumber or gherkin grading rejects
- 流属性/单位：Mass / kg wet fruit
- 数量规则：按作物类型和采收轮次，将分级拒收物与采收或收料果实及商品产出核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品农场门产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`usda-ams-cucumber-standard`; `usda-ams-pickling-cucumber-standard`
- 数量范围：分级拒收物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：700
  - 单位：每 1,000 kg 商品产出的 kg 湿果
  - 基准：采收和分级后的拒收果
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 受控土壤直接氧化亚氮（`direct_n2o_air_output`）

用选定的 IPCC 兼容方法依据作物周期合格氮投入计算土壤直接氧化亚氮并报告至空气。

- 选定流：Nitrous oxide, emissions to air
- 流属性/单位：Mass / kg N2O
- 数量规则：对合格氮投入应用声明的排放因子和气候或土壤方法，记录因子并避免同一路径重复计数。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜黄瓜或小黄瓜产出
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：直接氧化亚氮筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg N2O/ha
  - 基准：声明作物周期受控土壤氮排放
  - 基准类型：氮投入（`n_input`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ipcc-2019-managed-soils-n2o`

###### 硝酸盐进入淡水（`nitrate_freshwater_output`）

只有声明的养分盈余或水损失方法支持且因子有记录时才建模硝酸盐损失。

- 选定流：Nitrate, emissions to freshwater
- 流属性/单位：Mass / kg NO3-
- 数量规则：依据合格氮盈余和声明场址或方法因子计算，不得仅由肥料采购量推断硝酸盐损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜黄瓜或小黄瓜产出
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：硝酸盐损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：45
  - 单位：kg NO3-/ha
  - 基准：声明氮盈余和受纳水体路径
  - 基准类型：氮投入（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：采收和农场门准备（`harvest_and_gate_preparation`）

#### 输入

##### 产品流

###### 准备工序接收的采收果（`harvested_fruit_input`）

记录从作物管理过程接收、用于分选、清洗、冷却或一次包装的黄瓜和小黄瓜批次。

- 选定流：Harvested cucumber or gherkin fruit before grading
- 流属性/单位：Mass / kg wet fruit
- 数量规则：使用相同批次和作物类型的作物周期采收核对及收料秤记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品农场门产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_reconciliation`
- 来源：`usda-ams-cucumber-standard`
- 数量范围：收料果筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,000
  - 上限：1,700
  - 单位：每 1,000 kg 商品产出的 kg 收料果
  - 基准：用于分选、清洗、冷却或包装的采收批次
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗用水（`washing_water_input`）

在声明交付门前进行清洗时，记录去除土壤或异物使用的水。

- 选定流：Process water for primary produce washing
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`process-water`
- 数量规则：记录计量或批次用水，能够测量时区分补水、循环水和排放。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 清洗后商品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_utility_records`
- 来源：`usda-ams-cucumber-standard`
- 数量范围：清洗用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：每 1,000 kg 清洗产出的 m3
  - 基准：一次清洗线吞吐量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 一次冷却和包装能源（`postharvest_energy_input`）

记录交付前分选、清洗、冷却和一次包装使用的电力或燃料。

- 选定流：Electricity supply for primary conditioning
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`electricity-supply`
- 数量规则：按吞吐量、运行时间或文件化生产订单将计量或设备记录分配到黄瓜和小黄瓜批次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 商品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_energy_records`
- 来源：`usda-ams-cucumber-standard`
- 数量范围：一次调理能源筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：每 1,000 kg 产出的 kWh
  - 基准：分选、清洗、冷却和包装线
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 一次包装材料（`primary_packaging_input`）

记录交付前跨越边界的周转箱、纸箱、薄膜、托盘或其他包装，并区分可重复使用材料和一次性材料。

- 选定流：Primary packaging material
- 流属性/单位：Mass / kg packaging material
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`pallet-and-crate-packaging`
- 数量规则：使用包装规格、数量、单位质量、重复使用次数和批次产出计算可归属包装质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装产出
- 基准类型：过程输出（`process_output`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`usda-ams-cucumber-standard`
- 数量范围：一次包装筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：35
  - 单位：每 1,000 kg 包装产出的 kg 包装材料
  - 基准：声明一次包装形式和重复使用方式
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 清洗废水和处理损失（`washing_waste_output`）

记录一次处理线排出的清洗水、去除的土壤、损伤果和处理损失，并说明处理或处置去向。

- 选定流：Cucumber and gherkin washing wastewater or handling waste
- 流属性/单位：Mass or volume / kg wet waste or m3
- 数量规则：使用批次及处理或排放记录；有独立测量时将果实拒收物和水排放分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 商品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_utility_records`
- 来源：`usda-ams-cucumber-standard`
- 数量范围：准备废水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：6
  - 单位：每 1,000 kg 清洗产出的 m3
  - 基准：一次清洗和处理线排放
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 交付门的新鲜商品黄瓜或小黄瓜（`marketable_farm_gate_output`）

这是经过采收、分级、可选清洗或冷却以及交付前一次包装后的声明参考产品。

- 选定流：Fresh cucumber or gherkin at farm gate
- 流属性/单位：Mass / kg
- 数量规则：使用最终校准发运秤或批次记录，并与收料果和拒收物核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 参考产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_output_records`
- 来源：`usda-ams-cucumber-standard`; `usda-ams-pickling-cucumber-standard`
- 数量范围：商品产出筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,000
  - 上限：1,000
  - 单位：kg 商品产出
  - 基准：声明农场门或包装场门的参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）
  - 来源：`usda-ams-cucumber-standard`

##### 废物流

###### 最终分级和包装拒收物（`final_reject_output`）

记录最终分选或包装后被拒收的果实，并说明其再利用、饲料、堆肥、处理或处置去向。

- 选定流：Final cucumber or gherkin grading rejects
- 流属性/单位：Mass / kg wet fruit
- 数量规则：按批次称量最终拒收物，并与收料采收果和商品交付产出核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_output_records`
- 来源：`usda-ams-cucumber-standard`
- 数量范围：最终拒收物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：每 1,000 kg 商品产出的 kg 湿果
  - 基准：最终分级和包装拒收物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_crop_type` | 混合黄瓜和小黄瓜生产 | 按生产单元面积、作物周期产出或其他文件化物理基础，将共享投入分配给鲜食黄瓜、腌制型黄瓜或小黄瓜。各作物平衡完成前不得先平均。 | `fao-cucumber-production-guide` |
| `allocation_repeated_harvest` | 同一植株的多次采收 | 将同一栽植批次的所有采收轮次视为一个作物周期，核对各轮次后再按总商品产出归一化。 | `fao-cucumber-production-guide` |
| `allocation_shared_protected_unit` | 具有多作物的温室或其他设施单元 | 用声明的面积、占用时间、吞吐量或其他物理关系分配共享能源、水和管理记录；耐久基础设施另行披露。 | `iso-14044-2006` |
| `allocation_residue_fate` | 藤蔓、叶片、拒收果和修整物 | 只有接收方、数量和预期用途均有文件时才提供共产品抵扣；否则作为残体或废物报告并保留作物周期负荷。 | `usda-ams-cucumber-standard` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_records` | `crop_establishment` | seed, transplants, and establishment inputs | seed lot, transplant, invoice, and planting record | lot; crop type; cultivar; material form; viable quantity; field; date; unused quantity | reconcile supplier records to planting log | kg seed or plants | each planting campaign | full crop cycle | each field, bed, or protected unit | sum by planting campaign and crop type | supplier label, lot trace, and planting record |
| `cp_nutrient_records` | `crop_establishment`; `crop_management` | nutrient products and nutrient equivalents | nutrient plan, soil test, supplier invoice, and application log | product; formulation; nutrient concentration; date; area; quantity; application method | reconcile product mass and application record | kg product, kg N, kg P2O5, kg K2O | each application | full crop cycle | each production unit | sum by nutrient and crop cycle | soil test, label or supplier specification, and application log |
| `cp_irrigation_records` | `crop_establishment`; `crop_management` | crop irrigation and fertigation carrier water | meter, pump, controller, or water-balance record | source; meter readings; event date; area; method; rainfall; carrier use | meter reading or documented water-balance calculation | m3 | each event or meter period | full crop cycle | each field, bed, or protected unit | sum by source and crop cycle | meter calibration or documented balance inputs |
| `cp_field_energy_records` | `crop_establishment`; `crop_management` | mobile machinery fuel and pumping energy | fuel invoice, pump meter, and equipment activity log | carrier; quantity; equipment; operation; field; date; allocation basis | supplier record plus activity or meter log | L, MJ, or kWh | each refuelling, operation, or meter period | full crop cycle | each production unit | allocate shared use by area, hours, or throughput | invoice, meter record, and allocation calculation |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | spray log and supplier record | product; active ingredient; rate; area; date; target; lot | record each application and product lot | kg product or kg active ingredient | each application | full crop cycle | each production unit | sum by product or active ingredient and crop cycle | application log and product label |
| `cp_area_and_cycle_records` | `crop_establishment` | land occupation and crop-cycle dates | field register or protected-unit register | area; bed or unit; crop dates; route; structure status; land use | verify register against field map and production records | ha, m2, and days | each crop cycle | full crop cycle | each field or protected unit | calculate area-time and normalize to output | field map, register, and date evidence |
| `cp_harvest_reconciliation` | `crop_management`; `harvest_and_gate_preparation` | harvest fruit, field losses, and residues | harvest ticket, scale record, and residue record | field; crop type; round; date; gross fruit; marketable fruit; reject; residue; fate | weigh each round or use documented lot reconciliation | kg wet fruit or residue | each harvest round | full harvest campaign | each field, bed, or protected unit | reconcile crop-cycle fruit and residue streams | scale record, lot ticket, and fate record |
| `cp_residue_and_reject_records` | `crop_management`; `harvest_and_gate_preparation` | crop residues and rejected fruit | residue survey, grading sheet, and fate record | field; crop type; round; material; mass; date; destination; recipient | weigh, estimate, and document each residue or reject stream and its fate | kg wet material | each harvest round and final clearance | full harvest campaign | each production unit | aggregate by material and destination and reconcile to harvest output | scale record, grading sheet, and recipient or treatment record |
| `cp_postharvest_utility_records` | `harvest_and_gate_preparation` | wash water, wastewater, and handling loss | batch sheet, utility meter, and treatment record | batch; received mass; make-up water; recirculation; discharge; loss; fate | batch record plus meter or treatment record | kg and m3 | each batch or meter period | full harvest campaign | each preparation line | aggregate by batch and normalize to gate output | meter record, batch sheet, and treatment receipt |
| `cp_postharvest_energy_records` | `harvest_and_gate_preparation` | sorting, cooling, and packing energy | electricity meter and equipment throughput record | meter period; line; kWh; throughput; cooling time; batch | allocate meter use by throughput or run time | kWh or MJ | each meter period or batch | full harvest campaign | each preparation line | allocate shared energy and reconcile to batch output | meter data and allocation calculation |
| `cp_packaging_records` | `harvest_and_gate_preparation` | primary packaging | packaging specification, bill of materials, count, and reuse record | material; unit mass; units; batch; output; reuse cycles | reconcile count, specification, and batch output | kg material and units | each packaging lot or batch | full harvest campaign | each preparation line | separate reusable and one-way material per packed output | supplier specification, count sheet, and reuse declaration |
| `cp_gate_output_records` | `harvest_and_gate_preparation` | marketable product and final rejects | dispatch scale, grade record, and reject record | batch; crop type; date; gate; packed mass; grade; reject; fate | final scale and lot reconciliation | kg wet fruit | each dispatch lot | full harvest campaign | declared gate | sum saleable output and rejects; normalize to 1,000 kg | calibrated scale or lot record and grade record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_equivalent` | nutrient inputs | product mass × declared nutrient fraction; retain product mass and nutrient basis as separate records | invoice; formulation; nutrient plan; application log | kg N, kg P2O5, or kg K2O by crop cycle | `fao-cucumber-production-guide` |
| `calc_crop_cycle_normalization` | all crop-cycle inputs and outputs | crop-cycle quantity ÷ marketable gate output × 1,000 kg | crop-cycle quantity; gate output | normalized quantity per 1,000 kg output |  |
| `calc_repeated_harvest_output` | harvest rounds | sum marketable fruit from all rounds assigned to the planting; reconcile gross fruit, rejects, losses, and residues first | harvest tickets; receiving records; reject records | total marketable crop-cycle output | `fao-cucumber-production-guide` |
| `calc_area_time` | land occupation | production area × crop occupation period, with protected structure treatment declared separately | area register; planting and final harvest dates | m2*a | `fao-cucumber-production-guide` |
| `calc_nitrogen_emission` | direct soil nitrous oxide | apply the selected IPCC-compatible factor to eligible nitrogen input and declared soil or climate method | nutrient records; method choice; area | kg N2O emitted to air | `ipcc-2019-managed-soils-n2o` |
| `calc_water_balance` | irrigation and washing | sum metered deliveries or documented balance components; preserve source withdrawal, delivered water, recirculation, and discharge as distinct quantities | meter readings; rainfall; pumping or batch records | m3 by water role | `fao-crop-evapotranspiration-56` |
| `calc_gate_mass_balance` | harvest and preparation | received fruit = marketable output + rejects + residue or handling loss within declared measurement uncertainty | harvest tickets; batch records; reject and residue records | reconciled mass balance | `usda-ams-cucumber-standard` |
| `calc_packaging_attribution` | primary packaging | unit count × unit mass ÷ declared reuse cycles, allocated to packed output | packaging specification; count; reuse declaration; output | kg packaging per 1,000 kg output | `usda-ams-cucumber-standard` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | product and flow records | 声明作物类型、品种组、生产路线、交付门、成熟度、等级和产品状态；需要时在前景数据集构建时解析平台身份。 | lot record, product description, and reference-flow qualifiers |
| `quality_measurement` | water, energy, inputs, and outputs | 优先使用经校准的秤、计量器、供应商发票、施用日志和批次记录；无法直接测量时披露估算和分配计算。 | meter calibration, scale record, invoice, or calculation sheet |
| `quality_temporal` | crop-cycle inventory | 覆盖完整种植批次和采收期，包括全部养分和植保施用、灌溉事件及采收轮次。 | planting date, application logs, irrigation record, harvest tickets, and dispatch records |
| `quality_completeness` | crop-cycle and gate balance | 在适用时核对种植材料、养分、灌溉、能源、采收果、商品产出、拒收物、残体、废水和包装。 | crop-cycle inventory and mass-balance reconciliation |
| `quality_route_disclosure` | open-field and protected routes | 在合并观测前识别设施生产、搭架或耐久基础设施处理、灌溉技术和路线特定能源。 | production-unit register, energy records, and allocation note |
| `quality_identity_resolution` | parameterized and unmapped rows | 数据包构建期间将每个参数化行解析为已核实的前景 UUID，并在最终过程发布前记录仍未映射的覆盖。 | identity review record and foreground package check |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | reference flow | 参考产出必须是声明交付门的新鲜整果黄瓜或小黄瓜并使用 kg 质量；腌制、发酵、罐藏、切制或零售产品不在范围内。 | `usda-ams-cucumber-standard`; `usda-ams-pickling-cucumber-standard` |
| `validate_crop_type` | product identity and aggregation | 必须声明作物类型和路线。鲜食黄瓜、腌制型黄瓜和小黄瓜只有在分别完成作物周期平衡并具备明确物理分配基础后才可聚合。 | `fao-cucumber-production-guide` |
| `validate_cycle_dates` | establishment, management, and harvest | 种植、施用、灌溉、采收轮次和交付产出必须在声明作物周期内，或明确归属于该周期。 | `fao-cucumber-production-guide` |
| `validate_nutrient_basis` | nutrient inputs and emissions | 产品质量、养分浓度、养分基准和排放方法必须相互一致；不得将产品质量和养分当量作为重复交换计入。 | `ipcc-2019-managed-soils-n2o`; `fao-cucumber-production-guide` |
| `validate_mass_balance` | harvest and gate preparation | 采收或收料质量必须与商品产出、拒收物、残体、废水相关损失和声明测量不确定度相符。 | `usda-ams-cucumber-standard` |
| `validate_flow_set_resolution` | parameterized rows | 前景数据生成时，每个参数化行必须解析为与 Flow Set 分组、属性、单位、方向和使用场景兼容的已核实 UUID；否则保留明确的证据缺口覆盖发现。 |  |
| `validate_qualifiers` | reference flow and dataset metadata | 数据包必须包含作物类型、路线、作物周期、采收轮次、等级、清洗、冷却、包装和声明交付门等必需限定信息。 | `usda-ams-cucumber-standard`; `usda-ams-pickling-cucumber-standard` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明农场门或包装场门新鲜黄瓜和小黄瓜的前景农业生产数据集 |
| downstream_use | 黄瓜或小黄瓜产品系统的 secondary_dataset；只有代表性区域或市场平均数据集包含所需路线和质量元数据时才可作为 background_dataset |
| allowed_use | 声明产品状态和地理范围内的作物周期清单、产品比较、农场改进、包装场改进以及新鲜黄瓜或小黄瓜供应链评估 |
| excluded_use | 腌制、发酵、罐藏、切制、预制、零售、消费、种子生产或无限定蔬菜替代；未披露情景时不得在露地和设施路线之间外推 |
| required_metadata | 作物类型；品种组；路线；地理范围；作物周期日期；种植材料；灌溉来源和数量；养分基准；植保；采收轮次；产量；等级；清洗和冷却；包装；残体和拒收物去向；声明交付门 |
| required_quality_disclosure | 时间覆盖、场址范围、实测与计算值、路线处理、分配规则、质量平衡结果、平台身份解析状态以及需要前景记录替换的所有暂定估算 |
| update_trigger | 作物类型或路线、灌溉技术、养分方案、设施能源、采收或等级要求、清洗或冷却线、包装形式、交付门定义发生变化，或证据影响实质量和边界规则 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-cucumber-production-guide` | official_guidance | FAO, crop production and good-practice guidance for cucumber and gherkin cultivation | 作物路线、种植、作物管理、采收轮次、残体和边界规则 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, *Crop evapotranspiration* | 灌溉调度和水平衡背景 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories* | 受控土壤氮排放方法和计算规则 |
| `usda-ams-cucumber-standard` | official_guidance | USDA Agricultural Marketing Service, *Cucumber Grades and Standards* | 黄瓜成熟度、大小、质量、等级、缺陷和交付接受标准 |
| `usda-ams-pickling-cucumber-standard` | official_guidance | USDA Agricultural Marketing Service, *Pickling Cucumber Grades and Standards* | 腌制型黄瓜和小黄瓜的大小、质量、等级和拒收标准 |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines* | 分配、共产品和残体处理原则 |
