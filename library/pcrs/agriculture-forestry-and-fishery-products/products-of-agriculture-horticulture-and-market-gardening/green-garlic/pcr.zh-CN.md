---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.green-garlic
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 青蒜

## 1. 范围与适用性

本 PCR 用于建立鲜食、整株青蒜的前景数据包，适用对象为在植株仍处于未成熟绿色状态时采收的青蒜。范围覆盖露地和保护地栽培，以及以鲜食销售为目的的束装、捆装、散装或修整整株青蒜；系统从声明的已整备田块或保护地单元开始，经过采收、可选分拣、清洗、冷却、初级包装，至声明的农场门或包装场交接点结束。作物周期包括种植材料、土壤与作物管理、灌溉、作物保护、采收以及归属于该次种植的全部起挖或拔取作业。

干燥成熟蒜头、蒜种生产、去皮或切割青蒜、脱水、冷冻、腌制、烹调、碾磨或其他加工，零售和消费者环节，耐久农场基础设施、机械制造、土地利用变化以及声明交接点之后的运输，均默认不在范围内。当保护地路线、灌溉设施或采后服务发生在声明交接点之前且其分摊有记录时，可以纳入。田间残余物、未达规格或受损植株、清洗水、包装及其他拒收物在其去向或交接被记录前仍属于前景范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.green-garlic` |
| classification_refs | CPC 3.0 `01252`，Green garlic |
| covered_products | 来自露地或保护地栽培、带有可食绿色叶片的鲜食、整株、未成熟青蒜植株或蒜头，以散装、束装、捆装、周转箱或其他声明的初级包装形式销售 |
| excluded_products | 干燥或成熟蒜头、蒜种生产、去皮、切割、干燥、冷冻、腌制、烹调、碾磨或其他加工青蒜；零售和消费者服务；资本货物；土地利用变化；以及交接点之后的运输 |
| representative_product | 在声明的成熟度、蒜头和叶片状态、清洁度、修整状态、水分状态、束装或散装形式、等级和包装状态下达到市场要求的鲜食青蒜 |
| production_route | 整备田畦或保护地单元、种植蒜瓣或其他种植材料、作物管理、灌溉和养分施用、作物保护、起挖或拔取与修整、可选分拣、清洗、冷却、初级包装以及在声明交接点交接 |
| market_state | 在声明农场门或包装场交接点的鲜食、整株、未加工青蒜，散装或采用声明的初级包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明农场门或包装场交接点的鲜食、整株、未成熟青蒜 |
| How much | 1,000 kg |
| How well | 具有声明的品种或栽培品种组、成熟度、蒜头和叶片状态、清洁度、修整状态、等级、水分状态、束装或散装形式及包装状态的青蒜 |
| How long or cycle | 一个声明的作物周期和完整采收活动；归属于同一次种植的所有起挖或拔取轮次在归一化前完成核算 |
| reference_flow_link | `green_garlic_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 声明农场门或包装场交接点的鲜食、整株青蒜 `<7fe025ea-1677-454e-8a33-4ff5df4833bd>` |
| 参考流属性 | 质量 `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| 参考单位组 | 质量单位 `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| 参考单位 | kg |
| 必需限定信息 | 品种或栽培品种组；生产地理位置；露地或保护地路线；种植材料类型和来源；种植日期与密度；采收或起挖日期与轮次；成熟度、蒜头和叶片状态、修整、等级和缺陷标准；灌溉或雨养状态；实际施用的肥料或土壤改良剂产品及养分基准；作物保护方案；清洗和冷却状态；初级包装状态；残余物、拒收物、废水及包装去向；以及声明的交接点 |

绑定模式：`fixed`

参考产品在前景数据包解析其平台流、流属性和单位组之前，保持为青蒜语义输出。不得用相近的成熟蒜头或韭葱身份替代本类别。

构建前景数据包时，`必需限定信息` 中的每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息会使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_green_garlic_mass` | 市售青蒜、拒收物、残余物和处理损失 | 质量 | kg | 分别称量市售品、降级品、拒收物、田间损失、处理损失和残余物流，并在归一化至 1,000 kg 参考输出前完成核算。 |
| `crop_cycle_normalization` | 田畦和保护地单元 | 面积和质量 | ha 和 kg | 按田块、田畦或保护地单元记录投入与采收或起挖轮次，并归一化至归属于同一声明作物周期的市售输出。 |
| `nutrient_product_and_n_basis` | 矿质和有机肥料或土壤改良剂 | 产品质量和养分质量 | kg 产品和 kg 养分 | 分别记录实际配方产品质量和有文件证明的养分浓度。养分当量只能依据供应商规格、养分计划或实验室结果换算；复合产品不得重复计数。 |
| `water_delivery_basis` | 灌溉、施肥载水、清洗和水源取用 | 体积 | m3 | 将作物灌溉、施肥载水、采后清洗水和自然资源取水分别记录，并声明计量表或水量平衡基准。 |
| `area_time_basis` | 露地田畦和保护地单元 | 面积时间 | ha*a | 记录占用的生产面积和作物占用期。若纳入耐久结构和设备，须单独分摊。 |
| `harvest_grade_reconciliation` | 起挖、拔取、修整、分级和包装 | 质量和声明等级 | kg 和声明比例 | 保留每一采收或起挖轮次、毛采收量、接收量、降级植株、拒收物和损失，使声明等级和市售输出可复现。 |
| `postharvest_mass_change` | 清洗、冷却、修整和包装 | 质量和水分 | kg 和声明比例 | 将去土、吸水、冷却损失、修整、皮重和包装损失与采收作物质量分开记录，并披露质量平衡。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已整备田畦或保护地单元接收蒜瓣、蒜头或其他声明的种植材料，并披露既有土地利用和排除的基础设施作业 |
| starting_condition_role | 声明青蒜作物周期的起点和前景投入核算起点 |
| product_classification_scope | CPC 3.0 `01252`，Green garlic，至声明的农场门或包装场交接点 |
| recursive_input_rule | 青蒜种植材料按接收交接状态记录并链接上游数据集；本 PCR 不在青蒜前景作物周期内重建其自身生产。 |
| upstream_dataset_requirement | 当种植材料、肥料或土壤改良剂、作物保护产品、供应水、燃料、电力、包装、采购运输和废物处理服务跨越边界时，使用相应上游数据集。 |
| disclosure | 声明品种或栽培品种组、地理位置、路线、种植材料和密度、作物周期日期、灌溉来源和方法、实际施用的养分产品及养分基准、作物保护方案、采收或起挖轮次、市售产量、降级和拒收植株、残余物、清洗、冷却、修整、包装、废物去向和交接点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 建立和栽培 | 纳入归属于声明作物周期的整地、种植、作物管理、灌溉、养分和作物保护以及直接作物排放。披露既有土地利用，排除无关基础设施建设。 | `fao-good-agricultural-practices` |
| `boundary_upstream_inputs` | 种植材料和供应投入 | 将种植材料及采购农业投入按接收交接状态记录并要求链接上游数据集。不得在青蒜前景周期内重建同类种植材料生产。 | `fao-good-agricultural-practices` |
| `boundary_harvest_gate` | 采收、分拣、清洗、冷却、修整、包装和交接点前运输 | 默认前景边界终止于声明农场门或包装场交接点。只有发生在交接点之前且针对所表示作物周期有记录时，才纳入交接点前处理和运输。 | `codex-cxc-53-2003-fresh-produce` |
| `boundary_residue_fate` | 田间残余物、拒收物、废水和包装废物 | 为每类残余物流记录还田、堆肥、饲料利用、处理、运输或处置。没有有记录的接收方、预期用途、质量和交接，不得分配副产品收益。 | `iso-14044-2006`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 青蒜作物建立 | `required` | 每个有代表性的播种、种植、田畦或保护地单元 | 前景作物建立 | 种植面积、种植材料数量和作物周期日期 |
| `crop_management` | 青蒜作物管理 | `required` | 每个有代表性的作物周期 | 前景生物生产管理 | 管理面积、灌溉、养分和作物保护施用以及完整采收活动 |
| `harvest_and_gate_preparation` | 青蒜采收和交接点准备 | `required` | 每个有代表性的采收活动和声明的交接点前处理路线 | 前景采收、分级、调理、包装、运输和交接 | 1,000 kg 市售鲜食青蒜输出 |

### 过程：青蒜作物建立（`crop_establishment`）

#### 输入

##### 产品流

###### 蒜瓣或其他种植材料（`planting_material_input`）

记录进入每个声明田畦或保护地单元的蒜瓣、蒜头或其他种植材料，区分采购材料与留存或其他来源的材料，并保留供应批次和种植日期。

- 选定流：蒜瓣或青蒜种植材料
- 流属性/单位：质量或声明数量 / kg 或数量
- 数量规则：按田块、田畦或保护地单元记录接收批次质量和种植质量或有效数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：种植材料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5
  - 上限：150
  - 单位：每 1,000 kg 输出的种植材料 kg
  - 基准：声明种植面积和作物周期输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 建立期灌溉水（`establishment_water_input`）

按水源和生产单元记录整地、种植和出苗期间施用的水量。除非声明的水量平衡方法包含降雨，否则不计入降雨。

- 选定流：供应给作物的灌溉水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：汇总建立期的计量或有文件证明的水量平衡交付量，并保留水源和施用方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`fao-good-agricultural-practices`; `codex-cxc-53-2003-fresh-produce`
- 数量范围：建立期用水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：每 1,000 kg 输出的 m3
  - 基准：建立期供水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 建立期机械燃料（`establishment_fuel_input`）

当整地和种植活动在声明边界内时，记录拖拉机、整畦设备或其他移动机械使用的燃料。

- 选定流：农业移动机械燃料
- 流属性/单位：能量或质量 / MJ 或 kg 燃料
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：汇总归属于建立活动的燃料领用、油箱记录或设备燃料日志。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：建立期燃料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：每 1,000 kg 输出的柴油当量 L
  - 基准：建立作业
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 建立期农业土地占用（`land_occupation_establishment`）

记录归属于建立阶段的耕地或保护地单元占用。土地占用属于基本流输入，根据声明的面积和占用期归一化。

- 选定流：农业土地占用
- 流属性/单位：面积时间 / ha*a
- 数量规则：以占用生产面积乘以声明的建立期或作物周期占用期，并分配至市售输出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_establishment_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：建立期土地占用筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：0.5
  - 单位：每 1,000 kg 输出的 ha*a
  - 基准：生产面积和作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：青蒜作物管理（`crop_management`）

#### 输入

##### 产品流

###### 青蒜作物管理灌溉水（`irrigation_water_input`）

记录同一作物周期内送达田间的灌溉及施肥灌溉用水，区分降雨、水源、施用方式和回流水。

- 选定流：Irrigation water supplied to the crop
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：Sum metered or documented water-balance deliveries after establishment and before the last harvest or lifting round.
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg marketable fresh green-garlic output
- 基准类型：Process output (`process_output`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_crop_management_records`
- 来源：`fao-good-agricultural-practices`; `codex-cxc-53-2003-fresh-produce`
- 数量范围：Crop-management irrigation screening interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：50
  - 上限：1,500
  - 单位：m3 per 1,000 kg output
  - 基准：crop-cycle irrigation and fertigation delivery
  - 基准类型：Process output (`process_output`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

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
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_management_records`
- 来源：`fao-good-agricultural-practices`; `codex-cxc-53-2003-fresh-produce`
- 数量范围：肥料或土壤改良剂筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：每 1,000 kg 输出的配方产品 kg
  - 基准：实际产品施用量归一化至市售输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物保护产品（`crop_protection_input`）

记录施用于青蒜作物的每一种作物保护产品，包括有效成分或产品名称、浓度、施用日期、处理面积、施用方法以及适用时的采前间隔。

- 选定流：施用于青蒜的作物保护产品
- 流属性/单位：产品质量或体积 / kg 产品或 L 产品
- 数量规则：根据声明作物周期的施用日志和供应商记录汇总产品数量；分别保留产品身份和有效成分浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_management_records`
- 来源：`fao-good-agricultural-practices`; `codex-cxc-53-2003-fresh-produce`
- 数量范围：作物保护筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：每 1,000 kg 输出的配方产品 kg
  - 基准：施用记录归一化至市售输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物管理期电力（`management_electricity_input`）

记录声明边界内用于灌溉泵、保护地控制或其他作物管理设备的电力。

- 选定流：供应给作物管理设备的电力
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：汇总声明作物周期的电表读数或设备记录，并按照声明的分配规则分开分摊共享设施负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_management_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：作物管理期电力筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：每 1,000 kg 输出的 kWh
  - 基准：灌溉和保护地电力
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物管理期机械燃料（`management_fuel_input`）

记录拖拉机、中耕机、喷施机、采收支持设备和其他移动机械在作物管理期使用的燃料。

- 选定流：农业移动机械燃料
- 流属性/单位：能量或质量 / MJ 或 kg 燃料
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：汇总归属于作物管理活动的燃料领用、油箱记录或设备燃料日志。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_management_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：作物管理期燃料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：每 1,000 kg 输出的柴油当量 L
  - 基准：季内田间作业
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 作物管理期农业土地占用（`land_occupation_management`）

记录建立后至最后一次采收或起挖轮次的青蒜作物面积时间占用。

- 选定流：农业土地占用
- 流属性/单位：面积时间 / ha*a
- 数量规则：以占用生产面积乘以声明作物占用期，并归一化至市售输出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_crop_management_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：作物管理期土地占用筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：0.5
  - 单位：每 1,000 kg 输出的 ha*a
  - 基准：生产面积和作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

###### 青蒜田间残余物（`crop_residue_output`）

记录采收或起挖后留在田间或移出作物区的叶片、根系、受损植株和其他作物残余物。在分配任何收益前必须声明去向。

- 选定流：青蒜作物残余物
- 流属性/单位：质量 / kg 鲜残余物
- 数量规则：在可行时称量移出的残余物，只有在有记录的田间方法支持时才估算留存残余物；分别报告还田、堆肥、饲料利用、处理或处置。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_grade_records`
- 来源：`mass-balance-identity`
- 数量范围：田间残余物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：每 1,000 kg 输出的鲜残余物 kg
  - 基准：作物周期采收和残余物核算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 管理土壤氧化亚氮（`soil_nitrous_oxide_emission`）

记录或计算与管理青蒜土壤中施氮有关的直接以及在所选方法要求时的间接氧化亚氮排放。

- 选定流：管理农业土壤排放至空气的氧化亚氮
- 流属性/单位：质量 / kg N2O
- 数量规则：根据有记录的氮投入和选定的排放因子或实测排放方法计算；在方法支持时分别保留直接和间接部分。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_soil_emission_inputs`
- 来源：`ipcc-2019-refinement-managed-soils`
- 数量范围：管理土壤氧化亚氮筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：每 1,000 kg 输出的 kg N2O
  - 基准：有记录的作物周期施氮量和选定方法
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 管理土壤氨（`soil_ammonia_emission`）

当所选清单方法包含氨挥发时，记录或计算肥料和土壤改良剂施用造成的管理土壤氨挥发。

- 选定流：管理农业土壤排放至空气的氨
- 流属性/单位：质量 / kg NH3
- 数量规则：根据有记录的氮产品和施用方法，使用声明的因子或实测结果计算；保留因子来源和施用条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_soil_emission_inputs`
- 来源：`ipcc-2019-refinement-managed-soils`
- 数量范围：管理土壤氨筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：每 1,000 kg 输出的 kg NH3
  - 基准：有记录的作物周期施氮量和选定方法
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 管理土壤硝酸盐淋失（`soil_nitrate_leaching`）

当灌溉、排水、土壤测试或所选清单方法支持估算时，记录或计算管理土壤向水体的硝酸盐迁移。

- 选定流：从管理土壤转移至水体的硝酸盐
- 流属性/单位：硝酸盐或氮质量 / kg NO3- 或 kg N
- 数量规则：根据有记录的氮投入和声明的淋失或水质方法计算，或使用带采样基准的实测排水结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_soil_emission_inputs`
- 来源：`fao-good-agricultural-practices`; `ipcc-2019-refinement-managed-soils`
- 数量范围：土壤硝酸盐淋失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：每 1,000 kg 输出的硝酸盐氮 kg
  - 基准：有记录的氮投入和声明的淋失或排水方法
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：青蒜采收和交接点准备（`harvest_and_gate_preparation`）

#### 输入

##### 产品流

###### 采收和处理机械燃料（`harvest_fuel_input`）

记录在声明交接点之前运行的起挖或拔取、田间收集、修整、分拣及其他移动采收或处理设备使用的燃料。

- 选定流：农业移动机械燃料
- 流属性/单位：能量或质量 / MJ 或 kg 燃料
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：汇总归属于采收和交接点准备的燃料领用、油箱记录或设备燃料日志。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_handling_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：采收燃料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：每 1,000 kg 输出的柴油当量 L
  - 基准：采收和交接点前处理作业
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗或去土水（`wash_water_input`）

记录声明交接点前用于去除青蒜土壤或污染物的水，并在适用时区分源水、循环水和最终排放。

- 选定流：鲜食产品清洗用工艺水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`process-water`
- 数量规则：汇总清洗使用的计量或批次记录水量，并保留水质和再用基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_handling_records`
- 来源：`codex-cxc-53-2003-fresh-produce`
- 数量范围：清洗水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：每 1,000 kg 输出的 m3
  - 基准：清洗批次和水量平衡记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却和包装电力（`gate_electricity_input`）

记录声明交接点前用于强制风冷、制冷、分级、照明或包装设备的电力。

- 选定流：供应给冷却、分级和包装设备的电力
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：汇总所表示采收活动的电表读数或设备记录，并按声明规则分摊共享负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_handling_records`
- 来源：`codex-cxc-53-2003-fresh-produce`
- 数量范围：冷却和包装电力筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：每 1,000 kg 输出的 kWh
  - 基准：冷却、分级和包装活动
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级容器包装（`primary_container_packaging`）

记录与青蒜一起跨越前景边界的周转箱、料箱、纸箱或其他初级容器。说明容器是一次性、可返回还是重复使用，并记录可重复使用容器的声明分摊。

- 选定流：鲜食青蒜初级容器包装
- 流属性/单位：质量 / kg 包装材料
- 绑定模式：`parameterized`
- 流集：`flow-set.packaging-function`
- 流集版本：`0.2.0`
- 流集分组：`rigid-container-packaging`
- 数量规则：记录包装材料质量或容器数量、皮重、重复使用次数及可重复使用容器的分摊基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_handling_records`
- 来源：`codex-cxc-53-2003-fresh-produce`
- 数量范围：初级容器筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：每 1,000 kg 输出的包装材料 kg
  - 基准：声明容器皮重和重复使用分摊
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 运至声明交接点的公路货运（`pre_gate_transport_input`）

记录声明交接点前发生的鲜食青蒜或初级包装采购公路运输。保留质量、距离、路线、车辆基准和装载率。

- 选定流：公路货运运输服务
- 流属性/单位：运输服务 / t*km
- 绑定模式：`parameterized`
- 流集：`flow-set.transport-service`
- 流集版本：`0.2.0`
- 流集分组：`road-freight-transport`
- 数量规则：根据运输质量和有记录的单程距离计算吨公里，并在适用时区分空驶返回或共享装载。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：运输服务（`transport_service`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_transport_records`
- 来源：`codex-cxc-53-2003-fresh-produce`
- 数量范围：交接点前运输筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：每 1,000 kg 输出的 t*km
  - 基准：有记录的质量和交接点前单程距离
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 采收和分级拒收物（`harvest_reject_waste`）

记录起挖、修整、分拣、分级、清洗、冷却或包装过程中拒收的植株或蒜头，并说明其去向或处理方式。

- 选定流：青蒜采收和分级拒收物
- 流属性/单位：质量 / kg 鲜拒收物
- 数量规则：按采收轮次称量或记录拒收质量，并与市售品、残余物和损失流核算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_grade_records`
- 来源：`mass-balance-identity`; `codex-cxc-53-2003-fresh-produce`
- 数量范围：采收拒收物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：每 1,000 kg 输出的鲜拒收物 kg
  - 基准：采收和交接点质量核算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗废水（`gate_wastewater`）

记录清洗或交接点准备作业排出的废水，包括实测或计算的水量以及接收处理或排放路线。

- 选定流：鲜食产品清洗废水
- 流属性/单位：体积或质量 / m3 或 kg 废水
- 数量规则：记录最终废水排放，或由清洗水投入、产品留存水和有记录的损失计算，并保留处理或排放去向。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate_handling_records`
- 来源：`codex-cxc-53-2003-fresh-produce`; `mass-balance-identity`
- 数量范围：清洗废水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：每 1,000 kg 输出的 m3
  - 基准：清洗水量平衡和排放记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 使用后的初级包装（`packaging_waste_output`）

记录离开交接点准备作业的废弃或损坏初级包装，并将一次性材料与送回重复使用的可返回容器损失分开。

- 选定流：使用后或废弃的初级包装
- 流属性/单位：质量 / kg 包装废物
- 数量规则：分别记录废弃包装材料和可返回容器损失，不与进入产品系统的包装混合。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 市售鲜食青蒜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_handling_records`
- 来源：`codex-cxc-53-2003-fresh-produce`
- 数量范围：初级包装废物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：每 1,000 kg 输出的包装废物 kg
  - 基准：包装领用、返回和废弃记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 市售鲜食青蒜（`marketable_green_garlic_output`）

记录在声明交接点达到声明成熟度、状态、清洁度、修整、等级和包装要求的鲜食青蒜。这是归一化使用的唯一参考产品输出。

- 选定流：声明交接点的市售鲜食青蒜
- 流属性/单位：质量 / kg 鲜产品
- 数量规则：将所有前景投入和输出归一化至声明交接点实测的 1,000 kg 市售产品。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1,000 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_harvest_grade_records`
- 来源：`mass-balance-identity`
- 数量范围：参考输出核算区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.98
  - 上限：1.02
  - 单位：每 kg 参考产品的归一化 kg
  - 基准：声明交接点处理后的实测市售输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivision` | 共享田块、保护地单元和包装活动 | 在采用分配前，优先按作物、田块、活动、产品等级和交接点进行过程细分或直接计量。 | `iso-14044-2006` |
| `allocation_shared_inputs` | 共享灌溉、电力、机械、储存和包装负荷 | 使用最具物理因果关系且有记录的驱动因素分配共享投入，例如实测质量、面积时间、运行时间或容器数量。报告驱动因素和剩余未分配量。 | `iso-14044-2006` |
| `allocation_co_products` | 降级青蒜、饲料、堆肥或其他有接收方的输出 | 除非有记录的接收方、预期用途、质量和交接证明其具有共产品功能，否则将降级或回收材料视为废物。需要分配时优先使用声明的物理驱动因素，并披露备选情景。 | `iso-14044-2006`; `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | `planting_material_input`; `establishment_water_input`; `establishment_fuel_input`; `land_occupation_establishment` | 种植日志、供应商发票、计量表、燃料领用和田间登记 | 田块或单元；批次；种植日期；种植面积；材料质量或数量；水表或交付量；燃料量；占用期 | 为每个种植单元核对供应商、田间、计量和设备记录 | kg、数量、m3、L、ha 和天 | 每次种植事件及月度结算 | 完整建立期 | 每个田块、田畦或保护地单元 | 先按种植单元和作物周期汇总，再归一化输出 | 签字田间日志、供应商记录、计量读数和来源批次追踪 |
| `cp_crop_management_records` | `crop_management` | `irrigation_water_input`; `fertilizer_soil_amendment_input`; `crop_protection_input`; `management_electricity_input`; `management_fuel_input`; `land_occupation_management` | 灌溉日志、投入发票、养分计划、施用记录、计量表、燃料日志和田间登记 | 产品名称；产品质量；养分浓度；施用日期；处理面积；水源和水量；电力；燃料；作物面积和占用期 | 按施用事件或计量间隔采集，并核对田块和作物周期标识 | kg 产品、kg 养分、m3、kWh、L、ha*a | 每次施用或计量间隔，并月度复核 | 完整作物周期 | 每个田块、田畦、保护地单元或共享设施 | 按作物周期汇总，并按声明物理驱动因素分摊共享设施负荷 | 施用记录、供应商或实验室规格、水记录、计量表和作物图 |
| `cp_soil_emission_inputs` | `crop_management` | `soil_nitrous_oxide_emission`; `soil_ammonia_emission`; `soil_nitrate_leaching` | 氮平衡、土壤测试、排水或水质记录、排放因子工作表 | 养分产品和 N 含量；有机投入；灌溉；土壤或排水结果；施用方法；因子或模型 | 根据可追溯的氮投入和可用的实测场址证据计算，并保留方法版本 | kg N、kg N2O、kg NH3、kg NO3- 或 kg N | 每个作物周期及方法变化后 | 完整作物周期 | 每个田块或保护地单元 | 按田块和作物周期计算，再归一化至市售输出 | 签字因子工作表、测试报告、采样记录和方法披露 |
| `cp_harvest_grade_records` | `harvest_and_gate_preparation` | `harvest_reject_waste`; `marketable_green_garlic_output`; `crop_residue_output` | 采收票、称重票、分级表、残余物日志和去向记录 | 采收或起挖日期；毛质量；市售质量；等级；拒收物；修整；田间残余物；去向；水分或状态说明 | 每轮称量，或使用有记录的采样和核算方法 | kg 和声明等级比例 | 每次采收或起挖轮次 | 完整采收活动 | 每个田块、批次和交接点 | 在归一化前将毛采收量与市售输出、拒收物、残余物和损失核对 | 校准称、签字分级表、批次追踪以及接收方或处理记录 |
| `cp_gate_handling_records` | `harvest_and_gate_preparation` | `harvest_fuel_input`; `wash_water_input`; `gate_electricity_input`; `primary_container_packaging`; `gate_wastewater`; `packaging_waste_output` | 清洗批次日志、水表、电表、包装领用和返回记录、燃料日志及排放记录 | 批次质量；清洗水投入和排放；水质；电力；燃料；容器皮重和重复使用；废物量；去向 | 按批次或计量间隔采集，并链接采收批次和交接点 | kg、m3、kWh、L 和包装 kg | 每个批次或计量间隔 | 完整交接点前活动 | 包装场、田间包装站或声明处理地点 | 按采收活动汇总，并按批次质量或运行时间分摊共享公用工程 | 校准计量表、清洗水质记录、包装数量、排放记录和批次追踪 |
| `cp_transport_records` | `harvest_and_gate_preparation` | `pre_gate_transport_input` | 承运记录、发运单、路线记录和称重票 | 运输质量；起点和终点；单程距离；车辆类型；装载率；返程；日期 | 根据有记录的发运和路线记录计算运输服务 | t*km、t、km 和车辆类别 | 每次发运 | 完整交接点前运输期 | 每条发运路线 | 按发运汇总并归一化至交接点市售输出 | 发运单、称重票、路线证据和承运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_output_normalization` | 所有过程投入和输出 | 每个作物周期数量按 `记录数量 / 实测市售青蒜输出 * 1,000 kg` 归一化，并保留未归一化记录供审计。 | 田间或设施记录；市售输出 | PCR 归一化数量 | `mass-balance-identity` |
| `calc_nutrient_basis` | `fertilizer_soil_amendment_input` | 对每个实际施用产品，按 `产品质量 * 有文件证明的养分比例` 计算养分质量；分别保留产品质量和各养分当量。 | 产品质量；供应商或实验室养分浓度 | kg 产品和 kg 养分 | `fao-good-agricultural-practices` |
| `calc_area_time` | `land_occupation_establishment`; `land_occupation_management` | 按 `占用面积 * 声明占用期` 计算面积时间，再将其归属于作物周期输出。 | 面积；占用日期 | ha*a | `mass-balance-identity` |
| `calc_soil_nitrogen_emissions` | `soil_nitrous_oxide_emission`; `soil_ammonia_emission`; `soil_nitrate_leaching` | 对有记录的氮投入、有机添加、灌溉、土壤和排水证据应用选定的实测或因子氮方法。在证据支持时分别记录直接、间接或淋失成分。 | 养分基准；土壤和排水记录；选定因子或模型 | 声明污染物数量 | `ipcc-2019-refinement-managed-soils` |
| `calc_harvest_mass_balance` | `marketable_green_garlic_output`; `harvest_reject_waste`; `crop_residue_output` | 将毛采收量与市售输出、降级或拒收量、田间残余物、修整量和实测损失核对。归一化前调查所有无法解释的剩余量。 | 采收票；分级表；残余物和损失记录 | 核算后的输出和废物流 | `mass-balance-identity` |
| `calc_wash_wastewater` | `wash_water_input`; `gate_wastewater` | 废水按实测排放量计算，或按 `清洗水投入 - 留存水 - 有记录的蒸发或其他损失` 计算，并保留所用平衡基准。 | 清洗水表；排放表；留存水或损失记录 | 废水体积或质量 | `mass-balance-identity`; `codex-cxc-53-2003-fresh-produce` |
| `calc_transport_service` | `pre_gate_transport_input` | 吨公里按 `运输质量（吨） * 有记录的单程距离（公里）` 计算，并披露共享装载和空驶返程处理。 | 发运质量；路线距离；装载和返程记录 | t*km | `codex-cxc-53-2003-fresh-produce` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_traceability` | 参考流、种植材料、投入、输出和交接点 | 识别品种或栽培品种组、批次、生产单元、路线、交接点和所有选定的语义流角色。在语义类别验证前，将平台身份解析与语义类别分开。 | 田块图、批次记录、产品说明和身份证据缺口审查 |
| `quality_input_records` | 种植材料、水、养分产品、作物保护、能源、包装和运输 | 提供带日期、数量、单位和所属生产单元的供应商、计量、发票、施用或承运记录。 | `fao-good-agricultural-practices`; `codex-cxc-53-2003-fresh-produce` |
| `quality_output_reconciliation` | 市售输出、拒收物、残余物、废水和包装废物 | 核对每轮采收或处理，并披露采样、称重校准、缺失记录和每类残余物流最终去向。 | `mass-balance-identity`; `codex-cxc-53-2003-fresh-produce` |
| `quality_nutrient_and_emission_method` | 肥料或土壤改良剂及土壤排放 | 报告产品养分基准、有机投入基准、排放或淋失因子、测量方法和方法版本。不得仅从产品身份推断污染物数量。 | `ipcc-2019-refinement-managed-soils`; `fao-good-agricultural-practices` |
| `quality_temporal_and_geographic_scope` | 完整前景数据包 | 覆盖一个完整作物周期和采收活动，识别生产地理位置及保护地或露地路线，并说明季节或场址汇总。 | 田间登记、作物日历和路线声明 |
| `quality_water_and_hygiene` | 灌溉、施肥水、清洗和交接点准备 | 记录预期用水、水源、水质证据、再用或循环、排放去向以及靠近采收期或可食植株接触的情况。 | `codex-cxc-53-2003-fresh-produce` |
| `quality_uncertainty_disclosure` | 所有归一化数量和计算排放 | 说明实测、计算、估算、采样或缺失值；保留区间和分配假设；标记需由审查证据替换的暂定估算。 | 数据集元数据、计算工作表和 QA 日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考流和所有清单行 | 确认语义青蒜参考产品、流属性、单位组及每个已解析流身份与声明鲜食整株产品状态、方向、流类型和交接点相符。保持身份证据缺口可见，以便后续解析。 | `mass-balance-identity` |
| `validation_mass_balance` | 采收、分级、残余物、废水和包装记录 | 检查记录的投入、毛采收量、市售输出、拒收物、残余物、损失、清洗水量平衡和包装废弃物，在披露的测量不确定度内核对。 | `mass-balance-identity` |
| `validation_nutrient_basis` | 肥料或土壤改良剂投入及土壤排放 | 检查每个养分当量均可追溯至实际施用产品和有记录的浓度，复合养分未重复计数，排放计算使用了声明的方法。 | `fao-good-agricultural-practices`; `ipcc-2019-refinement-managed-soils` |
| `validation_water_and_hygiene` | 灌溉、施肥水、清洗、废水和交接点交付 | 根据声明的作物和采收路线，检查水源、数量、预期用途、水质证据、再用、排放去向和时间。 | `codex-cxc-53-2003-fresh-produce` |
| `validation_temporal_scope` | 过程图和前景记录 | 检查每个必需过程均有记录，包含所有种植和采收或起挖轮次，且交接点后的活动或排除的基础设施没有被隐式混入作物周期数据集。 | `fao-good-agricultural-practices` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 适合投影为 `secondary_dataset` 的青蒜前景生产数据集；投影为 `background_dataset` 需要额外区域汇总和审查 |
| downstream_use | 在声明农场门或包装场边界构建鲜食青蒜过程数据集和生命周期模型；区域汇总后可选用于背景数据 |
| allowed_use | 在保留作物周期、路线、交接点、产品限定信息、分配、水、养分、排放和不确定性元数据时，用于比较性 LCA 和碳足迹建模 |
| excluded_use | 成熟蒜头、加工青蒜、零售或消费者阶段、未报告的交接点后运输、基础设施制造、土地利用变化，或没有代表性评估的跨区域外推 |
| required_metadata | PCR id 和版本；参考数量和单位；产品成熟度和状态；品种或栽培品种组；地理位置；路线；种植和采收日期；种植材料来源；实际养分产品和养分基准；作物保护；水源和用水；能源；采收核算；拒收物和残余物；包装；交接点；以及废物去向 |
| required_quality_disclosure | 时间和地理覆盖；实测与计算值；因子或模型版本；采样和称重证据；分配驱动因素；缺失情况；暂定估算；证据缺口流身份；以及不确定性或敏感性处理 |
| update_trigger | 新的审查流或属性身份；栽培或交接点路线的实质变化；新的养分、水、排放、包装或分配证据；重复 QA 发现；分类范围变化；或新的作物周期数据基准 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO Plant Production and Protection Division, Guiding Principles, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/compendium/scpi-framework/guiding-principles/en/ | 作物周期记录、土壤和养分管理、水资源管理、作物保护及投入追溯 |
| `codex-cxc-53-2003-fresh-produce` | standard | Codex Alimentarius, Code of Hygienic Practice for Fresh Fruits and Vegetables CXC 53-2003, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pt/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+53-2003%2FCXC_053e.pdf | 水质、采收、清洗、包装、运输、卫生和追溯要求 |
| `fao-garlic-postharvest-compendium` | handbook | FAO, Post-harvest Compendium: Garlic, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Garlic.pdf | 蒜类产品身份、采收状态和处理背景 |
| `ipcc-2019-refinement-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, https://www.ipcc.ch/report/2019-refinement-to-the-2006-ipcc-guidelines-for-national-greenhouse-gas-inventories/ | 管理土壤氧化亚氮、挥发和氮损失方法选择 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | 过程细分、共享投入分配、共产品处理和披露 |
| `mass-balance-identity` | method_factor | 本记录定义的 PCR 质量平衡和归一化规则 | 采收、输出、残余物、废水、包装核算和参考流归一化 |
