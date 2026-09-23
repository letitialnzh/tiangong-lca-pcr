---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.bananas
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 香蕉

## 1. 范围与适用性

本 PCR 覆盖新鲜、未加工香蕉从种植园建立或声明的宿根/再生周期开始，经作物管理、灌溉、养分和作物保护投入、采收、分级、可选清洗或冷却、初级包装、残余物去向处理，直至在声明的农场门或包装厂门交接。适用于商业香蕉种植园以及在声明种植园单元、作物周期、生产年度和交接门的情况下的小农或多地点生产。当田间残余物以及采收或调理废弃物在声明交接门之前处于前景边界内时，也纳入其去向。香蕉种苗、吸芽、球茎或组织培养种植材料生产；未单独声明的车前蕉或其他 Musa 产品；干制、冷冻、烹调、罐藏、加工、零售、消费者储存和消费阶段；无关的土地转化或基础设施建设；以及声明交接门之后的下游运输均不纳入。购买的投入物和服务在跨越前景边界并服务于所代表的作物周期或生产年度时纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.bananas |
| classification_refs | CPC 3.0:01312 Bananas |
| covered_products | 在声明的农场门或包装厂门交付的新鲜、未加工香蕉 |
| excluded_products | 香蕉种植材料生产、未单独声明的车前蕉、干制、冷冻、烹调、罐藏、加工、零售、消费者储存和消费产品，以及声明交接门之后的下游物流 |
| representative_product | 符合声明的品种或品种组、成熟度、尺寸或等级、清洁度、修整、包装和交接门状态要求的可销售新鲜香蕉果实 |
| production_route | 种植园建立或宿根/再生周期更新；营养生长和果穗发育管理；灌溉、养分、杂草、害虫和病害管理；采收；去手或分级；可选清洗、冷却和初级包装；声明的残余物和废弃物去向处理 |
| market_state | 在农场门或包装厂门处以果穗、香蕉手、纸箱、周转箱或其他声明的初级包装状态交付的新鲜、未加工香蕉果实 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明的农场门或包装厂门处的可销售新鲜香蕉 |
| How much | 1,000 kg |
| How well | 新鲜且未加工，声明品种或品种组、采收成熟度、尺寸或等级、清洁度、修整或去手状态、清洗和冷却状态、包装状态以及废弃物或残余物去向 |
| How long or cycle | 一个声明的香蕉种植园生产年度或作物周期，包括归属于该周期的全部采收批次；必须披露并将建立阶段及共享种植园负荷分配到声明的生产周期 |
| reference_flow_link | `bananas_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Fresh bananas at the declared farm-gate or pack-house gate `7c496507-1583-4181-9a3a-2cf56d54b99c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | production geography; cultivar or variety group; plantation, smallholder, or multisite route; establishment or ratoon-cycle status; stand age or cycle number; planting or regrowth date; harvest dates and bunch or lot identifiers; declared gate; maturity, size, grade, and trimming state; irrigation source and method; nutrient and crop-protection basis; washing and cooling state; packaging state; field-residue, reject, and wastewater fate |
| 绑定模式 | fixed |


构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_banana_mass` | marketable bananas and harvest records | Mass | kg | 将果穗或批次总采收量、可销售新鲜香蕉、不可销售果实、修整物、田间残余物和已记录的处理损失作为独立的实测或计算数量保留。 |
| `plantation_cycle_normalization` | plantation, field, and crop-cycle records | Area, time, and mass | ha, year, and kg | 按种植园单元、田块或生产批次记录投入和采收，并将其归一化到归属于同一声明生产年度或作物周期的可销售产出。 |
| `planting_material_basis` | suckers, corms, tissue-culture plants, and other establishment material | Count or mass | plant, sucker, corm, or kg | 保留材料类型和购买批次数量；仅在有供应商或场址记录的转换依据时，才将数量转换为质量。 |
| `nutrient_product_basis` | fertilizer, manure, compost, mulch, and soil-amendment inputs | Product mass and declared nutrient | kg product, kg N, kg P2O5, or kg K2O | 仅依据标签、供应商规格、养分计划或实验室结果，将购买产品质量转换为养分基准，同时保留原始产品质量。 |
| `water_energy_basis` | irrigation, washing, cooling, electricity, and fuel | Volume, energy, or fuel | m3, kWh, MJ, or L | 分别记录灌溉水和调理水；以实测单位记录外购电力和燃料，并披露所使用的转换因子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已整备的种植园单元或田块接收香蕉种植材料，或进入声明的宿根/再生周期；披露既有土地利用和排除的基础设施工作 |
| starting_condition_role | 声明的建立阶段、生产年度或宿根/再生作物周期核算起点 |
| product_classification_scope | CPC 3.0:01312 Bananas 所对应的新鲜香蕉，直至声明的农场门或包装厂门 |
| recursive_input_rule | 外购香蕉种植材料作为一次性上游产品投入链接；其苗圃、组织培养、吸芽或球茎生产不属于本 PCR，除非另有上游数据集。香蕉产品作为另一香蕉生产单元的投入时，若无明确上游证据，不递归展开。 |
| upstream_dataset_requirement | 使用时应为种植材料、肥料和改良剂、作物保护产品、灌溉水、电力、燃料、包装以及外购运输或处理服务提供上游数据集。 |
| disclosure | 声明地理位置、种植园或小农路线、品种或品种组、建立或宿根状态、种植园年龄或周期编号、作物日期、灌溉来源和方法、养分和作物保护计划、采收批次、声明交接门、产量和废弃物核对、清洗和冷却、包装、残余物和废水去向以及任何共享种植园分配。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_banana_cycle` | establishment, ratoon renewal, and managed crop cycle | 纳入种植园建立或声明的宿根/再生周期更新、作物管理、灌溉、养分和作物保护投入、采收准备以及产生声明新鲜香蕉产出的周期投入；披露既有土地利用，排除无关基础设施建设。 | `fao-banana-production-guide-2015`; `fao-banana-production-manual` |
| `boundary_gate_conditioning` | harvest, grading, and primary conditioning | 前景系统在声明的农场门或包装厂门结束；在该交接门之前发生的切割、果穗处理、去手、分级、可选清洗、冷却和初级包装纳入。 | `fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_managed_soil_and_residue` | nutrients, managed soil, field residue, and reject fate | 使用一种声明的方法，并依据记录的养分投入和残余物去向估算适用的直接和间接土壤或残余物排放；不得重复计算同一氮路径，也不得将未经证实的残余物利用作为共产品信用。 | `ipcc-2019-refinement-afolu`; `fao-banana-production-guide-2015` |
| `boundary_biosecurity_records` | planting material, field operations, and plantation hygiene | 当种植材料来源和状态以及相关种植园卫生或生物安全措施影响所代表的作物周期时，应记录这些信息；相关处理记录应保持在同一声明场址范围内。 | `globalgap-tr4-banana-biosecurity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `plantation_establishment` | Banana plantation establishment | required | each represented planting, replanting, or declared plantation-unit establishment | foreground plantation establishment | established plantation unit, field, or crop-cycle area |
| `managed_banana_crop_cycle` | Managed banana crop cycle | required | every represented annual production year or ratoon crop cycle | foreground managed biological production | managed area and crop-cycle or production-year harvest |
| `banana_harvest_and_conditioning` | Banana harvest and gate conditioning | required | each represented harvest campaign and declared gate | foreground harvest, conditioning, packing, and gate hand-off | 1,000 kg marketable fresh bananas |
| `banana_residue_and_reject_routing` | Banana residue and reject routing | conditional | on-site or included treatment, recovery, composting, feed use, disposal, or wastewater treatment occurs before the declared gate | foreground residue and reject fate | measured field residue, rejects, trim, and wastewater routed within the boundary |

### 过程：Banana plantation establishment（`plantation_establishment`）

#### 输入

##### 产品流

###### 香蕉种植材料（`planting_material_input`）

记录进入所代表种植园单元的种植材料，并说明其为吸芽、球茎、组织培养苗或其他声明的建立材料。

- 选定流：Banana planting material
- 流属性/单位：Count or mass / plant, sucker, corm, or kg
- 数量规则：记录购买批次数量以及每个田块或种植园单元实际种植的有效数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：归属于同一作物周期或生产年度的每 1,000 kg 可销售新鲜香蕉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`fao-banana-production-guide-2015`; `globalgap-tr4-banana-biosecurity`

##### 废物流

##### 基本流

###### 香蕉种植园土地占用（`plantation_land_occupation`）

记录所代表种植园单元或田块在建立阶段及声明作物周期或生产年度内的面积时间占用。

- 选定流：Land occupation by banana plantation
- 流属性/单位：Area-time / ha*a
- 数量规则：将所代表的种植园或田块面积乘以声明的占用期间；披露既有土地利用，除非明确纳入，不包括无关土地转化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：归属于同一作物周期或生产年度的每 1,000 kg 可销售新鲜香蕉
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_plantation_register`
- 来源：`fao-banana-production-guide-2015`

##### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：Managed banana crop cycle（`managed_banana_crop_cycle`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`managed_banana_crop_cycle_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：归属于同一作物周期或生产年度的每 1,000 kg 可销售新鲜香蕉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-banana-production-guide-2015`; `ipcc-2019-refinement-afolu`

###### 香蕉作物保护产品（`crop_protection_input`）

记录所代表香蕉作物周期使用的每种作物保护产品或有效成分，包括目标和施用方法。

- 选定流：Banana crop-protection product
- 流属性/单位：Mass of product or active ingredient / kg
- 数量规则：汇总供应商产品数量；在有配方文件时，依据文件计算有效成分质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：归属于同一作物周期或生产年度的每 1,000 kg 可销售新鲜香蕉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`; `globalgap-tr4-banana-biosecurity`

###### 供应香蕉种植园的灌溉水（`irrigation_water_input`）

记录输送至所代表香蕉种植园或田块用于作物灌溉的水。

- 选定流：Irrigation water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：使用水表、泵、控制器或有记录的水平衡数据记录输送至作物的水量；分开记录来源和方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：归属于同一作物周期或生产年度的每 1,000 kg 可销售新鲜香蕉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6`

###### 种植园能源或燃料投入（`plantation_energy_input`）

记录泵送、田间机械、作物作业以及声明边界内其他作物周期活动所使用的电力和燃料。

- 选定流：Plantation electricity or fuel
- 流属性/单位：Energy or fuel / kWh, MJ, or L
- 数量规则：按设备、作业和种植园单元记录外购电力和燃料；披露共享设备使用的转换和分配方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：归属于同一作物周期或生产年度的每 1,000 kg 可销售新鲜香蕉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`fao-banana-production-guide-2015`

##### 废物流

##### 基本流

###### 香蕉灌溉水资源取用（`irrigation_withdrawal`）

当水源和取用活动处于声明的前景边界内时，记录作物灌溉所对应的环境水资源取用量。

- 选定流：Water-resource withdrawal for banana irrigation
- 流属性/单位：Volume / m3
- 数量规则：使用与灌溉水投入对应的实测或计算取用量，并披露水源、回流和方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：归属于同一作物周期或生产年度的每 1,000 kg 可销售新鲜香蕉
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-banana-production-guide-2015`

#### 输出

##### 产品流

##### 废物流

###### 香蕉田间残余物（`field_residue_output`）

记录假茎、叶片、淘汰果穗材料和其他作物残余物离开作物管理过程后进入田间返还、堆肥、饲料利用、移除或处置的去向。

- 选定流：Banana field residue
- 流属性/单位：Mass / kg wet or dry material
- 数量规则：按田块或种植园单元实测或计算残余物，并记录声明的去向；不得仅凭残余物留在田间就推断其具有产品用途。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：归属于同一作物周期或生产年度的每 1,000 kg 可销售新鲜香蕉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-banana-production-guide-2015`; `ipcc-2019-refinement-afolu`

##### 基本流

###### 直接土壤氧化亚氮排放（`direct_n2o_emission`）

使用声明的方法以及记录的养分或残余物基准，计算适用的养分投入和受管理作物残余物产生的直接氧化亚氮排放。

- 选定流：Direct nitrous oxide from managed banana soil
- 流属性/单位：Mass / kg N2O
- 数量规则：对合格氮投入和残余物处理应用声明的方法因子；说明结果按 N2O 还是 N2O-N 报告。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：归属于同一作物周期或生产年度的每 1,000 kg 可销售新鲜香蕉
- 基准类型：氮投入（`n_input`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-refinement-afolu`

### 过程：Banana harvest and gate conditioning（`banana_harvest_and_conditioning`）

#### 输入

##### 产品流

###### 采收和调理能源（`harvest_energy_input`）

记录声明交接门之前果穗处理、去手、分级、清洗、冷却和初级包装使用的电力和燃料。

- 选定流：Harvest and conditioning electricity or fuel
- 流属性/单位：Energy or fuel / kWh, MJ, or L
- 数量规则：使用电表、燃料、运行时间或吞吐量记录，并依据有文件支持的吞吐量或运行时间将共享公用工程分配给香蕉批次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：声明交接门处每 1,000 kg 可销售新鲜香蕉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_energy_records`
- 来源：`fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6`

###### 调理或清洗水（`conditioning_water_input`）

记录在声明的农场门或包装厂门之前用于可选清洗、消毒或调理的水。

- 选定流：Banana conditioning or wash water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：按批次或电表周期记录输送水量，并将作物灌溉水与采后调理水分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：声明交接门处每 1,000 kg 可销售新鲜香蕉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`
- 来源：`fao-banana-production-guide-2015`

###### 新鲜香蕉初级包装（`primary_packaging_input`）

记录在声明交接门之前跨越边界的初级包装；当有文件支持所代表批次的分摊份额时，也包括可重复使用的周转箱或托盘。

- 选定流：Fresh-banana primary packaging
- 流属性/单位：Mass or count / kg material or packaging unit
- 数量规则：使用供应商规格和批次数量；披露材料、单位质量、重复使用状态以及分配到香蕉产出的份额。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明交接门处每 1,000 kg 可销售新鲜香蕉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明交接门处的可销售新鲜香蕉（`marketable_banana_output`）

记录符合声明的成熟度、尺寸、等级、清洁度、修整、包装和交接门状态限定条件的新鲜香蕉批次。

- 选定流：Fresh bananas at the declared farm-gate or pack-house gate
- 流属性/单位：Mass / kg wet fresh bananas
- 数量规则：使用最终称重和发运记录；将所有前景投入和损失归一化为该交接门产出的 1,000 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：声明交接门处 1,000 kg 可销售新鲜香蕉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_output_records`
- 来源：`fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6`

##### 废物流

###### 香蕉采收和调理废弃物（`harvest_reject_output`）

将不可销售的果穗、香蕉手、指蕉、修整物以及分级或调理废弃物与田间残余物分开记录，并记录其去向。

- 选定流：Banana harvest and conditioning rejects
- 流属性/单位：Mass / kg wet material
- 数量规则：核对接收采收量、交接门可销售产出、废弃物、残余物、与废水相关的固体以及已记录的处理损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：声明交接门处每 1,000 kg 可销售新鲜香蕉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_output_records`
- 来源：`fao-banana-production-guide-2015`

###### 香蕉调理废水（`conditioning_wastewater_output`）

记录包含的调理作业排出的清洗或调理废水，并说明其被处理、再利用、排放或转移到其他数据集的情况。

- 选定流：Banana conditioning wastewater
- 流属性/单位：Volume or mass / m3 or kg
- 数量规则：使用水表或批次记录，并将废水量与清洁调理水投入分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：声明交接门处每 1,000 kg 可销售新鲜香蕉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`
- 来源：`fao-banana-production-guide-2015`

##### 基本流

### 过程：Banana residue and reject routing（`banana_residue_and_reject_routing`）

#### 输入

##### 产品流

##### 废物流

###### 边界内处理的香蕉残余物或废弃物流（`residue_reject_routing_input`）

记录在声明交接门之前进入现场或纳入范围的回收、处理、堆肥、饲料利用或处置路径的田间残余物、采收废弃物、调理修整物或废水。

- 选定流：Banana residue, reject, or wastewater stream
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：使用相应田间、采收或调理记录中的实测数量和声明去向；不得重复记录已转移到边界外的物流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：声明交接门处每 1,000 kg 可销售新鲜香蕉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6`

##### 基本流

#### 输出

##### 产品流

###### 香蕉残余物或废弃物回收的有机材料（`recovered_organic_product_output`）

仅在存在有文件支持的接收方、数量、质量基准和预期用途时，记录堆肥、覆盖物、饲料材料或其他回收产品。

- 选定流：Recovered organic material from banana residues or rejects
- 流属性/单位：Mass / kg wet or dry material
- 数量规则：记录回收产出和质量基准；仅当接收方和预期用途有文件支持时，才应用共产品或回收材料规则。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：声明交接门处每 1,000 kg 可销售新鲜香蕉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-banana-production-guide-2015`; `iso-14044-2006`

##### 废物流

###### 处理后的香蕉有机残余废物（`residual_organic_waste_output`）

记录回收、处理、堆肥、饲料利用或处置之后仍作为废物流的残余物或废弃物部分。

- 选定流：Residual banana organic waste
- 流属性/单位：Mass / kg wet or dry material
- 数量规则：以进入路径的投入量减去有文件支持的回收产品和其他实测产出进行计算；报告处理或处置去向。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：声明交接门处每 1,000 kg 可销售新鲜香蕉
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-banana-production-guide-2015`

###### 处理后的香蕉调理废水（`treated_wastewater_output`）

记录经过包含在边界内的处理路径后排出的废水，并将其与转移给下游服务的未经处理调理废水区分开。

- 选定流：Treated banana conditioning wastewater
- 流属性/单位：Volume or mass / m3 or kg
- 数量规则：使用处理记录或水平衡，并披露处理后物流是转移到下游服务、再利用还是在边界内排放。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：声明交接门处每 1,000 kg 可销售新鲜香蕉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-banana-production-guide-2015`

##### 基本流

###### 包含的残余物或废水处理排放（`routing_treatment_emissions`）

仅当处理路径、方法以及实测或有文件支持的投入支持该排放路径时，记录或计算边界内处理活动产生的排放。

- 选定流：Emissions from included banana residue or wastewater treatment
- 流属性/单位：Mass / kg substance
- 数量规则：应用声明的处理方法和有文件支持的因子或实测值；当物流转移至独立下游数据集时，不推断处理排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：声明交接门处每 1,000 kg 可销售新鲜香蕉
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`ipcc-2019-refinement-afolu`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_single_banana_cycle` | shared plantation, field, irrigation, machinery, and utility records | 使用种植园单元、面积、日期、作物周期或生产年度以及可销售产出的记录，将投入和排放归属于香蕉；没有另一作物或年度自身记录时，不向其分配。 | `fao-banana-production-guide-2015`; `iso-14044-2006` |
| `allocation_plantation_establishment` | establishment, replanting, ratoon renewal, and shared plantation burdens | 披露种植园年龄和周期编号，并使用有文件支持的归属规则将建立阶段或共享种植园负荷分配到声明的生产周期；不得无说明地将全部建立负荷分配给一个采收年度。 | `fao-banana-production-guide-2015`; `iso-14044-2006` |
| `allocation_residue_reject_fate` | field residue, harvest rejects, trim, recovered material, and wastewater | 除非存在有文件支持的接收方、数量、质量基准和预期用途，不得为残余物或废弃物分配共产品信用；否则将负荷保留在香蕉生产中并报告其去向。 | `fao-banana-production-guide-2015`; `iso-14044-2006` |
| `allocation_shared_conditioning` | shared harvest, conditioning, packing, and utilities | 按实测香蕉吞吐量、运行时间或其他有文件支持的物理关系分配共享调理投入；披露分配基准并与交接门产出核对。 | `globalgap-ifa-fruit-vegetables-v6`; `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `plantation_establishment` | planting material and establishment inputs | planting-material invoice, lot record, and plantation establishment log | lot; material type; viable quantity; field or plantation unit; date; planting or regrowth status; product mass | retain supplier record and field establishment record | plant, sucker, corm, kg product, and kg nutrient | each establishment or replanting campaign | full represented crop cycle or production year | each field or plantation unit | sum by campaign and normalize to marketable output | supplier lot trace, planting record, and cycle reconciliation |
| `cp_plantation_register` | `plantation_establishment`; `managed_banana_crop_cycle` | area, crop dates, stand age, cycle number, and shared plantation attribution | field, plantation-unit, and crop-cycle register | area; unit; prior land use; planting or regrowth date; stand age; cycle number; crop dates; shared-use flag | verify register against field map and production records | ha, m2, days, years, and crop-cycle identifier | each crop cycle or production year | full represented crop cycle or production year | each banana field, plantation unit, or smallholder site | calculate area-time and assign shared burdens with the declared rule | field map, production register, dates, and stand evidence |
| `cp_irrigation_records` | `managed_banana_crop_cycle` | crop irrigation and water withdrawal | meter, pump, controller, or water-balance record | source; meter start and end; event date; area; method; rainfall adjustment; withdrawal and return flow | meter reading or documented water-balance calculation | m3 | each event or meter period | full represented crop cycle or production year | each banana field or plantation unit | sum delivered irrigation and withdrawal by cycle, year, and source | calibrated meter or documented balance inputs |
| `cp_field_energy_records` | `managed_banana_crop_cycle` | plantation fuel and electricity | fuel invoice, equipment activity log, and electricity meter | fuel or electricity; equipment; operation; field; date; allocation basis | supplier record plus equipment or meter log | L, MJ, or kWh | each refuelling, operation, or meter period | full represented crop cycle or production year | each banana field or plantation unit | allocate shared operations by area, hours, throughput, or declared physical basis | invoice, equipment log, meter record, and allocation calculation |
| `cp_nutrient_records` | `managed_banana_crop_cycle` | nutrient and soil-amendment inputs | nutrient plan, supplier invoice, and application log | product; material description; nutrient concentration; date; area; quantity; method; soil or tissue test | reconcile product records with field application records | kg product and kg nutrient | each application | full represented crop cycle or production year | each banana field or plantation unit | sum product and nutrient mass by cycle or year and declared basis | label or supplier specification, soil or tissue evidence, and application log |
| `cp_crop_protection_records` | `managed_banana_crop_cycle` | crop-protection products and biosecurity actions | treatment log, supplier record, and site hygiene register | product; active ingredient; rate; area; date; target; equipment; hygiene action; site | record each application and relevant hygiene or biosecurity action | kg product, kg active ingredient, and declared action count | each application or action | full represented crop cycle or production year | each banana field or plantation unit | sum by product, active ingredient, action, and cycle or year | application log, product label, and site record |
| `cp_residue_and_reject_records` | `managed_banana_crop_cycle`; `banana_harvest_and_conditioning`; `banana_residue_and_reject_routing` | field residue, rejects, trim, recovered material, and wastewater fate | residue, reject, treatment, recovery, and destination record | source stream; field or batch; date; wet or dry mass; volume; destination; recipient; quality basis | weigh or meter each stream and retain destination evidence | kg wet, kg dry, and m3 | each harvest lot, treatment batch, or routing event | full represented crop cycle or production year | each field, plantation unit, preparation line, or treatment route | reconcile each source stream to recovered product, residual waste, treatment, or downstream transfer | scale or meter record, recipient record, and treatment or disposal receipt |
| `cp_harvest_records` | `managed_banana_crop_cycle`; `banana_harvest_and_conditioning` | harvest and crop-cycle output | harvest ticket, bunch or lot register, and scale record | field; bunch or lot; date; gross mass; marketable mass; maturity; grade; reject; destination | weigh each harvest lot or use documented lot reconciliation | kg wet bananas | each harvest lot or campaign | full represented harvest campaign | each banana field or plantation unit | sum gross harvest, marketable output, rejects, and losses by cycle or year | calibrated scale, lot ticket, and grade record |
| `cp_postharvest_records` | `banana_harvest_and_conditioning` | washing, wastewater, rejects, and batch conditioning | conditioning batch and utility records | received mass; wash water; discharge; trim; packaging; batch; date; fate; gate state | batch record plus meter and packaging allocation | kg, m3, kWh, and packaging units | each batch or meter period | full represented harvest campaign | each preparation line or pack-house | aggregate by batch and normalize to marketable gate output | meter record, batch sheet, and waste or treatment receipt |
| `cp_postharvest_energy_records` | `banana_harvest_and_conditioning` | cooling, grading, washing, and packing electricity or fuel | electricity meter, fuel record, and throughput record | meter period; line; kWh or fuel; throughput; cooling duration; batch | meter or fuel allocation by throughput or run time | kWh, MJ, or L | each meter period or batch | full represented harvest campaign | each in-scope preparation line | allocate shared utility by throughput or run time and reconcile to batch output | meter data, fuel record, and allocation calculation |
| `cp_packaging_records` | `banana_harvest_and_conditioning` | primary packaging | packaging specification, bill of materials, and count record | material; unit mass; units; reuse status; batch; output mass | packaging count and specification reconciliation | kg material and packaging units | each packaging lot or batch | full represented harvest campaign | each preparation line or pack-house | sum packaging material per gate output and disclose reuse | supplier specification, count sheet, and reuse declaration |
| `cp_gate_output_records` | `banana_harvest_and_conditioning` | marketable output and final rejects | dispatch scale, lot record, and reject record | lot; date; gate; packed mass; maturity; grade; reject; destination; gate state | final scale and lot reconciliation | kg wet bananas | each dispatch lot | full represented harvest campaign | declared gate | sum marketable output and final reject streams; normalize to 1,000 kg | calibrated scale or lot record and grade record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_mass` | fertilizer, manure, compost, mulch, and amendment rows | 产品质量乘以有文件支持的养分比例；保留原始产品质量和养分基准。 | product invoice; nutrient concentration; application record | kg N, kg P2O5, or kg K2O by cycle or year | `fao-banana-production-guide-2015` |
| `calc_cycle_normalization` | all crop-cycle and production-year inputs | 将作物周期或生产年度数量除以可销售新鲜香蕉质量，再乘以 1,000 kg。 | input record; marketable gate output | normalized quantity per 1,000 kg output |  |
| `calc_plantation_attribution` | plantation establishment, replanting, ratoon renewal, and shared plantation inputs | 使用有文件支持的种植园年龄、周期编号或生产年度归属规则分配共享种植园投入，并将每个周期或年度与其可销售产出核对。 | plantation register; dates; input records; cycle output | crop-cycle or production-year quantity | `fao-banana-production-guide-2015`; `iso-14044-2006` |
| `calc_area_time` | plantation land occupation | 将种植园或田块面积乘以所代表的占用期间；披露既有土地利用以及排除的土地转化。 | plantation register; crop or production dates | area-time quantity | `fao-banana-production-guide-2015` |
| `calc_nitrogen_emission` | direct soil nitrous oxide and nutrient-loss rows | 对合格养分投入和声明的残余物去向应用选定的 IPCC 兼容因子或场址方法；披露因子以及结果按物质质量还是元素质量报告。 | nutrient records; residue records; method choice; soil or climate parameters | kg substance emitted | `ipcc-2019-refinement-afolu` |
| `calc_gate_mass_balance` | harvest, conditioning, and gate preparation | 接收采收量应等于交接门可销售产出、废弃物、残余物、与废水相关的固体、回收产品以及在测量不确定度内记录的处理损失之和。 | harvest tickets; conditioning records; dispatch, routing, and reject records | reconciled mass balance | `fao-banana-production-guide-2015` |
| `calc_routing_balance` | residue and reject routing | 路由投入应等于回收产品、残余废物、处理后废水、有测量依据的排放以及有文件支持的下游转移之和；不得为未经核实的去向提供信用。 | routed input; recovery record; treatment record; downstream receipt | routing balance | `fao-banana-production-guide-2015`; `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all flow and product records | 声明香蕉形态、品种或品种组、种植园或小农路线、建立或宿根状态、种植园年龄或周期编号、交接门、成熟度、等级、清洗或冷却状态、包装状态以及残余物或废弃物去向；在构建前景数据集时按需要解析平台身份。 | lot record, product description, and reference-flow qualifiers |
| `quality_measurement` | inputs and outputs | 优先使用经校准的水表、电表、秤、供应商发票、养分计划、施用记录和处理凭证；无法直接测量时，应记录估算和分配方法。 | meter calibration, scale record, invoice, receipt, or calculation sheet |
| `quality_temporal` | crop-cycle or production-year inventory | 覆盖所代表的建立或宿根更新、主动管理、采收活动、调理、路由和交接门交付的完整期间。 | plantation register, application log, irrigation records, harvest tickets, batch sheets, and dispatch records |
| `quality_completeness` | crop-cycle or production-year balance | 核对种植材料、养分、灌溉、能源、作物保护、总采收量、可销售产出、田间残余物、废弃物、废水、包装和路由物流。 | crop-cycle or production-year input and mass reconciliation |
| `quality_disclosure` | dataset metadata | 披露年度或宿根路线、种植园年龄或周期编号、灌溉来源、养分基准、作物保护产品、采收批次、清洗、冷却、包装、交接门以及残余物或废弃物去向。 | dataset metadata and supporting records |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | reference flow and gate output | 声明的参考产出必须是在声明交接门处的新鲜、未加工可销售香蕉，并以 kg 质量计量；加工香蕉产品、零售产品以及未限定的 Musa 产品不属于本 PCR。 | `fao-banana-production-guide-2015` |
| `validate_cycle_dates` | establishment, management, harvest, routing, and gate preparation | 建立或宿根更新、施用、灌溉、采收批次、调理、路由和交接门产出必须处于声明作物周期或生产年度内，或明确归属于该周期或年度。 | `fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6` |
| `validate_nutrient_basis` | nutrient inputs and emissions | 必须具备并保持一致的产品质量、养分浓度、养分基准、残余物处理和排放计算方法；不得将产品质量和养分质量视为同一交换。 | `fao-banana-production-guide-2015`; `ipcc-2019-refinement-afolu` |
| `validate_mass_balance` | harvest, conditioning, and routing | 总采收量和接收量必须在声明的测量不确定度内与可销售产出、废弃物、残余物、与废水相关的固体、回收产品、下游转移和损失相符。 | `fao-banana-production-guide-2015` |
| `validate_flow_set_resolution` | parameterized rows | 在前景数据生成期间，每个参数化行必须解析为与其指定 Flow Set group、属性、单位和地理条件兼容的经核实 UUID；否则保留明确的证据缺口覆盖发现。 |  |
| `validate_qualifiers` | reference flow and dataset metadata | 必须具备必需限定信息，包括品种或品种组、建立或宿根状态、种植园年龄或周期编号、采收批次、成熟度和等级、交接门、清洗、冷却、包装以及残余物、废弃物和废水去向。 | `fao-banana-production-guide-2015`; `globalgap-ifa-fruit-vegetables-v6` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | farm-gate or pack-house gate 处新鲜香蕉的前景农业生产数据集 |
| downstream_use | 用于新鲜香蕉产品系统的 secondary_dataset；仅当提供者发布了具备所需元数据的代表性区域或市场平均数据集时，才可作为 background_dataset |
| allowed_use | 在所声明的地理范围和产品状态内开展比较产品研究、种植园或作物周期清单建模、农场改进和新鲜香蕉供应链评估 |
| excluded_use | 种植材料生产、未披露的车前蕉或其他 Musa 替代、干制、冷冻、烹调、罐藏、零售、消费以及声明交接门之后的下游物流；未经情景披露不得跨种植园年龄、宿根周期或调理路线外推 |
| required_metadata | 产品形态；品种或品种组；种植园或小农路线；建立或宿根状态；种植园年龄或周期编号；地理位置；日期或生产年度；采收批次；声明交接门；产量；灌溉来源和数量；养分基准；作物保护计划；清洗和冷却；包装；残余物、废弃物和废水去向 |
| required_quality_disclosure | 时间覆盖、场址范围、实测值与计算值、种植园周期归属和分配规则、质量平衡和路由结果、平台身份解析状态，以及所有需要以前景记录替换的暂定估算 |
| update_trigger | 品种或路线、种植园年龄或周期、灌溉方法、养分计划、作物保护计划、采收形式、清洗或冷却线、包装格式、交接门定义、残余物或废弃物去向发生变化，或出现改变实质量或边界规则的新证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-banana-production-guide-2015` | official_guidance | FAO and partners, *Good Agricultural Practices and Biosecurity for Banana Production*, 2015, https://www.fao.org/fileadmin/templates/banana/documents/Docs_Resources/2015/TR4/cartilla_banano_definitiva_-_ENGLISH_final.pdf | 香蕉种植园建立、作物管理、采收、采后设施、生物安全、残余物背景和生产记录 |
| `fao-banana-production-manual` | official_guidance | FAO, *Bananas*, Agriculture Services Bulletin, https://www.fao.org/4/T0308E/T0308E00.htm | 香蕉植物和商业种植园生产背景、作物周期作业和农场边界解释 |
| `ipcc-2019-refinement-afolu` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, Volume 4 AFOLU, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | 受管理土壤氮、作物残余物和农业排放计算方法 |
| `globalgap-ifa-fruit-vegetables-v6` | official_guidance | GLOBALG.A.P., *Integrated Farm Assurance guideline for Fruit and Vegetables v6*, https://documents.globalgap.org/documents/230414_IFA_guideline_FV_v6_0_Apr23_en.pdf | 生产记录、肥料和作物保护记录、可追溯性、采收和采后质量证据 |
| `globalgap-tr4-banana-biosecurity` | official_guidance | GLOBALG.A.P., *TR4 Biosecurity Add-on for Bananas*, https://globalgap.org/what-we-offer/solutions/tr4-biosecurity-add-on/ | 香蕉种植材料追溯、种植园卫生和生物安全披露 |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines* | 分配层级、共产品处理和有文件支持的归属规则 |

###### 氮和养分向水体或土壤的损失（`nutrient_loss_emission`）

仅在选定的方法和场址记录支持该路径时，计算硝酸盐、磷酸盐或其他有文件依据的养分损失。

- 选定流：Nutrient loss from managed banana plantation
- 流属性/单位：Mass / kg nutrient or substance
- 数量规则：依据养分记录、土壤或气候信息以及有文件支持的水体或土壤路径，使用声明的盈余或损失因子方法；不得仅由购买量推断损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：归属于同一作物周期或生产年度的每 1,000 kg 可销售新鲜香蕉
- 基准类型：氮投入（`n_input`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-refinement-afolu`
