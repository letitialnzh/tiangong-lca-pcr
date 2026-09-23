---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.potatoes
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 马铃薯

## 1. 范围与适用性

本 PCR 适用于马铃薯（`Solanum tuberosum`）初级生产，覆盖播种、田间管理、收获、干式去土、分选以及鲜品未加工块茎在农场门装载。露地和设施栽培均可适用，但必须声明生产路线、地理范围、作物周期、种薯来源、灌溉条件和农场门准备方式。

默认边界不包括商品种薯繁育、农场门交付后的清洗、愈伤或储存、零售包装、加工、冷冻、干燥、熟制、农场门后的运输和消费阶段。只有通过单独声明且清单及定量参考可区分的扩展，才能纳入上述活动。

下列流卡规定如何获得前景清单。条件式总括卡表示实际记录产生的零条、一条或多条交换，不得仅因 Flow Set 内含多个 group 就预先展开。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.potatoes |
| classification_refs | CPC 3.0：01510 Potatoes |
| covered_products | 以食用、饲用或其他非种用目的收获并在农场门交付的新鲜、未加工马铃薯块茎 |
| excluded_products | 认证或商品种薯；甘薯；木薯；山药；芋头；加工、腌制、冷冻、干燥、熟制、去皮或零售包装的马铃薯 |
| representative_product | 可销售的新鲜马铃薯块茎 |
| production_route | 种植材料接收；土壤和作物管理；收获；干式去土和分选；农场门装载 |
| market_state | 农场门处新鲜、未加工、按收到状态湿重计 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门处可销售的新鲜、未加工马铃薯块茎 |
| How much | 按收到状态湿重计 1,000 kg |
| How well | 符合生产者声明的销售或转移规格，参考数量不含附着土壤、淘汰品、严重损伤品和不可销售物料 |
| How long or cycle | 一个声明的马铃薯作物周期，直至农场门装载 |
| reference_flow_link | `potato_cultivation_and_farm_gate_preparation` 的终端输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Potatoes; fresh, unprocessed produce; production mix, at farm gate `65443696-51af-4ba8-8f73-06d434a36605` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 地理范围；品种或品种组；作物年份和周期；预定用途；生产系统；灌溉条件；收获面积；产量；水分或收到状态基准；农场门准备；产品等级；分配处理 |
| 绑定模式 | `fixed` |

构建前景数据包时，必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明全部必需限定信息。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考马铃薯 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部前景交换归一化到按声明收到状态计的 1,000 kg 合格马铃薯；未经记录的换算不得混用干物质和湿重基准。 |
| `area_and_yield` | 田间活动和产量 | 面积和质量 | ha 和 kg | 采用相同收获面积和同一作物周期产出计算产量，并归一化以面积计的投入和排放。 |
| `nutrient_product_and_content` | 养分产品 | 产品质量和声明的养分含量 | kg 产品和 kg N、kg P2O5、kg K2O 或明确声明的等效基准 | 保留每种实际肥料或土壤改良剂的产品质量；另行计算养分含量，不得用养分质量替代产品身份。 |
| `energy_carrier_preservation` | 电力和燃料 | 载能体数量和能量 | 视情况采用 kWh、L、kg 或 MJ | 保留计量的载能体单位和换算因子；每条实际交换完成身份解析前不得汇总不同载能体。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在声明作物建立前，种植块茎和购买投入跨入农场生产边界 |
| starting_condition_role | 前景作物周期起点 |
| product_classification_scope | CPC 3.0 01510 新鲜马铃薯；分类仅提供映射语境，不能替代语义产品边界 |
| recursive_input_rule | 留种或购入的种植块茎作为独立种植材料投入，并声明种用品质和来源；不得计入本周期参考产出。 |
| upstream_dataset_requirement | 每项具体种植材料、养分产品、植保产品、供水和能源载体均采用地理及技术上有代表性的上游数据集 |
| disclosure | 声明作物周期、地理范围、生产系统、种薯来源、灌溉条件、田块面积、产量、残余物和淘汰物去向以及任何收获后扩展 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_end` | 前景系统 | 当种植材料和购买投入进入所表示作物周期时开始；当合格鲜块茎完成干式去土或田间分选并在农场门装载时结束。 | `fao-root-tuber-concepts-2003`；`ilcd-handbook-2010` |
| `boundary_input_completeness` | 田间管理 | 使用时纳入实际种植材料、养分和土壤改良产品、植保产品、灌溉供水和作业能源；只有记录支持时才报告零值。 | `fao-save-and-grow-2011` |
| `boundary_soil_emissions` | 管理土壤 | 采用一种声明方法，纳入由氮投入、作物残余物、尿素和石灰施用造成的适用直接及间接土壤排放；防止与上游数据集重复。 | `ipcc-2019-managed-soils` |
| `boundary_land_change` | 土地转化 | 土地利用变化默认不属于作物周期清单；研究规则要求纳入时，应单独声明方法、时间范围、土地历史和分配。 | `ilcd-handbook-2010` |
| `boundary_post_gate` | 下游活动 | 排除农场门交付后的运输、储存、清洗、包装和加工，除非声明独立扩展。 | `ilcd-handbook-2010` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `potato_cultivation_and_farm_gate_preparation` | 马铃薯种植与农场门准备 | `required` | 始终 | 前景生物生产和农场门交付 | 1,000 kg 合格鲜马铃薯 |

### 过程：马铃薯种植与农场门准备（`potato_cultivation_and_farm_gate_preparation`）

#### 输入

##### 产品流

###### 投入的种植块茎（`planting_tubers_input`）

将购入或农场留存的种植块茎作为独立物理投入，记录来源、品种、品质状态和储存条件。最终数据包必须解析实际种植材料 Flow；“农业投入品，未指定”的候选 Flow 不能作为合格身份。

- 选定流：种用品质马铃薯种植块茎；需要前景身份
- 流属性/单位：质量 / kg
- 数量规则：计量进入声明作物周期的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个声明作物周期及每 1,000 kg 合格马铃薯
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 来源：`fao-save-and-grow-2011`

###### 农业养分与肥料投入（`potato_cultivation_and_farm_gate_preparation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个声明作物周期及每 1,000 kg 合格马铃薯
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 来源：`fao-save-and-grow-2011`

###### 投入的灌溉水（`irrigation_water_input`）

仅对灌溉生产记录供应的灌溉水。田间证据确认没有灌溉水跨越产品投入边界时，雨养生产可记录零灌溉。

- 选定流：灌溉供水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set 版本：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：计量、交付记录或核算后施用于所表示田块的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个声明作物周期及每 1,000 kg 合格马铃薯
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy_records`
- 来源：`fao-save-and-grow-2011`

###### 投入的作业能源载体（`operational_energy_input`）

对田间作业、灌溉泵送、收获、干式去土、分选和农场门装载消耗的电力与燃料只使用一张条件卡。前景生成分别输出每种实际载能体，再解析其电力、移动机械燃料或固定燃烧燃料 group 和 UUID。

- 选定流：作业电力和燃料载体
- 流属性/单位：能量或载能体数量 / 记录采用的 kWh、MJ、L 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- 数量规则：将电表、发票、油罐、机械和承包商记录核算到田块和作物周期
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个声明作物周期及每 1,000 kg 合格马铃薯
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_energy_records`
- 来源：`fao-save-and-grow-2011`

###### 投入的植保制剂（`crop_protection_products_input`）

逐一记录实际制剂，包括产品身份、已知时的有效成分、浓度、施用量和事件。现有已审核 Flow Set 不覆盖这一总括概念，当前查询也不支持一个精确的通用 UUID。

- 选定流：植保制剂；需要前景身份
- 流属性/单位：产品质量或体积 / kg 或 L 产品
- 数量规则：根据施用记录分别汇总每种实际制剂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个声明作物周期及每 1,000 kg 合格马铃薯
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 来源：`fao-save-and-grow-2011`

##### 废物流

##### 基本流

###### 土地占用（`land_occupation_input`）

记录归属于所表示作物周期的净种植面积和持续时间。

- 选定流：马铃薯种植土地占用
- 流属性/单位：面积-时间 / m2*a 或场址支持的等效单位
- 数量规则：收获田块面积乘以声明占用时间，并按合格产量归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个声明作物周期及每 1,000 kg 合格马铃薯
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_and_harvest_records`
- 来源：`fao-root-tuber-concepts-2003`

#### 输出

##### 产品流

###### 可销售鲜马铃薯（`reference_potatoes_output`）

这是唯一的终端定量参考。数量不含附着土壤、田间残余物、淘汰品、严重损伤品和销售或转移规格以外的物料。

- 选定流：Potatoes; fresh, unprocessed produce; production mix, at farm gate `65443696-51af-4ba8-8f73-06d434a36605`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：归一化后恰为 1,000 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

###### 转移的可利用次级马铃薯（`secondary_potato_product_output`）

只有小薯或等外品具有记录的有益去向或销售时，才作为独立产品输出。保留等级、去向和收到状态质量，不得静默并入参考数量。

- 选定流：Potatoes; fresh, unprocessed produce; production mix, at farm gate `65443696-51af-4ba8-8f73-06d434a36605`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：按记录的有益去向计量收到状态质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个声明作物周期及每 1,000 kg 合格马铃薯
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_and_harvest_records`
- 来源：

##### 废物流

###### 作为废物移出的马铃薯生物质（`removed_potato_biomass_waste`）

仅记录作为废物离开前景的地上茎叶、受损块茎或淘汰块茎，分别保留物料身份和去向。当前候选为食品工厂修整废料，与本农场门行不构成精确身份。

- 选定流：移出的马铃薯生物质废物；需要前景身份和去向
- 流属性/单位：质量 / kg
- 数量规则：按物料和去向计量或核算湿重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每个声明作物周期及每 1,000 kg 合格马铃薯
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_and_harvest_records`
- 来源：`ipcc-2019-managed-soils`

##### 基本流

###### 排放到环境空气的一氧化二氮（`soil_nitrous_oxide_output`）

采用一种声明且地理适用的方法，根据采集的氮投入、残余物、土壤、气候、挥发和淋溶活动数据计算直接及适用的间接一氧化二氮排放。

- 选定流：排放到环境空气的一氧化二氮
- 流属性/单位：质量 / kg N2O
- 数量规则：应用 `calc_managed_soil_n2o`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个声明作物周期及每 1,000 kg 合格马铃薯
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_soil_emission_activity`
- 来源：`ipcc-2019-managed-soils`

###### 尿素或石灰施用产生的二氧化碳（`soil_carbon_dioxide_output`）

仅在施用尿素或碳酸盐类石灰材料且所选方法要求该路径时记录。

- 选定流：排放到环境空气的二氧化碳
- 流属性/单位：质量 / kg CO2
- 数量规则：将所选尿素或石灰碳含量方法应用于采集的施用记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个声明作物周期及每 1,000 kg 合格马铃薯
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_soil_emission_activity`
- 来源：`ipcc-2019-managed-soils`

###### 释放到水体的硝酸盐（`nitrate_to_water_output`）

只有所选养分损失方法和场址条件支持水体路径时才计算硝酸盐损失，并保留受纳水体语境。

- 选定流：排放到水体的硝酸盐
- 流属性/单位：质量 / kg 硝酸盐或声明氮基准
- 数量规则：将所选养分损失方法应用于采集的氮活动数据和场址条件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个声明作物周期及每 1,000 kg 合格马铃薯
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_soil_emission_activity`
- 来源：`ipcc-2019-managed-soils`

###### 释放到水体的磷酸盐（`phosphate_to_water_output`）

只有侵蚀、径流、排水或其他所选方法支持该路径时才计算磷酸盐损失，并保留磷基准和受纳水体语境。

- 选定流：排放到水体的磷酸盐
- 流属性/单位：质量 / kg 磷酸盐或声明磷基准
- 数量规则：将一种声明且地理适用的磷损失方法应用于采集的活动数据和场址条件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个声明作物周期及每 1,000 kg 合格马铃薯
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_soil_emission_activity`
- 来源：`fao-save-and-grow-2011`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 田间和农场门作业 | 应先采用过程细分和直接计量区分作业及产出，再考虑分配。 | `iso-14044-2006`；`ilcd-handbook-2010` |
| `allocation_reference_and_secondary` | 合格和次级可利用马铃薯 | 两类产出承担不可分割的共同负荷时，采用同期农场门价值经济分配；披露等级、水分基准和价格，并以质量分配进行敏感性分析。 | `iso-14044-2006` |
| `allocation_residue_and_waste` | 留田残余物和废物输出 | 不向留在或还入田间的物料以及送作废物的物料分配负荷；其管理和适用排放应纳入前景。 | `ipcc-2019-managed-soils` |
| `allocation_seed_feedback` | 农场留存种植块茎 | 将留存种植块茎记录为下一作物周期投入，并记录为生产周期输出或内部转移；防止跨周期重复计算。 | `ilcd-handbook-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity_records` | `potato_cultivation_and_farm_gate_preparation` | planting material, nutrient products, crop protection | 田间日志、发票、施用记录、产品标签 | field_id; crop_cycle; product_identity; amount; unit; nutrient_or_active_content; date; application_method | 将产品和施用事件核算到所表示田块 | kg; L; kg nutrient | 每次接收和施用 | 完整作物周期 | 全部所表示田块 | 保留产品身份，汇总匹配事件，以同周期合格产量归一化 | 发票；标签；校准设备；田间日志 |
| `cp_water_and_energy_records` | `potato_cultivation_and_farm_gate_preparation` | irrigation water and energy carriers | 仪表、交付、发票、油罐、机械或承包商记录 | field_id; meter_or_equipment_id; carrier; amount; unit; date; operation; shared_use_basis | 将直接和承包使用量核算到田块和作物周期 | m3; kWh; L; kg; MJ | 每次事件或仪表周期 | 完整作物周期 | 全部纳入设备和田块 | 分别保留载能体；按记录的运行时间、面积或实测服务量分配共用记录 | 仪表校准；发票；油罐核算；承包商说明 |
| `cp_field_and_harvest_records` | `potato_cultivation_and_farm_gate_preparation` | area, accepted potatoes, secondary output, waste, residue fate | 田块登记、称重票、产量监测、等级和去向记录 | field_id; planted_area; harvested_area; harvest_date; gross_tuber_mass; accepted_mass; secondary_mass; waste_mass; residue_fate; destination; moisture_basis | 将收获面积和全部计量产出核算到同一作物周期 | ha; kg; percent | 每个田块和收获批次 | 完整作物周期至农场门装载 | 全部所表示田块和批次 | 按产出类别和去向汇总；归一化到 1,000 kg 合格马铃薯 | 校准秤；面积记录；等级规格；转移或废物凭证 |
| `cp_soil_emission_activity` | `potato_cultivation_and_farm_gate_preparation` | managed-soil emissions | 养分、残余物、土壤、天气、灌溉和模型记录 | fertilizer_N; organic_N; residue_N; urea; lime; soil; climate; drainage; factor_set; model_version | 采用一种声明方法，根据采集活动数据计算每条路径 | kg N; kg material; kg emission; ha | 每次事件和作物周期计算 | 完整作物周期 | 全部所表示田块 | 按田块计算，有依据时按面积加权，再按同周期合格产量归一化 | 来源记录；因子出处；模型文件；独立单位检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | 面积计量的流 | 每收获公顷作物周期数量除以每收获公顷合格马铃薯产量，再乘以 1,000 kg | 数量；收获面积；合格质量 | 每 1,000 kg 合格马铃薯的数量 | `fao-root-tuber-concepts-2003` |
| `calc_nutrient_content` | 养分产品 | 实际产品质量乘以声明养分比例；保留磷和钾采用元素态还是氧化物当量 | 产品身份；产品质量；含量；报告基准 | 按产品列示的产品质量和养分质量 |  |
| `calc_energy_carriers` | 作业能源 | 保留实际载能体数量；仅在需要时采用有记录的密度或热值换算 | 载能体身份；数量；单位；换算因子 | 按身份列示的载能体数量和能量 |  |
| `calc_managed_soil_n2o` | 土壤一氧化二氮 | 将所选 IPCC 层级或地理适用方法应用于肥料氮、有机氮、还田残余物氮、挥发和淋溶路径 | 氮活动；残余物去向；土壤和气候；所选因子 | 按路径列示的 kg N2O | `ipcc-2019-managed-soils` |
| `calc_output_balance` | 收获产出 | 收获块茎总质量在声明不确定度内等于合格马铃薯、次级马铃薯、废物和实测处理损失之和 | 匹配的称重和等级记录 | 核算后的产出类别 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考和次级产出 | 确认产品为马铃薯块茎而非甘薯或其他根茎作物；保留品种、用途、等级、状态和农场门交付。 | 作物、批次和转移记录 |
| `dq_temporal_alignment` | 全部前景行 | 投入、面积、收获产出、残余物去向和排放必须对应同一作物周期；披露代理时期。 | 带日期的田间、仪表和收获记录 |
| `dq_mass_area_reconciliation` | 田块和收获数据 | 归一化前核算收获面积、总产量、合格产出、次级产出、废物和水分基准。 | 面积登记；校准秤或产量监测；等级和水分记录 |
| `dq_conditional_cards` | 养分和能源总括卡 | 只根据实际前景记录展开；零条、一条或多条交换均可，但每条交换必须有一个精确 Flow Set group 和 UUID。 | 施用、发票、仪表和身份解析记录 |
| `dq_identity_resolution` | 未映射卡 | 实际身份和去向已知后，将种植材料、植保制剂和移出废物解析到精确 UUID；不得采用宽泛代理候选。 | 身份审核记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 终端产品输出 | 必须且只能有一个终端参考输出等于 1,000 kg，并采用 UUID `65443696-51af-4ba8-8f73-06d434a36605` 及全部必需限定信息。 |  |
| `validation_crop_cycle` | 全部清单行 | 田块面积、投入、产出、残余物和排放必须描述相同的声明作物周期和地理范围。 |  |
| `validation_mass_balance` | 收获和分选 | 在声明不确定度内核算收获块茎总质量与合格马铃薯、次级马铃薯、废物和实测处理损失。 | `mass-balance-identity` |
| `validation_nutrient_identity` | 土壤养分投入 | 保留每种产品身份和产品质量；养分基准计算不得替代或合并具体产品交换。 |  |
| `validation_flow_set_expansion` | 参数化总括卡 | PCR 中只引用 set 的卡必须根据前景记录展开；每条最终 TIDAS 交换必须解析到唯一适用 group 和精确 UUID。 |  |
| `validation_soil_emissions` | 管理土壤输出 | 核算氮投入和残余物去向与直接、间接 N2O 路径，并披露所选方法和因子。 | `ipcc-2019-managed-soils` |
| `validation_no_double_count` | 上游和前景清单 | 不得在上游数据集和前景负荷中重复计算灌溉取水、燃料燃烧、肥料生产或土壤排放。 | `ilcd-handbook-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 马铃薯种植与农场门准备前景数据集 |
| downstream_use | `secondary_dataset`；仅经审核和发布后可作为 `background_dataset` |
| allowed_use | 新鲜未加工马铃薯的农场门 LCA，以及保持声明地理范围、作物周期、路线、等级、水分基准、分配和身份解析的下游系统 |
| excluded_use | 种薯繁育、甘薯或其他根茎作物、农场门后清洗或储存、加工、零售或消费阶段，除非有经审核扩展 |
| required_metadata | 地理范围；品种；作物年份和周期；用途；生产系统；灌溉条件；收获面积；产量；水分基准；等级；残余物和废物去向；分配；流身份解析 |
| required_quality_disclosure | 前景覆盖；代理时期；缺失记录；仪表和质量平衡核算；养分基准；排放方法和因子；全部 set-only 展开 |
| update_trigger | 新的已审核马铃薯证据、重大路线或边界变化、土壤排放方法修订、Flow Set taxonomy 变化、Tiangong 身份变化或数据超出已接受 QA 控制 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-root-tuber-concepts-2003` | official_guidance | FAO, Root and Tuber Crops: Concepts and Methods Recommended by FAO and Operational Issues, https://www.fao.org/4/Y9422E/y9422e0d.htm | 马铃薯身份；收获面积、产量和单产概念；参考流边界 |
| `fao-save-and-grow-2011` | official_guidance | FAO, Save and Grow: A policymaker's guide to the sustainable intensification of smallholder crop production, https://www.fao.org/4/i2215e/i2215e.pdf | 种子、土壤管理、养分、水、植保和能源相关田间活动覆盖 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接和间接 N2O、作物残余物氮、尿素、石灰施用、挥发和淋溶路径 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级和披露 |
| `ilcd-handbook-2010` | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, EUR 24708 EN, DOI 10.2788/38479, https://publications.jrc.ec.europa.eu/repository/handle/JRC48157 | 系统边界、过程细分、一致性、数据质量和防止重复计算 |
| `mass-balance-identity` | method_factor | 应用于匹配马铃薯收获和分选记录的质量守恒 | 收获产出平衡计算和校验 |
