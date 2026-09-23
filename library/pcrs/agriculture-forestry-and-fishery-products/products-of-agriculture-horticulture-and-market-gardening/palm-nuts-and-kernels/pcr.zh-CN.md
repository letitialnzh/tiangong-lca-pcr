---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.palm-nuts-and-kernels
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 油棕果核和棕榈仁

## 1. 范围与适用性

本 PCR 覆盖从多年生油棕种植、鲜果串（FFB）收获、初级油厂灭菌和捣碎、纤维—果核分离、可选破核与仁壳分离，到果核或棕榈仁干燥、分级并在榨油前交接的路线。参考状态必须声明为油棕果核或分离后的棕榈仁。FFB、棕榈仁壳、粗棕榈油、精炼油、棕榈仁油及棕榈仁榨油不属于参考产品身份。凡这些流跨越所含过程边界，仍须在清单中显式记录。

受管理生产父活动为多年生油棕种植。不同种植制度只有在土地历史、作物周期、管理投入与产量分别记录时方可共存。油厂的批次、半连续和连续路线必须按运行或期间分别索引；对于同一物料批次，果核交接路线与破核路线互斥。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.palm-nuts-and-kernels |
| classification_refs | CPC 3.0 01491, exact |
| covered_products | 油棕果实的果核；分离后的油棕仁；按声明可完整或破碎，且尚未榨油 |
| excluded_products | FFB；棕榈仁壳；棕榈油；棕榈仁油；精炼油；非油棕食用树坚果；棕榈仁榨油产品 |
| representative_product | 初级油厂交接处经干燥和分级的油棕果核或分离棕榈仁 |
| production_route | 多年生种植与 FFB 收获；油厂灭菌/捣碎和压榨；纤维—果核分离；可选破核/仁壳分离；干燥与分级 |
| market_state | 工厂内生产混合；经干燥和分级、尚未榨油；声明果核/棕榈仁以及完整/破碎状态 |

种植路线按棕榈年龄阶段、土地历史、管理制度与作物周期改变清单和验证要求。油厂技术路线改变过程拓扑、用水/能源类别、运行索引、产出和质量平衡检查；所有差异均须以当前种植园或油厂记录证明。

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 榨油前交付的油棕果核或分离棕榈仁 |
| How much | 在声明含水率下的 1 kg 收到态质量 |
| How well | 声明产品状态、完整/破碎状态、含水率或试验基准、等级、来源和交接门 |
| How long or cycle | 覆盖多年生作物周期的代表性年度；油厂数据采用相同或已对账的报告期 |
| reference_flow_link | `grading` 的合格输出 `accepted_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Nut `ee70bc1a-99d9-40f5-905c-c0a661f21881` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 油棕物种或声明的杂交种；果核或分离棕榈仁状态；完整或破碎；榨油前；含水率及基准；等级；地理来源；生产期间；初级油厂交接；明确排除 FFB 和棕榈仁壳 |
| Binding | `fixed` |

天工基名较泛。只有必填限定词将其收窄为榨油前的油棕果核或分离棕榈仁时，前景数据包才合规。禁止用 FFB 或棕榈仁壳替代参考流。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告收到态质量和实测含水率；仅按批次特定的含水基准换算干物质数值。 |
| `mass_balance` | mill and conditioning nodes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按每次运行或期间对账投入、预期产出、内部中间流、残余物、拒收物及水分变化。 |
| `period_alignment` | plantation and mill records | declared property | declared unit | 对齐建园期、未成熟期、生产期、年度作物产出、油厂运行和储存期间；披露所有时间缩放。 |

## 5. 系统边界

边界始于声明的种植园起始条件，包括多年生受管理生产、收获、FFB 交接、初级油厂调理和处理、纤维—果核分离、可选破核、干燥、分级及交接。棕榈仁榨油与下游精炼排除。共享苗圃、道路、灌溉、蒸汽/电力资产及油厂公用工程按实测使用量纳入，并仅在消费节点和期间之间归属一次。

收获独立建模，因为它从受管理棕榈中移除成熟 FFB 并形成至油厂的计量交接。灭菌/捣碎将收到的 FFB 转变为压榨产出；纤维—果核分离生成果核和纤维状态；破核生成棕榈仁和壳；干燥把可用湿物料转变为稳定状态；分级生成合格、降级/返工与拒收去向。

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 种植园建园状态、前期土地覆盖/利用、棕榈年龄分布、种植材料、土壤/泥炭状态、地理边界和期初清单 |
| starting_condition_role | 多年生受管理生物生产和跨期归属的进入条件 |
| product_classification_scope | 与 CPC 3.0 01491 精确对应的油棕果核或分离棕榈仁；分类不授权将 FFB 或壳作为参考 |
| recursive_input_rule | 同一产品类别的外购果核或棕榈仁投入使用单独识别的上游数据集，不得在本前景数据包中递归生成 |
| upstream_dataset_requirement | 具有产品状态、含水率、来源、期间和交接信息的供应商特定数据集；须披露通用代理 |
| disclosure | 声明种植园阶段、土地历史、路线、油厂模式、果核/棕榈仁分支、破核决策、含水基准、等级、地点、期间及所有上游代理选择 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | all foreground nodes | 包括从种植园起始条件至干燥分级果核/棕榈仁交接的完整路线；排除棕榈仁榨油。 | `fao-palm-oil-processing` |
| `boundary_reference_exclusions` | reference identity | FFB 和棕榈仁壳可作为路线流出现，但不得满足参考流。 | `unsd-cpc-3-01491` |
| `boundary_periods` | perennial plantation | 当投入、资产或产出不同时，分开建园期、未成熟期和生产期，然后按声明的生产基准归属。 | `rspo-ghg-procedure-v4` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cultivation | 多年生油棕种植 | required | Always included | Managed biological production | kg standing FFB ready for harvest |
| harvest | 鲜果串收获与田间交接 | required | Always included | Independent harvest/capture | kg harvested FFB |
| mill_treatment | 初级油厂灭菌、捣碎与压榨 | required | Always included | Primary conditioning and material treatment | kg treated FFB |
| fibre_nut_separation | 纤维—果核分离 | required | Always included | Material separation | kg press cake or fibre-nut mixture |
| cracking | 破核与棕榈仁—壳分离 | conditional | Include when separated kernel is the declared reference product | Alternative treatment route | kg palm nut input |
| drying | 果核或棕榈仁干燥稳定化 | required | Always included for the declared nut or kernel state | Preservation and stabilization | kg wet nut or kernel input |
| grading | 果核或棕榈仁分级与初级油厂交接 | required | Always included | Grading and sorting | kg dried nut or kernel input |

油厂运行须识别为批次、半连续或连续。清洁、启动、停机和换产记录仅一次关联至相应运行或运行期间。返工回路仅返回实际产生节点，且不得重复计入合格产品。

### 过程: 多年生油棕种植 (`cultivation`)

#### 输入

##### 产品流

###### 种植肥料与养分综合供应（`cultivation_nutrients`）

将施用于受管理油棕园的矿质肥料、有机肥料和养分改良剂合并为一张流卡。

- 选定流：fertilizer and nutrient supply
- 流属性/单位：Mass or nutrient mass / kg
- 绑定：`parameterized`
- 流集合：`flow-set.agricultural-nutrient-supply`
- 流集合版本：`0.3.0`
- 数量规则：measured applied nutrient products and nutrient composition
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg standing FFB ready for harvest
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg standing FFB
  - 基准：per kg standing FFB ready for harvest
  - 基准类型：过程输出（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 种植灌溉用水供应（`cultivation_water`）

记录跨越种植园边界的灌溉用水；降雨不属于本产品流卡。

- 选定流：irrigation water
- 流属性/单位：Volume / m3
- 绑定：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合组：`irrigation-water`
- 数量规则：measured delivered irrigation water
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg standing FFB ready for harvest
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：m3/kg standing FFB
  - 基准：per kg standing FFB ready for harvest
  - 基准类型：过程输出（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 种植能源供应（`cultivation_energy`）

按实际能源载体记录种植园作业使用的外购电力和燃料。

- 选定流：cultivation energy supply
- 流属性/单位：Energy or mass / declared unit
- 绑定：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：metered or purchased carrier use
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg standing FFB ready for harvest
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg standing FFB
  - 基准：per kg standing FFB ready for harvest
  - 基准类型：过程输出（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待收获的树上鲜果串（`standing_ffb`）

受管理的多年生油棕将成熟 FFB 交接至独立收获节点；这是前景系统内部中间流。

- 选定流：standing FFB ready for harvest
- 流属性/单位：Mass / kg
- 数量规则：measured harvestable FFB mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg standing FFB ready for harvest
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg standing FFB
  - 基准：per kg standing FFB ready for harvest
  - 基准类型：过程输出（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

###### 种植园残余物与生物损失（`cultivation_residues`）

按实际去向将修剪物、未成商品果和其他非产品生物质分类为田间保留物、回收物或废物。

- 选定流：plantation residues and losses
- 流属性/单位：Mass / kg
- 数量规则：measured or estimated dry/wet mass by declared basis
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg standing FFB ready for harvest
- 基准类型：过程输出（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg/kg standing FFB
  - 基准：per kg standing FFB ready for harvest
  - 基准类型：过程输出（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 基本流

### 过程: 鲜果串收获与田间交接 (`harvest`)

#### 输入

##### 产品流

###### 收获能源供应（`harvest_energy`）

按实际载体记录切割、收集和田间搬运所用燃料或电力。

- 选定流：harvest energy supply
- 流属性/单位：Energy or mass / declared unit
- 绑定：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：metered or purchased carrier use
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg harvested FFB
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ/kg harvested FFB
  - 基准：per kg harvested FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 来自受管理油棕的待收获 FFB（`harvestable_ffb_input`）

该内部前景中间流连接受管理生产和收获，不绑定数据库身份。

- 选定流：standing FFB ready for harvest
- 流属性/单位：Mass / kg
- 数量规则：mass accepted for harvesting
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg harvested FFB
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：2
  - 单位：kg/kg harvested FFB
  - 基准：per kg harvested FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交付初级油厂的已收获 FFB（`harvested_ffb`）

已收获鲜果串及时交接至油厂接收；FFB 是路线内部中间流，不是参考产品。

- 选定流：harvested FFB
- 流属性/单位：Mass / kg
- 数量规则：weighbridge or calibrated field-scale mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg harvested FFB
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg harvested FFB
  - 基准：per kg harvested FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

###### 收获损失与伴随生物质（`harvest_losses`）

按实际回收、留田或处置去向区分落果、割下的叶片和拒收果串。

- 选定流：harvest losses and incidental biomass
- 流属性/单位：Mass / kg
- 数量规则：measured or sampled mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg harvested FFB
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg harvested FFB
  - 基准：per kg harvested FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 基本流

### 过程: 初级油厂灭菌、捣碎与压榨 (`mill_treatment`)

#### 输入

##### 产品流

###### 油厂接收的已收获 FFB（`received_ffb`）

油厂接收内部已收获 FFB 中间流；因 FFB 明确排除为本 PCR 参考产品，所以不绑定其 UUID。

- 选定流：harvested FFB
- 流属性/单位：Mass / kg
- 数量规则：weighbridge mass accepted at mill
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg treated FFB
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mill_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg/kg treated FFB
  - 基准：per kg treated FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 油厂工艺用水（`mill_water`）

按实际用量记录湿热、清洗和加工用水。

- 选定流：process water
- 流属性/单位：Mass or volume / kg or m3
- 绑定：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合组：`process-water`
- 数量规则：metered or balance-derived water use
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg treated FFB
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mill_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg treated FFB
  - 基准：per kg treated FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 油厂能源供应（`mill_energy`）

按实际载体解析并记录跨越过程边界的蒸汽、电力和燃料。

- 选定流：mill energy supply
- 流属性/单位：Energy or mass / declared unit
- 绑定：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：metered energy and fuel use
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg treated FFB
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mill_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg treated FFB
  - 基准：per kg treated FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 粗棕榈油联产品（`crude_palm_oil`）

捣碎和压榨产生的粗棕榈油是必须明确归属的预期联产品。

- 选定流：Palm oil, crude `c25748fe-ebcf-4a0e-bcf9-544edb1645b1`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：measured crude palm oil mass at its hand-off
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg treated FFB
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mill_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg treated FFB
  - 基准：per kg treated FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 供分离的纤维—果核混合物（`fibre_nut_mix`）

该流是油厂处理节点的预期产出，也是交接至纤维—果核分离的内部压榨饼中间物。

- 选定流：fibre-nut mixture
- 流属性/单位：Mass / kg
- 数量规则：measured or mass-balance-derived mixture mass
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg treated FFB
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mill_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg treated FFB
  - 基准：per kg treated FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

###### 空果串与油厂拒收物（`mill_residues`）

按实际利用、回收或处置去向记录空果串和拒收物，不得默认赋予零负荷。

- 选定流：empty bunches and mill rejects
- 流属性/单位：Mass / kg
- 数量规则：measured residue mass by fate
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg treated FFB
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mill_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg treated FFB
  - 基准：per kg treated FFB
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 基本流

### 过程: 纤维—果核分离 (`fibre_nut_separation`)

#### 输入

##### 产品流

###### 接收的纤维—果核混合物（`separation_feed`）

内部压榨饼混合物由油厂处理节点交接至本节点。

- 选定流：fibre-nut mixture
- 流属性/单位：Mass / kg
- 数量规则：measured feed mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg separation feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg separation feed
  - 基准：per kg separation feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 分离能源供应（`separation_energy`）

按实际载体记录去果皮和分离使用的电力、蒸汽或燃料。

- 选定流：separation energy supply
- 流属性/单位：Energy or mass / declared unit
- 绑定：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：metered carrier use
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg separation feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ/kg separation feed
  - 基准：per kg separation feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 供干燥或破核的分离油棕果核（`separated_palm_nuts`）

分离果核作为内部产品中间流交接至果核干燥或条件性破核路线。

- 选定流：separated palm nuts
- 流属性/单位：Mass / kg
- 数量规则：measured separated nut mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg separation feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg separation feed
  - 基准：per kg separation feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 果肉纤维联产品或回收燃料（`mesocarp_fibre`）

按实际预期用途与交接对分离纤维分类；用于外售或内部回收的纤维在归属中保持一致。

- 选定流：Mesocarp fibre `a9b37001-a69f-4d00-bf11-6ce763cac036`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：measured separated fibre mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg separation feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg separation feed
  - 基准：per kg separation feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

### 过程: 破核与棕榈仁—壳分离 (`cracking`)

#### 输入

##### 产品流

###### 供破核的分离油棕果核（`nuts_for_cracking`）

仅当参考状态为棕榈仁时，内部果核中间流才进入破核。

- 选定流：separated palm nuts
- 流属性/单位：Mass / kg
- 数量规则：measured nut feed mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg nut feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cracking_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg nut feed
  - 基准：per kg nut feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 仁壳分离用水（`cracking_water`）

采用水力旋流器或黏土浴技术时，纳入其分离用水。

- 选定流：process water
- 流属性/单位：Mass or volume / kg or m3
- 绑定：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合组：`process-water`
- 数量规则：metered water use
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`technology_specific`）
- 归一化基准：per kg nut feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cracking_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg nut feed
  - 基准：per kg nut feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 破核与分离能源供应（`cracking_energy`）

按实际载体记录破核、风选与分离使用的电力或燃料。

- 选定流：cracking energy supply
- 流属性/单位：Energy or mass / declared unit
- 绑定：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：metered carrier use
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`technology_specific`）
- 归一化基准：per kg nut feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cracking_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ/kg nut feed
  - 基准：per kg nut feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 分离棕榈仁（`separated_kernels`）

分离棕榈仁作为内部中间流交接至干燥；棕榈仁榨油位于边界之外。

- 选定流：separated palm kernels
- 流属性/单位：Mass / kg
- 数量规则：measured kernel mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg nut feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cracking_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg nut feed
  - 基准：per kg nut feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 棕榈仁壳联产品或残余物（`kernel_shell`）

按实际预期用途与交接对破核生成的壳分类，且绝不将其用作参考产品。

- 选定流：Palm kernel shell `ac6ce69c-ddd1-400d-a603-901313253baa`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：measured shell mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg nut feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cracking_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg nut feed
  - 基准：per kg nut feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

### 过程: 果核或棕榈仁干燥稳定化 (`drying`)

#### 输入

##### 产品流

###### 湿果核或棕榈仁进料（`wet_nut_kernel`）

内部状态须明确选择为分离油棕果核或分离棕榈仁；未经对账不得混合。

- 选定流：wet palm nut or kernel
- 流属性/单位：Mass / kg
- 数量规则：measured wet feed mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`product_specific`）
- 归一化基准：per kg wet nut or kernel feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg wet feed
  - 基准：per kg wet nut or kernel feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 干燥能源供应（`drying_energy`）

按实际路线和载体记录太阳能、热燃料、蒸汽或电力使用。

- 选定流：drying energy supply
- 流属性/单位：Energy or mass / declared unit
- 绑定：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：metered or route-recorded carrier use
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`technology_specific`）
- 归一化基准：per kg wet nut or kernel feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg wet feed
  - 基准：per kg wet nut or kernel feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干燥稳定化的果核或棕榈仁（`dried_nut_kernel`）

干燥后的果核或棕榈仁交接至分级，并声明产品状态和含水基准。

- 选定流：dried palm nut or kernel
- 流属性/单位：Mass / kg
- 数量规则：measured dry product mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`product_specific`）
- 归一化基准：per kg wet nut or kernel feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg wet feed
  - 基准：per kg wet nut or kernel feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

### 过程: 果核或棕榈仁分级与初级油厂交接 (`grading`)

#### 输入

##### 产品流

###### 供分级的干燥果核或棕榈仁（`grading_feed`）

按产品状态和声明含水基准将干燥内部中间流送入分选。

- 选定流：dried palm nut or kernel
- 流属性/单位：Mass / kg
- 数量规则：measured grading feed mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`product_specific`）
- 归一化基准：per kg grading feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg grading feed
  - 基准：per kg grading feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 分级能源供应（`grading_energy`）

按实际载体记录筛选、风选和搬运使用的电力或燃料。

- 选定流：grading energy supply
- 流属性/单位：Energy or mass / declared unit
- 绑定：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：metered carrier use
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg grading feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：MJ/kg grading feed
  - 基准：per kg grading feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格油棕果核或分离棕榈仁（`accepted_reference_product`）

合格分级物是唯一参考输出：榨油前的油棕果核或分离棕榈仁，绝非 FFB 或棕榈仁壳。

- 选定流：Nut `ee70bc1a-99d9-40f5-905c-c0a661f21881`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：measured accepted product mass
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`product_specific`）
- 归一化基准：per kg grading feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading feed
  - 基准：per kg grading feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 降级或返工物料（`grading_downgrade`）

将送回再干燥、再分选或声明低等级去向的非合格物料与合格产出分开追踪。

- 选定流：downgraded or rework nut/kernel
- 流属性/单位：Mass / kg
- 数量规则：measured downgraded mass by destination
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg grading feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading feed
  - 基准：per kg grading feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 废物流

###### 分级拒收物与杂质（`grading_rejects`）

按最终回收或处置去向记录离开产品路线的拒收物。

- 选定流：grading rejects and foreign matter
- 流属性/单位：Mass / kg
- 数量规则：measured reject mass by fate
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per kg grading feed
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 数量范围：暂定物理 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading feed
  - 基准：per kg grading feed
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`)

##### 基本流


## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | plantation and mill | 首先细分可独立计量的种植区块、油厂节点、运行和产品路线；不得分配已经可分离的负荷。 | `iso-14044-2006` |
| `allocation_multi_output` | crude palm oil, nut/kernel, fibre, shell and other intended outputs | 列举所有预期产出与交接。无法通过细分避免分配时，使用有文件支持的物理因果关系；仅在无合理物理关系时使用经济分配，并披露价格、期间和敏感性。 | `iso-14044-2006`; `fao-palm-oil-processing` |
| `allocation_period` | perennial crop and shared assets | 按声明的生产产出或服务基准，仅一次归属建园期、未成熟期和共享基础设施负荷；记录分期决策并防止重复归属。 | `rspo-ghg-procedure-v4` |
| `allocation_rework` | downgraded and rejected material | 返工保留产生节点负荷，仅增加返工增量负荷；合格产出排除未回收拒收物。按实际去向一致地将回收残余物分类为预期产出、残余物或废物。 |  |
| `allocation_shared_runs` | batch and continuous mill operation | 清洁、启动、停机与共享公用工程仅一次归属至相应运行或运行期间，并记录驱动因子和对账。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cultivation_records | cultivation | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |
| cp_harvest_records | harvest | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |
| cp_mill_records | mill_treatment | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |
| cp_mill_calculation | mill_treatment | calculated or reconciled flows | calculated record | measured inputs, outputs, moisture change and residual | run-level reconciled mass balance | declared card unit | per run | representative annual period including crop cycle | all included mill lines | calculate from linked run records and retain the residual | linked measurements and calculation record |
| cp_separation_records | fibre_nut_separation | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |
| cp_cracking_records | cracking | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |
| cp_drying_records | drying | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |
| cp_grading_records | grading | all linked flow roles | measurement/log | mass, carrier, time, lot, product state, moisture, destination | meter, weighbridge, invoice, batch log or reconciled mass balance | declared card unit | per batch or operating day | representative annual period including crop cycle | all included estates and mill lines | sum by lot/run, reconcile inputs and outputs, then normalize to linked basis | calibration, invoice, lot id and reconciliation residual |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | nut/kernel mass | 干质量 = 收到态质量 ×（1 − 含水率）；反向换算使用目标含水率 | 收到态质量；含水率；试验基准 | 干质量或调整后的收到态质量 |  |
| `calc_mass_balance` | each mill node | 残差 = 投入质量 + 辅助材料质量 − 预期产出 − 残余物/废物 − 实测水分损失 | 按运行关联的质量记录 | 对账残差及百分比 | `fao-palm-oil-processing` |
| `calc_period_attribution` | plantation phases and shared infrastructure | 归属负荷 = 期间负荷 × 声明的分配份额 ÷ 合格参考产品质量 | 阶段/运行负荷；服务或产出驱动因子；合格质量 | 每 kg 参考产品负荷 | `rspo-ghg-procedure-v4` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference output | 保留物种/杂交种、果核/棕榈仁状态、完整/破碎状态、榨油前状态、含水率、等级、来源、期间和交接证据。 | 批次规格和分级记录 |
| `dq_completeness` | all processes | 覆盖所有纳入的种植园和油厂生产线；量化缺失数据并解释每项质量平衡残差和截断。 | 覆盖登记与对账 |
| `dq_temporal` | perennial and mill data | 使用代表性年度，并记录阶段缩放、跨期储存和运行期间对齐。 | 带日期的种植园和批次记录 |
| `dq_calibration` | measured flows | 保存秤、仪表和含水率实验室测试的校准状态或供应商发票证据。 | 校准和发票记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | 若参考为 FFB、棕榈仁壳、棕榈油或棕榈仁油，或缺少油棕果核/棕榈仁限定、榨油前状态、含水基准或交接信息，则拒绝数据包。 | `unsd-cpc-3-01491` |
| `validate_route` | process map | 要求种植、收获、油厂处理、纤维—果核分离、干燥和分级；仅分离棕榈仁分支要求破核，并禁止棕榈仁榨油。 | `fao-palm-oil-processing` |
| `validate_mass_balance` | every treatment/conditioning run | 检查投入与预期产出、中间流、残余物、拒收物及水分变化；调查超出流卡 QA 范围的值。 | `fao-palm-oil-processing` |
| `validate_multi_output` | intended outputs | 要求粗棕榈油、合格果核/棕榈仁、纤维、壳及任何其他预期产出具有列明的交接和一个明确归属决策。 | `iso-14044-2006` |
| `validate_period_and_assets` | plantation phases and shared infrastructure | 要求阶段/运行关联，并验证每项共享负荷仅归属一次。 | `rspo-ghg-procedure-v4` |
| `validate_mode_rework` | batch/continuous runs and grading | 要求运行索引、清洁/换产归属、返工去向，并从合格产出中排除拒收物。 |  |

## 10. 发布数据集配置

| Field | Value |
| --- | --- |
| dataset_role | 榨油前油棕果核或分离棕榈仁的前景生产数据集 |
| downstream_use | `secondary_dataset`；当地理、种植园阶段、油厂路线及产品状态相符时可作 `background_dataset` |
| allowed_use | 使用声明状态和交接门的油棕果核/棕榈仁供应及下游榨油 LCA |
| excluded_use | FFB 供应；棕榈仁壳供应；棕榈油或棕榈仁油生产；精炼油；遗漏声明限定词或纳入的上游种植负荷的路线 |
| required_metadata | 物种/杂交种；来源；种植园和油厂；土地历史；棕榈年龄/阶段；期间；油厂模式；果核/棕榈仁分支；破核路线；含水率及基准；等级；完整/破碎状态；分配方法；交接 |
| required_quality_disclosure | 覆盖率、原始数据占比、缺失数据、替代数据、质量平衡残差、时间缩放、分配敏感性及暂定范围替换情况 |
| update_trigger | 路线、技术、种植园阶段、土地历史、产出组合、分配、含水率/等级规格、来源或 UUID 身份发生实质变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-01491` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 边界与油棕果核/棕榈仁身份 |
| `fao-palm-oil-processing` | handbook | https://www.fao.org/4/y4355e/y4355e04.htm | 初级油厂顺序、纤维—果核分离、破核、仁壳分离和干燥 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级与透明度 |
| `rspo-ghg-procedure-v4` | official_guidance | https://rspo.org/endorsed-greenhouse-gas-ghg-assessment-procedure-v4/ | 种植园起始条件、土地/泥炭背景和期间披露 |
