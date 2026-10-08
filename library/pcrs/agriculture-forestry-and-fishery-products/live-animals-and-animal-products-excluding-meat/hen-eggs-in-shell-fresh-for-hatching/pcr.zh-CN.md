---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.hen-eggs-in-shell-fresh-for-hatching
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 孵化用鲜带壳鸡蛋

## 1. 适用范围

本 PCR 适用于种鸡场门交接、经筛选用于孵化的鲜带壳鸡蛋。包括交接前的种鸡管理、独立采蛋、初处理、分级，以及实际发生的农场贮存和保护性包装。孵化用途不证明受精、活胚或孵化率。排除孵化场孵化、雏鸡、其他禽类蛋、以食用蛋为参考产品的路线、加工与交接后运输。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.hen-eggs-in-shell-fresh-for-hatching` |
| classification_refs | `cpc:3.0:02311` |
| covered_products | 种鸡场门交接、经筛选用于孵化的鲜带壳鸡蛋 |
| excluded_products | 作为参考的食用蛋、其他禽类蛋、已入孵蛋、雏鸡和加工蛋 |
| representative_product | 以质量计量的农场门合格带壳孵化用鸡蛋 |
| production_route | 种鸡群为上位活动。地面蛋窝、笼养等采集模式仅在采集拓扑、垫料/粪便、能源、破损或校验义务变化时成为独立路线。同一鸡群路线互斥，不同已单独计量鸡群可并存。 |
| market_state | 新鲜、带壳、孵化用途；披露农场贮存及保护性包装状态 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 种鸡场交接时合格的孵化用鲜带壳鸡蛋 |
| How much | 1 kg 带壳质量，并保留枚数和实测平均质量 |
| How well | 披露种鸡群日龄及配种管理、采集与筛选、蛋壳状态、贮存时间/温度和已有的质量检测；不得由用途推断受精或孵化率 |
| How long or cycle | 已声明的鸡群生产周期，并关联补群及贮存周期 |
| reference_flow_link | `farm_gate_hatching_eggs` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 孵化用鲜带壳鸡蛋 `e5791c05-2fe6-4cb4-aec8-30adb5e85b0b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 鸡物种、农场及交接门、鸡群日龄、批次和周期、配种证据、枚数与 kg、蛋壳等级、采集日期、贮存时间和温度、已有活胚检测、剔除物、蛋托及包装复用 |
| Binding | Fixed (`fixed`) |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `egg_mass_count` | 参考和内部蛋状态 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量带壳质量并保留枚数；按批次实测平均质量换算，不使用通用假定蛋重。 |
| `period_carrier` | 鸡群与共享投入 | 质量或载体属性 | kg、MJ 或 kWh | 在参考归一化前，将入群、共享服务和输出归属于鸡群周期；跨期库存仅计算一次。 |
| `emission_mass` | 粪便气体 | Mass | kg 物质 | CH4、N2O、NH3 为分别命名的物质；报告分子质量前换算 N2O-N 与 NH3-N 因子基准。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 采购的补充种鸡/后备鸡、饲料、水、能源和包装材料在有记录的农场接收点进入；自产补群或饲料需要单独追踪前景。 |
| starting_condition_role | 所声明种鸡生产周期之前的农场入场牲畜与材料。 |
| product_classification_scope | CPC 3.0 02311 适用于最终鲜带壳孵化用鸡蛋，而非内部状态或食用蛋副产品。 |
| recursive_input_rule | 上游使用本类别采购孵化用蛋时，在接收处仅连接一次上游数据集；不得递归抵扣产出或重复纳入孵化场孵化。 |
| upstream_dataset_requirement | 为采购种鸡、饲料、能源和包装关联上游数据集；不可将仅农场库存称作从摇篮到大门。 |
| disclosure | 交接门、鸡群与周期、种鸡/采集路线、等级和质量证据、初处理、贮存、包装复用、损失及副产品分配。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `farm_gate_cut` | 所有路线 | 包括种鸡场产蛋、独立采集、初处理、分级、农场稳定化和呈现；排除孵化场孵化、雏鸡及交接后运输。 | `fao-egg-production`; `aviagen-egg-handling-2015` |
| `quality_not_fertility` | 最终产品 | 孵化用途不是实测受精或孵化率声明；记录检测和剔除去向，不得假定质量。 | `aviagen-egg-handling-2015` |
| `route_delta` | 种鸡路线 | 声明受管理生物生产上位活动及实际拓扑、清单类别、测量或校验变化；仅路线标签不足。 | `fao-leap-poultry-2016` |
| `handoff_once` | 内部鸡蛋 | 已产、备选、分级及贮存状态核对同一批次；节点间质量转移不产生另一独立出售的最终产品。 | `mass-balance-identity` |
| `shared_asset_boundary` | 鸡舍、蛋窝、贮存及可复用蛋托 | 识别使用节点和服务周期；共享负担仅在实际服务交接计入一次。 | `fao-leap-poultry-2016` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder_flock` | 种鸡群管理及产蛋 | `required` | 所有种鸡场路线 | 受管理生物生产与新产蛋交接 | 鸡群周期与产蛋总质量 |
| `egg_collection` | 独立采蛋 | `required` | 所有种鸡场路线 | 从蛋窝采集并计量采集损失 | 产蛋总质量 |
| `first_conditioning` | 农场初处理 | `required` | 检查与干式准备；可记录无处理 | 已采集原始状态到备选状态 | 采集质量 |
| `hatching_grade` | 孵化用途筛选与分级 | `required` | 所有种鸡场路线 | 区分孵化等级、出售降级品及剔除物 | 备选质量 |
| `egg_storage` | 农场稳定化与贮存 | `conditional` | 交接前由农场控制的贮存或冷却 | 选出可用状态到稳定化状态 | 选出质量及贮存时长 |
| `egg_presentation` | 农场包装呈现与交接 | `required` | 直接或贮存后路线二选一；材料仅在农场供应时纳入 | 保护并交接最终农场门参考产品 | 合格带壳质量 |

### 过程：种鸡群管理及产蛋 (`breeder_flock`)

#### 输入

##### 产品流

###### 补充种鸡 (`replacement_birds`)

记录入群种鸡及周期；上游负担只计一次。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 补充种鸡（UUID 未解析）
- 流属性/单位: Mass / kg liveweight
- 数量规则: 记录入群种鸡及周期；上游负担只计一次。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_flock`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg liveweight/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 种鸡饲料 (`breeder_feed`)

按库存变化记录采购和另行生产的饲料净消耗。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 种鸡饲料（UUID 未解析）
- 流属性/单位: Mass / kg as-fed
- 数量规则: 按库存变化记录采购和另行生产的饲料净消耗。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 20
  - 单位: kg as-fed/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 种鸡供水 (`flock_water`)

按用途计量饮水和清洁用水。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 农场供应水
- 流属性/单位: Mass / L
- 数量规则: 按用途计量饮水和清洁用水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 100
  - 单位: L/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 种鸡舍能源 (`house_energy`)

按实际载体记录电、热和燃料。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 能源载体与公用工程
- 流属性/单位: Mass / MJ
- 数量规则: 按实际载体记录电、热和燃料。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_inputs`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 60
  - 单位: MJ/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

该方向无预设流；仅在实测并核实身份时增补。

##### 基本流

该方向无预设流；仅在实测并核实身份时增补。

#### 输出

##### 产品流

###### 新产带壳蛋 (`laid_eggs`)

将产蛋总量与采集及损失核对；此为内部状态而非最终产品。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 新产鸡蛋（UUID 未解析）
- 流属性/单位: Mass / kg shell-on
- 数量规则: 将产蛋总量与采集及损失核对；此为内部状态而非最终产品。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_eggs`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 2
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 出售的淘汰种鸡 (`cull_birds`)

仅记录单独出售的淘汰鸡；死亡个体属于废物。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 淘汰种鸡（UUID 未解析）
- 流属性/单位: Mass / kg liveweight
- 数量规则: 仅记录单独出售的淘汰鸡；死亡个体属于废物。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_flock`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg liveweight/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 单独出售的粪便 (`exported_manure`)

仅在粪便独立有价交接时记录此有条件产品输出；同一材料不得再计入 `manure_waste`。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 出售的种鸡粪便（UUID 未解析）
- 流属性/单位: Mass / kg wet and dry
- 数量规则: 按鸡群周期记录实测出售质量、组成、交接门和买方。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_manure`
- 数量范围: 暂定可替换的粪便出售筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg wet/kg reference
  - 基准: 按鸡群周期的宽泛可替换筛查
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 管理的粪便及垫料 (`manure_waste`)

只记录一次实际粪便管理交接；单独出售的粪便为副产品。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 种鸡粪便及垫料（UUID 未解析）
- 流属性/单位: Mass / kg wet
- 数量规则: 只记录一次实际粪便管理交接；单独出售的粪便为副产品。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_manure`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg wet/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 粪便生物源甲烷 (`manure_ch4_air`)

依据记录模拟有证据的粪便 CH4 路径。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 向空气排放的生物源甲烷 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位: Mass / kg CH4
- 绑定: 固定 (`fixed`)
- 数量规则: 依据记录模拟有证据的粪便 CH4 路径。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_manure`
- 来源: `ipcc-2019-livestock-manure`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg CH4/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 粪便氧化亚氮 (`manure_n2o_air`)

模拟有证据的粪便 N2O；将 N2O-N 换算为 N2O。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 向空气排放的氧化亚氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg N2O
- 绑定: 固定 (`fixed`)
- 数量规则: 模拟有证据的粪便 N2O；将 N2O-N 换算为 N2O。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_manure`
- 来源: `ipcc-2019-livestock-manure`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg N2O/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 粪便氨 (`manure_nh3_air`)

仅记录有证据的 NH3 挥发路径。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 向空气排放的氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg NH3
- 绑定: 固定 (`fixed`)
- 数量规则: 仅记录有证据的 NH3 挥发路径。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_manure`
- 来源: `ipcc-2019-livestock-manure`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg NH3/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程：独立采蛋 (`egg_collection`)

#### 输入

##### 产品流

###### 蛋窝中的鸡蛋 (`nest_eggs_in`)

关联同一鸡群周期的新产蛋输出。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 新产鸡蛋（UUID 未解析）
- 流属性/单位: Mass / kg shell-on
- 数量规则: 关联同一鸡群周期的新产蛋输出。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_eggs`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 2
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

该方向无预设流；仅在实测并核实身份时增补。

##### 基本流

该方向无预设流；仅在实测并核实身份时增补。

#### 输出

##### 产品流

###### 已采集原始带壳蛋 (`collected_eggs`)

在初处理前称量批次。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 已采集原始鸡蛋（UUID 未解析）
- 流属性/单位: Mass / kg shell-on
- 数量规则: 在初处理前称量批次。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_eggs`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 2
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 采集破损及损失 (`collection_loss`)

记录破损或未采集的鸡蛋及去向。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 采蛋损失（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则: 记录破损或未采集的鸡蛋及去向。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_eggs`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

该方向无预设流；仅在实测并核实身份时增补。

### 过程：农场初处理 (`first_conditioning`)

#### 输入

##### 产品流

###### 进入初处理的已采集蛋 (`raw_eggs_in`)

每一进入批次关联采集；不得假定水洗。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 已采集原始鸡蛋（UUID 未解析）
- 流属性/单位: Mass / kg shell-on
- 数量规则: 每一进入批次关联采集；不得假定水洗。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_eggs`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 2
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

该方向无预设流；仅在实测并核实身份时增补。

##### 基本流

该方向无预设流；仅在实测并核实身份时增补。

#### 输出

##### 产品流

###### 待分级的备选鸡蛋 (`prepared_eggs`)

记录壳完整的备选质量并交给分级。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 备选鸡蛋（UUID 未解析）
- 流属性/单位: Mass / kg shell-on
- 数量规则: 记录壳完整的备选质量并交给分级。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_eggs`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 2
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 初处理剔除物 (`conditioning_reject`)

记录损坏或污染质量及处置。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 初处理剔除鸡蛋（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则: 记录损坏或污染质量及处置。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_eggs`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

该方向无预设流；仅在实测并核实身份时增补。

### 过程：孵化用途筛选与分级 (`hatching_grade`)

#### 输入

##### 产品流

###### 进入分级的备选蛋 (`prepared_eggs_in`)

关联初处理；仅在实际操作时记录照蛋。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 备选鸡蛋（UUID 未解析）
- 流属性/单位: Mass / kg shell-on
- 数量规则: 关联初处理；仅在实际操作时记录照蛋。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 2
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

该方向无预设流；仅在实测并核实身份时增补。

##### 基本流

该方向无预设流；仅在实测并核实身份时增补。

#### 输出

##### 产品流

###### 选出的孵化等级鸡蛋 (`selected_hatching_eggs`)

称量接受的鸡蛋；用途标记本身不证明受精。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 选出的孵化用鸡蛋（内部状态 UUID 未解析）
- 流属性/单位: Mass / kg shell-on
- 数量规则: 称量接受的鸡蛋；用途标记本身不证明受精。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1.5
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 单独出售的食用蛋 (`table_egg_coproduct`)

仅在实际作为单独副产品出售时纳入。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 鲜非孵化用鸡蛋（UUID 未解析）
- 流属性/单位: Mass / kg shell-on
- 数量规则: 仅在实际作为单独副产品出售时纳入。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 分级剔除物 (`grading_reject`)

记录不安全或破损鸡蛋及去向；不作副产品。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 剔除鸡蛋（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则: 记录不安全或破损鸡蛋及去向；不作副产品。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

该方向无预设流；仅在实测并核实身份时增补。

### 过程：农场稳定化与贮存 (`egg_storage`)

#### 输入

##### 产品流

###### 进入贮存的选出鸡蛋 (`selected_eggs_in`)

记录批次、时间和温度；没有贮存干预时省略本节点。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 选出的孵化用鸡蛋（UUID 未解析）
- 流属性/单位: Mass / kg shell-on
- 数量规则: 记录批次、时间和温度；没有贮存干预时省略本节点。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_storage`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1.5
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 贮存能源 (`storage_energy`)

按批次或共享库房计量实际冷却和通风能源。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 能源载体与公用工程
- 流属性/单位: Mass / MJ
- 数量规则: 按批次或共享库房计量实际冷却和通风能源。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_storage`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: MJ/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

该方向无预设流；仅在实测并核实身份时增补。

##### 基本流

该方向无预设流；仅在实测并核实身份时增补。

#### 输出

##### 产品流

###### 待包装的稳定化鸡蛋 (`stabilized_eggs`)

记录出库质量与完整贮存历史。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 农场贮存的孵化用鸡蛋（UUID 未解析）
- 流属性/单位: Mass / kg shell-on
- 数量规则: 记录出库质量与完整贮存历史。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_storage`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1.5
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 贮存损失及剔除物 (`storage_reject`)

核对接受、剔除和库存变动。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 贮存剔除鸡蛋（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则: 核对接受、剔除和库存变动。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_storage`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

该方向无预设流；仅在实测并核实身份时增补。

### 过程：农场包装呈现与交接 (`egg_presentation`)

#### 输入

##### 产品流

###### 进入包装交接的选出或贮存蛋 (`eggs_for_handover`)

分级直达或经贮存的路线仅取一条，不得双计。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 选出的孵化用鸡蛋（内部状态 UUID 未解析）
- 流属性/单位: Mass / kg shell-on
- 数量规则: 分级直达或经贮存的路线仅取一条，不得双计。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_handover`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1.5
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 农场供应的保护性蛋托 (`farm_packaging`)

记录新材料及可重复使用材料、所有者和有证据的周转次数。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 按实际材料区分的保护性蛋托或包装
- 流属性/单位: Mass / kg
- 数量规则: 记录新材料及可重复使用材料、所有者和有证据的周转次数。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

该方向无预设流；仅在实测并核实身份时增补。

##### 基本流

该方向无预设流；仅在实测并核实身份时增补。

#### 输出

##### 产品流

###### 农场门合格孵化用鸡蛋 (`farm_gate_hatching_eggs`)

在实际种鸡场交接处称量最终接受的带壳质量。

参考产出的原始记录：在实际种鸡场交接处称量最终接受的带壳质量。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流: 孵化用鲜带壳鸡蛋 `e5791c05-2fe6-4cb4-aec8-30adb5e85b0b`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定: 固定 (`fixed`)
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议: `cp_handover`
- 数量范围: 参考归一化恒等式
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg reference
  - 基准: 参考带壳蛋质量除以自身
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

##### 废物流

###### 包装破损及废弃包装 (`presentation_waste`)

按实际去向记录破损蛋与不再复用的包装。

分母与范围要求：每 kg 农场门合格孵化用带壳鸡蛋

- 选定流: 按材料区分的破损及废弃包装（UUID 未解析）
- 流属性/单位: Mass / kg
- 数量规则: 按实际去向记录破损蛋与不再复用的包装。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging`
- 数量范围: 暂定可替换 QA 筛查范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg reference
  - 基准: 按农场门参考质量的宽泛初轮筛查；用审核数据替换
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

该方向无预设流；仅在实测并核实身份时增补。


## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_priority` | 孵化用鸡蛋、出售的食用蛋、淘汰鸡及出售的粪便 | 枚举各目标产品的真实交接门。可分过程直接归属；不可分鸡群周期负担优先采用有证据的物理因果关系，否则使用同期农场门经济分配并披露价格、质量及敏感性。废物和死亡个体无产品份额。 | `fao-leap-poultry-2016` |
| `period_shared` | 鸡群、鸡舍、蛋窝、贮存间与蛋托 | 区分补群、生产、贮存及复用周期；投入事件和产出关联周期。共享资产按实测使用或有依据的服务时长/能力仅归属一次，避免重复负担。 | `fao-leap-poultry-2016`; `aviagen-egg-handling-2015` |
| `internal_states` | 产蛋到贮存状态 | 内部转移用于质量核对而非副产品；仅独立产品离开边界时才分配。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock` | `breeder_flock` | 补群、淘汰、日龄和路线 | 鸡群台账 | 批次、物种、日龄、头数、质量、进出、死亡、配种、鸡舍/采集路线 | 台账及校准抽样称重；原始汇总要求：鸡群周期台账。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头；kg | 事件/月 | 全生产和补群阶段 | 全部鸡舍 | 每参考流 | 发票、秤及死亡记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_inputs` | `breeder_flock` | 饲料、水和能源 | 发票、库存及计量 | 供应方、饲料、干物质、库存、水、载体、仪表、周期、共享使用 | 发票、仪表与库存核对；原始汇总要求：按鸡群的实测净消耗。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；L；kWh；MJ | 月/结期 | 全鸡群周期 | 全部鸡舍 | 每参考流 | 发票、仪表校验、库存表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_eggs` | `breeder_flock`; `egg_collection`; `first_conditioning` | 已产、已采、备选及损失 | 批次台账 | 采集时间、枚数、抽样质量、蛋壳状态、接受/剔除质量、去向 | 计数及校准称重；原始汇总要求：按批次的状态质量平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 枚；kg | 每批 | 全周期 | 全采集线 | 每参考流 | 批次表、校准；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_grading` | `hatching_grade` | 孵化、食用及剔除等级 | 分级记录 | 等级规则、实际照蛋、枚数、kg、检测及去向 | 分级及称重；原始汇总要求：互斥去向。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 枚；kg | 每批 | 全周期 | 全分级线 | 每参考流 | 分级/检测表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure` | `breeder_flock` | 粪便及空气路径 | 管理记录 | 垫料、水分、氮、路径、日期、因子 | 观察、检测及方法表；原始汇总要求：每材料批次一份台账。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；kg N | 月/事件 | 鸡群/粪便周期 | 全路径 | 每参考流 | 日志、化验及因子来源；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_storage` | `egg_storage` | 贮存鸡蛋及能源 | 批次/库房记录 | 进出 kg、时间、温度、湿度、仪表及剔除 | 库房记录仪、仪表及称重；原始汇总要求：批次库存及共享能源。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；h；℃；kWh | 每批/每日 | 实际农场贮存期 | 全库房 | 每参考流 | 记录仪、仪表、秤；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_packaging` | `egg_presentation` | 蛋托与弃置 | 包装复用记录 | 材料、新/复用件、质量、所有权、周转及处置 | 计数与抽样称重；原始汇总要求：按证据复用的净材料。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 件；kg | 每发货 | 全周期 | 农场包装点 | 每参考流 | 采购/返回记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_handover` | `egg_presentation` | 最终参考产品 | 出库记录 | 批次、枚数、kg、等级、交接门、买方、采集/贮存历史、检测 | 校准出库称重；原始汇总要求：接受 kg 仅计一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；枚 | 每交接 | 全周期 | 农场门 | 每参考流 | 出库单及校准；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `egg_balance` | 蛋状态 | 产蛋总量 = 已采 + 采集损失；已采 = 备选 + 初处理剔除；备选 = 孵化选出 + 出售食用等级 + 分级剔除；选出经库存变动调整 = 最终产品 + 贮存/包装剔除。披露时间差。 | `cp_eggs`; `cp_grading`; `cp_storage`; `cp_handover` | 阶段产率 | `mass-balance-identity` |
| `normalize_kg` | 全行 | 将周期归属数量除以实测最终合格带壳 kg，不用总产蛋枚数。 | 所有协议 | 每 kg 参考数量 | `mass-balance-identity` |
| `manure_gases` | CH4、N2O、NH3 | 使用特定路径记录的粪便/氮及有证据方法；氮基物种换算为分子质量。 | `cp_manure` | kg 物质/kg 参考 | `ipcc-2019-livestock-manure` |
| `tray_reuse` | 可复用蛋托 | 将采购/生产蛋托负担分摊于有证据的周转次数；返还蛋托不是新采购。 | `cp_packaging` | kg 材料/kg 参考 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 最终蛋 | 保留鸡物种、带壳状态、孵化用途、农场门、批次、等级和实测质量；仅在检测时报告受精/活胚。 | 出库、分级及检测记录 |
| `dq_period` | 鸡群/产出 | 覆盖补群和生产周期、淘汰、死亡、投入、总产蛋、剔除及副产品，无缺期和双计。 | 鸡群台账及质量平衡 |
| `dq_route` | 采集、初处理及贮存 | 记录真实路线、是否照蛋、贮存时间/温度及包装复用。 | 批次、库房及包装记录 |
| `dq_flow_identity` | 全部最终交换 | 待确认投入在构建数据集时需具体身份核验证据及相容的 UUID；未解析卡在过程发布前需核实身份。 | 身份与供应记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_gate` | 参考 | 拒绝食用蛋、已入孵蛋、雏鸡或孵化场门替代；确认新鲜带壳农场门质量和批次。 | `cpc-3-2025`; `fao-egg-production` |
| `validate_quality` | 孵化等级 | 要求筛选准则及剔除去向；不得从预定用途推断受精或孵化率。 | `aviagen-egg-handling-2015` |
| `validate_route` | 种鸡与贮存 | 路线差异需要拓扑/清单/测量变化证据。贮存有条件；最终只能来自直达或贮存路线之一。 | `fao-leap-poultry-2016`; `aviagen-egg-handling-2015` |
| `validate_balance` | 蛋阶段及副产品 | 核对全部内部质量状态；区分出售食用蛋/淘汰鸡和废物，并记录分配优先级。 | `mass-balance-identity` |
| `validate_shared` | 周期/资产 | 依据有证据的使用者和周期仅归属一次补群、鸡舍、蛋窝、贮存及蛋托负担。 | `fao-leap-poultry-2016` |
| `validate_bindings` | 清单 | 除非审核，QA Range 仅为暂定值。所有最终 TIDAS 交换要有类型、属性、介质和交接门兼容的核实具体 UUID。 | `mass-balance-identity` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 种鸡场孵化用鲜带壳鸡蛋前景生产数据集 |
| downstream_use | 质量审查后作为过程和生命周期模型的 `secondary_dataset`、`background_dataset` |
| allowed_use | 物种、路线、等级、周期及包装相符的农场门孵化用蛋供应 |
| excluded_use | 食用蛋供应、保证受精、孵化、雏鸡生产、孵化场门、农场后运输 |
| required_metadata | 农场/门、鸡群/日龄、周期、路线、枚数/kg、等级与质量、贮存时间/温度、包装复用、剔除及副产品 |
| required_quality_disclosure | 数据缺口、抽样质量、模拟排放、待确认流身份 选择、未解析身份、推理 Range 的替换、分配敏感性 |
| update_trigger | 路线、等级/质量协议、贮存、包装、身份、分配或鸡群周期变更 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc-3-2025` | `official_guidance` | UN Statistics Division, CPC Version 3.0 Explanatory Notes (2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 边界、过程和方法规则 |
| `fao-leap-poultry-2016` | `official_guidance` | FAO LEAP, Greenhouse gas emissions and fossil energy use from poultry supply chains (2016), https://openknowledge.fao.org/handle/20.500.14283/i6421en | 边界、过程和方法规则 |
| `ipcc-2019-livestock-manure` | `method_factor` | IPCC 2019 Refinement, Vol 4 Ch 10, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 边界、过程和方法规则 |
| `fao-egg-production` | `official_guidance` | FAO, Chapter 1 Egg production, https://www.fao.org/4/y4628e/y4628e03.htm | 边界、过程和方法规则 |
| `aviagen-egg-handling-2015` | `handbook` | Aviagen, Egg Handling from Nest to Setter (2015), https://en.aviagen.com/assets/Tech_Center/BB_Resources_Tools/Egg-Hatching-Poster-EN-2015.pdf | 边界、过程和方法规则 |
| `mass-balance-identity` | `method_factor` | Conservation of measured shell-on egg mass by mutually exclusive inventory state | 状态核对与归一化 |
