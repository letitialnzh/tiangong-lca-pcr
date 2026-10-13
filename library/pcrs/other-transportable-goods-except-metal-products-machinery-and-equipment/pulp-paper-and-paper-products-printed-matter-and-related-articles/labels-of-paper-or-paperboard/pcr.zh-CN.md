---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.labels-of-paper-or-paperboard
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 涂硅格拉辛底纸承载纸质压敏标签的水性柔印加工

## 1. 范围与适用性

本方法适用非热敏、未涂层白色纤维素纸面材、永久性丙烯酸分散体压敏胶及涂硅格拉辛底纸承载的标签。购入完整未印刷复合卷材，单色黑色水性柔印，电热干燥，仅吻切面材及胶而不切穿底纸，排废、分切、复卷并交付。HERMAwhite (601)/62Gpt/523 是真实商业结构例证，不是配方或数量默认值。实际适用性须由供应方规格及油墨／底纸加工试验确认。[herma-labelstock-2026; herma-acrylic-dispersion]

湿胶标签在贴标时施胶，起始及交付状态不同；直接热敏标签带热反应涂层，热转印是另一印刷作业；无胶裁切标签没有压敏胶及底纸。这些产品以及无底纸标签、薄膜或合成纸面材、纸板、可移除／热熔／溶剂型压敏胶、UV／溶剂墨、多色装饰、上光、烫箔、厂内涂布或制浆均排除。不把它们的耗材合成此清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.labels-of-paper-or-paperboard |
| classification_refs | CPC 3.0 32197; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 连续格拉辛底纸上的印刷模切永久压敏纸标签 |
| excluded_products | 第1节的湿胶、直接热敏、无胶、无底纸、薄膜／纸板及不兼容路线 |
| representative_product | HERMAwhite (601)/62Gpt/523 加工为黑色印刷模切卷 |
| production_route | 购入复合卷材 → 水性柔印 → 电热风干燥 → 吻切 → 排废 → 分切／复卷／装箱 |
| market_state | 可剥离贴标的标签卷；出厂时保留底纸 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供在声明基材上以压力贴附的印刷标识标签 |
| How much | 1 kg 验收标签纸幅，包含随货连续底纸 |
| How well | 声明图文／可读性、模切尺寸、离型力、初粘／剥离及实际贴标基材附着验收；无通用数值门槛 |
| How long or cycle | 一次贴标，满足声明标识周期；记录货架期及使用条件，不假定通用寿命 |
| reference_flow_link | finished_labels |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 纸质标签 `7b25a54f-baa6-4593-9670-4240a3315eed` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纸规格及纤维来源；非热敏状态；丙烯酸分散体压敏胶牌号及永久性；格拉辛规格；硅酮体系／固化及离型试验；标签面积／件数及废框布局；底纸宽度及随货质量；油墨牌号／黑色图文覆盖；干燥用电／电压；印刷及附着试验；水分／调湿；货架及使用条件；采集期间／场址；上游供应方基准及废物接收方 |

全部限定信息写入数据集元数据或等效产品／过程说明。面积及标签件数补充质量参考，没有批次特定称量不得替代质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用1 kg验收调湿纸幅，包含底纸、排除卷芯及纸箱；采用cp_output称量。全部行采用同一参考基准。 |
| electricity_basis | electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留选定电力基准属性；实测kWh按1 kWh = 3.6 MJ换算。不将其作为交付热量。 |
| formulation_basis | ink | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 交付湿配方及另加水分别采集；保留实际干固体及化学物种质量账。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工厂门口购入完整未印刷卷材、已制备印版、即用黑色水性油墨及包装耗材 |
| starting_condition_role | foreground_input |
| product_classification_scope | CPC32197较窄子集；上游标签卷材是不同的未完成交付状态 |
| recursive_input_rule | 购入未完成卷材只记一次输入。不以完整已印刷／模切标签作代理；外协加工必须披露，不能递归叠加成品标签制造。 |
| upstream_dataset_requirement | 供应方特定复合物数据须覆盖纸浆／纤维供应、面材及格拉辛造纸、硅酮涂布和固化、丙烯酸分散体胶制造／涂布／干燥、复合、废料及能源。采用实际组分干涂层质量及供应方得率，不用宣传资料数值。不与另行链接组分重复核算。 |
| disclosure | 加工路线及供应方门口状态；实际电压及电热干燥；仅用水清洗；废物外送处理；纳入包装；下游贴标／底纸处理排除 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | all inventory rows | 使用一个前景单元convert_labels，保留各阶段独立计量。纳入调机、合格生产、清洗、抽风、模切、排废、复卷及包装。不以参考UUID输出中间成品。 | celab-label-terminology-2023 |
| boundary_liner | labelstock; finished_labels; matrix; liner_waste; reject | 合格标签下底纸包含在交付参考纸幅内。废框、单独底纸边料及整份复合物废卷为不同实物输出。 | celab-label-terminology-2023 |
| boundary_environment | all inventory rows | 外送清洗废水属废物交接，不是淡水排口。调查实际油墨成分及空气释放；数据集完整前将证实的缺失物种作为独立原子行补入。不假定厂内燃烧／氧化装置；此类路线须重新审查范围。扩展LCI保留任何真实生物CO2，不因温室气体报告排除口径删除。 | epa-printing-ap42 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| convert_labels | 收料、印刷、干燥、吻切、排废、分切、复卷及包装 | required | 选定购入复合卷材路线 | foreground_production | finished_labels |

实物阶段：供应方复合卷材 → 收料 → 黑色柔印及电热干燥 → 吻切／排废 → 分切／复卷 → 发货。同一纸幅连续加工合并为一个前景单元；各阶段电力、油墨、得率及废物记录仍独立。上游硅酮／压敏胶组分账是供应方证据，不是第二套前景输入。[celab-label-terminology-2023]

### 过程：印刷及模切加工（`convert_labels`）

#### 输入

##### 产品流

###### 纸质标签 (`labelstock`)

购入的单一复合纸幅，不是三种分别购入的原料。声明未涂层白色纤维素纸面材、永久性丙烯酸分散体胶、格拉辛上已固化的硅酮及未预印刷状态。广义标签基材身份不提供涂布配方或行业平均数量；核实供应方数据覆盖整份交付复合物。 采用定位记录明确为中国厂内零售容器标签纸基材。须核实实际被贴基材及供应地域、完整未印刷三层供货和供方覆盖；其他用途或地域须另核相容身份及供方。油墨未说明不授权把已印刷来料当未印刷。

- 选定流: 纸质标签 `5f6bda17-c5da-4d9e-ad44-aea4877cb9ff`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_stock采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_stock`
- 来源: `herma-labelstock-2026`

###### 即用型黑色水性柔性版印刷油墨 (`ink`)

单种黑色配方油墨，按交付湿态计量。向供应方取得实际水、固体、乙醇、氨及其他物种质量分数；不将凹版油墨等同柔版油墨。不假定另用其他颜色、上光油或机旁化学添加剂。 采用的广义印刷油墨记录具有水性同义名及中文水稀释/水分散连结料描述；英文是通常油基示例，未硬限定油配方。记录没有排除柔印的路线，但语言描述差异仍须源数据及供方澄清。只用于实际黑色水性柔印整份配方，保留完整供货湿kg、核实组成及相容供方，不从记录推定默认油/罩光剂、密度或可印性。

- 选定流: 水性油墨 `92ae1ece-04f3-4b7b-b0a0-4fcaa6076210`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_ink采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_ink`
- 来源: `epa-printing-ap42`

###### 交流电 (`electricity`)

限用户侧1–35千伏供电。分别计量印刷驱动、电热风干燥、抽风、分切和复卷后只汇总一次。核实实际进线电压、变压器边界、地区及年份；此名为净热值的电力属性不代表购入蒸汽或加热效率。 原始供电地域为CN；核实实际地域年份及供方相容性，否则另核适用供电。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 采用cp_energy采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源:

###### 自来水 (`water`)

购入处理后自来水，用于声明的油墨稀释及仅用水的印刷机清洗。基准属性为质量；称量耗用量，或以计量体积结合记录温度下实测密度换算。不假定数据库密度，不另将供水重复计为基本流取水。

- 选定流: 自来水 `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_water采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源:

###### 圆纸筒 (`core`)

实际纸板卷芯，不含标签纸幅。分别称量各规格并核对回用、随货卷芯及损耗；件数须有规格特定实测质量。

- 选定流: 圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_pack采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pack`
- 来源:

###### 瓦楞纸板运输纸箱 (`box`)

实际运输纸箱，按规格及纤维组成称量。原生纤维16.6%／再生纤维83.4%的候选不代表通用纸箱；折叠盒候选明确不具运输耐用性。不采用替代UUID。

- 选定流: 瓦楞纸板运输纸箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_pack采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pack`
- 来源:

###### 已制备光聚合物柔版印版 (`plate`)

购入已制备黑色图文印版，覆盖上游制版。记录材质、背基及实际复用印次。按实际服务作业归属更换耗用，并保留印版实物存量账。PS聚苯乙烯材料不是此印版。

- 选定流: 已制备光聚合物柔版印版
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_plate采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_plate`
- 来源: `epa-printing-ap42`

#### 输出

##### 产品流

###### 纸质标签 (`finished_labels`)

排废后保留在连续涂硅格拉辛底纸上的验收印刷模切标签。参考净质量包含标签面材、保留压敏胶、干墨及交付底纸，排除卷芯和纸箱。此广义纸标签流在本PCR中受该物理路线限定。

- 选定流: 纸质标签 `7b25a54f-baa6-4593-9670-4240a3315eed`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `celab-label-terminology-2023`

###### 圆纸筒 (`core_shipped`)

随验收卷交付的纸卷芯，不是独立分配的联产品。与购入卷芯及存量变化核对实际质量。排除于参考质量。

- 选定流: 圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_pack采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pack`
- 来源:

###### 瓦楞纸板运输纸箱 (`box_shipped`)

随卷交付的运输纸箱；与采购、存量及损坏纸箱核对，排除于参考质量。

- 选定流: 瓦楞纸板运输纸箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_pack采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pack`
- 来源:

##### 废物流

###### 带印墨纸面材及丙烯酸压敏胶的模切废框 (`matrix`)

剥离的面纸／胶废框，保留实际油墨污染且不包含连续承载底纸。单独称量，记录接收处理及回收方接收条件。不将含胶复合物视为洁净纸厂损纸。 广义工业废弃固体类别仅定位这一项实际分收的纸/压敏胶/墨废框。保留完整实测湿质量、干组成、水分及接收方；共享广义UUID不把它与废卷材或废印版合并，也不授权洁净废纸背景。不默认回收性、危险属性和处理。

- 选定流: 固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_waste采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `celab-label-terminology-2023`

###### 涂硅格拉辛底纸边切废料 (`liner_waste`)

仅含加工厂实际底纸边切或分离的纯底纸调机损失。好标签下随货连续底纸仍属产品；客户贴标后的废底纸属下游。分别记录纸、硅酮及胶污染状态。 未指定纸/纸板废料类别可定位实际以纸为主体、保留硅酮涂层和污染物的格拉辛边料。未限定洁净损纸路线不证明可再制浆、废物终止状态或回收信用。须核实底纸组成、完整交接kg、H2O和接收相容性；本项不是随货连续底纸。

- 选定流: 废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_waste采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `celab-label-terminology-2023`

###### 报废纸／压敏胶／涂硅格拉辛复合纸幅 (`reject`)

含面材、胶及底纸的整份复合卷调机废料或不合格印刷卷。与单独废框及单独底纸边料分开；记录湿干状态及去向。 广义工业废弃固体身份仅用于这一项完整纸/压敏胶/涂硅格拉辛废复合卷材，完整质量包含各层、实际墨和水分。即使与其他工业固废共享身份，也与废框及纯底纸边料分开；实际处置或回收接收须验证，不假定处理路线。

- 选定流: 固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_waste采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `celab-label-terminology-2023`

###### 黑色水性柔印机清洗废水 (`wash`)

仅用水清洗而收集外送处理的液体，含油墨固体及溶解化学组分。称量收集液，采样组成，记录运输方及接收处理。此技术系统交接不是直接淡水排放。 工业清洗废液类别以实际液态混合物、储槽来源、完整化学组成及接收许可为条件。称整股湿交接量或用实测V*rho(T)，水账独立采用实测H2O分数。悬浮溶解墨和COD/BOD表征整股流，不把重叠指标相加成质量或直接基础流释放。浓废墨及凝胶固态残物分开，不推定通用危险分类。

- 选定流: 废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_waste采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `epa-printing-ap42`

###### 废油墨 (`ink_residue`)

分离的不可再用黑色水性柔版油墨，不含已计清洗废水。仅采用广义标签印刷废油墨身份，不使用记录中的专家判断数量。记录固体、水、危险分类及接收方。

- 选定流: 废油墨 `39f42c3c-9700-4eb6-8159-bd0206cd38e0`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_waste采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `epa-printing-ap42`

###### 收集的纸分切粉尘 (`dust_waste`)

收集的干纸粉尘，若含胶／墨则实测污染情况。记录实际除尘收集及外送处理。已捕集颗粒不再作为空气排放重复计入；不假定普遍可再制浆。 工业捕集粉尘的废物流身份用于这一项实际单独收集的干态裁切粉尘，核实纤维、压敏胶/硅酮/墨污染、水分及接收方。完整捕集量和任何内部返回与逸出厂界空气粒径段分开，不规定默认清扫频率或捕集效率。

- 选定流: 粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_waste采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `jrc-paper-bref-2015`

###### 废光聚合物柔版印版 (`plate_waste`)

实际使用后外送的印刷印版。核对服务寿命、保留印版及更换；印前部门产出身份不证明使用后印刷机印版废物身份。 实际报废的光聚合物印版及其实际背衬为一项工业废弃固体；独立核实聚合物/背衬/墨污染、完整kg及接收方。保留原实物报废和库存，与按服务寿命分配负荷分账，不用仅限制版部门来源的废物记录。

- 选定流: 固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_plate采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_plate`
- 来源: `epa-printing-ap42`

##### 基本流

###### 颗粒物 (PM2.5) (`pm25`)

仅计实际越过收集装置向室外空气未特指、非长期介质释放的不大于2.5微米颗粒；本生产期测量或证实分粒径排气和无组织释放。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_air采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `jrc-paper-bref-2015`

###### 颗粒物 (PM2.5 - PM10) (`pmcoarse`)

仅计互不重叠的2.5–10微米空气颗粒区间，室外空气未特指、非长期。PM10及PM2.5若为嵌套测量，以相同期间兼容PM10扣减PM2.5并保留不确定性，不累加嵌套总量。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_air采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `jrc-paper-bref-2015`

###### 颗粒物（> PM10） (`pmover10`)

仅计测得逸散至室外空气未特指、非长期介质的大于10微米颗粒。TSP扣减兼容PM10可求此区间；不兼容采样或负残差保持未决。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_air采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `jrc-paper-bref-2015`

###### 乙醇 (`ethanol`)

CAS 64-17-5，排入室外空气未特指、非长期介质，仅在实际油墨组成及排气平衡证实释放时计入。元数据区分化石／生物原料来源；不以乙醇替代总VOC，不假定购入乙醇全部蒸发。

- 选定流: 乙醇 `08a91e70-3ddc-11dd-9349-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_species采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_species`
- 来源: `epa-printing-ap42`

###### 氨 (`ammonia`)

CAS 7664-41-7，排入室外空气未特指、非长期介质，仅在实际油墨含氨且有释放时计入。NH3质量不是氮质量或胺质量；不存在须有配方及排放证据。

- 选定流: 氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_species采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_species`
- 来源: `epa-printing-ap42`

###### 水蒸气 (`water_vapour`)

CAS 7732-18-5，油墨及清洗过程向室外空气未特指、非长期介质蒸发的水。核对产品水分、清洗废水及存量变化；蒸发不是废水排放。不使用蒸腾专用记录。 独立核算进出气湿度及完整复合卷材、全部残物所带水分；环境湿度不是生成水蒸气。实际吸湿须另核交换，不记为负排放蒸气。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采用cp_water采集同一期间实际归属交换量，除以验收参考纸幅质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `epa-printing-ap42`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_jobs | all inventory rows | 先用细分或有据系统扩展，再用有据的内在实物关系，最后才用实际经济价值等有理由的其他关系；记录前置层级不可用的原因。系统扩展须有实际功能和被替代供给，不自动赋予信用。优先直接测量区分作业。共用驱动、干燥、抽风及清洗按记录的机器时间／电力及实际因果驱动归属，包含本作业调机。未分配实物质量／水／碳账与环境负荷归属账分别保留。 | eu-pef-2021 |
| allocation_residues | matrix; liner_waste; reject; dust_waste; ink_residue; wash; core_shipped; box_shipped | 不预设可售联产品。记录实际废物处理，不自动给替代生产信用。不把实物输出乘环境负荷分配份额；包装随参考服务交付，不是独立收益产品。真实联产品须有经审查因果分配基准。 | celab-label-terminology-2023 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

在同一完整期间，先汇总每条流实际归属量，再除以cp_output所测验收参考纸幅净质量。下表aggregation_rule均明确为每 1 kg 参考流。输入、空气释放、废物及随货包装保持独立账，阶段记录分别保留。上游购入产品数据还须包含供应方门口到加工厂的真实进厂运输，以实际起讫地点、运输方式、距离、装载及质量为依据；若另行链接运输，避免供应方数据重复覆盖。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | convert_labels | 成品纸幅 | 批次称量 | 批次；纸／胶／底纸规格；水分；卷毛质量；卷芯皮重；验收参考纸幅质量；标签件数／面积；离型／印刷／附着试验 | 用经校准秤称验收卷，扣除实际卷芯及运输包装，保留底纸；记录调湿及对应验收。 | kg | 每批 | 完整代表性生产期间 | 加工厂验收产品 | 每 1 kg 参考流 | 校准；皮重记录；离型及印刷试验 |
| cp_stock | convert_labels | 卷材 | 收料及耗用账 | 供应方；批次；复合物净质量；期初／期末存量；退料；纸／胶／底纸组成；干涂层质量；供应方门口状态及工艺覆盖 | 称量不含芯复合纸幅并核对收料及存量；取得组分质量、涂硅固化及胶涂布／干燥／复合证据。 | kg | 每次收料及生产期 | 同一完整期间 | 加工厂选定卷材规格 | 每 1 kg 参考流 | 供应方规格；上游覆盖；质量核对 |
| cp_ink | convert_labels | 油墨 | 配方及领料账 | 油墨规格／颜色；湿态领料；退料；存量变化；水／固体；乙醇／NH3／其他物种；覆盖；保留干墨；废墨量 | 称量即用湿黑墨，取得配方及实际印刷覆盖；追踪回用及残墨，不用文献配方。 | kg | 每作业及批次 | 同一完整期间 | 黑色水性柔印机 | 每 1 kg 参考流 | 秤；供应方SDS／组成；印刷验收 |
| cp_energy | convert_labels | 电力 | 分表 | 印刷；干燥；抽风；分切／复卷；包装；kWh；作业时间；计量电压；变压器范围；地区／年份 | 按阶段读取校准分表，纳入归属的待机／调机，汇总一次并将实测kWh换算MJ。 | MJ | 每作业及期间总量 | 同一完整期间 | 用户侧用电加工 | 每 1 kg 参考流 | 电表校准；账单；归属记录；电压／供应方基准 |
| cp_water | convert_labels | 水及水蒸气 | 称量及水平衡 | 稀释；清洗；体积；温度；实测密度；墨中水；产品水分；废水；蒸发；期初／期末水存量 | 称量另加自来水或以实测密度换算实测体积；同一期间水平衡确定蒸发并保留不确定性。 整股废墨及清洗废水按独立实测H2O分数进入水账，不使用整股湿kg。 | kg | 每次稀释／清洗及期间 | 同一完整期间 | 加工厂；无淡水排口 | 每 1 kg 参考流 | 水表／秤；密度测量；水平衡残差 |
| cp_pack | convert_labels | 卷芯及纸箱输入／交付 | 包装账 | 规格；件数；实测单重；期初／期末存量；回用；采购；随货量；损坏量；纸箱纤维组成 | 按规格称实际纸芯及瓦楞箱，核对输入及随货输出，独立于纸幅质量。 逐项核对完整收货加期初库存等于完整随货或返回转移加损坏废弃加期末库存；来料复合卷芯和供墨容器按实际独立实物记录，复用服务分配不缩减交接质量。 | kg | 每次发货及库存期间 | 同一完整期间 | 加工厂包装 | 每 1 kg 参考流 | 皮重；发货记录；包装平衡 |
| cp_plate | convert_labels | 印版及废印版 | 印版存量及服务账 | 印版／背基材质；制备质量；采购；复用印次；更换；保留／退役质量；服务作业；接收方 | 称已制备及废印版；保留期初／期末存量及实际服务记录；按服务作业归属耗用负荷，不改变实物存量。 | kg | 每版及更换 | 同一完整期间及印版服务历史 | 黑色图文印刷印版 | 每 1 kg 参考流 | 供应方制版；服务记录；接收方证据 |
| cp_waste | convert_labels | 各独立废物流 | 分类废物称量 | 流ID；湿质量；干比例；纸／胶／硅酮／墨组成；采样；粉尘捕集；接收方；运输方；实际处理；存量变化 | 分离称量每条流；采样废水及残余物；外送前核对内部退回；保留接收方接收条件。 | kg | 每次外送及完整期间 | 同一完整期间 | 加工厂／外部交接 | 每 1 kg 参考流 | 称重单；采样；组成；接收处理 |
| cp_air | convert_labels | 各独立颗粒区间 | 分粒径排气及无组织调查 | 来源；采样标准／方法；浓度；实际排气量；温度；压力；水分；粒径切割；捕集粉尘；时长；不确定性；检出限 | 调查模切／分切／复卷及收集器；代表性排气采样并证实无组织释放；保留兼容不重叠粒径区间，无默认因子。 | kg | 代表性生产期及运行小时核对 | 同一完整期间 | 收集后室外空气释放 | 每 1 kg 参考流 | 采样协议；空白／检出限；粒径一致；捕集质量 |
| cp_species | convert_labels | 乙醇及氨 | 物种平衡及排放测量 | 供应方CAS／比例；墨／存量输入；产品保留物种；废液物种；存量变化；捕集；回收；排气及无组织测量；原料来源 | 调查实际化学物，并逐物种核对产品、废液、存量、回收及室外释放；不能闭合时测量。其他证实物种逐条补入。 | kg | 每配方／作业及排气生产期 | 同一完整期间 | 加工厂室外空气释放 | 每 1 kg 参考流 | 供应方组成；分析方法；CAS；质量平衡；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | 所有清单行 | 各实际期间归属交换量除以同期间验收参考纸幅质量。finished_labels在此基准为1 kg。不除以包含卷芯的卷毛质量。 | cp_output; cp_stock; cp_ink; cp_energy; cp_water; cp_pack; cp_plate; cp_waste; cp_air; cp_species | 每 1 kg 参考流交换量 | celab-label-terminology-2023 |
| electricity_conversion | electricity | 1 kWh = 3.6 MJ; 转换来自已核实能量单位组，不是印刷排放因子 | cp_energy | 每 1 kg 参考流电力MJ | |
| physical_balance | 所有清单行 | 在负荷归属前，将输入复合物／油墨／水与验收纸幅、独立残余物、废水、实际空气损失及存量变化核对。面材、胶、底纸、墨固体、水及化学碳分别追踪，无通用损耗因子。 | cp_stock; cp_ink; cp_water; cp_output; cp_waste; cp_air; cp_species | 未分配实物平衡及残差不确定性 | epa-printing-ap42 |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_scope | 所有清单行 | 一个完整代表性期间／场址及声明卷材规格；报告调机、停机、存量及不确定性。不从流身份推断供应方数量、范围或默认值。 | 电表／秤及供应方记录；核对账 |
| quality_release | finished_labels | 报告实际标签面积／件数、废框布局、随货底纸比例及质量、离型／附着／印刷验收、调湿及声明使用。仅质量不证明等效贴标功能。 | cp_output; cp_stock |
| quality_missing | 所有清单行 | UUID未决、供应方不兼容、缺少组成／接收方或计量不受支持均为明确证据缺口。补入实际缺失原子输入／排放；不存在或零值须有证据。本PCR没有采集工厂实测数据。 实际调查润滑油、更换刮刀/模具、滤材抹布、清洗剂及独立废物流；证明缺项或在完成前补实际原子交换。 | 采集协议及数据集完整性记录 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_labels | 要求恰好一个成品参考输出，1 kg包含底纸而排除卷芯／纸箱；全部期间数量及聚合同此分母。广义纸标签身份及较窄物理路线与供应方数量兼容分别确认。 | herma-labelstock-2026 |
| validation_waste | matrix; liner_waste; reject; wash; dust_waste | 要求独立质量／组成／去向记录。不将随货连续底纸重复计为制造废物，不以洁净废纸代理含胶废框，不在外送交接处计基本流排水。 | celab-label-terminology-2023 |
| validation_air | pm25; pmcoarse; pmover10; ethanol; ammonia; water_vapour | 核实粒径互不重叠、排放为捕集后室外空气非长期；逐化学物核实CAS、来源及质量基准。不把VOC碳报告等同化合物质量，不把胺等同NH3、土壤等同空气、未知量等同零。 | jrc-paper-bref-2015; epa-printing-ap42 |
| validation_coverage | 所有清单行 | 方法审核与实际数据完整性分别评估。不兼容规格、印刷化学、热源／氧化装置或厂内涂布路线未经审核不属此方法。必需供应方证据及实物平衡未闭合不得发布数据集。 | herma-labelstock-2026; epa-printing-ap42 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_production_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明工厂门口、指定复合物／印刷／交付路线的纸标签加工 |
| excluded_use | 整类CPC32197默认；排除的其他标签；完整包装产品、客户贴标、下游底纸处置；全生命周期声明 |
| required_metadata | 参考限定；供应方工艺门口状态；全部协议；存量平衡；阶段分表；运输及处理链接；不确定性；分配；地区／年份 |
| required_quality_disclosure | 未来采集要求与实测数据的区别；实际供应方兼容性；未决流身份／范围；排放及废物覆盖；独立审核状态 |
| update_trigger | 纸／底纸／胶规格、硅酮固化、油墨配方、干燥路线／电压、模切布局、废物去向、供应方数据集或参考调湿改变 |

## 11. 数据源

| source_id | 标题 | type | reference | 定位 | used_for |
| --- | --- | --- | --- | --- | --- |
| herma-labelstock-2026 | HERMAwhite (601)/62Gpt/523 product information | handbook | https://shop.material.herma.com/product-details/HH12075/ | Issue 08.2026; Product construction, Application and use, Processing | 生产者特定结构及模切能力；不采用数量或通用性能默认值。 |
| herma-acrylic-dispersion | HERMA Migration safety adhesive overview | handbook | https://www.herma.com/material/products/adhesives/migration-safety/ | 62Gpt row | 仅支持真实产品例的丙烯酸分散体胶身份；不声明最终印刷包装的迁移批准。 |
| celab-label-terminology-2023 | CELAB-Europe Regulatory Summary 2023 | handbook | https://celab-europe.org/celab-europe-regulatory-summary-2023/ | Labels terminology; Matrix waste & spent release liner | 复合物、废框及底纸实物边界；不采用历史法律判断或回收保证。 |
| jrc-paper-bref-2015 | Best Available Techniques Reference Document for the Production of Pulp, Paper and Board | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 2015; Section 7.1.10; printed670/PDF708 | 纸裁切可能产生粉尘。纸厂损纸回用不证明含胶废框可再制浆；无排放因子。 |
| epa-printing-ap42 | AP-42 Section 4.9.1 General Graphic Printing | official_guidance | https://www.epa.gov/sites/default/files/2020-10/documents/c4s09-1.pdf | 4/81, reformatted1/95; Sections4.9.1.1.4,4.9.1.2,4.9.1.2.5; PDF3,6,7,9 | 仅历史工艺／排放点及平衡方法。不采用油墨配方、溶剂比例、残留溶剂或人均因子；使用实际配方及释放。 |
| eu-pef-2021 | 欧盟委员会C(2021)9332 final 附录I-II | official_guidance | https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf#page=63 | 附录I4.5，PDF63–64 | 通用多功能层级；实物输出账独立，不声称完整PEF符合性。 |

检索日期2026-10-12。上述协议定义未来前景测量；未提供场址数据、UUID数量默认值或虚构经验区间。
