---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.jute-kenaf-and-other-textile-bast-fibres-raw-or-retted-except-flax-true-hemp-and-ramie
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 黄麻、红麻及其他纺织用韧皮纤维，生的或沤制的，亚麻、大麻和苎麻除外

## 1. 范围与适用性

本 PCR 覆盖黄麻、红麻及其他适用纺织用韧皮纤维的管理种植、收获及生产者门准备，交付状态为生纤维或沤制纤维。只要合格产出仍属于生或沤制韧皮纤维，即可纳入申报的整茎沤制、韧皮带沤制、水沤、微生物辅助和机械提取路线。

不包括亚麻、大麻、苎麻、棉、椰壳纤维、剑麻、蕉麻、纱线、织物、纸浆、化学改性纤维和成品纺织品。数据集必须申报物种、植物部位、生或沤制状态、提取路线、含水率基准、等级和生产者交付点。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.jute-kenaf-and-other-textile-bast-fibres-raw-or-retted-except-flax-true-hemp-and-ramie |
| classification_refs | CPC 3.0 `01922`，精确路径 `0 > 01 > 019 > 0192 > 01922` |
| covered_products | 生产者门处生的或沤制的黄麻、红麻及其他适用纺织用韧皮纤维 |
| excluded_products | 亚麻；大麻；苎麻；棉；椰壳纤维；剑麻；蕉麻；纱线；织物；纸浆；化学改性或成品纤维 |
| representative_product | 合格的生黄麻或红麻韧皮纤维或沤制纤维 |
| production_route | 管理种植和收获，随后采用申报的生纤维机械提取，或沤制、提取、洗涤、干燥和分级 |
| market_state | 干燥或以其他方式稳定、已分级并准备在生产者门交付的生或沤制纤维 |

母路线为管理生物生产。整茎沤制、韧皮带沤制、微生物辅助沤制和机械提取属于替代生产与技术路线。只有作为分别计量的分层时才能并存；路线特定的水、能源、处理助剂、产率、废水、残余物和等级必须依据产量加权后才可汇总。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产者交付点合格的生或沤制黄麻、红麻或其他适用纺织用韧皮纤维 |
| How much | 按申报含水率基准计 1,000 kg |
| How well | 申报物种、生或沤制状态、提取路线、含水率、等级及杂质基准；不含剔除和降级纤维 |
| How long or cycle | 一个申报作物周期及归属于交付批次的沤制、提取和调理批次 |
| reference_flow_link | `washing_drying_grading` 的产出 `reference_fibre` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | 黄麻、红麻及其他纺织用韧皮纤维，生的或沤制的 `bcf2ea60-81e8-43cb-879f-ac473e43f521` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；生或沤制；整茎、韧皮带或机械提取路线；生产者门；含水率；等级；杂质；地理和生产期 |
| Binding | 固定（`fixed`） |

## 4. 测量与单位规则

| rule_id | 适用于 | 要求属性 | 要求单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考纤维 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在交付点测量合格纤维并报告含水率；未经明确换算，不得以茎秆质量或绝干质量替代。 |
| `moisture_conversion` | 全部纤维和生物质转移 | 质量分数 | kg 水/kg 湿料 | 保留取样含水率基准，使用批次特定的湿基至申报基准换算。 |
| `batch_linkage` | 沤制、提取、洗涤、干燥和分级 | 批次和批号身份 | batch, lot | 将投入、产出、清洁、返工和剔除物关联到产生它们的批次或时期。 |
| `water_balance` | 沤制与洗涤 | 体积 | m3 | 区分总取水、循环、蒸发和排放。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 申报韧皮纤维作物播种前的已准备农业田地 |
| starting_condition_role | 管理种植的前景起点；前茬和土壤条件作为披露背景 |
| product_classification_scope | CPC 3.0 `01922` 下适用的生或沤制纺织用韧皮纤维 |
| recursive_input_rule | 购入的同类别纤维必须作为单独上游产品追溯，并从前景作物产率中排除 |
| upstream_dataset_requirement | 对种子、养分与植保产品、水、能源载体、处理助剂和运输，采用依据前景记录选择的供应商特定或代表性数据集 |
| disclosure | 物种、品种、地点、作物周期、产率、收获状态、提取/沤制路线、批次模式、水源、干燥路线、含水率基准、等级、残余物、废水和交付点；采用单一期间核算且无储存 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_producer_gate` | 全部路线 | 包括达到生或沤制生产者门状态所需的种植、收获及申报的提取、沤制、洗涤、干燥和分级；不包括纺纱及后续制造。采用单一期间核算且无储存。 | `fao-ijo-jute-retting-1998` |
| `boundary_route_separation` | 替代路线 | 将整茎、韧皮带、微生物辅助和机械路线分别作为计量分层，直至按产量加权汇总。 | `fao-ijo-jute-retting-1998` |
| `boundary_batch_events` | 处理与调理 | 将投入、产出、清洁、返工和剔除物归属于相应批次或生产时期，并防止重复计算共享负担。 | `fao-ijo-jute-retting-1998` |
| `boundary_destination` | 残余物和剔除物 | 按实际去向将每项产出交付记录为预期产品、降级产品、回收材料、还田生物质、废物或排放。 | `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_production` | 韧皮纤维作物种植与收获 | required | all managed-crop routes | managed biological production and independent harvest node | one crop hectare-cycle and harvested stem mass |
| `retting_extraction` | 可选沤制与纤维提取 | conditional | reference product is retted or mechanically extracted fibre | batch mode material treatment and primary conditioning node with an alternative technology route delta | one declared retting or extraction batch |
| `washing_drying_grading` | 洗涤、干燥、稳定化与分级 | required | extracted fibre is delivered as the reference product | preservation, stabilization, grading and hand-off node | 1,000 kg accepted reference fibre |

### 过程: 韧皮纤维作物种植与收获 (`crop_production`)

#### 投入

##### 产品流

###### 申报韧皮纤维作物的播种种子 (`planting_seed`)

记录实际播种种子的物种、品种、发芽率基准和用量。

- 选定流: 黄麻种子，未指定 `d33e2a9b-1868-4489-a4f9-24d6d8cb9052`
- 流属性/单位: Mass / kg
- 绑定: 固定（`fixed`）
- 数量规则: 按申报有效种子基准校正的实测播种量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个种植公顷周期
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crop_cycle`
- 来源: `fao-ijo-jute-retting-1998`
- 数量范围: 播种量 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/ha
  - 基准: 每个种植公顷周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 农业养分综合供应 (`crop_nutrients`)

在一张卡中记录全部矿质和有机肥料、石灰及养分改良剂，再按实际产品和养分组成展开。

- 选定流: 农业养分供应
- 流属性/单位: Mass / kg
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set 版本: `0.3.0`
- 数量规则: 按施用事件计量的产品质量和组成
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个种植公顷周期
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crop_cycle`
- 来源:
- 数量范围: 暂定养分产品校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kg products/ha
  - 基准: 每个种植公顷周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 灌溉水 (`crop_irrigation`)

按水源和事件记录灌溉供水；雨养路线记录为零。

- 选定流: 灌溉水
- 流属性/单位: Volume / m3
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set 版本: `0.2.0`
- Flow Set 组: `irrigation-water`
- 数量规则: 计量供水量或流量乘运行时间
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个种植公顷周期
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crop_cycle`
- 来源:
- 数量范围: 暂定灌溉校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 15000
  - 单位: m3/ha
  - 基准: 每个种植公顷周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 田间作业能源 (`crop_energy`)

记录整地、播种、管理、灌溉和收获实际使用的燃料、电力及合格能源服务。

- 选定流: 田间作业能源载体和服务
- 流属性/单位: Energy / MJ
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: 由能源载体和计量记录换算的能量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每个种植公顷周期
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 基于采集计算 (`calculated_from_collection`)
- 采集协议: `cp_crop_cycle`
- 来源:
- 数量范围: 暂定田间能源校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50000
  - 单位: MJ/ha
  - 基准: 每个种植公顷周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 植保产品 (`crop_protection`)

记录每种实际施用的制剂产品；不得预设默认处理。

- 选定流: 实际施用的植保产品
- 流属性/单位: Mass / kg
- 身份解析: 延后条件总括卡；实际制剂产品须依据前景施用记录选择。初始检索仅返回不兼容的稻作农场汇总代理。
- 数量规则: 按事件计量的制剂产品质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个种植公顷周期
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crop_cycle`
- 来源:
- 数量范围: 暂定植保产品校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg formulated product/ha
  - 基准: 每个种植公顷周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)


##### 废物流


##### 基本流

###### 农业土地占用 (`land_occupation`)

记录作物周期内占用的农业土地。

- 选定流: 农业土地占用 `e1d56d4e-afe3-4b92-bd51-0a21f75e50a8`
- 流属性/单位: Area*time `93a60a56-a3c8-21da-a746-0800200c9a66` / ha*a
- 绑定: 固定（`fixed`）
- 数量规则: 种植面积乘占用年分数
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个种植公顷周期
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 基于采集计算 (`calculated_from_collection`)
- 采集协议: `cp_crop_cycle`
- 来源: `area-time-identity`
- 数量范围: 土地时间物理校验范围
  - 范围角色: 允许范围 (`allowed_range`)
  - 下限: 0
  - 上限: 2
  - 单位: ha*a/ha crop
  - 基准: 每个种植公顷周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `area-time-identity`


#### 产出

##### 产品流

###### 收获的韧皮作物茎秆或韧皮带 (`harvested_stems`)

将收获的完整茎秆或机械剥离韧皮带转入选定的生纤维或沤制路线。

- 选定流: 收获韧皮作物茎秆或韧皮带，内部转移
- 流属性/单位: Mass / kg fresh matter
- 身份解析: 内部前景转移或等级输出；不适用外部数据库 UUID。
- 数量规则: 按物种、田块和批次计量的收获质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个种植公顷周期
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crop_cycle`
- 来源: `fao-ijo-jute-retting-1998`
- 数量范围: 收获质量 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg fresh stems/ha
  - 基准: 每个种植公顷周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源: `fao-ijo-jute-retting-1998`


##### 废物流

###### 田间剔除物与未收集作物材料 (`field_rejects`)

记录被剔除、留田、焚烧、回收或移出的作物材料及去向。

- 选定流: 田间剔除韧皮作物生物质
- 流属性/单位: Mass / kg
- 身份解析: 按实际材料状态和去向延后；初始检索返回木废料、其他作物残余物及无关通用废物，没有兼容的黄麻或红麻剔除物身份。
- 数量规则: 按去向计量或质量平衡估算的剔除生物质
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个种植公顷周期
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 基于采集计算 (`calculated_from_collection`)
- 采集协议: `cp_crop_cycle`
- 来源: `mass-balance-identity`
- 数量范围: 田间剔除比例
  - 范围角色: 允许范围 (`allowed_range`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg harvested stems
  - 基准: 每个种植公顷周期
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`


##### 基本流

###### 管理土壤氮排放 (`soil_n_emissions`)

分别计算实际氮物种和受纳环境；该总括卡不得作为最终交换。

- 选定流: 管理土壤氮排放物种
- 流属性/单位: Mass / kg species
- 身份解析: 延后多交换总括卡；最终交换必须按每种已报告氮物种及受纳环境解析。初始检索返回单一物种行，无法用一个 UUID 表示本卡。
- 数量规则: 依据记录的氮投入和作物残余物进行方法计算
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个种植公顷周期
- 基准类型: 氮投入 (`n_input`)
- 证据类型: 基于采集计算 (`calculated_from_collection`)
- 采集协议: `cp_crop_cycle`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 方法域氮排放校验范围
  - 范围角色: 允许范围 (`allowed_range`)
  - 下限: 0
  - 上限: 1
  - 单位: kg species/kg relevant N input
  - 基准: 每个种植公顷周期
  - 基准类型: 氮投入 (`n_input`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `ipcc-2019-managed-soils`


###### 前景燃料使用的直接燃烧排放 (`direct_combustion_emissions`)

前景机械、泵或干燥设备燃烧燃料时，分别计算排放物质及受纳环境；该总括卡不得作为最终交换。

- 选定流: 前景燃料燃烧排放物种
- 流属性/单位: Mass / kg 物种
- 身份解析: 延后多交换总括卡；最终交换必须按每种计算物质及受纳环境解析。初始检索返回单一燃烧排放行，无法用一个 UUID 表示本卡。
- 数量规则: 依据实际燃料使用、设备和申报清单方法分别计算排放物质
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 合格纤维归一化前每个种植公顷周期
- 基准类型: 燃料清单 (`fuel_inventory`)
- 证据类型: 基于采集计算 (`calculated_from_collection`)
- 采集协议: `cp_crop_cycle`
- 来源: `ipcc-2006-mobile-combustion`
- 数量范围: 燃料碳与污染物方法域校验范围
  - 范围角色: 允许范围 (`allowed_range`)
  - 下限: 0
  - 上限: 10
  - 单位: kg species/kg fuel
  - 基准: 每千克已记录前景燃料
  - 基准类型: 燃料清单 (`fuel_inventory`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `ipcc-2006-mobile-combustion`

### 过程: 可选沤制与纤维提取 (`retting_extraction`)

#### 投入

##### 产品流

###### 接收的收获茎秆或韧皮带 (`retting_feed`)

接收内部批次并保留物种、鲜重、含水率和路线。

- 选定流: 收获韧皮作物茎秆或韧皮带，内部转移
- 流属性/单位: Mass / kg fresh matter
- 身份解析: 内部前景转移或等级输出；不适用外部数据库 UUID。
- 数量规则: 实测批次投入质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个沤制或提取批次
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_retting_batch`
- 来源: `fao-ijo-jute-retting-1998`
- 数量范围: 批次进料 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: kg/batch
  - 基准: 每个沤制或提取批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源: `fao-ijo-jute-retting-1998`

###### 沤制与洗涤工艺水 (`retting_water`)

按水源、批次和回用循环记录添加或取用的水。

- 选定流: 沤制与洗涤工艺水
- 流属性/单位: Volume / m3
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set 版本: `0.2.0`
- Flow Set 组: `process-water`
- 数量规则: 计量或计算的总补充水量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个沤制或提取批次
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_retting_batch`
- 来源: `fao-ijo-jute-retting-1998`
- 数量范围: 暂定沤制用水校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: m3/t feed
  - 基准: 每个沤制或提取批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源: `fao-ijo-jute-retting-1998`

###### 沤制与提取能源 (`retting_energy`)

记录剥皮、机械脱胶、泵送、搅动和提取所用能源载体与电力。

- 选定流: 沤制与提取能源载体
- 流属性/单位: Energy / MJ
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: 由能源载体和计量记录换算的能量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每个沤制或提取批次
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 基于采集计算 (`calculated_from_collection`)
- 采集协议: `cp_retting_batch`
- 来源:
- 数量范围: 暂定沤制能源校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: MJ/t feed
  - 基准: 每个沤制或提取批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 沤制菌剂或处理助剂 (`retting_aids`)

记录实际使用的每种微生物培养物、酶、碱或漂白助剂；无助剂水沤时可为零。

- 选定流: 实际施用的沤制菌剂或处理助剂
- 流属性/单位: Mass / kg
- 身份解析: 延后条件总括卡；实际培养物、酶、碱或漂白产品须依据批次记录选择。初始检索返回收获茎秆及无关酶法食品过程行。
- 数量规则: 按批次计量的产品质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个沤制或提取批次
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_retting_batch`
- 来源: `fao-ijo-jute-retting-1998`
- 数量范围: 暂定处理助剂校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/t feed
  - 基准: 每个沤制或提取批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源: `fao-ijo-jute-retting-1998`

###### 节点间货运 (`inter_node_transport`)

仅记录纳入前景场址之间的运输。

- 选定流: 货物运输服务
- 流属性/单位: Transport service / t*km
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set 版本: `0.2.0`
- 数量规则: 按方式计算装载质量乘路线距离
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准: 每个转移批次
- 基准类型: 运输服务 (`transport_service`)
- 证据类型: 基于采集计算 (`calculated_from_collection`)
- 采集协议: `cp_retting_batch`
- 来源:
- 数量范围: 暂定节点间运输校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: t*km/t feed
  - 基准: 每个转移批次
  - 基准类型: 运输服务 (`transport_service`)
  - 证据类型: 推理估算 (`reasoned_estimate`)


##### 废物流


##### 基本流


#### 产出

##### 产品流

###### 提取的生韧皮纤维或沤制韧皮纤维 (`extracted_fibre`)

将提取纤维转入洗涤、干燥和分级，并保留含水率及沤制状态。

- 选定流: 提取韧皮纤维，内部转移
- 流属性/单位: Mass / kg
- 身份解析: 内部前景转移或等级输出；不适用外部数据库 UUID。
- 数量规则: 按批次计量的湿纤维质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个沤制或提取批次
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_retting_batch`
- 来源: `fao-ijo-jute-retting-1998`
- 数量范围: 纤维产率质量平衡范围
  - 范围角色: 允许范围 (`allowed_range`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg feed
  - 基准: 每个沤制或提取批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `fao-ijo-jute-retting-1998`


##### 废物流

###### 沤制废水 (`retting_wastewater`)

记录废水体积和去向；表征相关耗氧量、固体、养分和处理。

- 选定流: 沤制废水
- 流属性/单位: Volume / m3
- 身份解析: 按废水组成、处理状态和去向延后；初始检索返回特定工业或市政废水路线，均不匹配黄麻沤制。
- 数量规则: 实测排放量扣除有记录的回用与蒸发
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个沤制或提取批次
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 基于采集计算 (`calculated_from_collection`)
- 采集协议: `cp_retting_batch`
- 来源: `water-balance-identity`
- 数量范围: 废水平衡校验范围
  - 范围角色: 允许范围 (`allowed_range`)
  - 下限: 0
  - 上限: 100
  - 单位: m3/t feed
  - 基准: 每个沤制或提取批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `water-balance-identity`

###### 木质芯、树皮及提取残余物 (`retting_residues`)

根据实际去向，将各残余物记录为预期共产品、回收材料、还田生物质或废物。

- 选定流: 黄麻或红麻提取残余物
- 流属性/单位: Mass / kg
- 身份解析: 按分离材料和去向延后；初始检索返回椰壳、木树皮和其他无关残余物，不是黄麻或红麻提取残余物。
- 数量规则: 按去向计量的残余物质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个沤制或提取批次
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_retting_batch`
- 来源: `mass-balance-identity`
- 数量范围: 残余物质量平衡范围
  - 范围角色: 允许范围 (`allowed_range`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg feed
  - 基准: 每个沤制或提取批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`


##### 基本流


### 过程: 洗涤、干燥、稳定化与分级 (`washing_drying_grading`)

#### 投入

##### 产品流

###### 接收用于调理的提取纤维 (`conditioning_feed`)

接收内部纤维批次；生的未沤制路线应接收机械分离纤维并申报路线。

- 选定流: 提取韧皮纤维，内部转移
- 流属性/单位: Mass / kg
- 身份解析: 内部前景转移或等级输出；不适用外部数据库 UUID。
- 数量规则: 实测来料纤维质量和含水率
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个调理批次
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 来源:
- 数量范围: 调理进料 QA 校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2000
  - 单位: kg/t accepted fibre
  - 基准: 每个调理批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 最终洗涤水 (`final_wash_water`)

记录纤维提取后使用的清洁水及回用循环。

- 选定流: 最终洗涤工艺水
- 流属性/单位: Volume / m3
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set 版本: `0.2.0`
- Flow Set 组: `process-water`
- 数量规则: 计量或计算的补充水量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个调理批次
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 来源: `fao-ijo-jute-retting-1998`
- 数量范围: 暂定最终洗涤校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: m3/t accepted fibre
  - 基准: 每个调理批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源: `fao-ijo-jute-retting-1998`

###### 干燥与调理能源 (`conditioning_energy`)

记录机械操作、强制干燥或水分调理能源；日晒干燥不记录购入热量。

- 选定流: 干燥与调理能源载体
- 流属性/单位: Energy / MJ
- 绑定: 参数化 (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: 由实际能源载体和计量记录换算的能量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每个调理批次
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 基于采集计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_lot`
- 来源:
- 数量范围: 暂定调理能源校验范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: MJ/t accepted fibre
  - 基准: 每个调理批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)


##### 废物流


##### 基本流


#### 产出

##### 产品流

###### 合格生韧皮纤维或沤制韧皮纤维 (`reference_fibre`)

将生产者交付点合格的黄麻、红麻或其他适用韧皮纤维记录为预期产出。

- 选定流: 黄麻、红麻及其他纺织用韧皮纤维，生的或沤制的 `bcf2ea60-81e8-43cb-879f-ac473e43f521`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定: 固定 (`fixed`)
- 数量规则: 按申报含水率和等级计量的合格质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1,000 kg 参考产品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 来源:
- 数量范围: 参考流恒等范围
  - 范围角色: 允许范围 (`allowed_range`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1,000 kg 参考产品
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

###### 降级后送往申报市场的纤维 (`downgraded_fibre`)

将该可销售降级等级记录为预期产出，并与合格参考纤维及废物分别记录。

- 选定流: 降级韧皮纤维，内部等级输出
- 流属性/单位: Mass / kg
- 身份解析: 内部前景转移或等级输出；不适用外部数据库 UUID。
- 数量规则: 按等级和去向计量的降级质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个调理批次
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 来源: `mass-balance-identity`
- 数量范围: 降级纤维平衡范围
  - 范围角色: 允许范围 (`allowed_range`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg incoming fibre
  - 基准: 每个调理批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`


##### 废物流

###### 剔除纤维与分级杂物 (`grading_rejects`)

按返工、回收、丢弃或处理去向记录剔除或不合格材料。

- 选定流: 剔除韧皮纤维与分级杂物
- 流属性/单位: Mass / kg
- 身份解析: 按纤维状态和处理去向延后；初始检索返回帘线、织物和棉废物，没有兼容的生韧皮纤维分级剔除物。
- 数量规则: 按处置方式计量的剔除质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个调理批次
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 来源: `mass-balance-identity`
- 数量范围: 剔除物质量平衡范围
  - 范围角色: 允许范围 (`allowed_range`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg incoming fibre
  - 基准: 每个调理批次
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`


##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_first` | 纤维与预期共产品 | 首先按批次保持物理质量和含水率平衡。纤维、麻秆、种子或其他产出属于预期产品时，若可分别计量则优先细分；否则报告并论证选定的物理或经济关系。 | `mass-balance-identity` |
| `allocation_residue_destination` | 麻秆、树皮、细料和作物残余物 | 未申报替代模型时不得计入避免负担。还田生物质、出售共产品和废物处理属于不同去向。 | `mass-balance-identity` |
| `allocation_rework` | 返工和剔除物 | 将返工材料及额外负担归回产生它的批次；从合格参考产出中排除降级和剔除质量，并防止重复计算。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_cycle` | `crop_production` | 作物投入、收获茎秆、剔除物和土壤排放 | 田间日志、发票、仪表、收获记录 | 田块、物种、品种、面积、日期、种子、养分产品及组成、灌溉、能源、植保、收获与残余物 | 核对发票、施用日志、仪表和收获称重 | 原始单位及 kg、m3、MJ、ha | 每次作业和收获批次 | 完整申报作物周期 | 每个纳入田块 | 按田块和路线求和，再通过合格纤维产率归一化 | 发票、校准秤/仪表、施用和收获日志 |
| `cp_retting_batch` | `retting_extraction` | 沤制/提取批次投入与产出 | 批次单、仪表、称重单、实验室结果 | 进料质量/含水率、路线、时间、水、能源、助剂、纤维、废水、残余物及去向 | 批次读数及质量/水量核对 | kg、m3、MJ、t*km | 每批 | 供应参考批次的全部批次 | 每个纳入沤制/提取场址 | 仅汇总兼容路线批次；其他情况按产量加权 | 批次标识、仪表/秤校验、水质及去向证据 |
| `cp_conditioning_lot` | `washing_drying_grading` | 洗涤、干燥、等级与交付 | 批次单、仪表、称重单、等级测试 | 来料质量/含水率、水、能源、干燥路线、合格等级、降级品、剔除物及去向 | 批次计量与核对 | kg、m3、MJ | 每批 | 报告期全部批次 | 每个纳入调理场址 | 将合格产出按申报含水率归一到 1,000 kg | 秤/仪表校准、含水率与等级测试、发运记录 |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_basis` | 材料转移 | 申报基准质量 = 湿质量 ×（1 − 实测含水分数）/（1 − 申报含水分数） | 湿质量、实测含水率、申报含水率 | 可比材料质量 | `mass-balance-identity` |
| `calc_route_yield` | 作物至合格纤维 | 合格纤维产率 = 按申报基准的合格纤维质量/种植面积；保留中间茎秆和提取产率 | 合格纤维、收获茎秆、面积 | kg 合格纤维/ha 及过程产率 | `mass-balance-identity` |
| `calc_water_balance` | 沤制与洗涤 | 排放 = 取水 + 来料水 − 蒸发 − 产品留水 − 回用期末库存 | 水量和含水率记录 | 废水体积 | `water-balance-identity` |
| `calc_n_emissions` | 管理土壤 | 采用申报清单方法，依据记录的氮活动数据计算物种和受纳环境 | 养分产品、残余物、方法因子 | 分列氮交换 | `ipcc-2019-managed-soils` |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考批次 | 物种、生/沤制状态、路线、含水率基准和等级必须能从田块与批次追溯到发运。 | 田块、批次、批号和发运标识 |
| `dq_completeness` | 全部节点 | 核对合格纤维、共产品、降级材料、剔除物、废水和残余物；解释每项材料差额。 | 签署的质量和水量平衡 |
| `dq_temporal` | 报告期 | 覆盖一个完整作物周期和供应产出的全部处理批次；披露任何替代时期。 | 带日期日志和覆盖说明 |
| `dq_route` | 替代路线 | 汇总前报告路线特定样本数、质量和负担。 | 按路线分层的记录 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | severity |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | UUID、质量属性、质量单位组、产品状态和必要限定条件必须与申报合格纤维一致。 | error |
| `validate_flow_bindings` | 全部卡片 | 每张参数化卡必须依据实际前景身份解析为一个具体兼容 UUID，并与审计中的未解析或内部状态保持一致。 | error |
| `validate_ranges` | 全部卡片 | 每张英文、中文和结构化卡必须且只能包含一个完整范围，其角色、上下限、单位、基准、基准类型和证据类型一致。 | error |
| `validate_route_balance` | 每条路线和批次 | 含水率换算后，投入质量必须与合格品、降级品、共产品、残余物、剔除物及实测损失平衡。 | error |
| `validate_rework` | 剔除物与返工 | 返工必须关联产生它的节点，不得同时作为新投入和合格产出重复计算。 | error |

## 10. 发布数据集配置

| 字段 | 值 |
| --- | --- |
| dataset_role | 生的或沤制适用韧皮纤维前景生产数据集 |
| downstream_use | `secondary_dataset`；审核后可作 `background_dataset` |
| allowed_use | 与物种、路线、状态、含水率、等级、地理和时期匹配的纤维产品系统 |
| excluded_use | 无单独模型时不得用于亚麻、大麻、苎麻、棉、椰壳纤维、剑麻、蕉麻、纱线、织物、纸浆或化学改性纤维 |
| required_metadata | 物种；品种；田块与场址；作物周期；生/沤制及提取路线；批次模式；含水率；等级；水和能源路线；共产品及废物去向 |
| required_quality_disclosure | 时间、地理和技术代表性；路线覆盖；实测与估算比例；质量/水量闭合；未解析身份 |
| update_trigger | 品种、路线、水源、沤制助剂、提取/干燥技术、等级规格、产率、分配或背景身份发生重大变化 |

## 11. 数据来源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `fao-ijo-jute-retting-1998` | official_guidance | FAO 和国际黄麻组织，《Improved Retting and Extraction of Jute: Project Findings and Recommendations》，罗马，1998，https://www.fao.org/fishery/docs/CDrom/aquaculture/a0845t/volume2/docrep/field/381307.htm | 路线分解、收获、分选、沤制、提取、洗涤和立即干燥 |
| `ipcc-2019-managed-soils` | method_factor | IPCC，《2019 Refinement to the 2006 IPCC Guidelines》，第 4 卷第 11 章 | 管理土壤氮排放计算 |
| `ipcc-2006-mobile-combustion` | method_factor | IPCC，《2006 Guidelines for National Greenhouse Gas Inventories》，第 2 卷第 3 章 | 依据前景燃料使用计算直接燃烧排放 |
| `mass-balance-identity` | method_factor | 质量守恒恒等式 | 质量平衡、产率、分配和剔除物验证 |
| `water-balance-identity` | method_factor | 过程水量平衡恒等式 | 沤制和洗涤水核对 |
| `area-time-identity` | method_factor | 占用面积乘时间 | 土地占用计算 |
