---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.coffee-green
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 绿咖啡

## 1. 范围与适用性

本 PCR 用于构建栽培咖啡树生产绿咖啡的前景数据包，交接点为声明的农场门、第一初级处理厂门或绿咖啡仓库门。范围包括多年生咖啡生产、咖啡樱桃采收、湿法、蜜处理或干法初级处理、干燥与稳定化、脱壳、清洁、分级、分选、门前储存，以及果肉、黏液、羊皮纸、外壳、废水、缺陷豆、拒收物和损失的记录与去向。

适用对象包括 Arabica、Robusta 以及其他栽培咖啡物种或品种组，但必须声明物种或品种组、地理位置、生产系统、处理方法和交接门。烘焙咖啡、咖啡粉、脱咖啡因咖啡、速溶/可溶咖啡、咖啡饮料、苗圃生产、零售包装、消费者使用、咖啡渣和门后配送均不在默认范围内。野生采集和土地利用变化需要另行确定范围。

湿法/水洗、蜜处理/半水洗和干法/自然处理是本 PCR 内的不同路线状态。数据包必须标明实际路线；不得在没有批次质量平衡的情况下混合樱桃、羊皮纸咖啡和绿豆数量。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.coffee-green` |
| classification_refs | CPC 3.0 `01610`，Coffee, green |
| covered_products | 来自栽培咖啡的绿咖啡、未烘焙咖啡，在声明的第一初级处理路线后交接 |
| excluded_products | 未经绿咖啡处理的鲜咖啡樱桃；未声明绿咖啡交接的干羊皮纸或干樱桃；烘焙、研磨、脱咖啡因、速溶或饮料产品；苗圃材料；野生采集咖啡；零售和消费者产品 |
| representative_product | 按声明含水率基准和交接门计量的分级绿咖啡豆 |
| production_route | 多年生咖啡生产、樱桃采收、湿法/蜜处理/干法处理、干燥、脱壳、清洁和分级 |
| market_state | 在农场、第一初级处理厂或仓库门，以散装或声明搬运包装交接的绿色未烘焙咖啡 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明交接门的绿色、未烘焙咖啡 |
| How much | 1 kg |
| How well | 咖啡物种或品种组、处理方法、绿豆含水率基准、等级、缺陷标准、地理位置、生产系统和交接门 |
| How long or cycle | 一个声明的作物年度和处理批次；多年生建植、替换和终止阶段按所代表作物年度建立索引并分摊 |
| reference_flow_link | 见下方参考数量和产品流 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Coffee, green `b8869823-9c26-4580-9c45-95a626e0ca2a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 咖啡物种或品种组；地理位置；生产系统和认证状态；咖啡园区或农场区块；作物年度；处理路线；鲜樱桃、羊皮纸和绿豆含水率基准；等级和缺陷标准；干燥或稳定化状态；交接门；纳入时的储存时长；残余物、拒收物和废水去向 |

参考流是声明门的净绿咖啡。皮重、异物、包装、羊皮纸、外壳和其他非绿咖啡材料不计入参考数量，必须单独记录。构建前景数据包时，`Required qualifiers` 中的限定信息必须写入数据集元数据、过程说明、参考流备注、产品说明或等效字段。

| 属性 | 筛选参考 | 证据 |
| --- | --- | --- |
| 绿豆含水率 | 8–13% 湿基；应以批次测量替代 | `fao-green-coffee-processing-africa` |
| 处理路线 | 湿法/水洗、蜜处理/半水洗或干法/自然处理；每个批次或明确分开的批次使用一条路线 | `fao-arabica-coffee-manual-lao`; `fao-green-coffee-processing-africa` |

## 4. 计量与单位规则

| rule_id | 适用对象 | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_01` | 参考产品和所有咖啡状态 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的收货状态或干物质基准记录樱桃、羊皮纸、外壳、果肉、湿法处理投入、干法处理投入、绿咖啡、拒收物和残余物；同一质量平衡内不得混用含水率基准。 |
| `measurement_02` | 参考产品质量 | Mass and moisture | kg；湿基百分比 | 测量或声明绿豆含水率、等级、缺陷标准及样品或批次基准。筛选含水率区间是 QA 参考，不是普适固定值。 |
| `measurement_03` | 肥料、改良剂和直接氮流 | Product mass and nutrient basis | kg product；kg N | 将配方产品或改良剂质量与养分质量分开记录。计算排放时保留养分基准、施用事件和选定方法。 |
| `measurement_04` | 灌溉、湿法处理和废水 | Volume or mass | m3 或 kg | 分开记录灌溉供水、源头取水、处理水、循环水、排水、截留固体和废水处理；保留计量读数及换算因子。 |
| `measurement_05` | 燃料、电力和干燥能源 | Carrier-specific property | L、kg、MJ 或 kWh | 保留载体、设备、操作、运行或批次及原始单位；仅在有记录因子时换算，并且共享设备只能分配一次。 |
| `measurement_06` | 作物年度、多年生阶段和处理批次 | Area-time, duration and batch identity | ha·year、day、h 或 batch id | 将建植、替换、生产阶段、采收批次、处理运行、换线、储存周期和终止事件关联到声明期间或批次。 |

## 5. 系统边界

默认前景边界从受管理咖啡生产对象及声明的作物年度或多年生阶段开始。纳入与所代表输出有关的建植和替换、土壤与养分管理、灌溉、作物保护、田间能源、采收、初级处理、干燥、稳定化、脱壳、清洁、分级和门前储存。肥料、作物保护产品、能源、供水、处理服务和包装的上游生产使用背景数据集，除非研究明确将其纳入前景。

边界终点为声明农场门、第一初级处理厂门或仓库门的绿咖啡。烘焙、研磨、脱咖啡因、速溶咖啡、饮料、零售、消费者使用和门后配送均为下游。干法/自然路线可以不经过脱果肉和清洗，但必须声明整果干燥、脱壳及相关残余状态；湿法或蜜处理必须记录脱果肉、发酵或去黏液、必要时清洗、干燥以及废水处理或排放。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 受管理咖啡园或咖啡林及声明的作物年度 |
| starting_condition_role | 多年生生物生产条件 |
| product_classification_scope | CPC 3.0 `01610`，Coffee, green；声明门的未烘焙绿咖啡 |
| recursive_input_rule | 同一产品类别的咖啡进入处理或混配边界时，作为单独识别的批次记录，不递归追踪到另一咖啡 PCR；仅用于混配的外购咖啡不在默认单一来源路线内，需要显式范围审查 |
| upstream_dataset_requirement | 对跨越前景边界的种植材料、养分、作物保护、供水、能源、处理、包装和运输服务使用经审查的上游数据集 |
| disclosure | 声明农场或加工厂、区块或供应商范围、作物年度、物种或品种组、生产系统、处理路线、樱桃至绿豆质量平衡、含水率基准、等级、交接门、储存时长、预期输出、残余、拒收物、废水和分配决定 |

### 边界规则

| rule_id | 适用对象 | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | 受管理生产 | 纳入受管理咖啡园、作物年度管理、实际投入、田间排放、采收及至初级处理的交接；当建植、替换或终止可归属于多年生生产期时纳入。 | `fao-good-farming-practices`; `iso-14044-2006` |
| `boundary_02` | 初级处理 | 纳入实际使用的湿法/水洗、蜜处理/半水洗或干法/自然路线，并识别鲜樱桃、中间羊皮纸或干樱桃、制备绿咖啡、水、能源、拒收物和废水或干法残余。 | `fao-arabica-coffee-manual-lao`; `fao-green-coffee-processing-africa` |
| `boundary_03` | 干燥和储存 | 纳入门前干燥和稳定化；记录干燥技术、天气或能源服务、含水率测量、储存时长以及重要的返潮、霉变或质量损失事件。 | `fao-ota-coffee-code`; `fao-green-coffee-processing-africa` |
| `boundary_04` | 递归投入和服务 | 将外购咖啡、材料、公用事业和处理服务作为单独识别的上游投入。不得递归到另一绿咖啡 PCR，也不得为未解析的路线特定交换编造固定身份。 | `iso-14044-2006` |
| `boundary_05` | 损失、残余和拒收物 | 在有记录的共产品、回收、处理或处置交接前，将田间落果、果肉、黏液、羊皮纸、外壳、废水固体、缺陷豆、碎豆、拒收批次和储存损失保留在前景中。 | `fao-green-coffee-processing-africa`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| coffee_plantation_production | 受管理咖啡生产 | required | 栽培咖啡路线 | 前景生物生产 | per 1 kg green coffee at gate |
| coffee_harvest_and_collection | 咖啡樱桃采收和收集 | required | 樱桃从受管理咖啡园移除并转入处理 | 收获和采集输出交接 | per 1 kg harvested cherry and per 1 kg green coffee |
| coffee_primary_processing_and_drying | 咖啡初级调理、处理和干燥 | required | 声明门前通过湿法、蜜处理或干法产生绿咖啡 | 第一处理和稳定化 | per 1 kg green coffee |
| coffee_hulling_and_grading | 脱壳、清洁和分级 | required | 门前将羊皮纸、干樱桃或其他中间状态转为分级绿咖啡 | 制备输出分离 | per 1 kg graded green coffee |
| coffee_storage_and_gate_handoff | 绿咖啡储存和门交接 | conditional | 声明门前发生储存或仓库处理 | 稳定化、储存和交接 | per 1 kg green coffee and storage day |

生产模式按季节和批次记录。每个作物年度、多年生阶段、采收活动、处理批次、储存批次和包装运行都应建立索引；共享水、电、设备和换线事件必须关联到运行或批次，不得重复归属。

### 过程：受管理咖啡生产（`coffee_plantation_production`）

#### 输入

##### 产品流

###### 咖啡种植材料和替换植株（`coffee_planting_material`）

按区块和事件记录苗木、插条、嫁接苗、替换植株及建植材料。只有当所代表阶段依赖建植或替换时才进行年度化。

- 选定流：咖啡种植材料 [unmapped]
- 流属性/单位：数量或质量 / plant、item 或 kg
- 数量规则：按区块和作物阶段记录采购、繁育、种植、替换和存活数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_coffee_perennial_phase_records`
- 来源：`fao-good-farming-practices`; `iso-14044-2006`

###### 农业养分与肥料投入（`coffee_plantation_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_nutrient_records`
- 来源：`fao-good-farming-practices`; `ipcc-2019-refinement-afolu`
- 数量范围：暂定养分投入筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg product/kg green coffee at gate
  - 依据：首轮农场投入宽范围估计；应以田间施用记录和养分平衡替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：理由估计（`reasoned_estimate`）

###### 供给咖啡园的灌溉水（`coffee_irrigation_water`）

- 选定流：灌溉水供应 [parameterized]
- 流属性/单位：体积 / m3
- 绑定：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按水源、区块和作物年度记录计量或有证据的供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_water_records`
- 数量范围：暂定灌溉筛选估计；范围角色：默认估计（`default_estimate`）；下限：0；上限：20；单位：m3/t green coffee；基准：宽泛首轮供水区间，须以计量记录替换；基准类型：参考流（`reference_flow`）；证据类型：推理估算（`reasoned_estimate`）

###### 作物保护产品（`coffee_crop_protection`）

- 选定流：具名作物保护产品或活性物质 [unmapped]
- 流属性/单位：质量或体积 / kg product 或 L product
- 数量规则：按产品、活性物质、日期和区块记录实际施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_crop_protection_records`
- 来源：`fao-good-farming-practices`

###### 田间燃料和电力（`coffee_field_energy`）

- 选定流：田间能源供应 [parameterized]
- 流属性/单位：能源或载体质量 / kWh、MJ、L 或 kg
- 绑定：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按操作、区块和作物年度记录实测燃料和电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_energy_records`
- 数量范围：暂定田间能源筛选估计；范围角色：默认估计（`default_estimate`）；下限：0；上限：5；单位：kWh-equivalent/kg green coffee；基准：宽泛首轮田间能源区间；基准类型：参考流（`reference_flow`）；证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 咖啡园土地占用（`coffee_land_occupation`）

- 选定流：咖啡农业土地占用 [unmapped]
- 流属性/单位：面积-时间 / ha·year
- 数量规则：按区块面积及生产阶段记录，并按生产年度分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_coffee_perennial_phase_records`
- 来源：`fao-good-farming-practices`; `iso-14044-2006`

#### 输出

##### 产品流

###### 可供采收的咖啡樱桃（`coffee_cherry_crop_output`）

- 选定流：Coffee cherries, harvested (fresh) `d1d6496d-2d4e-4ccc-b529-aa50bc82da44`
- 绑定模式：`fixed`
- 流属性/单位：质量 / kg fresh cherries
- 数量规则：按区块和作物年度称量或透明估算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_harvest_lot_records`
- 数量范围：暂定樱桃至绿豆筛选区间；范围角色：默认估计（`default_estimate`）；下限：0.05；上限：0.35；单位：kg green coffee/kg fresh cherry；基准：首轮工艺产率区间，须以批次质量平衡替换；基准类型：过程输出（`process_output`）；证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 田间残余和未采收樱桃（`coffee_field_residues`）

- 选定流：咖啡田间残余或损失 [unmapped]
- 流属性/单位：质量 / kg fresh or dry matter
- 数量规则：由作物输出、采收批次和记录的田间去向计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_coffee_harvest_lot_records`
- 数量范围：质量平衡 QA 范围；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：1；单位：kg residue or loss/kg crop output；基准类型：过程输出（`process_output`）；证据类型：方法公式（`method_formula`）；来源：`mass-balance-identity`

##### 基本流

###### 受管理土壤和作物残余排放（`coffee_field_emissions`）

- 选定流：受管理土壤和作物残余基本流 [unmapped]
- 流属性/单位：质量 / kg substance
- 数量规则：根据养分、残余、土壤、气候和作物年度记录选择方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_coffee_emission_records`
- 来源：`ipcc-2019-refinement-afolu`
- 数量范围：暂定受管理排放筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg substance/kg green coffee at gate
  - 依据：基本流合计的首轮宽范围估计；应以按物质分类的计算替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：理由估计（`reasoned_estimate`）

### 过程：咖啡樱桃采收和收集（`coffee_harvest_and_collection`）

#### 输入

##### 产品流

###### 可收集咖啡樱桃（`coffee_cherry_harvest_input`）

- 选定流：Coffee cherries, harvested (fresh) `d1d6496d-2d4e-4ccc-b529-aa50bc82da44`
- 绑定模式：`fixed`
- 流属性/单位：质量 / kg fresh cherries
- 数量规则：关联区块和采收日期的称重批次投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_harvest_lot_records`
- 数量范围：暂定鲜咖啡樱桃投入筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：2.9
  - 上限：20
  - 单位：kg fresh cherries/kg green coffee at gate
  - 依据：暂定樱桃到绿咖啡产率区间的宽范围倒数；应以批次质量平衡替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：理由估计（`reasoned_estimate`）

###### 采收燃料和服务（`coffee_harvest_energy`）

- 选定流：采收能源或服务 [unmapped]
- 流属性/单位：能源、载体或服务 / MJ、kWh、L、kg 或 service unit
- 数量规则：按采收批次记录实测或供应方记录数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_energy_records`
- 数量范围：暂定采收能源筛选估计；范围角色：默认估计（`default_estimate`）；下限：0；上限：2；单位：kWh-equivalent/kg green coffee；基准类型：参考流（`reference_flow`）；证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 交接处理的咖啡樱桃（`coffee_harvested_cherry_output`）

- 选定流：Coffee cherries, harvested (fresh) `d1d6496d-2d4e-4ccc-b529-aa50bc82da44`
- 绑定模式：`fixed`
- 流属性/单位：质量 / kg fresh cherries
- 数量规则：磅单或批次质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_coffee_harvest_lot_records`
- 数量范围：暂定交接鲜咖啡樱桃区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：2.9
  - 上限：20
  - 单位：kg fresh cherries/kg green coffee at gate
  - 依据：暂定樱桃到绿咖啡产率区间的宽范围倒数；应与接收批次质量平衡
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：理由估计（`reasoned_estimate`）

##### 废物流

###### 采收损失和偶然材料（`coffee_harvest_losses`）

- 选定流：采收损失或偶然材料 [unmapped]
- 流属性/单位：质量 / kg fresh matter
- 数量规则：测量或有去向记录的质量平衡差额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_coffee_harvest_lot_records`
- 数量范围：采收损失 QA 范围；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：1；单位：kg loss/kg harvested-cherry availability；基准类型：过程输出（`process_output`）；证据类型：方法公式（`method_formula`）；来源：`mass-balance-identity`

### 过程：咖啡初级处理和干燥（`coffee_primary_processing_and_drying`）

处理模式按批次建立索引。必须识别原料状态、准备或稳定化状态及交接。湿法可包括脱果肉、发酵、去黏液和清洗；蜜处理在干燥时保留部分黏液；干法先干燥整果，再脱壳得到绿咖啡。

#### 输入

##### 产品流

###### 接收的生咖啡批次（`coffee_raw_lot_input`）

- 选定流：生咖啡批次 [unmapped]
- 流属性/单位：质量 / kg as received
- 数量规则：按路线和批次称量投入；同一批次不得混合处理路线或含水率基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_processing_batch_records`

###### 处理用水（`coffee_process_water`）

- 选定流：处理用水 [parameterized]
- 流属性/单位：体积 / m3
- 绑定：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：按处理阶段记录水表、批次记录或供应方记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_processing_batch_records`
- 数量范围：暂定处理用水筛选估计；范围角色：默认估计（`default_estimate`）；下限：0；上限：20；单位：m3/t green coffee；基准类型：参考流（`reference_flow`）；证据类型：推理估算（`reasoned_estimate`）

###### 处理和干燥能源（`coffee_processing_energy`）

- 选定流：处理和干燥能源 [parameterized]
- 流属性/单位：能源或载体质量 / kWh、MJ、L 或 kg
- 绑定：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按批次分配水表、燃料收据、设备记录或服务记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_energy_records`
- 数量范围：暂定处理能源筛选估计；范围角色：默认估计（`default_estimate`）；下限：0；上限：10；单位：kWh-equivalent/kg green coffee；基准类型：参考流（`reference_flow`）；证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已准备和稳定化的咖啡中间状态（`coffee_stabilized_intermediate`）

- 该准备好的中间状态是初级调理的预期输出状态，但只有经过脱壳、清洁和分级形成绿咖啡后，才是后续参考产品。

- 选定流：干羊皮纸或干咖啡樱桃 [unmapped]
- 流属性/单位：质量 / kg at declared moisture basis
- 数量规则：按路线和批次称量输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_processing_batch_records`
- 来源：`fao-arabica-coffee-manual-lao`; `fao-green-coffee-processing-africa`
- 数量范围：暂定稳定化中间状态筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：6
  - 单位：kg dry intermediate/kg green coffee at gate
  - 依据：干羊皮纸或干咖啡樱桃转换的首轮宽范围；应以路线特定批次质量平衡替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：理由估计（`reasoned_estimate`）

###### 声明的咖啡共产品或回收材料（`coffee_processing_coproduct`）

只有在具有明确功能、接收方、数量、质量、去向和交接时，才将果肉、黏液、堆肥原料、饲料材料或其他预期输出记录为共产品或回收材料；否则应记录为残余物或废物。

- 选定流：咖啡处理共产品或回收材料 [unmapped]
- 流属性/单位：质量 / kg wet or dry matter
- 数量规则：按接收方、去向和批次称量转移输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_residue_destination_records`
- 来源：`iso-14044-2006`; `mass-balance-identity`
- 数量范围：暂定声明共产品筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg co-product/kg green coffee at gate
  - 依据：按接收状态计的湿或干共产品首轮宽范围；应以目的地特定称重替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：理由估计（`reasoned_estimate`）

##### 废物流

###### 果肉、黏液、羊皮纸、外壳和干法残余（`coffee_processing_residues`）

- 选定流：咖啡处理残余物 [unmapped]
- 流属性/单位：质量 / kg wet or dry matter
- 数量规则：在产品和有记录的共产品路线之后测量残余
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_coffee_residue_destination_records`
- 数量范围：残余质量平衡 QA 范围；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：1；单位：kg residue/kg raw coffee input；基准类型：过程输出（`process_output`）；证据类型：方法公式（`method_formula`）；来源：`mass-balance-identity`

###### 处理废水和处理输出（`coffee_processing_wastewater`）

- 选定流：咖啡处理废水或处理服务 [unmapped]
- 流属性/单位：体积、质量或处理服务 / m3、kg 或 service unit
- 数量规则：按水表、处理收据、排放记录或批次水平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_coffee_wastewater_records`
- 来源：`fao-green-coffee-processing-africa`; `mass-balance-identity`
- 数量范围：暂定处理废水筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：m3/t green coffee at gate
  - 依据：湿法到干法路线的首轮宽范围；应以批次水表或处理记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：理由估计（`reasoned_estimate`）

### 过程：脱壳、清洁和分级（`coffee_hulling_and_grading`）

干磨节点接收干羊皮纸、干樱桃或其他声明中间状态，输出一个或多个绿咖啡质量或目的地状态。必须区分合格绿咖啡、降级或单独销售咖啡、返工、缺陷和废物。

#### 输入

##### 产品流

###### 干燥咖啡中间状态（`coffee_dry_mill_input`）

- 选定流：干羊皮纸或干咖啡樱桃 [unmapped]
- 流属性/单位：质量 / kg at declared moisture basis
- 数量规则：关联初级处理输出的称重批次投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_processing_batch_records`

###### 干磨能源和服务（`coffee_dry_mill_energy`）

- 选定流：脱壳、清洁和分级能源或服务 [parameterized]
- 流属性/单位：能源或载体质量 / kWh、MJ、L 或 kg
- 绑定：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按批次分配水表、燃料收据或设备服务记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_energy_records`
- 数量范围：暂定干磨能源筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh-equivalent/kg green coffee at gate
  - 依据：脱壳、清洁和分级的首轮宽范围；应以水表或服务记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：理由估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 声明等级的合格绿咖啡（`coffee_green_reference_output`）

按批次、等级、含水率、缺陷标准、目的地和交接门记录净合格绿咖啡；这是本 PCR 的参考输出。

- 选定流：Coffee, green `b8869823-9c26-4580-9c45-95a626e0ca2a`
- 流属性/单位：质量 / kg
- 数量规则：声明门称量的合格净绿咖啡输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_grade_lot_records`
- 数量范围：暂定降级输出筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg downgraded coffee/kg green coffee at gate
  - 依据：合格等级分选的首轮宽范围；应以等级批次质量平衡替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：理由估计（`reasoned_estimate`）
- 数量范围：绿豆含水率 QA 区间；范围角色：QA 校验（`qa_guardrail`）；下限：8；上限：13；单位：percent wet basis；基准类型：参考流（`reference_flow`）；证据类型：外部来源（`external_source`）；来源：`fao-green-coffee-processing-africa`

###### 降级或单独销售的咖啡输出（`coffee_downgraded_coproduct`）

只有存在独立交接和声明用途时，才将降级、次级或单独销售的绿咖啡作为预期输出记录；不得同时计为合格参考输出和共产品。

- 选定流：Coffee, green `b8869823-9c26-4580-9c45-95a626e0ca2a`
- 绑定模式：`fixed`
- 流属性/单位：质量 / kg
- 数量规则：按等级、接收方和目的地称量输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_grade_lot_records`

##### 废物流

###### 缺陷豆、异物和脱壳废物（`coffee_dry_mill_rejects`）

- 选定流：干磨拒收物和废物 [unmapped]
- 流属性/单位：质量 / kg wet or dry matter
- 数量规则：按批次称量拒收流或质量平衡差额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_coffee_residue_destination_records`
- 数量范围：干磨拒收筛选范围；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：1；单位：kg rejects/kg dried intermediate input；基准类型：过程输出（`process_output`）；证据类型：方法公式（`method_formula`）；来源：`mass-balance-identity`

### 过程：绿咖啡储存和门交接（`coffee_storage_and_gate_handoff`）

仅在声明门前发生储存、稳定化仓储或仓库处理时纳入。储存时长、仓库条件和质量损失按批次或批号建立索引；门后运输不在默认边界内。

#### 输入

##### 产品流

###### 进入储存的绿咖啡（`coffee_storage_input`）

- 选定流：Coffee, green `b8869823-9c26-4580-9c45-95a626e0ca2a`
- 绑定模式：`fixed`
- 流属性/单位：质量 / kg
- 数量规则：按含水率和门状态记录进入储存的称重批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_storage_records`
- 数量范围：暂定储存投入筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：1.2
  - 单位：kg accepted green coffee/kg green coffee at gate
  - 依据：门交接输出加宽范围储存损失余量；应以批次入库和发运记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：理由估计（`reasoned_estimate`）

###### 储存能源和搬运材料（`coffee_storage_services`）

- 选定流：储存电力、搬运服务或包装 [unmapped]
- 流属性/单位：能源、质量或服务 / kWh、kg 或 service unit
- 数量规则：按批次和储存时长分配水表、发票、搬运记录或包装记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg green coffee at gate and storage day
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coffee_storage_records`
- 数量范围：暂定储存服务筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh-equivalent/kg green coffee/storage day
  - 依据：储存电力和搬运服务首轮宽范围；应以按批次和时长分配的记录替换
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：理由估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 声明门发出的绿咖啡（`coffee_gate_output`）

- 选定流：Coffee, green `b8869823-9c26-4580-9c45-95a626e0ca2a`
- 流属性/单位：质量 / kg
- 数量规则：声明门发出的称重批次，扣除皮重和记录的储存损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_coffee_storage_records`

##### 废物流

###### 储存损失、霉变或拒收绿咖啡（`coffee_storage_losses`）

- 选定流：储存损失、霉变或拒收绿咖啡 [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按含水率和去向称量或核对损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg green coffee at gate
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_coffee_storage_records`
- 数量范围：储存损失 QA 范围；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：1；单位：kg loss/kg green coffee entering storage；基准类型：储存时长（`storage_duration`）；证据类型：方法公式（`method_formula`）；来源：`mass-balance-identity`

## 7. 分配与共产品处理

| rule_id | 适用对象 | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | 多年生咖啡生产 | 按有记录的面积-时间、株年、作物年度、吞吐量或其他有依据的物理基础分配建植、替换、遮荫/支撑系统和共享生产阶段；披露所代表阶段并防止跨年度重复归属。 | `iso-14044-2006`; `fao-good-farming-practices` |
| `allocation_02` | 共享农场、湿磨和干磨资源 | 使用实测活动量、运行时间、批次吞吐量、批次质量或有记录的服务，将共享电表、机械、水、储存、人员、清洗和换线负荷分配一次。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_03` | 绿咖啡和预期共产品 | 将合格绿咖啡作为参考输出；在真实多输出边界选择一个有记录的 PCR 特定分配决定，并保持一致，重要时披露敏感性。 | `iso-14044-2006` |
| `allocation_04` | 果肉、黏液、羊皮纸、外壳、残余和拒收物 | 只有在功能、接收方、数量、质量、去向和交接有记录时，才将流视为共产品或回收材料；否则直到处理或处置前保留为残余或废物。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_05` | 返工、降级和储存损失 | 不合格、返工、降级或储存损失材料在下一次声明交接前继续承担负荷；不得同时将同一批次计为合格绿咖啡和拒收物、共产品或损失。 | `mass-balance-identity` |

本 PCR 不强制一种普适分配方法。数据集必须为每个真实多输出边界选择并论证一种方法，并保持一致。仅凭目的地标签不得取得避免生产抵扣；必须有接收方、功能、可比产品、数量、质量和分配决定。

## 8. 前景数据采集、计算与质量规则

首个数据集必须来自原始记录。咖啡农场和加工厂应将多年生生产阶段关联到作物年度，将采收批次关联到处理批次，并将处理批次关联到绿咖啡等级和残余去向。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_coffee_perennial_phase_records` | `coffee_plantation_production` | 区块、建植、替换、生产阶段和终止 | 区块登记和农场日志 | block; area; species; cultivar; planting; replacement; shade; phase; dates; crop year | 登记审核和阶段核对 | ha; plant; date; year | 年度和事件 | 完整声明多年生阶段 | 每个区块 | 将阶段记录一次分配给所代表作物年度和输出 | 区块图、种植记录和农场登记 |
| `cp_coffee_nutrient_records` | `coffee_plantation_production` | 肥料和改良剂 | 采购、标签、施用日志和土壤记录 | product; quantity; nutrient; date; block; area; purpose | 发票、标签和施用核对 | kg; L; date | 每次施用 | 完整作物年度 | 区块 | 汇总实际产品并只计算一次养分 | 发票、标签和田间日志 |
| `cp_coffee_crop_protection_records` | `coffee_plantation_production` | 作物保护 | 采购和施用记录 | product; active; formulation; quantity; date; block; area | 记录核对 | kg; L; date | 每次施用 | 完整作物年度 | 区块 | 按具名产品和活性物质汇总 | 标签、发票和施用日志 |
| `cp_coffee_water_records` | `coffee_plantation_production`, `coffee_primary_processing_and_drying` | 灌溉、处理水、取水和排放 | 水表、水泵、许可、批次和排放记录 | source; meter; stage; block; batch; delivered; withdrawn; return; discharge; date | 计量审核和水平衡 | m3; date | 事件或月度 | 完整作物年度及所有批次 | 水源、区块和加工厂 | 只核对一次供水、使用、循环和排放 | 校准水表和水平衡表 |
| `cp_coffee_energy_records` | 所有纳入过程 | 燃料、电力、干燥和搬运能源 | 发票、水表、燃料收据、机器日志或服务记录 | carrier; equipment; process; batch; operation; quantity; date | 发票、水表和运行日志审核 | L; kg; MJ; kWh; h | 月度和批次 | 完整作物年度及所有纳入运行 | 农场、加工厂、仓库和设备 | 按运行、批次质量或服务记录分配共享能源 | 发票、水表和分配表 |
| `cp_coffee_emission_records` | `coffee_plantation_production` | 土壤、残余和燃烧排放 | 养分、残余、燃料和计算记录 | nutrient; residue; climate; soil; pathway; medium; fuel; factor; method | 方法计算和证据审核 | kg input; kg substance | 事件和年度结算 | 完整作物年度 | 区块和接收介质 | 采用一种方法并去重 | 计算表和因子来源 |
| `cp_coffee_harvest_lot_records` | `coffee_harvest_and_collection` | 采收樱桃和田间损失 | 采收票、磅单和批次登记 | lot; block; date; maturity; harvested; loss; moisture; recipient; route | 磅单核对和批次审核 | kg; percent; date; lot | 每个批次 | 作物年度全部采收 | 区块和采收活动 | 核对可用、采收、损失和转移质量 | 校准秤和批次追溯 |
| `cp_coffee_processing_batch_records` | `coffee_primary_processing_and_drying`, `coffee_hulling_and_grading` | 路线、批次、中间状态和输出 | 批次表、磅单和加工日志 | batch; route; input; stage; water; energy; moisture; output; reject; date | 批次质量平衡和路线审核 | kg; m3; kWh; percent; date | 批次或班次 | 所有纳入处理运行 | 湿磨、干磨和批次 | 将每个投入关联到一个批次并核对所有输出状态 | 批次表、磅单和含水率记录 |
| `cp_coffee_grade_lot_records` | `coffee_hulling_and_grading` | 合格、降级、返工和拒收状态 | 分级表、磅单和接收方记录 | lot; grade; moisture; defect; accepted; downgraded; rework; reject; recipient; date | 称重分级核对 | kg; percent; date | 批次或运行 | 所有纳入分级 | 干磨和接收方 | 列举每个去向并防止重复计算 | 分级表、磅单和去向收据 |
| `cp_coffee_residue_destination_records` | `coffee_primary_processing_and_drying`, `coffee_hulling_and_grading` | 果肉、黏液、羊皮纸、外壳、废水固体和废物 | 残余日志、处理收据和接收方记录 | stream; wet/dry basis; quantity; treatment; recipient; function; destination; date | 残余质量平衡和交接审核 | kg; m3; date | 批次和交接 | 所有纳入批次 | 加工厂和去向 | 核对原料至产品、共产品、残余、处理和损失 | 磅单、处理收据和去向记录 |
| `cp_coffee_wastewater_records` | `coffee_primary_processing_and_drying` | 废水和处理 | 水表、实验室结果、排放或处理记录 | volume; solids; pollutant; treatment; medium; date; batch | 水表、实验室和处理审核 | m3; kg; date | 批次或排放 | 所有纳入湿法批次 | 加工厂和接收介质 | 每股流只采用一条排放或处理路线 | 水表、实验室结果和收据 |
| `cp_coffee_storage_records` | `coffee_storage_and_gate_handoff` | 储存、含水率、搬运和损失 | 仓库批次、计量、库存和发运记录 | lot; opening; closing; moisture; days; energy; packaging; loss; gate; date | 库存和含水率核对 | kg; percent; day; kWh; date | 批次和发运 | 所有纳入储存周期 | 仓库和批次 | 核对期初质量、发运、损失和期末余额 | 库存、含水率和发运记录 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | 多年生生产 | 年度化阶段负荷 = 可归属建植、替换或终止负荷 × 所代表阶段份额 ÷ 声明分配基准 | 阶段记录；面积-时间或株年；作物年度输出 | 年度化生产投入 | `iso-14044-2006`; `mass-balance-identity` |
| `calc_02` | 生产和处理归一化 | 归一化数量 = 采集数量 ÷ 同一含水率和交接基准下的净合格绿咖啡 | 采集数量；合格绿咖啡；含水率基准；交接门 | 每 kg 参考流数量 | `mass-balance-identity` |
| `calc_03` | 咖啡路线质量平衡 | 原料咖啡投入 = 合格绿咖啡 + 有记录的共产品 + 残余 + 拒收物 + 废水固体 + 损失，并先协调含水率基准 | 批次投入；所有输出状态；含水率和干物质记录 | 核对后的批次输出 | `mass-balance-identity`; `fao-green-coffee-processing-africa` |
| `calc_04` | 养分和土壤排放 | 对有文件的养分、残余、土壤、气候、路径和接收介质记录采用一种因子或方法；不得重复同一路径 | 养分和残余记录；方法和因子 | 基本流数量 | `ipcc-2019-refinement-afolu` |
| `calc_05` | 共享批次或活动资源 | 按实测运行、批次质量、吞吐量或有记录服务，将共享能源、水、劳务、储存和换线记录分配一次 | 共享记录；运行；批次；批次；分配基准 | 过程和批次数量 | `iso-14044-2006`; `mass-balance-identity` |
| `calc_06` | 储存 | 储存损失 = 期初批次质量 − 发运质量 − 有记录的留存或转移材料，并协调皮重和含水率基准 | 期初；发运；转移；损失；含水率 | 储存损失 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | 身份和交接门 | 声明物种或品种组、地理位置、生产系统、农场或加工厂范围、作物年度、处理路线、交接门、绿豆含水率基准和等级。 | 区块登记、加工厂记录和数据集元数据 |
| `quality_02` | 质量和含水率 | 优先使用校准秤、水表、批次票据、含水率测量、发票和处理记录；保留皮重、单位、干物质基准和换算因子。 | 原始记录和计算表 |
| `quality_03` | 作物年度和批次 | 覆盖完整声明作物年度及所有纳入采收、湿磨、干磨和储存批次；标识缺失批次和期间。 | 年度清单、批次登记和批次索引 |
| `quality_04` | 输出和残余完整性 | 核对咖啡樱桃、羊皮纸、干樱桃、绿咖啡、等级状态、果肉、黏液、外壳、羊皮纸、废水、缺陷、拒收物、储存损失和记录去向。 | 批次质量平衡、分级表和去向收据 |
| `quality_05` | 分配 | 记录每个多输出边界、分配方法、物理或经济基准、共产品功能以及重要时的敏感性。 | 分配表和接收方证据 |
| `quality_06` | 发布 | 披露采集、计算和估算值，原始记录占比，未解析流身份，水和排放方法，路线、交接门和更新触发条件。 | 质量声明和审核记录 |

## 9. 校验规则

| rule_id | 适用对象 | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | 参考流和元数据 | 缺少物种或品种组、地理位置、作物年度、处理路线、含水率基准、等级、交接门或质量属性时拒绝；最终发布前核验 Coffee, green 流身份。 | `fao-arabica-coffee-manual-lao`; `mass-balance-identity` |
| `validation_02` | 过程图和路线 | 必须有受管理生产、采收交接、选定湿法/蜜处理/干法路线、干燥或稳定化状态、脱壳/分级交接和明确门。 | `fao-arabica-coffee-manual-lao`; `fao-green-coffee-processing-africa` |
| `validation_03` | 批次和质量平衡 | 从生樱桃或中间状态到绿咖啡、预期共产品、残余、废水、拒收物和损失，核对所有纳入批次；拒绝混用含水率基准或重复计算。 | `fao-green-coffee-processing-africa`; `mass-balance-identity` |
| `validation_04` | 多输出边界 | 列举所有预期输出和交接；没有功能、接收方、数量、质量、去向和分配决定时，拒绝共产品或避免生产抵扣。 | `iso-14044-2006` |
| `validation_05` | 处理和干燥 | 检查湿法、蜜处理或干法路线一致性，干燥记录、含水率测量、储存条件、返潮或霉变事件以及路线特定用水。 | `fao-ota-coffee-code`; `fao-green-coffee-processing-africa` |
| `validation_06` | 期间、储存和活动批次 | 将建植、替换、终止、作物年度、采收批次、处理批次、换线、储存时长和发运关联到一个期间或阶段；防止重复归属。 | `iso-14044-2006`; `mass-balance-identity` |
| `validation_07` | 养分、水和基本流 | 核查实际产品和养分基准、灌溉与取水、处理水与废水、接收介质以及一种排放方法；防止氮或水路径重复。 | `ipcc-2019-refinement-afolu`; `fao-good-farming-practices` |
| `validation_08` | 拒收物和残余 | 为果肉、黏液、羊皮纸、外壳、缺陷豆、碎豆、异物、废水固体、储存损失和拒收批次提供去向；仅有目的地标签不足以构成共产品。 | `fao-green-coffee-processing-africa`; `mass-balance-identity` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset；仅在审查、身份解析和发布控制完成后作为 background_dataset |
| downstream_use | 用于栽培绿咖啡的农业和第一初级处理前景建模，并支持下游 process 或 lifecyclemodel 构建。 |
| allowed_use | 保留咖啡身份、物种或品种组、地理位置、作物年度、处理路线、含水率基准、交接门、等级、输出去向、分配和质量披露的研究。 |
| excluded_use | 烘焙、研磨、脱咖啡因、速溶或饮料咖啡；野生采集；无条件的区域替代；没有樱桃至绿豆质量平衡、交接门或含水率信息的使用。 |
| required_metadata | PCR id；CPC 参考；物种或品种组；地理位置；农场/加工厂范围；作物年度；生产系统；处理路线；中间状态；含水率；等级；交接门；储存；投入；输出；残余；废水；分配；参考数量和单位；身份状态。 |
| required_quality_disclosure | 场址和期间覆盖；采集、计算和估算字段；原始记录占比；秤、水表和含水率证据；批次质量平衡；水和排放方法；分配；Flow Set 解析；未解析身份。 |
| update_trigger | 咖啡物种或路线、生产系统、养分或作物保护实践、处理技术、干燥、水、能源、等级、储存、残余或废水路线、交接门、身份或必需限定信息发生重大变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-arabica-coffee-manual-lao` | handbook | FAO, Arabica coffee manual for Lao PDR, <https://www.fao.org/4/ae939e/ae939e08.htm> | 湿法、蜜处理和干法处理顺序；干燥、储存和绿咖啡交接 |
| `fao-green-coffee-processing-africa` | handbook | FAO, Post Harvest Handling and Processing of Green Coffee in African Countries, <https://www.fao.org/4/x6939e/X6939e03.htm> | 处理状态、干燥、脱壳、分级、缺陷和路线特定残余 |
| `fao-ota-coffee-code` | official_guidance | FAO/WHO, Draft Code of Practice for the Prevention of Ochratoxin A in Coffee, <https://www.fao.org/fileadmin/user_upload/agns/pdf/coffee/guidelines_final_en.pdf> | 干燥、储存、含水率和霉变风险质量控制 |
| `fao-good-farming-practices` | official_guidance | FAO, Good Farming Practices, <https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/good-farming-practices/en/> | 受管理生产、土壤、养分、灌溉和作物保护记录要求 |
| `ipcc-2019-refinement-afolu` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 AFOLU, <https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html> | 受管理土壤、残余和燃料相关基本流方法 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, <https://committee.iso.org/standard/38498.html> | 系统边界、分配、共产品功能、数据质量和归属披露 |
| `mass-balance-identity` | method_factor | 声明的作物年度、批次、含水率、产品、共产品、残余、废水和损失核对方法 | 归一化、输出完整性和重复计算检查 |
