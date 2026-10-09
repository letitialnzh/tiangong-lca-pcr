---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.dry-brushed-graded-unspun-sisal-fibre
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 干法刷理分级的未纺剑麻纤维

## 1. 范围与适用性

本 PCR 覆盖接收已提取并干燥的单一物种剑麻（Agave sisalana）纤维后的工厂整理：分选、干法刷理、分级和打包。代表输出为未经化学处理、未纺纱的主纤维，回收并销售的短纤维单独核算。Sisaex 区分纤维整理与后续纱线、绳索生产；Grosso 说明刷理短纤维的回收。这些是制造商路线观察，不是通用配方。

CPC 26190 的范围更广：官方说明还列入加工后的亚麻、大麻、蕉麻、椰壳纤维、苎麻等。本 PCR 不覆盖整个子类。鲜叶剥麻、清洗和初次干燥为上游；苎麻脱胶、椰壳纤维沤制、亚麻打麻、大麻棉型化、湿法化学处理、染色、纺纱、复合材料及消费后碎布回收需另有路线方法。实施这些操作的工厂须划分独立单元过程，不得以本前景边界隐藏这些操作。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.dry-brushed-graded-unspun-sisal-fibre |
| classification_refs | CPC 3.0: 26190; 语义范围更窄；不声明已接受的映射 |
| covered_products | 干法刷理分级、未纺且未经化学处理的剑麻主纤维；伴生可销售刷理短纤维作为共产品 |
| excluded_products | 其他纤维物种；鲜叶；湿法或化学处理纤维；纱线；绳索；作为参考产品的纤维废料 |
| representative_product | 干法刷理分级的未纺剑麻纤维 |
| production_route | 接收已提取干燥纤维 → 干法分选、刷理和分级 → 净质量称量及打包 |
| market_state | 工厂大门处打包纤维，声明等级和水分；参考质量排除包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供供声明的后续加工使用的未纺剑麻纤维 |
| How much | 出厂水分状态下的 1 kg 验收合格纤维净质量 |
| How well | 声明物种纯度、加工态、长度分布、等级、杂质验收和实测水分；限值由买方规格确定 |
| How long or cycle | 一个验收合格生产批次；不声明使用寿命 |
| reference_flow_link | `reference_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 干法刷理分级的未纺剑麻纤维 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 剑麻物种和纯度；已提取干燥的来料态；干法刷理路线；主纤维等级；纤维长度分布；杂质规格；实测湿基水分；排除包装的净质量；未经化学处理且未纺的状态；场址和期间；包装配置 |

数据集中须声明全部必需限定信息。这是以声明单位表示的中间产品，不构成下游性能等价的证据。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准秤及实测皮重称量纤维净质量；通过 cp_mass_baling 将各行归一化至每 1 kg 参考流，保持声明的出厂水分基准。 |
| `electricity_conversion` | receipt_electricity; brushing_electricity; baling_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开能量参考属性。采集 kWh；1 kWh = 3.6 MJ。不得把电力当质量，也不得把额定功率当实测能耗。 |
| `moisture_observation` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录湿基水分质量分数 w 及收到态质量 m；干固体 = m × (1 − w)。未经明确的另行换算及元数据声明，不得以干质量替换 1 kg 出厂参考流。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_finishing` | all foreground processes | 始于已验收的提取干燥纤维接收；包括分选、刷理、分级、粉尘处理、打包、净称重及可归属的大门内仓储搬运。这是大门到大门整理。 | `sisaex-finishing`; `grosso-sisal` |
| `upstream_separation` | agricultural and wet extraction operations | 种植、收割、鲜叶剥麻、提取清洗和初次干燥不在此前景内。连接加工态匹配的供应商数据集；完整摇篮到大门声明须明确连接这些上游负荷和运输并证明完整性。 | `grosso-sisal` |
| `wet_route_exclusion` | route applicability | 不默认湿处理或染色。实际湿洗、柔软、漂白或染色须扩展路线方法，分别列出每种化学品、技术圈水、废水和实测污染物；不得通过漏列把废水设为零。 | `sisaex-finishing` |
| `recursive_input` | same-category fibre | 采购已刷理纤维须有上游整理证据，并与本未刷理来料路线分开。内部交接及返工只计一次；内部交接不得再连接第二个背景数据集。排除后续纺纱、使用和生命终结。 | `unsd-cpc-2025`; `sisaex-finishing` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂接收已验收、已提取并干燥但未刷理的剑麻纤维 |
| starting_condition_role | foreground_input |
| product_classification_scope | 仅限 CPC 26190 中剑麻干法整理；其他路线未评估 |
| recursive_input_rule | 采购加工后纤维分开核算；内部交接只计一次 |
| upstream_dataset_requirement | 供应商数据须匹配物种、提取干燥态、水分、地区和期间；研究包含上游时连接农业及提取负荷 |
| disclosure | 声明大门到大门范围、排除路线、上游覆盖、运输责任及实际水分和等级 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| receipt | 接收、分选和水分核验 | required | 适用于声明的干法整理路线 | foreground_production | 每 1 kg 参考流 |
| brushing | 干法刷理、分级和集尘 | required | 适用于声明的干法整理路线 | foreground_production | 每 1 kg 参考流 |
| baling | 打包、标签和出厂称重 | required | 适用于声明的干法整理路线 | foreground_production | 每 1 kg 参考流 |

### 过程：接收、分选和水分核验 (`receipt`)

#### 输入

##### 产品流

###### 已提取并干燥的未刷理剑麻纤维 (`dried_sisal_input`)

称量接收的龙舌兰属剑麻（Agave sisalana）纤维，记录提取和干燥加工态、水分及供应商。鲜叶和混合物种批次不适用本路线。

- 选定流：已提取并干燥的未刷理剑麻纤维
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配后实测批次交换数量除以验收合格主纤维净质量 kg；保留水分及库存记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_receipt`
- 来源：`sisaex-finishing`

###### 交流电 (`receipt_electricity`)

仅适用于低于 1 kV 的用户侧电网供电。计入实际归属于本批次的仓储搬运和监测用电；其他供电路线需另核实身份。


本选定 UUID 仅适用于实际 CN（中国）用户端低于 1 kV 的电网平均消费供电。其他地域、供电技术或电压须另核实身份及匹配供应方数据，不能沿用本选定 UUID。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分配后实测批次 kWh × 3.6，再除以验收合格主纤维净质量 kg。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_receipt`
- 来源：`sisaex-finishing`

##### 废物流

本路线不默认该组存在交换；实际出现的额外交换须逐项记录。

##### 基本流

本路线不默认该组存在交换；实际出现的额外交换须逐项记录。

#### 输出

##### 产品流

###### 分选后干燥的未刷理剑麻纤维 (`sorted_sisal_output`)

转入刷理的内部交接；保留批次关联和质量，不再次附加上游负荷。

- 选定流：分选后干燥的未刷理剑麻纤维
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配后实测批次交换数量除以验收合格主纤维净质量 kg；保留水分及库存记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_receipt`
- 来源：`sisaex-finishing`

##### 废物流

###### 交由厂外处理的剔除干燥剑麻纤维 (`receipt_rejected_sisal`)

仅在实际丢弃纤维时适用。单独称量并记录污染状况和去向；退回供应商的纤维为产品退货，不计入此废物流。

- 选定流：交由厂外处理的剔除干燥剑麻纤维
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配后实测批次交换数量除以验收合格主纤维净质量 kg；保留水分及库存记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_receipt`
- 来源：`sisaex-finishing`

##### 基本流

本路线不默认该组存在交换；实际出现的额外交换须逐项记录。

### 过程：干法刷理、分级和集尘 (`brushing`)

#### 输入

##### 产品流

###### 分选后干燥的未刷理剑麻纤维 (`sorted_sisal_input`)

与接收工序交接质量对应，并明确记录期间的水分变化及库存移动。

- 选定流：分选后干燥的未刷理剑麻纤维
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配后实测批次交换数量除以验收合格主纤维净质量 kg；保留水分及库存记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_brushing`
- 来源：`sisaex-finishing`

###### 交流电 (`brushing_electricity`)

计量刷理驱动和集尘风机电量，供电须为低于 1 kV 的电网电力。共享电量按实测机器工时和负载证据分配。


本选定 UUID 仅适用于实际 CN（中国）用户端低于 1 kV 的电网平均消费供电。其他地域、供电技术或电压须另核实身份及匹配供应方数据，不能沿用本选定 UUID。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分配后实测批次 kWh × 3.6，再除以验收合格主纤维净质量 kg。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_brushing`
- 来源：`sisaex-finishing`

##### 废物流

本路线不默认该组存在交换；实际出现的额外交换须逐项记录。

##### 基本流

本路线不默认该组存在交换；实际出现的额外交换须逐项记录。

#### 输出

##### 产品流

###### 打包前干法刷理分级的未纺剑麻纤维 (`brushed_sisal_output`)

包装前称量每个验收合格的主纤维等级，记录水分和长度、杂质验收结果。不设通用等级阈值。

- 选定流：打包前干法刷理分级的未纺剑麻纤维
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配后实测批次交换数量除以验收合格主纤维净质量 kg；保留水分及库存记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_brushing`
- 来源：`sisaex-finishing`

###### 干法刷理回收的可销售剑麻短纤维 (`sisal_tow_output`)

仅适用于单独收集、符合买方规格并作为共产品销售的短纤维。记录等级、水分、买方和收益；不是主参考产品。

- 选定流：干法刷理回收的可销售剑麻短纤维
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配后实测批次交换数量除以验收合格主纤维净质量 kg；保留水分及库存记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_brushing`
- 来源：`grosso-sisal`

##### 废物流

###### 交由厂外处理的捕集剑麻刷理粉尘 (`captured_sisal_dust`)

仅在实际捕集并丢弃时适用。记录干纤维含量和污染状况，与可销售短纤维分开；收集的固体不是空气排放。

- 选定流：交由厂外处理的捕集剑麻刷理粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配后实测批次交换数量除以验收合格主纤维净质量 kg；保留水分及库存记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_brushing`
- 来源：`sisaex-finishing`

##### 基本流

###### 颗粒物，粒径未特指 (`particulate_air`)

仅在实测排入环境空气、子介质和粒径分级未特指的颗粒物时适用。记录排放点、测试方法、治理设施、气量和不确定性。不得由总粉尘推算 PM2.5；区分捕集粉尘与排放质量。数据支持时将粒径分级或其他实际污染物增加为逐项核实的独立行。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配后实测批次交换数量除以验收合格主纤维净质量 kg；保留水分及库存记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_air`
- 来源：

### 过程：打包、标签和出厂称重 (`baling`)

#### 输入

##### 产品流

###### 打包前干法刷理分级的未纺剑麻纤维 (`brushed_sisal_input`)

同一验收合格等级的内部交接；与刷理输出和最终净质量核对。

- 选定流：打包前干法刷理分级的未纺剑麻纤维
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配后实测批次交换数量除以验收合格主纤维净质量 kg；保留水分及库存记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_baling`
- 来源：`sisaex-finishing`

###### 交流电 (`baling_electricity`)

供电为低于 1 kV 的电网电力时，计入归属于本批次的压包机、秤、照明和搬运电量，并保留空载负荷分配证据。


本选定 UUID 仅适用于实际 CN（中国）用户端低于 1 kV 的电网平均消费供电。其他地域、供电技术或电压须另核实身份及匹配供应方数据，不能沿用本选定 UUID。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：分配后实测批次 kWh × 3.6，再除以验收合格主纤维净质量 kg。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_baling`
- 来源：`sisaex-finishing`

###### 聚丙烯包捆扎带 (`pp_bale_strap`)

仅在使用固体聚丙烯捆扎带时适用。称量实际消耗并保留规格；树脂、捆扎绳和电缆扎带不是可互换身份。

- 选定流：聚丙烯包捆扎带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配后实测批次交换数量除以验收合格主纤维净质量 kg；保留水分及库存记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_pack`
- 来源：`sisaex-finishing`

###### 纸质包标签 (`paper_bale_label`)

仅在实际使用纸质标签时适用。单独称量标签；使用胶黏剂时另列原子投入。不使用混合包装占位行。

- 选定流：纸质包标签
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配后实测批次交换数量除以验收合格主纤维净质量 kg；保留水分及库存记录。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_pack`
- 来源：`sisaex-finishing`

##### 废物流

本路线不默认该组存在交换；实际出现的额外交换须逐项记录。

##### 基本流

本路线不默认该组存在交换；实际出现的额外交换须逐项记录。

#### 输出

##### 产品流

###### 干法刷理分级的未纺剑麻纤维 (`reference_product_output`)

出厂验收合格纤维的净质量，排除捆扎带和标签。逐包扣除皮重并测量水分。不包含纺纱、染色或化学柔软处理。

- 选定流：干法刷理分级的未纺剑麻纤维
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass_baling`
- 来源：`sisaex-finishing`

##### 废物流

本路线不默认该组存在交换；实际出现的额外交换须逐项记录。

##### 基本流

本路线不默认该组存在交换；实际出现的额外交换须逐项记录。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | main fibre and tow | 先分离可计量操作及各等级包装。对联合刷理，cp_allocation 须检验实测操作、物料关系是否支持物理分配。不得从分类名称推断分配比例，也不得默认全部短纤维为废物。 | `grosso-sisal` |
| `joint_partition` | unseparated joint burdens | 若不能分离且无法建立因果物理关系，须声明经济分配为研究特定选择，基于同期间主纤维各等级和可销售短纤维的实际净收益。报告数量、价格、期间、因子及按水分调整质量分配的敏感性；证据未解决时不得声称可比。本 PCR 不提供固定因子。 |  |
| `waste_no_credit` | discarded fibre and captured dust | 根据实际合同和去向记录产品或废物身份。按研究方法一致分配处理负荷，并单独声明替代情景；不得自动给予避免产品信用。处理和运输只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

采集归一化：保留实测批次总量，先分配，再除以验收合格主纤维净质量 kg。电力先换算至 MJ；组件件数必须关联实测组件质量。该程序得到下表的汇总基准。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass_receipt | receipt | 纤维交接及输出 | measurement | 批次；物种；等级；毛重和皮重；水分分数；验收净质量；短纤维质量；剔除物；期初期末库存 | 校准秤；批次核对；记录适合纤维的重量法水分方法和取样，包括烘箱条件 | kg | 每批及每次交接 | 一个完整有代表性的报告期间，包含剔除及返工 | 声明的工厂和干法线 | 每 1 kg 参考流 | 校准；皮重记录；水分测试；供应商加工态；买方验收；处置凭据 |
| cp_mass_brushing | brushing | 纤维交接及输出 | measurement | 批次；物种；等级；毛重和皮重；水分分数；验收净质量；短纤维质量；剔除物；期初期末库存 | 校准秤；批次核对；记录适合纤维的重量法水分方法和取样，包括烘箱条件 | kg | 每批及每次交接 | 一个完整有代表性的报告期间，包含剔除及返工 | 声明的工厂和干法线 | 每 1 kg 参考流 | 校准；皮重记录；水分测试；供应商加工态；买方验收；处置凭据 |
| cp_mass_baling | baling | 纤维交接及输出 | measurement | 批次；物种；等级；毛重和皮重；水分分数；验收净质量；短纤维质量；剔除物；期初期末库存 | 校准秤；批次核对；记录适合纤维的重量法水分方法和取样，包括烘箱条件 | kg | 每批及每次交接 | 一个完整有代表性的报告期间，包含剔除及返工 | 声明的工厂和干法线 | 每 1 kg 参考流 | 校准；皮重记录；水分测试；供应商加工态；买方验收；处置凭据 |
| cp_energy_receipt | receipt | 电力 | measurement | 电表起止 kWh；电压；设备；运行及空载时数；分配依据；期间 | 读取校准过程电表；与账单核对；共享电表使用实测运行负载证据，不能仅用铭牌功率 | kWh | 每班及每个报告期间 | 与 cp_mass_baling 同期间 | 同一工厂设备 | 每 1 kg 参考流 | 电表校准；供电电压；账单核对；分配记录 |
| cp_energy_brushing | brushing | 电力 | measurement | 电表起止 kWh；电压；设备；运行及空载时数；分配依据；期间 | 读取校准过程电表；与账单核对；共享电表使用实测运行负载证据，不能仅用铭牌功率 | kWh | 每班及每个报告期间 | 与 cp_mass_baling 同期间 | 同一工厂设备 | 每 1 kg 参考流 | 电表校准；供电电压；账单核对；分配记录 |
| cp_energy_baling | baling | 电力 | measurement | 电表起止 kWh；电压；设备；运行及空载时数；分配依据；期间 | 读取校准过程电表；与账单核对；共享电表使用实测运行负载证据，不能仅用铭牌功率 | kWh | 每班及每个报告期间 | 与 cp_mass_baling 同期间 | 同一工厂设备 | 每 1 kg 参考流 | 电表校准；供电电压；账单核对；分配记录 |
| cp_pack | baling | 捆扎带及纸标签分别记录 | measurement | 材料规格；消耗质量；数量；每组件实测质量；库存；废料；实际胶黏剂 | 使用校准秤称量组件，核对采购、库存及消耗；仅在有实测组件质量时使用件数 | kg | 每个包装批次 | 与 cp_mass_baling 同期间 | 包装线 | 每 1 kg 参考流 | 称重；供应商规格；消耗记录 |
| cp_air | brushing | 实测颗粒物排放 | measurement | 排放点；颗粒物浓度；干基标况废气体积；持续时间；水分；粒径定义；治理状态 | 使用代表性烟道测试或有记录的监测；组合基准匹配的浓度和气体体积；单独评估无组织排放。未测排放是须声明的缺口，不是零 | kg | 有代表性的工况及治理状态 | 同报告期间或说明时间调整依据 | 刷理废气排放点 | 每 1 kg 参考流 | 测试报告；浓度和体积基准；治理运行时间；不确定性 |
| cp_allocation | brushing | 联合输出及共享操作 | record | 等级 kg；短纤维 kg；水分；净收益；账单期间；独用共享电表；因果依据 | 保留生产销售台账和实测物理分配证据；解释选择和敏感性。不设默认价格或分配因子 | kg | 每个报告期间 | 与生产清单同期间 | 本厂全部联合输出 | 每 1 kg 参考流 | 生产、销售及核对记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | all inventory rows | q_norm = 分配后批次交换数量 / 验收合格主纤维净质量 kg；报告每 1 kg 参考流。内部交接核对时不重复上游负荷。 | cp_mass_baling; cp_allocation | 按声明单位归一化的交换 |  |
| calc_energy | receipt_electricity; brushing_electricity; baling_electricity | E_MJ = 实测分配电量 electricity_kWh × 3.6；再应用 calc_normalize。 | cp_energy_receipt; cp_energy_brushing; cp_energy_baling; cp_mass_baling | E_MJ |  |
| calc_moisture | all fibre mass rows | m_dry = m_wet × (1 − w)；w 为实测湿基水分质量分数。仅以干固体进行平衡；参考仍为出厂净质量。 | cp_mass_baling | m_dry |  |
| calc_air | particulate_air | 排放 kg = 实测浓度 mg/m3 × 基准匹配的废气 m3 / 1000000；保留干湿基、温度和压力的匹配基准；分配后应用 calc_normalize。 | cp_air; cp_mass_baling; cp_allocation | 排放颗粒物质量 |  |
| calc_partition | joint brushing burdens | 先保留分离及因果物理证据。经济分配有依据时，a_i = 实测净收益_i / 同期间联合产品净收益总和；比例之和为一。按实测产品干质量计算水分调整质量分配的替代结果并声明敏感性。 | cp_allocation | a_i |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_route | all processes | 确认物种纯度、来料提取干燥态及无湿法化学处理；不得推及整个分类 | 供应商记录及工艺核查 |
| dq_balance | fibre transfers | 按实测干固体基准核对期初库存 + 投入 − 期末库存与主纤维、短纤维、剔除物及粉尘；量化未解释差额和取样不确定性。不设通用损耗阈值 | 批次质量及水分核对 |
| dq_coverage | data package | 覆盖有代表性的运行、停机、等级、供应商地区构成及期间。声明清单缺口及分配不确定性；不得编造温度、产率、水分或寿命 | 计量生产覆盖及不确定性报告 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | 要求准确的主纤维加工态和限定信息、匹配的参考输出及 1 kg 净质量。未解决的产品 UUID 必须声明并在发布前核实；更宽泛纤维或纱线身份不可互换。 |  |
| `validate_measurements` | all inventory rows | 要求关联协议、同报告期间的质量分母、单位换算及有记录的分配。拒绝 kg、kWh、MJ 混用、毛质量参考、缺失水分基准或未解释库存差额。 |  |
| `validate_atomic_boundary` | route and emissions | 每行必须为一个原子交换；区分固体粉尘与排入空气的颗粒物、技术圈水与资源及废水。检查实际辅助投入及废物处理；缺口不满足完整性，不得以假定零替代。 |  |
| `validate_upstream_claim` | dataset profile | 仅大门到大门整理不能建立完整摇篮到大门覆盖或等级等价。扩展范围前须有经核查的上游关联和披露。 | `unsd-cpc-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在等级及水分匹配时作为后续纺纱或产品制造的路线特定未纺剑麻整理投入 |
| excluded_use | 整个 CPC 覆盖；鲜叶生产；湿处理；纱线；使用性能；自动完整摇篮到大门声明 |
| required_metadata | 场址、期间、物种、来料态、输出等级、长度、水分、净质量、包装、上游关联、分配及实际路线 |
| required_quality_disclosure | 实测及估算份额；质量核对；交换缺口；上游运输范围；身份；排放覆盖和不确定性；敏感性 |
| update_trigger | 物种、路线、水分约定、等级规格、设备、供电、包装或分配证据发生变化 |

## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, printed/PDF pp. 117–118. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 26190 广度、其他纤维路线及原料沤制态排除；仅分类依据 |
| `sisaex-finishing` | literature | Sisaex, Productive Process, undated manufacturer page, Benefiting Fiber steps 1–7 and Fiber Industrialization. https://sisaex.com.br/Sisaex_en/productive_process.html | 干法整理阶段及水分监测；单家制造商路线，不提供通用数值配方 |
| `grosso-sisal` | literature | Grosso Sisal, operations and Sisal Fibre Products / Tow Fibre, undated manufacturer page. https://grossosisal.com/ | 上游提取的区分及可回收刷理短纤维；不将供应商特定等级及包重采用为默认值 |
