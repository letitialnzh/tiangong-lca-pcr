---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fruit-seeds
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 播种用水果种子产品类别规则

## 1. 适用范围与适用性

本 PCR 为水果作物或果树种子生产与交付建立统一的前景数据方法。其产品边界是：在声明的种子交付门处，以可识别批次交付、用于播种的合格水果种子净量。范围包括多汁果实取种、干果或荚果取种、果核/石核处理，以及一年生、保护地、果园和采种园来源的种子批次。

产品边界包括亲本或母株的繁殖、田间或采种园投入、收获捕获、从果实中分离种子、干燥和初级调制、分级与检验、批次放行、必要的种子处理、包装和规定的储存，直至交付门。应排除仅供食用而非以种子交付的水果、育苗和移栽苗、嫁接砧木、插条、内部育种存量、设备制造、下游栽培，以及交付门之后的运输和零售，除非后者被明确声明为交付门。

应按品种或品系/杂交组合、种子等级、繁殖路线、含水率和活力、纯度、发芽率、处理状态、包装、储存条件和地点区分批次。不可将种子数量、样品、降级品、废弃物或果肉副产品与交付的合格净种子混为一物。

## 2. 产品类别身份

| 字段 | 规则 |
| --- | --- |
| `product_name` | Fruit seeds / 水果种子 |
| `pcr_id` | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fruit-seeds` |
| 分类参考 | `cpc:3.0:01360`（外部分类参考，不是目录身份） |
| 目录边界 | 目录使用语义 slug `fruit-seeds`；不得从 CPC 代码生成并列 PCR |
| 目标实体 | foreground dataset、process、lifecyclemodel |

该记录覆盖按种子产品交付的水果种子；它不规定某一物种、区域、品种、认证方案或种子处理剂。产品系统必须在数据集中声明这些限定条件。

## 3. 参考流

### 3.1 声明功能单位

默认功能单位为 **1 kg 在交付门合格且已放行的净水果种子**。净量不包含包装皮重、可分配给其他产品的果肉/果壳/果核副产品、筛下物、试验样品、拒收物或待返工物。若商业交付以粒数计，应先用同一批次实测千粒重或粒重换算为质量；不得用跨品种平均值掩盖批次差异。

每一数据集至少记录：物种、品种或品系/杂交组合、种子等级、批次和地点、繁殖及收获路线、收获日期、含水率基准、活力/纯度/发芽率、处理剂和剂量、包装与储存期、交付门，以及果实、果肉、残渣、降级品、拒收品和返工品的去向。

| Field | Value |
| --- | --- |
| What | 声明种子交付门处，用于播种的净合格水果种子 |
| How much | 1 kg |
| How well | 作物或植物身份；品种、品系或杂交状态；种子等级；生产地理位置；一年生或多年生路线；多汁果实或干果路线；取种和处理状态；含水率或活力基准；物理纯度；发芽率或活力结果；包装状态；纳入的储存期；以及申报交付门 |
| How long or cycle | 一个声明的种子生产周期和采收活动；多年生果园或母株应记录建植、生产、更新和终止期间，以及将其归属到种子批次的分配基准 |
| reference_flow_link | accepted_seed_lot_before_presentation; fruit_seed_reference_flow |
| reference_flow_selection | exactly_one_declared_terminal_output |
| reference_selection_required | actual_route; declared_gate; product_state; output_row_id |

### 3.2 参考产品

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fruit seeds, production mix, at farm gate, seed-grade cleaned for sowing (`51c9dbb5-2bed-4546-b6aa-84e2b59bf91f`) |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | 作物或植物物种；品种、品系或杂交状态；种子等级；生产地理位置；生产单元类型；一年生或多年生周期；多汁果实、干果、荚果、果核或其他生殖结构；湿取种或干取种路线；含水率基准或顽拙性种子状态；物理纯度；发芽率或活力结果及检验方法；处理状态；包装状态；储存期；申报交付门；预期共产品；残余物、拒收物和返工物去向 |
| Reference identity status | 已根据 CPC 01360 精确产品候选及保存的质量流属性/单位组索引复核固定 UUID |

计量基准补充：1 kg 净合格种子

每个前景数据集必须明确选择一个实际路线、声明门、产品状态和输出行。仅将所选终端输出归一化为参考数量；若继续进入后续过程，前序输出仍采用实测内部转移数量。原始称量、质量平衡和批次追踪要求继续适用。

## 4. 计量与单位规则
### 测量和换算规则

| `rule_id` | 测量规则 |
| --- | --- |
| `reference_seed_mass` | 以放行称重记录的净合格种子质量作为基准；报告毛重、皮重、样品和扣除项。 |
| `seed_count_conversion` | 粒数转质量必须使用同批次实测粒重或千粒重，记录测定方法、样本量和不确定度。 |
| `seed_moisture_basis` | 同时记录湿基含水率和测定法；湿基转干物质为 `m_dry = m_wet × (1 − MC_wb)`，其中 `MC_wb` 为小数。 |
| `nutrient_product_and_element_basis` | 肥料和土壤调理剂按实际产品量记录，并同时记录 N、P、K 等元素或营养元素量；不得把产品量当作元素量。 |
| `water_separation` | 区分灌溉、清洗/提取、冷却、锅炉和生活用水；分别记录取水、回用、排放和损失。 |
| `energy_carrier_conversion` | 记录电力、柴油、汽油、燃气、生物质等载能体的原始量、低位热值或电表单位、地点和因子来源。 |
| `quality_attribute_reporting` | 对同一放行批次记录纯度、发芽率、活力、病害/损伤和处理状态；质量指标不是额外的物料流。 |
| `packaging_reuse_basis` | 按实际包装材料质量、周转次数、回收/返还比例和损耗分摊可重复使用包装。 |

含水率的初始质量保证范围为适于常规储存的正性种子约 4–14% 湿基；该范围只是 QA 提醒，不是所有物种的合规限值。顽拙性或中间型种子应采用物种特定的储存窗口，并报告其例外理由。

## 5. 系统边界

默认前景边界从声明的种源或亲本材料及已准备好的生产单元开始，在合格种子批次通过声明的种子交付门时结束。边界包括受管理的种子生产、收获、适用的取种、初级干燥与清选、分级、检验和批次放行，以及到达交付门所需的可选种子处理、包装和储存。若运输是到达数据包所选交付门的必要环节，才将其纳入；否则运输位于边界之外。

### 边界抽象

| `rule_id` | 规则 |
| --- | --- |
| `boundary_field_to_seed_gate` | 从实际繁殖地块/采种园投入到已放行种子交付门；未建模下游栽培。 |
| `boundary_route_variants` | 多汁果实取种与干果/荚果取种是替代路线；仅选择实际发生的路线，不能为完整性强制加入其他路线。 |
| `boundary_recursive_seed_input` | 上游种源或种子输入必须作为实际投入追溯；不要递归复制另一 PCR 的产品事实。若被系统边界排除，应明确排除并说明数据来源。 |
| `boundary_input_completeness` | 记录实际使用的肥料/土壤调理剂、植保产品、水、燃料、电力、处理剂和包装；未使用的类型不创建虚拟输入。 |
| `boundary_output_fate` | 果实副产品、果肉、壳/核、残渣、筛下物、排放、降级品和拒收品必须按实际去向分配或记录为废弃。 |
| `boundary_quality_gate` | 分级、检验和批次放行是产品闸门；未放行或不满足声明质量属性的种子不进入参考产品流。 |

自动模块计划选择受管理生物生产、收获/捕获、材料处理、初级调制、分级/分选、保存/稳定化、包装/展示、灌装/计量、化学反应、替代生产与技术路线、多输出归属、多期间归属以及返工/拒收路径模块。产品特定答案在下文提供；模块文件不提供产品事实、UUID、因子或数量。

## 6. 过程清单结构
### 过程图

| `process_id` | 过程 | 适用性与接口 |
| --- | --- | --- |
| `fruit_seed_multiplication` | 水果种子繁殖与田间生产 | 必需；接收种源并产生待收获种子承载材料。 |
| `fruit_seed_harvest_capture` | 种子承载果实/材料的收获捕获 | 必需；与繁殖过程分开计量，产生收获批次和损失。 |
| `fleshy_seed_extraction` | 多汁果实取种 | 条件过程；仅用于实际发生的果肉分离/洗涤路线。 |
| `dry_seed_extraction` | 干果、荚果或果核取种 | 条件过程；与多汁果实路线互斥，除非产品系统确实包含两者。 |
| `seed_drying_primary_conditioning` | 干燥与初级调制 | 必需；包括干燥、脱粒/清选等首轮处理，直至可分级种子。 |
| `seed_grading_testing_lot_release` | 分级、检验与批次放行 | 必需；把合格、降级、拒收和样品路径分开。 |
| `seed_treatment_packaging_storage` | 处理、包装与储存 | 条件过程；只对实际处理、包装或声明储存期建模。 |

`fleshy_seed_extraction` 和 `dry_seed_extraction` 是技术替代，不应对同一批次重复计入。若生产记录在同一场所混合多种路线，应按批次拆分。若有替代技术或备用路线，应分别记录技术差异、产率和质量结果；不得用一个平均路线隐藏技术变化。

### 生产路线说明

### 5.1 繁殖与田间管理

记录种源、母株/亲本、地块或采种园、播种/栽植日期、面积、种植密度、轮作或多年生周期、灌溉、肥料/土壤调理剂、植保产品、能源和田间排放。母株跨年度提供种子时，按实际覆盖期或声明的归属规则分摊土地、管理和共用设施活动。生物繁殖过程使用实际生物生产路线；不得把模块选择当作产品事实。

### 5.2 收获捕获

按批次记录成熟度、收获方法、收获鲜重/干重、机械燃料或电力、人工/车辆活动、田间损失和带出残体。果实用于食用或其他目的的部分应作为共产品或排除项处理，不得将全部果实质量错误归入种子。

### 5.3 取种路线

多汁果实路线应记录破碎/剖切、发酵或浸泡（若实际发生）、水洗、筛分、脱胶/去果肉、分离收率及果肉/污水去向。干果、荚果或果核路线应记录干燥程度、脱粒/破壳、机械分离、残渣与种子损失。化学浸提、消毒或脱胶只有在实际使用时才作为物料输入，并记录浓度、有效成分和废液去向。

### 5.4 干燥与初级调制

记录设备、批次、入口/出口含水率、空气或燃料、电力、处理时间、再循环空气、筛分/清选和损失。返工、回收或重干种子必须沿独立路径记录；同一质量不得既作为主产品又作为返工投入重复计量。

### 5.5 分级、检验与放行

记录筛网/分级标准、抽样质量、纯度、发芽率、活力、健康或损伤指标、实验室电力，以及合格、降级、拒收和检验样品的质量。分级是质量闸门；只有满足声明的质量属性并放行的种子进入参考产品，降级种子按真实销售、再加工、饲料或废弃去向处理。

### 5.6 处理、包装与储存

按实际产品记录种子处理剂、载体、包衣或消毒剂的产品量和有效成分基础。包装按材料类别和实际质量记录，包括软包装、刚性容器、纸箱/箱体、托盘/周转箱。记录包装拒品、复用、返还、回收和损耗。储存应记录温度、湿度、时间、能耗、虫害控制和储存损失；在交付门前的损失从可交付批次中扣除。

### 过程：受管理的水果种子繁殖 (`fruit_seed_multiplication`)

#### 输入
##### 产品流

###### `source_seed_material`
- 流：实际使用的种源/亲本种子批次
- 单位：kg 或同批次实测粒数换算质量
- 数量规则：按投入批次净质量和批次追溯记录
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：供应商/批次记录 `supplier_batch_record`
- 采集协议：`cp_source_seed_lot`
- 来源：`fao-seed-systems`, `fao-seed-production-manual`

###### 农业养分与肥料投入（`fruit_seed_multiplication_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o`
- 数量范围：Provisional nutrient-product screening interval
  - 范围角色：Default estimate (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg product/kg accepted reference seed
  - 基准：broad first-pass interval across crop and perennial seed routes; replace with product and application records
  - 基准类型：Reference flow (`reference_flow`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### `crop_protection_products`
- 流：实际使用的植保产品/有效成分
- 单位：kg 产品或 kg 有效成分
- 数量规则：按产品、有效成分、施用次数和批次记录
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：实际使用时填 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：施用与采购记录 `supplier_batch_record`
- 采集协议：`cp_field_management_inputs`
- 来源：`ipcc-2019-cropland`

##### 废物流

#### 输出
##### 产品流

###### `mature_seed_bearing_material`
- 流：收获前成熟种子承载果实、荚果或果核材料
- 单位：kg 湿物或干物，注明基准
- 数量规则：按地块/采种园批次收获前后称重
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：田间批次记录 `field_measurement`
- 采集协议：`cp_harvest_lot`
- 来源：`fao-seed-production-manual`, `fao-local-vegetable-seed-production`

##### 废物流


###### `crop_residues`
- 流：田间残茬、修剪物和采后残体
- 单位：kg 湿物；必要时附干物质比例
- 数量规则：称重、面积产量法或透明估计，记录去向
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：现场质量记录 `field_measurement`
- 采集协议：`cp_co_product_and_residue_fate`
- 来源：`ipcc-2019-cropland`


###### `field_harvest_loss`
- 流：收获前后未捕获或损失的种子承载材料
- 单位：kg 湿物或干物
- 数量规则：以收获前估计量减去捕获量核对
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：田间损失记录 `field_measurement`
- 采集协议：`cp_harvest_lot`
- 来源：`fao-seed-production-manual`

##### 基本流

###### `field_nitrous_oxide`
- 流：管理土壤直接/间接 N₂O 排放
- 单位：kg N₂O-N 或 kg N₂O，明确换算
- 数量规则：优先实测；否则按施氮量、气候和土壤因子估计
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：现场施氮与排放模型 `emission_measurement_or_factor`
- 采集协议：`cp_emission_context`
- 来源：`ipcc-2019-managed-soils-n2o`

###### `field_ammonia_to_air`
- 流：田间管理导致的氨排放
- 单位：kg NH₃
- 数量规则：按实际施用氮和适用排放因子估计或实测
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：排放因子或监测 `emission_measurement_or_factor`
- 采集协议：`cp_emission_context`
- 来源：`ipcc-2019-managed-soils-n2o`

###### `field_nitrate_loss`
- 流：向水体或地下水的硝酸盐损失
- 单位：kg NO₃⁻-N 或 kg NO₃⁻，明确换算
- 数量规则：按水质监测、氮平衡或适用因子
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：水质/排放因子 `emission_measurement_or_factor`
- 采集协议：`cp_emission_context`
- 来源：`ipcc-2019-managed-soils-n2o`

### 过程：种子承载材料的收获与捕获 (`fruit_seed_harvest_capture`)

#### 输入
##### 产品流

###### `mature_seed_bearing_material_for_harvest`
- 流：收获工序的成熟种子承载材料输入
- 单位：kg 湿物或干物
- 数量规则：与 `mature_seed_bearing_material` 同批次关联，不重复采购计量
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：批次转移记录 `field_measurement`
- 采集协议：`cp_harvest_lot`
- 来源：`fao-seed-production-manual`

###### `harvest_machinery_fuel`
- 流：收获机械的柴油、汽油或其他燃料
- 单位：L 或 kg；附低位热值
- 数量规则：按加油、设备小时或燃料计量器记录
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：能量 `energy`
- 证据类型：燃料计量与因子 `energy_meter_or_factor`
- 采集协议：`cp_field_energy`
- 来源：`fao-seed-production-manual`

###### `harvest_electricity`
- 流：收获、输送和现场初分离用电
- 单位：kWh
- 数量规则：优先分表；否则按设备功率、运行时间和负荷估计
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：能量 `energy`
- 证据类型：电表或能耗因子 `energy_meter_or_factor`
- 采集协议：`cp_field_energy`
- 来源：`fao-seed-production-manual`

#### 输出
##### 产品流

###### `harvested_seed_bearing_material`
- 流：收获捕获的种子承载果实、荚果或果核
- 单位：kg 湿物或干物
- 数量规则：按收获批次入口称重
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：收获称重记录 `field_measurement`
- 采集协议：`cp_harvest_lot`
- 来源：`fao-seed-production-manual`

###### `harvested_fruit_co_product`
- 流：可销售或另作用途的果实共产品
- 单位：kg 湿物
- 数量规则：以实际分离质量和实际去向记录
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：副产品称重/销售记录 `co_product_fate_record`
- 采集协议：`cp_co_product_and_residue_fate`
- 来源：`fao-seed-production-manual`

##### 废物流

###### `harvested_material_loss`
- 流：收获和运输中的种子承载材料损失
- 单位：kg 湿物或干物
- 数量规则：入口、转移和出口质量平衡差额
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：质量平衡 `mass_balance_record`
- 采集协议：`cp_harvest_lot`
- 来源：`fao-seed-production-manual`

###### `harvest_removed_residue`
- 流：收获时移除的叶、茎、果壳或其他残体
- 单位：kg 湿物；附干物质比例
- 数量规则：按实际清运、堆肥、还田或废弃去向
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：残渣去向记录 `co_product_fate_record`
- 采集协议：`cp_co_product_and_residue_fate`
- 来源：`fao-seed-production-manual`

### 过程：多汁果实取种 (`fleshy_seed_extraction`)

#### 输入
##### 产品流

###### `harvested_fleshy_seed_material`
- 流：进入多汁果实取种的收获材料
- 单位：kg 湿物
- 数量规则：按多汁路线批次入口称重
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：取种批次记录 `field_measurement`
- 采集协议：`cp_extraction_batch`
- 来源：`fao-local-vegetable-seed-production`, `fao-tree-seed-handling`

###### `extraction_process_water`
- 流：多汁果实取种、洗涤和分离用水
- 单位：m³
- 数量规则：分表优先；记录新水、回用水、排放和损失
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：多汁果实路线 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：体积 `volume`
- 证据类型：水表或工艺估计 `water_meter_or_factor`
- 采集协议：`cp_extraction_batch`
- 来源：`fao-local-vegetable-seed-production`, `fao-tree-seed-handling`

###### `fleshy_extraction_electricity`
- 流：多汁果实破碎、泵送、清洗和筛分用电
- 单位：kWh
- 数量规则：分表或功率×时间×负荷
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：多汁果实路线 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：能量 `energy`
- 证据类型：电表或能耗因子 `energy_meter_or_factor`
- 采集协议：`cp_extraction_batch`
- 来源：`fao-local-vegetable-seed-production`

#### 输出
##### 产品流

###### `wet_seed_intermediate`
- 流：多汁路线清洗/分离后的湿种子中间体
- 单位：kg 湿物，附含水率
- 数量规则：以分离出口实测净质量计
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：多汁果实路线 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：批次称重和含水率 `field_measurement`
- 采集协议：`cp_extraction_batch`
- 来源：`fao-tree-seed-handling`, `fao-seed-drying-storage-2024`

###### `fleshy_pulp_co_product`
- 流：取种分离出的果肉或果汁共产品
- 单位：kg 湿物
- 数量规则：按实际用途、销售、堆肥或废弃去向记录
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：副产品去向记录 `co_product_fate_record`
- 采集协议：`cp_co_product_and_residue_fate`
- 来源：`fao-local-vegetable-seed-production`

##### 废物流

###### `fleshy_extraction_rejects`
- 流：多汁取种中因损伤、未成熟或污染而拒收的种子
- 单位：kg 湿物
- 数量规则：按批次拒收称重和去向
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：批次拒收记录 `co_product_fate_record`
- 采集协议：`cp_co_product_and_residue_fate`
- 来源：`fao-seed-production-manual`

###### `fleshy_extraction_residual`
- 流：多汁取种残渣、污泥和废液中的固体残留
- 单位：kg 湿物，液体另报 m³
- 数量规则：按固液分离和实际处置去向
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：废物/废水记录 `co_product_fate_record`
- 采集协议：`cp_co_product_and_residue_fate`
- 来源：`fao-tree-seed-handling`

### 过程：干果或荚果取种 (`dry_seed_extraction`)

#### 输入
##### 产品流

###### `harvested_dry_seed_material`
- 流：进入干果、荚果或果核取种的收获干材料
- 单位：kg 干物或湿物，附含水率
- 数量规则：按干路线批次入口称重
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：干取种路线 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：取种批次记录 `field_measurement`
- 采集协议：`cp_extraction_batch`
- 来源：`fao-seed-production-manual`, `fao-tree-seed-handling`

###### `dry_extraction_electricity`
- 流：干果/荚果/果核脱粒、破壳、输送和筛分用电
- 单位：kWh
- 数量规则：分表或设备功率与运行时间估计
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：干取种路线 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：能量 `energy`
- 证据类型：电表或能耗因子 `energy_meter_or_factor`
- 采集协议：`cp_extraction_batch`
- 来源：`fao-seed-production-manual`

#### 输出
##### 产品流

###### `dry_extracted_seed_intermediate`
- 流：干取种后的未调制种子中间体
- 单位：kg，附含水率
- 数量规则：按脱粒/破壳出口称重
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：干取种路线 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：批次称重和含水率 `field_measurement`
- 采集协议：`cp_extraction_batch`
- 来源：`fao-tree-seed-handling`

##### 废物流

###### `dry_extraction_residue`
- 流：干取种产生的果壳、荚壳、果核碎片和其他残渣
- 单位：kg 干物或湿物
- 数量规则：按残渣称重和实际去向
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：残渣去向记录 `co_product_fate_record`
- 采集协议：`cp_co_product_and_residue_fate`
- 来源：`fao-tree-seed-handling`

###### `dry_extraction_rejects`
- 流：干取种中破损、空壳、病害或不合格种子
- 单位：kg
- 数量规则：按批次分离称重和去向
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：批次拒收记录 `co_product_fate_record`
- 采集协议：`cp_co_product_and_residue_fate`
- 来源：`fao-seed-production-manual`

### 过程：种子干燥与初级调制 (`seed_drying_primary_conditioning`)

#### 输入
##### 产品流

###### `raw_seed_for_conditioning`
- 流：进入干燥和初级调制的原始种子
- 单位：kg，附含水率
- 数量规则：按实际调制批次入口净质量
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：批次转移记录 `field_measurement`
- 采集协议：`cp_conditioning_batch`
- 来源：`fao-seed-drying-storage-2024`, `fao-tree-seed-handling`

###### `conditioning_process_water`
- 流：初级调制、清洗或降温用水
- 单位：m³
- 数量规则：区分工艺新水、回用水、排放和损失
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：实际用水时 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：体积 `volume`
- 证据类型：水表或工艺估计 `water_meter_or_factor`
- 采集协议：`cp_conditioning_batch`
- 来源：`fao-seed-drying-storage-2024`

###### `conditioning_electricity`
- 流：干燥、通风、清选、输送和调制设备用电
- 单位：kWh
- 数量规则：分表或功率×时间×负荷，按批次分摊
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：能量 `energy`
- 证据类型：电表或能耗因子 `energy_meter_or_factor`
- 采集协议：`cp_conditioning_batch`
- 来源：`fao-seed-drying-storage-2024`

###### `conditioning_stationary_fuel`
- 流：固定式干燥器或锅炉使用的燃料
- 单位：L、kg 或 Nm³；附低位热值
- 数量规则：按燃料计量器和批次运行记录
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：实际燃烧时 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：能量 `energy`
- 证据类型：燃料计量与因子 `energy_meter_or_factor`
- 采集协议：`cp_conditioning_batch`
- 来源：`fao-seed-drying-storage-2024`

#### 输出
##### 产品流

###### `conditioned_seed_lot`
- 流：达到目标含水率并完成初级调制的种子批次
- 单位：kg，附湿基含水率
- 数量规则：以批次出口净质量计，并与入口质量平衡
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：批次称重和含水率 `field_measurement`
- 采集协议：`cp_conditioning_batch`
- 来源：`fao-seed-drying-storage-2024`, `fao-tree-seed-handling`

##### 废物流

###### `conditioning_screenings`
- 流：初级调制的筛下物、轻杂和非种子组分
- 单位：kg
- 数量规则：按筛分出口实测质量和去向
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：筛分记录 `mass_balance_record`
- 采集协议：`cp_co_product_and_residue_fate`
- 来源：`fao-seed-drying-storage-2024`

###### `conditioning_dust_residue`
- 流：清选和干燥产生的粉尘收集物
- 单位：kg
- 数量规则：按除尘器/清扫收集量或透明估计
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：残渣记录 `co_product_fate_record`
- 采集协议：`cp_co_product_and_residue_fate`
- 来源：`fao-seed-drying-storage-2024`

##### 基本流

###### `conditioning_particulate_to_air`
- 流：清选、输送和干燥逸散至空气的颗粒物
- 单位：kg PM（注明粒径类别）
- 数量规则：按除尘监测或适用排放因子
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：排放监测或因子 `emission_measurement_or_factor`
- 采集协议：`cp_emission_context`
- 来源：`fao-seed-drying-storage-2024`

### 过程：分级、检验与批次放行 (`seed_grading_testing_lot_release`)

#### 输入
##### 产品流

###### `conditioned_seed_for_grading`
- 流：进入分级和检验的调制后种子
- 单位：kg
- 数量规则：按质量闸门前批次转移量
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：批次转移记录 `field_measurement`
- 采集协议：`cp_conditioning_batch`
- 来源：`fao-seed-drying-storage-2024`

###### `quality_testing_electricity`
- 流：取样、检验和实验室设备用电
- 单位：kWh
- 数量规则：按实验室分表或设备/样品工作量分摊
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：能量 `energy`
- 证据类型：电表或能耗因子 `energy_meter_or_factor`
- 采集协议：`cp_quality_testing`
- 来源：`ista-international-rules`, `oecd-seed-schemes`

#### 输出
##### 产品流

###### `accepted_seed_lot_before_presentation`
- 流：检验合格但尚未处理/包装的种子批次
- 流属性/单位：质量 / kg

原参考状态单位说明：kg

原始产出计量与核对要求：按放行证书对应的净质量

- 数量规则：当选为参考输出时为 1 千克；否则采用实测内部转移数量
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：检验与放行记录 `quality_release_record`
- 采集协议：`cp_quality_testing`
- 来源：`ista-international-rules`, `oecd-seed-schemes`

###### `downgraded_seed_lot`
- 流：未达到高等级但有明确其他去向的种子
- 单位：kg
- 数量规则：按分级出口称重和真实销售/再加工/废弃去向
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：分级与去向记录 `co_product_fate_record`
- 采集协议：`cp_quality_testing`
- 来源：`ista-international-rules`

##### 废物流

###### `rejected_seed_and_test_samples`
- 流：拒收种子与检验样品
- 单位：kg
- 数量规则：按抽样、拒收和最终处置质量记录
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：质量放行和处置记录 `quality_release_record`
- 采集协议：`cp_quality_testing`
- 来源：`ista-international-rules`, `oecd-seed-schemes`

### 过程：处理、包装与储存 (`seed_treatment_packaging_storage`)

#### 输入
##### 产品流

###### `accepted_seed_for_presentation`
- 流：进入处理、包装或储存的合格种子
- 单位：kg
- 数量规则：以批次放行量扣除样品后计
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：放行/转移记录 `quality_release_record`
- 采集协议：`cp_treatment_packaging_storage`
- 来源：`ista-international-rules`, `fao-seed-drying-storage-2024`

###### `seed_treatment_product`
- 流：实际使用的种子处理剂、包衣剂、载体或消毒剂
- 单位：kg 产品；另报有效成分质量
- 数量规则：按产品、批次、剂量和有效成分基础
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：实际处理时 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：产品标签/投料台账 `supplier_batch_record`
- 采集协议：`cp_treatment_packaging_storage`
- 来源：`fao-tree-seed-handling`, `ista-international-rules`

###### `flexible_package_material`
- 流：袋、膜、内衬等软包装材料
- 单位：kg 材料
- 数量规则：按包装规格、实际用量和复用/回收比例
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：使用软包装时 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：包装采购/领用记录 `packaging_record`
- 采集协议：`cp_treatment_packaging_storage`
- 来源：`fao-seed-drying-storage-2024`

###### `rigid_container_material`
- 流：瓶、罐、桶等刚性容器
- 单位：kg 材料
- 数量规则：按容器质量、数量和实际复用/回收记录
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：使用刚性容器时 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：包装采购/领用记录 `packaging_record`
- 采集协议：`cp_treatment_packaging_storage`
- 来源：`fao-seed-drying-storage-2024`

###### `carton_box_material`
- 流：纸箱、瓦楞箱和其他外箱
- 单位：kg 材料
- 数量规则：按箱体规格、数量和实际损耗
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：使用纸箱/外箱时 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：包装采购/领用记录 `packaging_record`
- 采集协议：`cp_treatment_packaging_storage`
- 来源：`fao-seed-drying-storage-2024`

###### `pallet_crate_material`
- 流：托盘、周转箱和运输承载包装
- 单位：kg 材料
- 数量规则：按实际质量、周转次数、返还率和损耗分摊
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：使用托盘/周转箱时 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：包装资产与周转记录 `packaging_record`
- 采集协议：`cp_treatment_packaging_storage`
- 来源：`fao-seed-drying-storage-2024`

###### `presentation_storage_electricity`
- 流：包装区和交付前储存的照明、通风、制冷或除湿用电
- 单位：kWh
- 数量规则：按储存期、分表和批次占用质量/体积分摊
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
- 适用范围：交付门前有包装或储存时 `applicable`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：能量 `energy`
- 证据类型：电表或能耗因子 `energy_meter_or_factor`
- 采集协议：`cp_treatment_packaging_storage`
- 来源：`fao-seed-drying-storage-2024`

#### 输出
##### 产品流

###### `fruit_seed_reference_flow`
- 流：交付门合格水果种子
- 流属性/单位：质量 / kg

原参考状态单位说明：kg 净质量

原始产出计量与核对要求：放行批次净质量减皮重、样品、拒收和交付前损失

- 数量规则：当选为参考输出时为 1 千克；否则采用实测内部转移数量
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：批次放行称重 `quality_release_record`
- 采集协议：`cp_quality_testing`
- 来源：`ista-international-rules`, `oecd-seed-schemes`

##### 废物流

###### `packaging_rejects`
- 流：包装损坏、污染或规格不符的包装材料
- 单位：kg 材料
- 数量规则：按实际报废和回收质量
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：包装废弃记录 `packaging_record`
- 采集协议：`cp_treatment_packaging_storage`
- 来源：`fao-seed-drying-storage-2024`

###### `storage_loss`
- 流：交付前储存期间因失水、霉变、虫害或质量不合格造成的损失
- 单位：kg 种子
- 数量规则：储存前后批次质量和放行量核对
- 数值来源模式：现场实测或理由估计 `measured_or_reasoned_estimate`
原始活动或阶段基准：1 kg 放行合格种子.

- 归一化基准：每声明的参考流
- 基准类型：质量 `mass`
- 证据类型：储存盘点和放行记录 `mass_balance_record`
- 采集协议：`cp_treatment_packaging_storage`
- 来源：`fao-seed-drying-storage-2024`, `fao-tree-seed-handling`

## 7. 分配与联产品处理

| `rule_id` | 规则 |
| --- | --- |
| `allocation_process_subdivision` | 优先按批次和过程拆分；不能拆分时，使用可追溯的质量、能量或占用时间基础，并说明选择。 |
| `allocation_fruit_co_product` | 果实、果肉、果汁或其他可销售材料按实际共产品质量/经济价值或过程细分分配；记录分配基础、价格期和敏感性。 |
| `allocation_seed_grade_outputs` | 合格、降级、拒收和样品优先过程分流；若仍需分配，按种子质量和质量等级/价值记录。只有放行合格流作参考产品。 |
| `allocation_cross_period_mother_plants` | 多年度母株或多年生采种园按实际生产期、可收获种子量或声明的管理周期分配土地、投入和设施活动。 |
| `allocation_rejected_and_rework` | 拒收品和返工流保留独立质量与去向；返工产生的额外过程只计一次，避免与原批次重复计量。 |

## 8. 前景数据采集、计算与质量规则

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| `protocol_id` | `process_id` | `flow_role` | `record_type` | `raw_fields` | `collection_method` | `unit` | `frequency` | `temporal_coverage` | `site_scope` | `aggregation_rule` | `quality_evidence` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source_seed_lot | fruit_seed_multiplication | 种源种子或亲本材料 | 批次登记、发票、种子证书或内部转移记录 | 批次编号；物种；品种或品系；等级；供应商或来源；质量；含水率；处理；日期 | 抄录主要批次记录并与收货记录核对；每个来源批次单独保留记录，完成身份核对后再汇总 | kg；百分比；声明的分类字段 | 每个种源批次 | 每个生产周期 | 每个生产单元和种源批次 | 每声明的参考流 | 批次记录、标签、证书、收货检查 |
| cp_field_management_inputs | fruit_seed_multiplication | 养分、改良剂和植保投入 | 采购、施用和农场管理记录 | 产品；配方；养分或有效成分基础；数量；日期；面积；方法；批次；去向 | 将采购和施用记录核对至生产单元；按生产单元和期间汇总实际施用量 | kg 产品；kg 养分或有效成分；ha | 每次施用 | 完整作物周期或多年生报告期 | 每个地块、温室、果园区块或种子园 | 每声明的参考流 | 发票、标签、养分计划、施用日志 |
| cp_irrigation_and_withdrawal | fruit_seed_multiplication | 灌溉和取水 | 水表、泵运行日志、水源记录、排水或排放记录 | 水源；水表起止读数；输送体积；循环用水；排水；降雨或其他声明用水；日期 | 读取水表并核对水源取水、输送和排放；按水源和生产单元汇总，取水与输送分开保留 | m3 或 kg | 每次灌溉或每月水表读数 | 完整作物周期或报告期 | 每个水源和生产单元 | 每声明的参考流 | 校准水表、泵运行日志、用水记录 |
| cp_field_energy | fruit_seed_multiplication | 田间能源 | 燃料领用、机械日志、电表、承包商发票 | 作业；能源载体；数量；机械；面积或批次；日期；因子引用 | 采集主要能源载体记录和承包商活动数据；只将有记录的作业分配至种子路线 | L、kg、MJ 或 kWh | 每次作业或每月 | 完整作物周期或报告期 | 每个生产单元和作业 | 每声明的参考流 | 仪表、燃料领用、承包商记录 |
| cp_land_and_period | fruit_seed_multiplication | 土地占用和期间 | 地块登记、地图、租约、种植和移除记录 | 面积；生产单元编号；土地利用类别；种植和终止日期；生产期；更新事件 | 与地块或果园登记核对面积和日期；按声明期间及产出基础计算面积时间 | ha；m2；ha a；日期 | 每次种植、更新或终止事件 | 多年生单元完整生产寿命 | 每个地块、果园区块、温室或种子园 | 每声明的参考流 | 地图、登记、注明日期的田间记录 |
| cp_harvest_lot | fruit_seed_harvest_capture | 收获、田间损失、残体和交接 | 收获表、地磅、料箱或周转箱记录、田间损失日志 | 批次编号；生产单元；收获日期；毛重和皮重；成熟材料；损失；残体；共产品；目的地 | 收获时称量，或使用有记录的方法估算；完成批次和含水率核对后再汇总 | kg；含水率百分比 | 每次收获或采集 | 完整收获季 | 每个生产单元和批次 | 每声明的参考流 | 地磅、皮重记录、收获日志 |
| cp_extraction_batch | fleshy_seed_extraction_or_dry_seed_extraction | 提取投入、中间品、拒收品和能源 | 批次表、设备日志、仪表、含水率和停留时间记录 | 投入批次；路线；方法；水；能源；时间；相关时的温度；投入与产出质量；含水率；拒收品；残留物；交接 | 逐批记录提取作业并关联批次编号；先核对各批次，再汇总整个作业季 | kg；m3；kWh；MJ；百分比；小时或天 | 每批 | 完整提取季 | 每条提取线和批次 | 每声明的参考流 | 批次表、仪表、含水率测试、设备日志 |
| cp_conditioning_batch | seed_drying_primary_conditioning | 干燥、清洗、清理、能源、产出和拒收品 | 调制批次表、干燥机或清理机日志、仪表、含水率记录 | 投入批次；方法；投入与产出质量；含水率；水；电力；燃料或热；筛下物；粉尘；去向 | 逐批记录调制并核实产出状态；按批次和声明含水率基础汇总 | kg；m3；kWh；MJ；百分比 | 每批 | 完整调制季 | 每条生产线、设施和批次 | 每声明的参考流 | 批次表、仪表、含水率测试、废物单据 |
| cp_quality_testing | seed_grading_testing_lot_release | 等级、样品、检验和放行 | 实验室报告、抽样记录、分级表、放行决定 | 批次编号；样品编号；样品质量；纯度；发芽率或活力；健康；含水率；方法；日期；等级；去向 | 使用有记录的抽样和测试方法，保留放行决定；只有测试方法及批次身份相符时，才对批次加权或核对 | kg；百分比；分类结果 | 每批及每次必要复检 | 每个批次和放行期间 | 每个设施和实验室 | 每声明的参考流 | 实验室报告、抽样员记录、证书、放行签字 |
| cp_treatment_packaging_storage | seed_treatment_packaging_storage | 处理、包装、储存和交付形态 | 处理日志、包装规格、领用记录、库存台账、储存日志 | 批次编号；处理产品和剂量；包装类型和质量；装填数量；复用；期初和期末库存；相关时的温度或湿度；损失；发运 | 将处理和包装记录与库存变动及门口产出核对；逐批核对，共享储存按有记录的质量时间基础分摊 | kg；件；kWh；百分比；日期；储存时长 | 每次处理、包装作业、库存变动或每月储存记录 | 纳入边界的处理和储存期间 | 每个设施、储存室和批次 | 每声明的参考流 | 处理记录、包装规格、仪表、库存台账 |
| cp_co_product_and_residue_fate | fruit_seed_harvest_capture_or_extraction_conditioning_process | 共产品、残体、拒收品和废物去向 | 销售或转移记录、接收方确认、堆肥或处置单据 | 物流；质量；含水率；预定用途；接收方；质量状况；交接；处理；日期 | 将产出物流关联至可长期追溯的去向记录；不得汇总不同去向而不保留各物流身份 | kg；百分比；分类去向 | 每个产出物流 | 完整生产和加工季 | 每个生产单元及接收目的地 | 每声明的参考流 | 发票、转移单、废物单据、接收方记录 |
| cp_emission_context | fruit_seed_multiplication_or_seed_drying_primary_conditioning | 基本流排放和方法背景 | 土壤、气候、养分、排水、排放、粉尘和因子记录 | 物质；接收介质；土壤；气候；养分投入；残体去向；灌溉；排水；方法层级；因子；测量；日期 | 采集方法输入和计算结果并保留来源及单位；按声明方法计算一次，并与活动数据核对 | kg 物质；kg N；ha；m3；因子单位 | 每次施用、事件或报告期 | 完整作物周期、批次或期间 | 每个生产单元和排放源 | 每声明的参考流 | 方法表、实验室或仪表记录、因子引用 |

### 计算规则

| `calculation_rule_id` | 计算要求 |
| --- | --- |
| `calc_reference_normalization` | 对每批次将所有输入、输出和排放按 `reference_seed_mass` 归一化到 1 kg 放行合格种子。 |
| `calc_seed_dry_matter_conversion` | 使用 `m_dry = m_wet × (1 − MC_wb)` 统一湿基和干物质报告，并保留实测含水率。 |
| `calc_managed_soil_emissions` | 按实际营养元素输入、排放介质和 IPCC/现场因子估算管理土壤 N₂O、NH₃ 和硝酸盐损失，保留因子年份。 |
| `calc_land_occupation` | 以地块面积×生产期计算土地占用；多年生和跨年度母株按声明的归属期或产量基础分摊。 |
| `calc_water_balance` | 对每个水用途核对取水 = 产品/过程保留水 + 排放 + 损失 − 回用抵扣；禁止把回用水重复作为新水。 |
| `calc_extraction_yield` | 以取种路线出口种子干物质或净质量/入口材料同基准质量计算收率，并单列果肉、壳、残渣和拒收品。 |
| `calc_conditioning_yield` | 以调制出口合格前种子与入口原始种子在同一含水率基准下计算产率，单列筛下物、粉尘、失水和返工。 |
| `calc_quality_lot_aggregation` | 聚合批次时按可追溯质量加权质量属性，并保留批次分布，不得用单一平均值替代失败批次。 |
| `calc_co_product_attribution` | 依 `allocation_fruit_co_product` 和 `allocation_seed_grade_outputs` 应用过程细分、质量或经济分配，并报告敏感性。 |
| `calc_period_attribution` | 将母株、土地、设施、储存和跨年度活动按 `allocation_cross_period_mother_plants` 的实际覆盖期分摊。 |
| `calc_reusable_packaging_mass` | 包装材料质量按实际周转次数、返还/回收比例和损耗分摊；一次性材料不假设复用。 |
| `calc_storage_reconciliation` | 交付前储存损失按期初库存 − 期末库存 − 已交付质量核对，并从参考产品净量中扣除。 |

质量平衡的核心检查为：入口质量 + 外加物 − 明确损失 − 输出共产品 − 残渣 − 交付产品 = 记录误差。所有显著误差须说明水分变化、取样、未计量损失、复用或测量不确定度。

### 数据质量要求

| `requirement_id` | 要求 |
| --- | --- |
| `dq_identity_and_lot_traceability` | 每个种子批次具有物种、品种/品系、等级、地点、日期和追溯标识。 |
| `dq_measurement_and_tare` | 质量、水、能源和包装数据有仪器/皮重/换算记录；估计值须标记并给出理由。 |
| `dq_temporal_and_period_coverage` | 田间、母株、储存和共用设施数据覆盖声明生产期；缺口必须披露。 |
| `dq_input_completeness` | 实际使用的肥料/调理剂、植保产品、燃料、电力、水、处理剂和包装均有记录；未使用类型不强制补齐。 |
| `dq_quality_release_evidence` | 发芽率、纯度、活力和处理状态来自批次检验或等效放行证据。 |
| `dq_co_product_and_fate_evidence` | 共产品、残渣、拒收、样品、返工和包装废弃物具有真实去向记录。 |
| `dq_flow_binding_coordinates` | 记录各具体流的查询描述和身份核验状态；未确认的 UUID 保持空缺。 |
| `dq_method_and_factor_provenance` | 排放、能源、水和质量换算因子记录来源、版本、适用区域、年份和方法。 |
| `dq_mass_balance_and_uncertainty` | 各过程和批次通过质量平衡，并报告误差、估计范围和关键不确定度。 |

证据优先级为批次称重/计量/检验记录，其次为供应商和采购记录，再其次为经产品特定理由说明的估计。外部方法来源仅支持方法或因子选择，不替代现场产品事实。

## 9. 验证规则

| `rule_id` | 规则 |
| --- | --- |
| `validation_reference_flow` | 存在 1 kg 放行合格水果种子参考流，且质量属性、含水率基准和净量定义明确。 |
| `validation_scope` | 每个输入/输出能归入从繁殖到交付门的边界；下游栽培和未声明运输不得悄然进入。 |
| `validation_route_choice` | 多汁与干取种路线按实际批次选择；替代路线不重复计入，技术差异有记录。 |
| `validation_process_map` | 必需过程均存在，条件过程仅在适用时存在，过程接口和批次质量可追溯。 |
| `validation_flow_binding` | 参数化卡片具有允许的 具体流身份核验。 |
| `validation_nutrient_basis` | 肥料/调理剂按产品量和元素量分别报告；仅记录实际使用产品。 |
| `validation_water_and_land` | 水用途、回用和损失可核对，土地面积/期间和跨年度分摊有证据。 |
| `validation_quality_release` | 纯度、发芽率、活力和处理状态支持放行决定，样品与拒收流未计入参考产品。 |
| `validation_co_product_outputs` | 果实、果肉、壳、筛下物、残渣和降级品具有去向或分配规则。 |
| `validation_period_attribution` | 母株、多年度生产、储存和设施活动的覆盖期及分摊基础明确。 |
| `validation_reject_rework_paths` | 拒收、返工、回收和再处理路径独立记录且不重复计量。 |
| `validation_mass_balance` | 过程和批次质量平衡在允许误差内；超差有解释、范围和修正计划。 |
| `validation_storage_and_gate` | 储存损失、包装损耗和交付前质量变化已从参考产品净量扣除。 |
| `validation_dataset_disclosure` | 数据集披露地点、时期、路线、质量属性、证据等级、估计、因子和未解析身份。 |

## 10. 发布数据集画像
### 数据集档案

| 字段 | 值 |
| --- | --- |
| 地理范围 | 生产地点特定；必须报告国家/地区和地点 |
| 时间范围 | 具体作季、收获批次和储存期 |
| 技术范围 | 水果作物/果树种子；多汁或干取种替代路线；常规或实际声明技术 |
| 数据质量 | 批次实测优先；理由估计必须标注；跨期和缺口披露 |
| 资本货物 | 默认排除；若背景数据库要求则单独声明 |
| 分配 | 过程细分优先，其次质量或经济基础；报告共产品和降级流 |
| 交付门 | 已放行、已声明质量属性的净种子离开生产/储存场所 |

## 11. 数据来源
### 外部来源

| `source_id` | 用途与参考 |
| --- | --- |
| `fao-seed-production-manual` | 种子企业、收获、批次和生产数据方法；FAO, *Seed enterprises enhancement and development project in Sierra Leone*。 https://coin.fao.org/coin-static/cms/media/16/13666518481740/seed_enterprises_enhacement_and_development_project_in_sierra_leone_mission_1_report_.pdf |
| `fao-seed-systems` | 种子系统、种源和供应链边界；FAO, *What are seed systems?* https://www.fao.org/agriculture/crops/thematic-sitemap/theme/compendium/tools-guidelines/what-are-seed-systems/en/ |
| `fao-local-vegetable-seed-production` | 多汁果实种子采集、清洗和家庭/地方生产实例；FAO, *Home Garden Technology Leaflet 17*。 https://www.fao.org/4/X3996E/x3996e41.htm |
| `fao-tree-seed-handling` | 果树/树木种子的收集、处理、干燥和储存；FAO, *Collection, storage and treatment of tree seeds*。 https://www.fao.org/4/ad226e/AD226E05.htm |
| `fao-seed-drying-storage-2024` | 种子干燥、含水率、储存和能耗采集；LiveSeeding, *Handbook on Seed Drying and Storage* (2024)。 https://orgprints.org/id/eprint/52128/2/LiveSeeding_HandBook_SeedDryingAndStorage_050524_final-EN.pdf |
| `oecd-seed-schemes` | 品种身份、种子等级和认证/批次控制背景；OECD Seed Schemes。 https://www.oecd.org/en/topics/seeds.html |
| `ista-international-rules` | 种子抽样、检验、纯度和发芽率报告背景；ISTA, *International Rules for Seed Testing*。 https://www.seedtest.org/en/publications/international-rules-seed-testing.html |
| `iso-14044-2006` | 生命周期清单、功能单位、分配和质量要求的方法背景；ISO 14044:2006。 https://www.iso.org/standard/38498.html |
| `ipcc-2019-cropland` | 农田管理、作物残体和土地相关排放因子背景；IPCC 2019 Refinement, Volume 4, Chapter 5。 https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf |
| `ipcc-2019-managed-soils-n2o` | 管理土壤 N₂O、氨和硝酸盐损失因子背景；IPCC 2019 Refinement, Volume 4, Chapter 11。 https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf |
| `mass-balance-identity` | 过程入口、输出、损失和共产品的质量守恒检查；内部方法恒等式，不代表外部数据库身份。 |

本中文文件是 `pcr.en-US.md` 的对齐翻译。
