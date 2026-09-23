---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.apricots
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 杏

## 1. 范围与适用性

本 PCR 适用于在受管理的多年生果园中生产、并在声明的农场交接点转出的新鲜未加工杏。范围包括果园建立和补植树、未结果期和结果期管理、采收，以及在农场交接前进行且纳入声明交接状态的清洗、分选、分级、包装或短期场内暂存。适用于雨养和灌溉生产，也适用于供鲜食或后续加工的果实，只要农场交接时仍保持杏产品身份。不包括苗圃生产、杏干、罐藏、冷冻、果汁、果泥、果酱、场外运输和储存、零售、消费者使用以及包装废弃物末端处理。数据包必须声明是否包含初级处理和包装。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.apricots |
| classification_refs | CPC 3.0: 01343 Apricots |
| covered_products | 在声明农场状态下交接的新鲜未加工杏果 |
| excluded_products | 苗圃种苗生产；杏干、罐藏、冷冻、榨汁、果泥或蜜饯产品；场外物流和下游使用 |
| representative_product | 农场交接点的新鲜采收杏 |
| production_route | 多年生果园建立、果园管理、采收和有条件的农场初级处理 |
| market_state | 新鲜果实，声明品种、成熟度、质量等级、合格/不合格基准及处理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场交接点的新鲜未加工杏果 |
| How much | 1,000 kg 按接收状态计的合格杏果 |
| How well | 符合声明的品种或品种组、成熟度、质量等级、缺陷基准、水分约定和交接状态的果实；不转化为加工杏产品 |
| How long or cycle | 声明的一个生产年度，位于果园结果期内；建立和补植投入按声明的果园寿命分配 |
| reference_flow_link | `apricot_harvest_and_farm_gate_handling` 的合格输出；若包含初级处理，则为 `apricot_primary_handling` 的合格输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 农场交接点的新鲜杏果＼ |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种或品种组；生产国家、地区和气候；果园年龄和结果状态；作物年度；果园面积；灌溉状态和水源；成熟度和质量约定；合格与不合格果实基准；是否包含初级处理 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 合格杏果输出 | Mass | kg | 按声明的农场交接状态报告接收状态下的合格果实。归一化前保留实测成熟度、水分和缺陷调整。 |
| `orchard_life_allocation_basis` | 建立、补植和未结果期果园投入 | 面积、时间或质量活动属性 | ha、果园年或 kg 果实 | 将多年生果园建立和补植投入按声明的果园寿命及结果产出基准分配；披露果园更新、弃置和未结果年份。 |
| `area_to_reference_conversion` | 面积基果园投入和排放 | 活动特定属性 | 活动特定单位 | 将果园年总量除以同一年度或声明多年平均的农场合格果实质量，再缩放到 1,000 kg。 |
| `nutrient_product_and_basis` | 肥料和土壤改良剂投入 | 产品质量和养分质量 | kg 产品；kg N、kg P2O5 或 kg K2O | 同时记录实际产品及施用量和声明的养分基准。一个有条件的总卡片可以包含实际使用的产品和养分。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 建园前或建立时的果园地块，种植材料和购买的管理投入跨越前景边界；既有土地状况和果园历史单独披露 |
| starting_condition_role | 受管理多年生杏生产及果园资产核算的起点 |
| product_classification_scope | CPC 3.0 01343 对应的新鲜杏果 |
| recursive_input_rule | 杏种植材料和保留果实仅在跨越边界时作为上游投入记录；不得递归表示为同一农场杏果输出 |
| upstream_dataset_requirement | 种植材料、养分和土壤改良剂、植保产品、能源、灌溉供水、机械服务、交接前包装以及适用废物处理的兼容上游数据集 |
| disclosure | 品种、果园年龄、建立年份、结果寿命、补植树、果园面积、前序土地用途、土壤和气候背景、灌溉、养分基准、植保、产量、采收损失、处理、共产品以及残余物或废物去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_establishment_to_farm_gate` | 所有符合条件的数据集 | 包括声明农场交接前发生的场地准备、种植、果园建立、未结果期、结果期管理、采收和初级处理。 | `fao-crop-production-methodology`; `fao-stone-fruit-production-guide` |
| `boundary_perennial_orchard_disclosure` | 建立和补植树 | 只有在按声明的果园寿命或合格果实基准分配后，才将建立和补植投入纳入；披露分配期限和未结果年份。 | `fao-stone-fruit-production-guide`; `iso-14067` |
| `boundary_direct_field_emissions` | 受管理土壤、作物残余物和养分施用 | 使用适用地理方法和同一套养分、灌溉和残余物活动数据，纳入直接和间接养分及残余物相关排放。 | `ipcc-2019-refinement`; `emep-eea-2023-guidebook` |
| `boundary_farm_gate_handling` | 有条件的初级处理 | 仅在交接前发生且未已包含在采收记录中时，纳入清洗、分选、分级、包装或短期暂存；识别不合格果实及其去向。 | `fao-crop-production-methodology` |
| `boundary_post_farm_gate_exclusion` | 下游活动 | 排除场外运输、储存、分销、零售、消费者使用、加工和包装末端处理，除非研究明确扩展超出本 PCR 的边界。 | `iso-14044` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `apricot_orchard_establishment_and_management` | 杏果园建立与管理 | required | 始终纳入；包括建立、补植、未结果期和结果期管理，并按声明的果园寿命分配 | 受管理的多年生生物生产和果园资产形成 | 果园面积、果园年、建立期及年度合格果实输出 |
| `apricot_harvest_and_farm_gate_handling` | 杏采收和农场交接处理 | required | 始终纳入 | 采收、田间处理和农场交接 | 一个生产年度的采收、合格、降级和损失果实质量 |
| `apricot_primary_handling` | 杏初级处理 | conditional | 交接前发生清洗、分选、分级、包装或短期场内暂存，且未包含在采收记录中 | 准备声明的交接状态 | 进料果实质量和处理后合格果实质量 |

### 过程：杏果园建立与管理（`apricot_orchard_establishment_and_management`）

#### 输入

##### 产品流

###### 杏种植材料（`apricot_planting_material_input`）

记录进入果园建立过程的苗木、嫁接苗或其他种植材料。自繁或保留材料应声明来源和分配处理。

- 选定流：杏果园建立用种植材料＼
- 流属性/单位：数量或质量 / item 或 kg
- 数量规则：按果园地块和建立年份记录实测种植材料数量；使用数量到质量换算时保留换算过程
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算至 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_apricot_establishment_records`
- 来源：`fao-stone-fruit-production-guide`

###### 农业养分与肥料投入（`apricot_orchard_establishment_and_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算至 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_apricot_orchard_management_records`
- 来源：`fao-fertilizer-code`; `fao-stone-fruit-production-guide`

###### 供应的灌溉水（`irrigation_water_input`）

仅在水实际施用于果园时记录灌溉。雨养生产记录零灌溉水，并提供水量平衡或农场管理依据。

- 选定流：灌溉供水＼
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按果园地块和生产年度记录计量或计算的灌溉水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算至 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_apricot_irrigation_records`
- 来源：`fao-crop-production-methodology`

###### 农机燃料或服务供应（`farm_energy_input`）

记录耕作、割草、喷施、修剪和果园维护使用的柴油、电力或外包机械服务，前提是其跨越前景边界。

- 选定流：农机燃料或能源服务＼
- 流属性/单位：能量或质量 / MJ 或 kg 燃料
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：使用燃料发票、设备日志或供应商服务记录，并按地块和报告年度分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算至 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_apricot_energy_records`
- 来源：`fao-crop-production-methodology`

###### 供应的植保产品（`crop_protection_input`）

记录果园保护实际使用的植保产品及施用量，并在可得时保留有效成分、产品剂型和施用事件。

- 选定流：植保产品供应＼
- 流属性/单位：产品质量或体积 / kg 产品或 L 产品
- 数量规则：按施用事件和果园地块记录产品实测量；保留有效成分信息
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每果园年，并换算至 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_apricot_crop_protection_records`
- 来源：`fao-crop-production-methodology`; `fao-stone-fruit-production-guide`

##### 废物流

###### 果园修剪和补植残余物（`orchard_residue_output`）

记录离开受管理果园的修剪枝条、移除树木和其他果园残余物。根据保留、堆肥、焚烧或废物处理去向建模。

- 选定流：果园修剪和补植残余物＼
- 流属性/单位：质量 / kg 干基或接收状态
- 数量规则：按地块和年度实测或计算残余物质量，并记录水分基准和去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算至 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_apricot_residue_records`
- 来源：`fao-crop-production-methodology`; `ipcc-2019-refinement`

##### 基本流

###### 受管理果园土地占用（`orchard_land_occupation`）

记录声明果园面积和报告期间对应的土地占用。既有土地用途和转化事件应单独保留。

- 选定流：受管理农业土地占用＼
- 流属性/单位：面积-时间 / m2*a
- 数量规则：声明果园面积乘以报告期占用时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算至 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_apricot_land_records`
- 来源：`fao-crop-production-methodology`; `iso-14067`

#### 输出

##### 产品流

###### 果园生产交接（`orchard_production_output`）

该内部产品交接将果园产出传递到采收和处理过程，按最终合格/不合格之前的采收果实质量计量。

- 选定流：受管理果园产出的杏果＼
- 流属性/单位：质量 / kg
- 数量规则：按果园地块和作物年度实测采收果实质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_apricot_harvest_records`
- 来源：`fao-stone-fruit-production-guide`

##### 基本流

###### 养分和残余物管理产生的田间排放（`field_emissions_output`）

依据实际养分和残余物活动数据及选定地理方法，记录土壤或空气排放。

- 选定流：养分和残余物管理产生的田间排放＼
- 流属性/单位：物质质量 / kg 物质
- 数量规则：依据声明的养分、残余物、气候和土壤活动数据及所选方法计算排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年，并换算至 1,000 kg 合格果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_apricot_orchard_management_records`
- 来源：`ipcc-2019-refinement`; `emep-eea-2023-guidebook`

### 过程：杏采收和农场交接处理（`apricot_harvest_and_farm_gate_handling`）

#### 输入

##### 产品流

###### 接收的采收杏果（`harvested_apricot_input`）

记录在分选、分级或其他有条件的初级处理之前进入采收核算的果实。

- 选定流：受管理果园产出的杏果＼
- 流属性/单位：质量 / kg
- 数量规则：用采收票据和接收记录将果园输出与采收量进行核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_apricot_harvest_records`
- 来源：`fao-stone-fruit-production-guide`

##### 废物流

###### 采收和田间损失（`harvest_loss_output`）

记录未采收、受损或在采收中被丢弃的果实，并明确去向和处理路径。

- 选定流：杏采收和田间损失＼
- 流属性/单位：质量 / kg
- 数量规则：采收质量平衡：接收果实加记录损失减去其他声明输出转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格果实
- 基准类型：过程输出（`process_output`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_apricot_harvest_records`
- 来源：`fao-crop-production-methodology`

#### 输出

##### 产品流

###### 农场交接点的新鲜杏（`fresh_apricot_farm_gate_output`）

记录在声明农场交接点转出的合格、新鲜、未加工杏。当不包含初级处理时，该流为 PCR 参考输出。

- 选定流：农场交接点的新鲜杏果＼
- 流属性/单位：质量 / kg
- 数量规则：在声明交接点称量合格果实，并与采收输入和不合格果实核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_apricot_harvest_records`
- 来源：`fao-crop-production-methodology`

##### 废物流

###### 不合格或降级杏果（`rejected_apricot_output`）

记录农场交接时不合格或低于参考质量的果实，并说明堆肥、饲料、加工或处置去向。

- 选定流：不合格或降级杏果＼
- 流属性/单位：质量 / kg
- 数量规则：按等级和去向记录实测不合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_apricot_harvest_records`
- 来源：`fao-crop-production-methodology`

### 过程：杏初级处理（`apricot_primary_handling`）

#### 输入

##### 产品流

###### 初级处理用水（`primary_handling_water_input`）

当该活动包含在声明的农场交接状态中时，记录跨越边界用于清洗或其他初级处理的水。

- 选定流：杏初级处理用工艺水＼
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：记录进入处理作业的水表读数或批次用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 处理果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_apricot_handling_records`
- 来源：`fao-crop-production-methodology`

###### 初级处理能源（`primary_handling_energy_input`）

记录交接前包含的清洗、分选、分级、包装或短期暂存使用的电力或燃料。

- 选定流：初级处理电力或燃料＼
- 流属性/单位：能量 / kWh 或 MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：用电表、发票或设备日志，并按处理杏批次分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 处理果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_apricot_handling_records`
- 来源：`fao-crop-production-methodology`

###### 包装材料（`packing_material_input`）

仅在包装属于声明的农场交接状态时记录包装材料，并保留材料类型、质量、重复使用次数和损失。

- 选定流：新鲜杏包装材料＼
- 流属性/单位：质量 / kg 包装材料
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- 数量规则：按采购包装质量调整重复使用，并分配到合格处理果实
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格处理果实
- 基准类型：过程输出（`process_output`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_apricot_handling_records`
- 来源：`fao-crop-production-methodology`

##### 废物流

###### 处理不合格品和清洗残余物（`handling_reject_output`）

记录离开初级处理的拒收果实、沉积物和其他残余物，并明确去向和处理路径。

- 选定流：初级处理不合格品和残余物＼
- 流属性/单位：质量 / kg
- 数量规则：对进料果实、合格果实、不合格品和残余物进行批次质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格处理果实
- 基准类型：过程输出（`process_output`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_apricot_handling_records`
- 来源：`fao-crop-production-methodology`

#### 输出

##### 产品流

###### 处理后的合格杏（`handled_apricot_output`）

记录在声明农场交接点、经过纳入的清洗、分选、分级、包装或短期暂存后的新鲜杏。

- 选定流：初级处理后的农场交接新鲜杏果＼
- 流属性/单位：质量 / kg
- 数量规则：按批次和质量等级称量处理后的合格果实输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格处理果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_apricot_handling_records`
- 来源：`fao-crop-production-methodology`

## 7. 分配与共产品处理

将果园建立、补植树、共享机械、灌溉基础设施和其他跨期投入，按声明的果园寿命和报告期使用果园面积、结果年份及合格果实输出分配。不得静默将未结果年份年度化；应披露选择的结果寿命期限和补植事件。杏果分流至鲜食、加工、饲料、堆肥或处置时，保留各去向质量。多个声明产品或服务共享过程时，使用物理质量分配；若水分和功能不可比，则使用有文件支持的经济或质量等级分配并报告基准。没有声明产品或服务的不合格果实应按废物或残余物流记录，不得仅因可能存在下游用途就给予共产品信用。不得重复计算上游种植材料数据集已经包含的果园投入。

### 分配规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orchard_life_and_period` | 建立、补植和共享果园资产 | 使用声明的果园寿命、结果年份、面积和产量记录，将跨期投入分配到声明的果园年和合格果实输出。 | `fao-stone-fruit-production-guide`; `iso-14067` |
| `allocation_apricot_destinations` | 鲜食、加工、饲料、堆肥和处置去向 | 分开保留各去向质量；只有在多个声明产品或服务共享过程时，才使用有文件支持的物理或经济分配。 | `iso-14044` |
| `allocation_rejects_and_residues` | 不合格果实和果园残余物 | 没有声明产品或服务的材料作为废物或残余物并建模其去向；不得仅因可能用途就赋予共产品信用。 | `iso-14044`; `ipcc-2019-refinement` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_apricot_establishment_records` | `apricot_orchard_establishment_and_management` | planting material | 苗圃发票、种植图和建园日志 | 地块；品种；树数；材料类型；建立年份；来源 | 发票核查和地块核对 | item、kg | 每次建立或补植事件 | 全部果园建立和补植期间 | 每个果园地块 | 按地块和果园年汇总 | 发票、种植图和负责人签字 |
| `cp_apricot_orchard_management_records` | `apricot_orchard_establishment_and_management` | nutrient, amendment, and field-emission activity | 投入发票、施用日志、土壤记录和方法输入 | 产品；数量；养分分析；日期；地块；土壤/气候输入 | 发票、施用日志和方法数据核对 | kg 产品；kg 养分 | 每次施用；年度汇总 | 作物年度和声明果园寿命 | 每个果园地块 | 按产品、养分、地块和年度求和 | 发票、施用记录和农艺师复核 |
| `cp_apricot_irrigation_records` | `apricot_orchard_establishment_and_management` | irrigation water | 水表记录或灌溉计划 | 地块；水源；体积；日期；水表基准；雨养标记 | 水表读数或有记录的计算 | m3 | 每次灌溉或每月 | 作物年度 | 每个灌溉地块 | 按地块和作物年度求和 | 水表校准、水费单或水平衡核查 |
| `cp_apricot_energy_records` | `apricot_orchard_establishment_and_management` | machinery and handling energy | 燃料发票、设备日志、电费单 | 设备；燃料或电力；数量；日期；地块；任务 | 发票和日志核对 | L、kg、kWh 或 MJ | 每次交付或运行期 | 作物年度 | 果园和处理设施 | 按活动记录分配到地块或处理批次 | 发票、电表或设备日志 |
| `cp_apricot_crop_protection_records` | `apricot_orchard_establishment_and_management` | crop protection | 施用记录和产品标签 | 产品；剂型；有效成分；数量；日期；地块；用途 | 施用日志和标签核查 | kg 或 L 产品 | 每次施用 | 作物年度 | 每个果园地块 | 按产品和有效成分求和 | 签署的施用记录和标签 |
| `cp_apricot_land_records` | `apricot_orchard_establishment_and_management` | land occupation and transformation | 地籍、GIS 和果园图 | 地块面积；既有土地用途；建立日期；补植日期 | 图件和记录核对 | ha 或 m2 | 建立时和年度更新 | 果园寿命和作物年度 | 每个果园地块 | 按地块和期间汇总面积-时间 | 图件、租约和土地历史证据 |
| `cp_apricot_residue_records` | `apricot_orchard_establishment_and_management` | pruning and replacement residues | 残余物日志和去向收据 | 残余物类型；质量；水分；日期；地块；去向 | 称量或有记录的估算 | kg | 每次清运或年度汇总 | 作物年度 | 每个果园地块 | 按残余物类型和去向求和 | 过磅单、收据或负责人估算 |
| `cp_apricot_harvest_records` | `apricot_harvest_and_farm_gate_handling` | harvested, accepted, rejected, and lost fruit | 采收票据、地磅记录和等级记录 | 地块；品种；日期；采收质量；合格质量；不合格质量；去向 | 批次称量和质量平衡 | kg | 每个采收批次 | 作物年度 | 每个果园地块和接收点 | 按地块、等级和去向汇总 | 校准秤、票据和等级记录 |
| `cp_apricot_handling_records` | `apricot_primary_handling` | water, energy, packing, rejects, and accepted output | 设施计量、发票、批次记录和包装日志 | 批次；进料质量；水；能源；材料；合格质量；不合格品；去向 | 批次质量平衡和公用工程分配 | kg、m3、kWh 或 MJ | 每批或运行期 | 作物年度内处理期 | 声明的处理设施 | 按处理质量分配共享公用工程和材料 | 计量、发票、批次记录和过磅单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_apricot_reference_normalization` | all process outputs | normalized amount = declared flow amount / accepted farm-gate fruit mass × 1,000 kg | flow amount; accepted fruit mass | amount per 1,000 kg accepted fruit | `iso-14067` |
| `calc_apricot_orchard_life_allocation` | establishment and replacement inputs | allocated orchard-year amount = total declared asset input × reporting orchard-year share over declared orchard life | asset input; orchard life; reporting period | orchard-year input | `fao-stone-fruit-production-guide`; `iso-14067` |
| `calc_apricot_nutrient_basis` | nutrient and amendment card | nutrient mass = product mass × declared nutrient fraction; retain product mass and nutrient basis separately | product mass; label or analysis fraction | kg product and kg nutrient | `fao-fertilizer-code` |
| `calc_apricot_mass_balance` | harvest and primary handling | incoming mass = accepted output + rejected output + measured loss, with unexplained residual investigated | incoming, accepted, rejected, and loss records | reconciled batch flows | `fao-crop-production-methodology` |
| `calc_apricot_field_emissions` | soil and residue emissions | apply the selected geographic method to collected nutrient, residue, soil, and climate inputs; do not reuse a default factor without recording applicability | nutrient, residue, soil, climate, and method inputs | elementary emission flows | `ipcc-2019-refinement`; `emep-eea-2023-guidebook` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_apricot_identity` | all product and input rows | 声明品种、产品状态、来源、去向以及是否包含初级处理在验证前保持明确。 | 产品记录、发票、标签和数据集元数据 |
| `dqr_apricot_measurement` | mass, water, energy, and area rows | 尽可能使用校准称量或计量；否则记录换算、水分基准和估算方法。 | 秤、计量表、发票、图件或签署的估算 |
| `dqr_apricot_temporal_coverage` | orchard and crop-year rows | 覆盖完整作物年度，并声明果园建立、补植、结果状态和报告期间。 | 果园登记、作物日历和年度记录 |
| `dqr_apricot_completeness` | all process inputs and outputs | 核对果园投入、采收果实、合格输出、不合格品、残余物和损失；调查未解释的残差。 | 批次和年度质量平衡 |
| `dqr_apricot_transparency` | allocation, factors, and boundaries | 披露分配基准、初级处理范围、上游数据集链接、排放方法以及身份或证据缺口。 | 复核记录和数据集披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_apricot_reference_definition` | reference flow | 发布前必须有 1,000 kg 合格新鲜杏、声明的交接状态、必需限定信息和后续解析的参考身份。 | `iso-14067` |
| `validation_apricot_orchard_periods` | establishment and management | 检查果园建立、未结果期、补植事件、结果年份和年度化基准已声明且未重复计算。 | `fao-stone-fruit-production-guide`; `iso-14067` |
| `validation_apricot_mass_balance` | harvest and primary handling | 检查进料质量 = 合格果实 + 不合格品 + 实测损失，并追踪每个不合格去向。 | `fao-crop-production-methodology` |
| `validation_apricot_flow_bindings` | all flow cards | 先使用最窄适用 Flow Set 组；仅在未覆盖流经过精确核验后使用 fixed UUID；否则保留 unmapped coverage，不改变真实语义。 | `iso-14044` |
| `validation_apricot_evidence` | all constrained ranges and factors | 受约束数值必须有来源证据或声明的前景采集协议；暂定 QA 范围须标明可被复核证据替换。 | `iso-14044` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；当完成数据集具有兼容的身份、地域、时间和质量元数据时，可作为 background_dataset |
| downstream_use | 农场交接新鲜杏的前景数据包构建，以及在发布画像允许时的背景替代 |
| allowed_use | 声明果园和处理边界内的归因型农业 LCA、农场交接碳足迹、作物年度比较和有记录的情景分析 |
| excluded_use | 加工杏产品的直接替代、未披露代表性的通用区域平均、无额外系统建模的后果性结论，以及边界外的下游物流或零售结论 |
| required_metadata | 品种；地理位置；作物年度；果园年龄和状态；面积；产量；灌溉；养分基准；植保；能源；采收和不合格基准；处理范围；分配；流身份；证据缺口 coverage |
| required_quality_disclosure | 计量来源、估算和换算规则、时间和地域覆盖、完整性核查、分配基准、方法因子、不确定性或 QA 范围以及身份证据缺口 |
| update_trigger | 新作物年度、品种或生产路线变化、果园补植或土地历史变化、处理变化、排放方法修订，或身份和证据得到核验 |

## 11. 数据源

| source_id | type | Reference | Use in this PCR |
| --- | --- | --- | --- |
| `fao-crop-production-methodology` | official_guidance | FAO crop production and farm data collection guidance | 过程边界、果园记录、处理记录和质量平衡协议 |
| `fao-stone-fruit-production-guide` | extension_guidance | FAO or equivalent official stone-fruit orchard production guidance | 多年生果园建立、管理、采收和果园寿命披露 |
| `fao-fertilizer-code` | official_guidance | FAO fertilizer best-management code | 产品和养分基准记录 |
| `ipcc-2019-refinement` | method_factor | 2019 IPCC Refinement to the 2006 IPCC Guidelines | 受管理土壤、残余物和农业排放计算方法 |
| `emep-eea-2023-guidebook` | method_factor | EMEP/EEA air pollutant emission inventory guidebook | 适用空气排放方法和报告区分 |
| `iso-14044` | standard | ISO 14044 environmental management—life cycle assessment—requirements and guidelines | 分配、边界和证据规则 |
| `iso-14067` | standard | ISO 14067 greenhouse gases—carbon footprint of products | 参考质量、归一化、果园寿命分配和披露规则 |
