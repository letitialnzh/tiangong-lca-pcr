---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-root-bulb-and-tuberous-vegetables-n-e-c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他根、球茎和块茎蔬菜，未另列明

## 1. 范围与适用性

本 PCR 规定“其他”根、球茎和块茎蔬菜类别中鲜食根、球茎、根茎、球茎和块茎的前景生产。范围从播种或作物建立开始，经种植和收获，止于声明的农场门。只要产品以鲜蔬菜销售，土壤型露地和保护地种植均可纳入。场内清洗、修整、分级、冷却、包装、储存或发运属于条件性扩展，必须明确声明。

宽泛类别应通过产品身份和可食器官确定，不能只写“蔬菜”。即使分类叶很宽，数据包也必须记录作物及品种或类型。鲜重、商品等级、含水率和声明门的产品状态都是产品定义的一部分。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-root-bulb-and-tuberous-vegetables-n-e-c |
| classification_refs | CPC 3.0:01259 — Other root, bulb and tuberous vegetables, n.e.c.（精确分类背景） |
| covered_products | CPC 01259 中未另分类的鲜食、可销售根、球茎、根茎、球茎或块茎，包括 oyster plant、jicama（Pachyrhizus erosus）、块根芹（celeriac），以及未单独归入具名根菜、球茎、块茎、种子、蘑菇或富淀粉根类的同类产品。 |
| excluded_products | 胡萝卜和萝卜；青蒜；洋葱；韭葱及其他葱属蔬菜；马铃薯、甘薯、木薯、山药、芋头及归入高淀粉或菊粉根茎产品的其他根茎；蔬菜种子；蘑菇和松露；活种苗；仅作饲料的作物；加工、腌制、干燥、冷冻、烹制、去皮或其他转化产品，除非另有审查过的扩展。 |
| representative_product | 声明农场门的鲜块根芹（celery root）商品 |
| production_route | 作物周期建立和种植、养分与水管理、作物保护、收获和初步分选，以及条件性的场内整理、包装、储存和发运 |
| market_state | 声明农场门的鲜商品；可为整根或修整品，也可为未清洗、已清洗、已分级、已冷却或已包装，但必须记录状态 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明农场门的可销售鲜食根、球茎、根茎、球茎或块茎蔬菜 |
| How much | 1 kg 到达状态的鲜商品 |
| How well | 记录产品身份、可食器官、品种或类型、含水率或干物质基准、商品状态和等级；不假定未声明的加工或质量属性 |
| How long or cycle | 一个作物周期及其收获或整理批次；优先使用年度记录，多年或多周期生产必须明确披露 |
| reference_flow_link | `marketable_fresh_other_root_bulb_tuberous_vegetable` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 可销售鲜其他根、球茎、根茎、球茎或块茎蔬菜，未另列明＼ |
| Reference flow property | Mass（`93a60a56-a3c8-11da-a746-0800200b9a66`） |
| Reference unit group | Mass units（`93a60a57-a4c8-11da-a746-0800200c9a66`） |
| Reference unit | kg |
| Required qualifiers | product identity; edible organ; cultivar or variety; fresh-mass basis; marketable condition（unwashed, washed, trimmed, cooled, or packed）; geography; production system; crop cycle and harvest date; declared farm gate |
| Binding |  |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和商品产品输出 | Mass＼ | kg | 参考流采用到达状态的鲜商品质量归一化。另行记录含水率或干物质，未经记录的换算不得混合干物质和鲜重数量。 |
| `crop_cycle_yield` | 田间、收获、整理和储存产品行 | Mass＼ | kg | 分母来自声明作物周期的实测商品量；毛收获量、分选量和商品量必须保持区分。 |
| `area_normalization` | 土地占用和作物周期记录 | Area-time＼ | m2*year | 将种植面积和声明作物周期折算为每 kg 参考产品的面积时间，并披露保护地短周期或完整年度占用的选择。 |
| `energy_measurement` | 燃料和电力行 | Energy or fuel amount＼ | kWh or L | 电力按电表 kWh 采集，燃料按采购或领用活动数据采集。燃料只有在燃料身份和低位热值因子有记录时才转换为能量。 |
| `water_measurement` | 灌溉水和整理用水行 | Volume＼ | m3 | 分开记录灌溉供水、来源取水和整理用水。记录水表、估算或供应商数据，并标明回用或循环水。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 在播种或作物建立时声明土地和作物周期。现有土壤状态和持续土地占用只有在声明生产系统中被测量或建模时才纳入；不假定之前的土地利用变化。 |
| starting_condition_role | 覆盖种植、收获以及所选农场门整理或发运活动的前景作物生产边界 |
| product_classification_scope | CPC 01259 语义类别中的鲜产品：未归入具名蔬菜或高淀粉根类的可食根、球茎、根茎、球茎或块茎 |
| recursive_input_rule | 田间收获、分选、整理或储存之间的同类别作物流作为过程连接产品流。只追溯一次种植负荷，不递归展开中间交接。种苗记录其物种或类型和批次；若种苗本身使用本类别数据集，可只链接一次上游数据集。 |
| upstream_dataset_requirement | 前景未生产的种苗、肥料或土壤改良剂、作物保护品、供水、能源、包装、运输和废物处理，最终 TIDAS 发布前必须具名供应商或背景数据集。 |
| disclosure | 声明物种或俗名、可食器官、品种或类型、作物周期、农场或地块、地理位置、生产系统、面积、播种和收获日期、收获量和商品量、含水率、整理状态和门、灌溉来源和体积、实际养分产品和养分基准、作物保护、燃料、电力、包装、运输、残体和损失，以及所选排放方法。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | whole PCR | 纳入作物建立、露地或保护地操作、收获和初步分选，直到声明农场门。整理、储存或发运只有在选择条件过程并提供记录时纳入。 | `unsd-cpc-3-01259`; `fao-ex-act-v9-2022` |
| `boundary_inputs` | cultivation and selected postharvest processes | 纳入种苗、实际使用的养分产品或土壤改良剂、作物保护品、灌溉和工艺水、田间和设施能源，以及跨越所选前景边界的包装或运输。 | `fao-ex-act-v9-2022` |
| `boundary_land` | crop cycle | 记录声明面积和作物周期的土地占用。土地利用变化或土壤碳变化只有在研究声明且有证据时纳入；不得添加假定的土地利用变化负荷。 | `fao-ex-act-v9-2022` |
| `boundary_emissions` | managed soils and residues | 按所选 IPCC 层级纳入声明氮投入、相关作物残体、石灰或尿素产生的直接和间接土壤排放。残体还田、移除、焚烧和处理去向必须互斥。 | `ipcc-2019-managed-soils` |
| `boundary_exclusions` | post-gate life cycle | 除非记录单独范围扩展，否则排除声明农场门后的运输、零售、消费者储存、准备、烹饪和报废。 | `unsd-cpc-3-01259`; `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_cultivation` | 作物建立和露地或保护地种植 | required | 始终纳入从播种或建立到可收获的声明作物周期。 | 前景作物生产 | 每 1 kg 鲜商品参考产品及每个声明作物周期 |
| `harvest_and_primary_sorting` | 收获和初步分选 | required | 始终纳入收获、去除田间土壤或植物材料以及首次商品性判定。 | 收获和产品准备 | 每 1 kg 鲜商品参考产品 |
| `postharvest_conditioning` | 采后整理和包装 | conditional | 当清洗、修整、分级、冷却、包装或废水处理位于声明农场门内时纳入。 | 条件性整理 | 每 1 kg 整理后商品 |
| `farm_gate_storage_and_dispatch` | 农场门储存和发运 | conditional | 当储存、储存冷却或到声明收集门/农场门的运输在范围内时纳入。 | 条件性储存和交付 | 每 1 kg 声明门产品，并在纳入运输时按吨公里 |

### 过程：作物建立和露地或保护地种植（`field_cultivation`）

#### 输入

##### 产品流

###### 作物专用种苗（`planting_material`）

种子、种球、插穗、冠芽或其他种苗在播种时跨越种植边界。记录实际材料身份和批次，不假定统一播种率。

- 选定流：Covered crop 的作物专用种子、种球、插穗或其他种苗＼
- 流属性/单位：Mass or count / kg or count（flow property; unit group）
- 数量规则：实测批次数量；只有有记录时才将数量转换为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_planting_material_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定种苗筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.08
  - 单位：kg planting material/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`field_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定养分产品筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg product/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品；以实际产品和养分基准为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际使用的作物保护品（`crop_protection_products`）

只有在声明作物周期实际使用时才记录农药、生物防治品、除草剂或其他作物保护品。即使产品流，也必须保留有效成分和施用记录。

- 选定流：声明作物周期使用的作物保护品或有效成分＼
- 流属性/单位：Mass / kg product or active substance（flow property; unit group）
- 数量规则：实测采购或领用量，并保留有效成分比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定作物保护筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg product/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供作物周期使用的灌溉水（`irrigation_water`）

灌溉水在输送到作物或保护地系统时记录。若同时建模来源取水，应与供给水分开。

- 选定流：作物生产供给的灌溉水＼
- 流属性/单位：Volume / m3（flow property; unit group）
- 绑定模式：`parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则：作物周期的水表、灌溉日志或供应商记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_water_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定灌溉水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：m3/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种植用移动机械燃料（`cultivation_fuel`）

拖拉机和其他田间移动设备使用的燃料作为能量投入跨越种植边界。尽可能按作业记录燃料。

- 选定流：作物种植用移动机械燃料＼
- 流属性/单位：Fuel amount / L or kg（flow property; unit group）
- 绑定模式：`parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则：按声明作物周期分配的燃料领用、发票、油罐或机械记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定移动燃料筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.08
  - 单位：L fuel/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉或保护地种植电力（`cultivation_electricity`）

当电泵、环境控制设备或其他种植设备在边界内时，记录其电力。

- 选定流：灌溉或保护地种植电力＼
- 流属性/单位：Energy / kWh（flow property; unit group）
- 绑定模式：`parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则：按作物周期分配的农场、地块、水泵或设备电表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定种植电力筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kWh/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 声明作物周期的土地占用（`land_occupation`）

土地占用表示获得参考产品所需的种植面积和声明持续时间。土地转化是另行声明的研究选择。

- 选定流：作物种植土地占用＼
- 流属性/单位：Area-time / m2*year（flow property; unit group）
- 数量规则：种植面积乘作物周期，再除以鲜商品产量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_land_and_cycle_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定土地占用筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：m2*year/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉来源取水（`irrigation_withdrawal`）

只有在来源取水相对于输送灌溉水被单独计量或建模时才记录该条件性流。同一水量不得重复计算。

- 选定流：灌溉来源资源取水＼
- 流属性/单位：Volume / m3（flow property; unit group）
- 数量规则：实测或供应商报告的来源取水量，并与输送灌溉水核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_water_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定取水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：4
  - 单位：m3/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品，仅在单独报告取水时使用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 离开种植过程的可收获作物（`harvested_crop`）

该产品流连接田间种植与收获、分选，表示第一次商品判定前收获的可食器官。

- 选定流：鲜收获根、球茎、根茎、球茎或块茎作物＼
- 流属性/单位：Mass / kg fresh product（flow property; unit group）
- 数量规则：来自作物周期产量和质量记录的分选前收获量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_and_quality_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定收获量到商品量比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg harvested crop/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 还田或翻入土壤的作物残体（`crop_residue_returned`）

记录留在土中或有意返回土壤的地上和地下作物残体，并将移除、焚烧或外部处理的残体分别记录。

- 选定流：返回管理土壤的作物残体＼
- 流属性/单位：Dry mass / kg dry matter（flow property; unit group）
- 数量规则：按声明含水率和残体去向记录测量或计算残体干物质
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_fate_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定还田残体筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：1.5
  - 单位：kg dry matter/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 未收获或田间受损作物材料（`field_losses`）

在可归属于声明作物周期且损失具有实质性时，记录留在田间或收获前受损的作物。

- 选定流：未收获或田间受损的作物材料＼
- 流属性/单位：Mass / kg fresh material（flow property; unit group）
- 数量规则：由潜在可收获量与收获量差额计算，并披露去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_fate_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定田间损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg fresh material/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 管理土壤直接氧化亚氮（`direct_n2o_soil`）

根据声明氮源和所选 IPCC 方法层级计算土壤直接氧化亚氮。即使，也保留污染物种类和接收介质。

- 选定流：管理农业土壤排放到空气的氧化亚氮＼
- 流属性/单位：Mass / kg N2O（flow property; unit group）
- 数量规则：依据采集的氮投入、残体氮和声明土壤或气候因子的 IPCC 层级计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定土壤直接 N2O 筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg N2O/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 管理土壤氨（`ammonia_soil`）

当所选方法和采集的氮施用数据支持时计算氨排放，并记录污染物和空气接收介质。

- 选定流：管理农业土壤排放到空气的氨＼
- 流属性/单位：Mass / kg NH3（flow property; unit group）
- 数量规则：依据采集的矿质和有机氮施用数据进行所选方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定氨筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg NH3/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 硝酸盐向水体淋失（`nitrate_leaching`）

当水或养分记录以及所选土壤排放方法支持损失估计时报告硝酸盐淋失。水体介质不能与土壤存量混淆。

- 选定流：管理农业土壤排放到水体的硝酸盐＼
- 流属性/单位：Mass / kg nitrate（flow property; unit group）
- 数量规则：将采集或建模的淋失比例应用于声明养分投入和水分制度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定硝酸盐淋失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg nitrate/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 磷酸盐向水体径流（`phosphate_runoff`）

当作物周期有记录的径流路径且方法或测量记录支持时报告磷酸盐径流，并保留计算使用的磷基准。

- 选定流：管理农业土壤排放到水体的磷酸盐＼
- 流属性/单位：Mass / kg phosphate（flow property; unit group）
- 数量规则：声明田块和水分制度的实测或方法推导磷损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定磷酸盐径流筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg phosphate/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 石灰或尿素产生的二氧化碳（`liming_urea_co2`）

只有养分记录显示使用石灰或尿素且所选方法要求直接二氧化碳核算时，才纳入该条件性基本流输出。

- 选定流：石灰或尿素施用排放到空气的二氧化碳＼
- 流属性/单位：Mass / kg CO2（flow property; unit group）
- 数量规则：依据实际石灰或尿素量和声明碳基准进行方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定石灰或尿素 CO2 筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.03
  - 单位：kg CO2/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品，仅在使用石灰或尿素时
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：收获和初步分选（`harvest_and_primary_sorting`）

#### 输入

##### 产品流

###### 接收分选的收获作物（`harvested_crop_input`）

收获作物作为种植过程输出进入分选操作；同一作物量不得再次计入新的上游生产负荷。

- 选定流：声明作物周期的鲜收获根、球茎、根茎、球茎或块茎作物＼
- 流属性/单位：Mass / kg fresh product（flow property; unit group）
- 数量规则：连接同一作物周期的 `harvested_crop` 并核对接收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_and_quality_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：收获作物分选输入核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg harvested crop/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获和分选机械燃料（`harvest_fuel`）

记录收获、起挖、输送、清理和初步分选设备使用且跨越操作边界的燃料。

- 选定流：收获和初步分选移动机械燃料＼
- 流属性/单位：Fuel amount / L or kg（flow property; unit group）
- 绑定模式：`parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则：按声明收获批次分配的燃料领用、发票、油罐或机械记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_operation_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定收获燃料筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：L fuel/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 可销售分选作物（`marketable_sorted_crop`）

该流是可送至声明农场门或条件性整理过程的分选鲜作物，必须记录商品性判定和产品状态。

- 选定流：鲜可销售其他根、球茎、根茎、球茎或块茎蔬菜＼
- 流属性/单位：Mass / kg fresh product（flow property; unit group）
- 数量规则：初步分选后的接收量，带质量和含水率记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_and_quality_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定分选产品输出
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1
  - 单位：kg sorted product/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分选拒收和非等级作物（`sorting_rejects`）

记录因损伤、病害、尺寸、形状或其他声明质量原因被拒收的根、球茎、根茎、球茎或块茎，并说明还田、处理、另售或其他去向。

- 选定流：初步分选拒收的不可销售或非等级作物＼
- 流属性/单位：Mass / kg fresh material（flow property; unit group）
- 数量规则：按去向称量拒收量，并与接收作物和商品量核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_and_quality_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定分选拒收筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg fresh reject/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分选去除的土壤、土块和植物性修整物（`sorting_solids_waste`）

记录收获或初步分选中去除且跨越废物边界的土壤、土块、叶、茎和其他非产品固体。

- 选定流：从收获作物中去除的土壤、土块和植物固体＼
- 流属性/单位：Mass / kg wet or dry material（flow property; unit group）
- 数量规则：按去向测量固体，并记录湿基或干基及含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_fate_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定分选固体筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg removed solids/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 收获和初步分选粉尘（`harvest_dust`）

当收获或干式分选形成有记录的粉尘路径时报告颗粒物排放；有测量或方法要求时保留粒径或物种。

- 选定流：收获和分选产生的颗粒物到环境空气＼
- 流属性/单位：Mass / kg particulate matter（flow property; unit group）
- 数量规则：声明收获和分选操作的实测或方法推导粉尘量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_operation_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定收获粉尘筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.002
  - 单位：kg particulate matter/kg marketable product
  - 基准：每 1 kg 鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：采后整理和包装（`postharvest_conditioning`）

#### 输入

##### 产品流

###### 进入整理的分选作物（`conditioning_product_input`）

当清洗、修整、分级、冷却或包装在声明门内进行时，该条件性产品输入连接分选作物和整理过程。

- 选定流：进入整理的鲜可销售分选作物＼
- 流属性/单位：Mass / kg fresh product（flow property; unit group）
- 数量规则：连接 `marketable_sorted_crop` 并核对整理过程接收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_yield_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定整理输入核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg sorted crop/kg conditioned product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理用水（`conditioning_water`）

清洗、冲洗、脱盐或其他整理用水作为工艺介质跨越边界。分别记录回用和排放。

- 选定流：清洗或整理用工艺水＼
- 流属性/单位：Volume / m3（flow property; unit group）
- 绑定模式：`parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- 数量规则：整理批次的水表、批次日志或供应商记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定整理用水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：m3/kg conditioned product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理用电（`conditioning_electricity`）

当清洗、分级、冷却、输送或包装设备在范围内时，纳入其电力。

- 选定流：采后整理和包装电力＼
- 流属性/单位：Energy / kWh（flow property; unit group）
- 绑定模式：`parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则：按整理批次分配的电表或设备记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定整理电力筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kWh/kg conditioned product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料或可重复使用包装服务（`conditioning_packaging`）

当整理环节使用包装材料或可重复包装服务来盛装或保护产品时，作为条件性投入记录。

- 选定流：整理后产品的包装材料或可重复使用包装服务＼
- 流属性/单位：Mass / kg packaging or service unit（flow property; unit group）
- 数量规则：实测批次发放包装量；按有记录的使用周期和产品质量分摊可重复包装
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理后鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定整理包装筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg packaging/kg conditioned product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废水处理服务（`conditioning_wastewater_treatment`）

当废水处理在声明边界内或作为整理批次相关服务购买时，记录该条件性投入。

- 选定流：整理排水的废水处理服务＼
- 流属性/单位：Treated wastewater volume / m3（flow property; unit group）
- 绑定模式：`parameterized`
- Flow Set: `flow-set.waste-treatment-service`
- Flow Set version: `0.2.0`
- Flow Set group: `wastewater-treatment-service`
- 数量规则：处理日志或供应商记录的处理废水量，并与整理排水核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定废水处理筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：m3 treated wastewater/kg conditioned product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整理后商品产品（`conditioned_marketable_product`）

纳入整理时，整理后产品就是参考产品；最终状态和质量基准必须符合参考流限定信息。

- 选定流：鲜整理后可销售其他根、球茎、根茎、球茎或块茎蔬菜＼
- 流属性/单位：Mass / kg fresh product（flow property; unit group）
- 数量规则：清洗、修整、分级、冷却或包装后的合格整理量，按 1 kg 参考输出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理后鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_yield_records`
- 来源：`iso-14044-2006`
- 数量范围：整理产品参考输出 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.98
  - 上限：1.02
  - 单位：kg conditioned product/kg reference product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 整理废水（`conditioning_wastewater`）

记录跨越边界的清洗或整理废水，并记录水量和处理或排放去向。

- 选定流：清洗或整理产生的废水＼
- 流属性/单位：Volume / m3（flow property; unit group）
- 数量规则：批次、水表或处理记录的排放或处理量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定整理废水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：m3 wastewater/kg conditioned product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 修整物和整理拒收物（`conditioning_rejects`）

记录整理产生的可食器官修整物、受损部分和其他拒收物，并披露每种去向。

- 选定流：整理产生的修整物和拒收物＼
- 流属性/单位：Mass / kg fresh material（flow property; unit group）
- 数量规则：按去向称量修整物和拒收物，并与整理输入及产品输出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理后鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_yield_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定整理拒收筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg fresh reject/kg conditioned product
  - 基准：每 1 kg 整理后鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：农场门储存和发运（`farm_gate_storage_and_dispatch`）

#### 输入

##### 产品流

###### 进入农场门储存或发运的产品（`storage_dispatch_product_input`）

该条件性产品输入把商品分选或整理产品连接到声明农场门内的储存或发运。

- 选定流：进入农场门储存或发运的鲜商品＼
- 流属性/单位：Mass / kg fresh product（flow property; unit group）
- 数量规则：连接所选前一过程产品输出，并核对储存或发运接收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明门的鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定储存发运输入核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.1
  - 单位：kg input product/kg gate product
  - 基准：每 1 kg 声明门的鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 储存或发运电力（`storage_electricity`）

记录所选边界内冷藏、通风、照明、搬运或其他储存发运设备的电力。

- 选定流：农场门储存或发运电力＼
- 流属性/单位：Energy / kWh（flow property; unit group）
- 绑定模式：`parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则：按声明产品批次和储存时长分配的储存或发运电表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明门的鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定储存电力筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.4
  - 单位：kWh/kg gate product
  - 基准：每 1 kg 声明门的鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 到声明门的公路货运服务（`dispatch_transport`）

只有当到声明收集门或农场门的运输仍在前景边界内时，才纳入该条件性公路运输。

- 选定流：产品发运公路货运服务＼
- 流属性/单位：Transport service / tonne-kilometre（flow property; unit group）
- 绑定模式：`parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- Flow Set group: `road-freight-transport`
- 数量规则：产品质量乘记录的单程距离和路线装载因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 声明门的鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch_transport_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定短途运输筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：tonne-km/kg gate product
  - 基准：每 1 kg 声明门的鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 储存或发运包装（`storage_packaging`）

当包装未在整理过程中计入而是在储存或发运时添加或替换，记录该包装。

- 选定流：农场门储存或发运的包装材料或可重复包装服务＼
- 流属性/单位：Mass / kg packaging or service unit（flow property; unit group）
- 数量规则：实测声明批次包装发放量，并按记录的使用周期分摊可重复包装
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 声明门的鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定储存包装筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg packaging/kg gate product
  - 基准：每 1 kg 声明门的鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明农场门的商品产品（`gate_product`）

当纳入储存或发运时，这是最终产品输出，必须符合所选参考流状态和声明门。

- 选定流：声明农场门的鲜可销售其他根、球茎、根茎、球茎或块茎蔬菜＼
- 流属性/单位：Mass / kg fresh product（flow property; unit group）
- 数量规则：到达声明门的商品量按 1 kg 参考产品归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 声明门的鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：`iso-14044-2006`
- 数量范围：农场门产品输出 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.98
  - 上限：1.02
  - 单位：kg gate product/kg reference product
  - 基准：每 1 kg 声明门的鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 储存或发运损失（`storage_dispatch_loss`）

记录储存或发运中的产品损失及其时间、原因和去向。

- 选定流：农场门储存或发运损失的鲜产品＼
- 流属性/单位：Mass / kg fresh material（flow property; unit group）
- 数量规则：按原因和去向称量或核对损失量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明门的鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：据采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch_records`
- 来源：`fao-ex-act-v9-2022`
- 数量范围：暂定储存损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg fresh loss/kg gate product
  - 基准：每 1 kg 声明门的鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 使用或废弃包装（`packaging_waste`）

记录以废物或可重复使用返还流离开边界的包装，并给出材料身份和去向。

- 选定流：储存或发运产生的使用后或废弃包装＼
- 流属性/单位：Mass / kg packaging（flow property; unit group）
- 数量规则：实测包装废物或记录的返还量，并连接发放包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明门的鲜商品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定包装废物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg packaging waste/kg gate product
  - 基准：每 1 kg 声明门的鲜商品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_primary_product` | all crop-cycle inputs and emissions | 在应用实测作物周期产量和所选分配方法后，将前景负荷分配给声明的商品参考产品。 | `iso-14044-2006` |
| `allocation_co_product` | saleable co-products or off-grade products leaving the system | 单独记录每项共产品。只有在记录产品可比性时才使用质量分配；否则使用经济分配并记录价格期间和来源。 | `iso-14044-2006` |
| `allocation_residue` | crop residues, field losses, rejects, soil, and wastewater | 按物理去向将残体和损失保持为废物流或基本流。不得将还田残体或处理输出作为共产品或避免负荷。 | `ipcc-2019-managed-soils`; `iso-14044-2006` |
| `allocation_reusable_packaging` | reusable bins, crates, and containers | 按有记录的重复使用次数和服务产品质量分配包装制造和维护；分别记录损失和替换。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_material_records` | `field_cultivation` | planting material | lot ledger and supplier record | crop identity; cultivar or type; material form; lot; mass or count; treatment; supplier; planting date; planted area | 收货称量并与发票和种植日志核对 | kg or count | each lot and crop cycle | full declared crop cycle | farm and block | 按作物周期汇总使用批次，再按商品量归一化 | invoice, lot label, field log, scale record |
| `cp_nutrient_input_records` | `field_cultivation` | fertilizer or soil amendment; soil emissions | input ledger, label, test, and application log | product name; product mass or volume; N/P/K or other nutrient content; lot; application date; area; application method; lime or urea flag | 核对发票、产品标签、检测和施用日志，保留养分基准 | kg product and kg nutrient | each product and application | full crop cycle | farm and block | 按作物周期汇总实际产品和养分，不推断未记录的产品类型 | invoice, label, laboratory test, application log |
| `cp_crop_protection_records` | `field_cultivation` | crop protection | spray or treatment log | product; active substance; dose; amount; area; date; application method; target | 将处理日志与产品领用和标签核对 | kg product or active substance | each application | full crop cycle | farm and block | 按作物周期汇总产品和有效成分 | application log, label, purchase record |
| `cp_irrigation_water_records` | `field_cultivation` | irrigation water and source withdrawal | meter, irrigation log, or supplier record | source; delivery or withdrawal volume; meter id; date; crop block; irrigation method; reuse fraction | 读取水表或核对供应商/来源记录；无水表时记录估算方法 | m3 | each irrigation event or monthly meter | full crop cycle | farm and block | 按地块汇总，分开供水和来源取水 | meter calibration, pump log, supplier statement |
| `cp_field_energy_records` | `field_cultivation` | cultivation fuel and electricity | fuel ledger and utility meter | fuel identity; volume or mass; equipment; operation; date; electricity kWh; meter; crop block | 将燃料领用/发票和电表与田间作业核对 | L, kg fuel, or kWh | each issue or meter period | full crop cycle | farm, block, and equipment | 按运行时间、面积或实测用量分配共享设备并披露因子 | invoice, tank record, meter record, operating log |
| `cp_land_and_cycle_records` | `field_cultivation` | land occupation | field register and crop plan | field or greenhouse id; area; crop; planting and harvest dates; cycle duration; land-use history; protected-cover status | 用 GIS、租约或生产记录核验地块登记 | ha, m2, and days | each field and crop cycle | declared crop cycle and prior land disclosure | farm and block | 面积乘周期再除以商品量 | field register, map, lease, crop plan |
| `cp_yield_and_quality_records` | `field_cultivation`; `harvest_and_primary_sorting` | harvested and sorted products | harvest tickets and grading record | product identity; cultivar; harvest date; gross mass; sorted mass; marketable mass; rejects; moisture; grade; field | 称量批次并核对收获、分级和发运记录 | kg fresh product and moisture fraction | each harvest lot | full harvest campaign | farm, block, and lot | 按作物周期和状态汇总，以合格商品量为分母 | calibrated scale, grading record, moisture test |
| `cp_residue_and_fate_records` | `field_cultivation`; `harvest_and_primary_sorting` | residues, soil, clods, and losses | residue and waste log | material; fresh or dry mass; moisture; fate; field or operation; date; treatment or return | 称量或按有记录的方法估算，并与质量平衡核对 | kg wet or dry material | each event or crop cycle | full crop cycle and harvest campaign | farm, block, and operation | 按物理去向汇总，不将产品共产品与废物合并 | waste ticket, field log, dry-matter test, fate record |
| `cp_harvest_operation_records` | `harvest_and_primary_sorting` | harvest fuel and dust | equipment log and operation record | equipment; operation; fuel; run time; throughput; dust observation or measurement; date | 将燃料和运行记录与收获通量核对，有条件时测量粉尘 | L, kg fuel, hours, and kg particulate | each operation or campaign | harvest campaign | farm, block, and equipment | 按作物通量或运行时间分配共享作业 | equipment log, fuel record, measurement or observation |
| `cp_conditioning_yield_records` | `postharvest_conditioning` | conditioning input, output, rejects | batch and grading record | input mass; output mass; trimmings; rejects; moisture; condition; date; batch | 称量输入和输出批次，并与水和废物记录核对 | kg fresh product and moisture fraction | each conditioning batch | conditioning campaign | facility and batch | 按产品状态汇总批次，并按整理输出归一化 | calibrated scale, batch ticket, grade record |
| `cp_conditioning_water_records` | `postharvest_conditioning` | conditioning water and wastewater | water meter and discharge log | water input; reuse; discharge; treatment; meter; batch; date; source | 用水表或批次日志记录，并核对排放和处理量 | m3 | each batch or meter period | conditioning campaign | facility and batch | 按产品批次汇总并披露回用和处理 | meter record, discharge log, treatment ticket |
| `cp_conditioning_energy_records` | `postharvest_conditioning` | conditioning electricity | facility meter and equipment log | electricity; equipment; runtime; batch; cooling setpoint where relevant; date | 按批次通量分配设施电表或设备记录 | kWh | meter period or batch | conditioning campaign | facility and equipment | 按通量或运行时间分配共享能源并披露方法 | meter record, equipment log |
| `cp_packaging_records` | `postharvest_conditioning`; `farm_gate_storage_and_dispatch` | packaging input and waste | packaging issue and return log | material; mass or count; reusable flag; cycles; product mass served; waste or return; date | 称量或计数包装，并核对发放、返还和废弃记录 | kg, count, and cycles | each issue or campaign | conditioning, storage, and dispatch campaign | facility and campaign | 按记录的使用次数和产品质量分摊可重复包装 | supplier record, issue log, return ticket, waste ticket |
| `cp_wastewater_treatment_records` | `postharvest_conditioning` | wastewater treatment service | treatment log or supplier ticket | wastewater volume; treatment route; date; batch; provider; discharge or reuse | 将处理票据与整理排水核对 | m3 | each batch or treatment period | conditioning campaign | facility and provider | 按批次汇总处理量，并分开未处理排放 | treatment ticket, provider record, discharge log |
| `cp_storage_dispatch_records` | `farm_gate_storage_and_dispatch` | storage input, electricity, product output, loss | storage and dispatch register | intake mass; gate mass; storage duration; temperature; electricity; loss; cause; date; gate condition | 核对接收、储存、损失和门发运记录 | kg, kWh, days, and temperature | each lot and storage period | selected storage and dispatch campaign | farm, store, and lot | 按批次汇总并按门产品归一化，披露储存时长 | scale, meter, temperature log, dispatch ticket |
| `cp_dispatch_transport_records` | `farm_gate_storage_and_dispatch` | road freight service | route and load record | origin; destination; distance; vehicle; load; product mass; return leg; date | 核验路线距离和装载记录并计算吨公里 | km, t, and tonne-km | each dispatch route or lot | selected dispatch campaign | route and vehicle | 只汇总到声明门的路线，排除门后的运输 | route record, weigh ticket, carrier record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_marketable_yield` | field and harvest product rows | 商品量是声明分选和整理决定后的合格鲜产品质量；所有活动按 `marketable_output_kg` 归一化。 | `cp_yield_and_quality_records`; harvest tickets; grading records | kg reference product and crop-cycle yield | `fao-ex-act-v9-2022` |
| `calc_dry_matter_conversion` | residues, soil, clods, and moisture-dependent rows | `dry_mass = fresh_mass × (1 − moisture_fraction)`；记录含水率基准，分开鲜重和干重。 | `cp_yield_and_quality_records`; `cp_residue_and_fate_records`; moisture test | kg dry matter | `fao-ex-act-v9-2022`; `ipcc-2019-managed-soils` |
| `calc_nutrient_basis` | fertilizer or soil amendment | `nutrient_mass = product_mass × declared nutrient_fraction`；保留实际产品量和各 N、P、K 或其他养分基准，不用假定产品身份填补缺失含量。 | `cp_nutrient_input_records`; product label; laboratory test | kg product and kg nutrient | `ipcc-2019-managed-soils` |
| `calc_soil_n_emissions` | direct N2O, ammonia, nitrate, phosphate, and liming or urea CO2 | 对采集的氮投入、残体氮、石灰或尿素按所选 IPCC 层级和记录因子计算；披露层级、气候/土壤分层和残体去向，避免重复计算。 | `cp_nutrient_input_records`; `cp_residue_and_fate_records`; selected method factors | kg pollutant per kg marketable product | `ipcc-2019-managed-soils` |
| `calc_water_normalization` | irrigation, withdrawal, conditioning water, and wastewater | `water_per_kg = recorded_volume_m3 / marketable_output_kg`；供水、来源取水、回用和排放保持为不同记录。 | `cp_irrigation_water_records`; `cp_conditioning_water_records`; output records | m3 per kg reference product | `fao-ex-act-v9-2022` |
| `calc_energy_normalization` | fuel and electricity | 只有有燃料身份和低位热值因子时才转换燃料；用商品量归一化燃料或 kWh，并按采集的使用因子分配共享设备。 | field, harvest, conditioning, and storage energy records | L, kg fuel, or kWh per kg reference product | `fao-ex-act-v9-2022` |
| `calc_land_occupation` | land occupation | `area_time_per_kg = cultivated_area × crop_cycle_duration / marketable_output_kg`；披露面积单位、周期和保护地占用。 | `cp_land_and_cycle_records`; `cp_yield_and_quality_records` | m2*year per kg reference product | `fao-ex-act-v9-2022` |
| `calc_mass_balance` | product, reject, residue, wastewater, and storage rows | 每个操作核对：接收质量或水量加投入等于产品输出、废物输出、实测损失和有记录库存变化，且在声明容差内。 | batch, harvest, waste, water, and dispatch records | mass-balance check and normalized rows | `iso-14044-2006` |
| `calc_transport_service` | included dispatch transport | `tonne_km = product_mass_t × one_way_distance_km × declared_load_factor`；只纳入到声明门的路线，并说明返程处理。 | `cp_dispatch_transport_records`; weigh and route records | tonne-km per kg gate product | `fao-ex-act-v9-2022` |
| `calc_reusable_packaging` | packaging input and waste | 按记录的使用次数和产品质量分配可重复包装负荷，并核对返还、丢失和废弃单元。 | `cp_packaging_records`; supplier and return records | kg packaging per kg product and packaging fate | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product, planting material, nutrient products, crop protection, packaging, and waste | 识别作物、可食器官、品种或类型、批次、产品状态和供应商/来源；不能只用宽泛类别名。 | product records, lot labels, supplier documents, identity review |
| `dq_temporal` | all foreground rows | 覆盖一个完整声明作物周期及相关收获或整理批次，说明缺失月份、替代时段和储存时长。 | field log, harvest tickets, meter periods, storage register |
| `dq_geography` | field, water, energy, and transport | 声明农场、地块或设施、国家/地区、生产系统、灌溉来源和纳入路线。 | field register, facility record, meter and route records |
| `dq_measurement` | amounts and conversions | 优先使用校准秤和水表、发票、供应商记录、实验室检测或路线票据；无法直接测量时记录估算和换算因子。 | calibration, invoices, tests, logs, conversion record |
| `dq_completeness` | all included processes and flow types | 对选定过程投入、输出、废物、残体、水、能源、养分产品和直接排放均纳入或明确标记不适用。 | completeness checklist, process map, inventory review |
| `dq_mass_balance` | product and waste rows | 在每个操作核对投入、输出、拒收、残体、废水、储存损失和库存变化，并解释残差。 | batch mass balance and waste-fate records |
| `dq_emissions_method` | elementary emissions | 记录氮形态、养分基准、残体去向、IPCC 层级、因子、接收介质及使用的气候/土壤分层。 | nutrient ledger, residue log, method calculation record |
| `dq_disclosure` | reference flow and published dataset | 披露产品状态、含水率、商品等级、门、边界扩展、分配、代理、推理估算和身份证据缺口。 | dataset metadata, process notes, quality statement |
| `dq_uncertainty` | ranges and modelled estimates | 将暂定推理范围标为可替换的作者估算；在影响决策的范围进入 active 或 published 前，应以审查证据替换。 | range review, site data, source update record |
| `dq_resolution` | all parameterized and unmapped rows | 最终 TIDAS 过程发布前，将每个 Flow Set 选择和未映射实体解析为相容的已验证 UUID、流属性和单位组。 | identity review and final binding audit |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference flow and product outputs | 使用一个 1 kg 鲜重参考流，确认产品身份、可食器官、状态、含水率基准、地理位置、作物周期和声明门齐全。 | `unsd-cpc-3-01259` |
| `validation_process_map` | process map and detailed inventory | 每个 required 过程都有对应详细清单；每个 conditional 过程说明是否纳入，纳入时必须有相应记录。 | `fao-ex-act-v9-2022` |
| `validation_amounts` | every flow row | 每行都要有数量规则、数值来源模式、适用范围、归一化基准、基准类型、证据类型；采集或计算证据必须引用有效采集协议。 | `iso-14044-2006` |
| `validation_mass_balance` | product, waste, residue, and water rows | 操作级质量或水量平衡无法解释、产品交接被重复计入或损失没有去向时，校验失败。 | `iso-14044-2006` |
| `validation_nutrient_emissions` | nutrient and elementary-emission rows | 检查排放计算使用记录的养分产品和声明因子，污染物种类及介质明确，残体或石灰路径没有重复计入。 | `ipcc-2019-managed-soils` |
| `validation_flow_identity` | parameterized and unmapped rows | 仅接受相容的现有 Flow Set 组作为 `parameterized`，或精确已验证 UUID 作为 `fixed`。保留证据缺口覆盖，并拒绝身份证据缺口进入最终 TIDAS 发布。 |  |
| `validation_boundary` | published dataset profile and process selection | 未声明边界扩展时，拒绝农场门后的运输、零售、消费者使用或加工。 | `unsd-cpc-3-01259` |
| `validation_bilingual_alignment` | English and Chinese Markdown | 两种语言中必须保留相同顺序的 process id、row id、rule id、采集协议 id、source id、Flow Set id/version 和受控词汇 token。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`；只有独立审查、完整且身份解析后才可作为 `background_dataset` |
| downstream_use | 声明农场门的鲜根、球茎、根茎、球茎或块茎蔬菜前景作物过程数据集和 lifecyclemodel 投影 |
| allowed_use | 当产品限定信息、地理位置、作物周期、门状态、分配和数据质量披露相符时用于 LCA 建模和汇总；情景比较必须声明情景变化 |
| excluded_use | 加工、腌制、干燥、冷冻、烹制、饲料、种子或活植株产品；无边界扩展的消费者或零售建模；流或单位的发布 |
| required_metadata | reference flow; CPC scope; product identity and edible organ; cultivar or type; farm or block; geography; production system; area and crop cycle; planting and harvest dates; harvested and marketable mass; moisture; nutrient products and nutrient basis; crop protection; irrigation source and volume; fuel and electricity; conditioning, storage, and gate state; packaging; transport; residues and fates; Flow Set selections; identity status; collection coverage; allocation; DQR |
| required_quality_disclosure | 时间和地理覆盖；测量和代理方法；质量平衡；产量、拒收和损失比例；N/P/K 基准；排放层级和因子；水和能源单位；分配；证据缺口或估算行；质量评分或说明 |
| update_trigger | 新审查作物或过程证据；路线、技术、产品状态或门发生重大变化；分类范围修订；Flow Set 或 UUID 身份变化；数据持续超出 QA 范围；或新的产品特定记录替换暂定估算 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-01259` | official_guidance | United Nations Statistics Division, CPC Version 3.0 classification detail for subclass 01259, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/01259 | 产品类别范围、包含示例、分类排除和鲜产品边界背景 |
| `ipcc-2019-managed-soils` | official_guidance | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤 N2O、氨和养分路径、作物残体氮、石灰/尿素 CO2、因子选择和避免重复计算 |
| `fao-ex-act-v9-2022` | official_guidance | FAO, EX-ACT Guidelines, second edition, tool version 9, DOI:10.4060/cc0142en, https://doi.org/10.4060/cc0142en | 作物周期边界、土地占用、产量、水、能源、活动记录和农业数据披露 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 清单一致性、分配、共产品处理、可重复包装分配和质量平衡校验 |
| `fao-stat-crops` | dataset | FAOSTAT Crops and livestock products, Food and Agriculture Organization of the United Nations, https://www.fao.org/faostat/en/#data/QCL | 作物身份、产量和生产背景的可选交叉核对；不替代前景记录 |
