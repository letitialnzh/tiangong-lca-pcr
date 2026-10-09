---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.conventional-filtered-cigarette-manufacturing
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 外购配制烟丝及滤棒的常规滤嘴卷烟制造

## 1. 范围与适用性

适用于采用外购已配制、切丝及调湿烟草填料、外购包纸单段醋酸纤维素滤棒的电力驱动卷接包装工厂。包括受控暂存、烟丝定量供料、纸包成烟、切割、接装纸接嘴、检验、剔除、包装及厂门验收。本 PCR 为制造门到门方法，扩展研究须关联上游数据。

代表产品为未使用的常规可燃烟草卷烟，具有烟条、卷烟纸、单段滤嘴和接装纸；声明实际品牌或 SKU 配置，不设定标准支重。排除雪茄、方头雪茄、小雪茄、非烟草替代品卷烟、无滤嘴产品、胶囊或活性炭或管状滤嘴、加热烟草单元、电子装置及烟液、吸用及乱丢废弃物处理。这些是本方法的边界，不表示所有排除产品均在 CPC 25020 之外。

厂内种植、烘烤或打叶去梗、初始配制切丝干燥、膨胀、再造或提取、滤棒制造、印刷、燃烧供热、蒸汽调湿及厂内废水处理均不属于覆盖路线。开展上述工序的工厂须采用明确扩展并经审查的过程清单；不得遗漏这些工序后声称一体化工厂已适用。不规定运行温度、成分比例、能耗强度、损耗、保质期或健康及符合性批准的数值。来源仅建立定性工序及组分背景（`unsd-cpc-2025`、`hmrc-cigarette-process`、`pmi-cigarette-process`、`bat-cigarette-components`）。


## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.conventional-filtered-cigarette-manufacturing |
| classification_refs | CPC 3.0 25020；较窄路线背景，无已接受映射 |
| covered_products | 使用外购单段醋酸纤维素滤棒的常规烟草卷烟 |
| excluded_products | 雪茄、方头雪茄、小雪茄；替代品；特殊滤嘴；无滤嘴、加热及电子产品；一体化烟叶或滤棒生产 |
| representative_product | 配置明确的常规烟草滤嘴卷烟 SKU |
| production_route | 外购可成烟配制烟丝及成品滤棒 → 电力成烟接嘴 → 检验剔除处理 → 包装 |
| market_state | 厂门处按声明零售和运输包装交付的合格未使用卷烟 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产配置明确的未使用烟草滤嘴卷烟；为生产核算单位，不是健康收益或吸用服务等效性 |
| How much | 1 kg 合格卷烟成品净质量，包含全部卷烟组分，排除包装 |
| How well | 按有记录的工厂 SKU 规格验收尺寸、烟草含水率、填充质量、纸及滤嘴身份、接装完整性和包装完整性；无通用质量阈值或监管批准 |
| How long or cycle | 一个生产及验收期间；不声明使用期限或保质期 |
| reference_flow_link | reference_product_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 常规烟草滤嘴卷烟成品 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | SKU 及场址年份；尺寸；烟草配方及外购加工状态；成分声明；湿基含水率；包括滤嘴、纸及胶黏剂的成品净质量；滤嘴设计及组成；纸牌号及接装胶化学组成；验收准则；净质量与支数换算；包装组分质量；纯电路线；剔除及返工去向 |

前景数据包须声明所有必需限定信息。该质量参考的产品 UUID 明确留空；以后若以实测换算使用按支数计的公开卷烟流，必须保留其物品数量属性。


## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用采集期内实测 Q kg 合格卷烟成品净质量，排除包装。所有行按每 1 kg 参考流计量。Q 必须为正。 |
| piece_to_mass | 按支数的生产记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用去皮校准天平，从同一 SKU 的代表性合格卷烟实测 m kg/支，包括所有卷烟组分和声明水分；记录样品支数 n 及样品净质量 W，m=W/n。生产记录为 N 支合格卷烟时，Q=N*m。不得编造 m 或用烟丝填充质量替代。 |
| electricity_conversion | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开电力能量属性。电表读数 E kWh 换算为 3.6*E MJ，再除以 Q kg。能量不是质量。 |
| water_conversion | 外购水及液体废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 若以 m3 采集，须取得有记录温度和水质下的密度 rho kg/m3，以 X=V*rho 换算后再算 X/Q；不采用默认密度，也不把供水等同于水资源取用。 |

全部 kg 清单行使用经核验的质量属性及质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；MJ 电力行使用能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`。保留各公开参考属性并采用实测组分换算；单位组不是流数量。


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购配制烟丝、包纸成品滤棒、成品纸及包装坯在工厂接收处 |
| starting_condition_role | 制造投入界面；不是农业原料 |
| product_classification_scope | 仅 CPC 3.0 25020 中常规烟草滤嘴卷烟子集 |
| recursive_input_rule | 自身废烟回收烟丝为内部转移；外购退回卷烟须另列回收及上游历史，不得视为无负担填料 |
| upstream_dataset_requirement | 扩展前景边界时须关联适用农业、烘烤初加工、实际存在的再造、滤棒制造、纸及胶黏剂及包装、电力及供水供应商数据；缺失关联须明确保留 |
| disclosure | 报告来料水分加工态、场址边界、运输处理、储存时长、工序排除、包装及未解决上游覆盖；门到门不是完整摇篮到大门 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `manufacturing_boundary` | 纳入声明接收到厂门路线内的全部实际操作、辅助系统用电及剔除返工负担。包装投入计入分子，包装质量不计入 Q。不得默默移除实际开展的工序。 | `pmi-cigarette-process` |
| `separate_lifecycle_stages` | 种植烘烤及外购初加工和滤棒生产属于供应商关联；接收前运输、出厂后交付、吸用燃烧及废弃均排除于本前景。扩展研究须明确添加；消费者烟气或烟头乱丢不是制造排放。 | `hmrc-cigarette-process`; `bat-cigarette-components` |
| `route_extension` | 若场址自产配制烟丝或滤棒、燃料燃烧、使用蒸汽或热、处理排放废水、印刷材料或改变滤嘴及包装化学组成，须先按实际原子投入产出及实测条件扩展清单，再声明适用。排除路线不代表零负担。 | `hmrc-cigarette-process` |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt` | 接收与受控暂存 | required | 外购可直接成烟的配制烟丝 | 前景生产 | 1 kg 参考流 |
| `making` | 成烟、接嘴与检验 | required | 常规单段滤嘴卷烟 | 前景生产 | 1 kg 参考流 |
| `recovery` | 废烟拆分与烟丝回用 | conditional | 实际开展厂内拆分回用 | 前景生产 | 1 kg 参考流 |
| `packing` | 包装装配与出厂验收 | required | 声明的零售及发运配置 | 前景生产 | 1 kg 参考流 |
| `utilities` | 电力公用工程、清洁与环境控制 | required | 纯电卷接包装工厂；涉水行有条件适用 | 前景生产 | 1 kg 参考流 |

### 过程：接收与受控暂存（`receipt`）

#### 输入

##### 产品流

###### 配制切丝烟草填料（`cut_rag_input`）

接收已配制、切丝且完成水分调节的烟草填料。声明烟叶、烟梗及再造烟草比例、供应商加入的全部成分及含水率，不推定添加配方。通过库存核对测定实际净领用量。

- 选定流：配制切丝烟草填料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt`
- 来源：`hmrc-cigarette-process`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：成烟、接嘴与检验（`making`）

#### 输入

##### 产品流

###### 卷烟纸（`cigarette_paper`）

用于包裹烟条的纸。记录幅宽、定量、透气度、涂层及供应商牌号；计量纸卷消耗并扣除退回量。该身份不是接装纸。

- 选定流：卷烟纸 `ae3a445e-c064-4cba-abd3-cfeab698f8ca`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_making`
- 来源：`bat-cigarette-components`

###### 包纸醋酸纤维素卷烟滤棒（`filter_rods`）

外购单段成品滤棒，包括成型纸和增塑剂。声明滤棒净质量、尺寸及组成。丝束制造和滤棒生产在上游；丝束本身不等同于成品滤棒投入。排除胶囊、活性炭及管状滤嘴设计。

- 选定流：包纸醋酸纤维素卷烟滤棒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_making`
- 来源：`bat-cigarette-components`

###### 印刷卷烟接装纸（`tipping_paper`）

外购接装纸连接烟条和滤嘴。说明涂层、印刷及打孔状态。外购已印刷纸的上游包括印刷；厂内印刷不属于本路线。

- 选定流：印刷卷烟接装纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_making`
- 来源：`pmi-cigarette-process`

###### 胶水(PVA)（`making_pvac_glue`）

仅适用于实测烟条搭口胶或接装胶为聚醋酸乙烯酯基胶水的情形。记录湿胶交付质量及实测或供应商固含量；不得以纯树脂代替湿胶，也不推定通用胶黏剂化学组成。其他胶黏剂须另设有明确身份的原子行。

- 选定流：胶水(PVA) `e0d87fbd-b6d2-4e8d-a923-268e54f981ea`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_making`
- 来源：`pmi-cigarette-process`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 收集的烟草粉尘（`tobacco_dust_waste`）

收集的干烟草粉尘出厂进入有记录的处理或外部再造工序。与空气颗粒物、回收烟草及湿质量的水分修正分开。

- 选定流：收集的烟草粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_making`
- 来源：`hmrc-cigarette-process`

###### 废弃已组装滤嘴卷烟（`unrecovered_reject_cigarette`）

仅记录未在厂内拆分、完整送往处理的废品卷烟。作为一种已组装废弃物，披露烟草、纸及滤嘴比例和去向。不得同时把其中各组分重复计为出厂废物。

- 选定流：废弃已组装滤嘴卷烟
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_making`
- 来源：`hmrc-cigarette-process`

##### 基本流

###### 颗粒物，粒径未特指（`dust_air`）

条件行：仅适用于实际发生的抽风治理后残余排放，介质为空气，子介质和粒径未特指。测定浓度、排气量并另行评估无组织排放；已收集的烟草粉尘不是该交换。不规定排放因子，也不假定必然存在。若已明确粒径或子介质，须改用相应经核验身份。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`hmrc-cigarette-process`

### 过程：废烟拆分与烟丝回用（`recovery`）

送入该内部工序的废烟及返回卷接的可用烟丝属于衡算转移，不是外部交换。过程记录保留总转移量、拆分得率及用电；仅不可用的出厂组分跨越报告的前景边界。

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 不可回用的回收烟丝（`recovery_tobacco_waste`）

称量从废品卷烟中分离但不能回用的烟丝。记录含水率及出厂去向。合格回用烟丝留在内部循环中，不是新的外部投入，也不作为获得抵扣的共产品。

- 选定流：不可回用的回收烟丝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recovery`
- 来源：`hmrc-cigarette-process`

###### 废弃包纸醋酸纤维素滤嘴段（`recovery_filter_waste`）

一种分离后的滤嘴组件，声明成型纸及增塑剂含量，不是纯醋酸纤维丝束。采集实际质量及处理去向。

- 选定流：废弃包纸醋酸纤维素滤嘴段
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recovery`
- 来源：`hmrc-cigarette-process`

###### 烟草污染的卷烟包裹纸（`recovery_paper_waste`）

从废品卷烟分离的纸组分。声明胶黏剂及烟草污染、实测质量和去向，不假定普通清洁回收纸身份适用。

- 选定流：烟草污染的卷烟包裹纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recovery`
- 来源：`hmrc-cigarette-process`

##### 基本流

### 过程：包装装配与出厂验收（`packing`）

#### 输入

##### 产品流

###### 纸盒（`carton_input`）

外购已印刷平片折叠纸盒；记录涂层、定量、每包数量及净质量。供应商裁切、印刷和层压位于上游。内衬另行定义，不计入纸盒质量。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing`
- 来源：`pmi-cigarette-process`

###### 铝箔材（`foil_input`）

条件行：仅用于符合该身份的非复合铝箔内包装。记录厚度及合金。纸铝复合内衬须作为一个有单独身份的复合产品行，不使用纯铝箔身份，也不虚构组成。

- 选定流：铝箔材 `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing`
- 来源：`pmi-cigarette-process`

###### 双向拉伸聚丙烯外包膜（`overwrap_input`）

条件行：适用于声明采用 BOPP 膜的配置；测量实际膜卷领用量、厚度及涂层。其他聚合物或多层膜须另设身份并披露组成；不假定通用外包膜材料。

- 选定流：双向拉伸聚丙烯外包膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing`
- 来源：`pmi-cigarette-process`

###### 瓦楞纤维纸板运输箱（`shipping_case_input`）

适用于实际装箱交付。记录箱型牌号、再生含量、数量及净质量，不套用无关流的再生纤维比例。若消耗可重复托盘或胶带或向该产出分摊其负担，须分别增设原子行。

- 选定流：瓦楞纤维纸板运输箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing`
- 来源：`pmi-cigarette-process`

###### 胶水(PVA)（`packing_pvac_glue`）

条件行：仅用于本厂实际涂布的聚醋酸乙烯酯基纸盒胶。记录湿质量及固含量，与卷接胶分开；化学组成不同的热熔胶属于另一流。

- 选定流：胶水(PVA) `e0d87fbd-b6d2-4e8d-a923-268e54f981ea`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing`
- 来源：`pmi-cigarette-process`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 常规烟草滤嘴卷烟成品（`reference_product_output`）

厂门处合格未使用卷烟，净质量包括烟草、卷烟纸、滤嘴组件、接装纸及保留胶黏剂，排除全部零售和运输包装。按该交付含水状态下的净质量，参考数量恰为 1 kg，不是 1 kg 烟丝。

- 选定流：常规烟草滤嘴卷烟成品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing`
- 来源：`bat-cigarette-components`

##### 废物流

###### 包装废弃物，纸板（`cardboard_waste`）

实际出厂的破损纸盒、运输箱及纸板边角料质量。只采用身份，不采用流备注中的损耗比例。该行不包括铝箔、塑料及废品卷烟。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing`
- 来源：`pmi-cigarette-process`

###### 铝箔包装边角料（`foil_waste`）

条件行：实际非复合铝箔边角料。单独称量，记录污染及回收或处理去向，不按假定回收率给予抵扣。

- 选定流：铝箔包装边角料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing`
- 来源：`pmi-cigarette-process`

###### 双向拉伸聚丙烯膜边角料（`film_waste`）

条件行：BOPP 投入适用且废料出厂时记录。实际膜边角料与混合塑料废物、再生颗粒分开。

- 选定流：双向拉伸聚丙烯膜边角料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing`
- 来源：`pmi-cigarette-process`

##### 基本流

### 过程：电力公用工程、清洁与环境控制（`utilities`）

#### 输入

##### 产品流

###### 交流电（`plant_electricity`）

计量接收、成烟、接嘴、剔除、回收、包装、压缩空气、抽风及环境控制用电。保留过程或分表拆分，不与已经包含这些分量的总表重复累加。该使用点身份未特指供应方和电压；另行关联实际供电数据集。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q MJ/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`pmi-cigarette-process`

###### 工艺用水（`cleaning_water`）

条件行：实际清洁或加湿所用外购处理水。各用途分别记录。体积表换算采用声明温度下的实测密度；这是技术圈供水，不是淡水资源开采。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 烟草工厂未处理清洗废水（`cleaning_wastewater`）

条件行：排放前交给外部处理的废水。测量液体质量或体积和密度、固体及实测污染物组成。不得表示为向自然界排放的水。厂内废水处理及排放须扩展过程清单，逐项列出实测污染物行。

- 选定流：烟草工厂未处理清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：

##### 基本流

###### 水蒸气（`water_vapour_air`）

条件行：由测量或闭合衡算确定的加湿或清洁蒸发，排放至空气、子介质未特指。与保留成品水分、液体废水及收集冷凝水分开；不得仅据购水量推定蒸发。该行不是水资源投入，也不是燃烧排放声明。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 Q 对应期间采集该具体交换 X；按归一化计算 X/Q kg/kg；条件行仅在存在时记录，否则保留不适用证据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：


## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `internal_rework` | 自身废烟拆分及回用烟丝不取得替代产品抵扣，也不重复承担烟草上游负担；额外用电、操作及不可回收损失保留在合格产出上。回收物跨越场址边界时须有明确质量及去向记录。 | `hmrc-cigarette-process` |
| `shared_resource_assignment` | 首先按 SKU、生产线和时间通过直接计量及工单拆分。无法拆分时，采用有记录的物理驱动量：电气设备以运行时间和实测负载、成分及包装以实际领用量、排放以实测排气量分摊。披露驱动量并与场址总量核对；不同配置卷烟不得未经净质量和配置修正直接按支数分摊。 |  |
| `external_residue` | 出厂烟草及包装废料依实际去向作为废物或另有记录的回收产品，不自动作为有收入共产品。保留废物处理关联并披露截断约定。若存在可销售共产品，记录独立产出质量、品质和经济或物理关系并审查分配；不设默认回收或替代抵扣。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt` | `receipt` | cut_rag_input | 批次及库存记录 | 批次；配方组分；外购加工态；期初期末库存；总领用及退回量；烟草含水率 | 校准净称量、供应商规格及期间库存核对 | kg | 逐批及期末 | 与 Q 一致的声明代表期间；包括启动、换牌、剔除及正常停机；披露季节性和缺失时段 | 供应商及接收批次 | 每 1 kg 参考流 | 校准、原始日志、供应商及 SKU 规格、核对、取样检出证据及不确定性 |
| `cp_making` | `making` | 纸、滤棒、接装纸、胶水及剔除品 | 生产及材料衡算 | SKU；纸卷质量；滤棒数量及质量；接装纸领用；胶水湿质量固含量；剔除去向；集尘量；内部转移 | 核对生产线领用、未用退回、纸卷称量、滤棒取样及分离废料称量 | kg | 逐批或班次 | 与 Q 一致的声明代表期间；包括启动、换牌、剔除及正常停机；披露季节性和缺失时段 | 卷接生产线 | 每 1 kg 参考流 | 校准、原始日志、供应商及 SKU 规格、核对、取样检出证据及不确定性 |
| `cp_recovery` | `recovery` | 内部烟丝回用及不可用组分 | 拆分衡算 | 接收废烟质量；回用烟丝；不可用烟丝；滤嘴段；分离纸；水分；停机 | 逐项称量分离产出，与卷接日志核对内部回用，并记录操作用电 | kg | 每次回收操作 | 与 Q 一致的声明代表期间；包括启动、换牌、剔除及正常停机；披露季节性和缺失时段 | 仅实际回收线 | 每 1 kg 参考流 | 校准、原始日志、供应商及 SKU 规格、核对、取样检出证据及不确定性 |
| `cp_packing` | `packing` | 合格净成品及包装 | 验收及包装记录 | SKU；N；样品 n；样品净 W；m；Q；水分；合格剔除支数；纸盒铝箔膜运输箱及胶水领退用；组分废料 | 计数合格卷烟，使用校准去皮天平对去包装完整卷烟取样；逐项称量包装领退用及废料 | kg | 逐 SKU 批次及发运；规格或水分变化后重新取样 | 与 Q 一致的声明代表期间；包括启动、换牌、剔除及正常停机；披露季节性和缺失时段 | 包装及厂门验收 | 每 1 kg 参考流 | 校准、原始日志、供应商及 SKU 规格、核对、取样检出证据及不确定性 |
| `cp_utilities` | `utilities` | 电力、供水、废水及蒸发 | 计量及水衡算 | 逐操作 E kWh；电表边界；分摊负载；供水 V 和 rho；废水 V 和 rho；水分库存；冷凝水；通风；温度 | 分表计量电力负载；计量实际供水和废水并测密度；结合成品水分及保留冷凝水闭合水衡算，保留不确定性 | MJ; kg | 班次计量及期间核对 | 与 Q 一致的声明代表期间；包括启动、换牌、剔除及正常停机；披露季节性和缺失时段 | 声明纯电制造边界 | 每 1 kg 参考流 | 校准、原始日志、供应商及 SKU 规格、核对、取样检出证据及不确定性 |
| `cp_air` | `making` | 向空气释放的残余颗粒物 | 排放监测 | 出口浓度 c mg/m3；排气量 V m3；时间；气体基准；治理；检出限；无组织估算依据 | 采用代表性排放测试，在相容干湿及温度条件下配对浓度和气量；区分治理前捕集与残余释放 | kg | 代表性生产及治理状态与变化 | 与 Q 一致的声明代表期间；包括启动、换牌、剔除及正常停机；披露季节性和缺失时段 | 制造出口实际空气排放 | 每 1 kg 参考流 | 校准、原始日志、供应商及 SKU 规格、核对、取样检出证据及不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| net_product | cp_packing 及参考产品 | m=W/n kg/支；各合格 SKU 批次 j 的 Q=sum(N_j*m_j) kg。有直接净称量时采用并核对支数换算；不得采用标称烟丝填充质量。 | N; n; W; m | Q kg，排除包装 |  |
| normalization | 全部交换行及采集协议 | q_i=X_i/Q，按每 1 kg 参考流计量；不得以包括废品的总产量归一化。Q>0，X_i 与产出期间必须一致。 | X_i; Q | 适用的 kg/kg 或 MJ/kg |  |
| electricity_mj | plant_electricity；cp_utilities | X_E=3.6*E kWh，单位 MJ；q_E=X_E/Q。分摊操作总量须与工厂电表核对，不重复计入空压、环境控制及抽风。 | E; Q | MJ/kg |  |
| materials_conversion | cp_making 及 cp_packing | 滤棒及纸盒支数按实测组分净 kg/件换算；纸及膜面积按实际批次定量 kg/m2 换算。湿胶采用实测湿质量，另披露固体及水；不得用干聚合物质量替代交付质量。 | count; net sample mass; area; batch grammage; solids | X_i kg 后计算 X_i/Q |  |
| water_balance | cp_utilities；water_vapour_air | 液体 X=V*rho。蒸发量 = 实际入界水量及来料水分 − 出界液态水 − 成品及废物出界水分 − 实测水库存净增加；冷凝水转移须一致处理。报告残差及不确定性；负值或无法解释的残差须审查，不能作为排放。 | V; rho; moisture; water stocks; condensate | 蒸发水 kg 及不确定性后除以 Q |  |
| air_monitoring | dust_air；cp_air | 对配对 mg/m3 及 m3 观察值计算 X_PM=sum(c_k*V_k)*10^-6 kg；仅加上独立论证且不重叠的无组织排放质量。计算 X_PM/Q。不采用烟气毒物或默认颗粒物因子。 | c_k; V_k; fugitive mass; Q | kg/kg |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| sku_composition | 投入及参考身份 | 保留品牌 SKU 组成、水分、滤嘴纸胶及包装状态；披露已计入外购烟丝的供应商成分，避免重复计入。 | 供应商规格及合格产品取样记录 |
| complete_period | 所有过程 | 覆盖实际运行状态、返工剔除、库存变化及场址公用工程；量化缺失记录和归属不确定性。不得把未测流默认为零。 | 电表库存核对及采集完整性声明 |
| mass_and_water_closure | 烟草滤嘴纸包装及清洁 | 分别核对材料流及水分；超出实测仪器和取样不确定性的差异须调查，不编造通用容差。 | 物料衡算、校准称量、不确定性及水分测试 |
| no_default_ranges | 数量及排放监测 | 配方、能耗、相关温度、得率、损耗和净产量须从实际工厂采集。本稿未建立边界相容的经验范围；不得把描述来源或 UUID 备注当作数值基准。 | 工厂原始证据；manifest 保留未解决范围证据需求 |


## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `reference_and_measurement` | 要求声明限定信息、Q>0、交换分子分母同期间、全组分净质量及排除包装。按支数记录须具有实测 m=W/n 和 Q=N*m；不得虚构支重。 |  |
| `route_and_inventory` | 根据较窄路线检查外购加工态和全部实际工序；核验逐项原子身份及公开参考属性单位链。未解决 UUID 保留为明确缺口，不是获批替代。条件行存在或缺失须有证据。 | `hmrc-cigarette-process` |
| `rework_balance` | 核对合格产出、废品、内部回用烟丝、出厂烟草纸滤嘴废物及水分。防止完整废品卷烟与单列组分重复核算。 | `hmrc-cigarette-process` |
| `release_and_completeness` | 核验颗粒物监测气体基准及治理边界；水蒸气仅为经论证向空气蒸发量。送外部处理的废水为技术圈废物，不是淡水资源投入或未测基本排放。声明已执行、跳过及未解决检查和表征覆盖；证据缺失为不确定结论。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 场址及 SKU 特定前景制造过程数据集 |
| downstream_use | secondary_dataset；仅在披露门到门范围及核验关联后用于 background_dataset |
| allowed_use | 按 kg 合格卷烟净质量建立声明纯电卷接包装路线清单；明确关联上下游的扩展研究 |
| excluded_use | 整个 CPC 覆盖、一体化烟叶加工滤棒生产、无关联证据的完整摇篮到大门声明、健康或风险降低及监管符合性背书、跨 SKU 吸用服务比较 |
| required_metadata | PCR 版本；SKU；场址地域年份；来料态；烟草成分滤嘴纸组成及水分；Q 支数换算；过程图；包装；计量；分配；内部循环；废物去向；上游关联 |
| required_quality_disclosure | UUID 缺口、科学审查状态、缺失及范围证据、采集覆盖、不确定性、材料水衡算、跳过排放检查及 LCIA 表征限制 |
| update_trigger | SKU 材料滤嘴胶黏剂包装变化；边界或公用工程路线变化；新供应商证据；公开身份修订；新增实测损耗或排放数据 |


## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc-2025 | official_guidance | 联合国统计司。CPC 3.0 解释注释，2025 年 6 月 30 日，印刷及 PDF 第 116 页，第 25 部及 25020。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类背景；较窄路线为明确方法选择，不是整个 CPC 获接受 |
| hmrc-cigarette-process | official_guidance | 英国税务海关总署。烟草产品税手册 TPD6130 卷烟制造过程（文本版），初级、次级阶段及附注；手册于 2025 年 12 月 18 日更新。https://www.gov.uk/hmrc-internal-manuals/tobacco-products-duty/tpd6130 | 定性烟丝至卷接包装界面、废烟回用及废料去向；英国税务核算描述，不是通用工序或因子 |
| pmi-cigarette-process | extension_guidance | 菲利普莫里斯国际。卷烟如何制造，未注明日期的制造商网页，制造卷烟及成品包装章节。https://www.pmi.com/faq-section/smoking-and-cigarettes/how-cigarettes-are-made | 仅烟条滤嘴接装及包装装配背景；制造商自述不建立通用配方能耗或质量批准 |
| bat-cigarette-components | extension_guidance | 英美烟草。烟草，未注明日期的制造商网页，卷烟结构章节。https://www.bat.com/brands-and-innovation/product-categories/tobacco | 常规组分及特殊滤嘴区分；描述背景，不是背书或实测数量来源 |
