---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fruits-n-e-c
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 其他水果，未另列

## 1. 范围与适用性

本 PCR 适用于未被更具体水果类别覆盖、并在声明的农场门或第一声明交接点以完整新鲜水果报告的栽培水果。
该规则保持作物中立：数据包必须声明实际水果物种或植物学组、品种或品种组、生产系统和市场状态。路线可为
露地、果园、藤本、灌木、保护地或其他有场址记录支持的受管理园艺系统。

默认前景边界从受管理生产场址及可归属的建植阶段开始，经过收获、可选初级处理、分级或目的地分选、可选的门
前预冷或短期储存，以及可选包装，至声明的交接点。零售、消费者使用、下游配送、果汁/果浆/干果/蜜饯或其他
配料加工、野外采集、苗圃生产和无关基础设施均排除，除非另行声明为研究范围。具体路线可以省略条件过程，
但必须记录省略情况和实际交接状态。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fruits-n-e-c |
| classification_refs | CPC 3.0 / 01359 |
| covered_products | 未被更具体水果 PCR 覆盖的栽培完整新鲜水果；必须声明实际物种或植物学组。 |
| excluded_products | 野外采集水果；苗圃或种植材料；加工成果汁、果浆、果泥、干果、保存品、发酵品或其他转化产品的水果；零售和消费者阶段。 |
| representative_product | 声明物种或植物学组在声明农场门或第一交接点的可销售完整新鲜水果。 |
| production_route | 受管理的一年生或多年生园艺生产；收获；可选初级处理；分级或目的地分选；可选冷却/储存；可选包装；声明的门交接。 |
| market_state | 完整新鲜水果；在相关时声明成熟度、等级、含水率或干物质基准及目的地状态。 |

CPC 叶是分类参考，不是产品身份替代物。若数据包合并不同物种或路线，必须披露混合并采用有记录的产品量或
质量聚合方法，不得从其他水果无提示地转用物种特定因子。

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明门的声明物种或植物学组的可销售完整新鲜水果。 |
| How much | 1 kg 净可销售水果。 |
| How well | 水果物种或植物学组；品种或品种组；成熟度；等级或目的地；相关时的含水率或干物质基准；完整、新鲜、未加工状态。 |
| How long or cycle | 一个完整的一年生作物周期，或多年生作物的一个声明生产阶段；在适用时包括分摊的建植阶段及该门输出包含的全部收获批次。 |
| reference_flow_link | 一个声明的可销售新鲜水果产品流；本草稿中身份有意保持未解析。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 声明物种或植物学组的可销售完整新鲜水果 [unmapped；UUID intentionally blank] |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200c9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | 物种或植物学组；品种或品种组；一年生或多年生路线；生产系统；场址和地理位置；作物年度或报告期；建植阶段处理；收获成熟度；净可销售质量；等级和目的地状态；田间、处理、储存和包装范围；拒收物、残余物、返工物和回收物去向；灌溉和能源；肥料产品及养分基准；分配基准；门和交接。 |
| Binding | 产品身份保持未映射；质量流属性和质量单位组固定采用保存的平台索引。 |

构建前景数据包时，`Required qualifiers` 中每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效
数据包字段中声明。缺少限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_01` | 产品、共产品和废物质量 | Mass | kg | 按声明过程状态记录净质量，协调收获、处理、分级、可销售、降级、拒收、回收、残余和记录损失，不混用皮重或含水率基准。 |
| `measurement_02` | 肥料和土壤改良剂投入 | Product mass and nutrient basis | kg product; kg N; kg P2O5; kg K2O | 只记录实际使用的产品。将配方或改良剂质量与声明的养分质量分开，并保留换算所用标签、计划或实验室依据。 |
| `measurement_03` | 灌溉、取水和处理用水 | Volume or mass | m3 or kg | 分开记录供给灌溉水、源头取水、处理/清洗水、循环水、排放水和截留固体；记录计量读数及换算。 |
| `measurement_04` | 燃料、电力、冷却和包装 | Activity-specific property | L, kg, MJ, kWh, item or kg | 保留原始活动单位以及载体或材料身份。仅在有记录因子时换算，并且共享设备、储存或包装只能分配一次。 |
| `measurement_05` | 面积、时间和多年生建植 | Area-time or duration | ha·year, ha·crop cycle, day or h | 声明作物阶段，并使用面积-时间或持续时间将建植、多年生种植、共享结构和储存负荷分配给所代表输出。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 受管理的栽培水果场址及声明的作物周期或多年生生产阶段；在适用时包括可归属的建植投入。 |
| starting_condition_role | 前景受管理生物生产开始点，位于水果作物接受场址特定管理投入之前。 |
| product_classification_scope | Other fruits, n.e.c. 语义类别中的栽培完整新鲜水果；CPC 3.0 / 01359 仅为映射参考。 |
| recursive_input_rule | 在声明的购买种植投入、肥料或改良剂、作物保护产品、公用事业、包装材料或处理服务处停止同类递归；链接适用上游数据集，不扩展同一类别。 |
| upstream_dataset_requirement | 为跨越声明边界的购买投入、能源和供水、包装、废物或废水处理以及外包服务提供适用背景数据集。 |
| disclosure | 声明物种或植物学组、品种或品种组、一年生或多年生阶段、生产系统、场址、期间、门、所用路线节点、输出等级和目的地、所有实际投入、水和能源、储存和包装、损失和残余、分配、聚合以及未解析身份。 |

### 边界规则

| rule_id | 适用对象 | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | 前景起点 | 从受管理栽培水果场址和声明的作物周期或多年生生产阶段开始；当所代表阶段依赖建植时纳入可归属建植投入。 | `fao-good-farming-practices`; `iso-14044-2006` |
| `boundary_02` | 生产和收获 | 纳入场址准备和管理、实际种植材料、肥料或改良剂、作物保护、灌溉、土地占用、田间能源、收获和至第一声明采后节点的交接。 | `fao-fruit-vegetable-production-practices-2024`; `fao-quality-safety-fresh-fruits-2004` |
| `boundary_03` | 采后路线 | 仅在声明门前发生时纳入初级清洁/清洗、干燥、分级、分选、冷却、短期储存和包装；除非另行声明，将配送和物流留在外部。 | `fao-postharvest-handling-fruits`; `fao-packinghouse-operations-1986` |
| `boundary_04` | 递归投入和服务 | 将购买材料、公用事业、包装和处理服务作为上游投入。不得递归到另一水果 PCR，也不得在身份未解析时虚构产品身份。 | `iso-14044-2006` |
| `boundary_05` | 损失、残余和拒收 | 在有记录的回收、共产品、处理或处置交接前，将田间损失、次果、降级水果、拒收物、清洗固体、包装废物和残余保留在前景中。 | `fao-postharvest-handling-fruits`; `mass-balance-identity` |

受管理生物生产节点与收获、处理相互独立：生产形成作物和预期水果状态，收获移除并交接采集状态，处理或分级
改变采后状态。必须区分一年生与多年生作物。多年生作物的建植、生产阶段、替换、终止以及共享资产或结构的
分配按期间建立索引，不得无说明地归给单次收获。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fruit_site_establishment_and_crop_cycle` | 水果场址建植和作物周期管理 | required | 所有栽培路线 | 前景生物生产 | per 1 kg marketable gate output |
| `fruit_harvest_and_field_handoff` | 水果收获和田间交接 | required | 水果从受管理场址移除并转入下一节点或门 | 收获和采集输出交接 | per 1 kg harvested fruit and per 1 kg marketable gate output |
| `fruit_primary_conditioning` | 水果初级处理 | conditional | 门前发生清洁、清洗、刷洗、干燥、卫生处理或其他原料到备料状态的处理 | 第一采后准备 | per 1 kg conditioned fruit |
| `fruit_grading_and_destination_sorting` | 水果分级和目的地分选 | conditional | 门前将来料分成两个或更多声明的质量或目的地状态 | 质量和目的地分离 | per 1 kg graded fruit |
| `fruit_cold_storage_and_stabilization` | 水果冷藏和稳定化 | conditional | 门前发生预冷、制冷、受控储存或其他稳定化处理 | 保鲜和储存 | per 1 kg stored fruit and storage day |
| `fruit_packaging_and_gate_handoff` | 水果包装和门交接 | conditional | 门前在边界内完成包装或展示 | 受保护产品交接 | per 1 kg packed gate output |
| `fruit_reject_rework_and_residue_routing` | 水果拒收、返工和残余 routing | conditional | 拒收、降级、回收或残余材料在离开边界前获得声明路线 | 不合格品和残余路线 | per 1 kg marketable gate output |

生产模式为季节性和活动批次模式。每个一年生作物周期、多年生阶段、收获活动、处理批次、储存批次和包装运行
均应建立索引。连续运行的包装场仍必须将共享公用事业和换线事件链接到水果活动或批次，不得没有记录的归属
依据就把完整连续运行负荷分给一个水果输出。
均应建立索引。连续运行的包装场仍必须将共享公用事业和换线事件链接到水果活动或批次，不得没有记录的归属
依据就把完整连续运行负荷分给一个水果输出。

### 过程：水果场址建植和作物周期管理（`fruit_site_establishment_and_crop_cycle`）

#### 输入

##### 产品流

###### 声明路线使用的种植材料（`planting_material_input`）
按地块和建植事件记录实际种子、幼苗、嫁接苗、藤本、灌木、树木或替换材料。

- 选定流：实际水果作物种植材料 [unmapped]
- 流属性 / 单位：数量或质量 / plant, seed, item or kg
- 数量规则：按地块、品种组和事件记录购买、繁育或栽植数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`

###### 农业养分与肥料投入（`fruit_site_establishment_and_crop_cycle_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-fruit-vegetable-production-practices-2024`

###### 供给作物的灌溉水（`irrigation_water_input`）
将供给灌溉水与自然资源取水分开，并记录水源、地块和回流水。

- 选定流：灌溉水供应 [parameterized]
- 流属性 / 单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`irrigation-water`
- 数量规则：按地块、水源和作物期间记录计量或计算的供给量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-good-farming-practices`

###### 场址运行用电（`site_electricity_input`）
记录水泵、保护地、风机、控制设备和其他纳入范围的场址用电，并对共享电表只分配一次。

- 选定流：水果生产用电供应 [parameterized]
- 流属性 / 单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`electricity-supply`
- 数量规则：将电表或发票数量分配给所代表作物阶段和输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`fao-good-farming-practices`

###### 田间和移动机械用燃料（`site_mobile_fuel_input`）
记录拖拉机、喷雾机、割草机、水泵和其他移动机械，不得再次计入承包服务。

- 选定流：移动机械燃料 [parameterized]
- 流属性 / 单位：燃料或能量 / L, kg or MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`mobile-machinery-fuel`
- 数量规则：按作业和地块使用燃料收据、油箱记录、机时计算或承包商活动记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`fao-good-farming-practices`

###### 实际使用的作物保护制剂（`crop_protection_input`）
按产品、活性物质、施用事件和地块记录实际使用的除草剂、杀虫剂、杀菌剂或生物防治产品。

- 选定流：实际作物保护制剂 [unmapped]
- 流属性 / 单位：质量或体积 / kg formulation, kg active substance or L
- 数量规则：按产品、事件和地块核对采购与施用记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-fruit-vegetable-production-practices-2024`; `fao-quality-safety-fresh-fruits-2004`

##### 基本流

###### 栽培土地占用（`land_occupation`）
记录生产面积和占用时间；土地转化不从土地占用推断。

- 选定流：土地占用
- 流属性 / 单位：面积-时间 / ha·year or ha·crop cycle
- 数量规则：生产面积乘适用作物阶段持续时间，再分配到可销售输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_site_cycle_records`
- 来源：`fao-good-farming-practices`

###### 自然资源取水（`water_resource_withdrawal`）
记录源头取水、回流和消耗基准，并与供给灌溉水分开。

- 选定流：水资源取用
- 流属性 / 单位：体积或质量 / m3 or kg
- 数量规则：将水源计量或许可记录与供水、回流或声明消耗基准协调
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-good-farming-practices`; `mass-balance-identity`

#### 输出

##### 产品流

###### 可供收获的生长水果（`grown_fruit_output`）
记录收获前的预期水果状态；只有在下游损失和去向协调后才成为参考输出。

- 选定流：声明物种或植物学组的完整新鲜水果 [unmapped]
- 流属性 / 单位：质量 / kg
- 数量规则：将作物周期产量与收获和损失记录协调
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_site_cycle_records`
- 来源：`mass-balance-identity`

##### 废物流

###### 田间残余和未收获水果（`field_residue_output`）
按实际去向区分还田残余、回收物、预期共产品和废物。

- 选定流：田间残余或未收获水果 [unmapped]
- 流属性 / 单位：质量 / kg wet or dry material
- 数量规则：按地块、阶段和目的地测量、抽样或记录数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_cycle_records`
- 来源：`mass-balance-identity`

##### 基本流

###### 受管理土壤的氧化亚氮（`soil_nitrous_oxide_emission`）
仅在养分基准、残余去向、接收介质和一种选定方法声明后记录 N2O。

- 选定流：排向空气的氧化亚氮；报告物质和接收介质待声明
- 流属性 / 单位：质量 / kg N2O
- 数量规则：对养分投入、残余物和间接路径应用一种选定的 IPCC 兼容方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_and_field_emission_records`
- 来源：`ipcc-2019-refinement-afolu`

###### 受管理养分产生的氨（`soil_ammonia_emission`）
仅当方法或测量支持接收介质时记录 NH3。

- 选定流：排向空气的氨；报告物质和接收介质待声明
- 流属性 / 单位：质量 / kg NH3
- 数量规则：使用记录的养分投入及选定方法或排放测量记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_and_field_emission_records`
- 来源：`ipcc-2019-refinement-afolu`

###### 田间活动产生的氮氧化物（`nitrogen_oxides_emission`）
氮氧化物与 N2O 分开记录，并声明报告物质和接收介质。

- 选定流：排向空气的氮氧化物；报告物质和接收介质待声明
- 流属性 / 单位：质量 / kg NOx or reported species
- 数量规则：依据声明的燃料和养分活动使用测量值或选定方法结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_and_field_emission_records`
- 来源：`ipcc-2019-refinement-afolu`

###### 硝酸盐或磷酸盐释放路径（`nutrient_release_pathway`）
只有在接收区室和路径有证据时记录；实际硝酸盐或磷酸盐分组在前景生成时选择。

- 选定流：一种已识别的硝酸盐或磷酸盐物种进入一个有证据的接收区室；两者均发生时分别生成前景交换
- 流属性 / 单位：质量 / kg 排放物质；kg N 或 kg P 单独保留为计算基准
- 数量规则：依据养分投入和接收介质，计算或测量径流、排水或土壤路径
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_and_field_emission_records`
- 来源：`fao-good-farming-practices`; `mass-balance-identity`

### 过程：水果收获和田间交接（`fruit_harvest_and_field_handoff`）

收获独立于生产，因为它将作物移出受管理生产并形成交给处理、储存或门的原始水果状态。

#### 输入

##### 产品流

###### 收获活动可用的水果（`harvest_fruit_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：声明物种或植物学组的完整新鲜水果 [unmapped]
- 流属性 / 单位：质量 / kg
- 数量规则：记录进入各收获活动的作物周期产量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg harvested fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lot_records`

###### 收获燃料或机械能（`harvest_mobile_fuel_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：移动收获机械燃料 [parameterized]
- 流属性 / 单位：燃料或能量 / L, kg or MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`mobile-machinery-fuel`
- 数量规则：按活动和批次记录收获燃料或承包活动
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg harvested fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`fao-good-farming-practices`

#### 输出

##### 产品流

###### 交接的收获原始水果（`harvested_fruit_output`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：声明物种或植物学组的完整新鲜水果 [unmapped]
- 流属性 / 单位：质量 / kg
- 数量规则：按批次称量声明交接点的收获水果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg harvested fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lot_records`

##### 废物流

###### 收获损失和偶然材料（`harvest_losses`）
区分掉落、损伤或不能收获的水果与有意收集到其他去向的材料。

- 选定流：收获损失或偶然水果流 [unmapped]
- 流属性 / 单位：质量 / kg wet fruit or material
- 数量规则：按批次和去向称量、抽样或记录收获损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg harvested fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lot_records`
- 来源：`mass-balance-identity`

### 过程：水果初级处理（`fruit_primary_conditioning`）

该条件过程覆盖门前的清洁、清洗、刷洗、干燥、卫生处理或其他原料到备料状态的改变。

#### 输入

##### 产品流

###### 接收的收获原始水果（`conditioning_fruit_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：收获的完整新鲜水果 [unmapped]
- 流属性 / 单位：质量 / kg
- 数量规则：称量进入处理批次或生产线的来料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg conditioned fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`

###### 处理用水（`conditioning_water_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：工艺或清洗水 [parameterized]
- 流属性 / 单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`process-water`
- 数量规则：按批次或生产线计量，并分配到水果批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg conditioned fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-postharvest-handling-fruits`; `fao-quality-safety-fresh-fruits-2004`

###### 处理用电（`conditioning_electricity_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：处理用电供应 [parameterized]
- 流属性 / 单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`electricity-supply`
- 数量规则：按批次、班次或吞吐量分配电表、发票或设备用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg conditioned fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-postharvest-handling-fruits`

###### 实际使用的处理剂（`conditioning_agent_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：实际处理剂 [unmapped]
- 流属性 / 单位：质量或体积 / kg or L
- 数量规则：按批次和批记录命名产品的领用或施用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg conditioned fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-quality-safety-fresh-fruits-2004`

#### 输出

##### 产品流

###### 交接的备料水果（`conditioned_fruit_output`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：备好的完整新鲜水果 [unmapped]
- 流属性 / 单位：质量 / kg
- 数量规则：按批次和批称量处理输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg conditioned fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`

##### 废物流

###### 处理拒收物和修整物（`conditioning_rejects`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：处理拒收或修整物流 [unmapped]
- 流属性 / 单位：质量 / kg wet fruit or material
- 数量规则：按批次、批次号和去向称量拒收和修整质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg conditioned fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-postharvest-handling-fruits`; `mass-balance-identity`

###### 清洗废水和清洗固体（`conditioning_wastewater`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：清洗废水和清洗固体 [unmapped]
- 流属性 / 单位：体积和质量 / m3 and kg
- 数量规则：将批次记录与供水、循环水、截留固体和排放协调
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg conditioned fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-quality-safety-fresh-fruits-2004`; `mass-balance-identity`

### 过程：水果分级和目的地分选（`fruit_grading_and_destination_sorting`）

分级将来料水果分类为声明的质量或目的地状态，每种状态都需要交接和质量协调。

#### 输入

##### 产品流

###### 接收的备料水果（`grading_fruit_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：备好的完整新鲜水果 [unmapped]
- 流属性 / 单位：质量 / kg
- 数量规则：按分级批次、批次号和来源交接称量来料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg graded fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_and_destination_records`

#### 输出

##### 产品流

###### 声明等级的可销售新鲜水果（`marketable_fresh_fruit_output`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：可销售完整新鲜水果 [unmapped]
- 流属性 / 单位：质量 / kg
- 数量规则：按等级和目的地称量分选后接收的输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg reference flow
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_and_destination_records`
- 来源：`fao-packinghouse-operations-1986`; `fao-postharvest-handling-fruits`

###### 具有声明用途的降级水果（`downgraded_fruit_coproduct`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：用于声明加工、饲料或其他用途的降级水果 [unmapped]
- 流属性 / 单位：质量 / kg wet fruit
- 数量规则：按批次、等级和接收方称量降级输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_and_destination_records`
- 来源：`fao-packinghouse-operations-1986`; `iso-14044-2006`

##### 废物流

###### 分级次果和拒收水果（`grading_culls_and_rejects`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：分级次果或拒收水果流 [unmapped]
- 流属性 / 单位：质量 / kg wet fruit
- 数量规则：按批次和去向称量拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg graded fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_and_destination_records`
- 来源：`fao-postharvest-handling-fruits`; `mass-balance-identity`

###### 分选移除的异物（`grading_foreign_matter`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：水果分选异物 [unmapped]
- 流属性 / 单位：质量 / kg
- 数量规则：按批次和去向测量或记录异物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg graded fruit
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_and_destination_records`
- 来源：`fao-packinghouse-operations-1986`; `mass-balance-identity`

### 过程：水果冷藏和稳定化（`fruit_cold_storage_and_stabilization`）

该条件过程适用于声明边界内的预冷、制冷或受控储存；门后的储存排除。

#### 输入

##### 产品流

###### 进入稳定化的分级水果（`storage_fruit_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：分级可销售新鲜水果 [unmapped]
- 流属性 / 单位：质量 / kg
- 数量规则：按批次称量进入冷藏的投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg stored fruit and storage day
- 基准类型：储存持续时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`

###### 冷藏用电（`storage_electricity_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：冷藏用电供应 [parameterized]
- 流属性 / 单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`electricity-supply`
- 数量规则：按储存批次和持续时间分配电表、发票或设备用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg stored fruit and storage day
- 基准类型：储存持续时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 来源：`fao-postharvest-handling-fruits`

###### 实际使用的稳定化材料（`stabilization_material_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：实际稳定化材料 [unmapped]
- 流属性 / 单位：质量或体积 / kg or L
- 数量规则：按批次和持续时间记录供应商、维护或储存作业记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg stored fruit and storage day
- 基准类型：储存持续时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`

#### 输出

##### 产品流

###### 发出的稳定化水果（`stabilized_fruit_output`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：稳定化的可销售新鲜水果 [unmapped]
- 流属性 / 单位：质量 / kg
- 数量规则：按声明稳定化期间后的发出量称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg dispatched gate output
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`

##### 废物流

###### 储存损失和拒收水果（`storage_losses`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：储存损失或拒收水果流 [unmapped]
- 流属性 / 单位：质量 / kg wet fruit
- 数量规则：按批次以期初库存加收货减发货并结合记录拒收量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg stored fruit
- 基准类型：储存持续时间（`storage_duration`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_records`
- 来源：`fao-postharvest-handling-fruits`; `mass-balance-identity`

### 过程：水果包装和门交接（`fruit_packaging_and_gate_handoff`）

该条件过程适用于门前对水果进行包裹、保护、贴标或展示；配送仍在本过程之外。

#### 输入

##### 产品流

###### 包装接收的水果（`packaging_fruit_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：可销售完整新鲜水果 [unmapped]
- 流属性 / 单位：质量 / kg
- 数量规则：称量进入包装的水果批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg packed gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 柔性包装、内衬或薄膜（`flexible_packaging_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：新鲜水果柔性包装 [parameterized]
- 流属性 / 单位：质量或包装服务 / kg or item
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`flexible-packaging`
- 数量规则：按批次记录发放质量或数量、容量、皮重、复用和损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg packed gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-postharvest-handling-fruits`

###### 纸箱、盒或纸板包装（`carton_box_packaging_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：新鲜水果纸箱和盒包装 [parameterized]
- 流属性 / 单位：质量或包装服务 / kg or item
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`carton-and-box-packaging`
- 数量规则：按批次保留供应商规格、发放量、皮重、容量和损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg packed gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-postharvest-handling-fruits`

###### 托盘、板条箱或可复用搬运包装（`pallet_crate_packaging_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：新鲜水果托盘和板条箱包装 [parameterized]
- 流属性 / 单位：质量或包装服务 / kg or item
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`pallet-and-crate-packaging`
- 数量规则：按容量、寿命、复用、返还路线和批次吞吐量分配资产记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg packed gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-postharvest-handling-fruits`; `iso-14044-2006`

###### 包装线用电（`packaging_electricity_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：包装线用电供应 [parameterized]
- 流属性 / 单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`electricity-supply`
- 数量规则：按包装批次分配电表、发票或运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg packed gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-packinghouse-operations-1986`

#### 输出

##### 产品流

###### 声明门的包装新鲜水果（`packed_fresh_fruit_output`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：包装或展示的完整新鲜水果 [unmapped]
- 流属性 / 单位：净水果质量 / kg
- 数量规则：称量声明门的净水果输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg reference flow
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

##### 废物流

###### 包装拒收物和材料废物（`packaging_waste`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：包装废物 [unmapped]
- 流属性 / 单位：质量 / kg packaging
- 数量规则：以发放包装减去使用或返还量，并与批次记录协调
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg packed gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-postharvest-handling-fruits`; `mass-balance-identity`

### 过程：水果拒收、返工和残余路线（`fruit_reject_rework_and_residue_routing`）

该条件过程使每个拒收状态明确对应返工、降级、回收、处理或处置；返工不得同时计为拒收和合格输出。

#### 输入

##### 产品流

###### 接收的拒收、降级或残余水果（`reject_rework_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：拒收、降级或残余水果 [unmapped]
- 流属性 / 单位：质量 / kg wet fruit or material
- 数量规则：按产生节点、批次、状态和去向称量投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_rework_residue_records`
- 来源：`mass-balance-identity`

###### 废物或废水处理服务（`waste_treatment_service_input`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：废物或废水处理服务 [parameterized]
- 流属性 / 单位：处理服务 / kg, m3 or service unit
- 绑定模式：`parameterized`
- Flow Set：`flow-set.waste-treatment-service`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`wastewater-treatment-service`
- 数量规则：按处理收据或服务记录分配残余或废水流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_rework_residue_records`
- 来源：`fao-quality-safety-fresh-fruits-2004`

#### 输出

##### 产品流

###### 返回上游的返工水果（`reworked_fruit_return`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：返回上游的返工水果 [unmapped]
- 流属性 / 单位：质量 / kg wet fruit
- 数量规则：按来源批次和接收过程称量返工返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_rework_residue_records`
- 来源：`mass-balance-identity`

###### 声明加工、饲料或其他水果共产品（`routed_fruit_coproduct`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：用于声明用途的水果共产品 [unmapped]
- 流属性 / 单位：质量 / kg wet fruit or material
- 数量规则：按目的地、接收方和批次称量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_rework_residue_records`
- 来源：`iso-14044-2006`; `mass-balance-identity`

###### 具有记录功能的回收有机材料（`recovered_organic_material`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：回收有机材料 [unmapped]
- 流属性 / 单位：质量 / kg wet or dry material
- 数量规则：记录含水率基准、目的地和用途后的称量回收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_rework_residue_records`
- 来源：`iso-14044-2006`; `mass-balance-identity`

##### 废物流

###### 离开边界的有机残余废物（`residual_organic_waste`）
将该流作为独立前景交换记录；保留实际数量、批次或过程状态，以及去向或交接证据。

- 选定流：有机残余废物 [unmapped]
- 流属性 / 单位：质量 / kg wet or dry material
- 数量规则：在产品、共产品、回收和返工路线明确后计算残余量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg marketable gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reject_rework_residue_records`
- 来源：`mass-balance-identity`; `fao-quality-safety-fresh-fruits-2004`

## 7. 分配与共产品处理

| rule_id | 适用对象 | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | 一年生和多年生阶段 | 按有记录的面积-时间、株年、作物周期、吞吐量或其他有依据的物理基础分配建植、多年生植株、结构和共享阶段，并披露期间索引。 | `iso-14044-2006`; `fao-good-farming-practices` |
| `allocation_02` | 共享农场、包装场和活动批次资源 | 使用实测活动量、运行时间、吞吐量或面积，将共享电表、机械、储存、处理线和换线负荷分配一次；保留批次关联。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_03` | 可销售水果和降级水果 | 将可销售新鲜水果作为参考输出。只有在功能、目的地、数量、状态和交接均有记录时，才将降级或回收水果视为共产品。 | `iso-14044-2006`; `fao-packinghouse-operations-1986` |
| `allocation_04` | 返工、退回和拒收物 | 让不合格材料持续承担负荷，直到其声明的返工、降级、回收、处理或处置交接；不得同时将返工作为拒收物和合格输出计算。 | `mass-balance-identity`; `iso-14044-2006` |
| `allocation_05` | 回收和替代 | 仅凭目的地标签不得宣称避免生产；必须有接收方、功能、可比产品、数量、质量、去向和分配方法。 | `iso-14044-2006` |

本 PCR 不要求所有路线采用同一种分配方法。数据集必须针对每个真实的多输出边界选择并论证一种方法，保持一致应用，并在影响重大时披露敏感性分析。在单一输出路线中，除非其预期功能有证据支持，次果和残余仍作为损失或废物处理。

## 8. 前景数据采集、计算与质量规则

首个数据集应由原始记录生成。一年生作物应关联其作物周期和收获活动批次；多年生作物应将建植、生产阶段、替换和终止事件关联到报告期。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site_cycle_records` | `fruit_site_establishment_and_crop_cycle` | 场址、面积、周期、阶段、产量和残余物 | 地块登记和田间日志 | site; block; species/group; cultivar; system; area; phase; dates; yield; residue; fate | 记录审查和周期核对 | ha; date; year; kg | monthly and cycle close | complete crop cycle or perennial phase | each block | aggregate by block and phase; allocate shared records once | signed logs, block map and yield record |
| `cp_establishment_records` | `fruit_site_establishment_and_crop_cycle` | 种植和建植 | 苗圃发票、种植日志和资产登记 | material; variety; quantity; date; block; replacement; asset; service life | 发票与登记核对 | item; kg; date; year | each event | establishment and allocated phases | block and asset | reconcile purchased, planted, replaced and surviving material | supplier record and planting log |
| `cp_nutrient_and_amendment_records` | `fruit_site_establishment_and_crop_cycle` | 肥料和改良剂 | 采购、标签、计划、施用日志和实验室结果 | product; quantity; moisture; N; P2O5; K2O; date; block; area | 文件审查和养分计算 | kg product; kg nutrient | each application | complete cycle or phase | each block | sum actual products and calculate nutrients once | invoice, label, plan or lab result |
| `cp_crop_protection_records` | `fruit_site_establishment_and_crop_cycle` | 作物保护 | 采购和施用记录 | product; formulation; active; quantity; date; block; area | 记录核对 | kg; L; date | each application | complete cycle or phase | each block | sum by named formulation and active substance | label, invoice and application log |
| `cp_irrigation_records` | `fruit_site_establishment_and_crop_cycle` | 灌溉和取水 | 水表、泵、许可和灌溉日志 | source; meter; block; method; delivered; withdrawn; return; date | 水表审查和水平衡计算 | m3; date | event or monthly | complete cycle or phase | source and block | reconcile withdrawal, delivery, return and consumption | calibrated meter and worksheet |
| `cp_energy_and_fuel_records` | `fruit_site_establishment_and_crop_cycle`, `fruit_harvest_and_field_handoff` | 场址和收获能源 | 公用事业账单、燃料收据、油箱日志或承包商记录 | carrier; equipment; operation; quantity; hours; date; block; campaign | 发票、计量和作业日志审查 | kWh; L; kg; MJ; h | monthly and campaign | complete cycle and harvest | site, block and equipment | allocate by use, hours, area or throughput; prevent duplicate inclusion | invoice, meter and allocation worksheet |
| `cp_nutrient_and_field_emission_records` | `fruit_site_establishment_and_crop_cycle` | 养分和基本流 | 养分计划、检测、排放计算表和因子记录 | N/P; residue; soil; climate; pathway; medium; factor; method; period | 方法计算和证据审查 | kg nutrient; kg substance | application and cycle close | complete cycle or phase | block and receiving compartment | apply one selected method and de-duplicate pathways | worksheet and factor reference |
| `cp_harvest_lot_records` | `fruit_harvest_and_field_handoff` | 收获输出和损失 | 收获票据、秤和批次记录 | lot; block; date; species/group; cultivar; maturity; harvested; loss; destination; hand-off | 称重核对和批次审查 | kg; date; lot | each lot | all harvests | block and harvest operation | reconcile output to harvested, lost and transferred amounts | calibrated scale and traceability record |
| `cp_conditioning_records` | `fruit_primary_conditioning` | 原料输入、备料输出、水、能源、制剂、拒收物和废水 | 批次表、计量、卫生和排放记录 | batch; lot; input; output; water; recirculation; agent; energy; reject; solids; discharge; date | 批次质量平衡和文件审查 | kg; m3; kWh; L | batch or shift | all included conditioning | line, site and lot | reconcile intake to output, rejects, solids, water and wastewater | batch sheet, scale, meter and discharge record |
| `cp_grading_and_destination_records` | `fruit_grading_and_destination_sorting` | 等级、可销售输出、共产品、次果和异物 | 分级表、秤和接收方记录 | input; grade; maturity; accepted; downgraded; cull; foreign matter; recipient; destination; date | 称重分级核对 | kg; date; lot | each lot or run | all included grading | line, site and lot | enumerate destinations and reconcile to input | scale, grade sheet and receipt |
| `cp_storage_records` | `fruit_cold_storage_and_stabilization` | 储存输入、输出、时长、能源、材料和损失 | 冷库日志、记录器、库存和发运记录 | lot; mode; temperature; start; end; input; output; loss; reject; energy; material | 记录器和库存核对 | kg; kWh; day; °C | each lot and day | declared storage period | cold room and gate | reconcile opening stock, receipts, dispatch and loss | logger, inventory and dispatch ticket |
| `cp_packaging_records` | `fruit_packaging_and_gate_handoff` | 产品、包装、能源和废物 | 包装规格、领用记录、资产登记和发运票据 | lot; format; material; tare; item; capacity; reuse; return; loss; energy; net fruit; date | 包装领用和净输出核对 | kg; item; kWh; date | lot, campaign or dispatch | all included packaging | line, site and lot | allocate reusable assets over service life and reconcile used, returned and waste | package specification and issue record |
| `cp_reject_rework_residue_records` | `fruit_reject_rework_and_residue_routing` | 拒收、降级、回收、返工和残余材料 | 拒收日志、返工票据、接收方、处理和处置记录 | source; lot; state; wet/dry mass; moisture; destination; recipient; function; treatment; date; return link | 称重和目的地审查并进行图关系核对 | kg; m3; date | each event and period close | all included routing | source node, site and recipient | one declared route per source stream; prevent double counting | scale, ticket, receipt or treatment record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | all inventory rows | `normalized amount = amount × 1,000 kg / net marketable gate output`; 保留原始过程输出或储存时长基准。 | raw amount; net marketable gate output; basis | normalized amount | `mass-balance-identity` |
| `calc_02` | fertilizer and amendments | `nutrient amount = product mass × declared nutrient fraction`，或使用有记录的实验室结果；分别保留产品和养分基准。 | product mass; composition or result | product and nutrient amounts | `fao-fruit-vegetable-production-practices-2024` |
| `calc_03` | irrigation, withdrawal, conditioning and wastewater | 核对源头取水、供给、循环、蒸发或消耗、截留固体和排放；同一水表不得重复计算。 | meters; batch records; return and discharge | water and wastewater amounts | `fao-good-farming-practices`; `mass-balance-identity` |
| `calc_04` | annual and perennial phases | 按声明的面积-时间、株年、作物周期、吞吐量或其他有依据的物理基础分配建植、资产和共享阶段，并将每项关联到其期间或阶段。 | area; duration; phase; assets; output | period-attributed inventory | `iso-14044-2006` |
| `calc_05` | harvest through reject routing | 核对输入与可销售输出、共产品、次果、残余、返工、储存损失、包装废物、废水固体和有记录损失，并明确含水率和皮重。 | lot weights; destination; moisture; tare | mass-balance result | `mass-balance-identity`; `fao-postharvest-handling-fruits` |
| `calc_06` | nutrient and fuel elementary flows | 对有记录的养分、残余物、燃料、接收介质和期间数据应用一种选定方法或实测结果；不得重复路径。 | records; factors; method; medium | elementary-flow amounts | `ipcc-2019-refinement-afolu` |
| `calc_07` | reusable packaging and shared assets | `allocated asset = asset mass or service × represented throughput / documented service throughput`，并披露复用、退回和损失。 | asset; service life; throughput; loss | allocated input | `fao-postharvest-handling-fruits`; `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | all datasets | 声明物种或植物学组、品种或品种组、生产系统、场址、地理位置、一年生或多年生阶段、期间、门和路线节点。 | block register and dataset metadata |
| `quality_02` | measured and converted quantities | 优先使用经校准的秤和计量器、发票、标签、日志、记录器、收据和透明计算表；保留单位、皮重、含水率和因子。 | primary records and calculation worksheet |
| `quality_03` | cycle, harvest, storage and multi-period routes | 覆盖声明的完整周期或阶段、所有收获批次、建植或替换事件、储存期间和纳入的运行；标识缺口。 | cycle checklist, lot register and period index |
| `quality_04` | products, co-products, rejects, residues and waste | 将每个源流核对到一个已接受的产品、共产品、返工、残余、废水、包装废物或有记录的损失交接。 | mass balance, grade sheet and destination receipt |
| `quality_05` | nutrient, water and emission rows | 披露产品和养分基准、水源和水平衡、选定排放方法、因子、接收介质、残余物去向和未解析路径。 | nutrient plan, meters, worksheet and source reference |
| `quality_06` | aggregation and publication | 披露单场址或聚合范围、共享资源归属、采集值与计算值或估计值、原始记录占比和未解析身份。 | aggregation worksheet and quality note |

## 9. 校验规则

| rule_id | 适用对象 | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | 参考流和元数据 | 缺少物种或组别、产品状态、门、质量基准、成熟度或等级、周期或阶段或其他必需限定信息时拒绝；最终发布前核验产品、质量属性和单位组身份。 | `fao-quality-safety-fresh-fruits-2004`; `mass-balance-identity` |
| `validation_02` | 边界和过程图 | 必须有受管理生产、收获交接和声明门；必须明确纳入或排除初级处理、分级、储存、包装和拒收路线。 | `fao-fruit-vegetable-production-practices-2024`; `fao-postharvest-handling-fruits` |
| `validation_03` | Flow Set 行 | 在前景生成时，使用 Flow Set id、版本、分组、结构坐标、属性、单位、地理位置、接收介质或预期用途以及经核验的最终 UUID 解析每一行参数化数据。 | `mass-balance-identity` |
| `validation_04` | 生产和采后输出 | 核对作物周期输出、收获水果、等级、可销售水果、共产品、次果、储存损失、残余物、返工、废水固体、包装废物和损失；拒绝重复计算。 | `mass-balance-identity`; `fao-packinghouse-operations-1986` |
| `validation_05` | 多输出和拒收状态 | 列举每个预期输出和交接；没有功能、目的地、数量、质量和归属决定时拒绝回收抵扣；每个拒收状态必须有路径。 | `iso-14044-2006`; `fao-postharvest-handling-fruits` |
| `validation_06` | 期间、储存和活动批次 | 将投入、资产、输出、替换、终止事件、储存时长、批次和换线关联到声明期间或阶段；防止重复归属。 | `iso-14044-2006`; `mass-balance-identity` |
| `validation_07` | 养分、水和基本流 | 检查实际产品和养分基准、灌溉与取水的区分、水平衡、接收介质和一种排放方法；防止氮或水路径重复。 | `ipcc-2019-refinement-afolu`; `fao-good-farming-practices` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; 仅在完成审查、身份解析和发布控制后作为背景数据集使用 |
| downstream_use | 用于 Other fruits, n.e.c. 类别中栽培新鲜完整水果的农业和第一交接建模，以及下游过程或 lifecyclemodel 构建。 |
| allowed_use | 保留水果身份、路线、地理位置、周期或阶段、门、成熟度和等级、养分和水基准、储存和包装范围、去向、分配和质量披露的研究。 |
| excluded_use | 加工水果、野外采集水果、苗圃材料、零售或消费者阶段、无限定的区域替代，或缺少门、阶段和输出去向信息的使用。 |
| required_metadata | PCR id；CPC reference；物种或组别；品种组；地理位置；系统；阶段；日期；门；成熟度；等级；投入；养分和水基准；作物保护；收获；处理；储存；包装；去向；参考量和单位；分配；身份状态。 |
| required_quality_disclosure | 场址和期间覆盖；采集值、计算值和估计值字段；原始记录占比；计量器和秤证据；水与质量平衡；分配；复用；排放方法；Flow Set 解析；未解析身份发现。 |
| update_trigger | 路线、生产系统、阶段分配、灌溉、养分或保护实践、处理、储存、包装、拒收或回收路线、门、排放方法或必需限定信息发生实质变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-fruit-vegetable-production-practices-2024` | official_guidance | FAO, Production practices to increase yield, quality and safety of fruits and vegetables, 2024, <https://www.fao.org/plant-production-protection/news-and-events/news/news-detail/fao-provides-new-guidelines-to-maximize-crop-yields-and-improve-food-safety/en/> | 受管理生产、综合病虫害管理、水适用性、卫生和投入记录 |
| `fao-good-farming-practices` | official_guidance | FAO, Good Farming Practices, <https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/good-farming-practices/en/> | 土壤和养分管理、灌溉管理、土地和周期披露 |
| `fao-postharvest-handling-fruits` | extension_guidance | FAO/Inpho, Post-harvest handling of fruits, <https://www.fao.org/fileadmin/templates/inpho/documents/AE618e.pdf> | 采后顺序、分级、处理、冷却、储存和包装 |
| `fao-packinghouse-operations-1986` | extension_guidance | FAO, Improvement of Post-Harvest Fresh Fruits and Vegetables Handling: Packinghouse Operations, <https://www.fao.org/4/x5403e/x5403e05.htm> | 接收、分选、清洁、分级、包装、供应商追溯和废物处理 |
| `fao-quality-safety-fresh-fruits-2004` | official_guidance | FAO, Improving the quality and safety of fresh fruits and vegetables: a practical approach, <https://www.fao.org/4/y5488e/y5488e0d.htm> | 水、肥料、作物保护、卫生、处理和质量证据 |
| `ipcc-2019-refinement-afolu` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 AFOLU, <https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html> | 管理土壤氮、残余物和燃料相关基本流方法 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, <https://www.iso.org/standard/38498.html> | 系统边界、分配、共产品功能、数据质量和归属披露 |
| `mass-balance-identity` | method_factor | Declared crop-cycle, lot, water, output, reject, residue and packaging mass-balance reconciliation method | 归一化、损失、共产品、拒收物、废水、包装和重复计算检查 |
