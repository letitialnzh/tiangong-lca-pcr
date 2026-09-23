---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.raspberries-blackberries-mulberries-and-loganberries
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 覆盆子、黑莓、桑葚和罗甘莓

## 1. 适用范围

本候选 PCR 覆盖新鲜覆盆子、黑莓、桑葚和罗甘莓从作物管理、采收到农场交货或首个可销售出口前的初级调理、分级和发运。适用于已声明的露地、保护地和多年生系统。不包括苗木、零售、消费者使用以及冷冻、干燥、果汁、果酱或葡萄酒加工。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.raspberries-blackberries-mulberries-and-loganberries |
| classification_refs | CPC 3.0 / 01353 |
| covered_products | 新鲜覆盆子、黑莓、桑葚和罗甘莓 |
| excluded_products | 加工产品；苗木和繁殖材料 |
| representative_product | 已声明物种、品种和等级的可销售新鲜浆果 |
| production_route | 受管理生物生产 → 采收 → 初级调理 → 分级/排序 → 发运 |
| market_state | 声明出口状态下的新鲜可销售产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明出口处的可销售新鲜浆果 |
| How much | 1 kg |
| How well | 声明物种、品种、系统、季节、质量等级、状态和可销售产量定义 |
| How long or cycle | 一个声明的生产季；披露多年生建植和跨年度归属 |
| reference_flow_link | 一个声明的可销售浆果产品流；身份未解析 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 覆盆子、黑莓、桑葚和罗甘莓 `562e96d5-9c9f-4b90-877c-b2ebf33c87cc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；品种；生产系统；采收季；质量等级；可销售产量；出口状态；分配基础；作物年龄或建植处理 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `rule_mass_reference` | reference product | Mass | kg | 将结果归一化为声明出口处 1 kg 可销售新鲜产品。 |
| `rule_yield_basis` | yield and inventory | Mass | kg fresh product | 使用称量的可销售产量，并单独披露已采收但被拒收的量和田间损失。 |
| `rule_nutrient_basis` | fertilizer and soil amendment | Product mass and nutrient mass where available | kg product; kg nutrient | 记录实际产品及 N/P/K 基准，不得替换为未标识的通用肥料产品。 |
| `rule_perennial_attribution` | perennial inputs | Mass, area or time | kg, ha, year | 将建植和共享植株投入按声明生产期分配，并披露基础。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已准备好声明季节生产的露地或保护地单元；采购投入在经营者接收时进入 |
| starting_condition_role | 前景从作物群管理开始，在农场交货或首个可销售出口结束 |
| product_classification_scope | 新鲜覆盆子、黑莓、桑葚和罗甘莓；由语义范围决定纳入 |
| recursive_input_rule | 同类别水果作为投入时视为内部转移，不递归建模为新的作物产品 |
| upstream_dataset_requirement | 对未作为前景作业计量的电力、燃料、肥料、改良剂、包装、供水和外购服务使用单独记录的背景数据集 |
| disclosure | 声明土地/设施、作物年龄、季节、出口、产量、损失、灌溉、养分产品、包装和排除项 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_end` | all datasets | 纳入作物管理至发运；排除下游加工和零售。 | `source-fao-lca-guidance` |
| `boundary_perennial` | perennial systems | 披露建植和生产期归属，不得默认为单一季节承担全部建植负荷。 | `source-fao-lca-guidance` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `process_crop_establishment` | 作物建植和植株维护 | conditional | 有建植、补植或多年生管理时纳入 | biological production | 面积和生产期 |
| `process_crop_management` | 季节性作物管理 | required | 始终纳入 | biological production | 季节和可销售 kg |
| `process_harvest` | 采收和田间捕获 | required | 始终纳入 | harvest capture | 采收和可销售质量 |
| `process_conditioning_grading` | 初级调理和分级 | conditional | 出口前有清洗、冷却、排序或包装时纳入 | primary conditioning | 发运 kg |
| `process_reject_routing` | 拒收、损失和副产品去向 | conditional | 有不可销售浆果或副产品时纳入 | attribution and waste routing | 质量平衡 |

每个过程均按方向（`Inputs`、`Outputs`）和流类型（`Product flows`、`Waste flows`、`Elementary flows`）报告。每行均为 flow card，含 `row_id`、流身份、流属性/单位、数量规则、`value_mode`、`specificity`、`basis_kind`、`evidence_kind`、`collection_protocol_id` 和 `source_ids`。

### 过程：作物建植和植株维护（`process_crop_establishment`）
#### 输入
##### 产品流
###### 建植材料（`establishment_inputs`）
按地块和事件记录实际植株、棚架、基质和补植材料。
- 选定流：建植材料（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：按采购或领用记录测量，并按生产期归属
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售鲜浆果
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`source-fao-lca-guidance`
##### 基础流
###### 建植土地占用（`establishment_land`）
记录声明种植区的面积、持续时间和土地转化状态。
- 选定流：土地占用或转化（UUID unresolved；intentionally blank）
- 流属性/单位：面积时间 / ha-year
- 数量规则：地块登记和面积图
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售鲜浆果
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`source-fao-lca-guidance`

### 过程：季节性作物管理（`process_crop_management`）
#### 输入
##### 产品流
###### 农业养分与肥料投入（`process_crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售鲜浆果
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`source-fao-lca-guidance`; `source-ipcc-2019-refinement`
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 灌溉水（`irrigation_water_services`）
按地块、来源、作业和季节记录灌溉水。
- 选定流：灌溉供水（UUID unresolved；intentionally blank）
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：水表、交付单、发票或作业日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售鲜浆果
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`source-fao-lca-guidance`
###### 能源服务（`energy_services`）
记录田间作业和外购服务使用的电力、燃料及其他能源载体。
- 选定流：电力、燃料或能源载体（UUID unresolved；intentionally blank）
- 流属性/单位：能量或质量 / kWh、MJ 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：水表、交付单、发票或作业日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售鲜浆果
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`source-fao-lca-guidance`

### 过程：采收和田间捕获（`process_harvest`）
#### 输入
##### 产品流
###### 采收材料（`harvest_materials`）
按采收期记录实际采收辅助材料和田间包装。
- 选定流：采收材料（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：领用和退回对账
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售鲜浆果
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`source-fao-lca-guidance`
#### 输出
##### 产品流
###### 采收浆果（`harvested_berries`）
在调理前按物种和等级称量采收浆果。
- 选定流：采收鲜浆果（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：批次称量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售鲜浆果
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_records`
- 来源：`source-fao-lca-guidance`
##### 废物流
###### 采收损失（`harvest_losses`）
记录田间损失或有文件依据的估算，并注明去向和估算方法。
- 选定流：采收损失（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：损失称量或质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售鲜浆果
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_records`
- 来源：`source-fao-lca-guidance`

### 过程：初级调理和分级（`process_conditioning_grading`）
#### 输入
##### 产品流
###### 调理用水（`conditioning_inputs`）
记录与各批次关联的清洗或其他调理用水。
- 选定流：调理供水（UUID unresolved；intentionally blank）
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：接收、能源和包装记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售鲜浆果
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`source-fao-lca-guidance`
###### 调理能源（`conditioning_energy`）
记录冷却、清洗、分选或包装设备使用的电力、燃料和其他能源。
- 选定流：调理能源供给（UUID unresolved；intentionally blank）
- 流属性/单位：能量或质量 / kWh、MJ 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：水表、发票和批次关联的运行日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售鲜浆果
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`source-fao-lca-guidance`
###### 调理包装（`conditioning_packaging`）
适用时记录调理运行消耗的包装和呈现材料。
- 选定流：调理包装材料（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- 数量规则：发票、领用记录和批次关联的运行日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售鲜浆果
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`source-fao-lca-guidance`
#### 输出
##### 产品流
###### 可销售浆果（`marketable_berries`）
使用声明农场交付或首个可销售出口处的最终称量产品。
- 选定流：覆盆子、黑莓、桑葚和罗甘莓（参考流中已绑定 UUID）
- 流属性/单位：质量 / kg
- 数量规则：批次发运重量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售鲜浆果
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_yield_records`
- 来源：`source-fao-lca-guidance`
##### 废物流
###### 调理拒收物（`conditioning_rejects`）
按去向和处理路线记录分级拒收物。
- 选定流：调理拒收物（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：拒收称量或质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售鲜浆果
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_records`
- 来源：`source-fao-lca-guidance`

## 7. 分配和副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_marketable_rejects` | outputs and rejects | 按实测质量和去向分开产品、拒收物和废物；仍有副产品时使用有文件依据的物理或经济基础并报告敏感性。 | `source-fao-lca-guidance` |
| `allocation_multi_period` | perennial systems | 按声明的生产期及产量或时间份额分配共享建植和植株管理负荷。 | `source-fao-lca-guidance` |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `process_crop_establishment` | inputs and land | field log, invoice, area map | area, age, plants, materials, dates | 对账田间和采购记录 | kg, ha, year | event/annual | 建植和生产期 | each block | 按声明生产期归属 | invoices, maps, review |
| `cp_input_records` | `process_crop_management` | inputs | invoice, meter, application log | product, nutrient content, amount, date, field | 采集原始记录并对账 | kg, kg nutrient, m3, kWh, L | event/monthly | full season | block/site | 按季节汇总 | invoices, meters |
| `cp_yield_records` | `process_harvest` | outputs | weigh ticket, harvest log | species, grade, mass, date, block | 每批次和出口称量 | kg | each lot | full season | block/outlet | 汇总批次和等级 | calibrated scale |
| `cp_harvest_records` | `process_harvest` | harvest materials | issue/waste log | material, quantity, route | 对账领用和退回 | kg | harvest period | full season | harvest operation | 按材料汇总 | inventory records |
| `cp_conditioning_records` | `process_conditioning_grading` | conditioning inputs | meter, packing log, invoice | input, amount, lot, energy | 与批次关联的记录 | kg, m3, kWh | lot/daily | full season | conditioning unit | 按批次质量分配 | meters, invoices |
| `cp_reject_records` | `process_reject_routing` | rejects and destinations | grading/destination log | mass, quality, destination, treatment | 每批次质量平衡 | kg | each lot | full season | site/outlet | 对账全部输出 | receipts, balance |
| `cp_emission_calculation` | all relevant processes | elementary exchanges | calculation record | activity, factor, method, uncertainty | 应用声明方法 | kg substance or MJ | reporting period | declared period | site/block | 计算后归一化 | cited method |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_marketable` | all rows | inventory amount / marketable fresh berry mass | process amount, marketable mass | per kg | `source-fao-lca-guidance` |
| `calc_nutrient_application` | fertilizer card | product mass × declared nutrient fraction; retain product mass | product mass, nutrient fraction | product and nutrient amounts | `source-fao-lca-guidance` |
| `calc_perennial_share` | establishment | shared burden × declared season/yield share | burden, period, yield | season amount | `source-fao-lca-guidance` |
| `calc_mass_balance` | harvest and routing | harvested = marketable + rejects + losses within declared tolerance | all mass records | reconciled balance | `source-fao-lca-guidance` |

必须具备可追溯身份、校准称量、完整季节覆盖、地块范围、批次对账、书面分配和缺失数据处理。披露代表性、不确定性、作物年龄、产量变异和未解析身份。

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference flow | 确认一个产品流、质量属性和 kg 单位；未解析身份保留为 review finding。 | `source-fao-lca-guidance` |
| `validation_completeness` | foreground package | 必需过程和协议必须存在，或有理由标记为不适用。 | `source-fao-lca-guidance` |
| `validation_mass_balance` | harvest and routing | 核对采收质量、可销售产品、拒收物和损失；无法解释的差额使验证失败。 | `source-fao-lca-guidance` |
| `validation_nutrient_basis` | fertilizer and amendments | 核对产品、养分含量、数量、日期、面积和原始记录；无标识通用总量不合格。 | `source-fao-lca-guidance`, `source-ipcc-2019-refinement` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；仅在完整并通过审查后作为 background_dataset |
| downstream_use | 新鲜浆果前景生产及其产品系统建模 |
| allowed_use | 已声明新鲜浆果系统、季节和出口 |
| excluded_use | 加工产品、零售、未指明系统或未披露季节 |
| required_metadata | 物种、品种、地理、年龄、系统、季节、出口、产量、产品、分配、损失 |
| required_quality_disclosure | 完整性、代表性、测量基础、不确定性和未解析身份 |
| update_trigger | 新季节、补植、路线/投入/出口变化或质量平衡更正 |

## 11. 数据源

| source_id | type | Reference | Use |
| --- | --- | --- | --- |
| `source-fao-lca-guidance` | official_guidance | FAO food and agriculture environmental performance guidance | 边界、过程图、采集、分配和质量 |
| `source-ipcc-2019-refinement` | method_factor | IPCC 2019 Refinement to the 2006 Guidelines | 条件性田间排放和养分计算方法 |
