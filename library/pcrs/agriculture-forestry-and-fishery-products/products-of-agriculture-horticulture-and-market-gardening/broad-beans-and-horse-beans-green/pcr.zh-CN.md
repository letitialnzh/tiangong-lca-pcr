---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.broad-beans-and-horse-beans-green
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 青蚕豆和青马蚕豆

## 1. 范围与适用性

本 PCR 用于鲜食青蚕豆和青马蚕豆（Vicia faba L.）前景数据包，包括以鲜食产品销售的未成熟荚果或未成熟种子。范围覆盖露地和保护地栽培，从申报的苗床或种植单元起始条件开始，经作物建植、作物管理、灌溉、养分和作物保护管理、收获、分级、可选清洗与冷却、初级包装，到申报的农场门或包装场交接点。同一播种所对应的多次采摘在归一化前全部纳入并完成质量平衡。

干的或成熟的蚕豆和马蚕豆、种子生产、芽苗、罐装、冷冻、干燥、烹煮、发酵、碾磨、调制、零售、消费者储存和使用不在默认范围内。苗圃生产、耐久灌溉或保护地基础设施、土地利用变化、机械制造和出场后的运输不纳入，除非单独分配并披露。田间残体、次品、降级产品、清洗水和包装废弃物在申报去向或交接被记录前仍属于前景系统。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.broad-beans-and-horse-beans-green` |
| classification_refs | CPC 3.0 `01243`，Broad beans and horse beans, green |
| covered_products | 处于申报成熟度、品种组、等级、水分、清洗、冷却和初级包装状态的鲜食整荚或去荚青蚕豆和青马蚕豆 |
| excluded_products | 干的或成熟的蚕豆和马蚕豆、种子生产、芽苗、保存或加工产品、下游零售和消费、资本品、土地利用变化及出场后服务 |
| representative_product | 符合申报成熟度、荚果或种子形态、大小、颜色、嫩度、洁净度、等级和缺陷标准的可销售鲜青蚕豆或青马蚕豆 |
| production_route | 播种或种植的露地或保护地栽培；作物建植；灌溉、养分和作物保护管理；多次收获；分级；可选清洗、冷却和初级包装 |
| market_state | 申报农场门或包装场交接点的新鲜未加工青蚕豆或青马蚕豆，可为散装或申报的初级包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 申报农场门或包装场交接点的可销售鲜青蚕豆和青马蚕豆 |
| How much | 1,000 kg |
| How well | 处于申报荚果或去荚形态、成熟度、品种组、大小、颜色、嫩度、洁净度、等级、水分和包装状态的新鲜未加工蚕豆或马蚕豆 |
| How long or cycle | 一个申报作物周期和完整收获批次；同一播种的所有采摘在归一化前完成质量平衡 |
| reference_flow_link | `green_broad_bean_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Broad beans and horse beans, green；production mix，at farm gate `<2a6f5664-5fda-45e8-81c2-989d822b3417>` |
| 参考流属性 | Mass `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| 参考单位组 | Units of mass `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| 参考单位 | kg |
| 必需限定信息 | 生产地理位置；露地或保护地路线；品种或品种组；荚果或去荚形态；播种或种植日期；收获日期和采摘轮次；成熟度、大小、颜色、嫩度、等级和缺陷标准；灌溉水源和方式；肥料产品和养分基准；作物保护方案；清洗和冷却状态；包装状态；残体、拒收品和降级产品去向；以及申报交接点 |


绑定模式：`fixed`

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_green_broad_bean_mass` | 参考流和输出流 | Mass | kg | 分别称量收获、可销售、降级、拒收、残体和损失流，并在归一化前完成质量平衡。 |
| `crop_cycle_normalization` | 田块和保护地单元记录 | Area and mass | ha and kg | 按田块、畦或保护地单元记录投入和采摘轮次，并归一化到同一申报作物周期的可销售输出。 |
| `nutrient_product_and_n_basis` | 养分投入 | Product and nutrient mass | kg product, kg N, kg P2O5, kg K2O | 分别记录配方产品质量和有文件依据的养分浓度；复合产品在多个养分角色之间不得重复计量。 |
| `water_delivery_basis` | 灌溉、施肥灌溉、清洗和取水 | Volume | m3 | 区分作物供水、施肥灌溉载水、收获后清洗水和自然资源取水，并披露计量或水量平衡基准。 |
| `harvest_grade_reconciliation` | 多次采摘和分级 | Mass and grade | kg and declared fraction | 保留每个采摘轮次、总收获量、合格输出、降级产品、拒收品和损失，使申报等级可复现。 |
| `postharvest_mass_change` | 清洗、冷却和包装 | Mass and moisture | kg and declared fraction | 将测量的去土、吸水、冷却损失、皮重和包装损失与作物收获质量分开保留。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收青蚕豆或青马蚕豆种子或种植材料的整备田畦或保护地单元，并披露前期土地利用及排除的基础设施作业 |
| starting_condition_role | 申报青蚕豆和青马蚕豆作物周期及前景投入核算的起点 |
| product_classification_scope | CPC 3.0 `01243`，Broad beans and horse beans, green，至申报农场门或包装场交接点 |
| recursive_input_rule | 青蚕豆和青马蚕豆种子及种植材料按接收交接状态记录并链接上游数据集；本 PCR 不重建其生产。 |
| upstream_dataset_requirement | 当种子、养分产品、作物保护产品、供水、燃料、电力、包装、运输和废物处理服务跨越边界时，使用上游数据集。 |
| disclosure | 申报地理位置、路线、品种组、荚果或去荚形态、种植密度、作物周期日期、灌溉水源和方式、肥料产品和养分基准、作物保护方案、采摘轮次、可销售产量、降级和拒收产品、残体、清洗和冷却、包装、废物去向及交接点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 建植和作物管理 | 纳入申报作物周期可归属的整地、种植、作物管理、灌溉、养分和作物保护以及直接作物排放；披露前期土地利用并排除无关基础设施。 | `fao-good-agricultural-practices` |
| `boundary_repeated_picking` | 收获批次 | 将同一播种的所有采摘轮次归属于同一作物周期，并平衡可销售、降级、拒收、损失和残体流。 | `unece-ffv-06-beans`；`mass-balance-identity` |
| `boundary_gate_conditioning` | 收获和出场前调理 | 默认前景边界止于申报农场门或包装场交接点。只有在交接点之前发生时，才纳入分级、清洗、冷却、初级包装和出场前运输。 | `codex-fresh-produce-hygiene` |
| `boundary_residue_fate` | 残体、次品和包装废弃物 | 对每种残体记录还田、堆肥、饲料利用、处理、运输或处置。没有有文件依据的接收方、用途、质量和交接时，不得分配共产品信用。 | `iso-14044-2006`；`mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 青蚕豆和青马蚕豆作物建植 | required | 每个申报播种、种植、畦或保护地单元 | 前景作物建植 | 种植面积、种植材料和作物周期日期 |
| `crop_management` | 青蚕豆和青马蚕豆作物管理 | required | 每个申报作物周期 | 前景管理生物生产 | 管理面积、水、养分和保护投入及完整收获批次 |
| `harvest_and_gate_preparation` | 青蚕豆和青马蚕豆收获与出场准备 | required | 每个申报收获批次和出场前处理路线 | 前景收获、分级、调理、包装和交接 | 1,000 kg 可销售鲜产品输出 |

### 过程：青蚕豆和青马蚕豆作物建植（`crop_establishment`）

#### 输入

##### 产品流

###### 青蚕豆或青马蚕豆种子（`planting_material_input`）

记录进入每个申报田块或保护地单元的种子或其他种植材料，包括批次、品种组、播种日期，以及材料是购买还是留种。

- 选定流: 青蚕豆或青马蚕豆种子或种植材料
- 流属性/单位: Mass or viable seed count / kg or seed
- 数量规则: 按田块、畦或保护地单元记录供应商批次质量或播种的有效种子数。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_establishment_records`
- 来源: `fao-good-agricultural-practices`
- 数量范围: 种植材料筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.5
  - 上限: 80
  - 单位: kg seed/1,000 kg output
  - 基准: 申报种植面积和作物周期输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 建植灌溉水（`establishment_irrigation_water`）

记录整地和出苗建植期施用的水量，并区分水源和施用方式。

- 选定流: 供应给作物的灌溉水
- 流属性/单位: Mass or volume / kg or m3
- 绑定模式: `parameterized`
- 流集合: `flow-set.water-use`
- 流集合版本: `0.2.0`
- 流集合分组: `irrigation-water`
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_irrigation_records`
- 来源: `fao-crop-evapotranspiration-56`
- 数量范围: 建植灌溉筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: m3/ha
  - 基准: 从播种至群体整齐建立
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 建植机械燃料（`establishment_machinery_fuel`）

当拖拉机或其他移动机械燃料跨越前景边界时，记录整地和播种所用燃料。

- 选定流: 供应给农业移动机械的燃料
- 流属性/单位: Mass or volume / kg or m3
- 绑定模式: `parameterized`
- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 流集合分组: `mobile-machinery-fuel`
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`
- 来源: `fao-good-agricultural-practices`
- 数量范围: 机械燃料筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 150
  - 单位: L diesel/ha
  - 基准: 建植作业
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 青蚕豆和青马蚕豆生产占用土地（`crop_land_occupation`）

记录申报作物周期占用的田块或保护地单元，并将作物占用与耐久基础设施区分。

- 选定流: 农业土地占用
- 流属性/单位: Area-time / ha*a
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_area_cycle_records`
- 来源: `fao-good-agricultural-practices`
- 数量范围: 面积—输出筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.01
  - 上限: 1.0
  - 单位: ha/1,000 kg output
  - 基准: 申报作物面积和可销售作物周期输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 输出

##### 产品流

##### 废物流

##### 基本流


### 过程：青蚕豆和青马蚕豆作物管理（`crop_management`）

#### 输入

##### 产品流

###### 青蚕豆和青马蚕豆作物灌溉与施肥灌溉用水（`crop_irrigation_water`）

记录同一作物周期内送达田间的灌溉及施肥灌溉用水，区分降雨、水源、施用方式和回流水。

- 选定流：Irrigation water supplied to the crop
- 流属性/单位：Mass or volume / kg or m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：Record the amount crossing the process boundary from field, supplier, meter, or mass-balance records.
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg marketable fresh green broad-bean output
- 基准类型：Process output (`process_output`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：Crop irrigation screening interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：6,000
  - 单位：m3/ha
  - 基准：complete green-broad-bean crop cycle
  - 基准类型：Crop cycle (`crop_cycle`)
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
- 归一化基准：每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`; `fao-fertilizer-code-conduct`
- 数量范围: 氮投入筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 300
  - 单位: kg N/ha
  - 基准: 完整作物周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

- 数量范围: 磷投入筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 150
  - 单位: kg P2O5/ha
  - 基准: 完整作物周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

- 数量范围: 钾投入筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 400
  - 单位: kg K2O/ha
  - 基准: 完整作物周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

- 数量范围: 有机改良剂筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20,000
  - 单位: kg product/ha
  - 基准: 完整作物周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 作物保护产品（`crop_protection_product`）

记录施用于作物的每种作物保护产品或有效成分，包括用量、时间、靶标和施用方式；在核实前其身份保持场址特定。

- 选定流: 作物保护产品或有效成分
- 流属性/单位: Mass of formulated product or active substance / kg
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crop_protection_records`
- 来源: `fao-international-code-pesticide-management`
- 数量范围: 作物保护筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 30
  - 单位: kg formulated product/ha
  - 基准: 完整作物周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 田间电力（`field_electricity_input`）

当泵、施肥灌溉控制、保护地或其他田间设备用电跨越边界时记录。

- 选定流: 供应给农业作业的电力
- 流属性/单位: Energy / kWh
- 绑定模式: `parameterized`
- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 流集合分组: `electricity-supply`
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`
- 来源: `fao-good-agricultural-practices`
- 数量范围: 田间电力筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1,500
  - 单位: kWh/ha
  - 基准: 完整作物周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 从自然资源取用的水（`irrigation_water_withdrawal`）

将水源取用量与输送给作物的水量分开记录，并识别水源、计量、回流水和分配基准。

- 选定流: 水资源取用
- 流属性/单位: Volume / m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_irrigation_records`
- 来源: `fao-crop-evapotranspiration-56`

#### 输出

##### 产品流

##### 废物流

###### 田间作物残体（`crop_residue_output`）

记录离开管理生产节点的茎、叶、荚和其他作物残体，并申报其还田、堆肥、饲料利用、处理或处置去向。

- 选定流: 青蚕豆和青马蚕豆作物残体
- 流属性/单位: Mass / kg dry or as-received
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residue_fate_records`
- 来源: `fao-good-agricultural-practices`

##### 基本流

###### 排入空气的氨（`air_ammonia_emission`）

使用申报的氮排放方法记录或计算与养分施用和管理残体有关的氨排放。

- 选定流: 排入空气的氨
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2019-refinement-nitrogen`

###### 排入空气的一氧化二氮（`air_nitrous_oxide_emission`）

记录或计算氮投入和残体路径产生的直接及适用间接一氧化二氮排放，避免重复计量。

- 选定流: 排入空气的一氧化二氮
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2019-refinement-nitrogen`

###### 燃烧产生的氮氧化物（`air_nox_emission`）

当有燃料使用记录和适用排放因子方法时，记录申报燃烧设备产生的氮氧化物。

- 选定流: 排入空气的氮氧化物
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2006-guidelines-energy`

###### 排入水体的硝酸盐（`water_nitrate_emission`）

只有在有场址监测或申报养分损失计算方法支持时，才记录进入受纳水体的硝酸盐损失。

- 选定流: 排入水体的硝酸盐
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2019-refinement-nitrogen`

###### 排入水体的磷酸盐（`water_phosphate_emission`）

只有在有监测或有证据支持的养分损失方法时，才记录进入受纳水体的磷酸盐损失。

- 选定流: 排入水体的磷酸盐
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2019-refinement-nitrogen`

###### 排入土壤的硝酸盐（`soil_nitrate_emission`）

只有所选方法将其定义为基本流且氮平衡支持该数值时，才记录进入或损失于土壤的硝酸盐。

- 选定流: 排入土壤的硝酸盐
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2019-refinement-nitrogen`

###### 排入土壤的磷酸盐（`soil_phosphate_emission`）

只有所选方法将其定义为基本流且磷平衡支持该数值时，才记录进入或损失于土壤的磷酸盐。

- 选定流: 排入土壤的磷酸盐
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emission_calculation`
- 来源: `ipcc-2019-refinement-nitrogen`


### 过程：青蚕豆和青马蚕豆收获与出场准备（`harvest_and_gate_preparation`）

#### 输入

##### 产品流

###### 分级前收获的青蚕豆和青马蚕豆（`harvested_green_broad_beans`）

记录进入收获和出场准备节点、尚未分选、分级、清洗、冷却或包装的全部可食荚果或未成熟种子收获量。

- 选定流: 分级前收获的青蚕豆和青马蚕豆
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_grade_records`
- 来源: `unece-ffv-06-beans`; `codex-fresh-produce-hygiene`
- 数量范围: 收获量—可销售输出筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1,050
  - 上限: 3,000
  - 单位: kg harvested/1,000 kg marketable output
  - 基准: 完整收获批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 收获和处理机械燃料（`harvest_machinery_fuel`）

当收获、田间装载和出场前处理设备燃料跨越申报边界时记录。

- 选定流: 供应给农业移动机械的燃料
- 流属性/单位: Mass or volume / kg or m3
- 绑定模式: `parameterized`
- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 流集合分组: `mobile-machinery-fuel`
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`
- 来源: `fao-good-agricultural-practices`

###### 收获后清洗水（`postharvest_washing_water`）

记录申报出场点前用于清洗或冲洗收获青蚕豆和青马蚕豆的水量，包括水源、回用、处理和排放。

- 选定流: 收获后清洗使用的工艺水
- 流属性/单位: Mass or volume / kg or m3
- 绑定模式: `parameterized`
- 流集合: `flow-set.water-use`
- 流集合版本: `0.2.0`
- 流集合分组: `process-water`
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_records`
- 来源: `codex-fresh-produce-hygiene`
- 数量范围: 清洗水筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: m3/1,000 kg output
  - 基准: 申报出场前清洗作业
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 收获后冷却电力（`postharvest_cooling_electricity`）

记录申报产品出场前强制通风、冷库或其他冷却所用电力，并与出场后的储存分开。

- 选定流: 供应给收获后冷却的电力
- 流属性/单位: Energy / kWh
- 绑定模式: `parameterized`
- 流集合: `flow-set.energy-supply`
- 流集合版本: `0.2.0`
- 流集合分组: `electricity-supply`
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`
- 来源: `codex-fresh-produce-hygiene`

###### 可重复使用周转箱或托盘服务（`primary_crate_or_pallet`）

记录跨越出场边界的主要周转箱或托盘服务，包括材料、质量、重复使用次数、所有权和回收路线。

- 选定流: 托盘和周转箱包装功能
- 流属性/单位: Mass or volume / kg or m3
- 绑定模式: `parameterized`
- 流集合: `flow-set.packaging-function`
- 流集合版本: `0.2.0`
- 流集合分组: `pallet-and-crate-packaging`
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_records`
- 来源: `codex-fresh-produce-hygiene`

###### 纸箱包装（`carton_packaging_input`）

记录申报出场前投入的纸箱或盒装包装，并在其申报使用寿命内分摊可重复使用包装。

- 选定流: 纸箱和盒装包装功能
- 流属性/单位: Mass or volume / kg or m3
- 绑定模式: `parameterized`
- 流集合: `flow-set.packaging-function`
- 流集合版本: `0.2.0`
- 流集合分组: `carton-and-box-packaging`
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_records`
- 来源: `codex-fresh-produce-hygiene`

###### 柔性初级包装（`flexible_packaging_input`）

记录跨越申报出场边界的薄膜、袋、内衬或其他柔性初级包装，包括聚合物类型和质量。

- 选定流: 柔性包装功能
- 流属性/单位: Mass or volume / kg or m3
- 绑定模式: `parameterized`
- 流集合: `flow-set.packaging-function`
- 流集合版本: `0.2.0`
- 流集合分组: `flexible-packaging`
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_records`
- 来源: `codex-fresh-produce-hygiene`

###### 出场前公路货运服务（`pre_gate_road_transport`）

当田地、包装场所和申报出场点之间的运输位于前景边界内时，使用货运质量和距离记录公路货运。

- 选定流: 公路货运服务
- 流属性/单位: Mass-distance / t*km
- 绑定模式: `parameterized`
- 流集合: `flow-set.transport-service`
- 流集合版本: `0.2.0`
- 流集合分组: `road-freight-transport`
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_transport_records`
- 来源: `codex-fresh-produce-hygiene`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售鲜青蚕豆和青马蚕豆（`marketable_green_broad_beans`）

记录分级以及出场前清洗、冷却和包装后的申报可销售输出，并保留等级、成熟度、洁净度和包装状态。

- 选定流: 申报出场点的青蚕豆和青马蚕豆
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_grade_records`
- 来源: `unece-ffv-06-beans`; `codex-fresh-produce-hygiene`

###### 降级但可能可利用的青蚕豆和青马蚕豆（`downgraded_green_broad_beans`）

记录不符合主要市场等级、但转用于申报的次级用途、销售、饲料、加工或其他有文件依据交接的产品。

- 选定流: 降级青蚕豆和青马蚕豆
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_grade_records`
- 来源: `unece-ffv-06-beans`

##### 废物流

###### 拒收荚果、种子和收获损失（`rejected_green_broad_beans`）

将不可销售产品和收获损失与可销售产品及有文件依据的次级输出分开记录，并申报其去向。

- 选定流: 拒收或损失的青蚕豆和青马蚕豆
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_grade_records`
- 来源: `unece-ffv-06-beans`

###### 修整物和有机包装残体（`trim_and_residue_waste`）

记录分级或包装过程中去除的茎、荚片、土壤和其他有机固体，并申报其再利用、堆肥、处理或处置。

- 选定流: 青蚕豆和青马蚕豆有机处理残体
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residue_fate_records`
- 来源: `codex-fresh-produce-hygiene`

###### 收获后清洗废水（`postharvest_wastewater`）

记录清洗或调理过程排出的废水，并申报处理、排放、回用以及测量或计算的污染物负荷。

- 选定流: 收获后清洗产生的废水
- 流属性/单位: Volume / m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_records`
- 来源: `codex-fresh-produce-hygiene`

###### 申报出场前包装废弃物（`packaging_waste`）

记录申报出场前产生的破损、拒收或裁切初级包装，并区分供应商回收和废物处理。

- 选定流: 出场前作业产生的包装废弃物
- 流属性/单位: Mass or volume / kg or m3
- 数量规则: 根据田间、供应商、计量或质量平衡记录，记录跨越过程边界的数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 可销售鲜青蚕豆和青马蚕豆输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_records`
- 来源: `codex-fresh-produce-hygiene`

##### 基本流


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_intended_outputs` | 可销售和降级输出 | 在每个交接点列出可销售输出以及有意转移的所有降级或次级输出。对共享投入和负荷一致地采用一种申报的归属方法。 | `iso-14044-2006`；`unece-ffv-06-beans` |
| `allocation_rejects_are_waste` | 拒收产品和残体 | 除非有文件依据的接收方、用途、质量和交接证明其具有共产品功能，否则将拒收产品和残体作为废物或残体处理。 | `iso-14044-2006` |
| `allocation_reusable_packaging` | 周转箱和托盘 | 按有文件依据的使用周期和回收损失分摊可重复使用周转箱和托盘；没有证据时不得将全部负荷分配给一次运输。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | crop_establishment | planting_material_input | 供应商和田间记录 | 批次；品种；种子质量或数量；播种日期；田块或单元 | 对账单和种植日志核对 | kg 或 seed | 每次种植事件 | 完整作物周期 | 田块、畦或保护地单元 | 按申报作物周期求和 | 批次记录和种植日志完整性 |
| `cp_area_cycle_records` | crop_establishment | crop_land_occupation | 田间登记 | 面积；占用日期；基础设施标识 | 田块或保护地单元登记 | ha 和日期 | 每个作物周期 | 完整作物周期 | 田块或单元 | 按周期计算面积时间 | 有日期的面积记录 |
| `cp_irrigation_records` | crop_establishment; crop_management | irrigation and withdrawal | 计量或水量平衡 | 水源；计量；供水；取水；方式；回用；排放 | 计量读数或有文件依据的平衡 | m3 | 每次灌溉或每月 | 完整作物周期 | 田块或单元 | 按水源和周期求和 | 计量校准或平衡检查 |
| `cp_nutrient_records` | crop_management | nutrient inputs | 发票、标签、计划和施用日志 | 产品；质量；养分浓度；日期；田块；方式 | 供应商记录与施用日志核对 | kg product 和 kg nutrient | 每次施用 | 完整作物周期 | 田块或单元 | 按养分角色和周期求和 | 标签、供应商规格或实验室结果 |
| `cp_crop_protection_records` | crop_management | crop-protection product | 施用日志 | 产品；有效成分；用量；靶标；日期；面积；方式 | 审查施用日志 | kg product 或 active substance | 每次施用 | 完整作物周期 | 田块或单元 | 按产品和周期求和 | 产品标签和施用记录 |
| `cp_energy_records` | crop_establishment; crop_management; harvest_and_gate_preparation | fuel and electricity | 计量、发票或设备日志 | 燃料或电力；设备；日期；作业；数量 | 计量或活动日志 | L 或 kWh | 每次作业或每月 | 完整作物周期 | 田块或设施 | 分配至作业和输出 | 发票、计量或设备记录 |
| `cp_emission_calculation` | crop_management | elementary emissions | 计算工作表 | 养分投入；燃料；方法；因子；结果 | 申报方法和可复现工作表 | kg substance | 每个作物周期 | 完整作物周期 | 田块或单元 | 按过程和输出计算 | 有版本的方法和输入追溯 |
| `cp_residue_fate_records` | crop_management; harvest_and_gate_preparation | residues and rejects | 质量平衡和交接记录 | 流；质量；水分；去向；接收方；日期 | 地磅、日志和交接记录 | kg | 每次收获或处理事件 | 完整作物周期 | 田块或设施 | 按流和去向平衡 | 称量记录和接收方证据 |
| `cp_harvest_grade_records` | harvest_and_gate_preparation | harvest and output grades | 收获和分级日志 | 采摘日期；总量；等级；拒收；降级；输出；损失 | 称重单和分级记录 | kg | 每个采摘轮次 | 完整收获批次 | 田块和包装场 | 按轮次和交接点求和 | 秤校准和等级记录 |
| `cp_washing_records` | harvest_and_gate_preparation | washing and wastewater | 水表和排放记录 | 水；回用；去土；废水；处理；排放 | 计量、批次日志和处理记录 | m3 和 kg | 每批 | 完整出场前处理 | 包装场 | 按批次和交接点求和 | 计量或处理记录 |
| `cp_packaging_records` | harvest_and_gate_preparation | packaging and packaging waste | 采购和包装记录 | 材料；质量；使用次数；损坏；废弃物；回收 | 包装台账和包装日志 | kg | 每批或每月 | 完整出场前处理 | 包装场 | 按产品质量和使用寿命分配 | 供应商规格和废物记录 |
| `cp_transport_records` | harvest_and_gate_preparation | pre-gate road freight | 运输记录 | 起点；终点；距离；货运质量；车辆 | 运输记录和路线距离 | t*km | 每批运输 | 完整出场前处理 | 田地至交接点 | 按路线和周期求和 | 发运记录和距离基准 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_output_normalization` | 所有过程 | 按 1,000 kg 可销售输出归一化：记录流量 / 可销售输出 × 1,000。 | 流质量；可销售输出 | 归一化流量 | `mass-balance-identity` |
| `calc_nutrient_equivalent` | 养分投入 | 产品质量 × 有文件依据的养分比例；将产品值和养分值作为分开字段保留。 | 产品质量；N、P2O5、K2O 或有机养分比例 | 养分当量 | `fao-fertilizer-code-conduct` |
| `calc_area_time` | 土地占用 | 面积 × 占用时长；纳入保护地结构时单独报告。 | 面积；日期 | ha*a | `fao-good-agricultural-practices` |
| `calc_irrigation_balance` | 灌溉和取水 | 期初计量 + 取水 - 期末计量 - 有文件依据的回流或回用 = 供水量，并披露水源和不确定性。 | 计量读数；取水；回流；回用 | m3 供水量和 m3 取水量 | `fao-crop-evapotranspiration-56` |
| `calc_grade_balance` | 收获和出场准备 | 在一致水分基准下，总收获量 = 可销售 + 降级 + 拒收 + 残体 + 测得的处理损失。 | 等级记录；损失记录 | 平衡后的输出集合 | `mass-balance-identity` |
| `calc_reusable_packaging` | 周转箱和托盘 | 包装质量 / 有文件依据的使用周期，并将回收损失分配至适用运输批次。 | 包装质量；使用周期；损失 | 每批包装量 | `iso-14044-2006` |
| `calc_nitrogen_emissions` | 土壤和空气排放 | 对有文件依据的养分投入和残体去向采用一种申报的、兼容 IPCC 的氮方法，并保留因子和中间值。 | 养分投入；残体去向；因子 | 氮排放流 | `ipcc-2019-refinement-nitrogen` |
| `calc_freight` | 出场前运输 | 货运质量 × 路线距离，并披露空返和分配处理。 | 质量；距离；路线 | t*km | `codex-fresh-produce-hygiene` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 参考流和库存流 | 使用证据支持的最窄流身份；明确保留身份证据缺口，不得用邻近产品替代。 | 流描述、交接点、类型和映射审查 |
| `quality_measurement` | 质量、体积、面积、电力和养分数据 | 优先采用校准秤、计量器、供应商文件、实验室结果和可复现计算。 | 校准、发票、标签、实验室或工作表 |
| `quality_temporal` | 作物周期记录 | 覆盖完整申报播种和收获批次，并披露缺失期间。 | 有日期的田间、收获和施用日志 |
| `quality_geographic` | 生产单元 | 识别国家或地区以及田块、畦、保护地单元或包装场范围。 | 位置登记和场址元数据 |
| `quality_completeness` | 所有库存过程 | 将有意输出、拒收品、残体、废水、包装废弃物和损失与参考输出完成平衡。 | 质量平衡工作表 |
| `quality_nutrient` | 养分和排放计算 | 保留产品配方、养分基准、施用事件、方法、因子和中间结果。 | 标签、计划、实验室和计算记录 |
| `quality_boundary` | 交接点和上游投入 | 披露交接点、上游数据集链接、处理状态、包装状态和排除项。 | 数据集元数据和过程说明 |
| `quality_uncertainty` | 范围和估算 | 分开标记场址记录、计算值、外部范围和暂定估算。 | 数值来源模式和证据类型字段 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_mass` | 参考流 | 要求 1,000 kg 质量基准、kg 单位、完整限定信息，并在下游使用前使参考流身份已解析或明确标记为证据缺口。 | `iso-14044-2006` |
| `validate_cycle_balance` | 所有作物周期过程 | 当种植面积、作物周期日期、采摘轮次和可销售输出无法平衡时，拒绝数据包。 | `mass-balance-identity` |
| `validate_nutrient_basis` | 养分投入 | 要求产品质量、养分浓度、施用日期和田块或单元范围；没有有文件依据的养分基准时拒绝换算。 | `fao-fertilizer-code-conduct` |
| `validate_water_separation` | 灌溉、取水和清洗 | 在适用时要求分别记录作物供水、自然资源取水、清洗、回用和排放。 | `fao-crop-evapotranspiration-56`；`codex-fresh-produce-hygiene` |
| `validate_grade_reconciliation` | 收获和出场准备 | 要求可销售、降级、拒收、残体和损失流的质量总量，并要求每种非销售流有申报去向。 | `unece-ffv-06-beans` |
| `validate_emission_method` | 基本流排放 | 要求申报一种氮排放和燃烧排放方法，并防止产品、土壤、水体和空气流之间重复计量。 | `ipcc-2019-refinement-nitrogen` |
| `validate_gate_disclosure` | 参考流和边界 | 要求在数据集下游使用前披露交接点、处理状态、包装状态和出场前服务。 | `codex-fresh-produce-hygiene` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 鲜青蚕豆和青马蚕豆前景农业生产数据集 |
| downstream_use | 用于申报农场门或包装场交接点之前产品系统研究的 secondary dataset 和 background dataset |
| allowed_use | 当路线、作物周期、交接点、等级和输出平衡已披露时，建模鲜青蚕豆或青马蚕豆生产 |
| excluded_use | 干豆生产、加工食品、种子生产、零售和消费，或无法识别路线和交接点的场址 |
| required_metadata | PCR id；CPC 参考；生产地理位置；路线；作物周期日期；品种组；荚果或去荚形态；产量；等级；水；养分；作物保护；能源；包装；残体去向；以及交接点 |
| required_quality_disclosure | 采摘轮次和质量平衡完整性；计量基准；养分和排放方法；时间和地理覆盖；以及暂定范围 |
| update_trigger | 路线、作物保护、灌溉、养分、分级、包装、交接点或证据发生重大变化，或出现新的经审查流集合分组 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO，良好农业实践和可持续作物生产指南 | 作物周期、投入、路线和边界记录 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO 灌溉与排水文件 56，《作物蒸散》 | 灌溉计划和水量平衡 |
| `fao-fertilizer-code-conduct` | official_guidance | FAO，《肥料可持续使用和管理国际行为守则》 | 肥料产品和养分基准记录 |
| `fao-international-code-pesticide-management` | official_guidance | FAO 和 WHO，《农药管理国际行为守则》 | 植保产品和施用记录 |
| `ipcc-2006-guidelines-energy` | method_factor | IPCC 2006 国家温室气体清单指南，能源和燃烧方法 | 燃料和能源排放计算 |
| `ipcc-2019-refinement-nitrogen` | method_factor | IPCC 2019 年对 2006 指南的完善，农业土壤和氮排放 | 管理土壤氮排放计算 |
| `unece-ffv-06-beans` | standard | UNECE FFV-06，豆类上市和商业质量控制标准 | 成熟度、等级和采收质量限定 |
| `codex-fresh-produce-hygiene` | standard | Codex Alimentarius CXC 53，《新鲜水果和蔬菜卫生操作规范》 | 清洗、冷却、包装和卫生要求 |
| `iso-14044-2006` | standard | ISO 14044:2006，《环境管理—生命周期评价—要求与指南》 | 分配和数据质量规则 |
| `mass-balance-identity` | method_factor | PCR 方法规则：申报质量流的守恒与平衡 | 归一化、输出核对和损失检查 |
