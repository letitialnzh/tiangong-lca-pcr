---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.waterborne-pu-direct-coated-woven-polyester-fabric
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 水性 PU 直接涂覆机织聚酯布

## 1. 范围与适用性

本制造画像覆盖以机织连续长丝 PET 布为基材、直接施加一道无颜料、非发泡的水性脂肪族聚酯型 PU 涂层，经电干燥及冷却得到的干燥卷装布。采用外购已配制分散体，可按实际需要用工艺水稀释；来料布已完成此前湿加工并可直接涂覆。代表产品为供后续制包使用、牌号明确的涂层卷装布；这是生产参考，不是防水性、安全性或寿命保证。

CPC3.0 官方解释仅列出27997标题，没有详细工艺说明。分类语境本身不能证明适用性。溶剂型 PU、湿法凝固/DMF、反应性双组分涂层、另加交联剂、颜料或发泡配方、PVC 塑溶胶、橡胶、热熔或膜复合、涂覆毡及非织造布、合成革、轮胎帘子布、医疗用品、服装和制成帐篷均不在本画像范围内。纤维制造、PET 聚合、织造、上游染整、消费与报废属于独立阶段。实质不同路线须经审查扩展，不能宣称27997全部覆盖。来源：`unsd-cpc3-notes-2025`；`jrc-textiles-bref-2023`；`covestro-dln-w50`。

PALTEX 的 2020 年制造商文章独立描述了水性 PU 涂层机织聚酯布。该资料仅支持历史市场示例，不能证明本画像的单层配方、电干燥机、当前供应商配方或定量性能；这些条件须由实际前景记录确认。来源：`paltex-pu-woven-2020`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.waterborne-pu-direct-coated-woven-polyester-fabric |
| classification_refs | CPC3.0:27997; narrower |
| covered_products | 牌号明确的单层水性 PU 直接涂覆机织连续长丝 PET 卷装布 |
| excluded_products | 其他纤维、非织造布/毡、PVC、橡胶、溶剂/湿法凝固、膜复合、发泡/颜料/交联路线及制成品 |
| representative_product | 水性 PU 直接涂覆机织聚酯布 |
| production_route | 接收可涂覆机织 PET 布及已配制 PUD；直接刮刀涂布；电干燥；冷却；检验；切边；卷绕；包装；冲洗设备并交接废水 |
| market_state | 厂门处合格干燥复合卷装布；不包含下游裁剪及缝制 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应用于指定下游加工的涂层机织 PET 卷装布 |
| How much | 1 千克合格成品复合布净质量 |
| How well | 声明 PET 组织与整理状态、PU 配方与干涂层增重、幅宽、面密度、厚度、水分及批次验收准则；测量实际牌号性能 |
| How long or cycle | 一个制造报告时段；不假定使用寿命或功能等效性 |
| reference_flow_link | `finished_coated_fabric` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 水性 PU 直接涂覆机织聚酯布 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | PET 连续长丝组成及再生比例；机织组织；供应商精练/染色/热定形状态；PUD 牌号及湿/干组成；助剂与残余挥发物；涂覆面及层数；干涂层增重；幅宽、面密度及厚度；水分/调湿；电干燥配置；质量验收；地域/电压；包装；废水接收方；报告时段 |

必需限定信息须在数据集元数据或等效记录中声明。参考净质量包含声明水分状态下的 PET 基布和附着干涂层，排除包装及不合格品，不等于涂层单独质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按 cp_output 用经校准秤称量合格成品复合卷，扣除实测卷芯/包膜皮重，成品及清单分母采用同一调湿状态。 |
| area_mass | ready_woven_pet; finished_coated_fabric | 质量 | kg | 若原始记录采用平方米或延米，实测同牌号面密度及幅宽；按面积乘以千克/平方米换算。保留经核验公开流原有面积属性，不改写为质量；通用防水织物不能证明本产品身份。 |
| wet_dry | aqueous_pu_dispersion; dilution_water; drying_water_vapour; pu_rinse_wastewater | 质量 | kg | 区分湿分散体质量、干非挥发涂层质量、残留水、释放蒸气及废水。实测固含量/水分；目录固含量不是通用换算系数。 |
| energy_preserve | mix_electricity; dry_electricity; finish_electricity; clean_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 采用实测千瓦时乘以3.6MJ/kWh；保留公开属性及能量单位组 93a60a57-a3c8-11da-a746-0800200c9a66。各电表覆盖不重叠。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 干燥可涂覆机织 PET 布，已完成此前染整；已交付的已配制水性 PUD；外供工艺水 |
| starting_condition_role | 上游供应商向涂层制造前景的交接 |
| product_classification_scope | CPC3.0:27997 中的狭义候选子集；分类标题不能覆盖全部路线 |
| recursive_input_rule | 若购买已涂 PU 的布，记录其实际产品状态及关联的上游涂层数据集；不得当作未涂 PET 布或递归重建此前涂层。再次涂覆不属于本单道涂层画像。 |
| upstream_dataset_requirement | 分别关联匹配的基布、PUD、电力、水及各包装组件数据集；披露纤维/聚合物、织造、染整、化学品供应缺口及实际来料运输覆盖 |
| disclosure | 工厂/时段；来料基布加工态；组成；仅电干燥；冲洗废水处理交接；公用工程及上游/运输关联；缺失阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_foreground | all processes | 纳入接收/搅拌、刮刀施涂、电干燥/冷却、切边/检验/卷绕、实际包装、批次清洗、归属的开机/返工以及实测外送废物/排放。内部湿涂布转移不是额外市场产出。 | jrc-textiles-bref-2023 |
| boundary_wet | equipment_clean | 止于向有记录外部处理接收方交接未处理废水。处理过程及其基本流排放须关联处理数据集。此处不代表直接排放或厂内处理；即使某批未发生冲洗，清洗归属数据覆盖仍须纳入。 |  |
| boundary_routes | product applicability | 将此前基布湿整理、农业原料及纤维/聚合物制造与涂层制造分开。其他配方化学品、热载体、维护投入或废水处理路线须增加独立原子行并审查范围扩展，之后才可宣称场址完整覆盖。 | covestro-dln-w50 |
| boundary_claim | dataset | 这是制造前景，不自动构成完整从摇篮到厂门。扩展足迹须具备全部已披露、匹配的上游及运输关联。排除分销、制包缝制、使用、消费者清洗及报废。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| receipt_mix | 基布接收与分散体准备 | required | 本画像全部产品 | 制造前景 | 每 1 kg 参考流 |
| coat_dry | 直接刮刀涂布、电干燥与冷却 | required | 本画像全部产品 | 制造前景 | 每 1 kg 参考流 |
| finish_pack | 最终检验、切边、卷绕与包装 | required | 本画像全部产品 | 制造前景 | 每 1 kg 参考流 |
| equipment_clean | 批次归属设备冲洗与废水交接 | required | 本画像全部产品 | 制造前景 | 每 1 kg 参考流 |

条件交换在各行卡中说明；缺失须有实际路线记录，不得假定为零。供应商配方作为一个交付产品交换；另行购入的助剂须单列。内部涂布/湿布转移及回收退料须对账，不重复计为边界交换。仅合格最终布料为定量参考。普通质量行采用质量单位组 93a60a57-a4c8-11da-a746-0800200c9a66。

### 过程：基布接收与分散体准备（`receipt_mix`）

#### 输入

##### 产品流

###### 可涂覆机织聚酯长丝布（`ready_woven_pet`）

接收干燥全幅机织连续长丝 PET 布，声明已完成的精练、染色及热定形状态。核对组织、整理剂相容性、再生成分和实际残余水分；网布与原始纤维均不能代表该来料身份。

- 选定流：可涂覆机织聚酯长丝布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量发出的基布并扣除未使用退料；除以 cp_output 记录的合格涂层布净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_materials`
- 来源：

###### 水性脂肪族聚酯型聚氨酯涂层分散体（`aqueous_pu_dispersion`）

一个按湿质量交付的外购、已配制无颜料涂层分散体，包含已声明的供应商助剂。记录牌号、水分、非挥发分和全部披露组分；不得以纯 PU 树脂、胶黏剂或溶剂涂料替代。本画像不覆盖厂内另加交联剂或独立增稠剂。

- 选定流：水性脂肪族聚酯型聚氨酯涂层分散体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量发出的湿分散体，扣除退回的未使用分散体；按 cp_output 的合格涂层布净质量归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_materials`
- 来源：`covestro-dln-w50`

###### 工艺用水（`dilution_water`）

仅记录实际用于稀释的额外外供工艺水；外购分散体自带的水已属于该产品投入，不再重复录入。这是技术圈水，不是基本流淡水开采。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以千克计量额外供应的稀释水；若按体积采集，采用实测场址密度及温度换算；除以 cp_output 的合格净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_dilution_water`
- 来源：

###### 交流电（`mix_electricity`）

仅用于实际中国电网平均、到用户且低于 1 千伏的供电。纳入归属于开卷、检验、搅拌和泵送的电力。保留净热值属性与能量单位组；其他地域、电压或供电路线须另行核验身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量千瓦时，按 3.6 MJ/kWh 换算为兆焦，再除以 cp_output 的合格净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mix_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废弃水性聚酯型聚氨酯涂层分散体（`pu_dispersion_residue`）

条件流：外运的未使用或不合格湿涂层分散体。可在厂内回用的退浆是库存转移，不是外运废物；记录组分、水分、容器皮重及接收方。

- 选定流：废弃水性聚酯型聚氨酯涂层分散体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分别称量每批外运湿残浆，再除以 cp_output 的合格净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_dispersion_residue`
- 来源：

##### 基本流

### 过程：直接刮刀涂布、电干燥与冷却（`coat_dry`）

#### 输入

##### 产品流

###### 交流电（`dry_electricity`）

仅用于实际中国电网平均、到用户且低于 1 千伏的供电。计量刮刀涂布驱动、电加热干燥机、风机及空气冷却系统。本画像采用电干燥；燃料直燃或蒸汽加热线须经单独审查扩展能源与排放清单。单位组为能量单位组。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量本工段千瓦时，包含归属的待机及返工；按 3.6 MJ/kWh 换算；除以 cp_output 的合格净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_dry_energy`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 水蒸气（`drying_water_vapour`）

湿涂层脱除并即时释放至室外空气的水，空气子介质未指定。排除回收冷凝水、成品残余水分及仅进入工作场所的转移。有证据时应采用更具体的环境子介质；不得替换为水资源或水体排放流。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_air 用实测涂层水分平衡或排气测量确定实际释放水质量；除以 cp_output 的合格净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_air`
- 来源：`jrc-textiles-bref-2023`

###### 氨（`drying_ammonia_air`）

条件流：NH3（CAS7664-41-7）即时室外空气排放，空气子介质未指定。仅在供应商配方及代表性检测证实氨释放时适用。水性涂层本身不能证明存在此排放；铵、总氮及室内暴露属于其他身份。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 cp_air 采用物种特定浓度、匹配的排气流量及运行时段计量排出 NH3 的质量；除以 cp_output 的合格净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_air`
- 来源：`jrc-textiles-bref-2023`

### 过程：最终检验、切边、卷绕与包装（`finish_pack`）

#### 输入

##### 产品流

###### 交流电（`finish_electricity`）

仅用于实际中国电网平均、到用户且低于 1 千伏的供电；用于最终检验、切边及卷绕。保留净热值与能量单位组。排除已经由涂层线电表计入的电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量本工段千瓦时，按 3.6 MJ/kWh 换算，再除以 cp_output 的合格净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_finish_energy`
- 来源：

###### 圆纸筒（`paper_core`）

条件流：随成品卷交付的纸质卷芯；声明实际纸种、尺寸、再生成分及复用状态。包装不计入布料参考净质量。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量实际发至交付合格卷的卷芯；除以 cp_output 的合格布料净质量；追踪退回及复用。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_pack`
- 来源：

###### 聚乙烯薄膜（`pe_wrap`）

条件流：单一材料、未复合的 PE 包裹膜，不是阻隔复合膜或成品布的聚合物涂层。记录牌号及供应商再生比例。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量发出的 PE 膜并扣除未用退料；除以 cp_output 的合格布料净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_pack`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 水性 PU 直接涂覆机织聚酯布（`finished_coated_fabric`）

完成最终检验的合格干燥复合卷装布，包含基布及附着涂层，采用声明的调湿与水分状态；排除卷芯及包裹膜。该准确产品名即为参考产品名。归一化前用 cp_output 测量合格批次质量。

- 选定流：水性 PU 直接涂覆机织聚酯布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_output`
- 来源：

##### 废物流

###### 废弃 PU 涂层机织 PET 布（`coated_pet_pu_scrap`）

分开收集的复合布边料及同一声明 PET/PU 组分的废弃布料；保留各来源质量。返工布和可出售的降级共产品不是外运废物。

- 选定流：废弃 PU 涂层机织 PET 布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量外运复合布废料，排除包装及内部回收返工料；除以 cp_output 的合格净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fabric_scrap`
- 来源：

###### 洁净聚乙烯包裹膜边料（`pe_wrap_offcuts`）

条件流：包装工段产生并废弃的洁净 PE 边料，与涂层纺织废料及已用化学品容器分开。记录实际去向，不预设回收抵扣。

- 选定流：洁净聚乙烯包裹膜边料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：单独称量外运 PE 膜边料；除以 cp_output 的合格净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_pack`
- 来源：

##### 基本流

### 过程：批次归属设备冲洗与废水交接（`equipment_clean`）

#### 输入

##### 产品流

###### 工艺用水（`cleaning_water`）

用于批次关联设备冲洗的外供工艺水，不是洗布用水。分散体中的水不在本行计入。自行取水及厂内水处理须另行审查资源与处理交换。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量清洗水质量，或使用实测体积及场址密度换算；归属时段总量除以匹配的 cp_output 合格净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_clean_water`
- 来源：

###### 交流电（`clean_electricity`）

仅用于实际中国电网平均、到用户且低于 1 千伏的供电；用于设备冲洗泵及归属于批次的清洗设备。与生产线计量分开；保留净热值及能量单位组。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量清洗千瓦时，按 3.6 MJ/kWh 换算，除以匹配的 cp_output 合格净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_clean_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 水性 PU 涂层设备冲洗废水（`pu_rinse_wastewater`）

交至有记录处理接收方的未处理水性冲洗废水，包含实测固含量的分散 PU；不是排入淡水的基本流。本画像止于废水交接，不能代表厂内处理或直接排放。

- 选定流：水性 PU 涂层设备冲洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：独立于供水量计量外送废水湿质量；保留体积换算的密度记录及固体分析；除以 cp_output 的合格净质量。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_effluent`
- 来源：`jrc-textiles-bref-2023`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_trace | shared line | 通过批次分离及分表计量避免分配。公用工程总量无法分离时，采用实测负荷及运行时长，并按实际清洗生产活动归属；保留因果关系并做敏感性分析。不同涂层增重及干燥负荷的牌号不得假设每千克强度相同。 |  |
| allocation_coproduct | downgraded cloth; exported scrap | 依据实际质量、接收方及市场记录区分废物与可售共产品。优先细分；若仍有联合负荷，论证实测物理因果驱动，否则记录时段特定经济份额及敏感性。不预设价格或被替代布料抵扣。 |  |
| allocation_rework | internal return and rework | 保留全部返工/搅拌/干燥公用工程及损失，通过库存平衡追踪内部退料，合格布仅计一次。单独记录外送废物处理；不得假设回收分散体无负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | finish_pack | 合格涂层布 | 实测记录 | 批号；合格复合卷毛重；卷芯及包膜皮重；布净千克数；幅宽；长度；调湿；水分；验收 | 用经校准秤称量合格卷，扣除实际包装皮重，核对牌号/批次验收；若按面积采集产量，测量同状态面密度 | kg | 每批 | 完整声明报告时段 | 所代表涂层厂及相应交接边界 | 每 1 kg 参考流 | 校准；皮重；批次验收；水分方法 |
| cp_materials | receipt_mix | 分别采集基布及湿 PUD | 实测记录 | 批号；PET 组织及整理态；基布发出/退回千克数；PUD 牌号；各供货组分；PUD 湿发出/退回千克数；非挥发分；水分；库存 | 分别称量各交付产品；核对库存及退料；取得供应商配方/安全数据表并实测固含量与水分，不假定目录值 | kg | 每批 | 完整声明报告时段 | 所代表涂层厂及相应交接边界 | 每 1 kg 参考流 | 秤校准；供应商规格；固含量检测；库存台账 |
| cp_dilution_water | receipt_mix | 分别采集稀释水及冲洗水 | 实测记录 | 批号；各水表；供水状态；千克数或体积；密度；温度；稀释量；设备冲洗事件；报告覆盖 | 分别计量各外供水投入；称量或用实际密度换算实测体积；把生产活动清洗归至所代表批次，避免重复计分散体带水 | kg | 每批及每次清洗 | 完整声明报告时段 | 所代表涂层厂及相应交接边界 | 每 1 kg 参考流 | 水表；密度测量；供水及清洗日志 |
| cp_clean_water | equipment_clean | 分别采集稀释水及冲洗水 | 实测记录 | 批号；各水表；供水状态；千克数或体积；密度；温度；稀释量；设备冲洗事件；报告覆盖 | 分别计量各外供水投入；称量或用实际密度换算实测体积；把生产活动清洗归至所代表批次，避免重复计分散体带水 | kg | 每批及每次清洗 | 完整声明报告时段 | 所代表涂层厂及相应交接边界 | 每 1 kg 参考流 | 水表；密度测量；供水及清洗日志 |
| cp_dispersion_residue | receipt_mix | 分别采集湿 PUD 残浆及 PET/PU 废布 | 实测记录 | 批号；来源；独立湿残浆千克数；干固体；涂层布边料千克数；废品千克数；内部退料；返工；库存；接收方；去向；废物/共产品判定；时段销售收入及分配份额 | 扣除容器皮重，分别称量各物理流；保留边料/废品来源及内部回收；用转移凭据核对外运批次 | kg | 每次清运及时段库存核对 | 完整声明报告时段 | 所代表涂层厂及相应交接边界 | 每 1 kg 参考流 | 废物称量；转移凭据；返工/质量台账 |
| cp_fabric_scrap | finish_pack | 分别采集湿 PUD 残浆及 PET/PU 废布 | 实测记录 | 批号；来源；独立湿残浆千克数；干固体；涂层布边料千克数；废品千克数；内部退料；返工；库存；接收方；去向；废物/共产品判定；时段销售收入及分配份额 | 扣除容器皮重，分别称量各物理流；保留边料/废品来源及内部回收；用转移凭据核对外运批次 | kg | 每次清运及时段库存核对 | 完整声明报告时段 | 所代表涂层厂及相应交接边界 | 每 1 kg 参考流 | 废物称量；转移凭据；返工/质量台账 |
| cp_pack | finish_pack | 分别采集纸卷芯、PE 包膜及 PE 边料 | 实测记录 | 批号；卷芯质量；PE 牌号；发出膜千克数；退膜；外运洁净边料千克数；交付包装；复用次数 | 分别称量各包装组件与废物；核对交付组件、边料及退料；分母排除包装 | kg | 每包装批次 | 完整声明报告时段 | 所代表涂层厂及相应交接边界 | 每 1 kg 参考流 | 包装规格；皮重；库存及废物记录 |
| cp_effluent | equipment_clean | 未处理冲洗废水 | 实测记录 | 批号；冲洗事件；外送湿千克数或立方米；密度；固含量；PU 含量；接收方；处理合同；库存；路线 | 独立计量或称量外送未处理冲洗水；采样实际固含量/组成；核对储存及接收方交接，不以购水量推断排放 | kg | 每次事件及时段交接 | 完整声明报告时段 | 所代表涂层厂及相应交接边界 | 每 1 kg 参考流 | 废水分析；计量仪；交接及处理证据 |
| cp_air | coat_dry | 分别采集水蒸气及条件 NH3 | 实测记录 | 批号；PUD 水分/固含量；基布/成品水分；回收冷凝水；释放水；NH3 浓度；相同条件排气流量；运行时段；控制；检出限；子介质 | 以实测水分平衡或排气质量测量确定释放水；NH3 采用物种特定检测及匹配流量/时长并扣除捕集量；筛查全部实际供应商挥发物，不把未测物种标为零 | kg | 代表性检测及时段核对 | 完整声明报告时段 | 所代表涂层厂及相应交接边界 | 每 1 kg 参考流 | 物种检测；不确定性；水分平衡；检出限；控制及介质证据 |
| cp_mix_energy | receipt_mix | 搅拌电力 | 实测记录 | 批号；工段电表；起止千瓦时；负荷；运行时长；待机/返工；场址；电压；供电；分配覆盖 | 读取经校准且不重叠的工段分表；用实测负荷及运行日志核对共享电表，包含归属待机/返工 | kWh | 每计量班次及批次归属 | 完整声明报告时段 | 所代表涂层厂及相应交接边界 | 每 1 kg 参考流 | 电表校准；电压/地域证据；运行及分配记录 |
| cp_dry_energy | coat_dry | 电干燥电力 | 实测记录 | 批号；工段电表；起止千瓦时；负荷；运行时长；待机/返工；场址；电压；供电；分配覆盖 | 读取经校准且不重叠的工段分表；用实测负荷及运行日志核对共享电表，包含归属待机/返工 | kWh | 每计量班次及批次归属 | 完整声明报告时段 | 所代表涂层厂及相应交接边界 | 每 1 kg 参考流 | 电表校准；电压/地域证据；运行及分配记录 |
| cp_finish_energy | finish_pack | 整理电力 | 实测记录 | 批号；工段电表；起止千瓦时；负荷；运行时长；待机/返工；场址；电压；供电；分配覆盖 | 读取经校准且不重叠的工段分表；用实测负荷及运行日志核对共享电表，包含归属待机/返工 | kWh | 每计量班次及批次归属 | 完整声明报告时段 | 所代表涂层厂及相应交接边界 | 每 1 kg 参考流 | 电表校准；电压/地域证据；运行及分配记录 |
| cp_clean_energy | equipment_clean | 清洗电力 | 实测记录 | 批号；工段电表；起止千瓦时；负荷；运行时长；待机/返工；场址；电压；供电；分配覆盖 | 读取经校准且不重叠的工段分表；用实测负荷及运行日志核对共享电表，包含归属待机/返工 | kWh | 每计量班次及批次归属 | 完整声明报告时段 | 所代表涂层厂及相应交接边界 | 每 1 kg 参考流 | 电表校准；电压/地域证据；运行及分配记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | all inventory rows | 用归属于批次的交换量除以合格成品涂层布净质量（千克）；保留各交换分子单位。最终产品行是1千克。 | attributable batch exchange; accepted net mass; cp_output | 每1千克参考流的交换量 |  |
| convert_electricity | mix_electricity; dry_electricity; finish_electricity; clean_electricity | 批次归一化前用3.6MJ/kWh把实测千瓦时换算为兆焦；保留公开净热值属性和能量单位组。 | metered kWh; cp_mix_energy; cp_dry_energy; cp_finish_energy; cp_clean_energy; cp_output | 每1千克参考流的兆焦 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_composition | ready_woven_pet; aqueous_pu_dispersion; finished_coated_fabric | 核验 PET 组成与此前整理态、PU 牌号、助剂、湿/干组成、干涂层增重及实际批次验收。供应商薄膜检测或宣传不能证明成品布质量/寿命。 | 供应商规格；安全数据表；批次固含量及布料检测 |
| dq_balance | all rows | 将基布及非挥发 PU 与合格复合布、边料、废品、残浆及库存/返工核对；另核对涂层带水与残余水分、冲洗/库存及水蒸气。未闭合平衡须调查，不得假设产率/损失。 | 称量；固含量/水分；独立材料/水平衡及不确定性 |
| dq_period | all rows | 匹配完整且代表性的报告时段产量、清洗、维护、开机及返工覆盖。记录校准、缺失字段、分配及全部实际辅助材料组件。不预设温度、能耗、配方或产率。 | 时段日志；校准；归属电表及库存记录 |
| dq_release | drying_water_vapour; drying_ammonia_air; pu_rinse_wastewater | 评估依配方而定的挥发物及捕集路线。NH3 是条件排放，不是所有水性分散体都会排氨。宣称排放完整前须对每个实际相关物种单列；未知排放、未测残留及接收方处理缺口须明确。 | 组成审核；代表性排放检测；控制；处理交接证据 |
| dq_upstream | linked background supply | 匹配 PET 加工态、再生比例、PU 配方、电力地域/电压、水供应及包装组成。披露任何缺失的上游染色、水处理或运输关联。 | 供应商记录及匹配的上游数据集引用 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | product and route | 要求声明 PET/PUD 画像、电干燥机及未处理冲洗废水交接；拒绝其他涂层化学路线、湿法凝固、复合或27997全部覆盖的声明。 | unsd-cpc3-notes-2025 |
| validate_reference | all rows | 要求正的实测复合布净产量、finished_coated_fabric 参考关联、排除包装及统一每1千克分母。按面积采集的原始数据须有实际同牌号质量换算。 |  |
| validate_balances | all processes | 要求材料、水及能源对账，包含不重叠电表、内部退料、返工、库存变化及条件流证据。实测废水不等于淡水排放；捕集冷凝水不等于空气排放。 |  |
| validate_identity | UUID-bearing rows | 复核实际流类型、组成、供应路线、公开参考属性、单位组、即时环境介质/子介质及官方中文流名。披露空身份，不得强配通用防水织物或纯树脂到输出/PUD 投入。 |  |
| validate_complete | dataset claim | 要求每项真实化学品、公用工程、包装、废物及基本流物种均为具体交换并匹配采集协议。条件行缺失须有证据；不确定或跳过的排放检查不能称为完整校验。 | jrc-textiles-bref-2023 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 牌号明确的水性 PU 直接涂覆机织 PET 卷装布制造前景 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅经审查后：声明的单道涂覆、电干燥画像，配以匹配的上游供应商及场外废物处理数据集，并披露运输 |
| excluded_use | 整个分类、其他纤维/化学/复合路线、合成革、制成包、消费者使用/寿命、健康或监管批准、自动完整从摇篮到厂门 |
| required_metadata | 全部限定信息；工厂及时段；合格净产量；实测面积换算；湿/干涂层基准；独立公用工程；库存/返工；包装；实际废水接收方；上游及运输关联；条件流存在性；未解决身份 |
| required_quality_disclosure | 计量及分配覆盖；水/材料闭合及不确定性；挥发物种筛查及检出限；排除路线；不完整上游/处理关联；候选证据限制 |
| update_trigger | 基布整理/纤维、再生成分、涂层组成/层数、另加化学品、供热路线、场址供应、包装、废物去向、排放控制、新测量或核验身份发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-notes-2025 | official_guidance | UNSD,CPC Version3.0 Explanatory Notes,30June2025,PDF/printed p.129,27996/27997. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于宽泛分类及邻接轮胎帘子布区分；没有27997详细配方或全部覆盖依据 |
| jrc-textiles-bref-2023 | official_guidance | European Commission JRC,Best Available Techniques Reference Document for the Textiles Industry,EUR31316EN,2023,section2.10.1 printed p.116/PDF151; section2.10.3 printed pp.124–126/PDF159–161. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | 直接涂覆与复合工艺类型；依配方而定的排放筛查。其历史引用示例不是通用必然排放物种、因子、当前合规或定量运行默认值 |
| covestro-dln-w50 | handbook | Covestro,Impranil DLN W50,official product page,Product description,Applications,Form supplied,Film properties and Disclaimer; undated live page,retrieved2026-10-06. https://solutions.covestro.com/en/products/impranil/impranil-dln-w-50_000000000057821292 | 实际水性脂肪族聚酯型 PU 材料及包/箱涂层应用示例；不是工厂配方、PET 基材证明、薄膜至布料性能转移或寿命依据。实际固含量及配方须采集 |

| paltex-pu-woven-2020 | handbook | PALTEX, Recommended Textile – PU Coating, 9 December 2020, Woven constructions and Polyester examples; official page retained 2026-10-06. https://www.paltex.com.tw/recommended-textile-pu-coating/ | 历史机织聚酯水性 PU 市场示例；不采用其宣传的纤维规格、涂层性能、当前配方或电干燥配置。 |
