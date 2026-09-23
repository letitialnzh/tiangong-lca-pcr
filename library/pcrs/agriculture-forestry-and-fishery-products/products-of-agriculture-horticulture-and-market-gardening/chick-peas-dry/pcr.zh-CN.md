---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chick-peas-dry
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 干鹰嘴豆

## 1. 范围与适用性

本 PCR 适用于农场门的成熟、干燥、未加工鹰嘴豆籽粒（*Cicer arietinum*），包括 desi 和 kabuli 商品类别。范围包括田间生产管理、收获与脱粒、农场清理与分级，以及达到所声明农场门状态所需的条件性通风或干燥。

青鲜鹰嘴豆、作为种子销售的播种用种、面粉、分瓣或脱皮组分、罐藏或熟制产品，以及下游工业清理、粒径分级、研磨、分离或食品制造均不在范围内。前景数据包必须声明地理范围、作物年度、商品类别、生产路线、收获路线、水分基准、等级或去向规格，以及是否采用条件性稳定处理。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chick-peas-dry` |
| classification_refs | CPC 3.0 `01703` Chick peas, dry |
| covered_products | 农场门成熟干 desi 与 kabuli 鹰嘴豆籽粒；除农场清理、分级与必要稳定处理外未作加工 |
| excluded_products | 青鲜鹰嘴豆；作为种子销售的播种用种；芽苗；面粉；分瓣；脱皮组分；罐藏或熟制产品；下游工业清理、粒径分级或加工 |
| representative_product | 满足所声明农场门水分与等级或去向规格的成熟干鹰嘴豆籽粒（desi 或 kabuli） |
| production_route | 田间生产管理后接独立收获/脱粒与农场调理；不同田块可并存雨养与灌溉生产，同一收获事件的直接收割与割晒互斥；同一批次可先后采用环境通风与补充低温干燥 |
| market_state | 收获的未加工籽粒；完成声明的清理、分级与所需稳定处理后在农场门验收 |

管理生物生产的父活动为 `field_production`。路线差异必须由库存类别或记录的改变证实：灌溉田增加供水与泵送记录；割晒增加独立切割/铺条事件；直接联合收获省略该事件；加热干燥增加燃料或热量与温度记录。仅有路线名称不足以建立独立路线。

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 农场门成熟干鹰嘴豆籽粒 |
| How much | 按声明水分计的 1,000 kg 收货质量 |
| How well | desi 或 kabuli 类别；声明等级或去向规格；声明水分；合格籽粒不含未解决返工、杂质、未回收损失与降级产出 |
| How long or cycle | 一个作物周期，收获后作业关联至对应收获田块与批次 |
| reference_flow_link | `chick_peas_dry_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Chick peas, dry `c509fe95-d4ab-4db9-b593-f6329aef8dbd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | desi 或 kabuli 类别；具有实质影响时的品种；地理范围；作物年度；雨养或灌溉路线；直接收割或割晒；水分百分比及干基或湿基；等级或去向规格；农场门交接；干燥或通风路线；分配选择 |
| Binding | `fixed` |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量收货质量并声明水分百分比与基准；换算到共同水分时使用记录的进出料水分并保持干物质守恒。 |
| `nutrient_products` | 合并的农业养分投入 | 产品数量与养分组成 | 视情况采用 kg 或 m3 产品，以及 kg N、P 或 P2O5、K 或 K2O | 每种实际产品仅记录一次；保留配方与养分分析，避免复合产品和有机产品在产品质量与养分质量报告中重复。 |
| `grade_fraction` | 损伤、青粒、杂质、返工与废料 | 质量分数 | kg/kg 或质量百分比 | 使用有代表性的批次样品，并声明分母是入料散装籽粒还是清洁样品。 |
| `moisture_balance` | 干燥与通风 | 质量与水分分数 | kg；除非另有声明，水分采用湿基百分比 | 每批次核对进料干物质、出料干物质、去除水分、降级籽粒与废料。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 为鹰嘴豆作物周期准备的已声明田块，并识别先前土地利用、土壤状况、前茬作物与种子来源 |
| starting_condition_role | 管理生物生产的起始状态；外购种子、产品、能源与服务的负荷通过上游数据集进入 |
| product_classification_scope | CPC 3.0 `01703` 表示的成熟干鹰嘴豆籽粒；青鲜鹰嘴豆、种子商品与加工组分不属于本产品类别 |
| recursive_input_rule | 自留作播种用种的鹰嘴豆籽粒作为上一作物周期或外部供应商的种子投入记录，不递归建模为本周期参考产出 |
| upstream_dataset_requirement | 对具体种子、养分产品、作物保护产品、供水、能源载体与外包服务使用地理和技术适配的上游数据集 |
| disclosure | 声明前茬与土地利用背景、田块与作物年度、商品类别、雨养或灌溉路线、建植与管理作业、收获路线、调理序列、稳定处理路线、批次交接与全部产出去向 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_gate` | 所有前景节点 | 纳入作物建植与管理、独立收获/脱粒、农场清理与分级，以及直至合格农场门交接的条件性稳定处理。 | `ndsu-pulse-field-guide-2025`; `saskatchewan-chickpea-harvest`; `fao-postharvest-system` |
| `boundary_output_states` | 收获、调理与稳定处理 | 区分合格籽粒、降级籽粒、返工、收集的秸秆或荚壳、还田残余物、炸荚或落粒损失、杂质废料与丢弃物料；为每种状态记录唯一交接点与去向。 | `saskatchewan-chickpea-harvest`; `cgc-chickpea-grading` |
| `boundary_route_delta` | 替代路线 | 雨养与灌溉田、直接收割与割晒、环境通风与加热干燥必须保留第 2 节规定的路线特定记录；在田块、收获事件或批次层级解析互斥选择。 | `saskatchewan-chickpea-harvest`; `ndsu-pulse-field-guide-2025` |
| `boundary_exclusions` | 下游活动 | 排除农场门之后的运输，以及工业粒径分级、脱皮、分瓣、研磨、罐藏、烹调与食品制造。 | `fao-postharvest-system` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | 鹰嘴豆田间生产管理 | `required` | 前景栽培的干鹰嘴豆始终纳入。 | 具有记录技术差异的前景生物生产 | 1 ha crop cycle |
| `harvest_threshing` | 收获、脱粒与田间捕集 | `required` | 作为成熟直立作物到收获散装籽粒的独立交接环节纳入。 | 具有替代技术路线差异的前景收获捕集 | harvested bulk grain leaving the node |
| `cleaning_grading` | 农场清理、分级与去向管理 | `required` | 在农场门产品交接前纳入。 | 初级调理与分级 | accepted plus downgraded and rejected incoming grain |
| `drying_stabilization` | 条件性通风或低温干燥稳定 | `conditional` | 当合格籽粒高于声明的安全交接水分，或需要冷却、通风时纳入。 | 保藏与稳定 | stabilized dry chickpea grain leaving the node |

生产模式按田块与作物周期索引生物生产，按田块与收获事件索引收获，并按批次及批式、作业期或连续运行期索引调理与稳定处理。清洁、切换与共享运行记录仅向相应批次分配一次。

### 过程: 鹰嘴豆田间生产管理 (`field_production`)

#### 输入

##### 产品流

###### 鹰嘴豆播种用种（`planting_seed`）

记录用于建植的自留或外购种子；保留包衣种子身份，且不得将其计入农场门食品产品。

- 选定流：鹰嘴豆播种用种
- 流属性/单位：Mass / kg
- 数量规则：田间实际投入种子质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per ha of planted chickpea in one crop cycle
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_field_materials`
- 来源：
- 数量范围：暂定播种质量筛查
  - 范围角色：`qa_guardrail`
  - 下限：20
  - 上限：350
  - 单位：kg/ha planted crop
  - 基准：per ha of planted chickpea in one crop cycle
  - 基准类型：`crop_cycle`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 农业养分与肥料投入（`agricultural_nutrients`）

所有矿质肥料、有机肥和含养分改良剂均在此卡统一记录。保留每种实际产品的身份、数量、配方、养分组成与施用事件；复合产品或有机产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5 and kg K2O as applicable
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次，并在不重复计算的前提下计算养分数量；生成数据集时展开并解析为经核实的具体产品 UUID
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per ha of planted chickpea in one crop cycle
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_nutrient_inputs`
- 来源：`saskatchewan-chickpea-fertilization`
- 数量范围：暂定施用产品总量筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg product/ha crop cycle
  - 基准：sum of actual nutrient-product masses per ha of planted chickpea; liquid products remain separately reported in native volume
  - 基准类型：`crop_cycle`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 作物保护与接种产品（`crop_protection_inputs`）

记录实际施用的制剂农药、种子处理剂、干燥剂和根瘤菌接种剂，并保留产品身份、有效成分与处理面积。

- 选定流：作物保护与接种产品
- 流属性/单位：Mass or volume / kg or L formulated product
- 数量规则：实际施用的制剂产品量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per ha of treated chickpea in one crop cycle
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_field_materials`
- 来源：`ndsu-pulse-field-guide-2025`
- 数量范围：暂定制剂产品筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg or L formulated product/ha crop cycle
  - 基准：sum of formulated products per treated ha; actual products remain separately reported
  - 基准类型：`crop_cycle`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 灌溉供水（`irrigation_water`）

仅记录人为供应给作物的水；降雨与土壤残余水分应披露，但不作为技术圈投入。

- 选定流：灌溉水
- 流属性/单位：Volume / m3
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则：计量或计算的田间灌溉供水量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per ha of planted chickpea in one crop cycle
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_irrigation`
- 来源：
- 数量范围：暂定灌溉水量筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：m3/ha crop cycle
  - 基准：deliberately supplied irrigation water per planted ha; zero applies to rainfed fields
  - 基准类型：`crop_cycle`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 田间机械能源载体（`field_energy`）

记录耕作、播种、喷施、灌溉及其他田间作业使用的每种实际燃料、电力或外包能源服务；避免外包燃料与服务记录重复计数。

- 选定流：田间机械能源载体
- 流属性/单位：Carrier-specific unit / L, kg, kWh or MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按田块归属的采购量、仪表读数或承包商记录
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per ha of planted chickpea in one crop cycle
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_field_energy`
- 来源：
- 数量范围：暂定能源载体筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：30000
  - 单位：MJ/ha crop cycle
  - 基准：sum of carrier energy converted to MJ per planted ha; zero is allowed for a carrier not used
  - 基准类型：`crop_cycle`
  - 证据类型：`reasoned_estimate`
  - 来源：


##### 基本流

###### 管理耕地占用（`land_occupation`）

记录鹰嘴豆管理作物的占地面积与作物周期；发生土地转化时另行报告。

- 选定流：按地点与土地利用类别划分的耕地占用
- 流属性/单位：Area-time / ha crop cycle
- 数量规则：播种占地面积乘以声明的作物周期比例
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per ha of planted chickpea in one crop cycle
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_area`
- 来源：
- 数量范围：面积基准恒等范围
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：ha crop cycle/ha crop cycle
  - 基准：one occupied hectare-cycle per hectare-cycle used as the process quantitative reference
  - 基准类型：`crop_cycle`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`


#### 输出

##### 产品流

###### 待收获的成熟直立鹰嘴豆作物（`mature_standing_crop`）

记录切割或联合收获前田间生产交接点的成熟 desi 或 kabuli 作物，并区分预计可回收籽粒与营养体生物质。

- 选定流：成熟直立鹰嘴豆作物
- 流属性/单位：Recoverable grain mass / kg
- 数量规则：实测收获籽粒加实测或估算收获损失，并与田块面积核对
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per ha harvested chickpea in one crop cycle
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_mass_balance`
- 来源：`saskatchewan-chickpea-harvest`; `fao-ecocrop-chickpea`
- 数量范围：公开区域产量区间
  - 范围角色：`typical_range`
  - 下限：350
  - 上限：2690
  - 单位：kg recoverable grain/ha harvested crop
  - 基准：recoverable mature grain per harvested ha; regional examples are a QA prior, not a universal conformity limit
  - 基准类型：`crop_cycle`
  - 证据类型：`external_source`
  - 来源：`saskatchewan-chickpea-harvest`; `fao-ecocrop-chickpea`


##### 基本流

###### 按物质与接收环境划分的田间直接排放（`direct_field_emissions`）

将每种实测或计算排放作为单独的具体基本流交换报告，包括前景边界内的管理土壤氮排放与燃料使用排放。

- 选定流：排放至空气、水体或土壤的已报告物质
- 流属性/单位：Substance-specific mass / kg
- 数量规则：使用声明的方法与因子根据采集的活动数据计算
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per ha of planted chickpea in one crop cycle
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定物质质量筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg reported substance/ha crop cycle
  - 基准：each substance and receiving medium is screened separately; the interval is provisional
  - 基准类型：`crop_cycle`
  - 证据类型：`reasoned_estimate`
  - 来源：

### 过程: 收获、脱粒与田间捕集 (`harvest_threshing`)

#### 输入

##### 产品流

###### 收获环节接收的成熟直立作物（`standing_crop_input`）

仅接收一次田间生产交接产出；关联同一田块与作物周期，避免重复计算生物生产产出。

- 选定流：成熟直立鹰嘴豆作物
- 流属性/单位：Recoverable grain mass / kg
- 数量规则：来自田间生产的关联产出
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per ha harvested chickpea in one crop cycle
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_mass_balance`
- 来源：`saskatchewan-chickpea-harvest`
- 数量范围：投入产出关联筛查
  - 范围角色：`qa_guardrail`
  - 下限：350
  - 上限：2690
  - 单位：kg recoverable grain/ha harvested crop
  - 基准：same regional recoverable-grain envelope as the linked field-production output
  - 基准类型：`crop_cycle`
  - 证据类型：`external_source`
  - 来源：`saskatchewan-chickpea-harvest`; `fao-ecocrop-chickpea`

###### 收获与脱粒能源载体（`harvest_energy`）

记录直接收割、割晒、联合收获与脱粒使用的实际能源载体，并将每次事件归属于田块、运行批次或作业期。

- 选定流：收获与脱粒能源载体
- 流属性/单位：Carrier-specific unit / L, kg, kWh or MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：实测能源载体用量或承包商记录
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per ha harvested chickpea in one crop cycle
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_energy`
- 来源：
- 数量范围：暂定收获能源筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ/ha harvested crop
  - 基准：sum of carrier energy converted to MJ per harvested ha
  - 基准类型：`crop_cycle`
  - 证据类型：`reasoned_estimate`
  - 来源：


#### 输出

##### 产品流

###### 收获脱粒后的散装鹰嘴豆籽粒（`harvested_bulk_grain`）

将该独立产品记录为联合收割机或脱粒环节交接的未清理散装籽粒，包括农场清理前的水分、杂质、裂粒与未成熟青粒。

- 选定流：未清理的收获散装鹰嘴豆籽粒
- 流属性/单位：Mass / kg
- 数量规则：称量的收获散装籽粒；仅在声明水分换算时进行修正
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per kg recoverable mature grain entering harvest
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_mass_balance`
- 来源：`saskatchewan-chickpea-harvest`
- 数量范围：收获回收质量平衡筛查
  - 范围角色：`qa_guardrail`
  - 下限：0.80
  - 上限：1.00
  - 单位：kg harvested bulk grain/kg recoverable mature grain
  - 基准：harvested bulk output divided by recoverable mature grain entering harvest
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 有明确去向的收集秸秆与荚壳残余物（`crop_residue_route`）

仅当秸秆与荚壳被有意收集并用于声明用途或销售时，才作为独立产品产出记录；否则作为田间残余物或损失，不赋予联产品地位。

- 选定流：收集的鹰嘴豆秸秆与荚壳残余物
- 流属性/单位：Dry mass / kg
- 数量规则：按去向计量的收集干物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per ha harvested chickpea in one crop cycle
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_mass_balance`
- 来源：
- 数量范围：暂定收集残余物筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg dry matter/ha harvested crop
  - 基准：collected straw and pod dry matter per harvested ha; zero applies when residues remain on the field
  - 基准类型：`crop_cycle`
  - 证据类型：`reasoned_estimate`
  - 来源：


##### 废物流

###### 炸荚、落荚与未回收籽粒（`harvest_losses`）

按田块与收获事件记录未回收籽粒和豆荚。归还田间的物料不得计入合格产品，其养分回归继续关联田间排放计算。

- 选定流：未回收的鹰嘴豆籽粒与豆荚
- 流属性/单位：Mass / kg
- 数量规则：核对测量不确定性后，以可回收成熟籽粒减去收获散装籽粒计算
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per kg recoverable mature grain entering harvest
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest_mass_balance`
- 来源：`saskatchewan-chickpea-harvest`
- 数量范围：暂定收获损失筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：0.20
  - 单位：kg loss/kg recoverable mature grain
  - 基准：unrecovered grain and pods divided by recoverable mature grain entering harvest
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：

### 过程: 农场清理、分级与去向管理 (`cleaning_grading`)

#### 输入

##### 产品流

###### 调理环节接收的收获散装籽粒（`bulk_grain_input`）

按批次接收未清理的收获产出，并保留水分、杂质、损伤、青粒与类别观测。

- 选定流：未清理的收获散装鹰嘴豆籽粒
- 流属性/单位：Mass / kg
- 数量规则：称量的入料批次质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per kg incoming harvested bulk grain
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_grade_mass_balance`
- 来源：`cgc-chickpea-grading`
- 数量范围：入料批次恒等筛查
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：kg incoming grain/kg reported incoming grain
  - 基准：measured incoming mass divided by the same reported lot mass
  - 基准类型：`process_output`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

###### 清理与分级能源载体（`conditioning_energy`）

记录农场清理、筛分、风选、分级与搬运使用的电力、燃料或外包服务，并关联至每个批次或运行期。

- 选定流：清理与分级能源载体
- 流属性/单位：Carrier-specific unit / kWh, L, kg or MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：仪表计量或分配的运行记录
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：per 1,000 kg incoming harvested bulk grain
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning_energy`
- 来源：`fao-grain-cleaning`
- 数量范围：暂定调理能源筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：500
  - 单位：kWh-equivalent/1,000 kg incoming grain
  - 基准：sum of converted energy carriers per 1,000 kg incoming grain
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：


#### 输出

##### 产品流

###### 农场门合格干鹰嘴豆籽粒（`accepted_dry_chickpeas`）

记录满足所声明水分、等级、损伤、杂质与去向规格的成熟、未加工 desi 或 kabuli 籽粒。无后续干燥节点时，此项为参考产品。

- 选定流：Chick peas, dry `c509fe95-d4ab-4db9-b593-f6329aef8dbd`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：按声明水分与等级称量的合格产出
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：per 1,000 kg accepted dry chickpeas at farm gate
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_grade_mass_balance`
- 来源：`cgc-chickpea-grading`; `cgc-chickpea-moisture`
- 数量范围：参考流恒等范围
  - 范围角色：`qa_guardrail`
  - 下限：1000
  - 上限：1000
  - 单位：kg accepted dry chickpeas/1,000 kg reference product
  - 基准：accepted product mass at the declared farm-gate hand-off
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

###### 降级的破碎、青粒、损伤或等外籽粒（`downgraded_grain`）

按原因与去向分别记录每种降级状态。仅当去向与价格有记录时，销往其他市场的物料才作为有意产出。

- 选定流：按声明状态划分的降级鹰嘴豆籽粒
- 流属性/单位：Mass / kg
- 数量规则：按状态与去向称量的降级产出
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：per kg incoming harvested bulk grain
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_grade_mass_balance`
- 来源：`cgc-chickpea-grade-tables`
- 数量范围：等级状态去向筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：0.20
  - 单位：kg downgraded grain/kg incoming grain
  - 基准：sum of downgraded grain states divided by incoming grain mass; actual grade tolerances remain separately declared
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 返回重新清理或重新分级的籽粒（`rework_return`）

将返回物料关联到原生产批次与具体返工作业。其在批次质量平衡中仅计一次，并在返工决定完成前排除于合格产出。

- 选定流：送返工的鹰嘴豆籽粒
- 流属性/单位：Mass / kg
- 数量规则：进入每次返工循环的称量质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per kg incoming harvested bulk grain per conditioning pass
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_grade_mass_balance`
- 来源：
- 数量范围：暂定返工循环筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：0.30
  - 单位：kg rework/kg incoming grain per pass
  - 基准：grain returned to rework divided by incoming mass for that pass
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：


##### 废物流

###### 杂质与不可回收清理废料（`cleaning_rejects`）

记录清理中去除的土粒、石块、植物碎屑与不可回收籽粒物料，并声明其实际处理或处置去向。

- 选定流：按物理身份与去向划分的清理废料
- 流属性/单位：Mass / kg
- 数量规则：按类别与去向称量的废料产出
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per kg incoming harvested bulk grain
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_grade_mass_balance`
- 来源：`fao-grain-cleaning`; `cgc-chickpea-grading`
- 数量范围：暂定清理废料筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：0.20
  - 单位：kg rejects/kg incoming grain
  - 基准：sum of non-recoverable rejects divided by incoming grain mass
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：

### 过程: 条件性通风或低温干燥稳定 (`drying_stabilization`)

#### 输入

##### 产品流

###### 需稳定处理的合格籽粒（`moist_grain_input`）

仅接收因声明水分或温度而需要通风、冷却或干燥的批次；保留上游等级与批次身份。

- 选定流：稳定处理前的合格鹰嘴豆籽粒
- 流属性/单位：Mass / kg
- 数量规则：按实测水分称量的入料批次
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per 1,000 kg stabilized dry chickpeas output
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drying_mass_balance`
- 来源：`saskatchewan-chickpea-harvest`; `cgc-chickpea-moisture`
- 数量范围：水分修正入料筛查
  - 范围角色：`qa_guardrail`
  - 下限：1000
  - 上限：1054
  - 单位：kg incoming grain/1,000 kg stabilized output
  - 基准：incoming grain at up to 18% moisture corrected to 14% moisture, before dry-matter rejects
  - 基准类型：`process_output`
  - 证据类型：`method_formula`
  - 来源：`saskatchewan-chickpea-harvest`; `mass-balance-identity`

###### 通风、冷却与干燥能源载体（`drying_energy`）

记录批次实际使用的每种电力、燃料或热载体，并区分环境通风与补充加热干燥。

- 选定流：干燥与通风能源载体
- 流属性/单位：Carrier-specific unit / kWh, L, kg or MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：分配至稳定处理批次的仪表计量能源用量
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：per 1,000 kg stabilized dry chickpeas output
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drying_energy`
- 来源：`saskatchewan-chickpea-harvest`; `fao-grain-drying`
- 数量范围：暂定稳定处理能源筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：2000
  - 单位：kWh-equivalent/1,000 kg stabilized output
  - 基准：sum of converted energy carriers; zero applies when no stabilization node is active
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：


#### 输出

##### 产品流

###### 农场门稳定干鹰嘴豆籽粒（`stabilized_dry_chickpeas`）

记录最终农场门交接的冷却或干燥成熟 desi 或 kabuli 籽粒，并保留水分、等级、相关粒径等级与干燥温度历史。

- 选定流：Chick peas, dry `c509fe95-d4ab-4db9-b593-f6329aef8dbd`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：按声明水分与等级称量的稳定产出
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：per 1,000 kg stabilized dry chickpeas at farm gate
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_drying_mass_balance`
- 来源：`saskatchewan-chickpea-harvest`; `cgc-chickpea-moisture`
- 数量范围：参考流恒等范围
  - 范围角色：`qa_guardrail`
  - 下限：1000
  - 上限：1000
  - 单位：kg stabilized dry chickpeas/1,000 kg reference product
  - 基准：stabilized product mass at the declared farm-gate hand-off
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

###### 热损伤、裂粒或其他降级籽粒（`drying_downgrade`）

按缺陷与去向记录稳定处理后进入较低价值去向的产品；将其排除于合格参考产出。

- 选定流：稳定处理后的降级鹰嘴豆籽粒
- 流属性/单位：Mass / kg
- 数量规则：按缺陷与去向称量的降级产出
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：per kg grain entering stabilization
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_drying_mass_balance`
- 来源：`saskatchewan-chickpea-harvest`
- 数量范围：暂定干燥降级筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：0.10
  - 单位：kg downgraded grain/kg incoming grain
  - 基准：downgraded output divided by grain entering stabilization
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：


##### 基本流

###### 籽粒排向空气的水分（`removed_moisture`）

依据实测进出料质量与水分比例计算去除水量。不得将该水量视为产品产量或无法解释的质量损失。

- 选定流：排向空气的水
- 流属性/单位：Mass / kg
- 数量规则：干物质核对后，以进料水质量减去出料水质量计算
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per 1,000 kg stabilized dry chickpeas output
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_drying_mass_balance`
- 来源：`mass-balance-identity`
- 数量范围：除水物理筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：54
  - 单位：kg water/1,000 kg stabilized output
  - 基准：water removed when grain enters at 14% to 18% moisture and leaves at 14% moisture, before dry-matter rejects
  - 基准类型：`process_output`
  - 证据类型：`method_formula`
  - 来源：`saskatchewan-chickpea-harvest`; `mass-balance-identity`


## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 所有多产出节点 | 分配前细分可直接测量的田间、收获、调理与稳定处理作业。将批次特定返工和废料负荷归于产生该物料的批次。 | `iso-14044-allocation` |
| `allocation_residue_status` | 秸秆、荚壳与降级籽粒 | 仅当有意收集、记录去向并证明经济或物理功能时，才将流分类为有意联产品。还田生物质、炸荚损失与丢弃废料属于残余物或损失，不给予产品信用。 | `iso-14044-allocation`; `saskatchewan-chickpea-harvest` |
| `allocation_remaining_burdens` | 鹰嘴豆籽粒与有意联产品 | 细分不能解决共享负荷时，对所有有意产出一致采用一种声明的分配方法。优先使用首次独立交接点的有记录经济分配；报告数量、价格、参考期及相对于质量分配的敏感性。 | `iso-14044-allocation` |
| `allocation_run_integrity` | 批次、作业期与返工循环 | 在受影响批次之间仅分配一次共享清洁、启动与切换负荷；返工作业保留其负荷和物料关联，废料不得计为合格产出。本方法采用单一期间归属，共享负荷不跨越作物周期边界。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_materials` | `field_production` | 种子与作物保护产品 | 发票、施用日志与田间记录 | 产品身份；配方；有效成分；数量；处理面积；日期；田块 | 核对采购、库存与施用记录 | 产品原始单位与 ha | 每次施用 | 完整作物周期 | 每个纳入田块 | 按产品与田块汇总后归一化至播种面积 | 发票、校准与施用日志 |
| `cp_nutrient_inputs` | `field_production` | 全部矿质、有机及改良剂养分产品 | 施用与组成记录 | 产品身份；质量或体积；密度；N、P 或 P2O5、K 或 K2O 含量；有机质；田块；日期 | 每种产品仅记录一次，并保留实验室或供应商组成 | kg 或 m3 产品及 kg 养分 | 每次施用 | 完整作物周期 | 每个纳入田块 | 汇总实际产品且不重复计数；由保留的组成计算养分质量 | 供应商分析、实验室结果与施用日志 |
| `cp_irrigation` | `field_production` | 人为供水 | 水表、水泵或调度记录 | 供水体积；田块；水源；泵送能源；日期 | 优先水表，否则采用有记录的流量乘时间计算 | m3 | 每次事件 | 完整作物周期 | 每个灌溉田块 | 按田块汇总供水量 | 水表记录或水泵计算 |
| `cp_field_energy` | `field_production` | 田间能源载体 | 燃料、仪表与承包商记录 | 载体；数量；作业；田块；日期；承包范围 | 核对自营与承包商记录 | 载体原始单位 | 每次作业 | 完整作物周期 | 每个纳入田块 | 按载体汇总一次，并以作业记录分配到田块 | 发票、仪表、机械或承包商日志 |
| `cp_field_area` | `field_production` | 土地占用 | 地理空间与田间记录 | 播种面积；作物日期；土地利用类别；前茬 | 经核实的田界与作物记录 | ha 与天 | 每作物周期一次 | 完整作物周期 | 每个纳入田块 | 面积乘以占用作物周期比例 | 地图与田块登记 |
| `cp_field_emissions` | `field_production` | 直接基本流排放 | 活动数据与计算工作簿 | 养分量；残余物 N；石灰；尿素；燃料；灌溉；土壤与气候参数；因子来源 | 将声明方法用于采集的活动数据 | kg 物质 | 每个相关事件及年度计算 | 完整作物周期 | 每个纳入田块 | 按物质与接收环境计算，并保留因子版本 | 计算工作簿与因子引用 |
| `cp_harvest_energy` | `harvest_threshing` | 收获能源载体 | 机械、燃料与承包商记录 | 路线；载体；数量；田块；日期；运行批次 | 将机械或承包商记录核对至收获事件 | 载体原始单位 | 每次事件 | 收获期 | 每个纳入田块 | 按田块与收获路线汇总一次 | 机械或承包商日志 |
| `cp_harvest_mass_balance` | `field_production`; `harvest_threshing` | 可回收作物、收获散粮、残余物与损失 | 地磅、产量监测与田间损失观测 | 田块；面积；散粮质量；水分；收集残余物；收获前后损失估计 | 校准称量与有记录田间抽样 | kg 与 kg/ha | 每个田块和收获事件 | 收获期 | 每个纳入田块 | 核对可回收籽粒、收获散粮与损失 | 校准、样品记录与核对结果 |
| `cp_conditioning_energy` | `cleaning_grading` | 清理与分级能源 | 仪表、运行时间与燃料记录 | 载体；仪表值；运行时间；批次；共享运行期 | 优先仪表；按有记录的驱动因素分配共享运行期 | 载体原始单位 | 每批次或运行期 | 调理期 | 每个纳入设施 | 在批次间仅分配一次共享能源 | 仪表与分配记录 |
| `cp_grade_mass_balance` | `cleaning_grading` | 入料、合格、降级、返工与废料 | 批次质量与代表性等级样品 | 批次；入料质量；水分；类别；损伤；青粒；杂质；粒径；各产出质量与去向 | 校准称量与代表性抽样 | kg 与质量百分比 | 每批次与返工作业 | 调理期 | 每个纳入设施 | 入料等于合格、降级、废料与核对损失；每次返工仅计一次 | 秤校准、样品链与平衡闭合 |
| `cp_drying_energy` | `drying_stabilization` | 通风与干燥能源 | 仪表、燃料与干燥机日志 | 载体；数量；进出料时间；温度；风量；批次 | 仪表或经核对的燃料交付量 | 载体原始单位 | 每批次或干燥期 | 稳定处理期 | 每个启用设施 | 向批次或有记录共享运行期分配能源 | 仪表、燃料与干燥机日志 |
| `cp_drying_mass_balance` | `drying_stabilization` | 湿入料、稳定产出、去除水分与降级品 | 批次质量与水分测试 | 进出料质量；进出料水分；温度；降级质量；去向 | 校准秤与代表性水分测试 | kg 与湿基百分比 | 每批次 | 稳定处理期 | 每个启用设施 | 保持干物质守恒并计算去除水分 | 秤与水分仪校准及核对结果 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_matter` | 水分换算 | 干物质 = 收货质量 ×（1 − 水分分数）；换算质量 = 干物质 ÷（1 − 目标水分分数） | 进料质量；进料水分；目标水分 | 水分修正质量与去除水分 | `mass-balance-identity` |
| `calc_field_yield` | 田间与收获节点 | 收获与损失的可回收籽粒除以收获田块面积；保留实测水分 | 收获散粮；实测损失；田块面积 | kg 可回收籽粒/ha | `mass-balance-identity` |
| `calc_grade_balance` | 调理节点 | 入料质量 = 合格 + 降级 + 不可回收废料 + 未解决测量差；返工为内部循环，不作为第二次最终产出相加 | 批次入料及全部产出状态质量 | 闭合批次平衡与无法解释差值 | `mass-balance-identity` |
| `calc_managed_soil_emissions` | 田间排放 | 使用声明的 IPCC 层级或经论证区域方法，由采集的养分与残余物活动数据计算直接及相关间接管理土壤排放 | 施用 N；残余物 N；挥发或淋溶活动数据；因子 | 按物质划分的基本流排放 | `ipcc-2019-managed-soils` |
| `calc_allocation` | 有意多产出节点 | 仅对细分后的剩余共享负荷采用声明方法和一个完整产出集合进行分配 | 产出数量；价格或物理驱动因素；共享负荷 | 按有意产出归属的负荷 | `iso-14044-allocation` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品与批次 | 保留 desi 或 kabuli 类别、具有实质影响时的品种、作物年度、来源田块、批次、水分基准、等级或去向及最终交接。 | 批次登记、样品与交付记录 |
| `dq_completeness` | 所有节点 | 覆盖全部纳入田块与批次，并按声明采集方法核对至少 95% 的物料和能源记录；披露排除项与未解决差值。 | 完整性矩阵与核对工作簿 |
| `dq_temporal` | 前景数据包 | 使用所代表作物周期及相关收获后阶段的记录；披露任何代理年份及原因。 | 带日期的田间、收获与批次记录 |
| `dq_route` | 替代路线 | 为每个受影响田块或批次记录雨养或灌溉、直接收割或割晒、调理设备，以及通风或加热干燥路线。 | 作业与设备日志 |
| `dq_grade_moisture` | 合格与降级产出 | 使用代表性抽样和校准的水分与质量测量；保留缺陷比例所用分母。 | 校准、样品链与测试结果 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求经核实的产品、Mass 属性与 Mass 单位组 UUID，以及全部必填限定信息。 | `cgc-chickpea-grading`; `cgc-chickpea-moisture` |
| `validate_nutrient_cardinality` | 每个过程 | 每个过程最多允许一张合并矿质肥料、有机肥与养分改良剂的产品投入卡；该卡只能绑定无 group 的 `flow-set.agricultural-nutrient-supply` 版本 `0.3.0`。 |  |
| `validate_route_resolution` | 田间、收获与稳定处理路线 | 按田块解析雨养或灌溉，按收获事件解析直接收割或割晒，按批次解析未启用、通风或加热干燥；采集每项所声明路线差异。 | `saskatchewan-chickpea-harvest`; `ndsu-pulse-field-guide-2025` |
| `validate_output_handoffs` | 全部产品与废料状态 | 对合格、降级、返工、收集残余物、田间损失与废物产出要求一个物理状态、分类与去向；任何产出不得在两个交接点重复计数。 | `cgc-chickpea-grading`; `mass-balance-identity` |
| `validate_rework` | 调理与稳定处理 | 将每次返工作业关联至来源批次，保留新增负荷，并将未解决返工或废料排除于合格产出。 | `mass-balance-identity` |
| `validate_batch_attribution` | 调理与稳定处理 | 按批次或运行期索引投入、产出、清洁与切换，并仅分配一次共享运行负荷。 | `mass-balance-identity` |
| `validate_mass_balance` | 收获、调理与干燥 | 核对实测投入与合格、降级、残余物、废料、除水及损失产出；节点差值超过投入 5% 时调查并披露。 | `mass-balance-identity` |
| `validate_moisture_temperature` | 合格与稳定籽粒 | 声明水分；标记高于所声明安全交接规格的批次；补充加热干燥时要求记录籽粒温度，并将达到或超过 45 °C 的值标记复核。 | `saskatchewan-chickpea-harvest`; `cgc-chickpea-moisture` |
| `validate_range_completeness` | 每张流卡 | 要求恰好一个完整范围，包含角色、上下限、单位、分母或基准、基准类型、证据类型与来源 id 列表；暂定筛查不得替代前景记录。 |  |

## 10. 发布数据集配置

| Field | Value |
| --- | --- |
| dataset_role | 干鹰嘴豆生产前景数据包与农场门过程数据集 |
| downstream_use | `secondary_dataset`；经独立审核与 UUID 解析后可作 `background_dataset` |
| allowed_use | 在声明的地理、年份、路线、类别、水分与等级范围内，用于需要农场门成熟干未加工鹰嘴豆的作物生产清单与生命周期模型 |
| excluded_use | 青鲜鹰嘴豆、种子商品、加工鹰嘴豆组分或食品，以及农场门后工业作业 |
| required_metadata | PCR id 与版本；地理范围；作物年度；desi 或 kabuli；具有实质影响时的品种；田块面积；前茬；雨养或灌溉；收获路线；批次与等级；水分基准；调理与稳定处理路线；分配方法；具体交换 UUID |
| required_quality_disclosure | 覆盖度与完整性；测量与抽样方法；校准；路线特定代理；质量平衡闭合；范围筛查例外；未解决流身份；来源与因子版本；分配敏感性 |
| update_trigger | 产品边界、平台 UUID 身份、Flow Set 合同、农艺或收获后路线、等级或水分规格、排放方法、分配证据或代表性前景记录发生实质变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `saskatchewan-chickpea-harvest` | `official_guidance` | Government of Saskatchewan, Chickpea Harvesting Considerations, https://www.saskatchewan.ca/business/agriculture-natural-resources-and-industry/agribusiness-farmers-and-ranchers/crops-and-irrigation/field-crops/pulse-crop-bean-chickpea-faba-bean-lentils/chickpea/harvesting, retrieved 2026-09-20 | desi 与 kabuli 产量示例；直接收割与割晒；收获水分；炸荚与青粒风险；安全水分；分级与干燥温度指导 |
| `saskatchewan-chickpea-fertilization` | `official_guidance` | Government of Saskatchewan, Chickpea Fertilizer Considerations, https://www.saskatchewan.ca/business/agriculture-natural-resources-and-industry/agribusiness-farmers-and-ranchers/crops-and-irrigation/field-crops/pulse-crop-bean-chickpea-faba-bean-lentils/chickpea/fertilizer-considerations, retrieved 2026-09-20 | 鹰嘴豆养分管理角色与产品组成记录 |
| `ndsu-pulse-field-guide-2025` | `extension_guidance` | NDSU Extension, Pulse Crop Production Field Guide for North Dakota, A1922, https://www.ndsu.edu/agriculture/sites/default/files/2025-09/a1922.pdf, retrieved 2026-09-20 | 鹰嘴豆生产、收获、损伤、水分、搬运与储存路线证据 |
| `cgc-chickpea-grading` | `standard` | Canadian Grain Commission, Official Grain Grading Guide, Chapter 22: Chickpeas, https://www.grainscanada.gc.ca/en/grain-quality/official-grain-grading-guide/22-chickpeas/grading.html, retrieved 2026-09-20 | 类别、代表性样品、分级状态与缺陷定义 |
| `cgc-chickpea-grade-tables` | `standard` | Canadian Grain Commission, Chickpeas primary and export grade determination tables, https://www.grainscanada.gc.ca/en/grain-quality/official-grain-grading-guide/22-chickpeas/primary-export-grade-determination-tables.html, retrieved 2026-09-20 | 损伤、机械损伤、青粒与杂质等级阈值 |
| `cgc-chickpea-moisture` | `standard` | Canadian Grain Commission, Moisture specifications, https://grainscanada.gc.ca/en/grain-quality/official-grain-grading-guide/02-moisture-testing/moisture-specifications.html, retrieved 2026-09-20 | 鹰嘴豆正常、偏湿与潮湿水分状态 |
| `fao-ecocrop-chickpea` | `dataset` | FAO EcoCrop, Cicer arietinum crop record, https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=2479, retrieved 2026-09-20 | 非洲雨养产量示例与产品生物学背景 |
| `fao-postharvest-system` | `handbook` | FAO, Post-harvest system and food losses, https://www.fao.org/4/ac301e/AC301e03.htm, retrieved 2026-09-20 | 收获、脱粒、清理、干燥与储存职责分离 |
| `fao-grain-cleaning` | `handbook` | FAO, Agricultural engineering in development: Grain cleaning and insecticide treatments, https://www.fao.org/4/t0522e/t0522e0b.htm, retrieved 2026-09-20 | 清理投入、杂质分离与准备后产出状态 |
| `fao-grain-drying` | `handbook` | FAO, Agricultural engineering in development: Drying, https://www.fao.org/4/t0522e/T0522E08.htm, retrieved 2026-09-20 | 将干燥作为有边界的稳定处理职责 |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤 N2O 及石灰或尿素 CO2 的计算范围与因子 |
| `iso-14044-allocation` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including current amendments | 细分与分配层级 |
| `mass-balance-identity` | `method_factor` | 对实测过程投入、产出、水分与损失采用的质量守恒恒等式 | 确定性质量、水分、产量、返工与交接核对 |
