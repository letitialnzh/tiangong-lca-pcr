---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.wholegrain-brown-mustard
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 粗粒褐芥末酱

## 1. 范围与适用性

本 PCR 针对一种具体湿调味酱：由已清理的褐芥子 Brassica juncea、发酵酒精醋、饮用水和食品级食盐制成，保留种皮。代表路线为接收、配方计量与浸渍、湿磨、暂存、条件性脱气、装罐、封盖及出厂前储存。芥子种植和供应商清理、食醋发酵及外购公用工程生产留在上游。此门到门前景本身不构成完整摇篮到大门覆盖。

CPC 3.0 23995 还包含其他酱汁、混合调味品、芥末粉及粗粉和其他制备芥末，均未由本 PCR 覆盖。筛除种皮的细滑第戎芥末、芥末粉、芥子油、芥菜蔬菜、富油调味酱、额外添加糖/香辛料/酒的配方以及场址内有意进行的芥末发酵，须使用其他经审查方法或扩展范围。不规定热保藏、冷藏或场址内燃烧，亦不假定所有工厂均无这些操作：须核实所选非热加工、电力驱动路线。实际存在额外操作的工厂，在声称完整性之前必须以实测原子交换扩展过程清单。

本文规定 LCA 数据生产方法，不构成食品安全批准或加工配方。不设温度、时间、配料比例或保质期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.wholegrain-brown-mustard |
| classification_refs | CPC 3.0 23995 (narrower) |
| covered_products | 四配料、保留种皮的粗粒褐芥末酱 |
| excluded_products | 其他酱汁和混合调味品；干芥末粉/粗粉；筛皮细滑芥末；额外配料配方；芥菜蔬菜和芥子油 |
| representative_product | 以已声明玻璃罐包装的粗粒褐芥末酱 |
| production_route | 外购已清理芥子 -> 醋/水/盐浸渍 -> 不除种皮湿磨 -> 暂存 -> 条件性脱气 -> 装罐 |
| market_state | 工厂门口放行湿调味酱；声明储存和包装；不预设保质期 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 粗粒芥末调味酱；不声称不同配方的风味强度等效 |
| How much | 1 kg 放行湿成品净质量 |
| How well | 声明芥子物种、保留种皮、食醋酸度、配方、水分/固形物、颗粒质地和放行规格 |
| How long or cycle | 一个截至工厂门口的已声明生产期间；披露实际暂存/储存时间及保质期证据，无 PCR 默认值 |
| reference_flow_link | mustard_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 粗粒褐芥末酱 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | Brassica juncea；保留种皮；四配料质量配方；供应商食醋发酵路线及酸度；最终水分/固形物；磨制/暂存/脱气；非热路线核实；净灌装及包装组成；中国用户端低于1 kV电网平均供电；实际储存条件；场址、期间及上游链接 |

数据包必须包含上述限定。产品净质量包含液相，排除罐、盖、标签和箱。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 1 kg 放行湿芥末酱净质量；用 cp_output 称量输出，排除皮重、废品和内部循环返工。 |
| `water_mass` | recipe_water; clean_water; wash_effluent | 质量 | kg | 直接记录 kg，或以特定供水/废水的实测密度与温度换算计量体积；供水不等于废水。 |
| `electricity_unit` | receipt_electricity; mix_electricity; pack_electricity; clean_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 保留公开参考属性原名。已核验能量单位组以 MJ 为参考单位，kWh 因子为3.6：1 kWh = 3.6 MJ。实际供电记录为中国用户端、低于1 kV的电网平均交流电；不得根据属性名称推定燃料热值或热量。其他电压、国家或发电侧供应须另行核验身份及供应方。 |
| `solution_mass` | vinegar; alkali | 质量 | kg | 报告供应溶液质量，并另记实测浓度；活性酸或碱质量不得替代溶液质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂处的外购已清理褐芥子及分别供应的食醋、食盐和饮用水；声明实际输入水分、供应商、批次和验收质量 |
| starting_condition_role | 前景制造的上游产品输入 |
| product_classification_scope | CPC 23995 中较窄的代表性制备芥末子范围 |
| recursive_input_rule | 内部返工只跟踪一次，不作为新增外部投入；外购同类芥末是有供应商数据集的独立上游输入，须披露配方/范围 |
| upstream_dataset_requirement | 链接芥子种植及供应商清理、食醋发酵、盐、供水、电力、每个包装组件、清洗化学品及外部废物处理；否则披露上游覆盖不完整 |
| disclosure | 声明场址、路线、生产期间、清单截断、输入供应商、场址内储存、废物去向及每个缺失或额外过程 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | 前景制造 | 纳入接收、计量、浸渍、湿磨、暂存、实际脱气、包装、出厂前储存与清洗；粗粒路线不添加细滑芥末的筛皮工序。 | `fallot-mustard-manufacturing`; `charbonneaux-wholegrain-mustard` |
| `boundary_links` | 上游和下游 | 此前景从交付配料开始。上游农业和供应负荷须有独立链接数据集；配送、零售、消费和包装报废在范围外。缺少上游链接的数据包不得称完整摇篮到大门。 |  |
| `boundary_releases` | 水和空气接口 | 外部处理清洗废水是废物流。代表性的外购水、电力路线不预设取水、烟气排放或直接水体排放。调查直接释放；实际存在时，按实测化学物、来源和介质分别添加基础流行；披露未解决释放，不杜撰必然发生的因子。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| receipt | 接收与批次验收 | required | 接收已清理褐芥子；上游芥子清理不在场址内。 | 前景制造 | 1 kg 参考流 |
| mix | 浸渍、湿磨与暂存 | required | 计量四配料；保留种皮；记录磨制次数、暂存与条件性脱气。 | 前景制造 | 1 kg 参考流 |
| pack | 灌装、封盖、贴标与出厂前储存 | required | 按已声明盖、纸标签和瓦楞箱包装于玻璃罐。 | 前景制造 | 1 kg 参考流 |
| clean | 清洗与废水交接 | required | 测量实际水、电和化学品；废水外送处理。 | 前景制造 | 1 kg 参考流 |

接收至灌装的中间物料是同一场址模型内的内部转移，在批次平衡中记录，不作为额外外部产品。条件性操作为脱气及使用精确30%碱液。采用外购已清理芥子，不预设场址内清籽线。保留种皮，故不固有地产生麸皮共产品。

### 过程：接收与批次验收 (`receipt`)

#### 输入

##### 产品流

###### 已清理的褐芥子（Brassica juncea） (`brown_seed`)

外购已清理芥子进入场址；供应商清理与种植属于上游。

- 选定流：已清理的褐芥子（Brassica juncea）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于放行成品的实测接收芥子质量；剔除部分只计一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`fallot-mustard-manufacturing`; `charbonneaux-wholegrain-mustard`

###### 交流电 (`receipt_electricity`)

分别计量本工序；共用电机或电加热器采用有记录的运行时间与负荷。选定供电流为中国、到用户的电网平均消费组合，低于1 kV；其他国家、电压或自备发电路线须另行核验供电身份及供应方数据集。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：实测归属于本工序的电量，包括记录生产期间的待机电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_power`
- 来源：

##### 废物流

代表路线不规定此组的外部交换；须核对实际场址操作。

##### 基本流

代表路线不规定此组的外部交换；须核对实际场址操作。

#### 输出

##### 产品流

代表路线不规定此组的外部交换；须核对实际场址操作。

##### 废物流

###### 剔除的褐芥子 (`seed_reject`)

只记录剔除芥子、含水率和去向；若存在外来矿物杂质，另列交换。

- 选定流：剔除的褐芥子
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：验收剔除芥子时称量弃置质量；只有记录证明无剔除时才不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

代表路线不规定此组的外部交换；须核对实际场址操作。

### 过程：浸渍、湿磨与暂存 (`mix`)

#### 输入

##### 产品流

###### 食品级发酵酒精醋 (`vinegar`)

食醋是供应的食品配料，不是纯乙酸；场址内不再次制醋。

- 选定流：食品级发酵酒精醋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量交付食醋投料量；记录实测乙酸浓度和供应商发酵路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`fallot-mustard-manufacturing`

###### 自来水 (`recipe_water`)

使用外购饮用水供水身份；披露供应商及实际食品工序的适用性记录。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测配方加水量，与清洗水分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`fallot-mustard-manufacturing`

###### 食盐 (`recipe_salt`)

选定身份是配制盐水用食品级食盐；采集实际氯化钠规格。

- 选定流：食盐 `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测溶入浸渍液的食品级食盐；不采用数据库配方百分比。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`fallot-mustard-manufacturing`

###### 交流电 (`mix_electricity`)

分别计量本工序；共用电机或电加热器采用有记录的运行时间与负荷。选定供电流为中国、到用户的电网平均消费组合，低于1 kV；其他国家、电压或自备发电路线须另行核验供电身份及供应方数据集。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：实测归属于本工序的电量，包括记录生产期间的待机电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_power`
- 来源：

##### 废物流

代表路线不规定此组的外部交换；须核对实际场址操作。

##### 基本流

代表路线不规定此组的外部交换；须核对实际场址操作。

#### 输出

##### 产品流

代表路线不规定此组的外部交换；须核对实际场址操作。

##### 废物流

代表路线不规定此组的外部交换；须核对实际场址操作。

##### 基本流

代表路线不规定此组的外部交换；须核对实际场址操作。

### 过程：灌装、封盖、贴标与出厂前储存 (`pack`)

#### 输入

##### 产品流

###### 交流电 (`pack_electricity`)

分别计量本工序；共用电机或电加热器采用有记录的运行时间与负荷。选定供电流为中国、到用户的电网平均消费组合，低于1 kV；其他国家、电压或自备发电路线须另行核验供电身份及供应方数据集。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：实测归属于本工序的电量，包括记录生产期间的待机电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_power`
- 来源：

###### 玻璃瓶罐 (`glass_jar`)

分别测量皮重和净灌装量；记录实际罐规格。

- 选定流：玻璃瓶罐 `eca48ea8-ab83-444f-98b2-15ab82570c80`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测投入生产的空罐质量，包括归属本产品的破损。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：

###### 带一体密封层的镀锡钢旋开盖 (`closure`)

此项是供应的单个组装盖，不以钢罐或铝盖替代。

- 选定流：带一体密封层的镀锡钢旋开盖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测供应的完整盖组件质量；声明钢材、涂层和密封层组成；不重复计入一体密封层。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：

###### 包装标签，纸质 (`paper_label`)

在供应商数据集中声明纸、胶和油墨规格；身份本身不确定其数量。

- 选定流：包装标签，纸质 `d5890643-6859-42b5-9e05-556b072c6a8c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测交付纸质标签质量，包含供应时一体附带的胶层；标签废品只计一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：

###### 瓦楞纸板运输箱 (`corrugated_box`)

包装纳入至工厂门口可交付状态。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测供应空箱质量；记录实际纤维组成和箱数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：

##### 废物流

代表路线不规定此组的外部交换；须核对实际场址操作。

##### 基本流

代表路线不规定此组的外部交换；须核对实际场址操作。

#### 输出

##### 产品流

###### 粗粒褐芥末酱 (`mustard_output`)

放行调味酱包含保留的种皮与液相；不得沥干，亦不得以干芥子质量报告输出。

- 选定流：粗粒褐芥末酱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`
- 来源：`charbonneaux-wholegrain-mustard`

##### 废物流

###### 弃置的粗粒褐芥末酱 (`mustard_reject`)

不得重复计入进入废水的酱料；内部返工仍是内部转移。

- 选定流：弃置的粗粒褐芥末酱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：存在弃置时，称量湿磨、暂存或灌装弃置湿酱；记录产生工序和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

###### 破损空玻璃罐 (`glass_reject`)

该包装废物与产品质量及其他材料分开记录。

- 选定流：破损空玻璃罐
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：存在弃置时称量该组件，分别记录退回供应商及外部回收去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

###### 报废镀锡钢旋开盖 (`closure_reject`)

该包装废物与产品质量及其他材料分开记录。

- 选定流：报废镀锡钢旋开盖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：存在弃置时称量该组件，分别记录退回供应商及外部回收去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

###### 弃置纸质包装标签 (`label_reject`)

该包装废物与产品质量及其他材料分开记录。

- 选定流：弃置纸质包装标签
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：存在弃置时称量该组件，分别记录退回供应商及外部回收去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

###### 弃置瓦楞纸板箱 (`box_reject`)

该包装废物与产品质量及其他材料分开记录。

- 选定流：弃置瓦楞纸板箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：存在弃置时称量该组件，分别记录退回供应商及外部回收去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

代表路线不规定此组的外部交换；须核对实际场址操作。

### 过程：清洗与废水交接 (`clean`)

#### 输入

##### 产品流

###### 交流电 (`clean_electricity`)

分别计量本工序；共用电机或电加热器采用有记录的运行时间与负荷。选定供电流为中国、到用户的电网平均消费组合，低于1 kV；其他国家、电压或自备发电路线须另行核验供电身份及供应方数据集。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：实测归属于本工序的电量，包括记录生产期间的待机电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_power`
- 来源：

###### 自来水 (`clean_water`)

清洗独立于四配料配方纳入。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测生产期间供应的清洗水；记录漂洗水回用，内部循环不计为新增水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：

###### 氢氧化钠溶液，30% (`alkali`)

条件性清洗投入，不是配方配料，也不规定清洗方案；其他实际化学品须另列原子行。

- 选定流：氢氧化钠溶液，30% `7115909b-796c-4b3d-b40a-1a7c693d12d0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅在实际使用该精确清洗剂时称量供应的30%溶液质量；另记录稀释后的工作浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clean`
- 来源：

##### 废物流

代表路线不规定此组的外部交换；须核对实际场址操作。

##### 基本流

代表路线不规定此组的外部交换；须核对实际场址操作。

#### 输出

##### 产品流

代表路线不规定此组的外部交换；须核对实际场址操作。

##### 废物流

###### 送外部处理的芥末加工清洗废水 (`wash_effluent`)

此项是技术圈废物交接，不是排入淡水；实测悬浮物、化学需氧量和盐负荷作为处理描述。

- 选定流：送外部处理的芥末加工清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测外送废水质量，并另行采样测定组成；不得用水资源取水量或污染物质量替代此流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：

##### 基本流

代表路线不规定此组的外部交换；须核对实际场址操作。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | 共用设备及清洗 | 首先用产品线计量和批次记录细分。共用电量或清洗仅按实测运行负荷/时间或服务该批次的有记录清洗周期分配；分配总量与场址记录核对。仅有产品质量不足以证明能源因果关系。 |  |
| `allocation_rework` | 返工及废物 | 内部酱料返工只跟踪一次；剔除芥子、弃置芥末和包装废料计入实际处理负荷。不假定有可售麸皮，也不给弃置物料替代产品抵扣。真实上市共产品须记录质量、功能、价值并审查分配扩展。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | pack | mustard_output | weighing | 批次；放行湿净质量 Q；罐皮重；灌装质量；废品批次质量；最终固形物及水分 | 经校准的净灌装称量记录、代表性皮重核查及放行库存核对 | kg | 每批 | 已声明完整生产期间 | 所选工厂线 | 每 1 kg 参考流 | 秤校准；放行记录；库存台账 |
| cp_material | receipt; mix | brown_seed; vinegar; recipe_salt | weighing | 供应商；批次；物种；路线；输入水分；投料 kg；期初/期末库存；剔除质量；食醋酸度 | 校准秤和投料记录，与交付及库存核对；测定食醋浓度 | kg | 每次投料及每批 | 与 cp_output 相同生产期间 | 接收及混合线 | 每 1 kg 参考流 | 供应商规格；校准；批次平衡 |
| cp_water | mix; clean | recipe_water; clean_water | metering | 水表；过程；体积；密度；温度；配方投料；漂洗供水；回用回路 | 分别计量配方水和清洗水或称量投料；按实测密度换算体积；与场址供水核对 | kg | 每批及每次清洗 | 与 cp_output 相同生产期间 | 混合及清洗 | 每 1 kg 参考流 | 水表校准；密度方法；供水适用性 |
| cp_power | receipt; mix; pack; clean | process electricity | metering | 电表；过程；kWh；运行时间；负荷；待机；共用分配；暂存/脱气状态 | 读取校准分表；无分表共用负荷仅用实测负荷及时间；与电费单核对 | kWh | 每次运行及生产期间 | 与 cp_output 相同生产期间 | 四个过程 | 每 1 kg 参考流 | 电表校准；账单；分配工作表 |
| cp_pack | pack | each packaging component | weighing | 组件规格；皮重 kg；数量；接收/发出/报废/退回库存；纤维/涂层/密封层组成 | 称量代表性完整供应组件，核对数量和库存；每个组件分开记录 | kg | 每个组件批次 | 与 cp_output 相同生产期间 | 灌装及装箱 | 每 1 kg 参考流 | 皮重抽样；供应商组成；库存台账 |
| cp_clean | clean | alkali | weighing | 清洗剂名称；溶液 kg；浓度；工作稀释；周期；回用；服务批次 | 称量消耗的外购溶液并核验标签/测定；区分新增化学品供应和内部循环 | kg | 每次清洗 | 与 cp_output 相同生产期间 | 服务所选线的清洗 | 每 1 kg 参考流 | 测定；清洗记录；采购台账 |
| cp_waste | receipt; pack | each discarded seed, mustard or packaging component | weighing | 行；来源工序；湿 kg；组成；返工；去向；处理；退回记录 | 分别称量分开的流，并分别核对承运凭证、退回库存和内部返工 | kg | 每次移出 | 与 cp_output 相同生产期间 | 接收、磨制及包装废物 | 每 1 kg 参考流 | 校准；移出凭证；去向证据 |
| cp_effluent | clean | wash_effluent | metering | 废水质量或体积；实测密度；温度；悬浮物；COD；盐负荷；外部接收方 | 计量或称量外送废水，在代表性清洗和生产状态下采样组成；体积换算使用实测密度 | kg | 每次外送及代表性采样周期 | 与 cp_output 相同生产期间 | 仅外部处理交接 | 每 1 kg 参考流 | 计量校准；实验室报告；处理凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | 所有清单行 | 每项交换以报告期间归属数量除以同一放行湿芥末酱净质量 Q（kg）。结果按每 1 kg 参考流报告；mustard_output 为1 kg。保留原始分子单位。Q 必须为正并通过 cp_output 实测。 | cp_output; cp_material; cp_water; cp_power; cp_pack; cp_clean; cp_waste; cp_effluent | 归一化清单 |  |
| `lot_balance` | 食品配料及芥末酱 | 核对配料接收、库存变化、放行输出、剔除芥子、弃置酱料、进入废水的酱料及在制品留存。内部返工不作为再次接收。按记录的测量不确定性调查差额；不得把未解释差额标作排放。 | cp_output; cp_material; cp_waste; cp_effluent | 批次闭合声明 |  |
| `component_mass` | 每个包装行 | 若按件发出，以数量乘实测代表性组件皮重（kg）；核对报废和退回组件，将消耗包装与产品净质量分开。 | cp_pack; cp_waste | 组件 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route` | 范围 | 核实褐芥子、保留种皮、完整四配料及非热外购水/电路线；明确报告全部额外操作。 | 流程图；配方；供应商记录 |
| `dq_period` | 所有交换 | 输入、输出和损耗使用一个明确的代表性完整期间；披露季节性、缺失运行、共用分配及测量不确定性。 | 带日期台账；校准；覆盖报告 |
| `dq_identity` | 所有流及供应方 | 按状态、属性及供应/处理路线解决每个具体交换身份；披露空 UUID。仅名称匹配不能验证供应方负荷。 | 供应商与处理文档；身份评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | mustard_output | 要求1 kg湿净输出、匹配参考产品名称、cp_output、正的放行净质量及全部必需限定；拒绝沥干或干芥子分母。 |  |
| `validate_process` | 过程清单 | 要求四个过程及相同的1 kg参考分母；以生产记录核对条件性缺失。实际存在但未列的化学品、直接排放或保藏操作，在声称完整性前须补充明确原子行。 |  |
| `validate_balance` | 物料、能源与废水 | 核对批次和公用工程总量，区分配方水与清洗水，保留浓度与属性单位，核对废物去向并避免返工重复计量。报告未解决差额及上游覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 门到门粗粒褐芥末酱前景制造数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 已声明四配料产品及路线；作为下游研究配料时另行核实上游链接 |
| excluded_use | 整个 CPC 23995 覆盖；风味等效；食品安全批准；泛化细滑芥末、干粉、种植、配送或报废；无上游数据集的完整摇篮到大门 |
| required_metadata | 物种、配方、食醋路线/酸度、保留种皮、最终固形物、流程图、包装组成/净灌装、场址、地理、期间、储存及供应方引用 |
| required_quality_disclosure | 表计及秤校准、期间覆盖、分配、平衡、UUID缺口、实际额外操作、排除项及上游不完整性 |
| update_trigger | 配方、芥子物种、除种皮、保藏、能源供应、包装、供应商或实测收率变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | UNSD, CPC 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.111, 23995. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 官方小类名称及与食醋的区分；不蕴含额外制造说明或完整路线覆盖 |
| `fallot-mustard-manufacturing` | literature | Edmond Fallot, La Moutarderie Fallot, sections Raw materials / Manufacturing process / Quality (undated manufacturer page). https://www.fallot.com/en/la-moutarderie-fallot/ | 制造商对浸渍和磨制的证据；不普遍强制细滑筛皮及储存描述；不采用固定时间、芥子组成或采购占比 |
| `charbonneaux-wholegrain-mustard` | literature | Charbonneaux-Brabant, A mustard seed rich in character, sections seed/verjuice and Whole Grain mustard (undated manufacturer page). https://www.vinaigre.com/en/expertise/the-mustard | 独立制造商对褐芥子粗粒身份和不筛皮的证据；不确定全行业配方、安全性或用电量 |

所选四配料、非热路线及数据采集规则定义一个有界代表性数据集设计；实际工厂记录须证明适用性。制造商网页描述自身产品，不确定当前市场份额或默认量化因子。
