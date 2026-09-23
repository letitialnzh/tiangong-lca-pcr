---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beet-seeds-excluding-sugar-beet-seeds-and-seeds-of-forage-plants
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 甜菜种子（糖用甜菜种子除外）及饲草植物种子

## 1. 范围与适用性

本 PCR 适用于糖用甜菜种子以外的播种级甜菜种子，以及申报饲草植物物种种子的商业生产。前景边界从亲本种子和田间投入开始，到种子生产者或加工者交付点放行的清洁、有活力种子结束。一个数据集代表一个申报物种、品种、繁殖等级、路线和批次；不得在没有透明权重的情况下平均物理性质不同的物种。

排除糖用甜菜种子、作为饲料销售的粮食或饲草生物量、营养繁殖材料、本 CPC 类别以外的花卉种子，以及没有前景记录的种子繁殖或加工阶段。包衣或化学处理仅在申报交付点之前实施且有批次记录时纳入。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beet-seeds-excluding-sugar-beet-seeds-and-seeds-of-forage-plants |
| classification_refs | CPC 3.0 `01940` (exact) |
| covered_products | 播种级非糖用甜菜种子，以及饲草禾本科、豆科和其他申报饲草植物种子 |
| excluded_products | 糖用甜菜种子；饲料粮；收获饲草生物量；营养繁殖材料；未经核实的物种聚合 |
| representative_product | 一个申报的清洁、有活力播种种子批次 |
| production_route | 亲本种子建植→田间繁殖→收获/脱粒→干燥/调理→清选/分级→包装/储存交付 |
| market_state | 用于播种的清洁种子，并申报物种/品种、纯度、发芽率或活力、水分、处理和认证状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 对象 | 在生产者或加工者交付点的清洁、有活力甜菜或饲草播种种子 |
| 数量 | 1 kg |
| 质量 | 申报物种/品种、物理纯度、发芽率或活力、水分、处理、认证等级和合格批次状态 |
| 时间或周期 | 一个可追溯繁殖与加工批次；涉及多年生建植时按申报生产期分摊 |
| reference_flow_link | `accepted_planting_seed` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 甜菜种子（糖用甜菜种子除外）及饲草植物种子；UUID 未解析 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必填限定信息 | 物种和品种；种子等级；纯度；发芽率或活力；水分；处理/包衣；认证；生产地理；交付点 |

类别级固定 UUID 仍未解析。现有白羽扇豆（*Lupinus albus*）流仅适用于单一物种，不得代表该复合类别。

## 4. 测量与单位规则

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考和中间种子流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按申报水分基准记录净质量；包装毛重单独报告。 |
| `quality_basis` | 合格种子 | 批次检验结果 | 申报检验单位 | 纯度、发芽率/活力和水分必须对应同一放行批次。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 申报亲本种子、田间状态和任何多年生植株年龄 |
| starting_condition_role | 繁殖周期的前景起始条件 |
| product_classification_scope | CPC 3.0 01940 内一个申报成员产品 |
| recursive_input_rule | 同类别亲本种子作为来自独立上游种子数据集的输入交换；不得递归回当前批次 |
| upstream_dataset_requirement | 上游数据集的物种/品种、种子等级、地理、交付点和质量状态必须与亲本种子投入匹配 |
| disclosure | 申报一年生或多年生路线、田间和加工地、作物周期、批次关联、不合格物去向及纳入的处理/储存 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | 所有数据集 | 仅纳入申报交付点之前有证据的田间繁殖、收获、脱粒、调理、分级、包装和储存操作。 | `fao-seed-production-1993`; `fao-ilri-forage-seed-1996` |
| `boundary_parent_seed` | 亲本种子 | 将同类别亲本种子作为关联上游投入，并防止递归回当前批次。 |  |
| `boundary_rejects` | 不合格物料 | 从合格输出中排除不合格或降级物料，并披露每个去向。 | `fao-ilri-forage-seed-1996` |
| `boundary_treatment` | 种子处理 | 仅在交付前实施且有批次记录时纳入处理或包衣。 |  |
| `boundary_period` | 多年生饲草种子田 | 在记录的种子生产期内分摊建植和终止负担，并避免重复计算。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_multiplication` | 种子作物建植与田间繁殖 | `required` | 在一个作物周期内生产申报的甜菜或饲草种子作物 | 受控生物生产 | 1 kg 可收获种子作物 |
| `harvest_thresh` | 收获与脱粒 | `required` | 从田间作物收获含种子物料并脱粒分离 | 收获与获取 | 1 kg 脱粒原种子 |
| `dry_condition` | 干燥与初级调理 | `required` | 分级前进行水分稳定、风选或初级清理 | 保藏与初级调理 | 1 kg 调理种子 |
| `grade_pack` | 清选、分级、包装与交付 | `required` | 最终除杂、批次分级、适用时的批准处理、包装、储存和种子级交付 | 物料处理与分级 | 1 kg 合格播种种子 |

### 过程: 种子作物建植与田间繁殖 (`field_multiplication`)

#### 投入

##### 产品流

###### 用于繁殖的亲本种子（`parent_seed`）

申报物种/品种的亲本、基础种子或认证种子进入繁殖田。

- 选定流：Beet or forage parent planting seed
- 流属性/单位：Mass / kg
- 数量规则：measured mass placed in the field
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：per crop cycle producing the reported harvestable seed
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_parent_seed`
- 来源：`fao-seed-production-1993`

- 数量范围：用于繁殖的亲本种子 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.30
  - 单位：kg
  - 基准：per kg harvestable seed crop
  - 基准类型：`crop_cycle`
  - 证据类型：`reasoned_estimate`

###### 合并的肥料与养分供应（`nutrient_supply`）

所有跨越田间边界的矿质肥料、有机肥和养分改良剂均合并在这一张卡中。

- 选定流：Agricultural nutrient supply
- 流属性/单位：Mass / kg
- 绑定：参数化（`parameterized`）
- 流集合：`flow-set.agricultural-nutrient-supply`
- 流集合版本：`0.3.0`
- 数量规则：foreground mass by actual nutrient product, retaining nutrient composition
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per kg harvestable seed crop
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_field_inputs`

- 数量范围：合并的肥料与养分供应 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.5
  - 单位：kg product
  - 基准：per kg harvestable seed crop
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 灌溉水供应（`irrigation_water`）

发生灌溉时记录供应给种子作物的灌溉水。

- 选定流：Irrigation water
- 流属性/单位：Mass / kg
- 绑定：参数化（`parameterized`）
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合组：`irrigation-water`
- 数量规则：metered or calculated irrigation water delivered
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per kg harvestable seed crop
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_irrigation`

- 数量范围：灌溉水供应 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：m3
  - 基准：per kg harvestable seed crop
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 田间能源载体和电力（`field_energy`）

田间作业、抽水和作物管理使用的能源按实际前景记录展开。

- 选定流：Energy supply
- 流属性/单位：Mass / MJ
- 绑定：参数化（`parameterized`）
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：sum of carrier energy and metered electricity after unit conversion
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per kg harvestable seed crop
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`

- 数量范围：田间能源载体和电力 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：50
  - 单位：MJ
  - 基准：per kg harvestable seed crop
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

未单独申报必需卡片。

##### 基本流

未单独申报必需卡片。

#### 产出

##### 产品流

###### 可收获的甜菜或饲草种子作物（`harvestable_seed_crop`）

成熟的含种子作物离开田间繁殖过程，进入收获与脱粒。

- 选定流：Harvestable beet or forage seed crop
- 流属性/单位：Mass / kg
- 数量规则：measured harvested wet mass attributable to the seed lot
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：per crop cycle and field lot
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_mass`
- 来源：`fao-seed-production-1993`

- 数量范围：可收获的甜菜或饲草种子作物 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：8
  - 单位：kg
  - 基准：per kg raw threshed seed
  - 基准类型：`crop_cycle`
  - 证据类型：`reasoned_estimate`

##### 废物流

未单独申报必需卡片。

##### 基本流

未单独申报必需卡片。

### 过程: 收获与脱粒 (`harvest_thresh`)

#### 投入

##### 产品流

###### 接收的可收获种子作物（`harvestable_crop_input`）

申报田间批次进入收获与脱粒，不得由饲用牧草生物量替代。

- 选定流：Harvestable beet or forage seed crop
- 流属性/单位：Mass / kg
- 数量规则：linked mass from field multiplication output
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：per kg raw threshed seed
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_mass`

- 数量范围：接收的可收获种子作物 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：8
  - 单位：kg
  - 基准：per kg raw threshed seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 收获与脱粒能源（`harvest_energy`）

收获和脱粒设备使用的燃料或电力按实际路线解析。

- 选定流：Energy supply
- 流属性/单位：Mass / MJ
- 绑定：参数化（`parameterized`）
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：converted energy use from equipment logs and invoices
- 数值来源模式：`calculated_value`
- 适用范围：`technology_specific`
- 归一化基准：per kg raw threshed seed
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`

- 数量范围：收获与脱粒能源 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：15
  - 单位：MJ
  - 基准：per kg raw threshed seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

未单独申报必需卡片。

##### 基本流

未单独申报必需卡片。

#### 产出

##### 产品流

###### 脱粒原种子（`raw_threshed_seed`）

脱粒分离后、干燥风选和最终清选前的种子。

- 选定流：Raw threshed beet or forage seed
- 流属性/单位：Mass / kg
- 数量规则：measured mass transferred to conditioning
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：per harvest lot
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_lot_mass_quality`
- 来源：`fao-ilri-forage-seed-1996`

- 数量范围：脱粒原种子 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.5
  - 单位：kg
  - 基准：per kg conditioned seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 收获与脱粒残余物（`harvest_residue`）

离开种子产品路线的颖壳、秸秆和未回收物料按去向报告。

- 选定流：Harvest and threshing residue
- 流属性/单位：Mass / kg
- 数量规则：mass balance difference supported by measured or estimated destination records
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per kg raw threshed seed
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue_route`

- 数量范围：收获与脱粒残余物 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：per kg raw threshed seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 基本流

未单独申报必需卡片。

### 过程: 干燥与初级调理 (`dry_condition`)

#### 投入

##### 产品流

###### 接收的脱粒原种子（`raw_seed_input`）

可追溯的原种子批次进入水分稳定和初级调理。

- 选定流：Raw threshed beet or forage seed
- 流属性/单位：Mass / kg
- 数量规则：linked input mass from threshing
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：per conditioning batch
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_lot_mass_quality`

- 数量范围：接收的脱粒原种子 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.5
  - 单位：kg
  - 基准：per kg conditioned seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 干燥与调理能源（`conditioning_energy`）

干燥、通风、风选和初级清理使用的电力、热或燃料按记录展开。

- 选定流：Energy supply
- 流属性/单位：Mass / MJ
- 绑定：参数化（`parameterized`）
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：converted energy use assigned to the batch
- 数值来源模式：`calculated_value`
- 适用范围：`technology_specific`
- 归一化基准：per kg conditioned seed
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`

- 数量范围：干燥与调理能源 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：25
  - 单位：MJ
  - 基准：per kg conditioned seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

未单独申报必需卡片。

##### 基本流

未单独申报必需卡片。

#### 产出

##### 产品流

###### 最终分级前的调理种子（`conditioned_seed`）

水分稳定并完成初级清理的种子转入最终清选和分级。

- 选定流：Conditioned beet or forage seed
- 流属性/单位：Mass / kg
- 数量规则：measured batch output at declared moisture
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：per conditioning batch
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_lot_mass_quality`
- 来源：`fao-ilri-forage-seed-1996`

- 数量范围：最终分级前的调理种子 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.3
  - 单位：kg
  - 基准：per kg accepted planting seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

未单独申报必需卡片。

##### 基本流

未单独申报必需卡片。

### 过程: 清选、分级、包装与交付 (`grade_pack`)

#### 投入

##### 产品流

###### 接收的调理种子（`conditioned_seed_input`）

调理后的批次进入最终清选、分离、分级和种子质量放行。

- 选定流：Conditioned beet or forage seed
- 流属性/单位：Mass / kg
- 数量规则：linked mass from conditioning output
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：per grading lot
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_lot_mass_quality`

- 数量范围：接收的调理种子 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.4
  - 单位：kg
  - 基准：per kg accepted planting seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 清选、分级和储存能源（`grading_energy`）

清选机、分级机、处理设备、包装和受控储存使用的能源按实际记录展开。

- 选定流：Energy supply
- 流属性/单位：Mass / MJ
- 绑定：参数化（`parameterized`）
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：converted batch energy assigned to accepted and rejected outputs
- 数值来源模式：`calculated_value`
- 适用范围：`technology_specific`
- 归一化基准：per kg accepted planting seed
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`

- 数量范围：清选、分级和储存能源 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：20
  - 单位：MJ
  - 基准：per kg accepted planting seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 种子包装（`seed_packaging`）

按实际包装记录选择用于保护放行种子批次的袋或其他柔性包装。

- 选定流：Flexible packaging
- 流属性/单位：Mass / kg
- 绑定：参数化（`parameterized`）
- 流集合：`flow-set.packaging-function`
- 流集合版本：`0.2.0`
- 流集合组：`flexible-packaging`
- 数量规则：measured packaging mass consumed
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per kg accepted planting seed
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`

- 数量范围：种子包装 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg
  - 基准：per kg accepted planting seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

未单独申报必需卡片。

##### 基本流

未单独申报必需卡片。

#### 产出

##### 产品流

###### 合格的甜菜或饲草播种种子（`accepted_planting_seed`）

在加工者或生产者交付点放行用于播种的清洁、有活力种子；不得用单一物种流代表整个类别。

- 选定流：Beet seeds excluding sugar beet seeds and seeds of forage plants
- 流属性/单位：Mass / kg
- 数量规则：measured net released mass
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：per released seed lot
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release_tests`

- 数量范围：合格的甜菜或饲草播种种子 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：per 1 kg reference flow
  - 基准类型：`reference_flow`
  - 证据类型：`collected_record`

##### 废物流

###### 种子清选废弃物（`rejected_seed_material`）

作为废物离开的不合格种子、筛下物和杂质从合格种子中排除，并按再利用、回收或处置去向报告。可销售的降级产品在具体前景数据集中作为目标产品单独记录。

- 选定流：Seed cleaning rejects `6bfe90ae-a960-45dd-b1fa-89581c562763`
- 流属性/单位：Mass / kg
- 绑定：固定（`fixed`）
- 数量规则：measured reject mass by destination
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per kg accepted planting seed
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_reject_route`

- 数量范围：不合格或降级的种子物料 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.60
  - 单位：kg
  - 基准：per kg accepted planting seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 基本流

未单独申报必需卡片。

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_balance` | each process | 对每个过程按申报质量和水分基准核对投入、目标产出、水分变化、残余物和不合格物。 |  |
| `allocation_rejects` | cleaning and grading | 不得将不合格批次或筛下物计为合格种子；在应用任何避免产品处理之前记录去向。 | `fao-ilri-forage-seed-1996` |
| `allocation_coproduct` | saleable secondary outputs | 优先使用细分或直接物理归属；仍需分配时披露产出、价格、期间、公式和敏感性。 |  |
| `allocation_period` | perennial production | 按有记录的生产期种子产量年化建植和终止负担，并保留逐年产量和损失记录。 |  |
| `allocation_batches` | shared runs and storage | 采用实测运行时间、质量吞吐量或其他有记录的因果驱动因素分配清洗、换批、检验和储存负担，且不得重复计算。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_parent_seed` | `field_multiplication` | `parent seed` | purchase and sowing record | species, cultivar, class, supplier, mass, field, date | invoice and calibrated scale | kg | each sowing event | complete crop cycle | each field lot | sum accepted parent seed by field lot | invoice, lot label, scale check |
| `cp_field_inputs` | `field_multiplication` | `nutrients and amendments` | application log | product, nutrient composition, mass, date, field | invoice plus application record | kg product | each application | complete crop cycle | each field lot | sum by actual product and retain composition | invoice and application log |
| `cp_irrigation` | `field_multiplication` | `irrigation water` | meter or pumping record | volume, source, field, date, runtime | meter preferred; pump calculation documented | m3 | each event | complete crop cycle | each field lot | sum delivered water | meter calibration or pump specification |
| `cp_energy` | `all processes` | `energy` | fuel, meter and equipment log | carrier, quantity, unit, run, process, lot | invoice, meter and equipment log | MJ or kWh | each run or reporting interval | complete lot route | each field and facility | convert carriers and allocate causally to lot | invoice, meter reading, run log |
| `cp_harvest_mass` | `field_multiplication; harvest_thresh` | `crop and raw seed mass` | harvest ticket | field, lot, date, gross mass, tare, moisture | calibrated scale | kg | each load | complete harvest | each field lot | net mass by linked lot | weigh ticket and scale check |
| `cp_lot_mass_quality` | `harvest_thresh; dry_condition; grade_pack` | `intermediate seed mass and moisture` | batch record | lot, input mass, output mass, moisture, timestamp | calibrated scale and moisture test | kg; % | each batch | complete processing route | each lot and process | retain stage-specific mass; no cross-lot substitution | batch sheet, calibration, sample id |
| `cp_packaging` | `grade_pack` | `packaging` | packaging issue record | package type, net package mass, count, lot | stock issue plus weighing | kg | each lot | complete released lot | each packaging line and lot | sum packaging consumed net of documented returns | stock record and package specification |
| `cp_release_tests` | `grade_pack` | `accepted seed` | release and laboratory record | species, cultivar, class, purity, germination or viability, moisture, treatment, certification, net mass | lot sampling and recognized seed test method | kg; % | each released lot | release date | each processing lot | accept only mass covered by release decision | certificate, laboratory result, sample chain |
| `cp_residue_route` | `harvest_thresh` | `residues` | destination record | type, mass, destination, date, lot | scale or documented mass balance | kg | each removal | complete harvest lot | each field/facility | sum by destination | ticket, receiver record or mass balance |
| `cp_reject_route` | `grade_pack` | `rejects and downgraded material` | sorting and destination record | reason, grade, mass, destination, lot | scale and dispatch record | kg | each lot | complete grading lot | each line and lot | sum by reason and destination | grading report and destination evidence |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | all inventory rows | amount per reference kg = lot amount / net accepted seed mass | lot amount; accepted net mass | normalized amount per kg |  |
| `calc_water` | irrigation | delivered water = metered volume, or pump rate × verified runtime when no meter exists | meter or pump rate and runtime | m3 delivered water |  |
| `calc_energy` | energy inputs | convert each recorded carrier to declared energy unit, then allocate by causal lot driver | carrier quantity; conversion; lot driver | MJ or kWh per kg |  |
| `calc_loss` | each process | loss or residue = opening input + additions − intended output − closing stock, reconciled for moisture | mass and moisture records | loss/residue mass |  |
| `calc_period` | perennial field | annualized establishment burden = total establishment input × current-year seed yield / documented productive-period seed yield | establishment inputs; annual yields | current-year attributed burden |  |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | reference lot | Species, cultivar, seed class and CPC scope must be explicit; a species-specific UUID cannot represent another species or the complete category. | lot label and identity review |
| `dq_mass_balance` | each process | Mass balance shall reconcile within a disclosed tolerance and moisture basis. | weighing and moisture records |
| `dq_completeness` | foreground route | Collect at least 95% of recorded operating days and all released/rejected lots; disclose estimated gaps. | coverage calculation |
| `dq_temporal` | crop and processing cycle | Use data covering one complete multiplication and processing cycle; perennial stands retain age and yearly yield. | field and batch dates |
| `dq_flow_binding` | all cards | Resolve every emitted Flow Set exchange or uncovered identity to one verified concrete UUID before final process publication. | binding review record |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | 拒绝糖用甜菜种子、饲用生物量、营养繁殖材料以及未申报物种或品种的批次。 |  |
| `validate_reference` | reference flow | 要求恰好 1 kg 净合格种子及全部质量限定信息；在核实类别兼容流之前保持类别 UUID 为空。 |  |
| `validate_lot_link` | all processes | 要求田间、收获、调理和放行批次关联不中断。 |  |
| `validate_rejects` | grade_pack | 合格产出加按去向区分的不合格物应与调理种子投入和记录的库存变化核对。 |  |
| `validate_period` | perennial route | 要求生产期证据，并防止建植负担被重复计入。 |  |
| `validate_coproduct` | secondary outputs | 在抵扣或分配前要求明确目标产出状态和归属方法。 |  |
| `validate_nutrients` | field_multiplication | 该过程最多允许一张养分产品投入卡；仅绑定 flow-set.agricultural-nutrient-supply 0.3.0，且不带 group。 |  |
| `validate_ranges` | all flow cards | 每张流卡要求一个具有物理界限、单位、基准、基准类型和证据类型的范围；获得经审查路线证据后替换推理估算。 |  |
| `validate_binding` | all flows | 仅接受有 detail-read 证据的固定 UUID；参数化绑定仅在所引 Flow Set 允许时接受。 |  |

## 10. 发布数据集档案

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景产品系统数据包和过程投影 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 与研究中的申报物种/品种、路线、地理、种子等级和交付点兼容 |
| excluded_use | 作为糖用甜菜种子、饲用生物量、另一种种子或无限定类别平均值的代理 |
| required_metadata | 物种/品种；一年生/多年生路线；亲本种子等级；田间和加工地理；作物年份；纯度；发芽率/活力；水分；处理；认证；批次和交付点 |
| required_quality_disclosure | 前景覆盖率；估算缺口；超范围情况；未解析流身份；分配和不合格物去向 |
| update_trigger | 新的经审查物种路线证据、已核实类别流 UUID、Flow Set 变化、种子质量规则变化、处理路线变化或代表性数据超出 QA 范围 |

## 11. 数据来源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `fao-seed-production-1993` | `official_guidance` | FAO, Quality Declared Seed / seed production guidance, AGRIS record https://agris.fao.org/search/zh/records/672364348aa2fad1ce470e8a | 田间繁殖、收获、调理和质量控制路线 |
| `fao-ilri-forage-seed-1996` | `handbook` | FAO/ILRI, *Forage Seed Production*, https://www.fao.org/4/x3996e/x3996e41.htm | 收获、脱粒、干燥、清选、储存、不合格物和批次质量控制 |
