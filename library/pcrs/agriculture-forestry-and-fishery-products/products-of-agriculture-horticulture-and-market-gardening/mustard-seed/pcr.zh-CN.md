---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mustard-seed
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 芥菜籽

## 1. 范围与适用性

本 PCR 覆盖以种子为收获物的芥菜受控栽培、独立收获、清选、干燥或其他稳定化、分级，以及合格种子在生产者或初级处理方节点的交接。对芥菜属其他物种的适用须声明物种、品种、路线、水分基准、等级、地域和交接点。排除榨油、油脂精炼、饼粕、芥末粉、调味品制造、销售后的种子处理服务、长期仓储及交接点后的配送。雨养/灌溉、人工/机械收获、自然/机械干燥须作为有证据的路线选择记录；仅在记录份额和分别记录投入时方可汇总。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mustard-seed |
| classification_refs | CPC 3.0 01442 (exact) |
| covered_products | 收获并处理、在生产者或初级处理方交接且作为油料销售的芥菜籽，主要为 Brassica juncea |
| excluded_products | 芥子油、粗油或精炼油、芥菜籽饼粕、芥末粉、调制芥末和其他调味品、营养器官产品 |
| representative_product | 洁净、稳定化并可交接的 B. juncea 种子 |
| production_route | 受控栽培 → 收获和脱粒 → 清选和干燥/稳定化 → 分级；灌溉、机械作业和干燥技术是父活动的路线差异 |
| market_state | 在榨油、制粉或调味品制造前，生产者/处理方节点的散装初级处理种子 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在声明的生产者或初级处理方交接点验收的初级处理芥菜籽 |
| How much | 1 kg，按声明水分的收到状态种子 |
| How well | 声明物种/品种、合格等级、水分及方法、杂质基准、用途、地域、生产路线和交接点 |
| How long or cycle | 一个声明的作物周期，处理批次连接至收获批次 |
| reference_flow_link | `mustard_seed_accepted` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Seed of B. juncea `d6490f83-abd7-47ff-990f-3cd7ae018dfa` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种和品种；播种或商品用途；合格等级；收到状态水分和测试方法；杂质基准；国家/地区；雨养或灌溉；收获方式；干燥路线；生产者/处理方交接；Production mix, at plant |
| Binding | `fixed` |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和种子状态质量平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 同时报告收到状态质量和实测水分；按 dry_mass = wet_mass × (1 − moisture_fraction) 换算并保留原始值。 |
| `area_yield` | 栽培和收获归一 | Mass and area | kg/ha | 分别记录栽培和收获面积；合格产量仅采用合格参考产品。 |
| `energy_consistency` | 机械和处理能源 | Energy or carrier property | MJ or kWh | 保留能源载体和数量；无明确换算基准时不得合并燃料和电力。 |

## 5. 系统边界

边界始于备耕土地以及进入受控芥菜作物的种子、养分、水、植保和机械服务；包括管理、收获脱粒、清选、干燥或稳定化、分级、节点内返工和合格种子交接。记录残余物、田间损失、清除杂质、降级种子和拒收物。排除油/饼粕/调味品制造和下游配送。

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | 作物周期开始时的备耕田块，并披露前茬/土地状态和种子来源 |
| starting_condition_role | 受控生物生产的进入条件 |
| product_classification_scope | CPC 3.0 01442 芥菜籽；分类不替代物种和市场状态限定 |
| recursive_input_rule | 同类播种种子作为具有供应方数据集或前景来源的上游投入，不在产出数据集中递归创建 |
| upstream_dataset_requirement | 种子、养分、能源、灌溉、植保及其他外购服务采用供应方特定或区域代表性数据 |
| disclosure | 披露前茬/土地状态、物种/品种、周期、地域、灌溉、收获、干燥、水分/等级门、返工路径和上游数据集 |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_managed_crop` | 栽培至交接 | 纳入管理投入、收获、清选、稳定化和分级；排除榨油、油/饼粕和调味品制造。 | `niphm-mustard-ipm`; `agmarknet-mustard-postharvest` |
| `boundary_route_delta` | 替代路线 | 把雨养/灌溉、人工/机械和自然/机械干燥作为父活动差异；单批次互斥路线不得合并。 | `nfsm-oilseeds-practices-2018`; `niphm-mustard-ipm` |
| `boundary_soil_emissions` | 受控土壤排放 | 按声明方法计算肥料、残余物、尿素和石灰相关基本流，并防止移出或焚烧残余物重复计算。 | `ipcc-2019-managed-soils` |
| `boundary_conditioning_gate` | 清选、干燥、稳定化和分级 | 保留前后质量和水分、合格等级、降级、拒收、杂质及交接；超出稳定化的储存须单独建模。 | `agmarknet-mustard-postharvest` |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_cultivation` | 芥菜受控栽培 | `required` | 一个声明周期；按田块/作业期记录 | 生产成熟作物并记录管理投入 | kg raw-seed equivalent; ha |
| `harvest_capture` | 收获、脱粒与田间收集 | `required` | 独立交接收集种子、残余物和损失 | 成熟作物转为原籽 | kg raw seed |
| `clean_dry_stabilize` | 清选、干燥与稳定化 | `required` | 批次或连续期间；干燥路线须声明 | 从原籽到预备状态的初级处理；干燥是技术差异 | kg stabilized seed |
| `grade_handoff` | 分级与生产者/初级处理方交接 | `required` | 核对合格、降级和拒收状态 | 生成参考产品及各去向 | kg accepted seed |

### 过程：芥菜受控栽培 (`managed_cultivation`)

按田块和作物周期索引的田间批次生产；管理投入与产出归属于该周期。

#### 输入

##### 产品流

###### 芥菜播种种子 (`planting_seed`)

同类上游种子投入；保留供应方和播种用途限定。

- 选定流: Seed of B. juncea `d6490f83-abd7-47ff-990f-3cd7ae018dfa`
- 流属性/单位: Mass / kg
- Binding: `fixed`
- 数量规则: 计量的田间领用种子
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每公顷栽培面积和作物周期
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_cultivation_records`
- 来源: `nfsm-oilseeds-practices-2018`
- 数量范围: 芥菜播种量
  - 范围角色: 典型范围（`typical_range`）
  - 下限: 4
  - 上限: 5
  - 单位: kg/ha
  - 基准: 每公顷栽培面积
  - 基准类型: Crop cycle (`crop_cycle`)
  - 证据类型: External source (`external_source`)
  - 来源: `nfsm-oilseeds-practices-2018`

###### 肥料和养分供应 (`nutrient_supply`)

一张合并卡覆盖矿质、有机肥料和养分改良剂；按前景成分展开具体交换。

- 选定流: Agricultural nutrient supply
- 流属性/单位: Mass / kg product and kg nutrient
- Binding: `parameterized`
- Flow Set: flow-set.agricultural-nutrient-supply
- Flow Set version: 0.3.0
- 数量规则: 计量产品质量乘以供应方养分组成
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每公顷栽培面积，再按每 kg 合格种子归一
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_cultivation_records`
- 来源: `nfsm-oilseeds-practices-2018`; `ipcc-2019-managed-soils`
- 数量范围: 申报施氮量
  - 范围角色: 典型范围（`typical_range`）
  - 下限: 0
  - 上限: 80
  - 单位: kg N/ha
  - 基准: 每公顷栽培面积；以土壤测试建议为准
  - 基准类型: Crop cycle (`crop_cycle`)
  - 证据类型: External source (`external_source`)
  - 来源: `nfsm-oilseeds-practices-2018`

###### 灌溉水供应 (`irrigation_water`)

仅适用于灌溉路线；降雨不作为该产品投入。

- 选定流: Irrigation water supply
- 流属性/单位: Volume / m3
- Binding: `parameterized`
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Flow Set group: irrigation-water
- 数量规则: 按事件计量取水或供水；经核实的雨养路线为零
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每公顷栽培面积，再按每 kg 合格种子归一
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_cultivation_records`
- 来源: `nfsm-oilseeds-practices-2018`
- 数量范围: 灌溉量暂定筛选范围
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 5000
  - 单位: m3/ha
  - 基准: 每公顷栽培面积；以前景记录为准
  - 基准类型: Crop cycle (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 植保产品 (`crop_protection_products`)

按记录展开各有效成分或制剂。初检未得到适用于所有场址的唯一身份，因此本卡保持未解析。

- 选定流: Crop-protection product as recorded
- 流属性/单位: Mass / kg
- 数量规则: 计量领用质量并与施用记录核对
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: 每公顷栽培面积，再按每 kg 合格种子归一
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_cultivation_records`
- 来源: `niphm-mustard-ipm`
- 数量范围: 植保产品暂定筛选范围
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 50
  - 单位: kg product/ha
  - 基准: 每公顷栽培面积；并非推荐施用量
  - 基准类型: Crop cycle (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 田间机械能源 (`cultivation_energy`)

按实际田间作业和泵送所用燃料或电力展开。

- 选定流: Energy supply for field machinery and pumping
- 流属性/单位: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Flow Set group: mobile-machinery-fuel
- 数量规则: 按作业计量能源载体数量
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: 每公顷栽培面积，再按每 kg 合格种子归一
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_cultivation_records`
- 数量范围: 栽培能源暂定筛选范围
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 10000
  - 单位: MJ/ha
  - 基准: 每公顷栽培面积
  - 基准类型: Crop cycle (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入收获的成熟芥菜作物 (`mature_crop`)

连接栽培与收获的内部前景状态；不需要外部数据库身份。

- 选定流: Mature standing mustard crop, internal foreground state
- 流属性/单位: Mass / kg raw-seed equivalent
- 数量规则: 由收集种子加计量田间损失计算
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每个田块和作物周期
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_harvest_mass_balance`
- 数量范围: 成熟作物转移核对
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 1
  - 上限: 2
  - 单位: kg raw-seed equivalent/kg captured seed
  - 基准: 每 kg 已收集原籽；暂定
  - 基准类型: Crop cycle (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 栽培残余物与作物损失 (`cultivation_residues`)

在声明留田、移出、焚烧、回收或处置前保持内部/延后状态。

- 选定流: Cultivation residue and crop loss, internal/deferred disposition
- 流属性/单位: Mass / kg dry matter
- 数量规则: 按去向计量或计算干物质
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每作物周期和每 kg 合格种子
- 基准类型: Crop cycle (`crop_cycle`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_cultivation_records`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 栽培残余物暂定筛选范围
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 10
  - 单位: kg dry matter/kg accepted seed
  - 基准: 每 kg 合格种子
  - 基准类型: Crop cycle (`crop_cycle`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### 受控土壤基本流排放 (`managed_soil_emissions`)

按声明方法计算肥料、残余物、尿素和石灰产生的分物种、分环境介质排放。本伞形卡保持未解析，因为一次初检尝试未能完成，发布具体数据集前须展开各排放物种。

- 选定流: 受控土壤排放，按物种和环境介质分别记录
- 流属性/单位: Mass / kg emission
- 数量规则: 依据采集的养分、残余物、尿素和石灰记录以及声明的方法和因子计算
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 合格芥菜籽
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_cultivation_records`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 受控土壤排放暂定筛选范围
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.1
  - 单位: kg emission/kg accepted seed
  - 基准: 每 kg 合格种子；宽泛暂定筛选，以方法计算结果为准
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

### 过程：收获、脱粒与田间收集 (`harvest_capture`)

该节点独立设置，因为它把田间作物转为已收集种子，并单独决定残余物和落粒损失。

#### 输入

##### 产品流

###### 来自栽培的成熟作物 (`mature_crop_input`)

携带田块和作物周期身份的内部转移。

- 选定流: Mature standing mustard crop, internal foreground state
- 流属性/单位: Mass / kg raw-seed equivalent
- 数量规则: 等于关联的 mature_crop 产出
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每收获批次
- 基准类型: Process output (`process_output`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_harvest_mass_balance`
- 来源: `iso-14044-2006`
- 数量范围: 内部转移相等范围
  - 范围角色: 允许范围（`allowed_range`）
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg linked output
  - 基准: 每单位关联栽培产出
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `iso-14044-2006`

###### 收获机械能源 (`harvest_energy`)

记录所选路线切割、联合收获和脱粒的燃料或电力。

- 选定流: Energy supply for harvest and threshing
- 流属性/单位: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- Flow Set group: mobile-machinery-fuel
- 数量规则: 按作业和批次计量能源载体
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: 每 kg 已收集原籽
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_harvest_mass_balance`
- 数量范围: 收获能源暂定筛选范围
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 5
  - 单位: MJ/kg raw seed
  - 基准: 每 kg 已收集原籽
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已收集芥菜原籽 (`raw_seed`)

保留批次和水分并传递至初级处理的内部状态。

- 选定流: Raw collected mustard seed, internal foreground state
- 流属性/单位: Mass / kg
- 数量规则: 收获交接时计量批次质量
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每收获批次
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_harvest_mass_balance`
- 数量范围: 原籽收集比例
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0.5
  - 上限: 1
  - 单位: kg/kg mature-crop equivalent
  - 基准: 每 kg 成熟作物原籽当量；暂定
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 田间残余物与落粒损失 (`harvest_loss`)

按去向区分留田、移出和焚烧残余物以及种子损失。

- 选定流: Harvest residue and seed loss, internal/deferred disposition
- 流属性/单位: Mass / kg dry matter or kg seed
- 数量规则: 按物料和去向计算质量平衡差
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每收获批次
- 基准类型: Process output (`process_output`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_harvest_mass_balance`
- 来源: `niphm-mustard-ipm`; `ipcc-2019-managed-soils`
- 数量范围: 收获损失暂定筛选范围
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.5
  - 单位: kg seed equivalent/kg captured seed
  - 基准: 每 kg 已收集原籽
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 基本流

### 过程：清选、干燥与稳定化 (`clean_dry_stabilize`)

收获原籽转为达到声明水分的洁净稳定籽；自然干燥与机械干燥为不同路线。

#### 输入

##### 产品流

###### 来自收获的原籽 (`raw_seed_input`)

保留收获批次、质量、水分和杂质数据的内部转移。

- 选定流: Raw collected mustard seed, internal foreground state
- 流属性/单位: Mass / kg
- 数量规则: 等于关联的 raw_seed 产出
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每处理批次
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 来源: `iso-14044-2006`
- 数量范围: 内部原籽转移相等范围
  - 范围角色: 允许范围（`allowed_range`）
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg linked output
  - 基准: 每单位关联收获产出
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `iso-14044-2006`

###### 初级处理能源 (`conditioning_energy`)

按实际电力、燃料或热展开；经核实的自然干燥无外购干燥能源。

- 选定流: Energy supply for cleaning and drying
- 流属性/单位: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- 数量规则: 按批次或连续期间计量能源载体
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: 每 kg 稳定化种子
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 数量范围: 初级处理能源暂定筛选范围
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 5
  - 单位: MJ/kg stabilized seed
  - 基准: 每 kg 稳定化种子
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

###### 清选工艺用水 (`conditioning_water`)

仅适用于湿法清选；经核实的干法清选工艺用水为零。

- 选定流: Process water for seed cleaning
- 流属性/单位: Volume / m3
- Binding: `parameterized`
- Flow Set: flow-set.water-use
- Flow Set version: 0.2.0
- Flow Set group: process-water
- 数量规则: 按批次计量供水量
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每 kg 稳定化种子
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 数量范围: 清选用水暂定筛选范围
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.02
  - 单位: m3/kg stabilized seed
  - 基准: 每 kg 稳定化种子
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 稳定化芥菜籽 (`stabilized_seed`)

达到声明水分的洁净种子作为内部状态交付分级。

- 选定流: Stabilized mustard seed, internal foreground state
- 流属性/单位: Mass / kg
- 数量规则: 计量处理后的产出质量和水分
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每处理批次
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 来源: `agmarknet-mustard-postharvest`
- 数量范围: 稳定化种子水分
  - 范围角色: 典型范围（`typical_range`）
  - 下限: 0
  - 上限: 8
  - 单位: percent wet basis
  - 基准: 短期储存或交接时
  - 基准类型: Process output (`process_output`)
  - 证据类型: External source (`external_source`)
  - 来源: `agmarknet-mustard-postharvest`

##### 废物流

###### 清除杂质与处理损失 (`conditioning_rejects`)

分别记录杂质、粉尘和不合格种子；返工仅回到本节点一次。

- 选定流: Conditioning rejects, internal/deferred disposition
- 流属性/单位: Mass / kg
- 数量规则: 计量清除量加质量平衡损失，但不含计量除水
- 数值来源模式: Calculated value (`calculated_value`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每处理批次
- 基准类型: Process output (`process_output`)
- 证据类型: Calculated from collection (`calculated_from_collection`)
- 采集协议: `cp_conditioning_records`
- 数量范围: 处理拒收物暂定筛选范围
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.25
  - 单位: kg/kg raw seed input
  - 基准: 每 kg 原籽投入
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 基本流

### 过程：分级与生产者/初级处理方交接 (`grade_handoff`)

每个批次或运行在交接前核对合格、降级、返工和拒收状态。

#### 输入

##### 产品流

###### 用于分级的稳定化种子 (`stabilized_seed_input`)

保留水分、杂质和批次身份的内部转移。

- 选定流: Stabilized mustard seed, internal foreground state
- 流属性/单位: Mass / kg
- 数量规则: 等于关联的 stabilized_seed 产出
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每分级批次或运行
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grading_handoff`
- 来源: `iso-14044-2006`
- 数量范围: 内部稳定化种子转移相等范围
  - 范围角色: 允许范围（`allowed_range`）
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg linked output
  - 基准: 每单位关联处理产出
  - 基准类型: Process output (`process_output`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `iso-14044-2006`

###### 分级能源 (`grading_energy`)

按筛分、输送和换线清洁所用实际能源展开。

- 选定流: Energy supply for grading
- 流属性/单位: Energy / MJ or kWh
- Binding: `parameterized`
- Flow Set: flow-set.energy-supply
- Flow Set version: 0.2.0
- 数量规则: 按分级运行计量能源载体
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Technology-specific (`technology_specific`)
- 归一化基准: 每 kg 合格种子
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grading_handoff`
- 数量范围: 分级能源暂定筛选范围
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1
  - 单位: MJ/kg accepted seed
  - 基准: 每 kg 合格种子
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格芥菜籽 (`mustard_seed_accepted`)

生产者或初级处理方交接处的参考产品；不含降级和拒收物料。

- 选定流: Seed of B. juncea `d6490f83-abd7-47ff-990f-3cd7ae018dfa`
- 流属性/单位: Mass / kg
- Binding: `fixed`
- 数量规则: 在声明水分和等级下计量合格质量
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: 1 kg 合格芥菜籽
- 基准类型: Reference flow (`reference_flow`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grading_handoff`
- 来源: `agmarknet-mustard-postharvest`
- 数量范围: 参考流相等范围
  - 范围角色: 允许范围（`allowed_range`）
  - 下限: 1
  - 上限: 1
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: Reference flow (`reference_flow`)
  - 证据类型: Method formula (`method_formula`)
  - 来源: `iso-14044-2006`

###### 降级芥菜籽 (`downgraded_seed`)

在依据前景证据确定替代去向数据集前保持内部/延后产品状态。

- 选定流: Downgraded mustard seed, internal/deferred destination
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量降级质量
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Product-specific (`product_specific`)
- 归一化基准: 每分级批次
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grading_handoff`
- 数量范围: 降级种子暂定筛选范围
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.5
  - 单位: kg/kg stabilized input
  - 基准: 每 kg 稳定化种子投入
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 废物流

###### 分级拒收物 (`grading_rejects`)

在组成和去向确定前保持延后废物状态；返工回到分级并保留原负荷。

- 选定流: Grading reject, internal/deferred disposition
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量拒收质量
- 数值来源模式: Foreground record (`foreground_record`)
- 适用范围: Site-specific (`site_specific`)
- 归一化基准: 每分级批次
- 基准类型: Process output (`process_output`)
- 证据类型: Collected record (`collected_record`)
- 采集协议: `cp_grading_handoff`
- 数量范围: 分级拒收物暂定筛选范围
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.25
  - 单位: kg/kg stabilized input
  - 基准: 每 kg 稳定化种子投入
  - 基准类型: Process output (`process_output`)
  - 证据类型: Reasoned estimate (`reasoned_estimate`)

##### 基本流

## 7. 分配和副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | 合格种子路线 | 以合格种子为定量参考；无明确经济产品功能的残余物、损失和拒收物不是副产品。 | `iso-14044-2006` |
| `allocation_route_outputs` | 降级或可售产出 | 先按田块、批次、作业和去向细分；仍需分配时优先采用物理因果，其他关系须说明并做敏感性分析。 | `iso-14044-2006` |
| `allocation_rework` | 返工和不合格种子 | 负荷留在原批次，质量返回指定节点，能源和损失仅计一次；通过验收前不得计入合格产出。 | `iso-14044-2006` |
| `allocation_run_period` | 共享运行和换线 | 以实测运行时间、处理量或因果驱动因子分配一次，防止过程间重复。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_records` | `managed_cultivation` | seed; nutrients; water; crop protection; energy; residues | field and purchase records | field_id; cycle; area; species; product; mass; composition; water; carrier; energy; destination | 核对田间日志、发票、计量表和施用记录 | kg; m3; MJ; kWh; ha | 每次作业 | 完整作物周期 | 全部田块和供应方 | 按田块和路线汇总并除以关联合格种子 | 发票、校准、施用日志、田块图和完整性核对 |
| `cp_harvest_mass_balance` | `harvest_capture` | crop; energy; raw seed; residues; loss | harvest lot records | field_id; lot_id; method; energy; seed_mass; moisture; residue; loss; destination | 地磅/秤、燃料日志和田间损失抽样 | kg; percent; MJ; kWh | 每收获批次 | 周期内全部收获 | 全部田块和承包方 | 核对原籽、残余物和损失 | 校准、抽样、发票和批次关联 |
| `cp_conditioning_records` | `clean_dry_stabilize` | raw seed; energy; water; stabilized seed; rejects | lot/run records | lot_id; route; input/output mass; moisture; energy; water; foreign_matter; reject; destination | 秤、水分测试、计量表和运行日志 | kg; percent; MJ; kWh; m3 | 每批次或期间 | 全部关联批次 | 每处理场址 | 按批次核对干物质和湿质量 | 校准、水分方法、计量日志和签署平衡 |
| `cp_grading_handoff` | `grade_handoff` | stabilized input; energy; accepted; downgrade; reject | grading/dispatch records | lot_id; run_id; input; moisture; grade; accepted; downgrade; reject; destination; energy | 秤、分级记录、质量测试和发运文件 | kg; percent; MJ; kWh | 每运行和交接 | 全部纳入批次 | 每分级场址 | 核对全部状态；仅合格质量为分母 | 校准、等级证书、发运单和去向记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | seed mass | dry_mass_kg = wet_mass_kg × (1 − moisture_percent/100); 同时报告原值 | wet mass; moisture; method | dry and declared-basis mass | `agmarknet-mustard-postharvest` |
| `calc_accepted_yield` | crop cycle | accepted_yield = accepted_seed_mass / harvested_area; 不含降级或拒收 | accepted mass; area | kg/ha | `iso-14044-2006` |
| `calc_nutrient_inputs` | nutrient card | 按产品质量×供应方养分分数分别求 N、P、K | mass; composition | nutrient/field and /kg seed | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | harvest; conditioning; grading | 按实测水分变化调整投入 = 各产出+损失；调查残差 | masses; moisture; destinations | node balance | `iso-14044-2006` |
| `calc_managed_soil_emissions` | cultivation | 用声明方法和优先国家因子计算合成/有机 N、残余物、尿素和石灰排放 | N; residues; urea; lime; factors | species/compartment flows | `ipcc-2019-managed-soils` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | seed states | 全流程保留物种/品种、批次、水分、等级、用途、地域、路线和交接。 | lot genealogy; tests; dispatch |
| `dq_temporal` | all data | 覆盖完整作物周期及其处理/分级批次；披露多年平均和异常天气。 | dated records |
| `dq_completeness` | all cards | 核对所有合格、降级、返工、拒收、残余和损失路径；解释零值和缺失值。 | signed balances |
| `dq_measurement` | mass; moisture; water; energy | 使用校准仪器或记录估算方法，保留单位、换算和不确定性。 | calibration and methods |
| `dq_route` | alternatives | 保存路线份额和差异清单；无权重不得平均互斥路线。 | route evidence |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | 要求固定 UUID、Mass 属性/单位组、1 kg、CPC 语境及所有限定；基名不足以完成身份。 |  |
| `validate_route_boundary` | process map | 要求四个父节点及路线差异；拒绝纳入榨油、饼粕、制粉或调味品制造。 | `niphm-mustard-ipm`; `agmarknet-mustard-postharvest` |
| `validate_nutrient_card` | cultivation | 每过程最多一张 agricultural-nutrient-supply@0.3.0 卡，仅 set-level 且无 group。 |  |
| `validate_mass_balance` | harvest; conditioning; grading | 每批次/运行核对投入、内部/合格产出、降级、返工、拒收、残余、水分变化和损失。 | `iso-14044-2006` |
| `validate_rework_rejects` | rejects | 每个拒收状态须有返工、降级、回收、处理或丢弃去向；合格产出不得含未解决拒收或重复回路。 | `iso-14044-2006` |
| `validate_mode_attribution` | batch/continuous | 把投入、产出、清洁和换线关联到运行或期间，防止共享负荷重复。 | `iso-14044-2006` |
| `validate_stabilization` | conditioned seed | 要求处理前后质量、水分、干燥路线和交接；声称短期储存适用时，水分高于 8% 须有审查证据。 | `agmarknet-mustard-postharvest` |
| `validate_ranges` | all cards | 每张卡在双语和投影中恰好一个 Range，且全部字段一致。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 生产者/初级处理方交接芥菜籽的前景产品系统数据包 |
| downstream_use | `secondary_dataset`; `background_dataset` （经地域、路线和质量兼容性审查后） |
| allowed_use | 要求声明交接、水分和等级的作物生产及下游油料系统 |
| excluded_use | 假定已包括油、饼粕、面粉或调味品制造；不同物种、交接点或路线未调整 |
| required_metadata | species/cultivar; CPC context; geography; cycle; prior land state; irrigation; harvest; drying; lots; moisture; grade; providers; allocation; route shares |
| required_quality_disclosure | coverage; measured/estimated shares; missing flows; balance residuals; calibration; uncertainty; aggregation; source age; provisional ranges |
| update_trigger | 物种/路线/等级/水分门/拓扑发生变化，重大投入或产量变化，分配变化，新固定身份或来源失效 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `nfsm-oilseeds-practices-2018` | `official_guidance` | Government of India, National Food Security Mission, Package of Practices for Oilseeds (2018), https://www.nfsm.gov.in/ReadyReckoner/Oilseeds/PackagePractice_OS2018.pdf | route; sowing; nutrient; irrigation |
| `niphm-mustard-ipm` | `official_guidance` | National Institute of Plant Health Management, AESA Based IPM Package: Mustard/Rapeseed, https://www.niphm.gov.in/IPMPackages/Mustard.pdf | cultivation; harvest; crop protection; post-harvest |
| `agmarknet-mustard-postharvest` | `official_guidance` | Directorate of Marketing and Inspection, Post-Harvest Profile of Mustard-Rapeseed, https://www.agmarknet.gov.in/Others/mustard-rapeseed-profile.pdf | cleaning; drying; 8% moisture; hand-off |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | soil emissions; nutrient and residue accounting |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation; balances; calculations |
