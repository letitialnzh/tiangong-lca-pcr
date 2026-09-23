---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.strawberries
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 草莓

## 1. 范围与适用性
本规则适用于在农场大门或首次声明交接点交付的栽培草莓，覆盖作物周期、采收、分级、可选初级调理、投入、产出、损失、拒收物和联产品；除非明确声明，否则不含零售、消费者使用和报废。

## 2. 产品类别身份
产品为草莓果实（CPC 01354），可来自露地、保护地或混合生产。应说明生产系统、地点/区域、作物年度、重要时的品种/品种组和交接点。
| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.strawberries |
| classification_refs | CPC 3.0 / 01354 |
| covered_products | 栽培的新鲜草莓 |
| excluded_products | 苗圃材料、加工产品、零售和消费者使用 |
| representative_product | 声明交接点的可销售新鲜草莓 |

## 3. 参考流
| 字段 | 值 |
|---|---|
| What | 声明交接点的可销售草莓 |
| How much | 1 kg 鲜草莓 |
| How well | 等级、成熟度、水分状态和可销售状态 |
| How long or cycle | 一个作物年度或生产周期 |
| reference_flow_link | 一个声明的可销售草莓产品流；身份未解析 |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 声明交接点的可销售新鲜草莓（UUID 未解析；有意留空） |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 生产系统；地点/区域；作物年度；品种/品种组；采收和可销售质量；拒收/损失/返工/回收去向；灌溉和能源；肥料产品及养分基础；调理；交接点；分配基础；报告期和资产归属 |

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement-01` | all product and waste masses | 质量 | kg | 使用一个声明的交接基础，并核对采收、可销售、降级、拒收和丢弃质量。 |
| `measurement-02` | fertilizer and amendments | 产品和养分质量 | kg 产品；kg N/P/K | 记录实际产品质量和声明的养分基准；养分质量不替代产品质量。 |
| `measurement-03` | area, time, water and energy | 活动特定属性 | 声明的活动单位 | 保留原始单位并记录换算、灌溉来源和能源载体。 |

## 5. 系统边界
### 边界概化
| Field | Value |
| --- | --- |
| declared_starting_condition | 受管理的草莓地点和作物周期，包括可归属的建植投入 |
| starting_condition_role | 草莓生产的起始条件 |
| product_classification_scope | 对应 CPC 3.0 01354 的栽培新鲜草莓果实 |
| recursive_input_rule | 对声明的外购投入停止同类产品递归，并链接其上游数据集 |
| upstream_dataset_requirement | 为跨越边界的外购投入和服务提供适用背景数据集 |
| disclosure | 声明系统、地点、周期、交接点、产量、损失、投入、去向、分配和未解析身份 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary-01` | foreground system | 起始于受管理的草莓地点和作物周期，包括可归属的建植投入。 | `source-02` |
| `boundary-02` | foreground system | 包括种苗、土壤/基质准备、肥料/改良剂、作物保护、灌溉、田间/温室能源、可归属基础设施、采收、分级和交接前初级调理。 | `source-02` |
| `boundary-03` | purchased inputs and waste | 外购投入须使用适用背景数据并披露未解析身份；残余物、损失、拒收物和废物在声明去向前仍在边界内。 | `source-02` |

## 6. 过程清单结构
### 过程图
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
|---|---|---|---|---|---|
| `process-01` | 作物栽培管理 | required | 全部作物周期作业 | managed biological production | 作物周期和可销售 kg |
| `process-02` | 采收和捕获 | required | 全部采收作业 | harvest capture | 采收和可销售 kg |
| `process-03` | 分级和交付 | required | 发生分级或交付时 | grading and sorting | 交付 kg |
| `process-04` | 初级调理 | conditional | 交付前发生清洗、冷却或包装时 | primary conditioning | 调理 kg |

### 过程：作物栽培管理（`process-01`）
#### 输入
##### 产品流
###### 种植材料（`row-01`）
按地点或地块记录种植材料、品种或品种组、繁殖形态、数量和供应商。
- 选定流：草莓种植材料（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg 产品
- 数量规则：供应商、发票和种植记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-cultivation`
- 来源：`source-01`
###### 农业养分与肥料投入（`process-01_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售草莓
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-cultivation`
- 来源：`source-01`
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 作物保护产品（`row-03`）
记录实际使用的作物保护产品、有效成分或制剂、施用事件和去向。
- 选定流：作物保护产品（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg 产品
- 数量规则：施用日志、供应商记录和发票
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-cultivation`
- 来源：`source-01`
###### 灌溉水（`row-04`）
记录灌溉水源、体积及地块或生产单元的施用基础。
- 选定流：灌溉供水（UUID unresolved；intentionally blank）
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：水表、交付单、发票或作业日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-cultivation`
- 来源：`source-01`
###### 能源载体（`row-18`）
记录栽培作业使用的电力、燃料和其他能源载体。
- 选定流：电力、燃料或能源载体（UUID unresolved；intentionally blank）
- 流属性/单位：能量或质量 / kWh、MJ 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：水表、交付单、发票或作业日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-cultivation`
- 来源：`source-01`
#### 输出
##### 产品流
###### 作物产出（`row-05`）
根据分级前采收批次记录计算作物产出。
- 选定流：草莓作物产出（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：作物和采收质量记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp-cultivation`
- 来源：`source-01`
##### 废物流
###### 残余物和田间损失（`row-06`）
记录作物残余物和田间损失的数量、去向以及处理或回收路线。
- 选定流：作物残余物和田间损失（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：田间记录、损失估算和质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-cultivation`
- 来源：`source-01`

### 过程：采收和捕获（`process-02`）
#### 输入
##### 产品流
###### 可采收果实（`row-07`）
根据移出和分级前的作物记录计算可采收果实。
- 选定流：可采收果实（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：作物估算与采收记录对账
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 采收草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp-harvest`
- 来源：`source-01`
#### 输出
##### 产品流
###### 采收草莓（`row-08`）
使用校准秤或采收日志记录送往分级或交付的草莓。
- 选定流：采收草莓（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：称重单或采收日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 采收草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-harvest`
- 来源：`source-01`
##### 废物流
###### 采收损失（`row-09`）
记录田间损失或偶发材料并注明去向。
- 选定流：采收损失（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：损失记录和质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 采收草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-harvest`
- 来源：`source-01`

### 过程：分级和交付（`process-03`）
#### 输入
##### 产品流
###### 进入分级的果实（`row-10`）
将进入分级的质量与采收批次记录对账。
- 选定流：进入分级的草莓（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：接收记录和采收对账
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp-grading`
- 来源：`source-01`
#### 输出
##### 产品流
###### 可销售等级（`row-11`）
记录接收的可销售等级和发运重量。
- 选定流：新鲜可销售草莓（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：分级和发运记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 交付草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-grading`
- 来源：`source-01`
###### 降级或其他用途果（`row-12`）
将降级或其他用途果与合格商品等级分开记录，并披露其去向。
- 选定流：降级或其他用途草莓（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：分级记录和去向核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-grading`
- 来源：`source-01`
##### 废物流
###### 拒收或丢弃果实（`row-13`）
记录拒收果实、损失及处理路线。
- 选定流：草莓拒收物或废物（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：拒收记录和质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-grading`
- 来源：`source-01`

### 过程：初级调理（`process-04`）
#### 输入
##### 产品流
###### 进入调理的原料果（`row-14`）
适用时记录调理接收的原料果，并将其与进料分级或发运批次关联。
- 选定流：进入调理的原料草莓（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：进料记录和批次核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-conditioning`
- 来源：`source-01`
###### 调理用水（`row-15`）
当清洗或其他调理用水跨越前景边界时，记录其数量。
- 选定流：调理供水（UUID unresolved；intentionally blank）
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：水表、发票和运行日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-conditioning`
- 来源：`source-01`
###### 调理包装材料（`row-19`）
当包装或呈现材料跨越前景边界时，记录调理运行消耗的材料。
- 选定流：调理包装材料（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- 数量规则：发票、领用记录和运行日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-conditioning`
- 来源：`source-01`
###### 调理能源（`row-20`）
记录清洗、冷却、稳定或包装设备使用的电力、燃料和其他能源。
- 选定流：调理能源供给（UUID unresolved；intentionally blank）
- 流属性/单位：能量或质量 / kWh、MJ 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：水表、发票和运行日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-conditioning`
- 来源：`source-01`
#### 输出
##### 产品流
###### 交付处的调理草莓（`row-16`）
记录声明交付处的最终调理草莓。
- 选定流：交付处新鲜草莓（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：发运记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 交付草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-conditioning`
- 来源：`source-01`
##### 废物流
###### 调理损失和拒收物（`row-17`）
记录调理损失、拒收物和去向。
- 选定流：调理损失或拒收物（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：运行质量平衡和废物记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付草莓
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 产品的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp-conditioning`
- 来源：`source-01`

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation-01` | plots, systems, runs, grades and conditioning lines | 记录支持时分开核算地块、系统、批次、等级和调理线；否则披露汇总基础。 | `source-03` |
| `allocation-02` | shared burdens and co-products | 列出有意产出并采用一种有记录的物理或经济基础；残余物和废物除非明确声明为产品，否则不分配。 | `source-03` |
| `allocation-03` | crop-year and multi-period assets | 将建植和跨期资产关联到作物年度、阶段、替换和终止；事件未解决时不得最终确定。 | `source-03` |
| `allocation-04` | downgrade, recovery and disposal | 明确返工、回收、降级和处置路径；拒收果不计入合格产出且不得重复计量。 | `source-03` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp-cultivation` | `process-01` | inputs and outputs | 发票、日志、水表、田间簿 | 产品、养分、数量、用水、能源、作物产出 | 对账供应商和田间记录 | kg、kg 养分、m3、kWh | 作业/月度 | 全作物周期 | 各地点/地块 | 按地点和周期汇总 | 发票、水表和审查 |
| `cp-harvest` | `process-02` | harvested fruit and loss | 称重单和采收日志 | 批次、日期、质量、地块、去向 | 每批次称量并对账 | kg | 每批次 | 采收季 | 各地块 | 汇总批次 | 校准秤和日志 |
| `cp-grading` | `process-03` | incoming, accepted and rejected fruit | 分级和发运记录 | 进料、等级、质量、去向 | 批次质量平衡 | kg | 每批次 | 分级期间 | 各产线/地点 | 核对全部状态 | 发运和去向记录 |
| `cp-conditioning` | `process-04` | conditioning input, output and waste | 运行日志、水表、发票 | 批次、投入、公用工程、产出、废物 | 与批次关联的对账 | kg、m3、kWh | 每次运行 | 调理期间 | 调理单元 | 按批次质量分配 | 水表和运行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation-01` | all normalized rows | 流数量 / 声明交接点的合格草莓质量。 | 流数量；合格质量 | 每 kg 合格草莓的数量 | `source-03` |
| `calculation-02` | site or period aggregation | 按数量加权汇总并披露分母；不得直接平均强度。 | 地点/期间数量；分母 | 加权强度 | `source-03` |
| `calculation-03` | fertilizer and amendments | 产品质量 × 声明的养分比例；分别保留产品质量和养分质量。 | 产品质量；养分比例 | 产品和养分数量 | `source-02` |
| `calculation-04` | harvest, grading and conditioning | 在声明容差内核对进料与合格、降级、回收、返工、拒收和丢弃状态。 | 全部质量记录 | 质量平衡结果 | `source-03` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality-01` | all foreground records | 记录时间、地理和技术代表性、完整性、测量或估算方法、不确定性及数据质量说明。 | 田间记录、日志和审查 |
| `quality-02` | identity and qualifiers | 记录生产系统、地点/区域、作物年度、品种/品种组、交接点和未解析身份状态。 | 数据集元数据和来源记录 |
| `quality-03` | mass and allocation | 使用校准称量或有记录的估算，核对批次，并保留分配和去向证据。 | 称重记录、质量平衡和去向记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation-01` | reference flow | 确认 1 kg 参考基础、质量属性和 kg 单位；未解析参考身份仍是明确审查缺口。 | `source-03` |
| `validation-02` | process sequence | 确认栽培—采收—分级—调理/交接顺序，并为每个产出、损失、拒收物和废物状态指定去向。 | `source-03` |
| `validation-03` | mass balance | 在记录容差内确认进料等于合格、降级、回收、返工和丢弃状态之和。 | `source-03` |
| `validation-04` | products, nutrients and allocation | 确认产品/养分基础、单位、作物年度归属、分配、期间和返工处理，避免重复计量。 | `source-02`、`source-03` |
| `validation-05` | dataset completeness | 缺少限定信息、身份、证据、去向或分配决定时，数据集必须进入审查。 | `source-03` |

## 10. 已发布数据集画像
| Field | Value |
| --- | --- |
| dataset_role | 农场大门草莓 LCA 的二级前景数据集 |
| downstream_use | 前景过程和生命周期模型构建 |
| allowed_use | 声明的草莓系统、交接点、地理范围和报告周期 |
| excluded_use | 加工、零售、消费者使用或实质不同的系统 |
| required_metadata | 地点、系统、品种/品种组、周期、产量、投入、损失、去向、分配和身份状态 |
| required_quality_disclosure | 完整性、代表性、测量、估算、不确定性和未解析 UUID |
| update_trigger | 技术、边界、投入、分配或报告基础发生实质变化 |

## 11. 数据源
| source_id | type | Reference | Use |
|---|---|---|---|
| `source-01` | dataset | 当前产品路线证据和草莓生产周期前景记录 | 身份、数量、边界、产出状态和采集完整性 |
| `source-02` | official_guidance | 审查阶段选定的官方农艺指南 | 实践背景，不替代场址特定数量 |
| `source-03` | standard | 审查阶段选定的 ISO 14040/14044 一致 LCA 原则和项目规则 | 边界、分配、记录和数据质量 |
