---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pomelos-and-grapefruits
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 柚子和葡萄柚

## 1. 范围与适用性

本 PCR 用于建立新鲜完整柚子和葡萄柚的前景数据包，边界从声明的果园生产年度开始，经过采收、可选的场内调理，到声明的农场门或包装场交接点。范围包括在研究中纳入时的多年生果园建植、结果期果园管理、灌溉、养分和植保管理、采收轮次，以及在交接点之前发生的分拣、清洗、冷却和初级包装。

苗木和嫁接树苗的育苗、育种、果汁和浓缩汁加工、切割和去皮、干燥、烹调、零售、消费者储存和使用，以及门之后的配送不属于默认边界。耐用果园基础设施、机械、建筑物和灌溉资产不纳入，除非另行分摊。田间残余物、次果、拒收果、废水和包装废物在声明其最终去向前仍属于前景过程。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pomelos-and-grapefruits` |
| classification_refs | CPC 3.0 `01321`，柚子和葡萄柚 |
| covered_products | 新鲜完整柚子和葡萄柚，包括声明的品种、生产路线、成熟度、等级、清洗、冷却和初级包装状态 |
| excluded_products | 苗木、种子和接穗生产、果汁、浓缩汁、去皮或切分水果、干燥或烹调产品、零售服务、耐用资本资产和门之后运输 |
| representative_product | 符合声明的物种或品种组、成熟度、大小、硬度、清洁度、等级和缺陷标准的可销售新鲜完整柚子或葡萄柚 |
| production_route | 适用时的多年生果园建植、果园和土壤管理、灌溉、植保、采收、可选调理，以及农场门或包装场交接 |
| market_state | 在声明的农场门或包装场交接点的新鲜、完整、未加工柚子或葡萄柚，可为散装或声明的初级包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明的农场门或包装场交接点的新鲜完整柚子或葡萄柚 |
| How much | 1,000 kg |
| How well | 新鲜、完整、未加工，声明物种或品种组、成熟度、大小、硬度、清洁度、等级、缺陷容许度、水分状态和包装状态 |
| How long or cycle | 一个声明的果园生产年度和采收活动；同一果园区块的所有采收轮次在归一化前统一核算 |
| reference_flow_link | `pomelo_grapefruit_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 农场门的新鲜完整柚子或葡萄柚 `01323c69-b85f-4716-88f2-718888f2f780` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种和品种组；生产地理位置；果园树龄和结果状态；种植密度；生产年度和采收日期；灌溉或雨养状态；肥料产品和养分基准；植保方案；可销售产量；次果和残余物去向；清洗、冷却和包装状态；声明的交接点 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。参考产品身份在精确的农场门身份得到验证前保持 证据缺口；不得用邻近柑橘产品替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_citrus_mass` | 采收果、可销售果、次果和残余物 | Mass | kg | 分别称量可销售果、降级果、拒收果、田间损失和残余果流，并在换算为 1,000 kg 参考产出前完成核算。 |
| `orchard_year_normalization` | 果园和采收记录 | Area and mass | ha and kg | 按果园区块和生产年度记录投入与采收轮次，再按同一区块和采收活动的可销售产出归一化。 |
| `nutrient_product_basis` | 肥料和土壤改良剂投入 | Product and nutrient mass | kg product, kg N, kg P2O5, kg K2O | 分别记录实际配方产品质量和文件化养分浓度；养分当量只能依据供应商规格、标签、养分计划或实验室结果计算。 |
| `water_delivery_basis` | 灌溉、施肥灌溉、清洗和源头取水 | Volume | m3 | 将作物灌溉、施肥灌溉载水、采后清洗水和自然资源取水分别记录，并披露计量或水量平衡依据。 |
| `postharvest_mass_reconciliation` | 分拣、清洗、冷却和包装 | Mass and moisture | kg and declared fraction | 将测得的土壤去除、吸水、冷却损失、次果和包装损失与采收果质量分开，并披露质量核算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已建成果园区块接收声明生产年度投入；若纳入果园建植，则从整备果园土地接收种植材料开始，并披露既有土地利用和排除的基础设施 |
| starting_condition_role | 声明果园生产年度和前景投入核算的起点 |
| product_classification_scope | CPC 3.0 `01321`，柚子和葡萄柚，直到声明的农场门或包装场交接点 |
| recursive_input_rule | 柚子或葡萄柚种植材料按接收交接状态记录并连接上游数据集；本 PCR 不重新构建其育苗或繁殖生产。 |
| upstream_dataset_requirement | 对跨越边界的种植材料、养分产品、植保产品、供水、燃料、电力、包装、外购运输和废物处理服务使用上游数据集。 |
| disclosure | 声明物种和品种组、地理位置、果园树龄和密度、生产年度日期、灌溉来源和方法、养分基准、植保方案、采收轮次、可销售产量、次果和残余物、清洗和冷却、包装、废物去向及交接点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_year` | 建植和果园种植 | 纳入归属于声明生产年度的果园管理和直接作物排放；只有在明确声明面积、树龄和分摊依据时才纳入建植，并排除无关基础设施建设。 | `fao-citrus-production-guidance`; `fao-good-agricultural-practices` |
| `boundary_harvest_gate` | 采收、调理和包装 | 默认前景边界止于声明的农场门或包装场交接点。只有在交接点之前发生时，才纳入分拣、清洗、冷却、初级包装和门前运输。 | `codex-fresh-produce-hygiene`; `usda-ams-citrus-standards` |
| `boundary_residue_fate` | 次果、田间残余物、废水和包装废物 | 分别记录田间归还、堆肥、饲料利用、处理、运输或处置去向。没有文件化接收方和预期用途时，不得给予共产品抵扣。 | `iso-14044-2006`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `orchard_establishment` | 柚子和葡萄柚果园建植 | conditional | 当所代表果园区块将栽植、补植或建植归入研究时纳入 | 前景果园建植 | 栽植面积、种植材料、树龄和分摊期间 |
| `orchard_cultivation` | 柚子和葡萄柚果园种植 | required | 每个所代表的结果果园生产年度 | 前景管理型生物生产 | 果园面积、投入记录、生产年度日期和归属产量 |
| `harvest_and_field_handling` | 柚子和葡萄柚采收及田间处理 | required | 每个所代表的采收活动 | 前景采收和初级田间处理 | 采收质量、采收轮次、次果和可销售产出 |
| `conditioning_and_farm_gate` | 柚子和葡萄柚调理及农场门交接 | conditional | 在声明交接点前发生分拣、清洗、冷却或初级包装时纳入 | 前景调理和交接 | 1,000 kg 可销售新鲜完整产出 |

### 过程：柚子和葡萄柚果园建植（`orchard_establishment`）

#### 输入

##### 产品流

###### 种植材料（`planting_material_input`）

记录进入声明果园区块的外购或内部转移嫁接树、苗木、砧木或接穗材料，并保留供应商批次、物种或品种、栽植日期和数量。

- 选定流：柚子或葡萄柚种植材料
- 流属性/单位：质量或植株数 / kg 或 plant
- 数量规则：按果园区块记录供应商或苗圃交付记录以及栽植的成活树木数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-citrus-production-guidance`

##### 废物流

##### 基本流

###### 占用的果园土地（`orchard_land_occupation`）

记录所代表果园区块占用的面积和分摊期间，并披露建植期与结果期是否分别分配。

- 选定流：农业土地占用
- 流属性/单位：面积时间 / ha*a
- 数量规则：将声明的果园面积乘以建植分摊期间，并按可销售产出归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-citrus-production-guidance`

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：柚子和葡萄柚果园种植（`orchard_cultivation`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`orchard_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_protection_records`
- 来源：`fao-fertilizer-and-plant-nutrition`; `ipcc-2019-refinement-volume-4`; `fao-crop-evapotranspiration-56`

###### 植保产品（`crop_protection_input`）

记录跨越边界的除草剂、杀菌剂、杀虫剂、生物防治剂和助剂；在可获得时保留配方产品量与有效成分量。

- 选定流：植保产品
- 流属性/单位：质量 / kg 配方产品或有效成分
- 数量规则：汇总所代表果园年度的发票、喷施日志、施用记录和库存核算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_protection_records`
- 来源：`fao-good-agricultural-practices`

###### 田间和抽水电力（`field_electricity_input`）

记录用于灌溉抽水、施肥灌溉、控制设备和其他果园作业的外购电力。

- 选定流：电力供给
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：按作业汇总电表或发票记录，并将共用电表分配至所代表果园区块。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_and_energy_records`
- 来源：`fao-good-agricultural-practices`

###### 移动机械燃料（`mobile_machinery_fuel`）

记录归属于所代表果园年度的拖拉机、喷雾机、割草机、采收辅助设备和其他移动机械燃料。

- 选定流：移动机械燃料
- 流属性/单位：能量或燃料质量 / MJ 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：汇总燃料收据、储罐记录或机器工时计算，并归属于所代表果园年度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_and_energy_records`
- 来源：`fao-good-agricultural-practices`

##### 废物流

##### 基本流

###### 水资源取水（`water_resource_withdrawal`）

将灌溉或施肥灌溉的自然资源取水与输送水分开记录，并披露回流或消耗假设。

- 选定流：水资源取水
- 流属性/单位：体积 / m3
- 数量规则：将源头计量或许可记录与果园输送水核对，并披露取水到输送的平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_and_energy_records`
- 来源：`fao-crop-evapotranspiration-56`

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 排入空气的氧化亚氮（`nitrous_oxide_emission`）

记录或计算归属于管理性氮投入和相关果园残余物的直接和间接氧化亚氮排放，并保留所选计算方法。

- 选定流：排入环境空气的氧化亚氮
- 流属性/单位：质量 / kg N2O
- 数量规则：依据文件化氮投入和声明的排放因子方法计算；不得重复计入上游数据集已经包含的排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_and_protection_records`
- 来源：`ipcc-2019-refinement-volume-4`

### 过程：柚子和葡萄柚采收及田间处理（`harvest_and_field_handling`）

#### 输入

##### 产品流

###### 采收筐或周转箱（`harvest_crates`）

记录进入采收作业的可重复使用筐、箱或托盘化采收容器，并披露共用资产的分摊依据。

- 选定流：可重复使用筐或周转箱包装服务
- 流属性/单位：质量或服务 / kg 或 unit
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`pallet-and-crate-packaging`
- 数量规则：记录容器数量、材料、皮重、重复使用次数以及归属于该活动的损失或更换记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`codex-fresh-produce-hygiene`

###### 采收辅助燃料（`harvest_support_fuel`）

记录在声明交接点前用于采收辅助、果园通行和果实转运至场内处理点的燃料。

- 选定流：移动机械燃料
- 流属性/单位：能量或燃料质量 / MJ 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：汇总活动燃料记录或机器工时计算，并分配至所代表的采收产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`fao-good-agricultural-practices`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入调理的果实（`fruit_to_conditioning`）

记录从果园区块离开、转入可选调理和农场门交接过程的采收完整柚子和葡萄柚。

- 选定流：待调理的采收完整柚子或葡萄柚
- 流属性/单位：质量 / kg
- 数量规则：在分拣前称量离开果园区块的果实，并与田间损失和次果核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`usda-ams-citrus-standards`

##### 废物流

###### 采收次果和损伤果（`harvest_culls`）

记录采收或田间处理阶段拒收的果实，并说明其归还土壤、堆肥、饲料利用、处理或处置去向。

- 选定流：柚子和葡萄柚次果及损伤果
- 流属性/单位：质量 / kg
- 数量规则：按声明去向称量或估算拒收果，并与采收质量和可销售质量核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`usda-ams-citrus-standards`; `mass-balance-identity`

##### 基本流

### 过程：柚子和葡萄柚调理及农场门交接（`conditioning_and_farm_gate`）

#### 输入

##### 产品流

###### 调理和清洗水（`conditioning_water`）

在声明交接点前发生清洗或湿法调理时，记录供水，并将接触产品的水与其他设施用水区分。

- 选定流：工艺用水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：汇总在声明交接点前处理果实的水表记录或批次水量平衡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`codex-fresh-produce-hygiene`

###### 初级包装（`primary_packaging`）

在声明交接点前发生初级包装时，记录实际包装材料、质量、形式及重复使用或损失状态。

- 选定流：初级包装功能
- 流属性/单位：质量 / kg packaging
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`carton-and-box-packaging`
- 数量规则：汇总包装领用记录并将包装质量分配至包装果实产出；散装或可重复使用形式单独记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`codex-fresh-produce-hygiene`

###### 调理电力（`conditioning_electricity`）

记录声明交接点前用于分拣、清洗、冷却、通风和包装设备的电力。

- 选定流：电力供给
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：汇总电表或发票并将共用设备分配至所代表的果实吞吐量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`codex-fresh-produce-hygiene`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门可销售新鲜完整柚子或葡萄柚（`farm_gate_product_output`）

记录声明农场门或包装场交接点的最终可销售完整果实；在身份得到验证前保留 证据缺口 状态。

- 选定流：农场门的新鲜完整柚子或葡萄柚＼
- 流属性/单位：质量 / kg
- 数量规则：在声明交接点称量经过边界内分拣、清洗、冷却和包装后的合格果实。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 参考产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`usda-ams-citrus-standards`

##### 废物流

###### 调理次果和包装废物（`conditioning_waste`）

记录声明交接点前产生的次果、去除的土壤或有机物、使用后的清洗材料和废弃包装，并按去向分开。

- 选定流：调理次果和包装废物
- 流属性/单位：质量 / kg
- 数量规则：按流分别称量或估算，并与输入包装质量和果实质量核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售新鲜完整产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_packaging_records`
- 来源：`mass-balance-identity`; `codex-fresh-produce-hygiene`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_citrus_output` | 产出柚子、葡萄柚或多个可销售等级的果园和采收作业 | 当记录支持质量分配时，按可销售质量将共用果园和采收投入分配到产品等级或物种。若不同质量等级具有实质不同的经济功能，应在使用替代分配前披露并论证。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_residue_fate` | 次果、残余物和包装废物 | 除非有文件化接收方和预期用途支持共产品声明，否则将次果、残余物和废物作为废物流。任何避免产品或替代声明应与前景清单分开记录。 | `iso-14044-2006`; `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `orchard_establishment` | 种植材料和占用面积 | 苗圃发票、栽植图和果园登记 | 物种、品种、批次、树数、面积、栽植日期、树龄 | 核对供应商记录、田间图和栽植登记 | plant, kg, ha, ha*a | 每次建植活动 | 建植期和分摊年度 | 每个果园区块 | 按区块和分摊的果园年度产出汇总 | 发票、田间图、栽植登记和树龄披露 |
| `cp_nutrient_and_protection_records` | `orchard_cultivation` | 肥料、土壤改良剂、植保和养分相关排放 | 发票、标签、喷施日志、养分计划和库存记录 | 产品、配方、养分比例、有效成分、日期、区块、质量、施用方法 | 用田间日志和供应商文件核对领用记录 | kg product, kg nutrient | 每次施用并按月核对 | 完整所代表果园年度 | 每个果园区块 | 按产品和区块汇总后按合格产出归一化 | 供应商标签、施用日志和主管复核 |
| `cp_irrigation_and_energy_records` | `orchard_cultivation` | 灌溉、取水、电力和机械燃料 | 仪表、许可、发票、燃料日志或设备记录 | 来源、仪表、体积、能量、燃料、日期、区块、分配依据 | 直接读表或文件化水量和能量平衡 | m3, kWh, MJ, kg | 每次或每月 | 完整所代表果园年度 | 各果园区块和共用设施 | 核对来源总量、输送总量和共用服务分配 | 仪表检查、发票、许可和分配工作表 |
| `cp_harvest_and_packaging_records` | `harvest_and_field_handling` and `conditioning_and_farm_gate` | 采收、果实质量、次果、水、包装、电力和废物 | 称重单、采收日志、包装场记录、公共设施仪表和废物记录 | 日期、区块、批次、合格质量、次果质量、材料、水、能量、废物去向、交接点 | 每批称重或使用文件化校准估算方法 | kg, m3, kWh, unit | 每个采收批次和活动核算 | 完整采收活动 | 果园区块和交接设施 | 按批次核对采收、合格、次果和废物流 | 校准秤、批次记录、仪表、废物收据和交接声明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_orchard_year_normalization` | 所有生产年度记录 | 将归属的果园年度清单除以声明交接点的合格新鲜完整果实质量，并缩放至 1,000 kg。 | 区块面积、归属投入记录、合格产出质量 | PCR 归一化清单 | `mass-balance-identity` |
| `calc_nutrient_equivalents` | 肥料和土壤改良剂行 | 养分当量 = 配方产品质量 × 文件化养分比例；产品质量和养分基准保留为独立字段。 | 产品质量、N/P2O5/K2O 比例 | 养分当量投入 | `fao-fertilizer-and-plant-nutrition` |
| `calc_water_withdrawal_balance` | 灌溉和施肥灌溉 | 取水量 = 源头取水记录与输送水、声明回流或消耗平衡的核对结果；不得仅依据降雨推断取水。 | 源头仪表、输送水、回流 | 取水和输送灌溉水投入 | `fao-crop-evapotranspiration-56` |
| `calc_citrus_mass_balance` | 采收、调理和交接点产出 | 采收质量 = 合格产品 + 次果 + 已记录的田间、分拣和包装损失；无法解释的残余质量必须复核。 | 批次质量和废物记录 | 核对后的产品和废物流 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 产品和投入行 | 声明物种或品种、果园区块、批次、产品配方和交接状态；流身份未解决时保持 证据缺口，不得替换邻近流。 | 批次记录、供应商文件和复核说明 |
| `quality_measurement` | 质量、水、电力和燃料行 | 在可行时使用校准秤和仪表；否则记录估算方法和不确定性。 | 校准记录、仪表检查或估算工作表 |
| `quality_temporal` | 所有生产年度行 | 覆盖完整的所代表果园年度和采收活动，包括所有采收轮次和相关施用。 | 农事日历、施用日志和采收登记 |
| `quality_completeness` | 投入、产出和废物流 | 核对投入记录、合格产出、次果、残余物和包装废物；解释缺失记录或重要残余质量。 | 质量平衡工作表和废物收据 |
| `quality_disclosure` | 数据集元数据 | 披露交接边界、果园树龄、分配依据、水源、养分基准、植保方案和未解决身份。 | 数据集元数据和实践者复核 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_mass_balance` | 采收、调理和交接点产出 | 合格产品、次果和已记录损失必须在声明计量容差内与采收果质量核对；无法解释的残余需要复核。 | `mass-balance-identity` |
| `validate_input_records` | 果园种植和调理 | 每个前景数量必须标识果园区块或设施、生产年度或活动期间、单位、采集协议，以及共用时的分配依据。 | `fao-good-agricultural-practices`; `iso-14044-2006` |
| `validate_reference_qualifiers` | 参考流和数据集元数据 | 数据包在下游使用前必须声明物种或品种组、地理位置、果园树龄、生产年度、交接状态、可销售等级和未解决身份状态。 | `codex-fresh-produce-hygiene`; `usda-ams-citrus-standards` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 新鲜完整柚子和葡萄柚生产的前景农业数据集 |
| downstream_use | 当声明的交接点、地理位置、年度和产品状态兼容时，可作为果园生产的二级数据集，或作为背景数据集使用 |
| allowed_use | 直到声明农场门或包装场的鲜完整柚子和葡萄柚生产的比较型或归因型建模 |
| excluded_use | 果汁、加工柑橘、零售、消费者使用、门后配送，或缺失必要产品、交接点、生产年度或残余物限定信息的研究 |
| required_metadata | 物种和品种组、地理位置、果园区块和树龄、生产年度、灌溉来源、养分和植保基准、采收活动、可销售产出、次果和废物去向、交接状态及未解决身份声明 |
| required_quality_disclosure | 计量依据、时间覆盖、分配方法、质量平衡结果、水和养分核算方法、数据缺口及流身份状态 |
| update_trigger | 新的果园路线、灌溉或植保技术、产量或等级结构发生实质变化、养分或排放方法更新、交接状态改变，或未解决身份得到确认 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-citrus-production-guidance` | official_guidance | FAO 柑橘生产和果园管理指南 | 果园建植、果园管理、种植材料和生产年度边界 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration | 灌溉和水量平衡采集规则 |
| `fao-fertilizer-and-plant-nutrition` | official_guidance | FAO fertilizer and plant nutrition guidance | 养分产品和养分当量计算 |
| `fao-good-agricultural-practices` | extension_guidance | FAO good agricultural practices guidance | 植保、机械和田间记录要求 |
| `ipcc-2019-refinement-volume-4` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 | 管理土壤和作物残余物排放计算 |
| `codex-fresh-produce-hygiene` | standard | Codex code of hygienic practice for fresh fruits and vegetables | 清洗、调理、包装和交接限定信息 |
| `usda-ams-citrus-standards` | official_guidance | USDA Agricultural Marketing Service citrus grade and condition standards | 可销售产出、等级、次果和交接质量 |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management—Life cycle assessment—Requirements and guidelines | 分配和共产品处理 |
| `mass-balance-identity` | method_factor | PCR mass-balance and identity reconciliation method | 产品、次果、废物和交接点产出核对 |
