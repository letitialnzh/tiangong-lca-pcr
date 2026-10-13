---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.sacks-and-bags-of-paper
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 无印刷无内衬开口糊底牛皮纸袋

## 1. 范围与适用性

本候选方法定义从外购未涂布未漂白纸袋原纸卷生产验收合格的空袋，限定为无印刷、无内衬、无提手、无阀口的开口糊底牛皮纸袋。申报路线采用即用型天然淀粉水性胶、电驱动制管切管和折底上胶压合，再进行净蒸发的常温养护及出厂准备。须以实际物料表和路线记录核实适用性；不提供工厂数量或通用配方。印刷、阀口、塑料膜、内袋、缝合闭口、提手、涂布、层合、现场造纸、燃料燃烧及外购加热均不属于本路线。若实际存在，仅本PCR不足以覆盖：应独立审查适用方法并补齐真实原子交换后方可报告完整覆盖。[billerud-sack-handbook]

1千克生产参考用于比较本申报纸袋状态的生产负荷，不证明不同袋结构具有等同承载力或寿命。比较研究须定义相同内容物、额定载荷、闭口方式、搬运条件和服务周期，并采用实测袋质量与已证实性能换算。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.sacks-and-bags-of-paper |
| classification_refs | CPC 3.0 32152; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 符合申报材质和路线限制的空开口糊底未漂白牛皮纸袋。 |
| excluded_products | 纸袋原纸卷；涂布或层合袋；印刷、阀口、缝合或提手袋；含膜或内袋的袋；纸盒、信封、编织或塑料袋；被包装货物。 |
| representative_product | 无印刷无内衬开口糊底袋；尺寸、层数、额定载荷由现场申报，不预设。 |
| production_route | 外购纸卷 → 制管纵缝黏接切管 → 折底上胶压合 → 常温养护检验 → 出厂准备。 |
| market_state | 制袋厂门验收合格养护空袋，尚未经客户灌装或封顶。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合范围的空袋生产及申报容纳性能。 |
| How much | 1千克验收养护成品袋净质量。 |
| How well | 申报尺寸、各层定量与层数、含水率、额定载荷、胶缝袋底完整性及适用性能试验条件。 |
| How long or cycle | 一个申报灌装搬运周期；不假定复用次数或保质期。 |
| reference_flow_link | `finished_bag` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 纸袋纸、牛皮纸 `0a8faf13-9861-4805-bcee-a212c6dceb04` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 已成形空袋；开口糊底；无阀口、提手、膜、内袋、印刷；未涂布未漂白牛皮纸牌号及纤维来源；层数与各层定量；尺寸；即用型天然淀粉胶组成及固含量；出厂含水率与净质量；额定载荷及性能条件；实际养护路线；包装与厂门；场址、年份、供应方覆盖。 |

必需限定信息须见于数据集元数据、产品描述或等效字段。此处参考流为已成形纸袋，正式中文名称不改变其物理定义。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用cp_output的验收养护空袋净质量，排除废袋、包纸和托盘。测量残余含水率，不能换成绝干质量。 |
| same_denominator | 所有清单行 | 本行申报属性 | 本行申报单位 | 所有行与采集聚合均按同一验收批次每1千克参考流；交换总量除以验收袋净质量千克数。件数记录须有同一配置实测单袋净质量，不能猜重量。 |
| wet_dry_basis | paper_input; starch_glue; residues | 质量 | kg | 保留实际湿干数量差别、实测水分固含量和供应方参考基准；通用流身份不能证明湿干供应基准兼容。 |
| electrical_energy | electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电功原始属性名称；经核验单位组提供1kWh=3.6MJ的电表量换算。匹配低于1千伏用户端供电，不能解释为燃料热值或交付热量。 |
| freight_basis | inbound_road | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` | kg*km | 汇总实测逐票千克数乘实际路线千米数；单位组提供1t*km=1000kg*km。匹配供方载荷空返定义；不默认距离。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制袋厂接收外购未涂布未漂白纸袋纸卷和即用型淀粉水性胶；电与自来水供应至用户端。 |
| starting_condition_role | foreground production entry |
| product_classification_scope | CPC3.0 32152的窄物理子集；原纸卷属于上游材料，不属于成品袋。 |
| recursive_input_rule | 外购成品袋不是原纸。同类别外购中间物须另明身份与供方厂门覆盖；不递归重建已有负荷，不以成品输出UUID设置第二个定量参考。 |
| upstream_dataset_requirement | 纸袋原纸制造（制浆造纸整饰）、胶、电、水、包装及处理供应过程；到厂供方未含进厂运输时才加真实运输。不得用锯材胶合板数据作造纸证据。 |
| disclosure | 披露物料状态、厂门、场址时期、供方边界、运输、包装、养护、废物接收方、排除项及未决链接；仅转换清单在补齐上游前不属于从摇篮到厂门。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | paper-sack-converting | 纳入实际纸卷搬运、制管切管、纵缝袋底黏接压合、常温养护、质量废品、抽排清洗及出厂准备。印刷、阀口装配与内衬不是默认阶段。 | billerud-sack-handbook |
| boundary_upstream | paper_input | 将制浆造纸置于经核验纸供方或显式上游过程。BREF7.1.10裁切粉尘证据为定性信息，不能将纸厂排放或损纸回用率搬入制袋转换。 | eu-pp-bref-2015 |
| boundary_accounts | all inventory rows | 在负荷分配前保留物料、水和碳的实物平衡。每条内部转移两端同量；内部废料回用不能兼作外部废物或排放。明确未知空气吸湿投入。 | billerud-sack-handbook |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| paper-sack-converting | 合并空袋转换与出厂准备 | required | 仅申报符合范围的路线 | foreground_production | 1千克验收养护空袋净质量 |

本单元合并纸卷接收 → 制管纵缝黏接分切 → 折底上胶压合 → 常温养护 → 检验出厂准备。保留各阶段独立电表、上胶记录及内部转移量。这些阶段属于同一前景单元，不再引入带成品袋参考UUID的第二个产品输出。下列包装、运输、清洗及残余物均依据实际记录有条件纳入，不能整套默认勾选。

### 过程：合并空袋转换 (`paper-sack-converting`)

#### 输入

##### 产品流

###### 未涂布印刷书写纸和包装纸 (`paper_input`)

仅外购未涂布未漂白牛皮纸袋原纸卷。记录各层牌号、定量、纤维来源、含水率和余卷；纸袋记录描述已成形袋，不用于本投入。广义名称包括包装纸，图文纸分类需澄清。供应过程必须匹配纸袋原纸，不能用图文纸生产代理。

- 选定流：未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_materials实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

###### 淀粉基粘合剂 (`starch_glue`)

仅用于纵缝与袋底的外购即用型天然淀粉水性包装胶。分别披露实际配方、湿态供货质量、干固体和供应方数量基准。手册水分比例不是配方；另加稀释水单独计量，不重复计入供货胶中已有水。若未完整建模所有组分和配制，干淀粉供应过程不能连接整份湿胶。

- 选定流：淀粉基粘合剂 `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_materials实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`billerud-sack-handbook`

###### 交流电 (`electricity`)

仅用户端低于1千伏的电网平均交流电，用于放卷、切管、折底、上胶、压合、除尘、搬运和可归属照明。核对实际供方的电压、国家、时期和损耗边界。所选来源为中国供电；其他国家或电网须使用兼容供方并披露地理限制。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：由cp_energy实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 自来水 (`wash_water`)

实际清洗及有记录的稀释用处理后自来水。采用称量千克数，或实测体积乘记录温度下的实测密度；数据库次级系数不是现场密度。这是供水产品，不是自然取水基本流。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_water实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

###### 未涂布印刷书写纸和包装纸 (`paper_wrap`)

仅在出厂实际使用未涂布牛皮包装纸时纳入，不能计入袋壁质量。记录实际包纸、牌号与接收方。其背景供方须独立匹配包装纸，不能自动复用纸袋原纸供方；保留分类瑕疵。

- 选定流：未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_packaging实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`

###### 木制托盘、箱式托盘和其他装载板，木制托盘套环 (`wood_pallet`)

仅实际随货供给的新一次性木托盘纳入，不引入木材加工配方。采用实际托盘质量与结构。返还托盘属于可返还资产，另记录双向实物流和实测复用损失服务基准；不得每次发货都计一个新托盘。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_packaging实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`

###### 货物运输 (`inbound_road`)

仅需单独建模的外包进厂公路货运纳入。逐票记录货物千克数与路线千米数；供方到厂数据可能已含运输。排除重复路段，披露车辆类别、载荷和空返。采用原生质量距离参考量及实际承运服务定义；数据库次级属性不能代替实测货物质量或路线。

- 选定流：货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 单位组：`3620148f-c5db-48ce-9065-a10092089aca`
- 数量规则：由cp_transport实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`

#### 输出

##### 产品流

###### 纸袋纸、牛皮纸 (`finished_bag`)

唯一验收合格、完成养护的空开口糊底袋输出，无印刷、内衬、阀口或提手。净质量含纸、留存干胶和实测残余水分，排除运输包纸与托盘。正式中文名称存在歧义，但原始说明与分类明确指已成形袋；不得用于纸袋原纸。

- 选定流：纸袋纸、牛皮纸 `0a8faf13-9861-4805-bcee-a212c6dceb04`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_output`
- 来源：`billerud-sack-handbook`

###### 未漂白牛皮纸或纸板或瓦楞纸或纸板的回收（废和废料）纸或纸板 (`recovered_trim`)

仅指独立称量、由明确接收方实际作为回收纸产品接收的洁净未漂白牛皮纸裁边。它不是第二个纸袋参考输出。含胶废袋及收集细粉尘不计入本行；披露可销售性和处理。

- 选定流：未漂白牛皮纸或纸板或瓦楞纸或纸板的回收（废和废料）纸或纸板 `55b83f36-bbd0-4e88-9fac-77e1a9bd24db`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_residues实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`eu-pp-bref-2015`

###### 未涂布印刷书写纸和包装纸 (`dispatched_wrap`)

仅随验收袋实际发出的包装纸，在库存废料核对后与paper_wrap投入采用相同质量基准。这项伴随包装实物输出不计入纸袋净参考质量，也不作为联产品分配对象；它转移包装，不提供另一项造纸功能。不扣减其供应负荷或另给回收收益。

- 选定流：未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_packaging实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`

###### 木制托盘、箱式托盘和其他装载板，木制托盘套环 (`dispatched_pallet`)

仅随袋实际发出的一次性木托盘，库存核对后等于可归属wood_pallet投入。它是伴随包装，不是联产品或第二个袋参考。返还资产实物与服务账另行保留；不得抵消托盘供应负荷，也不得每次复用周转都计一个新托盘。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_packaging实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`

##### 废物流

###### 淀粉胶合无内衬纸袋废品 (`reject_bags`)

记录实际外送废弃固态纸袋，包括纸、淀粉和水的完整质量、含水率和接收方验收。广义固体废物身份不规定组成、法律分类、回收率或处理。与可销售清洁边料、捕集粉尘和液态胶分别计量；内部返工是内部实物回流，不另计外送。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_residues实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`

###### 收集的干态牛皮纸裁切粉尘 (`collected_dust`)

记录实际外送的捕集富纤维素裁切粉尘，实测含水率、淀粉混入、集尘器期初期末库存并确认接收方。此废物流表示已捕集工业粉尘，不是大气基本流、窑炉灰或假定粒径份额。内部回用不是外部废物；不预设捕集效率或处置路线。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_residues实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`eu-pp-bref-2015`

###### 废天然淀粉水性制袋胶 (`waste_glue`)

记录独立收集并交给明确废物接收方的实际液态剩余或洒漏天然淀粉水性胶。测量整份湿配方质量、淀粉及其他成分和水的份额，核对供方及接收方湿基兼容性。干燥或固化残胶须另列适用身份和实物行。此广义废液身份不意味着危险废物法律地位、预处理或处置技术；排除已计入废袋或清洗废水的胶。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_residues实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`

###### 未经处理的淀粉胶设备清洗废水 (`cleaning_wastewater`)

记录实际独立收集、交给明确场外处理方的未经处理水性设备清洗废液。按整份混合物kg直接称量，或由V_eff*rho_eff(T)换算，不是纯水质量，不假定水密度。另存实际淀粉、其他成分和水份额；污染物浓度计算使用完整实测废水体积。接收方处理只链接一次；同一转移不另作为淡水直接排放或第二份水产品供应。广义废液身份不提供法律危险性判定或处理路线。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_water实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

##### 基本流

###### 水蒸气 (`water_vapor`)

CAS7732-18-5水以蒸气形式跨入室外空气、子介质未特指，来自实测净蒸发养护。水量平衡须含原料水分、胶中水、清洗输出和库存变化；通风转移须实际到达环境。未知吸湿量须另立实物投入账，不能伪造负排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_moisture实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_moisture`
- 来源：`billerud-sack-handbook`

###### 颗粒物 (PM2.5) (`pm25`)

实际排入室外空气未特指子介质的空气动力学粒径不大于2.5微米裁切颗粒。不是收集粉尘、工作场所粉尘浓度或默认排放因子。现场检测须支持粒径和物料范围。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_air实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`eu-pp-bref-2015`; `epa-method-201a-2020`

###### 颗粒物 (PM2.5 - PM10) (`pm_coarse`)

实际排入室外空气未特指子介质的粒径大于2.5且不大于10微米裁切颗粒。直接测量互斥区间，或由可兼容的成对PM10减PM2.5测量得到；不得再计累计PM10排放。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_air实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`eu-pp-bref-2015`; `epa-method-201a-2020`

###### 颗粒物（> PM10） (`pm_large`)

实际排入室外空气未特指子介质的粒径大于10微米裁切颗粒。只由直接测量互斥区间，或同一测试基准下兼容的总可过滤颗粒物减PM10得到；不同采样定义之间不能相减。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由cp_air实测归属交换数量，按每1千克参考流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`eu-pp-bref-2015`; `epa-method-201a-2020`



## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | paper-sack-converting | 优先过程细分与批次阶段直接归属；按研究目的论证系统扩展；否则采用已证明因果的物理关系，再考虑有理由的其他关系。不得预设质量或收入份额。 | ec-pef-2021 |
| allocation_physical | recovered_trim; finished_bag | 实物账保留实际袋、裁边和废物完整质量。交付包纸与托盘输出属于伴随包装，不是联产品；其物理转移不抵消上游包装负荷。负荷份额作用于可归属环境负荷，不机械缩减联产品实物千克数或改变内部两端同量。认定裁边为联产品前证明可销售性；不自动给避免造纸收益。 | ec-pef-2021 |
| allocation_shared | electricity; inbound_road; wood_pallet | 尽可能记录阶段实测用量；共享公用工程须有真实驱动记录并核对。返还托盘实物流与摊销生产服务负荷分开，以实测周转损失为依据。不推断行业分配系数。 | ec-pef-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | paper-sack-converting | finished_bag | 批次实测记录 | 验收批质量；袋数；配置；含水率；尺寸；额定载荷；试验条件；不合格批 | 校准秤称量验收养护空袋，扣运输包装皮重；仅有袋数时采样称量同配置单袋质量；保留水分性能结果。 | kg | 每批次、相关事件及代表性测试 | 申报含启停废品的代表时期，披露覆盖 | 仅申报场址及符合范围配置 | 每 1 kg 参考流 | 校准；批次追溯；库存仪表核对；供方检测接收证据 |
| cp_materials | paper-sack-converting | paper_input; starch_glue | 批次实测记录 | 收料领料退料；期初期末库存；纸牌号层数定量水分；胶配方固含量牌号供货基准 | 称量领退料，按批次核对采购与库存变化。保留供方牌号、安全资料及湿干供应基准声明。纵缝和袋底胶分开计量后只合计一次。 | kg | 每批次、相关事件及代表性测试 | 申报含启停废品的代表时期，披露覆盖 | 仅申报场址及符合范围配置 | 每 1 kg 参考流 | 校准；批次追溯；库存仪表核对；供方检测接收证据 |
| cp_energy | paper-sack-converting | electricity | 批次实测记录 | 起止kWh；电表校准；电压；阶段工时；共享驱动；供电地域时期损耗 | 采用覆盖驱动、除尘、搬运及归属照明的阶段与共享电表；批次汇总与场址总表及供方边界核对。 | MJ | 每批次、相关事件及代表性测试 | 申报含启停废品的代表时期，披露覆盖 | 仅申报场址及符合范围配置 | 每 1 kg 参考流 | 校准；批次追溯；库存仪表核对；供方检测接收证据 |
| cp_water | paper-sack-converting | wash_water; cleaning_wastewater | 批次实测记录 | 清洗稀释事件；供水体积质量温度密度；废水质量体积；淀粉负荷；接收方处理厂门 | 称量水和废水，或校准体积表加实测对应温度密度；单独收集废水、采样组成并确认厂外接收方。不得重计采购胶中已有水。 | kg | 每批次、相关事件及代表性测试 | 申报含启停废品的代表时期，披露覆盖 | 仅申报场址及符合范围配置 | 每 1 kg 参考流 | 校准；批次追溯；库存仪表核对；供方检测接收证据 |
| cp_packaging | paper-sack-converting | paper_wrap; wood_pallet; dispatched_wrap; dispatched_pallet | 批次实测记录 | 包纸托盘牌号；称量质量；发货批；一次性返还状态；周转损失 | 称量厂门实际包纸及一次性托盘，排除袋净质量；返还托盘保留双向资产实物记录及独立审查服务分配。 | kg | 每批次、相关事件及代表性测试 | 申报含启停废品的代表时期，披露覆盖 | 仅申报场址及符合范围配置 | 每 1 kg 参考流 | 校准；批次追溯；库存仪表核对；供方检测接收证据 |
| cp_transport | paper-sack-converting | inbound_road | 批次实测记录 | 逐票质量；起讫点；实测路线千米；车辆载荷空返；供方到厂覆盖 | 采用地磅发货记录及实际路线记录，覆盖其他供方未含的外包进厂公路段；逐段计算kg*km。 | kg*km | 每批次、相关事件及代表性测试 | 申报含启停废品的代表时期，披露覆盖 | 仅申报场址及符合范围配置 | 每 1 kg 参考流 | 校准；批次追溯；库存仪表核对；供方检测接收证据 |
| cp_residues | paper-sack-converting | recovered_trim; reject_bags; collected_dust; waste_glue | 批次实测记录 | 分流质量；水分固含量；胶污染；内部返工；接收条件；转移单 | 逐原子残余物称量并采样水分组成，核对捕集、内部回用与出厂量。不得把细粉尘并入洁净商品裁边，或把液胶并入废袋质量。 | kg | 每批次、相关事件及代表性测试 | 申报含启停废品的代表时期，披露覆盖 | 仅申报场址及符合范围配置 | 每 1 kg 参考流 | 校准；批次追溯；库存仪表核对；供方检测接收证据 |
| cp_moisture | paper-sack-converting | water_vapor | 批次实测记录 | 纸胶含水；成品废品残余物水分；清洗水；库存变化；养护气候；通风去向；空气吸湿 | 采用养护前后可追溯水分固含量测量及有界水量平衡，若存在空气吸湿须实测。仅量化真正到达环境的净蒸发排放；未决项导致平衡不完整。 | kg | 每批次、相关事件及代表性测试 | 申报含启停废品的代表时期，披露覆盖 | 仅申报场址及符合范围配置 | 每 1 kg 参考流 | 校准；批次追溯；库存仪表核对；供方检测接收证据 |
| cp_air | paper-sack-converting | pm25; pm_coarse; pm_large | 批次实测记录 | 采样法；干湿气基准；通风量；时间；可过滤凝结性范围；粒径；捕集去向；逸散证据；检出限 | 由合格粒径分级采样及通风记录测量外部粉尘排放；仅兼容干态固定源且满足全部方法条件时可采用EPA201A。该法不是逸散测量法。逸散转移独立评估；未知区间保持未决而非零。 | kg | 每批次、相关事件及代表性测试 | 申报含启停废品的代表时期，披露覆盖 | 仅申报场址及符合范围配置 | 每 1 kg 参考流 | 校准；批次追溯；库存仪表核对；供方检测接收证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | 各实际可归属批次交换量除以cp_output验收养护空袋净质量千克数，保留本行分子单位。不得除以含包装毛质量或额定载荷。 | cp_output; campaign records | 每1千克参考流交换量 |  |
| electricity_conversion | electricity | 电表kWh乘3.6MJ/kWh，再除以同一批次分母。 | cp_energy; cp_output | 每1千克参考流MJ |  |
| transport_calculation | inbound_road | 汇总实际逐票千克数乘实际路线千米数，再除以同一批次分母。 | cp_transport; cp_output | 每1千克参考流kg*km |  |
| whole_liquid_mass | waste_glue; cleaning_wastewater | A_wet_kg = V_m3 * rho_mixture(T)，或校准称量整份湿质量。水组分质量为A_wet_kg*x_water；另存实际固体与其他成分，污染物负荷使用完整废水体积。按相同Q仅归一一次，不使用纯水密度，不另加重复处理。 | cp_residues; cp_water; cp_output | 每1 kg参考流的kg及独立实物水平衡 |  |
| water_balance | water_vapor | 纸、湿胶及清洗稀释供水中进入的水加实测空气吸湿量，等于成品袋、残余物、清洗废水和库存增加中留存水，加外部水蒸气排放。保留未决项与不确定性，不用假定因子强行闭合。 | cp_materials; cp_water; cp_moisture; cp_output; cp_residues | 实物水量平衡及有条件排放 | billerud-sack-handbook |
| particle_intervals | pm25; pm_coarse; pm_large | 采用互斥实测空气动力学粒径区间。粗颗粒区间等于兼容PM10减PM2.5；大于10区间等于兼容总可过滤颗粒物减PM10。配对试验须同一气体温度及可过滤范围；负差或不兼容总量须审查。不得在三个区间交换之外再加累计PM10或总颗粒物。 | cp_air; cp_output | 每1千克参考流互斥颗粒质量 | epa-method-201a-2020 |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| qa_route | paper-sack-converting | 依据实际物料表、流程图、胶安全资料和设备记录核实全部范围排除项；未知内衬或印刷状态不能证明其不存在。 | 现场路线记录和物料表 |
| qa_provider | all inventory rows | UUID身份与数量供应基准分开解决。保留精确物料状态、地域年份、参考数量、背景覆盖和接收接口；披露未决链接。 | 供方声明及经审查数据连接 |
| qa_balance | paper-sack-converting | 分配前核对阶段转移、物料固体、水和碳。区分生物化石碳来源；上游或新增真实过程存在生物CO2交换时须保留，不因温室气体报告排除而删LCI。本路线不推断直接燃烧。 | 实物平衡账及独立分配负荷账 |
| qa_air | cp_air | 独立评估实际外部颗粒通风、收集粉尘及逸散范围。不采用锯材PTE因子、默认粒径分布或强制正排放。 | 合格检测及捕集去向记录 |
| qa_maintenance | paper-sack-converting | 完成现场清单前，调查实际切刀、传动带、涂胶部件、润滑剂、清洁剂、包装损失和更换耗材。分别记录材质或配方、领退、库存、实际服务使用、磨损和完整废弃实物；每项实际交换另列原子行、核实身份并实测，不假定维护包、寿命、频率或零耗用。周转托盘及包装损失保持完整实物质量，不随负荷分配缩减。 | 逐项采购/领退/库存/维护、实测服务与完整废弃物记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_bag | 必须恰有一个成品袋参考产品输出申报1千克验收净质量及必需限定信息。中间袋输出不能复用其参考UUID。 | billerud-sack-handbook |
| validate_denominator | all inventory rows | 清单基准、批次聚合及双语均采用每1千克参考流及cp_output净质量；每项数量须有可追溯协议且无虚构数量。 |  |
| validate_route | paper-sack-converting | 若实际存在印刷、膜内衬、阀口、提手、供热、燃烧或造纸而无独立审查覆盖，拒绝声称完全适用。分类映射被接受本身不证明方法学获批或数据集覆盖完整。 | billerud-sack-handbook |
| validate_balance | all inventory rows | 要求实物物料水碳账核对、上游处理供方兼容及独立有据负荷分配。身份、供应基准、空气吸湿或粒径未决使所涉数据覆盖不完整。 | ec-pef-2021 |
| validate_particles | pm25; pm_coarse; pm_large; collected_dust | 外排互斥空气区间须与捕集废物、内部回用及工作场所测量分开。EPA201A不适用于含水滴排放或逸散环境采样；不得进行无支持的区间相减。 | epa-method-201a-2020 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 补齐上游接收接口后用于申报制袋厂门符合范围空袋供应；同配置按实测袋净质量缩放。 |
| excluded_use | 原纸制造；灌装货物或客户封顶；无证据等效性能声称；印刷内衬阀口提手缝合袋；通用袋配方或未经限定的从摇篮到厂门清单。 |
| required_metadata | 必需限定信息；物料表路线；实物账；实测数量协议；供应方数量基准；场址时期；分配；厂门包装运输；废物接收方。 |
| required_quality_disclosure | 候选方法审查状态；采样不确定性；排除项；身份数量供方未决项；空气水覆盖完整性；技术检查不代表方法学批准。 |
| update_trigger | 袋设计、纸胶组成、内衬印刷阀口闭口路线、养护能源、供应方、处理运输、性能或实测质量改变。 |

## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| billerud-sack-handbook | handbook | [Billerud, Handbook for Sack Kraft Papers and Paper Sacks (2025-12-18 file edition)](https://www.billerud.com/globalassets/billerud/packaging-materials/sack-paper/sack-handbook-251218.pdf); 印刷及PDF第25、28、30–32、53页 | 开口糊底袋身份；有条件制管折底转换；养护水分机制及胶性能。不引入数量配方时间强度默认值。 |
| eu-pp-bref-2015 | official_guidance | [European Commission JRC, Production of Pulp, Paper and Board BREF (2015)](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf); DOI 10.2791/370629; §7.1.10, 印刷第670页/PDF第708页 | 上游制浆造纸范围与整饰裁切粉尘定性识别；制袋类比须现场核查。不移植纸厂排放量。 |
| epa-method-201a-2020 | official_guidance | [US EPA, Method 201A (October 7, 2020)](https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf); §§1–4, PDF pp.1–3 | 有条件兼容固定源可过滤颗粒粒径采样、限定及互斥区间解释。不作逸散因子。 |
| ec-pef-2021 | official_guidance | [European Commission, C(2021)9332 Annex I](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf); §4.5, PDF pp.63–64 | 分配层次，记录因果关系及未采用选项理由。不声称PEF合规。 |
