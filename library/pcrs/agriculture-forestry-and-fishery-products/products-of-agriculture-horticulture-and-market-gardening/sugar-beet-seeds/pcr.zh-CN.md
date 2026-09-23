---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-beet-seeds
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 糖用甜菜种子

## 1. 范围与适用性

本 PCR 覆盖在农场门口交付、适于播种的已清理和粒级分级糖用甜菜（Beta vulgaris subsp. vulgaris var. altissima）繁殖材料。边界纳入直播种到种路线或种根生产与移栽路线之一，以及亲本建立、春化或越冬、隔离、亲本系管理、授粉、收获、稳定化、脱粒、干式清理、粒级分级、批次检验与放行。

商品根生产和买方播种不在边界内。洗涤、抛光、脱壳（普通干式清理之外）、引发、包衣、丸粒化和化学种子处理属于下游并予以排除。数据集不得在本 PCR 下声称这些处理后状态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-beet-seeds |
| classification_refs | CPC 3.0: 01803 Sugar beet seeds |
| covered_products | 适于播种、未经包衣、丸粒化、引发及化学处理的已清理和粒级分级糖用甜菜繁殖材料 |
| excluded_products | 糖用甜菜根；饲用或蔬菜甜菜种子；买方播种服务；经洗涤、抛光、引发、包衣、丸粒化或化学处理的种子 |
| representative_product | 已清理分级的播种级糖用甜菜种子 |
| production_route | 采用一种已声明直播或种根/移栽路线的受控生物种子生产，随后进行授粉、收获、田间稳定化、脱粒、干式清理、粒级分级和批次放行 |
| market_state | 播种级且已清理；干燥、粒级分级、未经处理并可按批次追溯 |

受控生产父活动为糖用甜菜繁殖生产。直播路线使亲本在生产田越冬；种根路线则在生殖生产前生产、选择、春化并移栽种根。这两条路线改变过程拓扑、时期记录和转移流，在同一前景数据包中互斥。补充强制通风稳定化及设备配置属于收获或整备父活动下的技术选择，仅在单独计量时可并存。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 适于播种的已清理和粒级分级糖用甜菜种子 |
| How much | 1,000 kg |
| How well | 批次通过所声明品种身份、分析纯度、萌发率/活力、水分和种子健康接受标准 |
| How long or cycle | 一个完整种子生产季，包括归属于放行批次的全部建立/春化和生殖阶段 |
| reference_flow_link | `grading_lot_release` 的接受产出；全部阶段和运行记录与放行批次核对一致 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Sugar beet seeds `7c8b5317-9f13-48cd-847c-f6d1f5248d54` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种及亲本系身份；直播或种根路线；生产地域和作物年；春化方法；隔离与授粉控制；批次 id；收获与稳定化路线；水分基准；粒级；纯度及萌发率/活力结果；未经处理/包衣/丸粒化状态；农场门口交付 |
| 绑定模式 | Fixed (`fixed`) |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 已接受参考种子 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按所声明水分基准报告已接受种子净质量；排除包装及未返回批次的检验样品。 |
| `seed_count_conversion` | 亲本或种子单位计数 | Count and Mass | item and kg | 保留实测计数；任何计数到质量换算均须使用批次特定千粒重并保留测量记录。 |
| `phase_normalization` | 全部建立和生殖阶段流 | 相应实测属性 | 相应行单位 | 将各阶段和作物年关联到放行批次后再归一化；不得年化或重复计算第一阶段负荷。 |
| `lot_mass_reconciliation` | 从收获至批次放行 | Mass | kg | 每个节点均须核对接收质量与接受、降级、拒收、取样、残余物和损失状态。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具有已声明遗传身份的外购亲本种子或选定种根材料进入一种指定种子生产路线 |
| starting_condition_role | 前景种子生产季的上游繁殖投入 |
| product_classification_scope | 为播种而生产的糖用甜菜繁殖材料；排除商品根生产及下游增强或处理种子状态 |
| recursive_input_rule | 同类别外购糖用甜菜亲本种子作为具有供应商数据集或已披露代理的上游产品投入；不在同一前景生产季内递归展开 |
| upstream_dataset_requirement | 外购繁殖材料须提供地域、作物年、亲本系身份、处理状态、数量及供应商数据集或代理披露 |
| disclosure | 声明路线、时期、亲本布置、隔离控制、授粉责任、收获/稳定化方法、整备技术、批次检验、等级及每项拒收去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_seed_state` | 产品交付 | 边界终止于未经处理、包衣和丸粒化的已清理粒级播种种子；排除洗涤、抛光、引发、包衣、丸粒化和化学处理。 | `imanishi-et-al-2019` |
| `boundary_route_choice` | 亲本建立 | 仅选择直播或种根路线之一，并纳入其完整建立、春化和转移记录。 | `cfia-sugar-beet-biology` |
| `boundary_pollination_identity` | 生殖生产 | 纳入保持预期杂交所需的隔离、亲本系布置、花期同步、异型去除和雄性亲本处置。 | `cfia-sugar-beet-biology`; `usda-aphis-sugar-beet-seed-production` |
| `boundary_harvest_independence` | 收获 | 单独建模收获，因为田间作物转化为干燥已收集物料，并须独立交接田间残余物和脱落损失。 | `usda-aphis-sugar-beet-seed-production` |
| `boundary_stabilization` | 稳定化 | 在脱粒前声明干预前可用状态、田间或补充干燥投入、稳定干燥状态及损失。 | `usda-aphis-sugar-beet-seed-production` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `parent_establishment_vernalization` | 亲本建立与春化路线差异 | required | 仅使用一种已声明路线：直播越冬或种根生产/移栽。 | 具有生物路线差异的受控生物生产，第一时期 | 进入生殖生产的已建立并完成春化的雌雄亲本群体 |
| `reproductive_seed_production` | 生殖种子生产与授粉 | required | 在所声明亲本路线形成完成春化的亲本后。 | 受控生物生产，生殖时期 | 可供收获的成熟雌性结籽作物 |
| `harvest_field_stabilization` | 收获、割晒与田间稳定化技术差异 | required | 雌性结籽作物达到所声明收获成熟度时。 | 具有技术差异的收获与保存/稳定化 | 交付脱粒的干燥已收获结籽物料 |
| `threshing_primary_cleaning` | 脱粒与初级干式清理 | required | 每个收获批次在粒级分级前均适用。 | 初级整备 | 交付分级的已清理未粒级种子批 |
| `grading_lot_release` | 粒级分级、检验与批次放行 | required | 适用于作为播种种子投放市场的每个已清理批次。 | 分级、拣选与批次放行 | 农场门口1,000 kg已接受的清理分级糖用甜菜种子 |

生产按生产季/批次组织。每项投入、产出、清理事件与换批事件均须带有生产季、田块、作物年、亲本系和种子批次键。田间生产、收获、整备与分级运行仅可汇总路线和质量状态等效的批次。

### 过程: 亲本建立与春化路线差异 (`parent_establishment_vernalization`)

#### 输入

##### 产品流

###### 亲本种子或种根繁殖材料 (`parent_propagation_material`)

在parent phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 糖用甜菜亲本繁殖材料
- 流属性/单位: Mass / kg
- 数量规则: 计量进入所声明路线的亲本种子、根或种根的质量与数量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_parent_phase`
- 来源: `cfia-sugar-beet-biology`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 250
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 农业养分综合供应 (`parent_nutrient_supply`)

在parent phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 农业养分供应功能
- 流属性/单位: Mass / kg
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- 数量规则: 汇总本过程使用的全部矿质肥料、有机肥、石灰及含养分改良剂质量；在前景记录中保留具体交换
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_parent_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1500
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 灌溉水 (`parent_irrigation_water`)

在parent phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 灌溉水
- 流属性/单位: Volume / m3
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则: 计量亲本建立、越冬及春化管理期间供应的灌溉水
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_parent_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: m3
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 作物保护产品 (`parent_crop_protection`)

在parent phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 作物保护产品
- 流属性/单位: Mass / kg
- 数量规则: 计量亲本阶段施用的有效成分及制剂产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_parent_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 田间作业燃料 (`parent_field_fuel`)

在parent phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 农业机械燃料
- 流属性/单位: Volume / L
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则: 计量本阶段土地准备、播种或种植、去杂、起挖、储存搬运和移栽所耗燃料
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_parent_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: L
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 受控春化电力 (`vernalization_electricity`)

在parent phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 电力
- 流属性/单位: Mass / kg
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则: 计量冷藏或受控春化用电；田间越冬直播路线记为零
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_parent_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: kWh
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本坐标未规定需要单独报告的流。

##### 基本流

本坐标未规定需要单独报告的流。

#### 输出

##### 产品流

###### 已建立并完成春化的亲本群体 (`vernalized_parent_population`)

在parent phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 完成春化的糖用甜菜亲本植株
- 流属性/单位: Count / item
- 数量规则: 计算转入生殖生产的亲本质量或株数
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_parent_phase`
- 来源: `cfia-sugar-beet-biology`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1000000
  - 单位: plants
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 亲本阶段拒收或异型材料 (`parent_phase_rejects`)

在parent phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 拒收的糖用甜菜亲本材料
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量选择、越冬存活评估或移栽准备期间拒收的亲本材料
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_parent_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 亲本阶段作物残余物 (`parent_phase_residues`)

在parent phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 糖用甜菜作物残余物
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量或计算离田或现场管理的残余物
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_parent_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 亲本阶段直接受控土壤排放 (`parent_managed_soil_emissions`)

在parent phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 按物质及接收介质报告的受控土壤排放
- 流属性/单位: Mass / kg
- 数量规则: 依据养分、残余物和田间记录分别计算各报告物质；不得使用泛化污染物身份
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_parent_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程: 生殖种子生产与授粉 (`reproductive_seed_production`)

#### 输入

##### 产品流

###### 完成春化的雌雄亲本群体 (`reproductive_parent_population`)

在reproductive phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 完成春化的糖用甜菜亲本植株
- 流属性/单位: Count / item
- 数量规则: 从第一阶段转入同一亲本群体，并保留亲本系及路线身份
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_reproductive_phase`
- 来源: `cfia-sugar-beet-biology`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1000000
  - 单位: plants
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 农业养分综合供应 (`reproductive_nutrient_supply`)

在reproductive phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 农业养分供应功能
- 流属性/单位: Mass / kg
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- 数量规则: 汇总本过程使用的全部矿质肥料、有机肥、石灰及含养分改良剂质量；在前景记录中保留具体交换
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_reproductive_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1500
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 灌溉水 (`reproductive_irrigation_water`)

在reproductive phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 灌溉水
- 流属性/单位: Volume / m3
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则: 计量生殖生长和授粉期间供应的灌溉水
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_reproductive_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: m3
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 作物保护产品 (`reproductive_crop_protection`)

在reproductive phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 作物保护产品
- 流属性/单位: Mass / kg
- 数量规则: 计量生殖生产期间施用的制剂产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_reproductive_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 生殖田间作业燃料 (`reproductive_field_fuel`)

在reproductive phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 农业机械燃料
- 流属性/单位: Volume / L
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则: 计量田间作业、隔离维护、去杂、花期同步和雄性行移除所耗燃料
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_reproductive_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: L
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本坐标未规定需要单独报告的流。

##### 基本流

本坐标未规定需要单独报告的流。

#### 输出

##### 产品流

###### 成熟雌性结籽作物 (`mature_seed_crop`)

在reproductive phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 成熟糖用甜菜结籽作物
- 流属性/单位: Mass / kg
- 数量规则: 计量或计算转入收获的雌性结籽作物
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_reproductive_phase`
- 来源: `usda-aphis-sugar-beet-seed-production`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 8000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 移除的雄性授粉亲本生物质 (`removed_pollinator_biomass`)

在reproductive phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 糖用甜菜授粉亲本生物质
- 流属性/单位: Mass / kg
- 数量规则: 计量或计算授粉后移除的雄性亲本生物质，并声明留田、回收或废弃去向
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_reproductive_phase`
- 来源: `cfia-sugar-beet-biology`, `usda-aphis-sugar-beet-seed-production`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 生殖阶段异型、失败及损失植株 (`reproductive_offtypes_losses`)

在reproductive phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 拒收的糖用甜菜生殖植株
- 流属性/单位: Mass / kg
- 数量规则: 按原因和去向计量收获前移除或损失的植株
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_reproductive_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 3000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 生殖阶段直接受控土壤排放 (`reproductive_managed_soil_emissions`)

在reproductive phase边界记录该流，并保留批次、时期与去向关联。

- 选定流: 按物质及接收介质报告的受控土壤排放
- 流属性/单位: Mass / kg
- 数量规则: 依据养分、残余物和田间记录分别计算各报告物质
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_reproductive_phase`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程: 收获、割晒与田间稳定化技术差异 (`harvest_field_stabilization`)

#### 输入

##### 产品流

###### 田间成熟雌性结籽作物 (`standing_mature_seed_crop`)

在harvest边界记录该流，并保留批次、时期与去向关联。

- 选定流: 成熟糖用甜菜结籽作物
- 流属性/单位: Mass / kg
- 数量规则: 从生殖生产转入成熟雌性结籽作物
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest`
- 来源: `usda-aphis-sugar-beet-seed-production`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 8000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 割晒与收获燃料 (`harvest_fuel`)

在harvest边界记录该流，并保留批次、时期与去向关联。

- 选定流: 农业机械燃料
- 流属性/单位: Volume / L
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则: 计量割晒、条铺处理和联合收获消耗的燃料
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 300
  - 单位: L
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 补充稳定化能源 (`stabilization_energy`)

在harvest边界记录该流，并保留批次、时期与去向关联。

- 选定流: 用于强制通风或补充干燥的电力或燃料
- 流属性/单位: Energy / kWh
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 仅在田间干燥不足以达到稳定交付状态时计量所用能源
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 3000
  - 单位: kWh
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本坐标未规定需要单独报告的流。

##### 基本流

本坐标未规定需要单独报告的流。

#### 输出

##### 产品流

###### 干燥已收获结籽物料 (`dry_harvested_seed_material`)

在harvest边界记录该流，并保留批次、时期与去向关联。

- 选定流: 干燥已收获糖用甜菜结籽物料
- 流属性/单位: Mass / kg
- 数量规则: 计量交付脱粒的干燥物料，并保留批次与亲本身份
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest`
- 来源: `usda-aphis-sugar-beet-seed-production`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 6000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 收获秸秆与田间残余物 (`harvest_field_residue`)

在harvest边界记录该流，并保留批次、时期与去向关联。

- 选定流: 糖用甜菜种子作物残余物
- 流属性/单位: Mass / kg
- 数量规则: 按留田、回收或废弃去向计量或计算非种子生物质
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 脱落及未收集种子 (`shattered_lost_seed`)

在harvest边界记录该流，并保留批次、时期与去向关联。

- 选定流: 损失的糖用甜菜种子
- 流属性/单位: Mass / kg
- 数量规则: 根据田间观察、产量核算或收集试验计算种子损失
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

本坐标未规定需要单独报告的流。

### 过程: 脱粒与初级干式清理 (`threshing_primary_cleaning`)

#### 输入

##### 产品流

###### 进入脱粒机的干燥已收获结籽物料 (`harvested_material_to_thresher`)

在conditioning边界记录该流，并保留批次、时期与去向关联。

- 选定流: 干燥已收获糖用甜菜结籽物料
- 流属性/单位: Mass / kg
- 数量规则: 计量从收获过程接收且具有批次身份的物料
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 6000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 脱粒与清理电力 (`threshing_cleaning_electricity`)

在conditioning边界记录该流，并保留批次、时期与去向关联。

- 选定流: 电力
- 流属性/单位: Mass / kg
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则: 计量脱粒、输送、风选和干式清理用电
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2000
  - 单位: kWh
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 脱粒与清理燃料 (`threshing_cleaning_fuel`)

在conditioning边界记录该流，并保留批次、时期与去向关联。

- 选定流: 固定式或移动设备燃料
- 流属性/单位: Volume / L
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 在脱粒或清理由燃料驱动时计量燃料
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 300
  - 单位: L
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本坐标未规定需要单独报告的流。

##### 基本流

本坐标未规定需要单独报告的流。

#### 输出

##### 产品流

###### 已清理未粒级糖用甜菜种子 (`cleaned_unsized_seed`)

在conditioning边界记录该流，并保留批次、时期与去向关联。

- 选定流: 已清理未粒级糖用甜菜种子
- 流属性/单位: Mass / kg
- 数量规则: 计量转入粒级分级的已清理种子批
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 2000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 脱粒糠秕和茎秆碎片 (`threshing_chaff`)

在conditioning边界记录该流，并保留批次、时期与去向关联。

- 选定流: 糖用甜菜种子作物糠秕
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量或计算分离的植物物料
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 4000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 分离的异物 (`cleaning_foreign_matter`)

在conditioning边界记录该流，并保留批次、时期与去向关联。

- 选定流: 种子清理异物
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量筛分和风选去除的物料
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 整备过程未捕集粉尘 (`conditioning_dust_release`)

在conditioning边界记录该流，并保留批次、时期与去向关联。

- 选定流: 排至空气的颗粒物（须报告粒径）
- 流属性/单位: Mass / kg
- 数量规则: 计量或计算排至空气的未捕集粉尘，并保留所报告粒径身份
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程: 粒级分级、检验与批次放行 (`grading_lot_release`)

#### 输入

##### 产品流

###### 进入分级的已清理未粒级种子批 (`cleaned_seed_to_grading`)

在lot release边界记录该流，并保留批次、时期与去向关联。

- 选定流: 已清理未粒级糖用甜菜种子
- 流属性/单位: Mass / kg
- 数量规则: 计量以同一批次身份接收用于分级的已清理种子
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_lot_release`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 2000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 分级与检验电力 (`grading_electricity`)

在lot release边界记录该流，并保留批次、时期与去向关联。

- 选定流: 电力
- 流属性/单位: Mass / kg
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则: 计量可归属于该批次的输送、粒级筛分、重力分选和检验用电
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_lot_release`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kWh
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本坐标未规定需要单独报告的流。

##### 基本流

本坐标未规定需要单独报告的流。

#### 输出

##### 产品流

###### 已接受的清理分级糖用甜菜种子 (`accepted_seed_grade_sugar_beet_seed`)

在lot release边界记录该流，并保留批次、时期与去向关联。

- 选定流: Sugar beet seeds `7c8b5317-9f13-48cd-847c-f6d1f5248d54`
- 流属性/单位: Mass / kg
- 绑定模式: Fixed (`fixed`)
- 数量规则: 在所声明农场门口交付点恰为1,000 kg已接受批次质量
- 数值来源模式: 固定值 (`fixed_value`)
- 适用范围: 通用 (`generic`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 方法公式 (`method_formula`)
- 采集协议: `cp_lot_release`
- 来源: `oecd-sugar-fodder-beet-seed-scheme`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

###### 降级但可萌发的种子 (`downgraded_viable_seed`)

在lot release边界记录该流，并保留批次、时期与去向关联。

- 选定流: 降级糖用甜菜种子
- 流属性/单位: Mass / kg
- 数量规则: 计量仍有活力但未进入接受参考批次的种子；声明去向及其是否为预期共产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_lot_release`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 拒收的受损、异型或无活力种子 (`rejected_damaged_offtype_seed`)

在lot release边界记录该流，并保留批次、时期与去向关联。

- 选定流: 拒收糖用甜菜种子
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量因身份、损伤、纯度、萌发率或活力标准而拒收的种子
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_lot_release`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 检验消耗或废弃的批次样品 (`lot_test_samples_consumed`)

在lot release边界记录该流，并保留批次、时期与去向关联。

- 选定流: 糖用甜菜种子检验样品
- 流属性/单位: Mass / kg
- 数量规则: 计量未返回接受批次的样品质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_lot_release`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 分级与换批残留物 (`grading_changeover_residue`)

在lot release边界记录该流，并保留批次、时期与去向关联。

- 选定流: 种子分级残留物
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量批次换线时的滞留物料和清线残留物
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_lot_release`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 分级过程未捕集粉尘 (`grading_dust_release`)

在lot release边界记录该流，并保留批次、时期与去向关联。

- 选定流: 排至空气的颗粒物（须报告粒径）
- 流属性/单位: Mass / kg
- 数量规则: 计量或计算分级期间排至空气的未捕集粉尘
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1,000 kg已接受的清理分级糖用甜菜种子
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_lot_release`
- 数量范围: 暂定或方法 QA 区间
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: kg
  - 基准: 每1,000 kg已接受参考种子产出的同一暂定或方法基准
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_phase_linkage` | 跨期生产季 | 通过可追溯田块和作物年关联，将第一阶段建立/春化及第二阶段生殖负荷一次性归属于所得批次；不得在年度数据集中重复负荷。 | `cfia-sugar-beet-biology` |
| `allocation_parent_routes` | 替代路线 | 直播和种根路线互斥。除非生产加权汇总先分别报告各路线，否则不得将两者平均。 | `cfia-sugar-beet-biology` |
| `allocation_intended_outputs` | 接受种子和降级种子 | 将接受种子及任何有意销售的降级可萌发种子作为完整预期产出集。无法通过细分避免共享负荷时优先按物理质量分配；使用经济分配时披露价格和敏感性。 | |
| `allocation_residue_waste` | 亲本生物质、田间残余物、糠秕和拒收物 | 无预期产品交付的物料作为残余物或废物；缺少有文件依据的回收功能和去向时不得计入避免负荷。 | |
| `allocation_rework` | 重新清理或重新分级种子 | 将返工返回原生产批次，前序加工负荷仅保留一次；通过放行标准前不得计入接受产出。 | |
| `allocation_batch_shared` | 共享运行和换批 | 按因果记录或加工质量分配计量的运行投入，并将换批残留物一次性归属于受影响运行；不得在两个节点重复计算共享运行。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_parent_phase` | parent_establishment_vernalization | 全部亲本阶段投入与产出 | 田间、储存及发票记录 | 路线；田块；作物年；亲本系；数量；日期；冷库电表；拒收物；去向 | 核对田间日志、采购记录、计量表和转移计数 | 相应行单位 | 每项作业及转移 | 完整第一阶段 | 全部供应田块和储存点 | 按路线和放行批次求和；披露前不得跨路线平均 | 发票、田间日志、冷库记录、转移及选择记录 |
| `cp_reproductive_phase` | reproductive_seed_production | 授粉阶段投入与产出 | 田间及亲本系记录 | 亲本行；隔离；开花；施用；水；燃料；移除量；成熟作物；排放数据 | 核对有空间映射的田间作业和亲本系检查 | 相应行单位 | 每项作业及检查 | 完整生殖阶段 | 全部生产田块 | 按批次和亲本系求和；保留雌雄亲本处置 | 田块图、隔离检查、施用日志及作物估产 |
| `cp_harvest` | harvest_field_stabilization | 收获、能源、收集物料及损失 | 收获票据、计量表及田间观察 | 日期；作物质量；燃料；电力；水分；干燥时间；残余物；脱落量 | 称量转移物料并核对田间观察 | 相应行单位 | 每个田块及收获运行 | 收获至稳定交付 | 全部田块和干燥地点 | 各路线单独报告后按批次质量加权 | 称重票据、计量日志、水分检验及损失检查 |
| `cp_conditioning` | threshing_primary_cleaning | 接收物料、能源及分离状态 | 运行及计量记录 | 批次；运行；接收质量；能源；清理种子质量；糠秕；异物；粉尘控制 | 称量运行投入/产出并读取计量表 | 相应行单位 | 每次整备运行 | 完整理备生产季 | 全部整备设备 | 按运行核对后汇总等效批次 | 经校准秤、计量记录及清线日志 |
| `cp_lot_release` | grading_lot_release | 等级状态、能源、检验及放行 | 批次、检验及放行记录 | 批次；粒级；质量；纯度；萌发率；活力；水分；检验样品；拒收物；去向；计量表 | 称量每个等级并关联认可或已声明检验结果 | 相应行单位 | 每次分级运行及放行批次 | 分级至农场门口放行 | 全部分级和检验地点 | 仅放行合格质量为接受产出；其他状态保持分离 | 秤校准、检验报告、放行证书及追溯记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部行 | 行数量 / 已接受放行批次质量 × 1,000 kg | 实测行数量；接受批次质量 | 归一化行数量 | `mass-balance-identity` |
| `calc_phase_attribution` | 第一和生殖阶段 | 归一化前汇总批次全部阶段中唯一关联的作业 | 田块 id；作物年；路线；批次 id；数量 | 完整生产季清单 | `cfia-sugar-beet-biology` |
| `calc_mass_balance` | 每个物料节点 | 在不确定性范围内，接收质量 = 接受转移 + 降级 + 拒收 + 残余物 + 样品 + 实测/计算损失 | 节点质量记录 | 闭合率及未解释差值 | `mass-balance-identity` |
| `calc_managed_soil_emissions` | 田间阶段 | 对记录的养分及残余物投入分别应用所声明当前方法；保留物质和接收介质 | 养分及残余物记录；方法因子 | 物质特定基本流 | |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考批次 | 保留品种、亲本系、批次 id、未经处理状态和认证/接受状态。 | 批次证书和放行记录 |
| `dq_route_period` | 完整生产季 | 将每个田块、作物年、春化/越冬事件及转移追溯至一种路线和一个放行批次。 | 田块图、转移记录和生产季台账 |
| `dq_pollination` | 生殖阶段 | 记录隔离控制、亲本比例/布置、花期同步、异型去除和雄性亲本处置。 | 检查和亲本系记录 |
| `dq_measurement` | 质量和能源 | 使用经校准秤和计量表，或记录估算方法及不确定性。 | 校准和计量证据 |
| `dq_completeness` | 全部节点 | 核对全部接受、降级、拒收、残余物、损失及返工状态；解释物料平衡缺口。 | 节点核对表 |
| `dq_representativeness` | 汇总 | 披露地域、作物年、路线份额、技术份额和排除场址。 | 汇总工作簿和数据集元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 流 UUID、质量属性、单位组、1,000 kg 数量、市场状态和必需限定信息须完整且一致。 | |
| `validate_route_exclusivity` | 亲本生产 | 每个前景数据包须且仅须声明一种直播或种根路线，并关联全部必需阶段。 | `cfia-sugar-beet-biology` |
| `validate_period_once` | 跨期归属 | 每项建立、春化、生殖及终止事件须且仅须一次归属于放行产出。 | |
| `validate_isolation_pollination` | 生殖生产 | 接受品种身份声明前核查隔离证据、亲本身份、开花/授粉管理和雄性亲本处置。 | `oecd-sugar-fodder-beet-seed-scheme`; `usda-aphis-sugar-beet-seed-production` |
| `validate_batch_changeover` | 整备和分级 | 运行、共享能源、清理和换批残余物须带有运行及批次键，且不得重复计算。 | |
| `validate_output_states` | 分级 | 接受、降级可萌发、拒收、样品和残余物状态须有不同数量及交付点；拒收物不得进入参考产出。 | |
| `validate_rework_loop` | 重新清理或分级 | 每个返工回路须返回指定节点、保留前序负荷并在放行前闭合。 | |
| `validate_treatment_exclusion` | 产品状态 | 声称本参考状态时，若数据集纳入抛光、洗涤、引发、包衣、丸粒化或化学种子处理，则拒绝该数据集。 | `imanishi-et-al-2019` |
| `validate_mass_balance` | 全部物料节点 | 作为二手或背景数据使用前，调查未解释物料平衡差值并披露所接受不确定性。 | `mass-balance-identity` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 用作糖用甜菜种植模型及供应链清单中的播种种子投入 |
| allowed_use | 路线、地域、时期和批次质量状态与研究相符的未经处理、已清理和粒级分级糖用甜菜种子 |
| excluded_use | 商品根生产；买方播种；饲用/蔬菜甜菜种子；经抛光、洗涤、引发、包衣、丸粒化或化学处理的商品种子 |
| required_metadata | 必需限定信息；过程地域；田块及作物年；路线及阶段关联；亲本系及隔离控制；生产模式；批次 id；水分基准；等级；检验；拒收去向；分配方法 |
| required_quality_disclosure | 一手数据占比、计量表和秤覆盖率、路线/场址汇总、物料平衡闭合、暂定范围替换情况、排放方法和未解决流身份 |
| update_trigger | 亲本路线、春化实践、隔离或授粉控制、收获/稳定化路线、整备技术、接受规范、处理状态、分配方法或代表性作物年发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `cfia-sugar-beet-biology` | official_guidance | 加拿大食品检验局，The Biology of Beta vulgaris L. (Sugar Beet)，<https://inspection.canada.ca/en/plant-varieties/plants-novel-traits/applicants/directive-94-08/biology-documents/beta-vulgaris> | 二年生生命周期、春化、直播与种根路线、亲本处置 |
| `usda-aphis-sugar-beet-seed-production` | official_guidance | USDA APHIS，糖用甜菜环境影响报告，<https://www.aphis.usda.gov/sites/default/files/03_32301p_feis_std.pdf> | 杂交亲本管理、隔离、雄性行移除、割晒、田间干燥和联合收获 |
| `oecd-sugar-fodder-beet-seed-scheme` | standard | OECD 糖用和饲用甜菜种子品种认证方案，<https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/seeds/Seed%20scheme%20rules%20and%20regulations.pdf/_jcr_content/renditions/original./Seed%20scheme%20rules%20and%20regulations.pdf> | 品种认证、批次身份和官方控制 |
| `imanishi-et-al-2019` | literature | Imanishi 等（2019），The biochemistry underpinning industrial seed technology and mechanical processing of sugar beet，DOI 10.1007/s00425-019-03257-5 | 清理/粒级与下游洗涤、抛光、引发、包衣和丸粒化之间的边界 |
| `mass-balance-identity` | method_factor | 应用于各前景节点的质量守恒恒等式 | 参考归一化和物料核对 |
