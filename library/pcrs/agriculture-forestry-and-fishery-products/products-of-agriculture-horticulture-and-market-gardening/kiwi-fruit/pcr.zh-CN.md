---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.kiwi-fruit
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 包装场发运前鲜猕猴桃

## 1. 范围和适用性

本候选 PCR 覆盖在管理型果园生产、采收、初级处理、分级以及声明的冷藏期之后，于包装场发运的鲜猕猴桃。
覆盖绿心、黄心及其他商业品种的整果鲜猕猴桃。

不包括加工猕猴桃产品、声明发运点之后的零售处理以及无关的果园服务。品种、地区、果园系统、成熟度和市场等级
仍然是前景数据输入。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.kiwi-fruit |
| classification_refs | CPC 3.0 01352 (Kiwi fruit); mapping relation: exact |
| covered_products | 包装场发运前的鲜整果猕猴桃 |
| excluded_products | 加工水果、果汁、果泥、零售食品处理 |
| representative_product | 包装场发运的市场等级鲜猕猴桃 |
| production_route | 管理型果园生产 → 采收/采集 → 初级处理和分级 → 可选冷藏 → 包装场发运 |
| market_state | 成熟、市场等级鲜果；声明品种和等级 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 包装场发运的鲜整果猕猴桃 |
| How much | 1 kg |
| How well | 品种、成熟度或干物质标准、等级和声明发运状态 |
| How long or cycle | 一个果园生产周期及声明的采后储存期 |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Kiwi fruit |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 品种；成熟度或干物质；市场等级；发运状态 |

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 测量和单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass (UUID 待解析) | kg | 将声明的产品输出归一化到包装场发运点的 1 kg。 |
| storage_duration | cold-storage process | time | days | 记录实际储存时间，并在使用时识别普通空气或气调储存。 |
| maturity_measure | harvest output | soluble solids or dry matter | % or declared site unit | 记录用于确定采收成熟度的标准并保留其来源方法。 |

## 5. 系统边界

前景边界从声明的果园生产投入开始，到市场等级整果从包装场发运结束。果园建设和耐久基础设施只有在数据提供者
报告其分配期间和基准时纳入。零售配送和消费者催熟不纳入。

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | 管理型果园生产投入和已建立的作物系统 |
| starting_condition_role | 已披露的前景起始条件 |
| product_classification_scope | 包装场发运前的鲜整果猕猴桃 |
| recursive_input_rule | 同类别猕猴桃投入保持显式记录并披露来源批次；不得递归到另一份猕猴桃 PCR |
| upstream_dataset_requirement | 披露购买的种植材料、土壤改良剂、灌溉、植保投入、能源和包装投入及其来源数据集身份 |
| disclosure | 果园地点和系统、品种、成熟度标准、采收日期、包装场交接、等级和储存路线 |

### 规范边界规则（`boundary_start_and_handoff`）

数据提供者必须识别果园生产起始条件、独立采收交接、初级处理/分级交接以及声明的包装场发运点。任何偏离都必须披露。

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| orchard_production | 管理型果园生产 | required | 使用果园路线 | activity | 每 1 kg 发运水果 |
| harvest_capture | 采收和田间处理 | required | 水果离开果园并交接 | activity | 每 1 kg 采收水果 |
| primary_conditioning | 初级处理和分级 | required | 发运前进行处理、分级或分选 | activity | 每 1 kg 处理水果 |
| cold_storage | 冷藏和稳定化 | conditional | 发运前储存水果 | activity | 每 1 kg 发运水果及每储存日 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：管理型果园生产（`orchard_production`）

#### 输入

##### 产品流

###### 猕猴桃种植材料（`planting_material_input`）

按果园地块和建园年份记录购买或种植数量。包括实际采用的苗木、嫁接材料或补植株；具体材料身份确认前保留 UUID 未解析。

- 选定流：实际使用的猕猴桃种植材料
- 流属性/单位：数量或质量 / 株或 kg
- 数量规则：按果园地块和建园年份记录购买或种植数量。包括实际采用的苗木、嫁接材料或补植株；具体材料身份确认前保留 UUID 未解析。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：

###### 尿素肥料（`orchard_production_agricultural_nutrient_inputs_urea`）

**orchard_production_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

每种实际产品数量只采集一次，保留产品身份、配方、组成、施用事件及分配依据；计算声明的 N、P 或 P2O5、K 或 K2O 数量，避免复合肥和有机肥重复计入。前景数据生成时逐一展开实际产品交换并核验 UUID。

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`fao-fertilizer-identities`

###### 硫酸铵肥料（`orchard_production_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`fao-fertilizer-identities`

###### 重过磷酸钙肥料（`orchard_production_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`fao-fertilizer-identities`

###### 氯化钾肥料（`orchard_production_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`orchard_production_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`orchard_production_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`fao-organic-nutrients`

###### 灌溉供水（`irrigation_water_input`）

按果园地块和生产期间计量或计算实际输送的灌溉水；与环境取水分别记录。

- 选定流：灌溉供水
- 流属性/单位：体积 / m3
- 数量规则：按果园地块和生产期间计量或计算实际输送的灌溉水；与环境取水分别记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：

###### 果园作业供电（`orchard_electricity_input`）

计量或依据账单记录电量，并分配给所代表的果园产出。

- 选定流：果园供电
- 流属性/单位：能量 / kWh
- 数量规则：计量或依据账单记录电量，并分配给所代表的果园产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：

###### 果园移动机械燃料（`orchard_mobile_fuel_input`）

按作业和果园地块测量、依据账单或计算燃料用量；记录实际燃料种类。

- 选定流：果园移动机械实际使用的燃料
- 流属性/单位：燃料数量或能量 / L、kg 或 MJ
- 数量规则：按作业和果园地块测量、依据账单或计算燃料用量；记录实际燃料种类。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_input_records`
- 来源：

###### 植保制剂投入（`crop_protection_input`）

按具体产品和施用事件测量制剂质量；每种除草剂、杀虫剂、杀菌剂或其他制剂分别记录交换，未确认 UUID 保持未解析。

- 选定流：实际使用的植保制剂
- 流属性/单位：制剂或有效成分质量 / kg
- 数量规则：按具体产品和施用事件测量制剂质量；每种除草剂、杀虫剂、杀菌剂或其他制剂分别记录交换，未确认 UUID 保持未解析。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：

#### 输出

##### 产品流

###### 果园水果产出（`orchard_fruit_output`）

核对所代表果园水果的采收质量及质量平衡。

- 选定流：Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
- 数量规则：核对所代表果园水果的采收质量及质量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_output_records`
- 来源：

##### 废物流

###### 果园残余物及损失（`orchard_residues`）

测量实际残余物及损失数量，记录其湿基或干基及去向。

- 选定流：实际果园残余物或损失物流
- 流属性/单位：质量 / kg 湿物料或干物料
- 数量规则：测量实际残余物及损失数量，记录其湿基或干基及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_output_records`
- 来源：

### 过程：采收和田间处理（`harvest_capture`）

#### 输入

##### 产品流

###### 采收接收的果园水果（`harvest_input`）

记录采收批次接收的果园水果产出质量。

- 选定流：Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
- 数量规则：记录采收批次接收的果园水果产出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：

#### 输出

##### 产品流

###### 交给包装场的采收水果（`harvested_fruit`）

称量交给包装场接收的采收水果质量。

- 选定流：Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
- 数量规则：称量交给包装场接收的采收水果质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：

##### 废物流

###### 采收损失（`harvest_losses`）

测量采收损失质量。

- 选定流：实际猕猴桃采收损失物流
- 流属性/单位：质量 / kg
- 数量规则：测量采收损失质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：

### 过程：初级处理和分级（`primary_conditioning`）

#### 输入

##### 产品流

###### 初级处理用水（`conditioning_water_input`）

计量或按批次计算输送的处理用水。

- 选定流：猕猴桃初级处理用水
- 流属性/单位：体积 / m3
- 数量规则：计量或按批次计算输送的处理用水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 初级处理供电（`conditioning_electricity_input`）

计量电量，或按批次、班次、处理量或运行时间分配。

- 选定流：猕猴桃初级处理供电
- 流属性/单位：能量 / kWh
- 数量规则：计量电量，或按批次、班次、处理量或运行时间分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 发运前软包装（`flexible_packaging_input`）

依据供应商规格及实际领用量记录发运批次的软包装用量。

- 选定流：猕猴桃软包装
- 流属性/单位：质量或数量 / kg 或件
- 数量规则：依据供应商规格及实际领用量记录发运批次的软包装用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 发运前纸箱或箱体包装（`carton_box_packaging_input`）

依据供应商规格及实际领用量记录发运批次的箱体包装用量。

- 选定流：猕猴桃纸箱或箱体包装
- 流属性/单位：质量或数量 / kg 或件
- 数量规则：依据供应商规格及实际领用量记录发运批次的箱体包装用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 发运前托盘或周转箱（`pallet_crate_packaging_input`）

依据供应商或资产记录分配该批次的托盘或周转箱使用量。

- 选定流：猕猴桃托盘或周转箱包装
- 流属性/单位：质量或数量 / kg 或件
- 数量规则：依据供应商或资产记录分配该批次的托盘或周转箱使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 进入初级处理的水果（`conditioning_input`）

称量初级处理接收的水果质量。

- 选定流：Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
- 数量规则：称量初级处理接收的水果质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

#### 输出

##### 产品流

###### 市场等级猕猴桃（`graded_fruit`）

称量验收合格的市场等级水果产出。

- 选定流：Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
原始产出计量与核对要求：称量验收合格的市场等级水果产出。

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

##### 废物流

###### 剔除及降级水果（`culls_and_downgrades`）

称量剔除及降级水果质量并记录去向。

- 选定流：实际降级猕猴桃或剔除物流
- 流属性/单位：质量 / kg
- 数量规则：称量剔除及降级水果质量并记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

### 过程：冷藏和稳定化（`cold_storage`）

#### 输入

##### 产品流

###### 冷藏供电（`storage_electricity_input`）

计量电量或依据储存批次及持续时间分配。

- 选定流：猕猴桃冷藏供电
- 流属性/单位：能量 / kWh
- 数量规则：计量电量或依据储存批次及持续时间分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：储存时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 来源：

###### 进入储存的处理后水果（`storage_input`）

称量进入储存的水果质量。

- 选定流：Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
- 数量规则：称量进入储存的水果质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：储存时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 来源：

#### 输出

##### 产品流

###### 储存后发运的水果（`storage_output`）

称量储存后发运的水果质量。

- 选定流：Kiwi fruit `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
原始产出计量与核对要求：称量储存后发运的水果质量。

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每声明的参考流
- 基准类型：储存时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 来源：

##### 废物流

###### 储存损失（`storage_losses`）

测量储存损失质量。

- 选定流：实际猕猴桃储存损失物流
- 流属性/单位：质量 / kg
- 数量规则：测量储存损失质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：储存时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 来源：


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：Kiwi fruit
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：Kiwi fruit
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配和联产品处理

### 规范分配规则（`output_set_and_allocation`）

PCR 必须列出市场等级水果、次品、降级水果、残余物和废弃物。当前产品研究必须为联产品选择并说明一种分配或处理方法；
任何输出不得在多个交接点重复计算。

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算和质量规则

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


采集果园面积和生产期、品种、种植及管理投入、灌溉和能源、采收日期和成熟度标准、采收量和分级量、次品、储存模式和时间、包装投入及所有输出去向。
每个数据来源使用独立采集协议，并保留覆盖范围、时间代表性、测量方法和不确定性说明。

所有采集量归一化到 1 kg 发运市场等级猕猴桃。保持果园、采收、处理、储存、次品和损失之间的质量平衡，不得从其他水果 PCR 推断当前果园数量。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_orchard_input_records | orchard_production | 种植和投入 | 采购及田间施用记录 | 投入品、数量、养分或有效成分、日期、地块、面积 | 发票、标签、施用日志；原始汇总与分配：按投入品汇总并归一化到发运质量 | kg、L、kWh、件 | 每次事件 | 完整生产年度 | 果园地块 | 每声明的参考流 | 发票、标签、田间日志 |
| cp_orchard_output_records | orchard_production | 果园产出和残余物 | 采收及去向记录 | 总果量、合格果、次品、残余物、去向、日期、地块 | 校准秤、采收票据、残余物日志；原始汇总与分配：核对全部产出并归一化到发运质量 | kg | 每次采收 | 完整采收年度 | 果园地块 | 每声明的参考流 | 秤校准、票据、去向记录 |
| cp_harvest_records | harvest_capture | 采收果实和损失 | 采收作业记录 | 日期、地块、品种、成熟度、数量、劳务或燃料、损失 | 采收日志、票据、设备或燃料记录；原始汇总与分配：按地块汇总并与果园产出核对 | kg、L、h | 每次作业 | 采收季 | 果园及采收作业 | 每声明的参考流 | 日期日志、票据、计量或发票 |
| cp_conditioning_records | primary_conditioning | 处理、分级、次品和废弃果 | 包装场入场及分级记录 | 入场量、等级、次品、废弃物、水、能源、包装、日期、批次 | 包装场系统、秤、计量表、包装领用记录；原始汇总与分配：核对入场量、等级、次品和废弃物 | kg、m3、kWh、件 | 每批次或班次 | 处理期间 | 包装场生产线 | 每声明的参考流 | 批次记录、秤和计量检查 |
| cp_storage_records | cold_storage | 入库、发运和储存损失 | 冷库及发运记录 | 批次、起止时间、模式、温度、入库、发运、失重、拒收 | 冷库日志、库存系统、发运票据；原始汇总与分配：核对入库量、发运量和损失 | kg、days、kWh | 每批次及每日 | 声明的储存期间 | 冷库及发运交接点 | 每声明的参考流 | 温度记录、库存记录、发运票据 |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

## 9. 验证规则

### 规范验证规则（`kiwifruit_route_completeness`）

只有在果园生产、采收交接、初级处理/分级和声明的发运点均存在，且目标输出、次品、残余物和损失已区分，品种及成熟度或干物质依据已披露，并在发生储存时记录储存时间和模式，数据集才有效。

## 10. 发布数据集属性

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 鲜猕猴桃前景生产及关联 process 或 lifecycle model 构建 |
| allowed_use | 品种、成熟度/等级、路线和包装场发运边界匹配的鲜整果猕猴桃 |
| excluded_use | 加工猕猴桃产品、零售处理或不同产品终点 |
| required_metadata | 果园系统、品种、成熟度标准、采收日期、等级、储存模式/时间、输出去向 |
| required_quality_disclosure | 场址和期间覆盖、测量方法、完整性和来源批次身份 |
| update_trigger | 果园路线、处理技术、储存实践、产品终点或证据基础发生重大变化 |

## 11. 数据来源

| source_id | Source | Supports |
| --- | --- | --- |
| usda-ams-kiwifruit-grade-standards | USDA Agricultural Marketing Service, Kiwifruit Grades and Standards, https://www.ams.gov/grades-standards/kiwifruit-grades-and-standards | 成熟度、清洁度、缺陷、等级和包装质量维度 |
| uc-davis-kiwifruit-postharvest | UC Davis Postharvest Research and Extension Center, Kiwifruit Produce Facts, https://postharvest.ucdavis.edu/produce-facts-sheets/kiwifruit | 采收成熟度指标、冷藏条件、催熟和质量风险 |
| nzkgi-kiwifruit-book-2024 | New Zealand Kiwifruit Growers Incorporated, The Kiwifruit Book 2024, https://www.nzkgi.org.nz/resource/kiwifruit-book-2024/ | 果园管理、采收、包装场分级、包装和储存路线 |
| fao-kiwifruit-postharvest | FAO, Small-Scale Postharvest Handling Practices, https://www.fao.org/4/ae075e/ae075e21.htm | 呼吸跃变特性、处理、催熟和采后损失控制 |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
