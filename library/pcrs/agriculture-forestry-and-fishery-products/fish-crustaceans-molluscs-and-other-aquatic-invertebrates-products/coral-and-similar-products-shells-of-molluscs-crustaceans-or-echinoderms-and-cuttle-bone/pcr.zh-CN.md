---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.coral-and-similar-products-shells-of-molluscs-crustaceans-or-echinoderms-and-cuttle-bone
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 经水洗沥水的未煅烧贻贝壳碎片

## 1. 适用范围

本 PCR 仅适用于来自贻贝加工、按来源分离的贻贝壳碎片，经淡水清洗和沥水，不进行热干燥、煅烧或研磨。最终参考为最终沥水/储存后、进入窑炉前独立定义的中间物料交接，不是对外销售的制造碳酸盐产品。Barros 等（2009）第 2.1 节定性支持可适用路线，但当前来源分离及真实操作仍须有证据。

排除珊瑚、其他软体/甲壳/棘皮动物壳、乌贼骨、未分离混合壳进料、活体整动物、壳粉、成形制品及化学转化衍生物。历史设施主要处理贻贝壳，不证明目标纯来源配方；不由此认定特定 Mytilus 物种、当前数量、本中间物料销售、法定废物终止、纯度或安全用途。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.coral-and-similar-products-shells-of-molluscs-crustaceans-or-echinoderms-and-cuttle-bone |
| classification_refs | CPC 3.0 04911; 更窄产品/路线边界，不声称覆盖整个叶类 |
| covered_products | 经水洗沥水的未煅烧贻贝壳碎片 |
| excluded_products | 其他全部物料族，以及未清洗、热干燥/煅烧/研磨参考产品、制造碳酸盐及下游应用。 |
| representative_product | 在水洗沥水、煅烧前接口的单一来源已核实贻贝壳碎片批次。 |
| production_route | 有记录贻贝加工残余物；真实运输；接收；淡水清洗及初步沥水；真实废水管理；最终沥水/储存及煅烧前交接。 |
| market_state | 湿态、水洗沥水未煅烧碎片，具有实测残余含水率和真实规格；中间接口，不预设对外商品。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| what | 经水洗沥水的未煅烧贻贝壳碎片; 在煅烧前中间交接点 |
| how_much | 1 kg 水洗沥水碎片净质量，包含实测残余水分，排除游离渗滤液及包装。 |
| how_well | 记录真实贻贝来源/分类、分离、碎片状态、残余水分、等级及验收规格，不预设矿物纯度或废物终止。 |
| how_long_or_cycle | 匹配进料批次、清洗运行、沥水/储存区间、库存及实测最终验收交接批次。 |
| reference_flow_link | `reference_product_flow` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 经水洗沥水的未煅烧贻贝壳碎片 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 真实贻贝分类; 来源加工场及地域; 分离证据; 废物/法律状态及供应方负荷处理; 原料及最终含水率; 碎片形态/等级; 清洗/沥水操作; 批次/时段/库存; 精确煅烧前交接地点/时间; 验收; 包装/游离水排除。 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 全部壳及残余物质量 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留原始湿态批次/时段质量和实测含水率/固含量。Q 是唯一最终接口正值验收净质量，逐项真实物料数量 q/Q 按该基准报告；物理转移不分配、不固定 1 kg。 |
| `moisture_basis` | 接收、清洗及最终沥水 | Mass | kg | 记录各阶段含水率及抽样方法，仅按匹配实测固含量/含水量换算干湿基准；水、组织、盐及壳移除分别平衡。不提供通用干基收率、矿物组成或单调湿质量收率。 |
| `water_units` | 每个水及水性废物流 | Mass | kg | 保留实际使用的原生体积计量；换算为声明质量须有来源特定实测/文件密度及温度/盐度、不确定性。最终核实流若采用另一原生属性，保留并显式核对支持单位；不得把资源 UUID 借给外购水。 |
| `energy_units` | 电力及真实燃料 | Net calorific value / Mass | kWh / kg | 电力 kWh 是能量（1 kWh = 3.6 MJ），柴油 kg 是燃料质量，不是电能。原生 L 至 kg 或质量至能量换算须有匹配密度/热值证据，不由数据库名称默认。 |
| `transport_load` | controlled_collection_and_delivery | Mass-distance | tkm | 使用购入运输服务时按真实湿货载质量及路线距离计算 tkm，包括实际随行水/容器；保留空返及服务覆盖证据。同一包含服务不得重复计自有燃料/燃烧。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_source` | source_qualification_and_receipt | 从可交付的来源已分离贻贝加工壳碎片残余物起算，保留真实上游养殖/加工负荷处理、归属、废物状态及供应方数据集；废物名称本身不是零负荷规则。 | `eu-pef-method-2021` |
| `boundary_route` | 前景路线 | 纳入真实运输覆盖、接收、淡水清洗/沥水、最终储存/沥水、纳入公用工程/资产及真实残余物/水处理。唯一最终 gate 为煅烧前中间交接；窑炉能耗及煅烧后产品均在边界外。 | `barros-mussel-shell-2009` |
| `boundary_interface` | packaging_storage_and_gate_release | 此处产品流术语仅识别物理单元过程中间物料，不证明商品销售、所有权转移、废物分类或法定废物终止。保留真实法律状态，逐交换绑定前核实技术流类型/状态。 |  |
| `boundary_water` | 清洗、处理及储存 | 内部废水/回用转移仅成对计一次。新增外部供水/取水单列，内部总循环不是新增输入且不再扣减一次。管理废水交接为废物流，直接排水须有真实返回水及物质/介质记录。 |  |
| `boundary_exclusions` | 下游及非目标物料 | 排除珊瑚、其他壳/乌贼骨、未分离混料、研磨、热干燥/煅烧、制造碳酸盐、接口后分销及下游用途；不得为保留无关操作而扩大本 PCR。 |  |

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 有记录贻贝加工场产生、按来源分离的未清洗壳碎片废物 |
| starting_condition_role | 真实上游残余物交接，不是天然珊瑚采集或新增海洋资源取用 |
| product_classification_scope | CPC 3.0 04911; narrower; 经水洗沥水的未煅烧贻贝壳碎片 |
| recursive_input_rule | 仅一次引用真实供应方准备及原有负荷，受控送达与接收成对关联，不新增一次外部供应。 |
| upstream_dataset_requirement | 真实贻贝加工残余物及运输、公用工程/材料供应和接收处理；缺少供应方证据阻碍完整性，不等于零。 |
| disclosure | 物种/来源分离、原料/最终含水率、真实操作、接口、时段/库存、物理平衡、运输覆盖、水拓扑、处理、资产、法律状态、分配和不确定性。 |

## 6. 过程清单结构

每卡为一个具体物理或化学交换。每数据包须明确一个真实贻贝来源/分类和碎片规格；不同来源、水等级、废物或物质分别建卡和记录。有条件卡仅适用真实操作，第 8 节强制补充义务不能替代交换绑定。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `source_qualification_and_receipt` | 来源核实与接收 | `required` | 接收有真实来源及废物状态记录、已按来源分离的贻贝加工壳碎片废物。 | unit operation | actual measured native throughput |
| `controlled_collection_and_delivery` | 受控接收前运输 | `conditional` | 从贻贝加工场至接收点的真实前景受控运输；否则关联购入运输服务。 | unit operation | actual measured native throughput |
| `cleaning_drying_and_sorting` | 淡水清洗与初步沥水 | `required` | 清洗目标壳碎片并初步沥水；不包括热干燥、煅烧或研磨。 | unit operation | actual measured native throughput |
| `onsite_wastewater_management` | 场内废水管理 | `conditional` | 仅实际由运营方控制的清洗废水或储存渗滤液处理；场外处理保留有证据接收服务。 | unit operation | actual measured native throughput |
| `packaging_storage_and_gate_release` | 储存、最终沥水及煅烧前交接 | `required` | 交接实测水洗沥水、未煅烧壳碎片中间物料；不包括后续窑炉或制造碳酸盐产品。 | final intermediate handover | 1 kg accepted washed/drained fragments |

### 过程： 来源核实与接收 (`source_qualification_and_receipt`)

#### 输入

##### 产品流

###### 接收操作用电 (`receipt_electricity`)

仅实际接收/输送用电时适用；匹配供应商、地域、电压及计量时段。

- 选定流： 电力
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则： 在所属节点协议下以原生单位独立实测本交换；保留原始批次/时段数量并按每 1 kg 参考流报告。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_source_receipt`

##### 废物流

###### 接收的未清洗贻贝壳碎片废物 (`source_material_received`)

须有真实分离/来源证据证明进料为贻贝壳，不能把历史设施未明混料视为目标纯来源。称量接收净料，声明附着水分/残余物，排除车辆、容器和可分离游离水皮重；保留真实废物状态及供应方负荷记录。

- 选定流： 贻贝加工产生的未清洗壳碎片废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 实测未分配物料质量和阶段含水率，保留原始批次数量，按每 1 kg 参考流报告；不得固定内部转移为 1 kg。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_source_receipt`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 验收的未清洗贻贝壳碎片废物 (`accepted_source_material`)

实测实际验收并转入清洗的湿进料；与清洗输入按批次/质量/状态成对关联。分别记录接收拒料、库存及游离水分离，不预设来源至产品收率。

- 选定流： 贻贝加工产生的未清洗壳碎片废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 实测未分配物料质量和阶段含水率，保留原始批次数量，按每 1 kg 参考流报告；不得固定内部转移为 1 kg。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_source_receipt`

##### 基本流

### 过程： 受控接收前运输 (`controlled_collection_and_delivery`)

#### 输入

##### 产品流

###### 受控运输实际消耗柴油 (`collection_or_delivery_diesel`)

仅真实自有柴油消耗适用，不重复购入运输服务。该质量基准身份不提供默认配方、供应商、密度、热值或排放因子；体积换算须有匹配密度。

- 选定流： 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 在所属节点协议下以原生单位独立实测本交换；保留原始批次/时段数量并按每 1 kg 参考流报告。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_collection_transport`

##### 废物流

###### 装运的未清洗壳碎片废物 (`material_collected_or_delivered`)

仅真实受控运输适用。记录进料、附着水分、容器及另行随车水的实际货载；本壳交换排除容器皮重。

- 选定流： 贻贝加工产生的未清洗壳碎片废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 实测未分配物料质量和阶段含水率，保留原始批次数量，按每 1 kg 参考流报告；不得固定内部转移为 1 kg。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_collection_transport`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 交至接收点的未清洗壳碎片废物 (`delivered_source_material`)

实测送达湿进料并关联接收事件；不得将送达及接收计为两次外部供料。独立记录损失及库存或水分变化。

- 选定流： 贻贝加工产生的未清洗壳碎片废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 实测未分配物料质量和阶段含水率，保留原始批次数量，按每 1 kg 参考流报告；不得固定内部转移为 1 kg。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_collection_transport`

##### 基本流

###### 自有运输燃烧向空气排放的化石源二氧化碳 (`delivery_fossil_co2`)

仅真实前景化石燃料燃烧向空气排放时适用。用真实实测化石燃料活动及独立支持的燃料/发动机/碳来源因子计算化石 CO2，保留量纲单位及不确定性；不得设通用因子或重复已包含运输/燃烧服务。其他物质须独立落实。 有可用监测时仅作独立 QA 对照，不另计第二笔 CO2 清单数量。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 用真实燃烧活动乘以独立有证据的兼容因子计算化石 CO2 质量；保留来源活动及因子单位、计算和不确定性，按每 1 kg 参考流报告。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_collection_transport`

### 过程： 淡水清洗与初步沥水 (`cleaning_drying_and_sorting`)

#### 输入

##### 产品流

###### 清洗壳碎片的外部淡水供水 (`preparation_freshwater`)

仅真实外部淡水产品供水适用，记录水源和水质；直接天然取水另行采集。内部回用水不是新增供水；保留 kg 或仅按匹配温度/盐度的密度证据换算原始体积。

- 选定流： 贻贝壳清洗用外部淡水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 在所属节点协议下以原生单位独立实测本交换；保留原始批次/时段数量并按每 1 kg 参考流报告。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_preparation`

###### 场内处理回送的清洗回用水 (`washing_reclaimed_water`)

仅实际内部处理水转移时适用，每卡为一种有记录组成/盐度的水，与处理输出成对关联。保留总回用量用于单元平衡，在系统供水总量中抵消内部转移，不再从新增进水扣一次。

- 选定流： 贻贝壳废水处理回用水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 在所属节点协议下以原生单位独立实测本交换；保留原始批次/时段数量并按每 1 kg 参考流报告。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_preparation`

###### 清洗和沥水用电 (`preparation_energy_electricity`)

计量实际清洗、输送及沥水设备，明确供电身份，仅按有记录使用证据分配共用公用工程负荷。

- 选定流： 电力
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则： 在所属节点协议下以原生单位独立实测本交换；保留原始批次/时段数量并按每 1 kg 参考流报告。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_preparation`

##### 废物流

###### 进入清洗的未清洗壳碎片废物 (`material_for_preparation`)

真实验收的同批湿进料。保留残余组织、盐分、异物和水分观察，不能混淆所识别壳对象；不虚构组成或干湿换算因子。

- 选定流： 贻贝加工产生的未清洗壳碎片废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 实测未分配物料质量和阶段含水率，保留原始批次数量，按每 1 kg 参考流报告；不得固定内部转移为 1 kg。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_preparation`

##### 基本流

#### 输出

##### 产品流

###### 水洗湿态未煅烧壳碎片 (`washed_wet_shell_fragments`)

实测未经热干燥、送入最终沥水/储存的湿态中间物料。保留实测残余含水率及物料变化，不声称高纯 CaCO3、干壳或灭菌状态。

- 选定流： 水洗湿态未煅烧贻贝壳碎片
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 实测未分配物料质量和阶段含水率，保留原始批次数量，按每 1 kg 参考流报告；不得固定内部转移为 1 kg。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_preparation`

##### 废物流

###### 交付真实处理的清洗废水 (`washing_wastewater`)

仅实际交给场内或场外管理处理时适用。记录本水流真实盐度/组成、数量、接收方及去向。直接环境排水须另列返回水和每种真实物质/介质，不能沿用本废物流绑定。

- 选定流： 贻贝壳清洗废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 在所属节点协议下以原生单位独立实测本交换；保留原始批次/时段数量并按每 1 kg 参考流报告。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_preparation`

##### 基本流

### 过程： 场内废水管理 (`onsite_wastewater_management`)

#### 输入

##### 产品流

###### 场内废水处理用电 (`wastewater_treatment_electricity`)

仅实际处理泵送、分离及相关用电时适用；保留计量时段、使用者及有支持份额，不预设处理工艺列。

- 选定流： 电力
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则： 在所属节点协议下以原生单位独立实测本交换；保留原始批次/时段数量并按每 1 kg 参考流报告。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_onsite_water_treatment`

##### 废物流

###### 场内处理接收的清洗废水 (`washing_wastewater_received`)

仅运营方控制处理时适用，与清洗出口按同一事件及数量成对关联；处理资源及输出归属本节点，不计为第二次外部废水供应。

- 选定流： 贻贝壳清洗废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 在所属节点协议下以原生单位独立实测本交换；保留原始批次/时段数量并按每 1 kg 参考流报告。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_onsite_water_treatment`

###### 场内处理接收的壳碎片储存渗滤液 (`storage_leachate_received`)

仅实际场内接收时适用，与储存出口按真实水质及质量成对关联。不得与清洗废水混并，除非另行识别并计量合并处理水流。

- 选定流： 湿贻贝壳碎片储存渗滤液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 在所属节点协议下以原生单位独立实测本交换；保留原始批次/时段数量并按每 1 kg 参考流报告。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_onsite_water_treatment`

##### 基本流

#### 输出

##### 产品流

###### 回送清洗的回用水 (`reclaimed_water_output`)

仅实际达到有记录回用规格的水适用，与清洗输入成对关联；内部回收不是外部用水抵扣，也不得第二次减少进水。

- 选定流： 贻贝壳废水处理回用水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 在所属节点协议下以原生单位独立实测本交换；保留原始批次/时段数量并按每 1 kg 参考流报告。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_onsite_water_treatment`

##### 废物流

##### 基本流

### 过程： 储存、最终沥水及煅烧前交接 (`packaging_storage_and_gate_release`)

#### 输入

##### 产品流

###### 进入最终沥水的水洗湿壳碎片 (`product_entering_gate_handling`)

实测湿态中间物料，保留批次、残余含水率及储存/结转记录；因沥水、物料损失或库存变化，其质量可不同于最终验收质量。

- 选定流： 水洗湿态未煅烧贻贝壳碎片
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 实测未分配物料质量和阶段含水率，保留原始批次数量，按每 1 kg 参考流报告；不得固定内部转移为 1 kg。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_packaging_and_gate_release`

###### 最终储存和交接用电 (`packaging_and_storage_energy_electricity`)

仅本节点实际储存、通风、沥水、内部操作或交接称量用电适用；不设默认储存时长。

- 选定流： 电力
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则： 在所属节点协议下以原生单位独立实测本交换；保留原始批次/时段数量并按每 1 kg 参考流报告。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_packaging_and_gate_release`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 煅烧前交接的水洗沥水未煅烧壳碎片 (`reference_product_flow`)

在任何窑炉前、最终沥水/储存交接的单一明确物理中间物料。参考质量包括实测残余水分，排除另行游离渗滤液及包装；不表示对外销售、化学纯度或法定废物终止。

- 选定流： 经水洗沥水的未煅烧贻贝壳碎片
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 1 kg
- 数值来源模式： `fixed_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `method_formula`
- 采集协议： `cp_packaging_and_gate_release`
- 来源： `mass-balance-identity`
- 数量范围： 定义的参考归一化
  - 范围角色： `qa_guardrail`
  - 下限： 1
  - 上限： 1
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `method_formula`
  - 来源： `mass-balance-identity`

##### 废物流

###### 交付真实处理的壳碎片储存渗滤液 (`storage_leachate`)

实际交给管理处理的水性沥出液，记录组成、质量及接收方；仅真实场内路线时与场内接收成对关联。直接排放须另列介质特定交换。

- 选定流： 湿贻贝壳碎片储存渗滤液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 在所属节点协议下以原生单位独立实测本交换；保留原始批次/时段数量并按每 1 kg 参考流报告。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_packaging_and_gate_release`

##### 基本流

## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 全部节点及批次 | 先细分独立计量操作及批次、直接归属可识别资源。物理物料/水质量及成对转移不分配；分配只改变共用 LCA 负荷分子。 | `eu-pef-method-2021` |
| `allocation_prior_burden` | source_qualification_and_receipt | 保留供应方废物/副产品状态及上游贻贝养殖/加工负荷规则和证据。不自动假定零负荷、避免处置抵扣或销售收入。 | `eu-pef-method-2021` |
| `allocation_shared` | 共用设备、处理及资产 | 记录使用者、服务时段及因果使用键（有支持时例如实测使用或负荷）。无法支持因果分配时披露替代关系、完整输出集合，经济分配时披露价格/时段及敏感性。不得在每个节点重复总量。 | `eu-pef-method-2021` |
| `allocation_residue` | 损失、拒料及内部回用 | 按有证据去向区分真实有用输出及管理废物，损失负荷保留在产品系统核算。内部壳/水转移在系统清单抵消，不从节点平衡中删除。不表示负营养盐平衡或回收抵扣。 |  |

## 8. 前景数据采集、计算及质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_receipt` | source_qualification_and_receipt | 来源核实与接收 | 归属节点事件及计量台账 | 供应方；真实贻贝分类；分离/来源证据；先前废物状态；接收毛重/皮重/净料；附着/游离水；含水率；验收进料；各拒料/去向；用电；事件号；归属节点；关联批次/时段；原始数量/单位；同一最终 Q；阶段收率；库存；纳入资产/材料/使用者/服务时段及归属键 | 在本节点用经校准秤/仪表、库存及凭证逐项实测真实交换。保留原生原始数量和含水率/密度证据，关联成对转移及唯一共用台账。用同一正值真实最终 Q 汇总可归属交换数量，按每 1 kg 参考流报告；不得重复共用总量或固定中间质量为 1 kg。 | kg; kWh; native measured units | 每批次、操作和计量区间 | 匹配完整批次、结转及资产服务时段 | source_qualification_and_receipt | 每 1 kg 参考流 | 校准；原始仪表/发票；来源及水质证据；接收方记录；成对转移；平衡及不确定性 |
| `cp_collection_transport` | controlled_collection_and_delivery | 受控接收前运输 | 归属节点事件及计量台账 | 装载/送达湿料；真实随行水及容器；路线/距离；方式；供应服务覆盖；燃料身份/用量；用电；发动机/因子证据；实测化石燃料活动及单位；支持因子数值/单位/来源；碳来源/氧化或发动机适用性；因子/活动不确定性；可用监测 QA；空返；损失；事件号；归属节点；关联批次/时段；原始数量/单位；同一最终 Q；阶段收率；库存；纳入资产/材料/使用者/服务时段及归属键 | 在本节点用经校准秤/仪表、库存及凭证逐项实测真实交换。保留原生原始数量和含水率/密度证据，关联成对转移及唯一共用台账。用同一正值真实最终 Q 汇总可归属交换数量，按每 1 kg 参考流报告；不得重复共用总量或固定中间质量为 1 kg。 | kg; kWh; native measured units | 每批次、操作和计量区间 | 匹配完整批次、结转及资产服务时段 | controlled_collection_and_delivery | 每 1 kg 参考流 | 校准；原始仪表/发票；来源及水质证据；接收方记录；成对转移；平衡及不确定性 |
| `cp_preparation` | cleaning_drying_and_sorting | 淡水清洗与初步沥水 | 归属节点事件及计量台账 | 湿进料/输出及含水率；分水源新增供水/取水；原始仪表；密度/温度/盐度；成对回用；用电；真实试剂/其他公用工程；独立固体/废水/出口；事件号；归属节点；关联批次/时段；原始数量/单位；同一最终 Q；阶段收率；库存；纳入资产/材料/使用者/服务时段及归属键 | 在本节点用经校准秤/仪表、库存及凭证逐项实测真实交换。保留原生原始数量和含水率/密度证据，关联成对转移及唯一共用台账。用同一正值真实最终 Q 汇总可归属交换数量，按每 1 kg 参考流报告；不得重复共用总量或固定中间质量为 1 kg。 | kg; kWh; native measured units | 每批次、操作和计量区间 | 匹配完整批次、结转及资产服务时段 | cleaning_drying_and_sorting | 每 1 kg 参考流 | 校准；原始仪表/发票；来源及水质证据；接收方记录；成对转移；平衡及不确定性 |
| `cp_onsite_water_treatment` | onsite_wastewater_management | 场内废水管理 | 归属节点事件及计量台账 | 各进出口数量及组成；成对清洗水/渗滤液/回用事件；真实处理工艺列；用电；各试剂/燃料；污泥/固体及含水率；直接返回水/物质；接收方/介质；事件号；归属节点；关联批次/时段；原始数量/单位；同一最终 Q；阶段收率；库存；纳入资产/材料/使用者/服务时段及归属键 | 在本节点用经校准秤/仪表、库存及凭证逐项实测真实交换。保留原生原始数量和含水率/密度证据，关联成对转移及唯一共用台账。用同一正值真实最终 Q 汇总可归属交换数量，按每 1 kg 参考流报告；不得重复共用总量或固定中间质量为 1 kg。 | kg; kWh; native measured units | 每批次、操作和计量区间 | 匹配完整批次、结转及资产服务时段 | onsite_wastewater_management | 每 1 kg 参考流 | 校准；原始仪表/发票；来源及水质证据；接收方记录；成对转移；平衡及不确定性 |
| `cp_packaging_and_gate_release` | packaging_storage_and_gate_release | 储存、最终沥水及煅烧前交接 | 归属节点事件及计量台账 | 进料水洗湿碎片；最终验收净 Q；阶段含水率/固含量；沥水/渗滤液；拒收壳/损失；期初期末库存；沥水/储存时长；验收；精确窑前接口；真实包装及用电；事件号；归属节点；关联批次/时段；原始数量/单位；同一最终 Q；阶段收率；库存；纳入资产/材料/使用者/服务时段及归属键 | 在本节点用经校准秤/仪表、库存及凭证逐项实测真实交换。保留原生原始数量和含水率/密度证据，关联成对转移及唯一共用台账。用同一正值真实最终 Q 汇总可归属交换数量，按每 1 kg 参考流报告；不得重复共用总量或固定中间质量为 1 kg。 | kg; kWh; native measured units | 每批次、操作和计量区间 | 匹配完整批次、结转及资产服务时段 | packaging_storage_and_gate_release | 每 1 kg 参考流 | 校准；原始仪表/发票；来源及水质证据；接收方记录；成对转移；平衡及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `final_gate_normalization` | 每个具体交换 | 每个真实原始交换数量 q_i 保持自身单位，除以匹配正值最终验收湿质量 Q（kg），按每 1 kg 参考流报告。保留 q_i、Q 及批次/时段关联。物理壳/水数量不分配，只有有支持的共用 LCA 负荷分子在相除前采用分配份额。Q 为零/未知时保留原始及库存记录，不虚构归一化数据包。 | raw q_i; actual final Q; lot/period; attribution records | 每千克真实最终中间物料的各交换 | `mass-balance-identity` |
| `stage_yields` | 真实接收、清洗和沥水阶段 | 保留各阶段实测 S_in、S_out 及含水率和库存；S_in 正值时湿态阶段收率为 S_out/S_in。它不自动等于最终收率 Q/S_in 或干壳收率。来源记录若为强度 x_i=q_i/S_stage，须保留其实测阶段分母，显式还原 q_i=x_i*S_stage，再报告 q_i/Q；不得以 1 kg 或虚构机器质量替代 S_stage。 | measured stage masses; moisture/solids; raw intensity if used; final Q | 真实阶段收率及最终基准交换 | `mass-balance-identity` |
| `physical_balances` | 壳、水及库存台账 | 逐阶段核对期初库存、真实到料和水/物料添加，与输出、拒料、残余物、沥出液、实际已确定蒸发及期末库存对应。实测时分别追踪壳固体、附着水、组织/盐分；披露未解释残差及不确定性。不假定固定质量损失、不强令残差为零、不用分配份额闭合物理平衡。 | stage ledgers; paired transfers; raw meters; stocks | 未分配物理平衡及披露残差 | `mass-balance-identity` |
| `emission_calculation` | 真实直接释放 | 采用实测物质排放质量或引用有支持、匹配真实活动、燃料/发动机、碳来源及受纳介质的模型。排水浓度须有匹配水流及物种形态；浓度、气味或净营养盐平衡本身不是质量交换或抵扣。 | actual activity; supported factor/model; native units; medium | 每个真实物质/介质交换 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_unique_reference_object` | 每个阶段及最终参考 | 须有真实来源分离及贻贝分类/来源核实、单一碎片规格、实测阶段含水率及精确唯一煅烧前 gate。其他壳族、原始混料、粉末及窑后状态不能继承参考身份或 UUID。历史主要贻贝设施不是目标纯来源进料证据。 | 来源、分离、批次及 gate 规格 |
| `dq_shared_ledger` | 全部协议 | 使用唯一物理事件/水/资产台账，保留唯一编号、归属节点、成对转移、原生原始数量和共用最终 Q，保留库存及延迟交接。共用总量仅记录一次、只归属可支持份额；内部回用既非新供水，也不得再次扣减。 | 事件/资产归属、成对凭证及仪表 |
| `dq_ranges_uncertainty` | 每个重要原子交换 | 逐交换独立采集观测运行范围或有依据不确定性、单位、分母及来源适用性。本 PCR 不提供经验界限。Barros 历史 0.2–0.8 m3/t 清洗水观察以某设施壳进料为分母，不是各子流水量或最终 Q 上限；使用前须核实匹配进料/水边界、真实密度及实测进料/Q 比，并保留离群值。 | 逐流记录、不确定性及证据适用性 |
| `dq_completion` | 全部适用采集义务 | 以下每项适用义务均须落实为独立真实物理/化学交换，明确节点、方向/类型、自身数量/原生单位、组成/形态/含水率、来源、归一化、范围/不确定性及真实去向/介质，最终数据包完成前核实兼容 UUID。不得把集合总量/范围/UUID 复制给全部子流。未知不等于零；不存在须有证据 not_applicable。任何未落实适用义务或参考身份均不能通过最终数据包验证。 | 逐义务覆盖及原始数量/身份记录 |
| `collect_receipt_rejects` | `source_qualification_and_receipt` | 每种真实接收拒料、异物或分离液体；保留独立质量、组成、接收方及产品/废物去向。 使用所属节点协议 `cp_source_receipt`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_receipt_energy` | `source_qualification_and_receipt` | 未由电力卡表示的每种真实燃料、购热或其他接收公用工程，不得使用通用能源混合物。 使用所属节点协议 `cp_source_receipt`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_collection_energy` | `controlled_collection_and_delivery` | 柴油卡以外每种真实载能体，以及有方式/覆盖记录的购入运输服务；保留湿货载、容器、距离和有证据空返负荷，不重复服务/燃料。 使用所属节点协议 `cp_collection_transport`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_collection_losses` | `controlled_collection_and_delivery` | 每种实际运输损失或泄漏的组成、去向/介质及实测质量；库存或水分变化不自动等同壳损失。 使用所属节点协议 `cp_collection_transport`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_collection_direct_releases` | `controlled_collection_and_delivery` | 化石 CO2 卡以外每种真实燃烧物质或环境释放，须有发动机/燃料、监测质量或支持因子、原生单位和受纳介质。 使用所属节点协议 `cp_collection_transport`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_cleaning_agents` | `cleaning_drying_and_sorting` | 每种实际投加化学品或清洗/消毒产品的组成/浓度、有效成分/产品基准、实测库存变化和去向；不假定试剂或剂量。 使用所属节点协议 `cp_preparation`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_preparation_energy` | `cleaning_drying_and_sorting` | 每种尚未纳入的实际清洗/沥水燃料、热量或公用工程，须有计量/库存记录及载能体特定属性/单位；热干燥和煅烧在本边界外。 使用所属节点协议 `cp_preparation`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_preparation_water` | `cleaning_drying_and_sorting` | 每个实际直接取用淡水源的天然介质及自身数量，以及具体供水卡以外不同外部水等级。区分新增供水、内部回用及出口；保留原始计量和真实密度换算。 使用所属节点协议 `cp_preparation`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_preparation_solid_residues` | `cleaning_drying_and_sorting` | 每种实际分离残余组织、泥、异物或拒收壳，分别明确物料及含水状态、数量和有证据回收/处置去向。 使用所属节点协议 `cp_preparation`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_cleaning_wastewater` | `cleaning_drying_and_sorting` | 明确废水卡以外每个不同清洗水出口、水质或接收路线，适用时含单独直接返回水及物质释放；不得向每个出口复制水总量。 使用所属节点协议 `cp_preparation`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_preparation_direct_releases` | `cleaning_drying_and_sorting` | 每种实际跨环境边界的粉尘、挥发性物质、水蒸气或其他直接释放，明确物质/形态、质量和介质；不得以通用排放或气味总量替代。 使用所属节点协议 `cp_preparation`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_treatment_inputs` | `onsite_wastewater_management` | 每种真实废水处理试剂、燃料、水、热量或其他输入须有自身组成/形态、实测数量、原生单位及支持归属；不预设絮凝剂、设备或剂量。 使用所属节点协议 `cp_onsite_water_treatment`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_treatment_wastes` | `onsite_wastewater_management` | 每种真实筛渣、分离污泥或其他产生废物须有自身固含量/含水率、实测数量和真实处理/接收方；通用污泥身份不能代表所有残余物。 使用所属节点协议 `cp_onsite_water_treatment`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_treatment_releases` | `onsite_wastewater_management` | 每个真实返回水出口及物质特定环境释放须有受纳方/介质和数量；成对回用仍为内部转移，净营养盐平衡不是负排放或抵扣。 使用所属节点协议 `cp_onsite_water_treatment`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_packaging_materials` | `packaging_storage_and_gate_release` | 本中间接口实际使用的每个容器、衬垫、袋、标签或包装组件须有物料、实测数量、重复使用/更换及去向；散装内部交接不意味着使用包装。 使用所属节点协议 `cp_packaging_and_gate_release`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_packaging_and_storage_energy` | `packaging_storage_and_gate_release` | 尚未纳入的每种实际储存/交接燃料、热量或公用工程，须有时长、使用者、独立实测数量及支持分摊键。 使用所属节点协议 `cp_packaging_and_gate_release`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_packaging_and_gate_handling_waste` | `packaging_storage_and_gate_release` | 每种实际拒收壳、包装损失或操作废物按具体物料/形态、实测数量和接收去向独立记录，与渗滤液卡区分。 使用所属节点协议 `cp_packaging_and_gate_release`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_gate_water_and_releases` | `packaging_storage_and_gate_release` | 储存/交接每个实际冷却或冲洗水输入、额外水性出口/直接释放须有水源、水质、质量、接收方/介质及必要密度证据；不得再次扣除回用水。 使用所属节点协议 `cp_packaging_and_gate_release`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_assets_source_qualification_and_receipt` | `source_qualification_and_receipt` | 本节点拥有的每种实际纳入资产更换、清洗材料及服务终止交换须有组件物料、原始数量、使用者、服务时段、实际使用键和去向。共用唯一资产台账，不得各节点重复完整总量。 使用所属节点协议 `cp_source_receipt`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_assets_controlled_collection_and_delivery` | `controlled_collection_and_delivery` | 本节点拥有的每种实际纳入资产更换、清洗材料及服务终止交换须有组件物料、原始数量、使用者、服务时段、实际使用键和去向。共用唯一资产台账，不得各节点重复完整总量。 使用所属节点协议 `cp_collection_transport`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_assets_cleaning_drying_and_sorting` | `cleaning_drying_and_sorting` | 本节点拥有的每种实际纳入资产更换、清洗材料及服务终止交换须有组件物料、原始数量、使用者、服务时段、实际使用键和去向。共用唯一资产台账，不得各节点重复完整总量。 使用所属节点协议 `cp_preparation`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_assets_onsite_wastewater_management` | `onsite_wastewater_management` | 本节点拥有的每种实际纳入资产更换、清洗材料及服务终止交换须有组件物料、原始数量、使用者、服务时段、实际使用键和去向。共用唯一资产台账，不得各节点重复完整总量。 使用所属节点协议 `cp_onsite_water_treatment`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |
| `collect_assets_packaging_storage_and_gate_release` | `packaging_storage_and_gate_release` | 本节点拥有的每种实际纳入资产更换、清洗材料及服务终止交换须有组件物料、原始数量、使用者、服务时段、实际使用键和去向。共用唯一资产台账，不得各节点重复完整总量。 使用所属节点协议 `cp_packaging_and_gate_release`；保留原生原始数量、真实阶段收率及共用正值最终 Q。逐真实交换独立落实方向/类型、身份、数量/单位、范围/不确定性及接收方/介质，不绑定集合数量或 UUID。 | 原始仪表/库存/组成/去向记录及兼容身份 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 参考及全部壳阶段 | 须有来源已核实贻贝壳碎片、淡水清洗/沥水、实测残余含水率及精确煅烧前中间验收；排除其他物料、未分离混料、热干燥/煅烧、研磨及制造碳酸盐。本参考不推导商品销售/废物终止。 | `barros-mussel-shell-2009` |
| `validate_reference` | packaging_storage_and_gate_release | 仅一个最终产品参考在声明中间接口为 1 kg；参考数量、质量属性/单位、净称重、残余含水率、最终正值 Q 及全部限定须一致。内部输入/输出保留真实实测 q/Q，不固定参考质量。 | `mass-balance-identity` |
| `validate_measurement` | 全部交换 | 全部数量追溯至原始校准记录、单节点 CP、原生单位、真实密度/热值换算及共用 Q。核对真实阶段/最终收率和湿态/固体平衡，披露不确定性及未解释残差；不得强加上限或虚构因子。 |  |
| `validate_water_and_fate` | 水、处理及废物 | 核对新增水、成对回用、储存沥水、真实处理及每个环境出口，不重复扣减进水。每个废物须有真实组成/含水率及接收方/处理；每个环境释放须有自身物质和介质。不得用污泥身份替代壳/组织废物，或用水中 CO2 身份替代空气排放。 |  |
| `validate_allocation_period` | 负荷、库存及资产 | 核实上游原有负荷、全部预期输出、细分/分摊证据及敏感性。物理质量不分配，内部移动成对，事件/资产总量仅一次；匹配时段、结转、更换及服务终止交换。 | `eu-pef-method-2021` |
| `validate_atomic_completion` | 每个真实卡及补充义务 | 逐项回读每个适用 collect_ 要求是否落实为独立真实交换，核实自身数量/单位、归一化、范围/不确定性、来源、去向/介质及语义兼容 UUID/属性/流类型/状态。任何未知适用数量、身份、去向或缺失义务使最终数据包不完整并验证失败；PCR 静态检查通过不能替代该评估。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 水洗沥水未煅烧贻贝壳碎片中间物料的前景数据包；process/lifecyclemodel 为下游投影。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 真实来源、物种、碎片、含水率、操作、场址及煅烧前接口相匹配，并有核实交换和完整原有负荷/废物覆盖的数据包。 |
| excluded_use | 其他物料或混料；干态/粉末/煅烧/制造产品；法定产品/废物终止认证；对外销售断言；后续窑炉/研磨/使用。 |
| required_metadata | 真实来源/分类/分离、进料及最终物理/法律状态、全部含水率/等级及批次/时段/库存、精确中间 gate、过程责任、运输覆盖、水拓扑、能源、资产、分配、原始记录及 UUID。 |
| required_quality_disclosure | 测量/范围不确定性、物理残差、未知身份/数量、历史来源适用性、分配敏感性、来源分离及法律状态限制。 |
| update_trigger | 目标物料/状态/接口、来源分离、清洗/沥水/水或处理路线、能源、库存时段、资产、分配或相关新证据改变。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `unsd-cpc3-hs-scope` | official_guidance | UNSD CPC Version 3.0 explanatory notes (30 June 2025), subclass 04911. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类背景；本 PCR 更窄，不作为整个叶类产品身份或数量范围来源。 |
| `barros-mussel-shell-2009` | literature | Barros, M.C., Bello, P.M., Bao, M. and Torrado, J.J. (2009). From waste to commodity: transforming shells into high purity calcium carbonate. Journal of Cleaner Production 17, 400–407. DOI:10.1016/j.jclepro.2008.08.013. Section 2.1, pp. 401–402. https://doi.org/10.1016/j.jclepro.2008.08.013 | 原始历史证据支持壳接收、淡水清洗/沥水及煅烧前储存，仅这些接口支持选定路线；后续制造碳酸盐属性、整厂总量及法律陈述不是本中间物料默认值。 |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30 | 既有定性方法依据，涉及初级数据、分配、边界及披露；不证明产品特定数量或完整 PEF 符合性。 |
| `mass-balance-identity` | method_factor | 本 PCR 第 3–9 节：实测原始/原生数量、阶段平衡/收率及真实最终 Q 归一化。 | 自定义守恒及归一化恒等式；无经验收率、机器质量、密度、排放因子或实测范围。 |
