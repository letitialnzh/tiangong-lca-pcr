---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-pome-fruits-and-stone-fruits
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他仁果类和核果类水果

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 01349 所表示、且未被更具体水果类别涵盖的鲜食完整仁果类或核果类水果。默认前景边界从报告作物周期的果园管理开始，延伸至采收和声明的农场交接点或首次商业交接点。只有在明确纳入时，才包括分级、清洗、冷却、包装和至该交接点的运输。

每个数据集应声明物种或品种、生产地点和系统、采收年度、果园树龄、市场等级或去向、成熟度/质量状态以及交接状态。不同物种或市场状态不得在未记录规则时聚合。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-pome-fruits-and-stone-fruits |
| classification_refs | CPC 3.0:01349 — Other pome fruits and stone fruits |
| covered_products | CPC 01349 所记录的其他鲜食完整仁果类或核果类水果，包括未被专门水果 PCR 涵盖的物种或品种；必须声明具体物种和品种 |
| excluded_products | 苹果、梨、柑橘、葡萄、浆果、坚果、加工、榨汁、干制、罐藏、冷冻、保藏或发酵水果；作为产品销售的苗木；交接后的配送、零售和消费者使用 |
| representative_product | 在农场交接点或首次商业交接点的其他鲜食仁果类或核果类水果 |
| production_route | 受管理的多年生果园或相当的水果种植系统，随后进行采收，以及可选的边界内分级、初级整理、冷却或包装 |
| market_state | 声明商业等级或等级组合下的完整鲜果，净质量不含包装和移除的废物 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场交接点或首次商业交接点的可销售完整鲜食其他仁果类或核果类水果 |
| How much | 1 kg 净产品质量 |
| How well | 声明等级或等级组合中的可销售鲜果；报告物种、品种、成熟度、缺陷容许度和目的地 |
| How long or cycle | 一个采收年度和作物周期；披露多年生果园树龄、建园年度和多年归属规则 |
| reference_flow_link | 证据缺口的语义参考产品；在数据集生成时绑定准确的前景产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 声明交接点的鲜食其他仁果类或核果类水果（未映射） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种/品种；生产地理位置；采收年度；果园树龄和系统；等级或等级组合；成熟度/质量状态；交接地点和边界；不含包装和废物的净质量 |
| 绑定模式 | 流保持未映射时省略；在数据集生成阶段仅使用经验证的身份或适用的产品 Flow Set |

构建前景数据包时，`必需限定信息` 中的全部信息应在元数据、过程说明、参考流备注、产品说明或等效字段中明确声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measure_reference_mass` | 参考产品和可销售输出 | Mass | kg | 报告交接点净水果质量；排除包装、土壤、附着非产品物料和单独报告的拒收物。 |
| `measure_species_grade` | 参考产品和共产品输出 | Mass and declared product identity | kg | 保留物种、品种、成熟度、等级和去向；不同产品仅可按有记录的质量加权规则聚合。 |
| `measure_nutrient_basis` | 肥料和土壤改良剂 | Mass of product and declared nutrient | kg product；kg N、P、K 或有机养分 | 记录实际产品和养分含量；仅依据供应商或分析证据将产品质量转换为养分质量。 |
| `measure_water_energy` | 灌溉水、工艺水、燃料和电力 | Volume, mass, or energy | m3、kg、L、MJ 或 kWh | 优先使用计量表、发票或设备记录；归一化至本行单位并保留原始单位。 |
| `measure_land_time` | 土地占用和建园 | Area and crop cycle | ha 和 crop cycle | 报告贡献面积、报告期、树龄和生产期假设；未声明规则不得自行年度化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告作物周期管理开始前的裸地或已建成果园地块；声明树龄、建园年度和土地利用历史 |
| starting_condition_role | 前景生产从纳入范围的果园管理开始。适用时纳入建园投入，并按声明生产期或报告期归属 |
| product_classification_scope | CPC 3.0 01349 所表示的鲜食其他仁果类和核果类水果，在声明农场交接点或首次商业交接点交付 |
| recursive_input_rule | 同类别水果不递归追踪为投入。种植材料单独记录，水果输出从受管理作物状态开始 |
| upstream_dataset_requirement | 苗木、肥料/土壤改良剂、作物保护、水、能源、运输和包装的背景数据集应披露提供者、地理位置、时间、单位和分配/截断处理 |
| disclosure | 说明建园、灌溉基础设施、现场包装、冷却、可重复使用容器和至首次交接运输是否纳入 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_scope` | 所有过程 | 纳入果园管理和采收；分级、整理、冷却、包装或交接活动仅在声明前景边界内时纳入。 | `fao-codex-fresh-fruits-vegetables`, `foreground-farm-records` |
| `boundary_establishment` | 果园管理 | 新建或重新建植果园纳入建植负荷；已建成果园应披露树龄及既有负荷归属规则。 | `foreground-farm-records`, `iso-14044-allocation` |
| `boundary_inputs` | 所有投入行 | 记录实际跨越边界的产品、服务、资源和释放；不得仅为填充身份字段而推断投入。 | `foreground-farm-records` |
| `boundary_outputs` | 所有输出 | 核对可销售等级、降级产品、拒收物、损失、残余物和环境释放；拒收物不得无声地成为参考输出。 | `fao-codex-fresh-fruits-vegetables`, `ipcc-2019-managed-soils-n2o` |
| `boundary_handoff` | 下游过程 | 默认边界在农场交接点或首次商业交接点结束；除非明确扩展，否则排除配送、零售、消费者储存和加工。 | `fao-codex-fresh-fruits-vegetables`, `foreground-farm-records` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_orchard_management` | 果园建植与作物周期管理 | required | 纳入多年生管理；适用时纳入或归属建园 | managed biological production | 每 1 kg 交接点可销售鲜果 |
| `p_harvest` | 采收与收集 | required | 纳入从受管理作物中移除水果并转移至下一状态 | harvest and capture | 每 1 kg 原始或可销售水果 |
| `p_grading_sorting` | 分级与分选 | conditional | 边界内形成两个或以上质量或去向状态时纳入 | grading and sorting | 每 1 kg 进料和声明等级输出 |
| `p_primary_conditioning_handoff` | 初级整理与商业交接 | conditional | 清洗、冷却、包装或首次整理在边界内时纳入 | primary conditioning and hand-off | 每 1 kg 交接点净水果 |

### 过程：果园建植与作物周期管理（`p_orchard_management`）

#### 输入

##### 产品流

###### 果园建植用种植材料（`planting_stock`）
当购买或生产幼树、嫁接苗或繁殖材料用于纳入范围果园时，种植材料跨越边界。

- 选定流：声明物种或品种的种植材料（未映射）
- 流属性/单位：Mass 或 item count / kg 或 item
- 数量：场址特定
- 数量规则：实际种植材料并归属报告果园
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_records`
- 来源：`foreground-farm-records`

###### 农业养分与肥料投入（`p_orchard_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_records`
- 来源：`foreground-farm-records`

###### 供应至果园的灌溉水（`irrigation_water`）
记录果园获得的灌溉水，并将计量或计算供水与有效降水区分。

- 选定流：灌溉水；Flow Set 组 `water-use/irrigation-water`
- 流属性/单位：Volume 或 mass / m3 或 kg
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量：场址特定
- 数量规则：计量或计算的灌溉输送量，尽可能与有效降水分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_records`
- 来源：`foreground-farm-records`, `fao-crop-evapotranspiration-56`

###### 实际使用的作物保护产品（`crop_protection_products`）
记录声明果园或作物周期使用的每种作物保护产品及施用事件。

- 选定流：声明作物实际使用的作物保护产品（未映射）
- 流属性/单位：Mass 或 volume / kg 或 L
- 数量：场址特定
- 数量规则：施用日志、发票或库存核对中的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_records`
- 来源：`foreground-farm-records`

###### 果园作业燃料或电力（`orchard_energy`）
记录纳入范围果园作业实际消耗的燃料或电力，并保留能量载体和分配基准。

- 选定流：移动机械燃料或电力；适用组 `energy-supply/mobile-machinery-fuel` 或 `energy-supply/electricity-supply`
- 流属性/单位：Energy 或 mass / MJ、kWh、L 或 kg
- 数量：场址特定
- 数量规则：边界内果园作业的实际消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_records`
- 来源：`foreground-farm-records`

##### 废物流
##### 基本流

###### 果园土地占用（`land_occupation`）
记录申报期间果园占用的面积和时间，并将其分配到声明的水果产出。

- 选定流：土地占用
- 流属性/单位：Area-time / ha 和 crop cycle
- 数量：场址特定
- 数量规则：报告期内被占用的果园面积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_records`
- 来源：`foreground-farm-records`

###### 果园建植的土地转化（`land_transformation`）
记录纳入的果园建植期间发生的有记录土地转化事件及面积。

- 选定流：土地转化
- 流属性/单位：Area / ha
- 数量：场址特定
- 数量规则：建园期有记录的面积和转化事件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_records`
- 来源：`foreground-farm-records`

#### 输出
##### 产品流

###### 待采收水果作物状态（`fruit_ready_for_harvest`）
记录进入采收的水果质量，并与采集、留存和损失路径核对。

- 选定流：待采收的其他仁果类或核果类水果（未映射）
- 流属性/单位：Mass / kg
- 数量：场址特定
- 数量规则：进入采收的水果质量，并与收集、保留和损失路径核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`foreground-farm-records`

##### 废物流

###### 移出果园的修剪和疏果残余物（`pruning_residues`）
记录移出的修剪和疏果残余物、含水基准和下游去向；原地覆盖物另行披露。

- 选定流：果园修剪或疏果残余物（未映射）
- 流属性/单位：Mass / 按记录的 kg 干物质或湿物质
- 数量：场址特定
- 数量规则：移出残余物及含水基准和下游去向；原地覆盖应披露而非作为外运输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_records`
- 来源：`foreground-farm-records`

##### 基本流

###### 受管理果园土壤的直接氧化亚氮释放（`fertilizer_n2o_air`）
根据记录的养分投入和场址条件，使用选定方法计算直接氧化亚氮。

- 选定流：氧化亚氮至空气
- 流属性/单位：Mass / kg N2O
- 数量：采集后计算
- 数量规则：对记录的氮投入和场址条件应用选定方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_model_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`

###### 果园作业释放的氮氧化物（`fertilizer_nox_air`）
根据记录的养分和燃烧投入计算氮氧化物，并声明接收介质。

- 选定流：氮氧化物至空气
- 流属性/单位：Mass / kg NOx
- 数量：采集后计算
- 数量规则：使用有记录的养分和燃烧投入并声明接收介质
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_model_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`, `foreground-farm-records`

###### 果园作业释放的氨（`fertilizer_nh3_air`）
根据记录的养分施用和接收介质方法参数计算氨。

- 选定流：氨至空气
- 流属性/单位：Mass / kg NH3
- 数量：采集后计算
- 数量规则：依据记录养分施用量和接收介质方法参数计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_model_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`

###### 向水体释放的硝酸盐（`nitrate_to_water`）
使用声明的养分损失、排水和接收介质证据计算硝酸盐损失。

- 选定流：硝酸盐至水
- 流属性/单位：Mass / kg nitrate
- 数量：采集后计算
- 数量规则：依据氮投入、排水和接收介质证据应用养分损失方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_model_inputs`
- 来源：`ipcc-2019-managed-soils-n2o`, `foreground-farm-records`

###### 向水体释放的磷酸盐（`phosphate_to_water`）
使用有记录的磷投入和接收介质证据计算磷酸盐损失。

- 选定流：磷酸盐至水
- 流属性/单位：Mass / kg phosphate
- 数量：采集后计算
- 数量规则：依据实际养分投入和接收介质证据应用磷损失方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emission_model_inputs`
- 来源：`foreground-farm-records`

### 过程：采收与收集（`p_harvest`）

#### 输入
##### 产品流

###### 采收燃料或电力（`harvest_energy`）
记录采收实际使用的能源，并将共享消耗分配到报告水果产出。

- 选定流：移动机械燃料或电力；适用组 `energy-supply/mobile-machinery-fuel` 或 `energy-supply/electricity-supply`
- 流属性/单位：Energy 或 mass / MJ、kWh、L 或 kg
- 数量：场址特定
- 数量规则：归属于报告水果输出的实际采收能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`foreground-farm-records`

###### 可重复使用或一次性采收容器（`harvest_containers`）
根据采收容器记录记录容器数量或质量、重复使用次数和损失率。

- 选定流：周转箱、料箱或采收容器；适用时使用 `packaging-function/pallet-and-crate-packaging`
- 流属性/单位：Mass 或 item count / kg 或 item
- 绑定模式：`parameterized`
- 流集：`flow-set.packaging-function`
- 流集版本：`0.2.0`
- 流集分组：`pallet-and-crate-packaging`
- 数量：场址特定
- 数量规则：容器数量、质量、重复使用次数和损失率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`foreground-farm-records`

##### 废物流
##### 基本流
#### 输出
##### 产品流

###### 转移至分级或交接点的原始采收水果（`raw_harvested_fruit`）
记录转入分级或声明交接状态的称重采收水果。

- 选定流：原始采收状态的鲜食其他仁果类或核果类水果（未映射）
- 流属性/单位：Mass / kg
- 数量：场址特定
- 数量规则：转移至下一过程或交接点的称重采收水果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`foreground-farm-records`

##### 废物流

###### 采收期间损失或损伤的水果（`harvest_loss`）
核对待采收、采集、转移、留存和损失水果质量，优先使用直接观测。

- 选定流：采收损失或损伤水果（未映射）
- 流属性/单位：Mass / kg
- 数量：采集后计算
- 数量规则：核对待采收、收集、转移、保留和损失质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_records`
- 来源：`foreground-farm-records`

##### 基本流

### 过程：分级与分选（`p_grading_sorting`）

#### 输入
##### 产品流

###### 进入分级的原始水果（`grading_input_fruit`）
记录进入分级边界的原始水果称重质量。

- 选定流：原始采收的其他仁果类或核果类水果（未映射）
- 流属性/单位：Mass / kg
- 数量：场址特定
- 数量规则：分级边界处的称重进料水果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_records`
- 来源：`foreground-farm-records`

###### 分级电力或固定设备能源（`grading_energy`）
记录计量或发票能源，并按声明水果质量分配共享消耗。

- 选定流：电力供应；Flow Set 组 `energy-supply/electricity-supply`
- 流属性/单位：Energy / kWh 或 MJ
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量：场址特定
- 数量规则：计量或发票能源，共享时按水果质量分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_records`
- 来源：`foreground-farm-records`

###### 分级或清洗用水（`grading_water`）
根据计量或批次记录分级或清洗供水量。

- 选定流：工艺水；Flow Set 组 `water-use/process-water`
- 流属性/单位：Volume 或 mass / m3 或 kg
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`process-water`
- 数量：场址特定
- 数量规则：分级或清洗所供应的计量或记录用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_records`
- 来源：`foreground-farm-records`, `fao-codex-fresh-fruits-vegetables`

##### 废物流
##### 基本流
#### 输出
##### 产品流

###### 接受的可销售等级水果（`accepted_grade_fruit`）
按物种、品种、等级和去向记录接收产出。

- 选定流：接受的鲜食其他仁果类或核果类等级水果（未映射）
- 流属性/单位：Mass / kg
- 数量：场址特定
- 数量规则：按物种、品种、等级和去向称重的接受输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_records`
- 来源：`foreground-farm-records`, `fao-codex-fresh-fruits-vegetables`

###### 降级或其他去向水果（`downgraded_grade_fruit`）
记录降级产出及其声明的下游去向。

- 选定流：降级或其他去向的鲜果（未映射）
- 流属性/单位：Mass / kg
- 数量：场址特定
- 数量规则：降级输出质量和声明的下游去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_records`
- 来源：`foreground-farm-records`

##### 废物流

###### 分级拒收和废弃水果（`grading_rejects`）
核对拒收水果质量，并声明返工、回收、处理或处置路径。

- 选定流：水果分级拒收或废弃水果（未映射）
- 流属性/单位：Mass / kg
- 数量：场址特定
- 数量规则：拒收质量及返工、回收、处理或处置路径
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交接点每 1 kg 可销售鲜果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_records`
- 来源：`foreground-farm-records`, `fao-codex-fresh-fruits-vegetables`

##### 基本流

### 过程：初级整理与商业交接（`p_primary_conditioning_handoff`）

#### 输入
##### 产品流

###### 进入初级整理的接受水果（`conditioning_input_fruit`）
记录进入边界内初级整理步骤的水果称重质量。

- 选定流：待整理的接受鲜食其他仁果类或核果类水果（未映射）
- 流属性/单位：Mass / kg
- 数量：场址特定
- 数量规则：进入边界内整理步骤的称重水果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交接点每 1 kg 净水果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`foreground-farm-records`

###### 包装或展示材料（`packaging_materials`）
记录实际供应的包装或展示材料，适用时包括重复使用周期。

- 选定流：实际包装材料；适用组 `packaging-function/flexible-packaging`、`rigid-container-packaging`、`carton-and-box-packaging` 或 `pallet-and-crate-packaging`
- 流属性/单位：Mass 或 item count / kg 或 item
- 数量：场址特定
- 数量规则：实际供应包装及适用的重复使用次数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交接点每 1 kg 净水果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`foreground-farm-records`

###### 冷却或整理电力（`conditioning_energy`）
记录归属于纳入范围水果整理的计量或分配电量。

- 选定流：电力供应；Flow Set 组 `energy-supply/electricity-supply`
- 流属性/单位：Energy / kWh 或 MJ
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量：场址特定
- 数量规则：归属于范围内水果的计量或分配整理能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：交接点每 1 kg 净水果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`foreground-farm-records`

##### 废物流

###### 整理和包装水果损失（`conditioning_fruit_loss`）
记录实测或核算的水果损失及其声明的下游去向。

- 选定流：水果整理损失（未映射）
- 流属性/单位：Mass / kg
- 数量：采集后计算
- 数量规则：实测或核对的质量差及下游路径
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交接点每 1 kg 净水果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：`foreground-farm-records`

###### 包装拒收物（`packaging_rejects`）
记录包装库存拒收物及其处理或处置去向。

- 选定流：包装材料拒收物（未映射）
- 流属性/单位：Mass / kg
- 数量：场址特定
- 数量规则：包装库存核对和拒收记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交接点每 1 kg 净水果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`foreground-farm-records`

##### 基本流
#### 输出
##### 产品流

###### 声明交接点的可销售鲜果（`marketable_fresh_fruit_handoff`）
按物种、等级和适用去向记录声明交接状态下的净称重水果。

- 选定流：农场交接点或首次商业交接点的鲜食其他仁果类或核果类水果（未映射）
- 流属性/单位：Mass / kg
- 数量：场址特定
- 数量规则：交接点交付的净称重水果，适用时按物种、等级和去向记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交接点每 1 kg 净水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`foreground-farm-records`, `fao-codex-fresh-fruits-vegetables`

##### 废物流
##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivision` | 共享活动 | 尽可能拆分过程或使用独立记录；能直接归属产品、等级、场址或作业的负荷不得分配。 | `iso-14044-allocation`, `foreground-farm-records` |
| `allocation_shared_orchard` | 多物种、等级或输出 | 无法直接归属时，按有记录的物理关系分配作物周期和建园负荷；可比鲜果默认使用产品质量，并测试替代方法。 | `iso-14044-allocation`, `foreground-farm-records` |
| `allocation_rejects` | 降级水果、拒收物、残余物和损失 | 在返工、回收、处理或处置明确前保留物料负荷；拒收物不得计入接受参考输出。 | `iso-14044-allocation`, `foreground-farm-records` |
| `allocation_multi_site` | 多果园地块或场址 | 尽可能保留场址记录，按实际交接质量汇总；不得重复计入共享记录。 | `iso-14044-allocation`, `foreground-farm-records` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_records` | `p_orchard_management` | 果园投入、土地、残余物、作业 | 农场与果园原始记录 | site_id; block_id; species; cultivar; area; orchard_age; establishment_year; operation_date; input_name; product_quantity; nutrient_content; water_volume; fuel; electricity; residue_mass; destination | 发票、施用日志、计量表、田间日志、供应商记录 | 原始单位归一化至 PCR 单位 | 每次作业和年度核对 | 一个采收年度及披露的多年归属 | 每个贡献地块/生产单元 | 按地块汇总后除以交接质量 | 来源文件、计量读数、库存核对、地块登记 |
| `cp_harvest_records` | `p_harvest` | 采收投入和输出 | 采收票据、地磅、损失记录 | date; block_id; harvested_mass; transferred_mass; loss_mass; grade; container_count; container_mass; fuel; electricity; destination | 批次称重和采收记录 | kg 水果；kg/item 容器；L/MJ/kWh 能源 | 每个采收批次 | 报告采收季 | 每个贡献地块和采收班组 | 核对待采收、收集、转移和损失质量 | 校准秤、批次票据、主管核对 |
| `cp_grade_records` | `p_grading_sorting` | 分级投入、输出、拒收物、水、能源 | 分级表与设施记录 | incoming_mass; accepted_mass; downgraded_mass; reject_mass; grade; destination; water; electricity; date; line_id | 生产线记录、称重票据、计量表、设施分配 | kg、m3、kWh 或 MJ | 每批次或每天 | 所有边界内分级期 | 每条生产线/设施 | 按物种和等级将输出、拒收物合计至进料 | 秤校准、等级记录、拒收路径证据 |
| `cp_conditioning_records` | `p_primary_conditioning_handoff` | 整理投入、包装、损失、参考输出 | 包装、冷却与交接记录 | incoming_mass; handoff_mass; package_type; package_mass; reuse_cycles; cooling_energy; wash_water; fruit_loss; package_reject; handoff_date; destination | 包装站记录、材料核对、计量表、交接票据 | kg 水果/包装；m3；kWh/MJ | 每批次或每天 | 所有边界内整理期 | 每个设施、生产线、交接点 | 核对进料、交接水果、损失和拒收物 | 称重、包装库存、计量、交接文件 |
| `cp_emission_model_inputs` | `p_orchard_management` | 计算的土壤和农业排放 | 派生计算输入记录 | nutrient_mass; application_method; application_date; soil; climate; drainage; residue_management; combustion_input; receiving_medium | 由采集记录和选定方法参数计算 | kg 养分、kg 燃料及声明排放单位 | 每报告周期和方法更新 | 报告采收年度 | 输入不同的每个场址/地块 | 按场址/地块计算，再按交接质量归一化 | 方法版本、输入核对、参数来源 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | normalized amount = attributable row amount / net marketable reference-flow mass at hand-off | 行数量；分配份额；交接质量 | 每 kg 参考流数量 | `foreground-farm-records` |
| `calc_nutrient_mass` | 肥料和土壤改良剂 | nutrient mass = product mass × documented nutrient fraction；分别保留产品和养分质量 | 产品质量；养分比例 | kg N、P、K 或声明养分 | `foreground-farm-records` |
| `calc_establishment_attribution` | 多年生建园 | establishment burden = documented input × reporting-period or output share under the declared productive-life rule | 建园投入；树龄；生产期假设；输出份额 | 报告期数量 | `iso-14044-allocation`, `foreground-farm-records` |
| `calc_agricultural_emissions` | 土壤和农业基本流输出 | 对核对的养分和燃烧投入应用选定 IPCC 或场址方法，明确接收介质。 | 养分质量；参数；场址条件；燃料 | 计算排放量 | `ipcc-2019-managed-soils-n2o` |
| `calc_multi_site_aggregation` | 多场址 | route amount = sum of site flow amounts / sum of site net marketable hand-off masses | 场址流数量；交接质量 | 路线级归一化数量 | `foreground-farm-records` |
| `calc_mass_reconciliation` | 采收、分级、整理 | incoming mass = accepted + downgraded + rejects + measured/reconciled losses，在声明容差内核对 | 进料；输出；损失 | 完整性检查和质量平衡 | `foreground-farm-records` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考流和产品输出 | 每个聚合产品组识别物种/品种、等级、成熟度、去向、地理位置和交接状态。 | 产品规格、批次记录、数据集元数据 |
| `dq_mass_balance` | 采收、分级、整理 | 核对进料、输出、拒收物、残余物和损失；披露缺口，未解决时不得声明完整。 | 校准秤、票据、核对表 |
| `dq_input_records` | 农业投入、水、能源、包装和容器 | 使用原始记录，或说明估算、原始单位、周期和归一化分配。 | 发票、计量、日志、库存、供应商文件 |
| `dq_temporal_site` | 所有前景行 | 报告采收年度、生产期、地块/场址和多年建园归属。 | 地块登记、田间日志、报告期元数据 |
| `dq_emission_method` | 计算基本流 | 声明每项模型化释放的方法版本、参数、接收介质和来源。 | 方法工作表和来源记录 |
| `dq_downstream_path` | 拒收物、残余物、包装拒收物和降级产品 | 声明返工、回收、处理、处置或下游去向；不得存在无链接拒收输出。 | 转移单、废物票据、再利用记录、去向声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_mass` | 参考流 | 参考数量为 1 kg 净可销售鲜果，并具备产品和交接限定信息。 | `foreground-farm-records`, `fao-codex-fresh-fruits-vegetables` |
| `validation_product_boundary` | 过程图和元数据 | 说明建园、灌溉基础设施、分级、整理、包装和至交接运输是否纳入。 | `foreground-farm-records` |
| `validation_mass_reconciliation` | 采收、分级、整理 | 所有进料质量核对至可销售、降级、拒收、损失或明确测量不确定性。 | `foreground-farm-records` |
| `validation_reject_path` | 废物和降级行 | 每项拒收物、残余物和损失均有下游路径或边界退出；不得作为参考输出。 | `foreground-farm-records` |
| `validation_nutrient_basis` | 肥料和农业排放 | 产品数量、养分基准、施用期和排放方法输入一致。 | `foreground-farm-records`, `ipcc-2019-managed-soils-n2o` |
| `validation_site_period` | 场址和周期数据 | 每个贡献场址/地块和报告期只表示一次，不遗漏或重复共享记录。 | `foreground-farm-records` |
| `validation_quality_disclosure` | 数据集画像 | 下游使用前披露来源、不确定性、缺失、分配、背景数据和身份证据缺口限制。 | `foreground-farm-records`, `iso-14044-allocation` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 当交接点、限定信息、地理位置、时间和纳入过程匹配时，作为有前景依据的 secondary_dataset 或水果供应 background_dataset 使用 |
| allowed_use | 至同一声明农场交接点或首次商业交接点的鲜果供应建模；物种、等级、系统、分配和质量相容时用于比较 |
| excluded_use | 加工或零售产品；未经审查不得跨不同物种或质量状态直接替代；不得超出声明地理位置、采收年度或边界提出结论 |
| required_metadata | PCR id；物种/品种；地理位置；采收年度；树龄；生产系统；交接；等级/去向；纳入过程；参考质量；背景数据集；分配；水、养分、能源、包装、排放方法字段 |
| required_quality_disclosure | 完整性和质量平衡；原始记录覆盖；时间/地理代表性；估算和不确定性；拒收物/共产品处理；土地和建园归属；排放方法及来源版本 |
| update_trigger | 类别解释、路线、交接、养分/排放方法、包装实践、背景数据集或物种、等级、果园归属证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-codex-fresh-fruits-vegetables` | official_guidance | FAO/WHO Codex Alimentarius，https://www.fao.org/fao-who-codexalimentarius/codex-texts/en/ | 鲜果定义、质量、成熟度、等级、缺陷和交接限定信息 |
| `fao-crop-evapotranspiration-56` | official_guidance | Allen 等，FAO Irrigation and drainage paper 56，https://www.fao.org/4/X0490E/X0490E00.htm | 灌溉计量和作物需水计算 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement，Volume 4，Chapter 11，https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 受管理土壤 N2O 和农业排放计算 |
| `iso-14044-allocation` | standard | ISO 14044:2006，https://www.iso.org/standard/38498.html | 拆分、分配、共产品和披露优先级 |
| `fao-hygiene-fresh-produce` | official_guidance | Codex CXC 53-2003，https://www.fao.org/input/download/standards/10200/CXP_053e_2013.pdf | 采收、初级生产、水、处理和包装边界证据 |
| `foreground-farm-records` | dataset | 随前景数据包提供的农场、果园、采收、分级、包装、计量、发票和交接原始记录 | 数量、身份、时间/场址覆盖、核对和质量证据 |
